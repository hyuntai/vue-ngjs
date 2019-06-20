# Logical Replication


## Table of Contents
[[toc]]
## DB Configuration
1. postgresql.conf  
- NGJS 는 1:1 Active-Standby 이므로 기본 설정은 건들이지 않는다.  
  - listen_address 는 개발중에 외부 Client 접속이 필요하므로 '*'로 기정의 됨
  - 운영서버에 deploy 시 사설 IP Address 만 지정할 수 있음.

```
   listen_addresses = '*'
   wal_level = logical
```
:::tip
Manual 에 나와있는 max_wal_senders, max_replication_slots 는 defaut로 남김
:::
2. pg_hba.conf
```
# host         all            all             db_replica_private_ip_address/32      md5
host    all             all             0.0.0.0/0            md5
```
:::tip
   listen_address 와 마찮가지 이유로 현재 설정 유지
   서버간 방화벽 설정이 되어있다면, 5432 포트 허용
:::
3. 서버 재기동(primary)
```
pg_ctl restart
```

## Synchronization
1. primary db schema *[dump](./#database-dump)*
``` sh
pg_dump ngdb -n public --schema-only -f ngdb-schema.sql
```
2. primary 에 replication 용 role 을 생성하고 권한을 부여한다.
```
ngdb=# create role replication with replication login password 'replication';
CREATE ROLE
ngdb=# grant all privileges on database ngdb to replication;
GRANT
ngdb=# grant all privileges on all tables in schema public to replication;
GRANT
ngdb=# create publication ngjs_pub for all tables;
CREATE PUBLICATION
```
3. primary 에 publication 을 생성한다. (전체 테이블대상)
```
ngdb=# create publication ngjs_pub for all tables;
CREATE PUBLICATION
```
4. standby data 삭제 혹은 database 재 생성. Table Schema만 존재해야 에러가 발생하지 않음)
```
ngdb=# \c postgres
postgres=# drop database ngdb;
postgres=# create database ngdb;
postgres=# \c ngdb
ngdb=# \i ngdb-schema.sql
```
:::tip
설치 자동화를 위해서 truncate script를 준비해야 할 듯
:::
5. standby 에 subscription 을 생성한다.
- 생성과 동시에 replication 이 시작된다. 
  - 초기 Data Copy 부터 실행, 이때 stanby db 에 데이타가 존재하면 dup오류 발생.
- 로그위치: /var/lib/pgsql/10/data/log 
```
CREATE SUBSCRIPTION ngjs_sub 
       CONNECTION 'host=10.1.1.2 port=5432 password=replication user=replication dbname=ngdb'
	   PUBLICATION ngjs_pub 
	   WITH (synchronous_commit=remote_write);
```
[https://www.postgresql.org/docs/10/runtime-config-wal.html](https://www.postgresql.org/docs/10/runtime-config-wal.html)

*`on`*  
> commits will wait until replies from the current synchronous standby(s) indicate they have received the commit record of the transaction and flushed it to disk. This ensures the transaction will not be lost unless both the primary and all synchronous standbys suffer corruption of their database storage.   

*`remote_apply`*  

> commits will wait until replies from the current synchronous standby(s) indicate they have received the commit record of the transaction and applied it, so that it has become visible to queries on the standby(s). 

*`remote_write`*
> commits will wait until replies from the current synchronous standby(s) indicate they have received the commit record of the transaction and written it out to their operating system. 
> This setting is sufficient to ensure data preservation even if a standby instance of PostgreSQL were to crash, 
> but not if the standby suffers an operating-system-level crash, since the data has not necessarily reached stable > storage on the standby.   

*`local`*  
> commits to wait for local flush to disk, but not for replication. 
> This is not usually desirable when synchronous replication is in use, but is provided for completeness.

## Management & Monitoring 

```
select * from pg_publication;
select * from pg_stat_replication;
select * from pg_replication_slots;
select * from pg_subscription;
select * from pg_stat_subscription;
```
- [https://pgdash.io/blog/monitoring-postgres-replication.html](https://pgdash.io/blog/monitoring-postgres-replication.html)
- [https://www.postgresql.org/docs/10/logicaldecoding.html](https://www.postgresql.org/docs/10/logicaldecoding.html)
- [Open Source Monitoring Tool - pgmetrics](https://pgmetrics.io/)

```
ngdb=# select * from pg_stat_replication;
  pid  | usesysid |   usename   | application_name | client_addr | client_hostname | client_port |         backend_start         | backend_xmin |
     state   |  sent_lsn  | write_lsn  | flush_lsn  | replay_lsn | write_lag | flush_lag | replay_lag | sync_priority | sync_state 
	 -------+----------+-------------+------------------+-------------+-----------------+-------------+-------------------------------+--------------+
	 -----------+------------+------------+------------+------------+-----------+-----------+------------+---------------+------------
	  28882 |    19893 | replication | ngjs_sub         | 10.1.1.3    |                 |       46740 | 2019-04-24 14:44:27.388173+09 |             |
  streaming | 0/35E49190 | 0/35E49190 | 0/35E49190 | 0/35E49190 |           |           |            |             0 | async
	(1 row)
```

## Trouble Shooting
[Replication Error 복구방법](https://blog.raveland.org/post/postgresql_lr_en/)  
[Drop Subscription](https://www.postgresql.org/docs/current/sql-dropsubscription.html)
:::tip
When dropping a subscription that is associated with a replication slot on the remote host (the normal state), DROP SUBSCRIPTION will connect to the remote host and try to drop the replication slot as part of its operation.  
This is necessary so that the resources allocated for the subscription on the remote host are released.  
If this fails, either because the remote host is not reachable or because the remote replication slot cannot be dropped or does not exist or never existed, the DROP SUBSCRIPTION command will fail.  
To proceed in this situation, disassociate the subscription from the replication slot by executing ALTER SUBSCRIPTION ... SET (slot_name = NONE).  
After that, DROP SUBSCRIPTION will no longer attempt any actions on a remote host.  
Note that if the remote replication slot still exists, it should then be dropped manually;  
otherwise it will continue to reserve WAL and might eventually cause the disk to fill up. See also Section 31.2.1.

If a subscription is associated with a replication slot, then DROP SUBSCRIPTION cannot be executed inside a transaction block.
:::
```
ngdb=# drop subscription ngjs_sub;
ERROR:  could not connect to publisher when attempting to drop the replication slot "ngjs_sub"
DETAIL:  The error was: FATAL:  password authentication failed for user "replication"
HINT:  Use ALTER SUBSCRIPTION ... SET (slot_name = NONE) to disassociate the subscription from the slot.
ngdb=# ALTER SUBSCRIPTION ngjs_sub SET (slot_name = NONE);
ERROR:  cannot set slot_name = NONE for enabled subscription
# ALTER SUBSCRPTION 전에 먼저 Disable 시켜야 함.
ngdb=# ALTER SUBSCRIPTION ngjs_sub DISABLE;
ALTER SUBSCRIPTION
ngdb=# ALTER SUBSCRIPTION ngjs_sub SET (slot_name = NONE);
ALTER SUBSCRIPTION
ngdb=# drop subscription ngjs_sub;
DROP SUBSCRIPTION
```

- publication 을 drop 해도 replication_slot 남아있는 경우
```
ngdb=# select pg_drop_replication_slot('ngjs_sub');
ERROR:  replication slot "ngjs_sub" is active for PID 25637
```

[https://www.postgresql.org/docs/8.2/sql-drop-owned.html](https://www.postgresql.org/docs/8.2/sql-drop-owned.html)
```
# Replication User 에 허가된 모든 Privileges 삭제
ngdb=# drop owned by replication;
# Replication User 삭제
ngdb=# drop role replication;
# role 을 삭제한 후 
ngdb=# select pg_drop_replication_slot('ngjs_sub');
ERROR:  replication slot "ngjs_sub" is active for PID 20764
# kill backend replication process
ngdb=# select * from pg_terminate_backend(20764);
 pg_terminate_backend 
 ----------------------
  t
 (1 row)
# Drop Replication Slot
ngdb=# select pg_drop_replication_slot('ngjs_sub');
  pg_drop_replication_slot 
  --------------------------
  (1 row)

ngdb=# select * from pg_replication_slots;
 slot_name | plugin | slot_type | datoid | database | temporary | active | active_pid | xmin | catalog_xmin | restart_lsn | confirmed_flush_lsn 
 -----------+--------+-----------+--------+----------+-----------+--------+------------+------+--------------+-------------+---------------------
 (0 rows)
```
## Reference
- [https://www.postgresql.org/docs/10/logical-replication.html](https://www.postgresql.org/docs/10/logical-replication.html)
- [https://pgdash.io/blog/monitoring-postgres-replication.html](https://pgdash.io/blog/monitoring-postgres-replication.html)
- [Comparison of Different Solutions](https://www.postgresql.org/docs/10/different-replication-solutions.html)
- [https://www.digitalocean.com/community/tutorials/how-to-set-up-logical-replication-with-postgresql-10-on-ubuntu-18-04](https://www.digitalocean.com/community/tutorials/how-to-set-up-logical-replication-with-postgresql-10-on-ubuntu-18-04)
- [https://severalnines.com/blog/postgresql-streaming-replication-vs-logical-replication](https://severalnines.com/blog/postgresql-streaming-replication-vs-logical-replication)  
- [https://browndwarf.tistory.com/4](https://browndwarf.tistory.com/4)