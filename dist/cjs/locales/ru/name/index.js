var c=Object.create;var t=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty;var h=(m,e)=>{for(var o in e)t(m,o,{get:e[o],enumerable:!0})},f=(m,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of P(e))!g.call(m,i)&&i!==o&&t(m,i,{get:()=>e[i],enumerable:!(a=y(e,i))||a.enumerable});return m};var r=(m,e,o)=>(o=m!=null?c(b(m)):{},f(e||!m||!m.__esModule?t(o,"default",{value:m,enumerable:!0}):o,m)),j=m=>f(t({},"__esModule",{value:!0}),m);var v={};h(v,{default:()=>q});module.exports=j(v);var n=r(require("./female_first_name")),p=r(require("./female_last_name")),l=r(require("./female_middle_name")),_=r(require("./male_first_name")),s=r(require("./male_last_name")),d=r(require("./male_middle_name")),x=r(require("./name")),u=r(require("./prefix")),D=r(require("./suffix")),N=r(require("./title"));const k={female_first_name:n.default,female_last_name:p.default,female_middle_name:l.default,male_first_name:_.default,male_last_name:s.default,male_middle_name:d.default,name:x.default,prefix:u.default,suffix:D.default,title:N.default};var q=k;0&&(module.exports={});
