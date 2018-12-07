(function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: false,
            exports: {}
        };
        t[r].call(o.exports, o, o.exports, n);
        o.l = true;
        return o.exports
    }
    n.m = t;
    n.c = e;
    n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: true,
            get: r
        })
    };
    n.r = function (t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(t, "__esModule", {
            value: true
        })
    };
    n.t = function (t, e) {
        1 & e && (t = n(t));
        if (8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        n.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: t
        });
        if (2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function (e) {
                return t[e]
            }.bind(null, o));
        return r
    };
    n.n = function (t) {
        var e = t && t.__esModule ? function e() {
            return t["default"]
        } : function e() {
            return t
        };
        n.d(e, "a", e);
        return e
    };
    n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    };
    n.p = "static.squarespace.com/universal/scripts-compressed/";
    return n(n.s = 12361)
})({
    10: function (t, e, n) {
        "use strict";
        e.__esModule = true;
        var r = n(15);
        var o = i(r);

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        e.default = o.default || function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }
    },
    106: function (t, e) {
        var n = 0;
        var r = Math.random();
        t.exports = function (t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    },
    12361: function (t, e, n) {
        "use strict";
        var r = n(10);
        var o = u(r);
        var i = n(12836);
        var a = u(i);

        function u(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var c = window.Static && window.Static.SQUARESPACE_CONTEXT;
        var s = window.location && window.location.pathname || "";
        var f = 0 === s.indexOf("/config/");
        var p = c.version || 7;

        function v() {
            return {
                templateId: c.templateId || ""
            }
        }

        function d() {
            var t = c.website,
                e = void 0 === t ? {} : t;
            return {
                authenticUrl: e.authenticUrl || "",
                cloneable: e.cloneable || false,
                developerMode: e.developerMode || false,
                isHstsEnabled: e.isHstsEnabled || false,
                language: e.language || "",
                timeZone: e.timeZone || "",
                websiteId: e.id || "",
                websiteType: e.websiteType || -1
            }
        }

        function l() {
            var t = c.websiteSettings,
                e = void 0 === t ? {} : t;
            return {
                ampEnabled: e.ampEnabled || false
            }
        }

        function y() {
            var t = c.collection,
                e = void 0 === t ? {} : t;
            return {
                collectionType: e.type || -1
            }
        }
        if (c)
            if (f) {
                var h = c.betaFeatureFlags || [];
                var m = h.indexOf("yui_first") > -1;
                (0, a.default)({
                    appName: "v" + p + "-config",
                    context: (0, o.default)({}, v(), d(), l(), {
                        yuiFirst: m
                    })
                })
            } else if (window.Squarespace && "SECTION_CONTEXT" in window.Squarespace)(0, a.default)({
            appName: "v8-user-sites",
            context: (0, o.default)({
                websiteId: c.websiteId || ""
            }, v())
        });
        else {
            var w = c.impersonatedSession,
                g = void 0 !== w && w,
                b = c.pageType,
                _ = void 0 === b ? -1 : b;
            (0, a.default)({
                appName: "v7-user-sites",
                context: (0, o.default)({
                    impersonatedSession: g,
                    pageType: "number" === typeof _ ? _ : -1
                }, v(), d(), l(), y())
            })
        }
    },

    13: function (t, e) {
        var n = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = n)
    },
    130: function (t, e) {
        t.exports = function (t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    },
    134: function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    },
    136: function (t, e) {
        var n = Math.ceil;
        var r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    },
    138: function (t, e, n) {
        var r = n(140)("keys");
        var o = n(106);
        t.exports = function (t) {
            return r[t] || (r[t] = o(t))
        }
    },
    139: function (t, e) {
        e.f = Object.getOwnPropertySymbols
    },
    140: function (t, e, n) {
        var r = n(13);
        var o = n(21);
        var i = "__core-js_shared__";
        var a = o[i] || (o[i] = {});
        (t.exports = function (t, e) {
            return a[t] || (a[t] = void 0 !== e ? e : {})
        })("versions", []).push({
            version: r.version,
            mode: n(89) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    },
    141: function (t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    146: function (t, e, n) {
        var r = n(39);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, o;
            if (e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            if ("function" == typeof (n = t.valueOf) && !r(o = n.call(t))) return o;
            if (!e && "function" == typeof (n = t.toString) && !r(o = n.call(t))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    15: function (t, e, n) {
        t.exports = {
            default: n(377),
            __esModule: true
        }
    },
    152: function (t, e, n) {
        var r = n(136);
        var o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0
        }
    },
    156: function (t, e, n) {
        var r = n(39);
        var o = n(21).document;
        var i = r(o) && r(o.createElement);
        t.exports = function (t) {
            return i ? o.createElement(t) : {}
        }
    },
    19: function (t, e, n) {
        var r = n(21);
        var o = n(13);
        var i = n(78);
        var a = n(53);
        var u = n(51);
        var c = "prototype";
        var s = function (t, e, n) {
            var f = t & s.F;
            var p = t & s.G;
            var v = t & s.S;
            var d = t & s.P;
            var l = t & s.B;
            var y = t & s.W;
            var h = p ? o : o[e] || (o[e] = {});
            var m = h[c];
            var w = p ? r : v ? r[e] : (r[e] || {})[c];
            var g, b, _;
            p && (n = e);
            for (g in n) {
                b = !f && w && void 0 !== w[g];
                if (b && u(h, g)) continue;
                _ = b ? w[g] : n[g];
                h[g] = p && "function" != typeof w[g] ? n[g] : l && b ? i(_, r) : y && w[g] == _ ? function (t) {
                    var e = function (e, n, r) {
                        if (this instanceof t) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e);
                                case 2:
                                    return new t(e, n)
                            }
                            return new t(e, n, r)
                        }
                        return t.apply(this, arguments)
                    };
                    e[c] = t[c];
                    return e
                }(_) : d && "function" == typeof _ ? i(Function.call, _) : _;
                if (d) {
                    (h.virtual || (h.virtual = {}))[g] = _;
                    t & s.R && m && !m[g] && a(m, g, _)
                }
            }
        };
        s.F = 1;
        s.G = 2;
        s.S = 4;
        s.P = 8;
        s.B = 16;
        s.W = 32;
        s.U = 64;
        s.R = 128;
        t.exports = s
    },
    200: function (t, e, n) {
        var r = n(96);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    },
    21: function (t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    228: function (t, e, n) {
        t.exports = !n(41) && !n(61)(function () {
            return 7 != Object.defineProperty(n(156)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    229: function (t, e, n) {
        var r = n(51);
        var o = n(47);
        var i = n(338)(false);
        var a = n(138)("IE_PROTO");
        t.exports = function (t, e) {
            var n = o(t);
            var u = 0;
            var c = [];
            var s;
            for (s in n) s != a && r(n, s) && c.push(s);
            while (e.length > u) r(n, s = e[u++]) && (~i(c, s) || c.push(s));
            return c
        }
    },
    33: function (t, e, n) {
        var r = n(37);
        var o = n(228);
        var i = n(146);
        var a = Object.defineProperty;
        e.f = n(41) ? Object.defineProperty : function t(e, n, u) {
            r(e);
            n = i(n, true);
            r(u);
            if (o) try {
                return a(e, n, u)
            } catch (t) {}
            if ("get" in u || "set" in u) throw TypeError("Accessors not supported!");
            "value" in u && (e[n] = u.value);
            return e
        }
    },
    338: function (t, e, n) {
        var r = n(47);
        var o = n(152);
        var i = n(339);
        t.exports = function (t) {
            return function (e, n, a) {
                var u = r(e);
                var c = o(u.length);
                var s = i(a, c);
                var f;
                if (t && n != n)
                    while (c > s) {
                        f = u[s++];
                        if (f != f) return true
                    } else
                        for (; c > s; s++)
                            if ((t || s in u) && u[s] === n) return t || s || 0;
                return !t && -1
            }
        }
    },
    339: function (t, e, n) {
        var r = n(136);
        var o = Math.max;
        var i = Math.min;
        t.exports = function (t, e) {
            t = r(t);
            return t < 0 ? o(t + e, 0) : i(t, e)
        }
    },
    360: function (t, e, n) {
        "use strict";
        var r = n(70);
        var o = n(139);
        var i = n(88);
        var a = n(81);
        var u = n(200);
        var c = Object.assign;
        t.exports = !c || n(61)(function () {
            var t = {};
            var e = {};
            var n = Symbol();
            var r = "abcdefghijklmnopqrst";
            t[n] = 7;
            r.split("").forEach(function (t) {
                e[t] = t
            });
            return 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
        }) ? function t(e, n) {
            var c = a(e);
            var s = arguments.length;
            var f = 1;
            var p = o.f;
            var v = i.f;
            while (s > f) {
                var d = u(arguments[f++]);
                var l = p ? r(d).concat(p(d)) : r(d);
                var y = l.length;
                var h = 0;
                var m;
                while (y > h) v.call(d, m = l[h++]) && (c[m] = d[m])
            }
            return c
        } : c
    },
    37: function (t, e, n) {
        var r = n(39);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    },
    377: function (t, e, n) {
        n(378);
        t.exports = n(13).Object.assign
    },
    378: function (t, e, n) {
        var r = n(19);
        r(r.S + r.F, "Object", {
            assign: n(360)
        })
    },
    39: function (t, e) {
        t.exports = function (t) {
            return "object" === typeof t ? null !== t : "function" === typeof t
        }
    },
    41: function (t, e, n) {
        t.exports = !n(61)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    47: function (t, e, n) {
        var r = n(200);
        var o = n(130);
        t.exports = function (t) {
            return r(o(t))
        }
    },
    50: function (t, e) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || Function("return this")() || (1, eval)("this")
        } catch (t) {
            "object" === typeof window && (n = window)
        }
        t.exports = n
    },
    51: function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e)
        }
    },
    53: function (t, e, n) {
        var r = n(33);
        var o = n(82);
        t.exports = n(41) ? function (t, e, n) {
            return r.f(t, e, o(1, n))
        } : function (t, e, n) {
            t[e] = n;
            return t
        }
    },
    61: function (t, e) {
        t.exports = function (t) {
            try {
                return !!t()
            } catch (t) {
                return true
            }
        }
    },
    70: function (t, e, n) {
        var r = n(229);
        var o = n(141);
        t.exports = Object.keys || function t(e) {
            return r(e, o)
        }
    },
    78: function (t, e, n) {
        var r = n(134);
        t.exports = function (t, e, n) {
            r(t);
            if (void 0 === e) return t;
            switch (n) {
                case 1:
                    return function (n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o)
                    }
            }
            return function () {
                return t.apply(e, arguments)
            }
        }
    },
    81: function (t, e, n) {
        var r = n(130);
        t.exports = function (t) {
            return Object(r(t))
        }
    },
    82: function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    },
    8558: function (t, e, n) {
        (function (n) {
            var r, o;
            (function () {
                var i = "undefined" != typeof window && window === this ? this : "undefined" != typeof n && null != n ? n : this,
                    a = "function" == typeof Object.defineProperties ? Object.defineProperty : function (t, e, n) {
                        t != Array.prototype && t != Object.prototype && (t[e] = n.value)
                    };

                function u() {
                    u = function () {};
                    i.Symbol || (i.Symbol = s)
                }
                var c = 0;

                function s(t) {
                    return "jscomp_symbol_" + (t || "") + c++
                }

                function f() {
                    u();
                    var t = i.Symbol.iterator;
                    t || (t = i.Symbol.iterator = i.Symbol("iterator"));
                    "function" != typeof Array.prototype[t] && a(Array.prototype, t, {
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return p(this)
                        }
                    });
                    f = function () {}
                }

                function p(t) {
                    var e = 0;
                    return v(function () {
                        return e < t.length ? {
                            done: !1,
                            value: t[e++]
                        } : {
                            done: !0
                        }
                    })
                }

                function v(t) {
                    f();
                    t = {
                        next: t
                    };
                    t[i.Symbol.iterator] = function () {
                        return this
                    };
                    return t
                }

                function d(t) {
                    f();
                    var e = t[Symbol.iterator];
                    return e ? e.call(t) : p(t)
                }

                function l(t) {
                    if (!(t instanceof Array)) {
                        t = d(t);
                        for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
                        t = n
                    }
                    return t
                }
                var y = 0;

                function h(t, e) {
                    var n = XMLHttpRequest.prototype.send,
                        r = y++;
                    XMLHttpRequest.prototype.send = function (o) {
                        for (var i = [], a = 0; a < arguments.length; ++a) i[a - 0] = arguments[a];
                        var u = this;
                        t(r);
                        this.addEventListener("readystatechange", function () {
                            4 === u.readyState && e(r)
                        });
                        return n.apply(this, i)
                    }
                }

                function m(t, e) {
                    var n = fetch;
                    fetch = function (r) {
                        for (var o = [], i = 0; i < arguments.length; ++i) o[i - 0] = arguments[i];
                        return new Promise(function (r, i) {
                            var a = y++;
                            t(a);
                            n.apply(null, [].concat(l(o))).then(function (t) {
                                e(a);
                                r(t)
                            }, function (t) {
                                e(t);
                                i(t)
                            })
                        })
                    }
                }
                var w = "img script iframe link audio video source".split(" ");

                function g(t, e) {
                    t = d(t);
                    for (var n = t.next(); !n.done; n = t.next())
                        if (n = n.value, e.includes(n.nodeName.toLowerCase()) || g(n.children, e)) return !0;
                    return !1
                }

                function b(t) {
                    var e = new MutationObserver(function (e) {
                        e = d(e);
                        for (var n = e.next(); !n.done; n = e.next()) n = n.value, "childList" == n.type && g(n.addedNodes, w) ? t(n) : "attributes" == n.type && w.includes(n.target.tagName.toLowerCase()) && t(n)
                    });
                    e.observe(document, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        attributeFilter: ["href", "src"]
                    });
                    return e
                }

                function _(t, e) {
                    if (2 < t.length) return performance.now();
                    var n = [];
                    e = d(e);
                    for (var r = e.next(); !r.done; r = e.next()) r = r.value, n.push({
                        timestamp: r.start,
                        type: "requestStart"
                    }), n.push({
                        timestamp: r.end,
                        type: "requestEnd"
                    });
                    e = d(t);
                    for (r = e.next(); !r.done; r = e.next()) n.push({
                        timestamp: r.value,
                        type: "requestStart"
                    });
                    n.sort(function (t, e) {
                        return t.timestamp - e.timestamp
                    });
                    t = t.length;
                    for (e = n.length - 1; 0 <= e; e--) switch (r = n[e], r.type) {
                        case "requestStart":
                            t--;
                            break;
                        case "requestEnd":
                            t++;
                            if (2 < t) return r.timestamp;
                            break;
                        default:
                            throw Error("Internal Error: This should never happen")
                    }
                    return 0
                }

                function O(t) {
                    t = t || {};
                    this.w = !!t.useMutationObserver;
                    this.u = t.minValue || null;
                    t = window.__tti && window.__tti.e;
                    var e = window.__tti && window.__tti.o;
                    this.a = t ? t.map(function (t) {
                        return {
                            start: t.startTime,
                            end: t.startTime + t.duration
                        }
                    }) : [];
                    e && e.disconnect();
                    this.b = [];
                    this.f = new Map;
                    this.j = null;
                    this.v = -1 / 0;
                    this.i = !1;
                    this.h = this.c = this.s = null;
                    h(this.m.bind(this), this.l.bind(this));
                    m(this.m.bind(this), this.l.bind(this));
                    x(this);
                    this.w && (this.h = b(this.B.bind(this)))
                }
                O.prototype.getFirstConsistentlyInteractive = function () {
                    var t = this;
                    return new Promise(function (e) {
                        t.s = e;
                        "complete" == document.readyState ? E(t) : window.addEventListener("load", function () {
                            E(t)
                        })
                    })
                };

                function E(t) {
                    t.i = !0;
                    var e = 0 < t.a.length ? t.a[t.a.length - 1].end : 0,
                        n = _(t.g, t.b);
                    T(t, Math.max(n + 5e3, e))
                }

                function T(t, e) {
                    !t.i || t.v > e || (clearTimeout(t.j), t.j = setTimeout(function () {
                        var e = performance.timing.navigationStart,
                            n = _(t.g, t.b),
                            e = (window.a && window.a.A ? 1e3 * window.a.A().C - e : 0) || performance.timing.domContentLoadedEventEnd - e;
                        if (t.u) var r = t.u;
                        else performance.timing.domContentLoadedEventEnd ? (r = performance.timing, r = r.domContentLoadedEventEnd - r.navigationStart) : r = null;
                        var o = performance.now();
                        null === r && T(t, Math.max(n + 5e3, o + 1e3));
                        var i = t.a;
                        5e3 > o - n ? n = null : (n = i.length ? i[i.length - 1].end : e, n = 5e3 > o - n ? null : Math.max(n, r));
                        n && (t.s(n), clearTimeout(t.j), t.i = !1, t.c && t.c.disconnect(), t.h && t.h.disconnect());
                        T(t, performance.now() + 1e3)
                    }, e - performance.now()), t.v = e)
                }

                function x(t) {
                    t.c = new PerformanceObserver(function (e) {
                        e = d(e.getEntries());
                        for (var n = e.next(); !n.done; n = e.next())
                            if (n = n.value, "resource" === n.entryType && (t.b.push({
                                    start: n.fetchStart,
                                    end: n.responseEnd
                                }), T(t, _(t.g, t.b) + 5e3)), "longtask" === n.entryType) {
                                var r = n.startTime + n.duration;
                                t.a.push({
                                    start: n.startTime,
                                    end: r
                                });
                                T(t, r + 5e3)
                            }
                    });
                    t.c.observe({
                        entryTypes: ["longtask", "resource"]
                    })
                }
                O.prototype.m = function (t) {
                    this.f.set(t, performance.now())
                };
                O.prototype.l = function (t) {
                    this.f.delete(t)
                };
                O.prototype.B = function () {
                    T(this, performance.now() + 5e3)
                };
                i.Object.defineProperties(O.prototype, {
                    g: {
                        configurable: !0,
                        enumerable: !0,
                        get: function () {
                            return [].concat(l(this.f.values()))
                        }
                    }
                });
                var S = {
                    getFirstConsistentlyInteractive: function (t) {
                        t = t || {};
                        return "PerformanceLongTaskTiming" in window ? new O(t).getFirstConsistentlyInteractive() : Promise.resolve(null)
                    }
                };
                "undefined" != typeof t && t.exports ? t.exports = S : !(r = [], o = function () {
                    return S
                }.apply(e, r), void 0 !== o && (t.exports = o))
            })()
        }).call(this, n(50))
    },
    88: function (t, e) {
        e.f = {}.propertyIsEnumerable
    },
    89: function (t, e) {
        t.exports = true
    },
    96: function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1)
        }
    }
});