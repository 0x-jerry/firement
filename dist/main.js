
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('firebase')) :
  typeof define === 'function' && define.amd ? define(['firebase'], factory) :
  (global = global || self, global.Firement = factory(global.firebase));
}(this, (function (firebase) { 'use strict';

  firebase = firebase && Object.prototype.hasOwnProperty.call(firebase, 'default') ? firebase['default'] : firebase;

  var n,u,i,t,o,r,f,e={},c=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function v(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var i,t=arguments,o={};for(i in l)"key"!==i&&"ref"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),"function"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return y(n,o,l&&l.key,l&&l.ref,null)}function y(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(r.__v=r),n.vnode&&n.vnode(r),r}function d(n){return n.children}function m(n,l){this.props=n,this.context=l;}function w(n,l){if(null==l)return n.__?w(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?w(n):null}function k(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return k(n)}}function g(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!i++||o!==n.debounceRendering)&&((o=n.debounceRendering)||t)(_);}function _(){for(var n;i=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r,f;n.__d&&(r=(o=(l=n).__v).__e,(f=l.__P)&&(u=[],(i=s({},o)).__v=i,t=z(f,o,i,l.__n,void 0!==f.ownerSVGElement,null,u,null==r?w(o):r),T(u,o),t!=r&&k(o)));});}function b(n,l,u,i,t,o,r,f,a,s){var h,p,m,k,g,_,b,x,A,P=i&&i.__k||c,C=P.length;for(a==e&&(a=null!=r?r[0]:C?w(i,0):null),u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k?y(null,k,null,null,k):Array.isArray(k)?y(d,{children:k},null,null,null):null!=k.__e||null!=k.__c?y(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(m=P[h])||m&&k.key==m.key&&k.type===m.type)P[h]=void 0;else for(p=0;p<C;p++){if((m=P[p])&&k.key==m.key&&k.type===m.type){P[p]=void 0;break}m=null;}if(g=z(n,k,m=m||e,t,o,r,f,a,s),(p=k.ref)&&m.ref!=p&&(x||(x=[]),m.ref&&x.push(m.ref,null,k),x.push(p,k.__c||g,k)),null!=g){if(null==b&&(b=g),A=void 0,void 0!==k.__d)A=k.__d,k.__d=void 0;else if(r==m||g!=a||null==g.parentNode){n:if(null==a||a.parentNode!==n)n.appendChild(g),A=null;else {for(_=a,p=0;(_=_.nextSibling)&&p<C;p+=2)if(_==g)break n;n.insertBefore(g,a),A=a;}"option"==u.type&&(n.value="");}a=void 0!==A?A:g.nextSibling,"function"==typeof u.type&&(u.__d=a);}else a&&m.__e==a&&a.parentNode!=n&&(a=w(m));}if(u.__e=b,null!=r&&"function"!=typeof u.type)for(h=r.length;h--;)null!=r[h]&&v(r[h]);for(h=C;h--;)null!=P[h]&&D(P[h],P[h]);if(x)for(h=0;h<x.length;h++)j(x[h],x[++h],x[++h]);}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i);}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===a.test(l)?u+"px":null==u?"":u;}function C(n,l,u,i,t){var o,r,f,e,c;if(t?"className"===l&&(l="class"):"class"===l&&(l="className"),"style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else {if("string"==typeof i&&(o.cssText="",i=null),i)for(e in i)u&&e in u||P(o,e,"");if(u)for(c in u)i&&u[c]===i[c]||P(o,c,u[c]);}else "o"===l[0]&&"n"===l[1]?(r=l!==(l=l.replace(/Capture$/,"")),f=l.toLowerCase(),l=(f in n?f:l).slice(2),u?(i||n.addEventListener(l,N,r),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,r)):"list"!==l&&"tagName"!==l&&"form"!==l&&"type"!==l&&"size"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u));}function N(l){this.l[l.type](n.event?n.event(l):l);}function z(l,u,i,t,o,r,f,e,c){var a,v,h,y,p,w,k,g,_,x,A,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,_=(a=P.contextType)&&t[a.__c],x=a?_?_.props.value:a.__:t,i.__c?k=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new m(g,x),v.constructor=P,v.render=E),_&&_.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(g,v.__s))),y=v.props,p=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else {if(null==P.getDerivedStateFromProps&&g!==y&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){for(v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(y,p,w);});}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(y,p)),A=null!=a&&a.type==d&&null==a.key?a.props.children:a,b(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),k&&(v.__E=v.__=null),v.__e=!1;}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=$(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u);}catch(l){u.__v=null,n.__e(l,u,i);}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function $(n,l,u,i,t,o,r,f){var a,s,v,h,y,p=u.props,d=l.props;if(t="svg"===l.type||t,null!=o)for(a=0;a<o.length;a++)if(null!=(s=o[a])&&((null===l.type?3===s.nodeType:s.localName===l.type)||n==s)){n=s,o[a]=null;break}if(null==n){if(null===l.type)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type,d.is&&{is:d.is}),o=null,f=!1;}if(null===l.type)p!==d&&n.data!=d&&(n.data=d);else {if(null!=o&&(o=c.slice.call(n.childNodes)),v=(p=u.props||e).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!f){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||""));}A(n,d,p,t,f),h?l.__k=[]:(a=l.props.children,b(n,Array.isArray(a)?a:[a],l,u,i,"foreignObject"!==l.type&&t,o,r,e,f)),f||("value"in d&&void 0!==(a=d.value)&&a!==n.value&&C(n,"value",a,p.value,!1),"checked"in d&&void 0!==(a=d.checked)&&a!==n.checked&&C(n,"checked",a,p.checked,!1));}return n}function j(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function D(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&D(t[r],u,i);null!=o&&v(o);}function E(n,l,u){return this.constructor(n,u)}function H(l,u,i){var t,o,f;n.__&&n.__(l,u),o=(t=i===r)?null:i&&i.__k||u.__k,l=h(d,null,[l]),f=[],z(u,(t?u:i||u).__k=l,o||e,e,void 0!==u.ownerSVGElement,i&&!t?[i]:o?null:u.childNodes.length?c.slice.call(u.childNodes):null,f,i||e,t),T(f,l);}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return g(u.__E=u)}catch(l){n=l;}throw n}},m.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),g(this));},m.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this));},m.prototype.render=d,u=[],i=0,t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=e,f=0;

  var ErrorType;
  (function (ErrorType) {
      ErrorType[ErrorType["NeedLogin"] = 0] = "NeedLogin";
  })(ErrorType || (ErrorType = {}));
  var DBConst;
  (function (DBConst) {
      DBConst["Comments"] = "comments";
      DBConst["Likes"] = "Likes";
  })(DBConst || (DBConst = {}));
  class BlogDB {
      constructor() {
          this._article = '';
          this.user = null;
      }
      get comments() {
          return this.db.collection(this._article);
      }
      init(config) {
          this._article = config.article;
          firebase.initializeApp(config.db);
          this.db = firebase.firestore();
      }
      async addComment(comment) {
          await this.comments.add(comment);
      }
      async getAllComments() {
          const data = await this.comments.orderBy('timestamp', 'desc').get();
          return data.docs.map((d) => ({
              ...d.data(),
              id: d.id,
          }));
      }
      async getComment(id) {
          const data = await this.comments.doc(id).get();
          return {
              ...data.data(),
              id: data.id,
          };
      }
      async updateComment(id, comment) {
          await this.comments.doc(id).update(comment);
      }
      async updateCommentLike(id, like) {
          await this.comments.doc(id).update({
              likes: {
                  [this.user.id]: like,
              },
          });
      }
  }
  const db = new BlogDB();

  var LoginTypes;
  (function (LoginTypes) {
      LoginTypes["Google"] = "Google";
      LoginTypes["GitHub"] = "GitHub";
      LoginTypes["Anonymously"] = "Anonymously";
  })(LoginTypes || (LoginTypes = {}));
  async function login(type = LoginTypes.Anonymously) {
      let provider = null;
      switch (type) {
          case LoginTypes.Google:
              provider = new firebase.auth.GoogleAuthProvider();
              break;
          case LoginTypes.GitHub:
              provider = new firebase.auth.GithubAuthProvider();
              break;
          default:
              provider = null;
              break;
      }
      const result = provider ? await firebase.auth().signInWithPopup(provider) : await firebase.auth().signInAnonymously();
      const profile = result.additionalUserInfo.profile;
      return {
          avatar: result.user.photoURL,
          email: result.user.email,
          name: result.user.displayName,
          id: result.user.uid,
          homePage: type === 'GitHub' ? profile.html_url : null,
      };
  }
  function logout() {
      return firebase.auth().signOut();
  }

  // Unique ID creation requires a high quality random # generator. In the browser we therefore
  // require the crypto API and do not support built-in fallback to lower quality random number
  // generators (like Math.random()).
  // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
  // find the complete implementation of crypto (msCrypto) on IE11.
  var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }

    return getRandomValues(rnds8);
  }

  /**
   * Convert array of 16 byte values to UUID string format of the form:
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */
  var byteToHex = [];

  for (var i$1 = 0; i$1 < 256; ++i$1) {
    byteToHex.push((i$1 + 0x100).toString(16).substr(1));
  }

  function bytesToUuid(buf, offset) {
    var i = offset || 0;
    var bth = byteToHex; // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

    return (bth[buf[i + 0]] + bth[buf[i + 1]] + bth[buf[i + 2]] + bth[buf[i + 3]] + '-' + bth[buf[i + 4]] + bth[buf[i + 5]] + '-' + bth[buf[i + 6]] + bth[buf[i + 7]] + '-' + bth[buf[i + 8]] + bth[buf[i + 9]] + '-' + bth[buf[i + 10]] + bth[buf[i + 11]] + bth[buf[i + 12]] + bth[buf[i + 13]] + bth[buf[i + 14]] + bth[buf[i + 15]]).toLowerCase();
  }

  function v4(options, buf, offset) {
    if (typeof options === 'string') {
      buf = options === 'binary' ? new Uint8Array(16) : null;
      options = null;
    }

    options = options || {};
    var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

    if (buf) {
      var start = offset || 0;

      for (var i = 0; i < 16; ++i) {
        buf[start + i] = rnds[i];
      }

      return buf;
    }

    return bytesToUuid(rnds);
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var marked = createCommonjsModule(function (module, exports) {
  /**
   * marked - a markdown parser
   * Copyright (c) 2011-2020, Christopher Jeffrey. (MIT Licensed)
   * https://github.com/markedjs/marked
   */

  /**
   * DO NOT EDIT THIS FILE
   * The code in this file is generated from files in ./src/
   */

  (function (global, factory) {
     module.exports = factory() ;
  }(commonjsGlobal, (function () {
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

      return arr2;
    }

    function _createForOfIteratorHelperLoose(o) {
      var i = 0;

      if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      i = o[Symbol.iterator]();
      return i.next.bind(i);
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var defaults = createCommonjsModule(function (module) {
      function getDefaults() {
        return {
          baseUrl: null,
          breaks: false,
          gfm: true,
          headerIds: true,
          headerPrefix: '',
          highlight: null,
          langPrefix: 'language-',
          mangle: true,
          pedantic: false,
          renderer: null,
          sanitize: false,
          sanitizer: null,
          silent: false,
          smartLists: false,
          smartypants: false,
          tokenizer: null,
          walkTokens: null,
          xhtml: false
        };
      }

      function changeDefaults(newDefaults) {
        module.exports.defaults = newDefaults;
      }

      module.exports = {
        defaults: getDefaults(),
        getDefaults: getDefaults,
        changeDefaults: changeDefaults
      };
    });
    var defaults_1 = defaults.defaults;
    var defaults_2 = defaults.getDefaults;
    var defaults_3 = defaults.changeDefaults;

    /**
     * Helpers
     */
    var escapeTest = /[&<>"']/;
    var escapeReplace = /[&<>"']/g;
    var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
    var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
    var escapeReplacements = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    var getEscapeReplacement = function getEscapeReplacement(ch) {
      return escapeReplacements[ch];
    };

    function escape(html, encode) {
      if (encode) {
        if (escapeTest.test(html)) {
          return html.replace(escapeReplace, getEscapeReplacement);
        }
      } else {
        if (escapeTestNoEncode.test(html)) {
          return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
        }
      }

      return html;
    }

    var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

    function unescape(html) {
      // explicitly match decimal, hex, and named HTML entities
      return html.replace(unescapeTest, function (_, n) {
        n = n.toLowerCase();
        if (n === 'colon') return ':';

        if (n.charAt(0) === '#') {
          return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
        }

        return '';
      });
    }

    var caret = /(^|[^\[])\^/g;

    function edit(regex, opt) {
      regex = regex.source || regex;
      opt = opt || '';
      var obj = {
        replace: function replace(name, val) {
          val = val.source || val;
          val = val.replace(caret, '$1');
          regex = regex.replace(name, val);
          return obj;
        },
        getRegex: function getRegex() {
          return new RegExp(regex, opt);
        }
      };
      return obj;
    }

    var nonWordAndColonTest = /[^\w:]/g;
    var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

    function cleanUrl(sanitize, base, href) {
      if (sanitize) {
        var prot;

        try {
          prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
        } catch (e) {
          return null;
        }

        if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
          return null;
        }
      }

      if (base && !originIndependentUrl.test(href)) {
        href = resolveUrl(base, href);
      }

      try {
        href = encodeURI(href).replace(/%25/g, '%');
      } catch (e) {
        return null;
      }

      return href;
    }

    var baseUrls = {};
    var justDomain = /^[^:]+:\/*[^/]*$/;
    var protocol = /^([^:]+:)[\s\S]*$/;
    var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

    function resolveUrl(base, href) {
      if (!baseUrls[' ' + base]) {
        // we can ignore everything in base after the last slash of its path component,
        // but we might need to add _that_
        // https://tools.ietf.org/html/rfc3986#section-3
        if (justDomain.test(base)) {
          baseUrls[' ' + base] = base + '/';
        } else {
          baseUrls[' ' + base] = rtrim(base, '/', true);
        }
      }

      base = baseUrls[' ' + base];
      var relativeBase = base.indexOf(':') === -1;

      if (href.substring(0, 2) === '//') {
        if (relativeBase) {
          return href;
        }

        return base.replace(protocol, '$1') + href;
      } else if (href.charAt(0) === '/') {
        if (relativeBase) {
          return href;
        }

        return base.replace(domain, '$1') + href;
      } else {
        return base + href;
      }
    }

    var noopTest = {
      exec: function noopTest() {}
    };

    function merge(obj) {
      var i = 1,
          target,
          key;

      for (; i < arguments.length; i++) {
        target = arguments[i];

        for (key in target) {
          if (Object.prototype.hasOwnProperty.call(target, key)) {
            obj[key] = target[key];
          }
        }
      }

      return obj;
    }

    function splitCells(tableRow, count) {
      // ensure that every cell-delimiting pipe has a space
      // before it to distinguish it from an escaped pipe
      var row = tableRow.replace(/\|/g, function (match, offset, str) {
        var escaped = false,
            curr = offset;

        while (--curr >= 0 && str[curr] === '\\') {
          escaped = !escaped;
        }

        if (escaped) {
          // odd number of slashes means | is escaped
          // so we leave it alone
          return '|';
        } else {
          // add space before unescaped |
          return ' |';
        }
      }),
          cells = row.split(/ \|/);
      var i = 0;

      if (cells.length > count) {
        cells.splice(count);
      } else {
        while (cells.length < count) {
          cells.push('');
        }
      }

      for (; i < cells.length; i++) {
        // leading or trailing whitespace is ignored per the gfm spec
        cells[i] = cells[i].trim().replace(/\\\|/g, '|');
      }

      return cells;
    } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
    // /c*$/ is vulnerable to REDOS.
    // invert: Remove suffix of non-c chars instead. Default falsey.


    function rtrim(str, c, invert) {
      var l = str.length;

      if (l === 0) {
        return '';
      } // Length of suffix matching the invert condition.


      var suffLen = 0; // Step left until we fail to match the invert condition.

      while (suffLen < l) {
        var currChar = str.charAt(l - suffLen - 1);

        if (currChar === c && !invert) {
          suffLen++;
        } else if (currChar !== c && invert) {
          suffLen++;
        } else {
          break;
        }
      }

      return str.substr(0, l - suffLen);
    }

    function findClosingBracket(str, b) {
      if (str.indexOf(b[1]) === -1) {
        return -1;
      }

      var l = str.length;
      var level = 0,
          i = 0;

      for (; i < l; i++) {
        if (str[i] === '\\') {
          i++;
        } else if (str[i] === b[0]) {
          level++;
        } else if (str[i] === b[1]) {
          level--;

          if (level < 0) {
            return i;
          }
        }
      }

      return -1;
    }

    function checkSanitizeDeprecation(opt) {
      if (opt && opt.sanitize && !opt.silent) {
        console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
      }
    }

    var helpers = {
      escape: escape,
      unescape: unescape,
      edit: edit,
      cleanUrl: cleanUrl,
      resolveUrl: resolveUrl,
      noopTest: noopTest,
      merge: merge,
      splitCells: splitCells,
      rtrim: rtrim,
      findClosingBracket: findClosingBracket,
      checkSanitizeDeprecation: checkSanitizeDeprecation
    };

    var defaults$1 = defaults.defaults;
    var rtrim$1 = helpers.rtrim,
        splitCells$1 = helpers.splitCells,
        _escape = helpers.escape,
        findClosingBracket$1 = helpers.findClosingBracket;

    function outputLink(cap, link, raw) {
      var href = link.href;
      var title = link.title ? _escape(link.title) : null;

      if (cap[0].charAt(0) !== '!') {
        return {
          type: 'link',
          raw: raw,
          href: href,
          title: title,
          text: cap[1]
        };
      } else {
        return {
          type: 'image',
          raw: raw,
          text: _escape(cap[1]),
          href: href,
          title: title
        };
      }
    }

    function indentCodeCompensation(raw, text) {
      var matchIndentToCode = raw.match(/^(\s+)(?:```)/);

      if (matchIndentToCode === null) {
        return text;
      }

      var indentToCode = matchIndentToCode[1];
      return text.split('\n').map(function (node) {
        var matchIndentInNode = node.match(/^\s+/);

        if (matchIndentInNode === null) {
          return node;
        }

        var indentInNode = matchIndentInNode[0];

        if (indentInNode.length >= indentToCode.length) {
          return node.slice(indentToCode.length);
        }

        return node;
      }).join('\n');
    }
    /**
     * Tokenizer
     */


    var Tokenizer_1 = /*#__PURE__*/function () {
      function Tokenizer(options) {
        this.options = options || defaults$1;
      }

      var _proto = Tokenizer.prototype;

      _proto.space = function space(src) {
        var cap = this.rules.block.newline.exec(src);

        if (cap) {
          if (cap[0].length > 1) {
            return {
              type: 'space',
              raw: cap[0]
            };
          }

          return {
            raw: '\n'
          };
        }
      };

      _proto.code = function code(src, tokens) {
        var cap = this.rules.block.code.exec(src);

        if (cap) {
          var lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

          if (lastToken && lastToken.type === 'paragraph') {
            return {
              raw: cap[0],
              text: cap[0].trimRight()
            };
          }

          var text = cap[0].replace(/^ {4}/gm, '');
          return {
            type: 'code',
            raw: cap[0],
            codeBlockStyle: 'indented',
            text: !this.options.pedantic ? rtrim$1(text, '\n') : text
          };
        }
      };

      _proto.fences = function fences(src) {
        var cap = this.rules.block.fences.exec(src);

        if (cap) {
          var raw = cap[0];
          var text = indentCodeCompensation(raw, cap[3] || '');
          return {
            type: 'code',
            raw: raw,
            lang: cap[2] ? cap[2].trim() : cap[2],
            text: text
          };
        }
      };

      _proto.heading = function heading(src) {
        var cap = this.rules.block.heading.exec(src);

        if (cap) {
          return {
            type: 'heading',
            raw: cap[0],
            depth: cap[1].length,
            text: cap[2]
          };
        }
      };

      _proto.nptable = function nptable(src) {
        var cap = this.rules.block.nptable.exec(src);

        if (cap) {
          var item = {
            type: 'table',
            header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
            raw: cap[0]
          };

          if (item.header.length === item.align.length) {
            var l = item.align.length;
            var i;

            for (i = 0; i < l; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = 'right';
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = 'center';
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = 'left';
              } else {
                item.align[i] = null;
              }
            }

            l = item.cells.length;

            for (i = 0; i < l; i++) {
              item.cells[i] = splitCells$1(item.cells[i], item.header.length);
            }

            return item;
          }
        }
      };

      _proto.hr = function hr(src) {
        var cap = this.rules.block.hr.exec(src);

        if (cap) {
          return {
            type: 'hr',
            raw: cap[0]
          };
        }
      };

      _proto.blockquote = function blockquote(src) {
        var cap = this.rules.block.blockquote.exec(src);

        if (cap) {
          var text = cap[0].replace(/^ *> ?/gm, '');
          return {
            type: 'blockquote',
            raw: cap[0],
            text: text
          };
        }
      };

      _proto.list = function list(src) {
        var cap = this.rules.block.list.exec(src);

        if (cap) {
          var raw = cap[0];
          var bull = cap[2];
          var isordered = bull.length > 1;
          var list = {
            type: 'list',
            raw: raw,
            ordered: isordered,
            start: isordered ? +bull : '',
            loose: false,
            items: []
          }; // Get each top-level item.

          var itemMatch = cap[0].match(this.rules.block.item);
          var next = false,
              item,
              space,
              b,
              addBack,
              loose,
              istask,
              ischecked;
          var l = itemMatch.length;

          for (var i = 0; i < l; i++) {
            item = itemMatch[i];
            raw = item; // Remove the list item's bullet
            // so it is seen as the next token.

            space = item.length;
            item = item.replace(/^ *([*+-]|\d+\.) */, ''); // Outdent whatever the
            // list item contains. Hacky.

            if (~item.indexOf('\n ')) {
              space -= item.length;
              item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
            } // Determine whether the next list item belongs here.
            // Backpedal if it does not belong in this list.


            if (i !== l - 1) {
              b = this.rules.block.bullet.exec(itemMatch[i + 1])[0];

              if (bull.length > 1 ? b.length === 1 : b.length > 1 || this.options.smartLists && b !== bull) {
                addBack = itemMatch.slice(i + 1).join('\n');
                list.raw = list.raw.substring(0, list.raw.length - addBack.length);
                i = l - 1;
              }
            } // Determine whether item is loose or not.
            // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
            // for discount behavior.


            loose = next || /\n\n(?!\s*$)/.test(item);

            if (i !== l - 1) {
              next = item.charAt(item.length - 1) === '\n';
              if (!loose) loose = next;
            }

            if (loose) {
              list.loose = true;
            } // Check for task list items


            istask = /^\[[ xX]\] /.test(item);
            ischecked = undefined;

            if (istask) {
              ischecked = item[1] !== ' ';
              item = item.replace(/^\[[ xX]\] +/, '');
            }

            list.items.push({
              type: 'list_item',
              raw: raw,
              task: istask,
              checked: ischecked,
              loose: loose,
              text: item
            });
          }

          return list;
        }
      };

      _proto.html = function html(src) {
        var cap = this.rules.block.html.exec(src);

        if (cap) {
          return {
            type: this.options.sanitize ? 'paragraph' : 'html',
            raw: cap[0],
            pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
          };
        }
      };

      _proto.def = function def(src) {
        var cap = this.rules.block.def.exec(src);

        if (cap) {
          if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
          var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
          return {
            tag: tag,
            raw: cap[0],
            href: cap[2],
            title: cap[3]
          };
        }
      };

      _proto.table = function table(src) {
        var cap = this.rules.block.table.exec(src);

        if (cap) {
          var item = {
            type: 'table',
            header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
          };

          if (item.header.length === item.align.length) {
            item.raw = cap[0];
            var l = item.align.length;
            var i;

            for (i = 0; i < l; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = 'right';
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = 'center';
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = 'left';
              } else {
                item.align[i] = null;
              }
            }

            l = item.cells.length;

            for (i = 0; i < l; i++) {
              item.cells[i] = splitCells$1(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
            }

            return item;
          }
        }
      };

      _proto.lheading = function lheading(src) {
        var cap = this.rules.block.lheading.exec(src);

        if (cap) {
          return {
            type: 'heading',
            raw: cap[0],
            depth: cap[2].charAt(0) === '=' ? 1 : 2,
            text: cap[1]
          };
        }
      };

      _proto.paragraph = function paragraph(src) {
        var cap = this.rules.block.paragraph.exec(src);

        if (cap) {
          return {
            type: 'paragraph',
            raw: cap[0],
            text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
          };
        }
      };

      _proto.text = function text(src, tokens) {
        var cap = this.rules.block.text.exec(src);

        if (cap) {
          var lastToken = tokens[tokens.length - 1];

          if (lastToken && lastToken.type === 'text') {
            return {
              raw: cap[0],
              text: cap[0]
            };
          }

          return {
            type: 'text',
            raw: cap[0],
            text: cap[0]
          };
        }
      };

      _proto.escape = function escape(src) {
        var cap = this.rules.inline.escape.exec(src);

        if (cap) {
          return {
            type: 'escape',
            raw: cap[0],
            text: _escape(cap[1])
          };
        }
      };

      _proto.tag = function tag(src, inLink, inRawBlock) {
        var cap = this.rules.inline.tag.exec(src);

        if (cap) {
          if (!inLink && /^<a /i.test(cap[0])) {
            inLink = true;
          } else if (inLink && /^<\/a>/i.test(cap[0])) {
            inLink = false;
          }

          if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            inRawBlock = true;
          } else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            inRawBlock = false;
          }

          return {
            type: this.options.sanitize ? 'text' : 'html',
            raw: cap[0],
            inLink: inLink,
            inRawBlock: inRawBlock,
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
          };
        }
      };

      _proto.link = function link(src) {
        var cap = this.rules.inline.link.exec(src);

        if (cap) {
          var lastParenIndex = findClosingBracket$1(cap[2], '()');

          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }

          var href = cap[2];
          var title = '';

          if (this.options.pedantic) {
            var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

            if (link) {
              href = link[1];
              title = link[3];
            } else {
              title = '';
            }
          } else {
            title = cap[3] ? cap[3].slice(1, -1) : '';
          }

          href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
          var token = outputLink(cap, {
            href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
            title: title ? title.replace(this.rules.inline._escapes, '$1') : title
          }, cap[0]);
          return token;
        }
      };

      _proto.reflink = function reflink(src, links) {
        var cap;

        if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
          var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
          link = links[link.toLowerCase()];

          if (!link || !link.href) {
            var text = cap[0].charAt(0);
            return {
              type: 'text',
              raw: text,
              text: text
            };
          }

          var token = outputLink(cap, link, cap[0]);
          return token;
        }
      };

      _proto.strong = function strong(src) {
        var cap = this.rules.inline.strong.exec(src);

        if (cap) {
          return {
            type: 'strong',
            raw: cap[0],
            text: cap[4] || cap[3] || cap[2] || cap[1]
          };
        }
      };

      _proto.em = function em(src) {
        var cap = this.rules.inline.em.exec(src);

        if (cap) {
          return {
            type: 'em',
            raw: cap[0],
            text: cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]
          };
        }
      };

      _proto.codespan = function codespan(src) {
        var cap = this.rules.inline.code.exec(src);

        if (cap) {
          var text = cap[2].replace(/\n/g, ' ');
          var hasNonSpaceChars = /[^ ]/.test(text);
          var hasSpaceCharsOnBothEnds = text.startsWith(' ') && text.endsWith(' ');

          if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
            text = text.substring(1, text.length - 1);
          }

          text = _escape(text, true);
          return {
            type: 'codespan',
            raw: cap[0],
            text: text
          };
        }
      };

      _proto.br = function br(src) {
        var cap = this.rules.inline.br.exec(src);

        if (cap) {
          return {
            type: 'br',
            raw: cap[0]
          };
        }
      };

      _proto.del = function del(src) {
        var cap = this.rules.inline.del.exec(src);

        if (cap) {
          return {
            type: 'del',
            raw: cap[0],
            text: cap[1]
          };
        }
      };

      _proto.autolink = function autolink(src, mangle) {
        var cap = this.rules.inline.autolink.exec(src);

        if (cap) {
          var text, href;

          if (cap[2] === '@') {
            text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
            href = 'mailto:' + text;
          } else {
            text = _escape(cap[1]);
            href = text;
          }

          return {
            type: 'link',
            raw: cap[0],
            text: text,
            href: href,
            tokens: [{
              type: 'text',
              raw: text,
              text: text
            }]
          };
        }
      };

      _proto.url = function url(src, mangle) {
        var cap;

        if (cap = this.rules.inline.url.exec(src)) {
          var text, href;

          if (cap[2] === '@') {
            text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
            href = 'mailto:' + text;
          } else {
            // do extended autolink path validation
            var prevCapZero;

            do {
              prevCapZero = cap[0];
              cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
            } while (prevCapZero !== cap[0]);

            text = _escape(cap[0]);

            if (cap[1] === 'www.') {
              href = 'http://' + text;
            } else {
              href = text;
            }
          }

          return {
            type: 'link',
            raw: cap[0],
            text: text,
            href: href,
            tokens: [{
              type: 'text',
              raw: text,
              text: text
            }]
          };
        }
      };

      _proto.inlineText = function inlineText(src, inRawBlock, smartypants) {
        var cap = this.rules.inline.text.exec(src);

        if (cap) {
          var text;

          if (inRawBlock) {
            text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
          } else {
            text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
          }

          return {
            type: 'text',
            raw: cap[0],
            text: text
          };
        }
      };

      return Tokenizer;
    }();

    var noopTest$1 = helpers.noopTest,
        edit$1 = helpers.edit,
        merge$1 = helpers.merge;
    /**
     * Block-Level Grammar
     */

    var block = {
      newline: /^\n+/,
      code: /^( {4}[^\n]+\n*)+/,
      fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
      hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
      html: '^ {0,3}(?:' // optional indentation
      + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
      + '|comment[^\\n]*(\\n+|$)' // (2)
      + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
      + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
      + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
      + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
      + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
      + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
      + ')',
      def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
      nptable: noopTest$1,
      table: noopTest$1,
      lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
      // regex template, placeholders will be replaced according to different paragraph
      // interruption rules of commonmark and the original markdown spec:
      _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
      text: /^[^\n]+/
    };
    block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
    block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
    block.def = edit$1(block.def).replace('label', block._label).replace('title', block._title).getRegex();
    block.bullet = /(?:[*+-]|\d{1,9}\.)/;
    block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
    block.item = edit$1(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
    block.list = edit$1(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
    block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
    block._comment = /<!--(?!-?>)[\s\S]*?-->/;
    block.html = edit$1(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
    block.paragraph = edit$1(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
    .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
    .getRegex();
    block.blockquote = edit$1(block.blockquote).replace('paragraph', block.paragraph).getRegex();
    /**
     * Normal Block Grammar
     */

    block.normal = merge$1({}, block);
    /**
     * GFM Block Grammar
     */

    block.gfm = merge$1({}, block.normal, {
      nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
      + ' *([-:]+ *\\|[-| :]*)' // Align
      + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
      // Cells
      table: '^ *\\|(.+)\\n' // Header
      + ' *\\|?( *[-:]+[-| :]*)' // Align
      + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells

    });
    block.gfm.nptable = edit$1(block.gfm.nptable).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
    block.gfm.table = edit$1(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
    .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
    .getRegex();
    /**
     * Pedantic grammar (original John Gruber's loose markdown specification)
     */

    block.pedantic = merge$1({}, block.normal, {
      html: edit$1('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
      + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
      fences: noopTest$1,
      // fences not supported
      paragraph: edit$1(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
    });
    /**
     * Inline-Level Grammar
     */

    var inline = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: noopTest$1,
      tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
      + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
      + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
      + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
      + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
      // CDATA section
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
      nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
      strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
      em: /^_([^\s_])_(?!_)|^_([^\s_<][\s\S]*?[^\s_])_(?!_|[^\s,punctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\s,punctuation])|^\*([^\s*<\[])\*(?!\*)|^\*([^\s<"][\s\S]*?[^\s\[\*])\*(?![\]`punctuation])|^\*([^\s*"<\[][\s\S]*[^\s])\*(?!\*)/,
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: noopTest$1,
      text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
    }; // list of punctuation marks from common mark spec
    // without ` and ] to workaround Rule 17 (inline code blocks/links)
    // without , to work around example 393

    inline._punctuation = '!"#$%&\'()*+\\-./:;<=>?@\\[^_{|}~';
    inline.em = edit$1(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();
    inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
    inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
    inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
    inline.autolink = edit$1(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
    inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
    inline.tag = edit$1(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();
    inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
    inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
    inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
    inline.link = edit$1(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
    inline.reflink = edit$1(inline.reflink).replace('label', inline._label).getRegex();
    /**
     * Normal Inline Grammar
     */

    inline.normal = merge$1({}, inline);
    /**
     * Pedantic Inline Grammar
     */

    inline.pedantic = merge$1({}, inline.normal, {
      strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
      link: edit$1(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
      reflink: edit$1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
    });
    /**
     * GFM Inline Grammar
     */

    inline.gfm = merge$1({}, inline.normal, {
      escape: edit$1(inline.escape).replace('])', '~|])').getRegex(),
      _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^~+(?=\S)([\s\S]*?\S)~+/,
      text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
    });
    inline.gfm.url = edit$1(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
    /**
     * GFM + Line Breaks Inline Grammar
     */

    inline.breaks = merge$1({}, inline.gfm, {
      br: edit$1(inline.br).replace('{2,}', '*').getRegex(),
      text: edit$1(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
    });
    var rules = {
      block: block,
      inline: inline
    };

    var defaults$2 = defaults.defaults;
    var block$1 = rules.block,
        inline$1 = rules.inline;
    /**
     * smartypants text replacement
     */

    function smartypants(text) {
      return text // em-dashes
      .replace(/---/g, "\u2014") // en-dashes
      .replace(/--/g, "\u2013") // opening singles
      .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
      .replace(/'/g, "\u2019") // opening doubles
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
      .replace(/"/g, "\u201D") // ellipses
      .replace(/\.{3}/g, "\u2026");
    }
    /**
     * mangle email addresses
     */


    function mangle(text) {
      var out = '',
          i,
          ch;
      var l = text.length;

      for (i = 0; i < l; i++) {
        ch = text.charCodeAt(i);

        if (Math.random() > 0.5) {
          ch = 'x' + ch.toString(16);
        }

        out += '&#' + ch + ';';
      }

      return out;
    }
    /**
     * Block Lexer
     */


    var Lexer_1 = /*#__PURE__*/function () {
      function Lexer(options) {
        this.tokens = [];
        this.tokens.links = Object.create(null);
        this.options = options || defaults$2;
        this.options.tokenizer = this.options.tokenizer || new Tokenizer_1();
        this.tokenizer = this.options.tokenizer;
        this.tokenizer.options = this.options;
        var rules = {
          block: block$1.normal,
          inline: inline$1.normal
        };

        if (this.options.pedantic) {
          rules.block = block$1.pedantic;
          rules.inline = inline$1.pedantic;
        } else if (this.options.gfm) {
          rules.block = block$1.gfm;

          if (this.options.breaks) {
            rules.inline = inline$1.breaks;
          } else {
            rules.inline = inline$1.gfm;
          }
        }

        this.tokenizer.rules = rules;
      }
      /**
       * Expose Rules
       */


      /**
       * Static Lex Method
       */
      Lexer.lex = function lex(src, options) {
        var lexer = new Lexer(options);
        return lexer.lex(src);
      }
      /**
       * Preprocessing
       */
      ;

      var _proto = Lexer.prototype;

      _proto.lex = function lex(src) {
        src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
        this.blockTokens(src, this.tokens, true);
        this.inline(this.tokens);
        return this.tokens;
      }
      /**
       * Lexing
       */
      ;

      _proto.blockTokens = function blockTokens(src, tokens, top) {
        if (tokens === void 0) {
          tokens = [];
        }

        if (top === void 0) {
          top = true;
        }

        src = src.replace(/^ +$/gm, '');
        var token, i, l, lastToken;

        while (src) {
          // newline
          if (token = this.tokenizer.space(src)) {
            src = src.substring(token.raw.length);

            if (token.type) {
              tokens.push(token);
            }

            continue;
          } // code


          if (token = this.tokenizer.code(src, tokens)) {
            src = src.substring(token.raw.length);

            if (token.type) {
              tokens.push(token);
            } else {
              lastToken = tokens[tokens.length - 1];
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
            }

            continue;
          } // fences


          if (token = this.tokenizer.fences(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // heading


          if (token = this.tokenizer.heading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // table no leading pipe (gfm)


          if (token = this.tokenizer.nptable(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // hr


          if (token = this.tokenizer.hr(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // blockquote


          if (token = this.tokenizer.blockquote(src)) {
            src = src.substring(token.raw.length);
            token.tokens = this.blockTokens(token.text, [], top);
            tokens.push(token);
            continue;
          } // list


          if (token = this.tokenizer.list(src)) {
            src = src.substring(token.raw.length);
            l = token.items.length;

            for (i = 0; i < l; i++) {
              token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
            }

            tokens.push(token);
            continue;
          } // html


          if (token = this.tokenizer.html(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // def


          if (top && (token = this.tokenizer.def(src))) {
            src = src.substring(token.raw.length);

            if (!this.tokens.links[token.tag]) {
              this.tokens.links[token.tag] = {
                href: token.href,
                title: token.title
              };
            }

            continue;
          } // table (gfm)


          if (token = this.tokenizer.table(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // lheading


          if (token = this.tokenizer.lheading(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // top-level paragraph


          if (top && (token = this.tokenizer.paragraph(src))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // text


          if (token = this.tokenizer.text(src, tokens)) {
            src = src.substring(token.raw.length);

            if (token.type) {
              tokens.push(token);
            } else {
              lastToken = tokens[tokens.length - 1];
              lastToken.raw += '\n' + token.raw;
              lastToken.text += '\n' + token.text;
            }

            continue;
          }

          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else {
              throw new Error(errMsg);
            }
          }
        }

        return tokens;
      };

      _proto.inline = function inline(tokens) {
        var i, j, k, l2, row, token;
        var l = tokens.length;

        for (i = 0; i < l; i++) {
          token = tokens[i];

          switch (token.type) {
            case 'paragraph':
            case 'text':
            case 'heading':
              {
                token.tokens = [];
                this.inlineTokens(token.text, token.tokens);
                break;
              }

            case 'table':
              {
                token.tokens = {
                  header: [],
                  cells: []
                }; // header

                l2 = token.header.length;

                for (j = 0; j < l2; j++) {
                  token.tokens.header[j] = [];
                  this.inlineTokens(token.header[j], token.tokens.header[j]);
                } // cells


                l2 = token.cells.length;

                for (j = 0; j < l2; j++) {
                  row = token.cells[j];
                  token.tokens.cells[j] = [];

                  for (k = 0; k < row.length; k++) {
                    token.tokens.cells[j][k] = [];
                    this.inlineTokens(row[k], token.tokens.cells[j][k]);
                  }
                }

                break;
              }

            case 'blockquote':
              {
                this.inline(token.tokens);
                break;
              }

            case 'list':
              {
                l2 = token.items.length;

                for (j = 0; j < l2; j++) {
                  this.inline(token.items[j].tokens);
                }

                break;
              }
          }
        }

        return tokens;
      }
      /**
       * Lexing/Compiling
       */
      ;

      _proto.inlineTokens = function inlineTokens(src, tokens, inLink, inRawBlock) {
        if (tokens === void 0) {
          tokens = [];
        }

        if (inLink === void 0) {
          inLink = false;
        }

        if (inRawBlock === void 0) {
          inRawBlock = false;
        }

        var token;

        while (src) {
          // escape
          if (token = this.tokenizer.escape(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // tag


          if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
            src = src.substring(token.raw.length);
            inLink = token.inLink;
            inRawBlock = token.inRawBlock;
            tokens.push(token);
            continue;
          } // link


          if (token = this.tokenizer.link(src)) {
            src = src.substring(token.raw.length);

            if (token.type === 'link') {
              token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
            }

            tokens.push(token);
            continue;
          } // reflink, nolink


          if (token = this.tokenizer.reflink(src, this.tokens.links)) {
            src = src.substring(token.raw.length);

            if (token.type === 'link') {
              token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
            }

            tokens.push(token);
            continue;
          } // strong


          if (token = this.tokenizer.strong(src)) {
            src = src.substring(token.raw.length);
            token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
            tokens.push(token);
            continue;
          } // em


          if (token = this.tokenizer.em(src)) {
            src = src.substring(token.raw.length);
            token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
            tokens.push(token);
            continue;
          } // code


          if (token = this.tokenizer.codespan(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // br


          if (token = this.tokenizer.br(src)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // del (gfm)


          if (token = this.tokenizer.del(src)) {
            src = src.substring(token.raw.length);
            token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
            tokens.push(token);
            continue;
          } // autolink


          if (token = this.tokenizer.autolink(src, mangle)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // url (gfm)


          if (!inLink && (token = this.tokenizer.url(src, mangle))) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          } // text


          if (token = this.tokenizer.inlineText(src, inRawBlock, smartypants)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            continue;
          }

          if (src) {
            var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);

            if (this.options.silent) {
              console.error(errMsg);
              break;
            } else {
              throw new Error(errMsg);
            }
          }
        }

        return tokens;
      };

      _createClass(Lexer, null, [{
        key: "rules",
        get: function get() {
          return {
            block: block$1,
            inline: inline$1
          };
        }
      }]);

      return Lexer;
    }();

    var defaults$3 = defaults.defaults;
    var cleanUrl$1 = helpers.cleanUrl,
        escape$1 = helpers.escape;
    /**
     * Renderer
     */

    var Renderer_1 = /*#__PURE__*/function () {
      function Renderer(options) {
        this.options = options || defaults$3;
      }

      var _proto = Renderer.prototype;

      _proto.code = function code(_code, infostring, escaped) {
        var lang = (infostring || '').match(/\S*/)[0];

        if (this.options.highlight) {
          var out = this.options.highlight(_code, lang);

          if (out != null && out !== _code) {
            escaped = true;
            _code = out;
          }
        }

        if (!lang) {
          return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
        }

        return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
      };

      _proto.blockquote = function blockquote(quote) {
        return '<blockquote>\n' + quote + '</blockquote>\n';
      };

      _proto.html = function html(_html) {
        return _html;
      };

      _proto.heading = function heading(text, level, raw, slugger) {
        if (this.options.headerIds) {
          return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
        } // ignore IDs


        return '<h' + level + '>' + text + '</h' + level + '>\n';
      };

      _proto.hr = function hr() {
        return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
      };

      _proto.list = function list(body, ordered, start) {
        var type = ordered ? 'ol' : 'ul',
            startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
        return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
      };

      _proto.listitem = function listitem(text) {
        return '<li>' + text + '</li>\n';
      };

      _proto.checkbox = function checkbox(checked) {
        return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
      };

      _proto.paragraph = function paragraph(text) {
        return '<p>' + text + '</p>\n';
      };

      _proto.table = function table(header, body) {
        if (body) body = '<tbody>' + body + '</tbody>';
        return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
      };

      _proto.tablerow = function tablerow(content) {
        return '<tr>\n' + content + '</tr>\n';
      };

      _proto.tablecell = function tablecell(content, flags) {
        var type = flags.header ? 'th' : 'td';
        var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
        return tag + content + '</' + type + '>\n';
      } // span level renderer
      ;

      _proto.strong = function strong(text) {
        return '<strong>' + text + '</strong>';
      };

      _proto.em = function em(text) {
        return '<em>' + text + '</em>';
      };

      _proto.codespan = function codespan(text) {
        return '<code>' + text + '</code>';
      };

      _proto.br = function br() {
        return this.options.xhtml ? '<br/>' : '<br>';
      };

      _proto.del = function del(text) {
        return '<del>' + text + '</del>';
      };

      _proto.link = function link(href, title, text) {
        href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

        if (href === null) {
          return text;
        }

        var out = '<a href="' + escape$1(href) + '"';

        if (title) {
          out += ' title="' + title + '"';
        }

        out += '>' + text + '</a>';
        return out;
      };

      _proto.image = function image(href, title, text) {
        href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);

        if (href === null) {
          return text;
        }

        var out = '<img src="' + href + '" alt="' + text + '"';

        if (title) {
          out += ' title="' + title + '"';
        }

        out += this.options.xhtml ? '/>' : '>';
        return out;
      };

      _proto.text = function text(_text) {
        return _text;
      };

      return Renderer;
    }();

    /**
     * TextRenderer
     * returns only the textual part of the token
     */
    var TextRenderer_1 = /*#__PURE__*/function () {
      function TextRenderer() {}

      var _proto = TextRenderer.prototype;

      // no need for block level renderers
      _proto.strong = function strong(text) {
        return text;
      };

      _proto.em = function em(text) {
        return text;
      };

      _proto.codespan = function codespan(text) {
        return text;
      };

      _proto.del = function del(text) {
        return text;
      };

      _proto.html = function html(text) {
        return text;
      };

      _proto.text = function text(_text) {
        return _text;
      };

      _proto.link = function link(href, title, text) {
        return '' + text;
      };

      _proto.image = function image(href, title, text) {
        return '' + text;
      };

      _proto.br = function br() {
        return '';
      };

      return TextRenderer;
    }();

    /**
     * Slugger generates header id
     */
    var Slugger_1 = /*#__PURE__*/function () {
      function Slugger() {
        this.seen = {};
      }
      /**
       * Convert string to unique id
       */


      var _proto = Slugger.prototype;

      _proto.slug = function slug(value) {
        var slug = value.toLowerCase().trim() // remove html tags
        .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
        .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');

        if (this.seen.hasOwnProperty(slug)) {
          var originalSlug = slug;

          do {
            this.seen[originalSlug]++;
            slug = originalSlug + '-' + this.seen[originalSlug];
          } while (this.seen.hasOwnProperty(slug));
        }

        this.seen[slug] = 0;
        return slug;
      };

      return Slugger;
    }();

    var defaults$4 = defaults.defaults;
    var unescape$1 = helpers.unescape;
    /**
     * Parsing & Compiling
     */

    var Parser_1 = /*#__PURE__*/function () {
      function Parser(options) {
        this.options = options || defaults$4;
        this.options.renderer = this.options.renderer || new Renderer_1();
        this.renderer = this.options.renderer;
        this.renderer.options = this.options;
        this.textRenderer = new TextRenderer_1();
        this.slugger = new Slugger_1();
      }
      /**
       * Static Parse Method
       */


      Parser.parse = function parse(tokens, options) {
        var parser = new Parser(options);
        return parser.parse(tokens);
      }
      /**
       * Parse Loop
       */
      ;

      var _proto = Parser.prototype;

      _proto.parse = function parse(tokens, top) {
        if (top === void 0) {
          top = true;
        }

        var out = '',
            i,
            j,
            k,
            l2,
            l3,
            row,
            cell,
            header,
            body,
            token,
            ordered,
            start,
            loose,
            itemBody,
            item,
            checked,
            task,
            checkbox;
        var l = tokens.length;

        for (i = 0; i < l; i++) {
          token = tokens[i];

          switch (token.type) {
            case 'space':
              {
                continue;
              }

            case 'hr':
              {
                out += this.renderer.hr();
                continue;
              }

            case 'heading':
              {
                out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape$1(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
                continue;
              }

            case 'code':
              {
                out += this.renderer.code(token.text, token.lang, token.escaped);
                continue;
              }

            case 'table':
              {
                header = ''; // header

                cell = '';
                l2 = token.header.length;

                for (j = 0; j < l2; j++) {
                  cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), {
                    header: true,
                    align: token.align[j]
                  });
                }

                header += this.renderer.tablerow(cell);
                body = '';
                l2 = token.cells.length;

                for (j = 0; j < l2; j++) {
                  row = token.tokens.cells[j];
                  cell = '';
                  l3 = row.length;

                  for (k = 0; k < l3; k++) {
                    cell += this.renderer.tablecell(this.parseInline(row[k]), {
                      header: false,
                      align: token.align[k]
                    });
                  }

                  body += this.renderer.tablerow(cell);
                }

                out += this.renderer.table(header, body);
                continue;
              }

            case 'blockquote':
              {
                body = this.parse(token.tokens);
                out += this.renderer.blockquote(body);
                continue;
              }

            case 'list':
              {
                ordered = token.ordered;
                start = token.start;
                loose = token.loose;
                l2 = token.items.length;
                body = '';

                for (j = 0; j < l2; j++) {
                  item = token.items[j];
                  checked = item.checked;
                  task = item.task;
                  itemBody = '';

                  if (item.task) {
                    checkbox = this.renderer.checkbox(checked);

                    if (loose) {
                      if (item.tokens.length > 0 && item.tokens[0].type === 'text') {
                        item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;

                        if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                          item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                        }
                      } else {
                        item.tokens.unshift({
                          type: 'text',
                          text: checkbox
                        });
                      }
                    } else {
                      itemBody += checkbox;
                    }
                  }

                  itemBody += this.parse(item.tokens, loose);
                  body += this.renderer.listitem(itemBody, task, checked);
                }

                out += this.renderer.list(body, ordered, start);
                continue;
              }

            case 'html':
              {
                // TODO parse inline content if parameter markdown=1
                out += this.renderer.html(token.text);
                continue;
              }

            case 'paragraph':
              {
                out += this.renderer.paragraph(this.parseInline(token.tokens));
                continue;
              }

            case 'text':
              {
                body = token.tokens ? this.parseInline(token.tokens) : token.text;

                while (i + 1 < l && tokens[i + 1].type === 'text') {
                  token = tokens[++i];
                  body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
                }

                out += top ? this.renderer.paragraph(body) : body;
                continue;
              }

            default:
              {
                var errMsg = 'Token with "' + token.type + '" type was not found.';

                if (this.options.silent) {
                  console.error(errMsg);
                  return;
                } else {
                  throw new Error(errMsg);
                }
              }
          }
        }

        return out;
      }
      /**
       * Parse Inline Tokens
       */
      ;

      _proto.parseInline = function parseInline(tokens, renderer) {
        renderer = renderer || this.renderer;
        var out = '',
            i,
            token;
        var l = tokens.length;

        for (i = 0; i < l; i++) {
          token = tokens[i];

          switch (token.type) {
            case 'escape':
              {
                out += renderer.text(token.text);
                break;
              }

            case 'html':
              {
                out += renderer.html(token.text);
                break;
              }

            case 'link':
              {
                out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
                break;
              }

            case 'image':
              {
                out += renderer.image(token.href, token.title, token.text);
                break;
              }

            case 'strong':
              {
                out += renderer.strong(this.parseInline(token.tokens, renderer));
                break;
              }

            case 'em':
              {
                out += renderer.em(this.parseInline(token.tokens, renderer));
                break;
              }

            case 'codespan':
              {
                out += renderer.codespan(token.text);
                break;
              }

            case 'br':
              {
                out += renderer.br();
                break;
              }

            case 'del':
              {
                out += renderer.del(this.parseInline(token.tokens, renderer));
                break;
              }

            case 'text':
              {
                out += renderer.text(token.text);
                break;
              }

            default:
              {
                var errMsg = 'Token with "' + token.type + '" type was not found.';

                if (this.options.silent) {
                  console.error(errMsg);
                  return;
                } else {
                  throw new Error(errMsg);
                }
              }
          }
        }

        return out;
      };

      return Parser;
    }();

    var merge$2 = helpers.merge,
        checkSanitizeDeprecation$1 = helpers.checkSanitizeDeprecation,
        escape$2 = helpers.escape;
    var getDefaults = defaults.getDefaults,
        changeDefaults = defaults.changeDefaults,
        defaults$5 = defaults.defaults;
    /**
     * Marked
     */

    function marked(src, opt, callback) {
      // throw error in case of non string input
      if (typeof src === 'undefined' || src === null) {
        throw new Error('marked(): input parameter is undefined or null');
      }

      if (typeof src !== 'string') {
        throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
      }

      if (typeof opt === 'function') {
        callback = opt;
        opt = null;
      }

      opt = merge$2({}, marked.defaults, opt || {});
      checkSanitizeDeprecation$1(opt);

      if (callback) {
        var highlight = opt.highlight;
        var tokens;

        try {
          tokens = Lexer_1.lex(src, opt);
        } catch (e) {
          return callback(e);
        }

        var done = function done(err) {
          var out;

          if (!err) {
            try {
              out = Parser_1.parse(tokens, opt);
            } catch (e) {
              err = e;
            }
          }

          opt.highlight = highlight;
          return err ? callback(err) : callback(null, out);
        };

        if (!highlight || highlight.length < 3) {
          return done();
        }

        delete opt.highlight;
        if (!tokens.length) return done();
        var pending = 0;
        marked.walkTokens(tokens, function (token) {
          if (token.type === 'code') {
            pending++;
            highlight(token.text, token.lang, function (err, code) {
              if (err) {
                return done(err);
              }

              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }

              pending--;

              if (pending === 0) {
                done();
              }
            });
          }
        });

        if (pending === 0) {
          done();
        }

        return;
      }

      try {
        var _tokens = Lexer_1.lex(src, opt);

        if (opt.walkTokens) {
          marked.walkTokens(_tokens, opt.walkTokens);
        }

        return Parser_1.parse(_tokens, opt);
      } catch (e) {
        e.message += '\nPlease report this to https://github.com/markedjs/marked.';

        if (opt.silent) {
          return '<p>An error occurred:</p><pre>' + escape$2(e.message + '', true) + '</pre>';
        }

        throw e;
      }
    }
    /**
     * Options
     */


    marked.options = marked.setOptions = function (opt) {
      merge$2(marked.defaults, opt);
      changeDefaults(marked.defaults);
      return marked;
    };

    marked.getDefaults = getDefaults;
    marked.defaults = defaults$5;
    /**
     * Use Extension
     */

    marked.use = function (extension) {
      var opts = merge$2({}, extension);

      if (extension.renderer) {
        (function () {
          var renderer = marked.defaults.renderer || new Renderer_1();

          var _loop = function _loop(prop) {
            var prevRenderer = renderer[prop];

            renderer[prop] = function () {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var ret = extension.renderer[prop].apply(renderer, args);

              if (ret === false) {
                ret = prevRenderer.apply(renderer, args);
              }

              return ret;
            };
          };

          for (var prop in extension.renderer) {
            _loop(prop);
          }

          opts.renderer = renderer;
        })();
      }

      if (extension.tokenizer) {
        (function () {
          var tokenizer = marked.defaults.tokenizer || new Tokenizer_1();

          var _loop2 = function _loop2(prop) {
            var prevTokenizer = tokenizer[prop];

            tokenizer[prop] = function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              var ret = extension.tokenizer[prop].apply(tokenizer, args);

              if (ret === false) {
                ret = prevTokenizer.apply(tokenizer, args);
              }

              return ret;
            };
          };

          for (var prop in extension.tokenizer) {
            _loop2(prop);
          }

          opts.tokenizer = tokenizer;
        })();
      }

      if (extension.walkTokens) {
        var walkTokens = marked.defaults.walkTokens;

        opts.walkTokens = function (token) {
          extension.walkTokens(token);

          if (walkTokens) {
            walkTokens(token);
          }
        };
      }

      marked.setOptions(opts);
    };
    /**
     * Run callback for every token
     */


    marked.walkTokens = function (tokens, callback) {
      for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
        var token = _step.value;
        callback(token);

        switch (token.type) {
          case 'table':
            {
              for (var _iterator2 = _createForOfIteratorHelperLoose(token.tokens.header), _step2; !(_step2 = _iterator2()).done;) {
                var cell = _step2.value;
                marked.walkTokens(cell, callback);
              }

              for (var _iterator3 = _createForOfIteratorHelperLoose(token.tokens.cells), _step3; !(_step3 = _iterator3()).done;) {
                var row = _step3.value;

                for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
                  var _cell = _step4.value;
                  marked.walkTokens(_cell, callback);
                }
              }

              break;
            }

          case 'list':
            {
              marked.walkTokens(token.items, callback);
              break;
            }

          default:
            {
              if (token.tokens) {
                marked.walkTokens(token.tokens, callback);
              }
            }
        }
      }
    };
    /**
     * Expose
     */


    marked.Parser = Parser_1;
    marked.parser = Parser_1.parse;
    marked.Renderer = Renderer_1;
    marked.TextRenderer = TextRenderer_1;
    marked.Lexer = Lexer_1;
    marked.lexer = Lexer_1.lex;
    marked.Tokenizer = Tokenizer_1;
    marked.Slugger = Slugger_1;
    marked.parse = marked;
    var marked_1 = marked;

    return marked_1;

  })));
  });

  var purify = createCommonjsModule(function (module, exports) {
  /*! @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.0.8/LICENSE */

  (function (global, factory) {
     module.exports = factory() ;
  }(commonjsGlobal, function () {
    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    var hasOwnProperty = Object.hasOwnProperty,
        setPrototypeOf = Object.setPrototypeOf,
        isFrozen = Object.isFrozen,
        objectKeys = Object.keys;
    var freeze = Object.freeze,
        seal = Object.seal; // eslint-disable-line import/no-mutable-exports

    var _ref = typeof Reflect !== 'undefined' && Reflect,
        apply = _ref.apply,
        construct = _ref.construct;

    if (!apply) {
      apply = function apply(fun, thisValue, args) {
        return fun.apply(thisValue, args);
      };
    }

    if (!freeze) {
      freeze = function freeze(x) {
        return x;
      };
    }

    if (!seal) {
      seal = function seal(x) {
        return x;
      };
    }

    if (!construct) {
      construct = function construct(Func, args) {
        return new (Function.prototype.bind.apply(Func, [null].concat(_toConsumableArray(args))))();
      };
    }

    var arrayForEach = unapply(Array.prototype.forEach);
    var arrayIndexOf = unapply(Array.prototype.indexOf);
    var arrayJoin = unapply(Array.prototype.join);
    var arrayPop = unapply(Array.prototype.pop);
    var arrayPush = unapply(Array.prototype.push);
    var arraySlice = unapply(Array.prototype.slice);

    var stringToLowerCase = unapply(String.prototype.toLowerCase);
    var stringMatch = unapply(String.prototype.match);
    var stringReplace = unapply(String.prototype.replace);
    var stringIndexOf = unapply(String.prototype.indexOf);
    var stringTrim = unapply(String.prototype.trim);

    var regExpTest = unapply(RegExp.prototype.test);
    var regExpCreate = unconstruct(RegExp);

    var typeErrorCreate = unconstruct(TypeError);

    function unapply(func) {
      return function (thisArg) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return apply(func, thisArg, args);
      };
    }

    function unconstruct(func) {
      return function () {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return construct(func, args);
      };
    }

    /* Add properties to a lookup table */
    function addToSet(set, array) {
      if (setPrototypeOf) {
        // Make 'in' and truthy checks like Boolean(set.constructor)
        // independent of any properties defined on Object.prototype.
        // Prevent prototype setters from intercepting set as a this value.
        setPrototypeOf(set, null);
      }

      var l = array.length;
      while (l--) {
        var element = array[l];
        if (typeof element === 'string') {
          var lcElement = stringToLowerCase(element);
          if (lcElement !== element) {
            // Config presets (e.g. tags.js, attrs.js) are immutable.
            if (!isFrozen(array)) {
              array[l] = lcElement;
            }

            element = lcElement;
          }
        }

        set[element] = true;
      }

      return set;
    }

    /* Shallow clone an object */
    function clone(object) {
      var newObject = {};

      var property = void 0;
      for (property in object) {
        if (apply(hasOwnProperty, object, [property])) {
          newObject[property] = object[property];
        }
      }

      return newObject;
    }

    var html = freeze(['a', 'abbr', 'acronym', 'address', 'area', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del', 'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'img', 'input', 'ins', 'kbd', 'label', 'legend', 'li', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meter', 'nav', 'nobr', 'ol', 'optgroup', 'option', 'output', 'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr']);

    // SVG
    var svg = freeze(['svg', 'a', 'altglyph', 'altglyphdef', 'altglyphitem', 'animatecolor', 'animatemotion', 'animatetransform', 'audio', 'canvas', 'circle', 'clippath', 'defs', 'desc', 'ellipse', 'filter', 'font', 'g', 'glyph', 'glyphref', 'hkern', 'image', 'line', 'lineargradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialgradient', 'rect', 'stop', 'style', 'switch', 'symbol', 'text', 'textpath', 'title', 'tref', 'tspan', 'video', 'view', 'vkern']);

    var svgFilters = freeze(['feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence']);

    var mathMl = freeze(['math', 'menclose', 'merror', 'mfenced', 'mfrac', 'mglyph', 'mi', 'mlabeledtr', 'mmultiscripts', 'mn', 'mo', 'mover', 'mpadded', 'mphantom', 'mroot', 'mrow', 'ms', 'mspace', 'msqrt', 'mstyle', 'msub', 'msup', 'msubsup', 'mtable', 'mtd', 'mtext', 'mtr', 'munder', 'munderover']);

    var text = freeze(['#text']);

    var html$1 = freeze(['accept', 'action', 'align', 'alt', 'autocapitalize', 'autocomplete', 'autopictureinpicture', 'autoplay', 'background', 'bgcolor', 'border', 'capture', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'clear', 'color', 'cols', 'colspan', 'controls', 'controlslist', 'coords', 'crossorigin', 'datetime', 'decoding', 'default', 'dir', 'disabled', 'disablepictureinpicture', 'disableremoteplayback', 'download', 'draggable', 'enctype', 'enterkeyhint', 'face', 'for', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'id', 'inputmode', 'integrity', 'ismap', 'kind', 'label', 'lang', 'list', 'loading', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'minlength', 'multiple', 'muted', 'name', 'noshade', 'novalidate', 'nowrap', 'open', 'optimum', 'pattern', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'rev', 'reversed', 'role', 'rows', 'rowspan', 'spellcheck', 'scope', 'selected', 'shape', 'size', 'sizes', 'span', 'srclang', 'start', 'src', 'srcset', 'step', 'style', 'summary', 'tabindex', 'title', 'translate', 'type', 'usemap', 'valign', 'value', 'width', 'xmlns']);

    var svg$1 = freeze(['accent-height', 'accumulate', 'additive', 'alignment-baseline', 'ascent', 'attributename', 'attributetype', 'azimuth', 'basefrequency', 'baseline-shift', 'begin', 'bias', 'by', 'class', 'clip', 'clip-path', 'clip-rule', 'color', 'color-interpolation', 'color-interpolation-filters', 'color-profile', 'color-rendering', 'cx', 'cy', 'd', 'dx', 'dy', 'diffuseconstant', 'direction', 'display', 'divisor', 'dur', 'edgemode', 'elevation', 'end', 'fill', 'fill-opacity', 'fill-rule', 'filter', 'filterunits', 'flood-color', 'flood-opacity', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'fx', 'fy', 'g1', 'g2', 'glyph-name', 'glyphref', 'gradientunits', 'gradienttransform', 'height', 'href', 'id', 'image-rendering', 'in', 'in2', 'k', 'k1', 'k2', 'k3', 'k4', 'kerning', 'keypoints', 'keysplines', 'keytimes', 'lang', 'lengthadjust', 'letter-spacing', 'kernelmatrix', 'kernelunitlength', 'lighting-color', 'local', 'marker-end', 'marker-mid', 'marker-start', 'markerheight', 'markerunits', 'markerwidth', 'maskcontentunits', 'maskunits', 'max', 'mask', 'media', 'method', 'mode', 'min', 'name', 'numoctaves', 'offset', 'operator', 'opacity', 'order', 'orient', 'orientation', 'origin', 'overflow', 'paint-order', 'path', 'pathlength', 'patterncontentunits', 'patterntransform', 'patternunits', 'points', 'preservealpha', 'preserveaspectratio', 'primitiveunits', 'r', 'rx', 'ry', 'radius', 'refx', 'refy', 'repeatcount', 'repeatdur', 'restart', 'result', 'rotate', 'scale', 'seed', 'shape-rendering', 'specularconstant', 'specularexponent', 'spreadmethod', 'startoffset', 'stddeviation', 'stitchtiles', 'stop-color', 'stop-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'stroke-miterlimit', 'stroke-opacity', 'stroke', 'stroke-width', 'style', 'surfacescale', 'tabindex', 'targetx', 'targety', 'transform', 'text-anchor', 'text-decoration', 'text-rendering', 'textlength', 'type', 'u1', 'u2', 'unicode', 'values', 'viewbox', 'visibility', 'version', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'width', 'word-spacing', 'wrap', 'writing-mode', 'xchannelselector', 'ychannelselector', 'x', 'x1', 'x2', 'xmlns', 'y', 'y1', 'y2', 'z', 'zoomandpan']);

    var mathMl$1 = freeze(['accent', 'accentunder', 'align', 'bevelled', 'close', 'columnsalign', 'columnlines', 'columnspan', 'denomalign', 'depth', 'dir', 'display', 'displaystyle', 'encoding', 'fence', 'frame', 'height', 'href', 'id', 'largeop', 'length', 'linethickness', 'lspace', 'lquote', 'mathbackground', 'mathcolor', 'mathsize', 'mathvariant', 'maxsize', 'minsize', 'movablelimits', 'notation', 'numalign', 'open', 'rowalign', 'rowlines', 'rowspacing', 'rowspan', 'rspace', 'rquote', 'scriptlevel', 'scriptminsize', 'scriptsizemultiplier', 'selection', 'separator', 'separators', 'stretchy', 'subscriptshift', 'supscriptshift', 'symmetric', 'voffset', 'width', 'xmlns']);

    var xml = freeze(['xlink:href', 'xml:id', 'xlink:title', 'xml:space', 'xmlns:xlink']);

    // eslint-disable-next-line unicorn/better-regex
    var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
    var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
    var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/); // eslint-disable-line no-useless-escape
    var ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
    var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
    );
    var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
    var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g // eslint-disable-line no-control-regex
    );

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    var getGlobal = function getGlobal() {
      return typeof window === 'undefined' ? null : window;
    };

    /**
     * Creates a no-op policy for internal use only.
     * Don't export this function outside this module!
     * @param {?TrustedTypePolicyFactory} trustedTypes The policy factory.
     * @param {Document} document The document object (to determine policy name suffix)
     * @return {?TrustedTypePolicy} The policy created (or null, if Trusted Types
     * are not supported).
     */
    var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, document) {
      if ((typeof trustedTypes === 'undefined' ? 'undefined' : _typeof(trustedTypes)) !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
        return null;
      }

      // Allow the callers to control the unique policy name
      // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
      // Policy creation with duplicate names throws in Trusted Types.
      var suffix = null;
      var ATTR_NAME = 'data-tt-policy-suffix';
      if (document.currentScript && document.currentScript.hasAttribute(ATTR_NAME)) {
        suffix = document.currentScript.getAttribute(ATTR_NAME);
      }

      var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

      try {
        return trustedTypes.createPolicy(policyName, {
          createHTML: function createHTML(html$$1) {
            return html$$1;
          }
        });
      } catch (_) {
        // Policy creation failed (most likely another DOMPurify script has
        // already run). Skip creating the policy, as this will only cause errors
        // if TT are enforced.
        console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
        return null;
      }
    };

    function createDOMPurify() {
      var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();

      var DOMPurify = function DOMPurify(root) {
        return createDOMPurify(root);
      };

      /**
       * Version label, exposed for easier checks
       * if DOMPurify is up to date or not
       */
      DOMPurify.version = '2.0.11';

      /**
       * Array of elements that DOMPurify removed during sanitation.
       * Empty if nothing was removed.
       */
      DOMPurify.removed = [];

      if (!window || !window.document || window.document.nodeType !== 9) {
        // Not running in a browser, provide a factory function
        // so that you can pass your own Window
        DOMPurify.isSupported = false;

        return DOMPurify;
      }

      var originalDocument = window.document;
      var removeTitle = false;

      var document = window.document;
      var DocumentFragment = window.DocumentFragment,
          HTMLTemplateElement = window.HTMLTemplateElement,
          Node = window.Node,
          NodeFilter = window.NodeFilter,
          _window$NamedNodeMap = window.NamedNodeMap,
          NamedNodeMap = _window$NamedNodeMap === undefined ? window.NamedNodeMap || window.MozNamedAttrMap : _window$NamedNodeMap,
          Text = window.Text,
          Comment = window.Comment,
          DOMParser = window.DOMParser,
          trustedTypes = window.trustedTypes;

      // As per issue #47, the web-components registry is inherited by a
      // new document created via createHTMLDocument. As per the spec
      // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
      // a new empty registry is used when creating a template contents owner
      // document, so we use that as our parent document to ensure nothing
      // is inherited.

      if (typeof HTMLTemplateElement === 'function') {
        var template = document.createElement('template');
        if (template.content && template.content.ownerDocument) {
          document = template.content.ownerDocument;
        }
      }

      var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
      var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';

      var _document = document,
          implementation = _document.implementation,
          createNodeIterator = _document.createNodeIterator,
          getElementsByTagName = _document.getElementsByTagName,
          createDocumentFragment = _document.createDocumentFragment;
      var importNode = originalDocument.importNode;


      var hooks = {};

      /**
       * Expose whether this browser supports running the full DOMPurify.
       */
      DOMPurify.isSupported = implementation && typeof implementation.createHTMLDocument !== 'undefined' && document.documentMode !== 9;

      var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
          ERB_EXPR$$1 = ERB_EXPR,
          DATA_ATTR$$1 = DATA_ATTR,
          ARIA_ATTR$$1 = ARIA_ATTR,
          IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
          ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
      var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;

      /**
       * We consider the elements and attributes below to be safe. Ideally
       * don't add any new ones but feel free to remove unwanted ones.
       */

      /* allowed element names */

      var ALLOWED_TAGS = null;
      var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(html), _toConsumableArray$1(svg), _toConsumableArray$1(svgFilters), _toConsumableArray$1(mathMl), _toConsumableArray$1(text)));

      /* Allowed attribute names */
      var ALLOWED_ATTR = null;
      var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray$1(html$1), _toConsumableArray$1(svg$1), _toConsumableArray$1(mathMl$1), _toConsumableArray$1(xml)));

      /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */
      var FORBID_TAGS = null;

      /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */
      var FORBID_ATTR = null;

      /* Decide if ARIA attributes are okay */
      var ALLOW_ARIA_ATTR = true;

      /* Decide if custom data attributes are okay */
      var ALLOW_DATA_ATTR = true;

      /* Decide if unknown protocols are okay */
      var ALLOW_UNKNOWN_PROTOCOLS = false;

      /* Output should be safe for jQuery's $() factory? */
      var SAFE_FOR_JQUERY = false;

      /* Output should be safe for common template engines.
       * This means, DOMPurify removes data attributes, mustaches and ERB
       */
      var SAFE_FOR_TEMPLATES = false;

      /* Decide if document with <html>... should be returned */
      var WHOLE_DOCUMENT = false;

      /* Track whether config is already set on this instance of DOMPurify. */
      var SET_CONFIG = false;

      /* Decide if all elements (e.g. style, script) must be children of
       * document.body. By default, browsers might move them to document.head */
      var FORCE_BODY = false;

      /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
       * string (or a TrustedHTML object if Trusted Types are supported).
       * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
       */
      var RETURN_DOM = false;

      /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
       * string  (or a TrustedHTML object if Trusted Types are supported) */
      var RETURN_DOM_FRAGMENT = false;

      /* If `RETURN_DOM` or `RETURN_DOM_FRAGMENT` is enabled, decide if the returned DOM
       * `Node` is imported into the current `Document`. If this flag is not enabled the
       * `Node` will belong (its ownerDocument) to a fresh `HTMLDocument`, created by
       * DOMPurify. */
      var RETURN_DOM_IMPORT = false;

      /* Try to return a Trusted Type object instead of a string, retrun a string in
       * case Trusted Types are not supported  */
      var RETURN_TRUSTED_TYPE = false;

      /* Output should be free from DOM clobbering attacks? */
      var SANITIZE_DOM = true;

      /* Keep element content when removing element? */
      var KEEP_CONTENT = true;

      /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
       * of importing it into a new Document and returning a sanitized copy */
      var IN_PLACE = false;

      /* Allow usage of profiles like html, svg and mathMl */
      var USE_PROFILES = {};

      /* Tags to ignore content of when KEEP_CONTENT is true */
      var FORBID_CONTENTS = addToSet({}, ['annotation-xml', 'audio', 'colgroup', 'desc', 'foreignobject', 'head', 'iframe', 'math', 'mi', 'mn', 'mo', 'ms', 'mtext', 'noembed', 'noframes', 'plaintext', 'script', 'style', 'svg', 'template', 'thead', 'title', 'video', 'xmp']);

      /* Tags that are safe for data: URIs */
      var DATA_URI_TAGS = null;
      var DEFAULT_DATA_URI_TAGS = addToSet({}, ['audio', 'video', 'img', 'source', 'image', 'track']);

      /* Attributes safe for values like "javascript:" */
      var URI_SAFE_ATTRIBUTES = null;
      var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ['alt', 'class', 'for', 'id', 'label', 'name', 'pattern', 'placeholder', 'summary', 'title', 'value', 'style', 'xmlns']);

      /* Keep a reference to config to pass to hooks */
      var CONFIG = null;

      /* Ideally, do not touch anything below this line */
      /* ______________________________________________ */

      var formElement = document.createElement('form');

      /**
       * _parseConfig
       *
       * @param  {Object} cfg optional config literal
       */
      // eslint-disable-next-line complexity
      var _parseConfig = function _parseConfig(cfg) {
        if (CONFIG && CONFIG === cfg) {
          return;
        }

        /* Shield configuration object from tampering */
        if (!cfg || (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !== 'object') {
          cfg = {};
        }

        /* Set configuration parameters */
        ALLOWED_TAGS = 'ALLOWED_TAGS' in cfg ? addToSet({}, cfg.ALLOWED_TAGS) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = 'ALLOWED_ATTR' in cfg ? addToSet({}, cfg.ALLOWED_ATTR) : DEFAULT_ALLOWED_ATTR;
        URI_SAFE_ATTRIBUTES = 'ADD_URI_SAFE_ATTR' in cfg ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR) : DEFAULT_URI_SAFE_ATTRIBUTES;
        DATA_URI_TAGS = 'ADD_DATA_URI_TAGS' in cfg ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS) : DEFAULT_DATA_URI_TAGS;
        FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
        FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
        USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
        ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
        ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
        SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false; // Default false
        SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
        WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
        RETURN_DOM = cfg.RETURN_DOM || false; // Default false
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
        RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false; // Default false
        RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
        FORCE_BODY = cfg.FORCE_BODY || false; // Default false
        SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
        KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
        IN_PLACE = cfg.IN_PLACE || false; // Default false
        IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;
        if (SAFE_FOR_TEMPLATES) {
          ALLOW_DATA_ATTR = false;
        }

        if (RETURN_DOM_FRAGMENT) {
          RETURN_DOM = true;
        }

        /* Parse profile info */
        if (USE_PROFILES) {
          ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray$1(text)));
          ALLOWED_ATTR = [];
          if (USE_PROFILES.html === true) {
            addToSet(ALLOWED_TAGS, html);
            addToSet(ALLOWED_ATTR, html$1);
          }

          if (USE_PROFILES.svg === true) {
            addToSet(ALLOWED_TAGS, svg);
            addToSet(ALLOWED_ATTR, svg$1);
            addToSet(ALLOWED_ATTR, xml);
          }

          if (USE_PROFILES.svgFilters === true) {
            addToSet(ALLOWED_TAGS, svgFilters);
            addToSet(ALLOWED_ATTR, svg$1);
            addToSet(ALLOWED_ATTR, xml);
          }

          if (USE_PROFILES.mathMl === true) {
            addToSet(ALLOWED_TAGS, mathMl);
            addToSet(ALLOWED_ATTR, mathMl$1);
            addToSet(ALLOWED_ATTR, xml);
          }
        }

        /* Merge configuration parameters */
        if (cfg.ADD_TAGS) {
          if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
            ALLOWED_TAGS = clone(ALLOWED_TAGS);
          }

          addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
        }

        if (cfg.ADD_ATTR) {
          if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
            ALLOWED_ATTR = clone(ALLOWED_ATTR);
          }

          addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
        }

        if (cfg.ADD_URI_SAFE_ATTR) {
          addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
        }

        /* Add #text in case KEEP_CONTENT is set to true */
        if (KEEP_CONTENT) {
          ALLOWED_TAGS['#text'] = true;
        }

        /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */
        if (WHOLE_DOCUMENT) {
          addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
        }

        /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */
        if (ALLOWED_TAGS.table) {
          addToSet(ALLOWED_TAGS, ['tbody']);
          delete FORBID_TAGS.tbody;
        }

        // Prevent further manipulation of configuration.
        // Not available in IE8, Safari 5, etc.
        if (freeze) {
          freeze(cfg);
        }

        CONFIG = cfg;
      };

      /**
       * _forceRemove
       *
       * @param  {Node} node a DOM node
       */
      var _forceRemove = function _forceRemove(node) {
        arrayPush(DOMPurify.removed, { element: node });
        try {
          // eslint-disable-next-line unicorn/prefer-node-remove
          node.parentNode.removeChild(node);
        } catch (_) {
          node.outerHTML = emptyHTML;
        }
      };

      /**
       * _removeAttribute
       *
       * @param  {String} name an Attribute name
       * @param  {Node} node a DOM node
       */
      var _removeAttribute = function _removeAttribute(name, node) {
        try {
          arrayPush(DOMPurify.removed, {
            attribute: node.getAttributeNode(name),
            from: node
          });
        } catch (_) {
          arrayPush(DOMPurify.removed, {
            attribute: null,
            from: node
          });
        }

        node.removeAttribute(name);
      };

      /**
       * _initDocument
       *
       * @param  {String} dirty a string of dirty markup
       * @return {Document} a DOM, filled with the dirty markup
       */
      var _initDocument = function _initDocument(dirty) {
        /* Create a HTML document */
        var doc = void 0;
        var leadingWhitespace = void 0;

        if (FORCE_BODY) {
          dirty = '<remove></remove>' + dirty;
        } else {
          /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */
          var matches = stringMatch(dirty, /^[\r\n\t ]+/);
          leadingWhitespace = matches && matches[0];
        }

        var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
        /* Use the DOMParser API by default, fallback later if needs be */
        try {
          doc = new DOMParser().parseFromString(dirtyPayload, 'text/html');
        } catch (_) {}

        /* Remove title to fix a mXSS bug in older MS Edge */
        if (removeTitle) {
          addToSet(FORBID_TAGS, ['title']);
        }

        /* Use createHTMLDocument in case DOMParser is not available */
        if (!doc || !doc.documentElement) {
          doc = implementation.createHTMLDocument('');
          var _doc = doc,
              body = _doc.body;

          body.parentNode.removeChild(body.parentNode.firstElementChild);
          body.outerHTML = dirtyPayload;
        }

        if (dirty && leadingWhitespace) {
          doc.body.insertBefore(document.createTextNode(leadingWhitespace), doc.body.childNodes[0] || null);
        }

        /* Work on whole document or just its body */
        return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
      };

      /* Here we test for a broken feature in Edge that might cause mXSS */
      if (DOMPurify.isSupported) {
        (function () {
          try {
            var doc = _initDocument('<x/><title>&lt;/title&gt;&lt;img&gt;');
            if (regExpTest(/<\/title/, doc.querySelector('title').innerHTML)) {
              removeTitle = true;
            }
          } catch (_) {}
        })();
      }

      /**
       * _createIterator
       *
       * @param  {Document} root document/fragment to create iterator for
       * @return {Iterator} iterator instance
       */
      var _createIterator = function _createIterator(root) {
        return createNodeIterator.call(root.ownerDocument || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT, function () {
          return NodeFilter.FILTER_ACCEPT;
        }, false);
      };

      /**
       * _isClobbered
       *
       * @param  {Node} elm element to check for clobbering attacks
       * @return {Boolean} true if clobbered, false if safe
       */
      var _isClobbered = function _isClobbered(elm) {
        if (elm instanceof Text || elm instanceof Comment) {
          return false;
        }

        if (typeof elm.nodeName !== 'string' || typeof elm.textContent !== 'string' || typeof elm.removeChild !== 'function' || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== 'function' || typeof elm.setAttribute !== 'function' || typeof elm.namespaceURI !== 'string') {
          return true;
        }

        return false;
      };

      /**
       * _isNode
       *
       * @param  {Node} obj object to check whether it's a DOM node
       * @return {Boolean} true is object is a DOM node
       */
      var _isNode = function _isNode(object) {
        return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? object instanceof Node : object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string';
      };

      /**
       * _executeHook
       * Execute user configurable hooks
       *
       * @param  {String} entryPoint  Name of the hook's entry point
       * @param  {Node} currentNode node to work on with the hook
       * @param  {Object} data additional hook parameters
       */
      var _executeHook = function _executeHook(entryPoint, currentNode, data) {
        if (!hooks[entryPoint]) {
          return;
        }

        arrayForEach(hooks[entryPoint], function (hook) {
          hook.call(DOMPurify, currentNode, data, CONFIG);
        });
      };

      /**
       * _sanitizeElements
       *
       * @protect nodeName
       * @protect textContent
       * @protect removeChild
       *
       * @param   {Node} currentNode to check for permission to exist
       * @return  {Boolean} true if node was killed, false if left alive
       */
      // eslint-disable-next-line complexity
      var _sanitizeElements = function _sanitizeElements(currentNode) {
        var content = void 0;

        /* Execute a hook if present */
        _executeHook('beforeSanitizeElements', currentNode, null);

        /* Check if element is clobbered or can clobber */
        if (_isClobbered(currentNode)) {
          _forceRemove(currentNode);
          return true;
        }

        /* Now let's check the element's type and name */
        var tagName = stringToLowerCase(currentNode.nodeName);

        /* Execute a hook if present */
        _executeHook('uponSanitizeElement', currentNode, {
          tagName: tagName,
          allowedTags: ALLOWED_TAGS
        });

        /* Take care of an mXSS pattern using p, br inside svg, math */
        if ((tagName === 'svg' || tagName === 'math') && currentNode.querySelectorAll('p, br').length !== 0) {
          _forceRemove(currentNode);
          return true;
        }

        /* Remove element if anything forbids its presence */
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          /* Keep content except for black-listed elements */
          if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && typeof currentNode.insertAdjacentHTML === 'function') {
            try {
              var htmlToInsert = currentNode.innerHTML;
              currentNode.insertAdjacentHTML('AfterEnd', trustedTypesPolicy ? trustedTypesPolicy.createHTML(htmlToInsert) : htmlToInsert);
            } catch (_) {}
          }

          _forceRemove(currentNode);
          return true;
        }

        /* Remove in case a noscript/noembed XSS is suspected */
        if (tagName === 'noscript' && regExpTest(/<\/noscript/i, currentNode.innerHTML)) {
          _forceRemove(currentNode);
          return true;
        }

        if (tagName === 'noembed' && regExpTest(/<\/noembed/i, currentNode.innerHTML)) {
          _forceRemove(currentNode);
          return true;
        }

        /* Convert markup to cover jQuery behavior */
        if (SAFE_FOR_JQUERY && !currentNode.firstElementChild && (!currentNode.content || !currentNode.content.firstElementChild) && regExpTest(/</g, currentNode.textContent)) {
          arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
          if (currentNode.innerHTML) {
            currentNode.innerHTML = stringReplace(currentNode.innerHTML, /</g, '&lt;');
          } else {
            currentNode.innerHTML = stringReplace(currentNode.textContent, /</g, '&lt;');
          }
        }

        /* Sanitize element content to be template-safe */
        if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
          /* Get the element's text content */
          content = currentNode.textContent;
          content = stringReplace(content, MUSTACHE_EXPR$$1, ' ');
          content = stringReplace(content, ERB_EXPR$$1, ' ');
          if (currentNode.textContent !== content) {
            arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
            currentNode.textContent = content;
          }
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeElements', currentNode, null);

        return false;
      };

      /**
       * _isValidAttribute
       *
       * @param  {string} lcTag Lowercase tag name of containing element.
       * @param  {string} lcName Lowercase attribute name.
       * @param  {string} value Attribute value.
       * @return {Boolean} Returns true if `value` is valid, otherwise false.
       */
      // eslint-disable-next-line complexity
      var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
        /* Make sure attribute cannot clobber */
        if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
          return false;
        }

        /* Allow valid data-* attributes: At least one character after "-"
            (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
            XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
            We don't need to check the value; it's always URI safe. */
        if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$$1, lcName)) ; else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$$1, lcName)) ; else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
          return false;

          /* Check value is safe. First, is attr inert? If so, is safe */
        } else if (URI_SAFE_ATTRIBUTES[lcName]) ; else if (regExpTest(IS_ALLOWED_URI$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ; else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$$1, stringReplace(value, ATTR_WHITESPACE$$1, ''))) ; else if (!value) ; else {
          return false;
        }

        return true;
      };

      /**
       * _sanitizeAttributes
       *
       * @protect attributes
       * @protect nodeName
       * @protect removeAttribute
       * @protect setAttribute
       *
       * @param  {Node} currentNode to sanitize
       */
      // eslint-disable-next-line complexity
      var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
        var attr = void 0;
        var value = void 0;
        var lcName = void 0;
        var idAttr = void 0;
        var l = void 0;
        /* Execute a hook if present */
        _executeHook('beforeSanitizeAttributes', currentNode, null);

        var attributes = currentNode.attributes;

        /* Check if we have attributes; if not we might have a text node */

        if (!attributes) {
          return;
        }

        var hookEvent = {
          attrName: '',
          attrValue: '',
          keepAttr: true,
          allowedAttributes: ALLOWED_ATTR
        };
        l = attributes.length;

        /* Go backwards over all attributes; safely remove bad ones */
        while (l--) {
          attr = attributes[l];
          var _attr = attr,
              name = _attr.name,
              namespaceURI = _attr.namespaceURI;

          value = stringTrim(attr.value);
          lcName = stringToLowerCase(name);

          /* Execute a hook if present */
          hookEvent.attrName = lcName;
          hookEvent.attrValue = value;
          hookEvent.keepAttr = true;
          hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
          _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
          value = hookEvent.attrValue;
          /* Did the hooks approve of the attribute? */
          if (hookEvent.forceKeepAttr) {
            continue;
          }

          /* Remove attribute */
          // Safari (iOS + Mac), last tested v8.0.5, crashes if you try to
          // remove a "name" attribute from an <img> tag that has an "id"
          // attribute at the time.
          if (lcName === 'name' && currentNode.nodeName === 'IMG' && attributes.id) {
            idAttr = attributes.id;
            attributes = arraySlice(attributes, []);
            _removeAttribute('id', currentNode);
            _removeAttribute(name, currentNode);
            if (arrayIndexOf(attributes, idAttr) > l) {
              currentNode.setAttribute('id', idAttr.value);
            }
          } else if (
          // This works around a bug in Safari, where input[type=file]
          // cannot be dynamically set after type has been removed
          currentNode.nodeName === 'INPUT' && lcName === 'type' && value === 'file' && hookEvent.keepAttr && (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])) {
            continue;
          } else {
            // This avoids a crash in Safari v9.0 with double-ids.
            // The trick is to first set the id to be empty and then to
            // remove the attribute
            if (name === 'id') {
              currentNode.setAttribute(name, '');
            }

            _removeAttribute(name, currentNode);
          }

          /* Did the hooks approve of the attribute? */
          if (!hookEvent.keepAttr) {
            continue;
          }

          /* Work around a security issue in jQuery 3.0 */
          if (SAFE_FOR_JQUERY && regExpTest(/\/>/i, value)) {
            _removeAttribute(name, currentNode);
            continue;
          }

          /* Take care of an mXSS pattern using namespace switches */
          if (regExpTest(/svg|math/i, currentNode.namespaceURI) && regExpTest(regExpCreate('</(' + arrayJoin(objectKeys(FORBID_CONTENTS), '|') + ')', 'i'), value)) {
            _removeAttribute(name, currentNode);
            continue;
          }

          /* Sanitize attribute content to be template-safe */
          if (SAFE_FOR_TEMPLATES) {
            value = stringReplace(value, MUSTACHE_EXPR$$1, ' ');
            value = stringReplace(value, ERB_EXPR$$1, ' ');
          }

          /* Is `value` valid for this attribute? */
          var lcTag = currentNode.nodeName.toLowerCase();
          if (!_isValidAttribute(lcTag, lcName, value)) {
            continue;
          }

          /* Handle invalid data-* attribute set by try-catching it */
          try {
            if (namespaceURI) {
              currentNode.setAttributeNS(namespaceURI, name, value);
            } else {
              /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */
              currentNode.setAttribute(name, value);
            }

            arrayPop(DOMPurify.removed);
          } catch (_) {}
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeAttributes', currentNode, null);
      };

      /**
       * _sanitizeShadowDOM
       *
       * @param  {DocumentFragment} fragment to iterate over recursively
       */
      var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
        var shadowNode = void 0;
        var shadowIterator = _createIterator(fragment);

        /* Execute a hook if present */
        _executeHook('beforeSanitizeShadowDOM', fragment, null);

        while (shadowNode = shadowIterator.nextNode()) {
          /* Execute a hook if present */
          _executeHook('uponSanitizeShadowNode', shadowNode, null);

          /* Sanitize tags and elements */
          if (_sanitizeElements(shadowNode)) {
            continue;
          }

          /* Deep shadow DOM detected */
          if (shadowNode.content instanceof DocumentFragment) {
            _sanitizeShadowDOM(shadowNode.content);
          }

          /* Check attributes, sanitize if necessary */
          _sanitizeAttributes(shadowNode);
        }

        /* Execute a hook if present */
        _executeHook('afterSanitizeShadowDOM', fragment, null);
      };

      /**
       * Sanitize
       * Public method providing core sanitation functionality
       *
       * @param {String|Node} dirty string or DOM node
       * @param {Object} configuration object
       */
      // eslint-disable-next-line complexity
      DOMPurify.sanitize = function (dirty, cfg) {
        var body = void 0;
        var importedNode = void 0;
        var currentNode = void 0;
        var oldNode = void 0;
        var returnNode = void 0;
        /* Make sure we have a string to sanitize.
          DO NOT return early, as this will return the wrong type if
          the user has requested a DOM object rather than a string */
        if (!dirty) {
          dirty = '<!-->';
        }

        /* Stringify, in case dirty is an object */
        if (typeof dirty !== 'string' && !_isNode(dirty)) {
          // eslint-disable-next-line no-negated-condition
          if (typeof dirty.toString !== 'function') {
            throw typeErrorCreate('toString is not a function');
          } else {
            dirty = dirty.toString();
            if (typeof dirty !== 'string') {
              throw typeErrorCreate('dirty is not a string, aborting');
            }
          }
        }

        /* Check we can run. Otherwise fall back or ignore */
        if (!DOMPurify.isSupported) {
          if (_typeof(window.toStaticHTML) === 'object' || typeof window.toStaticHTML === 'function') {
            if (typeof dirty === 'string') {
              return window.toStaticHTML(dirty);
            }

            if (_isNode(dirty)) {
              return window.toStaticHTML(dirty.outerHTML);
            }
          }

          return dirty;
        }

        /* Assign config vars */
        if (!SET_CONFIG) {
          _parseConfig(cfg);
        }

        /* Clean up removed elements */
        DOMPurify.removed = [];

        /* Check if dirty is correctly typed for IN_PLACE */
        if (typeof dirty === 'string') {
          IN_PLACE = false;
        }

        if (IN_PLACE) ; else if (dirty instanceof Node) {
          /* If dirty is a DOM element, append to an empty document to avoid
             elements being stripped by the parser */
          body = _initDocument('<!-->');
          importedNode = body.ownerDocument.importNode(dirty, true);
          if (importedNode.nodeType === 1 && importedNode.nodeName === 'BODY') {
            /* Node is already a body, use as is */
            body = importedNode;
          } else if (importedNode.nodeName === 'HTML') {
            body = importedNode;
          } else {
            // eslint-disable-next-line unicorn/prefer-node-append
            body.appendChild(importedNode);
          }
        } else {
          /* Exit directly if we have nothing to do */
          if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && RETURN_TRUSTED_TYPE &&
          // eslint-disable-next-line unicorn/prefer-includes
          dirty.indexOf('<') === -1) {
            return trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
          }

          /* Initialize the document to work on */
          body = _initDocument(dirty);

          /* Check we have a DOM node from the data */
          if (!body) {
            return RETURN_DOM ? null : emptyHTML;
          }
        }

        /* Remove first element node (ours) if FORCE_BODY is set */
        if (body && FORCE_BODY) {
          _forceRemove(body.firstChild);
        }

        /* Get node iterator */
        var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

        /* Now start iterating over the created document */
        while (currentNode = nodeIterator.nextNode()) {
          /* Fix IE's strange behavior with manipulated textNodes #89 */
          if (currentNode.nodeType === 3 && currentNode === oldNode) {
            continue;
          }

          /* Sanitize tags and elements */
          if (_sanitizeElements(currentNode)) {
            continue;
          }

          /* Shadow DOM detected, sanitize it */
          if (currentNode.content instanceof DocumentFragment) {
            _sanitizeShadowDOM(currentNode.content);
          }

          /* Check attributes, sanitize if necessary */
          _sanitizeAttributes(currentNode);

          oldNode = currentNode;
        }

        oldNode = null;

        /* If we sanitized `dirty` in-place, return it. */
        if (IN_PLACE) {
          return dirty;
        }

        /* Return sanitized string or DOM */
        if (RETURN_DOM) {
          if (RETURN_DOM_FRAGMENT) {
            returnNode = createDocumentFragment.call(body.ownerDocument);

            while (body.firstChild) {
              // eslint-disable-next-line unicorn/prefer-node-append
              returnNode.appendChild(body.firstChild);
            }
          } else {
            returnNode = body;
          }

          if (RETURN_DOM_IMPORT) {
            /*
              AdoptNode() is not used because internal state is not reset
              (e.g. the past names map of a HTMLFormElement), this is safe
              in theory but we would rather not risk another attack vector.
              The state that is cloned by importNode() is explicitly defined
              by the specs.
            */
            returnNode = importNode.call(originalDocument, returnNode, true);
          }

          return returnNode;
        }

        var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

        /* Sanitize final string template-safe */
        if (SAFE_FOR_TEMPLATES) {
          serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$$1, ' ');
          serializedHTML = stringReplace(serializedHTML, ERB_EXPR$$1, ' ');
        }

        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
      };

      /**
       * Public method to set the configuration once
       * setConfig
       *
       * @param {Object} cfg configuration object
       */
      DOMPurify.setConfig = function (cfg) {
        _parseConfig(cfg);
        SET_CONFIG = true;
      };

      /**
       * Public method to remove the configuration
       * clearConfig
       *
       */
      DOMPurify.clearConfig = function () {
        CONFIG = null;
        SET_CONFIG = false;
      };

      /**
       * Public method to check if an attribute value is valid.
       * Uses last set config, if any. Otherwise, uses config defaults.
       * isValidAttribute
       *
       * @param  {string} tag Tag name of containing element.
       * @param  {string} attr Attribute name.
       * @param  {string} value Attribute value.
       * @return {Boolean} Returns true if `value` is valid. Otherwise, returns false.
       */
      DOMPurify.isValidAttribute = function (tag, attr, value) {
        /* Initialize shared config vars if necessary. */
        if (!CONFIG) {
          _parseConfig({});
        }

        var lcTag = stringToLowerCase(tag);
        var lcName = stringToLowerCase(attr);
        return _isValidAttribute(lcTag, lcName, value);
      };

      /**
       * AddHook
       * Public method to add DOMPurify hooks
       *
       * @param {String} entryPoint entry point for the hook to add
       * @param {Function} hookFunction function to execute
       */
      DOMPurify.addHook = function (entryPoint, hookFunction) {
        if (typeof hookFunction !== 'function') {
          return;
        }

        hooks[entryPoint] = hooks[entryPoint] || [];
        arrayPush(hooks[entryPoint], hookFunction);
      };

      /**
       * RemoveHook
       * Public method to remove a DOMPurify hook at a given entryPoint
       * (pops it from the stack of hooks if more are present)
       *
       * @param {String} entryPoint entry point for the hook to remove
       */
      DOMPurify.removeHook = function (entryPoint) {
        if (hooks[entryPoint]) {
          arrayPop(hooks[entryPoint]);
        }
      };

      /**
       * RemoveHooks
       * Public method to remove all DOMPurify hooks at a given entryPoint
       *
       * @param  {String} entryPoint entry point for the hooks to remove
       */
      DOMPurify.removeHooks = function (entryPoint) {
        if (hooks[entryPoint]) {
          hooks[entryPoint] = [];
        }
      };

      /**
       * RemoveAllHooks
       * Public method to remove all DOMPurify hooks
       *
       */
      DOMPurify.removeAllHooks = function () {
        hooks = {};
      };

      return DOMPurify;
    }

    var purify = createDOMPurify();

    return purify;

  }));

  });

  function renderMD(content) {
      const html = marked(content, {
          gfm: true,
          breaks: true,
      });
      return purify.sanitize(html);
  }
  const uuid = v4;

  class CommentForm extends m {
      constructor(props) {
          super(props);
          this.previewMD = (e) => {
              const el = e.target;
              this.setState({
                  commentContent: el.value || '',
                  markdownContent: renderMD(el.value || ''),
              });
          };
          this.handlePreview = () => {
              this.setState({
                  isPreview: !this.state.isPreview,
              });
          };
          this.handleComment = async (e) => {
              e.preventDefault();
              if (!(this.state.commentContent && this.props.logged)) {
                  return;
              }
              await db.addComment({
                  id: uuid(),
                  user: this.props.user,
                  content: this.state.commentContent,
                  timestamp: new Date().getTime(),
                  likes: {},
              });
              this.props.refreshComments();
          };
          this.state = {
              isPreview: false,
              markdownContent: '',
              commentContent: '',
          };
      }
      async handleLogout() {
          await logout();
      }
      handleLogin(type) {
          this.props.handleLogin(type);
      }
      render(props, state) {
          const previewText = '预览: ' + (state.isPreview ? 'ON' : 'OFF');
          return (h("form", { class: "firement-form" },
              h("div", { class: "firement-form__header" },
                  h("div", { class: "firement-row" },
                      h("img", { src: props.user.avatar, alt: "avatar", class: "firement-avatar" }),
                      h("span", { class: "firement-form__label" },
                          " ",
                          props.user.name,
                          " "))),
              h("div", { class: "firement-form__content" }, props.logged ? (h("div", { className: "firement-box firement-form__comment_input" }, this.state.isPreview ? (h("div", { class: "firement-box firement-form__preview" },
                  h("div", { className: "firement-form__preview_content", dangerouslySetInnerHTML: { __html: state.markdownContent } }))) : (h("textarea", { name: "content", placeholder: "Markdown Supported", class: "firement-form__textarea", value: state.commentContent, onInput: this.previewMD })))) : (h("div", { className: "firement-box firement-form__not_login" },
                  h("label", { class: "firement-form__label" }, "\u8BF7\u767B\u5F55\u540E\u8BC4\u8BBA"),
                  h("input", { type: "button", class: "firement-button", value: "Google", onClick: this.handleLogin.bind(this, LoginTypes.Google) }),
                  h("input", { type: "button", class: "firement-button", value: "GitHub", onClick: this.handleLogin.bind(this, LoginTypes.GitHub) }),
                  h("input", { type: "button", class: "firement-button", value: "Anonymously", onClick: this.handleLogin.bind(this, LoginTypes.Anonymously) })))),
              h("div", { className: "firement-row" },
                  h("div", { className: "firement-row__right" },
                      h("input", { type: "button", value: previewText, class: "firement-button", onClick: this.handlePreview }),
                      h("input", { type: "submit", value: "\u63D0\u4EA4\u8BC4\u8BBA", class: "firement-submit firement-button", onClick: this.handleComment })))));
      }
  }

  const avatar = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABjqADAAQAAAABAAABjwAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgBjwGOAwERAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/dAAQAMv/aAAwDAQACEQMRAD8A/D+v9OD+2AoAz6DoCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA//0Pw93r/fX81r/Tg/tm0uz+4N6/31/NaAtLs/uKNBuFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB//9H8L6/04P7gCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/0vwvr/Tg/uAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP/T/C+v9OD+4AoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/9T8L6/04P7gCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/1fwvr/Tg/uAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP/W/C+v9OD+4AoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA/9f8L6/04P7gCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgD/0Pwvr/Tg/uAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP/R/C+v9OD+4AoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA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`;

  function Comment(props) {
      const { handleLikes, comment, user } = props;
      const pageLink = comment.user.homePage;
      const timeDate = new Date(+props.comment.timestamp).toISOString();
      const liked = user.id ? comment.likes[user.id] : false;
      const handleLikeClick = async () => handleLikes(comment, !liked);
      const likeNum = Object.keys(comment.likes).filter((id) => comment.likes[id]).length;
      const avatarImg = comment.user.avatar.match(/^[a-z]+\:\/\//) ? comment.user.avatar : avatar;
      return (h("section", { className: "firement-comment firement-form", "data-id": comment.id },
          h("div", { className: "firement-form__header firement-row" },
              h("div", { className: "firement-row__left" },
                  h("a", { href: pageLink },
                      h("img", { src: avatarImg, alt: "avatar", className: "firement-avatar" })),
                  h("span", { className: "firement-form__label" }, comment.user.name),
                  h("span", { className: "firement-form__label firement-comment__time" },
                      "comment at: ",
                      timeDate)),
              h("div", { className: "firement-row__right" },
                  h("span", { className: "firement-comment__likes" },
                      h("i", { className: "firement-comment__likes_icon", onClick: handleLikeClick }),
                      h("span", { className: "firement-form__label" }, likeNum),
                      h("span", { className: "firement-form__label firement-comment__layer" },
                          "# ",
                          props.index)))),
          h("div", { className: "firement-content", dangerouslySetInnerHTML: { __html: renderMD(comment.content) } })));
  }

  class Comments extends m {
      render(props) {
          const { comments, user, handleLikes } = props;
          return (h("div", { className: "firement-comments" }, comments.map((comment, i) => (h(Comment, { user: user, comment: comment, index: i, handleLikes: handleLikes })))));
      }
  }

  class App extends m {
      constructor() {
          super();
          this.refreshComments = async () => {
              const comments = await this.getComments();
              this.setState({
                  comments,
              });
          };
          this.handleLogin = async (type) => {
              try {
                  let user = await login(type);
                  if (type === LoginTypes.Anonymously) {
                      user.avatar = avatar;
                      user.name = '匿名';
                      user.email = void 0;
                  }
                  Object.keys(user).forEach((key) => {
                      // @ts-ignore
                      if (user[key] === undefined) {
                          // @ts-ignore
                          user[key] = null;
                      }
                  });
                  db.user = user;
                  this.setState({
                      user,
                      logged: true,
                  });
              }
              catch (error) {
                  alert('登录失败: ' + error);
              }
          };
          this.handleLikes = async (comment, liked) => {
              if (!this.state.logged) {
                  return;
              }
              try {
                  await db.updateCommentLike(comment.id, liked);
                  const data = await db.getComment(comment.id);
                  const idx = this.state.comments.findIndex((c) => c.id === data.id);
                  this.setState({
                      [`comments[${idx}]`]: data,
                  });
                  console.log(idx, data);
              }
              catch (error) {
                  alert('评论失败:' + error);
              }
          };
          this.state = {
              comments: [],
              logged: false,
              user: {
                  id: '',
                  name: '匿名',
                  avatar,
              },
          };
      }
      componentWillMount() {
          this.refreshComments();
      }
      async getComments() {
          const list = (await db.getAllComments());
          return list;
      }
      render(p, s) {
          const { user, logged, comments } = s;
          return (h("div", { class: "firement-root" },
              h(CommentForm, { refreshComments: this.refreshComments, user: user, logged: logged, handleLogin: this.handleLogin }),
              h(Comments, { user: user, comments: comments, handleLikes: this.handleLikes })));
      }
  }
  function index (opt, element) {
      db.init(opt);
      H(h(App, null), element);
  }

  return index;

})));
