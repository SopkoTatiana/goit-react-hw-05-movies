"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[506],{251:function(n,e,i){i.r(e),i.d(e,{default:function(){return b}});var o=i(439),t=i(168),s=i(791),r=i(87),a=i(689),c=i(584),d=i.p+"static/media/icon-image-not-found.3717584c8c962ee91b9d.jpg",l="MainInfo_mainInfo__hHMqq",h="MainInfo_information__1Soh0",u="MainInfo_title__8OkPD",f="MainInfo_subtitle__TDX0o",_="MainInfo_genres__LoPNo",v=i(184);function x(n){var e=n.movie,i=e.poster_path,o=e.title,t=e.release_date,s=e.vote_average,r=e.overview,a=e.genres;return(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("img",{src:i?"https://image.tmdb.org/t/p/original/".concat(i):d,alt:o,width:"140px",height:"200px"}),(0,v.jsxs)("div",{className:h,children:[(0,v.jsx)("h1",{className:u,children:"".concat(o," (").concat(t.slice(0,4),")")}),(0,v.jsxs)("p",{children:["User Score ",(10*s).toFixed(2),"%"]}),(0,v.jsx)("h2",{className:f,children:"Overview"}),(0,v.jsx)("p",{children:r}),(0,v.jsx)("h2",{className:f,children:"Genres"}),(0,v.jsx)("ul",{className:_,children:a.map((function(n){var e=n.id,i=n.name;return(0,v.jsxs)("li",{children:[i," "]},e)}))})]})]})}var m,j="AdditionalInfo_additionalInfo__TeBHg",p="AdditionalInfo_subtitle__-Pj9H",g="AdditionalInfo_container__Ol9jh",I=i(444),N=(0,I.ZP)(r.OL)(m||(m=(0,t.Z)(["\n  font-size: 18px;\n\n  &.active {\n    color: pink;\n  }\n"])));function S(){return(0,v.jsxs)("div",{className:j,children:[(0,v.jsx)("h2",{className:p,children:"Additional information"}),(0,v.jsxs)("div",{className:g,children:[(0,v.jsx)(N,{to:"cast",children:"Cast"}),(0,v.jsx)(N,{to:"reviews",children:"Reviews"})]}),(0,v.jsx)(a.j3,{})]})}var k,w=i(245),O=(0,I.ZP)(r.rU)(k||(k=(0,t.Z)(["\n  text-decoration: none;\n  display: block;\n  width: fit-content;\n  padding: 8px 16px;\n  background-color: #f1f1f1;\n  color: black;\n\n  &:hover {\n    background-color: #ddd;\n    color: black;\n  }\n"])));function b(){var n,e,i=(0,s.useState)(w.q.LOADING),t=(0,o.Z)(i,2),r=t[0],d=t[1],l=(0,s.useState)({}),h=(0,o.Z)(l,2),u=h[0],f=h[1],_=(0,a.UO)().movieId,m=(0,a.TH)(),j=(0,s.useRef)(null!==(n=null===(e=m.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,s.useEffect)((function(){(0,c.Z)({option:"details",movieId:_}).then((function(n){if(!1===n.success)throw new Error;f(n),d(w.q.SUCCESS)})).catch((function(n){return d(w.q.ERROR)}))}),[_]),(0,v.jsxs)(v.Fragment,{children:[r===w.q.LOADING&&(0,v.jsx)("p",{children:"LOADING..."}),r===w.q.ERROR&&(0,v.jsx)(a.Fg,{to:"/NotFound"}),r===w.q.SUCCESS&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(O,{to:j.current,children:"Back"}),(0,v.jsx)(x,{movie:u}),(0,v.jsx)(S,{})]})]})}},245:function(n,e,i){i.d(e,{q:function(){return o}});var o={IDLE:"idle",LOADING:"loading",SUCCESS:"success",ERROR:"error"}}}]);
//# sourceMappingURL=506.9e792c95.chunk.js.map