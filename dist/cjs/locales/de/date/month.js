var a=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var J=Object.getOwnPropertyNames;var n=Object.prototype.hasOwnProperty;var o=(r,e)=>{for(var b in e)a(r,b,{get:e[b],enumerable:!0})},p=(r,e,b,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of J(e))!n.call(r,u)&&u!==b&&a(r,u,{get:()=>e[u],enumerable:!(t=i(e,u))||t.enumerable});return r};var z=r=>p(a({},"__esModule",{value:!0}),r);var M={};o(M,{default:()=>A});module.exports=z(M);var A={wide:["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],wide_context:["Januar","Februar","M\xE4rz","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],abbr:["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"],abbr_context:["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"]};0&&(module.exports={});
