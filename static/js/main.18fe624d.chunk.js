(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(6),s=n.n(c),o=n(5),i=n(7),a=n(1),r=(n(12),n(13),n(0)),l=function(t){var e=t.goods;return Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)("li",{"data-cy":"Good",children:t},t)}))})},u=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],b="alphabetically",j="length";var h=function(){var t=Object(a.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(!1),h=Object(o.a)(s,2),d=h[0],g=h[1],p=function(t,e,n){var c=Object(i.a)(t);return n&&c.sort((function(t,e){switch(n){case b:return t.localeCompare(e);case j:return t.length-e.length;default:return 0}})),e&&c.reverse(),c}(u,d,n);return Object(r.jsxs)("div",{className:"section content",children:[Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{onClick:function(){c(b)},type:"button",className:"button is-info ".concat(n!==b&&"is-light"),children:"Sort alphabetically"}),Object(r.jsx)("button",{onClick:function(){c(j)},type:"button",className:"button is-success ".concat(n!==j&&"is-light"),children:"Sort by length"}),Object(r.jsx)("button",{onClick:function(){g(!d)},type:"button",className:"button is-warning ".concat(!d&&"is-light"),children:"Reverse"}),(n||d)&&Object(r.jsx)("button",{onClick:function(){c(""),g(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(r.jsx)(l,{goods:p})]})};s.a.render(Object(r.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.18fe624d.chunk.js.map