(this.webpackJsonpsamsung=this.webpackJsonpsamsung||[]).push([[0],{15:function(e,c,t){"use strict";t.r(c);var s=t(1),a=t.n(s),n=t(8),r=t.n(n),l=t(3),o=t(2),i=t.n(o),u=t(5),d=t(4),j=function(){var e=Object(u.a)(i.a.mark((function e(c,t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c<=3&&setTimeout((function(){var e=document.querySelector("#cont"),t=document.createElement("span");t.classList.add("fade","trans","prog","prog-crc","bg-grn"),e.appendChild(t),j(c+1)}),1e3);case 1:case"end":return e.stop()}}),e)})));return function(c,t){return e.apply(this,arguments)}}(),f=j;function x(e){return decodeURI((RegExp(e+"=(.+?)(&|$)").exec(window.location.search)||[,null])[1]||"")}x("subid"),x("subid2"),x("firstname"),x("surname"),x("city"),x("zipcode"),x("address"),x("phone"),x("mobile"),x("pid"),x("nrp");var m="https://"+x("ffdomain"),h=x("session"),b=x("fluxf"),p=x("fluxffn");function O(e){window.location.replace(m+"/?flux_action="+e+"&flux_f="+b+"&flux_ffn="+p+"&flux_sess="+h)}var w=t(6),g=t(0),N=d.qna,v=d.intro,S=d.prod,y=d.mes,q=d.final,E=["btn-grn","btn-ylw","btn-wht"],A=function(){return Object(g.jsxs)("div",{className:"pos-abs w-vw h-vh z-bg",children:[Object(g.jsx)("span",{className:"circ fade pos-abs circ-tr"}),Object(g.jsx)("span",{className:"circ fade pos-abs circ-br"}),Object(g.jsx)("span",{className:"circ fade pos-abs circ-tl"}),Object(g.jsx)("span",{className:"circ fade pos-abs circ-bl"})]})},I=function(){return Object(g.jsxs)("div",{className:"flx flx-jc-ce flx-ai-ce w-100 m-t-5",children:[Object(g.jsx)("span",{className:"trans prog prog-crc"}),Object(g.jsx)("span",{className:"trans prog prog-lne m-l-2 m-r-2"}),Object(g.jsx)("span",{className:"trans prog prog-crc"}),Object(g.jsx)("span",{className:"trans prog prog-lne m-l-2 m-r-2"}),Object(g.jsx)("span",{className:"trans prog prog-crc"}),Object(g.jsx)("span",{className:"trans prog prog-lne m-l-2 m-r-2"}),Object(g.jsx)("span",{className:"trans prog prog-crc"})]})},k=function(e){var c=e.ctr+1;Object(s.useEffect)((function(){var c=document.querySelectorAll(".prog-crc"),t=document.querySelectorAll(".prog-lne"),s=document.querySelectorAll(".anim");e.ctr<4&&c[e.ctr].classList.add("bg-grn"),e.ctr<3&&t[e.ctr].classList.add("bg-grn"),s.forEach((function(e){e.classList.add(".fade-r")}))}));var t=function(){var c=document.querySelectorAll(".anim");e.ctr<3?(e.upd({show:!0,ctr:e.ctr+1}),c.forEach((function(e,c){e.classList.remove("fade-r"),setTimeout((function(){e.classList.add("fade-r")}),100*c)}))):e.fin(!0)};return Object(g.jsxs)("div",{className:"flx flx-col flx-jc-ce flx-ai-ce m-t-2 quest",children:[Object(g.jsxs)("h4",{className:"mont fade-r",children:["Question ",c," of 4"]}),Object(g.jsx)("p",{className:"lato fade-r anim",children:N[3].quest}),N[e.ctr].choice.map((function(e,c){return Object(g.jsx)("button",{className:"p-20 btn w-100 trans m-t-2 mont anim fade-r ".concat(E[c]),onClick:t,children:e},c)}))]})},T=function(){var e=Object(s.useState)(!1),c=Object(l.a)(e,2),t=c[0],a=c[1];return Object(s.useEffect)(Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f(1),setTimeout((function(){return a(!0)}),4500);case 2:case"end":return e.stop()}}),e)}))),[]),t?Object(g.jsxs)("div",{className:"flx flx-col flx-ai-ce flx-jc-ce h-100 fade",children:[Object(g.jsxs)("div",{className:"flx flx-col flx-ai-ce flx-jc-ce w-80 fade",children:[Object(g.jsx)("p",{className:"lato txt-ylw",children:q.action}),Object(g.jsx)("p",{className:"lato txt-wht txt-al-ce",children:q.mes})]}),Object(g.jsx)("button",{className:"mont btn w-50 btn-ylw p-20 m-t-5 fade product-button","data-product-id":"1",onClick:O,children:q.btn})]}):Object(g.jsxs)("div",{className:"flx flx-col flx-ai-ce flx-jc-ce txt-wht fade",children:[Object(g.jsx)("h4",{className:"mont txt-grn",children:"PROCESSING DETAILS"}),Object(g.jsx)("p",{className:"lato",children:"Preparing your details for shipment please wait a moment"}),Object(g.jsx)("div",{className:"flx flx-jc-sp flx-ai-ce w-30 m-t-5",id:"cont"})]})},C=function(e){return Object(g.jsxs)("div",{className:"flx flx-col flx-ai-ce flx-jc-sb h-100",children:[!e.show&&!e.small&&Object(g.jsx)("h4",{className:"mont",children:v.id}),Object(g.jsxs)("div",{className:"flx flx-col flx-ai-ce flx-jc-ce w-100",children:[Object(g.jsx)("p",{className:"lato txt-grn",children:y.head}),Object(g.jsx)("p",{className:"lato txt-wht txt-al-ce",children:y.message})]}),e.show?Object(g.jsx)(k,{show:e.show,ctr:e.ctr,upd:e.upd,fin:e.fin,small:e.small}):Object(g.jsx)("button",{className:"mont btn w-50 btn-grn p-20",onClick:function(){e.upd({ctr:e.ctr,show:!0})},children:"ANSWER NOW"})]})},L=function(e){var c=Object(s.useState)(!1),t=Object(l.a)(c,2),a=t[0],n=t[1];return Object(g.jsx)("div",{className:"txt-wht flx flx-ai-ce flx-jc-ce p-20 bg-qna h-70 w-100 fade ovr-hide",children:a?Object(g.jsx)(T,{}):Object(g.jsx)(C,{show:e.show,ctr:e.ctr,upd:e.upd,fin:n,small:e.small})})},M=function(e){return Object(g.jsxs)("section",{className:"flx flx-col flx-ai-ce flx-jc-sb w-50 h-100 p-50",children:[Object(g.jsxs)("div",{className:"flx flx-col flx-jc-ce w-100 flx-ai-ce h-30 cong-txt",children:[Object(g.jsx)("h2",{className:"txt-wht mont",children:"Congratulations!"}),Object(g.jsx)("p",{className:"lato txt-wht",children:v.mes}),Object(g.jsx)(I,{})]}),Object(g.jsx)(L,{show:e.show,ctr:e.ctr,upd:e.upd})]})},P=function(){return Object(g.jsxs)("section",{className:"flx flx-col flx-ai-ce flx-jc-sb txt-wht w-50 bg-prod h-100 p-50",children:[Object(g.jsx)("h4",{className:"mont w-100",children:S.name}),Object(g.jsx)("img",{src:"./Samsung.png",alt:"samsung",className:"w-80 fade"}),Object(g.jsxs)("footer",{className:"flx p-10 w-100",children:[Object(g.jsx)("h4",{className:"txt-acc mont",children:S.price}),Object(g.jsx)("h4",{className:"txt-grn m-l-auto mont",children:S.disc})]})]})},R=function(e){var c=Object(s.useState)(!1),t=Object(l.a)(c,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){setTimeout((function(){return n(!0)}),2500)})),a?Object(g.jsxs)("section",{className:"w-50 h-100 p-50 fade ovr-scr-y",children:[Object(g.jsx)(I,{}),Object(g.jsx)(L,{show:e.show,ctr:e.ctr,upd:e.upd,small:e.small})]}):Object(g.jsxs)("section",{className:"flx flx-col flx-ai-ce flx-jc-ce w-50 h-50 p-50",children:[Object(g.jsxs)("div",{className:"flx flx-col flx-jc-ce w-100 flx-ai-ce h-30 cong-txt fade",children:[Object(g.jsx)("h2",{className:"txt-wht mont",children:"Congratulations!"}),Object(g.jsx)("p",{className:"lato txt-wht txt-al-ce",children:v.mes})]}),Object(g.jsx)("h4",{className:"mont fade txt-wht txt-al-ce m-t-5",children:v.id})]})},W=function(e){var c=Object(s.useState)(!1),t=Object(l.a)(c,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){setTimeout(Object(u.a)(i.a.mark((function c(){return i.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,n(!0);case 2:setTimeout((function(){return e.load(!0)}),1e3);case 3:case"end":return c.stop()}}),c)}))),1500)}),[]),Object(g.jsxs)("div",{className:"h-100 w-100 flx flx-jc-ce flx-ai-ce pos-rel",children:[Object(g.jsx)("img",{src:"./Samsung.png",alt:"samsung",className:"z-neg pos-abs loadImg fade"}),a?Object(g.jsx)("h1",{className:"mont txt-wht fade-l trans",children:"S21"}):Object(g.jsx)("h1",{className:"mont txt-wht fade-l trans",children:"SAMSUNG"})]})},B=function(e){var c=Object(w.useMediaQuery)({query:"(max-width : 1000px)"});return Object(s.useEffect)((function(){if(!c&&e.loaded){var t=document.querySelectorAll(".prog-crc"),s=document.querySelectorAll(".prog-lne");e.ctr<4&&t[e.ctr].classList.add("bg-grn"),e.ctr<3&&s[e.ctr].classList.add("bg-grn")}}),[]),e.load?Object(g.jsxs)("main",{className:"h-100 flx flx-jc-ce flx-ai-ce pos-rel trans fade",children:[Object(g.jsx)(P,{}),c?Object(g.jsx)(R,{show:e.show,ctr:e.ctr,upd:e.upd,small:c}):Object(g.jsx)(M,{show:e.show,ctr:e.ctr,upd:e.upd})]}):Object(g.jsx)(W,{load:e.set})};var G=function(){var e=Object(s.useState)(!1),c=Object(l.a)(e,2),t=c[0],a=c[1],n=Object(w.useMediaQuery)({query:"(max-width : 1000px)"}),r=Object(s.useState)({show:!1,ctr:0}),o=Object(l.a)(r,2),i=o[0],u=o[1];return Object(g.jsxs)("div",{className:"App h-vh",children:[!n&&Object(g.jsx)(A,{}),Object(g.jsx)(B,{show:i.show,ctr:i.ctr,upd:u,load:t,set:a})]})};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(G,{})}),document.getElementById("root"))},4:function(e){e.exports=JSON.parse('{"intro":{"mes":"You came in second but don\'t feel sad!","id":"Welcome back to our competition ID-"},"qna":[{"quest":"How did you receive this invitation?","choice":["By Email","By Mail","Other"]},{"quest":"Why do you want a new Samsung?","choice":["I need a new one","I find it the best smartphone brand ever","I am a big fan of Samsung"]},{"quest":"Which function do you use the most on your phone?","choice":["Camera","Messaging/Apps","Calling"]},{"quest":"Do you currently own a Samsung phone?","choice":["YES","NO"]}],"prod":{"name":"SAMSUNG","price":"$1249.99","disc":"FREE"},"mes":{"head":"Your Samsung S21 is reserved","message":"One Samsung S21 has been reserved on your behalf. You have 24 hours to claim your MacBook Pro, please follow the instructions below."},"final":{"action":"ATTENTION: please make sure to enter your correct details!","mes":"Please confirm your details via our shipping partner on the next page. To ensure safe shipping there will be a small fee for secure shipping. ","btn":"CONFIRM SHIPPING"}}')}},[[15,1,2]]]);
//# sourceMappingURL=main.8cffc1d7.chunk.js.map