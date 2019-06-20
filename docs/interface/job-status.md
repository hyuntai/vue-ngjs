static EVT_ACTION_MAP_ST Act[JOB_AT_MAX] = 
                                   (현재 Job Status 가능 여부 정의)             (현재 action status 의 가능 여부 정의)

| Action |NRun|Ring|Comp|Err|Kiled|KFail|UnKnow|NAct|Hold|Rele|Rrun|RNow|FOK|Del|UDel|Kill|  
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|NoAct|  0|   0|   0|   0|  0|    0|    0 |  0|   0|   0|   0|   0|   0|  0|  0|   0  |   
|Release|    1|   1|   1|   1|  1|    1|    0 |  0|   1|   0|   0|   0|   0|  0|  0|   0  |  
|Rerun|      0|   0|   1|   1|  1|    0|    0 |  1|   0|   1|   1|   1|   1|  0|  1|   1  |   
|Runnow|     1|   0|   0|   0|  0|    0|    0 |  1|   0|   0|   0|   0|   0|  0|  0|   0  |   
|Hold|       1|   1|   1|   1|  1|    0|    0 |  1|   1|   1|   1|   1|   1|  1|  1|   1  |  
|ForceOk|  1|   0|   0|   1|  1|    0|    0 |  1|   1|   1|   1|   1|   1|  1|  1|   1  |   
|Delete|     1|   1|   1|   1|  1|    1|    0 |  0|   1|   0|   0|   0|   0|  0|  0|   0  |   
|UnDelete|   1|   1|   1|   1|  1|    1|    0 |  0|   0|   0|   0|   0|   0|  1|  0|   0  |   
|Kill|       1|   0|   0|   0|  0|    1|    0 |  1|   1|   1|   1|   1|   1|  1|  1|   1  |   




/// Job status
#define   JOB_ST_NOTRUNNING      0
#define   JOB_ST_RUNNING         1
#define   JOB_ST_COMPLETE         2
#define   JOB_ST_ERROR         3
#define   JOB_ST_KILLED         4
#define   JOB_ST_KILLED_FAIL      5
#define   JOB_AT_UNKNOWN         6
#define   JOB_ST_MAX            7
/// HOLD| DELETE 는???



// Job Action
#define JOB_AT_NOTACTION      0
#define JOB_AT_RELEASE         1
#define   JOB_AT_RERUN         2
#define   JOB_AT_RUNNOW         3
#define   JOB_AT_HOLD            4
#define   JOB_AT_FORCED_OK      5
#define   JOG_AT_DELETE         6
#define   JOG_AT_UNDELETE         7
#define   JOB_AT_KILL            8
#define   JOB_AT_MAX            9


// today_resource_status Rsc 단위상태
#define   RSC_ST_NOTPREPARE   9
#define   RSC_ST_NOTRUNNING   JOB_ST_NOTRUNNING   // 0. 준비완료
#define   RSC_ST_RUNNING      JOB_ST_RUNNING      // 1. 수행중
#define RSC_ST_COMPLETE     JOB_ST_COMPLETE      // 2. complete
#define RSC_ST_ERROR       JOB_ST_ERROR        // 3. Error
#define RSC_ST_HOLD         JOB_AT_HOLD         // 4. Hold