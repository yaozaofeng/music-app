(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9617a3a2"],{"12a5":function(t,e,s){},5362:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"music-list"},[s("div",{staticClass:"back",on:{click:t.back}},[s("i",{staticClass:"icon-back"})]),s("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),s("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[s("div",{staticClass:"play-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[s("i",{staticClass:"icon-play"}),s("span",{staticClass:"text"},[t._v("随机播放全部")])])]),s("div",{ref:"filter",staticClass:"filter"})]),s("div",{ref:"layer",staticClass:"bg-layer"}),s("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[s("div",{staticClass:"song-list-wrapper"},[s("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[s("loading")],1)])],1)},i=[],a=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),r=s("e9fc"),c=s("1cb8"),o=s("99f1"),l=s("3e2c"),f=s("510f"),g=s("2f62");function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function p(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(s,!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var b=40,h=Object(l["c"])("transform"),d=Object(l["c"])("backdrop-filter"),y={mixins:[f["b"]],props:{bgImage:{type:String,default:""},songs:{type:Array,default:function(){return[]}},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url(".concat(this.bgImage,")")}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=-this.imageHeight+b,this.$refs.list.$el.style.top="".concat(this.imageHeight,"px")},methods:p({handlePlaylist:function(t){var e=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=e,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},random:function(){this.randomPlay({list:this.songs})}},Object(g["b"])(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var e=Math.max(this.minTransalteY,t),s=1,n=0,i=0,a=Math.abs(t/this.imageHeight);t>0?(s=1+a,n=10):i=Math.min(20,20*a),this.$refs.layer.style[h]="translate3d(0,".concat(e,"px,0)"),this.$refs.filter.style[d]="blur(".concat(i,"px)"),t<this.minTransalteY?(n=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="".concat(b,"px"),this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[h]="scale(".concat(s,")"),this.$refs.bgImage.style.zIndex=n}},components:{Scroll:r["a"],Loading:c["a"],SongList:o["a"]}},m=y,O=(s("661b"),s("2877")),v=Object(O["a"])(m,n,i,!1,null,"3e2f488d",null);e["a"]=v.exports},"661b":function(t,e,s){"use strict";var n=s("aa51"),i=s.n(n);i.a},"77a5":function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return r}));var n=s("5693"),i=s("da71");function a(){var t="https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",e=Object.assign({},i["b"],{uin:0,needNewCode:1,platform:"h5"});return Object(n["a"])(t,e,i["c"])}function r(t){var e="https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",s=Object.assign({},i["b"],{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(n["a"])(e,s,i["c"])}},aa51:function(t,e,s){},abfc:function(t,e,s){"use strict";var n=s("12a5"),i=s.n(n);i.a},ba95:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{appear:"",name:"slide"}},[s("music-list",{attrs:{rank:t.rank,title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},i=[],a=(s("8e6e"),s("456d"),s("ac6a"),s("bd86")),r=s("5362"),c=s("77a5"),o=s("da71"),l=s("2f62"),f=s("f5de");function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(s,!0).forEach((function(e){Object(a["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var p={computed:u({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},Object(l["c"])(["topList"])),data:function(){return{songs:[],rank:!0}},created:function(){this._getMusicList()},methods:{_getMusicList:function(){var t=this;this.topList.id?Object(c["a"])(this.topList.id).then((function(e){e.code===o["a"]&&Object(f["d"])(t._normalizeSongs(e.songlist)).then((function(e){t.songs=e}))})):this.$router.push("/rank")},_normalizeSongs:function(t){var e=[];return t.forEach((function(t){var s=t.data;Object(f["c"])(s)&&e.push(Object(f["a"])(s))})),e}},components:{MusicList:r["a"]}},b=p,h=(s("abfc"),s("2877")),d=Object(h["a"])(b,n,i,!1,null,"7e73f91f",null);e["default"]=d.exports}}]);
//# sourceMappingURL=chunk-9617a3a2.b05ea74b.js.map