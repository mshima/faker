var p=Object.create;var c=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var s=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var A=(o,r,e,l)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of k(r))!z.call(o,a)&&a!==e&&c(o,a,{get:()=>r[a],enumerable:!(l=i(r,a))||l.enumerable});return o};var m=(o,r,e)=>(e=o!=null?p(s(o)):{},A(r||!o||!o.__esModule?c(e,"default",{value:o,enumerable:!0}):e,o));var t=require("../faker"),f=m(require("../locales/en")),n=m(require("../locales/zu_ZA"));const F=new t.Faker({locale:"zu_ZA",localeFallback:"en",locales:{zu_ZA:n.default,en:f.default}});module.exports=F;
