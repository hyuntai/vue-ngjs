# 인터페이스 정의
Client 와 서버구간의 Request/Reply 항목을 정의한다.
:::tip
Tip Box!
:::

## Table of Contents
<!-- TOC depthFrom:2 depthTo:2 updateOnSave:false -->

- [Job 전체목록조회](#job-전체목록조회)
- [PUSH 메세지](#push-메세지)

<!-- /TOC -->
## Title 1
## Job 전체목록조회
- Message Id 
  - `1120`
   
- Request
```
{
  "today":"YYYYMMDD"
}
```
- Reply
```
{
  "today":"YYYYMMDD"
  ,"resources":
    [
      {
        "resourceId":1234567890
        ,"resourceName":"resourceName"
        ,"serverName":"serverName"
        ,"orderTm":"HHMM"
        ,"description":"description"
        ,"jobs":
          [ 
            {
              "orderId":1234567890
              ,"jobId":1234567890
              ,"jobNm":"jobname"
              ,"description":"description"
              ,"application":"app"
              ,"groupNm":"group"
              ,"nodeId":"nodeid"
              ,"execUser":"user"
              ,"author":"auth"
              ,"jobType":"C"           // D:Dummy, C:Command
              ,"argument":"ls -al"     // Command
              ,"isconfirm":"N"         // Y/N
              ,"timeFrom":"hhmm"
              ,"timeTo":"hhmm"
              ,"calendar":"calendar"
              ,"maxRerun":123456       //
              ,"durDay":123456         // ??
              ,"cyType":"T"            // T:Target ???
              ,"cyInterval":123456
              ,"cyMax":123456
              ,"dateFrom":"YYYYMMDD"
              ,"dateTo":"YYYYMMDD"
              ,"counter":1234
              ,"status":0
              ,"action":0
              ,"pid":12345678
              ,"startTime":"YYYYMMDDhhmmss"
              ,"endTime":"YYYYMMDDhhmmss"
              ,"inconds":
                [
                  {
                    "name":"name"
                    ,"andOr":"AND"
                    ,"condDate":"YYMMDD"
                  }
                  ,
                  ...
                ]
              ,"outconds":
                [
                  {
                    "name":"name"
                    ,"sign":"ADD"
                    ,"condDate":"YYMMDD"
                  }
                  ,
                  ...
                ]
            }
            ,
            ...
          ]
      }
      ,
      ...
    ]
}
```
## PUSH 메세지
## FAQ
### End Of Doc
