!function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function c(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function u(){return s(" ")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function h(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let m;function b(t){m=t}const _=[],p=[],w=[],y=[],$=Promise.resolve();let x=!1;function v(t){w.push(t)}let k=!1;const A=new Set;function R(){if(!k){k=!0;do{for(let t=0;t<_.length;t+=1){const e=_[t];b(e),C(e.$$)}for(b(null),_.length=0;p.length;)p.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];A.has(e)||(A.add(e),e())}w.length=0}while(_.length);for(;y.length;)y.pop()();x=!1,k=!1,A.clear()}}function C(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const E=new Set;function I(t,e){-1===t.$$.dirty[0]&&(_.push(t),x||(x=!0,$.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(i,l,a,s,u,f,d=[-1]){const g=m;b(i);const h=i.$$={fragment:null,ctx:null,props:f,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(g?g.$$.context:[]),callbacks:n(),dirty:d,skip_bound:!1};let _=!1;if(h.ctx=a?a(i,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return h.ctx&&u(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),_&&I(i,t)),e})):[],h.update(),_=!0,o(h.before_update),h.fragment=!!s&&s(h.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();l.intro&&((p=i.$$.fragment)&&p.i&&(E.delete(p),p.i(w))),function(t,n,i,l){const{fragment:c,on_mount:a,on_destroy:s,after_update:u}=t.$$;c&&c.m(n,i),l||v((()=>{const n=a.map(e).filter(r);s?s.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(v)}(i,l.target,l.anchor,l.customElement),R()}var p,w;b(g)}function L(e){let n,r,i,m,b,_,p,w,y,$,x,v,k,A,R,C,E,I,S,L,M,W;return{c(){n=a("main"),r=a("div"),i=a("input"),m=u(),b=a("div"),_=a("canvas"),p=u(),w=a("div"),y=a("button"),y.textContent="ANALYZE PICTURE",$=u(),x=a("h2"),v=s("Count: "),k=s(e[1]),A=a("br"),R=s("Dominoes Found: "),C=s(e[2]),E=u(),I=a("h2"),I.innerHTML="Instructions:<br/>",S=u(),L=a("p"),L.innerHTML="1. Arrange the dominoes in a single file vertical line<br/>\n    2. Click on the &quot;Browse...&quot; button to and take a photo of the dominoes from directly\n    above<br/>\n    3. Tap on the top left and top right corner of the line of dominoes to crop the\n    image (you don&#39;t have to be too precise)<br/>\n    4. Click the &quot;Analyze&quot; button",d(i,"type","file"),d(i,"accept","image/*"),d(b,"class","container"),h(I,"text-align","left"),h(L,"text-align","left"),d(n,"class","svelte-1e9puaw")},m(t,o){!function(t,e,n){t.insertBefore(e,n||null)}(t,n,o),l(n,r),l(r,i),e[9](i),l(n,m),l(n,b),l(b,_),e[10](_),l(n,p),l(n,w),l(w,y),l(w,$),l(w,x),l(x,v),l(x,k),l(x,A),l(x,R),l(x,C),l(n,E),l(n,I),l(n,S),l(n,L),M||(W=[f(i,"change",e[8]),f(_,"click",e[4]),f(y,"click",e[5])],M=!0)},p(t,[e]){2&e&&g(k,t[1]),4&e&&g(C,t[2])},i:t,o:t,d(t){t&&c(n),e[9](null),e[10](null),M=!1,o(W)}}}function M(t,e,n){let o,r,{count_dominoes:i}=e,l=null,c=0,a="Please upload photo",s=[],u=null,f=0,d=0,g=null;function h(t){let e;e=null!=t?t:o,console.log("redrawing:"),console.log(e),console.log("redrawing"),console.log(`image: ${e}`);var i=r.getContext("2d");i.clearRect(0,0,r.width,r.height);let l=Math.min(1.5*window.innerHeight,e.height);var c=Math.min(1.5*window.innerWidth,e.width)/e.width,a=l/e.height,s=Math.min(c,a);n(3,r.width=e.width*s,r),n(3,r.height=e.height*s,r),i.drawImage(e,0,0,e.width,e.height,0,0,e.width*s,e.height*s)}const m=t=>{var e=r.getContext("2d"),n=new FileReader;n.onload=function(t){var n=new Image;n.onload=function(){o=n,console.log(r),console.log(`${n.naturalHeight}, ${n.naturalWidth}`),console.log("Image set. Ready to analyze.");var t=e.getImageData(0,0,n.width,n.height);u=t.data,d=n.width,f=n.height,h(n)},n.src=t.target.result,h(n)},n.readAsDataURL(t.target.files[0])};return t.$$set=t=>{"count_dominoes"in t&&n(7,i=t.count_dominoes)},[l,c,a,r,function(t){console.log(r.getBoundingClientRect());let e=r.getBoundingClientRect();var n=r.getContext("2d");n.clearRect(0,0,r.width,r.height),h();let o,i,l=t.clientX-e.left,c=t.clientY-e.top;s.push({x:l,y:c}),s.length>2&&s.shift(),s.forEach((t=>{console.log(t.x),console.log(t.y),n.fillStyle="#3aeb34",n.beginPath(),n.arc(t.x,t.y,5,0,2*Math.PI),n.fill()})),2==s.length&&(s[0].x<s[1].x?(o=s[0],i=s[1]):(o=s[1],i=s[0]),n.strokeStyle="green",n.lineWidth=5,n.shadowColor="#d53",g={x:o.x,y:o.y,x_len:i.x-o.x,y_len:i.y-o.y},n.strokeRect(g.x,g.y,g.x_len,g.y_len)),console.log("domino image section (JS)"),console.log(g),console.log(`${l}, ${c}`)},function(t){let e;if(console.log("onSubmitPicture"),n(2,a="waiting..."),null!=u){if(null!=g){var o=r.getContext("2d").getImageData(g.x,g.y,g.x_len,g.y_len).data;console.log("domino image section (JS)"),console.log(g),e=i(o,g.x_len,g.y_len,!0)}else e=i(u,d,f,!1);console.log("Results of count:"),n(1,c=e.value),console.log(e),n(2,a=e.string_rep),console.log("after return")}else alert("No picture uploaded yet.")},m,i,t=>m(t),function(t){p[t?"unshift":"push"]((()=>{l=t,n(0,l)}))},function(t){p[t?"unshift":"push"]((()=>{r=t,n(3,r)}))}]}class W extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),S(this,t,M,L,i,{count_dominoes:7})}}let T,P=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});P.decode();let U=null;function j(){return null!==U&&U.buffer===T.memory.buffer||(U=new Uint8Array(T.memory.buffer)),U}function q(t,e){return P.decode(j().subarray(t,t+e))}const O=new Array(32).fill(void 0);O.push(void 0,null,!0,!1);let B=O.length;function N(t){B===O.length&&O.push(O.length+1);const e=B;return B=O[e],O[e]=t,e}function D(t){return O[t]}function H(t){const e=D(t);return function(t){t<36||(O[t]=B,B=t)}(t),e}let z=0;let F=new TextEncoder("utf-8");const J="function"==typeof F.encodeInto?function(t,e){return F.encodeInto(t,e)}:function(t,e){const n=F.encode(t);return e.set(n),{read:t.length,written:n.length}};let Y=null;function X(){return null!==Y&&Y.buffer===T.memory.buffer||(Y=new Int32Array(T.memory.buffer)),Y}async function Z(t){void 0===t&&(t=new URL("index_bg.wasm",document.currentScript&&document.currentScript.src||new URL("bundle.js",document.baseURI).href));const e={wbg:{}};e.wbg.__wbindgen_string_new=function(t,e){return N(q(t,e))},e.wbg.__wbindgen_object_drop_ref=function(t){H(t)},e.wbg.__wbindgen_json_parse=function(t,e){return N(JSON.parse(q(t,e)))},e.wbg.__wbg_new_59cb74e423758ede=function(){return N(new Error)},e.wbg.__wbg_stack_558ba5917b466edd=function(t,e){var n=function(t,e,n){if(void 0===n){const n=F.encode(t),o=e(n.length);return j().subarray(o,o+n.length).set(n),z=n.length,o}let o=t.length,r=e(o);const i=j();let l=0;for(;l<o;l++){const e=t.charCodeAt(l);if(e>127)break;i[r+l]=e}if(l!==o){0!==l&&(t=t.slice(l)),r=n(r,o,o=l+3*t.length);const e=j().subarray(r+l,r+o);l+=J(t,e).written}return z=l,r}(D(e).stack,T.__wbindgen_malloc,T.__wbindgen_realloc),o=z;X()[t/4+1]=o,X()[t/4+0]=n},e.wbg.__wbg_error_4bb6c2a97407129a=function(t,e){try{console.error(q(t,e))}finally{T.__wbindgen_free(t,e)}},e.wbg.__wbg_log_386a8115a84a780d=function(t){console.log(D(t))},e.wbg.__wbindgen_throw=function(t,e){throw new Error(q(t,e))},("string"==typeof t||"function"==typeof Request&&t instanceof Request||"function"==typeof URL&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:o}=await async function(t,e){if("function"==typeof Response&&t instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(t,e)}catch(e){if("application/wasm"==t.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}(await t,e);return T=n.exports,Z.__wbindgen_wasm_module=o,T}var G=Object.freeze({__proto__:null,count_dominoes_from_base64:function(t,e,n,o){var r=function(t,e){const n=e(1*t.length);return j().set(t,n/1),z=t.length,n}(t,T.__wbindgen_malloc),i=z;return H(T.count_dominoes_from_base64(r,i,e,n,o))},default:Z});(async()=>{const t=await(async(t={})=>{let{importHook:e,serverPath:n}=t,o="test/build/assets/domino-counter-227c161a.wasm";return null!=n&&(o=n+/[^\/\\]*$/.exec(o)[0]),null!=e&&(o=e(o)),await Z(o),G})();new W({target:document.body,props:{count_dominoes:t.count_dominoes_from_base64}})})()}();
//# sourceMappingURL=bundle.js.map
