var d=Object.create;var n=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var C=(o,e)=>{for(var t in e)n(o,t,{get:e[t],enumerable:!0})},a=(o,e,t,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of c(e))!u.call(o,i)&&i!==t&&n(o,i,{get:()=>e[i],enumerable:!(m=s(e,i))||m.enumerable});return o};var r=(o,e,t)=>(t=o!=null?d(h(o)):{},a(e||!o||!o.__esModule?n(t,"default",{value:o,enumerable:!0}):t,o)),D=o=>a(n({},"__esModule",{value:!0}),o);var b={};C(b,{default:()=>_});module.exports=D(b);var f=r(require("./address")),p=r(require("./internet")),l=r(require("./phone_number"));const L={title:"English (Canada)",address:f.default,internet:p.default,phone_number:l.default};var _=L;0&&(module.exports={});
