# Command
## 현재 접속 Session 확인 및 종료
1. select * from pg_stat_activity where datname=<DATABASE명>;
2. select pg_terminate_backend(PID);