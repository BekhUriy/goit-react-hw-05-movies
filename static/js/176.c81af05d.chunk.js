"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[176],{176:function(n,e,t){t.r(e);var r,o,a=t(861),i=t(439),c=t(168),s=t(757),u=t.n(s),p=t(791),l=t(294),h=t(87),d=t(924),f=t(184),v=d.ZP.div(r||(r=(0,c.Z)(["\n  padding: 20px;\n"]))),x=d.ZP.li(o||(o=(0,c.Z)(["\n  font-size: 18px;\n  margin-bottom: 20px;\n  width: calc(33.33% - 20px);\n  cursor: pointer;\n  transition: transform 0.3s ease;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n\n  a {\n    text-decoration: none;\n    color: #333;\n    display: block;\n    text-align: center;\n  }\n\n  img {\n    width: 100%;\n    height: 300px;\n    object-fit: cover;\n    border-radius: 5px;\n    margin-bottom: 10px;\n    display: block;\n  }\n\n  span {\n    display: block;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n"])));e.default=function(){var n=(0,p.useState)(""),e=(0,i.Z)(n,2),t=e[0],r=e[1],o=(0,p.useState)([]),c=(0,i.Z)(o,2),s=c[0],d=c[1],m=function(){var n=(0,a.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"23f77f1a7852117720a48008d2ea32a0",query:t}});case 3:e=n.sent,d(e.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error("Error searching movies:",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return(0,f.jsxs)(v,{children:[(0,f.jsx)("h1",{children:"Search Movies"}),(0,f.jsx)("input",{type:"text",value:t,onChange:function(n){return r(n.target.value)}}),(0,f.jsx)("button",{onClick:m,children:"Search"}),(0,f.jsx)("ul",{children:s.map((function(n){return(0,f.jsx)(x,{children:(0,f.jsxs)(h.rU,{to:"/movies/".concat(n.id),children:[(0,f.jsx)("img",{src:n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):"\u0437\u0430\u043c\u0456\u043d\u043d\u0438\u0439-\u0448\u043b\u044f\u0445",alt:n.title}),(0,f.jsx)("span",{children:n.title})]})},n.id)}))})]})}},861:function(n,e,t){function r(n,e,t,r,o,a,i){try{var c=n[a](i),s=c.value}catch(u){return void t(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,a){var i=n.apply(e,t);function c(n){r(i,o,a,c,s,"next",n)}function s(n){r(i,o,a,c,s,"throw",n)}c(void 0)}))}}t.d(e,{Z:function(){return o}})}}]);
//# sourceMappingURL=176.c81af05d.chunk.js.map