var p=Object.create;var f=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var s=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty;var b=(o,a,r,l)=>{if(a&&typeof a=="object"||typeof a=="function")for(let e of k(a))!F.call(o,e)&&e!==r&&f(o,e,{get:()=>a[e],enumerable:!(l=i(a,e))||l.enumerable});return o};var c=(o,a,r)=>(r=o!=null?p(s(o)):{},b(a||!o||!o.__esModule?f(r,"default",{value:o,enumerable:!0}):r,o));var m=require("../faker"),t=c(require("../locales/en")),n=c(require("../locales/fa"));const w=new m.Faker({locale:"fa",localeFallback:"en",locales:{fa:n.default,en:t.default}});module.exports=w;
