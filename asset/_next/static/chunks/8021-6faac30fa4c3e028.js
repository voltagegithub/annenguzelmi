(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8021],{48021:function(e,t,o){e.exports=o(79623)},8345:function(e,t,o){"use strict";function n(e,t,n,l){{let r=o(47949).normalizeLocalePath,u=o(6455).detectDomainLocale,a=t||r(e,n).detectedLocale,c=u(l,void 0,a);if(c){let t="http".concat(c.http?"":"s","://"),o=a===c.defaultLocale?"":"/".concat(a);return"".concat(t).concat(c.domain).concat("").concat(o).concat(e)}return!1}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},79623:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let n=o(23353),l=o(45569),r=o(63637),u=l._(o(11470)),a=o(1942),c=o(18602),f=o(50004),i=o(90693),s=o(87296),d=o(37793),p=o(71303),y=o(59146),b=o(8345),h=o(14456),v=new Set;function _(e,t,o,n,l){if(l||(0,c.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,r=t+"%"+o+"%"+l;if(v.has(r))return;v.add(r)}Promise.resolve(e.prefetch(t,o,n)).catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let m=u.default.forwardRef(function(e,t){let o,l;let{href:f,as:v,children:m,prefetch:j,passHref:M,replace:P,shallow:C,scroll:O,locale:k,onClick:L,onMouseEnter:E,onTouchStart:x,legacyBehavior:w=!1}=e,R=r._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);o=m,w&&("string"==typeof o||"number"==typeof o)&&(o=u.default.createElement("a",null,o));let I=!1!==j,S=u.default.useContext(d.RouterContext),T=u.default.useContext(p.AppRouterContext),D=null!=S?S:T,U=!S,{href:z,as:A}=u.default.useMemo(()=>{if(!S){let e=g(f);return{href:e,as:v?g(v):e}}let[e,t]=(0,a.resolveHref)(S,f,!0);return{href:e,as:v?(0,a.resolveHref)(S,v):t||e}},[S,f,v]),K=u.default.useRef(z),N=u.default.useRef(A);w&&(l=u.default.Children.only(o));let H=w?l&&"object"==typeof l&&l.ref:t,[B,q,F]=(0,y.useIntersection)({rootMargin:"200px"}),G=u.default.useCallback(e=>{(N.current!==A||K.current!==z)&&(F(),N.current=A,K.current=z),B(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[A,H,z,F,B]);u.default.useEffect(()=>{D&&q&&I&&_(D,z,A,{locale:k},U)},[A,z,q,k,I,null==S?void 0:S.locale,D,U]);let J={ref:G,onClick(e){w||"function"!=typeof L||L(e),w&&l.props&&"function"==typeof l.props.onClick&&l.props.onClick(e),D&&!e.defaultPrevented&&function(e,t,o,n,l,r,a,f,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,o=t.getAttribute("target");return o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!(0,c.isLocalURL)(o)))return;e.preventDefault();let y=()=>{"beforePopState"in t?t[l?"replace":"push"](o,n,{shallow:r,locale:f,scroll:a}):t[l?"replace":"push"](n||o,{forceOptimisticNavigation:!s})};i?u.default.startTransition(y):y()}(e,D,z,A,P,C,O,k,U,I)},onMouseEnter(e){w||"function"!=typeof E||E(e),w&&l.props&&"function"==typeof l.props.onMouseEnter&&l.props.onMouseEnter(e),D&&(I||!U)&&_(D,z,A,{locale:k,priority:!0,bypassPrefetchedCheck:!0},U)},onTouchStart(e){w||"function"!=typeof x||x(e),w&&l.props&&"function"==typeof l.props.onTouchStart&&l.props.onTouchStart(e),D&&(I||!U)&&_(D,z,A,{locale:k,priority:!0,bypassPrefetchedCheck:!0},U)}};if((0,i.isAbsoluteUrl)(A))J.href=A;else if(!w||M||"a"===l.type&&!("href"in l.props)){let e=void 0!==k?k:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,b.getDomainLocale)(A,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);J.href=t||(0,h.addBasePath)((0,s.addLocale)(A,e,null==S?void 0:S.defaultLocale))}return w?u.default.cloneElement(l,J):u.default.createElement("a",n._({},R,J),o)}),j=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},47949:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizeLocalePath",{enumerable:!0,get:function(){return n}});let n=(e,t)=>o(43968).normalizeLocalePath(e,t);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},59146:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let n=o(11470),l=o(12910),r="function"==typeof IntersectionObserver,u=new Map,a=[];function c(e){let{rootRef:t,rootMargin:o,disabled:c}=e,f=c||!r,[i,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(r){if(f||i)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,o){let{id:n,observer:l,elements:r}=function(e){let t;let o={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===o.root&&e.margin===o.margin);if(n&&(t=u.get(n)))return t;let l=new Map,r=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),o=e.isIntersecting||e.intersectionRatio>0;t&&o&&t(o)})},e);return t={id:o,observer:r,elements:l},a.push(o),u.set(o,t),t}(o);return r.set(e,t),l.observe(e),function(){if(r.delete(e),l.unobserve(e),0===r.size){l.disconnect(),u.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:o});return n}}else if(!i){let e=(0,l.requestIdleCallback)(()=>s(!0));return()=>(0,l.cancelIdleCallback)(e)}},[f,o,t,i,d.current]);let y=(0,n.useCallback)(()=>{s(!1)},[]);return[p,i,y]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)}}]);