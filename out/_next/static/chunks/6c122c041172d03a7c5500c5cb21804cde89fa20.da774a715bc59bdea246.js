(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+iuc":function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("B9jh"),n("dL40"),n("xvv9"),n("V+O7"),t.exports=n("WEpk").Set},"/0+H":function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};r(e,"__esModule",{value:!0});var i=o(n("q1tI")),u=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(i.default.useContext(u.AmpStateContext))}},"/h46":function(t,e,n){n("cHUd")("Map")},"0tVQ":function(t,e,n){n("FlQf"),n("VJsP"),t.exports=n("WEpk").Array.from},"2PDY":function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},"8Kt/":function(t,e,n){"use strict";var r=n("ttDY"),o=n("hfKm"),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};o(e,"__esModule",{value:!0});var u=i(n("q1tI")),a=i(n("Xuae")),f=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[u.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(u.default.createElement("meta",{name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),e}function p(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===u.default.Fragment?t.concat(u.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function v(t,e){return t.reduce((function(t,e){var n=u.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(p,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new r,e=new r,n=new r,o={};return function(i){var u=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var a=i.key.slice(i.key.indexOf("$")+1);t.has(a)?u=!1:t.add(a)}switch(i.type){case"title":case"base":e.has(i.type)?u=!1:e.add(i.type);break;case"meta":for(var f=0,s=d.length;f<s;f++){var c=d[f];if(i.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?u=!1:n.add(c);else{var l=i.props[c],p=o[c]||new r;p.has(l)?u=!1:(p.add(l),o[c]=p)}}}return u}}()).reverse().map((function(t,e){var n=t.key||e;return u.default.cloneElement(t,{key:n})}))}var h=a.default();function y(t){var e=t.children;return u.default.createElement(f.AmpStateContext.Consumer,null,(function(t){return u.default.createElement(s.HeadManagerContext.Consumer,null,(function(n){return u.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:c.isInAmpMode(t)},e)}))}))}y.rewind=h.rewind,e.default=y},"8iia":function(t,e,n){var r=n("QMMT"),o=n("RRc/");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},AJC2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}});var r,o=(r=n("FM9S"))&&r.__esModule?r:{default:r}},B9jh:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(o(this,"Set"),t=0===t?0:t,t)}},r)},FM9S:function(t,e,n){"use strict";function r(t){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.containsRvh=function(t){return/(\d+(\.\d*)?)rvh(?!\w)/.test(t)},e.default=void 0;var o=function(t,e){!function(t,e){if("object"!==r(t)&&void 0!==t||Array.isArray(t))throw Error("style (the first argument) must be an object or undefined");if("number"!==typeof e||e<0)throw Error("Second argument (windowHeight) must be a non-negative number")}(t,e);var n=void 0===t?{height:"100rvh"}:t,o={};return Object.keys(n).forEach((function(t){o[t]="string"===typeof n[t]?function(t,e){return t.replace(/(\d+(\.\d*)?)rvh(?!\w)/g,(function(t,n){return"".concat(e*parseFloat(n)/100,"px")}))}(n[t],e):n[t]})),o};e.default=o},IP1Z:function(t,e,n){"use strict";var r=n("2faE"),o=n("rr1i");t.exports=function(t,e,n){e in t?r.f(t,e,o(0,n)):t[e]=n}},"K4v/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return o.default}}),n("sviS");var r,o=(r=n("iYA0"))&&r.__esModule?r:{default:r}},LX0d:function(t,e,n){t.exports=n("UDep")},PQJW:function(t,e,n){var r=n("d04V"),o=n("yLu3");t.exports=function(t){if(o(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r(t)}},"RRc/":function(t,e,n){var r=n("oioR");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},TSYQ:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var u=o.apply(null,r);u&&t.push(u)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},TbGu:function(t,e,n){var r=n("fGSI"),o=n("PQJW"),i=n("2PDY");t.exports=function(t){return r(t)||o(t)||i()}},UDep:function(t,e,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),t.exports=n("WEpk").Map},"V+O7":function(t,e,n){n("aPfg")("Set")},VJsP:function(t,e,n){"use strict";var r=n("2GTP"),o=n("Y7ZC"),i=n("JB68"),u=n("sNwI"),a=n("NwJ3"),f=n("tEej"),s=n("IP1Z"),c=n("fNZA");o(o.S+o.F*!n("TuGD")((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,o,l,p=i(t),d="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,y=void 0!==h,m=0,b=c(p);if(y&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==b||d==Array&&a(b))for(n=new d(e=f(p.length));e>m;m++)s(n,m,y?h(p[m],m):p[m]);else for(l=b.call(p),n=new d;!(o=l.next()).done;m++)s(n,m,y?u(l,h,[o.value,m],!0):o.value);return n.length=m,n}})},Wu5q:function(t,e,n){"use strict";var r=n("2faE").f,o=n("oVml"),i=n("XJU/"),u=n("2GTP"),a=n("EXMj"),f=n("oioR"),s=n("MPFp"),c=n("UO39"),l=n("TJWN"),p=n("jmDH"),d=n("6/1s").fastKey,v=n("n3ko"),h=p?"_s":"size",y=function(t,e){var n,r=d(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,s){var c=t((function(t,r){a(t,c,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[h]=0,void 0!=r&&f(r,n,t[s],t)}));return i(c.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[h]=0},delete:function(t){var n=v(this,e),r=y(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[h]--}return!!r},forEach:function(t){v(this,e);for(var n,r=u(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!y(v(this,e),t)}}),p&&r(c.prototype,"size",{get:function(){return v(this,e)[h]}}),c},def:function(t,e,n){var r,o,i=y(t,e);return i?i.v=n:(t._l=i={i:o=d(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[h]++,"F"!==o&&(t._i[o]=i)),t},getEntry:y,setStrong:function(t,e,n){s(t,e,(function(t,n){this._t=v(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?c(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,c(1))}),n?"entries":"values",!n,!0),l(e)}}},XLbu:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Map",{toJSON:n("8iia")("Map")})},Xuae:function(t,e,n){"use strict";var r=n("/HRN"),o=n("ZDA2"),i=n("/+P4"),u=n("K47E"),a=n("WaGi"),f=n("N9n2"),s=n("TbGu"),c=n("ttDY");n("hfKm")(e,"__esModule",{value:!0});var l=n("q1tI"),p=!1;e.default=function(){var t,e=new c;function n(n){t=n.props.reduceComponentsToState(s(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(s){function c(t){var a;return r(this,c),a=o(this,i(c).call(this,t)),p&&(e.add(u(a)),n(u(a))),a}return f(c,s),a(c,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(c,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),c}(l.Component)}},YFqc:function(t,e,n){t.exports=n("cTJO")},YfrF:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){return window.innerHeight};e.default=r},cTJO:function(t,e,n){"use strict";var r=n("/HRN"),o=n("WaGi"),i=n("ZDA2"),u=n("/+P4"),a=n("N9n2"),f=n("LX0d"),s=n("KI45"),c=n("5Uuq");e.__esModule=!0,e.default=void 0;var l,p=n("CxY0"),d=c(n("q1tI")),v=s(n("nOHt")),h=n("g/15");function y(t){return t&&"object"===typeof t?(0,h.formatWithValidation)(t):t}var m=new f,b=window.IntersectionObserver,g={};function _(){return l||(b?l=new b((function(t){t.forEach((function(t){if(m.has(t.target)){var e=m.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),m.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var w=function(t){function e(t){var n;return r(this,e),(n=i(this,u(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var u=t(o,i);return e=o,n=i,r=u,u}}((function(t,e){return{href:y(t),as:e?y(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),u=i.href,a=i.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,h.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(u)){var f=window.location.pathname;u=(0,p.resolve)(f,u),a=a?(0,p.resolve)(f,a):u,t.preventDefault();var s=n.props.scroll;null==s&&(s=a.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](u,a,{shallow:n.props.shallow}).then((function(t){t&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return a(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(t,e)}},{key:"handleRef",value:function(t){var e=this,n=g[this.getHref()];this.p&&b&&t&&t.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(t,e){var n=_();return n?(n.observe(t),m.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}m.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();v.default.prefetch(t),g[t]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=d.default.createElement("a",null,e));var i=d.Children.only(e),u={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch()},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||r),d.default.cloneElement(i,u)}}]),e}(d.Component);e.default=w},d04V:function(t,e,n){t.exports=n("0tVQ")},dL40:function(t,e,n){var r=n("Y7ZC");r(r.P+r.R,"Set",{toJSON:n("8iia")("Set")})},dVTT:function(t,e,n){n("aPfg")("Map")},fGSI:function(t,e,n){var r=n("p0XB");t.exports=function(t){if(r(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},g33z:function(t,e,n){"use strict";var r=n("Wu5q"),o=n("n3ko");t.exports=n("raTm")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},iYA0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n("q1tI")),o=u(n("AJC2")),i=u(n("YfrF"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(){return(f=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=function(t){function e(){var t,n,r,u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var f=arguments.length,s=new Array(f),l=0;l<f;l++)s[l]=arguments[l];return r=this,u=(t=c(e)).call.apply(t,[this].concat(s)),n=!u||"object"!==a(u)&&"function"!==typeof u?p(r):u,d(p(p(n)),"state",{style:{}}),d(p(p(n)),"updateStyle",(function(){var t=(0,o.default)(n.props.style,(0,i.default)());n.setState({style:t})})),n}var n,u,v;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(e,t),n=e,(u=[{key:"componentDidMount",value:function(){this.updateStyle(),window.addEventListener("resize",this.updateStyle)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateStyle)}},{key:"render",value:function(){return r.default.createElement("div",f({},this.props,{style:this.state.style}))}}])&&s(n.prototype,u),v&&s(n,v),e}(r.default.Component);e.default=v},lwAK:function(t,e,n){"use strict";var r=n("hfKm"),o=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};r(e,"__esModule",{value:!0});var i=o(n("q1tI"));e.AmpStateContext=i.createContext({})},soUV:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("K4v/"),u=n.n(i),a=n("YFqc"),f=n.n(a),s=n("TSYQ"),c=n.n(s),l=n("nOHt"),p=o.a.createElement,d=[{href:"/",label:"Home"},{href:"/investment-philosophy",label:"Investment Philosophy"},{href:"/investor-letters",label:"Investor Leters"},{href:"/contact",label:"Contact"}],v=function(){var t=Object(l.useRouter)();return p("nav",{className:"flex f6 f5-l"},d.map((function(e,n){var r=e.href,o=e.label;return p(f.a,{href:r,key:r},p("a",{className:c()(["db black no-underline pb2 pb0-ns navbar-link",r===t.asPath&&"active",n===d.length-1?"mr0":"mr3 mr4-ns"])},o))})))};n.d(e,"a",(function(){return y}));var h=r.createElement,y=function(t){return h(u.a,{style:{minHeight:"100rvh"},className:"flex flex-column main-bg-image bg-white black min-vh-100"},h("div",{className:"flex flex-auto flex-column"},h("div",{className:"flex-ns db justify-between bg-white pa3 pv4-ns ph5-ns ph4-m"},h("h1",{className:"f4 f5-m normal tracked-tight flex-auto mt2 mb3 mb3-ns mt0-ns mv1-ns ma0-ns"},"Cernocky Capital"),h(v,null)),h("div",{className:"flex-auto flex flex-column"},t.children)),h("footer",{className:"bg-black white tl tr-ns w-100 pv2 ph3 pv3-ns ph5-ns f7 ph4-m"},h("p",{className:"pa0 ma0"},"\xa9 2019 Cernocky Capital\xa0\xa0|\xa0\xa0All Rights Reserved")))}},sviS:function(t,e,n){"use strict";Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)})},ttDY:function(t,e,n){t.exports=n("+iuc")},xvv9:function(t,e,n){n("cHUd")("Set")}}]);