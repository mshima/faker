var s=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var b=(t,i)=>{for(var r in i)s(t,r,{get:i[r],enumerable:!0})},f=(t,i,r,e)=>{if(i&&typeof i=="object"||typeof i=="function")for(let n of c(i))!g.call(t,n)&&n!==r&&s(t,n,{get:()=>i[n],enumerable:!(e=a(i,n))||e.enumerable});return t};var l=t=>f(s({},"__esModule",{value:!0}),t);var p={};b(p,{ANIMAL:()=>d});module.exports=l(p);var o=require("./utils");const d=(0,o.allOf)()("dog","cat","snake","bear","lion","cetacean","insect","crocodilia","cow","bird","fish","rabbit","horse","type");0&&(module.exports={ANIMAL});
