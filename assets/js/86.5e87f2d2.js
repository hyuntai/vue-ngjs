(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{386:function(t,a,s){"use strict";s.r(a);var n=s(25),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"appendix"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#appendix"}},[t._v("#")]),t._v(" APPENDIX")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"user-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-api"}},[t._v("#")]),t._v(" User API")]),t._v(" "),s("p",[t._v("사용자 프로그램에서 스케줄링 중인 Job 조회 및 수행을 할 수 있도록 사용자 API 를 제공한다.")]),t._v(" "),s("ul",[s("li",[t._v("헤더\n"),s("ul",[s("li",[s("code",[t._v("pcp.h")])])])]),t._v(" "),s("li",[t._v("라이브러리\n"),s("ul",[s("li",[s("code",[t._v("libpcp.so")])])])]),t._v(" "),s("li",[t._v("API\n"),s("ul",[s("li",[s("code",[t._v("pcpGetTodayInfo()")]),t._v(" : Today Job 정보 조회")]),t._v(" "),s("li",[s("code",[t._v("pcpSetJobStatus()")]),t._v(" : Job 상태 변경")]),t._v(" "),s("li",[s("code",[t._v("pcpSetJobAction()")]),t._v(" : Job Action 수행")]),t._v(" "),s("li",[s("code",[t._v("pcpPubCond()")]),t._v(" : Condition 발행")])])])]),t._v(" "),s("p",[s("br"),s("br")]),t._v(" "),s("h3",{attrs:{id:"pcpgettodayinfo-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pcpgettodayinfo-api"}},[t._v("#")]),t._v(" pcpGetTodayInfo() API")]),t._v(" "),s("p",[t._v("Today Job 정보 조회")]),t._v(" "),s("h4",{attrs:{id:"prototype"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prototype"}},[t._v("#")]),t._v(" ProtoType")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("int pcpGetTodayInfo (\n        const char *pzToday,\n        const char *pzRscNm,\n        const char *pzJobNm,\n        const char *pzAppNm,\n        const char *pzGrpNm,\n        PCP_TODAY_INFO ** ppsTodayInfo,\n        int nTimeoutMs);\n")])])]),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[s("code",[t._v("[in] pzToday")]),t._v(" :  Today(YYYYMMDD)"),s("br"),t._v(" "),s("code",[t._v("[in] pzRscNm")]),t._v(" :  Resource 이름"),s("br"),t._v(" "),s("code",[t._v("[in] pzJobNm")]),t._v(" :  Job 이름"),s("br"),t._v(" "),s("code",[t._v("[in] pzAppNm")]),t._v(" :  Application 그룹 이름"),s("br"),t._v(" "),s("code",[t._v("[in] pzGrpNm")]),t._v(" :  Group 그룹 이름"),s("br"),t._v(" "),s("code",[t._v("[out] ppsTodayInfo")]),t._v(" : Today Job 정보"),s("br"),t._v(" "),s("code",[t._v("[in] nTimeoutMs")]),t._v(" : Timeout (milliseconds)")]),t._v(" "),s("h4",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("입력받은 인자를 조건으로 Today Job 을 조회 한다. "),s("code",[t._v("pzRscNm")]),t._v(", "),s("code",[t._v("pzJobNm")]),t._v(", "),s("code",[t._v("pzAppNm")]),t._v(", "),s("code",[t._v("pzGrpNm")]),t._v(" 이 NULL 일 경우 그 값은 조건에서 제외된다. 조회 내용은 ppsTodayInfo 변수에 저장된다."),s("br"),t._v("\nppsTodayInfo 변수를 사용한 뒤, 메모리 해지를 위해 pcpRelTodayInfo() API 를 수행 해야한다.")]),t._v(" "),s("ul",[s("li",[t._v("사용 구조체")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("typedef struct {\n    char zToday       [  8+1];\n    int  nOrderId     ;\n    int  nRscId       ;\n    int  nJobId       ;\n    char zRscNm       [ 64+1];\n    char zJobNm       [ 64+1];\n    char zApplication [ 64+1];\n    char zGroupNm     [ 64+1];\n    char zExecUser    [ 64+1];\n    char zIsConfirm   [  1+1];\n    char zTimeFrom    [  4+1];\n    char zTimeTo      [  4+1];\n    int  nDurDay      ;\n    char zCyType      [  1+1];\n    char zCyInterval  [  4+1];\n    int  nCyMax       ;\n    int  nCounter     ;\n    int  nStatus      ;\n    int  nAction      ;\n    int  nPid         ;\n    char zFirstTime   [ 14+1];\n    char zStartTime   [ 14+1];\n    char zEndTime     [ 14+1];\n    char zStopFlag    [  1+1];\n    char zSvrNm       [ 64+1];\n} PCP_TODAY_JOB_INFO;\n\ntypedef struct {\n    char zToday     [  8+1];\n    int  nDelCnt    ;\n    int  nCmplCnt   ;\n    int  nErrCnt    ;\n    int  nRunCnt    ;\n    int  nNotRunCnt ;\n    int  nExpCnt    ;\n    int  nHoldCnt   ;\n    int  nTotalCnt  ;\n    PCP_TODAY_JOB_INFO *psJobInfo;\n} PCP_TODAY_INFO;\n")])])]),s("h4",{attrs:{id:"return-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-value"}},[t._v("#")]),t._v(" Return value")]),t._v(" "),s("p",[s("code",[t._v("0")]),t._v(": 성공"),s("br"),t._v(" "),s("code",[t._v("< 0")]),t._v(": 실패")]),t._v(" "),s("h4",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" nRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPCP_TODAY_INFO "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("psTodayInfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Today : 20200224")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Resource : MyResource#1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Applicaion : NULL  // 검색 조건에서 제외됨.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Group : MyGrp")]),t._v("\nnRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pcpGetTodayInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20200224"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyResource#1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyGrp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("psTodayInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// error")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"total count = %d\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" psTodayInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("nTotalCnt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("psTodayInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("nTotalCnt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    PCP_TODAY_JOB_INFO "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("psJobInfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("psTodayInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("psJobInfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"    %05d.%08d\\n"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("i "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("psJobInfo"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("nOrderId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pcpRelTodayInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("psTodayInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// psTodayInfo memory release")]),t._v("\n")])])]),s("h3",{attrs:{id:"pcpreltodayinfo-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pcpreltodayinfo-api"}},[t._v("#")]),t._v(" pcpRelTodayInfo() API")]),t._v(" "),s("p",[t._v("Today Job 메모리 해제")]),t._v(" "),s("h4",{attrs:{id:"prototype-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prototype-2"}},[t._v("#")]),t._v(" ProtoType")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("int pcpRelTodayInfo (PCP_TODAY_INFO * psTodayInfo);\n")])])]),s("h4",{attrs:{id:"parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[s("code",[t._v("[in] psTodayInfo")]),t._v(" Today Job 정보")]),t._v(" "),s("h4",{attrs:{id:"return-value-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-value-2"}},[t._v("#")]),t._v(" Return value")]),t._v(" "),s("p",[s("code",[t._v("0")]),t._v(" 성공")]),t._v(" "),s("h4",{attrs:{id:"description-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("pcpGetTodayInfo() API 에 의해 할당된 메모리를 해지한다. 메모리를 해지 하지 않으면 메모리 누수가 발생한다.")]),t._v(" "),s("h4",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" nRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nPCP_TODAY_INFO "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("psTodayInfo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pcpGetTodayInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20200224"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyResource#1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyGrp"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("psTodayInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// error")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pcpRelTodayInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("psTodayInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"pcpsetjobstatus-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pcpsetjobstatus-api"}},[t._v("#")]),t._v(" pcpSetJobStatus() API")]),t._v(" "),s("p",[t._v("Job 상태를 변경 한다.")]),t._v(" "),s("h4",{attrs:{id:"prototype-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prototype-3"}},[t._v("#")]),t._v(" ProtoType")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("int pcpSetJobStatus(\n        const char *pzToday,\n        int nOrderId,\n        int nJobStatus,\n        int nTimeoutMs)\n")])])]),s("h4",{attrs:{id:"parameters-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[s("code",[t._v("[in] pzToday")]),t._v(" : Today(YYYYMMDD)"),s("br"),t._v(" "),s("code",[t._v("[in] nOrderId")]),t._v(" : Order ID"),s("br"),t._v(" "),s("code",[t._v("[in] nJobStatus")]),t._v(" : 변경 할 Job 상태"),s("br"),t._v(" "),s("code",[t._v("[in] nTimeOutMs")]),t._v(" : Timeout (milliseconds)")]),t._v(" "),s("h4",{attrs:{id:"return-value-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-value-3"}},[t._v("#")]),t._v(" Return value")]),t._v(" "),s("p",[s("code",[t._v("0")]),t._v(" 성공"),s("br"),t._v(" "),s("code",[t._v("<0")]),t._v(" 실패")]),t._v(" "),s("h4",{attrs:{id:"description-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description-3"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Job 상태를 변경 한다.")]),t._v(" "),s("ul",[s("li",[t._v("변경 가능한 Job 상태\n"),s("ul",[s("li",[t._v("JOB_ST_NOTRUNNING")])])])]),t._v(" "),s("h4",{attrs:{id:"example-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Today : 20200224")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OrderId : 2021")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JobStatus : JOB_ST_NOTRUNNING (Not Running)")]),t._v("\nnRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pcpSetJobStatus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20200224"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" JOB_ST_NOTRUNNING"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// not run")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//error")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"pcpsetjobaction-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pcpsetjobaction-api"}},[t._v("#")]),t._v(" pcpSetJobAction() API")]),t._v(" "),s("p",[t._v("Job Action을 수행 한다.")]),t._v(" "),s("h4",{attrs:{id:"prototype-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prototype-4"}},[t._v("#")]),t._v(" ProtoType")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("int pcpSetJobAction (\n        const char *pzToday, \n        int nOrderId, \n        int nJobAction, \n        int nTimeoutMs);\n")])])]),s("h4",{attrs:{id:"parameters-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[s("code",[t._v("[in] pzToday")]),t._v(" : Today(YYYYMMDD)"),s("br"),t._v(" "),s("code",[t._v("[in] nOrderId")]),t._v(" : Order ID"),s("br"),t._v(" "),s("code",[t._v("[in] nJobAction")]),t._v(" : 요청할 Job Action"),s("br"),t._v(" "),s("code",[t._v("[in] nTimeOutMs")]),t._v(" : Timeout (milliseconds)")]),t._v(" "),s("h4",{attrs:{id:"return-value-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-value-4"}},[t._v("#")]),t._v(" Return value")]),t._v(" "),s("p",[s("code",[t._v("0")]),t._v(" 성공"),s("br"),t._v(" "),s("code",[t._v("<0")]),t._v(" 실패")]),t._v(" "),s("h4",{attrs:{id:"description-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description-4"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("Job Action을 수행 한다.")]),t._v(" "),s("ul",[s("li",[t._v("수행 가능한 Action\n"),s("ul",[s("li",[t._v("JOB_AT_RELEASE : Hold 된 Job 경우 Release 요청")]),t._v(" "),s("li",[t._v("JOB_AT_RERUN : Job 재수행 요청")]),t._v(" "),s("li",[t._v("JOB_AT_RUNNOW : Job 즉시 수행 요청")]),t._v(" "),s("li",[t._v("JOB_AT_HOLD : Hold 요청")]),t._v(" "),s("li",[t._v("JOB_AT_FORCED_OK : Job 강제 Complete 요청")])])])]),t._v(" "),s("h4",{attrs:{id:"example-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Today : 20200224")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// OrderId : 2021")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JobStatus : JOB_AT_HOLD (Hold)")]),t._v("\nnRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pcpSetJobAction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20200224"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" JOB_AT_HOLD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Hold 수행  ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//error")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"pcppubcond-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pcppubcond-api"}},[t._v("#")]),t._v(" pcpPubCond() API")]),t._v(" "),s("p",[t._v("Condition 을 발행 한다.")]),t._v(" "),s("h4",{attrs:{id:"prototype-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prototype-5"}},[t._v("#")]),t._v(" ProtoType")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("int pcpPubCond (\n        const char* pzToday, \n        const char *pzCondName, \n        int nTimeoutMs);\n")])])]),s("h4",{attrs:{id:"parameters-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-5"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),s("p",[s("code",[t._v("[in] pzToday")]),t._v(" : Today(YYYYMMDD)"),s("br"),t._v(" "),s("code",[t._v("[in] pzCondName")]),t._v(" : Condtition name"),s("br"),t._v(" "),s("code",[t._v("[in] nTimeoutMs")]),t._v(" : Timeout (milliseconds)")]),t._v(" "),s("h4",{attrs:{id:"return-value-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return-value-5"}},[t._v("#")]),t._v(" Return value")]),t._v(" "),s("p",[s("code",[t._v("0")]),t._v(" 성공"),s("br"),t._v(" "),s("code",[t._v("<0")]),t._v(" 실패")]),t._v(" "),s("h4",{attrs:{id:"description-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description-5"}},[t._v("#")]),t._v(" Description")]),t._v(" "),s("p",[t._v("특정 날짜에 Condtition 을 발행 한다.")]),t._v(" "),s("h4",{attrs:{id:"example-5"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" nRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Today : 2020224")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Condition : MyJob#1_OK")]),t._v("\nnRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pcpPubCond")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20200224"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyJob#1_OK"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nRet "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// error")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("br"),s("br")])])}),[],!1,null,null,null);a.default=e.exports}}]);