(function(e){function t(t){for(var a,i,s=t[0],r=t[1],c=t[2],m=0,d=[];m<s.length;m++)i=s[m],o[i]&&d.push(o[i][0]),o[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);u&&u(t);while(d.length)d.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},l=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/client/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=r;l.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a60":function(e,t,n){"use strict";var a=n("3f0c"),o=n.n(a);o.a},"2a3e":function(e,t,n){},"32de":function(e,t,n){"use strict";var a=n("5ddc"),o=n.n(a);o.a},3779:function(e,t,n){},"3c2f":function(e,t,n){},"3e29":function(e,t,n){},"3f0c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},l=[],i=(n("5c0b"),n("2877")),s={},r=Object(i["a"])(s,o,l,!1,null,null,null);r.options.__file="App.vue";var c=r.exports,u=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("Nav",{attrs:{activeIndex:4}}),e._m(0)],1)},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-content"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav-wrap"},[n("el-menu",{staticClass:"nav-main",attrs:{"default-active":e.activeIndex+"",mode:"horizontal","background-color":"#545c64","text-color":"#fff",router:!0,"active-text-color":"#ffd04b"}},[n("el-menu-item",{attrs:{index:"4",route:{path:"/home"}}},[n("i",{staticClass:"fa fa-home"}),e._v("主页\n        ")]),n("el-menu-item",{attrs:{index:"1",route:{path:"/musicList"}}},[n("i",{staticClass:"fa fa-music"}),e._v("音乐管理\n        ")]),n("el-menu-item",{attrs:{index:"2",route:{path:"/invitationList"}}},[n("i",{staticClass:"fa fa-address-book"}),e._v("\n            请帖列表\n        ")])],1),n("div",{staticClass:"nav-other",on:{click:e.logout}},[e._v("\n        退出\n    ")])],1)},p=[],g=(n("c5f6"),n("6ed3")),h=n.n(g),b={name:"Nav",props:{activeIndex:Number},data:function(){return{}},methods:{logout:function(){window.localStorage.removeItem("loginSessionId"),this.goPage("/")}}},v=b,_=(n("fc69"),Object(i["a"])(v,f,p,!1,null,"b7a69e6e",null));_.options.__file="Nav.vue";var y=_.exports,w={name:"home",components:{Nav:y},data:function(){return{activeIndex:"1",activeIndex2:"1"}},mounted:function(){var e=h.a.get("loginSessionId");console.log(e)},methods:{handleSelect:function(e,t){console.log(e,t)}}},C=w,x=(n("593d"),Object(i["a"])(C,m,d,!1,null,"47e82700",null));x.options.__file="Home.vue";var L=x.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("el-row",[a("el-col",{staticClass:"leftArea",attrs:{span:12}},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}})]),a("el-col",{staticClass:"split",attrs:{span:12}},[a("div",{staticClass:"form-wrap"},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules4Login,"hide-required-asterisk":!0,"label-width":"80px","label-position":"left"}},[a("el-form-item",{attrs:{label:"用户名",prop:"user"}},[a("el-input",{model:{value:e.form.user,callback:function(t){e.$set(e.form,"user",t)},expression:"form.user"}})],1),a("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[a("el-input",{model:{value:e.form.pwd,callback:function(t){e.$set(e.form,"pwd",t)},expression:"form.pwd"}})],1),a("el-form-item",{staticClass:"text-left",attrs:{label:""}},[a("el-checkbox",{model:{value:e.form.checked,callback:function(t){e.$set(e.form,"checked",t)},expression:"form.checked"}},[e._v("记住密码")])],1),a("el-form-item",{},[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.onSubmit}},[e._v("登录\n                        ")])],1)],1)],1)])],1)],1)},S=[],I=n("caf6"),$=n.n(I),O="prod";var D=$.a.create(),j={dev:"/client",prod:"/web/manage"},T=j[O];D.defaults.timeout=2500,D.defaults.baseURL=T,D.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),D.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e)});var N={dev:{login:"/login",musicList:"/musicList",musicDel:"/musicDel",musicUpload:"/musicUpload",marryInfo:"/marryInfo",banquetInfo:"/banquetInfo",tplList:"/tplList",tplDel:"/tplDel"},prod:{login:"/verify_user",musicList:"/get_music_list",musicDel:"/del_music",musicUpload:"/upload_music",marryInfo:"/get_attend_info_marry_man",banquetInfo:"/get_attend_info_attend_man",tplList:"/get_model_list",tplDel:"/del_model"}},P={login:N[O].login,musicList:N[O].musicList,musicDel:N[O].musicDel,musicUpload:N[O].musicUpload,marryInfo:N[O].marryInfo,banquetInfo:N[O].banquetInfo,tplList:N[O].tplList,tplDel:N[O].tplDel};n("3b2b"),n("a481"),n("6b54");function E(){return-1!==location.host.indexOf("127.0.0.1")||-1!==location.host.indexOf("localhost")||-1!==location.host.indexOf("192.168.1")}var F=function(){var e=function(e){var t=Object.prototype.toString;return function(){return t.call(arguments[0])==="[object "+e+"]"}},t=e("Object"),n=e("Array"),a=e("Boolean");return function e(){var o,l,i,s,r,c=0,u=!1;for(a(arguments[0])&&(c=1,u=arguments[0]),r=arguments.length-1;r>c;r--)if(i=arguments[r-1],s=arguments[r],t(s)||n(s))for(var m in console.log(s),s)if(o=s[m],u&&(t(o)||n(o))){l=t(o)?{}:[];var d=e(u,l,o);i[m]=d}else i[m]=s[m];else i=s;return i}}();function q(e,t){var n=function(){switch(e.constructor){case Object:return"Object";case Array:return"Array";case NodeList:return"NodeList";default:return"null"}}();if("Array"===n||"NodeList"===n)[].every.call(e,function(e,n){return!1!==t.call(e,n,e)});else if("Object"===n)for(var a in e)if(!1===t.call(e[a],a,e[a]))break}function z(e,t){var n={};return q(e,function(e,a){var o={};F(!0,o,a),n[a[t]]=o}),n}var V=function(e,t){var n=e;e instanceof Date||(n=new Date(e)),isNaN(n.getDate())&&(e=e.replace(/-/g,"/"),n=new Date(e));var a={"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),S:n.getMilliseconds()};for(var o in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(n.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+o+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[o]:("00"+a[o]).substr((""+a[o]).length)));return t};function H(e,t,n){switch(n*=1,isNaN(n)&&(n=0),t){case"y":e.setFullYear(e.getFullYear()+n);break;case"m":e.setMonth(e.getMonth()+n);break;case"d":e.setDate(e.getDate()+n);break;case"h":e.setHours(e.getHours()+n);break;case"n":e.setMinutes(e.getMinutes()+n);break;case"s":e.setSeconds(e.getSeconds()+n);break;default:}return e}function M(e){return"undefined"!==typeof e}var U={isLocal:E(),isNotUndefined:M,dateAdd:H,dateFormat:V,extend:F,arrToObj:z,each:q},A={name:"HelloWorld",data:function(){return{loading:!1,form:{user:"",pwd:"",checked:!0},rules4Login:{user:[{required:!0,message:"请输入用户名",trigger:"blur"}],pwd:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},mounted:function(){this.loginCheck(),U.isLocal},methods:{loginCheck:function(){var e=localStorage.getItem("loginUser"),t=localStorage.getItem("loginUserPwd");this.form.user=e,t&&(this.form.pwd=t,this.form.checked=!0)},setVal:function(){this.form.user="admin",this.form.pwd="admin"},onSubmit:function(){var e=this;console.log("submit!"),this.$refs.form.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,console.log(P.login,{user_name:e.form.user,pass_word:e.form.pwd}),D.get(P.login,{params:{user_name:e.form.user,pass_word:e.form.pwd}}).then(function(t){console.log(t),e.loading=!1,200===t.code?(h.a.setAge(36e5).set("loginSessionId","abc"),localStorage.setItem("loginUser",e.form.user),e.form.checked?localStorage.setItem("loginUserPwd",e.form.pwd):localStorage.removeItem("loginUserPwd"),e.goPage("home")):e.$message({message:t.msg,showClose:!0,type:"error"})}).catch(function(e){console.log(e)})})}}},R=A,W=(n("695e"),Object(i["a"])(R,k,S,!1,null,"6b14bac2",null));W.options.__file="Login.vue";var B=W.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("Nav",{attrs:{activeIndex:2}}),n("div",{staticClass:"page-content"},[n("div",{staticClass:"page-form"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,size:"small"}},[n("el-form-item",{attrs:{label:"新郎姓名"}},[n("el-input",{attrs:{placeholder:"新郎姓名"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),n("el-form-item",{attrs:{label:"新娘姓名"}},[n("el-input",{attrs:{placeholder:"新娘姓名"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{align:"center",prop:"create_time",width:"160",label:"创建时间"}}),n("el-table-column",{attrs:{align:"center",prop:"man",label:"新郎姓名"}}),n("el-table-column",{attrs:{align:"center",prop:"women",label:"新娘姓名"}}),n("el-table-column",{attrs:{align:"center",width:"160",prop:"marr_time",label:"结婚时间"}}),n("el-table-column",{attrs:{align:"center",prop:"marr_addr",label:"结婚地址"}}),n("el-table-column",{attrs:{align:"center",width:"160",prop:"contact_num",label:"联系电话"}}),n("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.handleDelClick(t.row)}}},[e._v("\n                        查看赴宴信息\n                    ")])]}}])})],1),n("div",{staticClass:"page-pagination"},[n("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},Y=[],G=(n("ac6a"),{1:"中文",2:"英文"}),K={musicType:G};function Q(e){var t=[];return U.each(e,function(e,n){var a={};a.id=n.music_id,a.name=n.music_name,a.time=n.music_upload_time,a.src=n.music_url,a.type=K.musicType[n.music_type],t.push(a)}),t}function X(e){var t=[];return U.each(e,function(e,n){var a={};a.id=n.id,a.man=n.boy_name,a.women=n.girl_name,a.create_time=n.create_time,a.marr_time=n.marr_time,a.marr_addr=n.marr_addr,a.contact_num=n.contact_num,t.push(a)}),t}function Z(e){var t=[];return U.each(e,function(e,n){var a={};a.id=n.marry_id,a.man=n.marry_man,a.women=n.marry_women,t.push(a)}),t}function ee(e){var t=[];return U.each(e,function(e,n){var a={};a.id=n.model_id,a.name=n.model_name,a.type=n.model_type,a.cover=n.model_pic_url,U.isLocal&&(a.cover="https://dummyimage.com/200x300&text=hello"),a.time=n.model_time,t.push(a)}),t}var te={musicList:Q,marryInfo:X,banquetInfo:Z,tplList:ee},ne={name:"HelloWorld",components:{Nav:y},data:function(){return{tableData:[{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-08",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-06",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"},{date:"2016-05-07",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"}],multipleSelection:[],currentPage4:4,formInline:{user:"",region:""},dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"100px"}},mounted:function(){this.getList()},methods:{getList:function(){var e=this;D.get(P.marryInfo,{}).then(function(t){console.log(t),200===t.code?(e.tableData=te.marryInfo(t.data),console.log(e.tableData)):e.$message({message:t.msg,showClose:!0,type:"error"})}).catch(function(e){console.log(e)})},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},handleDelClick:function(e){console.log(e);var t=e.id;console.log("banquetList/"+t),this.goPage("banquetList/"+t)},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},onSubmit:function(){console.log("submit!")},add:function(){this.dialogFormVisible=!0,console.log("add")}}},ae=ne,oe=(n("6a8e"),Object(i["a"])(ae,J,Y,!1,null,null,null));oe.options.__file="InvitationList.vue";var le=oe.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("Nav",{attrs:{activeIndex:2}}),n("div",{staticClass:"page-content"},[n("el-breadcrumb",{staticClass:"page-breadcrumb",attrs:{separator:"/"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/invitationList"}}},[e._v("请帖列表")]),n("el-breadcrumb-item",[e._v("赴宴信息")])],1),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"}},[n("el-table-column",{attrs:{align:"center",label:"赴宴人员"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.date))]}}])}),n("el-table-column",{attrs:{align:"center",prop:"name",label:"赴宴联系电话"}}),n("el-table-column",{attrs:{align:"center",prop:"address",label:"赴宴人数","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{align:"center",prop:"address",label:"赴宴类型","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{align:"center",prop:"address",label:"赴宴时间","show-overflow-tooltip":""}})],1),n("div",{staticClass:"page-pagination"},[n("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400],"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:400},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),n("el-dialog",{attrs:{title:"添加音乐",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{attrs:{model:e.form,"label-position":"left"}},[n("el-form-item",{attrs:{label:"音乐名称","label-width":e.formLabelWidth}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"类别","label-width":e.formLabelWidth}},[n("el-select",{attrs:{placeholder:"请选择类别"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[n("el-option",{attrs:{label:"欧美",value:"shanghai"}}),n("el-option",{attrs:{label:"中文",value:"beijing"}}),n("el-option",{attrs:{label:"日韩",value:"beijing"}})],1)],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1)],1)],1)},se=[],re={name:"HelloWorld",components:{Nav:y},data:function(){return{tableData:[{date:"2016-05-03",name:"王小虎",address:"上海市普陀区"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀区"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区"},{date:"2016-05-08",name:"王小虎",address:"上海市普陀区"},{date:"2016-05-06",name:"王小虎",address:"上海市普陀区"},{date:"2016-05-07",name:"王小虎",address:"上海市普陀区"}],multipleSelection:[],currentPage4:4,formInline:{user:"",region:""},dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"100px"}},mounted:function(){this.getList()},methods:{getList:function(){var e=this;D.get(P.banquetInfo,{}).then(function(t){console.log(t),200===t.code?(e.tableData=te.banquetInfo(t.data),console.log(e.tableData)):e.$message({message:t.msg,showClose:!0,type:"error"})}).catch(function(e){console.log(e)})},handleSelectionChange:function(e){this.multipleSelection=e},handleDelClick:function(e){console.log(e)},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},onSubmit:function(){console.log("submit!")},add:function(){this.dialogFormVisible=!0,console.log("add")}}},ce=re,ue=(n("32de"),Object(i["a"])(ce,ie,se,!1,null,null,null));ue.options.__file="BanquetList.vue";var me=ue.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("Nav",{attrs:{activeIndex:3}}),n("div",{staticClass:"page-content"},[n("el-row",[e._l(e.tpl,function(t){return[n("div",{staticClass:"tplItem-wrap"},[n("div",{staticClass:"tplItem"},[n("img",{staticClass:"tplItem-img",attrs:{src:t.cover,alt:""}}),n("div",{staticClass:"tplItem-name"},[e._v("\n                            "+e._s("模板"+t.name)+"\n                            "),n("el-button",{staticClass:"fr",attrs:{type:"text",size:"mini"},on:{click:function(n){e.handleDelClick(t)}}},[e._v("删除\n                            ")])],1),n("div",{staticClass:"tplItem-handle"})])])]})],2)],1)],1)},fe=[],pe={name:"HelloWorld",components:{Nav:y},data:function(){return{tpl:[]}},mounted:function(){this.getList()},methods:{getList:function(){var e=this;D.get(P.tplList,{}).then(function(t){console.log(t),200===t.code?(e.tpl=te.tplList(t.data),console.log(e.tpl)):e.$message({message:t.msg,showClose:!0,type:"error"})}).catch(function(e){console.log(e)})},handleDelClick:function(e){var t=this;console.log(e),this.$confirm("删除该模板, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){D.get(P.tplDel,{params:{model_id:e.id}}).then(function(e){console.log(e),200===e.code?(t.$message({showClose:!0,type:"success",message:"删除成功!"}),t.getList()):t.$message({message:e.msg,showClose:!0,type:"error"})}).catch(function(e){console.log(e)})}).catch(function(){t.$message({showClose:!0,duration:1e3,type:"info",message:"已取消删除"})})}}},ge=pe,he=(n("1a60"),Object(i["a"])(ge,de,fe,!1,null,"63a17eba",null));he.options.__file="H5TplList.vue";var be=he.exports,ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[n("Nav",{attrs:{activeIndex:1}}),n("div",{staticClass:"page-content"},[n("div",{staticClass:"page-form"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,size:"small"}},[n("el-form-item",{attrs:{label:"音乐名称"}},[n("el-input",{attrs:{placeholder:"音乐名称"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1),n("el-form-item",{staticClass:"fr"},[n("el-button",{attrs:{type:"primary"},on:{click:e.add}},[n("i",{staticClass:"fa fa-plus"}),e._v("\n                        上传\n                    ")])],1)],1)],1),n("div",{staticStyle:{height:"70px"}},[e.playHas?n("aplayer",{attrs:{autoplay:"",music:e.playOption}}):e._e(),e.playHas?e._e():n("div",[e._v("音乐播放区域")])],1),n("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{align:"center",prop:"name",label:"音乐名称"}}),n("el-table-column",{attrs:{align:"center",prop:"time",label:"上传时间"}}),n("el-table-column",{attrs:{align:"center",prop:"type",label:"类别","show-overflow-tooltip":""}}),n("el-table-column",{attrs:{align:"center",label:"播放"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.playThis(t.row)}}},[e._v("\n                        播放\n                    ")])]}}])}),n("el-table-column",{attrs:{align:"center",fixed:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.handleDelClick(t.row)}}},[e._v("\n                        删除\n                    ")])]}}])})],1),e._e(),n("el-dialog",{attrs:{title:"添加音乐",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[n("el-form",{ref:"form4Add",attrs:{model:e.form,"label-position":"left",rules:e.rules4Add,"hide-required-asterisk":!0}},[n("el-form-item",{attrs:{label:"音乐名称","label-width":e.formLabelWidth,prop:"name"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"音乐文件","label-width":e.formLabelWidth}},[n("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.baseURL+e.api.musicUpload,"on-preview":e.handlePreview,"on-remove":e.handleRemove,accept:".mp3","on-change":e.handleChange,"before-remove":e.beforeRemove,"auto-upload":!1,data:e.uploadData,name:"music",multiple:"",limit:1,"on-exceed":e.handleExceed,"file-list":e.fileList}},[n("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),n("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传MP3文件")])],1)],1),n("el-form-item",{attrs:{label:"类别","label-width":e.formLabelWidth}},[n("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},e._l(e.options,function(e){return n("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.onSubmit}},[e._v("确 定")])],1)],1)],1)],1)},_e=[],ye=(n("7f7f"),n("8424")),we=n.n(ye),Ce={name:"HelloWorld",components:{Nav:y,Aplayer:we.a},data:function(){return{fileList:[],options:[{value:"1",label:"中文"},{value:"2",label:"外文"}],tableData:[],uploadData:{},api:P,multipleSelection:[],currentPage4:4,baseURL:T,formInline:{user:"",region:1},dialogFormVisible:!1,form:{name:"",type:"1"},formLabelWidth:"100px",rules4Add:{name:[{required:!0,message:"请输入音乐名",trigger:"blur"}]},uploadFileList:[],playHas:!1,playOption:{artist:"",title:"",src:""},loading:!1}},mounted:function(){this.getList()},methods:{playThis:function(e){var t=this;this.playHas=!1,console.log(e),this.playOption.title=e.name,this.playOption.src=e.src,setTimeout(function(){t.playHas=!0},300)},onSubmit:function(){var e=this;console.log(this.fileList),0!==this.uploadFileList.length?(console.log("submit!"),this.$refs.form4Add.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.uploadData.music_name=e.form.name,e.uploadData.music_type=e.form.type,e.$refs.upload.submit(),e.dialogFormVisible=!1,e.loading=!1})):this.$message({message:"未上传文件",type:"warning"})},handleChange:function(e,t){console.log(e,t),this.uploadFileList=t},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(e.length," 个文件，共选择了 ").concat(e.length+t.length," 个文件"))},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},getList:function(){var e=this;D.get(P.musicList,{}).then(function(t){console.log(t),200===t.code?(e.tableData=te.musicList(t.data),console.log(e.tableData)):e.$message({message:t.msg,showClose:!0,type:"error"})}).catch(function(e){console.log(e)})},toggleSelection:function(e){var t=this;e?e.forEach(function(e){t.$refs.multipleTable.toggleRowSelection(e)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(e){this.multipleSelection=e},handleDelClick:function(e){var t=this;console.log(e),this.$confirm("删除该音乐, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){D.get(P.musicDel,{params:{music_id:e.id}}).then(function(e){console.log(e),200===e.code?(t.$message({showClose:!0,type:"success",message:"删除成功!"}),t.getList()):t.$message({message:e.msg,showClose:!0,type:"error"})}).catch(function(e){console.log(e)})}).catch(function(){t.$message({showClose:!0,duration:1e3,type:"info",message:"已取消删除"})})},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},add:function(){this.form.name="",this.fileList=[],this.uploadFileList=[],this.dialogFormVisible=!0,console.log("add")}}},xe=Ce,Le=(n("c6fe"),Object(i["a"])(xe,ve,_e,!1,null,null,null));Le.options.__file="MusicList.vue";var ke=Le.exports,Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page"},[e._l(e.nav,function(t){return[n("el-button",{attrs:{type:t.isOk?"success":"primary"},on:{click:function(n){e.goPage(t.path)}}},[e._v("\n            "+e._s(t.name)+"\n        ")])]})],2)},Ie=[],$e={name:"HelloWorld",data:function(){return{nav:[{name:"登录",isOk:!1,path:"/login"},{name:"主页",isOk:!1,path:"/home"},{name:"请帖列表",isOk:!1,path:"/invitationList"},{name:"赴宴信息",isOk:!1,path:"/banquetList/1"},{name:"小程序模板",isOk:!1,path:"/h5TplList"},{name:"音乐管理",isOk:!1,path:"/musicList"}]}}},Oe=$e,De=(n("6295"),Object(i["a"])(Oe,Se,Ie,!1,null,"be0a2dae",null));De.options.__file="Nav.vue";var je=De.exports;a["default"].use(u["a"]);var Te=new u["a"]({routes:[{path:"/",redirect:"/login"},{path:"/login",name:"login",meta:{title:"原野映像 - 登录"},component:B},{path:"/home",name:"home",meta:{title:"原野映像"},component:L},{path:"/invitationList",name:"invitationList",meta:{title:"原野映像 - 请帖列表"},component:le},{path:"/banquetList/:id",name:"banquetList",meta:{title:"原野映像 - 赴宴信息"},component:me},{path:"/h5TplList",name:"h5TplList",meta:{title:"原野映像 - 小程序模板"},component:be},{path:"/musicList",name:"musicList",meta:{title:"原野映像 - 音乐管理"},component:ke},{path:"/nav",name:"nav",meta:{title:"原野映像 - 导航"},component:je},{path:"**",redirect:"/"}]}),Ne=n("5c96"),Pe=n.n(Ne);n("0fae");a["default"].use(Pe.a),a["default"].config.productionTip=!1,a["default"].mixin({methods:{goPage:function(e){Te.push(e)}}}),Te.beforeEach(function(e,t,n){e.meta.title&&(document.title=e.meta.title);var a=["/login"],o=h.a.get("loginSessionId");console.log(o),-1!==a.indexOf(e.fullPath)||o?n():n("/login")}),new a["default"]({router:Te,render:function(e){return e(c)}}).$mount("#app")},"593d":function(e,t,n){"use strict";var a=n("e273"),o=n.n(a);o.a},"5c0b":function(e,t,n){"use strict";var a=n("9222"),o=n.n(a);o.a},"5ddc":function(e,t,n){},6295:function(e,t,n){"use strict";var a=n("3e29"),o=n.n(a);o.a},"695e":function(e,t,n){"use strict";var a=n("3c2f"),o=n.n(a);o.a},"6a8e":function(e,t,n){"use strict";var a=n("3779"),o=n.n(a);o.a},"6ed3":function(e,t){e.exports={age:2592e6,setAge:function(e){return this.age=e,this},set:function(e,t){localStorage.removeItem(e);var n=t instanceof Object,a=(new Date).getTime(),o=this.age;if(!n){var l=t;t={},t._value=l}return t._time=a,t._age=a+o,t._isObject=n,localStorage.setItem(e,JSON.stringify(t)),this},isExpire:function(e){var t=!0,n=localStorage.getItem(e),a=(new Date).getTime();return n&&(n=JSON.parse(n),t=a>n._age),t},get:function(e){var t=this.isExpire(e),n=null;return t||(n=localStorage.getItem(e),n=JSON.parse(n),n._isObject||(n=n._value)),n}}},"76d2":function(e,t,n){},9222:function(e,t,n){},c6fe:function(e,t,n){"use strict";var a=n("2a3e"),o=n.n(a);o.a},cf05:function(e,t,n){e.exports=n.p+"img/logo.77612882.png"},e273:function(e,t,n){},fc69:function(e,t,n){"use strict";var a=n("76d2"),o=n.n(a);o.a}});
//# sourceMappingURL=app.1a263a84.js.map