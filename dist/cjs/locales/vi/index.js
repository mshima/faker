var u=Object.create;var i=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var L=Object.getPrototypeOf,b=Object.prototype.hasOwnProperty;var v=(o,m)=>{for(var r in m)i(o,r,{get:m[r],enumerable:!0})},p=(o,m,r,n)=>{if(m&&typeof m=="object"||typeof m=="function")for(let t of D(m))!b.call(o,t)&&t!==r&&i(o,t,{get:()=>m[t],enumerable:!(n=y(m,t))||n.enumerable});return o};var e=(o,m,r)=>(r=o!=null?u(L(o)):{},p(m||!o||!o.__esModule?i(r,"default",{value:o,enumerable:!0}):r,o)),x=o=>p(i({},"__esModule",{value:!0}),o);var j={};v(j,{default:()=>g});module.exports=x(j);var f=e(require("./address")),a=e(require("./cell_phone")),l=e(require("./company")),c=e(require("./date")),d=e(require("./internet")),s=e(require("./lorem")),_=e(require("./name")),h=e(require("./phone_number"));const V={title:"Vietnamese",address:f.default,cell_phone:a.default,company:l.default,date:c.default,internet:d.default,lorem:s.default,name:_.default,phone_number:h.default};var g=V;0&&(module.exports={});
