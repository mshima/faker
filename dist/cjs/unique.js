var c=Object.create;var o=Object.defineProperty;var u=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var d=Object.getPrototypeOf,x=Object.prototype.hasOwnProperty;var y=(r,e)=>{for(var m in e)o(r,m,{get:e[m],enumerable:!0})},a=(r,e,m,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of s(e))!x.call(r,i)&&i!==m&&o(r,i,{get:()=>e[i],enumerable:!(t=u(e,i))||t.enumerable});return r};var R=(r,e,m)=>(m=r!=null?c(d(r)):{},a(e||!r||!r.__esModule?o(m,"default",{value:r,enumerable:!0}):m,r)),f=r=>a(o({},"__esModule",{value:!0}),r);var b={};y(b,{Unique:()=>n});module.exports=f(b);var h=R(require("./vendor/unique"));class n{constructor(){this.maxTime=10;this.maxRetries=10;for(const e of Object.getOwnPropertyNames(n.prototype))e==="constructor"||typeof this[e]!="function"||(this[e]=this[e].bind(this))}unique(e,m,t){return t=t||{},t.startTime=new Date().getTime(),typeof t.maxTime!="number"&&(t.maxTime=this.maxTime),typeof t.maxRetries!="number"&&(t.maxRetries=this.maxRetries),t.currentIterations=0,h.exec(e,m,t)}}0&&(module.exports={Unique});
