var _=Object.create;var i=Object.defineProperty;var h=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var b=(o,r)=>{for(var e in r)i(o,e,{get:r[e],enumerable:!0})},p=(o,r,e,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of u(r))!L.call(o,t)&&t!==e&&i(o,t,{get:()=>r[t],enumerable:!(n=h(r,t))||n.enumerable});return o};var m=(o,r,e)=>(e=o!=null?_(D(o)):{},p(r||!o||!o.__esModule?i(e,"default",{value:o,enumerable:!0}):e,o)),x=o=>p(i({},"__esModule",{value:!0}),o);var g={};b(g,{default:()=>R});module.exports=x(g);var f=m(require("./address")),a=m(require("./cell_phone")),l=m(require("./date")),c=m(require("./internet")),d=m(require("./name")),s=m(require("./phone_number"));const y={title:"Romanian",address:f.default,cell_phone:a.default,date:l.default,internet:c.default,name:d.default,phone_number:s.default};var R=y;0&&(module.exports={});
