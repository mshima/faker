var D=Object.create;var e=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var c=Object.getPrototypeOf,d=Object.prototype.hasOwnProperty;var u=(m,i)=>{for(var r in i)e(m,r,{get:i[r],enumerable:!0})},a=(m,i,r,f)=>{if(i&&typeof i=="object"||typeof i=="function")for(let o of b(i))!d.call(m,o)&&o!==r&&e(m,o,{get:()=>i[o],enumerable:!(f=N(i,o))||f.enumerable});return m};var t=(m,i,r)=>(r=m!=null?D(c(m)):{},a(i||!m||!m.__esModule?e(r,"default",{value:m,enumerable:!0}):r,m)),P=m=>a(e({},"__esModule",{value:!0}),m);var j={};u(j,{default:()=>h});module.exports=P(j);var n=t(require("./female_first_name")),p=t(require("./first_name")),_=t(require("./last_name")),s=t(require("./male_first_name")),l=t(require("./name")),x=t(require("./nobility_title_prefix")),y=t(require("./prefix"));const g={female_first_name:n.default,first_name:p.default,last_name:_.default,male_first_name:s.default,name:l.default,nobility_title_prefix:x.default,prefix:y.default};var h=g;0&&(module.exports={});
