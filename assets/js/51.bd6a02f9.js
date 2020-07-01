(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{419:function(e,t,o){"use strict";o.r(t);var v=o(25),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"배치작업-관리"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#배치작업-관리"}},[e._v("#")]),e._v(" 배치작업 관리")]),e._v(" "),o("h2",{attrs:{id:"table-of-contents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[e._v("#")]),e._v(" Table Of Contents")]),e._v(" "),o("p"),o("div",{staticClass:"table-of-contents"},[o("ul",[o("li",[o("a",{attrs:{href:"#table-of-contents"}},[e._v("Table Of Contents")])]),o("li",[o("a",{attrs:{href:"#리소스"}},[e._v("리소스")])]),o("li",[o("a",{attrs:{href:"#master-jobs"}},[e._v("Master Jobs")]),o("ul",[o("li",[o("a",{attrs:{href:"#리소스-등록"}},[e._v("리소스 등록")])]),o("li",[o("a",{attrs:{href:"#리소스-삭제"}},[e._v("리소스 삭제")])])])]),o("li",[o("a",{attrs:{href:"#master-job-editor"}},[e._v("Master Job Editor")]),o("ul",[o("li",[o("a",{attrs:{href:"#job-신규-등록"}},[e._v("Job 신규 등록")])]),o("li",[o("a",{attrs:{href:"#job-삭제"}},[e._v("Job 삭제")])]),o("li",[o("a",{attrs:{href:"#job-복구-undelete"}},[e._v("Job 복구(Undelete)")])]),o("li",[o("a",{attrs:{href:"#copy-to"}},[e._v("Copy To")])]),o("li",[o("a",{attrs:{href:"#move-to"}},[e._v("Move To")])]),o("li",[o("a",{attrs:{href:"#job-order"}},[e._v("Job Order")])]),o("li",[o("a",{attrs:{href:"#컨텍스트-메뉴"}},[e._v("컨텍스트 메뉴")])]),o("li",[o("a",{attrs:{href:"#데이타-저장-및-배포관리"}},[e._v("데이타 저장 및 배포관리")])])])])])]),o("p"),e._v(" "),o("h2",{attrs:{id:"리소스"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#리소스"}},[e._v("#")]),e._v(" 리소스")]),e._v(" "),o("ul",[o("li",[e._v("배치 작업의 묶음을 리소스라 한다.")]),e._v(" "),o("li",[e._v("일반적으로 배치 서버를 공유하는 비지니스 단위로 할당 하며 "),o("code",[e._v("Lock")]),e._v("을 획득하고 Job에 대해 변경/저장/배포하는 단위가 된다.")]),e._v(" "),o("li",[e._v("준비작업(New Day Procedure)을 수행하는 단위이다. "),o("code",[e._v("Order Time")]),e._v("을 속성으로 가지고 Type에 따라 자동으로 준비작업이 진행될지 수작업으로 진행될지 여부가 결정된다.")]),e._v(" "),o("li",[e._v("Job 이름은 중복을 허용하지만 리소스 이름은 서버에서 유일해야 한다.")])]),e._v(" "),o("h2",{attrs:{id:"master-jobs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#master-jobs"}},[e._v("#")]),e._v(" Master Jobs")]),e._v(" "),o("br"),e._v(" "),o("img",{attrs:{src:"/menu-masterjobs.png"}}),e._v(" "),o("p",[e._v("리소스 조회, 등록, 변경, 삭제 기능을 지원한다.\n리소스를 선택하고 "),o("img",{attrs:{src:"/btn-edit-open.png"}}),e._v(" 을 누르면 Job 편집화면이 열린다.")]),e._v(" "),o("img",{attrs:{src:"/masterjobs.png"}}),e._v(" "),o("h3",{attrs:{id:"리소스-등록"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#리소스-등록"}},[e._v("#")]),e._v(" 리소스 등록")]),e._v(" "),o("p",[e._v("화면 상단 "),o("img",{attrs:{src:"/ic_new_001.png",alt:"image"}}),e._v(" 버튼을 클릭한다.")]),e._v(" "),o("img",{attrs:{src:"/new-resource.png"}}),e._v(" "),o("br"),e._v(" "),o("p",{staticStyle:{"text-align":"center"}},[e._v(" [step 1. New - 생성] ")]),e._v(" "),o("img",{attrs:{src:"/new-resource-result.png",height:"120",width:"800"}}),e._v(" "),o("p",{staticStyle:{"text-align":"center"}},[e._v(" [step 2. Write - 저장] ")]),e._v(" "),o("img",{attrs:{src:"/masterjobs-write.png",height:"120",width:"800"}}),e._v(" "),o("p",{staticStyle:{"text-align":"center"}},[e._v(" [step 3. Lock - 잠금] ")]),e._v(" "),o("img",{attrs:{src:"/masterjobs-lock.png",height:"120",width:"800"}}),e._v(" "),o("p",{staticStyle:{"text-align":"center"}},[e._v(" [step 4. Uload - 배포] ")]),e._v(" "),o("img",{attrs:{src:"/masterjobs-upload.png",height:"120",width:"800"}}),e._v(" "),o("h3",{attrs:{id:"리소스-삭제"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#리소스-삭제"}},[e._v("#")]),e._v(" 리소스 삭제")]),e._v(" "),o("ul",[o("li",[e._v("삭제할 리소스를 체크하고 Lock을 획득한다.")]),e._v(" "),o("li",[o("img",{attrs:{src:"/ic_delete_001.png",alt:"image"}}),e._v(" 버튼을 눌러 삭제하고, Wirte -> Upload 순으로 진행한다.")]),e._v(" "),o("li",[e._v("삭제된 리소스는 "),o("img",{attrs:{src:"/chk-show-deleted.png"}}),e._v(" 를 선택하면 조회가 가능하다.")]),e._v(" "),o("li",[e._v("삭제된 리소스는 "),o("img",{attrs:{src:"/ic-undelete.png"}}),e._v(" 으로 복구 할 수 있다.")])]),e._v(" "),o("h2",{attrs:{id:"master-job-editor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#master-job-editor"}},[e._v("#")]),e._v(" Master Job Editor")]),e._v(" "),o("p",[e._v("DB로 부터 Job 정보를 Load 하여 Flowchart 형태로 확인하고, Job 변경관리를 도와주는 도구이다."),o("br"),e._v("\nToday Order, Copy To/Move To 등의 부가기능도 제공한다.")]),e._v(" "),o("h3",{attrs:{id:"job-신규-등록"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#job-신규-등록"}},[e._v("#")]),e._v(" Job 신규 등록")]),e._v(" "),o("p",[e._v("Editor는 리소스 관리 화면에서 "),o("img",{attrs:{src:"/btn-edit-open.png"}}),e._v("를 클릭하거나, Import 를 하면 열린다.")]),e._v(" "),o("ol",[o("li",[e._v("리소스 "),o("code",[e._v("Lock")]),e._v(" 획득")])]),e._v(" "),o("img",{attrs:{src:"/new-job-lock.png",height:"400"}}),e._v(" "),o("ul",[o("li",[o("code",[e._v("Resource 영역 컨텍스트 메뉴")]),e._v(" -> "),o("code",[e._v("Resource")]),e._v(" -> "),o("code",[e._v("Lock")]),e._v(" 클릭")]),e._v(" "),o("li",[e._v("Lock 을 획득하면 다음과 같이 Resource 이름 오른쪽에 Lock 정보를 확인할 수 있다.")])]),e._v(" "),o("img",{attrs:{src:"/new-job-text.png"}}),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Job 추가")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Resource 영역 컨텍스트 메뉴")]),e._v(" -> "),o("code",[e._v("Add Job")]),e._v(" 클릭으로 "),o("code",[e._v("Job Properties")]),e._v(" 화면 Open")]),e._v(" "),o("li",[o("code",[e._v("Job Properties")]),e._v(" 화면에서 Job 상세 정보 입력 ("),o("code",[e._v("Job Properties")]),e._v(" 화면 참고)")]),e._v(" "),o("li",[e._v("Job 등록을 하면 다음과 같이 새로운 다이어그램이 생성된다."),o("br"),e._v(" "),o("img",{attrs:{src:"/MasterJob_005_AddJob1.png",alt:"image"}})]),e._v(" "),o("li",[e._v("Job 복사기능으로도 새로운 Job 을 생성 할 수 있다. "),o("code",[e._v("Job 다이어그램 컨텍스트 메뉴")]),e._v(" -> "),o("code",[e._v("Copy(&Edit)")]),e._v(" 혹은 "),o("code",[e._v("Copy")])])]),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[o("code",[e._v("Write")]),e._v(" 수행")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Resource 영역 컨텍스트 메뉴")]),e._v(" -> "),o("code",[e._v("Resource")]),e._v(" -> "),o("code",[e._v("Write")]),e._v(" 클릭")]),e._v(" "),o("li",[e._v("Write 가 수행되면 다음과 같이 다이그램 상태가 바뀐다."),o("br"),e._v(" "),o("img",{attrs:{src:"/MasterJob_006_Write1.png",alt:"image"}})])]),e._v(" "),o("ol",{attrs:{start:"4"}},[o("li",[o("code",[e._v("Upload")]),e._v(" 수행")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Resource 영역 컨텍스트 메뉴")]),e._v(" -> "),o("code",[e._v("Resource")]),e._v(" -> "),o("code",[e._v("Upload")]),e._v(" 클릭")])]),e._v(" "),o("h3",{attrs:{id:"job-삭제"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#job-삭제"}},[e._v("#")]),e._v(" Job 삭제")]),e._v(" "),o("p",[e._v("삭제 전 "),o("code",[e._v("Resource Lock")]),e._v(" 및 삭제 후 "),o("code",[e._v("Write")]),e._v("/"),o("code",[e._v("Update")]),e._v(" 는 Job 등록과 동일하다.")]),e._v(" "),o("ol",[o("li",[o("code",[e._v("Resoruce Lock")]),e._v(" 획득")]),e._v(" "),o("li",[e._v("다이어그램 에서 삭제 할 Job 선택 및 "),o("code",[e._v("Delete")]),e._v(" 수행")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Job 다이어그램 컨텍스트 메뉴")]),e._v(" -> "),o("code",[e._v("Delete")]),e._v(" 클릭")])]),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[o("code",[e._v("Wrtie")]),e._v(" 수행")]),e._v(" "),o("li",[o("code",[e._v("Upload")]),e._v(" 수행")])]),e._v(" "),o("h3",{attrs:{id:"job-복구-undelete"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#job-복구-undelete"}},[e._v("#")]),e._v(" Job 복구(Undelete)")]),e._v(" "),o("p",[e._v("이미 삭제된 Job 에 대해서 복구가 가능하다. 복구 전 "),o("code",[e._v("Resource Lock")]),e._v(" 및 복구 후 "),o("code",[e._v("Write")]),e._v("/"),o("code",[e._v("Update")]),e._v(" 는 Job 등록과 동일하다.")]),e._v(" "),o("img",{attrs:{src:"/job-undelete.png"}}),e._v(" "),o("ol",[o("li",[o("code",[e._v("Resoruce Lock")]),e._v(" 획득")]),e._v(" "),o("li",[o("code",[e._v("Undelete list")]),e._v(" 화면 Open\n"),o("ul",[o("li",[e._v("Resource 영역 컨텍스트 메뉴 -> "),o("code",[e._v("Undelete")]),e._v(" 클릭")])])]),e._v(" "),o("li",[o("a",{attrs:{href:"#undelete-%ED%99%94%EB%A9%B4"}},[o("code",[e._v("Undelete 화면")])]),e._v(" 에서 Undelete 수행")]),e._v(" "),o("li",[o("code",[e._v("Wrtie")]),e._v(" 수행")]),e._v(" "),o("li",[o("code",[e._v("Upload")]),e._v(" 수행")])]),e._v(" "),o("h3",{attrs:{id:"copy-to"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#copy-to"}},[e._v("#")]),e._v(" Copy To")]),e._v(" "),o("p",[e._v("연결된 Job의 일부 그룹을 다른 Job의 후행으로 붙여넣기를 할 수 있다.")]),e._v(" "),o("ul",[o("li",[e._v("Copy To 절차")])]),e._v(" "),o("img",{attrs:{src:"/copyto-proc.png"}}),e._v(" "),o("ol",[o("li",[e._v("Shift 를 누르고 복사하고자 하는 그룹의 Root Job을 Select 상태로 만든다.")]),e._v(" "),o("li",[e._v("붙여넣기를 하고자하는 Job 위에 마우스를 올리고 우클릭 -> Copy To를 선택한다.")]),e._v(" "),o("li",[e._v("복사후 생성될 Job 이름의 prefix를 입력한다.")]),e._v(" "),o("li",[e._v("OK버튼 클릭")])]),e._v(" "),o("ul",[o("li",[e._v("Copy To 결과")])]),e._v(" "),o("img",{attrs:{src:"/copyto-result.png"}}),e._v(" "),o("h3",{attrs:{id:"move-to"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#move-to"}},[e._v("#")]),e._v(" Move To")]),e._v(" "),o("p",[e._v("연결된 Job의 일부 그룹을 다른 Job의 후행으로 이동시킬 수 있다.")]),e._v(" "),o("ul",[o("li",[e._v("Move To 절차")])]),e._v(" "),o("img",{attrs:{src:"/moveto-proc.png"}}),e._v(" "),o("ol",[o("li",[e._v("Shift 를 누르고 이동하고자 하는 그룹의 Root Job을 Select 상태로 만든다.")]),e._v(" "),o("li",[e._v("붙여넣기를 하고자하는 Job 위에 마우스를 올리고 우클릭 -> Move To를 선택한다.")])]),e._v(" "),o("ul",[o("li",[e._v("Move To 결과")])]),e._v(" "),o("img",{attrs:{src:"/moveto-result.png"}}),e._v(" "),o("h3",{attrs:{id:"job-order"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#job-order"}},[e._v("#")]),e._v(" Job Order")]),e._v(" "),o("p",[e._v("개별 Job을 동적으로 준비작업 수행 할 수 있다.")]),e._v(" "),o("ul",[o("li",[e._v("Job Order 절차")])]),e._v(" "),o("img",{attrs:{src:"/today-order.png",height:"300"}}),e._v(" "),o("ol",[o("li",[e._v("Order Job 선택")]),e._v(" "),o("li",[e._v("선택 메뉴에서 Order Date를 확인하고, 옵션을 선택한다.")]),e._v(" "),o("li",[e._v("OK버튼 클릭")])]),e._v(" "),o("ul",[o("li",[e._v("Job Order 결과")])]),e._v(" "),o("img",{attrs:{src:"/today-order-res.png",height:"340"}}),e._v(" "),o("ul",[o("li",[e._v("Order Option\n"),o("ul",[o("li",[o("code",[e._v("OrderDate")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("ODAT")]),e._v(" (시스템일자) 혹은 사용자 선택")])])]),e._v(" "),o("li",[o("code",[e._v("Upload Job and Ordering")]),e._v(" : 변경(write) 된 Job 인 경우, Upload 수행 후 Order를 수행한다.")]),e._v(" "),o("li",[o("code",[e._v("Force Order(Ignore Schedule data)")]),e._v(" : 스케쥴링 조건에 맞지 않더라도 강제로 Order 한다.")]),e._v(" "),o("li",[o("code",[e._v("Order With Hold")]),e._v(" : Hold 상태로 Order 한다.")])])])]),e._v(" "),o("h3",{attrs:{id:"컨텍스트-메뉴"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#컨텍스트-메뉴"}},[e._v("#")]),e._v(" 컨텍스트 메뉴")]),e._v(" "),o("h4",{attrs:{id:"resource-영역-켄텍스트-메뉴"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resource-영역-켄텍스트-메뉴"}},[e._v("#")]),e._v(" Resource 영역 켄텍스트 메뉴")]),e._v(" "),o("p",[o("img",{attrs:{src:"/MasterJob_004_ContextMenu3.png",alt:"image"}})]),e._v(" "),o("ul",[o("li",[e._v("컨텍스트 메뉴 설명\n"),o("ul",[o("li",[o("code",[e._v("Add Job")]),e._v(" : 새로운 Job 추가 (Job preperties 화면 Open)")]),e._v(" "),o("li",[o("code",[e._v("View")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Write List")]),e._v(" : Write 대상 출력 화면 Open")]),e._v(" "),o("li",[o("code",[e._v("Upload List")]),e._v(" : Upload 대상 출력 화면 Open")]),e._v(" "),o("li",[o("code",[e._v("All List")]),e._v(" : Write List, Update List 출력 화면 Open")])])]),e._v(" "),o("li",[o("code",[e._v("Resource")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Lock")]),e._v(" : Resource Lock 획득")]),e._v(" "),o("li",[o("code",[e._v("Unlock")]),e._v(" : Resource Lock 반납")]),e._v(" "),o("li",[o("code",[e._v("Download")]),e._v(" : 마지막으로 Upload (배포) 했던 내용 Download (Overwrite)")]),e._v(" "),o("li",[o("code",[e._v("Write")]),e._v(" : 작업중인 Job 정보 DB 저장 (배포 아님)")]),e._v(" "),o("li",[o("code",[e._v("Reload")]),e._v(" : Resource 다시 Load")]),e._v(" "),o("li",[o("code",[e._v("Upload")]),e._v(" : DB 에 저장된 내용 배포")])])]),e._v(" "),o("li",[o("code",[e._v("Undelete")]),e._v(" : Deleted Job 리스트 화면 Open (삭제했던 Job 복구 가능)")]),e._v(" "),o("li",[o("code",[e._v("Export")]),e._v(" : 등록된 Resource, Job 정보를 json 형태의 파일로 출력")]),e._v(" "),o("li",[o("code",[e._v("Import")]),e._v(" : Json 형태의 Resource, Job 정보를 화면으로 Load")]),e._v(" "),o("li",[o("code",[e._v("Reset Master Editor")]),e._v(" : Master Jobs 화면 Open")]),e._v(" "),o("li",[o("code",[e._v("Collapse")]),e._v(" : 확장 되어 있는 Resource 영역을 축소 함")]),e._v(" "),o("li",[o("code",[e._v("Expend")]),e._v(": 축소 되어 있는 Resource 영역을 확장 함")]),e._v(" "),o("li",[o("code",[e._v("Job Order All")]),e._v(" : 해당 Resource 에 등록되어 있는 모든 Job에 대해 Job Order 수행")])])])]),e._v(" "),o("h4",{attrs:{id:"job-다이어그램-컨텍스트-메뉴"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#job-다이어그램-컨텍스트-메뉴"}},[e._v("#")]),e._v(" Job 다이어그램 컨텍스트 메뉴")]),e._v(" "),o("p",[o("img",{attrs:{src:"/MasterJob_004_ContextMenu4.png",alt:"image"}})]),e._v(" "),o("ul",[o("li",[e._v("컨텍스트 메뉴 설명\n"),o("ul",[o("li",[o("code",[e._v("Copy(&Edit)")]),e._v(" :  선택된 Job 복사 (새로운 Job 추가) 후 Job preperties 화면 Open")]),e._v(" "),o("li",[o("code",[e._v("Copy")]),e._v(" :  선택된 Job 복사 (새로운 Job 추가)")]),e._v(" "),o("li",[o("code",[e._v("Delete")]),e._v(" :선택된 Job 삭제")]),e._v(" "),o("li",[o("code",[e._v("Clear")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Prerelation")]),e._v(" : 선행 Job Relation 삭제 (In Condition 삭제)")]),e._v(" "),o("li",[o("code",[e._v("Postrelation")]),e._v(" : 후행 Job Relation 삭제 (Out Condition 삭제)")])])]),e._v(" "),o("li",[o("code",[e._v("Order Job")]),e._v(" : 선택된 Job 을 특정 날짜로 준비작업 즉시 수행")]),e._v(" "),o("li",[o("code",[e._v("Properties")]),e._v(" : Job Preperties 화면 Open")])])])]),e._v(" "),o("h3",{attrs:{id:"데이타-저장-및-배포관리"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#데이타-저장-및-배포관리"}},[e._v("#")]),e._v(" 데이타 저장 및 배포관리")]),e._v(" "),o("ul",[o("li",[e._v("중요 데이타인 "),o("strong",[e._v("리소스, 캘린더, Job")]),e._v(" 정보는 변경 후에 "),o("code",[e._v("write")]),e._v("와 "),o("code",[e._v("upload")]),e._v("를 완료해야 서버에 반영됨\n"),o("ul",[o("li",[o("code",[e._v("wirte")]),e._v(" : 화면에서 변경한 데이터를 DB에 저장한다.")]),e._v(" "),o("li",[o("code",[e._v("upload")]),e._v(" : 일종의 배포 과정으로 DB에 마지막으로 저장된 데이터를 서버 적용 대상 버전으로 변경")]),e._v(" "),o("li",[o("code",[e._v("download")]),e._v(" : 마지막으로 저장된 레크드를 upload 상태의 데이터로 대체")])])])])])}),[],!1,null,null,null);t.default=_.exports}}]);