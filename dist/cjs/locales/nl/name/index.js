var N=Object.create;var t=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var y=(m,r)=>{for(var o in r)t(m,o,{get:r[o],enumerable:!0})},a=(m,r,o,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of d(r))!v.call(m,i)&&i!==o&&t(m,i,{get:()=>r[i],enumerable:!(f=c(r,i))||f.enumerable});return m};var e=(m,r,o)=>(o=m!=null?N(g(m)):{},a(r||!m||!m.__esModule?t(o,"default",{value:m,enumerable:!0}):o,m)),P=m=>a(t({},"__esModule",{value:!0}),m);var j={};y(j,{default:()=>h});module.exports=P(j);var n=e(require("./female_first_name")),p=e(require("./first_name")),s=e(require("./last_name")),_=e(require("./male_first_name")),l=e(require("./name")),u=e(require("./prefix")),x=e(require("./suffix")),D=e(require("./tussenvoegsel"));const b={female_first_name:n.default,first_name:p.default,last_name:s.default,male_first_name:_.default,name:l.default,prefix:u.default,suffix:x.default,tussenvoegsel:D.default};var h=b;0&&(module.exports={});
