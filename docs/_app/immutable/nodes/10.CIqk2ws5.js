import{s as q,n as V,r as w,o as z}from"../chunks/scheduler.DyHTbn8F.js";import{S as A,i as H,e as g,s as S,c as x,a as k,d as m,f as O,k as j,l as f,g as T,h as p,r as F,u as E,v as J,x as G,t as K,b as Q,j as W}from"../chunks/index.DCWMPGhH.js";import{e as L}from"../chunks/each.D6YF6ztN.js";import{g as X}from"../chunks/entry.DfYBiQoy.js";import{b as M}from"../chunks/paths.CQH8-jkh.js";function P(u,l,e){const n=u.slice();return n[9]=l[e],n}function R(u){let l,e,n=u[9].name+"",a,c,v;return{c(){l=g("div"),e=g("a"),a=K(n),v=S(),this.h()},l(i){l=x(i,"DIV",{class:!0});var o=k(l);e=x(o,"A",{href:!0,class:!0});var h=k(e);a=Q(h,n),h.forEach(m),v=O(o),o.forEach(m),this.h()},h(){f(e,"href",c=M+"/search/"+u[9].name),f(e,"class","svelte-nafx7u"),f(l,"class","searches svelte-nafx7u")},m(i,o){T(i,l,o),p(l,e),p(e,a),p(l,v)},p(i,o){o&2&&n!==(n=i[9].name+"")&&W(a,n),o&2&&c!==(c=M+"/search/"+i[9].name)&&f(e,"href",c)},d(i){i&&m(l)}}}function Y(u){let l,e,n,a,c,v="clear history",i,o,h,B="sortByIndex",I,_,C,D,b=L(u[1]),r=[];for(let t=0;t<b.length;t+=1)r[t]=R(P(u,b,t));return{c(){l=g("form"),e=g("input"),n=S(),a=g("footer"),c=g("button"),c.textContent=v,i=S(),o=g("div"),h=g("button"),h.textContent=B,I=S(),_=g("div");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){l=x(t,"FORM",{class:!0});var d=k(l);e=x(d,"INPUT",{type:!0,placeholder:!0,class:!0}),d.forEach(m),n=O(t),a=x(t,"FOOTER",{class:!0});var s=k(a);c=x(s,"BUTTON",{class:!0,"data-svelte-h":!0}),j(c)!=="svelte-1jpmk83"&&(c.textContent=v),i=O(s),o=x(s,"DIV",{class:!0});var y=k(o);h=x(y,"BUTTON",{class:!0,"data-svelte-h":!0}),j(h)!=="svelte-zly1hl"&&(h.textContent=B),y.forEach(m),I=O(s),_=x(s,"DIV",{class:!0});var U=k(_);for(let N=0;N<r.length;N+=1)r[N].l(U);U.forEach(m),s.forEach(m),this.h()},h(){f(e,"type","text"),f(e,"placeholder","Sök upp en pokemon"),f(e,"class","svelte-nafx7u"),f(l,"class","svelte-nafx7u"),f(c,"class","svelte-nafx7u"),f(h,"class","svelte-nafx7u"),f(o,"class","svelte-nafx7u"),f(_,"class","sertches_box svelte-nafx7u"),f(a,"class","svelte-nafx7u")},m(t,d){T(t,l,d),p(l,e),F(e,u[0]),T(t,n,d),T(t,a,d),p(a,c),p(a,i),p(a,o),p(o,h),p(a,I),p(a,_);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(_,null);C||(D=[E(e,"input",u[4]),E(l,"submit",J(u[5])),E(c,"click",u[6]),E(h,"click",u[7])],C=!0)},p(t,[d]){if(d&1&&e.value!==t[0]&&F(e,t[0]),d&2){b=L(t[1]);let s;for(s=0;s<b.length;s+=1){const y=P(t,b,s);r[s]?r[s].p(y,d):(r[s]=R(y),r[s].c(),r[s].m(_,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=b.length}},i:V,o:V,d(t){t&&(m(l),m(n),m(a)),G(r,t),C=!1,w(D)}}}function Z(u,l,e){let n,a=[];function c(){let _=sessionStorage.getItem("latest")??"[]";_.length>2&&e(1,a=JSON.parse(_)),console.log("session",a)}z(()=>{c()});function v(){sessionStorage.setItem("latest","[]"),e(1,a=[])}function i(){a.sort((_,C)=>_.id-C.id),e(1,a)}function o(){n=this.value,e(0,n)}return[n,a,v,i,o,()=>X("/search/"+n.toLowerCase()),()=>v(),()=>i()]}class le extends A{constructor(l){super(),H(this,l,Z,Y,q,{})}}export{le as component};
