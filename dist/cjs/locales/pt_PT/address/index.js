var D=Object.create;var e=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty;var k=(r,t)=>{for(var i in t)e(r,i,{get:t[i],enumerable:!0})},p=(r,t,i,f)=>{if(t&&typeof t=="object"||typeof t=="function")for(let m of P(t))!j.call(r,m)&&m!==i&&e(r,m,{get:()=>t[m],enumerable:!(f=g(t,m))||f.enumerable});return r};var o=(r,t,i)=>(i=r!=null?D(h(r)):{},p(t||!r||!r.__esModule?e(i,"default",{value:r,enumerable:!0}):i,r)),q=r=>p(e({},"__esModule",{value:!0}),r);var z={};k(z,{default:()=>w});module.exports=q(z);var s=o(require("./building_number")),d=o(require("./city")),n=o(require("./city_name")),a=o(require("./city_prefix")),c=o(require("./city_suffix")),_=o(require("./country")),u=o(require("./default_country")),y=o(require("./direction")),l=o(require("./postcode")),x=o(require("./street_address")),b=o(require("./street_name")),A=o(require("./street_prefix"));const v={building_number:s.default,city:d.default,city_name:n.default,city_prefix:a.default,city_suffix:c.default,country:_.default,default_country:u.default,direction:y.default,postcode:l.default,street_address:x.default,street_name:b.default,street_prefix:A.default};var w=v;0&&(module.exports={});
