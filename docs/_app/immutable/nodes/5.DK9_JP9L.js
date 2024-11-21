import{s as ie,b as ue,n as X,r as fe,c as ce,o as he,d as ve}from"../chunks/scheduler.NrZV1iTz.js";import{S as me,i as de,e as h,s as b,c as v,a as O,l as M,f as w,d as P,o as T,n as i,g as re,h as n,p as B,u as le,q as x,r as pe,v as _e,t as ge,b as be,w as we}from"../chunks/index.BNALcpTY.js";import{b as Ce}from"../chunks/paths.B5sGdXY1.js";import{u as ne}from"../chunks/user.B0vv5nV-.js";function ae(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function se(t,a,r){const u=t.slice();return u[12]=a[r],u}function oe(t){let a,r=t[12].namn+"",u;return{c(){a=h("option"),u=ge(r),this.h()},l(m){a=v(m,"OPTION",{style:!0,class:!0});var d=O(a);u=be(d,r),d.forEach(P),this.h()},h(){T(a,"color",t[12].value),a.__value=t[12].value,B(a,a.__value),i(a,"class","svelte-96o2wl")},m(m,d){re(m,a,d),n(a,u)},p:X,d(m){m&&P(a)}}}function ye(t){let a,r,u,m="Registrering",d,e,c,L,C,V="Namn:",q,_,R,N,I="Email:",U,y,D,k,Y="Login:",G,E,J,A,Z="Favoritfärg",j,p,z,S,K,F,$=`Har du redan ett konto? <a href="${Ce}/login">Logga in!</a>`,Q,ee,H=ae(t[4]),f=[];for(let l=0;l<H.length;l+=1)f[l]=oe(se(t,H,l));return{c(){a=h("main"),r=h("div"),u=h("h1"),u.textContent=m,d=b(),e=h("form"),c=h("div"),L=b(),C=h("label"),C.textContent=V,q=b(),_=h("input"),R=b(),N=h("label"),N.textContent=I,U=b(),y=h("input"),D=b(),k=h("label"),k.textContent=Y,G=b(),E=h("input"),J=b(),A=h("label"),A.textContent=Z,j=b(),p=h("select");for(let l=0;l<f.length;l+=1)f[l].c();z=b(),S=h("input"),K=b(),F=h("h2"),F.innerHTML=$,this.h()},l(l){a=v(l,"MAIN",{class:!0});var g=O(a);r=v(g,"DIV",{class:!0});var s=O(r);u=v(s,"H1",{"data-svelte-h":!0}),M(u)!=="svelte-1bygy45"&&(u.textContent=m),d=w(s),e=v(s,"FORM",{class:!0});var o=O(e);c=v(o,"DIV",{style:!0}),O(c).forEach(P),L=w(o),C=v(o,"LABEL",{for:!0,"data-svelte-h":!0}),M(C)!=="svelte-t4ghih"&&(C.textContent=V),q=w(o),_=v(o,"INPUT",{type:!0,id:!0,class:!0}),R=w(o),N=v(o,"LABEL",{for:!0,"data-svelte-h":!0}),M(N)!=="svelte-1flf0h4"&&(N.textContent=I),U=w(o),y=v(o,"INPUT",{type:!0,id:!0,class:!0}),D=w(o),k=v(o,"LABEL",{for:!0,"data-svelte-h":!0}),M(k)!=="svelte-1a0syne"&&(k.textContent=Y),G=w(o),E=v(o,"INPUT",{type:!0,id:!0,class:!0}),J=w(o),A=v(o,"LABEL",{for:!0,"data-svelte-h":!0}),M(A)!=="svelte-kr3efm"&&(A.textContent=Z),j=w(o),p=v(o,"SELECT",{name:!0,id:!0,style:!0});var te=O(p);for(let W=0;W<f.length;W+=1)f[W].l(te);te.forEach(P),z=w(o),S=v(o,"INPUT",{type:!0,style:!0,class:!0}),o.forEach(P),K=w(s),F=v(s,"H2",{"data-svelte-h":!0}),M(F)!=="svelte-1xnyqq9"&&(F.innerHTML=$),s.forEach(P),g.forEach(P),this.h()},h(){T(c,"width","100px"),T(c,"height","100px"),T(c,"border-radius","50%"),T(c,"overflow","hidden"),T(c,"background-color",t[0]),i(C,"for","name"),i(_,"type","text"),i(_,"id","name"),i(_,"class","svelte-96o2wl"),i(N,"for","email"),i(y,"type","email"),i(y,"id","email"),i(y,"class","svelte-96o2wl"),i(k,"for","login"),i(E,"type","password"),i(E,"id","login"),i(E,"class","svelte-96o2wl"),i(A,"for","Favoritfärg"),i(p,"name","Favoritfärg"),i(p,"id","Favoritfärg"),T(p,"color","black"),t[0]===void 0&&ue(()=>t[9].call(p)),i(S,"type","submit"),S.value="Registrera",T(S,"color","white"),i(S,"class","svelte-96o2wl"),i(e,"class","input_feald svelte-96o2wl"),i(r,"class","container svelte-96o2wl"),i(a,"class","svelte-96o2wl")},m(l,g){re(l,a,g),n(a,r),n(r,u),n(r,d),n(r,e),n(e,c),n(e,L),n(e,C),n(e,q),n(e,_),B(_,t[1]),n(e,R),n(e,N),n(e,U),n(e,y),B(y,t[2]),n(e,D),n(e,k),n(e,G),n(e,E),B(E,t[3]),n(e,J),n(e,A),n(e,j),n(e,p);for(let s=0;s<f.length;s+=1)f[s]&&f[s].m(p,null);le(p,t[0],!0),n(e,z),n(e,S),n(r,K),n(r,F),Q||(ee=[x(_,"input",t[6]),x(y,"input",t[7]),x(E,"input",t[8]),x(p,"change",t[9]),x(e,"submit",pe(t[5]))],Q=!0)},p(l,[g]){if(g&1&&T(c,"background-color",l[0]),g&2&&_.value!==l[1]&&B(_,l[1]),g&4&&y.value!==l[2]&&B(y,l[2]),g&8&&E.value!==l[3]&&B(E,l[3]),g&16){H=ae(l[4]);let s;for(s=0;s<H.length;s+=1){const o=se(l,H,s);f[s]?f[s].p(o,g):(f[s]=oe(o),f[s].c(),f[s].m(p,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=H.length}g&17&&le(p,l[0])},i:X,o:X,d(l){l&&P(a),_e(f,l),Q=!1,fe(ee)}}}function Ee(t,a,r){let u;ce(t,ne,I=>r(11,u=I));let m=[],d="black",e="",c="",L="",C=[{namn:"Blå",value:"blue"},{namn:"Röd",value:"red"},{namn:"Gul",value:"yellow"},{namn:"Grön",value:"green"},{namn:"vit",value:"white"},{namn:"svart",value:"black"},{namn:"gray",value:"gray"},{namn:"grey",value:"grey"}];he(()=>{u.length>2&&(m=JSON.parse(u))});function V(){let I={name:e,password:L,email:c,color:d};I.email==""?alert("no email"):m.filter(U=>I.email==U.email).length>0?alert("Email "+I.email+` allreddy has a account assiged
`):(m=[...m,I],ve(ne,u=JSON.stringify(m),u),alert("Välkommen "+e+`!
Credentials:
 collor: `+d+`
   Email: `+c+`
   Password: `+L+`
`+u))}function q(){e=this.value,r(1,e)}function _(){c=this.value,r(2,c)}function R(){L=this.value,r(3,L)}function N(){d=we(this),r(0,d),r(4,C)}return[d,e,c,L,C,V,q,_,R,N]}class Pe extends me{constructor(a){super(),de(this,a,Ee,ye,ie,{})}}export{Pe as component};
