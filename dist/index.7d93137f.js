// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5J8Fp":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "b5ec41889fd9c8ba20f8d3037d93137f";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] ???? Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ??? Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ???? ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3coI7":[function(require,module,exports) {
var _algoliaAutocompleteJs = require('@algolia/autocomplete-js');
var _algoliasearchLite = require('algoliasearch/lite');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _algoliasearchLiteDefault = _parcelHelpers.interopDefault(_algoliasearchLite);
var _preact = require('preact');
require('@algolia/autocomplete-theme-classic');
var _jsxFileName = "C:\\work\\changecx\\saterday\\algolia-autocomplete-custom\\app.tsx";
const searchClient = _algoliasearchLiteDefault.default('RA46FT2Q5G', '69a1fff0143c7121bc2f35825680b272');
_algoliaAutocompleteJs.autocomplete({
  container: '#autocomplete',
  detachedMediaQuery: '',
  defaultActiveItemId: 0,
  debug: true,
  getSources() {
    return [{
      sourceId: 'hits',
      getItems({query}) {
        return _algoliaAutocompleteJs.getAlgoliaResults({
          searchClient,
          queries: [{
            indexName: 'CTL_hermanmiller_ct_demo_products_data',
            query,
            params: {
              hitsPerPage: 8
            }
          }]
        });
      },
      getItemUrl({item}) {
        return item.url;
      },
      onActive({item, setContext}) {
        setContext({
          preview: item
        });
      },
      templates: {
        item({item, components}) {
          const data = {
            name: item.name['en'],
            image: item.images[0].url
          };
          return _preact.h("a", {
            className: "aa-ItemLink",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }
          }, "eswaran", _preact.h("div", {
            className: "aa-ItemContent",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 17
            }
          }, _preact.h("div", {
            className: "aa-ItemIcon",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 19
            }
          }, _preact.h("img", {
            src: data.image,
            alt: data.name,
            width: "40",
            height: "40",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 21
            }
          })), _preact.h("div", {
            className: "aa-ItemContentBody",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 19
            }
          }, _preact.h("div", {
            className: "aa-ItemContentTitle",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 21
            }
          }, _preact.h(components.Highlight, {
            hit: data,
            attribute: "name",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 21
            }
          })))));
        }
      }
    }, {
      sourceId: 'suggestions',
      getItems({query}) {
        return _algoliaAutocompleteJs.getAlgoliaResults({
          searchClient,
          queries: [{
            indexName: 'CTL_hermanmiller_ct_demo_products_data_query_suggestions',
            query,
            params: {
              hitsPerPage: 4
            }
          }]
        });
      },
      onSelect({item, setQuery, setIsOpen, refresh}) {
        setQuery(`${item.query} `);
        setIsOpen(true);
        refresh();
      },
      templates: {
        header({Fragment}) {
          return _preact.h(Fragment, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }
          }, _preact.h("span", {
            className: "aa-SourceHeaderTitle",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 17
            }
          }, "Can't find what you're looking for?"), _preact.h("div", {
            className: "aa-SourceHeaderLine",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 17
            }
          }));
        },
        item({item, components}) {
          return _preact.h("div", {
            className: "aa-QuerySuggestion",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }
          }, _preact.h(components.Highlight, {
            hit: item,
            attribute: "query",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 17
            }
          }));
        }
      }
    }];
  },
  render({children, state, Fragment, components}, root) {
    const {preview} = state.context;
    const suggestion = state.collections[1].items.slice(0, 5);
    const results = state.collections[0].items.map(x => {
      return {
        query: x.name.en,
        description: x.description.de
      };
    }).slice(0, 5);
    _preact.render(_preact.h(Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 7
      }
    }, _preact.h("div", {
      className: "aa-Grid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }, _preact.h("div", {
      className: "aa-Results aa-Column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }
    }, _preact.h("div", {
      className: "leftContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    }, suggestion.map(item => _preact.h("a", {
      href: "#",
      className: "leftContaineritem",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 38
      }
    }, _preact.h("div", {
      className: "text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 15
      }
    }, _preact.h(components.Highlight, {
      hit: item,
      attribute: "query",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    })))))), _preact.h("div", {
      className: "aa-Preview aa-Column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 11
      }
    }, _preact.h("div", {
      class: "rightContainer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }
    }, results.map(item => _preact.h("div", {
      className: "rightContainerItem",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    }, "   ", _preact.h("div", {
      class: "txtname",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 52
      }
    }, _preact.h(components.Highlight, {
      hit: item,
      tagName: "query",
      attribute: "query",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    })), _preact.h("div", {
      class: "txtdescription",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }
    }, "  ", _preact.h(components.Highlight, {
      hit: item,
      tagName: "description",
      attribute: "description",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 43
      }
    }), " "))))))), root);
  }
});

},{"@algolia/autocomplete-js":"3Dm7o","algoliasearch/lite":"1Rj7s","preact":"4L2dE","@algolia/autocomplete-theme-classic":"4ZOnh","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"3Dm7o":[function(require,module,exports) {
var define;
/*! @algolia/autocomplete-js 1.5.3 | MIT License | ?? Algolia, Inc. and contributors | https://github.com/algolia/autocomplete*/
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self)["@algolia/autocomplete-js"] = {});
})(this, function (e) {
  "use strict";
  function t(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function n(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = null != arguments[n] ? arguments[n] : {};
      n % 2 ? t(Object(r), !0).forEach(function (t) {
        o(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function r(e) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, r(e));
  }
  function o(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function i() {
    return (i = Object.assign || (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }), i.apply(this, arguments));
  }
  function u(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function a(e) {
    return (function (e) {
      if (Array.isArray(e)) return c(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return c(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return c(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function l(e) {
    return {
      current: e
    };
  }
  function s(e, t) {
    var n = void 0;
    return function () {
      for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
      (n && clearTimeout(n), n = setTimeout(function () {
        return e.apply(void 0, o);
      }, t));
    };
  }
  function p(e) {
    return e.reduce(function (e, t) {
      return e.concat(t);
    }, []);
  }
  var f = 0;
  function d() {
    return ("autocomplete-").concat(f++);
  }
  function v(e, t) {
    return t.reduce(function (e, t) {
      return e && e[t];
    }, e);
  }
  function m(e) {
    return 0 === e.collections.length ? 0 : e.collections.reduce(function (e, t) {
      return e + t.items.length;
    }, 0);
  }
  var h = function () {}, g = "1.5.3", y = [{
    segment: "autocomplete-core",
    version: g
  }];
  function b(e, t) {
    var n = t;
    return {
      then: function (t, r) {
        return b(e.then(_(t, n, e), _(r, n, e)), n);
      },
      catch: function (t) {
        return b(e.catch(_(t, n, e)), n);
      },
      finally: function (t) {
        return (t && n.onCancelList.push(t), b(e.finally(_(t && (function () {
          return (n.onCancelList = [], t());
        }), n, e)), n));
      },
      cancel: function () {
        n.isCanceled = !0;
        var e = n.onCancelList;
        (n.onCancelList = [], e.forEach(function (e) {
          e();
        }));
      },
      isCanceled: function () {
        return !0 === n.isCanceled;
      }
    };
  }
  function O(e) {
    return b(e, {
      isCanceled: !1,
      onCancelList: []
    });
  }
  function _(e, t, n) {
    return e ? function (n) {
      return t.isCanceled ? n : e(n);
    } : n;
  }
  function P(e, t, n, r) {
    if (!n) return null;
    if (e < 0 && (null === t || null !== r && 0 === t)) return n + e;
    var o = (null === t ? -1 : t) + e;
    return o <= -1 || o >= n ? null === r ? null : 0 : o;
  }
  function j(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function w(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function S(e, t) {
    var n = [];
    return Promise.resolve(e(t)).then(function (e) {
      return Promise.all(e.filter(function (e) {
        return Boolean(e);
      }).map(function (e) {
        if ((e.sourceId, n.includes(e.sourceId))) throw new Error(("[Autocomplete] The `sourceId` ").concat(JSON.stringify(e.sourceId), " is not unique."));
        n.push(e.sourceId);
        var t = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? j(Object(n), !0).forEach(function (t) {
              w(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : j(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }
          return e;
        })({
          getItemInputValue: function (e) {
            return e.state.query;
          },
          getItemUrl: function () {},
          onSelect: function (e) {
            (0, e.setIsOpen)(!1);
          },
          onActive: h
        }, e);
        return Promise.resolve(t);
      }));
    });
  }
  function I(e) {
    var t = (function (e) {
      var t = e.collections.map(function (e) {
        return e.items.length;
      }).reduce(function (e, t, n) {
        var r = (e[n - 1] || 0) + t;
        return (e.push(r), e);
      }, []).reduce(function (t, n) {
        return n <= e.activeItemId ? t + 1 : t;
      }, 0);
      return e.collections[t];
    })(e);
    if (!t) return null;
    var n = t.items[(function (e) {
      for (var t = e.state, n = e.collection, r = !1, o = 0, i = 0; !1 === r; ) {
        var u = t.collections[o];
        if (u === n) {
          r = !0;
          break;
        }
        (i += u.items.length, o++);
      }
      return t.activeItemId - i;
    })({
      state: e,
      collection: t
    })], r = t.source;
    return {
      item: n,
      itemInputValue: r.getItemInputValue({
        item: n,
        state: e
      }),
      itemUrl: r.getItemUrl({
        item: n,
        state: e
      }),
      source: r
    };
  }
  function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function A(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? E(Object(n), !0).forEach(function (t) {
        C(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function C(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function k(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function x(e, t, n) {
    var r, o = t.initialState;
    return {
      getState: function () {
        return o;
      },
      dispatch: function (r, i) {
        var u = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? D(Object(n), !0).forEach(function (t) {
              k(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }
          return e;
        })({}, o);
        (o = e(o, {
          type: r,
          props: t,
          payload: i
        }), n({
          state: o,
          prevState: u
        }));
      },
      pendingRequests: (r = [], {
        add: function (e) {
          return (r.push(e), e.finally(function () {
            r = r.filter(function (t) {
              return t !== e;
            });
          }));
        },
        cancelAll: function () {
          r.forEach(function (e) {
            return e.cancel();
          });
        },
        isEmpty: function () {
          return 0 === r.length;
        }
      })
    };
  }
  function q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function N(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? q(Object(n), !0).forEach(function (t) {
        L(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function L(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function R(e) {
    return (function (e) {
      if (Array.isArray(e)) return B(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return B(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return B(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function B(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function F(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? T(Object(n), !0).forEach(function (t) {
        U(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function U(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function M(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function H(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? M(Object(n), !0).forEach(function (t) {
        V(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function V(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function W(e) {
    return (function (e) {
      if (Array.isArray(e)) return Q(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Q(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return Q(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function Q(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function $(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function z(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? $(Object(n), !0).forEach(function (t) {
        G(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function G(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function K(e) {
    return Boolean(e.execute);
  }
  function J(e, t) {
    return (n = e, Boolean(null == n ? void 0 : n.execute) ? z(z({}, e), {}, {
      requests: e.queries.map(function (n) {
        return {
          query: n,
          sourceId: t,
          transformResponse: e.transformResponse
        };
      })
    }) : {
      items: e,
      sourceId: t
    });
    var n;
  }
  function Y(e) {
    var t = e.reduce(function (e, t) {
      if (!K(t)) return (e.push(t), e);
      var n = t.searchClient, r = t.execute, o = t.requesterId, i = t.requests, u = e.find(function (e) {
        return K(t) && K(e) && e.searchClient === n && Boolean(o) && e.requesterId === o;
      });
      if (u) {
        var a;
        (a = u.items).push.apply(a, W(i));
      } else {
        var c = {
          execute: r,
          requesterId: o,
          items: i,
          searchClient: n
        };
        e.push(c);
      }
      return e;
    }, []).map(function (e) {
      if (!K(e)) return Promise.resolve(e);
      var t = e, n = t.execute, r = t.items;
      return n({
        searchClient: t.searchClient,
        requests: r
      });
    });
    return Promise.all(t).then(function (e) {
      return p(e);
    });
  }
  function X(e, t) {
    return t.map(function (t) {
      var n = e.filter(function (e) {
        return e.sourceId === t.sourceId;
      }), r = n.map(function (e) {
        return e.items;
      }), o = n[0].transformResponse, i = o ? o((function (e) {
        var t = e.map(function (e) {
          var t;
          return A(A({}, e), {}, {
            hits: null === (t = e.hits) || void 0 === t ? void 0 : t.map(function (t) {
              return A(A({}, t), {}, {
                __autocomplete_indexName: e.index,
                __autocomplete_queryID: e.queryID
              });
            })
          });
        });
        return {
          results: t,
          hits: t.map(function (e) {
            return e.hits;
          }).filter(Boolean),
          facetHits: t.map(function (e) {
            var t;
            return null === (t = e.facetHits) || void 0 === t ? void 0 : t.map(function (e) {
              return {
                label: e.value,
                count: e.count,
                _highlightResult: {
                  label: {
                    value: e.highlighted
                  }
                }
              };
            });
          }).filter(Boolean)
        };
      })(r)) : r;
      return (i.every(Boolean), ('The `getItems` function from source "').concat(t.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), {
        source: t,
        items: i
      });
    });
  }
  var Z = ["event", "nextState", "props", "query", "refresh", "store"];
  function ee(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function te(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ee(Object(n), !0).forEach(function (t) {
        ne(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ee(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function ne(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function re(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  var oe, ie, ue, ae = null, ce = (oe = -1, ie = -1, ue = void 0, function (e) {
    var t = ++oe;
    return Promise.resolve(e).then(function (e) {
      return ue && t < ie ? ue : (ie = t, ue = e, e);
    });
  });
  function le(e) {
    var t = e.event, n = e.nextState, r = void 0 === n ? {} : n, o = e.props, i = e.query, u = e.refresh, a = e.store, c = re(e, Z);
    ae && o.environment.clearTimeout(ae);
    var l = c.setCollections, s = c.setIsOpen, f = c.setQuery, d = c.setActiveItemId, v = c.setStatus;
    if ((f(i), d(o.defaultActiveItemId), !i && !1 === o.openOnFocus)) {
      var m, h = a.getState().collections.map(function (e) {
        return te(te({}, e), {}, {
          items: []
        });
      });
      (v("idle"), l(h), s(null !== (m = r.isOpen) && void 0 !== m ? m : o.shouldPanelOpen({
        state: a.getState()
      })));
      var g = O(ce(h).then(function () {
        return Promise.resolve();
      }));
      return a.pendingRequests.add(g);
    }
    (v("loading"), ae = o.environment.setTimeout(function () {
      v("stalled");
    }, o.stallThreshold));
    var y = O(ce(o.getSources(te({
      query: i,
      refresh: u,
      state: a.getState()
    }, c)).then(function (e) {
      return Promise.all(e.map(function (e) {
        return Promise.resolve(e.getItems(te({
          query: i,
          refresh: u,
          state: a.getState()
        }, c))).then(function (t) {
          return J(t, e.sourceId);
        });
      })).then(Y).then(function (t) {
        return X(t, e);
      }).then(function (e) {
        return (function (e) {
          var t = e.collections, n = e.props, r = e.state, o = t.reduce(function (e, t) {
            return H(H({}, e), {}, V({}, t.source.sourceId, H(H({}, t.source), {}, {
              getItems: function () {
                return p(t.items);
              }
            })));
          }, {});
          return p(n.reshape({
            sources: Object.values(o),
            sourcesBySourceId: o,
            state: r
          })).filter(Boolean).map(function (e) {
            return {
              source: e,
              items: e.getItems()
            };
          });
        })({
          collections: e,
          props: o,
          state: a.getState()
        });
      });
    }))).then(function (e) {
      var n;
      (v("idle"), l(e));
      var p = o.shouldPanelOpen({
        state: a.getState()
      });
      s(null !== (n = r.isOpen) && void 0 !== n ? n : o.openOnFocus && !i && p || p);
      var f = I(a.getState());
      if (null !== a.getState().activeItemId && f) {
        var d = f.item, m = f.itemInputValue, h = f.itemUrl, g = f.source;
        g.onActive(te({
          event: t,
          item: d,
          itemInputValue: m,
          itemUrl: h,
          refresh: u,
          source: g,
          state: a.getState()
        }, c));
      }
    }).finally(function () {
      (v("idle"), ae && o.environment.clearTimeout(ae));
    });
    return a.pendingRequests.add(y);
  }
  var se = ["event", "props", "refresh", "store"];
  function pe(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function fe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? pe(Object(n), !0).forEach(function (t) {
        de(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function de(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function ve(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  var me = ["props", "refresh", "store"], he = ["inputElement", "formElement", "panelElement"], ge = ["inputElement"], ye = ["inputElement", "maxLength"], be = ["item", "source"];
  function Oe(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function _e(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Oe(Object(n), !0).forEach(function (t) {
        Pe(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function Pe(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function je(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function we(e) {
    var t = e.props, n = e.refresh, r = e.store, o = je(e, me);
    return {
      getEnvironmentProps: function (e) {
        var n = e.inputElement, o = e.formElement, i = e.panelElement;
        return _e({
          onTouchStart: function (e) {
            !r.getState().isOpen && r.pendingRequests.isEmpty() || e.target === n || !1 === [o, i].some(function (t) {
              return (n = t, r = e.target, n === r || n.contains(r));
              var n, r;
            }) && (r.dispatch("blur", null), t.debug || r.pendingRequests.cancelAll());
          },
          onTouchMove: function (e) {
            !1 !== r.getState().isOpen && n === t.environment.document.activeElement && e.target !== n && n.blur();
          }
        }, je(e, he));
      },
      getRootProps: function (e) {
        return _e({
          role: "combobox",
          "aria-expanded": r.getState().isOpen,
          "aria-haspopup": "listbox",
          "aria-owns": r.getState().isOpen ? ("").concat(t.id, "-list") : void 0,
          "aria-labelledby": ("").concat(t.id, "-label")
        }, e);
      },
      getFormProps: function (e) {
        return (e.inputElement, _e({
          action: "",
          noValidate: !0,
          role: "search",
          onSubmit: function (i) {
            var u;
            (i.preventDefault(), t.onSubmit(_e({
              event: i,
              refresh: n,
              state: r.getState()
            }, o)), r.dispatch("submit", null), null === (u = e.inputElement) || void 0 === u || u.blur());
          },
          onReset: function (i) {
            var u;
            (i.preventDefault(), t.onReset(_e({
              event: i,
              refresh: n,
              state: r.getState()
            }, o)), r.dispatch("reset", null), null === (u = e.inputElement) || void 0 === u || u.focus());
          }
        }, je(e, ge)));
      },
      getLabelProps: function (e) {
        return _e({
          htmlFor: ("").concat(t.id, "-input"),
          id: ("").concat(t.id, "-label")
        }, e);
      },
      getInputProps: function (e) {
        function i(e) {
          ((t.openOnFocus || Boolean(r.getState().query)) && le(_e({
            event: e,
            props: t,
            query: r.getState().completion || r.getState().query,
            refresh: n,
            store: r
          }, o)), r.dispatch("focus", null));
        }
        var u = ("ontouchstart" in t.environment), a = e || ({});
        a.inputElement;
        var c = a.maxLength, l = void 0 === c ? 512 : c, s = je(a, ye), p = I(r.getState());
        return _e({
          "aria-autocomplete": "both",
          "aria-activedescendant": r.getState().isOpen && null !== r.getState().activeItemId ? ("").concat(t.id, "-item-").concat(r.getState().activeItemId) : void 0,
          "aria-controls": r.getState().isOpen ? ("").concat(t.id, "-list") : void 0,
          "aria-labelledby": ("").concat(t.id, "-label"),
          value: r.getState().completion || r.getState().query,
          id: ("").concat(t.id, "-input"),
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: "off",
          enterKeyHint: null != p && p.itemUrl ? "go" : "search",
          spellCheck: "false",
          autoFocus: t.autoFocus,
          placeholder: t.placeholder,
          maxLength: l,
          type: "search",
          onChange: function (e) {
            le(_e({
              event: e,
              props: t,
              query: e.currentTarget.value.slice(0, l),
              refresh: n,
              store: r
            }, o));
          },
          onKeyDown: function (e) {
            !(function (e) {
              var t = e.event, n = e.props, r = e.refresh, o = e.store, i = ve(e, se);
              if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                var u = function () {
                  var e = n.environment.document.getElementById(("").concat(n.id, "-item-").concat(o.getState().activeItemId));
                  e && (e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e.scrollIntoView(!1));
                }, a = function () {
                  var e = I(o.getState());
                  if (null !== o.getState().activeItemId && e) {
                    var n = e.item, u = e.itemInputValue, a = e.itemUrl, c = e.source;
                    c.onActive(fe({
                      event: t,
                      item: n,
                      itemInputValue: u,
                      itemUrl: a,
                      refresh: r,
                      source: c,
                      state: o.getState()
                    }, i));
                  }
                };
                (t.preventDefault(), !1 === o.getState().isOpen && (n.openOnFocus || Boolean(o.getState().query)) ? le(fe({
                  event: t,
                  props: n,
                  query: o.getState().query,
                  refresh: r,
                  store: o
                }, i)).then(function () {
                  (o.dispatch(t.key, {
                    nextActiveItemId: n.defaultActiveItemId
                  }), a(), setTimeout(u, 0));
                }) : (o.dispatch(t.key, {}), a(), u()));
              } else if ("Escape" === t.key) (t.preventDefault(), o.dispatch(t.key, null), o.pendingRequests.cancelAll()); else if ("Enter" === t.key) {
                if (null === o.getState().activeItemId || o.getState().collections.every(function (e) {
                  return 0 === e.items.length;
                })) return;
                t.preventDefault();
                var c = I(o.getState()), l = c.item, s = c.itemInputValue, p = c.itemUrl, f = c.source;
                if (t.metaKey || t.ctrlKey) void 0 !== p && (f.onSelect(fe({
                  event: t,
                  item: l,
                  itemInputValue: s,
                  itemUrl: p,
                  refresh: r,
                  source: f,
                  state: o.getState()
                }, i)), n.navigator.navigateNewTab({
                  itemUrl: p,
                  item: l,
                  state: o.getState()
                })); else if (t.shiftKey) void 0 !== p && (f.onSelect(fe({
                  event: t,
                  item: l,
                  itemInputValue: s,
                  itemUrl: p,
                  refresh: r,
                  source: f,
                  state: o.getState()
                }, i)), n.navigator.navigateNewWindow({
                  itemUrl: p,
                  item: l,
                  state: o.getState()
                })); else if (t.altKey) ; else {
                  if (void 0 !== p) return (f.onSelect(fe({
                    event: t,
                    item: l,
                    itemInputValue: s,
                    itemUrl: p,
                    refresh: r,
                    source: f,
                    state: o.getState()
                  }, i)), void n.navigator.navigate({
                    itemUrl: p,
                    item: l,
                    state: o.getState()
                  }));
                  le(fe({
                    event: t,
                    nextState: {
                      isOpen: !1
                    },
                    props: n,
                    query: s,
                    refresh: r,
                    store: o
                  }, i)).then(function () {
                    f.onSelect(fe({
                      event: t,
                      item: l,
                      itemInputValue: s,
                      itemUrl: p,
                      refresh: r,
                      source: f,
                      state: o.getState()
                    }, i));
                  });
                }
              }
            })(_e({
              event: e,
              props: t,
              refresh: n,
              store: r
            }, o));
          },
          onFocus: i,
          onBlur: function () {
            u || (r.dispatch("blur", null), t.debug || r.pendingRequests.cancelAll());
          },
          onClick: function (n) {
            e.inputElement !== t.environment.document.activeElement || r.getState().isOpen || i(n);
          }
        }, s);
      },
      getPanelProps: function (e) {
        return _e({
          onMouseDown: function (e) {
            e.preventDefault();
          },
          onMouseLeave: function () {
            r.dispatch("mouseleave", null);
          }
        }, e);
      },
      getListProps: function (e) {
        return _e({
          role: "listbox",
          "aria-labelledby": ("").concat(t.id, "-label"),
          id: ("").concat(t.id, "-list")
        }, e);
      },
      getItemProps: function (e) {
        var i = e.item, u = e.source, a = je(e, be);
        return _e({
          id: ("").concat(t.id, "-item-").concat(i.__autocomplete_id),
          role: "option",
          "aria-selected": r.getState().activeItemId === i.__autocomplete_id,
          onMouseMove: function (e) {
            if (i.__autocomplete_id !== r.getState().activeItemId) {
              r.dispatch("mousemove", i.__autocomplete_id);
              var t = I(r.getState());
              if (null !== r.getState().activeItemId && t) {
                var u = t.item, a = t.itemInputValue, c = t.itemUrl, l = t.source;
                l.onActive(_e({
                  event: e,
                  item: u,
                  itemInputValue: a,
                  itemUrl: c,
                  refresh: n,
                  source: l,
                  state: r.getState()
                }, o));
              }
            }
          },
          onMouseDown: function (e) {
            e.preventDefault();
          },
          onClick: function (e) {
            var a = u.getItemInputValue({
              item: i,
              state: r.getState()
            }), c = u.getItemUrl({
              item: i,
              state: r.getState()
            });
            (c ? Promise.resolve() : le(_e({
              event: e,
              nextState: {
                isOpen: !1
              },
              props: t,
              query: a,
              refresh: n,
              store: r
            }, o))).then(function () {
              u.onSelect(_e({
                event: e,
                item: i,
                itemInputValue: a,
                itemUrl: c,
                refresh: n,
                source: u,
                state: r.getState()
              }, o));
            });
          }
        }, a);
      }
    };
  }
  function Se(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Ie(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Se(Object(n), !0).forEach(function (t) {
        Ee(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Se(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function Ee(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function Ae(e) {
    var t, n, r, o, i = e.plugins, u = e.options, a = null === (t = ((null === (n = u.__autocomplete_metadata) || void 0 === n ? void 0 : n.userAgents) || [])[0]) || void 0 === t ? void 0 : t.segment, c = a ? Ee({}, a, Object.keys((null === (r = u.__autocomplete_metadata) || void 0 === r ? void 0 : r.options) || ({}))) : {};
    return {
      plugins: i.map(function (e) {
        return {
          name: e.name,
          options: Object.keys(e.__autocomplete_pluginOptions || [])
        };
      }),
      options: Ie({
        "autocomplete-core": Object.keys(u)
      }, c),
      ua: y.concat((null === (o = u.__autocomplete_metadata) || void 0 === o ? void 0 : o.userAgents) || [])
    };
  }
  function Ce(e) {
    var t, n = e.state;
    return !1 === n.isOpen || null === n.activeItemId ? null : (null === (t = I(n)) || void 0 === t ? void 0 : t.itemInputValue) || null;
  }
  function De(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function ke(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? De(Object(n), !0).forEach(function (t) {
        xe(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : De(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function xe(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  var qe = function (e, t) {
    switch (t.type) {
      case "setActiveItemId":
      case "mousemove":
        return ke(ke({}, e), {}, {
          activeItemId: t.payload
        });
      case "setQuery":
        return ke(ke({}, e), {}, {
          query: t.payload,
          completion: null
        });
      case "setCollections":
        return ke(ke({}, e), {}, {
          collections: t.payload
        });
      case "setIsOpen":
        return ke(ke({}, e), {}, {
          isOpen: t.payload
        });
      case "setStatus":
        return ke(ke({}, e), {}, {
          status: t.payload
        });
      case "setContext":
        return ke(ke({}, e), {}, {
          context: ke(ke({}, e.context), t.payload)
        });
      case "ArrowDown":
        var n = ke(ke({}, e), {}, {
          activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : P(1, e.activeItemId, m(e), t.props.defaultActiveItemId)
        });
        return ke(ke({}, n), {}, {
          completion: Ce({
            state: n
          })
        });
      case "ArrowUp":
        var r = ke(ke({}, e), {}, {
          activeItemId: P(-1, e.activeItemId, m(e), t.props.defaultActiveItemId)
        });
        return ke(ke({}, r), {}, {
          completion: Ce({
            state: r
          })
        });
      case "Escape":
        return e.isOpen ? ke(ke({}, e), {}, {
          activeItemId: null,
          isOpen: !1,
          completion: null
        }) : ke(ke({}, e), {}, {
          activeItemId: null,
          query: "",
          status: "idle",
          collections: []
        });
      case "submit":
        return ke(ke({}, e), {}, {
          activeItemId: null,
          isOpen: !1,
          status: "idle"
        });
      case "reset":
        return ke(ke({}, e), {}, {
          activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null,
          status: "idle",
          query: ""
        });
      case "focus":
        return ke(ke({}, e), {}, {
          activeItemId: t.props.defaultActiveItemId,
          isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({
            state: e
          })
        });
      case "blur":
        return t.props.debug ? e : ke(ke({}, e), {}, {
          isOpen: !1,
          activeItemId: null
        });
      case "mouseleave":
        return ke(ke({}, e), {}, {
          activeItemId: t.props.defaultActiveItemId
        });
      default:
        return (("The reducer action ").concat(JSON.stringify(t.type), " is not supported."), e);
    }
  };
  function Ne(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Le(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Ne(Object(n), !0).forEach(function (t) {
        Re(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function Re(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function Be(e) {
    var t = [], n = (function (e, t) {
      var n, r = "undefined" != typeof window ? window : {}, o = e.plugins || [];
      return F(F({
        debug: !1,
        openOnFocus: !1,
        placeholder: "",
        autoFocus: !1,
        defaultActiveItemId: null,
        stallThreshold: 300,
        environment: r,
        shouldPanelOpen: function (e) {
          return m(e.state) > 0;
        },
        reshape: function (e) {
          return e.sources;
        }
      }, e), {}, {
        id: null !== (n = e.id) && void 0 !== n ? n : d(),
        plugins: o,
        initialState: F({
          activeItemId: null,
          query: "",
          completion: null,
          collections: [],
          isOpen: !1,
          status: "idle",
          context: {}
        }, e.initialState),
        onStateChange: function (t) {
          var n;
          (null === (n = e.onStateChange) || void 0 === n || n.call(e, t), o.forEach(function (e) {
            var n;
            return null === (n = e.onStateChange) || void 0 === n ? void 0 : n.call(e, t);
          }));
        },
        onSubmit: function (t) {
          var n;
          (null === (n = e.onSubmit) || void 0 === n || n.call(e, t), o.forEach(function (e) {
            var n;
            return null === (n = e.onSubmit) || void 0 === n ? void 0 : n.call(e, t);
          }));
        },
        onReset: function (t) {
          var n;
          (null === (n = e.onReset) || void 0 === n || n.call(e, t), o.forEach(function (e) {
            var n;
            return null === (n = e.onReset) || void 0 === n ? void 0 : n.call(e, t);
          }));
        },
        getSources: function (n) {
          return Promise.all([].concat(R(o.map(function (e) {
            return e.getSources;
          })), [e.getSources]).filter(Boolean).map(function (e) {
            return S(e, n);
          })).then(function (e) {
            return p(e);
          }).then(function (e) {
            return e.map(function (e) {
              return F(F({}, e), {}, {
                onSelect: function (n) {
                  (e.onSelect(n), t.forEach(function (e) {
                    var t;
                    return null === (t = e.onSelect) || void 0 === t ? void 0 : t.call(e, n);
                  }));
                },
                onActive: function (n) {
                  (e.onActive(n), t.forEach(function (e) {
                    var t;
                    return null === (t = e.onActive) || void 0 === t ? void 0 : t.call(e, n);
                  }));
                }
              });
            });
          });
        },
        navigator: F({
          navigate: function (e) {
            var t = e.itemUrl;
            r.location.assign(t);
          },
          navigateNewTab: function (e) {
            var t = e.itemUrl, n = r.open(t, "_blank", "noopener");
            null == n || n.focus();
          },
          navigateNewWindow: function (e) {
            var t = e.itemUrl;
            r.open(t, "_blank", "noopener");
          }
        }, e.navigator)
      });
    })(e, t), r = x(qe, n, function (e) {
      var t = e.prevState, r = e.state;
      n.onStateChange(Le({
        prevState: t,
        state: r,
        refresh: u
      }, o));
    }), o = (function (e) {
      var t = e.store;
      return {
        setActiveItemId: function (e) {
          t.dispatch("setActiveItemId", e);
        },
        setQuery: function (e) {
          t.dispatch("setQuery", e);
        },
        setCollections: function (e) {
          var n = 0, r = e.map(function (e) {
            return N(N({}, e), {}, {
              items: p(e.items).map(function (e) {
                return N(N({}, e), {}, {
                  __autocomplete_id: n++
                });
              })
            });
          });
          t.dispatch("setCollections", r);
        },
        setIsOpen: function (e) {
          t.dispatch("setIsOpen", e);
        },
        setStatus: function (e) {
          t.dispatch("setStatus", e);
        },
        setContext: function (e) {
          t.dispatch("setContext", e);
        }
      };
    })({
      store: r
    }), i = we(Le({
      props: n,
      refresh: u,
      store: r
    }, o));
    function u() {
      return le(Le({
        event: new Event("input"),
        nextState: {
          isOpen: r.getState().isOpen
        },
        props: n,
        query: r.getState().query,
        refresh: u,
        store: r
      }, o));
    }
    return (n.plugins.forEach(function (e) {
      var n;
      return null === (n = e.subscribe) || void 0 === n ? void 0 : n.call(e, Le(Le({}, o), {}, {
        refresh: u,
        onSelect: function (e) {
          t.push({
            onSelect: e
          });
        },
        onActive: function (e) {
          t.push({
            onActive: e
          });
        }
      }));
    }), (function (e) {
      var t, n = e.metadata, r = e.environment;
      if (null === (t = r.navigator) || void 0 === t ? void 0 : t.userAgent.includes("Algolia Crawler")) {
        var o = r.document.createElement("meta"), i = r.document.querySelector("head");
        (o.name = "algolia:metadata", setTimeout(function () {
          (o.content = JSON.stringify(n), i.appendChild(o));
        }, 0));
      }
    })({
      metadata: Ae({
        plugins: n.plugins,
        options: e
      }),
      environment: n.environment
    }), Le(Le({
      refresh: u
    }, i), o));
  }
  var Te = function (e) {
    var t = e.environment, n = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    (n.setAttribute("class", "aa-ClearIcon"), n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("width", "18"), n.setAttribute("height", "18"), n.setAttribute("fill", "currentColor"));
    var r = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
    return (r.setAttribute("d", "M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"), n.appendChild(r), n);
  };
  function Fe(e, t) {
    if ("string" == typeof t) {
      var n = e.document.querySelector(t);
      return (("The element ").concat(JSON.stringify(t), " is not in the document."), n);
    }
    return t;
  }
  function Ue() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.reduce(function (e, t) {
      return (Object.keys(t).forEach(function (n) {
        var r = e[n], o = t[n];
        r !== o && (e[n] = [r, o].filter(Boolean).join(" "));
      }), e);
    }, {});
  }
  var Me = function (e) {
    return e && "object" === r(e) && "[object Object]" === Object.prototype.toString.call(e);
  };
  function He() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.reduce(function (e, t) {
      return (Object.keys(t).forEach(function (n) {
        var r = e[n], o = t[n];
        Array.isArray(r) && Array.isArray(o) ? e[n] = r.concat.apply(r, a(o)) : Me(r) && Me(o) ? e[n] = He(r, o) : e[n] = o;
      }), e);
    }, {});
  }
  function Ve(e, t, n) {
    e[t] = null === n ? "" : "number" != typeof n ? n : n + "px";
  }
  function We(e) {
    this._listeners[e.type](e);
  }
  function Qe(e, t, n) {
    var r, o, i = e[t];
    if ("style" === t) if ("string" == typeof n) e.style = n; else if (null === n) e.style = ""; else for (t in n) i && n[t] === i[t] || Ve(e.style, t, n[t]); else "o" === t[0] && "n" === t[1] ? (r = t !== (t = t.replace(/Capture$/, "")), ((o = t.toLowerCase()) in e) && (t = o), t = t.slice(2), e._listeners || (e._listeners = {}), e._listeners[t] = n, n ? i || e.addEventListener(t, We, r) : e.removeEventListener(t, We, r)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && (t in e) ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (null == n || !1 === n && !(/^ar/).test(t) ? e.removeAttribute(t) : e.setAttribute(t, n));
  }
  function $e(e) {
    return "onChange" === e ? "onInput" : e;
  }
  function ze(e, t) {
    for (var n in t) Qe(e, $e(n), t[n]);
  }
  function Ge(e, t) {
    for (var n in t) "o" === n[0] && "n" === n[1] || Qe(e, $e(n), t[n]);
  }
  var Ke = ["children"];
  function Je(e) {
    return function (t, n) {
      var r = n.children, o = void 0 === r ? [] : r, i = u(n, Ke), c = e.document.createElement(t);
      return (ze(c, i), c.append.apply(c, a(o)), c);
    };
  }
  var Ye = ["autocompleteScopeApi", "environment", "classNames", "getInputProps", "getInputPropsCore", "onDetachedEscape", "state"], Xe = function (e) {
    var t = e.environment.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return (t.setAttribute("class", "aa-LoadingIcon"), t.setAttribute("viewBox", "0 0 100 100"), t.setAttribute("width", "20"), t.setAttribute("height", "20"), t.innerHTML = '<circle\n  cx="50"\n  cy="50"\n  fill="none"\n  r="35"\n  stroke="currentColor"\n  stroke-dasharray="164.93361431346415 56.97787143782138"\n  stroke-width="6"\n>\n  <animateTransform\n    attributeName="transform"\n    type="rotate"\n    repeatCount="indefinite"\n    dur="1s"\n    values="0 50 50;90 50 50;180 50 50;360 50 50"\n    keyTimes="0;0.40;0.65;1"\n  />\n</circle>', t);
  }, Ze = function (e) {
    var t = e.environment, n = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    (n.setAttribute("class", "aa-SubmitIcon"), n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("width", "20"), n.setAttribute("height", "20"), n.setAttribute("fill", "currentColor"));
    var r = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
    return (r.setAttribute("d", "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"), n.appendChild(r), n);
  };
  function et(e) {
    var t = e.autocomplete, r = e.autocompleteScopeApi, o = e.classNames, i = e.environment, a = e.isDetached, c = e.placeholder, l = void 0 === c ? "Search" : c, s = e.propGetters, p = e.setIsModalOpen, f = e.state, d = e.translations, v = Je(i), m = s.getRootProps(n({
      state: f,
      props: t.getRootProps({})
    }, r)), h = v("div", n({
      class: o.root
    }, m)), g = v("div", {
      class: o.detachedContainer,
      onMouseDown: function (e) {
        e.stopPropagation();
      }
    }), y = v("div", {
      class: o.detachedOverlay,
      children: [g],
      onMouseDown: function () {
        (p(!1), t.setIsOpen(!1));
      }
    }), b = s.getLabelProps(n({
      state: f,
      props: t.getLabelProps({})
    }, r)), O = v("button", {
      class: o.submitButton,
      type: "submit",
      title: d.submitButtonTitle,
      children: [Ze({
        environment: i
      })]
    }), _ = v("label", n({
      class: o.label,
      children: [O]
    }, b)), P = v("button", {
      class: o.clearButton,
      type: "reset",
      title: d.clearButtonTitle,
      children: [Te({
        environment: i
      })]
    }), j = v("div", {
      class: o.loadingIndicator,
      children: [Xe({
        environment: i
      })]
    }), w = (function (e) {
      var t = e.autocompleteScopeApi, r = e.environment;
      e.classNames;
      var o = e.getInputProps, i = e.getInputPropsCore, a = e.onDetachedEscape, c = e.state, l = u(e, Ye), s = Je(r)("input", l), p = o(n({
        state: c,
        props: i({
          inputElement: s
        }),
        inputElement: s
      }, t));
      return (ze(s, n(n({}, p), {}, {
        onKeyDown: function (e) {
          if (a && "Escape" === e.key) return (e.preventDefault(), void a());
          p.onKeyDown(e);
        }
      })), s);
    })({
      class: o.input,
      environment: i,
      state: f,
      getInputProps: s.getInputProps,
      getInputPropsCore: t.getInputProps,
      autocompleteScopeApi: r,
      onDetachedEscape: a ? function () {
        (t.setIsOpen(!1), p(!1));
      } : void 0
    }), S = v("div", {
      class: o.inputWrapperPrefix,
      children: [_, j]
    }), I = v("div", {
      class: o.inputWrapperSuffix,
      children: [P]
    }), E = v("div", {
      class: o.inputWrapper,
      children: [w]
    }), A = s.getFormProps(n({
      state: f,
      props: t.getFormProps({
        inputElement: w
      })
    }, r)), C = v("form", n({
      class: o.form,
      children: [S, E, I]
    }, A)), D = s.getPanelProps(n({
      state: f,
      props: t.getPanelProps({})
    }, r)), k = v("div", n({
      class: o.panel
    }, D));
    if (a) {
      var x = v("div", {
        class: o.detachedSearchButtonIcon,
        children: [Ze({
          environment: i
        })]
      }), q = v("div", {
        class: o.detachedSearchButtonPlaceholder,
        textContent: l
      }), N = v("button", {
        class: o.detachedSearchButton,
        onClick: function (e) {
          (e.preventDefault(), p(!0));
        },
        children: [x, q]
      }), L = v("button", {
        class: o.detachedCancelButton,
        textContent: d.detachedCancelButtonText,
        onClick: function () {
          (t.setIsOpen(!1), p(!1));
        }
      }), R = v("div", {
        class: o.detachedFormContainer,
        children: [C, L]
      });
      (g.appendChild(R), h.appendChild(N));
    } else h.appendChild(C);
    return {
      detachedContainer: g,
      detachedOverlay: y,
      inputWrapper: E,
      input: w,
      root: h,
      form: C,
      label: _,
      submitButton: O,
      clearButton: P,
      loadingIndicator: j,
      panel: k
    };
  }
  var tt, nt, rt, ot, it, ut, at = {}, ct = [], lt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function st(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function pt(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function ft(e, t, n) {
    var r, o, i, u = {};
    for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : u[i] = t[i];
    if ((arguments.length > 2 && (u.children = arguments.length > 3 ? tt.call(arguments, 2) : n), "function" == typeof e && null != e.defaultProps)) for (i in e.defaultProps) void 0 === u[i] && (u[i] = e.defaultProps[i]);
    return dt(e, u, r, o, null);
  }
  function dt(e, t, n, r, o) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++rt : o
    };
    return (null == o && null != nt.vnode && nt.vnode(i), i);
  }
  function vt(e) {
    return e.children;
  }
  function mt(e, t) {
    (this.props = e, this.context = t);
  }
  function ht(e, t) {
    if (null == t) return e.__ ? ht(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? ht(e) : null;
  }
  function gt(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for ((e.__e = e.__c.base = null, t = 0); t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
        e.__e = e.__c.base = n.__e;
        break;
      }
      return gt(e);
    }
  }
  function yt(e) {
    (!e.__d && (e.__d = !0) && ot.push(e) && !bt.__r++ || ut !== nt.debounceRendering) && ((ut = nt.debounceRendering) || it)(bt);
  }
  function bt() {
    for (var e; bt.__r = ot.length; ) (e = ot.sort(function (e, t) {
      return e.__v.__b - t.__v.__b;
    }), ot = [], e.some(function (e) {
      var t, n, r, o, i, u;
      e.__d && (i = (o = (t = e).__v).__e, (u = t.__P) && (n = [], (r = st({}, o)).__v = o.__v + 1, Et(u, o, r, t.__n, void 0 !== u.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? ht(o) : i, o.__h), At(n, o), o.__e != i && gt(o)));
    }));
  }
  function Ot(e, t, n, r, o, i, u, a, c, l) {
    var s, p, f, d, v, m, h, g = r && r.__k || ct, y = g.length;
    for ((n.__k = [], s = 0); s < t.length; s++) if (null != (d = n.__k[s] = null == (d = t[s]) || "boolean" == typeof d ? null : "string" == typeof d || "number" == typeof d || "bigint" == typeof d ? dt(null, d, null, null, d) : Array.isArray(d) ? dt(vt, {
      children: d
    }, null, null, null) : d.__b > 0 ? dt(d.type, d.props, d.key, null, d.__v) : d)) {
      if ((d.__ = n, d.__b = n.__b + 1, null === (f = g[s]) || f && d.key == f.key && d.type === f.type)) g[s] = void 0; else for (p = 0; p < y; p++) {
        if ((f = g[p]) && d.key == f.key && d.type === f.type) {
          g[p] = void 0;
          break;
        }
        f = null;
      }
      (Et(e, d, f = f || at, o, i, u, a, c, l), v = d.__e, (p = d.ref) && f.ref != p && (h || (h = []), f.ref && h.push(f.ref, null, d), h.push(p, d.__c || v, d)), null != v ? (null == m && (m = v), "function" == typeof d.type && d.__k === f.__k ? d.__d = c = _t(d, c, e) : c = Pt(e, d, f, g, v, c), "function" == typeof n.type && (n.__d = c)) : c && f.__e == c && c.parentNode != e && (c = ht(f)));
    }
    for ((n.__e = m, s = y); s--; ) null != g[s] && ("function" == typeof n.type && null != g[s].__e && g[s].__e == n.__d && (n.__d = ht(r, s + 1)), kt(g[s], g[s]));
    if (h) for (s = 0; s < h.length; s++) Dt(h[s], h[++s], h[++s]);
  }
  function _t(e, t, n) {
    for (var r, o = e.__k, i = 0; o && i < o.length; i++) (r = o[i]) && (r.__ = e, t = "function" == typeof r.type ? _t(r, t, n) : Pt(n, r, r, o, r.__e, t));
    return t;
  }
  function Pt(e, t, n, r, o, i) {
    var u, a, c;
    if (void 0 !== t.__d) (u = t.__d, t.__d = void 0); else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) (e.appendChild(o), u = null); else {
      for ((a = i, c = 0); (a = a.nextSibling) && c < r.length; c += 2) if (a == o) break e;
      (e.insertBefore(o, i), u = i);
    }
    return void 0 !== u ? u : o.nextSibling;
  }
  function jt(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || lt.test(t) ? n : n + "px";
  }
  function wt(e, t, n, r, o) {
    var i;
    e: if ("style" === t) if ("string" == typeof n) e.style.cssText = n; else {
      if (("string" == typeof r && (e.style.cssText = r = ""), r)) for (t in r) n && (t in n) || jt(e.style, t, "");
      if (n) for (t in n) r && n[t] === r[t] || jt(e.style, t, n[t]);
    } else if ("o" === t[0] && "n" === t[1]) (i = t !== (t = t.replace(/Capture$/, "")), t = (t.toLowerCase() in e) ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? It : St, i) : e.removeEventListener(t, i ? It : St, i)); else if ("dangerouslySetInnerHTML" !== t) {
      if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s"); else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && (t in e)) try {
        e[t] = null == n ? "" : n;
        break e;
      } catch (e) {}
      "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
  }
  function St(e) {
    this.l[e.type + !1](nt.event ? nt.event(e) : e);
  }
  function It(e) {
    this.l[e.type + !0](nt.event ? nt.event(e) : e);
  }
  function Et(e, t, n, r, o, i, u, a, c) {
    var l, s, p, f, d, v, m, h, g, y, b, O = t.type;
    if (void 0 !== t.constructor) return null;
    (null != n.__h && (c = n.__h, a = t.__e = n.__e, t.__h = null, i = [a]), (l = nt.__b) && l(t));
    try {
      e: if ("function" == typeof O) {
        if ((h = t.props, g = (l = O.contextType) && r[l.__c], y = l ? g ? g.props.value : l.__ : r, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : (("prototype" in O) && O.prototype.render ? t.__c = s = new O(h, y) : (t.__c = s = new mt(h, y), s.constructor = O, s.render = xt), g && g.sub(s), s.props = h, s.state || (s.state = {}), s.context = y, s.__n = r, p = s.__d = !0, s.__h = []), null == s.__s && (s.__s = s.state), null != O.getDerivedStateFromProps && (s.__s == s.state && (s.__s = st({}, s.__s)), st(s.__s, O.getDerivedStateFromProps(h, s.__s))), f = s.props, d = s.state, p)) (null == O.getDerivedStateFromProps && null != s.componentWillMount && s.componentWillMount(), null != s.componentDidMount && s.__h.push(s.componentDidMount)); else {
          if ((null == O.getDerivedStateFromProps && h !== f && null != s.componentWillReceiveProps && s.componentWillReceiveProps(h, y), !s.__e && null != s.shouldComponentUpdate && !1 === s.shouldComponentUpdate(h, s.__s, y) || t.__v === n.__v)) {
            (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function (e) {
              e && (e.__ = t);
            }), s.__h.length && u.push(s));
            break e;
          }
          (null != s.componentWillUpdate && s.componentWillUpdate(h, s.__s, y), null != s.componentDidUpdate && s.__h.push(function () {
            s.componentDidUpdate(f, d, v);
          }));
        }
        (s.context = y, s.props = h, s.state = s.__s, (l = nt.__r) && l(t), s.__d = !1, s.__v = t, s.__P = e, l = s.render(s.props, s.state, s.context), s.state = s.__s, null != s.getChildContext && (r = st(st({}, r), s.getChildContext())), p || null == s.getSnapshotBeforeUpdate || (v = s.getSnapshotBeforeUpdate(f, d)), b = null != l && l.type === vt && null == l.key ? l.props.children : l, Ot(e, Array.isArray(b) ? b : [b], t, n, r, o, i, u, a, c), s.base = t.__e, t.__h = null, s.__h.length && u.push(s), m && (s.__E = s.__ = null), s.__e = !1);
      } else null == i && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ct(n.__e, t, n, r, o, i, u, c);
      (l = nt.diffed) && l(t);
    } catch (e) {
      (t.__v = null, (c || null != i) && (t.__e = a, t.__h = !!c, i[i.indexOf(a)] = null), nt.__e(e, t, n));
    }
  }
  function At(e, t) {
    (nt.__c && nt.__c(t, e), e.some(function (t) {
      try {
        (e = t.__h, t.__h = [], e.some(function (e) {
          e.call(t);
        }));
      } catch (e) {
        nt.__e(e, t.__v);
      }
    }));
  }
  function Ct(e, t, n, r, o, i, u, a) {
    var c, l, s, p = n.props, f = t.props, d = t.type, v = 0;
    if (("svg" === d && (o = !0), null != i)) for (; v < i.length; v++) if ((c = i[v]) && ("setAttribute" in c) == !!d && (d ? c.localName === d : 3 === c.nodeType)) {
      (e = c, i[v] = null);
      break;
    }
    if (null == e) {
      if (null === d) return document.createTextNode(f);
      (e = o ? document.createElementNS("http://www.w3.org/2000/svg", d) : document.createElement(d, f.is && f), i = null, a = !1);
    }
    if (null === d) p === f || a && e.data === f || (e.data = f); else {
      if ((i = i && tt.call(e.childNodes), l = (p = n.props || at).dangerouslySetInnerHTML, s = f.dangerouslySetInnerHTML, !a)) {
        if (null != i) for ((p = {}, v = 0); v < e.attributes.length; v++) p[e.attributes[v].name] = e.attributes[v].value;
        (s || l) && (s && (l && s.__html == l.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
      }
      if (((function (e, t, n, r, o) {
        var i;
        for (i in n) "children" === i || "key" === i || (i in t) || wt(e, i, null, n[i], r);
        for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || wt(e, i, t[i], n[i], r);
      })(e, f, p, o, a), s)) t.__k = []; else if ((v = t.props.children, Ot(e, Array.isArray(v) ? v : [v], t, n, r, o && "foreignObject" !== d, i, u, i ? i[0] : n.__k && ht(n, 0), a), null != i)) for (v = i.length; v--; ) null != i[v] && pt(i[v]);
      a || (("value" in f) && void 0 !== (v = f.value) && (v !== p.value || v !== e.value || "progress" === d && !v) && wt(e, "value", v, p.value, !1), ("checked" in f) && void 0 !== (v = f.checked) && v !== e.checked && wt(e, "checked", v, p.checked, !1));
    }
    return e;
  }
  function Dt(e, t, n) {
    try {
      "function" == typeof e ? e(t) : e.current = t;
    } catch (e) {
      nt.__e(e, n);
    }
  }
  function kt(e, t, n) {
    var r, o;
    if ((nt.unmount && nt.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Dt(r, null, t)), null != (r = e.__c))) {
      if (r.componentWillUnmount) try {
        r.componentWillUnmount();
      } catch (e) {
        nt.__e(e, t);
      }
      r.base = r.__P = null;
    }
    if (r = e.__k) for (o = 0; o < r.length; o++) r[o] && kt(r[o], t, "function" != typeof e.type);
    (n || null == e.__e || pt(e.__e), e.__e = e.__d = void 0);
  }
  function xt(e, t, n) {
    return this.constructor(e, n);
  }
  (tt = ct.slice, nt = {
    __e: function (e, t) {
      for (var n, r, o; t = t.__; ) if ((n = t.__c) && !n.__) try {
        if (((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o)) return n.__E = n;
      } catch (t) {
        e = t;
      }
      throw e;
    }
  }, rt = 0, mt.prototype.setState = function (e, t) {
    var n;
    (n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = st({}, this.state), "function" == typeof e && (e = e(st({}, n), this.props)), e && st(n, e), null != e && this.__v && (t && this.__h.push(t), yt(this)));
  }, mt.prototype.forceUpdate = function (e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), yt(this));
  }, mt.prototype.render = vt, ot = [], it = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, bt.__r = 0);
  var qt = "__aa-highlight__", Nt = "__/aa-highlight__";
  function Lt(e) {
    var t = e.highlightedValue.split(qt), n = t.shift(), r = (function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return {
        get: function () {
          return e;
        },
        add: function (t) {
          var n = e[e.length - 1];
          (null == n ? void 0 : n.isHighlighted) === t.isHighlighted ? e[e.length - 1] = {
            value: n.value + t.value,
            isHighlighted: n.isHighlighted
          } : e.push(t);
        }
      };
    })(n ? [{
      value: n,
      isHighlighted: !1
    }] : []);
    return (t.forEach(function (e) {
      var t = e.split(Nt);
      (r.add({
        value: t[0],
        isHighlighted: !0
      }), "" !== t[1] && r.add({
        value: t[1],
        isHighlighted: !1
      }));
    }), r.get());
  }
  function Rt(e) {
    return (function (e) {
      if (Array.isArray(e)) return Bt(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Bt(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return Bt(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function Bt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function Tt(e) {
    var t = e.hit, n = e.attribute, r = Array.isArray(n) ? n : [n], o = v(t, ["_highlightResult"].concat(Rt(r), ["value"]));
    return ("string" != typeof o && (o = v(t, r) || ""), Lt({
      highlightedValue: o
    }));
  }
  var Ft = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
  }, Ut = new RegExp(/\w/i), Mt = /&(amp|quot|lt|gt|#39);/g, Ht = RegExp(Mt.source);
  function Vt(e, t) {
    var n, r, o, i = e[t], u = (null === (n = e[t + 1]) || void 0 === n ? void 0 : n.isHighlighted) || !0, a = (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.isHighlighted) || !0;
    return Ut.test((o = i.value) && Ht.test(o) ? o.replace(Mt, function (e) {
      return Ft[e];
    }) : o) || a !== u ? i.isHighlighted : a;
  }
  function Wt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Qt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Wt(Object(n), !0).forEach(function (t) {
        $t(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Wt(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function $t(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function zt(e) {
    return e.some(function (e) {
      return e.isHighlighted;
    }) ? e.map(function (t, n) {
      return Qt(Qt({}, t), {}, {
        isHighlighted: !Vt(e, n)
      });
    }) : e.map(function (e) {
      return Qt(Qt({}, e), {}, {
        isHighlighted: !1
      });
    });
  }
  function Gt(e) {
    return (function (e) {
      if (Array.isArray(e)) return Kt(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Kt(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return Kt(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function Kt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function Jt(e) {
    var t = e.hit, n = e.attribute, r = Array.isArray(n) ? n : [n], o = v(t, ["_snippetResult"].concat(Gt(r), ["value"]));
    return ("string" != typeof o && (o = v(t, r) || ""), Lt({
      highlightedValue: o
    }));
  }
  function Yt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Xt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Yt(Object(n), !0).forEach(function (t) {
        Zt(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Yt(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function Zt(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  var en = ["params"];
  function tn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function nn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? tn(Object(n), !0).forEach(function (t) {
        rn(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tn(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function rn(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function on(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function un(e) {
    return (function (e) {
      if (Array.isArray(e)) return an(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return an(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return an(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function an(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function cn(e) {
    var t = e.createElement, n = e.Fragment;
    return function (e) {
      var r, o = e.hit, i = e.attribute, u = e.tagName, a = void 0 === u ? "mark" : u;
      return t(n, {}, (r = {
        hit: o,
        attribute: i
      }, zt(Tt(r))).map(function (e, n) {
        return e.isHighlighted ? t(a, {
          key: n
        }, e.value) : e.value;
      }));
    };
  }
  function ln(e) {
    var t = e.createElement, n = e.Fragment;
    return function (e) {
      var r, o = e.hit, i = e.attribute, u = e.tagName, a = void 0 === u ? "mark" : u;
      return t(n, {}, (r = {
        hit: o,
        attribute: i
      }, zt(Jt(r))).map(function (e, n) {
        return e.isHighlighted ? t(a, {
          key: n
        }, e.value) : e.value;
      }));
    };
  }
  function sn(e) {
    var t = e.createElement, n = e.Fragment;
    return function (e) {
      var r = e.hit, o = e.attribute, i = e.tagName, u = void 0 === i ? "mark" : i;
      return t(n, {}, Jt({
        hit: r,
        attribute: o
      }).map(function (e, n) {
        return e.isHighlighted ? t(u, {
          key: n
        }, e.value) : e.value;
      }));
    };
  }
  var pn = ["classNames", "container", "getEnvironmentProps", "getFormProps", "getInputProps", "getItemProps", "getLabelProps", "getListProps", "getPanelProps", "getRootProps", "panelContainer", "panelPlacement", "render", "renderNoResults", "renderer", "detachedMediaQuery", "components", "translations"], fn = {
    clearButton: "aa-ClearButton",
    detachedCancelButton: "aa-DetachedCancelButton",
    detachedContainer: "aa-DetachedContainer",
    detachedFormContainer: "aa-DetachedFormContainer",
    detachedOverlay: "aa-DetachedOverlay",
    detachedSearchButton: "aa-DetachedSearchButton",
    detachedSearchButtonIcon: "aa-DetachedSearchButtonIcon",
    detachedSearchButtonPlaceholder: "aa-DetachedSearchButtonPlaceholder",
    form: "aa-Form",
    input: "aa-Input",
    inputWrapper: "aa-InputWrapper",
    inputWrapperPrefix: "aa-InputWrapperPrefix",
    inputWrapperSuffix: "aa-InputWrapperSuffix",
    item: "aa-Item",
    label: "aa-Label",
    list: "aa-List",
    loadingIndicator: "aa-LoadingIndicator",
    panel: "aa-Panel",
    panelLayout: "aa-PanelLayout aa-Panel--scrollable",
    root: "aa-Autocomplete",
    source: "aa-Source",
    sourceFooter: "aa-SourceFooter",
    sourceHeader: "aa-SourceHeader",
    sourceNoResults: "aa-SourceNoResults",
    submitButton: "aa-SubmitButton"
  }, dn = function (e, t) {
    !(function (e, t, n) {
      var r, o, i;
      (nt.__ && nt.__(e, t), o = (r = "function" == typeof n) ? null : n && n.__k || t.__k, i = [], Et(t, e = (!r && n || t).__k = ft(vt, null, [e]), o || at, at, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? tt.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r), At(i, e));
    })(e.children, t);
  }, vn = {
    createElement: ft,
    Fragment: vt
  };
  function mn(e) {
    var t = e.panelPlacement, n = e.container, r = e.form, o = e.environment, i = n.getBoundingClientRect(), u = (o.pageYOffset || o.document.documentElement.scrollTop || o.document.body.scrollTop || 0) + i.top + i.height;
    switch (t) {
      case "start":
        return {
          top: u,
          left: i.left
        };
      case "end":
        return {
          top: u,
          right: o.document.documentElement.clientWidth - (i.left + i.width)
        };
      case "full-width":
        return {
          top: u,
          left: 0,
          right: 0,
          width: "unset",
          maxWidth: "unset"
        };
      case "input-wrapper-width":
        var a = r.getBoundingClientRect();
        return {
          top: u,
          left: a.left,
          right: o.document.documentElement.clientWidth - (a.left + a.width),
          width: "unset",
          maxWidth: "unset"
        };
      default:
        throw new Error(("[Autocomplete] The `panelPlacement` value ").concat(JSON.stringify(t), " is not valid."));
    }
  }
  var hn = [{
    segment: "autocomplete-js",
    version: g
  }];
  var gn = (function (e, t) {
    function n(t) {
      return e({
        searchClient: t.searchClient,
        queries: t.requests.map(function (e) {
          return e.query;
        })
      }).then(function (e) {
        return e.map(function (e, n) {
          var r = t.requests[n];
          return {
            items: e,
            sourceId: r.sourceId,
            transformResponse: r.transformResponse
          };
        });
      });
    }
    return function (e) {
      return function (r) {
        return Xt(Xt({
          requesterId: t,
          execute: n
        }, e), r);
      };
    };
  })(function (e) {
    return (function (e) {
      var t = e.searchClient, n = e.queries, r = e.userAgents, o = void 0 === r ? [] : r;
      return ("function" == typeof t.addAlgoliaAgent && [].concat(un(y), un(o)).forEach(function (e) {
        var n = e.segment, r = e.version;
        t.addAlgoliaAgent(n, r);
      }), t.search(n.map(function (e) {
        var t = e.params;
        return nn(nn({}, on(e, en)), {}, {
          params: nn({
            hitsPerPage: 5,
            highlightPreTag: qt,
            highlightPostTag: Nt
          }, t)
        });
      })).then(function (e) {
        return e.results;
      }));
    })(n(n({}, e), {}, {
      userAgents: hn
    }));
  }, "algolia");
  var yn = gn({
    transformResponse: function (e) {
      return e.hits;
    }
  });
  (e.autocomplete = function (e) {
    var t, r = (function () {
      var e = [], t = [];
      function n(n) {
        e.push(n);
        var r = n();
        t.push(r);
      }
      return {
        runEffect: n,
        cleanupEffects: function () {
          var e = t;
          (t = [], e.forEach(function (e) {
            e();
          }));
        },
        runEffects: function () {
          var t = e;
          (e = [], t.forEach(function (e) {
            n(e);
          }));
        }
      };
    })(), a = r.runEffect, c = r.cleanupEffects, p = r.runEffects, f = (t = [], {
      reactive: function (e) {
        var n = e(), r = {
          _fn: e,
          _ref: {
            current: n
          },
          get value() {
            return this._ref.current;
          },
          set value(e) {
            this._ref.current = e;
          }
        };
        return (t.push(r), r);
      },
      runReactives: function () {
        t.forEach(function (e) {
          e._ref.current = e._fn();
        });
      }
    }), v = f.reactive, h = f.runReactives, g = l(!1), y = l(e), b = l(void 0), O = v(function () {
      return (function (e) {
        var t, r = e.classNames, o = e.container, i = e.getEnvironmentProps, a = e.getFormProps, c = e.getInputProps, l = e.getItemProps, s = e.getLabelProps, p = e.getListProps, f = e.getPanelProps, v = e.getRootProps, m = e.panelContainer, h = e.panelPlacement, g = e.render, y = e.renderNoResults, b = e.renderer, O = e.detachedMediaQuery, _ = e.components, P = e.translations, j = u(e, pn), w = "undefined" != typeof window ? window : {}, S = Fe(w, o);
        S.tagName;
        var I, E, A, C = null != b ? b : vn, D = {
          Highlight: (I = C, E = I.createElement, A = I.Fragment, function (e) {
            var t = e.hit, n = e.attribute, r = e.tagName, o = void 0 === r ? "mark" : r;
            return E(A, {}, Tt({
              hit: t,
              attribute: n
            }).map(function (e, t) {
              return e.isHighlighted ? E(o, {
                key: t
              }, e.value) : e.value;
            }));
          }),
          ReverseHighlight: cn(C),
          ReverseSnippet: ln(C),
          Snippet: sn(C)
        };
        return {
          renderer: {
            classNames: Ue(fn, null != r ? r : {}),
            container: S,
            getEnvironmentProps: null != i ? i : function (e) {
              return e.props;
            },
            getFormProps: null != a ? a : function (e) {
              return e.props;
            },
            getInputProps: null != c ? c : function (e) {
              return e.props;
            },
            getItemProps: null != l ? l : function (e) {
              return e.props;
            },
            getLabelProps: null != s ? s : function (e) {
              return e.props;
            },
            getListProps: null != p ? p : function (e) {
              return e.props;
            },
            getPanelProps: null != f ? f : function (e) {
              return e.props;
            },
            getRootProps: null != v ? v : function (e) {
              return e.props;
            },
            panelContainer: m ? Fe(w, m) : w.document.body,
            panelPlacement: null != h ? h : "input-wrapper-width",
            render: null != g ? g : dn,
            renderNoResults: y,
            renderer: C,
            detachedMediaQuery: null != O ? O : getComputedStyle(w.document.documentElement).getPropertyValue("--aa-detached-media-query"),
            components: n(n({}, D), _),
            translations: n(n({}, {
              clearButtonTitle: "Clear",
              detachedCancelButtonText: "Cancel",
              submitButtonTitle: "Submit"
            }), P)
          },
          core: n(n({}, j), {}, {
            id: null !== (t = j.id) && void 0 !== t ? t : d(),
            environment: w
          })
        };
      })(y.current);
    }), _ = v(function () {
      return O.value.core.environment.matchMedia(O.value.renderer.detachedMediaQuery).matches;
    }), P = v(function () {
      return Be(n(n({}, O.value.core), {}, {
        onStateChange: function (e) {
          var t, n, r;
          (g.current = e.state.collections.some(function (e) {
            return e.source.templates.noResults;
          }), null === (t = b.current) || void 0 === t || t.call(b, e), null === (n = (r = O.value.core).onStateChange) || void 0 === n || n.call(r, e));
        },
        shouldPanelOpen: y.current.shouldPanelOpen || (function (e) {
          var t = e.state;
          if (_.value) return !0;
          var n = m(t) > 0;
          if (!O.value.core.openOnFocus && !t.query) return n;
          var r = Boolean(g.current || O.value.renderer.renderNoResults);
          return !n && r || n;
        }),
        __autocomplete_metadata: {
          userAgents: hn,
          options: e
        }
      }));
    }), j = l(n({
      collections: [],
      completion: null,
      context: {},
      isOpen: !1,
      query: "",
      activeItemId: null,
      status: "idle"
    }, O.value.core.initialState)), w = {
      getEnvironmentProps: O.value.renderer.getEnvironmentProps,
      getFormProps: O.value.renderer.getFormProps,
      getInputProps: O.value.renderer.getInputProps,
      getItemProps: O.value.renderer.getItemProps,
      getLabelProps: O.value.renderer.getLabelProps,
      getListProps: O.value.renderer.getListProps,
      getPanelProps: O.value.renderer.getPanelProps,
      getRootProps: O.value.renderer.getRootProps
    }, S = {
      setActiveItemId: P.value.setActiveItemId,
      setQuery: P.value.setQuery,
      setCollections: P.value.setCollections,
      setIsOpen: P.value.setIsOpen,
      setStatus: P.value.setStatus,
      setContext: P.value.setContext,
      refresh: P.value.refresh
    }, I = v(function () {
      return et({
        autocomplete: P.value,
        autocompleteScopeApi: S,
        classNames: O.value.renderer.classNames,
        environment: O.value.core.environment,
        isDetached: _.value,
        placeholder: O.value.core.placeholder,
        propGetters: w,
        setIsModalOpen: D,
        state: j.current,
        translations: O.value.renderer.translations
      });
    });
    function E() {
      ze(I.value.panel, {
        style: _.value ? {} : mn({
          panelPlacement: O.value.renderer.panelPlacement,
          container: I.value.root,
          form: I.value.form,
          environment: O.value.core.environment
        })
      });
    }
    function A(e) {
      j.current = e;
      var t = {
        autocomplete: P.value,
        autocompleteScopeApi: S,
        classNames: O.value.renderer.classNames,
        components: O.value.renderer.components,
        container: O.value.renderer.container,
        createElement: O.value.renderer.renderer.createElement,
        dom: I.value,
        Fragment: O.value.renderer.renderer.Fragment,
        panelContainer: _.value ? I.value.detachedContainer : O.value.renderer.panelContainer,
        propGetters: w,
        state: j.current
      }, r = !m(e) && !g.current && O.value.renderer.renderNoResults || O.value.renderer.render;
      (!(function (e) {
        var t = e.autocomplete, r = e.autocompleteScopeApi, o = e.dom, i = e.propGetters, u = e.state;
        (Ge(o.root, i.getRootProps(n({
          state: u,
          props: t.getRootProps({})
        }, r))), Ge(o.input, i.getInputProps(n({
          state: u,
          props: t.getInputProps({
            inputElement: o.input
          }),
          inputElement: o.input
        }, r))), ze(o.label, {
          hidden: "stalled" === u.status
        }), ze(o.loadingIndicator, {
          hidden: "stalled" !== u.status
        }), ze(o.clearButton, {
          hidden: !u.query
        }));
      })(t), (function (e, t) {
        var r = t.autocomplete, o = t.autocompleteScopeApi, u = t.classNames, a = t.createElement, c = t.dom, l = t.Fragment, s = t.panelContainer, p = t.propGetters, f = t.state, d = t.components;
        if (f.isOpen) {
          (s.contains(c.panel) || "loading" === f.status || s.appendChild(c.panel), c.panel.classList.toggle("aa-Panel--stalled", "stalled" === f.status));
          var v = f.collections.filter(function (e) {
            var t = e.source, n = e.items;
            return t.templates.noResults || n.length > 0;
          }).map(function (e, t) {
            var c = e.source, s = e.items;
            return a("section", {
              key: t,
              className: u.source,
              "data-autocomplete-source-id": c.sourceId
            }, c.templates.header && a("div", {
              className: u.sourceHeader
            }, c.templates.header({
              components: d,
              createElement: a,
              Fragment: l,
              items: s,
              source: c,
              state: f
            })), c.templates.noResults && 0 === s.length ? a("div", {
              className: u.sourceNoResults
            }, c.templates.noResults({
              components: d,
              createElement: a,
              Fragment: l,
              source: c,
              state: f
            })) : a("ul", i({
              className: u.list
            }, p.getListProps(n({
              state: f,
              props: r.getListProps({})
            }, o))), s.map(function (e) {
              var t = r.getItemProps({
                item: e,
                source: c
              });
              return a("li", i({
                key: t.id,
                className: u.item
              }, p.getItemProps(n({
                state: f,
                props: t
              }, o))), c.templates.item({
                components: d,
                createElement: a,
                Fragment: l,
                item: e,
                state: f
              }));
            })), c.templates.footer && a("div", {
              className: u.sourceFooter
            }, c.templates.footer({
              components: d,
              createElement: a,
              Fragment: l,
              items: s,
              source: c,
              state: f
            })));
          }), m = a(l, null, a("div", {
            className: u.panelLayout
          }, v), a("div", {
            className: "aa-GradientBottom"
          })), h = v.reduce(function (e, t) {
            return (e[t.props["data-autocomplete-source-id"]] = t, e);
          }, {});
          e(n({
            children: m,
            state: f,
            sections: v,
            elements: h,
            createElement: a,
            Fragment: l,
            components: d
          }, o), c.panel);
        } else s.contains(c.panel) && s.removeChild(c.panel);
      })(r, t));
    }
    function C() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (c(), y.current = He(O.value.renderer, O.value.core, {
        initialState: j.current
      }, e), h(), p(), P.value.refresh().then(function () {
        A(j.current);
      }));
    }
    function D(e) {
      requestAnimationFrame(function () {
        var t = O.value.core.environment.document.body.contains(I.value.detachedOverlay);
        e !== t && (e ? (O.value.core.environment.document.body.appendChild(I.value.detachedOverlay), O.value.core.environment.document.body.classList.add("aa-Detached"), I.value.input.focus()) : (O.value.core.environment.document.body.removeChild(I.value.detachedOverlay), O.value.core.environment.document.body.classList.remove("aa-Detached"), P.value.setQuery(""), P.value.refresh()));
      });
    }
    return (a(function () {
      var e = P.value.getEnvironmentProps({
        formElement: I.value.form,
        panelElement: I.value.panel,
        inputElement: I.value.input
      });
      return (ze(O.value.core.environment, e), function () {
        ze(O.value.core.environment, Object.keys(e).reduce(function (e, t) {
          return n(n({}, e), {}, o({}, t, void 0));
        }, {}));
      });
    }), a(function () {
      var e = _.value ? O.value.core.environment.document.body : O.value.renderer.panelContainer, t = _.value ? I.value.detachedOverlay : I.value.panel;
      return (_.value && j.current.isOpen && D(!0), A(j.current), function () {
        e.contains(t) && e.removeChild(t);
      });
    }), a(function () {
      var e = O.value.renderer.container;
      return (e.appendChild(I.value.root), function () {
        e.removeChild(I.value.root);
      });
    }), a(function () {
      var e = s(function (e) {
        A(e.state);
      }, 0);
      return (b.current = function (t) {
        var n = t.state, r = t.prevState;
        (_.value && r.isOpen !== n.isOpen && D(n.isOpen), _.value || !n.isOpen || r.isOpen || E(), n.query !== r.query) && O.value.core.environment.document.querySelectorAll(".aa-Panel--scrollable").forEach(function (e) {
          0 !== e.scrollTop && (e.scrollTop = 0);
        });
        e({
          state: n
        });
      }, function () {
        b.current = void 0;
      });
    }), a(function () {
      var e = s(function () {
        var e = _.value;
        (_.value = O.value.core.environment.matchMedia(O.value.renderer.detachedMediaQuery).matches, e !== _.value ? C({}) : requestAnimationFrame(E));
      }, 20);
      return (O.value.core.environment.addEventListener("resize", e), function () {
        O.value.core.environment.removeEventListener("resize", e);
      });
    }), a(function () {
      if (!_.value) return function () {};
      function e(e) {
        I.value.detachedContainer.classList.toggle("aa-DetachedContainer--modal", e);
      }
      function t(t) {
        e(t.matches);
      }
      var n = O.value.core.environment.matchMedia(getComputedStyle(O.value.core.environment.document.documentElement).getPropertyValue("--aa-detached-modal-media-query"));
      e(n.matches);
      var r = Boolean(n.addEventListener);
      return (r ? n.addEventListener("change", t) : n.addListener(t), function () {
        r ? n.removeEventListener("change", t) : n.removeListener(t);
      });
    }), a(function () {
      return (requestAnimationFrame(E), function () {});
    }), n(n({}, S), {}, {
      update: C,
      destroy: function () {
        c();
      }
    }));
  }, e.getAlgoliaFacets = function (e) {
    var t = gn({
      transformResponse: function (e) {
        return e.facetHits;
      }
    }), r = e.queries.map(function (e) {
      return n(n({}, e), {}, {
        type: "facet"
      });
    });
    return t(n(n({}, e), {}, {
      queries: r
    }));
  }, e.getAlgoliaResults = yn, Object.defineProperty(e, "__esModule", {
    value: !0
  }));
});

},{}],"1Rj7s":[function(require,module,exports) {
var define;
/*! algoliasearch-lite.umd.js | 4.9.1 | ?? Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript*/
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).algoliasearch = t();
})(this, function () {
  "use strict";
  function e(e, t, r) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = r, e);
  }
  function t(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      (t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n));
    }
    return r;
  }
  function r(r) {
    for (var n = 1; n < arguments.length; n++) {
      var o = null != arguments[n] ? arguments[n] : {};
      n % 2 ? t(Object(o), !0).forEach(function (t) {
        e(r, t, o[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
      });
    }
    return r;
  }
  function n(e, t) {
    if (null == e) return {};
    var r, n, o = (function (e, t) {
      if (null == e) return {};
      var r, n, o = {}, a = Object.keys(e);
      for (n = 0; n < a.length; n++) (r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (n = 0; n < a.length; n++) (r = a[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
  }
  function o(e, t) {
    return (function (e) {
      if (Array.isArray(e)) return e;
    })(e) || (function (e, t) {
      if (!((Symbol.iterator in Object(e)) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var r = [], n = !0, o = !1, a = void 0;
      try {
        for (var u, i = e[Symbol.iterator](); !(n = (u = i.next()).done) && (r.push(u.value), !t || r.length !== t); n = !0) ;
      } catch (e) {
        (o = !0, a = e);
      } finally {
        try {
          n || null == i.return || i.return();
        } finally {
          if (o) throw a;
        }
      }
      return r;
    })(e, t) || (function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    })();
  }
  function a(e) {
    return (function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = new Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
      }
    })(e) || (function (e) {
      if ((Symbol.iterator in Object(e)) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    })();
  }
  function u(e) {
    var t, r = ("algoliasearch-client-js-").concat(e.key), n = function () {
      return (void 0 === t && (t = e.localStorage || window.localStorage), t);
    }, a = function () {
      return JSON.parse(n().getItem(r) || "{}");
    };
    return {
      get: function (e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          miss: function () {
            return Promise.resolve();
          }
        };
        return Promise.resolve().then(function () {
          var r = JSON.stringify(e), n = a()[r];
          return Promise.all([n || t(), void 0 !== n]);
        }).then(function (e) {
          var t = o(e, 2), n = t[0], a = t[1];
          return Promise.all([n, a || r.miss(n)]);
        }).then(function (e) {
          return o(e, 1)[0];
        });
      },
      set: function (e, t) {
        return Promise.resolve().then(function () {
          var o = a();
          return (o[JSON.stringify(e)] = t, n().setItem(r, JSON.stringify(o)), t);
        });
      },
      delete: function (e) {
        return Promise.resolve().then(function () {
          var t = a();
          (delete t[JSON.stringify(e)], n().setItem(r, JSON.stringify(t)));
        });
      },
      clear: function () {
        return Promise.resolve().then(function () {
          n().removeItem(r);
        });
      }
    };
  }
  function i(e) {
    var t = a(e.caches), r = t.shift();
    return void 0 === r ? {
      get: function (e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          miss: function () {
            return Promise.resolve();
          }
        }, n = t();
        return n.then(function (e) {
          return Promise.all([e, r.miss(e)]);
        }).then(function (e) {
          return o(e, 1)[0];
        });
      },
      set: function (e, t) {
        return Promise.resolve(t);
      },
      delete: function (e) {
        return Promise.resolve();
      },
      clear: function () {
        return Promise.resolve();
      }
    } : {
      get: function (e, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          miss: function () {
            return Promise.resolve();
          }
        };
        return r.get(e, n, o).catch(function () {
          return i({
            caches: t
          }).get(e, n, o);
        });
      },
      set: function (e, n) {
        return r.set(e, n).catch(function () {
          return i({
            caches: t
          }).set(e, n);
        });
      },
      delete: function (e) {
        return r.delete(e).catch(function () {
          return i({
            caches: t
          }).delete(e);
        });
      },
      clear: function () {
        return r.clear().catch(function () {
          return i({
            caches: t
          }).clear();
        });
      }
    };
  }
  function s() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
      serializable: !0
    }, t = {};
    return {
      get: function (r, n) {
        var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
          miss: function () {
            return Promise.resolve();
          }
        }, a = JSON.stringify(r);
        if ((a in t)) return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
        var u = n(), i = o && o.miss || (function () {
          return Promise.resolve();
        });
        return u.then(function (e) {
          return i(e);
        }).then(function () {
          return u;
        });
      },
      set: function (r, n) {
        return (t[JSON.stringify(r)] = e.serializable ? JSON.stringify(n) : n, Promise.resolve(n));
      },
      delete: function (e) {
        return (delete t[JSON.stringify(e)], Promise.resolve());
      },
      clear: function () {
        return (t = {}, Promise.resolve());
      }
    };
  }
  function c(e) {
    for (var t = e.length - 1; t > 0; t--) {
      var r = Math.floor(Math.random() * (t + 1)), n = e[t];
      (e[t] = e[r], e[r] = n);
    }
    return e;
  }
  function l(e, t) {
    return t ? (Object.keys(t).forEach(function (r) {
      e[r] = t[r](e);
    }), e) : e;
  }
  function f(e) {
    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
    var o = 0;
    return e.replace(/%s/g, function () {
      return encodeURIComponent(r[o++]);
    });
  }
  var h = {
    WithinQueryParameters: 0,
    WithinHeaders: 1
  };
  function d(e, t) {
    var r = e || ({}), n = r.data || ({});
    return (Object.keys(r).forEach(function (e) {
      -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e) && (n[e] = r[e]);
    }), {
      data: Object.entries(n).length > 0 ? n : void 0,
      timeout: r.timeout || t,
      headers: r.headers || ({}),
      queryParameters: r.queryParameters || ({}),
      cacheable: r.cacheable
    });
  }
  var m = {
    Read: 1,
    Write: 2,
    Any: 3
  }, p = 1, v = 2, y = 3;
  function g(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
    return r(r({}, e), {}, {
      status: t,
      lastUpdate: Date.now()
    });
  }
  function b(e) {
    return "string" == typeof e ? {
      protocol: "https",
      url: e,
      accept: m.Any
    } : {
      protocol: e.protocol || "https",
      url: e.url,
      accept: e.accept || m.Any
    };
  }
  var O = "GET", P = "POST";
  function q(e, t) {
    return Promise.all(t.map(function (t) {
      return e.get(t, function () {
        return Promise.resolve(g(t));
      });
    })).then(function (e) {
      var r = e.filter(function (e) {
        return (function (e) {
          return e.status === p || Date.now() - e.lastUpdate > 12e4;
        })(e);
      }), n = e.filter(function (e) {
        return (function (e) {
          return e.status === y && Date.now() - e.lastUpdate <= 12e4;
        })(e);
      }), o = [].concat(a(r), a(n));
      return {
        getTimeout: function (e, t) {
          return (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t;
        },
        statelessHosts: o.length > 0 ? o.map(function (e) {
          return b(e);
        }) : t
      };
    });
  }
  function j(e, t, n, o) {
    var u = [], i = (function (e, t) {
      if (e.method === O || void 0 === e.data && void 0 === t.data) return;
      var n = Array.isArray(e.data) ? e.data : r(r({}, e.data), t.data);
      return JSON.stringify(n);
    })(n, o), s = (function (e, t) {
      var n = r(r({}, e.headers), t.headers), o = {};
      return (Object.keys(n).forEach(function (e) {
        var t = n[e];
        o[e.toLowerCase()] = t;
      }), o);
    })(e, o), c = n.method, l = n.method !== O ? {} : r(r({}, n.data), o.data), f = r(r(r({
      "x-algolia-agent": e.userAgent.value
    }, e.queryParameters), l), o.queryParameters), h = 0, d = function t(r, a) {
      var l = r.pop();
      if (void 0 === l) throw {
        name: "RetryError",
        message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
        transporterStackTrace: A(u)
      };
      var d = {
        data: i,
        headers: s,
        method: c,
        url: S(l, n.path, f),
        connectTimeout: a(h, e.timeouts.connect),
        responseTimeout: a(h, o.timeout)
      }, m = function (e) {
        var t = {
          request: d,
          response: e,
          host: l,
          triesLeft: r.length
        };
        return (u.push(t), t);
      }, p = {
        onSuccess: function (e) {
          return (function (e) {
            try {
              return JSON.parse(e.content);
            } catch (t) {
              throw (function (e, t) {
                return {
                  name: "DeserializationError",
                  message: e,
                  response: t
                };
              })(t.message, e);
            }
          })(e);
        },
        onRetry: function (n) {
          var o = m(n);
          return (n.isTimedOut && h++, Promise.all([e.logger.info("Retryable failure", x(o)), e.hostsCache.set(l, g(l, n.isTimedOut ? y : v))]).then(function () {
            return t(r, a);
          }));
        },
        onFail: function (e) {
          throw (m(e), (function (e, t) {
            var r = e.content, n = e.status, o = r;
            try {
              o = JSON.parse(r).message;
            } catch (e) {}
            return (function (e, t, r) {
              return {
                name: "ApiError",
                message: e,
                status: t,
                transporterStackTrace: r
              };
            })(o, n, t);
          })(e, A(u)));
        }
      };
      return e.requester.send(d).then(function (e) {
        return (function (e, t) {
          return (function (e) {
            var t = e.status;
            return e.isTimedOut || (function (e) {
              var t = e.isTimedOut, r = e.status;
              return !t && 0 == ~~r;
            })(e) || 2 != ~~(t / 100) && 4 != ~~(t / 100);
          })(e) ? t.onRetry(e) : 2 == ~~(e.status / 100) ? t.onSuccess(e) : t.onFail(e);
        })(e, p);
      });
    };
    return q(e.hostsCache, t).then(function (e) {
      return d(a(e.statelessHosts).reverse(), e.getTimeout);
    });
  }
  function w(e) {
    var t = {
      value: ("Algolia for JavaScript (").concat(e, ")"),
      add: function (e) {
        var r = ("; ").concat(e.segment).concat(void 0 !== e.version ? (" (").concat(e.version, ")") : "");
        return (-1 === t.value.indexOf(r) && (t.value = ("").concat(t.value).concat(r)), t);
      }
    };
    return t;
  }
  function S(e, t, r) {
    var n = T(r), o = ("").concat(e.protocol, "://").concat(e.url, "/").concat("/" === t.charAt(0) ? t.substr(1) : t);
    return (n.length && (o += ("?").concat(n)), o);
  }
  function T(e) {
    return Object.keys(e).map(function (t) {
      return f("%s=%s", t, (r = e[t], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(e[t]) : e[t]));
      var r;
    }).join("&");
  }
  function A(e) {
    return e.map(function (e) {
      return x(e);
    });
  }
  function x(e) {
    var t = e.request.headers["x-algolia-api-key"] ? {
      "x-algolia-api-key": "*****"
    } : {};
    return r(r({}, e), {}, {
      request: r(r({}, e.request), {}, {
        headers: r(r({}, e.request.headers), t)
      })
    });
  }
  var N = function (e) {
    var t = e.appId, n = (function (e, t, r) {
      var n = {
        "x-algolia-api-key": r,
        "x-algolia-application-id": t
      };
      return {
        headers: function () {
          return e === h.WithinHeaders ? n : {};
        },
        queryParameters: function () {
          return e === h.WithinQueryParameters ? n : {};
        }
      };
    })(void 0 !== e.authMode ? e.authMode : h.WithinHeaders, t, e.apiKey), a = (function (e) {
      var t = e.hostsCache, r = e.logger, n = e.requester, a = e.requestsCache, u = e.responsesCache, i = e.timeouts, s = e.userAgent, c = e.hosts, l = e.queryParameters, f = {
        hostsCache: t,
        logger: r,
        requester: n,
        requestsCache: a,
        responsesCache: u,
        timeouts: i,
        userAgent: s,
        headers: e.headers,
        queryParameters: l,
        hosts: c.map(function (e) {
          return b(e);
        }),
        read: function (e, t) {
          var r = d(t, f.timeouts.read), n = function () {
            return j(f, f.hosts.filter(function (e) {
              return 0 != (e.accept & m.Read);
            }), e, r);
          };
          if (!0 !== (void 0 !== r.cacheable ? r.cacheable : e.cacheable)) return n();
          var a = {
            request: e,
            mappedRequestOptions: r,
            transporter: {
              queryParameters: f.queryParameters,
              headers: f.headers
            }
          };
          return f.responsesCache.get(a, function () {
            return f.requestsCache.get(a, function () {
              return f.requestsCache.set(a, n()).then(function (e) {
                return Promise.all([f.requestsCache.delete(a), e]);
              }, function (e) {
                return Promise.all([f.requestsCache.delete(a), Promise.reject(e)]);
              }).then(function (e) {
                var t = o(e, 2);
                t[0];
                return t[1];
              });
            });
          }, {
            miss: function (e) {
              return f.responsesCache.set(a, e);
            }
          });
        },
        write: function (e, t) {
          return j(f, f.hosts.filter(function (e) {
            return 0 != (e.accept & m.Write);
          }), e, d(t, f.timeouts.write));
        }
      };
      return f;
    })(r(r({
      hosts: [{
        url: ("").concat(t, "-dsn.algolia.net"),
        accept: m.Read
      }, {
        url: ("").concat(t, ".algolia.net"),
        accept: m.Write
      }].concat(c([{
        url: ("").concat(t, "-1.algolianet.com")
      }, {
        url: ("").concat(t, "-2.algolianet.com")
      }, {
        url: ("").concat(t, "-3.algolianet.com")
      }]))
    }, e), {}, {
      headers: r(r(r({}, n.headers()), {
        "content-type": "application/x-www-form-urlencoded"
      }), e.headers),
      queryParameters: r(r({}, n.queryParameters()), e.queryParameters)
    }));
    return l({
      transporter: a,
      appId: t,
      addAlgoliaAgent: function (e, t) {
        a.userAgent.add({
          segment: e,
          version: t
        });
      },
      clearCache: function () {
        return Promise.all([a.requestsCache.clear(), a.responsesCache.clear()]).then(function () {});
      }
    }, e.methods);
  }, C = function (e) {
    return function (t) {
      var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
        transporter: e.transporter,
        appId: e.appId,
        indexName: t
      };
      return l(n, r.methods);
    };
  }, k = function (e) {
    return function (t, n) {
      var o = t.map(function (e) {
        return r(r({}, e), {}, {
          params: T(e.params || ({}))
        });
      });
      return e.transporter.read({
        method: P,
        path: "1/indexes/*/queries",
        data: {
          requests: o
        },
        cacheable: !0
      }, n);
    };
  }, J = function (e) {
    return function (t, o) {
      return Promise.all(t.map(function (t) {
        var a = t.params, u = a.facetName, i = a.facetQuery, s = n(a, ["facetName", "facetQuery"]);
        return C(e)(t.indexName, {
          methods: {
            searchForFacetValues: F
          }
        }).searchForFacetValues(u, i, r(r({}, o), s));
      }));
    };
  }, E = function (e) {
    return function (t, r, n) {
      return e.transporter.read({
        method: P,
        path: f("1/answers/%s/prediction", e.indexName),
        data: {
          query: t,
          queryLanguages: r
        },
        cacheable: !0
      }, n);
    };
  }, I = function (e) {
    return function (t, r) {
      return e.transporter.read({
        method: P,
        path: f("1/indexes/%s/query", e.indexName),
        data: {
          query: t
        },
        cacheable: !0
      }, r);
    };
  }, F = function (e) {
    return function (t, r, n) {
      return e.transporter.read({
        method: P,
        path: f("1/indexes/%s/facets/%s/query", e.indexName, t),
        data: {
          facetQuery: r
        },
        cacheable: !0
      }, n);
    };
  }, R = 1, D = 2, W = 3;
  function H(e, t, n) {
    var o, a = {
      appId: e,
      apiKey: t,
      timeouts: {
        connect: 1,
        read: 2,
        write: 30
      },
      requester: {
        send: function (e) {
          return new Promise(function (t) {
            var r = new XMLHttpRequest();
            (r.open(e.method, e.url, !0), Object.keys(e.headers).forEach(function (t) {
              return r.setRequestHeader(t, e.headers[t]);
            }));
            var n, o = function (e, n) {
              return setTimeout(function () {
                (r.abort(), t({
                  status: 0,
                  content: n,
                  isTimedOut: !0
                }));
              }, 1e3 * e);
            }, a = o(e.connectTimeout, "Connection timeout");
            (r.onreadystatechange = function () {
              r.readyState > r.OPENED && void 0 === n && (clearTimeout(a), n = o(e.responseTimeout, "Socket timeout"));
            }, r.onerror = function () {
              0 === r.status && (clearTimeout(a), clearTimeout(n), t({
                content: r.responseText || "Network request failed",
                status: r.status,
                isTimedOut: !1
              }));
            }, r.onload = function () {
              (clearTimeout(a), clearTimeout(n), t({
                content: r.responseText,
                status: r.status,
                isTimedOut: !1
              }));
            }, r.send(e.data));
          });
        }
      },
      logger: (o = W, {
        debug: function (e, t) {
          return (R >= o && console.debug(e, t), Promise.resolve());
        },
        info: function (e, t) {
          return (D >= o && console.info(e, t), Promise.resolve());
        },
        error: function (e, t) {
          return (console.error(e, t), Promise.resolve());
        }
      }),
      responsesCache: s(),
      requestsCache: s({
        serializable: !1
      }),
      hostsCache: i({
        caches: [u({
          key: ("").concat("4.9.1", "-").concat(e)
        }), s()]
      }),
      userAgent: w("4.9.1").add({
        segment: "Browser",
        version: "lite"
      }),
      authMode: h.WithinQueryParameters
    };
    return N(r(r(r({}, a), n), {}, {
      methods: {
        search: k,
        searchForFacetValues: J,
        multipleQueries: k,
        multipleSearchForFacetValues: J,
        initIndex: function (e) {
          return function (t) {
            return C(e)(t, {
              methods: {
                search: I,
                searchForFacetValues: F,
                findAnswers: E
              }
            });
          };
        }
      }
    }));
  }
  return (H.version = "4.9.1", H);
});

},{}],"4ZOnh":[function() {},{}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["5J8Fp","3coI7"], "3coI7", "parcelRequirefdc4")

//# sourceMappingURL=index.7d93137f.js.map
