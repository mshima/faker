var u=Object.create;var t=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var c=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty;var y=(m,r)=>{for(var i in r)t(m,i,{get:r[i],enumerable:!0})},a=(m,r,i,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of N(r))!d.call(m,e)&&e!==i&&t(m,e,{get:()=>r[e],enumerable:!(f=D(r,e))||f.enumerable});return m};var o=(m,r,i)=>(i=m!=null?u(c(m)):{},a(r||!m||!m.__esModule?t(i,"default",{value:m,enumerable:!0}):i,m)),P=m=>a(t({},"__esModule",{value:!0}),m);var h={};y(h,{default:()=>g});module.exports=P(h);var n=o(require("./female_first_name")),p=o(require("./last_name")),s=o(require("./male_first_name")),_=o(require("./name")),l=o(require("./prefix")),x=o(require("./suffix"));const b={female_first_name:n.default,last_name:p.default,male_first_name:s.default,name:_.default,prefix:l.default,suffix:x.default};var g=b;0&&(module.exports={});
