(function(){"use strict";var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function diff(r){var r=r||{};this.Timeout=r.timeout||1,this.EditCost=r.editCost||4}var DIFF_DELETE=-1,DIFF_INSERT=1,DIFF_EQUAL=0;diff.Diff,diff.prototype.main=function(e,r,t,o){typeof o>"u"&&(this.Timeout<=0?o=Number.MAX_VALUE:o=new Date().getTime()+this.Timeout*1e3);var a=o;if(e==null||r==null)throw new Error("Null input. (diff_main)");if(e==r)return e?[[DIFF_EQUAL,e]]:[];typeof t>"u"&&(t=!0);var n=t,i=this.commonPrefix(e,r),c=e.substring(0,i);e=e.substring(i),r=r.substring(i),i=this.commonSuffix(e,r);var s=e.substring(e.length-i);e=e.substring(0,e.length-i),r=r.substring(0,r.length-i);var l=this.compute_(e,r,n,a);return c&&l.unshift([DIFF_EQUAL,c]),s&&l.push([DIFF_EQUAL,s]),this.cleanupMerge(l),l},diff.prototype.compute_=function(e,r,t,o){var a;if(!e)return[[DIFF_INSERT,r]];if(!r)return[[DIFF_DELETE,e]];var n=e.length>r.length?e:r,i=e.length>r.length?r:e,c=n.indexOf(i);if(c!=-1)return a=[[DIFF_INSERT,n.substring(0,c)],[DIFF_EQUAL,i],[DIFF_INSERT,n.substring(c+i.length)]],e.length>r.length&&(a[0][0]=a[2][0]=DIFF_DELETE),a;if(i.length==1)return[[DIFF_DELETE,e],[DIFF_INSERT,r]];var s=this.halfMatch_(e,r);if(s){var l=s[0],u=s[1],f=s[2],p=s[3],g=s[4],v=this.main(l,f,t,o),_=this.main(u,p,t,o);return v.concat([[DIFF_EQUAL,g]],_)}return t&&e.length>100&&r.length>100?this.lineMode_(e,r,o):this.bisect_(e,r,o)},diff.prototype.lineMode_=function(e,r,t){var o=this.linesToChars_(e,r);e=o.chars1,r=o.chars2;var a=o.lineArray,n=this.main(e,r,!1,t);this.charsToLines_(n,a),this.cleanupSemantic(n),n.push([DIFF_EQUAL,""]);for(var i=0,c=0,s=0,l="",u="";i<n.length;){switch(n[i][0]){case DIFF_INSERT:s++,u+=n[i][1];break;case DIFF_DELETE:c++,l+=n[i][1];break;case DIFF_EQUAL:if(c>=1&&s>=1){n.splice(i-c-s,c+s),i=i-c-s;for(var o=this.main(l,u,!1,t),f=o.length-1;f>=0;f--)n.splice(i,0,o[f]);i=i+o.length}s=0,c=0,l="",u="";break}i++}return n.pop(),n},diff.prototype.bisect_=function(e,r,t){for(var o=e.length,a=r.length,n=Math.ceil((o+a)/2),i=n,c=2*n,s=new Array(c),l=new Array(c),u=0;u<c;u++)s[u]=-1,l[u]=-1;s[i+1]=0,l[i+1]=0;for(var f=o-a,p=f%2!=0,g=0,v=0,_=0,E=0,b=0;b<n&&!(new Date().getTime()>t);b++){for(var h=-b+g;h<=b-v;h+=2){var d=i+h,m;h==-b||h!=b&&s[d-1]<s[d+1]?m=s[d+1]:m=s[d-1]+1;for(var W=m-h;m<o&&W<a&&e.charAt(m)==r.charAt(W);)m++,W++;if(s[d]=m,m>o)v+=2;else if(W>a)g+=2;else if(p){var k=i+f-h;if(k>=0&&k<c&&l[k]!=-1){var y=o-l[k];if(m>=y)return this.bisectSplit_(e,r,m,W,t)}}}for(var w=-b+_;w<=b-E;w+=2){var k=i+w,y;w==-b||w!=b&&l[k-1]<l[k+1]?y=l[k+1]:y=l[k-1]+1;for(var P=y-w;y<o&&P<a&&e.charAt(o-y-1)==r.charAt(a-P-1);)y++,P++;if(l[k]=y,y>o)E+=2;else if(P>a)_+=2;else if(!p){var d=i+f-w;if(d>=0&&d<c&&s[d]!=-1){var m=s[d],W=i+m-d;if(y=o-y,m>=y)return this.bisectSplit_(e,r,m,W,t)}}}}return[[DIFF_DELETE,e],[DIFF_INSERT,r]]},diff.prototype.bisectSplit_=function(e,r,t,o,a){var n=e.substring(0,t),i=r.substring(0,o),c=e.substring(t),s=r.substring(o),l=this.main(n,i,!1,a),u=this.main(c,s,!1,a);return l.concat(u)},diff.prototype.linesToChars_=function(e,r){var t=[],o={};t[0]="";function a(c){for(var s="",l=0,u=-1,f=t.length;u<c.length-1;){u=c.indexOf(`
`,l),u==-1&&(u=c.length-1);var p=c.substring(l,u+1);l=u+1,(o.hasOwnProperty?o.hasOwnProperty(p):o[p]!==void 0)?s+=String.fromCharCode(o[p]):(s+=String.fromCharCode(f),o[p]=f,t[f++]=p)}return s}var n=a(e),i=a(r);return{chars1:n,chars2:i,lineArray:t}},diff.prototype.charsToLines_=function(e,r){for(var t=0;t<e.length;t++){for(var o=e[t][1],a=[],n=0;n<o.length;n++)a[n]=r[o.charCodeAt(n)];e[t][1]=a.join("")}},diff.prototype.commonPrefix=function(e,r){if(!e||!r||e.charAt(0)!=r.charAt(0))return 0;for(var t=0,o=Math.min(e.length,r.length),a=o,n=0;t<a;)e.substring(n,a)==r.substring(n,a)?(t=a,n=t):o=a,a=Math.floor((o-t)/2+t);return a},diff.prototype.commonSuffix=function(e,r){if(!e||!r||e.charAt(e.length-1)!=r.charAt(r.length-1))return 0;for(var t=0,o=Math.min(e.length,r.length),a=o,n=0;t<a;)e.substring(e.length-a,e.length-n)==r.substring(r.length-a,r.length-n)?(t=a,n=t):o=a,a=Math.floor((o-t)/2+t);return a},diff.prototype.commonOverlap_=function(e,r){var t=e.length,o=r.length;if(t==0||o==0)return 0;t>o?e=e.substring(t-o):t<o&&(r=r.substring(0,t));var a=Math.min(t,o);if(e==r)return a;for(var n=0,i=1;;){var c=e.substring(a-i),s=r.indexOf(c);if(s==-1)return n;i+=s,(s==0||e.substring(a-i)==r.substring(0,i))&&(n=i,i++)}},diff.prototype.halfMatch_=function(e,r){if(this.Timeout<=0)return null;var t=e.length>r.length?e:r,o=e.length>r.length?r:e;if(t.length<4||o.length*2<t.length)return null;var a=this;function n(v,_,E){for(var b=v.substring(E,E+Math.floor(v.length/4)),h=-1,d="",m,W,k,y;(h=_.indexOf(b,h+1))!=-1;){var w=a.commonPrefix(v.substring(E),_.substring(h)),P=a.commonSuffix(v.substring(0,E),_.substring(0,h));d.length<P+w&&(d=_.substring(h-P,h)+_.substring(h,h+w),m=v.substring(0,E-P),W=v.substring(E+w),k=_.substring(0,h-P),y=_.substring(h+w))}return d.length*2>=v.length?[m,W,k,y,d]:null}var i=n(t,o,Math.ceil(t.length/4)),c=n(t,o,Math.ceil(t.length/2)),s;if(!i&&!c)return null;c?i?s=i[4].length>c[4].length?i:c:s=c:s=i;var l,u,f,p;e.length>r.length?(l=s[0],u=s[1],f=s[2],p=s[3]):(f=s[0],p=s[1],l=s[2],u=s[3]);var g=s[4];return[l,u,f,p,g]},diff.prototype.cleanupSemantic=function(e){for(var r=!1,t=[],o=0,a=null,n=0,i=0,c=0,s=0,l=0;n<e.length;)e[n][0]==DIFF_EQUAL?(t[o++]=n,i=s,c=l,s=0,l=0,a=e[n][1]):(e[n][0]==DIFF_INSERT?s+=e[n][1].length:l+=e[n][1].length,a&&a.length<=Math.max(i,c)&&a.length<=Math.max(s,l)&&(e.splice(t[o-1],0,[DIFF_DELETE,a]),e[t[o-1]+1][0]=DIFF_INSERT,o--,o--,n=o>0?t[o-1]:-1,i=0,c=0,s=0,l=0,a=null,r=!0)),n++;for(r&&this.cleanupMerge(e),this.cleanupSemanticLossless(e),n=1;n<e.length;){if(e[n-1][0]==DIFF_DELETE&&e[n][0]==DIFF_INSERT){var u=e[n-1][1],f=e[n][1],p=this.commonOverlap_(u,f),g=this.commonOverlap_(f,u);p>=g?(p>=u.length/2||p>=f.length/2)&&(e.splice(n,0,[DIFF_EQUAL,f.substring(0,p)]),e[n-1][1]=u.substring(0,u.length-p),e[n+1][1]=f.substring(p),n++):(g>=u.length/2||g>=f.length/2)&&(e.splice(n,0,[DIFF_EQUAL,u.substring(0,g)]),e[n-1][0]=DIFF_INSERT,e[n-1][1]=f.substring(0,f.length-g),e[n+1][0]=DIFF_DELETE,e[n+1][1]=u.substring(g),n++),n++}n++}},diff.prototype.cleanupSemanticLossless=function(e){function r(g,v){if(!g||!v)return 6;var _=g.charAt(g.length-1),E=v.charAt(0),b=_.match(diff.nonAlphaNumericRegex_),h=E.match(diff.nonAlphaNumericRegex_),d=b&&_.match(diff.whitespaceRegex_),m=h&&E.match(diff.whitespaceRegex_),W=d&&_.match(diff.linebreakRegex_),k=m&&E.match(diff.linebreakRegex_),y=W&&g.match(diff.blanklineEndRegex_),w=k&&v.match(diff.blanklineStartRegex_);return y||w?5:W||k?4:b&&!d&&m?3:d||m?2:b||h?1:0}for(var t=1;t<e.length-1;){if(e[t-1][0]==DIFF_EQUAL&&e[t+1][0]==DIFF_EQUAL){var o=e[t-1][1],a=e[t][1],n=e[t+1][1],i=this.commonSuffix(o,a);if(i){var c=a.substring(a.length-i);o=o.substring(0,o.length-i),a=c+a.substring(0,a.length-i),n=c+n}for(var s=o,l=a,u=n,f=r(o,a)+r(a,n);a.charAt(0)===n.charAt(0);){o+=a.charAt(0),a=a.substring(1)+n.charAt(0),n=n.substring(1);var p=r(o,a)+r(a,n);p>=f&&(f=p,s=o,l=a,u=n)}e[t-1][1]!=s&&(s?e[t-1][1]=s:(e.splice(t-1,1),t--),e[t][1]=l,u?e[t+1][1]=u:(e.splice(t+1,1),t--))}t++}},diff.nonAlphaNumericRegex_=/[^a-zA-Z0-9]/,diff.whitespaceRegex_=/\s/,diff.linebreakRegex_=/[\r\n]/,diff.blanklineEndRegex_=/\n\r?\n$/,diff.blanklineStartRegex_=/^\r?\n\r?\n/,diff.prototype.cleanupEfficiency=function(e){for(var r=!1,t=[],o=0,a=null,n=0,i=!1,c=!1,s=!1,l=!1;n<e.length;)e[n][0]==DIFF_EQUAL?(e[n][1].length<this.EditCost&&(s||l)?(t[o++]=n,i=s,c=l,a=e[n][1]):(o=0,a=null),s=l=!1):(e[n][0]==DIFF_DELETE?l=!0:s=!0,a&&(i&&c&&s&&l||a.length<this.EditCost/2&&i+c+s+l==3)&&(e.splice(t[o-1],0,[DIFF_DELETE,a]),e[t[o-1]+1][0]=DIFF_INSERT,o--,a=null,i&&c?(s=l=!0,o=0):(o--,n=o>0?t[o-1]:-1,s=l=!1),r=!0)),n++;r&&this.cleanupMerge(e)},diff.prototype.cleanupMerge=function(e){e.push([DIFF_EQUAL,""]);for(var r=0,t=0,o=0,a="",n="",i;r<e.length;)switch(e[r][0]){case DIFF_INSERT:o++,n+=e[r][1],r++;break;case DIFF_DELETE:t++,a+=e[r][1],r++;break;case DIFF_EQUAL:t+o>1?(t!==0&&o!==0&&(i=this.commonPrefix(n,a),i!==0&&(r-t-o>0&&e[r-t-o-1][0]==DIFF_EQUAL?e[r-t-o-1][1]+=n.substring(0,i):(e.splice(0,0,[DIFF_EQUAL,n.substring(0,i)]),r++),n=n.substring(i),a=a.substring(i)),i=this.commonSuffix(n,a),i!==0&&(e[r][1]=n.substring(n.length-i)+e[r][1],n=n.substring(0,n.length-i),a=a.substring(0,a.length-i))),t===0?e.splice(r-o,t+o,[DIFF_INSERT,n]):o===0?e.splice(r-t,t+o,[DIFF_DELETE,a]):e.splice(r-t-o,t+o,[DIFF_DELETE,a],[DIFF_INSERT,n]),r=r-t-o+(t?1:0)+(o?1:0)+1):r!==0&&e[r-1][0]==DIFF_EQUAL?(e[r-1][1]+=e[r][1],e.splice(r,1)):r++,o=0,t=0,a="",n="";break}e[e.length-1][1]===""&&e.pop();var c=!1;for(r=1;r<e.length-1;)e[r-1][0]==DIFF_EQUAL&&e[r+1][0]==DIFF_EQUAL&&(e[r][1].substring(e[r][1].length-e[r-1][1].length)==e[r-1][1]?(e[r][1]=e[r-1][1]+e[r][1].substring(0,e[r][1].length-e[r-1][1].length),e[r+1][1]=e[r-1][1]+e[r+1][1],e.splice(r-1,1),c=!0):e[r][1].substring(0,e[r+1][1].length)==e[r+1][1]&&(e[r-1][1]+=e[r+1][1],e[r][1]=e[r][1].substring(e[r+1][1].length)+e[r+1][1],e.splice(r+1,1),c=!0)),r++;c&&this.cleanupMerge(e)},diff.prototype.xIndex=function(e,r){var t=0,o=0,a=0,n=0,i;for(i=0;i<e.length&&(e[i][0]!==DIFF_INSERT&&(t+=e[i][1].length),e[i][0]!==DIFF_DELETE&&(o+=e[i][1].length),!(t>r));i++)a=t,n=o;return e.length!=i&&e[i][0]===DIFF_DELETE?n:n+(r-a)},diff.prototype.prettyHtml=function(e){for(var r=[],t=/&/g,o=/</g,a=/>/g,n=/\n/g,i=0;i<e.length;i++){var c=e[i][0],s=e[i][1],l=s.replace(t,"&amp;").replace(o,"&lt;").replace(a,"&gt;").replace(n,"<br/>");switch(c){case DIFF_INSERT:r[i]="<ins>"+l+"</ins>";break;case DIFF_DELETE:r[i]="<del>"+l+"</del>";break;case DIFF_EQUAL:r[i]="<span>"+l+"</span>";break}}return r.join("")},diff.prototype.text1=function(e){for(var r=[],t=0;t<e.length;t++)e[t][0]!==DIFF_INSERT&&(r[t]=e[t][1]);return r.join("")},diff.prototype.text2=function(e){for(var r=[],t=0;t<e.length;t++)e[t][0]!==DIFF_DELETE&&(r[t]=e[t][1]);return r.join("")},diff.prototype.levenshtein=function(e){for(var r=0,t=0,o=0,a=0;a<e.length;a++){var n=e[a][0],i=e[a][1];switch(n){case DIFF_INSERT:t+=i.length;break;case DIFF_DELETE:o+=i.length;break;case DIFF_EQUAL:r+=Math.max(t,o),t=0,o=0;break}}return r+=Math.max(t,o),r},diff.prototype.toDelta=function(e){for(var r=[],t=0;t<e.length;t++)switch(e[t][0]){case DIFF_INSERT:r[t]="+"+encodeURI(e[t][1]);break;case DIFF_DELETE:r[t]="-"+e[t][1].length;break;case DIFF_EQUAL:r[t]="="+e[t][1].length;break}return r.join("	").replace(/%20/g," ")},diff.prototype.fromDelta=function(e,r){for(var t=[],o=0,a=0,n=r.split(/\t/g),i=0;i<n.length;i++){var c=n[i].substring(1);switch(n[i].charAt(0)){case"+":try{t[o++]=[DIFF_INSERT,decodeURI(c)]}catch{throw new Error("Illegal escape in diff_fromDelta: "+c)}break;case"-":case"=":var s=parseInt(c,10);if(isNaN(s)||s<0)throw new Error("Invalid number in diff_fromDelta: "+c);var l=e.substring(a,a+=s);n[i].charAt(0)=="="?t[o++]=[DIFF_EQUAL,l]:t[o++]=[DIFF_DELETE,l];break;default:if(n[i])throw new Error("Invalid diff operation in diff_fromDelta: "+n[i])}}if(a!=e.length)throw new Error("Delta length ("+a+") does not equal source text length ("+e.length+").");return t},commonjsGlobal.diff=diff,commonjsGlobal.DIFF_DELETE=DIFF_DELETE,commonjsGlobal.DIFF_INSERT=DIFF_INSERT,commonjsGlobal.DIFF_EQUAL=DIFF_EQUAL;var diff_1=diff,TextDiff=getDefaultExportFromCjs(diff_1),bundle={exports:{}};(function(module,exports){(function(r,t){module.exports=t()})(commonjsGlobal,()=>(()=>{var __webpack_modules__={"./src/EasyWebWorker.functions.ts":(__unused_webpack_module,exports,__webpack_require__)=>{eval(`

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createEasyWebWorker = void 0;
var EasyWebWorker_1 = __webpack_require__(/*! ./EasyWebWorker */ "./src/EasyWebWorker.ts");
var createEasyWebWorker = function createEasyWebWorker(source) {
  var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return new EasyWebWorker_1.EasyWebWorker(source, parameters);
};
exports.createEasyWebWorker = createEasyWebWorker;

//# sourceURL=webpack://easy-web-worker/./src/EasyWebWorker.functions.ts?`)},"./src/EasyWebWorker.ts":(__unused_webpack_module,exports,__webpack_require__)=>{eval(`

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EasyWebWorker = exports.createBlobWorker = void 0;
var EasyWebWorkerMessage_1 = __webpack_require__(/*! ./EasyWebWorkerMessage */ "./src/EasyWebWorkerMessage.ts");
var EasyWebWorkerFixtures_1 = __webpack_require__(/*! ./EasyWebWorkerFixtures */ "./src/EasyWebWorkerFixtures.ts");
var cancelable_promise_jq_1 = __webpack_require__(/*! cancelable-promise-jq */ "./node_modules/cancelable-promise-jq/lib/bundle.js");
var getImportScriptsTemplate = function getImportScriptsTemplate() {
  var scripts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  if (!scripts.length) return '';
  return "self.importScripts([\\"".concat(scripts.join('","'), "\\"]);");
};
var createBlobWorker = function createBlobWorker(source) {
  var imports = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var origin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
    _ref$primitiveParamet = _ref.primitiveParameters,
    primitiveParameters = _ref$primitiveParamet === void 0 ? [] : _ref$primitiveParamet;
  var contentCollection = Array.isArray(source) ? source : [source];
  var worker_content = "self.primitiveParameters=JSON.parse(\`".concat(JSON.stringify(primitiveParameters !== null && primitiveParameters !== void 0 ? primitiveParameters : []), "\`);").concat(getImportScriptsTemplate(imports)).concat((0, EasyWebWorkerFixtures_1.getWorkerTemplate)()).concat(contentCollection.map(function (content) {
    return "self.ew$=self.cw$(\\"".concat(origin, "\\");(").concat(content, ")(self.ew$, self);");
  }).join(''));
  return (window.URL || window.webkitURL).createObjectURL(new Blob([worker_content], {
    type: 'application/javascript'
  }));
};
exports.createBlobWorker = createBlobWorker;
/**
 * This is a class to create an EasyWebWorker
 * @template TPayload - Indicates if your WORKERS messages requires a parameter to be provided, NULL indicates they doesn't
 * @template TResult - Indicates if your WORKERS messages has a result... NULL indicates all you messages are Promise<void>
 * @param {EasyWebWorkerBody<TPayload, TResult> | EasyWebWorkerBody<TPayload, TResult>[]} workerBody -
 * this parameter should be a function or set of functions that will become the body of your Web-Worker
 * IMPORTANT!! all WORKERS content is gonna be transpiled on run time, so you can not use any variable, method of resource that weren't included into the WORKER.
 * the above the reason of why we are injecting all worker context into the MessageBody Callbacks, so,
 * you could easily identify what is on the context of your Worker.
 * @param {Partial<IWorkerConfig>} WorkerConfig - You could add extra configuration to your worker,
 * consult IWorkerConfig description to have more information
 * */
var EasyWebWorker = /*#__PURE__*/function () {
  function EasyWebWorker(
  /**
   * this parameter should be a function or set of functions that will become the body of your Web-Worker
   * IMPORTANT!! all WORKERS content is gonna be transpiled on run time, so you can not use any variable, method of resource that weren't included into the WORKER.
   * the above the reason of why we are injecting all worker context into the MessageBody Callbacks, so,
   * you could easily identify what is on the context of your Worker.
   */
  source) {
    var _this = this;
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$scripts = _ref2.scripts,
      scripts = _ref2$scripts === void 0 ? [] : _ref2$scripts,
      name = _ref2.name,
      _ref2$onWorkerError = _ref2.onWorkerError,
      onWorkerError = _ref2$onWorkerError === void 0 ? null : _ref2$onWorkerError,
      _ref2$url = _ref2.url,
      url = _ref2$url === void 0 ? null : _ref2$url,
      _ref2$maxWorkers = _ref2.maxWorkers,
      maxWorkers = _ref2$maxWorkers === void 0 ? 1 : _ref2$maxWorkers,
      _ref2$keepAlive = _ref2.keepAlive,
      _keepAlive = _ref2$keepAlive === void 0 ? null : _ref2$keepAlive,
      _ref2$terminationDela = _ref2.terminationDelay,
      terminationDelay = _ref2$terminationDela === void 0 ? 1000 : _ref2$terminationDela,
      _ref2$warmUpWorkers = _ref2.warmUpWorkers,
      _warmUpWorkers = _ref2$warmUpWorkers === void 0 ? null : _ref2$warmUpWorkers,
      primitiveParameters = _ref2.primitiveParameters,
      _ref2$origin = _ref2.origin,
      origin = _ref2$origin === void 0 ? '' : _ref2$origin;
    _classCallCheck(this, EasyWebWorker);
    this.source = source;
    this.maxWorkers = 1;
    this.workers = [];
    this.keepAlive = true;
    this.warmUpWorkers = false;
    this.terminationDelay = 1000;
    this.origin = '';
    this.primitiveParameters = [];
    /**
     * These where send to the worker but not yet resolved
     */
    this.messagesQueue = new Map();
    /**
     * This is the URL of the worker file
     */
    this.workerUrl = null;
    /**
     * This is the list of scripts that will be imported into the worker
     */
    this.scripts = [];
    this.warmUp = function () {
      if (!_this.warmUpWorkers) return;
      var maxWorkers = _this.maxWorkers;
      new Array(maxWorkers).fill(null).forEach(function () {
        return _this.getWorkerFromPool();
      });
    };
    this.fillWorkerMethods = function (worker) {
      worker.onmessage = function (event) {
        _this.executeMessageCallback(event);
      };
      /**
       * If not handled, the error will be thrown to the global scope
       */
      worker.onerror = function (reason) {
        if (!_this.onWorkerError) throw reason;
        _this.onWorkerError(reason);
      };
      return worker;
    };
    this.createNewWorker = function () {
      var worker = new Worker(_this.workerUrl, {
        name: function () {
          var length = _this.workers.length;
          if (length === 0) return _this.name;
          return "".concat(_this.name, "-").concat(length);
        }()
      });
      return _this.fillWorkerMethods(worker);
    };
    this.getWorkerFromPool = function () {
      var maxWorkers = _this.maxWorkers,
        messagesQueue = _this.messagesQueue;
      var messagesQueueSize = messagesQueue.size;
      // there are less workers than the maximum allowed, and there is messages in the queue
      if (!_this.workers.length || _this.workers.length < maxWorkers && messagesQueueSize) {
        var _worker = _this.createNewWorker();
        _this.workers.push(_worker);
        return _worker;
      }
      // rotate the worker
      var worker = _this.workers.shift();
      _this.workers.push(worker);
      return worker;
    };
    this.computeWorkerBaseSource = function () {
      var _ref3 = function () {
          var _a, _b;
          var isWorkerInstance = _this.source instanceof Worker;
          if (isWorkerInstance) {
            // static simgle workers instance
            _this.workers = [_this.fillWorkerMethods(_this.source)];
            return {
              isArrayOfWebWorkers: false,
              workerUrl: null
            };
          }
          var isUrlBase = typeof _this.source === 'string';
          var isFunctionTemplate = typeof _this.source === 'function';
          if (isUrlBase || isFunctionTemplate) {
            var _workerUrl = (_a = _this.workerUrl) !== null && _a !== void 0 ? _a : _this.getWorkerUrl();
            return {
              isArrayOfWebWorkers: false,
              workerUrl: _workerUrl
            };
          }
          var isArraySource = Array.isArray(_this.source);
          var isArrayOfFunctionsTemplates = isArraySource && typeof _this.source[0] === 'function';
          if (isArrayOfFunctionsTemplates) {
            var _workerUrl2 = (_b = _this.workerUrl) !== null && _b !== void 0 ? _b : _this.getWorkerUrl();
            return {
              isArrayOfWebWorkers: false,
              workerUrl: _workerUrl2
            };
          }
          var isArrayOfWebWorkers = isArraySource && _this.source[0] instanceof Worker;
          if (isArrayOfWebWorkers) {
            // static workers collection
            _this.workers = _this.source.map(_this.fillWorkerMethods);
            return {
              isArrayOfWebWorkers: isArrayOfWebWorkers,
              workerUrl: null
            };
          }
          return {
            isArrayOfWebWorkers: false,
            workerUrl: null
          };
        }(),
        workerUrl = _ref3.workerUrl,
        isArrayOfWebWorkers = _ref3.isArrayOfWebWorkers;
      _this.workerUrl = workerUrl;
      _this.maxWorkers = isArrayOfWebWorkers ? _this.workers.length : _this.maxWorkers;
      // if the source is an array of web workers we need to keep them alive
      _this.keepAlive = isArrayOfWebWorkers ? true : _this.keepAlive;
    };
    /**
     * Send a message to the worker queue
     * @param {TPayload} payload - whatever json data you want to send to the worker
     * @returns {IMessagePromise<TResult>} generated defer that will be resolved when the message completed
     */
    this.send = function () {
      for (var _len = arguments.length, payload = new Array(_len), _key = 0; _key < _len; _key++) {
        payload[_key] = arguments[_key];
      }
      var $payload = payload[0];
      return _this.sendToWorker({
        payload: $payload
      });
    };
    this.sendToWorker = function (_ref4) {
      var payload = _ref4.payload,
        method = _ref4.method;
      var _a, _b;
      var message = new EasyWebWorkerMessage_1.EasyWebWorkerMessage();
      var messageId = message.messageId,
        decoupledPromise = message.decoupledPromise;
      var cancel = decoupledPromise.cancel;
      var worker = _this.getWorkerFromPool();
      decoupledPromise.promise.cancel = function (reason) {
        // restore the original cancel method so we can cancel the message when the worker response
        decoupledPromise.cancel = cancel;
        // if the message is canceled, we need to send a cancelation message to the worker,
        // once the worker response, the message will be removed from the queue nad the promise will be canceled in the main thread
        var data = {
          messageId: messageId,
          method: method,
          cancelation: {
            reason: reason
          }
        };
        // if the worker was disposed, we need to automatically reject the promise
        if (!_this.workers.length) {
          cancel(reason);
          return (0, cancelable_promise_jq_1.toCancelablePromise)(Promise.reject(reason));
        }
        worker.postMessage(data);
        return decoupledPromise.promise;
      };
      if (!_this.keepAlive) {
        (_b = (_a = decoupledPromise.promise) === null || _a === void 0 ? void 0 : _a["finally"]) === null || _b === void 0 ? void 0 : _b.call(_a, function () {
          setTimeout(function () {
            var messagesQueue = _this.messagesQueue;
            if (messagesQueue.size) return;
            _this.workers.forEach(function (worker) {
              return worker.terminate();
            });
            _this.workers = [];
          }, _this.terminationDelay);
        });
      }
      _this.addMessageToQueue(message);
      var data = {
        messageId: messageId,
        method: method,
        execution: {
          payload: payload
        }
      };
      worker.postMessage(data);
      return decoupledPromise.promise;
    };
    /**
     * This method terminate all current messages and send a new one to the worker queue
     * @param {TPayload} payload - whatever json data you want to send to the worker, should be serializable
     * @param {unknown} reason - reason why the worker was terminated
     * @returns {IMessagePromise<TResult>} generated defer that will be resolved when the message completed
     */
    this.override = function () {
      for (var _len2 = arguments.length, _ref5 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        _ref5[_key2] = arguments[_key2];
      }
      var payload = _ref5[0],
        reason = _ref5[1],
        config = _ref5[2];
      return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.cancelAll(reason, config);
            case 2:
              return _context.abrupt("return", this.send.apply(this, [payload]));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
    };
    /**
     * This method will alow the current message to be completed and send a new one to the worker queue after it, all the messages after the current one will be canceled
     * @param {TPayload} payload - whatever json data you want to send to the worker should be serializable
     * @param {unknown} reason - reason why the worker was terminated
     * @returns {IMessagePromise<TResult>} generated defer that will be resolved when the message completed
     */
    this.overrideAfterCurrent = function () {
      for (var _len3 = arguments.length, _ref6 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        _ref6[_key3] = arguments[_key3];
      }
      var payload = _ref6[0],
        reason = _ref6[1],
        config = _ref6[2];
      return __awaiter(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this$messagesQueue, firstItem, _firstItem, currentMessage;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!this.messagesQueue.size) {
                _context2.next = 7;
                break;
              }
              _this$messagesQueue = _slicedToArray(this.messagesQueue, 1), firstItem = _this$messagesQueue[0];
              _firstItem = _slicedToArray(firstItem, 2), currentMessage = _firstItem[1];
              this.RemoveMessageFromQueue(currentMessage.messageId);
              _context2.next = 6;
              return this.cancelAll(reason, config);
            case 6:
              this.addMessageToQueue(currentMessage);
            case 7:
              return _context2.abrupt("return", this.send.apply(this, [payload]));
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
    };
    var warmUpWorkers = !maxWorkers || maxWorkers === 1 ? true : _warmUpWorkers;
    var keepAlive = warmUpWorkers || (_keepAlive !== null && _keepAlive !== void 0 ? _keepAlive : false);
    this.name = name || (0, EasyWebWorkerFixtures_1.generatedId)();
    this.scripts = scripts;
    this.onWorkerError = onWorkerError;
    this.workerUrl = url !== null && url !== void 0 ? url : null;
    this.maxWorkers = maxWorkers;
    this.keepAlive = keepAlive;
    this.terminationDelay = terminationDelay;
    this.warmUpWorkers = warmUpWorkers;
    this.primitiveParameters = primitiveParameters !== null && primitiveParameters !== void 0 ? primitiveParameters : [];
    this.origin = origin;
    this.computeWorkerBaseSource();
    this.warmUp();
  }
  _createClass(EasyWebWorker, [{
    key: "worker",
    get:
    /**
     * @deprecated Directly modifying the worker may lead to unexpected behavior. Use it only if you know what you are doing.
     */
    function get() {
      return this.workers.length > 1 ? null : this.workers[0];
    }
  }, {
    key: "isExternalWorkerFile",
    get: function get() {
      return typeof this.source === 'string';
    }
  }, {
    key: "RemoveMessageFromQueue",
    value: function RemoveMessageFromQueue(messageId) {
      this.messagesQueue["delete"](messageId);
    }
    /**
     * Categorizes the worker response and executes the corresponding callback
     */
  }, {
    key: "executeMessageCallback",
    value: function executeMessageCallback(event) {
      var _a;
      var message = (_a = this.messagesQueue.get(event.data.messageId)) !== null && _a !== void 0 ? _a : null;
      if (!message) return;
      var progress = event.data.progress;
      // workers were disposed before the message was resolved
      if (!this.workers.length) {
        this.RemoveMessageFromQueue(message.messageId);
        return;
      }
      var decoupledPromise = message.decoupledPromise;
      // execute progress callback
      if (progress) {
        var percentage = progress.percentage,
          _payload = progress.payload;
        decoupledPromise.reportProgress(percentage, _payload);
        return;
      }
      // remove message from queue
      this.RemoveMessageFromQueue(message.messageId);
      var worker_canceled = event.data.worker_canceled;
      if (worker_canceled) {
        var reason = worker_canceled.reason;
        decoupledPromise.reject(reason);
        return;
      }
      var rejected = event.data.rejected;
      if (rejected) {
        var _reason = rejected.reason;
        decoupledPromise.reject(_reason);
        return;
      }
      var resolved = event.data.resolved;
      var payload = resolved.payload;
      // resolve message with the serialized payload
      decoupledPromise.resolve.apply(decoupledPromise, _toConsumableArray(payload !== null && payload !== void 0 ? payload : []));
    }
  }, {
    key: "getWorkerUrl",
    value: function getWorkerUrl() {
      var _a;
      if (this.isExternalWorkerFile) {
        return this.source;
      }
      return (0, exports.createBlobWorker)(this.source, this.scripts, (_a = this.origin) !== null && _a !== void 0 ? _a : '', {
        primitiveParameters: this.primitiveParameters
      });
    }
    /**
     * Execute the cancel callback of each message in the queue if provided
     * @param {unknown} reason - reason messages where canceled
     * @param {boolean} force - if true, the messages will be cancelled immediately without waiting for the worker to respond
     * This action will reboot the worker
     */
  }, {
    key: "cancelAll",
    value: function cancelAll(reason) {
      var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref7$force = _ref7.force,
        force = _ref7$force === void 0 ? false : _ref7$force;
      var messages = Array.from(this.messagesQueue.values());
      var total = messages.length;
      var percentage = 100 / total;
      if (force) {
        return this.reboot(reason);
      }
      var rejectedPromises = messages.map(function (message) {
        var decoupledPromise = message.decoupledPromise;
        var promise = decoupledPromise.promise;
        // promises are gonna be rejected so we need to wait until they are settled
        return promise.cancel(reason)["catch"](function (error) {
          promise.reportProgress(percentage, error);
          return error;
        });
      });
      return Promise.all(rejectedPromises);
    }
  }, {
    key: "addMessageToQueue",
    value: function addMessageToQueue(message) {
      this.messagesQueue.set(message.messageId, message);
    }
    /**
     * Send a message to the worker queue to an specific method
     * @template TResult_ - result type of the message (if any)
     * @template TPayload_ - payload type of the message  (if any)
     * @param {string} method - method name
     * @param {TPayload} payload - whatever json data you want to send to the worker
     * @returns {IMessagePromise<TResult>} generated defer that will be resolved when the message completed
     */
  }, {
    key: "sendToMethod",
    value: function sendToMethod(method, payload) {
      return this.sendToWorker({
        method: method,
        payload: payload
      });
    }
    /**
     * This method will reboot the worker and cancel all the messages in the queue
     * @param {unknown} reason - reason why the worker will be restarted
     */
  }, {
    key: "reboot",
    value: function reboot() {
      var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Worker was rebooted';
      if (!this.workerUrl) {
        throw new Error('You can not reboot a worker that was created from a Worker Instance');
      }
      this.workers.forEach(function (worker) {
        return worker.terminate();
      });
      this.workers = [];
      // the messages need to be canceled before the worker is restarted to force an immediate rejection
      var resolutionPromises = this.cancelAll(reason);
      this.warmUp();
      return resolutionPromises;
    }
    /**
     * This method will remove the WebWorker and the BlobUrl
     */
  }, {
    key: "dispose",
    value: function dispose() {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.cancelAll(null);
            case 2:
              if (this.workerUrl) URL.revokeObjectURL(this.workerUrl);
              this.workers.forEach(function (worker) {
                return worker.terminate();
              });
              this.workers = [];
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
    }
  }]);
  return EasyWebWorker;
}();
exports.EasyWebWorker = EasyWebWorker;

//# sourceURL=webpack://easy-web-worker/./src/EasyWebWorker.ts?`)},"./src/EasyWebWorkerFixtures.ts":(__unused_webpack_module,exports)=>{eval(`

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getWorkerTemplate = exports.generatedId = void 0;
var generatedId = function generatedId() {
  return "".concat(new Date().getTime()).concat(Math.random().toString(36).substr(2, 9));
};
exports.generatedId = generatedId;
var getWorkerTemplate = function getWorkerTemplate() {
  var template = "self.cw$=a=>{const b=new Map(),c=new Map([['',()=>{throw\\"you didn't defined a message-callback, please assign a callback by calling IEasyWorkerInstance.onMessage\\"}]]),d=({messageId:e,payload:f,origin:g})=>{const h=new Set(),i=j=>{const{progress:k}=j;k||b.delete(e),self.postMessage({messageId:e,...j},g)},l=(...m)=>{i({resolved:{payload:m}})},n=o=>{i({rejected:{reason:o}})},p=q=>{[...h].forEach(r=>r(q)),i({worker_canceled:{reason:q}})},s=(t,u)=>{i({progress:{percentage:t,payload:u}})},v=w=>(h.add(w),()=>h.delete(w));return{payload:f,resolve:l,reject:n,cancel:p,onCancel:v,reportProgress:s}},x=(...y)=>{self.importScripts(...y)},z=(...A)=>{const[B,C]=A,D=typeof B==='string';if(D){const E=B,F=C;c.set(E,F);return;}const G=B;c.set('',G)},H=()=>{[...b.values()].forEach(I=>I.reject(new Error('worker closed')));self.close();};self.onmessage=J=>{const{data:K,origin:L}=J,{messageId:M,cancelation:N}=K;if(N){const{reason:O}=N,P=b.get(M);P.cancel(O);return;}const{method:Q,execution:R}=K,{payload:S}=R,T=d({messageId:M,payload:S,origin:a||L||undefined});b.set(M,T);const U=c.get(Q||'');U(T,J)};return{importScripts:x,onMessage:z,close:H}};";
  return template;
};
exports.getWorkerTemplate = getWorkerTemplate;

//# sourceURL=webpack://easy-web-worker/./src/EasyWebWorkerFixtures.ts?`)},"./src/EasyWebWorkerMessage.ts":(__unused_webpack_module,exports,__webpack_require__)=>{eval(`

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EasyWebWorkerMessage = void 0;
var cancelable_promise_jq_1 = __webpack_require__(/*! cancelable-promise-jq */ "./node_modules/cancelable-promise-jq/lib/bundle.js");
var EasyWebWorkerFixtures_1 = __webpack_require__(/*! ./EasyWebWorkerFixtures */ "./src/EasyWebWorkerFixtures.ts");
/**
 * This class represents a message that will be send to a worker
 */
var EasyWebWorkerMessage = /*#__PURE__*/_createClass(function EasyWebWorkerMessage() {
  _classCallCheck(this, EasyWebWorkerMessage);
  this.messageId = (0, EasyWebWorkerFixtures_1.generatedId)();
  this.decoupledPromise = (0, cancelable_promise_jq_1.createDecoupledPromise)();
});
exports.EasyWebWorkerMessage = EasyWebWorkerMessage;

//# sourceURL=webpack://easy-web-worker/./src/EasyWebWorkerMessage.ts?`)},"./src/StaticEasyWebWorker.ts":(__unused_webpack_module,exports)=>{eval(`

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.createStaticEasyWebWorker = exports.StaticEasyWebWorker = void 0;
/**
 * Constructor for the StaticEasyWebWorker
 * @param onMessageCallback - callback to be called when a message is received
 * @param targetOrigin - the target origin to be used when sending messages
 * @returns an instance of the StaticEasyWebWorker
 * */
exports.StaticEasyWebWorker = function (onMessageCallback) {
  var targetOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var createMessage = function createMessage(_ref) {
    var messageId = _ref.messageId,
      payload = _ref.payload,
      origin = _ref.origin;
    var cancelCallbacks = new Set();
    var postMessage = function postMessage(data) {
      var progress = data.progress;
      if (!progress) {
        /* If it's not a progress message means that the message is resolved | rejected | canceled */
        workerMessages["delete"](messageId);
      }
      self.postMessage(Object.assign({
        messageId: messageId
      }, data), origin);
    };
    var resolve = function resolve() {
      var result = Array.from(arguments);
      postMessage({
        resolved: {
          payload: result
        }
      });
    };
    var reject = function reject(reason) {
      postMessage({
        rejected: {
          reason: reason
        }
      });
    };
    var cancel = function cancel(reason) {
      var callbacks = _toConsumableArray(cancelCallbacks);
      callbacks.forEach(function (callback) {
        return callback(reason);
      });
      postMessage({
        canceled: {
          reason: reason
        }
      });
    };
    /* Returns a function that can be used to unsubscribe from the cancelation */
    var onCancel = function onCancel(callback) {
      cancelCallbacks.add(callback);
      return function () {
        return cancelCallbacks["delete"](callback);
      };
    };
    var reportProgress = function reportProgress(percentage, payload) {
      postMessage({
        progress: {
          percentage: percentage,
          payload: payload
        }
      });
    };
    return {
      payload: payload,
      resolve: resolve,
      reject: reject,
      cancel: cancel,
      onCancel: onCancel,
      reportProgress: reportProgress
    };
  };
  /**
   * This is the map that contains all the messages that are being processed by the worker
   */
  var workerMessages = new Map();
  /**
   * This is the map that contains all the callbacks that are being processed by the worker
   * */
  var workerCallbacks = new Map([['', function () {
    throw "you didn't defined a message-callback, please assign a callback by calling IEasyWorkerInstance.onMessage";
  }]]);
  var importScripts = function importScripts() {
    var _self;
    // @ts-ignore
    (_self = self).importScripts.apply(_self, arguments);
  };
  var close = function close() {
    /* should cancel all the promises of the main thread before closing the worker */
    var messages = _toConsumableArray(workerMessages.values());
    messages.forEach(function (message) {
      return message.reject(new Error('worker closed'));
    });
    self.close();
  };
  /**
   * This method is used to define the onMessage callback
   * @param {string} callbackKey - This is the key of the callback
   * @param {function} callback - This is the callback that will be executed when a message is received
   * @param {IEasyWebWorkerMessage} callback.message - This is the message that was received
   * @param {IEasyWebWorkerMessage} callback.message.messageId - This is the message id
   * @param {IEasyWebWorkerMessage} callback.message.payload - This are the parameters included in the message
   * @param {IEasyWebWorkerMessage} callback.message.reject - This method is used to reject the message from inside the worker
   * @param {IEasyWebWorkerMessage} callback.message.reportProgress - This method is used to report the progress of the message from inside the worker
   * @param {IEasyWebWorkerMessage} callback.message.resolve - This method is used to resolve the message from inside the worker
   * @param {MessageEvent} callback.event - This is the event that was received
   */
  var onMessage = function onMessage() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var param1 = args[0],
      param2 = args[1];
    var hasCustomCallbackKey = typeof param1 === 'string';
    if (hasCustomCallbackKey) {
      var callbackKey = param1;
      var _callback = param2;
      workerCallbacks.set(callbackKey, _callback);
      return;
    }
    var callback = param1;
    workerCallbacks.set('', callback);
  };
  /**
   * This is the onMessage callback that will be executed when a message is received
   */
  self.onmessage = function (event) {
    var data = event.data,
      origin = event.origin;
    var messageId = data.messageId,
      cancelation = data.cancelation;
    if (cancelation) {
      var reason = cancelation.reason;
      var _message = workerMessages.get(messageId);
      _message.cancel(reason);
      return;
    }
    var _event$data = event.data,
      method = _event$data.method,
      execution = _event$data.execution;
    var payload = execution.payload;
    var message = createMessage({
      messageId: messageId,
      payload: payload,
      origin: targetOrigin || origin || undefined
    });
    var callback = workerCallbacks.get(method || '');
    callback(message, event);
  };
  if (onMessageCallback) {
    onMessage(onMessageCallback);
  }
  this.importScripts = importScripts;
  // @ts-ignore
  this.close = close;
  // @ts-ignore
  this.onMessage = onMessage;
};
/**
 * This method is used to create a new instance of the easy static web worker
 */
var createStaticEasyWebWorker = function createStaticEasyWebWorker(onMessageCallback) {
  var targetOrigin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var worker = new exports.StaticEasyWebWorker(onMessageCallback, targetOrigin);
  return worker;
};
exports.createStaticEasyWebWorker = createStaticEasyWebWorker;

//# sourceURL=webpack://easy-web-worker/./src/StaticEasyWebWorker.ts?`)},"./src/index.ts":(__unused_webpack_module,exports,__webpack_require__)=>{eval(`

var __createBinding = void 0 && (void 0).__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __exportStar = void 0 && (void 0).__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var EasyWebWorker_1 = __webpack_require__(/*! ./EasyWebWorker */ "./src/EasyWebWorker.ts");
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function get() {
    return EasyWebWorker_1.EasyWebWorker;
  }
}));
__exportStar(__webpack_require__(/*! ./EasyWebWorker */ "./src/EasyWebWorker.ts"), exports);
__exportStar(__webpack_require__(/*! ./StaticEasyWebWorker */ "./src/StaticEasyWebWorker.ts"), exports);
__exportStar(__webpack_require__(/*! ./EasyWebWorker.functions */ "./src/EasyWebWorker.functions.ts"), exports);

//# sourceURL=webpack://easy-web-worker/./src/index.ts?`)},"./node_modules/cancelable-promise-jq/lib/bundle.js":function(module){eval(`/*! For license information please see bundle.js.LICENSE.txt */
!function(e,t){ true?module.exports=t():0}(this,(()=>(()=>{"use strict";var e={399:(e,t)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(){return o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},o.apply(this,arguments)}function i(e){var t="function"==typeof Map?new Map:void 0;return i=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return c(e,arguments,l(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,e)},i(e)}function c(e,t,r){return c=a()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&u(o,r.prototype),o},c.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CancelablePromise=void 0;var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(s,e);var t,i,c,f=(i=s,c=a(),function(){var e,t=l(i);if(c){var o=l(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)}(this,e)});function s(e){var t,r,i,c,a,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(c=f.call(this,(function(e,t){a=e,u=t}))).status="pending",c.cancelCallbacks=[],c.ownCancelCallbacks=[],c.onProgressCallbacks=[],c.subscribeToOwnCancelEvent=function(e){c.ownCancelCallbacks.push(e)},c.cancel=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if("pending"===c.status)return c.status="canceled",c.ownCancelCallbacks.forEach((function(t){return t(e)})),c.cancelCallbacks.forEach((function(t){return t(e)})),c.reject(e),c.cancelCallbacks=[],c.ownCancelCallbacks=[],n(c)},c.onCancel=function(e){return c.cancelCallbacks.push(e),n(c)},c.onProgress=function(e){return c.onProgressCallbacks.push(e),n(c)},c.reportProgress=function(e,t){return c.onProgressCallbacks.forEach((function(r){return r(e,t)})),n(c)},c.createChildPromise=function(){var e,t,r=new s((function(r,n,o){e=r,t=n}));return r.onProgressCallbacks=c.onProgressCallbacks,r.onCancel((function(e){c.cancel(e)})),{promise:r,resolve:e,reject:t}},c.resolve=a,c.reject=u,e((function(e){c.status="resolved",c.resolve(e)}),(function(e){c.status="rejected",c.reject(e)}),{cancel:function(e){return c.cancel(e)},onCancel:function(e){return c.subscribeToOwnCancelEvent(e),n(c)},onProgress:function(e){return c.onProgress(e)},reportProgress:function(e,t){c.reportProgress(e,t)}}),c.then=function(e,r){var i=c.createChildPromise(),a=i.promise,u=i.resolve,f=i.reject;return o((t=n(c),l(s.prototype)),"then",t).call(t,e,r).then(u,f),a},c.catch=function(e){var t=c.createChildPromise(),i=t.promise,a=t.resolve,u=t.reject;return o((r=n(c),l(s.prototype)),"catch",r).call(r,e).then(a,u),i},c.finally=function(e){var t=c.createChildPromise(),r=t.promise,a=t.resolve,u=t.reject;return o((i=n(c),l(s.prototype)),"finally",i).call(i,e).then(a,u),r},c}return t=s,Object.defineProperty(t,"prototype",{writable:!1}),t}(i(Promise));t.CancelablePromise=f,f.prototype.constructor=Promise},716:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.toCancelablePromise=t.isPromise=t.groupAsCancelablePromise=t.createDecoupledPromise=t.allSettledCancelable=void 0;var o=r(335),i=r(399);function c(){c=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof y?t:y,c=Object.create(i.prototype),a=new E(n||[]);return o(c,"_invoke",{value:O(e,r,a)}),c}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var h={};function y(){}function d(){}function v(){}var b={};f(b,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==t&&r.call(g,a)&&(b=g);var w=v.prototype=y.prototype=Object.create(b);function P(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function i(o,c,a,u){var l=p(e[o],e,c);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==n(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){i("next",e,a,u)}),(function(e){i("throw",e,a,u)})):t.resolve(s).then((function(e){f.value=e,a(f)}),(function(e){return i("throw",e,a,u)}))}u(l.arg)}var c;o(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){i(e,r,t,n)}))}return c=c?c.then(n,n):n()}})}function O(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=C(c,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function C(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,C(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:d,configurable:!0}),d.displayName=f(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,f(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},P(j.prototype),f(j.prototype,u,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var c=new j(s(t,r,n,o),i);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},P(w),f(w,l,"Generator"),f(w,a,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.createDecoupledPromise=function(){var e,t,r,n=new i.CancelablePromise((function(n,o,i){e=n,t=o,r=i}));return Object.assign(Object.assign({resolve:e,reject:t},r),{promise:n})};var u=function e(t){if(t instanceof i.CancelablePromise)return t;if("function"==typeof t)return e(t());if(!f(t))return new i.CancelablePromise((function(e){return e(t)}));var r,n,o=new i.CancelablePromise((function(e,o,i){r=e,n=o,t.then(r,n)}));return o.onCancel((function(e){n(e)})),o};t.toCancelablePromise=u;var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e.length)return null;var r,n=t.maxConcurrent,o=void 0===n?8:n,c=t.executeInOrder,l=void 0!==c&&c,f=t.beforeEachCallback,s=void 0===f?null:f,p=t.afterEachCallback,h=void 0===p?null:p,y=t.onQueueEmptyCallback,d=void 0===y?null:y,v=function(e){if(Array.isArray(e))return a(e)}(r=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),b=[];return new i.CancelablePromise((function(e,t,r){return function e(){if(v.length){var t=v.splice(0,o).map((function(e){var t="function"==typeof e?e():e;null==s||s();var n=u(t);return r.onCancel((function(){n.cancel()})),n.then((function(e){b.push(e),null==h||h(e)})),l?n.then((function(e){return e})):n}));return Promise.all(t).then((function(){return e()}))}}().then((function(){null==d||d(b),e(b)}))}))};t.groupAsCancelablePromise=l;var f=function(e){return Promise.resolve(e)===e};t.isPromise=f,t.allSettledCancelable=function(e){var t=[],r=e.map((function(e){var r=u(e);return t.push(r),(0,o.tryCatchPromise)((function(){return r})).then((function(e){return{error:e.error,result:e.result,promise:r}}))})),n=l(t);return new i.CancelablePromise((function(e,t,o){return i=void 0,a=void 0,u=void 0,l=c().mark((function t(){var i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.onCancel(n.cancel),t.next=3,Promise.all(r);case 3:i=t.sent,e(i);case 5:case"end":return t.stop()}}),t)})),new(u||(u=Promise))((function(e,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function n(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(r,n)}o((l=l.apply(i,a||[])).next())}));var i,a,u,l}))}},522:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(399);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}));var o=r(716);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}))},991:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(522);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}));var o=r(335);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}))},335:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(969);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}))},969:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(948);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}));var o=r(667);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}))},948:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tryCatchPromise=t.tryCatch=void 0;var n=r(522);t.tryCatch=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.defaultResult,n=void 0===r?null:r,o=t.exceptionHandlingType,i=void 0===o?"error":o;try{return{error:null,result:e()}}catch(e){return"ignore"!==i&&console[i](e),{error:e,result:n}}},t.tryCatchPromise=function(e,t){var r=t||{},o=r.defaultResult,i=void 0===o?null:o,c=r.exceptionHandlingType,a=void 0===c?"error":c,u=r.ignoreCancel,l=void 0===u||u,f=null,s=null,p=function(e){s=e,"ignore"!=a&&("canceled"===f.status&&l||console[a](s))};try{if(e instanceof n.CancelablePromise)return f=e,new Promise((function(e){f.then((function(e){return{error:null,result:e,promise:f}})).catch((function(e){return p(e),{error:e,result:i,promise:f}}))}));var h=e(),y=h instanceof n.CancelablePromise;return f=y?h:(0,n.toCancelablePromise)(h),new Promise((function(e){f.then((function(t){e({error:null,result:t,promise:f})})).catch((function(t){p(t),e({error:t,result:i,promise:f})}))}))}catch(e){return p(e),Promise.resolve({error:s,result:i,promise:f})}}},667:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})}},t={};return function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(991)})()));

//# sourceURL=webpack://easy-web-worker/./node_modules/cancelable-promise-jq/lib/bundle.js?`)}},__webpack_module_cache__={};function __webpack_require__(e){var r=__webpack_module_cache__[e];if(r!==void 0)return r.exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(t.exports,t,t.exports,__webpack_require__),t.exports}var __webpack_exports__=__webpack_require__("./src/index.ts");return __webpack_exports__})())})(bundle);var bundleExports=bundle.exports;const easyWorker=new bundleExports.StaticEasyWebWorker;easyWorker.onMessage("compare",e=>{const{input1:r,input2:t}=e.payload,o=new TextDiff,a=o.main(r,t),n=o.prettyHtml(a);e.resolve(n)})})();
