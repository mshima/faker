var p=Object.create;var c=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var s=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty;var F=(o,l,r,a)=>{if(l&&typeof l=="object"||typeof l=="function")for(let e of k(l))!v.call(o,e)&&e!==r&&c(o,e,{get:()=>l[e],enumerable:!(a=i(l,e))||a.enumerable});return o};var m=(o,l,r)=>(r=o!=null?p(s(o)):{},F(l||!o||!o.__esModule?c(r,"default",{value:o,enumerable:!0}):r,o));var t=require("../faker"),f=m(require("../locales/en")),n=m(require("../locales/lv"));const b=new t.Faker({locale:"lv",localeFallback:"en",locales:{lv:n.default,en:f.default}});module.exports=b;
