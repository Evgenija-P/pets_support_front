"use strict";(self.webpackChunkpets_support=self.webpackChunkpets_support||[]).push([[753],{3753:function(n,e,t){t.r(e),t.d(e,{default:function(){return yn}});var r=t(885),o=t(4270),i=t(2791),a=t(4164);var c=function(){return c=Object.assign||function(n){for(var e,t=1,r=arguments.length;t<r;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},c.apply(this,arguments)};function l(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(t[r[o]]=n[r[o]])}return t}Object.create;Object.create;var u="right-scroll-bar-position",d="width-before-scroll-bar";function s(n,e){return function(n,e){var t=(0,i.useState)((function(){return{value:n,callback:e,facade:{get current(){return t.value},set current(n){var e=t.value;e!==n&&(t.value=n,t.callback(n,e))}}}}))[0];return t.callback=e,t.facade}(e||null,(function(e){return n.forEach((function(n){return function(n,e){return"function"===typeof n?n(e):n&&(n.current=e),n}(n,e)}))}))}function f(n){return n}function p(n,e){void 0===e&&(e=f);var t=[],r=!1;return{read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:n},useMedium:function(n){var o=e(n,r);return t.push(o),function(){t=t.filter((function(n){return n!==o}))}},assignSyncMedium:function(n){for(r=!0;t.length;){var e=t;t=[],e.forEach(n)}t={push:function(e){return n(e)},filter:function(){return t}}},assignMedium:function(n){r=!0;var e=[];if(t.length){var o=t;t=[],o.forEach(n),e=t}var i=function(){var t=e;e=[],t.forEach(n)},a=function(){return Promise.resolve().then(i)};a(),t={push:function(n){e.push(n),a()},filter:function(n){return e=e.filter(n),t}}}}}var h=function(n){void 0===n&&(n={});var e=p(null);return e.options=c({async:!0,ssr:!1},n),e}(),v=function(){},g=i.forwardRef((function(n,e){var t=i.useRef(null),r=i.useState({onScrollCapture:v,onWheelCapture:v,onTouchMoveCapture:v}),o=r[0],a=r[1],u=n.forwardProps,d=n.children,f=n.className,p=n.removeScrollBar,g=n.enabled,m=n.shards,x=n.sideCar,b=n.noIsolation,w=n.inert,y=n.allowPinchZoom,C=n.as,k=void 0===C?"div":C,E=l(n,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),j=x,O=s([t,e]),S=c(c({},E),o);return i.createElement(i.Fragment,null,g&&i.createElement(j,{sideCar:h,removeScrollBar:p,shards:m,noIsolation:b,inert:w,setCallbacks:a,allowPinchZoom:!!y,lockRef:t}),u?i.cloneElement(i.Children.only(d),c(c({},S),{ref:O})):i.createElement(k,c({},S,{className:f,ref:O}),d))}));g.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},g.classNames={fullWidth:d,zeroRight:u};var m,x=function(n){var e=n.sideCar,t=l(n,["sideCar"]);if(!e)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=e.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,c({},t))};x.isSideCarExport=!0;function b(){if(!document)return null;var n=document.createElement("style");n.type="text/css";var e=m||t.nc;return e&&n.setAttribute("nonce",e),n}var w=function(){var n=0,e=null;return{add:function(t){var r,o;0==n&&(e=b())&&(o=t,(r=e).styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o)),function(n){(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}(e)),n++},remove:function(){!--n&&e&&(e.parentNode&&e.parentNode.removeChild(e),e=null)}}},y=function(){var n=function(){var n=w();return function(e,t){i.useEffect((function(){return n.add(e),function(){n.remove()}}),[e&&t])}}();return function(e){var t=e.styles,r=e.dynamic;return n(t,r),null}},C={left:0,top:0,right:0,gap:0},k=function(n){return parseInt(n||"",10)||0},E=function(n){if(void 0===n&&(n="margin"),"undefined"===typeof window)return C;var e=function(n){var e=window.getComputedStyle(document.body),t=e["padding"===n?"paddingLeft":"marginLeft"],r=e["padding"===n?"paddingTop":"marginTop"],o=e["padding"===n?"paddingRight":"marginRight"];return[k(t),k(r),k(o)]}(n),t=document.documentElement.clientWidth,r=window.innerWidth;return{left:e[0],top:e[1],right:e[2],gap:Math.max(0,r-t+e[2]-e[0])}},j=y(),O=function(n,e,t,r){var o=n.left,i=n.top,a=n.right,c=n.gap;return void 0===t&&(t="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(c,"px ").concat(r,";\n  }\n  body {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([e&&"position: relative ".concat(r,";"),"margin"===t&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(i,"px;\n    padding-right: ").concat(a,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c,"px ").concat(r,";\n    "),"padding"===t&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(u," {\n    right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(d," {\n    margin-right: ").concat(c,"px ").concat(r,";\n  }\n  \n  .").concat(u," .").concat(u," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(d," .").concat(d," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(c,"px;\n  }\n")},S=function(n){var e=n.noRelative,t=n.noImportant,r=n.gapMode,o=void 0===r?"margin":r,a=i.useMemo((function(){return E(o)}),[o]);return i.createElement(j,{styles:O(a,!e,o,t?"":"!important")})},R=!1;if("undefined"!==typeof window)try{var Z=Object.defineProperty({},"passive",{get:function(){return R=!0,!0}});window.addEventListener("test",Z,Z),window.removeEventListener("test",Z,Z)}catch(Cn){R=!1}var B=!!R&&{passive:!1},P=function(n,e){var t=window.getComputedStyle(n);return"hidden"!==t[e]&&!(t.overflowY===t.overflowX&&!function(n){return"TEXTAREA"===n.tagName}(n)&&"visible"===t[e])},L=function(n,e){var t=e;do{if("undefined"!==typeof ShadowRoot&&t instanceof ShadowRoot&&(t=t.host),T(n,t)){var r=M(n,t);if(r[1]>r[2])return!0}t=t.parentNode}while(t&&t!==document.body);return!1},T=function(n,e){return"v"===n?function(n){return P(n,"overflowY")}(e):function(n){return P(n,"overflowX")}(e)},M=function(n,e){return"v"===n?[(t=e).scrollTop,t.scrollHeight,t.clientHeight]:function(n){return[n.scrollLeft,n.scrollWidth,n.clientWidth]}(e);var t},N=function(n){return"changedTouches"in n?[n.changedTouches[0].clientX,n.changedTouches[0].clientY]:[0,0]},z=function(n){return[n.deltaX,n.deltaY]},I=function(n){return n&&"current"in n?n.current:n},A=function(n){return"\n  .block-interactivity-".concat(n," {pointer-events: none;}\n  .allow-interactivity-").concat(n," {pointer-events: all;}\n")},W=0,X=[];var Y,D=(Y=function(n){var e=i.useRef([]),t=i.useRef([0,0]),r=i.useRef(),o=i.useState(W++)[0],a=i.useState((function(){return y()}))[0],c=i.useRef(n);i.useEffect((function(){c.current=n}),[n]),i.useEffect((function(){if(n.inert){document.body.classList.add("block-interactivity-".concat(o));var e=function(n,e,t){if(t||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return n.concat(r||Array.prototype.slice.call(e))}([n.lockRef.current],(n.shards||[]).map(I),!0).filter(Boolean);return e.forEach((function(n){return n.classList.add("allow-interactivity-".concat(o))})),function(){document.body.classList.remove("block-interactivity-".concat(o)),e.forEach((function(n){return n.classList.remove("allow-interactivity-".concat(o))}))}}}),[n.inert,n.lockRef.current,n.shards]);var l=i.useCallback((function(n,e){if("touches"in n&&2===n.touches.length)return!c.current.allowPinchZoom;var o,i=N(n),a=t.current,l="deltaX"in n?n.deltaX:a[0]-i[0],u="deltaY"in n?n.deltaY:a[1]-i[1],d=n.target,s=Math.abs(l)>Math.abs(u)?"h":"v";if("touches"in n&&"h"===s&&"range"===d.type)return!1;var f=L(s,d);if(!f)return!0;if(f?o=s:(o="v"===s?"h":"v",f=L(s,d)),!f)return!1;if(!r.current&&"changedTouches"in n&&(l||u)&&(r.current=o),!o)return!0;var p=r.current||o;return function(n,e,t,r,o){var i=function(n,e){return"h"===n&&"rtl"===e?-1:1}(n,window.getComputedStyle(e).direction),a=i*r,c=t.target,l=e.contains(c),u=!1,d=a>0,s=0,f=0;do{var p=M(n,c),h=p[0],v=p[1]-p[2]-i*h;(h||v)&&T(n,c)&&(s+=v,f+=h),c=c.parentNode}while(!l&&c!==document.body||l&&(e.contains(c)||e===c));return(d&&(o&&0===s||!o&&a>s)||!d&&(o&&0===f||!o&&-a>f))&&(u=!0),u}(p,e,n,"h"===p?l:u,!0)}),[]),u=i.useCallback((function(n){var t=n;if(X.length&&X[X.length-1]===a){var r="deltaY"in t?z(t):N(t),o=e.current.filter((function(n){return n.name===t.type&&n.target===t.target&&(e=n.delta,o=r,e[0]===o[0]&&e[1]===o[1]);var e,o}))[0];if(o&&o.should)t.cancelable&&t.preventDefault();else if(!o){var i=(c.current.shards||[]).map(I).filter(Boolean).filter((function(n){return n.contains(t.target)}));(i.length>0?l(t,i[0]):!c.current.noIsolation)&&t.cancelable&&t.preventDefault()}}}),[]),d=i.useCallback((function(n,t,r,o){var i={name:n,delta:t,target:r,should:o};e.current.push(i),setTimeout((function(){e.current=e.current.filter((function(n){return n!==i}))}),1)}),[]),s=i.useCallback((function(n){t.current=N(n),r.current=void 0}),[]),f=i.useCallback((function(e){d(e.type,z(e),e.target,l(e,n.lockRef.current))}),[]),p=i.useCallback((function(e){d(e.type,N(e),e.target,l(e,n.lockRef.current))}),[]);i.useEffect((function(){return X.push(a),n.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",u,B),document.addEventListener("touchmove",u,B),document.addEventListener("touchstart",s,B),function(){X=X.filter((function(n){return n!==a})),document.removeEventListener("wheel",u,B),document.removeEventListener("touchmove",u,B),document.removeEventListener("touchstart",s,B)}}),[]);var h=n.removeScrollBar,v=n.inert;return i.createElement(i.Fragment,null,v?i.createElement(a,{styles:A(o)}):null,h?i.createElement(S,{gapMode:"margin"}):null)},h.useMedium(Y),x),F=i.forwardRef((function(n,e){return i.createElement(g,c({},n,{ref:e,sideCar:D}))}));F.classNames=g.classNames;var _,q,H,G=F,J=t(168),K=t(7402),Q=t(2880),U=K.Z.div(_||(_=(0,J.Z)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: ",";\n  backdrop-filter: blur(5px);\n  transition-property: opacity;\n  transition-duration: 250ms;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: 100;\n"])),Q.O9.gray),V=K.Z.div(q||(q=(0,J.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: ",";\n  position: absolute;\n  top: 20px;\n  right: 20px;\n\n  "," {\n    width: 44px;\n    height: 44px;\n  }\n\n  "," {\n    top: 24px;\n    right: 24px;\n  }\n"])),Q.O9.background,Q.BC.tablet,Q.BC.desktop),$=["title","titleId"];function nn(){return nn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},nn.apply(this,arguments)}function en(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}function tn(n,e){var t=n.title,r=n.titleId,o=en(n,$);return i.createElement("svg",nn({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:e,"aria-labelledby":r},o),void 0===t?i.createElement("title",{id:r},"close_menu"):t?i.createElement("title",{id:r},t):null,H||(H=i.createElement("path",{d:"M23.734 10.304l-1.504-1.504-5.963 5.962-5.962-5.962-1.504 1.504 5.962 5.962-5.962 5.963 1.504 1.504 5.962-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.962z"})))}var rn,on,an,cn,ln,un=i.forwardRef(tn),dn=(t.p,K.Z.div(rn||(rn=(0,J.Z)(["\n  overflow: auto;\n  width: 280px;\n  padding: 40px 20px;\n  min-height: 530px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 20px;\n  background: ",";\n  z-index: 1000;\n\n  "," {\n    width: 608px;\n    padding: 40px 80px;\n  }\n"])),Q.O9.white,Q.BC.tabletAndDesktop)),sn=K.Z.p(on||(on=(0,J.Z)(["\n  font-size: 24px;\n  line-height: 1.37;\n  font-weight: ",";\n  text-align: center;\n  color: ",";\n  margin-bottom: 20px;\n\n  "," {\n    margin-bottom: 40px;\n    font-size: 36px;\n    font-weight: 600;\n  }\n"])),Q.vC.medium,Q.O9.black,Q.BC.tabletAndDesktop),fn=t(184),pn=function(n){var e=n.children,t=n.onClose,r=n.title;return(0,fn.jsxs)(dn,{children:[(0,fn.jsx)(V,{type:"button",onClick:t,children:(0,fn.jsx)(un,{})}),r?(0,fn.jsx)(sn,{children:r}):null,(0,fn.jsx)("div",{children:e})]})},hn=K.Z.div(an||(an=(0,J.Z)(["\n  overflow: auto;\n  width: 280px;\n  padding: 60px 20px 40px;\n  min-height: 784px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 20px;\n  background: ",";\n  z-index: 1000;\n\n  "," {\n    width: 704px;\n    padding: 32px 20px;\n    min-height: 540px;\n  }\n\n  "," {\n    min-height: 548px;\n  }\n"])),Q.O9.white,Q.BC.tablet,Q.BC.desktop),vn=function(n){var e=n.children,t=n.onClose;return(0,fn.jsxs)(hn,{children:[(0,fn.jsx)(V,{type:"button",onClick:t,children:(0,fn.jsx)(un,{})}),(0,fn.jsx)("div",{children:e})]})},gn=K.Z.div(cn||(cn=(0,J.Z)(["\n  overflow: auto;\n  width: 280px;\n  padding: 40px 20px;\n  min-height: 813px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 20px;\n  background: ",";\n  z-index: 1000;\n\n  "," {\n    width: 608px;\n    padding: 40px 80px;\n    min-height: 570px;\n  }\n"])),Q.O9.white,Q.BC.tabletAndDesktop),mn=K.Z.p(ln||(ln=(0,J.Z)(["\n  font-size: 24px;\n  line-height: 1.37;\n  font-weight: ",";\n  text-align: center;\n  color: ",";\n  margin-bottom: 20px;\n\n  "," {\n    font-size: 36px;\n    font-weight: 600;\n  }\n"])),Q.vC.medium,Q.O9.black,Q.BC.tabletAndDesktop),xn=function(n){var e=n.children,t=n.onClose,r=n.title;return(0,fn.jsxs)(gn,{children:[(0,fn.jsx)(V,{type:"button",onClick:t,children:(0,fn.jsx)(un,{})}),r?(0,fn.jsx)(mn,{children:r}):null,(0,fn.jsx)("div",{children:e})]})},bn=document.querySelector("#modal-root"),wn=function(n){var e=n.children,t=n.onClose,r=n.title,o=n.type;return console.log(o),(0,i.useEffect)((function(){function n(n){"Escape"===n.code&&t()}return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[t]),(0,a.createPortal)((0,fn.jsx)(G,{children:(0,fn.jsxs)(U,{onClick:function(n){n.target===n.currentTarget&&t()},children:["info"===o&&(0,fn.jsx)(vn,{onClose:t,children:e}),"pet"===o&&(0,fn.jsx)(pn,{onClose:t,title:r,children:e}),"notice"===o&&(0,fn.jsx)(xn,{onClose:t,title:r,children:e})]})}),bn)},yn=function(){var n=(0,i.useState)(!1),e=(0,r.Z)(n,2),t=e[0],a=e[1];function c(n){a(!t)}return(0,fn.jsxs)("div",{children:[(0,fn.jsx)(o.q,{children:(0,fn.jsx)("title",{children:"OurFriendsPage"})}),(0,fn.jsx)("button",{onClick:c,children:"Click me!!!"}),t&&(0,fn.jsx)(wn,{onClose:c,title:"add pets",type:"notice",children:"children"})]})}}}]);
//# sourceMappingURL=753.09759836.chunk.js.map