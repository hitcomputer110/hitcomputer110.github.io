(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-myservice-myservice"],{"04fb":function(t,e,i){"use strict";i.r(e);var a=i("4511"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"07a6":function(t,e,i){var a=i("3e77");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("1e5fe3c7",a,!0,{sourceMap:!1,shadowMode:!1})},1175:function(t,e,i){"use strict";e["a"]=function(t){(t.options.wxs||(t.options.wxs={}))["m"]=function(t){return t.exports.s=function(t){return t},t.exports}({exports:{}})}},3249:function(t,e,i){"use strict";var a=i("07a6"),n=i.n(a);n.a},"3e77":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".FORMlineright[data-v-08fc2cc6]{max-width:%?525?%;overflow:scroll}.FORMtextline[data-v-08fc2cc6],\n.FORMheadline[data-v-08fc2cc6]{font-weight:800}.FORMtextline[data-v-08fc2cc6]{font-size:%?35?%}uni-view[data-v-08fc2cc6],\nuni-text[data-v-08fc2cc6]{-webkit-user-select:text;user-select:text}.container[data-v-08fc2cc6]{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.container uni-image[data-v-08fc2cc6]{width:%?686?%;height:%?686?%;background-color:#f9f9f9}.canvas-box[data-v-08fc2cc6]{position:fixed;top:%?999999?%;left:0}.infobtnleft[data-v-08fc2cc6]{width:%?280?%}.infobtnright[data-v-08fc2cc6]{width:%?350?%}.request-form-btnline[data-v-08fc2cc6]{display:flex;margin-top:%?40?%;padding:0;justify-content:space-between;align-items:center}.FORMlineleft[data-v-08fc2cc6]{font-size:%?35?%}.FORMlineright[data-v-08fc2cc6]{font-size:%?35?%}.tablename[data-v-08fc2cc6]{max-width:%?150?%;overflow:scroll}",""]),t.exports=e},4511:function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("ac1f"),i("466d"),i("4e82"),i("4de4"),i("d3b7"),i("14d9"),i("a9e3"),i("99af");var a=i("51b3"),n=i("460c"),s=null,o=getApp(),l=o.globalData,r=(l.ENCRYPTO,t.database()),c=(r.collection("ProgramSet"),r.collection("Users"),i("d3e5"),r.collection("Group")),u=r.collection("Volunteer"),v=!1,f={},d=0,p=0,h={data:function(){return{COLORTHEMECOMMON:l.COLORTHEMECOMMON,COLORTHEME:l.COLORTHEME,COLORTHEMESTYLE:l.COLORTHEMESTYLE,THEMEID:l.THEMEID,THEMETYPE:l.THEMETYPE,THEMELIST:l.THEMELIST,VERSION:l.VERSION,AD:l.AD,VolListModel:!1,Vollist:[],showStatus:!1,showPaiHang:!1,IconType:l.IconType,Note:!1,ApplyVolModel:!1,OpData:{name:"游客"},showInfo:!1,actId:"",BookData:[],PerInfo:{star:"计算中",starCount:"",signInRecord:"",hasReVolTime:"",hasReVolTrue:"",hasReVolHour:"",hasReVolTimeOral:"",VolTimeOral:"",VolTime:"",timeDuring:"",delCount:"",timePerOne:""},actData:!1,PaiHangT:[],PaiHangS:[],starfloor:"",starpiece:"",BookDatafliter:"",fliterText:"全部",VolInputTmp:"",VolInputTmpSchool:"",ACTchooseindex:"",s:""}},onLoad:function(t){s=this,l.RefleshGlobalData(),uni.setNavigationBarColor({backgroundColor:l.COLORTHEME["--color-main"],frontColor:l.COLORTHEME["--color-navitext"]}),console.log("初始化"),s.onLoadClone3389(t)},onReady:function(){},onShow:function(){s.setData({OpData:l.USERDATA,Note:l.AppSet.repairNotice})},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){this.onLoadClone3389({})},onReachBottom:function(){},onShareAppMessage:function(){},methods:{onLoadClone3389:function(t){f=t,l.ServerReady((function(){s.Reflesh()}))},showVol:function(t){var e=t.currentTarget.dataset.id,i=this;if("hide"==e)this.setData({VolListModel:!1});else if("show"==e){uni.showLoading({title:"加载中",mask:!0});var s=r.command.aggregate,o=r.command;(0,a.cbq)(u.aggregate().match({_openid:o.eq(l.USERDATA._openid).or(o.eq(l.USERDATA.uid))}).group({_id:null,v:s.addToSet({time:"$time",applyTime:"$applyTime",status:"$status"})}).end(),{success:function(t){if(console.log(t),uni.hideLoading({success:function(t){}}),t.list.length>0){var e=n.sort(t.list[0].v,"time",!0,!1);i.setData({Vollist:e,VolListModel:!0})}else uni.showToast({title:"无记录"})},fail:function(t){console.log(t),uni.showToast({title:"错误",icon:"error"})}})}},showStatusFun:function(){this.setData({showStatus:!this.showStatus})},Reflesh:function(){uni.showLoading({title:"加载中",mask:!0});var t=l.AppSet;if(this.setData({showInfo:!1,actData:!1,OpData:l.USERDATA}),v=r.collection(t.ColName2),f&&f.ONLYPAIHANG)return this.setData({OpData:{name:"游客"}}),uni.setNavigationBarTitle({title:"义诊荣誉榜"}),void this.getPaiHang();l.openid=l.USERDATA._openid,s.getDb(l.openid,0);var e=r.command,i=e.aggregate;(0,a.cbq)(v.aggregate().match({"resolve.openid":e.eq(l.USERDATA._openid).or(e.eq(l.USERDATA.uid)),"comment.star":e.gte(-1)}).group({_id:null,averStars:i.avg("$comment.star"),averCount:i.sum(1)}).end(),{success:function(t){console.log(t.list),void 0===t.list[0]&&(t.list[0]={}),s.setData({"PerInfo.star":t.list[0].averStars?t.list[0].averStars.toFixed(2):"0","PerInfo.starCount":t.list[0].averCount?t.list[0].averCount:"0"});var e=s.PerInfo.star;s.setData({starfloor:Math.floor(e),starpiece:e-Math.floor(e)})},fail:function(t){s.setData({"PerInfo.star":"加载失败"})}}),(0,a.cbq)(c.aggregate().match({_id:e.neq(-1)}).addFields({person:i.filter({input:"$hasSignIn",as:"item",cond:i.eq(["$$item.operator.openid",l.openid])})}).project({person:1}).unwind("$person").group({_id:"$person.operator.openid",time:i.addToSet("$person.time")}).end(),{success:function(t){console.log(t),s.setData({"PerInfo.signInRecord":t.list[0].time.sort()}),s.getVoltime("sign",t.list[0].time.length)},fail:function(t){s.setData({"PerInfo.signInRecord":["加载失败"]})}})},getPaiHang:function(){if(!this.showPaiHang)return uni.showLoading({title:"加载排行",mask:!0}),void this.ALLPEOPLETONGJI();this.setData({showPaiHang:!this.showPaiHang})},ALLPEOPLETONGJI:function(){var t=this,e=r.command,i=e.aggregate;(0,a.cbq)(v.aggregate().match({"comment.star":e.gte(-1)}).group({_id:"$resolve.openid",name:i.last("$resolve.name"),averStars:i.avg("$comment.star"),averCount:i.sum(1)}).group({_id:null,val:i.addToSet({id:"$_id",name:"$name",as:"$averStars",ac:"$averCount"})}).end(),{success:function(e){console.log("评价统计",e.list);var i,a=e.list[0].val;for(var s in a){var o=a[s].as;a[s].as=a[s].as.toFixed(2),a[s].starfloor=Math.floor(o),a[s].starpiece=o-Math.floor(o),a[s].ac=n.AddTextLen(a[s].ac)}i=n.sort(a,"as",!0,!1,"ac"),t.setData({PaiHangS:i})},fail:function(t){uni.showToast({title:"错误",icon:"error"})}}),(0,a.cbq)(v.aggregate().match({"resolve.openid":e.neq(null)}).group({_id:"$resolve.openid",name:i.last("$resolve.name"),times:i.addToSet({e:"$resolve.endtime",s:"$resolve.starttime",t:"$statusText"})}).group({_id:null,val:i.addToSet({id:"$_id",name:"$name",times:"$times"})}).end(),{success:function(e){if(0!=e.list.length){var i=e.list[0].val,a=0,s=[];for(var o in i){var l=i[o];a=0;var r=l.times.length,c=r;for(var u in l.times)"义诊已完成"==l.times[u].t.substr(0,5)?a+=n.getTimeDiff(l.times[u].e,l.times[u].s):c--;var v=n.formatTimeDiff(a,void 0,void 0,void 0,void 0,!1);s.push({name:l.name,timeDuring:v+" ("+n.AddTextLen(c)+"/"+n.AddTextLen(r)+")",c:c*a/1e3})}console.log(s),s=n.sort(s,"c",!0,!1),console.log("时长统计",s),t.setData({PaiHangT:s,showPaiHang:!0}),uni.hideLoading({success:function(t){}})}else uni.showToast({icon:"error",title:"暂无排行"})},fail:function(t){uni.showToast({title:"错误",icon:"error"})}})},DataFliter:function(t){var e=t.currentTarget.dataset.id;if(console.log(e),"全部"==e)this.setData({BookDatafliter:this.BookData,fliterText:e});else{var i=this.BookData;this.BookDatafliter=[];for(var a=0;a<i.length;a++){if("已评价"==e){if("义诊已完成"!=i[a].statusText)continue}else if("未评价"==e){if("义诊已完成，待评价"!=i[a].statusText)continue}else if("进行中"==e){if("正在义诊中"!=i[a].statusText)continue}else if("其他"==e){if("预约已生效"==i[a].statusText)continue;if("预约已取消"==i[a].statusText)continue;if("正在义诊中"==i[a].statusText)continue;if("义诊已完成，待评价"==i[a].statusText||"义诊已完成"==i[a].statusText)continue}this.BookDatafliter.push(i[a])}this.setData({BookDatafliter:this.BookDatafliter,fliterText:e})}},BookDetail:function(t){uni.navigateTo({url:"../bookinfo/bookinfo?id="+t.currentTarget.dataset.id+"&reop=true"})},applyVol:function(t){var e=t.currentTarget.dataset.id,i=this;if("apply"==e)this.PerInfo.hasReVolTrue?this.setData({ApplyVolModel:!0,VolInputTmp:null,VolInputTmpSchool:null}):uni.showModal({showCancel:!1,title:"无法申请",content:"您的可申请志愿时长不足1小时，无法申请"});else if("input"==e)this.VolInputTmp=t.detail.value;else if("input2"==e)this.VolInputTmpSchool=t.detail.value;else if("confirm"==e){if(this.PerInfo.hasReVolTimeOral-1e3*this.VolInputTmp*60*60<0||this.VolInputTmp<1)return void uni.showModal({showCancel:!1,title:"申请失败",content:"超出可申请时长范围或小于1小时"});if("string"!=typeof i.VolInputTmpSchool||i.VolInputTmpSchool.length<1)return void uni.showModal({showCancel:!1,title:"申请失败",content:"请输入您所在的学院"});uni.showLoading({title:"提交申请",mask:!0});var s=Number(i.VolInputTmp.split(".")[0]),o="",r="兹证明"+l.OpData.name+"在";for(var c in i.PerInfo.signInRecord)o+=i.PerInfo.signInRecord[c]+"、";o=o.substr(0,o.length-1),r+=o+"参加由本社团组织的电脑义诊志愿活动。",console.log(s),(0,a.cbq)(u.add({_id:n.getTime(),_openid:l.openid,time:n.getTime(),info:{person:l.OpData,tip:r,school:i.VolInputTmpSchool,time:o},applyTime:s,applyTimeValid:s,status:"待审核"}),{success:function(t){i.PerInfo.hasReVolTimeOral=i.PerInfo.hasReVolTimeOral-1e3*s*60*60,i.setData({"PerInfo.hasReVolTime":n.formatTimeDiff(i.PerInfo.hasReVolTimeOral),"PerInfo.hasReVolTrue":i.PerInfo.hasReVolTimeOral>=36e5,"PerInfo.hasReVolHour":n.formatTimeDiff(i.PerInfo.hasReVolTimeOral,!0,!1,!1),ApplyVolModel:!1}),uni.hideLoading({success:function(t){}}),uni.showModal({showCancel:!1,title:"申请成功",content:"提交申请成功，请等待后续通知\n\n本次申请证明时长："+s+"小时"})},fail:n.showFail})}else"cancel"==e&&this.setData({ApplyVolModel:!1})},getVoltime:function(t,e){"deal"==t?p=e:d=e;var i=this,s=r.command.aggregate;if(d&&p){var o=r.command;(0,a.cbq)(u.aggregate().match({_openid:o.eq(l.USERDATA._openid).or(o.eq(l.USERDATA.uid))}).group({_id:"$_openid",t:s.sum("$applyTimeValid")}).end(),{success:function(t){console.log("申请志愿",t.list);t.list[0];var e=0;for(var a in t.list)t.list[a]&&(e+=t.list[a].t);var s=1e3*e*60*60,o=1e3*d*60*60+p;i.setData({"PerInfo.hasReVolTimeOral":o-s,"PerInfo.hasReVolTrue":o-s>=36e5,"PerInfo.hasReVolHour":n.formatTimeDiff(o-s,!0,!1,!1),"PerInfo.hasReVolTime":n.formatTimeDiff(o-s),"PerInfo.VolTimeOral":o,"PerInfo.VolTime":n.formatTimeDiff(o)})},fail:function(t){console.log(t),i.setData({"PerInfo.VolTimeOral":0,"PerInfo.VolTime":"加载失败","PerInfo.hasReVolTime":"加载失败"})}})}},getDb:function(t,e){0==e&&(s.BookData=[]);r.command;(0,a.cbq)(v.where({"resolve.openid":t}).orderBy("book.uploadtime","desc").skip(50*e).limit(50).get(),{success:function(i){console.log(i);var a=l.dealOldVerBook(i.data);if(s.setData({BookData:s.BookData.concat(a)}),s.setData({BookDatafliter:s.BookData}),50==a.length)s.getDb(t,e+1);else{var o=s.BookData,r=0,c=50*e+a.length,u=c;for(var v in o){var f=o[v];f.resolve&&"义诊已完成"==f.statusText.substr(0,5)?r+=n.getTimeDiff(f.resolve.endtime,f.resolve.starttime):u--}var d=n.formatTimeDiff(r);s.getVoltime("deal",r),s.setData({"PerInfo.timeDuring":d+" ( "+u+" 次 ) ",showInfo:!0,"PerInfo.delCount":c,"PerInfo.timePerOne":0==u?"":n.formatTimeDiff(r/u)})}uni.hideLoading({success:function(t){}}),uni.stopPullDownRefresh({success:function(t){}})},fail:function(t){uni.hideLoading({success:function(t){}}),uni.stopPullDownRefresh({success:function(t){}}),uni.showModal({showCancel:!1,title:"错误",content:t.errMsg})}})},ACTmodel:function(){console.log("占位：函数 ACTmodel 未声明")}}};e.default=h}).call(this,i("a9ff")["default"])},"76aa":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.COLORTHEMECOMMON},[i("v-uni-view",{staticClass:"pagecontent",staticStyle:{"justify-content":"flex-start"},style:t.COLORTHEMESTYLE},[i("v-uni-view",{staticClass:"PAGECONTENT"},[t.VolListModel?i("v-uni-view",{staticClass:"MODEL"},[i("v-uni-view",{staticClass:"MODELchild"},[i("v-uni-view",{staticClass:"MODELtitle"},[i("v-uni-text",[t._v("查看志愿时长申请")])],1),t.Vollist.length>0?[i("v-uni-scroll-view",{staticStyle:{"max-height":"70vh"},attrs:{"scroll-y":!0}},[i("v-uni-view",{staticClass:"TABLE2",staticStyle:{padding:"0",color:"var(--color-text)"}},[i("v-uni-view",{staticClass:"FORMitem FORMline",staticStyle:{width:"500rpx","justify-content":"space-between","padding-left":"7.5rpx","padding-right":"7.5rpx","margin-bottom":"0px","background-color":"var(--color-blk-back2)"}},[i("v-uni-view",{staticClass:"TABLE2block"},[t._v("提交时间")]),i("v-uni-view",{staticClass:"TABLE2block"},[t._v("申请时长 / 状态")])],1),t._l(t.Vollist,(function(e,a){return i("v-uni-view",[i("v-uni-view",{staticClass:"FORMitem FORMline",staticStyle:{width:"500rpx","justify-content":"space-between","padding-left":"7.5rpx","padding-right":"7.5rpx","margin-top":"2px","margin-bottom":"0px"},style:"background-color:"+(a%2==0?"var(--color-blk-back)":"var(--color-blk-back2)")},[i("v-uni-view",{staticClass:"TABLE2block tabletext"},[t._v(t._s(e.time))]),i("v-uni-view",{staticClass:"TABLE2block tabletext"},[t._v(t._s("("+e.applyTime+"h) "+e.status))])],1)],1)}))],2)],1)]:[i("v-uni-view",{staticClass:"MODELblock"},[i("v-uni-text",[t._v("暂无申请记录")])],1)],i("v-uni-view",{staticClass:"MODELrow"},[i("v-uni-button",{staticClass:"MODELbtn",attrs:{"data-id":"hide"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showVol.apply(void 0,arguments)}}},[t._v("关闭")])],1)],2)],1):t._e(),t.ApplyVolModel?i("v-uni-view",{staticClass:"MODEL"},[i("v-uni-view",{staticClass:"MODELchild"},[i("v-uni-view",{staticClass:"MODELtitle"},[i("v-uni-text",[t._v("申请志愿时长证明")])],1),i("v-uni-view",{staticClass:"MODELblock"},[i("v-uni-text",[t._v(t._s("您当前最多可开："+t.PerInfo.hasReVolHour))])],1),i("v-uni-input",{staticClass:"MODELinput",attrs:{maxlength:"-1","data-id":"input",placeholder:"输入申请的小时数","auto-focus":!0},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.applyVol.apply(void 0,arguments)}}}),i("v-uni-input",{staticClass:"MODELinput",staticStyle:{"margin-top":"20rpx"},attrs:{maxlength:"-1","data-id":"input2",placeholder:"输入您所在的学院"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.applyVol.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"MODELrow"},[i("v-uni-button",{staticClass:"MODELbtn",attrs:{"data-id":"confirm"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.applyVol.apply(void 0,arguments)}}},[t._v("确认")]),i("v-uni-button",{staticClass:"MODELbtn",attrs:{normal:!0,"data-id":"cancel"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.applyVol.apply(void 0,arguments)}}},[t._v("取消")])],1)],1)],1):t._e(),i("v-uni-view",{staticClass:"con"},[i("v-uni-view",{staticClass:"FORM"},[i("v-uni-view",{staticClass:"FORMheadline"},[i("v-uni-view",{staticStyle:{"font-size":"60rpx","font-weight":"700"}},[t._v("欢迎您，"+t._s(t.OpData.name))])],1),i("v-uni-view",{staticClass:"FORMtext",staticStyle:{margin:"50rpx 0 20rpx 0","justify-content":"space-between"}},[i("v-uni-view",{staticClass:"FORMtextline"},[t._v("义诊荣誉榜")]),i("v-uni-view",{staticClass:"FORMlineright",staticStyle:{"font-size":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getPaiHang.apply(void 0,arguments)}}},[t._v(t._s(t.showPaiHang?"折叠":"展开"))])],1),t.showPaiHang?[i("v-uni-view",{staticClass:"FORMitem FORMline",staticStyle:{"font-size":"30rpx"}},[i("v-uni-view",{staticClass:"FORMlineleft"},[t._v("义诊处理")]),i("v-uni-view",{staticClass:"FORMlineright"},[t._v("姓名 / 时长 ( 已完成 / 总次数 )")])],1),t._l(t.PaiHangT,(function(e,a){return i("v-uni-view",{staticClass:"FORMitem FORMline",staticStyle:{padding:"3.75rpx 0 3.75rpx 45rpx"}},[i("v-uni-view",{staticClass:"FORMlineleft tablename"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"FORMlineright"},[t._v(t._s(e.timeDuring))])],1)})),i("v-uni-view",{staticClass:"FORMitem FORMline"},[i("v-uni-view",{staticClass:"FORMlineleft"},[t._v("义诊评价")]),i("v-uni-view",{staticClass:"FORMlineright"},[t._v("姓名 / 评分 ( 总评价数 )")])],1),t._l(t.PaiHangS,(function(e,a){return i("v-uni-view",{staticClass:"FORMitem FORMline",staticStyle:{padding:"3.75rpx 0 3.75rpx 45rpx"}},[i("v-uni-view",{staticClass:"FORMlineleft tablename"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"FORMlineright"},[t._l([1,2,3,4,5],(function(a,n){return i("v-uni-view",{staticClass:"starItem"},[i("v-uni-view",{staticClass:"starEframe",style:"width: "+(e.starfloor+1!=a?45:45*e.starpiece)+"rpx;"},[i("v-uni-image",{staticClass:"starEimg",attrs:{mode:"heightFix",src:"/static/images/star"+(a<=e.starfloor+1?"L":"E")+".png"}})],1),e.starfloor+1==a?i("v-uni-view",{staticClass:"starEframe",style:"width:"+45*(1-e.starpiece)+"rpx;left:"+45*e.starpiece+"rpx;"},[i("v-uni-image",{staticClass:"starEimg",style:"left: -"+45*e.starpiece+"rpx;",attrs:{mode:"heightFix",src:"/static/images/starE.png"}})],1):t._e()],1)})),t._v(t._s(e.as)+" ("+t._s(e.ac)+")")],2)],1)}))]:t._e(),t.showInfo?[i("v-uni-view",{staticClass:"FORMtext",staticStyle:{margin:"50rpx 0 20rpx 0","justify-content":"space-between"}},[i("v-uni-view",{staticClass:"FORMtextline"},[t._v("您的义诊评价")]),i("v-uni-view",{staticClass:"FORMlineright",staticStyle:{"font-size":"20rpx"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showStatusFun.apply(void 0,arguments)}}},[t._v(t._s(t.showStatus?"折叠":"展开"))])],1),t.showStatus?[i("v-uni-view",{staticClass:"FORMitem FORMline"},[i("v-uni-view",{staticClass:"FORMlineleft"},[t._v("处理义诊")]),i("v-uni-view",{staticClass:"FORMlineright"},[t._v(t._s(t.PerInfo.delCount)+" 次")])],1),i("v-uni-view",{staticClass:"FORMitem FORMline"},[i("v-uni-view",{staticClass:"FORMlineleft"},[t._v("义诊时长")]),i("v-uni-view",{staticClass:"FORMlineright"},[t._v(t._s(t.PerInfo.timeDuring))])],1),i("v-uni-view",{staticClass:"FORMitem FORMline"},[i("v-uni-view",{staticClass:"FORMlineleft"},[t._v("平均时长")]),i("v-uni-view",{staticClass:"FORMlineright"},[t._v(t._s(t.PerInfo.timePerOne?t.PerInfo.timePerOne:"0 秒")+"/次")])],1),i("v-uni-view",{staticClass:"FORMitem FORMline"},[i("v-uni-view",{staticClass:"FORMlineleft"},[t._v("平均评分")]),i("v-uni-view",{staticClass:"FORMitem"},[i("v-uni-view",{staticClass:"FORMitem FORMline",staticStyle:{"text-align":"right","justify-content":"flex-end"}},[t._v(t._s(t.PerInfo.star)+"\n                    星 ( "+t._s(t.PerInfo.starCount)+" 次 )")]),i("v-uni-view",{staticClass:"FORMitem FORMline"},t._l([1,2,3,4,5],(function(e,a){return i("v-uni-view",{staticClass:"starItem"},[i("v-uni-view",{staticClass:"starEframe",style:"width: "+(t.starfloor+1!=e?45:45*t.starpiece)+"rpx;"},[i("v-uni-image",{staticClass:"starEimg",attrs:{mode:"heightFix",src:"/static/images/star"+(e<=t.starfloor+1?"L":"E")+".png"}})],1),t.starfloor+1==e?i("v-uni-view",{staticClass:"starEframe",style:"width:"+45*(1-t.starpiece)+"rpx;left:"+45*t.starpiece+"rpx;"},[i("v-uni-image",{staticClass:"starEimg",style:"left: -"+45*t.starpiece+"rpx;",attrs:{mode:"heightFix",src:"/static/images/starE.png"}})],1):t._e()],1)})),1)],1)],1),i("v-uni-view",{staticClass:"FORMitem FORMline"},[i("v-uni-view",{staticClass:"FORMlineleft"},[t._v("签到次数")]),i("v-uni-view",{staticClass:"FORMlineright"},[t._v(t._s(t.PerInfo.signInRecord.length?t.PerInfo.signInRecord.length:0)+" 次")])],1),i("v-uni-view",{staticClass:"FORMitem FORMline"},[i("v-uni-view",{staticClass:"FORMlineleft"},[t._v("签到记录")]),i("v-uni-view",{staticClass:"FORMlineright"},[i("v-uni-view",{staticClass:"FORMitem"},t._l(t.PerInfo.signInRecord,(function(e,a){return i("v-uni-view",{staticClass:"FORMitem FORMline"},[t._v(t._s(t.m.s(e)))])})),1)],1)],1),i("v-uni-view",{staticClass:"FORMitem FORMline"},[i("v-uni-view",{staticClass:"FORMlineleft"},[t._v("累计志愿时长")]),i("v-uni-view",{staticClass:"FORMlineright"},[i("v-uni-view",{staticClass:"FORMitem"},[i("v-uni-view",{staticClass:"FORMitem FORMline",staticStyle:{"align-items":"flex-end","justify-content":"flex-end","text-align":"right"}},[t._v(t._s(t.PerInfo.VolTime))]),i("v-uni-view",{staticClass:"FORMitem FORMline",staticStyle:{"align-items":"flex-end","justify-content":"flex-end","text-align":"right"}},[t._v("( 签到次数 * 1h + 义诊时长 )")])],1)],1)],1),i("v-uni-view",{staticClass:"FORMitem FORMline"},[i("v-uni-view",{staticClass:"FORMlineleft"},[t._v("可开志愿时长")]),i("v-uni-view",{staticClass:"FORMlineright"},[t._v(t._s(t.PerInfo.hasReVolTime))])],1)]:t._e(),t.Note?[i("v-uni-view",{staticClass:"FORMtextline",staticStyle:{margin:"30rpx 0 10rpx 0"}},[t._v("公告")]),i("v-uni-view",{staticClass:"FORMitem FORMline",staticStyle:{"font-size":"35rpx"}},[t._v(t._s(t.Note))]),i("v-uni-view",{staticClass:"FORMitem FORMline",staticStyle:{padding:"0",margin:"15rpx 0 0 0"}},[i("v-uni-button",{staticStyle:{width:"350rpx",margin:"0 auto","font-size":"35rpx"},attrs:{"data-id":"apply"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.applyVol.apply(void 0,arguments)}}},[t._v("申请志愿证明")]),i("v-uni-button",{staticStyle:{width:"250rpx",margin:"0 auto","font-size":"35rpx"},attrs:{normal:!0,"data-id":"show"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showVol.apply(void 0,arguments)}}},[t._v("查看申请")])],1)]:t._e(),i("v-uni-view",{staticStyle:{height:"30rpx"}}),i("v-uni-view",{staticClass:"FORMtextline",staticStyle:{margin:"0"}},[t._v("您的服务历史")]),i("v-uni-view",{staticStyle:{height:"10rpx"}}),i("v-uni-view",{staticClass:"LineFliterLine"},[i("v-uni-view",{staticClass:"LineFliterHead"},[t._v("状态筛选")]),t._l(["全部","已评价","未评价","进行中","其他"],(function(e,a){return i("v-uni-view",{class:t.fliterText==e?"LineFliterActive":"LineFliter",attrs:{"data-id":e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.DataFliter.apply(void 0,arguments)}}},[t._v(t._s(e))])}))],2),0==t.BookDatafliter.length?i("v-uni-view",{staticClass:"FORMitem FORMline"},[t._v("暂无此状态预约")]):t._e(),t._l(t.BookDatafliter,(function(e,a){return i("v-uni-view",{staticClass:"FORMitem"},[i("v-uni-view",{staticClass:"FORMline"},[i("v-uni-view",{staticClass:"FORMlineleft",staticStyle:{"font-size":"32rpx",display:"flex","justify-content":"flex-start","align-items":"center"}},[t._v("["+t._s(a+1)+"]"),i("v-uni-icon",{attrs:{type:t.IconType[e.statusText]?t.IconType[e.statusText]:"success",size:"40rpx",color:"var(--color-main)"}}),t._v(t._s(e.statusText))],1),i("v-uni-view",{staticClass:"FORMlineright",staticStyle:{"font-size":"15rpx"}},[t._v(t._s(e.book.date+(-1==e.book.section?" 临时预约":" 第"+e.book.section+"时段")))])],1),i("v-uni-view",{staticClass:"FORMline",staticStyle:{"white-space":"pre-wrap"},attrs:{"data-id":e._id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.BookDetail.apply(void 0,arguments)}}},[t._v(t._s("学工号："+e.book.stuid+"\n姓名："+e.book.stuname+"\n手机号："+e.book.mobile+"\n问题概述："+e.book.question)),"义诊已完成"==e.statusText?[t._v(t._s("\n评分："+e.comment.star)+"星")]:t._e()],2)],1)}))]:t._e()],2)],1)],1)],1)],1)},n=[]},"887b":function(t,e,i){"use strict";i.r(e);var a=i("76aa"),n=i("04fb");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("3249");var o=i("f0c5"),l=i("1175"),r=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"08fc2cc6",null,!1,a["a"],void 0);"function"===typeof l["a"]&&Object(l["a"])(r),e["default"]=r.exports},d3e5:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.ca=void 0,e.request=r,e.showFail=l;i("51b3"),i("460c");var a=getApp(),n=a.globalData,s=n.ENCRYPTO,o="加载";function l(t,e){"string"!=typeof e&&(e=o),uni.hideLoading(),uni.showModal({title:e+"失败",content:t,showCancel:!1})}function r(t){var e,i,a,r,c=t.title,u=t.tipShow,v=t.tipOption,f=t.tipActionCancel,d=t.tipActionSuccess,p=(t.packPublicKey,t.data),h=t.keyOption,g=t.optionUrl,m=t.urlPath,w=t.success,O=t.fail;if("boolean"!=typeof u&&(u=!0),"string"!=typeof c&&(c="加载"),o=c,console.log("开始请求",c,t),u){if(!v)return void console.error("使用tipShow请传入tipOption");if(e=v.WAIT,i=v.tipText,a=v.tipSubText,r=v.cancelText,!e)return void console.error("使用tipShow请传入tipOption.WAIT，请使用当前显示页面的WAITObj！");i||(i="正在"+c),a||(a="请稍后"),r||(r="取消")}var M={};u&&n.showWait(e,i,a,r,(function(t,e){if(t){if("function"==typeof d&&d(e))return;e()}else{if("function"==typeof M.abort&&M.abort(),"function"==typeof f&&f(e))return;e()}})),console.log("keyoption=",h);var R=s.cover.packData(p,!0,h),T="http://"+n.ServerUrl+"/"+n.AppServerName+"/"+m;console.log(m),g&&(T=m),console.log(T),M=uni.request({url:T,method:"POST",header:{"content-type":"application/json"},data:R,responseType:"json",sslVerify:!1,firstIpv4:!0,success:function(t){if(console.log("收到数据",t),200!=t.statusCode)return u&&n.hideWait(e,!1),void l("服务器错误："+t.data.error,c);var i=s.cover.unpackData(t.data),a=function(t){"boolean"!=typeof t&&(t=!0),u&&n.hideWait(e,t)};"function"==typeof w&&w(i,a)||a()},fail:function(t){console.log("请求失败",t);var i=function(){(u||"function"!=typeof O)&&l("错误："+t.errMsg,c),u&&n.hideWait(e,!1)};"function"==typeof O&&(u&&l("错误："+t.errMsg,c),O(t,i))||i()}})}var c=i("ffcd"),u=i("1818"),v={getPublicKey:c.ca.getPublicKey,getPublicSignKey:c.ca.getPublicSignKey,querySignValid:function(t,e,i){return uni.showLoading({title:"签名验证中"}),u.verifySign(t,e,this.getPublicSignKey())?(console.log(n.CAURL),r({tipShow:!1,title:"验证签名",optionUrl:!0,urlPath:n.CAURL+"queryB",keyOption:this.getPublicKey(),data:{certificate:e},success:function(e,a){if(uni.hideLoading(),e.status){if(1==e.data){var n=JSON.parse(t).data;i(n)}else i("");a(!0)}else a(!1),server.showFail(e.errMsg);return!0},fail:function(){uni.hideLoading(),i("")}}),!0):(uni.hideLoading(),!1)}};e.ca=v}}]);