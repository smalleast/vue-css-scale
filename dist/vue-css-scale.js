!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueDownloadBar=t():e.VueDownloadBar=t()}(this,function(){return function(e){function t(n){if(s[n])return s[n].exports;var r=s[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var s={};return t.m=e,t.c=s,t.p="/",t(0)}([function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var r=s(4),a=n(r);e.exports=a.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{position:{type:String,default:""},className:{type:String},url:{type:String},textClassName:{type:String},textPosition:{type:String,default:"none"}},methods:{},mounted:function(){}}},function(e,t,s){t=e.exports=s(3)(),t.push([e.id,".vue-css-scale{position:relative;width:100%;height:100%;border:1px solid #ddd;overflow:hidden}.vue-css-scale:hover .scale-img{transform:scale(1.15)}.vue-css-scale:hover .scale-text.top{transform:translateY(100%)}.vue-css-scale:hover .scale-text.bottom{transform:translateY(-100%)}.vue-css-scale:hover .scale-text.left{transform:translate(100%)}.vue-css-scale:hover .scale-text.right{transform:translate(-100%)}.vue-css-scale.x:hover img{transform:scaleX(1.15)}.vue-css-scale.y:hover img{transform:scaleY(1.15)}.vue-css-scale .scale-img{position:relative;display:inline-block;width:100%;vertical-align:middle;transition:transform 1s;z-index:1}.vue-css-scale .scale-text{width:100%;height:100%;position:absolute;top:0;left:0;background:rgba(0,0,0,.2);z-index:2;transition:transform .6s}.vue-css-scale .scale-text.top{top:-100%}.vue-css-scale .scale-text.bottom{top:100%}.vue-css-scale .scale-text.left{left:-100%}.vue-css-scale .scale-text.right{left:100%}.vue-css-scale .scale-text.normal{left:0;top:0}.vue-css-scale .scale-text.none{display:none}","",{version:3,sources:["/./src/components/vue-css-scale.vue"],names:[],mappings:"AACA,eAAe,kBAAkB,WAAW,YAAY,sBAAsB,eAAe,CAC5F,AACD,gCAAgC,qBAAqB,CACpD,AACD,qCAAqC,0BAA6B,CACjE,AACD,wCAAwC,2BAA8B,CACrE,AACD,sCAAsC,yBAA6B,CAClE,AACD,uCAAuC,0BAA8B,CACpE,AACD,2BAA2B,sBAAsB,CAChD,AACD,2BAA2B,sBAAsB,CAChD,AACD,0BAA0B,kBAAkB,qBAAqB,WAAW,sBAAsB,wBAAwB,SAAS,CAClI,AACD,2BAA2B,WAAW,YAAY,kBAAkB,MAAM,OAAO,0BAA2B,UAAU,wBAAwB,CAC7I,AACD,+BAA+B,SAAS,CACvC,AACD,kCAAkC,QAAQ,CACzC,AACD,gCAAgC,UAAU,CACzC,AACD,iCAAiC,SAAS,CACzC,AACD,kCAAkC,OAAO,KAAK,CAC7C,AACD,gCAAgC,YAAY,CAC3C",file:"vue-css-scale.vue",sourcesContent:["\n.vue-css-scale{position:relative;width:100%;height:100%;border:1px solid #ddd;overflow:hidden\n}\n.vue-css-scale:hover .scale-img{transform:scale(1.15)\n}\n.vue-css-scale:hover .scale-text.top{transform:translate(0%, 100%)\n}\n.vue-css-scale:hover .scale-text.bottom{transform:translate(0%, -100%)\n}\n.vue-css-scale:hover .scale-text.left{transform:translate(100%, 0%)\n}\n.vue-css-scale:hover .scale-text.right{transform:translate(-100%, 0%)\n}\n.vue-css-scale.x:hover img{transform:scaleX(1.15)\n}\n.vue-css-scale.y:hover img{transform:scaleY(1.15)\n}\n.vue-css-scale .scale-img{position:relative;display:inline-block;width:100%;vertical-align:middle;transition:transform 1s;z-index:1\n}\n.vue-css-scale .scale-text{width:100%;height:100%;position:absolute;top:0;left:0;background:rgba(0,0,0,0.2);z-index:2;transition:transform .6s\n}\n.vue-css-scale .scale-text.top{top:-100%\n}\n.vue-css-scale .scale-text.bottom{top:100%\n}\n.vue-css-scale .scale-text.left{left:-100%\n}\n.vue-css-scale .scale-text.right{left:100%\n}\n.vue-css-scale .scale-text.normal{left:0;top:0\n}\n.vue-css-scale .scale-text.none{display:none\n}\n"],sourceRoot:"webpack://"}])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var s=this[t];s[2]?e.push("@media "+s[2]+"{"+s[1]+"}"):e.push(s[1])}return e.join("")},e.i=function(t,s){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(n[a]=!0)}for(r=0;r<t.length;r++){var o=t[r];"number"==typeof o[0]&&n[o[0]]||(s&&!o[2]?o[2]=s:s&&(o[2]="("+o[2]+") and ("+s+")"),e.push(o))}},e}},function(e,t,s){var n,r;s(7),n=s(1);var a=s(5);r=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(r=n=n.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,e.exports=n},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vue-css-scale",class:[e.position,e.className]},[s("img",{staticClass:"scale-img",attrs:{src:e.url}}),e._v(" "),s("div",{staticClass:"scale-text",class:[e.textPosition,e.textClassName]},[e._t("text")],2)])},staticRenderFns:[]}},function(e,t,s){function n(e,t){for(var s=0;s<e.length;s++){var n=e[s],r=A[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(l(n.parts[a],t))}else{for(var o=[],a=0;a<n.parts.length;a++)o.push(l(n.parts[a],t));A[n.id]={id:n.id,refs:1,parts:o}}}}function r(e){for(var t=[],s={},n=0;n<e.length;n++){var r=e[n],a=r[0],o=r[1],i=r[2],l=r[3],c={css:o,media:i,sourceMap:l};s[a]?s[a].parts.push(c):t.push(s[a]={id:a,parts:[c]})}return t}function a(e,t){var s=p(),n=h[h.length-1];if("top"===e.insertAt)n?n.nextSibling?s.insertBefore(t,n.nextSibling):s.appendChild(t):s.insertBefore(t,s.firstChild),h.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");s.appendChild(t)}}function o(e){e.parentNode.removeChild(e);var t=h.indexOf(e);t>=0&&h.splice(t,1)}function i(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function l(e,t){var s,n,r;if(t.singleton){var a=C++;s=v||(v=i(t)),n=c.bind(null,s,a,!1),r=c.bind(null,s,a,!0)}else s=i(t),n=u.bind(null,s),r=function(){o(s)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}function c(e,t,s,n){var r=s?"":n.css;if(e.styleSheet)e.styleSheet.cssText=m(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function u(e,t){var s=t.css,n=t.media,r=t.sourceMap;if(n&&e.setAttribute("media",n),r&&(s+="\n/*# sourceURL="+r.sources[0]+" */",s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=s;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(s))}}var A={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},d=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=f(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,C=0,h=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=d()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var s=r(e);return n(s,t),function(e){for(var a=[],o=0;o<s.length;o++){var i=s[o],l=A[i.id];l.refs--,a.push(l)}if(e){var c=r(e);n(c,t)}for(var o=0;o<a.length;o++){var l=a[o];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete A[l.id]}}}};var m=function(){var e=[];return function(t,s){return e[t]=s,e.filter(Boolean).join("\n")}}()},function(e,t,s){var n=s(2);"string"==typeof n&&(n=[[e.id,n,""]]);s(6)(n,{});n.locals&&(e.exports=n.locals)}])});
//# sourceMappingURL=vue-css-scale.js.map