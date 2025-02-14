import{u as w,h as S,i as P,j as A,k as T}from"./app-CHlnL4AQ.js";function b({fusion:s,state:t,action:r},n){const{property:i,query:c}=r;let l=0;const f=60;function d(){const u=new URL(window.location.href);if(t.hasOwnProperty(i)){const p=w(t[i]);p?u.searchParams.set(c,p.toString()):u.searchParams.delete(c)}else u.searchParams.delete(c);const e=u.pathname+(u.search||"");window.location.pathname+window.location.search!==e&&window.history.replaceState(window.history.state,"",e),l++,l<f&&requestAnimationFrame(d)}return requestAnimationFrame(d),n({fusion:s,state:t})}function E({fusion:s,state:t},r){return Object.keys(s.state).forEach(n=>{t[n]=S(w(s.state[n]))}),r({fusion:s,state:t})}function O(s,t){const{action:r}=s;return r.message&&console.log(r.message),console.log(s),t}function j(s,t){const{pipeline:r}=s,n=r.stack.map(i=>({priority:i.action.priority,handler:i.action.handler}));return console.table(n),t}const v={applyServerState:E,syncQueryString:b,log:O,logStack:j};class x{constructor(t){var r;this.stack=[],this.initial={fusion:t,state:{}},(r=t==null?void 0:t.actions)==null||r.forEach(n=>{this.use({priority:n.priority,action:{...n},handler:v[n.handler]??function(){throw new Error(`No handler exported for [${n.handler}].`)}})})}use(t){if(typeof t.handler!="function"||typeof t.priority!="number")throw new Error("Invalid middleware: expected an object with a numeric 'priority' and a 'handler' function");return this.stack.push(t),this}run(){let t=0;this.stack.sort((n,i)=>n.priority-i.priority);const r=n=>{if(delete n.action,t>=this.stack.length)return n;const{handler:i,action:c}=this.stack[t++];let l=i({...n,action:c,pipeline:this},r);return l===r?r(n):l};return r(this.initial)}createState(){var t;return((t=this.run())==null?void 0:t.state)||{}}}class q{constructor(t,r){const n={},i={};return t.forEach(c=>{const l=function(){let f,d,u;const e=P({processing:!1,failed:!1,recentlyFailed:!1,succeeded:!1,recentlySucceeded:!1,finished:!1,recentlyFinished:!1,error:null,errors:[]}),p=async function(h={},o={}){var F;e.processing=!0,e.failed=!1,e.recentlyFailed=!1,e.succeeded=!1,e.recentlySucceeded=!1,e.finished=!1,e.recentlyFinished=!1,e.error=null,e.errors=[],clearTimeout(f),clearTimeout(d),clearTimeout(u),h instanceof Event&&(h={});let y={args:h,state:{}};Object.keys(r).forEach(a=>{y.state[a]=w(r[a])}),o.fusion=y;try{const a=await A.post("",o,{headers:{"X-Fusion-Action-Request":"true","X-Fusion-Action-Handler":c}});e.succeeded=!0,e.recentlySucceeded=!0,d=setTimeout(()=>{e.recentlySucceeded=!1},3500);const g=new x(((F=a.data)==null?void 0:F.fusion)||{}).createState();return Object.keys(g).forEach(m=>{m in r&&T(r[m])&&(r[m].value=w(g[m]))}),a.data}catch(a){throw a.response&&a.response.status===422&&(e.error=a.response.data.message,e.errors=a.response.data.errors??{}),e.failed=!0,e.recentlyFailed=!0,f=setTimeout(()=>{e.recentlyFailed=!1},3500),a}finally{e.finished=!0,e.recentlyFinished=!0,u=setTimeout(()=>{e.recentlyFinished=!1},3500),e.processing=!1}};return new Proxy(p,{get(h,o,y){return o==="getStatus"?()=>e:Object.prototype.hasOwnProperty.call(e,o)?e[o]:Reflect.get(h,o,y)},set(h,o,y){return Object.prototype.hasOwnProperty.call(e,o)?(e[o]=y,!0):Reflect.set(h,o,y)}})}();if(c.startsWith("fusion")){const f=c.slice(6),d=f.charAt(0).toLowerCase()+f.slice(1);i[d]=l}else n[c]=l}),n.fusion=i,n}}export{q as A,x as P};
