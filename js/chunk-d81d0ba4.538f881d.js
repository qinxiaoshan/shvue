(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d81d0ba4"],{"06a1":function(e,t,a){},"164f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sh-content"},[a("div",{staticClass:"container"},[a("ShHeader",{attrs:{ghost:"",full:""}},[a("span",{staticClass:"courseCenterPageTitle",attrs:{slot:"title"},slot:"title"},[e._v("团队管理")]),a("div",{attrs:{slot:"extra"},slot:"extra"},[a("Form",{attrs:{inline:""}},[a("FormItem",{staticClass:"mb-0"},[a("Input",{directives:[{name:"input-filter",rawName:"v-input-filter"}],attrs:{type:"text",search:"",placeholder:"请输入小组名称",clearable:""},model:{value:e.searchname,callback:function(t){e.searchname="string"===typeof t?t.trim():t},expression:"searchname"}})],1),a("FormItem",{staticClass:"mb-0 mr-0"},[a("Button",{attrs:{type:"primary"},on:{click:e.handleKeyGroup}},[e._v("一键分组")])],1)],1)],1)]),a("ShHeader",{attrs:{title:"分配组员",theme:"primary"},on:{back:e.routerback}}),a("TrainingCourseTeamAllotList",{ref:"teamallotlist",staticClass:"mt-3"})],1)])},i=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"teamGroupwrap",class:{open:e.collapsed}},[a("div",{staticClass:"teamGrouplist"},[a("ShLoading",{attrs:{loading:e.dataloading}}),e._m(0),a("div",{staticClass:"teamGrouplistbody"},[e._l(e.dataSourse,(function(t,n){return[a("div",{key:n,staticClass:"teamGrouplistitem",class:{active:e.activeGroup(t.teamId)}},[a("div",{staticClass:"groupname"},[e._v(e._s(t.teamName))]),a("div",{staticClass:"grouptime"},[e._v(e._s(t.teamCreateDate))]),a("div",{staticClass:"groupaction"},[a("Button",{attrs:{type:"default",size:"small"},nativeOn:{click:function(a){return e.handleTeamGroupInit(t)}}},[e._v("初始化")]),a("Button",{attrs:{type:e.activeGroup(t.teamId)&&e.collapsed?"primary":"default",size:"small"},nativeOn:{click:function(a){return e.handleTeamGroupEdit(t)}}},[e._v("选择组员")])],1),e.groupStuList(t.teamId).length>0?a("div",{staticClass:"grouptogglebox"},[a("div",{staticClass:"groupname"},[e.collapsed||!e.editItem?[e._l(e.groupStuList(t.teamId),(function(t,n){return[a("Button",{key:n,attrs:{size:"small",disabled:""}},[e._v(e._s(t.stuName))])]}))]:e.editItemSetLeader?[a("RadioGroup",{staticClass:"groupStuSelect leader",attrs:{size:"small",value:t.teamLeader},on:{"on-change":e.handleTeamGroupSetLeaderOnChange}},[e._l(e.groupStuList(t.teamId),(function(t,n){return[a("Radio",{key:n,attrs:{label:t.stuId,border:""}},[e._v(e._s(t.stuName))])]}))],2)]:[a("CheckboxGroup",{staticClass:"groupStuSelect remove",attrs:{size:"small"},on:{"on-change":e.handleTeamGroupStuRemoveOnChange}},[e._l(e.groupStuList(t.teamId),(function(n,i){return[a("Checkbox",{key:i,attrs:{label:n.stuId,disabled:n.stuId==t.teamLeader,border:""}},[e._v(" "+e._s(n.stuName)+" ")])]}))],2)]],2),a("div",{staticClass:"grouptime"}),a("div",{staticClass:"groupaction"},[a("div",{staticClass:"actionitem mx-1"},[a("Button",{attrs:{type:"default",size:"small"},nativeOn:{click:function(a){return e.handleTeamGroupSetLeader(t)}}},[e._v("选择组长")]),e.activeGroup(t.teamId)&&e.editItemSetLeader?a("div",{staticClass:"actionappend"},[a("a",{on:{click:function(t){return e.handleTeamGroupSetLeaderConfirm()}}},[e._v("确认")]),a("a",{staticStyle:{color:"#333"},on:{click:function(t){return e.handleTeamGroupSetLeaderCancel()}}},[e._v("取消")])]):e._e()],1),a("div",{staticClass:"actionitem mx-1"},[a("Button",{attrs:{type:"default",size:"small"},nativeOn:{click:function(a){return e.handleTeamGroupStuRemove(t)}}},[e._v("移出小组")]),e.activeGroup(t.teamId)&&e.editItemStuRemove?a("div",{staticClass:"actionappend"},[a("a",{on:{click:function(t){return e.handleTeamGroupStuRemoveConfirm()}}},[e._v("确认")]),a("a",{staticStyle:{color:"#333"},on:{click:function(t){return e.handleTeamGroupStuRemoveCancel()}}},[e._v("取消")])]):e._e()],1)])]):e._e()])]}))],2)],1),a("div",{staticClass:"teamGrouptable"},[a("span",{staticClass:"teamGrouptogglebtn",on:{click:function(t){return e.handleToggleCollapsed(!1)}}},[a("Icon",{attrs:{type:"md-arrow-dropright"}})],1),a("div",{staticClass:"teamGrouptablettbox"},[a("ShTable",{ref:"teamStudentTable",attrs:{ghost:"",height:"455",page:!1,dataSourse:e.stuDataSourse,columns:e.columns,loading:e.stuloading},on:{"on-selection-change":e.handleTableSelection}})],1),a("div",{staticClass:"teamGrouptablebtnbox"},[a("Button",{attrs:{type:"primary",size:"small"},nativeOn:{click:function(t){return e.handleTeamGroupEditConfirm()}}},[e._v("确定")])],1)])])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"teamGrouplisthead"},[a("div",{staticClass:"groupname"},[e._v("小组名称")]),a("div",{staticClass:"grouptime"},[e._v("创建时间")]),a("div",{staticClass:"groupaction"},[e._v("操作")])])}],o=a("efe2"),u=(a("6706"),a("8445"),a("7736")),l={name:"training-course-team-allot-list",props:{searchname:{type:String,default:null}},components:{},data:function(){return{collapsed:!1,modalVisible:!1,modalLoading:!1,editItem:null,editItemSetLeader:null,editItemStuRemove:null,dataloading:!1,dataSourse:[],stuloading:!1,stuDataSourse:[],tableSelectRows:[],leaderSelect:null,removeSelect:[]}},computed:{activeGroup:function(){return function(e){return!!this.editItem&&e==this.editItem.teamId}},groupStuList:function(){return function(e){return this.stuDataSourse.filter((function(t){return t.stuGroup==e}))}},columns:function(){return[{type:"selection",align:"center",width:55},{title:"学号",align:"center",key:"stuNumber"},{title:"姓名",align:"center",key:"stuName"},{title:"班级",align:"center",key:"stuClass"}]}},mounted:function(){this.getCourseCenterTrainingCourseTeamList(),this.getCourseCenterTrainingCourseStudentList()},methods:Object(o["a"])(Object(o["a"])({},Object(u["b"])(["getStoreCourseCenterTrainingCourseTeamList","getStoreCourseCenterTrainingCourseStudentList","setStoreCourseCenterTrainingCourseTeamGroupMembersAdd","setStoreCourseCenterTrainingCourseTeamGroupMembersDelete","setStoreCourseCenterTrainingCourseTeamGroupLeader"])),{},{getCourseCenterTrainingCourseTeamList:function(){var e=this;e.dataloading=!0,e.dataSourse=[],e.getStoreCourseCenterTrainingCourseTeamList({}).then((function(t){e.dataloading=!1,e.dataSourse=t.dataList}))},getCourseCenterTrainingCourseStudentList:function(){var e=this;e.stuloading=!0,e.stuDataSourse=[],e.getStoreCourseCenterTrainingCourseStudentList({}).then((function(t){e.stuloading=!1,e.stuDataSourse=t.dataList}))},handleTeamGroupInit:function(e){},handleTeamGroupEdit:function(e){this.editItem=e,this.handleToggleCollapsed(!0)},handleTeamGroupEditConfirm:function(){var e=this;e.dataloading=!0,e.stuloading=!0,e.setStoreCourseCenterTrainingCourseTeamGroupMembersAdd({}).then((function(t){e.dataloading=!1,e.stuloading=!1,e.stuDataSourse.forEach((function(t){e.tableSelectRows.forEach((function(a){t.stuId==a.stuId&&(t.stuGroup=e.editItem.teamId,t._disabled=!0,t._checked=!0)}))}))}))},handleToggleCollapsed:function(e){this.collapsed=e,this.collapsed||(this.editItem=null)},handleTeamGroupSetLeader:function(e){this.handleTeamGroupStuRemoveCancel(),this.editItem=e,this.editItemSetLeader=e},handleTeamGroupSetLeaderOnChange:function(e){this.leaderSelect=e},handleTeamGroupSetLeaderConfirm:function(){var e=this;e.dataloading=!0,e.setStoreCourseCenterTrainingCourseTeamGroupLeader({}).then((function(t){e.dataloading=!1,e.handleTeamGroupSetLeaderCancel(),e.msgsuccess("设置组长成功！")}))},handleTeamGroupSetLeaderCancel:function(){this.editItem=null,this.editItemSetLeader=null,this.leaderSelect=null},handleTeamGroupStuRemove:function(e){this.handleTeamGroupSetLeaderCancel(),this.editItem=e,this.editItemStuRemove=e},handleTeamGroupStuRemoveOnChange:function(e){this.removeSelect=e},handleTeamGroupStuRemoveConfirm:function(){var e=this;e.dataloading=!0,e.setStoreCourseCenterTrainingCourseTeamGroupMembersDelete({}).then((function(t){e.dataloading=!1,e.handleTeamGroupStuRemoveCancel(),e.msgsuccess("移除成功！")}))},handleTeamGroupStuRemoveCancel:function(){this.editItem=null,this.editItemStuRemove=null,this.removeSelect=[]},handleTableSelection:function(e){this.tableSelectRows=e}})},c=l,d=(a("c178"),a("974c1"),a("5d22")),m=Object(d["a"])(c,s,r,!1,null,"7649f4ca",null),p=m.exports,h={name:"training-course-team-allot",components:{TrainingCourseTeamAllotList:p},data:function(){return{searchname:null}},methods:{handleKeyGroup:function(){}}},C=h,g=Object(d["a"])(C,n,i,!1,null,"788b8ae0",null);t["default"]=g.exports},"974c1":function(e,t,a){"use strict";a("fa5b")},c178:function(e,t,a){"use strict";a("06a1")},fa5b:function(e,t,a){}}]);