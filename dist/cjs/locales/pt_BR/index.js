var y=Object.create;var i=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var L=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var g=(o,r)=>{for(var m in r)i(o,m,{get:r[m],enumerable:!0})},f=(o,r,m,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of D(r))!b.call(o,e)&&e!==m&&i(o,e,{get:()=>r[e],enumerable:!(p=B(r,e))||p.enumerable});return o};var t=(o,r,m)=>(m=o!=null?y(L(o)):{},f(r||!o||!o.__esModule?i(m,"default",{value:o,enumerable:!0}):m,o)),h=o=>f(i({},"__esModule",{value:!0}),o);var P={};g(P,{default:()=>z});module.exports=h(P);var n=t(require("./address")),a=t(require("./commerce")),c=t(require("./company")),l=t(require("./date")),d=t(require("./internet")),s=t(require("./lorem")),u=t(require("./name")),_=t(require("./phone_number"));const x={title:"Portuguese (Brazil)",address:n.default,commerce:a.default,company:c.default,date:l.default,internet:d.default,lorem:s.default,name:u.default,phone_number:_.default};var z=x;0&&(module.exports={});
