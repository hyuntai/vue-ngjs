(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{435:function(t,e,r){"use strict";r.r(e);var a=r(25),l=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"사용자-메뉴얼"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#사용자-메뉴얼"}},[t._v("#")]),t._v(" 사용자 메뉴얼")]),t._v(" "),r("h2",{attrs:{id:"table-of-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table of Contents")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#table-of-contents"}},[t._v("Table of Contents")])]),r("li",[r("a",{attrs:{href:"#powercontrol-plus-서버-구성-요소"}},[t._v("PowerControl-Plus 서버 구성 요소")]),r("ul",[r("li",[r("a",{attrs:{href:"#job-properties"}},[t._v("Job Properties")])]),r("li",[r("a",{attrs:{href:"#준비작업-new-day-procedure"}},[t._v("준비작업(New Day Procedure)")])]),r("li",[r("a",{attrs:{href:"#스케쥴링-엔진-쓰레드"}},[t._v("스케쥴링 엔진 쓰레드")])]),r("li",[r("a",{attrs:{href:"#이벤트"}},[t._v("이벤트")])]),r("li",[r("a",{attrs:{href:"#file-transfer-type"}},[t._v("File Transfer Type")])])])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"powercontrol-plus-서버-구성-요소"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#powercontrol-plus-서버-구성-요소"}},[t._v("#")]),t._v(" PowerControl-Plus 서버 구성 요소")]),t._v(" "),r("ul",[r("li",[t._v("서버")]),t._v(" "),r("li",[t._v("리소스")]),t._v(" "),r("li",[t._v("Job")])]),t._v(" "),r("h3",{attrs:{id:"job-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#job-properties"}},[t._v("#")]),t._v(" Job Properties")]),t._v(" "),r("ul",[r("li",[t._v("서버명")]),t._v(" "),r("li",[t._v("그룹(Logical)\n"),r("ul",[r("li",[t._v("Application")]),t._v(" "),r("li",[t._v("Group")])])]),t._v(" "),r("li",[t._v("Type\n"),r("ul",[r("li",[t._v("Dummy")]),t._v(" "),r("li",[t._v("Command")]),t._v(" "),r("li",[t._v("File Transfer")])])]),t._v(" "),r("li",[t._v("Command")]),t._v(" "),r("li",[t._v("Status")]),t._v(" "),r("li",[t._v("Schedule")]),t._v(" "),r("li",[t._v("Cyclic")]),t._v(" "),r("li",[t._v("Owner(Server Account)")]),t._v(" "),r("li",[t._v("Valiable")]),t._v(" "),r("li",[t._v("Post Step")]),t._v(" "),r("li",[t._v("Condition\n"),r("ul",[r("li",[t._v("Input Condition")]),t._v(" "),r("li",[t._v("Output Condition")])])])]),t._v(" "),r("h3",{attrs:{id:"준비작업-new-day-procedure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#준비작업-new-day-procedure"}},[t._v("#")]),t._v(" 준비작업(New Day Procedure)")]),t._v(" "),r("ul",[r("li",[t._v("리소스 단위로 설정된 시간에 새로 시작할 Job리스트를 DB에 생성하고,")]),t._v(" "),r("li",[t._v("(첫 번째 리소스라면)이를 스케쥴링하여 실행할 엔진 쓰레드를 기동한다.")])]),t._v(" "),r("h3",{attrs:{id:"스케쥴링-엔진-쓰레드"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#스케쥴링-엔진-쓰레드"}},[t._v("#")]),t._v(" 스케쥴링 엔진 쓰레드")]),t._v(" "),r("ul",[r("li",[t._v("일자 별로 하나의 엔진 쓰레드가 생성되며,")]),t._v(" "),r("li",[t._v("실시간으로 "),r("RouterLink",{attrs:{to:"/manual/manual/guide.html#이벤트"}},[t._v("이벤트")]),t._v("를 모니터링 하면서 조건에 부합하는 Job의 실행을 지시하고,")],1),t._v(" "),r("li",[t._v("그 결과를 DB에 업데이트 한다.")])]),t._v(" "),r("h3",{attrs:{id:"이벤트"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#이벤트"}},[t._v("#")]),t._v(" 이벤트")]),t._v(" "),r("ul",[r("li",[t._v("선행 Job의 완료(정상종료)")])]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("선후행 관계 규칙")]),t._v(" "),r("p",[t._v("Job이 정상적으로 완료되면, 속성에 등록된 Out-Condition이 테이블에 Insert 된다."),r("br"),t._v("\n다른 Job의 Out-Condition이 자신의 In-Condition이름과 일치하면 선후행 관계를 가진다.")])]),t._v(" "),r("ul",[r("li",[t._v("시간")])]),t._v(" "),r("h3",{attrs:{id:"file-transfer-type"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#file-transfer-type"}},[t._v("#")]),t._v(" File Transfer Type")]),t._v(" "),r("ul",[r("li",[t._v("Agent 설치 계정으로 "),r("code",[t._v("su")]),t._v(" 혹은 Agent 계정으로 기동")]),t._v(" "),r("li",[t._v("대상 파일이나 디렉토리는 그룹 RW권한을 부여")]),t._v(" "),r("li",[t._v("SSH 포트가 Open되어야 함.")])])])}),[],!1,null,null,null);e.default=l.exports}}]);