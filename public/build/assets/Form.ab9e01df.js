import{g as we}from"./debounce.6b661228.js";import{T as Se}from"./TextInput.83ee1644.js";import{C as _e}from"./CheckboxInput.23cc273a.js";import{T as Ae}from"./TextareaInput.00094c51.js";import{L as Ce}from"./LoadingButton.f1b29148.js";import{_ as xe,r as q,o as G,c as Y,a as g,t as O,d as W,n as R,w as ke,b as I,f as Pe,e as Te,h as Oe}from"./app.6deb0a5e.js";import"./InputError.3261d93a.js";var H={};const Ie=[["@vue-stripe/vue-stripe@4.4.4","E:\\raqmi plus\\tsms-vlastest"]],je="@vue-stripe/vue-stripe@4.4.4",Le="@vue-stripe/vue-stripe@4.4.4",Be=!1,Re="sha512-PgcVRcQ6TBtSBQS6yvzoH9kJpiCXZ6DamGZBBGNG5+4/UYsaDTLpyuP8xw0sqm0KQn69kRv2Uq17B6bsAp/LxQ==",De="/@vue-stripe/vue-stripe",$e={},Fe={type:"version",registry:!0,raw:"@vue-stripe/vue-stripe@4.4.4",name:"@vue-stripe/vue-stripe",escapedName:"@vue-stripe%2fvue-stripe",scope:"@vue-stripe",rawSpec:"4.4.4",saveSpec:null,fetchSpec:"4.4.4"},Ve=["/"],Ne="https://registry.npmjs.org/@vue-stripe/vue-stripe/-/vue-stripe-4.4.4.tgz",Ue="4.4.4",Me="E:\\raqmi plus\\tsms-vlastest",qe={name:"jofftiquez@gmail.com"},Ge={url:"https://github.com/vue-stripe/vue-stripe/issues"},He={"@stripe/stripe-js":"^1.13.2","vue-coerce-props":"^1.0.0"},ze="Stripe Checkout & Elements for Vue.js",Ye={"@babel/cli":"^7.7.5","@babel/core":"^7.7.5","@babel/plugin-proposal-export-default-from":"^7.7.4","@babel/plugin-proposal-optional-chaining":"^7.10.4","@babel/plugin-transform-runtime":"^7.7.5","@babel/preset-env":"^7.7.5","@babel/preset-es2015":"^7.0.0-beta.53","@babel/runtime":"^7.7.5","@rollup/plugin-node-resolve":"^6.0.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"^4.5.10","@vue/eslint-config-standard":"^5.1.2","babel-eslint":"^10.1.0","babel-minify":"^0.5.1","cross-env":"^6.0.3",eslint:"^6.8.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2",jest:"^24.9.0","lint-staged":"^9.5.0",rimraf:"^3.0.0",rollup:"^1.27.9","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-terser":"^5.1.3","rollup-plugin-uglify":"^6.0.3","rollup-plugin-vue":"^5.1.4","vue-template-compiler":"^2.6.11"},Qe={"pre-commit":"lint-staged"},Xe="https://github.com/vue-stripe/vue-stripe#readme",Ke=["vue","vuejs","stripe","checkout","payment"],We="MIT",Je="dist/index.js",Ze="dist",en="@vue-stripe/vue-stripe",nn={type:"git",url:"git+ssh://git@github.com/vue-stripe/vue-stripe.git"},tn={build:"rollup -c",lint:"vue-cli-service lint --fix",prebuild:"rimraf dist",test:"jest"},rn="typings/index.d.ts",on="4.4.4",sn={_args:Ie,_from:je,_id:Le,_inBundle:Be,_integrity:Re,_location:De,_phantomChildren:$e,_requested:Fe,_requiredBy:Ve,_resolved:Ne,_spec:Ue,_where:Me,author:qe,bugs:Ge,dependencies:He,description:ze,devDependencies:Ye,gitHooks:Qe,homepage:Xe,keywords:Ke,license:We,"lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},main:Je,module:Ze,name:en,repository:nn,scripts:tn,typings:rn,version:on};var pe;Object.defineProperty(H,"__esModule",{value:!0});var te="auto",an=["auto","bg","cs","da","de","el","en","en-GB","es","es-419","et","fi","fr","fr-CA","hu","id","it","ja","lt","lv","ms","mt","nb","nl","pl","pt","pt-BR","ro","ru","sk","sl","sv","tr","zh","zh-HK","zh-TW"],ln=["auto","book","donate","pay"],cn=["required","auto"],un={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},pn=sn.version,Q={name:"vue-stripe",version:pn,url:"https://vuestripe.com",partner_id:"pp_partner_IqtOXpBSuz0IE2"},dn={install:function(e,n){var t=n.pk,r=n.stripeAccount,s=n.apiVersion,u=n.locale,l=window.Stripe(t,{stripeAccount:r,apiVersion:s,locale:u});l.registerAppInfo(Q),e.prototype.$stripe=l}};function mn(e,n){return e(n={exports:{}},n.exports),n.exports}var hn=mn(function(e){var n=function(t){var r,s=Object.prototype,u=s.hasOwnProperty,l=typeof Symbol=="function"?Symbol:{},h=l.iterator||"@@iterator",w=l.asyncIterator||"@@asyncIterator",d=l.toStringTag||"@@toStringTag";function v(i,o,c,p){var a=o&&o.prototype instanceof F?o:F,E=Object.create(a.prototype),N=new ee(p||[]);return E._invoke=function(T,z,m){var A=f;return function(B,U){if(A===P)throw new Error("Generator is already running");if(A===j){if(B==="throw")throw U;return ae()}for(m.method=B,m.arg=U;;){var M=m.delegate;if(M){var k=se(M,m);if(k){if(k===b)continue;return k}}if(m.method==="next")m.sent=m._sent=m.arg;else if(m.method==="throw"){if(A===f)throw A=j,m.arg;m.dispatchException(m.arg)}else m.method==="return"&&m.abrupt("return",m.arg);A=P;var _=S(T,z,m);if(_.type==="normal"){if(A=m.done?j:$,_.arg===b)continue;return{value:_.arg,done:m.done}}_.type==="throw"&&(A=j,m.method="throw",m.arg=_.arg)}}}(i,c,N),E}function S(i,o,c){try{return{type:"normal",arg:i.call(o,c)}}catch(p){return{type:"throw",arg:p}}}t.wrap=v;var f="suspendedStart",$="suspendedYield",P="executing",j="completed",b={};function F(){}function L(){}function x(){}var y={};y[h]=function(){return this};var J=Object.getPrototypeOf,X=J&&J(J(ne([])));X&&X!==s&&u.call(X,h)&&(y=X);var V=x.prototype=F.prototype=Object.create(y);function ie(i){["next","throw","return"].forEach(function(o){i[o]=function(c){return this._invoke(o,c)}})}function K(i){var o;this._invoke=function(c,p){function a(){return new Promise(function(E,N){(function T(z,m,A,B){var U=S(i[z],i,m);if(U.type!=="throw"){var M=U.arg,k=M.value;return k&&typeof k=="object"&&u.call(k,"__await")?Promise.resolve(k.__await).then(function(_){T("next",_,A,B)},function(_){T("throw",_,A,B)}):Promise.resolve(k).then(function(_){M.value=_,A(M)},function(_){return T("throw",_,A,B)})}B(U.arg)})(c,p,E,N)})}return o=o?o.then(a,a):a()}}function se(i,o){var c=i.iterator[o.method];if(c===r){if(o.delegate=null,o.method==="throw"){if(i.iterator.return&&(o.method="return",o.arg=r,se(i,o),o.method==="throw"))return b;o.method="throw",o.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var p=S(c,i.iterator,o.arg);if(p.type==="throw")return o.method="throw",o.arg=p.arg,o.delegate=null,b;var a=p.arg;return a?a.done?(o[i.resultName]=a.value,o.next=i.nextLoc,o.method!=="return"&&(o.method="next",o.arg=r),o.delegate=null,b):a:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,b)}function Ee(i){var o={tryLoc:i[0]};1 in i&&(o.catchLoc=i[1]),2 in i&&(o.finallyLoc=i[2],o.afterLoc=i[3]),this.tryEntries.push(o)}function Z(i){var o=i.completion||{};o.type="normal",delete o.arg,i.completion=o}function ee(i){this.tryEntries=[{tryLoc:"root"}],i.forEach(Ee,this),this.reset(!0)}function ne(i){if(i){var o=i[h];if(o)return o.call(i);if(typeof i.next=="function")return i;if(!isNaN(i.length)){var c=-1,p=function a(){for(;++c<i.length;)if(u.call(i,c))return a.value=i[c],a.done=!1,a;return a.value=r,a.done=!0,a};return p.next=p}}return{next:ae}}function ae(){return{value:r,done:!0}}return L.prototype=V.constructor=x,x.constructor=L,x[d]=L.displayName="GeneratorFunction",t.isGeneratorFunction=function(i){var o=typeof i=="function"&&i.constructor;return!!o&&(o===L||(o.displayName||o.name)==="GeneratorFunction")},t.mark=function(i){return Object.setPrototypeOf?Object.setPrototypeOf(i,x):(i.__proto__=x,d in i||(i[d]="GeneratorFunction")),i.prototype=Object.create(V),i},t.awrap=function(i){return{__await:i}},ie(K.prototype),K.prototype[w]=function(){return this},t.AsyncIterator=K,t.async=function(i,o,c,p){var a=new K(v(i,o,c,p));return t.isGeneratorFunction(o)?a:a.next().then(function(E){return E.done?E.value:a.next()})},ie(V),V[d]="Generator",V[h]=function(){return this},V.toString=function(){return"[object Generator]"},t.keys=function(i){var o=[];for(var c in i)o.push(c);return o.reverse(),function p(){for(;o.length;){var a=o.pop();if(a in i)return p.value=a,p.done=!1,p}return p.done=!0,p}},t.values=ne,ee.prototype={constructor:ee,reset:function(i){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(Z),!i)for(var o in this)o.charAt(0)==="t"&&u.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=r)},stop:function(){this.done=!0;var i=this.tryEntries[0].completion;if(i.type==="throw")throw i.arg;return this.rval},dispatchException:function(i){if(this.done)throw i;var o=this;function c(z,m){return E.type="throw",E.arg=i,o.next=z,m&&(o.method="next",o.arg=r),!!m}for(var p=this.tryEntries.length-1;p>=0;--p){var a=this.tryEntries[p],E=a.completion;if(a.tryLoc==="root")return c("end");if(a.tryLoc<=this.prev){var N=u.call(a,"catchLoc"),T=u.call(a,"finallyLoc");if(N&&T){if(this.prev<a.catchLoc)return c(a.catchLoc,!0);if(this.prev<a.finallyLoc)return c(a.finallyLoc)}else if(N){if(this.prev<a.catchLoc)return c(a.catchLoc,!0)}else{if(!T)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return c(a.finallyLoc)}}}},abrupt:function(i,o){for(var c=this.tryEntries.length-1;c>=0;--c){var p=this.tryEntries[c];if(p.tryLoc<=this.prev&&u.call(p,"finallyLoc")&&this.prev<p.finallyLoc){var a=p;break}}a&&(i==="break"||i==="continue")&&a.tryLoc<=o&&o<=a.finallyLoc&&(a=null);var E=a?a.completion:{};return E.type=i,E.arg=o,a?(this.method="next",this.next=a.finallyLoc,b):this.complete(E)},complete:function(i,o){if(i.type==="throw")throw i.arg;return i.type==="break"||i.type==="continue"?this.next=i.arg:i.type==="return"?(this.rval=this.arg=i.arg,this.method="return",this.next="end"):i.type==="normal"&&o&&(this.next=o),b},finish:function(i){for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o];if(c.finallyLoc===i)return this.complete(c.completion,c.afterLoc),Z(c),b}},catch:function(i){for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o];if(c.tryLoc===i){var p=c.completion;if(p.type==="throw"){var a=p.arg;Z(c)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(i,o,c){return this.delegate={iterator:ne(i),resultName:o,nextLoc:c},this.method==="next"&&(this.arg=r),b}},t}(e.exports);try{regeneratorRuntime=n}catch{Function("r","regeneratorRuntime = r")(n)}}),C=hn;function de(e){return(de=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}var me,he="https://js.stripe.com/v3",fn=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,le="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",yn=function(){for(var e=document.querySelectorAll('script[src^="'.concat(he,'"]')),n=0;n<e.length;n++){var t=e[n];if(fn.test(t.src))return t}return null},gn=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",t=document.createElement("script");t.src="".concat(he).concat(n);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(t),t},vn=function(e,n){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.13.2",startTime:n})},re=null,bn=function(e){return re!==null?re:re=new Promise(function(n,t){if(typeof window<"u")if(window.Stripe&&e&&console.warn(le),window.Stripe)n(window.Stripe);else try{var r=yn();r&&e?console.warn(le):r||(r=gn(e)),r.addEventListener("load",function(){window.Stripe?n(window.Stripe):t(new Error("Stripe.js not available"))}),r.addEventListener("error",function(){t(new Error("Failed to load Stripe.js"))})}catch(s){return void t(s)}else n(null)})},En=function(e,n,t){if(e===null)return null;var r=e.apply(void 0,n);return vn(r,t),r},wn=function(e){var n=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(e),`
`);if(e===null||de(e)!=="object")throw new Error(n);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals=="boolean")return e;throw new Error(n)},fe=!1,D=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];fe=!0;var r=Date.now();return bn(me).then(function(s){return En(s,n,r)})};D.setLoadParameters=function(e){if(fe)throw new Error("You cannot change load parameters after calling loadStripe");me=wn(e)};/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */var Sn={beforeCreate:function(){var e=this.$options.props;e&&(this._$coertions=Object.keys(e).filter(function(n){return e[n].coerce}).map(function(n){return[n,e[n].coerce]}))},computed:{$coerced:function(){var e=this;return this._$coertions.reduce(function(n,t){var r=t[0],s=t[1];return n[r]=s.call(e,e.$props[r]),n},{})}}},_n={pk:{type:String,required:!0},mode:{type:String,validator:function(e){return["payment","subscription"].includes(e)}},lineItems:{type:Array,default:void 0},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(e){return ln.includes(e)}},billingAddressCollection:{type:String,default:"auto",validator:function(e){return cn.includes(e)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:te,coerce:function(e){return an.includes(e)?e:(console.warn("VueStripe Warning: '".concat(e,"' is not supported by Stripe yet. Falling back to default '").concat(te,"'.")),te)}},shippingAddressCollection:{type:Object,validator:function(e){return Object.prototype.hasOwnProperty.call(e,"allowedCountries")}},disableAdvancedFraudDetection:{type:Boolean},stripeOptions:{type:Object,default:null}},An={props:_n,mixins:[Sn],render:function(e){return e},methods:{redirectToCheckout:function(){var e,n,t;return C.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,this.$emit("loading",!0),this.disableAdvancedFraudDetection&&D.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},r.next=6,C.awrap(D(this.pk,e));case 6:if((n=r.sent).registerAppInfo(Q),!this.sessionId){r.next=11;break}return n.redirectToCheckout({sessionId:this.sessionId}),r.abrupt("return");case 11:if(!this.lineItems||!this.lineItems.length||this.mode){r.next=14;break}return console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"),r.abrupt("return");case 14:return t={billingAddressCollection:this.billingAddressCollection,cancelUrl:this.cancelUrl,clientReferenceId:this.clientReferenceId,customerEmail:this.customerEmail,items:this.items,lineItems:this.lineItems,locale:this.$coerced.locale,mode:this.mode,shippingAddressCollection:this.shippingAddressCollection,submitType:this.submitType,successUrl:this.successUrl},r.abrupt("return",n.redirectToCheckout(t));case 18:r.prev=18,r.t0=r.catch(0),console.error(r.t0),this.$emit("error",r.t0);case 22:case"end":return r.stop()}},null,this,[[0,18]])}}};function Cn(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var xn=Cn;function ce(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,r)}return t}function kn(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?ce(Object(t),!0).forEach(function(r){xn(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ce(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var Pn="card",Tn={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},tokenData:{type:Object,default:function(){return{}}},disableAdvancedFraudDetection:{type:Boolean},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return un}},value:{type:String,default:void 0},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(e){return["solid","default"].includes(e)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var e,n,t=this;return C.async(function(r){for(;;)switch(r.prev=r.next){case 0:return this.disableAdvancedFraudDetection&&D.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},n={classes:this.classes,style:this.elementStyle,value:this.value,hidePostalCode:this.hidePostalCode,iconStyle:this.iconStyle,hideIcon:this.hideIcon,disabled:this.disabled},r.next=5,C.awrap(D(this.pk,e));case 5:this.stripe=r.sent,this.stripe.registerAppInfo(Q),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(Pn,n),this.element.mount("#stripe-element-mount-point"),this.element.on("change",function(s){var u=document.getElementById("stripe-element-errors");s.error?u.textContent=s.error.message:u.textContent="",t.onChange(s)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(s){var u,l,h,w;return C.async(function(d){for(;;)switch(d.prev=d.next){case 0:return d.prev=0,t.$emit("loading",!0),s.preventDefault(),u=kn({},t.element),t.amount&&(u.amount=t.amount),d.next=7,C.awrap(t.stripe.createToken(u,t.tokenData));case 7:if(l=d.sent,h=l.token,!(w=l.error)){d.next=15;break}return document.getElementById("stripe-element-errors").textContent=w.message,t.$emit("error",w),d.abrupt("return");case 15:t.$emit("token",h),d.next=22;break;case 18:d.prev=18,d.t0=d.catch(0),console.error(d.t0),t.$emit("error",d.t0);case 22:return d.prev=22,t.$emit("loading",!1),d.finish(22);case 25:case"end":return d.stop()}},null,null,[[0,18,22,25]])});case 17:case"end":return r.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};function ye(e,n,t,r,s,u,l,h,w,d){typeof l!="boolean"&&(w=h,h=l,l=!1);const v=typeof t=="function"?t.options:t;let S;if(e&&e.render&&(v.render=e.render,v.staticRenderFns=e.staticRenderFns,v._compiled=!0,s&&(v.functional=!0)),r&&(v._scopeId=r),u?(S=function(f){(f=f||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(f=__VUE_SSR_CONTEXT__),n&&n.call(this,w(f)),f&&f._registeredComponents&&f._registeredComponents.add(u)},v._ssrRegister=S):n&&(S=l?function(f){n.call(this,d(f,this.$root.$options.shadowRoot))}:function(f){n.call(this,h(f))}),S)if(v.functional){const f=v.render;v.render=function($,P){return S.call(P),f($,P)}}else{const f=v.beforeCreate;v.beforeCreate=f?[].concat(f,S):[S]}return t}const On=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function ge(e){return(n,t)=>In(n,t)}let oe;const ue={};function In(e,n){const t=On?n.media||"default":e,r=ue[t]||(ue[t]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);let s=n.source;if(n.map&&(s+=`
/*# sourceURL=`+n.map.sources[0]+" */",s+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",n.media&&r.element.setAttribute("media",n.media),oe===void 0&&(oe=document.head||document.getElementsByTagName("head")[0]),oe.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(s),r.element.styleSheet.cssText=r.styles.filter(Boolean).join(`
`);else{const u=r.ids.size-1,l=document.createTextNode(s),h=r.element.childNodes;h[u]&&r.element.removeChild(h[u]),h.length?r.element.insertBefore(l,h[u]):r.element.appendChild(l)}}}const jn=Tn;var ve=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("form",{attrs:{id:"stripe-element-form"}},[n("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[n("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),n("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},Ln=[];ve._withStripped=!0;const Bn=function(e){e&&e("data-v-4dd8360e_0",{source:`





















































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement[data-v-4dd8360e] {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus[data-v-4dd8360e] {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid[data-v-4dd8360e] {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill[data-v-4dd8360e] {
  background-color: #fefde5 !important;
}
.hide[data-v-4dd8360e] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Card.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsPA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,aAAA;AACA",file:"Card.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-element-form">
      <div id="stripe-element-mount-point" />
      <slot name="stripe-element-errors">
        <div
          id="stripe-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  DEFAULT_ELEMENT_STYLE,
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'card';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    elementsOptions: {
      type: Object,
      default: () => ({}),
    },
    tokenData: {
      type: Object,
      default: () => ({}),
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
    // element specific options
    classes: {
      type: Object,
      default: () => ({}),
    },
    elementStyle: {
      type: Object,
      default: () => (DEFAULT_ELEMENT_STYLE),
    },
    value: {
      type: String,
      default: undefined,
    },
    hidePostalCode: Boolean,
    iconStyle: {
      type: String,
      default: 'default',
      validator: value => ['solid', 'default'].includes(value),
    },
    hideIcon: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
      card: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById('stripe-element-mount-point').innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) loadStripe.setLoadParameters({ advancedFraudSignals: false });

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };
    const createOptions = {
      classes: this.classes,
      style: this.elementStyle,
      value: this.value,
      hidePostalCode: this.hidePostalCode,
      iconStyle: this.iconStyle,
      hideIcon: this.hideIcon,
      disabled: this.disabled,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);
    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, createOptions);
    this.element.mount('#stripe-element-mount-point');

    this.element.on('change', (event) => {
      var displayError = document.getElementById('stripe-element-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async (event) => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const data = {
          ...this.element,
        };
        if (this.amount) data.amount = this.amount;
        const { token, error } = await this.stripe.createToken(data, this.tokenData);
        if (error) {
          const errorElement = document.getElementById('stripe-element-errors');
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        }
        this.$emit('token', token);
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn('This method will currently not work on iOS 13+ due to a system limitation.');
      this.element.focus();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element
     * @param {string} opts.classes.base The base class applied to the container. Defaults to StripeElement.
     * @param {string} opts.classes.complete The class name to apply when the Element is complete. Defaults to StripeElement--complete.
     * @param {string} opts.classes.empty The class name to apply when the Element is empty. Defaults to StripeElement--empty.
     * @param {string} opts.classes.focus The class name to apply when the Element is focused. Defaults to StripeElement--focus.
     * @param {string} opts.classes.invalid The class name to apply when the Element is invalid. Defaults to StripeElement--invalid.
     * @param {string} opts.classes.webkitAutoFill The class name to apply when the Element has its value autofilled by the browser (only on Chrome and Safari). Defaults to StripeElement--webkit-autofill.
     * @param {Object} opts.style Customize the appearance of this element using CSS properties passed in a Style object.
     * @param {string} opts.value A pre-filled set of values to include in the input (e.g., {postalCode: '94110'}). Note that sensitive card information (card number, CVC, and expiration date) cannot be pre-filled
     * @param {boolean} opts.hidePostalCode Hide the postal code field. Default is false. If you are already collecting a full billing address or postal code elsewhere, set this to true.
     * @param {string} opts.iconStyle Appearance of the icon in the Element. Either solid or default.
     * @param {boolean} opts.hideIcon Hides the icon in the Element. Default is false.
     * @param {boolean} opts.disabled Applies a disabled state to the Element such that user input is not accepted. Default is false.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

.hide {
  display: none;
}
</style>
`]},media:void 0})},Rn="data-v-4dd8360e",Dn=ye({render:ve,staticRenderFns:Ln},Bn,jn,Rn,!1,void 0,!1,ge,void 0,void 0);var $n="payment",Fn={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},elementsOptions:{type:Object,required:!0,default:function(){return{}}},confirmParams:{type:Object,required:!0,default:function(){return{}}},redirect:{type:String,default:"always"},createOptions:{type:Object,default:function(){return{}}},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},disableAdvancedFraudDetection:{type:Boolean}},data:function(){return{loading:!1,stripe:null,elements:null,element:null}},computed:{form:function(){return document.getElementById("stripe-payment-element-form")}},mounted:function(){var e,n=this;return C.async(function(t){for(;;)switch(t.prev=t.next){case 0:return this.disableAdvancedFraudDetection&&D.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},t.next=4,C.awrap(D(this.pk,e));case 4:this.stripe=t.sent,this.stripe.registerAppInfo(Q),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create($n,this.createOptions),this.element.mount("#stripe-payment-element-mount-point"),this.element.on("change",function(r){var s=document.getElementById("stripe-payment-element-errors");r.error?s.textContent=r.error.message:s.textContent="",n.onChange(r)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(r){var s,u;return C.async(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,n.$emit("loading",!0),r.preventDefault(),l.next=5,C.awrap(n.stripe.confirmPayment({elements:n.elements,confirmParams:n.confirmParams,redirect:n.redirect}));case 5:if(s=l.sent,!(u=s.error)){l.next=12;break}return document.getElementById("stripe-payment-element-errors").textContent=u.message,n.$emit("error",u),l.abrupt("return");case 12:l.next=18;break;case 14:l.prev=14,l.t0=l.catch(0),console.error(l.t0),n.$emit("error",l.t0);case 18:return l.prev=18,n.$emit("loading",!1),l.finish(18);case 21:case"end":return l.stop()}},null,null,[[0,14,18,21]])});case 16:case"end":return t.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},collapse:function(){this.element.collapse()},getElement:function(){this.element.getElement()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};const Vn=Fn;var be=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("form",{attrs:{id:"stripe-payment-element-form"}},[n("div",{attrs:{id:"stripe-payment-element-mount-point"}}),this._v(" "),this._t("stripe-payment-element-errors",[n("div",{attrs:{id:"stripe-payment-element-errors",role:"alert"}})]),this._v(" "),n("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},Nn=[];be._withStripped=!0;const Un=function(e){e&&e("data-v-3329b3f8_0",{source:`


































































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide[data-v-3329b3f8] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Payment.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmQA;;;EAGA;AACA;EACA,aAAA;AACA",file:"Payment.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-payment-element-form">
      <div id="stripe-payment-element-mount-point" />
      <slot name="stripe-payment-element-errors">
        <div
          id="stripe-payment-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'payment';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    elementsOptions: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    confirmParams: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    redirect: {
      type: String,
      default: 'always',
    },
    createOptions: {
      type: Object,
      default: () => ({}),
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-payment-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById(
    //     'stripe-payment-element-mount-point',
    //   ).innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) {
      loadStripe.setLoadParameters({ advancedFraudSignals: false });
    }

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);

    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, this.createOptions);
    this.element.mount('#stripe-payment-element-mount-point');

    this.element.on('change', event => {
      var displayError = document.getElementById(
        'stripe-payment-element-errors',
      );
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async event => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const { error } = await this.stripe.confirmPayment({
          elements: this.elements,
          confirmParams: this.confirmParams,
          redirect: this.redirect,
        });
        if (error) {
          const errorElement = document.getElementById(
            'stripe-payment-element-errors',
          );
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        }
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn(
        'This method will currently not work on iOS 13+ due to a system limitation.',
      );
      this.element.focus();
    },
    /**
     * Collapses the Payment Element into a row of payment method tabs
     * @return {void}
     */
    collapse () {
      this.element.collapse();
    },
    /**
     * Retrieves a previously created element
     */
    getElement () {
      this.element.getElement();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element. See official docs for more detail: https://site-admin.stripe.com/docs/js/elements_object/update_payment_element
     * @param {string} opts.business.name  Information about your business that will be displayed in the Payment Element. This information will be retrieved from the Stripe account if not provided.
     * @param {array} opts.paymentMethodOrder Sets order in which payment methods are displayed. Otherwise payment methods are ordered dynamically to optimize for conversion.
     * @param {string | Object} opts.fields.billingDetails The Payment Element automatically creates input fields to collect required billing information for some payment methods like SEPA debit. Specify 'never' to avoid collecting billing details in the Payment Element if you're collecting them outside of the Payment Element.
     * @param {string} opts.fields.billingDetails.name Specify 'never' to avoid collecting a name as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.email Specify 'never' to avoid collecting an email address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.phone Specify 'never' to avoid collecting a phone number as part of the billing details in the Payment Element.
     * @param {string | Object} opts.fields.billingDetails.address Specify 'never' to avoid collecting an address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line1 Specify 'never' to avoid collecting an address line1 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line2 Specify 'never' to avoid collecting an address line2 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.city Specify 'never' to avoid collecting an address city as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.state Specify 'never' to avoid collecting an address state as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.country Specify 'never' to avoid collecting an address country as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.postalCode Specify 'never' to avoid collecting an address postal code as part of the billing details in the Payment Element.
     * @param {string} opts.fields.terms The Payment Element automatically displays mandates or other legal agreements when required by the payment method, like SEPA debit. Specify 'never' to never show legal agreements.
     * @param {string} opts.fields.terms.auBecsDebit Specify 'never' to never show legal agreements for the BECS Debit payment method.
     * @param {string} opts.fields.terms.bancontact Specify 'never' to never show legal agreements for the Bancontact payment method.
     * @param {string} opts.fields.terms.card Specify 'never' to never show legal agreements for the credit card payment method.
     * @param {string} opts.fields.terms.ideal Specify 'never' to never show legal agreements for the iDEAL payment method.
     * @param {string} opts.fields.terms.sepaDebit Specify 'never' to never show legal agreements for the SEPA Debit payment method.
     * @param {string} opts.fields.terms.sofort Specify 'never' to never show legal agreements for the SOFORT payment method.
     * @param {string} opts.fields.terms.usBankAccount Specify 'never' to never show legal agreements for the US Bank accounts payment method.
     * @param {string} opts.wallets Specify 'never' to never show digital wallet payment methods like Apple Pay and Google Pay.
     * @param {string} opts.wallets.applePay Specify 'never' to never show the Apple Pay digital wallet payment method.
     * @param {string} opts.wallets.googlePay Specify 'never' to never show the Google Pay digital wallet payment method.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide {
  display: none;
}
</style>
`]},media:void 0})},Mn=ye({render:be,staticRenderFns:Nn},Un,Vn,"data-v-3329b3f8",!1,void 0,!1,ge,void 0,void 0);var qn={install:function(e,n){var t,r,s,u,l,h,w;return C.async(function(d){for(;;)switch(d.prev=d.next){case 0:t=n.pk,r=n.stripeAccount,s=n.apiVersion,u=n.locale,l=n.elementsOptions,(h=window.Stripe(t,{stripeAccount:r,apiVersion:s,locale:u})).registerAppInfo(Q),w=h.elements(l),e.prototype.$stripe=h,e.prototype.$stripeElements=w;case 6:case"end":return d.stop()}})}};H.StripeCheckout=An,pe=H.StripeElementCard=Dn,H.StripeElementPayment=Mn,H.StripeElementsPlugin=qn,H.StripePlugin=dn;const Gn={remember:"form",components:{CheckboxInput:_e,LoadingButton:Ce,TextInput:Se,TextareaInput:Ae,StripeElementCard:pe},props:{modal:Boolean,c:Object,icustomers:Array,amount:Number,oId:{default:!1}},data(){return{loading:!1,sending:!1,form:{date:null,reference:null,amount:null,gateway:null,received:null,order_id:null,customer_id:null,token:null,token_id:null,description:null},paid:0,errors:{},error:null,gateways:[],customers:[],references:[],orders:[],message:null,customer:null,publishableKey:null}},mounted(){this.customers=this.icustomers||[],this.references=[],this.oId?this.$axios.post(this.route("payments.order",this.oId)).then(({data:e})=>this.paid=e.reduce((n,t)=>n+parseFloat(t.amount),0)).then(()=>{this.amount&&(this.form.amount=this.$number(this.amount-this.paid)+"")}).catch(e=>console.log(e)):this.amount&&(this.form.amount=this.$number(this.amount)+""),this.form.date=new Date().toISOString().split("T")[0],console.log("date: "+this.form.date),this.gateways=this.$page.props.user.account.gateways.split(","),console.log("gateways: "+this.gateways),this.c&&(this.customers.push(this.c),this.form.customer_id=this.c.value,this.customer=this.c),this.$page.props.user.account.payu&&this.gateways.push("PayU"),this.$page.props.user.account.stripe&&(this.gateways.push("Stripe"),this.publishableKey=this.$page.props.user.account.stripe_key)},methods:{referenceChanged(e){this.reference=e||null,this.form.reference=e?e.value:null},customerChanged(e){this.customer=e||null,this.form.customer_id=e?e.value:null,this.references=[],this.$axios.get(`/orders/customer/${e.id}`).then(n=>{n.data.orders.forEach(t=>{console.log(t),this.references.push(t.reference)})}).catch(n=>console.log(n)),console.log(this.references)},searchCustomers(e,n){e&&(n(!0),this.searchingCustomers(n,e,this))},searchingCustomers:we((e,n,t)=>{fetch(t.route("ajax.customers")+"?search="+escape(n)).then(r=>{r.json().then(s=>t.customers=s),e(!1)})},350),submit(){this.sending=!0,this.form.gateway=="Stripe"&&!this.form.token_id?this.$refs.stripeCard.submit():this.$axios.post(this.route("payments.store"),this.form).then(e=>{this.sending=!1,e.data.success&&(e.data.payu&&(window.location.href=this.route("payu.request",e.data.id)),this.modal?this.$emit("close"):(this.form={date:new Date,reference:null,amount:null,gateway:null,received:null,order_id:null,customer_id:null,token:null,token_id:null,description:null},this.customer=null))}).catch(e=>{this.sending=!1,this.form.token=null,this.form.token_id=null,this.errors=e.response.data.errors,this.$page.props.flash.error=e.response.data.message,this.$nextTick(()=>{document.getElementById("page-contents").scrollTop=0})})},tokenCreated(e){this.form.token=e,this.form.token_id=e.id,this.submit()}}},Hn={class:"ltr:text-left rtl:text-right"},zn={key:0,class:"np flex justify-between items-center px-6 py-4 mb-4 bg-gray-100 border-b rounded-t"},Yn={class:"font-bold flex-1"},Qn={class:"flex items-center"},Xn=g("svg",{class:"fill-current text-black",xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 18 18"},[g("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})],-1),Kn=[Xn],Wn={class:"p-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},Jn={class:"ltr:pr-6 rtl:pl-6 pb-8 w-1/2"},Zn={class:"form-label",for:"customer_id"},et={key:0,class:"form-error"},nt={class:"ltr:pr-6 rtl:pl-6 pb-8 w-1/2"},tt={class:"form-label",for:"reference"},rt={class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},ot={class:"form-label",for:"gateway"},it={key:0,class:"form-error"},st={class:"px-8 pb-8 ltr:-mr-6 rtl:-ml-6 ltr:ml-0 rtl:mr-0 -mb-8 flex flex-wrap"},at={key:0,class:"w-full"},lt={for:"card-element"};function ct(e,n,t,r,s,u){var f,$,P,j,b,F,L,x;const l=q("text-input"),h=q("v-select"),w=q("textarea-input"),d=q("stripe-element-card"),v=q("checkbox-input"),S=q("loading-button");return G(),Y("div",{class:R(t.modal?"modal flex items-center w-full h-full":"")},[g("div",{class:R(t.modal?"bg-white w-full rounded shadow-lg max-w-2xl mx-auto my-auto animate zoomIn":"")},[g("div",Hn,[t.modal?(G(),Y("div",zn,[g("p",Yn,O(e.$t("add_x",{x:e.$tc("Payment")})),1),g("div",Qn,[g("a",{class:"modal-close cursor-pointer z-50",onClick:n[0]||(n[0]=y=>e.$emit("close"))},Kn)])])):W("",!0),g("div",{class:R(t.modal?"print":"")},[g("form",{onSubmit:n[9]||(n[9]=ke((...y)=>u.submit&&u.submit(...y),["prevent"])),autocomplete:"off"},[g("div",Wn,[I(l,{type:"date",label:e.$t("Date"),modelValue:s.form.date,"onUpdate:modelValue":n[1]||(n[1]=y=>s.form.date=y),pattern:"\\d{4}-\\d{2}-\\d{2}",errors:(f=s.errors)==null?void 0:f.date,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),g("div",Jn,[g("label",Zn,O(e.$tc("Customer")),1),I(h,{transition:"",modelValue:s.customer,"onUpdate:modelValue":n[2]||(n[2]=y=>s.customer=y),clearable:!1,options:s.customers,"input-id":"customer_id",onInput:u.customerChanged,onSearch:u.searchCustomers,dir:e.$user.account.direction,"onOption:selected":u.customerChanged,placeholder:e.$t("search_x",{x:e.$tc("Customer")}),class:R({error:(($=s.errors)==null?void 0:$.customer_id)&&s.errors.customer_id.length})},null,8,["modelValue","options","onInput","onSearch","dir","onOption:selected","placeholder","class"]),(P=s.errors)!=null&&P.customer_id?(G(),Y("div",et,O(s.errors.customer_id[0]),1)):W("",!0)]),g("div",nt,[g("label",tt,O(e.$tc("Reference")),1),I(h,{transition:"",modelValue:s.form.reference,"onUpdate:modelValue":n[3]||(n[3]=y=>s.form.reference=y),errors:(j=s.errors)==null?void 0:j.reference,clearable:!1,options:s.references,"input-id":"reference",onInput:u.referenceChanged,placeholder:e.$t("search_x",{x:e.$tc("Reference")}),class:R({error:((b=s.errors)==null?void 0:b.reference)&&s.errors.reference.length})},null,8,["modelValue","errors","options","onInput","placeholder","class"])]),I(l,{step:"0.01",type:"number",label:e.$t("Amount"),modelValue:s.form.amount,"onUpdate:modelValue":n[4]||(n[4]=y=>s.form.amount=y),errors:(F=s.errors)==null?void 0:F.amount,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full lg:w-1/2"},null,8,["label","modelValue","errors"]),g("div",rt,[g("label",ot,O(e.$t("Gateway")),1),I(h,{transition:"",clearable:!1,"input-id":"gateway",options:s.gateways,modelValue:s.form.gateway,"onUpdate:modelValue":n[5]||(n[5]=y=>s.form.gateway=y),dir:e.$user.account.direction,placeholder:e.$t("select_x",{x:e.$t("Gateway")}),class:R({error:s.errors.gateway&&s.errors.gateway.length})},null,8,["options","modelValue","dir","placeholder","class"]),(L=s.errors)!=null&&L.gateway?(G(),Y("div",it,O(s.errors.gateway[0]),1)):W("",!0)])]),g("div",st,[I(w,{label:e.$t("Description"),modelValue:s.form.description,"onUpdate:modelValue":n[6]||(n[6]=y=>s.form.description=y),errors:(x=s.errors)==null?void 0:x.description,class:"ltr:pr-6 rtl:pl-6 pb-8 w-full"},null,8,["label","modelValue","errors"]),s.form.gateway=="Stripe"?(G(),Y("div",at,[g("label",lt,O(e.$t("Credit or debit card")),1),I(d,{amount:t.amount,ref:"stripeCard",pk:s.publishableKey,onToken:u.tokenCreated,onLoading:n[7]||(n[7]=y=>s.loading=y),class:"stripe-card w-full mt-2 mb-6 pr-6"},null,8,["amount","pk","onToken"])])):s.form.gateway!="PayU"?(G(),Pe(v,{key:1,class:"mb-8",id:"received",checked:s.form.received,"onUpdate:checked":n[8]||(n[8]=y=>s.form.received=y),label:e.$t("I am receiving this amount")},null,8,["checked","label"])):W("",!0)]),g("div",{class:R([{"rounded-b":t.modal},"px-8 py-4 bg-gray-100 border-t border-gray-200 rounded-b-md flex justify-end items-center"])},[I(S,{loading:s.sending,class:"btn-gray",type:"submit"},{default:Te(()=>[Oe(O(e.$t("create_x",{x:e.$tc("Payment")})),1)]),_:1},8,["loading"])],2)],32)],2)])],2)],2)}const gt=xe(Gn,[["render",ct]]);export{gt as default};
