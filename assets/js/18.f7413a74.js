(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{459:function(t,r,e){"use strict";e.r(r);var n=e(25),a=Object(n.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"powercontrol-plus-apis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#powercontrol-plus-apis"}},[t._v("#")]),t._v(" PowerControl-Plus APIs")]),t._v(" "),e("h3",{attrs:{id:"상태-조회"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#상태-조회"}},[t._v("#")]),t._v(" 상태 조회")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("API 구조")]),t._v(" "),e("ul",[e("li",[t._v("특정 일자에 그룹단위의 Job 상태를 조회")]),t._v(" "),e("li",[t._v("결과를 리스트로 수신")]),t._v(" "),e("li",[t._v("Result Set 으로 부터 개별 값을 구하는 Api 별도 제공")])])]),t._v(" "),e("li",[e("p",[t._v("입력 Argument")]),t._v(" "),e("ul",[e("li",[t._v("일자")]),t._v(" "),e("li",[t._v("그룹 혹은 JobName\n"),e("ul",[e("li",[t._v("리소스, App, Group, Job name")])])]),t._v(" "),e("li",[t._v("Sample")])])])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('// "AP_GRP"에  속하는 Job 리스트를 상태값과 함께 요청\n// return value => 0보다 크면 Job Count, -1: Error\n// 서버로 요청 함수는 하나로 통합하고, 아래 개별 함수의 조합을 Wrapping 하여 제공할 수 있음\n// Type: 1-리소스, 2-App, 3-Group, 4-JobName ...\nnSts = pcpGetStatus( \'20191001\', "AP_GRP", 1, **buffer);\t\nnTot = pcpGetTotalCnt( buffer );\nnErr = pcpGetErrCnt( buffer );\t\nnOk = pcpGetCmplCnt( buffer );\npcpFree( buffer );\t// 내부적으로 할당한 Job 리스트 free\n')])])]),e("ul",[e("li",[t._v("Output Struct\n"),e("ul",[e("li",[t._v("Summary (tot,ok,nok,notrun,noagent,run,unknown,notenough)")]),t._v(" "),e("li",[t._v("Job List\n"),e("ul",[e("li",[t._v("name, status")])])])])])]),t._v(" "),e("h3",{attrs:{id:"상태-업데이트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#상태-업데이트"}},[t._v("#")]),t._v(" 상태 업데이트")]),t._v(" "),e("h3",{attrs:{id:"조치"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#조치"}},[t._v("#")]),t._v(" 조치")]),t._v(" "),e("ul",[e("li",[t._v("그룹 단위 일괄 재실행 function")])])])}),[],!1,null,null,null);r.default=a.exports}}]);