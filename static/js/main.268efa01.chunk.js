(this.webpackJsonpidkwhatimdoing=this.webpackJsonpidkwhatimdoing||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n.n(o),i=n(7),r=n.n(i),u=(n(13),n(8)),a=n(6),d=n(4),j=n(0),l=function(t){var e=t.addTodo,n=Object(o.useState)(""),c=Object(d.a)(n,2),i=c[0],r=c[1];return Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"text",value:i,onChange:function(t){r(t.target.value)}}),Object(j.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),e(i),r("")},children:"AddTodo"})]})},s=function(t){var e=t.todo,n=t.toggleTodo;return Object(j.jsx)("li",{children:Object(j.jsxs)("label",{style:{textDecoration:e.complete?"line-through":void 0},children:[Object(j.jsx)("input",{type:"checkbox",checked:e.complete,onClick:function(){n(e)}})," ",e.text]})})},b=function(t){var e=t.todos,n=t.toggleTodo;return Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)(s,{todo:t,toggleTodo:n},t.text)}))})},x=(n(15),[{text:"run",complete:!1},{text:"walk",complete:!0}]),g=function(){var t=Object(o.useState)(x),e=Object(d.a)(t,2),n=e[0],i=e[1];return Object(j.jsxs)(c.a.Fragment,{children:[Object(j.jsx)(b,{todos:n,toggleTodo:function(t){var e=n.map((function(e){return e===t?Object(a.a)(Object(a.a)({},e),{},{complete:!e.complete}):e}));i(e)}}),Object(j.jsx)(l,{addTodo:function(t){var e={text:t,complete:!1};i([].concat(Object(u.a)(n),[e]))}})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),i(t),r(t)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.268efa01.chunk.js.map