(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-main-account-joinin"],{2527:function(t,e,a){"use strict";var i=a("4557"),n=a.n(i);n.a},"3a40":function(t,e,a){"use strict";a.r(e);var i=a("9b60"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},"3d5d":function(t,e,a){t.exports=a.p+"static/img/logo.0cce880a.png"},"3e95":function(t,e,a){"use strict";a.r(e);var i=a("52f9"),n=a("3a40");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("2527");var o=a("f0c5"),r=Object(o["a"])(n["default"],i["b"],i["c"],!1,null,"67a4becb",null,!1,i["a"],void 0);e["default"]=r.exports},4557:function(t,e,a){var i=a("9bd0");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1ea8e098",i,!0,{sourceMap:!1,shadowMode:!1})},"52f9":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.COLORTHEMECOMMON},[i("v-uni-view",{staticClass:"pagecontent",style:t.COLORTHEMESTYLE},[t.WAIT.show?i("v-uni-view",{staticClass:"WaitingModel"},[i("v-uni-view",{staticClass:"WaitingModelWin"},[i("v-uni-view",{staticClass:"WaitingModelTitle"},[t._v(t._s(t.WAIT.title))]),i("v-uni-view",{staticClass:"WaitingModelSubtitle"},[t._v(t._s(t.WAIT.subtitle))]),i("v-uni-view",{staticClass:"WaitingModelTime"},[t._v(t._s(t.WAIT.time))]),t.WAIT.cannotCancal?t._e():i("v-uni-button",{staticClass:"WaitingModelCancel",attrs:{disabled:t.WAIT.WAITCANCEL},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideWait(!1)}}},[t._v(t._s(t.WAIT.WAITCANCEL?t.WAIT.WAITEND?"即将完成":"正在取消":t.WAIT.buttontitle))])],1)],1):t._e(),i("v-uni-view",{staticStyle:{"justify-self":"center",display:"flex","flex-direction":"column"}},[i("v-uni-view",{staticStyle:{"justify-content":"center","align-items":"center",display:"flex"}},[i("v-uni-image",{staticStyle:{height:"400rpx"},attrs:{src:a("3d5d"),mode:"aspectFit"}})],1),i("v-uni-view",{staticClass:"subtitle",staticStyle:{margin:"20rpx auto","font-size":"45rpx"}},[t._v("申请加入哈工大电脑110俱乐部")]),[i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle regformleft"},[t._v("性别")]),i("v-uni-picker",{staticClass:"subtitle pickertitle",attrs:{mode:"selector",disabled:t.LOADINGREG,range:t.PickerData.gender,"data-id":"gender"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.PickerInputData.apply(void 0,arguments)}}},[t._v(t._s(t.DataInput.gender?t.DataInput.gender:"请选择性别"))])],1),i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle regformleft"},[t._v("学历")]),i("v-uni-picker",{staticClass:"subtitle pickertitle",attrs:{mode:"selector",disabled:t.LOADINGREG,range:t.PickerData.stutype,"data-id":"stutype"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.PickerInputData.apply(void 0,arguments)}}},[t._v(t._s(t.DataInput.stutype?t.DataInput.stutype:"请选择学历"))])],1),i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle regformleft"},[t._v("年级（入学年份）")]),i("v-uni-picker",{staticClass:"subtitle pickertitle",attrs:{mode:"selector",disabled:t.LOADINGREG,range:t.PickerData.grade,"data-id":"grade"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.PickerInputData.apply(void 0,arguments)}}},[t._v(t._s(t.DataInput.grade?t.DataInput.grade:"请选择年级"))])],1),i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle regformleft"},[t._v("学院")]),i("v-uni-input",{staticClass:"formInput",attrs:{disabled:t.LOADINGREG,placeholder:"当前所在学院"},model:{value:t.DataInput.school,callback:function(e){t.$set(t.DataInput,"school",e)},expression:"DataInput.school"}})],1),i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle regformleft"},[t._v("专业")]),i("v-uni-input",{staticClass:"formInput",attrs:{disabled:t.LOADINGREG,placeholder:"专业或集群名称"},model:{value:t.DataInput.major,callback:function(e){t.$set(t.DataInput,"major",e)},expression:"DataInput.major"}})],1),i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle",staticStyle:{"margin-left":"10rpx"}},[t._v("是否是入党积极分子（预备党员、党员请填是）")]),i("v-uni-view",{staticStyle:{"justify-content":"center",display:"flex","justify-self":"center"}},[i("v-uni-switch",{attrs:{color:"var(--color-main)",disabled:t.LOADINGREG,"data-id":"cpcreq"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.InputData.apply(void 0,arguments)}},model:{value:t.DataInput.cpcreq,callback:function(e){t.$set(t.DataInput,"cpcreq",e)},expression:"DataInput.cpcreq"}})],1)],1),i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle regformleft"},[t._v("政治面貌")]),i("v-uni-picker",{staticClass:"subtitle pickertitle",attrs:{mode:"selector",disabled:t.LOADINGREG,range:t.PickerData.cpcname,"data-id":"cpcname"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.PickerInputData.apply(void 0,arguments)}}},[t._v(t._s(t.DataInput.cpcname?t.DataInput.cpcname:"请选择政治面貌"))])],1),i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle regformleft"},[t._v("手机号")]),i("v-uni-input",{staticClass:"formInput",attrs:{disabled:t.LOADINGREG,placeholder:"请输入手机号",type:"number"},model:{value:t.DataInput.mobile,callback:function(e){t.$set(t.DataInput,"mobile",e)},expression:"DataInput.mobile"}})],1),i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle regformleft"},[t._v("QQ号")]),i("v-uni-input",{staticClass:"formInput",attrs:{disabled:t.LOADINGREG,placeholder:"请输入QQ号",type:"number"},model:{value:t.DataInput.qq,callback:function(e){t.$set(t.DataInput,"qq",e)},expression:"DataInput.qq"}})],1),i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle regformleft"},[t._v("自我介绍")]),i("v-uni-input",{staticClass:"formInput",attrs:{disabled:t.LOADINGREG,placeholder:"兴趣爱好，个人能力等"},model:{value:t.DataInput["自我介绍"],callback:function(e){t.$set(t.DataInput,"自我介绍",e)},expression:"DataInput['自我介绍']"}})],1),i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle regformleft"},[t._v("部门意向")]),i("v-uni-picker",{staticClass:"subtitle pickertitle",attrs:{mode:"selector",disabled:t.LOADINGREG,range:t.PickerData.department,"data-id":"department"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.PickerInputData.apply(void 0,arguments)}}},[t._v(t._s(t.DataInput.department?t.DataInput.department:"选择你想加入的部门"))])],1),i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle regformleft"},[t._v("加入社团的理由")]),i("v-uni-input",{staticClass:"formInput",attrs:{disabled:t.LOADINGREG,placeholder:"请输入加入社团的理由"},model:{value:t.DataInput["加入社团的理由"],callback:function(e){t.$set(t.DataInput,"加入社团的理由",e)},expression:"DataInput['加入社团的理由']"}})],1),i("v-uni-view",{staticClass:"formLine"},[i("v-uni-view",{staticClass:"subtitle regformleft"},[t._v("对社团的期望")]),i("v-uni-input",{staticClass:"formInput",attrs:{disabled:t.LOADINGREG,placeholder:"请输入对社团的期望"},model:{value:t.DataInput["对社团的期望"],callback:function(e){t.$set(t.DataInput,"对社团的期望",e)},expression:"DataInput['对社团的期望']"}})],1)],i("v-uni-view",{staticStyle:{margin:"20rpx"}},[i("v-uni-button",{staticClass:"BTNline",staticStyle:{"white-space":"pre","font-size":"40rpx",margin:"30rpx auto",width:"700rpx"},attrs:{disabled:t.LOADINGREG},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.UserRegPre()}}},[t.LOADINGREG?[i("v-uni-image",{staticClass:"loadingBTNicon",staticStyle:{"margin-right":"10rpx"},attrs:{src:a("9215"),mode:"aspectFit"}})]:t._e(),t.LOADINGREG?t._e():i("v-uni-view",{staticClass:"btnicon iconfont icon-denglu",staticStyle:{"margin-right":"15rpx","font-size":"40rpx"}}),t._v("申请加入社团")],2)],1)],2)],1)],1)},n=[]},9215:function(t,e){t.exports="data:image/gif;base64,R0lGODlhggCCAKIAAAAAAP///7W1tbGxsf///wAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAEACwAAAAAggCCAAAD/0i63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdG3feK7vfO+3gCDgZwkEfEIhcWI08pLJJaTZ3EGVUgfVmbtis43t8eb9ghlicvn8SNfKQ3Z7+17LtfQZ/D7Nw+BxfGFuL3uCc1R/hod4iS6LjIOOLJCRklWUdpaNmCqVm2h+J4CgfaIln6ULhKipqgqsI66vBLEhsxhRIgICJLYfuBZXIby8I78emhzBFMXOIpOyXh2AgRzO2CFcJsMb1UEg2NlLuhrf4OHixbQL5+i76saq7u8j8euW9NYm9/KC+i368QH4ol8vMARlGJSSkIbAH/R23IP4zUc8isxsjEOSEf+HP4zl2NEIKbKkyZMoU6pcybKly5cwY8pkqK8jx5rTIOAkNXCnsnY+bXYJ+pMA0aI0j0JxoLQbm6ZLG0AlmWWqGaBQ/02NkPVQ15lgw4odS7as2bNo06pdi4Pqk6vknPbISYTnW6Rt7VrRm7faTb563P31G1gwyIqKDNeNCIQxQsejID+VLKLhHcvAKGtVnIwzKM25zi2DW5l0Bc8ZRHuLSkJuaMKjhUqle4t2asCvXZuznVn3bd6/TedmXRt48HrUhA93Oxv5A9k6lY/Ey8B3c+ulcFc3jpX7JmbUuxN/pX07dvHjs4dH7/z5+s3nzaeP7h3+fPfx2bdnZPO9/n13/PVXn3z5PTYggdJdd58c5eG3oIMFxnUggvtx5d9iE1IIIAXQ6QDdhRpuaGCECiYIIXMSZqjhaiAOpeKKLJLo4oMTtFhihYeZSB+NEtjYl447ongajyD1RmSPQJrko1pLptUkWk+eFaVZU1J5JFvXYanlllxukAAAIfkEBQUABAAsCwAEAFcALwAAA9FIutz+MMIQpL0460jp/mB4dZ1oniDpoWw7qW4sq5Vso/Sti/luDoNWzwcCAllDosZoxMGUG+bxlIRipEFT1XrBap/cjJcHDl+lZJJ5iQ5t15Hx5w1/YLMbet0h1+j3DX0Yf4ALgiNlhXFtGYSKBIcSjo+RL2qPFneNiZh2jIgrnZmfFqE6AKgALpVwqamrpHWusyysYbO4KEyYuL0nU4+9vqInwsPEIcbHyB/KuczNzq7QINLT1BvWr9gZ2qjcGt7g4dLj2crm58Lp0bTs1dvjCQAh+QQFBQAEACwgAAQAVwAvAAAD2Ui63P5sDEirvTg/KbX/oMdxYWmaY3eurJVObSwr72yz9X0CPICnOlOvt8qtAgHWcHgympDI1ZKIAp6g0N2UVx0dsUnhlhtygsBh7bZk9qBjYx+orXm34mXrGTzDf+gYdnB+GoAWgjKEGYYUaGmJiheMEIh9YyJ6GZU2kRWTDpuWa4uZF6GclxifDKeioy6lFa2or56xlLOuU6okmnxBD50QKoG/wMGpM7k6wlfGx8i7ys/QDckyWNUV0jdR2ttU3+Lj5OXm5+jp6uvs7e7v8PHy8/T19vf4FgkAIfkEBQUABAAsPQADAEIAQgAAA9ZIBAz6MMpJq52t3c17zZknjhaokWhqMmk7ro4rb/Bsf+utR/Xu967BwPcApoRC4iLXQiKJRpIz+WOipkOodYRVLk3HqTfa6Y63HrOSvFGv0W23FiySz0F1sbcIt9jvIWV6ewpsFH+AJ3FOhBCGEVhZjV94i0+TfIEXiISam4OYV6AzAQFEnCSlpaeXpKqqrDavs6Ejs7S1HrevuR27sL0bv8DBFcOrxRbHycrLzBPHps/Qw9MU1dbXu9nNxNzG0t/i4+Tl5ufo6err7O3u7/Dx8vP09QQJACH5BAUFAAQALE8ACwAvAFcAAAO3SLq88KDJSeuE0Op9ceag5n1h2YykaaKpGrKRu7KyCtfljYNwvG+6nygorBCLHRRyqFxSjk4HNEqYRntUidW55dKEg4Hl+wuHjU2ceY3G7NbwccsEj2cXdfadkDfv+X1nd4GCg4F/hGKGh3uEf4B5jwp9knh6lZaYmpucnZ6foKGio6SlTgGoqaqrrKk4rbCxqDKyta0utrmuuLq1r72wpsLDxMXGx8jJysvMzc7P0NHS09TV1pIJACH5BAUFAAQALE8AIAAvAFcAAAOrSLrc/g5IAKu9bE7Mu/5d+HykaBJkeoapul6t+0KxPDd1eY+5tke9zS8TlAxxRcpxkVwic05gLMprUWm6K9ao7Xq/4LB4TC6bz+j0ccBuu9/w9i1Or7Nf9nx8pe/L+X55c4F0aoaHiImKi4yNjo8zAQFokpVllZiTYpmYY5ydYZ+gYKKWoaWbpZqkqqminqinr66cZJ9mo5erkLy9vr/AwcLDxMXGx8jJyhUJACH5BAUFAAQALD0APQBCAEIAAAOySLrc/lCBSau9Nuodsf8VJ3Jg+Y3oY65Z6kps/L6xPLu1ec/5uf/AoHBILBqPyKRyyWw6n9CodEoVDgbV2XWbRW2/2O4G/BWPyVwzBF1WP9hpdwMeljPodbsCr7/D+35sgHt/RwEBVoJFh4dDaIuMjY5xQ5GSk0iWiIMLmpwMnp8EmpufoaKnnKmqlqKjra6rgKSxsKi2rJGur7q3vb6Mu7J9w8TBu6/IysvMzc7P0NFJCQAh+QQFBQAEACwgAE8AVwAvAAADzki63P4wygcqmDjrzYn9XSiOzWdeZKpKp7m+sNe6cR3Ora1reL7/kN4JSHQIacXkEZQsLi1N5RMVBU6rziVWMhiktNtHt6sShh3j8Qp3bqTJr2Hb/YYxf4HA5u2dd/J5e3V+GoCAGnx9hBOGgYiDixKNeoJpkZKNHHyXEZMdm5wOnpqQoQujpJamp5mfoKuoqWqrBLGycKa2lbO5rSKvnLq7uMG+v6WRwreKycbHqpfKsr2GL8TRzrQk0toc3N2F2eB/4uMb3+aMh+kpjpwJACH5BAUFAAQALAsATwBXAC8AAAPTSLrc/jDKSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94COwAHgQoHs/2+5mEQlqxWEIOZ0sjyfmERYFNai92vQwGFu3W1bV8vxXxeHXFUs7ntJYc9cLBFDWrbL6H52x1dnAXYip8fYR/VIeCg3GFgCaIiZCLjCVtGnd4kZgklJVoGHojoaKdnk6gjhmcG4Yhp6iwkh+zFa+1nx24uX67vBq+v4rBSB7Eb8ActhtLILrNws9uHtLTSTkK2NlrOd3bIuHi0czl4+fo5sbrIe3u76kkCQAh+QQFBQAEACwDAD0AQgBCAAADxUi63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdG3feK5HQbBPveDvESz6hgtjEUlQLofO5y4qhFKR1J71unViuV0lE+wZDEzekNmMrqrX7JJ2BI8zFfVzBcAHyPJ7fXwwgBSCgi55ehOHfYl1Fo2DLIWBjS2VhpKUkBeSfiuZmpcqoqOHpaaMmymqq6Qnrq+oKLISn7WdGrixuhm8JbaziMG+u6wkwsOOJnAfwMUg0EjTQ9U/1zvZOts53Tjf4LR3C8QJACH5BAUFAAQALAQAIAAvAFcAAAOqSLrc/jDKSau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru+8GvzAoHAI9BCPyB8nySRumtDiM8o0Uo+9rHbL7Xq/4PBrMJiRz7Czutxaq1nutyouR9HR8/vqTs7r/XF7f4BuHgCHABKDHIiIEYEfjY2PeCCSjpQil5gsm4ctnomdoaCepaajm6eXLqSprK+wK66ztCq2Kbi5qLWqsZKrwMGcv58vssfEEQkAIfkECQUABAAsBAALAC8AVwAAA6RIutz+MMpJq7046827/2AojmRpnmiqrmzrvnAsz3QdBQGN4/Luw77gKyhsEX+u4y6p5BmbuaeS2aROpcfhFYvULmdOm3hMLpvP6LR6vRm43/C4/O2Z2+9uDn4/b/P/eX6AeHWDdmyIiYqLjI2OjxkAkgAxk5YulpmUK5qZKp2aKKCdJqOkJaahJKmeq6yTpa+SqLKbrq8nsim4u6Ysoy+qMJcpCQA7"},"9b60":function(t,e,a){"use strict";(function(t){a("7a82");var i=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("5530"));a("a9e3"),a("14d9"),a("d401"),a("d3b7"),a("25f0");for(var s=a("51b3"),o=a("460c"),r=null,c=getApp(),u=c.globalData,l=(u.ENCRYPTO,t.database()),p=(l.collection("ProgramSet"),l.collection("Users")),d=(a("d3e5"),[]),v=Number(o.getTime(!0,!1).substring(0,4))-5,f=0;f<6;f++)d.push((v++).toString());var A={data:function(){return{PickerData:{gender:["男","女"],stutype:u.stutype,cpcname:u.cpcName,grade:d,department:u.AppSet.departmentData},LOADINGREG:!1,COLORTHEMECOMMON:u.COLORTHEMECOMMON,COLORTHEME:u.COLORTHEME,COLORTHEMESTYLE:u.COLORTHEMESTYLE,THEMEID:u.THEMEID,THEMETYPE:u.THEMETYPE,THEMELIST:u.THEMELIST,VERSION:u.VERSION,AD:u.AD,UserPasswordEnsure:"",UserPassword:"",UserEmail:"",DataInput:{requestJoinIn:!0,gender:"",grade:"",stutype:"",school:"",major:"",cpcname:"",cpcreq:!1,mobile:"",qq:"","自我介绍":"","加入社团的理由":"","对社团的期望":"",department:""},WAITCANCEL:!1,WAIT:{show:!1,title:"",subtitle:"",time:"00:00",sec:0,buttontitle:"",cancelfun:null,hasCancel:!1,cannotCancal:!1,WAITEND:!1,WAITCANCEL:!1},WAITEND:void 0}},onLoad:function(t){r=this,r.PageReflesh()},methods:{InputData:function(t){var e=t.currentTarget.dataset.id;console.log(e,t.detail.value),r.DataInput[e]=t.detail.value},PickerInputData:function(t){var e=t.currentTarget.dataset.id;console.log(e,t.detail.value),r.DataInput[e]=r.PickerData[e][t.detail.value]},PageReflesh:function(){u.RefleshGlobalData(),uni.setNavigationBarColor({backgroundColor:u.COLORTHEME["--color-main"],frontColor:u.COLORTHEME["--color-navitext"]});var t=u.USERDATA;r.DataInput={requestJoinIn:!0,gender:t.gender,grade:t.grade,stutype:t.stutype,school:t.school,major:t.major,cpcname:t.cpcMemberName,cpcreq:t.cpcMemberRequest,mobile:t.mobile,qq:t.qq,"自我介绍":t.requestJoinInData["自我介绍"],"加入社团的理由":t.requestJoinInData["加入社团的理由"],"对社团的期望":t.requestJoinInData["对社团的期望"],department:t.requestJoinInData["部门意向"]}},UserRegPre:function(){r.UserEmail,r.UserPassword,r.UserPasswordEnsure,r.DataInput.RealName,r.DataInput.IDNO;console.log(r.DataInput);var t=function(t){uni.hideLoading(),uni.showModal({title:"申请失败",content:t,showCancel:!1})},e=r.DataInput;e.requestJoinIn?""!=e.gender?""!=e.grade?""!=e.stutype?""!=e.school?""!=e.major?""!=e.cpcname?""!=e.mobile?""!=e.qq?""!=e["自我介绍"]?""!=e.department?""!=e["加入社团的理由"]?""!=e["对社团的期望"]?r.UserReg():t("请输入对社团的期望"):t("请输入加入社团的理由"):t("请选择部门意向"):t("请输入自我介绍"):t("请输入QQ号"):t("请输入手机号"):t("请选择政治面貌"):t("请输入专业"):t("请输入学院"):t("请选择学历"):t("请选择年级"):t("请选择性别"):r.UserReg()},UserReg:function(){r.LOADINGREG=!0;var t=r.DataInput;r.UserEmail,r.UserPassword,r.UserPasswordEnsure,r.DataInput.RealName,r.DataInput.IDNO;uni.showModal({title:"请确认信息无误",content:"申请后仍可进行修改",confirmText:"申请",success:function(e){if(e.cancel&&(r.LOADINGREG=!1),e.confirm){var a=u.USERDATA._id,i={requestJoinIn:!0,requestJoinInData:{"自我介绍":t["自我介绍"],"部门意向":t.department,"加入社团的理由":t["加入社团的理由"],"对社团的期望":t["对社团的期望"]},log:[],grade:t.grade,stutype:t.stutype,gender:t.gender,school:t.school,major:t.major,mobile:t.mobile,qq:t.qq,cpcMemberName:t.cpcname,cpcMemberRequest:t.cpcreq};(0,s.cbq)(p.doc(a).update(i),{success:function(t){console.log(t),u.USERDATA=(0,n.default)((0,n.default)({},u.USERDATA),i),uni.showModal({title:"申请成功",content:"您的申请结果将后续通过您填写的联系方式送达",showCancel:!1,success:function(){uni.navigateBack()}})},fail:function(t){o.showFail(t,"申请")},complete:function(t){r.LOADINGREG=!1}})}}})},PasswordEnsureInput:function(t){var e=t.detail.value;r.UserPasswordEnsure=e},PasswordInput:function(t){var e=t.detail.value;r.UserPassword=e},EmailInput:function(t){var e=t.detail.value;r.UserEmail=e},hideWait:function(t){u.hideWait(r.WAIT,t)}}};e.default=A}).call(this,a("a9ff")["default"])},"9bd0":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".subtitle[data-v-67a4becb]{font-size:%?40?%}.formInput[data-v-67a4becb]{text-align:left;font-size:%?40?%;margin-left:%?20?%;width:%?380?%}.formLine[data-v-67a4becb]{align-items:center;display:flex;margin:%?30?% auto 0 auto;justify-content:space-between;width:%?700?%}.regformleft[data-v-67a4becb]{margin-left:%?10?%}.pickertitle[data-v-67a4becb]{color:var(--color-subtitle)}",""]),t.exports=e},d3e5:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.ca=void 0,e.request=c,e.showFail=r;a("51b3"),a("460c");var i=getApp(),n=i.globalData,s=n.ENCRYPTO,o="加载";function r(t,e){"string"!=typeof e&&(e=o),uni.hideLoading(),uni.showModal({title:e+"失败",content:t,showCancel:!1})}function c(t){var e,a,i,c,u=t.title,l=t.tipShow,p=t.tipOption,d=t.tipActionCancel,v=t.tipActionSuccess,f=(t.packPublicKey,t.data),A=t.keyOption,m=t.optionUrl,I=t.urlPath,g=t.success,b=t.fail;if("boolean"!=typeof l&&(l=!0),"string"!=typeof u&&(u="加载"),o=u,console.log("开始请求",u,t),l){if(!p)return void console.error("使用tipShow请传入tipOption");if(e=p.WAIT,a=p.tipText,i=p.tipSubText,c=p.cancelText,!e)return void console.error("使用tipShow请传入tipOption.WAIT，请使用当前显示页面的WAITObj！");a||(a="正在"+u),i||(i="请稍后"),c||(c="取消")}var C={};l&&n.showWait(e,a,i,c,(function(t,e){if(t){if("function"==typeof v&&v(e))return;e()}else{if("function"==typeof C.abort&&C.abort(),"function"==typeof d&&d(e))return;e()}})),console.log("keyoption=",A);var D=s.cover.packData(f,!0,A),E="http://"+n.ServerUrl+"/"+n.AppServerName+"/"+I;console.log(I),m&&(E=I),console.log(E),C=uni.request({url:E,method:"POST",header:{"content-type":"application/json"},data:D,responseType:"json",sslVerify:!1,firstIpv4:!0,success:function(t){if(console.log("收到数据",t),200!=t.statusCode)return l&&n.hideWait(e,!1),void r("服务器错误："+t.data.error,u);var a=s.cover.unpackData(t.data),i=function(t){"boolean"!=typeof t&&(t=!0),l&&n.hideWait(e,t)};"function"==typeof g&&g(a,i)||i()},fail:function(t){console.log("请求失败",t);var a=function(){(l||"function"!=typeof b)&&r("错误："+t.errMsg,u),l&&n.hideWait(e,!1)};"function"==typeof b&&(l&&r("错误："+t.errMsg,u),b(t,a))||a()}})}var u=a("ffcd"),l=a("1818"),p={getPublicKey:u.ca.getPublicKey,getPublicSignKey:u.ca.getPublicSignKey,querySignValid:function(t,e,a){return uni.showLoading({title:"签名验证中"}),l.verifySign(t,e,this.getPublicSignKey())?(console.log(n.CAURL),c({tipShow:!1,title:"验证签名",optionUrl:!0,urlPath:n.CAURL+"queryB",keyOption:this.getPublicKey(),data:{certificate:e},success:function(e,i){if(uni.hideLoading(),e.status){if(1==e.data){var n=JSON.parse(t).data;a(n)}else a("");i(!0)}else i(!1),server.showFail(e.errMsg);return!0},fail:function(){uni.hideLoading(),a("")}}),!0):(uni.hideLoading(),!1)}};e.ca=p}}]);