(this["webpackJsonp@certego/certego-ui-example"]=this["webpackJsonp@certego/certego-ui-example"]||[]).push([[4],{501:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(502);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},502:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},503:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(501),c=n(31);function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var a=n(1),s=n.n(a),l=n(482),i=n(499),u=n(107),b=n(13),d=["name","bodyNode"];function j(e){var t=e.name,n=e.bodyNode,a=o(e,d),j="".concat(t,"-example"),m=s.a.useState(!0),f=Object(c.a)(m,2),p=f[0],O=f[1],x=function(){return O((function(e){return!e}))};return Object(b.jsxs)(u.c,Object(r.a)(Object(r.a)({className:"bg-body"},a),{},{children:[Object(b.jsx)("h4",{id:j,onClick:x,className:"pt-2 pb-3 pointer border-bottom border-dark",children:Object(b.jsx)("mark",{className:"text-primary",children:t})}),!p&&Object(b.jsx)("div",{className:"center",onClick:x,children:Object(b.jsx)(u.a,{isExpanded:p})}),Object(b.jsx)(l.a,{toggler:"#".concat(j),isOpen:p,children:Object(b.jsx)(i.a,{children:n})})]}))}},512:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));var r=n(501),c=n(100),o=n.n(c);function a(e,t,n,r,c,o,a){try{var s=e[o](a),l=s.value}catch(i){return void n(i)}s.done?t(l):Promise.resolve(l).then(r,c)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var o=e.apply(t,n);function s(e){a(o,r,c,s,l,"next",e)}function l(e){a(o,r,c,s,l,"throw",e)}s(void 0)}))}}var l=n(1),i=n.n(l),u=n(489),b=n(6),d=n(7),j=n(2),m=n.n(j),f=n(5),p=n.n(f),O=n(4),x={children:m.a.node,row:m.a.bool,check:m.a.bool,inline:m.a.bool,disabled:m.a.bool,tag:O.l,className:m.a.string,cssModule:m.a.object},h=function(e){var t=e.className,n=e.cssModule,r=e.row,c=e.disabled,o=e.check,a=e.inline,s=e.tag,l=Object(d.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),u=Object(O.i)(p()(t,!!r&&"row",o?"form-check":"form-group",!(!o||!a)&&"form-check-inline",!(!o||!c)&&"disabled"),n);return"fieldset"===s&&(l.disabled=c),i.a.createElement(s,Object(b.a)({},l,{className:u}))};h.propTypes=x,h.defaultProps={tag:"div"};var y=h,g=m.a.oneOfType([m.a.number,m.a.string]),v=m.a.oneOfType([m.a.bool,m.a.string,m.a.number,m.a.shape({size:g,order:g,offset:g})]),N={children:m.a.node,hidden:m.a.bool,check:m.a.bool,size:m.a.string,for:m.a.string,tag:O.l,className:m.a.string,cssModule:m.a.object,xs:v,sm:v,md:v,lg:v,xl:v,widths:m.a.array},w={tag:"label",widths:["xs","sm","md","lg","xl"]},k=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},E=function(e){var t=e.className,n=e.cssModule,r=e.hidden,c=e.widths,o=e.tag,a=e.check,s=e.size,l=e.for,u=Object(d.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),j=[];c.forEach((function(t,r){var c=e[t];if(delete u[t],c||""===c){var o,a=!r;if(Object(O.g)(c)){var s,l=a?"-":"-"+t+"-";o=k(a,t,c.size),j.push(Object(O.i)(p()(((s={})[o]=c.size||""===c.size,s["order"+l+c.order]=c.order||0===c.order,s["offset"+l+c.offset]=c.offset||0===c.offset,s))),n)}else o=k(a,t,c),j.push(o)}}));var m=Object(O.i)(p()(t,!!r&&"sr-only",!!a&&"form-check-label",!!s&&"col-form-label-"+s,j,!!j.length&&"col-form-label"),n);return i.a.createElement(o,Object(b.a)({htmlFor:l},u,{className:m}))};E.propTypes=N,E.defaultProps=w;var P=E,S=n(29),B=n(160),z=n(45),F=n(107),C=n(503),I=n(13);function M(e){return Object(I.jsxs)(F.c,Object(r.a)(Object(r.a)({},e),{},{children:[Object(I.jsx)(C.a,{name:"IconButton",bodyNode:Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(u.a,{className:"d-flex justify-content-around mt-3",children:Object(I.jsx)(F.m,{id:"iconbutton-example-1",title:"Example Button #1",Icon:function(){return Object(I.jsx)("span",{children:"Example Button #1"})}})}),Object(I.jsxs)(u.a,{className:"d-flex justify-content-around mt-3",children:[Object(I.jsx)(F.m,{id:"iconbutton-example-2",title:"Example Button #2",Icon:S.b,color:"success"}),Object(I.jsx)(F.m,{id:"iconbutton-example-3",title:"Example Button #3",Icon:S.e,color:"danger"}),Object(I.jsx)(F.m,{id:"iconbutton-example-4",title:"Example Button #4",Icon:S.i,color:"info"}),Object(I.jsx)(F.m,{id:"iconbutton-example-5",title:"Example Button #5",Icon:S.n,color:"dark"})]})]})}),Object(I.jsx)(C.a,{name:"SyncButton",bodyNode:Object(I.jsxs)(u.a,{className:"d-flex justify-content-around",children:[Object(I.jsx)(F.z,{onClick:s(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",alert("Example Alert #1"));case 1:case"end":return e.stop()}}),e)})))}),Object(I.jsx)(F.z,{title:"Custom title",className:"btn btn-info",onClick:s(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",alert("Example Alert #2"));case 1:case"end":return e.stop()}}),e)})))})]})}),Object(I.jsx)(C.a,{name:"CopyToClipboardButton",bodyNode:Object(I.jsxs)(u.a,{className:"d-flex justify-content-around",children:[Object(I.jsx)(F.d,{id:"copybtn-example-1",text:"Example text #1",showOnHover:!0}),Object(I.jsx)(F.d,{id:"copybtn-example-3",text:"Example text #3",showOnHover:!0,children:Object(I.jsx)(S.d,{})})]})}),Object(I.jsx)(C.a,{name:"PopupFormButton",bodyNode:Object(I.jsx)(u.a,{className:"d-flex justify-content-around",children:Object(I.jsx)(F.u,{id:"popupform-example-1",title:"Click me to edit",Icon:S.k,Form:function(e){var t=e.onFormSubmit;return Object(I.jsx)(z.b,{initialValues:{name:""},onSubmit:t,validateOnMount:!0,children:function(e){return Object(I.jsxs)(z.a,{className:"p-2 ",children:[Object(I.jsxs)(y,{children:[Object(I.jsx)(P,{className:"required",htmlFor:"email",children:"Name"}),Object(I.jsx)(B.a,{autoFocus:!0,type:"text",name:"name",className:"form-control form-control-sm"})]}),Object(I.jsx)(B.b,{type:"submit",color:"darker",size:"sm",children:"Submit"})]})}})},onFormSuccess:function(){return alert("onFormSuccess callback")}})})}),Object(I.jsx)(C.a,{name:"ScrollToTopButton",bodyNode:Object(I.jsx)(u.a,{className:"d-flex justify-content-around",children:Object(I.jsx)(F.w,{id:"override",defaultVisible:!0,scrollYOffset:-50})})})]}))}}}]);
//# sourceMappingURL=4.c0e9caa3.chunk.js.map