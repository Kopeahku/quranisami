"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2026],{1014:function(e,t,n){n.d(t,{d:function(){return f},f:function(){return c}});var r=n(2265),u=n(2381),o=n(8318),i=n(9790),l=n(6601),a=n(641);let s=(0,r.createContext)(null);function c(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)(()=>function(e){let n=(0,a.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),u=(0,r.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return r.createElement(s.Provider,{value:u},e.children)},[t])]}let f=Object.assign((0,o.yV)(function(e,t){let n=(0,u.M)(),{id:a=`headlessui-description-${n}`,...c}=e,f=function e(){let t=(0,r.useContext)(s);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),d=(0,l.T)(t);(0,i.e)(()=>f.register(a),[a,f.register]);let m={ref:d,...f.props,id:a};return(0,o.sY)({ourProps:m,theirProps:c,slot:f.slot||{},defaultTag:"p",name:f.name||"Description"})}),{})},9010:function(e,t,n){n.d(t,{R:function(){return u}});var r,u=((r=u||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},3832:function(e,t,n){n.d(t,{h:function(){return b},k:function(){return E}});var r=n(2265),u=n(4887),o=n(8318),i=n(9790),l=n(9166),a=n(2144),s=n(6601),c=n(5966),f=n(7130),d=n(1879),m=n(641);let p=r.Fragment,v=r.Fragment,h=(0,r.createContext)(null),g=(0,r.createContext)(null);function E(){let e=(0,r.useContext)(g),t=(0,r.useRef)([]),n=(0,m.z)(n=>(t.current.push(n),e&&e.register(n),()=>u(n))),u=(0,m.z)(n=>{let r=t.current.indexOf(n);-1!==r&&t.current.splice(r,1),e&&e.unregister(n)}),o=(0,r.useMemo)(()=>({register:n,unregister:u,portals:t}),[n,u,t]);return[t,(0,r.useMemo)(()=>function({children:e}){return r.createElement(g.Provider,{value:o},e)},[o])]}let b=Object.assign((0,o.yV)(function(e,t){let n=(0,r.useRef)(null),m=(0,s.T)((0,s.h)(e=>{n.current=e}),t),v=(0,f.i)(n),E=function(e){let t=(0,l.n)(),n=(0,r.useContext)(h),u=(0,f.i)(e),[o,i]=(0,r.useState)(()=>{if(!t&&null!==n||d.O.isServer)return null;let e=null==u?void 0:u.getElementById("headlessui-portal-root");if(e)return e;if(null===u)return null;let r=u.createElement("div");return r.setAttribute("id","headlessui-portal-root"),u.body.appendChild(r)});return(0,r.useEffect)(()=>{null!==o&&(null!=u&&u.body.contains(o)||null==u||u.body.appendChild(o))},[o,u]),(0,r.useEffect)(()=>{t||null!==n&&i(n.current)},[n,i,t]),o}(n),[b]=(0,r.useState)(()=>{var e;return d.O.isServer?null:null!=(e=null==v?void 0:v.createElement("div"))?e:null}),y=(0,r.useContext)(g),w=(0,a.H)();return(0,i.e)(()=>{!E||!b||E.contains(b)||(b.setAttribute("data-headlessui-portal",""),E.appendChild(b))},[E,b]),(0,i.e)(()=>{if(b&&y)return y.register(b)},[y,b]),(0,c.L)(()=>{var e;E&&b&&(b instanceof Node&&E.contains(b)&&E.removeChild(b),E.childNodes.length<=0&&(null==(e=E.parentElement)||e.removeChild(E)))}),w&&E&&b?(0,u.createPortal)((0,o.sY)({ourProps:{ref:m},theirProps:e,defaultTag:p,name:"Portal"}),b):null}),{Group:(0,o.yV)(function(e,t){let{target:n,...u}=e,i={ref:(0,s.T)(t)};return r.createElement(h.Provider,{value:n},(0,o.sY)({ourProps:i,theirProps:u,defaultTag:v,name:"Popover.Group"}))})})},4169:function(e,t,n){n.d(t,{r:function(){return w}});var r=n(2265),u=n(8318),o=n(2381),i=n(9010),l=n(4152),a=n(9790),s=n(6601),c=n(641);let f=(0,r.createContext)(null),d=Object.assign((0,u.yV)(function(e,t){let n=(0,o.M)(),{id:i=`headlessui-label-${n}`,passive:l=!1,...c}=e,d=function e(){let t=(0,r.useContext)(f);if(null===t){let t=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),m=(0,s.T)(t);(0,a.e)(()=>d.register(i),[i,d.register]);let p={ref:m,...d.props,id:i};return l&&("onClick"in p&&(delete p.htmlFor,delete p.onClick),"onClick"in c&&delete c.onClick),(0,u.sY)({ourProps:p,theirProps:c,slot:d.slot||{},defaultTag:"label",name:d.name||"Label"})}),{});var m=n(1014),p=n(1454),v=n(7700),h=n(4797),g=n(3891),E=n(44);let b=(0,r.createContext)(null);b.displayName="GroupContext";let y=r.Fragment,w=Object.assign((0,u.yV)(function(e,t){let n=(0,o.M)(),{id:a=`headlessui-switch-${n}`,checked:f,defaultChecked:d=!1,onChange:m,name:y,value:w,form:T,...S}=e,O=(0,r.useContext)(b),C=(0,r.useRef)(null),N=(0,s.T)(C,t,null===O?null:O.setSwitch),[P,F]=(0,g.q)(f,m,d),L=(0,c.z)(()=>null==F?void 0:F(!P)),x=(0,c.z)(e=>{if((0,l.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),L()}),A=(0,c.z)(e=>{e.key===i.R.Space?(e.preventDefault(),L()):e.key===i.R.Enter&&(0,h.g)(e.currentTarget)}),k=(0,c.z)(e=>e.preventDefault()),M=(0,r.useMemo)(()=>({checked:P}),[P]),R={id:a,ref:N,role:"switch",type:(0,p.f)(e,C),tabIndex:0,"aria-checked":P,"aria-labelledby":null==O?void 0:O.labelledby,"aria-describedby":null==O?void 0:O.describedby,onClick:x,onKeyUp:A,onKeyPress:k},j=(0,E.G)();return(0,r.useEffect)(()=>{var e;let t=null==(e=C.current)?void 0:e.closest("form");t&&void 0!==d&&j.addEventListener(t,"reset",()=>{F(d)})},[C,F]),r.createElement(r.Fragment,null,null!=y&&P&&r.createElement(v._,{features:v.A.Hidden,...(0,u.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,form:T,checked:P,name:y,value:w})}),(0,u.sY)({ourProps:R,theirProps:S,slot:M,defaultTag:"button",name:"Switch"}))}),{Group:function(e){var t;let[n,o]=(0,r.useState)(null),[i,l]=function(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)(()=>function(e){let n=(0,c.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),u=(0,r.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return r.createElement(f.Provider,{value:u},e.children)},[t])]}(),[a,s]=(0,m.f)(),d=(0,r.useMemo)(()=>({switch:n,setSwitch:o,labelledby:i,describedby:a}),[n,o,i,a]);return r.createElement(s,{name:"Switch.Description"},r.createElement(l,{name:"Switch.Label",props:{htmlFor:null==(t=d.switch)?void 0:t.id,onClick(e){n&&("LABEL"===e.currentTarget.tagName&&e.preventDefault(),n.click(),n.focus({preventScroll:!0}))}}},r.createElement(b.Provider,{value:d},(0,u.sY)({ourProps:{},theirProps:e,defaultTag:y,name:"Switch.Group"}))))},Label:d,Description:m.d})},129:function(e,t,n){n.d(t,{u:function(){return k}});var r,u=n(2265),o=n(8318),i=n(8358),l=n(2640),a=n(2219),s=n(9790),c=n(5235),f=n(2144),d=n(6601),m=n(5205);function p(e,...t){e&&t.length>0&&e.classList.add(...t)}function v(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h=n(44),g=n(641),E=n(2466);function b(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let y=(0,u.createContext)(null);y.displayName="TransitionContext";var w=((r=w||{}).Visible="visible",r.Hidden="hidden",r);let T=(0,u.createContext)(null);function S(e){return"children"in e?S(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function O(e,t){let n=(0,c.E)(e),r=(0,u.useRef)([]),i=(0,a.t)(),s=(0,h.G)(),f=(0,g.z)((e,t=o.l4.Hidden)=>{let u=r.current.findIndex(({el:t})=>t===e);-1!==u&&((0,l.E)(t,{[o.l4.Unmount](){r.current.splice(u,1)},[o.l4.Hidden](){r.current[u].state="hidden"}}),s.microTask(()=>{var e;!S(r)&&i.current&&(null==(e=n.current)||e.call(n))}))}),d=(0,g.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>f(e,o.l4.Unmount)}),m=(0,u.useRef)([]),p=(0,u.useRef)(Promise.resolve()),v=(0,u.useRef)({enter:[],leave:[],idle:[]}),E=(0,g.z)((e,n,r)=>{m.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{m.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(v.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?p.current=p.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,g.z)((e,t,n)=>{Promise.all(v.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=m.current.shift())||e()}).then(()=>n(t))});return(0,u.useMemo)(()=>({children:r,register:d,unregister:f,onStart:E,onStop:b,wait:p,chains:v}),[d,f,r,E,b,v,p])}function C(){}T.displayName="NestingContext";let N=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function P(e){var t;let n={};for(let r of N)n[r]=null!=(t=e[r])?t:C;return n}let F=o.AN.RenderStrategy,L=(0,o.yV)(function(e,t){let{show:n,appear:r=!1,unmount:l=!0,...a}=e,c=(0,u.useRef)(null),m=(0,d.T)(c,t);(0,f.H)();let p=(0,i.oJ)();if(void 0===n&&null!==p&&(n=(p&i.ZM.Open)===i.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[v,h]=(0,u.useState)(n?"visible":"hidden"),E=O(()=>{h("hidden")}),[b,w]=(0,u.useState)(!0),C=(0,u.useRef)([n]);(0,s.e)(()=>{!1!==b&&C.current[C.current.length-1]!==n&&(C.current.push(n),w(!1))},[C,n]);let N=(0,u.useMemo)(()=>({show:n,appear:r,initial:b}),[n,r,b]);(0,u.useEffect)(()=>{if(n)h("visible");else if(S(E)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[n,E]);let P={unmount:l},L=(0,g.z)(()=>{var t;b&&w(!1),null==(t=e.beforeEnter)||t.call(e)}),A=(0,g.z)(()=>{var t;b&&w(!1),null==(t=e.beforeLeave)||t.call(e)});return u.createElement(T.Provider,{value:E},u.createElement(y.Provider,{value:N},(0,o.sY)({ourProps:{...P,as:u.Fragment,children:u.createElement(x,{ref:m,...P,...a,beforeEnter:L,beforeLeave:A})},theirProps:{},defaultTag:u.Fragment,features:F,visible:"visible"===v,name:"Transition"})))}),x=(0,o.yV)(function(e,t){var n,r,w;let C;let{beforeEnter:N,afterEnter:L,beforeLeave:x,afterLeave:A,enter:k,enterFrom:M,enterTo:R,entered:j,leave:H,leaveFrom:D,leaveTo:I,...z}=e,V=(0,u.useRef)(null),U=(0,d.T)(V,t),Y=null==(n=z.unmount)||n?o.l4.Unmount:o.l4.Hidden,{show:Z,appear:_,initial:B}=function(){let e=(0,u.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[G,q]=(0,u.useState)(Z?"visible":"hidden"),$=function(){let e=(0,u.useContext)(T);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:K,unregister:W}=$;(0,u.useEffect)(()=>K(V),[K,V]),(0,u.useEffect)(()=>{if(Y===o.l4.Hidden&&V.current){if(Z&&"visible"!==G){q("visible");return}return(0,l.E)(G,{hidden:()=>W(V),visible:()=>K(V)})}},[G,V,K,W,Z,Y]);let J=(0,c.E)({base:b(z.className),enter:b(k),enterFrom:b(M),enterTo:b(R),entered:b(j),leave:b(H),leaveFrom:b(D),leaveTo:b(I)}),X=(w={beforeEnter:N,afterEnter:L,beforeLeave:x,afterLeave:A},C=(0,u.useRef)(P(w)),(0,u.useEffect)(()=>{C.current=P(w)},[w]),C),Q=(0,f.H)();(0,u.useEffect)(()=>{if(Q&&"visible"===G&&null===V.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[V,G,Q]);let ee=_&&Z&&B,et=Q&&(!B||_)?Z?"enter":"leave":"idle",en=function(e=0){let[t,n]=(0,u.useState)(e),r=(0,a.t)(),o=(0,u.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),i=(0,u.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:o,hasFlag:i,removeFlag:(0,u.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,u.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),er=(0,g.z)(e=>(0,l.E)(e,{enter:()=>{en.addFlag(i.ZM.Opening),X.current.beforeEnter()},leave:()=>{en.addFlag(i.ZM.Closing),X.current.beforeLeave()},idle:()=>{}})),eu=(0,g.z)(e=>(0,l.E)(e,{enter:()=>{en.removeFlag(i.ZM.Opening),X.current.afterEnter()},leave:()=>{en.removeFlag(i.ZM.Closing),X.current.afterLeave()},idle:()=>{}})),eo=O(()=>{q("hidden"),W(V)},$);!function({immediate:e,container:t,direction:n,classes:r,onStart:u,onStop:o}){let i=(0,a.t)(),f=(0,h.G)(),d=(0,c.E)(n);(0,s.e)(()=>{e&&(d.current="enter")},[e]),(0,s.e)(()=>{let e=(0,m.k)();f.add(e.dispose);let n=t.current;if(n&&"idle"!==d.current&&i.current){var a,s,c;let t,i,f,h,g,E,b;return e.dispose(),u.current(d.current),e.add((a=r.current,s="enter"===d.current,c=()=>{e.dispose(),o.current(d.current)},i=s?"enter":"leave",f=(0,m.k)(),h=void 0!==c?(t={called:!1},(...e)=>{if(!t.called)return t.called=!0,c(...e)}):()=>{},"enter"===i&&(n.removeAttribute("hidden"),n.style.display=""),g=(0,l.E)(i,{enter:()=>a.enter,leave:()=>a.leave}),E=(0,l.E)(i,{enter:()=>a.enterTo,leave:()=>a.leaveTo}),b=(0,l.E)(i,{enter:()=>a.enterFrom,leave:()=>a.leaveFrom}),v(n,...a.base,...a.enter,...a.enterTo,...a.enterFrom,...a.leave,...a.leaveFrom,...a.leaveTo,...a.entered),p(n,...a.base,...g,...b),f.nextFrame(()=>{v(n,...a.base,...g,...b),p(n,...a.base,...g,...E),function(e,t){let n=(0,m.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:u}=getComputedStyle(e),[o,i]=[r,u].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),l=o+i;if(0!==l){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},l),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(n,()=>(v(n,...a.base,...g),p(n,...a.base,...a.entered),h()))}),f.dispose)),e.dispose}},[n])}({immediate:ee,container:V,classes:J,direction:et,onStart:(0,c.E)(e=>{eo.onStart(V,e,er)}),onStop:(0,c.E)(e=>{eo.onStop(V,e,eu),"leave"!==e||S(eo)||(q("hidden"),W(V))})});let ei=z;return ee?ei={...ei,className:(0,E.A)(z.className,...J.current.enter,...J.current.enterFrom)}:(ei.className=(0,E.A)(z.className,null==(r=V.current)?void 0:r.className),""===ei.className&&delete ei.className),u.createElement(T.Provider,{value:eo},u.createElement(i.up,{value:(0,l.E)(G,{visible:i.ZM.Open,hidden:i.ZM.Closed})|en.flags},(0,o.sY)({ourProps:{ref:U},theirProps:ei,defaultTag:"div",features:F,visible:"visible"===G,name:"Transition.Child"})))}),A=(0,o.yV)(function(e,t){let n=null!==(0,u.useContext)(y),r=null!==(0,i.oJ)();return u.createElement(u.Fragment,null,!n&&r?u.createElement(L,{ref:t,...e}):u.createElement(x,{ref:t,...e}))}),k=Object.assign(L,{Child:A,Root:L})},3891:function(e,t,n){n.d(t,{q:function(){return o}});var r=n(2265),u=n(641);function o(e,t,n){let[o,i]=(0,r.useState)(n),l=void 0!==e,a=(0,r.useRef)(l),s=(0,r.useRef)(!1),c=(0,r.useRef)(!1);return!l||a.current||s.current?l||!a.current||c.current||(c.current=!0,a.current=l,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(s.current=!0,a.current=l,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[l?e:o,(0,u.z)(e=>(l||i(e),null==t?void 0:t(e)))]}},44:function(e,t,n){n.d(t,{G:function(){return o}});var r=n(2265),u=n(5205);function o(){let[e]=(0,r.useState)(u.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},5740:function(e,t,n){n.d(t,{O:function(){return o}});var r=n(2265),u=n(5235);function o(e,t,n,o){let i=(0,u.E)(n);(0,r.useEffect)(()=>{function n(e){i.current(e)}return(e=null!=e?e:window).addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)},[e,t,o])}},641:function(e,t,n){n.d(t,{z:function(){return o}});var r=n(2265),u=n(5235);let o=function(e){let t=(0,u.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},2381:function(e,t,n){n.d(t,{M:function(){return a}});var r,u=n(2265),o=n(9790),i=n(2144),l=n(1879);let a=null!=(r=u.useId)?r:function(){let e=(0,i.H)(),[t,n]=u.useState(e?()=>l.O.nextId():null);return(0,o.e)(()=>{null===t&&n(l.O.nextId())},[t]),null!=t?""+t:void 0}},2219:function(e,t,n){n.d(t,{t:function(){return o}});var r=n(2265),u=n(9790);function o(){let e=(0,r.useRef)(!1);return(0,u.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},9790:function(e,t,n){n.d(t,{e:function(){return o}});var r=n(2265),u=n(1879);let o=(e,t)=>{u.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},5235:function(e,t,n){n.d(t,{E:function(){return o}});var r=n(2265),u=n(9790);function o(e){let t=(0,r.useRef)(e);return(0,u.e)(()=>{t.current=e},[e]),t}},5966:function(e,t,n){n.d(t,{L:function(){return i}});var r=n(2265),u=n(1210),o=n(641);function i(e){let t=(0,o.z)(e),n=(0,r.useRef)(!1);(0,r.useEffect)(()=>(n.current=!1,()=>{n.current=!0,(0,u.Y)(()=>{n.current&&t()})}),[t])}},1679:function(e,t,n){n.d(t,{O:function(){return a}});var r=n(2265),u=n(8803),o=n(5235);function i(e,t,n){let u=(0,o.E)(t);(0,r.useEffect)(()=>{function t(e){u.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}var l=n(1372);function a(e,t,n=!0){let o=(0,r.useRef)(!1);function a(n,r){if(!o.current||n.defaultPrevented)return;let i=r(n);if(null!==i&&i.getRootNode().contains(i)&&i.isConnected){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(i)||n.composed&&n.composedPath().includes(e))return}return(0,u.sP)(i,u.tJ.Loose)||-1===i.tabIndex||n.preventDefault(),t(n,i)}}(0,r.useEffect)(()=>{requestAnimationFrame(()=>{o.current=n})},[n]);let s=(0,r.useRef)(null);i("pointerdown",e=>{var t,n;o.current&&(s.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),i("mousedown",e=>{var t,n;o.current&&(s.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),i("click",e=>{s.current&&(a(e,()=>s.current),s.current=null)},!0),i("touchend",e=>a(e,()=>e.target instanceof HTMLElement?e.target:null),!0),(0,l.s)("blur",e=>a(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}},7130:function(e,t,n){n.d(t,{i:function(){return o}});var r=n(2265),u=n(4819);function o(...e){return(0,r.useMemo)(()=>(0,u.r)(...e),[...e])}},1454:function(e,t,n){n.d(t,{f:function(){return i}});var r=n(2265),u=n(9790);function o(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function i(e,t){let[n,i]=(0,r.useState)(()=>o(e));return(0,u.e)(()=>{i(o(e))},[e.type,e.as]),(0,u.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&i("button")},[n,t]),n}},1820:function(e,t,n){n.d(t,{H:function(){return a},v:function(){return l}});var r=n(2265),u=n(7700),o=n(641),i=n(7130);function l({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var l;let a=(0,r.useRef)(null!=(l=null==n?void 0:n.current)?l:null),s=(0,i.i)(a),c=(0,o.z)(()=>{var n;let r=[];for(let t of e)null!==t&&(t instanceof HTMLElement?r.push(t):"current"in t&&t.current instanceof HTMLElement&&r.push(t.current));if(null!=t&&t.current)for(let e of t.current)r.push(e);for(let e of null!=(n=null==s?void 0:s.querySelectorAll("html > *, body > *"))?n:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(a.current)||r.some(t=>e.contains(t))||r.push(e));return r});return{resolveContainers:c,contains:(0,o.z)(e=>c().some(t=>t.contains(e))),mainTreeNodeRef:a,MainTreeNode:(0,r.useMemo)(()=>function(){return null!=n?null:r.createElement(u._,{features:u.A.Hidden,ref:a})},[a,n])}}function a(){let e=(0,r.useRef)(null);return{mainTreeNodeRef:e,MainTreeNode:(0,r.useMemo)(()=>function(){return r.createElement(u._,{features:u.A.Hidden,ref:e})},[e])}}},2144:function(e,t,n){n.d(t,{H:function(){return i}});var r,u=n(2265),o=n(1879);function i(){let e;let t=(e="undefined"==typeof document,(0,(r||(r=n.t(u,2))).useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[i,l]=u.useState(o.O.isHandoffComplete);return i&&!1===o.O.isHandoffComplete&&l(!1),u.useEffect(()=>{!0!==i&&l(!0)},[i]),u.useEffect(()=>o.O.handoff(),[]),!t&&i}},6601:function(e,t,n){n.d(t,{T:function(){return l},h:function(){return i}});var r=n(2265),u=n(641);let o=Symbol();function i(e,t=!0){return Object.assign(e,{[o]:t})}function l(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,u.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[o]))?void 0:n}},3839:function(e,t,n){n.d(t,{N:function(){return i},l:function(){return l}});var r,u=n(2265),o=n(1372),i=((r=i||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function l(){let e=(0,u.useRef)(0);return(0,o.s)("keydown",t=>{"Tab"===t.key&&(e.current=t.shiftKey?1:0)},!0),e}},1372:function(e,t,n){n.d(t,{s:function(){return o}});var r=n(2265),u=n(5235);function o(e,t,n){let o=(0,u.E)(t);(0,r.useEffect)(()=>{function t(e){o.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}},7700:function(e,t,n){n.d(t,{A:function(){return o},_:function(){return i}});var r,u=n(8318),o=((r=o||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let i=(0,u.yV)(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,u.sY)({ourProps:o,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},8358:function(e,t,n){n.d(t,{ZM:function(){return i},oJ:function(){return l},up:function(){return a}});var r,u=n(2265);let o=(0,u.createContext)(null);o.displayName="OpenClosedContext";var i=((r=i||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function l(){return(0,u.useContext)(o)}function a({value:e,children:t}){return u.createElement(o.Provider,{value:e},t)}},9166:function(e,t,n){n.d(t,{O:function(){return i},n:function(){return o}});var r=n(2265);let u=(0,r.createContext)(!1);function o(){return(0,r.useContext)(u)}function i(e){return r.createElement(u.Provider,{value:e.force},e.children)}},4152:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},2466:function(e,t,n){n.d(t,{A:function(){return r}});function r(...e){return Array.from(new Set(e.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}},5205:function(e,t,n){n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,u)=>(e.addEventListener(t,r,u),n.add(()=>e.removeEventListener(t,r,u))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,r.Y)(()=>{t.current&&e[0]()}),n.add(()=>{t.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}});var r=n(1210)},1879:function(e,t,n){n.d(t,{O:function(){return l}});var r=Object.defineProperty,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t,n)=>(u(e,"symbol"!=typeof t?t+"":t,n),n);class i{constructor(){o(this,"current",this.detect()),o(this,"handoffState","pending"),o(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}let l=new i},8803:function(e,t,n){n.d(t,{C5:function(){return y},EO:function(){return T},GO:function(){return v},TO:function(){return d},fE:function(){return m},jA:function(){return S},sP:function(){return g},tJ:function(){return h},wI:function(){return E},z2:function(){return w}});var r,u,o,i,l,a=n(5205),s=n(2640),c=n(4819);let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var d=((r=d||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),m=((u=m||{})[u.Error=0]="Error",u[u.Overflow=1]="Overflow",u[u.Success=2]="Success",u[u.Underflow=3]="Underflow",u),p=((o=p||{})[o.Previous=-1]="Previous",o[o.Next=1]="Next",o);function v(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(f)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var h=((i=h||{})[i.Strict=0]="Strict",i[i.Loose=1]="Loose",i);function g(e,t=0){var n;return e!==(null==(n=(0,c.r)(e))?void 0:n.body)&&(0,s.E)(t,{0:()=>e.matches(f),1(){let t=e;for(;null!==t;){if(t.matches(f))return!0;t=t.parentElement}return!1}})}function E(e){let t=(0,c.r)(e);(0,a.k)().nextFrame(()=>{t&&!g(t.activeElement,0)&&y(e)})}var b=((l=b||{})[l.Keyboard=0]="Keyboard",l[l.Mouse=1]="Mouse",l);function y(e){null==e||e.focus({preventScroll:!0})}function w(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),u=t(n);if(null===r||null===u)return 0;let o=r.compareDocumentPosition(u);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function T(e,t){return S(v(),t,{relativeTo:e})}function S(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:u=[]}={}){var o,i,l;let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?w(e):e:v(e);u.length>0&&s.length>1&&(s=s.filter(e=>!u.includes(e))),r=null!=r?r:a.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=32&t?{preventScroll:!0}:{},m=0,p=s.length,h;do{if(m>=p||m+p<=0)return 0;let e=f+m;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}null==(h=s[e])||h.focus(d),m+=c}while(h!==a.activeElement);return 6&t&&null!=(l=null==(i=null==(o=h)?void 0:o.matches)?void 0:i.call(o,"textarea,input"))&&l&&h.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},4797:function(e,t,n){function r(e,t){return e?e+"["+t+"]":t}function u(e){var t,n;let r=null!=(t=null==e?void 0:e.form)?t:e.closest("form");if(r){for(let t of r.elements)if(t!==e&&("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type)){t.click();return}null==(n=r.requestSubmit)||n.call(r)}}n.d(t,{g:function(){return u},t:function(){return function e(t={},n=null,u=[]){for(let[o,i]of Object.entries(t))!function t(n,u,o){if(Array.isArray(o))for(let[e,i]of o.entries())t(n,r(u,e.toString()),i);else o instanceof Date?n.push([u,o.toISOString()]):"boolean"==typeof o?n.push([u,o?"1":"0"]):"string"==typeof o?n.push([u,o]):"number"==typeof o?n.push([u,`${o}`]):null==o?n.push([u,""]):e(o,u,n)}(u,r(n,o),i);return u}}})},2640:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let u=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}},1210:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},4819:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(1879);function u(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},8318:function(e,t,n){n.d(t,{AN:function(){return a},l4:function(){return s},oA:function(){return p},sY:function(){return c},yV:function(){return m}});var r,u,o=n(2265),i=n(2466),l=n(2640),a=((r=a||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((u=s||{})[u.Unmount=0]="Unmount",u[u.Hidden=1]="Hidden",u);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:u,visible:o=!0,name:i}){let a=d(t,e);if(o)return f(a,n,r,i);let s=null!=u?u:0;if(2&s){let{static:e=!1,...t}=a;if(e)return f(t,n,r,i)}if(1&s){let{unmount:e=!0,...t}=a;return(0,l.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},n,r,i)})}return f(a,n,r,i)}function f(e,t={},n,r){let{as:u=n,children:l,refName:a="ref",...s}=v(e,["unmount","static"]),c=void 0!==e.ref?{[a]:e.ref}:{},f="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let m={};if(t){let e=!1,n=[];for(let[r,u]of Object.entries(t))"boolean"==typeof u&&(e=!0),!0===u&&n.push(r);e&&(m["data-headlessui-state"]=n.join(" "))}if(u===o.Fragment&&Object.keys(p(s)).length>0){if(!(0,o.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=f.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,i.A)(null==e?void 0:e.className(...t),s.className):(0,i.A)(null==e?void 0:e.className,s.className);return(0,o.cloneElement)(f,Object.assign({},d(f.props,p(v(s,["ref"]))),m,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(f.ref,c.ref),t?{className:t}:{}))}return(0,o.createElement)(u,Object.assign({},v(s,["ref"]),u!==o.Fragment&&c,u!==o.Fragment&&m),f)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let u of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;u(t,...r)}}});return t}function m(e){var t;return Object.assign((0,o.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function p(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function v(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}},195:function(e,t,n){var r=n(2265);let u=r.forwardRef(function({title:e,titleId:t,...n},u){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:u,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"}))});t.Z=u},8096:function(e,t,n){var r=n(2265);let u=r.forwardRef(function({title:e,titleId:t,...n},u){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:u,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))});t.Z=u},748:function(e,t,n){var r=n(2265);let u=r.forwardRef(function({title:e,titleId:t,...n},u){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:u,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z",clipRule:"evenodd"}))});t.Z=u},2579:function(e,t,n){var r=n(2265);let u=r.forwardRef(function({title:e,titleId:t,...n},u){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:u,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",clipRule:"evenodd"}))});t.Z=u}}]);
