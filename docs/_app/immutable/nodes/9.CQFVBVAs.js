import{s as $,n as U,d as G}from"../chunks/DyLMEOOW.js";import{S as ee,i as te,d as i,q as se,s as F,x as S,a as g,b as C,r as Z,u as le,m as n,c as v,n as L,g as M,e as I,f as J,h as k,j as q,t as K}from"../chunks/BB7jGigu.js";import{e as Q}from"../chunks/D6YF6ztN.js";function W(a,s,l){const t=a.slice();return t[10]=s[l],t[12]=l,t}function X(a){let s,l,t,u,r,o,d,w,z;function _(){return a[6](a[12])}return{c(){s=k("div"),l=k("img"),u=q(),r=k("img"),d=q(),this.h()},l(m){s=v(m,"DIV",{class:!0});var h=I(s);l=v(h,"IMG",{class:!0,draggable:!0,src:!0,alt:!0}),u=M(h),r=v(h,"IMG",{class:!0,draggable:!0,src:!0,alt:!0}),d=M(h),h.forEach(i),this.h()},h(){n(l,"class","back svelte-13y7zu8"),n(l,"draggable","false"),G(l.src,t=a[10].back)||n(l,"src",t),n(l,"alt",""),n(r,"class","front svelte-13y7zu8"),n(r,"draggable","false"),G(r.src,o=fe)||n(r,"src",o),n(r,"alt",""),n(s,"class","card svelte-13y7zu8"),S(s,"flipped",a[10].flipped)},m(m,h){g(m,s,h),C(s,l),C(s,u),C(s,r),C(s,d),w||(z=Z(s,"click",_),w=!0)},p(m,h){a=m,h&1&&!G(l.src,t=a[10].back)&&n(l,"src",t),h&1&&S(s,"flipped",a[10].flipped)},d(m){m&&i(s),w=!1,z()}}}function ae(a){let s,l="Memory",t,u,r,o,d,w="Restart game",z,_,m,h,b,E,y,D,P,j,N="",x,V,T=Q(a[0]),p=[];for(let e=0;e<T.length;e+=1)p[e]=X(W(a,T,e));return{c(){s=k("h1"),s.textContent=l,t=q(),u=k("main");for(let e=0;e<p.length;e+=1)p[e].c();r=q(),o=k("div"),d=k("button"),d.textContent=w,z=q(),_=k("aside"),m=k("p"),h=K(a[1]),b=q(),E=k("aside"),y=k("p"),D=K(a[2]),P=q(),j=k("aside"),j.innerHTML=N,this.h()},l(e){s=v(e,"H1",{style:!0,"data-svelte-h":!0}),L(s)!=="svelte-ahiki0"&&(s.textContent=l),t=M(e),u=v(e,"MAIN",{class:!0});var f=I(u);for(let H=0;H<p.length;H+=1)p[H].l(f);f.forEach(i),r=M(e),o=v(e,"DIV",{class:!0});var c=I(o);d=v(c,"BUTTON",{"data-svelte-h":!0}),L(d)!=="svelte-1bkmng2"&&(d.textContent=w),c.forEach(i),z=M(e),_=v(e,"ASIDE",{class:!0});var A=I(_);m=v(A,"P",{class:!0});var B=I(m);h=J(B,a[1]),B.forEach(i),A.forEach(i),b=M(e),E=v(e,"ASIDE",{class:!0});var O=I(E);y=v(O,"P",{class:!0});var R=I(y);D=J(R,a[2]),R.forEach(i),O.forEach(i),P=M(e),j=v(e,"ASIDE",{class:!0,"data-svelte-h":!0}),L(j)!=="svelte-16ug3p6"&&(j.innerHTML=N),this.h()},h(){le(s,"justify-self","center"),n(u,"class","svelte-13y7zu8"),n(o,"class","button_holder svelte-13y7zu8"),n(m,"class","svelte-13y7zu8"),n(_,"class","blue svelte-13y7zu8"),n(y,"class","svelte-13y7zu8"),n(E,"class","red svelte-13y7zu8"),n(j,"class","turn svelte-13y7zu8"),S(j,"blue",a[3])},m(e,f){g(e,s,f),g(e,t,f),g(e,u,f);for(let c=0;c<p.length;c+=1)p[c]&&p[c].m(u,null);g(e,r,f),g(e,o,f),C(o,d),g(e,z,f),g(e,_,f),C(_,m),C(m,h),g(e,b,f),g(e,E,f),C(E,y),C(y,D),g(e,P,f),g(e,j,f),x||(V=Z(d,"click",a[7]),x=!0)},p(e,[f]){if(f&17){T=Q(e[0]);let c;for(c=0;c<T.length;c+=1){const A=W(e,T,c);p[c]?p[c].p(A,f):(p[c]=X(A),p[c].c(),p[c].m(u,null))}for(;c<p.length;c+=1)p[c].d(1);p.length=T.length}f&2&&F(h,e[1]),f&4&&F(D,e[2]),f&8&&S(j,"blue",e[3])},i:U,o:U,d(e){e&&(i(s),i(t),i(u),i(r),i(o),i(z),i(_),i(b),i(E),i(P),i(j)),se(p,e),x=!1,V()}}}let fe="favicon.png";function ce(){alert("game ended")}function Y(a){for(let s=a.length-1;s>=0;s--){const l=Math.floor(Math.random()*(s+1));[a[s],a[l]]=[a[l],a[s]]}}function ie(a,s,l){let t=[{back:"https://preview.redd.it/sw96nbzsyz691.jpg?auto=webp&s=e96e62a872e48c8c4ade7fc354995cb5a39375ad",flipped:!1,matched:!1},{back:"https://preview.redd.it/sw96nbzsyz691.jpg?auto=webp&s=e96e62a872e48c8c4ade7fc354995cb5a39375ad",flipped:!1,matched:!1},{back:"https://preview.redd.it/it1g4oca35v61.jpg?auto=webp&s=4fdd30b07e0a9949bec47af606344fd654be7ea7",flipped:!1,matched:!1},{back:"https://preview.redd.it/it1g4oca35v61.jpg?auto=webp&s=4fdd30b07e0a9949bec47af606344fd654be7ea7",flipped:!1,matched:!1},{back:"https://preview.redd.it/kqxqx8hnmwg61.jpg?auto=webp&s=9ebe35ce39c8b4a480c6f56e887678f9c400f7f4",flipped:!1,matched:!1},{back:"https://preview.redd.it/kqxqx8hnmwg61.jpg?auto=webp&s=9ebe35ce39c8b4a480c6f56e887678f9c400f7f4",flipped:!1,matched:!1},{back:"https://preview.redd.it/i-mean-its-not-gay-right-v0-3aeeczldfx2e1.png?auto=webp&s=39bd4d1451f4e769054fbdd80714626290df0374",flipped:!1,matched:!1},{back:"https://preview.redd.it/i-mean-its-not-gay-right-v0-3aeeczldfx2e1.png?auto=webp&s=39bd4d1451f4e769054fbdd80714626290df0374",flipped:!1,matched:!1},{back:"assets/dora_deport.webp",flipped:!1,matched:!1},{back:"assets/dora_deport.webp",flipped:!1,matched:!1},{back:"assets/no_emegency_pls.webp",flipped:!1,matched:!1},{back:"assets/no_emegency_pls.webp",flipped:!1,matched:!1}];Y(t);let u=0,r=0,o=!0,d=0,w=null;function z(b){if(d>=2||t[b].flipped)return;if(l(0,t[b].flipped=!t[b].flipped,t),d++,d<2){w=b;return}t[w].back==t[b].back?(l(0,t[w].matched=!0,t),l(0,t[b].matched=!0,t),o?l(1,u++,u):l(2,r++,r)):l(3,o=!o),setTimeout(()=>{t.forEach(y=>{y.flipped=y.matched}),d=0,l(0,t)},1e3),l(0,t);let E=0;t.forEach(y=>{y.matched==!0&&E++}),t.length==E&&ce()}function _(){t.forEach(b=>{b.matched=!1,b.flipped=!1}),Y(t),l(0,t),d=0,l(3,o=!0),w=null}return[t,u,r,o,z,_,b=>z(b),()=>_()]}class ne extends ee{constructor(s){super(),te(this,s,ie,ae,$,{})}}export{ne as component};
