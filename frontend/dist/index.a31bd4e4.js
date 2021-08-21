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
        this,
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
})({"1j6wU":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"592mh"}],"37Jv8":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "51d9ca3971821ec650ed0cc0a31bd4e4"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
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
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5bZtG":[function(require,module,exports) {
(function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(function() {
        try {
            return require("moment");
        } catch (t1) {
        }
    }()) : "function" == typeof define && define.amd ? define([
        "require"
    ], function(t1) {
        return e(function() {
            try {
                return t1("moment");
            } catch (t2) {
            }
        }());
    }) : (t = t || self).Chart = e(t.moment);
})(this, function(t) {
    "use strict";
    t = t && t.hasOwnProperty("default") ? t.default : t;
    var e = {
        aliceblue: [
            240,
            248,
            255
        ],
        antiquewhite: [
            250,
            235,
            215
        ],
        aqua: [
            0,
            255,
            255
        ],
        aquamarine: [
            127,
            255,
            212
        ],
        azure: [
            240,
            255,
            255
        ],
        beige: [
            245,
            245,
            220
        ],
        bisque: [
            255,
            228,
            196
        ],
        black: [
            0,
            0,
            0
        ],
        blanchedalmond: [
            255,
            235,
            205
        ],
        blue: [
            0,
            0,
            255
        ],
        blueviolet: [
            138,
            43,
            226
        ],
        brown: [
            165,
            42,
            42
        ],
        burlywood: [
            222,
            184,
            135
        ],
        cadetblue: [
            95,
            158,
            160
        ],
        chartreuse: [
            127,
            255,
            0
        ],
        chocolate: [
            210,
            105,
            30
        ],
        coral: [
            255,
            127,
            80
        ],
        cornflowerblue: [
            100,
            149,
            237
        ],
        cornsilk: [
            255,
            248,
            220
        ],
        crimson: [
            220,
            20,
            60
        ],
        cyan: [
            0,
            255,
            255
        ],
        darkblue: [
            0,
            0,
            139
        ],
        darkcyan: [
            0,
            139,
            139
        ],
        darkgoldenrod: [
            184,
            134,
            11
        ],
        darkgray: [
            169,
            169,
            169
        ],
        darkgreen: [
            0,
            100,
            0
        ],
        darkgrey: [
            169,
            169,
            169
        ],
        darkkhaki: [
            189,
            183,
            107
        ],
        darkmagenta: [
            139,
            0,
            139
        ],
        darkolivegreen: [
            85,
            107,
            47
        ],
        darkorange: [
            255,
            140,
            0
        ],
        darkorchid: [
            153,
            50,
            204
        ],
        darkred: [
            139,
            0,
            0
        ],
        darksalmon: [
            233,
            150,
            122
        ],
        darkseagreen: [
            143,
            188,
            143
        ],
        darkslateblue: [
            72,
            61,
            139
        ],
        darkslategray: [
            47,
            79,
            79
        ],
        darkslategrey: [
            47,
            79,
            79
        ],
        darkturquoise: [
            0,
            206,
            209
        ],
        darkviolet: [
            148,
            0,
            211
        ],
        deeppink: [
            255,
            20,
            147
        ],
        deepskyblue: [
            0,
            191,
            255
        ],
        dimgray: [
            105,
            105,
            105
        ],
        dimgrey: [
            105,
            105,
            105
        ],
        dodgerblue: [
            30,
            144,
            255
        ],
        firebrick: [
            178,
            34,
            34
        ],
        floralwhite: [
            255,
            250,
            240
        ],
        forestgreen: [
            34,
            139,
            34
        ],
        fuchsia: [
            255,
            0,
            255
        ],
        gainsboro: [
            220,
            220,
            220
        ],
        ghostwhite: [
            248,
            248,
            255
        ],
        gold: [
            255,
            215,
            0
        ],
        goldenrod: [
            218,
            165,
            32
        ],
        gray: [
            128,
            128,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        greenyellow: [
            173,
            255,
            47
        ],
        grey: [
            128,
            128,
            128
        ],
        honeydew: [
            240,
            255,
            240
        ],
        hotpink: [
            255,
            105,
            180
        ],
        indianred: [
            205,
            92,
            92
        ],
        indigo: [
            75,
            0,
            130
        ],
        ivory: [
            255,
            255,
            240
        ],
        khaki: [
            240,
            230,
            140
        ],
        lavender: [
            230,
            230,
            250
        ],
        lavenderblush: [
            255,
            240,
            245
        ],
        lawngreen: [
            124,
            252,
            0
        ],
        lemonchiffon: [
            255,
            250,
            205
        ],
        lightblue: [
            173,
            216,
            230
        ],
        lightcoral: [
            240,
            128,
            128
        ],
        lightcyan: [
            224,
            255,
            255
        ],
        lightgoldenrodyellow: [
            250,
            250,
            210
        ],
        lightgray: [
            211,
            211,
            211
        ],
        lightgreen: [
            144,
            238,
            144
        ],
        lightgrey: [
            211,
            211,
            211
        ],
        lightpink: [
            255,
            182,
            193
        ],
        lightsalmon: [
            255,
            160,
            122
        ],
        lightseagreen: [
            32,
            178,
            170
        ],
        lightskyblue: [
            135,
            206,
            250
        ],
        lightslategray: [
            119,
            136,
            153
        ],
        lightslategrey: [
            119,
            136,
            153
        ],
        lightsteelblue: [
            176,
            196,
            222
        ],
        lightyellow: [
            255,
            255,
            224
        ],
        lime: [
            0,
            255,
            0
        ],
        limegreen: [
            50,
            205,
            50
        ],
        linen: [
            250,
            240,
            230
        ],
        magenta: [
            255,
            0,
            255
        ],
        maroon: [
            128,
            0,
            0
        ],
        mediumaquamarine: [
            102,
            205,
            170
        ],
        mediumblue: [
            0,
            0,
            205
        ],
        mediumorchid: [
            186,
            85,
            211
        ],
        mediumpurple: [
            147,
            112,
            219
        ],
        mediumseagreen: [
            60,
            179,
            113
        ],
        mediumslateblue: [
            123,
            104,
            238
        ],
        mediumspringgreen: [
            0,
            250,
            154
        ],
        mediumturquoise: [
            72,
            209,
            204
        ],
        mediumvioletred: [
            199,
            21,
            133
        ],
        midnightblue: [
            25,
            25,
            112
        ],
        mintcream: [
            245,
            255,
            250
        ],
        mistyrose: [
            255,
            228,
            225
        ],
        moccasin: [
            255,
            228,
            181
        ],
        navajowhite: [
            255,
            222,
            173
        ],
        navy: [
            0,
            0,
            128
        ],
        oldlace: [
            253,
            245,
            230
        ],
        olive: [
            128,
            128,
            0
        ],
        olivedrab: [
            107,
            142,
            35
        ],
        orange: [
            255,
            165,
            0
        ],
        orangered: [
            255,
            69,
            0
        ],
        orchid: [
            218,
            112,
            214
        ],
        palegoldenrod: [
            238,
            232,
            170
        ],
        palegreen: [
            152,
            251,
            152
        ],
        paleturquoise: [
            175,
            238,
            238
        ],
        palevioletred: [
            219,
            112,
            147
        ],
        papayawhip: [
            255,
            239,
            213
        ],
        peachpuff: [
            255,
            218,
            185
        ],
        peru: [
            205,
            133,
            63
        ],
        pink: [
            255,
            192,
            203
        ],
        plum: [
            221,
            160,
            221
        ],
        powderblue: [
            176,
            224,
            230
        ],
        purple: [
            128,
            0,
            128
        ],
        rebeccapurple: [
            102,
            51,
            153
        ],
        red: [
            255,
            0,
            0
        ],
        rosybrown: [
            188,
            143,
            143
        ],
        royalblue: [
            65,
            105,
            225
        ],
        saddlebrown: [
            139,
            69,
            19
        ],
        salmon: [
            250,
            128,
            114
        ],
        sandybrown: [
            244,
            164,
            96
        ],
        seagreen: [
            46,
            139,
            87
        ],
        seashell: [
            255,
            245,
            238
        ],
        sienna: [
            160,
            82,
            45
        ],
        silver: [
            192,
            192,
            192
        ],
        skyblue: [
            135,
            206,
            235
        ],
        slateblue: [
            106,
            90,
            205
        ],
        slategray: [
            112,
            128,
            144
        ],
        slategrey: [
            112,
            128,
            144
        ],
        snow: [
            255,
            250,
            250
        ],
        springgreen: [
            0,
            255,
            127
        ],
        steelblue: [
            70,
            130,
            180
        ],
        tan: [
            210,
            180,
            140
        ],
        teal: [
            0,
            128,
            128
        ],
        thistle: [
            216,
            191,
            216
        ],
        tomato: [
            255,
            99,
            71
        ],
        turquoise: [
            64,
            224,
            208
        ],
        violet: [
            238,
            130,
            238
        ],
        wheat: [
            245,
            222,
            179
        ],
        white: [
            255,
            255,
            255
        ],
        whitesmoke: [
            245,
            245,
            245
        ],
        yellow: [
            255,
            255,
            0
        ],
        yellowgreen: [
            154,
            205,
            50
        ]
    }, n = function(t1, e1) {
        return t1(e1 = {
            exports: {
            }
        }, e1.exports), e1.exports;
    }(function(t1) {
        var n1 = {
        };
        for(var i in e)e.hasOwnProperty(i) && (n1[e[i]] = i);
        var a = t1.exports = {
            rgb: {
                channels: 3,
                labels: "rgb"
            },
            hsl: {
                channels: 3,
                labels: "hsl"
            },
            hsv: {
                channels: 3,
                labels: "hsv"
            },
            hwb: {
                channels: 3,
                labels: "hwb"
            },
            cmyk: {
                channels: 4,
                labels: "cmyk"
            },
            xyz: {
                channels: 3,
                labels: "xyz"
            },
            lab: {
                channels: 3,
                labels: "lab"
            },
            lch: {
                channels: 3,
                labels: "lch"
            },
            hex: {
                channels: 1,
                labels: [
                    "hex"
                ]
            },
            keyword: {
                channels: 1,
                labels: [
                    "keyword"
                ]
            },
            ansi16: {
                channels: 1,
                labels: [
                    "ansi16"
                ]
            },
            ansi256: {
                channels: 1,
                labels: [
                    "ansi256"
                ]
            },
            hcg: {
                channels: 3,
                labels: [
                    "h",
                    "c",
                    "g"
                ]
            },
            apple: {
                channels: 3,
                labels: [
                    "r16",
                    "g16",
                    "b16"
                ]
            },
            gray: {
                channels: 1,
                labels: [
                    "gray"
                ]
            }
        };
        for(var r in a)if (a.hasOwnProperty(r)) {
            if (!("channels" in a[r])) throw new Error("missing channels property: " + r);
            if (!("labels" in a[r])) throw new Error("missing channel labels property: " + r);
            if (a[r].labels.length !== a[r].channels) throw new Error("channel and label counts mismatch: " + r);
            var o = a[r].channels, s = a[r].labels;
            delete a[r].channels, delete a[r].labels, Object.defineProperty(a[r], "channels", {
                value: o
            }), Object.defineProperty(a[r], "labels", {
                value: s
            });
        }
        a.rgb.hsl = function(t2) {
            var e1, n2, i1 = t2[0] / 255, a1 = t2[1] / 255, r1 = t2[2] / 255, o = Math.min(i1, a1, r1), s = Math.max(i1, a1, r1), l = s - o;
            return s === o ? e1 = 0 : i1 === s ? e1 = (a1 - r1) / l : a1 === s ? e1 = 2 + (r1 - i1) / l : r1 === s && (e1 = 4 + (i1 - a1) / l), (e1 = Math.min(60 * e1, 360)) < 0 && (e1 += 360), n2 = (o + s) / 2, [
                e1,
                100 * (s === o ? 0 : n2 <= 0.5 ? l / (s + o) : l / (2 - s - o)),
                100 * n2
            ];
        }, a.rgb.hsv = function(t2) {
            var e1, n2, i1, a1, r1, o = t2[0] / 255, s = t2[1] / 255, l = t2[2] / 255, u = Math.max(o, s, l), d = u - Math.min(o, s, l), h = function(t3) {
                return (u - t3) / 6 / d + 0.5;
            };
            return 0 === d ? a1 = r1 = 0 : (r1 = d / u, e1 = h(o), n2 = h(s), i1 = h(l), o === u ? a1 = i1 - n2 : s === u ? a1 = 1 / 3 + e1 - i1 : l === u && (a1 = 2 / 3 + n2 - e1), a1 < 0 ? a1 += 1 : a1 > 1 && (a1 -= 1)), [
                360 * a1,
                100 * r1,
                100 * u
            ];
        }, a.rgb.hwb = function(t2) {
            var e1 = t2[0], n2 = t2[1], i1 = t2[2];
            return [
                a.rgb.hsl(t2)[0],
                100 * (1 / 255 * Math.min(e1, Math.min(n2, i1))),
                100 * (i1 = 1 - 1 / 255 * Math.max(e1, Math.max(n2, i1)))
            ];
        }, a.rgb.cmyk = function(t2) {
            var e1, n2 = t2[0] / 255, i1 = t2[1] / 255, a1 = t2[2] / 255;
            return [
                100 * ((1 - n2 - (e1 = Math.min(1 - n2, 1 - i1, 1 - a1))) / (1 - e1) || 0),
                100 * ((1 - i1 - e1) / (1 - e1) || 0),
                100 * ((1 - a1 - e1) / (1 - e1) || 0),
                100 * e1
            ];
        }, a.rgb.keyword = function(t2) {
            var i1 = n1[t2];
            if (i1) return i1;
            var a1, r1, o, s = 1 / 0;
            for(var l in e)if (e.hasOwnProperty(l)) {
                var u = e[l], d = (r1 = t2, o = u, Math.pow(r1[0] - o[0], 2) + Math.pow(r1[1] - o[1], 2) + Math.pow(r1[2] - o[2], 2));
                d < s && (s = d, a1 = l);
            }
            return a1;
        }, a.keyword.rgb = function(t2) {
            return e[t2];
        }, a.rgb.xyz = function(t2) {
            var e1 = t2[0] / 255, n2 = t2[1] / 255, i1 = t2[2] / 255;
            return [
                100 * (0.4124 * (e1 = e1 > 0.04045 ? Math.pow((e1 + 0.055) / 1.055, 2.4) : e1 / 12.92) + 0.3576 * (n2 = n2 > 0.04045 ? Math.pow((n2 + 0.055) / 1.055, 2.4) : n2 / 12.92) + 0.1805 * (i1 = i1 > 0.04045 ? Math.pow((i1 + 0.055) / 1.055, 2.4) : i1 / 12.92)),
                100 * (0.2126 * e1 + 0.7152 * n2 + 0.0722 * i1),
                100 * (0.0193 * e1 + 0.1192 * n2 + 0.9505 * i1)
            ];
        }, a.rgb.lab = function(t2) {
            var e1 = a.rgb.xyz(t2), n2 = e1[0], i1 = e1[1], r1 = e1[2];
            return i1 /= 100, r1 /= 108.883, n2 = (n2 /= 95.047) > 0.008856 ? Math.pow(n2, 1 / 3) : 7.787 * n2 + 16 / 116, [
                116 * (i1 = i1 > 0.008856 ? Math.pow(i1, 1 / 3) : 7.787 * i1 + 16 / 116) - 16,
                500 * (n2 - i1),
                200 * (i1 - (r1 = r1 > 0.008856 ? Math.pow(r1, 1 / 3) : 7.787 * r1 + 16 / 116))
            ];
        }, a.hsl.rgb = function(t2) {
            var e1, n2, i1, a1, r1, o = t2[0] / 360, s = t2[1] / 100, l = t2[2] / 100;
            if (0 === s) return [
                r1 = 255 * l,
                r1,
                r1
            ];
            e1 = 2 * l - (n2 = l < 0.5 ? l * (1 + s) : l + s - l * s), a1 = [
                0,
                0,
                0
            ];
            for(var u = 0; u < 3; u++)(i1 = o + 1 / 3 * -(u - 1)) < 0 && i1++, i1 > 1 && i1--, r1 = 6 * i1 < 1 ? e1 + 6 * (n2 - e1) * i1 : 2 * i1 < 1 ? n2 : 3 * i1 < 2 ? e1 + (n2 - e1) * (2 / 3 - i1) * 6 : e1, a1[u] = 255 * r1;
            return a1;
        }, a.hsl.hsv = function(t2) {
            var e1 = t2[0], n2 = t2[1] / 100, i1 = t2[2] / 100, a1 = n2, r1 = Math.max(i1, 0.01);
            return n2 *= (i1 *= 2) <= 1 ? i1 : 2 - i1, a1 *= r1 <= 1 ? r1 : 2 - r1, [
                e1,
                100 * (0 === i1 ? 2 * a1 / (r1 + a1) : 2 * n2 / (i1 + n2)),
                100 * ((i1 + n2) / 2)
            ];
        }, a.hsv.rgb = function(t2) {
            var e1 = t2[0] / 60, n2 = t2[1] / 100, i1 = t2[2] / 100, a1 = Math.floor(e1) % 6, r1 = e1 - Math.floor(e1), o = 255 * i1 * (1 - n2), s = 255 * i1 * (1 - n2 * r1), l = 255 * i1 * (1 - n2 * (1 - r1));
            switch(i1 *= 255, a1){
                case 0:
                    return [
                        i1,
                        l,
                        o
                    ];
                case 1:
                    return [
                        s,
                        i1,
                        o
                    ];
                case 2:
                    return [
                        o,
                        i1,
                        l
                    ];
                case 3:
                    return [
                        o,
                        s,
                        i1
                    ];
                case 4:
                    return [
                        l,
                        o,
                        i1
                    ];
                case 5:
                    return [
                        i1,
                        o,
                        s
                    ];
            }
        }, a.hsv.hsl = function(t2) {
            var e1, n2, i1, a1 = t2[0], r1 = t2[1] / 100, o = t2[2] / 100, s = Math.max(o, 0.01);
            return i1 = (2 - r1) * o, n2 = r1 * s, [
                a1,
                100 * (n2 = (n2 /= (e1 = (2 - r1) * s) <= 1 ? e1 : 2 - e1) || 0),
                100 * (i1 /= 2)
            ];
        }, a.hwb.rgb = function(t2) {
            var e1, n2, i1, a1, r1, o, s, l = t2[0] / 360, u = t2[1] / 100, d = t2[2] / 100, h = u + d;
            switch(h > 1 && (u /= h, d /= h), i1 = 6 * l - (e1 = Math.floor(6 * l)), 0 != (1 & e1) && (i1 = 1 - i1), a1 = u + i1 * ((n2 = 1 - d) - u), e1){
                default:
                case 6:
                case 0:
                    r1 = n2, o = a1, s = u;
                    break;
                case 1:
                    r1 = a1, o = n2, s = u;
                    break;
                case 2:
                    r1 = u, o = n2, s = a1;
                    break;
                case 3:
                    r1 = u, o = a1, s = n2;
                    break;
                case 4:
                    r1 = a1, o = u, s = n2;
                    break;
                case 5:
                    r1 = n2, o = u, s = a1;
            }
            return [
                255 * r1,
                255 * o,
                255 * s
            ];
        }, a.cmyk.rgb = function(t2) {
            var e1 = t2[0] / 100, n2 = t2[1] / 100, i1 = t2[2] / 100, a1 = t2[3] / 100;
            return [
                255 * (1 - Math.min(1, e1 * (1 - a1) + a1)),
                255 * (1 - Math.min(1, n2 * (1 - a1) + a1)),
                255 * (1 - Math.min(1, i1 * (1 - a1) + a1))
            ];
        }, a.xyz.rgb = function(t2) {
            var e1, n2, i1, a1 = t2[0] / 100, r1 = t2[1] / 100, o = t2[2] / 100;
            return n2 = -0.9689 * a1 + 1.8758 * r1 + 0.0415 * o, i1 = 0.0557 * a1 + -0.204 * r1 + 1.057 * o, e1 = (e1 = 3.2406 * a1 + -1.5372 * r1 + -0.4986 * o) > 0.0031308 ? 1.055 * Math.pow(e1, 1 / 2.4) - 0.055 : 12.92 * e1, n2 = n2 > 0.0031308 ? 1.055 * Math.pow(n2, 1 / 2.4) - 0.055 : 12.92 * n2, i1 = i1 > 0.0031308 ? 1.055 * Math.pow(i1, 1 / 2.4) - 0.055 : 12.92 * i1, [
                255 * (e1 = Math.min(Math.max(0, e1), 1)),
                255 * (n2 = Math.min(Math.max(0, n2), 1)),
                255 * (i1 = Math.min(Math.max(0, i1), 1))
            ];
        }, a.xyz.lab = function(t2) {
            var e1 = t2[0], n2 = t2[1], i1 = t2[2];
            return n2 /= 100, i1 /= 108.883, e1 = (e1 /= 95.047) > 0.008856 ? Math.pow(e1, 1 / 3) : 7.787 * e1 + 16 / 116, [
                116 * (n2 = n2 > 0.008856 ? Math.pow(n2, 1 / 3) : 7.787 * n2 + 16 / 116) - 16,
                500 * (e1 - n2),
                200 * (n2 - (i1 = i1 > 0.008856 ? Math.pow(i1, 1 / 3) : 7.787 * i1 + 16 / 116))
            ];
        }, a.lab.xyz = function(t2) {
            var e1, n2, i1, a1 = t2[0];
            e1 = t2[1] / 500 + (n2 = (a1 + 16) / 116), i1 = n2 - t2[2] / 200;
            var r1 = Math.pow(n2, 3), o = Math.pow(e1, 3), s = Math.pow(i1, 3);
            return n2 = r1 > 0.008856 ? r1 : (n2 - 16 / 116) / 7.787, e1 = o > 0.008856 ? o : (e1 - 16 / 116) / 7.787, i1 = s > 0.008856 ? s : (i1 - 16 / 116) / 7.787, [
                e1 *= 95.047,
                n2 *= 100,
                i1 *= 108.883
            ];
        }, a.lab.lch = function(t2) {
            var e1, n2 = t2[0], i1 = t2[1], a1 = t2[2];
            return (e1 = 360 * Math.atan2(a1, i1) / 2 / Math.PI) < 0 && (e1 += 360), [
                n2,
                Math.sqrt(i1 * i1 + a1 * a1),
                e1
            ];
        }, a.lch.lab = function(t2) {
            var e1, n2 = t2[0], i1 = t2[1];
            return e1 = t2[2] / 360 * 2 * Math.PI, [
                n2,
                i1 * Math.cos(e1),
                i1 * Math.sin(e1)
            ];
        }, a.rgb.ansi16 = function(t2) {
            var e1 = t2[0], n2 = t2[1], i1 = t2[2], r1 = 1 in arguments ? arguments[1] : a.rgb.hsv(t2)[2];
            if (0 === (r1 = Math.round(r1 / 50))) return 30;
            var o = 30 + (Math.round(i1 / 255) << 2 | Math.round(n2 / 255) << 1 | Math.round(e1 / 255));
            return 2 === r1 && (o += 60), o;
        }, a.hsv.ansi16 = function(t2) {
            return a.rgb.ansi16(a.hsv.rgb(t2), t2[2]);
        }, a.rgb.ansi256 = function(t2) {
            var e1 = t2[0], n2 = t2[1], i1 = t2[2];
            return e1 === n2 && n2 === i1 ? e1 < 8 ? 16 : e1 > 248 ? 231 : Math.round((e1 - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e1 / 255 * 5) + 6 * Math.round(n2 / 255 * 5) + Math.round(i1 / 255 * 5);
        }, a.ansi16.rgb = function(t2) {
            var e1 = t2 % 10;
            if (0 === e1 || 7 === e1) return t2 > 50 && (e1 += 3.5), [
                e1 = e1 / 10.5 * 255,
                e1,
                e1
            ];
            var n2 = 0.5 * (1 + ~~(t2 > 50));
            return [
                (1 & e1) * n2 * 255,
                (e1 >> 1 & 1) * n2 * 255,
                (e1 >> 2 & 1) * n2 * 255
            ];
        }, a.ansi256.rgb = function(t2) {
            if (t2 >= 232) {
                var e1 = 10 * (t2 - 232) + 8;
                return [
                    e1,
                    e1,
                    e1
                ];
            }
            var n2;
            return t2 -= 16, [
                Math.floor(t2 / 36) / 5 * 255,
                Math.floor((n2 = t2 % 36) / 6) / 5 * 255,
                n2 % 6 / 5 * 255
            ];
        }, a.rgb.hex = function(t2) {
            var e2 = (((255 & Math.round(t2[0])) << 16) + ((255 & Math.round(t2[1])) << 8) + (255 & Math.round(t2[2]))).toString(16).toUpperCase();
            return "000000".substring(e2.length) + e2;
        }, a.hex.rgb = function(t2) {
            var e2 = t2.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
            if (!e2) return [
                0,
                0,
                0
            ];
            var n2 = e2[0];
            3 === e2[0].length && (n2 = n2.split("").map(function(t3) {
                return t3 + t3;
            }).join(""));
            var i1 = parseInt(n2, 16);
            return [
                i1 >> 16 & 255,
                i1 >> 8 & 255,
                255 & i1
            ];
        }, a.rgb.hcg = function(t2) {
            var e2, n2 = t2[0] / 255, i1 = t2[1] / 255, a1 = t2[2] / 255, r1 = Math.max(Math.max(n2, i1), a1), o = Math.min(Math.min(n2, i1), a1), s = r1 - o;
            return e2 = s <= 0 ? 0 : r1 === n2 ? (i1 - a1) / s % 6 : r1 === i1 ? 2 + (a1 - n2) / s : 4 + (n2 - i1) / s + 4, e2 /= 6, [
                360 * (e2 %= 1),
                100 * s,
                100 * (s < 1 ? o / (1 - s) : 0)
            ];
        }, a.hsl.hcg = function(t2) {
            var e2 = t2[1] / 100, n2 = t2[2] / 100, i1 = 1, a1 = 0;
            return (i1 = n2 < 0.5 ? 2 * e2 * n2 : 2 * e2 * (1 - n2)) < 1 && (a1 = (n2 - 0.5 * i1) / (1 - i1)), [
                t2[0],
                100 * i1,
                100 * a1
            ];
        }, a.hsv.hcg = function(t2) {
            var e2 = t2[1] / 100, n2 = t2[2] / 100, i1 = e2 * n2, a1 = 0;
            return i1 < 1 && (a1 = (n2 - i1) / (1 - i1)), [
                t2[0],
                100 * i1,
                100 * a1
            ];
        }, a.hcg.rgb = function(t2) {
            var e2 = t2[0] / 360, n2 = t2[1] / 100, i1 = t2[2] / 100;
            if (0 === n2) return [
                255 * i1,
                255 * i1,
                255 * i1
            ];
            var a1, r1 = [
                0,
                0,
                0
            ], o = e2 % 1 * 6, s = o % 1, l = 1 - s;
            switch(Math.floor(o)){
                case 0:
                    r1[0] = 1, r1[1] = s, r1[2] = 0;
                    break;
                case 1:
                    r1[0] = l, r1[1] = 1, r1[2] = 0;
                    break;
                case 2:
                    r1[0] = 0, r1[1] = 1, r1[2] = s;
                    break;
                case 3:
                    r1[0] = 0, r1[1] = l, r1[2] = 1;
                    break;
                case 4:
                    r1[0] = s, r1[1] = 0, r1[2] = 1;
                    break;
                default:
                    r1[0] = 1, r1[1] = 0, r1[2] = l;
            }
            return a1 = (1 - n2) * i1, [
                255 * (n2 * r1[0] + a1),
                255 * (n2 * r1[1] + a1),
                255 * (n2 * r1[2] + a1)
            ];
        }, a.hcg.hsv = function(t2) {
            var e2 = t2[1] / 100, n2 = e2 + t2[2] / 100 * (1 - e2), i1 = 0;
            return n2 > 0 && (i1 = e2 / n2), [
                t2[0],
                100 * i1,
                100 * n2
            ];
        }, a.hcg.hsl = function(t2) {
            var e2 = t2[1] / 100, n2 = t2[2] / 100 * (1 - e2) + 0.5 * e2, i1 = 0;
            return n2 > 0 && n2 < 0.5 ? i1 = e2 / (2 * n2) : n2 >= 0.5 && n2 < 1 && (i1 = e2 / (2 * (1 - n2))), [
                t2[0],
                100 * i1,
                100 * n2
            ];
        }, a.hcg.hwb = function(t2) {
            var e2 = t2[1] / 100, n2 = e2 + t2[2] / 100 * (1 - e2);
            return [
                t2[0],
                100 * (n2 - e2),
                100 * (1 - n2)
            ];
        }, a.hwb.hcg = function(t2) {
            var e2 = t2[1] / 100, n2 = 1 - t2[2] / 100, i1 = n2 - e2, a1 = 0;
            return i1 < 1 && (a1 = (n2 - i1) / (1 - i1)), [
                t2[0],
                100 * i1,
                100 * a1
            ];
        }, a.apple.rgb = function(t2) {
            return [
                t2[0] / 65535 * 255,
                t2[1] / 65535 * 255,
                t2[2] / 65535 * 255
            ];
        }, a.rgb.apple = function(t2) {
            return [
                t2[0] / 255 * 65535,
                t2[1] / 255 * 65535,
                t2[2] / 255 * 65535
            ];
        }, a.gray.rgb = function(t2) {
            return [
                t2[0] / 100 * 255,
                t2[0] / 100 * 255,
                t2[0] / 100 * 255
            ];
        }, a.gray.hsl = a.gray.hsv = function(t2) {
            return [
                0,
                0,
                t2[0]
            ];
        }, a.gray.hwb = function(t2) {
            return [
                0,
                100,
                t2[0]
            ];
        }, a.gray.cmyk = function(t2) {
            return [
                0,
                0,
                0,
                t2[0]
            ];
        }, a.gray.lab = function(t2) {
            return [
                t2[0],
                0,
                0
            ];
        }, a.gray.hex = function(t2) {
            var e2 = 255 & Math.round(t2[0] / 100 * 255), n2 = ((e2 << 16) + (e2 << 8) + e2).toString(16).toUpperCase();
            return "000000".substring(n2.length) + n2;
        }, a.rgb.gray = function(t2) {
            return [
                (t2[0] + t2[1] + t2[2]) / 3 / 255 * 100
            ];
        };
    });
    n.rgb, n.hsl, n.hsv, n.hwb, n.cmyk, n.xyz, n.lab, n.lch, n.hex, n.keyword, n.ansi16, n.ansi256, n.hcg, n.apple, n.gray;
    function i(t1) {
        var e2 = function() {
            for(var t2 = {
            }, e3 = Object.keys(n), i1 = e3.length, a = 0; a < i1; a++)t2[e3[a]] = {
                distance: -1,
                parent: null
            };
            return t2;
        }(), i1 = [
            t1
        ];
        for(e2[t1].distance = 0; i1.length;)for(var a = i1.pop(), r = Object.keys(n[a]), o = r.length, s = 0; s < o; s++){
            var l = r[s], u = e2[l];
            -1 === u.distance && (u.distance = e2[a].distance + 1, u.parent = a, i1.unshift(l));
        }
        return e2;
    }
    function a(t1, e2) {
        return function(n1) {
            return e2(t1(n1));
        };
    }
    function r(t1, e2) {
        for(var i1 = [
            e2[t1].parent,
            t1
        ], r1 = n[e2[t1].parent][t1], o = e2[t1].parent; e2[o].parent;)i1.unshift(e2[o].parent), r1 = a(n[e2[o].parent][o], r1), o = e2[o].parent;
        return r1.conversion = i1, r1;
    }
    var o = {
    };
    Object.keys(n).forEach(function(t1) {
        o[t1] = {
        }, Object.defineProperty(o[t1], "channels", {
            value: n[t1].channels
        }), Object.defineProperty(o[t1], "labels", {
            value: n[t1].labels
        });
        var e2 = function(t2) {
            for(var e3 = i(t2), n1 = {
            }, a1 = Object.keys(e3), o1 = a1.length, s = 0; s < o1; s++){
                var l = a1[s];
                null !== e3[l].parent && (n1[l] = r(l, e3));
            }
            return n1;
        }(t1);
        Object.keys(e2).forEach(function(n1) {
            var i1 = e2[n1];
            o[t1][n1] = (function(t2) {
                var e3 = function(e4) {
                    if (null == e4) return e4;
                    arguments.length > 1 && (e4 = Array.prototype.slice.call(arguments));
                    var n2 = t2(e4);
                    if ("object" == typeof n2) for(var i2 = n2.length, a1 = 0; a1 < i2; a1++)n2[a1] = Math.round(n2[a1]);
                    return n2;
                };
                return "conversion" in t2 && (e3.conversion = t2.conversion), e3;
            })(i1), o[t1][n1].raw = (function(t2) {
                var e3 = function(e4) {
                    return null == e4 ? e4 : (arguments.length > 1 && (e4 = Array.prototype.slice.call(arguments)), t2(e4));
                };
                return "conversion" in t2 && (e3.conversion = t2.conversion), e3;
            })(i1);
        });
    });
    var s = o, l = {
        aliceblue: [
            240,
            248,
            255
        ],
        antiquewhite: [
            250,
            235,
            215
        ],
        aqua: [
            0,
            255,
            255
        ],
        aquamarine: [
            127,
            255,
            212
        ],
        azure: [
            240,
            255,
            255
        ],
        beige: [
            245,
            245,
            220
        ],
        bisque: [
            255,
            228,
            196
        ],
        black: [
            0,
            0,
            0
        ],
        blanchedalmond: [
            255,
            235,
            205
        ],
        blue: [
            0,
            0,
            255
        ],
        blueviolet: [
            138,
            43,
            226
        ],
        brown: [
            165,
            42,
            42
        ],
        burlywood: [
            222,
            184,
            135
        ],
        cadetblue: [
            95,
            158,
            160
        ],
        chartreuse: [
            127,
            255,
            0
        ],
        chocolate: [
            210,
            105,
            30
        ],
        coral: [
            255,
            127,
            80
        ],
        cornflowerblue: [
            100,
            149,
            237
        ],
        cornsilk: [
            255,
            248,
            220
        ],
        crimson: [
            220,
            20,
            60
        ],
        cyan: [
            0,
            255,
            255
        ],
        darkblue: [
            0,
            0,
            139
        ],
        darkcyan: [
            0,
            139,
            139
        ],
        darkgoldenrod: [
            184,
            134,
            11
        ],
        darkgray: [
            169,
            169,
            169
        ],
        darkgreen: [
            0,
            100,
            0
        ],
        darkgrey: [
            169,
            169,
            169
        ],
        darkkhaki: [
            189,
            183,
            107
        ],
        darkmagenta: [
            139,
            0,
            139
        ],
        darkolivegreen: [
            85,
            107,
            47
        ],
        darkorange: [
            255,
            140,
            0
        ],
        darkorchid: [
            153,
            50,
            204
        ],
        darkred: [
            139,
            0,
            0
        ],
        darksalmon: [
            233,
            150,
            122
        ],
        darkseagreen: [
            143,
            188,
            143
        ],
        darkslateblue: [
            72,
            61,
            139
        ],
        darkslategray: [
            47,
            79,
            79
        ],
        darkslategrey: [
            47,
            79,
            79
        ],
        darkturquoise: [
            0,
            206,
            209
        ],
        darkviolet: [
            148,
            0,
            211
        ],
        deeppink: [
            255,
            20,
            147
        ],
        deepskyblue: [
            0,
            191,
            255
        ],
        dimgray: [
            105,
            105,
            105
        ],
        dimgrey: [
            105,
            105,
            105
        ],
        dodgerblue: [
            30,
            144,
            255
        ],
        firebrick: [
            178,
            34,
            34
        ],
        floralwhite: [
            255,
            250,
            240
        ],
        forestgreen: [
            34,
            139,
            34
        ],
        fuchsia: [
            255,
            0,
            255
        ],
        gainsboro: [
            220,
            220,
            220
        ],
        ghostwhite: [
            248,
            248,
            255
        ],
        gold: [
            255,
            215,
            0
        ],
        goldenrod: [
            218,
            165,
            32
        ],
        gray: [
            128,
            128,
            128
        ],
        green: [
            0,
            128,
            0
        ],
        greenyellow: [
            173,
            255,
            47
        ],
        grey: [
            128,
            128,
            128
        ],
        honeydew: [
            240,
            255,
            240
        ],
        hotpink: [
            255,
            105,
            180
        ],
        indianred: [
            205,
            92,
            92
        ],
        indigo: [
            75,
            0,
            130
        ],
        ivory: [
            255,
            255,
            240
        ],
        khaki: [
            240,
            230,
            140
        ],
        lavender: [
            230,
            230,
            250
        ],
        lavenderblush: [
            255,
            240,
            245
        ],
        lawngreen: [
            124,
            252,
            0
        ],
        lemonchiffon: [
            255,
            250,
            205
        ],
        lightblue: [
            173,
            216,
            230
        ],
        lightcoral: [
            240,
            128,
            128
        ],
        lightcyan: [
            224,
            255,
            255
        ],
        lightgoldenrodyellow: [
            250,
            250,
            210
        ],
        lightgray: [
            211,
            211,
            211
        ],
        lightgreen: [
            144,
            238,
            144
        ],
        lightgrey: [
            211,
            211,
            211
        ],
        lightpink: [
            255,
            182,
            193
        ],
        lightsalmon: [
            255,
            160,
            122
        ],
        lightseagreen: [
            32,
            178,
            170
        ],
        lightskyblue: [
            135,
            206,
            250
        ],
        lightslategray: [
            119,
            136,
            153
        ],
        lightslategrey: [
            119,
            136,
            153
        ],
        lightsteelblue: [
            176,
            196,
            222
        ],
        lightyellow: [
            255,
            255,
            224
        ],
        lime: [
            0,
            255,
            0
        ],
        limegreen: [
            50,
            205,
            50
        ],
        linen: [
            250,
            240,
            230
        ],
        magenta: [
            255,
            0,
            255
        ],
        maroon: [
            128,
            0,
            0
        ],
        mediumaquamarine: [
            102,
            205,
            170
        ],
        mediumblue: [
            0,
            0,
            205
        ],
        mediumorchid: [
            186,
            85,
            211
        ],
        mediumpurple: [
            147,
            112,
            219
        ],
        mediumseagreen: [
            60,
            179,
            113
        ],
        mediumslateblue: [
            123,
            104,
            238
        ],
        mediumspringgreen: [
            0,
            250,
            154
        ],
        mediumturquoise: [
            72,
            209,
            204
        ],
        mediumvioletred: [
            199,
            21,
            133
        ],
        midnightblue: [
            25,
            25,
            112
        ],
        mintcream: [
            245,
            255,
            250
        ],
        mistyrose: [
            255,
            228,
            225
        ],
        moccasin: [
            255,
            228,
            181
        ],
        navajowhite: [
            255,
            222,
            173
        ],
        navy: [
            0,
            0,
            128
        ],
        oldlace: [
            253,
            245,
            230
        ],
        olive: [
            128,
            128,
            0
        ],
        olivedrab: [
            107,
            142,
            35
        ],
        orange: [
            255,
            165,
            0
        ],
        orangered: [
            255,
            69,
            0
        ],
        orchid: [
            218,
            112,
            214
        ],
        palegoldenrod: [
            238,
            232,
            170
        ],
        palegreen: [
            152,
            251,
            152
        ],
        paleturquoise: [
            175,
            238,
            238
        ],
        palevioletred: [
            219,
            112,
            147
        ],
        papayawhip: [
            255,
            239,
            213
        ],
        peachpuff: [
            255,
            218,
            185
        ],
        peru: [
            205,
            133,
            63
        ],
        pink: [
            255,
            192,
            203
        ],
        plum: [
            221,
            160,
            221
        ],
        powderblue: [
            176,
            224,
            230
        ],
        purple: [
            128,
            0,
            128
        ],
        rebeccapurple: [
            102,
            51,
            153
        ],
        red: [
            255,
            0,
            0
        ],
        rosybrown: [
            188,
            143,
            143
        ],
        royalblue: [
            65,
            105,
            225
        ],
        saddlebrown: [
            139,
            69,
            19
        ],
        salmon: [
            250,
            128,
            114
        ],
        sandybrown: [
            244,
            164,
            96
        ],
        seagreen: [
            46,
            139,
            87
        ],
        seashell: [
            255,
            245,
            238
        ],
        sienna: [
            160,
            82,
            45
        ],
        silver: [
            192,
            192,
            192
        ],
        skyblue: [
            135,
            206,
            235
        ],
        slateblue: [
            106,
            90,
            205
        ],
        slategray: [
            112,
            128,
            144
        ],
        slategrey: [
            112,
            128,
            144
        ],
        snow: [
            255,
            250,
            250
        ],
        springgreen: [
            0,
            255,
            127
        ],
        steelblue: [
            70,
            130,
            180
        ],
        tan: [
            210,
            180,
            140
        ],
        teal: [
            0,
            128,
            128
        ],
        thistle: [
            216,
            191,
            216
        ],
        tomato: [
            255,
            99,
            71
        ],
        turquoise: [
            64,
            224,
            208
        ],
        violet: [
            238,
            130,
            238
        ],
        wheat: [
            245,
            222,
            179
        ],
        white: [
            255,
            255,
            255
        ],
        whitesmoke: [
            245,
            245,
            245
        ],
        yellow: [
            255,
            255,
            0
        ],
        yellowgreen: [
            154,
            205,
            50
        ]
    }, u = {
        getRgba: d,
        getHsla: h,
        getRgb: function(t1) {
            var e2 = d(t1);
            return e2 && e2.slice(0, 3);
        },
        getHsl: function(t1) {
            var e2 = h(t1);
            return e2 && e2.slice(0, 3);
        },
        getHwb: c,
        getAlpha: function(t1) {
            var e2 = d(t1);
            if (e2) return e2[3];
            if (e2 = h(t1)) return e2[3];
            if (e2 = c(t1)) return e2[3];
        },
        hexString: function(t1, e2) {
            e2 = (void 0) !== e2 && 3 === t1.length ? e2 : t1[3];
            return "#" + v(t1[0]) + v(t1[1]) + v(t1[2]) + (e2 >= 0 && e2 < 1 ? v(Math.round(255 * e2)) : "");
        },
        rgbString: function(t1, e2) {
            if (e2 < 1 || t1[3] && t1[3] < 1) return f(t1, e2);
            return "rgb(" + t1[0] + ", " + t1[1] + ", " + t1[2] + ")";
        },
        rgbaString: f,
        percentString: function(t1, e2) {
            if (e2 < 1 || t1[3] && t1[3] < 1) return g(t1, e2);
            var n1 = Math.round(t1[0] / 255 * 100), i1 = Math.round(t1[1] / 255 * 100), a1 = Math.round(t1[2] / 255 * 100);
            return "rgb(" + n1 + "%, " + i1 + "%, " + a1 + "%)";
        },
        percentaString: g,
        hslString: function(t1, e2) {
            if (e2 < 1 || t1[3] && t1[3] < 1) return p(t1, e2);
            return "hsl(" + t1[0] + ", " + t1[1] + "%, " + t1[2] + "%)";
        },
        hslaString: p,
        hwbString: function(t1, e2) {
            (void 0) === e2 && (e2 = (void 0) !== t1[3] ? t1[3] : 1);
            return "hwb(" + t1[0] + ", " + t1[1] + "%, " + t1[2] + "%" + ((void 0) !== e2 && 1 !== e2 ? ", " + e2 : "") + ")";
        },
        keyword: function(t1) {
            return b[t1.slice(0, 3)];
        }
    };
    function d(t1) {
        if (t1) {
            var e2 = [
                0,
                0,
                0
            ], n1 = 1, i1 = t1.match(/^#([a-fA-F0-9]{3,4})$/i), a1 = "";
            if (i1) {
                a1 = (i1 = i1[1])[3];
                for(var r1 = 0; r1 < e2.length; r1++)e2[r1] = parseInt(i1[r1] + i1[r1], 16);
                a1 && (n1 = Math.round(parseInt(a1 + a1, 16) / 255 * 100) / 100);
            } else if (i1 = t1.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)) {
                a1 = i1[2], i1 = i1[1];
                for(r1 = 0; r1 < e2.length; r1++)e2[r1] = parseInt(i1.slice(2 * r1, 2 * r1 + 2), 16);
                a1 && (n1 = Math.round(parseInt(a1, 16) / 255 * 100) / 100);
            } else if (i1 = t1.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for(r1 = 0; r1 < e2.length; r1++)e2[r1] = parseInt(i1[r1 + 1]);
                n1 = parseFloat(i1[4]);
            } else if (i1 = t1.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)) {
                for(r1 = 0; r1 < e2.length; r1++)e2[r1] = Math.round(2.55 * parseFloat(i1[r1 + 1]));
                n1 = parseFloat(i1[4]);
            } else if (i1 = t1.match(/(\w+)/)) {
                if ("transparent" == i1[1]) return [
                    0,
                    0,
                    0,
                    0
                ];
                if (!(e2 = l[i1[1]])) return;
            }
            for(r1 = 0; r1 < e2.length; r1++)e2[r1] = m(e2[r1], 0, 255);
            return n1 = n1 || 0 == n1 ? m(n1, 0, 1) : 1, e2[3] = n1, e2;
        }
    }
    function h(t1) {
        if (t1) {
            var e3 = t1.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e3) {
                var n2 = parseFloat(e3[4]);
                return [
                    m(parseInt(e3[1]), 0, 360),
                    m(parseFloat(e3[2]), 0, 100),
                    m(parseFloat(e3[3]), 0, 100),
                    m(isNaN(n2) ? 1 : n2, 0, 1)
                ];
            }
        }
    }
    function c(t1) {
        if (t1) {
            var e4 = t1.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);
            if (e4) {
                var n3 = parseFloat(e4[4]);
                return [
                    m(parseInt(e4[1]), 0, 360),
                    m(parseFloat(e4[2]), 0, 100),
                    m(parseFloat(e4[3]), 0, 100),
                    m(isNaN(n3) ? 1 : n3, 0, 1)
                ];
            }
        }
    }
    function f(t1, e5) {
        return (void 0) === e5 && (e5 = (void 0) !== t1[3] ? t1[3] : 1), "rgba(" + t1[0] + ", " + t1[1] + ", " + t1[2] + ", " + e5 + ")";
    }
    function g(t1, e5) {
        return "rgba(" + Math.round(t1[0] / 255 * 100) + "%, " + Math.round(t1[1] / 255 * 100) + "%, " + Math.round(t1[2] / 255 * 100) + "%, " + (e5 || t1[3] || 1) + ")";
    }
    function p(t1, e5) {
        return (void 0) === e5 && (e5 = (void 0) !== t1[3] ? t1[3] : 1), "hsla(" + t1[0] + ", " + t1[1] + "%, " + t1[2] + "%, " + e5 + ")";
    }
    function m(t1, e5, n4) {
        return Math.min(Math.max(e5, t1), n4);
    }
    function v(t1) {
        var e5 = t1.toString(16).toUpperCase();
        return e5.length < 2 ? "0" + e5 : e5;
    }
    var b = {
    };
    for(var x in l)b[l[x]] = x;
    var y = function(t1) {
        var e5;
        return t1 instanceof y ? t1 : this instanceof y ? (this.valid = false, this.values = {
            rgb: [
                0,
                0,
                0
            ],
            hsl: [
                0,
                0,
                0
            ],
            hsv: [
                0,
                0,
                0
            ],
            hwb: [
                0,
                0,
                0
            ],
            cmyk: [
                0,
                0,
                0,
                0
            ],
            alpha: 1
        }, void ("string" == typeof t1 ? (e5 = u.getRgba(t1)) ? this.setValues("rgb", e5) : (e5 = u.getHsla(t1)) ? this.setValues("hsl", e5) : (e5 = u.getHwb(t1)) && this.setValues("hwb", e5) : "object" == typeof t1 && ((void 0) !== (e5 = t1).r || (void 0) !== e5.red ? this.setValues("rgb", e5) : (void 0) !== e5.l || (void 0) !== e5.lightness ? this.setValues("hsl", e5) : (void 0) !== e5.v || (void 0) !== e5.value ? this.setValues("hsv", e5) : (void 0) !== e5.w || (void 0) !== e5.whiteness ? this.setValues("hwb", e5) : (void 0) === e5.c && (void 0) === e5.cyan || this.setValues("cmyk", e5)))) : new y(t1);
    };
    y.prototype = {
        isValid: function() {
            return this.valid;
        },
        rgb: function() {
            return this.setSpace("rgb", arguments);
        },
        hsl: function() {
            return this.setSpace("hsl", arguments);
        },
        hsv: function() {
            return this.setSpace("hsv", arguments);
        },
        hwb: function() {
            return this.setSpace("hwb", arguments);
        },
        cmyk: function() {
            return this.setSpace("cmyk", arguments);
        },
        rgbArray: function() {
            return this.values.rgb;
        },
        hslArray: function() {
            return this.values.hsl;
        },
        hsvArray: function() {
            return this.values.hsv;
        },
        hwbArray: function() {
            var t1 = this.values;
            return 1 !== t1.alpha ? t1.hwb.concat([
                t1.alpha
            ]) : t1.hwb;
        },
        cmykArray: function() {
            return this.values.cmyk;
        },
        rgbaArray: function() {
            var t1 = this.values;
            return t1.rgb.concat([
                t1.alpha
            ]);
        },
        hslaArray: function() {
            var t1 = this.values;
            return t1.hsl.concat([
                t1.alpha
            ]);
        },
        alpha: function(t1) {
            return (void 0) === t1 ? this.values.alpha : (this.setValues("alpha", t1), this);
        },
        red: function(t1) {
            return this.setChannel("rgb", 0, t1);
        },
        green: function(t1) {
            return this.setChannel("rgb", 1, t1);
        },
        blue: function(t1) {
            return this.setChannel("rgb", 2, t1);
        },
        hue: function(t1) {
            return t1 && (t1 = (t1 %= 360) < 0 ? 360 + t1 : t1), this.setChannel("hsl", 0, t1);
        },
        saturation: function(t1) {
            return this.setChannel("hsl", 1, t1);
        },
        lightness: function(t1) {
            return this.setChannel("hsl", 2, t1);
        },
        saturationv: function(t1) {
            return this.setChannel("hsv", 1, t1);
        },
        whiteness: function(t1) {
            return this.setChannel("hwb", 1, t1);
        },
        blackness: function(t1) {
            return this.setChannel("hwb", 2, t1);
        },
        value: function(t1) {
            return this.setChannel("hsv", 2, t1);
        },
        cyan: function(t1) {
            return this.setChannel("cmyk", 0, t1);
        },
        magenta: function(t1) {
            return this.setChannel("cmyk", 1, t1);
        },
        yellow: function(t1) {
            return this.setChannel("cmyk", 2, t1);
        },
        black: function(t1) {
            return this.setChannel("cmyk", 3, t1);
        },
        hexString: function() {
            return u.hexString(this.values.rgb);
        },
        rgbString: function() {
            return u.rgbString(this.values.rgb, this.values.alpha);
        },
        rgbaString: function() {
            return u.rgbaString(this.values.rgb, this.values.alpha);
        },
        percentString: function() {
            return u.percentString(this.values.rgb, this.values.alpha);
        },
        hslString: function() {
            return u.hslString(this.values.hsl, this.values.alpha);
        },
        hslaString: function() {
            return u.hslaString(this.values.hsl, this.values.alpha);
        },
        hwbString: function() {
            return u.hwbString(this.values.hwb, this.values.alpha);
        },
        keyword: function() {
            return u.keyword(this.values.rgb, this.values.alpha);
        },
        rgbNumber: function() {
            var t1 = this.values.rgb;
            return t1[0] << 16 | t1[1] << 8 | t1[2];
        },
        luminosity: function() {
            for(var t1 = this.values.rgb, e5 = [], n4 = 0; n4 < t1.length; n4++){
                var i2 = t1[n4] / 255;
                e5[n4] = i2 <= 0.03928 ? i2 / 12.92 : Math.pow((i2 + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * e5[0] + 0.7152 * e5[1] + 0.0722 * e5[2];
        },
        contrast: function(t1) {
            var e5 = this.luminosity(), n4 = t1.luminosity();
            return e5 > n4 ? (e5 + 0.05) / (n4 + 0.05) : (n4 + 0.05) / (e5 + 0.05);
        },
        level: function(t1) {
            var e5 = this.contrast(t1);
            return e5 >= 7.1 ? "AAA" : e5 >= 4.5 ? "AA" : "";
        },
        dark: function() {
            var t1 = this.values.rgb;
            return (299 * t1[0] + 587 * t1[1] + 114 * t1[2]) / 1000 < 128;
        },
        light: function() {
            return !this.dark();
        },
        negate: function() {
            for(var t1 = [], e5 = 0; e5 < 3; e5++)t1[e5] = 255 - this.values.rgb[e5];
            return this.setValues("rgb", t1), this;
        },
        lighten: function(t1) {
            var e5 = this.values.hsl;
            return e5[2] += e5[2] * t1, this.setValues("hsl", e5), this;
        },
        darken: function(t1) {
            var e5 = this.values.hsl;
            return e5[2] -= e5[2] * t1, this.setValues("hsl", e5), this;
        },
        saturate: function(t1) {
            var e5 = this.values.hsl;
            return e5[1] += e5[1] * t1, this.setValues("hsl", e5), this;
        },
        desaturate: function(t1) {
            var e5 = this.values.hsl;
            return e5[1] -= e5[1] * t1, this.setValues("hsl", e5), this;
        },
        whiten: function(t1) {
            var e5 = this.values.hwb;
            return e5[1] += e5[1] * t1, this.setValues("hwb", e5), this;
        },
        blacken: function(t1) {
            var e5 = this.values.hwb;
            return e5[2] += e5[2] * t1, this.setValues("hwb", e5), this;
        },
        greyscale: function() {
            var t1 = this.values.rgb, e5 = 0.3 * t1[0] + 0.59 * t1[1] + 0.11 * t1[2];
            return this.setValues("rgb", [
                e5,
                e5,
                e5
            ]), this;
        },
        clearer: function(t1) {
            var e5 = this.values.alpha;
            return this.setValues("alpha", e5 - e5 * t1), this;
        },
        opaquer: function(t1) {
            var e5 = this.values.alpha;
            return this.setValues("alpha", e5 + e5 * t1), this;
        },
        rotate: function(t1) {
            var e5 = this.values.hsl, n4 = (e5[0] + t1) % 360;
            return e5[0] = n4 < 0 ? 360 + n4 : n4, this.setValues("hsl", e5), this;
        },
        mix: function(t1, e5) {
            var n4 = t1, i3 = (void 0) === e5 ? 0.5 : e5, a2 = 2 * i3 - 1, r2 = this.alpha() - n4.alpha(), o1 = ((a2 * r2 == -1 ? a2 : (a2 + r2) / (1 + a2 * r2)) + 1) / 2, s1 = 1 - o1;
            return this.rgb(o1 * this.red() + s1 * n4.red(), o1 * this.green() + s1 * n4.green(), o1 * this.blue() + s1 * n4.blue()).alpha(this.alpha() * i3 + n4.alpha() * (1 - i3));
        },
        toJSON: function() {
            return this.rgb();
        },
        clone: function() {
            var t1, e5, n4 = new y, i3 = this.values, a2 = n4.values;
            for(var r2 in i3)i3.hasOwnProperty(r2) && (t1 = i3[r2], "[object Array]" === (e5 = ({
            }).toString.call(t1)) ? a2[r2] = t1.slice(0) : "[object Number]" === e5 ? a2[r2] = t1 : console.error("unexpected color value:", t1));
            return n4;
        }
    }, y.prototype.spaces = {
        rgb: [
            "red",
            "green",
            "blue"
        ],
        hsl: [
            "hue",
            "saturation",
            "lightness"
        ],
        hsv: [
            "hue",
            "saturation",
            "value"
        ],
        hwb: [
            "hue",
            "whiteness",
            "blackness"
        ],
        cmyk: [
            "cyan",
            "magenta",
            "yellow",
            "black"
        ]
    }, y.prototype.maxes = {
        rgb: [
            255,
            255,
            255
        ],
        hsl: [
            360,
            100,
            100
        ],
        hsv: [
            360,
            100,
            100
        ],
        hwb: [
            360,
            100,
            100
        ],
        cmyk: [
            100,
            100,
            100,
            100
        ]
    }, y.prototype.getValues = function(t1) {
        for(var e5 = this.values, n4 = {
        }, i3 = 0; i3 < t1.length; i3++)n4[t1.charAt(i3)] = e5[t1][i3];
        return 1 !== e5.alpha && (n4.a = e5.alpha), n4;
    }, y.prototype.setValues = function(t1, e5) {
        var n4, i3, a2 = this.values, r2 = this.spaces, o1 = this.maxes, l1 = 1;
        if (this.valid = true, "alpha" === t1) l1 = e5;
        else if (e5.length) a2[t1] = e5.slice(0, t1.length), l1 = e5[t1.length];
        else if ((void 0) !== e5[t1.charAt(0)]) {
            for(n4 = 0; n4 < t1.length; n4++)a2[t1][n4] = e5[t1.charAt(n4)];
            l1 = e5.a;
        } else if ((void 0) !== e5[r2[t1][0]]) {
            var u1 = r2[t1];
            for(n4 = 0; n4 < t1.length; n4++)a2[t1][n4] = e5[u1[n4]];
            l1 = e5.alpha;
        }
        if (a2.alpha = Math.max(0, Math.min(1, (void 0) === l1 ? a2.alpha : l1)), "alpha" === t1) return false;
        for(n4 = 0; n4 < t1.length; n4++)i3 = Math.max(0, Math.min(o1[t1][n4], a2[t1][n4])), a2[t1][n4] = Math.round(i3);
        for(var d1 in r2)d1 !== t1 && (a2[d1] = s[t1][d1](a2[t1]));
        return true;
    }, y.prototype.setSpace = function(t1, e5) {
        var n4 = e5[0];
        return (void 0) === n4 ? this.getValues(t1) : ("number" == typeof n4 && (n4 = Array.prototype.slice.call(e5)), this.setValues(t1, n4), this);
    }, y.prototype.setChannel = function(t1, e5, n4) {
        var i3 = this.values[t1];
        return (void 0) === n4 ? i3[e5] : n4 === i3[e5] ? this : (i3[e5] = n4, this.setValues(t1, i3), this);
    }, "undefined" != typeof window && (window.Color = y);
    var _ = y;
    function k(t1) {
        return -1 === [
            "__proto__",
            "prototype",
            "constructor"
        ].indexOf(t1);
    }
    var w, M = {
        noop: function() {
        },
        uid: (w = 0, function() {
            return w++;
        }),
        isNullOrUndef: function(t1) {
            return null == t1;
        },
        isArray: function(t1) {
            if (Array.isArray && Array.isArray(t1)) return true;
            var e5 = Object.prototype.toString.call(t1);
            return "[object" === e5.substr(0, 7) && "Array]" === e5.substr(-6);
        },
        isObject: function(t1) {
            return null !== t1 && "[object Object]" === Object.prototype.toString.call(t1);
        },
        isFinite: function(t1) {
            return ("number" == typeof t1 || t1 instanceof Number) && isFinite(t1);
        },
        valueOrDefault: function(t1, e5) {
            return (void 0) === t1 ? e5 : t1;
        },
        valueAtIndexOrDefault: function(t1, e5, n4) {
            return M.valueOrDefault(M.isArray(t1) ? t1[e5] : t1, n4);
        },
        callback: function(t1, e5, n4) {
            if (t1 && "function" == typeof t1.call) return t1.apply(n4, e5);
        },
        each: function(t1, e5, n4, i3) {
            var a2, r2, o1;
            if (M.isArray(t1)) {
                if (r2 = t1.length, i3) for(a2 = r2 - 1; a2 >= 0; a2--)e5.call(n4, t1[a2], a2);
                else for(a2 = 0; a2 < r2; a2++)e5.call(n4, t1[a2], a2);
            } else if (M.isObject(t1)) for(r2 = (o1 = Object.keys(t1)).length, a2 = 0; a2 < r2; a2++)e5.call(n4, t1[o1[a2]], o1[a2]);
        },
        arrayEquals: function(t1, e5) {
            var n4, i3, a2, r2;
            if (!t1 || !e5 || t1.length !== e5.length) return false;
            for(n4 = 0, i3 = t1.length; n4 < i3; ++n4)if (a2 = t1[n4], r2 = e5[n4], a2 instanceof Array && r2 instanceof Array) {
                if (!M.arrayEquals(a2, r2)) return false;
            } else if (a2 !== r2) return false;
            return true;
        },
        clone: function(t1) {
            if (M.isArray(t1)) return t1.map(M.clone);
            if (M.isObject(t1)) {
                for(var e5 = Object.create(t1), n4 = Object.keys(t1), i3 = n4.length, a2 = 0; a2 < i3; ++a2)e5[n4[a2]] = M.clone(t1[n4[a2]]);
                return e5;
            }
            return t1;
        },
        _merger: function(t1, e6, n5, i4) {
            if (k(t1)) {
                var a3 = e6[t1], r2 = n5[t1];
                M.isObject(a3) && M.isObject(r2) ? M.merge(a3, r2, i4) : e6[t1] = M.clone(r2);
            }
        },
        _mergerIf: function(t1, e6, n5) {
            if (k(t1)) {
                var i4 = e6[t1], a4 = n5[t1];
                M.isObject(i4) && M.isObject(a4) ? M.mergeIf(i4, a4) : e6.hasOwnProperty(t1) || (e6[t1] = M.clone(a4));
            }
        },
        merge: function(t1, e6, n5) {
            var i5, a5, r3, o1, s1, l1 = M.isArray(e6) ? e6 : [
                e6
            ], u2 = l1.length;
            if (!M.isObject(t1)) return t1;
            for(i5 = (n5 = n5 || {
            }).merger || M._merger, a5 = 0; a5 < u2; ++a5)if (e6 = l1[a5], M.isObject(e6)) for(s1 = 0, o1 = (r3 = Object.keys(e6)).length; s1 < o1; ++s1)i5(r3[s1], t1, e6, n5);
            return t1;
        },
        mergeIf: function(t1, e6) {
            return M.merge(t1, e6, {
                merger: M._mergerIf
            });
        },
        extend: Object.assign || function(t1) {
            return M.merge(t1, [].slice.call(arguments, 1), {
                merger: function(t2, e6, n5) {
                    e6[t2] = n5[t2];
                }
            });
        },
        inherits: function(t1) {
            var e6 = this, n5 = t1 && t1.hasOwnProperty("constructor") ? t1.constructor : function() {
                return e6.apply(this, arguments);
            }, i5 = function() {
                this.constructor = n5;
            };
            return i5.prototype = e6.prototype, n5.prototype = new i5, n5.extend = M.inherits, t1 && M.extend(n5.prototype, t1), n5.__super__ = e6.prototype, n5;
        },
        _deprecated: function(t1, e6, n5, i5) {
            (void 0) !== e6 && console.warn(t1 + ': "' + n5 + '" is deprecated. Please use "' + i5 + '" instead');
        }
    }, S = M;
    M.callCallback = M.callback, M.indexOf = function(t1, e6, n5) {
        return Array.prototype.indexOf.call(t1, e6, n5);
    }, M.getValueOrDefault = M.valueOrDefault, M.getValueAtIndexOrDefault = M.valueAtIndexOrDefault;
    var C = {
        linear: function(t1) {
            return t1;
        },
        easeInQuad: function(t1) {
            return t1 * t1;
        },
        easeOutQuad: function(t1) {
            return -t1 * (t1 - 2);
        },
        easeInOutQuad: function(t1) {
            return (t1 /= 0.5) < 1 ? 0.5 * t1 * t1 : -0.5 * ((--t1) * (t1 - 2) - 1);
        },
        easeInCubic: function(t1) {
            return t1 * t1 * t1;
        },
        easeOutCubic: function(t1) {
            return (t1 -= 1) * t1 * t1 + 1;
        },
        easeInOutCubic: function(t1) {
            return (t1 /= 0.5) < 1 ? 0.5 * t1 * t1 * t1 : 0.5 * ((t1 -= 2) * t1 * t1 + 2);
        },
        easeInQuart: function(t1) {
            return t1 * t1 * t1 * t1;
        },
        easeOutQuart: function(t1) {
            return -((t1 -= 1) * t1 * t1 * t1 - 1);
        },
        easeInOutQuart: function(t1) {
            return (t1 /= 0.5) < 1 ? 0.5 * t1 * t1 * t1 * t1 : -0.5 * ((t1 -= 2) * t1 * t1 * t1 - 2);
        },
        easeInQuint: function(t1) {
            return t1 * t1 * t1 * t1 * t1;
        },
        easeOutQuint: function(t1) {
            return (t1 -= 1) * t1 * t1 * t1 * t1 + 1;
        },
        easeInOutQuint: function(t1) {
            return (t1 /= 0.5) < 1 ? 0.5 * t1 * t1 * t1 * t1 * t1 : 0.5 * ((t1 -= 2) * t1 * t1 * t1 * t1 + 2);
        },
        easeInSine: function(t1) {
            return 1 - Math.cos(t1 * (Math.PI / 2));
        },
        easeOutSine: function(t1) {
            return Math.sin(t1 * (Math.PI / 2));
        },
        easeInOutSine: function(t1) {
            return -0.5 * (Math.cos(Math.PI * t1) - 1);
        },
        easeInExpo: function(t1) {
            return 0 === t1 ? 0 : Math.pow(2, 10 * (t1 - 1));
        },
        easeOutExpo: function(t1) {
            return 1 === t1 ? 1 : 1 - Math.pow(2, -10 * t1);
        },
        easeInOutExpo: function(t1) {
            return 0 === t1 ? 0 : 1 === t1 ? 1 : (t1 /= 0.5) < 1 ? 0.5 * Math.pow(2, 10 * (t1 - 1)) : 0.5 * (2 - Math.pow(2, -10 * --t1));
        },
        easeInCirc: function(t1) {
            return t1 >= 1 ? t1 : -(Math.sqrt(1 - t1 * t1) - 1);
        },
        easeOutCirc: function(t1) {
            return Math.sqrt(1 - (t1 -= 1) * t1);
        },
        easeInOutCirc: function(t1) {
            return (t1 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t1 * t1) - 1) : 0.5 * (Math.sqrt(1 - (t1 -= 2) * t1) + 1);
        },
        easeInElastic: function(t1) {
            var e6 = 1.70158, n5 = 0, i5 = 1;
            return 0 === t1 ? 0 : 1 === t1 ? 1 : (n5 || (n5 = 0.3), i5 < 1 ? (i5 = 1, e6 = n5 / 4) : e6 = n5 / (2 * Math.PI) * Math.asin(1 / i5), -i5 * Math.pow(2, 10 * (t1 -= 1)) * Math.sin((t1 - e6) * (2 * Math.PI) / n5));
        },
        easeOutElastic: function(t1) {
            var e6 = 1.70158, n5 = 0, i5 = 1;
            return 0 === t1 ? 0 : 1 === t1 ? 1 : (n5 || (n5 = 0.3), i5 < 1 ? (i5 = 1, e6 = n5 / 4) : e6 = n5 / (2 * Math.PI) * Math.asin(1 / i5), i5 * Math.pow(2, -10 * t1) * Math.sin((t1 - e6) * (2 * Math.PI) / n5) + 1);
        },
        easeInOutElastic: function(t1) {
            var e6 = 1.70158, n5 = 0, i5 = 1;
            return 0 === t1 ? 0 : 2 == (t1 /= 0.5) ? 1 : (n5 || (n5 = 0.45), i5 < 1 ? (i5 = 1, e6 = n5 / 4) : e6 = n5 / (2 * Math.PI) * Math.asin(1 / i5), t1 < 1 ? i5 * Math.pow(2, 10 * (t1 -= 1)) * Math.sin((t1 - e6) * (2 * Math.PI) / n5) * -0.5 : i5 * Math.pow(2, -10 * (t1 -= 1)) * Math.sin((t1 - e6) * (2 * Math.PI) / n5) * 0.5 + 1);
        },
        easeInBack: function(t1) {
            var e6 = 1.70158;
            return t1 * t1 * ((e6 + 1) * t1 - e6);
        },
        easeOutBack: function(t1) {
            var e6 = 1.70158;
            return (t1 -= 1) * t1 * ((e6 + 1) * t1 + e6) + 1;
        },
        easeInOutBack: function(t1) {
            var e6 = 1.70158;
            return (t1 /= 0.5) < 1 ? t1 * t1 * ((1 + (e6 *= 1.525)) * t1 - e6) * 0.5 : 0.5 * ((t1 -= 2) * t1 * ((1 + (e6 *= 1.525)) * t1 + e6) + 2);
        },
        easeInBounce: function(t1) {
            return 1 - C.easeOutBounce(1 - t1);
        },
        easeOutBounce: function(t1) {
            return t1 < 1 / 2.75 ? 7.5625 * t1 * t1 : t1 < 2 / 2.75 ? 7.5625 * (t1 -= 1.5 / 2.75) * t1 + 0.75 : t1 < 2.5 / 2.75 ? 7.5625 * (t1 -= 2.25 / 2.75) * t1 + 0.9375 : 7.5625 * (t1 -= 2.625 / 2.75) * t1 + 0.984375;
        },
        easeInOutBounce: function(t1) {
            return t1 < 0.5 ? 0.5 * C.easeInBounce(2 * t1) : 0.5 * C.easeOutBounce(2 * t1 - 1) + 0.5;
        }
    }, P = {
        effects: C
    };
    S.easingEffects = C;
    var A = Math.PI, D = A / 180, T = 2 * A, I = A / 2, F = A / 4, O = 2 * A / 3, L = {
        clear: function(t1) {
            t1.ctx.clearRect(0, 0, t1.width, t1.height);
        },
        roundedRect: function(t1, e6, n5, i5, a5, r3) {
            if (r3) {
                var o1 = Math.min(r3, a5 / 2, i5 / 2), s1 = e6 + o1, l1 = n5 + o1, u2 = e6 + i5 - o1, d1 = n5 + a5 - o1;
                t1.moveTo(e6, l1), s1 < u2 && l1 < d1 ? (t1.arc(s1, l1, o1, -A, -I), t1.arc(u2, l1, o1, -I, 0), t1.arc(u2, d1, o1, 0, I), t1.arc(s1, d1, o1, I, A)) : s1 < u2 ? (t1.moveTo(s1, n5), t1.arc(u2, l1, o1, -I, I), t1.arc(s1, l1, o1, I, A + I)) : l1 < d1 ? (t1.arc(s1, l1, o1, -A, 0), t1.arc(s1, d1, o1, 0, A)) : t1.arc(s1, l1, o1, -A, A), t1.closePath(), t1.moveTo(e6, n5);
            } else t1.rect(e6, n5, i5, a5);
        },
        drawPoint: function(t1, e6, n5, i5, a5, r3) {
            var o2, s2, l2, u3, d2, h1 = (r3 || 0) * D;
            if (e6 && "object" == typeof e6 && ("[object HTMLImageElement]" === (o2 = e6.toString()) || "[object HTMLCanvasElement]" === o2)) return t1.save(), t1.translate(i5, a5), t1.rotate(h1), t1.drawImage(e6, -e6.width / 2, -e6.height / 2, e6.width, e6.height), void t1.restore();
            if (!(isNaN(n5) || n5 <= 0)) {
                switch(t1.beginPath(), e6){
                    default:
                        t1.arc(i5, a5, n5, 0, T), t1.closePath();
                        break;
                    case "triangle":
                        t1.moveTo(i5 + Math.sin(h1) * n5, a5 - Math.cos(h1) * n5), h1 += O, t1.lineTo(i5 + Math.sin(h1) * n5, a5 - Math.cos(h1) * n5), h1 += O, t1.lineTo(i5 + Math.sin(h1) * n5, a5 - Math.cos(h1) * n5), t1.closePath();
                        break;
                    case "rectRounded":
                        u3 = n5 - (d2 = 0.516 * n5), s2 = Math.cos(h1 + F) * u3, l2 = Math.sin(h1 + F) * u3, t1.arc(i5 - s2, a5 - l2, d2, h1 - A, h1 - I), t1.arc(i5 + l2, a5 - s2, d2, h1 - I, h1), t1.arc(i5 + s2, a5 + l2, d2, h1, h1 + I), t1.arc(i5 - l2, a5 + s2, d2, h1 + I, h1 + A), t1.closePath();
                        break;
                    case "rect":
                        if (!r3) {
                            u3 = Math.SQRT1_2 * n5, t1.rect(i5 - u3, a5 - u3, 2 * u3, 2 * u3);
                            break;
                        }
                        h1 += F;
                    case "rectRot":
                        s2 = Math.cos(h1) * n5, l2 = Math.sin(h1) * n5, t1.moveTo(i5 - s2, a5 - l2), t1.lineTo(i5 + l2, a5 - s2), t1.lineTo(i5 + s2, a5 + l2), t1.lineTo(i5 - l2, a5 + s2), t1.closePath();
                        break;
                    case "crossRot":
                        h1 += F;
                    case "cross":
                        s2 = Math.cos(h1) * n5, l2 = Math.sin(h1) * n5, t1.moveTo(i5 - s2, a5 - l2), t1.lineTo(i5 + s2, a5 + l2), t1.moveTo(i5 + l2, a5 - s2), t1.lineTo(i5 - l2, a5 + s2);
                        break;
                    case "star":
                        s2 = Math.cos(h1) * n5, l2 = Math.sin(h1) * n5, t1.moveTo(i5 - s2, a5 - l2), t1.lineTo(i5 + s2, a5 + l2), t1.moveTo(i5 + l2, a5 - s2), t1.lineTo(i5 - l2, a5 + s2), h1 += F, s2 = Math.cos(h1) * n5, l2 = Math.sin(h1) * n5, t1.moveTo(i5 - s2, a5 - l2), t1.lineTo(i5 + s2, a5 + l2), t1.moveTo(i5 + l2, a5 - s2), t1.lineTo(i5 - l2, a5 + s2);
                        break;
                    case "line":
                        s2 = Math.cos(h1) * n5, l2 = Math.sin(h1) * n5, t1.moveTo(i5 - s2, a5 - l2), t1.lineTo(i5 + s2, a5 + l2);
                        break;
                    case "dash":
                        t1.moveTo(i5, a5), t1.lineTo(i5 + Math.cos(h1) * n5, a5 + Math.sin(h1) * n5);
                }
                t1.fill(), t1.stroke();
            }
        },
        _isPointInArea: function(t1, e6) {
            return t1.x > e6.left - 0.000001 && t1.x < e6.right + 0.000001 && t1.y > e6.top - 0.000001 && t1.y < e6.bottom + 0.000001;
        },
        clipArea: function(t1, e6) {
            t1.save(), t1.beginPath(), t1.rect(e6.left, e6.top, e6.right - e6.left, e6.bottom - e6.top), t1.clip();
        },
        unclipArea: function(t1) {
            t1.restore();
        },
        lineTo: function(t1, e6, n5, i5) {
            var a5 = n5.steppedLine;
            if (a5) {
                if ("middle" === a5) {
                    var r3 = (e6.x + n5.x) / 2;
                    t1.lineTo(r3, i5 ? n5.y : e6.y), t1.lineTo(r3, i5 ? e6.y : n5.y);
                } else "after" === a5 && !i5 || "after" !== a5 && i5 ? t1.lineTo(e6.x, n5.y) : t1.lineTo(n5.x, e6.y);
                t1.lineTo(n5.x, n5.y);
            } else n5.tension ? t1.bezierCurveTo(i5 ? e6.controlPointPreviousX : e6.controlPointNextX, i5 ? e6.controlPointPreviousY : e6.controlPointNextY, i5 ? n5.controlPointNextX : n5.controlPointPreviousX, i5 ? n5.controlPointNextY : n5.controlPointPreviousY, n5.x, n5.y) : t1.lineTo(n5.x, n5.y);
        }
    }, R = L;
    S.clear = L.clear, S.drawRoundedRectangle = function(t1) {
        t1.beginPath(), L.roundedRect.apply(L, arguments);
    };
    var z = {
        _set: function(t1, e6) {
            return S.merge(this[t1] || (this[t1] = {
            }), e6);
        }
    };
    z._set("global", {
        defaultColor: "rgba(0,0,0,0.1)",
        defaultFontColor: "#666",
        defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        defaultFontSize: 12,
        defaultFontStyle: "normal",
        defaultLineHeight: 1.2,
        showLines: true
    });
    var N = z, B = S.valueOrDefault;
    var E = {
        toLineHeight: function(t1, e6) {
            var n5 = ("" + t1).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
            if (!n5 || "normal" === n5[1]) return 1.2 * e6;
            switch(t1 = +n5[2], n5[3]){
                case "px":
                    return t1;
                case "%":
                    t1 /= 100;
            }
            return e6 * t1;
        },
        toPadding: function(t1) {
            var e6, n5, i5, a5;
            return S.isObject(t1) ? (e6 = +t1.top || 0, n5 = +t1.right || 0, i5 = +t1.bottom || 0, a5 = +t1.left || 0) : e6 = n5 = i5 = a5 = +t1 || 0, {
                top: e6,
                right: n5,
                bottom: i5,
                left: a5,
                height: e6 + i5,
                width: a5 + n5
            };
        },
        _parseFont: function(t1) {
            var e6 = N.global, n5 = B(t1.fontSize, e6.defaultFontSize), i5 = {
                family: B(t1.fontFamily, e6.defaultFontFamily),
                lineHeight: S.options.toLineHeight(B(t1.lineHeight, e6.defaultLineHeight), n5),
                size: n5,
                style: B(t1.fontStyle, e6.defaultFontStyle),
                weight: null,
                string: ""
            };
            return i5.string = (function(t2) {
                return !t2 || S.isNullOrUndef(t2.size) || S.isNullOrUndef(t2.family) ? null : (t2.style ? t2.style + " " : "") + (t2.weight ? t2.weight + " " : "") + t2.size + "px " + t2.family;
            })(i5), i5;
        },
        resolve: function(t1, e6, n5, i5) {
            var a5, r4, o2, s2 = true;
            for(a5 = 0, r4 = t1.length; a5 < r4; ++a5)if ((void 0) !== (o2 = t1[a5]) && ((void 0) !== e6 && "function" == typeof o2 && (o2 = o2(e6), s2 = false), (void 0) !== n5 && S.isArray(o2) && (o2 = o2[n5], s2 = false), (void 0) !== o2)) return i5 && !s2 && (i5.cacheable = false), o2;
        }
    }, W = {
        _factorize: function(t1) {
            var e6, n5 = [], i5 = Math.sqrt(t1);
            for(e6 = 1; e6 < i5; e6++)t1 % e6 == 0 && (n5.push(e6), n5.push(t1 / e6));
            return i5 === (0 | i5) && n5.push(i5), n5.sort(function(t2, e7) {
                return t2 - e7;
            }).pop(), n5;
        },
        log10: Math.log10 || function(t1) {
            var e6 = Math.log(t1) * Math.LOG10E, n5 = Math.round(e6);
            return t1 === Math.pow(10, n5) ? n5 : e6;
        }
    }, V = W;
    S.log10 = W.log10;
    var H = S, j = P, q = R, U = E, Y = V, G = {
        getRtlAdapter: function(t1, e6, n5) {
            return t1 ? (function(t2, e7) {
                return {
                    x: function(n6) {
                        return t2 + t2 + e7 - n6;
                    },
                    setWidth: function(t3) {
                        e7 = t3;
                    },
                    textAlign: function(t3) {
                        return "center" === t3 ? t3 : "right" === t3 ? "left" : "right";
                    },
                    xPlus: function(t3, e8) {
                        return t3 - e8;
                    },
                    leftForLtr: function(t3, e8) {
                        return t3 - e8;
                    }
                };
            })(e6, n5) : {
                x: function(t2) {
                    return t2;
                },
                setWidth: function(t2) {
                },
                textAlign: function(t2) {
                    return t2;
                },
                xPlus: function(t2, e7) {
                    return t2 + e7;
                },
                leftForLtr: function(t2, e7) {
                    return t2;
                }
            };
        },
        overrideTextDirection: function(t1, e6) {
            var n5, i5;
            "ltr" !== e6 && "rtl" !== e6 || (i5 = [
                (n5 = t1.canvas.style).getPropertyValue("direction"),
                n5.getPropertyPriority("direction")
            ], n5.setProperty("direction", e6, "important"), t1.prevTextDirection = i5);
        },
        restoreTextDirection: function(t1) {
            var e6 = t1.prevTextDirection;
            (void 0) !== e6 && (delete t1.prevTextDirection, t1.canvas.style.setProperty("direction", e6[0], e6[1]));
        }
    };
    H.easing = j, H.canvas = q, H.options = U, H.math = Y, H.rtl = G;
    var X = function(t1) {
        H.extend(this, t1), this.initialize.apply(this, arguments);
    };
    H.extend(X.prototype, {
        _type: void 0,
        initialize: function() {
            this.hidden = false;
        },
        pivot: function() {
            var t1 = this;
            return t1._view || (t1._view = H.extend({
            }, t1._model)), t1._start = {
            }, t1;
        },
        transition: function(t1) {
            var e6 = this, n5 = e6._model, i5 = e6._start, a5 = e6._view;
            return n5 && 1 !== t1 ? (a5 || (a5 = e6._view = {
            }), i5 || (i5 = e6._start = {
            }), (function(t2, e7, n6, i6) {
                var a6, r4, o2, s2, l2, u3, d2, h1, c1, f1 = Object.keys(n6);
                for(a6 = 0, r4 = f1.length; a6 < r4; ++a6)if (u3 = n6[o2 = f1[a6]], e7.hasOwnProperty(o2) || (e7[o2] = u3), (s2 = e7[o2]) !== u3 && "_" !== o2[0]) {
                    if (t2.hasOwnProperty(o2) || (t2[o2] = s2), (d2 = typeof u3) === typeof (l2 = t2[o2])) {
                        if ("string" === d2) {
                            if ((h1 = _(l2)).valid && (c1 = _(u3)).valid) {
                                e7[o2] = c1.mix(h1, i6).rgbString();
                                continue;
                            }
                        } else if (H.isFinite(l2) && H.isFinite(u3)) {
                            e7[o2] = l2 + (u3 - l2) * i6;
                            continue;
                        }
                    }
                    e7[o2] = u3;
                }
            })(i5, a5, n5, t1), e6) : (e6._view = H.extend({
            }, n5), e6._start = null, e6);
        },
        tooltipPosition: function() {
            return {
                x: this._model.x,
                y: this._model.y
            };
        },
        hasValue: function() {
            return H.isNumber(this._model.x) && H.isNumber(this._model.y);
        }
    }), X.extend = H.inherits;
    var K = X, Z = K.extend({
        chart: null,
        currentStep: 0,
        numSteps: 60,
        easing: "",
        render: null,
        onAnimationProgress: null,
        onAnimationComplete: null
    }), $ = Z;
    Object.defineProperty(Z.prototype, "animationObject", {
        get: function() {
            return this;
        }
    }), Object.defineProperty(Z.prototype, "chartInstance", {
        get: function() {
            return this.chart;
        },
        set: function(t1) {
            this.chart = t1;
        }
    }), N._set("global", {
        animation: {
            duration: 1000,
            easing: "easeOutQuart",
            onProgress: H.noop,
            onComplete: H.noop
        }
    });
    var J = {
        animations: [],
        request: null,
        addAnimation: function(t1, e6, n5, i5) {
            var a5, r4, o2 = this.animations;
            for(e6.chart = t1, e6.startTime = Date.now(), e6.duration = n5, i5 || (t1.animating = true), a5 = 0, r4 = o2.length; a5 < r4; ++a5)if (o2[a5].chart === t1) return void (o2[a5] = e6);
            o2.push(e6), 1 === o2.length && this.requestAnimationFrame();
        },
        cancelAnimation: function(t1) {
            var e6 = H.findIndex(this.animations, function(e7) {
                return e7.chart === t1;
            });
            -1 !== e6 && (this.animations.splice(e6, 1), t1.animating = false);
        },
        requestAnimationFrame: function() {
            var t1 = this;
            null === t1.request && (t1.request = H.requestAnimFrame.call(window, function() {
                t1.request = null, t1.startDigest();
            }));
        },
        startDigest: function() {
            this.advance(), this.animations.length > 0 && this.requestAnimationFrame();
        },
        advance: function() {
            for(var t1, e6, n5, i5, a5 = this.animations, r4 = 0; r4 < a5.length;)e6 = (t1 = a5[r4]).chart, n5 = t1.numSteps, i5 = Math.floor((Date.now() - t1.startTime) / t1.duration * n5) + 1, t1.currentStep = Math.min(i5, n5), H.callback(t1.render, [
                e6,
                t1
            ], e6), H.callback(t1.onAnimationProgress, [
                t1
            ], e6), t1.currentStep >= n5 ? (H.callback(t1.onAnimationComplete, [
                t1
            ], e6), e6.animating = false, a5.splice(r4, 1)) : ++r4;
        }
    }, Q = H.options.resolve, tt = [
        "push",
        "pop",
        "shift",
        "splice",
        "unshift"
    ];
    function et(t1, e6) {
        var n5 = t1._chartjs;
        if (n5) {
            var i5 = n5.listeners, a5 = i5.indexOf(e6);
            -1 !== a5 && i5.splice(a5, 1), i5.length > 0 || (tt.forEach(function(e7) {
                delete t1[e7];
            }), delete t1._chartjs);
        }
    }
    var nt = function(t1, e6) {
        this.initialize(t1, e6);
    };
    H.extend(nt.prototype, {
        datasetElementType: null,
        dataElementType: null,
        _datasetElementOptions: [
            "backgroundColor",
            "borderCapStyle",
            "borderColor",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "borderWidth"
        ],
        _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "pointStyle"
        ],
        initialize: function(t1, e6) {
            var n5 = this;
            n5.chart = t1, n5.index = e6, n5.linkScales(), n5.addElements(), n5._type = n5.getMeta().type;
        },
        updateIndex: function(t1) {
            this.index = t1;
        },
        linkScales: function() {
            var t1 = this.getMeta(), e6 = this.chart, n5 = e6.scales, i6 = this.getDataset(), a6 = e6.options.scales;
            null !== t1.xAxisID && t1.xAxisID in n5 && !i6.xAxisID || (t1.xAxisID = i6.xAxisID || a6.xAxes[0].id), null !== t1.yAxisID && t1.yAxisID in n5 && !i6.yAxisID || (t1.yAxisID = i6.yAxisID || a6.yAxes[0].id);
        },
        getDataset: function() {
            return this.chart.data.datasets[this.index];
        },
        getMeta: function() {
            return this.chart.getDatasetMeta(this.index);
        },
        getScaleForId: function(t1) {
            return this.chart.scales[t1];
        },
        _getValueScaleId: function() {
            return this.getMeta().yAxisID;
        },
        _getIndexScaleId: function() {
            return this.getMeta().xAxisID;
        },
        _getValueScale: function() {
            return this.getScaleForId(this._getValueScaleId());
        },
        _getIndexScale: function() {
            return this.getScaleForId(this._getIndexScaleId());
        },
        reset: function() {
            this._update(true);
        },
        destroy: function() {
            this._data && et(this._data, this);
        },
        createMetaDataset: function() {
            var t1 = this.datasetElementType;
            return t1 && new t1({
                _chart: this.chart,
                _datasetIndex: this.index
            });
        },
        createMetaData: function(t1) {
            var e6 = this.dataElementType;
            return e6 && new e6({
                _chart: this.chart,
                _datasetIndex: this.index,
                _index: t1
            });
        },
        addElements: function() {
            var t1, e6, n5 = this.getMeta(), i6 = this.getDataset().data || [], a6 = n5.data;
            for(t1 = 0, e6 = i6.length; t1 < e6; ++t1)a6[t1] = a6[t1] || this.createMetaData(t1);
            n5.dataset = n5.dataset || this.createMetaDataset();
        },
        addElementAndReset: function(t1) {
            var e6 = this.createMetaData(t1);
            this.getMeta().data.splice(t1, 0, e6), this.updateElement(e6, t1, true);
        },
        buildOrUpdateElements: function() {
            var t1, e6, n5 = this, i6 = n5.getDataset(), a6 = i6.data || (i6.data = []);
            n5._data !== a6 && (n5._data && et(n5._data, n5), a6 && Object.isExtensible(a6) && (e6 = n5, (t1 = a6)._chartjs ? t1._chartjs.listeners.push(e6) : (Object.defineProperty(t1, "_chartjs", {
                configurable: true,
                enumerable: false,
                value: {
                    listeners: [
                        e6
                    ]
                }
            }), tt.forEach(function(e7) {
                var n6 = "onData" + e7.charAt(0).toUpperCase() + e7.slice(1), i7 = t1[e7];
                Object.defineProperty(t1, e7, {
                    configurable: true,
                    enumerable: false,
                    value: function() {
                        var e8 = Array.prototype.slice.call(arguments), a7 = i7.apply(this, e8);
                        return H.each(t1._chartjs.listeners, function(t2) {
                            "function" == typeof t2[n6] && t2[n6].apply(t2, e8);
                        }), a7;
                    }
                });
            }))), n5._data = a6), n5.resyncElements();
        },
        _configure: function() {
            this._config = H.merge(Object.create(null), [
                this.chart.options.datasets[this._type],
                this.getDataset()
            ], {
                merger: function(t1, e6, n5) {
                    "_meta" !== t1 && "data" !== t1 && H._merger(t1, e6, n5);
                }
            });
        },
        _update: function(t1) {
            this._configure(), this._cachedDataOpts = null, this.update(t1);
        },
        update: H.noop,
        transition: function(t1) {
            for(var e6 = this.getMeta(), n5 = e6.data || [], i6 = n5.length, a6 = 0; a6 < i6; ++a6)n5[a6].transition(t1);
            e6.dataset && e6.dataset.transition(t1);
        },
        draw: function() {
            var t1 = this.getMeta(), e6 = t1.data || [], n5 = e6.length, i6 = 0;
            for(t1.dataset && t1.dataset.draw(); i6 < n5; ++i6)e6[i6].draw();
        },
        getStyle: function(t1) {
            var e6, n5 = this.getMeta(), i6 = n5.dataset;
            return this._configure(), i6 && (void 0) === t1 ? e6 = this._resolveDatasetElementOptions(i6 || {
            }) : (t1 = t1 || 0, e6 = this._resolveDataElementOptions(n5.data[t1] || {
            }, t1)), false !== e6.fill && null !== e6.fill || (e6.backgroundColor = e6.borderColor), e6;
        },
        _resolveDatasetElementOptions: function(t1, e6) {
            var n5, i6, a6, r4, o2 = this, s2 = o2.chart, l2 = o2._config, u3 = t1.custom || {
            }, d2 = s2.options.elements[o2.datasetElementType.prototype._type] || {
            }, h1 = o2._datasetElementOptions, c1 = {
            }, f1 = {
                chart: s2,
                dataset: o2.getDataset(),
                datasetIndex: o2.index,
                hover: e6
            };
            for(n5 = 0, i6 = h1.length; n5 < i6; ++n5)a6 = h1[n5], r4 = e6 ? "hover" + a6.charAt(0).toUpperCase() + a6.slice(1) : a6, c1[a6] = Q([
                u3[r4],
                l2[r4],
                d2[r4]
            ], f1);
            return c1;
        },
        _resolveDataElementOptions: function(t1, e6) {
            var n5 = this, i6 = t1 && t1.custom, a6 = n5._cachedDataOpts;
            if (a6 && !i6) return a6;
            var r4, o2, s2, l2, u3 = n5.chart, d2 = n5._config, h1 = u3.options.elements[n5.dataElementType.prototype._type] || {
            }, c1 = n5._dataElementOptions, f1 = {
            }, g1 = {
                chart: u3,
                dataIndex: e6,
                dataset: n5.getDataset(),
                datasetIndex: n5.index
            }, p1 = {
                cacheable: !i6
            };
            if (i6 = i6 || {
            }, H.isArray(c1)) for(o2 = 0, s2 = c1.length; o2 < s2; ++o2)f1[l2 = c1[o2]] = Q([
                i6[l2],
                d2[l2],
                h1[l2]
            ], g1, e6, p1);
            else for(o2 = 0, s2 = (r4 = Object.keys(c1)).length; o2 < s2; ++o2)f1[l2 = r4[o2]] = Q([
                i6[l2],
                d2[c1[l2]],
                d2[l2],
                h1[l2]
            ], g1, e6, p1);
            return p1.cacheable && (n5._cachedDataOpts = Object.freeze(f1)), f1;
        },
        removeHoverStyle: function(t1) {
            H.merge(t1._model, t1.$previousStyle || {
            }), delete t1.$previousStyle;
        },
        setHoverStyle: function(t1) {
            var e6 = this.chart.data.datasets[t1._datasetIndex], n5 = t1._index, i6 = t1.custom || {
            }, a6 = t1._model, r4 = H.getHoverColor;
            t1.$previousStyle = {
                backgroundColor: a6.backgroundColor,
                borderColor: a6.borderColor,
                borderWidth: a6.borderWidth
            }, a6.backgroundColor = Q([
                i6.hoverBackgroundColor,
                e6.hoverBackgroundColor,
                r4(a6.backgroundColor)
            ], void 0, n5), a6.borderColor = Q([
                i6.hoverBorderColor,
                e6.hoverBorderColor,
                r4(a6.borderColor)
            ], void 0, n5), a6.borderWidth = Q([
                i6.hoverBorderWidth,
                e6.hoverBorderWidth,
                a6.borderWidth
            ], void 0, n5);
        },
        _removeDatasetHoverStyle: function() {
            var t1 = this.getMeta().dataset;
            t1 && this.removeHoverStyle(t1);
        },
        _setDatasetHoverStyle: function() {
            var t1, e6, n5, i6, a6, r4, o2 = this.getMeta().dataset, s2 = {
            };
            if (o2) {
                for(r4 = o2._model, a6 = this._resolveDatasetElementOptions(o2, true), t1 = 0, e6 = (i6 = Object.keys(a6)).length; t1 < e6; ++t1)s2[n5 = i6[t1]] = r4[n5], r4[n5] = a6[n5];
                o2.$previousStyle = s2;
            }
        },
        resyncElements: function() {
            var t1 = this.getMeta(), e6 = this.getDataset().data, n5 = t1.data.length, i6 = e6.length;
            i6 < n5 ? t1.data.splice(i6, n5 - i6) : i6 > n5 && this.insertElements(n5, i6 - n5);
        },
        insertElements: function(t1, e6) {
            for(var n5 = 0; n5 < e6; ++n5)this.addElementAndReset(t1 + n5);
        },
        onDataPush: function() {
            var t1 = arguments.length;
            this.insertElements(this.getDataset().data.length - t1, t1);
        },
        onDataPop: function() {
            this.getMeta().data.pop();
        },
        onDataShift: function() {
            this.getMeta().data.shift();
        },
        onDataSplice: function(t1, e6) {
            this.getMeta().data.splice(t1, e6), this.insertElements(t1, arguments.length - 2);
        },
        onDataUnshift: function() {
            this.insertElements(0, arguments.length);
        }
    }), nt.extend = H.inherits;
    var it = nt, at = 2 * Math.PI;
    function rt(t1, e6) {
        var n5 = e6.startAngle, i6 = e6.endAngle, a6 = e6.pixelMargin, r4 = a6 / e6.outerRadius, o2 = e6.x, s2 = e6.y;
        t1.beginPath(), t1.arc(o2, s2, e6.outerRadius, n5 - r4, i6 + r4), e6.innerRadius > a6 ? (r4 = a6 / e6.innerRadius, t1.arc(o2, s2, e6.innerRadius - a6, i6 + r4, n5 - r4, true)) : t1.arc(o2, s2, a6, i6 + Math.PI / 2, n5 - Math.PI / 2), t1.closePath(), t1.clip();
    }
    function ot(t1, e6, n5) {
        var i6 = "inner" === e6.borderAlign;
        i6 ? (t1.lineWidth = 2 * e6.borderWidth, t1.lineJoin = "round") : (t1.lineWidth = e6.borderWidth, t1.lineJoin = "bevel"), n5.fullCircles && (function(t2, e7, n6, i7) {
            var a6, r4 = n6.endAngle;
            for(i7 && (n6.endAngle = n6.startAngle + at, rt(t2, n6), n6.endAngle = r4, n6.endAngle === n6.startAngle && n6.fullCircles && (n6.endAngle += at, n6.fullCircles--)), t2.beginPath(), t2.arc(n6.x, n6.y, n6.innerRadius, n6.startAngle + at, n6.startAngle, true), a6 = 0; a6 < n6.fullCircles; ++a6)t2.stroke();
            for(t2.beginPath(), t2.arc(n6.x, n6.y, e7.outerRadius, n6.startAngle, n6.startAngle + at), a6 = 0; a6 < n6.fullCircles; ++a6)t2.stroke();
        })(t1, e6, n5, i6), i6 && rt(t1, n5), t1.beginPath(), t1.arc(n5.x, n5.y, e6.outerRadius, n5.startAngle, n5.endAngle), t1.arc(n5.x, n5.y, n5.innerRadius, n5.endAngle, n5.startAngle, true), t1.closePath(), t1.stroke();
    }
    N._set("global", {
        elements: {
            arc: {
                backgroundColor: N.global.defaultColor,
                borderColor: "#fff",
                borderWidth: 2,
                borderAlign: "center"
            }
        }
    });
    var st = K.extend({
        _type: "arc",
        inLabelRange: function(t1) {
            var e6 = this._view;
            return !!e6 && Math.pow(t1 - e6.x, 2) < Math.pow(e6.radius + e6.hoverRadius, 2);
        },
        inRange: function(t1, e6) {
            var n5 = this._view;
            if (n5) {
                for(var i6 = H.getAngleFromPoint(n5, {
                    x: t1,
                    y: e6
                }), a6 = i6.angle, r4 = i6.distance, o2 = n5.startAngle, s2 = n5.endAngle; s2 < o2;)s2 += at;
                for(; a6 > s2;)a6 -= at;
                for(; a6 < o2;)a6 += at;
                var l2 = a6 >= o2 && a6 <= s2, u3 = r4 >= n5.innerRadius && r4 <= n5.outerRadius;
                return l2 && u3;
            }
            return false;
        },
        getCenterPoint: function() {
            var t1 = this._view, e6 = (t1.startAngle + t1.endAngle) / 2, n5 = (t1.innerRadius + t1.outerRadius) / 2;
            return {
                x: t1.x + Math.cos(e6) * n5,
                y: t1.y + Math.sin(e6) * n5
            };
        },
        getArea: function() {
            var t1 = this._view;
            return Math.PI * ((t1.endAngle - t1.startAngle) / (2 * Math.PI)) * (Math.pow(t1.outerRadius, 2) - Math.pow(t1.innerRadius, 2));
        },
        tooltipPosition: function() {
            var t1 = this._view, e6 = t1.startAngle + (t1.endAngle - t1.startAngle) / 2, n5 = (t1.outerRadius - t1.innerRadius) / 2 + t1.innerRadius;
            return {
                x: t1.x + Math.cos(e6) * n5,
                y: t1.y + Math.sin(e6) * n5
            };
        },
        draw: function() {
            var t1, e6 = this._chart.ctx, n5 = this._view, i7 = "inner" === n5.borderAlign ? 0.33 : 0, a7 = {
                x: n5.x,
                y: n5.y,
                innerRadius: n5.innerRadius,
                outerRadius: Math.max(n5.outerRadius - i7, 0),
                pixelMargin: i7,
                startAngle: n5.startAngle,
                endAngle: n5.endAngle,
                fullCircles: Math.floor(n5.circumference / at)
            };
            if (e6.save(), e6.fillStyle = n5.backgroundColor, e6.strokeStyle = n5.borderColor, a7.fullCircles) {
                for(a7.endAngle = a7.startAngle + at, e6.beginPath(), e6.arc(a7.x, a7.y, a7.outerRadius, a7.startAngle, a7.endAngle), e6.arc(a7.x, a7.y, a7.innerRadius, a7.endAngle, a7.startAngle, true), e6.closePath(), t1 = 0; t1 < a7.fullCircles; ++t1)e6.fill();
                a7.endAngle = a7.startAngle + n5.circumference % at;
            }
            e6.beginPath(), e6.arc(a7.x, a7.y, a7.outerRadius, a7.startAngle, a7.endAngle), e6.arc(a7.x, a7.y, a7.innerRadius, a7.endAngle, a7.startAngle, true), e6.closePath(), e6.fill(), n5.borderWidth && ot(e6, n5, a7), e6.restore();
        }
    }), lt = H.valueOrDefault, ut = N.global.defaultColor;
    N._set("global", {
        elements: {
            line: {
                tension: 0.4,
                backgroundColor: ut,
                borderWidth: 3,
                borderColor: ut,
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0,
                borderJoinStyle: "miter",
                capBezierPoints: true,
                fill: true
            }
        }
    });
    var dt = K.extend({
        _type: "line",
        draw: function() {
            var t1, e6, n5, i7 = this, a7 = i7._view, r5 = i7._chart.ctx, o3 = a7.spanGaps, s3 = i7._children.slice(), l3 = N.global, u4 = l3.elements.line, d2 = -1, h1 = i7._loop;
            if (s3.length) {
                if (i7._loop) {
                    for(t1 = 0; t1 < s3.length; ++t1)if (e6 = H.previousItem(s3, t1), !s3[t1]._view.skip && e6._view.skip) {
                        s3 = s3.slice(t1).concat(s3.slice(0, t1)), h1 = o3;
                        break;
                    }
                    h1 && s3.push(s3[0]);
                }
                for(r5.save(), r5.lineCap = a7.borderCapStyle || u4.borderCapStyle, r5.setLineDash && r5.setLineDash(a7.borderDash || u4.borderDash), r5.lineDashOffset = lt(a7.borderDashOffset, u4.borderDashOffset), r5.lineJoin = a7.borderJoinStyle || u4.borderJoinStyle, r5.lineWidth = lt(a7.borderWidth, u4.borderWidth), r5.strokeStyle = a7.borderColor || l3.defaultColor, r5.beginPath(), (n5 = s3[0]._view).skip || (r5.moveTo(n5.x, n5.y), d2 = 0), t1 = 1; t1 < s3.length; ++t1)n5 = s3[t1]._view, e6 = -1 === d2 ? H.previousItem(s3, t1) : s3[d2], n5.skip || (d2 !== t1 - 1 && !o3 || -1 === d2 ? r5.moveTo(n5.x, n5.y) : H.canvas.lineTo(r5, e6._view, n5), d2 = t1);
                h1 && r5.closePath(), r5.stroke(), r5.restore();
            }
        }
    }), ht = H.valueOrDefault, ct = N.global.defaultColor;
    function ft(t1) {
        var e6 = this._view;
        return !!e6 && Math.abs(t1 - e6.x) < e6.radius + e6.hitRadius;
    }
    N._set("global", {
        elements: {
            point: {
                radius: 3,
                pointStyle: "circle",
                backgroundColor: ct,
                borderColor: ct,
                borderWidth: 1,
                hitRadius: 1,
                hoverRadius: 4,
                hoverBorderWidth: 1
            }
        }
    });
    var gt = K.extend({
        _type: "point",
        inRange: function(t1, e6) {
            var n5 = this._view;
            return !!n5 && Math.pow(t1 - n5.x, 2) + Math.pow(e6 - n5.y, 2) < Math.pow(n5.hitRadius + n5.radius, 2);
        },
        inLabelRange: ft,
        inXRange: ft,
        inYRange: function(t1) {
            var e6 = this._view;
            return !!e6 && Math.abs(t1 - e6.y) < e6.radius + e6.hitRadius;
        },
        getCenterPoint: function() {
            var t1 = this._view;
            return {
                x: t1.x,
                y: t1.y
            };
        },
        getArea: function() {
            return Math.PI * Math.pow(this._view.radius, 2);
        },
        tooltipPosition: function() {
            var t1 = this._view;
            return {
                x: t1.x,
                y: t1.y,
                padding: t1.radius + t1.borderWidth
            };
        },
        draw: function(t1) {
            var e6 = this._view, n5 = this._chart.ctx, i7 = e6.pointStyle, a7 = e6.rotation, r5 = e6.radius, o3 = e6.x, s3 = e6.y, l3 = N.global, u4 = l3.defaultColor;
            e6.skip || ((void 0) === t1 || H.canvas._isPointInArea(e6, t1)) && (n5.strokeStyle = e6.borderColor || u4, n5.lineWidth = ht(e6.borderWidth, l3.elements.point.borderWidth), n5.fillStyle = e6.backgroundColor || u4, H.canvas.drawPoint(n5, i7, r5, o3, s3, a7));
        }
    }), pt = N.global.defaultColor;
    function mt(t1) {
        return t1 && (void 0) !== t1.width;
    }
    function vt(t1) {
        var e6, n5, i7, a7, r5;
        return mt(t1) ? (r5 = t1.width / 2, e6 = t1.x - r5, n5 = t1.x + r5, i7 = Math.min(t1.y, t1.base), a7 = Math.max(t1.y, t1.base)) : (r5 = t1.height / 2, e6 = Math.min(t1.x, t1.base), n5 = Math.max(t1.x, t1.base), i7 = t1.y - r5, a7 = t1.y + r5), {
            left: e6,
            top: i7,
            right: n5,
            bottom: a7
        };
    }
    function bt(t1, e6, n5) {
        return t1 === e6 ? n5 : t1 === n5 ? e6 : t1;
    }
    function xt(t1, e6, n5) {
        var i7, a7, r5, o3, s3 = t1.borderWidth, l3 = function(t2) {
            var e7 = t2.borderSkipped, n6 = {
            };
            return e7 ? (t2.horizontal ? t2.base > t2.x && (e7 = bt(e7, "left", "right")) : t2.base < t2.y && (e7 = bt(e7, "bottom", "top")), n6[e7] = true, n6) : n6;
        }(t1);
        return H.isObject(s3) ? (i7 = +s3.top || 0, a7 = +s3.right || 0, r5 = +s3.bottom || 0, o3 = +s3.left || 0) : i7 = a7 = r5 = o3 = +s3 || 0, {
            t: l3.top || i7 < 0 ? 0 : i7 > n5 ? n5 : i7,
            r: l3.right || a7 < 0 ? 0 : a7 > e6 ? e6 : a7,
            b: l3.bottom || r5 < 0 ? 0 : r5 > n5 ? n5 : r5,
            l: l3.left || o3 < 0 ? 0 : o3 > e6 ? e6 : o3
        };
    }
    function yt(t1, e6, n5) {
        var i7 = null === e6, a7 = null === n5, r5 = !(!t1 || i7 && a7) && vt(t1);
        return r5 && (i7 || e6 >= r5.left && e6 <= r5.right) && (a7 || n5 >= r5.top && n5 <= r5.bottom);
    }
    N._set("global", {
        elements: {
            rectangle: {
                backgroundColor: pt,
                borderColor: pt,
                borderSkipped: "bottom",
                borderWidth: 0
            }
        }
    });
    var _t = K.extend({
        _type: "rectangle",
        draw: function() {
            var t1 = this._chart.ctx, e6 = this._view, n5 = function(t2) {
                var e7 = vt(t2), n6 = e7.right - e7.left, i7 = e7.bottom - e7.top, a7 = xt(t2, n6 / 2, i7 / 2);
                return {
                    outer: {
                        x: e7.left,
                        y: e7.top,
                        w: n6,
                        h: i7
                    },
                    inner: {
                        x: e7.left + a7.l,
                        y: e7.top + a7.t,
                        w: n6 - a7.l - a7.r,
                        h: i7 - a7.t - a7.b
                    }
                };
            }(e6), i7 = n5.outer, a7 = n5.inner;
            t1.fillStyle = e6.backgroundColor, t1.fillRect(i7.x, i7.y, i7.w, i7.h), i7.w === a7.w && i7.h === a7.h || (t1.save(), t1.beginPath(), t1.rect(i7.x, i7.y, i7.w, i7.h), t1.clip(), t1.fillStyle = e6.borderColor, t1.rect(a7.x, a7.y, a7.w, a7.h), t1.fill("evenodd"), t1.restore());
        },
        height: function() {
            var t1 = this._view;
            return t1.base - t1.y;
        },
        inRange: function(t1, e6) {
            return yt(this._view, t1, e6);
        },
        inLabelRange: function(t1, e6) {
            var n5 = this._view;
            return mt(n5) ? yt(n5, t1, null) : yt(n5, null, e6);
        },
        inXRange: function(t1) {
            return yt(this._view, t1, null);
        },
        inYRange: function(t1) {
            return yt(this._view, null, t1);
        },
        getCenterPoint: function() {
            var t1, e6, n5 = this._view;
            return mt(n5) ? (t1 = n5.x, e6 = (n5.y + n5.base) / 2) : (t1 = (n5.x + n5.base) / 2, e6 = n5.y), {
                x: t1,
                y: e6
            };
        },
        getArea: function() {
            var t1 = this._view;
            return mt(t1) ? t1.width * Math.abs(t1.y - t1.base) : t1.height * Math.abs(t1.x - t1.base);
        },
        tooltipPosition: function() {
            var t1 = this._view;
            return {
                x: t1.x,
                y: t1.y
            };
        }
    }), kt = {
    }, wt = st, Mt = dt, St = gt, Ct = _t;
    kt.Arc = wt, kt.Line = Mt, kt.Point = St, kt.Rectangle = Ct;
    var Pt = H._deprecated, At = H.valueOrDefault;
    function Dt(t1, e6, n5) {
        var i7, a7, r5 = n5.barThickness, o3 = e6.stackCount, s3 = e6.pixels[t1], l3 = H.isNullOrUndef(r5) ? function(t2, e7) {
            var n6, i8, a8, r6, o4 = t2._length;
            for(a8 = 1, r6 = e7.length; a8 < r6; ++a8)o4 = Math.min(o4, Math.abs(e7[a8] - e7[a8 - 1]));
            for(a8 = 0, r6 = t2.getTicks().length; a8 < r6; ++a8)i8 = t2.getPixelForTick(a8), o4 = a8 > 0 ? Math.min(o4, Math.abs(i8 - n6)) : o4, n6 = i8;
            return o4;
        }(e6.scale, e6.pixels) : -1;
        return H.isNullOrUndef(r5) ? (i7 = l3 * n5.categoryPercentage, a7 = n5.barPercentage) : (i7 = r5 * o3, a7 = 1), {
            chunk: i7 / o3,
            ratio: a7,
            start: s3 - i7 / 2
        };
    }
    N._set("bar", {
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [
                {
                    type: "category",
                    offset: true,
                    gridLines: {
                        offsetGridLines: true
                    }
                }
            ],
            yAxes: [
                {
                    type: "linear"
                }
            ]
        }
    }), N._set("global", {
        datasets: {
            bar: {
                categoryPercentage: 0.8,
                barPercentage: 0.9
            }
        }
    });
    var Tt = it.extend({
        dataElementType: kt.Rectangle,
        _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderSkipped",
            "borderWidth",
            "barPercentage",
            "barThickness",
            "categoryPercentage",
            "maxBarThickness",
            "minBarLength"
        ],
        initialize: function() {
            var t1, e6, n5 = this;
            it.prototype.initialize.apply(n5, arguments), (t1 = n5.getMeta()).stack = n5.getDataset().stack, t1.bar = true, e6 = n5._getIndexScale().options, Pt("bar chart", e6.barPercentage, "scales.[x/y]Axes.barPercentage", "dataset.barPercentage"), Pt("bar chart", e6.barThickness, "scales.[x/y]Axes.barThickness", "dataset.barThickness"), Pt("bar chart", e6.categoryPercentage, "scales.[x/y]Axes.categoryPercentage", "dataset.categoryPercentage"), Pt("bar chart", n5._getValueScale().options.minBarLength, "scales.[x/y]Axes.minBarLength", "dataset.minBarLength"), Pt("bar chart", e6.maxBarThickness, "scales.[x/y]Axes.maxBarThickness", "dataset.maxBarThickness");
        },
        update: function(t1) {
            var e6, n5, i7 = this.getMeta().data;
            for(this._ruler = this.getRuler(), e6 = 0, n5 = i7.length; e6 < n5; ++e6)this.updateElement(i7[e6], e6, t1);
        },
        updateElement: function(t1, e6, n5) {
            var i7 = this, a7 = i7.getMeta(), r5 = i7.getDataset(), o3 = i7._resolveDataElementOptions(t1, e6);
            t1._xScale = i7.getScaleForId(a7.xAxisID), t1._yScale = i7.getScaleForId(a7.yAxisID), t1._datasetIndex = i7.index, t1._index = e6, t1._model = {
                backgroundColor: o3.backgroundColor,
                borderColor: o3.borderColor,
                borderSkipped: o3.borderSkipped,
                borderWidth: o3.borderWidth,
                datasetLabel: r5.label,
                label: i7.chart.data.labels[e6]
            }, H.isArray(r5.data[e6]) && (t1._model.borderSkipped = null), i7._updateElementGeometry(t1, e6, n5, o3), t1.pivot();
        },
        _updateElementGeometry: function(t1, e6, n5, i7) {
            var a7 = this, r5 = t1._model, o3 = a7._getValueScale(), s3 = o3.getBasePixel(), l3 = o3.isHorizontal(), u4 = a7._ruler || a7.getRuler(), d2 = a7.calculateBarValuePixels(a7.index, e6, i7), h1 = a7.calculateBarIndexPixels(a7.index, e6, u4, i7);
            r5.horizontal = l3, r5.base = n5 ? s3 : d2.base, r5.x = l3 ? n5 ? s3 : d2.head : h1.center, r5.y = l3 ? h1.center : n5 ? s3 : d2.head, r5.height = l3 ? h1.size : void 0, r5.width = l3 ? void 0 : h1.size;
        },
        _getStacks: function(t1) {
            var e6, n5, i7 = this._getIndexScale(), a7 = i7._getMatchingVisibleMetas(this._type), r5 = i7.options.stacked, o3 = a7.length, s3 = [];
            for(e6 = 0; e6 < o3 && (n5 = a7[e6], (false === r5 || -1 === s3.indexOf(n5.stack) || (void 0) === r5 && (void 0) === n5.stack) && s3.push(n5.stack), n5.index !== t1); ++e6);
            return s3;
        },
        getStackCount: function() {
            return this._getStacks().length;
        },
        getStackIndex: function(t1, e6) {
            var n5 = this._getStacks(t1), i7 = (void 0) !== e6 ? n5.indexOf(e6) : -1;
            return -1 === i7 ? n5.length - 1 : i7;
        },
        getRuler: function() {
            var t1, e6, n5 = this._getIndexScale(), i7 = [];
            for(t1 = 0, e6 = this.getMeta().data.length; t1 < e6; ++t1)i7.push(n5.getPixelForValue(null, t1, this.index));
            return {
                pixels: i7,
                start: n5._startPixel,
                end: n5._endPixel,
                stackCount: this.getStackCount(),
                scale: n5
            };
        },
        calculateBarValuePixels: function(t1, e6, n5) {
            var i7, a7, r5, o3, s3, l3, u4, d2 = this.chart, h1 = this._getValueScale(), c1 = h1.isHorizontal(), f1 = d2.data.datasets, g1 = h1._getMatchingVisibleMetas(this._type), p1 = h1._parseValue(f1[t1].data[e6]), m1 = n5.minBarLength, v1 = h1.options.stacked, b1 = this.getMeta().stack, x1 = (void 0) === p1.start ? 0 : p1.max >= 0 && p1.min >= 0 ? p1.min : p1.max, y1 = (void 0) === p1.start ? p1.end : p1.max >= 0 && p1.min >= 0 ? p1.max - p1.min : p1.min - p1.max, _1 = g1.length;
            if (v1 || (void 0) === v1 && (void 0) !== b1) for(i7 = 0; i7 < _1 && (a7 = g1[i7]).index !== t1; ++i7)a7.stack === b1 && (r5 = (void 0) === (u4 = h1._parseValue(f1[a7.index].data[e6])).start ? u4.end : u4.min >= 0 && u4.max >= 0 ? u4.max : u4.min, (p1.min < 0 && r5 < 0 || p1.max >= 0 && r5 > 0) && (x1 += r5));
            return o3 = h1.getPixelForValue(x1), l3 = (s3 = h1.getPixelForValue(x1 + y1)) - o3, (void 0) !== m1 && Math.abs(l3) < m1 && (l3 = m1, s3 = y1 >= 0 && !c1 || y1 < 0 && c1 ? o3 - m1 : o3 + m1), {
                size: l3,
                base: o3,
                head: s3,
                center: s3 + l3 / 2
            };
        },
        calculateBarIndexPixels: function(t1, e6, n5, i7) {
            var a7 = "flex" === i7.barThickness ? function(t2, e7, n6) {
                var i8, a8 = e7.pixels, r5 = a8[t2], o3 = t2 > 0 ? a8[t2 - 1] : null, s3 = t2 < a8.length - 1 ? a8[t2 + 1] : null, l3 = n6.categoryPercentage;
                return null === o3 && (o3 = r5 - (null === s3 ? e7.end - e7.start : s3 - r5)), null === s3 && (s3 = r5 + r5 - o3), i8 = r5 - (r5 - Math.min(o3, s3)) / 2 * l3, {
                    chunk: Math.abs(s3 - o3) / 2 * l3 / e7.stackCount,
                    ratio: n6.barPercentage,
                    start: i8
                };
            }(e6, n5, i7) : Dt(e6, n5, i7), r5 = this.getStackIndex(t1, this.getMeta().stack), o3 = a7.start + a7.chunk * r5 + a7.chunk / 2, s3 = Math.min(At(i7.maxBarThickness, 1 / 0), a7.chunk * a7.ratio);
            return {
                base: o3 - s3 / 2,
                head: o3 + s3 / 2,
                center: o3,
                size: s3
            };
        },
        draw: function() {
            var t1 = this.chart, e6 = this._getValueScale(), n5 = this.getMeta().data, i7 = this.getDataset(), a7 = n5.length, r5 = 0;
            for(H.canvas.clipArea(t1.ctx, t1.chartArea); r5 < a7; ++r5){
                var o3 = e6._parseValue(i7.data[r5]);
                isNaN(o3.min) || isNaN(o3.max) || n5[r5].draw();
            }
            H.canvas.unclipArea(t1.ctx);
        },
        _resolveDataElementOptions: function() {
            var t1 = this, e6 = H.extend({
            }, it.prototype._resolveDataElementOptions.apply(t1, arguments)), n5 = t1._getIndexScale().options, i7 = t1._getValueScale().options;
            return e6.barPercentage = At(n5.barPercentage, e6.barPercentage), e6.barThickness = At(n5.barThickness, e6.barThickness), e6.categoryPercentage = At(n5.categoryPercentage, e6.categoryPercentage), e6.maxBarThickness = At(n5.maxBarThickness, e6.maxBarThickness), e6.minBarLength = At(i7.minBarLength, e6.minBarLength), e6;
        }
    }), It = H.valueOrDefault, Ft = H.options.resolve;
    N._set("bubble", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [
                {
                    type: "linear",
                    position: "bottom",
                    id: "x-axis-0"
                }
            ],
            yAxes: [
                {
                    type: "linear",
                    position: "left",
                    id: "y-axis-0"
                }
            ]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return "";
                },
                label: function(t1, e6) {
                    var n5 = e6.datasets[t1.datasetIndex].label || "", i7 = e6.datasets[t1.datasetIndex].data[t1.index];
                    return n5 + ": (" + t1.xLabel + ", " + t1.yLabel + ", " + i7.r + ")";
                }
            }
        }
    });
    var Ot = it.extend({
        dataElementType: kt.Point,
        _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth",
            "hoverRadius",
            "hitRadius",
            "pointStyle",
            "rotation"
        ],
        update: function(t1) {
            var e6 = this, n5 = e6.getMeta().data;
            H.each(n5, function(n6, i7) {
                e6.updateElement(n6, i7, t1);
            });
        },
        updateElement: function(t1, e6, n5) {
            var i7 = this, a7 = i7.getMeta(), r5 = t1.custom || {
            }, o4 = i7.getScaleForId(a7.xAxisID), s3 = i7.getScaleForId(a7.yAxisID), l3 = i7._resolveDataElementOptions(t1, e6), u4 = i7.getDataset().data[e6], d2 = i7.index, h1 = n5 ? o4.getPixelForDecimal(0.5) : o4.getPixelForValue("object" == typeof u4 ? u4 : NaN, e6, d2), c1 = n5 ? s3.getBasePixel() : s3.getPixelForValue(u4, e6, d2);
            t1._xScale = o4, t1._yScale = s3, t1._options = l3, t1._datasetIndex = d2, t1._index = e6, t1._model = {
                backgroundColor: l3.backgroundColor,
                borderColor: l3.borderColor,
                borderWidth: l3.borderWidth,
                hitRadius: l3.hitRadius,
                pointStyle: l3.pointStyle,
                rotation: l3.rotation,
                radius: n5 ? 0 : l3.radius,
                skip: r5.skip || isNaN(h1) || isNaN(c1),
                x: h1,
                y: c1
            }, t1.pivot();
        },
        setHoverStyle: function(t1) {
            var e6 = t1._model, n5 = t1._options, i7 = H.getHoverColor;
            t1.$previousStyle = {
                backgroundColor: e6.backgroundColor,
                borderColor: e6.borderColor,
                borderWidth: e6.borderWidth,
                radius: e6.radius
            }, e6.backgroundColor = It(n5.hoverBackgroundColor, i7(n5.backgroundColor)), e6.borderColor = It(n5.hoverBorderColor, i7(n5.borderColor)), e6.borderWidth = It(n5.hoverBorderWidth, n5.borderWidth), e6.radius = n5.radius + n5.hoverRadius;
        },
        _resolveDataElementOptions: function(t1, e6) {
            var n5 = this, i7 = n5.chart, a7 = n5.getDataset(), r5 = t1.custom || {
            }, o4 = a7.data[e6] || {
            }, s3 = it.prototype._resolveDataElementOptions.apply(n5, arguments), l3 = {
                chart: i7,
                dataIndex: e6,
                dataset: a7,
                datasetIndex: n5.index
            };
            return n5._cachedDataOpts === s3 && (s3 = H.extend({
            }, s3)), s3.radius = Ft([
                r5.radius,
                o4.r,
                n5._config.radius,
                i7.options.elements.point.radius
            ], l3, e6), s3;
        }
    }), Lt = H.valueOrDefault, Rt = Math.PI, zt = 2 * Rt, Nt = Rt / 2;
    N._set("doughnut", {
        animation: {
            animateRotate: true,
            animateScale: false
        },
        hover: {
            mode: "single"
        },
        legendCallback: function(t1) {
            var e6, n5, i7, a7 = document.createElement("ul"), r5 = t1.data, o4 = r5.datasets, s3 = r5.labels;
            if (a7.setAttribute("class", t1.id + "-legend"), o4.length) for(e6 = 0, n5 = o4[0].data.length; e6 < n5; ++e6)(i7 = a7.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o4[0].backgroundColor[e6], s3[e6] && i7.appendChild(document.createTextNode(s3[e6]));
            return a7.outerHTML;
        },
        legend: {
            labels: {
                generateLabels: function(t1) {
                    var e6 = t1.data;
                    return e6.labels.length && e6.datasets.length ? e6.labels.map(function(n5, i7) {
                        var a7 = t1.getDatasetMeta(0), r5 = a7.controller.getStyle(i7);
                        return {
                            text: n5,
                            fillStyle: r5.backgroundColor,
                            strokeStyle: r5.borderColor,
                            lineWidth: r5.borderWidth,
                            hidden: isNaN(e6.datasets[0].data[i7]) || a7.data[i7].hidden,
                            index: i7
                        };
                    }) : [];
                }
            },
            onClick: function(t1, e6) {
                var n5, i7, a7, r5 = e6.index, o4 = this.chart;
                for(n5 = 0, i7 = (o4.data.datasets || []).length; n5 < i7; ++n5)(a7 = o4.getDatasetMeta(n5)).data[r5] && (a7.data[r5].hidden = !a7.data[r5].hidden);
                o4.update();
            }
        },
        cutoutPercentage: 50,
        rotation: -Nt,
        circumference: zt,
        tooltips: {
            callbacks: {
                title: function() {
                    return "";
                },
                label: function(t1, e6) {
                    var n5 = e6.labels[t1.index], i7 = ": " + e6.datasets[t1.datasetIndex].data[t1.index];
                    return H.isArray(n5) ? (n5 = n5.slice())[0] += i7 : n5 += i7, n5;
                }
            }
        }
    });
    var Bt = it.extend({
        dataElementType: kt.Arc,
        linkScales: H.noop,
        _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderAlign",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth"
        ],
        getRingIndex: function(t1) {
            for(var e6 = 0, n5 = 0; n5 < t1; ++n5)this.chart.isDatasetVisible(n5) && ++e6;
            return e6;
        },
        update: function(t1) {
            var e6, n5, i7, a7, r5 = this, o4 = r5.chart, s3 = o4.chartArea, l3 = o4.options, u4 = 1, d2 = 1, h1 = 0, c1 = 0, f1 = r5.getMeta(), g1 = f1.data, p1 = l3.cutoutPercentage / 100 || 0, m1 = l3.circumference, v1 = r5._getRingWeight(r5.index);
            if (m1 < zt) {
                var b1 = l3.rotation % zt, x1 = (b1 += b1 >= Rt ? -zt : b1 < -Rt ? zt : 0) + m1, y1 = Math.cos(b1), _1 = Math.sin(b1), k1 = Math.cos(x1), w1 = Math.sin(x1), M1 = b1 <= 0 && x1 >= 0 || x1 >= zt, S1 = b1 <= Nt && x1 >= Nt || x1 >= zt + Nt, C1 = b1 <= -Nt && x1 >= -Nt || x1 >= Rt + Nt, P1 = b1 === -Rt || x1 >= Rt ? -1 : Math.min(y1, y1 * p1, k1, k1 * p1), A1 = C1 ? -1 : Math.min(_1, _1 * p1, w1, w1 * p1), D1 = M1 ? 1 : Math.max(y1, y1 * p1, k1, k1 * p1), T1 = S1 ? 1 : Math.max(_1, _1 * p1, w1, w1 * p1);
                u4 = (D1 - P1) / 2, d2 = (T1 - A1) / 2, h1 = -(D1 + P1) / 2, c1 = -(T1 + A1) / 2;
            }
            for(i7 = 0, a7 = g1.length; i7 < a7; ++i7)g1[i7]._options = r5._resolveDataElementOptions(g1[i7], i7);
            for(o4.borderWidth = r5.getMaxBorderWidth(), e6 = (s3.right - s3.left - o4.borderWidth) / u4, n5 = (s3.bottom - s3.top - o4.borderWidth) / d2, o4.outerRadius = Math.max(Math.min(e6, n5) / 2, 0), o4.innerRadius = Math.max(o4.outerRadius * p1, 0), o4.radiusLength = (o4.outerRadius - o4.innerRadius) / (r5._getVisibleDatasetWeightTotal() || 1), o4.offsetX = h1 * o4.outerRadius, o4.offsetY = c1 * o4.outerRadius, f1.total = r5.calculateTotal(), r5.outerRadius = o4.outerRadius - o4.radiusLength * r5._getRingWeightOffset(r5.index), r5.innerRadius = Math.max(r5.outerRadius - o4.radiusLength * v1, 0), i7 = 0, a7 = g1.length; i7 < a7; ++i7)r5.updateElement(g1[i7], i7, t1);
        },
        updateElement: function(t1, e6, n5) {
            var i7 = this, a7 = i7.chart, r5 = a7.chartArea, o4 = a7.options, s3 = o4.animation, l3 = (r5.left + r5.right) / 2, u4 = (r5.top + r5.bottom) / 2, d2 = o4.rotation, h1 = o4.rotation, c1 = i7.getDataset(), f1 = n5 && s3.animateRotate ? 0 : t1.hidden ? 0 : i7.calculateCircumference(c1.data[e6]) * (o4.circumference / zt), g1 = n5 && s3.animateScale ? 0 : i7.innerRadius, p1 = n5 && s3.animateScale ? 0 : i7.outerRadius, m1 = t1._options || {
            };
            H.extend(t1, {
                _datasetIndex: i7.index,
                _index: e6,
                _model: {
                    backgroundColor: m1.backgroundColor,
                    borderColor: m1.borderColor,
                    borderWidth: m1.borderWidth,
                    borderAlign: m1.borderAlign,
                    x: l3 + a7.offsetX,
                    y: u4 + a7.offsetY,
                    startAngle: d2,
                    endAngle: h1,
                    circumference: f1,
                    outerRadius: p1,
                    innerRadius: g1,
                    label: H.valueAtIndexOrDefault(c1.label, e6, a7.data.labels[e6])
                }
            });
            var v1 = t1._model;
            n5 && s3.animateRotate || (v1.startAngle = 0 === e6 ? o4.rotation : i7.getMeta().data[e6 - 1]._model.endAngle, v1.endAngle = v1.startAngle + v1.circumference), t1.pivot();
        },
        calculateTotal: function() {
            var t1, e6 = this.getDataset(), n5 = this.getMeta(), i7 = 0;
            return H.each(n5.data, function(n6, a7) {
                t1 = e6.data[a7], isNaN(t1) || n6.hidden || (i7 += Math.abs(t1));
            }), i7;
        },
        calculateCircumference: function(t1) {
            var e6 = this.getMeta().total;
            return e6 > 0 && !isNaN(t1) ? zt * (Math.abs(t1) / e6) : 0;
        },
        getMaxBorderWidth: function(t1) {
            var e6, n5, i7, a7, r5, o4, s3, l3, u4 = 0, d2 = this.chart;
            if (!t1) for(e6 = 0, n5 = d2.data.datasets.length; e6 < n5; ++e6)if (d2.isDatasetVisible(e6)) {
                t1 = (i7 = d2.getDatasetMeta(e6)).data, e6 !== this.index && (r5 = i7.controller);
                break;
            }
            if (!t1) return 0;
            for(e6 = 0, n5 = t1.length; e6 < n5; ++e6)a7 = t1[e6], r5 ? (r5._configure(), o4 = r5._resolveDataElementOptions(a7, e6)) : o4 = a7._options, "inner" !== o4.borderAlign && (s3 = o4.borderWidth, u4 = (l3 = o4.hoverBorderWidth) > (u4 = s3 > u4 ? s3 : u4) ? l3 : u4);
            return u4;
        },
        setHoverStyle: function(t1) {
            var e6 = t1._model, n5 = t1._options, i7 = H.getHoverColor;
            t1.$previousStyle = {
                backgroundColor: e6.backgroundColor,
                borderColor: e6.borderColor,
                borderWidth: e6.borderWidth
            }, e6.backgroundColor = Lt(n5.hoverBackgroundColor, i7(n5.backgroundColor)), e6.borderColor = Lt(n5.hoverBorderColor, i7(n5.borderColor)), e6.borderWidth = Lt(n5.hoverBorderWidth, n5.borderWidth);
        },
        _getRingWeightOffset: function(t1) {
            for(var e6 = 0, n5 = 0; n5 < t1; ++n5)this.chart.isDatasetVisible(n5) && (e6 += this._getRingWeight(n5));
            return e6;
        },
        _getRingWeight: function(t1) {
            return Math.max(Lt(this.chart.data.datasets[t1].weight, 1), 0);
        },
        _getVisibleDatasetWeightTotal: function() {
            return this._getRingWeightOffset(this.chart.data.datasets.length);
        }
    });
    N._set("horizontalBar", {
        hover: {
            mode: "index",
            axis: "y"
        },
        scales: {
            xAxes: [
                {
                    type: "linear",
                    position: "bottom"
                }
            ],
            yAxes: [
                {
                    type: "category",
                    position: "left",
                    offset: true,
                    gridLines: {
                        offsetGridLines: true
                    }
                }
            ]
        },
        elements: {
            rectangle: {
                borderSkipped: "left"
            }
        },
        tooltips: {
            mode: "index",
            axis: "y"
        }
    }), N._set("global", {
        datasets: {
            horizontalBar: {
                categoryPercentage: 0.8,
                barPercentage: 0.9
            }
        }
    });
    var Et = Tt.extend({
        _getValueScaleId: function() {
            return this.getMeta().xAxisID;
        },
        _getIndexScaleId: function() {
            return this.getMeta().yAxisID;
        }
    }), Wt = H.valueOrDefault, Vt = H.options.resolve, Ht = H.canvas._isPointInArea;
    function jt(t1, e6) {
        var n5 = t1 && t1.options.ticks || {
        }, i7 = n5.reverse, a7 = (void 0) === n5.min ? e6 : 0, r5 = (void 0) === n5.max ? e6 : 0;
        return {
            start: i7 ? r5 : a7,
            end: i7 ? a7 : r5
        };
    }
    function qt(t1, e6, n5) {
        var i7 = n5 / 2, a7 = jt(t1, i7), r5 = jt(e6, i7);
        return {
            top: r5.end,
            right: a7.end,
            bottom: r5.start,
            left: a7.start
        };
    }
    function Ut(t1) {
        var e6, n5, i7, a7;
        return H.isObject(t1) ? (e6 = t1.top, n5 = t1.right, i7 = t1.bottom, a7 = t1.left) : e6 = n5 = i7 = a7 = t1, {
            top: e6,
            right: n5,
            bottom: i7,
            left: a7
        };
    }
    N._set("line", {
        showLines: true,
        spanGaps: false,
        hover: {
            mode: "label"
        },
        scales: {
            xAxes: [
                {
                    type: "category",
                    id: "x-axis-0"
                }
            ],
            yAxes: [
                {
                    type: "linear",
                    id: "y-axis-0"
                }
            ]
        }
    });
    var Yt = it.extend({
        datasetElementType: kt.Line,
        dataElementType: kt.Point,
        _datasetElementOptions: [
            "backgroundColor",
            "borderCapStyle",
            "borderColor",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "borderWidth",
            "cubicInterpolationMode",
            "fill"
        ],
        _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation"
        },
        update: function(t1) {
            var e6, n5, i7 = this, a7 = i7.getMeta(), r5 = a7.dataset, o4 = a7.data || [], s3 = i7.chart.options, l3 = i7._config, u4 = i7._showLine = Wt(l3.showLine, s3.showLines);
            for(i7._xScale = i7.getScaleForId(a7.xAxisID), i7._yScale = i7.getScaleForId(a7.yAxisID), u4 && ((void 0) !== l3.tension && (void 0) === l3.lineTension && (l3.lineTension = l3.tension), r5._scale = i7._yScale, r5._datasetIndex = i7.index, r5._children = o4, r5._model = i7._resolveDatasetElementOptions(r5), r5.pivot()), e6 = 0, n5 = o4.length; e6 < n5; ++e6)i7.updateElement(o4[e6], e6, t1);
            for(u4 && 0 !== r5._model.tension && i7.updateBezierControlPoints(), e6 = 0, n5 = o4.length; e6 < n5; ++e6)o4[e6].pivot();
        },
        updateElement: function(t1, e6, n5) {
            var i7, a7, r5 = this, o4 = r5.getMeta(), s3 = t1.custom || {
            }, l3 = r5.getDataset(), u4 = r5.index, d2 = l3.data[e6], h1 = r5._xScale, c1 = r5._yScale, f1 = o4.dataset._model, g1 = r5._resolveDataElementOptions(t1, e6);
            i7 = h1.getPixelForValue("object" == typeof d2 ? d2 : NaN, e6, u4), a7 = n5 ? c1.getBasePixel() : r5.calculatePointY(d2, e6, u4), t1._xScale = h1, t1._yScale = c1, t1._options = g1, t1._datasetIndex = u4, t1._index = e6, t1._model = {
                x: i7,
                y: a7,
                skip: s3.skip || isNaN(i7) || isNaN(a7),
                radius: g1.radius,
                pointStyle: g1.pointStyle,
                rotation: g1.rotation,
                backgroundColor: g1.backgroundColor,
                borderColor: g1.borderColor,
                borderWidth: g1.borderWidth,
                tension: Wt(s3.tension, f1 ? f1.tension : 0),
                steppedLine: !!f1 && f1.steppedLine,
                hitRadius: g1.hitRadius
            };
        },
        _resolveDatasetElementOptions: function(t1) {
            var e6 = this, n5 = e6._config, i7 = t1.custom || {
            }, a7 = e6.chart.options, r5 = a7.elements.line, o4 = it.prototype._resolveDatasetElementOptions.apply(e6, arguments);
            return o4.spanGaps = Wt(n5.spanGaps, a7.spanGaps), o4.tension = Wt(n5.lineTension, r5.tension), o4.steppedLine = Vt([
                i7.steppedLine,
                n5.steppedLine,
                r5.stepped
            ]), o4.clip = Ut(Wt(n5.clip, qt(e6._xScale, e6._yScale, o4.borderWidth))), o4;
        },
        calculatePointY: function(t1, e6, n5) {
            var i7, a7, r5, o4, s3, l3, u4, d2 = this.chart, h1 = this._yScale, c1 = 0, f1 = 0;
            if (h1.options.stacked) {
                for(s3 = +h1.getRightValue(t1), u4 = (l3 = d2._getSortedVisibleDatasetMetas()).length, i7 = 0; i7 < u4 && (r5 = l3[i7]).index !== n5; ++i7)a7 = d2.data.datasets[r5.index], "line" === r5.type && r5.yAxisID === h1.id && ((o4 = +h1.getRightValue(a7.data[e6])) < 0 ? f1 += o4 || 0 : c1 += o4 || 0);
                return s3 < 0 ? h1.getPixelForValue(f1 + s3) : h1.getPixelForValue(c1 + s3);
            }
            return h1.getPixelForValue(t1);
        },
        updateBezierControlPoints: function() {
            var t1, e6, n5, i7, a7 = this.chart, r5 = this.getMeta(), o4 = r5.dataset._model, s3 = a7.chartArea, l3 = r5.data || [];
            function u4(t2, e7, n6) {
                return Math.max(Math.min(t2, n6), e7);
            }
            if (o4.spanGaps && (l3 = l3.filter(function(t2) {
                return !t2._model.skip;
            })), "monotone" === o4.cubicInterpolationMode) H.splineCurveMonotone(l3);
            else for(t1 = 0, e6 = l3.length; t1 < e6; ++t1)n5 = l3[t1]._model, i7 = H.splineCurve(H.previousItem(l3, t1)._model, n5, H.nextItem(l3, t1)._model, o4.tension), n5.controlPointPreviousX = i7.previous.x, n5.controlPointPreviousY = i7.previous.y, n5.controlPointNextX = i7.next.x, n5.controlPointNextY = i7.next.y;
            if (a7.options.elements.line.capBezierPoints) for(t1 = 0, e6 = l3.length; t1 < e6; ++t1)n5 = l3[t1]._model, Ht(n5, s3) && (t1 > 0 && Ht(l3[t1 - 1]._model, s3) && (n5.controlPointPreviousX = u4(n5.controlPointPreviousX, s3.left, s3.right), n5.controlPointPreviousY = u4(n5.controlPointPreviousY, s3.top, s3.bottom)), t1 < l3.length - 1 && Ht(l3[t1 + 1]._model, s3) && (n5.controlPointNextX = u4(n5.controlPointNextX, s3.left, s3.right), n5.controlPointNextY = u4(n5.controlPointNextY, s3.top, s3.bottom)));
        },
        draw: function() {
            var t1, e6 = this.chart, n5 = this.getMeta(), i7 = n5.data || [], a7 = e6.chartArea, r5 = e6.canvas, o4 = 0, s3 = i7.length;
            for(this._showLine && (t1 = n5.dataset._model.clip, H.canvas.clipArea(e6.ctx, {
                left: false === t1.left ? 0 : a7.left - t1.left,
                right: false === t1.right ? r5.width : a7.right + t1.right,
                top: false === t1.top ? 0 : a7.top - t1.top,
                bottom: false === t1.bottom ? r5.height : a7.bottom + t1.bottom
            }), n5.dataset.draw(), H.canvas.unclipArea(e6.ctx)); o4 < s3; ++o4)i7[o4].draw(a7);
        },
        setHoverStyle: function(t1) {
            var e6 = t1._model, n5 = t1._options, i7 = H.getHoverColor;
            t1.$previousStyle = {
                backgroundColor: e6.backgroundColor,
                borderColor: e6.borderColor,
                borderWidth: e6.borderWidth,
                radius: e6.radius
            }, e6.backgroundColor = Wt(n5.hoverBackgroundColor, i7(n5.backgroundColor)), e6.borderColor = Wt(n5.hoverBorderColor, i7(n5.borderColor)), e6.borderWidth = Wt(n5.hoverBorderWidth, n5.borderWidth), e6.radius = Wt(n5.hoverRadius, n5.radius);
        }
    }), Gt = H.options.resolve;
    N._set("polarArea", {
        scale: {
            type: "radialLinear",
            angleLines: {
                display: false
            },
            gridLines: {
                circular: true
            },
            pointLabels: {
                display: false
            },
            ticks: {
                beginAtZero: true
            }
        },
        animation: {
            animateRotate: true,
            animateScale: true
        },
        startAngle: -0.5 * Math.PI,
        legendCallback: function(t1) {
            var e6, n5, i7, a7 = document.createElement("ul"), r5 = t1.data, o4 = r5.datasets, s3 = r5.labels;
            if (a7.setAttribute("class", t1.id + "-legend"), o4.length) for(e6 = 0, n5 = o4[0].data.length; e6 < n5; ++e6)(i7 = a7.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = o4[0].backgroundColor[e6], s3[e6] && i7.appendChild(document.createTextNode(s3[e6]));
            return a7.outerHTML;
        },
        legend: {
            labels: {
                generateLabels: function(t1) {
                    var e6 = t1.data;
                    return e6.labels.length && e6.datasets.length ? e6.labels.map(function(n5, i7) {
                        var a7 = t1.getDatasetMeta(0), r5 = a7.controller.getStyle(i7);
                        return {
                            text: n5,
                            fillStyle: r5.backgroundColor,
                            strokeStyle: r5.borderColor,
                            lineWidth: r5.borderWidth,
                            hidden: isNaN(e6.datasets[0].data[i7]) || a7.data[i7].hidden,
                            index: i7
                        };
                    }) : [];
                }
            },
            onClick: function(t1, e6) {
                var n5, i7, a7, r5 = e6.index, o4 = this.chart;
                for(n5 = 0, i7 = (o4.data.datasets || []).length; n5 < i7; ++n5)(a7 = o4.getDatasetMeta(n5)).data[r5].hidden = !a7.data[r5].hidden;
                o4.update();
            }
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return "";
                },
                label: function(t1, e6) {
                    return e6.labels[t1.index] + ": " + t1.yLabel;
                }
            }
        }
    });
    var Xt = it.extend({
        dataElementType: kt.Arc,
        linkScales: H.noop,
        _dataElementOptions: [
            "backgroundColor",
            "borderColor",
            "borderWidth",
            "borderAlign",
            "hoverBackgroundColor",
            "hoverBorderColor",
            "hoverBorderWidth"
        ],
        _getIndexScaleId: function() {
            return this.chart.scale.id;
        },
        _getValueScaleId: function() {
            return this.chart.scale.id;
        },
        update: function(t1) {
            var e6, n5, i7, a7 = this, r5 = a7.getDataset(), o4 = a7.getMeta(), s3 = a7.chart.options.startAngle || 0, l3 = a7._starts = [], u4 = a7._angles = [], d2 = o4.data;
            for(a7._updateRadius(), o4.count = a7.countVisibleElements(), e6 = 0, n5 = r5.data.length; e6 < n5; e6++)l3[e6] = s3, i7 = a7._computeAngle(e6), u4[e6] = i7, s3 += i7;
            for(e6 = 0, n5 = d2.length; e6 < n5; ++e6)d2[e6]._options = a7._resolveDataElementOptions(d2[e6], e6), a7.updateElement(d2[e6], e6, t1);
        },
        _updateRadius: function() {
            var t1 = this, e6 = t1.chart, n5 = e6.chartArea, i7 = e6.options, a7 = Math.min(n5.right - n5.left, n5.bottom - n5.top);
            e6.outerRadius = Math.max(a7 / 2, 0), e6.innerRadius = Math.max(i7.cutoutPercentage ? e6.outerRadius / 100 * i7.cutoutPercentage : 1, 0), e6.radiusLength = (e6.outerRadius - e6.innerRadius) / e6.getVisibleDatasetCount(), t1.outerRadius = e6.outerRadius - e6.radiusLength * t1.index, t1.innerRadius = t1.outerRadius - e6.radiusLength;
        },
        updateElement: function(t1, e6, n5) {
            var i7 = this, a7 = i7.chart, r5 = i7.getDataset(), o4 = a7.options, s3 = o4.animation, l3 = a7.scale, u4 = a7.data.labels, d2 = l3.xCenter, h1 = l3.yCenter, c1 = o4.startAngle, f1 = t1.hidden ? 0 : l3.getDistanceFromCenterForValue(r5.data[e6]), g1 = i7._starts[e6], p1 = g1 + (t1.hidden ? 0 : i7._angles[e6]), m1 = s3.animateScale ? 0 : l3.getDistanceFromCenterForValue(r5.data[e6]), v1 = t1._options || {
            };
            H.extend(t1, {
                _datasetIndex: i7.index,
                _index: e6,
                _scale: l3,
                _model: {
                    backgroundColor: v1.backgroundColor,
                    borderColor: v1.borderColor,
                    borderWidth: v1.borderWidth,
                    borderAlign: v1.borderAlign,
                    x: d2,
                    y: h1,
                    innerRadius: 0,
                    outerRadius: n5 ? m1 : f1,
                    startAngle: n5 && s3.animateRotate ? c1 : g1,
                    endAngle: n5 && s3.animateRotate ? c1 : p1,
                    label: H.valueAtIndexOrDefault(u4, e6, u4[e6])
                }
            }), t1.pivot();
        },
        countVisibleElements: function() {
            var t1 = this.getDataset(), e6 = this.getMeta(), n5 = 0;
            return H.each(e6.data, function(e7, i7) {
                isNaN(t1.data[i7]) || e7.hidden || n5++;
            }), n5;
        },
        setHoverStyle: function(t1) {
            var e6 = t1._model, n5 = t1._options, i7 = H.getHoverColor, a7 = H.valueOrDefault;
            t1.$previousStyle = {
                backgroundColor: e6.backgroundColor,
                borderColor: e6.borderColor,
                borderWidth: e6.borderWidth
            }, e6.backgroundColor = a7(n5.hoverBackgroundColor, i7(n5.backgroundColor)), e6.borderColor = a7(n5.hoverBorderColor, i7(n5.borderColor)), e6.borderWidth = a7(n5.hoverBorderWidth, n5.borderWidth);
        },
        _computeAngle: function(t1) {
            var e6 = this, n5 = this.getMeta().count, i7 = e6.getDataset(), a7 = e6.getMeta();
            if (isNaN(i7.data[t1]) || a7.data[t1].hidden) return 0;
            var r5 = {
                chart: e6.chart,
                dataIndex: t1,
                dataset: i7,
                datasetIndex: e6.index
            };
            return Gt([
                e6.chart.options.elements.arc.angle,
                2 * Math.PI / n5
            ], r5, t1);
        }
    });
    N._set("pie", H.clone(N.doughnut)), N._set("pie", {
        cutoutPercentage: 0
    });
    var Kt = Bt, Zt = H.valueOrDefault;
    N._set("radar", {
        spanGaps: false,
        scale: {
            type: "radialLinear"
        },
        elements: {
            line: {
                fill: "start",
                tension: 0
            }
        }
    });
    var $t = it.extend({
        datasetElementType: kt.Line,
        dataElementType: kt.Point,
        linkScales: H.noop,
        _datasetElementOptions: [
            "backgroundColor",
            "borderWidth",
            "borderColor",
            "borderCapStyle",
            "borderDash",
            "borderDashOffset",
            "borderJoinStyle",
            "fill"
        ],
        _dataElementOptions: {
            backgroundColor: "pointBackgroundColor",
            borderColor: "pointBorderColor",
            borderWidth: "pointBorderWidth",
            hitRadius: "pointHitRadius",
            hoverBackgroundColor: "pointHoverBackgroundColor",
            hoverBorderColor: "pointHoverBorderColor",
            hoverBorderWidth: "pointHoverBorderWidth",
            hoverRadius: "pointHoverRadius",
            pointStyle: "pointStyle",
            radius: "pointRadius",
            rotation: "pointRotation"
        },
        _getIndexScaleId: function() {
            return this.chart.scale.id;
        },
        _getValueScaleId: function() {
            return this.chart.scale.id;
        },
        update: function(t1) {
            var e6, n5, i7 = this, a7 = i7.getMeta(), r5 = a7.dataset, o4 = a7.data || [], s3 = i7.chart.scale, l3 = i7._config;
            for((void 0) !== l3.tension && (void 0) === l3.lineTension && (l3.lineTension = l3.tension), r5._scale = s3, r5._datasetIndex = i7.index, r5._children = o4, r5._loop = true, r5._model = i7._resolveDatasetElementOptions(r5), r5.pivot(), e6 = 0, n5 = o4.length; e6 < n5; ++e6)i7.updateElement(o4[e6], e6, t1);
            for(i7.updateBezierControlPoints(), e6 = 0, n5 = o4.length; e6 < n5; ++e6)o4[e6].pivot();
        },
        updateElement: function(t1, e6, n5) {
            var i7 = this, a7 = t1.custom || {
            }, r5 = i7.getDataset(), o4 = i7.chart.scale, s3 = o4.getPointPositionForValue(e6, r5.data[e6]), l3 = i7._resolveDataElementOptions(t1, e6), u4 = i7.getMeta().dataset._model, d2 = n5 ? o4.xCenter : s3.x, h1 = n5 ? o4.yCenter : s3.y;
            t1._scale = o4, t1._options = l3, t1._datasetIndex = i7.index, t1._index = e6, t1._model = {
                x: d2,
                y: h1,
                skip: a7.skip || isNaN(d2) || isNaN(h1),
                radius: l3.radius,
                pointStyle: l3.pointStyle,
                rotation: l3.rotation,
                backgroundColor: l3.backgroundColor,
                borderColor: l3.borderColor,
                borderWidth: l3.borderWidth,
                tension: Zt(a7.tension, u4 ? u4.tension : 0),
                hitRadius: l3.hitRadius
            };
        },
        _resolveDatasetElementOptions: function() {
            var t1 = this, e6 = t1._config, n5 = t1.chart.options, i7 = it.prototype._resolveDatasetElementOptions.apply(t1, arguments);
            return i7.spanGaps = Zt(e6.spanGaps, n5.spanGaps), i7.tension = Zt(e6.lineTension, n5.elements.line.tension), i7;
        },
        updateBezierControlPoints: function() {
            var t1, e6, n5, i7, a7 = this.getMeta(), r5 = this.chart.chartArea, o4 = a7.data || [];
            function s3(t2, e7, n6) {
                return Math.max(Math.min(t2, n6), e7);
            }
            for(a7.dataset._model.spanGaps && (o4 = o4.filter(function(t2) {
                return !t2._model.skip;
            })), t1 = 0, e6 = o4.length; t1 < e6; ++t1)n5 = o4[t1]._model, i7 = H.splineCurve(H.previousItem(o4, t1, true)._model, n5, H.nextItem(o4, t1, true)._model, n5.tension), n5.controlPointPreviousX = s3(i7.previous.x, r5.left, r5.right), n5.controlPointPreviousY = s3(i7.previous.y, r5.top, r5.bottom), n5.controlPointNextX = s3(i7.next.x, r5.left, r5.right), n5.controlPointNextY = s3(i7.next.y, r5.top, r5.bottom);
        },
        setHoverStyle: function(t1) {
            var e6 = t1._model, n5 = t1._options, i7 = H.getHoverColor;
            t1.$previousStyle = {
                backgroundColor: e6.backgroundColor,
                borderColor: e6.borderColor,
                borderWidth: e6.borderWidth,
                radius: e6.radius
            }, e6.backgroundColor = Zt(n5.hoverBackgroundColor, i7(n5.backgroundColor)), e6.borderColor = Zt(n5.hoverBorderColor, i7(n5.borderColor)), e6.borderWidth = Zt(n5.hoverBorderWidth, n5.borderWidth), e6.radius = Zt(n5.hoverRadius, n5.radius);
        }
    });
    N._set("scatter", {
        hover: {
            mode: "single"
        },
        scales: {
            xAxes: [
                {
                    id: "x-axis-1",
                    type: "linear",
                    position: "bottom"
                }
            ],
            yAxes: [
                {
                    id: "y-axis-1",
                    type: "linear",
                    position: "left"
                }
            ]
        },
        tooltips: {
            callbacks: {
                title: function() {
                    return "";
                },
                label: function(t1) {
                    return "(" + t1.xLabel + ", " + t1.yLabel + ")";
                }
            }
        }
    }), N._set("global", {
        datasets: {
            scatter: {
                showLine: false
            }
        }
    });
    var Jt = {
        bar: Tt,
        bubble: Ot,
        doughnut: Bt,
        horizontalBar: Et,
        line: Yt,
        polarArea: Xt,
        pie: Kt,
        radar: $t,
        scatter: Yt
    };
    function Qt(t1, e6) {
        return t1.native ? {
            x: t1.x,
            y: t1.y
        } : H.getRelativePosition(t1, e6);
    }
    function te(t1, e6) {
        var n5, i7, a7, r5, o4, s3, l3 = t1._getSortedVisibleDatasetMetas();
        for(i7 = 0, r5 = l3.length; i7 < r5; ++i7)for(a7 = 0, o4 = (n5 = l3[i7].data).length; a7 < o4; ++a7)(s3 = n5[a7])._view.skip || e6(s3);
    }
    function ee(t1, e6) {
        var n5 = [];
        return te(t1, function(t2) {
            t2.inRange(e6.x, e6.y) && n5.push(t2);
        }), n5;
    }
    function ne(t1, e6, n5, i7) {
        var a7 = Number.POSITIVE_INFINITY, r5 = [];
        return te(t1, function(t2) {
            if (!n5 || t2.inRange(e6.x, e6.y)) {
                var o4 = t2.getCenterPoint(), s3 = i7(e6, o4);
                s3 < a7 ? (r5 = [
                    t2
                ], a7 = s3) : s3 === a7 && r5.push(t2);
            }
        }), r5;
    }
    function ie(t1) {
        var e6 = -1 !== t1.indexOf("x"), n5 = -1 !== t1.indexOf("y");
        return function(t2, i7) {
            var a7 = e6 ? Math.abs(t2.x - i7.x) : 0, r5 = n5 ? Math.abs(t2.y - i7.y) : 0;
            return Math.sqrt(Math.pow(a7, 2) + Math.pow(r5, 2));
        };
    }
    function ae(t1, e6, n5) {
        var i7 = Qt(e6, t1);
        n5.axis = n5.axis || "x";
        var a7 = ie(n5.axis), r5 = n5.intersect ? ee(t1, i7) : ne(t1, i7, false, a7), o5 = [];
        return r5.length ? (t1._getSortedVisibleDatasetMetas().forEach(function(t2) {
            var e7 = t2.data[r5[0]._index];
            e7 && !e7._view.skip && o5.push(e7);
        }), o5) : [];
    }
    var re = {
        modes: {
            single: function(t1, e6) {
                var n5 = Qt(e6, t1), i7 = [];
                return te(t1, function(t2) {
                    if (t2.inRange(n5.x, n5.y)) return i7.push(t2), i7;
                }), i7.slice(0, 1);
            },
            label: ae,
            index: ae,
            dataset: function(t1, e6, n5) {
                var i7 = Qt(e6, t1);
                n5.axis = n5.axis || "xy";
                var a7 = ie(n5.axis), r5 = n5.intersect ? ee(t1, i7) : ne(t1, i7, false, a7);
                return r5.length > 0 && (r5 = t1.getDatasetMeta(r5[0]._datasetIndex).data), r5;
            },
            "x-axis": function(t1, e6) {
                return ae(t1, e6, {
                    intersect: false
                });
            },
            point: function(t1, e6) {
                return ee(t1, Qt(e6, t1));
            },
            nearest: function(t1, e6, n5) {
                var i7 = Qt(e6, t1);
                n5.axis = n5.axis || "xy";
                var a7 = ie(n5.axis);
                return ne(t1, i7, n5.intersect, a7);
            },
            x: function(t1, e6, n5) {
                var i7 = Qt(e6, t1), a7 = [], r5 = false;
                return te(t1, function(t2) {
                    t2.inXRange(i7.x) && a7.push(t2), t2.inRange(i7.x, i7.y) && (r5 = true);
                }), n5.intersect && !r5 && (a7 = []), a7;
            },
            y: function(t1, e6, n5) {
                var i7 = Qt(e6, t1), a7 = [], r5 = false;
                return te(t1, function(t2) {
                    t2.inYRange(i7.y) && a7.push(t2), t2.inRange(i7.x, i7.y) && (r5 = true);
                }), n5.intersect && !r5 && (a7 = []), a7;
            }
        }
    }, oe = H.extend;
    function se(t1, e6) {
        return H.where(t1, function(t2) {
            return t2.pos === e6;
        });
    }
    function le(t1, e6) {
        return t1.sort(function(t2, n5) {
            var i7 = e6 ? n5 : t2, a7 = e6 ? t2 : n5;
            return i7.weight === a7.weight ? i7.index - a7.index : i7.weight - a7.weight;
        });
    }
    function ue(t1, e6, n5, i7) {
        return Math.max(t1[n5], e6[n5]) + Math.max(t1[i7], e6[i7]);
    }
    function de(t1, e6, n5) {
        var i7, a7, r5 = n5.box, o5 = t1.maxPadding;
        if (n5.size && (t1[n5.pos] -= n5.size), n5.size = n5.horizontal ? r5.height : r5.width, t1[n5.pos] += n5.size, r5.getPadding) {
            var s4 = r5.getPadding();
            o5.top = Math.max(o5.top, s4.top), o5.left = Math.max(o5.left, s4.left), o5.bottom = Math.max(o5.bottom, s4.bottom), o5.right = Math.max(o5.right, s4.right);
        }
        if (i7 = e6.outerWidth - ue(o5, t1, "left", "right"), a7 = e6.outerHeight - ue(o5, t1, "top", "bottom"), i7 !== t1.w || a7 !== t1.h) {
            t1.w = i7, t1.h = a7;
            var l3 = n5.horizontal ? [
                i7,
                t1.w
            ] : [
                a7,
                t1.h
            ];
            return !(l3[0] === l3[1] || isNaN(l3[0]) && isNaN(l3[1]));
        }
    }
    function he(t1, e6) {
        var n5 = e6.maxPadding;
        function i7(t2) {
            var i8 = {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            };
            return t2.forEach(function(t3) {
                i8[t3] = Math.max(e6[t3], n5[t3]);
            }), i8;
        }
        return i7(t1 ? [
            "left",
            "right"
        ] : [
            "top",
            "bottom"
        ]);
    }
    function ce(t1, e6, n5) {
        var i7, a7, r5, o5, s5, l4, u4 = [];
        for(i7 = 0, a7 = t1.length; i7 < a7; ++i7)(o5 = (r5 = t1[i7]).box).update(r5.width || e6.w, r5.height || e6.h, he(r5.horizontal, e6)), de(e6, n5, r5) && (l4 = true, u4.length && (s5 = true)), o5.fullWidth || u4.push(r5);
        return s5 && ce(u4, e6, n5) || l4;
    }
    function fe(t1, e6, n5) {
        var i7, a7, r5, o5, s5 = n5.padding, l4 = e6.x, u4 = e6.y;
        for(i7 = 0, a7 = t1.length; i7 < a7; ++i7)o5 = (r5 = t1[i7]).box, r5.horizontal ? (o5.left = o5.fullWidth ? s5.left : e6.left, o5.right = o5.fullWidth ? n5.outerWidth - s5.right : e6.left + e6.w, o5.top = u4, o5.bottom = u4 + o5.height, o5.width = o5.right - o5.left, u4 = o5.bottom) : (o5.left = l4, o5.right = l4 + o5.width, o5.top = e6.top, o5.bottom = e6.top + e6.h, o5.height = o5.bottom - o5.top, l4 = o5.right);
        e6.x = l4, e6.y = u4;
    }
    N._set("global", {
        layout: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }
        }
    });
    var ge, pe = {
        defaults: {
        },
        addBox: function(t1, e6) {
            t1.boxes || (t1.boxes = []), e6.fullWidth = e6.fullWidth || false, e6.position = e6.position || "top", e6.weight = e6.weight || 0, e6._layers = e6._layers || function() {
                return [
                    {
                        z: 0,
                        draw: function() {
                            e6.draw.apply(e6, arguments);
                        }
                    }
                ];
            }, t1.boxes.push(e6);
        },
        removeBox: function(t1, e6) {
            var n5 = t1.boxes ? t1.boxes.indexOf(e6) : -1;
            -1 !== n5 && t1.boxes.splice(n5, 1);
        },
        configure: function(t1, e6, n5) {
            for(var i7, a7 = [
                "fullWidth",
                "position",
                "weight"
            ], r5 = a7.length, o5 = 0; o5 < r5; ++o5)i7 = a7[o5], n5.hasOwnProperty(i7) && (e6[i7] = n5[i7]);
        },
        update: function(t1, e6, n5) {
            if (t1) {
                var i7 = t1.options.layout || {
                }, a7 = H.options.toPadding(i7.padding), r5 = e6 - a7.width, o5 = n5 - a7.height, s5 = function(t2) {
                    var e7 = function(t3) {
                        var e8, n6, i8, a8 = [];
                        for(e8 = 0, n6 = (t3 || []).length; e8 < n6; ++e8)i8 = t3[e8], a8.push({
                            index: e8,
                            box: i8,
                            pos: i8.position,
                            horizontal: i8.isHorizontal(),
                            weight: i8.weight
                        });
                        return a8;
                    }(t2), n6 = le(se(e7, "left"), true), i8 = le(se(e7, "right")), a8 = le(se(e7, "top"), true), r6 = le(se(e7, "bottom"));
                    return {
                        leftAndTop: n6.concat(a8),
                        rightAndBottom: i8.concat(r6),
                        chartArea: se(e7, "chartArea"),
                        vertical: n6.concat(i8),
                        horizontal: a8.concat(r6)
                    };
                }(t1.boxes), l4 = s5.vertical, u4 = s5.horizontal, d2 = Object.freeze({
                    outerWidth: e6,
                    outerHeight: n5,
                    padding: a7,
                    availableWidth: r5,
                    vBoxMaxWidth: r5 / 2 / l4.length,
                    hBoxMaxHeight: o5 / 2
                }), h1 = oe({
                    maxPadding: oe({
                    }, a7),
                    w: r5,
                    h: o5,
                    x: a7.left,
                    y: a7.top
                }, a7);
                (function(t2, e7) {
                    var n6, i8, a8;
                    for(n6 = 0, i8 = t2.length; n6 < i8; ++n6)(a8 = t2[n6]).width = a8.horizontal ? a8.box.fullWidth && e7.availableWidth : e7.vBoxMaxWidth, a8.height = a8.horizontal && e7.hBoxMaxHeight;
                })(l4.concat(u4), d2), ce(l4, h1, d2), ce(u4, h1, d2) && ce(l4, h1, d2), (function(t2) {
                    var e7 = t2.maxPadding;
                    function n6(n7) {
                        var i8 = Math.max(e7[n7] - t2[n7], 0);
                        return t2[n7] += i8, i8;
                    }
                    t2.y += n6("top"), t2.x += n6("left"), n6("right"), n6("bottom");
                })(h1), fe(s5.leftAndTop, h1, d2), h1.x += h1.w, h1.y += h1.h, fe(s5.rightAndBottom, h1, d2), t1.chartArea = {
                    left: h1.left,
                    top: h1.top,
                    right: h1.left + h1.w,
                    bottom: h1.top + h1.h
                }, H.each(s5.chartArea, function(e7) {
                    var n6 = e7.box;
                    oe(n6, t1.chartArea), n6.update(h1.w, h1.h);
                });
            }
        }
    }, me = (ge = Object.freeze({
        __proto__: null,
        default: "@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"
    })) && ge.default || ge, ve = "$chartjs", be = "chartjs-size-monitor", xe = "chartjs-render-monitor", ye = "chartjs-render-animation", _e = [
        "animationstart",
        "webkitAnimationStart"
    ], ke = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
    };
    function we(t1, e6) {
        var n5 = H.getStyle(t1, e6), i8 = n5 && n5.match(/^(\d+)(\.\d+)?px$/);
        return i8 ? Number(i8[1]) : void 0;
    }
    var Me = !!function() {
        var t1 = false;
        try {
            var e6 = Object.defineProperty({
            }, "passive", {
                get: function() {
                    t1 = true;
                }
            });
            window.addEventListener("e", null, e6);
        } catch (t2) {
        }
        return t1;
    }() && {
        passive: true
    };
    function Se(t1, e6, n5) {
        t1.addEventListener(e6, n5, Me);
    }
    function Ce(t1, e6, n5) {
        t1.removeEventListener(e6, n5, Me);
    }
    function Pe(t1, e6, n5, i8, a8) {
        return {
            type: t1,
            chart: e6,
            native: a8 || null,
            x: (void 0) !== n5 ? n5 : null,
            y: (void 0) !== i8 ? i8 : null
        };
    }
    function Ae(t1) {
        var e6 = document.createElement("div");
        return e6.className = t1 || "", e6;
    }
    function De(t1, e6, n5) {
        var i8, a8, r6, o6, s6 = t1[ve] || (t1[ve] = {
        }), l5 = s6.resizer = function(t2) {
            var e7 = Ae(be), n6 = Ae(be + "-expand"), i9 = Ae(be + "-shrink");
            n6.appendChild(Ae()), i9.appendChild(Ae()), e7.appendChild(n6), e7.appendChild(i9), e7._reset = function() {
                n6.scrollLeft = 1000000, n6.scrollTop = 1000000, i9.scrollLeft = 1000000, i9.scrollTop = 1000000;
            };
            var a9 = function() {
                e7._reset(), t2();
            };
            return Se(n6, "scroll", a9.bind(n6, "expand")), Se(i9, "scroll", a9.bind(i9, "shrink")), e7;
        }((i8 = function() {
            if (s6.resizer) {
                var i9 = n5.options.maintainAspectRatio && t1.parentNode, a9 = i9 ? i9.clientWidth : 0;
                e6(Pe("resize", n5)), i9 && i9.clientWidth < a9 && n5.canvas && e6(Pe("resize", n5));
            }
        }, r6 = false, o6 = [], function() {
            o6 = Array.prototype.slice.call(arguments), a8 = a8 || this, r6 || (r6 = true, H.requestAnimFrame.call(window, function() {
                r6 = false, i8.apply(a8, o6);
            }));
        }));
        (function(t2, e7) {
            var n6 = t2[ve] || (t2[ve] = {
            }), i10 = n6.renderProxy = function(t3) {
                t3.animationName === ye && e7();
            };
            H.each(_e, function(e8) {
                Se(t2, e8, i10);
            }), n6.reflow = !!t2.offsetParent, t2.classList.add(xe);
        })(t1, function() {
            if (s6.resizer) {
                var e7 = t1.parentNode;
                e7 && e7 !== l5.parentNode && e7.insertBefore(l5, e7.firstChild), l5._reset();
            }
        });
    }
    function Te(t1) {
        var e6 = t1[ve] || {
        }, n5 = e6.resizer;
        delete e6.resizer, (function(t2) {
            var e8 = t2[ve] || {
            }, n6 = e8.renderProxy;
            n6 && (H.each(_e, function(e9) {
                Ce(t2, e9, n6);
            }), delete e8.renderProxy), t2.classList.remove(xe);
        })(t1), n5 && n5.parentNode && n5.parentNode.removeChild(n5);
    }
    var Ie = {
        disableCSSInjection: false,
        _enabled: "undefined" != typeof window && "undefined" != typeof document,
        _ensureLoaded: function(t1) {
            if (!this.disableCSSInjection) {
                var e6 = t1.getRootNode ? t1.getRootNode() : document;
                (function(t2, e8) {
                    var n5 = t2[ve] || (t2[ve] = {
                    });
                    if (!n5.containsStyles) {
                        n5.containsStyles = true, e8 = "/* Chart.js */\n" + e8;
                        var i8 = document.createElement("style");
                        i8.setAttribute("type", "text/css"), i8.appendChild(document.createTextNode(e8)), t2.appendChild(i8);
                    }
                })(e6.host ? e6 : document.head, me);
            }
        },
        acquireContext: function(t1, e8) {
            "string" == typeof t1 ? t1 = document.getElementById(t1) : t1.length && (t1 = t1[0]), t1 && t1.canvas && (t1 = t1.canvas);
            var n5 = t1 && t1.getContext && t1.getContext("2d");
            return n5 && n5.canvas === t1 ? (this._ensureLoaded(t1), (function(t2, e9) {
                var n6 = t2.style, i10 = t2.getAttribute("height"), a8 = t2.getAttribute("width");
                if (t2[ve] = {
                    initial: {
                        height: i10,
                        width: a8,
                        style: {
                            display: n6.display,
                            height: n6.height,
                            width: n6.width
                        }
                    }
                }, n6.display = n6.display || "block", null === a8 || "" === a8) {
                    var r6 = we(t2, "width");
                    (void 0) !== r6 && (t2.width = r6);
                }
                if (null === i10 || "" === i10) {
                    if ("" === t2.style.height) t2.height = t2.width / (e9.options.aspectRatio || 2);
                    else {
                        var o6 = we(t2, "height");
                        (void 0) !== r6 && (t2.height = o6);
                    }
                }
            })(t1, e8), n5) : null;
        },
        releaseContext: function(t1) {
            var e8 = t1.canvas;
            if (e8[ve]) {
                var n5 = e8[ve].initial;
                [
                    "height",
                    "width"
                ].forEach(function(t2) {
                    var i10 = n5[t2];
                    H.isNullOrUndef(i10) ? e8.removeAttribute(t2) : e8.setAttribute(t2, i10);
                }), H.each(n5.style || {
                }, function(t2, n6) {
                    e8.style[n6] = t2;
                }), e8.width = e8.width, delete e8[ve];
            }
        },
        addEventListener: function(t1, e8, n6) {
            var i10 = t1.canvas;
            if ("resize" !== e8) {
                var a8 = n6[ve] || (n6[ve] = {
                });
                Se(i10, e8, (a8.proxies || (a8.proxies = {
                }))[t1.id + "_" + e8] = function(e9) {
                    n6(function(t2, e10) {
                        var n7 = ke[t2.type] || t2.type, i11 = H.getRelativePosition(t2, e10);
                        return Pe(n7, e10, i11.x, i11.y, t2);
                    }(e9, t1));
                });
            } else De(i10, n6, t1);
        },
        removeEventListener: function(t1, e8, n6) {
            var i10 = t1.canvas;
            if ("resize" !== e8) {
                var a10 = ((n6[ve] || {
                }).proxies || {
                })[t1.id + "_" + e8];
                a10 && Ce(i10, e8, a10);
            } else Te(i10);
        }
    };
    H.addEvent = Se, H.removeEvent = Ce;
    var Fe = Ie._enabled ? Ie : {
        acquireContext: function(t1) {
            return t1 && t1.canvas && (t1 = t1.canvas), t1 && t1.getContext("2d") || null;
        }
    }, Oe = H.extend({
        initialize: function() {
        },
        acquireContext: function() {
        },
        releaseContext: function() {
        },
        addEventListener: function() {
        },
        removeEventListener: function() {
        }
    }, Fe);
    N._set("global", {
        plugins: {
        }
    });
    var Le = {
        _plugins: [],
        _cacheId: 0,
        register: function(t1) {
            var e8 = this._plugins;
            [].concat(t1).forEach(function(t2) {
                -1 === e8.indexOf(t2) && e8.push(t2);
            }), this._cacheId++;
        },
        unregister: function(t1) {
            var e8 = this._plugins;
            [].concat(t1).forEach(function(t2) {
                var n6 = e8.indexOf(t2);
                -1 !== n6 && e8.splice(n6, 1);
            }), this._cacheId++;
        },
        clear: function() {
            this._plugins = [], this._cacheId++;
        },
        count: function() {
            return this._plugins.length;
        },
        getAll: function() {
            return this._plugins;
        },
        notify: function(t1, e8, n6) {
            var i10, a11, r7, o7, s6, l5 = this.descriptors(t1), u5 = l5.length;
            for(i10 = 0; i10 < u5; ++i10)if ("function" == typeof (s6 = (r7 = (a11 = l5[i10]).plugin)[e8]) && ((o7 = [
                t1
            ].concat(n6 || [])).push(a11.options), false === s6.apply(r7, o7))) return false;
            return true;
        },
        descriptors: function(t1) {
            var e8 = t1.$plugins || (t1.$plugins = {
            });
            if (e8.id === this._cacheId) return e8.descriptors;
            var n6 = [], i10 = [], a11 = t1 && t1.config || {
            }, r7 = a11.options && a11.options.plugins || {
            };
            return this._plugins.concat(a11.plugins || []).forEach(function(t2) {
                if (-1 === n6.indexOf(t2)) {
                    var e9 = t2.id, a12 = r7[e9];
                    false !== a12 && (true === a12 && (a12 = H.clone(N.global.plugins[e9])), n6.push(t2), i10.push({
                        plugin: t2,
                        options: a12 || {
                        }
                    }));
                }
            }), e8.descriptors = i10, e8.id = this._cacheId, i10;
        },
        _invalidate: function(t1) {
            delete t1.$plugins;
        }
    }, Re = {
        constructors: {
        },
        defaults: {
        },
        registerScaleType: function(t1, e8, n6) {
            this.constructors[t1] = e8, this.defaults[t1] = H.clone(n6);
        },
        getScaleConstructor: function(t1) {
            return this.constructors.hasOwnProperty(t1) ? this.constructors[t1] : void 0;
        },
        getScaleDefaults: function(t1) {
            return this.defaults.hasOwnProperty(t1) ? H.merge(Object.create(null), [
                N.scale,
                this.defaults[t1]
            ]) : {
            };
        },
        updateScaleDefaults: function(t1, e8) {
            this.defaults.hasOwnProperty(t1) && (this.defaults[t1] = H.extend(this.defaults[t1], e8));
        },
        addScalesToLayout: function(t1) {
            H.each(t1.scales, function(e8) {
                e8.fullWidth = e8.options.fullWidth, e8.position = e8.options.position, e8.weight = e8.options.weight, pe.addBox(t1, e8);
            });
        }
    }, ze = H.valueOrDefault, Ne = H.rtl.getRtlAdapter;
    N._set("global", {
        tooltips: {
            enabled: true,
            custom: null,
            mode: "nearest",
            position: "average",
            intersect: true,
            backgroundColor: "rgba(0,0,0,0.8)",
            titleFontStyle: "bold",
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleFontColor: "#fff",
            titleAlign: "left",
            bodySpacing: 2,
            bodyFontColor: "#fff",
            bodyAlign: "left",
            footerFontStyle: "bold",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFontColor: "#fff",
            footerAlign: "left",
            yPadding: 6,
            xPadding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            multiKeyBackground: "#fff",
            displayColors: true,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            callbacks: {
                beforeTitle: H.noop,
                title: function(t1, e8) {
                    var n6 = "", i10 = e8.labels, a11 = i10 ? i10.length : 0;
                    if (t1.length > 0) {
                        var r7 = t1[0];
                        r7.label ? n6 = r7.label : r7.xLabel ? n6 = r7.xLabel : a11 > 0 && r7.index < a11 && (n6 = i10[r7.index]);
                    }
                    return n6;
                },
                afterTitle: H.noop,
                beforeBody: H.noop,
                beforeLabel: H.noop,
                label: function(t1, e8) {
                    var n6 = e8.datasets[t1.datasetIndex].label || "";
                    return n6 && (n6 += ": "), H.isNullOrUndef(t1.value) ? n6 += t1.yLabel : n6 += t1.value, n6;
                },
                labelColor: function(t1, e8) {
                    var n6 = e8.getDatasetMeta(t1.datasetIndex).data[t1.index]._view;
                    return {
                        borderColor: n6.borderColor,
                        backgroundColor: n6.backgroundColor
                    };
                },
                labelTextColor: function() {
                    return this._options.bodyFontColor;
                },
                afterLabel: H.noop,
                afterBody: H.noop,
                beforeFooter: H.noop,
                footer: H.noop,
                afterFooter: H.noop
            }
        }
    });
    var Be = {
        average: function(t1) {
            if (!t1.length) return false;
            var e8, n6, i10 = 0, a11 = 0, r8 = 0;
            for(e8 = 0, n6 = t1.length; e8 < n6; ++e8){
                var o7 = t1[e8];
                if (o7 && o7.hasValue()) {
                    var s6 = o7.tooltipPosition();
                    i10 += s6.x, a11 += s6.y, ++r8;
                }
            }
            return {
                x: i10 / r8,
                y: a11 / r8
            };
        },
        nearest: function(t1, e8) {
            var n6, i10, a11, r8 = e8.x, o8 = e8.y, s7 = Number.POSITIVE_INFINITY;
            for(n6 = 0, i10 = t1.length; n6 < i10; ++n6){
                var l5 = t1[n6];
                if (l5 && l5.hasValue()) {
                    var u5 = l5.getCenterPoint(), d3 = H.distanceBetweenPoints(e8, u5);
                    d3 < s7 && (s7 = d3, a11 = l5);
                }
            }
            if (a11) {
                var h2 = a11.tooltipPosition();
                r8 = h2.x, o8 = h2.y;
            }
            return {
                x: r8,
                y: o8
            };
        }
    };
    function Ee(t1, e8) {
        return e8 && (H.isArray(e8) ? Array.prototype.push.apply(t1, e8) : t1.push(e8)), t1;
    }
    function We(t1) {
        return ("string" == typeof t1 || t1 instanceof String) && t1.indexOf("\n") > -1 ? t1.split("\n") : t1;
    }
    function Ve(t1) {
        var e8 = N.global;
        return {
            xPadding: t1.xPadding,
            yPadding: t1.yPadding,
            xAlign: t1.xAlign,
            yAlign: t1.yAlign,
            rtl: t1.rtl,
            textDirection: t1.textDirection,
            bodyFontColor: t1.bodyFontColor,
            _bodyFontFamily: ze(t1.bodyFontFamily, e8.defaultFontFamily),
            _bodyFontStyle: ze(t1.bodyFontStyle, e8.defaultFontStyle),
            _bodyAlign: t1.bodyAlign,
            bodyFontSize: ze(t1.bodyFontSize, e8.defaultFontSize),
            bodySpacing: t1.bodySpacing,
            titleFontColor: t1.titleFontColor,
            _titleFontFamily: ze(t1.titleFontFamily, e8.defaultFontFamily),
            _titleFontStyle: ze(t1.titleFontStyle, e8.defaultFontStyle),
            titleFontSize: ze(t1.titleFontSize, e8.defaultFontSize),
            _titleAlign: t1.titleAlign,
            titleSpacing: t1.titleSpacing,
            titleMarginBottom: t1.titleMarginBottom,
            footerFontColor: t1.footerFontColor,
            _footerFontFamily: ze(t1.footerFontFamily, e8.defaultFontFamily),
            _footerFontStyle: ze(t1.footerFontStyle, e8.defaultFontStyle),
            footerFontSize: ze(t1.footerFontSize, e8.defaultFontSize),
            _footerAlign: t1.footerAlign,
            footerSpacing: t1.footerSpacing,
            footerMarginTop: t1.footerMarginTop,
            caretSize: t1.caretSize,
            cornerRadius: t1.cornerRadius,
            backgroundColor: t1.backgroundColor,
            opacity: 0,
            legendColorBackground: t1.multiKeyBackground,
            displayColors: t1.displayColors,
            borderColor: t1.borderColor,
            borderWidth: t1.borderWidth
        };
    }
    function He(t1, e8) {
        return "center" === e8 ? t1.x + t1.width / 2 : "right" === e8 ? t1.x + t1.width - t1.xPadding : t1.x + t1.xPadding;
    }
    function je(t1) {
        return Ee([], We(t1));
    }
    var qe = K.extend({
        initialize: function() {
            this._model = Ve(this._options), this._lastActive = [];
        },
        getTitle: function() {
            var t1 = this, e8 = t1._options, n6 = e8.callbacks, i10 = n6.beforeTitle.apply(t1, arguments), a11 = n6.title.apply(t1, arguments), r8 = n6.afterTitle.apply(t1, arguments), o8 = [];
            return o8 = Ee(o8, We(i10)), o8 = Ee(o8, We(a11)), o8 = Ee(o8, We(r8));
        },
        getBeforeBody: function() {
            return je(this._options.callbacks.beforeBody.apply(this, arguments));
        },
        getBody: function(t1, e8) {
            var n6 = this, i10 = n6._options.callbacks, a11 = [];
            return H.each(t1, function(t2) {
                var r8 = {
                    before: [],
                    lines: [],
                    after: []
                };
                Ee(r8.before, We(i10.beforeLabel.call(n6, t2, e8))), Ee(r8.lines, i10.label.call(n6, t2, e8)), Ee(r8.after, We(i10.afterLabel.call(n6, t2, e8))), a11.push(r8);
            }), a11;
        },
        getAfterBody: function() {
            return je(this._options.callbacks.afterBody.apply(this, arguments));
        },
        getFooter: function() {
            var t1 = this, e8 = t1._options.callbacks, n6 = e8.beforeFooter.apply(t1, arguments), i10 = e8.footer.apply(t1, arguments), a11 = e8.afterFooter.apply(t1, arguments), r8 = [];
            return r8 = Ee(r8, We(n6)), r8 = Ee(r8, We(i10)), r8 = Ee(r8, We(a11));
        },
        update: function(t1) {
            var e8, n6, i10, a11, r8, o8, s7, l6, u6, d4, h3 = this, c1 = h3._options, f1 = h3._model, g1 = h3._model = Ve(c1), p1 = h3._active, m1 = h3._data, v1 = {
                xAlign: f1.xAlign,
                yAlign: f1.yAlign
            }, b2 = {
                x: f1.x,
                y: f1.y
            }, x2 = {
                width: f1.width,
                height: f1.height
            }, y2 = {
                x: f1.caretX,
                y: f1.caretY
            };
            if (p1.length) {
                g1.opacity = 1;
                var _2 = [], k2 = [];
                y2 = Be[c1.position].call(h3, p1, h3._eventPosition);
                var w2 = [];
                for(e8 = 0, n6 = p1.length; e8 < n6; ++e8)w2.push((i10 = p1[e8], a11 = void 0, r8 = void 0, o8 = void 0, s7 = void 0, l6 = void 0, u6 = void 0, d4 = void 0, a11 = i10._xScale, r8 = i10._yScale || i10._scale, o8 = i10._index, s7 = i10._datasetIndex, l6 = i10._chart.getDatasetMeta(s7).controller, u6 = l6._getIndexScale(), d4 = l6._getValueScale(), {
                    xLabel: a11 ? a11.getLabelForIndex(o8, s7) : "",
                    yLabel: r8 ? r8.getLabelForIndex(o8, s7) : "",
                    label: u6 ? "" + u6.getLabelForIndex(o8, s7) : "",
                    value: d4 ? "" + d4.getLabelForIndex(o8, s7) : "",
                    index: o8,
                    datasetIndex: s7,
                    x: i10._model.x,
                    y: i10._model.y
                }));
                c1.filter && (w2 = w2.filter(function(t2) {
                    return c1.filter(t2, m1);
                })), c1.itemSort && (w2 = w2.sort(function(t2, e10) {
                    return c1.itemSort(t2, e10, m1);
                })), H.each(w2, function(t2) {
                    _2.push(c1.callbacks.labelColor.call(h3, t2, h3._chart)), k2.push(c1.callbacks.labelTextColor.call(h3, t2, h3._chart));
                }), g1.title = h3.getTitle(w2, m1), g1.beforeBody = h3.getBeforeBody(w2, m1), g1.body = h3.getBody(w2, m1), g1.afterBody = h3.getAfterBody(w2, m1), g1.footer = h3.getFooter(w2, m1), g1.x = y2.x, g1.y = y2.y, g1.caretPadding = c1.caretPadding, g1.labelColors = _2, g1.labelTextColors = k2, g1.dataPoints = w2, x2 = (function(t2, e10) {
                    var n7 = t2._chart.ctx, i11 = 2 * e10.yPadding, a13 = 0, r9 = e10.body, o9 = r9.reduce(function(t3, e11) {
                        return t3 + e11.before.length + e11.lines.length + e11.after.length;
                    }, 0);
                    o9 += e10.beforeBody.length + e10.afterBody.length;
                    var s8 = e10.title.length, l7 = e10.footer.length, u7 = e10.titleFontSize, d5 = e10.bodyFontSize, h4 = e10.footerFontSize;
                    i11 += s8 * u7, i11 += s8 ? (s8 - 1) * e10.titleSpacing : 0, i11 += s8 ? e10.titleMarginBottom : 0, i11 += o9 * d5, i11 += o9 ? (o9 - 1) * e10.bodySpacing : 0, i11 += l7 ? e10.footerMarginTop : 0, i11 += l7 * h4, i11 += l7 ? (l7 - 1) * e10.footerSpacing : 0;
                    var c2 = 0, f2 = function(t3) {
                        a13 = Math.max(a13, n7.measureText(t3).width + c2);
                    };
                    return n7.font = H.fontString(u7, e10._titleFontStyle, e10._titleFontFamily), H.each(e10.title, f2), n7.font = H.fontString(d5, e10._bodyFontStyle, e10._bodyFontFamily), H.each(e10.beforeBody.concat(e10.afterBody), f2), c2 = e10.displayColors ? d5 + 2 : 0, H.each(r9, function(t3) {
                        H.each(t3.before, f2), H.each(t3.lines, f2), H.each(t3.after, f2);
                    }), c2 = 0, n7.font = H.fontString(h4, e10._footerFontStyle, e10._footerFontFamily), H.each(e10.footer, f2), {
                        width: a13 += 2 * e10.xPadding,
                        height: i11
                    };
                })(this, g1), b2 = (function(t2, e10, n7, i11) {
                    var a13 = t2.x, r9 = t2.y, o9 = t2.caretSize, s8 = t2.caretPadding, l7 = t2.cornerRadius, u7 = n7.xAlign, d5 = n7.yAlign, h4 = o9 + s8, c2 = l7 + s8;
                    return "right" === u7 ? a13 -= e10.width : "center" === u7 && ((a13 -= e10.width / 2) + e10.width > i11.width && (a13 = i11.width - e10.width), a13 < 0 && (a13 = 0)), "top" === d5 ? r9 += h4 : r9 -= "bottom" === d5 ? e10.height + h4 : e10.height / 2, "center" === d5 ? "left" === u7 ? a13 += h4 : "right" === u7 && (a13 -= h4) : "left" === u7 ? a13 -= c2 : "right" === u7 && (a13 += c2), {
                        x: a13,
                        y: r9
                    };
                })(g1, x2, v1 = function(t2, e10) {
                    var n7, i11, a13, r9, o9, s8 = t2._model, l7 = t2._chart, u7 = t2._chart.chartArea, d5 = "center", h4 = "center";
                    s8.y < e10.height ? h4 = "top" : s8.y > l7.height - e10.height && (h4 = "bottom");
                    var c2 = (u7.left + u7.right) / 2, f2 = (u7.top + u7.bottom) / 2;
                    "center" === h4 ? (n7 = function(t3) {
                        return t3 <= c2;
                    }, i11 = function(t3) {
                        return t3 > c2;
                    }) : (n7 = function(t3) {
                        return t3 <= e10.width / 2;
                    }, i11 = function(t3) {
                        return t3 >= l7.width - e10.width / 2;
                    }), a13 = function(t3) {
                        return t3 + e10.width + s8.caretSize + s8.caretPadding > l7.width;
                    }, r9 = function(t3) {
                        return t3 - e10.width - s8.caretSize - s8.caretPadding < 0;
                    }, o9 = function(t3) {
                        return t3 <= f2 ? "top" : "bottom";
                    }, n7(s8.x) ? (d5 = "left", a13(s8.x) && (d5 = "center", h4 = o9(s8.y))) : i11(s8.x) && (d5 = "right", r9(s8.x) && (d5 = "center", h4 = o9(s8.y)));
                    var g2 = t2._options;
                    return {
                        xAlign: g2.xAlign ? g2.xAlign : d5,
                        yAlign: g2.yAlign ? g2.yAlign : h4
                    };
                }(this, x2), h3._chart);
            } else g1.opacity = 0;
            return g1.xAlign = v1.xAlign, g1.yAlign = v1.yAlign, g1.x = b2.x, g1.y = b2.y, g1.width = x2.width, g1.height = x2.height, g1.caretX = y2.x, g1.caretY = y2.y, h3._model = g1, t1 && c1.custom && c1.custom.call(h3, g1), h3;
        },
        drawCaret: function(t1, e8) {
            var n6 = this._chart.ctx, i10 = this._view, a11 = this.getCaretPosition(t1, e8, i10);
            n6.lineTo(a11.x1, a11.y1), n6.lineTo(a11.x2, a11.y2), n6.lineTo(a11.x3, a11.y3);
        },
        getCaretPosition: function(t1, e8, n6) {
            var i10, a11, r8, o8, s7, l6, u6 = n6.caretSize, d4 = n6.cornerRadius, h3 = n6.xAlign, c1 = n6.yAlign, f1 = t1.x, g1 = t1.y, p1 = e8.width, m1 = e8.height;
            if ("center" === c1) s7 = g1 + m1 / 2, "left" === h3 ? (a11 = (i10 = f1) - u6, r8 = i10, o8 = s7 + u6, l6 = s7 - u6) : (a11 = (i10 = f1 + p1) + u6, r8 = i10, o8 = s7 - u6, l6 = s7 + u6);
            else if ("left" === h3 ? (i10 = (a11 = f1 + d4 + u6) - u6, r8 = a11 + u6) : "right" === h3 ? (i10 = (a11 = f1 + p1 - d4 - u6) - u6, r8 = a11 + u6) : (i10 = (a11 = n6.caretX) - u6, r8 = a11 + u6), "top" === c1) s7 = (o8 = g1) - u6, l6 = o8;
            else {
                s7 = (o8 = g1 + m1) + u6, l6 = o8;
                var v1 = r8;
                r8 = i10, i10 = v1;
            }
            return {
                x1: i10,
                x2: a11,
                x3: r8,
                y1: o8,
                y2: s7,
                y3: l6
            };
        },
        drawTitle: function(t1, e8, n6) {
            var i10, a11, r8, o8 = e8.title, s7 = o8.length;
            if (s7) {
                var l6 = Ne(e8.rtl, e8.x, e8.width);
                for(t1.x = He(e8, e8._titleAlign), n6.textAlign = l6.textAlign(e8._titleAlign), n6.textBaseline = "middle", i10 = e8.titleFontSize, a11 = e8.titleSpacing, n6.fillStyle = e8.titleFontColor, n6.font = H.fontString(i10, e8._titleFontStyle, e8._titleFontFamily), r8 = 0; r8 < s7; ++r8)n6.fillText(o8[r8], l6.x(t1.x), t1.y + i10 / 2), t1.y += i10 + a11, r8 + 1 === s7 && (t1.y += e8.titleMarginBottom - a11);
            }
        },
        drawBody: function(t1, e8, n6) {
            var i10, a11, r8, o8, s7, l7, u6, d4, h3 = e8.bodyFontSize, c1 = e8.bodySpacing, f1 = e8._bodyAlign, g1 = e8.body, p1 = e8.displayColors, m1 = 0, v2 = p1 ? He(e8, "left") : 0, b2 = Ne(e8.rtl, e8.x, e8.width), x2 = function(e10) {
                n6.fillText(e10, b2.x(t1.x + m1), t1.y + h3 / 2), t1.y += h3 + c1;
            }, y2 = b2.textAlign(f1);
            for(n6.textAlign = f1, n6.textBaseline = "middle", n6.font = H.fontString(h3, e8._bodyFontStyle, e8._bodyFontFamily), t1.x = He(e8, y2), n6.fillStyle = e8.bodyFontColor, H.each(e8.beforeBody, x2), m1 = p1 && "right" !== y2 ? "center" === f1 ? h3 / 2 + 1 : h3 + 2 : 0, s7 = 0, u6 = g1.length; s7 < u6; ++s7){
                for(i10 = g1[s7], a11 = e8.labelTextColors[s7], r8 = e8.labelColors[s7], n6.fillStyle = a11, H.each(i10.before, x2), l7 = 0, d4 = (o8 = i10.lines).length; l7 < d4; ++l7){
                    if (p1) {
                        var _3 = b2.x(v2);
                        n6.fillStyle = e8.legendColorBackground, n6.fillRect(b2.leftForLtr(_3, h3), t1.y, h3, h3), n6.lineWidth = 1, n6.strokeStyle = r8.borderColor, n6.strokeRect(b2.leftForLtr(_3, h3), t1.y, h3, h3), n6.fillStyle = r8.backgroundColor, n6.fillRect(b2.leftForLtr(b2.xPlus(_3, 1), h3 - 2), t1.y + 1, h3 - 2, h3 - 2), n6.fillStyle = a11;
                    }
                    x2(o8[l7]);
                }
                H.each(i10.after, x2);
            }
            m1 = 0, H.each(e8.afterBody, x2), t1.y -= c1;
        },
        drawFooter: function(t1, e8, n6) {
            var i10, a11, r8 = e8.footer, o8 = r8.length;
            if (o8) {
                var s7 = Ne(e8.rtl, e8.x, e8.width);
                for(t1.x = He(e8, e8._footerAlign), t1.y += e8.footerMarginTop, n6.textAlign = s7.textAlign(e8._footerAlign), n6.textBaseline = "middle", i10 = e8.footerFontSize, n6.fillStyle = e8.footerFontColor, n6.font = H.fontString(i10, e8._footerFontStyle, e8._footerFontFamily), a11 = 0; a11 < o8; ++a11)n6.fillText(r8[a11], s7.x(t1.x), t1.y + i10 / 2), t1.y += i10 + e8.footerSpacing;
            }
        },
        drawBackground: function(t1, e8, n6, i10) {
            n6.fillStyle = e8.backgroundColor, n6.strokeStyle = e8.borderColor, n6.lineWidth = e8.borderWidth;
            var a11 = e8.xAlign, r8 = e8.yAlign, o8 = t1.x, s8 = t1.y, l7 = i10.width, u6 = i10.height, d4 = e8.cornerRadius;
            n6.beginPath(), n6.moveTo(o8 + d4, s8), "top" === r8 && this.drawCaret(t1, i10), n6.lineTo(o8 + l7 - d4, s8), n6.quadraticCurveTo(o8 + l7, s8, o8 + l7, s8 + d4), "center" === r8 && "right" === a11 && this.drawCaret(t1, i10), n6.lineTo(o8 + l7, s8 + u6 - d4), n6.quadraticCurveTo(o8 + l7, s8 + u6, o8 + l7 - d4, s8 + u6), "bottom" === r8 && this.drawCaret(t1, i10), n6.lineTo(o8 + d4, s8 + u6), n6.quadraticCurveTo(o8, s8 + u6, o8, s8 + u6 - d4), "center" === r8 && "left" === a11 && this.drawCaret(t1, i10), n6.lineTo(o8, s8 + d4), n6.quadraticCurveTo(o8, s8, o8 + d4, s8), n6.closePath(), n6.fill(), e8.borderWidth > 0 && n6.stroke();
        },
        draw: function() {
            var t1 = this._chart.ctx, e8 = this._view;
            if (0 !== e8.opacity) {
                var n6 = {
                    width: e8.width,
                    height: e8.height
                }, i10 = {
                    x: e8.x,
                    y: e8.y
                }, a11 = Math.abs(e8.opacity < 0.001) ? 0 : e8.opacity, r8 = e8.title.length || e8.beforeBody.length || e8.body.length || e8.afterBody.length || e8.footer.length;
                this._options.enabled && r8 && (t1.save(), t1.globalAlpha = a11, this.drawBackground(i10, e8, t1, n6), i10.y += e8.yPadding, H.rtl.overrideTextDirection(t1, e8.textDirection), this.drawTitle(i10, e8, t1), this.drawBody(i10, e8, t1), this.drawFooter(i10, e8, t1), H.rtl.restoreTextDirection(t1, e8.textDirection), t1.restore());
            }
        },
        handleEvent: function(t1) {
            var e8, n7 = this, i11 = n7._options;
            return n7._lastActive = n7._lastActive || [], "mouseout" === t1.type ? n7._active = [] : (n7._active = n7._chart.getElementsAtEventForMode(t1, i11.mode, i11), i11.reverse && n7._active.reverse()), (e8 = !H.arrayEquals(n7._active, n7._lastActive)) && (n7._lastActive = n7._active, (i11.enabled || i11.custom) && (n7._eventPosition = {
                x: t1.x,
                y: t1.y
            }, n7.update(true), n7.pivot())), e8;
        }
    }), Ue = Be, Ye = qe;
    Ye.positioners = Ue;
    var Ge = H.valueOrDefault;
    function Xe() {
        return H.merge(Object.create(null), [].slice.call(arguments), {
            merger: function(t1, e8, n7, i11) {
                if ("xAxes" === t1 || "yAxes" === t1) {
                    var a13, r9, o8, s8 = n7[t1].length;
                    for(e8[t1] || (e8[t1] = []), a13 = 0; a13 < s8; ++a13)o8 = n7[t1][a13], r9 = Ge(o8.type, "xAxes" === t1 ? "category" : "linear"), a13 >= e8[t1].length && e8[t1].push({
                    }), !e8[t1][a13].type || o8.type && o8.type !== e8[t1][a13].type ? H.merge(e8[t1][a13], [
                        Re.getScaleDefaults(r9),
                        o8
                    ]) : H.merge(e8[t1][a13], o8);
                } else H._merger(t1, e8, n7, i11);
            }
        });
    }
    function Ke() {
        return H.merge(Object.create(null), [].slice.call(arguments), {
            merger: function(t1, e8, n7, i11) {
                var a14 = e8[t1] || Object.create(null), r10 = n7[t1];
                "scales" === t1 ? e8[t1] = Xe(a14, r10) : "scale" === t1 ? e8[t1] = H.merge(a14, [
                    Re.getScaleDefaults(r10.type),
                    r10
                ]) : H._merger(t1, e8, n7, i11);
            }
        });
    }
    function Ze(t1) {
        var e8 = t1.options;
        H.each(t1.scales, function(e10) {
            pe.removeBox(t1, e10);
        }), e8 = Ke(N.global, N[t1.config.type], e8), t1.options = t1.config.options = e8, t1.ensureScalesHaveIDs(), t1.buildOrUpdateScales(), t1.tooltip._options = e8.tooltips, t1.tooltip.initialize();
    }
    function $e(t1, e8, n7) {
        var i11, a14 = function(t2) {
            return t2.id === i11;
        };
        do i11 = e8 + n7++;
        while (H.findIndex(t1, a14) >= 0)
        return i11;
    }
    function Je(t1) {
        return "top" === t1 || "bottom" === t1;
    }
    function Qe(t1, e8) {
        return function(n7, i11) {
            return n7[t1] === i11[t1] ? n7[e8] - i11[e8] : n7[t1] - i11[t1];
        };
    }
    N._set("global", {
        elements: {
        },
        events: [
            "mousemove",
            "mouseout",
            "click",
            "touchstart",
            "touchmove"
        ],
        hover: {
            onHover: null,
            mode: "nearest",
            intersect: true,
            animationDuration: 400
        },
        onClick: null,
        maintainAspectRatio: true,
        responsive: true,
        responsiveAnimationDuration: 0
    });
    var tn = function(t1, e8) {
        return this.construct(t1, e8), this;
    };
    H.extend(tn.prototype, {
        construct: function(t1, e8) {
            var n7 = this;
            e8 = (function(t2) {
                var e10 = (t2 = t2 || Object.create(null)).data = t2.data || {
                };
                return e10.datasets = e10.datasets || [], e10.labels = e10.labels || [], t2.options = Ke(N.global, N[t2.type], t2.options || {
                }), t2;
            })(e8);
            var i11 = Oe.acquireContext(t1, e8), a14 = i11 && i11.canvas, r10 = a14 && a14.height, o9 = a14 && a14.width;
            n7.id = H.uid(), n7.ctx = i11, n7.canvas = a14, n7.config = e8, n7.width = o9, n7.height = r10, n7.aspectRatio = r10 ? o9 / r10 : null, n7.options = e8.options, n7._bufferedRender = false, n7._layers = [], n7.chart = n7, n7.controller = n7, tn.instances[n7.id] = n7, Object.defineProperty(n7, "data", {
                get: function() {
                    return n7.config.data;
                },
                set: function(t2) {
                    n7.config.data = t2;
                }
            }), i11 && a14 ? (n7.initialize(), n7.update()) : console.error("Failed to create chart: can't acquire context from the given item");
        },
        initialize: function() {
            var t1 = this;
            return Le.notify(t1, "beforeInit"), H.retinaScale(t1, t1.options.devicePixelRatio), t1.bindEvents(), t1.options.responsive && t1.resize(true), t1.initToolTip(), Le.notify(t1, "afterInit"), t1;
        },
        clear: function() {
            return H.canvas.clear(this), this;
        },
        stop: function() {
            return J.cancelAnimation(this), this;
        },
        resize: function(t1) {
            var e8 = this, n7 = e8.options, i11 = e8.canvas, a14 = n7.maintainAspectRatio && e8.aspectRatio || null, r10 = Math.max(0, Math.floor(H.getMaximumWidth(i11))), o9 = Math.max(0, Math.floor(a14 ? r10 / a14 : H.getMaximumHeight(i11)));
            if ((e8.width !== r10 || e8.height !== o9) && (i11.width = e8.width = r10, i11.height = e8.height = o9, i11.style.width = r10 + "px", i11.style.height = o9 + "px", H.retinaScale(e8, n7.devicePixelRatio), !t1)) {
                var s9 = {
                    width: r10,
                    height: o9
                };
                Le.notify(e8, "resize", [
                    s9
                ]), n7.onResize && n7.onResize(e8, s9), e8.stop(), e8.update({
                    duration: n7.responsiveAnimationDuration
                });
            }
        },
        ensureScalesHaveIDs: function() {
            var t1 = this.options, e8 = t1.scales || {
            }, n7 = t1.scale;
            H.each(e8.xAxes, function(t2, n8) {
                t2.id || (t2.id = $e(e8.xAxes, "x-axis-", n8));
            }), H.each(e8.yAxes, function(t2, n8) {
                t2.id || (t2.id = $e(e8.yAxes, "y-axis-", n8));
            }), n7 && (n7.id = n7.id || "scale");
        },
        buildOrUpdateScales: function() {
            var t1 = this, e8 = t1.options, n7 = t1.scales || {
            }, i11 = [], a14 = Object.keys(n7).reduce(function(t2, e10) {
                return t2[e10] = false, t2;
            }, {
            });
            e8.scales && (i11 = i11.concat((e8.scales.xAxes || []).map(function(t2) {
                return {
                    options: t2,
                    dtype: "category",
                    dposition: "bottom"
                };
            }), (e8.scales.yAxes || []).map(function(t2) {
                return {
                    options: t2,
                    dtype: "linear",
                    dposition: "left"
                };
            }))), e8.scale && i11.push({
                options: e8.scale,
                dtype: "radialLinear",
                isDefault: true,
                dposition: "chartArea"
            }), H.each(i11, function(e10) {
                var i12 = e10.options, r10 = i12.id, o9 = Ge(i12.type, e10.dtype);
                Je(i12.position) !== Je(e10.dposition) && (i12.position = e10.dposition), a14[r10] = true;
                var s10 = null;
                if (r10 in n7 && n7[r10].type === o9) (s10 = n7[r10]).options = i12, s10.ctx = t1.ctx, s10.chart = t1;
                else {
                    var l7 = Re.getScaleConstructor(o9);
                    if (!l7) return;
                    s10 = new l7({
                        id: r10,
                        type: o9,
                        options: i12,
                        ctx: t1.ctx,
                        chart: t1
                    }), n7[s10.id] = s10;
                }
                s10.mergeTicksOptions(), e10.isDefault && (t1.scale = s10);
            }), H.each(a14, function(t2, e10) {
                t2 || delete n7[e10];
            }), t1.scales = n7, Re.addScalesToLayout(this);
        },
        buildOrUpdateControllers: function() {
            var t1, e8, n7 = this, i11 = [], a14 = n7.data.datasets;
            for(t1 = 0, e8 = a14.length; t1 < e8; t1++){
                var r10 = a14[t1], o9 = n7.getDatasetMeta(t1), s10 = r10.type || n7.config.type;
                if (o9.type && o9.type !== s10 && (n7.destroyDatasetMeta(t1), o9 = n7.getDatasetMeta(t1)), o9.type = s10, o9.order = r10.order || 0, o9.index = t1, o9.controller) o9.controller.updateIndex(t1), o9.controller.linkScales();
                else {
                    var l8 = Jt[o9.type];
                    if ((void 0) === l8) throw new Error('"' + o9.type + '" is not a chart type.');
                    o9.controller = new l8(n7, t1), i11.push(o9.controller);
                }
            }
            return i11;
        },
        resetElements: function() {
            var t1 = this;
            H.each(t1.data.datasets, function(e8, n7) {
                t1.getDatasetMeta(n7).controller.reset();
            }, t1);
        },
        reset: function() {
            this.resetElements(), this.tooltip.initialize();
        },
        update: function(t1) {
            var e8, n7, i11 = this;
            if (t1 && "object" == typeof t1 || (t1 = {
                duration: t1,
                lazy: arguments[1]
            }), Ze(i11), Le._invalidate(i11), false !== Le.notify(i11, "beforeUpdate")) {
                i11.tooltip._data = i11.data;
                var a14 = i11.buildOrUpdateControllers();
                for(e8 = 0, n7 = i11.data.datasets.length; e8 < n7; e8++)i11.getDatasetMeta(e8).controller.buildOrUpdateElements();
                i11.updateLayout(), i11.options.animation && i11.options.animation.duration && H.each(a14, function(t2) {
                    t2.reset();
                }), i11.updateDatasets(), i11.tooltip.initialize(), i11.lastActive = [], Le.notify(i11, "afterUpdate"), i11._layers.sort(Qe("z", "_idx")), i11._bufferedRender ? i11._bufferedRequest = {
                    duration: t1.duration,
                    easing: t1.easing,
                    lazy: t1.lazy
                } : i11.render(t1);
            }
        },
        updateLayout: function() {
            var t1 = this;
            false !== Le.notify(t1, "beforeLayout") && (pe.update(this, this.width, this.height), t1._layers = [], H.each(t1.boxes, function(e8) {
                e8._configure && e8._configure(), t1._layers.push.apply(t1._layers, e8._layers());
            }, t1), t1._layers.forEach(function(t2, e8) {
                t2._idx = e8;
            }), Le.notify(t1, "afterScaleUpdate"), Le.notify(t1, "afterLayout"));
        },
        updateDatasets: function() {
            if (false !== Le.notify(this, "beforeDatasetsUpdate")) {
                for(var t1 = 0, e8 = this.data.datasets.length; t1 < e8; ++t1)this.updateDataset(t1);
                Le.notify(this, "afterDatasetsUpdate");
            }
        },
        updateDataset: function(t2) {
            var e10 = this.getDatasetMeta(t2), n7 = {
                meta: e10,
                index: t2
            };
            false !== Le.notify(this, "beforeDatasetUpdate", [
                n7
            ]) && (e10.controller._update(), Le.notify(this, "afterDatasetUpdate", [
                n7
            ]));
        },
        render: function(t2) {
            var e10 = this;
            t2 && "object" == typeof t2 || (t2 = {
                duration: t2,
                lazy: arguments[1]
            });
            var n7 = e10.options.animation, i11 = Ge(t2.duration, n7 && n7.duration), a15 = t2.lazy;
            if (false !== Le.notify(e10, "beforeRender")) {
                var r11 = function(t3) {
                    Le.notify(e10, "afterRender"), H.callback(n7 && n7.onComplete, [
                        t3
                    ], e10);
                };
                if (n7 && i11) {
                    var o10 = new $({
                        numSteps: i11 / 16.66,
                        easing: t2.easing || n7.easing,
                        render: function(t3, e11) {
                            var n8 = H.easing.effects[e11.easing], i12 = e11.currentStep, a16 = i12 / e11.numSteps;
                            t3.draw(n8(a16), a16, i12);
                        },
                        onAnimationProgress: n7.onProgress,
                        onAnimationComplete: r11
                    });
                    J.addAnimation(e10, o10, i11, a15);
                } else e10.draw(), r11(new $({
                    numSteps: 0,
                    chart: e10
                }));
                return e10;
            }
        },
        draw: function(t2) {
            var e10, n7, i11 = this;
            if (i11.clear(), H.isNullOrUndef(t2) && (t2 = 1), i11.transition(t2), !(i11.width <= 0 || i11.height <= 0) && false !== Le.notify(i11, "beforeDraw", [
                t2
            ])) {
                for(n7 = i11._layers, e10 = 0; e10 < n7.length && n7[e10].z <= 0; ++e10)n7[e10].draw(i11.chartArea);
                for(i11.drawDatasets(t2); e10 < n7.length; ++e10)n7[e10].draw(i11.chartArea);
                i11._drawTooltip(t2), Le.notify(i11, "afterDraw", [
                    t2
                ]);
            }
        },
        transition: function(t2) {
            for(var e10 = 0, n7 = (this.data.datasets || []).length; e10 < n7; ++e10)this.isDatasetVisible(e10) && this.getDatasetMeta(e10).controller.transition(t2);
            this.tooltip.transition(t2);
        },
        _getSortedDatasetMetas: function(t2) {
            var e10, n7, i11 = [];
            for(e10 = 0, n7 = (this.data.datasets || []).length; e10 < n7; ++e10)t2 && !this.isDatasetVisible(e10) || i11.push(this.getDatasetMeta(e10));
            return i11.sort(Qe("order", "index")), i11;
        },
        _getSortedVisibleDatasetMetas: function() {
            return this._getSortedDatasetMetas(true);
        },
        drawDatasets: function(t2) {
            var e10, n7;
            if (false !== Le.notify(this, "beforeDatasetsDraw", [
                t2
            ])) {
                for(n7 = (e10 = this._getSortedVisibleDatasetMetas()).length - 1; n7 >= 0; --n7)this.drawDataset(e10[n7], t2);
                Le.notify(this, "afterDatasetsDraw", [
                    t2
                ]);
            }
        },
        drawDataset: function(t2, e10) {
            var n7 = {
                meta: t2,
                index: t2.index,
                easingValue: e10
            };
            false !== Le.notify(this, "beforeDatasetDraw", [
                n7
            ]) && (t2.controller.draw(e10), Le.notify(this, "afterDatasetDraw", [
                n7
            ]));
        },
        _drawTooltip: function(t2) {
            var e10 = this.tooltip, n7 = {
                tooltip: e10,
                easingValue: t2
            };
            false !== Le.notify(this, "beforeTooltipDraw", [
                n7
            ]) && (e10.draw(), Le.notify(this, "afterTooltipDraw", [
                n7
            ]));
        },
        getElementAtEvent: function(t2) {
            return re.modes.single(this, t2);
        },
        getElementsAtEvent: function(t2) {
            return re.modes.label(this, t2, {
                intersect: true
            });
        },
        getElementsAtXAxis: function(t2) {
            return re.modes["x-axis"](this, t2, {
                intersect: true
            });
        },
        getElementsAtEventForMode: function(t2, e10, n7) {
            var i11 = re.modes[e10];
            return "function" == typeof i11 ? i11(this, t2, n7) : [];
        },
        getDatasetAtEvent: function(t2) {
            return re.modes.dataset(this, t2, {
                intersect: true
            });
        },
        getDatasetMeta: function(t2) {
            var e10 = this.data.datasets[t2];
            e10._meta || (e10._meta = {
            });
            var n7 = e10._meta[this.id];
            return n7 || (n7 = e10._meta[this.id] = {
                type: null,
                data: [],
                dataset: null,
                controller: null,
                hidden: null,
                xAxisID: null,
                yAxisID: null,
                order: e10.order || 0,
                index: t2
            }), n7;
        },
        getVisibleDatasetCount: function() {
            for(var t2 = 0, e10 = 0, n7 = this.data.datasets.length; e10 < n7; ++e10)this.isDatasetVisible(e10) && t2++;
            return t2;
        },
        isDatasetVisible: function(t2) {
            var e10 = this.getDatasetMeta(t2);
            return "boolean" == typeof e10.hidden ? !e10.hidden : !this.data.datasets[t2].hidden;
        },
        generateLegend: function() {
            return this.options.legendCallback(this);
        },
        destroyDatasetMeta: function(t2) {
            var e10 = this.id, n7 = this.data.datasets[t2], i11 = n7._meta && n7._meta[e10];
            i11 && (i11.controller.destroy(), delete n7._meta[e10]);
        },
        destroy: function() {
            var t2, e10, n7 = this, i11 = n7.canvas;
            for(n7.stop(), t2 = 0, e10 = n7.data.datasets.length; t2 < e10; ++t2)n7.destroyDatasetMeta(t2);
            i11 && (n7.unbindEvents(), H.canvas.clear(n7), Oe.releaseContext(n7.ctx), n7.canvas = null, n7.ctx = null), Le.notify(n7, "destroy"), delete tn.instances[n7.id];
        },
        toBase64Image: function() {
            return this.canvas.toDataURL.apply(this.canvas, arguments);
        },
        initToolTip: function() {
            var t2 = this;
            t2.tooltip = new Ye({
                _chart: t2,
                _chartInstance: t2,
                _data: t2.data,
                _options: t2.options.tooltips
            }, t2);
        },
        bindEvents: function() {
            var t2 = this, e10 = t2._listeners = {
            }, n7 = function() {
                t2.eventHandler.apply(t2, arguments);
            };
            H.each(t2.options.events, function(i11) {
                Oe.addEventListener(t2, i11, n7), e10[i11] = n7;
            }), t2.options.responsive && (n7 = function() {
                t2.resize();
            }, Oe.addEventListener(t2, "resize", n7), e10.resize = n7);
        },
        unbindEvents: function() {
            var t2 = this, e10 = t2._listeners;
            e10 && (delete t2._listeners, H.each(e10, function(e11, n7) {
                Oe.removeEventListener(t2, n7, e11);
            }));
        },
        updateHoverStyle: function(t2, e10, n7) {
            var i11, a15, r12, o11 = n7 ? "set" : "remove";
            for(a15 = 0, r12 = t2.length; a15 < r12; ++a15)(i11 = t2[a15]) && this.getDatasetMeta(i11._datasetIndex).controller[o11 + "HoverStyle"](i11);
            "dataset" === e10 && this.getDatasetMeta(t2[0]._datasetIndex).controller["_" + o11 + "DatasetHoverStyle"]();
        },
        eventHandler: function(t2) {
            var e10 = this, n7 = e10.tooltip;
            if (false !== Le.notify(e10, "beforeEvent", [
                t2
            ])) {
                e10._bufferedRender = true, e10._bufferedRequest = null;
                var i11 = e10.handleEvent(t2);
                n7 && (i11 = n7._start ? n7.handleEvent(t2) : i11 | n7.handleEvent(t2)), Le.notify(e10, "afterEvent", [
                    t2
                ]);
                var a15 = e10._bufferedRequest;
                return a15 ? e10.render(a15) : i11 && !e10.animating && (e10.stop(), e10.render({
                    duration: e10.options.hover.animationDuration,
                    lazy: true
                })), e10._bufferedRender = false, e10._bufferedRequest = null, e10;
            }
        },
        handleEvent: function(t2) {
            var e10, n7 = this, i12 = n7.options || {
            }, a16 = i12.hover;
            return n7.lastActive = n7.lastActive || [], "mouseout" === t2.type ? n7.active = [] : n7.active = n7.getElementsAtEventForMode(t2, a16.mode, a16), H.callback(i12.onHover || i12.hover.onHover, [
                t2.native,
                n7.active
            ], n7), "mouseup" !== t2.type && "click" !== t2.type || i12.onClick && i12.onClick.call(n7, t2.native, n7.active), n7.lastActive.length && n7.updateHoverStyle(n7.lastActive, a16.mode, false), n7.active.length && a16.mode && n7.updateHoverStyle(n7.active, a16.mode, true), e10 = !H.arrayEquals(n7.active, n7.lastActive), n7.lastActive = n7.active, e10;
        }
    }), tn.instances = {
    };
    var en = tn;
    tn.Controller = tn, tn.types = {
    }, H.configMerge = Ke, H.scaleMerge = Xe;
    function nn() {
        throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.");
    }
    function an(t2) {
        this.options = t2 || {
        };
    }
    H.extend(an.prototype, {
        formats: nn,
        parse: nn,
        format: nn,
        add: nn,
        diff: nn,
        startOf: nn,
        endOf: nn,
        _create: function(t2) {
            return t2;
        }
    }), an.override = function(t2) {
        H.extend(an.prototype, t2);
    };
    var rn = {
        _date: an
    }, on = {
        formatters: {
            values: function(t2) {
                return H.isArray(t2) ? t2 : "" + t2;
            },
            linear: function(t2, e10, n7) {
                var i12 = n7.length > 3 ? n7[2] - n7[1] : n7[1] - n7[0];
                Math.abs(i12) > 1 && t2 !== Math.floor(t2) && (i12 = t2 - Math.floor(t2));
                var a16 = H.log10(Math.abs(i12)), r12 = "";
                if (0 !== t2) {
                    if (Math.max(Math.abs(n7[0]), Math.abs(n7[n7.length - 1])) < 0.0001) {
                        var o11 = H.log10(Math.abs(t2)), s11 = Math.floor(o11) - Math.floor(a16);
                        s11 = Math.max(Math.min(s11, 20), 0), r12 = t2.toExponential(s11);
                    } else {
                        var l9 = -1 * Math.floor(a16);
                        l9 = Math.max(Math.min(l9, 20), 0), r12 = t2.toFixed(l9);
                    }
                } else r12 = "0";
                return r12;
            },
            logarithmic: function(t2, e10, n7) {
                var i12 = t2 / Math.pow(10, Math.floor(H.log10(t2)));
                return 0 === t2 ? "0" : 1 === i12 || 2 === i12 || 5 === i12 || 0 === e10 || e10 === n7.length - 1 ? t2.toExponential() : "";
            }
        }
    }, sn = H.isArray, ln = H.isNullOrUndef, un = H.valueOrDefault, dn = H.valueAtIndexOrDefault;
    function hn(t2, e10, n7) {
        var i12, a16 = t2.getTicks().length, r12 = Math.min(e10, a16 - 1), o12 = t2.getPixelForTick(r12), s12 = t2._startPixel, l10 = t2._endPixel;
        if (!(n7 && (i12 = 1 === a16 ? Math.max(o12 - s12, l10 - o12) : 0 === e10 ? (t2.getPixelForTick(1) - o12) / 2 : (o12 - t2.getPixelForTick(r12 - 1)) / 2, (o12 += r12 < e10 ? i12 : -i12) < s12 - 0.000001 || o12 > l10 + 0.000001))) return o12;
    }
    function cn(t2, e10, n7, i12) {
        var a16, r12, o12, s12, l10, u6, d4, h3, c1, f1, g1, p1, m1, v2 = n7.length, b2 = [], x2 = [], y2 = [], _4 = 0, k3 = 0;
        for(a16 = 0; a16 < v2; ++a16){
            if (s12 = n7[a16].label, l10 = n7[a16].major ? e10.major : e10.minor, t2.font = u6 = l10.string, d4 = i12[u6] = i12[u6] || {
                data: {
                },
                gc: []
            }, h3 = l10.lineHeight, c1 = f1 = 0, ln(s12) || sn(s12)) {
                if (sn(s12)) for(r12 = 0, o12 = s12.length; r12 < o12; ++r12)g1 = s12[r12], ln(g1) || sn(g1) || (c1 = H.measureText(t2, d4.data, d4.gc, c1, g1), f1 += h3);
            } else c1 = H.measureText(t2, d4.data, d4.gc, c1, s12), f1 = h3;
            b2.push(c1), x2.push(f1), y2.push(h3 / 2), _4 = Math.max(c1, _4), k3 = Math.max(f1, k3);
        }
        function w3(t3) {
            return {
                width: b2[t3] || 0,
                height: x2[t3] || 0,
                offset: y2[t3] || 0
            };
        }
        return (function(t3, e11) {
            H.each(t3, function(t4) {
                var n8, i13 = t4.gc, a17 = i13.length / 2;
                if (a17 > e11) {
                    for(n8 = 0; n8 < a17; ++n8)delete t4.data[i13[n8]];
                    i13.splice(0, a17);
                }
            });
        })(i12, v2), p1 = b2.indexOf(_4), m1 = x2.indexOf(k3), {
            first: w3(0),
            last: w3(v2 - 1),
            widest: w3(p1),
            highest: w3(m1)
        };
    }
    function fn(t2) {
        return t2.drawTicks ? t2.tickMarkLength : 0;
    }
    function gn(t2) {
        var e10, n7;
        return t2.display ? (e10 = H.options._parseFont(t2), n7 = H.options.toPadding(t2.padding), e10.lineHeight + n7.height) : 0;
    }
    function pn(t2, e10) {
        return H.extend(H.options._parseFont({
            fontFamily: un(e10.fontFamily, t2.fontFamily),
            fontSize: un(e10.fontSize, t2.fontSize),
            fontStyle: un(e10.fontStyle, t2.fontStyle),
            lineHeight: un(e10.lineHeight, t2.lineHeight)
        }), {
            color: H.options.resolve([
                e10.fontColor,
                t2.fontColor,
                N.global.defaultFontColor
            ])
        });
    }
    function mn(t2) {
        var e10 = pn(t2, t2.minor);
        return {
            minor: e10,
            major: t2.major.enabled ? pn(t2, t2.major) : e10
        };
    }
    function vn(t2) {
        var e10, n7, i12, a16 = [];
        for(n7 = 0, i12 = t2.length; n7 < i12; ++n7)(void 0) !== (e10 = t2[n7])._index && a16.push(e10);
        return a16;
    }
    function bn(t2, e10, n7, i12) {
        var a16, r12, o12, s12, l10 = un(n7, 0), u6 = Math.min(un(i12, t2.length), t2.length), d4 = 0;
        for(e10 = Math.ceil(e10), i12 && (e10 = (a16 = i12 - n7) / Math.floor(a16 / e10)), s12 = l10; s12 < 0;)d4++, s12 = Math.round(l10 + d4 * e10);
        for(r12 = Math.max(l10, 0); r12 < u6; r12++)o12 = t2[r12], r12 === s12 ? (o12._index = r12, d4++, s12 = Math.round(l10 + d4 * e10)) : delete o12.label;
    }
    N._set("scale", {
        display: true,
        position: "left",
        offset: false,
        gridLines: {
            display: true,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            drawBorder: true,
            drawOnChartArea: true,
            drawTicks: true,
            tickMarkLength: 10,
            zeroLineWidth: 1,
            zeroLineColor: "rgba(0,0,0,0.25)",
            zeroLineBorderDash: [],
            zeroLineBorderDashOffset: 0,
            offsetGridLines: false,
            borderDash: [],
            borderDashOffset: 0
        },
        scaleLabel: {
            display: false,
            labelString: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            beginAtZero: false,
            minRotation: 0,
            maxRotation: 50,
            mirror: false,
            padding: 0,
            reverse: false,
            display: true,
            autoSkip: true,
            autoSkipPadding: 0,
            labelOffset: 0,
            callback: on.formatters.values,
            minor: {
            },
            major: {
            }
        }
    });
    var xn = K.extend({
        zeroLineIndex: 0,
        getPadding: function() {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            };
        },
        getTicks: function() {
            return this._ticks;
        },
        _getLabels: function() {
            var t2 = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t2.xLabels : t2.yLabels) || t2.labels || [];
        },
        mergeTicksOptions: function() {
        },
        beforeUpdate: function() {
            H.callback(this.options.beforeUpdate, [
                this
            ]);
        },
        update: function(t2, e10, n7) {
            var i12, a16, r12, o12, s12, l10 = this, u6 = l10.options.ticks, d4 = u6.sampleSize;
            if (l10.beforeUpdate(), l10.maxWidth = t2, l10.maxHeight = e10, l10.margins = H.extend({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, n7), l10._ticks = null, l10.ticks = null, l10._labelSizes = null, l10._maxLabelLines = 0, l10.longestLabelWidth = 0, l10.longestTextCache = l10.longestTextCache || {
            }, l10._gridLineItems = null, l10._labelItems = null, l10.beforeSetDimensions(), l10.setDimensions(), l10.afterSetDimensions(), l10.beforeDataLimits(), l10.determineDataLimits(), l10.afterDataLimits(), l10.beforeBuildTicks(), o12 = l10.buildTicks() || [], (!(o12 = l10.afterBuildTicks(o12) || o12) || !o12.length) && l10.ticks) for(o12 = [], i12 = 0, a16 = l10.ticks.length; i12 < a16; ++i12)o12.push({
                value: l10.ticks[i12],
                major: false
            });
            return l10._ticks = o12, s12 = d4 < o12.length, r12 = l10._convertTicksToLabels(s12 ? function(t3, e11) {
                for(var n8 = [], i13 = t3.length / e11, a17 = 0, r13 = t3.length; a17 < r13; a17 += i13)n8.push(t3[Math.floor(a17)]);
                return n8;
            }(o12, d4) : o12), l10._configure(), l10.beforeCalculateTickRotation(), l10.calculateTickRotation(), l10.afterCalculateTickRotation(), l10.beforeFit(), l10.fit(), l10.afterFit(), l10._ticksToDraw = u6.display && (u6.autoSkip || "auto" === u6.source) ? l10._autoSkip(o12) : o12, s12 && (r12 = l10._convertTicksToLabels(l10._ticksToDraw)), l10.ticks = r12, l10.afterUpdate(), l10.minSize;
        },
        _configure: function() {
            var t2, e10, n7 = this, i12 = n7.options.ticks.reverse;
            n7.isHorizontal() ? (t2 = n7.left, e10 = n7.right) : (t2 = n7.top, e10 = n7.bottom, i12 = !i12), n7._startPixel = t2, n7._endPixel = e10, n7._reversePixels = i12, n7._length = e10 - t2;
        },
        afterUpdate: function() {
            H.callback(this.options.afterUpdate, [
                this
            ]);
        },
        beforeSetDimensions: function() {
            H.callback(this.options.beforeSetDimensions, [
                this
            ]);
        },
        setDimensions: function() {
            var t2 = this;
            t2.isHorizontal() ? (t2.width = t2.maxWidth, t2.left = 0, t2.right = t2.width) : (t2.height = t2.maxHeight, t2.top = 0, t2.bottom = t2.height), t2.paddingLeft = 0, t2.paddingTop = 0, t2.paddingRight = 0, t2.paddingBottom = 0;
        },
        afterSetDimensions: function() {
            H.callback(this.options.afterSetDimensions, [
                this
            ]);
        },
        beforeDataLimits: function() {
            H.callback(this.options.beforeDataLimits, [
                this
            ]);
        },
        determineDataLimits: H.noop,
        afterDataLimits: function() {
            H.callback(this.options.afterDataLimits, [
                this
            ]);
        },
        beforeBuildTicks: function() {
            H.callback(this.options.beforeBuildTicks, [
                this
            ]);
        },
        buildTicks: H.noop,
        afterBuildTicks: function(t2) {
            var e10 = this;
            return sn(t2) && t2.length ? H.callback(e10.options.afterBuildTicks, [
                e10,
                t2
            ]) : (e10.ticks = H.callback(e10.options.afterBuildTicks, [
                e10,
                e10.ticks
            ]) || e10.ticks, t2);
        },
        beforeTickToLabelConversion: function() {
            H.callback(this.options.beforeTickToLabelConversion, [
                this
            ]);
        },
        convertTicksToLabels: function() {
            var t2 = this.options.ticks;
            this.ticks = this.ticks.map(t2.userCallback || t2.callback, this);
        },
        afterTickToLabelConversion: function() {
            H.callback(this.options.afterTickToLabelConversion, [
                this
            ]);
        },
        beforeCalculateTickRotation: function() {
            H.callback(this.options.beforeCalculateTickRotation, [
                this
            ]);
        },
        calculateTickRotation: function() {
            var t2, e10, n7, i12, a16, r12, o12, s12 = this, l10 = s12.options, u6 = l10.ticks, d4 = s12.getTicks().length, h3 = u6.minRotation || 0, c1 = u6.maxRotation, f1 = h3;
            !s12._isVisible() || !u6.display || h3 >= c1 || d4 <= 1 || !s12.isHorizontal() ? s12.labelRotation = h3 : (e10 = (t2 = s12._getLabelSizes()).widest.width, n7 = t2.highest.height - t2.highest.offset, i12 = Math.min(s12.maxWidth, s12.chart.width - e10), e10 + 6 > (a16 = l10.offset ? s12.maxWidth / d4 : i12 / (d4 - 1)) && (a16 = i12 / (d4 - (l10.offset ? 0.5 : 1)), r12 = s12.maxHeight - fn(l10.gridLines) - u6.padding - gn(l10.scaleLabel), o12 = Math.sqrt(e10 * e10 + n7 * n7), f1 = H.toDegrees(Math.min(Math.asin(Math.min((t2.highest.height + 6) / a16, 1)), Math.asin(Math.min(r12 / o12, 1)) - Math.asin(n7 / o12))), f1 = Math.max(h3, Math.min(c1, f1))), s12.labelRotation = f1);
        },
        afterCalculateTickRotation: function() {
            H.callback(this.options.afterCalculateTickRotation, [
                this
            ]);
        },
        beforeFit: function() {
            H.callback(this.options.beforeFit, [
                this
            ]);
        },
        fit: function() {
            var t2 = this, e10 = t2.minSize = {
                width: 0,
                height: 0
            }, n7 = t2.chart, i12 = t2.options, a16 = i12.ticks, r12 = i12.scaleLabel, o12 = i12.gridLines, s12 = t2._isVisible(), l10 = "bottom" === i12.position, u6 = t2.isHorizontal();
            if (u6 ? e10.width = t2.maxWidth : s12 && (e10.width = fn(o12) + gn(r12)), u6 ? s12 && (e10.height = fn(o12) + gn(r12)) : e10.height = t2.maxHeight, a16.display && s12) {
                var d4 = mn(a16), h3 = t2._getLabelSizes(), c1 = h3.first, f1 = h3.last, g1 = h3.widest, p1 = h3.highest, m1 = 0.4 * d4.minor.lineHeight, v2 = a16.padding;
                if (u6) {
                    var b2 = 0 !== t2.labelRotation, x2 = H.toRadians(t2.labelRotation), y2 = Math.cos(x2), _4 = Math.sin(x2), k3 = _4 * g1.width + y2 * (p1.height - (b2 ? p1.offset : 0)) + (b2 ? 0 : m1);
                    e10.height = Math.min(t2.maxHeight, e10.height + k3 + v2);
                    var w3, M2, S2 = t2.getPixelForTick(0) - t2.left, C2 = t2.right - t2.getPixelForTick(t2.getTicks().length - 1);
                    b2 ? (w3 = l10 ? y2 * c1.width + _4 * c1.offset : _4 * (c1.height - c1.offset), M2 = l10 ? _4 * (f1.height - f1.offset) : y2 * f1.width + _4 * f1.offset) : (w3 = c1.width / 2, M2 = f1.width / 2), t2.paddingLeft = Math.max((w3 - S2) * t2.width / (t2.width - S2), 0) + 3, t2.paddingRight = Math.max((M2 - C2) * t2.width / (t2.width - C2), 0) + 3;
                } else {
                    var P2 = a16.mirror ? 0 : g1.width + v2 + m1;
                    e10.width = Math.min(t2.maxWidth, e10.width + P2), t2.paddingTop = c1.height / 2, t2.paddingBottom = f1.height / 2;
                }
            }
            t2.handleMargins(), u6 ? (t2.width = t2._length = n7.width - t2.margins.left - t2.margins.right, t2.height = e10.height) : (t2.width = e10.width, t2.height = t2._length = n7.height - t2.margins.top - t2.margins.bottom);
        },
        handleMargins: function() {
            var t2 = this;
            t2.margins && (t2.margins.left = Math.max(t2.paddingLeft, t2.margins.left), t2.margins.top = Math.max(t2.paddingTop, t2.margins.top), t2.margins.right = Math.max(t2.paddingRight, t2.margins.right), t2.margins.bottom = Math.max(t2.paddingBottom, t2.margins.bottom));
        },
        afterFit: function() {
            H.callback(this.options.afterFit, [
                this
            ]);
        },
        isHorizontal: function() {
            var t2 = this.options.position;
            return "top" === t2 || "bottom" === t2;
        },
        isFullWidth: function() {
            return this.options.fullWidth;
        },
        getRightValue: function(t2) {
            if (ln(t2)) return NaN;
            if (("number" == typeof t2 || t2 instanceof Number) && !isFinite(t2)) return NaN;
            if (t2) {
                if (this.isHorizontal()) {
                    if ((void 0) !== t2.x) return this.getRightValue(t2.x);
                } else if ((void 0) !== t2.y) return this.getRightValue(t2.y);
            }
            return t2;
        },
        _convertTicksToLabels: function(t2) {
            var e10, n7, i12, a16 = this;
            for(a16.ticks = t2.map(function(t3) {
                return t3.value;
            }), a16.beforeTickToLabelConversion(), e10 = a16.convertTicksToLabels(t2) || a16.ticks, a16.afterTickToLabelConversion(), n7 = 0, i12 = t2.length; n7 < i12; ++n7)t2[n7].label = e10[n7];
            return e10;
        },
        _getLabelSizes: function() {
            var t2 = this, e10 = t2._labelSizes;
            return e10 || (t2._labelSizes = e10 = cn(t2.ctx, mn(t2.options.ticks), t2.getTicks(), t2.longestTextCache), t2.longestLabelWidth = e10.widest.width), e10;
        },
        _parseValue: function(t2) {
            var e10, n7, i12, a16;
            return sn(t2) ? (e10 = +this.getRightValue(t2[0]), n7 = +this.getRightValue(t2[1]), i12 = Math.min(e10, n7), a16 = Math.max(e10, n7)) : (e10 = void 0, n7 = t2 = +this.getRightValue(t2), i12 = t2, a16 = t2), {
                min: i12,
                max: a16,
                start: e10,
                end: n7
            };
        },
        _getScaleLabel: function(t2) {
            var e10 = this._parseValue(t2);
            return (void 0) !== e10.start ? "[" + e10.start + ", " + e10.end + "]" : +this.getRightValue(t2);
        },
        getLabelForIndex: H.noop,
        getPixelForValue: H.noop,
        getValueForPixel: H.noop,
        getPixelForTick: function(t2) {
            var e10 = this.options.offset, n7 = this._ticks.length, i12 = 1 / Math.max(n7 - (e10 ? 0 : 1), 1);
            return t2 < 0 || t2 > n7 - 1 ? null : this.getPixelForDecimal(t2 * i12 + (e10 ? i12 / 2 : 0));
        },
        getPixelForDecimal: function(t2) {
            return this._reversePixels && (t2 = 1 - t2), this._startPixel + t2 * this._length;
        },
        getDecimalForPixel: function(t2) {
            var e10 = (t2 - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e10 : e10;
        },
        getBasePixel: function() {
            return this.getPixelForValue(this.getBaseValue());
        },
        getBaseValue: function() {
            var t2 = this.min, e10 = this.max;
            return this.beginAtZero ? 0 : t2 < 0 && e10 < 0 ? e10 : t2 > 0 && e10 > 0 ? t2 : 0;
        },
        _autoSkip: function(t2) {
            var e10, n7, i12, a16, r12 = this.options.ticks, o12 = this._length, s12 = r12.maxTicksLimit || o12 / this._tickSize() + 1, l10 = r12.major.enabled ? function(t3) {
                var e11, n8, i13 = [];
                for(e11 = 0, n8 = t3.length; e11 < n8; e11++)t3[e11].major && i13.push(e11);
                return i13;
            }(t2) : [], u6 = l10.length, d5 = l10[0], h4 = l10[u6 - 1];
            if (u6 > s12) return (function(t3, e11, n8) {
                var i13, a17, r13 = 0, o13 = e11[0];
                for(n8 = Math.ceil(n8), i13 = 0; i13 < t3.length; i13++)a17 = t3[i13], i13 === o13 ? (a17._index = i13, o13 = e11[(++r13) * n8]) : delete a17.label;
            })(t2, l10, u6 / s12), vn(t2);
            if (i12 = (function(t3, e11, n8, i13) {
                var a17, r13, o13, s13, l11 = function(t4) {
                    var e12, n9, i14 = t4.length;
                    if (i14 < 2) return false;
                    for(n9 = t4[0], e12 = 1; e12 < i14; ++e12)if (t4[e12] - t4[e12 - 1] !== n9) return false;
                    return n9;
                }(t3), u7 = (e11.length - 1) / i13;
                if (!l11) return Math.max(u7, 1);
                for(o13 = 0, s13 = (a17 = H.math._factorize(l11)).length - 1; o13 < s13; o13++)if ((r13 = a17[o13]) > u7) return r13;
                return Math.max(u7, 1);
            })(l10, t2, 0, s12), u6 > 0) {
                for(e10 = 0, n7 = u6 - 1; e10 < n7; e10++)bn(t2, i12, l10[e10], l10[e10 + 1]);
                return a16 = u6 > 1 ? (h4 - d5) / (u6 - 1) : null, bn(t2, i12, H.isNullOrUndef(a16) ? 0 : d5 - a16, d5), bn(t2, i12, h4, H.isNullOrUndef(a16) ? t2.length : h4 + a16), vn(t2);
            }
            return bn(t2, i12), vn(t2);
        },
        _tickSize: function() {
            var t2 = this.options.ticks, e10 = H.toRadians(this.labelRotation), n7 = Math.abs(Math.cos(e10)), i12 = Math.abs(Math.sin(e10)), a16 = this._getLabelSizes(), r12 = t2.autoSkipPadding || 0, o12 = a16 ? a16.widest.width + r12 : 0, s12 = a16 ? a16.highest.height + r12 : 0;
            return this.isHorizontal() ? s12 * n7 > o12 * i12 ? o12 / n7 : s12 / i12 : s12 * i12 < o12 * n7 ? s12 / n7 : o12 / i12;
        },
        _isVisible: function() {
            var t2, e10, n7, i12 = this.chart, a16 = this.options.display;
            if ("auto" !== a16) return !!a16;
            for(t2 = 0, e10 = i12.data.datasets.length; t2 < e10; ++t2)if (i12.isDatasetVisible(t2) && ((n7 = i12.getDatasetMeta(t2)).xAxisID === this.id || n7.yAxisID === this.id)) return true;
            return false;
        },
        _computeGridLineItems: function(t2) {
            var e10, n7, i12, a16, r12, o12, s12, l10, u6, d5, h4, c2, f2, g2, p2, m2, v3, b3 = this, x3 = b3.chart, y3 = b3.options, _5 = y3.gridLines, k4 = y3.position, w4 = _5.offsetGridLines, M3 = b3.isHorizontal(), S3 = b3._ticksToDraw, C3 = S3.length + (w4 ? 1 : 0), P3 = fn(_5), A2 = [], D2 = _5.drawBorder ? dn(_5.lineWidth, 0, 0) : 0, T2 = D2 / 2, I1 = H._alignPixel, F1 = function(t3) {
                return I1(x3, t3, D2);
            };
            for("top" === k4 ? (e10 = F1(b3.bottom), s12 = b3.bottom - P3, u6 = e10 - T2, h4 = F1(t2.top) + T2, f2 = t2.bottom) : "bottom" === k4 ? (e10 = F1(b3.top), h4 = t2.top, f2 = F1(t2.bottom) - T2, s12 = e10 + T2, u6 = b3.top + P3) : "left" === k4 ? (e10 = F1(b3.right), o12 = b3.right - P3, l10 = e10 - T2, d5 = F1(t2.left) + T2, c2 = t2.right) : (e10 = F1(b3.left), d5 = t2.left, c2 = F1(t2.right) - T2, o12 = e10 + T2, l10 = b3.left + P3), n7 = 0; n7 < C3; ++n7)i12 = S3[n7] || {
            }, ln(i12.label) && n7 < S3.length || (n7 === b3.zeroLineIndex && y3.offset === w4 ? (g2 = _5.zeroLineWidth, p2 = _5.zeroLineColor, m2 = _5.zeroLineBorderDash || [], v3 = _5.zeroLineBorderDashOffset || 0) : (g2 = dn(_5.lineWidth, n7, 1), p2 = dn(_5.color, n7, "rgba(0,0,0,0.1)"), m2 = _5.borderDash || [], v3 = _5.borderDashOffset || 0), (void 0) !== (a16 = hn(b3, i12._index || n7, w4)) && (r12 = I1(x3, a16, g2), M3 ? o12 = l10 = d5 = c2 = r12 : s12 = u6 = h4 = f2 = r12, A2.push({
                tx1: o12,
                ty1: s12,
                tx2: l10,
                ty2: u6,
                x1: d5,
                y1: h4,
                x2: c2,
                y2: f2,
                width: g2,
                color: p2,
                borderDash: m2,
                borderDashOffset: v3
            })));
            return A2.ticksLength = C3, A2.borderValue = e10, A2;
        },
        _computeLabelItems: function() {
            var t2, e10, n7, i12, a16, r12, o12, s12, l10, u6, d5, h4, c2 = this, f2 = c2.options, g2 = f2.ticks, p2 = f2.position, m2 = g2.mirror, v3 = c2.isHorizontal(), b3 = c2._ticksToDraw, x3 = mn(g2), y3 = g2.padding, _5 = fn(f2.gridLines), k4 = -H.toRadians(c2.labelRotation), w4 = [];
            for("top" === p2 ? (r12 = c2.bottom - _5 - y3, o12 = k4 ? "left" : "center") : "bottom" === p2 ? (r12 = c2.top + _5 + y3, o12 = k4 ? "right" : "center") : "left" === p2 ? (a16 = c2.right - (m2 ? 0 : _5) - y3, o12 = m2 ? "left" : "right") : (a16 = c2.left + (m2 ? 0 : _5) + y3, o12 = m2 ? "right" : "left"), t2 = 0, e10 = b3.length; t2 < e10; ++t2)i12 = (n7 = b3[t2]).label, ln(i12) || (s12 = c2.getPixelForTick(n7._index || t2) + g2.labelOffset, u6 = (l10 = n7.major ? x3.major : x3.minor).lineHeight, d5 = sn(i12) ? i12.length : 1, v3 ? (a16 = s12, h4 = "top" === p2 ? ((k4 ? 1 : 0.5) - d5) * u6 : (k4 ? 0 : 0.5) * u6) : (r12 = s12, h4 = (1 - d5) * u6 / 2), w4.push({
                x: a16,
                y: r12,
                rotation: k4,
                label: i12,
                font: l10,
                textOffset: h4,
                textAlign: o12
            }));
            return w4;
        },
        _drawGrid: function(t2) {
            var e10 = this, n7 = e10.options.gridLines;
            if (n7.display) {
                var i12, a16, r12, o12, s12, l10 = e10.ctx, u6 = e10.chart, d5 = H._alignPixel, h4 = n7.drawBorder ? dn(n7.lineWidth, 0, 0) : 0, c2 = e10._gridLineItems || (e10._gridLineItems = e10._computeGridLineItems(t2));
                for(r12 = 0, o12 = c2.length; r12 < o12; ++r12)i12 = (s12 = c2[r12]).width, a16 = s12.color, i12 && a16 && (l10.save(), l10.lineWidth = i12, l10.strokeStyle = a16, l10.setLineDash && (l10.setLineDash(s12.borderDash), l10.lineDashOffset = s12.borderDashOffset), l10.beginPath(), n7.drawTicks && (l10.moveTo(s12.tx1, s12.ty1), l10.lineTo(s12.tx2, s12.ty2)), n7.drawOnChartArea && (l10.moveTo(s12.x1, s12.y1), l10.lineTo(s12.x2, s12.y2)), l10.stroke(), l10.restore());
                if (h4) {
                    var f2, g2, p2, m2, v3 = h4, b3 = dn(n7.lineWidth, c2.ticksLength - 1, 1), x3 = c2.borderValue;
                    e10.isHorizontal() ? (f2 = d5(u6, e10.left, v3) - v3 / 2, g2 = d5(u6, e10.right, b3) + b3 / 2, p2 = m2 = x3) : (p2 = d5(u6, e10.top, v3) - v3 / 2, m2 = d5(u6, e10.bottom, b3) + b3 / 2, f2 = g2 = x3), l10.lineWidth = h4, l10.strokeStyle = dn(n7.color, 0), l10.beginPath(), l10.moveTo(f2, p2), l10.lineTo(g2, m2), l10.stroke();
                }
            }
        },
        _drawLabels: function() {
            var t2 = this;
            if (t2.options.ticks.display) {
                var e10, n7, i13, a17, r13, o13, s13, l11, u7 = t2.ctx, d6 = t2._labelItems || (t2._labelItems = t2._computeLabelItems());
                for(e10 = 0, i13 = d6.length; e10 < i13; ++e10){
                    if (o13 = (r13 = d6[e10]).font, u7.save(), u7.translate(r13.x, r13.y), u7.rotate(r13.rotation), u7.font = o13.string, u7.fillStyle = o13.color, u7.textBaseline = "middle", u7.textAlign = r13.textAlign, s13 = r13.label, l11 = r13.textOffset, sn(s13)) for(n7 = 0, a17 = s13.length; n7 < a17; ++n7)u7.fillText("" + s13[n7], 0, l11), l11 += o13.lineHeight;
                    else u7.fillText(s13, 0, l11);
                    u7.restore();
                }
            }
        },
        _drawTitle: function() {
            var t2 = this, e11 = t2.ctx, n8 = t2.options, i14 = n8.scaleLabel;
            if (i14.display) {
                var a18, r14, o14 = un(i14.fontColor, N.global.defaultFontColor), s14 = H.options._parseFont(i14), l12 = H.options.toPadding(i14.padding), u8 = s14.lineHeight / 2, d7 = n8.position, h5 = 0;
                if (t2.isHorizontal()) a18 = t2.left + t2.width / 2, r14 = "bottom" === d7 ? t2.bottom - u8 - l12.bottom : t2.top + u8 + l12.top;
                else {
                    var c3 = "left" === d7;
                    a18 = c3 ? t2.left + u8 + l12.top : t2.right - u8 - l12.top, r14 = t2.top + t2.height / 2, h5 = c3 ? -0.5 * Math.PI : 0.5 * Math.PI;
                }
                e11.save(), e11.translate(a18, r14), e11.rotate(h5), e11.textAlign = "center", e11.textBaseline = "middle", e11.fillStyle = o14, e11.font = s14.string, e11.fillText(i14.labelString, 0, 0), e11.restore();
            }
        },
        draw: function(t2) {
            this._isVisible() && (this._drawGrid(t2), this._drawTitle(), this._drawLabels());
        },
        _layers: function() {
            var t2 = this, e11 = t2.options, n8 = e11.ticks && e11.ticks.z || 0, i14 = e11.gridLines && e11.gridLines.z || 0;
            return t2._isVisible() && n8 !== i14 && t2.draw === t2._draw ? [
                {
                    z: i14,
                    draw: function() {
                        t2._drawGrid.apply(t2, arguments), t2._drawTitle.apply(t2, arguments);
                    }
                },
                {
                    z: n8,
                    draw: function() {
                        t2._drawLabels.apply(t2, arguments);
                    }
                }
            ] : [
                {
                    z: n8,
                    draw: function() {
                        t2.draw.apply(t2, arguments);
                    }
                }
            ];
        },
        _getMatchingVisibleMetas: function(t2) {
            var e11 = this, n8 = e11.isHorizontal();
            return e11.chart._getSortedVisibleDatasetMetas().filter(function(i14) {
                return (!t2 || i14.type === t2) && (n8 ? i14.xAxisID === e11.id : i14.yAxisID === e11.id);
            });
        }
    });
    xn.prototype._draw = xn.prototype.draw;
    var yn = xn, _n = H.isNullOrUndef, kn = yn.extend({
        determineDataLimits: function() {
            var t2, e11 = this, n8 = e11._getLabels(), i14 = e11.options.ticks, a19 = i14.min, r15 = i14.max, o15 = 0, s15 = n8.length - 1;
            (void 0) !== a19 && (t2 = n8.indexOf(a19)) >= 0 && (o15 = t2), (void 0) !== r15 && (t2 = n8.indexOf(r15)) >= 0 && (s15 = t2), e11.minIndex = o15, e11.maxIndex = s15, e11.min = n8[o15], e11.max = n8[s15];
        },
        buildTicks: function() {
            var t2 = this._getLabels(), e11 = this.minIndex, n8 = this.maxIndex;
            this.ticks = 0 === e11 && n8 === t2.length - 1 ? t2 : t2.slice(e11, n8 + 1);
        },
        getLabelForIndex: function(t2, e11) {
            var n8 = this.chart;
            return n8.getDatasetMeta(e11).controller._getValueScaleId() === this.id ? this.getRightValue(n8.data.datasets[e11].data[t2]) : this._getLabels()[t2];
        },
        _configure: function() {
            var t2 = this, e11 = t2.options.offset, n8 = t2.ticks;
            yn.prototype._configure.call(t2), t2.isHorizontal() || (t2._reversePixels = !t2._reversePixels), n8 && (t2._startValue = t2.minIndex - (e11 ? 0.5 : 0), t2._valueRange = Math.max(n8.length - (e11 ? 0 : 1), 1));
        },
        getPixelForValue: function(t2, e11, n8) {
            var i14, a19, r15, o15 = this;
            return _n(e11) || _n(n8) || (t2 = o15.chart.data.datasets[n8].data[e11]), _n(t2) || (i14 = o15.isHorizontal() ? t2.x : t2.y), ((void 0) !== i14 || (void 0) !== t2 && isNaN(e11)) && (a19 = o15._getLabels(), t2 = H.valueOrDefault(i14, t2), e11 = -1 !== (r15 = a19.indexOf(t2)) ? r15 : e11, isNaN(e11) && (e11 = t2)), o15.getPixelForDecimal((e11 - o15._startValue) / o15._valueRange);
        },
        getPixelForTick: function(t2) {
            var e11 = this.ticks;
            return t2 < 0 || t2 > e11.length - 1 ? null : this.getPixelForValue(e11[t2], t2 + this.minIndex);
        },
        getValueForPixel: function(t2) {
            var e11 = Math.round(this._startValue + this.getDecimalForPixel(t2) * this._valueRange);
            return Math.min(Math.max(e11, 0), this.ticks.length - 1);
        },
        getBasePixel: function() {
            return this.bottom;
        }
    }), wn = {
        position: "bottom"
    };
    kn._defaults = wn;
    var Mn = H.noop, Sn = H.isNullOrUndef;
    var Cn = yn.extend({
        getRightValue: function(t2) {
            return "string" == typeof t2 ? +t2 : yn.prototype.getRightValue.call(this, t2);
        },
        handleTickRangeOptions: function() {
            var t2 = this, e11 = t2.options.ticks;
            if (e11.beginAtZero) {
                var n8 = H.sign(t2.min), i14 = H.sign(t2.max);
                n8 < 0 && i14 < 0 ? t2.max = 0 : n8 > 0 && i14 > 0 && (t2.min = 0);
            }
            var a19 = (void 0) !== e11.min || (void 0) !== e11.suggestedMin, r15 = (void 0) !== e11.max || (void 0) !== e11.suggestedMax;
            (void 0) !== e11.min ? t2.min = e11.min : (void 0) !== e11.suggestedMin && (null === t2.min ? t2.min = e11.suggestedMin : t2.min = Math.min(t2.min, e11.suggestedMin)), (void 0) !== e11.max ? t2.max = e11.max : (void 0) !== e11.suggestedMax && (null === t2.max ? t2.max = e11.suggestedMax : t2.max = Math.max(t2.max, e11.suggestedMax)), a19 !== r15 && t2.min >= t2.max && (a19 ? t2.max = t2.min + 1 : t2.min = t2.max - 1), t2.min === t2.max && (t2.max++, e11.beginAtZero || t2.min--);
        },
        getTickLimit: function() {
            var t2, e11 = this.options.ticks, n9 = e11.stepSize, i15 = e11.maxTicksLimit;
            return n9 ? t2 = Math.ceil(this.max / n9) - Math.floor(this.min / n9) + 1 : (t2 = this._computeTickLimit(), i15 = i15 || 11), i15 && (t2 = Math.min(i15, t2)), t2;
        },
        _computeTickLimit: function() {
            return Number.POSITIVE_INFINITY;
        },
        handleDirectionalChanges: Mn,
        buildTicks: function() {
            var t2 = this, e11 = t2.options.ticks, n9 = t2.getTickLimit(), i15 = {
                maxTicks: n9 = Math.max(2, n9),
                min: e11.min,
                max: e11.max,
                precision: e11.precision,
                stepSize: H.valueOrDefault(e11.fixedStepSize, e11.stepSize)
            }, a19 = t2.ticks = function(t3, e12) {
                var n10, i16, a20, r15, o15 = [], s15 = t3.stepSize, l13 = s15 || 1, u9 = t3.maxTicks - 1, d8 = t3.min, h6 = t3.max, c4 = t3.precision, f3 = e12.min, g3 = e12.max, p3 = H.niceNum((g3 - f3) / u9 / l13) * l13;
                if (p3 < 0.00000000000001 && Sn(d8) && Sn(h6)) return [
                    f3,
                    g3
                ];
                (r15 = Math.ceil(g3 / p3) - Math.floor(f3 / p3)) > u9 && (p3 = H.niceNum(r15 * p3 / u9 / l13) * l13), s15 || Sn(c4) ? n10 = Math.pow(10, H._decimalPlaces(p3)) : (n10 = Math.pow(10, c4), p3 = Math.ceil(p3 * n10) / n10), i16 = Math.floor(f3 / p3) * p3, a20 = Math.ceil(g3 / p3) * p3, s15 && (!Sn(d8) && H.almostWhole(d8 / p3, p3 / 1000) && (i16 = d8), !Sn(h6) && H.almostWhole(h6 / p3, p3 / 1000) && (a20 = h6)), r15 = (a20 - i16) / p3, r15 = H.almostEquals(r15, Math.round(r15), p3 / 1000) ? Math.round(r15) : Math.ceil(r15), i16 = Math.round(i16 * n10) / n10, a20 = Math.round(a20 * n10) / n10, o15.push(Sn(d8) ? i16 : d8);
                for(var m3 = 1; m3 < r15; ++m3)o15.push(Math.round((i16 + m3 * p3) * n10) / n10);
                return o15.push(Sn(h6) ? a20 : h6), o15;
            }(i15, t2);
            t2.handleDirectionalChanges(), t2.max = H.max(a19), t2.min = H.min(a19), e11.reverse ? (a19.reverse(), t2.start = t2.max, t2.end = t2.min) : (t2.start = t2.min, t2.end = t2.max);
        },
        convertTicksToLabels: function() {
            var t2 = this;
            t2.ticksAsNumbers = t2.ticks.slice(), t2.zeroLineIndex = t2.ticks.indexOf(0), yn.prototype.convertTicksToLabels.call(t2);
        },
        _configure: function() {
            var t2, e11 = this, n9 = e11.getTicks(), i15 = e11.min, a19 = e11.max;
            yn.prototype._configure.call(e11), e11.options.offset && n9.length && (i15 -= t2 = (a19 - i15) / Math.max(n9.length - 1, 1) / 2, a19 += t2), e11._startValue = i15, e11._endValue = a19, e11._valueRange = a19 - i15;
        }
    }), Pn = {
        position: "left",
        ticks: {
            callback: on.formatters.linear
        }
    };
    function An(t2, e11, n9, i15) {
        var a19, r15, o15 = t2.options, s15 = function(t3, e12, n10) {
            var i16 = [
                n10.type,
                (void 0) === e12 && (void 0) === n10.stack ? n10.index : "",
                n10.stack
            ].join(".");
            return (void 0) === t3[i16] && (t3[i16] = {
                pos: [],
                neg: []
            }), t3[i16];
        }(e11, o15.stacked, n9), l13 = s15.pos, u9 = s15.neg, d8 = i15.length;
        for(a19 = 0; a19 < d8; ++a19)r15 = t2._parseValue(i15[a19]), isNaN(r15.min) || isNaN(r15.max) || n9.data[a19].hidden || (l13[a19] = l13[a19] || 0, u9[a19] = u9[a19] || 0, o15.relativePoints ? l13[a19] = 100 : r15.min < 0 || r15.max < 0 ? u9[a19] += r15.min : l13[a19] += r15.max);
    }
    function Dn(t2, e11, n9) {
        var i15, a19, r15 = n9.length;
        for(i15 = 0; i15 < r15; ++i15)a19 = t2._parseValue(n9[i15]), isNaN(a19.min) || isNaN(a19.max) || e11.data[i15].hidden || (t2.min = Math.min(t2.min, a19.min), t2.max = Math.max(t2.max, a19.max));
    }
    var Tn = Cn.extend({
        determineDataLimits: function() {
            var t2, e11, n9, i15, a19 = this, r15 = a19.options, o15 = a19.chart.data.datasets, s15 = a19._getMatchingVisibleMetas(), l13 = r15.stacked, u9 = {
            }, d8 = s15.length;
            if (a19.min = Number.POSITIVE_INFINITY, a19.max = Number.NEGATIVE_INFINITY, (void 0) === l13) for(t2 = 0; !l13 && t2 < d8; ++t2)l13 = (void 0) !== (e11 = s15[t2]).stack;
            for(t2 = 0; t2 < d8; ++t2)n9 = o15[(e11 = s15[t2]).index].data, l13 ? An(a19, u9, e11, n9) : Dn(a19, e11, n9);
            H.each(u9, function(t3) {
                i15 = t3.pos.concat(t3.neg), a19.min = Math.min(a19.min, H.min(i15)), a19.max = Math.max(a19.max, H.max(i15));
            }), a19.min = H.isFinite(a19.min) && !isNaN(a19.min) ? a19.min : 0, a19.max = H.isFinite(a19.max) && !isNaN(a19.max) ? a19.max : 1, a19.handleTickRangeOptions();
        },
        _computeTickLimit: function() {
            var t2;
            return this.isHorizontal() ? Math.ceil(this.width / 40) : (t2 = H.options._parseFont(this.options.ticks), Math.ceil(this.height / t2.lineHeight));
        },
        handleDirectionalChanges: function() {
            this.isHorizontal() || this.ticks.reverse();
        },
        getLabelForIndex: function(t2, e11) {
            return this._getScaleLabel(this.chart.data.datasets[e11].data[t2]);
        },
        getPixelForValue: function(t2) {
            return this.getPixelForDecimal((+this.getRightValue(t2) - this._startValue) / this._valueRange);
        },
        getValueForPixel: function(t2) {
            return this._startValue + this.getDecimalForPixel(t2) * this._valueRange;
        },
        getPixelForTick: function(t2) {
            var e11 = this.ticksAsNumbers;
            return t2 < 0 || t2 > e11.length - 1 ? null : this.getPixelForValue(e11[t2]);
        }
    }), In = Pn;
    Tn._defaults = In;
    var Fn = H.valueOrDefault, On = H.math.log10;
    var Ln = {
        position: "left",
        ticks: {
            callback: on.formatters.logarithmic
        }
    };
    function Rn(t2, e11) {
        return H.isFinite(t2) && t2 >= 0 ? t2 : e11;
    }
    var zn = yn.extend({
        determineDataLimits: function() {
            var t2, e11, n9, i15, a19, r15, o15 = this, s15 = o15.options, l13 = o15.chart, u9 = l13.data.datasets, d8 = o15.isHorizontal();
            function h6(t3) {
                return d8 ? t3.xAxisID === o15.id : t3.yAxisID === o15.id;
            }
            o15.min = Number.POSITIVE_INFINITY, o15.max = Number.NEGATIVE_INFINITY, o15.minNotZero = Number.POSITIVE_INFINITY;
            var c4 = s15.stacked;
            if ((void 0) === c4) for(t2 = 0; t2 < u9.length; t2++)if (e11 = l13.getDatasetMeta(t2), l13.isDatasetVisible(t2) && h6(e11) && (void 0) !== e11.stack) {
                c4 = true;
                break;
            }
            if (s15.stacked || c4) {
                var f3 = {
                };
                for(t2 = 0; t2 < u9.length; t2++){
                    var g3 = [
                        (e11 = l13.getDatasetMeta(t2)).type,
                        (void 0) === s15.stacked && (void 0) === e11.stack ? t2 : "",
                        e11.stack
                    ].join(".");
                    if (l13.isDatasetVisible(t2) && h6(e11)) for((void 0) === f3[g3] && (f3[g3] = []), a19 = 0, r15 = (i15 = u9[t2].data).length; a19 < r15; a19++){
                        var p3 = f3[g3];
                        n9 = o15._parseValue(i15[a19]), isNaN(n9.min) || isNaN(n9.max) || e11.data[a19].hidden || n9.min < 0 || n9.max < 0 || (p3[a19] = p3[a19] || 0, p3[a19] += n9.max);
                    }
                }
                H.each(f3, function(t3) {
                    if (t3.length > 0) {
                        var e12 = H.min(t3), n10 = H.max(t3);
                        o15.min = Math.min(o15.min, e12), o15.max = Math.max(o15.max, n10);
                    }
                });
            } else for(t2 = 0; t2 < u9.length; t2++)if (e11 = l13.getDatasetMeta(t2), l13.isDatasetVisible(t2) && h6(e11)) for(a19 = 0, r15 = (i15 = u9[t2].data).length; a19 < r15; a19++)n9 = o15._parseValue(i15[a19]), isNaN(n9.min) || isNaN(n9.max) || e11.data[a19].hidden || n9.min < 0 || n9.max < 0 || (o15.min = Math.min(n9.min, o15.min), o15.max = Math.max(n9.max, o15.max), 0 !== n9.min && (o15.minNotZero = Math.min(n9.min, o15.minNotZero)));
            o15.min = H.isFinite(o15.min) ? o15.min : null, o15.max = H.isFinite(o15.max) ? o15.max : null, o15.minNotZero = H.isFinite(o15.minNotZero) ? o15.minNotZero : null, this.handleTickRangeOptions();
        },
        handleTickRangeOptions: function() {
            var t2 = this, e11 = t2.options.ticks;
            t2.min = Rn(e11.min, t2.min), t2.max = Rn(e11.max, t2.max), t2.min === t2.max && (0 !== t2.min && null !== t2.min ? (t2.min = Math.pow(10, Math.floor(On(t2.min)) - 1), t2.max = Math.pow(10, Math.floor(On(t2.max)) + 1)) : (t2.min = 1, t2.max = 10)), null === t2.min && (t2.min = Math.pow(10, Math.floor(On(t2.max)) - 1)), null === t2.max && (t2.max = 0 !== t2.min ? Math.pow(10, Math.floor(On(t2.min)) + 1) : 10), null === t2.minNotZero && (t2.min > 0 ? t2.minNotZero = t2.min : t2.max < 1 ? t2.minNotZero = Math.pow(10, Math.floor(On(t2.max))) : t2.minNotZero = 1);
        },
        buildTicks: function() {
            var t2 = this, e11 = t2.options.ticks, n9 = !t2.isHorizontal(), i15 = {
                min: Rn(e11.min),
                max: Rn(e11.max)
            }, a19 = t2.ticks = function(t3, e13) {
                var n11, i16, a20 = [], r15 = Fn(t3.min, Math.pow(10, Math.floor(On(e13.min)))), o15 = Math.floor(On(e13.max)), s15 = Math.ceil(e13.max / Math.pow(10, o15));
                0 === r15 ? (n11 = Math.floor(On(e13.minNotZero)), i16 = Math.floor(e13.minNotZero / Math.pow(10, n11)), a20.push(r15), r15 = i16 * Math.pow(10, n11)) : (n11 = Math.floor(On(r15)), i16 = Math.floor(r15 / Math.pow(10, n11)));
                var l13 = n11 < 0 ? Math.pow(10, Math.abs(n11)) : 1;
                do a20.push(r15), 10 === ++i16 && (i16 = 1, l13 = (++n11) >= 0 ? 1 : l13), r15 = Math.round(i16 * Math.pow(10, n11) * l13) / l13;
                while (n11 < o15 || n11 === o15 && i16 < s15)
                var u9 = Fn(t3.max, r15);
                return a20.push(u9), a20;
            }(i15, t2);
            t2.max = H.max(a19), t2.min = H.min(a19), e11.reverse ? (n9 = !n9, t2.start = t2.max, t2.end = t2.min) : (t2.start = t2.min, t2.end = t2.max), n9 && a19.reverse();
        },
        convertTicksToLabels: function() {
            this.tickValues = this.ticks.slice(), yn.prototype.convertTicksToLabels.call(this);
        },
        getLabelForIndex: function(t2, e11) {
            return this._getScaleLabel(this.chart.data.datasets[e11].data[t2]);
        },
        getPixelForTick: function(t2) {
            var e11 = this.tickValues;
            return t2 < 0 || t2 > e11.length - 1 ? null : this.getPixelForValue(e11[t2]);
        },
        _getFirstTickValue: function(t2) {
            var e11 = Math.floor(On(t2));
            return Math.floor(t2 / Math.pow(10, e11)) * Math.pow(10, e11);
        },
        _configure: function() {
            var t2 = this, e11 = t2.min, n9 = 0;
            yn.prototype._configure.call(t2), 0 === e11 && (e11 = t2._getFirstTickValue(t2.minNotZero), n9 = Fn(t2.options.ticks.fontSize, N.global.defaultFontSize) / t2._length), t2._startValue = On(e11), t2._valueOffset = n9, t2._valueRange = (On(t2.max) - On(e11)) / (1 - n9);
        },
        getPixelForValue: function(t2) {
            var e11 = this, n9 = 0;
            return (t2 = +e11.getRightValue(t2)) > e11.min && t2 > 0 && (n9 = (On(t2) - e11._startValue) / e11._valueRange + e11._valueOffset), e11.getPixelForDecimal(n9);
        },
        getValueForPixel: function(t2) {
            var e11 = this, n9 = e11.getDecimalForPixel(t2);
            return 0 === n9 && 0 === e11.min ? 0 : Math.pow(10, e11._startValue + (n9 - e11._valueOffset) * e11._valueRange);
        }
    }), Nn = Ln;
    zn._defaults = Nn;
    var Bn = H.valueOrDefault, En = H.valueAtIndexOrDefault, Wn = H.options.resolve, Vn = {
        display: true,
        animate: true,
        position: "chartArea",
        angleLines: {
            display: true,
            color: "rgba(0,0,0,0.1)",
            lineWidth: 1,
            borderDash: [],
            borderDashOffset: 0
        },
        gridLines: {
            circular: false
        },
        ticks: {
            showLabelBackdrop: true,
            backdropColor: "rgba(255,255,255,0.75)",
            backdropPaddingY: 2,
            backdropPaddingX: 2,
            callback: on.formatters.linear
        },
        pointLabels: {
            display: true,
            fontSize: 10,
            callback: function(t2) {
                return t2;
            }
        }
    };
    function Hn(t2) {
        var e11 = t2.ticks;
        return e11.display && t2.display ? Bn(e11.fontSize, N.global.defaultFontSize) + 2 * e11.backdropPaddingY : 0;
    }
    function jn(t2, e11, n9, i15, a19) {
        return t2 === i15 || t2 === a19 ? {
            start: e11 - n9 / 2,
            end: e11 + n9 / 2
        } : t2 < i15 || t2 > a19 ? {
            start: e11 - n9,
            end: e11
        } : {
            start: e11,
            end: e11 + n9
        };
    }
    function qn(t2) {
        return 0 === t2 || 180 === t2 ? "center" : t2 < 180 ? "left" : "right";
    }
    function Un(t2, e11, n9, i15) {
        var a19, r15, o15 = n9.y + i15 / 2;
        if (H.isArray(e11)) for(a19 = 0, r15 = e11.length; a19 < r15; ++a19)t2.fillText(e11[a19], n9.x, o15), o15 += i15;
        else t2.fillText(e11, n9.x, o15);
    }
    function Yn(t2, e11, n9) {
        90 === t2 || 270 === t2 ? n9.y -= e11.h / 2 : (t2 > 270 || t2 < 90) && (n9.y -= e11.h);
    }
    function Gn(t2) {
        return H.isNumber(t2) ? t2 : 0;
    }
    var Xn = Cn.extend({
        setDimensions: function() {
            var t2 = this;
            t2.width = t2.maxWidth, t2.height = t2.maxHeight, t2.paddingTop = Hn(t2.options) / 2, t2.xCenter = Math.floor(t2.width / 2), t2.yCenter = Math.floor((t2.height - t2.paddingTop) / 2), t2.drawingArea = Math.min(t2.height - t2.paddingTop, t2.width) / 2;
        },
        determineDataLimits: function() {
            var t2 = this, e11 = t2.chart, n9 = Number.POSITIVE_INFINITY, i15 = Number.NEGATIVE_INFINITY;
            H.each(e11.data.datasets, function(a19, r15) {
                if (e11.isDatasetVisible(r15)) {
                    var o15 = e11.getDatasetMeta(r15);
                    H.each(a19.data, function(e13, a20) {
                        var r16 = +t2.getRightValue(e13);
                        isNaN(r16) || o15.data[a20].hidden || (n9 = Math.min(r16, n9), i15 = Math.max(r16, i15));
                    });
                }
            }), t2.min = n9 === Number.POSITIVE_INFINITY ? 0 : n9, t2.max = i15 === Number.NEGATIVE_INFINITY ? 0 : i15, t2.handleTickRangeOptions();
        },
        _computeTickLimit: function() {
            return Math.ceil(this.drawingArea / Hn(this.options));
        },
        convertTicksToLabels: function() {
            var t2 = this;
            Cn.prototype.convertTicksToLabels.call(t2), t2.pointLabels = t2.chart.data.labels.map(function() {
                var e11 = H.callback(t2.options.pointLabels.callback, arguments, t2);
                return e11 || 0 === e11 ? e11 : "";
            });
        },
        getLabelForIndex: function(t2, e11) {
            return +this.getRightValue(this.chart.data.datasets[e11].data[t2]);
        },
        fit: function() {
            var t2 = this.options;
            t2.display && t2.pointLabels.display ? (function(t3) {
                var e11, n9, i15, a19 = H.options._parseFont(t3.options.pointLabels), r15 = {
                    l: 0,
                    r: t3.width,
                    t: 0,
                    b: t3.height - t3.paddingTop
                }, o16 = {
                };
                t3.ctx.font = a19.string, t3._pointLabelSizes = [];
                var s15, l13, u9, d8 = t3.chart.data.labels.length;
                for(e11 = 0; e11 < d8; e11++){
                    i15 = t3.getPointPosition(e11, t3.drawingArea + 5), s15 = t3.ctx, l13 = a19.lineHeight, u9 = t3.pointLabels[e11], n9 = H.isArray(u9) ? {
                        w: H.longestText(s15, s15.font, u9),
                        h: u9.length * l13
                    } : {
                        w: s15.measureText(u9).width,
                        h: l13
                    }, t3._pointLabelSizes[e11] = n9;
                    var h6 = t3.getIndexAngle(e11), c4 = H.toDegrees(h6) % 360, f4 = jn(c4, i15.x, n9.w, 0, 180), g4 = jn(c4, i15.y, n9.h, 90, 270);
                    f4.start < r15.l && (r15.l = f4.start, o16.l = h6), f4.end > r15.r && (r15.r = f4.end, o16.r = h6), g4.start < r15.t && (r15.t = g4.start, o16.t = h6), g4.end > r15.b && (r15.b = g4.end, o16.b = h6);
                }
                t3.setReductions(t3.drawingArea, r15, o16);
            })(this) : this.setCenterPoint(0, 0, 0, 0);
        },
        setReductions: function(t2, e11, n9) {
            var i15 = this, a19 = e11.l / Math.sin(n9.l), r15 = Math.max(e11.r - i15.width, 0) / Math.sin(n9.r), o16 = -e11.t / Math.cos(n9.t), s15 = -Math.max(e11.b - (i15.height - i15.paddingTop), 0) / Math.cos(n9.b);
            a19 = Gn(a19), r15 = Gn(r15), o16 = Gn(o16), s15 = Gn(s15), i15.drawingArea = Math.min(Math.floor(t2 - (a19 + r15) / 2), Math.floor(t2 - (o16 + s15) / 2)), i15.setCenterPoint(a19, r15, o16, s15);
        },
        setCenterPoint: function(t2, e11, n9, i15) {
            var a19 = this, r15 = a19.width - e11 - a19.drawingArea, o16 = t2 + a19.drawingArea, s15 = n9 + a19.drawingArea, l13 = a19.height - a19.paddingTop - i15 - a19.drawingArea;
            a19.xCenter = Math.floor((o16 + r15) / 2 + a19.left), a19.yCenter = Math.floor((s15 + l13) / 2 + a19.top + a19.paddingTop);
        },
        getIndexAngle: function(t2) {
            var e11 = this.chart, n9 = (t2 * (360 / e11.data.labels.length) + ((e11.options || {
            }).startAngle || 0)) % 360;
            return (n9 < 0 ? n9 + 360 : n9) * Math.PI * 2 / 360;
        },
        getDistanceFromCenterForValue: function(t2) {
            var e11 = this;
            if (H.isNullOrUndef(t2)) return NaN;
            var n9 = e11.drawingArea / (e11.max - e11.min);
            return e11.options.ticks.reverse ? (e11.max - t2) * n9 : (t2 - e11.min) * n9;
        },
        getPointPosition: function(t2, e11) {
            var n9 = this.getIndexAngle(t2) - Math.PI / 2;
            return {
                x: Math.cos(n9) * e11 + this.xCenter,
                y: Math.sin(n9) * e11 + this.yCenter
            };
        },
        getPointPositionForValue: function(t2, e11) {
            return this.getPointPosition(t2, this.getDistanceFromCenterForValue(e11));
        },
        getBasePosition: function(t2) {
            var e11 = this.min, n9 = this.max;
            return this.getPointPositionForValue(t2 || 0, this.beginAtZero ? 0 : e11 < 0 && n9 < 0 ? n9 : e11 > 0 && n9 > 0 ? e11 : 0);
        },
        _drawGrid: function() {
            var t2, e11, n9, i15 = this, a19 = i15.ctx, r15 = i15.options, o16 = r15.gridLines, s15 = r15.angleLines, l13 = Bn(s15.lineWidth, o16.lineWidth), u9 = Bn(s15.color, o16.color);
            if (r15.pointLabels.display && (function(t3) {
                var e13 = t3.ctx, n11 = t3.options, i16 = n11.pointLabels, a20 = Hn(n11), r16 = t3.getDistanceFromCenterForValue(n11.ticks.reverse ? t3.min : t3.max), o17 = H.options._parseFont(i16);
                e13.save(), e13.font = o17.string, e13.textBaseline = "middle";
                for(var s16 = t3.chart.data.labels.length - 1; s16 >= 0; s16--){
                    var l14 = 0 === s16 ? a20 / 2 : 0, u10 = t3.getPointPosition(s16, r16 + l14 + 5), d8 = En(i16.fontColor, s16, N.global.defaultFontColor);
                    e13.fillStyle = d8;
                    var h7 = t3.getIndexAngle(s16), c5 = H.toDegrees(h7);
                    e13.textAlign = qn(c5), Yn(c5, t3._pointLabelSizes[s16], u10), Un(e13, t3.pointLabels[s16], u10, o17.lineHeight);
                }
                e13.restore();
            })(i15), o16.display && H.each(i15.ticks, function(t3, n11) {
                0 !== n11 && (e11 = i15.getDistanceFromCenterForValue(i15.ticksAsNumbers[n11]), (function(t4, e13, n12, i16) {
                    var a20, r16 = t4.ctx, o17 = e13.circular, s16 = t4.chart.data.labels.length, l15 = En(e13.color, i16 - 1), u11 = En(e13.lineWidth, i16 - 1);
                    if ((o17 || s16) && l15 && u11) {
                        if (r16.save(), r16.strokeStyle = l15, r16.lineWidth = u11, r16.setLineDash && (r16.setLineDash(e13.borderDash || []), r16.lineDashOffset = e13.borderDashOffset || 0), r16.beginPath(), o17) r16.arc(t4.xCenter, t4.yCenter, n12, 0, 2 * Math.PI);
                        else {
                            a20 = t4.getPointPosition(0, n12), r16.moveTo(a20.x, a20.y);
                            for(var d9 = 1; d9 < s16; d9++)a20 = t4.getPointPosition(d9, n12), r16.lineTo(a20.x, a20.y);
                        }
                        r16.closePath(), r16.stroke(), r16.restore();
                    }
                })(i15, o16, e11, n11));
            }), s15.display && l13 && u9) {
                for(a19.save(), a19.lineWidth = l13, a19.strokeStyle = u9, a19.setLineDash && (a19.setLineDash(Wn([
                    s15.borderDash,
                    o16.borderDash,
                    []
                ])), a19.lineDashOffset = Wn([
                    s15.borderDashOffset,
                    o16.borderDashOffset,
                    0
                ])), t2 = i15.chart.data.labels.length - 1; t2 >= 0; t2--)e11 = i15.getDistanceFromCenterForValue(r15.ticks.reverse ? i15.min : i15.max), n9 = i15.getPointPosition(t2, e11), a19.beginPath(), a19.moveTo(i15.xCenter, i15.yCenter), a19.lineTo(n9.x, n9.y), a19.stroke();
                a19.restore();
            }
        },
        _drawLabels: function() {
            var t2 = this, e11 = t2.ctx, n9 = t2.options.ticks;
            if (n9.display) {
                var i15, a19, r15 = t2.getIndexAngle(0), o16 = H.options._parseFont(n9), s15 = Bn(n9.fontColor, N.global.defaultFontColor);
                e11.save(), e11.font = o16.string, e11.translate(t2.xCenter, t2.yCenter), e11.rotate(r15), e11.textAlign = "center", e11.textBaseline = "middle", H.each(t2.ticks, function(r16, l13) {
                    (0 !== l13 || n9.reverse) && (i15 = t2.getDistanceFromCenterForValue(t2.ticksAsNumbers[l13]), n9.showLabelBackdrop && (a19 = e11.measureText(r16).width, e11.fillStyle = n9.backdropColor, e11.fillRect(-a19 / 2 - n9.backdropPaddingX, -i15 - o16.size / 2 - n9.backdropPaddingY, a19 + 2 * n9.backdropPaddingX, o16.size + 2 * n9.backdropPaddingY)), e11.fillStyle = s15, e11.fillText(r16, 0, -i15));
                }), e11.restore();
            }
        },
        _drawTitle: H.noop
    }), Kn = Vn;
    Xn._defaults = Kn;
    var Zn = H._deprecated, $n = H.options.resolve, Jn = H.valueOrDefault, Qn = Number.MIN_SAFE_INTEGER || -9007199254740991, ti = Number.MAX_SAFE_INTEGER || 9007199254740991, ei = {
        millisecond: {
            common: true,
            size: 1,
            steps: 1000
        },
        second: {
            common: true,
            size: 1000,
            steps: 60
        },
        minute: {
            common: true,
            size: 60000,
            steps: 60
        },
        hour: {
            common: true,
            size: 3600000,
            steps: 24
        },
        day: {
            common: true,
            size: 86400000,
            steps: 30
        },
        week: {
            common: false,
            size: 604800000,
            steps: 4
        },
        month: {
            common: true,
            size: 2628000000,
            steps: 12
        },
        quarter: {
            common: false,
            size: 7884000000,
            steps: 4
        },
        year: {
            common: true,
            size: 31540000000
        }
    }, ni = Object.keys(ei);
    function ii(t2, e11) {
        return t2 - e11;
    }
    function ai(t2) {
        return H.valueOrDefault(t2.time.min, t2.ticks.min);
    }
    function ri(t2) {
        return H.valueOrDefault(t2.time.max, t2.ticks.max);
    }
    function oi(t2, e11, n9, i16) {
        var a20 = function(t3, e13, n11) {
            for(var i17, a21, r16, o17 = 0, s16 = t3.length - 1; o17 >= 0 && o17 <= s16;){
                if (a21 = t3[(i17 = o17 + s16 >> 1) - 1] || null, r16 = t3[i17], !a21) return {
                    lo: null,
                    hi: r16
                };
                if (r16[e13] < n11) o17 = i17 + 1;
                else {
                    if (!(a21[e13] > n11)) return {
                        lo: a21,
                        hi: r16
                    };
                    s16 = i17 - 1;
                }
            }
            return {
                lo: r16,
                hi: null
            };
        }(t2, e11, n9), r16 = a20.lo ? a20.hi ? a20.lo : t2[t2.length - 2] : t2[0], o17 = a20.lo ? a20.hi ? a20.hi : t2[t2.length - 1] : t2[1], s16 = o17[e11] - r16[e11], l13 = s16 ? (n9 - r16[e11]) / s16 : 0, u9 = (o17[i16] - r16[i16]) * l13;
        return r16[i16] + u9;
    }
    function si(t2, e11) {
        var n9 = t2._adapter, i16 = t2.options.time, a20 = i16.parser, r16 = a20 || i16.format, o17 = e11;
        return "function" == typeof a20 && (o17 = a20(o17)), H.isFinite(o17) || (o17 = "string" == typeof r16 ? n9.parse(o17, r16) : n9.parse(o17)), null !== o17 ? +o17 : (a20 || "function" != typeof r16 || (o17 = r16(e11), H.isFinite(o17) || (o17 = n9.parse(o17))), o17);
    }
    function li(t2, e11) {
        if (H.isNullOrUndef(e11)) return null;
        var n9 = t2.options.time, i16 = si(t2, t2.getRightValue(e11));
        return null === i16 ? i16 : (n9.round && (i16 = +t2._adapter.startOf(i16, n9.round)), i16);
    }
    function ui(t2, e11, n9, i16) {
        var a20, r16, o17, s16 = ni.length;
        for(a20 = ni.indexOf(t2); a20 < s16 - 1; ++a20)if (o17 = (r16 = ei[ni[a20]]).steps ? r16.steps : ti, r16.common && Math.ceil((n9 - e11) / (o17 * r16.size)) <= i16) return ni[a20];
        return ni[s16 - 1];
    }
    function di(t2, e11, n9) {
        var i16, a20, r16 = [], o17 = {
        }, s16 = e11.length;
        for(i16 = 0; i16 < s16; ++i16)o17[a20 = e11[i16]] = i16, r16.push({
            value: a20,
            major: false
        });
        return 0 !== s16 && n9 ? (function(t3, e13, n11, i17) {
            var a21, r17, o18 = t3._adapter, s17 = +o18.startOf(e13[0].value, i17), l13 = e13[e13.length - 1].value;
            for(a21 = s17; a21 <= l13; a21 = +o18.add(a21, 1, i17))(r17 = n11[a21]) >= 0 && (e13[r17].major = true);
            return e13;
        })(t2, r16, o17, n9) : r16;
    }
    var hi = yn.extend({
        initialize: function() {
            this.mergeTicksOptions(), yn.prototype.initialize.call(this);
        },
        update: function() {
            var t2 = this, e11 = t2.options, n9 = e11.time || (e11.time = {
            }), i16 = t2._adapter = new rn._date(e11.adapters.date);
            return Zn("time scale", n9.format, "time.format", "time.parser"), Zn("time scale", n9.min, "time.min", "ticks.min"), Zn("time scale", n9.max, "time.max", "ticks.max"), H.mergeIf(n9.displayFormats, i16.formats()), yn.prototype.update.apply(t2, arguments);
        },
        getRightValue: function(t2) {
            return t2 && (void 0) !== t2.t && (t2 = t2.t), yn.prototype.getRightValue.call(this, t2);
        },
        determineDataLimits: function() {
            var t2, e11, n9, i16, a20, r16, o17, s16 = this, l13 = s16.chart, u9 = s16._adapter, d10 = s16.options, h8 = d10.time.unit || "day", c6 = ti, f5 = Qn, g5 = [], p4 = [], m3 = [], v4 = s16._getLabels();
            for(t2 = 0, n9 = v4.length; t2 < n9; ++t2)m3.push(li(s16, v4[t2]));
            for(t2 = 0, n9 = (l13.data.datasets || []).length; t2 < n9; ++t2)if (l13.isDatasetVisible(t2)) {
                if (a20 = l13.data.datasets[t2].data, H.isObject(a20[0])) for(p4[t2] = [], e11 = 0, i16 = a20.length; e11 < i16; ++e11)r16 = li(s16, a20[e11]), g5.push(r16), p4[t2][e11] = r16;
                else p4[t2] = m3.slice(0), o17 || (g5 = g5.concat(m3), o17 = true);
            } else p4[t2] = [];
            m3.length && (c6 = Math.min(c6, m3[0]), f5 = Math.max(f5, m3[m3.length - 1])), g5.length && (g5 = n9 > 1 ? (function(t3) {
                var e13, n11, i17, a21 = {
                }, r17 = [];
                for(e13 = 0, n11 = t3.length; e13 < n11; ++e13)a21[i17 = t3[e13]] || (a21[i17] = true, r17.push(i17));
                return r17;
            })(g5).sort(ii) : g5.sort(ii), c6 = Math.min(c6, g5[0]), f5 = Math.max(f5, g5[g5.length - 1])), c6 = li(s16, ai(d10)) || c6, f5 = li(s16, ri(d10)) || f5, c6 = c6 === ti ? +u9.startOf(Date.now(), h8) : c6, f5 = f5 === Qn ? +u9.endOf(Date.now(), h8) + 1 : f5, s16.min = Math.min(c6, f5), s16.max = Math.max(c6 + 1, f5), s16._table = [], s16._timestamps = {
                data: g5,
                datasets: p4,
                labels: m3
            };
        },
        buildTicks: function() {
            var t2, e11, n9, i16 = this, a20 = i16.min, r16 = i16.max, o17 = i16.options, s16 = o17.ticks, l13 = o17.time, u9 = i16._timestamps, d10 = [], h8 = i16.getLabelCapacity(a20), c6 = s16.source, f5 = o17.distribution;
            for(u9 = "data" === c6 || "auto" === c6 && "series" === f5 ? u9.data : "labels" === c6 ? u9.labels : (function(t3, e13, n11, i17) {
                var a21, r17 = t3._adapter, o18 = t3.options, s17 = o18.time, l15 = s17.unit || ui(s17.minUnit, e13, n11, i17), u11 = $n([
                    s17.stepSize,
                    s17.unitStepSize,
                    1
                ]), d11 = "week" === l15 && s17.isoWeekday, h9 = e13, c7 = [];
                if (d11 && (h9 = +r17.startOf(h9, "isoWeek", d11)), h9 = +r17.startOf(h9, d11 ? "day" : l15), r17.diff(n11, e13, l15) > 100000 * u11) throw e13 + " and " + n11 + " are too far apart with stepSize of " + u11 + " " + l15;
                for(a21 = h9; a21 < n11; a21 = +r17.add(a21, u11, l15))c7.push(a21);
                return a21 !== n11 && "ticks" !== o18.bounds || c7.push(a21), c7;
            })(i16, a20, r16, h8), "ticks" === o17.bounds && u9.length && (a20 = u9[0], r16 = u9[u9.length - 1]), a20 = li(i16, ai(o17)) || a20, r16 = li(i16, ri(o17)) || r16, t2 = 0, e11 = u9.length; t2 < e11; ++t2)(n9 = u9[t2]) >= a20 && n9 <= r16 && d10.push(n9);
            return i16.min = a20, i16.max = r16, i16._unit = l13.unit || (s16.autoSkip ? ui(l13.minUnit, i16.min, i16.max, h8) : (function(t3, e13, n11, i17, a21) {
                var r17, o18;
                for(r17 = ni.length - 1; r17 >= ni.indexOf(n11); r17--)if (o18 = ni[r17], ei[o18].common && t3._adapter.diff(a21, i17, o18) >= e13 - 1) return o18;
                return ni[n11 ? ni.indexOf(n11) : 0];
            })(i16, d10.length, l13.minUnit, i16.min, i16.max)), i16._majorUnit = s16.major.enabled && "year" !== i16._unit ? (function(t3) {
                for(var e13 = ni.indexOf(t3) + 1, n11 = ni.length; e13 < n11; ++e13)if (ei[ni[e13]].common) return ni[e13];
            })(i16._unit) : void 0, i16._table = (function(t3, e13, n11, i17) {
                if ("linear" === i17 || !t3.length) return [
                    {
                        time: e13,
                        pos: 0
                    },
                    {
                        time: n11,
                        pos: 1
                    }
                ];
                var a21, r17, o18, s17, l15, u11 = [], d11 = [
                    e13
                ];
                for(a21 = 0, r17 = t3.length; a21 < r17; ++a21)(s17 = t3[a21]) > e13 && s17 < n11 && d11.push(s17);
                for(d11.push(n11), a21 = 0, r17 = d11.length; a21 < r17; ++a21)l15 = d11[a21 + 1], o18 = d11[a21 - 1], s17 = d11[a21], (void 0) !== o18 && (void 0) !== l15 && Math.round((l15 + o18) / 2) === s17 || u11.push({
                    time: s17,
                    pos: a21 / (r17 - 1)
                });
                return u11;
            })(i16._timestamps.data, a20, r16, f5), i16._offsets = (function(t3, e13, n11, i17, a21) {
                var r17, o18, s17 = 0, l15 = 0;
                return a21.offset && e13.length && (r17 = oi(t3, "time", e13[0], "pos"), s17 = 1 === e13.length ? 1 - r17 : (oi(t3, "time", e13[1], "pos") - r17) / 2, o18 = oi(t3, "time", e13[e13.length - 1], "pos"), l15 = 1 === e13.length ? o18 : (o18 - oi(t3, "time", e13[e13.length - 2], "pos")) / 2), {
                    start: s17,
                    end: l15,
                    factor: 1 / (s17 + 1 + l15)
                };
            })(i16._table, d10, 0, 0, o17), s16.reverse && d10.reverse(), di(i16, d10, i16._majorUnit);
        },
        getLabelForIndex: function(t2, e11) {
            var n9 = this, i16 = n9._adapter, a20 = n9.chart.data, r16 = n9.options.time, o17 = a20.labels && t2 < a20.labels.length ? a20.labels[t2] : "", s16 = a20.datasets[e11].data[t2];
            return H.isObject(s16) && (o17 = n9.getRightValue(s16)), r16.tooltipFormat ? i16.format(si(n9, o17), r16.tooltipFormat) : "string" == typeof o17 ? o17 : i16.format(si(n9, o17), r16.displayFormats.datetime);
        },
        tickFormatFunction: function(t2, e11, n9, i16) {
            var a20 = this._adapter, r16 = this.options, o17 = r16.time.displayFormats, s16 = o17[this._unit], l13 = this._majorUnit, u9 = o17[l13], d10 = n9[e11], h8 = r16.ticks, c6 = l13 && u9 && d10 && d10.major, f5 = a20.format(t2, i16 || (c6 ? u9 : s16)), g5 = c6 ? h8.major : h8.minor, p4 = $n([
                g5.callback,
                g5.userCallback,
                h8.callback,
                h8.userCallback
            ]);
            return p4 ? p4(f5, e11, n9) : f5;
        },
        convertTicksToLabels: function(t2) {
            var e11, n9, i16 = [];
            for(e11 = 0, n9 = t2.length; e11 < n9; ++e11)i16.push(this.tickFormatFunction(t2[e11].value, e11, t2));
            return i16;
        },
        getPixelForOffset: function(t2) {
            var e11 = this._offsets, n9 = oi(this._table, "time", t2, "pos");
            return this.getPixelForDecimal((e11.start + n9) * e11.factor);
        },
        getPixelForValue: function(t2, e11, n9) {
            var i16 = null;
            if ((void 0) !== e11 && (void 0) !== n9 && (i16 = this._timestamps.datasets[n9][e11]), null === i16 && (i16 = li(this, t2)), null !== i16) return this.getPixelForOffset(i16);
        },
        getPixelForTick: function(t2) {
            var e11 = this.getTicks();
            return t2 >= 0 && t2 < e11.length ? this.getPixelForOffset(e11[t2].value) : null;
        },
        getValueForPixel: function(t2) {
            var e11 = this._offsets, n9 = this.getDecimalForPixel(t2) / e11.factor - e11.end, i16 = oi(this._table, "pos", n9, "time");
            return this._adapter._create(i16);
        },
        _getLabelSize: function(t2) {
            var e11 = this.options.ticks, n9 = this.ctx.measureText(t2).width, i16 = H.toRadians(this.isHorizontal() ? e11.maxRotation : e11.minRotation), a20 = Math.cos(i16), r16 = Math.sin(i16), o17 = Jn(e11.fontSize, N.global.defaultFontSize);
            return {
                w: n9 * a20 + o17 * r16,
                h: n9 * r16 + o17 * a20
            };
        },
        getLabelWidth: function(t2) {
            return this._getLabelSize(t2).w;
        },
        getLabelCapacity: function(t2) {
            var e11 = this, n9 = e11.options.time, i16 = n9.displayFormats, a20 = i16[n9.unit] || i16.millisecond, r16 = e11.tickFormatFunction(t2, 0, di(e11, [
                t2
            ], e11._majorUnit), a20), o17 = e11._getLabelSize(r16), s16 = Math.floor(e11.isHorizontal() ? e11.width / o17.w : e11.height / o17.h);
            return e11.options.offset && s16--, s16 > 0 ? s16 : 1;
        }
    }), ci = {
        position: "bottom",
        distribution: "linear",
        bounds: "data",
        adapters: {
        },
        time: {
            parser: false,
            unit: false,
            round: false,
            displayFormat: false,
            isoWeekday: false,
            minUnit: "millisecond",
            displayFormats: {
            }
        },
        ticks: {
            autoSkip: false,
            source: "auto",
            major: {
                enabled: false
            }
        }
    };
    hi._defaults = ci;
    var fi = {
        category: kn,
        linear: Tn,
        logarithmic: zn,
        radialLinear: Xn,
        time: hi
    }, gi = {
        datetime: "MMM D, YYYY, h:mm:ss a",
        millisecond: "h:mm:ss.SSS a",
        second: "h:mm:ss a",
        minute: "h:mm a",
        hour: "hA",
        day: "MMM D",
        week: "ll",
        month: "MMM YYYY",
        quarter: "[Q]Q - YYYY",
        year: "YYYY"
    };
    rn._date.override("function" == typeof t ? {
        _id: "moment",
        formats: function() {
            return gi;
        },
        parse: function(e11, n9) {
            return "string" == typeof e11 && "string" == typeof n9 ? e11 = t(e11, n9) : e11 instanceof t || (e11 = t(e11)), e11.isValid() ? e11.valueOf() : null;
        },
        format: function(e11, n9) {
            return t(e11).format(n9);
        },
        add: function(e11, n9, i16) {
            return t(e11).add(n9, i16).valueOf();
        },
        diff: function(e11, n9, i16) {
            return t(e11).diff(t(n9), i16);
        },
        startOf: function(e11, n9, i16) {
            return e11 = t(e11), "isoWeek" === n9 ? e11.isoWeekday(i16).valueOf() : e11.startOf(n9).valueOf();
        },
        endOf: function(e11, n9) {
            return t(e11).endOf(n9).valueOf();
        },
        _create: function(e11) {
            return t(e11);
        }
    } : {
    }), N._set("global", {
        plugins: {
            filler: {
                propagate: true
            }
        }
    });
    var pi = {
        dataset: function(t2) {
            var e11 = t2.fill, n9 = t2.chart, i16 = n9.getDatasetMeta(e11), a20 = i16 && n9.isDatasetVisible(e11) && i16.dataset._children || [], r16 = a20.length || 0;
            return r16 ? function(t3, e13) {
                return e13 < r16 && a20[e13]._view || null;
            } : null;
        },
        boundary: function(t2) {
            var e11 = t2.boundary, n9 = e11 ? e11.x : null, i16 = e11 ? e11.y : null;
            return H.isArray(e11) ? function(t3, n11) {
                return e11[n11];
            } : function(t3) {
                return {
                    x: null === n9 ? t3.x : n9,
                    y: null === i16 ? t3.y : i16
                };
            };
        }
    };
    function mi(t2, e11, n9) {
        var i16, a20 = t2._model || {
        }, r16 = a20.fill;
        if ((void 0) === r16 && (r16 = !!a20.backgroundColor), false === r16 || null === r16) return false;
        if (true === r16) return "origin";
        if (i16 = parseFloat(r16, 10), isFinite(i16) && Math.floor(i16) === i16) return "-" !== r16[0] && "+" !== r16[0] || (i16 = e11 + i16), !(i16 === e11 || i16 < 0 || i16 >= n9) && i16;
        switch(r16){
            case "bottom":
                return "start";
            case "top":
                return "end";
            case "zero":
                return "origin";
            case "origin":
            case "start":
            case "end":
                return r16;
            default:
                return false;
        }
    }
    function vi(t2) {
        return (t2.el._scale || {
        }).getPointPositionForValue ? (function(t3) {
            var e11, n9, i16, a20, r16, o17 = t3.el._scale, s16 = o17.options, l13 = o17.chart.data.labels.length, u9 = t3.fill, d10 = [];
            if (!l13) return null;
            for(e11 = s16.ticks.reverse ? o17.max : o17.min, n9 = s16.ticks.reverse ? o17.min : o17.max, i16 = o17.getPointPositionForValue(0, e11), a20 = 0; a20 < l13; ++a20)r16 = "start" === u9 || "end" === u9 ? o17.getPointPositionForValue(a20, "start" === u9 ? e11 : n9) : o17.getBasePosition(a20), s16.gridLines.circular && (r16.cx = i16.x, r16.cy = i16.y, r16.angle = o17.getIndexAngle(a20) - Math.PI / 2), d10.push(r16);
            return d10;
        })(t2) : (function(t3) {
            var e11, n9 = t3.el._model || {
            }, i16 = t3.el._scale || {
            }, a20 = t3.fill, r16 = null;
            if (isFinite(a20)) return null;
            if ("start" === a20 ? r16 = (void 0) === n9.scaleBottom ? i16.bottom : n9.scaleBottom : "end" === a20 ? r16 = (void 0) === n9.scaleTop ? i16.top : n9.scaleTop : (void 0) !== n9.scaleZero ? r16 = n9.scaleZero : i16.getBasePixel && (r16 = i16.getBasePixel()), null != r16) {
                if ((void 0) !== r16.x && (void 0) !== r16.y) return r16;
                if (H.isFinite(r16)) return {
                    x: (e11 = i16.isHorizontal()) ? r16 : null,
                    y: e11 ? null : r16
                };
            }
            return null;
        })(t2);
    }
    function bi(t2, e11, n9) {
        var i16, a20 = t2[e11].fill, r16 = [
            e11
        ];
        if (!n9) return a20;
        for(; false !== a20 && -1 === r16.indexOf(a20);){
            if (!isFinite(a20)) return a20;
            if (!(i16 = t2[a20])) return false;
            if (i16.visible) return a20;
            r16.push(a20), a20 = i16.fill;
        }
        return false;
    }
    function xi(t2) {
        var e11 = t2.fill, n9 = "dataset";
        return false === e11 ? null : (isFinite(e11) || (n9 = "boundary"), pi[n9](t2));
    }
    function yi(t2) {
        return t2 && !t2.skip;
    }
    function _i(t2, e11, n9, i16, a20) {
        var r16, o17, s16, l13;
        if (i16 && a20) {
            for(t2.moveTo(e11[0].x, e11[0].y), r16 = 1; r16 < i16; ++r16)H.canvas.lineTo(t2, e11[r16 - 1], e11[r16]);
            if ((void 0) === n9[0].angle) for(t2.lineTo(n9[a20 - 1].x, n9[a20 - 1].y), r16 = a20 - 1; r16 > 0; --r16)H.canvas.lineTo(t2, n9[r16], n9[r16 - 1], true);
            else for(o17 = n9[0].cx, s16 = n9[0].cy, l13 = Math.sqrt(Math.pow(n9[0].x - o17, 2) + Math.pow(n9[0].y - s16, 2)), r16 = a20 - 1; r16 > 0; --r16)t2.arc(o17, s16, l13, n9[r16].angle, n9[r16 - 1].angle, true);
        }
    }
    function ki(t2, e11, n9, i16, a20, r16) {
        var o17, s16, l13, u9, d10, h8, c6, f5, g5 = e11.length, p4 = i16.spanGaps, m3 = [], v4 = [], b4 = 0, x4 = 0;
        for(t2.beginPath(), o17 = 0, s16 = g5; o17 < s16; ++o17)d10 = n9(u9 = e11[l13 = o17 % g5]._view, l13, i16), h8 = yi(u9), c6 = yi(d10), r16 && (void 0) === f5 && h8 && (s16 = g5 + (f5 = o17 + 1)), h8 && c6 ? (b4 = m3.push(u9), x4 = v4.push(d10)) : b4 && x4 && (p4 ? (h8 && m3.push(u9), c6 && v4.push(d10)) : (_i(t2, m3, v4, b4, x4), b4 = x4 = 0, m3 = [], v4 = []));
        _i(t2, m3, v4, b4, x4), t2.closePath(), t2.fillStyle = a20, t2.fill();
    }
    var wi = {
        id: "filler",
        afterDatasetsUpdate: function(t2, e11) {
            var n9, i16, a20, r16, o17 = (t2.data.datasets || []).length, s16 = e11.propagate, l13 = [];
            for(i16 = 0; i16 < o17; ++i16)r16 = null, (a20 = (n9 = t2.getDatasetMeta(i16)).dataset) && a20._model && a20 instanceof kt.Line && (r16 = {
                visible: t2.isDatasetVisible(i16),
                fill: mi(a20, i16, o17),
                chart: t2,
                el: a20
            }), n9.$filler = r16, l13.push(r16);
            for(i16 = 0; i16 < o17; ++i16)(r16 = l13[i16]) && (r16.fill = bi(l13, i16, s16), r16.boundary = vi(r16), r16.mapper = xi(r16));
        },
        beforeDatasetsDraw: function(t2) {
            var e11, n9, i16, a20, r16, o17, s16, l13 = t2._getSortedVisibleDatasetMetas(), u9 = t2.ctx;
            for(n9 = l13.length - 1; n9 >= 0; --n9)(e11 = l13[n9].$filler) && e11.visible && (a20 = (i16 = e11.el)._view, r16 = i16._children || [], o17 = e11.mapper, s16 = a20.backgroundColor || N.global.defaultColor, o17 && s16 && r16.length && (H.canvas.clipArea(u9, t2.chartArea), ki(u9, r16, o17, a20, s16, i16._loop), H.canvas.unclipArea(u9)));
        }
    }, Mi = H.rtl.getRtlAdapter, Si = H.noop, Ci = H.valueOrDefault;
    function Pi(t2, e11) {
        return t2.usePointStyle && t2.boxWidth > e11 ? e11 : t2.boxWidth;
    }
    N._set("global", {
        legend: {
            display: true,
            position: "top",
            align: "center",
            fullWidth: true,
            reverse: false,
            weight: 1000,
            onClick: function(t2, e11) {
                var n9 = e11.datasetIndex, i16 = this.chart, a20 = i16.getDatasetMeta(n9);
                a20.hidden = null === a20.hidden ? !i16.data.datasets[n9].hidden : null, i16.update();
            },
            onHover: null,
            onLeave: null,
            labels: {
                boxWidth: 40,
                padding: 10,
                generateLabels: function(t2) {
                    var e11 = t2.data.datasets, n9 = t2.options.legend || {
                    }, i16 = n9.labels && n9.labels.usePointStyle;
                    return t2._getSortedDatasetMetas().map(function(n11) {
                        var a20 = n11.controller.getStyle(i16 ? 0 : void 0);
                        return {
                            text: e11[n11.index].label,
                            fillStyle: a20.backgroundColor,
                            hidden: !t2.isDatasetVisible(n11.index),
                            lineCap: a20.borderCapStyle,
                            lineDash: a20.borderDash,
                            lineDashOffset: a20.borderDashOffset,
                            lineJoin: a20.borderJoinStyle,
                            lineWidth: a20.borderWidth,
                            strokeStyle: a20.borderColor,
                            pointStyle: a20.pointStyle,
                            rotation: a20.rotation,
                            datasetIndex: n11.index
                        };
                    }, this);
                }
            }
        },
        legendCallback: function(t2) {
            var e11, n9, i16, a20 = document.createElement("ul"), r16 = t2.data.datasets;
            for(a20.setAttribute("class", t2.id + "-legend"), e11 = 0, n9 = r16.length; e11 < n9; e11++)(i16 = a20.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor = r16[e11].backgroundColor, r16[e11].label && i16.appendChild(document.createTextNode(r16[e11].label));
            return a20.outerHTML;
        }
    });
    var Ai = K.extend({
        initialize: function(t2) {
            H.extend(this, t2), this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = false;
        },
        beforeUpdate: Si,
        update: function(t2, e11, n9) {
            var i16 = this;
            return i16.beforeUpdate(), i16.maxWidth = t2, i16.maxHeight = e11, i16.margins = n9, i16.beforeSetDimensions(), i16.setDimensions(), i16.afterSetDimensions(), i16.beforeBuildLabels(), i16.buildLabels(), i16.afterBuildLabels(), i16.beforeFit(), i16.fit(), i16.afterFit(), i16.afterUpdate(), i16.minSize;
        },
        afterUpdate: Si,
        beforeSetDimensions: Si,
        setDimensions: function() {
            var t2 = this;
            t2.isHorizontal() ? (t2.width = t2.maxWidth, t2.left = 0, t2.right = t2.width) : (t2.height = t2.maxHeight, t2.top = 0, t2.bottom = t2.height), t2.paddingLeft = 0, t2.paddingTop = 0, t2.paddingRight = 0, t2.paddingBottom = 0, t2.minSize = {
                width: 0,
                height: 0
            };
        },
        afterSetDimensions: Si,
        beforeBuildLabels: Si,
        buildLabels: function() {
            var t2 = this, e11 = t2.options.labels || {
            }, n9 = H.callback(e11.generateLabels, [
                t2.chart
            ], t2) || [];
            e11.filter && (n9 = n9.filter(function(n11) {
                return e11.filter(n11, t2.chart.data);
            })), t2.options.reverse && n9.reverse(), t2.legendItems = n9;
        },
        afterBuildLabels: Si,
        beforeFit: Si,
        fit: function() {
            var t2 = this, e11 = t2.options, n9 = e11.labels, i16 = e11.display, a20 = t2.ctx, r16 = H.options._parseFont(n9), o17 = r16.size, s16 = t2.legendHitBoxes = [], l13 = t2.minSize, u9 = t2.isHorizontal();
            if (u9 ? (l13.width = t2.maxWidth, l13.height = i16 ? 10 : 0) : (l13.width = i16 ? 10 : 0, l13.height = t2.maxHeight), i16) {
                if (a20.font = r16.string, u9) {
                    var d10 = t2.lineWidths = [
                        0
                    ], h8 = 0;
                    a20.textAlign = "left", a20.textBaseline = "middle", H.each(t2.legendItems, function(t3, e13) {
                        var i17 = Pi(n9, o17) + o17 / 2 + a20.measureText(t3.text).width;
                        (0 === e13 || d10[d10.length - 1] + i17 + 2 * n9.padding > l13.width) && (h8 += o17 + n9.padding, d10[d10.length - (e13 > 0 ? 0 : 1)] = 0), s16[e13] = {
                            left: 0,
                            top: 0,
                            width: i17,
                            height: o17
                        }, d10[d10.length - 1] += i17 + n9.padding;
                    }), l13.height += h8;
                } else {
                    var c6 = n9.padding, f5 = t2.columnWidths = [], g5 = t2.columnHeights = [], p4 = n9.padding, m3 = 0, v4 = 0;
                    H.each(t2.legendItems, function(t3, e13) {
                        var i17 = Pi(n9, o17) + o17 / 2 + a20.measureText(t3.text).width;
                        e13 > 0 && v4 + o17 + 2 * c6 > l13.height && (p4 += m3 + n9.padding, f5.push(m3), g5.push(v4), m3 = 0, v4 = 0), m3 = Math.max(m3, i17), v4 += o17 + c6, s16[e13] = {
                            left: 0,
                            top: 0,
                            width: i17,
                            height: o17
                        };
                    }), p4 += m3, f5.push(m3), g5.push(v4), l13.width += p4;
                }
                t2.width = l13.width, t2.height = l13.height;
            } else t2.width = l13.width = t2.height = l13.height = 0;
        },
        afterFit: Si,
        isHorizontal: function() {
            return "top" === this.options.position || "bottom" === this.options.position;
        },
        draw: function() {
            var t2 = this, e11 = t2.options, n9 = e11.labels, i16 = N.global, a20 = i16.defaultColor, r16 = i16.elements.line, o17 = t2.height, s16 = t2.columnHeights, l13 = t2.width, u9 = t2.lineWidths;
            if (e11.display) {
                var d11, h9 = Mi(e11.rtl, t2.left, t2.minSize.width), c7 = t2.ctx, f6 = Ci(n9.fontColor, i16.defaultFontColor), g6 = H.options._parseFont(n9), p5 = g6.size;
                c7.textAlign = h9.textAlign("left"), c7.textBaseline = "middle", c7.lineWidth = 0.5, c7.strokeStyle = f6, c7.fillStyle = f6, c7.font = g6.string;
                var m4 = Pi(n9, p5), v5 = t2.legendHitBoxes, b4 = function(t3, i17) {
                    switch(e11.align){
                        case "start":
                            return n9.padding;
                        case "end":
                            return t3 - i17;
                        default:
                            return (t3 - i17 + n9.padding) / 2;
                    }
                }, x4 = t2.isHorizontal();
                d11 = x4 ? {
                    x: t2.left + b4(l13, u9[0]),
                    y: t2.top + n9.padding,
                    line: 0
                } : {
                    x: t2.left + n9.padding,
                    y: t2.top + b4(o17, s16[0]),
                    line: 0
                }, H.rtl.overrideTextDirection(t2.ctx, e11.textDirection);
                var y3 = p5 + n9.padding;
                H.each(t2.legendItems, function(e13, i17) {
                    var f7 = c7.measureText(e13.text).width, g7 = m4 + p5 / 2 + f7, _5 = d11.x, k4 = d11.y;
                    h9.setWidth(t2.minSize.width), x4 ? i17 > 0 && _5 + g7 + n9.padding > t2.left + t2.minSize.width && (k4 = d11.y += y3, d11.line++, _5 = d11.x = t2.left + b4(l13, u9[d11.line])) : i17 > 0 && k4 + y3 > t2.top + t2.minSize.height && (_5 = d11.x = _5 + t2.columnWidths[d11.line] + n9.padding, d11.line++, k4 = d11.y = t2.top + b4(o17, s16[d11.line]));
                    var w4 = h9.x(_5);
                    (function(t3, e14, i18) {
                        if (!(isNaN(m4) || m4 <= 0)) {
                            c7.save();
                            var o18 = Ci(i18.lineWidth, r16.borderWidth);
                            if (c7.fillStyle = Ci(i18.fillStyle, a20), c7.lineCap = Ci(i18.lineCap, r16.borderCapStyle), c7.lineDashOffset = Ci(i18.lineDashOffset, r16.borderDashOffset), c7.lineJoin = Ci(i18.lineJoin, r16.borderJoinStyle), c7.lineWidth = o18, c7.strokeStyle = Ci(i18.strokeStyle, a20), c7.setLineDash && c7.setLineDash(Ci(i18.lineDash, r16.borderDash)), n9 && n9.usePointStyle) {
                                var s17 = m4 * Math.SQRT2 / 2, l15 = h9.xPlus(t3, m4 / 2), u11 = e14 + p5 / 2;
                                H.canvas.drawPoint(c7, i18.pointStyle, s17, l15, u11, i18.rotation);
                            } else c7.fillRect(h9.leftForLtr(t3, m4), e14, m4, p5), 0 !== o18 && c7.strokeRect(h9.leftForLtr(t3, m4), e14, m4, p5);
                            c7.restore();
                        }
                    })(w4, k4, e13), v5[i17].left = h9.leftForLtr(w4, v5[i17].width), v5[i17].top = k4, (function(t3, e14, n11, i18) {
                        var a21 = p5 / 2, r17 = h9.xPlus(t3, m4 + a21), o19 = e14 + a21;
                        c7.fillText(n11.text, r17, o19), n11.hidden && (c7.beginPath(), c7.lineWidth = 2, c7.moveTo(r17, o19), c7.lineTo(h9.xPlus(r17, i18), o19), c7.stroke());
                    })(w4, k4, e13, f7), x4 ? d11.x += g7 + n9.padding : d11.y += y3;
                }), H.rtl.restoreTextDirection(t2.ctx, e11.textDirection);
            }
        },
        _getLegendItemAt: function(t2, e11) {
            var n9, i16, a20, r16 = this;
            if (t2 >= r16.left && t2 <= r16.right && e11 >= r16.top && e11 <= r16.bottom) for(a20 = r16.legendHitBoxes, n9 = 0; n9 < a20.length; ++n9)if (t2 >= (i16 = a20[n9]).left && t2 <= i16.left + i16.width && e11 >= i16.top && e11 <= i16.top + i16.height) return r16.legendItems[n9];
            return null;
        },
        handleEvent: function(t2) {
            var e11, n9 = this, i16 = n9.options, a20 = "mouseup" === t2.type ? "click" : t2.type;
            if ("mousemove" === a20) {
                if (!i16.onHover && !i16.onLeave) return;
            } else {
                if ("click" !== a20) return;
                if (!i16.onClick) return;
            }
            e11 = n9._getLegendItemAt(t2.x, t2.y), "click" === a20 ? e11 && i16.onClick && i16.onClick.call(n9, t2.native, e11) : (i16.onLeave && e11 !== n9._hoveredItem && (n9._hoveredItem && i16.onLeave.call(n9, t2.native, n9._hoveredItem), n9._hoveredItem = e11), i16.onHover && e11 && i16.onHover.call(n9, t2.native, e11));
        }
    });
    function Di(t2, e11) {
        var n9 = new Ai({
            ctx: t2.ctx,
            options: e11,
            chart: t2
        });
        pe.configure(t2, n9, e11), pe.addBox(t2, n9), t2.legend = n9;
    }
    var Ti = {
        id: "legend",
        _element: Ai,
        beforeInit: function(t2) {
            var e11 = t2.options.legend;
            e11 && Di(t2, e11);
        },
        beforeUpdate: function(t2) {
            var e11 = t2.options.legend, n9 = t2.legend;
            e11 ? (H.mergeIf(e11, N.global.legend), n9 ? (pe.configure(t2, n9, e11), n9.options = e11) : Di(t2, e11)) : n9 && (pe.removeBox(t2, n9), delete t2.legend);
        },
        afterEvent: function(t2, e11) {
            var n9 = t2.legend;
            n9 && n9.handleEvent(e11);
        }
    }, Ii = H.noop;
    N._set("global", {
        title: {
            display: false,
            fontStyle: "bold",
            fullWidth: true,
            padding: 10,
            position: "top",
            text: "",
            weight: 2000
        }
    });
    var Fi = K.extend({
        initialize: function(t2) {
            H.extend(this, t2), this.legendHitBoxes = [];
        },
        beforeUpdate: Ii,
        update: function(t2, e11, n9) {
            var i16 = this;
            return i16.beforeUpdate(), i16.maxWidth = t2, i16.maxHeight = e11, i16.margins = n9, i16.beforeSetDimensions(), i16.setDimensions(), i16.afterSetDimensions(), i16.beforeBuildLabels(), i16.buildLabels(), i16.afterBuildLabels(), i16.beforeFit(), i16.fit(), i16.afterFit(), i16.afterUpdate(), i16.minSize;
        },
        afterUpdate: Ii,
        beforeSetDimensions: Ii,
        setDimensions: function() {
            var t2 = this;
            t2.isHorizontal() ? (t2.width = t2.maxWidth, t2.left = 0, t2.right = t2.width) : (t2.height = t2.maxHeight, t2.top = 0, t2.bottom = t2.height), t2.paddingLeft = 0, t2.paddingTop = 0, t2.paddingRight = 0, t2.paddingBottom = 0, t2.minSize = {
                width: 0,
                height: 0
            };
        },
        afterSetDimensions: Ii,
        beforeBuildLabels: Ii,
        buildLabels: Ii,
        afterBuildLabels: Ii,
        beforeFit: Ii,
        fit: function() {
            var t2, e11 = this, n9 = e11.options, i16 = e11.minSize = {
            }, a20 = e11.isHorizontal();
            n9.display ? (t2 = (H.isArray(n9.text) ? n9.text.length : 1) * H.options._parseFont(n9).lineHeight + 2 * n9.padding, e11.width = i16.width = a20 ? e11.maxWidth : t2, e11.height = i16.height = a20 ? t2 : e11.maxHeight) : e11.width = i16.width = e11.height = i16.height = 0;
        },
        afterFit: Ii,
        isHorizontal: function() {
            var t2 = this.options.position;
            return "top" === t2 || "bottom" === t2;
        },
        draw: function() {
            var t2 = this, e11 = t2.ctx, n9 = t2.options;
            if (n9.display) {
                var i16, a20, r16, o17 = H.options._parseFont(n9), s16 = o17.lineHeight, l13 = s16 / 2 + n9.padding, u9 = 0, d12 = t2.top, h10 = t2.left, c8 = t2.bottom, f7 = t2.right;
                e11.fillStyle = H.valueOrDefault(n9.fontColor, N.global.defaultFontColor), e11.font = o17.string, t2.isHorizontal() ? (a20 = h10 + (f7 - h10) / 2, r16 = d12 + l13, i16 = f7 - h10) : (a20 = "left" === n9.position ? h10 + l13 : f7 - l13, r16 = d12 + (c8 - d12) / 2, i16 = c8 - d12, u9 = Math.PI * ("left" === n9.position ? -0.5 : 0.5)), e11.save(), e11.translate(a20, r16), e11.rotate(u9), e11.textAlign = "center", e11.textBaseline = "middle";
                var g7 = n9.text;
                if (H.isArray(g7)) for(var p6 = 0, m5 = 0; m5 < g7.length; ++m5)e11.fillText(g7[m5], 0, p6, i16), p6 += s16;
                else e11.fillText(g7, 0, 0, i16);
                e11.restore();
            }
        }
    });
    function Oi(t2, e11) {
        var n9 = new Fi({
            ctx: t2.ctx,
            options: e11,
            chart: t2
        });
        pe.configure(t2, n9, e11), pe.addBox(t2, n9), t2.titleBlock = n9;
    }
    var Li = {
    }, Ri = wi, zi = Ti, Ni = {
        id: "title",
        _element: Fi,
        beforeInit: function(t2) {
            var e11 = t2.options.title;
            e11 && Oi(t2, e11);
        },
        beforeUpdate: function(t2) {
            var e11 = t2.options.title, n9 = t2.titleBlock;
            e11 ? (H.mergeIf(e11, N.global.title), n9 ? (pe.configure(t2, n9, e11), n9.options = e11) : Oi(t2, e11)) : n9 && (pe.removeBox(t2, n9), delete t2.titleBlock);
        }
    };
    for(var Bi in Li.filler = Ri, Li.legend = zi, Li.title = Ni, en.helpers = H, (function() {
        function t2(t3, e11, n9) {
            var i17;
            return "string" == typeof t3 ? (i17 = parseInt(t3, 10), -1 !== t3.indexOf("%") && (i17 = i17 / 100 * e11.parentNode[n9])) : i17 = t3, i17;
        }
        function e11(t3) {
            return null != t3 && "none" !== t3;
        }
        function n9(n11, i17, a21) {
            var r17 = document.defaultView, o19 = H._getParentNode(n11), s18 = r17.getComputedStyle(n11)[i17], l16 = r17.getComputedStyle(o19)[i17], u12 = e11(s18), d13 = e11(l16), h11 = Number.POSITIVE_INFINITY;
            return u12 || d13 ? Math.min(u12 ? t2(s18, n11, a21) : h11, d13 ? t2(l16, o19, a21) : h11) : "none";
        }
        H.where = function(t3, e13) {
            if (H.isArray(t3) && Array.prototype.filter) return t3.filter(e13);
            var n11 = [];
            return H.each(t3, function(t4) {
                e13(t4) && n11.push(t4);
            }), n11;
        }, H.findIndex = Array.prototype.findIndex ? function(t3, e13, n11) {
            return t3.findIndex(e13, n11);
        } : function(t3, e13, n11) {
            n11 = (void 0) === n11 ? t3 : n11;
            for(var i17 = 0, a21 = t3.length; i17 < a21; ++i17)if (e13.call(n11, t3[i17], i17, t3)) return i17;
            return -1;
        }, H.findNextWhere = function(t3, e13, n11) {
            H.isNullOrUndef(n11) && (n11 = -1);
            for(var i17 = n11 + 1; i17 < t3.length; i17++){
                var a21 = t3[i17];
                if (e13(a21)) return a21;
            }
        }, H.findPreviousWhere = function(t3, e13, n11) {
            H.isNullOrUndef(n11) && (n11 = t3.length);
            for(var i17 = n11 - 1; i17 >= 0; i17--){
                var a22 = t3[i17];
                if (e13(a22)) return a22;
            }
        }, H.isNumber = function(t3) {
            return !isNaN(parseFloat(t3)) && isFinite(t3);
        }, H.almostEquals = function(t3, e13, n11) {
            return Math.abs(t3 - e13) < n11;
        }, H.almostWhole = function(t3, e13) {
            var n11 = Math.round(t3);
            return n11 - e13 <= t3 && n11 + e13 >= t3;
        }, H.max = function(t3) {
            return t3.reduce(function(t4, e13) {
                return isNaN(e13) ? t4 : Math.max(t4, e13);
            }, Number.NEGATIVE_INFINITY);
        }, H.min = function(t3) {
            return t3.reduce(function(t4, e13) {
                return isNaN(e13) ? t4 : Math.min(t4, e13);
            }, Number.POSITIVE_INFINITY);
        }, H.sign = Math.sign ? function(t3) {
            return Math.sign(t3);
        } : function(t3) {
            return 0 === (t3 = +t3) || isNaN(t3) ? t3 : t3 > 0 ? 1 : -1;
        }, H.toRadians = function(t3) {
            return t3 * (Math.PI / 180);
        }, H.toDegrees = function(t3) {
            return t3 * (180 / Math.PI);
        }, H._decimalPlaces = function(t3) {
            if (H.isFinite(t3)) {
                for(var e13 = 1, n11 = 0; Math.round(t3 * e13) / e13 !== t3;)e13 *= 10, n11++;
                return n11;
            }
        }, H.getAngleFromPoint = function(t3, e14) {
            var n12 = e14.x - t3.x, i17 = e14.y - t3.y, a23 = Math.sqrt(n12 * n12 + i17 * i17), r17 = Math.atan2(i17, n12);
            return r17 < -0.5 * Math.PI && (r17 += 2 * Math.PI), {
                angle: r17,
                distance: a23
            };
        }, H.distanceBetweenPoints = function(t3, e14) {
            return Math.sqrt(Math.pow(e14.x - t3.x, 2) + Math.pow(e14.y - t3.y, 2));
        }, H.aliasPixel = function(t3) {
            return t3 % 2 == 0 ? 0 : 0.5;
        }, H._alignPixel = function(t3, e14, n12) {
            var i17 = t3.currentDevicePixelRatio, a23 = n12 / 2;
            return Math.round((e14 - a23) * i17) / i17 + a23;
        }, H.splineCurve = function(t3, e14, n12, i17) {
            var a23 = t3.skip ? e14 : t3, r17 = e14, o19 = n12.skip ? e14 : n12, s18 = Math.sqrt(Math.pow(r17.x - a23.x, 2) + Math.pow(r17.y - a23.y, 2)), l16 = Math.sqrt(Math.pow(o19.x - r17.x, 2) + Math.pow(o19.y - r17.y, 2)), u12 = s18 / (s18 + l16), d13 = l16 / (s18 + l16), h11 = i17 * (u12 = isNaN(u12) ? 0 : u12), c9 = i17 * (d13 = isNaN(d13) ? 0 : d13);
            return {
                previous: {
                    x: r17.x - h11 * (o19.x - a23.x),
                    y: r17.y - h11 * (o19.y - a23.y)
                },
                next: {
                    x: r17.x + c9 * (o19.x - a23.x),
                    y: r17.y + c9 * (o19.y - a23.y)
                }
            };
        }, H.EPSILON = Number.EPSILON || 0.00000000000001, H.splineCurveMonotone = function(t3) {
            var e14, n12, i17, a23, r17, o19, s18, l16, u12, d13 = (t3 || []).map(function(t4) {
                return {
                    model: t4._model,
                    deltaK: 0,
                    mK: 0
                };
            }), h11 = d13.length;
            for(e14 = 0; e14 < h11; ++e14)if (!(i17 = d13[e14]).model.skip) {
                if (n12 = e14 > 0 ? d13[e14 - 1] : null, (a23 = e14 < h11 - 1 ? d13[e14 + 1] : null) && !a23.model.skip) {
                    var c9 = a23.model.x - i17.model.x;
                    i17.deltaK = 0 !== c9 ? (a23.model.y - i17.model.y) / c9 : 0;
                }
                !n12 || n12.model.skip ? i17.mK = i17.deltaK : !a23 || a23.model.skip ? i17.mK = n12.deltaK : this.sign(n12.deltaK) !== this.sign(i17.deltaK) ? i17.mK = 0 : i17.mK = (n12.deltaK + i17.deltaK) / 2;
            }
            for(e14 = 0; e14 < h11 - 1; ++e14)i17 = d13[e14], a23 = d13[e14 + 1], i17.model.skip || a23.model.skip || (H.almostEquals(i17.deltaK, 0, this.EPSILON) ? i17.mK = a23.mK = 0 : (r17 = i17.mK / i17.deltaK, o19 = a23.mK / i17.deltaK, (l16 = Math.pow(r17, 2) + Math.pow(o19, 2)) <= 9 || (s18 = 3 / Math.sqrt(l16), i17.mK = r17 * s18 * i17.deltaK, a23.mK = o19 * s18 * i17.deltaK)));
            for(e14 = 0; e14 < h11; ++e14)(i17 = d13[e14]).model.skip || (n12 = e14 > 0 ? d13[e14 - 1] : null, a23 = e14 < h11 - 1 ? d13[e14 + 1] : null, n12 && !n12.model.skip && (u12 = (i17.model.x - n12.model.x) / 3, i17.model.controlPointPreviousX = i17.model.x - u12, i17.model.controlPointPreviousY = i17.model.y - u12 * i17.mK), a23 && !a23.model.skip && (u12 = (a23.model.x - i17.model.x) / 3, i17.model.controlPointNextX = i17.model.x + u12, i17.model.controlPointNextY = i17.model.y + u12 * i17.mK));
        }, H.nextItem = function(t3, e14, n12) {
            return n12 ? e14 >= t3.length - 1 ? t3[0] : t3[e14 + 1] : e14 >= t3.length - 1 ? t3[t3.length - 1] : t3[e14 + 1];
        }, H.previousItem = function(t3, e14, n12) {
            return n12 ? e14 <= 0 ? t3[t3.length - 1] : t3[e14 - 1] : e14 <= 0 ? t3[0] : t3[e14 - 1];
        }, H.niceNum = function(t3, e14) {
            var n12 = Math.floor(H.log10(t3)), i17 = t3 / Math.pow(10, n12);
            return (e14 ? i17 < 1.5 ? 1 : i17 < 3 ? 2 : i17 < 7 ? 5 : 10 : i17 <= 1 ? 1 : i17 <= 2 ? 2 : i17 <= 5 ? 5 : 10) * Math.pow(10, n12);
        }, H.requestAnimFrame = "undefined" == typeof window ? function(t3) {
            t3();
        } : window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t3) {
            return window.setTimeout(t3, 1000 / 60);
        }, H.getRelativePosition = function(t3, e14) {
            var n12, i17, a23 = t3.originalEvent || t3, r17 = t3.target || t3.srcElement, o19 = r17.getBoundingClientRect(), s18 = a23.touches;
            s18 && s18.length > 0 ? (n12 = s18[0].clientX, i17 = s18[0].clientY) : (n12 = a23.clientX, i17 = a23.clientY);
            var l16 = parseFloat(H.getStyle(r17, "padding-left")), u12 = parseFloat(H.getStyle(r17, "padding-top")), d13 = parseFloat(H.getStyle(r17, "padding-right")), h11 = parseFloat(H.getStyle(r17, "padding-bottom")), c10 = o19.right - o19.left - l16 - d13, f8 = o19.bottom - o19.top - u12 - h11;
            return {
                x: n12 = Math.round((n12 - o19.left - l16) / c10 * r17.width / e14.currentDevicePixelRatio),
                y: i17 = Math.round((i17 - o19.top - u12) / f8 * r17.height / e14.currentDevicePixelRatio)
            };
        }, H.getConstraintWidth = function(t3) {
            return n9(t3, "max-width", "clientWidth");
        }, H.getConstraintHeight = function(t3) {
            return n9(t3, "max-height", "clientHeight");
        }, H._calculatePadding = function(t3, e14, n12) {
            return (e14 = H.getStyle(t3, e14)).indexOf("%") > -1 ? n12 * parseInt(e14, 10) / 100 : parseInt(e14, 10);
        }, H._getParentNode = function(t3) {
            var e14 = t3.parentNode;
            return e14 && "[object ShadowRoot]" === e14.toString() && (e14 = e14.host), e14;
        }, H.getMaximumWidth = function(t3) {
            var e14 = H._getParentNode(t3);
            if (!e14) return t3.clientWidth;
            var n12 = e14.clientWidth, i17 = n12 - H._calculatePadding(e14, "padding-left", n12) - H._calculatePadding(e14, "padding-right", n12), a23 = H.getConstraintWidth(t3);
            return isNaN(a23) ? i17 : Math.min(i17, a23);
        }, H.getMaximumHeight = function(t3) {
            var e14 = H._getParentNode(t3);
            if (!e14) return t3.clientHeight;
            var n12 = e14.clientHeight, i17 = n12 - H._calculatePadding(e14, "padding-top", n12) - H._calculatePadding(e14, "padding-bottom", n12), a23 = H.getConstraintHeight(t3);
            return isNaN(a23) ? i17 : Math.min(i17, a23);
        }, H.getStyle = function(t3, e14) {
            return t3.currentStyle ? t3.currentStyle[e14] : document.defaultView.getComputedStyle(t3, null).getPropertyValue(e14);
        }, H.retinaScale = function(t3, e14) {
            var n12 = t3.currentDevicePixelRatio = e14 || "undefined" != typeof window && window.devicePixelRatio || 1;
            if (1 !== n12) {
                var i17 = t3.canvas, a23 = t3.height, r17 = t3.width;
                i17.height = a23 * n12, i17.width = r17 * n12, t3.ctx.scale(n12, n12), i17.style.height || i17.style.width || (i17.style.height = a23 + "px", i17.style.width = r17 + "px");
            }
        }, H.fontString = function(t3, e14, n12) {
            return e14 + " " + t3 + "px " + n12;
        }, H.longestText = function(t3, e14, n12, i18) {
            var a24 = (i18 = i18 || {
            }).data = i18.data || {
            }, r18 = i18.garbageCollect = i18.garbageCollect || [];
            i18.font !== e14 && (a24 = i18.data = {
            }, r18 = i18.garbageCollect = [], i18.font = e14), t3.font = e14;
            var o19, s18, l16, u12, d13, h11 = 0, c10 = n12.length;
            for(o19 = 0; o19 < c10; o19++)if (null != (u12 = n12[o19]) && true !== H.isArray(u12)) h11 = H.measureText(t3, a24, r18, h11, u12);
            else if (H.isArray(u12)) for(s18 = 0, l16 = u12.length; s18 < l16; s18++)null == (d13 = u12[s18]) || H.isArray(d13) || (h11 = H.measureText(t3, a24, r18, h11, d13));
            var f8 = r18.length / 2;
            if (f8 > n12.length) {
                for(o19 = 0; o19 < f8; o19++)delete a24[r18[o19]];
                r18.splice(0, f8);
            }
            return h11;
        }, H.measureText = function(t3, e14, n12, i18, a24) {
            var r18 = e14[a24];
            return r18 || (r18 = e14[a24] = t3.measureText(a24).width, n12.push(a24)), r18 > i18 && (i18 = r18), i18;
        }, H.numberOfLabelLines = function(t3) {
            var e14 = 1;
            return H.each(t3, function(t4) {
                H.isArray(t4) && t4.length > e14 && (e14 = t4.length);
            }), e14;
        }, H.color = _ ? function(t3) {
            return t3 instanceof CanvasGradient && (t3 = N.global.defaultColor), _(t3);
        } : function(t3) {
            return console.error("Color.js not found!"), t3;
        }, H.getHoverColor = function(t3) {
            return t3 instanceof CanvasPattern || t3 instanceof CanvasGradient ? t3 : H.color(t3).saturate(0.5).darken(0.1).rgbString();
        };
    })(), en._adapters = rn, en.Animation = $, en.animationService = J, en.controllers = Jt, en.DatasetController = it, en.defaults = N, en.Element = K, en.elements = kt, en.Interaction = re, en.layouts = pe, en.platform = Oe, en.plugins = Le, en.Scale = yn, en.scaleService = Re, en.Ticks = on, en.Tooltip = Ye, en.helpers.each(fi, function(t2, e11) {
        en.scaleService.registerScaleType(e11, t2, t2._defaults);
    }), Li)Li.hasOwnProperty(Bi) && en.plugins.register(Li[Bi]);
    en.platform.initialize();
    var Ei = en;
    return "undefined" != typeof window && (window.Chart = en), en.Chart = en, en.Legend = Li.legend._element, en.Title = Li.title._element, en.pluginService = en.plugins, en.PluginBase = en.Element.extend({
    }), en.canvasHelpers = en.helpers.canvas, en.layoutService = en.layouts, en.LinearScaleBase = Cn, en.helpers.each([
        "Bar",
        "Bubble",
        "Doughnut",
        "Line",
        "PolarArea",
        "Radar",
        "Scatter"
    ], function(t2) {
        en[t2] = function(e11, n9) {
            return new en(e11, en.helpers.merge(n9 || {
            }, {
                type: t2.charAt(0).toLowerCase() + t2.slice(1)
            }));
        };
    }), Ei;
});

},{}]},["1j6wU","37Jv8","5bZtG"], "5bZtG", "parcelRequire0de8")

//# sourceMappingURL=index.a31bd4e4.js.map
