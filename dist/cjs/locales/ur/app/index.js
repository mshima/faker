var u=Object.create;var p=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,l=Object.prototype.hasOwnProperty;var v=(o,r)=>{for(var m in r)p(o,m,{get:r[m],enumerable:!0})},f=(o,r,m,e)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of d(r))!l.call(o,t)&&t!==m&&p(o,t,{get:()=>r[t],enumerable:!(e=c(r,t))||e.enumerable});return o};var a=(o,r,m)=>(m=o!=null?u(h(o)):{},f(r||!o||!o.__esModule?p(m,"default",{value:o,enumerable:!0}):m,o)),x=o=>f(p({},"__esModule",{value:!0}),o);var g={};v(g,{default:()=>b});module.exports=x(g);var i=a(require("./author")),n=a(require("./name")),s=a(require("./version"));const _={author:i.default,name:n.default,version:s.default};var b=_;0&&(module.exports={});
