(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47539fed"],{"0c03":function(t,a,n){"use strict";n.r(a);var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"myCollect"},[n("div",{staticClass:"Tops"}),n("van-nav-bar",{attrs:{title:"我的收藏","left-arrow":""},on:{"click-left":t.goBack}}),t.isData?n("div",{staticClass:"collBodys"},t._l(t.datas,(function(a,i){return n("div",{key:i,staticClass:"center"},[n("img",{attrs:{src:a.smallImg},on:{click:function(n){return t.ff_goPages("Details",a.pid)}}}),n("p",[t._v(t._s(a.name))]),n("p",[n("span",[t._v(t._s(a.price))]),n("span",{staticClass:"iconfont icon-lajitong",on:{click:function(n){return t.ff_rovem(a.pid)}}})])])})),0):t._e(),t.isData?t._e():n("div",{staticClass:"isData"})],1)},e=[],s=(n("a342"),{name:"Collect",data:function(){return{datas:[],isData:!0}},methods:{goBack:function(){this.$router.go(-1)},ff_goPages:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.$router.push({name:t,query:{pid:a}})},ff_created:function(){var t=this;this.axios({url:"/findAllLike",method:"GET",params:{appkey:this.appkey,tokenString:this.useId}}).then((function(a){2e3==a.data.code&&(t.datas=a.data.result,0==t.datas&&(t.isData=!1))})).catch((function(t){}))},ff_rovem:function(t){var a=this;this.$dialog.confirm({message:"确认删除收藏"}).then((function(){a.axios({url:"/notlike",method:"POST",data:{appkey:a.appkey,pid:t,tokenString:a.useId}}).then((function(t){900==t.data.code&&(a.$toast(t.data.msg),a.ff_created())})).catch((function(t){}))})).catch((function(){}))}},created:function(){this.$toast.loading({message:"加载中...",forbidClick:!0,loadingType:"spinner"}),this.ff_created()}}),c=s,o=(n("cecf"),n("2877")),r=Object(o["a"])(c,i,e,!1,null,"dbe35ab0",null);a["default"]=r.exports},"38dd":function(t,a,n){},a342:function(t,a,n){},cecf:function(t,a,n){"use strict";n("38dd")}}]);
//# sourceMappingURL=chunk-47539fed.5587b1a1.js.map