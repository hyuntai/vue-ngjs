# Procedure
## Table of Contents
[[TOC]]
## Create Trigger
```sql
create
    trigger tg_cond after insert or delete or update on
    public.today_cond for each row execute procedure tg_cond();
```                
## Trigger Procedure
```sql
CREATE OR REPLACE FUNCTION public.tg_cond()
RETURNS trigger
LANGUAGE plpgsql
AS $function$
    begin
	    if (TG_OP = 'DELETE') then
		    raise notice '% %', old.cond_date, old.cond_name;
		    perform pg_notify('today_cond', 'D,' || old.cond_name || ',' || old.cond_date);
		elseif (TG_OP = 'INSERT') then
	    	raise notice '% %', new.cond_date, new.cond_name;
	    	perform pg_notify('today_cond', 'I,' || new.cond_name || ',' || new.cond_date);
	    elseif (TG_OP = 'UPDATE') then
	    	raise notice '% %', new.cond_date, new.cond_name;
	    	perform pg_notify('today_cond', 'U,' || new.cond_name || ',' || new.cond_date);
	    end if;
	    RETURN NULL;
    END;
$function$
;
```
## Check Condition  
(수정) right outer join -> left outer join 
```sql
CREATE OR REPLACE FUNCTION public.check_condition(oid integer, mmdd character varying)
RETURNS integer
LANGUAGE plpgsql
AS $function$
declare
	cnt integer := 0;
begin
	select  count(*) into cnt 
	from 
		( select B.today 
		    from public.today_cond_in as A left outer join public.today_cond as B on 
		         ( A.today = B.today and A.cond_name = B.cond_name) 
		    where A.order_id = oid and A.cond_date = mmdd) as RES
	where RES.today is null;

    raise notice '(not completed) prejob count = %', cnt;
	return cnt;
	
end; $function$
;
```