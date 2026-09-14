function e(e,t,i,o){var s,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(a<3?s(n):a>3?s(t,i,n):s(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;let a=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}};const n=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:r,defineProperty:l,getOwnPropertyDescriptor:c,getOwnPropertyNames:p,getOwnPropertySymbols:d,getPrototypeOf:h}=Object,u=globalThis,m=u.trustedTypes,g=m?m.emptyScript:"",f=u.reactiveElementPolyfillSupport,v=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?g:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!r(e,t),y={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=y){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&l(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const a=o?.call(this);s?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??y}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...p(e),...d(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),s=t.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=o;const a=s.fromAttribute(t,e.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,i,o=!1,s){if(void 0!==e){const a=this.constructor;if(!1===o&&(s=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??_)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:s},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==s||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[v("elementProperties")]=new Map,w[v("finalized")]=new Map,f?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,$=e=>e,k=x.trustedTypes,P=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,S="?"+D,M=`<${S}>`,T=document,R=()=>T.createComment(""),A=e=>null===e||"object"!=typeof e&&"function"!=typeof e,E=Array.isArray,H="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,L=/>/g,O=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,j=/"/g,I=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),U=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),q=new WeakMap,G=T.createTreeWalker(T,129);function V(e,t){if(!E(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==P?P.createHTML(t):t}const Y=(e,t)=>{const i=e.length-1,o=[];let s,a=2===t?"<svg>":3===t?"<math>":"",n=N;for(let t=0;t<i;t++){const i=e[t];let r,l,c=-1,p=0;for(;p<i.length&&(n.lastIndex=p,l=n.exec(i),null!==l);)p=n.lastIndex,n===N?"!--"===l[1]?n=z:void 0!==l[1]?n=L:void 0!==l[2]?(I.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=O):void 0!==l[3]&&(n=O):n===O?">"===l[0]?(n=s??N,c=-1):void 0===l[1]?c=-2:(c=n.lastIndex-l[2].length,r=l[1],n=void 0===l[3]?O:'"'===l[3]?j:W):n===j||n===W?n=O:n===z||n===L?n=N:(n=O,s=void 0);const d=n===O&&e[t+1].startsWith("/>")?" ":"";a+=n===N?i+M:c>=0?(o.push(r),i.slice(0,c)+C+i.slice(c)+D+d):i+D+(-2===c?t:d)}return[V(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class J{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,a=0;const n=e.length-1,r=this.parts,[l,c]=Y(e,t);if(this.el=J.createElement(l,i),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=G.nextNode())&&r.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(C)){const t=c[a++],i=o.getAttribute(e).split(D),n=/([.?@])?(.*)/.exec(t);r.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?ee:"?"===n[1]?te:"@"===n[1]?ie:X}),o.removeAttribute(e)}else e.startsWith(D)&&(r.push({type:6,index:s}),o.removeAttribute(e));if(I.test(o.tagName)){const e=o.textContent.split(D),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],R()),G.nextNode(),r.push({type:2,index:++s});o.append(e[t],R())}}}else if(8===o.nodeType)if(o.data===S)r.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(D,e+1));)r.push({type:7,index:s}),e+=D.length-1}s++}}static createElement(e,t){const i=T.createElement("template");return i.innerHTML=e,i}}function K(e,t,i=e,o){if(t===U)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const a=A(t)?void 0:t._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),void 0===a?s=void 0:(s=new a(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=K(e,s._$AS(e,t.values),s,o)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??T).importNode(t,!0);G.currentNode=o;let s=G.nextNode(),a=0,n=0,r=i[0];for(;void 0!==r;){if(a===r.index){let t;2===r.type?t=new Q(s,s.nextSibling,this,e):1===r.type?t=new r.ctor(s,r.name,r.strings,this,e):6===r.type&&(t=new oe(s,this,e)),this._$AV.push(t),r=i[++n]}a!==r?.index&&(s=G.nextNode(),a++)}return G.currentNode=T,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),A(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==U&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>E(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&A(this._$AH)?this._$AA.nextSibling.data=e:this.T(T.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Z(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new J(e)),t}k(e){E(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new Q(this.O(R()),this.O(R()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=$(e).nextSibling;$(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(e,t=this,i,o){const s=this.strings;let a=!1;if(void 0===s)e=K(this,e,t,0),a=!A(e)||e!==this._$AH&&e!==U,a&&(this._$AH=e);else{const o=e;let n,r;for(e=s[0],n=0;n<s.length-1;n++)r=K(this,o[i+n],t,n),r===U&&(r=this._$AH[n]),a||=!A(r)||r!==this._$AH[n],r===F?e=F:e!==F&&(e+=(r??"")+s[n+1]),this._$AH[n]=r}a&&!o&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class te extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class ie extends X{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??F)===U)return;const i=this._$AH,o=e===F&&i!==F||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==F&&(i===F||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}}const se=x.litHtmlPolyfillSupport;se?.(J,Q),(x.litHtmlVersions??=[]).push("3.3.3");const ae=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ne extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new Q(t.insertBefore(R(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return U}}ne._$litElement$=!0,ne.finalized=!0,ae.litElementHydrateSupport?.({LitElement:ne});const re=ae.litElementPolyfillSupport;re?.({LitElement:ne}),(ae.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:_},ce=(e=le,t,i)=>{const{kind:o,metadata:s}=i;let a=globalThis.litPropertyMetadata.get(s);if(void 0===a&&globalThis.litPropertyMetadata.set(s,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];t.call(this,i),this.requestUpdate(o,s,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function pe(e){return(t,i)=>"object"==typeof i?ce(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function de(e){return pe({...e,state:!0,attribute:!1})}const he=((e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new a(i,e,o)})`
  /* ──────────────────────────────────────────────────────────
     Default Token Layer (Standard Home Assistant Theme)
     ────────────────────────────────────────────────────────── */
  :host {
    display: block;
    --appliance-accent:         var(--primary-color, #00b4d8);

    /* Surfaces */
    --appliance-bg:             var(--ha-card-background, var(--card-background-color, var(--lovelace-background, #1e1e24)));
    --appliance-surface:        color-mix(in srgb, var(--primary-text-color, #000) 10%, var(--ha-card-background, var(--card-background-color, #fff)));
    --appliance-surface-hover:  color-mix(in srgb, var(--primary-text-color, #000) 18%, var(--appliance-surface));
    --appliance-border:         color-mix(in srgb, var(--primary-text-color, #000) 24%, transparent);

    /* Text */
    --appliance-text:           var(--primary-text-color, #ffffff);
    --appliance-text-2:         color-mix(in srgb, var(--primary-text-color, #000) 75%, transparent);
    --appliance-on-accent:      var(--text-primary-color, #ffffff);

    /* Active state */
    --appliance-active-bg:      color-mix(in srgb, var(--appliance-accent) 22%, var(--appliance-surface));
    --appliance-active-border:  color-mix(in srgb, var(--appliance-accent) 75%, transparent);
  }

  /* ──────────────────────────────────────────────────────────
     Material You Token Layer (Activated via Config)
     ────────────────────────────────────────────────────────── */
  :host([theme="material_you"]) {
    --appliance-accent:         var(--md-sys-color-primary, var(--primary-color, #00b4d8));

    --appliance-bg:             var(--md-sys-color-surface-variant, var(--md-sys-color-surface, var(--ha-card-background, var(--card-background-color, #1e1e24))));
    --appliance-surface:        var(--md-sys-color-surface, color-mix(in srgb, var(--primary-text-color, #000) 10%, var(--ha-card-background, var(--card-background-color, #fff))));
    --appliance-surface-hover:  color-mix(in srgb, var(--md-sys-color-on-surface, var(--appliance-text)) 18%, var(--appliance-surface));
    --appliance-border:         var(--md-sys-color-outline-variant, var(--md-sys-color-outline, color-mix(in srgb, var(--primary-text-color, #000) 24%, transparent)));

    /* Text */
    --appliance-text:           var(--md-sys-color-on-surface, var(--primary-text-color, #111111));
    --appliance-text-2:         var(--md-sys-color-on-surface-variant, color-mix(in srgb, var(--primary-text-color, #000) 75%, transparent));
    --appliance-on-accent:      var(--md-sys-color-on-primary, var(--text-primary-color, var(--appliance-bg)));

    /* Active state */
    --appliance-active-bg:      var(--md-sys-color-secondary-container, color-mix(in srgb, var(--appliance-accent) 22%, var(--appliance-surface)));
    --appliance-active-border:  var(--md-sys-color-secondary, color-mix(in srgb, var(--appliance-accent) 75%, transparent));
  }

  ha-card {
    background: var(--appliance-bg);
    border: 1px solid var(--appliance-border);
    border-radius: var(--ha-card-border-radius, 20px);
    padding: 20px 18px 16px;
    box-shadow: var(--ha-card-box-shadow, 0 4px 20px rgba(0, 0, 0, 0.15));
    box-sizing: border-box;
    font-family: var(--paper-font-body1_-_font-family, inherit);
    color: var(--appliance-text);
    overflow: hidden;
    position: relative;
    user-select: none;
  }

  /* ── Header ── */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  }
  .header-left {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
  }
  .title-row {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .header-icon {
    --mdc-icon-size: 24px;
    color: var(--appliance-accent);
    flex-shrink: 0;
  }
  .title {
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.2;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .subtitle {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--appliance-text-2);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  /* 40px Symmetrical Action Buttons */
  .collapse-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--appliance-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--appliance-surface);
    color: var(--appliance-text-2);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .collapse-btn:hover {
    background: var(--appliance-surface-hover);
    color: var(--appliance-text);
  }
  .collapse-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  .power-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--appliance-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--appliance-surface);
    color: var(--appliance-text);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .power-btn:hover:not(.disabled) {
    background: var(--appliance-surface-hover);
  }
  .power-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .power-btn.on {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    border-color: var(--appliance-accent);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 40%, transparent);
  }
  .power-btn ha-icon {
    --mdc-icon-size: 20px;
  }

  /* ── Material Design 3 Porthole & Drum Progress Ring ── */
  .porthole-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 14px 0 18px;
    position: relative;
    width: 100%;
  }
  .dial-flank {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 72px;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .dial-flank.runtime-flank,
  .dial-flank.phase-flank {
    cursor: default;
  }
  .dial-flank.disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
  .dial-flank-icon-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1.5px solid var(--appliance-border);
    background: var(--appliance-surface);
    color: var(--appliance-text-2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  .dial-flank-icon-btn ha-icon {
    --mdc-icon-size: 20px;
  }
  .dial-flank:hover:not(.disabled):not(.runtime-flank):not(.phase-flank) .dial-flank-icon-btn {
    background: var(--appliance-surface-hover);
    color: var(--appliance-text);
  }
  .dial-flank:active:not(.disabled):not(.runtime-flank):not(.phase-flank) .dial-flank-icon-btn {
    transform: scale(0.94);
  }
  .dial-flank-icon-btn.active {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    border-color: var(--appliance-accent);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 40%, transparent);
  }
  .dial-flank-label {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--appliance-text-2);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: 2px;
  }
  .dial-flank-status {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--appliance-text);
  }
  .dial-flank.active .dial-flank-status {
    color: var(--appliance-accent);
  }
  .porthole-ring-wrapper {
    position: relative;
    width: 164px;
    height: 164px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .porthole-svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
  .ring-track {
    fill: none;
    stroke: color-mix(in srgb, var(--appliance-border) 60%, transparent);
    stroke-width: 6;
  }
  .ring-progress {
    fill: none;
    stroke: var(--appliance-accent);
    stroke-width: 6;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .ring-progress.active {
    filter: drop-shadow(0 0 6px color-mix(in srgb, var(--appliance-accent) 60%, transparent));
  }
  .drum-porthole {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: var(--appliance-surface);
    border: 1.5px solid var(--appliance-border);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  /* Drum rotation baffles - mechanical wash animation without arrows */
  .drum-baffles {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    opacity: 0.12;
  }
  .drum-baffles.spinning {
    animation: drum-spin 2.5s linear infinite;
  }
  .drum-baffles.fast-spin {
    animation: drum-spin 0.7s linear infinite;
  }
  .drum-baffles::before,
  .drum-baffles::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 84%;
    background: var(--appliance-text-1);
    border-radius: 2px;
  }
  .drum-baffles::after {
    transform: rotate(60deg);
  }

  @keyframes drum-spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .porthole-content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6px;
  }
  .porthole-hero-time {
    font-size: 1.95rem;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: var(--appliance-text);
  }
  .porthole-phase {
    font-size: 0.74rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-top: 4px;
    color: var(--appliance-accent);
    padding: 2px 8px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--appliance-accent) 15%, transparent);
  }
  .porthole-submetrics {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--appliance-text-2);
    margin-top: 3px;
  }

  /* ── Cycle Action Buttons (Start, Pause, Cancel) ── */
  .cycle-actions-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 16px;
    width: 100%;
  }
  .action-btn {
    flex: 1;
    max-width: 120px;
    height: 42px;
    border-radius: 14px;
    border: 1px solid var(--appliance-border);
    background: var(--appliance-surface);
    color: var(--appliance-text);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }
  .action-btn:hover:not(.disabled) {
    background: var(--appliance-surface-hover);
    border-color: color-mix(in srgb, var(--appliance-text) 30%, transparent);
  }
  .action-btn.primary {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    border-color: var(--appliance-accent);
    box-shadow: 0 2px 10px color-mix(in srgb, var(--appliance-accent) 35%, transparent);
  }
  .action-btn.primary:hover:not(.disabled) {
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 50%, transparent);
  }
  .action-btn.cancel:hover:not(.disabled) {
    background: color-mix(in srgb, #ef4444 15%, var(--appliance-surface));
    color: #ef4444;
    border-color: #ef4444;
  }
  .action-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .action-btn ha-icon {
    --mdc-icon-size: 18px;
  }

  /* ── Wash Program, Temp, Spin & Delay Setting Tiles ── */
  .setting-tiles {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-bottom: 8px;
  }
  .setting-tile {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid var(--appliance-border);
    background: var(--appliance-surface);
    cursor: pointer;
    transition: all 0.18s ease;
    text-align: left;
    min-width: 0;
  }
  .setting-tile:hover:not(:disabled):not(.disabled) {
    background: var(--appliance-surface-hover);
    border-color: color-mix(in srgb, var(--appliance-accent) 40%, var(--appliance-border));
  }
  .setting-tile.active {
    background: var(--appliance-active-bg);
    border-color: var(--appliance-active-border);
  }
  .setting-tile:disabled, .setting-tile.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .setting-tile-label {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.68rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--appliance-text-2);
  }
  .setting-tile-label ha-icon {
    --mdc-icon-size: 13px;
    color: var(--appliance-text-2);
  }
  .setting-tile-value-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 6px;
  }
  .setting-tile-value {
    font-size: 0.92rem;
    font-weight: 800;
    color: var(--appliance-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .setting-tile-chevron {
    --mdc-icon-size: 14px;
    color: var(--appliance-text-2);
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }
  .setting-tile.active .setting-tile-chevron {
    transform: rotate(180deg);
    color: var(--appliance-accent);
  }

  /* ── Picker panel (setting options) ── */
  .picker-panel {
    margin-bottom: 12px;
    border-radius: 14px;
    background: var(--appliance-surface);
    border: 1px solid var(--appliance-border);
    padding: 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    animation: slideDown 0.15s ease;
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-4px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .picker-opt {
    padding: 8px 14px;
    border-radius: 16px;
    border: 1px solid var(--appliance-border);
    background: transparent;
    color: var(--appliance-text-2);
    font-size: 0.82rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s;
    outline: none;
  }
  .picker-opt:hover {
    background: var(--appliance-surface-hover);
    color: var(--appliance-text);
  }
  .picker-opt.sel {
    background: var(--appliance-active-bg);
    border-color: var(--appliance-active-border);
    color: var(--appliance-accent);
    font-weight: 700;
  }

  /* ── Section Dividers & Headers ── */
  .section-label {
    font-size: 0.74rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    color: var(--appliance-text-2);
    margin: 12px 0 6px 2px;
  }

  /* ── Segmented Selector Bar ── */
  .segmented-bar {
    display: flex;
    align-items: center;
    background: rgba(128, 128, 128, 0.08);
    border: 1px solid var(--appliance-border);
    border-radius: 16px;
    padding: 3px;
    gap: 3px;
    overflow-x: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    margin-bottom: 10px;
  }
  .segmented-bar::-webkit-scrollbar {
    display: none;
  }
  .segmented-bar.scrollable {
    justify-content: flex-start;
  }
  .segmented-bar.scrollable .segment-btn {
    flex: 0 0 auto;
    min-width: max-content;
    padding: 0 16px;
  }
  .segment-btn {
    flex: 1;
    min-width: 58px;
    height: 36px;
    border-radius: 11px;
    border: none;
    background: transparent;
    color: var(--appliance-text-2);
    font-size: 0.78rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    outline: none;
    padding: 0 8px;
  }
  .segment-btn:hover:not(.disabled) {
    background: rgba(128, 128, 128, 0.12);
    color: var(--appliance-text);
  }
  .segment-btn.active {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    font-weight: 700;
    box-shadow: 0 0 16px color-mix(in srgb, var(--appliance-accent) 55%, transparent),
                0 2px 8px color-mix(in srgb, var(--appliance-accent) 35%, transparent);
  }
  .segment-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  /* ── Auxiliary Chips Row ── */
  .chips-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 12px 0 6px;
  }
  .chip-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    border-radius: 18px;
    border: 1px solid var(--appliance-border);
    background: var(--appliance-surface);
    color: var(--appliance-text);
    font-size: 0.76rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none;
  }
  .chip-btn:hover:not(.disabled) {
    background: var(--appliance-surface-hover);
  }
  .chip-btn.active {
    background: var(--appliance-active-bg);
    color: var(--appliance-accent);
    border-color: var(--appliance-active-border);
  }
  .chip-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .chip-btn ha-icon {
    --mdc-icon-size: 16px;
  }

  /* ── Diagnostics & Telemetry Footer ── */
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 14px;
    padding-top: 10px;
    border-top: 1px solid var(--appliance-border);
    font-size: 0.73rem;
    font-weight: 600;
    color: var(--appliance-text-2);
    flex-wrap: wrap;
    text-align: center;
  }
  .footer-item {
    display: inline-flex;
    align-items: center;
    gap: 5px;
  }
  .footer-item ha-icon {
    --mdc-icon-size: 15px;
    color: var(--appliance-text-2);
  }
  .footer-item.interactive {
    cursor: pointer;
    transition: color 0.15s ease;
  }
  .footer-item.interactive:hover {
    color: var(--appliance-text);
  }
  .footer-item.interactive:hover ha-icon {
    color: var(--appliance-accent);
  }
  .footer-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    display: inline-block;
  }
  .footer-dot.green {
    background: #10b981;
  }
  .footer-dot.red {
    background: #ef4444;
  }
  .footer-dot.warning {
    background: #f59e0b;
  }

  /* ── Compact Card (Material You / Classic aligned with AC card) ── */
  .compact-card {
    background: var(--appliance-bg);
    border: 1px solid var(--appliance-border);
    border-radius: var(--ha-card-border-radius, 20px);
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 16px;
    cursor: pointer;
  }
  .compact-card.classic {
    border-radius: 16px;
  }
  .compact-card.classic .compact-icon-btn {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    border: 1px solid var(--appliance-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--appliance-surface);
    color: var(--appliance-text);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }
  .compact-card.classic .compact-icon-btn.on {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    border-color: var(--appliance-accent);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 40%, transparent);
  }
  .compact-card.classic .compact-action-btn {
    width: 38px;
    height: 38px;
    border-radius: 10px;
    border: 1px solid var(--appliance-border);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--appliance-surface);
    color: var(--appliance-text);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }
  .compact-card.classic .compact-value {
    font-size: 2.4rem;
    font-weight: 800;
    color: var(--appliance-text);
  }

  /* Google Home Compact */
  .compact-card.google-home {
    background: var(--appliance-bg);
    border-radius: 28px;
    border: none;
    box-shadow: none;
    padding: 16px;
  }
  .compact-card.google-home .compact-icon-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(128, 128, 128, 0.15);
    color: var(--appliance-text-2);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }
  .compact-card.google-home .compact-icon-btn.on {
    background: var(--appliance-active-bg);
    color: var(--appliance-accent);
    box-shadow: 0 0 14px color-mix(in srgb, var(--appliance-accent) 35%, transparent);
  }
  .compact-card.google-home .compact-action-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(128, 128, 128, 0.15);
    color: var(--appliance-text);
    transition: all 0.2s ease;
    flex-shrink: 0;
  }
  .compact-card.google-home .compact-value {
    font-size: 2.5rem;
    font-weight: 400;
    color: var(--appliance-text);
  }

  .compact-header {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .compact-title {
    font-size: 1rem;
    font-weight: 600;
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--appliance-text);
  }
  .compact-chevron {
    color: var(--appliance-text-2);
    opacity: 0.7;
    --mdc-icon-size: 22px;
  }
  .compact-center {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 52px;
  }
  .compact-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4px;
  }
  .compact-icon-btn:hover {
    background: var(--appliance-surface-hover);
  }
  .compact-icon-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .compact-action-btn:hover {
    background: var(--appliance-surface-hover);
  }
  .compact-action-btn:disabled,
  .compact-action-btn.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  .compact-subtitle {
    font-size: 0.82rem;
    font-weight: 500;
    color: var(--appliance-text-2);
    text-align: center;
  }

  /* ── Modifier Chips Row ── */
  /* ── Modifier Chips Layout ── */
  .modifiers-section {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 14px;
  }
  .modifiers-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .modifiers-subheading {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--appliance-text-2);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .modifiers-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: 100%;
  }
  .modifier-chip {
    flex: 1 1 calc(33.333% - 8px);
    min-width: 95px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 0 10px;
    border-radius: 12px;
    border: 1px solid var(--appliance-border);
    background: var(--appliance-surface);
    color: var(--appliance-text);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-sizing: border-box;
    text-align: center;
  }
  .modifier-chip:hover:not(.disabled) {
    background: var(--appliance-surface-hover);
    border-color: color-mix(in srgb, var(--appliance-accent) 40%, var(--appliance-border));
  }
  .modifier-chip.active {
    background: var(--appliance-active-bg);
    color: var(--appliance-accent);
    border-color: var(--appliance-active-border);
    box-shadow: 0 2px 8px color-mix(in srgb, var(--appliance-accent) 25%, transparent);
  }
  .modifier-chip.disabled {
    opacity: 0.38;
    cursor: not-allowed;
  }
  .modifier-chip ha-icon {
    --mdc-icon-size: 16px;
  }

  /* ──────────────────────────────────────────────────────────
     Google Home Full View
     ────────────────────────────────────────────────────────── */
  .gh-full-card {
    background: var(--appliance-bg);
    border-radius: 28px;
    border: none;
    box-shadow: none;
    padding: 16px;
    box-sizing: border-box;
  }
  .gh-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
  }
  .gh-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
  }
  .gh-icon {
    color: var(--appliance-text-2);
    --mdc-icon-size: 22px;
    flex-shrink: 0;
  }
  .gh-title {
    font-weight: 500;
    font-size: 1.05rem;
    color: var(--appliance-text-1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .gh-power-btn {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: var(--appliance-text-2);
    cursor: pointer;
    transition: 0.2s;
    outline: none;
    flex-shrink: 0;
  }
  .gh-power-btn:hover {
    background: rgba(128, 128, 128, 0.15);
  }
  .gh-power-btn.on {
    background: var(--appliance-active-bg, rgba(38, 166, 154, 0.2));
    color: var(--appliance-accent);
  }
  .gh-power-btn.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  /* ── M3 Open Circular Dial in Google Home View ── */
  .gh-full-card .drum-porthole {
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
  .gh-full-card .ring-track {
    stroke: color-mix(in srgb, var(--appliance-text) 10%, transparent);
    stroke-width: 6;
  }
  .gh-full-card .ring-progress {
    stroke: var(--appliance-accent);
    stroke-width: 6;
    stroke-linecap: round;
  }
  .gh-full-card .dial-flank-icon-btn {
    border: none;
    background: color-mix(in srgb, var(--appliance-text) 8%, transparent);
    color: var(--appliance-text-2);
    box-shadow: none;
  }
  .gh-full-card .dial-flank:hover:not(.disabled):not(.runtime-flank):not(.phase-flank) .dial-flank-icon-btn {
    background: color-mix(in srgb, var(--appliance-text) 16%, transparent);
    color: var(--appliance-text);
  }
  .gh-full-card .dial-flank-icon-btn.active {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 40%, transparent);
  }
  .gh-full-card .porthole-phase {
    border-radius: 12px;
    padding: 3px 10px;
    font-size: 0.74rem;
    letter-spacing: 0.04em;
    background: color-mix(in srgb, var(--appliance-accent) 18%, transparent);
    color: var(--appliance-accent);
  }
  .gh-full-card .porthole-hero-time {
    font-size: 2.1rem;
    font-weight: 500;
    color: var(--appliance-text);
  }
  .gh-full-card.is-off .porthole-hero-time {
    color: var(--appliance-text-2);
    opacity: 0.6;
  }
  .gh-full-card.is-off .dial-flank {
    opacity: 0.35;
    pointer-events: none;
  }
  .porthole-container.disabled {
    opacity: 0.7;
  }
  .porthole-container.disabled .dial-flank {
    opacity: 0.35;
    pointer-events: none;
  }
  .gh-action-row {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 28px;
    padding: 6px 0 20px 0;
  }
  .gh-action-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }
  .gh-action-circle {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--appliance-text) 8%, transparent);
    border: none;
    color: var(--appliance-text);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  .gh-action-circle:hover:not(.disabled) {
    background: color-mix(in srgb, var(--appliance-text) 16%, transparent);
    transform: translateY(-1px);
  }
  .gh-action-circle:active:not(.disabled) {
    transform: scale(0.94);
  }
  .gh-action-circle.primary {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 40%, transparent);
  }
  .gh-action-circle.active {
    background: var(--appliance-active-bg, color-mix(in srgb, var(--appliance-accent) 25%, transparent));
    color: var(--appliance-accent);
    border: 1.5px solid var(--appliance-accent);
  }
  .gh-action-circle.disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  .gh-action-circle ha-icon {
    --mdc-icon-size: 24px;
  }
  .gh-action-label {
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--appliance-text-2);
    letter-spacing: 0.02em;
    text-transform: capitalize;
  }
  .gh-circular-btn {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--appliance-text) 8%, transparent);
    border: none;
    color: var(--appliance-text);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
    gap: 2px;
  }
  .gh-circular-btn.primary {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    box-shadow: 0 4px 14px color-mix(in srgb, var(--appliance-accent) 40%, transparent);
  }
  .gh-circular-btn ha-icon {
    --mdc-icon-size: 24px;
  }
  .gh-circular-label {
    font-size: 0.68rem;
    font-weight: 600;
  }
  .gh-select-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding-bottom: 12px;
  }
  .gh-select-wrapper {
    flex: 1 1 calc(50% - 8px);
    min-width: 130px;
    position: relative;
  }
  .gh-select-wrapper.active {
    z-index: 100;
  }
  .gh-custom-select {
    width: 100%;
    background: rgba(128, 128, 128, 0.15);
    border-radius: 20px;
    border: none;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px 0 16px;
    color: var(--appliance-text-1);
    font-size: 0.92rem;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    user-select: none;
    box-sizing: border-box;
    transition: background 0.2s ease;
  }
  .gh-custom-select:hover:not(.disabled) {
    background: rgba(128, 128, 128, 0.22);
  }
  .gh-custom-select.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .gh-custom-select ha-icon {
    --mdc-icon-size: 18px;
    color: var(--appliance-text-2);
  }
  .gh-dropdown-menu {
    position: absolute;
    bottom: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--appliance-surface, #232328);
    border: 1px solid var(--appliance-border);
    border-radius: 18px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    max-height: 220px;
    overflow-y: auto;
    z-index: 1000;
    padding: 6px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .gh-dropdown-item {
    background: transparent;
    border: none;
    color: var(--appliance-text-1);
    font-size: 0.88rem;
    padding: 10px 14px;
    border-radius: 12px;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    transition: background 0.15s ease;
  }
  .gh-dropdown-item:hover {
    background: rgba(128, 128, 128, 0.15);
  }
  .gh-dropdown-item.active {
    background: color-mix(in srgb, var(--appliance-accent) 20%, transparent);
    color: var(--appliance-accent);
    font-weight: 600;
  }
`,ue={"Wash + Dry 2Hr":{allowedTemps:["Cold","30°C","40°C"],allowedSpins:["400 RPM","600 RPM","800 RPM","1000 RPM","1200 RPM"],allowedDryModes:["No Dry","Cupboard Dry","Iron Dry","Eco Dry","Gentle Dry","30 Minutes","1 Hour","1 Hour 30 Minutes","2 Hours"],supportsDry:!0,supportsSteam:!1,supportsPrewash:!1,supportsSoak:!1},"Wash + Dry 4Hr":{allowedTemps:["Cold","30°C","40°C"],allowedSpins:["400 RPM","600 RPM","800 RPM","1000 RPM","1200 RPM","1400 RPM"],allowedDryModes:["No Dry","Cupboard Dry","Iron Dry","Eco Dry","Gentle Dry","30 Minutes","1 Hour","1 Hour 30 Minutes","2 Hours","2 Hours 30 Minutes","3 Hours","3 Hours 30 Minutes","4 Hours","4 Hours 30 Minutes","5 Hours","5 Hours 30 Minutes","6 Hours"],supportsDry:!0,supportsSteam:!1,supportsPrewash:!1,supportsSoak:!1},"Steam & Dry":{allowedTemps:["Cold","30°C","40°C"],allowedSpins:["400 RPM","600 RPM","800 RPM","1000 RPM","1200 RPM","1400 RPM"],allowedDryModes:["No Dry","Cupboard Dry","Iron Dry","Eco Dry","Gentle Dry","30 Minutes","1 Hour","1 Hour 30 Minutes","2 Hours","2 Hours 30 Minutes","3 Hours","3 Hours 30 Minutes","4 Hours"],supportsDry:!0,supportsSteam:!0,supportsPrewash:!1,supportsSoak:!1},Refresh:{allowedTemps:["Cold"],allowedSpins:["No Spin"],allowedDryModes:["No Dry"],supportsDry:!1,supportsSteam:!0,supportsPrewash:!1,supportsSoak:!1,supportsExtraRinse:!1,supportsHotRinse:!1,supportsRinseHold:!1,supportsEco:!1},"Power Steam":{allowedTemps:["Cold","30°C","40°C"],allowedSpins:["No Spin","400 RPM","600 RPM","800 RPM"],allowedDryModes:["No Dry"],supportsDry:!1,supportsSteam:!0},"CradleWash®":{allowedTemps:["Cold","30°C","40°C"],allowedSpins:["No Spin","400 RPM","600 RPM"],allowedDryModes:["No Dry","Cradle Dry","30 Minutes","1 Hour"],supportsDry:!0,supportsSteam:!1,supportsPrewash:!1,supportsSoak:!1,supportsTimeSaver:!1},Wool:{allowedTemps:["Cold","30°C","40°C"],allowedSpins:["No Spin","400 RPM","600 RPM","800 RPM"],allowedDryModes:["No Dry","Gentle Dry","30 Minutes","1 Hour"],supportsDry:!0,supportsSteam:!1,supportsPrewash:!1,supportsSoak:!1,supportsTimeSaver:!1},Bulky:{allowedTemps:["Cold","40°C","60°C"],allowedSpins:["No Spin","400 RPM","600 RPM","800 RPM"],allowedDryModes:["No Dry","Cupboard Dry","30 Minutes","1 Hour","1 Hour 30 Minutes","2 Hours","2 Hours 30 Minutes","3 Hours","3 Hours 30 Minutes","4 Hours"],supportsDry:!0},"Baby Wear":{allowedTemps:["Cold","40°C","60°C"],allowedSpins:["No Spin","400 RPM","600 RPM","800 RPM"],allowedDryModes:["No Dry","Cupboard Dry","Iron Dry","30 Minutes","1 Hour","1 Hour 30 Minutes","2 Hours"],supportsDry:!0,supportsSteam:!0},"Anti-Allergen":{allowedTemps:["40°C","60°C","95°C"],allowedSpins:["No Spin","400 RPM","600 RPM","800 RPM","1000 RPM"],allowedDryModes:["No Dry","Cupboard Dry","Iron Dry","30 Minutes","1 Hour","1 Hour 30 Minutes","2 Hours","2 Hours 30 Minutes","3 Hours"],supportsDry:!0,supportsSteam:!0},Synthetic:{allowedTemps:["Cold","30°C","40°C","60°C"],allowedSpins:["No Spin","400 RPM","600 RPM","800 RPM","1000 RPM","1200 RPM"],allowedDryModes:["No Dry","Cupboard Dry","Iron Dry","Gentle Dry","30 Minutes","1 Hour","1 Hour 30 Minutes","2 Hours"],supportsDry:!0},Cotton:{allowedTemps:["Cold","30°C","40°C","60°C","95°C"],allowedSpins:["No Spin","400 RPM","600 RPM","800 RPM","1000 RPM","1200 RPM","1400 RPM"],allowedDryModes:["No Dry","Cupboard Dry","Iron Dry","Eco Dry","30 Minutes","1 Hour","1 Hour 30 Minutes","2 Hours","2 Hours 30 Minutes","3 Hours","3 Hours 30 Minutes","4 Hours"],supportsDry:!0},"Mix / Daily":{allowedTemps:["Cold","30°C","40°C","60°C"],allowedSpins:["No Spin","400 RPM","600 RPM","800 RPM","1000 RPM","1200 RPM"],allowedDryModes:["No Dry","Cupboard Dry","Iron Dry","Eco Dry","30 Minutes","1 Hour","1 Hour 30 Minutes","2 Hours","2 Hours 30 Minutes","3 Hours"],supportsDry:!0},"Express 15'":{allowedTemps:["Cold","30°C","40°C"],allowedSpins:["No Spin","400 RPM","600 RPM","800 RPM","1000 RPM","1200 RPM"],allowedDryModes:["No Dry","30 Minutes"],supportsDry:!0,supportsPrewash:!1,supportsSoak:!1,supportsTimeSaver:!1},"Tub Clean":{allowedTemps:["Cold","60°C","95°C"],allowedSpins:["No Spin","400 RPM","600 RPM","800 RPM"],allowedDryModes:["No Dry"],supportsDry:!1,supportsSteam:!1,supportsPrewash:!1,supportsSoak:!1,supportsTimeSaver:!1,supportsExtraRinse:!1,supportsHotRinse:!1,supportsRinseHold:!1,supportsEco:!1,supportsAroma:!1,supportsAntiCrease:!1},"Spin Dry / Drain":{allowedTemps:["Cold"],allowedSpins:["No Spin","400 RPM","600 RPM","800 RPM","1000 RPM","1200 RPM","1400 RPM"],allowedDryModes:["No Dry"],supportsDry:!1,supportsSteam:!1,supportsPrewash:!1,supportsSoak:!1,supportsTimeSaver:!1,supportsExtraRinse:!1,supportsHotRinse:!1,supportsRinseHold:!1,supportsEco:!1,supportsAroma:!1,supportsAntiCrease:!1},"Rinse + Spin":{allowedTemps:["Cold"],allowedSpins:["No Spin","400 RPM","600 RPM","800 RPM","1000 RPM","1200 RPM","1400 RPM"],allowedDryModes:["No Dry"],supportsDry:!1,supportsSteam:!1,supportsPrewash:!1,supportsSoak:!1,supportsTimeSaver:!1,supportsExtraRinse:!0,supportsHotRinse:!1,supportsRinseHold:!0,supportsEco:!1,supportsAroma:!0,supportsAntiCrease:!0}},me={"Mix / Daily":72,Cotton:163,"Anti-Allergen":155,"Baby Wear":148,Synthetic:89,Bulky:85,Wool:50,"CradleWash®":48,"Express 15'":15,"Power Steam":105,Refresh:30,"Steam & Dry":210,"Wash + Dry 4Hr":240,"Wash + Dry 2Hr":120,"Tub Clean":90,"Spin Dry / Drain":16,"Rinse + Spin":28},ge={"Mix / Daily":"Everyday mixed colored cotton and synthetic garments (up to 4 kg). Nominal run time: 72 min.",Cotton:"Heavily soiled bedsheets, towels, jeans, shirts, whites, and colorfast linens. Nominal run time: 163 min.","Anti-Allergen":"Hot hygiene wash designed to neutralize house dust mites, pollen, pet dander, and bacterial spores. Nominal run time: 155 min.","Baby Wear":"Delicate yet hygienic wash for infant wear and soft fabrics. Nominal run time: 148 min.",Synthetic:"Non-iron garments made of polyester, nylon, acrylic, or blended synthetics. Nominal run time: 89 min.",Bulky:"Bulky single-item loads such as lightweight quilts, bedspreads, blankets, curtains, and bathrobes. Nominal run time: 85 min.",Wool:"Pure new wool garments labelled machine-washable. Nominal run time: 50 min.","CradleWash®":"Ultra-gentle cradle wash for silks, chiffons, delicate lace, and hand-wash-only garments. Nominal run time: 48 min.","Express 15'":"Rapid refresh cycle for lightly soiled workout clothes or just-worn shirts (up to 1.5 kg). Nominal run time: 15 min.","Power Steam":"Intensive wash with deep steam infusion to sanitize and loosen tough grime. Nominal run time: 105 min.",Refresh:"Non-washing steam refresh cycle to eliminate stale wardrobe odors, smoke, and creases without water wash. Nominal run time: 30 min.","Steam & Dry":"Continuous wash, steam deodorization, and condensing drying cycle. Nominal run time: 210 min.","Wash + Dry 4Hr":"Complete automatic wash and high-capacity condensation dry cycle. Nominal run time: 240 min.","Wash + Dry 2Hr":"Fast turnaround wash and dry cycle for small loads (up to 2 kg). Nominal run time: 120 min.","Tub Clean":"Special 90°C high-heat sanitation cycle to sterilize drum and flush detergent residue. Nominal run time: 90 min.","Spin Dry / Drain":"Drain machine water and spin dry without wash or rinse. Nominal run time: 16 min.","Rinse + Spin":"Rinse garments with clean water and high-speed spin without washing. Nominal run time: 28 min.","Pre-wash":"Adds a preliminary soak and pre-rinse before the main wash cycle to loosen heavy surface dirt.",Soak:"Introduces a standing drum soak with detergent water before agitation starts.",Steam:"Injects pure steam into the drum during the cycle to sanitize fabrics and soften creases.","Time Saver":"Reduces overall cycle time by accelerating agitation and heating for lightly soiled garments.",Eco:"Optimizes energy and water consumption by slightly lowering temperature and extending gentle mechanical action.","Extra Rinse":"Adds additional freshwater rinse cycles (up to 3) to thoroughly purge detergent residue.","Hot Rinse":"Executes final rinse with warm water to relax fabric fibers and accelerate subsequent spin extraction.","Rinse Hold":"Holds laundry in final rinse water without draining or spinning to prevent creasing until ready.",Aroma:"Dispenses fabric softener at the ideal thermal window to maximize fresh scent retention.","Anti-Crease":"Intermittently rotates drum after cycle completes to keep clothes unwrinkled until unloaded.","Child Lock":"Locks physical machine control panel buttons and dial to prevent accidental interference.","No Dry":"Washing only; condensation heater and dryer fan remain off.","Cupboard Dry":"Dries garments completely so they can be folded and stored directly into wardrobes.","Iron Dry":"Leaves a faint trace of residual moisture in fabrics for effortless steam ironing.","Eco Dry":"Low-energy condensing drying cycle using lower thermal temperatures for energy efficiency.","Gentle Dry":"Low-temperature gentle tumbling for temperature-sensitive delicate fabrics and synthetics.","Cradle Dry":"Ultra-gentle dry cycle exclusively calibrated for silks, wool, and delicate garments.","30 Minutes":"Timed condensation drying for 30 minutes.","1 Hour":"Timed condensation drying for 1 hour.","1 Hour 30 Minutes":"Timed condensation drying for 1 hour 30 minutes.","2 Hours":"Timed condensation drying for 2 hours.","2 Hours 30 Minutes":"Timed condensation drying for 2 hours 30 minutes.","3 Hours":"Timed condensation drying for 3 hours.","3 Hours 30 Minutes":"Timed condensation drying for 3 hours 30 minutes.","4 Hours":"Timed condensation drying for 4 hours.","4 Hours 30 Minutes":"Timed condensation drying for 4 hours 30 minutes.","5 Hours":"Timed condensation drying for 5 hours.","5 Hours 30 Minutes":"Timed condensation drying for 5 hours 30 minutes.","6 Hours":"Timed condensation drying for 6 hours."};class fe extends ne{constructor(){super(...arguments),this._expanded=!1,this._openPanel=null,this._ghDropdown=null,this._longPressTimer=null,this._isLongPress=!1,this._handleWindowClick=e=>{const t=e.composedPath();!this._ghDropdown&&!this._openPanel||t.includes(this)||(this._ghDropdown=null,this._openPanel=null)}}_handleTouchStart(e){this._isLongPress=!1,this._longPressTimer=setTimeout(()=>{this._isLongPress=!0,this._showToast(e),"undefined"!=typeof navigator&&navigator.vibrate&&navigator.vibrate(50)},500)}_handleTouchEnd(){this._longPressTimer&&(clearTimeout(this._longPressTimer),this._longPressTimer=null)}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._handleWindowClick)}disconnectedCallback(){window.removeEventListener("click",this._handleWindowClick),super.disconnectedCallback()}static get styles(){return he}setConfig(e){if(!e)throw new Error("Please define a valid configuration");this._config={theme:"default",layout:"default",...e}}updated(e){if(super.updated(e),e.has("_config")){const e=this._config?.theme||"default";"default"===e?this.removeAttribute("theme"):this.setAttribute("theme",e),this._config?.accent_color?this.style.setProperty("--appliance-accent",this._config.accent_color):this.style.removeProperty("--appliance-accent"),this._config?.main_color?this.style.setProperty("--appliance-bg",this._config.main_color):this.style.removeProperty("--appliance-bg")}}getCardSize(){return"compact"!==this._config?.layout||this._expanded?5:2}static getConfigForm(){return{schema:[{name:"entity",label:"Washing Machine Entity (Auto-Discovered if blank)",selector:{entity:{filter:[{domain:"switch"},{domain:"sensor"},{domain:"select"}]}}},{name:"name",label:"Custom Title (Auto-discovered if blank)",selector:{text:{}}},{name:"theme",label:"Theme",selector:{select:{options:[{label:"Default HA Theme",value:"default"},{label:"Material You (Optimized for Material 3 Theme)",value:"material_you"}]}}},{name:"layout",label:"Card Layout",selector:{select:{options:[{label:"Default (Full)",value:"default"},{label:"Compact (Expandable)",value:"compact"}]}}},{name:"full_layout",label:"Full View Style",selector:{select:{options:[{label:"Classic",value:"default"},{label:"Google Home",value:"google_home"}]}}},{name:"",type:"expandable",title:"Theming & Colors",icon:"mdi:palette",schema:[{name:"accent_color",label:"Accent Color Override",selector:{ui_color:{}}},{name:"main_color",label:"Background Color Override",selector:{ui_color:{}}}]},{name:"",type:"expandable",title:"Display Sensors (Auto-Discovered if blank)",icon:"mdi:thermometer",schema:[{name:"tub_temp_sensor",label:"Tub Temperature Sensor",selector:{entity:{domain:"sensor"}}},{name:"motor_speed_sensor",label:"Motor Speed Sensor",selector:{entity:{domain:"sensor"}}},{name:"time_remaining_sensor",label:"Time Remaining Sensor",selector:{entity:{domain:"sensor"}}},{name:"cycle_progress_sensor",label:"Cycle Progress Sensor",selector:{entity:{domain:"sensor"}}},{name:"door_locked_sensor",label:"Door Locked Sensor",selector:{entity:{domain:"binary_sensor"}}},{name:"machine_state_sensor",label:"Machine State Sensor",selector:{entity:{domain:"sensor"}}},{name:"program_duration_sensor",label:"Program Duration Sensor",selector:{entity:{domain:"sensor"}}}]},{name:"",type:"expandable",title:"Companion Controls (Auto-Discovered if blank)",icon:"mdi:toggle-switch-outline",schema:[{name:"power_switch",label:"Power Switch",selector:{entity:{domain:"switch"}}},{name:"program_select",label:"Program Select",selector:{entity:{domain:"select"}}},{name:"spin_select",label:"Spin Speed Select",selector:{entity:{domain:"select"}}},{name:"temperature_select",label:"Temperature Select",selector:{entity:{domain:"select"}}},{name:"delay_select",label:"Delay Start Select",selector:{entity:{domain:"select"}}},{name:"extra_rinse_select",label:"Extra Rinse Select",selector:{entity:{domain:"select"}}},{name:"dry_mode_select",label:"Dry Mode Select",selector:{entity:{domain:"select"}}},{name:"start_button",label:"Start Button",selector:{entity:{domain:"button"}}},{name:"pause_button",label:"Pause Button",selector:{entity:{domain:"button"}}},{name:"cancel_button",label:"Cancel Button",selector:{entity:{domain:"button"}}},{name:"child_lock_switch",label:"Child Lock Switch",selector:{entity:{domain:"switch"}}}]}]}}static getStubConfig(e,t,i){let o="";return t&&t.length&&(o=t.find(e=>e.includes("machine_state")||e.includes("washer"))||t[0]||""),!o&&i&&i.length&&(o=i.find(e=>e.includes("machine_state")||e.includes("washer"))||i[0]||""),!o&&e&&e.states&&(o=Object.keys(e.states).find(e=>e.startsWith("sensor.")&&e.endsWith("_machine_state"))||""),{type:"custom:ifb-washer-card",entity:o||void 0}}_haptic(e="light"){window.dispatchEvent(new CustomEvent("haptic",{detail:e}))}_showToast(e){this._haptic("warning"),this.dispatchEvent(new CustomEvent("hass-notification",{bubbles:!0,composed:!0,detail:{message:e}}))}_resolveStaticCapabilities(e){if(!e)return{};const t=e.toLowerCase().replace(/[^a-z0-9]/g,"");for(const[e,i]of Object.entries(ue)){const o=e.toLowerCase().replace(/[^a-z0-9]/g,"");if(o===t||o.includes(t)||t.includes(o))return i}return ue[e]||{}}_resolveEntities(){let e=this._config?.entity||"";const t=this._config||{};let i=t.power_switch,o=t.start_button,s=t.pause_button,a=t.cancel_button,n=t.program_select,r=t.program_sensor,l=t.spin_select,c=t.temperature_select,p=t.delay_select,d=t.child_lock_switch,h=t.machine_state_sensor,u=t.time_remaining_sensor,m=t.cycle_progress_sensor,g=t.tub_temp_sensor,f=t.motor_speed_sensor,v=t.door_locked_sensor,b=t.extra_rinse_select,_=t.dry_mode_select,y=t.prewash_switch,w=t.soak_switch,x=t.rinse_hold_switch,$=t.time_saver_switch,k=t.hot_rinse_switch,P=t.eco_switch,C=t.steam_switch,D=t.aroma_switch,S=t.anti_crease_switch,M="",T="";if(!e&&this.hass?.states){const t=Object.keys(this.hass.states),i=this.hass?.entities;e=i&&t.find(e=>"ifb_washer_local"===i[e]?.platform)||t.find(e=>e.startsWith("sensor.")&&(e.endsWith("_machine_state")||e.includes("washing_machine_machine_state")))||t.find(e=>e.startsWith("switch.")&&(e.includes("washing_machine")||e.includes("ifb_washer")))||t.find(e=>e.startsWith("select.")&&(e.includes("washing_machine")||e.includes("ifb_washer")))||t.find(e=>e.includes("ifb_washer")||e.includes("washing_machine"))||""}if(!(e||i||n||h))return{deviceId:"",power:i||"",start:o||"",pause:s||"",cancel:a||"",program:n||"",programSensor:r||"",spin:l||"",temp:c||"",delay:p||"",extraRinse:b||"",dryMode:_||"",prewash:y||"",soak:w||"",rinseHold:x||"",timeSaver:$||"",hotRinse:k||"",eco:P||"",steam:C||"",aroma:D||"",antiCrease:S||"",childLock:d||"",state:h||"",remaining:u||"",progress:m||"",tubTemp:g||"",rpm:f||"",door:v||"",problem:""};const R=this.hass?.entities;if(R&&e&&R[e]&&(T=R[e].device_id||"",T))for(const[e,t]of Object.entries(R)){if(t.device_id!==T)continue;const R=t.unique_id||"",A=t.translation_key||"";i||!R.endsWith("_power_switch")&&"power"!==A||(i=e),o||!R.endsWith("_start")&&"start"!==A||(o=e),s||!R.endsWith("_pause")&&"pause"!==A||(s=e),a||!R.endsWith("_cancel")&&"cancel"!==A||(a=e),n||!R.endsWith("_program_select")&&"program_select"!==A||(n=e),r||!R.endsWith("_program")&&"program"!==A||R.endsWith("_program_select")||R.endsWith("_program_duration")||(r=e),l||!R.endsWith("_spin_speed_select")&&"spin_speed_select"!==A||(l=e),c||!R.endsWith("_temperature_select")&&"temperature_select"!==A||(c=e),p||!R.endsWith("_delay_start_select")&&"delay_start_select"!==A||(p=e),b||!R.endsWith("_extra_rinse_select")&&!R.endsWith("_extra_rinse")&&"extra_rinse_select"!==A&&"extra_rinse"!==A||(b=e),_||!R.endsWith("_dry_mode_select")&&!R.endsWith("_dry_mode")&&"dry_mode_select"!==A&&"dry_mode"!==A||(_=e),y||!R.endsWith("_prewash")&&"prewash"!==A||(y=e),w||!R.endsWith("_soak")&&"soak"!==A||(w=e),x||!R.endsWith("_rinse_hold")&&"rinse_hold"!==A||(x=e),$||!R.endsWith("_time_saver")&&"time_saver"!==A||($=e),k||!R.endsWith("_hot_rinse")&&"hot_rinse"!==A||(k=e),P||!R.endsWith("_eco")&&"eco"!==A||(P=e),C||!R.endsWith("_steam")&&"steam"!==A||(C=e),D||!R.endsWith("_aroma")&&"aroma"!==A||(D=e),S||!R.endsWith("_anti_crease")&&"anti_crease"!==A||(S=e),d||!R.endsWith("_child_lock_switch")&&"child_lock_switch"!==A||(d=e),h||!R.endsWith("_state")&&"machine_state"!==A||(h=e),u||!R.endsWith("_time_remaining")&&"time_remaining"!==A||(u=e),m||!R.endsWith("_cycle_progress")&&"cycle_progress"!==A||(m=e),g||!R.endsWith("_tub_temperature")&&"tub_temperature"!==A||(g=e),f||!R.endsWith("_motor_rpm")&&"motor_rpm"!==A&&!R.endsWith("_motor_speed")||(f=e),v||!R.endsWith("_door_locked")&&"door_locked"!==A||(v=e),M||!R.endsWith("_problem")&&"problem"!==A||(M=e)}const A=["_power","_power_switch","_machine_state","_running","_time_remaining","_program_duration","_cycle_progress","_start","_pause","_cancel","_program_select","_program","_spin_speed_select","_temperature_select","_delay_start_select","_extra_rinse_select","_extra_rinse","_dry_mode_select","_dry_mode","_prewash","_soak","_rinse_hold","_time_saver","_hot_rinse","_eco","_steam","_aroma","_anti_crease","_child_lock_switch","_tub_temperature","_motor_speed","_door_locked"];let E=e.split(".")[1]||"";for(const e of A)if(E.endsWith(e)){E=E.substring(0,E.length-e.length);break}return{deviceId:T,power:i||(E?`switch.${E}_power`:""),start:o||(E?`button.${E}_start`:""),pause:s||(E?`button.${E}_pause`:""),cancel:a||(E?`button.${E}_cancel`:""),program:n||(E?`select.${E}_program_select`:""),programSensor:r||(E?`sensor.${E}_program`:""),spin:l||(E?`select.${E}_spin_speed_select`:""),temp:c||(E?`select.${E}_temperature_select`:""),delay:p||(E?`select.${E}_delay_start_select`:""),extraRinse:b||(E?`select.${E}_extra_rinse_select`:""),dryMode:_||(E?`select.${E}_dry_mode_select`:""),prewash:y||(E?`switch.${E}_prewash`:""),soak:w||(E?`switch.${E}_soak`:""),rinseHold:x||(E?`switch.${E}_rinse_hold`:""),timeSaver:$||(E?`switch.${E}_time_saver`:""),hotRinse:k||(E?`switch.${E}_hot_rinse`:""),eco:P||(E?`switch.${E}_eco`:""),steam:C||(E?`switch.${E}_steam`:""),aroma:D||(E?`switch.${E}_aroma`:""),antiCrease:S||(E?`switch.${E}_anti_crease`:""),childLock:d||(E?`switch.${E}_child_lock_switch`:""),state:h||(E?`sensor.${E}_machine_state`:""),remaining:u||(E?`sensor.${E}_time_remaining`:""),progress:m||(E?`sensor.${E}_cycle_progress`:""),tubTemp:g||(E?`sensor.${E}_tub_temperature`:""),rpm:f||(E?`sensor.${E}_motor_speed`:""),door:v||(E?`binary_sensor.${E}_door_locked`:""),problem:M||(E?`binary_sensor.${E}_problem`:"")}}_callService(e,t,i){this.hass&&this.hass.callService(e,t,i)}_togglePower(e,t){t?(this._haptic("medium"),this._callService("switch","toggle",{entity_id:e.power})):this._showToast("Device is offline")}_triggerButton(e,t,i){t?i?(this._haptic("light"),this._callService("button","press",{entity_id:e})):this._showToast("Turn on the washer to start cycle"):this._showToast("Device is offline")}_selectOption(e,t,i,o,s,a=!1){i?o?s&&a?this._showToast("Pause cycle to change wash program"):(this._haptic("selection"),this._callService("select","select_option",{entity_id:e,option:t})):this._showToast("Turn on the washer to adjust settings"):this._showToast("Device is offline")}_toggleChildLock(e,t,i){t?i?(this._haptic("medium"),this._callService("switch","toggle",{entity_id:e})):this._showToast("Turn on the washer to toggle child lock"):this._showToast("Device is offline")}_toggleSwitch(e,t,i){t?i?(this._haptic("medium"),this._callService("switch","toggle",{entity_id:e})):this._showToast("Turn on the washer to change options"):this._showToast("Device is offline")}_formatRemaining(e){if(!e||e<=0)return"00:00";const t=e%60;return`${Math.floor(e/60).toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}render(){if(!this.hass||!this._config)return F;const e=this._resolveEntities(),t=e.power?this.hass.states[e.power]:void 0,i=e.state?this.hass.states[e.state]:void 0,o=e.remaining?this.hass.states[e.remaining]:void 0,s=e.progress?this.hass.states[e.progress]:void 0,a=(e.programSensor?this.hass.states[e.programSensor]:void 0)||(e.program?this.hass.states[e.program]:void 0),n=e.spin?this.hass.states[e.spin]:void 0,r=e.temp?this.hass.states[e.temp]:void 0,l=e.delay?this.hass.states[e.delay]:void 0,c=e.childLock?this.hass.states[e.childLock]:void 0,p=e.tubTemp?this.hass.states[e.tubTemp]:void 0,d=e.rpm?this.hass.states[e.rpm]:void 0,h=e.door?this.hass.states[e.door]:void 0,u=e.problem?this.hass.states[e.problem]:void 0;if(!t&&!i&&!a){const e=this._config?.entity;return B`
        <ha-card class="ifb-washer-card">
          <div style="padding: 24px; text-align: center; color: var(--appliance-text-2, #8e8e93);">
            <ha-icon icon="mdi:washing-machine" style="--mdc-icon-size: 40px; margin-bottom: 8px; opacity: 0.6;"></ha-icon>
            <div style="font-weight: 500; font-size: 15px; color: var(--appliance-text-1, inherit);">IFB Washer Card</div>
            <div style="font-size: 13px; margin-top: 4px;">
              ${e?B`Washing Machine entity not found: <code>${e}</code>`:"No IFB Washer detected on your Home Assistant instance. Please select a washing machine entity in the card editor."}
            </div>
          </div>
        </ha-card>
      `}const m=Boolean(t&&"unavailable"!==t.state&&"unknown"!==t.state),g=m&&"on"===t?.state,f=i?.state||(g?"Standby":"Off"),v=g&&Boolean(!["Standby","Idle","Complete","Paused","Off","unknown","unavailable"].includes(f)),b=g&&"Paused"===f,_=g&&"Complete"===f,y=o&&parseInt(o.state,10)||0,w=s?Math.min(100,Math.max(0,parseFloat(s.state)||0)):0,x=a?.state||"",$=n?.state||"",k=r?.state||"",P=l?.state||"No Delay",C="on"===c?.state,D="off"===h?.state||!0===h?.attributes?.door_locked,S="on"===u?.state,M=p&&parseInt(p.state,10)||0,T=d&&parseInt(d.state,10)||0;let R="";if(e.deviceId){const t=this.hass?.devices?.[e.deviceId];if(t?.name_by_user)R=t.name_by_user;else if(t?.name){const e=t.name.match(/\(([^)]+)\)/);R=e&&!e[1].includes(".")?e[1]:t.model||t.name.replace(/^IFB\s+/i,"").replace(/\s*\([^)]*\)$/,"")}else t?.model&&(R=t.model)}if(!R&&t?.attributes?.friendly_name){const e=t.attributes.friendly_name.replace(/\s*Power$/i,""),i=e.match(/\(([^)]+)\)/);R=i&&!i[1].includes(".")?i[1]:e.replace(/^IFB\s+/i,"").replace(/\s*\([^)]*\)$/,"")}const A=this._config.name||R||"IFB Washing Machine";let E="Off";if(m){if(S)E="Error / Attention Required";else if(_)E="Cycle Complete";else if(g){const e=[x||f];k&&"None"!==k&&e.push(k),$&&"None"!==$&&e.push($),E=e.join(" • ")}}else E="Offline";const H=e.program?this.hass.states[e.program]:void 0,N=e.programSensor?this.hass.states[e.programSensor]:void 0,z=H?.attributes?.options||a?.attributes?.options||[],L=n?.attributes?.options||[],O=r?.attributes?.options||[],W=l?.attributes?.options||[],j=e.extraRinse?this.hass.states[e.extraRinse]:void 0,I=e.dryMode?this.hass.states[e.dryMode]:void 0,U=j?.state||"",q=I?.state||"",G=j?.attributes?.options||[],V=I?.attributes?.options||[],Y=N?.attributes||H?.attributes||{},J=this._resolveStaticCapabilities(x),K=Array.isArray(Y.allowed_temps)&&Y.allowed_temps.length>0?Y.allowed_temps:J.allowedTemps,Z=Array.isArray(Y.allowed_spins)&&Y.allowed_spins.length>0?Y.allowed_spins:J.allowedSpins,Q=Array.isArray(Y.allowed_dry_modes)&&Y.allowed_dry_modes.length>0?Y.allowed_dry_modes:J.allowedDryModes,X=Y.supports_dry??(Q?Q.length>1:J.supportsDry??!0),ee=Y.supports_steam??J.supportsSteam??!0,te=Y.supports_prewash??J.supportsPrewash??!0,ie=Y.supports_soak??J.supportsSoak??!0,oe=Y.supports_time_saver??J.supportsTimeSaver??!0,se=Y.supports_extra_rinse??J.supportsExtraRinse??!0,ae=""!==U&&"0 (None)"!==U&&"None"!==U,ne=(Y.supports_hot_rinse??J.supportsHotRinse??!0)&&ae,re=Y.supports_rinse_hold??J.supportsRinseHold??!0,le=Y.supports_eco??J.supportsEco??!0,ce=Y.supports_aroma??J.supportsAroma??!0,pe=Y.supports_anti_crease??J.supportsAntiCrease??!0,de=[{key:"prewash",label:"Pre-wash",icon:"mdi:water-plus",entityId:e.prewash,supported:te},{key:"soak",label:"Soak",icon:"mdi:timer-sand",entityId:e.soak,supported:ie},{key:"rinse_hold",label:"Rinse Hold",icon:"mdi:pause-circle-outline",entityId:e.rinseHold,supported:re},{key:"time_saver",label:"Time Saver",icon:"mdi:clock-fast",entityId:e.timeSaver,supported:oe},{key:"hot_rinse",label:"Hot Rinse",icon:"mdi:thermometer-water",entityId:e.hotRinse,supported:ne,blockedReason:ae?void 0:"Hot Rinse requires Extra Rinse to be selected"},{key:"eco",label:"Eco",icon:"mdi:leaf",entityId:e.eco,supported:le},{key:"steam",label:"Steam",icon:"mdi:weather-fog",entityId:e.steam,supported:ee},{key:"aroma",label:"Aroma",icon:"mdi:flower-tulip-outline",entityId:e.aroma,supported:ce},{key:"anti_crease",label:"Anti-Crease",icon:"mdi:iron",entityId:e.antiCrease,supported:pe}],he="compact"===this._config.layout;if(he&&!this._expanded)return this._renderCompactCard(e,A,m,g,v,b,f,y,w,x,$,k);const ue=K&&K.length>0?O.filter(e=>K.some(t=>e.toLowerCase().replace(/[^a-z0-9]/g,"")===t.toLowerCase().replace(/[^a-z0-9]/g,""))):O,me=Z&&Z.length>0?L.filter(e=>Z.some(t=>e.toLowerCase().replace(/[^a-z0-9]/g,"")===t.toLowerCase().replace(/[^a-z0-9]/g,""))):L,ge=Q&&Q.length>0&&V.length>0?V.filter(e=>Q.some(t=>e.toLowerCase().replace(/[^a-z0-9]/g,"")===t.toLowerCase().replace(/[^a-z0-9]/g,""))):Q&&Q.length>0?Q:V,fe=(ue.length>0?ue:K)||O,ve=(me.length>0?me:Z)||L,be=(ge.length>0?ge:Q)||(V.length>0?V:["No Dry"]);if("google_home"===this._config.full_layout)return this._renderGoogleHomeFull(e,A,g,m,v,b,_,f,y,w,x,$,k,P,C,D,S,M,T,z,ve,fe,W,U,G,se,q,be,X,de);const _e=2*Math.PI*70,ye=_e-w/100*_e;return B`
      <ha-card>
        <!-- Header -->
        <div class="header">
          <div class="header-left">
            <div class="title-row">
              <div class="title">${A}</div>
            </div>
            <div class="subtitle">${E}</div>
          </div>
          <div class="header-right">
            ${he?B`
                  <button
                    class="collapse-btn"
                    title="Collapse Card"
                    @click=${e=>{e.stopPropagation(),this._haptic("light"),this._expanded=!1}}
                  >
                    <ha-icon icon="mdi:chevron-up"></ha-icon>
                  </button>
                `:F}
            <button
              class="power-btn ${g?"on":""} ${m?"":"disabled"}"
              title="${m?g?"Turn Off":"Turn On":"Device is offline"}"
              @click=${()=>this._togglePower(e,m)}
            >
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        ${this._renderFullBody(e,m,g,v,b,_,f,y,w,70,_e,ye,x,$,k,P,C,D,S,M,T,z,ve,fe,W,U,G,se,q,be,X,de)}

        <!-- Diagnostics & Telemetry Footer -->
        <div class="footer">
          <div class="footer-item">
            <span class="footer-dot ${m?"green":"red"}"></span>
            <span>Local LAN</span>
          </div>
          •
          <div class="footer-item">
            <span class="footer-dot ${D?"red":"green"}"></span>
            <span>${D?"Door Locked":"Door Unlocked"}</span>
          </div>
          ${M>0?B`
                •
                <div class="footer-item">
                  <ha-icon icon="mdi:thermometer"></ha-icon>
                  <span>Tub: ${M}°C</span>
                </div>
              `:F}
          ${T>0?B`
                •
                <div class="footer-item">
                  <ha-icon icon="mdi:speedometer"></ha-icon>
                  <span>${T} RPM</span>
                </div>
              `:F}
        </div>
      </ha-card>
    `}_renderCompactCard(e,t,i,o,s,a,n,r,l,c,p,d){const h="google_home"===this._config.full_layout?"google-home":"classic",u=s?r>0?this._formatRemaining(r):`${l}%`:a?"Paused":o?"Standby":"Off";return B`
      <ha-card
        class="compact-card ${h}"
        @click=${()=>{this._haptic("selection"),this._expanded=!0}}
      >
        <div class="compact-header">
          <button
            class="compact-icon-btn ${o?"on":""} ${i?"":"disabled"}"
            title="${i?o?"Turn Off":"Turn On":"Device is offline"}"
            @click=${t=>{t.stopPropagation(),this._togglePower(e,i)}}
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="compact-title">${t}</div>
          <ha-icon class="compact-chevron" icon="mdi:chevron-right"></ha-icon>
        </div>

        <div class="compact-center">
          <div class="compact-value">${u}</div>
        </div>

        <div class="compact-footer">
          <button
            class="compact-action-btn ${s?"active":""} ${i&&o?"":"disabled"}"
            title="${s?"Pause Cycle":a?"Resume Cycle":"Start Cycle"}"
            @click=${t=>{t.stopPropagation(),s?this._triggerButton(e.pause,i,o):this._triggerButton(e.start,i,o)}}
          >
            <ha-icon icon="${s?"mdi:pause":"mdi:play"}"></ha-icon>
          </button>

          <div class="compact-subtitle" style="display: flex; flex-direction: column; align-items: center; justify-content: center; line-height: 1.2;">
            <div style="display: flex; align-items: center; gap: 8px;">
              ${d?B`
                    <span style="display: flex; align-items: center; gap: 3px;">
                      <ha-icon icon="mdi:thermometer" style="--mdc-icon-size: 13px;"></ha-icon>${d}
                    </span>
                  `:F}
              ${p?B`
                    <span style="display: flex; align-items: center; gap: 3px;">
                      <ha-icon icon="mdi:speedometer" style="--mdc-icon-size: 13px;"></ha-icon>${p}
                    </span>
                  `:F}
            </div>
            <div style="font-size: 0.75rem; opacity: 0.7; margin-top: 2px;">
              ${c||n}
            </div>
          </div>

          <button
            class="compact-action-btn ${i&&o&&(s||a)?"":"disabled"}"
            title="Cancel Cycle"
            @click=${t=>{t.stopPropagation(),this._triggerButton(e.cancel,i,o)}}
          >
            <ha-icon icon="mdi:stop"></ha-icon>
          </button>
        </div>
      </ha-card>
    `}_renderModifierChip(e,t,i,o){const s=e.entityId?this.hass.states[e.entityId]:void 0,a="on"===s?.state,n=e.supported,r=!!e.blockedReason,l=!t||!i||!n||r||o,c=ge[e.label]||ge[e.key]||"";let p=e.label;c&&(p+=` — ${c}`),t?i?o?p="Pause cycle to toggle modifiers":r?p=e.blockedReason:n||(p=`${e.label} is not supported by current program`):p="Turn on washer to toggle modifiers":p="Device is offline";const d=c||p;return B`
      <button
        class="modifier-chip ${a?"active":""} ${l?"disabled":""}"
        title="${p}"
        @touchstart=${()=>this._handleTouchStart(d)}
        @touchend=${()=>this._handleTouchEnd()}
        @touchcancel=${()=>this._handleTouchEnd()}
        @click=${s=>{if(this._isLongPress)return this._isLongPress=!1,s.preventDefault(),void s.stopPropagation();t?i?o?this._showToast("Pause cycle to toggle modifiers"):r?this._showToast(e.blockedReason):n?e.entityId&&this._toggleSwitch(e.entityId,t,i):this._showToast(`${e.label} is not supported by current program`):this._showToast("Turn on washer to toggle modifiers"):this._showToast("Device is offline")}}
      >
        <ha-icon icon="${e.icon}"></ha-icon>
        <span>${e.label}</span>
      </button>
    `}_renderModifiers(e,t,i,o){const s=e.filter(e=>!!e.entityId);if(0===s.length)return F;const a=["prewash","soak","steam","time_saver","eco"],n=s.filter(e=>a.includes(e.key)),r=s.filter(e=>!a.includes(e.key));return B`
      <div class="modifiers-section">
        ${n.length>0?B`
              <div class="modifiers-group">
                <div class="modifiers-subheading">Wash Options</div>
                <div class="modifiers-grid">
                  ${n.map(e=>this._renderModifierChip(e,t,i,o))}
                </div>
              </div>
            `:F}
        ${r.length>0?B`
              <div class="modifiers-group">
                <div class="modifiers-subheading">Finishing Options</div>
                <div class="modifiers-grid">
                  ${r.map(e=>this._renderModifierChip(e,t,i,o))}
                </div>
              </div>
            `:F}
      </div>
    `}_renderGoogleHomeFull(e,t,i,o,s,a,n,r,l,c,p,d,h,u,m,g,f,v,b,_,y,w,x,$,k,P,C,D,S,M){const T=e.program?this.hass.states[e.program]:void 0,R=T?.attributes?.program_duration||me[p]||0,A=s?"Phase":"Status",E=i?f?"Fault":a?"Paused":s?r:n?"Done":"Ready":"Off",H=i?f?"mdi:alert-circle-outline":n?"mdi:check-circle-outline":a?"mdi:pause-circle-outline":s?r.toLowerCase().includes("spin")?"mdi:sync":r.toLowerCase().includes("rinse")?"mdi:water-sync":r.toLowerCase().includes("dry")?"mdi:heat-wave":"mdi:washing-machine":"mdi:progress-clock":"mdi:power-off",N=s?this._formatRemaining(l):i?n?"Done":R>0?`${R} min`:"Standby":"Off",z=2*Math.PI*70,L=z-c/100*z,O=b>400,W=i?p||(i?"Select Program":""):"",j=(()=>{if(!i)return null;const e=[];return h&&"None"!==h&&"none"!==h&&e.push(h),s&&b>0?e.push(`${b} RPM`):d&&"None"!==d&&"none"!==d&&e.push(d),e.length>0?e.join(" • "):null})();return B`
      <ha-card class="gh-full-card ${i?"":"is-off"}">
        <!-- Header -->
        <div class="gh-header">
          <div class="gh-header-left">
            <div class="gh-title">${t}</div>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            ${"compact"===this._config.layout?B`
                  <button
                    class="gh-power-btn"
                    style="background: transparent; color: var(--appliance-text-2);"
                    title="Collapse card"
                    @click=${e=>{e.stopPropagation(),this._haptic("light"),this._expanded=!1}}
                  >
                    <ha-icon icon="mdi:chevron-up"></ha-icon>
                  </button>
                `:F}
            <button
              class="gh-power-btn ${i?"on":""} ${o?"":"disabled"}"
              title="${o?i?"Turn Off":"Turn On":"Device is offline"}"
              @click=${()=>this._togglePower(e,o)}
            >
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        <!-- M3 Porthole & Radial Progress Dial with Flanks -->
        <div class="porthole-container ${i?"":"disabled"}">
          <!-- Left Flank: Child Lock -->
          <div
            class="dial-flank child-lock-flank ${m?"active":""} ${o&&i?"":"disabled"}"
            title="${o?i?ge["Child Lock"]:"Turn on the washer to toggle child lock":"Device is offline"}"
            @touchstart=${()=>this._handleTouchStart(ge["Child Lock"])}
            @touchend=${()=>this._handleTouchEnd()}
            @touchcancel=${()=>this._handleTouchEnd()}
            @click=${t=>{if(this._isLongPress)return this._isLongPress=!1,t.preventDefault(),void t.stopPropagation();this._toggleChildLock(e.childLock,o,i)}}
          >
            <div class="dial-flank-icon-btn ${m?"active":""}">
              <ha-icon icon="${m?"mdi:lock":"mdi:lock-open-variant-outline"}"></ha-icon>
            </div>
            <span class="dial-flank-label">Child Lock</span>
            <span class="dial-flank-status">${m?"Locked":"Unlocked"}</span>
          </div>

          <!-- Center: Porthole Ring Wrapper -->
          <div class="porthole-ring-wrapper">
            <svg class="porthole-svg" viewBox="0 0 164 164">
              <circle class="ring-track" cx="82" cy="82" r="${70}" />
              ${s||n?B`
                    <circle
                      class="ring-progress"
                      cx="82"
                      cy="82"
                      r="${70}"
                      style="stroke-dasharray: ${z}; stroke-dashoffset: ${L};"
                    />
                  `:F}
            </svg>
            <div class="drum-porthole">
              ${s?B`<div class="drum-baffles ${O?"fast-spin":"spinning"}"></div>`:F}
              <div class="porthole-content">
                <div class="porthole-hero-time">
                  ${N}
                </div>
                ${i&&W?B`<div class="porthole-phase">${W}</div>`:F}
                ${j?B`
                      <div class="porthole-submetrics">
                        ${j}
                      </div>
                    `:F}
              </div>
            </div>
          </div>

          <!-- Right Flank: Cycle Phase / Status -->
          <div
            class="dial-flank phase-flank ${s?"active":""} ${o&&i?"":"disabled"}"
            title="Cycle status: ${E}"
          >
            <div class="dial-flank-icon-btn static ${s?"active":""}">
              <ha-icon icon="${H}"></ha-icon>
            </div>
            <span class="dial-flank-label">${A}</span>
            <span class="dial-flank-status">${E}</span>
          </div>
        </div>

        <!-- Action Row (M3 Circular Action Buttons with Clean Labels Below) -->
        <div class="gh-action-row">
          <div class="gh-action-col">
            <button
              class="gh-action-circle primary ${o&&i&&!s?"":"disabled"}"
              title="${o?i?s?"Cycle is already running":"Start Cycle":"Turn on the washer to start":"Device is offline"}"
              @click=${()=>this._triggerButton(e.start,o,i)}
            >
              <ha-icon icon="mdi:play"></ha-icon>
            </button>
            <span class="gh-action-label">${a?"Resume":"Start"}</span>
          </div>

          <div class="gh-action-col">
            <button
              class="gh-action-circle ${a?"active":""} ${o&&i&&s?"":"disabled"}"
              title="${o?i?s?"Pause Cycle":"No cycle currently running":"Turn on the washer":"Device is offline"}"
              @click=${()=>this._triggerButton(e.pause,o,i)}
            >
              <ha-icon icon="mdi:pause"></ha-icon>
            </button>
            <span class="gh-action-label">Pause</span>
          </div>

          <div class="gh-action-col">
            <button
              class="gh-action-circle ${o&&i&&(s||a)?"":"disabled"}"
              title="${o?i?s||a?"Cancel Cycle":"No active cycle to cancel":"Turn on the washer":"Device is offline"}"
              @click=${()=>this._triggerButton(e.cancel,o,i)}
            >
              <ha-icon icon="mdi:stop"></ha-icon>
            </button>
            <span class="gh-action-label">Cancel</span>
          </div>
        </div>

        <!-- Dropdowns for Program, Spin, Temp, Delay -->
        <div class="gh-select-container">
          <!-- Program Dropdown -->
          <div class="gh-select-wrapper ${"program"===this._ghDropdown?"active":""}">
            <button
              class="gh-custom-select ${o&&i?"":"disabled"}"
              @click=${e=>{e.stopPropagation(),o?i?(this._haptic("selection"),this._ghDropdown="program"===this._ghDropdown?null:"program"):this._showToast("Turn on the washer to adjust settings"):this._showToast("Device is offline")}}
            >
              <span>Program: ${p||"Select"}</span>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
            ${"program"===this._ghDropdown?B`
                  <div class="gh-dropdown-menu">
                    ${(_.length>0?_:["Mix / Daily","Cotton","Express 15","Tub Clean"]).map(t=>B`
                        <button
                          class="gh-dropdown-item ${p===t?"active":""}"
                          @click=${a=>{a.stopPropagation(),this._ghDropdown=null,this._selectOption(e.program,t,o,i,s,!0)}}
                        >
                          ${t}
                        </button>
                      `)}
                  </div>
                `:F}
          </div>

          <!-- Spin Speed Dropdown -->
          <div class="gh-select-wrapper ${"spin"===this._ghDropdown?"active":""}">
            <button
              class="gh-custom-select ${o&&i?"":"disabled"}"
              @click=${e=>{e.stopPropagation(),o?i?(this._haptic("selection"),this._ghDropdown="spin"===this._ghDropdown?null:"spin"):this._showToast("Turn on the washer to adjust settings"):this._showToast("Device is offline")}}
            >
              <span>Spin: ${d||"Select"}</span>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
            ${"spin"===this._ghDropdown?B`
                  <div class="gh-dropdown-menu">
                    ${(y.length>0?y:["No Spin","400 RPM","800 RPM","1000 RPM","1400 RPM"]).map(t=>B`
                        <button
                          class="gh-dropdown-item ${d===t?"active":""}"
                          @click=${a=>{a.stopPropagation(),this._ghDropdown=null,this._selectOption(e.spin,t,o,i,s,!1)}}
                        >
                          ${t}
                        </button>
                      `)}
                  </div>
                `:F}
          </div>

          <!-- Temperature Dropdown -->
          <div class="gh-select-wrapper ${"temp"===this._ghDropdown?"active":""}">
            <button
              class="gh-custom-select ${o&&i?"":"disabled"}"
              @click=${e=>{e.stopPropagation(),o?i?(this._haptic("selection"),this._ghDropdown="temp"===this._ghDropdown?null:"temp"):this._showToast("Turn on the washer to adjust settings"):this._showToast("Device is offline")}}
            >
              <span>Temp: ${h||"Select"}</span>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
            ${"temp"===this._ghDropdown?B`
                  <div class="gh-dropdown-menu">
                    ${(w.length>0?w:["Cold","20°C","30°C","40°C","60°C","95°C"]).map(t=>B`
                        <button
                          class="gh-dropdown-item ${h===t?"active":""}"
                          @click=${a=>{a.stopPropagation(),this._ghDropdown=null,this._selectOption(e.temp,t,o,i,s,!1)}}
                        >
                          ${t}
                        </button>
                      `)}
                  </div>
                `:F}
          </div>

          <!-- Delay Start Dropdown -->
          <div class="gh-select-wrapper ${"delay"===this._ghDropdown?"active":""}">
            <button
              class="gh-custom-select ${o&&i?"":"disabled"}"
              @click=${e=>{e.stopPropagation(),o?i?(this._haptic("selection"),this._ghDropdown="delay"===this._ghDropdown?null:"delay"):this._showToast("Turn on the washer to adjust settings"):this._showToast("Device is offline")}}
            >
              <span>Delay: ${u||"No Delay"}</span>
              <ha-icon icon="mdi:chevron-down"></ha-icon>
            </button>
            ${"delay"===this._ghDropdown?B`
                  <div class="gh-dropdown-menu">
                    ${(x.length>0?x:["No Delay","30 Minutes","1 Hour","2 Hours","4 Hours"]).map(t=>B`
                        <button
                          class="gh-dropdown-item ${u===t?"active":""}"
                          @click=${a=>{a.stopPropagation(),this._ghDropdown=null,this._selectOption(e.delay,t,o,i,s,!1)}}
                        >
                          ${t}
                        </button>
                      `)}
                  </div>
                `:F}
          </div>

          <!-- Extra Rinse Dropdown -->
          ${e.extraRinse?B`
                <div class="gh-select-wrapper ${"extra_rinse"===this._ghDropdown?"active":""}">
                  <button
                    class="gh-custom-select ${o&&i&&P?"":"disabled"}"
                    @click=${e=>{e.stopPropagation(),o?i?P?(this._haptic("selection"),this._ghDropdown="extra_rinse"===this._ghDropdown?null:"extra_rinse"):this._showToast("Extra Rinse is not supported by current program"):this._showToast("Turn on the washer to adjust settings"):this._showToast("Device is offline")}}
                  >
                    <span>Extra Rinse: ${$||"0 (None)"}</span>
                    <ha-icon icon="mdi:chevron-down"></ha-icon>
                  </button>
                  ${"extra_rinse"===this._ghDropdown?B`
                        <div class="gh-dropdown-menu">
                          ${(k.length>0?k:["0 (None)","1","2","3"]).map(t=>B`
                              <button
                                class="gh-dropdown-item ${$===t?"active":""}"
                                @click=${a=>{a.stopPropagation(),this._ghDropdown=null,this._selectOption(e.extraRinse,t,o,i,s,!1)}}
                              >
                                ${t}
                              </button>
                            `)}
                        </div>
                      `:F}
                </div>
              `:F}

          <!-- Dry Mode Dropdown -->
          ${e.dryMode?B`
                <div class="gh-select-wrapper ${"dry_mode"===this._ghDropdown?"active":""}">
                  <button
                    class="gh-custom-select ${o&&i&&S?"":"disabled"}"
                    @click=${e=>{e.stopPropagation(),o?i?S?(this._haptic("selection"),this._ghDropdown="dry_mode"===this._ghDropdown?null:"dry_mode"):this._showToast("Dry is not supported by current program"):this._showToast("Turn on the washer to adjust settings"):this._showToast("Device is offline")}}
                  >
                    <span>Dry: ${C||"No Dry"}</span>
                    <ha-icon icon="mdi:chevron-down"></ha-icon>
                  </button>
                  ${"dry_mode"===this._ghDropdown?B`
                        <div class="gh-dropdown-menu">
                          ${(D.length>0?D:["No Dry","Cupboard Dry","Iron Dry","30 Minutes","1 Hour","2 Hours"]).map(t=>{const a=ge[t]||"";return B`
                                <button
                                  class="gh-dropdown-item ${C===t?"active":""}"
                                  title="${a?`${t} — ${a}`:t}"
                                  @click=${a=>{a.stopPropagation(),this._ghDropdown=null,this._selectOption(e.dryMode,t,o,i,s,!1)}}
                                >
                                  ${t}
                                </button>
                              `})}
                        </div>
                      `:F}
                </div>
              `:F}
        </div>

        <!-- Cycle Modifiers Section -->
        ${this._renderModifiers(M,o,i,s)}

        <!-- Diagnostics & Telemetry Footer -->
        <div class="footer">
          <div class="footer-item">
            <span class="footer-dot ${o?"green":"red"}"></span>
            <span>Local LAN</span>
          </div>
          •
          <div class="footer-item">
            <span class="footer-dot ${g?"red":"green"}"></span>
            <span>${g?"Door Locked":"Door Unlocked"}</span>
          </div>
          ${v>0?B`
                •
                <div class="footer-item">
                  <ha-icon icon="mdi:thermometer"></ha-icon>
                  <span>Tub: ${v}°C</span>
                </div>
              `:F}
          ${b>0?B`
                •
                <div class="footer-item">
                  <ha-icon icon="mdi:speedometer"></ha-icon>
                  <span>${b} RPM</span>
                </div>
              `:F}
        </div>
      </ha-card>
    `}_renderFullBody(e,t,i,o,s,a,n,r,l,c,p,d,h,u,m,g,f,v,b,_,y,w,x,$,k,P,C,D,S,M,T,R){const A=y>400,E=e.program?this.hass.states[e.program]:void 0,H=E?.attributes?.program_duration||me[h]||0,N=o?"Phase":"Status",z=i?b?"Fault":s?"Paused":o?n:a?"Done":"Ready":"Off",L=i?b?"mdi:alert-circle-outline":a?"mdi:check-circle-outline":s?"mdi:pause-circle-outline":o?n.toLowerCase().includes("spin")?"mdi:sync":n.toLowerCase().includes("rinse")?"mdi:water-sync":n.toLowerCase().includes("dry")?"mdi:heat-wave":"mdi:washing-machine":"mdi:progress-clock":"mdi:power-off",O=o?this._formatRemaining(r):i?a?"Done":H>0?`${H} min`:"Standby":"Off",W=i?h||(i?"Select Program":""):"",j=(()=>{if(!i)return null;const e=[];return m&&"None"!==m&&"none"!==m&&e.push(m),o&&y>0?e.push(`${y} RPM`):u&&"None"!==u&&"none"!==u&&e.push(u),e.length>0?e.join(" • "):null})();return B`
      <!-- Porthole & Radial Progress Ring with Dial Flanks -->
      <div class="porthole-container ${i?"":"disabled"}">
        <!-- Left Flank: Child Lock -->
        <div
          class="dial-flank child-lock-flank ${f?"active":""} ${t&&i?"":"disabled"}"
          title="${t?i?ge["Child Lock"]:"Turn on the washer to toggle child lock":"Device is offline"}"
          @touchstart=${()=>this._handleTouchStart(ge["Child Lock"])}
          @touchend=${()=>this._handleTouchEnd()}
          @touchcancel=${()=>this._handleTouchEnd()}
          @click=${o=>{if(this._isLongPress)return this._isLongPress=!1,o.preventDefault(),void o.stopPropagation();this._toggleChildLock(e.childLock,t,i)}}
        >
          <div class="dial-flank-icon-btn ${f?"active":""}">
            <ha-icon icon="${f?"mdi:lock":"mdi:lock-open-variant-outline"}"></ha-icon>
          </div>
          <span class="dial-flank-label">Child Lock</span>
          <span class="dial-flank-status">${f?"Locked":"Unlocked"}</span>
        </div>

        <!-- Center: Porthole Ring Wrapper -->
        <div class="porthole-ring-wrapper">
          <svg class="porthole-svg" viewBox="0 0 164 164">
            <circle class="ring-track" cx="82" cy="82" r="${c}" />
            ${o||a?B`
                  <circle
                    class="ring-progress"
                    cx="82"
                    cy="82"
                    r="${c}"
                    style="stroke-dasharray: ${p}; stroke-dashoffset: ${d};"
                  />
                `:F}
          </svg>
          <div class="drum-porthole">
            ${o?B`<div class="drum-baffles ${A?"fast-spin":"spinning"}"></div>`:F}
            <div class="porthole-content">
              <div class="porthole-hero-time">
                ${O}
              </div>
              ${i&&W?B`<div class="porthole-phase">${W}</div>`:F}
              ${j?B`
                    <div class="porthole-submetrics">
                      ${j}
                    </div>
                  `:F}
            </div>
          </div>
        </div>

        <!-- Right Flank: Cycle Phase / Status -->
        <div
          class="dial-flank phase-flank ${o?"active":""} ${t&&i?"":"disabled"}"
          title="Cycle status: ${z}"
        >
          <div class="dial-flank-icon-btn static ${o?"active":""}">
            <ha-icon icon="${L}"></ha-icon>
          </div>
          <span class="dial-flank-label">${N}</span>
          <span class="dial-flank-status">${z}</span>
        </div>
      </div>

      <!-- Cycle Action Buttons (Start, Pause, Cancel) -->
      <div class="cycle-actions-row">
        <button
          class="action-btn primary ${t&&i&&!o?"":"disabled"}"
          title="${t?i?o?"Cycle is already running":"Start Cycle":"Turn on the washer to start":"Device is offline"}"
          @click=${()=>this._triggerButton(e.start,t,i)}
        >
          <ha-icon icon="mdi:play"></ha-icon>
          <span>${s?"Resume":"Start"}</span>
        </button>

        <button
          class="action-btn ${t&&i&&o?"":"disabled"}"
          title="${t?i?o?"Pause Cycle":"No cycle currently running":"Turn on the washer":"Device is offline"}"
          @click=${()=>this._triggerButton(e.pause,t,i)}
        >
          <ha-icon icon="mdi:pause"></ha-icon>
          <span>Pause</span>
        </button>

        <button
          class="action-btn cancel ${t&&i&&(o||s)?"":"disabled"}"
          title="${t?i?o||s?"Cancel Cycle":"No active cycle to cancel":"Turn on the washer":"Device is offline"}"
          @click=${()=>this._triggerButton(e.cancel,t,i)}
        >
          <ha-icon icon="mdi:stop"></ha-icon>
          <span>Cancel</span>
        </button>
      </div>

      <!-- Wash Settings Tiles (Program, Temp, Spin, Delay) -->
      <div class="setting-tiles">
        <!-- Program Tile -->
        <div
          class="setting-tile ${"program"===this._openPanel?"active":""} ${t&&i?"":"disabled"}"
          title="${t?i?o?"Pause cycle to change wash program":"Select wash program":"Turn on the washer to select program":"Device is offline"}"
          @click=${()=>{t?i?o?this._showToast("Pause cycle to change wash program"):this._openPanel="program"===this._openPanel?null:"program":this._showToast("Turn on the washer to select program"):this._showToast("Device is offline")}}
        >
          <div class="setting-tile-label">
            <ha-icon icon="mdi:format-list-bulleted-type"></ha-icon>
            <span>Program</span>
          </div>
          <div class="setting-tile-value-row">
            <span class="setting-tile-value">${h||"Default"}</span>
            <ha-icon class="setting-tile-chevron" icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>

        <!-- Temperature Tile -->
        <div
          class="setting-tile ${"temp"===this._openPanel?"active":""} ${t&&i?"":"disabled"}"
          title="${t?i?"Select water temperature":"Turn on the washer to adjust temperature":"Device is offline"}"
          @click=${()=>{t?i?this._openPanel="temp"===this._openPanel?null:"temp":this._showToast("Turn on the washer to adjust temperature"):this._showToast("Device is offline")}}
        >
          <div class="setting-tile-label">
            <ha-icon icon="mdi:thermometer-chevron-up"></ha-icon>
            <span>Temp</span>
          </div>
          <div class="setting-tile-value-row">
            <span class="setting-tile-value">${m||"Cold"}</span>
            <ha-icon class="setting-tile-chevron" icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>

        <!-- Spin Speed Tile -->
        <div
          class="setting-tile ${"spin"===this._openPanel?"active":""} ${t&&i?"":"disabled"}"
          title="${t?i?"Select spin speed":"Turn on the washer to adjust spin speed":"Device is offline"}"
          @click=${()=>{t?i?this._openPanel="spin"===this._openPanel?null:"spin":this._showToast("Turn on the washer to adjust spin speed"):this._showToast("Device is offline")}}
        >
          <div class="setting-tile-label">
            <ha-icon icon="mdi:speedometer"></ha-icon>
            <span>Spin</span>
          </div>
          <div class="setting-tile-value-row">
            <span class="setting-tile-value">${u||"No Spin"}</span>
            <ha-icon class="setting-tile-chevron" icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>

        <!-- Delay Start Tile -->
        <div
          class="setting-tile ${"delay"===this._openPanel?"active":""} ${t&&i?"":"disabled"}"
          title="${t?i?o?"Cannot set delay while cycle is running":"Select delay start":"Turn on the washer to set delay start":"Device is offline"}"
          @click=${()=>{t?i?o?this._showToast("Cannot set delay while cycle is running"):this._openPanel="delay"===this._openPanel?null:"delay":this._showToast("Turn on the washer to set delay start"):this._showToast("Device is offline")}}
        >
          <div class="setting-tile-label">
            <ha-icon icon="mdi:timer-outline"></ha-icon>
            <span>Delay</span>
          </div>
          <div class="setting-tile-value-row">
            <span class="setting-tile-value">${g||"No Delay"}</span>
            <ha-icon class="setting-tile-chevron" icon="mdi:chevron-down"></ha-icon>
          </div>
        </div>

        <!-- Extra Rinse Tile -->
        ${e.extraRinse?B`
              <div
                class="setting-tile ${"extra_rinse"===this._openPanel?"active":""} ${t&&i&&D?"":"disabled"}"
                title="${t?i?D?"Select Extra Rinse":"Extra Rinse is not supported by current program":"Turn on the washer to adjust extra rinse":"Device is offline"}"
                @click=${()=>{t?i?D?this._openPanel="extra_rinse"===this._openPanel?null:"extra_rinse":this._showToast("Extra Rinse is not supported by current program"):this._showToast("Turn on the washer to adjust extra rinse"):this._showToast("Device is offline")}}
              >
                <div class="setting-tile-label">
                  <ha-icon icon="mdi:water-sync"></ha-icon>
                  <span>Rinse+</span>
                </div>
                <div class="setting-tile-value-row">
                  <span class="setting-tile-value">${P||"0"}</span>
                  <ha-icon class="setting-tile-chevron" icon="mdi:chevron-down"></ha-icon>
                </div>
              </div>
            `:F}

        <!-- Dry Mode Tile -->
        ${e.dryMode?B`
              <div
                class="setting-tile ${"dry_mode"===this._openPanel?"active":""} ${t&&i&&T?"":"disabled"}"
                title="${t?i?T?"Select Dry Mode":"Dry is not supported by current program":"Turn on the washer to adjust dry mode":"Device is offline"}"
                @click=${()=>{t?i?T?this._openPanel="dry_mode"===this._openPanel?null:"dry_mode":this._showToast("Dry is not supported by current program"):this._showToast("Turn on the washer to adjust dry mode"):this._showToast("Device is offline")}}
              >
                <div class="setting-tile-label">
                  <ha-icon icon="mdi:weather-sunny"></ha-icon>
                  <span>Dry</span>
                </div>
                <div class="setting-tile-value-row">
                  <span class="setting-tile-value">${S||"No Dry"}</span>
                  <ha-icon class="setting-tile-chevron" icon="mdi:chevron-down"></ha-icon>
                </div>
              </div>
            `:F}
      </div>

      <!-- Expandable Options Picker Panel -->
      ${"program"===this._openPanel?B`
            <div class="picker-panel">
              ${(w.length>0?w:["Mix / Daily","Cotton","Express 15'","Tub Clean","Spin Dry / Drain","Rinse + Spin"]).map(s=>{const a=ge[s]||"";return B`
                  <button
                    class="picker-opt ${h===s?"sel":""}"
                    title="${a?`${s} — ${a}`:s}"
                    @touchstart=${()=>a?this._handleTouchStart(a):null}
                    @touchend=${()=>this._handleTouchEnd()}
                    @touchcancel=${()=>this._handleTouchEnd()}
                    @click=${a=>{if(this._isLongPress)return this._isLongPress=!1,a.preventDefault(),void a.stopPropagation();this._selectOption(e.program,s,t,i,o,!0),this._openPanel=null}}
                  >
                    ${s}
                  </button>
                `})}
            </div>
          `:F}

      ${"temp"===this._openPanel?B`
            <div class="picker-panel">
              ${($.length>0?$:["Cold","20°C","30°C","40°C","60°C","95°C"]).map(o=>B`
                  <button
                    class="picker-opt ${m===o?"sel":""}"
                    @click=${()=>{this._selectOption(e.temp,o,t,i,!1,!1),this._openPanel=null}}
                  >
                    ${o}
                  </button>
                `)}
            </div>
          `:F}

      ${"spin"===this._openPanel?B`
            <div class="picker-panel">
              ${(x.length>0?x:["No Spin","400 RPM","600 RPM","800 RPM","1000 RPM","1200 RPM","1400 RPM"]).map(o=>B`
                  <button
                    class="picker-opt ${u===o?"sel":""}"
                    @click=${()=>{this._selectOption(e.spin,o,t,i,!1,!1),this._openPanel=null}}
                  >
                    ${o}
                  </button>
                `)}
            </div>
          `:F}

      ${"delay"===this._openPanel?B`
            <div class="picker-panel">
              ${(k.length>0?k:["No Delay","30 min","1 hr","2 hr","4 hr","8 hr","12 hr","24 hr"]).map(s=>B`
                  <button
                    class="picker-opt ${g===s?"sel":""}"
                    @click=${()=>{this._selectOption(e.delay,s,t,i,o,!0),this._openPanel=null}}
                  >
                    ${s}
                  </button>
                `)}
            </div>
          `:F}

      ${"extra_rinse"===this._openPanel?B`
            <div class="picker-panel">
              ${(C.length>0?C:["0 (None)","1","2","3"]).map(s=>B`
                  <button
                    class="picker-opt ${P===s?"sel":""}"
                    @click=${()=>{this._selectOption(e.extraRinse,s,t,i,o,!1),this._openPanel=null}}
                  >
                    ${s}
                  </button>
                `)}
            </div>
          `:F}

      ${"dry_mode"===this._openPanel?B`
            <div class="picker-panel">
              ${(M.length>0?M:["No Dry","Cupboard Dry","Iron Dry","30 Minutes","1 Hour","2 Hours"]).map(s=>{const a=ge[s]||"";return B`
                  <button
                    class="picker-opt ${S===s?"sel":""}"
                    title="${a?`${s} — ${a}`:s}"
                    @touchstart=${()=>a?this._handleTouchStart(a):null}
                    @touchend=${()=>this._handleTouchEnd()}
                    @touchcancel=${()=>this._handleTouchEnd()}
                    @click=${a=>{if(this._isLongPress)return this._isLongPress=!1,a.preventDefault(),void a.stopPropagation();this._selectOption(e.dryMode,s,t,i,o,!1),this._openPanel=null}}
                  >
                    ${s}
                  </button>
                `})}
            </div>
          `:F}

      <!-- Modifiers Section -->
      ${this._renderModifiers(R,t,i,o)}
    `}}e([pe({attribute:!1})],fe.prototype,"hass",void 0),e([de()],fe.prototype,"_config",void 0),e([de()],fe.prototype,"_expanded",void 0),e([de()],fe.prototype,"_openPanel",void 0),e([de()],fe.prototype,"_ghDropdown",void 0),customElements.define("ifb-washer-card",fe);const ve={type:"ifb-washer-card",name:"IFB Washer Card",description:"A custom Lovelace card for IFB washing machines and washer dryers.",preview:!0,domain:"sensor",domains:["sensor","switch","select"],documentationURL:"https://github.com/selvakk2k/ifb-washer-card"};window.customCards=window.customCards||[];const be=window.customCards.findIndex(e=>"ifb-washer-card"===e.type||"custom:ifb-washer-card"===e.type);be>=0?window.customCards[be]=ve:window.customCards.push(ve);export{fe as IFBWasherCard};
