var u=Object.create;var i=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var L=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var b=(o,r)=>{for(var m in r)i(o,m,{get:r[m],enumerable:!0})},f=(o,r,m,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of D(r))!_.call(o,e)&&e!==m&&i(o,e,{get:()=>r[e],enumerable:!(n=y(r,e))||n.enumerable});return o};var t=(o,r,m)=>(m=o!=null?u(L(o)):{},f(r||!o||!o.__esModule?i(m,"default",{value:o,enumerable:!0}):m,o)),x=o=>f(i({},"__esModule",{value:!0}),o);var j={};b(j,{default:()=>g});module.exports=x(j);var p=t(require("./address")),a=t(require("./company")),c=t(require("./date")),l=t(require("./internet")),d=t(require("./lorem")),s=t(require("./name")),h=t(require("./phone_number"));const F={title:"French",address:p.default,company:a.default,date:c.default,internet:l.default,lorem:d.default,name:s.default,phone_number:h.default};var g=F;0&&(module.exports={});
