var y=Object.create;var t=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var C=(o,i)=>{for(var m in i)t(o,m,{get:i[m],enumerable:!0})},p=(o,i,m,n)=>{if(i&&typeof i=="object"||typeof i=="function")for(let r of c(i))!u.call(o,r)&&r!==m&&t(o,r,{get:()=>i[r],enumerable:!(n=x(i,r))||n.enumerable});return o};var f=(o,i,m)=>(m=o!=null?y(l(o)):{},p(i||!o||!o.__esModule?t(m,"default",{value:o,enumerable:!0}):m,o)),D=o=>p(t({},"__esModule",{value:!0}),o);var _={};C(_,{default:()=>P});module.exports=D(_);var a=f(require("./name")),e=f(require("./prefix")),s=f(require("./suffix"));const d={name:a.default,prefix:e.default,suffix:s.default};var P=d;0&&(module.exports={});
