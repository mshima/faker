var f=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var s=Object.getOwnPropertyNames;var r=Object.prototype.hasOwnProperty;var n=(a,e)=>{for(var t in e)f(a,t,{get:e[t],enumerable:!0})},x=(a,e,t,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of s(e))!r.call(a,i)&&i!==t&&f(a,i,{get:()=>e[i],enumerable:!(m=_(e,i))||m.enumerable});return a};var N=a=>x(f({},"__esModule",{value:!0}),a);var y={};n(y,{default:()=>c});module.exports=N(y);var c=["#{city_prefix} #{Name.first_name}#{Name.last_name}","#{city_prefix} #{Name.first_name}","#{Name.first_name}#{city_suffix}","#{Name.last_name}#{city_suffix}"];0&&(module.exports={});
