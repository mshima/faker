var m=Object.create;var t=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var l=Object.getOwnPropertyNames;var p=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty;var d=(i,e)=>{for(var n in e)t(i,n,{get:e[n],enumerable:!0})},r=(i,e,n,f)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of l(e))!y.call(i,o)&&o!==n&&t(i,o,{get:()=>e[o],enumerable:!(f=c(e,o))||f.enumerable});return i};var k=(i,e,n)=>(n=i!=null?m(p(i)):{},r(e||!i||!i.__esModule?t(n,"default",{value:i,enumerable:!0}):n,i)),u=i=>r(t({},"__esModule",{value:!0}),i);var F={};d(F,{Faker:()=>s.Faker,default:()=>x,faker:()=>D});module.exports=u(F);var s=require("./faker"),a=k(require("./locales"));const D=new s.Faker({locales:a.default});var x=D;0&&(module.exports={Faker,faker});
