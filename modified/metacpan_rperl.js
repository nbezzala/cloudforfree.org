!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document)
            throw new Error("jQuery requires a window with a document");
        return b(a)
    }
    : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = []
      , d = c.slice
      , e = c.concat
      , f = c.push
      , g = c.indexOf
      , h = {}
      , i = h.toString
      , j = h.hasOwnProperty
      , k = {}
      , l = "1.11.1"
      , m = function(a, b) {
        return new m.fn.init(a,b)
    }
      , n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , o = /^-ms-/
      , p = /-([\da-z])/gi
      , q = function(a, b) {
        return b.toUpperCase()
    }
    ;
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this,
            b.context = this.context,
            b
        },
        each: function(a, b) {
            return m.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length
              , c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    },
    m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g,
        g = arguments[h] || {},
        h++),
        "object" == typeof g || m.isFunction(g) || (g = {}),
        h === i && (g = this,
        h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e)
                    a = g[d],
                    c = e[d],
                    g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1,
                    f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {},
                    g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }
    ,
    m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a)
        }
        ,
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a)
                return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))
                return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)
                for (b in a)
                    return j.call(a, b);
            for (b in a)
                ;
            return void 0 === b || j.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            }
            )(b)
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c),
                        d === !1)
                            break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]),
                    d === !1)
                        break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
            c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g)
                    return g.call(b, a, c);
                for (d = b.length,
                c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a)
                        return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length
              , d = 0
              , e = a.length;
            while (c > d)
                a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d])
                    a[e++] = b[d++];
            return a.length = e,
            a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                d = !b(a[f], f),
                d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h)
                for (; g > f; f++)
                    d = b(a[f], f, c),
                    null != d && i.push(d);
            else
                for (f in a)
                    d = b(a[f], f, c),
                    null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b],
            b = a,
            a = f),
            m.isFunction(a) ? (c = d.call(arguments, 2),
            e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)))
            }
            ,
            e.guid = a.guid = a.guid || m.guid++,
            e) : void 0
        },
        now: function() {
            return +new Date
        },
        support: k
    }),
    m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = a.length
          , c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function(a, b) {
            return a === b && (l = !0),
            0
        }
        , C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (this[b] === a)
                    return b;
            return -1
        }
        , L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]","g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
            bool: new RegExp("^(?:" + L + ")$","i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)","ig"), db = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }
        ;
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes),
            F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function(a, b) {
                    H.apply(a, J.call(b))
                }
                : function(a, b) {
                    var c = a.length
                      , d = 0;
                    while (a[c++] = b[d++])
                        ;
                    a.length = c - 1
                }
            }
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b),
            b = b || n,
            d = d || [],
            !a || "string" != typeof a)
                return d;
            if (1 !== (k = b.nodeType) && 9 !== k)
                return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) {
                        if (9 === k) {
                            if (h = b.getElementById(j),
                            !h || !h.parentNode)
                                return d;
                            if (h.id === j)
                                return d.push(h),
                                d
                        } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                            return d.push(h),
                            d
                    } else {
                        if (f[2])
                            return I.apply(d, b.getElementsByTagName(a)),
                            d;
                        if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)
                            return I.apply(d, b.getElementsByClassName(j)),
                            d
                    }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u,
                    w = b,
                    x = 9 === k && a,
                    1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a),
                        (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s),
                        s = "[id='" + s + "'] ",
                        l = o.length;
                        while (l--)
                            o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b,
                        x = o.join(",")
                    }
                    if (x)
                        try {
                            return I.apply(d, w.querySelectorAll(x)),
                            d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function gb() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                b[c + " "] = e
            }
            return b
        }
        function hb(a) {
            return a[u] = !0,
            a
        }
        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b),
                b = null
            }
        }
        function jb(a, b) {
            var c = a.split("|")
              , e = a.length;
            while (e--)
                d.attrHandle[c[e]] = b
        }
        function kb(a, b) {
            var c = b && a
              , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)
                return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b)
                        return -1;
            return a ? 1 : -1
        }
        function lb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function mb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function nb(a) {
            return hb(function(b) {
                return b = +b,
                hb(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {},
        f = fb.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }
        ,
        m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e,
            o = e.documentElement,
            p = !f(e),
            g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                m()
            })),
            c.attributes = ib(function(a) {
                return a.className = "i",
                !a.getAttribute("className")
            }),
            c.getElementsByTagName = ib(function(a) {
                return a.appendChild(e.createComment("")),
                !a.getElementsByTagName("*").length
            }),
            c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>",
                a.firstChild.className = "i",
                2 === a.getElementsByClassName("i").length
            }),
            c.getById = ib(function(a) {
                return o.appendChild(a).id = u,
                !e.getElementsByName || !e.getElementsByName(u).length
            }),
            c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }
            ,
            d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }
            ) : (delete d.find.ID,
            d.filter.ID = function(a) {
                var b = a.replace(cb, db);
                return function(a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }
            ),
            d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            }
            : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])
                        1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }
            ,
            d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
            }
            ,
            r = [],
            q = [],
            (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>",
                a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"),
                a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"),
                a.querySelectorAll(":checked").length || q.push(":checked")
            }),
            ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"),
                a.appendChild(b).setAttribute("name", "D"),
                a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="),
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                a.querySelectorAll("*,:x"),
                q.push(",.*:")
            })),
            (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                c.disconnectedMatch = s.call(a, "div"),
                s.call(a, "[s!='']:x"),
                r.push("!=", Q)
            }),
            q = q.length && new RegExp(q.join("|")),
            r = r.length && new RegExp(r.join("|")),
            b = $.test(o.compareDocumentPosition),
            t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a
                  , d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }
            : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a)
                            return !0;
                return !1
            }
            ,
            B = b ? function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            }
            : function(a, b) {
                if (a === b)
                    return l = !0,
                    0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f || !g)
                    return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)
                    return kb(a, b);
                c = a;
                while (c = c.parentNode)
                    h.unshift(c);
                c = b;
                while (c = c.parentNode)
                    i.unshift(c);
                while (h[d] === i[d])
                    d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }
            ,
            e) : n
        }
        ,
        fb.matches = function(a, b) {
            return fb(a, null , null , b)
        }
        ,
        fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a),
            b = b.replace(U, "='$1']"),
            !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                        return d
                } catch (e) {}
            return fb(b, n, null , [a]).length > 0
        }
        ,
        fb.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a),
            t(a, b)
        }
        ,
        fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()]
              , f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }
        ,
        fb.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }
        ,
        fb.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates,
            k = !c.sortStable && a.slice(0),
            a.sort(B),
            l) {
                while (b = a[f++])
                    b === a[f] && (e = d.push(f));
                while (e--)
                    a.splice(d[e], 1)
            }
            return k = null ,
            a
        }
        ,
        e = fb.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)
                        return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)
                        c += e(a)
                } else if (3 === f || 4 === f)
                    return a.nodeValue
            } else
                while (b = a[d++])
                    c += e(b);
            return c
        }
        ,
        d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(cb, db),
                    a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db),
                    "~=" === a[2] && (a[3] = " " + a[3] + " "),
                    a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(),
                    "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]),
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                    a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]),
                    a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                    a[2] = c.slice(0, b)),
                    a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    }
                    : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "",
                        "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3)
                      , g = "last" !== a.slice(-4)
                      , h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    }
                    : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                            return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild],
                            g && s) {
                                k = q[u] || (q[u] = {}),
                                j = k[a] || [],
                                n = j[0] === w && j[1],
                                m = j[0] === w && j[2],
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                    l === b))
                                        break;
                            return m -= e,
                            m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                    d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)
                            d = K.call(a, f[g]),
                            a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }
                    ) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = []
                      , c = []
                      , d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null , e, []), h = a.length;
                        while (h--)
                            (f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a,
                        d(b, null , f, c),
                        !c.pop()
                    }
                }),
                has: hb(function(a) {
                    return function(b) {
                        return fb(a, b).length > 0
                    }
                }),
                contains: hb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a),
                    a = a.replace(cb, db).toLowerCase(),
                    function(b) {
                        var c;
                        do
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                return c = c.toLowerCase(),
                                c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex,
                    a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Z.test(a.nodeName)
                },
                input: function(a) {
                    return Y.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function() {
                    return [0]
                }),
                last: nb(function(a, b) {
                    return [b - 1]
                }),
                eq: nb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: nb(function(a, b) {
                    for (var c = 0; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                odd: nb(function(a, b) {
                    for (var c = 1; b > c; c += 2)
                        a.push(c);
                    return a
                }),
                lt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; )
                        a.push(d);
                    return a
                }),
                gt: nb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; )
                        a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            d.pseudos[b] = lb(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            d.pseudos[b] = mb(b);
        function pb() {}
        pb.prototype = d.filters = d.pseudos,
        d.setFilters = new pb,
        g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)
                return b ? 0 : k.slice(0);
            h = a,
            i = [],
            j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                i.push(f = [])),
                c = !1,
                (e = T.exec(h)) && (c = e.shift(),
                f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }),
                h = h.slice(c.length));
                for (g in d.filter)
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                    f.push({
                        value: c,
                        type: g,
                        matches: e
                    }),
                    h = h.slice(c.length));
                if (!c)
                    break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        }
        ;
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)
                d += a[b].value;
            return d
        }
        function rb(a, b, c) {
            var d = b.dir
              , e = c && "parentNode" === d
              , f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e)
                        return a(b, c, f)
            }
            : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g))
                            return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[u] || (b[u] = {}),
                            (h = i[d]) && h[0] === w && h[1] === f)
                                return j[2] = h[2];
                            if (i[d] = j,
                            j[2] = a(b, c, g))
                                return !0
                        }
            }
        }
        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d))
                        return !1;
                return !0
            }
            : a[0]
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)
                fb(a, b[d], c);
            return c
        }
        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                j && b.push(h));
            return g
        }
        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)),
            e && !e[u] && (e = vb(e, f)),
            hb(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i),
                d) {
                    j = ub(r, n),
                    d(j, [], h, i),
                    k = j.length;
                    while (k--)
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [],
                            k = r.length;
                            while (k--)
                                (l = r[k]) && j.push(q[k] = l);
                            e(null , r = [], j, i)
                        }
                        k = r.length;
                        while (k--)
                            (l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else
                    r = ub(r === g ? r.splice(o, r.length) : r),
                    e ? e(null , g, r, i) : I.apply(g, r)
            })
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                return a === b
            }, h, !0), l = rb(function(a) {
                return K.call(b, a) > -1
            }, h, !0), m = [function(a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }
            ]; f > i; i++)
                if (c = d.relative[a[i].type])
                    m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null , a[i].matches),
                    c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type])
                                break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }
        function xb(a, b) {
            var c = b.length > 0
              , e = a.length > 0
              , f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])
                            if (o(l, g, h)) {
                                i.push(l);
                                break
                            }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--,
                    f && r.push(l))
                }
                if (p += q,
                c && q !== p) {
                    m = 0;
                    while (o = b[m++])
                        o(r, s, g, h);
                    if (f) {
                        if (p > 0)
                            while (q--)
                                r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s),
                    k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v,
                j = t),
                r
            }
            ;
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)),
                c = b.length;
                while (c--)
                    f = wb(b[c]),
                    f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)),
                f.selector = a
            }
            return f
        }
        ,
        i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [],
            1 === o.length) {
                if (j = o[0] = o[0].slice(0),
                j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0],
                    !b)
                        return e;
                    n && (b = b.parentNode),
                    a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i],
                    d.relative[l = k.type])
                        break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1),
                        a = f.length && qb(j),
                        !a)
                            return I.apply(e, f),
                            e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b),
            e
        }
        ,
        c.sortStable = u.split("").sort(B).join("") === u,
        c.detectDuplicates = !!l,
        m(),
        c.sortDetached = ib(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }),
        ib(function(a) {
            return a.innerHTML = "<a href='#'></a>",
            "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }),
        c.attributes && ib(function(a) {
            return a.innerHTML = "<input/>",
            a.firstChild.setAttribute("value", ""),
            "" === a.firstChild.getAttribute("value")
        }) || jb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }),
        ib(function(a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }),
        fb
    }(a);
    m.find = s,
    m.expr = s.selectors,
    m.expr[":"] = m.expr.pseudos,
    m.unique = s.uniqueSort,
    m.text = s.getText,
    m.isXMLDoc = s.isXML,
    m.contains = s.contains;
    var t = m.expr.match.needsContext
      , u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b))
            return m.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
        if (b.nodeType)
            return m.grep(a, function(a) {
                return a === b !== c
            });
        if ("string" == typeof b) {
            if (v.test(b))
                return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"),
        1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }
    ,
    m.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)
                return this.pushStack(m(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (m.contains(d[b], this))
                            return !0
                }));
            for (b = 0; e > b; b++)
                m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c),
            c.selector = this.selector ? this.selector + " " + a : a,
            c
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0))
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
        var c, d;
        if (!a)
            return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null , a, null ] : z.exec(a),
            !c || !c[1] && b)
                return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b,
                m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)),
                u.test(c[1]) && m.isPlainObject(b))
                    for (c in b)
                        m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]),
            d && d.parentNode) {
                if (d.id !== c[2])
                    return x.find(a);
                this.length = 1,
                this[0] = d
            }
            return this.context = y,
            this.selector = a,
            this
        }
        return a.nodeType ? (this.context = this[0] = a,
        this.length = 1,
        this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector,
        this.context = a.context),
        m.makeArray(a, this))
    }
    ;
    A.prototype = m.fn,
    x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/
      , C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, c) {
            var d = []
              , e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))
                1 === e.nodeType && d.push(e),
                e = e[b];
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling)
                1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }),
    m.fn.extend({
        has: function(a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b]))
                        return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        do
            a = a[b];
        while (a && 1 !== a.nodeType);return a
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return m.sibling(a.firstChild)
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = m.filter(d, e)),
            this.length > 1 && (C[a] || (e = m.unique(e)),
            B.test(a) && (e = e.reverse())),
            this.pushStack(e)
        }
    });
    var E = /\S+/g
      , F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }),
        b
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l,
            d = !0,
            f = g || 0,
            g = 0,
            e = h.length,
            b = !0; h && e > f; f++)
                if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    c = !1;
                    break
                }
            b = !1,
            h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }
        , k = {
            add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments),
                    b ? e = h.length : c && (g = d,
                    j(c))
                }
                return this
            },
            remove: function() {
                return h && m.each(arguments, function(a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1)
                        h.splice(d, 1),
                        b && (e >= d && e--,
                        f >= d && f--)
                }),
                this
            },
            has: function(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            },
            empty: function() {
                return h = [],
                e = 0,
                this
            },
            disable: function() {
                return h = i = c = void 0,
                this
            },
            disabled: function() {
                return !h
            },
            lock: function() {
                return i = void 0,
                c || k.disable(),
                this
            },
            locked: function() {
                return !i
            },
            fireWith: function(a, c) {
                return !h || d && !i || (c = c || [],
                c = [a, c.slice ? c.slice() : c],
                b ? i.push(c) : j(c)),
                this
            },
            fire: function() {
                return k.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!d
            }
        };
        return k
    }
    ,
    m.extend({
        Deferred: function(a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]]
              , c = "pending"
              , d = {
                state: function() {
                    return c
                },
                always: function() {
                    return e.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return m.Deferred(function(c) {
                        m.each(b, function(b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(a) {
                    return null != a ? m.extend(a, d) : d
                }
            }
              , e = {};
            return d.pipe = d.then,
            m.each(b, function(a, f) {
                var g = f[2]
                  , h = f[3];
                d[f[1]] = g.add,
                h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock),
                e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments),
                    this
                }
                ,
                e[f[0] + "With"] = g.fireWith
            }),
            d.promise(e),
            a && a.call(e, e),
            e
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this,
                    c[a] = arguments.length > 1 ? d.call(arguments) : e,
                    c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }
            , i, j, k;
            if (e > 1)
                for (i = new Array(e),
                j = new Array(e),
                k = new Array(e); e > b; b++)
                    c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c),
            g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a),
        this
    }
    ,
    m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0)
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body)
                    return setTimeout(m.ready);
                m.isReady = !0,
                a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]),
                m.fn.triggerHandler && (m(y).triggerHandler("ready"),
                m(y).off("ready")))
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1),
        a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J),
        a.detachEvent("onload", J))
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(),
        m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(),
            "complete" === y.readyState)
                setTimeout(m.ready);
            else if (y.addEventListener)
                y.addEventListener("DOMContentLoaded", J, !1),
                a.addEventListener("load", J, !1);
            else {
                y.attachEvent("onreadystatechange", J),
                a.attachEvent("onload", J);
                var c = !1;
                try {
                    c = null == a.frameElement && y.documentElement
                } catch (d) {}
                c && c.doScroll && !function e() {
                    if (!m.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        I(),
                        m.ready()
                    }
                }()
            }
        return H.promise(b)
    }
    ;
    var K = "undefined", L;
    for (L in m(k))
        break;
    k.ownLast = "0" !== L,
    k.inlineBlockNeedsLayout = !1,
    m(function() {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0],
        c && c.style && (b = y.createElement("div"),
        d = y.createElement("div"),
        d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        c.appendChild(d).appendChild(b),
        typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth,
        a && (c.style.zoom = 1)),
        c.removeChild(d))
    }),
    function() {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null
    }(),
    m.acceptData = function(a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()]
          , c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    }
    ;
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d),
            "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {}
                m.data(a, b, c)
            } else
                c = void 0
        }
        return c
    }
    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)
                return !1;
        return !0
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)
                return k || (k = i ? a[h] = c.pop() || m.guid++ : h),
                j[k] || (j[k] = i ? {} : {
                    toJSON: m.noop
                }),
                ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)),
                g = j[k],
                e || (g.data || (g.data = {}),
                g = g.data),
                void 0 !== d && (g[m.camelCase(b)] = d),
                "string" == typeof b ? (f = g[b],
                null == f && (f = g[m.camelCase(b)])) : f = g,
                f
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b),
                    b = b in d ? [b] : b.split(" ")),
                    e = b.length;
                    while (e--)
                        delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))
                        return
                }
                (c || (delete g[h].data,
                P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null )
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando],
            !!a && !P(a)
        },
        data: function(a, b, c) {
            return Q(a, b, c)
        },
        removeData: function(a, b) {
            return R(a, b)
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function(a, b) {
            return R(a, b, !0)
        }
    }),
    m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f),
                1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)
                        g[c] && (d = g[c].name,
                        0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)),
                        O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a)
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b)
            }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a)
            })
        }
    }),
    m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue",
            d = m._data(a, b),
            c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)),
            d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b)
              , d = c.length
              , e = c.shift()
              , f = m._queueHooks(a, b)
              , g = function() {
                m.dequeue(a, b)
            }
            ;
            "inprogress" === e && (e = c.shift(),
            d--),
            e && ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"),
                    m._removeData(a, c)
                })
            })
        }
    }),
    m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a,
            a = "fx",
            c--),
            arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a),
                "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [f])
            }
            ;
            "string" != typeof a && (b = a,
            a = void 0),
            a = a || "fx";
            while (g--)
                c = m._data(f[g], a + "queueHooks"),
                c && c.empty && (d++,
                c.empty.add(h));
            return h(),
            e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , T = ["Top", "Right", "Bottom", "Left"]
      , U = function(a, b) {
        return a = b || a,
        "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }
      , V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0
          , i = a.length
          , j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)
                m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0,
        m.isFunction(d) || (g = !0),
        j && (g ? (b.call(a, d),
        b = null ) : (j = b,
        b = function(a, b, c) {
            return j.call(m(a), c)
        }
        )),
        b))
            for (; i > h; h++)
                b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }
      , W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input")
          , b = y.createElement("div")
          , c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        k.leadingWhitespace = 3 === b.firstChild.nodeType,
        k.tbody = !b.getElementsByTagName("tbody").length,
        k.htmlSerialize = !!b.getElementsByTagName("link").length,
        k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML,
        a.type = "checkbox",
        a.checked = !0,
        c.appendChild(a),
        k.appendChecked = a.checked,
        b.innerHTML = "<textarea>x</textarea>",
        k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue,
        c.appendChild(b),
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
        k.noCloneEvent = !0,
        b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent = !1
        }),
        b.cloneNode(!0).click()),
        null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            c = "on" + b,
            (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"),
            k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i
      , Y = /^key/
      , Z = /^(?:mouse|pointer|contextmenu)|click/
      , $ = /^(?:focusinfocus|focusoutblur)$/
      , _ = /^([^.]*)(?:\.(.+)|)$/;
    function ab() {
        return !0
    }
    function bb() {
        return !1
    }
    function cb() {
        try {
            return y.activeElement
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c,
                c = i.handler,
                e = i.selector),
                c.guid || (c.guid = m.guid++),
                (g = r.events) || (g = r.events = {}),
                (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }
                ,
                k.elem = a),
                b = (b || "").match(E) || [""],
                h = b.length;
                while (h--)
                    f = _.exec(b[h]) || [],
                    o = q = f[1],
                    p = (f[2] || "").split(".").sort(),
                    o && (j = m.event.special[o] || {},
                    o = (e ? j.delegateType : j.bindType) || o,
                    j = m.event.special[o] || {},
                    l = m.extend({
                        type: o,
                        origType: q,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && m.expr.match.needsContext.test(e),
                        namespace: p.join(".")
                    }, i),
                    (n = g[o]) || (n = g[o] = [],
                    n.delegateCount = 0,
                    j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))),
                    j.add && (j.add.call(a, l),
                    l.handler.guid || (l.handler.guid = c.guid)),
                    e ? n.splice(n.delegateCount++, 0, l) : n.push(l),
                    m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""],
                j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [],
                    o = q = h[1],
                    p = (h[2] || "").split(".").sort(),
                    o) {
                        l = m.event.special[o] || {},
                        o = (d ? l.delegateType : l.bindType) || o,
                        n = k[o] || [],
                        h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        i = f = n.length;
                        while (f--)
                            g = n[f],
                            !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1),
                            g.selector && n.delegateCount--,
                            l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle),
                        delete k[o])
                    } else
                        for (o in k)
                            m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle,
                m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y,
            3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."),
            p = q.shift(),
            q.sort()),
            g = p.indexOf(":") < 0 && "on" + p,
            b = b[m.expando] ? b : new m.Event(p,"object" == typeof b && b),
            b.isTrigger = e ? 2 : 3,
            b.namespace = q.join("."),
            b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
            b.result = void 0,
            b.target || (b.target = d),
            c = null == c ? [b] : m.makeArray(c, [b]),
            k = m.event.special[p] || {},
            e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p,
                    $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)
                        o.push(h),
                        l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())
                    b.type = n > 1 ? i : k.bindType || p,
                    f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"),
                    f && f.apply(h, c),
                    f = g && h[g],
                    f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c),
                    b.result === !1 && b.preventDefault());
                if (b.type = p,
                !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g],
                    l && (d[g] = null ),
                    m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {}
                    m.event.triggered = void 0,
                    l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a,
            a.delegateTarget = this,
            !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j),
                b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem,
                    g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())
                        (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e,
                        a.data = e.data,
                        c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i),
                        void 0 !== c && (a.result = c) === !1 && (a.preventDefault(),
                        a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [],
                        f = 0; h > f; f++)
                            d = b[f],
                            c = d.selector + " ",
                            void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null , [i]).length),
                            e[c] && e.push(d);
                        e.length && g.push({
                            elem: i,
                            handlers: e
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }),
            g
        },
        fix: function(a) {
            if (a[m.expando])
                return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}),
            d = g.props ? this.props.concat(g.props) : this.props,
            a = new m.Event(f),
            b = d.length;
            while (b--)
                c = d[b],
                a[c] = f[c];
            return a.target || (a.target = f.srcElement || y),
            3 === a.target.nodeType && (a.target = a.target.parentNode),
            a.metaKey = !!a.metaKey,
            g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y,
                e = d.documentElement,
                c = d.body,
                a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0),
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== cb() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === cb() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null , b) : m.event.dispatch.call(b, e),
            e.isDefaultPrevented() && c.preventDefault()
        }
    },
    m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }
    : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null ),
        a.detachEvent(d, c))
    }
    ,
    m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a,
        this.type = a.type,
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a,
        b && m.extend(this, b),
        this.timeStamp = a && a.timeStamp || m.now(),
        void (this[m.expando] = !0)) : new m.Event(a,b)
    }
    ,
    m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab,
            a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab,
            a && (a.stopPropagation && a.stopPropagation(),
            a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab,
            a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType,
                c = f.handler.apply(this, arguments),
                a.type = b),
                c
            }
        }
    }),
    k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target
                  , c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0
                }),
                m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble,
            this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }),
    k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
            }),
            m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1),
                m.event.simulate("change", this, a, !0)
            })),
            !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                }),
                m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return m.event.remove(this, "._change"),
            !X.test(this.nodeName)
        }
    }),
    k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        }
        ;
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this
                  , e = m._data(d, b);
                e || d.addEventListener(a, c, !0),
                m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this
                  , e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0),
                m._removeData(d, b))
            }
        }
    }),
    m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b,
                b = void 0);
                for (f in a)
                    this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b,
            c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
            c = void 0) : (d = c,
            c = b,
            b = void 0)),
            d === !1)
                d = bb;
            else if (!d)
                return this;
            return 1 === e && (g = d,
            d = function(a) {
                return m().off(a),
                g.apply(this, arguments)
            }
            ,
            d.guid = g.guid || (g.guid = m.guid++)),
            this.each(function() {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)
                return d = a.handleObj,
                m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                this;
            if ("object" == typeof a) {
                for (e in a)
                    this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b,
            b = void 0),
            c === !1 && (c = bb),
            this.each(function() {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });
    function db(a) {
        var b = eb.split("|")
          , c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length)
                c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , fb = / jQuery\d+="(?:null|\d+)"/g
      , gb = new RegExp("<(?:" + eb + ")[\\s/>]","i")
      , hb = /^\s+/
      , ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , jb = /<([\w:]+)/
      , kb = /<tbody/i
      , lb = /<|&#?\w+;/
      , mb = /<(?:script|style|link)/i
      , nb = /checked\s*(?:[^=]|=\s*.checked.)/i
      , ob = /^$|\/(?:java|ecma)script/i
      , pb = /^true\/(.*)/
      , qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , rb = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , sb = db(y)
      , tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option,
    rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead,
    rb.th = rb.td;
    function ub(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [],
            c = a.childNodes || a; null != (d = c[e]); e++)
                !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }
    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }
    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type,
        a
    }
    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"),
        a
    }
    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)
            m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }
    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle,
                g.events = {};
                for (c in h)
                    for (d = 0,
                    e = h[c].length; e > d; d++)
                        m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }
    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(),
            !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)
                    m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text,
            yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML),
            k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked,
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML,
            tb.removeChild(f = tb.firstChild)),
            !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f),
                h = ub(a),
                g = 0; null != (e = h[g]); ++g)
                    d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a),
                    d = d || ub(f),
                    g = 0; null != (e = h[g]); g++)
                        Ab(e, d[g]);
                else
                    Ab(a, f);
            return d = ub(f, "script"),
            d.length > 0 && zb(d, !i && ub(a, "script")),
            d = h = e = null ,
            f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q],
                f || 0 === f)
                    if ("object" === m.type(f))
                        m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                        h = h || o.appendChild(b.createElement("div")),
                        i = (jb.exec(f) || ["", ""])[1].toLowerCase(),
                        l = rb[i] || rb._default,
                        h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2],
                        e = l[0];
                        while (e--)
                            h = h.lastChild;
                        if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])),
                        !k.tbody) {
                            f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild,
                            e = f && f.childNodes.length;
                            while (e--)
                                m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                        }
                        m.merge(p, h.childNodes),
                        h.textContent = "";
                        while (h.firstChild)
                            h.removeChild(h.firstChild);
                        h = o.lastChild
                    } else
                        p.push(b.createTextNode(f));
            h && o.removeChild(h),
            k.appendChecked || m.grep(ub(p, "input"), vb),
            q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f),
                h = ub(o.appendChild(f), "script"),
                g && zb(h),
                c)) {
                    e = 0;
                    while (f = h[e++])
                        ob.test(f.type || "") && c.push(f)
                }
            return h = null ,
            o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i],
                g = f && j[f])) {
                    if (g.events)
                        for (e in g.events)
                            n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f],
                    l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null ,
                    c.push(f))
                }
        }
    }),
    m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null , a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                b || 1 !== c.nodeType || m.cleanData(ub(c)),
                c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")),
                c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild)
                    a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a,
            b = null == b ? a : b,
            this.map(function() {
                return m.clone(this, a, b)
            })
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {}
                  , c = 0
                  , d = this.length;
                if (void 0 === a)
                    return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++)
                            b = this[c] || {},
                            1 === b.nodeType && (m.cleanData(ub(b, !1)),
                            b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null , a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode,
                m.cleanData(ub(this)),
                a && a.replaceChild(b, this)
            }),
            a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p))
                return this.each(function(c) {
                    var d = n.eq(c);
                    q && (a[0] = p.call(this, c, d.html())),
                    d.domManip(a, b)
                });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this),
            c = i.firstChild,
            1 === i.childNodes.length && (i = c),
            c)) {
                for (g = m.map(ub(i, "script"), xb),
                f = g.length; l > j; j++)
                    d = i,
                    j !== o && (d = m.clone(d, !0, !0),
                    f && m.merge(g, ub(d, "script"))),
                    b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument,
                    m.map(g, yb),
                    j = 0; f > j; j++)
                        d = g[j],
                        ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }),
    m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)
                c = d === h ? this : this.clone(!0),
                m(g[d])[b](c),
                f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};
    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(),
        f
    }
    function Fb(a) {
        var b = y
          , c = Db[a];
        return c || (c = Eb(a, b),
        "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
        b = (Cb[0].contentWindow || Cb[0].contentDocument).document,
        b.write(),
        b.close(),
        c = Eb(a, b),
        Cb.detach()),
        Db[a] = c),
        c
    }
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a)
                return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0],
            c && c.style ? (b = y.createElement("div"),
            d = y.createElement("div"),
            d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            c.appendChild(d).appendChild(b),
            typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            b.appendChild(y.createElement("div")).style.width = "5px",
            a = 3 !== b.offsetWidth),
            c.removeChild(d),
            a) : void 0
        }
    }();
    var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$","i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null )
    }
    ,
    Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a),
        g = c ? c.getPropertyValue(b) || c[b] : void 0,
        c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)),
        Hb.test(g) && Gb.test(b) && (d = h.width,
        e = h.minWidth,
        f = h.maxWidth,
        h.minWidth = h.maxWidth = h.width = g,
        g = c.width,
        h.width = d,
        h.minWidth = e,
        h.maxWidth = f)),
        void 0 === g ? g : g + ""
    }
    ) : y.documentElement.currentStyle && (Ib = function(a) {
        return a.currentStyle
    }
    ,
    Jb = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a),
        g = c ? c[b] : void 0,
        null == g && h && h[b] && (g = h[b]),
        Hb.test(g) && !Kb.test(b) && (d = h.left,
        e = a.runtimeStyle,
        f = e && e.left,
        f && (e.left = a.currentStyle.left),
        h.left = "fontSize" === b ? "1em" : g,
        g = h.pixelLeft + "px",
        h.left = d,
        f && (e.left = f)),
        void 0 === g ? g : g + "" || "auto"
    }
    );
    function Lb(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c)
                    return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    !function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = d && d.style) {
            c.cssText = "float:left;opacity:.5",
            k.opacity = "0.5" === c.opacity,
            k.cssFloat = !!c.cssFloat,
            b.style.backgroundClip = "content-box",
            b.cloneNode(!0).style.backgroundClip = "",
            k.clearCloneStyle = "content-box" === b.style.backgroundClip,
            k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing,
            m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(),
                    g
                },
                boxSizingReliable: function() {
                    return null == f && i(),
                    f
                },
                pixelPosition: function() {
                    return null == e && i(),
                    e
                },
                reliableMarginRight: function() {
                    return null == h && i(),
                    h
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0],
                c && c.style && (b = y.createElement("div"),
                d = y.createElement("div"),
                d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                c.appendChild(d).appendChild(b),
                b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                e = f = !1,
                h = !0,
                a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null ) || {}).top,
                f = "4px" === (a.getComputedStyle(b, null ) || {
                    width: "4px"
                }).width,
                i = b.appendChild(y.createElement("div")),
                i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                i.style.marginRight = i.style.width = "0",
                b.style.width = "1px",
                h = !parseFloat((a.getComputedStyle(i, null ) || {}).marginRight)),
                b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                i = b.getElementsByTagName("td"),
                i[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                g = 0 === i[0].offsetHeight,
                g && (i[0].style.display = "",
                i[1].style.display = "none",
                g = 0 === i[0].offsetHeight),
                c.removeChild(d))
            }
        }
    }(),
    m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b)
            g[f] = a.style[f],
            a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)
            a.style[f] = g[f];
        return e
    }
    ;
    var Mb = /alpha\([^)]*\)/i
      , Nb = /opacity\s*=\s*([^)]*)/
      , Ob = /^(none|table(?!-c[ea]).+)/
      , Pb = new RegExp("^(" + S + ")(.*)$","i")
      , Qb = new RegExp("^([+-])=(" + S + ")","i")
      , Rb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Sb = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , Tb = ["Webkit", "O", "Moz", "ms"];
    function Ub(a, b) {
        if (b in a)
            return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1)
          , d = b
          , e = Tb.length;
        while (e--)
            if (b = Tb[e] + c,
            b in a)
                return b;
        return d
    }
    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
            d = a[g],
            d.style && (f[g] = m._data(d, "olddisplay"),
            c = d.style.display,
            b ? (f[g] || "none" !== c || (d.style.display = ""),
            "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d),
            (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)
            d = a[g],
            d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }
    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
            "margin" === c && (g += m.css(a, c + T[f], !0, e)),
            d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)),
            "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e),
            "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }
    function Yb(a, b, c) {
        var d = !0
          , e = "width" === b ? a.offsetWidth : a.offsetHeight
          , f = Ib(a)
          , g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f),
            (0 > e || null == e) && (e = a.style[b]),
            Hb.test(e))
                return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]),
            e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)),
                g = m.cssHooks[b] || m.cssHooks[h],
                void 0 === c)
                    return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c,
                "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)),
                f = "number"),
                null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"),
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))
                    try {
                        i[b] = c
                    } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)),
            g = m.cssHooks[b] || m.cssHooks[h],
            g && "get"in g && (f = g.get(a, !0, c)),
            void 0 === f && (f = Jb(a, b, d)),
            "normal" === f && b in Sb && (f = Sb[b]),
            "" === c || c ? (e = parseFloat(f),
            c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }),
    m.each(["height", "width"], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() {
                    return Yb(a, b, d)
                }) : Yb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }),
    k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style
              , d = a.currentStyle
              , e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : ""
              , f = d && d.filter || c.filter || "";
            c.zoom = 1,
            (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"),
            "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }),
    m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Jb, [a, "marginRight"]) : void 0
    }),
    m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                    e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        },
        Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }),
    m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ib(a),
                    e = b.length; e > g; g++)
                        f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Vb(this, !0)
        },
        hide: function() {
            return Vb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide()
            })
        }
    });
    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a,b,c,d,e)
    }
    m.Tween = Zb,
    Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a,
            this.prop = c,
            this.easing = e || "swing",
            this.options = b,
            this.start = this.now = this.cur(),
            this.end = d,
            this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Zb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Zb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
            this.now = (this.end - this.start) * b + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            c && c.set ? c.set(this) : Zb.propHooks._default.set(this),
            this
        }
    },
    Zb.prototype.init.prototype = Zb.prototype,
    Zb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""),
                b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    },
    Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    },
    m.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    m.fx = Zb.prototype.init,
    m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$","i"), cc = /queueHooks$/, dc = [ic], ec = {
        "*": [function(a, b) {
            var c = this.createTween(a, b)
              , d = c.cur()
              , e = bc.exec(b)
              , f = e && e[3] || (m.cssNumber[a] ? "" : "px")
              , g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a))
              , h = 1
              , i = 20;
            if (g && g[3] !== f) {
                f = f || g[3],
                e = e || [],
                g = +d || 1;
                do
                    h = h || ".5",
                    g /= h,
                    m.style(c.elem, a, g + f);
                while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0,
            c.unit = f,
            c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
            c
        }
        ]
    };
    function fc() {
        return setTimeout(function() {
            $b = void 0
        }),
        $b = m.now()
    }
    function gc(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)
            c = T[e],
            d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a),
        d
    }
    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a))
                return d
    }
    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"),
        null == h.unqueued && (h.unqueued = 0,
        i = h.empty.fire,
        h.empty.fire = function() {
            h.unqueued || i()
        }
        ),
        h.unqueued++,
        n.always(function() {
            n.always(function() {
                h.unqueued--,
                m.queue(a, "fx").length || h.empty.fire()
            })
        })),
        1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY],
        j = m.css(a, "display"),
        l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j,
        "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")),
        c.overflow && (p.overflow = "hidden",
        k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0],
            p.overflowX = c.overflow[1],
            p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d],
            ac.exec(e)) {
                if (delete b[d],
                f = f || "toggle" === e,
                e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d])
                        continue;q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else
                j = void 0;
        if (m.isEmptyObject(o))
            "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden"in r && (q = r.hidden) : r = m._data(a, "fxshow", {}),
            f && (r.hidden = !q),
            q ? m(a).show() : n.done(function() {
                m(a).hide()
            }),
            n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o)
                    m.style(a, b, o[b])
            });
            for (d in o)
                g = hc(q ? r[d] : 0, d, n),
                d in r || (r[d] = g.start,
                q && (g.end = g.start,
                g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }
    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c),
            e = b[d],
            f = a[c],
            m.isArray(f) && (e = f[1],
            f = a[c] = f[0]),
            c !== d && (a[d] = f,
            delete a[c]),
            g = m.cssHooks[d],
            g && "expand"in g) {
                f = g.expand(f),
                delete a[d];
                for (c in f)
                    c in a || (a[c] = f[c],
                    b[c] = e)
            } else
                b[d] = e
    }
    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function() {
            delete i.elem
        }), i = function() {
            if (e)
                return !1;
            for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]),
            1 > f && i ? c : (h.resolveWith(a, [j]),
            !1)
        }
        , j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $b || fc(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d),
                d
            },
            stop: function(b) {
                var c = 0
                  , d = b ? j.tweens.length : 0;
                if (e)
                    return this;
                for (e = !0; d > c; c++)
                    j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                this
            }
        }), k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts))
                return d;
        return m.map(k, hc, j),
        m.isFunction(j.opts.start) && j.opts.start.call(a, j),
        m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })),
        j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a,
            a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)
                c = a[d],
                ec[c] = ec[c] || [],
                ec[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? dc.unshift(a) : dc.push(a)
        }
    }),
    m.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default,
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        d.old = d.complete,
        d.complete = function() {
            m.isFunction(d.old) && d.old.call(this),
            d.queue && m.dequeue(this, d.queue)
        }
        ,
        d
    }
    ,
    m.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a)
              , f = m.speed(b, c, d)
              , g = function() {
                var b = kc(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            }
            ;
            return g.finish = g,
            e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop,
                b(c)
            }
            ;
            return "string" != typeof a && (c = b,
            b = a,
            a = void 0),
            b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
                var b = !0
                  , e = null != a && a + "queueHooks"
                  , f = m.timers
                  , g = m._data(this);
                if (e)
                    g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g)
                        g[e] && g[e].stop && cc.test(e) && d(g[e]);
                for (e = f.length; e--; )
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                    b = !1,
                    f.splice(e, 1));
                (b || !c) && m.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"),
            this.each(function() {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0,
                m.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length; b--; )
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                    f.splice(b, 1));
                for (b = 0; g > b; b++)
                    d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }),
    m.each(["toggle", "show", "hide"], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
        }
    }),
    m.each({
        slideDown: gc("show"),
        slideUp: gc("hide"),
        slideToggle: gc("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }),
    m.timers = [],
    m.fx.tick = function() {
        var a, b = m.timers, c = 0;
        for ($b = m.now(); c < b.length; c++)
            a = b[c],
            a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(),
        $b = void 0
    }
    ,
    m.fx.timer = function(a) {
        m.timers.push(a),
        a() ? m.fx.start() : m.timers.pop()
    }
    ,
    m.fx.interval = 13,
    m.fx.start = function() {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval))
    }
    ,
    m.fx.stop = function() {
        clearInterval(_b),
        _b = null
    }
    ,
    m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a,
        b = b || "fx",
        this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    }
    ,
    function() {
        var a, b, c, d, e;
        b = y.createElement("div"),
        b.setAttribute("className", "t"),
        b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        d = b.getElementsByTagName("a")[0],
        c = y.createElement("select"),
        e = c.appendChild(y.createElement("option")),
        a = b.getElementsByTagName("input")[0],
        d.style.cssText = "top:1px",
        k.getSetAttribute = "t" !== b.className,
        k.style = /top/.test(d.getAttribute("style")),
        k.hrefNormalized = "/a" === d.getAttribute("href"),
        k.checkOn = !!a.value,
        k.optSelected = e.selected,
        k.enctype = !!y.createElement("form").enctype,
        c.disabled = !0,
        k.optDisabled = !e.disabled,
        a = y.createElement("input"),
        a.setAttribute("value", ""),
        k.input = "" === a.getAttribute("value"),
        a.value = "t",
        a.setAttribute("type", "radio"),
        k.radioValue = "t" === a.value
    }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)
                    return d = m.isFunction(a),
                    this.each(function(c) {
                        var e;
                        1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a,
                        null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                            return null == a ? "" : a + ""
                        })),
                        b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()],
                        b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                    });
                if (e)
                    return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()],
                    b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                    "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }),
    m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i],
                        !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(),
                            f)
                                return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--)
                        if (d = e[g],
                        m.inArray(m.valHooks.option.get(d), f) >= 0)
                            try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            }
                        else
                            d.selected = !1;
                    return c || (a.selectedIndex = -1),
                    e
                }
            }
        }
    }),
    m.each(["radio", "checkbox"], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        },
        k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        }
        )
    });
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a)
            })
        }
    }),
    m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)
                return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(),
                d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)),
                void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b),
                null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                c) : void m.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++])
                    d = m.propFix[c] || c,
                    m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""),
                    a.removeAttribute(qc ? c : d)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b),
                        c && (a.value = c),
                        b
                    }
                }
            }
        }
    }),
    nc = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0,
            c
        }
    },
    m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = oc[b],
            oc[b] = e,
            e = null != c(a, b, d) ? b.toLowerCase() : null ,
            oc[b] = f),
            e
        }
        : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }),
    rc && qc || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mc && mc.set(a, b, c)
        }
    }),
    qc || (mc = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
            d.value = b += "",
            "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    },
    oc.id = oc.name = oc.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }
    ,
    m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: mc.set
    },
    m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mc.set(a, "" === b ? !1 : b, c)
        }
    },
    m.each(["width", "height"], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"),
                c) : void 0
            }
        }
    })),
    k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i
      , tc = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a,
            this.each(function() {
                try {
                    this[a] = void 0,
                    delete this[a]
                } catch (b) {}
            })
        }
    }),
    m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)
                return f = 1 !== g || !m.isXMLDoc(a),
                f && (b = m.propFix[b] || b,
                e = m.propHooks[b]),
                void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }),
    k.hrefNormalized || m.each(["href", "src"], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }),
    k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex,
            b.parentNode && b.parentNode.selectedIndex),
            null
        }
    }),
    m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        m.propFix[this.toLowerCase()] = this
    }),
    k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).addClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++])
                            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d),
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).removeClass(a.call(this, b, this.className))
                });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h],
                    d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0)
                                d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "",
                        c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            }
            : function() {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++])
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else
                    (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className),
                    this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0)
                    return !0;
            return !1
        }
    }),
    m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null , a, c) : this.trigger(b)
        }
    }),
    m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null , b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null , b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vc = m.now()
      , wc = /\?/
      , xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse)
            return a.JSON.parse(b + "");
        var c, d = null , e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) {
            return c && b && (d = 0),
            0 === d ? a : (c = e || b,
            d += !f - !e,
            "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }
    ,
    m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b)
            return null ;
        try {
            a.DOMParser ? (d = new DOMParser,
            c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
            c.async = "false",
            c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b),
        c
    }
    ;
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"),
        zc.href = "",
        zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];
    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b,
            b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++])
                    "+" === d.charAt(0) ? (d = d.slice(1) || "*",
                    (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }
    function Mc(a, b, c, d) {
        var e = {}
          , f = a === Ic;
        function g(h) {
            var i;
            return e[h] = !0,
            m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                g(j),
                !1)
            }),
            i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }
    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)
            void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c),
        a
    }
    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])
            i.shift(),
            void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0]in c)
            f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f),
        c[f]) : void 0
    }
    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters)
                j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b),
            !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
            i = f,
            f = k.shift())
                if ("*" === f)
                    f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f],
                    !g)
                        for (e in j)
                            if (h = e.split(" "),
                            h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"])
                            b = g(b);
                        else
                            try {
                                b = g(b)
                            } catch (l) {
                                return {
                                    state: "parsererror",
                                    error: g ? l : "No conversion from " + i + " to " + f
                                }
                            }
                }
        return {
            state: "success",
            data: b
        }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zc,
            type: "GET",
            isLocal: Dc.test(yc[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a,
            a = void 0),
            b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cc.exec(f))
                                j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a,
                    r[a] = b),
                    this
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a),
                    this
                },
                statusCode: function(a) {
                    var b;
                    if (a)
                        if (2 > t)
                            for (b in a)
                                q[b] = [q[b], a[b]];
                        else
                            v.always(a[v.status]);
                    return this
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b),
                    x(0, b),
                    this
                }
            };
            if (o.promise(v).complete = p.add,
            v.success = v.done,
            v.error = v.fail,
            k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"),
            k.type = b.method || b.type || k.method || k.type,
            k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""],
            null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()),
            k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))),
            k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)),
            Mc(Hc, k, b, v),
            2 === t)
                return v;
            h = k.global,
            h && 0 === m.active++ && m.event.trigger("ajaxStart"),
            k.type = k.type.toUpperCase(),
            k.hasContent = !Ec.test(k.type),
            e = k.url,
            k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data,
            delete k.data),
            k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)),
            k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]),
            m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),
            (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)
                v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            })
                v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1,
                h && n.trigger("ajaxSend", [v, k]),
                k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1,
                    i.send(r, x)
                } catch (w) {
                    if (!(2 > t))
                        throw w;
                    x(-1, w)
                }
            } else
                x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2,
                g && clearTimeout(g),
                i = void 0,
                f = d || "",
                v.readyState = a > 0 ? 4 : 0,
                j = a >= 200 && 300 > a || 304 === a,
                c && (u = Oc(k, v, c)),
                u = Pc(k, u, v, j),
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                w && (m.lastModified[e] = w),
                w = v.getResponseHeader("etag"),
                w && (m.etag[e] = w)),
                204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                r = u.data,
                s = u.error,
                j = !s)) : (s = x,
                (a || !x) && (x = "error",
                0 > a && (a = 0))),
                v.status = a,
                v.statusText = (b || x) + "",
                j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                v.statusCode(q),
                q = void 0,
                h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                p.fireWith(l, [v, x]),
                h && (n.trigger("ajaxComplete", [v, k]),
                --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script")
        }
    }),
    m.each(["get", "post"], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d,
            d = c,
            c = void 0),
            m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }),
    m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a)
        }
    }),
    m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a))
                return this.each(function(b) {
                    m(this).wrapAll(a.call(this, b))
                });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)
                        a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b))
            }
            : function() {
                var b = m(this)
                  , c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            }
            )
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }
    ,
    m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a)
    }
    ;
    var Qc = /%20/g
      , Rc = /\[\]$/
      , Sc = /\r?\n/g
      , Tc = /^(?:submit|button|image|reset|file)$/i
      , Uc = /^(?:input|select|textarea|keygen)/i;
    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b))
            m.each(b, function(b, e) {
                c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
        else if (c || "object" !== m.type(b))
            d(a, b);
        else
            for (e in b)
                Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b,
            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        }
        ;
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional),
        m.isArray(a) || a.jquery && !m.isPlainObject(a))
            m.each(a, function() {
                e(this.name, this.value)
            });
        else
            for (c in a)
                Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }
    ,
    m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(Sc, "\r\n")
                }
            }).get()
        }
    }),
    m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    }
    : Zc;
    var Wc = 0
      , Xc = {}
      , Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() {
        for (var a in Xc)
            Xc[a](void 0, !0)
    }),
    k.cors = !!Yc && "withCredentials"in Yc,
    Yc = k.ajax = !!Yc,
    Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null ),
                    b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g],
                            b = void 0,
                            f.onreadystatechange = m.noop,
                            e)
                                4 !== f.readyState && f.abort();
                            else {
                                j = {},
                                h = f.status,
                                "string" == typeof f.responseText && (j.text = f.responseText);
                                try {
                                    i = f.statusText
                                } catch (k) {
                                    i = ""
                                }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }
                    ,
                    a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() {
                    b && b(void 0, !0)
                }
            }
        }
    });
    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }
    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a),
                a
            }
        }
    }),
    m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1),
        a.crossDomain && (a.type = "GET",
        a.global = !1)
    }),
    m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"),
                    b.async = !0,
                    a.scriptCharset && (b.charset = a.scriptCharset),
                    b.src = a.url,
                    b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null ,
                        b.parentNode && b.parentNode.removeChild(b),
                        b = null ,
                        c || e(200, "success"))
                    }
                    ,
                    c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _c = []
      , ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _c.pop() || m.expando + "_" + vc++;
            return this[a] = !0,
            a
        }
    }),
    m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
        h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
        b.converters["script json"] = function() {
            return g || m.error(e + " was not called"),
            g[0]
        }
        ,
        b.dataTypes[0] = "json",
        f = a[e],
        a[e] = function() {
            g = arguments
        }
        ,
        d.always(function() {
            a[e] = f,
            b[e] && (b.jsonpCallback = c.jsonpCallback,
            _c.push(e)),
            g && m.isFunction(f) && f(g[0]),
            g = f = void 0
        }),
        "script") : void 0
    }),
    m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a)
            return null ;
        "boolean" == typeof b && (c = b,
        b = !1),
        b = b || y;
        var d = u.exec(a)
          , e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e),
        e && e.length && m(e).remove(),
        m.merge([], d.childNodes))
    }
    ;
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd)
            return bd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)),
        a = a.slice(0, h)),
        m.isFunction(b) ? (c = b,
        b = void 0) : b && "object" == typeof b && (f = "POST"),
        g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments,
            g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, e || [a.responseText, b, a])
        }
        ),
        this
    }
    ,
    m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem
        }).length
    }
    ;
    var cd = a.document.documentElement;
    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"),
            h = l.offset(),
            f = m.css(a, "top"),
            i = m.css(a, "left"),
            j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1,
            j ? (d = l.position(),
            g = d.top,
            e = d.left) : (g = parseFloat(f) || 0,
            e = parseFloat(i) || 0),
            m.isFunction(b) && (b = b.call(a, c, h)),
            null != b.top && (n.top = b.top - h.top + g),
            null != b.left && (n.left = b.left - h.left + e),
            "using"in b ? b.using.call(a, n) : l.css(n)
        }
    },
    m.fn.extend({
        offset: function(a) {
            if (arguments.length)
                return void 0 === a ? this : this.each(function(b) {
                    m.offset.setOffset(this, a, b)
                });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f)
                return b = f.documentElement,
                m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()),
                c = dd(f),
                {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(),
                b = this.offset(),
                m.nodeName(a[0], "html") || (c = a.offset()),
                c.top += m.css(a[0], "borderTopWidth", !0),
                c.left += m.css(a[0], "borderLeftWidth", !0)),
                {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cd;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))
                    a = a.offsetParent;
                return a || cd
            })
        }
    }),
    m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null )
        }
    }),
    m.each(["top", "left"], function(a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) {
            return c ? (c = Jb(a, b),
            Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }),
    m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d)
                  , g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null )
            }
        })
    }),
    m.fn.size = function() {
        return this.length
    }
    ,
    m.fn.andSelf = m.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return m
    });
    var ed = a.jQuery
      , fd = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fd),
        b && a.jQuery === m && (a.jQuery = ed),
        m
    }
    ,
    typeof b === K && (a.jQuery = a.$ = m),
    m
});
/*
 * 
 * TableSorter 2.0 - Client-side table sorting with ease!
 * Version 2.0.5b
 * @requires jQuery v1.2.3
 * 
 * Copyright (c) 2007 Christian Bach
 * Examples and docs at: http://tablesorter.com
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * 
 */
(function($) {
    $.extend({
        tablesorter: new function() {
            var parsers = []
              , widgets = [];
            this.defaults = {
                cssHeader: "header",
                cssAsc: "headerSortUp",
                cssDesc: "headerSortDown",
                cssChildRow: "expand-child",
                sortInitialOrder: "asc",
                sortMultiSortKey: "shiftKey",
                sortForce: null ,
                sortAppend: null ,
                sortLocaleCompare: true,
                textExtraction: "simple",
                parsers: {},
                widgets: [],
                widgetZebra: {
                    css: ["even", "odd"]
                },
                headers: {},
                widthFixed: false,
                cancelSelection: true,
                sortList: [],
                headerList: [],
                dateFormat: "us",
                decimal: '/\.|\,/g',
                onRenderHeader: null ,
                selectorHeaders: 'thead th',
                debug: false
            };
            function benchmark(s, d) {
                log(s + "," + (new Date().getTime() - d.getTime()) + "ms");
            }
            this.benchmark = benchmark;
            function log(s) {
                if (typeof console != "undefined" && typeof console.debug != "undefined") {
                    console.log(s);
                } else {
                    alert(s);
                }
            }
            function buildParserCache(table, $headers) {
                if (table.config.debug) {
                    var parsersDebug = "";
                }
                if (table.tBodies.length == 0)
                    return;
                var rows = table.tBodies[0].rows;
                if (rows[0]) {
                    var list = []
                      , cells = rows[0].cells
                      , l = cells.length;
                    for (var i = 0; i < l; i++) {
                        var p = false;
                        if ($.metadata && ($($headers[i]).metadata() && $($headers[i]).metadata().sorter)) {
                            p = getParserById($($headers[i]).metadata().sorter);
                        } else if ((table.config.headers[i] && table.config.headers[i].sorter) ) {
                            p = getParserById(table.config.headers[i].sorter);
                        }
                        if (!p) {
                            p = detectParserForColumn(table, rows, -1, i);
                        }
                        if (table.config.debug) {
                            parsersDebug += "column:" + i + " parser:" + p.id + "\n";
                        }
                        list.push(p);
                    }
                }
                if (table.config.debug) {
                    log(parsersDebug);
                }
                return list;
            }
            ;function detectParserForColumn(table, rows, rowIndex, cellIndex) {
                var l = parsers.length
                  , node = false
                  , nodeValue = false
                  , keepLooking = true;
                while (nodeValue == '' && keepLooking) {
                    rowIndex++;
                    if (rows[rowIndex]) {
                        node = getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex);
                        nodeValue = trimAndGetNodeText(table.config, node);
                        if (table.config.debug) {
                            log('Checking if value was empty on row:' + rowIndex);
                        }
                    } else {
                        keepLooking = false;
                    }
                }
                for (var i = 1; i < l; i++) {
                    if (parsers[i].is(nodeValue, table, node)) {
                        return parsers[i];
                    }
                }
                return parsers[0];
            }
            function getNodeFromRowAndCellIndex(rows, rowIndex, cellIndex) {
                return rows[rowIndex].cells[cellIndex];
            }
            function trimAndGetNodeText(config, node) {
                return $.trim(getElementText(config, node));
            }
            function getParserById(name) {
                var l = parsers.length;
                for (var i = 0; i < l; i++) {
                    if (parsers[i].id.toLowerCase() == name.toLowerCase()) {
                        return parsers[i];
                    }
                }
                return false;
            }
            function buildCache(table) {
                if (table.config.debug) {
                    var cacheTime = new Date();
                }
                var totalRows = (table.tBodies[0] && table.tBodies[0].rows.length) || 0
                  , totalCells = (table.tBodies[0].rows[0] && table.tBodies[0].rows[0].cells.length) || 0
                  , parsers = table.config.parsers
                  , cache = {
                    row: [],
                    normalized: []
                };
                for (var i = 0; i < totalRows; ++i) {
                    var c = $(table.tBodies[0].rows[i])
                      , cols = [];
                    if (c.hasClass(table.config.cssChildRow)) {
                        cache.row[cache.row.length - 1] = cache.row[cache.row.length - 1].add(c);
                        continue;
                    }
                    cache.row.push(c);
                    for (var j = 0; j < totalCells; ++j) {
                        cols.push(parsers[j].format(getElementText(table.config, c[0].cells[j]), table, c[0].cells[j]));
                    }
                    cols.push(cache.normalized.length);
                    cache.normalized.push(cols);
                    cols = null ;
                }
                ;if (table.config.debug) {
                    benchmark("Building cache for " + totalRows + " rows:", cacheTime);
                }
                return cache;
            }
            ;function getElementText(config, node) {
                var text = "";
                if (!node)
                    return "";
                if (!config.supportsTextContent)
                    config.supportsTextContent = node.textContent || false;
                if (config.textExtraction == "simple") {
                    if (config.supportsTextContent) {
                        text = node.textContent;
                    } else {
                        if (node.childNodes[0] && node.childNodes[0].hasChildNodes()) {
                            text = node.childNodes[0].innerHTML;
                        } else {
                            text = node.innerHTML;
                        }
                    }
                } else {
                    if (typeof (config.textExtraction) == "function") {
                        text = config.textExtraction(node);
                    } else {
                        text = $(node).text();
                    }
                }
                return text;
            }
            function appendToTable(table, cache) {
                if (table.config.debug) {
                    var appendTime = new Date()
                }
                var c = cache
                  , r = c.row
                  , n = c.normalized
                  , totalRows = n.length
                  , checkCell = (n[0].length - 1)
                  , tableBody = $(table.tBodies[0])
                  , rows = [];
                for (var i = 0; i < totalRows; i++) {
                    var pos = n[i][checkCell];
                    rows.push(r[pos]);
                    if (!table.config.appender) {
                        var l = r[pos].length;
                        for (var j = 0; j < l; j++) {
                            tableBody[0].appendChild(r[pos][j]);
                        }
                    }
                }
                if (table.config.appender) {
                    table.config.appender(table, rows);
                }
                rows = null ;
                if (table.config.debug) {
                    benchmark("Rebuilt table:", appendTime);
                }
                applyWidget(table);
                setTimeout(function() {
                    $(table).trigger("sortEnd");
                }, 0);
            }
            ;function buildHeaders(table) {
                if (table.config.debug) {
                    var time = new Date();
                }
                var meta = ($.metadata) ? true : false;
                var header_index = computeTableHeaderCellIndexes(table);
                $tableHeaders = $(table.config.selectorHeaders, table).each(function(index) {
                    this.column = header_index[this.parentNode.rowIndex + "-" + this.cellIndex];
                    this.order = formatSortingOrder(table.config.sortInitialOrder);
                    this.count = this.order;
                    if (checkHeaderMetadata(this) || checkHeaderOptions(table, index))
                        this.sortDisabled = true;
                    if (checkHeaderOptionsSortingLocked(table, index))
                        this.order = this.lockedOrder = checkHeaderOptionsSortingLocked(table, index);
                    if (!this.sortDisabled) {
                        var $th = $(this).addClass(table.config.cssHeader);
                        if (table.config.onRenderHeader)
                            table.config.onRenderHeader.apply($th);
                    }
                    table.config.headerList[index] = this;
                });
                if (table.config.debug) {
                    benchmark("Built headers:", time);
                    log($tableHeaders);
                }
                return $tableHeaders;
            }
            ;function computeTableHeaderCellIndexes(t) {
                var matrix = [];
                var lookup = {};
                var thead = t.getElementsByTagName('THEAD')[0];
                var trs = thead.getElementsByTagName('TR');
                for (var i = 0; i < trs.length; i++) {
                    var cells = trs[i].cells;
                    for (var j = 0; j < cells.length; j++) {
                        var c = cells[j];
                        var rowIndex = c.parentNode.rowIndex;
                        var cellId = rowIndex + "-" + c.cellIndex;
                        var rowSpan = c.rowSpan || 1;
                        var colSpan = c.colSpan || 1
                        var firstAvailCol;
                        if (typeof (matrix[rowIndex]) == "undefined") {
                            matrix[rowIndex] = [];
                        }
                        for (var k = 0; k < matrix[rowIndex].length + 1; k++) {
                            if (typeof (matrix[rowIndex][k]) == "undefined") {
                                firstAvailCol = k;
                                break;
                            }
                        }
                        lookup[cellId] = firstAvailCol;
                        for (var k = rowIndex; k < rowIndex + rowSpan; k++) {
                            if (typeof (matrix[k]) == "undefined") {
                                matrix[k] = [];
                            }
                            var matrixrow = matrix[k];
                            for (var l = firstAvailCol; l < firstAvailCol + colSpan; l++) {
                                matrixrow[l] = "x";
                            }
                        }
                    }
                }
                return lookup;
            }
            function checkCellColSpan(table, rows, row) {
                var arr = []
                  , r = table.tHead.rows
                  , c = r[row].cells;
                for (var i = 0; i < c.length; i++) {
                    var cell = c[i];
                    if (cell.colSpan > 1) {
                        arr = arr.concat(checkCellColSpan(table, headerArr, row++));
                    } else {
                        if (table.tHead.length == 1 || (cell.rowSpan > 1 || !r[row + 1])) {
                            arr.push(cell);
                        }
                    }
                }
                return arr;
            }
            ;function checkHeaderMetadata(cell) {
                if (($.metadata) && ($(cell).metadata().sorter === false)) {
                    return true;
                }
                ;return false;
            }
            function checkHeaderOptions(table, i) {
                if ((table.config.headers[i]) && (table.config.headers[i].sorter === false)) {
                    return true;
                }
                ;return false;
            }
            function checkHeaderOptionsSortingLocked(table, i) {
                if ((table.config.headers[i]) && (table.config.headers[i].lockedOrder))
                    return table.config.headers[i].lockedOrder;
                return false;
            }
            function applyWidget(table) {
                var c = table.config.widgets;
                var l = c.length;
                for (var i = 0; i < l; i++) {
                    getWidgetById(c[i]).format(table);
                }
            }
            function getWidgetById(name) {
                var l = widgets.length;
                for (var i = 0; i < l; i++) {
                    if (widgets[i].id.toLowerCase() == name.toLowerCase()) {
                        return widgets[i];
                    }
                }
            }
            ;function formatSortingOrder(v) {
                if (typeof (v) != "Number") {
                    return (v.toLowerCase() == "desc") ? 1 : 0;
                } else {
                    return (v == 1) ? 1 : 0;
                }
            }
            function isValueInArray(v, a) {
                var l = a.length;
                for (var i = 0; i < l; i++) {
                    if (a[i][0] == v) {
                        return true;
                    }
                }
                return false;
            }
            function setHeadersCss(table, $headers, list, css) {
                $headers.removeClass(css[0]).removeClass(css[1]);
                var h = [];
                $headers.each(function(offset) {
                    if (!this.sortDisabled) {
                        h[this.column] = $(this);
                    }
                });
                var l = list.length;
                for (var i = 0; i < l; i++) {
                    h[list[i][0]].addClass(css[list[i][1]]);
                }
            }
            function fixColumnWidth(table, $headers) {
                var c = table.config;
                if (c.widthFixed) {
                    var colgroup = $('<colgroup>');
                    $("tr:first td", table.tBodies[0]).each(function() {
                        colgroup.append($('<col>').css('width', $(this).width()));
                    });
                    $(table).prepend(colgroup);
                }
                ;
            }
            function updateHeaderSortCount(table, sortList) {
                var c = table.config
                  , l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var s = sortList[i]
                      , o = c.headerList[s[0]];
                    o.count = s[1];
                    o.count++;
                }
            }
            function multisort(table, sortList, cache) {
                if (table.config.debug) {
                    var sortTime = new Date();
                }
                var dynamicExp = "var sortWrapper = function(a,b) {"
                  , l = sortList.length;
                for (var i = 0; i < l; i++) {
                    var c = sortList[i][0];
                    var order = sortList[i][1];
                    var s = (table.config.parsers[c].type == "text") ? ((order == 0) ? makeSortFunction("text", "asc", c) : makeSortFunction("text", "desc", c)) : ((order == 0) ? makeSortFunction("numeric", "asc", c) : makeSortFunction("numeric", "desc", c));
                    var e = "e" + i;
                    dynamicExp += "var " + e + " = " + s;
                    dynamicExp += "if(" + e + ") { return " + e + "; } ";
                    dynamicExp += "else { ";
                }
                var orgOrderCol = cache.normalized[0].length - 1;
                dynamicExp += "return a[" + orgOrderCol + "]-b[" + orgOrderCol + "];";
                for (var i = 0; i < l; i++) {
                    dynamicExp += "}; ";
                }
                dynamicExp += "return 0; ";
                dynamicExp += "}; ";
                if (table.config.debug) {
                    benchmark("Evaling expression:" + dynamicExp, new Date());
                }
                eval(dynamicExp);
                cache.normalized.sort(sortWrapper);
                if (table.config.debug) {
                    benchmark("Sorting on " + sortList.toString() + " and dir " + order + " time:", sortTime);
                }
                return cache;
            }
            ;function makeSortFunction(type, direction, index) {
                var a = "a[" + index + "]"
                  , b = "b[" + index + "]";
                if (type == 'text' && direction == 'asc') {
                    return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + a + " < " + b + ") ? -1 : 1 )));";
                } else if (type == 'text' && direction == 'desc') {
                    return "(" + a + " == " + b + " ? 0 : (" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : (" + b + " < " + a + ") ? -1 : 1 )));";
                } else if (type == 'numeric' && direction == 'asc') {
                    return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + a + " - " + b + "));";
                } else if (type == 'numeric' && direction == 'desc') {
                    return "(" + a + " === null && " + b + " === null) ? 0 :(" + a + " === null ? Number.POSITIVE_INFINITY : (" + b + " === null ? Number.NEGATIVE_INFINITY : " + b + " - " + a + "));";
                }
            }
            ;function makeSortText(i) {
                return "((a[" + i + "] < b[" + i + "]) ? -1 : ((a[" + i + "] > b[" + i + "]) ? 1 : 0));";
            }
            ;function makeSortTextDesc(i) {
                return "((b[" + i + "] < a[" + i + "]) ? -1 : ((b[" + i + "] > a[" + i + "]) ? 1 : 0));";
            }
            ;function makeSortNumeric(i) {
                return "a[" + i + "]-b[" + i + "];";
            }
            ;function makeSortNumericDesc(i) {
                return "b[" + i + "]-a[" + i + "];";
            }
            ;function sortText(a, b) {
                if (table.config.sortLocaleCompare)
                    return a.localeCompare(b);
                return ( (a < b) ? -1 : ((a > b) ? 1 : 0)) ;
            }
            ;function sortTextDesc(a, b) {
                if (table.config.sortLocaleCompare)
                    return b.localeCompare(a);
                return ( (b < a) ? -1 : ((b > a) ? 1 : 0)) ;
            }
            ;function sortNumeric(a, b) {
                return a - b;
            }
            ;function sortNumericDesc(a, b) {
                return b - a;
            }
            ;function getCachedSortType(parsers, i) {
                return parsers[i].type;
            }
            ;this.construct = function(settings) {
                return this.each(function() {
                    if (!this.tHead || !this.tBodies)
                        return;
                    var $this, $document, $headers, cache, config, shiftDown = 0, sortOrder;
                    this.config = {};
                    var match = RegExp('[?&]sort=([^&]*)').exec(window.location.search);
                    if (JSON && match)
                        settings.sortList = JSON.parse(decodeURIComponent(match[1]));
                    config = $.extend(this.config, $.tablesorter.defaults, settings);
                    $this = $(this);
                    $.data(this, "tablesorter", config);
                    $headers = buildHeaders(this);
                    this.config.parsers = buildParserCache(this, $headers);
                    cache = buildCache(this);
                    var sortCSS = [config.cssDesc, config.cssAsc];
                    fixColumnWidth(this);
                    $headers.click(function(e) {
                        var totalRows = ($this[0].tBodies[0] && $this[0].tBodies[0].rows.length) || 0;
                        if (!this.sortDisabled && totalRows > 0) {
                            $this.trigger("sortStart");
                            var $cell = $(this);
                            var i = this.column;
                            this.order = this.count++ % 2;
                            if (this.lockedOrder)
                                this.order = this.lockedOrder;
                            if (!e[config.sortMultiSortKey]) {
                                config.sortList = [];
                                if (config.sortForce != null ) {
                                    var a = config.sortForce;
                                    for (var j = 0; j < a.length; j++) {
                                        if (a[j][0] != i) {
                                            config.sortList.push(a[j]);
                                        }
                                    }
                                }
                                config.sortList.push([i, this.order]);
                            } else {
                                if (isValueInArray(i, config.sortList)) {
                                    for (var j = 0; j < config.sortList.length; j++) {
                                        var s = config.sortList[j]
                                          , o = config.headerList[s[0]];
                                        if (s[0] == i) {
                                            o.count = s[1];
                                            o.count++;
                                            s[1] = o.count % 2;
                                        }
                                    }
                                } else {
                                    config.sortList.push([i, this.order]);
                                }
                            }
                            ;setTimeout(function() {
                                if (JSON && typeof history.replaceState === 'function')
                                    history.replaceState({}, null , "?sort=" + JSON.stringify(config.sortList));
                                setHeadersCss($this[0], $headers, config.sortList, sortCSS);
                                appendToTable($this[0], multisort($this[0], config.sortList, cache));
                            }, 1);
                            return false;
                        }
                    }).mousedown(function() {
                        if (config.cancelSelection) {
                            this.onselectstart = function() {
                                return false
                            }
                            ;
                            return false;
                        }
                    });
                    $this.bind("update", function() {
                        var me = this;
                        setTimeout(function() {
                            me.config.parsers = buildParserCache(me, $headers);
                            cache = buildCache(me);
                        }, 1);
                    }).bind("updateCell", function(e, cell) {
                        var config = this.config;
                        var pos = [(cell.parentNode.rowIndex - 1), cell.cellIndex];
                        cache.normalized[pos[0]][pos[1]] = config.parsers[pos[1]].format(getElementText(config, cell), cell);
                    }).bind("sorton", function(e, list) {
                        $(this).trigger("sortStart");
                        config.sortList = list;
                        var sortList = config.sortList;
                        updateHeaderSortCount(this, sortList);
                        setHeadersCss(this, $headers, sortList, sortCSS);
                        appendToTable(this, multisort(this, sortList, cache));
                    }).bind("appendCache", function() {
                        appendToTable(this, cache);
                    }).bind("applyWidgetId", function(e, id) {
                        getWidgetById(id).format(this);
                    }).bind("applyWidgets", function() {
                        applyWidget(this);
                    });
                    if ($.metadata && ($(this).metadata() && $(this).metadata().sortlist)) {
                        config.sortList = $(this).metadata().sortlist;
                    }
                    if (config.sortList.length > 0) {
                        $this.trigger("sorton", [config.sortList]);
                    }
                    applyWidget(this);
                });
            }
            ;
            this.addParser = function(parser) {
                var l = parsers.length
                  , a = true;
                for (var i = 0; i < l; i++) {
                    if (parsers[i].id.toLowerCase() == parser.id.toLowerCase()) {
                        a = false;
                    }
                }
                if (a) {
                    parsers.push(parser);
                }
                ;
            }
            ;
            this.addWidget = function(widget) {
                widgets.push(widget);
            }
            ;
            this.formatFloat = function(s) {
                var i = parseFloat(s);
                return (isNaN(i)) ? 0 : i;
            }
            ;
            this.formatInt = function(s) {
                var i = parseInt(s);
                return (isNaN(i)) ? 0 : i;
            }
            ;
            this.isDigit = function(s, config) {
                return /^[-+]?\d*$/.test($.trim(s.replace(/[,.']/g, '')));
            }
            ;
            this.clearTableBody = function(table) {
                if ($.browser.msie) {
                    function empty() {
                        while (this.firstChild)
                            this.removeChild(this.firstChild);
                    }
                    empty.apply(table.tBodies[0]);
                } else {
                    table.tBodies[0].innerHTML = "";
                }
            }
            ;
        }
    });
    $.fn.extend({
        tablesorter: $.tablesorter.construct
    });
    var ts = $.tablesorter;
    ts.addParser({
        id: "text",
        is: function(s) {
            return true;
        },
        format: function(s) {
            return $.trim(s.toLocaleLowerCase());
        },
        type: "text"
    });
    ts.addParser({
        id: "digit",
        is: function(s, table) {
            var c = table.config;
            return $.tablesorter.isDigit(s, c);
        },
        format: function(s) {
            return $.tablesorter.formatFloat(s);
        },
        type: "numeric"
    });
    ts.addParser({
        id: "currency",
        is: function(s) {
            return /^[£$€?.]/.test(s);
        },
        format: function(s) {
            return $.tablesorter.formatFloat(s.replace(new RegExp(/[£$€]/g), ""));
        },
        type: "numeric"
    });
    ts.addParser({
        id: "ipAddress",
        is: function(s) {
            return /^\d{2,3}[\.]\d{2,3}[\.]\d{2,3}[\.]\d{2,3}$/.test(s);
        },
        format: function(s) {
            var a = s.split(".")
              , r = ""
              , l = a.length;
            for (var i = 0; i < l; i++) {
                var item = a[i];
                if (item.length == 2) {
                    r += "0" + item;
                } else {
                    r += item;
                }
            }
            return $.tablesorter.formatFloat(r);
        },
        type: "numeric"
    });
    ts.addParser({
        id: "url",
        is: function(s) {
            return /^(https?|ftp|file):\/\/$/.test(s);
        },
        format: function(s) {
            return jQuery.trim(s.replace(new RegExp(/(https?|ftp|file):\/\//), ''));
        },
        type: "text"
    });
    ts.addParser({
        id: "isoDate",
        is: function(s) {
            return /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(s);
        },
        format: function(s) {
            return $.tablesorter.formatFloat((s != "") ? new Date(s.replace(new RegExp(/-/g), "/")).getTime() : "0");
        },
        type: "numeric"
    });
    ts.addParser({
        id: "percent",
        is: function(s) {
            return /\%$/.test($.trim(s));
        },
        format: function(s) {
            return $.tablesorter.formatFloat(s.replace(new RegExp(/%/g), ""));
        },
        type: "numeric"
    });
    ts.addParser({
        id: "usLongDate",
        is: function(s) {
            return s.match(new RegExp(/^[A-Za-z]{3,10}\.? [0-9]{1,2}, ([0-9]{4}|'?[0-9]{2}) (([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(AM|PM)))$/));
        },
        format: function(s) {
            return $.tablesorter.formatFloat(new Date(s).getTime());
        },
        type: "numeric"
    });
    ts.addParser({
        id: "shortDate",
        is: function(s) {
            return /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}/.test(s);
        },
        format: function(s, table) {
            var c = table.config;
            s = s.replace(/\-/g, "/");
            if (c.dateFormat == "us") {
                // reformat the string in ISO format
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$1/$2");
            } else if (c.dateFormat == "uk") {
                // reformat the string in ISO format
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})/, "$3/$2/$1");
            } else if (c.dateFormat == "dd/mm/yy" || c.dateFormat == "dd-mm-yy") {
                s = s.replace(/(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{2})/, "$1/$2/$3");
            }
            return $.tablesorter.formatFloat(new Date(s).getTime());
        },
        type: "numeric"
    });
    ts.addParser({
        id: "time",
        is: function(s) {
            return /^(([0-2]?[0-9]:[0-5][0-9])|([0-1]?[0-9]:[0-5][0-9]\s(am|pm)))$/.test(s);
        },
        format: function(s) {
            return $.tablesorter.formatFloat(new Date("2000/01/01" + s).getTime());
        },
        type: "numeric"
    });
    ts.addParser({
        id: "metadata",
        is: function(s) {
            return false;
        },
        format: function(s, table, cell) {
            var c = table.config
              , p = (!c.parserMetadataName) ? 'sortValue' : c.parserMetadataName;
            return $(cell).metadata()[p];
        },
        type: "numeric"
    });
    // add default widgets
    ts.addWidget({
        id: "zebra",
        format: function(table) {
            if (table.config.debug) {
                var time = new Date();
            }
            var $tr, row = -1, odd;
            // loop through the visible rows
            $("tr:visible", table.tBodies[0]).each(function(i) {
                $tr = $(this);
                // style children rows the same way the parent
                // row was styled
                if (!$tr.hasClass(table.config.cssChildRow))
                    row++;
                odd = (row % 2 == 0);
                $tr.removeClass(table.config.widgetZebra.css[odd ? 0 : 1]).addClass(table.config.widgetZebra.css[odd ? 1 : 0])
            });
            if (table.config.debug) {
                $.tablesorter.benchmark("Applying Zebra widget", time);
            }
        }
    });
})(jQuery);
// All credit goes to Rick Olson.
(function($) {
    $.fn.relatizeDate = function() {
        return $(this).each(function() {
            var $this = $(this);
            if (!$this.attr("title"))
                $this.attr("title", $this.text());
            $this.text($.relatizeDate(this))
        })
    }
    $.relatizeDate = function(element) {
        var str = $(element).attr("title"), d = new Date(str), m;
        if (!d || isNaN(d)) {
            // match w3cdtf/iso 8601/rfc 3339 (not all browsers will via new Date())
            if ((m = str.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(GMT|UTC|Z)?$/)) ) {
                d = m[7] ? // UTC
                new Date(Date.UTC(m[1], m[2] - 1, m[3], m[4], m[5], m[6])) : new Date(m[1],m[2] - 1,m[3],m[4],m[5],m[6]);
            }
        }
        // if Date is not parseable just return the original string
        return ( (!d || isNaN(d)) ? str : $.relatizeDate.timeAgoInWords(d)) ;
    }
    ;
    // shortcut
    $r = $.relatizeDate
    $.extend($.relatizeDate, {
        shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        /**
     * Given a formatted string, replace the necessary items and return.
     * Example: Time.now().strftime("%B%d,%Y") => February 11, 2008
     * @param {String} format The formatted string used to format the results
     */
        strftime: function(date, format) {
            var day = date.getDay()
              , month = date.getMonth();
            var hours = date.getHours()
              , minutes = date.getMinutes();
            var pad = function(num) {
                var string = num.toString(10);
                return new Array((2 - string.length) + 1).join('0') + string
            }
            ;
            return format.replace(/\%([aAbBcdHImMpSwyY])/g, function(match, letter) {
                switch (letter) {
                case 'a':
                    return $r.shortDays[day];
                    break;
                case 'A':
                    return $r.days[day];
                    break;
                case 'b':
                    return $r.shortMonths[month];
                    break;
                case 'B':
                    return $r.months[month];
                    break;
                case 'c':
                    return date.toString();
                    break;
                case 'd':
                    return pad(date.getDate());
                    break;
                case 'H':
                    return pad(hours);
                    break;
                case 'I':
                    return pad((hours + 12) % 12);
                    break;
                case 'm':
                    return pad(month + 1);
                    break;
                case 'M':
                    return pad(minutes);
                    break;
                case 'p':
                    return hours > 12 ? 'PM' : 'AM';
                    break;
                case 'S':
                    return pad(date.getSeconds());
                    break;
                case 'w':
                    return day;
                    break;
                case 'y':
                    return pad(date.getFullYear() % 100);
                    break;
                case 'Y':
                    return date.getFullYear().toString();
                    break;
                }
            })
        },
        timeAgoInWords: function(targetDate, includeTime) {
            return $r.distanceOfTimeInWords(targetDate, new Date(), includeTime);
        },
        /**
     * Return the distance of time in words between two Date's
     * Example: '5 days ago', 'about an hour ago'
     * @param {Date} fromTime The start date to use in the calculation
     * @param {Date} toTime The end date to use in the calculation
     * @param {Boolean} Include the time in the output
     */
        distanceOfTimeInWords: function(fromTime, toTime, includeTime) {
            var delta = parseInt((toTime.getTime() - fromTime.getTime()) / 1000);
            if (delta < 120) {
                return 'a minute ago';
            } else if (delta < (45 * 60)) {
                return (parseInt(delta / 60)).toString() + ' minutes ago';
            } else if (delta < (120 * 60)) {
                return 'an hour ago';
            } else if (delta < (24 * 60 * 60)) {
                return (parseInt(delta / 3600)).toString() + ' hours ago';
            } else if (delta < (48 * 60 * 60)) {
                return 'one day ago';
            } else {
                var days = (parseInt(delta / 86400)).toString();
                if (days > 5) {
                    var fmt = '%b %d, %Y'
                    if (includeTime)
                        fmt += ' %I:%M %p'
                    return $r.strftime(fromTime, fmt);
                } else {
                    return days + " days ago"
                }
            }
        }
    })
})(jQuery);
/* qTip2 v2.2.1 | Plugins: tips modal viewport svg imagemap ie6 | Styles: core basic css3 | qtip2.com | Licensed MIT | Sat Sep 06 2014 23:12:07 */
!function(a, b, c) {
    !function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : jQuery && !jQuery.fn.qtip && a(jQuery)
    }(function(d) {
        "use strict";
        function e(a, b, c, e) {
            this.id = c,
            this.target = a,
            this.tooltip = F,
            this.elements = {
                target: a
            },
            this._id = S + "-" + c,
            this.timers = {
                img: {}
            },
            this.options = b,
            this.plugins = {},
            this.cache = {
                event: {},
                target: d(),
                disabled: E,
                attr: e,
                onTooltip: E,
                lastClass: ""
            },
            this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = E
        }
        function f(a) {
            return a === F || "object" !== d.type(a)
        }
        function g(a) {
            return !(d.isFunction(a) || a && a.attr || a.length || "object" === d.type(a) && (a.jquery || a.then))
        }
        function h(a) {
            var b, c, e, h;
            return f(a) ? E : (f(a.metadata) && (a.metadata = {
                type: a.metadata
            }),
            "content"in a && (b = a.content,
            f(b) || b.jquery || b.done ? b = a.content = {
                text: c = g(b) ? E : b
            } : c = b.text,
            "ajax"in b && (e = b.ajax,
            h = e && e.once !== E,
            delete b.ajax,
            b.text = function(a, b) {
                var f = c || d(this).attr(b.options.content.attr) || "Loading..."
                  , g = d.ajax(d.extend({}, e, {
                    context: b
                })).then(e.success, F, e.error).then(function(a) {
                    return a && h && b.set("content.text", a),
                    a
                }, function(a, c, d) {
                    b.destroyed || 0 === a.status || b.set("content.text", c + ":" + d)
                });
                return h ? f : (b.set("content.text", f),
                g)
            }
            ),
            "title"in b && (d.isPlainObject(b.title) && (b.button = b.title.button,
            b.title = b.title.text),
            g(b.title || E) && (b.title = E))),
            "position"in a && f(a.position) && (a.position = {
                my: a.position,
                at: a.position
            }),
            "show"in a && f(a.show) && (a.show = a.show.jquery ? {
                target: a.show
            } : a.show === D ? {
                ready: D
            } : {
                event: a.show
            }),
            "hide"in a && f(a.hide) && (a.hide = a.hide.jquery ? {
                target: a.hide
            } : {
                event: a.hide
            }),
            "style"in a && f(a.style) && (a.style = {
                classes: a.style
            }),
            d.each(R, function() {
                this.sanitize && this.sanitize(a)
            }),
            a)
        }
        function i(a, b) {
            for (var c, d = 0, e = a, f = b.split("."); e = e[f[d++]]; )
                d < f.length && (c = e);
            return [c || a, f.pop()]
        }
        function j(a, b) {
            var c, d, e;
            for (c in this.checks)
                for (d in this.checks[c])
                    (e = new RegExp(d,"i").exec(a)) && (b.push(e),
                    ("builtin" === c || this.plugins[c]) && this.checks[c][d].apply(this.plugins[c] || this, b))
        }
        function k(a) {
            return V.concat("").join(a ? "-" + a + " " : " ")
        }
        function l(a, b) {
            return b > 0 ? setTimeout(d.proxy(a, this), b) : void a.call(this)
        }
        function m(a) {
            this.tooltip.hasClass(ab) || (clearTimeout(this.timers.show),
            clearTimeout(this.timers.hide),
            this.timers.show = l.call(this, function() {
                this.toggle(D, a)
            }, this.options.show.delay))
        }
        function n(a) {
            if (!this.tooltip.hasClass(ab) && !this.destroyed) {
                var b = d(a.relatedTarget)
                  , c = b.closest(W)[0] === this.tooltip[0]
                  , e = b[0] === this.options.show.target[0];
                if (clearTimeout(this.timers.show),
                clearTimeout(this.timers.hide),
                this !== b[0] && "mouse" === this.options.position.target && c || this.options.hide.fixed && /mouse(out|leave|move)/.test(a.type) && (c || e))
                    try {
                        a.preventDefault(),
                        a.stopImmediatePropagation()
                    } catch (f) {}
                else
                    this.timers.hide = l.call(this, function() {
                        this.toggle(E, a)
                    }, this.options.hide.delay, this)
            }
        }
        function o(a) {
            !this.tooltip.hasClass(ab) && this.options.hide.inactive && (clearTimeout(this.timers.inactive),
            this.timers.inactive = l.call(this, function() {
                this.hide(a)
            }, this.options.hide.inactive))
        }
        function p(a) {
            this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(a)
        }
        function q(a, c, e) {
            d(b.body).delegate(a, (c.split ? c : c.join("." + S + " ")) + "." + S, function() {
                var a = y.api[d.attr(this, U)];
                a && !a.disabled && e.apply(a, arguments)
            })
        }
        function r(a, c, f) {
            var g, i, j, k, l, m = d(b.body), n = a[0] === b ? m : a, o = a.metadata ? a.metadata(f.metadata) : F, p = "html5" === f.metadata.type && o ? o[f.metadata.name] : F, q = a.data(f.metadata.name || "qtipopts");
            try {
                q = "string" == typeof q ? d.parseJSON(q) : q
            } catch (r) {}
            if (k = d.extend(D, {}, y.defaults, f, "object" == typeof q ? h(q) : F, h(p || o)),
            i = k.position,
            k.id = c,
            "boolean" == typeof k.content.text) {
                if (j = a.attr(k.content.attr),
                k.content.attr === E || !j)
                    return E;
                k.content.text = j
            }
            if (i.container.length || (i.container = m),
            i.target === E && (i.target = n),
            k.show.target === E && (k.show.target = n),
            k.show.solo === D && (k.show.solo = i.container.closest("body")),
            k.hide.target === E && (k.hide.target = n),
            k.position.viewport === D && (k.position.viewport = i.container),
            i.container = i.container.eq(0),
            i.at = new A(i.at,D),
            i.my = new A(i.my),
            a.data(S))
                if (k.overwrite)
                    a.qtip("destroy", !0);
                else if (k.overwrite === E)
                    return E;
            return a.attr(T, c),
            k.suppress && (l = a.attr("title")) && a.removeAttr("title").attr(cb, l).attr("title", ""),
            g = new e(a,k,c,!!j),
            a.data(S, g),
            g
        }
        function s(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        }
        function t(a, b) {
            var d, e, f = b.charAt(0).toUpperCase() + b.slice(1), g = (b + " " + rb.join(f + " ") + f).split(" "), h = 0;
            if (qb[b])
                return a.css(qb[b]);
            for (; d = g[h++]; )
                if ((e = a.css(d)) !== c)
                    return qb[b] = d,
                    e
        }
        function u(a, b) {
            return Math.ceil(parseFloat(t(a, b)))
        }
        function v(a, b) {
            this._ns = "tip",
            this.options = b,
            this.offset = b.offset,
            this.size = [b.width, b.height],
            this.init(this.qtip = a)
        }
        function w(a, b) {
            this.options = b,
            this._ns = "-modal",
            this.init(this.qtip = a)
        }
        function x(a) {
            this._ns = "ie6",
            this.init(this.qtip = a)
        }
        var y, z, A, B, C, D = !0, E = !1, F = null , G = "x", H = "y", I = "width", J = "height", K = "top", L = "left", M = "bottom", N = "right", O = "center", P = "flipinvert", Q = "shift", R = {}, S = "qtip", T = "data-hasqtip", U = "data-qtip-id", V = ["ui-widget", "ui-tooltip"], W = "." + S, X = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "), Y = S + "-fixed", Z = S + "-default", $ = S + "-focus", _ = S + "-hover", ab = S + "-disabled", bb = "_replacedByqTip", cb = "oldtitle", db = {
            ie: function() {
                for (var a = 4, c = b.createElement("div"); (c.innerHTML = "<!--[if gt IE" + a + "]><i></i><![endif]-->") && c.getElementsByTagName("i")[0]; a += 1)
                    ;
                return a > 4 ? a : 0 / 0
            }(),
            iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || E
        };
        z = e.prototype,
        z._when = function(a) {
            return d.when.apply(d, a)
        }
        ,
        z.render = function(a) {
            if (this.rendered || this.destroyed)
                return this;
            var b, c = this, e = this.options, f = this.cache, g = this.elements, h = e.content.text, i = e.content.title, j = e.content.button, k = e.position, l = ("." + this._id + " ",
            []);
            return d.attr(this.target[0], "aria-describedby", this._id),
            f.posClass = this._createPosClass((this.position = {
                my: k.my,
                at: k.at
            }).my),
            this.tooltip = g.tooltip = b = d("<div/>", {
                id: this._id,
                "class": [S, Z, e.style.classes, f.posClass].join(" "),
                width: e.style.width || "",
                height: e.style.height || "",
                tracking: "mouse" === k.target && k.adjust.mouse,
                role: "alert",
                "aria-live": "polite",
                "aria-atomic": E,
                "aria-describedby": this._id + "-content",
                "aria-hidden": D
            }).toggleClass(ab, this.disabled).attr(U, this.id).data(S, this).appendTo(k.container).append(g.content = d("<div />", {
                "class": S + "-content",
                id: this._id + "-content",
                "aria-atomic": D
            })),
            this.rendered = -1,
            this.positioning = D,
            i && (this._createTitle(),
            d.isFunction(i) || l.push(this._updateTitle(i, E))),
            j && this._createButton(),
            d.isFunction(h) || l.push(this._updateContent(h, E)),
            this.rendered = D,
            this._setWidget(),
            d.each(R, function(a) {
                var b;
                "render" === this.initialize && (b = this(c)) && (c.plugins[a] = b)
            }),
            this._unassignEvents(),
            this._assignEvents(),
            this._when(l).then(function() {
                c._trigger("render"),
                c.positioning = E,
                c.hiddenDuringWait || !e.show.ready && !a || c.toggle(D, f.event, E),
                c.hiddenDuringWait = E
            }),
            y.api[this.id] = this,
            this
        }
        ,
        z.destroy = function(a) {
            function b() {
                if (!this.destroyed) {
                    this.destroyed = D;
                    var a, b = this.target, c = b.attr(cb);
                    this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove(),
                    d.each(this.plugins, function() {
                        this.destroy && this.destroy()
                    });
                    for (a in this.timers)
                        clearTimeout(this.timers[a]);
                    b.removeData(S).removeAttr(U).removeAttr(T).removeAttr("aria-describedby"),
                    this.options.suppress && c && b.attr("title", c).removeAttr(cb),
                    this._unassignEvents(),
                    this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = F,
                    delete y.api[this.id]
                }
            }
            return this.destroyed ? this.target : (a === D && "hide" !== this.triggering || !this.rendered ? b.call(this) : (this.tooltip.one("tooltiphidden", d.proxy(b, this)),
            !this.triggering && this.hide()),
            this.target)
        }
        ,
        B = z.checks = {
            builtin: {
                "^id$": function(a, b, c, e) {
                    var f = c === D ? y.nextid : c
                      , g = S + "-" + f;
                    f !== E && f.length > 0 && !d("#" + g).length ? (this._id = g,
                    this.rendered && (this.tooltip[0].id = this._id,
                    this.elements.content[0].id = this._id + "-content",
                    this.elements.title[0].id = this._id + "-title")) : a[b] = e
                },
                "^prerender": function(a, b, c) {
                    c && !this.rendered && this.render(this.options.show.ready)
                },
                "^content.text$": function(a, b, c) {
                    this._updateContent(c)
                },
                "^content.attr$": function(a, b, c, d) {
                    this.options.content.text === this.target.attr(d) && this._updateContent(this.target.attr(c))
                },
                "^content.title$": function(a, b, c) {
                    return c ? (c && !this.elements.title && this._createTitle(),
                    void this._updateTitle(c)) : this._removeTitle()
                },
                "^content.button$": function(a, b, c) {
                    this._updateButton(c)
                },
                "^content.title.(text|button)$": function(a, b, c) {
                    this.set("content." + b, c)
                },
                "^position.(my|at)$": function(a, b, c) {
                    "string" == typeof c && (this.position[b] = a[b] = new A(c,"at" === b))
                },
                "^position.container$": function(a, b, c) {
                    this.rendered && this.tooltip.appendTo(c)
                },
                "^show.ready$": function(a, b, c) {
                    c && (!this.rendered && this.render(D) || this.toggle(D))
                },
                "^style.classes$": function(a, b, c, d) {
                    this.rendered && this.tooltip.removeClass(d).addClass(c)
                },
                "^style.(width|height)": function(a, b, c) {
                    this.rendered && this.tooltip.css(b, c)
                },
                "^style.widget|content.title": function() {
                    this.rendered && this._setWidget()
                },
                "^style.def": function(a, b, c) {
                    this.rendered && this.tooltip.toggleClass(Z, !!c)
                },
                "^events.(render|show|move|hide|focus|blur)$": function(a, b, c) {
                    this.rendered && this.tooltip[(d.isFunction(c) ? "" : "un") + "bind"]("tooltip" + b, c)
                },
                "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
                    if (this.rendered) {
                        var a = this.options.position;
                        this.tooltip.attr("tracking", "mouse" === a.target && a.adjust.mouse),
                        this._unassignEvents(),
                        this._assignEvents()
                    }
                }
            }
        },
        z.get = function(a) {
            if (this.destroyed)
                return this;
            var b = i(this.options, a.toLowerCase())
              , c = b[0][b[1]];
            return c.precedance ? c.string() : c
        }
        ;
        var eb = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i
          , fb = /^prerender|show\.ready/i;
        z.set = function(a, b) {
            if (this.destroyed)
                return this;
            {
                var c, e = this.rendered, f = E, g = this.options;
                this.checks
            }
            return "string" == typeof a ? (c = a,
            a = {},
            a[c] = b) : a = d.extend({}, a),
            d.each(a, function(b, c) {
                if (e && fb.test(b))
                    return void delete a[b];
                var h, j = i(g, b.toLowerCase());
                h = j[0][j[1]],
                j[0][j[1]] = c && c.nodeType ? d(c) : c,
                f = eb.test(b) || f,
                a[b] = [j[0], j[1], c, h]
            }),
            h(g),
            this.positioning = D,
            d.each(a, d.proxy(j, this)),
            this.positioning = E,
            this.rendered && this.tooltip[0].offsetWidth > 0 && f && this.reposition("mouse" === g.position.target ? F : this.cache.event),
            this
        }
        ,
        z._update = function(a, b) {
            var c = this
              , e = this.cache;
            return this.rendered && a ? (d.isFunction(a) && (a = a.call(this.elements.target, e.event, this) || ""),
            d.isFunction(a.then) ? (e.waiting = D,
            a.then(function(a) {
                return e.waiting = E,
                c._update(a, b)
            }, F, function(a) {
                return c._update(a, b)
            })) : a === E || !a && "" !== a ? E : (a.jquery && a.length > 0 ? b.empty().append(a.css({
                display: "block",
                visibility: "visible"
            })) : b.html(a),
            this._waitForContent(b).then(function(a) {
                c.rendered && c.tooltip[0].offsetWidth > 0 && c.reposition(e.event, !a.length)
            }))) : E
        }
        ,
        z._waitForContent = function(a) {
            var b = this.cache;
            return b.waiting = D,
            (d.fn.imagesLoaded ? a.imagesLoaded() : d.Deferred().resolve([])).done(function() {
                b.waiting = E
            }).promise()
        }
        ,
        z._updateContent = function(a, b) {
            this._update(a, this.elements.content, b)
        }
        ,
        z._updateTitle = function(a, b) {
            this._update(a, this.elements.title, b) === E && this._removeTitle(E)
        }
        ,
        z._createTitle = function() {
            var a = this.elements
              , b = this._id + "-title";
            a.titlebar && this._removeTitle(),
            a.titlebar = d("<div />", {
                "class": S + "-titlebar " + (this.options.style.widget ? k("header") : "")
            }).append(a.title = d("<div />", {
                id: b,
                "class": S + "-title",
                "aria-atomic": D
            })).insertBefore(a.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function(a) {
                d(this).toggleClass("ui-state-active ui-state-focus", "down" === a.type.substr(-4))
            }).delegate(".qtip-close", "mouseover mouseout", function(a) {
                d(this).toggleClass("ui-state-hover", "mouseover" === a.type)
            }),
            this.options.content.button && this._createButton()
        }
        ,
        z._removeTitle = function(a) {
            var b = this.elements;
            b.title && (b.titlebar.remove(),
            b.titlebar = b.title = b.button = F,
            a !== E && this.reposition())
        }
        ,
        z._createPosClass = function(a) {
            return S + "-pos-" + (a || this.options.position.my).abbrev()
        }
        ,
        z.reposition = function(c, e) {
            if (!this.rendered || this.positioning || this.destroyed)
                return this;
            this.positioning = D;
            var f, g, h, i, j = this.cache, k = this.tooltip, l = this.options.position, m = l.target, n = l.my, o = l.at, p = l.viewport, q = l.container, r = l.adjust, s = r.method.split(" "), t = k.outerWidth(E), u = k.outerHeight(E), v = 0, w = 0, x = k.css("position"), y = {
                left: 0,
                top: 0
            }, z = k[0].offsetWidth > 0, A = c && "scroll" === c.type, B = d(a), C = q[0].ownerDocument, F = this.mouse;
            if (d.isArray(m) && 2 === m.length)
                o = {
                    x: L,
                    y: K
                },
                y = {
                    left: m[0],
                    top: m[1]
                };
            else if ("mouse" === m)
                o = {
                    x: L,
                    y: K
                },
                (!r.mouse || this.options.hide.distance) && j.origin && j.origin.pageX ? c = j.origin : !c || c && ("resize" === c.type || "scroll" === c.type) ? c = j.event : F && F.pageX && (c = F),
                "static" !== x && (y = q.offset()),
                C.body.offsetWidth !== (a.innerWidth || C.documentElement.clientWidth) && (g = d(b.body).offset()),
                y = {
                    left: c.pageX - y.left + (g && g.left || 0),
                    top: c.pageY - y.top + (g && g.top || 0)
                },
                r.mouse && A && F && (y.left -= (F.scrollX || 0) - B.scrollLeft(),
                y.top -= (F.scrollY || 0) - B.scrollTop());
            else {
                if ("event" === m ? c && c.target && "scroll" !== c.type && "resize" !== c.type ? j.target = d(c.target) : c.target || (j.target = this.elements.target) : "event" !== m && (j.target = d(m.jquery ? m : this.elements.target)),
                m = j.target,
                m = d(m).eq(0),
                0 === m.length)
                    return this;
                m[0] === b || m[0] === a ? (v = db.iOS ? a.innerWidth : m.width(),
                w = db.iOS ? a.innerHeight : m.height(),
                m[0] === a && (y = {
                    top: (p || m).scrollTop(),
                    left: (p || m).scrollLeft()
                })) : R.imagemap && m.is("area") ? f = R.imagemap(this, m, o, R.viewport ? s : E) : R.svg && m && m[0].ownerSVGElement ? f = R.svg(this, m, o, R.viewport ? s : E) : (v = m.outerWidth(E),
                w = m.outerHeight(E),
                y = m.offset()),
                f && (v = f.width,
                w = f.height,
                g = f.offset,
                y = f.position),
                y = this.reposition.offset(m, y, q),
                (db.iOS > 3.1 && db.iOS < 4.1 || db.iOS >= 4.3 && db.iOS < 4.33 || !db.iOS && "fixed" === x) && (y.left -= B.scrollLeft(),
                y.top -= B.scrollTop()),
                (!f || f && f.adjustable !== E) && (y.left += o.x === N ? v : o.x === O ? v / 2 : 0,
                y.top += o.y === M ? w : o.y === O ? w / 2 : 0)
            }
            return y.left += r.x + (n.x === N ? -t : n.x === O ? -t / 2 : 0),
            y.top += r.y + (n.y === M ? -u : n.y === O ? -u / 2 : 0),
            R.viewport ? (h = y.adjusted = R.viewport(this, y, l, v, w, t, u),
            g && h.left && (y.left += g.left),
            g && h.top && (y.top += g.top),
            h.my && (this.position.my = h.my)) : y.adjusted = {
                left: 0,
                top: 0
            },
            j.posClass !== (i = this._createPosClass(this.position.my)) && k.removeClass(j.posClass).addClass(j.posClass = i),
            this._trigger("move", [y, p.elem || p], c) ? (delete y.adjusted,
            e === E || !z || isNaN(y.left) || isNaN(y.top) || "mouse" === m || !d.isFunction(l.effect) ? k.css(y) : d.isFunction(l.effect) && (l.effect.call(k, this, d.extend({}, y)),
            k.queue(function(a) {
                d(this).css({
                    opacity: "",
                    height: ""
                }),
                db.ie && this.style.removeAttribute("filter"),
                a()
            })),
            this.positioning = E,
            this) : this
        }
        ,
        z.reposition.offset = function(a, c, e) {
            function f(a, b) {
                c.left += b * a.scrollLeft(),
                c.top += b * a.scrollTop()
            }
            if (!e[0])
                return c;
            var g, h, i, j, k = d(a[0].ownerDocument), l = !!db.ie && "CSS1Compat" !== b.compatMode, m = e[0];
            do
                "static" !== (h = d.css(m, "position")) && ("fixed" === h ? (i = m.getBoundingClientRect(),
                f(k, -1)) : (i = d(m).position(),
                i.left += parseFloat(d.css(m, "borderLeftWidth")) || 0,
                i.top += parseFloat(d.css(m, "borderTopWidth")) || 0),
                c.left -= i.left + (parseFloat(d.css(m, "marginLeft")) || 0),
                c.top -= i.top + (parseFloat(d.css(m, "marginTop")) || 0),
                g || "hidden" === (j = d.css(m, "overflow")) || "visible" === j || (g = d(m)));
            while (m = m.offsetParent);return g && (g[0] !== k[0] || l) && f(g, 1),
            c
        }
        ;
        var gb = (A = z.reposition.Corner = function(a, b) {
            a = ("" + a).replace(/([A-Z])/, " $1").replace(/middle/gi, O).toLowerCase(),
            this.x = (a.match(/left|right/i) || a.match(/center/) || ["inherit"])[0].toLowerCase(),
            this.y = (a.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase(),
            this.forceY = !!b;
            var c = a.charAt(0);
            this.precedance = "t" === c || "b" === c ? H : G
        }
        ).prototype;
        gb.invert = function(a, b) {
            this[a] = this[a] === L ? N : this[a] === N ? L : b || this[a]
        }
        ,
        gb.string = function(a) {
            var b = this.x
              , c = this.y
              , d = b !== c ? "center" === b || "center" !== c && (this.precedance === H || this.forceY) ? [c, b] : [b, c] : [b];
            return a !== !1 ? d.join(" ") : d
        }
        ,
        gb.abbrev = function() {
            var a = this.string(!1);
            return a[0].charAt(0) + (a[1] && a[1].charAt(0) || "")
        }
        ,
        gb.clone = function() {
            return new A(this.string(),this.forceY)
        }
        ,
        z.toggle = function(a, c) {
            var e = this.cache
              , f = this.options
              , g = this.tooltip;
            if (c) {
                if (/over|enter/.test(c.type) && e.event && /out|leave/.test(e.event.type) && f.show.target.add(c.target).length === f.show.target.length && g.has(c.relatedTarget).length)
                    return this;
                e.event = d.event.fix(c)
            }
            if (this.waiting && !a && (this.hiddenDuringWait = D),
            !this.rendered)
                return a ? this.render(1) : this;
            if (this.destroyed || this.disabled)
                return this;
            var h, i, j, k = a ? "show" : "hide", l = this.options[k], m = (this.options[a ? "hide" : "show"],
            this.options.position), n = this.options.content, o = this.tooltip.css("width"), p = this.tooltip.is(":visible"), q = a || 1 === l.target.length, r = !c || l.target.length < 2 || e.target[0] === c.target;
            return (typeof a).search("boolean|number") && (a = !p),
            h = !g.is(":animated") && p === a && r,
            i = h ? F : !!this._trigger(k, [90]),
            this.destroyed ? this : (i !== E && a && this.focus(c),
            !i || h ? this : (d.attr(g[0], "aria-hidden", !a),
            a ? (this.mouse && (e.origin = d.event.fix(this.mouse)),
            d.isFunction(n.text) && this._updateContent(n.text, E),
            d.isFunction(n.title) && this._updateTitle(n.title, E),
            !C && "mouse" === m.target && m.adjust.mouse && (d(b).bind("mousemove." + S, this._storeMouse),
            C = D),
            o || g.css("width", g.outerWidth(E)),
            this.reposition(c, arguments[2]),
            o || g.css("width", ""),
            l.solo && ("string" == typeof l.solo ? d(l.solo) : d(W, l.solo)).not(g).not(l.target).qtip("hide", d.Event("tooltipsolo"))) : (clearTimeout(this.timers.show),
            delete e.origin,
            C && !d(W + '[tracking="true"]:visible', l.solo).not(g).length && (d(b).unbind("mousemove." + S),
            C = E),
            this.blur(c)),
            j = d.proxy(function() {
                a ? (db.ie && g[0].style.removeAttribute("filter"),
                g.css("overflow", ""),
                "string" == typeof l.autofocus && d(this.options.show.autofocus, g).focus(),
                this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : g.css({
                    display: "",
                    visibility: "",
                    opacity: "",
                    left: "",
                    top: ""
                }),
                this._trigger(a ? "visible" : "hidden")
            }, this),
            l.effect === E || q === E ? (g[k](),
            j()) : d.isFunction(l.effect) ? (g.stop(1, 1),
            l.effect.call(g, this),
            g.queue("fx", function(a) {
                j(),
                a()
            })) : g.fadeTo(90, a ? 1 : 0, j),
            a && l.target.trigger("qtip-" + this.id + "-inactive"),
            this))
        }
        ,
        z.show = function(a) {
            return this.toggle(D, a)
        }
        ,
        z.hide = function(a) {
            return this.toggle(E, a)
        }
        ,
        z.focus = function(a) {
            if (!this.rendered || this.destroyed)
                return this;
            var b = d(W)
              , c = this.tooltip
              , e = parseInt(c[0].style.zIndex, 10)
              , f = y.zindex + b.length;
            return c.hasClass($) || this._trigger("focus", [f], a) && (e !== f && (b.each(function() {
                this.style.zIndex > e && (this.style.zIndex = this.style.zIndex - 1)
            }),
            b.filter("." + $).qtip("blur", a)),
            c.addClass($)[0].style.zIndex = f),
            this
        }
        ,
        z.blur = function(a) {
            return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass($),
            this._trigger("blur", [this.tooltip.css("zIndex")], a),
            this)
        }
        ,
        z.disable = function(a) {
            return this.destroyed ? this : ("toggle" === a ? a = !(this.rendered ? this.tooltip.hasClass(ab) : this.disabled) : "boolean" != typeof a && (a = D),
            this.rendered && this.tooltip.toggleClass(ab, a).attr("aria-disabled", a),
            this.disabled = !!a,
            this)
        }
        ,
        z.enable = function() {
            return this.disable(E)
        }
        ,
        z._createButton = function() {
            var a = this
              , b = this.elements
              , c = b.tooltip
              , e = this.options.content.button
              , f = "string" == typeof e
              , g = f ? e : "Close tooltip";
            b.button && b.button.remove(),
            b.button = e.jquery ? e : d("<a />", {
                "class": "qtip-close " + (this.options.style.widget ? "" : S + "-icon"),
                title: g,
                "aria-label": g
            }).prepend(d("<span />", {
                "class": "ui-icon ui-icon-close",
                html: "&times;"
            })),
            b.button.appendTo(b.titlebar || c).attr("role", "button").click(function(b) {
                return c.hasClass(ab) || a.hide(b),
                E
            })
        }
        ,
        z._updateButton = function(a) {
            if (!this.rendered)
                return E;
            var b = this.elements.button;
            a ? this._createButton() : b.remove()
        }
        ,
        z._setWidget = function() {
            var a = this.options.style.widget
              , b = this.elements
              , c = b.tooltip
              , d = c.hasClass(ab);
            c.removeClass(ab),
            ab = a ? "ui-state-disabled" : "qtip-disabled",
            c.toggleClass(ab, d),
            c.toggleClass("ui-helper-reset " + k(), a).toggleClass(Z, this.options.style.def && !a),
            b.content && b.content.toggleClass(k("content"), a),
            b.titlebar && b.titlebar.toggleClass(k("header"), a),
            b.button && b.button.toggleClass(S + "-icon", !a)
        }
        ,
        z._storeMouse = function(a) {
            return (this.mouse = d.event.fix(a)).type = "mousemove",
            this
        }
        ,
        z._bind = function(a, b, c, e, f) {
            if (a && c && b.length) {
                var g = "." + this._id + (e ? "-" + e : "");
                return d(a).bind((b.split ? b : b.join(g + " ")) + g, d.proxy(c, f || this)),
                this
            }
        }
        ,
        z._unbind = function(a, b) {
            return a && d(a).unbind("." + this._id + (b ? "-" + b : "")),
            this
        }
        ,
        z._trigger = function(a, b, c) {
            var e = d.Event("tooltip" + a);
            return e.originalEvent = c && d.extend({}, c) || this.cache.event || F,
            this.triggering = a,
            this.tooltip.trigger(e, [this].concat(b || [])),
            this.triggering = E,
            !e.isDefaultPrevented()
        }
        ,
        z._bindEvents = function(a, b, c, e, f, g) {
            var h = c.filter(e).add(e.filter(c))
              , i = [];
            h.length && (d.each(b, function(b, c) {
                var e = d.inArray(c, a);
                e > -1 && i.push(a.splice(e, 1)[0])
            }),
            i.length && (this._bind(h, i, function(a) {
                var b = this.rendered ? this.tooltip[0].offsetWidth > 0 : !1;
                (b ? g : f).call(this, a)
            }),
            c = c.not(h),
            e = e.not(h))),
            this._bind(c, a, f),
            this._bind(e, b, g)
        }
        ,
        z._assignInitialEvents = function(a) {
            function b(a) {
                return this.disabled || this.destroyed ? E : (this.cache.event = a && d.event.fix(a),
                this.cache.target = a && d(a.target),
                clearTimeout(this.timers.show),
                void (this.timers.show = l.call(this, function() {
                    this.render("object" == typeof a || c.show.ready)
                }, c.prerender ? 0 : c.show.delay)))
            }
            var c = this.options
              , e = c.show.target
              , f = c.hide.target
              , g = c.show.event ? d.trim("" + c.show.event).split(" ") : []
              , h = c.hide.event ? d.trim("" + c.hide.event).split(" ") : [];
            this._bind(this.elements.target, ["remove", "removeqtip"], function() {
                this.destroy(!0)
            }, "destroy"),
            /mouse(over|enter)/i.test(c.show.event) && !/mouse(out|leave)/i.test(c.hide.event) && h.push("mouseleave"),
            this._bind(e, "mousemove", function(a) {
                this._storeMouse(a),
                this.cache.onTarget = D
            }),
            this._bindEvents(g, h, e, f, b, function() {
                return this.timers ? void clearTimeout(this.timers.show) : E
            }),
            (c.show.ready || c.prerender) && b.call(this, a)
        }
        ,
        z._assignEvents = function() {
            var c = this
              , e = this.options
              , f = e.position
              , g = this.tooltip
              , h = e.show.target
              , i = e.hide.target
              , j = f.container
              , k = f.viewport
              , l = d(b)
              , q = (d(b.body),
            d(a))
              , r = e.show.event ? d.trim("" + e.show.event).split(" ") : []
              , s = e.hide.event ? d.trim("" + e.hide.event).split(" ") : [];
            d.each(e.events, function(a, b) {
                c._bind(g, "toggle" === a ? ["tooltipshow", "tooltiphide"] : ["tooltip" + a], b, null , g)
            }),
            /mouse(out|leave)/i.test(e.hide.event) && "window" === e.hide.leave && this._bind(l, ["mouseout", "blur"], function(a) {
                /select|option/.test(a.target.nodeName) || a.relatedTarget || this.hide(a)
            }),
            e.hide.fixed ? i = i.add(g.addClass(Y)) : /mouse(over|enter)/i.test(e.show.event) && this._bind(i, "mouseleave", function() {
                clearTimeout(this.timers.show)
            }),
            ("" + e.hide.event).indexOf("unfocus") > -1 && this._bind(j.closest("html"), ["mousedown", "touchstart"], function(a) {
                var b = d(a.target)
                  , c = this.rendered && !this.tooltip.hasClass(ab) && this.tooltip[0].offsetWidth > 0
                  , e = b.parents(W).filter(this.tooltip[0]).length > 0;
                b[0] === this.target[0] || b[0] === this.tooltip[0] || e || this.target.has(b[0]).length || !c || this.hide(a)
            }),
            "number" == typeof e.hide.inactive && (this._bind(h, "qtip-" + this.id + "-inactive", o, "inactive"),
            this._bind(i.add(g), y.inactiveEvents, o)),
            this._bindEvents(r, s, h, i, m, n),
            this._bind(h.add(g), "mousemove", function(a) {
                if ("number" == typeof e.hide.distance) {
                    var b = this.cache.origin || {}
                      , c = this.options.hide.distance
                      , d = Math.abs;
                    (d(a.pageX - b.pageX) >= c || d(a.pageY - b.pageY) >= c) && this.hide(a)
                }
                this._storeMouse(a)
            }),
            "mouse" === f.target && f.adjust.mouse && (e.hide.event && this._bind(h, ["mouseenter", "mouseleave"], function(a) {
                return this.cache ? void (this.cache.onTarget = "mouseenter" === a.type) : E
            }),
            this._bind(l, "mousemove", function(a) {
                this.rendered && this.cache.onTarget && !this.tooltip.hasClass(ab) && this.tooltip[0].offsetWidth > 0 && this.reposition(a)
            })),
            (f.adjust.resize || k.length) && this._bind(d.event.special.resize ? k : q, "resize", p),
            f.adjust.scroll && this._bind(q.add(f.container), "scroll", p)
        }
        ,
        z._unassignEvents = function() {
            var c = this.options
              , e = c.show.target
              , f = c.hide.target
              , g = d.grep([this.elements.target[0], this.rendered && this.tooltip[0], c.position.container[0], c.position.viewport[0], c.position.container.closest("html")[0], a, b], function(a) {
                return "object" == typeof a
            });
            e && e.toArray && (g = g.concat(e.toArray())),
            f && f.toArray && (g = g.concat(f.toArray())),
            this._unbind(g)._unbind(g, "destroy")._unbind(g, "inactive")
        }
        ,
        d(function() {
            q(W, ["mouseenter", "mouseleave"], function(a) {
                var b = "mouseenter" === a.type
                  , c = d(a.currentTarget)
                  , e = d(a.relatedTarget || a.target)
                  , f = this.options;
                b ? (this.focus(a),
                c.hasClass(Y) && !c.hasClass(ab) && clearTimeout(this.timers.hide)) : "mouse" === f.position.target && f.position.adjust.mouse && f.hide.event && f.show.target && !e.closest(f.show.target[0]).length && this.hide(a),
                c.toggleClass(_, b)
            }),
            q("[" + U + "]", X, o)
        }),
        y = d.fn.qtip = function(a, b, e) {
            var f = ("" + a).toLowerCase()
              , g = F
              , i = d.makeArray(arguments).slice(1)
              , j = i[i.length - 1]
              , k = this[0] ? d.data(this[0], S) : F;
            return !arguments.length && k || "api" === f ? k : "string" == typeof a ? (this.each(function() {
                var a = d.data(this, S);
                if (!a)
                    return D;
                if (j && j.timeStamp && (a.cache.event = j),
                !b || "option" !== f && "options" !== f)
                    a[f] && a[f].apply(a, i);
                else {
                    if (e === c && !d.isPlainObject(b))
                        return g = a.get(b),
                        E;
                    a.set(b, e)
                }
            }),
            g !== F ? g : this) : "object" != typeof a && arguments.length ? void 0 : (k = h(d.extend(D, {}, a)),
            this.each(function(a) {
                var b, c;
                return c = d.isArray(k.id) ? k.id[a] : k.id,
                c = !c || c === E || c.length < 1 || y.api[c] ? y.nextid++ : c,
                b = r(d(this), c, k),
                b === E ? D : (y.api[c] = b,
                d.each(R, function() {
                    "initialize" === this.initialize && this(b)
                }),
                void b._assignInitialEvents(j))
            }))
        }
        ,
        d.qtip = e,
        y.api = {},
        d.each({
            attr: function(a, b) {
                if (this.length) {
                    var c = this[0]
                      , e = "title"
                      , f = d.data(c, "qtip");
                    if (a === e && f && "object" == typeof f && f.options.suppress)
                        return arguments.length < 2 ? d.attr(c, cb) : (f && f.options.content.attr === e && f.cache.attr && f.set("content.text", b),
                        this.attr(cb, b))
                }
                return d.fn["attr" + bb].apply(this, arguments)
            },
            clone: function(a) {
                var b = (d([]),
                d.fn["clone" + bb].apply(this, arguments));
                return a || b.filter("[" + cb + "]").attr("title", function() {
                    return d.attr(this, cb)
                }).removeAttr(cb),
                b
            }
        }, function(a, b) {
            if (!b || d.fn[a + bb])
                return D;
            var c = d.fn[a + bb] = d.fn[a];
            d.fn[a] = function() {
                return b.apply(this, arguments) || c.apply(this, arguments)
            }
        }),
        d.ui || (d["cleanData" + bb] = d.cleanData,
        d.cleanData = function(a) {
            for (var b, c = 0; (b = d(a[c])).length; c++)
                if (b.attr(T))
                    try {
                        b.triggerHandler("removeqtip")
                    } catch (e) {}
            d["cleanData" + bb].apply(this, arguments)
        }
        ),
        y.version = "2.2.1",
        y.nextid = 0,
        y.inactiveEvents = X,
        y.zindex = 15e3,
        y.defaults = {
            prerender: E,
            id: E,
            overwrite: D,
            suppress: D,
            content: {
                text: D,
                attr: "title",
                title: E,
                button: E
            },
            position: {
                my: "top left",
                at: "bottom right",
                target: E,
                container: E,
                viewport: E,
                adjust: {
                    x: 0,
                    y: 0,
                    mouse: D,
                    scroll: D,
                    resize: D,
                    method: "flipinvert flipinvert"
                },
                effect: function(a, b) {
                    d(this).animate(b, {
                        duration: 200,
                        queue: E
                    })
                }
            },
            show: {
                target: E,
                event: "mouseenter",
                effect: D,
                delay: 90,
                solo: E,
                ready: E,
                autofocus: E
            },
            hide: {
                target: E,
                event: "mouseleave",
                effect: D,
                delay: 0,
                fixed: E,
                inactive: E,
                leave: "window",
                distance: E
            },
            style: {
                classes: "",
                widget: E,
                width: E,
                height: E,
                def: D
            },
            events: {
                render: F,
                move: F,
                show: F,
                hide: F,
                toggle: F,
                visible: F,
                hidden: F,
                focus: F,
                blur: F
            }
        };
        var hb, ib = "margin", jb = "border", kb = "color", lb = "background-color", mb = "transparent", nb = " !important", ob = !!b.createElement("canvas").getContext, pb = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i, qb = {}, rb = ["Webkit", "O", "Moz", "ms"];
        if (ob)
            var sb = a.devicePixelRatio || 1
              , tb = function() {
                var a = b.createElement("canvas").getContext("2d");
                return a.backingStorePixelRatio || a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || 1
            }()
              , ub = sb / tb;
        else
            var vb = function(a, b, c) {
                return "<qtipvml:" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (b || "") + ' style="behavior: url(#default#VML); ' + (c || "") + '" />'
            }
            ;
        d.extend(v.prototype, {
            init: function(a) {
                var b, c;
                c = this.element = a.elements.tip = d("<div />", {
                    "class": S + "-tip"
                }).prependTo(a.tooltip),
                ob ? (b = d("<canvas />").appendTo(this.element)[0].getContext("2d"),
                b.lineJoin = "miter",
                b.miterLimit = 1e5,
                b.save()) : (b = vb("shape", 'coordorigin="0,0"', "position:absolute;"),
                this.element.html(b + b),
                a._bind(d("*", c).add(c), ["click", "mousedown"], function(a) {
                    a.stopPropagation()
                }, this._ns)),
                a._bind(a.tooltip, "tooltipmove", this.reposition, this._ns, this),
                this.create()
            },
            _swapDimensions: function() {
                this.size[0] = this.options.height,
                this.size[1] = this.options.width
            },
            _resetDimensions: function() {
                this.size[0] = this.options.width,
                this.size[1] = this.options.height
            },
            _useTitle: function(a) {
                var b = this.qtip.elements.titlebar;
                return b && (a.y === K || a.y === O && this.element.position().top + this.size[1] / 2 + this.options.offset < b.outerHeight(D))
            },
            _parseCorner: function(a) {
                var b = this.qtip.options.position.my;
                return a === E || b === E ? a = E : a === D ? a = new A(b.string()) : a.string || (a = new A(a),
                a.fixed = D),
                a
            },
            _parseWidth: function(a, b, c) {
                var d = this.qtip.elements
                  , e = jb + s(b) + "Width";
                return (c ? u(c, e) : u(d.content, e) || u(this._useTitle(a) && d.titlebar || d.content, e) || u(d.tooltip, e)) || 0
            },
            _parseRadius: function(a) {
                var b = this.qtip.elements
                  , c = jb + s(a.y) + s(a.x) + "Radius";
                return db.ie < 9 ? 0 : u(this._useTitle(a) && b.titlebar || b.content, c) || u(b.tooltip, c) || 0
            },
            _invalidColour: function(a, b, c) {
                var d = a.css(b);
                return !d || c && d === a.css(c) || pb.test(d) ? E : d
            },
            _parseColours: function(a) {
                var b = this.qtip.elements
                  , c = this.element.css("cssText", "")
                  , e = jb + s(a[a.precedance]) + s(kb)
                  , f = this._useTitle(a) && b.titlebar || b.content
                  , g = this._invalidColour
                  , h = [];
                return h[0] = g(c, lb) || g(f, lb) || g(b.content, lb) || g(b.tooltip, lb) || c.css(lb),
                h[1] = g(c, e, kb) || g(f, e, kb) || g(b.content, e, kb) || g(b.tooltip, e, kb) || b.tooltip.css(e),
                d("*", c).add(c).css("cssText", lb + ":" + mb + nb + ";" + jb + ":0" + nb + ";"),
                h
            },
            _calculateSize: function(a) {
                var b, c, d, e = a.precedance === H, f = this.options.width, g = this.options.height, h = "c" === a.abbrev(), i = (e ? f : g) * (h ? .5 : 1), j = Math.pow, k = Math.round, l = Math.sqrt(j(i, 2) + j(g, 2)), m = [this.border / i * l, this.border / g * l];
                return m[2] = Math.sqrt(j(m[0], 2) - j(this.border, 2)),
                m[3] = Math.sqrt(j(m[1], 2) - j(this.border, 2)),
                b = l + m[2] + m[3] + (h ? 0 : m[0]),
                c = b / l,
                d = [k(c * f), k(c * g)],
                e ? d : d.reverse()
            },
            _calculateTip: function(a, b, c) {
                c = c || 1,
                b = b || this.size;
                var d = b[0] * c
                  , e = b[1] * c
                  , f = Math.ceil(d / 2)
                  , g = Math.ceil(e / 2)
                  , h = {
                    br: [0, 0, d, e, d, 0],
                    bl: [0, 0, d, 0, 0, e],
                    tr: [0, e, d, 0, d, e],
                    tl: [0, 0, 0, e, d, e],
                    tc: [0, e, f, 0, d, e],
                    bc: [0, 0, d, 0, f, e],
                    rc: [0, 0, d, g, 0, e],
                    lc: [d, 0, d, e, 0, g]
                };
                return h.lt = h.br,
                h.rt = h.bl,
                h.lb = h.tr,
                h.rb = h.tl,
                h[a.abbrev()]
            },
            _drawCoords: function(a, b) {
                a.beginPath(),
                a.moveTo(b[0], b[1]),
                a.lineTo(b[2], b[3]),
                a.lineTo(b[4], b[5]),
                a.closePath()
            },
            create: function() {
                var a = this.corner = (ob || db.ie) && this._parseCorner(this.options.corner);
                return (this.enabled = !!this.corner && "c" !== this.corner.abbrev()) && (this.qtip.cache.corner = a.clone(),
                this.update()),
                this.element.toggle(this.enabled),
                this.corner
            },
            update: function(b, c) {
                if (!this.enabled)
                    return this;
                var e, f, g, h, i, j, k, l, m = this.qtip.elements, n = this.element, o = n.children(), p = this.options, q = this.size, r = p.mimic, s = Math.round;
                b || (b = this.qtip.cache.corner || this.corner),
                r === E ? r = b : (r = new A(r),
                r.precedance = b.precedance,
                "inherit" === r.x ? r.x = b.x : "inherit" === r.y ? r.y = b.y : r.x === r.y && (r[b.precedance] = b[b.precedance])),
                f = r.precedance,
                b.precedance === G ? this._swapDimensions() : this._resetDimensions(),
                e = this.color = this._parseColours(b),
                e[1] !== mb ? (l = this.border = this._parseWidth(b, b[b.precedance]),
                p.border && 1 > l && !pb.test(e[1]) && (e[0] = e[1]),
                this.border = l = p.border !== D ? p.border : l) : this.border = l = 0,
                k = this.size = this._calculateSize(b),
                n.css({
                    width: k[0],
                    height: k[1],
                    lineHeight: k[1] + "px"
                }),
                j = b.precedance === H ? [s(r.x === L ? l : r.x === N ? k[0] - q[0] - l : (k[0] - q[0]) / 2), s(r.y === K ? k[1] - q[1] : 0)] : [s(r.x === L ? k[0] - q[0] : 0), s(r.y === K ? l : r.y === M ? k[1] - q[1] - l : (k[1] - q[1]) / 2)],
                ob ? (g = o[0].getContext("2d"),
                g.restore(),
                g.save(),
                g.clearRect(0, 0, 6e3, 6e3),
                h = this._calculateTip(r, q, ub),
                i = this._calculateTip(r, this.size, ub),
                o.attr(I, k[0] * ub).attr(J, k[1] * ub),
                o.css(I, k[0]).css(J, k[1]),
                this._drawCoords(g, i),
                g.fillStyle = e[1],
                g.fill(),
                g.translate(j[0] * ub, j[1] * ub),
                this._drawCoords(g, h),
                g.fillStyle = e[0],
                g.fill()) : (h = this._calculateTip(r),
                h = "m" + h[0] + "," + h[1] + " l" + h[2] + "," + h[3] + " " + h[4] + "," + h[5] + " xe",
                j[2] = l && /^(r|b)/i.test(b.string()) ? 8 === db.ie ? 2 : 1 : 0,
                o.css({
                    coordsize: k[0] + l + " " + (k[1] + l),
                    antialias: "" + (r.string().indexOf(O) > -1),
                    left: j[0] - j[2] * Number(f === G),
                    top: j[1] - j[2] * Number(f === H),
                    width: k[0] + l,
                    height: k[1] + l
                }).each(function(a) {
                    var b = d(this);
                    b[b.prop ? "prop" : "attr"]({
                        coordsize: k[0] + l + " " + (k[1] + l),
                        path: h,
                        fillcolor: e[0],
                        filled: !!a,
                        stroked: !a
                    }).toggle(!(!l && !a)),
                    !a && b.html(vb("stroke", 'weight="' + 2 * l + 'px" color="' + e[1] + '" miterlimit="1000" joinstyle="miter"'))
                })),
                a.opera && setTimeout(function() {
                    m.tip.css({
                        display: "inline-block",
                        visibility: "visible"
                    })
                }, 1),
                c !== E && this.calculate(b, k)
            },
            calculate: function(a, b) {
                if (!this.enabled)
                    return E;
                var c, e, f = this, g = this.qtip.elements, h = this.element, i = this.options.offset, j = (g.tooltip.hasClass("ui-widget"),
                {});
                return a = a || this.corner,
                c = a.precedance,
                b = b || this._calculateSize(a),
                e = [a.x, a.y],
                c === G && e.reverse(),
                d.each(e, function(d, e) {
                    var h, k, l;
                    e === O ? (h = c === H ? L : K,
                    j[h] = "50%",
                    j[ib + "-" + h] = -Math.round(b[c === H ? 0 : 1] / 2) + i) : (h = f._parseWidth(a, e, g.tooltip),
                    k = f._parseWidth(a, e, g.content),
                    l = f._parseRadius(a),
                    j[e] = Math.max(-f.border, d ? k : i + (l > h ? l : -h)))
                }),
                j[a[c]] -= b[c === G ? 0 : 1],
                h.css({
                    margin: "",
                    top: "",
                    bottom: "",
                    left: "",
                    right: ""
                }).css(j),
                j
            },
            reposition: function(a, b, d) {
                function e(a, b, c, d, e) {
                    a === Q && j.precedance === b && k[d] && j[c] !== O ? j.precedance = j.precedance === G ? H : G : a !== Q && k[d] && (j[b] = j[b] === O ? k[d] > 0 ? d : e : j[b] === d ? e : d)
                }
                function f(a, b, e) {
                    j[a] === O ? p[ib + "-" + b] = o[a] = g[ib + "-" + b] - k[b] : (h = g[e] !== c ? [k[b], -g[b]] : [-k[b], g[b]],
                    (o[a] = Math.max(h[0], h[1])) > h[0] && (d[b] -= k[b],
                    o[b] = E),
                    p[g[e] !== c ? e : b] = o[a])
                }
                if (this.enabled) {
                    var g, h, i = b.cache, j = this.corner.clone(), k = d.adjusted, l = b.options.position.adjust.method.split(" "), m = l[0], n = l[1] || l[0], o = {
                        left: E,
                        top: E,
                        x: 0,
                        y: 0
                    }, p = {};
                    this.corner.fixed !== D && (e(m, G, H, L, N),
                    e(n, H, G, K, M),
                    (j.string() !== i.corner.string() || i.cornerTop !== k.top || i.cornerLeft !== k.left) && this.update(j, E)),
                    g = this.calculate(j),
                    g.right !== c && (g.left = -g.right),
                    g.bottom !== c && (g.top = -g.bottom),
                    g.user = this.offset,
                    (o.left = m === Q && !!k.left) && f(G, L, N),
                    (o.top = n === Q && !!k.top) && f(H, K, M),
                    this.element.css(p).toggle(!(o.x && o.y || j.x === O && o.y || j.y === O && o.x)),
                    d.left -= g.left.charAt ? g.user : m !== Q || o.top || !o.left && !o.top ? g.left + this.border : 0,
                    d.top -= g.top.charAt ? g.user : n !== Q || o.left || !o.left && !o.top ? g.top + this.border : 0,
                    i.cornerLeft = k.left,
                    i.cornerTop = k.top,
                    i.corner = j.clone()
                }
            },
            destroy: function() {
                this.qtip._unbind(this.qtip.tooltip, this._ns),
                this.qtip.elements.tip && this.qtip.elements.tip.find("*").remove().end().remove()
            }
        }),
        hb = R.tip = function(a) {
            return new v(a,a.options.style.tip)
        }
        ,
        hb.initialize = "render",
        hb.sanitize = function(a) {
            if (a.style && "tip"in a.style) {
                var b = a.style.tip;
                "object" != typeof b && (b = a.style.tip = {
                    corner: b
                }),
                /string|boolean/i.test(typeof b.corner) || (b.corner = D)
            }
        }
        ,
        B.tip = {
            "^position.my|style.tip.(corner|mimic|border)$": function() {
                this.create(),
                this.qtip.reposition()
            },
            "^style.tip.(height|width)$": function(a) {
                this.size = [a.width, a.height],
                this.update(),
                this.qtip.reposition()
            },
            "^content.title|style.(classes|widget)$": function() {
                this.update()
            }
        },
        d.extend(D, y.defaults, {
            style: {
                tip: {
                    corner: D,
                    mimic: E,
                    width: 6,
                    height: 6,
                    border: D,
                    offset: 0
                }
            }
        });
        var wb, xb, yb = "qtip-modal", zb = "." + yb;
        xb = function() {
            function a(a) {
                if (d.expr[":"].focusable)
                    return d.expr[":"].focusable;
                var b, c, e, f = !isNaN(d.attr(a, "tabindex")), g = a.nodeName && a.nodeName.toLowerCase();
                return "area" === g ? (b = a.parentNode,
                c = b.name,
                a.href && c && "map" === b.nodeName.toLowerCase() ? (e = d("img[usemap=#" + c + "]")[0],
                !!e && e.is(":visible")) : !1) : /input|select|textarea|button|object/.test(g) ? !a.disabled : "a" === g ? a.href || f : f
            }
            function c(a) {
                k.length < 1 && a.length ? a.not("body").blur() : k.first().focus()
            }
            function e(a) {
                if (i.is(":visible")) {
                    var b, e = d(a.target), h = f.tooltip, j = e.closest(W);
                    b = j.length < 1 ? E : parseInt(j[0].style.zIndex, 10) > parseInt(h[0].style.zIndex, 10),
                    b || e.closest(W)[0] === h[0] || c(e),
                    g = a.target === k[k.length - 1]
                }
            }
            var f, g, h, i, j = this, k = {};
            d.extend(j, {
                init: function() {
                    return i = j.elem = d("<div />", {
                        id: "qtip-overlay",
                        html: "<div></div>",
                        mousedown: function() {
                            return E
                        }
                    }).hide(),
                    d(b.body).bind("focusin" + zb, e),
                    d(b).bind("keydown" + zb, function(a) {
                        f && f.options.show.modal.escape && 27 === a.keyCode && f.hide(a)
                    }),
                    i.bind("click" + zb, function(a) {
                        f && f.options.show.modal.blur && f.hide(a)
                    }),
                    j
                },
                update: function(b) {
                    f = b,
                    k = b.options.show.modal.stealfocus !== E ? b.tooltip.find("*").filter(function() {
                        return a(this)
                    }) : []
                },
                toggle: function(a, e, g) {
                    var k = (d(b.body),
                    a.tooltip)
                      , l = a.options.show.modal
                      , m = l.effect
                      , n = e ? "show" : "hide"
                      , o = i.is(":visible")
                      , p = d(zb).filter(":visible:not(:animated)").not(k);
                    return j.update(a),
                    e && l.stealfocus !== E && c(d(":focus")),
                    i.toggleClass("blurs", l.blur),
                    e && i.appendTo(b.body),
                    i.is(":animated") && o === e && h !== E || !e && p.length ? j : (i.stop(D, E),
                    d.isFunction(m) ? m.call(i, e) : m === E ? i[n]() : i.fadeTo(parseInt(g, 10) || 90, e ? 1 : 0, function() {
                        e || i.hide()
                    }),
                    e || i.queue(function(a) {
                        i.css({
                            left: "",
                            top: ""
                        }),
                        d(zb).length || i.detach(),
                        a()
                    }),
                    h = e,
                    f.destroyed && (f = F),
                    j)
                }
            }),
            j.init()
        }
        ,
        xb = new xb,
        d.extend(w.prototype, {
            init: function(a) {
                var b = a.tooltip;
                return this.options.on ? (a.elements.overlay = xb.elem,
                b.addClass(yb).css("z-index", y.modal_zindex + d(zb).length),
                a._bind(b, ["tooltipshow", "tooltiphide"], function(a, c, e) {
                    var f = a.originalEvent;
                    if (a.target === b[0])
                        if (f && "tooltiphide" === a.type && /mouse(leave|enter)/.test(f.type) && d(f.relatedTarget).closest(xb.elem[0]).length)
                            try {
                                a.preventDefault()
                            } catch (g) {}
                        else
                            (!f || f && "tooltipsolo" !== f.type) && this.toggle(a, "tooltipshow" === a.type, e)
                }, this._ns, this),
                a._bind(b, "tooltipfocus", function(a, c) {
                    if (!a.isDefaultPrevented() && a.target === b[0]) {
                        var e = d(zb)
                          , f = y.modal_zindex + e.length
                          , g = parseInt(b[0].style.zIndex, 10);
                        xb.elem[0].style.zIndex = f - 1,
                        e.each(function() {
                            this.style.zIndex > g && (this.style.zIndex -= 1)
                        }),
                        e.filter("." + $).qtip("blur", a.originalEvent),
                        b.addClass($)[0].style.zIndex = f,
                        xb.update(c);
                        try {
                            a.preventDefault()
                        } catch (h) {}
                    }
                }, this._ns, this),
                void a._bind(b, "tooltiphide", function(a) {
                    a.target === b[0] && d(zb).filter(":visible").not(b).last().qtip("focus", a)
                }, this._ns, this)) : this
            },
            toggle: function(a, b, c) {
                return a && a.isDefaultPrevented() ? this : void xb.toggle(this.qtip, !!b, c)
            },
            destroy: function() {
                this.qtip.tooltip.removeClass(yb),
                this.qtip._unbind(this.qtip.tooltip, this._ns),
                xb.toggle(this.qtip, E),
                delete this.qtip.elements.overlay
            }
        }),
        wb = R.modal = function(a) {
            return new w(a,a.options.show.modal)
        }
        ,
        wb.sanitize = function(a) {
            a.show && ("object" != typeof a.show.modal ? a.show.modal = {
                on: !!a.show.modal
            } : "undefined" == typeof a.show.modal.on && (a.show.modal.on = D))
        }
        ,
        y.modal_zindex = y.zindex - 200,
        wb.initialize = "render",
        B.modal = {
            "^show.modal.(on|blur)$": function() {
                this.destroy(),
                this.init(),
                this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth > 0)
            }
        },
        d.extend(D, y.defaults, {
            show: {
                modal: {
                    on: E,
                    effect: D,
                    blur: D,
                    stealfocus: D,
                    escape: D
                }
            }
        }),
        R.viewport = function(c, d, e, f, g, h, i) {
            function j(a, b, c, e, f, g, h, i, j) {
                var k = d[f]
                  , s = u[a]
                  , t = v[a]
                  , w = c === Q
                  , x = s === f ? j : s === g ? -j : -j / 2
                  , y = t === f ? i : t === g ? -i : -i / 2
                  , z = q[f] + r[f] - (n ? 0 : m[f])
                  , A = z - k
                  , B = k + j - (h === I ? o : p) - z
                  , C = x - (u.precedance === a || s === u[b] ? y : 0) - (t === O ? i / 2 : 0);
                return w ? (C = (s === f ? 1 : -1) * x,
                d[f] += A > 0 ? A : B > 0 ? -B : 0,
                d[f] = Math.max(-m[f] + r[f], k - C, Math.min(Math.max(-m[f] + r[f] + (h === I ? o : p), k + C), d[f], "center" === s ? k - x : 1e9))) : (e *= c === P ? 2 : 0,
                A > 0 && (s !== f || B > 0) ? (d[f] -= C + e,
                l.invert(a, f)) : B > 0 && (s !== g || A > 0) && (d[f] -= (s === O ? -C : C) + e,
                l.invert(a, g)),
                d[f] < q && -d[f] > B && (d[f] = k,
                l = u.clone())),
                d[f] - k
            }
            var k, l, m, n, o, p, q, r, s = e.target, t = c.elements.tooltip, u = e.my, v = e.at, w = e.adjust, x = w.method.split(" "), y = x[0], z = x[1] || x[0], A = e.viewport, B = e.container, C = (c.cache,
            {
                left: 0,
                top: 0
            });
            return A.jquery && s[0] !== a && s[0] !== b.body && "none" !== w.method ? (m = B.offset() || C,
            n = "static" === B.css("position"),
            k = "fixed" === t.css("position"),
            o = A[0] === a ? A.width() : A.outerWidth(E),
            p = A[0] === a ? A.height() : A.outerHeight(E),
            q = {
                left: k ? 0 : A.scrollLeft(),
                top: k ? 0 : A.scrollTop()
            },
            r = A.offset() || C,
            ("shift" !== y || "shift" !== z) && (l = u.clone()),
            C = {
                left: "none" !== y ? j(G, H, y, w.x, L, N, I, f, h) : 0,
                top: "none" !== z ? j(H, G, z, w.y, K, M, J, g, i) : 0,
                my: l
            }) : C
        }
        ,
        R.polys = {
            polygon: function(a, b) {
                var c, d, e, f = {
                    width: 0,
                    height: 0,
                    position: {
                        top: 1e10,
                        right: 0,
                        bottom: 0,
                        left: 1e10
                    },
                    adjustable: E
                }, g = 0, h = [], i = 1, j = 1, k = 0, l = 0;
                for (g = a.length; g--; )
                    c = [parseInt(a[--g], 10), parseInt(a[g + 1], 10)],
                    c[0] > f.position.right && (f.position.right = c[0]),
                    c[0] < f.position.left && (f.position.left = c[0]),
                    c[1] > f.position.bottom && (f.position.bottom = c[1]),
                    c[1] < f.position.top && (f.position.top = c[1]),
                    h.push(c);
                if (d = f.width = Math.abs(f.position.right - f.position.left),
                e = f.height = Math.abs(f.position.bottom - f.position.top),
                "c" === b.abbrev())
                    f.position = {
                        left: f.position.left + f.width / 2,
                        top: f.position.top + f.height / 2
                    };
                else {
                    for (; d > 0 && e > 0 && i > 0 && j > 0; )
                        for (d = Math.floor(d / 2),
                        e = Math.floor(e / 2),
                        b.x === L ? i = d : b.x === N ? i = f.width - d : i += Math.floor(d / 2),
                        b.y === K ? j = e : b.y === M ? j = f.height - e : j += Math.floor(e / 2),
                        g = h.length; g-- && !(h.length < 2); )
                            k = h[g][0] - f.position.left,
                            l = h[g][1] - f.position.top,
                            (b.x === L && k >= i || b.x === N && i >= k || b.x === O && (i > k || k > f.width - i) || b.y === K && l >= j || b.y === M && j >= l || b.y === O && (j > l || l > f.height - j)) && h.splice(g, 1);
                    f.position = {
                        left: h[0][0],
                        top: h[0][1]
                    }
                }
                return f
            },
            rect: function(a, b, c, d) {
                return {
                    width: Math.abs(c - a),
                    height: Math.abs(d - b),
                    position: {
                        left: Math.min(a, c),
                        top: Math.min(b, d)
                    }
                }
            },
            _angles: {
                tc: 1.5,
                tr: 7 / 4,
                tl: 5 / 4,
                bc: .5,
                br: .25,
                bl: .75,
                rc: 2,
                lc: 1,
                c: 0
            },
            ellipse: function(a, b, c, d, e) {
                var f = R.polys._angles[e.abbrev()]
                  , g = 0 === f ? 0 : c * Math.cos(f * Math.PI)
                  , h = d * Math.sin(f * Math.PI);
                return {
                    width: 2 * c - Math.abs(g),
                    height: 2 * d - Math.abs(h),
                    position: {
                        left: a + g,
                        top: b + h
                    },
                    adjustable: E
                }
            },
            circle: function(a, b, c, d) {
                return R.polys.ellipse(a, b, c, c, d)
            }
        },
        R.svg = function(a, c, e) {
            for (var f, g, h, i, j, k, l, m, n, o = (d(b),
            c[0]), p = d(o.ownerSVGElement), q = o.ownerDocument, r = (parseInt(c.css("stroke-width"), 10) || 0) / 2; !o.getBBox; )
                o = o.parentNode;
            if (!o.getBBox || !o.parentNode)
                return E;
            switch (o.nodeName) {
            case "ellipse":
            case "circle":
                m = R.polys.ellipse(o.cx.baseVal.value, o.cy.baseVal.value, (o.rx || o.r).baseVal.value + r, (o.ry || o.r).baseVal.value + r, e);
                break;
            case "line":
            case "polygon":
            case "polyline":
                for (l = o.points || [{
                    x: o.x1.baseVal.value,
                    y: o.y1.baseVal.value
                }, {
                    x: o.x2.baseVal.value,
                    y: o.y2.baseVal.value
                }],
                m = [],
                k = -1,
                i = l.numberOfItems || l.length; ++k < i; )
                    j = l.getItem ? l.getItem(k) : l[k],
                    m.push.apply(m, [j.x, j.y]);
                m = R.polys.polygon(m, e);
                break;
            default:
                m = o.getBBox(),
                m = {
                    width: m.width,
                    height: m.height,
                    position: {
                        left: m.x,
                        top: m.y
                    }
                }
            }
            return n = m.position,
            p = p[0],
            p.createSVGPoint && (g = o.getScreenCTM(),
            l = p.createSVGPoint(),
            l.x = n.left,
            l.y = n.top,
            h = l.matrixTransform(g),
            n.left = h.x,
            n.top = h.y),
            q !== b && "mouse" !== a.position.target && (f = d((q.defaultView || q.parentWindow).frameElement).offset(),
            f && (n.left += f.left,
            n.top += f.top)),
            q = d(q),
            n.left += q.scrollLeft(),
            n.top += q.scrollTop(),
            m
        }
        ,
        R.imagemap = function(a, b, c) {
            b.jquery || (b = d(b));
            var e, f, g, h, i, j = (b.attr("shape") || "rect").toLowerCase().replace("poly", "polygon"), k = d('img[usemap="#' + b.parent("map").attr("name") + '"]'), l = d.trim(b.attr("coords")), m = l.replace(/,$/, "").split(",");
            if (!k.length)
                return E;
            if ("polygon" === j)
                h = R.polys.polygon(m, c);
            else {
                if (!R.polys[j])
                    return E;
                for (g = -1,
                i = m.length,
                f = []; ++g < i; )
                    f.push(parseInt(m[g], 10));
                h = R.polys[j].apply(this, f.concat(c))
            }
            return e = k.offset(),
            e.left += Math.ceil((k.outerWidth(E) - k.width()) / 2),
            e.top += Math.ceil((k.outerHeight(E) - k.height()) / 2),
            h.position.left += e.left,
            h.position.top += e.top,
            h
        }
        ;
        var Ab, Bb = '<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>';
        d.extend(x.prototype, {
            _scroll: function() {
                var b = this.qtip.elements.overlay;
                b && (b[0].style.top = d(a).scrollTop() + "px")
            },
            init: function(c) {
                var e = c.tooltip;
                d("select, object").length < 1 && (this.bgiframe = c.elements.bgiframe = d(Bb).appendTo(e),
                c._bind(e, "tooltipmove", this.adjustBGIFrame, this._ns, this)),
                this.redrawContainer = d("<div/>", {
                    id: S + "-rcontainer"
                }).appendTo(b.body),
                c.elements.overlay && c.elements.overlay.addClass("qtipmodal-ie6fix") && (c._bind(a, ["scroll", "resize"], this._scroll, this._ns, this),
                c._bind(e, ["tooltipshow"], this._scroll, this._ns, this)),
                this.redraw()
            },
            adjustBGIFrame: function() {
                var a, b, c = this.qtip.tooltip, d = {
                    height: c.outerHeight(E),
                    width: c.outerWidth(E)
                }, e = this.qtip.plugins.tip, f = this.qtip.elements.tip;
                b = parseInt(c.css("borderLeftWidth"), 10) || 0,
                b = {
                    left: -b,
                    top: -b
                },
                e && f && (a = "x" === e.corner.precedance ? [I, L] : [J, K],
                b[a[1]] -= f[a[0]]()),
                this.bgiframe.css(b).css(d)
            },
            redraw: function() {
                if (this.qtip.rendered < 1 || this.drawing)
                    return this;
                var a, b, c, d, e = this.qtip.tooltip, f = this.qtip.options.style, g = this.qtip.options.position.container;
                return this.qtip.drawing = 1,
                f.height && e.css(J, f.height),
                f.width ? e.css(I, f.width) : (e.css(I, "").appendTo(this.redrawContainer),
                b = e.width(),
                1 > b % 2 && (b += 1),
                c = e.css("maxWidth") || "",
                d = e.css("minWidth") || "",
                a = (c + d).indexOf("%") > -1 ? g.width() / 100 : 0,
                c = (c.indexOf("%") > -1 ? a : 1) * parseInt(c, 10) || b,
                d = (d.indexOf("%") > -1 ? a : 1) * parseInt(d, 10) || 0,
                b = c + d ? Math.min(Math.max(b, d), c) : b,
                e.css(I, Math.round(b)).appendTo(g)),
                this.drawing = 0,
                this
            },
            destroy: function() {
                this.bgiframe && this.bgiframe.remove(),
                this.qtip._unbind([a, this.qtip.tooltip], this._ns)
            }
        }),
        Ab = R.ie6 = function(a) {
            return 6 === db.ie ? new x(a) : E
        }
        ,
        Ab.initialize = "render",
        B.ie6 = {
            "^content|style$": function() {
                this.redraw()
            }
        }
    })
}(window, document);
jQuery(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory)
    } else {
        factory(jQuery)
    }
}(function($) {
    'use strict';
    var utils = (function() {
        return {
            escapeRegExChars: function(value) {
                return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            },
            createNode: function(containerClass) {
                var div = document.createElement('div');
                div.className = containerClass;
                div.style.position = 'absolute';
                div.style.display = 'none';
                return div
            }
        }
    }())
      , keys = {
        ESC: 27,
        TAB: 9,
        RETURN: 13,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
    };
    function Autocomplete(el, options) {
        var noop = function() {}
          , that = this
          , defaults = {
            autoSelectFirst: false,
            appendTo: 'body',
            serviceUrl: null ,
            lookup: null ,
            onSelect: null ,
            width: 'auto',
            minChars: 1,
            maxHeight: 300,
            deferRequestBy: 0,
            params: {},
            formatResult: Autocomplete.formatResult,
            delimiter: null ,
            zIndex: 9999,
            type: 'GET',
            noCache: false,
            onSearchStart: noop,
            onSearchComplete: noop,
            onSearchError: noop,
            containerClass: 'autocomplete-suggestions',
            tabDisabled: false,
            dataType: 'text',
            currentRequest: null ,
            triggerSelectOnValidInput: true,
            preventBadQueries: true,
            lookupFilter: function(suggestion, originalQuery, queryLowerCase) {
                return suggestion.value.toLowerCase().indexOf(queryLowerCase) !== -1
            },
            paramName: 'query',
            transformResult: function(response) {
                return typeof response === 'string' ? $.parseJSON(response) : response
            }
        };
        that.element = el;
        that.el = $(el);
        that.suggestions = [];
        that.badQueries = [];
        that.selectedIndex = -1;
        that.currentValue = that.element.value;
        that.intervalId = 0;
        that.cachedResponse = {};
        that.onChangeInterval = null ;
        that.onChange = null ;
        that.isLocal = false;
        that.suggestionsContainer = null ;
        that.options = $.extend({}, defaults, options);
        that.classes = {
            selected: 'autocomplete-selected',
            suggestion: 'autocomplete-suggestion'
        };
        that.hint = null ;
        that.hintValue = '';
        that.selection = null ;
        that.initialize();
        that.setOptions(options)
    }
    Autocomplete.utils = utils;
    $.Autocomplete = Autocomplete;
    Autocomplete.formatResult = function(suggestion, currentValue) {
        var pattern = '(' + utils.escapeRegExChars(currentValue) + ')';
        return suggestion.value.replace(new RegExp(pattern,'gi'), '<strong>$1<\/strong>')
    }
    ;
    Autocomplete.prototype = {
        killerFn: null ,
        initialize: function() {
            var that = this, suggestionSelector = '.' + that.classes.suggestion, selected = that.classes.selected, options = that.options, container;
            that.element.setAttribute('autocomplete', 'off');
            that.killerFn = function(e) {
                if ($(e.target).closest('.' + that.options.containerClass).length === 0) {
                    that.killSuggestions();
                    that.disableKillerFn()
                }
            }
            ;
            that.suggestionsContainer = Autocomplete.utils.createNode(options.containerClass);
            container = $(that.suggestionsContainer);
            container.appendTo(options.appendTo);
            if (options.width !== 'auto') {
                container.width(options.width)
            }
            container.on('mouseover.autocomplete', suggestionSelector, function() {
                that.activate($(this).data('index'))
            });
            container.on('mouseout.autocomplete', function() {
                that.selectedIndex = -1;
                container.children('.' + selected).removeClass(selected)
            });
            container.on('click.autocomplete', suggestionSelector, function() {
                that.select($(this).data('index'))
            });
            that.fixPosition();
            that.fixPositionCapture = function() {
                if (that.visible) {
                    that.fixPosition()
                }
            }
            ;
            $(window).on('resize.autocomplete', that.fixPositionCapture);
            that.el.on('keydown.autocomplete', function(e) {
                that.onKeyPress(e)
            });
            that.el.on('keyup.autocomplete', function(e) {
                that.onKeyUp(e)
            });
            that.el.on('blur.autocomplete', function() {
                that.onBlur()
            });
            that.el.on('focus.autocomplete', function() {
                that.onFocus()
            });
            that.el.on('change.autocomplete', function(e) {
                that.onKeyUp(e)
            })
        },
        onFocus: function() {
            var that = this;
            that.fixPosition();
            if (that.options.minChars <= that.el.val().length) {
                that.onValueChange()
            }
        },
        onBlur: function() {
            this.enableKillerFn()
        },
        setOptions: function(suppliedOptions) {
            var that = this
              , options = that.options;
            $.extend(options, suppliedOptions);
            that.isLocal = $.isArray(options.lookup);
            if (that.isLocal) {
                options.lookup = that.verifySuggestionsFormat(options.lookup)
            }
            $(that.suggestionsContainer).css({
                'max-height': options.maxHeight + 'px',
                'width': options.width + 'px',
                'z-index': options.zIndex
            })
        },
        clearCache: function() {
            this.cachedResponse = {};
            this.badQueries = []
        },
        clear: function() {
            this.clearCache();
            this.currentValue = '';
            this.suggestions = []
        },
        disable: function() {
            var that = this;
            that.disabled = true;
            if (that.currentRequest) {
                that.currentRequest.abort()
            }
        },
        enable: function() {
            this.disabled = false
        },
        fixPosition: function() {
            var that = this, offset, styles;
            if (that.options.appendTo !== 'body') {
                return
            }
            offset = that.el.offset();
            styles = {
                top: (offset.top + that.el.outerHeight()) + 'px',
                left: offset.left + 'px'
            };
            if (that.options.width === 'auto') {
                styles.width = (that.el.outerWidth() - 2) + 'px'
            }
            $(that.suggestionsContainer).css(styles)
        },
        enableKillerFn: function() {
            var that = this;
            $(document).on('click.autocomplete', that.killerFn)
        },
        disableKillerFn: function() {
            var that = this;
            $(document).off('click.autocomplete', that.killerFn)
        },
        killSuggestions: function() {
            var that = this;
            that.stopKillSuggestions();
            that.intervalId = window.setInterval(function() {
                that.hide();
                that.stopKillSuggestions()
            }, 50)
        },
        stopKillSuggestions: function() {
            window.clearInterval(this.intervalId)
        },
        isCursorAtEnd: function() {
            var that = this, valLength = that.el.val().length, selectionStart = that.element.selectionStart, range;
            if (typeof selectionStart === 'number') {
                return selectionStart === valLength
            }
            if (document.selection) {
                range = document.selection.createRange();
                range.moveStart('character', -valLength);
                return valLength === range.text.length
            }
            return true
        },
        onKeyPress: function(e) {
            var that = this;
            if (!that.disabled && !that.visible && e.which === keys.DOWN && that.currentValue) {
                that.suggest();
                return
            }
            if (that.disabled || !that.visible) {
                return
            }
            switch (e.which) {
            case keys.ESC:
                that.el.val(that.currentValue);
                that.hide();
                break;
            case keys.RIGHT:
                if (that.hint && that.options.onHint && that.isCursorAtEnd()) {
                    that.selectHint();
                    break
                }
                return;
            case keys.TAB:
                if (that.hint && that.options.onHint) {
                    that.selectHint();
                    return
                }
            case keys.RETURN:
                if (that.selectedIndex === -1) {
                    that.hide();
                    return
                }
                that.select(that.selectedIndex);
                if (e.which === keys.TAB && that.options.tabDisabled === false) {
                    return
                }
                break;
            case keys.UP:
                that.moveUp();
                break;
            case keys.DOWN:
                that.moveDown();
                break;
            default:
                return
            }
            e.stopImmediatePropagation();
            e.preventDefault()
        },
        onKeyUp: function(e) {
            var that = this;
            if (that.disabled) {
                return
            }
            switch (e.which) {
            case keys.UP:
            case keys.DOWN:
                return
            }
            clearInterval(that.onChangeInterval);
            if (that.currentValue !== that.el.val()) {
                that.findBestHint();
                if (that.options.deferRequestBy > 0) {
                    that.onChangeInterval = setInterval(function() {
                        that.onValueChange()
                    }, that.options.deferRequestBy)
                } else {
                    that.onValueChange()
                }
            }
        },
        onValueChange: function() {
            var that = this, options = that.options, value = that.el.val(), query = that.getQuery(value), index;
            if (that.selection) {
                that.selection = null ;
                (options.onInvalidateSelection || $.noop).call(that.element)
            }
            clearInterval(that.onChangeInterval);
            that.currentValue = value;
            that.selectedIndex = -1;
            if (options.triggerSelectOnValidInput) {
                index = that.findSuggestionIndex(query);
                if (index !== -1) {
                    that.select(index);
                    return
                }
            }
            if (query.length < options.minChars) {
                that.hide()
            } else {
                that.getSuggestions(query)
            }
        },
        findSuggestionIndex: function(query) {
            var that = this
              , index = -1
              , queryLowerCase = query.toLowerCase();
            $.each(that.suggestions, function(i, suggestion) {
                if (suggestion.value.toLowerCase() === queryLowerCase) {
                    index = i;
                    return false
                }
            });
            return index
        },
        getQuery: function(value) {
            var delimiter = this.options.delimiter, parts;
            if (!delimiter) {
                return value
            }
            parts = value.split(delimiter);
            return $.trim(parts[parts.length - 1])
        },
        getSuggestionsLocal: function(query) {
            var that = this, options = that.options, queryLowerCase = query.toLowerCase(), filter = options.lookupFilter, limit = parseInt(options.lookupLimit, 10), data;
            data = {
                suggestions: $.grep(options.lookup, function(suggestion) {
                    return filter(suggestion, query, queryLowerCase)
                })
            };
            if (limit && data.suggestions.length > limit) {
                data.suggestions = data.suggestions.slice(0, limit)
            }
            return data
        },
        getSuggestions: function(q) {
            var response, that = this, options = that.options, serviceUrl = options.serviceUrl, params, cacheKey;
            options.params[options.paramName] = q;
            params = options.ignoreParams ? null : options.params;
            if (that.isLocal) {
                response = that.getSuggestionsLocal(q)
            } else {
                if ($.isFunction(serviceUrl)) {
                    serviceUrl = serviceUrl.call(that.element, q)
                }
                cacheKey = serviceUrl + '?' + $.param(params || {});
                response = that.cachedResponse[cacheKey]
            }
            if (response && $.isArray(response.suggestions)) {
                that.suggestions = response.suggestions;
                that.suggest()
            } else if (!that.isBadQuery(q)) {
                if (options.onSearchStart.call(that.element, options.params) === false) {
                    return
                }
                if (that.currentRequest) {
                    that.currentRequest.abort()
                }
                that.currentRequest = $.ajax({
                    url: serviceUrl,
                    data: params,
                    type: options.type,
                    dataType: options.dataType
                }).done(function(data) {
                    var result;
                    that.currentRequest = null ;
                    result = options.transformResult(data);
                    that.processResponse(result, q, cacheKey);
                    options.onSearchComplete.call(that.element, q, result.suggestions)
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    options.onSearchError.call(that.element, q, jqXHR, textStatus, errorThrown)
                })
            }
        },
        isBadQuery: function(q) {
            if (!this.options.preventBadQueries) {
                return false
            }
            var badQueries = this.badQueries
              , i = badQueries.length;
            while (i--) {
                if (q.indexOf(badQueries[i]) === 0) {
                    return true
                }
            }
            return false
        },
        hide: function() {
            var that = this;
            that.visible = false;
            that.selectedIndex = -1;
            $(that.suggestionsContainer).hide();
            that.signalHint(null )
        },
        suggest: function() {
            if (this.suggestions.length === 0) {
                this.hide();
                return
            }
            var that = this, options = that.options, formatResult = options.formatResult, value = that.getQuery(that.currentValue), className = that.classes.suggestion, classSelected = that.classes.selected, container = $(that.suggestionsContainer), beforeRender = options.beforeRender, html = '', index, width;
            if (options.triggerSelectOnValidInput) {
                index = that.findSuggestionIndex(value);
                if (index !== -1) {
                    that.select(index);
                    return
                }
            }
            $.each(that.suggestions, function(i, suggestion) {
                html += '<div class="' + className + '" data-index="' + i + '">' + formatResult(suggestion, value) + '</div>'
            });
            if (options.width === 'auto') {
                width = that.el.outerWidth() - 2;
                container.width(width > 0 ? width : 300)
            }
            container.html(html);
            if (options.autoSelectFirst) {
                that.selectedIndex = 0;
                container.children().first().addClass(classSelected)
            }
            if ($.isFunction(beforeRender)) {
                beforeRender.call(that.element, container)
            }
            container.show();
            that.visible = true;
            that.findBestHint()
        },
        findBestHint: function() {
            var that = this
              , value = that.el.val().toLowerCase()
              , bestMatch = null ;
            if (!value) {
                return
            }
            $.each(that.suggestions, function(i, suggestion) {
                var foundMatch = suggestion.value.toLowerCase().indexOf(value) === 0;
                if (foundMatch) {
                    bestMatch = suggestion
                }
                return !foundMatch
            });
            that.signalHint(bestMatch)
        },
        signalHint: function(suggestion) {
            var hintValue = ''
              , that = this;
            if (suggestion) {
                hintValue = that.currentValue + suggestion.value.substr(that.currentValue.length)
            }
            if (that.hintValue !== hintValue) {
                that.hintValue = hintValue;
                that.hint = suggestion;
                (this.options.onHint || $.noop)(hintValue)
            }
        },
        verifySuggestionsFormat: function(suggestions) {
            if (suggestions.length && typeof suggestions[0] === 'string') {
                return $.map(suggestions, function(value) {
                    return {
                        value: value,
                        data: null
                    }
                })
            }
            return suggestions
        },
        processResponse: function(result, originalQuery, cacheKey) {
            var that = this
              , options = that.options;
            result.suggestions = that.verifySuggestionsFormat(result.suggestions);
            if (!options.noCache) {
                that.cachedResponse[cacheKey] = result;
                if (options.preventBadQueries && result.suggestions.length === 0) {
                    that.badQueries.push(originalQuery)
                }
            }
            if (originalQuery !== that.getQuery(that.currentValue)) {
                return
            }
            that.suggestions = result.suggestions;
            that.suggest()
        },
        activate: function(index) {
            var that = this, activeItem, selected = that.classes.selected, container = $(that.suggestionsContainer), children = container.children();
            container.children('.' + selected).removeClass(selected);
            that.selectedIndex = index;
            if (that.selectedIndex !== -1 && children.length > that.selectedIndex) {
                activeItem = children.get(that.selectedIndex);
                $(activeItem).addClass(selected);
                return activeItem
            }
            return null
        },
        selectHint: function() {
            var that = this
              , i = $.inArray(that.hint, that.suggestions);
            that.select(i)
        },
        select: function(i) {
            var that = this;
            that.hide();
            that.onSelect(i)
        },
        moveUp: function() {
            var that = this;
            if (that.selectedIndex === -1) {
                return
            }
            if (that.selectedIndex === 0) {
                $(that.suggestionsContainer).children().first().removeClass(that.classes.selected);
                that.selectedIndex = -1;
                that.el.val(that.currentValue);
                that.findBestHint();
                return
            }
            that.adjustScroll(that.selectedIndex - 1)
        },
        moveDown: function() {
            var that = this;
            if (that.selectedIndex === (that.suggestions.length - 1)) {
                return
            }
            that.adjustScroll(that.selectedIndex + 1)
        },
        adjustScroll: function(index) {
            var that = this, activeItem = that.activate(index), offsetTop, upperBound, lowerBound, heightDelta = 25;
            if (!activeItem) {
                return
            }
            offsetTop = activeItem.offsetTop;
            upperBound = $(that.suggestionsContainer).scrollTop();
            lowerBound = upperBound + that.options.maxHeight - heightDelta;
            if (offsetTop < upperBound) {
                $(that.suggestionsContainer).scrollTop(offsetTop)
            } else if (offsetTop > lowerBound) {
                $(that.suggestionsContainer).scrollTop(offsetTop - that.options.maxHeight + heightDelta)
            }
            that.el.val(that.getValue(that.suggestions[index].value));
            that.signalHint(null )
        },
        onSelect: function(index) {
            var that = this
              , onSelectCallback = that.options.onSelect
              , suggestion = that.suggestions[index];
            that.currentValue = that.getValue(suggestion.value);
            if (that.currentValue !== that.el.val()) {
                that.el.val(that.currentValue)
            }
            that.signalHint(null );
            that.suggestions = [];
            that.selection = suggestion;
            if ($.isFunction(onSelectCallback)) {
                onSelectCallback.call(that.element, suggestion)
            }
        },
        getValue: function(value) {
            var that = this, delimiter = that.options.delimiter, currentValue, parts;
            if (!delimiter) {
                return value
            }
            currentValue = that.currentValue;
            parts = currentValue.split(delimiter);
            if (parts.length === 1) {
                return value
            }
            return currentValue.substr(0, currentValue.length - parts[parts.length - 1].length) + value
        },
        dispose: function() {
            var that = this;
            that.el.off('.autocomplete').removeData('autocomplete');
            that.disableKillerFn();
            $(window).off('resize.autocomplete', that.fixPositionCapture);
            $(that.suggestionsContainer).remove()
        }
    };
    $.fn.autocomplete = function(options, args) {
        var dataKey = 'autocomplete';
        if (arguments.length === 0) {
            return this.first().data(dataKey)
        }
        return this.each(function() {
            var inputElement = $(this)
              , instance = inputElement.data(dataKey);
            if (typeof options === 'string') {
                if (instance && typeof instance[options] === 'function') {
                    instance[options](args)
                }
            } else {
                if (instance && instance.dispose) {
                    instance.dispose()
                }
                instance = new Autocomplete(this,options);
                inputElement.data(dataKey, instance)
            }
        })
    }
}));
(function(C, r, g) {
    function t(a, b, h) {
        a.addEventListener ? a.addEventListener(b, h, !1) : a.attachEvent("on" + b, h)
    }
    function x(a) {
        if ("keypress" == a.type) {
            var b = String.fromCharCode(a.which);
            a.shiftKey || (b = b.toLowerCase());
            return b
        }
        return l[a.which] ? l[a.which] : p[a.which] ? p[a.which] : String.fromCharCode(a.which).toLowerCase()
    }
    function D(a) {
        var b = [];
        a.shiftKey && b.push("shift");
        a.altKey && b.push("alt");
        a.ctrlKey && b.push("ctrl");
        a.metaKey && b.push("meta");
        return b
    }
    function u(a) {
        return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a
    }
    function y(a, b) {
        var h, c, e, g = [];
        h = a;
        "+" === h ? h = ["+"] : (h = h.replace(/\+{2}/g, "+plus"),
        h = h.split("+"));
        for (e = 0; e < h.length; ++e)
            c = h[e],
            z[c] && (c = z[c]),
            b && "keypress" != b && A[c] && (c = A[c],
            g.push("shift")),
            u(c) && g.push(c);
        h = c;
        e = b;
        if (!e) {
            if (!k) {
                k = {};
                for (var m in l)
                    95 < m && 112 > m || l.hasOwnProperty(m) && (k[l[m]] = m)
            }
            e = k[h] ? "keydown" : "keypress"
        }
        "keypress" == e && g.length && (e = "keydown");
        return {
            key: c,
            modifiers: g,
            action: e
        }
    }
    function B(a, b) {
        return a === r ? !1 : a === b ? !0 : B(a.parentNode, b)
    }
    function c(a) {
        function b(a) {
            a = a || {};
            var b = !1, n;
            for (n in q)
                a[n] ? b = !0 : q[n] = 0;
            b || (v = !1)
        }
        function h(a, b, n, f, c, h) {
            var g, e, l = [], m = n.type;
            if (!d._callbacks[a])
                return [];
            "keyup" == m && u(a) && (b = [a]);
            for (g = 0; g < d._callbacks[a].length; ++g)
                if (e = d._callbacks[a][g],
                (f || !e.seq || q[e.seq] == e.level) && m == e.action) {
                    var k;
                    (k = "keypress" == m && !n.metaKey && !n.ctrlKey) || (k = e.modifiers,
                    k = b.sort().join(",") === k.sort().join(","));
                    k && (k = f && e.seq == f && e.level == h,
                    (!f && e.combo == c || k) && d._callbacks[a].splice(g, 1),
                    l.push(e))
                }
            return l
        }
        function g(a, b, n, f) {
            d.stopCallback(b, b.target || b.srcElement, n, f) || !1 !== a(b, n) || (b.preventDefault ? b.preventDefault() : b.returnValue = !1,
            b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0)
        }
        function e(a) {
            "number" !== typeof a.which && (a.which = a.keyCode);
            var b = x(a);
            b && ("keyup" == a.type && w === b ? w = !1 : d.handleKey(b, D(a), a))
        }
        function l(a, c, n, f) {
            function e(c) {
                return function() {
                    v = c;
                    ++q[a];
                    clearTimeout(k);
                    k = setTimeout(b, 1E3)
                }
            }
            function h(c) {
                g(n, c, a);
                "keyup" !== f && (w = x(c));
                setTimeout(b, 10)
            }
            for (var d = q[a] = 0; d < c.length; ++d) {
                var p = d + 1 === c.length ? h : e(f || y(c[d + 1]).action);
                m(c[d], p, f, a, d)
            }
        }
        function m(a, b, c, f, e) {
            d._directMap[a + ":" + c] = b;
            a = a.replace(/\s+/g, " ");
            var g = a.split(" ");
            1 < g.length ? l(a, g, b, c) : (c = y(a, c),
            d._callbacks[c.key] = d._callbacks[c.key] || [],
            h(c.key, c.modifiers, {
                type: c.action
            }, f, a, e),
            d._callbacks[c.key][f ? "unshift" : "push"]({
                callback: b,
                modifiers: c.modifiers,
                action: c.action,
                seq: f,
                level: e,
                combo: a
            }))
        }
        var d = this;
        a = a || r;
        if (!(d instanceof c))
            return new c(a);
        d.target = a;
        d._callbacks = {};
        d._directMap = {};
        var q = {}, k, w = !1, p = !1, v = !1;
        d._handleKey = function(a, c, e) {
            var f = h(a, c, e), d;
            c = {};
            var k = 0
              , l = !1;
            for (d = 0; d < f.length; ++d)
                f[d].seq && (k = Math.max(k, f[d].level));
            for (d = 0; d < f.length; ++d)
                f[d].seq ? f[d].level == k && (l = !0,
                c[f[d].seq] = 1,
                g(f[d].callback, e, f[d].combo, f[d].seq)) : l || g(f[d].callback, e, f[d].combo);
            f = "keypress" == e.type && p;
            e.type != v || u(a) || f || b(c);
            p = l && "keydown" == e.type
        }
        ;
        d._bindMultiple = function(a, b, c) {
            for (var d = 0; d < a.length; ++d)
                m(a[d], b, c)
        }
        ;
        t(a, "keypress", e);
        t(a, "keydown", e);
        t(a, "keyup", e)
    }
    var l = {
        8: "backspace",
        9: "tab",
        13: "enter",
        16: "shift",
        17: "ctrl",
        18: "alt",
        20: "capslock",
        27: "esc",
        32: "space",
        33: "pageup",
        34: "pagedown",
        35: "end",
        36: "home",
        37: "left",
        38: "up",
        39: "right",
        40: "down",
        45: "ins",
        46: "del",
        91: "meta",
        93: "meta",
        224: "meta"
    }, p = {
        106: "*",
        107: "+",
        109: "-",
        110: ".",
        111: "/",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'"
    }, A = {
        "~": "`",
        "!": "1",
        "@": "2",
        "#": "3",
        $: "4",
        "%": "5",
        "^": "6",
        "&": "7",
        "*": "8",
        "(": "9",
        ")": "0",
        _: "-",
        "+": "=",
        ":": ";",
        '"': "'",
        "<": ",",
        ">": ".",
        "?": "/",
        "|": "\\"
    }, z = {
        option: "alt",
        command: "meta",
        "return": "enter",
        escape: "esc",
        plus: "+",
        mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    }, k;
    for (g = 1; 20 > g; ++g)
        l[111 + g] = "f" + g;
    for (g = 0; 9 >= g; ++g)
        l[g + 96] = g;
    c.prototype.bind = function(a, b, c) {
        a = a instanceof Array ? a : [a];
        this._bindMultiple.call(this, a, b, c);
        return this
    }
    ;
    c.prototype.unbind = function(a, b) {
        return this.bind.call(this, a, function() {}, b)
    }
    ;
    c.prototype.trigger = function(a, b) {
        if (this._directMap[a + ":" + b])
            this._directMap[a + ":" + b]({}, a);
        return this
    }
    ;
    c.prototype.reset = function() {
        this._callbacks = {};
        this._directMap = {};
        return this
    }
    ;
    c.prototype.stopCallback = function(a, b) {
        return -1 < (" " + b.className + " ").indexOf(" mousetrap ") || B(b, this.target) ? !1 : "INPUT" == b.tagName || "SELECT" == b.tagName || "TEXTAREA" == b.tagName || b.isContentEditable
    }
    ;
    c.prototype.handleKey = function() {
        return this._handleKey.apply(this, arguments)
    }
    ;
    c.init = function() {
        var a = c(r), b;
        for (b in a)
            "_" !== b.charAt(0) && (c[b] = function(b) {
                return function() {
                    return a[b].apply(a, arguments)
                }
            }(b))
    }
    ;
    c.init();
    C.Mousetrap = c;
    "undefined" !== typeof module && module.exports && (module.exports = c);
    "function" === typeof define && define.amd && define(function() {
        return c
    })
})(window, document);
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.9 (Thu, 11 Sep 2014 13:31:59 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
var XRegExp;
XRegExp = XRegExp || (function(undef) {
    "use strict";
    var self, addToken, add, features = {
        natives: false,
        extensibility: false
    }, nativ = {
        exec: RegExp.prototype.exec,
        test: RegExp.prototype.test,
        match: String.prototype.match,
        replace: String.prototype.replace,
        split: String.prototype.split
    }, fixed = {}, cache = {}, tokens = [], defaultScope = "default", classScope = "class", nativeTokens = {
        "default": /^(?:\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9]\d*|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S])|\(\?[:=!]|[?*+]\?|{\d+(?:,\d*)?}\??)/,
        "class": /^(?:\\(?:[0-3][0-7]{0,2}|[4-7][0-7]?|x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|c[A-Za-z]|[\s\S]))/
    }, replacementToken = /\$(?:{([\w$]+)}|(\d\d?|[\s\S]))/g, duplicateFlags = /([\s\S])(?=[\s\S]*\1)/g, quantifier = /^(?:[?*+]|{\d+(?:,\d*)?})\??/, compliantExecNpcg = nativ.exec.call(/()??/, "")[1] === undef, hasNativeY = RegExp.prototype.sticky !== undef, isInsideConstructor = false, registeredFlags = "gim" + (hasNativeY ? "y" : "");
    function augment(regex, captureNames, isNative) {
        var p;
        for (p in self.prototype) {
            if (self.prototype.hasOwnProperty(p)) {
                regex[p] = self.prototype[p];
            }
        }
        regex.xregexp = {
            captureNames: captureNames,
            isNative: !!isNative
        };
        return regex;
    }
    function getNativeFlags(regex) {
        return (regex.global ? "g" : "") + (regex.ignoreCase ? "i" : "") + (regex.multiline ? "m" : "") + (regex.extended ? "x" : "") + (regex.sticky ? "y" : "");
    }
    function copy(regex, addFlags, removeFlags) {
        if (!self.isRegExp(regex)) {
            throw new TypeError("type RegExp expected");
        }
        var flags = nativ.replace.call(getNativeFlags(regex) + (addFlags || ""), duplicateFlags, "");
        if (removeFlags) {
            flags = nativ.replace.call(flags, new RegExp("[" + removeFlags + "]+","g"), "");
        }
        if (regex.xregexp && !regex.xregexp.isNative) {
            regex = augment(self(regex.source, flags), regex.xregexp.captureNames ? regex.xregexp.captureNames.slice(0) : null );
        } else {
            regex = augment(new RegExp(regex.source,flags), null , true);
        }
        return regex;
    }
    function lastIndexOf(array, value) {
        var i = array.length;
        if (Array.prototype.lastIndexOf) {
            return array.lastIndexOf(value);
        }
        while (i--) {
            if (array[i] === value) {
                return i;
            }
        }
        return -1;
    }
    function isType(value, type) {
        return Object.prototype.toString.call(value).toLowerCase() === "[object " + type + "]";
    }
    function prepareOptions(value) {
        value = value || {};
        if (value === "all" || value.all) {
            value = {
                natives: true,
                extensibility: true
            };
        } else if (isType(value, "string")) {
            value = self.forEach(value, /[^\s,]+/, function(m) {
                this[m] = true;
            }, {});
        }
        return value;
    }
    function runTokens(pattern, pos, scope, context) {
        var i = tokens.length, result = null , match, t;
        isInsideConstructor = true;
        try {
            while (i--) {
                t = tokens[i];
                if ((t.scope === "all" || t.scope === scope) && (!t.trigger || t.trigger.call(context))) {
                    t.pattern.lastIndex = pos;
                    match = fixed.exec.call(t.pattern, pattern);
                    if (match && match.index === pos) {
                        result = {
                            output: t.handler.call(context, match, scope),
                            match: match
                        };
                        break;
                    }
                }
            }
        } catch (err) {
            throw err;
        } finally {
            isInsideConstructor = false;
        }
        return result;
    }
    function setExtensibility(on) {
        self.addToken = addToken[on ? "on" : "off"];
        features.extensibility = on;
    }
    function setNatives(on) {
        RegExp.prototype.exec = (on ? fixed : nativ).exec;
        RegExp.prototype.test = (on ? fixed : nativ).test;
        String.prototype.match = (on ? fixed : nativ).match;
        String.prototype.replace = (on ? fixed : nativ).replace;
        String.prototype.split = (on ? fixed : nativ).split;
        features.natives = on;
    }
    self = function(pattern, flags) {
        if (self.isRegExp(pattern)) {
            if (flags !== undef) {
                throw new TypeError("can't supply flags when constructing one RegExp from another");
            }
            return copy(pattern);
        }
        if (isInsideConstructor) {
            throw new Error("can't call the XRegExp constructor within token definition functions");
        }
        var output = [], scope = defaultScope, tokenContext = {
            hasNamedCapture: false,
            captureNames: [],
            hasFlag: function(flag) {
                return flags.indexOf(flag) > -1;
            }
        }, pos = 0, tokenResult, match, chr;
        pattern = pattern === undef ? "" : String(pattern);
        flags = flags === undef ? "" : String(flags);
        if (nativ.match.call(flags, duplicateFlags)) {
            throw new SyntaxError("invalid duplicate regular expression flag");
        }
        pattern = nativ.replace.call(pattern, /^\(\?([\w$]+)\)/, function($0, $1) {
            if (nativ.test.call(/[gy]/, $1)) {
                throw new SyntaxError("can't use flag g or y in mode modifier");
            }
            flags = nativ.replace.call(flags + $1, duplicateFlags, "");
            return "";
        });
        self.forEach(flags, /[\s\S]/, function(m) {
            if (registeredFlags.indexOf(m[0]) < 0) {
                throw new SyntaxError("invalid regular expression flag " + m[0]);
            }
        });
        while (pos < pattern.length) {
            tokenResult = runTokens(pattern, pos, scope, tokenContext);
            if (tokenResult) {
                output.push(tokenResult.output);
                pos += (tokenResult.match[0].length || 1);
            } else {
                match = nativ.exec.call(nativeTokens[scope], pattern.slice(pos));
                if (match) {
                    output.push(match[0]);
                    pos += match[0].length;
                } else {
                    chr = pattern.charAt(pos);
                    if (chr === "[") {
                        scope = classScope;
                    } else if (chr === "]") {
                        scope = defaultScope;
                    }
                    output.push(chr);
                    ++pos;
                }
            }
        }
        return augment(new RegExp(output.join(""),nativ.replace.call(flags, /[^gimy]+/g, "")), tokenContext.hasNamedCapture ? tokenContext.captureNames : null );
    }
    ;
    addToken = {
        on: function(regex, handler, options) {
            options = options || {};
            if (regex) {
                tokens.push({
                    pattern: copy(regex, "g" + (hasNativeY ? "y" : "")),
                    handler: handler,
                    scope: options.scope || defaultScope,
                    trigger: options.trigger || null
                });
            }
            if (options.customFlags) {
                registeredFlags = nativ.replace.call(registeredFlags + options.customFlags, duplicateFlags, "");
            }
        },
        off: function() {
            throw new Error("extensibility must be installed before using addToken");
        }
    };
    self.addToken = addToken.off;
    self.cache = function(pattern, flags) {
        var key = pattern + "/" + (flags || "");
        return cache[key] || (cache[key] = self(pattern, flags));
    }
    ;
    self.escape = function(str) {
        return nativ.replace.call(str, /[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    }
    ;
    self.exec = function(str, regex, pos, sticky) {
        var r2 = copy(regex, "g" + (sticky && hasNativeY ? "y" : ""), (sticky === false ? "y" : "")), match;
        r2.lastIndex = pos = pos || 0;
        match = fixed.exec.call(r2, str);
        if (sticky && match && match.index !== pos) {
            match = null ;
        }
        if (regex.global) {
            regex.lastIndex = match ? r2.lastIndex : 0;
        }
        return match;
    }
    ;
    self.forEach = function(str, regex, callback, context) {
        var pos = 0, i = -1, match;
        while ((match = self.exec(str, regex, pos)) ) {
            callback.call(context, match, ++i, str, regex);
            pos = match.index + (match[0].length || 1);
        }
        return context;
    }
    ;
    self.globalize = function(regex) {
        return copy(regex, "g");
    }
    ;
    self.install = function(options) {
        options = prepareOptions(options);
        if (!features.natives && options.natives) {
            setNatives(true);
        }
        if (!features.extensibility && options.extensibility) {
            setExtensibility(true);
        }
    }
    ;
    self.isInstalled = function(feature) {
        return !!(features[feature]);
    }
    ;
    self.isRegExp = function(value) {
        return isType(value, "regexp");
    }
    ;
    self.matchChain = function(str, chain) {
        return ( function recurseChain(values, level) {
            var item = chain[level].regex ? chain[level] : {
                regex: chain[level]
            }, matches = [], addMatch = function(match) {
                matches.push(item.backref ? (match[item.backref] || "") : match[0]);
            }
            , i;
            for (i = 0; i < values.length; ++i) {
                self.forEach(values[i], item.regex, addMatch);
            }
            return ((level === chain.length - 1) || !matches.length) ? matches : recurseChain(matches, level + 1);
        }([str], 0)) ;
    }
    ;
    self.replace = function(str, search, replacement, scope) {
        var isRegex = self.isRegExp(search), search2 = search, result;
        if (isRegex) {
            if (scope === undef && search.global) {
                scope = "all";
            }
            search2 = copy(search, scope === "all" ? "g" : "", scope === "all" ? "" : "g");
        } else if (scope === "all") {
            search2 = new RegExp(self.escape(String(search)),"g");
        }
        result = fixed.replace.call(String(str), search2, replacement);
        if (isRegex && search.global) {
            search.lastIndex = 0;
        }
        return result;
    }
    ;
    self.split = function(str, separator, limit) {
        return fixed.split.call(str, separator, limit);
    }
    ;
    self.test = function(str, regex, pos, sticky) {
        return !!self.exec(str, regex, pos, sticky);
    }
    ;
    self.uninstall = function(options) {
        options = prepareOptions(options);
        if (features.natives && options.natives) {
            setNatives(false);
        }
        if (features.extensibility && options.extensibility) {
            setExtensibility(false);
        }
    }
    ;
    self.union = function(patterns, flags) {
        var parts = /(\()(?!\?)|\\([1-9]\d*)|\\[\s\S]|\[(?:[^\\\]]|\\[\s\S])*]/g, numCaptures = 0, numPriorCaptures, captureNames, rewrite = function(match, paren, backref) {
            var name = captureNames[numCaptures - numPriorCaptures];
            if (paren) {
                ++numCaptures;
                if (name) {
                    return "(?<" + name + ">";
                }
            } else if (backref) {
                return "\\" + (+backref + numPriorCaptures);
            }
            return match;
        }
        , output = [], pattern, i;
        if (!(isType(patterns, "array") && patterns.length)) {
            throw new TypeError("patterns must be a nonempty array");
        }
        for (i = 0; i < patterns.length; ++i) {
            pattern = patterns[i];
            if (self.isRegExp(pattern)) {
                numPriorCaptures = numCaptures;
                captureNames = (pattern.xregexp && pattern.xregexp.captureNames) || [];
                output.push(self(pattern.source).source.replace(parts, rewrite));
            } else {
                output.push(self.escape(pattern));
            }
        }
        return self(output.join("|"), flags);
    }
    ;
    self.version = "2.0.0";
    fixed.exec = function(str) {
        var match, name, r2, origLastIndex, i;
        if (!this.global) {
            origLastIndex = this.lastIndex;
        }
        match = nativ.exec.apply(this, arguments);
        if (match) {
            if (!compliantExecNpcg && match.length > 1 && lastIndexOf(match, "") > -1) {
                r2 = new RegExp(this.source,nativ.replace.call(getNativeFlags(this), "g", ""));
                nativ.replace.call(String(str).slice(match.index), r2, function() {
                    var i;
                    for (i = 1; i < arguments.length - 2; ++i) {
                        if (arguments[i] === undef) {
                            match[i] = undef;
                        }
                    }
                });
            }
            if (this.xregexp && this.xregexp.captureNames) {
                for (i = 1; i < match.length; ++i) {
                    name = this.xregexp.captureNames[i - 1];
                    if (name) {
                        match[name] = match[i];
                    }
                }
            }
            if (this.global && !match[0].length && (this.lastIndex > match.index)) {
                this.lastIndex = match.index;
            }
        }
        if (!this.global) {
            this.lastIndex = origLastIndex;
        }
        return match;
    }
    ;
    fixed.test = function(str) {
        return !!fixed.exec.call(this, str);
    }
    ;
    fixed.match = function(regex) {
        if (!self.isRegExp(regex)) {
            regex = new RegExp(regex);
        } else if (regex.global) {
            var result = nativ.match.apply(this, arguments);
            regex.lastIndex = 0;
            return result;
        }
        return fixed.exec.call(regex, this);
    }
    ;
    fixed.replace = function(search, replacement) {
        var isRegex = self.isRegExp(search), captureNames, result, str, origLastIndex;
        if (isRegex) {
            if (search.xregexp) {
                captureNames = search.xregexp.captureNames;
            }
            if (!search.global) {
                origLastIndex = search.lastIndex;
            }
        } else {
            search += "";
        }
        if (isType(replacement, "function")) {
            result = nativ.replace.call(String(this), search, function() {
                var args = arguments, i;
                if (captureNames) {
                    args[0] = new String(args[0]);
                    for (i = 0; i < captureNames.length; ++i) {
                        if (captureNames[i]) {
                            args[0][captureNames[i]] = args[i + 1];
                        }
                    }
                }
                if (isRegex && search.global) {
                    search.lastIndex = args[args.length - 2] + args[0].length;
                }
                return replacement.apply(null , args);
            });
        } else {
            str = String(this);
            result = nativ.replace.call(str, search, function() {
                var args = arguments;
                return nativ.replace.call(String(replacement), replacementToken, function($0, $1, $2) {
                    var n;
                    if ($1) {
                        n = +$1;
                        if (n <= args.length - 3) {
                            return args[n] || "";
                        }
                        n = captureNames ? lastIndexOf(captureNames, $1) : -1;
                        if (n < 0) {
                            throw new SyntaxError("backreference to undefined group " + $0);
                        }
                        return args[n + 1] || "";
                    }
                    if ($2 === "$")
                        return "$";
                    if ($2 === "&" || +$2 === 0)
                        return args[0];
                    if ($2 === "`")
                        return args[args.length - 1].slice(0, args[args.length - 2]);
                    if ($2 === "'")
                        return args[args.length - 1].slice(args[args.length - 2] + args[0].length);
                    $2 = +$2;
                    if (!isNaN($2)) {
                        if ($2 > args.length - 3) {
                            throw new SyntaxError("backreference to undefined group " + $0);
                        }
                        return args[$2] || "";
                    }
                    throw new SyntaxError("invalid token " + $0);
                });
            });
        }
        if (isRegex) {
            if (search.global) {
                search.lastIndex = 0;
            } else {
                search.lastIndex = origLastIndex;
            }
        }
        return result;
    }
    ;
    fixed.split = function(separator, limit) {
        if (!self.isRegExp(separator)) {
            return nativ.split.apply(this, arguments);
        }
        var str = String(this), origLastIndex = separator.lastIndex, output = [], lastLastIndex = 0, lastLength;
        limit = (limit === undef ? -1 : limit) >>> 0;
        self.forEach(str, separator, function(match) {
            if ((match.index + match[0].length) > lastLastIndex) {
                output.push(str.slice(lastLastIndex, match.index));
                if (match.length > 1 && match.index < str.length) {
                    Array.prototype.push.apply(output, match.slice(1));
                }
                lastLength = match[0].length;
                lastLastIndex = match.index + lastLength;
            }
        });
        if (lastLastIndex === str.length) {
            if (!nativ.test.call(separator, "") || lastLength) {
                output.push("");
            }
        } else {
            output.push(str.slice(lastLastIndex));
        }
        separator.lastIndex = origLastIndex;
        return output.length > limit ? output.slice(0, limit) : output;
    }
    ;
    add = addToken.on;
    add(/\\([ABCE-RTUVXYZaeg-mopqyz]|c(?![A-Za-z])|u(?![\dA-Fa-f]{4})|x(?![\dA-Fa-f]{2}))/, function(match, scope) {
        if (match[1] === "B" && scope === defaultScope) {
            return match[0];
        }
        throw new SyntaxError("invalid escape " + match[0]);
    }, {
        scope: "all"
    });
    add(/\[(\^?)]/, function(match) {
        return match[1] ? "[\\s\\S]" : "\\b\\B";
    });
    add(/(?:\(\?#[^)]*\))+/, function(match) {
        return nativ.test.call(quantifier, match.input.slice(match.index + match[0].length)) ? "" : "(?:)";
    });
    add(/\\k<([\w$]+)>/, function(match) {
        var index = isNaN(match[1]) ? (lastIndexOf(this.captureNames, match[1]) + 1) : +match[1]
          , endIndex = match.index + match[0].length;
        if (!index || index > this.captureNames.length) {
            throw new SyntaxError("backreference to undefined group " + match[0]);
        }
        return "\\" + index + (endIndex === match.input.length || isNaN(match.input.charAt(endIndex)) ? "" : "(?:)");
    });
    add(/(?:\s+|#.*)+/, function(match) {
        return nativ.test.call(quantifier, match.input.slice(match.index + match[0].length)) ? "" : "(?:)";
    }, {
        trigger: function() {
            return this.hasFlag("x");
        },
        customFlags: "x"
    });
    add(/\./, function() {
        return "[\\s\\S]";
    }, {
        trigger: function() {
            return this.hasFlag("s");
        },
        customFlags: "s"
    });
    add(/\(\?P?<([\w$]+)>/, function(match) {
        if (!isNaN(match[1])) {
            throw new SyntaxError("can't use integer as capture name " + match[0]);
        }
        this.captureNames.push(match[1]);
        this.hasNamedCapture = true;
        return "(";
    });
    add(/\\(\d+)/, function(match, scope) {
        if (!(scope === defaultScope && /^[1-9]/.test(match[1]) && +match[1] <= this.captureNames.length) && match[1] !== "0") {
            throw new SyntaxError("can't use octal escape or backreference to undefined group " + match[0]);
        }
        return match[0];
    }, {
        scope: "all"
    });
    add(/\((?!\?)/, function() {
        if (this.hasFlag("n")) {
            return "(?:";
        }
        this.captureNames.push(null );
        return "(";
    }, {
        customFlags: "n"
    });
    if (typeof exports !== "undefined") {
        exports.XRegExp = self;
    }
    return self;
}());
if (typeof (SyntaxHighlighter) == 'undefined')
    var SyntaxHighlighter = function() {
        if (typeof (require) != 'undefined' && typeof (XRegExp) == 'undefined') {
            XRegExp = require('xregexp').XRegExp;
        }
        var sh = {
            defaults: {
                'class-name': '',
                'first-line': 1,
                'pad-line-numbers': false,
                'highlight': null ,
                'title': null ,
                'smart-tabs': true,
                'tab-size': 4,
                'gutter': true,
                'toolbar': true,
                'quick-code': true,
                'collapse': false,
                'auto-links': true,
                'light': false,
                'unindent': true,
                'html-script': false
            },
            config: {
                space: '&nbsp;',
                useScriptTags: true,
                bloggerMode: false,
                stripBrs: false,
                tagName: 'pre',
                strings: {
                    expandSource: 'expand source',
                    help: '?',
                    alert: 'SyntaxHighlighter\n\n',
                    noBrush: 'Can\'t find brush for: ',
                    brushNotHtmlScript: 'Brush wasn\'t configured for html-script option: ',
                    aboutDialog: '<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>About SyntaxHighlighter</title></head><body style=\"font-family:Geneva,Arial,Helvetica,sans-serif;background-color:#fff;color:#000;font-size:1em;text-align:center;\"><div style=\"text-align:center;margin-top:1.5em;\"><div style=\"font-size:xx-large;\">SyntaxHighlighter</div><div style=\"font-size:.75em;margin-bottom:3em;\"><div>version 3.0.9 (Thu, 11 Sep 2014 13:31:59 GMT)</div><div><a href=\"http://alexgorbatchev.com/SyntaxHighlighter\" target=\"_blank\" style=\"color:#005896\">http://alexgorbatchev.com/SyntaxHighlighter</a></div><div>JavaScript code syntax highlighter.</div><div>Copyright 2004-2013 Alex Gorbatchev.</div></div><div>If you like this script, please <a href=\"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=2930402\" style=\"color:#005896\">donate</a> to <br/>keep development active!</div></div></body></html>'
                }
            },
            vars: {
                discoveredBrushes: null ,
                highlighters: {}
            },
            brushes: {},
            regexLib: {
                multiLineCComments: XRegExp('/\\*.*?\\*/', 'gs'),
                singleLineCComments: /\/\/.*$/gm,
                singleLinePerlComments: /#.*$/gm,
                doubleQuotedString: /"([^\\"\n]|\\.)*"/g,
                singleQuotedString: /'([^\\'\n]|\\.)*'/g,
                multiLineDoubleQuotedString: XRegExp('"([^\\\\"]|\\\\.)*"', 'gs'),
                multiLineSingleQuotedString: XRegExp("'([^\\\\']|\\\\.)*'", 'gs'),
                xmlComments: XRegExp('(&lt;|<)!--.*?--(&gt;|>)', 'gs'),
                url: /\w+:\/\/[\w-.\/?%&=:@;#]*/g,
                phpScriptTags: {
                    left: /(&lt;|<)\?(?:=|php)?/g,
                    right: /\?(&gt;|>)/g,
                    'eof': true
                },
                aspScriptTags: {
                    left: /(&lt;|<)%=?/g,
                    right: /%(&gt;|>)/g
                },
                scriptScriptTags: {
                    left: /(&lt;|<)\s*script.*?(&gt;|>)/gi,
                    right: /(&lt;|<)\/\s*script\s*(&gt;|>)/gi
                }
            },
            toolbar: {
                getHtml: function(highlighter) {
                    var html = '<div class="toolbar">'
                      , items = sh.toolbar.items
                      , list = items.list;
                    function defaultGetHtml(highlighter, name) {
                        return sh.toolbar.getButtonHtml(highlighter, name, sh.config.strings[name]);
                    }
                    for (var i = 0, l = list.length; i < l; i++) {
                        html += (items[list[i]].getHtml || defaultGetHtml)(highlighter, list[i]);
                    }
                    html += '</div>';
                    return html;
                },
                getButtonHtml: function(highlighter, commandName, label) {
                    commandName = escapeHtml(commandName);
                    return '<span><a href="#" class="toolbar_item' + ' command_' + commandName + ' ' + commandName + '">' + escapeHtml(label) + '</a></span>';
                },
                handler: function(e) {
                    var target = e.target
                      , className = target.className || '';
                    function getValue(name) {
                        var r = new RegExp(name + '_(\\w+)')
                          , match = r.exec(className);
                        return match ? match[1] : null ;
                    }
                    var highlighter = getHighlighterById(findParentElement(target, '.syntaxhighlighter').id)
                      , commandName = getValue('command');
                    if (highlighter && commandName)
                        sh.toolbar.items[commandName].execute(highlighter);
                    e.preventDefault();
                },
                items: {
                    list: ['expandSource', 'help'],
                    expandSource: {
                        getHtml: function(highlighter) {
                            if (highlighter.getParam('collapse') != true)
                                return '';
                            var title = highlighter.getParam('title');
                            return sh.toolbar.getButtonHtml(highlighter, 'expandSource', title ? title : sh.config.strings.expandSource);
                        },
                        execute: function(highlighter) {
                            var div = getHighlighterDivById(highlighter.id);
                            removeClass(div, 'collapsed');
                        }
                    },
                    help: {
                        execute: function(highlighter) {
                            var wnd = popup('', '_blank', 500, 250, 'scrollbars=0')
                              , doc = wnd.document;
                            doc.write(sh.config.strings.aboutDialog);
                            doc.close();
                            wnd.focus();
                        }
                    }
                }
            },
            findElements: function(globalParams, element) {
                var elements = element ? [element] : toArray(document.getElementsByTagName(sh.config.tagName))
                  , conf = sh.config
                  , result = [];
                if (conf.useScriptTags)
                    elements = elements.concat(getSyntaxHighlighterScriptTags());
                if (elements.length === 0)
                    return result;
                for (var i = 0, l = elements.length; i < l; i++) {
                    var item = {
                        target: elements[i],
                        params: merge(globalParams, parseParams(elements[i].className))
                    };
                    if (item.params['brush'] == null )
                        continue;result.push(item);
                }
                return result;
            },
            highlight: function(globalParams, element) {
                var elements = this.findElements(globalParams, element)
                  , propertyName = 'innerHTML'
                  , highlighter = null
                  , conf = sh.config;
                if (elements.length === 0)
                    return;
                for (var i = 0, l = elements.length; i < l; i++) {
                    var element = elements[i], target = element.target, params = element.params, brushName = params.brush, code;
                    if (brushName == null )
                        continue;if (params['html-script'] == 'true' || sh.defaults['html-script'] == true) {
                        highlighter = new sh.HtmlScript(brushName);
                        brushName = 'htmlscript';
                    } else {
                        var brush = findBrush(brushName);
                        if (brush)
                            highlighter = new brush();
                        else
                            continue;
                    }
                    code = target[propertyName];
                    if (conf.useScriptTags)
                        code = stripCData(code);
                    if ((target.title || '') != '')
                        params.title = target.title;
                    params['brush'] = brushName;
                    highlighter.init(params);
                    element = highlighter.getDiv(code);
                    if ((target.id || '') != '')
                        element.id = target.id;
                    target.parentNode.replaceChild(element, target);
                }
            },
            all: function(params) {
                attachEvent(window, 'load', function() {
                    sh.highlight(params);
                });
            }
        };
        function escapeHtml(html) {
            return document.createElement('div').appendChild(document.createTextNode(html)).parentNode.innerHTML.replace(/"/g, '&quot;');
        }
        ;function hasClass(target, className) {
            return target.className.indexOf(className) != -1;
        }
        ;function addClass(target, className) {
            if (!hasClass(target, className))
                target.className += ' ' + className;
        }
        ;function removeClass(target, className) {
            target.className = target.className.replace(className, '');
        }
        ;function toArray(source) {
            var result = [];
            for (var i = 0, l = source.length; i < l; i++)
                result.push(source[i]);
            return result;
        }
        ;function splitLines(block) {
            return block.split(/\r?\n/);
        }
        function getHighlighterId(id) {
            var prefix = 'highlighter_';
            return id.indexOf(prefix) == 0 ? id : prefix + id;
        }
        ;function getHighlighterById(id) {
            return sh.vars.highlighters[getHighlighterId(id)];
        }
        ;function getHighlighterDivById(id) {
            return document.getElementById(getHighlighterId(id));
        }
        ;function storeHighlighter(highlighter) {
            sh.vars.highlighters[getHighlighterId(highlighter.id)] = highlighter;
        }
        ;function findElement(target, search, reverse) {
            if (target == null )
                return null ;
            var nodes = reverse != true ? target.childNodes : [target.parentNode], propertyToFind = {
                '#': 'id',
                '.': 'className'
            }[search.substr(0, 1)] || 'nodeName', expectedValue, found;
            expectedValue = propertyToFind != 'nodeName' ? search.substr(1) : search.toUpperCase();
            if ((target[propertyToFind] || '').indexOf(expectedValue) != -1)
                return target;
            for (var i = 0, l = nodes.length; nodes && i < l && found == null ; i++)
                found = findElement(nodes[i], search, reverse);
            return found;
        }
        ;function findParentElement(target, className) {
            return findElement(target, className, true);
        }
        ;function indexOf(array, searchElement, fromIndex) {
            fromIndex = Math.max(fromIndex || 0, 0);
            for (var i = fromIndex, l = array.length; i < l; i++)
                if (array[i] == searchElement)
                    return i;
            return -1;
        }
        ;function guid(prefix) {
            return (prefix || '') + Math.round(Math.random() * 1000000).toString();
        }
        ;function merge(obj1, obj2) {
            var result = {}, name;
            for (name in obj1)
                result[name] = obj1[name];
            for (name in obj2)
                result[name] = obj2[name];
            return result;
        }
        ;function toBoolean(value) {
            var result = {
                "true": true,
                "false": false
            }[value];
            return result == null ? value : result;
        }
        ;function popup(url, name, width, height, options) {
            var x = (screen.width - width) / 2
              , y = (screen.height - height) / 2;
            options += ', left=' + x + ', top=' + y + ', width=' + width + ', height=' + height;
            options = options.replace(/^,/, '');
            var win = window.open(url, name, options);
            win.focus();
            return win;
        }
        ;function attachEvent(obj, type, func, scope) {
            function handler(e) {
                e = e || window.event;
                if (!e.target) {
                    e.target = e.srcElement;
                    e.preventDefault = function() {
                        this.returnValue = false;
                    }
                    ;
                }
                func.call(scope || window, e);
            }
            ;if (obj.attachEvent) {
                obj.attachEvent('on' + type, handler);
            } else {
                obj.addEventListener(type, handler, false);
            }
        }
        ;function alert(str) {
            window.alert(sh.config.strings.alert + str);
        }
        ;function findBrush(alias, showAlert) {
            var brushes = sh.vars.discoveredBrushes
              , result = null ;
            if (brushes == null ) {
                brushes = {};
                for (var brush in sh.brushes) {
                    var info = sh.brushes[brush]
                      , aliases = info.aliases;
                    if (aliases == null )
                        continue;info.brushName = brush.toLowerCase();
                    for (var i = 0, l = aliases.length; i < l; i++)
                        brushes[aliases[i]] = brush;
                }
                sh.vars.discoveredBrushes = brushes;
            }
            result = sh.brushes[brushes[alias]];
            if (result == null && showAlert)
                alert(sh.config.strings.noBrush + alias);
            return result;
        }
        ;function eachLine(str, callback) {
            var lines = splitLines(str);
            for (var i = 0, l = lines.length; i < l; i++)
                lines[i] = callback(lines[i], i);
            return lines.join('\r\n');
        }
        ;function trimFirstAndLastLines(str) {
            return str.replace(/^[ ]*[\n]+|[\n]*[ ]*$/g, '');
        }
        ;function parseParams(str) {
            var match, result = {}, arrayRegex = XRegExp("^\\[(?<values>(.*?))\\]$"), pos = 0, regex = XRegExp("(?<name>[\\w-]+)" + "\\s*:\\s*" + "(?<value>" + "[\\w%#-]+|" + "\\[.*?\\]|" + '".*?"|' + "'.*?'" + ")\\s*;?", "g");
            while ((match = XRegExp.exec(str, regex, pos)) != null ) {
                var value = match.value.replace(/^['"]|['"]$/g, '');
                if (value != null && arrayRegex.test(value)) {
                    var m = XRegExp.exec(value, arrayRegex);
                    value = m.values.length > 0 ? m.values.split(/\s*,\s*/) : [];
                }
                result[match.name] = value;
                pos = match.index + match[0].length;
            }
            return result;
        }
        ;function wrapLinesWithCode(str, css) {
            if (str == null || str.length == 0 || str == '\n')
                return str;
            str = str.replace(/</g, '&lt;');
            str = str.replace(/ {2,}/g, function(m) {
                var spaces = '';
                for (var i = 0, l = m.length; i < l - 1; i++)
                    spaces += sh.config.space;
                return spaces + ' ';
            });
            if (css != null )
                str = eachLine(str, function(line) {
                    if (line.length == 0)
                        return '';
                    var spaces = '';
                    line = line.replace(/^(&nbsp;| )+/, function(s) {
                        spaces = s;
                        return '';
                    });
                    if (line.length == 0)
                        return spaces;
                    return spaces + '<code class="' + css + '">' + line + '</code>';
                });
            return str;
        }
        ;function padNumber(number, length) {
            var result = number.toString();
            while (result.length < length)
                result = '0' + result;
            return result;
        }
        ;function processTabs(code, tabSize) {
            var tab = '';
            for (var i = 0; i < tabSize; i++)
                tab += ' ';
            return code.replace(/\t/g, tab);
        }
        ;function processSmartTabs(code, tabSize) {
            var lines = splitLines(code)
              , tab = '\t'
              , spaces = '';
            for (var i = 0; i < 50; i++)
                spaces += '                    ';
            function insertSpaces(line, pos, count) {
                return line.substr(0, pos) + spaces.substr(0, count) + line.substr(pos + 1, line.length);
            }
            ;code = eachLine(code, function(line) {
                if (line.indexOf(tab) == -1)
                    return line;
                var pos = 0;
                while ((pos = line.indexOf(tab)) != -1) {
                    var spaces = tabSize - pos % tabSize;
                    line = insertSpaces(line, pos, spaces);
                }
                return line;
            });
            return code;
        }
        ;function fixInputString(str) {
            var br = /<br\s*\/?>|&lt;br\s*\/?&gt;/gi;
            if (sh.config.bloggerMode == true)
                str = str.replace(br, '\n');
            if (sh.config.stripBrs == true)
                str = str.replace(br, '');
            return str;
        }
        ;function trim(str) {
            return str.replace(/^\s+|\s+$/g, '');
        }
        ;function unindent(str) {
            var lines = splitLines(fixInputString(str))
              , indents = new Array()
              , regex = /^\s*/
              , min = 1000;
            for (var i = 0, l = lines.length; i < l && min > 0; i++) {
                var line = lines[i];
                if (trim(line).length == 0)
                    continue;var matches = regex.exec(line);
                if (matches == null )
                    return str;
                min = Math.min(matches[0].length, min);
            }
            if (min > 0)
                for (var i = 0, l = lines.length; i < l; i++)
                    lines[i] = lines[i].substr(min);
            return lines.join('\n');
        }
        ;function matchesSortCallback(m1, m2) {
            if (m1.index < m2.index)
                return -1;
            else if (m1.index > m2.index)
                return 1;
            else {
                if (m1.length < m2.length)
                    return -1;
                else if (m1.length > m2.length)
                    return 1;
            }
            return 0;
        }
        ;function getMatches(code, regexInfo) {
            function defaultAdd(match, regexInfo) {
                return match[0];
            }
            ;var index = 0
              , match = null
              , matches = []
              , func = regexInfo.func ? regexInfo.func : defaultAdd
            pos = 0;
            while ((match = XRegExp.exec(code, regexInfo.regex, pos)) != null ) {
                var resultMatch = func(match, regexInfo);
                if (typeof (resultMatch) == 'string')
                    resultMatch = [new sh.Match(resultMatch,match.index,regexInfo.css)];
                matches = matches.concat(resultMatch);
                pos = match.index + match[0].length;
            }
            return matches;
        }
        ;function processUrls(code) {
            var gt = /(.*)((&gt;|&lt;).*)/;
            return code.replace(sh.regexLib.url, function(m) {
                var suffix = ''
                  , match = null ;
                if (match = gt.exec(m)) {
                    m = match[1];
                    suffix = match[2];
                }
                return '<a href="' + m + '">' + m + '</a>' + suffix;
            });
        }
        ;function getSyntaxHighlighterScriptTags() {
            var tags = document.getElementsByTagName('script')
              , result = [];
            for (var i = 0, l = tags.length; i < l; i++)
                if (tags[i].type == 'syntaxhighlighter')
                    result.push(tags[i]);
            return result;
        }
        ;function stripCData(original) {
            var left = '<![CDATA['
              , right = ']]>'
              , copy = trim(original)
              , changed = false
              , leftLength = left.length
              , rightLength = right.length;
            if (copy.indexOf(left) == 0) {
                copy = copy.substring(leftLength);
                changed = true;
            }
            var copyLength = copy.length;
            if (copy.indexOf(right) == copyLength - rightLength) {
                copy = copy.substring(0, copyLength - rightLength);
                changed = true;
            }
            return changed ? copy : original;
        }
        ;function quickCodeHandler(e) {
            var target = e.target, highlighterDiv = findParentElement(target, '.syntaxhighlighter'), container = findParentElement(target, '.container'), textarea = document.createElement('textarea'), highlighter;
            if (!container || !highlighterDiv || findElement(container, 'textarea'))
                return;
            highlighter = getHighlighterById(highlighterDiv.id);
            addClass(highlighterDiv, 'source');
            var lines = container.childNodes
              , code = [];
            for (var i = 0, l = lines.length; i < l; i++)
                code.push(lines[i].innerText || lines[i].textContent);
            code = code.join('\r');
            code = code.replace(/\u00a0/g, " ");
            textarea.appendChild(document.createTextNode(code));
            container.appendChild(textarea);
            textarea.focus();
            textarea.select();
            attachEvent(textarea, 'blur', function(e) {
                textarea.parentNode.removeChild(textarea);
                removeClass(highlighterDiv, 'source');
            });
        }
        ;sh.Match = function(value, index, css) {
            this.value = value;
            this.index = index;
            this.length = value.length;
            this.css = css;
            this.brushName = null ;
        }
        ;
        sh.Match.prototype.toString = function() {
            return this.value;
        }
        ;
        sh.HtmlScript = function(scriptBrushName) {
            var brushClass = findBrush(scriptBrushName), scriptBrush, xmlBrush = new sh.brushes.Xml(), bracketsRegex = null , ref = this, methodsToExpose = 'getDiv getHtml init'.split(' ');
            if (brushClass == null )
                return;
            scriptBrush = new brushClass();
            for (var i = 0, l = methodsToExpose.length; i < l; i++)
                (function() {
                    var name = methodsToExpose[i];
                    ref[name] = function() {
                        return xmlBrush[name].apply(xmlBrush, arguments);
                    }
                    ;
                })();
            if (scriptBrush.htmlScript == null ) {
                alert(sh.config.strings.brushNotHtmlScript + scriptBrushName);
                return;
            }
            xmlBrush.regexList.push({
                regex: scriptBrush.htmlScript.code,
                func: process
            });
            function offsetMatches(matches, offset) {
                for (var j = 0, l = matches.length; j < l; j++)
                    matches[j].index += offset;
            }
            function process(match, info) {
                var code = match.code, matches = [], regexList = scriptBrush.regexList, offset = match.index + match.left.length, htmlScript = scriptBrush.htmlScript, result;
                for (var i = 0, l = regexList.length; i < l; i++) {
                    result = getMatches(code, regexList[i]);
                    offsetMatches(result, offset);
                    matches = matches.concat(result);
                }
                if (htmlScript.left != null && match.left != null ) {
                    result = getMatches(match.left, htmlScript.left);
                    offsetMatches(result, match.index);
                    matches = matches.concat(result);
                }
                if (htmlScript.right != null && match.right != null ) {
                    result = getMatches(match.right, htmlScript.right);
                    offsetMatches(result, match.index + match[0].lastIndexOf(match.right));
                    matches = matches.concat(result);
                }
                for (var j = 0, l = matches.length; j < l; j++)
                    matches[j].brushName = brushClass.brushName;
                return matches;
            }
        }
        ;
        sh.Highlighter = function() {}
        ;
        sh.Highlighter.prototype = {
            getParam: function(name, defaultValue) {
                var result = this.params[name];
                return toBoolean(result == null ? defaultValue : result);
            },
            create: function(name) {
                return document.createElement(name);
            },
            findMatches: function(regexList, code) {
                var result = [];
                if (regexList != null )
                    for (var i = 0, l = regexList.length; i < l; i++)
                        if (typeof (regexList[i]) == "object")
                            result = result.concat(getMatches(code, regexList[i]));
                return this.removeNestedMatches(result.sort(matchesSortCallback));
            },
            removeNestedMatches: function(matches) {
                for (var i = 0, l = matches.length; i < l; i++) {
                    if (matches[i] === null )
                        continue;var itemI = matches[i]
                      , itemIEndPos = itemI.index + itemI.length;
                    for (var j = i + 1, l = matches.length; j < l && matches[i] !== null ; j++) {
                        var itemJ = matches[j];
                        if (itemJ === null )
                            continue;
                        else if (itemJ.index > itemIEndPos)
                            break;
                        else if (itemJ.index == itemI.index && itemJ.length > itemI.length)
                            matches[i] = null ;
                        else if (itemJ.index >= itemI.index && itemJ.index < itemIEndPos)
                            matches[j] = null ;
                    }
                }
                return matches;
            },
            figureOutLineNumbers: function(code) {
                var lines = []
                  , firstLine = parseInt(this.getParam('first-line'));
                eachLine(code, function(line, index) {
                    lines.push(index + firstLine);
                });
                return lines;
            },
            isLineHighlighted: function(lineNumber) {
                var list = this.getParam('highlight', []);
                if (typeof (list) != 'object' && list.push == null )
                    list = [list];
                return indexOf(list, lineNumber.toString()) != -1;
            },
            getLineHtml: function(lineIndex, lineNumber, code) {
                var classes = ['line', 'number' + lineNumber, 'index' + lineIndex, 'alt' + (lineNumber % 2 == 0 ? 1 : 2).toString()];
                if (this.isLineHighlighted(lineNumber))
                    classes.push('highlighted');
                if (lineNumber == 0)
                    classes.push('break');
                return '<div class="' + classes.join(' ') + '">' + code + '</div>';
            },
            getLineNumbersHtml: function(code, lineNumbers) {
                var html = ''
                  , count = splitLines(code).length
                  , firstLine = parseInt(this.getParam('first-line'))
                  , pad = this.getParam('pad-line-numbers');
                if (pad == true)
                    pad = (firstLine + count - 1).toString().length;
                else if (isNaN(pad) == true)
                    pad = 0;
                for (var i = 0; i < count; i++) {
                    var lineNumber = lineNumbers ? lineNumbers[i] : firstLine + i
                      , code = lineNumber == 0 ? sh.config.space : padNumber(lineNumber, pad);
                    html += this.getLineHtml(i, lineNumber, code);
                }
                return html;
            },
            getCodeLinesHtml: function(html, lineNumbers) {
                html = trim(html);
                var lines = splitLines(html)
                  , padLength = this.getParam('pad-line-numbers')
                  , firstLine = parseInt(this.getParam('first-line'))
                  , html = ''
                  , brushName = this.getParam('brush');
                for (var i = 0, l = lines.length; i < l; i++) {
                    var line = lines[i]
                      , indent = /^(&nbsp;|\s)+/.exec(line)
                      , spaces = null
                      , lineNumber = lineNumbers ? lineNumbers[i] : firstLine + i;
                    ;if (indent != null ) {
                        spaces = indent[0].toString();
                        line = line.substr(spaces.length);
                        spaces = spaces.replace(' ', sh.config.space);
                    }
                    line = trim(line);
                    if (line.length == 0)
                        line = sh.config.space;
                    html += this.getLineHtml(i, lineNumber, (spaces != null ? '<code class="' + brushName + ' spaces">' + spaces + '</code>' : '') + line);
                }
                return html;
            },
            getTitleHtml: function(title) {
                return title ? '<caption>' + escapeHtml(title) + '</caption>' : '';
            },
            getMatchesHtml: function(code, matches) {
                var pos = 0
                  , result = ''
                  , brushName = this.getParam('brush', '');
                function getBrushNameCss(match) {
                    var result = match ? (match.brushName || brushName) : brushName;
                    return result ? result + ' ' : '';
                }
                ;for (var i = 0, l = matches.length; i < l; i++) {
                    var match = matches[i], matchBrushName;
                    if (match === null || match.length === 0)
                        continue;matchBrushName = getBrushNameCss(match);
                    result += wrapLinesWithCode(code.substr(pos, match.index - pos), matchBrushName + 'plain') + wrapLinesWithCode(match.value, matchBrushName + match.css);
                    pos = match.index + match.length + (match.offset || 0);
                }
                result += wrapLinesWithCode(code.substr(pos), getBrushNameCss() + 'plain');
                return result;
            },
            getHtml: function(code) {
                var html = '', classes = ['syntaxhighlighter'], tabSize, matches, lineNumbers;
                if (this.getParam('light') == true)
                    this.params.toolbar = this.params.gutter = false;
                className = 'syntaxhighlighter';
                if (this.getParam('collapse') == true)
                    classes.push('collapsed');
                if ((gutter = this.getParam('gutter')) == false)
                    classes.push('nogutter');
                classes.push(this.getParam('class-name'));
                classes.push(this.getParam('brush'));
                code = trimFirstAndLastLines(code).replace(/\r/g, ' ');
                tabSize = this.getParam('tab-size');
                code = this.getParam('smart-tabs') == true ? processSmartTabs(code, tabSize) : processTabs(code, tabSize);
                if (this.getParam('unindent'))
                    code = unindent(code);
                if (gutter)
                    lineNumbers = this.figureOutLineNumbers(code);
                matches = this.findMatches(this.regexList, code);
                html = this.getMatchesHtml(code, matches);
                html = this.getCodeLinesHtml(html, lineNumbers);
                if (this.getParam('auto-links'))
                    html = processUrls(html);
                if (typeof (navigator) != 'undefined' && navigator.userAgent && navigator.userAgent.match(/MSIE/))
                    classes.push('ie');
                html = '<div id="' + getHighlighterId(this.id) + '" class="' + escapeHtml(classes.join(' ')) + '">' + (this.getParam('toolbar') ? sh.toolbar.getHtml(this) : '') + '<table border="0" cellpadding="0" cellspacing="0">' + this.getTitleHtml(this.getParam('title')) + '<tbody>' + '<tr>' + (gutter ? '<td class="gutter">' + this.getLineNumbersHtml(code) + '</td>' : '') + '<td class="code">' + '<div class="container">' + html + '</div>' + '</td>' + '</tr>' + '</tbody>' + '</table>' + '</div>';
                return html;
            },
            getDiv: function(code) {
                if (code === null )
                    code = '';
                this.code = code;
                var div = this.create('div');
                div.innerHTML = this.getHtml(code);
                if (this.getParam('toolbar'))
                    attachEvent(findElement(div, '.toolbar'), 'click', sh.toolbar.handler);
                if (this.getParam('quick-code'))
                    attachEvent(findElement(div, '.code'), 'dblclick', quickCodeHandler);
                return div;
            },
            init: function(params) {
                this.id = guid();
                storeHighlighter(this);
                this.params = merge(sh.defaults, params || {})
                if (this.getParam('light') == true)
                    this.params.toolbar = this.params.gutter = false;
            },
            getKeywords: function(str) {
                str = str.replace(/^\s+|\s+$/g, '').replace(/\s+/g, '|');
                return '\\b(?:' + str + ')\\b';
            },
            forHtmlScript: function(regexGroup) {
                var regex = {
                    'end': regexGroup.right.source
                };
                if (regexGroup.eof)
                    regex.end = "(?:(?:" + regex.end + ")|$)";
                this.htmlScript = {
                    left: {
                        regex: regexGroup.left,
                        css: 'script'
                    },
                    right: {
                        regex: regexGroup.right,
                        css: 'script'
                    },
                    code: XRegExp("(?<left>" + regexGroup.left.source + ")" + "(?<code>.*?)" + "(?<right>" + regex.end + ")", "sgi")
                };
            }
        };
        return sh;
    }();
typeof (exports) != 'undefined' ? exports.SyntaxHighlighter = SyntaxHighlighter : null ;
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 *
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function() {
    SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined' ? require('shCore').SyntaxHighlighter : null );
    function Brush() {
        var funcs = 'abs accept alarm atan2 bind binmode chdir chmod chomp chop chown chr ' + 'chroot close closedir connect cos crypt defined delete each endgrent ' + 'endhostent endnetent endprotoent endpwent endservent eof exec exists ' + 'exp fcntl fileno flock fork format formline getc getgrent getgrgid ' + 'getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr ' + 'getnetbyname getnetent getpeername getpgrp getppid getpriority ' + 'getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid ' + 'getservbyname getservbyport getservent getsockname getsockopt glob ' + 'gmtime grep hex index int ioctl join keys kill lc lcfirst length link ' + 'listen localtime lock log lstat map mkdir msgctl msgget msgrcv msgsnd ' + 'oct open opendir ord pack pipe pop pos print printf prototype push ' + 'quotemeta rand read readdir readline readlink readpipe recv rename ' + 'reset reverse rewinddir rindex rmdir scalar seek seekdir select semctl ' + 'semget semop send setgrent sethostent setnetent setpgrp setpriority ' + 'setprotoent setpwent setservent setsockopt shift shmctl shmget shmread ' + 'shmwrite shutdown sin sleep socket socketpair sort splice split sprintf ' + 'sqrt srand stat study substr symlink syscall sysopen sysread sysseek ' + 'system syswrite tell telldir time times tr truncate uc ucfirst umask ' + 'undef unlink unpack unshift utime values vec wait waitpid warn write ' + 'say';
        var keywords = 'bless caller continue dbmclose dbmopen die do dump else elsif eval exit ' + 'for foreach goto if import last local my next no our package redo ref ' + 'require return sub tie tied unless untie until use wantarray while ' + 'given when default ' + 'try catch finally ' + 'has extends with before after around override augment';
        this.regexList = [{
            regex: /(<<|&lt;&lt;)((\w+)|(['"])(.+?)\4)[\s\S]+?\n\3\5\n/g,
            css: 'string'
        }, {
            regex: /#.*$/gm,
            css: 'comments'
        }, {
            regex: /^#!.*\n/g,
            css: 'preprocessor'
        }, {
            regex: /-?\w+(?=\s*=(>|&gt;))/g,
            css: 'string'
        }, {
            regex: /\bq[qwxr]?\([\s\S]*?\)/g,
            css: 'string'
        }, {
            regex: /\bq[qwxr]?\{[\s\S]*?\}/g,
            css: 'string'
        }, {
            regex: /\bq[qwxr]?\[[\s\S]*?\]/g,
            css: 'string'
        }, {
            regex: /\bq[qwxr]?(<|&lt;)[\s\S]*?(>|&gt;)/g,
            css: 'string'
        }, {
            regex: /\bq[qwxr]?([^\w({<[])[\s\S]*?\1/g,
            css: 'string'
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: 'string'
        }, {
            regex: SyntaxHighlighter.regexLib.singleQuotedString,
            css: 'string'
        }, {
            regex: /(?:&amp;|[$@%*]|\$#)\$?[a-zA-Z_](\w+|::)*/g,
            css: 'variable'
        }, {
            regex: /(^|\n)\s*__(?:END|DATA)__\b[\s\S]*$/g,
            css: 'comments'
        }, {
            regex: /(^|\n)=\w[\s\S]*?(\n=cut\s*(?=\n)|$)/g,
            css: 'comments'
        }, {
            regex: new RegExp(this.getKeywords(funcs),'gm'),
            css: 'functions'
        }, {
            regex: new RegExp(this.getKeywords(keywords),'gm'),
            css: 'keyword'
        }];
        this.forHtmlScript(SyntaxHighlighter.regexLib.phpScriptTags);
    }
    Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases = ['perl', 'Perl', 'pl'];
    SyntaxHighlighter.brushes.Perl = Brush;
    typeof (exports) != 'undefined' ? exports.Brush = Brush : null ;
})();
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.9 (Thu, 11 Sep 2014 13:31:59 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function() {
    SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined' ? require('shCore').SyntaxHighlighter : null );
    function Brush() {}
    ;Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases = ['text', 'plain'];
    SyntaxHighlighter.brushes.Plain = Brush;
    typeof (exports) != 'undefined' ? exports.Brush = Brush : null ;
})();
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/wiki/SyntaxHighlighter:Donate
 *
 * @version
 * 2.0.320 (July 26 2009)
 * 
 * @copyright
 * Copyright (C) 2004-2009 Alex Gorbatchev.
 * Copyright (C) 2009 Nicolas Perriault
 *
 * @license
 * This file is part of SyntaxHighlighter.
 * 
 * SyntaxHighlighter is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * SyntaxHighlighter is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with SyntaxHighlighter.  If not, see <http://www.gnu.org/copyleft/lesser.html>.
 */
;(function() {
    SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined' ? require('shCore').SyntaxHighlighter : null );
    function Brush() {
        var constants = '~ true false on off';
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.singleLinePerlComments,
            css: 'comments'
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: 'string'
        }, {
            regex: SyntaxHighlighter.regexLib.singleQuotedString,
            css: 'string'
        }, {
            regex: /^\s*([a-z0-9\._:-])+\s*:\s/gmi,
            css: 'variable'
        }, {
            regex: /\s?(\.)([a-z0-9\._-])+\s?:/gmi,
            css: 'comments'
        }, {
            regex: /\s(@|:)([a-z0-9\._-])+\s*$/gmi,
            css: 'variable bold'
        }, {
            regex: /\s+\d+\s?$/gm,
            css: 'color2 bold'
        }, {
            regex: /(\{|\}|\[|\]|,|~|:)/gm,
            css: 'constants'
        }, {
            regex: /^\s+(-)+/gm,
            css: 'string bold'
        }, {
            regex: /^---/gm,
            css: 'string bold'
        }, {
            regex: new RegExp(this.getKeywords(constants),'gmi'),
            css: 'constants'
        }];
    }
    ;Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases = ['yaml', 'yml'];
    SyntaxHighlighter.brushes.Yaml = Brush;
    typeof (exports) != 'undefined' ? exports.Brush = Brush : null ;
})();
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.9 (Thu, 11 Sep 2014 13:31:59 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function() {
    SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined' ? require('shCore').SyntaxHighlighter : null );
    function Brush() {
        var keywords = 'break case catch class continue ' + 'default delete do else enum export extends false  ' + 'for function if implements import in instanceof ' + 'interface let new null package private protected ' + 'static return super switch ' + 'this throw true try typeof var while with yield';
        var r = SyntaxHighlighter.regexLib;
        this.regexList = [{
            regex: r.multiLineDoubleQuotedString,
            css: 'string'
        }, {
            regex: r.multiLineSingleQuotedString,
            css: 'string'
        }, {
            regex: r.singleLineCComments,
            css: 'comments'
        }, {
            regex: r.multiLineCComments,
            css: 'comments'
        }, {
            regex: /\s*#.*/gm,
            css: 'preprocessor'
        }, {
            regex: new RegExp(this.getKeywords(keywords),'gm'),
            css: 'keyword'
        }];
        this.forHtmlScript(r.scriptScriptTags);
    }
    ;Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases = ['js', 'jscript', 'javascript', 'json'];
    SyntaxHighlighter.brushes.JScript = Brush;
    typeof (exports) != 'undefined' ? exports.Brush = Brush : null ;
})();
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.9 (Thu, 11 Sep 2014 13:31:59 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function() {
    SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined' ? require('shCore').SyntaxHighlighter : null );
    function Brush() {
        this.regexList = [{
            regex: /^\+\+\+ .*$/gm,
            css: 'color2'
        }, {
            regex: /^\-\-\- .*$/gm,
            css: 'color2'
        }, {
            regex: /^\s.*$/gm,
            css: 'color1'
        }, {
            regex: /^@@.*@@.*$/gm,
            css: 'variable'
        }, {
            regex: /^\+.*$/gm,
            css: 'string'
        }, {
            regex: /^\-.*$/gm,
            css: 'color3'
        }];
    }
    ;Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases = ['diff', 'patch'];
    SyntaxHighlighter.brushes.Diff = Brush;
    typeof (exports) != 'undefined' ? exports.Brush = Brush : null ;
})();
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.9 (Thu, 11 Sep 2014 13:31:59 GMT)
 *
 * @copyright
 * Copyright (C) 2004-2013 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function() {
    SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined' ? require('shCore').SyntaxHighlighter : null );
    function Brush() {
        // Copyright 2006 Shin, YoungJin
        var datatypes = 'ATOM BOOL BOOLEAN BYTE CHAR COLORREF DWORD DWORDLONG DWORD_PTR ' + 'DWORD32 DWORD64 FLOAT HACCEL HALF_PTR HANDLE HBITMAP HBRUSH ' + 'HCOLORSPACE HCONV HCONVLIST HCURSOR HDC HDDEDATA HDESK HDROP HDWP ' + 'HENHMETAFILE HFILE HFONT HGDIOBJ HGLOBAL HHOOK HICON HINSTANCE HKEY ' + 'HKL HLOCAL HMENU HMETAFILE HMODULE HMONITOR HPALETTE HPEN HRESULT ' + 'HRGN HRSRC HSZ HWINSTA HWND INT INT_PTR INT32 INT64 LANGID LCID LCTYPE ' + 'LGRPID LONG LONGLONG LONG_PTR LONG32 LONG64 LPARAM LPBOOL LPBYTE LPCOLORREF ' + 'LPCSTR LPCTSTR LPCVOID LPCWSTR LPDWORD LPHANDLE LPINT LPLONG LPSTR LPTSTR ' + 'LPVOID LPWORD LPWSTR LRESULT PBOOL PBOOLEAN PBYTE PCHAR PCSTR PCTSTR PCWSTR ' + 'PDWORDLONG PDWORD_PTR PDWORD32 PDWORD64 PFLOAT PHALF_PTR PHANDLE PHKEY PINT ' + 'PINT_PTR PINT32 PINT64 PLCID PLONG PLONGLONG PLONG_PTR PLONG32 PLONG64 POINTER_32 ' + 'POINTER_64 PSHORT PSIZE_T PSSIZE_T PSTR PTBYTE PTCHAR PTSTR PUCHAR PUHALF_PTR ' + 'PUINT PUINT_PTR PUINT32 PUINT64 PULONG PULONGLONG PULONG_PTR PULONG32 PULONG64 ' + 'PUSHORT PVOID PWCHAR PWORD PWSTR SC_HANDLE SC_LOCK SERVICE_STATUS_HANDLE SHORT ' + 'SIZE_T SSIZE_T TBYTE TCHAR UCHAR UHALF_PTR UINT UINT_PTR UINT32 UINT64 ULONG ' + 'ULONGLONG ULONG_PTR ULONG32 ULONG64 USHORT USN VOID WCHAR WORD WPARAM WPARAM WPARAM ' + 'char char16_t char32_t bool short int __int32 __int64 __int8 __int16 long float double __wchar_t ' + 'clock_t _complex _dev_t _diskfree_t div_t ldiv_t _exception _EXCEPTION_POINTERS ' + 'FILE _finddata_t _finddatai64_t _wfinddata_t _wfinddatai64_t __finddata64_t ' + '__wfinddata64_t _FPIEEE_RECORD fpos_t _HEAPINFO _HFILE lconv intptr_t ' + 'jmp_buf mbstate_t _off_t _onexit_t _PNH ptrdiff_t _purecall_handler ' + 'sig_atomic_t size_t _stat __stat64 _stati64 terminate_function ' + 'time_t __time64_t _timeb __timeb64 tm uintptr_t _utimbuf ' + 'va_list wchar_t wctrans_t wctype_t wint_t signed';
        var keywords = 'alignas alignof auto break case catch class const constexpr decltype __finally __exception __try ' + 'const_cast continue private public protected __declspec ' + 'default delete deprecated dllexport dllimport do dynamic_cast ' + 'else enum explicit extern if for friend goto inline ' + 'mutable naked namespace new noinline noreturn nothrow noexcept nullptr ' + 'ref register reinterpret_cast return selectany ' + 'sizeof static static_cast static_assert struct switch template this ' + 'thread thread_local throw true false try typedef typeid typename union ' + 'using uuid virtual void volatile whcar_t while';
        var functions = 'assert isalnum isalpha iscntrl isdigit isgraph islower isprint' + 'ispunct isspace isupper isxdigit tolower toupper errno localeconv ' + 'setlocale acos asin atan atan2 ceil cos cosh exp fabs floor fmod ' + 'frexp ldexp log log10 modf pow sin sinh sqrt tan tanh jmp_buf ' + 'longjmp setjmp raise signal sig_atomic_t va_arg va_end va_start ' + 'clearerr fclose feof ferror fflush fgetc fgetpos fgets fopen ' + 'fprintf fputc fputs fread freopen fscanf fseek fsetpos ftell ' + 'fwrite getc getchar gets perror printf putc putchar puts remove ' + 'rename rewind scanf setbuf setvbuf sprintf sscanf tmpfile tmpnam ' + 'ungetc vfprintf vprintf vsprintf abort abs atexit atof atoi atol ' + 'bsearch calloc div exit free getenv labs ldiv malloc mblen mbstowcs ' + 'mbtowc qsort rand realloc srand strtod strtol strtoul system ' + 'wcstombs wctomb memchr memcmp memcpy memmove memset strcat strchr ' + 'strcmp strcoll strcpy strcspn strerror strlen strncat strncmp ' + 'strncpy strpbrk strrchr strspn strstr strtok strxfrm asctime ' + 'clock ctime difftime gmtime localtime mktime strftime time';
        this.regexList = [{
            regex: SyntaxHighlighter.regexLib.singleLineCComments,
            css: 'comments'
        }, {
            regex: SyntaxHighlighter.regexLib.multiLineCComments,
            css: 'comments'
        }, {
            regex: SyntaxHighlighter.regexLib.doubleQuotedString,
            css: 'string'
        }, {
            regex: SyntaxHighlighter.regexLib.singleQuotedString,
            css: 'string'
        }, {
            regex: /^ *#.*/gm,
            css: 'preprocessor'
        }, {
            regex: new RegExp(this.getKeywords(datatypes),'gm'),
            css: 'color1 bold'
        }, {
            regex: new RegExp(this.getKeywords(functions),'gm'),
            css: 'functions bold'
        }, {
            regex: new RegExp(this.getKeywords(keywords),'gm'),
            css: 'keyword bold'
        }];
    }
    ;Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases = ['cpp', 'cc', 'c++', 'c', 'h', 'hpp', 'h++'];
    SyntaxHighlighter.brushes.Cpp = Brush;
    typeof (exports) != 'undefined' ? exports.Brush = Brush : null ;
})();
/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 *
 * Brush for CPAN::Changes by Randy Stauner (RWSTAUNER) 2011.
 */
;(function() {
    SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined' ? require('shCore').SyntaxHighlighter : null );
    function Brush() {
        this.regexList = [{
            regex: /^\{\{\$NEXT\}\}$/gm,
            css: 'color3'
        }, {
            regex: /^v?([0-9._]+)(-TRIAL)?([ \t]+.+)?/gm,
            css: 'constants'
        }, {
            regex: /^\s+\[.+?\]/gm,
            css: 'value'
        }, {
            regex: /^\s+[-*]/gm,
            css: 'functions'
        }, {
            regex: /^[^v0-9].+\n(?=\nv?[0-9_.])/g,
            css: 'preprocessor'
        }];
    }
    ;Brush.prototype = new SyntaxHighlighter.Highlighter();
    Brush.aliases = ['cpanchanges'];
    SyntaxHighlighter.brushes.CPANChanges = Brush;
    typeof (exports) != 'undefined' ? exports.Brush = Brush : null ;
})();
var MetaCPAN = {};
MetaCPAN.favs_to_check = {};
try {
    MetaCPAN.storage = window.localStorage;
} catch (e) {
    MetaCPAN.storage = {
        getItem: function(k) {
            return this["_" + k];
        },
        setItem: function(k, v) {
            return this["_" + k] = v;
        },
    };
}
document.cookie = "hideTOC=; expires=" + (new Date(0)).toGMTString() + "; path=/";
$.fn.textWidth = function() {
    var html_org = $(this).html();
    var html_calc = '<span>' + html_org + '</span>';
    $(this).html(html_calc);
    var width = $(this).find('span:first').width();
    $(this).html(html_org);
    return width;
}
;
$.extend({
    getUrlVars: function() {
        var vars = {}, hash;
        var indexOfQ = window.location.href.indexOf('?');
        if (indexOfQ == -1)
            return vars;
        var hashes = window.location.href.slice(indexOfQ + 1).split('&');
        $.each(hashes, function(idx, hash) {
            var kv = hash.split('=');
            vars[kv[0]] = decodeURIComponent(kv[1]);
        });
        return vars;
    },
    getUrlVar: function(name) {
        return $.getUrlVars()[name];
    }
});
function togglePanel(side, visible) {
    var elements = $('#' + side + '-panel-toggle').add($('#' + side + '-panel'));
    var className = 'panel-hide';
    if (typeof visible == "undefined") {
        visible = elements.first().hasClass(className);
    }
    if (visible) {
        elements.removeClass(className);
    } else {
        elements.addClass(className);
    }
    MetaCPAN.storage.setItem("hide_" + side + "_panel", visible ? 0 : 1);
    return false;
}
function toggleTOC() {
    var container = $('#index-container');
    if (container.length == 0)
        return false;
    var visible = !container.hasClass('hide-index');
    var index = $('#index');
    var newHeight = 0;
    if (!visible) {
        newHeight = index.get(0).scrollHeight;
    }
    index.animate({
        height: newHeight
    }, {
        duration: 200,
        complete: function() {
            if (newHeight > 0) {
                index.css({
                    height: 'auto'
                });
            }
        }
    });
    MetaCPAN.storage.setItem('hideTOC', (visible ? 1 : 0));
    container.toggleClass('hide-index');
    return false;
}
function toggleWhatsnew() {
    var changes = $('.last-changes .change-entries');
    var link = $('.last-changes #whatsnew-toggle-overflow');
    if (link.text() == 'Show Less') {
        changes.css('max-height', '19.5em');
        link.text('Show More');
    } else {
        changes.css('max-height', 'none');
        link.text('Show Less');
    }
}
$(document).ready(function() {
    processUserData();
    $(".ttip").tooltip();
    Mousetrap.bind('?', function() {
        $('#keyboard-shortcuts').modal();
    });
    Mousetrap.bind('s', function(e) {
        $('#search-input').focus();
        e.preventDefault();
    });
    Mousetrap.bind('g s', function(e) {});
    $('a[data-keyboard-shortcut]').each(function(index, element) {
        Mousetrap.bind($(element).data('keyboard-shortcut'), function() {
            window.location = $(element).attr('href');
        });
    });
    $('table.tablesorter').each(function() {
        var table = $(this);
        var sortid = (MetaCPAN.storage.getItem("tablesorter:" + table.attr('id')) || table.attr('data-default-sort') || '0,0');
        sortid = JSON.parse("[" + sortid + "]");
        var cfg = {
            sortList: [sortid],
            textExtraction: function(node) {
                var $node = $(node);
                var sort = $node.attr("sort");
                if (!sort)
                    return $node.text();
                if ($node.hasClass("date")) {
                    return (new Date(sort)).getTime();
                } else {
                    return sort;
                }
            },
            headers: {}
        };
        table.find('thead th').each(function(i, el) {
            if ($(el).hasClass('no-sort')) {
                cfg.headers[i] = {
                    sorter: false
                };
            }
        });
        table.tablesorter(cfg);
    });
    $('.tablesorter.remote th.header').each(function() {
        $(this).unbind('click');
        $(this).click(function(event) {
            var $cell = $(this);
            var params = $.getUrlVars();
            params.sort = '[[' + this.column + ',' + this.count++ % 2 + ']]';
            var query = $.param(params);
            var url = window.location.href.replace(window.location.search, '');
            window.location.href = url + '?' + query;
        });
    });
    $('.relatize').relatizeDate();
    $('#search-input').keydown(function(event) {
        if (event.keyCode == '13' && event.shiftKey) {
            event.preventDefault();
            var luckyField = document.createElement("input");
            luckyField.type = 'hidden';
            luckyField.name = 'lucky';
            luckyField.value = '1';
            var form = event.target.form;
            form.appendChild(luckyField);
            form.submit();
        }
    });
    var search_input = $("#search-input");
    var input_group = search_input.parent('.input-group');
    var ac_width = (input_group.length ? input_group : search_input).outerWidth();
    search_input.bind('modules_autocomplete', function() {
        $(this).autocomplete({
            serviceUrl: '/search/autocomplete',
            deferRequestBy: 150,
            preventBadQueries: false,
            dataType: 'json',
            lookupLitmit: 20,
            paramName: 'q',
            autoSelectFirst: false,
            noCache: false,
            triggerSelectOnValidInput: false,
            maxHeight: 180,
            width: ac_width,
            transformResult: function(data) {
                var result = $.map(data, function(row) {
                    return {
                        data: row.documentation,
                        value: row.documentation
                    };
                });
                var uniq = {};
                result = $.grep(result, function(row) {
                    uniq[row.value] = typeof (uniq[row.value]) == 'undefined' ? 0 : uniq[row.value];
                    return uniq[row.value]++ < 1;
                });
                return {
                    suggestions: result
                };
            },
            onSelect: function(suggestion) {
                document.location.href = '/pod/' + suggestion.value;
            }
        });
        $('.autocomplete-suggestions').off('mouseover.autocomplete');
        $('.autocomplete-suggestions').off('mouseout.autocomplete');
    });
    search_input.bind('authors_autocomplete', function() {
        $(this).constructorAutocomplete({
            key: 'bQssESEa8XUBKzSUjarO',
            directResults: true,
            maxHeight: 400,
            transformResult: function(response) {
                if (response['sections'] && response['sections']['url']) {
                    response['sections']['url'].forEach(function(dataset) {
                        if (dataset.value) {
                            dataset.value = dataset.value.replace(/^[^:]+: /, "");
                        }
                    });
                }
                return response;
            }
        });
        $('.autocomplete-suggestions').off('mouseover.autocomplete');
        $('.autocomplete-suggestions').off('mouseout.autocomplete');
    });
    search_input.trigger('modules_autocomplete');
    // WBRASWELL 20160101: temporarily fix error
    // GET file://cnstrc.com/js/ac.js?_=1451682656869 net::ERR_FILE_NOT_FOUND
    //$.getScript("//cnstrc.com/js/ac.js",function(){if($('input[name=search_type]:checked').val()=="authors"){search_input.trigger('authors_autocomplete');}});
    $("input[name=search_type]").click(function() {
        if ($(this).val() == "authors") {
            if (typeof $("#search-input").autocomplete === "function") {
                $("#search-input").autocomplete("dispose");
            }
            search_input.trigger('authors_autocomplete');
        } else {
            if (typeof $("#search-input").constructorAutocomplete === "function") {
                $("#search-input").constructorAutocomplete("dispose");
            }
            search_input.trigger('modules_autocomplete');
        }
    });
    $('#search-input.autofocus').focus();
    var items = $('.ellipsis');
    for (var i = 0; i < items.length; i++) {
        var element = $(items[i]);
        var boxWidth = element.width();
        var textWidth = element.textWidth();
        if (textWidth <= boxWidth)
            continue;var text = element.text();
        var textLength = text.length;
        var parts = [text.substr(0, Math.floor(textLength / 2)), text.substr(Math.floor(textLength / 2), textLength)];
        while (element.textWidth() > boxWidth) {
            if (textLength % 2) {
                parts[0] = parts[0].substr(0, parts[0].length - 1);
            } else {
                parts[1] = parts[1].substr(1, parts[1].length);
            }
            textLength--;
            element.html(parts.join('…'));
        }
    }
    $('.anchors').find('h1,h2,h3,h4,h5,h6,dt').each(function() {
        if (this.id) {
            $(this).prepend('<a href="#' + this.id + '" class="anchor"><span class="fa fa-bookmark black"></span></a>');
        }
    });
    var module_source_href = $('#source-link').attr('href');
    if (module_source_href) {
        $('#pod-error-detail dt').each(function() {
            var $dt = $(this);
            var link_text = $dt.text();
            var capture = link_text.match(/Around line (\d+)/);
            $dt.html($('<a />').attr('href', module_source_href + '#L' + capture[1]).text(link_text));
        });
    }
    $('#pod-errors').addClass('collapsed');
    $('#pod-errors > p:first-child').click(function() {
        $(this).parent().toggleClass('collapsed');
    });
    $('table.tablesorter th.header').on('click', function() {
        tableid = $(this).parents().eq(2).attr('id');
        setTimeout(function() {
            var sortParam = $.getUrlVar('sort');
            if (sortParam != null ) {
                sortParam = sortParam.slice(2, sortParam.length - 2);
                MetaCPAN.storage.setItem("tablesorter:" + tableid, sortParam);
            }
        }, 1000);
    });
    if ($(".inline").find("button").hasClass("active")) {
        $(".favorite").attr("title", "Remove from favorite");
    } else {
        $(".favorite").attr("title", "Add to favorite");
    }
    $('.dropdown-toggle').dropdown();
    var index = $("#index");
    if (index) {
        index.wrap('<div id="index-container"><div class="index-border"></div></div>');
        var container = index.parent().parent();
        // WBRASWELL 20160101: set full TOC to default hidden, verbose label
        //var index_hidden=MetaCPAN.storage.getItem('hideTOC')==1;
        var index_hidden = 1;
        index.before('<div class="index-header"><b>Full Table Of Contents</b>' + ' [ <button class="btn-link toggle-index"><span class="toggle-show">show</span><span class="toggle-hide">hide</span></button> ]' + ' <button class="btn-link toggle-index-right"><i class="fa fa-toggle-right"></i><i class="fa fa-toggle-left"></i></button>' + '</div>');
        $('.toggle-index').on('click', function(e) {
            e.preventDefault();
            toggleTOC();
        });
        if (index_hidden) {
            container.addClass("hide-index");
        }
        $('.toggle-index-right').on('click', function(e) {
            e.preventDefault();
            MetaCPAN.storage.setItem('rightTOC', container.hasClass('pull-right') ? 0 : 1);
            container.toggleClass('pull-right');
        });
        if (MetaCPAN.storage.getItem('rightTOC') == 1) {
            container.addClass("pull-right");
        }
    }
    ['right'].forEach(function(side) {
        var panel = $('#' + side + "-panel");
        if (panel.length) {
            var panel_visible = MetaCPAN.storage.getItem("hide_" + side + "_panel") != 1;
            togglePanel(side, panel_visible);
        }
    });
    $('a[href*="/search?"]').on('click', function() {
        var url = $(this).attr('href');
        var result = /size=(\d+)/.exec(url);
        if (result && result[1]) {
            MetaCPAN.storage.setItem('search_size', result[1]);
        }
    });
    var size = MetaCPAN.storage.getItem('search_size');
    if (size) {
        $('#search-size').val(size);
    }
    set_page_size('a[href*="/releases"]', 'releases_page_size');
    set_page_size('a[href*="/recent"]', 'recent_page_size');
    set_page_size('a[href*="/requires"]', 'requires_page_size');
    var changes = $('.last-changes .change-entries');
    if (changes.prop('scrollHeight') > changes.height()) {
        $('#whatsnew-toggle-overflow').on('click', function() {
            toggleWhatsnew();
        });
    } else {
        $('#whatsnew-toggle-overflow').hide();
    }
});
function set_page_size(selector, storage_name) {
    $(selector).on('click', function() {
        var url = $(this).attr('href');
        var result = /size=(\d+)/.exec(url);
        if (result && result[1]) {
            var page_size = result[1];
            MetaCPAN.storage.setItem(storage_name, page_size);
            return true;
        } else {
            page_size = MetaCPAN.storage.getItem(storage_name);
            if (page_size) {
                if (/\?/.exec(url)) {
                    document.location.href = url + '&size=' + page_size;
                } else {
                    document.location.href = url + '?size=' + page_size;
                }
                return false;
            }
            ;
        }
    });
}
function searchForNearest() {
    $("#busy").css({
        visibility: 'visible'
    });
    navigator.geolocation.getCurrentPosition(function(pos) {
        var query = $.getUrlVar('q');
        if (!query) {
            query = '';
        }
        query = query.replace(/(^|\s+)loc:\S+|$/, '');
        query = query + ' loc:' + pos.coords.latitude + ',' + pos.coords.longitude;
        query = query.replace(/(^|\s)\s+/g, '$1');
        document.location.href = '/mirrors?q=' + encodeURIComponent(query);
    }, function() {
        $("#busy").css({
            visibility: 'hidden'
        });
    }, {
        maximumAge: 600000
    });
}
function logInPAUSE(a) {
    if (!a.href.match(/pause/))
        return true;
    var id = prompt('Please enter your PAUSE ID:');
    if (id)
        document.location.href = a.href + '&id=' + id;
    return false;
}
function processUserData() {
    getFavDataFromServer();
}
function showUserData(fav_data) {
    $('.logged_in').css('display', 'inline');
    $.each(fav_data.faves, function(index, value) {
        var distribution = value.distribution;
        if (MetaCPAN.favs_to_check[distribution]) {
            $('#' + distribution + '-fav input[name="remove"]').val(1);
            $('#' + distribution + '-fav button').addClass('active');
        }
    });
}
// WBRASWELL 20160101: temporarily fix error
// XMLHttpRequest cannot load file:///account/favorite/list_as_json. Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource.
//function getFavDataFromServer(){$.ajax({type:'GET',url:'/account/favorite/list_as_json',success:function(databack){showUserData(databack);},error:function(){$('.logged_out').css('display','inline');}});return true;}
function getFavDataFromServer() {
    return true;
}
function favDistribution(form) {
    form = $(form);
    var data = form.serialize();
    $.ajax({
        type: 'POST',
        url: form.attr('action'),
        data: data,
        success: function() {
            var button = form.find('button');
            button.toggleClass('active');
            var counter = button.find('span');
            var count = counter.text();
            if (button.hasClass('active')) {
                counter.text(count ? parseInt(count, 10) + 1 : 1);
                form.find('input[name="remove"]').val(1);
                if (!count)
                    button.toggleClass('highlight');
            } else {
                form.find('input[name="remove"]').val(0);
                counter.text(parseInt(count, 10) - 1);
                if (counter.text() == 0) {
                    counter.text("");
                    button.toggleClass('highlight');
                }
            }
        },
        error: function() {
            if (confirm("You have to complete a Captcha in order to ++.")) {
                document.location.href = "/account/turing";
            }
        }
    });
    return false;
}
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $(function() {
        var el = $('.nav-list').first();
        var topRow = $('.main-content').first();
        if (!el.length)
            return;
        var height = el.height();
        var content = $("div.content").height() > $("#right-panel").height() ? $("div.content") : $('#right-panel');
        if (height > content.height())
            return;
        function alignSidebar(e) {
            var scrollTop = $(window).scrollTop();
            var screenHeight = $(window).height();
            var contentTop = content.offset().top;
            var contentHeight = content.height();
            if (height > contentHeight || scrollTop < contentTop + (height > screenHeight ? height - screenHeight : 0)) {
                el.addClass("sticky-panel-top").removeClass("sticky-panel-bottom sticky-panel-sticky");
            } else if (scrollTop + height > contentTop + contentHeight) {
                el.addClass("sticky-panel-bottom").removeClass("sticky-panel-top sticky-panel-sticky");
            } else if (height > screenHeight) {
                el.addClass("sticky-panel-bottom sticky-panel-sticky").removeClass("sticky-panel-top");
            } else {
                el.addClass("sticky-panel-sticky sticky-panel-top").removeClass("sticky-panel-bottom");
            }
        }
        ;$(window).scroll(alignSidebar);
        alignSidebar();
    });
}
(function() {
    function GithubUrl(item) {
        this.item = $(item);
        this.href = this.item.attr('href');
    }
    GithubUrl.match = function(a) {
        if ($(a).length == 0)
            return;
        return $(a).attr('href').indexOf('github') >= 0;
    }
    ;
    $.extend(GithubUrl.prototype, {
        config: {
            issues: {
                pattern: /^(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/]+)\/([^\/]+)\/issues\/?$/,
                prepareData: function(data, cb) {
                    var url = this.url.replace('/issues', '');
                    $.getJSON(url, function(repo) {
                        cb({
                            issues: data,
                            repo: repo.data
                        });
                    });
                },
                render: function(data) {
                    if (data.issues.length === 0) {
                        return 'There are currently no open issues.';
                    }
                    var result = '<table>' + '  <tr><th>Open <a href="' + data.repo.html_url + '/issues">Issues</a>:</th><td>' + data.repo.open_issues + '</td></tr>' + '  <tr><th>Last 15 Issues:</th><td><table>';
                    $.each(data.issues, function(idx, row) {
                        result += '<tr><td><span class="relatize">' + row.created_at + '</span></td><td><a href="' + row.html_url + '">' + row.title + '</a></td></tr>';
                    });
                    return result + '</table></td></tr></table>';
                },
                url: function(result) {
                    return this.githubApiUrl + '/repos/' + result[1] + '/' + result[2] + '/issues?per_page=15&callback=?';
                }
            },
            repo: {
                pattern: /^(?:(?:git|https?):\/\/)?(?:www\.)?github\.com(?:\/|:)([^\/]+)\/([^\/\.]+)(?:\/(tree(?:\/master)?)?|\.git)*$/,
                normalizeUrl: function(match) {
                    if (match[3] === 'tree') {
                        this.item.attr('href', this.href.replace(/\/tree$/, ''));
                    }
                },
                render: function(data) {
                    return '<table>' + (data.description ? '  <tr><th>Description:</th><td>' + data.description + '</td></tr>' : '') + (data.homepage ? '  <tr><th>Homepage:</th><td><a href="' + data.homepage + '">' + data.homepage + '</a></td></tr>' : '') + '  <tr><th>Stars:</th><td><a href="' + data.html_url + '/stargazers">' + data.watchers + '</a></td></tr>' + '  <tr><th>Forks:</th><td><a href="' + data.html_url + '/network">' + data.forks + '</a></td></tr>' + (data.has_issues ? '  <tr><th>Open Issues: </th><td><a href="' + data.html_url + '/issues">' + data.open_issues + '</a></td></tr>' : '') + '  <tr><th>Pull Requests:</th><td><a href="' + data.html_url + '/pulls">' + data.html_url + '/pulls' + '</a></td></tr>' + '  <tr><th>Clone URL:</th><td><a href="' + data.clone_url + '">' + data.clone_url + '</a></td></tr>' + '  <tr><th>Git URL:</th><td><a href="' + data.git_url + '">' + data.git_url + '</a></td></tr>' + '  <tr><th>Github URL:</th><td><a href="' + data.html_url + '">' + data.html_url + '</a></td></tr>' + '  <tr><th>SSH URL:</th><td><a href="' + data.ssh_url.replace(/^(\w+\@)?([^:\/]+):/, 'ssh://$1$2/') + '">' + data.ssh_url + '</a></td></tr>' + '  <tr><th>Last Commit:</th><td><span class="relatize">' + data.pushed_at + '</span></td></tr>' + '</table>';
                },
                url: function(result) {
                    return this.githubApiUrl + '/repos/' + result[1] + '/' + result[2] + '?callback=?';
                }
            },
            user: {
                pattern: /^(?:https?:\/\/)?(?:www\.)?github\.com\/([^\/]+)\/?$/,
                render: function(data) {
                    return '<table>' + (data.name ? '  <tr><th>Name:</th><td>' + data.name + '</td></tr>' : '') + (data.email ? '  <tr><th>Email:</th><td><a href="mailto:' + data.email + '">' + data.email + '</a></td></tr>' : '') + (data.blog ? '  <tr><th>Website/Blog:</th><td><a href="' + data.blog + '">' + data.blog + '</a></td></tr>' : '') + (data.company ? '  <tr><th>Company:</th><td>' + data.company + '</td></tr>' : '') + (data.location ? '  <tr><th>Location:</th><td>' + data.location + '</td></tr>' : '') + '  <tr><th>Member Since:</th><td><span class="relatize">' + data.created_at + '</span></td></tr>' + '  <tr><th><a href="' + data.html_url + '/followers">Followers</a>:</th><td>' + data.followers + '</td></tr>' + '  <tr><th><a href="' + data.html_url + '/following">Following</a>:</th><td>' + data.following + '</td></tr>' + '  <tr><th><a href="' + data.html_url + '/repositories">Public Repos</a>:</th><td>' + data.public_repos + '</td></tr>' + '</table>';
                },
                url: function(result) {
                    return this.githubApiUrl + '/users/' + result[1] + '?callback=?';
                }
            }
        },
        githubApiUrl: 'https://api.github.com',
        githubUrl: 'https://github.com',
        createPopup: function() {
            if (!this.parseUrl()) {
                return;
            }
            var self = this;
            this.item.qtip({
                content: {
                    ajax: {
                        dataType: 'json',
                        type: 'GET',
                        url: this.url,
                        success: function(res) {
                            var error;
                            try {
                                if (res.meta && res.meta.status >= 400) {
                                    error = (res.data && res.data.message) || 'An error occurred';
                                }
                            } catch (ignore) {}
                            if (error) {
                                this.set('content.text', '<i>' + error + '</i>');
                                return;
                            }
                            var qtip = this;
                            self.prepareData(res.data, function(data) {
                                var html = self.render(data);
                                qtip.set('content.text', html);
                                $('.qtip-github .relatize').each(function() {
                                    if (!$(this).hasClass('relatized')) {
                                        $(this).relatizeDate();
                                        $(this).addClass('relatized');
                                    }
                                });
                            });
                        }
                    },
                    text: '<i class="fa fa-spinner fa-spin"></i>',
                    title: 'Github Info'
                },
                hide: {
                    event: 'mouseleave',
                    fixed: true
                },
                position: {
                    at: 'right center',
                    my: 'left center'
                },
                style: {
                    classes: 'qtip-shadow qtip-rounded qtip-light qtip-github',
                }
            });
        },
        parseUrl: function() {
            var self = this;
            $.each(this.config, function(type, config) {
                var result = config.pattern.exec(self.href);
                if (result) {
                    if (config.normalizeUrl) {
                        config.normalizeUrl.call(self, result);
                    }
                    self.url = config.url.call(self, result);
                    self.type = type;
                    return false;
                }
            });
            if (this.type) {
                return true;
            }
            return false;
        },
        prepareData: function(data, cb) {
            if (typeof this.config[this.type].prepareData === 'function') {
                this.config[this.type].prepareData.call(this, data, cb);
            } else {
                cb(data);
            }
        },
        render: function(data) {
            try {
                return this.config[this.type].render.call(this, data);
            } catch (x) {
                return '<i>Error</i>';
            }
        }
    });
    $(document).ready(function() {
        $('.nav-list a:not(.nopopup)').each(function() {
            if (GithubUrl.match(this)) {
                (new GithubUrl(this)).createPopup();
            }
        });
        var repository = $('a[data-keyboard-shortcut="g r"]');
        if (GithubUrl.match(repository)) {
            Mousetrap.bind('g p', function() {
                var pull_request_url = repository.attr('href') + '/pulls';
                window.location = pull_request_url;
            });
        }
    });
}());
$(function() {
    function gravatar_fixup(av, size) {
        av = av.replace(/^https?:\/\/([a-z0-9.-]+\.)?gravatar\.com\//i, "https://secure.gravatar.com/");
        av = av.replace(/([;&?])s=\d+/, '$1s=20');
        av = av.replace(/([;&?]d=)([^;&?]+)/, function(match, param, fallback) {
            var url = decodeURIComponent(fallback);
            url = gravatar_fixup(url);
            return ( param + encodeURIComponent(url)) ;
        });
        return av;
    }
    function updateContrib(li, data) {
        if (!data.name) {
            return;
        }
        var anchor = li.find('a.cpan-author');
        if (anchor.length == 0) {
            li.contents().wrap('<a class="cpan-author"></a>');
            anchor = li.find('a.cpan-author');
        }
        li.attr('data-cpan-author', data.pauseid);
        anchor.attr('href', '/author/' + data.pauseid);
        anchor.text(data.name);
        var gravatar = data.gravatar_url;
        if (gravatar) {
            gravatar = gravatar_fixup(gravatar);
            var img = $('<img />').attr('width', 20).attr('height', 20);
            anchor.prepend(img);
            img.addClass('gravatar');
            img.attr('src', gravatar)
        }
    }
    $('#contributors .contributor').each(function() {
        var li = $(this);
        var author;
        var email;
        if (author = li.attr('data-cpan-author')) {
            $.getJSON("https://api.metacpan.org/author/" + author, function(data) {
                updateContrib(li, data);
            });
        } else if (email = li.attr('data-contrib-email')) {
            var filter = $.map(email.split(/\s+/), function(em) {
                return {
                    "term": {
                        "email": em
                    }
                };
            });
            var query = {
                "query": {
                    "match_all": {}
                },
                "filter": {
                    "or": filter
                },
                "fields": ["name", "email", "pauseid", "gravatar_url"],
                "size": 1
            };
            $.ajax({
                type: "POST",
                url: "https://api.metacpan.org/author/",
                data: JSON.stringify(query),
                dataType: "json",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                processData: false,
                success: function(data) {
                    if (data.hits.total == 1) {
                        updateContrib(li, data.hits.hits[0].fields);
                    }
                }
            });
        }
    });
});
$(function() {
    $(".dropdown select").on("change", function() {
        document.location.href = $(this).val();
    });
});
/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    'use strict';
    var backdrop = '.dropdown-backdrop'
    var toggle = '[data-toggle=dropdown]'
    var Dropdown = function(element) {
        $(element).on('click.bs.dropdown', this.toggle)
    }
    Dropdown.prototype.toggle = function(e) {
        var $this = $(this)
        if ($this.is('.disabled, :disabled'))
            return
        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')
        clearMenus()
        if (!isActive) {
            if ('ontouchstart'in document.documentElement && !$parent.closest('.navbar-nav').length) {
                $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
            }
            var relatedTarget = {
                relatedTarget: this
            }
            $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
            if (e.isDefaultPrevented())
                return
            $parent.toggleClass('open').trigger('shown.bs.dropdown', relatedTarget)
            $this.focus()
        }
        return false
    }
    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27)/.test(e.keyCode))
            return
        var $this = $(this)
        e.preventDefault()
        e.stopPropagation()
        if ($this.is('.disabled, :disabled'))
            return
        var $parent = getParent($this)
        var isActive = $parent.hasClass('open')
        if (!isActive || (isActive && e.keyCode == 27)) {
            if (e.which == 27)
                $parent.find(toggle).focus()
            return $this.click()
        }
        var desc = ' li:not(.divider):visible a'
        var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc)
        if (!$items.length)
            return
        var index = $items.index($items.filter(':focus'))
        if (e.keyCode == 38 && index > 0)
            index--
        if (e.keyCode == 40 && index < $items.length - 1)
            index++
        if (!~index)
            index = 0
        $items.eq(index).focus()
    }
    function clearMenus(e) {
        $(backdrop).remove()
        $(toggle).each(function() {
            var $parent = getParent($(this))
            var relatedTarget = {
                relatedTarget: this
            }
            if (!$parent.hasClass('open'))
                return
            $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
            if (e.isDefaultPrevented())
                return
            $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)
        })
    }
    function getParent($this) {
        var selector = $this.attr('data-target')
        if (!selector) {
            selector = $this.attr('href')
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '')
        }
        var $parent = selector && $(selector)
        return $parent && $parent.length ? $parent : $this.parent()
    }
    var old = $.fn.dropdown
    $.fn.dropdown = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.dropdown')
            if (!data)
                $this.data('bs.dropdown', (data = new Dropdown(this)))
            if (typeof option == 'string')
                data[option].call($this)
        })
    }
    $.fn.dropdown.Constructor = Dropdown
    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old
        return this
    }
    $(document).on('click.bs.dropdown.data-api', clearMenus).on('click.bs.dropdown.data-api', '.dropdown form', function(e) {
        e.stopPropagation()
    }).on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle).on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)
}(jQuery);
/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    'use strict';
    var Collapse = function(element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Collapse.DEFAULTS, options)
        this.transitioning = null
        if (this.options.parent)
            this.$parent = $(this.options.parent)
        if (this.options.toggle)
            this.toggle()
    }
    Collapse.DEFAULTS = {
        toggle: true
    }
    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass('width')
        return hasWidth ? 'width' : 'height'
    }
    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass('in'))
            return
        var startEvent = $.Event('show.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented())
            return
        var actives = this.$parent && this.$parent.find('> .panel > .in')
        if (actives && actives.length) {
            var hasData = actives.data('bs.collapse')
            if (hasData && hasData.transitioning)
                return
            actives.collapse('hide')
            hasData || actives.data('bs.collapse', null )
        }
        var dimension = this.dimension()
        this.$element.removeClass('collapse').addClass('collapsing')[dimension](0)
        this.transitioning = 1
        var complete = function() {
            this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('auto')
            this.transitioning = 0
            this.$element.trigger('shown.bs.collapse')
        }
        if (!$.support.transition)
            return complete.call(this)
        var scrollSize = $.camelCase(['scroll', dimension].join('-'))
        this.$element.one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])
    }
    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass('in'))
            return
        var startEvent = $.Event('hide.bs.collapse')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented())
            return
        var dimension = this.dimension()
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight
        this.$element.addClass('collapsing').removeClass('collapse').removeClass('in')
        this.transitioning = 1
        var complete = function() {
            this.transitioning = 0
            this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse')
        }
        if (!$.support.transition)
            return complete.call(this)
        this.$element[dimension](0).one($.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350)
    }
    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }
    var old = $.fn.collapse
    $.fn.collapse = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.collapse')
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data && options.toggle && option == 'show')
                option = !option
            if (!data)
                $this.data('bs.collapse', (data = new Collapse(this,options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    $.fn.collapse.Constructor = Collapse
    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old
        return this
    }
    $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function(e) {
        var $this = $(this), href
        var target = $this.attr('data-target') || e.preventDefault() || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
        var $target = $(target)
        var data = $target.data('bs.collapse')
        var option = data ? 'toggle' : $this.data()
        var parent = $this.attr('data-parent')
        var $parent = parent && $(parent)
        if (!data || !data.transitioning) {
            if ($parent)
                $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
            $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
        }
        $target.collapse(option)
    })
}(jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    'use strict';
    var Modal = function(element, options) {
        this.options = options
        this.$element = $(element)
        this.$backdrop = this.isShown = null
        if (this.options.remote) {
            this.$element.find('.modal-content').load(this.options.remote, $.proxy(function() {
                this.$element.trigger('loaded.bs.modal')
            }, this))
        }
    }
    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    }
    Modal.prototype.toggle = function(_relatedTarget) {
        return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
    }
    Modal.prototype.show = function(_relatedTarget) {
        var that = this
        var e = $.Event('show.bs.modal', {
            relatedTarget: _relatedTarget
        })
        this.$element.trigger(e)
        if (this.isShown || e.isDefaultPrevented())
            return
        this.isShown = true
        this.escape()
        this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass('fade')
            if (!that.$element.parent().length) {
                that.$element.appendTo(document.body)
            }
            that.$element.show().scrollTop(0)
            if (transition) {
                that.$element[0].offsetWidth
            }
            that.$element.addClass('in').attr('aria-hidden', false)
            that.enforceFocus()
            var e = $.Event('shown.bs.modal', {
                relatedTarget: _relatedTarget
            })
            transition ? that.$element.find('.modal-dialog').one($.support.transition.end, function() {
                that.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : that.$element.focus().trigger(e)
        })
    }
    Modal.prototype.hide = function(e) {
        if (e)
            e.preventDefault()
        e = $.Event('hide.bs.modal')
        this.$element.trigger(e)
        if (!this.isShown || e.isDefaultPrevented())
            return
        this.isShown = false
        this.escape()
        $(document).off('focusin.bs.modal')
        this.$element.removeClass('in').attr('aria-hidden', true).off('click.dismiss.bs.modal')
        $.support.transition && this.$element.hasClass('fade') ? this.$element.one($.support.transition.end, $.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal()
    }
    Modal.prototype.enforceFocus = function() {
        $(document).off('focusin.bs.modal').on('focusin.bs.modal', $.proxy(function(e) {
            if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                this.$element.focus()
            }
        }, this))
    }
    Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on('keyup.dismiss.bs.modal', $.proxy(function(e) {
                e.which == 27 && this.hide()
            }, this))
        } else if (!this.isShown) {
            this.$element.off('keyup.dismiss.bs.modal')
        }
    }
    Modal.prototype.hideModal = function() {
        var that = this
        this.$element.hide()
        this.backdrop(function() {
            that.removeBackdrop()
            that.$element.trigger('hidden.bs.modal')
        })
    }
    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
    }
    Modal.prototype.backdrop = function(callback) {
        var animate = this.$element.hasClass('fade') ? 'fade' : ''
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate
            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />').appendTo(document.body)
            this.$element.on('click.dismiss.bs.modal', $.proxy(function(e) {
                if (e.target !== e.currentTarget)
                    return
                this.options.backdrop == 'static' ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this)
            }, this))
            if (doAnimate)
                this.$backdrop[0].offsetWidth
            this.$backdrop.addClass('in')
            if (!callback)
                return
            doAnimate ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in')
            $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one($.support.transition.end, callback).emulateTransitionEnd(150) : callback()
        } else if (callback) {
            callback()
        }
    }
    var old = $.fn.modal
    $.fn.modal = function(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.modal')
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)
            if (!data)
                $this.data('bs.modal', (data = new Modal(this,options)))
            if (typeof option == 'string')
                data[option](_relatedTarget)
            else if (options.show)
                data.show(_relatedTarget)
        })
    }
    $.fn.modal.Constructor = Modal
    $.fn.modal.noConflict = function() {
        $.fn.modal = old
        return this
    }
    $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function(e) {
        var $this = $(this)
        var href = $this.attr('href')
        var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '')))
        var option = $target.data('bs.modal') ? 'toggle' : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data())
        if ($this.is('a'))
            e.preventDefault()
        $target.modal(option, this).one('hide', function() {
            $this.is(':visible') && $this.focus()
        })
    })
    $(document).on('show.bs.modal', '.modal', function() {
        $(document.body).addClass('modal-open')
    }).on('hidden.bs.modal', '.modal', function() {
        $(document.body).removeClass('modal-open')
    })
}(jQuery);
/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    'use strict';
    var Tooltip = function(element, options) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null
        this.init('tooltip', element, options)
    }
    Tooltip.DEFAULTS = {
        animation: true,
        placement: 'top',
        selector: false,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: false,
        container: false
    }
    Tooltip.prototype.init = function(type, element, options) {
        this.enabled = true
        this.type = type
        this.$element = $(element)
        this.options = this.getOptions(options)
        var triggers = this.options.trigger.split(' ')
        for (var i = triggers.length; i--; ) {
            var trigger = triggers[i]
            if (trigger == 'click') {
                this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
            } else if (trigger != 'manual') {
                var eventIn = trigger == 'hover' ? 'mouseenter' : 'focusin'
                var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
                this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
                this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
            }
        }
        this.options.selector ? (this._options = $.extend({}, this.options, {
            trigger: 'manual',
            selector: ''
        })) : this.fixTitle()
    }
    Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS
    }
    Tooltip.prototype.getOptions = function(options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options)
        if (options.delay && typeof options.delay == 'number') {
            options.delay = {
                show: options.delay,
                hide: options.delay
            }
        }
        return options
    }
    Tooltip.prototype.getDelegateOptions = function() {
        var options = {}
        var defaults = this.getDefaults()
        this._options && $.each(this._options, function(key, value) {
            if (defaults[key] != value)
                options[key] = value
        })
        return options
    }
    Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
        clearTimeout(self.timeout)
        self.hoverState = 'in'
        if (!self.options.delay || !self.options.delay.show)
            return self.show()
        self.timeout = setTimeout(function() {
            if (self.hoverState == 'in')
                self.show()
        }, self.options.delay.show)
    }
    Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)
        clearTimeout(self.timeout)
        self.hoverState = 'out'
        if (!self.options.delay || !self.options.delay.hide)
            return self.hide()
        self.timeout = setTimeout(function() {
            if (self.hoverState == 'out')
                self.hide()
        }, self.options.delay.hide)
    }
    Tooltip.prototype.show = function() {
        var e = $.Event('show.bs.' + this.type)
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e)
            if (e.isDefaultPrevented())
                return
            var that = this;
            var $tip = this.tip()
            this.setContent()
            if (this.options.animation)
                $tip.addClass('fade')
            var placement = typeof this.options.placement == 'function' ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement
            var autoToken = /\s?auto?\s?/i
            var autoPlace = autoToken.test(placement)
            if (autoPlace)
                placement = placement.replace(autoToken, '') || 'top'
            $tip.detach().css({
                top: 0,
                left: 0,
                display: 'block'
            }).addClass(placement)
            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
            var pos = this.getPosition()
            var actualWidth = $tip[0].offsetWidth
            var actualHeight = $tip[0].offsetHeight
            if (autoPlace) {
                var $parent = this.$element.parent()
                var orgPlacement = placement
                var docScroll = document.documentElement.scrollTop || document.body.scrollTop
                var parentWidth = this.options.container == 'body' ? window.innerWidth : $parent.outerWidth()
                var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
                var parentLeft = this.options.container == 'body' ? 0 : $parent.offset().left
                placement = placement == 'bottom' && pos.top + pos.height + actualHeight - docScroll > parentHeight ? 'top' : placement == 'top' && pos.top - docScroll - actualHeight < 0 ? 'bottom' : placement == 'right' && pos.right + actualWidth > parentWidth ? 'left' : placement == 'left' && pos.left - actualWidth < parentLeft ? 'right' : placement
                $tip.removeClass(orgPlacement).addClass(placement)
            }
            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
            this.applyPlacement(calculatedOffset, placement)
            this.hoverState = null
            var complete = function() {
                that.$element.trigger('shown.bs.' + that.type)
            }
            $.support.transition && this.$tip.hasClass('fade') ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete()
        }
    }
    Tooltip.prototype.applyPlacement = function(offset, placement) {
        var replace
        var $tip = this.tip()
        var width = $tip[0].offsetWidth
        var height = $tip[0].offsetHeight
        var marginTop = parseInt($tip.css('margin-top'), 10)
        var marginLeft = parseInt($tip.css('margin-left'), 10)
        if (isNaN(marginTop))
            marginTop = 0
        if (isNaN(marginLeft))
            marginLeft = 0
        offset.top = offset.top + marginTop
        offset.left = offset.left + marginLeft
        $.offset.setOffset($tip[0], $.extend({
            using: function(props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                })
            }
        }, offset), 0)
        $tip.addClass('in')
        var actualWidth = $tip[0].offsetWidth
        var actualHeight = $tip[0].offsetHeight
        if (placement == 'top' && actualHeight != height) {
            replace = true
            offset.top = offset.top + height - actualHeight
        }
        if (/bottom|top/.test(placement)) {
            var delta = 0
            if (offset.left < 0) {
                delta = offset.left * -2
                offset.left = 0
                $tip.offset(offset)
                actualWidth = $tip[0].offsetWidth
                actualHeight = $tip[0].offsetHeight
            }
            this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
        } else {
            this.replaceArrow(actualHeight - height, actualHeight, 'top')
        }
        if (replace)
            $tip.offset(offset)
    }
    Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
        this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')
    }
    Tooltip.prototype.setContent = function() {
        var $tip = this.tip()
        var title = this.getTitle()
        $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
        $tip.removeClass('fade in top bottom left right')
    }
    Tooltip.prototype.hide = function() {
        var that = this
        var $tip = this.tip()
        var e = $.Event('hide.bs.' + this.type)
        function complete() {
            if (that.hoverState != 'in')
                $tip.detach()
            that.$element.trigger('hidden.bs.' + that.type)
        }
        this.$element.trigger(e)
        if (e.isDefaultPrevented())
            return
        $tip.removeClass('in')
        $.support.transition && this.$tip.hasClass('fade') ? $tip.one($.support.transition.end, complete).emulateTransitionEnd(150) : complete()
        this.hoverState = null
        return this
    }
    Tooltip.prototype.fixTitle = function() {
        var $e = this.$element
        if ($e.attr('title') || typeof ($e.attr('data-original-title')) != 'string') {
            $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
        }
    }
    Tooltip.prototype.hasContent = function() {
        return this.getTitle()
    }
    Tooltip.prototype.getPosition = function() {
        var el = this.$element[0]
        return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
            width: el.offsetWidth,
            height: el.offsetHeight
        }, this.$element.offset())
    }
    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        return placement == 'bottom' ? {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == 'top' ? {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == 'left' ? {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
        } : {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width
        }
    }
    Tooltip.prototype.getTitle = function() {
        var title
        var $e = this.$element
        var o = this.options
        title = $e.attr('data-original-title') || (typeof o.title == 'function' ? o.title.call($e[0]) : o.title)
        return title
    }
    Tooltip.prototype.tip = function() {
        return this.$tip = this.$tip || $(this.options.template)
    }
    Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
    }
    Tooltip.prototype.validate = function() {
        if (!this.$element[0].parentNode) {
            this.hide()
            this.$element = null
            this.options = null
        }
    }
    Tooltip.prototype.enable = function() {
        this.enabled = true
    }
    Tooltip.prototype.disable = function() {
        this.enabled = false
    }
    Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    Tooltip.prototype.toggle = function(e) {
        var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
        self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
    Tooltip.prototype.destroy = function() {
        clearTimeout(this.timeout)
        this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
    }
    var old = $.fn.tooltip
    $.fn.tooltip = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.tooltip')
            var options = typeof option == 'object' && option
            if (!data && option == 'destroy')
                return
            if (!data)
                $this.data('bs.tooltip', (data = new Tooltip(this,options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    $.fn.tooltip.Constructor = Tooltip
    $.fn.tooltip.noConflict = function() {
        $.fn.tooltip = old
        return this
    }
}(jQuery);
/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    'use strict';
    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options)
        this.$window = $(window).on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this))
        this.$element = $(element)
        this.affixed = this.unpin = this.pinnedOffset = null
        this.checkPosition()
    }
    Affix.RESET = 'affix affix-top affix-bottom'
    Affix.DEFAULTS = {
        offset: 0
    }
    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset
        this.$element.removeClass(Affix.RESET).addClass('affix')
        var scrollTop = this.$window.scrollTop()
        var position = this.$element.offset()
        return ( this.pinnedOffset = position.top - scrollTop)
    }
    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }
    Affix.prototype.checkPosition = function() {
        if (!this.$element.is(':visible'))
            return
        var scrollHeight = $(document).height()
        var scrollTop = this.$window.scrollTop()
        var position = this.$element.offset()
        var offset = this.options.offset
        var offsetTop = offset.top
        var offsetBottom = offset.bottom
        if (this.affixed == 'top')
            position.top += scrollTop
        if (typeof offset != 'object')
            offsetBottom = offsetTop = offset
        if (typeof offsetTop == 'function')
            offsetTop = offset.top(this.$element)
        if (typeof offsetBottom == 'function')
            offsetBottom = offset.bottom(this.$element)
        var affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ? false : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' : offsetTop != null && (scrollTop <= offsetTop) ? 'top' : false
        if (this.affixed === affix)
            return
        if (this.unpin)
            this.$element.css('top', '')
        var affixType = 'affix' + (affix ? '-' + affix : '')
        var e = $.Event(affixType + '.bs.affix')
        this.$element.trigger(e)
        if (e.isDefaultPrevented())
            return
        this.affixed = affix
        this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null
        this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace('affix', 'affixed')))
        if (affix == 'bottom') {
            this.$element.offset({
                top: scrollHeight - offsetBottom - this.$element.height()
            })
        }
    }
    var old = $.fn.affix
    $.fn.affix = function(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.affix')
            var options = typeof option == 'object' && option
            if (!data)
                $this.data('bs.affix', (data = new Affix(this,options)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    $.fn.affix.Constructor = Affix
    $.fn.affix.noConflict = function() {
        $.fn.affix = old
        return this
    }
    $(window).on('load', function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this)
            var data = $spy.data()
            data.offset = data.offset || {}
            if (data.offsetBottom)
                data.offset.bottom = data.offsetBottom
            if (data.offsetTop)
                data.offset.top = data.offsetTop
            $spy.affix(data)
        })
    })
}(jQuery);
!function($) {
    "use strict";
    var SlidePanel = function(element) {
        this.element = $(element)
    }
    SlidePanel.prototype = {
        constructor: SlidePanel,
        toggle: function() {
            var $this = this.element, selector = $this.attr('data-target'), width = $this.attr('data-slidepanel-width'), $target, e
            e = $.Event('toggle')
            $this.trigger(e)
            if (e.isDefaultPrevented())
                return
            $target = $(selector)
            if (!width) {
                width = $target.outerWidth()
                $this.attr('data-slidepanel-width', width)
                $target.css('left', -width).css('visibility', 'visible');
            }
            if ($target.hasClass('slidepanel-visible'))
                this.hide()
            else
                this.show()
        },
        show: function($target) {
            var $this = this.element, selector = $this.attr('data-target'), width = $this.attr('data-slidepanel-width'), e
            if (!$target)
                $target = $(selector)
            $this.css('transform', 'translateX(' + width + 'px)')
            $target.css('transform', 'translateX(' + width + 'px)').addClass('slidepanel-visible');
        },
        hide: function($target) {
            var $this = this.element, selector = $this.attr('data-target'), width = $this.attr('data-slidepanel-width'), e
            if (!$target)
                $target = $(selector)
            $target.css('transform', 'translateX(0px)').removeClass('slidepanel-visible');
            $this.css('transform', 'translateX(0px)')
        }
    }
    var old = $.fn.slidepanel
    $.fn.slidepanel = function(option) {
        return this.each(function() {
            var $this = $(this)
              , data = $this.data('slidepanel')
            if (!data)
                $this.data('slidepanel', (data = new SlidePanel(this)))
            if (typeof option == 'string')
                data[option]()
        })
    }
    $.fn.slidepanel.Constructor = SlidePanel
    $.fn.slidepanel.noConflict = function() {
        $.fn.slidepanel = old
        return this
    }
    $(document).on('click.slidepanel.data-api', '[data-toggle="slidepanel"]', function(e) {
        e.preventDefault()
        $(this).slidepanel('toggle')
    })
}(window.jQuery);
$(function() {
    function parseLines(lines) {
        lines = lines.split(/\s*,\s*/);
        var all_lines = [];
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            var res = line.match(/^\s*(\d+)\s*(?:-\s*(\d+)\s*)?$/);
            if (res) {
                var start = res[1] * 1;
                var end = (res[2] || res[1]) * 1;
                if (start > end) {
                    var swap = end;
                    end = start;
                    start = swap;
                }
                for (var l = start; l <= end; l++) {
                    all_lines.push(l);
                }
            }
        }
        return all_lines;
    }
    function findLines(el, lines) {
        var selector = $.map(parseLines(lines), function(line) {
            return '.number' + line
        }).join(', ');
        return el.find('.syntaxhighlighter .line').filter(selector);
    }
    var hashLines = /^#L(\d+(?:-\d+)?(?:,\d+(?:-\d+)?)*)$/;
    SyntaxHighlighter.regexLib['url'] = /[a-z][a-z0-9.+-]*:\/\/[\w-.\/?%&=:@;#~]*[\w-\/?&=:@;#~]/gi;
    function processPackages(code) {
        var destination = document.location.href.match(/\/source\//) ? 'source' : 'pod'
          , strip_delimiters = /((?:["']|q[qw]?(?:[^&a-z]|&#?[a-zA-Z0-9]+;))\s*)([A-Za-z0-9_\:]+)(.*)/;
        code = code.replace(/(<code class="p(?:er)?l keyword">(?:with|extends|use<\/code> <code class="p(?:er)?l plain">(?:parent|base|aliased|Mojo::Base))\s*<\/code>\s*<code class="p(?:er)?l string">(?:qw(?:[^&a-z]|&#?[a-zA-Z0-9]+;)<\/code>.+?<code class="p(?:er)?l string">)?)(.+?)(<\/code>)/g, function(m, prefix, pkg, suffix) {
            var match = null , mcpan_url;
            if (match = strip_delimiters.exec(pkg)) {
                prefix = prefix + match[1];
                pkg = match[2];
                suffix = match[3] + suffix;
            }
            mcpan_url = '<a href="/' + destination + '/' + pkg + '">' + pkg + '</a>';
            return prefix + mcpan_url + suffix;
        });
        return code.replace(/(<code class="p(?:er)?l keyword">(use|package|require)<\/code> <code class="p(?:er)?l plain">)([A-Z_a-z][0-9A-Z_a-z]*(?:::[0-9A-Z_a-z]+)*)(.*?<\/code>)/g, '$1<a href="/' + destination + '/$3">$3</a>$4');
    }
    ;var getCodeLinesHtml = SyntaxHighlighter.Highlighter.prototype.getCodeLinesHtml;
    SyntaxHighlighter.Highlighter.prototype.getCodeLinesHtml = function(html, lineNumbers) {
        html = html.replace(/^ /, "&#32;");
        html = html.replace(/^\t/, "&#9;");
        html = getCodeLinesHtml.call(this, html, lineNumbers);
        return processPackages(html);
    }
    ;
    var source = $("#source");
    if (source.length) {
        var lineMatch;
        var packageMatch;
        if (source.html().length > 500000) {
            source.children('code').removeClass();
        } else if (lineMatch = document.location.hash.match(hashLines)) {
            source.attr('data-line', lineMatch[1]);
        } else if (packageMatch = document.location.hash.match(/^#P(\S+)$/)) {
            var decodedPackageMatch = decodeURIComponent(packageMatch[1]);
            var leadingSource = source.text().split("package " + decodedPackageMatch + ";");
            var lineCount = leadingSource[0].split("\n").length;
            if (leadingSource.length > 1 && lineCount > 1) {
                source.attr('data-line', lineCount);
                document.location.hash = "#L" + lineCount;
            } else {
                document.location.hash = '';
            }
        }
    }
    $(".pod pre > code").each(function(index, code) {
        var have_lang;
        if (code.className && code.className.match(/(?:\s|^)language-\S+/)) {
            return;
        }
        $(code).addClass('language-perl');
    });
    $(".content pre > code").each(function(index, code) {
        var pre = $(code).parent();
        var config = {
            'gutter': false,
            'toolbar': false,
            'quick-code': false,
            'tab-size': 8
        };
        if (code.className) {
            var res = code.className.match(/(?:\s|^)language-(\S+)/);
            if (res) {
                config.brush = res[1];
            }
        }
        if (!config.brush) {
            return;
        }
        if (pre.hasClass('line-numbers')) {
            config.gutter = true;
        }
        var first_line = pre.attr('data-start');
        if (first_line) {
            config['first-line'] = first_line;
        }
        var lines = pre.attr('data-line');
        if (lines) {
            config.highlight = parseLines(lines);
        }
        var html = $(code).html();
        if (html.match(/^ *\n/)) {
            $(code).html("\n " + html);
        }
        SyntaxHighlighter.highlight(config, code);
        var pod_lines = pre.attr('data-pod-lines');
        if (pod_lines) {
            var pods = findLines(pre, pod_lines);
            pods.addClass('pod-line');
            if (pods.filter('.highlighted').length) {
                $('.pod-toggle').removeClass('pod-hidden');
            }
            pods.each(function(i, line) {
                var $line = $(line);
                var prev = $line.prev();
                if (!prev.length || !prev.hasClass('pod-line')) {
                    if ($line.parent('.gutter').length) {
                        $line.before('<div class="pod-placeholder">&mdash;</div>');
                    } else {
                        var lines = $line.nextUntil(':not(.pod-line)').length + 1;
                        $line.before('<div class="pod-placeholder"><button onclick="togglePod()" class="btn-link"><span class="hide-pod">Hide</span><span class="show-pod">Show</span> ' + lines + ' line' + (lines > 1 ? 's' : '') + ' of Pod</button></div>');
                    }
                }
            });
        }
    });
    if (source.length) {
        source.find('.syntaxhighlighter .gutter .line').each(function(i, el) {
            var line = $(el);
            var res;
            if (res = line.attr('class').match(/(^|\s)number(\d+)(\s|$)/)) {
                var linenr = res[2];
                var id = 'L' + linenr;
                line.contents().wrap('<a href="#' + id + '" id="' + id + '"></a>');
                var link = line.children('a');
                link.click(function(e) {
                    if (e.metaKey) {
                        return false;
                    }
                    e.preventDefault();
                    var line = linenr;
                    if (e.shiftKey && source.attr('data-line')) {
                        var startLine = parseLines(source.attr('data-line'))[0];
                        line = startLine < line ? startLine + '-' + line : line + '-' + startLine;
                    }
                    link.removeAttr('id');
                    document.location.hash = '#L' + line;
                    link.attr('id', id);
                    source.attr('data-line', line);
                });
            }
        });
        var res;
        if (res = document.location.hash.match(/^(#L\d+)(-|,|$)/)) {
            var el = $(res[1]);
            $('html, body').scrollTop(el.offset().top);
        }
        $(window).on('hashchange', function() {
            var lineMatch;
            if (lineMatch = document.location.hash.match(hashLines)) {
                source.attr('data-line', lineMatch[1]);
                source.find('.highlighted').removeClass('highlighted');
                var lines = findLines(source, lineMatch[1]);
                lines.addClass('highlighted');
                if (lines.filter('.pod-line').length) {
                    $('.pod-toggle').removeClass('pod-hidden');
                    $(window).scrollTop($(lines[0]).offset().top);
                }
            }
        });
    }
});
function togglePod() {
    var scrollTop = $(window).scrollTop();
    var topLine;
    var topOffset;
    $('.syntaxhighlighter .line').each(function(i, el) {
        var line = $(el);
        if (line.hasClass('pod-line')) {
            return;
        } else if ($(el).offset().top < scrollTop) {
            topLine = line;
        }
    });
    if (topLine) {
        topOffset = topLine.offset().top - scrollTop;
    }
    $('.pod-toggle').toggleClass('pod-hidden');
    if (topLine) {
        $(window).scrollTop(topLine.offset().top - topOffset);
    }
}
