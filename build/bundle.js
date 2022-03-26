var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function c(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function h(t,e,n,a){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n,a)}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let p;function v(t){p=t}function x(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_destroy.push(t)}const b=[],g=[],w=[],$=[],y=Promise.resolve();let k=!1;function E(t){w.push(t)}const M=new Set;let _=0;function F(){const t=p;do{for(;_<b.length;){const t=b[_];_++,v(t),A(t.$$)}for(v(null),b.length=0,_=0;g.length;)g.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];M.has(e)||(M.add(e),e())}w.length=0}while(b.length);for(;$.length;)$.pop()();k=!1,M.clear(),v(t)}function A(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const L=new Set;function C(t,e){-1===t.$$.dirty[0]&&(b.push(t),k||(k=!0,y.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(i,s,r,l,u,d,h,f=[-1]){const m=p;v(i);const x=i.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(m?m.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||m.$$.root};h&&h(x.root);let b=!1;if(x.ctx=r?r(i,s.props||{},((t,e,...n)=>{const a=n.length?n[0]:e;return x.ctx&&u(x.ctx[t],x.ctx[t]=a)&&(!x.skip_bound&&x.bound[t]&&x.bound[t](a),b&&C(i,t)),e})):[],x.update(),b=!0,a(x.before_update),x.fragment=!!l&&l(x.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);x.fragment&&x.fragment.l(t),t.forEach(c)}else x.fragment&&x.fragment.c();s.intro&&((g=i.$$.fragment)&&g.i&&(L.delete(g),g.i(w))),function(t,n,i,s){const{fragment:r,on_mount:c,on_destroy:l,after_update:u}=t.$$;r&&r.m(n,i),s||E((()=>{const n=c.map(e).filter(o);l?l.push(...n):a(n),t.$$.on_mount=[]})),u.forEach(E)}(i,s.target,s.anchor,s.customElement),F()}var g,w;v(m)}async function z(t,e){const n=await fetch(t),a=await n.arrayBuffer();return await e.decodeAudioData(a)}function S(t,e){const n=e.createBufferSource();n.buffer=t,n.connect(e.destination),n.start()}var q;!function(t){t[t.Orientation=0]="Orientation",t[t.Motion=1]="Motion"}(q||(q={}));class D{constructor(t,e,n){this.alpha=t,this.beta=e,this.gamma=n}get maxAbs(){return Math.max(Math.abs(this.alpha),Math.abs(this.beta),Math.abs(this.gamma))}sub(t,e,n){const a=Math.abs(t-e);return a>n?2*n-a:a}delta(t){return new D(this.sub(this.alpha,t.alpha,180),this.sub(this.beta,t.beta,180),this.sub(this.gamma,t.gamma,90))}toString(){return`a: ${this.alpha.toFixed(2)}; b:${this.beta.toFixed(2)}; g: ${this.gamma.toFixed(2)}`}}class T{constructor(t,e=20,n=45){this.accelerationLimit=e,this.orientationChange=n,this.startOrientation=null,this.onOrientationChange=t=>{if(null==this.startOrientation)this.startOrientation=new D(t.alpha,t.beta,t.gamma);else{const e=new D(t.alpha,t.beta,t.gamma);this.startOrientation.delta(e).maxAbs>=45&&(this.cb(q.Orientation),this.finish())}},this.onMotion=t=>{if(!t.acceleration||null==t.acceleration.x||null==t.acceleration.y||null==!t.acceleration.z)return console.debug("Motion event does not have valid data, stop using it",t),void window.removeEventListener("devicemotion",this.onMotion);Math.sqrt(t.acceleration.x*t.acceleration.x+t.acceleration.y*t.acceleration.y+t.acceleration.z*t.acceleration.z)>this.accelerationLimit&&(this.cb(q.Motion),this.finish())},this.onAcceleration=()=>{Math.sqrt(this.ametr.x*this.ametr.x+this.ametr.y*this.ametr.y+this.ametr.z*this.ametr.z)>this.accelerationLimit&&(this.cb(q.Motion),this.finish())},this.cb=t,this.ametr=new LinearAccelerationSensor,this.ametr.addEventListener("reading",this.onAcceleration),this.ametr.start()}finish(){window.removeEventListener("deviceorientation",this.onOrientationChange),window.removeEventListener("devicemotion",this.onMotion),this.ametr&&(this.ametr.stop(),this.ametr=null)}}function j(t){let e,n,a,o,i,h,p,v,x,b,g,w,$,y,k,E,M,_,F,A,L,C,O,z,S=t[2].alpha.toFixed(2)+"",q=t[2].beta.toFixed(2)+"",D=t[2].gamma.toFixed(2)+"",T=t[3].toFixed(2)+"";return{c(){e=l("div"),n=l("span"),n.textContent="Orientation Event:",a=d(),o=l("span"),i=l("div"),h=l("div"),p=l("span"),p.textContent="alpha: ",v=l("span"),x=u(S),b=d(),g=l("div"),w=l("span"),w.textContent="beta: ",$=l("span"),y=u(q),k=d(),E=l("div"),M=l("span"),M.textContent="gamma: ",_=l("span"),F=u(D),A=d(),L=l("div"),C=l("span"),C.textContent="diff: ",O=l("span"),z=u(T),f(n,"class","label svelte-15sk3cf"),f(p,"class","label svelte-15sk3cf"),f(v,"class","value"),f(w,"class","label svelte-15sk3cf"),f($,"class","value"),f(M,"class","label svelte-15sk3cf"),f(_,"class","value"),f(C,"class","label svelte-15sk3cf"),f(O,"class","value"),f(i,"class","ori svelte-15sk3cf"),f(o,"class","complex-value svelte-15sk3cf")},m(t,c){r(t,e,c),s(e,n),s(e,a),s(e,o),s(o,i),s(i,h),s(h,p),s(h,v),s(v,x),s(i,b),s(i,g),s(g,w),s(g,$),s($,y),s(i,k),s(i,E),s(E,M),s(E,_),s(_,F),s(i,A),s(i,L),s(L,C),s(L,O),s(O,z)},p(t,e){4&e&&S!==(S=t[2].alpha.toFixed(2)+"")&&m(x,S),4&e&&q!==(q=t[2].beta.toFixed(2)+"")&&m(y,q),4&e&&D!==(D=t[2].gamma.toFixed(2)+"")&&m(F,D),8&e&&T!==(T=t[3].toFixed(2)+"")&&m(z,T)},d(t){t&&c(e)}}}function B(e){let n,o,i,p,v,x,b,g,w,$,y,k,E,M,_,F=e[8]&&function(t){let e,n,a,o,i,h,p,v,x,b,g,w,$,y,k,E,M=t[0].toFixed(2)+"",_=t[1].toFixed(2)+"";return{c(){e=l("div"),n=l("span"),n.textContent="Motion Event:",a=d(),o=l("span"),i=l("div"),h=l("div"),p=l("span"),p.textContent="actual: ",v=l("span"),x=u(M),b=d(),g=l("div"),w=l("span"),w.textContent="max: ",$=l("span"),y=u(_),k=d(),E=l("span"),f(n,"class","label svelte-15sk3cf"),f(p,"class","label svelte-15sk3cf"),f(v,"class","value"),f(w,"class","label svelte-15sk3cf"),f($,"class","value"),f(i,"class","ori svelte-15sk3cf"),f(o,"class","complex-value svelte-15sk3cf"),f(E,"class","value")},m(t,c){r(t,e,c),s(e,n),s(e,a),s(e,o),s(o,i),s(i,h),s(h,p),s(h,v),s(v,x),s(i,b),s(i,g),s(g,w),s(g,$),s($,y),s(e,k),s(e,E)},p(t,e){1&e&&M!==(M=t[0].toFixed(2)+"")&&m(x,M),2&e&&_!==(_=t[1].toFixed(2)+"")&&m(y,_)},d(t){t&&c(e)}}}(e),A=e[9]&&e[2]&&null!=e[2].alpha&&j(e),L=e[10]&&function(t){let e,n,a,o,i,h,p,v,x,b,g,w,$,y,k=t[4].toFixed(2)+"",E=t[5].toFixed(2)+"";return{c(){e=l("div"),n=l("span"),n.textContent="Accelerometer:",a=d(),o=l("span"),i=l("div"),h=l("div"),p=l("span"),p.textContent="actual: ",v=l("span"),x=u(k),b=d(),g=l("div"),w=l("span"),w.textContent="max: ",$=l("span"),y=u(E),f(n,"class","label svelte-15sk3cf"),f(p,"class","label svelte-15sk3cf"),f(v,"class","value"),f(w,"class","label svelte-15sk3cf"),f($,"class","value"),f(i,"class","ori svelte-15sk3cf"),f(o,"class","complex-value svelte-15sk3cf")},m(t,c){r(t,e,c),s(e,n),s(e,a),s(e,o),s(o,i),s(i,h),s(h,p),s(h,v),s(v,x),s(i,b),s(i,g),s(g,w),s(g,$),s($,y)},p(t,e){16&e&&k!==(k=t[4].toFixed(2)+"")&&m(x,k),32&e&&E!==(E=t[5].toFixed(2)+"")&&m(y,E)},d(t){t&&c(e)}}}(e);return{c(){n=l("header"),n.innerHTML="<h1>Sensors Demo</h1> \n  <p>Detects sensors and shows their readings</p>",o=d(),i=l("main"),p=l("section"),v=l("label"),x=u("Detect motion "),b=l("input"),g=d(),w=l("section"),F&&F.c(),$=d(),A&&A.c(),y=d(),L&&L.c(),k=d(),E=l("footer"),E.textContent=`User Agent: ${e[7]}`,f(b,"type","checkbox"),f(i,"class","container"),f(E,"class","svelte-15sk3cf")},m(t,a){r(t,n,a),r(t,o,a),r(t,i,a),s(i,p),s(p,v),s(v,x),s(v,b),b.checked=e[6],s(i,g),s(i,w),F&&F.m(w,null),s(w,$),A&&A.m(w,null),s(w,y),L&&L.m(w,null),r(t,k,a),r(t,E,a),M||(_=[h(b,"change",e[12]),h(b,"change",e[11])],M=!0)},p(t,[e]){64&e&&(b.checked=t[6]),t[8]&&F.p(t,e),t[9]&&t[2]&&null!=t[2].alpha?A?A.p(t,e):(A=j(t),A.c(),A.m(w,y)):A&&(A.d(1),A=null),t[10]&&L.p(t,e)},i:t,o:t,d(t){t&&c(n),t&&c(o),t&&c(i),F&&F.d(),A&&A.d(),L&&L.d(),t&&c(k),t&&c(E),M=!1,a(_)}}}function N(t,e,n){const a=navigator.userAgent,o="DeviceMotionEvent"in window;let i,s=0,r=0;const c="DeviceOrientationEvent"in window;let l,u,d=0;const h=t=>{i=t.acceleration,n(0,s=Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)),s>r&&n(1,r=s)},f=t=>{n(2,u=new D(t.alpha,t.beta,t.gamma)),null==l&&(l=u),n(3,d=l.delta(u).maxAbs)};window.addEventListener("devicemotion",h),window.addEventListener("deviceorientation",f);const m="LinearAccelerationSensor"in window;let p,v,b,g=0,w=0;if(m){navigator.permissions.query({name:"accelerometer"}).then((t=>{console.log(`Permission for accelerometr ${t.state}`)}));try{const t=new LinearAccelerationSensor({frequency:10,referenceFrame:"device"});t.start(),t.addEventListener("error",(t=>{console.error(`Accelerometer error ${t.error.name}`,t.error)})),t.addEventListener("activate",(t=>{console.log("Accelerometer activated")})),t.addEventListener("reading",(e=>{n(4,g=Math.sqrt(t.x*t.x+t.y*t.y+t.z*t.z)),g>w&&n(5,w=g)}))}catch(t){console.error("Error creating Accelerometer",t)}}x((()=>{window.removeEventListener("devicemotion",h),window.removeEventListener("deviceorientation",f)}));return[s,r,u,d,g,w,p,a,o,c,m,async()=>{if(p){const t=function(){const t=new(0,window.AudioContext);return"suspended"===t.state&&t.resume(),t}(),e=await z("static/will_sleep_soon.mp3",t),a=await z("static/extended.mp3",t);b=window.setTimeout((()=>{S(e,t),v=new T((e=>{S(a,t),console.log(`Motion detected ${e}`),n(6,p=!1)}))}),1e3)}else v&&(v.finish(),v=null,window.clearTimeout(b))},function(){p=this.checked,n(6,p)}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),O(this,t,N,B,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
