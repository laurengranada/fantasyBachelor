(function(e){function a(a){for(var i,d,l=a[0],s=a[1],r=a[2],o=0,h=[];o<l.length;o++)d=l[o],t[d]&&h.push(t[d][0]),t[d]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);c&&c(a);while(h.length)h.shift()();return m.push.apply(m,r||[]),n()}function n(){for(var e,a=0;a<m.length;a++){for(var n=m[a],i=!0,l=1;l<n.length;l++){var s=n[l];0!==t[s]&&(i=!1)}i&&(m.splice(a--,1),e=d(d.s=n[0]))}return e}var i={},t={app:0},m=[];function d(a){if(i[a])return i[a].exports;var n=i[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.m=e,d.c=i,d.d=function(e,a,n){d.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,a){if(1&a&&(e=d(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)d.d(n,i,function(a){return e[a]}.bind(null,i));return n},d.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(a,"a",a),a},d.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},d.p="/fantasyBachelor/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=a,l=l.slice();for(var r=0;r<l.length;r++)a(l[r]);var c=s;m.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"35dd":function(e,a,n){},5561:function(e,a,n){},"56d7":function(e,a,n){"use strict";n.r(a);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),t=n("bb71");n("da64");i["a"].use(t["a"],{iconfont:"md"});var m=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-app",[n("div",{staticClass:"tlbr"},[n("span",{staticClass:"tlbr-tl font-weight-light font-italic text-uppercase"},[e._v("Dodge")]),n("span",{staticClass:"tlbr-tl font-weight-black text-uppercase"},[e._v(" Bachelor")])]),n("v-content",{staticClass:"main"},[n("mainCtnr")],1)],1)},d=[],l=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"main"},e._l(e.aPlayers,function(a,i){return n("div",{key:i,staticClass:"main-ctnr"},[n("v-slide-x-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:a.bShow,expression:"item.bShow"}],staticClass:"main-ctnr-body"},[n("h2",{staticClass:"main-ctnr-player"},[e._v(e._s(a.name)+"'s Bracket:")]),n("v-layout",{staticClass:"mc-wk justify-center",attrs:{row:"",wrap:""}},e._l(a.brackets,function(a,i){return n("v-flex",{key:i,staticClass:"mc-wk-ctnr",class:[{"mc-wk-ctnr-hidden":!a.bExpand}],attrs:{xs1:""},on:{click:function(e){a.bExpand=!a.bExpand}}},[n("h3",{staticClass:"mc-wk-ctnr-ttl"},[e._v("Week "+e._s(i))]),n("v-slide-x-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:a.bExpand,expression:"bracket.bExpand"}],staticClass:"mc-wk-ctnr-innr",attrs:{row:"",wrap:""}},e._l(a.contestants,function(a,i){return n("div",{key:i,staticClass:"mwci-contestant"},[a.eliminated?n("p",{staticClass:"mwci-contestant-elim"},[e._v(e._s(a.name))]):n("p",{staticClass:"mwci-contestant"},[e._v(e._s(a.name))])])}),0)]),n("hr",{staticClass:"mc-wk-ctnr-div"}),n("h3",{staticClass:"mc-wk-ctnr-score"},[e._v("Score: "+e._s(a.score))])],1)}),1)],1)]),n("div",{staticClass:"main-ctnr-sum",class:[{"main-ctnr-sum-hidden":!a.bShow}],on:{click:function(e){a.bShow=!a.bShow}}},[n("h2",{directives:[{name:"show",rawName:"v-show",value:!a.bShow,expression:"!item.bShow"}],staticClass:"mcs-plyr",class:[{"mcs-plyr-hidden":!a.bShow}]},[e._v(e._s(a.name)+"'s Bracket - ")]),n("h2",{staticClass:"mcs-num",class:[{"mcs-plyr-hidden":!a.bShow}]},[e._v("Total Score: "+e._s(a.totalScore))])])],1)}),0)},s=[],r=n("a4bb"),c=n.n(r),o=(n("7f7f"),n("ac6a"),n("795b")),h=n.n(o),b={data:function(){return{show:!1,oPoints:{2:1,3:2,4:3,5:4,6:6,7:10,8:15,9:20,10:30},oEliminated:{2:["Alex B.","Annie","Erika","Angelique"],3:["Caitlin","Catherine","Nina","Bri"],4:["Courtney","Tracy"],5:["Elyse","Onyeka","Nicole"],6:["Katie","Sydney","Demi"],7:["Hannah B.","Heather","Kirpa"],8:["Caelynn"],9:["Tayshia","Hannah G."],10:["NoOne"]},aPlayers:[{bShow:!1,name:"Lauren",totalScore:0,brackets:{2:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Onyeka",eliminated:!1},{name:"Annie",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Erika",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Nicole",eliminated:!1}]},3:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Onyeka",eliminated:!1},{name:"Annie",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Demi",eliminated:!1}]},4:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Onyeka",eliminated:!1},{name:"Annie",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Demi",eliminated:!1}]},5:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Annie",eliminated:!1}]},6:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Bri",eliminated:!1}]},7:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Hannah B.",eliminated:!1}]},8:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Cassie",eliminated:!1}]},9:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1}]},10:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1}]}}},{bShow:!1,name:"Sharon",totalScore:0,brackets:{2:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Catherine",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Erika",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Annie",eliminated:!1},{name:"Nina",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Nicole",eliminated:!1}]},3:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Catherine",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Erika",eliminated:!1}]},4:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Catherine",eliminated:!1},{name:"Hannah B.",eliminated:!1}]},5:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Demi",eliminated:!1}]},6:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Caitlin",eliminated:!1}]},7:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Tayshia",eliminated:!1}]},8:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Cassie",eliminated:!1}]},9:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1}]},10:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1}]}}},{bShow:!1,name:"Katie",totalScore:0,brackets:{2:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Tracy",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Erika",eliminated:!1},{name:"Onyeka",eliminated:!1},{name:"Catherine",eliminated:!1},{name:"Courtney",eliminated:!1},{name:"Nicole",eliminated:!1},{name:"Sydney",eliminated:!1}]},3:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Tracy",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Onyeka",eliminated:!1},{name:"Catherine",eliminated:!1}]},4:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Tracy",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Elyse",eliminated:!1}]},5:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Tracy",eliminated:!1},{name:"Demi",eliminated:!1}]},6:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Alex B.",eliminated:!1}]},7:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Tayshia",eliminated:!1}]},8:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Cassie",eliminated:!1}]},9:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1}]},10:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1}]}}},{bShow:!1,name:"Laurie",totalScore:0,brackets:{2:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Courtney",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Onyeka",eliminated:!1},{name:"Nina",eliminated:!1},{name:"Catherine",eliminated:!1},{name:"Annie",eliminated:!1},{name:"Demi",eliminated:!1}]},3:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Courtney",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Onyeka",eliminated:!1},{name:"Nina",eliminated:!1}]},4:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Courtney",eliminated:!1},{name:"Kirpa",eliminated:!1}]},5:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Heather",eliminated:!1}]},6:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Hannah B.",eliminated:!1}]},7:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Caitlin",eliminated:!1}]},8:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Cassie",eliminated:!1}]},9:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1}]},10:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1}]}}},{bShow:!1,name:"Kate",totalScore:0,brackets:{2:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Caelynn",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Nicole",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Courtney",eliminated:!1},{name:"Erika",eliminated:!1},{name:"Catherine",eliminated:!1},{name:"Angelique",eliminated:!1},{name:"Onyeka",eliminated:!1},{name:"Annie",eliminated:!1}]},3:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Caelynn",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Nicole",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Courtney",eliminated:!1},{name:"Erika",eliminated:!1},{name:"Catherine",eliminated:!1}]},4:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Caelynn",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Nicole",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Sydney",eliminated:!1}]},5:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Caelynn",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Nicole",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Hannah B.",eliminated:!1}]},6:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Caelynn",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Nicole",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Demi",eliminated:!1}]},7:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Caelynn",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Nicole",eliminated:!1}]},8:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Caelynn",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1}]},9:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Caelynn",eliminated:!1},{name:"Hannah G.",eliminated:!1}]},10:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Caelynn",eliminated:!1}]}}},{bShow:!1,name:"Patti",totalScore:0,brackets:{2:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah B.",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Tracy",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Courtney",eliminated:!1},{name:"Nicole",eliminated:!1},{name:"Catherine",eliminated:!1},{name:"Annie",eliminated:!1},{name:"Erika",eliminated:!1},{name:"Bri",eliminated:!1}]},3:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah B.",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Tracy",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Courtney",eliminated:!1},{name:"Nicole",eliminated:!1},{name:"Catherine",eliminated:!1}]},4:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah B.",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Tracy",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Tayshia",eliminated:!1}]},5:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah B.",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Caitlin",eliminated:!1}]},6:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah B.",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Demi",eliminated:!1}]},7:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah B.",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Caelynn",eliminated:!1}]},8:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah B.",eliminated:!1},{name:"Hannah G.",eliminated:!1},{name:"Cassie",eliminated:!1}]},9:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Cassie",eliminated:!1},{name:"Hannah G.",eliminated:!1}]},10:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Cassie",eliminated:!1}]}}},{bShow:!1,name:"Kayla",totalScore:0,brackets:{2:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Annie",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Nicole",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Tracy",eliminated:!1},{name:"Erika",eliminated:!1},{name:"Catherine",eliminated:!1}]},3:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Annie",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Elyse",eliminated:!1},{name:"Nicole",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Caitlin",eliminated:!1}]},4:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Annie",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Heather",eliminated:!1},{name:"Elyse",eliminated:!1}]},5:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Bri",eliminated:!1},{name:"Annie",eliminated:!1},{name:"Sydney",eliminated:!1}]},6:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Katie",eliminated:!1}]},7:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Alex B.",eliminated:!1},{name:"Cassie",eliminated:!1}]},8:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Alex B.",eliminated:!1}]},9:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1}]},10:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1}]}}},{bShow:!1,name:"Grace",totalScore:0,brackets:{2:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Erika",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Catherine",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Nina",eliminated:!1},{name:"Courtney",eliminated:!1},{name:"Onyeka",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Tayshia",eliminated:!1},{name:"Annie",eliminated:!1},{name:"Nicole",eliminated:!1},{name:"Heather",eliminated:!1}]},3:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Erika",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Catherine",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Nina",eliminated:!1},{name:"Courtney",eliminated:!1},{name:"Onyeka",eliminated:!1},{name:"Sydney",eliminated:!1},{name:"Demi",eliminated:!1},{name:"Kirpa",eliminated:!1},{name:"Tayshia",eliminated:!1}]},4:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Erika",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Catherine",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Nina",eliminated:!1},{name:"Courtney",eliminated:!1},{name:"Onyeka",eliminated:!1},{name:"Sydney",eliminated:!1}]},5:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Erika",eliminated:!1},{name:"Caitlin",eliminated:!1},{name:"Catherine",eliminated:!1},{name:"Katie",eliminated:!1},{name:"Nina",eliminated:!1}]},6:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Cassie",eliminated:!1},{name:"Erika",eliminated:!1},{name:"Caitlin",eliminated:!1}]},7:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Hannah B.",eliminated:!1},{name:"Cassie",eliminated:!1}]},8:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1},{name:"Hannah B.",eliminated:!1}]},9:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Hannah G.",eliminated:!1},{name:"Caelynn",eliminated:!1}]},10:{bExpand:!1,score:0,bScoreAdded:!1,contestants:[{name:"Caelynn",eliminated:!1}]}}}]}},methods:{checkEliminated:function(e){var a=this;return new h.a(function(n,i){a.aPlayers.forEach(function(n){for(var i=0;i<n.brackets[e].contestants.length;i++){for(var t=0;t<a.oEliminated[e].length;t++)n.brackets[e].contestants[i].name===a.oEliminated[e][t]&&(n.brackets[e].contestants[i].eliminated=!0);var m=e+i;a.fCheckAllWeeksAfter(n,m,e)}}),a.fCountWkPts(e),n()})},fCountWkPts:function(e){var a=this;this.aPlayers.forEach(function(n){for(var i=n.brackets[e],t=0;t<i.contestants.length;t++)!1===i.contestants[t].eliminated&&(i.score=i.score+a.oPoints[e]);c()(n.brackets).forEach(function(e){!1===n.brackets[e].bScoreAdded&&(n.totalScore=n.totalScore+n.brackets[e].score,0!==n.brackets[e].score&&(n.brackets[e].bScoreAdded=!0))})})},fCheckAllWeeksAfter:function(e,a,n){if("undefined"!==typeof e.brackets[a])for(var i=0;i<e.brackets[a].contestants.length;i++)for(var t=0;t<this.oEliminated[n].length;t++)e.brackets[a].contestants[i].name===this.oEliminated[n][t]&&(e.brackets[a].contestants[i].eliminated=!0)}},created:function(){this.checkEliminated(2).then(this.checkEliminated(3)).then(this.checkEliminated(4)).then(this.checkEliminated(5)).then(this.checkEliminated(6)).then(this.checkEliminated(7)).then(this.checkEliminated(8)).then(this.checkEliminated(9)).then(this.checkEliminated(10))}},y=b,C=(n("dc6d"),n("2877")),p=n("6544"),H=n.n(p),E=n("0e8f"),S=n("a722"),u=n("0789"),A=Object(C["a"])(y,l,s,!1,null,"48647455",null);A.options.__file="Home.vue";var x=A.exports;H()(A,{VFlex:E["a"],VLayout:S["a"],VSlideXTransition:u["a"]});var f={name:"App",components:{mainCtnr:x},data:function(){return{}}},B=f,k=(n("8689"),n("7496")),G=n("549c"),v=Object(C["a"])(B,m,d,!1,null,"79a3eac6",null);v.options.__file="App.vue";var K=v.exports;H()(v,{VApp:k["a"],VContent:G["a"]}),i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(K)}}).$mount("#app")},8689:function(e,a,n){"use strict";var i=n("5561"),t=n.n(i);t.a},dc6d:function(e,a,n){"use strict";var i=n("35dd"),t=n.n(i);t.a}});
//# sourceMappingURL=app.2d91b612.js.map