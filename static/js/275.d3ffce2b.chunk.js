"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[275],{275:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r=e(5861),a=e(885),c=e(7757),u=e.n(c),s=e(2791),o=e(6871),i=e(8479),p=e(9870),f="Cast_castBox__KVoEk",h="Cast_castList__ARoWn",v="Cast_castImg__T4WbF",d="Cast_actorName__XabVA",l=e(184);function m(){var t=(0,o.UO)().movieId,n=(0,s.useState)(null),e=(0,a.Z)(n,2),c=e[0],m=e[1];(0,s.useEffect)((function(){function n(){return(n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.a9)(t);case 3:e=n.sent,m(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),i.ZP.error("Actors no found");case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]);return(0,l.jsx)("div",{children:c&&(0,l.jsx)("ul",{className:f,children:c.cast.length>0?c.cast.map((function(t){var n=t.id,e=t.profile_path,r=t.name,a=t.character;return(0,l.jsxs)("li",{className:h,children:[(0,l.jsx)("img",{className:v,src:e?"https://image.tmdb.org/t/p/w200"+e:"https://i.pinimg.com/200x/e4/71/1e/e4711e46bea5264eaab661d643285ff6.jpg",alt:r}),(0,l.jsx)("p",{className:d,children:r}),(0,l.jsxs)("p",{children:["Character: ",a||"Without character"]})]},n)})):(0,l.jsx)("p",{children:"No information found"})})})}},9870:function(t,n,e){e.d(n,{N7:function(){return d},Pv:function(){return p},Y5:function(){return h},a9:function(){return v},wr:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(4569),s=e.n(u),o="748a876d129f7e921766cb9e00600a21",i="https://api.themoviedb.org/3",p=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(i,"/search/movie?api_key=").concat(o,"&page=").concat(e,"&language=en&query=").concat(n));case 2:return r=t.sent,t.next=5,r.data.results;case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(){var n,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,t.next=5,n.data.results;case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(i,"/movie/").concat(n,"?api_key=").concat(o));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(o));case 2:return e=t.sent,t.next=5,e.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(o));case 2:return e=t.sent,t.next=5,e.data;case 5:return r=t.sent,t.abrupt("return",r);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=275.d3ffce2b.chunk.js.map