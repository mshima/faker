var u=Object.create;var i=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var L=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var b=(o,r)=>{for(var m in r)i(o,m,{get:r[m],enumerable:!0})},p=(o,r,m,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of D(r))!_.call(o,t)&&t!==m&&i(o,t,{get:()=>r[t],enumerable:!(n=y(r,t))||n.enumerable});return o};var e=(o,r,m)=>(m=o!=null?u(L(o)):{},p(r||!o||!o.__esModule?i(m,"default",{value:o,enumerable:!0}):m,o)),h=o=>p(i({},"__esModule",{value:!0}),o);var K={};b(K,{default:()=>x});module.exports=h(K);var f=e(require("./address")),a=e(require("./company")),l=e(require("./internet")),c=e(require("./lorem")),d=e(require("./name")),s=e(require("./phone_number"));const k={title:"Korean",address:f.default,company:a.default,internet:l.default,lorem:c.default,name:d.default,phone_number:s.default};var x=k;0&&(module.exports={});
