var L=Object.create;var i=Object.defineProperty;var x=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var g=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var q=(o,m)=>{for(var e in m)i(o,e,{get:m[e],enumerable:!0})},f=(o,m,e,p)=>{if(m&&typeof m=="object"||typeof m=="function")for(let t of G(m))!j.call(o,t)&&t!==e&&i(o,t,{get:()=>m[t],enumerable:!(p=x(m,t))||p.enumerable});return o};var r=(o,m,e)=>(e=o!=null?L(g(o)):{},f(m||!o||!o.__esModule?i(e,"default",{value:o,enumerable:!0}):e,o)),v=o=>f(i({},"__esModule",{value:!0}),o);var A={};q(A,{default:()=>z});module.exports=v(A);var n=r(require("./address")),a=r(require("./app")),c=r(require("./business")),l=r(require("./cell_phone")),s=r(require("./commerce")),d=r(require("./company")),h=r(require("./finance")),u=r(require("./hacker")),_=r(require("./internet")),b=r(require("./lorem")),k=r(require("./name")),y=r(require("./phone_number")),D=r(require("./team"));const w={title:"Greek",separator:" & ",address:n.default,app:a.default,business:c.default,cell_phone:l.default,commerce:s.default,company:d.default,finance:h.default,hacker:u.default,internet:_.default,lorem:b.default,name:k.default,phone_number:y.default,team:D.default};var z=w;0&&(module.exports={});
