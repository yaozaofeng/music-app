(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbd7c4c0"],{"77a5":function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return r}));var i=n("5693"),s=n("da71");function c(){var t="https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",e=Object.assign({},s["b"],{uin:0,needNewCode:1,platform:"h5"});return Object(i["a"])(t,e,s["c"])}function r(t){var e="https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n=Object.assign({},s["b"],{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(i["a"])(e,n,s["c"])}},"77e5":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"rank",staticClass:"rank"},[n("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[n("ul",t._l(t.topList,(function(e,i){return n("li",{key:i,staticClass:"item",on:{click:function(n){return t.selectItem(e)}}},[n("div",{staticClass:"icon"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),n("ul",{staticClass:"songlist"},t._l(e.songList,(function(e,i){return n("li",{key:i,staticClass:"song"},[n("span",[t._v(t._s(i+1))]),n("span",[t._v(t._s(e.songname)+"-"+t._s(e.singername))])])})),0)])})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[n("loading")],1)]),n("router-view")],1)},s=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),r=n("e9fc"),o=n("1cb8"),a=n("77a5"),l=n("da71"),p=n("510f"),u=n("2f62");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(n,!0).forEach((function(e){Object(c["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var b={mixins:[p["b"]],created:function(){this._getTopList()},data:function(){return{topList:[]}},methods:d({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.rank.style.bottom=e,this.$refs.toplist.refresh()},selectItem:function(t){this.$router.push({path:"/rank/".concat(t.id)}),this.setTopList(t)},_getTopList:function(){var t=this;Object(a["b"])().then((function(e){e.code===l["a"]&&(t.topList=e.data.topList)}))}},Object(u["d"])({setTopList:"SET_TOP_LIST"})),watch:{topList:function(){var t=this;setTimeout((function(){t.$Lazyload.lazyLoadHandler()}),20)}},components:{Scroll:r["a"],Loading:o["a"]}},h=b,g=(n("c6f8"),n("2877")),v=Object(g["a"])(h,i,s,!1,null,"75ec016a",null);e["default"]=v.exports},c6f8:function(t,e,n){"use strict";var i=n("cbc7"),s=n.n(i);s.a},cbc7:function(t,e,n){}}]);
//# sourceMappingURL=chunk-dbd7c4c0.980c0dbf.js.map