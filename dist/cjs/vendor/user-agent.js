var l=Object.defineProperty;var M=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var T=(s,r)=>{for(var a in r)l(s,a,{get:r[a],enumerable:!0})},g=(s,r,a,$)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of x(r))!S.call(s,i)&&i!==a&&l(s,i,{get:()=>r[i],enumerable:!($=M(r,i))||$.enumerable});return s};var O=s=>g(l({},"__esModule",{value:!0}),s);var N={};T(N,{generate:()=>L});module.exports=O(N);function L(s){function r(n,e){if(n=n||0,e=e||100,typeof e=="number"&&typeof n=="number")return s.datatype.number({min:n,max:e});if(Array.isArray(n))return s.random.arrayElement(n);if(n&&typeof n=="object")return(o=>{const c=r(0,100)/100;let u=0,p=0,d;for(const m in o)if(Object.prototype.hasOwnProperty.call(o,m)){if(p=o[m]+u,d=m,c>=u&&c<=p)break;u=u+o[m]}return d})(n);throw new TypeError(`Invalid arguments passed to rnd. (${e?`${n}, ${e}`:n})`)}function a(){return r(["AB","AF","AN","AR","AS","AZ","BE","BG","BN","BO","BR","BS","CA","CE","CO","CS","CU","CY","DA","DE","EL","EN","EO","ES","ET","EU","FA","FI","FJ","FO","FR","FY","GA","GD","GL","GV","HE","HI","HR","HT","HU","HY","ID","IS","IT","JA","JV","KA","KG","KO","KU","KW","KY","LA","LB","LI","LN","LT","LV","MG","MK","MN","MO","MS","MT","MY","NB","NE","NL","NN","NO","OC","PL","PT","RM","RO","RU","SC","SE","SK","SL","SO","SQ","SR","SV","SW","TK","TR","TY","UK","UR","UZ","VI","VO","YI","ZH"])}function $(){const n=r({chrome:.45132810566,iexplorer:.27477061836,firefox:.19384170608,safari:.06186781118,opera:.01574236955});return[n,r({chrome:{win:.89,mac:.09,lin:.02},firefox:{win:.83,mac:.16,lin:.01},opera:{win:.91,mac:.03,lin:.06},safari:{win:.04,mac:.96},iexplorer:["win"]}[n])]}function i(n){return r({lin:["i686","x86_64"],mac:{Intel:.48,PPC:.01,"U; Intel":.48,"U; PPC":.01},win:["","WOW64","Win64; x64"]}[n])}function A(n){let e="";for(let o=0;o<n;o++)e+=`.${r(0,9)}`;return e}const t={net(){return[r(1,4),r(0,9),r(1e4,99999),r(0,9)].join(".")},nt(){return`${r(5,6)}.${r(0,3)}`},ie(){return r(7,11)},trident(){return`${r(3,7)}.${r(0,1)}`},osx(n){return[10,r(5,10),r(0,9)].join(n||".")},chrome(){return[r(13,39),0,r(800,899),0].join(".")},presto(){return`2.9.${r(160,190)}`},presto2(){return`${r(10,12)}.00`},safari(){return`${r(531,538)}.${r(0,2)}.${r(0,2)}`}},w={firefox(n){const e=`${r(5,15)}${A(2)}`,o="Gecko/20100101 Firefox/"+e,c=i(n),u=n==="win"?"(Windows NT "+t.nt()+(c?`; ${c}`:""):n==="mac"?`(Macintosh; ${c} Mac OS X ${t.osx()}`:`(X11; Linux ${c}`;return"Mozilla/5.0 "+u+"; rv:"+e.slice(0,-2)+") "+o},iexplorer(){const n=t.ie();return n>=11?`Mozilla/5.0 (Windows NT 6.${r(1,3)}; Trident/7.0; ${r(["Touch; ",""])}rv:11.0) like Gecko`:`Mozilla/5.0 (compatible; MSIE ${n}.0; Windows NT ${t.nt()}; Trident/${t.trident()}${r(0,1)===1?"; .NET CLR "+t.net():""})`},opera(n){const e=" Presto/"+t.presto()+" Version/"+t.presto2()+")",o=n==="win"?`(Windows NT ${t.nt()}; U; ${a()}${e}`:n==="lin"?`(X11; Linux ${i(n)}; U; ${a()}${e}`:`(Macintosh; Intel Mac OS X ${t.osx()} U; ${a()} Presto/${t.presto()} Version/${t.presto2()})`;return`Opera/${r(9,14)}.${r(0,99)} ${o}`},safari(n){const e=t.safari(),o=`${r(4,7)}.${r(0,1)}.${r(0,10)}`,c=n==="mac"?`(Macintosh; ${i("mac")} Mac OS X ${t.osx("_")} rv:${r(2,6)}.0; ${a()}) `:"(Windows; U; Windows NT "+t.nt()+")";return"Mozilla/5.0 "+c+"AppleWebKit/"+e+" (KHTML, like Gecko) Version/"+o+" Safari/"+e},chrome(n){const e=t.safari(),o=n==="mac"?`(Macintosh; ${i("mac")} Mac OS X ${t.osx("_")}) `:n==="win"?"(Windows; U; Windows NT "+t.nt()+")":`(X11; Linux ${i(n)}`;return"Mozilla/5.0 "+o+" AppleWebKit/"+e+" (KHTML, like Gecko) Chrome/"+t.chrome()+" Safari/"+e}},f=$();return w[f[0]](f[1])}0&&(module.exports={generate});
