var k=Object.create;var e=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var v=(r,o)=>{for(var i in o)e(r,i,{get:o[i],enumerable:!0})},f=(r,o,i,a)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of h(o))!u.call(r,t)&&t!==i&&e(r,t,{get:()=>o[t],enumerable:!(a=d(o,t))||a.enumerable});return r};var m=(r,o,i)=>(i=r!=null?k(l(r)):{},f(o||!r||!r.__esModule?e(i,"default",{value:r,enumerable:!0}):i,r)),D=r=>f(e({},"__esModule",{value:!0}),r);var j={};v(j,{default:()=>b});module.exports=D(j);var p=m(require("./adjective")),n=m(require("./noun")),c=m(require("./phrase")),s=m(require("./verb"));const H={adjective:p.default,noun:n.default,phrase:c.default,verb:s.default};var b=H;0&&(module.exports={});
