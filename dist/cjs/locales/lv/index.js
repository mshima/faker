var h=Object.create;var i=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var x=(o,r)=>{for(var t in r)i(o,t,{get:r[t],enumerable:!0})},n=(o,r,t,p)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of y(r))!b.call(o,e)&&e!==t&&i(o,e,{get:()=>r[e],enumerable:!(p=v(r,e))||p.enumerable});return o};var m=(o,r,t)=>(t=o!=null?h(D(o)):{},n(r||!o||!o.__esModule?i(t,"default",{value:o,enumerable:!0}):t,o)),g=o=>n(i({},"__esModule",{value:!0}),o);var q={};x(q,{default:()=>k});module.exports=g(q);var f=m(require("./address")),a=m(require("./cell_phone")),l=m(require("./commerce")),c=m(require("./company")),d=m(require("./date")),s=m(require("./internet")),u=m(require("./lorem")),L=m(require("./name")),_=m(require("./phone_number"));const j={title:"Latvian",separator:" un ",address:f.default,cell_phone:a.default,commerce:l.default,company:c.default,date:d.default,internet:s.default,lorem:u.default,name:L.default,phone_number:_.default};var k=j;0&&(module.exports={});
