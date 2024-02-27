var Qe=Object.defineProperty;var Ze=(t,e,n)=>e in t?Qe(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ce=(t,e,n)=>(Ze(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function $(){}const Je=t=>t;function pe(t,e){for(const n in e)t[n]=e[n];return t}function Te(t){return t()}function $e(){return Object.create(null)}function W(t){t.forEach(Te)}function Y(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ee;function we(t,e){return t===e?!0:(ee||(ee=document.createElement("a")),ee.href=e,t===ee.href)}function et(t){return Object.keys(t).length===0}function tt(t,...e){if(t==null){for(const r of e)r(void 0);return $}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ae(t,e,n,r){if(t){const i=Ce(t,e,n,r);return t[0](i)}}function Ce(t,e,n,r){return t[1]&&r?pe(n.ctx.slice(),t[1](r(e))):n.ctx}function Ne(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],a=Math.max(e.dirty.length,i.length);for(let s=0;s<a;s+=1)l[s]=e.dirty[s]|i[s];return l}return e.dirty|i}return e.dirty}function Pe(t,e,n,r,i,l){if(i){const a=Ce(e,n,r,l);t.p(a,i)}}function Re(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function nt(t){return t&&Y(t.destroy)?t.destroy:$}const qe=typeof window<"u";let rt=qe?()=>window.performance.now():()=>Date.now(),he=qe?t=>requestAnimationFrame(t):$;const U=new Set;function De(t){U.forEach(e=>{e.c(t)||(U.delete(e),e.f())}),U.size!==0&&he(De)}function st(t){let e;return U.size===0&&he(De),{promise:new Promise(n=>{U.add(e={c:t,f:n})}),abort(){U.delete(e)}}}function b(t,e){t.appendChild(e)}function Fe(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function it(t){const e=_("style");return e.textContent="/* empty */",lt(Fe(t),e),e.sheet}function lt(t,e){return b(t.head||t,e),e.sheet}function k(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function _(t){return document.createElement(t)}function ge(t){return document.createTextNode(t)}function L(){return ge(" ")}function oe(){return ge("")}function Ke(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ot(t){return Array.from(t.childNodes)}function ut(t,e){e=""+e,t.data!==e&&(t.data=e)}function at(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function We(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function ne(t,e){return new t(e)}const re=new Map;let se=0;function ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ft(t,e){const n={stylesheet:it(e),rules:{}};return re.set(t,n),n}function ye(t,e,n,r,i,l,a,s=0){const o=16.666/r;let u=`{
`;for(let E=0;E<=1;E+=o){const H=e+(n-e)*l(E);u+=E*100+`%{${a(H,1-H)}}
`}const c=u+`100% {${a(n,1-n)}}
}`,f=`__svelte_${ct(c)}_${s}`,h=Fe(t),{stylesheet:j,rules:d}=re.get(h)||ft(h,t);d[f]||(d[f]=!0,j.insertRule(`@keyframes ${f} ${c}`,j.cssRules.length));const w=t.style.animation||"";return t.style.animation=`${w?`${w}, `:""}${f} ${r}ms linear ${i}ms 1 both`,se+=1,f}function dt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),se-=i,se||mt())}function mt(){he(()=>{se||(re.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&v(e)}),re.clear())})}let Z;function Q(t){Z=t}function _e(){if(!Z)throw new Error("Function called outside component initialization");return Z}function pt(t){_e().$$.after_update.push(t)}function ht(t){_e().$$.on_destroy.push(t)}function gt(){const t=_e();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const l=We(e,n,{cancelable:r});return i.slice().forEach(a=>{a.call(t,l)}),!l.defaultPrevented}return!0}}function ve(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const X=[],xe=[];let V=[];const ke=[],Ie=Promise.resolve();let me=!1;function Be(){me||(me=!0,Ie.then(Xe))}function _t(){return Be(),Ie}function J(t){V.push(t)}const fe=new Set;let I=0;function Xe(){if(I!==0)return;const t=Z;do{try{for(;I<X.length;){const e=X[I];I++,Q(e),bt(e.$$)}}catch(e){throw X.length=0,I=0,e}for(Q(null),X.length=0,I=0;xe.length;)xe.pop()();for(let e=0;e<V.length;e+=1){const n=V[e];fe.has(n)||(fe.add(n),n())}V.length=0}while(X.length);for(;ke.length;)ke.pop()();me=!1,fe.clear(),Q(t)}function bt(t){if(t.fragment!==null){t.update(),W(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}function $t(t){const e=[],n=[];V.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),V=e}let G;function wt(){return G||(G=Promise.resolve(),G.then(()=>{G=null})),G}function de(t,e,n){t.dispatchEvent(We(`${e?"intro":"outro"}${n}`))}const te=new Set;let D;function ue(){D={r:0,c:[],p:D}}function ae(){D.r||W(D.c),D=D.p}function x(t,e){t&&t.i&&(te.delete(t),t.i(e))}function z(t,e,n,r){if(t&&t.o){if(te.has(t))return;te.add(t),D.c.push(()=>{te.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const yt={duration:0};function ze(t,e,n,r){let l=e(t,n,{direction:"both"}),a=r?0:1,s=null,o=null,u=null,c;function f(){u&&dt(t,u)}function h(d,w){const E=d.b-a;return w*=Math.abs(E),{a,b:d.b,d:E,duration:w,start:d.start,end:d.start+w,group:d.group}}function j(d){const{delay:w=0,duration:E=300,easing:H=Je,tick:q=$,css:F}=l||yt,y={start:rt()+w,b:d};d||(y.group=D,D.r+=1),"inert"in t&&(d?c!==void 0&&(t.inert=c):(c=t.inert,t.inert=!0)),s||o?o=y:(F&&(f(),u=ye(t,a,d,E,w,H,F)),d&&q(0,1),s=h(y,E),J(()=>de(t,d,"start")),st(g=>{if(o&&g>o.start&&(s=h(o,E),o=null,de(t,s.b,"start"),F&&(f(),u=ye(t,a,s.b,s.duration,0,H,l.css))),s){if(g>=s.end)q(a=s.b,1-a),de(t,s.b,"end"),o||(s.b?f():--s.group.r||W(s.group.c)),s=null;else if(g>=s.start){const m=g-s.start;a=s.a+s.d*H(m/s.duration),q(a,1-a)}}return!!(s||o)}))}return{run(d){Y(l)?wt().then(()=>{l=l({direction:d?"in":"out"}),j(d)}):j(d)},end(){f(),s=o=null}}}function ie(t,e){const n={},r={},i={$$scope:1};let l=t.length;for(;l--;){const a=t[l],s=e[l];if(s){for(const o in a)o in s||(r[o]=1);for(const o in s)i[o]||(n[o]=s[o],i[o]=1);t[l]=s}else for(const o in a)i[o]=1}for(const a in r)a in n||(n[a]=void 0);return n}function le(t){return typeof t=="object"&&t!==null?t:{}}function O(t){t&&t.c()}function M(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),J(()=>{const l=t.$$.on_mount.map(Te).filter(Y);t.$$.on_destroy?t.$$.on_destroy.push(...l):W(l),t.$$.on_mount=[]}),i.forEach(J)}function S(t,e){const n=t.$$;n.fragment!==null&&($t(n.after_update),W(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(t,e){t.$$.dirty[0]===-1&&(X.push(t),Be(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(t,e,n,r,i,l,a=null,s=[-1]){const o=Z;Q(t);const u=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:i,bound:$e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:$e(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};a&&a(u.root);let c=!1;if(u.ctx=n?n(t,e.props||{},(f,h,...j)=>{const d=j.length?j[0]:h;return u.ctx&&i(u.ctx[f],u.ctx[f]=d)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](d),c&&vt(t,f)),h}):[],u.update(),c=!0,W(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const f=ot(e.target);u.fragment&&u.fragment.l(f),f.forEach(v)}else u.fragment&&u.fragment.c();e.intro&&x(t.$$.fragment),M(t,e.target,e.anchor),Xe()}Q(o)}class N{constructor(){ce(this,"$$");ce(this,"$$set")}$destroy(){S(this,1),this.$destroy=$}$on(e,n){if(!Y(n))return $;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(xt);const B=[];function Ue(t,e){return{subscribe:Ve(t,e).subscribe}}function Ve(t,e=$){let n;const r=new Set;function i(s){if(T(t,s)&&(t=s,n)){const o=!B.length;for(const u of r)u[1](),B.push(u,t);if(o){for(let u=0;u<B.length;u+=2)B[u][0](B[u+1]);B.length=0}}}function l(s){i(s(t))}function a(s,o=$){const u=[s,o];return r.add(u),r.size===1&&(n=e(i,l)||$),s(t),()=>{r.delete(u),r.size===0&&n&&(n(),n=null)}}return{set:i,update:l,subscribe:a}}function Ye(t,e,n){const r=!Array.isArray(t),i=r?[t]:t;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const l=e.length<2;return Ue(n,(a,s)=>{let o=!1;const u=[];let c=0,f=$;const h=()=>{if(c)return;f();const d=e(r?u[0]:u,a,s);l?a(d):f=Y(d)?d:$},j=i.map((d,w)=>tt(d,E=>{u[w]=E,c&=~(1<<w),o&&h()},()=>{c|=1<<w}));return o=!0,h(),function(){W(j),f(),o=!1}})}function kt(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,r,i,l,a=[],s="",o=t.split("/");for(o[0]||o.shift();i=o.shift();)n=i[0],n==="*"?(a.push("wild"),s+="/(.*)"):n===":"?(r=i.indexOf("?",1),l=i.indexOf(".",1),a.push(i.substring(1,~r?r:~l?l:i.length)),s+=~r&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(s+=(~r?"?":"")+"\\"+i.substring(l))):s+="/"+i;return{keys:a,pattern:new RegExp("^"+s+(e?"(?=$|/)":"/?$"),"i")}}function zt(t){let e,n,r;const i=[t[2]];var l=t[0];function a(s,o){let u={};if(o!==void 0&&o&4)u=ie(i,[le(s[2])]);else for(let c=0;c<i.length;c+=1)u=pe(u,i[c]);return{props:u}}return l&&(e=ne(l,a(t)),e.$on("routeEvent",t[7])),{c(){e&&O(e.$$.fragment),n=oe()},m(s,o){e&&M(e,s,o),k(s,n,o),r=!0},p(s,o){if(o&1&&l!==(l=s[0])){if(e){ue();const u=e;z(u.$$.fragment,1,0,()=>{S(u,1)}),ae()}l?(e=ne(l,a(s,o)),e.$on("routeEvent",s[7]),O(e.$$.fragment),x(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else if(l){const u=o&4?ie(i,[le(s[2])]):{};e.$set(u)}},i(s){r||(e&&x(e.$$.fragment,s),r=!0)},o(s){e&&z(e.$$.fragment,s),r=!1},d(s){s&&v(n),e&&S(e,s)}}}function Et(t){let e,n,r;const i=[{params:t[1]},t[2]];var l=t[0];function a(s,o){let u={};if(o!==void 0&&o&6)u=ie(i,[o&2&&{params:s[1]},o&4&&le(s[2])]);else for(let c=0;c<i.length;c+=1)u=pe(u,i[c]);return{props:u}}return l&&(e=ne(l,a(t)),e.$on("routeEvent",t[6])),{c(){e&&O(e.$$.fragment),n=oe()},m(s,o){e&&M(e,s,o),k(s,n,o),r=!0},p(s,o){if(o&1&&l!==(l=s[0])){if(e){ue();const u=e;z(u.$$.fragment,1,0,()=>{S(u,1)}),ae()}l?(e=ne(l,a(s,o)),e.$on("routeEvent",s[6]),O(e.$$.fragment),x(e.$$.fragment,1),M(e,n.parentNode,n)):e=null}else if(l){const u=o&6?ie(i,[o&2&&{params:s[1]},o&4&&le(s[2])]):{};e.$set(u)}},i(s){r||(e&&x(e.$$.fragment,s),r=!0)},o(s){e&&z(e.$$.fragment,s),r=!1},d(s){s&&v(n),e&&S(e,s)}}}function jt(t){let e,n,r,i;const l=[Et,zt],a=[];function s(o,u){return o[1]?0:1}return e=s(t),n=a[e]=l[e](t),{c(){n.c(),r=oe()},m(o,u){a[e].m(o,u),k(o,r,u),i=!0},p(o,[u]){let c=e;e=s(o),e===c?a[e].p(o,u):(ue(),z(a[c],1,1,()=>{a[c]=null}),ae(),n=a[e],n?n.p(o,u):(n=a[e]=l[e](o),n.c()),x(n,1),n.m(r.parentNode,r))},i(o){i||(x(n),i=!0)},o(o){z(n),i=!1},d(o){o&&v(r),a[e].d(o)}}}function Ee(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let r="";return n>-1&&(r=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:r}}const be=Ue(null,function(e){e(Ee());const n=()=>{e(Ee())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});Ye(be,t=>t.location);Ye(be,t=>t.querystring);const je=Ve(void 0);function Lt(t,e){if(e=Me(e),!t||!t.tagName||t.tagName.toLowerCase()!="a")throw Error('Action "link" can only be used with <a> tags');return Le(t,e),{update(n){n=Me(n),Le(t,n)}}}function Mt(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function Le(t,e){let n=e.href||t.getAttribute("href");if(n&&n.charAt(0)=="/")n="#"+n;else if(!n||n.length<2||n.slice(0,2)!="#/")throw Error('Invalid value for "href" attribute: '+n);t.setAttribute("href",n),t.addEventListener("click",r=>{r.preventDefault(),e.disabled||St(r.currentTarget.getAttribute("href"))})}function Me(t){return t&&typeof t=="string"?{href:t}:t||{}}function St(t){history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=t}function Ot(t,e,n){let{routes:r={}}=e,{prefix:i=""}=e,{restoreScrollState:l=!1}=e;class a{constructor(g,m){if(!m||typeof m!="function"&&(typeof m!="object"||m._sveltesparouter!==!0))throw Error("Invalid component object");if(!g||typeof g=="string"&&(g.length<1||g.charAt(0)!="/"&&g.charAt(0)!="*")||typeof g=="object"&&!(g instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:P,keys:A}=kt(g);this.path=g,typeof m=="object"&&m._sveltesparouter===!0?(this.component=m.component,this.conditions=m.conditions||[],this.userData=m.userData,this.props=m.props||{}):(this.component=()=>Promise.resolve(m),this.conditions=[],this.props={}),this._pattern=P,this._keys=A}match(g){if(i){if(typeof i=="string")if(g.startsWith(i))g=g.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const K=g.match(i);if(K&&K[0])g=g.substr(K[0].length)||"/";else return null}}const m=this._pattern.exec(g);if(m===null)return null;if(this._keys===!1)return m;const P={};let A=0;for(;A<this._keys.length;){try{P[this._keys[A]]=decodeURIComponent(m[A+1]||"")||null}catch{P[this._keys[A]]=null}A++}return P}async checkConditions(g){for(let m=0;m<this.conditions.length;m++)if(!await this.conditions[m](g))return!1;return!0}}const s=[];r instanceof Map?r.forEach((y,g)=>{s.push(new a(g,y))}):Object.keys(r).forEach(y=>{s.push(new a(y,r[y]))});let o=null,u=null,c={};const f=gt();async function h(y,g){await _t(),f(y,g)}let j=null,d=null;l&&(d=y=>{y.state&&(y.state.__svelte_spa_router_scrollY||y.state.__svelte_spa_router_scrollX)?j=y.state:j=null},window.addEventListener("popstate",d),pt(()=>{Mt(j)}));let w=null,E=null;const H=be.subscribe(async y=>{w=y;let g=0;for(;g<s.length;){const m=s[g].match(y.location);if(!m){g++;continue}const P={route:s[g].path,location:y.location,querystring:y.querystring,userData:s[g].userData,params:m&&typeof m=="object"&&Object.keys(m).length?m:null};if(!await s[g].checkConditions(P)){n(0,o=null),E=null,h("conditionsFailed",P);return}h("routeLoading",Object.assign({},P));const A=s[g].component;if(E!=A){A.loading?(n(0,o=A.loading),E=A,n(1,u=A.loadingParams),n(2,c={}),h("routeLoaded",Object.assign({},P,{component:o,name:o.name,params:u}))):(n(0,o=null),E=null);const K=await A();if(y!=w)return;n(0,o=K&&K.default||K),E=A}m&&typeof m=="object"&&Object.keys(m).length?n(1,u=m):n(1,u=null),n(2,c=s[g].props),h("routeLoaded",Object.assign({},P,{component:o,name:o.name,params:u})).then(()=>{je.set(u)});return}n(0,o=null),E=null,je.set(void 0)});ht(()=>{H(),d&&window.removeEventListener("popstate",d)});function q(y){ve.call(this,t,y)}function F(y){ve.call(this,t,y)}return t.$$set=y=>{"routes"in y&&n(3,r=y.routes),"prefix"in y&&n(4,i=y.prefix),"restoreScrollState"in y&&n(5,l=y.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=l?"manual":"auto")},[o,u,c,r,i,l,q,F]}class Ht extends N{constructor(e){super(),C(this,e,Ot,jt,T,{routes:3,prefix:4,restoreScrollState:5})}}const Tt="/okturk/assets/ibokebap-hDk5lSsm.webp",At="/okturk/assets/menu1-cbpqzX1C.webp";function Ct(t){let e,n,r;const i=t[2].default,l=Ae(i,t,t[1],null);return{c(){e=_("div"),l&&l.c(),p(e,"class",n="flex flex-col md:flex-row relative bg-slate-100 p-10 my-24 border-y-4 rounded-xl border-orange-800 border-opacity-20 shadow-2xl "+t[0])},m(a,s){k(a,e,s),l&&l.m(e,null),r=!0},p(a,[s]){l&&l.p&&(!r||s&2)&&Pe(l,i,a,a[1],r?Ne(i,a[1],s,null):Re(a[1]),null),(!r||s&1&&n!==(n="flex flex-col md:flex-row relative bg-slate-100 p-10 my-24 border-y-4 rounded-xl border-orange-800 border-opacity-20 shadow-2xl "+a[0]))&&p(e,"class",n)},i(a){r||(x(l,a),r=!0)},o(a){z(l,a),r=!1},d(a){a&&v(e),l&&l.d(a)}}}function Nt(t,e,n){let{$$slots:r={},$$scope:i}=e,{extraClass:l=""}=e;return t.$$set=a=>{"extraClass"in a&&n(0,l=a.extraClass),"$$scope"in a&&n(1,i=a.$$scope)},[l,i,r]}class Ge extends N{constructor(e){super(),C(this,e,Nt,Ct,T,{extraClass:0})}}function Pt(t){let e,n,r,i,l,a,s,o,u,c;return{c(){e=_("div"),e.innerHTML='<div><p class="text-xl font-bold text-opacity-90">İşletmeniz için en iyi</p></div> <div><h1 class="text-3xl md:text-6xl lg:text-7xl my-3">Web Çözümleri</h1></div> <div><p class="text-xl text-opacity-90 text-end">İşletmenizin ihtiyaçlarına göre özelleştirilmiş profesyonel web çözümlerini <b>2.500₺&#39;den başlayan fiyatlarla</b> edinin!</p></div> <div class="w-fit px-8 py-1 my-4 mx-auto md:ml-7 rounded-3xl border-4 border-orange-600 hover:bg-orange-50 transition-colors duration-150"><a class="no-underline h-full w-full align-middle font-rb font-bold text-lg" href="#">Fiyatlar</a></div>',n=L(),r=_("div"),i=_("div"),l=_("img"),s=L(),o=_("div"),u=_("img"),p(e,"class","flex flex-col w-full md:w-2/5 justify-center font-rb h-full text-center"),p(l,"class","h-full border-y-4 border-slate-400 rounded-lg"),we(l.src,a=Tt)||p(l,"src",a),p(l,"alt","ibokebap"),p(i,"class",Se+" z-10 shadow-2xl waveAnim"),p(u,"class","h-full border-y-4 border-slate-400 rounded-lg -translate-x-6 translate-y-6"),we(u.src,c=At)||p(u,"src",c),p(u,"alt","menu1"),p(o,"class",Se+" waveAnim"),at(o,"animation-delay","1s"),p(r,"id","thediv"),p(r,"class","w-full md:w-3/5 flex flex-row justify-center align-middle items-center h-full")},m(f,h){k(f,e,h),k(f,n,h),k(f,r,h),b(r,i),b(i,l),b(r,s),b(r,o),b(o,u)},p:$,d(f){f&&(v(e),v(n),v(r))}}}function Rt(t){let e,n;return e=new Ge({props:{extraClass:"h-[500px] md:h-96",$$slots:{default:[Pt]},$$scope:{ctx:t}}}),{c(){O(e.$$.fragment)},m(r,i){M(e,r,i),n=!0},p(r,[i]){const l={};i&1&&(l.$$scope={dirty:i,ctx:r}),e.$set(l)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){S(e,r)}}}const Se="h-4/5";class qt extends N{constructor(e){super(),C(this,e,null,Rt,T,{})}}const Dt="/okturk/assets/smilingMan-PPZdpsXV.webp";function Ft(t){let e;return{c(){e=_("table"),e.innerHTML='<thead><tr><th class="invisible border-none">Özellik</th> <th class="!bg-orange-100">QR Menu</th> <th class="!bg-orange-200 underline">Kurumsal Website</th> <th class="!bg-yellow-500 underline decoration-double">Kurumsal Dinamik Website</th></tr> <tr class="text-sm [&amp;&gt;*]:max-w-xs"><th class="invisible border-none">Özellik</th> <th class="!bg-orange-100">İşletmeniz için düşük maliyetli yüksek kalite QR menü</th> <th class="!bg-orange-200">Kurumunuzun internet varlığını sağlayacak harika web tasarımları</th> <th class="!bg-yellow-500">Kurumunuzun bütün web ihtiyaçlarına karşılık gelecek sunucu destekli uygun web sistemleri</th></tr></thead> <tbody><tr><td>Özel Domain</td> <td>var</td> <td>var</td> <td>var</td></tr> <tr><td>Çoklu Sayfa</td> <td>yok</td> <td>4</td> <td>5</td></tr> <tr><td>7/24 Destek</td> <td>yok</td> <td>yok</td> <td>var</td></tr> <tr><td>Sunucu Hizmeti</td> <td>yok</td> <td>yok</td> <td>var</td></tr></tbody>',p(e,"class","table-fixed border-collapse m-0 md:m-8 text-center w-full md:w-auto font-rb text-sm md:text-lg md:shadow-2xl md:translate-x-4 break-words [&>*>*>*]:border-4 [&>*>*>*]:px-4 [&>*>*>*]:py-2 [&>*>*>*]:border-black [&>*>*>*]:bg-white ")},m(n,r){k(n,e,r)},p:$,i:$,o:$,d(n){n&&v(e)}}}class Kt extends N{constructor(e){super(),C(this,e,null,Ft,T,{})}}function Wt(t){let e,n,r,i,l,a,s,o,u,c;return l=new Kt({}),{c(){e=_("div"),n=_("div"),n.innerHTML=`<div class="bg-white bg-opacity-80 p-1 rounded-md md:bg-opacity-0 w-1/2"><p class="text-xl text-opacity-90 text-center"><b>İşletmenizin bütün ihtiyaçlarını karşılayacak ve sektörünüze uygun</b>
                web çözümlerimiz ile işinizi bir adım daha öteye taşımak için <b class="text-2xl opacity-100">beklemeyin!</b></p></div>`,r=L(),i=_("div"),O(l.$$.fragment),a=L(),s=_("div"),s.innerHTML="",o=L(),u=_("div"),u.innerHTML=`<img class="h-full ml-auto opacity-90" src="${Dt}" alt="a smiling Man"/>`,p(n,"class","flex flex-row justify-center w-full z-10"),p(i,"class","mx-auto w-full md:-translate-x-10"),p(e,"class","flex flex-col w-full md:w-3/4 z-10 justify-start font-rb h-full"),p(s,"class","h-full w-1/4 z-10"),p(u,"class","h-full w-full absolute left-0 top-0")},m(f,h){k(f,e,h),b(e,n),b(e,r),b(e,i),M(l,i,null),k(f,a,h),k(f,s,h),k(f,o,h),k(f,u,h),c=!0},p:$,i(f){c||(x(l.$$.fragment,f),c=!0)},o(f){z(l.$$.fragment,f),c=!1},d(f){f&&(v(e),v(a),v(s),v(o),v(u)),S(l)}}}function It(t){let e,n;return e=new Ge({props:{extraClass:"max-h-min px-0",$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){O(e.$$.fragment)},m(r,i){M(e,r,i),n=!0},p(r,[i]){const l={};i&1&&(l.$$scope={dirty:i,ctx:r}),e.$set(l)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){S(e,r)}}}class Bt extends N{constructor(e){super(),C(this,e,null,It,T,{})}}function Xt(t){let e;return{c(){e=_("div"),e.innerHTML='<div class="w-[45%]"></div> <div class="w-[2%] rounded-full !border-4 aspect-square"></div> <div class="w-[45%]"></div>',p(e,"class","w-full flex flex-row justify-between items-center opacity-60 [&>*]:border-t-4 [&>*]:border-orange-700 ")},m(n,r){k(n,e,r)},p:$,i:$,o:$,d(n){n&&v(e)}}}class Ut extends N{constructor(e){super(),C(this,e,null,Xt,T,{})}}function Vt(t){let e,n,r,i,l,a,s;return n=new qt({}),i=new Ut({}),a=new Bt({}),{c(){e=_("div"),O(n.$$.fragment),r=L(),O(i.$$.fragment),l=L(),O(a.$$.fragment),p(e,"class","min-h-screen")},m(o,u){k(o,e,u),M(n,e,null),b(e,r),M(i,e,null),b(e,l),M(a,e,null),s=!0},p:$,i(o){s||(x(n.$$.fragment,o),x(i.$$.fragment,o),x(a.$$.fragment,o),s=!0)},o(o){z(n.$$.fragment,o),z(i.$$.fragment,o),z(a.$$.fragment,o),s=!1},d(o){o&&v(e),S(n),S(i),S(a)}}}class Yt extends N{constructor(e){super(),C(this,e,null,Vt,T,{})}}function Gt(t){let e;return{c(){e=_("div"),e.innerHTML="<br/><br/><br/><br/>not found",p(e,"class","min-h-screen")},m(n,r){k(n,e,r)},p:$,i:$,o:$,d(n){n&&v(e)}}}class Qt extends N{constructor(e){super(),C(this,e,null,Gt,T,{})}}function Zt(t){let e;return{c(){e=_("div"),p(e,"class","min-h-screen")},m(n,r){k(n,e,r)},p:$,i:$,o:$,d(n){n&&v(e)}}}class Jt extends N{constructor(e){super(),C(this,e,null,Zt,T,{})}}function en(t){let e;return{c(){e=_("div"),p(e,"class","min-h-screen")},m(n,r){k(n,e,r)},p:$,i:$,o:$,d(n){n&&v(e)}}}class tn extends N{constructor(e){super(),C(this,e,null,en,T,{})}}function nn(t){let e;return{c(){e=_("div"),p(e,"class","min-h-screen")},m(n,r){k(n,e,r)},p:$,i:$,o:$,d(n){n&&v(e)}}}class rn extends N{constructor(e){super(),C(this,e,null,nn,T,{})}}const sn="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%206H20M4%2012H20M4%2018H20'%20stroke='%23000000'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";function ln(t){let e,n,r,i,l;return{c(){e=_("li"),n=_("a"),r=ge(t[0]),p(n,"href",t[1]),p(n,"class","block text-center p-3 no-underline hover:shadow-2xl transition-shadow duration-300 font-roboto font-bold"),p(e,"class","inline-block m-0 p-0")},m(a,s){k(a,e,s),b(e,n),b(n,r),i||(l=[Ke(n,"click",function(){Y(t[2])&&t[2].apply(this,arguments)}),nt(Lt.call(null,n))],i=!0)},p(a,[s]){t=a,s&1&&ut(r,t[0]),s&2&&p(n,"href",t[1])},i:$,o:$,d(a){a&&v(e),i=!1,W(l)}}}function on(t,e,n){let{title:r="button"}=e,{page:i}=e,{onclick:l=()=>{}}=e;return t.$$set=a=>{"title"in a&&n(0,r=a.title),"page"in a&&n(1,i=a.page),"onclick"in a&&n(2,l=a.onclick)},[r,i,l]}class R extends N{constructor(e){super(),C(this,e,on,ln,T,{title:0,page:1,onclick:2})}}function un(t){const e=t-1;return e*e*e+1}function Oe(t,{delay:e=0,duration:n=400,easing:r=un,axis:i="y"}={}){const l=getComputedStyle(t),a=+l.opacity,s=i==="y"?"height":"width",o=parseFloat(l[s]),u=i==="y"?["top","bottom"]:["left","right"],c=u.map(H=>`${H[0].toUpperCase()}${H.slice(1)}`),f=parseFloat(l[`padding${c[0]}`]),h=parseFloat(l[`padding${c[1]}`]),j=parseFloat(l[`margin${c[0]}`]),d=parseFloat(l[`margin${c[1]}`]),w=parseFloat(l[`border${c[0]}Width`]),E=parseFloat(l[`border${c[1]}Width`]);return{delay:e,duration:n,easing:r,css:H=>`overflow: hidden;opacity: ${Math.min(H*20,1)*a};${s}: ${H*o}px;padding-${u[0]}: ${H*f}px;padding-${u[1]}: ${H*h}px;margin-${u[0]}: ${H*j}px;margin-${u[1]}: ${H*d}px;border-${u[0]}-width: ${H*w}px;border-${u[1]}-width: ${H*E}px;`}}function an(t){let e,n,r,i,l;return{c(){e=_("div"),e.innerHTML='<div class="flex flex-col justify-center"><h1 class="text-3xl text-center font-bold">OKTurk</h1></div>',n=L(),r=_("div"),r.innerHTML=`<img src="${sn}" alt="menu icon"/>`,p(e,"class","m-0 p-2 sticky top-0 z-40 flex flex-row justify-center bg-slate-100 shadow-xl"),p(r,"class","m-0 p-0 fixed top-0 right-0 z-50 w-1/6 rounded-l-lg aspect-square bg-orange-600")},m(a,s){k(a,e,s),k(a,n,s),k(a,r,s),i||(l=Ke(r,"click",t[2]),i=!0)},p:$,i:$,o:$,d(a){a&&(v(e),v(n),v(r)),i=!1,l()}}}function cn(t){let e,n,r,i,l;const a=t[4].default,s=Ae(a,t,t[3],null);return{c(){e=_("div"),n=_("div"),n.innerHTML='<h1 class="text-xl text-center font-bold">OKTurk</h1>',r=L(),i=_("ul"),s&&s.c(),p(n,"class","flex flex-col basis-1/4 justify-center px-4"),p(i,"class","list-none m-0 p-0 py-1 overflow-hidden w-full flex flex-row basis-3/4 justify-center space-x-5 max-h-min relative"),p(e,"class","m-0 p-0 sticky transition top-0 z-50 flex flex-row shadow-xl bg-slate-50 border-b-4 border-orange-600")},m(o,u){k(o,e,u),b(e,n),b(e,r),b(e,i),s&&s.m(i,null),l=!0},p(o,u){s&&s.p&&(!l||u&8)&&Pe(s,a,o,o[3],l?Ne(a,o[3],u,null):Re(o[3]),null)},i(o){l||(x(s,o),l=!0)},o(o){z(s,o),l=!1},d(o){o&&v(e),s&&s.d(o)}}}function He(t){let e,n,r,i,l,a,s,o,u,c,f,h,j,d;return a=new R({props:{title:"Anasayfa",page:"/"}}),o=new R({props:{title:"Kurumsal",page:"/kurumsal"}}),c=new R({props:{title:"Hizmetler",page:"/hizmetler"}}),h=new R({props:{title:"İletişim",page:"/iletisim"}}),{c(){e=_("div"),n=_("div"),r=_("ul"),i=_("li"),i.innerHTML='<h1 class="underline">Menu</h1>',l=L(),O(a.$$.fragment),s=L(),O(o.$$.fragment),u=L(),O(c.$$.fragment),f=L(),O(h.$$.fragment),p(r,"class","max-w-min text-center m-auto"),p(e,"class","fixed top-0 right-0 h-screen w-[75vw] bg-orange-300 z-20")},m(w,E){k(w,e,E),b(e,n),b(n,r),b(r,i),b(r,l),M(a,r,null),b(r,s),M(o,r,null),b(r,u),M(c,r,null),b(r,f),M(h,r,null),d=!0},i(w){d||(x(a.$$.fragment,w),x(o.$$.fragment,w),x(c.$$.fragment,w),x(h.$$.fragment,w),w&&J(()=>{d&&(j||(j=ze(e,Oe,{axis:"x"},!0)),j.run(1))}),d=!0)},o(w){z(a.$$.fragment,w),z(o.$$.fragment,w),z(c.$$.fragment,w),z(h.$$.fragment,w),w&&(j||(j=ze(e,Oe,{axis:"x"},!1)),j.run(0)),d=!1},d(w){w&&v(e),S(a),S(o),S(c),S(h),w&&j&&j.end()}}}function fn(t){let e,n,r,i,l;const a=[cn,an],s=[];function o(c,f){return c[1]?1:0}e=o(t),n=s[e]=a[e](t);let u=t[0]&&He();return{c(){n.c(),r=L(),u&&u.c(),i=oe()},m(c,f){s[e].m(c,f),k(c,r,f),u&&u.m(c,f),k(c,i,f),l=!0},p(c,[f]){n.p(c,f),c[0]?u?f&1&&x(u,1):(u=He(),u.c(),x(u,1),u.m(i.parentNode,i)):u&&(ue(),z(u,1,1,()=>{u=null}),ae())},i(c){l||(x(n),x(u),l=!0)},o(c){z(n),z(u),l=!1},d(c){c&&(v(r),v(i)),s[e].d(c),u&&u.d(c)}}}function dn(t,e,n){let{$$slots:r={},$$scope:i}=e;const a=window.innerWidth<768;let s=!1;function o(){n(0,s=!s)}return t.$$set=u=>{"$$scope"in u&&n(3,i=u.$$scope)},[s,a,o,i,r]}class mn extends N{constructor(e){super(),C(this,e,dn,fn,T,{})}}function pn(t){let e,n,r,i,l,a,s,o,u,c,f,h,j,d,w,E,H,q,F,y,g;return c=new R({props:{title:"Anasayfa",page:"/"}}),h=new R({props:{title:"Kurumsal",page:"/kurumsal"}}),d=new R({props:{title:"Hizmetler",page:"/hizmetler"}}),E=new R({props:{title:"İletişim",page:"/iletisim"}}),{c(){e=_("footer"),n=_("div"),r=_("div"),i=_("div"),i.innerHTML="<p>OKTurk, Nevşehir merkezli kurumsal web hizmetleri sunan bir teknoloji kurumudur.</p>",l=L(),a=_("div"),s=_("ul"),o=_("li"),o.innerHTML='<h1 class="underline">Menu</h1>',u=L(),O(c.$$.fragment),f=L(),O(h.$$.fragment),j=L(),O(d.$$.fragment),w=L(),O(E.$$.fragment),H=L(),q=_("div"),q.innerHTML='<p class="font-rb text-sm">Bu Websitesi ve bütün içeriklerinin sahiplik hakları gizli tutulmaktadır.</p>',F=L(),y=_("div"),y.innerHTML="",p(s,"class","w-full md:max-w-min text-center border-2 border-white rounded-md bg-slate-500"),p(a,"class","w-full"),p(q,"class","mt-auto"),p(r,"class","h-[47%] md:h-full p-6 w-full md:w-[47%] bg-slate-700 rounded-md flex flex-col justify-start text-white"),p(y,"class","h-[47%] md:h-full p-6 w-full md:w-[47%] bg-slate-700 rounded-md flex flex-col justify-start"),p(n,"class","h-full w-full top-0 left-0 flex flex-col md:flex-row p-4 justify-around bg-slate-500"),p(e,"class","w-full h-full md:h-1/2 p-0 left-0 bottom-0 relative")},m(m,P){k(m,e,P),b(e,n),b(n,r),b(r,i),b(r,l),b(r,a),b(a,s),b(s,o),b(s,u),M(c,s,null),b(s,f),M(h,s,null),b(s,j),M(d,s,null),b(s,w),M(E,s,null),b(r,H),b(r,q),b(n,F),b(n,y),g=!0},p:$,i(m){g||(x(c.$$.fragment,m),x(h.$$.fragment,m),x(d.$$.fragment,m),x(E.$$.fragment,m),g=!0)},o(m){z(c.$$.fragment,m),z(h.$$.fragment,m),z(d.$$.fragment,m),z(E.$$.fragment,m),g=!1},d(m){m&&v(e),S(c),S(h),S(d),S(E)}}}class hn extends N{constructor(e){super(),C(this,e,null,pn,T,{})}}function gn(t){let e,n,r,i,l,a,s,o;return e=new R({props:{title:"Anasayfa",page:"/"}}),r=new R({props:{title:"Kurumsal",page:"/kurumsal"}}),l=new R({props:{title:"Hizmetler",page:"/hizmetler"}}),s=new R({props:{title:"İletişim",page:"/iletisim"}}),{c(){O(e.$$.fragment),n=L(),O(r.$$.fragment),i=L(),O(l.$$.fragment),a=L(),O(s.$$.fragment)},m(u,c){M(e,u,c),k(u,n,c),M(r,u,c),k(u,i,c),M(l,u,c),k(u,a,c),M(s,u,c),o=!0},p:$,i(u){o||(x(e.$$.fragment,u),x(r.$$.fragment,u),x(l.$$.fragment,u),x(s.$$.fragment,u),o=!0)},o(u){z(e.$$.fragment,u),z(r.$$.fragment,u),z(l.$$.fragment,u),z(s.$$.fragment,u),o=!1},d(u){u&&(v(n),v(i),v(a)),S(e,u),S(r,u),S(l,u),S(s,u)}}}function _n(t){let e,n,r,i,l,a,s;return n=new mn({props:{$$slots:{default:[gn]},$$scope:{ctx:t}}}),i=new Ht({props:{routes:t[0]}}),a=new hn({}),{c(){e=_("body"),O(n.$$.fragment),r=L(),O(i.$$.fragment),l=L(),O(a.$$.fragment),p(e,"class","overflow-x-hidden")},m(o,u){k(o,e,u),M(n,e,null),b(e,r),M(i,e,null),b(e,l),M(a,e,null),s=!0},p(o,[u]){const c={};u&2&&(c.$$scope={dirty:u,ctx:o}),n.$set(c)},i(o){s||(x(n.$$.fragment,o),x(i.$$.fragment,o),x(a.$$.fragment,o),s=!0)},o(o){z(n.$$.fragment,o),z(i.$$.fragment,o),z(a.$$.fragment,o),s=!1},d(o){o&&v(e),S(n),S(i),S(a)}}}function bn(t){return[{"/":Yt,"/kurumsal":Jt,"/hizmetler":tn,"/iletisim":rn,"*":Qt}]}class $n extends N{constructor(e){super(),C(this,e,bn,_n,T,{})}}new $n({target:document.getElementById("app")});
