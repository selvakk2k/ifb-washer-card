function e(e,t,i,o){var s,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(n=(a<3?s(n):a>3?s(t,i,n):s(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;let a=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}};const n=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:r,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:p,getOwnPropertySymbols:d,getPrototypeOf:h}=Object,u=globalThis,g=u.trustedTypes,f=g?g.emptyScript:"",m=u.reactiveElementPolyfillSupport,b=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!r(e,t),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&c(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const a=o?.call(this);s?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[...p(e),...d(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(n(e))}else void 0!==e&&t.push(n(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),s=t.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=o;const a=s.fromAttribute(t,e.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,i,o=!1,s){if(void 0!==e){const a=this.constructor;if(!1===o&&(s=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??_)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:s},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==s||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[b("elementProperties")]=new Map,y[b("finalized")]=new Map,m?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,w=e=>e,k=x.trustedTypes,A=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,C="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+S,E=`<${P}>`,D=document,T=()=>D.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,R="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,H=/>/g,U=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),N=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,W=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),I=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),q=new WeakMap,V=D.createTreeWalker(D,129);function G(e,t){if(!z(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,o=[];let s,a=2===t?"<svg>":3===t?"<math>":"",n=M;for(let t=0;t<i;t++){const i=e[t];let r,c,l=-1,p=0;for(;p<i.length&&(n.lastIndex=p,c=n.exec(i),null!==c);)p=n.lastIndex,n===M?"!--"===c[1]?n=j:void 0!==c[1]?n=H:void 0!==c[2]?(B.test(c[2])&&(s=RegExp("</"+c[2],"g")),n=U):void 0!==c[3]&&(n=U):n===U?">"===c[0]?(n=s??M,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,r=c[1],n=void 0===c[3]?U:'"'===c[3]?L:N):n===L||n===N?n=U:n===j||n===H?n=M:(n=U,s=void 0);const d=n===U&&e[t+1].startsWith("/>")?" ":"";a+=n===M?i+E:l>=0?(o.push(r),i.slice(0,l)+C+i.slice(l)+S+d):i+S+(-2===l?t:d)}return[G(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class K{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,a=0;const n=e.length-1,r=this.parts,[c,l]=J(e,t);if(this.el=K.createElement(c,i),V.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=V.nextNode())&&r.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(C)){const t=l[a++],i=o.getAttribute(e).split(S),n=/([.?@])?(.*)/.exec(t);r.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?ee:"?"===n[1]?te:"@"===n[1]?ie:X}),o.removeAttribute(e)}else e.startsWith(S)&&(r.push({type:6,index:s}),o.removeAttribute(e));if(B.test(o.tagName)){const e=o.textContent.split(S),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],T()),V.nextNode(),r.push({type:2,index:++s});o.append(e[t],T())}}}else if(8===o.nodeType)if(o.data===P)r.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(S,e+1));)r.push({type:7,index:s}),e+=S.length-1}s++}}static createElement(e,t){const i=D.createElement("template");return i.innerHTML=e,i}}function Y(e,t,i=e,o){if(t===I)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const a=O(t)?void 0:t._$litDirective$;return s?.constructor!==a&&(s?._$AO?.(!1),void 0===a?s=void 0:(s=new a(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=Y(e,s._$AS(e,t.values),s,o)),t}class Z{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??D).importNode(t,!0);V.currentNode=o;let s=V.nextNode(),a=0,n=0,r=i[0];for(;void 0!==r;){if(a===r.index){let t;2===r.type?t=new Q(s,s.nextSibling,this,e):1===r.type?t=new r.ctor(s,r.name,r.strings,this,e):6===r.type&&(t=new oe(s,this,e)),this._$AV.push(t),r=i[++n]}a!==r?.index&&(s=V.nextNode(),a++)}return V.currentNode=D,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),O(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==I&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>z(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=K.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Z(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new K(e)),t}k(e){z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new Q(this.O(T()),this.O(T()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=w(e).nextSibling;w(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(e,t=this,i,o){const s=this.strings;let a=!1;if(void 0===s)e=Y(this,e,t,0),a=!O(e)||e!==this._$AH&&e!==I,a&&(this._$AH=e);else{const o=e;let n,r;for(e=s[0],n=0;n<s.length-1;n++)r=Y(this,o[i+n],t,n),r===I&&(r=this._$AH[n]),a||=!O(r)||r!==this._$AH[n],r===F?e=F:e!==F&&(e+=(r??"")+s[n+1]),this._$AH[n]=r}a&&!o&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ee extends X{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class te extends X{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class ie extends X{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??F)===I)return;const i=this._$AH,o=e===F&&i!==F||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==F&&(i===F||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const se=x.litHtmlPolyfillSupport;se?.(K,Q),(x.litHtmlVersions??=[]).push("3.3.3");const ae=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ne extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new Q(t.insertBefore(T(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}ne._$litElement$=!0,ne.finalized=!0,ae.litElementHydrateSupport?.({LitElement:ne});const re=ae.litElementPolyfillSupport;re?.({LitElement:ne}),(ae.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:_},le=(e=ce,t,i)=>{const{kind:o,metadata:s}=i;let a=globalThis.litPropertyMetadata.get(s);if(void 0===a&&globalThis.litPropertyMetadata.set(s,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];t.call(this,i),this.requestUpdate(o,s,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function pe(e){return(t,i)=>"object"==typeof i?le(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
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
    transition: transform 0.25s ease;
  }
  .collapse-btn.collapsed ha-icon {
    transform: rotate(180deg);
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

  /* ── Porthole & Drum Progress Ring ── */
  .porthole-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 12px 0 16px;
    position: relative;
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
    border: 1px solid var(--appliance-border);
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
    font-size: 1.85rem;
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.5px;
  }
  .porthole-phase {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-top: 4px;
    color: var(--appliance-accent);
    padding: 2px 8px;
    border-radius: 12px;
    background: color-mix(in srgb, var(--appliance-accent) 15%, transparent);
  }
  .porthole-submetrics {
    font-size: 0.7rem;
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

  /* ── Compact View ── */
  .compact-view {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .compact-info {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .compact-title {
    font-size: 0.95rem;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .compact-state {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--appliance-accent);
  }
  .compact-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
  .compact-action-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 1px solid var(--appliance-border);
    background: var(--appliance-surface);
    color: var(--appliance-text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    transition: all 0.2s ease;
  }
  .compact-action-icon:hover:not(.disabled) {
    background: var(--appliance-surface-hover);
  }
  .compact-action-icon.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .compact-action-icon.on {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
    border-color: var(--appliance-accent);
  }
  .compact-action-icon ha-icon {
    --mdc-icon-size: 18px;
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
  .gh-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 0;
  }
  .gh-value-large {
    font-size: 4.6rem;
    font-weight: 400;
    line-height: 1.1;
    color: var(--appliance-text-1);
    letter-spacing: -1px;
  }
  .gh-subtitle-large {
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--appliance-text-2);
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .gh-mode-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    border-radius: 20px;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--appliance-on-accent, #ffffff);
    background: var(--appliance-accent);
    letter-spacing: 0.02em;
  }
  .gh-action-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 16px 0 24px 0;
  }
  .gh-circular-btn {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: rgba(128, 128, 128, 0.15);
    border: none;
    color: var(--appliance-text-1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: 0.2s;
    outline: none;
    gap: 2px;
  }
  .gh-circular-btn:hover:not(.disabled) {
    background: rgba(128, 128, 128, 0.25);
  }
  .gh-circular-btn.primary {
    background: var(--appliance-accent);
    color: var(--appliance-on-accent, #ffffff);
  }
  .gh-circular-btn.active {
    background: var(--appliance-active-bg, rgba(38, 166, 154, 0.25));
    color: var(--appliance-accent);
    border: 1px solid var(--appliance-accent);
  }
  .gh-circular-btn.disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  .gh-circular-btn ha-icon {
    --mdc-icon-size: 26px;
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
`;class ue extends ne{constructor(){super(...arguments),this._collapsed=!1,this._ghDropdown=null,this._handleWindowClick=e=>{const t=e.composedPath();this._ghDropdown&&!t.includes(this)&&(this._ghDropdown=null)}}connectedCallback(){super.connectedCallback(),window.addEventListener("click",this._handleWindowClick)}disconnectedCallback(){window.removeEventListener("click",this._handleWindowClick),super.disconnectedCallback()}static get styles(){return he}setConfig(e){if(!e)throw new Error("Please define a valid configuration");this._config={theme:"default",layout:"default",...e}}updated(e){if(super.updated(e),e.has("_config")){const e=this._config?.theme||"default";"default"===e?this.removeAttribute("theme"):this.setAttribute("theme",e),this._config?.accent_color?this.style.setProperty("--appliance-accent",this._config.accent_color):this.style.removeProperty("--appliance-accent"),this._config?.main_color?this.style.setProperty("--appliance-bg",this._config.main_color):this.style.removeProperty("--appliance-bg")}}getCardSize(){return"compact"===this._config?.layout||this._collapsed?2:5}static getConfigForm(){return{schema:[{name:"entity",required:!0,label:"Washer Entity",selector:{entity:{domain:["select","switch"]}}},{name:"name",label:"Custom Title",selector:{text:{}}},{name:"theme",label:"Theme",selector:{select:{options:[{label:"Default HA Theme",value:"default"},{label:"Material You",value:"material_you"}]}}},{name:"layout",label:"Card Layout",selector:{select:{options:[{label:"Default (Full)",value:"default"},{label:"Compact (Expandable)",value:"compact"}]}}},{name:"full_layout",label:"Full View Style",selector:{select:{options:[{label:"Classic",value:"default"},{label:"Google Home",value:"google_home"}]}}},{name:"",type:"expandable",title:"Theming & Colors",schema:[{name:"accent_color",label:"Accent Color Override",selector:{text:{}}},{name:"main_color",label:"Background Color Override",selector:{text:{}}}]}]}}static getStubConfig(e,t,i){let o="";return t&&t.length&&(o=t.find(e=>e.startsWith("select.")&&(e.includes("program")||e.includes("ifb_washer")))||t.find(e=>e.startsWith("switch.")&&(e.includes("power")||e.includes("ifb_washer")))||t.find(e=>e.includes("ifb_washer"))||""),!o&&i&&i.length&&(o=i.find(e=>e.includes("ifb_washer"))||""),!o&&e?.states&&(o=Object.keys(e.states).find(e=>e.startsWith("select.")&&(e.includes("program")||e.includes("ifb_washer")))||Object.keys(e.states).find(e=>e.startsWith("switch.")&&(e.includes("power")||e.includes("ifb_washer")))||Object.keys(e.states).find(e=>e.includes("ifb_washer"))||""),{type:"custom:ifb-washer-card",entity:o}}_haptic(e="light"){window.dispatchEvent(new CustomEvent("haptic",{detail:e}))}_showToast(e){this._haptic("warning"),this.dispatchEvent(new CustomEvent("hass-notification",{bubbles:!0,composed:!0,detail:{message:e}}))}_resolveEntities(){const e=this._config?.entity||"",t=this._config||{};let i=t.power_switch,o=t.start_button,s=t.pause_button,a=t.cancel_button,n=t.program_select,r=t.spin_select,c=t.temperature_select,l=t.delay_select,p=t.child_lock_switch,d=t.machine_state_sensor,h=t.time_remaining_sensor,u=t.cycle_progress_sensor,g=t.tub_temp_sensor,f=t.motor_speed_sensor,m=t.door_locked_sensor,b="";if(!e)return{power:i||"",start:o||"",pause:s||"",cancel:a||"",program:n||"",spin:r||"",temp:c||"",delay:l||"",childLock:p||"",state:d||"",remaining:h||"",progress:u||"",tubTemp:g||"",rpm:f||"",door:m||"",problem:""};const v=this.hass?.entities;if(v&&v[e]){const t=v[e].device_id;if(t)for(const[e,_]of Object.entries(v)){if(_.device_id!==t)continue;const v=_.unique_id||"",$=_.translation_key||"";i||!v.endsWith("_power_switch")&&"power"!==$||(i=e),o||!v.endsWith("_start")&&"start"!==$||(o=e),s||!v.endsWith("_pause")&&"pause"!==$||(s=e),a||!v.endsWith("_cancel")&&"cancel"!==$||(a=e),n||!v.endsWith("_program_select")&&"program_select"!==$||(n=e),r||!v.endsWith("_spin_speed_select")&&"spin_speed_select"!==$||(r=e),c||!v.endsWith("_temperature_select")&&"temperature_select"!==$||(c=e),l||!v.endsWith("_delay_start_select")&&"delay_start_select"!==$||(l=e),p||!v.endsWith("_child_lock_switch")&&"child_lock_switch"!==$||(p=e),d||!v.endsWith("_state")&&"machine_state"!==$||(d=e),h||!v.endsWith("_time_remaining")&&"time_remaining"!==$||(h=e),u||!v.endsWith("_cycle_progress")&&"cycle_progress"!==$||(u=e),g||!v.endsWith("_tub_temperature")&&"tub_temperature"!==$||(g=e),f||!v.endsWith("_motor_rpm")&&"motor_rpm"!==$&&!v.endsWith("_motor_speed")||(f=e),m||!v.endsWith("_door_locked")&&"door_locked"!==$||(m=e),b||!v.endsWith("_problem")&&"problem"!==$||(b=e)}}const _=["_power","_power_switch","_machine_state","_running","_time_remaining","_program_duration","_cycle_progress","_start","_pause","_cancel","_program_select","_spin_speed_select","_temperature_select","_delay_start_select","_child_lock_switch","_tub_temperature","_motor_speed","_door_locked"];let $=e.split(".")[1]||"";for(const e of _)if($.endsWith(e)){$=$.substring(0,$.length-e.length);break}return{power:i||`switch.${$}_power`,start:o||`button.${$}_start`,pause:s||`button.${$}_pause`,cancel:a||`button.${$}_cancel`,program:n||`select.${$}_program_select`,spin:r||`select.${$}_spin_speed_select`,temp:c||`select.${$}_temperature_select`,delay:l||`select.${$}_delay_start_select`,childLock:p||`switch.${$}_child_lock_switch`,state:d||`sensor.${$}_machine_state`,remaining:h||`sensor.${$}_time_remaining`,progress:u||`sensor.${$}_cycle_progress`,tubTemp:g||`sensor.${$}_tub_temperature`,rpm:f||`sensor.${$}_motor_speed`,door:m||`binary_sensor.${$}_door_locked`,problem:b||`binary_sensor.${$}_problem`}}_callService(e,t,i){this.hass&&this.hass.callService(e,t,i)}_togglePower(e,t){t?(this._haptic("medium"),this._callService("switch","toggle",{entity_id:e.power})):this._showToast("Device is offline")}_triggerButton(e,t,i){t?i?(this._haptic("light"),this._callService("button","press",{entity_id:e})):this._showToast("Turn on the washer to start cycle"):this._showToast("Device is offline")}_selectOption(e,t,i,o,s,a=!1){i?o?s&&a?this._showToast("Pause cycle to change wash program"):(this._haptic("selection"),this._callService("select","select_option",{entity_id:e,option:t})):this._showToast("Turn on the washer to adjust settings"):this._showToast("Device is offline")}_toggleChildLock(e,t,i){t?i?(this._haptic("medium"),this._callService("switch","toggle",{entity_id:e})):this._showToast("Turn on the washer to toggle child lock"):this._showToast("Device is offline")}_formatRemaining(e){if(!e||e<=0)return"00:00";const t=e%60;return`${Math.floor(e/60).toString().padStart(2,"0")}:${t.toString().padStart(2,"0")}`}render(){if(!this.hass||!this._config)return F;if(!this._config.entity)return W`
        <ha-card class="ifb-washer-card">
          <div style="padding: 24px; text-align: center; color: var(--appliance-text-2, #8e8e93);">
            <ha-icon icon="mdi:washing-machine" style="--mdc-icon-size: 40px; margin-bottom: 8px; opacity: 0.6;"></ha-icon>
            <div style="font-weight: 500; font-size: 15px; color: var(--appliance-text-1, inherit);">IFB Washer Card</div>
            <div style="font-size: 13px; margin-top: 4px;">Please select a Washer Entity in the card configuration editor.</div>
          </div>
        </ha-card>
      `;const e=this._resolveEntities(),t=this.hass.states[e.power],i=this.hass.states[e.state],o=this.hass.states[e.remaining],s=this.hass.states[e.progress],a=this.hass.states[e.program],n=this.hass.states[e.spin],r=this.hass.states[e.temp],c=this.hass.states[e.delay],l=this.hass.states[e.childLock],p=this.hass.states[e.tubTemp],d=this.hass.states[e.rpm],h=this.hass.states[e.door],u=this.hass.states[e.problem],g=Boolean(t&&"unavailable"!==t.state&&"unknown"!==t.state),f=g&&"on"===t.state,m=i?.state||(f?"Standby":"Off"),b=f&&Boolean(!["Standby","Idle","Complete","Paused","Off","unknown","unavailable"].includes(m)),v=f&&"Paused"===m,_=f&&"Complete"===m,$=o&&parseInt(o.state,10)||0,y=s?Math.min(100,Math.max(0,parseFloat(s.state)||0)):0,x=a?.state||"",w=n?.state||"",k=r?.state||"",A=c?.state||"No Delay",C="on"===l?.state,S="off"===h?.state||!0===h?.attributes?.door_locked,P="on"===u?.state,E=p&&parseInt(p.state,10)||0,D=d&&parseInt(d.state,10)||0,T=this._config.name||t?.attributes?.friendly_name?.replace(/ Power$/,"")||"IFB Washing Machine";let O="Off";if(g){if(P)O="Error / Attention Required";else if(_)O="Cycle Complete";else if(f){const e=[x||m];k&&"None"!==k&&e.push(k),w&&"None"!==w&&e.push(w),O=e.join(" • ")}}else O="Offline";const z=a?.attributes?.options||[],R=n?.attributes?.options||[],M=r?.attributes?.options||[],j=c?.attributes?.options||[],H="compact"===this._config.layout,U=this._collapsed;if(!("google_home"!==this._config.full_layout||H&&U))return this._renderGoogleHomeFull(e,T,f,g,b,v,_,m,$,y,x,w,k,A,C,S,P,E,D,z,R,M,j);const N=2*Math.PI*70,L=N-y/100*N;return W`
      <ha-card>
        <!-- Header -->
        <div class="header">
          <div class="header-left">
            <div class="title-row">
              <ha-icon class="header-icon" icon="mdi:washing-machine"></ha-icon>
              <div class="title">${T}</div>
            </div>
            <div class="subtitle">${O}</div>
          </div>
          <div class="header-right">
            ${H?F:W`
                  <button
                    class="collapse-btn ${U?"collapsed":""}"
                    title="${U?"Expand Card":"Collapse Card"}"
                    @click=${()=>{this._haptic("light"),this._collapsed=!this._collapsed}}
                  >
                    <ha-icon icon="mdi:chevron-up"></ha-icon>
                  </button>
                `}
            <button
              class="power-btn ${f?"on":""} ${g?"":"disabled"}"
              title="${g?f?"Turn Off":"Turn On":"Device is offline"}"
              @click=${()=>this._togglePower(e,g)}
            >
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        ${H||U?this._renderCompactBody(e,g,f,b,v,m,$,y):this._renderFullBody(e,g,f,b,v,_,m,$,y,70,N,L,x,w,k,A,C,S,P,E,D,a?.attributes?.options||[],n?.attributes?.options||[],r?.attributes?.options||[],c?.attributes?.options||[])}

        <!-- Diagnostics & Telemetry Footer -->
        <div class="footer">
          <div class="footer-item">
            <span class="footer-dot ${g?"green":"red"}"></span>
            <span>Local LAN</span>
          </div>
          •
          <div class="footer-item">
            <span class="footer-dot ${S?"red":"green"}"></span>
            <span>${S?"Door Locked":"Door Unlocked"}</span>
          </div>
          ${E>0?W`
                •
                <div class="footer-item">
                  <ha-icon icon="mdi:thermometer"></ha-icon>
                  <span>${E}°C</span>
                </div>
              `:F}
          ${D>0?W`
                •
                <div class="footer-item">
                  <ha-icon icon="mdi:speedometer"></ha-icon>
                  <span>${D} RPM</span>
                </div>
              `:F}
        </div>
      </ha-card>
    `}_renderCompactBody(e,t,i,o,s,a,n,r){return W`
      <div class="compact-view">
        <div class="compact-info">
          <div class="compact-title">
            ${o?`${this._formatRemaining(n)} remaining (${r}%)`:a}
          </div>
          <div class="compact-state">${o?a:i?"Ready":"Standby"}</div>
        </div>
        <div class="compact-actions">
          ${o?W`
                <button
                  class="compact-action-icon ${t&&i?"":"disabled"}"
                  title="Pause Cycle"
                  @click=${()=>this._triggerButton(e.pause,t,i)}
                >
                  <ha-icon icon="mdi:pause"></ha-icon>
                </button>
                <button
                  class="compact-action-icon ${t&&i?"":"disabled"}"
                  title="Cancel Cycle"
                  @click=${()=>this._triggerButton(e.cancel,t,i)}
                >
                  <ha-icon icon="mdi:stop"></ha-icon>
                </button>
              `:W`
                <button
                  class="compact-action-icon primary ${t&&i?"":"disabled"}"
                  title="${s?"Resume Cycle":"Start Cycle"}"
                  @click=${()=>this._triggerButton(e.start,t,i)}
                >
                  <ha-icon icon="mdi:play"></ha-icon>
                </button>
              `}
        </div>
      </div>
    `}_renderGoogleHomeFull(e,t,i,o,s,a,n,r,c,l,p,d,h,u,g,f,m,b,v,_,$,y,x){const w=s?this._formatRemaining(c):i?n?"Done":"Ready":"Off";return W`
      <ha-card class="gh-full-card">
        <!-- Header -->
        <div class="gh-header">
          <div class="gh-header-left">
            <ha-icon class="gh-icon" icon="mdi:washing-machine"></ha-icon>
            <div class="gh-title">${t}</div>
          </div>
          <div style="display: flex; gap: 8px; align-items: center;">
            ${"compact"===this._config.layout?W`
                  <button
                    class="gh-power-btn"
                    title="Collapse card"
                    @click=${()=>{this._haptic("light"),this._collapsed=!0}}
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

        <!-- Center Hero Display -->
        <div class="gh-center">
          <div class="gh-value-large">${w}</div>
          <div class="gh-subtitle-large">
            <div>
              ${r}${b>0?` • ${b}°C`:""}${v>0?` • ${v} RPM`:""}
            </div>
            ${i?W`
                  <div class="gh-mode-pill">
                    ${s?r:p||"Standby"}
                  </div>
                `:F}
          </div>
        </div>

        <!-- Action Row (Circular Buttons: Start, Pause, Cancel) -->
        <div class="gh-action-row">
          <button
            class="gh-circular-btn primary ${o&&i&&!s?"":"disabled"}"
            title="${o?i?s?"Cycle is already running":"Start Cycle":"Turn on the washer to start":"Device is offline"}"
            @click=${()=>this._triggerButton(e.start,o,i)}
          >
            <ha-icon icon="mdi:play"></ha-icon>
            <span class="gh-circular-label">${a?"Resume":"Start"}</span>
          </button>

          <button
            class="gh-circular-btn ${a?"active":""} ${o&&i&&s?"":"disabled"}"
            title="${o?i?s?"Pause Cycle":"No cycle currently running":"Turn on the washer":"Device is offline"}"
            @click=${()=>this._triggerButton(e.pause,o,i)}
          >
            <ha-icon icon="mdi:pause"></ha-icon>
            <span class="gh-circular-label">Pause</span>
          </button>

          <button
            class="gh-circular-btn ${o&&i&&(s||a)?"":"disabled"}"
            title="${o?i?s||a?"Cancel Cycle":"No active cycle to cancel":"Turn on the washer":"Device is offline"}"
            @click=${()=>this._triggerButton(e.cancel,o,i)}
          >
            <ha-icon icon="mdi:stop"></ha-icon>
            <span class="gh-circular-label">Cancel</span>
          </button>
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
            ${"program"===this._ghDropdown?W`
                  <div class="gh-dropdown-menu">
                    ${(_.length>0?_:["Mix / Daily","Cotton","Express 15","Tub Clean"]).map(t=>W`
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
            ${"spin"===this._ghDropdown?W`
                  <div class="gh-dropdown-menu">
                    ${($.length>0?$:["No Spin","400 RPM","800 RPM","1000 RPM","1400 RPM"]).map(t=>W`
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
            ${"temp"===this._ghDropdown?W`
                  <div class="gh-dropdown-menu">
                    ${(y.length>0?y:["Cold","20°C","30°C","40°C","60°C","95°C"]).map(t=>W`
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
            ${"delay"===this._ghDropdown?W`
                  <div class="gh-dropdown-menu">
                    ${(x.length>0?x:["No Delay","30 Minutes","1 Hour","2 Hours","4 Hours"]).map(t=>W`
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
        </div>

        <!-- Auxiliary Status Chips -->
        <div class="aux-chips-row" style="margin-bottom: 12px;">
          ${e.childLock?W`
                <div
                  class="chip-btn ${g?"active":""} ${o&&i?"":"disabled"}"
                  title="Toggle Child Lock"
                  @click=${()=>this._toggleChildLock(e.childLock,o,i)}
                >
                  <ha-icon icon="${g?"mdi:account-lock":"mdi:account-lock-open-outline"}"></ha-icon>
                  <span>${g?"Child Lock Active":"Child Lock Off"}</span>
                </div>
              `:F}
          <div class="chip-btn ${f?"active":""}">
            <ha-icon icon="${f?"mdi:door-closed-lock":"mdi:door-open"}"></ha-icon>
            <span>${f?"Door Locked":"Door Unlocked"}</span>
          </div>
        </div>

        <!-- Diagnostics & Telemetry Footer -->
        <div class="footer">
          <div class="footer-item">
            <span class="footer-dot ${o?"green":"red"}"></span>
            <span>Local LAN</span>
          </div>
          •
          <div class="footer-item">
            <span class="footer-dot ${f?"red":"green"}"></span>
            <span>${f?"Door Locked":"Door Unlocked"}</span>
          </div>
          ${b>0?W`
                •
                <div class="footer-item">
                  <ha-icon icon="mdi:thermometer"></ha-icon>
                  <span>${b}°C</span>
                </div>
              `:F}
          ${v>0?W`
                •
                <div class="footer-item">
                  <ha-icon icon="mdi:speedometer"></ha-icon>
                  <span>${v} RPM</span>
                </div>
              `:F}
        </div>
      </ha-card>
    `}_renderFullBody(e,t,i,o,s,a,n,r,c,l,p,d,h,u,g,f,m,b,v,_,$,y,x,w,k){return W`
      <!-- Porthole & Radial Progress Ring -->
      <div class="porthole-container">
        <div class="porthole-ring-wrapper">
          <svg class="porthole-svg" viewBox="0 0 164 164">
            <circle class="ring-track" cx="82" cy="82" r="${l}" />
            ${o||a?W`
                  <circle
                    class="ring-progress"
                    cx="82"
                    cy="82"
                    r="${l}"
                    style="stroke-dasharray: ${p}; stroke-dashoffset: ${d};"
                  />
                `:F}
          </svg>
          <div class="drum-porthole">
            ${o?W`<div class="drum-baffles ${$>400?"fast-spin":"spinning"}"></div>`:F}
            <div class="porthole-content">
              <div class="porthole-hero-time">
                ${o?this._formatRemaining(r):i?a?"Done":"00:00":"Off"}
              </div>
              <div class="porthole-phase">
                ${i?v?"Fault":n:"Standby"}
              </div>
              ${$>0||_>0?W`
                    <div class="porthole-submetrics">
                      ${$>0?`${$} RPM`:""}
                      ${$>0&&_>0?" • ":""}
                      ${_>0?`${_}°C`:""}
                    </div>
                  `:F}
            </div>
          </div>
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

      <!-- Program Selection Bar -->
      <div class="section-label">Wash Program</div>
      <div class="segmented-bar scrollable">
        ${(y.length>0?y:["Mix / Daily","Cotton","Express 15","Tub Clean"]).map(s=>W`
            <button
              class="segment-btn ${h===s?"active":""} ${t&&i&&!o?"":"disabled"}"
              title="${t?i?o?"Pause cycle to change wash program":s:"Turn on the washer to select program":"Device is offline"}"
              @click=${()=>this._selectOption(e.program,s,t,i,o,!0)}
            >
              <span>${s}</span>
            </button>
          `)}
      </div>

      <!-- Temperature Selection Bar -->
      <div class="section-label">Temperature</div>
      <div class="segmented-bar">
        ${(w.length>0?w:["Cold","20°C","30°C","40°C","60°C","95°C"]).map(o=>W`
              <button
                class="segment-btn ${g===o?"active":""} ${t&&i?"":"disabled"}"
                title="${t?i?o:"Turn on the washer to adjust temperature":"Device is offline"}"
                @click=${()=>this._selectOption(e.temp,o,t,i,!1,!1)}
              >
                <span>${o}</span>
              </button>
            `)}
      </div>

      <!-- Spin Speed Selection Bar -->
      <div class="section-label">Spin Speed</div>
      <div class="segmented-bar">
        ${(x.length>0?x:["No Spin","400","600","800","1000","1200","1400 RPM"]).map(o=>{const s=u===o,a=o.replace(" RPM","");return W`
            <button
              class="segment-btn ${s?"active":""} ${t&&i?"":"disabled"}"
              title="${t?i?o:"Turn on the washer to adjust spin speed":"Device is offline"}"
              @click=${()=>this._selectOption(e.spin,o,t,i,!1,!1)}
            >
              <span>${a}</span>
            </button>
          `})}
      </div>

      <!-- Auxiliary Chips (Child Lock, Delay Start, Door) -->
      <div class="chips-row">
        <button
          class="chip-btn ${m?"active":""} ${t&&i?"":"disabled"}"
          title="${t?i?"Toggle Child Lock":"Turn on the washer to toggle child lock":"Device is offline"}"
          @click=${()=>this._toggleChildLock(e.childLock,t,i)}
        >
          <ha-icon icon="${m?"mdi:account-lock":"mdi:account-lock-open-outline"}"></ha-icon>
          <span>Child Lock ${m?"On":"Off"}</span>
        </button>

        ${f&&"No Delay"!==f?W`
              <div class="chip-btn active">
                <ha-icon icon="mdi:clock-start"></ha-icon>
                <span>Delay: ${f}</span>
              </div>
            `:F}

        <div class="chip-btn ${b?"active":""}">
          <ha-icon icon="${b?"mdi:door-closed-lock":"mdi:door-open"}"></ha-icon>
          <span>${b?"Door Locked":"Door Unlocked"}</span>
        </div>
      </div>
    `}}e([pe({attribute:!1})],ue.prototype,"hass",void 0),e([de()],ue.prototype,"_config",void 0),e([de()],ue.prototype,"_collapsed",void 0),e([de()],ue.prototype,"_ghDropdown",void 0),customElements.define("ifb-washer-card",ue),window.customCards=window.customCards||[],window.customCards.push({type:"ifb-washer-card",name:"IFB Washer Card",description:"A custom Lovelace card for IFB washing machines and washer dryers.",preview:!0});export{ue as IFBWasherCard};
