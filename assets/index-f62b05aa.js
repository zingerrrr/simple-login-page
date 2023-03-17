(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();function _(){}function X(e){return e()}function R(){return Object.create(null)}function v(e){e.forEach(X)}function Y(e){return typeof e=="function"}function Z(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ie(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function U(e,t,r){e.insertBefore(t,r||null)}function B(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function ee(e){return document.createTextNode(e)}function x(){return ee(" ")}function se(){return ee("")}function S(e,t,r,n){return e.addEventListener(t,r,n),()=>e.removeEventListener(t,r,n)}function a(e,t,r){r==null?e.removeAttribute(t):e.getAttribute(t)!==r&&e.setAttribute(t,r)}function ae(e){return Array.from(e.childNodes)}function q(e,t){e.value=t??""}function ce(e,t,{bubbles:r=!1,cancelable:n=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(e,r,n,t),o}let A;function O(e){A=e}function ue(){if(!A)throw new Error("Function called outside component initialization");return A}function de(){const e=ue();return(t,r,{cancelable:n=!1}={})=>{const o=e.$$.callbacks[t];if(o){const i=ce(t,r,{cancelable:n});return o.slice().forEach(s=>{s.call(e,i)}),!i.defaultPrevented}return!0}}const w=[],V=[],F=[],W=[],fe=Promise.resolve();let D=!1;function pe(){D||(D=!0,fe.then(te))}function H(e){F.push(e)}const T=new Set;let $=0;function te(){if($!==0)return;const e=A;do{try{for(;$<w.length;){const t=w[$];$++,O(t),me(t.$$)}}catch(t){throw w.length=0,$=0,t}for(O(null),w.length=0,$=0;V.length;)V.pop()();for(let t=0;t<F.length;t+=1){const r=F[t];T.has(r)||(T.add(r),r())}F.length=0}while(w.length);for(;W.length;)W.pop()();D=!1,T.clear(),O(e)}function me(e){if(e.fragment!==null){e.update(),v(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(H)}}const M=new Set;let y;function ge(){y={r:0,c:[],p:y}}function he(){y.r||v(y.c),y=y.p}function z(e,t){e&&e.i&&(M.delete(e),e.i(t))}function K(e,t,r,n){if(e&&e.o){if(M.has(e))return;M.add(e),y.c.push(()=>{M.delete(e),n&&(r&&e.d(1),n())}),e.o(t)}else n&&n()}function _e(e){e&&e.c()}function re(e,t,r,n){const{fragment:o,after_update:i}=e.$$;o&&o.m(t,r),n||H(()=>{const s=e.$$.on_mount.map(X).filter(Y);e.$$.on_destroy?e.$$.on_destroy.push(...s):v(s),e.$$.on_mount=[]}),i.forEach(H)}function ne(e,t){const r=e.$$;r.fragment!==null&&(v(r.on_destroy),r.fragment&&r.fragment.d(t),r.on_destroy=r.fragment=null,r.ctx=[])}function be(e,t){e.$$.dirty[0]===-1&&(w.push(e),pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function oe(e,t,r,n,o,i,s,h=[-1]){const c=A;O(e);const l=e.$$={fragment:null,ctx:[],props:i,update:_,not_equal:o,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:R(),dirty:h,skip_bound:!1,root:t.target||c.$$.root};s&&s(l.root);let m=!1;if(l.ctx=r?r(e,t.props||{},(p,C,...f)=>{const E=f.length?f[0]:C;return l.ctx&&o(l.ctx[p],l.ctx[p]=E)&&(!l.skip_bound&&l.bound[p]&&l.bound[p](E),m&&be(e,p)),C}):[],l.update(),m=!0,v(l.before_update),l.fragment=n?n(l.ctx):!1,t.target){if(t.hydrate){const p=ae(t.target);l.fragment&&l.fragment.l(p),p.forEach(B)}else l.fragment&&l.fragment.c();t.intro&&z(e.$$.fragment),re(e,t.target,t.anchor,t.customElement),te()}O(c)}class le{$destroy(){ne(this,1),this.$destroy=_}$on(t,r){if(!Y(r))return _;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(r),()=>{const o=n.indexOf(r);o!==-1&&n.splice(o,1)}}$set(t){this.$$set&&!ie(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ye(e){let t,r,n,o,i,s,h,c,l,m,p,C,f,E,L,N,G,g,J,j,k,I,Q;return{c(){t=d("div"),r=d("div"),n=d("a"),n.innerHTML=`<img class="block dark:hidden" src="/no_bg_1.svg" alt="owasp logo" width="400"/> 

            <img class="hidden dark:block" src="/no_bg_2.svg" alt="owasp logo" width="400"/>`,o=x(),i=d("div"),s=d("div"),h=d("h1"),h.textContent="Sign in to your account",c=x(),l=d("form"),m=d("div"),p=d("label"),p.textContent="Username",C=x(),f=d("input"),E=x(),L=d("div"),N=d("label"),N.textContent="Password",G=x(),g=d("input"),J=x(),j=d("div"),k=d("button"),k.textContent="Login",a(n,"href","#"),a(n,"class","flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"),a(h,"class","text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"),a(p,"for","username"),a(p,"class","block mb-2 text-m font-medium text-gray-900 dark:text-white"),a(f,"type","text"),a(f,"name","email"),a(f,"id","email"),a(f,"class","bg-gray-50 border border-gray-300 text-gray-900 sm:text-m rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 focus:ring-teal-500 focus:border-teal-500"),a(f,"placeholder","l33t_5p34k"),f.required=!0,a(N,"for","password"),a(N,"class","block mb-2 text-m font-medium text-gray-900 dark:text-white"),a(g,"type","password"),a(g,"name","password"),a(g,"id","password"),a(g,"placeholder","••••••••"),a(g,"class","bg-gray-50 border border-gray-300 text-gray-900 sm:text-m rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 focus:ring-teal-500 focus:border-teal-500"),g.required=!0,a(k,"type","button"),a(k,"class","block w-full h-[50px] text-teal-700 hover:text-white border border-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-teal-500 dark:text-teal-500 dark:hover:text-white dark:hover:bg-teal-500 dark:focus:ring-teal-800"),a(j,"class","pt-5"),a(l,"class","space-y-4 md:space-y-6"),a(s,"class","p-6 space-y-4 md:space-y-6 sm:p-8"),a(i,"class","w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700"),a(r,"class","flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"),a(t,"class","bg-gray-50 dark:bg-gray-900 font-consolas")},m(b,P){U(b,t,P),u(t,r),u(r,n),u(r,o),u(r,i),u(i,s),u(s,h),u(s,c),u(s,l),u(l,m),u(m,p),u(m,C),u(m,f),q(f,e[0]),u(l,E),u(l,L),u(L,N),u(L,G),u(L,g),q(g,e[1]),u(l,J),u(l,j),u(j,k),I||(Q=[S(f,"input",e[3]),S(g,"input",e[4]),S(k,"click",e[2]),S(l,"submit",e[2])],I=!0)},p(b,[P]){P&1&&f.value!==b[0]&&q(f,b[0]),P&2&&g.value!==b[1]&&q(g,b[1])},i:_,o:_,d(b){b&&B(t),I=!1,v(Q)}}}function ke(e,t,r){const n=de();let o="",i="";function s(){o=="tr0ub4d0r3"&&i=="arpit_prithvi"?n("correctCredentials"):n("wrongCredentials")}function h(){o=this.value,r(0,o)}function c(){i=this.value,r(1,i)}return[o,i,s,h,c]}class xe extends le{constructor(t){super(),oe(this,t,ke,ye,Z,{})}}function $e(e){let t,r;return t=new xe({}),t.$on("correctCredentials",e[1]),{c(){_e(t.$$.fragment)},m(n,o){re(t,n,o),r=!0},p:_,i(n){r||(z(t.$$.fragment,n),r=!0)},o(n){K(t.$$.fragment,n),r=!1},d(n){ne(t,n)}}}function we(e){let t;return{c(){t=d("p"),t.textContent="owasp{notso_ez_steg}",a(t,"class","bg-white text-black font-consolas md:h-screen text-left dark:bg-black dark:text-white")},m(r,n){U(r,t,n)},p:_,i:_,o:_,d(r){r&&B(t)}}}function ve(e){let t,r,n,o;const i=[we,$e],s=[];function h(c,l){return c[0]?0:1}return t=h(e),r=s[t]=i[t](e),{c(){r.c(),n=se()},m(c,l){s[t].m(c,l),U(c,n,l),o=!0},p(c,[l]){let m=t;t=h(c),t===m?s[t].p(c,l):(ge(),K(s[m],1,1,()=>{s[m]=null}),he(),r=s[t],r?r.p(c,l):(r=s[t]=i[t](c),r.c()),z(r,1),r.m(n.parentNode,n))},i(c){o||(z(r),o=!0)},o(c){K(r),o=!1},d(c){s[t].d(c),c&&B(n)}}}function Ce(e,t,r){let n=!0;return[n,()=>{r(0,n=!0)}]}class Ee extends le{constructor(t){super(),oe(this,t,Ce,ve,Z,{})}}new Ee({target:document.getElementById("app")});
