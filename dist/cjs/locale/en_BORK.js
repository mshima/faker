var p=Object.create;var n=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var s=Object.getPrototypeOf,B=Object.prototype.hasOwnProperty;var F=(e,o,r,l)=>{if(o&&typeof o=="object"||typeof o=="function")for(let a of k(o))!B.call(e,a)&&a!==r&&n(e,a,{get:()=>o[a],enumerable:!(l=i(o,a))||l.enumerable});return e};var c=(e,o,r)=>(r=e!=null?p(s(e)):{},F(o||!e||!e.__esModule?n(r,"default",{value:e,enumerable:!0}):r,e));var m=require("../faker"),t=c(require("../locales/en")),f=c(require("../locales/en_BORK"));const K=new m.Faker({locale:"en_BORK",localeFallback:"en",locales:{en_BORK:f.default,en:t.default}});module.exports=K;
