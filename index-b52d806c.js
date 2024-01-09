(function () {
  const o = document.createElement('link').relList;
  if (o && o.supports && o.supports('modulepreload')) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) c(d);
  new MutationObserver((d) => {
    for (const g of d)
      if (g.type === 'childList')
        for (const j of g.addedNodes)
          j.tagName === 'LINK' && j.rel === 'modulepreload' && c(j);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(d) {
    const g = {};
    return (
      d.integrity && (g.integrity = d.integrity),
      d.referrerPolicy && (g.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === 'use-credentials'
        ? (g.credentials = 'include')
        : d.crossOrigin === 'anonymous'
        ? (g.credentials = 'omit')
        : (g.credentials = 'same-origin'),
      g
    );
  }
  function c(d) {
    if (d.ep) return;
    d.ep = !0;
    const g = a(d);
    fetch(d.href, g);
  }
})();
var commonjsGlobal =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {};
function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var jsxRuntime = { exports: {} },
  reactJsxRuntime_production_min = {},
  react = { exports: {} },
  react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var l$1 = Symbol.for('react.element'),
  n$1 = Symbol.for('react.portal'),
  p$2 = Symbol.for('react.fragment'),
  q$1 = Symbol.for('react.strict_mode'),
  r = Symbol.for('react.profiler'),
  t = Symbol.for('react.provider'),
  u = Symbol.for('react.context'),
  v$1 = Symbol.for('react.forward_ref'),
  w = Symbol.for('react.suspense'),
  x = Symbol.for('react.memo'),
  y = Symbol.for('react.lazy'),
  z$1 = Symbol.iterator;
function A$1(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (z$1 && e[z$1]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var B$1 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  C$1 = Object.assign,
  D$1 = {};
function E$1(e, o, a) {
  (this.props = e),
    (this.context = o),
    (this.refs = D$1),
    (this.updater = a || B$1);
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function (e, o) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, o, 'setState');
};
E$1.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function F() {}
F.prototype = E$1.prototype;
function G$1(e, o, a) {
  (this.props = e),
    (this.context = o),
    (this.refs = D$1),
    (this.updater = a || B$1);
}
var H$1 = (G$1.prototype = new F());
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = !0;
var I$1 = Array.isArray,
  J = Object.prototype.hasOwnProperty,
  K$1 = { current: null },
  L$1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function M$1(e, o, a) {
  var c,
    d = {},
    g = null,
    j = null;
  if (o != null)
    for (c in (o.ref !== void 0 && (j = o.ref),
    o.key !== void 0 && (g = '' + o.key),
    o))
      J.call(o, c) && !L$1.hasOwnProperty(c) && (d[c] = o[c]);
  var $ = arguments.length - 2;
  if ($ === 1) d.children = a;
  else if (1 < $) {
    for (var rt = Array($), dt = 0; dt < $; dt++) rt[dt] = arguments[dt + 2];
    d.children = rt;
  }
  if (e && e.defaultProps)
    for (c in (($ = e.defaultProps), $)) d[c] === void 0 && (d[c] = $[c]);
  return {
    $$typeof: l$1,
    type: e,
    key: g,
    ref: j,
    props: d,
    _owner: K$1.current,
  };
}
function N$1(e, o) {
  return {
    $$typeof: l$1,
    type: e.type,
    key: o,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function O$1(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === l$1;
}
function escape(e) {
  var o = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (a) {
      return o[a];
    })
  );
}
var P$1 = /\/+/g;
function Q$1(e, o) {
  return typeof e == 'object' && e !== null && e.key != null
    ? escape('' + e.key)
    : o.toString(36);
}
function R$1(e, o, a, c, d) {
  var g = typeof e;
  (g === 'undefined' || g === 'boolean') && (e = null);
  var j = !1;
  if (e === null) j = !0;
  else
    switch (g) {
      case 'string':
      case 'number':
        j = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case l$1:
          case n$1:
            j = !0;
        }
    }
  if (j)
    return (
      (j = e),
      (d = d(j)),
      (e = c === '' ? '.' + Q$1(j, 0) : c),
      I$1(d)
        ? ((a = ''),
          e != null && (a = e.replace(P$1, '$&/') + '/'),
          R$1(d, o, a, '', function (dt) {
            return dt;
          }))
        : d != null &&
          (O$1(d) &&
            (d = N$1(
              d,
              a +
                (!d.key || (j && j.key === d.key)
                  ? ''
                  : ('' + d.key).replace(P$1, '$&/') + '/') +
                e
            )),
          o.push(d)),
      1
    );
  if (((j = 0), (c = c === '' ? '.' : c + ':'), I$1(e)))
    for (var $ = 0; $ < e.length; $++) {
      g = e[$];
      var rt = c + Q$1(g, $);
      j += R$1(g, o, a, rt, d);
    }
  else if (((rt = A$1(e)), typeof rt == 'function'))
    for (e = rt.call(e), $ = 0; !(g = e.next()).done; )
      (g = g.value), (rt = c + Q$1(g, $++)), (j += R$1(g, o, a, rt, d));
  else if (g === 'object')
    throw (
      ((o = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (o === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : o) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return j;
}
function S$1(e, o, a) {
  if (e == null) return e;
  var c = [],
    d = 0;
  return (
    R$1(e, c, '', '', function (g) {
      return o.call(a, g, d++);
    }),
    c
  );
}
function T$1(e) {
  if (e._status === -1) {
    var o = e._result;
    (o = o()),
      o.then(
        function (a) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = a));
        },
        function (a) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = a));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = o));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var U$1 = { current: null },
  V$1 = { transition: null },
  W$1 = {
    ReactCurrentDispatcher: U$1,
    ReactCurrentBatchConfig: V$1,
    ReactCurrentOwner: K$1,
  };
react_production_min.Children = {
  map: S$1,
  forEach: function (e, o, a) {
    S$1(
      e,
      function () {
        o.apply(this, arguments);
      },
      a
    );
  },
  count: function (e) {
    var o = 0;
    return (
      S$1(e, function () {
        o++;
      }),
      o
    );
  },
  toArray: function (e) {
    return (
      S$1(e, function (o) {
        return o;
      }) || []
    );
  },
  only: function (e) {
    if (!O$1(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function (e, o, a) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var c = C$1({}, e.props),
    d = e.key,
    g = e.ref,
    j = e._owner;
  if (o != null) {
    if (
      (o.ref !== void 0 && ((g = o.ref), (j = K$1.current)),
      o.key !== void 0 && (d = '' + o.key),
      e.type && e.type.defaultProps)
    )
      var $ = e.type.defaultProps;
    for (rt in o)
      J.call(o, rt) &&
        !L$1.hasOwnProperty(rt) &&
        (c[rt] = o[rt] === void 0 && $ !== void 0 ? $[rt] : o[rt]);
  }
  var rt = arguments.length - 2;
  if (rt === 1) c.children = a;
  else if (1 < rt) {
    $ = Array(rt);
    for (var dt = 0; dt < rt; dt++) $[dt] = arguments[dt + 2];
    c.children = $;
  }
  return { $$typeof: l$1, type: e.type, key: d, ref: g, props: c, _owner: j };
};
react_production_min.createContext = function (e) {
  return (
    (e = {
      $$typeof: u,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: t, _context: e }),
    (e.Consumer = e)
  );
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function (e) {
  var o = M$1.bind(null, e);
  return (o.type = e), o;
};
react_production_min.createRef = function () {
  return { current: null };
};
react_production_min.forwardRef = function (e) {
  return { $$typeof: v$1, render: e };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function (e) {
  return { $$typeof: y, _payload: { _status: -1, _result: e }, _init: T$1 };
};
react_production_min.memo = function (e, o) {
  return { $$typeof: x, type: e, compare: o === void 0 ? null : o };
};
react_production_min.startTransition = function (e) {
  var o = V$1.transition;
  V$1.transition = {};
  try {
    e();
  } finally {
    V$1.transition = o;
  }
};
react_production_min.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
react_production_min.useCallback = function (e, o) {
  return U$1.current.useCallback(e, o);
};
react_production_min.useContext = function (e) {
  return U$1.current.useContext(e);
};
react_production_min.useDebugValue = function () {};
react_production_min.useDeferredValue = function (e) {
  return U$1.current.useDeferredValue(e);
};
react_production_min.useEffect = function (e, o) {
  return U$1.current.useEffect(e, o);
};
react_production_min.useId = function () {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function (e, o, a) {
  return U$1.current.useImperativeHandle(e, o, a);
};
react_production_min.useInsertionEffect = function (e, o) {
  return U$1.current.useInsertionEffect(e, o);
};
react_production_min.useLayoutEffect = function (e, o) {
  return U$1.current.useLayoutEffect(e, o);
};
react_production_min.useMemo = function (e, o) {
  return U$1.current.useMemo(e, o);
};
react_production_min.useReducer = function (e, o, a) {
  return U$1.current.useReducer(e, o, a);
};
react_production_min.useRef = function (e) {
  return U$1.current.useRef(e);
};
react_production_min.useState = function (e) {
  return U$1.current.useState(e);
};
react_production_min.useSyncExternalStore = function (e, o, a) {
  return U$1.current.useSyncExternalStore(e, o, a);
};
react_production_min.useTransition = function () {
  return U$1.current.useTransition();
};
react_production_min.version = '18.2.0';
react.exports = react_production_min;
var reactExports = react.exports;
const React = getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var f = reactExports,
  k = Symbol.for('react.element'),
  l = Symbol.for('react.fragment'),
  m$1 = Object.prototype.hasOwnProperty,
  n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  p$1 = { key: !0, ref: !0, __self: !0, __source: !0 };
function q(e, o, a) {
  var c,
    d = {},
    g = null,
    j = null;
  a !== void 0 && (g = '' + a),
    o.key !== void 0 && (g = '' + o.key),
    o.ref !== void 0 && (j = o.ref);
  for (c in o) m$1.call(o, c) && !p$1.hasOwnProperty(c) && (d[c] = o[c]);
  if (e && e.defaultProps)
    for (c in ((o = e.defaultProps), o)) d[c] === void 0 && (d[c] = o[c]);
  return { $$typeof: k, type: e, key: g, ref: j, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
jsxRuntime.exports = reactJsxRuntime_production_min;
var jsxRuntimeExports = jsxRuntime.exports;
const index = '';
var client = {},
  reactDom = { exports: {} },
  reactDom_production_min = {},
  scheduler = { exports: {} },
  scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function o(wt, Ct) {
    var St = wt.length;
    wt.push(Ct);
    e: for (; 0 < St; ) {
      var Mt = (St - 1) >>> 1,
        Ut = wt[Mt];
      if (0 < d(Ut, Ct)) (wt[Mt] = Ct), (wt[St] = Ut), (St = Mt);
      else break e;
    }
  }
  function a(wt) {
    return wt.length === 0 ? null : wt[0];
  }
  function c(wt) {
    if (wt.length === 0) return null;
    var Ct = wt[0],
      St = wt.pop();
    if (St !== Ct) {
      wt[0] = St;
      e: for (var Mt = 0, Ut = wt.length, Bt = Ut >>> 1; Mt < Bt; ) {
        var Ft = 2 * (Mt + 1) - 1,
          Qt = wt[Ft],
          Yt = Ft + 1,
          sr = wt[Yt];
        if (0 > d(Qt, St))
          Yt < Ut && 0 > d(sr, Qt)
            ? ((wt[Mt] = sr), (wt[Yt] = St), (Mt = Yt))
            : ((wt[Mt] = Qt), (wt[Ft] = St), (Mt = Ft));
        else if (Yt < Ut && 0 > d(sr, St))
          (wt[Mt] = sr), (wt[Yt] = St), (Mt = Yt);
        else break e;
      }
    }
    return Ct;
  }
  function d(wt, Ct) {
    var St = wt.sortIndex - Ct.sortIndex;
    return St !== 0 ? St : wt.id - Ct.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var g = performance;
    e.unstable_now = function () {
      return g.now();
    };
  } else {
    var j = Date,
      $ = j.now();
    e.unstable_now = function () {
      return j.now() - $;
    };
  }
  var rt = [],
    dt = [],
    jt = 1,
    bt = null,
    vt = 3,
    Pt = !1,
    kt = !1,
    gt = !1,
    mt = typeof setTimeout == 'function' ? setTimeout : null,
    it = typeof clearTimeout == 'function' ? clearTimeout : null,
    et = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(wt) {
    for (var Ct = a(dt); Ct !== null; ) {
      if (Ct.callback === null) c(dt);
      else if (Ct.startTime <= wt)
        c(dt), (Ct.sortIndex = Ct.expirationTime), o(rt, Ct);
      else break;
      Ct = a(dt);
    }
  }
  function ut(wt) {
    if (((gt = !1), b(wt), !kt))
      if (a(rt) !== null) (kt = !0), Wt(pt);
      else {
        var Ct = a(dt);
        Ct !== null && At(ut, Ct.startTime - wt);
      }
  }
  function pt(wt, Ct) {
    (kt = !1), gt && ((gt = !1), it(nt), (nt = -1)), (Pt = !0);
    var St = vt;
    try {
      for (
        b(Ct), bt = a(rt);
        bt !== null && (!(bt.expirationTime > Ct) || (wt && !Et()));

      ) {
        var Mt = bt.callback;
        if (typeof Mt == 'function') {
          (bt.callback = null), (vt = bt.priorityLevel);
          var Ut = Mt(bt.expirationTime <= Ct);
          (Ct = e.unstable_now()),
            typeof Ut == 'function'
              ? (bt.callback = Ut)
              : bt === a(rt) && c(rt),
            b(Ct);
        } else c(rt);
        bt = a(rt);
      }
      if (bt !== null) var Bt = !0;
      else {
        var Ft = a(dt);
        Ft !== null && At(ut, Ft.startTime - Ct), (Bt = !1);
      }
      return Bt;
    } finally {
      (bt = null), (vt = St), (Pt = !1);
    }
  }
  var st = !1,
    ct = null,
    nt = -1,
    at = 5,
    lt = -1;
  function Et() {
    return !(e.unstable_now() - lt < at);
  }
  function Rt() {
    if (ct !== null) {
      var wt = e.unstable_now();
      lt = wt;
      var Ct = !0;
      try {
        Ct = ct(!0, wt);
      } finally {
        Ct ? yt() : ((st = !1), (ct = null));
      }
    } else st = !1;
  }
  var yt;
  if (typeof et == 'function')
    yt = function () {
      et(Rt);
    };
  else if (typeof MessageChannel < 'u') {
    var Vt = new MessageChannel(),
      Kt = Vt.port2;
    (Vt.port1.onmessage = Rt),
      (yt = function () {
        Kt.postMessage(null);
      });
  } else
    yt = function () {
      mt(Rt, 0);
    };
  function Wt(wt) {
    (ct = wt), st || ((st = !0), yt());
  }
  function At(wt, Ct) {
    nt = mt(function () {
      wt(e.unstable_now());
    }, Ct);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (wt) {
      wt.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      kt || Pt || ((kt = !0), Wt(pt));
    }),
    (e.unstable_forceFrameRate = function (wt) {
      0 > wt || 125 < wt
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (at = 0 < wt ? Math.floor(1e3 / wt) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return vt;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return a(rt);
    }),
    (e.unstable_next = function (wt) {
      switch (vt) {
        case 1:
        case 2:
        case 3:
          var Ct = 3;
          break;
        default:
          Ct = vt;
      }
      var St = vt;
      vt = Ct;
      try {
        return wt();
      } finally {
        vt = St;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (wt, Ct) {
      switch (wt) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          wt = 3;
      }
      var St = vt;
      vt = wt;
      try {
        return Ct();
      } finally {
        vt = St;
      }
    }),
    (e.unstable_scheduleCallback = function (wt, Ct, St) {
      var Mt = e.unstable_now();
      switch (
        (typeof St == 'object' && St !== null
          ? ((St = St.delay),
            (St = typeof St == 'number' && 0 < St ? Mt + St : Mt))
          : (St = Mt),
        wt)
      ) {
        case 1:
          var Ut = -1;
          break;
        case 2:
          Ut = 250;
          break;
        case 5:
          Ut = 1073741823;
          break;
        case 4:
          Ut = 1e4;
          break;
        default:
          Ut = 5e3;
      }
      return (
        (Ut = St + Ut),
        (wt = {
          id: jt++,
          callback: Ct,
          priorityLevel: wt,
          startTime: St,
          expirationTime: Ut,
          sortIndex: -1,
        }),
        St > Mt
          ? ((wt.sortIndex = St),
            o(dt, wt),
            a(rt) === null &&
              wt === a(dt) &&
              (gt ? (it(nt), (nt = -1)) : (gt = !0), At(ut, St - Mt)))
          : ((wt.sortIndex = Ut), o(rt, wt), kt || Pt || ((kt = !0), Wt(pt))),
        wt
      );
    }),
    (e.unstable_shouldYield = Et),
    (e.unstable_wrapCallback = function (wt) {
      var Ct = vt;
      return function () {
        var St = vt;
        vt = Ct;
        try {
          return wt.apply(this, arguments);
        } finally {
          vt = St;
        }
      };
    });
})(scheduler_production_min);
scheduler.exports = scheduler_production_min;
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var aa = reactExports,
  ca = schedulerExports;
function p(e) {
  for (
    var o = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, a = 1;
    a < arguments.length;
    a++
  )
    o += '&args[]=' + encodeURIComponent(arguments[a]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    o +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var da = new Set(),
  ea = {};
function fa(e, o) {
  ha(e, o), ha(e + 'Capture', o);
}
function ha(e, o) {
  for (ea[e] = o, e = 0; e < o.length; e++) da.add(o[e]);
}
var ia = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ja = Object.prototype.hasOwnProperty,
  ka =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  la = {},
  ma = {};
function oa(e) {
  return ja.call(ma, e)
    ? !0
    : ja.call(la, e)
    ? !1
    : ka.test(e)
    ? (ma[e] = !0)
    : ((la[e] = !0), !1);
}
function pa(e, o, a, c) {
  if (a !== null && a.type === 0) return !1;
  switch (typeof o) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return c
        ? !1
        : a !== null
        ? !a.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function qa(e, o, a, c) {
  if (o === null || typeof o > 'u' || pa(e, o, a, c)) return !0;
  if (c) return !1;
  if (a !== null)
    switch (a.type) {
      case 3:
        return !o;
      case 4:
        return o === !1;
      case 5:
        return isNaN(o);
      case 6:
        return isNaN(o) || 1 > o;
    }
  return !1;
}
function v(e, o, a, c, d, g, j) {
  (this.acceptsBooleans = o === 2 || o === 3 || o === 4),
    (this.attributeName = c),
    (this.attributeNamespace = d),
    (this.mustUseProperty = a),
    (this.propertyName = e),
    (this.type = o),
    (this.sanitizeURL = g),
    (this.removeEmptyString = j);
}
var z = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    z[e] = new v(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var o = e[0];
  z[o] = new v(o, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  z[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  z[e] = new v(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    z[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  z[e] = new v(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  z[e] = new v(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  z[e] = new v(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  z[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ra = /[\-:]([a-z])/g;
function sa(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var o = e.replace(ra, sa);
    z[o] = new v(o, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var o = e.replace(ra, sa);
    z[o] = new v(o, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var o = e.replace(ra, sa);
  z[o] = new v(o, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  z[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
z.xlinkHref = new v(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  z[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ta(e, o, a, c) {
  var d = z.hasOwnProperty(o) ? z[o] : null;
  (d !== null
    ? d.type !== 0
    : c ||
      !(2 < o.length) ||
      (o[0] !== 'o' && o[0] !== 'O') ||
      (o[1] !== 'n' && o[1] !== 'N')) &&
    (qa(o, a, d, c) && (a = null),
    c || d === null
      ? oa(o) && (a === null ? e.removeAttribute(o) : e.setAttribute(o, '' + a))
      : d.mustUseProperty
      ? (e[d.propertyName] = a === null ? (d.type === 3 ? !1 : '') : a)
      : ((o = d.attributeName),
        (c = d.attributeNamespace),
        a === null
          ? e.removeAttribute(o)
          : ((d = d.type),
            (a = d === 3 || (d === 4 && a === !0) ? '' : '' + a),
            c ? e.setAttributeNS(c, o, a) : e.setAttribute(o, a))));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  va = Symbol.for('react.element'),
  wa = Symbol.for('react.portal'),
  ya = Symbol.for('react.fragment'),
  za = Symbol.for('react.strict_mode'),
  Aa = Symbol.for('react.profiler'),
  Ba = Symbol.for('react.provider'),
  Ca = Symbol.for('react.context'),
  Da = Symbol.for('react.forward_ref'),
  Ea = Symbol.for('react.suspense'),
  Fa = Symbol.for('react.suspense_list'),
  Ga = Symbol.for('react.memo'),
  Ha = Symbol.for('react.lazy'),
  Ia = Symbol.for('react.offscreen'),
  Ja = Symbol.iterator;
function Ka(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ja && e[Ja]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var A = Object.assign,
  La;
function Ma(e) {
  if (La === void 0)
    try {
      throw Error();
    } catch (a) {
      var o = a.stack.trim().match(/\n( *(at )?)/);
      La = (o && o[1]) || '';
    }
  return (
    `
` +
    La +
    e
  );
}
var Na = !1;
function Oa(e, o) {
  if (!e || Na) return '';
  Na = !0;
  var a = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (o)
      if (
        ((o = function () {
          throw Error();
        }),
        Object.defineProperty(o.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(o, []);
        } catch (dt) {
          var c = dt;
        }
        Reflect.construct(e, [], o);
      } else {
        try {
          o.call();
        } catch (dt) {
          c = dt;
        }
        e.call(o.prototype);
      }
    else {
      try {
        throw Error();
      } catch (dt) {
        c = dt;
      }
      e();
    }
  } catch (dt) {
    if (dt && c && typeof dt.stack == 'string') {
      for (
        var d = dt.stack.split(`
`),
          g = c.stack.split(`
`),
          j = d.length - 1,
          $ = g.length - 1;
        1 <= j && 0 <= $ && d[j] !== g[$];

      )
        $--;
      for (; 1 <= j && 0 <= $; j--, $--)
        if (d[j] !== g[$]) {
          if (j !== 1 || $ !== 1)
            do
              if ((j--, $--, 0 > $ || d[j] !== g[$])) {
                var rt =
                  `
` + d[j].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    rt.includes('<anonymous>') &&
                    (rt = rt.replace('<anonymous>', e.displayName)),
                  rt
                );
              }
            while (1 <= j && 0 <= $);
          break;
        }
    }
  } finally {
    (Na = !1), (Error.prepareStackTrace = a);
  }
  return (e = e ? e.displayName || e.name : '') ? Ma(e) : '';
}
function Pa(e) {
  switch (e.tag) {
    case 5:
      return Ma(e.type);
    case 16:
      return Ma('Lazy');
    case 13:
      return Ma('Suspense');
    case 19:
      return Ma('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Oa(e.type, !1)), e;
    case 11:
      return (e = Oa(e.type.render, !1)), e;
    case 1:
      return (e = Oa(e.type, !0)), e;
    default:
      return '';
  }
}
function Qa(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case ya:
      return 'Fragment';
    case wa:
      return 'Portal';
    case Aa:
      return 'Profiler';
    case za:
      return 'StrictMode';
    case Ea:
      return 'Suspense';
    case Fa:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Ca:
        return (e.displayName || 'Context') + '.Consumer';
      case Ba:
        return (e._context.displayName || 'Context') + '.Provider';
      case Da:
        var o = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = o.displayName || o.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Ga:
        return (
          (o = e.displayName || null), o !== null ? o : Qa(e.type) || 'Memo'
        );
      case Ha:
        (o = e._payload), (e = e._init);
        try {
          return Qa(e(o));
        } catch {}
    }
  return null;
}
function Ra(e) {
  var o = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (o.displayName || 'Context') + '.Consumer';
    case 10:
      return (o._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = o.render),
        (e = e.displayName || e.name || ''),
        o.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return o;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return Qa(o);
    case 8:
      return o === za ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof o == 'function') return o.displayName || o.name || null;
      if (typeof o == 'string') return o;
  }
  return null;
}
function Sa(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Ta(e) {
  var o = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (o === 'checkbox' || o === 'radio')
  );
}
function Ua(e) {
  var o = Ta(e) ? 'checked' : 'value',
    a = Object.getOwnPropertyDescriptor(e.constructor.prototype, o),
    c = '' + e[o];
  if (
    !e.hasOwnProperty(o) &&
    typeof a < 'u' &&
    typeof a.get == 'function' &&
    typeof a.set == 'function'
  ) {
    var d = a.get,
      g = a.set;
    return (
      Object.defineProperty(e, o, {
        configurable: !0,
        get: function () {
          return d.call(this);
        },
        set: function (j) {
          (c = '' + j), g.call(this, j);
        },
      }),
      Object.defineProperty(e, o, { enumerable: a.enumerable }),
      {
        getValue: function () {
          return c;
        },
        setValue: function (j) {
          c = '' + j;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[o];
        },
      }
    );
  }
}
function Va(e) {
  e._valueTracker || (e._valueTracker = Ua(e));
}
function Wa(e) {
  if (!e) return !1;
  var o = e._valueTracker;
  if (!o) return !0;
  var a = o.getValue(),
    c = '';
  return (
    e && (c = Ta(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = c),
    e !== a ? (o.setValue(e), !0) : !1
  );
}
function Xa(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ya(e, o) {
  var a = o.checked;
  return A({}, o, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: a ?? e._wrapperState.initialChecked,
  });
}
function Za(e, o) {
  var a = o.defaultValue == null ? '' : o.defaultValue,
    c = o.checked != null ? o.checked : o.defaultChecked;
  (a = Sa(o.value != null ? o.value : a)),
    (e._wrapperState = {
      initialChecked: c,
      initialValue: a,
      controlled:
        o.type === 'checkbox' || o.type === 'radio'
          ? o.checked != null
          : o.value != null,
    });
}
function ab(e, o) {
  (o = o.checked), o != null && ta(e, 'checked', o, !1);
}
function bb(e, o) {
  ab(e, o);
  var a = Sa(o.value),
    c = o.type;
  if (a != null)
    c === 'number'
      ? ((a === 0 && e.value === '') || e.value != a) && (e.value = '' + a)
      : e.value !== '' + a && (e.value = '' + a);
  else if (c === 'submit' || c === 'reset') {
    e.removeAttribute('value');
    return;
  }
  o.hasOwnProperty('value')
    ? cb(e, o.type, a)
    : o.hasOwnProperty('defaultValue') && cb(e, o.type, Sa(o.defaultValue)),
    o.checked == null &&
      o.defaultChecked != null &&
      (e.defaultChecked = !!o.defaultChecked);
}
function db(e, o, a) {
  if (o.hasOwnProperty('value') || o.hasOwnProperty('defaultValue')) {
    var c = o.type;
    if (
      !(
        (c !== 'submit' && c !== 'reset') ||
        (o.value !== void 0 && o.value !== null)
      )
    )
      return;
    (o = '' + e._wrapperState.initialValue),
      a || o === e.value || (e.value = o),
      (e.defaultValue = o);
  }
  (a = e.name),
    a !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    a !== '' && (e.name = a);
}
function cb(e, o, a) {
  (o !== 'number' || Xa(e.ownerDocument) !== e) &&
    (a == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + a && (e.defaultValue = '' + a));
}
var eb = Array.isArray;
function fb(e, o, a, c) {
  if (((e = e.options), o)) {
    o = {};
    for (var d = 0; d < a.length; d++) o['$' + a[d]] = !0;
    for (a = 0; a < e.length; a++)
      (d = o.hasOwnProperty('$' + e[a].value)),
        e[a].selected !== d && (e[a].selected = d),
        d && c && (e[a].defaultSelected = !0);
  } else {
    for (a = '' + Sa(a), o = null, d = 0; d < e.length; d++) {
      if (e[d].value === a) {
        (e[d].selected = !0), c && (e[d].defaultSelected = !0);
        return;
      }
      o !== null || e[d].disabled || (o = e[d]);
    }
    o !== null && (o.selected = !0);
  }
}
function gb(e, o) {
  if (o.dangerouslySetInnerHTML != null) throw Error(p(91));
  return A({}, o, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function hb(e, o) {
  var a = o.value;
  if (a == null) {
    if (((a = o.children), (o = o.defaultValue), a != null)) {
      if (o != null) throw Error(p(92));
      if (eb(a)) {
        if (1 < a.length) throw Error(p(93));
        a = a[0];
      }
      o = a;
    }
    o == null && (o = ''), (a = o);
  }
  e._wrapperState = { initialValue: Sa(a) };
}
function ib(e, o) {
  var a = Sa(o.value),
    c = Sa(o.defaultValue);
  a != null &&
    ((a = '' + a),
    a !== e.value && (e.value = a),
    o.defaultValue == null && e.defaultValue !== a && (e.defaultValue = a)),
    c != null && (e.defaultValue = '' + c);
}
function jb(e) {
  var o = e.textContent;
  o === e._wrapperState.initialValue && o !== '' && o !== null && (e.value = o);
}
function kb(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function lb(e, o) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? kb(o)
    : e === 'http://www.w3.org/2000/svg' && o === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var mb,
  nb = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (o, a, c, d) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(o, a, c, d);
          });
        }
      : e;
  })(function (e, o) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = o;
    else {
      for (
        mb = mb || document.createElement('div'),
          mb.innerHTML = '<svg>' + o.valueOf().toString() + '</svg>',
          o = mb.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; o.firstChild; ) e.appendChild(o.firstChild);
    }
  });
function ob(e, o) {
  if (o) {
    var a = e.firstChild;
    if (a && a === e.lastChild && a.nodeType === 3) {
      a.nodeValue = o;
      return;
    }
  }
  e.textContent = o;
}
var pb = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  qb = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(pb).forEach(function (e) {
  qb.forEach(function (o) {
    (o = o + e.charAt(0).toUpperCase() + e.substring(1)), (pb[o] = pb[e]);
  });
});
function rb(e, o, a) {
  return o == null || typeof o == 'boolean' || o === ''
    ? ''
    : a || typeof o != 'number' || o === 0 || (pb.hasOwnProperty(e) && pb[e])
    ? ('' + o).trim()
    : o + 'px';
}
function sb(e, o) {
  e = e.style;
  for (var a in o)
    if (o.hasOwnProperty(a)) {
      var c = a.indexOf('--') === 0,
        d = rb(a, o[a], c);
      a === 'float' && (a = 'cssFloat'), c ? e.setProperty(a, d) : (e[a] = d);
    }
}
var tb = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ub(e, o) {
  if (o) {
    if (tb[e] && (o.children != null || o.dangerouslySetInnerHTML != null))
      throw Error(p(137, e));
    if (o.dangerouslySetInnerHTML != null) {
      if (o.children != null) throw Error(p(60));
      if (
        typeof o.dangerouslySetInnerHTML != 'object' ||
        !('__html' in o.dangerouslySetInnerHTML)
      )
        throw Error(p(61));
    }
    if (o.style != null && typeof o.style != 'object') throw Error(p(62));
  }
}
function vb(e, o) {
  if (e.indexOf('-') === -1) return typeof o.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var wb = null;
function xb(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yb = null,
  zb = null,
  Ab = null;
function Bb(e) {
  if ((e = Cb(e))) {
    if (typeof yb != 'function') throw Error(p(280));
    var o = e.stateNode;
    o && ((o = Db(o)), yb(e.stateNode, e.type, o));
  }
}
function Eb(e) {
  zb ? (Ab ? Ab.push(e) : (Ab = [e])) : (zb = e);
}
function Fb() {
  if (zb) {
    var e = zb,
      o = Ab;
    if (((Ab = zb = null), Bb(e), o)) for (e = 0; e < o.length; e++) Bb(o[e]);
  }
}
function Gb(e, o) {
  return e(o);
}
function Hb() {}
var Ib = !1;
function Jb(e, o, a) {
  if (Ib) return e(o, a);
  Ib = !0;
  try {
    return Gb(e, o, a);
  } finally {
    (Ib = !1), (zb !== null || Ab !== null) && (Hb(), Fb());
  }
}
function Kb(e, o) {
  var a = e.stateNode;
  if (a === null) return null;
  var c = Db(a);
  if (c === null) return null;
  a = c[o];
  e: switch (o) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (c = !c.disabled) ||
        ((e = e.type),
        (c = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !c);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (a && typeof a != 'function') throw Error(p(231, o, typeof a));
  return a;
}
var Lb = !1;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, 'passive', {
      get: function () {
        Lb = !0;
      },
    }),
      window.addEventListener('test', Mb, Mb),
      window.removeEventListener('test', Mb, Mb);
  } catch {
    Lb = !1;
  }
function Nb(e, o, a, c, d, g, j, $, rt) {
  var dt = Array.prototype.slice.call(arguments, 3);
  try {
    o.apply(a, dt);
  } catch (jt) {
    this.onError(jt);
  }
}
var Ob = !1,
  Pb = null,
  Qb = !1,
  Rb = null,
  Sb = {
    onError: function (e) {
      (Ob = !0), (Pb = e);
    },
  };
function Tb(e, o, a, c, d, g, j, $, rt) {
  (Ob = !1), (Pb = null), Nb.apply(Sb, arguments);
}
function Ub(e, o, a, c, d, g, j, $, rt) {
  if ((Tb.apply(this, arguments), Ob)) {
    if (Ob) {
      var dt = Pb;
      (Ob = !1), (Pb = null);
    } else throw Error(p(198));
    Qb || ((Qb = !0), (Rb = dt));
  }
}
function Vb(e) {
  var o = e,
    a = e;
  if (e.alternate) for (; o.return; ) o = o.return;
  else {
    e = o;
    do (o = e), o.flags & 4098 && (a = o.return), (e = o.return);
    while (e);
  }
  return o.tag === 3 ? a : null;
}
function Wb(e) {
  if (e.tag === 13) {
    var o = e.memoizedState;
    if (
      (o === null && ((e = e.alternate), e !== null && (o = e.memoizedState)),
      o !== null)
    )
      return o.dehydrated;
  }
  return null;
}
function Xb(e) {
  if (Vb(e) !== e) throw Error(p(188));
}
function Yb(e) {
  var o = e.alternate;
  if (!o) {
    if (((o = Vb(e)), o === null)) throw Error(p(188));
    return o !== e ? null : e;
  }
  for (var a = e, c = o; ; ) {
    var d = a.return;
    if (d === null) break;
    var g = d.alternate;
    if (g === null) {
      if (((c = d.return), c !== null)) {
        a = c;
        continue;
      }
      break;
    }
    if (d.child === g.child) {
      for (g = d.child; g; ) {
        if (g === a) return Xb(d), e;
        if (g === c) return Xb(d), o;
        g = g.sibling;
      }
      throw Error(p(188));
    }
    if (a.return !== c.return) (a = d), (c = g);
    else {
      for (var j = !1, $ = d.child; $; ) {
        if ($ === a) {
          (j = !0), (a = d), (c = g);
          break;
        }
        if ($ === c) {
          (j = !0), (c = d), (a = g);
          break;
        }
        $ = $.sibling;
      }
      if (!j) {
        for ($ = g.child; $; ) {
          if ($ === a) {
            (j = !0), (a = g), (c = d);
            break;
          }
          if ($ === c) {
            (j = !0), (c = g), (a = d);
            break;
          }
          $ = $.sibling;
        }
        if (!j) throw Error(p(189));
      }
    }
    if (a.alternate !== c) throw Error(p(190));
  }
  if (a.tag !== 3) throw Error(p(188));
  return a.stateNode.current === a ? e : o;
}
function Zb(e) {
  return (e = Yb(e)), e !== null ? $b(e) : null;
}
function $b(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var o = $b(e);
    if (o !== null) return o;
    e = e.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback,
  bc = ca.unstable_cancelCallback,
  cc = ca.unstable_shouldYield,
  dc = ca.unstable_requestPaint,
  B = ca.unstable_now,
  ec = ca.unstable_getCurrentPriorityLevel,
  fc = ca.unstable_ImmediatePriority,
  gc = ca.unstable_UserBlockingPriority,
  hc = ca.unstable_NormalPriority,
  ic = ca.unstable_LowPriority,
  jc = ca.unstable_IdlePriority,
  kc = null,
  lc = null;
function mc(e) {
  if (lc && typeof lc.onCommitFiberRoot == 'function')
    try {
      lc.onCommitFiberRoot(kc, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var oc = Math.clz32 ? Math.clz32 : nc,
  pc = Math.log,
  qc = Math.LN2;
function nc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((pc(e) / qc) | 0)) | 0;
}
var rc = 64,
  sc = 4194304;
function tc(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function uc(e, o) {
  var a = e.pendingLanes;
  if (a === 0) return 0;
  var c = 0,
    d = e.suspendedLanes,
    g = e.pingedLanes,
    j = a & 268435455;
  if (j !== 0) {
    var $ = j & ~d;
    $ !== 0 ? (c = tc($)) : ((g &= j), g !== 0 && (c = tc(g)));
  } else (j = a & ~d), j !== 0 ? (c = tc(j)) : g !== 0 && (c = tc(g));
  if (c === 0) return 0;
  if (
    o !== 0 &&
    o !== c &&
    !(o & d) &&
    ((d = c & -c), (g = o & -o), d >= g || (d === 16 && (g & 4194240) !== 0))
  )
    return o;
  if ((c & 4 && (c |= a & 16), (o = e.entangledLanes), o !== 0))
    for (e = e.entanglements, o &= c; 0 < o; )
      (a = 31 - oc(o)), (d = 1 << a), (c |= e[a]), (o &= ~d);
  return c;
}
function vc(e, o) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return o + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return o + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(e, o) {
  for (
    var a = e.suspendedLanes,
      c = e.pingedLanes,
      d = e.expirationTimes,
      g = e.pendingLanes;
    0 < g;

  ) {
    var j = 31 - oc(g),
      $ = 1 << j,
      rt = d[j];
    rt === -1
      ? (!($ & a) || $ & c) && (d[j] = vc($, o))
      : rt <= o && (e.expiredLanes |= $),
      (g &= ~$);
  }
}
function xc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function yc() {
  var e = rc;
  return (rc <<= 1), !(rc & 4194240) && (rc = 64), e;
}
function zc(e) {
  for (var o = [], a = 0; 31 > a; a++) o.push(e);
  return o;
}
function Ac(e, o, a) {
  (e.pendingLanes |= o),
    o !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (o = 31 - oc(o)),
    (e[o] = a);
}
function Bc(e, o) {
  var a = e.pendingLanes & ~o;
  (e.pendingLanes = o),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= o),
    (e.mutableReadLanes &= o),
    (e.entangledLanes &= o),
    (o = e.entanglements);
  var c = e.eventTimes;
  for (e = e.expirationTimes; 0 < a; ) {
    var d = 31 - oc(a),
      g = 1 << d;
    (o[d] = 0), (c[d] = -1), (e[d] = -1), (a &= ~g);
  }
}
function Cc(e, o) {
  var a = (e.entangledLanes |= o);
  for (e = e.entanglements; a; ) {
    var c = 31 - oc(a),
      d = 1 << c;
    (d & o) | (e[c] & o) && (e[c] |= o), (a &= ~d);
  }
}
var C = 0;
function Dc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ec,
  Fc,
  Gc,
  Hc,
  Ic,
  Jc = !1,
  Kc = [],
  Lc = null,
  Mc = null,
  Nc = null,
  Oc = new Map(),
  Pc = new Map(),
  Qc = [],
  Rc =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Sc(e, o) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Lc = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Mc = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Nc = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Oc.delete(o.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Pc.delete(o.pointerId);
  }
}
function Tc(e, o, a, c, d, g) {
  return e === null || e.nativeEvent !== g
    ? ((e = {
        blockedOn: o,
        domEventName: a,
        eventSystemFlags: c,
        nativeEvent: g,
        targetContainers: [d],
      }),
      o !== null && ((o = Cb(o)), o !== null && Fc(o)),
      e)
    : ((e.eventSystemFlags |= c),
      (o = e.targetContainers),
      d !== null && o.indexOf(d) === -1 && o.push(d),
      e);
}
function Uc(e, o, a, c, d) {
  switch (o) {
    case 'focusin':
      return (Lc = Tc(Lc, e, o, a, c, d)), !0;
    case 'dragenter':
      return (Mc = Tc(Mc, e, o, a, c, d)), !0;
    case 'mouseover':
      return (Nc = Tc(Nc, e, o, a, c, d)), !0;
    case 'pointerover':
      var g = d.pointerId;
      return Oc.set(g, Tc(Oc.get(g) || null, e, o, a, c, d)), !0;
    case 'gotpointercapture':
      return (
        (g = d.pointerId), Pc.set(g, Tc(Pc.get(g) || null, e, o, a, c, d)), !0
      );
  }
  return !1;
}
function Vc(e) {
  var o = Wc(e.target);
  if (o !== null) {
    var a = Vb(o);
    if (a !== null) {
      if (((o = a.tag), o === 13)) {
        if (((o = Wb(a)), o !== null)) {
          (e.blockedOn = o),
            Ic(e.priority, function () {
              Gc(a);
            });
          return;
        }
      } else if (o === 3 && a.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Xc(e) {
  if (e.blockedOn !== null) return !1;
  for (var o = e.targetContainers; 0 < o.length; ) {
    var a = Yc(e.domEventName, e.eventSystemFlags, o[0], e.nativeEvent);
    if (a === null) {
      a = e.nativeEvent;
      var c = new a.constructor(a.type, a);
      (wb = c), a.target.dispatchEvent(c), (wb = null);
    } else return (o = Cb(a)), o !== null && Fc(o), (e.blockedOn = a), !1;
    o.shift();
  }
  return !0;
}
function Zc(e, o, a) {
  Xc(e) && a.delete(o);
}
function $c() {
  (Jc = !1),
    Lc !== null && Xc(Lc) && (Lc = null),
    Mc !== null && Xc(Mc) && (Mc = null),
    Nc !== null && Xc(Nc) && (Nc = null),
    Oc.forEach(Zc),
    Pc.forEach(Zc);
}
function ad(e, o) {
  e.blockedOn === o &&
    ((e.blockedOn = null),
    Jc ||
      ((Jc = !0),
      ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(e) {
  function o(d) {
    return ad(d, e);
  }
  if (0 < Kc.length) {
    ad(Kc[0], e);
    for (var a = 1; a < Kc.length; a++) {
      var c = Kc[a];
      c.blockedOn === e && (c.blockedOn = null);
    }
  }
  for (
    Lc !== null && ad(Lc, e),
      Mc !== null && ad(Mc, e),
      Nc !== null && ad(Nc, e),
      Oc.forEach(o),
      Pc.forEach(o),
      a = 0;
    a < Qc.length;
    a++
  )
    (c = Qc[a]), c.blockedOn === e && (c.blockedOn = null);
  for (; 0 < Qc.length && ((a = Qc[0]), a.blockedOn === null); )
    Vc(a), a.blockedOn === null && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig,
  dd = !0;
function ed(e, o, a, c) {
  var d = C,
    g = cd.transition;
  cd.transition = null;
  try {
    (C = 1), fd(e, o, a, c);
  } finally {
    (C = d), (cd.transition = g);
  }
}
function gd(e, o, a, c) {
  var d = C,
    g = cd.transition;
  cd.transition = null;
  try {
    (C = 4), fd(e, o, a, c);
  } finally {
    (C = d), (cd.transition = g);
  }
}
function fd(e, o, a, c) {
  if (dd) {
    var d = Yc(e, o, a, c);
    if (d === null) hd(e, o, c, id, a), Sc(e, c);
    else if (Uc(d, e, o, a, c)) c.stopPropagation();
    else if ((Sc(e, c), o & 4 && -1 < Rc.indexOf(e))) {
      for (; d !== null; ) {
        var g = Cb(d);
        if (
          (g !== null && Ec(g),
          (g = Yc(e, o, a, c)),
          g === null && hd(e, o, c, id, a),
          g === d)
        )
          break;
        d = g;
      }
      d !== null && c.stopPropagation();
    } else hd(e, o, c, null, a);
  }
}
var id = null;
function Yc(e, o, a, c) {
  if (((id = null), (e = xb(c)), (e = Wc(e)), e !== null))
    if (((o = Vb(e)), o === null)) e = null;
    else if (((a = o.tag), a === 13)) {
      if (((e = Wb(o)), e !== null)) return e;
      e = null;
    } else if (a === 3) {
      if (o.stateNode.current.memoizedState.isDehydrated)
        return o.tag === 3 ? o.stateNode.containerInfo : null;
      e = null;
    } else o !== e && (e = null);
  return (id = e), null;
}
function jd(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null,
  ld = null,
  md = null;
function nd() {
  if (md) return md;
  var e,
    o = ld,
    a = o.length,
    c,
    d = 'value' in kd ? kd.value : kd.textContent,
    g = d.length;
  for (e = 0; e < a && o[e] === d[e]; e++);
  var j = a - e;
  for (c = 1; c <= j && o[a - c] === d[g - c]; c++);
  return (md = d.slice(e, 1 < c ? 1 - c : void 0));
}
function od(e) {
  var o = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && o === 13 && (e = 13))
      : (e = o),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pd() {
  return !0;
}
function qd() {
  return !1;
}
function rd(e) {
  function o(a, c, d, g, j) {
    (this._reactName = a),
      (this._targetInst = d),
      (this.type = c),
      (this.nativeEvent = g),
      (this.target = j),
      (this.currentTarget = null);
    for (var $ in e)
      e.hasOwnProperty($) && ((a = e[$]), (this[$] = a ? a(g) : g[$]));
    return (
      (this.isDefaultPrevented = (
        g.defaultPrevented != null ? g.defaultPrevented : g.returnValue === !1
      )
        ? pd
        : qd),
      (this.isPropagationStopped = qd),
      this
    );
  }
  return (
    A(o.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a &&
          (a.preventDefault
            ? a.preventDefault()
            : typeof a.returnValue != 'unknown' && (a.returnValue = !1),
          (this.isDefaultPrevented = pd));
      },
      stopPropagation: function () {
        var a = this.nativeEvent;
        a &&
          (a.stopPropagation
            ? a.stopPropagation()
            : typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
          (this.isPropagationStopped = pd));
      },
      persist: function () {},
      isPersistent: pd,
    }),
    o
  );
}
var sd = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  td = rd(sd),
  ud = A({}, sd, { view: 0, detail: 0 }),
  vd = rd(ud),
  wd,
  xd,
  yd,
  Ad = A({}, ud, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: zd,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== yd &&
            (yd && e.type === 'mousemove'
              ? ((wd = e.screenX - yd.screenX), (xd = e.screenY - yd.screenY))
              : (xd = wd = 0),
            (yd = e)),
          wd);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : xd;
    },
  }),
  Bd = rd(Ad),
  Cd = A({}, Ad, { dataTransfer: 0 }),
  Dd = rd(Cd),
  Ed = A({}, ud, { relatedTarget: 0 }),
  Fd = rd(Ed),
  Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Hd = rd(Gd),
  Id = A({}, sd, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jd = rd(Id),
  Kd = A({}, sd, { data: 0 }),
  Ld = rd(Kd),
  Md = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Nd = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  Od = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function Pd(e) {
  var o = this.nativeEvent;
  return o.getModifierState ? o.getModifierState(e) : (e = Od[e]) ? !!o[e] : !1;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, {
    key: function (e) {
      if (e.key) {
        var o = Md[e.key] || e.key;
        if (o !== 'Unidentified') return o;
      }
      return e.type === 'keypress'
        ? ((e = od(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? Nd[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: zd,
    charCode: function (e) {
      return e.type === 'keypress' ? od(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? od(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  Rd = rd(Qd),
  Sd = A({}, Ad, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Td = rd(Sd),
  Ud = A({}, ud, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: zd,
  }),
  Vd = rd(Ud),
  Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Xd = rd(Wd),
  Yd = A({}, Ad, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Zd = rd(Yd),
  $d = [9, 13, 27, 32],
  ae = ia && 'CompositionEvent' in window,
  be = null;
ia && 'documentMode' in document && (be = document.documentMode);
var ce = ia && 'TextEvent' in window && !be,
  de = ia && (!ae || (be && 8 < be && 11 >= be)),
  ee = String.fromCharCode(32),
  fe = !1;
function ge(e, o) {
  switch (e) {
    case 'keyup':
      return $d.indexOf(o.keyCode) !== -1;
    case 'keydown':
      return o.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function he(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var ie = !1;
function je(e, o) {
  switch (e) {
    case 'compositionend':
      return he(o);
    case 'keypress':
      return o.which !== 32 ? null : ((fe = !0), ee);
    case 'textInput':
      return (e = o.data), e === ee && fe ? null : e;
    default:
      return null;
  }
}
function ke(e, o) {
  if (ie)
    return e === 'compositionend' || (!ae && ge(e, o))
      ? ((e = nd()), (md = ld = kd = null), (ie = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(o.ctrlKey || o.altKey || o.metaKey) || (o.ctrlKey && o.altKey)) {
        if (o.char && 1 < o.char.length) return o.char;
        if (o.which) return String.fromCharCode(o.which);
      }
      return null;
    case 'compositionend':
      return de && o.locale !== 'ko' ? null : o.data;
    default:
      return null;
  }
}
var le = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function me(e) {
  var o = e && e.nodeName && e.nodeName.toLowerCase();
  return o === 'input' ? !!le[e.type] : o === 'textarea';
}
function ne(e, o, a, c) {
  Eb(c),
    (o = oe(o, 'onChange')),
    0 < o.length &&
      ((a = new td('onChange', 'change', null, a, c)),
      e.push({ event: a, listeners: o }));
}
var pe = null,
  qe = null;
function re(e) {
  se(e, 0);
}
function te(e) {
  var o = ue(e);
  if (Wa(o)) return e;
}
function ve(e, o) {
  if (e === 'change') return o;
}
var we = !1;
if (ia) {
  var xe;
  if (ia) {
    var ye = 'oninput' in document;
    if (!ye) {
      var ze = document.createElement('div');
      ze.setAttribute('oninput', 'return;'),
        (ye = typeof ze.oninput == 'function');
    }
    xe = ye;
  } else xe = !1;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent('onpropertychange', Be), (qe = pe = null));
}
function Be(e) {
  if (e.propertyName === 'value' && te(qe)) {
    var o = [];
    ne(o, qe, e, xb(e)), Jb(re, o);
  }
}
function Ce(e, o, a) {
  e === 'focusin'
    ? (Ae(), (pe = o), (qe = a), pe.attachEvent('onpropertychange', Be))
    : e === 'focusout' && Ae();
}
function De(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return te(qe);
}
function Ee(e, o) {
  if (e === 'click') return te(o);
}
function Fe(e, o) {
  if (e === 'input' || e === 'change') return te(o);
}
function Ge(e, o) {
  return (e === o && (e !== 0 || 1 / e === 1 / o)) || (e !== e && o !== o);
}
var He = typeof Object.is == 'function' ? Object.is : Ge;
function Ie(e, o) {
  if (He(e, o)) return !0;
  if (typeof e != 'object' || e === null || typeof o != 'object' || o === null)
    return !1;
  var a = Object.keys(e),
    c = Object.keys(o);
  if (a.length !== c.length) return !1;
  for (c = 0; c < a.length; c++) {
    var d = a[c];
    if (!ja.call(o, d) || !He(e[d], o[d])) return !1;
  }
  return !0;
}
function Je(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ke(e, o) {
  var a = Je(e);
  e = 0;
  for (var c; a; ) {
    if (a.nodeType === 3) {
      if (((c = e + a.textContent.length), e <= o && c >= o))
        return { node: a, offset: o - e };
      e = c;
    }
    e: {
      for (; a; ) {
        if (a.nextSibling) {
          a = a.nextSibling;
          break e;
        }
        a = a.parentNode;
      }
      a = void 0;
    }
    a = Je(a);
  }
}
function Le(e, o) {
  return e && o
    ? e === o
      ? !0
      : e && e.nodeType === 3
      ? !1
      : o && o.nodeType === 3
      ? Le(e, o.parentNode)
      : 'contains' in e
      ? e.contains(o)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(o) & 16)
      : !1
    : !1;
}
function Me() {
  for (var e = window, o = Xa(); o instanceof e.HTMLIFrameElement; ) {
    try {
      var a = typeof o.contentWindow.location.href == 'string';
    } catch {
      a = !1;
    }
    if (a) e = o.contentWindow;
    else break;
    o = Xa(e.document);
  }
  return o;
}
function Ne(e) {
  var o = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    o &&
    ((o === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      o === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Oe(e) {
  var o = Me(),
    a = e.focusedElem,
    c = e.selectionRange;
  if (
    o !== a &&
    a &&
    a.ownerDocument &&
    Le(a.ownerDocument.documentElement, a)
  ) {
    if (c !== null && Ne(a)) {
      if (
        ((o = c.start),
        (e = c.end),
        e === void 0 && (e = o),
        'selectionStart' in a)
      )
        (a.selectionStart = o), (a.selectionEnd = Math.min(e, a.value.length));
      else if (
        ((e = ((o = a.ownerDocument || document) && o.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var d = a.textContent.length,
          g = Math.min(c.start, d);
        (c = c.end === void 0 ? g : Math.min(c.end, d)),
          !e.extend && g > c && ((d = c), (c = g), (g = d)),
          (d = Ke(a, g));
        var j = Ke(a, c);
        d &&
          j &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== d.node ||
            e.anchorOffset !== d.offset ||
            e.focusNode !== j.node ||
            e.focusOffset !== j.offset) &&
          ((o = o.createRange()),
          o.setStart(d.node, d.offset),
          e.removeAllRanges(),
          g > c
            ? (e.addRange(o), e.extend(j.node, j.offset))
            : (o.setEnd(j.node, j.offset), e.addRange(o)));
      }
    }
    for (o = [], e = a; (e = e.parentNode); )
      e.nodeType === 1 &&
        o.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof a.focus == 'function' && a.focus(), a = 0; a < o.length; a++)
      (e = o[a]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Pe = ia && 'documentMode' in document && 11 >= document.documentMode,
  Qe = null,
  Re = null,
  Se = null,
  Te = !1;
function Ue(e, o, a) {
  var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
  Te ||
    Qe == null ||
    Qe !== Xa(c) ||
    ((c = Qe),
    'selectionStart' in c && Ne(c)
      ? (c = { start: c.selectionStart, end: c.selectionEnd })
      : ((c = (
          (c.ownerDocument && c.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (c = {
          anchorNode: c.anchorNode,
          anchorOffset: c.anchorOffset,
          focusNode: c.focusNode,
          focusOffset: c.focusOffset,
        })),
    (Se && Ie(Se, c)) ||
      ((Se = c),
      (c = oe(Re, 'onSelect')),
      0 < c.length &&
        ((o = new td('onSelect', 'select', null, o, a)),
        e.push({ event: o, listeners: c }),
        (o.target = Qe))));
}
function Ve(e, o) {
  var a = {};
  return (
    (a[e.toLowerCase()] = o.toLowerCase()),
    (a['Webkit' + e] = 'webkit' + o),
    (a['Moz' + e] = 'moz' + o),
    a
  );
}
var We = {
    animationend: Ve('Animation', 'AnimationEnd'),
    animationiteration: Ve('Animation', 'AnimationIteration'),
    animationstart: Ve('Animation', 'AnimationStart'),
    transitionend: Ve('Transition', 'TransitionEnd'),
  },
  Xe = {},
  Ye = {};
ia &&
  ((Ye = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete We.animationend.animation,
    delete We.animationiteration.animation,
    delete We.animationstart.animation),
  'TransitionEvent' in window || delete We.transitionend.transition);
function Ze(e) {
  if (Xe[e]) return Xe[e];
  if (!We[e]) return e;
  var o = We[e],
    a;
  for (a in o) if (o.hasOwnProperty(a) && a in Ye) return (Xe[e] = o[a]);
  return e;
}
var $e = Ze('animationend'),
  af = Ze('animationiteration'),
  bf = Ze('animationstart'),
  cf = Ze('transitionend'),
  df = new Map(),
  ef =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function ff(e, o) {
  df.set(e, o), fa(o, [e]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf],
    jf = hf.toLowerCase(),
    kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, 'on' + kf);
}
ff($e, 'onAnimationEnd');
ff(af, 'onAnimationIteration');
ff(bf, 'onAnimationStart');
ff('dblclick', 'onDoubleClick');
ff('focusin', 'onFocus');
ff('focusout', 'onBlur');
ff(cf, 'onTransitionEnd');
ha('onMouseEnter', ['mouseout', 'mouseover']);
ha('onMouseLeave', ['mouseout', 'mouseover']);
ha('onPointerEnter', ['pointerout', 'pointerover']);
ha('onPointerLeave', ['pointerout', 'pointerover']);
fa(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
fa(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
fa('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
fa(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
fa(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
fa(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var lf =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  mf = new Set('cancel close invalid load scroll toggle'.split(' ').concat(lf));
function nf(e, o, a) {
  var c = e.type || 'unknown-event';
  (e.currentTarget = a), Ub(c, o, void 0, e), (e.currentTarget = null);
}
function se(e, o) {
  o = (o & 4) !== 0;
  for (var a = 0; a < e.length; a++) {
    var c = e[a],
      d = c.event;
    c = c.listeners;
    e: {
      var g = void 0;
      if (o)
        for (var j = c.length - 1; 0 <= j; j--) {
          var $ = c[j],
            rt = $.instance,
            dt = $.currentTarget;
          if ((($ = $.listener), rt !== g && d.isPropagationStopped())) break e;
          nf(d, $, dt), (g = rt);
        }
      else
        for (j = 0; j < c.length; j++) {
          if (
            (($ = c[j]),
            (rt = $.instance),
            (dt = $.currentTarget),
            ($ = $.listener),
            rt !== g && d.isPropagationStopped())
          )
            break e;
          nf(d, $, dt), (g = rt);
        }
    }
  }
  if (Qb) throw ((e = Rb), (Qb = !1), (Rb = null), e);
}
function D(e, o) {
  var a = o[of];
  a === void 0 && (a = o[of] = new Set());
  var c = e + '__bubble';
  a.has(c) || (pf(o, e, 2, !1), a.add(c));
}
function qf(e, o, a) {
  var c = 0;
  o && (c |= 4), pf(a, e, c, o);
}
var rf = '_reactListening' + Math.random().toString(36).slice(2);
function sf(e) {
  if (!e[rf]) {
    (e[rf] = !0),
      da.forEach(function (a) {
        a !== 'selectionchange' && (mf.has(a) || qf(a, !1, e), qf(a, !0, e));
      });
    var o = e.nodeType === 9 ? e : e.ownerDocument;
    o === null || o[rf] || ((o[rf] = !0), qf('selectionchange', !1, o));
  }
}
function pf(e, o, a, c) {
  switch (jd(o)) {
    case 1:
      var d = ed;
      break;
    case 4:
      d = gd;
      break;
    default:
      d = fd;
  }
  (a = d.bind(null, o, a, e)),
    (d = void 0),
    !Lb ||
      (o !== 'touchstart' && o !== 'touchmove' && o !== 'wheel') ||
      (d = !0),
    c
      ? d !== void 0
        ? e.addEventListener(o, a, { capture: !0, passive: d })
        : e.addEventListener(o, a, !0)
      : d !== void 0
      ? e.addEventListener(o, a, { passive: d })
      : e.addEventListener(o, a, !1);
}
function hd(e, o, a, c, d) {
  var g = c;
  if (!(o & 1) && !(o & 2) && c !== null)
    e: for (;;) {
      if (c === null) return;
      var j = c.tag;
      if (j === 3 || j === 4) {
        var $ = c.stateNode.containerInfo;
        if ($ === d || ($.nodeType === 8 && $.parentNode === d)) break;
        if (j === 4)
          for (j = c.return; j !== null; ) {
            var rt = j.tag;
            if (
              (rt === 3 || rt === 4) &&
              ((rt = j.stateNode.containerInfo),
              rt === d || (rt.nodeType === 8 && rt.parentNode === d))
            )
              return;
            j = j.return;
          }
        for (; $ !== null; ) {
          if (((j = Wc($)), j === null)) return;
          if (((rt = j.tag), rt === 5 || rt === 6)) {
            c = g = j;
            continue e;
          }
          $ = $.parentNode;
        }
      }
      c = c.return;
    }
  Jb(function () {
    var dt = g,
      jt = xb(a),
      bt = [];
    e: {
      var vt = df.get(e);
      if (vt !== void 0) {
        var Pt = td,
          kt = e;
        switch (e) {
          case 'keypress':
            if (od(a) === 0) break e;
          case 'keydown':
          case 'keyup':
            Pt = Rd;
            break;
          case 'focusin':
            (kt = 'focus'), (Pt = Fd);
            break;
          case 'focusout':
            (kt = 'blur'), (Pt = Fd);
            break;
          case 'beforeblur':
          case 'afterblur':
            Pt = Fd;
            break;
          case 'click':
            if (a.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            Pt = Bd;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            Pt = Dd;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            Pt = Vd;
            break;
          case $e:
          case af:
          case bf:
            Pt = Hd;
            break;
          case cf:
            Pt = Xd;
            break;
          case 'scroll':
            Pt = vd;
            break;
          case 'wheel':
            Pt = Zd;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            Pt = Jd;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            Pt = Td;
        }
        var gt = (o & 4) !== 0,
          mt = !gt && e === 'scroll',
          it = gt ? (vt !== null ? vt + 'Capture' : null) : vt;
        gt = [];
        for (var et = dt, b; et !== null; ) {
          b = et;
          var ut = b.stateNode;
          if (
            (b.tag === 5 &&
              ut !== null &&
              ((b = ut),
              it !== null &&
                ((ut = Kb(et, it)), ut != null && gt.push(tf(et, ut, b)))),
            mt)
          )
            break;
          et = et.return;
        }
        0 < gt.length &&
          ((vt = new Pt(vt, kt, null, a, jt)),
          bt.push({ event: vt, listeners: gt }));
      }
    }
    if (!(o & 7)) {
      e: {
        if (
          ((vt = e === 'mouseover' || e === 'pointerover'),
          (Pt = e === 'mouseout' || e === 'pointerout'),
          vt &&
            a !== wb &&
            (kt = a.relatedTarget || a.fromElement) &&
            (Wc(kt) || kt[uf]))
        )
          break e;
        if (
          (Pt || vt) &&
          ((vt =
            jt.window === jt
              ? jt
              : (vt = jt.ownerDocument)
              ? vt.defaultView || vt.parentWindow
              : window),
          Pt
            ? ((kt = a.relatedTarget || a.toElement),
              (Pt = dt),
              (kt = kt ? Wc(kt) : null),
              kt !== null &&
                ((mt = Vb(kt)), kt !== mt || (kt.tag !== 5 && kt.tag !== 6)) &&
                (kt = null))
            : ((Pt = null), (kt = dt)),
          Pt !== kt)
        ) {
          if (
            ((gt = Bd),
            (ut = 'onMouseLeave'),
            (it = 'onMouseEnter'),
            (et = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((gt = Td),
              (ut = 'onPointerLeave'),
              (it = 'onPointerEnter'),
              (et = 'pointer')),
            (mt = Pt == null ? vt : ue(Pt)),
            (b = kt == null ? vt : ue(kt)),
            (vt = new gt(ut, et + 'leave', Pt, a, jt)),
            (vt.target = mt),
            (vt.relatedTarget = b),
            (ut = null),
            Wc(jt) === dt &&
              ((gt = new gt(it, et + 'enter', kt, a, jt)),
              (gt.target = b),
              (gt.relatedTarget = mt),
              (ut = gt)),
            (mt = ut),
            Pt && kt)
          )
            t: {
              for (gt = Pt, it = kt, et = 0, b = gt; b; b = vf(b)) et++;
              for (b = 0, ut = it; ut; ut = vf(ut)) b++;
              for (; 0 < et - b; ) (gt = vf(gt)), et--;
              for (; 0 < b - et; ) (it = vf(it)), b--;
              for (; et--; ) {
                if (gt === it || (it !== null && gt === it.alternate)) break t;
                (gt = vf(gt)), (it = vf(it));
              }
              gt = null;
            }
          else gt = null;
          Pt !== null && wf(bt, vt, Pt, gt, !1),
            kt !== null && mt !== null && wf(bt, mt, kt, gt, !0);
        }
      }
      e: {
        if (
          ((vt = dt ? ue(dt) : window),
          (Pt = vt.nodeName && vt.nodeName.toLowerCase()),
          Pt === 'select' || (Pt === 'input' && vt.type === 'file'))
        )
          var pt = ve;
        else if (me(vt))
          if (we) pt = Fe;
          else {
            pt = De;
            var st = Ce;
          }
        else
          (Pt = vt.nodeName) &&
            Pt.toLowerCase() === 'input' &&
            (vt.type === 'checkbox' || vt.type === 'radio') &&
            (pt = Ee);
        if (pt && (pt = pt(e, dt))) {
          ne(bt, pt, a, jt);
          break e;
        }
        st && st(e, vt, dt),
          e === 'focusout' &&
            (st = vt._wrapperState) &&
            st.controlled &&
            vt.type === 'number' &&
            cb(vt, 'number', vt.value);
      }
      switch (((st = dt ? ue(dt) : window), e)) {
        case 'focusin':
          (me(st) || st.contentEditable === 'true') &&
            ((Qe = st), (Re = dt), (Se = null));
          break;
        case 'focusout':
          Se = Re = Qe = null;
          break;
        case 'mousedown':
          Te = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Te = !1), Ue(bt, a, jt);
          break;
        case 'selectionchange':
          if (Pe) break;
        case 'keydown':
        case 'keyup':
          Ue(bt, a, jt);
      }
      var ct;
      if (ae)
        e: {
          switch (e) {
            case 'compositionstart':
              var nt = 'onCompositionStart';
              break e;
            case 'compositionend':
              nt = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              nt = 'onCompositionUpdate';
              break e;
          }
          nt = void 0;
        }
      else
        ie
          ? ge(e, a) && (nt = 'onCompositionEnd')
          : e === 'keydown' && a.keyCode === 229 && (nt = 'onCompositionStart');
      nt &&
        (de &&
          a.locale !== 'ko' &&
          (ie || nt !== 'onCompositionStart'
            ? nt === 'onCompositionEnd' && ie && (ct = nd())
            : ((kd = jt),
              (ld = 'value' in kd ? kd.value : kd.textContent),
              (ie = !0))),
        (st = oe(dt, nt)),
        0 < st.length &&
          ((nt = new Ld(nt, e, null, a, jt)),
          bt.push({ event: nt, listeners: st }),
          ct ? (nt.data = ct) : ((ct = he(a)), ct !== null && (nt.data = ct)))),
        (ct = ce ? je(e, a) : ke(e, a)) &&
          ((dt = oe(dt, 'onBeforeInput')),
          0 < dt.length &&
            ((jt = new Ld('onBeforeInput', 'beforeinput', null, a, jt)),
            bt.push({ event: jt, listeners: dt }),
            (jt.data = ct)));
    }
    se(bt, o);
  });
}
function tf(e, o, a) {
  return { instance: e, listener: o, currentTarget: a };
}
function oe(e, o) {
  for (var a = o + 'Capture', c = []; e !== null; ) {
    var d = e,
      g = d.stateNode;
    d.tag === 5 &&
      g !== null &&
      ((d = g),
      (g = Kb(e, a)),
      g != null && c.unshift(tf(e, g, d)),
      (g = Kb(e, o)),
      g != null && c.push(tf(e, g, d))),
      (e = e.return);
  }
  return c;
}
function vf(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function wf(e, o, a, c, d) {
  for (var g = o._reactName, j = []; a !== null && a !== c; ) {
    var $ = a,
      rt = $.alternate,
      dt = $.stateNode;
    if (rt !== null && rt === c) break;
    $.tag === 5 &&
      dt !== null &&
      (($ = dt),
      d
        ? ((rt = Kb(a, g)), rt != null && j.unshift(tf(a, rt, $)))
        : d || ((rt = Kb(a, g)), rt != null && j.push(tf(a, rt, $)))),
      (a = a.return);
  }
  j.length !== 0 && e.push({ event: o, listeners: j });
}
var xf = /\r\n?/g,
  yf = /\u0000|\uFFFD/g;
function zf(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      xf,
      `
`
    )
    .replace(yf, '');
}
function Af(e, o, a) {
  if (((o = zf(o)), zf(e) !== o && a)) throw Error(p(425));
}
function Bf() {}
var Cf = null,
  Df = null;
function Ef(e, o) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof o.children == 'string' ||
    typeof o.children == 'number' ||
    (typeof o.dangerouslySetInnerHTML == 'object' &&
      o.dangerouslySetInnerHTML !== null &&
      o.dangerouslySetInnerHTML.__html != null)
  );
}
var Ff = typeof setTimeout == 'function' ? setTimeout : void 0,
  Gf = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Hf = typeof Promise == 'function' ? Promise : void 0,
  Jf =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Hf < 'u'
      ? function (e) {
          return Hf.resolve(null).then(e).catch(If);
        }
      : Ff;
function If(e) {
  setTimeout(function () {
    throw e;
  });
}
function Kf(e, o) {
  var a = o,
    c = 0;
  do {
    var d = a.nextSibling;
    if ((e.removeChild(a), d && d.nodeType === 8))
      if (((a = d.data), a === '/$')) {
        if (c === 0) {
          e.removeChild(d), bd(o);
          return;
        }
        c--;
      } else (a !== '$' && a !== '$?' && a !== '$!') || c++;
    a = d;
  } while (a);
  bd(o);
}
function Lf(e) {
  for (; e != null; e = e.nextSibling) {
    var o = e.nodeType;
    if (o === 1 || o === 3) break;
    if (o === 8) {
      if (((o = e.data), o === '$' || o === '$!' || o === '$?')) break;
      if (o === '/$') return null;
    }
  }
  return e;
}
function Mf(e) {
  e = e.previousSibling;
  for (var o = 0; e; ) {
    if (e.nodeType === 8) {
      var a = e.data;
      if (a === '$' || a === '$!' || a === '$?') {
        if (o === 0) return e;
        o--;
      } else a === '/$' && o++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2),
  Of = '__reactFiber$' + Nf,
  Pf = '__reactProps$' + Nf,
  uf = '__reactContainer$' + Nf,
  of = '__reactEvents$' + Nf,
  Qf = '__reactListeners$' + Nf,
  Rf = '__reactHandles$' + Nf;
function Wc(e) {
  var o = e[Of];
  if (o) return o;
  for (var a = e.parentNode; a; ) {
    if ((o = a[uf] || a[Of])) {
      if (
        ((a = o.alternate),
        o.child !== null || (a !== null && a.child !== null))
      )
        for (e = Mf(e); e !== null; ) {
          if ((a = e[Of])) return a;
          e = Mf(e);
        }
      return o;
    }
    (e = a), (a = e.parentNode);
  }
  return null;
}
function Cb(e) {
  return (
    (e = e[Of] || e[uf]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function ue(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(p(33));
}
function Db(e) {
  return e[Pf] || null;
}
var Sf = [],
  Tf = -1;
function Uf(e) {
  return { current: e };
}
function E(e) {
  0 > Tf || ((e.current = Sf[Tf]), (Sf[Tf] = null), Tf--);
}
function G(e, o) {
  Tf++, (Sf[Tf] = e.current), (e.current = o);
}
var Vf = {},
  H = Uf(Vf),
  Wf = Uf(!1),
  Xf = Vf;
function Yf(e, o) {
  var a = e.type.contextTypes;
  if (!a) return Vf;
  var c = e.stateNode;
  if (c && c.__reactInternalMemoizedUnmaskedChildContext === o)
    return c.__reactInternalMemoizedMaskedChildContext;
  var d = {},
    g;
  for (g in a) d[g] = o[g];
  return (
    c &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = d)),
    d
  );
}
function Zf(e) {
  return (e = e.childContextTypes), e != null;
}
function $f() {
  E(Wf), E(H);
}
function ag(e, o, a) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, o), G(Wf, a);
}
function bg(e, o, a) {
  var c = e.stateNode;
  if (((o = o.childContextTypes), typeof c.getChildContext != 'function'))
    return a;
  c = c.getChildContext();
  for (var d in c) if (!(d in o)) throw Error(p(108, Ra(e) || 'Unknown', d));
  return A({}, a, c);
}
function cg(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Vf),
    (Xf = H.current),
    G(H, e),
    G(Wf, Wf.current),
    !0
  );
}
function dg(e, o, a) {
  var c = e.stateNode;
  if (!c) throw Error(p(169));
  a
    ? ((e = bg(e, o, Xf)),
      (c.__reactInternalMemoizedMergedChildContext = e),
      E(Wf),
      E(H),
      G(H, e))
    : E(Wf),
    G(Wf, a);
}
var eg = null,
  fg = !1,
  gg = !1;
function hg(e) {
  eg === null ? (eg = [e]) : eg.push(e);
}
function ig(e) {
  (fg = !0), hg(e);
}
function jg() {
  if (!gg && eg !== null) {
    gg = !0;
    var e = 0,
      o = C;
    try {
      var a = eg;
      for (C = 1; e < a.length; e++) {
        var c = a[e];
        do c = c(!0);
        while (c !== null);
      }
      (eg = null), (fg = !1);
    } catch (d) {
      throw (eg !== null && (eg = eg.slice(e + 1)), ac(fc, jg), d);
    } finally {
      (C = o), (gg = !1);
    }
  }
  return null;
}
var kg = [],
  lg = 0,
  mg = null,
  ng = 0,
  og = [],
  pg = 0,
  qg = null,
  rg = 1,
  sg = '';
function tg(e, o) {
  (kg[lg++] = ng), (kg[lg++] = mg), (mg = e), (ng = o);
}
function ug(e, o, a) {
  (og[pg++] = rg), (og[pg++] = sg), (og[pg++] = qg), (qg = e);
  var c = rg;
  e = sg;
  var d = 32 - oc(c) - 1;
  (c &= ~(1 << d)), (a += 1);
  var g = 32 - oc(o) + d;
  if (30 < g) {
    var j = d - (d % 5);
    (g = (c & ((1 << j) - 1)).toString(32)),
      (c >>= j),
      (d -= j),
      (rg = (1 << (32 - oc(o) + d)) | (a << d) | c),
      (sg = g + e);
  } else (rg = (1 << g) | (a << d) | c), (sg = e);
}
function vg(e) {
  e.return !== null && (tg(e, 1), ug(e, 1, 0));
}
function wg(e) {
  for (; e === mg; )
    (mg = kg[--lg]), (kg[lg] = null), (ng = kg[--lg]), (kg[lg] = null);
  for (; e === qg; )
    (qg = og[--pg]),
      (og[pg] = null),
      (sg = og[--pg]),
      (og[pg] = null),
      (rg = og[--pg]),
      (og[pg] = null);
}
var xg = null,
  yg = null,
  I = !1,
  zg = null;
function Ag(e, o) {
  var a = Bg(5, null, null, 0);
  (a.elementType = 'DELETED'),
    (a.stateNode = o),
    (a.return = e),
    (o = e.deletions),
    o === null ? ((e.deletions = [a]), (e.flags |= 16)) : o.push(a);
}
function Cg(e, o) {
  switch (e.tag) {
    case 5:
      var a = e.type;
      return (
        (o =
          o.nodeType !== 1 || a.toLowerCase() !== o.nodeName.toLowerCase()
            ? null
            : o),
        o !== null
          ? ((e.stateNode = o), (xg = e), (yg = Lf(o.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (o = e.pendingProps === '' || o.nodeType !== 3 ? null : o),
        o !== null ? ((e.stateNode = o), (xg = e), (yg = null), !0) : !1
      );
    case 13:
      return (
        (o = o.nodeType !== 8 ? null : o),
        o !== null
          ? ((a = qg !== null ? { id: rg, overflow: sg } : null),
            (e.memoizedState = {
              dehydrated: o,
              treeContext: a,
              retryLane: 1073741824,
            }),
            (a = Bg(18, null, null, 0)),
            (a.stateNode = o),
            (a.return = e),
            (e.child = a),
            (xg = e),
            (yg = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Dg(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Eg(e) {
  if (I) {
    var o = yg;
    if (o) {
      var a = o;
      if (!Cg(e, o)) {
        if (Dg(e)) throw Error(p(418));
        o = Lf(a.nextSibling);
        var c = xg;
        o && Cg(e, o)
          ? Ag(c, a)
          : ((e.flags = (e.flags & -4097) | 2), (I = !1), (xg = e));
      }
    } else {
      if (Dg(e)) throw Error(p(418));
      (e.flags = (e.flags & -4097) | 2), (I = !1), (xg = e);
    }
  }
}
function Fg(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  xg = e;
}
function Gg(e) {
  if (e !== xg) return !1;
  if (!I) return Fg(e), (I = !0), !1;
  var o;
  if (
    ((o = e.tag !== 3) &&
      !(o = e.tag !== 5) &&
      ((o = e.type),
      (o = o !== 'head' && o !== 'body' && !Ef(e.type, e.memoizedProps))),
    o && (o = yg))
  ) {
    if (Dg(e)) throw (Hg(), Error(p(418)));
    for (; o; ) Ag(e, o), (o = Lf(o.nextSibling));
  }
  if ((Fg(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(p(317));
    e: {
      for (e = e.nextSibling, o = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === '/$') {
            if (o === 0) {
              yg = Lf(e.nextSibling);
              break e;
            }
            o--;
          } else (a !== '$' && a !== '$!' && a !== '$?') || o++;
        }
        e = e.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(e.stateNode.nextSibling) : null;
  return !0;
}
function Hg() {
  for (var e = yg; e; ) e = Lf(e.nextSibling);
}
function Ig() {
  (yg = xg = null), (I = !1);
}
function Jg(e) {
  zg === null ? (zg = [e]) : zg.push(e);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(e, o) {
  if (e && e.defaultProps) {
    (o = A({}, o)), (e = e.defaultProps);
    for (var a in e) o[a] === void 0 && (o[a] = e[a]);
    return o;
  }
  return o;
}
var Mg = Uf(null),
  Ng = null,
  Og = null,
  Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(e) {
  var o = Mg.current;
  E(Mg), (e._currentValue = o);
}
function Sg(e, o, a) {
  for (; e !== null; ) {
    var c = e.alternate;
    if (
      ((e.childLanes & o) !== o
        ? ((e.childLanes |= o), c !== null && (c.childLanes |= o))
        : c !== null && (c.childLanes & o) !== o && (c.childLanes |= o),
      e === a)
    )
      break;
    e = e.return;
  }
}
function Tg(e, o) {
  (Ng = e),
    (Pg = Og = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & o && (Ug = !0), (e.firstContext = null));
}
function Vg(e) {
  var o = e._currentValue;
  if (Pg !== e)
    if (((e = { context: e, memoizedValue: o, next: null }), Og === null)) {
      if (Ng === null) throw Error(p(308));
      (Og = e), (Ng.dependencies = { lanes: 0, firstContext: e });
    } else Og = Og.next = e;
  return o;
}
var Wg = null;
function Xg(e) {
  Wg === null ? (Wg = [e]) : Wg.push(e);
}
function Yg(e, o, a, c) {
  var d = o.interleaved;
  return (
    d === null ? ((a.next = a), Xg(o)) : ((a.next = d.next), (d.next = a)),
    (o.interleaved = a),
    Zg(e, c)
  );
}
function Zg(e, o) {
  e.lanes |= o;
  var a = e.alternate;
  for (a !== null && (a.lanes |= o), a = e, e = e.return; e !== null; )
    (e.childLanes |= o),
      (a = e.alternate),
      a !== null && (a.childLanes |= o),
      (a = e),
      (e = e.return);
  return a.tag === 3 ? a.stateNode : null;
}
var $g = !1;
function ah(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function bh(e, o) {
  (e = e.updateQueue),
    o.updateQueue === e &&
      (o.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function ch(e, o) {
  return {
    eventTime: e,
    lane: o,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dh(e, o, a) {
  var c = e.updateQueue;
  if (c === null) return null;
  if (((c = c.shared), K & 2)) {
    var d = c.pending;
    return (
      d === null ? (o.next = o) : ((o.next = d.next), (d.next = o)),
      (c.pending = o),
      Zg(e, a)
    );
  }
  return (
    (d = c.interleaved),
    d === null ? ((o.next = o), Xg(c)) : ((o.next = d.next), (d.next = o)),
    (c.interleaved = o),
    Zg(e, a)
  );
}
function eh(e, o, a) {
  if (
    ((o = o.updateQueue), o !== null && ((o = o.shared), (a & 4194240) !== 0))
  ) {
    var c = o.lanes;
    (c &= e.pendingLanes), (a |= c), (o.lanes = a), Cc(e, a);
  }
}
function fh(e, o) {
  var a = e.updateQueue,
    c = e.alternate;
  if (c !== null && ((c = c.updateQueue), a === c)) {
    var d = null,
      g = null;
    if (((a = a.firstBaseUpdate), a !== null)) {
      do {
        var j = {
          eventTime: a.eventTime,
          lane: a.lane,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        };
        g === null ? (d = g = j) : (g = g.next = j), (a = a.next);
      } while (a !== null);
      g === null ? (d = g = o) : (g = g.next = o);
    } else d = g = o;
    (a = {
      baseState: c.baseState,
      firstBaseUpdate: d,
      lastBaseUpdate: g,
      shared: c.shared,
      effects: c.effects,
    }),
      (e.updateQueue = a);
    return;
  }
  (e = a.lastBaseUpdate),
    e === null ? (a.firstBaseUpdate = o) : (e.next = o),
    (a.lastBaseUpdate = o);
}
function gh(e, o, a, c) {
  var d = e.updateQueue;
  $g = !1;
  var g = d.firstBaseUpdate,
    j = d.lastBaseUpdate,
    $ = d.shared.pending;
  if ($ !== null) {
    d.shared.pending = null;
    var rt = $,
      dt = rt.next;
    (rt.next = null), j === null ? (g = dt) : (j.next = dt), (j = rt);
    var jt = e.alternate;
    jt !== null &&
      ((jt = jt.updateQueue),
      ($ = jt.lastBaseUpdate),
      $ !== j &&
        ($ === null ? (jt.firstBaseUpdate = dt) : ($.next = dt),
        (jt.lastBaseUpdate = rt)));
  }
  if (g !== null) {
    var bt = d.baseState;
    (j = 0), (jt = dt = rt = null), ($ = g);
    do {
      var vt = $.lane,
        Pt = $.eventTime;
      if ((c & vt) === vt) {
        jt !== null &&
          (jt = jt.next =
            {
              eventTime: Pt,
              lane: 0,
              tag: $.tag,
              payload: $.payload,
              callback: $.callback,
              next: null,
            });
        e: {
          var kt = e,
            gt = $;
          switch (((vt = o), (Pt = a), gt.tag)) {
            case 1:
              if (((kt = gt.payload), typeof kt == 'function')) {
                bt = kt.call(Pt, bt, vt);
                break e;
              }
              bt = kt;
              break e;
            case 3:
              kt.flags = (kt.flags & -65537) | 128;
            case 0:
              if (
                ((kt = gt.payload),
                (vt = typeof kt == 'function' ? kt.call(Pt, bt, vt) : kt),
                vt == null)
              )
                break e;
              bt = A({}, bt, vt);
              break e;
            case 2:
              $g = !0;
          }
        }
        $.callback !== null &&
          $.lane !== 0 &&
          ((e.flags |= 64),
          (vt = d.effects),
          vt === null ? (d.effects = [$]) : vt.push($));
      } else
        (Pt = {
          eventTime: Pt,
          lane: vt,
          tag: $.tag,
          payload: $.payload,
          callback: $.callback,
          next: null,
        }),
          jt === null ? ((dt = jt = Pt), (rt = bt)) : (jt = jt.next = Pt),
          (j |= vt);
      if ((($ = $.next), $ === null)) {
        if ((($ = d.shared.pending), $ === null)) break;
        (vt = $),
          ($ = vt.next),
          (vt.next = null),
          (d.lastBaseUpdate = vt),
          (d.shared.pending = null);
      }
    } while (1);
    if (
      (jt === null && (rt = bt),
      (d.baseState = rt),
      (d.firstBaseUpdate = dt),
      (d.lastBaseUpdate = jt),
      (o = d.shared.interleaved),
      o !== null)
    ) {
      d = o;
      do (j |= d.lane), (d = d.next);
      while (d !== o);
    } else g === null && (d.shared.lanes = 0);
    (hh |= j), (e.lanes = j), (e.memoizedState = bt);
  }
}
function ih(e, o, a) {
  if (((e = o.effects), (o.effects = null), e !== null))
    for (o = 0; o < e.length; o++) {
      var c = e[o],
        d = c.callback;
      if (d !== null) {
        if (((c.callback = null), (c = a), typeof d != 'function'))
          throw Error(p(191, d));
        d.call(c);
      }
    }
}
var jh = new aa.Component().refs;
function kh(e, o, a, c) {
  (o = e.memoizedState),
    (a = a(c, o)),
    (a = a == null ? o : A({}, o, a)),
    (e.memoizedState = a),
    e.lanes === 0 && (e.updateQueue.baseState = a);
}
var nh = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vb(e) === e : !1;
  },
  enqueueSetState: function (e, o, a) {
    e = e._reactInternals;
    var c = L(),
      d = lh(e),
      g = ch(c, d);
    (g.payload = o),
      a != null && (g.callback = a),
      (o = dh(e, g, d)),
      o !== null && (mh(o, e, d, c), eh(o, e, d));
  },
  enqueueReplaceState: function (e, o, a) {
    e = e._reactInternals;
    var c = L(),
      d = lh(e),
      g = ch(c, d);
    (g.tag = 1),
      (g.payload = o),
      a != null && (g.callback = a),
      (o = dh(e, g, d)),
      o !== null && (mh(o, e, d, c), eh(o, e, d));
  },
  enqueueForceUpdate: function (e, o) {
    e = e._reactInternals;
    var a = L(),
      c = lh(e),
      d = ch(a, c);
    (d.tag = 2),
      o != null && (d.callback = o),
      (o = dh(e, d, c)),
      o !== null && (mh(o, e, c, a), eh(o, e, c));
  },
};
function oh(e, o, a, c, d, g, j) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(c, g, j)
      : o.prototype && o.prototype.isPureReactComponent
      ? !Ie(a, c) || !Ie(d, g)
      : !0
  );
}
function ph(e, o, a) {
  var c = !1,
    d = Vf,
    g = o.contextType;
  return (
    typeof g == 'object' && g !== null
      ? (g = Vg(g))
      : ((d = Zf(o) ? Xf : H.current),
        (c = o.contextTypes),
        (g = (c = c != null) ? Yf(e, d) : Vf)),
    (o = new o(a, g)),
    (e.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
    (o.updater = nh),
    (e.stateNode = o),
    (o._reactInternals = e),
    c &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = d),
      (e.__reactInternalMemoizedMaskedChildContext = g)),
    o
  );
}
function qh(e, o, a, c) {
  (e = o.state),
    typeof o.componentWillReceiveProps == 'function' &&
      o.componentWillReceiveProps(a, c),
    typeof o.UNSAFE_componentWillReceiveProps == 'function' &&
      o.UNSAFE_componentWillReceiveProps(a, c),
    o.state !== e && nh.enqueueReplaceState(o, o.state, null);
}
function rh(e, o, a, c) {
  var d = e.stateNode;
  (d.props = a), (d.state = e.memoizedState), (d.refs = jh), ah(e);
  var g = o.contextType;
  typeof g == 'object' && g !== null
    ? (d.context = Vg(g))
    : ((g = Zf(o) ? Xf : H.current), (d.context = Yf(e, g))),
    (d.state = e.memoizedState),
    (g = o.getDerivedStateFromProps),
    typeof g == 'function' && (kh(e, o, g, a), (d.state = e.memoizedState)),
    typeof o.getDerivedStateFromProps == 'function' ||
      typeof d.getSnapshotBeforeUpdate == 'function' ||
      (typeof d.UNSAFE_componentWillMount != 'function' &&
        typeof d.componentWillMount != 'function') ||
      ((o = d.state),
      typeof d.componentWillMount == 'function' && d.componentWillMount(),
      typeof d.UNSAFE_componentWillMount == 'function' &&
        d.UNSAFE_componentWillMount(),
      o !== d.state && nh.enqueueReplaceState(d, d.state, null),
      gh(e, a, d, c),
      (d.state = e.memoizedState)),
    typeof d.componentDidMount == 'function' && (e.flags |= 4194308);
}
function sh(e, o, a) {
  if (
    ((e = a.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (a._owner) {
      if (((a = a._owner), a)) {
        if (a.tag !== 1) throw Error(p(309));
        var c = a.stateNode;
      }
      if (!c) throw Error(p(147, e));
      var d = c,
        g = '' + e;
      return o !== null &&
        o.ref !== null &&
        typeof o.ref == 'function' &&
        o.ref._stringRef === g
        ? o.ref
        : ((o = function (j) {
            var $ = d.refs;
            $ === jh && ($ = d.refs = {}),
              j === null ? delete $[g] : ($[g] = j);
          }),
          (o._stringRef = g),
          o);
    }
    if (typeof e != 'string') throw Error(p(284));
    if (!a._owner) throw Error(p(290, e));
  }
  return e;
}
function th(e, o) {
  throw (
    ((e = Object.prototype.toString.call(o)),
    Error(
      p(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(o).join(', ') + '}'
          : e
      )
    ))
  );
}
function uh(e) {
  var o = e._init;
  return o(e._payload);
}
function vh(e) {
  function o(it, et) {
    if (e) {
      var b = it.deletions;
      b === null ? ((it.deletions = [et]), (it.flags |= 16)) : b.push(et);
    }
  }
  function a(it, et) {
    if (!e) return null;
    for (; et !== null; ) o(it, et), (et = et.sibling);
    return null;
  }
  function c(it, et) {
    for (it = new Map(); et !== null; )
      et.key !== null ? it.set(et.key, et) : it.set(et.index, et),
        (et = et.sibling);
    return it;
  }
  function d(it, et) {
    return (it = wh(it, et)), (it.index = 0), (it.sibling = null), it;
  }
  function g(it, et, b) {
    return (
      (it.index = b),
      e
        ? ((b = it.alternate),
          b !== null
            ? ((b = b.index), b < et ? ((it.flags |= 2), et) : b)
            : ((it.flags |= 2), et))
        : ((it.flags |= 1048576), et)
    );
  }
  function j(it) {
    return e && it.alternate === null && (it.flags |= 2), it;
  }
  function $(it, et, b, ut) {
    return et === null || et.tag !== 6
      ? ((et = xh(b, it.mode, ut)), (et.return = it), et)
      : ((et = d(et, b)), (et.return = it), et);
  }
  function rt(it, et, b, ut) {
    var pt = b.type;
    return pt === ya
      ? jt(it, et, b.props.children, ut, b.key)
      : et !== null &&
        (et.elementType === pt ||
          (typeof pt == 'object' &&
            pt !== null &&
            pt.$$typeof === Ha &&
            uh(pt) === et.type))
      ? ((ut = d(et, b.props)), (ut.ref = sh(it, et, b)), (ut.return = it), ut)
      : ((ut = yh(b.type, b.key, b.props, null, it.mode, ut)),
        (ut.ref = sh(it, et, b)),
        (ut.return = it),
        ut);
  }
  function dt(it, et, b, ut) {
    return et === null ||
      et.tag !== 4 ||
      et.stateNode.containerInfo !== b.containerInfo ||
      et.stateNode.implementation !== b.implementation
      ? ((et = zh(b, it.mode, ut)), (et.return = it), et)
      : ((et = d(et, b.children || [])), (et.return = it), et);
  }
  function jt(it, et, b, ut, pt) {
    return et === null || et.tag !== 7
      ? ((et = Ah(b, it.mode, ut, pt)), (et.return = it), et)
      : ((et = d(et, b)), (et.return = it), et);
  }
  function bt(it, et, b) {
    if ((typeof et == 'string' && et !== '') || typeof et == 'number')
      return (et = xh('' + et, it.mode, b)), (et.return = it), et;
    if (typeof et == 'object' && et !== null) {
      switch (et.$$typeof) {
        case va:
          return (
            (b = yh(et.type, et.key, et.props, null, it.mode, b)),
            (b.ref = sh(it, null, et)),
            (b.return = it),
            b
          );
        case wa:
          return (et = zh(et, it.mode, b)), (et.return = it), et;
        case Ha:
          var ut = et._init;
          return bt(it, ut(et._payload), b);
      }
      if (eb(et) || Ka(et))
        return (et = Ah(et, it.mode, b, null)), (et.return = it), et;
      th(it, et);
    }
    return null;
  }
  function vt(it, et, b, ut) {
    var pt = et !== null ? et.key : null;
    if ((typeof b == 'string' && b !== '') || typeof b == 'number')
      return pt !== null ? null : $(it, et, '' + b, ut);
    if (typeof b == 'object' && b !== null) {
      switch (b.$$typeof) {
        case va:
          return b.key === pt ? rt(it, et, b, ut) : null;
        case wa:
          return b.key === pt ? dt(it, et, b, ut) : null;
        case Ha:
          return (pt = b._init), vt(it, et, pt(b._payload), ut);
      }
      if (eb(b) || Ka(b)) return pt !== null ? null : jt(it, et, b, ut, null);
      th(it, b);
    }
    return null;
  }
  function Pt(it, et, b, ut, pt) {
    if ((typeof ut == 'string' && ut !== '') || typeof ut == 'number')
      return (it = it.get(b) || null), $(et, it, '' + ut, pt);
    if (typeof ut == 'object' && ut !== null) {
      switch (ut.$$typeof) {
        case va:
          return (
            (it = it.get(ut.key === null ? b : ut.key) || null),
            rt(et, it, ut, pt)
          );
        case wa:
          return (
            (it = it.get(ut.key === null ? b : ut.key) || null),
            dt(et, it, ut, pt)
          );
        case Ha:
          var st = ut._init;
          return Pt(it, et, b, st(ut._payload), pt);
      }
      if (eb(ut) || Ka(ut))
        return (it = it.get(b) || null), jt(et, it, ut, pt, null);
      th(et, ut);
    }
    return null;
  }
  function kt(it, et, b, ut) {
    for (
      var pt = null, st = null, ct = et, nt = (et = 0), at = null;
      ct !== null && nt < b.length;
      nt++
    ) {
      ct.index > nt ? ((at = ct), (ct = null)) : (at = ct.sibling);
      var lt = vt(it, ct, b[nt], ut);
      if (lt === null) {
        ct === null && (ct = at);
        break;
      }
      e && ct && lt.alternate === null && o(it, ct),
        (et = g(lt, et, nt)),
        st === null ? (pt = lt) : (st.sibling = lt),
        (st = lt),
        (ct = at);
    }
    if (nt === b.length) return a(it, ct), I && tg(it, nt), pt;
    if (ct === null) {
      for (; nt < b.length; nt++)
        (ct = bt(it, b[nt], ut)),
          ct !== null &&
            ((et = g(ct, et, nt)),
            st === null ? (pt = ct) : (st.sibling = ct),
            (st = ct));
      return I && tg(it, nt), pt;
    }
    for (ct = c(it, ct); nt < b.length; nt++)
      (at = Pt(ct, it, nt, b[nt], ut)),
        at !== null &&
          (e &&
            at.alternate !== null &&
            ct.delete(at.key === null ? nt : at.key),
          (et = g(at, et, nt)),
          st === null ? (pt = at) : (st.sibling = at),
          (st = at));
    return (
      e &&
        ct.forEach(function (Et) {
          return o(it, Et);
        }),
      I && tg(it, nt),
      pt
    );
  }
  function gt(it, et, b, ut) {
    var pt = Ka(b);
    if (typeof pt != 'function') throw Error(p(150));
    if (((b = pt.call(b)), b == null)) throw Error(p(151));
    for (
      var st = (pt = null), ct = et, nt = (et = 0), at = null, lt = b.next();
      ct !== null && !lt.done;
      nt++, lt = b.next()
    ) {
      ct.index > nt ? ((at = ct), (ct = null)) : (at = ct.sibling);
      var Et = vt(it, ct, lt.value, ut);
      if (Et === null) {
        ct === null && (ct = at);
        break;
      }
      e && ct && Et.alternate === null && o(it, ct),
        (et = g(Et, et, nt)),
        st === null ? (pt = Et) : (st.sibling = Et),
        (st = Et),
        (ct = at);
    }
    if (lt.done) return a(it, ct), I && tg(it, nt), pt;
    if (ct === null) {
      for (; !lt.done; nt++, lt = b.next())
        (lt = bt(it, lt.value, ut)),
          lt !== null &&
            ((et = g(lt, et, nt)),
            st === null ? (pt = lt) : (st.sibling = lt),
            (st = lt));
      return I && tg(it, nt), pt;
    }
    for (ct = c(it, ct); !lt.done; nt++, lt = b.next())
      (lt = Pt(ct, it, nt, lt.value, ut)),
        lt !== null &&
          (e &&
            lt.alternate !== null &&
            ct.delete(lt.key === null ? nt : lt.key),
          (et = g(lt, et, nt)),
          st === null ? (pt = lt) : (st.sibling = lt),
          (st = lt));
    return (
      e &&
        ct.forEach(function (Rt) {
          return o(it, Rt);
        }),
      I && tg(it, nt),
      pt
    );
  }
  function mt(it, et, b, ut) {
    if (
      (typeof b == 'object' &&
        b !== null &&
        b.type === ya &&
        b.key === null &&
        (b = b.props.children),
      typeof b == 'object' && b !== null)
    ) {
      switch (b.$$typeof) {
        case va:
          e: {
            for (var pt = b.key, st = et; st !== null; ) {
              if (st.key === pt) {
                if (((pt = b.type), pt === ya)) {
                  if (st.tag === 7) {
                    a(it, st.sibling),
                      (et = d(st, b.props.children)),
                      (et.return = it),
                      (it = et);
                    break e;
                  }
                } else if (
                  st.elementType === pt ||
                  (typeof pt == 'object' &&
                    pt !== null &&
                    pt.$$typeof === Ha &&
                    uh(pt) === st.type)
                ) {
                  a(it, st.sibling),
                    (et = d(st, b.props)),
                    (et.ref = sh(it, st, b)),
                    (et.return = it),
                    (it = et);
                  break e;
                }
                a(it, st);
                break;
              } else o(it, st);
              st = st.sibling;
            }
            b.type === ya
              ? ((et = Ah(b.props.children, it.mode, ut, b.key)),
                (et.return = it),
                (it = et))
              : ((ut = yh(b.type, b.key, b.props, null, it.mode, ut)),
                (ut.ref = sh(it, et, b)),
                (ut.return = it),
                (it = ut));
          }
          return j(it);
        case wa:
          e: {
            for (st = b.key; et !== null; ) {
              if (et.key === st)
                if (
                  et.tag === 4 &&
                  et.stateNode.containerInfo === b.containerInfo &&
                  et.stateNode.implementation === b.implementation
                ) {
                  a(it, et.sibling),
                    (et = d(et, b.children || [])),
                    (et.return = it),
                    (it = et);
                  break e;
                } else {
                  a(it, et);
                  break;
                }
              else o(it, et);
              et = et.sibling;
            }
            (et = zh(b, it.mode, ut)), (et.return = it), (it = et);
          }
          return j(it);
        case Ha:
          return (st = b._init), mt(it, et, st(b._payload), ut);
      }
      if (eb(b)) return kt(it, et, b, ut);
      if (Ka(b)) return gt(it, et, b, ut);
      th(it, b);
    }
    return (typeof b == 'string' && b !== '') || typeof b == 'number'
      ? ((b = '' + b),
        et !== null && et.tag === 6
          ? (a(it, et.sibling), (et = d(et, b)), (et.return = it), (it = et))
          : (a(it, et), (et = xh(b, it.mode, ut)), (et.return = it), (it = et)),
        j(it))
      : a(it, et);
  }
  return mt;
}
var Bh = vh(!0),
  Ch = vh(!1),
  Dh = {},
  Eh = Uf(Dh),
  Fh = Uf(Dh),
  Gh = Uf(Dh);
function Hh(e) {
  if (e === Dh) throw Error(p(174));
  return e;
}
function Ih(e, o) {
  switch ((G(Gh, o), G(Fh, e), G(Eh, Dh), (e = o.nodeType), e)) {
    case 9:
    case 11:
      o = (o = o.documentElement) ? o.namespaceURI : lb(null, '');
      break;
    default:
      (e = e === 8 ? o.parentNode : o),
        (o = e.namespaceURI || null),
        (e = e.tagName),
        (o = lb(o, e));
  }
  E(Eh), G(Eh, o);
}
function Jh() {
  E(Eh), E(Fh), E(Gh);
}
function Kh(e) {
  Hh(Gh.current);
  var o = Hh(Eh.current),
    a = lb(o, e.type);
  o !== a && (G(Fh, e), G(Eh, a));
}
function Lh(e) {
  Fh.current === e && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(e) {
  for (var o = e; o !== null; ) {
    if (o.tag === 13) {
      var a = o.memoizedState;
      if (
        a !== null &&
        ((a = a.dehydrated), a === null || a.data === '$?' || a.data === '$!')
      )
        return o;
    } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
      if (o.flags & 128) return o;
    } else if (o.child !== null) {
      (o.child.return = o), (o = o.child);
      continue;
    }
    if (o === e) break;
    for (; o.sibling === null; ) {
      if (o.return === null || o.return === e) return null;
      o = o.return;
    }
    (o.sibling.return = o.return), (o = o.sibling);
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var e = 0; e < Nh.length; e++)
    Nh[e]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher,
  Qh = ua.ReactCurrentBatchConfig,
  Rh = 0,
  N = null,
  O = null,
  P = null,
  Sh = !1,
  Th = !1,
  Uh = 0,
  Vh = 0;
function Q() {
  throw Error(p(321));
}
function Wh(e, o) {
  if (o === null) return !1;
  for (var a = 0; a < o.length && a < e.length; a++)
    if (!He(e[a], o[a])) return !1;
  return !0;
}
function Xh(e, o, a, c, d, g) {
  if (
    ((Rh = g),
    (N = o),
    (o.memoizedState = null),
    (o.updateQueue = null),
    (o.lanes = 0),
    (Ph.current = e === null || e.memoizedState === null ? Yh : Zh),
    (e = a(c, d)),
    Th)
  ) {
    g = 0;
    do {
      if (((Th = !1), (Uh = 0), 25 <= g)) throw Error(p(301));
      (g += 1),
        (P = O = null),
        (o.updateQueue = null),
        (Ph.current = $h),
        (e = a(c, d));
    } while (Th);
  }
  if (
    ((Ph.current = ai),
    (o = O !== null && O.next !== null),
    (Rh = 0),
    (P = O = N = null),
    (Sh = !1),
    o)
  )
    throw Error(p(300));
  return e;
}
function bi() {
  var e = Uh !== 0;
  return (Uh = 0), e;
}
function ci() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return P === null ? (N.memoizedState = P = e) : (P = P.next = e), P;
}
function di() {
  if (O === null) {
    var e = N.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = O.next;
  var o = P === null ? N.memoizedState : P.next;
  if (o !== null) (P = o), (O = e);
  else {
    if (e === null) throw Error(p(310));
    (O = e),
      (e = {
        memoizedState: O.memoizedState,
        baseState: O.baseState,
        baseQueue: O.baseQueue,
        queue: O.queue,
        next: null,
      }),
      P === null ? (N.memoizedState = P = e) : (P = P.next = e);
  }
  return P;
}
function ei(e, o) {
  return typeof o == 'function' ? o(e) : o;
}
function fi(e) {
  var o = di(),
    a = o.queue;
  if (a === null) throw Error(p(311));
  a.lastRenderedReducer = e;
  var c = O,
    d = c.baseQueue,
    g = a.pending;
  if (g !== null) {
    if (d !== null) {
      var j = d.next;
      (d.next = g.next), (g.next = j);
    }
    (c.baseQueue = d = g), (a.pending = null);
  }
  if (d !== null) {
    (g = d.next), (c = c.baseState);
    var $ = (j = null),
      rt = null,
      dt = g;
    do {
      var jt = dt.lane;
      if ((Rh & jt) === jt)
        rt !== null &&
          (rt = rt.next =
            {
              lane: 0,
              action: dt.action,
              hasEagerState: dt.hasEagerState,
              eagerState: dt.eagerState,
              next: null,
            }),
          (c = dt.hasEagerState ? dt.eagerState : e(c, dt.action));
      else {
        var bt = {
          lane: jt,
          action: dt.action,
          hasEagerState: dt.hasEagerState,
          eagerState: dt.eagerState,
          next: null,
        };
        rt === null ? (($ = rt = bt), (j = c)) : (rt = rt.next = bt),
          (N.lanes |= jt),
          (hh |= jt);
      }
      dt = dt.next;
    } while (dt !== null && dt !== g);
    rt === null ? (j = c) : (rt.next = $),
      He(c, o.memoizedState) || (Ug = !0),
      (o.memoizedState = c),
      (o.baseState = j),
      (o.baseQueue = rt),
      (a.lastRenderedState = c);
  }
  if (((e = a.interleaved), e !== null)) {
    d = e;
    do (g = d.lane), (N.lanes |= g), (hh |= g), (d = d.next);
    while (d !== e);
  } else d === null && (a.lanes = 0);
  return [o.memoizedState, a.dispatch];
}
function gi(e) {
  var o = di(),
    a = o.queue;
  if (a === null) throw Error(p(311));
  a.lastRenderedReducer = e;
  var c = a.dispatch,
    d = a.pending,
    g = o.memoizedState;
  if (d !== null) {
    a.pending = null;
    var j = (d = d.next);
    do (g = e(g, j.action)), (j = j.next);
    while (j !== d);
    He(g, o.memoizedState) || (Ug = !0),
      (o.memoizedState = g),
      o.baseQueue === null && (o.baseState = g),
      (a.lastRenderedState = g);
  }
  return [g, c];
}
function hi() {}
function ii(e, o) {
  var a = N,
    c = di(),
    d = o(),
    g = !He(c.memoizedState, d);
  if (
    (g && ((c.memoizedState = d), (Ug = !0)),
    (c = c.queue),
    ji(ki.bind(null, a, c, e), [e]),
    c.getSnapshot !== o || g || (P !== null && P.memoizedState.tag & 1))
  ) {
    if (
      ((a.flags |= 2048),
      li(9, mi.bind(null, a, c, d, o), void 0, null),
      R === null)
    )
      throw Error(p(349));
    Rh & 30 || ni(a, o, d);
  }
  return d;
}
function ni(e, o, a) {
  (e.flags |= 16384),
    (e = { getSnapshot: o, value: a }),
    (o = N.updateQueue),
    o === null
      ? ((o = { lastEffect: null, stores: null }),
        (N.updateQueue = o),
        (o.stores = [e]))
      : ((a = o.stores), a === null ? (o.stores = [e]) : a.push(e));
}
function mi(e, o, a, c) {
  (o.value = a), (o.getSnapshot = c), oi(o) && pi(e);
}
function ki(e, o, a) {
  return a(function () {
    oi(o) && pi(e);
  });
}
function oi(e) {
  var o = e.getSnapshot;
  e = e.value;
  try {
    var a = o();
    return !He(e, a);
  } catch {
    return !0;
  }
}
function pi(e) {
  var o = Zg(e, 1);
  o !== null && mh(o, e, 1, -1);
}
function qi(e) {
  var o = ci();
  return (
    typeof e == 'function' && (e = e()),
    (o.memoizedState = o.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ei,
      lastRenderedState: e,
    }),
    (o.queue = e),
    (e = e.dispatch = ri.bind(null, N, e)),
    [o.memoizedState, e]
  );
}
function li(e, o, a, c) {
  return (
    (e = { tag: e, create: o, destroy: a, deps: c, next: null }),
    (o = N.updateQueue),
    o === null
      ? ((o = { lastEffect: null, stores: null }),
        (N.updateQueue = o),
        (o.lastEffect = e.next = e))
      : ((a = o.lastEffect),
        a === null
          ? (o.lastEffect = e.next = e)
          : ((c = a.next), (a.next = e), (e.next = c), (o.lastEffect = e))),
    e
  );
}
function si() {
  return di().memoizedState;
}
function ti(e, o, a, c) {
  var d = ci();
  (N.flags |= e),
    (d.memoizedState = li(1 | o, a, void 0, c === void 0 ? null : c));
}
function ui(e, o, a, c) {
  var d = di();
  c = c === void 0 ? null : c;
  var g = void 0;
  if (O !== null) {
    var j = O.memoizedState;
    if (((g = j.destroy), c !== null && Wh(c, j.deps))) {
      d.memoizedState = li(o, a, g, c);
      return;
    }
  }
  (N.flags |= e), (d.memoizedState = li(1 | o, a, g, c));
}
function vi(e, o) {
  return ti(8390656, 8, e, o);
}
function ji(e, o) {
  return ui(2048, 8, e, o);
}
function wi(e, o) {
  return ui(4, 2, e, o);
}
function xi(e, o) {
  return ui(4, 4, e, o);
}
function yi(e, o) {
  if (typeof o == 'function')
    return (
      (e = e()),
      o(e),
      function () {
        o(null);
      }
    );
  if (o != null)
    return (
      (e = e()),
      (o.current = e),
      function () {
        o.current = null;
      }
    );
}
function zi(e, o, a) {
  return (
    (a = a != null ? a.concat([e]) : null), ui(4, 4, yi.bind(null, o, e), a)
  );
}
function Ai() {}
function Bi(e, o) {
  var a = di();
  o = o === void 0 ? null : o;
  var c = a.memoizedState;
  return c !== null && o !== null && Wh(o, c[1])
    ? c[0]
    : ((a.memoizedState = [e, o]), e);
}
function Ci(e, o) {
  var a = di();
  o = o === void 0 ? null : o;
  var c = a.memoizedState;
  return c !== null && o !== null && Wh(o, c[1])
    ? c[0]
    : ((e = e()), (a.memoizedState = [e, o]), e);
}
function Di(e, o, a) {
  return Rh & 21
    ? (He(a, o) || ((a = yc()), (N.lanes |= a), (hh |= a), (e.baseState = !0)),
      o)
    : (e.baseState && ((e.baseState = !1), (Ug = !0)), (e.memoizedState = a));
}
function Ei(e, o) {
  var a = C;
  (C = a !== 0 && 4 > a ? a : 4), e(!0);
  var c = Qh.transition;
  Qh.transition = {};
  try {
    e(!1), o();
  } finally {
    (C = a), (Qh.transition = c);
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(e, o, a) {
  var c = lh(e);
  if (
    ((a = {
      lane: c,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Hi(e))
  )
    Ii(o, a);
  else if (((a = Yg(e, o, a, c)), a !== null)) {
    var d = L();
    mh(a, e, c, d), Ji(a, o, c);
  }
}
function ri(e, o, a) {
  var c = lh(e),
    d = { lane: c, action: a, hasEagerState: !1, eagerState: null, next: null };
  if (Hi(e)) Ii(o, d);
  else {
    var g = e.alternate;
    if (
      e.lanes === 0 &&
      (g === null || g.lanes === 0) &&
      ((g = o.lastRenderedReducer), g !== null)
    )
      try {
        var j = o.lastRenderedState,
          $ = g(j, a);
        if (((d.hasEagerState = !0), (d.eagerState = $), He($, j))) {
          var rt = o.interleaved;
          rt === null
            ? ((d.next = d), Xg(o))
            : ((d.next = rt.next), (rt.next = d)),
            (o.interleaved = d);
          return;
        }
      } catch {
      } finally {
      }
    (a = Yg(e, o, d, c)),
      a !== null && ((d = L()), mh(a, e, c, d), Ji(a, o, c));
  }
}
function Hi(e) {
  var o = e.alternate;
  return e === N || (o !== null && o === N);
}
function Ii(e, o) {
  Th = Sh = !0;
  var a = e.pending;
  a === null ? (o.next = o) : ((o.next = a.next), (a.next = o)),
    (e.pending = o);
}
function Ji(e, o, a) {
  if (a & 4194240) {
    var c = o.lanes;
    (c &= e.pendingLanes), (a |= c), (o.lanes = a), Cc(e, a);
  }
}
var ai = {
    readContext: Vg,
    useCallback: Q,
    useContext: Q,
    useEffect: Q,
    useImperativeHandle: Q,
    useInsertionEffect: Q,
    useLayoutEffect: Q,
    useMemo: Q,
    useReducer: Q,
    useRef: Q,
    useState: Q,
    useDebugValue: Q,
    useDeferredValue: Q,
    useTransition: Q,
    useMutableSource: Q,
    useSyncExternalStore: Q,
    useId: Q,
    unstable_isNewReconciler: !1,
  },
  Yh = {
    readContext: Vg,
    useCallback: function (e, o) {
      return (ci().memoizedState = [e, o === void 0 ? null : o]), e;
    },
    useContext: Vg,
    useEffect: vi,
    useImperativeHandle: function (e, o, a) {
      return (
        (a = a != null ? a.concat([e]) : null),
        ti(4194308, 4, yi.bind(null, o, e), a)
      );
    },
    useLayoutEffect: function (e, o) {
      return ti(4194308, 4, e, o);
    },
    useInsertionEffect: function (e, o) {
      return ti(4, 2, e, o);
    },
    useMemo: function (e, o) {
      var a = ci();
      return (
        (o = o === void 0 ? null : o), (e = e()), (a.memoizedState = [e, o]), e
      );
    },
    useReducer: function (e, o, a) {
      var c = ci();
      return (
        (o = a !== void 0 ? a(o) : o),
        (c.memoizedState = c.baseState = o),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: o,
        }),
        (c.queue = e),
        (e = e.dispatch = Gi.bind(null, N, e)),
        [c.memoizedState, e]
      );
    },
    useRef: function (e) {
      var o = ci();
      return (e = { current: e }), (o.memoizedState = e);
    },
    useState: qi,
    useDebugValue: Ai,
    useDeferredValue: function (e) {
      return (ci().memoizedState = e);
    },
    useTransition: function () {
      var e = qi(!1),
        o = e[0];
      return (e = Ei.bind(null, e[1])), (ci().memoizedState = e), [o, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, o, a) {
      var c = N,
        d = ci();
      if (I) {
        if (a === void 0) throw Error(p(407));
        a = a();
      } else {
        if (((a = o()), R === null)) throw Error(p(349));
        Rh & 30 || ni(c, o, a);
      }
      d.memoizedState = a;
      var g = { value: a, getSnapshot: o };
      return (
        (d.queue = g),
        vi(ki.bind(null, c, g, e), [e]),
        (c.flags |= 2048),
        li(9, mi.bind(null, c, g, a, o), void 0, null),
        a
      );
    },
    useId: function () {
      var e = ci(),
        o = R.identifierPrefix;
      if (I) {
        var a = sg,
          c = rg;
        (a = (c & ~(1 << (32 - oc(c) - 1))).toString(32) + a),
          (o = ':' + o + 'R' + a),
          (a = Uh++),
          0 < a && (o += 'H' + a.toString(32)),
          (o += ':');
      } else (a = Vh++), (o = ':' + o + 'r' + a.toString(32) + ':');
      return (e.memoizedState = o);
    },
    unstable_isNewReconciler: !1,
  },
  Zh = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: fi,
    useRef: si,
    useState: function () {
      return fi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function (e) {
      var o = di();
      return Di(o, O.memoizedState, e);
    },
    useTransition: function () {
      var e = fi(ei)[0],
        o = di().memoizedState;
      return [e, o];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1,
  },
  $h = {
    readContext: Vg,
    useCallback: Bi,
    useContext: Vg,
    useEffect: ji,
    useImperativeHandle: zi,
    useInsertionEffect: wi,
    useLayoutEffect: xi,
    useMemo: Ci,
    useReducer: gi,
    useRef: si,
    useState: function () {
      return gi(ei);
    },
    useDebugValue: Ai,
    useDeferredValue: function (e) {
      var o = di();
      return O === null ? (o.memoizedState = e) : Di(o, O.memoizedState, e);
    },
    useTransition: function () {
      var e = gi(ei)[0],
        o = di().memoizedState;
      return [e, o];
    },
    useMutableSource: hi,
    useSyncExternalStore: ii,
    useId: Fi,
    unstable_isNewReconciler: !1,
  };
function Ki(e, o) {
  try {
    var a = '',
      c = o;
    do (a += Pa(c)), (c = c.return);
    while (c);
    var d = a;
  } catch (g) {
    d =
      `
Error generating stack: ` +
      g.message +
      `
` +
      g.stack;
  }
  return { value: e, source: o, stack: d, digest: null };
}
function Li(e, o, a) {
  return { value: e, source: null, stack: a ?? null, digest: o ?? null };
}
function Mi(e, o) {
  try {
    console.error(o.value);
  } catch (a) {
    setTimeout(function () {
      throw a;
    });
  }
}
var Ni = typeof WeakMap == 'function' ? WeakMap : Map;
function Oi(e, o, a) {
  (a = ch(-1, a)), (a.tag = 3), (a.payload = { element: null });
  var c = o.value;
  return (
    (a.callback = function () {
      Pi || ((Pi = !0), (Qi = c)), Mi(e, o);
    }),
    a
  );
}
function Ri(e, o, a) {
  (a = ch(-1, a)), (a.tag = 3);
  var c = e.type.getDerivedStateFromError;
  if (typeof c == 'function') {
    var d = o.value;
    (a.payload = function () {
      return c(d);
    }),
      (a.callback = function () {
        Mi(e, o);
      });
  }
  var g = e.stateNode;
  return (
    g !== null &&
      typeof g.componentDidCatch == 'function' &&
      (a.callback = function () {
        Mi(e, o),
          typeof c != 'function' &&
            (Si === null ? (Si = new Set([this])) : Si.add(this));
        var j = o.stack;
        this.componentDidCatch(o.value, {
          componentStack: j !== null ? j : '',
        });
      }),
    a
  );
}
function Ti(e, o, a) {
  var c = e.pingCache;
  if (c === null) {
    c = e.pingCache = new Ni();
    var d = new Set();
    c.set(o, d);
  } else (d = c.get(o)), d === void 0 && ((d = new Set()), c.set(o, d));
  d.has(a) || (d.add(a), (e = Ui.bind(null, e, o, a)), o.then(e, e));
}
function Vi(e) {
  do {
    var o;
    if (
      ((o = e.tag === 13) &&
        ((o = e.memoizedState), (o = o !== null ? o.dehydrated !== null : !0)),
      o)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Wi(e, o, a, c, d) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = d), e)
    : (e === o
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (a.flags |= 131072),
          (a.flags &= -52805),
          a.tag === 1 &&
            (a.alternate === null
              ? (a.tag = 17)
              : ((o = ch(-1, 1)), (o.tag = 2), dh(a, o, 1))),
          (a.lanes |= 1)),
      e);
}
var Xi = ua.ReactCurrentOwner,
  Ug = !1;
function Yi(e, o, a, c) {
  o.child = e === null ? Ch(o, null, a, c) : Bh(o, e.child, a, c);
}
function Zi(e, o, a, c, d) {
  a = a.render;
  var g = o.ref;
  return (
    Tg(o, d),
    (c = Xh(e, o, a, c, g, d)),
    (a = bi()),
    e !== null && !Ug
      ? ((o.updateQueue = e.updateQueue),
        (o.flags &= -2053),
        (e.lanes &= ~d),
        $i(e, o, d))
      : (I && a && vg(o), (o.flags |= 1), Yi(e, o, c, d), o.child)
  );
}
function aj(e, o, a, c, d) {
  if (e === null) {
    var g = a.type;
    return typeof g == 'function' &&
      !bj(g) &&
      g.defaultProps === void 0 &&
      a.compare === null &&
      a.defaultProps === void 0
      ? ((o.tag = 15), (o.type = g), cj(e, o, g, c, d))
      : ((e = yh(a.type, null, c, o, o.mode, d)),
        (e.ref = o.ref),
        (e.return = o),
        (o.child = e));
  }
  if (((g = e.child), !(e.lanes & d))) {
    var j = g.memoizedProps;
    if (
      ((a = a.compare), (a = a !== null ? a : Ie), a(j, c) && e.ref === o.ref)
    )
      return $i(e, o, d);
  }
  return (
    (o.flags |= 1),
    (e = wh(g, c)),
    (e.ref = o.ref),
    (e.return = o),
    (o.child = e)
  );
}
function cj(e, o, a, c, d) {
  if (e !== null) {
    var g = e.memoizedProps;
    if (Ie(g, c) && e.ref === o.ref)
      if (((Ug = !1), (o.pendingProps = c = g), (e.lanes & d) !== 0))
        e.flags & 131072 && (Ug = !0);
      else return (o.lanes = e.lanes), $i(e, o, d);
  }
  return dj(e, o, a, c, d);
}
function ej(e, o, a) {
  var c = o.pendingProps,
    d = c.children,
    g = e !== null ? e.memoizedState : null;
  if (c.mode === 'hidden')
    if (!(o.mode & 1))
      (o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        G(fj, gj),
        (gj |= a);
    else {
      if (!(a & 1073741824))
        return (
          (e = g !== null ? g.baseLanes | a : a),
          (o.lanes = o.childLanes = 1073741824),
          (o.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (o.updateQueue = null),
          G(fj, gj),
          (gj |= e),
          null
        );
      (o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (c = g !== null ? g.baseLanes : a),
        G(fj, gj),
        (gj |= c);
    }
  else
    g !== null ? ((c = g.baseLanes | a), (o.memoizedState = null)) : (c = a),
      G(fj, gj),
      (gj |= c);
  return Yi(e, o, d, a), o.child;
}
function hj(e, o) {
  var a = o.ref;
  ((e === null && a !== null) || (e !== null && e.ref !== a)) &&
    ((o.flags |= 512), (o.flags |= 2097152));
}
function dj(e, o, a, c, d) {
  var g = Zf(a) ? Xf : H.current;
  return (
    (g = Yf(o, g)),
    Tg(o, d),
    (a = Xh(e, o, a, c, g, d)),
    (c = bi()),
    e !== null && !Ug
      ? ((o.updateQueue = e.updateQueue),
        (o.flags &= -2053),
        (e.lanes &= ~d),
        $i(e, o, d))
      : (I && c && vg(o), (o.flags |= 1), Yi(e, o, a, d), o.child)
  );
}
function ij(e, o, a, c, d) {
  if (Zf(a)) {
    var g = !0;
    cg(o);
  } else g = !1;
  if ((Tg(o, d), o.stateNode === null))
    jj(e, o), ph(o, a, c), rh(o, a, c, d), (c = !0);
  else if (e === null) {
    var j = o.stateNode,
      $ = o.memoizedProps;
    j.props = $;
    var rt = j.context,
      dt = a.contextType;
    typeof dt == 'object' && dt !== null
      ? (dt = Vg(dt))
      : ((dt = Zf(a) ? Xf : H.current), (dt = Yf(o, dt)));
    var jt = a.getDerivedStateFromProps,
      bt =
        typeof jt == 'function' ||
        typeof j.getSnapshotBeforeUpdate == 'function';
    bt ||
      (typeof j.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof j.componentWillReceiveProps != 'function') ||
      (($ !== c || rt !== dt) && qh(o, j, c, dt)),
      ($g = !1);
    var vt = o.memoizedState;
    (j.state = vt),
      gh(o, c, j, d),
      (rt = o.memoizedState),
      $ !== c || vt !== rt || Wf.current || $g
        ? (typeof jt == 'function' && (kh(o, a, jt, c), (rt = o.memoizedState)),
          ($ = $g || oh(o, a, $, c, vt, rt, dt))
            ? (bt ||
                (typeof j.UNSAFE_componentWillMount != 'function' &&
                  typeof j.componentWillMount != 'function') ||
                (typeof j.componentWillMount == 'function' &&
                  j.componentWillMount(),
                typeof j.UNSAFE_componentWillMount == 'function' &&
                  j.UNSAFE_componentWillMount()),
              typeof j.componentDidMount == 'function' && (o.flags |= 4194308))
            : (typeof j.componentDidMount == 'function' && (o.flags |= 4194308),
              (o.memoizedProps = c),
              (o.memoizedState = rt)),
          (j.props = c),
          (j.state = rt),
          (j.context = dt),
          (c = $))
        : (typeof j.componentDidMount == 'function' && (o.flags |= 4194308),
          (c = !1));
  } else {
    (j = o.stateNode),
      bh(e, o),
      ($ = o.memoizedProps),
      (dt = o.type === o.elementType ? $ : Lg(o.type, $)),
      (j.props = dt),
      (bt = o.pendingProps),
      (vt = j.context),
      (rt = a.contextType),
      typeof rt == 'object' && rt !== null
        ? (rt = Vg(rt))
        : ((rt = Zf(a) ? Xf : H.current), (rt = Yf(o, rt)));
    var Pt = a.getDerivedStateFromProps;
    (jt =
      typeof Pt == 'function' ||
      typeof j.getSnapshotBeforeUpdate == 'function') ||
      (typeof j.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof j.componentWillReceiveProps != 'function') ||
      (($ !== bt || vt !== rt) && qh(o, j, c, rt)),
      ($g = !1),
      (vt = o.memoizedState),
      (j.state = vt),
      gh(o, c, j, d);
    var kt = o.memoizedState;
    $ !== bt || vt !== kt || Wf.current || $g
      ? (typeof Pt == 'function' && (kh(o, a, Pt, c), (kt = o.memoizedState)),
        (dt = $g || oh(o, a, dt, c, vt, kt, rt) || !1)
          ? (jt ||
              (typeof j.UNSAFE_componentWillUpdate != 'function' &&
                typeof j.componentWillUpdate != 'function') ||
              (typeof j.componentWillUpdate == 'function' &&
                j.componentWillUpdate(c, kt, rt),
              typeof j.UNSAFE_componentWillUpdate == 'function' &&
                j.UNSAFE_componentWillUpdate(c, kt, rt)),
            typeof j.componentDidUpdate == 'function' && (o.flags |= 4),
            typeof j.getSnapshotBeforeUpdate == 'function' && (o.flags |= 1024))
          : (typeof j.componentDidUpdate != 'function' ||
              ($ === e.memoizedProps && vt === e.memoizedState) ||
              (o.flags |= 4),
            typeof j.getSnapshotBeforeUpdate != 'function' ||
              ($ === e.memoizedProps && vt === e.memoizedState) ||
              (o.flags |= 1024),
            (o.memoizedProps = c),
            (o.memoizedState = kt)),
        (j.props = c),
        (j.state = kt),
        (j.context = rt),
        (c = dt))
      : (typeof j.componentDidUpdate != 'function' ||
          ($ === e.memoizedProps && vt === e.memoizedState) ||
          (o.flags |= 4),
        typeof j.getSnapshotBeforeUpdate != 'function' ||
          ($ === e.memoizedProps && vt === e.memoizedState) ||
          (o.flags |= 1024),
        (c = !1));
  }
  return kj(e, o, a, c, g, d);
}
function kj(e, o, a, c, d, g) {
  hj(e, o);
  var j = (o.flags & 128) !== 0;
  if (!c && !j) return d && dg(o, a, !1), $i(e, o, g);
  (c = o.stateNode), (Xi.current = o);
  var $ =
    j && typeof a.getDerivedStateFromError != 'function' ? null : c.render();
  return (
    (o.flags |= 1),
    e !== null && j
      ? ((o.child = Bh(o, e.child, null, g)), (o.child = Bh(o, null, $, g)))
      : Yi(e, o, $, g),
    (o.memoizedState = c.state),
    d && dg(o, a, !0),
    o.child
  );
}
function lj(e) {
  var o = e.stateNode;
  o.pendingContext
    ? ag(e, o.pendingContext, o.pendingContext !== o.context)
    : o.context && ag(e, o.context, !1),
    Ih(e, o.containerInfo);
}
function mj(e, o, a, c, d) {
  return Ig(), Jg(d), (o.flags |= 256), Yi(e, o, a, c), o.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function pj(e, o, a) {
  var c = o.pendingProps,
    d = M.current,
    g = !1,
    j = (o.flags & 128) !== 0,
    $;
  if (
    (($ = j) ||
      ($ = e !== null && e.memoizedState === null ? !1 : (d & 2) !== 0),
    $
      ? ((g = !0), (o.flags &= -129))
      : (e === null || e.memoizedState !== null) && (d |= 1),
    G(M, d & 1),
    e === null)
  )
    return (
      Eg(o),
      (e = o.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (o.mode & 1
            ? e.data === '$!'
              ? (o.lanes = 8)
              : (o.lanes = 1073741824)
            : (o.lanes = 1),
          null)
        : ((j = c.children),
          (e = c.fallback),
          g
            ? ((c = o.mode),
              (g = o.child),
              (j = { mode: 'hidden', children: j }),
              !(c & 1) && g !== null
                ? ((g.childLanes = 0), (g.pendingProps = j))
                : (g = qj(j, c, 0, null)),
              (e = Ah(e, c, a, null)),
              (g.return = o),
              (e.return = o),
              (g.sibling = e),
              (o.child = g),
              (o.child.memoizedState = oj(a)),
              (o.memoizedState = nj),
              e)
            : rj(o, j))
    );
  if (((d = e.memoizedState), d !== null && (($ = d.dehydrated), $ !== null)))
    return sj(e, o, j, c, $, d, a);
  if (g) {
    (g = c.fallback), (j = o.mode), (d = e.child), ($ = d.sibling);
    var rt = { mode: 'hidden', children: c.children };
    return (
      !(j & 1) && o.child !== d
        ? ((c = o.child),
          (c.childLanes = 0),
          (c.pendingProps = rt),
          (o.deletions = null))
        : ((c = wh(d, rt)), (c.subtreeFlags = d.subtreeFlags & 14680064)),
      $ !== null ? (g = wh($, g)) : ((g = Ah(g, j, a, null)), (g.flags |= 2)),
      (g.return = o),
      (c.return = o),
      (c.sibling = g),
      (o.child = c),
      (c = g),
      (g = o.child),
      (j = e.child.memoizedState),
      (j =
        j === null
          ? oj(a)
          : {
              baseLanes: j.baseLanes | a,
              cachePool: null,
              transitions: j.transitions,
            }),
      (g.memoizedState = j),
      (g.childLanes = e.childLanes & ~a),
      (o.memoizedState = nj),
      c
    );
  }
  return (
    (g = e.child),
    (e = g.sibling),
    (c = wh(g, { mode: 'visible', children: c.children })),
    !(o.mode & 1) && (c.lanes = a),
    (c.return = o),
    (c.sibling = null),
    e !== null &&
      ((a = o.deletions),
      a === null ? ((o.deletions = [e]), (o.flags |= 16)) : a.push(e)),
    (o.child = c),
    (o.memoizedState = null),
    c
  );
}
function rj(e, o) {
  return (
    (o = qj({ mode: 'visible', children: o }, e.mode, 0, null)),
    (o.return = e),
    (e.child = o)
  );
}
function tj(e, o, a, c) {
  return (
    c !== null && Jg(c),
    Bh(o, e.child, null, a),
    (e = rj(o, o.pendingProps.children)),
    (e.flags |= 2),
    (o.memoizedState = null),
    e
  );
}
function sj(e, o, a, c, d, g, j) {
  if (a)
    return o.flags & 256
      ? ((o.flags &= -257), (c = Li(Error(p(422)))), tj(e, o, j, c))
      : o.memoizedState !== null
      ? ((o.child = e.child), (o.flags |= 128), null)
      : ((g = c.fallback),
        (d = o.mode),
        (c = qj({ mode: 'visible', children: c.children }, d, 0, null)),
        (g = Ah(g, d, j, null)),
        (g.flags |= 2),
        (c.return = o),
        (g.return = o),
        (c.sibling = g),
        (o.child = c),
        o.mode & 1 && Bh(o, e.child, null, j),
        (o.child.memoizedState = oj(j)),
        (o.memoizedState = nj),
        g);
  if (!(o.mode & 1)) return tj(e, o, j, null);
  if (d.data === '$!') {
    if (((c = d.nextSibling && d.nextSibling.dataset), c)) var $ = c.dgst;
    return (c = $), (g = Error(p(419))), (c = Li(g, c, void 0)), tj(e, o, j, c);
  }
  if ((($ = (j & e.childLanes) !== 0), Ug || $)) {
    if (((c = R), c !== null)) {
      switch (j & -j) {
        case 4:
          d = 2;
          break;
        case 16:
          d = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          d = 32;
          break;
        case 536870912:
          d = 268435456;
          break;
        default:
          d = 0;
      }
      (d = d & (c.suspendedLanes | j) ? 0 : d),
        d !== 0 &&
          d !== g.retryLane &&
          ((g.retryLane = d), Zg(e, d), mh(c, e, d, -1));
    }
    return uj(), (c = Li(Error(p(421)))), tj(e, o, j, c);
  }
  return d.data === '$?'
    ? ((o.flags |= 128),
      (o.child = e.child),
      (o = vj.bind(null, e)),
      (d._reactRetry = o),
      null)
    : ((e = g.treeContext),
      (yg = Lf(d.nextSibling)),
      (xg = o),
      (I = !0),
      (zg = null),
      e !== null &&
        ((og[pg++] = rg),
        (og[pg++] = sg),
        (og[pg++] = qg),
        (rg = e.id),
        (sg = e.overflow),
        (qg = o)),
      (o = rj(o, c.children)),
      (o.flags |= 4096),
      o);
}
function wj(e, o, a) {
  e.lanes |= o;
  var c = e.alternate;
  c !== null && (c.lanes |= o), Sg(e.return, o, a);
}
function xj(e, o, a, c, d) {
  var g = e.memoizedState;
  g === null
    ? (e.memoizedState = {
        isBackwards: o,
        rendering: null,
        renderingStartTime: 0,
        last: c,
        tail: a,
        tailMode: d,
      })
    : ((g.isBackwards = o),
      (g.rendering = null),
      (g.renderingStartTime = 0),
      (g.last = c),
      (g.tail = a),
      (g.tailMode = d));
}
function yj(e, o, a) {
  var c = o.pendingProps,
    d = c.revealOrder,
    g = c.tail;
  if ((Yi(e, o, c.children, a), (c = M.current), c & 2))
    (c = (c & 1) | 2), (o.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = o.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && wj(e, a, o);
        else if (e.tag === 19) wj(e, a, o);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === o) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === o) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    c &= 1;
  }
  if ((G(M, c), !(o.mode & 1))) o.memoizedState = null;
  else
    switch (d) {
      case 'forwards':
        for (a = o.child, d = null; a !== null; )
          (e = a.alternate),
            e !== null && Mh(e) === null && (d = a),
            (a = a.sibling);
        (a = d),
          a === null
            ? ((d = o.child), (o.child = null))
            : ((d = a.sibling), (a.sibling = null)),
          xj(o, !1, d, a, g);
        break;
      case 'backwards':
        for (a = null, d = o.child, o.child = null; d !== null; ) {
          if (((e = d.alternate), e !== null && Mh(e) === null)) {
            o.child = d;
            break;
          }
          (e = d.sibling), (d.sibling = a), (a = d), (d = e);
        }
        xj(o, !0, a, null, g);
        break;
      case 'together':
        xj(o, !1, null, null, void 0);
        break;
      default:
        o.memoizedState = null;
    }
  return o.child;
}
function jj(e, o) {
  !(o.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (o.alternate = null), (o.flags |= 2));
}
function $i(e, o, a) {
  if (
    (e !== null && (o.dependencies = e.dependencies),
    (hh |= o.lanes),
    !(a & o.childLanes))
  )
    return null;
  if (e !== null && o.child !== e.child) throw Error(p(153));
  if (o.child !== null) {
    for (
      e = o.child, a = wh(e, e.pendingProps), o.child = a, a.return = o;
      e.sibling !== null;

    )
      (e = e.sibling), (a = a.sibling = wh(e, e.pendingProps)), (a.return = o);
    a.sibling = null;
  }
  return o.child;
}
function zj(e, o, a) {
  switch (o.tag) {
    case 3:
      lj(o), Ig();
      break;
    case 5:
      Kh(o);
      break;
    case 1:
      Zf(o.type) && cg(o);
      break;
    case 4:
      Ih(o, o.stateNode.containerInfo);
      break;
    case 10:
      var c = o.type._context,
        d = o.memoizedProps.value;
      G(Mg, c._currentValue), (c._currentValue = d);
      break;
    case 13:
      if (((c = o.memoizedState), c !== null))
        return c.dehydrated !== null
          ? (G(M, M.current & 1), (o.flags |= 128), null)
          : a & o.child.childLanes
          ? pj(e, o, a)
          : (G(M, M.current & 1),
            (e = $i(e, o, a)),
            e !== null ? e.sibling : null);
      G(M, M.current & 1);
      break;
    case 19:
      if (((c = (a & o.childLanes) !== 0), e.flags & 128)) {
        if (c) return yj(e, o, a);
        o.flags |= 128;
      }
      if (
        ((d = o.memoizedState),
        d !== null &&
          ((d.rendering = null), (d.tail = null), (d.lastEffect = null)),
        G(M, M.current),
        c)
      )
        break;
      return null;
    case 22:
    case 23:
      return (o.lanes = 0), ej(e, o, a);
  }
  return $i(e, o, a);
}
var Aj, Bj, Cj, Dj;
Aj = function (e, o) {
  for (var a = o.child; a !== null; ) {
    if (a.tag === 5 || a.tag === 6) e.appendChild(a.stateNode);
    else if (a.tag !== 4 && a.child !== null) {
      (a.child.return = a), (a = a.child);
      continue;
    }
    if (a === o) break;
    for (; a.sibling === null; ) {
      if (a.return === null || a.return === o) return;
      a = a.return;
    }
    (a.sibling.return = a.return), (a = a.sibling);
  }
};
Bj = function () {};
Cj = function (e, o, a, c) {
  var d = e.memoizedProps;
  if (d !== c) {
    (e = o.stateNode), Hh(Eh.current);
    var g = null;
    switch (a) {
      case 'input':
        (d = Ya(e, d)), (c = Ya(e, c)), (g = []);
        break;
      case 'select':
        (d = A({}, d, { value: void 0 })),
          (c = A({}, c, { value: void 0 })),
          (g = []);
        break;
      case 'textarea':
        (d = gb(e, d)), (c = gb(e, c)), (g = []);
        break;
      default:
        typeof d.onClick != 'function' &&
          typeof c.onClick == 'function' &&
          (e.onclick = Bf);
    }
    ub(a, c);
    var j;
    a = null;
    for (dt in d)
      if (!c.hasOwnProperty(dt) && d.hasOwnProperty(dt) && d[dt] != null)
        if (dt === 'style') {
          var $ = d[dt];
          for (j in $) $.hasOwnProperty(j) && (a || (a = {}), (a[j] = ''));
        } else
          dt !== 'dangerouslySetInnerHTML' &&
            dt !== 'children' &&
            dt !== 'suppressContentEditableWarning' &&
            dt !== 'suppressHydrationWarning' &&
            dt !== 'autoFocus' &&
            (ea.hasOwnProperty(dt)
              ? g || (g = [])
              : (g = g || []).push(dt, null));
    for (dt in c) {
      var rt = c[dt];
      if (
        (($ = d != null ? d[dt] : void 0),
        c.hasOwnProperty(dt) && rt !== $ && (rt != null || $ != null))
      )
        if (dt === 'style')
          if ($) {
            for (j in $)
              !$.hasOwnProperty(j) ||
                (rt && rt.hasOwnProperty(j)) ||
                (a || (a = {}), (a[j] = ''));
            for (j in rt)
              rt.hasOwnProperty(j) &&
                $[j] !== rt[j] &&
                (a || (a = {}), (a[j] = rt[j]));
          } else a || (g || (g = []), g.push(dt, a)), (a = rt);
        else
          dt === 'dangerouslySetInnerHTML'
            ? ((rt = rt ? rt.__html : void 0),
              ($ = $ ? $.__html : void 0),
              rt != null && $ !== rt && (g = g || []).push(dt, rt))
            : dt === 'children'
            ? (typeof rt != 'string' && typeof rt != 'number') ||
              (g = g || []).push(dt, '' + rt)
            : dt !== 'suppressContentEditableWarning' &&
              dt !== 'suppressHydrationWarning' &&
              (ea.hasOwnProperty(dt)
                ? (rt != null && dt === 'onScroll' && D('scroll', e),
                  g || $ === rt || (g = []))
                : (g = g || []).push(dt, rt));
    }
    a && (g = g || []).push('style', a);
    var dt = g;
    (o.updateQueue = dt) && (o.flags |= 4);
  }
};
Dj = function (e, o, a, c) {
  a !== c && (o.flags |= 4);
};
function Ej(e, o) {
  if (!I)
    switch (e.tailMode) {
      case 'hidden':
        o = e.tail;
        for (var a = null; o !== null; )
          o.alternate !== null && (a = o), (o = o.sibling);
        a === null ? (e.tail = null) : (a.sibling = null);
        break;
      case 'collapsed':
        a = e.tail;
        for (var c = null; a !== null; )
          a.alternate !== null && (c = a), (a = a.sibling);
        c === null
          ? o || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (c.sibling = null);
    }
}
function S(e) {
  var o = e.alternate !== null && e.alternate.child === e.child,
    a = 0,
    c = 0;
  if (o)
    for (var d = e.child; d !== null; )
      (a |= d.lanes | d.childLanes),
        (c |= d.subtreeFlags & 14680064),
        (c |= d.flags & 14680064),
        (d.return = e),
        (d = d.sibling);
  else
    for (d = e.child; d !== null; )
      (a |= d.lanes | d.childLanes),
        (c |= d.subtreeFlags),
        (c |= d.flags),
        (d.return = e),
        (d = d.sibling);
  return (e.subtreeFlags |= c), (e.childLanes = a), o;
}
function Fj(e, o, a) {
  var c = o.pendingProps;
  switch ((wg(o), o.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(o), null;
    case 1:
      return Zf(o.type) && $f(), S(o), null;
    case 3:
      return (
        (c = o.stateNode),
        Jh(),
        E(Wf),
        E(H),
        Oh(),
        c.pendingContext &&
          ((c.context = c.pendingContext), (c.pendingContext = null)),
        (e === null || e.child === null) &&
          (Gg(o)
            ? (o.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(o.flags & 256)) ||
              ((o.flags |= 1024), zg !== null && (Gj(zg), (zg = null)))),
        Bj(e, o),
        S(o),
        null
      );
    case 5:
      Lh(o);
      var d = Hh(Gh.current);
      if (((a = o.type), e !== null && o.stateNode != null))
        Cj(e, o, a, c, d),
          e.ref !== o.ref && ((o.flags |= 512), (o.flags |= 2097152));
      else {
        if (!c) {
          if (o.stateNode === null) throw Error(p(166));
          return S(o), null;
        }
        if (((e = Hh(Eh.current)), Gg(o))) {
          (c = o.stateNode), (a = o.type);
          var g = o.memoizedProps;
          switch (((c[Of] = o), (c[Pf] = g), (e = (o.mode & 1) !== 0), a)) {
            case 'dialog':
              D('cancel', c), D('close', c);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              D('load', c);
              break;
            case 'video':
            case 'audio':
              for (d = 0; d < lf.length; d++) D(lf[d], c);
              break;
            case 'source':
              D('error', c);
              break;
            case 'img':
            case 'image':
            case 'link':
              D('error', c), D('load', c);
              break;
            case 'details':
              D('toggle', c);
              break;
            case 'input':
              Za(c, g), D('invalid', c);
              break;
            case 'select':
              (c._wrapperState = { wasMultiple: !!g.multiple }),
                D('invalid', c);
              break;
            case 'textarea':
              hb(c, g), D('invalid', c);
          }
          ub(a, g), (d = null);
          for (var j in g)
            if (g.hasOwnProperty(j)) {
              var $ = g[j];
              j === 'children'
                ? typeof $ == 'string'
                  ? c.textContent !== $ &&
                    (g.suppressHydrationWarning !== !0 &&
                      Af(c.textContent, $, e),
                    (d = ['children', $]))
                  : typeof $ == 'number' &&
                    c.textContent !== '' + $ &&
                    (g.suppressHydrationWarning !== !0 &&
                      Af(c.textContent, $, e),
                    (d = ['children', '' + $]))
                : ea.hasOwnProperty(j) &&
                  $ != null &&
                  j === 'onScroll' &&
                  D('scroll', c);
            }
          switch (a) {
            case 'input':
              Va(c), db(c, g, !0);
              break;
            case 'textarea':
              Va(c), jb(c);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof g.onClick == 'function' && (c.onclick = Bf);
          }
          (c = d), (o.updateQueue = c), c !== null && (o.flags |= 4);
        } else {
          (j = d.nodeType === 9 ? d : d.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = kb(a)),
            e === 'http://www.w3.org/1999/xhtml'
              ? a === 'script'
                ? ((e = j.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof c.is == 'string'
                ? (e = j.createElement(a, { is: c.is }))
                : ((e = j.createElement(a)),
                  a === 'select' &&
                    ((j = e),
                    c.multiple
                      ? (j.multiple = !0)
                      : c.size && (j.size = c.size)))
              : (e = j.createElementNS(e, a)),
            (e[Of] = o),
            (e[Pf] = c),
            Aj(e, o, !1, !1),
            (o.stateNode = e);
          e: {
            switch (((j = vb(a, c)), a)) {
              case 'dialog':
                D('cancel', e), D('close', e), (d = c);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                D('load', e), (d = c);
                break;
              case 'video':
              case 'audio':
                for (d = 0; d < lf.length; d++) D(lf[d], e);
                d = c;
                break;
              case 'source':
                D('error', e), (d = c);
                break;
              case 'img':
              case 'image':
              case 'link':
                D('error', e), D('load', e), (d = c);
                break;
              case 'details':
                D('toggle', e), (d = c);
                break;
              case 'input':
                Za(e, c), (d = Ya(e, c)), D('invalid', e);
                break;
              case 'option':
                d = c;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!c.multiple }),
                  (d = A({}, c, { value: void 0 })),
                  D('invalid', e);
                break;
              case 'textarea':
                hb(e, c), (d = gb(e, c)), D('invalid', e);
                break;
              default:
                d = c;
            }
            ub(a, d), ($ = d);
            for (g in $)
              if ($.hasOwnProperty(g)) {
                var rt = $[g];
                g === 'style'
                  ? sb(e, rt)
                  : g === 'dangerouslySetInnerHTML'
                  ? ((rt = rt ? rt.__html : void 0), rt != null && nb(e, rt))
                  : g === 'children'
                  ? typeof rt == 'string'
                    ? (a !== 'textarea' || rt !== '') && ob(e, rt)
                    : typeof rt == 'number' && ob(e, '' + rt)
                  : g !== 'suppressContentEditableWarning' &&
                    g !== 'suppressHydrationWarning' &&
                    g !== 'autoFocus' &&
                    (ea.hasOwnProperty(g)
                      ? rt != null && g === 'onScroll' && D('scroll', e)
                      : rt != null && ta(e, g, rt, j));
              }
            switch (a) {
              case 'input':
                Va(e), db(e, c, !1);
                break;
              case 'textarea':
                Va(e), jb(e);
                break;
              case 'option':
                c.value != null && e.setAttribute('value', '' + Sa(c.value));
                break;
              case 'select':
                (e.multiple = !!c.multiple),
                  (g = c.value),
                  g != null
                    ? fb(e, !!c.multiple, g, !1)
                    : c.defaultValue != null &&
                      fb(e, !!c.multiple, c.defaultValue, !0);
                break;
              default:
                typeof d.onClick == 'function' && (e.onclick = Bf);
            }
            switch (a) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                c = !!c.autoFocus;
                break e;
              case 'img':
                c = !0;
                break e;
              default:
                c = !1;
            }
          }
          c && (o.flags |= 4);
        }
        o.ref !== null && ((o.flags |= 512), (o.flags |= 2097152));
      }
      return S(o), null;
    case 6:
      if (e && o.stateNode != null) Dj(e, o, e.memoizedProps, c);
      else {
        if (typeof c != 'string' && o.stateNode === null) throw Error(p(166));
        if (((a = Hh(Gh.current)), Hh(Eh.current), Gg(o))) {
          if (
            ((c = o.stateNode),
            (a = o.memoizedProps),
            (c[Of] = o),
            (g = c.nodeValue !== a) && ((e = xg), e !== null))
          )
            switch (e.tag) {
              case 3:
                Af(c.nodeValue, a, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Af(c.nodeValue, a, (e.mode & 1) !== 0);
            }
          g && (o.flags |= 4);
        } else
          (c = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(c)),
            (c[Of] = o),
            (o.stateNode = c);
      }
      return S(o), null;
    case 13:
      if (
        (E(M),
        (c = o.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (I && yg !== null && o.mode & 1 && !(o.flags & 128))
          Hg(), Ig(), (o.flags |= 98560), (g = !1);
        else if (((g = Gg(o)), c !== null && c.dehydrated !== null)) {
          if (e === null) {
            if (!g) throw Error(p(318));
            if (
              ((g = o.memoizedState),
              (g = g !== null ? g.dehydrated : null),
              !g)
            )
              throw Error(p(317));
            g[Of] = o;
          } else
            Ig(), !(o.flags & 128) && (o.memoizedState = null), (o.flags |= 4);
          S(o), (g = !1);
        } else zg !== null && (Gj(zg), (zg = null)), (g = !0);
        if (!g) return o.flags & 65536 ? o : null;
      }
      return o.flags & 128
        ? ((o.lanes = a), o)
        : ((c = c !== null),
          c !== (e !== null && e.memoizedState !== null) &&
            c &&
            ((o.child.flags |= 8192),
            o.mode & 1 &&
              (e === null || M.current & 1 ? T === 0 && (T = 3) : uj())),
          o.updateQueue !== null && (o.flags |= 4),
          S(o),
          null);
    case 4:
      return (
        Jh(), Bj(e, o), e === null && sf(o.stateNode.containerInfo), S(o), null
      );
    case 10:
      return Rg(o.type._context), S(o), null;
    case 17:
      return Zf(o.type) && $f(), S(o), null;
    case 19:
      if ((E(M), (g = o.memoizedState), g === null)) return S(o), null;
      if (((c = (o.flags & 128) !== 0), (j = g.rendering), j === null))
        if (c) Ej(g, !1);
        else {
          if (T !== 0 || (e !== null && e.flags & 128))
            for (e = o.child; e !== null; ) {
              if (((j = Mh(e)), j !== null)) {
                for (
                  o.flags |= 128,
                    Ej(g, !1),
                    c = j.updateQueue,
                    c !== null && ((o.updateQueue = c), (o.flags |= 4)),
                    o.subtreeFlags = 0,
                    c = a,
                    a = o.child;
                  a !== null;

                )
                  (g = a),
                    (e = c),
                    (g.flags &= 14680066),
                    (j = g.alternate),
                    j === null
                      ? ((g.childLanes = 0),
                        (g.lanes = e),
                        (g.child = null),
                        (g.subtreeFlags = 0),
                        (g.memoizedProps = null),
                        (g.memoizedState = null),
                        (g.updateQueue = null),
                        (g.dependencies = null),
                        (g.stateNode = null))
                      : ((g.childLanes = j.childLanes),
                        (g.lanes = j.lanes),
                        (g.child = j.child),
                        (g.subtreeFlags = 0),
                        (g.deletions = null),
                        (g.memoizedProps = j.memoizedProps),
                        (g.memoizedState = j.memoizedState),
                        (g.updateQueue = j.updateQueue),
                        (g.type = j.type),
                        (e = j.dependencies),
                        (g.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (a = a.sibling);
                return G(M, (M.current & 1) | 2), o.child;
              }
              e = e.sibling;
            }
          g.tail !== null &&
            B() > Hj &&
            ((o.flags |= 128), (c = !0), Ej(g, !1), (o.lanes = 4194304));
        }
      else {
        if (!c)
          if (((e = Mh(j)), e !== null)) {
            if (
              ((o.flags |= 128),
              (c = !0),
              (a = e.updateQueue),
              a !== null && ((o.updateQueue = a), (o.flags |= 4)),
              Ej(g, !0),
              g.tail === null && g.tailMode === 'hidden' && !j.alternate && !I)
            )
              return S(o), null;
          } else
            2 * B() - g.renderingStartTime > Hj &&
              a !== 1073741824 &&
              ((o.flags |= 128), (c = !0), Ej(g, !1), (o.lanes = 4194304));
        g.isBackwards
          ? ((j.sibling = o.child), (o.child = j))
          : ((a = g.last),
            a !== null ? (a.sibling = j) : (o.child = j),
            (g.last = j));
      }
      return g.tail !== null
        ? ((o = g.tail),
          (g.rendering = o),
          (g.tail = o.sibling),
          (g.renderingStartTime = B()),
          (o.sibling = null),
          (a = M.current),
          G(M, c ? (a & 1) | 2 : a & 1),
          o)
        : (S(o), null);
    case 22:
    case 23:
      return (
        Ij(),
        (c = o.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== c && (o.flags |= 8192),
        c && o.mode & 1
          ? gj & 1073741824 && (S(o), o.subtreeFlags & 6 && (o.flags |= 8192))
          : S(o),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, o.tag));
}
function Jj(e, o) {
  switch ((wg(o), o.tag)) {
    case 1:
      return (
        Zf(o.type) && $f(),
        (e = o.flags),
        e & 65536 ? ((o.flags = (e & -65537) | 128), o) : null
      );
    case 3:
      return (
        Jh(),
        E(Wf),
        E(H),
        Oh(),
        (e = o.flags),
        e & 65536 && !(e & 128) ? ((o.flags = (e & -65537) | 128), o) : null
      );
    case 5:
      return Lh(o), null;
    case 13:
      if ((E(M), (e = o.memoizedState), e !== null && e.dehydrated !== null)) {
        if (o.alternate === null) throw Error(p(340));
        Ig();
      }
      return (
        (e = o.flags), e & 65536 ? ((o.flags = (e & -65537) | 128), o) : null
      );
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(o.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = !1,
  U = !1,
  Lj = typeof WeakSet == 'function' ? WeakSet : Set,
  V = null;
function Mj(e, o) {
  var a = e.ref;
  if (a !== null)
    if (typeof a == 'function')
      try {
        a(null);
      } catch (c) {
        W(e, o, c);
      }
    else a.current = null;
}
function Nj(e, o, a) {
  try {
    a();
  } catch (c) {
    W(e, o, c);
  }
}
var Oj = !1;
function Pj(e, o) {
  if (((Cf = dd), (e = Me()), Ne(e))) {
    if ('selectionStart' in e)
      var a = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        a = ((a = e.ownerDocument) && a.defaultView) || window;
        var c = a.getSelection && a.getSelection();
        if (c && c.rangeCount !== 0) {
          a = c.anchorNode;
          var d = c.anchorOffset,
            g = c.focusNode;
          c = c.focusOffset;
          try {
            a.nodeType, g.nodeType;
          } catch {
            a = null;
            break e;
          }
          var j = 0,
            $ = -1,
            rt = -1,
            dt = 0,
            jt = 0,
            bt = e,
            vt = null;
          t: for (;;) {
            for (
              var Pt;
              bt !== a || (d !== 0 && bt.nodeType !== 3) || ($ = j + d),
                bt !== g || (c !== 0 && bt.nodeType !== 3) || (rt = j + c),
                bt.nodeType === 3 && (j += bt.nodeValue.length),
                (Pt = bt.firstChild) !== null;

            )
              (vt = bt), (bt = Pt);
            for (;;) {
              if (bt === e) break t;
              if (
                (vt === a && ++dt === d && ($ = j),
                vt === g && ++jt === c && (rt = j),
                (Pt = bt.nextSibling) !== null)
              )
                break;
              (bt = vt), (vt = bt.parentNode);
            }
            bt = Pt;
          }
          a = $ === -1 || rt === -1 ? null : { start: $, end: rt };
        } else a = null;
      }
    a = a || { start: 0, end: 0 };
  } else a = null;
  for (Df = { focusedElem: e, selectionRange: a }, dd = !1, V = o; V !== null; )
    if (((o = V), (e = o.child), (o.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = o), (V = e);
    else
      for (; V !== null; ) {
        o = V;
        try {
          var kt = o.alternate;
          if (o.flags & 1024)
            switch (o.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (kt !== null) {
                  var gt = kt.memoizedProps,
                    mt = kt.memoizedState,
                    it = o.stateNode,
                    et = it.getSnapshotBeforeUpdate(
                      o.elementType === o.type ? gt : Lg(o.type, gt),
                      mt
                    );
                  it.__reactInternalSnapshotBeforeUpdate = et;
                }
                break;
              case 3:
                var b = o.stateNode.containerInfo;
                b.nodeType === 1
                  ? (b.textContent = '')
                  : b.nodeType === 9 &&
                    b.documentElement &&
                    b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (ut) {
          W(o, o.return, ut);
        }
        if (((e = o.sibling), e !== null)) {
          (e.return = o.return), (V = e);
          break;
        }
        V = o.return;
      }
  return (kt = Oj), (Oj = !1), kt;
}
function Qj(e, o, a) {
  var c = o.updateQueue;
  if (((c = c !== null ? c.lastEffect : null), c !== null)) {
    var d = (c = c.next);
    do {
      if ((d.tag & e) === e) {
        var g = d.destroy;
        (d.destroy = void 0), g !== void 0 && Nj(o, a, g);
      }
      d = d.next;
    } while (d !== c);
  }
}
function Rj(e, o) {
  if (
    ((o = o.updateQueue), (o = o !== null ? o.lastEffect : null), o !== null)
  ) {
    var a = (o = o.next);
    do {
      if ((a.tag & e) === e) {
        var c = a.create;
        a.destroy = c();
      }
      a = a.next;
    } while (a !== o);
  }
}
function Sj(e) {
  var o = e.ref;
  if (o !== null) {
    var a = e.stateNode;
    switch (e.tag) {
      case 5:
        e = a;
        break;
      default:
        e = a;
    }
    typeof o == 'function' ? o(e) : (o.current = e);
  }
}
function Tj(e) {
  var o = e.alternate;
  o !== null && ((e.alternate = null), Tj(o)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((o = e.stateNode),
      o !== null &&
        (delete o[Of], delete o[Pf], delete o[of], delete o[Qf], delete o[Rf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Uj(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Vj(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Uj(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Wj(e, o, a) {
  var c = e.tag;
  if (c === 5 || c === 6)
    (e = e.stateNode),
      o
        ? a.nodeType === 8
          ? a.parentNode.insertBefore(e, o)
          : a.insertBefore(e, o)
        : (a.nodeType === 8
            ? ((o = a.parentNode), o.insertBefore(e, a))
            : ((o = a), o.appendChild(e)),
          (a = a._reactRootContainer),
          a != null || o.onclick !== null || (o.onclick = Bf));
  else if (c !== 4 && ((e = e.child), e !== null))
    for (Wj(e, o, a), e = e.sibling; e !== null; ) Wj(e, o, a), (e = e.sibling);
}
function Xj(e, o, a) {
  var c = e.tag;
  if (c === 5 || c === 6)
    (e = e.stateNode), o ? a.insertBefore(e, o) : a.appendChild(e);
  else if (c !== 4 && ((e = e.child), e !== null))
    for (Xj(e, o, a), e = e.sibling; e !== null; ) Xj(e, o, a), (e = e.sibling);
}
var X = null,
  Yj = !1;
function Zj(e, o, a) {
  for (a = a.child; a !== null; ) ak(e, o, a), (a = a.sibling);
}
function ak(e, o, a) {
  if (lc && typeof lc.onCommitFiberUnmount == 'function')
    try {
      lc.onCommitFiberUnmount(kc, a);
    } catch {}
  switch (a.tag) {
    case 5:
      U || Mj(a, o);
    case 6:
      var c = X,
        d = Yj;
      (X = null),
        Zj(e, o, a),
        (X = c),
        (Yj = d),
        X !== null &&
          (Yj
            ? ((e = X),
              (a = a.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(a) : e.removeChild(a))
            : X.removeChild(a.stateNode));
      break;
    case 18:
      X !== null &&
        (Yj
          ? ((e = X),
            (a = a.stateNode),
            e.nodeType === 8
              ? Kf(e.parentNode, a)
              : e.nodeType === 1 && Kf(e, a),
            bd(e))
          : Kf(X, a.stateNode));
      break;
    case 4:
      (c = X),
        (d = Yj),
        (X = a.stateNode.containerInfo),
        (Yj = !0),
        Zj(e, o, a),
        (X = c),
        (Yj = d);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !U &&
        ((c = a.updateQueue), c !== null && ((c = c.lastEffect), c !== null))
      ) {
        d = c = c.next;
        do {
          var g = d,
            j = g.destroy;
          (g = g.tag),
            j !== void 0 && (g & 2 || g & 4) && Nj(a, o, j),
            (d = d.next);
        } while (d !== c);
      }
      Zj(e, o, a);
      break;
    case 1:
      if (
        !U &&
        (Mj(a, o),
        (c = a.stateNode),
        typeof c.componentWillUnmount == 'function')
      )
        try {
          (c.props = a.memoizedProps),
            (c.state = a.memoizedState),
            c.componentWillUnmount();
        } catch ($) {
          W(a, o, $);
        }
      Zj(e, o, a);
      break;
    case 21:
      Zj(e, o, a);
      break;
    case 22:
      a.mode & 1
        ? ((U = (c = U) || a.memoizedState !== null), Zj(e, o, a), (U = c))
        : Zj(e, o, a);
      break;
    default:
      Zj(e, o, a);
  }
}
function bk(e) {
  var o = e.updateQueue;
  if (o !== null) {
    e.updateQueue = null;
    var a = e.stateNode;
    a === null && (a = e.stateNode = new Lj()),
      o.forEach(function (c) {
        var d = ck.bind(null, e, c);
        a.has(c) || (a.add(c), c.then(d, d));
      });
  }
}
function dk(e, o) {
  var a = o.deletions;
  if (a !== null)
    for (var c = 0; c < a.length; c++) {
      var d = a[c];
      try {
        var g = e,
          j = o,
          $ = j;
        e: for (; $ !== null; ) {
          switch ($.tag) {
            case 5:
              (X = $.stateNode), (Yj = !1);
              break e;
            case 3:
              (X = $.stateNode.containerInfo), (Yj = !0);
              break e;
            case 4:
              (X = $.stateNode.containerInfo), (Yj = !0);
              break e;
          }
          $ = $.return;
        }
        if (X === null) throw Error(p(160));
        ak(g, j, d), (X = null), (Yj = !1);
        var rt = d.alternate;
        rt !== null && (rt.return = null), (d.return = null);
      } catch (dt) {
        W(d, o, dt);
      }
    }
  if (o.subtreeFlags & 12854)
    for (o = o.child; o !== null; ) ek(o, e), (o = o.sibling);
}
function ek(e, o) {
  var a = e.alternate,
    c = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((dk(o, e), fk(e), c & 4)) {
        try {
          Qj(3, e, e.return), Rj(3, e);
        } catch (gt) {
          W(e, e.return, gt);
        }
        try {
          Qj(5, e, e.return);
        } catch (gt) {
          W(e, e.return, gt);
        }
      }
      break;
    case 1:
      dk(o, e), fk(e), c & 512 && a !== null && Mj(a, a.return);
      break;
    case 5:
      if (
        (dk(o, e),
        fk(e),
        c & 512 && a !== null && Mj(a, a.return),
        e.flags & 32)
      ) {
        var d = e.stateNode;
        try {
          ob(d, '');
        } catch (gt) {
          W(e, e.return, gt);
        }
      }
      if (c & 4 && ((d = e.stateNode), d != null)) {
        var g = e.memoizedProps,
          j = a !== null ? a.memoizedProps : g,
          $ = e.type,
          rt = e.updateQueue;
        if (((e.updateQueue = null), rt !== null))
          try {
            $ === 'input' && g.type === 'radio' && g.name != null && ab(d, g),
              vb($, j);
            var dt = vb($, g);
            for (j = 0; j < rt.length; j += 2) {
              var jt = rt[j],
                bt = rt[j + 1];
              jt === 'style'
                ? sb(d, bt)
                : jt === 'dangerouslySetInnerHTML'
                ? nb(d, bt)
                : jt === 'children'
                ? ob(d, bt)
                : ta(d, jt, bt, dt);
            }
            switch ($) {
              case 'input':
                bb(d, g);
                break;
              case 'textarea':
                ib(d, g);
                break;
              case 'select':
                var vt = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!g.multiple;
                var Pt = g.value;
                Pt != null
                  ? fb(d, !!g.multiple, Pt, !1)
                  : vt !== !!g.multiple &&
                    (g.defaultValue != null
                      ? fb(d, !!g.multiple, g.defaultValue, !0)
                      : fb(d, !!g.multiple, g.multiple ? [] : '', !1));
            }
            d[Pf] = g;
          } catch (gt) {
            W(e, e.return, gt);
          }
      }
      break;
    case 6:
      if ((dk(o, e), fk(e), c & 4)) {
        if (e.stateNode === null) throw Error(p(162));
        (d = e.stateNode), (g = e.memoizedProps);
        try {
          d.nodeValue = g;
        } catch (gt) {
          W(e, e.return, gt);
        }
      }
      break;
    case 3:
      if (
        (dk(o, e), fk(e), c & 4 && a !== null && a.memoizedState.isDehydrated)
      )
        try {
          bd(o.containerInfo);
        } catch (gt) {
          W(e, e.return, gt);
        }
      break;
    case 4:
      dk(o, e), fk(e);
      break;
    case 13:
      dk(o, e),
        fk(e),
        (d = e.child),
        d.flags & 8192 &&
          ((g = d.memoizedState !== null),
          (d.stateNode.isHidden = g),
          !g ||
            (d.alternate !== null && d.alternate.memoizedState !== null) ||
            (gk = B())),
        c & 4 && bk(e);
      break;
    case 22:
      if (
        ((jt = a !== null && a.memoizedState !== null),
        e.mode & 1 ? ((U = (dt = U) || jt), dk(o, e), (U = dt)) : dk(o, e),
        fk(e),
        c & 8192)
      ) {
        if (
          ((dt = e.memoizedState !== null),
          (e.stateNode.isHidden = dt) && !jt && e.mode & 1)
        )
          for (V = e, jt = e.child; jt !== null; ) {
            for (bt = V = jt; V !== null; ) {
              switch (((vt = V), (Pt = vt.child), vt.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, vt, vt.return);
                  break;
                case 1:
                  Mj(vt, vt.return);
                  var kt = vt.stateNode;
                  if (typeof kt.componentWillUnmount == 'function') {
                    (c = vt), (a = vt.return);
                    try {
                      (o = c),
                        (kt.props = o.memoizedProps),
                        (kt.state = o.memoizedState),
                        kt.componentWillUnmount();
                    } catch (gt) {
                      W(c, a, gt);
                    }
                  }
                  break;
                case 5:
                  Mj(vt, vt.return);
                  break;
                case 22:
                  if (vt.memoizedState !== null) {
                    hk(bt);
                    continue;
                  }
              }
              Pt !== null ? ((Pt.return = vt), (V = Pt)) : hk(bt);
            }
            jt = jt.sibling;
          }
        e: for (jt = null, bt = e; ; ) {
          if (bt.tag === 5) {
            if (jt === null) {
              jt = bt;
              try {
                (d = bt.stateNode),
                  dt
                    ? ((g = d.style),
                      typeof g.setProperty == 'function'
                        ? g.setProperty('display', 'none', 'important')
                        : (g.display = 'none'))
                    : (($ = bt.stateNode),
                      (rt = bt.memoizedProps.style),
                      (j =
                        rt != null && rt.hasOwnProperty('display')
                          ? rt.display
                          : null),
                      ($.style.display = rb('display', j)));
              } catch (gt) {
                W(e, e.return, gt);
              }
            }
          } else if (bt.tag === 6) {
            if (jt === null)
              try {
                bt.stateNode.nodeValue = dt ? '' : bt.memoizedProps;
              } catch (gt) {
                W(e, e.return, gt);
              }
          } else if (
            ((bt.tag !== 22 && bt.tag !== 23) ||
              bt.memoizedState === null ||
              bt === e) &&
            bt.child !== null
          ) {
            (bt.child.return = bt), (bt = bt.child);
            continue;
          }
          if (bt === e) break e;
          for (; bt.sibling === null; ) {
            if (bt.return === null || bt.return === e) break e;
            jt === bt && (jt = null), (bt = bt.return);
          }
          jt === bt && (jt = null),
            (bt.sibling.return = bt.return),
            (bt = bt.sibling);
        }
      }
      break;
    case 19:
      dk(o, e), fk(e), c & 4 && bk(e);
      break;
    case 21:
      break;
    default:
      dk(o, e), fk(e);
  }
}
function fk(e) {
  var o = e.flags;
  if (o & 2) {
    try {
      e: {
        for (var a = e.return; a !== null; ) {
          if (Uj(a)) {
            var c = a;
            break e;
          }
          a = a.return;
        }
        throw Error(p(160));
      }
      switch (c.tag) {
        case 5:
          var d = c.stateNode;
          c.flags & 32 && (ob(d, ''), (c.flags &= -33));
          var g = Vj(e);
          Xj(e, g, d);
          break;
        case 3:
        case 4:
          var j = c.stateNode.containerInfo,
            $ = Vj(e);
          Wj(e, $, j);
          break;
        default:
          throw Error(p(161));
      }
    } catch (rt) {
      W(e, e.return, rt);
    }
    e.flags &= -3;
  }
  o & 4096 && (e.flags &= -4097);
}
function ik(e, o, a) {
  (V = e), jk(e);
}
function jk(e, o, a) {
  for (var c = (e.mode & 1) !== 0; V !== null; ) {
    var d = V,
      g = d.child;
    if (d.tag === 22 && c) {
      var j = d.memoizedState !== null || Kj;
      if (!j) {
        var $ = d.alternate,
          rt = ($ !== null && $.memoizedState !== null) || U;
        $ = Kj;
        var dt = U;
        if (((Kj = j), (U = rt) && !dt))
          for (V = d; V !== null; )
            (j = V),
              (rt = j.child),
              j.tag === 22 && j.memoizedState !== null
                ? kk(d)
                : rt !== null
                ? ((rt.return = j), (V = rt))
                : kk(d);
        for (; g !== null; ) (V = g), jk(g), (g = g.sibling);
        (V = d), (Kj = $), (U = dt);
      }
      lk(e);
    } else
      d.subtreeFlags & 8772 && g !== null ? ((g.return = d), (V = g)) : lk(e);
  }
}
function lk(e) {
  for (; V !== null; ) {
    var o = V;
    if (o.flags & 8772) {
      var a = o.alternate;
      try {
        if (o.flags & 8772)
          switch (o.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, o);
              break;
            case 1:
              var c = o.stateNode;
              if (o.flags & 4 && !U)
                if (a === null) c.componentDidMount();
                else {
                  var d =
                    o.elementType === o.type
                      ? a.memoizedProps
                      : Lg(o.type, a.memoizedProps);
                  c.componentDidUpdate(
                    d,
                    a.memoizedState,
                    c.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var g = o.updateQueue;
              g !== null && ih(o, g, c);
              break;
            case 3:
              var j = o.updateQueue;
              if (j !== null) {
                if (((a = null), o.child !== null))
                  switch (o.child.tag) {
                    case 5:
                      a = o.child.stateNode;
                      break;
                    case 1:
                      a = o.child.stateNode;
                  }
                ih(o, j, a);
              }
              break;
            case 5:
              var $ = o.stateNode;
              if (a === null && o.flags & 4) {
                a = $;
                var rt = o.memoizedProps;
                switch (o.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    rt.autoFocus && a.focus();
                    break;
                  case 'img':
                    rt.src && (a.src = rt.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (o.memoizedState === null) {
                var dt = o.alternate;
                if (dt !== null) {
                  var jt = dt.memoizedState;
                  if (jt !== null) {
                    var bt = jt.dehydrated;
                    bt !== null && bd(bt);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
        U || (o.flags & 512 && Sj(o));
      } catch (vt) {
        W(o, o.return, vt);
      }
    }
    if (o === e) {
      V = null;
      break;
    }
    if (((a = o.sibling), a !== null)) {
      (a.return = o.return), (V = a);
      break;
    }
    V = o.return;
  }
}
function hk(e) {
  for (; V !== null; ) {
    var o = V;
    if (o === e) {
      V = null;
      break;
    }
    var a = o.sibling;
    if (a !== null) {
      (a.return = o.return), (V = a);
      break;
    }
    V = o.return;
  }
}
function kk(e) {
  for (; V !== null; ) {
    var o = V;
    try {
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          var a = o.return;
          try {
            Rj(4, o);
          } catch (rt) {
            W(o, a, rt);
          }
          break;
        case 1:
          var c = o.stateNode;
          if (typeof c.componentDidMount == 'function') {
            var d = o.return;
            try {
              c.componentDidMount();
            } catch (rt) {
              W(o, d, rt);
            }
          }
          var g = o.return;
          try {
            Sj(o);
          } catch (rt) {
            W(o, g, rt);
          }
          break;
        case 5:
          var j = o.return;
          try {
            Sj(o);
          } catch (rt) {
            W(o, j, rt);
          }
      }
    } catch (rt) {
      W(o, o.return, rt);
    }
    if (o === e) {
      V = null;
      break;
    }
    var $ = o.sibling;
    if ($ !== null) {
      ($.return = o.return), (V = $);
      break;
    }
    V = o.return;
  }
}
var mk = Math.ceil,
  nk = ua.ReactCurrentDispatcher,
  ok = ua.ReactCurrentOwner,
  pk = ua.ReactCurrentBatchConfig,
  K = 0,
  R = null,
  Y = null,
  Z = 0,
  gj = 0,
  fj = Uf(0),
  T = 0,
  qk = null,
  hh = 0,
  rk = 0,
  sk = 0,
  tk = null,
  uk = null,
  gk = 0,
  Hj = 1 / 0,
  vk = null,
  Pi = !1,
  Qi = null,
  Si = null,
  wk = !1,
  xk = null,
  yk = 0,
  zk = 0,
  Ak = null,
  Bk = -1,
  Ck = 0;
function L() {
  return K & 6 ? B() : Bk !== -1 ? Bk : (Bk = B());
}
function lh(e) {
  return e.mode & 1
    ? K & 2 && Z !== 0
      ? Z & -Z
      : Kg.transition !== null
      ? (Ck === 0 && (Ck = yc()), Ck)
      : ((e = C),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : jd(e.type))),
        e)
    : 1;
}
function mh(e, o, a, c) {
  if (50 < zk) throw ((zk = 0), (Ak = null), Error(p(185)));
  Ac(e, a, c),
    (!(K & 2) || e !== R) &&
      (e === R && (!(K & 2) && (rk |= a), T === 4 && Dk(e, Z)),
      Ek(e, c),
      a === 1 && K === 0 && !(o.mode & 1) && ((Hj = B() + 500), fg && jg()));
}
function Ek(e, o) {
  var a = e.callbackNode;
  wc(e, o);
  var c = uc(e, e === R ? Z : 0);
  if (c === 0)
    a !== null && bc(a), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((o = c & -c), e.callbackPriority !== o)) {
    if ((a != null && bc(a), o === 1))
      e.tag === 0 ? ig(Fk.bind(null, e)) : hg(Fk.bind(null, e)),
        Jf(function () {
          !(K & 6) && jg();
        }),
        (a = null);
    else {
      switch (Dc(c)) {
        case 1:
          a = fc;
          break;
        case 4:
          a = gc;
          break;
        case 16:
          a = hc;
          break;
        case 536870912:
          a = jc;
          break;
        default:
          a = hc;
      }
      a = Gk(a, Hk.bind(null, e));
    }
    (e.callbackPriority = o), (e.callbackNode = a);
  }
}
function Hk(e, o) {
  if (((Bk = -1), (Ck = 0), K & 6)) throw Error(p(327));
  var a = e.callbackNode;
  if (Ik() && e.callbackNode !== a) return null;
  var c = uc(e, e === R ? Z : 0);
  if (c === 0) return null;
  if (c & 30 || c & e.expiredLanes || o) o = Jk(e, c);
  else {
    o = c;
    var d = K;
    K |= 2;
    var g = Kk();
    (R !== e || Z !== o) && ((vk = null), (Hj = B() + 500), Lk(e, o));
    do
      try {
        Mk();
        break;
      } catch ($) {
        Nk(e, $);
      }
    while (1);
    Qg(),
      (nk.current = g),
      (K = d),
      Y !== null ? (o = 0) : ((R = null), (Z = 0), (o = T));
  }
  if (o !== 0) {
    if (
      (o === 2 && ((d = xc(e)), d !== 0 && ((c = d), (o = Ok(e, d)))), o === 1)
    )
      throw ((a = qk), Lk(e, 0), Dk(e, c), Ek(e, B()), a);
    if (o === 6) Dk(e, c);
    else {
      if (
        ((d = e.current.alternate),
        !(c & 30) &&
          !Pk(d) &&
          ((o = Jk(e, c)),
          o === 2 && ((g = xc(e)), g !== 0 && ((c = g), (o = Ok(e, g)))),
          o === 1))
      )
        throw ((a = qk), Lk(e, 0), Dk(e, c), Ek(e, B()), a);
      switch (((e.finishedWork = d), (e.finishedLanes = c), o)) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Qk(e, uk, vk);
          break;
        case 3:
          if (
            (Dk(e, c), (c & 130023424) === c && ((o = gk + 500 - B()), 10 < o))
          ) {
            if (uc(e, 0) !== 0) break;
            if (((d = e.suspendedLanes), (d & c) !== c)) {
              L(), (e.pingedLanes |= e.suspendedLanes & d);
              break;
            }
            e.timeoutHandle = Ff(Qk.bind(null, e, uk, vk), o);
            break;
          }
          Qk(e, uk, vk);
          break;
        case 4:
          if ((Dk(e, c), (c & 4194240) === c)) break;
          for (o = e.eventTimes, d = -1; 0 < c; ) {
            var j = 31 - oc(c);
            (g = 1 << j), (j = o[j]), j > d && (d = j), (c &= ~g);
          }
          if (
            ((c = d),
            (c = B() - c),
            (c =
              (120 > c
                ? 120
                : 480 > c
                ? 480
                : 1080 > c
                ? 1080
                : 1920 > c
                ? 1920
                : 3e3 > c
                ? 3e3
                : 4320 > c
                ? 4320
                : 1960 * mk(c / 1960)) - c),
            10 < c)
          ) {
            e.timeoutHandle = Ff(Qk.bind(null, e, uk, vk), c);
            break;
          }
          Qk(e, uk, vk);
          break;
        case 5:
          Qk(e, uk, vk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  return Ek(e, B()), e.callbackNode === a ? Hk.bind(null, e) : null;
}
function Ok(e, o) {
  var a = tk;
  return (
    e.current.memoizedState.isDehydrated && (Lk(e, o).flags |= 256),
    (e = Jk(e, o)),
    e !== 2 && ((o = uk), (uk = a), o !== null && Gj(o)),
    e
  );
}
function Gj(e) {
  uk === null ? (uk = e) : uk.push.apply(uk, e);
}
function Pk(e) {
  for (var o = e; ; ) {
    if (o.flags & 16384) {
      var a = o.updateQueue;
      if (a !== null && ((a = a.stores), a !== null))
        for (var c = 0; c < a.length; c++) {
          var d = a[c],
            g = d.getSnapshot;
          d = d.value;
          try {
            if (!He(g(), d)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((a = o.child), o.subtreeFlags & 16384 && a !== null))
      (a.return = o), (o = a);
    else {
      if (o === e) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === e) return !0;
        o = o.return;
      }
      (o.sibling.return = o.return), (o = o.sibling);
    }
  }
  return !0;
}
function Dk(e, o) {
  for (
    o &= ~sk,
      o &= ~rk,
      e.suspendedLanes |= o,
      e.pingedLanes &= ~o,
      e = e.expirationTimes;
    0 < o;

  ) {
    var a = 31 - oc(o),
      c = 1 << a;
    (e[a] = -1), (o &= ~c);
  }
}
function Fk(e) {
  if (K & 6) throw Error(p(327));
  Ik();
  var o = uc(e, 0);
  if (!(o & 1)) return Ek(e, B()), null;
  var a = Jk(e, o);
  if (e.tag !== 0 && a === 2) {
    var c = xc(e);
    c !== 0 && ((o = c), (a = Ok(e, c)));
  }
  if (a === 1) throw ((a = qk), Lk(e, 0), Dk(e, o), Ek(e, B()), a);
  if (a === 6) throw Error(p(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = o),
    Qk(e, uk, vk),
    Ek(e, B()),
    null
  );
}
function Rk(e, o) {
  var a = K;
  K |= 1;
  try {
    return e(o);
  } finally {
    (K = a), K === 0 && ((Hj = B() + 500), fg && jg());
  }
}
function Sk(e) {
  xk !== null && xk.tag === 0 && !(K & 6) && Ik();
  var o = K;
  K |= 1;
  var a = pk.transition,
    c = C;
  try {
    if (((pk.transition = null), (C = 1), e)) return e();
  } finally {
    (C = c), (pk.transition = a), (K = o), !(K & 6) && jg();
  }
}
function Ij() {
  (gj = fj.current), E(fj);
}
function Lk(e, o) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var a = e.timeoutHandle;
  if ((a !== -1 && ((e.timeoutHandle = -1), Gf(a)), Y !== null))
    for (a = Y.return; a !== null; ) {
      var c = a;
      switch ((wg(c), c.tag)) {
        case 1:
          (c = c.type.childContextTypes), c != null && $f();
          break;
        case 3:
          Jh(), E(Wf), E(H), Oh();
          break;
        case 5:
          Lh(c);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(c.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      a = a.return;
    }
  if (
    ((R = e),
    (Y = e = wh(e.current, null)),
    (Z = gj = o),
    (T = 0),
    (qk = null),
    (sk = rk = hh = 0),
    (uk = tk = null),
    Wg !== null)
  ) {
    for (o = 0; o < Wg.length; o++)
      if (((a = Wg[o]), (c = a.interleaved), c !== null)) {
        a.interleaved = null;
        var d = c.next,
          g = a.pending;
        if (g !== null) {
          var j = g.next;
          (g.next = d), (c.next = j);
        }
        a.pending = c;
      }
    Wg = null;
  }
  return e;
}
function Nk(e, o) {
  do {
    var a = Y;
    try {
      if ((Qg(), (Ph.current = ai), Sh)) {
        for (var c = N.memoizedState; c !== null; ) {
          var d = c.queue;
          d !== null && (d.pending = null), (c = c.next);
        }
        Sh = !1;
      }
      if (
        ((Rh = 0),
        (P = O = N = null),
        (Th = !1),
        (Uh = 0),
        (ok.current = null),
        a === null || a.return === null)
      ) {
        (T = 1), (qk = o), (Y = null);
        break;
      }
      e: {
        var g = e,
          j = a.return,
          $ = a,
          rt = o;
        if (
          ((o = Z),
          ($.flags |= 32768),
          rt !== null && typeof rt == 'object' && typeof rt.then == 'function')
        ) {
          var dt = rt,
            jt = $,
            bt = jt.tag;
          if (!(jt.mode & 1) && (bt === 0 || bt === 11 || bt === 15)) {
            var vt = jt.alternate;
            vt
              ? ((jt.updateQueue = vt.updateQueue),
                (jt.memoizedState = vt.memoizedState),
                (jt.lanes = vt.lanes))
              : ((jt.updateQueue = null), (jt.memoizedState = null));
          }
          var Pt = Vi(j);
          if (Pt !== null) {
            (Pt.flags &= -257),
              Wi(Pt, j, $, g, o),
              Pt.mode & 1 && Ti(g, dt, o),
              (o = Pt),
              (rt = dt);
            var kt = o.updateQueue;
            if (kt === null) {
              var gt = new Set();
              gt.add(rt), (o.updateQueue = gt);
            } else kt.add(rt);
            break e;
          } else {
            if (!(o & 1)) {
              Ti(g, dt, o), uj();
              break e;
            }
            rt = Error(p(426));
          }
        } else if (I && $.mode & 1) {
          var mt = Vi(j);
          if (mt !== null) {
            !(mt.flags & 65536) && (mt.flags |= 256),
              Wi(mt, j, $, g, o),
              Jg(Ki(rt, $));
            break e;
          }
        }
        (g = rt = Ki(rt, $)),
          T !== 4 && (T = 2),
          tk === null ? (tk = [g]) : tk.push(g),
          (g = j);
        do {
          switch (g.tag) {
            case 3:
              (g.flags |= 65536), (o &= -o), (g.lanes |= o);
              var it = Oi(g, rt, o);
              fh(g, it);
              break e;
            case 1:
              $ = rt;
              var et = g.type,
                b = g.stateNode;
              if (
                !(g.flags & 128) &&
                (typeof et.getDerivedStateFromError == 'function' ||
                  (b !== null &&
                    typeof b.componentDidCatch == 'function' &&
                    (Si === null || !Si.has(b))))
              ) {
                (g.flags |= 65536), (o &= -o), (g.lanes |= o);
                var ut = Ri(g, $, o);
                fh(g, ut);
                break e;
              }
          }
          g = g.return;
        } while (g !== null);
      }
      Tk(a);
    } catch (pt) {
      (o = pt), Y === a && a !== null && (Y = a = a.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var e = nk.current;
  return (nk.current = ai), e === null ? ai : e;
}
function uj() {
  (T === 0 || T === 3 || T === 2) && (T = 4),
    R === null || (!(hh & 268435455) && !(rk & 268435455)) || Dk(R, Z);
}
function Jk(e, o) {
  var a = K;
  K |= 2;
  var c = Kk();
  (R !== e || Z !== o) && ((vk = null), Lk(e, o));
  do
    try {
      Uk();
      break;
    } catch (d) {
      Nk(e, d);
    }
  while (1);
  if ((Qg(), (K = a), (nk.current = c), Y !== null)) throw Error(p(261));
  return (R = null), (Z = 0), T;
}
function Uk() {
  for (; Y !== null; ) Vk(Y);
}
function Mk() {
  for (; Y !== null && !cc(); ) Vk(Y);
}
function Vk(e) {
  var o = Wk(e.alternate, e, gj);
  (e.memoizedProps = e.pendingProps),
    o === null ? Tk(e) : (Y = o),
    (ok.current = null);
}
function Tk(e) {
  var o = e;
  do {
    var a = o.alternate;
    if (((e = o.return), o.flags & 32768)) {
      if (((a = Jj(a, o)), a !== null)) {
        (a.flags &= 32767), (Y = a);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (T = 6), (Y = null);
        return;
      }
    } else if (((a = Fj(a, o, gj)), a !== null)) {
      Y = a;
      return;
    }
    if (((o = o.sibling), o !== null)) {
      Y = o;
      return;
    }
    Y = o = e;
  } while (o !== null);
  T === 0 && (T = 5);
}
function Qk(e, o, a) {
  var c = C,
    d = pk.transition;
  try {
    (pk.transition = null), (C = 1), Xk(e, o, a, c);
  } finally {
    (pk.transition = d), (C = c);
  }
  return null;
}
function Xk(e, o, a, c) {
  do Ik();
  while (xk !== null);
  if (K & 6) throw Error(p(327));
  a = e.finishedWork;
  var d = e.finishedLanes;
  if (a === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), a === e.current))
    throw Error(p(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var g = a.lanes | a.childLanes;
  if (
    (Bc(e, g),
    e === R && ((Y = R = null), (Z = 0)),
    (!(a.subtreeFlags & 2064) && !(a.flags & 2064)) ||
      wk ||
      ((wk = !0),
      Gk(hc, function () {
        return Ik(), null;
      })),
    (g = (a.flags & 15990) !== 0),
    a.subtreeFlags & 15990 || g)
  ) {
    (g = pk.transition), (pk.transition = null);
    var j = C;
    C = 1;
    var $ = K;
    (K |= 4),
      (ok.current = null),
      Pj(e, a),
      ek(a, e),
      Oe(Df),
      (dd = !!Cf),
      (Df = Cf = null),
      (e.current = a),
      ik(a),
      dc(),
      (K = $),
      (C = j),
      (pk.transition = g);
  } else e.current = a;
  if (
    (wk && ((wk = !1), (xk = e), (yk = d)),
    (g = e.pendingLanes),
    g === 0 && (Si = null),
    mc(a.stateNode),
    Ek(e, B()),
    o !== null)
  )
    for (c = e.onRecoverableError, a = 0; a < o.length; a++)
      (d = o[a]), c(d.value, { componentStack: d.stack, digest: d.digest });
  if (Pi) throw ((Pi = !1), (e = Qi), (Qi = null), e);
  return (
    yk & 1 && e.tag !== 0 && Ik(),
    (g = e.pendingLanes),
    g & 1 ? (e === Ak ? zk++ : ((zk = 0), (Ak = e))) : (zk = 0),
    jg(),
    null
  );
}
function Ik() {
  if (xk !== null) {
    var e = Dc(yk),
      o = pk.transition,
      a = C;
    try {
      if (((pk.transition = null), (C = 16 > e ? 16 : e), xk === null))
        var c = !1;
      else {
        if (((e = xk), (xk = null), (yk = 0), K & 6)) throw Error(p(331));
        var d = K;
        for (K |= 4, V = e.current; V !== null; ) {
          var g = V,
            j = g.child;
          if (V.flags & 16) {
            var $ = g.deletions;
            if ($ !== null) {
              for (var rt = 0; rt < $.length; rt++) {
                var dt = $[rt];
                for (V = dt; V !== null; ) {
                  var jt = V;
                  switch (jt.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, jt, g);
                  }
                  var bt = jt.child;
                  if (bt !== null) (bt.return = jt), (V = bt);
                  else
                    for (; V !== null; ) {
                      jt = V;
                      var vt = jt.sibling,
                        Pt = jt.return;
                      if ((Tj(jt), jt === dt)) {
                        V = null;
                        break;
                      }
                      if (vt !== null) {
                        (vt.return = Pt), (V = vt);
                        break;
                      }
                      V = Pt;
                    }
                }
              }
              var kt = g.alternate;
              if (kt !== null) {
                var gt = kt.child;
                if (gt !== null) {
                  kt.child = null;
                  do {
                    var mt = gt.sibling;
                    (gt.sibling = null), (gt = mt);
                  } while (gt !== null);
                }
              }
              V = g;
            }
          }
          if (g.subtreeFlags & 2064 && j !== null) (j.return = g), (V = j);
          else
            e: for (; V !== null; ) {
              if (((g = V), g.flags & 2048))
                switch (g.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Qj(9, g, g.return);
                }
              var it = g.sibling;
              if (it !== null) {
                (it.return = g.return), (V = it);
                break e;
              }
              V = g.return;
            }
        }
        var et = e.current;
        for (V = et; V !== null; ) {
          j = V;
          var b = j.child;
          if (j.subtreeFlags & 2064 && b !== null) (b.return = j), (V = b);
          else
            e: for (j = et; V !== null; ) {
              if ((($ = V), $.flags & 2048))
                try {
                  switch ($.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Rj(9, $);
                  }
                } catch (pt) {
                  W($, $.return, pt);
                }
              if ($ === j) {
                V = null;
                break e;
              }
              var ut = $.sibling;
              if (ut !== null) {
                (ut.return = $.return), (V = ut);
                break e;
              }
              V = $.return;
            }
        }
        if (
          ((K = d), jg(), lc && typeof lc.onPostCommitFiberRoot == 'function')
        )
          try {
            lc.onPostCommitFiberRoot(kc, e);
          } catch {}
        c = !0;
      }
      return c;
    } finally {
      (C = a), (pk.transition = o);
    }
  }
  return !1;
}
function Yk(e, o, a) {
  (o = Ki(a, o)),
    (o = Oi(e, o, 1)),
    (e = dh(e, o, 1)),
    (o = L()),
    e !== null && (Ac(e, 1, o), Ek(e, o));
}
function W(e, o, a) {
  if (e.tag === 3) Yk(e, e, a);
  else
    for (; o !== null; ) {
      if (o.tag === 3) {
        Yk(o, e, a);
        break;
      } else if (o.tag === 1) {
        var c = o.stateNode;
        if (
          typeof o.type.getDerivedStateFromError == 'function' ||
          (typeof c.componentDidCatch == 'function' &&
            (Si === null || !Si.has(c)))
        ) {
          (e = Ki(a, e)),
            (e = Ri(o, e, 1)),
            (o = dh(o, e, 1)),
            (e = L()),
            o !== null && (Ac(o, 1, e), Ek(o, e));
          break;
        }
      }
      o = o.return;
    }
}
function Ui(e, o, a) {
  var c = e.pingCache;
  c !== null && c.delete(o),
    (o = L()),
    (e.pingedLanes |= e.suspendedLanes & a),
    R === e &&
      (Z & a) === a &&
      (T === 4 || (T === 3 && (Z & 130023424) === Z && 500 > B() - gk)
        ? Lk(e, 0)
        : (sk |= a)),
    Ek(e, o);
}
function Zk(e, o) {
  o === 0 &&
    (e.mode & 1
      ? ((o = sc), (sc <<= 1), !(sc & 130023424) && (sc = 4194304))
      : (o = 1));
  var a = L();
  (e = Zg(e, o)), e !== null && (Ac(e, o, a), Ek(e, a));
}
function vj(e) {
  var o = e.memoizedState,
    a = 0;
  o !== null && (a = o.retryLane), Zk(e, a);
}
function ck(e, o) {
  var a = 0;
  switch (e.tag) {
    case 13:
      var c = e.stateNode,
        d = e.memoizedState;
      d !== null && (a = d.retryLane);
      break;
    case 19:
      c = e.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  c !== null && c.delete(o), Zk(e, a);
}
var Wk;
Wk = function (e, o, a) {
  if (e !== null)
    if (e.memoizedProps !== o.pendingProps || Wf.current) Ug = !0;
    else {
      if (!(e.lanes & a) && !(o.flags & 128)) return (Ug = !1), zj(e, o, a);
      Ug = !!(e.flags & 131072);
    }
  else (Ug = !1), I && o.flags & 1048576 && ug(o, ng, o.index);
  switch (((o.lanes = 0), o.tag)) {
    case 2:
      var c = o.type;
      jj(e, o), (e = o.pendingProps);
      var d = Yf(o, H.current);
      Tg(o, a), (d = Xh(null, o, c, e, d, a));
      var g = bi();
      return (
        (o.flags |= 1),
        typeof d == 'object' &&
        d !== null &&
        typeof d.render == 'function' &&
        d.$$typeof === void 0
          ? ((o.tag = 1),
            (o.memoizedState = null),
            (o.updateQueue = null),
            Zf(c) ? ((g = !0), cg(o)) : (g = !1),
            (o.memoizedState =
              d.state !== null && d.state !== void 0 ? d.state : null),
            ah(o),
            (d.updater = nh),
            (o.stateNode = d),
            (d._reactInternals = o),
            rh(o, c, e, a),
            (o = kj(null, o, c, !0, g, a)))
          : ((o.tag = 0), I && g && vg(o), Yi(null, o, d, a), (o = o.child)),
        o
      );
    case 16:
      c = o.elementType;
      e: {
        switch (
          (jj(e, o),
          (e = o.pendingProps),
          (d = c._init),
          (c = d(c._payload)),
          (o.type = c),
          (d = o.tag = $k(c)),
          (e = Lg(c, e)),
          d)
        ) {
          case 0:
            o = dj(null, o, c, e, a);
            break e;
          case 1:
            o = ij(null, o, c, e, a);
            break e;
          case 11:
            o = Zi(null, o, c, e, a);
            break e;
          case 14:
            o = aj(null, o, c, Lg(c.type, e), a);
            break e;
        }
        throw Error(p(306, c, ''));
      }
      return o;
    case 0:
      return (
        (c = o.type),
        (d = o.pendingProps),
        (d = o.elementType === c ? d : Lg(c, d)),
        dj(e, o, c, d, a)
      );
    case 1:
      return (
        (c = o.type),
        (d = o.pendingProps),
        (d = o.elementType === c ? d : Lg(c, d)),
        ij(e, o, c, d, a)
      );
    case 3:
      e: {
        if ((lj(o), e === null)) throw Error(p(387));
        (c = o.pendingProps),
          (g = o.memoizedState),
          (d = g.element),
          bh(e, o),
          gh(o, c, null, a);
        var j = o.memoizedState;
        if (((c = j.element), g.isDehydrated))
          if (
            ((g = {
              element: c,
              isDehydrated: !1,
              cache: j.cache,
              pendingSuspenseBoundaries: j.pendingSuspenseBoundaries,
              transitions: j.transitions,
            }),
            (o.updateQueue.baseState = g),
            (o.memoizedState = g),
            o.flags & 256)
          ) {
            (d = Ki(Error(p(423)), o)), (o = mj(e, o, c, a, d));
            break e;
          } else if (c !== d) {
            (d = Ki(Error(p(424)), o)), (o = mj(e, o, c, a, d));
            break e;
          } else
            for (
              yg = Lf(o.stateNode.containerInfo.firstChild),
                xg = o,
                I = !0,
                zg = null,
                a = Ch(o, null, c, a),
                o.child = a;
              a;

            )
              (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
        else {
          if ((Ig(), c === d)) {
            o = $i(e, o, a);
            break e;
          }
          Yi(e, o, c, a);
        }
        o = o.child;
      }
      return o;
    case 5:
      return (
        Kh(o),
        e === null && Eg(o),
        (c = o.type),
        (d = o.pendingProps),
        (g = e !== null ? e.memoizedProps : null),
        (j = d.children),
        Ef(c, d) ? (j = null) : g !== null && Ef(c, g) && (o.flags |= 32),
        hj(e, o),
        Yi(e, o, j, a),
        o.child
      );
    case 6:
      return e === null && Eg(o), null;
    case 13:
      return pj(e, o, a);
    case 4:
      return (
        Ih(o, o.stateNode.containerInfo),
        (c = o.pendingProps),
        e === null ? (o.child = Bh(o, null, c, a)) : Yi(e, o, c, a),
        o.child
      );
    case 11:
      return (
        (c = o.type),
        (d = o.pendingProps),
        (d = o.elementType === c ? d : Lg(c, d)),
        Zi(e, o, c, d, a)
      );
    case 7:
      return Yi(e, o, o.pendingProps, a), o.child;
    case 8:
      return Yi(e, o, o.pendingProps.children, a), o.child;
    case 12:
      return Yi(e, o, o.pendingProps.children, a), o.child;
    case 10:
      e: {
        if (
          ((c = o.type._context),
          (d = o.pendingProps),
          (g = o.memoizedProps),
          (j = d.value),
          G(Mg, c._currentValue),
          (c._currentValue = j),
          g !== null)
        )
          if (He(g.value, j)) {
            if (g.children === d.children && !Wf.current) {
              o = $i(e, o, a);
              break e;
            }
          } else
            for (g = o.child, g !== null && (g.return = o); g !== null; ) {
              var $ = g.dependencies;
              if ($ !== null) {
                j = g.child;
                for (var rt = $.firstContext; rt !== null; ) {
                  if (rt.context === c) {
                    if (g.tag === 1) {
                      (rt = ch(-1, a & -a)), (rt.tag = 2);
                      var dt = g.updateQueue;
                      if (dt !== null) {
                        dt = dt.shared;
                        var jt = dt.pending;
                        jt === null
                          ? (rt.next = rt)
                          : ((rt.next = jt.next), (jt.next = rt)),
                          (dt.pending = rt);
                      }
                    }
                    (g.lanes |= a),
                      (rt = g.alternate),
                      rt !== null && (rt.lanes |= a),
                      Sg(g.return, a, o),
                      ($.lanes |= a);
                    break;
                  }
                  rt = rt.next;
                }
              } else if (g.tag === 10) j = g.type === o.type ? null : g.child;
              else if (g.tag === 18) {
                if (((j = g.return), j === null)) throw Error(p(341));
                (j.lanes |= a),
                  ($ = j.alternate),
                  $ !== null && ($.lanes |= a),
                  Sg(j, a, o),
                  (j = g.sibling);
              } else j = g.child;
              if (j !== null) j.return = g;
              else
                for (j = g; j !== null; ) {
                  if (j === o) {
                    j = null;
                    break;
                  }
                  if (((g = j.sibling), g !== null)) {
                    (g.return = j.return), (j = g);
                    break;
                  }
                  j = j.return;
                }
              g = j;
            }
        Yi(e, o, d.children, a), (o = o.child);
      }
      return o;
    case 9:
      return (
        (d = o.type),
        (c = o.pendingProps.children),
        Tg(o, a),
        (d = Vg(d)),
        (c = c(d)),
        (o.flags |= 1),
        Yi(e, o, c, a),
        o.child
      );
    case 14:
      return (
        (c = o.type),
        (d = Lg(c, o.pendingProps)),
        (d = Lg(c.type, d)),
        aj(e, o, c, d, a)
      );
    case 15:
      return cj(e, o, o.type, o.pendingProps, a);
    case 17:
      return (
        (c = o.type),
        (d = o.pendingProps),
        (d = o.elementType === c ? d : Lg(c, d)),
        jj(e, o),
        (o.tag = 1),
        Zf(c) ? ((e = !0), cg(o)) : (e = !1),
        Tg(o, a),
        ph(o, c, d),
        rh(o, c, d, a),
        kj(null, o, c, !0, e, a)
      );
    case 19:
      return yj(e, o, a);
    case 22:
      return ej(e, o, a);
  }
  throw Error(p(156, o.tag));
};
function Gk(e, o) {
  return ac(e, o);
}
function al(e, o, a, c) {
  (this.tag = e),
    (this.key = a),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = o),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = c),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Bg(e, o, a, c) {
  return new al(e, o, a, c);
}
function bj(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function $k(e) {
  if (typeof e == 'function') return bj(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Da)) return 11;
    if (e === Ga) return 14;
  }
  return 2;
}
function wh(e, o) {
  var a = e.alternate;
  return (
    a === null
      ? ((a = Bg(e.tag, o, e.key, e.mode)),
        (a.elementType = e.elementType),
        (a.type = e.type),
        (a.stateNode = e.stateNode),
        (a.alternate = e),
        (e.alternate = a))
      : ((a.pendingProps = o),
        (a.type = e.type),
        (a.flags = 0),
        (a.subtreeFlags = 0),
        (a.deletions = null)),
    (a.flags = e.flags & 14680064),
    (a.childLanes = e.childLanes),
    (a.lanes = e.lanes),
    (a.child = e.child),
    (a.memoizedProps = e.memoizedProps),
    (a.memoizedState = e.memoizedState),
    (a.updateQueue = e.updateQueue),
    (o = e.dependencies),
    (a.dependencies =
      o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }),
    (a.sibling = e.sibling),
    (a.index = e.index),
    (a.ref = e.ref),
    a
  );
}
function yh(e, o, a, c, d, g) {
  var j = 2;
  if (((c = e), typeof e == 'function')) bj(e) && (j = 1);
  else if (typeof e == 'string') j = 5;
  else
    e: switch (e) {
      case ya:
        return Ah(a.children, d, g, o);
      case za:
        (j = 8), (d |= 8);
        break;
      case Aa:
        return (
          (e = Bg(12, a, o, d | 2)), (e.elementType = Aa), (e.lanes = g), e
        );
      case Ea:
        return (e = Bg(13, a, o, d)), (e.elementType = Ea), (e.lanes = g), e;
      case Fa:
        return (e = Bg(19, a, o, d)), (e.elementType = Fa), (e.lanes = g), e;
      case Ia:
        return qj(a, d, g, o);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Ba:
              j = 10;
              break e;
            case Ca:
              j = 9;
              break e;
            case Da:
              j = 11;
              break e;
            case Ga:
              j = 14;
              break e;
            case Ha:
              (j = 16), (c = null);
              break e;
          }
        throw Error(p(130, e == null ? e : typeof e, ''));
    }
  return (
    (o = Bg(j, a, o, d)), (o.elementType = e), (o.type = c), (o.lanes = g), o
  );
}
function Ah(e, o, a, c) {
  return (e = Bg(7, e, c, o)), (e.lanes = a), e;
}
function qj(e, o, a, c) {
  return (
    (e = Bg(22, e, c, o)),
    (e.elementType = Ia),
    (e.lanes = a),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function xh(e, o, a) {
  return (e = Bg(6, e, null, o)), (e.lanes = a), e;
}
function zh(e, o, a) {
  return (
    (o = Bg(4, e.children !== null ? e.children : [], e.key, o)),
    (o.lanes = a),
    (o.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    o
  );
}
function bl(e, o, a, c, d) {
  (this.tag = o),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zc(0)),
    (this.expirationTimes = zc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zc(0)),
    (this.identifierPrefix = c),
    (this.onRecoverableError = d),
    (this.mutableSourceEagerHydrationData = null);
}
function cl(e, o, a, c, d, g, j, $, rt) {
  return (
    (e = new bl(e, o, a, $, rt)),
    o === 1 ? ((o = 1), g === !0 && (o |= 8)) : (o = 0),
    (g = Bg(3, null, null, o)),
    (e.current = g),
    (g.stateNode = e),
    (g.memoizedState = {
      element: c,
      isDehydrated: a,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ah(g),
    e
  );
}
function dl(e, o, a) {
  var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: wa,
    key: c == null ? null : '' + c,
    children: e,
    containerInfo: o,
    implementation: a,
  };
}
function el(e) {
  if (!e) return Vf;
  e = e._reactInternals;
  e: {
    if (Vb(e) !== e || e.tag !== 1) throw Error(p(170));
    var o = e;
    do {
      switch (o.tag) {
        case 3:
          o = o.stateNode.context;
          break e;
        case 1:
          if (Zf(o.type)) {
            o = o.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      o = o.return;
    } while (o !== null);
    throw Error(p(171));
  }
  if (e.tag === 1) {
    var a = e.type;
    if (Zf(a)) return bg(e, a, o);
  }
  return o;
}
function fl(e, o, a, c, d, g, j, $, rt) {
  return (
    (e = cl(a, c, !0, e, d, g, j, $, rt)),
    (e.context = el(null)),
    (a = e.current),
    (c = L()),
    (d = lh(a)),
    (g = ch(c, d)),
    (g.callback = o ?? null),
    dh(a, g, d),
    (e.current.lanes = d),
    Ac(e, d, c),
    Ek(e, c),
    e
  );
}
function gl(e, o, a, c) {
  var d = o.current,
    g = L(),
    j = lh(d);
  return (
    (a = el(a)),
    o.context === null ? (o.context = a) : (o.pendingContext = a),
    (o = ch(g, j)),
    (o.payload = { element: e }),
    (c = c === void 0 ? null : c),
    c !== null && (o.callback = c),
    (e = dh(d, o, j)),
    e !== null && (mh(e, d, j, g), eh(e, d, j)),
    j
  );
}
function hl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function il(e, o) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var a = e.retryLane;
    e.retryLane = a !== 0 && a < o ? a : o;
  }
}
function jl(e, o) {
  il(e, o), (e = e.alternate) && il(e, o);
}
function kl() {
  return null;
}
var ll =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ml(e) {
  this._internalRoot = e;
}
nl.prototype.render = ml.prototype.render = function (e) {
  var o = this._internalRoot;
  if (o === null) throw Error(p(409));
  gl(e, o, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var o = e.containerInfo;
    Sk(function () {
      gl(null, e, null, null);
    }),
      (o[uf] = null);
  }
};
function nl(e) {
  this._internalRoot = e;
}
nl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var o = Hc();
    e = { blockedOn: null, target: e, priority: o };
    for (var a = 0; a < Qc.length && o !== 0 && o < Qc[a].priority; a++);
    Qc.splice(a, 0, e), a === 0 && Vc(e);
  }
};
function ol(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function pl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function ql() {}
function rl(e, o, a, c, d) {
  if (d) {
    if (typeof c == 'function') {
      var g = c;
      c = function () {
        var dt = hl(j);
        g.call(dt);
      };
    }
    var j = fl(o, c, e, 0, null, !1, !1, '', ql);
    return (
      (e._reactRootContainer = j),
      (e[uf] = j.current),
      sf(e.nodeType === 8 ? e.parentNode : e),
      Sk(),
      j
    );
  }
  for (; (d = e.lastChild); ) e.removeChild(d);
  if (typeof c == 'function') {
    var $ = c;
    c = function () {
      var dt = hl(rt);
      $.call(dt);
    };
  }
  var rt = cl(e, 0, !1, null, null, !1, !1, '', ql);
  return (
    (e._reactRootContainer = rt),
    (e[uf] = rt.current),
    sf(e.nodeType === 8 ? e.parentNode : e),
    Sk(function () {
      gl(o, rt, a, c);
    }),
    rt
  );
}
function sl(e, o, a, c, d) {
  var g = a._reactRootContainer;
  if (g) {
    var j = g;
    if (typeof d == 'function') {
      var $ = d;
      d = function () {
        var rt = hl(j);
        $.call(rt);
      };
    }
    gl(o, j, e, d);
  } else j = rl(a, o, e, d, c);
  return hl(j);
}
Ec = function (e) {
  switch (e.tag) {
    case 3:
      var o = e.stateNode;
      if (o.current.memoizedState.isDehydrated) {
        var a = tc(o.pendingLanes);
        a !== 0 &&
          (Cc(o, a | 1), Ek(o, B()), !(K & 6) && ((Hj = B() + 500), jg()));
      }
      break;
    case 13:
      Sk(function () {
        var c = Zg(e, 1);
        if (c !== null) {
          var d = L();
          mh(c, e, 1, d);
        }
      }),
        jl(e, 1);
  }
};
Fc = function (e) {
  if (e.tag === 13) {
    var o = Zg(e, 134217728);
    if (o !== null) {
      var a = L();
      mh(o, e, 134217728, a);
    }
    jl(e, 134217728);
  }
};
Gc = function (e) {
  if (e.tag === 13) {
    var o = lh(e),
      a = Zg(e, o);
    if (a !== null) {
      var c = L();
      mh(a, e, o, c);
    }
    jl(e, o);
  }
};
Hc = function () {
  return C;
};
Ic = function (e, o) {
  var a = C;
  try {
    return (C = e), o();
  } finally {
    C = a;
  }
};
yb = function (e, o, a) {
  switch (o) {
    case 'input':
      if ((bb(e, a), (o = a.name), a.type === 'radio' && o != null)) {
        for (a = e; a.parentNode; ) a = a.parentNode;
        for (
          a = a.querySelectorAll(
            'input[name=' + JSON.stringify('' + o) + '][type="radio"]'
          ),
            o = 0;
          o < a.length;
          o++
        ) {
          var c = a[o];
          if (c !== e && c.form === e.form) {
            var d = Db(c);
            if (!d) throw Error(p(90));
            Wa(c), bb(c, d);
          }
        }
      }
      break;
    case 'textarea':
      ib(e, a);
      break;
    case 'select':
      (o = a.value), o != null && fb(e, !!a.multiple, o, !1);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: !1, Events: [Cb, ue, Db, Eb, Fb, Rk] },
  ul = {
    findFiberByHostInstance: Wc,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  vl = {
    bundleType: ul.bundleType,
    version: ul.version,
    rendererPackageName: ul.rendererPackageName,
    rendererConfig: ul.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ua.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Zb(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ul.findFiberByHostInstance || kl,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      (kc = wl.inject(vl)), (lc = wl);
    } catch {}
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function (e, o) {
  var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ol(o)) throw Error(p(200));
  return dl(e, o, null, a);
};
reactDom_production_min.createRoot = function (e, o) {
  if (!ol(e)) throw Error(p(299));
  var a = !1,
    c = '',
    d = ll;
  return (
    o != null &&
      (o.unstable_strictMode === !0 && (a = !0),
      o.identifierPrefix !== void 0 && (c = o.identifierPrefix),
      o.onRecoverableError !== void 0 && (d = o.onRecoverableError)),
    (o = cl(e, 1, !1, null, null, a, !1, c, d)),
    (e[uf] = o.current),
    sf(e.nodeType === 8 ? e.parentNode : e),
    new ml(o)
  );
};
reactDom_production_min.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var o = e._reactInternals;
  if (o === void 0)
    throw typeof e.render == 'function'
      ? Error(p(188))
      : ((e = Object.keys(e).join(',')), Error(p(268, e)));
  return (e = Zb(o)), (e = e === null ? null : e.stateNode), e;
};
reactDom_production_min.flushSync = function (e) {
  return Sk(e);
};
reactDom_production_min.hydrate = function (e, o, a) {
  if (!pl(o)) throw Error(p(200));
  return sl(null, e, o, !0, a);
};
reactDom_production_min.hydrateRoot = function (e, o, a) {
  if (!ol(e)) throw Error(p(405));
  var c = (a != null && a.hydratedSources) || null,
    d = !1,
    g = '',
    j = ll;
  if (
    (a != null &&
      (a.unstable_strictMode === !0 && (d = !0),
      a.identifierPrefix !== void 0 && (g = a.identifierPrefix),
      a.onRecoverableError !== void 0 && (j = a.onRecoverableError)),
    (o = fl(o, null, e, 1, a ?? null, d, !1, g, j)),
    (e[uf] = o.current),
    sf(e),
    c)
  )
    for (e = 0; e < c.length; e++)
      (a = c[e]),
        (d = a._getVersion),
        (d = d(a._source)),
        o.mutableSourceEagerHydrationData == null
          ? (o.mutableSourceEagerHydrationData = [a, d])
          : o.mutableSourceEagerHydrationData.push(a, d);
  return new nl(o);
};
reactDom_production_min.render = function (e, o, a) {
  if (!pl(o)) throw Error(p(200));
  return sl(null, e, o, !1, a);
};
reactDom_production_min.unmountComponentAtNode = function (e) {
  if (!pl(e)) throw Error(p(40));
  return e._reactRootContainer
    ? (Sk(function () {
        sl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[uf] = null);
        });
      }),
      !0)
    : !1;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function (
  e,
  o,
  a,
  c
) {
  if (!pl(a)) throw Error(p(200));
  if (e == null || e._reactInternals === void 0) throw Error(p(38));
  return sl(e, o, a, !1, c);
};
reactDom_production_min.version = '18.2.0-next-9e3b772b8-20220608';
function checkDCE() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (e) {
      console.error(e);
    }
}
checkDCE(), (reactDom.exports = reactDom_production_min);
var reactDomExports = reactDom.exports,
  m = reactDomExports;
(client.createRoot = m.createRoot), (client.hydrateRoot = m.hydrateRoot);
var bundle$1 = { exports: {} };
(function (e, o) {
  (function (a, c) {
    e.exports = c(reactExports);
  })(commonjsGlobal, (a) =>
    (() => {
      var c = {
          853: ($, rt, dt) => {
            function jt(kt, gt) {
              return (
                (function (mt) {
                  if (Array.isArray(mt)) return mt;
                })(kt) ||
                (function (mt, it) {
                  var et =
                    mt == null
                      ? null
                      : (typeof Symbol < 'u' && mt[Symbol.iterator]) ||
                        mt['@@iterator'];
                  if (et != null) {
                    var b,
                      ut,
                      pt,
                      st,
                      ct = [],
                      nt = !0,
                      at = !1;
                    try {
                      if (((pt = (et = et.call(mt)).next), it === 0)) {
                        if (Object(et) !== et) return;
                        nt = !1;
                      } else
                        for (
                          ;
                          !(nt = (b = pt.call(et)).done) &&
                          (ct.push(b.value), ct.length !== it);
                          nt = !0
                        );
                    } catch (lt) {
                      (at = !0), (ut = lt);
                    } finally {
                      try {
                        if (
                          !nt &&
                          et.return != null &&
                          ((st = et.return()), Object(st) !== st)
                        )
                          return;
                      } finally {
                        if (at) throw ut;
                      }
                    }
                    return ct;
                  }
                })(kt, gt) ||
                (function (mt, it) {
                  if (mt) {
                    if (typeof mt == 'string') return bt(mt, it);
                    var et = Object.prototype.toString.call(mt).slice(8, -1);
                    return (
                      et === 'Object' &&
                        mt.constructor &&
                        (et = mt.constructor.name),
                      et === 'Map' || et === 'Set'
                        ? Array.from(mt)
                        : et === 'Arguments' ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(et)
                        ? bt(mt, it)
                        : void 0
                    );
                  }
                })(kt, gt) ||
                (function () {
                  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function bt(kt, gt) {
              (gt == null || gt > kt.length) && (gt = kt.length);
              for (var mt = 0, it = new Array(gt); mt < gt; mt++)
                it[mt] = kt[mt];
              return it;
            }
            var vt = function (kt, gt) {
              var mt = {};
              for (var it in kt)
                Object.prototype.hasOwnProperty.call(kt, it) &&
                  gt.indexOf(it) < 0 &&
                  (mt[it] = kt[it]);
              if (
                kt != null &&
                typeof Object.getOwnPropertySymbols == 'function'
              ) {
                var et = 0;
                for (
                  it = Object.getOwnPropertySymbols(kt);
                  et < it.length;
                  et++
                )
                  gt.indexOf(it[et]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(kt, it[et]) &&
                    (mt[it[et]] = kt[it[et]]);
              }
              return mt;
            };
            Object.defineProperty(rt, '__esModule', { value: !0 }),
              (rt.createCustomGlobalStateWithDecoupledFuncs =
                rt.createGlobalState =
                rt.createGlobalStateWithDecoupledFuncs =
                  void 0);
            var Pt = dt(774);
            (rt.createGlobalStateWithDecoupledFuncs = function (kt) {
              var gt =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {},
                mt = gt.actions,
                it = vt(gt, ['actions']),
                et = new Pt.GlobalStore(kt, it, mt),
                b = jt(et.getHookDecoupled(), 2),
                ut = b[0],
                pt = b[1];
              return [et.getHook(), ut, pt];
            }),
              (rt.createGlobalState = function (kt) {
                var gt =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : {};
                return jt(
                  (0, rt.createGlobalStateWithDecoupledFuncs)(kt, gt),
                  1
                )[0];
              }),
              (rt.createCustomGlobalStateWithDecoupledFuncs = function (kt) {
                var gt = kt.onInitialize,
                  mt = kt.onChange;
                return function (it) {
                  var et =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : { config: null },
                    b = et.config,
                    ut = et.onInit,
                    pt = et.onStateChanged,
                    st = vt(et, ['config', 'onInit', 'onStateChanged']);
                  return (0, rt.createGlobalStateWithDecoupledFuncs)(
                    it,
                    Object.assign(
                      {
                        onInit: function (ct) {
                          gt(ct, b), ut == null || ut(ct);
                        },
                        onStateChanged: function (ct) {
                          mt(ct, b), pt == null || pt(ct);
                        },
                      },
                      st
                    )
                  );
                };
              });
          },
          774: ($, rt, dt) => {
            function jt(mt) {
              return (
                (jt =
                  typeof Symbol == 'function' &&
                  typeof Symbol.iterator == 'symbol'
                    ? function (it) {
                        return typeof it;
                      }
                    : function (it) {
                        return it &&
                          typeof Symbol == 'function' &&
                          it.constructor === Symbol &&
                          it !== Symbol.prototype
                          ? 'symbol'
                          : typeof it;
                      }),
                jt(mt)
              );
            }
            function bt(mt, it) {
              return (
                (bt = Object.setPrototypeOf
                  ? Object.setPrototypeOf.bind()
                  : function (et, b) {
                      return (et.__proto__ = b), et;
                    }),
                bt(mt, it)
              );
            }
            function vt(mt, it) {
              if (it && (jt(it) === 'object' || typeof it == 'function'))
                return it;
              if (it !== void 0)
                throw new TypeError(
                  'Derived constructors may only return object or undefined'
                );
              return (function (et) {
                if (et === void 0)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return et;
              })(mt);
            }
            function Pt(mt) {
              return (
                (Pt = Object.setPrototypeOf
                  ? Object.getPrototypeOf.bind()
                  : function (it) {
                      return it.__proto__ || Object.getPrototypeOf(it);
                    }),
                Pt(mt)
              );
            }
            Object.defineProperty(rt, '__esModule', { value: !0 }),
              (rt.GlobalStore = void 0);
            var kt = dt(608),
              gt = (function (mt) {
                (function (st, ct) {
                  if (typeof ct != 'function' && ct !== null)
                    throw new TypeError(
                      'Super expression must either be null or a function'
                    );
                  (st.prototype = Object.create(ct && ct.prototype, {
                    constructor: { value: st, writable: !0, configurable: !0 },
                  })),
                    Object.defineProperty(st, 'prototype', { writable: !1 }),
                    ct && bt(st, ct);
                })(pt, mt);
                var it,
                  et,
                  b,
                  ut =
                    ((et = pt),
                    (b = (function () {
                      if (
                        typeof Reflect > 'u' ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if (typeof Proxy == 'function') return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {})
                          ),
                          !0
                        );
                      } catch {
                        return !1;
                      }
                    })()),
                    function () {
                      var st,
                        ct = Pt(et);
                      if (b) {
                        var nt = Pt(this).constructor;
                        st = Reflect.construct(ct, arguments, nt);
                      } else st = ct.apply(this, arguments);
                      return vt(this, st);
                    });
                function pt(st) {
                  var ct,
                    nt =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : {},
                    at =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : null;
                  return (
                    (function (lt, Et) {
                      if (!(lt instanceof Et))
                        throw new TypeError(
                          'Cannot call a class as a function'
                        );
                    })(this, pt),
                    ((ct = ut.call(this, st, nt, at)).onInitialize = function (
                      lt
                    ) {
                      var Et,
                        Rt,
                        yt = lt.setState,
                        Vt = lt.getState;
                      if (
                        !(
                          (Rt =
                            (Et = ct.config) === null || Et === void 0
                              ? void 0
                              : Et.localStorage) === null || Rt === void 0
                        ) &&
                        Rt.key
                      ) {
                        var Kt = (0, kt.getLocalStorageItem)({
                          config: ct.config,
                        });
                        if (Kt !== null) yt(Kt);
                        else {
                          var Wt = Vt();
                          (0, kt.setLocalStorageItem)({
                            item: Wt,
                            config: ct.config,
                          });
                        }
                      }
                    }),
                    (ct.onChange = function (lt) {
                      var Et = lt.getState;
                      (0, kt.setLocalStorageItem)({
                        item: Et(),
                        config: ct.config,
                      });
                    }),
                    ct.constructor !== pt ? vt(ct) : (ct.initialize(), ct)
                  );
                }
                return (
                  (it = pt),
                  Object.defineProperty(it, 'prototype', { writable: !1 }),
                  it
                );
              })(dt(734).GlobalStoreAbstract);
            rt.GlobalStore = gt;
          },
          608: ($, rt, dt) => {
            Object.defineProperty(rt, '__esModule', { value: !0 }),
              (rt.setLocalStorageItem = rt.getLocalStorageItem = void 0);
            var jt = dt(734);
            (rt.getLocalStorageItem = function (bt) {
              var vt,
                Pt = bt.config,
                kt =
                  (vt = Pt == null ? void 0 : Pt.localStorage) === null ||
                  vt === void 0
                    ? void 0
                    : vt.key;
              if (!kt) return null;
              var gt = localStorage.getItem(kt);
              if (gt === null) return null;
              var mt = (function () {
                var it,
                  et =
                    (it = Pt == null ? void 0 : Pt.localStorage) !== null &&
                    it !== void 0
                      ? it
                      : {},
                  b = et.decrypt,
                  ut = et.encrypt;
                return b || ut
                  ? typeof b == 'function'
                    ? b(gt)
                    : atob(gt)
                  : gt;
              })();
              return (0, jt.formatFromStore)(mt, { jsonParse: !0 });
            }),
              (rt.setLocalStorageItem = function (bt) {
                var vt,
                  Pt = bt.item,
                  kt = bt.config,
                  gt =
                    (vt = kt == null ? void 0 : kt.localStorage) === null ||
                    vt === void 0
                      ? void 0
                      : vt.key;
                if (!gt) return null;
                var mt = (0, jt.formatToStore)(Pt, {
                    stringify: !0,
                    excludeTypes: ['function'],
                  }),
                  it = (function () {
                    var et,
                      b = (
                        (et = kt == null ? void 0 : kt.localStorage) !== null &&
                        et !== void 0
                          ? et
                          : {}
                      ).encrypt;
                    return b ? (typeof b == 'function' ? b(mt) : btoa(mt)) : mt;
                  })();
                localStorage.setItem(gt, it);
              });
          },
          195: ($, rt, dt) => {
            function jt(kt) {
              return (
                (jt =
                  typeof Symbol == 'function' &&
                  typeof Symbol.iterator == 'symbol'
                    ? function (gt) {
                        return typeof gt;
                      }
                    : function (gt) {
                        return gt &&
                          typeof Symbol == 'function' &&
                          gt.constructor === Symbol &&
                          gt !== Symbol.prototype
                          ? 'symbol'
                          : typeof gt;
                      }),
                jt(kt)
              );
            }
            function bt(kt, gt) {
              return (
                (bt = Object.setPrototypeOf
                  ? Object.setPrototypeOf.bind()
                  : function (mt, it) {
                      return (mt.__proto__ = it), mt;
                    }),
                bt(kt, gt)
              );
            }
            function vt(kt) {
              return (
                (vt = Object.setPrototypeOf
                  ? Object.getPrototypeOf.bind()
                  : function (gt) {
                      return gt.__proto__ || Object.getPrototypeOf(gt);
                    }),
                vt(kt)
              );
            }
            Object.defineProperty(rt, '__esModule', { value: !0 }),
              (rt.GlobalStoreAbstract = void 0);
            var Pt = (function (kt) {
              (function (ut, pt) {
                if (typeof pt != 'function' && pt !== null)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  );
                (ut.prototype = Object.create(pt && pt.prototype, {
                  constructor: { value: ut, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(ut, 'prototype', { writable: !1 }),
                  pt && bt(ut, pt);
              })(b, kt);
              var gt,
                mt,
                it,
                et =
                  ((mt = b),
                  (it = (function () {
                    if (
                      typeof Reflect > 'u' ||
                      !Reflect.construct ||
                      Reflect.construct.sham
                    )
                      return !1;
                    if (typeof Proxy == 'function') return !0;
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                      );
                    } catch {
                      return !1;
                    }
                  })()),
                  function () {
                    var ut,
                      pt = vt(mt);
                    if (it) {
                      var st = vt(this).constructor;
                      ut = Reflect.construct(pt, arguments, st);
                    } else ut = pt.apply(this, arguments);
                    return (function (ct, nt) {
                      if (
                        nt &&
                        (jt(nt) === 'object' || typeof nt == 'function')
                      )
                        return nt;
                      if (nt !== void 0)
                        throw new TypeError(
                          'Derived constructors may only return object or undefined'
                        );
                      return (function (at) {
                        if (at === void 0)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return at;
                      })(ct);
                    })(this, ut);
                  });
              function b(ut) {
                var pt,
                  st =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : {},
                  ct =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : null;
                return (
                  (function (nt, at) {
                    if (!(nt instanceof at))
                      throw new TypeError('Cannot call a class as a function');
                  })(this, b),
                  ((pt = et.call(this, ut, st, ct)).onInit = function (nt) {
                    pt.onInitialize(nt);
                  }),
                  (pt.onStateChanged = function (nt) {
                    pt.onChange(nt);
                  }),
                  pt
                );
              }
              return (
                (gt = b),
                Object.defineProperty(gt, 'prototype', { writable: !1 }),
                gt
              );
            })(dt(774).GlobalStore);
            rt.GlobalStoreAbstract = Pt;
          },
          734: function ($, rt, dt) {
            var jt;
            (jt = (bt) =>
              (() => {
                var vt = {
                    852: (gt, mt, it) => {
                      function et(nt, at) {
                        return (
                          (function (lt) {
                            if (Array.isArray(lt)) return lt;
                          })(nt) ||
                          (function (lt, Et) {
                            var Rt =
                              lt == null
                                ? null
                                : (typeof Symbol < 'u' &&
                                    lt[Symbol.iterator]) ||
                                  lt['@@iterator'];
                            if (Rt != null) {
                              var yt,
                                Vt,
                                Kt,
                                Wt,
                                At = [],
                                wt = !0,
                                Ct = !1;
                              try {
                                if (
                                  ((Kt = (Rt = Rt.call(lt)).next), Et === 0)
                                ) {
                                  if (Object(Rt) !== Rt) return;
                                  wt = !1;
                                } else
                                  for (
                                    ;
                                    !(wt = (yt = Kt.call(Rt)).done) &&
                                    (At.push(yt.value), At.length !== Et);
                                    wt = !0
                                  );
                              } catch (St) {
                                (Ct = !0), (Vt = St);
                              } finally {
                                try {
                                  if (
                                    !wt &&
                                    Rt.return != null &&
                                    ((Wt = Rt.return()), Object(Wt) !== Wt)
                                  )
                                    return;
                                } finally {
                                  if (Ct) throw Vt;
                                }
                              }
                              return At;
                            }
                          })(nt, at) ||
                          (function (lt, Et) {
                            if (lt) {
                              if (typeof lt == 'string') return b(lt, Et);
                              var Rt = Object.prototype.toString
                                .call(lt)
                                .slice(8, -1);
                              return (
                                Rt === 'Object' &&
                                  lt.constructor &&
                                  (Rt = lt.constructor.name),
                                Rt === 'Map' || Rt === 'Set'
                                  ? Array.from(lt)
                                  : Rt === 'Arguments' ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      Rt
                                    )
                                  ? b(lt, Et)
                                  : void 0
                              );
                            }
                          })(nt, at) ||
                          (function () {
                            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                          })()
                        );
                      }
                      function b(nt, at) {
                        (at == null || at > nt.length) && (at = nt.length);
                        for (var lt = 0, Et = new Array(at); lt < at; lt++)
                          Et[lt] = nt[lt];
                        return Et;
                      }
                      Object.defineProperty(mt, '__esModule', { value: !0 }),
                        (mt.combineAsyncGetters =
                          mt.combineAsyncGettersEmitter =
                            void 0);
                      var ut = it(608),
                        pt = it(486),
                        st = it(156),
                        ct = it(774);
                      (mt.combineAsyncGettersEmitter = function (nt) {
                        for (
                          var at,
                            lt,
                            Et,
                            Rt = arguments.length,
                            yt = new Array(Rt > 1 ? Rt - 1 : 0),
                            Vt = 1;
                          Vt < Rt;
                          Vt++
                        )
                          yt[Vt - 1] = arguments[Vt];
                        var Kt = yt,
                          Wt = new Map(
                            Kt.map(function (Bt, Ft) {
                              return [Ft, Bt()];
                            })
                          ),
                          At = nt.selector(Array.from(Wt.values())),
                          wt =
                            ((at = nt == null ? void 0 : nt.config) === null ||
                            at === void 0
                              ? void 0
                              : at.isEqual) !== void 0
                              ? (lt = nt == null ? void 0 : nt.config) ===
                                  null || lt === void 0
                                ? void 0
                                : lt.isEqual
                              : ut.shallowCompare,
                          Ct = new Set(),
                          St = (0, pt.debounce)(
                            function () {
                              var Bt = nt.selector(Array.from(Wt.values()));
                              (wt != null && wt(At, Bt)) ||
                                ((At = Bt),
                                Ct.forEach(function (Ft) {
                                  return Ft();
                                }));
                            },
                            (Et = nt == null ? void 0 : nt.config) === null ||
                              Et === void 0
                              ? void 0
                              : Et.delay
                          ),
                          Mt = Kt.map(function (Bt, Ft) {
                            return Bt(function (Qt) {
                              Qt(function (Yt) {
                                Wt.set(Ft, Yt), St();
                              });
                            });
                          }),
                          Ut = function (Bt, Ft, Qt) {
                            var Yt,
                              sr,
                              mr = typeof Ft == 'function',
                              vr = mr ? Bt : null,
                              _r = mr ? Ft : Bt,
                              kr = mr ? Qt : Ft,
                              Lr = Object.assign(
                                { delay: 0, isEqual: ut.shallowCompare },
                                kr ?? {}
                              ),
                              Fr =
                                (Yt = vr == null ? void 0 : vr(At)) !== null &&
                                Yt !== void 0
                                  ? Yt
                                  : At;
                            Lr.skipFirst || _r(Fr);
                            var on = (0, pt.debounce)(
                              function () {
                                var hn,
                                  _n,
                                  Dt =
                                    (hn = vr == null ? void 0 : vr(At)) !==
                                      null && hn !== void 0
                                      ? hn
                                      : At;
                                (!(
                                  (_n = Lr.isEqual) === null || _n === void 0
                                ) &&
                                  _n.call(Lr, Fr, Dt)) ||
                                  ((Fr = Dt), _r(Dt));
                              },
                              (sr = Lr.delay) !== null && sr !== void 0 ? sr : 0
                            );
                            return (
                              Ct.add(on),
                              function () {
                                Ct.delete(on);
                              }
                            );
                          };
                        return [
                          Ut,
                          function (Bt) {
                            if (!Bt) return At;
                            var Ft = [];
                            return (
                              Bt(function () {
                                Ft.push(Ut.apply(void 0, arguments));
                              }),
                              Ft.length ||
                                (0, ct.throwNoSubscribersWereAdded)(),
                              function () {
                                Ft.forEach(function (Qt) {
                                  Qt(), Ct.delete(Qt);
                                });
                              }
                            );
                          },
                          function () {
                            Mt.forEach(function (Bt) {
                              return Bt();
                            });
                          },
                        ];
                      }),
                        (mt.combineAsyncGetters = function (nt) {
                          for (
                            var at = arguments.length,
                              lt = new Array(at > 1 ? at - 1 : 0),
                              Et = 1;
                            Et < at;
                            Et++
                          )
                            lt[Et - 1] = arguments[Et];
                          var Rt = et(
                              mt.combineAsyncGettersEmitter.apply(
                                void 0,
                                [nt].concat(lt)
                              ),
                              3
                            ),
                            yt = Rt[0],
                            Vt = Rt[1],
                            Kt = Rt[2];
                          return [
                            function (Wt, At) {
                              var wt = et(
                                  (0, st.useState)(function () {
                                    var Mt = Vt();
                                    return Wt ? Wt(Mt) : Mt;
                                  }),
                                  2
                                ),
                                Ct = wt[0],
                                St = wt[1];
                              return (
                                (0, st.useEffect)(function () {
                                  var Mt,
                                    Ut = Object.assign(
                                      { delay: 0, isEqual: ut.shallowCompare },
                                      At ?? {}
                                    ),
                                    Bt =
                                      Ut.isEqual !== void 0
                                        ? Ut.isEqual
                                        : ut.shallowCompare,
                                    Ft = yt(
                                      function (Qt) {
                                        return Wt ? Wt(Qt) : Qt;
                                      },
                                      (0, pt.debounce)(
                                        function (Qt) {
                                          var Yt = Wt ? Wt(Qt) : Qt;
                                          (Bt != null && Bt(Qt, Yt)) || St(Yt);
                                        },
                                        (Mt = Ut.delay) !== null &&
                                          Mt !== void 0
                                          ? Mt
                                          : 0
                                      )
                                    );
                                  return function () {
                                    Ft();
                                  };
                                }, []),
                                [Ct, null, null]
                              );
                            },
                            Vt,
                            Kt,
                          ];
                        });
                    },
                    853: (gt, mt, it) => {
                      function et(st, ct) {
                        return (
                          (function (nt) {
                            if (Array.isArray(nt)) return nt;
                          })(st) ||
                          (function (nt, at) {
                            var lt =
                              nt == null
                                ? null
                                : (typeof Symbol < 'u' &&
                                    nt[Symbol.iterator]) ||
                                  nt['@@iterator'];
                            if (lt != null) {
                              var Et,
                                Rt,
                                yt,
                                Vt,
                                Kt = [],
                                Wt = !0,
                                At = !1;
                              try {
                                if (
                                  ((yt = (lt = lt.call(nt)).next), at === 0)
                                ) {
                                  if (Object(lt) !== lt) return;
                                  Wt = !1;
                                } else
                                  for (
                                    ;
                                    !(Wt = (Et = yt.call(lt)).done) &&
                                    (Kt.push(Et.value), Kt.length !== at);
                                    Wt = !0
                                  );
                              } catch (wt) {
                                (At = !0), (Rt = wt);
                              } finally {
                                try {
                                  if (
                                    !Wt &&
                                    lt.return != null &&
                                    ((Vt = lt.return()), Object(Vt) !== Vt)
                                  )
                                    return;
                                } finally {
                                  if (At) throw Rt;
                                }
                              }
                              return Kt;
                            }
                          })(st, ct) ||
                          (function (nt, at) {
                            if (nt) {
                              if (typeof nt == 'string') return b(nt, at);
                              var lt = Object.prototype.toString
                                .call(nt)
                                .slice(8, -1);
                              return (
                                lt === 'Object' &&
                                  nt.constructor &&
                                  (lt = nt.constructor.name),
                                lt === 'Map' || lt === 'Set'
                                  ? Array.from(nt)
                                  : lt === 'Arguments' ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      lt
                                    )
                                  ? b(nt, at)
                                  : void 0
                              );
                            }
                          })(st, ct) ||
                          (function () {
                            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                          })()
                        );
                      }
                      function b(st, ct) {
                        (ct == null || ct > st.length) && (ct = st.length);
                        for (var nt = 0, at = new Array(ct); nt < ct; nt++)
                          at[nt] = st[nt];
                        return at;
                      }
                      var ut = function (st, ct) {
                        var nt = {};
                        for (var at in st)
                          Object.prototype.hasOwnProperty.call(st, at) &&
                            ct.indexOf(at) < 0 &&
                            (nt[at] = st[at]);
                        if (
                          st != null &&
                          typeof Object.getOwnPropertySymbols == 'function'
                        ) {
                          var lt = 0;
                          for (
                            at = Object.getOwnPropertySymbols(st);
                            lt < at.length;
                            lt++
                          )
                            ct.indexOf(at[lt]) < 0 &&
                              Object.prototype.propertyIsEnumerable.call(
                                st,
                                at[lt]
                              ) &&
                              (nt[at[lt]] = st[at[lt]]);
                        }
                        return nt;
                      };
                      Object.defineProperty(mt, '__esModule', { value: !0 }),
                        (mt.createDerivateEmitter =
                          mt.createDerivate =
                          mt.createCustomGlobalStateWithDecoupledFuncs =
                          mt.createGlobalState =
                          mt.createGlobalStateWithDecoupledFuncs =
                            void 0);
                      var pt = it(774);
                      (mt.createGlobalStateWithDecoupledFuncs = function (st) {
                        var ct =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : {},
                          nt = ct.actions,
                          at = ut(ct, ['actions']),
                          lt = new pt.GlobalStore(st, at, nt),
                          Et = et(lt.getHookDecoupled(), 2),
                          Rt = Et[0],
                          yt = Et[1];
                        return [lt.getHook(), Rt, yt];
                      }),
                        (mt.createGlobalState = function (st) {
                          var ct =
                            arguments.length > 1 && arguments[1] !== void 0
                              ? arguments[1]
                              : {};
                          return et(
                            (0, mt.createGlobalStateWithDecoupledFuncs)(st, ct),
                            1
                          )[0];
                        }),
                        (mt.createCustomGlobalStateWithDecoupledFuncs =
                          function (st) {
                            var ct = st.onInitialize,
                              nt = st.onChange;
                            return function (at) {
                              var lt =
                                  arguments.length > 1 &&
                                  arguments[1] !== void 0
                                    ? arguments[1]
                                    : { config: null },
                                Et = lt.config,
                                Rt = lt.onInit,
                                yt = lt.onStateChanged,
                                Vt = ut(lt, [
                                  'config',
                                  'onInit',
                                  'onStateChanged',
                                ]);
                              return (0,
                              mt.createGlobalStateWithDecoupledFuncs)(
                                at,
                                Object.assign(
                                  {
                                    onInit: function (Kt) {
                                      ct(Kt, Et), Rt == null || Rt(Kt);
                                    },
                                    onStateChanged: function (Kt) {
                                      nt(Kt, Et), yt == null || yt(Kt);
                                    },
                                  },
                                  Vt
                                )
                              );
                            };
                          }),
                        (mt.createDerivate = function (st, ct) {
                          var nt =
                            arguments.length > 2 && arguments[2] !== void 0
                              ? arguments[2]
                              : {};
                          return function (at) {
                            var lt =
                              arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : null;
                            return st(
                              function (Et) {
                                var Rt = ct(Et);
                                return at ? at(Rt) : Rt;
                              },
                              at && lt ? lt : nt
                            );
                          };
                        }),
                        (mt.createDerivateEmitter = function (st, ct) {
                          var nt = st._father_emitter;
                          if (nt) {
                            var at = function (Rt) {
                                var yt = nt.selector(Rt);
                                return ct(yt);
                              },
                              lt = (0, mt.createDerivateEmitter)(nt.getter, at);
                            return (
                              (lt._father_emitter = {
                                getter: nt.getter,
                                selector: at,
                              }),
                              lt
                            );
                          }
                          var Et = function (Rt, yt) {
                            var Vt = typeof yt == 'function',
                              Kt = Vt ? Rt : null,
                              Wt = Vt ? yt : Rt,
                              At = Vt
                                ? arguments.length > 2 &&
                                  arguments[2] !== void 0
                                  ? arguments[2]
                                  : {}
                                : yt;
                            return st(function (wt) {
                              wt(
                                function (Ct) {
                                  var St,
                                    Mt = ct(Ct);
                                  return (St = Kt == null ? void 0 : Kt(Mt)) !==
                                    null && St !== void 0
                                    ? St
                                    : Mt;
                                },
                                Wt,
                                At
                              );
                            });
                          };
                          return (
                            (Et._father_emitter = { getter: st, selector: ct }),
                            Et
                          );
                        });
                    },
                    774: (gt, mt, it) => {
                      function et(at) {
                        return (
                          (et =
                            typeof Symbol == 'function' &&
                            typeof Symbol.iterator == 'symbol'
                              ? function (lt) {
                                  return typeof lt;
                                }
                              : function (lt) {
                                  return lt &&
                                    typeof Symbol == 'function' &&
                                    lt.constructor === Symbol &&
                                    lt !== Symbol.prototype
                                    ? 'symbol'
                                    : typeof lt;
                                }),
                          et(at)
                        );
                      }
                      function b(at, lt) {
                        (lt == null || lt > at.length) && (lt = at.length);
                        for (var Et = 0, Rt = new Array(lt); Et < lt; Et++)
                          Rt[Et] = at[Et];
                        return Rt;
                      }
                      function ut() {
                        ut = function () {
                          return at;
                        };
                        var at = {},
                          lt = Object.prototype,
                          Et = lt.hasOwnProperty,
                          Rt =
                            Object.defineProperty ||
                            function (Dt, zt, Zt) {
                              Dt[zt] = Zt.value;
                            },
                          yt = typeof Symbol == 'function' ? Symbol : {},
                          Vt = yt.iterator || '@@iterator',
                          Kt = yt.asyncIterator || '@@asyncIterator',
                          Wt = yt.toStringTag || '@@toStringTag';
                        function At(Dt, zt, Zt) {
                          return (
                            Object.defineProperty(Dt, zt, {
                              value: Zt,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            }),
                            Dt[zt]
                          );
                        }
                        try {
                          At({}, '');
                        } catch {
                          At = function (zt, Zt, cr) {
                            return (zt[Zt] = cr);
                          };
                        }
                        function wt(Dt, zt, Zt, cr) {
                          var er = zt && zt.prototype instanceof Mt ? zt : Mt,
                            xr = Object.create(er.prototype),
                            Or = new on(cr || []);
                          return (
                            Rt(xr, '_invoke', { value: _r(Dt, Zt, Or) }), xr
                          );
                        }
                        function Ct(Dt, zt, Zt) {
                          try {
                            return { type: 'normal', arg: Dt.call(zt, Zt) };
                          } catch (cr) {
                            return { type: 'throw', arg: cr };
                          }
                        }
                        at.wrap = wt;
                        var St = {};
                        function Mt() {}
                        function Ut() {}
                        function Bt() {}
                        var Ft = {};
                        At(Ft, Vt, function () {
                          return this;
                        });
                        var Qt = Object.getPrototypeOf,
                          Yt = Qt && Qt(Qt(hn([])));
                        Yt && Yt !== lt && Et.call(Yt, Vt) && (Ft = Yt);
                        var sr =
                          (Bt.prototype =
                          Mt.prototype =
                            Object.create(Ft));
                        function mr(Dt) {
                          ['next', 'throw', 'return'].forEach(function (zt) {
                            At(Dt, zt, function (Zt) {
                              return this._invoke(zt, Zt);
                            });
                          });
                        }
                        function vr(Dt, zt) {
                          function Zt(er, xr, Or, Ur) {
                            var Gr = Ct(Dt[er], Dt, xr);
                            if (Gr.type !== 'throw') {
                              var Ln = Gr.arg,
                                Vn = Ln.value;
                              return Vn &&
                                et(Vn) == 'object' &&
                                Et.call(Vn, '__await')
                                ? zt.resolve(Vn.__await).then(
                                    function (jn) {
                                      Zt('next', jn, Or, Ur);
                                    },
                                    function (jn) {
                                      Zt('throw', jn, Or, Ur);
                                    }
                                  )
                                : zt.resolve(Vn).then(
                                    function (jn) {
                                      (Ln.value = jn), Or(Ln);
                                    },
                                    function (jn) {
                                      return Zt('throw', jn, Or, Ur);
                                    }
                                  );
                            }
                            Ur(Gr.arg);
                          }
                          var cr;
                          Rt(this, '_invoke', {
                            value: function (er, xr) {
                              function Or() {
                                return new zt(function (Ur, Gr) {
                                  Zt(er, xr, Ur, Gr);
                                });
                              }
                              return (cr = cr ? cr.then(Or, Or) : Or());
                            },
                          });
                        }
                        function _r(Dt, zt, Zt) {
                          var cr = 'suspendedStart';
                          return function (er, xr) {
                            if (cr === 'executing')
                              throw new Error('Generator is already running');
                            if (cr === 'completed') {
                              if (er === 'throw') throw xr;
                              return { value: void 0, done: !0 };
                            }
                            for (Zt.method = er, Zt.arg = xr; ; ) {
                              var Or = Zt.delegate;
                              if (Or) {
                                var Ur = kr(Or, Zt);
                                if (Ur) {
                                  if (Ur === St) continue;
                                  return Ur;
                                }
                              }
                              if (Zt.method === 'next')
                                Zt.sent = Zt._sent = Zt.arg;
                              else if (Zt.method === 'throw') {
                                if (cr === 'suspendedStart')
                                  throw ((cr = 'completed'), Zt.arg);
                                Zt.dispatchException(Zt.arg);
                              } else
                                Zt.method === 'return' &&
                                  Zt.abrupt('return', Zt.arg);
                              cr = 'executing';
                              var Gr = Ct(Dt, zt, Zt);
                              if (Gr.type === 'normal') {
                                if (
                                  ((cr = Zt.done
                                    ? 'completed'
                                    : 'suspendedYield'),
                                  Gr.arg === St)
                                )
                                  continue;
                                return { value: Gr.arg, done: Zt.done };
                              }
                              Gr.type === 'throw' &&
                                ((cr = 'completed'),
                                (Zt.method = 'throw'),
                                (Zt.arg = Gr.arg));
                            }
                          };
                        }
                        function kr(Dt, zt) {
                          var Zt = zt.method,
                            cr = Dt.iterator[Zt];
                          if (cr === void 0)
                            return (
                              (zt.delegate = null),
                              (Zt === 'throw' &&
                                Dt.iterator.return &&
                                ((zt.method = 'return'),
                                (zt.arg = void 0),
                                kr(Dt, zt),
                                zt.method === 'throw')) ||
                                (Zt !== 'return' &&
                                  ((zt.method = 'throw'),
                                  (zt.arg = new TypeError(
                                    "The iterator does not provide a '" +
                                      Zt +
                                      "' method"
                                  )))),
                              St
                            );
                          var er = Ct(cr, Dt.iterator, zt.arg);
                          if (er.type === 'throw')
                            return (
                              (zt.method = 'throw'),
                              (zt.arg = er.arg),
                              (zt.delegate = null),
                              St
                            );
                          var xr = er.arg;
                          return xr
                            ? xr.done
                              ? ((zt[Dt.resultName] = xr.value),
                                (zt.next = Dt.nextLoc),
                                zt.method !== 'return' &&
                                  ((zt.method = 'next'), (zt.arg = void 0)),
                                (zt.delegate = null),
                                St)
                              : xr
                            : ((zt.method = 'throw'),
                              (zt.arg = new TypeError(
                                'iterator result is not an object'
                              )),
                              (zt.delegate = null),
                              St);
                        }
                        function Lr(Dt) {
                          var zt = { tryLoc: Dt[0] };
                          1 in Dt && (zt.catchLoc = Dt[1]),
                            2 in Dt &&
                              ((zt.finallyLoc = Dt[2]), (zt.afterLoc = Dt[3])),
                            this.tryEntries.push(zt);
                        }
                        function Fr(Dt) {
                          var zt = Dt.completion || {};
                          (zt.type = 'normal'),
                            delete zt.arg,
                            (Dt.completion = zt);
                        }
                        function on(Dt) {
                          (this.tryEntries = [{ tryLoc: 'root' }]),
                            Dt.forEach(Lr, this),
                            this.reset(!0);
                        }
                        function hn(Dt) {
                          if (Dt) {
                            var zt = Dt[Vt];
                            if (zt) return zt.call(Dt);
                            if (typeof Dt.next == 'function') return Dt;
                            if (!isNaN(Dt.length)) {
                              var Zt = -1,
                                cr = function er() {
                                  for (; ++Zt < Dt.length; )
                                    if (Et.call(Dt, Zt))
                                      return (
                                        (er.value = Dt[Zt]), (er.done = !1), er
                                      );
                                  return (
                                    (er.value = void 0), (er.done = !0), er
                                  );
                                };
                              return (cr.next = cr);
                            }
                          }
                          return { next: _n };
                        }
                        function _n() {
                          return { value: void 0, done: !0 };
                        }
                        return (
                          (Ut.prototype = Bt),
                          Rt(sr, 'constructor', {
                            value: Bt,
                            configurable: !0,
                          }),
                          Rt(Bt, 'constructor', {
                            value: Ut,
                            configurable: !0,
                          }),
                          (Ut.displayName = At(Bt, Wt, 'GeneratorFunction')),
                          (at.isGeneratorFunction = function (Dt) {
                            var zt = typeof Dt == 'function' && Dt.constructor;
                            return (
                              !!zt &&
                              (zt === Ut ||
                                (zt.displayName || zt.name) ===
                                  'GeneratorFunction')
                            );
                          }),
                          (at.mark = function (Dt) {
                            return (
                              Object.setPrototypeOf
                                ? Object.setPrototypeOf(Dt, Bt)
                                : ((Dt.__proto__ = Bt),
                                  At(Dt, Wt, 'GeneratorFunction')),
                              (Dt.prototype = Object.create(sr)),
                              Dt
                            );
                          }),
                          (at.awrap = function (Dt) {
                            return { __await: Dt };
                          }),
                          mr(vr.prototype),
                          At(vr.prototype, Kt, function () {
                            return this;
                          }),
                          (at.AsyncIterator = vr),
                          (at.async = function (Dt, zt, Zt, cr, er) {
                            er === void 0 && (er = Promise);
                            var xr = new vr(wt(Dt, zt, Zt, cr), er);
                            return at.isGeneratorFunction(zt)
                              ? xr
                              : xr.next().then(function (Or) {
                                  return Or.done ? Or.value : xr.next();
                                });
                          }),
                          mr(sr),
                          At(sr, Wt, 'Generator'),
                          At(sr, Vt, function () {
                            return this;
                          }),
                          At(sr, 'toString', function () {
                            return '[object Generator]';
                          }),
                          (at.keys = function (Dt) {
                            var zt = Object(Dt),
                              Zt = [];
                            for (var cr in zt) Zt.push(cr);
                            return (
                              Zt.reverse(),
                              function er() {
                                for (; Zt.length; ) {
                                  var xr = Zt.pop();
                                  if (xr in zt)
                                    return (er.value = xr), (er.done = !1), er;
                                }
                                return (er.done = !0), er;
                              }
                            );
                          }),
                          (at.values = hn),
                          (on.prototype = {
                            constructor: on,
                            reset: function (Dt) {
                              if (
                                ((this.prev = 0),
                                (this.next = 0),
                                (this.sent = this._sent = void 0),
                                (this.done = !1),
                                (this.delegate = null),
                                (this.method = 'next'),
                                (this.arg = void 0),
                                this.tryEntries.forEach(Fr),
                                !Dt)
                              )
                                for (var zt in this)
                                  zt.charAt(0) === 't' &&
                                    Et.call(this, zt) &&
                                    !isNaN(+zt.slice(1)) &&
                                    (this[zt] = void 0);
                            },
                            stop: function () {
                              this.done = !0;
                              var Dt = this.tryEntries[0].completion;
                              if (Dt.type === 'throw') throw Dt.arg;
                              return this.rval;
                            },
                            dispatchException: function (Dt) {
                              if (this.done) throw Dt;
                              var zt = this;
                              function Zt(Gr, Ln) {
                                return (
                                  (xr.type = 'throw'),
                                  (xr.arg = Dt),
                                  (zt.next = Gr),
                                  Ln &&
                                    ((zt.method = 'next'), (zt.arg = void 0)),
                                  !!Ln
                                );
                              }
                              for (
                                var cr = this.tryEntries.length - 1;
                                cr >= 0;
                                --cr
                              ) {
                                var er = this.tryEntries[cr],
                                  xr = er.completion;
                                if (er.tryLoc === 'root') return Zt('end');
                                if (er.tryLoc <= this.prev) {
                                  var Or = Et.call(er, 'catchLoc'),
                                    Ur = Et.call(er, 'finallyLoc');
                                  if (Or && Ur) {
                                    if (this.prev < er.catchLoc)
                                      return Zt(er.catchLoc, !0);
                                    if (this.prev < er.finallyLoc)
                                      return Zt(er.finallyLoc);
                                  } else if (Or) {
                                    if (this.prev < er.catchLoc)
                                      return Zt(er.catchLoc, !0);
                                  } else {
                                    if (!Ur)
                                      throw new Error(
                                        'try statement without catch or finally'
                                      );
                                    if (this.prev < er.finallyLoc)
                                      return Zt(er.finallyLoc);
                                  }
                                }
                              }
                            },
                            abrupt: function (Dt, zt) {
                              for (
                                var Zt = this.tryEntries.length - 1;
                                Zt >= 0;
                                --Zt
                              ) {
                                var cr = this.tryEntries[Zt];
                                if (
                                  cr.tryLoc <= this.prev &&
                                  Et.call(cr, 'finallyLoc') &&
                                  this.prev < cr.finallyLoc
                                ) {
                                  var er = cr;
                                  break;
                                }
                              }
                              er &&
                                (Dt === 'break' || Dt === 'continue') &&
                                er.tryLoc <= zt &&
                                zt <= er.finallyLoc &&
                                (er = null);
                              var xr = er ? er.completion : {};
                              return (
                                (xr.type = Dt),
                                (xr.arg = zt),
                                er
                                  ? ((this.method = 'next'),
                                    (this.next = er.finallyLoc),
                                    St)
                                  : this.complete(xr)
                              );
                            },
                            complete: function (Dt, zt) {
                              if (Dt.type === 'throw') throw Dt.arg;
                              return (
                                Dt.type === 'break' || Dt.type === 'continue'
                                  ? (this.next = Dt.arg)
                                  : Dt.type === 'return'
                                  ? ((this.rval = this.arg = Dt.arg),
                                    (this.method = 'return'),
                                    (this.next = 'end'))
                                  : Dt.type === 'normal' &&
                                    zt &&
                                    (this.next = zt),
                                St
                              );
                            },
                            finish: function (Dt) {
                              for (
                                var zt = this.tryEntries.length - 1;
                                zt >= 0;
                                --zt
                              ) {
                                var Zt = this.tryEntries[zt];
                                if (Zt.finallyLoc === Dt)
                                  return (
                                    this.complete(Zt.completion, Zt.afterLoc),
                                    Fr(Zt),
                                    St
                                  );
                              }
                            },
                            catch: function (Dt) {
                              for (
                                var zt = this.tryEntries.length - 1;
                                zt >= 0;
                                --zt
                              ) {
                                var Zt = this.tryEntries[zt];
                                if (Zt.tryLoc === Dt) {
                                  var cr = Zt.completion;
                                  if (cr.type === 'throw') {
                                    var er = cr.arg;
                                    Fr(Zt);
                                  }
                                  return er;
                                }
                              }
                              throw new Error('illegal catch attempt');
                            },
                            delegateYield: function (Dt, zt, Zt) {
                              return (
                                (this.delegate = {
                                  iterator: hn(Dt),
                                  resultName: zt,
                                  nextLoc: Zt,
                                }),
                                this.method === 'next' && (this.arg = void 0),
                                St
                              );
                            },
                          }),
                          at
                        );
                      }
                      function pt(at) {
                        var lt = (function (Et, Rt) {
                          if (et(Et) !== 'object' || Et === null) return Et;
                          var yt = Et[Symbol.toPrimitive];
                          if (yt !== void 0) {
                            var Vt = yt.call(Et, 'string');
                            if (et(Vt) !== 'object') return Vt;
                            throw new TypeError(
                              '@@toPrimitive must return a primitive value.'
                            );
                          }
                          return String(Et);
                        })(at);
                        return et(lt) === 'symbol' ? lt : String(lt);
                      }
                      Object.defineProperty(mt, '__esModule', { value: !0 }),
                        (mt.GlobalStore = mt.throwNoSubscribersWereAdded =
                          void 0);
                      var st = it(608),
                        ct = it(156);
                      mt.throwNoSubscribersWereAdded = function () {
                        throw new Error(
                          'No new subscribers were added, please make sure to add at least one subscriber with the subscribe method'
                        );
                      };
                      var nt = (function () {
                        function at(Rt) {
                          var yt = this,
                            Vt =
                              arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {},
                            Kt =
                              arguments.length > 2 && arguments[2] !== void 0
                                ? arguments[2]
                                : null;
                          (function (Wt, At) {
                            if (!(Wt instanceof At))
                              throw new TypeError(
                                'Cannot call a class as a function'
                              );
                          })(this, at),
                            (this.actionsConfig = Kt),
                            (this.subscribers = new Map()),
                            (this.actions = null),
                            (this.config = { metadata: null }),
                            (this.onInit = null),
                            (this.onStateChanged = null),
                            (this.onSubscribed = null),
                            (this.computePreventStateChange = null),
                            (this.initialize = function () {
                              return (
                                (Wt = yt),
                                (At = void 0),
                                (wt = ut().mark(function Ct() {
                                  var St, Mt, Ut;
                                  return ut().wrap(
                                    function (Bt) {
                                      for (;;)
                                        switch ((Bt.prev = Bt.next)) {
                                          case 0:
                                            if (
                                              (this.actionsConfig &&
                                                (this.actions =
                                                  this.getStoreActionsMap()),
                                              (St = this.onInit),
                                              (Mt = this.config.onInit),
                                              St || Mt)
                                            ) {
                                              Bt.next = 5;
                                              break;
                                            }
                                            return Bt.abrupt('return');
                                          case 5:
                                            (Ut =
                                              this.getConfigCallbackParam()),
                                              St == null || St(Ut),
                                              Mt == null || Mt(Ut);
                                          case 8:
                                          case 'end':
                                            return Bt.stop();
                                        }
                                    },
                                    Ct,
                                    this
                                  );
                                })),
                                new (At || (At = Promise))(function (Ct, St) {
                                  function Mt(Ft) {
                                    try {
                                      Bt(wt.next(Ft));
                                    } catch (Qt) {
                                      St(Qt);
                                    }
                                  }
                                  function Ut(Ft) {
                                    try {
                                      Bt(wt.throw(Ft));
                                    } catch (Qt) {
                                      St(Qt);
                                    }
                                  }
                                  function Bt(Ft) {
                                    var Qt;
                                    Ft.done
                                      ? Ct(Ft.value)
                                      : ((Qt = Ft.value),
                                        Qt instanceof At
                                          ? Qt
                                          : new At(function (Yt) {
                                              Yt(Qt);
                                            })).then(Mt, Ut);
                                  }
                                  Bt((wt = wt.apply(Wt, [])).next());
                                })
                              );
                              var Wt, At, wt;
                            }),
                            (this.setState = function (Wt) {
                              var At = Wt.state,
                                wt = Wt.forceUpdate;
                              (yt.stateWrapper = { state: At }),
                                Array.from(yt.subscribers.values()).forEach(
                                  function (Ct) {
                                    (function (St) {
                                      var Mt = St.selector,
                                        Ut = St.callback,
                                        Bt = St.currentState,
                                        Ft = St.config,
                                        Qt =
                                          (Ft != null && Ft.isEqual) ||
                                          (Ft == null ? void 0 : Ft.isEqual) ===
                                            null
                                            ? Ft == null
                                              ? void 0
                                              : Ft.isEqual
                                            : Mt
                                            ? st.shallowCompare
                                            : null,
                                        Yt = Mt ? Mt(At) : At;
                                      (!wt && Qt != null && Qt(Bt, Yt)) ||
                                        Ut({ state: Yt });
                                    })(Ct);
                                  }
                                );
                            }),
                            (this.setMetadata = function (Wt) {
                              var At,
                                wt,
                                Ct =
                                  typeof Wt == 'function'
                                    ? Wt(
                                        (At = yt.config.metadata) !== null &&
                                          At !== void 0
                                          ? At
                                          : null
                                      )
                                    : Wt;
                              yt.config = Object.assign(
                                Object.assign(
                                  {},
                                  (wt = yt.config) !== null && wt !== void 0
                                    ? wt
                                    : {}
                                ),
                                { metadata: Ct }
                              );
                            }),
                            (this.getMetadata = function () {
                              var Wt;
                              return (Wt = yt.config.metadata) !== null &&
                                Wt !== void 0
                                ? Wt
                                : null;
                            }),
                            (this.createChangesSubscriber = function (Wt) {
                              var At = Wt.callback,
                                wt = Wt.selector,
                                Ct = Wt.config,
                                St = wt
                                  ? wt(yt.stateWrapper.state)
                                  : yt.stateWrapper.state,
                                Mt = { state: St };
                              return (
                                (Ct != null && Ct.skipFirst) || At(St),
                                {
                                  stateWrapper: Mt,
                                  subscriptionCallback: function (Ut) {
                                    var Bt = Ut.state;
                                    (Mt.state = Bt), At(Bt);
                                  },
                                }
                              );
                            }),
                            (this.getState = function (Wt) {
                              if (!Wt) return yt.stateWrapper.state;
                              var At = [];
                              return (
                                Wt(function (wt, Ct, St) {
                                  var Mt = typeof Ct == 'function',
                                    Ut = Mt ? wt : null,
                                    Bt = Mt ? Ct : wt,
                                    Ft = Mt ? St : Ct,
                                    Qt = yt.createChangesSubscriber({
                                      selector: Ut,
                                      callback: Bt,
                                      config: Ft,
                                    }),
                                    Yt = Qt.subscriptionCallback,
                                    sr = Qt.stateWrapper,
                                    mr = (0, st.uniqueId)();
                                  yt.updateSubscription({
                                    subscriptionId: mr,
                                    selector: Ut,
                                    config: Ft,
                                    stateWrapper: sr,
                                    callback: Yt,
                                  }),
                                    At.push(mr);
                                }),
                                At.length ||
                                  (0, mt.throwNoSubscribersWereAdded)(),
                                function () {
                                  At.forEach(function (wt) {
                                    yt.subscribers.delete(wt);
                                  });
                                }
                              );
                            }),
                            (this.getConfigCallbackParam = function () {
                              var Wt = yt.setMetadata,
                                At = yt.getMetadata,
                                wt = yt.getState,
                                Ct = yt.actions;
                              return {
                                setMetadata: Wt,
                                getMetadata: At,
                                getState: wt,
                                setState: yt.setStateWrapper,
                                actions: Ct,
                              };
                            }),
                            (this.updateSubscription = function (Wt) {
                              var At = Wt.subscriptionId,
                                wt = Wt.callback,
                                Ct = Wt.selector,
                                St = Wt.config,
                                Mt = St === void 0 ? {} : St,
                                Ut = Wt.stateWrapper.state,
                                Bt = yt.subscribers.get(At);
                              if (Bt) return (Bt.currentState = Ut), Bt;
                              var Ft = {
                                subscriptionId: At,
                                selector: Ct,
                                config: Mt,
                                currentState: Ut,
                                callback: wt,
                              };
                              return yt.subscribers.set(At, Ft), Ft;
                            }),
                            (this.executeOnSubscribed = function () {
                              var Wt = yt.onSubscribed,
                                At = yt.config.onSubscribed;
                              if (Wt || At) {
                                var wt = yt.getConfigCallbackParam();
                                Wt == null || Wt(wt), At == null || At(wt);
                              }
                            }),
                            (this.getHook = function () {
                              return function (Wt) {
                                var At,
                                  wt =
                                    arguments.length > 1 &&
                                    arguments[1] !== void 0
                                      ? arguments[1]
                                      : {},
                                  Ct = (0, ct.useRef)(null);
                                (0, ct.useEffect)(function () {
                                  return function () {
                                    yt.subscribers.delete(Ct.current);
                                  };
                                }, []);
                                var St,
                                  Mt =
                                    (function (Ft) {
                                      if (Array.isArray(Ft)) return Ft;
                                    })(
                                      (St = (0, ct.useState)(function () {
                                        return Wt
                                          ? { state: Wt(yt.stateWrapper.state) }
                                          : yt.stateWrapper;
                                      }))
                                    ) ||
                                    (function (Ft, Qt) {
                                      var Yt =
                                        Ft == null
                                          ? null
                                          : (typeof Symbol < 'u' &&
                                              Ft[Symbol.iterator]) ||
                                            Ft['@@iterator'];
                                      if (Yt != null) {
                                        var sr,
                                          mr,
                                          vr,
                                          _r,
                                          kr = [],
                                          Lr = !0,
                                          Fr = !1;
                                        try {
                                          for (
                                            vr = (Yt = Yt.call(Ft)).next;
                                            !(Lr = (sr = vr.call(Yt)).done) &&
                                            (kr.push(sr.value),
                                            kr.length !== 2);
                                            Lr = !0
                                          );
                                        } catch (on) {
                                          (Fr = !0), (mr = on);
                                        } finally {
                                          try {
                                            if (
                                              !Lr &&
                                              Yt.return != null &&
                                              ((_r = Yt.return()),
                                              Object(_r) !== _r)
                                            )
                                              return;
                                          } finally {
                                            if (Fr) throw mr;
                                          }
                                        }
                                        return kr;
                                      }
                                    })(St) ||
                                    (function (Ft, Qt) {
                                      if (Ft) {
                                        if (typeof Ft == 'string')
                                          return b(Ft, 2);
                                        var Yt = Object.prototype.toString
                                          .call(Ft)
                                          .slice(8, -1);
                                        return (
                                          Yt === 'Object' &&
                                            Ft.constructor &&
                                            (Yt = Ft.constructor.name),
                                          Yt === 'Map' || Yt === 'Set'
                                            ? Array.from(Ft)
                                            : Yt === 'Arguments' ||
                                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                Yt
                                              )
                                            ? b(Ft, 2)
                                            : void 0
                                        );
                                      }
                                    })(St) ||
                                    (function () {
                                      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                                    })(),
                                  Ut = Mt[0],
                                  Bt = Mt[1];
                                return (
                                  (0, ct.useEffect)(function () {
                                    Ct.current === null &&
                                      (Ct.current = (0, st.uniqueId)());
                                  }, []),
                                  (0, ct.useEffect)(
                                    function () {
                                      var Ft = Ct.current;
                                      if (Ft !== null) {
                                        var Qt = !yt.subscribers.has(Ft);
                                        yt.updateSubscription({
                                          subscriptionId: Ft,
                                          stateWrapper: Ut,
                                          selector: Wt,
                                          config: wt,
                                          callback: Bt,
                                        }),
                                          Qt && yt.executeOnSubscribed();
                                      }
                                    },
                                    [Ut]
                                  ),
                                  [
                                    Ut.state,
                                    yt.getStateOrchestrator(),
                                    (At = yt.config.metadata) !== null &&
                                    At !== void 0
                                      ? At
                                      : null,
                                  ]
                                );
                              };
                            }),
                            (this.getHookDecoupled = function () {
                              var Wt = yt.getStateOrchestrator(),
                                At = yt.getMetadata;
                              return [yt.getState, Wt, At];
                            }),
                            (this.getStateOrchestrator = function () {
                              return yt.actions
                                ? yt.actions
                                : yt.setStateWrapper;
                            }),
                            (this.hasStateCallbacks = function () {
                              var Wt = yt.computePreventStateChange,
                                At = yt.onStateChanged,
                                wt = yt.config,
                                Ct = wt.computePreventStateChange,
                                St = wt.onStateChanged;
                              return !!(Wt || Ct || At || St);
                            }),
                            (this.setStateWrapper = function (Wt) {
                              var At = (
                                  arguments.length > 1 &&
                                  arguments[1] !== void 0
                                    ? arguments[1]
                                    : {}
                                ).forceUpdate,
                                wt = typeof Wt == 'function',
                                Ct = yt.stateWrapper.state,
                                St = wt ? Wt(Ct) : Wt;
                              if (At || !Object.is(yt.stateWrapper.state, St)) {
                                var Mt = yt.setMetadata,
                                  Ut = yt.getMetadata,
                                  Bt = yt.getState,
                                  Ft = yt.actions,
                                  Qt = {
                                    setMetadata: Mt,
                                    getMetadata: Ut,
                                    setState: yt.setState,
                                    getState: Bt,
                                    actions: Ft,
                                    previousState: Ct,
                                    state: St,
                                  },
                                  Yt = yt.computePreventStateChange,
                                  sr = yt.config.computePreventStateChange;
                                if (
                                  (Yt || sr) &&
                                  ((Yt != null && Yt(Qt)) ||
                                    (sr != null && sr(Qt)))
                                )
                                  return;
                                yt.setState({ forceUpdate: At, state: St });
                                var mr = yt.onStateChanged,
                                  vr = yt.config.onStateChanged;
                                (mr || vr) &&
                                  (mr == null || mr(Qt), vr == null || vr(Qt));
                              }
                            }),
                            (this.getStoreActionsMap = function () {
                              if (!yt.actionsConfig) return null;
                              var Wt = yt.actionsConfig,
                                At = yt.setMetadata,
                                wt = yt.setStateWrapper,
                                Ct = yt.getState,
                                St = yt.getMetadata,
                                Mt = Object.keys(Wt).reduce(function (Ut, Bt) {
                                  var Ft, Qt, Yt;
                                  return (
                                    Object.assign(
                                      Ut,
                                      ((Ft = {}),
                                      (Yt = function () {
                                        for (
                                          var sr = Wt[Bt],
                                            mr = arguments.length,
                                            vr = new Array(mr),
                                            _r = 0;
                                          _r < mr;
                                          _r++
                                        )
                                          vr[_r] = arguments[_r];
                                        var kr = sr.apply(Mt, vr);
                                        return (
                                          typeof kr != 'function' &&
                                            (function (Lr) {
                                              throw new Error(
                                                `[WRONG CONFIGURATION!]: Every key inside the storeActionsConfig must be a higher order function that returns a function 
[`
                                                  .concat(
                                                    Lr,
                                                    `]: key is not a valid function, try something like this: 
{

    `
                                                  )
                                                  .concat(
                                                    Lr,
                                                    `: (param) => ({ setState, getState, setMetadata, getMetadata, actions }) => {

      setState((state) => ({ ...state, ...param }))

    }

}
`
                                                  )
                                              );
                                            })(Bt),
                                          kr.call(Mt, {
                                            setState: wt,
                                            getState: Ct,
                                            setMetadata: At,
                                            getMetadata: St,
                                            actions: Mt,
                                          })
                                        );
                                      }),
                                      (Qt = pt((Qt = Bt))) in Ft
                                        ? Object.defineProperty(Ft, Qt, {
                                            value: Yt,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                          })
                                        : (Ft[Qt] = Yt),
                                      Ft)
                                    ),
                                    Ut
                                  );
                                }, {});
                              return Mt;
                            }),
                            (this.stateWrapper = { state: Rt }),
                            (this.config = Object.assign(
                              { metadata: null },
                              Vt ?? {}
                            )),
                            this.constructor !== at || this.initialize();
                        }
                        var lt, Et;
                        return (
                          (lt = at),
                          (Et = [
                            {
                              key: 'state',
                              get: function () {
                                return this.stateWrapper.state;
                              },
                            },
                          ]) &&
                            (function (Rt, yt) {
                              for (var Vt = 0; Vt < yt.length; Vt++) {
                                var Kt = yt[Vt];
                                (Kt.enumerable = Kt.enumerable || !1),
                                  (Kt.configurable = !0),
                                  'value' in Kt && (Kt.writable = !0),
                                  Object.defineProperty(Rt, pt(Kt.key), Kt);
                              }
                            })(lt.prototype, Et),
                          Object.defineProperty(lt, 'prototype', {
                            writable: !1,
                          }),
                          at
                        );
                      })();
                      mt.GlobalStore = nt;
                    },
                    530: (gt, mt) => {
                      Object.defineProperty(mt, '__esModule', { value: !0 });
                    },
                    608: (gt, mt, it) => {
                      function et(nt, at) {
                        return (
                          (function (lt) {
                            if (Array.isArray(lt)) return lt;
                          })(nt) ||
                          (function (lt, Et) {
                            var Rt =
                              lt == null
                                ? null
                                : (typeof Symbol < 'u' &&
                                    lt[Symbol.iterator]) ||
                                  lt['@@iterator'];
                            if (Rt != null) {
                              var yt,
                                Vt,
                                Kt,
                                Wt,
                                At = [],
                                wt = !0,
                                Ct = !1;
                              try {
                                if (
                                  ((Kt = (Rt = Rt.call(lt)).next), Et === 0)
                                ) {
                                  if (Object(Rt) !== Rt) return;
                                  wt = !1;
                                } else
                                  for (
                                    ;
                                    !(wt = (yt = Kt.call(Rt)).done) &&
                                    (At.push(yt.value), At.length !== Et);
                                    wt = !0
                                  );
                              } catch (St) {
                                (Ct = !0), (Vt = St);
                              } finally {
                                try {
                                  if (
                                    !wt &&
                                    Rt.return != null &&
                                    ((Wt = Rt.return()), Object(Wt) !== Wt)
                                  )
                                    return;
                                } finally {
                                  if (Ct) throw Vt;
                                }
                              }
                              return At;
                            }
                          })(nt, at) ||
                          ut(nt, at) ||
                          (function () {
                            throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                          })()
                        );
                      }
                      function b(nt, at) {
                        var lt =
                          (typeof Symbol < 'u' && nt[Symbol.iterator]) ||
                          nt['@@iterator'];
                        if (!lt) {
                          if (
                            Array.isArray(nt) ||
                            (lt = ut(nt)) ||
                            (at && nt && typeof nt.length == 'number')
                          ) {
                            lt && (nt = lt);
                            var Et = 0,
                              Rt = function () {};
                            return {
                              s: Rt,
                              n: function () {
                                return Et >= nt.length
                                  ? { done: !0 }
                                  : { done: !1, value: nt[Et++] };
                              },
                              e: function (Wt) {
                                throw Wt;
                              },
                              f: Rt,
                            };
                          }
                          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                        }
                        var yt,
                          Vt = !0,
                          Kt = !1;
                        return {
                          s: function () {
                            lt = lt.call(nt);
                          },
                          n: function () {
                            var Wt = lt.next();
                            return (Vt = Wt.done), Wt;
                          },
                          e: function (Wt) {
                            (Kt = !0), (yt = Wt);
                          },
                          f: function () {
                            try {
                              Vt || lt.return == null || lt.return();
                            } finally {
                              if (Kt) throw yt;
                            }
                          },
                        };
                      }
                      function ut(nt, at) {
                        if (nt) {
                          if (typeof nt == 'string') return pt(nt, at);
                          var lt = Object.prototype.toString
                            .call(nt)
                            .slice(8, -1);
                          return (
                            lt === 'Object' &&
                              nt.constructor &&
                              (lt = nt.constructor.name),
                            lt === 'Map' || lt === 'Set'
                              ? Array.from(nt)
                              : lt === 'Arguments' ||
                                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                  lt
                                )
                              ? pt(nt, at)
                              : void 0
                          );
                        }
                      }
                      function pt(nt, at) {
                        (at == null || at > nt.length) && (at = nt.length);
                        for (var lt = 0, Et = new Array(at); lt < at; lt++)
                          Et[lt] = nt[lt];
                        return Et;
                      }
                      function st(nt) {
                        return (
                          (st =
                            typeof Symbol == 'function' &&
                            typeof Symbol.iterator == 'symbol'
                              ? function (at) {
                                  return typeof at;
                                }
                              : function (at) {
                                  return at &&
                                    typeof Symbol == 'function' &&
                                    at.constructor === Symbol &&
                                    at !== Symbol.prototype
                                    ? 'symbol'
                                    : typeof at;
                                }),
                          st(nt)
                        );
                      }
                      Object.defineProperty(mt, '__esModule', { value: !0 }),
                        (mt.uniqueId =
                          mt.debounce =
                          mt.shallowCompare =
                            void 0);
                      var ct = it(684);
                      (mt.shallowCompare = function (nt, at) {
                        if (nt === at) return !0;
                        var lt = st(nt),
                          Et = st(at);
                        if (lt !== Et) return !1;
                        if (
                          (0, ct.isNil)(nt) ||
                          (0, ct.isNil)(at) ||
                          ((0, ct.isPrimitive)(nt) &&
                            (0, ct.isPrimitive)(at)) ||
                          ((0, ct.isDate)(nt) && (0, ct.isDate)(at)) ||
                          (lt === 'function' && Et === 'function')
                        )
                          return nt === at;
                        if (Array.isArray(nt)) {
                          var Rt = nt,
                            yt = at;
                          if (Rt.length !== yt.length) return !1;
                          for (var Vt = 0; Vt < Rt.length; Vt++)
                            if (Rt[Vt] !== yt[Vt]) return !1;
                        }
                        if (nt instanceof Map) {
                          var Kt = nt,
                            Wt = at;
                          if (Kt.size !== Wt.size) return !1;
                          var At,
                            wt = b(Kt);
                          try {
                            for (wt.s(); !(At = wt.n()).done; ) {
                              var Ct = et(At.value, 2),
                                St = Ct[0];
                              if (Ct[1] !== Wt.get(St)) return !1;
                            }
                          } catch (kr) {
                            wt.e(kr);
                          } finally {
                            wt.f();
                          }
                        }
                        if (nt instanceof Set) {
                          var Mt = nt,
                            Ut = at;
                          if (Mt.size !== Ut.size) return !1;
                          var Bt,
                            Ft = b(Mt);
                          try {
                            for (Ft.s(); !(Bt = Ft.n()).done; ) {
                              var Qt = Bt.value;
                              if (!Ut.has(Qt)) return !1;
                            }
                          } catch (kr) {
                            Ft.e(kr);
                          } finally {
                            Ft.f();
                          }
                        }
                        var Yt = Object.keys(nt),
                          sr = Object.keys(at);
                        if (Yt.length !== sr.length) return !1;
                        for (var mr = 0, vr = Yt; mr < vr.length; mr++) {
                          var _r = vr[mr];
                          if (nt[_r] !== at[_r]) return !1;
                        }
                        return !0;
                      }),
                        (mt.debounce = function (nt) {
                          var at,
                            lt =
                              arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : 0;
                          return function () {
                            for (
                              var Et = arguments.length,
                                Rt = new Array(Et),
                                yt = 0;
                              yt < Et;
                              yt++
                            )
                              Rt[yt] = arguments[yt];
                            return (
                              at && clearTimeout(at),
                              (at = setTimeout(function () {
                                nt.apply(void 0, Rt);
                              }, lt)),
                              nt.apply(void 0, Rt)
                            );
                          };
                        }),
                        (mt.uniqueId = function () {
                          return (
                            Date.now().toString(36) +
                            Math.random().toString(36).substr(2, 5)
                          );
                        });
                    },
                    195: (gt, mt, it) => {
                      function et(st) {
                        return (
                          (et =
                            typeof Symbol == 'function' &&
                            typeof Symbol.iterator == 'symbol'
                              ? function (ct) {
                                  return typeof ct;
                                }
                              : function (ct) {
                                  return ct &&
                                    typeof Symbol == 'function' &&
                                    ct.constructor === Symbol &&
                                    ct !== Symbol.prototype
                                    ? 'symbol'
                                    : typeof ct;
                                }),
                          et(st)
                        );
                      }
                      function b(st, ct) {
                        return (
                          (b = Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (nt, at) {
                                return (nt.__proto__ = at), nt;
                              }),
                          b(st, ct)
                        );
                      }
                      function ut(st) {
                        return (
                          (ut = Object.setPrototypeOf
                            ? Object.getPrototypeOf.bind()
                            : function (ct) {
                                return (
                                  ct.__proto__ || Object.getPrototypeOf(ct)
                                );
                              }),
                          ut(st)
                        );
                      }
                      Object.defineProperty(mt, '__esModule', { value: !0 }),
                        (mt.GlobalStoreAbstract = void 0);
                      var pt = (function (st) {
                        (function (Rt, yt) {
                          if (typeof yt != 'function' && yt !== null)
                            throw new TypeError(
                              'Super expression must either be null or a function'
                            );
                          (Rt.prototype = Object.create(yt && yt.prototype, {
                            constructor: {
                              value: Rt,
                              writable: !0,
                              configurable: !0,
                            },
                          })),
                            Object.defineProperty(Rt, 'prototype', {
                              writable: !1,
                            }),
                            yt && b(Rt, yt);
                        })(Et, st);
                        var ct,
                          nt,
                          at,
                          lt =
                            ((nt = Et),
                            (at = (function () {
                              if (
                                typeof Reflect > 'u' ||
                                !Reflect.construct ||
                                Reflect.construct.sham
                              )
                                return !1;
                              if (typeof Proxy == 'function') return !0;
                              try {
                                return (
                                  Boolean.prototype.valueOf.call(
                                    Reflect.construct(
                                      Boolean,
                                      [],
                                      function () {}
                                    )
                                  ),
                                  !0
                                );
                              } catch {
                                return !1;
                              }
                            })()),
                            function () {
                              var Rt,
                                yt = ut(nt);
                              if (at) {
                                var Vt = ut(this).constructor;
                                Rt = Reflect.construct(yt, arguments, Vt);
                              } else Rt = yt.apply(this, arguments);
                              return (function (Kt, Wt) {
                                if (
                                  Wt &&
                                  (et(Wt) === 'object' ||
                                    typeof Wt == 'function')
                                )
                                  return Wt;
                                if (Wt !== void 0)
                                  throw new TypeError(
                                    'Derived constructors may only return object or undefined'
                                  );
                                return (function (At) {
                                  if (At === void 0)
                                    throw new ReferenceError(
                                      "this hasn't been initialised - super() hasn't been called"
                                    );
                                  return At;
                                })(Kt);
                              })(this, Rt);
                            });
                        function Et(Rt) {
                          var yt,
                            Vt =
                              arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {},
                            Kt =
                              arguments.length > 2 && arguments[2] !== void 0
                                ? arguments[2]
                                : null;
                          return (
                            (function (Wt, At) {
                              if (!(Wt instanceof At))
                                throw new TypeError(
                                  'Cannot call a class as a function'
                                );
                            })(this, Et),
                            ((yt = lt.call(this, Rt, Vt, Kt)).onInit =
                              function (Wt) {
                                yt.onInitialize(Wt);
                              }),
                            (yt.onStateChanged = function (Wt) {
                              yt.onChange(Wt);
                            }),
                            yt
                          );
                        }
                        return (
                          (ct = Et),
                          Object.defineProperty(ct, 'prototype', {
                            writable: !1,
                          }),
                          ct
                        );
                      })(it(774).GlobalStore);
                      mt.GlobalStoreAbstract = pt;
                    },
                    991: (gt, mt, it) => {
                      var et = Object.create
                          ? function (ut, pt, st, ct) {
                              ct === void 0 && (ct = st);
                              var nt = Object.getOwnPropertyDescriptor(pt, st);
                              (nt &&
                                !('get' in nt
                                  ? !pt.__esModule
                                  : nt.writable || nt.configurable)) ||
                                (nt = {
                                  enumerable: !0,
                                  get: function () {
                                    return pt[st];
                                  },
                                }),
                                Object.defineProperty(ut, ct, nt);
                            }
                          : function (ut, pt, st, ct) {
                              ct === void 0 && (ct = st), (ut[ct] = pt[st]);
                            },
                        b = function (ut, pt) {
                          for (var st in ut)
                            st === 'default' ||
                              Object.prototype.hasOwnProperty.call(pt, st) ||
                              et(pt, ut, st);
                        };
                      Object.defineProperty(mt, '__esModule', { value: !0 }),
                        b(it(684), mt),
                        b(it(530), mt),
                        b(it(774), mt),
                        b(it(195), mt),
                        b(it(853), mt),
                        b(it(608), mt),
                        b(it(852), mt);
                    },
                    684: function (gt) {
                      gt.exports = (() => {
                        var mt = {
                            991: (et, b, ut) => {
                              var pt = Object.create
                                ? function (st, ct, nt, at) {
                                    at === void 0 && (at = nt);
                                    var lt = Object.getOwnPropertyDescriptor(
                                      ct,
                                      nt
                                    );
                                    (lt &&
                                      !('get' in lt
                                        ? !ct.__esModule
                                        : lt.writable || lt.configurable)) ||
                                      (lt = {
                                        enumerable: !0,
                                        get: function () {
                                          return ct[nt];
                                        },
                                      }),
                                      Object.defineProperty(st, at, lt);
                                  }
                                : function (st, ct, nt, at) {
                                    at === void 0 && (at = nt),
                                      (st[at] = ct[nt]);
                                  };
                              Object.defineProperty(b, '__esModule', {
                                value: !0,
                              }),
                                (function (st, ct) {
                                  for (var nt in st)
                                    nt === 'default' ||
                                      Object.prototype.hasOwnProperty.call(
                                        ct,
                                        nt
                                      ) ||
                                      pt(ct, st, nt);
                                })(ut(729), b);
                            },
                            729: (et, b) => {
                              function ut(nt) {
                                return (
                                  (ut =
                                    typeof Symbol == 'function' &&
                                    typeof Symbol.iterator == 'symbol'
                                      ? function (at) {
                                          return typeof at;
                                        }
                                      : function (at) {
                                          return at &&
                                            typeof Symbol == 'function' &&
                                            at.constructor === Symbol &&
                                            at !== Symbol.prototype
                                            ? 'symbol'
                                            : typeof at;
                                        }),
                                  ut(nt)
                                );
                              }
                              function pt(nt, at, lt) {
                                return (
                                  (at = (function (Et) {
                                    var Rt = (function (yt, Vt) {
                                      if (ut(yt) !== 'object' || yt === null)
                                        return yt;
                                      var Kt = yt[Symbol.toPrimitive];
                                      if (Kt !== void 0) {
                                        var Wt = Kt.call(yt, 'string');
                                        if (ut(Wt) !== 'object') return Wt;
                                        throw new TypeError(
                                          '@@toPrimitive must return a primitive value.'
                                        );
                                      }
                                      return String(yt);
                                    })(Et);
                                    return ut(Rt) === 'symbol'
                                      ? Rt
                                      : String(Rt);
                                  })(at)) in nt
                                    ? Object.defineProperty(nt, at, {
                                        value: lt,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                      })
                                    : (nt[at] = lt),
                                  nt
                                );
                              }
                              function st(nt, at) {
                                if (nt) {
                                  if (typeof nt == 'string') return ct(nt, at);
                                  var lt = Object.prototype.toString
                                    .call(nt)
                                    .slice(8, -1);
                                  return (
                                    lt === 'Object' &&
                                      nt.constructor &&
                                      (lt = nt.constructor.name),
                                    lt === 'Map' || lt === 'Set'
                                      ? Array.from(nt)
                                      : lt === 'Arguments' ||
                                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                          lt
                                        )
                                      ? ct(nt, at)
                                      : void 0
                                  );
                                }
                              }
                              function ct(nt, at) {
                                (at == null || at > nt.length) &&
                                  (at = nt.length);
                                for (
                                  var lt = 0, Et = new Array(at);
                                  lt < at;
                                  lt++
                                )
                                  Et[lt] = nt[lt];
                                return Et;
                              }
                              Object.defineProperty(b, '__esModule', {
                                value: !0,
                              }),
                                (b.formatToStore =
                                  b.formatFromStore =
                                  b.isPrimitive =
                                  b.isFunction =
                                  b.isRegex =
                                  b.isDate =
                                  b.isString =
                                  b.isBoolean =
                                  b.isNumber =
                                  b.isNil =
                                  b.clone =
                                    void 0),
                                (b.clone = function (nt) {
                                  var at,
                                    lt = (
                                      arguments.length > 1 &&
                                      arguments[1] !== void 0
                                        ? arguments[1]
                                        : {}
                                    ).shallow;
                                  if (
                                    (0, b.isPrimitive)(nt) ||
                                    (0, b.isDate)(nt)
                                  )
                                    return nt;
                                  if (Array.isArray(nt))
                                    return lt
                                      ? (function (yt) {
                                          if (Array.isArray(yt)) return ct(yt);
                                        })((at = nt)) ||
                                          (function (yt) {
                                            if (
                                              (typeof Symbol < 'u' &&
                                                yt[Symbol.iterator] != null) ||
                                              yt['@@iterator'] != null
                                            )
                                              return Array.from(yt);
                                          })(at) ||
                                          st(at) ||
                                          (function () {
                                            throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                                          })()
                                      : nt.map(function (yt) {
                                          return (0, b.clone)(yt);
                                        });
                                  if (nt instanceof Map) {
                                    var Et = Array.from(nt.entries());
                                    return lt
                                      ? new Map(Et)
                                      : new Map(
                                          Et.map(function (yt) {
                                            return (0, b.clone)(yt);
                                          })
                                        );
                                  }
                                  if (nt instanceof Set) {
                                    var Rt = Array.from(nt.values());
                                    return lt
                                      ? new Set(Rt)
                                      : new Set(
                                          Rt.map(function (yt) {
                                            return (0, b.clone)(yt);
                                          })
                                        );
                                  }
                                  return nt instanceof RegExp
                                    ? new RegExp(nt.toString())
                                    : (0, b.isFunction)(nt)
                                    ? lt
                                      ? nt
                                      : Object.create(nt)
                                    : lt
                                    ? Object.assign({}, nt)
                                    : nt instanceof Error
                                    ? new Error(nt.message)
                                    : Object.keys(nt).reduce(function (yt, Vt) {
                                        var Kt = nt[Vt];
                                        return Object.assign(
                                          Object.assign({}, yt),
                                          pt({}, Vt, (0, b.clone)(Kt))
                                        );
                                      }, {});
                                }),
                                (b.isNil = function (nt) {
                                  return nt == null;
                                }),
                                (b.isNumber = function (nt) {
                                  return typeof nt == 'number';
                                }),
                                (b.isBoolean = function (nt) {
                                  return typeof nt == 'boolean';
                                }),
                                (b.isString = function (nt) {
                                  return typeof nt == 'string';
                                }),
                                (b.isDate = function (nt) {
                                  return nt instanceof Date;
                                }),
                                (b.isRegex = function (nt) {
                                  return nt instanceof RegExp;
                                }),
                                (b.isFunction = function (nt) {
                                  return (
                                    typeof nt == 'function' ||
                                    nt instanceof Function
                                  );
                                }),
                                (b.isPrimitive = function (nt) {
                                  return (
                                    (0, b.isNil)(nt) ||
                                    (0, b.isNumber)(nt) ||
                                    (0, b.isBoolean)(nt) ||
                                    (0, b.isString)(nt) ||
                                    ut(nt) === 'symbol'
                                  );
                                }),
                                (b.formatFromStore = function (nt) {
                                  return (function (at) {
                                    var lt, Et;
                                    if ((0, b.isPrimitive)(at)) return at;
                                    if (
                                      (at == null ? void 0 : at.$t) === 'date'
                                    )
                                      return new Date(at.$v);
                                    if (
                                      (at == null ? void 0 : at.$t) === 'map'
                                    ) {
                                      var Rt = (
                                        (lt = at.$v) !== null && lt !== void 0
                                          ? lt
                                          : []
                                      ).map(function (Vt) {
                                        var Kt,
                                          Wt =
                                            (function (Ct) {
                                              if (Array.isArray(Ct)) return Ct;
                                            })((Kt = Vt)) ||
                                            (function (Ct, St) {
                                              var Mt =
                                                Ct == null
                                                  ? null
                                                  : (typeof Symbol < 'u' &&
                                                      Ct[Symbol.iterator]) ||
                                                    Ct['@@iterator'];
                                              if (Mt != null) {
                                                var Ut,
                                                  Bt,
                                                  Ft,
                                                  Qt,
                                                  Yt = [],
                                                  sr = !0,
                                                  mr = !1;
                                                try {
                                                  for (
                                                    Ft = (Mt = Mt.call(Ct))
                                                      .next;
                                                    !(sr = (Ut = Ft.call(Mt))
                                                      .done) &&
                                                    (Yt.push(Ut.value),
                                                    Yt.length !== 2);
                                                    sr = !0
                                                  );
                                                } catch (vr) {
                                                  (mr = !0), (Bt = vr);
                                                } finally {
                                                  try {
                                                    if (
                                                      !sr &&
                                                      Mt.return != null &&
                                                      ((Qt = Mt.return()),
                                                      Object(Qt) !== Qt)
                                                    )
                                                      return;
                                                  } finally {
                                                    if (mr) throw Bt;
                                                  }
                                                }
                                                return Yt;
                                              }
                                            })(Kt) ||
                                            st(Kt, 2) ||
                                            (function () {
                                              throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                                            })(),
                                          At = Wt[0],
                                          wt = Wt[1];
                                        return [At, (0, b.formatFromStore)(wt)];
                                      });
                                      return new Map(Rt);
                                    }
                                    if (
                                      (at == null ? void 0 : at.$t) === 'set'
                                    ) {
                                      var yt =
                                        (Et = at.$v) !== null && Et !== void 0
                                          ? Et
                                          : [].map(function (Vt) {
                                              return (0, b.formatFromStore)(Vt);
                                            });
                                      return new Set(yt);
                                    }
                                    return (at == null ? void 0 : at.$t) ===
                                      'regex'
                                      ? new RegExp(at.$v)
                                      : (at == null ? void 0 : at.$t) ===
                                        'error'
                                      ? new Error(at.$v)
                                      : Array.isArray(at)
                                      ? at.map(function (Vt) {
                                          return (0, b.formatFromStore)(Vt);
                                        })
                                      : (at == null ? void 0 : at.$t) ===
                                        'function'
                                      ? Function(
                                          '('.concat(at.$v, ')(...arguments)')
                                        )
                                      : Object.keys(at).reduce(function (
                                          Vt,
                                          Kt
                                        ) {
                                          var Wt = at[Kt];
                                          return Object.assign(
                                            Object.assign({}, Vt),
                                            pt(
                                              {},
                                              Kt,
                                              (0, b.formatFromStore)(Wt)
                                            )
                                          );
                                        },
                                        {});
                                  })(
                                    (arguments.length > 1 &&
                                    arguments[1] !== void 0
                                      ? arguments[1]
                                      : {}
                                    ).jsonParse
                                      ? JSON.parse(nt)
                                      : (0, b.clone)(nt)
                                  );
                                }),
                                (b.formatToStore = function (nt) {
                                  var at =
                                      arguments.length > 1 &&
                                      arguments[1] !== void 0
                                        ? arguments[1]
                                        : { stringify: !1 },
                                    lt = at.stringify,
                                    Et = at.validator,
                                    Rt = at.excludeTypes,
                                    yt = at.excludeKeys,
                                    Vt = new Set(Rt ?? []),
                                    Kt = new Set(yt ?? []),
                                    Wt = Vt.size || Kt.size,
                                    At =
                                      Et ??
                                      function (Ct) {
                                        var St = Ct.key,
                                          Mt = Ct.value;
                                        if (!Wt) return !0;
                                        var Ut = Kt.has(St),
                                          Bt = Vt.has(ut(Mt));
                                        return !Ut && !Bt;
                                      },
                                    wt = (function Ct(St) {
                                      if ((0, b.isPrimitive)(St)) return St;
                                      if (Array.isArray(St))
                                        return St.map(function (Ut) {
                                          return Ct(Ut);
                                        });
                                      if (St instanceof Map)
                                        return {
                                          $t: 'map',
                                          $v: Array.from(St.entries()).map(
                                            function (Ut) {
                                              return Ct(Ut);
                                            }
                                          ),
                                        };
                                      if (St instanceof Set)
                                        return {
                                          $t: 'set',
                                          $v: Array.from(St.values()).map(
                                            function (Ut) {
                                              return Ct(Ut);
                                            }
                                          ),
                                        };
                                      if ((0, b.isDate)(St))
                                        return {
                                          $t: 'date',
                                          $v: St.toISOString(),
                                        };
                                      if ((0, b.isRegex)(St))
                                        return {
                                          $t: 'regex',
                                          $v: St.toString(),
                                        };
                                      if ((0, b.isFunction)(St)) {
                                        var Mt;
                                        try {
                                          Mt = {
                                            $t: 'function',
                                            $v: St.toString(),
                                          };
                                        } catch {
                                          Mt = {
                                            $t: 'error',
                                            $v: 'Error: Could not serialize function',
                                          };
                                        }
                                        return Mt;
                                      }
                                      return St instanceof Error
                                        ? { $t: 'error', $v: St.message }
                                        : Object.keys(St).reduce(function (
                                            Ut,
                                            Bt
                                          ) {
                                            var Ft = St[Bt],
                                              Qt = Ct(Ft);
                                            return At({
                                              obj: St,
                                              key: Bt,
                                              value: Qt,
                                            })
                                              ? Object.assign(
                                                  Object.assign({}, Ut),
                                                  pt({}, Bt, Ct(Ft))
                                                )
                                              : Ut;
                                          },
                                          {});
                                    })((0, b.clone)(nt));
                                  return lt ? JSON.stringify(wt) : wt;
                                });
                            },
                          },
                          it = {};
                        return (function et(b) {
                          var ut = it[b];
                          if (ut !== void 0) return ut.exports;
                          var pt = (it[b] = { exports: {} });
                          return mt[b](pt, pt.exports, et), pt.exports;
                        })(991);
                      })();
                    },
                    486: function (gt, mt, it) {
                      var et;
                      (gt = it.nmd(gt)),
                        function () {
                          var b,
                            ut = 'Expected a function',
                            pt = '__lodash_hash_undefined__',
                            st = '__lodash_placeholder__',
                            ct = 32,
                            nt = 128,
                            at = 1 / 0,
                            lt = 9007199254740991,
                            Et = NaN,
                            Rt = 4294967295,
                            yt = [
                              ['ary', nt],
                              ['bind', 1],
                              ['bindKey', 2],
                              ['curry', 8],
                              ['curryRight', 16],
                              ['flip', 512],
                              ['partial', ct],
                              ['partialRight', 64],
                              ['rearg', 256],
                            ],
                            Vt = '[object Arguments]',
                            Kt = '[object Array]',
                            Wt = '[object Boolean]',
                            At = '[object Date]',
                            wt = '[object Error]',
                            Ct = '[object Function]',
                            St = '[object GeneratorFunction]',
                            Mt = '[object Map]',
                            Ut = '[object Number]',
                            Bt = '[object Object]',
                            Ft = '[object Promise]',
                            Qt = '[object RegExp]',
                            Yt = '[object Set]',
                            sr = '[object String]',
                            mr = '[object Symbol]',
                            vr = '[object WeakMap]',
                            _r = '[object ArrayBuffer]',
                            kr = '[object DataView]',
                            Lr = '[object Float32Array]',
                            Fr = '[object Float64Array]',
                            on = '[object Int8Array]',
                            hn = '[object Int16Array]',
                            _n = '[object Int32Array]',
                            Dt = '[object Uint8Array]',
                            zt = '[object Uint8ClampedArray]',
                            Zt = '[object Uint16Array]',
                            cr = '[object Uint32Array]',
                            er = /\b__p \+= '';/g,
                            xr = /\b(__p \+=) '' \+/g,
                            Or = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                            Ur = /&(?:amp|lt|gt|quot|#39);/g,
                            Gr = /[&<>"']/g,
                            Ln = RegExp(Ur.source),
                            Vn = RegExp(Gr.source),
                            jn = /<%-([\s\S]+?)%>/g,
                            Em = /<%([\s\S]+?)%>/g,
                            ts = /<%=([\s\S]+?)%>/g,
                            Sm =
                              /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                            Cm = /^\w*$/,
                            Wm =
                              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                            yu = /[\\^$.*+?()[\]{}|]/g,
                            Rm = RegExp(yu.source),
                            xu = /^\s+/,
                            Pm = /\s/,
                            Om = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                            Im = /\{\n\/\* \[wrapped with (.+)\] \*/,
                            Nm = /,? & /,
                            Lm = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                            Am = /[()=,{}\[\]\/\s]/,
                            Tm = /\\(\\)?/g,
                            Mm = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                            rs = /\w*$/,
                            Fm = /^[-+]0x[0-9a-f]+$/i,
                            zm = /^0b[01]+$/i,
                            Dm = /^\[object .+?Constructor\]$/,
                            $m = /^0o[0-7]+$/i,
                            Um = /^(?:0|[1-9]\d*)$/,
                            Gm = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                            Oo = /($^)/,
                            Bm = /['\n\r\u2028\u2029\\]/g,
                            Io = '\\ud800-\\udfff',
                            ns =
                              '\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff',
                            os = '\\u2700-\\u27bf',
                            is = 'a-z\\xdf-\\xf6\\xf8-\\xff',
                            as = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
                            us = '\\ufe0e\\ufe0f',
                            ls =
                              '\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
                            Vm = '[' + Io + ']',
                            ss = '[' + ls + ']',
                            No = '[' + ns + ']',
                            cs = '\\d+',
                            Hm = '[' + os + ']',
                            fs = '[' + is + ']',
                            ds = '[^' + Io + ls + cs + os + is + as + ']',
                            wu = '\\ud83c[\\udffb-\\udfff]',
                            ps = '[^' + Io + ']',
                            bu = '(?:\\ud83c[\\udde6-\\uddff]){2}',
                            ku = '[\\ud800-\\udbff][\\udc00-\\udfff]',
                            to = '[' + as + ']',
                            hs = '\\u200d',
                            ms = '(?:' + fs + '|' + ds + ')',
                            Zm = '(?:' + to + '|' + ds + ')',
                            gs = "(?:['’](?:d|ll|m|re|s|t|ve))?",
                            vs = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
                            ys = '(?:' + No + '|' + wu + ')?',
                            xs = '[' + us + ']?',
                            ws =
                              xs +
                              ys +
                              '(?:' +
                              hs +
                              '(?:' +
                              [ps, bu, ku].join('|') +
                              ')' +
                              xs +
                              ys +
                              ')*',
                            Ym = '(?:' + [Hm, bu, ku].join('|') + ')' + ws,
                            Km =
                              '(?:' +
                              [ps + No + '?', No, bu, ku, Vm].join('|') +
                              ')',
                            Qm = RegExp("['’]", 'g'),
                            Xm = RegExp(No, 'g'),
                            _u = RegExp(wu + '(?=' + wu + ')|' + Km + ws, 'g'),
                            Jm = RegExp(
                              [
                                to +
                                  '?' +
                                  fs +
                                  '+' +
                                  gs +
                                  '(?=' +
                                  [ss, to, '$'].join('|') +
                                  ')',
                                Zm +
                                  '+' +
                                  vs +
                                  '(?=' +
                                  [ss, to + ms, '$'].join('|') +
                                  ')',
                                to + '?' + ms + '+' + gs,
                                to + '+' + vs,
                                '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
                                '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
                                cs,
                                Ym,
                              ].join('|'),
                              'g'
                            ),
                            qm = RegExp('[' + hs + Io + ns + us + ']'),
                            _g =
                              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                            ev = [
                              'Array',
                              'Buffer',
                              'DataView',
                              'Date',
                              'Error',
                              'Float32Array',
                              'Float64Array',
                              'Function',
                              'Int8Array',
                              'Int16Array',
                              'Int32Array',
                              'Map',
                              'Math',
                              'Object',
                              'Promise',
                              'RegExp',
                              'Set',
                              'String',
                              'Symbol',
                              'TypeError',
                              'Uint8Array',
                              'Uint8ClampedArray',
                              'Uint16Array',
                              'Uint32Array',
                              'WeakMap',
                              '_',
                              'clearTimeout',
                              'isFinite',
                              'parseInt',
                              'setTimeout',
                            ],
                            tv = -1,
                            Er = {};
                          (Er[Lr] =
                            Er[Fr] =
                            Er[on] =
                            Er[hn] =
                            Er[_n] =
                            Er[Dt] =
                            Er[zt] =
                            Er[Zt] =
                            Er[cr] =
                              !0),
                            (Er[Vt] =
                              Er[Kt] =
                              Er[_r] =
                              Er[Wt] =
                              Er[kr] =
                              Er[At] =
                              Er[wt] =
                              Er[Ct] =
                              Er[Mt] =
                              Er[Ut] =
                              Er[Bt] =
                              Er[Qt] =
                              Er[Yt] =
                              Er[sr] =
                              Er[vr] =
                                !1);
                          var jr = {};
                          (jr[Vt] =
                            jr[Kt] =
                            jr[_r] =
                            jr[kr] =
                            jr[Wt] =
                            jr[At] =
                            jr[Lr] =
                            jr[Fr] =
                            jr[on] =
                            jr[hn] =
                            jr[_n] =
                            jr[Mt] =
                            jr[Ut] =
                            jr[Bt] =
                            jr[Qt] =
                            jr[Yt] =
                            jr[sr] =
                            jr[mr] =
                            jr[Dt] =
                            jr[zt] =
                            jr[Zt] =
                            jr[cr] =
                              !0),
                            (jr[wt] = jr[Ct] = jr[vr] = !1);
                          var rv = {
                              '\\': '\\',
                              "'": "'",
                              '\n': 'n',
                              '\r': 'r',
                              '\u2028': 'u2028',
                              '\u2029': 'u2029',
                            },
                            nv = parseFloat,
                            ov = parseInt,
                            bs =
                              typeof it.g == 'object' &&
                              it.g &&
                              it.g.Object === Object &&
                              it.g,
                            iv =
                              typeof self == 'object' &&
                              self &&
                              self.Object === Object &&
                              self,
                            Dr = bs || iv || Function('return this')(),
                            ks = mt && !mt.nodeType && mt,
                            mo = ks && gt && !gt.nodeType && gt,
                            _s = mo && mo.exports === ks,
                            ju = _s && bs.process,
                            an = (function () {
                              try {
                                return (
                                  (mo &&
                                    mo.require &&
                                    mo.require('util').types) ||
                                  (ju && ju.binding && ju.binding('util'))
                                );
                              } catch {}
                            })(),
                            js = an && an.isArrayBuffer,
                            Es = an && an.isDate,
                            Ss = an && an.isMap,
                            Cs = an && an.isRegExp,
                            Ws = an && an.isSet,
                            Rs = an && an.isTypedArray;
                          function en(_t, Lt, Tt) {
                            switch (Tt.length) {
                              case 0:
                                return _t.call(Lt);
                              case 1:
                                return _t.call(Lt, Tt[0]);
                              case 2:
                                return _t.call(Lt, Tt[0], Tt[1]);
                              case 3:
                                return _t.call(Lt, Tt[0], Tt[1], Tt[2]);
                            }
                            return _t.apply(Lt, Tt);
                          }
                          function av(_t, Lt, Tt, Xt) {
                            for (
                              var ur = -1, gr = _t == null ? 0 : _t.length;
                              ++ur < gr;

                            ) {
                              var Ar = _t[ur];
                              Lt(Xt, Ar, Tt(Ar), _t);
                            }
                            return Xt;
                          }
                          function un(_t, Lt) {
                            for (
                              var Tt = -1, Xt = _t == null ? 0 : _t.length;
                              ++Tt < Xt && Lt(_t[Tt], Tt, _t) !== !1;

                            );
                            return _t;
                          }
                          function uv(_t, Lt) {
                            for (
                              var Tt = _t == null ? 0 : _t.length;
                              Tt-- && Lt(_t[Tt], Tt, _t) !== !1;

                            );
                            return _t;
                          }
                          function Ps(_t, Lt) {
                            for (
                              var Tt = -1, Xt = _t == null ? 0 : _t.length;
                              ++Tt < Xt;

                            )
                              if (!Lt(_t[Tt], Tt, _t)) return !1;
                            return !0;
                          }
                          function An(_t, Lt) {
                            for (
                              var Tt = -1,
                                Xt = _t == null ? 0 : _t.length,
                                ur = 0,
                                gr = [];
                              ++Tt < Xt;

                            ) {
                              var Ar = _t[Tt];
                              Lt(Ar, Tt, _t) && (gr[ur++] = Ar);
                            }
                            return gr;
                          }
                          function Lo(_t, Lt) {
                            return (
                              !(_t == null || !_t.length) && ro(_t, Lt, 0) > -1
                            );
                          }
                          function Eu(_t, Lt, Tt) {
                            for (
                              var Xt = -1, ur = _t == null ? 0 : _t.length;
                              ++Xt < ur;

                            )
                              if (Tt(Lt, _t[Xt])) return !0;
                            return !1;
                          }
                          function Wr(_t, Lt) {
                            for (
                              var Tt = -1,
                                Xt = _t == null ? 0 : _t.length,
                                ur = Array(Xt);
                              ++Tt < Xt;

                            )
                              ur[Tt] = Lt(_t[Tt], Tt, _t);
                            return ur;
                          }
                          function Tn(_t, Lt) {
                            for (
                              var Tt = -1, Xt = Lt.length, ur = _t.length;
                              ++Tt < Xt;

                            )
                              _t[ur + Tt] = Lt[Tt];
                            return _t;
                          }
                          function Su(_t, Lt, Tt, Xt) {
                            var ur = -1,
                              gr = _t == null ? 0 : _t.length;
                            for (Xt && gr && (Tt = _t[++ur]); ++ur < gr; )
                              Tt = Lt(Tt, _t[ur], ur, _t);
                            return Tt;
                          }
                          function lv(_t, Lt, Tt, Xt) {
                            var ur = _t == null ? 0 : _t.length;
                            for (Xt && ur && (Tt = _t[--ur]); ur--; )
                              Tt = Lt(Tt, _t[ur], ur, _t);
                            return Tt;
                          }
                          function Cu(_t, Lt) {
                            for (
                              var Tt = -1, Xt = _t == null ? 0 : _t.length;
                              ++Tt < Xt;

                            )
                              if (Lt(_t[Tt], Tt, _t)) return !0;
                            return !1;
                          }
                          var sv = Wu('length');
                          function Os(_t, Lt, Tt) {
                            var Xt;
                            return (
                              Tt(_t, function (ur, gr, Ar) {
                                if (Lt(ur, gr, Ar)) return (Xt = gr), !1;
                              }),
                              Xt
                            );
                          }
                          function Ao(_t, Lt, Tt, Xt) {
                            for (
                              var ur = _t.length, gr = Tt + (Xt ? 1 : -1);
                              Xt ? gr-- : ++gr < ur;

                            )
                              if (Lt(_t[gr], gr, _t)) return gr;
                            return -1;
                          }
                          function ro(_t, Lt, Tt) {
                            return Lt == Lt
                              ? (function (Xt, ur, gr) {
                                  for (
                                    var Ar = gr - 1, yn = Xt.length;
                                    ++Ar < yn;

                                  )
                                    if (Xt[Ar] === ur) return Ar;
                                  return -1;
                                })(_t, Lt, Tt)
                              : Ao(_t, Is, Tt);
                          }
                          function cv(_t, Lt, Tt, Xt) {
                            for (var ur = Tt - 1, gr = _t.length; ++ur < gr; )
                              if (Xt(_t[ur], Lt)) return ur;
                            return -1;
                          }
                          function Is(_t) {
                            return _t != _t;
                          }
                          function Ns(_t, Lt) {
                            var Tt = _t == null ? 0 : _t.length;
                            return Tt ? Pu(_t, Lt) / Tt : Et;
                          }
                          function Wu(_t) {
                            return function (Lt) {
                              return Lt == null ? b : Lt[_t];
                            };
                          }
                          function Ru(_t) {
                            return function (Lt) {
                              return _t == null ? b : _t[Lt];
                            };
                          }
                          function Ls(_t, Lt, Tt, Xt, ur) {
                            return (
                              ur(_t, function (gr, Ar, yn) {
                                Tt = Xt ? ((Xt = !1), gr) : Lt(Tt, gr, Ar, yn);
                              }),
                              Tt
                            );
                          }
                          function Pu(_t, Lt) {
                            for (var Tt, Xt = -1, ur = _t.length; ++Xt < ur; ) {
                              var gr = Lt(_t[Xt]);
                              gr !== b && (Tt = Tt === b ? gr : Tt + gr);
                            }
                            return Tt;
                          }
                          function Ou(_t, Lt) {
                            for (var Tt = -1, Xt = Array(_t); ++Tt < _t; )
                              Xt[Tt] = Lt(Tt);
                            return Xt;
                          }
                          function As(_t) {
                            return (
                              _t && _t.slice(0, zs(_t) + 1).replace(xu, '')
                            );
                          }
                          function tn(_t) {
                            return function (Lt) {
                              return _t(Lt);
                            };
                          }
                          function Iu(_t, Lt) {
                            return Wr(Lt, function (Tt) {
                              return _t[Tt];
                            });
                          }
                          function go(_t, Lt) {
                            return _t.has(Lt);
                          }
                          function Ts(_t, Lt) {
                            for (
                              var Tt = -1, Xt = _t.length;
                              ++Tt < Xt && ro(Lt, _t[Tt], 0) > -1;

                            );
                            return Tt;
                          }
                          function Ms(_t, Lt) {
                            for (
                              var Tt = _t.length;
                              Tt-- && ro(Lt, _t[Tt], 0) > -1;

                            );
                            return Tt;
                          }
                          var fv = Ru({
                              À: 'A',
                              Á: 'A',
                              Â: 'A',
                              Ã: 'A',
                              Ä: 'A',
                              Å: 'A',
                              à: 'a',
                              á: 'a',
                              â: 'a',
                              ã: 'a',
                              ä: 'a',
                              å: 'a',
                              Ç: 'C',
                              ç: 'c',
                              Ð: 'D',
                              ð: 'd',
                              È: 'E',
                              É: 'E',
                              Ê: 'E',
                              Ë: 'E',
                              è: 'e',
                              é: 'e',
                              ê: 'e',
                              ë: 'e',
                              Ì: 'I',
                              Í: 'I',
                              Î: 'I',
                              Ï: 'I',
                              ì: 'i',
                              í: 'i',
                              î: 'i',
                              ï: 'i',
                              Ñ: 'N',
                              ñ: 'n',
                              Ò: 'O',
                              Ó: 'O',
                              Ô: 'O',
                              Õ: 'O',
                              Ö: 'O',
                              Ø: 'O',
                              ò: 'o',
                              ó: 'o',
                              ô: 'o',
                              õ: 'o',
                              ö: 'o',
                              ø: 'o',
                              Ù: 'U',
                              Ú: 'U',
                              Û: 'U',
                              Ü: 'U',
                              ù: 'u',
                              ú: 'u',
                              û: 'u',
                              ü: 'u',
                              Ý: 'Y',
                              ý: 'y',
                              ÿ: 'y',
                              Æ: 'Ae',
                              æ: 'ae',
                              Þ: 'Th',
                              þ: 'th',
                              ß: 'ss',
                              Ā: 'A',
                              Ă: 'A',
                              Ą: 'A',
                              ā: 'a',
                              ă: 'a',
                              ą: 'a',
                              Ć: 'C',
                              Ĉ: 'C',
                              Ċ: 'C',
                              Č: 'C',
                              ć: 'c',
                              ĉ: 'c',
                              ċ: 'c',
                              č: 'c',
                              Ď: 'D',
                              Đ: 'D',
                              ď: 'd',
                              đ: 'd',
                              Ē: 'E',
                              Ĕ: 'E',
                              Ė: 'E',
                              Ę: 'E',
                              Ě: 'E',
                              ē: 'e',
                              ĕ: 'e',
                              ė: 'e',
                              ę: 'e',
                              ě: 'e',
                              Ĝ: 'G',
                              Ğ: 'G',
                              Ġ: 'G',
                              Ģ: 'G',
                              ĝ: 'g',
                              ğ: 'g',
                              ġ: 'g',
                              ģ: 'g',
                              Ĥ: 'H',
                              Ħ: 'H',
                              ĥ: 'h',
                              ħ: 'h',
                              Ĩ: 'I',
                              Ī: 'I',
                              Ĭ: 'I',
                              Į: 'I',
                              İ: 'I',
                              ĩ: 'i',
                              ī: 'i',
                              ĭ: 'i',
                              į: 'i',
                              ı: 'i',
                              Ĵ: 'J',
                              ĵ: 'j',
                              Ķ: 'K',
                              ķ: 'k',
                              ĸ: 'k',
                              Ĺ: 'L',
                              Ļ: 'L',
                              Ľ: 'L',
                              Ŀ: 'L',
                              Ł: 'L',
                              ĺ: 'l',
                              ļ: 'l',
                              ľ: 'l',
                              ŀ: 'l',
                              ł: 'l',
                              Ń: 'N',
                              Ņ: 'N',
                              Ň: 'N',
                              Ŋ: 'N',
                              ń: 'n',
                              ņ: 'n',
                              ň: 'n',
                              ŋ: 'n',
                              Ō: 'O',
                              Ŏ: 'O',
                              Ő: 'O',
                              ō: 'o',
                              ŏ: 'o',
                              ő: 'o',
                              Ŕ: 'R',
                              Ŗ: 'R',
                              Ř: 'R',
                              ŕ: 'r',
                              ŗ: 'r',
                              ř: 'r',
                              Ś: 'S',
                              Ŝ: 'S',
                              Ş: 'S',
                              Š: 'S',
                              ś: 's',
                              ŝ: 's',
                              ş: 's',
                              š: 's',
                              Ţ: 'T',
                              Ť: 'T',
                              Ŧ: 'T',
                              ţ: 't',
                              ť: 't',
                              ŧ: 't',
                              Ũ: 'U',
                              Ū: 'U',
                              Ŭ: 'U',
                              Ů: 'U',
                              Ű: 'U',
                              Ų: 'U',
                              ũ: 'u',
                              ū: 'u',
                              ŭ: 'u',
                              ů: 'u',
                              ű: 'u',
                              ų: 'u',
                              Ŵ: 'W',
                              ŵ: 'w',
                              Ŷ: 'Y',
                              ŷ: 'y',
                              Ÿ: 'Y',
                              Ź: 'Z',
                              Ż: 'Z',
                              Ž: 'Z',
                              ź: 'z',
                              ż: 'z',
                              ž: 'z',
                              Ĳ: 'IJ',
                              ĳ: 'ij',
                              Œ: 'Oe',
                              œ: 'oe',
                              ŉ: "'n",
                              ſ: 's',
                            }),
                            dv = Ru({
                              '&': '&amp;',
                              '<': '&lt;',
                              '>': '&gt;',
                              '"': '&quot;',
                              "'": '&#39;',
                            });
                          function pv(_t) {
                            return '\\' + rv[_t];
                          }
                          function no(_t) {
                            return qm.test(_t);
                          }
                          function Nu(_t) {
                            var Lt = -1,
                              Tt = Array(_t.size);
                            return (
                              _t.forEach(function (Xt, ur) {
                                Tt[++Lt] = [ur, Xt];
                              }),
                              Tt
                            );
                          }
                          function Fs(_t, Lt) {
                            return function (Tt) {
                              return _t(Lt(Tt));
                            };
                          }
                          function Mn(_t, Lt) {
                            for (
                              var Tt = -1, Xt = _t.length, ur = 0, gr = [];
                              ++Tt < Xt;

                            ) {
                              var Ar = _t[Tt];
                              (Ar !== Lt && Ar !== st) ||
                                ((_t[Tt] = st), (gr[ur++] = Tt));
                            }
                            return gr;
                          }
                          function To(_t) {
                            var Lt = -1,
                              Tt = Array(_t.size);
                            return (
                              _t.forEach(function (Xt) {
                                Tt[++Lt] = Xt;
                              }),
                              Tt
                            );
                          }
                          function oo(_t) {
                            return no(_t)
                              ? (function (Lt) {
                                  for (
                                    var Tt = (_u.lastIndex = 0);
                                    _u.test(Lt);

                                  )
                                    ++Tt;
                                  return Tt;
                                })(_t)
                              : sv(_t);
                          }
                          function mn(_t) {
                            return no(_t)
                              ? (function (Lt) {
                                  return Lt.match(_u) || [];
                                })(_t)
                              : (function (Lt) {
                                  return Lt.split('');
                                })(_t);
                          }
                          function zs(_t) {
                            for (
                              var Lt = _t.length;
                              Lt-- && Pm.test(_t.charAt(Lt));

                            );
                            return Lt;
                          }
                          var hv = Ru({
                              '&amp;': '&',
                              '&lt;': '<',
                              '&gt;': '>',
                              '&quot;': '"',
                              '&#39;': "'",
                            }),
                            Mo = (function _t(Lt) {
                              var Tt,
                                Xt = (Lt =
                                  Lt == null
                                    ? Dr
                                    : Mo.defaults(
                                        Dr.Object(),
                                        Lt,
                                        Mo.pick(Dr, ev)
                                      )).Array,
                                ur = Lt.Date,
                                gr = Lt.Error,
                                Ar = Lt.Function,
                                yn = Lt.Math,
                                Sr = Lt.Object,
                                Lu = Lt.RegExp,
                                mv = Lt.String,
                                ln = Lt.TypeError,
                                Fo = Xt.prototype,
                                gv = Ar.prototype,
                                io = Sr.prototype,
                                zo = Lt['__core-js_shared__'],
                                Do = gv.toString,
                                br = io.hasOwnProperty,
                                vv = 0,
                                Ds = (Tt = /[^.]+$/.exec(
                                  (zo && zo.keys && zo.keys.IE_PROTO) || ''
                                ))
                                  ? 'Symbol(src)_1.' + Tt
                                  : '',
                                $o = io.toString,
                                yv = Do.call(Sr),
                                xv = Dr._,
                                wv = Lu(
                                  '^' +
                                    Do.call(br)
                                      .replace(yu, '\\$&')
                                      .replace(
                                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                                        '$1.*?'
                                      ) +
                                    '$'
                                ),
                                Uo = _s ? Lt.Buffer : b,
                                Fn = Lt.Symbol,
                                Go = Lt.Uint8Array,
                                $s = Uo ? Uo.allocUnsafe : b,
                                Bo = Fs(Sr.getPrototypeOf, Sr),
                                Us = Sr.create,
                                Gs = io.propertyIsEnumerable,
                                Vo = Fo.splice,
                                Bs = Fn ? Fn.isConcatSpreadable : b,
                                vo = Fn ? Fn.iterator : b,
                                Hn = Fn ? Fn.toStringTag : b,
                                Ho = (function () {
                                  try {
                                    var i = Xn(Sr, 'defineProperty');
                                    return i({}, '', {}), i;
                                  } catch {}
                                })(),
                                bv =
                                  Lt.clearTimeout !== Dr.clearTimeout &&
                                  Lt.clearTimeout,
                                kv = ur && ur.now !== Dr.Date.now && ur.now,
                                _v =
                                  Lt.setTimeout !== Dr.setTimeout &&
                                  Lt.setTimeout,
                                Zo = yn.ceil,
                                Yo = yn.floor,
                                Au = Sr.getOwnPropertySymbols,
                                jv = Uo ? Uo.isBuffer : b,
                                Vs = Lt.isFinite,
                                Ev = Fo.join,
                                Sv = Fs(Sr.keys, Sr),
                                Tr = yn.max,
                                Br = yn.min,
                                Cv = ur.now,
                                Wv = Lt.parseInt,
                                Hs = yn.random,
                                Rv = Fo.reverse,
                                Tu = Xn(Lt, 'DataView'),
                                yo = Xn(Lt, 'Map'),
                                Mu = Xn(Lt, 'Promise'),
                                ao = Xn(Lt, 'Set'),
                                xo = Xn(Lt, 'WeakMap'),
                                wo = Xn(Sr, 'create'),
                                Ko = xo && new xo(),
                                uo = {},
                                Pv = Jn(Tu),
                                Ov = Jn(yo),
                                Iv = Jn(Mu),
                                Nv = Jn(ao),
                                Lv = Jn(xo),
                                Qo = Fn ? Fn.prototype : b,
                                bo = Qo ? Qo.valueOf : b,
                                Zs = Qo ? Qo.toString : b;
                              function tt(i) {
                                if (Pr(i) && !fr(i) && !(i instanceof hr)) {
                                  if (i instanceof sn) return i;
                                  if (br.call(i, '__wrapped__')) return Vp(i);
                                }
                                return new sn(i);
                              }
                              var lo = (function () {
                                function i() {}
                                return function (s) {
                                  if (!Rr(s)) return {};
                                  if (Us) return Us(s);
                                  i.prototype = s;
                                  var h = new i();
                                  return (i.prototype = b), h;
                                };
                              })();
                              function Xo() {}
                              function sn(i, s) {
                                (this.__wrapped__ = i),
                                  (this.__actions__ = []),
                                  (this.__chain__ = !!s),
                                  (this.__index__ = 0),
                                  (this.__values__ = b);
                              }
                              function hr(i) {
                                (this.__wrapped__ = i),
                                  (this.__actions__ = []),
                                  (this.__dir__ = 1),
                                  (this.__filtered__ = !1),
                                  (this.__iteratees__ = []),
                                  (this.__takeCount__ = Rt),
                                  (this.__views__ = []);
                              }
                              function Zn(i) {
                                var s = -1,
                                  h = i == null ? 0 : i.length;
                                for (this.clear(); ++s < h; ) {
                                  var _ = i[s];
                                  this.set(_[0], _[1]);
                                }
                              }
                              function En(i) {
                                var s = -1,
                                  h = i == null ? 0 : i.length;
                                for (this.clear(); ++s < h; ) {
                                  var _ = i[s];
                                  this.set(_[0], _[1]);
                                }
                              }
                              function Sn(i) {
                                var s = -1,
                                  h = i == null ? 0 : i.length;
                                for (this.clear(); ++s < h; ) {
                                  var _ = i[s];
                                  this.set(_[0], _[1]);
                                }
                              }
                              function Yn(i) {
                                var s = -1,
                                  h = i == null ? 0 : i.length;
                                for (this.__data__ = new Sn(); ++s < h; )
                                  this.add(i[s]);
                              }
                              function gn(i) {
                                var s = (this.__data__ = new En(i));
                                this.size = s.size;
                              }
                              function Ys(i, s) {
                                var h = fr(i),
                                  _ = !h && qn(i),
                                  _e = !h && !_ && Gn(i),
                                  ot = !h && !_ && !_e && po(i),
                                  ft = h || _ || _e || ot,
                                  ht = ft ? Ou(i.length, mv) : [],
                                  xt = ht.length;
                                for (var It in i)
                                  (!s && !br.call(i, It)) ||
                                    (ft &&
                                      (It == 'length' ||
                                        (_e &&
                                          (It == 'offset' || It == 'parent')) ||
                                        (ot &&
                                          (It == 'buffer' ||
                                            It == 'byteLength' ||
                                            It == 'byteOffset')) ||
                                        Pn(It, xt))) ||
                                    ht.push(It);
                                return ht;
                              }
                              function Ks(i) {
                                var s = i.length;
                                return s ? i[Yu(0, s - 1)] : b;
                              }
                              function Av(i, s) {
                                return ou(Qr(i), Kn(s, 0, i.length));
                              }
                              function Tv(i) {
                                return ou(Qr(i));
                              }
                              function Fu(i, s, h) {
                                ((h !== b && !vn(i[s], h)) ||
                                  (h === b && !(s in i))) &&
                                  Cn(i, s, h);
                              }
                              function ko(i, s, h) {
                                var _ = i[s];
                                (br.call(i, s) &&
                                  vn(_, h) &&
                                  (h !== b || s in i)) ||
                                  Cn(i, s, h);
                              }
                              function Jo(i, s) {
                                for (var h = i.length; h--; )
                                  if (vn(i[h][0], s)) return h;
                                return -1;
                              }
                              function Mv(i, s, h, _) {
                                return (
                                  zn(i, function (_e, ot, ft) {
                                    s(_, _e, h(_e), ft);
                                  }),
                                  _
                                );
                              }
                              function Qs(i, s) {
                                return i && wn(s, zr(s), i);
                              }
                              function Cn(i, s, h) {
                                s == '__proto__' && Ho
                                  ? Ho(i, s, {
                                      configurable: !0,
                                      enumerable: !0,
                                      value: h,
                                      writable: !0,
                                    })
                                  : (i[s] = h);
                              }
                              function zu(i, s) {
                                for (
                                  var h = -1,
                                    _ = s.length,
                                    _e = Xt(_),
                                    ot = i == null;
                                  ++h < _;

                                )
                                  _e[h] = ot ? b : Gl(i, s[h]);
                                return _e;
                              }
                              function Kn(i, s, h) {
                                return (
                                  i == i &&
                                    (h !== b && (i = i <= h ? i : h),
                                    s !== b && (i = i >= s ? i : s)),
                                  i
                                );
                              }
                              function cn(i, s, h, _, _e, ot) {
                                var ft,
                                  ht = 1 & s,
                                  xt = 2 & s,
                                  It = 4 & s;
                                if (
                                  (h && (ft = _e ? h(i, _, _e, ot) : h(i)),
                                  ft !== b)
                                )
                                  return ft;
                                if (!Rr(i)) return i;
                                var Ot = fr(i);
                                if (Ot) {
                                  if (
                                    ((ft = (function (Nt) {
                                      var Gt = Nt.length,
                                        nr = new Nt.constructor(Gt);
                                      return (
                                        Gt &&
                                          typeof Nt[0] == 'string' &&
                                          br.call(Nt, 'index') &&
                                          ((nr.index = Nt.index),
                                          (nr.input = Nt.input)),
                                        nr
                                      );
                                    })(i)),
                                    !ht)
                                  )
                                    return Qr(i, ft);
                                } else {
                                  var $t = Vr(i),
                                    Jt = $t == Ct || $t == St;
                                  if (Gn(i)) return vp(i, ht);
                                  if ($t == Bt || $t == Vt || (Jt && !_e)) {
                                    if (((ft = xt || Jt ? {} : Tp(i)), !ht))
                                      return xt
                                        ? (function (Nt, Gt) {
                                            return wn(Nt, Lp(Nt), Gt);
                                          })(
                                            i,
                                            (function (Nt, Gt) {
                                              return Nt && wn(Gt, Jr(Gt), Nt);
                                            })(ft, i)
                                          )
                                        : (function (Nt, Gt) {
                                            return wn(Nt, Pl(Nt), Gt);
                                          })(i, Qs(ft, i));
                                  } else {
                                    if (!jr[$t]) return _e ? i : {};
                                    ft = (function (Nt, Gt, nr) {
                                      var Ht,
                                        lr = Nt.constructor;
                                      switch (Gt) {
                                        case _r:
                                          return xl(Nt);
                                        case Wt:
                                        case At:
                                          return new lr(+Nt);
                                        case kr:
                                          return (function (ar, yr) {
                                            var tr = yr
                                              ? xl(ar.buffer)
                                              : ar.buffer;
                                            return new ar.constructor(
                                              tr,
                                              ar.byteOffset,
                                              ar.byteLength
                                            );
                                          })(Nt, nr);
                                        case Lr:
                                        case Fr:
                                        case on:
                                        case hn:
                                        case _n:
                                        case Dt:
                                        case zt:
                                        case Zt:
                                        case cr:
                                          return yp(Nt, nr);
                                        case Mt:
                                          return new lr();
                                        case Ut:
                                        case sr:
                                          return new lr(Nt);
                                        case Qt:
                                          return (function (ar) {
                                            var yr = new ar.constructor(
                                              ar.source,
                                              rs.exec(ar)
                                            );
                                            return (
                                              (yr.lastIndex = ar.lastIndex), yr
                                            );
                                          })(Nt);
                                        case Yt:
                                          return new lr();
                                        case mr:
                                          return (
                                            (Ht = Nt), bo ? Sr(bo.call(Ht)) : {}
                                          );
                                      }
                                    })(i, $t, ht);
                                  }
                                }
                                ot || (ot = new gn());
                                var qt = ot.get(i);
                                if (qt) return qt;
                                ot.set(i, ft),
                                  lm(i)
                                    ? i.forEach(function (Nt) {
                                        ft.add(cn(Nt, s, h, Nt, i, ot));
                                      })
                                    : am(i) &&
                                      i.forEach(function (Nt, Gt) {
                                        ft.set(Gt, cn(Nt, s, h, Gt, i, ot));
                                      });
                                var rr = Ot
                                  ? b
                                  : (It ? (xt ? Cl : Sl) : xt ? Jr : zr)(i);
                                return (
                                  un(rr || i, function (Nt, Gt) {
                                    rr && (Nt = i[(Gt = Nt)]),
                                      ko(ft, Gt, cn(Nt, s, h, Gt, i, ot));
                                  }),
                                  ft
                                );
                              }
                              function Xs(i, s, h) {
                                var _ = h.length;
                                if (i == null) return !_;
                                for (i = Sr(i); _--; ) {
                                  var _e = h[_],
                                    ot = s[_e],
                                    ft = i[_e];
                                  if ((ft === b && !(_e in i)) || !ot(ft))
                                    return !1;
                                }
                                return !0;
                              }
                              function Js(i, s, h) {
                                if (typeof i != 'function') throw new ln(ut);
                                return Ro(function () {
                                  i.apply(b, h);
                                }, s);
                              }
                              function _o(i, s, h, _) {
                                var _e = -1,
                                  ot = Lo,
                                  ft = !0,
                                  ht = i.length,
                                  xt = [],
                                  It = s.length;
                                if (!ht) return xt;
                                h && (s = Wr(s, tn(h))),
                                  _
                                    ? ((ot = Eu), (ft = !1))
                                    : s.length >= 200 &&
                                      ((ot = go), (ft = !1), (s = new Yn(s)));
                                e: for (; ++_e < ht; ) {
                                  var Ot = i[_e],
                                    $t = h == null ? Ot : h(Ot);
                                  if (
                                    ((Ot = _ || Ot !== 0 ? Ot : 0),
                                    ft && $t == $t)
                                  ) {
                                    for (var Jt = It; Jt--; )
                                      if (s[Jt] === $t) continue e;
                                    xt.push(Ot);
                                  } else ot(s, $t, _) || xt.push(Ot);
                                }
                                return xt;
                              }
                              (tt.templateSettings = {
                                escape: jn,
                                evaluate: Em,
                                interpolate: ts,
                                variable: '',
                                imports: { _: tt },
                              }),
                                (tt.prototype = Xo.prototype),
                                (tt.prototype.constructor = tt),
                                (sn.prototype = lo(Xo.prototype)),
                                (sn.prototype.constructor = sn),
                                (hr.prototype = lo(Xo.prototype)),
                                (hr.prototype.constructor = hr),
                                (Zn.prototype.clear = function () {
                                  (this.__data__ = wo ? wo(null) : {}),
                                    (this.size = 0);
                                }),
                                (Zn.prototype.delete = function (i) {
                                  var s =
                                    this.has(i) && delete this.__data__[i];
                                  return (this.size -= s ? 1 : 0), s;
                                }),
                                (Zn.prototype.get = function (i) {
                                  var s = this.__data__;
                                  if (wo) {
                                    var h = s[i];
                                    return h === pt ? b : h;
                                  }
                                  return br.call(s, i) ? s[i] : b;
                                }),
                                (Zn.prototype.has = function (i) {
                                  var s = this.__data__;
                                  return wo ? s[i] !== b : br.call(s, i);
                                }),
                                (Zn.prototype.set = function (i, s) {
                                  var h = this.__data__;
                                  return (
                                    (this.size += this.has(i) ? 0 : 1),
                                    (h[i] = wo && s === b ? pt : s),
                                    this
                                  );
                                }),
                                (En.prototype.clear = function () {
                                  (this.__data__ = []), (this.size = 0);
                                }),
                                (En.prototype.delete = function (i) {
                                  var s = this.__data__,
                                    h = Jo(s, i);
                                  return !(
                                    h < 0 ||
                                    (h == s.length - 1
                                      ? s.pop()
                                      : Vo.call(s, h, 1),
                                    --this.size,
                                    0)
                                  );
                                }),
                                (En.prototype.get = function (i) {
                                  var s = this.__data__,
                                    h = Jo(s, i);
                                  return h < 0 ? b : s[h][1];
                                }),
                                (En.prototype.has = function (i) {
                                  return Jo(this.__data__, i) > -1;
                                }),
                                (En.prototype.set = function (i, s) {
                                  var h = this.__data__,
                                    _ = Jo(h, i);
                                  return (
                                    _ < 0
                                      ? (++this.size, h.push([i, s]))
                                      : (h[_][1] = s),
                                    this
                                  );
                                }),
                                (Sn.prototype.clear = function () {
                                  (this.size = 0),
                                    (this.__data__ = {
                                      hash: new Zn(),
                                      map: new (yo || En)(),
                                      string: new Zn(),
                                    });
                                }),
                                (Sn.prototype.delete = function (i) {
                                  var s = nu(this, i).delete(i);
                                  return (this.size -= s ? 1 : 0), s;
                                }),
                                (Sn.prototype.get = function (i) {
                                  return nu(this, i).get(i);
                                }),
                                (Sn.prototype.has = function (i) {
                                  return nu(this, i).has(i);
                                }),
                                (Sn.prototype.set = function (i, s) {
                                  var h = nu(this, i),
                                    _ = h.size;
                                  return (
                                    h.set(i, s),
                                    (this.size += h.size == _ ? 0 : 1),
                                    this
                                  );
                                }),
                                (Yn.prototype.add = Yn.prototype.push =
                                  function (i) {
                                    return this.__data__.set(i, pt), this;
                                  }),
                                (Yn.prototype.has = function (i) {
                                  return this.__data__.has(i);
                                }),
                                (gn.prototype.clear = function () {
                                  (this.__data__ = new En()), (this.size = 0);
                                }),
                                (gn.prototype.delete = function (i) {
                                  var s = this.__data__,
                                    h = s.delete(i);
                                  return (this.size = s.size), h;
                                }),
                                (gn.prototype.get = function (i) {
                                  return this.__data__.get(i);
                                }),
                                (gn.prototype.has = function (i) {
                                  return this.__data__.has(i);
                                }),
                                (gn.prototype.set = function (i, s) {
                                  var h = this.__data__;
                                  if (h instanceof En) {
                                    var _ = h.__data__;
                                    if (!yo || _.length < 199)
                                      return (
                                        _.push([i, s]),
                                        (this.size = ++h.size),
                                        this
                                      );
                                    h = this.__data__ = new Sn(_);
                                  }
                                  return (
                                    h.set(i, s), (this.size = h.size), this
                                  );
                                });
                              var zn = kp(xn),
                                qs = kp($u, !0);
                              function Fv(i, s) {
                                var h = !0;
                                return (
                                  zn(i, function (_, _e, ot) {
                                    return (h = !!s(_, _e, ot));
                                  }),
                                  h
                                );
                              }
                              function qo(i, s, h) {
                                for (var _ = -1, _e = i.length; ++_ < _e; ) {
                                  var ot = i[_],
                                    ft = s(ot);
                                  if (
                                    ft != null &&
                                    (ht === b ? ft == ft && !nn(ft) : h(ft, ht))
                                  )
                                    var ht = ft,
                                      xt = ot;
                                }
                                return xt;
                              }
                              function _c(i, s) {
                                var h = [];
                                return (
                                  zn(i, function (_, _e, ot) {
                                    s(_, _e, ot) && h.push(_);
                                  }),
                                  h
                                );
                              }
                              function $r(i, s, h, _, _e) {
                                var ot = -1,
                                  ft = i.length;
                                for (
                                  h || (h = Kv), _e || (_e = []);
                                  ++ot < ft;

                                ) {
                                  var ht = i[ot];
                                  s > 0 && h(ht)
                                    ? s > 1
                                      ? $r(ht, s - 1, h, _, _e)
                                      : Tn(_e, ht)
                                    : _ || (_e[_e.length] = ht);
                                }
                                return _e;
                              }
                              var Du = _p(),
                                _f = _p(!0);
                              function xn(i, s) {
                                return i && Du(i, s, zr);
                              }
                              function $u(i, s) {
                                return i && _f(i, s, zr);
                              }
                              function _i(i, s) {
                                return An(s, function (h) {
                                  return On(i[h]);
                                });
                              }
                              function Qn(i, s) {
                                for (
                                  var h = 0, _ = (s = $n(s, i)).length;
                                  i != null && h < _;

                                )
                                  i = i[bn(s[h++])];
                                return h && h == _ ? i : b;
                              }
                              function _d(i, s, h) {
                                var _ = s(i);
                                return fr(i) ? _ : Tn(_, h(i));
                              }
                              function Zr(i) {
                                return i == null
                                  ? i === b
                                    ? '[object Undefined]'
                                    : '[object Null]'
                                  : Hn && Hn in Sr(i)
                                  ? (function (s) {
                                      var h = br.call(s, Hn),
                                        _ = s[Hn];
                                      try {
                                        s[Hn] = b;
                                        var _e = !0;
                                      } catch {}
                                      var ot = $o.call(s);
                                      return (
                                        _e && (h ? (s[Hn] = _) : delete s[Hn]),
                                        ot
                                      );
                                    })(i)
                                  : (function (s) {
                                      return $o.call(s);
                                    })(i);
                              }
                              function Uu(i, s) {
                                return i > s;
                              }
                              function zv(i, s) {
                                return i != null && br.call(i, s);
                              }
                              function Dv(i, s) {
                                return i != null && s in Sr(i);
                              }
                              function Gu(i, s, h) {
                                for (
                                  var _ = h ? Eu : Lo,
                                    _e = i[0].length,
                                    ot = i.length,
                                    ft = ot,
                                    ht = Xt(ot),
                                    xt = 1 / 0,
                                    It = [];
                                  ft--;

                                ) {
                                  var Ot = i[ft];
                                  ft && s && (Ot = Wr(Ot, tn(s))),
                                    (xt = Br(Ot.length, xt)),
                                    (ht[ft] =
                                      !h &&
                                      (s || (_e >= 120 && Ot.length >= 120))
                                        ? new Yn(ft && Ot)
                                        : b);
                                }
                                Ot = i[0];
                                var $t = -1,
                                  Jt = ht[0];
                                e: for (; ++$t < _e && It.length < xt; ) {
                                  var qt = Ot[$t],
                                    rr = s ? s(qt) : qt;
                                  if (
                                    ((qt = h || qt !== 0 ? qt : 0),
                                    !(Jt ? go(Jt, rr) : _(It, rr, h)))
                                  ) {
                                    for (ft = ot; --ft; ) {
                                      var Nt = ht[ft];
                                      if (!(Nt ? go(Nt, rr) : _(i[ft], rr, h)))
                                        continue e;
                                    }
                                    Jt && Jt.push(rr), It.push(qt);
                                  }
                                }
                                return It;
                              }
                              function jo(i, s, h) {
                                var _ =
                                  (i = Dp(i, (s = $n(s, i)))) == null
                                    ? i
                                    : i[bn(dn(s))];
                                return _ == null ? b : en(_, i, h);
                              }
                              function ep(i) {
                                return Pr(i) && Zr(i) == Vt;
                              }
                              function Eo(i, s, h, _, _e) {
                                return (
                                  i === s ||
                                  (i == null || s == null || (!Pr(i) && !Pr(s))
                                    ? i != i && s != s
                                    : (function (ot, ft, ht, xt, It, Ot) {
                                        var $t = fr(ot),
                                          Jt = fr(ft),
                                          qt = $t ? Kt : Vr(ot),
                                          rr = Jt ? Kt : Vr(ft),
                                          Nt = (qt = qt == Vt ? Bt : qt) == Bt,
                                          Gt = (rr = rr == Vt ? Bt : rr) == Bt,
                                          nr = qt == rr;
                                        if (nr && Gn(ot)) {
                                          if (!Gn(ft)) return !1;
                                          ($t = !0), (Nt = !1);
                                        }
                                        if (nr && !Nt)
                                          return (
                                            Ot || (Ot = new gn()),
                                            $t || po(ot)
                                              ? Np(ot, ft, ht, xt, It, Ot)
                                              : (function (
                                                  tr,
                                                  ir,
                                                  Mr,
                                                  Nr,
                                                  Kr,
                                                  Cr,
                                                  Hr
                                                ) {
                                                  switch (Mr) {
                                                    case kr:
                                                      if (
                                                        tr.byteLength !=
                                                          ir.byteLength ||
                                                        tr.byteOffset !=
                                                          ir.byteOffset
                                                      )
                                                        return !1;
                                                      (tr = tr.buffer),
                                                        (ir = ir.buffer);
                                                    case _r:
                                                      return !(
                                                        tr.byteLength !=
                                                          ir.byteLength ||
                                                        !Cr(
                                                          new Go(tr),
                                                          new Go(ir)
                                                        )
                                                      );
                                                    case Wt:
                                                    case At:
                                                    case Ut:
                                                      return vn(+tr, +ir);
                                                    case wt:
                                                      return (
                                                        tr.name == ir.name &&
                                                        tr.message == ir.message
                                                      );
                                                    case Qt:
                                                    case sr:
                                                      return tr == ir + '';
                                                    case Mt:
                                                      var kn = Nu;
                                                    case Yt:
                                                      var Bn = 1 & Nr;
                                                      if (
                                                        (kn || (kn = To),
                                                        tr.size != ir.size &&
                                                          !Bn)
                                                      )
                                                        return !1;
                                                      var eo = Hr.get(tr);
                                                      if (eo) return eo == ir;
                                                      (Nr |= 2), Hr.set(tr, ir);
                                                      var Nn = Np(
                                                        kn(tr),
                                                        kn(ir),
                                                        Nr,
                                                        Kr,
                                                        Cr,
                                                        Hr
                                                      );
                                                      return Hr.delete(tr), Nn;
                                                    case mr:
                                                      if (bo)
                                                        return (
                                                          bo.call(tr) ==
                                                          bo.call(ir)
                                                        );
                                                  }
                                                  return !1;
                                                })(ot, ft, qt, ht, xt, It, Ot)
                                          );
                                        if (!(1 & ht)) {
                                          var Ht =
                                              Nt && br.call(ot, '__wrapped__'),
                                            lr =
                                              Gt && br.call(ft, '__wrapped__');
                                          if (Ht || lr) {
                                            var ar = Ht ? ot.value() : ot,
                                              yr = lr ? ft.value() : ft;
                                            return (
                                              Ot || (Ot = new gn()),
                                              It(ar, yr, ht, xt, Ot)
                                            );
                                          }
                                        }
                                        return (
                                          !!nr &&
                                          (Ot || (Ot = new gn()),
                                          (function (tr, ir, Mr, Nr, Kr, Cr) {
                                            var Hr = 1 & Mr,
                                              kn = Sl(tr),
                                              Bn = kn.length;
                                            if (Bn != Sl(ir).length && !Hr)
                                              return !1;
                                            for (var eo = Bn; eo--; ) {
                                              var Nn = kn[eo];
                                              if (
                                                !(Hr
                                                  ? Nn in ir
                                                  : br.call(ir, Nn))
                                              )
                                                return !1;
                                            }
                                            var km = Cr.get(tr),
                                              _m = Cr.get(ir);
                                            if (km && _m)
                                              return km == ir && _m == tr;
                                            var pu = !0;
                                            Cr.set(tr, ir), Cr.set(ir, tr);
                                            for (var es = Hr; ++eo < Bn; ) {
                                              var hu = tr[(Nn = kn[eo])],
                                                mu = ir[Nn];
                                              if (Nr)
                                                var jm = Hr
                                                  ? Nr(mu, hu, Nn, ir, tr, Cr)
                                                  : Nr(hu, mu, Nn, tr, ir, Cr);
                                              if (
                                                !(jm === b
                                                  ? hu === mu ||
                                                    Kr(hu, mu, Mr, Nr, Cr)
                                                  : jm)
                                              ) {
                                                pu = !1;
                                                break;
                                              }
                                              es || (es = Nn == 'constructor');
                                            }
                                            if (pu && !es) {
                                              var gu = tr.constructor,
                                                vu = ir.constructor;
                                              gu == vu ||
                                                !('constructor' in tr) ||
                                                !('constructor' in ir) ||
                                                (typeof gu == 'function' &&
                                                  gu instanceof gu &&
                                                  typeof vu == 'function' &&
                                                  vu instanceof vu) ||
                                                (pu = !1);
                                            }
                                            return (
                                              Cr.delete(tr), Cr.delete(ir), pu
                                            );
                                          })(ot, ft, ht, xt, It, Ot))
                                        );
                                      })(i, s, h, _, Eo, _e))
                                );
                              }
                              function Bu(i, s, h, _) {
                                var _e = h.length,
                                  ot = _e,
                                  ft = !_;
                                if (i == null) return !ot;
                                for (i = Sr(i); _e--; ) {
                                  var ht = h[_e];
                                  if (
                                    ft && ht[2]
                                      ? ht[1] !== i[ht[0]]
                                      : !(ht[0] in i)
                                  )
                                    return !1;
                                }
                                for (; ++_e < ot; ) {
                                  var xt = (ht = h[_e])[0],
                                    It = i[xt],
                                    Ot = ht[1];
                                  if (ft && ht[2]) {
                                    if (It === b && !(xt in i)) return !1;
                                  } else {
                                    var $t = new gn();
                                    if (_) var Jt = _(It, Ot, xt, i, s, $t);
                                    if (!(Jt === b ? Eo(Ot, It, 3, _, $t) : Jt))
                                      return !1;
                                  }
                                }
                                return !0;
                              }
                              function tp(i) {
                                return (
                                  !(!Rr(i) || ((s = i), Ds && Ds in s)) &&
                                  (On(i) ? wv : Dm).test(Jn(i))
                                );
                                var s;
                              }
                              function rp(i) {
                                return typeof i == 'function'
                                  ? i
                                  : i == null
                                  ? qr
                                  : typeof i == 'object'
                                  ? fr(i)
                                    ? ip(i[0], i[1])
                                    : op(i)
                                  : bm(i);
                              }
                              function Vu(i) {
                                if (!Wo(i)) return Sv(i);
                                var s = [];
                                for (var h in Sr(i))
                                  br.call(i, h) &&
                                    h != 'constructor' &&
                                    s.push(h);
                                return s;
                              }
                              function Hu(i, s) {
                                return i < s;
                              }
                              function np(i, s) {
                                var h = -1,
                                  _ = Xr(i) ? Xt(i.length) : [];
                                return (
                                  zn(i, function (_e, ot, ft) {
                                    _[++h] = s(_e, ot, ft);
                                  }),
                                  _
                                );
                              }
                              function op(i) {
                                var s = Rl(i);
                                return s.length == 1 && s[0][2]
                                  ? Fp(s[0][0], s[0][1])
                                  : function (h) {
                                      return h === i || Bu(h, i, s);
                                    };
                              }
                              function ip(i, s) {
                                return Ol(i) && Mp(s)
                                  ? Fp(bn(i), s)
                                  : function (h) {
                                      var _ = Gl(h, i);
                                      return _ === b && _ === s
                                        ? Bl(h, i)
                                        : Eo(s, _, 3);
                                    };
                              }
                              function na(i, s, h, _, _e) {
                                i !== s &&
                                  Du(
                                    s,
                                    function (ot, ft) {
                                      if ((_e || (_e = new gn()), Rr(ot)))
                                        (function (xt, It, Ot, $t, Jt, qt, rr) {
                                          var Nt = Nl(xt, Ot),
                                            Gt = Nl(It, Ot),
                                            nr = rr.get(Gt);
                                          if (nr) Fu(xt, Ot, nr);
                                          else {
                                            var Ht = qt
                                                ? qt(
                                                    Nt,
                                                    Gt,
                                                    Ot + '',
                                                    xt,
                                                    It,
                                                    rr
                                                  )
                                                : b,
                                              lr = Ht === b;
                                            if (lr) {
                                              var ar = fr(Gt),
                                                yr = !ar && Gn(Gt),
                                                tr = !ar && !yr && po(Gt);
                                              (Ht = Gt),
                                                ar || yr || tr
                                                  ? fr(Nt)
                                                    ? (Ht = Nt)
                                                    : Ir(Nt)
                                                    ? (Ht = Qr(Nt))
                                                    : yr
                                                    ? ((lr = !1),
                                                      (Ht = vp(Gt, !0)))
                                                    : tr
                                                    ? ((lr = !1),
                                                      (Ht = yp(Gt, !0)))
                                                    : (Ht = [])
                                                  : Po(Gt) || qn(Gt)
                                                  ? ((Ht = Nt),
                                                    qn(Nt)
                                                      ? (Ht = fm(Nt))
                                                      : (Rr(Nt) && !On(Nt)) ||
                                                        (Ht = Tp(Gt)))
                                                  : (lr = !1);
                                            }
                                            lr &&
                                              (rr.set(Gt, Ht),
                                              Jt(Ht, Gt, $t, qt, rr),
                                              rr.delete(Gt)),
                                              Fu(xt, Ot, Ht);
                                          }
                                        })(i, s, ft, h, na, _, _e);
                                      else {
                                        var ht = _
                                          ? _(Nl(i, ft), ot, ft + '', i, s, _e)
                                          : b;
                                        ht === b && (ht = ot), Fu(i, ft, ht);
                                      }
                                    },
                                    Jr
                                  );
                              }
                              function ap(i, s) {
                                var h = i.length;
                                if (h)
                                  return Pn((s += s < 0 ? h : 0), h) ? i[s] : b;
                              }
                              function up(i, s, h) {
                                s = s.length
                                  ? Wr(s, function (ot) {
                                      return fr(ot)
                                        ? function (ft) {
                                            return Qn(
                                              ft,
                                              ot.length === 1 ? ot[0] : ot
                                            );
                                          }
                                        : ot;
                                    })
                                  : [qr];
                                var _ = -1;
                                s = Wr(s, tn(or()));
                                var _e = np(i, function (ot, ft, ht) {
                                  var xt = Wr(s, function (It) {
                                    return It(ot);
                                  });
                                  return {
                                    criteria: xt,
                                    index: ++_,
                                    value: ot,
                                  };
                                });
                                return (function (ot, ft) {
                                  var ht = ot.length;
                                  for (
                                    ot.sort(function (xt, It) {
                                      return (function (Ot, $t, Jt) {
                                        for (
                                          var qt = -1,
                                            rr = Ot.criteria,
                                            Nt = $t.criteria,
                                            Gt = rr.length,
                                            nr = Jt.length;
                                          ++qt < Gt;

                                        ) {
                                          var Ht = xp(rr[qt], Nt[qt]);
                                          if (Ht)
                                            return qt >= nr
                                              ? Ht
                                              : Ht *
                                                  (Jt[qt] == 'desc' ? -1 : 1);
                                        }
                                        return Ot.index - $t.index;
                                      })(xt, It, h);
                                    });
                                    ht--;

                                  )
                                    ot[ht] = ot[ht].value;
                                  return ot;
                                })(_e);
                              }
                              function lp(i, s, h) {
                                for (
                                  var _ = -1, _e = s.length, ot = {};
                                  ++_ < _e;

                                ) {
                                  var ft = s[_],
                                    ht = Qn(i, ft);
                                  h(ht, ft) && So(ot, $n(ft, i), ht);
                                }
                                return ot;
                              }
                              function Zu(i, s, h, _) {
                                var _e = _ ? cv : ro,
                                  ot = -1,
                                  ft = s.length,
                                  ht = i;
                                for (
                                  i === s && (s = Qr(s)),
                                    h && (ht = Wr(i, tn(h)));
                                  ++ot < ft;

                                )
                                  for (
                                    var xt = 0, It = s[ot], Ot = h ? h(It) : It;
                                    (xt = _e(ht, Ot, xt, _)) > -1;

                                  )
                                    ht !== i && Vo.call(ht, xt, 1),
                                      Vo.call(i, xt, 1);
                                return i;
                              }
                              function sp(i, s) {
                                for (
                                  var h = i ? s.length : 0, _ = h - 1;
                                  h--;

                                ) {
                                  var _e = s[h];
                                  if (h == _ || _e !== ot) {
                                    var ot = _e;
                                    Pn(_e) ? Vo.call(i, _e, 1) : Xu(i, _e);
                                  }
                                }
                                return i;
                              }
                              function Yu(i, s) {
                                return i + Yo(Hs() * (s - i + 1));
                              }
                              function Ku(i, s) {
                                var h = '';
                                if (!i || s < 1 || s > lt) return h;
                                do
                                  s % 2 && (h += i),
                                    (s = Yo(s / 2)) && (i += i);
                                while (s);
                                return h;
                              }
                              function pr(i, s) {
                                return Ll(zp(i, s, qr), i + '');
                              }
                              function $v(i) {
                                return Ks(ho(i));
                              }
                              function Uv(i, s) {
                                var h = ho(i);
                                return ou(h, Kn(s, 0, h.length));
                              }
                              function So(i, s, h, _) {
                                if (!Rr(i)) return i;
                                for (
                                  var _e = -1,
                                    ot = (s = $n(s, i)).length,
                                    ft = ot - 1,
                                    ht = i;
                                  ht != null && ++_e < ot;

                                ) {
                                  var xt = bn(s[_e]),
                                    It = h;
                                  if (
                                    xt === '__proto__' ||
                                    xt === 'constructor' ||
                                    xt === 'prototype'
                                  )
                                    return i;
                                  if (_e != ft) {
                                    var Ot = ht[xt];
                                    (It = _ ? _(Ot, xt, ht) : b) === b &&
                                      (It = Rr(Ot)
                                        ? Ot
                                        : Pn(s[_e + 1])
                                        ? []
                                        : {});
                                  }
                                  ko(ht, xt, It), (ht = ht[xt]);
                                }
                                return i;
                              }
                              var cp = Ko
                                  ? function (i, s) {
                                      return Ko.set(i, s), i;
                                    }
                                  : qr,
                                Gv = Ho
                                  ? function (i, s) {
                                      return Ho(i, 'toString', {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: Hl(s),
                                        writable: !0,
                                      });
                                    }
                                  : qr;
                              function Bv(i) {
                                return ou(ho(i));
                              }
                              function fn(i, s, h) {
                                var _ = -1,
                                  _e = i.length;
                                s < 0 && (s = -s > _e ? 0 : _e + s),
                                  (h = h > _e ? _e : h) < 0 && (h += _e),
                                  (_e = s > h ? 0 : (h - s) >>> 0),
                                  (s >>>= 0);
                                for (var ot = Xt(_e); ++_ < _e; )
                                  ot[_] = i[_ + s];
                                return ot;
                              }
                              function Vv(i, s) {
                                var h;
                                return (
                                  zn(i, function (_, _e, ot) {
                                    return !(h = s(_, _e, ot));
                                  }),
                                  !!h
                                );
                              }
                              function ga(i, s, h) {
                                var _ = 0,
                                  _e = i == null ? _ : i.length;
                                if (
                                  typeof s == 'number' &&
                                  s == s &&
                                  _e <= 2147483647
                                ) {
                                  for (; _ < _e; ) {
                                    var ot = (_ + _e) >>> 1,
                                      ft = i[ot];
                                    ft !== null &&
                                    !nn(ft) &&
                                    (h ? ft <= s : ft < s)
                                      ? (_ = ot + 1)
                                      : (_e = ot);
                                  }
                                  return _e;
                                }
                                return Qu(i, s, qr, h);
                              }
                              function Qu(i, s, h, _) {
                                var _e = 0,
                                  ot = i == null ? 0 : i.length;
                                if (ot === 0) return 0;
                                for (
                                  var ft = (s = h(s)) != s,
                                    ht = s === null,
                                    xt = nn(s),
                                    It = s === b;
                                  _e < ot;

                                ) {
                                  var Ot = Yo((_e + ot) / 2),
                                    $t = h(i[Ot]),
                                    Jt = $t !== b,
                                    qt = $t === null,
                                    rr = $t == $t,
                                    Nt = nn($t);
                                  if (ft) var Gt = _ || rr;
                                  else
                                    Gt = It
                                      ? rr && (_ || Jt)
                                      : ht
                                      ? rr && Jt && (_ || !qt)
                                      : xt
                                      ? rr && Jt && !qt && (_ || !Nt)
                                      : !qt && !Nt && (_ ? $t <= s : $t < s);
                                  Gt ? (_e = Ot + 1) : (ot = Ot);
                                }
                                return Br(ot, 4294967294);
                              }
                              function fp(i, s) {
                                for (
                                  var h = -1, _ = i.length, _e = 0, ot = [];
                                  ++h < _;

                                ) {
                                  var ft = i[h],
                                    ht = s ? s(ft) : ft;
                                  if (!h || !vn(ht, xt)) {
                                    var xt = ht;
                                    ot[_e++] = ft === 0 ? 0 : ft;
                                  }
                                }
                                return ot;
                              }
                              function dp(i) {
                                return typeof i == 'number'
                                  ? i
                                  : nn(i)
                                  ? Et
                                  : +i;
                              }
                              function rn(i) {
                                if (typeof i == 'string') return i;
                                if (fr(i)) return Wr(i, rn) + '';
                                if (nn(i)) return Zs ? Zs.call(i) : '';
                                var s = i + '';
                                return s == '0' && 1 / i == -1 / 0 ? '-0' : s;
                              }
                              function Dn(i, s, h) {
                                var _ = -1,
                                  _e = Lo,
                                  ot = i.length,
                                  ft = !0,
                                  ht = [],
                                  xt = ht;
                                if (h) (ft = !1), (_e = Eu);
                                else if (ot >= 200) {
                                  var It = s ? null : Zv(i);
                                  if (It) return To(It);
                                  (ft = !1), (_e = go), (xt = new Yn());
                                } else xt = s ? [] : ht;
                                e: for (; ++_ < ot; ) {
                                  var Ot = i[_],
                                    $t = s ? s(Ot) : Ot;
                                  if (
                                    ((Ot = h || Ot !== 0 ? Ot : 0),
                                    ft && $t == $t)
                                  ) {
                                    for (var Jt = xt.length; Jt--; )
                                      if (xt[Jt] === $t) continue e;
                                    s && xt.push($t), ht.push(Ot);
                                  } else
                                    _e(xt, $t, h) ||
                                      (xt !== ht && xt.push($t), ht.push(Ot));
                                }
                                return ht;
                              }
                              function Xu(i, s) {
                                return (
                                  (i = Dp(i, (s = $n(s, i)))) == null ||
                                  delete i[bn(dn(s))]
                                );
                              }
                              function pp(i, s, h, _) {
                                return So(i, s, h(Qn(i, s)), _);
                              }
                              function xa(i, s, h, _) {
                                for (
                                  var _e = i.length, ot = _ ? _e : -1;
                                  (_ ? ot-- : ++ot < _e) && s(i[ot], ot, i);

                                );
                                return h
                                  ? fn(i, _ ? 0 : ot, _ ? ot + 1 : _e)
                                  : fn(i, _ ? ot + 1 : 0, _ ? _e : ot);
                              }
                              function hp(i, s) {
                                var h = i;
                                return (
                                  h instanceof hr && (h = h.value()),
                                  Su(
                                    s,
                                    function (_, _e) {
                                      return _e.func.apply(
                                        _e.thisArg,
                                        Tn([_], _e.args)
                                      );
                                    },
                                    h
                                  )
                                );
                              }
                              function Ju(i, s, h) {
                                var _ = i.length;
                                if (_ < 2) return _ ? Dn(i[0]) : [];
                                for (var _e = -1, ot = Xt(_); ++_e < _; )
                                  for (var ft = i[_e], ht = -1; ++ht < _; )
                                    ht != _e &&
                                      (ot[_e] = _o(ot[_e] || ft, i[ht], s, h));
                                return Dn($r(ot, 1), s, h);
                              }
                              function mp(i, s, h) {
                                for (
                                  var _ = -1,
                                    _e = i.length,
                                    ot = s.length,
                                    ft = {};
                                  ++_ < _e;

                                ) {
                                  var ht = _ < ot ? s[_] : b;
                                  h(ft, i[_], ht);
                                }
                                return ft;
                              }
                              function qu(i) {
                                return Ir(i) ? i : [];
                              }
                              function yl(i) {
                                return typeof i == 'function' ? i : qr;
                              }
                              function $n(i, s) {
                                return fr(i) ? i : Ol(i, s) ? [i] : Bp(wr(i));
                              }
                              var Hv = pr;
                              function Un(i, s, h) {
                                var _ = i.length;
                                return (
                                  (h = h === b ? _ : h),
                                  !s && h >= _ ? i : fn(i, s, h)
                                );
                              }
                              var gp =
                                bv ||
                                function (i) {
                                  return Dr.clearTimeout(i);
                                };
                              function vp(i, s) {
                                if (s) return i.slice();
                                var h = i.length,
                                  _ = $s ? $s(h) : new i.constructor(h);
                                return i.copy(_), _;
                              }
                              function xl(i) {
                                var s = new i.constructor(i.byteLength);
                                return new Go(s).set(new Go(i)), s;
                              }
                              function yp(i, s) {
                                var h = s ? xl(i.buffer) : i.buffer;
                                return new i.constructor(
                                  h,
                                  i.byteOffset,
                                  i.length
                                );
                              }
                              function xp(i, s) {
                                if (i !== s) {
                                  var h = i !== b,
                                    _ = i === null,
                                    _e = i == i,
                                    ot = nn(i),
                                    ft = s !== b,
                                    ht = s === null,
                                    xt = s == s,
                                    It = nn(s);
                                  if (
                                    (!ht && !It && !ot && i > s) ||
                                    (ot && ft && xt && !ht && !It) ||
                                    (_ && ft && xt) ||
                                    (!h && xt) ||
                                    !_e
                                  )
                                    return 1;
                                  if (
                                    (!_ && !ot && !It && i < s) ||
                                    (It && h && _e && !_ && !ot) ||
                                    (ht && h && _e) ||
                                    (!ft && _e) ||
                                    !xt
                                  )
                                    return -1;
                                }
                                return 0;
                              }
                              function wp(i, s, h, _) {
                                for (
                                  var _e = -1,
                                    ot = i.length,
                                    ft = h.length,
                                    ht = -1,
                                    xt = s.length,
                                    It = Tr(ot - ft, 0),
                                    Ot = Xt(xt + It),
                                    $t = !_;
                                  ++ht < xt;

                                )
                                  Ot[ht] = s[ht];
                                for (; ++_e < ft; )
                                  ($t || _e < ot) && (Ot[h[_e]] = i[_e]);
                                for (; It--; ) Ot[ht++] = i[_e++];
                                return Ot;
                              }
                              function bp(i, s, h, _) {
                                for (
                                  var _e = -1,
                                    ot = i.length,
                                    ft = -1,
                                    ht = h.length,
                                    xt = -1,
                                    It = s.length,
                                    Ot = Tr(ot - ht, 0),
                                    $t = Xt(Ot + It),
                                    Jt = !_;
                                  ++_e < Ot;

                                )
                                  $t[_e] = i[_e];
                                for (var qt = _e; ++xt < It; )
                                  $t[qt + xt] = s[xt];
                                for (; ++ft < ht; )
                                  (Jt || _e < ot) && ($t[qt + h[ft]] = i[_e++]);
                                return $t;
                              }
                              function Qr(i, s) {
                                var h = -1,
                                  _ = i.length;
                                for (s || (s = Xt(_)); ++h < _; ) s[h] = i[h];
                                return s;
                              }
                              function wn(i, s, h, _) {
                                var _e = !h;
                                h || (h = {});
                                for (var ot = -1, ft = s.length; ++ot < ft; ) {
                                  var ht = s[ot],
                                    xt = _ ? _(h[ht], i[ht], ht, h, i) : b;
                                  xt === b && (xt = i[ht]),
                                    _e ? Cn(h, ht, xt) : ko(h, ht, xt);
                                }
                                return h;
                              }
                              function ba(i, s) {
                                return function (h, _) {
                                  var _e = fr(h) ? av : Mv,
                                    ot = s ? s() : {};
                                  return _e(h, i, or(_, 2), ot);
                                };
                              }
                              function so(i) {
                                return pr(function (s, h) {
                                  var _ = -1,
                                    _e = h.length,
                                    ot = _e > 1 ? h[_e - 1] : b,
                                    ft = _e > 2 ? h[2] : b;
                                  for (
                                    ot =
                                      i.length > 3 && typeof ot == 'function'
                                        ? (_e--, ot)
                                        : b,
                                      ft &&
                                        Yr(h[0], h[1], ft) &&
                                        ((ot = _e < 3 ? b : ot), (_e = 1)),
                                      s = Sr(s);
                                    ++_ < _e;

                                  ) {
                                    var ht = h[_];
                                    ht && i(s, ht, _, ot);
                                  }
                                  return s;
                                });
                              }
                              function kp(i, s) {
                                return function (h, _) {
                                  if (h == null) return h;
                                  if (!Xr(h)) return i(h, _);
                                  for (
                                    var _e = h.length,
                                      ot = s ? _e : -1,
                                      ft = Sr(h);
                                    (s ? ot-- : ++ot < _e) &&
                                    _(ft[ot], ot, ft) !== !1;

                                  );
                                  return h;
                                };
                              }
                              function _p(i) {
                                return function (s, h, _) {
                                  for (
                                    var _e = -1,
                                      ot = Sr(s),
                                      ft = _(s),
                                      ht = ft.length;
                                    ht--;

                                  ) {
                                    var xt = ft[i ? ht : ++_e];
                                    if (h(ot[xt], xt, ot) === !1) break;
                                  }
                                  return s;
                                };
                              }
                              function jp(i) {
                                return function (s) {
                                  var h = no((s = wr(s))) ? mn(s) : b,
                                    _ = h ? h[0] : s.charAt(0),
                                    _e = h ? Un(h, 1).join('') : s.slice(1);
                                  return _[i]() + _e;
                                };
                              }
                              function co(i) {
                                return function (s) {
                                  return Su(xm(ym(s).replace(Qm, '')), i, '');
                                };
                              }
                              function Co(i) {
                                return function () {
                                  var s = arguments;
                                  switch (s.length) {
                                    case 0:
                                      return new i();
                                    case 1:
                                      return new i(s[0]);
                                    case 2:
                                      return new i(s[0], s[1]);
                                    case 3:
                                      return new i(s[0], s[1], s[2]);
                                    case 4:
                                      return new i(s[0], s[1], s[2], s[3]);
                                    case 5:
                                      return new i(
                                        s[0],
                                        s[1],
                                        s[2],
                                        s[3],
                                        s[4]
                                      );
                                    case 6:
                                      return new i(
                                        s[0],
                                        s[1],
                                        s[2],
                                        s[3],
                                        s[4],
                                        s[5]
                                      );
                                    case 7:
                                      return new i(
                                        s[0],
                                        s[1],
                                        s[2],
                                        s[3],
                                        s[4],
                                        s[5],
                                        s[6]
                                      );
                                  }
                                  var h = lo(i.prototype),
                                    _ = i.apply(h, s);
                                  return Rr(_) ? _ : h;
                                };
                              }
                              function Ep(i) {
                                return function (s, h, _) {
                                  var _e = Sr(s);
                                  if (!Xr(s)) {
                                    var ot = or(h, 3);
                                    (s = zr(s)),
                                      (h = function (ht) {
                                        return ot(_e[ht], ht, _e);
                                      });
                                  }
                                  var ft = i(s, h, _);
                                  return ft > -1 ? _e[ot ? s[ft] : ft] : b;
                                };
                              }
                              function Sp(i) {
                                return Rn(function (s) {
                                  var h = s.length,
                                    _ = h,
                                    _e = sn.prototype.thru;
                                  for (i && s.reverse(); _--; ) {
                                    var ot = s[_];
                                    if (typeof ot != 'function')
                                      throw new ln(ut);
                                    if (_e && !ft && ru(ot) == 'wrapper')
                                      var ft = new sn([], !0);
                                  }
                                  for (_ = ft ? _ : h; ++_ < h; ) {
                                    var ht = ru((ot = s[_])),
                                      xt = ht == 'wrapper' ? Wl(ot) : b;
                                    ft =
                                      xt &&
                                      Il(xt[0]) &&
                                      xt[1] == 424 &&
                                      !xt[4].length &&
                                      xt[9] == 1
                                        ? ft[ru(xt[0])].apply(ft, xt[3])
                                        : ot.length == 1 && Il(ot)
                                        ? ft[ht]()
                                        : ft.thru(ot);
                                  }
                                  return function () {
                                    var It = arguments,
                                      Ot = It[0];
                                    if (ft && It.length == 1 && fr(Ot))
                                      return ft.plant(Ot).value();
                                    for (
                                      var $t = 0,
                                        Jt = h ? s[$t].apply(this, It) : Ot;
                                      ++$t < h;

                                    )
                                      Jt = s[$t].call(this, Jt);
                                    return Jt;
                                  };
                                });
                              }
                              function _a(i, s, h, _, _e, ot, ft, ht, xt, It) {
                                var Ot = s & nt,
                                  $t = 1 & s,
                                  Jt = 2 & s,
                                  qt = 24 & s,
                                  rr = 512 & s,
                                  Nt = Jt ? b : Co(i);
                                return function Gt() {
                                  for (
                                    var nr = arguments.length,
                                      Ht = Xt(nr),
                                      lr = nr;
                                    lr--;

                                  )
                                    Ht[lr] = arguments[lr];
                                  if (qt)
                                    var ar = fo(Gt),
                                      yr = (function (Nr, Kr) {
                                        for (var Cr = Nr.length, Hr = 0; Cr--; )
                                          Nr[Cr] === Kr && ++Hr;
                                        return Hr;
                                      })(Ht, ar);
                                  if (
                                    (_ && (Ht = wp(Ht, _, _e, qt)),
                                    ot && (Ht = bp(Ht, ot, ft, qt)),
                                    (nr -= yr),
                                    qt && nr < It)
                                  ) {
                                    var tr = Mn(Ht, ar);
                                    return Rp(
                                      i,
                                      s,
                                      _a,
                                      Gt.placeholder,
                                      h,
                                      Ht,
                                      tr,
                                      ht,
                                      xt,
                                      It - nr
                                    );
                                  }
                                  var ir = $t ? h : this,
                                    Mr = Jt ? ir[i] : i;
                                  return (
                                    (nr = Ht.length),
                                    ht
                                      ? (Ht = (function (Nr, Kr) {
                                          for (
                                            var Cr = Nr.length,
                                              Hr = Br(Kr.length, Cr),
                                              kn = Qr(Nr);
                                            Hr--;

                                          ) {
                                            var Bn = Kr[Hr];
                                            Nr[Hr] = Pn(Bn, Cr) ? kn[Bn] : b;
                                          }
                                          return Nr;
                                        })(Ht, ht))
                                      : rr && nr > 1 && Ht.reverse(),
                                    Ot && xt < nr && (Ht.length = xt),
                                    this &&
                                      this !== Dr &&
                                      this instanceof Gt &&
                                      (Mr = Nt || Co(Mr)),
                                    Mr.apply(ir, Ht)
                                  );
                                };
                              }
                              function Cp(i, s) {
                                return function (h, _) {
                                  return (function (_e, ot, ft, ht) {
                                    return (
                                      xn(_e, function (xt, It, Ot) {
                                        ot(ht, ft(xt), It, Ot);
                                      }),
                                      ht
                                    );
                                  })(h, i, s(_), {});
                                };
                              }
                              function $a(i, s) {
                                return function (h, _) {
                                  var _e;
                                  if (h === b && _ === b) return s;
                                  if ((h !== b && (_e = h), _ !== b)) {
                                    if (_e === b) return _;
                                    typeof h == 'string' || typeof _ == 'string'
                                      ? ((h = rn(h)), (_ = rn(_)))
                                      : ((h = dp(h)), (_ = dp(_))),
                                      (_e = i(h, _));
                                  }
                                  return _e;
                                };
                              }
                              function _l(i) {
                                return Rn(function (s) {
                                  return (
                                    (s = Wr(s, tn(or()))),
                                    pr(function (h) {
                                      var _ = this;
                                      return i(s, function (_e) {
                                        return en(_e, _, h);
                                      });
                                    })
                                  );
                                });
                              }
                              function eu(i, s) {
                                var h = (s = s === b ? ' ' : rn(s)).length;
                                if (h < 2) return h ? Ku(s, i) : s;
                                var _ = Ku(s, Zo(i / oo(s)));
                                return no(s)
                                  ? Un(mn(_), 0, i).join('')
                                  : _.slice(0, i);
                              }
                              function Wp(i) {
                                return function (s, h, _) {
                                  return (
                                    _ &&
                                      typeof _ != 'number' &&
                                      Yr(s, h, _) &&
                                      (h = _ = b),
                                    (s = In(s)),
                                    h === b ? ((h = s), (s = 0)) : (h = In(h)),
                                    (function (_e, ot, ft, ht) {
                                      for (
                                        var xt = -1,
                                          It = Tr(Zo((ot - _e) / (ft || 1)), 0),
                                          Ot = Xt(It);
                                        It--;

                                      )
                                        (Ot[ht ? It : ++xt] = _e), (_e += ft);
                                      return Ot;
                                    })(
                                      s,
                                      h,
                                      (_ = _ === b ? (s < h ? 1 : -1) : In(_)),
                                      i
                                    )
                                  );
                                };
                              }
                              function tu(i) {
                                return function (s, h) {
                                  return (
                                    (typeof s == 'string' &&
                                      typeof h == 'string') ||
                                      ((s = pn(s)), (h = pn(h))),
                                    i(s, h)
                                  );
                                };
                              }
                              function Rp(i, s, h, _, _e, ot, ft, ht, xt, It) {
                                var Ot = 8 & s;
                                (s |= Ot ? ct : 64),
                                  4 & (s &= ~(Ot ? 64 : ct)) || (s &= -4);
                                var $t = [
                                    i,
                                    s,
                                    _e,
                                    Ot ? ot : b,
                                    Ot ? ft : b,
                                    Ot ? b : ot,
                                    Ot ? b : ft,
                                    ht,
                                    xt,
                                    It,
                                  ],
                                  Jt = h.apply(b, $t);
                                return (
                                  Il(i) && $p(Jt, $t),
                                  (Jt.placeholder = _),
                                  Up(Jt, i, s)
                                );
                              }
                              function El(i) {
                                var s = yn[i];
                                return function (h, _) {
                                  if (
                                    ((h = pn(h)),
                                    (_ = _ == null ? 0 : Br(dr(_), 292)) &&
                                      Vs(h))
                                  ) {
                                    var _e = (wr(h) + 'e').split('e');
                                    return +(
                                      (_e = (
                                        wr(s(_e[0] + 'e' + (+_e[1] + _))) + 'e'
                                      ).split('e'))[0] +
                                      'e' +
                                      (+_e[1] - _)
                                    );
                                  }
                                  return s(h);
                                };
                              }
                              var Zv =
                                ao && 1 / To(new ao([, -0]))[1] == at
                                  ? function (i) {
                                      return new ao(i);
                                    }
                                  : Kl;
                              function Pp(i) {
                                return function (s) {
                                  var h = Vr(s);
                                  return h == Mt
                                    ? Nu(s)
                                    : h == Yt
                                    ? (function (_) {
                                        var _e = -1,
                                          ot = Array(_.size);
                                        return (
                                          _.forEach(function (ft) {
                                            ot[++_e] = [ft, ft];
                                          }),
                                          ot
                                        );
                                      })(s)
                                    : (function (_, _e) {
                                        return Wr(_e, function (ot) {
                                          return [ot, _[ot]];
                                        });
                                      })(s, i(s));
                                };
                              }
                              function Wn(i, s, h, _, _e, ot, ft, ht) {
                                var xt = 2 & s;
                                if (!xt && typeof i != 'function')
                                  throw new ln(ut);
                                var It = _ ? _.length : 0;
                                if (
                                  (It || ((s &= -97), (_ = _e = b)),
                                  (ft = ft === b ? ft : Tr(dr(ft), 0)),
                                  (ht = ht === b ? ht : dr(ht)),
                                  (It -= _e ? _e.length : 0),
                                  64 & s)
                                ) {
                                  var Ot = _,
                                    $t = _e;
                                  _ = _e = b;
                                }
                                var Jt = xt ? b : Wl(i),
                                  qt = [i, s, h, _, _e, Ot, $t, ot, ft, ht];
                                if (
                                  (Jt &&
                                    (function (Nt, Gt) {
                                      var nr = Nt[1],
                                        Ht = Gt[1],
                                        lr = nr | Ht,
                                        ar = lr < 131,
                                        yr =
                                          (Ht == nt && nr == 8) ||
                                          (Ht == nt &&
                                            nr == 256 &&
                                            Nt[7].length <= Gt[8]) ||
                                          (Ht == 384 &&
                                            Gt[7].length <= Gt[8] &&
                                            nr == 8);
                                      if (!ar && !yr) return Nt;
                                      1 & Ht &&
                                        ((Nt[2] = Gt[2]),
                                        (lr |= 1 & nr ? 0 : 4));
                                      var tr = Gt[3];
                                      if (tr) {
                                        var ir = Nt[3];
                                        (Nt[3] = ir ? wp(ir, tr, Gt[4]) : tr),
                                          (Nt[4] = ir ? Mn(Nt[3], st) : Gt[4]);
                                      }
                                      (tr = Gt[5]) &&
                                        ((ir = Nt[5]),
                                        (Nt[5] = ir ? bp(ir, tr, Gt[6]) : tr),
                                        (Nt[6] = ir ? Mn(Nt[5], st) : Gt[6])),
                                        (tr = Gt[7]) && (Nt[7] = tr),
                                        Ht & nt &&
                                          (Nt[8] =
                                            Nt[8] == null
                                              ? Gt[8]
                                              : Br(Nt[8], Gt[8])),
                                        Nt[9] == null && (Nt[9] = Gt[9]),
                                        (Nt[0] = Gt[0]),
                                        (Nt[1] = lr);
                                    })(qt, Jt),
                                  (i = qt[0]),
                                  (s = qt[1]),
                                  (h = qt[2]),
                                  (_ = qt[3]),
                                  (_e = qt[4]),
                                  !(ht = qt[9] =
                                    qt[9] === b
                                      ? xt
                                        ? 0
                                        : i.length
                                      : Tr(qt[9] - It, 0)) &&
                                    24 & s &&
                                    (s &= -25),
                                  s && s != 1)
                                )
                                  rr =
                                    s == 8 || s == 16
                                      ? (function (Nt, Gt, nr) {
                                          var Ht = Co(Nt);
                                          return function lr() {
                                            for (
                                              var ar = arguments.length,
                                                yr = Xt(ar),
                                                tr = ar,
                                                ir = fo(lr);
                                              tr--;

                                            )
                                              yr[tr] = arguments[tr];
                                            var Mr =
                                              ar < 3 &&
                                              yr[0] !== ir &&
                                              yr[ar - 1] !== ir
                                                ? []
                                                : Mn(yr, ir);
                                            return (ar -= Mr.length) < nr
                                              ? Rp(
                                                  Nt,
                                                  Gt,
                                                  _a,
                                                  lr.placeholder,
                                                  b,
                                                  yr,
                                                  Mr,
                                                  b,
                                                  b,
                                                  nr - ar
                                                )
                                              : en(
                                                  this &&
                                                    this !== Dr &&
                                                    this instanceof lr
                                                    ? Ht
                                                    : Nt,
                                                  this,
                                                  yr
                                                );
                                          };
                                        })(i, s, ht)
                                      : (s != ct && s != 33) || _e.length
                                      ? _a.apply(b, qt)
                                      : (function (Nt, Gt, nr, Ht) {
                                          var lr = 1 & Gt,
                                            ar = Co(Nt);
                                          return function yr() {
                                            for (
                                              var tr = -1,
                                                ir = arguments.length,
                                                Mr = -1,
                                                Nr = Ht.length,
                                                Kr = Xt(Nr + ir),
                                                Cr =
                                                  this &&
                                                  this !== Dr &&
                                                  this instanceof yr
                                                    ? ar
                                                    : Nt;
                                              ++Mr < Nr;

                                            )
                                              Kr[Mr] = Ht[Mr];
                                            for (; ir--; )
                                              Kr[Mr++] = arguments[++tr];
                                            return en(Cr, lr ? nr : this, Kr);
                                          };
                                        })(i, s, h, _);
                                else
                                  var rr = (function (Nt, Gt, nr) {
                                    var Ht = 1 & Gt,
                                      lr = Co(Nt);
                                    return function ar() {
                                      return (
                                        this &&
                                        this !== Dr &&
                                        this instanceof ar
                                          ? lr
                                          : Nt
                                      ).apply(Ht ? nr : this, arguments);
                                    };
                                  })(i, s, h);
                                return Up((Jt ? cp : $p)(rr, qt), i, s);
                              }
                              function Op(i, s, h, _) {
                                return i === b ||
                                  (vn(i, io[h]) && !br.call(_, h))
                                  ? s
                                  : i;
                              }
                              function Ip(i, s, h, _, _e, ot) {
                                return (
                                  Rr(i) &&
                                    Rr(s) &&
                                    (ot.set(s, i),
                                    na(i, s, b, Ip, ot),
                                    ot.delete(s)),
                                  i
                                );
                              }
                              function Yv(i) {
                                return Po(i) ? b : i;
                              }
                              function Np(i, s, h, _, _e, ot) {
                                var ft = 1 & h,
                                  ht = i.length,
                                  xt = s.length;
                                if (ht != xt && !(ft && xt > ht)) return !1;
                                var It = ot.get(i),
                                  Ot = ot.get(s);
                                if (It && Ot) return It == s && Ot == i;
                                var $t = -1,
                                  Jt = !0,
                                  qt = 2 & h ? new Yn() : b;
                                for (ot.set(i, s), ot.set(s, i); ++$t < ht; ) {
                                  var rr = i[$t],
                                    Nt = s[$t];
                                  if (_)
                                    var Gt = ft
                                      ? _(Nt, rr, $t, s, i, ot)
                                      : _(rr, Nt, $t, i, s, ot);
                                  if (Gt !== b) {
                                    if (Gt) continue;
                                    Jt = !1;
                                    break;
                                  }
                                  if (qt) {
                                    if (
                                      !Cu(s, function (nr, Ht) {
                                        if (
                                          !go(qt, Ht) &&
                                          (rr === nr || _e(rr, nr, h, _, ot))
                                        )
                                          return qt.push(Ht);
                                      })
                                    ) {
                                      Jt = !1;
                                      break;
                                    }
                                  } else if (
                                    rr !== Nt &&
                                    !_e(rr, Nt, h, _, ot)
                                  ) {
                                    Jt = !1;
                                    break;
                                  }
                                }
                                return ot.delete(i), ot.delete(s), Jt;
                              }
                              function Rn(i) {
                                return Ll(zp(i, b, Yp), i + '');
                              }
                              function Sl(i) {
                                return _d(i, zr, Pl);
                              }
                              function Cl(i) {
                                return _d(i, Jr, Lp);
                              }
                              var Wl = Ko
                                ? function (i) {
                                    return Ko.get(i);
                                  }
                                : Kl;
                              function ru(i) {
                                for (
                                  var s = i.name + '',
                                    h = uo[s],
                                    _ = br.call(uo, s) ? h.length : 0;
                                  _--;

                                ) {
                                  var _e = h[_],
                                    ot = _e.func;
                                  if (ot == null || ot == i) return _e.name;
                                }
                                return s;
                              }
                              function fo(i) {
                                return (br.call(tt, 'placeholder') ? tt : i)
                                  .placeholder;
                              }
                              function or() {
                                var i = tt.iteratee || Zl;
                                return (
                                  (i = i === Zl ? rp : i),
                                  arguments.length
                                    ? i(arguments[0], arguments[1])
                                    : i
                                );
                              }
                              function nu(i, s) {
                                var h,
                                  _,
                                  _e = i.__data__;
                                return (
                                  (_ = typeof (h = s)) == 'string' ||
                                  _ == 'number' ||
                                  _ == 'symbol' ||
                                  _ == 'boolean'
                                    ? h !== '__proto__'
                                    : h === null
                                )
                                  ? _e[typeof s == 'string' ? 'string' : 'hash']
                                  : _e.map;
                              }
                              function Rl(i) {
                                for (var s = zr(i), h = s.length; h--; ) {
                                  var _ = s[h],
                                    _e = i[_];
                                  s[h] = [_, _e, Mp(_e)];
                                }
                                return s;
                              }
                              function Xn(i, s) {
                                var h = (function (_, _e) {
                                  return _ == null ? b : _[_e];
                                })(i, s);
                                return tp(h) ? h : b;
                              }
                              var Pl = Au
                                  ? function (i) {
                                      return i == null
                                        ? []
                                        : ((i = Sr(i)),
                                          An(Au(i), function (s) {
                                            return Gs.call(i, s);
                                          }));
                                    }
                                  : Ql,
                                Lp = Au
                                  ? function (i) {
                                      for (var s = []; i; )
                                        Tn(s, Pl(i)), (i = Bo(i));
                                      return s;
                                    }
                                  : Ql,
                                Vr = Zr;
                              function Ap(i, s, h) {
                                for (
                                  var _ = -1,
                                    _e = (s = $n(s, i)).length,
                                    ot = !1;
                                  ++_ < _e;

                                ) {
                                  var ft = bn(s[_]);
                                  if (!(ot = i != null && h(i, ft))) break;
                                  i = i[ft];
                                }
                                return ot || ++_ != _e
                                  ? ot
                                  : !!(_e = i == null ? 0 : i.length) &&
                                      cu(_e) &&
                                      Pn(ft, _e) &&
                                      (fr(i) || qn(i));
                              }
                              function Tp(i) {
                                return typeof i.constructor != 'function' ||
                                  Wo(i)
                                  ? {}
                                  : lo(Bo(i));
                              }
                              function Kv(i) {
                                return fr(i) || qn(i) || !!(Bs && i && i[Bs]);
                              }
                              function Pn(i, s) {
                                var h = typeof i;
                                return (
                                  !!(s = s ?? lt) &&
                                  (h == 'number' ||
                                    (h != 'symbol' && Um.test(i))) &&
                                  i > -1 &&
                                  i % 1 == 0 &&
                                  i < s
                                );
                              }
                              function Yr(i, s, h) {
                                if (!Rr(h)) return !1;
                                var _ = typeof s;
                                return (
                                  !!(_ == 'number'
                                    ? Xr(h) && Pn(s, h.length)
                                    : _ == 'string' && s in h) && vn(h[s], i)
                                );
                              }
                              function Ol(i, s) {
                                if (fr(i)) return !1;
                                var h = typeof i;
                                return (
                                  !(
                                    h != 'number' &&
                                    h != 'symbol' &&
                                    h != 'boolean' &&
                                    i != null &&
                                    !nn(i)
                                  ) ||
                                  Cm.test(i) ||
                                  !Sm.test(i) ||
                                  (s != null && i in Sr(s))
                                );
                              }
                              function Il(i) {
                                var s = ru(i),
                                  h = tt[s];
                                if (
                                  typeof h != 'function' ||
                                  !(s in hr.prototype)
                                )
                                  return !1;
                                if (i === h) return !0;
                                var _ = Wl(h);
                                return !!_ && i === _[0];
                              }
                              ((Tu && Vr(new Tu(new ArrayBuffer(1))) != kr) ||
                                (yo && Vr(new yo()) != Mt) ||
                                (Mu && Vr(Mu.resolve()) != Ft) ||
                                (ao && Vr(new ao()) != Yt) ||
                                (xo && Vr(new xo()) != vr)) &&
                                (Vr = function (i) {
                                  var s = Zr(i),
                                    h = s == Bt ? i.constructor : b,
                                    _ = h ? Jn(h) : '';
                                  if (_)
                                    switch (_) {
                                      case Pv:
                                        return kr;
                                      case Ov:
                                        return Mt;
                                      case Iv:
                                        return Ft;
                                      case Nv:
                                        return Yt;
                                      case Lv:
                                        return vr;
                                    }
                                  return s;
                                });
                              var Qv = zo ? On : Xl;
                              function Wo(i) {
                                var s = i && i.constructor;
                                return (
                                  i ===
                                  ((typeof s == 'function' && s.prototype) ||
                                    io)
                                );
                              }
                              function Mp(i) {
                                return i == i && !Rr(i);
                              }
                              function Fp(i, s) {
                                return function (h) {
                                  return (
                                    h != null &&
                                    h[i] === s &&
                                    (s !== b || i in Sr(h))
                                  );
                                };
                              }
                              function zp(i, s, h) {
                                return (
                                  (s = Tr(s === b ? i.length - 1 : s, 0)),
                                  function () {
                                    for (
                                      var _ = arguments,
                                        _e = -1,
                                        ot = Tr(_.length - s, 0),
                                        ft = Xt(ot);
                                      ++_e < ot;

                                    )
                                      ft[_e] = _[s + _e];
                                    _e = -1;
                                    for (var ht = Xt(s + 1); ++_e < s; )
                                      ht[_e] = _[_e];
                                    return (ht[s] = h(ft)), en(i, this, ht);
                                  }
                                );
                              }
                              function Dp(i, s) {
                                return s.length < 2 ? i : Qn(i, fn(s, 0, -1));
                              }
                              function Nl(i, s) {
                                if (
                                  (s !== 'constructor' ||
                                    typeof i[s] != 'function') &&
                                  s != '__proto__'
                                )
                                  return i[s];
                              }
                              var $p = Gp(cp),
                                Ro =
                                  _v ||
                                  function (i, s) {
                                    return Dr.setTimeout(i, s);
                                  },
                                Ll = Gp(Gv);
                              function Up(i, s, h) {
                                var _ = s + '';
                                return Ll(
                                  i,
                                  (function (_e, ot) {
                                    var ft = ot.length;
                                    if (!ft) return _e;
                                    var ht = ft - 1;
                                    return (
                                      (ot[ht] = (ft > 1 ? '& ' : '') + ot[ht]),
                                      (ot = ot.join(ft > 2 ? ', ' : ' ')),
                                      _e.replace(
                                        Om,
                                        `{
/* [wrapped with ` +
                                          ot +
                                          `] */
`
                                      )
                                    );
                                  })(
                                    _,
                                    (function (_e, ot) {
                                      return (
                                        un(yt, function (ft) {
                                          var ht = '_.' + ft[0];
                                          ot & ft[1] &&
                                            !Lo(_e, ht) &&
                                            _e.push(ht);
                                        }),
                                        _e.sort()
                                      );
                                    })(
                                      (function (_e) {
                                        var ot = _e.match(Im);
                                        return ot ? ot[1].split(Nm) : [];
                                      })(_),
                                      h
                                    )
                                  )
                                );
                              }
                              function Gp(i) {
                                var s = 0,
                                  h = 0;
                                return function () {
                                  var _ = Cv(),
                                    _e = 16 - (_ - h);
                                  if (((h = _), _e > 0)) {
                                    if (++s >= 800) return arguments[0];
                                  } else s = 0;
                                  return i.apply(b, arguments);
                                };
                              }
                              function ou(i, s) {
                                var h = -1,
                                  _ = i.length,
                                  _e = _ - 1;
                                for (s = s === b ? _ : s; ++h < s; ) {
                                  var ot = Yu(h, _e),
                                    ft = i[ot];
                                  (i[ot] = i[h]), (i[h] = ft);
                                }
                                return (i.length = s), i;
                              }
                              var Al,
                                Tl,
                                Bp =
                                  ((Al = lu(
                                    function (i) {
                                      var s = [];
                                      return (
                                        i.charCodeAt(0) === 46 && s.push(''),
                                        i.replace(Wm, function (h, _, _e, ot) {
                                          s.push(
                                            _e ? ot.replace(Tm, '$1') : _ || h
                                          );
                                        }),
                                        s
                                      );
                                    },
                                    function (i) {
                                      return Tl.size === 500 && Tl.clear(), i;
                                    }
                                  )),
                                  (Tl = Al.cache),
                                  Al);
                              function bn(i) {
                                if (typeof i == 'string' || nn(i)) return i;
                                var s = i + '';
                                return s == '0' && 1 / i == -1 / 0 ? '-0' : s;
                              }
                              function Jn(i) {
                                if (i != null) {
                                  try {
                                    return Do.call(i);
                                  } catch {}
                                  try {
                                    return i + '';
                                  } catch {}
                                }
                                return '';
                              }
                              function Vp(i) {
                                if (i instanceof hr) return i.clone();
                                var s = new sn(i.__wrapped__, i.__chain__);
                                return (
                                  (s.__actions__ = Qr(i.__actions__)),
                                  (s.__index__ = i.__index__),
                                  (s.__values__ = i.__values__),
                                  s
                                );
                              }
                              var Xv = pr(function (i, s) {
                                  return Ir(i) ? _o(i, $r(s, 1, Ir, !0)) : [];
                                }),
                                Jv = pr(function (i, s) {
                                  var h = dn(s);
                                  return (
                                    Ir(h) && (h = b),
                                    Ir(i)
                                      ? _o(i, $r(s, 1, Ir, !0), or(h, 2))
                                      : []
                                  );
                                }),
                                qv = pr(function (i, s) {
                                  var h = dn(s);
                                  return (
                                    Ir(h) && (h = b),
                                    Ir(i) ? _o(i, $r(s, 1, Ir, !0), b, h) : []
                                  );
                                });
                              function Hp(i, s, h) {
                                var _ = i == null ? 0 : i.length;
                                if (!_) return -1;
                                var _e = h == null ? 0 : dr(h);
                                return (
                                  _e < 0 && (_e = Tr(_ + _e, 0)),
                                  Ao(i, or(s, 3), _e)
                                );
                              }
                              function Zp(i, s, h) {
                                var _ = i == null ? 0 : i.length;
                                if (!_) return -1;
                                var _e = _ - 1;
                                return (
                                  h !== b &&
                                    ((_e = dr(h)),
                                    (_e =
                                      h < 0 ? Tr(_ + _e, 0) : Br(_e, _ - 1))),
                                  Ao(i, or(s, 3), _e, !0)
                                );
                              }
                              function Yp(i) {
                                return i != null && i.length ? $r(i, 1) : [];
                              }
                              function Kp(i) {
                                return i && i.length ? i[0] : b;
                              }
                              var ey = pr(function (i) {
                                  var s = Wr(i, qu);
                                  return s.length && s[0] === i[0] ? Gu(s) : [];
                                }),
                                ty = pr(function (i) {
                                  var s = dn(i),
                                    h = Wr(i, qu);
                                  return (
                                    s === dn(h) ? (s = b) : h.pop(),
                                    h.length && h[0] === i[0]
                                      ? Gu(h, or(s, 2))
                                      : []
                                  );
                                }),
                                ry = pr(function (i) {
                                  var s = dn(i),
                                    h = Wr(i, qu);
                                  return (
                                    (s = typeof s == 'function' ? s : b) &&
                                      h.pop(),
                                    h.length && h[0] === i[0] ? Gu(h, b, s) : []
                                  );
                                });
                              function dn(i) {
                                var s = i == null ? 0 : i.length;
                                return s ? i[s - 1] : b;
                              }
                              var ny = pr(Qp);
                              function Qp(i, s) {
                                return i && i.length && s && s.length
                                  ? Zu(i, s)
                                  : i;
                              }
                              var oy = Rn(function (i, s) {
                                var h = i == null ? 0 : i.length,
                                  _ = zu(i, s);
                                return (
                                  sp(
                                    i,
                                    Wr(s, function (_e) {
                                      return Pn(_e, h) ? +_e : _e;
                                    }).sort(xp)
                                  ),
                                  _
                                );
                              });
                              function Ml(i) {
                                return i == null ? i : Rv.call(i);
                              }
                              var iy = pr(function (i) {
                                  return Dn($r(i, 1, Ir, !0));
                                }),
                                ay = pr(function (i) {
                                  var s = dn(i);
                                  return (
                                    Ir(s) && (s = b),
                                    Dn($r(i, 1, Ir, !0), or(s, 2))
                                  );
                                }),
                                uy = pr(function (i) {
                                  var s = dn(i);
                                  return (
                                    (s = typeof s == 'function' ? s : b),
                                    Dn($r(i, 1, Ir, !0), b, s)
                                  );
                                });
                              function Fl(i) {
                                if (!i || !i.length) return [];
                                var s = 0;
                                return (
                                  (i = An(i, function (h) {
                                    if (Ir(h)) return (s = Tr(h.length, s)), !0;
                                  })),
                                  Ou(s, function (h) {
                                    return Wr(i, Wu(h));
                                  })
                                );
                              }
                              function Xp(i, s) {
                                if (!i || !i.length) return [];
                                var h = Fl(i);
                                return s == null
                                  ? h
                                  : Wr(h, function (_) {
                                      return en(s, b, _);
                                    });
                              }
                              var ly = pr(function (i, s) {
                                  return Ir(i) ? _o(i, s) : [];
                                }),
                                sy = pr(function (i) {
                                  return Ju(An(i, Ir));
                                }),
                                cy = pr(function (i) {
                                  var s = dn(i);
                                  return (
                                    Ir(s) && (s = b), Ju(An(i, Ir), or(s, 2))
                                  );
                                }),
                                fy = pr(function (i) {
                                  var s = dn(i);
                                  return (
                                    (s = typeof s == 'function' ? s : b),
                                    Ju(An(i, Ir), b, s)
                                  );
                                }),
                                dy = pr(Fl),
                                py = pr(function (i) {
                                  var s = i.length,
                                    h = s > 1 ? i[s - 1] : b;
                                  return (
                                    (h =
                                      typeof h == 'function'
                                        ? (i.pop(), h)
                                        : b),
                                    Xp(i, h)
                                  );
                                });
                              function Jp(i) {
                                var s = tt(i);
                                return (s.__chain__ = !0), s;
                              }
                              function iu(i, s) {
                                return s(i);
                              }
                              var hy = Rn(function (i) {
                                  var s = i.length,
                                    h = s ? i[0] : 0,
                                    _ = this.__wrapped__,
                                    _e = function (ot) {
                                      return zu(ot, i);
                                    };
                                  return !(s > 1 || this.__actions__.length) &&
                                    _ instanceof hr &&
                                    Pn(h)
                                    ? ((_ = _.slice(
                                        h,
                                        +h + (s ? 1 : 0)
                                      )).__actions__.push({
                                        func: iu,
                                        args: [_e],
                                        thisArg: b,
                                      }),
                                      new sn(_, this.__chain__).thru(function (
                                        ot
                                      ) {
                                        return (
                                          s && !ot.length && ot.push(b), ot
                                        );
                                      }))
                                    : this.thru(_e);
                                }),
                                my = ba(function (i, s, h) {
                                  br.call(i, h) ? ++i[h] : Cn(i, h, 1);
                                }),
                                gy = Ep(Hp),
                                vy = Ep(Zp);
                              function qp(i, s) {
                                return (fr(i) ? un : zn)(i, or(s, 3));
                              }
                              function _h(i, s) {
                                return (fr(i) ? uv : qs)(i, or(s, 3));
                              }
                              var yy = ba(function (i, s, h) {
                                  br.call(i, h) ? i[h].push(s) : Cn(i, h, [s]);
                                }),
                                xy = pr(function (i, s, h) {
                                  var _ = -1,
                                    _e = typeof s == 'function',
                                    ot = Xr(i) ? Xt(i.length) : [];
                                  return (
                                    zn(i, function (ft) {
                                      ot[++_] = _e
                                        ? en(s, ft, h)
                                        : jo(ft, s, h);
                                    }),
                                    ot
                                  );
                                }),
                                wy = ba(function (i, s, h) {
                                  Cn(i, h, s);
                                });
                              function au(i, s) {
                                return (fr(i) ? Wr : np)(i, or(s, 3));
                              }
                              var by = ba(
                                  function (i, s, h) {
                                    i[h ? 0 : 1].push(s);
                                  },
                                  function () {
                                    return [[], []];
                                  }
                                ),
                                ky = pr(function (i, s) {
                                  if (i == null) return [];
                                  var h = s.length;
                                  return (
                                    h > 1 && Yr(i, s[0], s[1])
                                      ? (s = [])
                                      : h > 2 &&
                                        Yr(s[0], s[1], s[2]) &&
                                        (s = [s[0]]),
                                    up(i, $r(s, 1), [])
                                  );
                                }),
                                uu =
                                  kv ||
                                  function () {
                                    return Dr.Date.now();
                                  };
                              function em(i, s, h) {
                                return (
                                  (s = h ? b : s),
                                  (s = i && s == null ? i.length : s),
                                  Wn(i, nt, b, b, b, b, s)
                                );
                              }
                              function tm(i, s) {
                                var h;
                                if (typeof s != 'function') throw new ln(ut);
                                return (
                                  (i = dr(i)),
                                  function () {
                                    return (
                                      --i > 0 && (h = s.apply(this, arguments)),
                                      i <= 1 && (s = b),
                                      h
                                    );
                                  }
                                );
                              }
                              var zl = pr(function (i, s, h) {
                                  var _ = 1;
                                  if (h.length) {
                                    var _e = Mn(h, fo(zl));
                                    _ |= ct;
                                  }
                                  return Wn(i, _, s, h, _e);
                                }),
                                rm = pr(function (i, s, h) {
                                  var _ = 3;
                                  if (h.length) {
                                    var _e = Mn(h, fo(rm));
                                    _ |= ct;
                                  }
                                  return Wn(s, _, i, h, _e);
                                });
                              function nm(i, s, h) {
                                var _,
                                  _e,
                                  ot,
                                  ft,
                                  ht,
                                  xt,
                                  It = 0,
                                  Ot = !1,
                                  $t = !1,
                                  Jt = !0;
                                if (typeof i != 'function') throw new ln(ut);
                                function qt(Ht) {
                                  var lr = _,
                                    ar = _e;
                                  return (
                                    (_ = _e = b),
                                    (It = Ht),
                                    (ft = i.apply(ar, lr))
                                  );
                                }
                                function rr(Ht) {
                                  var lr = Ht - xt;
                                  return (
                                    xt === b ||
                                    lr >= s ||
                                    lr < 0 ||
                                    ($t && Ht - It >= ot)
                                  );
                                }
                                function Nt() {
                                  var Ht = uu();
                                  if (rr(Ht)) return Gt(Ht);
                                  ht = Ro(
                                    Nt,
                                    (function (lr) {
                                      var ar = s - (lr - xt);
                                      return $t ? Br(ar, ot - (lr - It)) : ar;
                                    })(Ht)
                                  );
                                }
                                function Gt(Ht) {
                                  return (
                                    (ht = b),
                                    Jt && _ ? qt(Ht) : ((_ = _e = b), ft)
                                  );
                                }
                                function nr() {
                                  var Ht = uu(),
                                    lr = rr(Ht);
                                  if (
                                    ((_ = arguments),
                                    (_e = this),
                                    (xt = Ht),
                                    lr)
                                  ) {
                                    if (ht === b)
                                      return (function (ar) {
                                        return (
                                          (It = ar),
                                          (ht = Ro(Nt, s)),
                                          Ot ? qt(ar) : ft
                                        );
                                      })(xt);
                                    if ($t)
                                      return gp(ht), (ht = Ro(Nt, s)), qt(xt);
                                  }
                                  return ht === b && (ht = Ro(Nt, s)), ft;
                                }
                                return (
                                  (s = pn(s) || 0),
                                  Rr(h) &&
                                    ((Ot = !!h.leading),
                                    (ot = ($t = 'maxWait' in h)
                                      ? Tr(pn(h.maxWait) || 0, s)
                                      : ot),
                                    (Jt = 'trailing' in h ? !!h.trailing : Jt)),
                                  (nr.cancel = function () {
                                    ht !== b && gp(ht),
                                      (It = 0),
                                      (_ = xt = _e = ht = b);
                                  }),
                                  (nr.flush = function () {
                                    return ht === b ? ft : Gt(uu());
                                  }),
                                  nr
                                );
                              }
                              var _y = pr(function (i, s) {
                                  return Js(i, 1, s);
                                }),
                                jy = pr(function (i, s, h) {
                                  return Js(i, pn(s) || 0, h);
                                });
                              function lu(i, s) {
                                if (
                                  typeof i != 'function' ||
                                  (s != null && typeof s != 'function')
                                )
                                  throw new ln(ut);
                                var h = function () {
                                  var _ = arguments,
                                    _e = s ? s.apply(this, _) : _[0],
                                    ot = h.cache;
                                  if (ot.has(_e)) return ot.get(_e);
                                  var ft = i.apply(this, _);
                                  return (h.cache = ot.set(_e, ft) || ot), ft;
                                };
                                return (h.cache = new (lu.Cache || Sn)()), h;
                              }
                              function su(i) {
                                if (typeof i != 'function') throw new ln(ut);
                                return function () {
                                  var s = arguments;
                                  switch (s.length) {
                                    case 0:
                                      return !i.call(this);
                                    case 1:
                                      return !i.call(this, s[0]);
                                    case 2:
                                      return !i.call(this, s[0], s[1]);
                                    case 3:
                                      return !i.call(this, s[0], s[1], s[2]);
                                  }
                                  return !i.apply(this, s);
                                };
                              }
                              lu.Cache = Sn;
                              var Ey = Hv(function (i, s) {
                                  var h = (s =
                                    s.length == 1 && fr(s[0])
                                      ? Wr(s[0], tn(or()))
                                      : Wr($r(s, 1), tn(or()))).length;
                                  return pr(function (_) {
                                    for (
                                      var _e = -1, ot = Br(_.length, h);
                                      ++_e < ot;

                                    )
                                      _[_e] = s[_e].call(this, _[_e]);
                                    return en(i, this, _);
                                  });
                                }),
                                Dl = pr(function (i, s) {
                                  var h = Mn(s, fo(Dl));
                                  return Wn(i, ct, b, s, h);
                                }),
                                om = pr(function (i, s) {
                                  var h = Mn(s, fo(om));
                                  return Wn(i, 64, b, s, h);
                                }),
                                Sy = Rn(function (i, s) {
                                  return Wn(i, 256, b, b, b, s);
                                });
                              function vn(i, s) {
                                return i === s || (i != i && s != s);
                              }
                              var Cy = tu(Uu),
                                Wy = tu(function (i, s) {
                                  return i >= s;
                                }),
                                qn = ep(
                                  (function () {
                                    return arguments;
                                  })()
                                )
                                  ? ep
                                  : function (i) {
                                      return (
                                        Pr(i) &&
                                        br.call(i, 'callee') &&
                                        !Gs.call(i, 'callee')
                                      );
                                    },
                                fr = Xt.isArray,
                                Ry = js
                                  ? tn(js)
                                  : function (i) {
                                      return Pr(i) && Zr(i) == _r;
                                    };
                              function Xr(i) {
                                return i != null && cu(i.length) && !On(i);
                              }
                              function Ir(i) {
                                return Pr(i) && Xr(i);
                              }
                              var Gn = jv || Xl,
                                Py = Es
                                  ? tn(Es)
                                  : function (i) {
                                      return Pr(i) && Zr(i) == At;
                                    };
                              function $l(i) {
                                if (!Pr(i)) return !1;
                                var s = Zr(i);
                                return (
                                  s == wt ||
                                  s == '[object DOMException]' ||
                                  (typeof i.message == 'string' &&
                                    typeof i.name == 'string' &&
                                    !Po(i))
                                );
                              }
                              function On(i) {
                                if (!Rr(i)) return !1;
                                var s = Zr(i);
                                return (
                                  s == Ct ||
                                  s == St ||
                                  s == '[object AsyncFunction]' ||
                                  s == '[object Proxy]'
                                );
                              }
                              function im(i) {
                                return typeof i == 'number' && i == dr(i);
                              }
                              function cu(i) {
                                return (
                                  typeof i == 'number' &&
                                  i > -1 &&
                                  i % 1 == 0 &&
                                  i <= lt
                                );
                              }
                              function Rr(i) {
                                var s = typeof i;
                                return (
                                  i != null &&
                                  (s == 'object' || s == 'function')
                                );
                              }
                              function Pr(i) {
                                return i != null && typeof i == 'object';
                              }
                              var am = Ss
                                ? tn(Ss)
                                : function (i) {
                                    return Pr(i) && Vr(i) == Mt;
                                  };
                              function um(i) {
                                return (
                                  typeof i == 'number' || (Pr(i) && Zr(i) == Ut)
                                );
                              }
                              function Po(i) {
                                if (!Pr(i) || Zr(i) != Bt) return !1;
                                var s = Bo(i);
                                if (s === null) return !0;
                                var h =
                                  br.call(s, 'constructor') && s.constructor;
                                return (
                                  typeof h == 'function' &&
                                  h instanceof h &&
                                  Do.call(h) == yv
                                );
                              }
                              var Ul = Cs
                                  ? tn(Cs)
                                  : function (i) {
                                      return Pr(i) && Zr(i) == Qt;
                                    },
                                lm = Ws
                                  ? tn(Ws)
                                  : function (i) {
                                      return Pr(i) && Vr(i) == Yt;
                                    };
                              function fu(i) {
                                return (
                                  typeof i == 'string' ||
                                  (!fr(i) && Pr(i) && Zr(i) == sr)
                                );
                              }
                              function nn(i) {
                                return (
                                  typeof i == 'symbol' || (Pr(i) && Zr(i) == mr)
                                );
                              }
                              var po = Rs
                                  ? tn(Rs)
                                  : function (i) {
                                      return (
                                        Pr(i) && cu(i.length) && !!Er[Zr(i)]
                                      );
                                    },
                                Oy = tu(Hu),
                                Iy = tu(function (i, s) {
                                  return i <= s;
                                });
                              function sm(i) {
                                if (!i) return [];
                                if (Xr(i)) return fu(i) ? mn(i) : Qr(i);
                                if (vo && i[vo])
                                  return (function (h) {
                                    for (var _, _e = []; !(_ = h.next()).done; )
                                      _e.push(_.value);
                                    return _e;
                                  })(i[vo]());
                                var s = Vr(i);
                                return (s == Mt ? Nu : s == Yt ? To : ho)(i);
                              }
                              function In(i) {
                                return i
                                  ? (i = pn(i)) === at || i === -1 / 0
                                    ? 17976931348623157e292 * (i < 0 ? -1 : 1)
                                    : i == i
                                    ? i
                                    : 0
                                  : i === 0
                                  ? i
                                  : 0;
                              }
                              function dr(i) {
                                var s = In(i),
                                  h = s % 1;
                                return s == s ? (h ? s - h : s) : 0;
                              }
                              function cm(i) {
                                return i ? Kn(dr(i), 0, Rt) : 0;
                              }
                              function pn(i) {
                                if (typeof i == 'number') return i;
                                if (nn(i)) return Et;
                                if (Rr(i)) {
                                  var s =
                                    typeof i.valueOf == 'function'
                                      ? i.valueOf()
                                      : i;
                                  i = Rr(s) ? s + '' : s;
                                }
                                if (typeof i != 'string')
                                  return i === 0 ? i : +i;
                                i = As(i);
                                var h = zm.test(i);
                                return h || $m.test(i)
                                  ? ov(i.slice(2), h ? 2 : 8)
                                  : Fm.test(i)
                                  ? Et
                                  : +i;
                              }
                              function fm(i) {
                                return wn(i, Jr(i));
                              }
                              function wr(i) {
                                return i == null ? '' : rn(i);
                              }
                              var Ny = so(function (i, s) {
                                  if (Wo(s) || Xr(s)) wn(s, zr(s), i);
                                  else
                                    for (var h in s)
                                      br.call(s, h) && ko(i, h, s[h]);
                                }),
                                dm = so(function (i, s) {
                                  wn(s, Jr(s), i);
                                }),
                                du = so(function (i, s, h, _) {
                                  wn(s, Jr(s), i, _);
                                }),
                                Ly = so(function (i, s, h, _) {
                                  wn(s, zr(s), i, _);
                                }),
                                Ay = Rn(zu),
                                Ty = pr(function (i, s) {
                                  i = Sr(i);
                                  var h = -1,
                                    _ = s.length,
                                    _e = _ > 2 ? s[2] : b;
                                  for (
                                    _e && Yr(s[0], s[1], _e) && (_ = 1);
                                    ++h < _;

                                  )
                                    for (
                                      var ot = s[h],
                                        ft = Jr(ot),
                                        ht = -1,
                                        xt = ft.length;
                                      ++ht < xt;

                                    ) {
                                      var It = ft[ht],
                                        Ot = i[It];
                                      (Ot === b ||
                                        (vn(Ot, io[It]) && !br.call(i, It))) &&
                                        (i[It] = ot[It]);
                                    }
                                  return i;
                                }),
                                My = pr(function (i) {
                                  return i.push(b, Ip), en(pm, b, i);
                                });
                              function Gl(i, s, h) {
                                var _ = i == null ? b : Qn(i, s);
                                return _ === b ? h : _;
                              }
                              function Bl(i, s) {
                                return i != null && Ap(i, s, Dv);
                              }
                              var Fy = Cp(function (i, s, h) {
                                  s != null &&
                                    typeof s.toString != 'function' &&
                                    (s = $o.call(s)),
                                    (i[s] = h);
                                }, Hl(qr)),
                                zy = Cp(function (i, s, h) {
                                  s != null &&
                                    typeof s.toString != 'function' &&
                                    (s = $o.call(s)),
                                    br.call(i, s) ? i[s].push(h) : (i[s] = [h]);
                                }, or),
                                Dy = pr(jo);
                              function zr(i) {
                                return Xr(i) ? Ys(i) : Vu(i);
                              }
                              function Jr(i) {
                                return Xr(i)
                                  ? Ys(i, !0)
                                  : (function (s) {
                                      if (!Rr(s))
                                        return (function (ot) {
                                          var ft = [];
                                          if (ot != null)
                                            for (var ht in Sr(ot)) ft.push(ht);
                                          return ft;
                                        })(s);
                                      var h = Wo(s),
                                        _ = [];
                                      for (var _e in s)
                                        (_e != 'constructor' ||
                                          (!h && br.call(s, _e))) &&
                                          _.push(_e);
                                      return _;
                                    })(i);
                              }
                              var $y = so(function (i, s, h) {
                                  na(i, s, h);
                                }),
                                pm = so(function (i, s, h, _) {
                                  na(i, s, h, _);
                                }),
                                Uy = Rn(function (i, s) {
                                  var h = {};
                                  if (i == null) return h;
                                  var _ = !1;
                                  (s = Wr(s, function (ot) {
                                    return (
                                      (ot = $n(ot, i)),
                                      _ || (_ = ot.length > 1),
                                      ot
                                    );
                                  })),
                                    wn(i, Cl(i), h),
                                    _ && (h = cn(h, 7, Yv));
                                  for (var _e = s.length; _e--; ) Xu(h, s[_e]);
                                  return h;
                                }),
                                Gy = Rn(function (i, s) {
                                  return i == null
                                    ? {}
                                    : (function (h, _) {
                                        return lp(h, _, function (_e, ot) {
                                          return Bl(h, ot);
                                        });
                                      })(i, s);
                                });
                              function hm(i, s) {
                                if (i == null) return {};
                                var h = Wr(Cl(i), function (_) {
                                  return [_];
                                });
                                return (
                                  (s = or(s)),
                                  lp(i, h, function (_, _e) {
                                    return s(_, _e[0]);
                                  })
                                );
                              }
                              var mm = Pp(zr),
                                gm = Pp(Jr);
                              function ho(i) {
                                return i == null ? [] : Iu(i, zr(i));
                              }
                              var By = co(function (i, s, h) {
                                return (
                                  (s = s.toLowerCase()), i + (h ? vm(s) : s)
                                );
                              });
                              function vm(i) {
                                return Vl(wr(i).toLowerCase());
                              }
                              function ym(i) {
                                return (
                                  (i = wr(i)) &&
                                  i.replace(Gm, fv).replace(Xm, '')
                                );
                              }
                              var Vy = co(function (i, s, h) {
                                  return i + (h ? '-' : '') + s.toLowerCase();
                                }),
                                Hy = co(function (i, s, h) {
                                  return i + (h ? ' ' : '') + s.toLowerCase();
                                }),
                                Zy = jp('toLowerCase'),
                                Yy = co(function (i, s, h) {
                                  return i + (h ? '_' : '') + s.toLowerCase();
                                }),
                                Ky = co(function (i, s, h) {
                                  return i + (h ? ' ' : '') + Vl(s);
                                }),
                                Qy = co(function (i, s, h) {
                                  return i + (h ? ' ' : '') + s.toUpperCase();
                                }),
                                Vl = jp('toUpperCase');
                              function xm(i, s, h) {
                                return (
                                  (i = wr(i)),
                                  (s = h ? b : s) === b
                                    ? (function (_) {
                                        return _g.test(_);
                                      })(i)
                                      ? (function (_) {
                                          return _.match(Jm) || [];
                                        })(i)
                                      : (function (_) {
                                          return _.match(Lm) || [];
                                        })(i)
                                    : i.match(s) || []
                                );
                              }
                              var wm = pr(function (i, s) {
                                  try {
                                    return en(i, b, s);
                                  } catch (h) {
                                    return $l(h) ? h : new gr(h);
                                  }
                                }),
                                Xy = Rn(function (i, s) {
                                  return (
                                    un(s, function (h) {
                                      (h = bn(h)), Cn(i, h, zl(i[h], i));
                                    }),
                                    i
                                  );
                                });
                              function Hl(i) {
                                return function () {
                                  return i;
                                };
                              }
                              var Jy = Sp(),
                                qy = Sp(!0);
                              function qr(i) {
                                return i;
                              }
                              function Zl(i) {
                                return rp(
                                  typeof i == 'function' ? i : cn(i, 1)
                                );
                              }
                              var e0 = pr(function (i, s) {
                                  return function (h) {
                                    return jo(h, i, s);
                                  };
                                }),
                                t0 = pr(function (i, s) {
                                  return function (h) {
                                    return jo(i, h, s);
                                  };
                                });
                              function Yl(i, s, h) {
                                var _ = zr(s),
                                  _e = _i(s, _);
                                h != null ||
                                  (Rr(s) && (_e.length || !_.length)) ||
                                  ((h = s),
                                  (s = i),
                                  (i = this),
                                  (_e = _i(s, zr(s))));
                                var ot = !(Rr(h) && 'chain' in h && !h.chain),
                                  ft = On(i);
                                return (
                                  un(_e, function (ht) {
                                    var xt = s[ht];
                                    (i[ht] = xt),
                                      ft &&
                                        (i.prototype[ht] = function () {
                                          var It = this.__chain__;
                                          if (ot || It) {
                                            var Ot = i(this.__wrapped__);
                                            return (
                                              (Ot.__actions__ = Qr(
                                                this.__actions__
                                              )).push({
                                                func: xt,
                                                args: arguments,
                                                thisArg: i,
                                              }),
                                              (Ot.__chain__ = It),
                                              Ot
                                            );
                                          }
                                          return xt.apply(
                                            i,
                                            Tn([this.value()], arguments)
                                          );
                                        });
                                  }),
                                  i
                                );
                              }
                              function Kl() {}
                              var r0 = _l(Wr),
                                n0 = _l(Ps),
                                o0 = _l(Cu);
                              function bm(i) {
                                return Ol(i)
                                  ? Wu(bn(i))
                                  : (function (s) {
                                      return function (h) {
                                        return Qn(h, s);
                                      };
                                    })(i);
                              }
                              var i0 = Wp(),
                                a0 = Wp(!0);
                              function Ql() {
                                return [];
                              }
                              function Xl() {
                                return !1;
                              }
                              var Jl,
                                u0 = $a(function (i, s) {
                                  return i + s;
                                }, 0),
                                l0 = El('ceil'),
                                s0 = $a(function (i, s) {
                                  return i / s;
                                }, 1),
                                c0 = El('floor'),
                                f0 = $a(function (i, s) {
                                  return i * s;
                                }, 1),
                                d0 = El('round'),
                                p0 = $a(function (i, s) {
                                  return i - s;
                                }, 0);
                              return (
                                (tt.after = function (i, s) {
                                  if (typeof s != 'function') throw new ln(ut);
                                  return (
                                    (i = dr(i)),
                                    function () {
                                      if (--i < 1)
                                        return s.apply(this, arguments);
                                    }
                                  );
                                }),
                                (tt.ary = em),
                                (tt.assign = Ny),
                                (tt.assignIn = dm),
                                (tt.assignInWith = du),
                                (tt.assignWith = Ly),
                                (tt.at = Ay),
                                (tt.before = tm),
                                (tt.bind = zl),
                                (tt.bindAll = Xy),
                                (tt.bindKey = rm),
                                (tt.castArray = function () {
                                  if (!arguments.length) return [];
                                  var i = arguments[0];
                                  return fr(i) ? i : [i];
                                }),
                                (tt.chain = Jp),
                                (tt.chunk = function (i, s, h) {
                                  s = (h ? Yr(i, s, h) : s === b)
                                    ? 1
                                    : Tr(dr(s), 0);
                                  var _ = i == null ? 0 : i.length;
                                  if (!_ || s < 1) return [];
                                  for (
                                    var _e = 0, ot = 0, ft = Xt(Zo(_ / s));
                                    _e < _;

                                  )
                                    ft[ot++] = fn(i, _e, (_e += s));
                                  return ft;
                                }),
                                (tt.compact = function (i) {
                                  for (
                                    var s = -1,
                                      h = i == null ? 0 : i.length,
                                      _ = 0,
                                      _e = [];
                                    ++s < h;

                                  ) {
                                    var ot = i[s];
                                    ot && (_e[_++] = ot);
                                  }
                                  return _e;
                                }),
                                (tt.concat = function () {
                                  var i = arguments.length;
                                  if (!i) return [];
                                  for (
                                    var s = Xt(i - 1), h = arguments[0], _ = i;
                                    _--;

                                  )
                                    s[_ - 1] = arguments[_];
                                  return Tn(fr(h) ? Qr(h) : [h], $r(s, 1));
                                }),
                                (tt.cond = function (i) {
                                  var s = i == null ? 0 : i.length,
                                    h = or();
                                  return (
                                    (i = s
                                      ? Wr(i, function (_) {
                                          if (typeof _[1] != 'function')
                                            throw new ln(ut);
                                          return [h(_[0]), _[1]];
                                        })
                                      : []),
                                    pr(function (_) {
                                      for (var _e = -1; ++_e < s; ) {
                                        var ot = i[_e];
                                        if (en(ot[0], this, _))
                                          return en(ot[1], this, _);
                                      }
                                    })
                                  );
                                }),
                                (tt.conforms = function (i) {
                                  return (function (s) {
                                    var h = zr(s);
                                    return function (_) {
                                      return Xs(_, s, h);
                                    };
                                  })(cn(i, 1));
                                }),
                                (tt.constant = Hl),
                                (tt.countBy = my),
                                (tt.create = function (i, s) {
                                  var h = lo(i);
                                  return s == null ? h : Qs(h, s);
                                }),
                                (tt.curry = function i(s, h, _) {
                                  var _e = Wn(
                                    s,
                                    8,
                                    b,
                                    b,
                                    b,
                                    b,
                                    b,
                                    (h = _ ? b : h)
                                  );
                                  return (_e.placeholder = i.placeholder), _e;
                                }),
                                (tt.curryRight = function i(s, h, _) {
                                  var _e = Wn(
                                    s,
                                    16,
                                    b,
                                    b,
                                    b,
                                    b,
                                    b,
                                    (h = _ ? b : h)
                                  );
                                  return (_e.placeholder = i.placeholder), _e;
                                }),
                                (tt.debounce = nm),
                                (tt.defaults = Ty),
                                (tt.defaultsDeep = My),
                                (tt.defer = _y),
                                (tt.delay = jy),
                                (tt.difference = Xv),
                                (tt.differenceBy = Jv),
                                (tt.differenceWith = qv),
                                (tt.drop = function (i, s, h) {
                                  var _ = i == null ? 0 : i.length;
                                  return _
                                    ? fn(
                                        i,
                                        (s = h || s === b ? 1 : dr(s)) < 0
                                          ? 0
                                          : s,
                                        _
                                      )
                                    : [];
                                }),
                                (tt.dropRight = function (i, s, h) {
                                  var _ = i == null ? 0 : i.length;
                                  return _
                                    ? fn(
                                        i,
                                        0,
                                        (s =
                                          _ - (s = h || s === b ? 1 : dr(s))) <
                                          0
                                          ? 0
                                          : s
                                      )
                                    : [];
                                }),
                                (tt.dropRightWhile = function (i, s) {
                                  return i && i.length
                                    ? xa(i, or(s, 3), !0, !0)
                                    : [];
                                }),
                                (tt.dropWhile = function (i, s) {
                                  return i && i.length
                                    ? xa(i, or(s, 3), !0)
                                    : [];
                                }),
                                (tt.fill = function (i, s, h, _) {
                                  var _e = i == null ? 0 : i.length;
                                  return _e
                                    ? (h &&
                                        typeof h != 'number' &&
                                        Yr(i, s, h) &&
                                        ((h = 0), (_ = _e)),
                                      (function (ot, ft, ht, xt) {
                                        var It = ot.length;
                                        for (
                                          (ht = dr(ht)) < 0 &&
                                            (ht = -ht > It ? 0 : It + ht),
                                            (xt =
                                              xt === b || xt > It
                                                ? It
                                                : dr(xt)) < 0 && (xt += It),
                                            xt = ht > xt ? 0 : cm(xt);
                                          ht < xt;

                                        )
                                          ot[ht++] = ft;
                                        return ot;
                                      })(i, s, h, _))
                                    : [];
                                }),
                                (tt.filter = function (i, s) {
                                  return (fr(i) ? An : _c)(i, or(s, 3));
                                }),
                                (tt.flatMap = function (i, s) {
                                  return $r(au(i, s), 1);
                                }),
                                (tt.flatMapDeep = function (i, s) {
                                  return $r(au(i, s), at);
                                }),
                                (tt.flatMapDepth = function (i, s, h) {
                                  return (
                                    (h = h === b ? 1 : dr(h)), $r(au(i, s), h)
                                  );
                                }),
                                (tt.flatten = Yp),
                                (tt.flattenDeep = function (i) {
                                  return i != null && i.length ? $r(i, at) : [];
                                }),
                                (tt.flattenDepth = function (i, s) {
                                  return i != null && i.length
                                    ? $r(i, (s = s === b ? 1 : dr(s)))
                                    : [];
                                }),
                                (tt.flip = function (i) {
                                  return Wn(i, 512);
                                }),
                                (tt.flow = Jy),
                                (tt.flowRight = qy),
                                (tt.fromPairs = function (i) {
                                  for (
                                    var s = -1,
                                      h = i == null ? 0 : i.length,
                                      _ = {};
                                    ++s < h;

                                  ) {
                                    var _e = i[s];
                                    _[_e[0]] = _e[1];
                                  }
                                  return _;
                                }),
                                (tt.functions = function (i) {
                                  return i == null ? [] : _i(i, zr(i));
                                }),
                                (tt.functionsIn = function (i) {
                                  return i == null ? [] : _i(i, Jr(i));
                                }),
                                (tt.groupBy = yy),
                                (tt.initial = function (i) {
                                  return i != null && i.length
                                    ? fn(i, 0, -1)
                                    : [];
                                }),
                                (tt.intersection = ey),
                                (tt.intersectionBy = ty),
                                (tt.intersectionWith = ry),
                                (tt.invert = Fy),
                                (tt.invertBy = zy),
                                (tt.invokeMap = xy),
                                (tt.iteratee = Zl),
                                (tt.keyBy = wy),
                                (tt.keys = zr),
                                (tt.keysIn = Jr),
                                (tt.map = au),
                                (tt.mapKeys = function (i, s) {
                                  var h = {};
                                  return (
                                    (s = or(s, 3)),
                                    xn(i, function (_, _e, ot) {
                                      Cn(h, s(_, _e, ot), _);
                                    }),
                                    h
                                  );
                                }),
                                (tt.mapValues = function (i, s) {
                                  var h = {};
                                  return (
                                    (s = or(s, 3)),
                                    xn(i, function (_, _e, ot) {
                                      Cn(h, _e, s(_, _e, ot));
                                    }),
                                    h
                                  );
                                }),
                                (tt.matches = function (i) {
                                  return op(cn(i, 1));
                                }),
                                (tt.matchesProperty = function (i, s) {
                                  return ip(i, cn(s, 1));
                                }),
                                (tt.memoize = lu),
                                (tt.merge = $y),
                                (tt.mergeWith = pm),
                                (tt.method = e0),
                                (tt.methodOf = t0),
                                (tt.mixin = Yl),
                                (tt.negate = su),
                                (tt.nthArg = function (i) {
                                  return (
                                    (i = dr(i)),
                                    pr(function (s) {
                                      return ap(s, i);
                                    })
                                  );
                                }),
                                (tt.omit = Uy),
                                (tt.omitBy = function (i, s) {
                                  return hm(i, su(or(s)));
                                }),
                                (tt.once = function (i) {
                                  return tm(2, i);
                                }),
                                (tt.orderBy = function (i, s, h, _) {
                                  return i == null
                                    ? []
                                    : (fr(s) || (s = s == null ? [] : [s]),
                                      fr((h = _ ? b : h)) ||
                                        (h = h == null ? [] : [h]),
                                      up(i, s, h));
                                }),
                                (tt.over = r0),
                                (tt.overArgs = Ey),
                                (tt.overEvery = n0),
                                (tt.overSome = o0),
                                (tt.partial = Dl),
                                (tt.partialRight = om),
                                (tt.partition = by),
                                (tt.pick = Gy),
                                (tt.pickBy = hm),
                                (tt.property = bm),
                                (tt.propertyOf = function (i) {
                                  return function (s) {
                                    return i == null ? b : Qn(i, s);
                                  };
                                }),
                                (tt.pull = ny),
                                (tt.pullAll = Qp),
                                (tt.pullAllBy = function (i, s, h) {
                                  return i && i.length && s && s.length
                                    ? Zu(i, s, or(h, 2))
                                    : i;
                                }),
                                (tt.pullAllWith = function (i, s, h) {
                                  return i && i.length && s && s.length
                                    ? Zu(i, s, b, h)
                                    : i;
                                }),
                                (tt.pullAt = oy),
                                (tt.range = i0),
                                (tt.rangeRight = a0),
                                (tt.rearg = Sy),
                                (tt.reject = function (i, s) {
                                  return (fr(i) ? An : _c)(i, su(or(s, 3)));
                                }),
                                (tt.remove = function (i, s) {
                                  var h = [];
                                  if (!i || !i.length) return h;
                                  var _ = -1,
                                    _e = [],
                                    ot = i.length;
                                  for (s = or(s, 3); ++_ < ot; ) {
                                    var ft = i[_];
                                    s(ft, _, i) && (h.push(ft), _e.push(_));
                                  }
                                  return sp(i, _e), h;
                                }),
                                (tt.rest = function (i, s) {
                                  if (typeof i != 'function') throw new ln(ut);
                                  return pr(i, (s = s === b ? s : dr(s)));
                                }),
                                (tt.reverse = Ml),
                                (tt.sampleSize = function (i, s, h) {
                                  return (
                                    (s = (h ? Yr(i, s, h) : s === b)
                                      ? 1
                                      : dr(s)),
                                    (fr(i) ? Av : Uv)(i, s)
                                  );
                                }),
                                (tt.set = function (i, s, h) {
                                  return i == null ? i : So(i, s, h);
                                }),
                                (tt.setWith = function (i, s, h, _) {
                                  return (
                                    (_ = typeof _ == 'function' ? _ : b),
                                    i == null ? i : So(i, s, h, _)
                                  );
                                }),
                                (tt.shuffle = function (i) {
                                  return (fr(i) ? Tv : Bv)(i);
                                }),
                                (tt.slice = function (i, s, h) {
                                  var _ = i == null ? 0 : i.length;
                                  return _
                                    ? (h && typeof h != 'number' && Yr(i, s, h)
                                        ? ((s = 0), (h = _))
                                        : ((s = s == null ? 0 : dr(s)),
                                          (h = h === b ? _ : dr(h))),
                                      fn(i, s, h))
                                    : [];
                                }),
                                (tt.sortBy = ky),
                                (tt.sortedUniq = function (i) {
                                  return i && i.length ? fp(i) : [];
                                }),
                                (tt.sortedUniqBy = function (i, s) {
                                  return i && i.length ? fp(i, or(s, 2)) : [];
                                }),
                                (tt.split = function (i, s, h) {
                                  return (
                                    h &&
                                      typeof h != 'number' &&
                                      Yr(i, s, h) &&
                                      (s = h = b),
                                    (h = h === b ? Rt : h >>> 0)
                                      ? (i = wr(i)) &&
                                        (typeof s == 'string' ||
                                          (s != null && !Ul(s))) &&
                                        !(s = rn(s)) &&
                                        no(i)
                                        ? Un(mn(i), 0, h)
                                        : i.split(s, h)
                                      : []
                                  );
                                }),
                                (tt.spread = function (i, s) {
                                  if (typeof i != 'function') throw new ln(ut);
                                  return (
                                    (s = s == null ? 0 : Tr(dr(s), 0)),
                                    pr(function (h) {
                                      var _ = h[s],
                                        _e = Un(h, 0, s);
                                      return _ && Tn(_e, _), en(i, this, _e);
                                    })
                                  );
                                }),
                                (tt.tail = function (i) {
                                  var s = i == null ? 0 : i.length;
                                  return s ? fn(i, 1, s) : [];
                                }),
                                (tt.take = function (i, s, h) {
                                  return i && i.length
                                    ? fn(
                                        i,
                                        0,
                                        (s = h || s === b ? 1 : dr(s)) < 0
                                          ? 0
                                          : s
                                      )
                                    : [];
                                }),
                                (tt.takeRight = function (i, s, h) {
                                  var _ = i == null ? 0 : i.length;
                                  return _
                                    ? fn(
                                        i,
                                        (s =
                                          _ - (s = h || s === b ? 1 : dr(s))) <
                                          0
                                          ? 0
                                          : s,
                                        _
                                      )
                                    : [];
                                }),
                                (tt.takeRightWhile = function (i, s) {
                                  return i && i.length
                                    ? xa(i, or(s, 3), !1, !0)
                                    : [];
                                }),
                                (tt.takeWhile = function (i, s) {
                                  return i && i.length ? xa(i, or(s, 3)) : [];
                                }),
                                (tt.tap = function (i, s) {
                                  return s(i), i;
                                }),
                                (tt.throttle = function (i, s, h) {
                                  var _ = !0,
                                    _e = !0;
                                  if (typeof i != 'function') throw new ln(ut);
                                  return (
                                    Rr(h) &&
                                      ((_ = 'leading' in h ? !!h.leading : _),
                                      (_e =
                                        'trailing' in h ? !!h.trailing : _e)),
                                    nm(i, s, {
                                      leading: _,
                                      maxWait: s,
                                      trailing: _e,
                                    })
                                  );
                                }),
                                (tt.thru = iu),
                                (tt.toArray = sm),
                                (tt.toPairs = mm),
                                (tt.toPairsIn = gm),
                                (tt.toPath = function (i) {
                                  return fr(i)
                                    ? Wr(i, bn)
                                    : nn(i)
                                    ? [i]
                                    : Qr(Bp(wr(i)));
                                }),
                                (tt.toPlainObject = fm),
                                (tt.transform = function (i, s, h) {
                                  var _ = fr(i),
                                    _e = _ || Gn(i) || po(i);
                                  if (((s = or(s, 4)), h == null)) {
                                    var ot = i && i.constructor;
                                    h = _e
                                      ? _
                                        ? new ot()
                                        : []
                                      : Rr(i) && On(ot)
                                      ? lo(Bo(i))
                                      : {};
                                  }
                                  return (
                                    (_e ? un : xn)(i, function (ft, ht, xt) {
                                      return s(h, ft, ht, xt);
                                    }),
                                    h
                                  );
                                }),
                                (tt.unary = function (i) {
                                  return em(i, 1);
                                }),
                                (tt.union = iy),
                                (tt.unionBy = ay),
                                (tt.unionWith = uy),
                                (tt.uniq = function (i) {
                                  return i && i.length ? Dn(i) : [];
                                }),
                                (tt.uniqBy = function (i, s) {
                                  return i && i.length ? Dn(i, or(s, 2)) : [];
                                }),
                                (tt.uniqWith = function (i, s) {
                                  return (
                                    (s = typeof s == 'function' ? s : b),
                                    i && i.length ? Dn(i, b, s) : []
                                  );
                                }),
                                (tt.unset = function (i, s) {
                                  return i == null || Xu(i, s);
                                }),
                                (tt.unzip = Fl),
                                (tt.unzipWith = Xp),
                                (tt.update = function (i, s, h) {
                                  return i == null ? i : pp(i, s, yl(h));
                                }),
                                (tt.updateWith = function (i, s, h, _) {
                                  return (
                                    (_ = typeof _ == 'function' ? _ : b),
                                    i == null ? i : pp(i, s, yl(h), _)
                                  );
                                }),
                                (tt.values = ho),
                                (tt.valuesIn = function (i) {
                                  return i == null ? [] : Iu(i, Jr(i));
                                }),
                                (tt.without = ly),
                                (tt.words = xm),
                                (tt.wrap = function (i, s) {
                                  return Dl(yl(s), i);
                                }),
                                (tt.xor = sy),
                                (tt.xorBy = cy),
                                (tt.xorWith = fy),
                                (tt.zip = dy),
                                (tt.zipObject = function (i, s) {
                                  return mp(i || [], s || [], ko);
                                }),
                                (tt.zipObjectDeep = function (i, s) {
                                  return mp(i || [], s || [], So);
                                }),
                                (tt.zipWith = py),
                                (tt.entries = mm),
                                (tt.entriesIn = gm),
                                (tt.extend = dm),
                                (tt.extendWith = du),
                                Yl(tt, tt),
                                (tt.add = u0),
                                (tt.attempt = wm),
                                (tt.camelCase = By),
                                (tt.capitalize = vm),
                                (tt.ceil = l0),
                                (tt.clamp = function (i, s, h) {
                                  return (
                                    h === b && ((h = s), (s = b)),
                                    h !== b && (h = (h = pn(h)) == h ? h : 0),
                                    s !== b && (s = (s = pn(s)) == s ? s : 0),
                                    Kn(pn(i), s, h)
                                  );
                                }),
                                (tt.clone = function (i) {
                                  return cn(i, 4);
                                }),
                                (tt.cloneDeep = function (i) {
                                  return cn(i, 5);
                                }),
                                (tt.cloneDeepWith = function (i, s) {
                                  return cn(
                                    i,
                                    5,
                                    (s = typeof s == 'function' ? s : b)
                                  );
                                }),
                                (tt.cloneWith = function (i, s) {
                                  return cn(
                                    i,
                                    4,
                                    (s = typeof s == 'function' ? s : b)
                                  );
                                }),
                                (tt.conformsTo = function (i, s) {
                                  return s == null || Xs(i, s, zr(s));
                                }),
                                (tt.deburr = ym),
                                (tt.defaultTo = function (i, s) {
                                  return i == null || i != i ? s : i;
                                }),
                                (tt.divide = s0),
                                (tt.endsWith = function (i, s, h) {
                                  (i = wr(i)), (s = rn(s));
                                  var _ = i.length,
                                    _e = (h = h === b ? _ : Kn(dr(h), 0, _));
                                  return (
                                    (h -= s.length) >= 0 && i.slice(h, _e) == s
                                  );
                                }),
                                (tt.eq = vn),
                                (tt.escape = function (i) {
                                  return (i = wr(i)) && Vn.test(i)
                                    ? i.replace(Gr, dv)
                                    : i;
                                }),
                                (tt.escapeRegExp = function (i) {
                                  return (i = wr(i)) && Rm.test(i)
                                    ? i.replace(yu, '\\$&')
                                    : i;
                                }),
                                (tt.every = function (i, s, h) {
                                  var _ = fr(i) ? Ps : Fv;
                                  return (
                                    h && Yr(i, s, h) && (s = b), _(i, or(s, 3))
                                  );
                                }),
                                (tt.find = gy),
                                (tt.findIndex = Hp),
                                (tt.findKey = function (i, s) {
                                  return Os(i, or(s, 3), xn);
                                }),
                                (tt.findLast = vy),
                                (tt.findLastIndex = Zp),
                                (tt.findLastKey = function (i, s) {
                                  return Os(i, or(s, 3), $u);
                                }),
                                (tt.floor = c0),
                                (tt.forEach = qp),
                                (tt.forEachRight = _h),
                                (tt.forIn = function (i, s) {
                                  return i == null ? i : Du(i, or(s, 3), Jr);
                                }),
                                (tt.forInRight = function (i, s) {
                                  return i == null ? i : _f(i, or(s, 3), Jr);
                                }),
                                (tt.forOwn = function (i, s) {
                                  return i && xn(i, or(s, 3));
                                }),
                                (tt.forOwnRight = function (i, s) {
                                  return i && $u(i, or(s, 3));
                                }),
                                (tt.get = Gl),
                                (tt.gt = Cy),
                                (tt.gte = Wy),
                                (tt.has = function (i, s) {
                                  return i != null && Ap(i, s, zv);
                                }),
                                (tt.hasIn = Bl),
                                (tt.head = Kp),
                                (tt.identity = qr),
                                (tt.includes = function (i, s, h, _) {
                                  (i = Xr(i) ? i : ho(i)),
                                    (h = h && !_ ? dr(h) : 0);
                                  var _e = i.length;
                                  return (
                                    h < 0 && (h = Tr(_e + h, 0)),
                                    fu(i)
                                      ? h <= _e && i.indexOf(s, h) > -1
                                      : !!_e && ro(i, s, h) > -1
                                  );
                                }),
                                (tt.indexOf = function (i, s, h) {
                                  var _ = i == null ? 0 : i.length;
                                  if (!_) return -1;
                                  var _e = h == null ? 0 : dr(h);
                                  return (
                                    _e < 0 && (_e = Tr(_ + _e, 0)), ro(i, s, _e)
                                  );
                                }),
                                (tt.inRange = function (i, s, h) {
                                  return (
                                    (s = In(s)),
                                    h === b ? ((h = s), (s = 0)) : (h = In(h)),
                                    (function (_, _e, ot) {
                                      return _ >= Br(_e, ot) && _ < Tr(_e, ot);
                                    })((i = pn(i)), s, h)
                                  );
                                }),
                                (tt.invoke = Dy),
                                (tt.isArguments = qn),
                                (tt.isArray = fr),
                                (tt.isArrayBuffer = Ry),
                                (tt.isArrayLike = Xr),
                                (tt.isArrayLikeObject = Ir),
                                (tt.isBoolean = function (i) {
                                  return (
                                    i === !0 ||
                                    i === !1 ||
                                    (Pr(i) && Zr(i) == Wt)
                                  );
                                }),
                                (tt.isBuffer = Gn),
                                (tt.isDate = Py),
                                (tt.isElement = function (i) {
                                  return Pr(i) && i.nodeType === 1 && !Po(i);
                                }),
                                (tt.isEmpty = function (i) {
                                  if (i == null) return !0;
                                  if (
                                    Xr(i) &&
                                    (fr(i) ||
                                      typeof i == 'string' ||
                                      typeof i.splice == 'function' ||
                                      Gn(i) ||
                                      po(i) ||
                                      qn(i))
                                  )
                                    return !i.length;
                                  var s = Vr(i);
                                  if (s == Mt || s == Yt) return !i.size;
                                  if (Wo(i)) return !Vu(i).length;
                                  for (var h in i) if (br.call(i, h)) return !1;
                                  return !0;
                                }),
                                (tt.isEqual = function (i, s) {
                                  return Eo(i, s);
                                }),
                                (tt.isEqualWith = function (i, s, h) {
                                  var _ = (h = typeof h == 'function' ? h : b)
                                    ? h(i, s)
                                    : b;
                                  return _ === b ? Eo(i, s, b, h) : !!_;
                                }),
                                (tt.isError = $l),
                                (tt.isFinite = function (i) {
                                  return typeof i == 'number' && Vs(i);
                                }),
                                (tt.isFunction = On),
                                (tt.isInteger = im),
                                (tt.isLength = cu),
                                (tt.isMap = am),
                                (tt.isMatch = function (i, s) {
                                  return i === s || Bu(i, s, Rl(s));
                                }),
                                (tt.isMatchWith = function (i, s, h) {
                                  return (
                                    (h = typeof h == 'function' ? h : b),
                                    Bu(i, s, Rl(s), h)
                                  );
                                }),
                                (tt.isNaN = function (i) {
                                  return um(i) && i != +i;
                                }),
                                (tt.isNative = function (i) {
                                  if (Qv(i))
                                    throw new gr(
                                      'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.'
                                    );
                                  return tp(i);
                                }),
                                (tt.isNil = function (i) {
                                  return i == null;
                                }),
                                (tt.isNull = function (i) {
                                  return i === null;
                                }),
                                (tt.isNumber = um),
                                (tt.isObject = Rr),
                                (tt.isObjectLike = Pr),
                                (tt.isPlainObject = Po),
                                (tt.isRegExp = Ul),
                                (tt.isSafeInteger = function (i) {
                                  return (
                                    im(i) && i >= -9007199254740991 && i <= lt
                                  );
                                }),
                                (tt.isSet = lm),
                                (tt.isString = fu),
                                (tt.isSymbol = nn),
                                (tt.isTypedArray = po),
                                (tt.isUndefined = function (i) {
                                  return i === b;
                                }),
                                (tt.isWeakMap = function (i) {
                                  return Pr(i) && Vr(i) == vr;
                                }),
                                (tt.isWeakSet = function (i) {
                                  return Pr(i) && Zr(i) == '[object WeakSet]';
                                }),
                                (tt.join = function (i, s) {
                                  return i == null ? '' : Ev.call(i, s);
                                }),
                                (tt.kebabCase = Vy),
                                (tt.last = dn),
                                (tt.lastIndexOf = function (i, s, h) {
                                  var _ = i == null ? 0 : i.length;
                                  if (!_) return -1;
                                  var _e = _;
                                  return (
                                    h !== b &&
                                      (_e =
                                        (_e = dr(h)) < 0
                                          ? Tr(_ + _e, 0)
                                          : Br(_e, _ - 1)),
                                    s == s
                                      ? (function (ot, ft, ht) {
                                          for (var xt = ht + 1; xt--; )
                                            if (ot[xt] === ft) return xt;
                                          return xt;
                                        })(i, s, _e)
                                      : Ao(i, Is, _e, !0)
                                  );
                                }),
                                (tt.lowerCase = Hy),
                                (tt.lowerFirst = Zy),
                                (tt.lt = Oy),
                                (tt.lte = Iy),
                                (tt.max = function (i) {
                                  return i && i.length ? qo(i, qr, Uu) : b;
                                }),
                                (tt.maxBy = function (i, s) {
                                  return i && i.length
                                    ? qo(i, or(s, 2), Uu)
                                    : b;
                                }),
                                (tt.mean = function (i) {
                                  return Ns(i, qr);
                                }),
                                (tt.meanBy = function (i, s) {
                                  return Ns(i, or(s, 2));
                                }),
                                (tt.min = function (i) {
                                  return i && i.length ? qo(i, qr, Hu) : b;
                                }),
                                (tt.minBy = function (i, s) {
                                  return i && i.length
                                    ? qo(i, or(s, 2), Hu)
                                    : b;
                                }),
                                (tt.stubArray = Ql),
                                (tt.stubFalse = Xl),
                                (tt.stubObject = function () {
                                  return {};
                                }),
                                (tt.stubString = function () {
                                  return '';
                                }),
                                (tt.stubTrue = function () {
                                  return !0;
                                }),
                                (tt.multiply = f0),
                                (tt.nth = function (i, s) {
                                  return i && i.length ? ap(i, dr(s)) : b;
                                }),
                                (tt.noConflict = function () {
                                  return Dr._ === this && (Dr._ = xv), this;
                                }),
                                (tt.noop = Kl),
                                (tt.now = uu),
                                (tt.pad = function (i, s, h) {
                                  i = wr(i);
                                  var _ = (s = dr(s)) ? oo(i) : 0;
                                  if (!s || _ >= s) return i;
                                  var _e = (s - _) / 2;
                                  return eu(Yo(_e), h) + i + eu(Zo(_e), h);
                                }),
                                (tt.padEnd = function (i, s, h) {
                                  i = wr(i);
                                  var _ = (s = dr(s)) ? oo(i) : 0;
                                  return s && _ < s ? i + eu(s - _, h) : i;
                                }),
                                (tt.padStart = function (i, s, h) {
                                  i = wr(i);
                                  var _ = (s = dr(s)) ? oo(i) : 0;
                                  return s && _ < s ? eu(s - _, h) + i : i;
                                }),
                                (tt.parseInt = function (i, s, h) {
                                  return (
                                    h || s == null ? (s = 0) : s && (s = +s),
                                    Wv(wr(i).replace(xu, ''), s || 0)
                                  );
                                }),
                                (tt.random = function (i, s, h) {
                                  if (
                                    (h &&
                                      typeof h != 'boolean' &&
                                      Yr(i, s, h) &&
                                      (s = h = b),
                                    h === b &&
                                      (typeof s == 'boolean'
                                        ? ((h = s), (s = b))
                                        : typeof i == 'boolean' &&
                                          ((h = i), (i = b))),
                                    i === b && s === b
                                      ? ((i = 0), (s = 1))
                                      : ((i = In(i)),
                                        s === b
                                          ? ((s = i), (i = 0))
                                          : (s = In(s))),
                                    i > s)
                                  ) {
                                    var _ = i;
                                    (i = s), (s = _);
                                  }
                                  if (h || i % 1 || s % 1) {
                                    var _e = Hs();
                                    return Br(
                                      i +
                                        _e *
                                          (s -
                                            i +
                                            nv('1e-' + ((_e + '').length - 1))),
                                      s
                                    );
                                  }
                                  return Yu(i, s);
                                }),
                                (tt.reduce = function (i, s, h) {
                                  var _ = fr(i) ? Su : Ls,
                                    _e = arguments.length < 3;
                                  return _(i, or(s, 4), h, _e, zn);
                                }),
                                (tt.reduceRight = function (i, s, h) {
                                  var _ = fr(i) ? lv : Ls,
                                    _e = arguments.length < 3;
                                  return _(i, or(s, 4), h, _e, qs);
                                }),
                                (tt.repeat = function (i, s, h) {
                                  return (
                                    (s = (h ? Yr(i, s, h) : s === b)
                                      ? 1
                                      : dr(s)),
                                    Ku(wr(i), s)
                                  );
                                }),
                                (tt.replace = function () {
                                  var i = arguments,
                                    s = wr(i[0]);
                                  return i.length < 3
                                    ? s
                                    : s.replace(i[1], i[2]);
                                }),
                                (tt.result = function (i, s, h) {
                                  var _ = -1,
                                    _e = (s = $n(s, i)).length;
                                  for (_e || ((_e = 1), (i = b)); ++_ < _e; ) {
                                    var ot = i == null ? b : i[bn(s[_])];
                                    ot === b && ((_ = _e), (ot = h)),
                                      (i = On(ot) ? ot.call(i) : ot);
                                  }
                                  return i;
                                }),
                                (tt.round = d0),
                                (tt.runInContext = _t),
                                (tt.sample = function (i) {
                                  return (fr(i) ? Ks : $v)(i);
                                }),
                                (tt.size = function (i) {
                                  if (i == null) return 0;
                                  if (Xr(i)) return fu(i) ? oo(i) : i.length;
                                  var s = Vr(i);
                                  return s == Mt || s == Yt
                                    ? i.size
                                    : Vu(i).length;
                                }),
                                (tt.snakeCase = Yy),
                                (tt.some = function (i, s, h) {
                                  var _ = fr(i) ? Cu : Vv;
                                  return (
                                    h && Yr(i, s, h) && (s = b), _(i, or(s, 3))
                                  );
                                }),
                                (tt.sortedIndex = function (i, s) {
                                  return ga(i, s);
                                }),
                                (tt.sortedIndexBy = function (i, s, h) {
                                  return Qu(i, s, or(h, 2));
                                }),
                                (tt.sortedIndexOf = function (i, s) {
                                  var h = i == null ? 0 : i.length;
                                  if (h) {
                                    var _ = ga(i, s);
                                    if (_ < h && vn(i[_], s)) return _;
                                  }
                                  return -1;
                                }),
                                (tt.sortedLastIndex = function (i, s) {
                                  return ga(i, s, !0);
                                }),
                                (tt.sortedLastIndexBy = function (i, s, h) {
                                  return Qu(i, s, or(h, 2), !0);
                                }),
                                (tt.sortedLastIndexOf = function (i, s) {
                                  if (i != null && i.length) {
                                    var h = ga(i, s, !0) - 1;
                                    if (vn(i[h], s)) return h;
                                  }
                                  return -1;
                                }),
                                (tt.startCase = Ky),
                                (tt.startsWith = function (i, s, h) {
                                  return (
                                    (i = wr(i)),
                                    (h =
                                      h == null ? 0 : Kn(dr(h), 0, i.length)),
                                    (s = rn(s)),
                                    i.slice(h, h + s.length) == s
                                  );
                                }),
                                (tt.subtract = p0),
                                (tt.sum = function (i) {
                                  return i && i.length ? Pu(i, qr) : 0;
                                }),
                                (tt.sumBy = function (i, s) {
                                  return i && i.length ? Pu(i, or(s, 2)) : 0;
                                }),
                                (tt.template = function (i, s, h) {
                                  var _ = tt.templateSettings;
                                  h && Yr(i, s, h) && (s = b),
                                    (i = wr(i)),
                                    (s = du({}, s, _, Op));
                                  var _e,
                                    ot,
                                    ft = du({}, s.imports, _.imports, Op),
                                    ht = zr(ft),
                                    xt = Iu(ft, ht),
                                    It = 0,
                                    Ot = s.interpolate || Oo,
                                    $t = "__p += '",
                                    Jt = Lu(
                                      (s.escape || Oo).source +
                                        '|' +
                                        Ot.source +
                                        '|' +
                                        (Ot === ts ? Mm : Oo).source +
                                        '|' +
                                        (s.evaluate || Oo).source +
                                        '|$',
                                      'g'
                                    ),
                                    qt =
                                      '//# sourceURL=' +
                                      (br.call(s, 'sourceURL')
                                        ? (s.sourceURL + '').replace(/\s/g, ' ')
                                        : 'lodash.templateSources[' +
                                          ++tv +
                                          ']') +
                                      `
`;
                                  i.replace(
                                    Jt,
                                    function (Gt, nr, Ht, lr, ar, yr) {
                                      return (
                                        Ht || (Ht = lr),
                                        ($t += i.slice(It, yr).replace(Bm, pv)),
                                        nr &&
                                          ((_e = !0),
                                          ($t +=
                                            `' +
__e(` +
                                            nr +
                                            `) +
'`)),
                                        ar &&
                                          ((ot = !0),
                                          ($t +=
                                            `';
` +
                                            ar +
                                            `;
__p += '`)),
                                        Ht &&
                                          ($t +=
                                            `' +
((__t = (` +
                                            Ht +
                                            `)) == null ? '' : __t) +
'`),
                                        (It = yr + Gt.length),
                                        Gt
                                      );
                                    }
                                  ),
                                    ($t += `';
`);
                                  var rr = br.call(s, 'variable') && s.variable;
                                  if (rr) {
                                    if (Am.test(rr))
                                      throw new gr(
                                        'Invalid `variable` option passed into `_.template`'
                                      );
                                  } else
                                    $t =
                                      `with (obj) {
` +
                                      $t +
                                      `
}
`;
                                  ($t = (ot ? $t.replace(er, '') : $t)
                                    .replace(xr, '$1')
                                    .replace(Or, '$1;')),
                                    ($t =
                                      'function(' +
                                      (rr || 'obj') +
                                      `) {
` +
                                      (rr
                                        ? ''
                                        : `obj || (obj = {});
`) +
                                      "var __t, __p = ''" +
                                      (_e ? ', __e = _.escape' : '') +
                                      (ot
                                        ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                                        : `;
`) +
                                      $t +
                                      `return __p
}`);
                                  var Nt = wm(function () {
                                    return Ar(ht, qt + 'return ' + $t).apply(
                                      b,
                                      xt
                                    );
                                  });
                                  if (((Nt.source = $t), $l(Nt))) throw Nt;
                                  return Nt;
                                }),
                                (tt.times = function (i, s) {
                                  if ((i = dr(i)) < 1 || i > lt) return [];
                                  var h = Rt,
                                    _ = Br(i, Rt);
                                  (s = or(s)), (i -= Rt);
                                  for (var _e = Ou(_, s); ++h < i; ) s(h);
                                  return _e;
                                }),
                                (tt.toFinite = In),
                                (tt.toInteger = dr),
                                (tt.toLength = cm),
                                (tt.toLower = function (i) {
                                  return wr(i).toLowerCase();
                                }),
                                (tt.toNumber = pn),
                                (tt.toSafeInteger = function (i) {
                                  return i
                                    ? Kn(dr(i), -9007199254740991, lt)
                                    : i === 0
                                    ? i
                                    : 0;
                                }),
                                (tt.toString = wr),
                                (tt.toUpper = function (i) {
                                  return wr(i).toUpperCase();
                                }),
                                (tt.trim = function (i, s, h) {
                                  if ((i = wr(i)) && (h || s === b))
                                    return As(i);
                                  if (!i || !(s = rn(s))) return i;
                                  var _ = mn(i),
                                    _e = mn(s);
                                  return Un(_, Ts(_, _e), Ms(_, _e) + 1).join(
                                    ''
                                  );
                                }),
                                (tt.trimEnd = function (i, s, h) {
                                  if ((i = wr(i)) && (h || s === b))
                                    return i.slice(0, zs(i) + 1);
                                  if (!i || !(s = rn(s))) return i;
                                  var _ = mn(i);
                                  return Un(_, 0, Ms(_, mn(s)) + 1).join('');
                                }),
                                (tt.trimStart = function (i, s, h) {
                                  if ((i = wr(i)) && (h || s === b))
                                    return i.replace(xu, '');
                                  if (!i || !(s = rn(s))) return i;
                                  var _ = mn(i);
                                  return Un(_, Ts(_, mn(s))).join('');
                                }),
                                (tt.truncate = function (i, s) {
                                  var h = 30,
                                    _ = '...';
                                  if (Rr(s)) {
                                    var _e =
                                      'separator' in s ? s.separator : _e;
                                    (h = 'length' in s ? dr(s.length) : h),
                                      (_ =
                                        'omission' in s ? rn(s.omission) : _);
                                  }
                                  var ot = (i = wr(i)).length;
                                  if (no(i)) {
                                    var ft = mn(i);
                                    ot = ft.length;
                                  }
                                  if (h >= ot) return i;
                                  var ht = h - oo(_);
                                  if (ht < 1) return _;
                                  var xt = ft
                                    ? Un(ft, 0, ht).join('')
                                    : i.slice(0, ht);
                                  if (_e === b) return xt + _;
                                  if ((ft && (ht += xt.length - ht), Ul(_e))) {
                                    if (i.slice(ht).search(_e)) {
                                      var It,
                                        Ot = xt;
                                      for (
                                        _e.global ||
                                          (_e = Lu(
                                            _e.source,
                                            wr(rs.exec(_e)) + 'g'
                                          )),
                                          _e.lastIndex = 0;
                                        (It = _e.exec(Ot));

                                      )
                                        var $t = It.index;
                                      xt = xt.slice(0, $t === b ? ht : $t);
                                    }
                                  } else if (i.indexOf(rn(_e), ht) != ht) {
                                    var Jt = xt.lastIndexOf(_e);
                                    Jt > -1 && (xt = xt.slice(0, Jt));
                                  }
                                  return xt + _;
                                }),
                                (tt.unescape = function (i) {
                                  return (i = wr(i)) && Ln.test(i)
                                    ? i.replace(Ur, hv)
                                    : i;
                                }),
                                (tt.uniqueId = function (i) {
                                  var s = ++vv;
                                  return wr(i) + s;
                                }),
                                (tt.upperCase = Qy),
                                (tt.upperFirst = Vl),
                                (tt.each = qp),
                                (tt.eachRight = _h),
                                (tt.first = Kp),
                                Yl(
                                  tt,
                                  ((Jl = {}),
                                  xn(tt, function (i, s) {
                                    br.call(tt.prototype, s) || (Jl[s] = i);
                                  }),
                                  Jl),
                                  { chain: !1 }
                                ),
                                (tt.VERSION = '4.17.21'),
                                un(
                                  [
                                    'bind',
                                    'bindKey',
                                    'curry',
                                    'curryRight',
                                    'partial',
                                    'partialRight',
                                  ],
                                  function (i) {
                                    tt[i].placeholder = tt;
                                  }
                                ),
                                un(['drop', 'take'], function (i, s) {
                                  (hr.prototype[i] = function (h) {
                                    h = h === b ? 1 : Tr(dr(h), 0);
                                    var _ =
                                      this.__filtered__ && !s
                                        ? new hr(this)
                                        : this.clone();
                                    return (
                                      _.__filtered__
                                        ? (_.__takeCount__ = Br(
                                            h,
                                            _.__takeCount__
                                          ))
                                        : _.__views__.push({
                                            size: Br(h, Rt),
                                            type:
                                              i +
                                              (_.__dir__ < 0 ? 'Right' : ''),
                                          }),
                                      _
                                    );
                                  }),
                                    (hr.prototype[i + 'Right'] = function (h) {
                                      return this.reverse()[i](h).reverse();
                                    });
                                }),
                                un(
                                  ['filter', 'map', 'takeWhile'],
                                  function (i, s) {
                                    var h = s + 1,
                                      _ = h == 1 || h == 3;
                                    hr.prototype[i] = function (_e) {
                                      var ot = this.clone();
                                      return (
                                        ot.__iteratees__.push({
                                          iteratee: or(_e, 3),
                                          type: h,
                                        }),
                                        (ot.__filtered__ =
                                          ot.__filtered__ || _),
                                        ot
                                      );
                                    };
                                  }
                                ),
                                un(['head', 'last'], function (i, s) {
                                  var h = 'take' + (s ? 'Right' : '');
                                  hr.prototype[i] = function () {
                                    return this[h](1).value()[0];
                                  };
                                }),
                                un(['initial', 'tail'], function (i, s) {
                                  var h = 'drop' + (s ? '' : 'Right');
                                  hr.prototype[i] = function () {
                                    return this.__filtered__
                                      ? new hr(this)
                                      : this[h](1);
                                  };
                                }),
                                (hr.prototype.compact = function () {
                                  return this.filter(qr);
                                }),
                                (hr.prototype.find = function (i) {
                                  return this.filter(i).head();
                                }),
                                (hr.prototype.findLast = function (i) {
                                  return this.reverse().find(i);
                                }),
                                (hr.prototype.invokeMap = pr(function (i, s) {
                                  return typeof i == 'function'
                                    ? new hr(this)
                                    : this.map(function (h) {
                                        return jo(h, i, s);
                                      });
                                })),
                                (hr.prototype.reject = function (i) {
                                  return this.filter(su(or(i)));
                                }),
                                (hr.prototype.slice = function (i, s) {
                                  i = dr(i);
                                  var h = this;
                                  return h.__filtered__ && (i > 0 || s < 0)
                                    ? new hr(h)
                                    : (i < 0
                                        ? (h = h.takeRight(-i))
                                        : i && (h = h.drop(i)),
                                      s !== b &&
                                        (h =
                                          (s = dr(s)) < 0
                                            ? h.dropRight(-s)
                                            : h.take(s - i)),
                                      h);
                                }),
                                (hr.prototype.takeRightWhile = function (i) {
                                  return this.reverse().takeWhile(i).reverse();
                                }),
                                (hr.prototype.toArray = function () {
                                  return this.take(Rt);
                                }),
                                xn(hr.prototype, function (i, s) {
                                  var h =
                                      /^(?:filter|find|map|reject)|While$/.test(
                                        s
                                      ),
                                    _ = /^(?:head|last)$/.test(s),
                                    _e =
                                      tt[
                                        _
                                          ? 'take' +
                                            (s == 'last' ? 'Right' : '')
                                          : s
                                      ],
                                    ot = _ || /^find/.test(s);
                                  _e &&
                                    (tt.prototype[s] = function () {
                                      var ft = this.__wrapped__,
                                        ht = _ ? [1] : arguments,
                                        xt = ft instanceof hr,
                                        It = ht[0],
                                        Ot = xt || fr(ft),
                                        $t = function (nr) {
                                          var Ht = _e.apply(tt, Tn([nr], ht));
                                          return _ && Jt ? Ht[0] : Ht;
                                        };
                                      Ot &&
                                        h &&
                                        typeof It == 'function' &&
                                        It.length != 1 &&
                                        (xt = Ot = !1);
                                      var Jt = this.__chain__,
                                        qt = !!this.__actions__.length,
                                        rr = ot && !Jt,
                                        Nt = xt && !qt;
                                      if (!ot && Ot) {
                                        ft = Nt ? ft : new hr(this);
                                        var Gt = i.apply(ft, ht);
                                        return (
                                          Gt.__actions__.push({
                                            func: iu,
                                            args: [$t],
                                            thisArg: b,
                                          }),
                                          new sn(Gt, Jt)
                                        );
                                      }
                                      return rr && Nt
                                        ? i.apply(this, ht)
                                        : ((Gt = this.thru($t)),
                                          rr
                                            ? _
                                              ? Gt.value()[0]
                                              : Gt.value()
                                            : Gt);
                                    });
                                }),
                                un(
                                  [
                                    'pop',
                                    'push',
                                    'shift',
                                    'sort',
                                    'splice',
                                    'unshift',
                                  ],
                                  function (i) {
                                    var s = Fo[i],
                                      h = /^(?:push|sort|unshift)$/.test(i)
                                        ? 'tap'
                                        : 'thru',
                                      _ = /^(?:pop|shift)$/.test(i);
                                    tt.prototype[i] = function () {
                                      var _e = arguments;
                                      if (_ && !this.__chain__) {
                                        var ot = this.value();
                                        return s.apply(fr(ot) ? ot : [], _e);
                                      }
                                      return this[h](function (ft) {
                                        return s.apply(fr(ft) ? ft : [], _e);
                                      });
                                    };
                                  }
                                ),
                                xn(hr.prototype, function (i, s) {
                                  var h = tt[s];
                                  if (h) {
                                    var _ = h.name + '';
                                    br.call(uo, _) || (uo[_] = []),
                                      uo[_].push({ name: s, func: h });
                                  }
                                }),
                                (uo[_a(b, 2).name] = [
                                  { name: 'wrapper', func: b },
                                ]),
                                (hr.prototype.clone = function () {
                                  var i = new hr(this.__wrapped__);
                                  return (
                                    (i.__actions__ = Qr(this.__actions__)),
                                    (i.__dir__ = this.__dir__),
                                    (i.__filtered__ = this.__filtered__),
                                    (i.__iteratees__ = Qr(this.__iteratees__)),
                                    (i.__takeCount__ = this.__takeCount__),
                                    (i.__views__ = Qr(this.__views__)),
                                    i
                                  );
                                }),
                                (hr.prototype.reverse = function () {
                                  if (this.__filtered__) {
                                    var i = new hr(this);
                                    (i.__dir__ = -1), (i.__filtered__ = !0);
                                  } else (i = this.clone()).__dir__ *= -1;
                                  return i;
                                }),
                                (hr.prototype.value = function () {
                                  var i = this.__wrapped__.value(),
                                    s = this.__dir__,
                                    h = fr(i),
                                    _ = s < 0,
                                    _e = h ? i.length : 0,
                                    ot = (function (yr, tr, ir) {
                                      for (
                                        var Mr = -1, Nr = ir.length;
                                        ++Mr < Nr;

                                      ) {
                                        var Kr = ir[Mr],
                                          Cr = Kr.size;
                                        switch (Kr.type) {
                                          case 'drop':
                                            yr += Cr;
                                            break;
                                          case 'dropRight':
                                            tr -= Cr;
                                            break;
                                          case 'take':
                                            tr = Br(tr, yr + Cr);
                                            break;
                                          case 'takeRight':
                                            yr = Tr(yr, tr - Cr);
                                        }
                                      }
                                      return { start: yr, end: tr };
                                    })(0, _e, this.__views__),
                                    ft = ot.start,
                                    ht = ot.end,
                                    xt = ht - ft,
                                    It = _ ? ht : ft - 1,
                                    Ot = this.__iteratees__,
                                    $t = Ot.length,
                                    Jt = 0,
                                    qt = Br(xt, this.__takeCount__);
                                  if (!h || (!_ && _e == xt && qt == xt))
                                    return hp(i, this.__actions__);
                                  var rr = [];
                                  e: for (; xt-- && Jt < qt; ) {
                                    for (
                                      var Nt = -1, Gt = i[(It += s)];
                                      ++Nt < $t;

                                    ) {
                                      var nr = Ot[Nt],
                                        Ht = nr.iteratee,
                                        lr = nr.type,
                                        ar = Ht(Gt);
                                      if (lr == 2) Gt = ar;
                                      else if (!ar) {
                                        if (lr == 1) continue e;
                                        break e;
                                      }
                                    }
                                    rr[Jt++] = Gt;
                                  }
                                  return rr;
                                }),
                                (tt.prototype.at = hy),
                                (tt.prototype.chain = function () {
                                  return Jp(this);
                                }),
                                (tt.prototype.commit = function () {
                                  return new sn(this.value(), this.__chain__);
                                }),
                                (tt.prototype.next = function () {
                                  this.__values__ === b &&
                                    (this.__values__ = sm(this.value()));
                                  var i =
                                    this.__index__ >= this.__values__.length;
                                  return {
                                    done: i,
                                    value: i
                                      ? b
                                      : this.__values__[this.__index__++],
                                  };
                                }),
                                (tt.prototype.plant = function (i) {
                                  for (var s, h = this; h instanceof Xo; ) {
                                    var _ = Vp(h);
                                    (_.__index__ = 0),
                                      (_.__values__ = b),
                                      s ? (_e.__wrapped__ = _) : (s = _);
                                    var _e = _;
                                    h = h.__wrapped__;
                                  }
                                  return (_e.__wrapped__ = i), s;
                                }),
                                (tt.prototype.reverse = function () {
                                  var i = this.__wrapped__;
                                  if (i instanceof hr) {
                                    var s = i;
                                    return (
                                      this.__actions__.length &&
                                        (s = new hr(this)),
                                      (s = s.reverse()).__actions__.push({
                                        func: iu,
                                        args: [Ml],
                                        thisArg: b,
                                      }),
                                      new sn(s, this.__chain__)
                                    );
                                  }
                                  return this.thru(Ml);
                                }),
                                (tt.prototype.toJSON =
                                  tt.prototype.valueOf =
                                  tt.prototype.value =
                                    function () {
                                      return hp(
                                        this.__wrapped__,
                                        this.__actions__
                                      );
                                    }),
                                (tt.prototype.first = tt.prototype.head),
                                vo &&
                                  (tt.prototype[vo] = function () {
                                    return this;
                                  }),
                                tt
                              );
                            })();
                          (Dr._ = Mo),
                            (et = function () {
                              return Mo;
                            }.call(mt, it, mt, gt)) === b || (gt.exports = et);
                        }.call(this);
                    },
                    156: (gt) => {
                      gt.exports = bt;
                    },
                  },
                  Pt = {};
                function kt(gt) {
                  var mt = Pt[gt];
                  if (mt !== void 0) return mt.exports;
                  var it = (Pt[gt] = { id: gt, loaded: !1, exports: {} });
                  return (
                    vt[gt].call(it.exports, it, it.exports, kt),
                    (it.loaded = !0),
                    it.exports
                  );
                }
                return (
                  (kt.g = (function () {
                    if (typeof globalThis == 'object') return globalThis;
                    try {
                      return this || new Function('return this')();
                    } catch {
                      if (typeof window == 'object') return window;
                    }
                  })()),
                  (kt.nmd = (gt) => (
                    (gt.paths = []), gt.children || (gt.children = []), gt
                  )),
                  kt(991)
                );
              })()),
              ($.exports = jt(dt(156)));
          },
          156: ($) => {
            $.exports = a;
          },
        },
        d = {};
      function g($) {
        var rt = d[$];
        if (rt !== void 0) return rt.exports;
        var dt = (d[$] = { exports: {} });
        return c[$].call(dt.exports, dt, dt.exports, g), dt.exports;
      }
      var j = {};
      return (
        (() => {
          var $ = j;
          Object.defineProperty($, '__esModule', { value: !0 }),
            ($.setLocalStorageItem =
              $.getLocalStorageItem =
              $.createCustomGlobalStateWithDecoupledFuncs =
              $.createGlobalState =
              $.createGlobalStateWithDecoupledFuncs =
              $.GlobalStoreAbstract =
              $.GlobalStore =
              $.combineAsyncGetters =
              $.combineAsyncGettersEmitter =
              $.debounce =
              $.shallowCompare =
              $.createDerivateEmitter =
              $.createDerivate =
              $.throwNoSubscribersWereAdded =
              $.formatToStore =
              $.formatFromStore =
              $.isPrimitive =
              $.isFunction =
              $.isRegex =
              $.isDate =
              $.isString =
              $.isBoolean =
              $.isNumber =
              $.isNil =
              $.clone =
                void 0);
          var rt = g(734);
          Object.defineProperty($, 'clone', {
            enumerable: !0,
            get: function () {
              return rt.clone;
            },
          }),
            Object.defineProperty($, 'isNil', {
              enumerable: !0,
              get: function () {
                return rt.isNil;
              },
            }),
            Object.defineProperty($, 'isNumber', {
              enumerable: !0,
              get: function () {
                return rt.isNumber;
              },
            }),
            Object.defineProperty($, 'isBoolean', {
              enumerable: !0,
              get: function () {
                return rt.isBoolean;
              },
            }),
            Object.defineProperty($, 'isString', {
              enumerable: !0,
              get: function () {
                return rt.isString;
              },
            }),
            Object.defineProperty($, 'isDate', {
              enumerable: !0,
              get: function () {
                return rt.isDate;
              },
            }),
            Object.defineProperty($, 'isRegex', {
              enumerable: !0,
              get: function () {
                return rt.isRegex;
              },
            }),
            Object.defineProperty($, 'isFunction', {
              enumerable: !0,
              get: function () {
                return rt.isFunction;
              },
            }),
            Object.defineProperty($, 'isPrimitive', {
              enumerable: !0,
              get: function () {
                return rt.isPrimitive;
              },
            }),
            Object.defineProperty($, 'formatFromStore', {
              enumerable: !0,
              get: function () {
                return rt.formatFromStore;
              },
            }),
            Object.defineProperty($, 'formatToStore', {
              enumerable: !0,
              get: function () {
                return rt.formatToStore;
              },
            }),
            Object.defineProperty($, 'throwNoSubscribersWereAdded', {
              enumerable: !0,
              get: function () {
                return rt.throwNoSubscribersWereAdded;
              },
            }),
            Object.defineProperty($, 'createDerivate', {
              enumerable: !0,
              get: function () {
                return rt.createDerivate;
              },
            }),
            Object.defineProperty($, 'createDerivateEmitter', {
              enumerable: !0,
              get: function () {
                return rt.createDerivateEmitter;
              },
            }),
            Object.defineProperty($, 'shallowCompare', {
              enumerable: !0,
              get: function () {
                return rt.shallowCompare;
              },
            }),
            Object.defineProperty($, 'debounce', {
              enumerable: !0,
              get: function () {
                return rt.debounce;
              },
            }),
            Object.defineProperty($, 'combineAsyncGettersEmitter', {
              enumerable: !0,
              get: function () {
                return rt.combineAsyncGettersEmitter;
              },
            }),
            Object.defineProperty($, 'combineAsyncGetters', {
              enumerable: !0,
              get: function () {
                return rt.combineAsyncGetters;
              },
            });
          var dt = g(774);
          Object.defineProperty($, 'GlobalStore', {
            enumerable: !0,
            get: function () {
              return dt.GlobalStore;
            },
          });
          var jt = g(195);
          Object.defineProperty($, 'GlobalStoreAbstract', {
            enumerable: !0,
            get: function () {
              return jt.GlobalStoreAbstract;
            },
          });
          var bt = g(853);
          Object.defineProperty($, 'createGlobalStateWithDecoupledFuncs', {
            enumerable: !0,
            get: function () {
              return bt.createGlobalStateWithDecoupledFuncs;
            },
          }),
            Object.defineProperty($, 'createGlobalState', {
              enumerable: !0,
              get: function () {
                return bt.createGlobalState;
              },
            }),
            Object.defineProperty(
              $,
              'createCustomGlobalStateWithDecoupledFuncs',
              {
                enumerable: !0,
                get: function () {
                  return bt.createCustomGlobalStateWithDecoupledFuncs;
                },
              }
            );
          var vt = g(608);
          Object.defineProperty($, 'getLocalStorageItem', {
            enumerable: !0,
            get: function () {
              return vt.getLocalStorageItem;
            },
          }),
            Object.defineProperty($, 'setLocalStorageItem', {
              enumerable: !0,
              get: function () {
                return vt.setLocalStorageItem;
              },
            });
        })(),
        j
      );
    })()
  );
})(bundle$1);
var bundleExports$1 = bundle$1.exports;
const MIN_WITH_FOR_TWO_COLUMNS = 768,
  initialState$1 = { isMenuOpen: !0, isMenuVisible: !0 },
  [useMenuState, getMenuState, menuState] =
    bundleExports$1.createGlobalStateWithDecoupledFuncs(initialState$1, {
      actions: {
        open() {
          return ({ setState: e }) => {
            window.scrollTo(0, 0), e((o) => ({ ...o, isMenuOpen: !0 }));
          };
        },
        close() {
          return ({ setState: e }) => {
            e((o) => ({ ...o, isMenuOpen: !1 }));
          };
        },
        setVisibility(e) {
          return ({ setState: o }) => {
            const a = window.innerWidth < MIN_WITH_FOR_TWO_COLUMNS;
            o((c) => ({
              ...c,
              isMenuVisible: e,
              isMenuOpen: a && !e ? !1 : c.isMenuOpen,
            }));
          };
        },
      },
      localStorage: { key: 'app-menu', encrypt: !0 },
    }),
  initialState = { name: 'parallel' },
  useSelectedExample = bundleExports$1.createGlobalState(initialState, {
    actions: {
      setCurrent:
        (e) =>
        ({ setState: o }) => {
          const a = window.location.href.includes('?')
            ? window.location.href.split('?')[0]
            : window.location.href;
          window.history.pushState({}, '', `${a}?example=${e}`),
            window.innerWidth < MIN_WITH_FOR_TWO_COLUMNS ||
              window.scrollTo(0, 0),
            o((d) => ({ ...d, name: e }));
        },
    },
    onInit: ({ setState: e }) => {
      const a = new URLSearchParams(window.location.search).get('example');
      if ((e((d) => ({ ...d, name: a || 'parallel' })), a)) return;
      const c = window.location.href.includes('?')
        ? window.location.href.split('?')[0]
        : window.location.href;
      window.history.pushState({}, '', `${c}?example=parallel`);
    },
  });
var prism = { exports: {} };
(function (e) {
  var o =
    typeof window < 'u'
      ? window
      : typeof WorkerGlobalScope < 'u' && self instanceof WorkerGlobalScope
      ? self
      : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */ var a = (function (c) {
    var d = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      g = 0,
      j = {},
      $ = {
        manual: c.Prism && c.Prism.manual,
        disableWorkerMessageHandler:
          c.Prism && c.Prism.disableWorkerMessageHandler,
        util: {
          encode: function et(b) {
            return b instanceof rt
              ? new rt(b.type, et(b.content), b.alias)
              : Array.isArray(b)
              ? b.map(et)
              : b
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ');
          },
          type: function (et) {
            return Object.prototype.toString.call(et).slice(8, -1);
          },
          objId: function (et) {
            return (
              et.__id || Object.defineProperty(et, '__id', { value: ++g }),
              et.__id
            );
          },
          clone: function et(b, ut) {
            ut = ut || {};
            var pt, st;
            switch ($.util.type(b)) {
              case 'Object':
                if (((st = $.util.objId(b)), ut[st])) return ut[st];
                (pt = {}), (ut[st] = pt);
                for (var ct in b)
                  b.hasOwnProperty(ct) && (pt[ct] = et(b[ct], ut));
                return pt;
              case 'Array':
                return (
                  (st = $.util.objId(b)),
                  ut[st]
                    ? ut[st]
                    : ((pt = []),
                      (ut[st] = pt),
                      b.forEach(function (nt, at) {
                        pt[at] = et(nt, ut);
                      }),
                      pt)
                );
              default:
                return b;
            }
          },
          getLanguage: function (et) {
            for (; et; ) {
              var b = d.exec(et.className);
              if (b) return b[1].toLowerCase();
              et = et.parentElement;
            }
            return 'none';
          },
          setLanguage: function (et, b) {
            (et.className = et.className.replace(RegExp(d, 'gi'), '')),
              et.classList.add('language-' + b);
          },
          currentScript: function () {
            if (typeof document > 'u') return null;
            if ('currentScript' in document && 1 < 2)
              return document.currentScript;
            try {
              throw new Error();
            } catch (pt) {
              var et = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(pt.stack) ||
                [])[1];
              if (et) {
                var b = document.getElementsByTagName('script');
                for (var ut in b) if (b[ut].src == et) return b[ut];
              }
              return null;
            }
          },
          isActive: function (et, b, ut) {
            for (var pt = 'no-' + b; et; ) {
              var st = et.classList;
              if (st.contains(b)) return !0;
              if (st.contains(pt)) return !1;
              et = et.parentElement;
            }
            return !!ut;
          },
        },
        languages: {
          plain: j,
          plaintext: j,
          text: j,
          txt: j,
          extend: function (et, b) {
            var ut = $.util.clone($.languages[et]);
            for (var pt in b) ut[pt] = b[pt];
            return ut;
          },
          insertBefore: function (et, b, ut, pt) {
            pt = pt || $.languages;
            var st = pt[et],
              ct = {};
            for (var nt in st)
              if (st.hasOwnProperty(nt)) {
                if (nt == b)
                  for (var at in ut) ut.hasOwnProperty(at) && (ct[at] = ut[at]);
                ut.hasOwnProperty(nt) || (ct[nt] = st[nt]);
              }
            var lt = pt[et];
            return (
              (pt[et] = ct),
              $.languages.DFS($.languages, function (Et, Rt) {
                Rt === lt && Et != et && (this[Et] = ct);
              }),
              ct
            );
          },
          DFS: function et(b, ut, pt, st) {
            st = st || {};
            var ct = $.util.objId;
            for (var nt in b)
              if (b.hasOwnProperty(nt)) {
                ut.call(b, nt, b[nt], pt || nt);
                var at = b[nt],
                  lt = $.util.type(at);
                lt === 'Object' && !st[ct(at)]
                  ? ((st[ct(at)] = !0), et(at, ut, null, st))
                  : lt === 'Array' &&
                    !st[ct(at)] &&
                    ((st[ct(at)] = !0), et(at, ut, nt, st));
              }
          },
        },
        plugins: {},
        highlightAll: function (et, b) {
          $.highlightAllUnder(document, et, b);
        },
        highlightAllUnder: function (et, b, ut) {
          var pt = {
            callback: ut,
            container: et,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
          };
          $.hooks.run('before-highlightall', pt),
            (pt.elements = Array.prototype.slice.apply(
              pt.container.querySelectorAll(pt.selector)
            )),
            $.hooks.run('before-all-elements-highlight', pt);
          for (var st = 0, ct; (ct = pt.elements[st++]); )
            $.highlightElement(ct, b === !0, pt.callback);
        },
        highlightElement: function (et, b, ut) {
          var pt = $.util.getLanguage(et),
            st = $.languages[pt];
          $.util.setLanguage(et, pt);
          var ct = et.parentElement;
          ct &&
            ct.nodeName.toLowerCase() === 'pre' &&
            $.util.setLanguage(ct, pt);
          var nt = et.textContent,
            at = { element: et, language: pt, grammar: st, code: nt };
          function lt(Rt) {
            (at.highlightedCode = Rt),
              $.hooks.run('before-insert', at),
              (at.element.innerHTML = at.highlightedCode),
              $.hooks.run('after-highlight', at),
              $.hooks.run('complete', at),
              ut && ut.call(at.element);
          }
          if (
            ($.hooks.run('before-sanity-check', at),
            (ct = at.element.parentElement),
            ct &&
              ct.nodeName.toLowerCase() === 'pre' &&
              !ct.hasAttribute('tabindex') &&
              ct.setAttribute('tabindex', '0'),
            !at.code)
          ) {
            $.hooks.run('complete', at), ut && ut.call(at.element);
            return;
          }
          if (($.hooks.run('before-highlight', at), !at.grammar)) {
            lt($.util.encode(at.code));
            return;
          }
          if (b && c.Worker) {
            var Et = new Worker($.filename);
            (Et.onmessage = function (Rt) {
              lt(Rt.data);
            }),
              Et.postMessage(
                JSON.stringify({
                  language: at.language,
                  code: at.code,
                  immediateClose: !0,
                })
              );
          } else lt($.highlight(at.code, at.grammar, at.language));
        },
        highlight: function (et, b, ut) {
          var pt = { code: et, grammar: b, language: ut };
          if (($.hooks.run('before-tokenize', pt), !pt.grammar))
            throw new Error(
              'The language "' + pt.language + '" has no grammar.'
            );
          return (
            (pt.tokens = $.tokenize(pt.code, pt.grammar)),
            $.hooks.run('after-tokenize', pt),
            rt.stringify($.util.encode(pt.tokens), pt.language)
          );
        },
        tokenize: function (et, b) {
          var ut = b.rest;
          if (ut) {
            for (var pt in ut) b[pt] = ut[pt];
            delete b.rest;
          }
          var st = new bt();
          return vt(st, st.head, et), jt(et, st, b, st.head, 0), kt(st);
        },
        hooks: {
          all: {},
          add: function (et, b) {
            var ut = $.hooks.all;
            (ut[et] = ut[et] || []), ut[et].push(b);
          },
          run: function (et, b) {
            var ut = $.hooks.all[et];
            if (!(!ut || !ut.length))
              for (var pt = 0, st; (st = ut[pt++]); ) st(b);
          },
        },
        Token: rt,
      };
    c.Prism = $;
    function rt(et, b, ut, pt) {
      (this.type = et),
        (this.content = b),
        (this.alias = ut),
        (this.length = (pt || '').length | 0);
    }
    rt.stringify = function et(b, ut) {
      if (typeof b == 'string') return b;
      if (Array.isArray(b)) {
        var pt = '';
        return (
          b.forEach(function (lt) {
            pt += et(lt, ut);
          }),
          pt
        );
      }
      var st = {
          type: b.type,
          content: et(b.content, ut),
          tag: 'span',
          classes: ['token', b.type],
          attributes: {},
          language: ut,
        },
        ct = b.alias;
      ct &&
        (Array.isArray(ct)
          ? Array.prototype.push.apply(st.classes, ct)
          : st.classes.push(ct)),
        $.hooks.run('wrap', st);
      var nt = '';
      for (var at in st.attributes)
        nt +=
          ' ' +
          at +
          '="' +
          (st.attributes[at] || '').replace(/"/g, '&quot;') +
          '"';
      return (
        '<' +
        st.tag +
        ' class="' +
        st.classes.join(' ') +
        '"' +
        nt +
        '>' +
        st.content +
        '</' +
        st.tag +
        '>'
      );
    };
    function dt(et, b, ut, pt) {
      et.lastIndex = b;
      var st = et.exec(ut);
      if (st && pt && st[1]) {
        var ct = st[1].length;
        (st.index += ct), (st[0] = st[0].slice(ct));
      }
      return st;
    }
    function jt(et, b, ut, pt, st, ct) {
      for (var nt in ut)
        if (!(!ut.hasOwnProperty(nt) || !ut[nt])) {
          var at = ut[nt];
          at = Array.isArray(at) ? at : [at];
          for (var lt = 0; lt < at.length; ++lt) {
            if (ct && ct.cause == nt + ',' + lt) return;
            var Et = at[lt],
              Rt = Et.inside,
              yt = !!Et.lookbehind,
              Vt = !!Et.greedy,
              Kt = Et.alias;
            if (Vt && !Et.pattern.global) {
              var Wt = Et.pattern.toString().match(/[imsuy]*$/)[0];
              Et.pattern = RegExp(Et.pattern.source, Wt + 'g');
            }
            for (
              var At = Et.pattern || Et, wt = pt.next, Ct = st;
              wt !== b.tail && !(ct && Ct >= ct.reach);
              Ct += wt.value.length, wt = wt.next
            ) {
              var St = wt.value;
              if (b.length > et.length) return;
              if (!(St instanceof rt)) {
                var Mt = 1,
                  Ut;
                if (Vt) {
                  if (((Ut = dt(At, Ct, et, yt)), !Ut || Ut.index >= et.length))
                    break;
                  var Yt = Ut.index,
                    Bt = Ut.index + Ut[0].length,
                    Ft = Ct;
                  for (Ft += wt.value.length; Yt >= Ft; )
                    (wt = wt.next), (Ft += wt.value.length);
                  if (
                    ((Ft -= wt.value.length), (Ct = Ft), wt.value instanceof rt)
                  )
                    continue;
                  for (
                    var Qt = wt;
                    Qt !== b.tail && (Ft < Bt || typeof Qt.value == 'string');
                    Qt = Qt.next
                  )
                    Mt++, (Ft += Qt.value.length);
                  Mt--, (St = et.slice(Ct, Ft)), (Ut.index -= Ct);
                } else if (((Ut = dt(At, 0, St, yt)), !Ut)) continue;
                var Yt = Ut.index,
                  sr = Ut[0],
                  mr = St.slice(0, Yt),
                  vr = St.slice(Yt + sr.length),
                  _r = Ct + St.length;
                ct && _r > ct.reach && (ct.reach = _r);
                var kr = wt.prev;
                mr && ((kr = vt(b, kr, mr)), (Ct += mr.length)), Pt(b, kr, Mt);
                var Lr = new rt(nt, Rt ? $.tokenize(sr, Rt) : sr, Kt, sr);
                if (((wt = vt(b, kr, Lr)), vr && vt(b, wt, vr), Mt > 1)) {
                  var Fr = { cause: nt + ',' + lt, reach: _r };
                  jt(et, b, ut, wt.prev, Ct, Fr),
                    ct && Fr.reach > ct.reach && (ct.reach = Fr.reach);
                }
              }
            }
          }
        }
    }
    function bt() {
      var et = { value: null, prev: null, next: null },
        b = { value: null, prev: et, next: null };
      (et.next = b), (this.head = et), (this.tail = b), (this.length = 0);
    }
    function vt(et, b, ut) {
      var pt = b.next,
        st = { value: ut, prev: b, next: pt };
      return (b.next = st), (pt.prev = st), et.length++, st;
    }
    function Pt(et, b, ut) {
      for (var pt = b.next, st = 0; st < ut && pt !== et.tail; st++)
        pt = pt.next;
      (b.next = pt), (pt.prev = b), (et.length -= st);
    }
    function kt(et) {
      for (var b = [], ut = et.head.next; ut !== et.tail; )
        b.push(ut.value), (ut = ut.next);
      return b;
    }
    if (!c.document)
      return (
        c.addEventListener &&
          ($.disableWorkerMessageHandler ||
            c.addEventListener(
              'message',
              function (et) {
                var b = JSON.parse(et.data),
                  ut = b.language,
                  pt = b.code,
                  st = b.immediateClose;
                c.postMessage($.highlight(pt, $.languages[ut], ut)),
                  st && c.close();
              },
              !1
            )),
        $
      );
    var gt = $.util.currentScript();
    gt &&
      (($.filename = gt.src),
      gt.hasAttribute('data-manual') && ($.manual = !0));
    function mt() {
      $.manual || $.highlightAll();
    }
    if (!$.manual) {
      var it = document.readyState;
      it === 'loading' || (it === 'interactive' && gt && gt.defer)
        ? document.addEventListener('DOMContentLoaded', mt)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(mt)
        : window.setTimeout(mt, 16);
    }
    return $;
  })(o);
  e.exports && (e.exports = a),
    typeof commonjsGlobal < 'u' && (commonjsGlobal.Prism = a),
    (a.languages.markup = {
      comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
      prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
      doctype: {
        pattern:
          /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          'internal-subset': {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null,
          },
          string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
          punctuation: /^<!|>$|[[\]]/,
          'doctype-tag': /^DOCTYPE/i,
          name: /[^\s<>'"]+/,
        },
      },
      cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
      tag: {
        pattern:
          /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
          },
          'special-attr': [],
          'attr-value': {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                { pattern: /^=/, alias: 'attr-equals' },
                { pattern: /^(\s*)["']|["']$/, lookbehind: !0 },
              ],
            },
          },
          punctuation: /\/?>/,
          'attr-name': {
            pattern: /[^\s>\/]+/,
            inside: { namespace: /^[^\s>\/:]+:/ },
          },
        },
      },
      entity: [
        { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
        /&#x?[\da-f]{1,8};/i,
      ],
    }),
    (a.languages.markup.tag.inside['attr-value'].inside.entity =
      a.languages.markup.entity),
    (a.languages.markup.doctype.inside['internal-subset'].inside =
      a.languages.markup),
    a.hooks.add('wrap', function (c) {
      c.type === 'entity' &&
        (c.attributes.title = c.content.replace(/&amp;/, '&'));
    }),
    Object.defineProperty(a.languages.markup.tag, 'addInlined', {
      value: function (d, g) {
        var j = {};
        (j['language-' + g] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: a.languages[g],
        }),
          (j.cdata = /^<!\[CDATA\[|\]\]>$/i);
        var $ = {
          'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: j },
        };
        $['language-' + g] = { pattern: /[\s\S]+/, inside: a.languages[g] };
        var rt = {};
        (rt[d] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function () {
                return d;
              }
            ),
            'i'
          ),
          lookbehind: !0,
          greedy: !0,
          inside: $,
        }),
          a.languages.insertBefore('markup', 'cdata', rt);
      },
    }),
    Object.defineProperty(a.languages.markup.tag, 'addAttribute', {
      value: function (c, d) {
        a.languages.markup.tag.inside['special-attr'].push({
          pattern: RegExp(
            /(^|["'\s])/.source +
              '(?:' +
              c +
              ')' +
              /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            'i'
          ),
          lookbehind: !0,
          inside: {
            'attr-name': /^[^\s=]+/,
            'attr-value': {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [d, 'language-' + d],
                  inside: a.languages[d],
                },
                punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/],
              },
            },
          },
        });
      },
    }),
    (a.languages.html = a.languages.markup),
    (a.languages.mathml = a.languages.markup),
    (a.languages.svg = a.languages.markup),
    (a.languages.xml = a.languages.extend('markup', {})),
    (a.languages.ssml = a.languages.xml),
    (a.languages.atom = a.languages.xml),
    (a.languages.rss = a.languages.xml),
    (function (c) {
      var d =
        /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      (c.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: RegExp(
            '@[\\w-](?:' +
              /[^;{\s"']|\s+(?!\s)/.source +
              '|' +
              d.source +
              ')*?' +
              /(?:;|(?=\s*\{))/.source
          ),
          inside: {
            rule: /^@[\w-]+/,
            'selector-function-argument': {
              pattern:
                /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: 'selector',
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0,
            },
          },
        },
        url: {
          pattern: RegExp(
            '\\burl\\((?:' +
              d.source +
              '|' +
              /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
              ')\\)',
            'i'
          ),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: { pattern: RegExp('^' + d.source + '$'), alias: 'url' },
          },
        },
        selector: {
          pattern: RegExp(
            `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
              d.source +
              ')*(?=\\s*\\{)'
          ),
          lookbehind: !0,
        },
        string: { pattern: d, greedy: !0 },
        property: {
          pattern:
            /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0,
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: !0,
        },
        punctuation: /[(){};:,]/,
      }),
        (c.languages.css.atrule.inside.rest = c.languages.css);
      var g = c.languages.markup;
      g &&
        (g.tag.addInlined('style', 'css'), g.tag.addAttribute('style', 'css'));
    })(a),
    (a.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          greedy: !0,
        },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
      },
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ },
      },
      keyword:
        /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/,
    }),
    (a.languages.javascript = a.languages.extend('clike', {
      'class-name': [
        a.languages.clike['class-name'],
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: !0,
        },
      ],
      keyword: [
        { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
        {
          pattern:
            /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0,
        },
      ],
      function:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source +
            '(?:' +
            (/NaN|Infinity/.source +
              '|' +
              /0[bB][01]+(?:_[01]+)*n?/.source +
              '|' +
              /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
              '|' +
              /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
              '|' +
              /\d+(?:_\d+)*n/.source +
              '|' +
              /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                .source) +
            ')' +
            /(?![\w$])/.source
        ),
        lookbehind: !0,
      },
      operator:
        /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
    })),
    (a.languages.javascript['class-name'][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    a.languages.insertBefore('javascript', 'keyword', {
      regex: {
        pattern: RegExp(
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
            /\//.source +
            '(?:' +
            /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/
              .source +
            '|' +
            /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/
              .source +
            ')' +
            /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/
              .source
        ),
        lookbehind: !0,
        greedy: !0,
        inside: {
          'regex-source': {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: 'language-regex',
            inside: a.languages.regex,
          },
          'regex-delimiter': /^\/|\/$/,
          'regex-flags': /^[a-z]+$/,
        },
      },
      'function-variable': {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: 'function',
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: a.languages.javascript,
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: a.languages.javascript,
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: a.languages.javascript,
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: a.languages.javascript,
        },
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    a.languages.insertBefore('javascript', 'string', {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
      'template-string': {
        pattern:
          /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\$\{|\}$/,
                alias: 'punctuation',
              },
              rest: a.languages.javascript,
            },
          },
          string: /[\s\S]+/,
        },
      },
      'string-property': {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: 'property',
      },
    }),
    a.languages.insertBefore('javascript', 'operator', {
      'literal-property': {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: 'property',
      },
    }),
    a.languages.markup &&
      (a.languages.markup.tag.addInlined('script', 'javascript'),
      a.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
          .source,
        'javascript'
      )),
    (a.languages.js = a.languages.javascript),
    (function () {
      if (typeof a > 'u' || typeof document > 'u') return;
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector);
      var c = 'Loading…',
        d = function (gt, mt) {
          return '✖ Error ' + gt + ' while fetching file: ' + mt;
        },
        g = '✖ Error: File does not exist or is empty',
        j = {
          js: 'javascript',
          py: 'python',
          rb: 'ruby',
          ps1: 'powershell',
          psm1: 'powershell',
          sh: 'bash',
          bat: 'batch',
          h: 'c',
          tex: 'latex',
        },
        $ = 'data-src-status',
        rt = 'loading',
        dt = 'loaded',
        jt = 'failed',
        bt =
          'pre[data-src]:not([' +
          $ +
          '="' +
          dt +
          '"]):not([' +
          $ +
          '="' +
          rt +
          '"])';
      function vt(gt, mt, it) {
        var et = new XMLHttpRequest();
        et.open('GET', gt, !0),
          (et.onreadystatechange = function () {
            et.readyState == 4 &&
              (et.status < 400 && et.responseText
                ? mt(et.responseText)
                : et.status >= 400
                ? it(d(et.status, et.statusText))
                : it(g));
          }),
          et.send(null);
      }
      function Pt(gt) {
        var mt = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(gt || '');
        if (mt) {
          var it = Number(mt[1]),
            et = mt[2],
            b = mt[3];
          return et ? (b ? [it, Number(b)] : [it, void 0]) : [it, it];
        }
      }
      a.hooks.add('before-highlightall', function (gt) {
        gt.selector += ', ' + bt;
      }),
        a.hooks.add('before-sanity-check', function (gt) {
          var mt = gt.element;
          if (mt.matches(bt)) {
            (gt.code = ''), mt.setAttribute($, rt);
            var it = mt.appendChild(document.createElement('CODE'));
            it.textContent = c;
            var et = mt.getAttribute('data-src'),
              b = gt.language;
            if (b === 'none') {
              var ut = (/\.(\w+)$/.exec(et) || [, 'none'])[1];
              b = j[ut] || ut;
            }
            a.util.setLanguage(it, b), a.util.setLanguage(mt, b);
            var pt = a.plugins.autoloader;
            pt && pt.loadLanguages(b),
              vt(
                et,
                function (st) {
                  mt.setAttribute($, dt);
                  var ct = Pt(mt.getAttribute('data-range'));
                  if (ct) {
                    var nt = st.split(/\r\n?|\n/g),
                      at = ct[0],
                      lt = ct[1] == null ? nt.length : ct[1];
                    at < 0 && (at += nt.length),
                      (at = Math.max(0, Math.min(at - 1, nt.length))),
                      lt < 0 && (lt += nt.length),
                      (lt = Math.max(0, Math.min(lt, nt.length))),
                      (st = nt.slice(at, lt).join(`
`)),
                      mt.hasAttribute('data-start') ||
                        mt.setAttribute('data-start', String(at + 1));
                  }
                  (it.textContent = st), a.highlightElement(it);
                },
                function (st) {
                  mt.setAttribute($, jt), (it.textContent = st);
                }
              );
          }
        }),
        (a.plugins.fileHighlight = {
          highlight: function (mt) {
            for (
              var it = (mt || document).querySelectorAll(bt), et = 0, b;
              (b = it[et++]);

            )
              a.highlightElement(b);
          },
        });
      var kt = !1;
      a.fileHighlight = function () {
        kt ||
          (console.warn(
            'Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.'
          ),
          (kt = !0)),
          a.plugins.fileHighlight.highlight.apply(this, arguments);
      };
    })();
})(prism);
var prismExports = prism.exports;
const prismjs = getDefaultExportFromCjs(prismExports),
  prismTomorrowUrl =
    'data:text/css;base64,LyoqCiAqIHByaXNtLmpzIHRvbW9ycm93IG5pZ2h0IGVpZ2h0aWVzIGZvciBKYXZhU2NyaXB0LCBDb2ZmZWVTY3JpcHQsIENTUyBhbmQgSFRNTAogKiBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNrZW1wc29uL3RvbW9ycm93LXRoZW1lCiAqIEBhdXRob3IgUm9zZSBQcml0Y2hhcmQKICovCgpjb2RlW2NsYXNzKj0ibGFuZ3VhZ2UtIl0sCnByZVtjbGFzcyo9Imxhbmd1YWdlLSJdIHsKCWNvbG9yOiAjY2NjOwoJYmFja2dyb3VuZDogbm9uZTsKCWZvbnQtZmFtaWx5OiBDb25zb2xhcywgTW9uYWNvLCAnQW5kYWxlIE1vbm8nLCAnVWJ1bnR1IE1vbm8nLCBtb25vc3BhY2U7Cglmb250LXNpemU6IDFlbTsKCXRleHQtYWxpZ246IGxlZnQ7Cgl3aGl0ZS1zcGFjZTogcHJlOwoJd29yZC1zcGFjaW5nOiBub3JtYWw7Cgl3b3JkLWJyZWFrOiBub3JtYWw7Cgl3b3JkLXdyYXA6IG5vcm1hbDsKCWxpbmUtaGVpZ2h0OiAxLjU7CgoJLW1vei10YWItc2l6ZTogNDsKCS1vLXRhYi1zaXplOiA0OwoJdGFiLXNpemU6IDQ7CgoJLXdlYmtpdC1oeXBoZW5zOiBub25lOwoJLW1vei1oeXBoZW5zOiBub25lOwoJLW1zLWh5cGhlbnM6IG5vbmU7CgloeXBoZW5zOiBub25lOwoKfQoKLyogQ29kZSBibG9ja3MgKi8KcHJlW2NsYXNzKj0ibGFuZ3VhZ2UtIl0gewoJcGFkZGluZzogMWVtOwoJbWFyZ2luOiAuNWVtIDA7CglvdmVyZmxvdzogYXV0bzsKfQoKOm5vdChwcmUpID4gY29kZVtjbGFzcyo9Imxhbmd1YWdlLSJdLApwcmVbY2xhc3MqPSJsYW5ndWFnZS0iXSB7CgliYWNrZ3JvdW5kOiAjMmQyZDJkOwp9CgovKiBJbmxpbmUgY29kZSAqLwo6bm90KHByZSkgPiBjb2RlW2NsYXNzKj0ibGFuZ3VhZ2UtIl0gewoJcGFkZGluZzogLjFlbTsKCWJvcmRlci1yYWRpdXM6IC4zZW07Cgl3aGl0ZS1zcGFjZTogbm9ybWFsOwp9CgoudG9rZW4uY29tbWVudCwKLnRva2VuLmJsb2NrLWNvbW1lbnQsCi50b2tlbi5wcm9sb2csCi50b2tlbi5kb2N0eXBlLAoudG9rZW4uY2RhdGEgewoJY29sb3I6ICM5OTk7Cn0KCi50b2tlbi5wdW5jdHVhdGlvbiB7Cgljb2xvcjogI2NjYzsKfQoKLnRva2VuLnRhZywKLnRva2VuLmF0dHItbmFtZSwKLnRva2VuLm5hbWVzcGFjZSwKLnRva2VuLmRlbGV0ZWQgewoJY29sb3I6ICNlMjc3N2E7Cn0KCi50b2tlbi5mdW5jdGlvbi1uYW1lIHsKCWNvbG9yOiAjNjE5NmNjOwp9CgoudG9rZW4uYm9vbGVhbiwKLnRva2VuLm51bWJlciwKLnRva2VuLmZ1bmN0aW9uIHsKCWNvbG9yOiAjZjA4ZDQ5Owp9CgoudG9rZW4ucHJvcGVydHksCi50b2tlbi5jbGFzcy1uYW1lLAoudG9rZW4uY29uc3RhbnQsCi50b2tlbi5zeW1ib2wgewoJY29sb3I6ICNmOGM1NTU7Cn0KCi50b2tlbi5zZWxlY3RvciwKLnRva2VuLmltcG9ydGFudCwKLnRva2VuLmF0cnVsZSwKLnRva2VuLmtleXdvcmQsCi50b2tlbi5idWlsdGluIHsKCWNvbG9yOiAjY2M5OWNkOwp9CgoudG9rZW4uc3RyaW5nLAoudG9rZW4uY2hhciwKLnRva2VuLmF0dHItdmFsdWUsCi50b2tlbi5yZWdleCwKLnRva2VuLnZhcmlhYmxlIHsKCWNvbG9yOiAjN2VjNjk5Owp9CgoudG9rZW4ub3BlcmF0b3IsCi50b2tlbi5lbnRpdHksCi50b2tlbi51cmwgewoJY29sb3I6ICM2N2NkY2M7Cn0KCi50b2tlbi5pbXBvcnRhbnQsCi50b2tlbi5ib2xkIHsKCWZvbnQtd2VpZ2h0OiBib2xkOwp9Ci50b2tlbi5pdGFsaWMgewoJZm9udC1zdHlsZTogaXRhbGljOwp9CgoudG9rZW4uZW50aXR5IHsKCWN1cnNvcjogaGVscDsKfQoKLnRva2VuLmluc2VydGVkIHsKCWNvbG9yOiBncmVlbjsKfQo=',
  prismUrl =
    'data:text/css;base64,LyoqCiAqIHByaXNtLmpzIGRlZmF1bHQgdGhlbWUgZm9yIEphdmFTY3JpcHQsIENTUyBhbmQgSFRNTAogKiBCYXNlZCBvbiBkYWJibGV0IChodHRwOi8vZGFiYmxldC5jb20pCiAqIEBhdXRob3IgTGVhIFZlcm91CiAqLwoKY29kZVtjbGFzcyo9Imxhbmd1YWdlLSJdLApwcmVbY2xhc3MqPSJsYW5ndWFnZS0iXSB7Cgljb2xvcjogYmxhY2s7CgliYWNrZ3JvdW5kOiBub25lOwoJdGV4dC1zaGFkb3c6IDAgMXB4IHdoaXRlOwoJZm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTsKCWZvbnQtc2l6ZTogMWVtOwoJdGV4dC1hbGlnbjogbGVmdDsKCXdoaXRlLXNwYWNlOiBwcmU7Cgl3b3JkLXNwYWNpbmc6IG5vcm1hbDsKCXdvcmQtYnJlYWs6IG5vcm1hbDsKCXdvcmQtd3JhcDogbm9ybWFsOwoJbGluZS1oZWlnaHQ6IDEuNTsKCgktbW96LXRhYi1zaXplOiA0OwoJLW8tdGFiLXNpemU6IDQ7Cgl0YWItc2l6ZTogNDsKCgktd2Via2l0LWh5cGhlbnM6IG5vbmU7CgktbW96LWh5cGhlbnM6IG5vbmU7CgktbXMtaHlwaGVuczogbm9uZTsKCWh5cGhlbnM6IG5vbmU7Cn0KCnByZVtjbGFzcyo9Imxhbmd1YWdlLSJdOjotbW96LXNlbGVjdGlvbiwgcHJlW2NsYXNzKj0ibGFuZ3VhZ2UtIl0gOjotbW96LXNlbGVjdGlvbiwKY29kZVtjbGFzcyo9Imxhbmd1YWdlLSJdOjotbW96LXNlbGVjdGlvbiwgY29kZVtjbGFzcyo9Imxhbmd1YWdlLSJdIDo6LW1vei1zZWxlY3Rpb24gewoJdGV4dC1zaGFkb3c6IG5vbmU7CgliYWNrZ3JvdW5kOiAjYjNkNGZjOwp9CgpwcmVbY2xhc3MqPSJsYW5ndWFnZS0iXTo6c2VsZWN0aW9uLCBwcmVbY2xhc3MqPSJsYW5ndWFnZS0iXSA6OnNlbGVjdGlvbiwKY29kZVtjbGFzcyo9Imxhbmd1YWdlLSJdOjpzZWxlY3Rpb24sIGNvZGVbY2xhc3MqPSJsYW5ndWFnZS0iXSA6OnNlbGVjdGlvbiB7Cgl0ZXh0LXNoYWRvdzogbm9uZTsKCWJhY2tncm91bmQ6ICNiM2Q0ZmM7Cn0KCkBtZWRpYSBwcmludCB7Cgljb2RlW2NsYXNzKj0ibGFuZ3VhZ2UtIl0sCglwcmVbY2xhc3MqPSJsYW5ndWFnZS0iXSB7CgkJdGV4dC1zaGFkb3c6IG5vbmU7Cgl9Cn0KCi8qIENvZGUgYmxvY2tzICovCnByZVtjbGFzcyo9Imxhbmd1YWdlLSJdIHsKCXBhZGRpbmc6IDFlbTsKCW1hcmdpbjogLjVlbSAwOwoJb3ZlcmZsb3c6IGF1dG87Cn0KCjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPSJsYW5ndWFnZS0iXSwKcHJlW2NsYXNzKj0ibGFuZ3VhZ2UtIl0gewoJYmFja2dyb3VuZDogI2Y1ZjJmMDsKfQoKLyogSW5saW5lIGNvZGUgKi8KOm5vdChwcmUpID4gY29kZVtjbGFzcyo9Imxhbmd1YWdlLSJdIHsKCXBhZGRpbmc6IC4xZW07Cglib3JkZXItcmFkaXVzOiAuM2VtOwoJd2hpdGUtc3BhY2U6IG5vcm1hbDsKfQoKLnRva2VuLmNvbW1lbnQsCi50b2tlbi5wcm9sb2csCi50b2tlbi5kb2N0eXBlLAoudG9rZW4uY2RhdGEgewoJY29sb3I6IHNsYXRlZ3JheTsKfQoKLnRva2VuLnB1bmN0dWF0aW9uIHsKCWNvbG9yOiAjOTk5Owp9CgoudG9rZW4ubmFtZXNwYWNlIHsKCW9wYWNpdHk6IC43Owp9CgoudG9rZW4ucHJvcGVydHksCi50b2tlbi50YWcsCi50b2tlbi5ib29sZWFuLAoudG9rZW4ubnVtYmVyLAoudG9rZW4uY29uc3RhbnQsCi50b2tlbi5zeW1ib2wsCi50b2tlbi5kZWxldGVkIHsKCWNvbG9yOiAjOTA1Owp9CgoudG9rZW4uc2VsZWN0b3IsCi50b2tlbi5hdHRyLW5hbWUsCi50b2tlbi5zdHJpbmcsCi50b2tlbi5jaGFyLAoudG9rZW4uYnVpbHRpbiwKLnRva2VuLmluc2VydGVkIHsKCWNvbG9yOiAjNjkwOwp9CgoudG9rZW4ub3BlcmF0b3IsCi50b2tlbi5lbnRpdHksCi50b2tlbi51cmwsCi5sYW5ndWFnZS1jc3MgLnRva2VuLnN0cmluZywKLnN0eWxlIC50b2tlbi5zdHJpbmcgewoJY29sb3I6ICM5YTZlM2E7CgkvKiBUaGlzIGJhY2tncm91bmQgY29sb3Igd2FzIGludGVuZGVkIGJ5IHRoZSBhdXRob3Igb2YgdGhpcyB0aGVtZS4gKi8KCWJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIC41KTsKfQoKLnRva2VuLmF0cnVsZSwKLnRva2VuLmF0dHItdmFsdWUsCi50b2tlbi5rZXl3b3JkIHsKCWNvbG9yOiAjMDdhOwp9CgoudG9rZW4uZnVuY3Rpb24sCi50b2tlbi5jbGFzcy1uYW1lIHsKCWNvbG9yOiAjREQ0QTY4Owp9CgoudG9rZW4ucmVnZXgsCi50b2tlbi5pbXBvcnRhbnQsCi50b2tlbi52YXJpYWJsZSB7Cgljb2xvcjogI2U5MDsKfQoKLnRva2VuLmltcG9ydGFudCwKLnRva2VuLmJvbGQgewoJZm9udC13ZWlnaHQ6IGJvbGQ7Cn0KLnRva2VuLml0YWxpYyB7Cglmb250LXN0eWxlOiBpdGFsaWM7Cn0KCi50b2tlbi5lbnRpdHkgewoJY3Vyc29yOiBoZWxwOwp9Cg==',
  loadTheme = (e) => {
    const o = loadTheme;
    if (o.isLoaded) return Promise.resolve();
    if (o.promise) return o.promise;
    const a = e === 'prism-tomorrow' ? prismTomorrowUrl : prismUrl;
    return (
      (o.promise = new Promise(async (c) => {
        const d = await fetch(a).then((j) => j.text()),
          g = document.createElement('style');
        (g.innerHTML = d),
          document.head.appendChild(g),
          (g.onload = () => {
            (o.isLoaded = !0), (prismjs.theme = e), c();
          });
      })),
      o.promise
    );
  },
  [useTheme, getTheme, themeState] =
    bundleExports$1.createGlobalStateWithDecoupledFuncs('prism-tomorrow', {
      localStorage: { key: 'app-theme' },
      onInit: async ({ getState: e }) => {
        const o = e();
        document.documentElement.classList.add(
          o === 'prism-tomorrow' ? 'dark' : 'light'
        ),
          await loadTheme(o);
      },
      actions: {
        highlight:
          () =>
          async ({ getState: e }) => {
            await loadTheme(e()), prismjs.highlightAll();
          },
        toggle:
          () =>
          ({ setState: e }) => {
            e((o) => (o === 'prism-tomorrow' ? 'prism' : 'prism-tomorrow')),
              window.location.reload();
          },
      },
    }),
  Card = ({ children: e, className: o, ...a }) =>
    jsxRuntimeExports.jsx('div', {
      className: `rounded-lg shadow-lg bg-white dark:bg-stone-100 p-6 ${o}`,
      ...a,
      children: e,
    });
var DefaultContext = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  IconContext = React.createContext && React.createContext(DefaultContext),
  __assign =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (__assign =
          Object.assign ||
          function (e) {
            for (var o, a = 1, c = arguments.length; a < c; a++) {
              o = arguments[a];
              for (var d in o)
                Object.prototype.hasOwnProperty.call(o, d) && (e[d] = o[d]);
            }
            return e;
          }),
        __assign.apply(this, arguments)
      );
    },
  __rest =
    (globalThis && globalThis.__rest) ||
    function (e, o) {
      var a = {};
      for (var c in e)
        Object.prototype.hasOwnProperty.call(e, c) &&
          o.indexOf(c) < 0 &&
          (a[c] = e[c]);
      if (e != null && typeof Object.getOwnPropertySymbols == 'function')
        for (var d = 0, c = Object.getOwnPropertySymbols(e); d < c.length; d++)
          o.indexOf(c[d]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, c[d]) &&
            (a[c[d]] = e[c[d]]);
      return a;
    };
function Tree2Element(e) {
  return (
    e &&
    e.map(function (o, a) {
      return React.createElement(
        o.tag,
        __assign({ key: a }, o.attr),
        Tree2Element(o.child)
      );
    })
  );
}
function GenIcon(e) {
  return function (o) {
    return React.createElement(
      IconBase,
      __assign({ attr: __assign({}, e.attr) }, o),
      Tree2Element(e.child)
    );
  };
}
function IconBase(e) {
  var o = function (a) {
    var c = e.attr,
      d = e.size,
      g = e.title,
      j = __rest(e, ['attr', 'size', 'title']),
      $ = d || a.size || '1em',
      rt;
    return (
      a.className && (rt = a.className),
      e.className && (rt = (rt ? rt + ' ' : '') + e.className),
      React.createElement(
        'svg',
        __assign(
          { stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' },
          a.attr,
          c,
          j,
          {
            className: rt,
            style: __assign(
              __assign({ color: e.color || a.color }, a.style),
              e.style
            ),
            height: $,
            width: $,
            xmlns: 'http://www.w3.org/2000/svg',
          }
        ),
        g && React.createElement('title', null, g),
        e.children
      )
    );
  };
  return IconContext !== void 0
    ? React.createElement(IconContext.Consumer, null, function (a) {
        return o(a);
      })
    : o(DefaultContext);
}
function IoIosArrowBack(e) {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z',
        },
      },
    ],
  })(e);
}
function IoIosArrowDown(e) {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z',
        },
      },
    ],
  })(e);
}
function IoIosArrowUp(e) {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z',
        },
      },
    ],
  })(e);
}
const Collapsible$1 = '',
  Collapsible = reactExports.forwardRef(
    ({ children: e, title: o, className: a, isOpen: c, ...d }, g) => {
      const j = reactExports.useRef(null),
        [$, rt] = reactExports.useState(c),
        dt = (bt) => {
          bt == null || bt.preventDefault(), rt((Pt) => !Pt);
          const vt = j.current.querySelector('.collapsible-details');
          $ && (vt.style.height = vt.clientHeight + 'px');
        };
      reactExports.useEffect(() => {
        const { current: bt } = j;
        if (bt) {
          if ($) {
            j.current.classList.add('open');
            return;
          }
          j.current.classList.remove('open');
        }
      }, [$]),
        reactExports.useEffect(() => {
          rt(c);
        }, [c]),
        reactExports.useImperativeHandle(
          g,
          () => ({
            open: () => {
              rt(!0);
            },
            close: () => {
              rt(!1);
            },
          }),
          []
        );
      const jt = typeof o == 'string';
      return jsxRuntimeExports.jsxs('details', {
        ...d,
        ref: j,
        open: !0,
        className: `${a} collapsible marker:no-underline`,
        children: [
          jsxRuntimeExports.jsx('summary', {
            className:
              'list-none flex justify-between items-center cursor-pointer',
            onClick: dt,
            children: jsxRuntimeExports.jsxs('button', {
              className: `flex justify-between items-center flex-1 text-left ${
                $ ? 'pb-2 border-b border-gray-200' : ''
              }`,
              children: [
                jsxRuntimeExports.jsx('div', {
                  className: '',
                  children: jt
                    ? jsxRuntimeExports.jsx('h3', {
                        className: 'font-bold text-gray-600',
                        children: o,
                      })
                    : o,
                }),
                jsxRuntimeExports.jsx(IoIosArrowUp, {
                  className: 'text-gray-600 collapsible-close-arrow',
                }),
                jsxRuntimeExports.jsx(IoIosArrowDown, {
                  className: 'text-gray-600 collapsible-open-arrow',
                }),
              ],
            }),
          }),
          jsxRuntimeExports.jsx('div', {
            className: `
          collapsible-details overflow-hidden animation-fill-mode-forwards
          ${$ ? 'animate-expand-from-top' : 'animate-collapse-to-top'}`,
            children: e,
          }),
        ],
      });
    }
  );
function ImSpinner(e) {
  return GenIcon({
    tag: 'svg',
    attr: { version: '1.1', viewBox: '0 0 16 16' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M6 2c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM10.243 3.757c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM13 8c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM11.243 12.243c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM7 14c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM2.757 12.243c0 0 0 0 0 0 0-0.552 0.448-1 1-1s1 0.448 1 1c0 0 0 0 0 0 0 0.552-0.448 1-1 1s-1-0.448-1-1zM2.257 3.757c0 0 0 0 0 0 0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5c0 0 0 0 0 0 0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5zM0.875 8c0-0.621 0.504-1.125 1.125-1.125s1.125 0.504 1.125 1.125c0 0.621-0.504 1.125-1.125 1.125s-1.125-0.504-1.125-1.125z',
        },
      },
    ],
  })(e);
}
const Button = ({ children: e, onClick: o, className: a, ...c }) => {
  const d = reactExports.useRef({ isRunning: !1 }),
    g = reactExports.useCallback(
      async (j) => {
        j.preventDefault();
        const { current: $ } = d;
        if ($.isRunning) return;
        const rt = j.currentTarget.querySelector('.loading-indicator');
        ($.isRunning = !0), rt.classList.remove('hidden');
        try {
          const dt = o == null ? void 0 : o();
          if (!(Promise.resolve(dt) === dt)) return;
          await dt;
        } catch (dt) {
          throw dt;
        } finally {
          ($.isRunning = !1), rt.classList.add('hidden');
        }
      },
      [o]
    );
  return jsxRuntimeExports.jsxs('button', {
    onClick: g,
    ...c,
    className: `flex gap-3 justify-center items-center ${a}`,
    children: [
      jsxRuntimeExports.jsx('div', { children: e }),
      jsxRuntimeExports.jsx(ImSpinner, {
        className: 'loading-indicator animate-spin hidden',
      }),
    ],
  });
};
var bundle = { exports: {} };
(function (module, exports) {
  (function (o, a) {
    module.exports = a();
  })(commonjsGlobal, () =>
    (() => {
      var __webpack_modules__ = {
          './src/EasyWebWorker.functions.ts': (
            __unused_webpack_module,
            exports,
            __webpack_require__
          ) => {
            eval(`

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

//# sourceURL=webpack://easy-web-worker/./src/EasyWebWorker.functions.ts?`);
          },
          './src/EasyWebWorker.ts': (
            __unused_webpack_module,
            exports,
            __webpack_require__
          ) => {
            eval(`

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

//# sourceURL=webpack://easy-web-worker/./src/EasyWebWorker.ts?`);
          },
          './src/EasyWebWorkerFixtures.ts': (
            __unused_webpack_module,
            exports
          ) => {
            eval(`

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

//# sourceURL=webpack://easy-web-worker/./src/EasyWebWorkerFixtures.ts?`);
          },
          './src/EasyWebWorkerMessage.ts': (
            __unused_webpack_module,
            exports,
            __webpack_require__
          ) => {
            eval(`

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

//# sourceURL=webpack://easy-web-worker/./src/EasyWebWorkerMessage.ts?`);
          },
          './src/StaticEasyWebWorker.ts': (
            __unused_webpack_module,
            exports
          ) => {
            eval(`

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

//# sourceURL=webpack://easy-web-worker/./src/StaticEasyWebWorker.ts?`);
          },
          './src/index.ts': (
            __unused_webpack_module,
            exports,
            __webpack_require__
          ) => {
            eval(`

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

//# sourceURL=webpack://easy-web-worker/./src/index.ts?`);
          },
          './node_modules/cancelable-promise-jq/lib/bundle.js': function (
            module
          ) {
            eval(`/*! For license information please see bundle.js.LICENSE.txt */
!function(e,t){ true?module.exports=t():0}(this,(()=>(()=>{"use strict";var e={399:(e,t)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(){return o="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},o.apply(this,arguments)}function i(e){var t="function"==typeof Map?new Map:void 0;return i=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return c(e,arguments,l(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),u(n,e)},i(e)}function c(e,t,r){return c=a()?Reflect.construct.bind():function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&u(o,r.prototype),o},c.apply(null,arguments)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CancelablePromise=void 0;var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(s,e);var t,i,c,f=(i=s,c=a(),function(){var e,t=l(i);if(c){var o=l(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)}(this,e)});function s(e){var t,r,i,c,a,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(c=f.call(this,(function(e,t){a=e,u=t}))).status="pending",c.cancelCallbacks=[],c.ownCancelCallbacks=[],c.onProgressCallbacks=[],c.subscribeToOwnCancelEvent=function(e){c.ownCancelCallbacks.push(e)},c.cancel=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if("pending"===c.status)return c.status="canceled",c.ownCancelCallbacks.forEach((function(t){return t(e)})),c.cancelCallbacks.forEach((function(t){return t(e)})),c.reject(e),c.cancelCallbacks=[],c.ownCancelCallbacks=[],n(c)},c.onCancel=function(e){return c.cancelCallbacks.push(e),n(c)},c.onProgress=function(e){return c.onProgressCallbacks.push(e),n(c)},c.reportProgress=function(e,t){return c.onProgressCallbacks.forEach((function(r){return r(e,t)})),n(c)},c.createChildPromise=function(){var e,t,r=new s((function(r,n,o){e=r,t=n}));return r.onProgressCallbacks=c.onProgressCallbacks,r.onCancel((function(e){c.cancel(e)})),{promise:r,resolve:e,reject:t}},c.resolve=a,c.reject=u,e((function(e){c.status="resolved",c.resolve(e)}),(function(e){c.status="rejected",c.reject(e)}),{cancel:function(e){return c.cancel(e)},onCancel:function(e){return c.subscribeToOwnCancelEvent(e),n(c)},onProgress:function(e){return c.onProgress(e)},reportProgress:function(e,t){c.reportProgress(e,t)}}),c.then=function(e,r){var i=c.createChildPromise(),a=i.promise,u=i.resolve,f=i.reject;return o((t=n(c),l(s.prototype)),"then",t).call(t,e,r).then(u,f),a},c.catch=function(e){var t=c.createChildPromise(),i=t.promise,a=t.resolve,u=t.reject;return o((r=n(c),l(s.prototype)),"catch",r).call(r,e).then(a,u),i},c.finally=function(e){var t=c.createChildPromise(),r=t.promise,a=t.resolve,u=t.reject;return o((i=n(c),l(s.prototype)),"finally",i).call(i,e).then(a,u),r},c}return t=s,Object.defineProperty(t,"prototype",{writable:!1}),t}(i(Promise));t.CancelablePromise=f,f.prototype.constructor=Promise},716:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.toCancelablePromise=t.isPromise=t.groupAsCancelablePromise=t.createDecoupledPromise=t.allSettledCancelable=void 0;var o=r(335),i=r(399);function c(){c=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function f(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(e){f=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var i=t&&t.prototype instanceof y?t:y,c=Object.create(i.prototype),a=new E(n||[]);return o(c,"_invoke",{value:O(e,r,a)}),c}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var h={};function y(){}function d(){}function v(){}var b={};f(b,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(k([])));g&&g!==t&&r.call(g,a)&&(b=g);var w=v.prototype=y.prototype=Object.create(b);function P(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function j(e,t){function i(o,c,a,u){var l=p(e[o],e,c);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==n(s)&&r.call(s,"__await")?t.resolve(s.__await).then((function(e){i("next",e,a,u)}),(function(e){i("throw",e,a,u)})):t.resolve(s).then((function(e){f.value=e,a(f)}),(function(e){return i("throw",e,a,u)}))}u(l.arg)}var c;o(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){i(e,r,t,n)}))}return c=c?c.then(n,n):n()}})}function O(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=C(c,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function C(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,C(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=p(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:d,configurable:!0}),d.displayName=f(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,f(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},P(j.prototype),f(j.prototype,u,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var c=new j(s(t,r,n,o),i);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},P(w),f(w,l,"Generator"),f(w,a,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=k,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.createDecoupledPromise=function(){var e,t,r,n=new i.CancelablePromise((function(n,o,i){e=n,t=o,r=i}));return Object.assign(Object.assign({resolve:e,reject:t},r),{promise:n})};var u=function e(t){if(t instanceof i.CancelablePromise)return t;if("function"==typeof t)return e(t());if(!f(t))return new i.CancelablePromise((function(e){return e(t)}));var r,n,o=new i.CancelablePromise((function(e,o,i){r=e,n=o,t.then(r,n)}));return o.onCancel((function(e){n(e)})),o};t.toCancelablePromise=u;var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e.length)return null;var r,n=t.maxConcurrent,o=void 0===n?8:n,c=t.executeInOrder,l=void 0!==c&&c,f=t.beforeEachCallback,s=void 0===f?null:f,p=t.afterEachCallback,h=void 0===p?null:p,y=t.onQueueEmptyCallback,d=void 0===y?null:y,v=function(e){if(Array.isArray(e))return a(e)}(r=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),b=[];return new i.CancelablePromise((function(e,t,r){return function e(){if(v.length){var t=v.splice(0,o).map((function(e){var t="function"==typeof e?e():e;null==s||s();var n=u(t);return r.onCancel((function(){n.cancel()})),n.then((function(e){b.push(e),null==h||h(e)})),l?n.then((function(e){return e})):n}));return Promise.all(t).then((function(){return e()}))}}().then((function(){null==d||d(b),e(b)}))}))};t.groupAsCancelablePromise=l;var f=function(e){return Promise.resolve(e)===e};t.isPromise=f,t.allSettledCancelable=function(e){var t=[],r=e.map((function(e){var r=u(e);return t.push(r),(0,o.tryCatchPromise)((function(){return r})).then((function(e){return{error:e.error,result:e.result,promise:r}}))})),n=l(t);return new i.CancelablePromise((function(e,t,o){return i=void 0,a=void 0,u=void 0,l=c().mark((function t(){var i;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.onCancel(n.cancel),t.next=3,Promise.all(r);case 3:i=t.sent,e(i);case 5:case"end":return t.stop()}}),t)})),new(u||(u=Promise))((function(e,t){function r(e){try{o(l.next(e))}catch(e){t(e)}}function n(e){try{o(l.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(r,n)}o((l=l.apply(i,a||[])).next())}));var i,a,u,l}))}},522:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(399);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}));var o=r(716);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}))},991:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(522);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}));var o=r(335);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}))},335:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(969);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}))},969:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(948);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===n[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}}))}));var o=r(667);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&(e in t&&t[e]===o[e]||Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}}))}))},948:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tryCatchPromise=t.tryCatch=void 0;var n=r(522);t.tryCatch=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.defaultResult,n=void 0===r?null:r,o=t.exceptionHandlingType,i=void 0===o?"error":o;try{return{error:null,result:e()}}catch(e){return"ignore"!==i&&console[i](e),{error:e,result:n}}},t.tryCatchPromise=function(e,t){var r=t||{},o=r.defaultResult,i=void 0===o?null:o,c=r.exceptionHandlingType,a=void 0===c?"error":c,u=r.ignoreCancel,l=void 0===u||u,f=null,s=null,p=function(e){s=e,"ignore"!=a&&("canceled"===f.status&&l||console[a](s))};try{if(e instanceof n.CancelablePromise)return f=e,new Promise((function(e){f.then((function(e){return{error:null,result:e,promise:f}})).catch((function(e){return p(e),{error:e,result:i,promise:f}}))}));var h=e(),y=h instanceof n.CancelablePromise;return f=y?h:(0,n.toCancelablePromise)(h),new Promise((function(e){f.then((function(t){e({error:null,result:t,promise:f})})).catch((function(t){p(t),e({error:t,result:i,promise:f})}))}))}catch(e){return p(e),Promise.resolve({error:s,result:i,promise:f})}}},667:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})}},t={};return function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(991)})()));

//# sourceURL=webpack://easy-web-worker/./node_modules/cancelable-promise-jq/lib/bundle.js?`);
          },
        },
        __webpack_module_cache__ = {};
      function __webpack_require__(e) {
        var o = __webpack_module_cache__[e];
        if (o !== void 0) return o.exports;
        var a = (__webpack_module_cache__[e] = { exports: {} });
        return (
          __webpack_modules__[e].call(
            a.exports,
            a,
            a.exports,
            __webpack_require__
          ),
          a.exports
        );
      }
      var __webpack_exports__ = __webpack_require__('./src/index.ts');
      return __webpack_exports__;
    })()
  );
})(bundle);
var bundleExports = bundle.exports;
const workerScript$1 = 'ImagesExample.worker-008a330c.js',
  easyWebWorker$1 = (() => new bundleExports.EasyWebWorker(workerScript$1))(),
  ImagesExample = ({ className: e, ...o }) => {
    var Pt, kt;
    const a = reactExports.useRef(null),
      [c, d] = reactExports.useState(null),
      [g, j] = reactExports.useState(null),
      [$, rt] = reactExports.useState(25),
      [dt, jt] = reactExports.useState(!1),
      bt = async (gt) => {
        if (dt) return;
        jt(!0);
        const mt = await easyWebWorker$1.sendToMethod('resize', {
            file: gt,
            scalePercentage: $,
          }),
          it = new FileReader();
        (it.onload = function (et) {
          const b = et.target.result;
          (a.current.src = b),
            (a.current.onload = () => {
              URL.revokeObjectURL(a.current.src);
            }),
            j(gt),
            jt(!1);
        }),
          it.readAsDataURL(mt);
      },
      vt = (gt) => {
        var et;
        d(null),
          ((et = gt.target.files) != null && et.length) || (a.current.src = '');
        const mt = gt.target.files[0];
        if (mt.size > 100 * 1024 * 1024) {
          alert(
            'Image size is too big, please select an image smaller than 100mb'
          );
          return;
        }
        d(mt);
        const it = new FileReader();
        (it.onload = function (b) {
          a.current.src = b.target.result;
        }),
          it.readAsDataURL(mt),
          bt(mt);
      };
    return (
      reactExports.useEffect(() => {
        isNaN($) || !c || bt(c);
      }, [$]),
      jsxRuntimeExports.jsxs('div', {
        className: `${e}`,
        ...o,
        children: [
          jsxRuntimeExports.jsxs('h3', {
            className: 'font-bold text-gray-500 border-b border-gray-200 pb-2',
            children: [
              'Lets play with images and',
              ' ',
              jsxRuntimeExports.jsx('strong', {
                className: 'text-black',
                children: 'EasyWebWorker',
              }),
            ],
          }),
          jsxRuntimeExports.jsx('div', {
            className: 'text-gray-600 text-justify pt-3',
            children: 'Please add the image you want to resize:',
          }),
          jsxRuntimeExports.jsx('div', {
            className:
              'text-diff-example-inputs-grid mt-3 grid grid-cols-1 gap-3',
            children: jsxRuntimeExports.jsxs('div', {
              className: 'md:grid lg:grid md:grid-cols-2 lg:grid-cols-2 gap-3',
              style: {
                gridTemplateColumns: 'auto 1fr',
                gridTemplateRows: 'auto',
              },
              children: [
                jsxRuntimeExports.jsxs('div', {
                  children: [
                    jsxRuntimeExports.jsx('label', {
                      className:
                        'block text-gray-600 border-b border-gray-200 pb-2 text-sm font-semibold',
                      htmlFor: 'scalePercentage',
                      children: 'Scale Percentage',
                    }),
                    jsxRuntimeExports.jsxs('div', {
                      className:
                        'flex items-center gap-2 border border-gray-300 p-1 my-3 pl-2',
                      children: [
                        jsxRuntimeExports.jsx('input', {
                          className: 'rounded-sm h-8 w-36  ',
                          type: 'number',
                          name: 'scalePercentage',
                          value: $,
                          min: 1,
                          max: 150,
                          onChange: (gt) => {
                            const mt = parseInt(gt.target.value);
                            isNaN(mt) || mt < 1 || mt > 150 || rt(mt);
                          },
                        }),
                        jsxRuntimeExports.jsx(Button, {
                          className:
                            'bg-gray-700 text-white px-4 py-1 rounded-sm',
                          onClick: () => {
                            rt((gt) => {
                              const mt = gt + 1;
                              return mt > 150 ? gt : mt;
                            });
                          },
                          children: '+',
                        }),
                        jsxRuntimeExports.jsx(Button, {
                          className:
                            'bg-gray-700 text-white px-4 py-1 rounded-sm',
                          onClick: () => {
                            rt((gt) => {
                              const mt = gt - 1;
                              return mt < 1 ? gt : mt;
                            });
                          },
                          children: '-',
                        }),
                        dt &&
                          jsxRuntimeExports.jsx('span', {
                            className: 'text-gray-500 text-sm',
                            children: 'Resizing...',
                          }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs('div', {
                      className: 'relative border border-gray-300 p-1',
                      children: [
                        jsxRuntimeExports.jsx('input', {
                          type: 'file',
                          className: 'absolute w-0 h-0 opacity-0',
                          id: 'fileUpload',
                          name: 'fileUpload',
                          onChange: vt,
                        }),
                        jsxRuntimeExports.jsx('label', {
                          htmlFor: 'fileUpload',
                          className:
                            'cursor-pointer inline-block bg-gray-700 text-white py-1 px-4 rounded hover:bg-rose-500 transition-all duration-300',
                          children: g ? 'Change Image' : 'Upload Image',
                        }),
                        jsxRuntimeExports.jsx('span', {
                          className: 'ml-6 text-gray-500',
                          children: g ? g.name : '',
                        }),
                      ],
                    }),
                    jsxRuntimeExports.jsxs('p', {
                      className:
                        'flex flex-col gap-1 text-sm text-gray-500 mt-3',
                      children: [
                        jsxRuntimeExports.jsxs('span', {
                          children: [
                            jsxRuntimeExports.jsx('strong', {
                              className: 'text-sm',
                              children: 'Type:',
                            }),
                            ' ',
                            g == null ? void 0 : g.type,
                          ],
                        }),
                        jsxRuntimeExports.jsx('span', {
                          children: jsxRuntimeExports.jsx('strong', {
                            className: 'text-sm',
                            children: 'Dimensions:',
                          }),
                        }),
                        jsxRuntimeExports.jsxs('span', {
                          children: [
                            'Height: ',
                            (Pt = a.current) == null ? void 0 : Pt.height,
                          ],
                        }),
                        jsxRuntimeExports.jsxs('span', {
                          children: [
                            'Width: ',
                            (kt = a.current) == null ? void 0 : kt.width,
                          ],
                        }),
                      ],
                    }),
                    !!g &&
                      jsxRuntimeExports.jsx(Button, {
                        className:
                          'bg-gray-700 text-white px-4 py-1 rounded-sm mt-3',
                        onClick: () => {
                          const gt = document.createElement('a');
                          (gt.href = a.current.src),
                            (gt.download = g.name),
                            gt.click(),
                            gt.remove();
                        },
                        children: 'Download',
                      }),
                  ],
                }),
                jsxRuntimeExports.jsx('div', {
                  className:
                    'mt-3 p-6 border-2 border-dashed bg-indigo-25 border-gray-300 flex justify-center',
                  children: jsxRuntimeExports.jsx('img', {
                    ref: a,
                    id: 'imageResult',
                    className: '',
                  }),
                }),
              ],
            }),
          }),
          jsxRuntimeExports.jsx('p', {
            className: 'text-gray-600 text-justify pt-3',
            children:
              "For resizing the image we are using an static EasyWebWorker instance, let's see the code:",
          }),
          jsxRuntimeExports.jsx('pre', {
            children: jsxRuntimeExports.jsx('code', {
              className: 'language-javascript',
              children: `  
  // Notice that all the heavy computation is done in the worker
  const scaledFile = await easyWebWorker.sendToMethod<
    File,
    ImageExamplePayload
  >("resize", {
    file,
    scalePercentage,
  });

  const reader = new FileReader();

  reader.onload = function (event) {
    imageRef.current.src = event.target.result;
  };

  reader.readAsDataURL(scaledFile);
`,
            }),
          }),
        ],
      })
    );
  },
  TextDiffExample$1 = '',
  workerScript = 'TextDiffExample.worker-520c12c7.js',
  easyWebWorker = (() => new bundleExports.EasyWebWorker(workerScript))(),
  TextDiffExample = ({ className: e, ...o }) => {
    const a = reactExports.useRef(null),
      [c, d] = reactExports.useState(''),
      g = reactExports.useCallback(async () => {
        const j = new FormData(a.current),
          [[, $], [, rt]] = Array.from(j.entries());
        if (!($ && rt)) {
          alert('Please fill the form');
          return;
        }
        const jt = await easyWebWorker.sendToMethod('compare', {
          input1: $.toString(),
          input2: rt.toString(),
        });
        d(jt);
      }, [a.current]);
    return jsxRuntimeExports.jsxs('div', {
      className: `${e} mt-3`,
      ...o,
      children: [
        jsxRuntimeExports.jsxs('h3', {
          className: 'font-bold text-gray-500 border-b border-gray-200 pb-2',
          children: [
            'Comparing text input with',
            ' ',
            jsxRuntimeExports.jsx('strong', {
              className: ' text-black',
              children: 'JSDifflib',
            }),
            ' and',
            ' ',
            jsxRuntimeExports.jsx('strong', {
              className: 'text-black',
              children: 'EasyWebWorker',
            }),
          ],
        }),
        jsxRuntimeExports.jsx('p', {
          className: 'text-gray-600 text-justify pt-3',
          children:
            'Please add to different inputs will analyze the differences between them and show the result.',
        }),
        jsxRuntimeExports.jsxs('form', {
          ref: a,
          children: [
            jsxRuntimeExports.jsxs('fieldset', {
              className:
                'text-diff-example-inputs-grid mt-3 grid grid-cols-2 gap-3',
              children: [
                jsxRuntimeExports.jsx('label', {
                  className:
                    'text-gray-600 border-b border-gray-200 pb-2 text-sm font-semibold',
                  htmlFor: 'input1',
                  children: 'Input 1',
                }),
                jsxRuntimeExports.jsx('label', {
                  className:
                    'text-gray-600 border-b border-gray-200 pb-2 text-sm font-semibold',
                  htmlFor: 'input2',
                  children: 'Input 2',
                }),
                jsxRuntimeExports.jsx('textarea', {
                  className:
                    'border border-gray-200 rounded-sm p-2 bg-indigo-25',
                  name: 'input1',
                  rows: 10,
                }),
                jsxRuntimeExports.jsx('textarea', {
                  className:
                    'border border-gray-200 rounded-sm p-2 bg-indigo-25',
                  name: 'input2',
                  rows: 10,
                }),
                jsxRuntimeExports.jsx('div', {
                  className: 'flex justify-end col-span-2',
                  children: jsxRuntimeExports.jsx(Button, {
                    className:
                      'bg-gray-700 text-white px-4 py-1 rounded-sm mt-3',
                    onClick: g,
                    children: 'Compare',
                  }),
                }),
              ],
            }),
            jsxRuntimeExports.jsx('div', {
              className:
                'text-diff-example-result mt-6 text-gray-600 text-justify border border-gray-200 p-3 bg-indigo-25',
              dangerouslySetInnerHTML: {
                __html:
                  c ||
                  '<span class="text-gray-400">awaiting for results...</span>',
              },
            }),
            jsxRuntimeExports.jsx('p', {
              className: 'text-gray-600 mt-3',
              children:
                'For this example we are using an Static Easy Web Worker.. Which is composed by separate file instead of the function template.',
            }),
            jsxRuntimeExports.jsx('p', {
              className: 'text-gray-600 mt-3',
              children:
                'Creating is also simple as with the function template, take a look at the code below:',
            }),
            jsxRuntimeExports.jsx('pre', {
              className: 'text-gray-600 mt-3',
              children: jsxRuntimeExports.jsx('code', {
                className: 'language-js',
                children: `// worker.ts Instead of using the function template, we just create a new instance of StaticEasyWebWorker into our worker file
const easyWorker = new StaticEasyWebWorker();

// by using th eapi of the static worker we can keep the same cancelable promise pattern into our worker API
easyWorker.onMessage<DiffLibExampleComparePayload, string>(
  "compare",
  (message) => {
    const { input1, input2 } = message.payload;

    const textDiff = new TextDiff();

    // HEAVY OPERATION
    const diff = textDiff.main(input1, input2);
    
    const diffDisplay = textDiff.prettyHtml(diff);

    message.resolve(diffDisplay);
  }
);
`,
              }),
            }),
            jsxRuntimeExports.jsx('p', {
              className: 'text-gray-600 mt-3',
              children: 'Consuming our worker then is a very easy task:',
            }),
            jsxRuntimeExports.jsx('pre', {
              className: 'text-gray-600 mt-3',
              children: jsxRuntimeExports.jsx('code', {
                className: 'language-js',
                children: `const result = await easyWebWorker.sendToMethod<
      string, //Result type
      { input1: string; input2: string } // Payload type
>("compare", {
      input1,
      input2,
});
      
setResult(result);`,
              }),
            }),
          ],
        }),
      ],
    });
  },
  ProgressBarExample = ({ className: e, ...o }) => {
    const a = reactExports.useRef(null),
      [c, d] = reactExports.useState(!1),
      [g, j] = reactExports.useState(!1),
      [$, rt] = reactExports.useState(!1),
      dt = reactExports.useRef(null);
    reactExports.useEffect(
      () => (
        (dt.current = new bundleExports.EasyWebWorker((vt) => {
          let Pt,
            kt = 0;
          const gt = { isRunning: !1, shouldDisplayLogs: !1 };
          vt.onMessage('start', (mt) => {
            Pt = setInterval(() => {
              (kt = kt >= 100 ? 0 : kt + 0.4),
                gt.shouldDisplayLogs &&
                  console.log(`progress inside worker: ${kt}%`),
                mt.reportProgress(kt);
            }, 10);
          }),
            vt.onMessage('updateState', (mt) => {
              const {
                payload: { shouldDisplayLogs: it },
              } = mt;
              Object.assign(gt, { shouldDisplayLogs: it }), mt.resolve();
            }),
            vt.onMessage('pause', (mt) => {
              clearInterval(Pt), mt.resolve();
            });
        })),
        () => {
          var vt;
          (vt = dt.current) == null || vt.dispose();
        }
      ),
      []
    );
    const jt = () => {
        if ((d(!c), rt(!0), c)) {
          dt.current.sendToMethod('pause');
          return;
        }
        dt.current
          .sendToMethod('start')
          .onProgress((vt) => {
            a.current.style.width = `${vt}%`;
          })
          .finally(() => {
            console.log('worker finished');
          })
          .catch((vt) => {
            console.log(vt);
          });
      },
      bt = () => {
        j(!g),
          dt.current.sendToMethod('updateState', { shouldDisplayLogs: !g });
      };
    return jsxRuntimeExports.jsxs('div', {
      className: `${e} flex flex-col gap-6`,
      ...o,
      children: [
        jsxRuntimeExports.jsx('h3', {
          className: 'font-bold text-gray-600 border-b border-gray-200 pb-2',
          children: 'Reporting progress from a web worker',
        }),
        jsxRuntimeExports.jsx('p', {
          className: 'text-gray-600  ',
          children:
            'There are several operations that can be very expensive in terms of CPU and memory, like sorting a large array, or doing a heavy calculation. These operations can block the main thread and make the UI unresponsive.',
        }),
        jsxRuntimeExports.jsxs('p', {
          className: 'text-gray-600  ',
          children: [
            'Web Workers are a great way to fix this problem, but by default, the',
            ' ',
            jsxRuntimeExports.jsx('strong', { children: 'WebWorker' }),
            " API doesn't provide a way to report progress from the worker to the main thread.",
          ],
        }),
        jsxRuntimeExports.jsx('strong', {
          className: 'block text-gray-600',
          children:
            'So what about if we can implement cancelable promises pattern with web workers along with an intuitive way to report progress to the main thread?',
        }),
        jsxRuntimeExports.jsx('div', {
          className:
            'h-12 border-2 border-gray-500 bg-stone-100 rounded-sm overflow-hidden',
          children: jsxRuntimeExports.jsx('div', {
            ref: a,
            className: 'h-full bg-gradient-to-r from-indigo-100 to-indigo-300',
            style: { width: '10%' },
          }),
        }),
        $ &&
          jsxRuntimeExports.jsx('p', {
            className: 'text-gray-600   animate-fade-in',
            children:
              'The progress bar above is updated by a Web Worker running in the background. Click the button below again to toggle between start and pause.',
          }),
        jsxRuntimeExports.jsxs('div', {
          className: 'flex flex-row gap-2',
          children: [
            jsxRuntimeExports.jsx(Button, {
              className:
                'w-24 bg-gray-700 text-white px-4 py-1 rounded-sm mt-3',
              onClick: jt,
              children: c ? 'Pause' : 'Start',
            }),
            c &&
              jsxRuntimeExports.jsx(Button, {
                className:
                  'w-46 bg-indigo-400 text-white px-4 py-1 rounded-sm mt-3 animate-fade-in hover:bg-indigo-500 transition-colors duration-300',
                onClick: bt,
                children: g ? 'Remove console logs' : 'Show console logs',
              }),
          ],
        }),
        $ &&
          jsxRuntimeExports.jsxs('p', {
            className: 'text-gray-600   animate-fade-in',
            children: [
              'You can see the code for this example',
              ' ',
              jsxRuntimeExports.jsx('a', {
                href: 'https://github.com/johnny-quesada-developer/easy-web-workers-example/tree/main/src/Dashboard/examples',
                target: '_blank',
                className: 'text-gray-600',
                children: 'here',
              }),
              '.',
            ],
          }),
        jsxRuntimeExports.jsxs('div', {
          children: [
            jsxRuntimeExports.jsxs('h3', {
              className:
                'font-bold text-gray-600 border-b border-gray-200 mb-3 py-3',
              children: [
                'How can you achieve this with ',
                jsxRuntimeExports.jsx('strong', { children: 'EasyWebWorker' }),
                '?',
              ],
            }),
            jsxRuntimeExports.jsxs('p', {
              className: 'text-gray-600  my-3',
              children: [
                jsxRuntimeExports.jsx('strong', { children: 'EasyWebWorker' }),
                " implements a cancellable promise pattern, which also allows you to subscribe to an onProgress callback. This makes it super easy to read and intuitive. Just like any other promise, it's extensible.",
              ],
            }),
            jsxRuntimeExports.jsx('pre', {
              children: jsxRuntimeExports.jsx('code', {
                className: 'language-javascript block overflow-scroll',
                children: `// Starts the worker
worker
  .sendToMethod("start")
  .onProgress((progress) => {
    progressBarRef.current.style.width = \`\${progress}%\`;
  })
  .finally(() => {
    console.log("worker finished");
  })
  .catch((error) => {
    console.log(error);
  });


// Pauses the worker
worker
  .sendToMethod("pause");
`,
              }),
            }),
            jsxRuntimeExports.jsx('p', {
              className: 'text-gray-600  my-3',
              children:
                'Just like that, you can run any heavy operation in the background without blocking the main thread.',
            }),
            jsxRuntimeExports.jsx('h3', {
              className:
                'font-bold text-gray-600 border-b border-gray-200 mb-3 py-3',
              children: 'But how to create WebWorker?',
            }),
            jsxRuntimeExports.jsx('p', {
              className: 'text-gray-600  my-3',
              children:
                "For creating this simple worker, we don't need to create an external file, we can just use a function as a worker template. See the code below:",
            }),
            jsxRuntimeExports.jsx('pre', {
              children: jsxRuntimeExports.jsx('code', {
                className: 'language-javascript block overflow-scroll',
                children: `const worker = new EasyWebWorker<ProgressBarExamplePayload>(
  (easyWorker) => {
    let intervalId: NodeJS.Timeout;
    let count = 0;

    easyWorker.onMessage("start", (message) => {
      intervalId = setInterval(() => {
        count = count >= 100 ? 0 : count + 0.4;

        message.reportProgress(count);
      }, 10);
    });

    easyWorker.onMessage("pause", (message) => {
      clearInterval(intervalId);

      message.resolve();
    });
  }
);`,
              }),
            }),
            jsxRuntimeExports.jsx('p', {
              className: 'text-gray-600  my-3',
              children:
                'You can create APIs inside your web worker like in the previous example, or more simple single callback workers like this one:',
            }),
            jsxRuntimeExports.jsx('pre', {
              children: jsxRuntimeExports.jsx('code', {
                className: 'language-javascript block overflow-scroll',
                children: `const worker = new EasyWebWorker<ProgressBarExamplePayload>(
  (easyWorker) => {
    
    easyWorker.onMessage((message) => {
      const { payload } = message;

      // do something...

      message.resolve();
    });
  }
);`,
              }),
            }),
          ],
        }),
      ],
    });
  },
  fibonacci = (e) => (e <= 1 ? e : fibonacci(e - 1) + fibonacci(e - 2)),
  ParallelExample = ({ className: e, ...o }) => {
    const [c, d] = reactExports.useState(!1),
      [g, j] = reactExports.useState('tap1'),
      $ = reactExports.useRef(null),
      rt = reactExports.useRef(null),
      dt = reactExports.useRef(null);
    reactExports.useEffect(
      () => (
        (rt.current = bundleExports.createEasyWebWorker(
          (Pt, kt) => {
            const [gt] = kt.primitiveParameters,
              mt = (it) => (it <= 1 ? it : mt(it - 1) + mt(it - 2));
            Pt.onMessage((it) => {
              const et = mt(gt);
              it.resolve(et);
            });
          },
          { primitiveParameters: [42], maxWorkers: 4 }
        )),
        () => {
          var Pt;
          (Pt = rt.current) == null || Pt.dispose();
        }
      ),
      []
    ),
      reactExports.useEffect(() => {
        if (!c) return;
        const Pt = setInterval(() => {
          if (!c) return;
          let kt = (parseInt($.current.style.width) ?? 0) + 1;
          (kt = kt >= 100 ? 0 : kt), ($.current.style.width = `${kt}%`);
        }, 10);
        return () => {
          clearInterval(Pt);
        };
      }, [c]);
    const jt = () => {
        dt.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      },
      bt = () => {
        d(!0),
          (dt.current.innerHTML =
            'current computation time: <strong>0 seconds</strong>'),
          jt(),
          setTimeout(() => {
            const Pt = Date.now(),
              kt = fibonacci(42);
            d(!1), j('tap2');
            const gt = (Date.now() - Pt) / 1e3;
            dt.current.innerHTML = `current computation time: <strong class="text-red-500">${gt} seconds</strong>, <strong class="text-purple-500">result: ${kt}</strong>`;
          }, 0);
      },
      vt = async () => {
        d(!0), jt();
        const Pt = Date.now();
        let kt = 0;
        const gt = setInterval(() => {
            (kt = (Date.now() - Pt) / 1e3),
              (dt.current.innerHTML = `current computation time: <strong  class="text-red-500">${kt} seconds</strong>`);
          }, 100),
          mt = [rt.current.send(), rt.current.send(), rt.current.send()],
          [it] = await Promise.all(mt);
        (dt.current.innerHTML = `current computation time: <strong  class="text-red-500">${kt} seconds</strong>, <strong class="text-purple-500">result: ${it}</strong>`),
          clearInterval(gt),
          d(!1),
          j('tap3');
      };
    return (
      themeState.highlight(),
      jsxRuntimeExports.jsxs('div', {
        className: `${e} flex flex-col gap-6`,
        ...o,
        children: [
          jsxRuntimeExports.jsx('h3', {
            className: 'font-bold text-gray-600 border-b border-gray-200 pb-2',
            children: 'Did you know that javascript is single-threaded?',
          }),
          jsxRuntimeExports.jsx('p', {
            className: 'text-gray-600  ',
            children:
              'Single-threaded means that only one task can be executed at a time. If a task is running, any other tasks will have to wait until the first. This can cause problems when a task is computationally expensive, like sorting a large array or rendering a large list.',
          }),
          jsxRuntimeExports.jsx('h3', {
            className: 'font-bold text-gray-600 ',
            children:
              'But, what if you could run multiple tasks at the same time?',
          }),
          jsxRuntimeExports.jsxs('p', {
            className: 'text-gray-600  ',
            children: [
              'With ',
              jsxRuntimeExports.jsx('strong', { children: 'EasyWebWorker' }),
              ' you can create multiple workers instances from a single worker file or template.',
            ],
          }),
          jsxRuntimeExports.jsx('h3', {
            className: 'font-bold text-gray-600 border-b border-gray-200 ',
            children: "Let's see an example:",
          }),
          jsxRuntimeExports.jsxs('p', {
            ref: dt,
            className: 'text-gray-600  ',
            children: [
              'current computation time: ',
              jsxRuntimeExports.jsx('strong', { children: '0' }),
              ' seconds',
            ],
          }),
          jsxRuntimeExports.jsxs('div', {
            className: c ? '' : 'hidden',
            children: [
              jsxRuntimeExports.jsx('p', {
                className: 'text-gray-600  ',
                children: jsxRuntimeExports.jsx('strong', {
                  children: 'Running...',
                }),
              }),
              jsxRuntimeExports.jsx('div', {
                className:
                  'h-2 border-2 border-gray-500 bg-stone-100 rounded-sm overflow-hidden animate-fade-in',
                children: jsxRuntimeExports.jsx('div', {
                  ref: $,
                  className:
                    'h-full bg-gradient-to-r from-indigo-100 to-indigo-300',
                  style: { width: '10%' },
                }),
              }),
            ],
          }),
          g === 'tap1' &&
            !c &&
            jsxRuntimeExports.jsxs('div', {
              className: 'flex flex-col gap-2',
              children: [
                jsxRuntimeExports.jsxs('p', {
                  className: 'text-gray-600  ',
                  children: [
                    "Let's calculate the fibonacci number of",
                    ' ',
                    jsxRuntimeExports.jsx('strong', { children: 42 }),
                    ' in the main thread an review the time that it takes for calculating. Click the button below to start the calculation.',
                  ],
                }),
                jsxRuntimeExports.jsx('p', {
                  className: 'text-gray-600  ',
                  children:
                    "This will block the main thread a couple of seconds, you'll also notice that the main menu will be unresponsive. This is because the main thread is gonna be busy. Please be patient and wait for the result.",
                }),
                jsxRuntimeExports.jsx(Button, {
                  className: 'w-24 bg-gray-700 text-white px-4 py-1 rounded-sm',
                  onClick: bt,
                  children: 'Run',
                }),
                jsxRuntimeExports.jsx('pre', {
                  className: 'bg-stone-100 rounded-sm p-3 animate-fade-in',
                  children: jsxRuntimeExports.jsx('code', {
                    className: 'language-javascript block overflow-scroll',
                    children: `const fibonacci = (n: number) => {
  if (n <= 1) return n;

  return fibonacci(n - 1) + fibonacci(n - 2);
}`,
                  }),
                }),
              ],
            }),
          g === 'tap1' &&
            c &&
            jsxRuntimeExports.jsx('div', {
              className: 'flex flex-row gap-2 w-full',
              children: jsxRuntimeExports.jsx('p', {
                className: 'text-gray-600  ',
                children:
                  'Now you can expect an delay and some unresponsiveness in the main thread. You could notice for example that the main is unresponsive, freeze or laggy.',
              }),
            }),
          g === 'tap2' &&
            !c &&
            jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [
                jsxRuntimeExports.jsxs('p', {
                  className: 'text-gray-600  ',
                  children: [
                    jsxRuntimeExports.jsx('strong', {
                      children: 'Finished Great!',
                    }),
                    " It took a little bit, and the progreess bar wasn't even able to move cause the main thread was busy.",
                  ],
                }),
                jsxRuntimeExports.jsxs('p', {
                  className: 'text-gray-600  ',
                  children: [
                    "Now, let's perform the same calculation in a separate thread using a web worker.",
                    ' ',
                    jsxRuntimeExports.jsxs('strong', {
                      className: ' text-purple-500',
                      children: [
                        "And! let's make the calculation 3 times intead of one!!",
                        ' ',
                        jsxRuntimeExports.jsx('span', {
                          className: 'text-2xl',
                          children: 'Lets Go!',
                        }),
                      ],
                    }),
                  ],
                }),
                jsxRuntimeExports.jsx('p', {
                  className: 'text-gray-600  ',
                  children:
                    'Take a look on the code below. Once you are ready, click the button for start the calculation.',
                }),
                jsxRuntimeExports.jsx('pre', {
                  className: 'bg-stone-100 rounded-sm p-3 animate-fade-in',
                  children: jsxRuntimeExports.jsx('code', {
                    className: 'language-javascript block overflow-scroll',
                    children: `useEffect(() => {
    workerRef.current = createEasyWebWorker<null, number>(
      (easyWorker, context) => {
        const [fibonacciBase] = context.primitiveParameters;

        const fibonacci = (n: number) => {
          if (n <= 1) return n;

          return fibonacci(n - 1) + fibonacci(n - 2);
        };

        easyWorker.onMessage((message) => {
          const result = fibonacci(fibonacciBase);

          message.resolve(result);
        });
      },
      {
        primitiveParameters: [fibonacciBase],
        maxWorkers: 4,
      }
    );

    return () => {
      workerRef.current?.dispose();
    };
  }, [])`,
                  }),
                }),
                jsxRuntimeExports.jsxs('div', {
                  className: 'flex gap-2 items-center',
                  children: [
                    jsxRuntimeExports.jsx(Button, {
                      className:
                        ' w-40 bg-gray-700 text-white px-4 py-1 rounded-sm',
                      onClick: vt,
                      children: 'Run In Worker',
                    }),
                    "Let's see how much time it takes to calculate the fibonacci number 3 times in a separate thread.",
                  ],
                }),
              ],
            }),
          g === 'tap2' &&
            c &&
            jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [
                jsxRuntimeExports.jsx('p', {
                  className: 'text-gray-600  ',
                  children:
                    "Do you see the progress bar moving? That's because the calculation is being performed in a separate thread.",
                }),
                jsxRuntimeExports.jsx('p', {
                  className: 'text-gray-600  ',
                  children:
                    'Now the menu is responsive, and there is no any kind of unresponsiveness.',
                }),
              ],
            }),
          g === 'tap3' &&
            jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
              children: [
                jsxRuntimeExports.jsxs('p', {
                  className: 'text-gray-600  ',
                  children: [
                    jsxRuntimeExports.jsx('strong', {
                      children: 'Finished Great!',
                    }),
                    ' It took a little bit, but we compute the fibonacci number 3 times in parallel! With no extra delay or unresponsiveness in the main thread.',
                  ],
                }),
                jsxRuntimeExports.jsx('p', {
                  className: 'text-gray-600  ',
                  children: jsxRuntimeExports.jsx('strong', {
                    children:
                      'Lets see how the code was looking in the main thread:',
                  }),
                }),
                jsxRuntimeExports.jsx('pre', {
                  className: 'bg-stone-100 rounded-sm p-3 animate-fade-in',
                  children: jsxRuntimeExports.jsx('code', {
                    className: 'language-javascript block overflow-scroll',
                    children: `setIsRunning(true);

const time = Date.now();

const intervalId = setInterval(() => {
  // update the progress bar
}, 100);

/**
 * Promises for a web worker? That's so cool!
 * as you see we are sending 3 messages, and since our easy web worker is configured to use 4 workers, 
 * the 3 messages will be processed in parallel.
*/
const promises = [
  workerRef.current.send(),
  workerRef.current.send(),
  workerRef.current.send(),
];

const [result] = await Promise.all(promises);

clearInterval(intervalId);

setIsRunning(false);`,
                  }),
                }),
                jsxRuntimeExports.jsxs('p', {
                  className: 'text-gray-600  ',
                  children: [
                    'Just like that easy web worker created 3 separate workers, 3 separate threads! and executed the calculation in parallel without blocking the main thread... ',
                    jsxRuntimeExports.jsx('strong', { children: 'Easy!' }),
                  ],
                }),
                jsxRuntimeExports.jsx('p', {
                  className: 'text-gray-600  ',
                  children:
                    'And with cancelable promises!! which also allows to report progress from inside the worker to the main thread!! (take a look at the other examples or hit the button start again)',
                }),
                jsxRuntimeExports.jsx(Button, {
                  className:
                    ' w-40 bg-gray-700 text-white px-4 py-1 rounded-sm',
                  onClick: () => {
                    j('tap2');
                  },
                  children: 'Start Again',
                }),
                jsxRuntimeExports.jsx('p', {
                  className: 'text-gray-600  ',
                  children:
                    'You can also review the developer tools and see the workers in the Sources tab.',
                }),
                jsxRuntimeExports.jsx('p', {
                  className: 'text-gray-600  ',
                  children:
                    'In this specific example since we are concurrent workers each message will create a new worker until the maxWorkers limit is reached. Once the limit is reached, the messages will be queued; and once all the messages are processed, the workers will be disposed to free up resources.',
                }),
                jsxRuntimeExports.jsx('p', {
                  className: 'text-gray-600  ',
                  children:
                    'By default easy web worker is configured to use 1 worker at the time, this worker is created once a new instance of easy web worker is created, and it keeps alive unless the instance is disposed programatically. When using concurrent workers this are created on demand until the maxWorkers limit is reached.',
                }),
                jsxRuntimeExports.jsxs('p', {
                  className: 'text-gray-600  ',
                  children: [
                    'You can modify this and other configurations by passing a second and optional parameter to the createEasyWebWorker function. please take a look in the documentation',
                    jsxRuntimeExports.jsxs('a', {
                      href: 'https://www.npmjs.com/package/easy-web-worker',
                      target: '_blank',
                      className: 'text-blue-500 hover:underline',
                      children: [' ', 'here'],
                    }),
                  ],
                }),
              ],
            }),
        ],
      })
    );
  },
  CurrentExample = React.memo(() => {
    const [{ name: e }] = useSelectedExample();
    return jsxRuntimeExports.jsxs('div', {
      children: [
        jsxRuntimeExports.jsx(ImagesExample, {
          className: `${e === 'images' ? '' : 'hidden'} animate-fade-in`,
        }),
        jsxRuntimeExports.jsx(ParallelExample, {
          className: `${e === 'parallel' ? '' : 'hidden'} animate-fade-in`,
        }),
        jsxRuntimeExports.jsx(TextDiffExample, {
          className: `${e === 'text-diff' ? '' : 'hidden'}  animate-fade-in`,
        }),
        jsxRuntimeExports.jsx(ProgressBarExample, {
          className: `${e === 'progress-bar' ? '' : 'hidden'}  animate-fade-in`,
        }),
      ],
    });
  });
function FaLightbulb(e) {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 352 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z',
        },
      },
    ],
  })(e);
}
function FaRegLightbulb(e) {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 352 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z',
        },
      },
    ],
  })(e);
}
const ThemeButton = (e) => {
  const [o, a] = useTheme();
  return jsxRuntimeExports.jsx('button', {
    title: 'Toggle theme',
    ...e,
    onClick: a.toggle,
    className: [
      'bg-blue-500 hover:bg-blue-700',
      'text-white',
      'font-bold',
      'px-4 py-2',
      'w-10',
      'flex items-center justify-center',
      'rounded-full',
      e.className,
    ].join(' '),
    children: jsxRuntimeExports.jsx('span', {
      children:
        o === 'prism-tomorrow'
          ? jsxRuntimeExports.jsx(FaLightbulb, {
              className: ' animate-fadeIn',
              fontSize: 20,
            })
          : jsxRuntimeExports.jsx(FaRegLightbulb, {
              className: ' animate-fadeIn',
              fontSize: 20,
            }),
    }),
  });
};
function GiHamburgerMenu(e) {
  return GenIcon({
    tag: 'svg',
    attr: { viewBox: '0 0 512 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z',
        },
      },
    ],
  })(e);
}
const Header = ({ className: e, ...o }) => {
    const [a, c] = useMenuState(({ isMenuOpen: d }) => d);
    return jsxRuntimeExports.jsxs('header', {
      ...o,
      className: `${e} h-14 bg-gray-700 flex items-center justify-start px-6 gap-3`,
      children: [
        jsxRuntimeExports.jsx('button', {
          title: 'Close menu',
          className: `${a ? 'animate-fade-in' : 'hidden'} cursor-pointer`,
          onClick: c.close,
          children: jsxRuntimeExports.jsx(IoIosArrowBack, { color: 'white' }),
        }),
        jsxRuntimeExports.jsx('button', {
          title: 'Open menu',
          className: `${a ? 'hidden' : 'animate-fade-in'} cursor-pointer`,
          onClick: c.open,
          children: jsxRuntimeExports.jsx(GiHamburgerMenu, { color: 'white' }),
        }),
        jsxRuntimeExports.jsxs('h1', {
          className: 'text-white font-bold',
          children: [
            'Welcome to the',
            ' ',
            jsxRuntimeExports.jsx('strong', {
              className: ' font-extrabold',
              children: 'EasyWebWorker',
            }),
            '!',
          ],
        }),
      ],
    });
  },
  ProgressBarExampleSummary = ({ className: e, ...o }) => {
    const a = 'progress-bar',
      [c, d] = useSelectedExample((j) => j.name === a),
      g = reactExports.useRef(null);
    return jsxRuntimeExports.jsxs(Collapsible, {
      ref: g,
      title: 'Report progress',
      isOpen: c,
      children: [
        jsxRuntimeExports.jsxs('article', {
          className: `${e} mt-3`,
          ...o,
          children: [
            jsxRuntimeExports.jsxs('p', {
              className: 'text-gray-600 text-justify',
              children: [
                'With ',
                jsxRuntimeExports.jsx('strong', { children: 'EasyWebWorker' }),
                ', you can move computationally expensive tasks and logic off the main thread and into a separate thread, improving the performance and responsiveness of your application. The library has',
              ],
            }),
            jsxRuntimeExports.jsx('br', {}),
            jsxRuntimeExports.jsx('p', {
              className: 'text-gray-600 text-justify',
              children:
                "Let's see how simple is to report progress from a worker to the main thread.",
            }),
          ],
        }),
        jsxRuntimeExports.jsx('div', {
          className: 'flex justify-end',
          children: jsxRuntimeExports.jsx(Button, {
            className: `${
              c ? 'bg-stone-400' : 'bg-gray-700'
            } text-white px-4 py-1 rounded-sm mt-3 w-24`,
            onClick: () => d.setCurrent(a),
            children: c ? 'Selected' : 'Select',
          }),
        }),
      ],
    });
  },
  DiffLibExampleSummary = () => {
    const e = 'text-diff',
      [o, a] = useSelectedExample((c) => c.name === e);
    return jsxRuntimeExports.jsxs(Collapsible, {
      title: 'Compare text',
      isOpen: o,
      children: [
        jsxRuntimeExports.jsx('p', {
          className: 'text-gray-600 text-justify mt-3',
          children:
            'difflib is a library for comparing sequences. It can be used for example, for comparing files, and can produce human-readable differences or can be used to compare arbitrary sequences of lines of text.',
        }),
        jsxRuntimeExports.jsxs('p', {
          className: 'text-gray-600 text-justify mt-3',
          children: [
            "Let's see how we can implement it by using",
            ' ',
            jsxRuntimeExports.jsx('strong', { children: 'EasyWebWorker' }),
            '.',
          ],
        }),
        jsxRuntimeExports.jsx('div', {
          className: 'flex justify-end',
          children: jsxRuntimeExports.jsx(Button, {
            className: `${
              o ? 'bg-stone-400' : 'bg-gray-700'
            } text-white px-4 py-1 rounded-sm mt-3  w-24`,
            onClick: () => a.setCurrent(e),
            children: o ? 'Selected' : 'Select',
          }),
        }),
      ],
    });
  },
  ImagesExampleSummary = () => {
    const e = 'images',
      [o, a] = useSelectedExample((c) => c.name === e);
    return jsxRuntimeExports.jsxs(Collapsible, {
      title: 'Resize Images',
      isOpen: o,
      children: [
        jsxRuntimeExports.jsx('div', {
          className: 'text-left text-gray-600 ',
          children: jsxRuntimeExports.jsxs('ul', {
            className: 'list-none',
            children: [
              jsxRuntimeExports.jsxs('li', {
                className: 'my-2',
                children: [
                  jsxRuntimeExports.jsx('strong', {
                    children: 'Improved Performance:',
                  }),
                  ' Utilizing Web Workers for image resizing offloads intensive computations from the main browser UI thread, ensuring smoother user interactions without UI blockages.',
                ],
              }),
              jsxRuntimeExports.jsxs('li', {
                className: 'mb-2',
                children: [
                  jsxRuntimeExports.jsx('strong', {
                    children: 'Responsiveness:',
                  }),
                  ' By performing image resizing in a Web Worker, the main thread stays free for UI interactions, keeping the application responsive even during heavy processing tasks.',
                ],
              }),
              jsxRuntimeExports.jsxs('li', {
                className: 'mb-2',
                children: [
                  jsxRuntimeExports.jsx('strong', {
                    children: 'Background Processing:',
                  }),
                  ' Web Workers operate independently, allowing image resizing to be processed in the background, so users can continue interacting with the application without interruption.',
                ],
              }),
              jsxRuntimeExports.jsxs('li', {
                className: 'mb-2',
                children: [
                  jsxRuntimeExports.jsx('strong', {
                    children: 'Resource Management:',
                  }),
                  ' Web Workers help in more efficient resource management, potentially reducing memory usage on the main thread by offloading heavy tasks.',
                ],
              }),
              jsxRuntimeExports.jsxs('li', {
                className: 'mb-2',
                children: [
                  jsxRuntimeExports.jsx('strong', { children: 'Scalability:' }),
                  ' Delegating tasks like image resizing to workers helps the application scale better, preventing performance bottlenecks on the main thread.',
                ],
              }),
            ],
          }),
        }),
        jsxRuntimeExports.jsx('div', {
          className: 'flex justify-end',
          children: jsxRuntimeExports.jsx(Button, {
            className: `${
              o ? 'bg-stone-400' : 'bg-gray-700'
            } text-white px-4 py-1 rounded-sm mt-3  w-24`,
            onClick: () => a.setCurrent(e),
            children: o ? 'Selected' : 'Select',
          }),
        }),
      ],
    });
  },
  ParallelExampleSummary = ({ className: e, ...o }) => {
    const a = 'parallel',
      [c, d] = useSelectedExample((j) => j.name === a),
      g = reactExports.useRef(null);
    return jsxRuntimeExports.jsxs(Collapsible, {
      ref: g,
      title: 'Parallel computation',
      isOpen: c,
      children: [
        jsxRuntimeExports.jsxs('article', {
          className: `${e} mt-3`,
          ...o,
          children: [
            jsxRuntimeExports.jsx('p', {
              className: 'text-gray-600 text-justify',
              children:
                'Create multiple workers to perform parallel computation never was so easy.',
            }),
            jsxRuntimeExports.jsx('br', {}),
            jsxRuntimeExports.jsxs('p', {
              className: 'text-gray-600 text-justify',
              children: [
                'With ',
                jsxRuntimeExports.jsx('strong', { children: 'EasyWebWorker' }),
                ' you can create multiple workers instances from a single worker file or template.',
              ],
            }),
            jsxRuntimeExports.jsx('br', {}),
            jsxRuntimeExports.jsxs('p', {
              className: 'text-gray-600 text-justify',
              children: [
                "Let's explore the potencial and advantages of",
                ' ',
                jsxRuntimeExports.jsx('strong', {
                  children: 'multythreading JavaScript',
                }),
                ' with',
                ' ',
                jsxRuntimeExports.jsx('strong', { children: 'EasyWebWorker' }),
                '.',
              ],
            }),
          ],
        }),
        jsxRuntimeExports.jsx('div', {
          className: 'flex justify-end',
          children: jsxRuntimeExports.jsx(Button, {
            className: `${
              c ? 'bg-stone-400' : 'bg-gray-700'
            } text-white px-4 py-1 rounded-sm mt-3 w-24`,
            onClick: () => d.setCurrent(a),
            children: c ? 'Selected' : 'Select',
          }),
        }),
      ],
    });
  },
  onMenuStateChange = ({ asideRef: e }) =>
    getMenuState((a) => {
      a(
        (c) => {
          if (!c.isMenuOpen) {
            e.current.style.height = e.current.clientHeight + 'px';
            return;
          }
          setTimeout(() => {
            e.current.style.height = null;
          }, 300);
        },
        { skipFirst: !0 }
      );
    }),
  onMenuVisibilityChange = ({ asideRef: e }) => {
    const o = new IntersectionObserver(([a]) => {
      menuState.setVisibility(a.isIntersecting);
    });
    return (
      o.observe(e.current),
      () => {
        o.unobserve(e.current);
      }
    );
  },
  Menu = ({ className: e, style: o, ...a }) => {
    const [c] = useMenuState(({ isMenuOpen: j }) => j),
      d = reactExports.useRef(null);
    reactExports.useEffect(() => {
      const j = [
        onMenuStateChange({ asideRef: d }),
        onMenuVisibilityChange({ asideRef: d }),
      ];
      return () => {
        j.forEach(($) => $());
      };
    }, []);
    const g = reactExports.useMemo(
      () =>
        jsxRuntimeExports.jsx('ul', {
          className: 'flex flex-col gap-6',
          children: [
            {
              key: 'parallel',
              component: jsxRuntimeExports.jsx(ParallelExampleSummary, {}),
            },
            {
              key: 'progress-bar',
              component: jsxRuntimeExports.jsx(ProgressBarExampleSummary, {}),
            },
            {
              key: 'diff-lib',
              component: jsxRuntimeExports.jsx(DiffLibExampleSummary, {}),
            },
            {
              key: 'images',
              component: jsxRuntimeExports.jsx(ImagesExampleSummary, {}),
            },
          ].map(({ key: j, component: $ }) =>
            jsxRuntimeExports.jsx(
              Card,
              { children: jsxRuntimeExports.jsx('li', { children: $ }) },
              j
            )
          ),
        }),
      []
    );
    return jsxRuntimeExports.jsx('aside', {
      ref: d,
      ...a,
      style: { ...o },
      className: `
      ${e} 
      animation-fill-mode-forwards 
      w-full h-fit lg:w-96 mf:w-96      
      flex flex-col gap-6 
      ${
        c
          ? 'animate-expand-from-top mb-6 lg:mr-6 md:mr-6 md:animate-expand-from-left lg:animate-expand-from-left'
          : 'animate-collapse-to-top md:animate-collapse-to-left lg:animate-collapse-to-left'
      }`,
      children: g,
    });
  },
  Dashboard = () => (
    reactExports.useEffect(() => {
      const e = () => {
        if (window.innerWidth >= MIN_WITH_FOR_TWO_COLUMNS) {
          menuState.open();
          return;
        }
        menuState.close();
      };
      return (
        window.addEventListener('resize', e),
        themeState.highlight(),
        () => {
          window.removeEventListener('resize', e);
        }
      );
    }, []),
    jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [
        jsxRuntimeExports.jsx(Header, { className: 'fixed top-0 w-full z-10' }),
        jsxRuntimeExports.jsx(ThemeButton, {
          className: 'fixed top-16 right-6 z-20',
        }),
        jsxRuntimeExports.jsxs('div', {
          className:
            'mt-14 bg-stone-200 dark:bg-black font-serif leading-6 flex flex-col md:flex-row lg:flex-row p-6 max-w-full',
          children: [
            jsxRuntimeExports.jsx(Menu, { className: '' }),
            jsxRuntimeExports.jsx('main', {
              className: 'flex-1 max-w-full',
              children: jsxRuntimeExports.jsx(Card, {
                className: '',
                children: jsxRuntimeExports.jsx(CurrentExample, {}),
              }),
            }),
          ],
        }),
      ],
    })
  );
client
  .createRoot(document.getElementById('root'))
  .render(
    jsxRuntimeExports.jsx(React.StrictMode, {
      children: jsxRuntimeExports.jsx(Dashboard, {}),
    })
  );
