import{H as ce}from"../chunks/control.CYgJF_JY.js";import{k as oe,l as re,m as L,p as ie,s as he,n as y,o as ue,d as X}from"../chunks/scheduler.DyHTbn8F.js";import{B as _e,n as fe,C as pe,m as me,S as de,i as ve,A as R,g as C,d as u,e as b,t as D,s as M,c as x,a as j,b as G,f as A,k as U,l as g,h as v,j as V,x as Q,q as Y}from"../chunks/index.DCWMPGhH.js";import{e as B}from"../chunks/each.D6YF6ztN.js";function Z(n,e){const l=e.token={};function t(s,o,d,i){if(e.token!==l)return;e.resolved=i;let r=e.ctx;d!==void 0&&(r=r.slice(),r[d]=i);const h=s&&(e.current=s)(r);let w=!1;e.block&&(e.blocks?e.blocks.forEach((I,O)=>{O!==o&&I&&(_e(),fe(I,1,1,()=>{e.blocks[O]===I&&(e.blocks[O]=null)}),pe())}):e.block.d(1),h.c(),me(h,1),h.m(e.mount(),e.anchor),w=!0),e.block=h,e.blocks&&(e.blocks[o]=h),w&&ie()}if(oe(n)){const s=re();if(n.then(o=>{L(s),t(e.then,1,e.value,o),L(null)},o=>{if(L(s),t(e.catch,2,e.error,o),L(null),!e.hasCatch)throw o}),e.current!==e.pending)return t(e.pending,0),!0}else{if(e.current!==e.then)return t(e.then,1,e.value,n),!0;e.resolved=n}}function ge(n,e,l){const t=e.slice(),{resolved:s}=n;n.current===n.then&&(t[n.value]=s),n.current===n.catch&&(t[n.error]=s),n.block.p(t,l)}function ke(n,e){throw new ce(n,e)}new TextEncoder;const be=!1,xe=!1;async function Ce({params:n,fetch:e}){console.log(n.pokemon);const l=await e("https://pokeapi.co/api/v2/pokemon/"+n.pokemon,{method:"GET"});if(l.status!=200)throw ke(l.status,{message:l.statusText});let t=await l.json();return console.log(t),{params:n,response:t}}const qe=Object.freeze(Object.defineProperty({__proto__:null,load:Ce,prerender:xe,ssr:be},Symbol.toStringTag,{value:"Module"}));function $(n,e,l){const t=n.slice();return t[5]=e[l],t}function ee(n,e,l){const t=n.slice();return t[8]=e[l],t}function te(n,e,l){const t=n.slice();return t[11]=e[l],t}function Ee(n){return{c:y,l:y,m:y,p:y,d:y}}function Se(n){let e,l=n[4].response.name+"",t,s,o,d,i,r,h,w="Type:",I,O,E,T,W="Stats",z,F,K,P=B(Object.entries(n[4].response.sprites)),_=[];for(let c=0;c<P.length;c+=1)_[c]=se(te(n,P,c));let q=B(n[4].response.types),f=[];for(let c=0;c<q.length;c+=1)f[c]=ne(ee(n,q,c));let H=B(n[4].response.stats),p=[];for(let c=0;c<H.length;c+=1)p[c]=ae($(n,H,c));return{c(){e=b("h1"),t=D(l),s=M(),o=b("article");for(let c=0;c<_.length;c+=1)_[c].c();d=M(),i=b("section"),r=b("div"),h=b("h2"),h.textContent=w,I=M();for(let c=0;c<f.length;c+=1)f[c].c();O=M(),E=b("div"),T=b("h2"),T.textContent=W,z=M(),F=b("br"),K=M();for(let c=0;c<p.length;c+=1)p[c].c();this.h()},l(c){e=x(c,"H1",{class:!0});var m=j(e);t=G(m,l),m.forEach(u),s=A(c),o=x(c,"ARTICLE",{class:!0});var a=j(o);for(let S=0;S<_.length;S+=1)_[S].l(a);a.forEach(u),d=A(c),i=x(c,"SECTION",{});var k=j(i);r=x(k,"DIV",{class:!0});var J=j(r);h=x(J,"H2",{class:!0,"data-svelte-h":!0}),U(h)!=="svelte-1q0kiq0"&&(h.textContent=w),I=A(J);for(let S=0;S<f.length;S+=1)f[S].l(J);J.forEach(u),O=A(k),E=x(k,"DIV",{class:!0});var N=j(E);T=x(N,"H2",{class:!0,"data-svelte-h":!0}),U(T)!=="svelte-c6kcpv"&&(T.textContent=W),z=A(N),F=x(N,"BR",{}),K=A(N);for(let S=0;S<p.length;S+=1)p[S].l(N);N.forEach(u),k.forEach(u),this.h()},h(){g(e,"class","svelte-1oxhnhc"),g(o,"class","svelte-1oxhnhc"),g(h,"class","svelte-1oxhnhc"),g(r,"class","type_box svelte-1oxhnhc"),g(T,"class","svelte-1oxhnhc"),g(E,"class","stats_box svelte-1oxhnhc")},m(c,m){C(c,e,m),v(e,t),C(c,s,m),C(c,o,m);for(let a=0;a<_.length;a+=1)_[a]&&_[a].m(o,null);C(c,d,m),C(c,i,m),v(i,r),v(r,h),v(r,I);for(let a=0;a<f.length;a+=1)f[a]&&f[a].m(r,null);v(i,O),v(i,E),v(E,T),v(E,z),v(E,F),v(E,K);for(let a=0;a<p.length;a+=1)p[a]&&p[a].m(E,null)},p(c,m){if(m&1&&l!==(l=c[4].response.name+"")&&V(t,l),m&1){P=B(Object.entries(c[4].response.sprites));let a;for(a=0;a<P.length;a+=1){const k=te(c,P,a);_[a]?_[a].p(k,m):(_[a]=se(k),_[a].c(),_[a].m(o,null))}for(;a<_.length;a+=1)_[a].d(1);_.length=P.length}if(m&1){q=B(c[4].response.types);let a;for(a=0;a<q.length;a+=1){const k=ee(c,q,a);f[a]?f[a].p(k,m):(f[a]=ne(k),f[a].c(),f[a].m(r,null))}for(;a<f.length;a+=1)f[a].d(1);f.length=q.length}if(m&1){H=B(c[4].response.stats);let a;for(a=0;a<H.length;a+=1){const k=$(c,H,a);p[a]?p[a].p(k,m):(p[a]=ae(k),p[a].c(),p[a].m(E,null))}for(;a<p.length;a+=1)p[a].d(1);p.length=H.length}},d(c){c&&(u(e),u(s),u(o),u(d),u(i)),Q(_,c),Q(f,c),Q(p,c)}}}function le(n){let e,l,t;return{c(){e=b("img"),this.h()},l(s){e=x(s,"IMG",{alt:!0,src:!0}),this.h()},h(){g(e,"alt",l="imege of "+n[4].response.name),X(e.src,t=n[11][1])||g(e,"src",t)},m(s,o){C(s,e,o)},p(s,o){o&1&&l!==(l="imege of "+s[4].response.name)&&g(e,"alt",l),o&1&&!X(e.src,t=s[11][1])&&g(e,"src",t)},d(s){s&&u(e)}}}function se(n){let e,l=typeof n[11][1]=="string"&&le(n);return{c(){l&&l.c(),e=R()},l(t){l&&l.l(t),e=R()},m(t,s){l&&l.m(t,s),C(t,e,s)},p(t,s){typeof t[11][1]=="string"?l?l.p(t,s):(l=le(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){t&&u(e),l&&l.d(t)}}}function ne(n){let e,l=n[8].type.name+"",t;return{c(){e=b("p"),t=D(l),this.h()},l(s){e=x(s,"P",{class:!0});var o=j(e);t=G(o,l),o.forEach(u),this.h()},h(){g(e,"class","svelte-1oxhnhc")},m(s,o){C(s,e,o),v(e,t)},p(s,o){o&1&&l!==(l=s[8].type.name+"")&&V(t,l)},d(s){s&&u(e)}}}function ae(n){let e,l=n[5].stat.name+"",t,s,o,d=n[5].base_stat+"",i;return{c(){e=b("p"),t=D(l),s=D(":"),o=b("p"),i=D(d),this.h()},l(r){e=x(r,"P",{style:!0,class:!0});var h=j(e);t=G(h,l),s=G(h,":"),h.forEach(u),o=x(r,"P",{style:!0,class:!0});var w=j(o);i=G(w,d),w.forEach(u),this.h()},h(){Y(e,"right","3px "),g(e,"class","svelte-1oxhnhc"),Y(o,"left","1"),g(o,"class","svelte-1oxhnhc")},m(r,h){C(r,e,h),v(e,t),v(e,s),C(r,o,h),v(o,i)},p(r,h){h&1&&l!==(l=r[5].stat.name+"")&&V(t,l),h&1&&d!==(d=r[5].base_stat+"")&&V(i,d)},d(r){r&&(u(e),u(o))}}}function we(n){let e,l=".. waiting";return{c(){e=b("p"),e.textContent=l,this.h()},l(t){e=x(t,"P",{class:!0,"data-svelte-h":!0}),U(e)!=="svelte-ju3n2x"&&(e.textContent=l),this.h()},h(){g(e,"class","svelte-1oxhnhc")},m(t,s){C(t,e,s)},p:y,d(t){t&&u(e)}}}function ye(n){let e,l,t={ctx:n,current:null,token:null,hasCatch:!1,pending:we,then:Se,catch:Ee,value:4};return Z(l=n[0],t),{c(){e=R(),t.block.c()},l(s){e=R(),t.block.l(s)},m(s,o){C(s,e,o),t.block.m(s,t.anchor=o),t.mount=()=>e.parentNode,t.anchor=e},p(s,[o]){n=s,t.ctx=n,o&1&&l!==(l=n[0])&&Z(l,t)||ge(t,n,o)},i:y,o:y,d(s){s&&u(e),t.block.d(s),t.token=null,t=null}}}function je(n,e,l){let{data:t}=e,s=[];function o(i){for(let r in s)i.response.name==s[r].name&&s.splice(r,1);s.length>=5&&(s.shift(),s=s),s.push(i.response),sessionStorage.setItem("latest",JSON.stringify(s))}function d(){let i=sessionStorage.getItem("latest")??"[]";i.length>2&&(s=JSON.parse(i)),console.log("session",s)}return ue(()=>{d(),o(t)}),n.$$set=i=>{"data"in i&&l(0,t=i.data)},[t]}class He extends de{constructor(e){super(),ve(this,e,je,ye,he,{data:0})}}export{He as component,qe as universal};
