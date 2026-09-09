function t(t,e,i,s){var o,r=arguments.length,a=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,s);else for(var n=t.length-1;n>=0;n--)(o=t[n])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:n,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:p,getOwnPropertySymbols:h,getPrototypeOf:d}=Object,u=globalThis,f=u.trustedTypes,m=f?f.emptyScript:"",g=u.reactiveElementPolyfillSupport,v=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!n(t,e),$={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:_};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&c(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const r=s?.call(this);o?.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...p(t),...h(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s;const r=o.fromAttribute(e,t.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const r=this.constructor;if(!1===s&&(o=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??_)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),!0!==o||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[v("elementProperties")]=new Map,y[v("finalized")]=new Map,g?.({ReactiveElement:y}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,w=t=>t,A=x.trustedTypes,k=A?A.createPolicy("lit-html",{createHTML:t=>t}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,E="?"+C,P=`<${E}>`,T=document,O=()=>T.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,M=Array.isArray,R="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,H=/>/g,N=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,B=/"/g,L=/^(?:script|style|textarea|title)$/i,I=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),q=new WeakMap,V=T.createTreeWalker(T,129);function J(t,e){if(!M(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,s=[];let o,r=2===e?"<svg>":3===e?"<math>":"",a=U;for(let e=0;e<i;e++){const i=t[e];let n,c,l=-1,p=0;for(;p<i.length&&(a.lastIndex=p,c=a.exec(i),null!==c);)p=a.lastIndex,a===U?"!--"===c[1]?a=z:void 0!==c[1]?a=H:void 0!==c[2]?(L.test(c[2])&&(o=RegExp("</"+c[2],"g")),a=N):void 0!==c[3]&&(a=N):a===N?">"===c[0]?(a=o??U,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,n=c[1],a=void 0===c[3]?N:'"'===c[3]?B:j):a===B||a===j?a=N:a===z||a===H?a=U:(a=N,o=void 0);const h=a===N&&t[e+1].startsWith("/>")?" ":"";r+=a===U?i+P:l>=0?(s.push(n),i.slice(0,l)+S+i.slice(l)+C+h):i+C+(-2===l?e:h)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class Y{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const a=t.length-1,n=this.parts,[c,l]=K(t,e);if(this.el=Y.createElement(c,i),V.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=V.nextNode())&&n.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(S)){const e=l[r++],i=s.getAttribute(t).split(C),a=/([.?@])?(.*)/.exec(e);n.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?tt:"?"===a[1]?et:"@"===a[1]?it:X}),s.removeAttribute(t)}else t.startsWith(C)&&(n.push({type:6,index:o}),s.removeAttribute(t));if(L.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=A?A.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],O()),V.nextNode(),n.push({type:2,index:++o});s.append(t[e],O())}}}else if(8===s.nodeType)if(s.data===E)n.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)n.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Z(t,e,i=t,s){if(e===W)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const r=D(e)?void 0:e._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),void 0===r?o=void 0:(o=new r(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Z(t,o._$AS(t,e.values),o,s)),e}class G{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);V.currentNode=s;let o=V.nextNode(),r=0,a=0,n=i[0];for(;void 0!==n;){if(r===n.index){let e;2===n.type?e=new Q(o,o.nextSibling,this,t):1===n.type?e=new n.ctor(o,n.name,n.strings,this,t):6===n.type&&(e=new st(o,this,t)),this._$AV.push(e),n=i[++a]}r!==n?.index&&(o=V.nextNode(),r++)}return V.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Z(this,t,e),D(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>M(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Y.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new G(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new Y(t)),e}k(t){M(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Q(this.O(O()),this.O(O()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=w(t).nextSibling;w(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class X{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=Z(this,t,e,0),r=!D(t)||t!==this._$AH&&t!==W,r&&(this._$AH=t);else{const s=t;let a,n;for(t=o[0],a=0;a<o.length-1;a++)n=Z(this,s[i+a],e,a),n===W&&(n=this._$AH[a]),r||=!D(n)||n!==this._$AH[a],n===F?t=F:t!==F&&(t+=(n??"")+o[a+1]),this._$AH[a]=n}r&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class et extends X{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class it extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Z(this,t,e,0)??F)===W)return;const i=this._$AH,s=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Z(this,t)}}const ot=x.litHtmlPolyfillSupport;ot?.(Y,Q),(x.litHtmlVersions??=[]).push("3.3.3");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Q(e.insertBefore(O(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const nt=rt.litElementPolyfillSupport;nt?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:_},lt=(t=ct,e,i)=>{const{kind:s,metadata:o}=i;let r=globalThis.litPropertyMetadata.get(o);if(void 0===r&&globalThis.litPropertyMetadata.set(o,r=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};function pt(t){return(e,i)=>"object"==typeof i?lt(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ht(t){return pt({...t,state:!0,attribute:!1})}const dt=((t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new r(i,t,s)})`
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
  .drum-porthole {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, var(--appliance-surface-hover), var(--appliance-surface));
    border: 1px solid var(--appliance-border);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.25);
    overflow: hidden;
  }

  /* Drum rotation animation */
  .drum-rotator {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.12;
    pointer-events: none;
  }
  .drum-rotator.spinning {
    animation: drum-spin 2s linear infinite;
  }
  .drum-rotator.fast-spin {
    animation: drum-spin 0.6s linear infinite;
  }
  .drum-rotator ha-icon {
    --mdc-icon-size: 110px;
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
    gap: 4px;
  }
  .footer-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #10b981;
    display: inline-block;
  }
  .footer-dot.warning {
    background: #f59e0b;
  }
  .footer-dot.error {
    background: #ef4444;
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
`;class ut extends at{constructor(){super(...arguments),this._collapsed=!1}static get styles(){return dt}setConfig(t){if(!t.entity)throw new Error("Please define an entity in the card configuration");this._config={theme:"default",layout:"default",...t}}updated(t){if(super.updated(t),t.has("_config")){const t=this._config?.theme||"default";"default"===t?this.removeAttribute("theme"):this.setAttribute("theme",t),this._config?.accent_color?this.style.setProperty("--appliance-accent",this._config.accent_color):this.style.removeProperty("--appliance-accent"),this._config?.main_color?this.style.setProperty("--appliance-bg",this._config.main_color):this.style.removeProperty("--appliance-bg")}}getCardSize(){return"compact"===this._config?.layout||this._collapsed?2:5}static getConfigForm(){return{schema:[{name:"entity",required:!0,label:"Washer Entity",selector:{entity:{integration:"ifb_washer_local"}}},{name:"name",label:"Custom Title",selector:{text:{}}},{name:"theme",label:"Theme",selector:{select:{options:[{label:"Default HA Theme",value:"default"},{label:"Material You",value:"material_you"}]}}},{name:"layout",label:"Card Layout",selector:{select:{options:[{label:"Default (Full)",value:"default"},{label:"Compact",value:"compact"}]}}},{name:"",type:"expandable",title:"Theming & Colors",schema:[{name:"accent_color",label:"Accent Color Override",selector:{text:{}}},{name:"main_color",label:"Background Color Override",selector:{text:{}}}]}]}}_haptic(t="light"){window.dispatchEvent(new CustomEvent("haptic",{detail:t}))}_showToast(t){this._haptic("warning"),this.dispatchEvent(new CustomEvent("hass-notification",{bubbles:!0,composed:!0,detail:{message:t}}))}_resolveEntities(){const t=["_power","_power_switch","_machine_state","_running","_time_remaining","_program_duration","_cycle_progress","_start","_pause","_cancel","_program_select","_spin_speed_select","_temperature_select","_delay_start_select","_child_lock_switch","_tub_temperature","_motor_speed","_door_locked"];let e=this._config.entity.split(".")[1]||"";for(const i of t)if(e.endsWith(i)){e=e.substring(0,e.length-i.length);break}const i=this._config;return{power:i.power_switch||`switch.${e}_power`,start:i.start_button||`button.${e}_start`,pause:i.pause_button||`button.${e}_pause`,cancel:i.cancel_button||`button.${e}_cancel`,program:i.program_select||`select.${e}_program_select`,spin:i.spin_select||`select.${e}_spin_speed_select`,temp:i.temperature_select||`select.${e}_temperature_select`,delay:i.delay_select||`select.${e}_delay_start_select`,childLock:i.child_lock_switch||`switch.${e}_child_lock_switch`,state:i.machine_state_sensor||`sensor.${e}_machine_state`,remaining:i.time_remaining_sensor||`sensor.${e}_time_remaining`,progress:i.cycle_progress_sensor||`sensor.${e}_cycle_progress`,tubTemp:i.tub_temp_sensor||`sensor.${e}_tub_temperature`,rpm:i.motor_speed_sensor||`sensor.${e}_motor_speed`,door:i.door_locked_sensor||`binary_sensor.${e}_door_locked`,problem:`binary_sensor.${e}_problem`}}_callService(t,e,i){this.hass&&this.hass.callService(t,e,i)}_togglePower(t,e){e?(this._haptic("medium"),this._callService("switch","toggle",{entity_id:t.power})):this._showToast("Device is offline")}_triggerButton(t,e,i){e?i?(this._haptic("light"),this._callService("button","press",{entity_id:t})):this._showToast("Turn on the washer to start cycle"):this._showToast("Device is offline")}_selectOption(t,e,i,s,o,r=!1){i?s?o&&r?this._showToast("Pause cycle to change wash program"):(this._haptic("selection"),this._callService("select","select_option",{entity_id:t,option:e})):this._showToast("Turn on the washer to adjust settings"):this._showToast("Device is offline")}_toggleChildLock(t,e,i){e?i?(this._haptic("medium"),this._callService("switch","toggle",{entity_id:t})):this._showToast("Turn on the washer to toggle child lock"):this._showToast("Device is offline")}_formatRemaining(t){if(!t||t<=0)return"00:00";const e=t%60;return`${Math.floor(t/60).toString().padStart(2,"0")}:${e.toString().padStart(2,"0")}`}render(){if(!this.hass||!this._config)return F;const t=this._resolveEntities(),e=this.hass.states[t.power],i=this.hass.states[t.state],s=this.hass.states[t.remaining],o=this.hass.states[t.progress],r=this.hass.states[t.program],a=this.hass.states[t.spin],n=this.hass.states[t.temp],c=this.hass.states[t.delay],l=this.hass.states[t.childLock],p=this.hass.states[t.tubTemp],h=this.hass.states[t.rpm],d=this.hass.states[t.door],u=this.hass.states[t.problem],f=Boolean(e&&"unavailable"!==e.state&&"unknown"!==e.state),m=f&&"on"===e.state,g=i?.state||(m?"Standby":"Off"),v=m&&Boolean(!["Standby","Idle","Complete","Paused","Off","unknown","unavailable"].includes(g)),b=m&&"Paused"===g,_=m&&"Complete"===g,$=s&&parseInt(s.state,10)||0,y=o?Math.min(100,Math.max(0,parseFloat(o.state)||0)):0,x=r?.state||"",w=a?.state||"",A=n?.state||"",k=c?.state||"No Delay",S="on"===l?.state,C="off"===d?.state||!0===d?.attributes?.door_locked,E="on"===u?.state,P=p&&parseInt(p.state,10)||0,T=h&&parseInt(h.state,10)||0,O=this._config.name||e?.attributes?.friendly_name?.replace(/ Power$/,"")||"IFB Washing Machine";let D="Off";if(f){if(E)D="Error / Attention Required";else if(_)D="Cycle Complete";else if(m){const t=[x||g];A&&"None"!==A&&t.push(A),w&&"None"!==w&&t.push(w),D=t.join(" • ")}}else D="Offline";const M="compact"===this._config.layout,R=this._collapsed,U=2*Math.PI*70,z=U-y/100*U;return I`
      <ha-card>
        <!-- Header -->
        <div class="header">
          <div class="header-left">
            <div class="title-row">
              <ha-icon class="header-icon" icon="mdi:washing-machine"></ha-icon>
              <div class="title">${O}</div>
            </div>
            <div class="subtitle">${D}</div>
          </div>
          <div class="header-right">
            ${M?F:I`
                  <button
                    class="collapse-btn ${R?"collapsed":""}"
                    title="${R?"Expand Card":"Collapse Card"}"
                    @click=${()=>{this._haptic("light"),this._collapsed=!this._collapsed}}
                  >
                    <ha-icon icon="mdi:chevron-up"></ha-icon>
                  </button>
                `}
            <button
              class="power-btn ${m?"on":""} ${f?"":"disabled"}"
              title="${f?m?"Turn Off":"Turn On":"Device is offline"}"
              @click=${()=>this._togglePower(t,f)}
            >
              <ha-icon icon="mdi:power"></ha-icon>
            </button>
          </div>
        </div>

        ${M||R?this._renderCompactBody(t,f,m,v,b,g,$,y):this._renderFullBody(t,f,m,v,b,_,g,$,y,70,U,z,x,w,A,k,S,C,E,P,T,r?.attributes?.options||[],a?.attributes?.options||[],n?.attributes?.options||[],c?.attributes?.options||[])}

        <!-- Diagnostics & Telemetry Footer -->
        <div class="footer">
          <div class="footer-item">
            <span class="footer-dot ${f?"online":"error"}"></span>
            <span>${f?"Local LAN (Port 80)":"Offline"}</span>
          </div>
          •
          <div class="footer-item">
            <span class="footer-dot ${C?"online":"warning"}"></span>
            <span>${C?"Door Locked":"Door Unlocked"}</span>
          </div>
          ${P>0?I`
                •
                <div class="footer-item">
                  <span class="footer-dot online"></span>
                  <span>Tub: ${P}°C</span>
                </div>
              `:F}
          ${T>0?I`
                •
                <div class="footer-item">
                  <span class="footer-dot online"></span>
                  <span>${T} RPM</span>
                </div>
              `:F}
        </div>
      </ha-card>
    `}_renderCompactBody(t,e,i,s,o,r,a,n){return I`
      <div class="compact-view">
        <div class="compact-info">
          <div class="compact-title">
            ${s?`${this._formatRemaining(a)} remaining (${n}%)`:r}
          </div>
          <div class="compact-state">${s?r:i?"Ready":"Standby"}</div>
        </div>
        <div class="compact-actions">
          ${s?I`
                <button
                  class="compact-action-icon ${e&&i?"":"disabled"}"
                  title="Pause Cycle"
                  @click=${()=>this._triggerButton(t.pause,e,i)}
                >
                  <ha-icon icon="mdi:pause"></ha-icon>
                </button>
                <button
                  class="compact-action-icon ${e&&i?"":"disabled"}"
                  title="Cancel Cycle"
                  @click=${()=>this._triggerButton(t.cancel,e,i)}
                >
                  <ha-icon icon="mdi:stop"></ha-icon>
                </button>
              `:I`
                <button
                  class="compact-action-icon primary ${e&&i?"":"disabled"}"
                  title="${o?"Resume Cycle":"Start Cycle"}"
                  @click=${()=>this._triggerButton(t.start,e,i)}
                >
                  <ha-icon icon="mdi:play"></ha-icon>
                </button>
              `}
        </div>
      </div>
    `}_renderFullBody(t,e,i,s,o,r,a,n,c,l,p,h,d,u,f,m,g,v,b,_,$,y,x,w,A){return I`
      <!-- Porthole & Radial Progress Ring -->
      <div class="porthole-container">
        <div class="porthole-ring-wrapper">
          <svg class="porthole-svg" viewBox="0 0 164 164">
            <circle class="ring-track" cx="82" cy="82" r="${l}" />
            ${s||r?I`
                  <circle
                    class="ring-progress"
                    cx="82"
                    cy="82"
                    r="${l}"
                    style="stroke-dasharray: ${p}; stroke-dashoffset: ${h};"
                  />
                `:F}
          </svg>
          <div class="drum-porthole">
            <div
              class="drum-rotator ${s?$>400?"fast-spin":"spinning":""}"
            >
              <ha-icon icon="mdi:rotate-right"></ha-icon>
            </div>
            <div class="porthole-content">
              <div class="porthole-hero-time">
                ${s?this._formatRemaining(n):i?r?"Done":"00:00":"Off"}
              </div>
              <div class="porthole-phase">
                ${i?b?"Fault":a:"Standby"}
              </div>
              ${$>0||_>0?I`
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
          class="action-btn primary ${e&&i&&!s?"":"disabled"}"
          title="${e?i?s?"Cycle is already running":"Start Cycle":"Turn on the washer to start":"Device is offline"}"
          @click=${()=>this._triggerButton(t.start,e,i)}
        >
          <ha-icon icon="mdi:play"></ha-icon>
          <span>${o?"Resume":"Start"}</span>
        </button>

        <button
          class="action-btn ${e&&i&&s?"":"disabled"}"
          title="${e?i?s?"Pause Cycle":"No cycle currently running":"Turn on the washer":"Device is offline"}"
          @click=${()=>this._triggerButton(t.pause,e,i)}
        >
          <ha-icon icon="mdi:pause"></ha-icon>
          <span>Pause</span>
        </button>

        <button
          class="action-btn cancel ${e&&i&&(s||o)?"":"disabled"}"
          title="${e?i?s||o?"Cancel Cycle":"No active cycle to cancel":"Turn on the washer":"Device is offline"}"
          @click=${()=>this._triggerButton(t.cancel,e,i)}
        >
          <ha-icon icon="mdi:stop"></ha-icon>
          <span>Cancel</span>
        </button>
      </div>

      <!-- Program Selection Bar -->
      <div class="section-label">Wash Program</div>
      <div class="segmented-bar">
        ${(y.length>0?y:["Mix / Daily","Cotton","Express 15","Tub Clean"]).map(o=>I`
            <button
              class="segment-btn ${d===o?"active":""} ${e&&i&&!s?"":"disabled"}"
              title="${e?i?s?"Pause cycle to change wash program":o:"Turn on the washer to select program":"Device is offline"}"
              @click=${()=>this._selectOption(t.program,o,e,i,s,!0)}
            >
              <span>${o}</span>
            </button>
          `)}
      </div>

      <!-- Temperature Selection Bar -->
      <div class="section-label">Temperature</div>
      <div class="segmented-bar">
        ${(w.length>0?w:["Cold","20°C","30°C","40°C","60°C","95°C"]).map(s=>I`
              <button
                class="segment-btn ${f===s?"active":""} ${e&&i?"":"disabled"}"
                title="${e?i?s:"Turn on the washer to adjust temperature":"Device is offline"}"
                @click=${()=>this._selectOption(t.temp,s,e,i,!1,!1)}
              >
                <span>${s}</span>
              </button>
            `)}
      </div>

      <!-- Spin Speed Selection Bar -->
      <div class="section-label">Spin Speed</div>
      <div class="segmented-bar">
        ${(x.length>0?x:["No Spin","400","600","800","1000","1200","1400 RPM"]).map(s=>{const o=u===s,r=s.replace(" RPM","");return I`
            <button
              class="segment-btn ${o?"active":""} ${e&&i?"":"disabled"}"
              title="${e?i?s:"Turn on the washer to adjust spin speed":"Device is offline"}"
              @click=${()=>this._selectOption(t.spin,s,e,i,!1,!1)}
            >
              <span>${r}</span>
            </button>
          `})}
      </div>

      <!-- Auxiliary Chips (Child Lock, Delay Start, Door) -->
      <div class="chips-row">
        <button
          class="chip-btn ${g?"active":""} ${e&&i?"":"disabled"}"
          title="${e?i?"Toggle Child Lock":"Turn on the washer to toggle child lock":"Device is offline"}"
          @click=${()=>this._toggleChildLock(t.childLock,e,i)}
        >
          <ha-icon icon="${g?"mdi:account-lock":"mdi:account-lock-open-outline"}"></ha-icon>
          <span>Child Lock ${g?"On":"Off"}</span>
        </button>

        ${m&&"No Delay"!==m?I`
              <div class="chip-btn active">
                <ha-icon icon="mdi:clock-start"></ha-icon>
                <span>Delay: ${m}</span>
              </div>
            `:F}

        <div class="chip-btn ${v?"active":""}">
          <ha-icon icon="${v?"mdi:door-closed-lock":"mdi:door-open"}"></ha-icon>
          <span>${v?"Door Locked":"Door Unlocked"}</span>
        </div>
      </div>
    `}}t([pt({attribute:!1})],ut.prototype,"hass",void 0),t([ht()],ut.prototype,"_config",void 0),t([ht()],ut.prototype,"_collapsed",void 0),customElements.define("ifb-washer-card",ut),window.customCards=window.customCards||[],window.customCards.push({type:"ifb-washer-card",name:"IFB Washer Card",description:"A custom Lovelace card for IFB washing machines and washer dryers.",preview:!0});export{ut as IFBWasherCard};
