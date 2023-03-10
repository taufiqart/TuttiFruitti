function getCookie(e) {
    var t = "; " + document.cookie,
        n = t.split("; " + e + "=");
    return 2 === n.length ? n.pop().split(";").shift() : void 0;
}
!(function (e, t) {
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
            ? t(e, !0)
            : function (e) {
                if (!e.document)
                    throw new Error("jQuery requires a window with a document");
                return t(e);
            })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
            n = pe.type(e);
        return "function" === n || pe.isWindow(e)
            ? !1
            : "array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e);
    }
    function r(e, t, n) {
        if (pe.isFunction(t))
            return pe.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n;
            });
        if (t.nodeType)
            return pe.grep(e, function (e) {
                return (e === t) !== n;
            });
        if ("string" == typeof t) {
            if (Ce.test(t)) return pe.filter(t, e, n);
            t = pe.filter(t, e);
        }
        return pe.grep(e, function (e) {
            return pe.inArray(e, t) > -1 !== n;
        });
    }
    function i(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e;
    }
    function o(e) {
        var t = {};
        return (
            pe.each(e.match(Ne) || [], function (e, n) {
                t[n] = !0;
            }),
            t
        );
    }
    function a() {
        re.addEventListener
            ? (re.removeEventListener("DOMContentLoaded", s),
                e.removeEventListener("load", s))
            : (re.detachEvent("onreadystatechange", s), e.detachEvent("onload", s));
    }
    function s() {
        (re.addEventListener ||
            "load" === e.event.type ||
            "complete" === re.readyState) &&
            (a(), pe.ready());
    }
    function u(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(qe, "-$1").toLowerCase();
            if (((n = e.getAttribute(r)), "string" == typeof n)) {
                try {
                    n =
                        "true" === n
                            ? !0
                            : "false" === n
                                ? !1
                                : "null" === n
                                    ? null
                                    : +n + "" === n
                                        ? +n
                                        : _e.test(n)
                                            ? pe.parseJSON(n)
                                            : n;
                } catch (i) { }
                pe.data(e, t, n);
            } else n = void 0;
        }
        return n;
    }
    function l(e) {
        var t;
        for (t in e)
            if (("data" !== t || !pe.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0;
    }
    function c(e, t, n, r) {
        if (He(e)) {
            var i,
                o,
                a = pe.expando,
                s = e.nodeType,
                u = s ? pe.cache : e,
                l = s ? e[a] : e[a] && a;
            if (
                (l && u[l] && (r || u[l].data)) ||
                void 0 !== n ||
                "string" != typeof t
            )
                return (
                    l || (l = s ? (e[a] = ne.pop() || pe.guid++) : a),
                    u[l] || (u[l] = s ? {} : { toJSON: pe.noop }),
                    ("object" == typeof t || "function" == typeof t) &&
                    (r
                        ? (u[l] = pe.extend(u[l], t))
                        : (u[l].data = pe.extend(u[l].data, t))),
                    (o = u[l]),
                    r || (o.data || (o.data = {}), (o = o.data)),
                    void 0 !== n && (o[pe.camelCase(t)] = n),
                    "string" == typeof t
                        ? ((i = o[t]), null == i && (i = o[pe.camelCase(t)]))
                        : (i = o),
                    i
                );
        }
    }
    function d(e, t, n) {
        if (He(e)) {
            var r,
                i,
                o = e.nodeType,
                a = o ? pe.cache : e,
                s = o ? e[pe.expando] : pe.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    pe.isArray(t)
                        ? (t = t.concat(pe.map(t, pe.camelCase)))
                        : t in r
                            ? (t = [t])
                            : ((t = pe.camelCase(t)), (t = t in r ? [t] : t.split(" "))),
                        (i = t.length);
                    for (; i--;) delete r[t[i]];
                    if (n ? !l(r) : !pe.isEmptyObject(r)) return;
                }
                (n || (delete a[s].data, l(a[s]))) &&
                    (o
                        ? pe.cleanData([e], !0)
                        : de.deleteExpando || a != a.window
                            ? delete a[s]
                            : (a[s] = void 0));
            }
        }
    }
    function f(e, t, n, r) {
        var i,
            o = 1,
            a = 20,
            s = r
                ? function () {
                    return r.cur();
                }
                : function () {
                    return pe.css(e, t, "");
                },
            u = s(),
            l = (n && n[3]) || (pe.cssNumber[t] ? "" : "px"),
            c = (pe.cssNumber[t] || ("px" !== l && +u)) && Oe.exec(pe.css(e, t));
        if (c && c[3] !== l) {
            (l = l || c[3]), (n = n || []), (c = +u || 1);
            do (o = o || ".5"), (c /= o), pe.style(e, t, c + l);
            while (o !== (o = s() / u) && 1 !== o && --a);
        }
        return (
            n &&
            ((c = +c || +u || 0),
                (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
        );
    }
    function p(e) {
        var t = We.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n;
    }
    function h(e, t) {
        var n,
            r,
            i = 0,
            o =
                "undefined" != typeof e.getElementsByTagName
                    ? e.getElementsByTagName(t || "*")
                    : "undefined" != typeof e.querySelectorAll
                        ? e.querySelectorAll(t || "*")
                        : void 0;
        if (!o)
            for (o = [], n = e.childNodes || e; null != (r = n[i]); i++)
                !t || pe.nodeName(r, t) ? o.push(r) : pe.merge(o, h(r, t));
        return void 0 === t || (t && pe.nodeName(e, t)) ? pe.merge([e], o) : o;
    }
    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            pe._data(n, "globalEval", !t || pe._data(t[r], "globalEval"));
    }
    function g(e) {
        Ie.test(e.type) && (e.defaultChecked = e.checked);
    }
    function v(e, t, n, r, i) {
        for (
            var o, a, s, u, l, c, d, f = e.length, v = p(t), y = [], b = 0;
            f > b;
            b++
        )
            if (((a = e[b]), a || 0 === a))
                if ("object" === pe.type(a)) pe.merge(y, a.nodeType ? [a] : a);
                else if (Ue.test(a)) {
                    for (
                        u = u || v.appendChild(t.createElement("div")),
                        l = (Ge.exec(a) || ["", ""])[1].toLowerCase(),
                        d = $e[l] || $e._default,
                        u.innerHTML = d[1] + pe.htmlPrefilter(a) + d[2],
                        o = d[0];
                        o--;

                    )
                        u = u.lastChild;
                    if (
                        (!de.leadingWhitespace &&
                            ze.test(a) &&
                            y.push(t.createTextNode(ze.exec(a)[0])),
                            !de.tbody)
                    )
                        for (
                            a =
                            "table" !== l || Xe.test(a)
                                ? "<table>" !== d[1] || Xe.test(a)
                                    ? 0
                                    : u
                                : u.firstChild,
                            o = a && a.childNodes.length;
                            o--;

                        )
                            pe.nodeName((c = a.childNodes[o]), "tbody") &&
                                !c.childNodes.length &&
                                a.removeChild(c);
                    for (pe.merge(y, u.childNodes), u.textContent = ""; u.firstChild;)
                        u.removeChild(u.firstChild);
                    u = v.lastChild;
                } else y.push(t.createTextNode(a));
        for (
            u && v.removeChild(u),
            de.appendChecked || pe.grep(h(y, "input"), g),
            b = 0;
            (a = y[b++]);

        )
            if (r && pe.inArray(a, r) > -1) i && i.push(a);
            else if (
                ((s = pe.contains(a.ownerDocument, a)),
                    (u = h(v.appendChild(a), "script")),
                    s && m(u),
                    n)
            )
                for (o = 0; (a = u[o++]);) Be.test(a.type || "") && n.push(a);
        return (u = null), v;
    }
    function y() {
        return !0;
    }
    function b() {
        return !1;
    }
    function x() {
        try {
            return re.activeElement;
        } catch (e) { }
    }
    function w(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && ((r = r || n), (n = void 0));
            for (s in t) w(e, s, n, r, t[s], o);
            return e;
        }
        if (
            (null == r && null == i
                ? ((i = n), (r = n = void 0))
                : null == i &&
                ("string" == typeof n
                    ? ((i = r), (r = void 0))
                    : ((i = r), (r = n), (n = void 0))),
                i === !1)
        )
            i = b;
        else if (!i) return e;
        return (
            1 === o &&
            ((a = i),
                (i = function (e) {
                    return pe().off(e), a.apply(this, arguments);
                }),
                (i.guid = a.guid || (a.guid = pe.guid++))),
            e.each(function () {
                pe.event.add(this, t, i, r, n);
            })
        );
    }
    function A(e, t) {
        return pe.nodeName(e, "table") &&
            pe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
            ? e.getElementsByTagName("tbody")[0] ||
            e.appendChild(e.ownerDocument.createElement("tbody"))
            : e;
    }
    function C(e) {
        return (e.type = (null !== pe.find.attr(e, "type")) + "/" + e.type), e;
    }
    function T(e) {
        var t = it.exec(e.type);
        return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function k(e, t) {
        if (1 === t.nodeType && pe.hasData(e)) {
            var n,
                r,
                i,
                o = pe._data(e),
                a = pe._data(t, o),
                s = o.events;
            if (s) {
                delete a.handle, (a.events = {});
                for (n in s)
                    for (r = 0, i = s[n].length; i > r; r++) pe.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = pe.extend({}, a.data));
        }
    }
    function E(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (((n = t.nodeName.toLowerCase()), !de.noCloneEvent && t[pe.expando])) {
                i = pe._data(t);
                for (r in i.events) pe.removeEvent(t, r, i.handle);
                t.removeAttribute(pe.expando);
            }
            "script" === n && t.text !== e.text
                ? ((C(t).text = e.text), T(t))
                : "object" === n
                    ? (t.parentNode && (t.outerHTML = e.outerHTML),
                        de.html5Clone &&
                        e.innerHTML &&
                        !pe.trim(t.innerHTML) &&
                        (t.innerHTML = e.innerHTML))
                    : "input" === n && Ie.test(e.type)
                        ? ((t.defaultChecked = t.checked = e.checked),
                            t.value !== e.value && (t.value = e.value))
                        : "option" === n
                            ? (t.defaultSelected = t.selected = e.defaultSelected)
                            : ("input" === n || "textarea" === n) &&
                            (t.defaultValue = e.defaultValue);
        }
    }
    function j(e, t, n, r) {
        t = oe.apply([], t);
        var i,
            o,
            a,
            s,
            u,
            l,
            c = 0,
            d = e.length,
            f = d - 1,
            p = t[0],
            m = pe.isFunction(p);
        if (m || (d > 1 && "string" == typeof p && !de.checkClone && rt.test(p)))
            return e.each(function (i) {
                var o = e.eq(i);
                m && (t[0] = p.call(this, i, o.html())), j(o, t, n, r);
            });
        if (
            d &&
            ((l = v(t, e[0].ownerDocument, !1, e, r)),
                (i = l.firstChild),
                1 === l.childNodes.length && (l = i),
                i || r)
        ) {
            for (s = pe.map(h(l, "script"), C), a = s.length; d > c; c++)
                (o = l),
                    c !== f &&
                    ((o = pe.clone(o, !0, !0)), a && pe.merge(s, h(o, "script"))),
                    n.call(e[c], o, c);
            if (a)
                for (u = s[s.length - 1].ownerDocument, pe.map(s, T), c = 0; a > c; c++)
                    (o = s[c]),
                        Be.test(o.type || "") &&
                        !pe._data(o, "globalEval") &&
                        pe.contains(u, o) &&
                        (o.src
                            ? pe._evalUrl && pe._evalUrl(o.src)
                            : pe.globalEval(
                                (o.text || o.textContent || o.innerHTML || "").replace(
                                    ot,
                                    ""
                                )
                            ));
            l = i = null;
        }
        return e;
    }
    function S(e, t, n) {
        for (var r, i = t ? pe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || pe.cleanData(h(r)),
                r.parentNode &&
                (n && pe.contains(r.ownerDocument, r) && m(h(r, "script")),
                    r.parentNode.removeChild(r));
        return e;
    }
    function N(e, t) {
        var n = pe(t.createElement(e)).appendTo(t.body),
            r = pe.css(n[0], "display");
        return n.detach(), r;
    }
    function D(e) {
        var t = re,
            n = lt[e];
        return (
            n ||
            ((n = N(e, t)),
                ("none" !== n && n) ||
                ((ut = (
                    ut || pe("<iframe frameborder='0' width='0' height='0'/>")
                ).appendTo(t.documentElement)),
                    (t = (ut[0].contentWindow || ut[0].contentDocument).document),
                    t.write(),
                    t.close(),
                    (n = N(e, t)),
                    ut.detach()),
                (lt[e] = n)),
            n
        );
    }
    function L(e, t) {
        return {
            get: function () {
                return e()
                    ? void delete this.get
                    : (this.get = t).apply(this, arguments);
            },
        };
    }
    function H(e) {
        if (e in Tt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = Ct.length; n--;)
            if (((e = Ct[n] + t), e in Tt)) return e;
    }
    function _(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)
            (r = e[a]),
                r.style &&
                ((o[a] = pe._data(r, "olddisplay")),
                    (n = r.style.display),
                    t
                        ? (o[a] || "none" !== n || (r.style.display = ""),
                            "" === r.style.display &&
                            Pe(r) &&
                            (o[a] = pe._data(r, "olddisplay", D(r.nodeName))))
                        : ((i = Pe(r)),
                            ((n && "none" !== n) || !i) &&
                            pe._data(r, "olddisplay", i ? n : pe.css(r, "display"))));
        for (a = 0; s > a; a++)
            (r = e[a]),
                r.style &&
                ((t && "none" !== r.style.display && "" !== r.style.display) ||
                    (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    function q(e, t, n) {
        var r = xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function F(e, t, n, r, i) {
        for (
            var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
            a = 0;
            4 > o;
            o += 2
        )
            "margin" === n && (a += pe.css(e, n + Me[o], !0, i)),
                r
                    ? ("content" === n && (a -= pe.css(e, "padding" + Me[o], !0, i)),
                        "margin" !== n &&
                        (a -= pe.css(e, "border" + Me[o] + "Width", !0, i)))
                    : ((a += pe.css(e, "padding" + Me[o], !0, i)),
                        "padding" !== n &&
                        (a += pe.css(e, "border" + Me[o] + "Width", !0, i)));
        return a;
    }
    function O(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = ht(e),
            a = de.boxSizing && "border-box" === pe.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (
                ((i = mt(e, t, o)),
                    (0 > i || null == i) && (i = e.style[t]),
                    dt.test(i))
            )
                return i;
            (r = a && (de.boxSizingReliable() || i === e.style[t])),
                (i = parseFloat(i) || 0);
        }
        return i + F(e, t, n || (a ? "border" : "content"), r, o) + "px";
    }
    function M(e, t, n, r, i) {
        return new M.prototype.init(e, t, n, r, i);
    }
    function P() {
        return (
            e.setTimeout(function () {
                kt = void 0;
            }),
            (kt = pe.now())
        );
    }
    function R(e, t) {
        var n,
            r = { height: e },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            (n = Me[i]), (r["margin" + n] = r["padding" + n] = e);
        return t && (r.opacity = r.width = e), r;
    }
    function I(e, t, n) {
        for (
            var r,
            i = (z.tweeners[t] || []).concat(z.tweeners["*"]),
            o = 0,
            a = i.length;
            a > o;
            o++
        )
            if ((r = i[o].call(n, t, e))) return r;
    }
    function G(e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            u,
            l,
            c,
            d = this,
            f = {},
            p = e.style,
            h = e.nodeType && Pe(e),
            m = pe._data(e, "fxshow");
        n.queue ||
            ((s = pe._queueHooks(e, "fx")),
                null == s.unqueued &&
                ((s.unqueued = 0),
                    (u = s.empty.fire),
                    (s.empty.fire = function () {
                        s.unqueued || u();
                    })),
                s.unqueued++,
                d.always(function () {
                    d.always(function () {
                        s.unqueued--, pe.queue(e, "fx").length || s.empty.fire();
                    });
                })),
            1 === e.nodeType &&
            ("height" in t || "width" in t) &&
            ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                (l = pe.css(e, "display")),
                (c = "none" === l ? pe._data(e, "olddisplay") || D(e.nodeName) : l),
                "inline" === c &&
                "none" === pe.css(e, "float") &&
                (de.inlineBlockNeedsLayout && "inline" !== D(e.nodeName)
                    ? (p.zoom = 1)
                    : (p.display = "inline-block"))),
            n.overflow &&
            ((p.overflow = "hidden"),
                de.shrinkWrapBlocks() ||
                d.always(function () {
                    (p.overflow = n.overflow[0]),
                        (p.overflowX = n.overflow[1]),
                        (p.overflowY = n.overflow[2]);
                }));
        for (r in t)
            if (((i = t[r]), jt.exec(i))) {
                if (
                    (delete t[r], (o = o || "toggle" === i), i === (h ? "hide" : "show"))
                ) {
                    if ("show" !== i || !m || void 0 === m[r]) continue;
                    h = !0;
                }
                f[r] = (m && m[r]) || pe.style(e, r);
            } else l = void 0;
        if (pe.isEmptyObject(f))
            "inline" === ("none" === l ? D(e.nodeName) : l) && (p.display = l);
        else {
            m ? "hidden" in m && (h = m.hidden) : (m = pe._data(e, "fxshow", {})),
                o && (m.hidden = !h),
                h
                    ? pe(e).show()
                    : d.done(function () {
                        pe(e).hide();
                    }),
                d.done(function () {
                    var t;
                    pe._removeData(e, "fxshow");
                    for (t in f) pe.style(e, t, f[t]);
                });
            for (r in f)
                (a = I(h ? m[r] : 0, r, d)),
                    r in m ||
                    ((m[r] = a.start),
                        h &&
                        ((a.end = a.start),
                            (a.start = "width" === r || "height" === r ? 1 : 0)));
        }
    }
    function B(e, t) {
        var n, r, i, o, a;
        for (n in e)
            if (
                ((r = pe.camelCase(n)),
                    (i = t[r]),
                    (o = e[n]),
                    pe.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                    n !== r && ((e[r] = o), delete e[n]),
                    (a = pe.cssHooks[r]),
                    a && "expand" in a)
            ) {
                (o = a.expand(o)), delete e[r];
                for (n in o) n in e || ((e[n] = o[n]), (t[n] = i));
            } else t[r] = i;
    }
    function z(e, t, n) {
        var r,
            i,
            o = 0,
            a = z.prefilters.length,
            s = pe.Deferred().always(function () {
                delete u.elem;
            }),
            u = function () {
                if (i) return !1;
                for (
                    var t = kt || P(),
                    n = Math.max(0, l.startTime + l.duration - t),
                    r = n / l.duration || 0,
                    o = 1 - r,
                    a = 0,
                    u = l.tweens.length;
                    u > a;
                    a++
                )
                    l.tweens[a].run(o);
                return (
                    s.notifyWith(e, [l, o, n]),
                    1 > o && u ? n : (s.resolveWith(e, [l]), !1)
                );
            },
            l = s.promise({
                elem: e,
                props: pe.extend({}, t),
                opts: pe.extend(
                    !0,
                    { specialEasing: {}, easing: pe.easing._default },
                    n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: kt || P(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var r = pe.Tween(
                        e,
                        l.opts,
                        t,
                        n,
                        l.opts.specialEasing[t] || l.opts.easing
                    );
                    return l.tweens.push(r), r;
                },
                stop: function (t) {
                    var n = 0,
                        r = t ? l.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; r > n; n++) l.tweens[n].run(1);
                    return (
                        t
                            ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                            : s.rejectWith(e, [l, t]),
                        this
                    );
                },
            }),
            c = l.props;
        for (B(c, l.opts.specialEasing); a > o; o++)
            if ((r = z.prefilters[o].call(l, e, c, l.opts)))
                return (
                    pe.isFunction(r.stop) &&
                    (pe._queueHooks(l.elem, l.opts.queue).stop = pe.proxy(r.stop, r)),
                    r
                );
        return (
            pe.map(c, I, l),
            pe.isFunction(l.opts.start) && l.opts.start.call(e, l),
            pe.fx.timer(pe.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
                .progress(l.opts.progress)
                .done(l.opts.done, l.opts.complete)
                .fail(l.opts.fail)
                .always(l.opts.always)
        );
    }
    function W(e) {
        return pe.attr(e, "class") || "";
    }
    function $(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var r,
                i = 0,
                o = t.toLowerCase().match(Ne) || [];
            if (pe.isFunction(n))
                for (; (r = o[i++]);)
                    "+" === r.charAt(0)
                        ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                        : (e[r] = e[r] || []).push(n);
        };
    }
    function U(e, t, n, r) {
        function i(s) {
            var u;
            return (
                (o[s] = !0),
                pe.each(e[s] || [], function (e, s) {
                    var l = s(t, n, r);
                    return "string" != typeof l || a || o[l]
                        ? a
                            ? !(u = l)
                            : void 0
                        : (t.dataTypes.unshift(l), i(l), !1);
                }),
                u
            );
        }
        var o = {},
            a = e === Qt;
        return i(t.dataTypes[0]) || (!o["*"] && i("*"));
    }
    function X(e, t) {
        var n,
            r,
            i = pe.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && pe.extend(!0, e, n), e;
    }
    function Y(e, t, n) {
        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];)
            u.shift(),
                void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (a in s)
                if (s[a] && s[a].test(i)) {
                    u.unshift(a);
                    break;
                }
        if (u[0] in n) o = u[0];
        else {
            for (a in n) {
                if (!u[0] || e.converters[a + " " + u[0]]) {
                    o = a;
                    break;
                }
                r || (r = a);
            }
            o = o || r;
        }
        return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
    }
    function J(e, t, n, r) {
        var i,
            o,
            a,
            s,
            u,
            l = {},
            c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        for (o = c.shift(); o;)
            if (
                (e.responseFields[o] && (n[e.responseFields[o]] = t),
                    !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    (u = o),
                    (o = c.shift()))
            )
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
                    if (((a = l[u + " " + o] || l["* " + o]), !a))
                        for (i in l)
                            if (
                                ((s = i.split(" ")),
                                    s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]]))
                            ) {
                                a === !0
                                    ? (a = l[i])
                                    : l[i] !== !0 && ((o = s[0]), c.unshift(s[1]));
                                break;
                            }
                    if (a !== !0)
                        if (a && e["throws"]) t = a(t);
                        else
                            try {
                                t = a(t);
                            } catch (d) {
                                return {
                                    state: "parsererror",
                                    error: a ? d : "No conversion from " + u + " to " + o,
                                };
                            }
                }
        return { state: "success", data: t };
    }
    function K(e) {
        return (e.style && e.style.display) || pe.css(e, "display");
    }
    function V(e) {
        if (!pe.contains(e.ownerDocument || re, e)) return !0;
        for (; e && 1 === e.nodeType;) {
            if ("none" === K(e) || "hidden" === e.type) return !0;
            e = e.parentNode;
        }
        return !1;
    }
    function Q(e, t, n, r) {
        var i;
        if (pe.isArray(t))
            pe.each(t, function (t, i) {
                n || rn.test(e)
                    ? r(e, i)
                    : Q(
                        e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                        i,
                        n,
                        r
                    );
            });
        else if (n || "object" !== pe.type(t)) r(e, t);
        else for (i in t) Q(e + "[" + i + "]", t[i], n, r);
    }
    function Z() {
        try {
            return new e.XMLHttpRequest();
        } catch (t) { }
    }
    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (t) { }
    }
    function te(e) {
        return pe.isWindow(e)
            ? e
            : 9 === e.nodeType
                ? e.defaultView || e.parentWindow
                : !1;
    }
    var ne = [],
        re = e.document,
        ie = ne.slice,
        oe = ne.concat,
        ae = ne.push,
        se = ne.indexOf,
        ue = {},
        le = ue.toString,
        ce = ue.hasOwnProperty,
        de = {},
        fe = "1.12.4",
        pe = function (e, t) {
            return new pe.fn.init(e, t);
        },
        he = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        me = /^-ms-/,
        ge = /-([\da-z])/gi,
        ve = function (e, t) {
            return t.toUpperCase();
        };
    (pe.fn = pe.prototype =
    {
        jquery: fe,
        constructor: pe,
        selector: "",
        length: 0,
        toArray: function () {
            return ie.call(this);
        },
        get: function (e) {
            return null != e
                ? 0 > e
                    ? this[e + this.length]
                    : this[e]
                : ie.call(this);
        },
        pushStack: function (e) {
            var t = pe.merge(this.constructor(), e);
            return (t.prevObject = this), (t.context = this.context), t;
        },
        each: function (e) {
            return pe.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                pe.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(ie.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: ae,
        sort: ne.sort,
        splice: ne.splice,
    }),
        (pe.extend = pe.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    r,
                    i,
                    o,
                    a = arguments[0] || {},
                    s = 1,
                    u = arguments.length,
                    l = !1;
                for (
                    "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
                    "object" == typeof a || pe.isFunction(a) || (a = {}),
                    s === u && ((a = this), s--);
                    u > s;
                    s++
                )
                    if (null != (i = arguments[s]))
                        for (r in i)
                            (e = a[r]),
                                (n = i[r]),
                                a !== n &&
                                (l && n && (pe.isPlainObject(n) || (t = pe.isArray(n)))
                                    ? (t
                                        ? ((t = !1), (o = e && pe.isArray(e) ? e : []))
                                        : (o = e && pe.isPlainObject(e) ? e : {}),
                                        (a[r] = pe.extend(l, o, n)))
                                    : void 0 !== n && (a[r] = n));
                return a;
            }),
        pe.extend({
            expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () { },
            isFunction: function (e) {
                return "function" === pe.type(e);
            },
            isArray:
                Array.isArray ||
                function (e) {
                    return "array" === pe.type(e);
                },
            isWindow: function (e) {
                return null != e && e == e.window;
            },
            isNumeric: function (e) {
                var t = e && e.toString();
                return !pe.isArray(e) && t - parseFloat(t) + 1 >= 0;
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            isPlainObject: function (e) {
                var t;
                if (!e || "object" !== pe.type(e) || e.nodeType || pe.isWindow(e))
                    return !1;
                try {
                    if (
                        e.constructor &&
                        !ce.call(e, "constructor") &&
                        !ce.call(e.constructor.prototype, "isPrototypeOf")
                    )
                        return !1;
                } catch (n) {
                    return !1;
                }
                if (!de.ownFirst) for (t in e) return ce.call(e, t);
                for (t in e);
                return void 0 === t || ce.call(e, t);
            },
            type: function (e) {
                return null == e
                    ? e + ""
                    : "object" == typeof e || "function" == typeof e
                        ? ue[le.call(e)] || "object"
                        : typeof e;
            },
            globalEval: function (t) {
                t &&
                    pe.trim(t) &&
                    (
                        e.execScript ||
                        function (t) {
                            e.eval.call(e, t);
                        }
                    )(t);
            },
            camelCase: function (e) {
                return e.replace(me, "ms-").replace(ge, ve);
            },
            nodeName: function (e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            },
            each: function (e, t) {
                var r,
                    i = 0;
                if (n(e))
                    for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++);
                else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(he, "");
            },
            makeArray: function (e, t) {
                var r = t || [];
                return (
                    null != e &&
                    (n(Object(e))
                        ? pe.merge(r, "string" == typeof e ? [e] : e)
                        : ae.call(r, e)),
                    r
                );
            },
            inArray: function (e, t, n) {
                var r;
                if (t) {
                    if (se) return se.call(t, e, n);
                    for (
                        r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
                        r > n;
                        n++
                    )
                        if (n in t && t[n] === e) return n;
                }
                return -1;
            },
            merge: function (e, t) {
                for (var n = +t.length, r = 0, i = e.length; n > r;) e[i++] = t[r++];
                if (n !== n) for (; void 0 !== t[r];) e[i++] = t[r++];
                return (e.length = i), e;
            },
            grep: function (e, t, n) {
                for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++)
                    (r = !t(e[o], o)), r !== s && i.push(e[o]);
                return i;
            },
            map: function (e, t, r) {
                var i,
                    o,
                    a = 0,
                    s = [];
                if (n(e))
                    for (i = e.length; i > a; a++)
                        (o = t(e[a], a, r)), null != o && s.push(o);
                else for (a in e) (o = t(e[a], a, r)), null != o && s.push(o);
                return oe.apply([], s);
            },
            guid: 1,
            proxy: function (e, t) {
                var n, r, i;
                return (
                    "string" == typeof t && ((i = e[t]), (t = e), (e = i)),
                    pe.isFunction(e)
                        ? ((n = ie.call(arguments, 2)),
                            (r = function () {
                                return e.apply(t || this, n.concat(ie.call(arguments)));
                            }),
                            (r.guid = e.guid = e.guid || pe.guid++),
                            r)
                        : void 0
                );
            },
            now: function () {
                return +new Date();
            },
            support: de,
        }),
        "function" == typeof Symbol &&
        (pe.fn[Symbol.iterator] = ne[Symbol.iterator]),
        pe.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (e, t) {
                ue["[object " + t + "]"] = t.toLowerCase();
            }
        );
    var ye = (function (e) {
        function t(e, t, n, r) {
            var i,
                o,
                a,
                s,
                u,
                l,
                d,
                p,
                h = t && t.ownerDocument,
                m = t ? t.nodeType : 9;
            if (
                ((n = n || []),
                    "string" != typeof e || !e || (1 !== m && 9 !== m && 11 !== m))
            )
                return n;
            if (
                !r &&
                ((t ? t.ownerDocument || t : I) !== H && L(t), (t = t || H), q)
            ) {
                if (11 !== m && (l = ve.exec(e)))
                    if ((i = l[1])) {
                        if (9 === m) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n;
                        } else if (h && (a = h.getElementById(i)) && P(t, a) && a.id === i)
                            return n.push(a), n;
                    } else {
                        if (l[2]) return Q.apply(n, t.getElementsByTagName(e)), n;
                        if (
                            (i = l[3]) &&
                            w.getElementsByClassName &&
                            t.getElementsByClassName
                        )
                            return Q.apply(n, t.getElementsByClassName(i)), n;
                    }
                if (w.qsa && !$[e + " "] && (!F || !F.test(e))) {
                    if (1 !== m) (h = t), (p = e);
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for (
                            (s = t.getAttribute("id"))
                                ? (s = s.replace(be, "\\$&"))
                                : t.setAttribute("id", (s = R)),
                            d = k(e),
                            o = d.length,
                            u = fe.test(s) ? "#" + s : "[id='" + s + "']";
                            o--;

                        )
                            d[o] = u + " " + f(d[o]);
                        (p = d.join(",")), (h = (ye.test(e) && c(t.parentNode)) || t);
                    }
                    if (p)
                        try {
                            return Q.apply(n, h.querySelectorAll(p)), n;
                        } catch (g) {
                        } finally {
                            s === R && t.removeAttribute("id");
                        }
                }
            }
            return j(e.replace(se, "$1"), t, n, r);
        }
        function n() {
            function e(n, r) {
                return (
                    t.push(n + " ") > A.cacheLength && delete e[t.shift()],
                    (e[n + " "] = r)
                );
            }
            var t = [];
            return e;
        }
        function r(e) {
            return (e[R] = !0), e;
        }
        function i(e) {
            var t = H.createElement("div");
            try {
                return !!e(t);
            } catch (n) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) A.attrHandle[n[r]] = t;
        }
        function a(e, t) {
            var n = t && e,
                r =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r) return r;
            if (n) for (; (n = n.nextSibling);) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function s(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e;
            };
        }
        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function l(e) {
            return r(function (t) {
                return (
                    (t = +t),
                    r(function (n, r) {
                        for (var i, o = e([], n.length, t), a = o.length; a--;)
                            n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
                    })
                );
            });
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        function d() { }
        function f(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
        }
        function p(e, t, n) {
            var r = t.dir,
                i = n && "parentNode" === r,
                o = B++;
            return t.first
                ? function (t, n, o) {
                    for (; (t = t[r]);) if (1 === t.nodeType || i) return e(t, n, o);
                }
                : function (t, n, a) {
                    var s,
                        u,
                        l,
                        c = [G, o];
                    if (a) {
                        for (; (t = t[r]);)
                            if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
                    } else
                        for (; (t = t[r]);)
                            if (1 === t.nodeType || i) {
                                if (
                                    ((l = t[R] || (t[R] = {})),
                                        (u = l[t.uniqueID] || (l[t.uniqueID] = {})),
                                        (s = u[r]) && s[0] === G && s[1] === o)
                                )
                                    return (c[2] = s[2]);
                                if (((u[r] = c), (c[2] = e(t, n, a)))) return !0;
                            }
                };
        }
        function h(e) {
            return e.length > 1
                ? function (t, n, r) {
                    for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
                    return !0;
                }
                : e[0];
        }
        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
            return r;
        }
        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)
                (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a;
        }
        function v(e, t, n, i, o, a) {
            return (
                i && !i[R] && (i = v(i)),
                o && !o[R] && (o = v(o, a)),
                r(function (r, a, s, u) {
                    var l,
                        c,
                        d,
                        f = [],
                        p = [],
                        h = a.length,
                        v = r || m(t || "*", s.nodeType ? [s] : s, []),
                        y = !e || (!r && t) ? v : g(v, f, e, s, u),
                        b = n ? (o || (r ? e : h || i) ? [] : a) : y;
                    if ((n && n(y, b, s, u), i))
                        for (l = g(b, p), i(l, [], s, u), c = l.length; c--;)
                            (d = l[c]) && (b[p[c]] = !(y[p[c]] = d));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [], c = b.length; c--;)
                                    (d = b[c]) && l.push((y[c] = d));
                                o(null, (b = []), l, u);
                            }
                            for (c = b.length; c--;)
                                (d = b[c]) &&
                                    (l = o ? ee(r, d) : f[c]) > -1 &&
                                    (r[l] = !(a[l] = d));
                        }
                    } else (b = g(b === a ? b.splice(h, b.length) : b)), o ? o(null, a, b, u) : Q.apply(a, b);
                })
            );
        }
        function y(e) {
            for (
                var t,
                n,
                r,
                i = e.length,
                o = A.relative[e[0].type],
                a = o || A.relative[" "],
                s = o ? 1 : 0,
                u = p(
                    function (e) {
                        return e === t;
                    },
                    a,
                    !0
                ),
                l = p(
                    function (e) {
                        return ee(t, e) > -1;
                    },
                    a,
                    !0
                ),
                c = [
                    function (e, n, r) {
                        var i =
                            (!o && (r || n !== S)) ||
                            ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                        return (t = null), i;
                    },
                ];
                i > s;
                s++
            )
                if ((n = A.relative[e[s].type])) c = [p(h(c), n)];
                else {
                    if (((n = A.filter[e[s].type].apply(null, e[s].matches)), n[R])) {
                        for (r = ++s; i > r && !A.relative[e[r].type]; r++);
                        return v(
                            s > 1 && h(c),
                            s > 1 &&
                            f(
                                e
                                    .slice(0, s - 1)
                                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                            ).replace(se, "$1"),
                            n,
                            r > s && y(e.slice(s, r)),
                            i > r && y((e = e.slice(r))),
                            i > r && f(e)
                        );
                    }
                    c.push(n);
                }
            return h(c);
        }
        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function (r, a, s, u, l) {
                    var c,
                        d,
                        f,
                        p = 0,
                        h = "0",
                        m = r && [],
                        v = [],
                        y = S,
                        b = r || (o && A.find.TAG("*", l)),
                        x = (G += null == y ? 1 : Math.random() || 0.1),
                        w = b.length;
                    for (
                        l && (S = a === H || a || l);
                        h !== w && null != (c = b[h]);
                        h++
                    ) {
                        if (o && c) {
                            for (
                                d = 0, a || c.ownerDocument === H || (L(c), (s = !q));
                                (f = e[d++]);

                            )
                                if (f(c, a || H, s)) {
                                    u.push(c);
                                    break;
                                }
                            l && (G = x);
                        }
                        i && ((c = !f && c) && p--, r && m.push(c));
                    }
                    if (((p += h), i && h !== p)) {
                        for (d = 0; (f = n[d++]);) f(m, v, a, s);
                        if (r) {
                            if (p > 0) for (; h--;) m[h] || v[h] || (v[h] = K.call(u));
                            v = g(v);
                        }
                        Q.apply(u, v),
                            l && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(u);
                    }
                    return l && ((G = x), (S = y)), m;
                };
            return i ? r(a) : a;
        }
        var x,
            w,
            A,
            C,
            T,
            k,
            E,
            j,
            S,
            N,
            D,
            L,
            H,
            _,
            q,
            F,
            O,
            M,
            P,
            R = "sizzle" + 1 * new Date(),
            I = e.document,
            G = 0,
            B = 0,
            z = n(),
            W = n(),
            $ = n(),
            U = function (e, t) {
                return e === t && (D = !0), 0;
            },
            X = 1 << 31,
            Y = {}.hasOwnProperty,
            J = [],
            K = J.pop,
            V = J.push,
            Q = J.push,
            Z = J.slice,
            ee = function (e, t) {
                for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
                return -1;
            },
            te =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ne = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ie =
                "\\[" +
                ne +
                "*(" +
                re +
                ")(?:" +
                ne +
                "*([*^$|!~]?=)" +
                ne +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                re +
                "))|)" +
                ne +
                "*\\]",
            oe =
                ":(" +
                re +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                ie +
                ")*)|.*)\\)|)",
            ae = new RegExp(ne + "+", "g"),
            se = new RegExp(
                "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
                "g"
            ),
            ue = new RegExp("^" + ne + "*," + ne + "*"),
            le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
            ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
            de = new RegExp(oe),
            fe = new RegExp("^" + re + "$"),
            pe = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    ne +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    ne +
                    "*(?:([+-]|)" +
                    ne +
                    "*(\\d+)|))" +
                    ne +
                    "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + te + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                    ne +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    ne +
                    "*((?:-\\d)?\\d*)" +
                    ne +
                    "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            he = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ge = /^[^{]+\{\s*\[native \w/,
            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ye = /[+~]/,
            be = /'|\\/g,
            xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
            we = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n
                    ? t
                    : 0 > r
                        ? String.fromCharCode(r + 65536)
                        : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
            },
            Ae = function () {
                L();
            };
        try {
            Q.apply((J = Z.call(I.childNodes)), I.childNodes),
                J[I.childNodes.length].nodeType;
        } catch (Ce) {
            Q = {
                apply: J.length
                    ? function (e, t) {
                        V.apply(e, Z.call(t));
                    }
                    : function (e, t) {
                        for (var n = e.length, r = 0; (e[n++] = t[r++]););
                        e.length = n - 1;
                    },
            };
        }
        (w = t.support = {}),
            (T = t.isXML =
                function (e) {
                    var t = e && (e.ownerDocument || e).documentElement;
                    return t ? "HTML" !== t.nodeName : !1;
                }),
            (L = t.setDocument =
                function (e) {
                    var t,
                        n,
                        r = e ? e.ownerDocument || e : I;
                    return r !== H && 9 === r.nodeType && r.documentElement
                        ? ((H = r),
                            (_ = H.documentElement),
                            (q = !T(H)),
                            (n = H.defaultView) &&
                            n.top !== n &&
                            (n.addEventListener
                                ? n.addEventListener("unload", Ae, !1)
                                : n.attachEvent && n.attachEvent("onunload", Ae)),
                            (w.attributes = i(function (e) {
                                return (e.className = "i"), !e.getAttribute("className");
                            })),
                            (w.getElementsByTagName = i(function (e) {
                                return (
                                    e.appendChild(H.createComment("")),
                                    !e.getElementsByTagName("*").length
                                );
                            })),
                            (w.getElementsByClassName = ge.test(H.getElementsByClassName)),
                            (w.getById = i(function (e) {
                                return (
                                    (_.appendChild(e).id = R),
                                    !H.getElementsByName || !H.getElementsByName(R).length
                                );
                            })),
                            w.getById
                                ? ((A.find.ID = function (e, t) {
                                    if ("undefined" != typeof t.getElementById && q) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : [];
                                    }
                                }),
                                    (A.filter.ID = function (e) {
                                        var t = e.replace(xe, we);
                                        return function (e) {
                                            return e.getAttribute("id") === t;
                                        };
                                    }))
                                : (delete A.find.ID,
                                    (A.filter.ID = function (e) {
                                        var t = e.replace(xe, we);
                                        return function (e) {
                                            var n =
                                                "undefined" != typeof e.getAttributeNode &&
                                                e.getAttributeNode("id");
                                            return n && n.value === t;
                                        };
                                    })),
                            (A.find.TAG = w.getElementsByTagName
                                ? function (e, t) {
                                    return "undefined" != typeof t.getElementsByTagName
                                        ? t.getElementsByTagName(e)
                                        : w.qsa
                                            ? t.querySelectorAll(e)
                                            : void 0;
                                }
                                : function (e, t) {
                                    var n,
                                        r = [],
                                        i = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (; (n = o[i++]);) 1 === n.nodeType && r.push(n);
                                        return r;
                                    }
                                    return o;
                                }),
                            (A.find.CLASS =
                                w.getElementsByClassName &&
                                function (e, t) {
                                    return "undefined" != typeof t.getElementsByClassName && q
                                        ? t.getElementsByClassName(e)
                                        : void 0;
                                }),
                            (O = []),
                            (F = []),
                            (w.qsa = ge.test(H.querySelectorAll)) &&
                            (i(function (e) {
                                (_.appendChild(e).innerHTML =
                                    "<a id='" +
                                    R +
                                    "'></a><select id='" +
                                    R +
                                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']").length &&
                                    F.push("[*^$]=" + ne + "*(?:''|\"\")"),
                                    e.querySelectorAll("[selected]").length ||
                                    F.push("\\[" + ne + "*(?:value|" + te + ")"),
                                    e.querySelectorAll("[id~=" + R + "-]").length ||
                                    F.push("~="),
                                    e.querySelectorAll(":checked").length || F.push(":checked"),
                                    e.querySelectorAll("a#" + R + "+*").length ||
                                    F.push(".#.+[+~]");
                            }),
                                i(function (e) {
                                    var t = H.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length &&
                                        F.push("name" + ne + "*[*^$|!~]?="),
                                        e.querySelectorAll(":enabled").length ||
                                        F.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        F.push(",.*:");
                                })),
                            (w.matchesSelector = ge.test(
                                (M =
                                    _.matches ||
                                    _.webkitMatchesSelector ||
                                    _.mozMatchesSelector ||
                                    _.oMatchesSelector ||
                                    _.msMatchesSelector)
                            )) &&
                            i(function (e) {
                                (w.disconnectedMatch = M.call(e, "div")),
                                    M.call(e, "[s!='']:x"),
                                    O.push("!=", oe);
                            }),
                            (F = F.length && new RegExp(F.join("|"))),
                            (O = O.length && new RegExp(O.join("|"))),
                            (t = ge.test(_.compareDocumentPosition)),
                            (P =
                                t || ge.test(_.contains)
                                    ? function (e, t) {
                                        var n = 9 === e.nodeType ? e.documentElement : e,
                                            r = t && t.parentNode;
                                        return (
                                            e === r ||
                                            !(
                                                !r ||
                                                1 !== r.nodeType ||
                                                !(n.contains
                                                    ? n.contains(r)
                                                    : e.compareDocumentPosition &&
                                                    16 & e.compareDocumentPosition(r))
                                            )
                                        );
                                    }
                                    : function (e, t) {
                                        if (t)
                                            for (; (t = t.parentNode);) if (t === e) return !0;
                                        return !1;
                                    }),
                            (U = t
                                ? function (e, t) {
                                    if (e === t) return (D = !0), 0;
                                    var n =
                                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return n
                                        ? n
                                        : ((n =
                                            (e.ownerDocument || e) === (t.ownerDocument || t)
                                                ? e.compareDocumentPosition(t)
                                                : 1),
                                            1 & n ||
                                                (!w.sortDetached && t.compareDocumentPosition(e) === n)
                                                ? e === H || (e.ownerDocument === I && P(I, e))
                                                    ? -1
                                                    : t === H || (t.ownerDocument === I && P(I, t))
                                                        ? 1
                                                        : N
                                                            ? ee(N, e) - ee(N, t)
                                                            : 0
                                                : 4 & n
                                                    ? -1
                                                    : 1);
                                }
                                : function (e, t) {
                                    if (e === t) return (D = !0), 0;
                                    var n,
                                        r = 0,
                                        i = e.parentNode,
                                        o = t.parentNode,
                                        s = [e],
                                        u = [t];
                                    if (!i || !o)
                                        return e === H
                                            ? -1
                                            : t === H
                                                ? 1
                                                : i
                                                    ? -1
                                                    : o
                                                        ? 1
                                                        : N
                                                            ? ee(N, e) - ee(N, t)
                                                            : 0;
                                    if (i === o) return a(e, t);
                                    for (n = e; (n = n.parentNode);) s.unshift(n);
                                    for (n = t; (n = n.parentNode);) u.unshift(n);
                                    for (; s[r] === u[r];) r++;
                                    return r
                                        ? a(s[r], u[r])
                                        : s[r] === I
                                            ? -1
                                            : u[r] === I
                                                ? 1
                                                : 0;
                                }),
                            H)
                        : H;
                }),
            (t.matches = function (e, n) {
                return t(e, null, null, n);
            }),
            (t.matchesSelector = function (e, n) {
                if (
                    ((e.ownerDocument || e) !== H && L(e),
                        (n = n.replace(ce, "='$1']")),
                        w.matchesSelector &&
                        q &&
                        !$[n + " "] &&
                        (!O || !O.test(n)) &&
                        (!F || !F.test(n)))
                )
                    try {
                        var r = M.call(e, n);
                        if (
                            r ||
                            w.disconnectedMatch ||
                            (e.document && 11 !== e.document.nodeType)
                        )
                            return r;
                    } catch (i) { }
                return t(n, H, null, [e]).length > 0;
            }),
            (t.contains = function (e, t) {
                return (e.ownerDocument || e) !== H && L(e), P(e, t);
            }),
            (t.attr = function (e, t) {
                (e.ownerDocument || e) !== H && L(e);
                var n = A.attrHandle[t.toLowerCase()],
                    r = n && Y.call(A.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;
                return void 0 !== r
                    ? r
                    : w.attributes || !q
                        ? e.getAttribute(t)
                        : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
            }),
            (t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (t.uniqueSort = function (e) {
                var t,
                    n = [],
                    r = 0,
                    i = 0;
                if (
                    ((D = !w.detectDuplicates),
                        (N = !w.sortStable && e.slice(0)),
                        e.sort(U),
                        D)
                ) {
                    for (; (t = e[i++]);) t === e[i] && (r = n.push(i));
                    for (; r--;) e.splice(n[r], 1);
                }
                return (N = null), e;
            }),
            (C = t.getText =
                function (e) {
                    var t,
                        n = "",
                        r = 0,
                        i = e.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += C(e);
                        } else if (3 === i || 4 === i) return e.nodeValue;
                    } else for (; (t = e[r++]);) n += C(t);
                    return n;
                }),
            (A = t.selectors =
            {
                cacheLength: 50,
                createPseudo: r,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function (e) {
                        return (
                            (e[1] = e[1].replace(xe, we)),
                            (e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we)),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        );
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3)
                                ? (e[3] || t.error(e[0]),
                                    (e[4] = +(e[4]
                                        ? e[5] + (e[6] || 1)
                                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                : e[3] && t.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return pe.CHILD.test(e[0])
                            ? null
                            : (e[3]
                                ? (e[2] = e[4] || e[5] || "")
                                : n &&
                                de.test(n) &&
                                (t = k(n, !0)) &&
                                (t = n.indexOf(")", n.length - t) - n.length) &&
                                ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                                e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(xe, we).toLowerCase();
                        return "*" === e
                            ? function () {
                                return !0;
                            }
                            : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t;
                            };
                    },
                    CLASS: function (e) {
                        var t = z[e + " "];
                        return (
                            t ||
                            ((t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) &&
                                z(e, function (e) {
                                    return t.test(
                                        ("string" == typeof e.className && e.className) ||
                                        ("undefined" != typeof e.getAttribute &&
                                            e.getAttribute("class")) ||
                                        ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (e, n, r) {
                        return function (i) {
                            var o = t.attr(i, e);
                            return null == o
                                ? "!=" === n
                                : n
                                    ? ((o += ""),
                                        "=" === n
                                            ? o === r
                                            : "!=" === n
                                                ? o !== r
                                                : "^=" === n
                                                    ? r && 0 === o.indexOf(r)
                                                    : "*=" === n
                                                        ? r && o.indexOf(r) > -1
                                                        : "$=" === n
                                                            ? r && o.slice(-r.length) === r
                                                            : "~=" === n
                                                                ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1
                                                                : "|=" === n
                                                                    ? o === r || o.slice(0, r.length + 1) === r + "-"
                                                                    : !1)
                                    : !0;
                        };
                    },
                    CHILD: function (e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === r && 0 === i
                            ? function (e) {
                                return !!e.parentNode;
                            }
                            : function (t, n, u) {
                                var l,
                                    c,
                                    d,
                                    f,
                                    p,
                                    h,
                                    m = o !== a ? "nextSibling" : "previousSibling",
                                    g = t.parentNode,
                                    v = s && t.nodeName.toLowerCase(),
                                    y = !u && !s,
                                    b = !1;
                                if (g) {
                                    if (o) {
                                        for (; m;) {
                                            for (f = t; (f = f[m]);)
                                                if (
                                                    s
                                                        ? f.nodeName.toLowerCase() === v
                                                        : 1 === f.nodeType
                                                )
                                                    return !1;
                                            h = m = "only" === e && !h && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((h = [a ? g.firstChild : g.lastChild]), a && y)) {
                                        for (
                                            f = g,
                                            d = f[R] || (f[R] = {}),
                                            c = d[f.uniqueID] || (d[f.uniqueID] = {}),
                                            l = c[e] || [],
                                            p = l[0] === G && l[1],
                                            b = p && l[2],
                                            f = p && g.childNodes[p];
                                            (f = (++p && f && f[m]) || (b = p = 0) || h.pop());

                                        )
                                            if (1 === f.nodeType && ++b && f === t) {
                                                c[e] = [G, p, b];
                                                break;
                                            }
                                    } else if (
                                        (y &&
                                            ((f = t),
                                                (d = f[R] || (f[R] = {})),
                                                (c = d[f.uniqueID] || (d[f.uniqueID] = {})),
                                                (l = c[e] || []),
                                                (p = l[0] === G && l[1]),
                                                (b = p)),
                                            b === !1)
                                    )
                                        for (
                                            ;
                                            (f = (++p && f && f[m]) || (b = p = 0) || h.pop()) &&
                                            ((s
                                                ? f.nodeName.toLowerCase() !== v
                                                : 1 !== f.nodeType) ||
                                                !++b ||
                                                (y &&
                                                    ((d = f[R] || (f[R] = {})),
                                                        (c = d[f.uniqueID] || (d[f.uniqueID] = {})),
                                                        (c[e] = [G, b])),
                                                    f !== t));

                                        );
                                    return (b -= i), b === r || (b % r === 0 && b / r >= 0);
                                }
                            };
                    },
                    PSEUDO: function (e, n) {
                        var i,
                            o =
                                A.pseudos[e] ||
                                A.setFilters[e.toLowerCase()] ||
                                t.error("unsupported pseudo: " + e);
                        return o[R]
                            ? o(n)
                            : o.length > 1
                                ? ((i = [e, e, "", n]),
                                    A.setFilters.hasOwnProperty(e.toLowerCase())
                                        ? r(function (e, t) {
                                            for (var r, i = o(e, n), a = i.length; a--;)
                                                (r = ee(e, i[a])), (e[r] = !(t[r] = i[a]));
                                        })
                                        : function (e) {
                                            return o(e, 0, i);
                                        })
                                : o;
                    },
                },
                pseudos: {
                    not: r(function (e) {
                        var t = [],
                            n = [],
                            i = E(e.replace(se, "$1"));
                        return i[R]
                            ? r(function (e, t, n, r) {
                                for (var o, a = i(e, null, r, []), s = e.length; s--;)
                                    (o = a[s]) && (e[s] = !(t[s] = o));
                            })
                            : function (e, r, o) {
                                return (
                                    (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop()
                                );
                            };
                    }),
                    has: r(function (e) {
                        return function (n) {
                            return t(e, n).length > 0;
                        };
                    }),
                    contains: r(function (e) {
                        return (
                            (e = e.replace(xe, we)),
                            function (t) {
                                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
                            }
                        );
                    }),
                    lang: r(function (e) {
                        return (
                            fe.test(e || "") || t.error("unsupported lang: " + e),
                            (e = e.replace(xe, we).toLowerCase()),
                            function (t) {
                                var n;
                                do
                                    if (
                                        (n = q
                                            ? t.lang
                                            : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    )
                                        return (
                                            (n = n.toLowerCase()),
                                            n === e || 0 === n.indexOf(e + "-")
                                        );
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function (t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id;
                    },
                    root: function (e) {
                        return e === _;
                    },
                    focus: function (e) {
                        return (
                            e === H.activeElement &&
                            (!H.hasFocus || H.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                        );
                    },
                    enabled: function (e) {
                        return e.disabled === !1;
                    },
                    disabled: function (e) {
                        return e.disabled === !0;
                    },
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && !!e.checked) ||
                            ("option" === t && !!e.selected)
                        );
                    },
                    selected: function (e) {
                        return (
                            e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                        );
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !A.pseudos.empty(e);
                    },
                    header: function (e) {
                        return me.test(e.nodeName);
                    },
                    input: function (e) {
                        return he.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t && "button" === e.type) || "button" === t;
                    },
                    text: function (e) {
                        var t;
                        return (
                            "input" === e.nodeName.toLowerCase() &&
                            "text" === e.type &&
                            (null == (t = e.getAttribute("type")) ||
                                "text" === t.toLowerCase())
                        );
                    },
                    first: l(function () {
                        return [0];
                    }),
                    last: l(function (e, t) {
                        return [t - 1];
                    }),
                    eq: l(function (e, t, n) {
                        return [0 > n ? n + t : n];
                    }),
                    even: l(function (e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e;
                    }),
                    odd: l(function (e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e;
                    }),
                    lt: l(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
                        return e;
                    }),
                    gt: l(function (e, t, n) {
                        for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
                        return e;
                    }),
                },
            }),
            (A.pseudos.nth = A.pseudos.eq);
        for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
            A.pseudos[x] = s(x);
        for (x in { submit: !0, reset: !0 }) A.pseudos[x] = u(x);
        return (
            (d.prototype = A.filters = A.pseudos),
            (A.setFilters = new d()),
            (k = t.tokenize =
                function (e, n) {
                    var r,
                        i,
                        o,
                        a,
                        s,
                        u,
                        l,
                        c = W[e + " "];
                    if (c) return n ? 0 : c.slice(0);
                    for (s = e, u = [], l = A.preFilter; s;) {
                        (!r || (i = ue.exec(s))) &&
                            (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
                            (r = !1),
                            (i = le.exec(s)) &&
                            ((r = i.shift()),
                                o.push({ value: r, type: i[0].replace(se, " ") }),
                                (s = s.slice(r.length)));
                        for (a in A.filter)
                            !(i = pe[a].exec(s)) ||
                                (l[a] && !(i = l[a](i))) ||
                                ((r = i.shift()),
                                    o.push({ value: r, type: a, matches: i }),
                                    (s = s.slice(r.length)));
                        if (!r) break;
                    }
                    return n ? s.length : s ? t.error(e) : W(e, u).slice(0);
                }),
            (E = t.compile =
                function (e, t) {
                    var n,
                        r = [],
                        i = [],
                        o = $[e + " "];
                    if (!o) {
                        for (t || (t = k(e)), n = t.length; n--;)
                            (o = y(t[n])), o[R] ? r.push(o) : i.push(o);
                        (o = $(e, b(i, r))), (o.selector = e);
                    }
                    return o;
                }),
            (j = t.select =
                function (e, t, n, r) {
                    var i,
                        o,
                        a,
                        s,
                        u,
                        l = "function" == typeof e && e,
                        d = !r && k((e = l.selector || e));
                    if (((n = n || []), 1 === d.length)) {
                        if (
                            ((o = d[0] = d[0].slice(0)),
                                o.length > 2 &&
                                "ID" === (a = o[0]).type &&
                                w.getById &&
                                9 === t.nodeType &&
                                q &&
                                A.relative[o[1].type])
                        ) {
                            if (
                                ((t = (A.find.ID(a.matches[0].replace(xe, we), t) || [])[0]),
                                    !t)
                            )
                                return n;
                            l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
                        }
                        for (
                            i = pe.needsContext.test(e) ? 0 : o.length;
                            i-- && ((a = o[i]), !A.relative[(s = a.type)]);

                        )
                            if (
                                (u = A.find[s]) &&
                                (r = u(
                                    a.matches[0].replace(xe, we),
                                    (ye.test(o[0].type) && c(t.parentNode)) || t
                                ))
                            ) {
                                if ((o.splice(i, 1), (e = r.length && f(o)), !e))
                                    return Q.apply(n, r), n;
                                break;
                            }
                    }
                    return (
                        (l || E(e, d))(
                            r,
                            t,
                            !q,
                            n,
                            !t || (ye.test(e) && c(t.parentNode)) || t
                        ),
                        n
                    );
                }),
            (w.sortStable = R.split("").sort(U).join("") === R),
            (w.detectDuplicates = !!D),
            L(),
            (w.sortDetached = i(function (e) {
                return 1 & e.compareDocumentPosition(H.createElement("div"));
            })),
            i(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
            o("type|href|height|width", function (e, t, n) {
                return n
                    ? void 0
                    : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
            }),
            (w.attributes &&
                i(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
            o("value", function (e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase()
                    ? void 0
                    : e.defaultValue;
            }),
            i(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
            o(te, function (e, t, n) {
                var r;
                return n
                    ? void 0
                    : e[t] === !0
                        ? t.toLowerCase()
                        : (r = e.getAttributeNode(t)) && r.specified
                            ? r.value
                            : null;
            }),
            t
        );
    })(e);
    (pe.find = ye),
        (pe.expr = ye.selectors),
        (pe.expr[":"] = pe.expr.pseudos),
        (pe.uniqueSort = pe.unique = ye.uniqueSort),
        (pe.text = ye.getText),
        (pe.isXMLDoc = ye.isXML),
        (pe.contains = ye.contains);
    var be = function (e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (i && pe(e).is(n)) break;
                r.push(e);
            }
        return r;
    },
        xe = function (e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        we = pe.expr.match.needsContext,
        Ae = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ce = /^.[^:#\[\.,]*$/;
    (pe.filter = function (e, t, n) {
        var r = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType
                ? pe.find.matchesSelector(r, e)
                    ? [r]
                    : []
                : pe.find.matches(
                    e,
                    pe.grep(t, function (e) {
                        return 1 === e.nodeType;
                    })
                )
        );
    }),
        pe.fn.extend({
            find: function (e) {
                var t,
                    n = [],
                    r = this,
                    i = r.length;
                if ("string" != typeof e)
                    return this.pushStack(
                        pe(e).filter(function () {
                            for (t = 0; i > t; t++) if (pe.contains(r[t], this)) return !0;
                        })
                    );
                for (t = 0; i > t; t++) pe.find(e, r[t], n);
                return (
                    (n = this.pushStack(i > 1 ? pe.unique(n) : n)),
                    (n.selector = this.selector ? this.selector + " " + e : e),
                    n
                );
            },
            filter: function (e) {
                return this.pushStack(r(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(r(this, e || [], !0));
            },
            is: function (e) {
                return !!r(
                    this,
                    "string" == typeof e && we.test(e) ? pe(e) : e || [],
                    !1
                ).length;
            },
        });
    var Te,
        ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        Ee = (pe.fn.init = function (e, t, n) {
            var r, i;
            if (!e) return this;
            if (((n = n || Te), "string" == typeof e)) {
                if (
                    ((r =
                        "<" === e.charAt(0) &&
                            ">" === e.charAt(e.length - 1) &&
                            e.length >= 3
                            ? [null, e, null]
                            : ke.exec(e)),
                        !r || (!r[1] && t))
                )
                    return !t || t.jquery
                        ? (t || n).find(e)
                        : this.constructor(t).find(e);
                if (r[1]) {
                    if (
                        ((t = t instanceof pe ? t[0] : t),
                            pe.merge(
                                this,
                                pe.parseHTML(
                                    r[1],
                                    t && t.nodeType ? t.ownerDocument || t : re,
                                    !0
                                )
                            ),
                            Ae.test(r[1]) && pe.isPlainObject(t))
                    )
                        for (r in t)
                            pe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this;
                }
                if (((i = re.getElementById(r[2])), i && i.parentNode)) {
                    if (i.id !== r[2]) return Te.find(e);
                    (this.length = 1), (this[0] = i);
                }
                return (this.context = re), (this.selector = e), this;
            }
            return e.nodeType
                ? ((this.context = this[0] = e), (this.length = 1), this)
                : pe.isFunction(e)
                    ? "undefined" != typeof n.ready
                        ? n.ready(e)
                        : e(pe)
                    : (void 0 !== e.selector &&
                        ((this.selector = e.selector), (this.context = e.context)),
                        pe.makeArray(e, this));
        });
    (Ee.prototype = pe.fn), (Te = pe(re));
    var je = /^(?:parents|prev(?:Until|All))/,
        Se = { children: !0, contents: !0, next: !0, prev: !0 };
    pe.fn.extend({
        has: function (e) {
            var t,
                n = pe(e, this),
                r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++) if (pe.contains(this, n[t])) return !0;
            });
        },
        closest: function (e, t) {
            for (
                var n,
                r = 0,
                i = this.length,
                o = [],
                a = we.test(e) || "string" != typeof e ? pe(e, t || this.context) : 0;
                i > r;
                r++
            )
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (
                        n.nodeType < 11 &&
                        (a
                            ? a.index(n) > -1
                            : 1 === n.nodeType && pe.find.matchesSelector(n, e))
                    ) {
                        o.push(n);
                        break;
                    }
            return this.pushStack(o.length > 1 ? pe.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? pe.inArray(this[0], pe(e))
                    : pe.inArray(e.jquery ? e[0] : e, this)
                : this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1;
        },
        add: function (e, t) {
            return this.pushStack(pe.uniqueSort(pe.merge(this.get(), pe(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        pe.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return be(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return be(e, "parentNode", n);
                },
                next: function (e) {
                    return i(e, "nextSibling");
                },
                prev: function (e) {
                    return i(e, "previousSibling");
                },
                nextAll: function (e) {
                    return be(e, "nextSibling");
                },
                prevAll: function (e) {
                    return be(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return be(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return be(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return xe((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return xe(e.firstChild);
                },
                contents: function (e) {
                    return pe.nodeName(e, "iframe")
                        ? e.contentDocument || e.contentWindow.document
                        : pe.merge([], e.childNodes);
                },
            },
            function (e, t) {
                pe.fn[e] = function (n, r) {
                    var i = pe.map(this, t, n);
                    return (
                        "Until" !== e.slice(-5) && (r = n),
                        r && "string" == typeof r && (i = pe.filter(r, i)),
                        this.length > 1 &&
                        (Se[e] || (i = pe.uniqueSort(i)),
                            je.test(e) && (i = i.reverse())),
                        this.pushStack(i)
                    );
                };
            }
        );
    var Ne = /\S+/g;
    (pe.Callbacks = function (e) {
        e = "string" == typeof e ? o(e) : pe.extend({}, e);
        var t,
            n,
            r,
            i,
            a = [],
            s = [],
            u = -1,
            l = function () {
                for (i = e.once, r = t = !0; s.length; u = -1)
                    for (n = s.shift(); ++u < a.length;)
                        a[u].apply(n[0], n[1]) === !1 &&
                            e.stopOnFalse &&
                            ((u = a.length), (n = !1));
                e.memory || (n = !1), (t = !1), i && (a = n ? [] : "");
            },
            c = {
                add: function () {
                    return (
                        a &&
                        (n && !t && ((u = a.length - 1), s.push(n)),
                            (function r(t) {
                                pe.each(t, function (t, n) {
                                    pe.isFunction(n)
                                        ? (e.unique && c.has(n)) || a.push(n)
                                        : n && n.length && "string" !== pe.type(n) && r(n);
                                });
                            })(arguments),
                            n && !t && l()),
                        this
                    );
                },
                remove: function () {
                    return (
                        pe.each(arguments, function (e, t) {
                            for (var n; (n = pe.inArray(t, a, n)) > -1;)
                                a.splice(n, 1), u >= n && u--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? pe.inArray(e, a) > -1 : a.length > 0;
                },
                empty: function () {
                    return a && (a = []), this;
                },
                disable: function () {
                    return (i = s = []), (a = n = ""), this;
                },
                disabled: function () {
                    return !a;
                },
                lock: function () {
                    return (i = !0), n || c.disable(), this;
                },
                locked: function () {
                    return !!i;
                },
                fireWith: function (e, n) {
                    return (
                        i ||
                        ((n = n || []),
                            (n = [e, n.slice ? n.slice() : n]),
                            s.push(n),
                            t || l()),
                        this
                    );
                },
                fire: function () {
                    return c.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return c;
    }),
        pe.extend({
            Deferred: function (e) {
                var t = [
                    ["resolve", "done", pe.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", pe.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", pe.Callbacks("memory")],
                ],
                    n = "pending",
                    r = {
                        state: function () {
                            return n;
                        },
                        always: function () {
                            return i.done(arguments).fail(arguments), this;
                        },
                        then: function () {
                            var e = arguments;
                            return pe
                                .Deferred(function (n) {
                                    pe.each(t, function (t, o) {
                                        var a = pe.isFunction(e[t]) && e[t];
                                        i[o[1]](function () {
                                            var e = a && a.apply(this, arguments);
                                            e && pe.isFunction(e.promise)
                                                ? e
                                                    .promise()
                                                    .progress(n.notify)
                                                    .done(n.resolve)
                                                    .fail(n.reject)
                                                : n[o[0] + "With"](
                                                    this === r ? n.promise() : this,
                                                    a ? [e] : arguments
                                                );
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? pe.extend(e, r) : r;
                        },
                    },
                    i = {};
                return (
                    (r.pipe = r.then),
                    pe.each(t, function (e, o) {
                        var a = o[2],
                            s = o[3];
                        (r[o[1]] = a.add),
                            s &&
                            a.add(
                                function () {
                                    n = s;
                                },
                                t[1 ^ e][2].disable,
                                t[2][2].lock
                            ),
                            (i[o[0]] = function () {
                                return i[o[0] + "With"](this === i ? r : this, arguments), this;
                            }),
                            (i[o[0] + "With"] = a.fireWith);
                    }),
                    r.promise(i),
                    e && e.call(i, i),
                    i
                );
            },
            when: function (e) {
                var t,
                    n,
                    r,
                    i = 0,
                    o = ie.call(arguments),
                    a = o.length,
                    s = 1 !== a || (e && pe.isFunction(e.promise)) ? a : 0,
                    u = 1 === s ? e : pe.Deferred(),
                    l = function (e, n, r) {
                        return function (i) {
                            (n[e] = this),
                                (r[e] = arguments.length > 1 ? ie.call(arguments) : i),
                                r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
                        };
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)
                        o[i] && pe.isFunction(o[i].promise)
                            ? o[i]
                                .promise()
                                .progress(l(i, n, t))
                                .done(l(i, r, o))
                                .fail(u.reject)
                            : --s;
                return s || u.resolveWith(r, o), u.promise();
            },
        });
    var De;
    (pe.fn.ready = function (e) {
        return pe.ready.promise().done(e), this;
    }),
        pe.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (e) {
                e ? pe.readyWait++ : pe.ready(!0);
            },
            ready: function (e) {
                (e === !0 ? --pe.readyWait : pe.isReady) ||
                    ((pe.isReady = !0),
                        (e !== !0 && --pe.readyWait > 0) ||
                        (De.resolveWith(re, [pe]),
                            pe.fn.triggerHandler &&
                            (pe(re).triggerHandler("ready"), pe(re).off("ready"))));
            },
        }),
        (pe.ready.promise = function (t) {
            if (!De)
                if (
                    ((De = pe.Deferred()),
                        "complete" === re.readyState ||
                        ("loading" !== re.readyState && !re.documentElement.doScroll))
                )
                    e.setTimeout(pe.ready);
                else if (re.addEventListener)
                    re.addEventListener("DOMContentLoaded", s),
                        e.addEventListener("load", s);
                else {
                    re.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                    var n = !1;
                    try {
                        n = null == e.frameElement && re.documentElement;
                    } catch (r) { }
                    n &&
                        n.doScroll &&
                        !(function i() {
                            if (!pe.isReady) {
                                try {
                                    n.doScroll("left");
                                } catch (t) {
                                    return e.setTimeout(i, 50);
                                }
                                a(), pe.ready();
                            }
                        })();
                }
            return De.promise(t);
        }),
        pe.ready.promise();
    var Le;
    for (Le in pe(de)) break;
    (de.ownFirst = "0" === Le),
        (de.inlineBlockNeedsLayout = !1),
        pe(function () {
            var e, t, n, r;
            (n = re.getElementsByTagName("body")[0]),
                n &&
                n.style &&
                ((t = re.createElement("div")),
                    (r = re.createElement("div")),
                    (r.style.cssText =
                        "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                    n.appendChild(r).appendChild(t),
                    "undefined" != typeof t.style.zoom &&
                    ((t.style.cssText =
                        "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                        (de.inlineBlockNeedsLayout = e = 3 === t.offsetWidth),
                        e && (n.style.zoom = 1)),
                    n.removeChild(r));
        }),
        (function () {
            var e = re.createElement("div");
            de.deleteExpando = !0;
            try {
                delete e.test;
            } catch (t) {
                de.deleteExpando = !1;
            }
            e = null;
        })();
    var He = function (e) {
        var t = pe.noData[(e.nodeName + " ").toLowerCase()],
            n = +e.nodeType || 1;
        return 1 !== n && 9 !== n
            ? !1
            : !t || (t !== !0 && e.getAttribute("classid") === t);
    },
        _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        qe = /([A-Z])/g;
    pe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        },
        hasData: function (e) {
            return (
                (e = e.nodeType ? pe.cache[e[pe.expando]] : e[pe.expando]), !!e && !l(e)
            );
        },
        data: function (e, t, n) {
            return c(e, t, n);
        },
        removeData: function (e, t) {
            return d(e, t);
        },
        _data: function (e, t, n) {
            return c(e, t, n, !0);
        },
        _removeData: function (e, t) {
            return d(e, t, !0);
        },
    }),
        pe.fn.extend({
            data: function (e, t) {
                var n,
                    r,
                    i,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (
                        this.length &&
                        ((i = pe.data(o)), 1 === o.nodeType && !pe._data(o, "parsedAttrs"))
                    ) {
                        for (n = a.length; n--;)
                            a[n] &&
                                ((r = a[n].name),
                                    0 === r.indexOf("data-") &&
                                    ((r = pe.camelCase(r.slice(5))), u(o, r, i[r])));
                        pe._data(o, "parsedAttrs", !0);
                    }
                    return i;
                }
                return "object" == typeof e
                    ? this.each(function () {
                        pe.data(this, e);
                    })
                    : arguments.length > 1
                        ? this.each(function () {
                            pe.data(this, e, t);
                        })
                        : o
                            ? u(o, e, pe.data(o, e))
                            : void 0;
            },
            removeData: function (e) {
                return this.each(function () {
                    pe.removeData(this, e);
                });
            },
        }),
        pe.extend({
            queue: function (e, t, n) {
                var r;
                return e
                    ? ((t = (t || "fx") + "queue"),
                        (r = pe._data(e, t)),
                        n &&
                        (!r || pe.isArray(n)
                            ? (r = pe._data(e, t, pe.makeArray(n)))
                            : r.push(n)),
                        r || [])
                    : void 0;
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = pe.queue(e, t),
                    r = n.length,
                    i = n.shift(),
                    o = pe._queueHooks(e, t),
                    a = function () {
                        pe.dequeue(e, t);
                    };
                "inprogress" === i && ((i = n.shift()), r--),
                    i &&
                    ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        i.call(e, a, o)),
                    !r && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    pe._data(e, n) ||
                    pe._data(e, n, {
                        empty: pe.Callbacks("once memory").add(function () {
                            pe._removeData(e, t + "queue"), pe._removeData(e, n);
                        }),
                    })
                );
            },
        }),
        pe.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? pe.queue(this[0], e)
                        : void 0 === t
                            ? this
                            : this.each(function () {
                                var n = pe.queue(this, e, t);
                                pe._queueHooks(this, e),
                                    "fx" === e && "inprogress" !== n[0] && pe.dequeue(this, e);
                            })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    pe.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    r = 1,
                    i = pe.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --r || i.resolveWith(o, [o]);
                    };
                for (
                    "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
                    a--;

                )
                    (n = pe._data(o[a], e + "queueHooks")),
                        n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(t);
            },
        }),
        (function () {
            var e;
            de.shrinkWrapBlocks = function () {
                if (null != e) return e;
                e = !1;
                var t, n, r;
                return (
                    (n = re.getElementsByTagName("body")[0]),
                    n && n.style
                        ? ((t = re.createElement("div")),
                            (r = re.createElement("div")),
                            (r.style.cssText =
                                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
                            n.appendChild(r).appendChild(t),
                            "undefined" != typeof t.style.zoom &&
                            ((t.style.cssText =
                                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                                (t.appendChild(re.createElement("div")).style.width = "5px"),
                                (e = 3 !== t.offsetWidth)),
                            n.removeChild(r),
                            e)
                        : void 0
                );
            };
        })();
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Oe = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        Me = ["Top", "Right", "Bottom", "Left"],
        Pe = function (e, t) {
            return (
                (e = t || e),
                "none" === pe.css(e, "display") || !pe.contains(e.ownerDocument, e)
            );
        },
        Re = function (e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === pe.type(n)) {
                i = !0;
                for (s in n) Re(e, t, s, n[s], !0, o, a);
            } else if (
                void 0 !== r &&
                ((i = !0),
                    pe.isFunction(r) || (a = !0),
                    l &&
                    (a
                        ? (t.call(e, r), (t = null))
                        : ((l = t),
                            (t = function (e, t, n) {
                                return l.call(pe(e), n);
                            }))),
                    t)
            )
                for (; u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
        },
        Ie = /^(?:checkbox|radio)$/i,
        Ge = /<([\w:-]+)/,
        Be = /^$|\/(?:java|ecma)script/i,
        ze = /^\s+/,
        We =
            "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !(function () {
        var e = re.createElement("div"),
            t = re.createDocumentFragment(),
            n = re.createElement("input");
        (e.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
            (de.leadingWhitespace = 3 === e.firstChild.nodeType),
            (de.tbody = !e.getElementsByTagName("tbody").length),
            (de.htmlSerialize = !!e.getElementsByTagName("link").length),
            (de.html5Clone =
                "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML),
            (n.type = "checkbox"),
            (n.checked = !0),
            t.appendChild(n),
            (de.appendChecked = n.checked),
            (e.innerHTML = "<textarea>x</textarea>"),
            (de.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue),
            t.appendChild(e),
            (n = re.createElement("input")),
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            e.appendChild(n),
            (de.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (de.noCloneEvent = !!e.addEventListener),
            (e[pe.expando] = 1),
            (de.attributes = !e.getAttribute(pe.expando));
    })();
    var $e = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: de.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    };
    ($e.optgroup = $e.option),
        ($e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead),
        ($e.th = $e.td);
    var Ue = /<|&#?\w+;/,
        Xe = /<tbody/i;
    !(function () {
        var t,
            n,
            r = re.createElement("div");
        for (t in { submit: !0, change: !0, focusin: !0 })
            (n = "on" + t),
                (de[t] = n in e) ||
                (r.setAttribute(n, "t"), (de[t] = r.attributes[n].expando === !1));
        r = null;
    })();
    var Ye = /^(?:input|select|textarea)$/i,
        Je = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ve = /^(?:focusinfocus|focusoutblur)$/,
        Qe = /^([^.]*)(?:\.(.+)|)/;
    (pe.event = {
        global: {},
        add: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                d,
                f,
                p,
                h,
                m,
                g = pe._data(e);
            if (g) {
                for (
                    n.handler && ((u = n), (n = u.handler), (i = u.selector)),
                    n.guid || (n.guid = pe.guid++),
                    (a = g.events) || (a = g.events = {}),
                    (c = g.handle) ||
                    ((c = g.handle =
                        function (e) {
                            return "undefined" == typeof pe ||
                                (e && pe.event.triggered === e.type)
                                ? void 0
                                : pe.event.dispatch.apply(c.elem, arguments);
                        }),
                        (c.elem = e)),
                    t = (t || "").match(Ne) || [""],
                    s = t.length;
                    s--;

                )
                    (o = Qe.exec(t[s]) || []),
                        (p = m = o[1]),
                        (h = (o[2] || "").split(".").sort()),
                        p &&
                        ((l = pe.event.special[p] || {}),
                            (p = (i ? l.delegateType : l.bindType) || p),
                            (l = pe.event.special[p] || {}),
                            (d = pe.extend(
                                {
                                    type: p,
                                    origType: m,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && pe.expr.match.needsContext.test(i),
                                    namespace: h.join("."),
                                },
                                u
                            )),
                            (f = a[p]) ||
                            ((f = a[p] = []),
                                (f.delegateCount = 0),
                                (l.setup && l.setup.call(e, r, h, c) !== !1) ||
                                (e.addEventListener
                                    ? e.addEventListener(p, c, !1)
                                    : e.attachEvent && e.attachEvent("on" + p, c))),
                            l.add &&
                            (l.add.call(e, d), d.handler.guid || (d.handler.guid = n.guid)),
                            i ? f.splice(f.delegateCount++, 0, d) : f.push(d),
                            (pe.event.global[p] = !0));
                e = null;
            }
        },
        remove: function (e, t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                d,
                f,
                p,
                h,
                m,
                g = pe.hasData(e) && pe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(Ne) || [""], l = t.length; l--;)
                    if (
                        ((s = Qe.exec(t[l]) || []),
                            (p = m = s[1]),
                            (h = (s[2] || "").split(".").sort()),
                            p)
                    ) {
                        for (
                            d = pe.event.special[p] || {},
                            p = (r ? d.delegateType : d.bindType) || p,
                            f = c[p] || [],
                            s =
                            s[2] &&
                            new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            u = o = f.length;
                            o--;

                        )
                            (a = f[o]),
                                (!i && m !== a.origType) ||
                                (n && n.guid !== a.guid) ||
                                (s && !s.test(a.namespace)) ||
                                (r && r !== a.selector && ("**" !== r || !a.selector)) ||
                                (f.splice(o, 1),
                                    a.selector && f.delegateCount--,
                                    d.remove && d.remove.call(e, a));
                        u &&
                            !f.length &&
                            ((d.teardown && d.teardown.call(e, h, g.handle) !== !1) ||
                                pe.removeEvent(e, p, g.handle),
                                delete c[p]);
                    } else for (p in c) pe.event.remove(e, p + t[l], n, r, !0);
                pe.isEmptyObject(c) && (delete g.handle, pe._removeData(e, "events"));
            }
        },
        trigger: function (t, n, r, i) {
            var o,
                a,
                s,
                u,
                l,
                c,
                d,
                f = [r || re],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((s = c = r = r || re),
                    3 !== r.nodeType &&
                    8 !== r.nodeType &&
                    !Ve.test(p + pe.event.triggered) &&
                    (p.indexOf(".") > -1 &&
                        ((h = p.split(".")), (p = h.shift()), h.sort()),
                        (a = p.indexOf(":") < 0 && "on" + p),
                        (t = t[pe.expando] ? t : new pe.Event(p, "object" == typeof t && t)),
                        (t.isTrigger = i ? 2 : 3),
                        (t.namespace = h.join(".")),
                        (t.rnamespace = t.namespace
                            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
                            : null),
                        (t.result = void 0),
                        t.target || (t.target = r),
                        (n = null == n ? [t] : pe.makeArray(n, [t])),
                        (l = pe.event.special[p] || {}),
                        i || !l.trigger || l.trigger.apply(r, n) !== !1))
            ) {
                if (!i && !l.noBubble && !pe.isWindow(r)) {
                    for (
                        u = l.delegateType || p, Ve.test(u + p) || (s = s.parentNode);
                        s;
                        s = s.parentNode
                    )
                        f.push(s), (c = s);
                    c === (r.ownerDocument || re) &&
                        f.push(c.defaultView || c.parentWindow || e);
                }
                for (d = 0; (s = f[d++]) && !t.isPropagationStopped();)
                    (t.type = d > 1 ? u : l.bindType || p),
                        (o =
                            (pe._data(s, "events") || {})[t.type] && pe._data(s, "handle")),
                        o && o.apply(s, n),
                        (o = a && s[a]),
                        o &&
                        o.apply &&
                        He(s) &&
                        ((t.result = o.apply(s, n)),
                            t.result === !1 && t.preventDefault());
                if (
                    ((t.type = p),
                        !i &&
                        !t.isDefaultPrevented() &&
                        (!l._default || l._default.apply(f.pop(), n) === !1) &&
                        He(r) &&
                        a &&
                        r[p] &&
                        !pe.isWindow(r))
                ) {
                    (c = r[a]), c && (r[a] = null), (pe.event.triggered = p);
                    try {
                        r[p]();
                    } catch (m) { }
                    (pe.event.triggered = void 0), c && (r[a] = c);
                }
                return t.result;
            }
        },
        dispatch: function (e) {
            e = pe.event.fix(e);
            var t,
                n,
                r,
                i,
                o,
                a = [],
                s = ie.call(arguments),
                u = (pe._data(this, "events") || {})[e.type] || [],
                l = pe.event.special[e.type] || {};
            if (
                ((s[0] = e),
                    (e.delegateTarget = this),
                    !l.preDispatch || l.preDispatch.call(this, e) !== !1)
            ) {
                for (
                    a = pe.event.handlers.call(this, e, u), t = 0;
                    (i = a[t++]) && !e.isPropagationStopped();

                )
                    for (
                        e.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();

                    )
                        (!e.rnamespace || e.rnamespace.test(o.namespace)) &&
                            ((e.handleObj = o),
                                (e.data = o.data),
                                (r = (
                                    (pe.event.special[o.origType] || {}).handle || o.handler
                                ).apply(i.elem, s)),
                                void 0 !== r &&
                                (e.result = r) === !1 &&
                                (e.preventDefault(), e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function (e, t) {
            var n,
                r,
                i,
                o,
                a = [],
                s = t.delegateCount,
                u = e.target;
            if (
                s &&
                u.nodeType &&
                ("click" !== e.type || isNaN(e.button) || e.button < 1)
            )
                for (; u != this; u = u.parentNode || this)
                    if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                        for (r = [], n = 0; s > n; n++)
                            (o = t[n]),
                                (i = o.selector + " "),
                                void 0 === r[i] &&
                                (r[i] = o.needsContext
                                    ? pe(i, this).index(u) > -1
                                    : pe.find(i, this, null, [u]).length),
                                r[i] && r.push(o);
                        r.length && a.push({ elem: u, handlers: r });
                    }
            return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
        },
        fix: function (e) {
            if (e[pe.expando]) return e;
            var t,
                n,
                r,
                i = e.type,
                o = e,
                a = this.fixHooks[i];
            for (
                a ||
                (this.fixHooks[i] = a =
                    Ke.test(i) ? this.mouseHooks : Je.test(i) ? this.keyHooks : {}),
                r = a.props ? this.props.concat(a.props) : this.props,
                e = new pe.Event(o),
                t = r.length;
                t--;

            )
                (n = r[t]), (e[n] = o[n]);
            return (
                e.target || (e.target = o.srcElement || re),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                (e.metaKey = !!e.metaKey),
                a.filter ? a.filter(e, o) : e
            );
        },
        props:
            "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
                " "
            ),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (e, t) {
                return (
                    null == e.which &&
                    (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                );
            },
        },
        mouseHooks: {
            props:
                "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
                    " "
                ),
            filter: function (e, t) {
                var n,
                    r,
                    i,
                    o = t.button,
                    a = t.fromElement;
                return (
                    null == e.pageX &&
                    null != t.clientX &&
                    ((r = e.target.ownerDocument || re),
                        (i = r.documentElement),
                        (n = r.body),
                        (e.pageX =
                            t.clientX +
                            ((i && i.scrollLeft) || (n && n.scrollLeft) || 0) -
                            ((i && i.clientLeft) || (n && n.clientLeft) || 0)),
                        (e.pageY =
                            t.clientY +
                            ((i && i.scrollTop) || (n && n.scrollTop) || 0) -
                            ((i && i.clientTop) || (n && n.clientTop) || 0))),
                    !e.relatedTarget &&
                    a &&
                    (e.relatedTarget = a === e.target ? t.toElement : a),
                    e.which ||
                    void 0 === o ||
                    (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
                );
            },
        },
        special: {
            load: { noBubble: !0 },
            focus: {
                trigger: function () {
                    if (this !== x() && this.focus)
                        try {
                            return this.focus(), !1;
                        } catch (e) { }
                },
                delegateType: "focusin",
            },
            blur: {
                trigger: function () {
                    return this === x() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout",
            },
            click: {
                trigger: function () {
                    return pe.nodeName(this, "input") &&
                        "checkbox" === this.type &&
                        this.click
                        ? (this.click(), !1)
                        : void 0;
                },
                _default: function (e) {
                    return pe.nodeName(e.target, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
        simulate: function (e, t, n) {
            var r = pe.extend(new pe.Event(), n, { type: e, isSimulated: !0 });
            pe.event.trigger(r, null, t),
                r.isDefaultPrevented() && n.preventDefault();
        },
    }),
        (pe.removeEvent = re.removeEventListener
            ? function (e, t, n) {
                e.removeEventListener && e.removeEventListener(t, n);
            }
            : function (e, t, n) {
                var r = "on" + t;
                e.detachEvent &&
                    ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n));
            }),
        (pe.Event = function (e, t) {
            return this instanceof pe.Event
                ? (e && e.type
                    ? ((this.originalEvent = e),
                        (this.type = e.type),
                        (this.isDefaultPrevented =
                            e.defaultPrevented ||
                                (void 0 === e.defaultPrevented && e.returnValue === !1)
                                ? y
                                : b))
                    : (this.type = e),
                    t && pe.extend(this, t),
                    (this.timeStamp = (e && e.timeStamp) || pe.now()),
                    void (this[pe.expando] = !0))
                : new pe.Event(e, t);
        }),
        (pe.Event.prototype = {
            constructor: pe.Event,
            isDefaultPrevented: b,
            isPropagationStopped: b,
            isImmediatePropagationStopped: b,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = y),
                    e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = y),
                    e &&
                    !this.isSimulated &&
                    (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = y),
                    e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        pe.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, t) {
                pe.event.special[e] = {
                    delegateType: t,
                    bindType: t,
                    handle: function (e) {
                        var n,
                            r = this,
                            i = e.relatedTarget,
                            o = e.handleObj;
                        return (
                            (!i || (i !== r && !pe.contains(r, i))) &&
                            ((e.type = o.origType),
                                (n = o.handler.apply(this, arguments)),
                                (e.type = t)),
                            n
                        );
                    },
                };
            }
        ),
        de.submit ||
        (pe.event.special.submit = {
            setup: function () {
                return pe.nodeName(this, "form")
                    ? !1
                    : void pe.event.add(
                        this,
                        "click._submit keypress._submit",
                        function (e) {
                            var t = e.target,
                                n =
                                    pe.nodeName(t, "input") || pe.nodeName(t, "button")
                                        ? pe.prop(t, "form")
                                        : void 0;
                            n &&
                                !pe._data(n, "submit") &&
                                (pe.event.add(n, "submit._submit", function (e) {
                                    e._submitBubble = !0;
                                }),
                                    pe._data(n, "submit", !0));
                        }
                    );
            },
            postDispatch: function (e) {
                e._submitBubble &&
                    (delete e._submitBubble,
                        this.parentNode &&
                        !e.isTrigger &&
                        pe.event.simulate("submit", this.parentNode, e));
            },
            teardown: function () {
                return pe.nodeName(this, "form")
                    ? !1
                    : void pe.event.remove(this, "._submit");
            },
        }),
        de.change ||
        (pe.event.special.change = {
            setup: function () {
                return Ye.test(this.nodeName)
                    ? (("checkbox" === this.type || "radio" === this.type) &&
                        (pe.event.add(this, "propertychange._change", function (e) {
                            "checked" === e.originalEvent.propertyName &&
                                (this._justChanged = !0);
                        }),
                            pe.event.add(this, "click._change", function (e) {
                                this._justChanged && !e.isTrigger && (this._justChanged = !1),
                                    pe.event.simulate("change", this, e);
                            })),
                        !1)
                    : void pe.event.add(this, "beforeactivate._change", function (e) {
                        var t = e.target;
                        Ye.test(t.nodeName) &&
                            !pe._data(t, "change") &&
                            (pe.event.add(t, "change._change", function (e) {
                                !this.parentNode ||
                                    e.isSimulated ||
                                    e.isTrigger ||
                                    pe.event.simulate("change", this.parentNode, e);
                            }),
                                pe._data(t, "change", !0));
                    });
            },
            handle: function (e) {
                var t = e.target;
                return this !== t ||
                    e.isSimulated ||
                    e.isTrigger ||
                    ("radio" !== t.type && "checkbox" !== t.type)
                    ? e.handleObj.handler.apply(this, arguments)
                    : void 0;
            },
            teardown: function () {
                return pe.event.remove(this, "._change"), !Ye.test(this.nodeName);
            },
        }),
        de.focusin ||
        pe.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
                pe.event.simulate(t, e.target, pe.event.fix(e));
            };
            pe.event.special[t] = {
                setup: function () {
                    var r = this.ownerDocument || this,
                        i = pe._data(r, t);
                    i || r.addEventListener(e, n, !0), pe._data(r, t, (i || 0) + 1);
                },
                teardown: function () {
                    var r = this.ownerDocument || this,
                        i = pe._data(r, t) - 1;
                    i
                        ? pe._data(r, t, i)
                        : (r.removeEventListener(e, n, !0), pe._removeData(r, t));
                },
            };
        }),
        pe.fn.extend({
            on: function (e, t, n, r) {
                return w(this, e, t, n, r);
            },
            one: function (e, t, n, r) {
                return w(this, e, t, n, r, 1);
            },
            off: function (e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (r = e.handleObj),
                        pe(e.delegateTarget).off(
                            r.namespace ? r.origType + "." + r.namespace : r.origType,
                            r.selector,
                            r.handler
                        ),
                        this
                    );
                if ("object" == typeof e) {
                    for (i in e) this.off(i, t, e[i]);
                    return this;
                }
                return (
                    (t === !1 || "function" == typeof t) && ((n = t), (t = void 0)),
                    n === !1 && (n = b),
                    this.each(function () {
                        pe.event.remove(this, e, n, t);
                    })
                );
            },
            trigger: function (e, t) {
                return this.each(function () {
                    pe.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                return n ? pe.event.trigger(e, t, n, !0) : void 0;
            },
        });
    var Ze = / jQuery\d+="(?:null|\d+)"/g,
        et = new RegExp("<(?:" + We + ")[\\s/>]", "i"),
        tt =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        it = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        at = p(re),
        st = at.appendChild(re.createElement("div"));
    pe.extend({
        htmlPrefilter: function (e) {
            return e.replace(tt, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var r,
                i,
                o,
                a,
                s,
                u = pe.contains(e.ownerDocument, e);
            if (
                (de.html5Clone || pe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">")
                    ? (o = e.cloneNode(!0))
                    : ((st.innerHTML = e.outerHTML), st.removeChild((o = st.firstChild))),
                    !(
                        (de.noCloneEvent && de.noCloneChecked) ||
                        (1 !== e.nodeType && 11 !== e.nodeType) ||
                        pe.isXMLDoc(e)
                    ))
            )
                for (r = h(o), s = h(e), a = 0; null != (i = s[a]); ++a)
                    r[a] && E(i, r[a]);
            if (t)
                if (n)
                    for (s = s || h(e), r = r || h(o), a = 0; null != (i = s[a]); a++)
                        k(i, r[a]);
                else k(e, o);
            return (
                (r = h(o, "script")),
                r.length > 0 && m(r, !u && h(e, "script")),
                (r = s = i = null),
                o
            );
        },
        cleanData: function (e, t) {
            for (
                var n,
                r,
                i,
                o,
                a = 0,
                s = pe.expando,
                u = pe.cache,
                l = de.attributes,
                c = pe.event.special;
                null != (n = e[a]);
                a++
            )
                if ((t || He(n)) && ((i = n[s]), (o = i && u[i]))) {
                    if (o.events)
                        for (r in o.events)
                            c[r] ? pe.event.remove(n, r) : pe.removeEvent(n, r, o.handle);
                    u[i] &&
                        (delete u[i],
                            l || "undefined" == typeof n.removeAttribute
                                ? (n[s] = void 0)
                                : n.removeAttribute(s),
                            ne.push(i));
                }
        },
    }),
        pe.fn.extend({
            domManip: j,
            detach: function (e) {
                return S(this, e, !0);
            },
            remove: function (e) {
                return S(this, e);
            },
            text: function (e) {
                return Re(
                    this,
                    function (e) {
                        return void 0 === e
                            ? pe.text(this)
                            : this.empty().append(
                                ((this[0] && this[0].ownerDocument) || re).createTextNode(e)
                            );
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return j(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = A(this, e);
                        t.appendChild(e);
                    }
                });
            },
            prepend: function () {
                return j(this, arguments, function (e) {
                    if (
                        1 === this.nodeType ||
                        11 === this.nodeType ||
                        9 === this.nodeType
                    ) {
                        var t = A(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return j(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return j(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && pe.cleanData(h(e, !1)); e.firstChild;)
                        e.removeChild(e.firstChild);
                    e.options && pe.nodeName(e, "select") && (e.options.length = 0);
                }
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null == e ? !1 : e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return pe.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return Re(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === e)
                            return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                        if (
                            "string" == typeof e &&
                            !nt.test(e) &&
                            (de.htmlSerialize || !et.test(e)) &&
                            (de.leadingWhitespace || !ze.test(e)) &&
                            !$e[(Ge.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = pe.htmlPrefilter(e);
                            try {
                                for (; r > n; n++)
                                    (t = this[n] || {}),
                                        1 === t.nodeType &&
                                        (pe.cleanData(h(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (i) { }
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return j(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        pe.inArray(this, e) < 0 &&
                            (pe.cleanData(h(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        pe.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, t) {
                pe.fn[e] = function (e) {
                    for (var n, r = 0, i = [], o = pe(e), a = o.length - 1; a >= r; r++)
                        (n = r === a ? this : this.clone(!0)),
                            pe(o[r])[t](n),
                            ae.apply(i, n.get());
                    return this.pushStack(i);
                };
            }
        );
    var ut,
        lt = { HTML: "block", BODY: "block" },
        ct = /^margin/,
        dt = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        ft = function (e, t, n, r) {
            var i,
                o,
                a = {};
            for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i;
        },
        pt = re.documentElement;
    !(function () {
        function t() {
            var t,
                c,
                d = re.documentElement;
            d.appendChild(u),
                (l.style.cssText =
                    "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
                (n = i = s = !1),
                (r = a = !0),
                e.getComputedStyle &&
                ((c = e.getComputedStyle(l)),
                    (n = "1%" !== (c || {}).top),
                    (s = "2px" === (c || {}).marginLeft),
                    (i = "4px" === (c || { width: "4px" }).width),
                    (l.style.marginRight = "50%"),
                    (r = "4px" === (c || { marginRight: "4px" }).marginRight),
                    (t = l.appendChild(re.createElement("div"))),
                    (t.style.cssText = l.style.cssText =
                        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                    (t.style.marginRight = t.style.width = "0"),
                    (l.style.width = "1px"),
                    (a = !parseFloat((e.getComputedStyle(t) || {}).marginRight)),
                    l.removeChild(t)),
                (l.style.display = "none"),
                (o = 0 === l.getClientRects().length),
                o &&
                ((l.style.display = ""),
                    (l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
                    (l.childNodes[0].style.borderCollapse = "separate"),
                    (t = l.getElementsByTagName("td")),
                    (t[0].style.cssText = "margin:0;border:0;padding:0;display:none"),
                    (o = 0 === t[0].offsetHeight),
                    o &&
                    ((t[0].style.display = ""),
                        (t[1].style.display = "none"),
                        (o = 0 === t[0].offsetHeight))),
                d.removeChild(u);
        }
        var n,
            r,
            i,
            o,
            a,
            s,
            u = re.createElement("div"),
            l = re.createElement("div");
        l.style &&
            ((l.style.cssText = "float:left;opacity:.5"),
                (de.opacity = "0.5" === l.style.opacity),
                (de.cssFloat = !!l.style.cssFloat),
                (l.style.backgroundClip = "content-box"),
                (l.cloneNode(!0).style.backgroundClip = ""),
                (de.clearCloneStyle = "content-box" === l.style.backgroundClip),
                (u = re.createElement("div")),
                (u.style.cssText =
                    "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
                (l.innerHTML = ""),
                u.appendChild(l),
                (de.boxSizing =
                    "" === l.style.boxSizing ||
                    "" === l.style.MozBoxSizing ||
                    "" === l.style.WebkitBoxSizing),
                pe.extend(de, {
                    reliableHiddenOffsets: function () {
                        return null == n && t(), o;
                    },
                    boxSizingReliable: function () {
                        return null == n && t(), i;
                    },
                    pixelMarginRight: function () {
                        return null == n && t(), r;
                    },
                    pixelPosition: function () {
                        return null == n && t(), n;
                    },
                    reliableMarginRight: function () {
                        return null == n && t(), a;
                    },
                    reliableMarginLeft: function () {
                        return null == n && t(), s;
                    },
                }));
    })();
    var ht,
        mt,
        gt = /^(top|right|bottom|left)$/;
    e.getComputedStyle
        ? ((ht = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        }),
            (mt = function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s = e.style;
                return (
                    (n = n || ht(e)),
                    (a = n ? n.getPropertyValue(t) || n[t] : void 0),
                    ("" !== a && void 0 !== a) ||
                    pe.contains(e.ownerDocument, e) ||
                    (a = pe.style(e, t)),
                    n &&
                    !de.pixelMarginRight() &&
                    dt.test(a) &&
                    ct.test(t) &&
                    ((r = s.width),
                        (i = s.minWidth),
                        (o = s.maxWidth),
                        (s.minWidth = s.maxWidth = s.width = a),
                        (a = n.width),
                        (s.width = r),
                        (s.minWidth = i),
                        (s.maxWidth = o)),
                    void 0 === a ? a : a + ""
                );
            }))
        : pt.currentStyle &&
        ((ht = function (e) {
            return e.currentStyle;
        }),
            (mt = function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s = e.style;
                return (
                    (n = n || ht(e)),
                    (a = n ? n[t] : void 0),
                    null == a && s && s[t] && (a = s[t]),
                    dt.test(a) &&
                    !gt.test(t) &&
                    ((r = s.left),
                        (i = e.runtimeStyle),
                        (o = i && i.left),
                        o && (i.left = e.currentStyle.left),
                        (s.left = "fontSize" === t ? "1em" : a),
                        (a = s.pixelLeft + "px"),
                        (s.left = r),
                        o && (i.left = o)),
                    void 0 === a ? a : a + "" || "auto"
                );
            }));
    var vt = /alpha\([^)]*\)/i,
        yt = /opacity\s*=\s*([^)]*)/i,
        bt = /^(none|table(?!-c[ea]).+)/,
        xt = new RegExp("^(" + Fe + ")(.*)$", "i"),
        wt = { position: "absolute", visibility: "hidden", display: "block" },
        At = { letterSpacing: "0", fontWeight: "400" },
        Ct = ["Webkit", "O", "Moz", "ms"],
        Tt = re.createElement("div").style;
    pe.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = mt(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
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
            zoom: !0,
        },
        cssProps: { float: de.cssFloat ? "cssFloat" : "styleFloat" },
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i,
                    o,
                    a,
                    s = pe.camelCase(t),
                    u = e.style;
                if (
                    ((t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s)),
                        (a = pe.cssHooks[t] || pe.cssHooks[s]),
                        void 0 === n)
                )
                    return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if (
                    ((o = typeof n),
                        "string" === o &&
                        (i = Oe.exec(n)) &&
                        i[1] &&
                        ((n = f(e, t, i)), (o = "number")),
                        null != n &&
                        n === n &&
                        ("number" === o &&
                            (n += (i && i[3]) || (pe.cssNumber[s] ? "" : "px")),
                            de.clearCloneStyle ||
                            "" !== n ||
                            0 !== t.indexOf("background") ||
                            (u[t] = "inherit"),
                            !(a && "set" in a && void 0 === (n = a.set(e, n, r)))))
                )
                    try {
                        u[t] = n;
                    } catch (l) { }
            }
        },
        css: function (e, t, n, r) {
            var i,
                o,
                a,
                s = pe.camelCase(t);
            return (
                (t = pe.cssProps[s] || (pe.cssProps[s] = H(s) || s)),
                (a = pe.cssHooks[t] || pe.cssHooks[s]),
                a && "get" in a && (o = a.get(e, !0, n)),
                void 0 === o && (o = mt(e, t, r)),
                "normal" === o && t in At && (o = At[t]),
                "" === n || n
                    ? ((i = parseFloat(o)), n === !0 || isFinite(i) ? i || 0 : o)
                    : o
            );
        },
    }),
        pe.each(["height", "width"], function (e, t) {
            pe.cssHooks[t] = {
                get: function (e, n, r) {
                    return n
                        ? bt.test(pe.css(e, "display")) && 0 === e.offsetWidth
                            ? ft(e, wt, function () {
                                return O(e, t, r);
                            })
                            : O(e, t, r)
                        : void 0;
                },
                set: function (e, n, r) {
                    var i = r && ht(e);
                    return q(
                        e,
                        n,
                        r
                            ? F(
                                e,
                                t,
                                r,
                                de.boxSizing &&
                                "border-box" === pe.css(e, "boxSizing", !1, i),
                                i
                            )
                            : 0
                    );
                },
            };
        }),
        de.opacity ||
        (pe.cssHooks.opacity = {
            get: function (e, t) {
                return yt.test(
                    (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
                )
                    ? 0.01 * parseFloat(RegExp.$1) + ""
                    : t
                        ? "1"
                        : "";
            },
            set: function (e, t) {
                var n = e.style,
                    r = e.currentStyle,
                    i = pe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    o = (r && r.filter) || n.filter || "";
                (n.zoom = 1),
                    ((t >= 1 || "" === t) &&
                        "" === pe.trim(o.replace(vt, "")) &&
                        n.removeAttribute &&
                        (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
                    (n.filter = vt.test(o) ? o.replace(vt, i) : o + " " + i);
            },
        }),
        (pe.cssHooks.marginRight = L(de.reliableMarginRight, function (e, t) {
            return t
                ? ft(e, { display: "inline-block" }, mt, [e, "marginRight"])
                : void 0;
        })),
        (pe.cssHooks.marginLeft = L(de.reliableMarginLeft, function (e, t) {
            return t
                ? (parseFloat(mt(e, "marginLeft")) ||
                    (pe.contains(e.ownerDocument, e)
                        ? e.getBoundingClientRect().left -
                        ft(e, { marginLeft: 0 }, function () {
                            return e.getBoundingClientRect().left;
                        })
                        : 0)) + "px"
                : void 0;
        })),
        pe.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (pe.cssHooks[e + t] = {
                expand: function (n) {
                    for (
                        var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
                        4 > r;
                        r++
                    )
                        i[e + Me[r] + t] = o[r] || o[r - 2] || o[0];
                    return i;
                },
            }),
                ct.test(e) || (pe.cssHooks[e + t].set = q);
        }),
        pe.fn.extend({
            css: function (e, t) {
                return Re(
                    this,
                    function (e, t, n) {
                        var r,
                            i,
                            o = {},
                            a = 0;
                        if (pe.isArray(t)) {
                            for (r = ht(e), i = t.length; i > a; a++)
                                o[t[a]] = pe.css(e, t[a], !1, r);
                            return o;
                        }
                        return void 0 !== n ? pe.style(e, t, n) : pe.css(e, t);
                    },
                    e,
                    t,
                    arguments.length > 1
                );
            },
            show: function () {
                return _(this, !0);
            },
            hide: function () {
                return _(this);
            },
            toggle: function (e) {
                return "boolean" == typeof e
                    ? e
                        ? this.show()
                        : this.hide()
                    : this.each(function () {
                        Pe(this) ? pe(this).show() : pe(this).hide();
                    });
            },
        }),
        (pe.Tween = M),
        (M.prototype = {
            constructor: M,
            init: function (e, t, n, r, i, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = i || pe.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = r),
                    (this.unit = o || (pe.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = M.propHooks[this.prop];
                return e && e.get ? e.get(this) : M.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = M.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                            pe.easing[this.easing](
                                e,
                                this.options.duration * e,
                                0,
                                1,
                                this.options.duration
                            ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : M.propHooks._default.set(this),
                    this
                );
            },
        }),
        (M.prototype.init.prototype = M.prototype),
        (M.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : ((t = pe.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
                },
                set: function (e) {
                    pe.fx.step[e.prop]
                        ? pe.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                            (null == e.elem.style[pe.cssProps[e.prop]] &&
                                !pe.cssHooks[e.prop])
                            ? (e.elem[e.prop] = e.now)
                            : pe.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (M.propHooks.scrollTop = M.propHooks.scrollLeft =
        {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (pe.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (pe.fx = M.prototype.init),
        (pe.fx.step = {});
    var kt,
        Et,
        jt = /^(?:toggle|show|hide)$/,
        St = /queueHooks$/;
    (pe.Animation = pe.extend(z, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return f(n.elem, e, Oe.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            pe.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ne));
            for (var n, r = 0, i = e.length; i > r; r++)
                (n = e[r]),
                    (z.tweeners[n] = z.tweeners[n] || []),
                    z.tweeners[n].unshift(t);
        },
        prefilters: [G],
        prefilter: function (e, t) {
            t ? z.prefilters.unshift(e) : z.prefilters.push(e);
        },
    })),
        (pe.speed = function (e, t, n) {
            var r =
                e && "object" == typeof e
                    ? pe.extend({}, e)
                    : {
                        complete: n || (!n && t) || (pe.isFunction(e) && e),
                        duration: e,
                        easing: (n && t) || (t && !pe.isFunction(t) && t),
                    };
            return (
                (r.duration = pe.fx.off
                    ? 0
                    : "number" == typeof r.duration
                        ? r.duration
                        : r.duration in pe.fx.speeds
                            ? pe.fx.speeds[r.duration]
                            : pe.fx.speeds._default),
                (null == r.queue || r.queue === !0) && (r.queue = "fx"),
                (r.old = r.complete),
                (r.complete = function () {
                    pe.isFunction(r.old) && r.old.call(this),
                        r.queue && pe.dequeue(this, r.queue);
                }),
                r
            );
        }),
        pe.fn.extend({
            fadeTo: function (e, t, n, r) {
                return this.filter(Pe)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, r);
            },
            animate: function (e, t, n, r) {
                var i = pe.isEmptyObject(e),
                    o = pe.speed(t, n, r),
                    a = function () {
                        var t = z(this, pe.extend({}, e), o);
                        (i || pe._data(this, "finish")) && t.stop(!0);
                    };
                return (
                    (a.finish = a),
                    i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                );
            },
            stop: function (e, t, n) {
                var r = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            i = null != e && e + "queueHooks",
                            o = pe.timers,
                            a = pe._data(this);
                        if (i) a[i] && a[i].stop && r(a[i]);
                        else for (i in a) a[i] && a[i].stop && St.test(i) && r(a[i]);
                        for (i = o.length; i--;)
                            o[i].elem !== this ||
                                (null != e && o[i].queue !== e) ||
                                (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                        (t || !n) && pe.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    e !== !1 && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = pe._data(this),
                            r = n[e + "queue"],
                            i = n[e + "queueHooks"],
                            o = pe.timers,
                            a = r ? r.length : 0;
                        for (
                            n.finish = !0,
                            pe.queue(this, e, []),
                            i && i.stop && i.stop.call(this, !0),
                            t = o.length;
                            t--;

                        )
                            o[t].elem === this &&
                                o[t].queue === e &&
                                (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; a > t; t++)
                            r[t] && r[t].finish && r[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        pe.each(["toggle", "show", "hide"], function (e, t) {
            var n = pe.fn[t];
            pe.fn[t] = function (e, r, i) {
                return null == e || "boolean" == typeof e
                    ? n.apply(this, arguments)
                    : this.animate(R(t, !0), e, r, i);
            };
        }),
        pe.each(
            {
                slideDown: R("show"),
                slideUp: R("hide"),
                slideToggle: R("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, t) {
                pe.fn[e] = function (e, n, r) {
                    return this.animate(t, e, n, r);
                };
            }
        ),
        (pe.timers = []),
        (pe.fx.tick = function () {
            var e,
                t = pe.timers,
                n = 0;
            for (kt = pe.now(); n < t.length; n++)
                (e = t[n]), e() || t[n] !== e || t.splice(n--, 1);
            t.length || pe.fx.stop(), (kt = void 0);
        }),
        (pe.fx.timer = function (e) {
            pe.timers.push(e), e() ? pe.fx.start() : pe.timers.pop();
        }),
        (pe.fx.interval = 13),
        (pe.fx.start = function () {
            Et || (Et = e.setInterval(pe.fx.tick, pe.fx.interval));
        }),
        (pe.fx.stop = function () {
            e.clearInterval(Et), (Et = null);
        }),
        (pe.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (pe.fn.delay = function (t, n) {
            return (
                (t = pe.fx ? pe.fx.speeds[t] || t : t),
                (n = n || "fx"),
                this.queue(n, function (n, r) {
                    var i = e.setTimeout(n, t);
                    r.stop = function () {
                        e.clearTimeout(i);
                    };
                })
            );
        }),
        (function () {
            var e,
                t = re.createElement("input"),
                n = re.createElement("div"),
                r = re.createElement("select"),
                i = r.appendChild(re.createElement("option"));
            (n = re.createElement("div")),
                n.setAttribute("className", "t"),
                (n.innerHTML =
                    "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
                (e = n.getElementsByTagName("a")[0]),
                t.setAttribute("type", "checkbox"),
                n.appendChild(t),
                (e = n.getElementsByTagName("a")[0]),
                (e.style.cssText = "top:1px"),
                (de.getSetAttribute = "t" !== n.className),
                (de.style = /top/.test(e.getAttribute("style"))),
                (de.hrefNormalized = "/a" === e.getAttribute("href")),
                (de.checkOn = !!t.value),
                (de.optSelected = i.selected),
                (de.enctype = !!re.createElement("form").enctype),
                (r.disabled = !0),
                (de.optDisabled = !i.disabled),
                (t = re.createElement("input")),
                t.setAttribute("value", ""),
                (de.input = "" === t.getAttribute("value")),
                (t.value = "t"),
                t.setAttribute("type", "radio"),
                (de.radioValue = "t" === t.value);
        })();
    var Nt = /\r/g,
        Dt = /[\x20\t\r\n\f]+/g;
    pe.fn.extend({
        val: function (e) {
            var t,
                n,
                r,
                i = this[0];
            {
                if (arguments.length)
                    return (
                        (r = pe.isFunction(e)),
                        this.each(function (n) {
                            var i;
                            1 === this.nodeType &&
                                ((i = r ? e.call(this, n, pe(this).val()) : e),
                                    null == i
                                        ? (i = "")
                                        : "number" == typeof i
                                            ? (i += "")
                                            : pe.isArray(i) &&
                                            (i = pe.map(i, function (e) {
                                                return null == e ? "" : e + "";
                                            })),
                                    (t =
                                        pe.valHooks[this.type] ||
                                        pe.valHooks[this.nodeName.toLowerCase()]),
                                    (t && "set" in t && void 0 !== t.set(this, i, "value")) ||
                                    (this.value = i));
                        })
                    );
                if (i)
                    return (
                        (t = pe.valHooks[i.type] || pe.valHooks[i.nodeName.toLowerCase()]),
                        t && "get" in t && void 0 !== (n = t.get(i, "value"))
                            ? n
                            : ((n = i.value),
                                "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n)
                    );
            }
        },
    }),
        pe.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = pe.find.attr(e, "value");
                        return null != t ? t : pe.trim(pe.text(e)).replace(Dt, " ");
                    },
                },
                select: {
                    get: function (e) {
                        for (
                            var t,
                            n,
                            r = e.options,
                            i = e.selectedIndex,
                            o = "select-one" === e.type || 0 > i,
                            a = o ? null : [],
                            s = o ? i + 1 : r.length,
                            u = 0 > i ? s : o ? i : 0;
                            s > u;
                            u++
                        )
                            if (
                                ((n = r[u]),
                                    (n.selected || u === i) &&
                                    (de.optDisabled
                                        ? !n.disabled
                                        : null === n.getAttribute("disabled")) &&
                                    (!n.parentNode.disabled ||
                                        !pe.nodeName(n.parentNode, "optgroup")))
                            ) {
                                if (((t = pe(n).val()), o)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        for (
                            var n, r, i = e.options, o = pe.makeArray(t), a = i.length;
                            a--;

                        )
                            if (((r = i[a]), pe.inArray(pe.valHooks.option.get(r), o) > -1))
                                try {
                                    r.selected = n = !0;
                                } catch (s) {
                                    r.scrollHeight;
                                }
                            else r.selected = !1;
                        return n || (e.selectedIndex = -1), i;
                    },
                },
            },
        }),
        pe.each(["radio", "checkbox"], function () {
            (pe.valHooks[this] = {
                set: function (e, t) {
                    return pe.isArray(t)
                        ? (e.checked = pe.inArray(pe(e).val(), t) > -1)
                        : void 0;
                },
            }),
                de.checkOn ||
                (pe.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                });
        });
    var Lt,
        Ht,
        _t = pe.expr.attrHandle,
        qt = /^(?:checked|selected)$/i,
        Ft = de.getSetAttribute,
        Ot = de.input;
    pe.fn.extend({
        attr: function (e, t) {
            return Re(this, pe.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
            return this.each(function () {
                pe.removeAttr(this, e);
            });
        },
    }),
        pe.extend({
            attr: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute
                        ? pe.prop(e, t, n)
                        : ((1 === o && pe.isXMLDoc(e)) ||
                            ((t = t.toLowerCase()),
                                (i =
                                    pe.attrHooks[t] || (pe.expr.match.bool.test(t) ? Ht : Lt))),
                            void 0 !== n
                                ? null === n
                                    ? void pe.removeAttr(e, t)
                                    : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                        ? r
                                        : (e.setAttribute(t, n + ""), n)
                                : i && "get" in i && null !== (r = i.get(e, t))
                                    ? r
                                    : ((r = pe.find.attr(e, t)), null == r ? void 0 : r));
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!de.radioValue && "radio" === t && pe.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    r,
                    i = 0,
                    o = t && t.match(Ne);
                if (o && 1 === e.nodeType)
                    for (; (n = o[i++]);)
                        (r = pe.propFix[n] || n),
                            pe.expr.match.bool.test(n)
                                ? (Ot && Ft) || !qt.test(n)
                                    ? (e[r] = !1)
                                    : (e[pe.camelCase("default-" + n)] = e[r] = !1)
                                : pe.attr(e, n, ""),
                            e.removeAttribute(Ft ? n : r);
            },
        }),
        (Ht = {
            set: function (e, t, n) {
                return (
                    t === !1
                        ? pe.removeAttr(e, n)
                        : (Ot && Ft) || !qt.test(n)
                            ? e.setAttribute((!Ft && pe.propFix[n]) || n, n)
                            : (e[pe.camelCase("default-" + n)] = e[n] = !0),
                    n
                );
            },
        }),
        pe.each(pe.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = _t[t] || pe.find.attr;
            (Ot && Ft) || !qt.test(t)
                ? (_t[t] = function (e, t, r) {
                    var i, o;
                    return (
                        r ||
                        ((o = _t[t]),
                            (_t[t] = i),
                            (i = null != n(e, t, r) ? t.toLowerCase() : null),
                            (_t[t] = o)),
                        i
                    );
                })
                : (_t[t] = function (e, t, n) {
                    return n
                        ? void 0
                        : e[pe.camelCase("default-" + t)]
                            ? t.toLowerCase()
                            : null;
                });
        }),
        (Ot && Ft) ||
        (pe.attrHooks.value = {
            set: function (e, t, n) {
                return pe.nodeName(e, "input")
                    ? void (e.defaultValue = t)
                    : Lt && Lt.set(e, t, n);
            },
        }),
        Ft ||
        ((Lt = {
            set: function (e, t, n) {
                var r = e.getAttributeNode(n);
                return (
                    r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))),
                    (r.value = t += ""),
                    "value" === n || t === e.getAttribute(n) ? t : void 0
                );
            },
        }),
            (_t.id =
                _t.name =
                _t.coords =
                function (e, t, n) {
                    var r;
                    return n
                        ? void 0
                        : (r = e.getAttributeNode(t)) && "" !== r.value
                            ? r.value
                            : null;
                }),
            (pe.valHooks.button = {
                get: function (e, t) {
                    var n = e.getAttributeNode(t);
                    return n && n.specified ? n.value : void 0;
                },
                set: Lt.set,
            }),
            (pe.attrHooks.contenteditable = {
                set: function (e, t, n) {
                    Lt.set(e, "" === t ? !1 : t, n);
                },
            }),
            pe.each(["width", "height"], function (e, t) {
                pe.attrHooks[t] = {
                    set: function (e, n) {
                        return "" === n ? (e.setAttribute(t, "auto"), n) : void 0;
                    },
                };
            })),
        de.style ||
        (pe.attrHooks.style = {
            get: function (e) {
                return e.style.cssText || void 0;
            },
            set: function (e, t) {
                return (e.style.cssText = t + "");
            },
        });
    var Mt = /^(?:input|select|textarea|button|object)$/i,
        Pt = /^(?:a|area)$/i;
    pe.fn.extend({
        prop: function (e, t) {
            return Re(this, pe.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
            return (
                (e = pe.propFix[e] || e),
                this.each(function () {
                    try {
                        (this[e] = void 0), delete this[e];
                    } catch (t) { }
                })
            );
        },
    }),
        pe.extend({
            prop: function (e, t, n) {
                var r,
                    i,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && pe.isXMLDoc(e)) ||
                        ((t = pe.propFix[t] || t), (i = pe.propHooks[t])),
                        void 0 !== n
                            ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                                ? r
                                : (e[t] = n)
                            : i && "get" in i && null !== (r = i.get(e, t))
                                ? r
                                : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = pe.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : Mt.test(e.nodeName) || (Pt.test(e.nodeName) && e.href)
                                ? 0
                                : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        de.hrefNormalized ||
        pe.each(["href", "src"], function (e, t) {
            pe.propHooks[t] = {
                get: function (e) {
                    return e.getAttribute(t, 4);
                },
            };
        }),
        de.optSelected ||
        (pe.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return (
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
                    null
                );
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
        }),
        pe.each(
            [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
            ],
            function () {
                pe.propFix[this.toLowerCase()] = this;
            }
        ),
        de.enctype || (pe.propFix.enctype = "encoding");
    var Rt = /[\t\r\n\f]/g;
    pe.fn.extend({
        addClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (pe.isFunction(e))
                return this.each(function (t) {
                    pe(this).addClass(e.call(this, t, W(this)));
                });
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; (n = this[u++]);)
                    if (
                        ((i = W(n)),
                            (r = 1 === n.nodeType && (" " + i + " ").replace(Rt, " ")))
                    ) {
                        for (a = 0; (o = t[a++]);)
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        (s = pe.trim(r)), i !== s && pe.attr(n, "class", s);
                    }
            return this;
        },
        removeClass: function (e) {
            var t,
                n,
                r,
                i,
                o,
                a,
                s,
                u = 0;
            if (pe.isFunction(e))
                return this.each(function (t) {
                    pe(this).removeClass(e.call(this, t, W(this)));
                });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; (n = this[u++]);)
                    if (
                        ((i = W(n)),
                            (r = 1 === n.nodeType && (" " + i + " ").replace(Rt, " ")))
                    ) {
                        for (a = 0; (o = t[a++]);)
                            for (; r.indexOf(" " + o + " ") > -1;)
                                r = r.replace(" " + o + " ", " ");
                        (s = pe.trim(r)), i !== s && pe.attr(n, "class", s);
                    }
            return this;
        },
        toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n
                ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                : pe.isFunction(e)
                    ? this.each(function (n) {
                        pe(this).toggleClass(e.call(this, n, W(this), t), t);
                    })
                    : this.each(function () {
                        var t, r, i, o;
                        if ("string" === n)
                            for (r = 0, i = pe(this), o = e.match(Ne) || []; (t = o[r++]);)
                                i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                        else
                            (void 0 === e || "boolean" === n) &&
                                ((t = W(this)),
                                    t && pe._data(this, "__className__", t),
                                    pe.attr(
                                        this,
                                        "class",
                                        t || e === !1 ? "" : pe._data(this, "__className__") || ""
                                    ));
                    });
        },
        hasClass: function (e) {
            var t,
                n,
                r = 0;
            for (t = " " + e + " "; (n = this[r++]);)
                if (
                    1 === n.nodeType &&
                    (" " + W(n) + " ").replace(Rt, " ").indexOf(t) > -1
                )
                    return !0;
            return !1;
        },
    }),
        pe.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                " "
            ),
            function (e, t) {
                pe.fn[t] = function (e, n) {
                    return arguments.length > 0
                        ? this.on(t, null, e, n)
                        : this.trigger(t);
                };
            }
        ),
        pe.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        });
    var It = e.location,
        Gt = pe.now(),
        Bt = /\?/,
        zt =
            /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (pe.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n,
            r = null,
            i = pe.trim(t + "");
        return i &&
            !pe.trim(
                i.replace(zt, function (e, t, i, o) {
                    return (
                        n && t && (r = 0), 0 === r ? e : ((n = i || t), (r += !o - !i), "")
                    );
                })
            )
            ? Function("return " + i)()
            : pe.error("Invalid JSON: " + t);
    }),
        (pe.parseXML = function (t) {
            var n, r;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser
                    ? ((r = new e.DOMParser()), (n = r.parseFromString(t, "text/xml")))
                    : ((n = new e.ActiveXObject("Microsoft.XMLDOM")),
                        (n.async = "false"),
                        n.loadXML(t));
            } catch (i) {
                n = void 0;
            }
            return (
                (n &&
                    n.documentElement &&
                    !n.getElementsByTagName("parsererror").length) ||
                pe.error("Invalid XML: " + t),
                n
            );
        });
    var Wt = /#.*$/,
        $t = /([?&])_=[^&]*/,
        Ut = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Yt = /^(?:GET|HEAD)$/,
        Jt = /^\/\//,
        Kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Vt = {},
        Qt = {},
        Zt = "*/".concat("*"),
        en = It.href,
        tn = Kt.exec(en.toLowerCase()) || [];
    pe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: en,
            type: "GET",
            isLocal: Xt.test(tn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON",
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": pe.parseJSON,
                "text xml": pe.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
            return t ? X(X(e, pe.ajaxSettings), t) : X(pe.ajaxSettings, e);
        },
        ajaxPrefilter: $(Vt),
        ajaxTransport: $(Qt),
        ajax: function (t, n) {
            function r(t, n, r, i) {
                var o,
                    d,
                    y,
                    b,
                    w,
                    C = n;
                2 !== x &&
                    ((x = 2),
                        u && e.clearTimeout(u),
                        (c = void 0),
                        (s = i || ""),
                        (A.readyState = t > 0 ? 4 : 0),
                        (o = (t >= 200 && 300 > t) || 304 === t),
                        r && (b = Y(f, A, r)),
                        (b = J(f, b, A, o)),
                        o
                            ? (f.ifModified &&
                                ((w = A.getResponseHeader("Last-Modified")),
                                    w && (pe.lastModified[a] = w),
                                    (w = A.getResponseHeader("etag")),
                                    w && (pe.etag[a] = w)),
                                204 === t || "HEAD" === f.type
                                    ? (C = "nocontent")
                                    : 304 === t
                                        ? (C = "notmodified")
                                        : ((C = b.state), (d = b.data), (y = b.error), (o = !y)))
                            : ((y = C), (t || !C) && ((C = "error"), 0 > t && (t = 0))),
                        (A.status = t),
                        (A.statusText = (n || C) + ""),
                        o ? m.resolveWith(p, [d, C, A]) : m.rejectWith(p, [A, C, y]),
                        A.statusCode(v),
                        (v = void 0),
                        l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [A, f, o ? d : y]),
                        g.fireWith(p, [A, C]),
                        l &&
                        (h.trigger("ajaxComplete", [A, f]),
                            --pe.active || pe.event.trigger("ajaxStop")));
            }
            "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
            var i,
                o,
                a,
                s,
                u,
                l,
                c,
                d,
                f = pe.ajaxSetup({}, n),
                p = f.context || f,
                h = f.context && (p.nodeType || p.jquery) ? pe(p) : pe.event,
                m = pe.Deferred(),
                g = pe.Callbacks("once memory"),
                v = f.statusCode || {},
                y = {},
                b = {},
                x = 0,
                w = "canceled",
                A = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (2 === x) {
                            if (!d)
                                for (d = {}; (t = Ut.exec(s));) d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()];
                        }
                        return null == t ? null : t;
                    },
                    getAllResponseHeaders: function () {
                        return 2 === x ? s : null;
                    },
                    setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return x || ((e = b[n] = b[n] || e), (y[e] = t)), this;
                    },
                    overrideMimeType: function (e) {
                        return x || (f.mimeType = e), this;
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (2 > x) for (t in e) v[t] = [v[t], e[t]];
                            else A.always(e[A.status]);
                        return this;
                    },
                    abort: function (e) {
                        var t = e || w;
                        return c && c.abort(t), r(0, t), this;
                    },
                };
            if (
                ((m.promise(A).complete = g.add),
                    (A.success = A.done),
                    (A.error = A.fail),
                    (f.url = ((t || f.url || en) + "")
                        .replace(Wt, "")
                        .replace(Jt, tn[1] + "//")),
                    (f.type = n.method || n.type || f.method || f.type),
                    (f.dataTypes = pe
                        .trim(f.dataType || "*")
                        .toLowerCase()
                        .match(Ne) || [""]),
                    null == f.crossDomain &&
                    ((i = Kt.exec(f.url.toLowerCase())),
                        (f.crossDomain = !(
                            !i ||
                            (i[1] === tn[1] &&
                                i[2] === tn[2] &&
                                (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                                (tn[3] || ("http:" === tn[1] ? "80" : "443")))
                        ))),
                    f.data &&
                    f.processData &&
                    "string" != typeof f.data &&
                    (f.data = pe.param(f.data, f.traditional)),
                    U(Vt, f, n, A),
                    2 === x)
            )
                return A;
            (l = pe.event && f.global),
                l && 0 === pe.active++ && pe.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !Yt.test(f.type)),
                (a = f.url),
                f.hasContent ||
                (f.data &&
                    ((a = f.url += (Bt.test(a) ? "&" : "?") + f.data), delete f.data),
                    f.cache === !1 &&
                    (f.url = $t.test(a)
                        ? a.replace($t, "$1_=" + Gt++)
                        : a + (Bt.test(a) ? "&" : "?") + "_=" + Gt++)),
                f.ifModified &&
                (pe.lastModified[a] &&
                    A.setRequestHeader("If-Modified-Since", pe.lastModified[a]),
                    pe.etag[a] && A.setRequestHeader("If-None-Match", pe.etag[a])),
                ((f.data && f.hasContent && f.contentType !== !1) || n.contentType) &&
                A.setRequestHeader("Content-Type", f.contentType),
                A.setRequestHeader(
                    "Accept",
                    f.dataTypes[0] && f.accepts[f.dataTypes[0]]
                        ? f.accepts[f.dataTypes[0]] +
                        ("*" !== f.dataTypes[0] ? ", " + Zt + "; q=0.01" : "")
                        : f.accepts["*"]
                );
            for (o in f.headers) A.setRequestHeader(o, f.headers[o]);
            if (f.beforeSend && (f.beforeSend.call(p, A, f) === !1 || 2 === x))
                return A.abort();
            w = "abort";
            for (o in { success: 1, error: 1, complete: 1 }) A[o](f[o]);
            if ((c = U(Qt, f, n, A))) {
                if (((A.readyState = 1), l && h.trigger("ajaxSend", [A, f]), 2 === x))
                    return A;
                f.async &&
                    f.timeout > 0 &&
                    (u = e.setTimeout(function () {
                        A.abort("timeout");
                    }, f.timeout));
                try {
                    (x = 1), c.send(y, r);
                } catch (C) {
                    if (!(2 > x)) throw C;
                    r(-1, C);
                }
            } else r(-1, "No Transport");
            return A;
        },
        getJSON: function (e, t, n) {
            return pe.get(e, t, n, "json");
        },
        getScript: function (e, t) {
            return pe.get(e, void 0, t, "script");
        },
    }),
        pe.each(["get", "post"], function (e, t) {
            pe[t] = function (e, n, r, i) {
                return (
                    pe.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
                    pe.ajax(
                        pe.extend(
                            { url: e, type: t, dataType: i, data: n, success: r },
                            pe.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        (pe._evalUrl = function (e) {
            return pe.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0,
            });
        }),
        pe.fn.extend({
            wrapAll: function (e) {
                if (pe.isFunction(e))
                    return this.each(function (t) {
                        pe(this).wrapAll(e.call(this, t));
                    });
                if (this[0]) {
                    var t = pe(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (
                                    var e = this;
                                    e.firstChild && 1 === e.firstChild.nodeType;

                                )
                                    e = e.firstChild;
                                return e;
                            })
                            .append(this);
                }
                return this;
            },
            wrapInner: function (e) {
                return pe.isFunction(e)
                    ? this.each(function (t) {
                        pe(this).wrapInner(e.call(this, t));
                    })
                    : this.each(function () {
                        var t = pe(this),
                            n = t.contents();
                        n.length ? n.wrapAll(e) : t.append(e);
                    });
            },
            wrap: function (e) {
                var t = pe.isFunction(e);
                return this.each(function (n) {
                    pe(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function () {
                return this.parent()
                    .each(function () {
                        pe.nodeName(this, "body") || pe(this).replaceWith(this.childNodes);
                    })
                    .end();
            },
        }),
        (pe.expr.filters.hidden = function (e) {
            return de.reliableHiddenOffsets()
                ? e.offsetWidth <= 0 &&
                e.offsetHeight <= 0 &&
                !e.getClientRects().length
                : V(e);
        }),
        (pe.expr.filters.visible = function (e) {
            return !pe.expr.filters.hidden(e);
        });
    var nn = /%20/g,
        rn = /\[\]$/,
        on = /\r?\n/g,
        an = /^(?:submit|button|image|reset|file)$/i,
        sn = /^(?:input|select|textarea|keygen)/i;
    (pe.param = function (e, t) {
        var n,
            r = [],
            i = function (e, t) {
                (t = pe.isFunction(t) ? t() : null == t ? "" : t),
                    (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
            };
        if (
            (void 0 === t && (t = pe.ajaxSettings && pe.ajaxSettings.traditional),
                pe.isArray(e) || (e.jquery && !pe.isPlainObject(e)))
        )
            pe.each(e, function () {
                i(this.name, this.value);
            });
        else for (n in e) Q(n, e[n], t, i);
        return r.join("&").replace(nn, "+");
    }),
        pe.fn.extend({
            serialize: function () {
                return pe.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = pe.prop(this, "elements");
                    return e ? pe.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !pe(this).is(":disabled") &&
                            sn.test(this.nodeName) &&
                            !an.test(e) &&
                            (this.checked || !Ie.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = pe(this).val();
                        return null == n
                            ? null
                            : pe.isArray(n)
                                ? pe.map(n, function (e) {
                                    return { name: t.name, value: e.replace(on, "\r\n") };
                                })
                                : { name: t.name, value: n.replace(on, "\r\n") };
                    })
                    .get();
            },
        }),
        (pe.ajaxSettings.xhr =
            void 0 !== e.ActiveXObject
                ? function () {
                    return this.isLocal
                        ? ee()
                        : re.documentMode > 8
                            ? Z()
                            : (/^(get|post|head|put|delete|options)$/i.test(this.type) &&
                                Z()) ||
                            ee();
                }
                : Z);
    var un = 0,
        ln = {},
        cn = pe.ajaxSettings.xhr();
    e.attachEvent &&
        e.attachEvent("onunload", function () {
            for (var e in ln) ln[e](void 0, !0);
        }),
        (de.cors = !!cn && "withCredentials" in cn),
        (cn = de.ajax = !!cn),
        cn &&
        pe.ajaxTransport(function (t) {
            if (!t.crossDomain || de.cors) {
                var n;
                return {
                    send: function (r, i) {
                        var o,
                            a = t.xhr(),
                            s = ++un;
                        if (
                            (a.open(t.type, t.url, t.async, t.username, t.password),
                                t.xhrFields)
                        )
                            for (o in t.xhrFields) a[o] = t.xhrFields[o];
                        t.mimeType &&
                            a.overrideMimeType &&
                            a.overrideMimeType(t.mimeType),
                            t.crossDomain ||
                            r["X-Requested-With"] ||
                            (r["X-Requested-With"] = "XMLHttpRequest");
                        for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                        a.send((t.hasContent && t.data) || null),
                            (n = function (e, r) {
                                var o, u, l;
                                if (n && (r || 4 === a.readyState))
                                    if (
                                        (delete ln[s],
                                            (n = void 0),
                                            (a.onreadystatechange = pe.noop),
                                            r)
                                    )
                                        4 !== a.readyState && a.abort();
                                    else {
                                        (l = {}),
                                            (o = a.status),
                                            "string" == typeof a.responseText &&
                                            (l.text = a.responseText);
                                        try {
                                            u = a.statusText;
                                        } catch (c) {
                                            u = "";
                                        }
                                        o || !t.isLocal || t.crossDomain
                                            ? 1223 === o && (o = 204)
                                            : (o = l.text ? 200 : 404);
                                    }
                                l && i(o, u, l, a.getAllResponseHeaders());
                            }),
                            t.async
                                ? 4 === a.readyState
                                    ? e.setTimeout(n)
                                    : (a.onreadystatechange = ln[s] = n)
                                : n();
                    },
                    abort: function () {
                        n && n(void 0, !0);
                    },
                };
            }
        }),
        pe.ajaxSetup({
            accepts: {
                script:
                    "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return pe.globalEval(e), e;
                },
            },
        }),
        pe.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && ((e.type = "GET"), (e.global = !1));
        }),
        pe.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t,
                    n = re.head || pe("head")[0] || re.documentElement;
                return {
                    send: function (r, i) {
                        (t = re.createElement("script")),
                            (t.async = !0),
                            e.scriptCharset && (t.charset = e.scriptCharset),
                            (t.src = e.url),
                            (t.onload = t.onreadystatechange =
                                function (e, n) {
                                    (n ||
                                        !t.readyState ||
                                        /loaded|complete/.test(t.readyState)) &&
                                        ((t.onload = t.onreadystatechange = null),
                                            t.parentNode && t.parentNode.removeChild(t),
                                            (t = null),
                                            n || i(200, "success"));
                                }),
                            n.insertBefore(t, n.firstChild);
                    },
                    abort: function () {
                        t && t.onload(void 0, !0);
                    },
                };
            }
        });
    var dn = [],
        fn = /(=)\?(?=&|$)|\?\?/;
    pe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = dn.pop() || pe.expando + "_" + Gt++;
            return (this[e] = !0), e;
        },
    }),
        pe.ajaxPrefilter("json jsonp", function (t, n, r) {
            var i,
                o,
                a,
                s =
                    t.jsonp !== !1 &&
                    (fn.test(t.url)
                        ? "url"
                        : "string" == typeof t.data &&
                        0 ===
                        (t.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        fn.test(t.data) &&
                        "data");
            return s || "jsonp" === t.dataTypes[0]
                ? ((i = t.jsonpCallback =
                    pe.isFunction(t.jsonpCallback)
                        ? t.jsonpCallback()
                        : t.jsonpCallback),
                    s
                        ? (t[s] = t[s].replace(fn, "$1" + i))
                        : t.jsonp !== !1 &&
                        (t.url += (Bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
                    (t.converters["script json"] = function () {
                        return a || pe.error(i + " was not called"), a[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = e[i]),
                    (e[i] = function () {
                        a = arguments;
                    }),
                    r.always(function () {
                        void 0 === o ? pe(e).removeProp(i) : (e[i] = o),
                            t[i] && ((t.jsonpCallback = n.jsonpCallback), dn.push(i)),
                            a && pe.isFunction(o) && o(a[0]),
                            (a = o = void 0);
                    }),
                    "script")
                : void 0;
        }),
        (pe.parseHTML = function (e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && ((n = t), (t = !1)), (t = t || re);
            var r = Ae.exec(e),
                i = !n && [];
            return r
                ? [t.createElement(r[1])]
                : ((r = v([e], t, i)),
                    i && i.length && pe(i).remove(),
                    pe.merge([], r.childNodes));
        });
    var pn = pe.fn.load;
    (pe.fn.load = function (e, t, n) {
        if ("string" != typeof e && pn) return pn.apply(this, arguments);
        var r,
            i,
            o,
            a = this,
            s = e.indexOf(" ");
        return (
            s > -1 && ((r = pe.trim(e.slice(s, e.length))), (e = e.slice(0, s))),
            pe.isFunction(t)
                ? ((n = t), (t = void 0))
                : t && "object" == typeof t && (i = "POST"),
            a.length > 0 &&
            pe
                .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                    (o = arguments),
                        a.html(r ? pe("<div>").append(pe.parseHTML(e)).find(r) : e);
                })
                .always(
                    n &&
                    function (e, t) {
                        a.each(function () {
                            n.apply(this, o || [e.responseText, t, e]);
                        });
                    }
                ),
            this
        );
    }),
        pe.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                pe.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        (pe.expr.filters.animated = function (e) {
            return pe.grep(pe.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (pe.offset = {
            setOffset: function (e, t, n) {
                var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l,
                    c = pe.css(e, "position"),
                    d = pe(e),
                    f = {};
                "static" === c && (e.style.position = "relative"),
                    (s = d.offset()),
                    (o = pe.css(e, "top")),
                    (u = pe.css(e, "left")),
                    (l =
                        ("absolute" === c || "fixed" === c) &&
                        pe.inArray("auto", [o, u]) > -1),
                    l
                        ? ((r = d.position()), (a = r.top), (i = r.left))
                        : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                    pe.isFunction(t) && (t = t.call(e, n, pe.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + i),
                    "using" in t ? t.using.call(e, f) : d.css(f);
            },
        }),
        pe.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                            pe.offset.setOffset(this, e, t);
                        });
                var t,
                    n,
                    r = { top: 0, left: 0 },
                    i = this[0],
                    o = i && i.ownerDocument;
                if (o)
                    return (
                        (t = o.documentElement),
                        pe.contains(t, i)
                            ? ("undefined" != typeof i.getBoundingClientRect &&
                                (r = i.getBoundingClientRect()),
                                (n = te(o)),
                            {
                                top:
                                    r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                                left:
                                    r.left +
                                    (n.pageXOffset || t.scrollLeft) -
                                    (t.clientLeft || 0),
                            })
                            : r
                    );
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n = { top: 0, left: 0 },
                        r = this[0];
                    return (
                        "fixed" === pe.css(r, "position")
                            ? (t = r.getBoundingClientRect())
                            : ((e = this.offsetParent()),
                                (t = this.offset()),
                                pe.nodeName(e[0], "html") || (n = e.offset()),
                                (n.top += pe.css(e[0], "borderTopWidth", !0)),
                                (n.left += pe.css(e[0], "borderLeftWidth", !0))),
                        {
                            top: t.top - n.top - pe.css(r, "marginTop", !0),
                            left: t.left - n.left - pe.css(r, "marginLeft", !0),
                        }
                    );
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (
                        var e = this.offsetParent;
                        e && !pe.nodeName(e, "html") && "static" === pe.css(e, "position");

                    )
                        e = e.offsetParent;
                    return e || pt;
                });
            },
        }),
        pe.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (e, t) {
                var n = /Y/.test(t);
                pe.fn[e] = function (r) {
                    return Re(
                        this,
                        function (e, r, i) {
                            var o = te(e);
                            return void 0 === i
                                ? o
                                    ? t in o
                                        ? o[t]
                                        : o.document.documentElement[r]
                                    : e[r]
                                : void (o
                                    ? o.scrollTo(
                                        n ? pe(o).scrollLeft() : i,
                                        n ? i : pe(o).scrollTop()
                                    )
                                    : (e[r] = i));
                        },
                        e,
                        r,
                        arguments.length,
                        null
                    );
                };
            }
        ),
        pe.each(["top", "left"], function (e, t) {
            pe.cssHooks[t] = L(de.pixelPosition, function (e, n) {
                return n
                    ? ((n = mt(e, t)), dt.test(n) ? pe(e).position()[t] + "px" : n)
                    : void 0;
            });
        }),
        pe.each({ Height: "height", Width: "width" }, function (e, t) {
            pe.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, r) {
                    pe.fn[r] = function (r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r),
                            a = n || (r === !0 || i === !0 ? "margin" : "border");
                        return Re(
                            this,
                            function (t, n, r) {
                                var i;
                                return pe.isWindow(t)
                                    ? t.document.documentElement["client" + e]
                                    : 9 === t.nodeType
                                        ? ((i = t.documentElement),
                                            Math.max(
                                                t.body["scroll" + e],
                                                i["scroll" + e],
                                                t.body["offset" + e],
                                                i["offset" + e],
                                                i["client" + e]
                                            ))
                                        : void 0 === r
                                            ? pe.css(t, n, a)
                                            : pe.style(t, n, r, a);
                            },
                            t,
                            o ? r : void 0,
                            o,
                            null
                        );
                    };
                }
            );
        }),
        pe.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, r) {
                return this.on(t, e, n, r);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
        }),
        (pe.fn.size = function () {
            return this.length;
        }),
        (pe.fn.andSelf = pe.fn.addBack),
        "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
            return pe;
        });
    var hn = e.jQuery,
        mn = e.$;
    return (
        (pe.noConflict = function (t) {
            return (
                e.$ === pe && (e.$ = mn), t && e.jQuery === pe && (e.jQuery = hn), pe
            );
        }),
        t || (e.jQuery = e.$ = pe),
        pe
    );
}),
    (function (e, t) {
        "use strict";
        e.rails !== t && e.error("jquery-ujs has already been loaded!");
        var n,
            r = e(document);
        (e.rails = n =
        {
            linkClickSelector:
                "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector:
                "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector:
                "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector:
                "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector:
                "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector:
                "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector:
                "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector:
                "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function () {
                return e("meta[name=csrf-token]").attr("content");
            },
            csrfParam: function () {
                return e("meta[name=csrf-param]").attr("content");
            },
            CSRFProtection: function (e) {
                var t = n.csrfToken();
                t && e.setRequestHeader("X-CSRF-Token", t);
            },
            refreshCSRFTokens: function () {
                e('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken());
            },
            fire: function (t, n, r) {
                var i = e.Event(n);
                return t.trigger(i, r), i.result !== !1;
            },
            confirm: function (e) {
                return confirm(e);
            },
            ajax: function (t) {
                return e.ajax(t);
            },
            href: function (e) {
                return e[0].href;
            },
            isRemote: function (e) {
                return e.data("remote") !== t && e.data("remote") !== !1;
            },
            handleRemote: function (r) {
                var i, o, a, s, u, l;
                if (n.fire(r, "ajax:before")) {
                    if (
                        ((s = r.data("with-credentials") || null),
                            (u =
                                r.data("type") || (e.ajaxSettings && e.ajaxSettings.dataType)),
                            r.is("form"))
                    ) {
                        (i = r.data("ujs:submit-button-formmethod") || r.attr("method")),
                            (o =
                                r.data("ujs:submit-button-formaction") || r.attr("action")),
                            (a = e(r[0]).serializeArray());
                        var c = r.data("ujs:submit-button");
                        c && (a.push(c), r.data("ujs:submit-button", null)),
                            r.data("ujs:submit-button-formmethod", null),
                            r.data("ujs:submit-button-formaction", null);
                    } else
                        r.is(n.inputChangeSelector)
                            ? ((i = r.data("method")),
                                (o = r.data("url")),
                                (a = r.serialize()),
                                r.data("params") && (a = a + "&" + r.data("params")))
                            : r.is(n.buttonClickSelector)
                                ? ((i = r.data("method") || "get"),
                                    (o = r.data("url")),
                                    (a = r.serialize()),
                                    r.data("params") && (a = a + "&" + r.data("params")))
                                : ((i = r.data("method")),
                                    (o = n.href(r)),
                                    (a = r.data("params") || null));
                    return (
                        (l = {
                            type: i || "GET",
                            data: a,
                            dataType: u,
                            beforeSend: function (e, i) {
                                return (
                                    i.dataType === t &&
                                    e.setRequestHeader(
                                        "accept",
                                        "*/*;q=0.5, " + i.accepts.script
                                    ),
                                    n.fire(r, "ajax:beforeSend", [e, i])
                                        ? void r.trigger("ajax:send", e)
                                        : !1
                                );
                            },
                            success: function (e, t, n) {
                                r.trigger("ajax:success", [e, t, n]);
                            },
                            complete: function (e, t) {
                                r.trigger("ajax:complete", [e, t]);
                            },
                            error: function (e, t, n) {
                                r.trigger("ajax:error", [e, t, n]);
                            },
                            crossDomain: n.isCrossDomain(o),
                        }),
                        s && (l.xhrFields = { withCredentials: s }),
                        o && (l.url = o),
                        n.ajax(l)
                    );
                }
                return !1;
            },
            isCrossDomain: function (e) {
                var t = document.createElement("a");
                t.href = location.href;
                var n = document.createElement("a");
                try {
                    return (
                        (n.href = e),
                        (n.href = n.href),
                        !(
                            ((!n.protocol || ":" === n.protocol) && !n.host) ||
                            t.protocol + "//" + t.host == n.protocol + "//" + n.host
                        )
                    );
                } catch (r) {
                    return !0;
                }
            },
            handleMethod: function (r) {
                var i = n.href(r),
                    o = r.data("method"),
                    a = r.attr("target"),
                    s = n.csrfToken(),
                    u = n.csrfParam(),
                    l = e('<form method="post" action="' + i + '"></form>'),
                    c = '<input name="_method" value="' + o + '" type="hidden" />';
                u === t ||
                    s === t ||
                    n.isCrossDomain(i) ||
                    (c += '<input name="' + u + '" value="' + s + '" type="hidden" />'),
                    a && l.attr("target", a),
                    l.hide().append(c).appendTo("body"),
                    l.submit();
            },
            formElements: function (t, n) {
                return t.is("form") ? e(t[0].elements).filter(n) : t.find(n);
            },
            disableFormElements: function (t) {
                n.formElements(t, n.disableSelector).each(function () {
                    n.disableFormElement(e(this));
                });
            },
            disableFormElement: function (e) {
                var n, r;
                (n = e.is("button") ? "html" : "val"),
                    (r = e.data("disable-with")),
                    r !== t && (e.data("ujs:enable-with", e[n]()), e[n](r)),
                    e.prop("disabled", !0),
                    e.data("ujs:disabled", !0);
            },
            enableFormElements: function (t) {
                n.formElements(t, n.enableSelector).each(function () {
                    n.enableFormElement(e(this));
                });
            },
            enableFormElement: function (e) {
                var n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") !== t &&
                    (e[n](e.data("ujs:enable-with")), e.removeData("ujs:enable-with")),
                    e.prop("disabled", !1),
                    e.removeData("ujs:disabled");
            },
            allowAction: function (e) {
                var t,
                    r = e.data("confirm"),
                    i = !1;
                if (!r) return !0;
                if (n.fire(e, "confirm")) {
                    try {
                        i = n.confirm(r);
                    } catch (o) {
                        (console.error || console.log).call(console, o.stack || o);
                    }
                    t = n.fire(e, "confirm:complete", [i]);
                }
                return i && t;
            },
            blankInputs: function (t, n, r) {
                var i,
                    o,
                    a,
                    s,
                    u = e(),
                    l = n || "input,textarea",
                    c = t.find(l),
                    d = {};
                return (
                    c.each(function () {
                        (i = e(this)),
                            i.is("input[type=radio]")
                                ? ((s = i.attr("name")),
                                    d[s] ||
                                    (0 ===
                                        t.find('input[type=radio]:checked[name="' + s + '"]')
                                            .length &&
                                        ((a = t.find('input[type=radio][name="' + s + '"]')),
                                            (u = u.add(a))),
                                        (d[s] = s)))
                                : ((o = i.is("input[type=checkbox],input[type=radio]")
                                    ? i.is(":checked")
                                    : !!i.val()),
                                    o === r && (u = u.add(i)));
                    }),
                    u.length ? u : !1
                );
            },
            nonBlankInputs: function (e, t) {
                return n.blankInputs(e, t, !0);
            },
            stopEverything: function (t) {
                return (
                    e(t.target).trigger("ujs:everythingStopped"),
                    t.stopImmediatePropagation(),
                    !1
                );
            },
            disableElement: function (e) {
                var r = e.data("disable-with");
                r !== t && (e.data("ujs:enable-with", e.html()), e.html(r)),
                    e.bind("click.railsDisable", function (e) {
                        return n.stopEverything(e);
                    }),
                    e.data("ujs:disabled", !0);
            },
            enableElement: function (e) {
                e.data("ujs:enable-with") !== t &&
                    (e.html(e.data("ujs:enable-with")),
                        e.removeData("ujs:enable-with")),
                    e.unbind("click.railsDisable"),
                    e.removeData("ujs:disabled");
            },
        }),
            n.fire(r, "rails:attachBindings") &&
            (e.ajaxPrefilter(function (e, t, r) {
                e.crossDomain || n.CSRFProtection(r);
            }),
                e(window).on("pageshow.rails", function () {
                    e(e.rails.enableSelector).each(function () {
                        var t = e(this);
                        t.data("ujs:disabled") && e.rails.enableFormElement(t);
                    }),
                        e(e.rails.linkDisableSelector).each(function () {
                            var t = e(this);
                            t.data("ujs:disabled") && e.rails.enableElement(t);
                        });
                }),
                r.on("ajax:complete", n.linkDisableSelector, function () {
                    n.enableElement(e(this));
                }),
                r.on("ajax:complete", n.buttonDisableSelector, function () {
                    n.enableFormElement(e(this));
                }),
                r.on("click.rails", n.linkClickSelector, function (t) {
                    var r = e(this),
                        i = r.data("method"),
                        o = r.data("params"),
                        a = t.metaKey || t.ctrlKey;
                    if (!n.allowAction(r)) return n.stopEverything(t);
                    if (
                        (!a && r.is(n.linkDisableSelector) && n.disableElement(r),
                            n.isRemote(r))
                    ) {
                        if (a && (!i || "GET" === i) && !o) return !0;
                        var s = n.handleRemote(r);
                        return (
                            s === !1
                                ? n.enableElement(r)
                                : s.fail(function () {
                                    n.enableElement(r);
                                }),
                            !1
                        );
                    }
                    return i ? (n.handleMethod(r), !1) : void 0;
                }),
                r.on("click.rails", n.buttonClickSelector, function (t) {
                    var r = e(this);
                    if (!n.allowAction(r) || !n.isRemote(r)) return n.stopEverything(t);
                    r.is(n.buttonDisableSelector) && n.disableFormElement(r);
                    var i = n.handleRemote(r);
                    return (
                        i === !1
                            ? n.enableFormElement(r)
                            : i.fail(function () {
                                n.enableFormElement(r);
                            }),
                        !1
                    );
                }),
                r.on("change.rails", n.inputChangeSelector, function (t) {
                    var r = e(this);
                    return n.allowAction(r) && n.isRemote(r)
                        ? (n.handleRemote(r), !1)
                        : n.stopEverything(t);
                }),
                r.on("submit.rails", n.formSubmitSelector, function (r) {
                    var i,
                        o,
                        a = e(this),
                        s = n.isRemote(a);
                    if (!n.allowAction(a)) return n.stopEverything(r);
                    if (a.attr("novalidate") === t)
                        if (a.data("ujs:formnovalidate-button") === t) {
                            if (
                                ((i = n.blankInputs(a, n.requiredInputSelector, !1)),
                                    i && n.fire(a, "ajax:aborted:required", [i]))
                            )
                                return n.stopEverything(r);
                        } else a.data("ujs:formnovalidate-button", t);
                    if (s) {
                        if ((o = n.nonBlankInputs(a, n.fileInputSelector))) {
                            setTimeout(function () {
                                n.disableFormElements(a);
                            }, 13);
                            var u = n.fire(a, "ajax:aborted:file", [o]);
                            return (
                                u ||
                                setTimeout(function () {
                                    n.enableFormElements(a);
                                }, 13),
                                u
                            );
                        }
                        return n.handleRemote(a), !1;
                    }
                    setTimeout(function () {
                        n.disableFormElements(a);
                    }, 13);
                }),
                r.on("click.rails", n.formInputClickSelector, function (t) {
                    var r = e(this);
                    if (!n.allowAction(r)) return n.stopEverything(t);
                    var i = r.attr("name"),
                        o = i ? { name: i, value: r.val() } : null,
                        a = r.closest("form");
                    0 === a.length && (a = e("#" + r.attr("form"))),
                        a.data("ujs:submit-button", o),
                        a.data("ujs:formnovalidate-button", r.attr("formnovalidate")),
                        a.data("ujs:submit-button-formaction", r.attr("formaction")),
                        a.data("ujs:submit-button-formmethod", r.attr("formmethod"));
                }),
                r.on("ajax:send.rails", n.formSubmitSelector, function (t) {
                    this === t.target && n.disableFormElements(e(this));
                }),
                r.on("ajax:complete.rails", n.formSubmitSelector, function (t) {
                    this === t.target && n.enableFormElements(e(this));
                }),
                e(function () {
                    n.refreshCSRFTokens();
                }));
    })(jQuery),
    (function (e) {
        var t = (function () {
            return (
                !1 === e.support.boxModel &&
                e.support.objectAll &&
                e.support.leadingWhitespace
            );
        })();
        (e.jGrowl = function (t, n) {
            0 === e("#jGrowl").size() &&
                e('<div id="jGrowl"></div>')
                    .addClass(n && n.position ? n.position : e.jGrowl.defaults.position)
                    .appendTo("body"),
                e("#jGrowl").jGrowl(t, n);
        }),
            (e.fn.jGrowl = function (t, n) {
                if (e.isFunction(this.each)) {
                    var r = arguments;
                    return this.each(function () {
                        void 0 === e(this).data("jGrowl.instance") &&
                            (e(this).data(
                                "jGrowl.instance",
                                e.extend(new e.fn.jGrowl(), {
                                    notifications: [],
                                    element: null,
                                    interval: null,
                                })
                            ),
                                e(this).data("jGrowl.instance").startup(this)),
                            e.isFunction(e(this).data("jGrowl.instance")[t])
                                ? e(this)
                                    .data("jGrowl.instance")
                                [t].apply(
                                    e(this).data("jGrowl.instance"),
                                    e.makeArray(r).slice(1)
                                )
                                : e(this).data("jGrowl.instance").create(t, n);
                    });
                }
            }),
            e.extend(e.fn.jGrowl.prototype, {
                defaults: {
                    pool: 0,
                    header: "",
                    group: "",
                    sticky: !1,
                    position: "top-right",
                    glue: "after",
                    theme: "default",
                    themeState: "highlight",
                    corners: "10px",
                    check: 250,
                    life: 3e3,
                    closeDuration: "normal",
                    openDuration: "normal",
                    easing: "swing",
                    closer: !0,
                    closeTemplate: "&times;",
                    closerTemplate: "<div>[ close all ]</div>",
                    log: function () { },
                    beforeOpen: function () { },
                    afterOpen: function () { },
                    open: function () { },
                    beforeClose: function () { },
                    close: function () { },
                    animateOpen: { opacity: "show" },
                    animateClose: { opacity: "hide" },
                },
                notifications: [],
                element: null,
                interval: null,
                create: function (t, n) {
                    var r = e.extend({}, this.defaults, n);
                    "undefined" != typeof r.speed &&
                        ((r.openDuration = r.speed), (r.closeDuration = r.speed)),
                        this.notifications.push({ message: t, options: r }),
                        r.log.apply(this.element, [this.element, t, r]);
                },
                render: function (t) {
                    var n = this,
                        r = t.message,
                        i = t.options;
                    i.themeState = "" === i.themeState ? "" : "ui-state-" + i.themeState;
                    var o = e("<div/>")
                        .addClass(
                            "jGrowl-notification " +
                            i.themeState +
                            " ui-corner-all" +
                            (void 0 !== i.group && "" !== i.group ? " " + i.group : "")
                        )
                        .append(e("<div/>").addClass("jGrowl-close").html(i.closeTemplate))
                        .append(e("<div/>").addClass("jGrowl-header").html(i.header))
                        .append(e("<div/>").addClass("jGrowl-message").html(r))
                        .data("jGrowl", i)
                        .addClass(i.theme)
                        .children("div.jGrowl-close")
                        .bind("click.jGrowl", function () {
                            e(this).parent().trigger("jGrowl.beforeClose");
                        })
                        .parent();
                    e(o)
                        .bind("mouseover.jGrowl", function () {
                            e("div.jGrowl-notification", n.element).data("jGrowl.pause", !0);
                        })
                        .bind("mouseout.jGrowl", function () {
                            e("div.jGrowl-notification", n.element).data("jGrowl.pause", !1);
                        })
                        .bind("jGrowl.beforeOpen", function () {
                            i.beforeOpen.apply(o, [o, r, i, n.element]) !== !1 &&
                                e(this).trigger("jGrowl.open");
                        })
                        .bind("jGrowl.open", function () {
                            i.open.apply(o, [o, r, i, n.element]) !== !1 &&
                                ("after" == i.glue
                                    ? e("div.jGrowl-notification:last", n.element).after(o)
                                    : e("div.jGrowl-notification:first", n.element).before(o),
                                    e(this).animate(
                                        i.animateOpen,
                                        i.openDuration,
                                        i.easing,
                                        function () {
                                            e.support.opacity === !1 &&
                                                this.style.removeAttribute("filter"),
                                                null !== e(this).data("jGrowl") &&
                                                (e(this).data("jGrowl").created = new Date()),
                                                e(this).trigger("jGrowl.afterOpen");
                                        }
                                    ));
                        })
                        .bind("jGrowl.afterOpen", function () {
                            i.afterOpen.apply(o, [o, r, i, n.element]);
                        })
                        .bind("jGrowl.beforeClose", function () {
                            i.beforeClose.apply(o, [o, r, i, n.element]) !== !1 &&
                                e(this).trigger("jGrowl.close");
                        })
                        .bind("jGrowl.close", function () {
                            e(this).data("jGrowl.pause", !0),
                                e(this).animate(
                                    i.animateClose,
                                    i.closeDuration,
                                    i.easing,
                                    function () {
                                        e.isFunction(i.close)
                                            ? i.close.apply(o, [o, r, i, n.element]) !== !1 &&
                                            e(this).remove()
                                            : e(this).remove();
                                    }
                                );
                        })
                        .trigger("jGrowl.beforeOpen"),
                        "" !== i.corners &&
                        void 0 !== e.fn.corner &&
                        e(o).corner(i.corners),
                        e("div.jGrowl-notification:parent", n.element).size() > 1 &&
                        0 === e("div.jGrowl-closer", n.element).size() &&
                        this.defaults.closer !== !1 &&
                        e(this.defaults.closerTemplate)
                            .addClass(
                                "jGrowl-closer " + this.defaults.themeState + " ui-corner-all"
                            )
                            .addClass(this.defaults.theme)
                            .appendTo(n.element)
                            .animate(
                                this.defaults.animateOpen,
                                this.defaults.speed,
                                this.defaults.easing
                            )
                            .bind("click.jGrowl", function () {
                                e(this).siblings().trigger("jGrowl.beforeClose"),
                                    e.isFunction(n.defaults.closer) &&
                                    n.defaults.closer.apply(e(this).parent()[0], [
                                        e(this).parent()[0],
                                    ]);
                            });
                },
                update: function () {
                    e(this.element)
                        .find("div.jGrowl-notification:parent")
                        .each(function () {
                            void 0 !== e(this).data("jGrowl") &&
                                void 0 !== e(this).data("jGrowl").created &&
                                e(this).data("jGrowl").created.getTime() +
                                parseInt(e(this).data("jGrowl").life, 10) <
                                new Date().getTime() &&
                                e(this).data("jGrowl").sticky !== !0 &&
                                (void 0 === e(this).data("jGrowl.pause") ||
                                    e(this).data("jGrowl.pause") !== !0) &&
                                e(this).trigger("jGrowl.beforeClose");
                        }),
                        this.notifications.length > 0 &&
                        (0 === this.defaults.pool ||
                            e(this.element).find("div.jGrowl-notification:parent").size() <
                            this.defaults.pool) &&
                        this.render(this.notifications.shift()),
                        e(this.element).find("div.jGrowl-notification:parent").size() < 2 &&
                        e(this.element)
                            .find("div.jGrowl-closer")
                            .animate(
                                this.defaults.animateClose,
                                this.defaults.speed,
                                this.defaults.easing,
                                function () {
                                    e(this).remove();
                                }
                            );
                },
                startup: function (n) {
                    (this.element = e(n)
                        .addClass("jGrowl")
                        .append('<div class="jGrowl-notification"></div>')),
                        (this.interval = setInterval(function () {
                            e(n).data("jGrowl.instance").update();
                        }, parseInt(this.defaults.check, 10))),
                        t && e(this.element).addClass("ie6");
                },
                shutdown: function () {
                    e(this.element)
                        .removeClass("jGrowl")
                        .find("div.jGrowl-notification")
                        .trigger("jGrowl.close")
                        .parent()
                        .empty(),
                        clearInterval(this.interval);
                },
                close: function () {
                    e(this.element)
                        .find("div.jGrowl-notification")
                        .each(function () {
                            e(this).trigger("jGrowl.beforeClose");
                        });
                },
            }),
            (e.jGrowl.defaults = e.fn.jGrowl.prototype.defaults);
    })(jQuery),
    (function (e) {
        "function" == typeof define && define.amd
            ? define(["jquery"], e)
            : e("object" == typeof exports ? require("jquery") : jQuery);
    })(function (e) {
        function t(e) {
            return s.raw ? e : encodeURIComponent(e);
        }
        function n(e) {
            return s.raw ? e : decodeURIComponent(e);
        }
        function r(e) {
            return t(s.json ? JSON.stringify(e) : String(e));
        }
        function i(e) {
            0 === e.indexOf('"') &&
                (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return (
                    (e = decodeURIComponent(e.replace(a, " "))),
                    s.json ? JSON.parse(e) : e
                );
            } catch (t) { }
        }
        function o(t, n) {
            var r = s.raw ? t : i(t);
            return e.isFunction(n) ? n(r) : r;
        }
        var a = /\+/g,
            s = (e.cookie = function (i, a, u) {
                if (arguments.length > 1 && !e.isFunction(a)) {
                    if (
                        ((u = e.extend({}, s.defaults, u)), "number" == typeof u.expires)
                    ) {
                        var l = u.expires,
                            c = (u.expires = new Date());
                        c.setTime(+c + 864e5 * l);
                    }
                    return (document.cookie = [
                        t(i),
                        "=",
                        r(a),
                        u.expires ? "; expires=" + u.expires.toUTCString() : "",
                        u.path ? "; path=" + u.path : "",
                        u.domain ? "; domain=" + u.domain : "",
                        u.SameSite ? "; SameSite=" + u.SameSite : "",
                        u.secure ? "; secure" : "",
                    ].join(""));
                }
                for (
                    var d = i ? void 0 : {},
                    f = document.cookie ? document.cookie.split("; ") : [],
                    p = 0,
                    h = f.length;
                    h > p;
                    p++
                ) {
                    var m = f[p].split("="),
                        g = n(m.shift()),
                        v = m.join("=");
                    if (i && i === g) {
                        d = o(v, a);
                        break;
                    }
                    i || void 0 === (v = o(v)) || (d[g] = v);
                }
                return d;
            });
        (s.defaults = {}),
            (e.removeCookie = function (t, n) {
                return void 0 === e.cookie(t)
                    ? !1
                    : (e.cookie(t, "", e.extend({}, n, { expires: -1 })), !e.cookie(t));
            });
    }),
    (function (e) {
        var t;
        if (
            ("function" == typeof define && define.amd && (define(e), (t = !0)),
                "object" == typeof exports && ((module.exports = e()), (t = !0)),
                !t)
        ) {
            var n = window.Cookies,
                r = (window.Cookies = e());
            r.noConflict = function () {
                return (window.Cookies = n), r;
            };
        }
    })(function () {
        function e() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) t[r] = n[r];
            }
            return t;
        }
        function t(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        function n(r) {
            function i() { }
            function o(t, n, o) {
                if ("undefined" != typeof document) {
                    (o = e({ path: "/" }, i.defaults, o)),
                        "number" == typeof o.expires &&
                        (o.expires = new Date(1 * new Date() + 864e5 * o.expires)),
                        (o.expires = o.expires ? o.expires.toUTCString() : "");
                    try {
                        var a = JSON.stringify(n);
                        /^[\{\[]/.test(a) && (n = a);
                    } catch (s) { }
                    (n = r.write
                        ? r.write(n, t)
                        : encodeURIComponent(String(n)).replace(
                            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                            decodeURIComponent
                        )),
                        (t = encodeURIComponent(String(t))
                            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                            .replace(/[\(\)]/g, escape));
                    var u = "";
                    for (var l in o)
                        o[l] &&
                            ((u += "; " + l), o[l] !== !0 && (u += "=" + o[l].split(";")[0]));
                    return (document.cookie = t + "=" + n + u);
                }
            }
            function a(e, n) {
                if ("undefined" != typeof document) {
                    for (
                        var i = {},
                        o = document.cookie ? document.cookie.split("; ") : [],
                        a = 0;
                        a < o.length;
                        a++
                    ) {
                        var s = o[a].split("="),
                            u = s.slice(1).join("=");
                        n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                        try {
                            var l = t(s[0]);
                            if (((u = (r.read || r)(u, l) || t(u)), n))
                                try {
                                    u = JSON.parse(u);
                                } catch (c) { }
                            if (((i[l] = u), e === l)) break;
                        } catch (c) { }
                    }
                    return e ? i[e] : i;
                }
            }
            return (
                (i.set = o),
                (i.get = function (e) {
                    return a(e, !1);
                }),
                (i.getJSON = function (e) {
                    return a(e, !0);
                }),
                (i.remove = function (t, n) {
                    o(t, "", e(n, { expires: -1 }));
                }),
                (i.defaults = {}),
                (i.withConverter = n),
                i
            );
        }
        return n(function () { });
    }),
    (function (e) {
        var t = (function () {
            "use strict";
            var e = "s",
                n = {
                    DAY: 864e5,
                    HOUR: 36e5,
                    MINUTE: 6e4,
                    SECOND: 1e3,
                    BASELINE_YEAR: 2014,
                    MAX_SCORE: 864e6,
                    AMBIGUITIES: {
                        "America/Denver": ["America/Mazatlan"],
                        "Europe/London": ["Africa/Casablanca"],
                        "America/Chicago": ["America/Mexico_City"],
                        "America/Asuncion": ["America/Campo_Grande", "America/Santiago"],
                        "America/Montevideo": ["America/Sao_Paulo", "America/Santiago"],
                        "Asia/Beirut": [
                            "Asia/Amman",
                            "Asia/Jerusalem",
                            "Europe/Helsinki",
                            "Asia/Damascus",
                            "Africa/Cairo",
                            "Asia/Gaza",
                            "Europe/Minsk",
                        ],
                        "Pacific/Auckland": ["Pacific/Fiji"],
                        "America/Los_Angeles": ["America/Santa_Isabel"],
                        "America/New_York": ["America/Havana"],
                        "America/Halifax": ["America/Goose_Bay"],
                        "America/Godthab": ["America/Miquelon"],
                        "Asia/Dubai": ["Asia/Yerevan"],
                        "Asia/Jakarta": ["Asia/Krasnoyarsk"],
                        "Asia/Shanghai": ["Asia/Irkutsk", "Australia/Perth"],
                        "Australia/Sydney": ["Australia/Lord_Howe"],
                        "Asia/Tokyo": ["Asia/Yakutsk"],
                        "Asia/Dhaka": ["Asia/Omsk"],
                        "Asia/Baku": ["Asia/Yerevan"],
                        "Australia/Brisbane": ["Asia/Vladivostok"],
                        "Pacific/Noumea": ["Asia/Vladivostok"],
                        "Pacific/Majuro": ["Asia/Kamchatka", "Pacific/Fiji"],
                        "Pacific/Tongatapu": ["Pacific/Apia"],
                        "Asia/Baghdad": ["Europe/Minsk", "Europe/Moscow"],
                        "Asia/Karachi": ["Asia/Yekaterinburg"],
                        "Africa/Johannesburg": ["Asia/Gaza", "Africa/Cairo"],
                    },
                },
                r = function (e) {
                    var t = -e.getTimezoneOffset();
                    return null !== t ? t : 0;
                },
                i = function () {
                    var t = r(new Date(n.BASELINE_YEAR, 0, 2)),
                        i = r(new Date(n.BASELINE_YEAR, 5, 2)),
                        o = t - i;
                    return 0 > o ? t + ",1" : o > 0 ? i + ",1," + e : t + ",0";
                },
                o = function (e) {
                    for (
                        var t = new Date(e, 0, 1, 0, 0, 1, 0).getTime(),
                        n = new Date(e, 12, 31, 23, 59, 59).getTime(),
                        r = t,
                        i = new Date(r).getTimezoneOffset(),
                        o = null,
                        s = null;
                        n - 864e5 > r;

                    ) {
                        var u = new Date(r),
                            l = u.getTimezoneOffset();
                        l !== i && (i > l && (o = u), l > i && (s = u), (i = l)),
                            (r += 864e5);
                    }
                    return o && s ? { s: a(o).getTime(), e: a(s).getTime() } : !1;
                },
                a = function d(e, t, r) {
                    "undefined" == typeof t && ((t = n.DAY), (r = n.HOUR));
                    for (
                        var i = new Date(e.getTime() - t).getTime(),
                        o = e.getTime() + t,
                        a = new Date(i).getTimezoneOffset(),
                        s = i,
                        u = null;
                        o - r > s;

                    ) {
                        var l = new Date(s),
                            c = l.getTimezoneOffset();
                        if (c !== a) {
                            u = l;
                            break;
                        }
                        s += r;
                    }
                    return t === n.DAY
                        ? d(u, n.HOUR, n.MINUTE)
                        : t === n.HOUR
                            ? d(u, n.MINUTE, n.SECOND)
                            : u;
                },
                s = function (e, t, n, r) {
                    if ("N/A" !== n) return n;
                    if ("Asia/Beirut" === t) {
                        if (
                            "Africa/Cairo" === r.name &&
                            13983768e5 === e[6].s &&
                            14116788e5 === e[6].e
                        )
                            return 0;
                        if (
                            "Asia/Jerusalem" === r.name &&
                            13959648e5 === e[6].s &&
                            14118588e5 === e[6].e
                        )
                            return 0;
                    } else if ("America/Santiago" === t) {
                        if (
                            "America/Asuncion" === r.name &&
                            14124816e5 === e[6].s &&
                            1397358e6 === e[6].e
                        )
                            return 0;
                        if (
                            "America/Campo_Grande" === r.name &&
                            14136912e5 === e[6].s &&
                            13925196e5 === e[6].e
                        )
                            return 0;
                    } else if ("America/Montevideo" === t) {
                        if (
                            "America/Sao_Paulo" === r.name &&
                            14136876e5 === e[6].s &&
                            1392516e6 === e[6].e
                        )
                            return 0;
                    } else if (
                        "Pacific/Auckland" === t &&
                        "Pacific/Fiji" === r.name &&
                        14142456e5 === e[6].s &&
                        13961016e5 === e[6].e
                    )
                        return 0;
                    return n;
                },
                u = function (e, r) {
                    for (
                        var i = function (t) {
                            for (var i = 0, o = 0; o < e.length; o++)
                                if (t.rules[o] && e[o]) {
                                    if (!(e[o].s >= t.rules[o].s && e[o].e <= t.rules[o].e)) {
                                        i = "N/A";
                                        break;
                                    }
                                    if (
                                        ((i = 0),
                                            (i += Math.abs(e[o].s - t.rules[o].s)),
                                            (i += Math.abs(t.rules[o].e - e[o].e)),
                                            i > n.MAX_SCORE)
                                    ) {
                                        i = "N/A";
                                        break;
                                    }
                                }
                            return (i = s(e, r, i, t));
                        },
                        o = {},
                        a = t.olson.dst_rules.zones,
                        u = a.length,
                        l = n.AMBIGUITIES[r],
                        c = 0;
                        u > c;
                        c++
                    ) {
                        var d = a[c],
                            f = i(a[c]);
                        "N/A" !== f && (o[d.name] = f);
                    }
                    for (var p in o)
                        if (o.hasOwnProperty(p))
                            for (var h = 0; h < l.length; h++) if (l[h] === p) return p;
                    return r;
                },
                l = function (e) {
                    var n = function () {
                        for (var e = [], n = 0; n < t.olson.dst_rules.years.length; n++) {
                            var r = o(t.olson.dst_rules.years[n]);
                            e.push(r);
                        }
                        return e;
                    },
                        r = function (e) {
                            for (var t = 0; t < e.length; t++) if (e[t] !== !1) return !0;
                            return !1;
                        },
                        i = n(),
                        a = r(i);
                    return a ? u(i, e) : e;
                },
                c = function () {
                    var e = !1;
                    return (
                        e ||
                        ((e = t.olson.timezones[i()]),
                            "undefined" != typeof n.AMBIGUITIES[e] && (e = l(e))),
                        {
                            name: function () {
                                return e;
                            },
                        }
                    );
                };
            return { determine: c };
        })();
        (t.olson = t.olson || {}),
            (t.olson.timezones = {
                "-720,0": "Etc/GMT+12",
                "-660,0": "Pacific/Pago_Pago",
                "-660,1,s": "Pacific/Apia",
                "-600,1": "America/Adak",
                "-600,0": "Pacific/Honolulu",
                "-570,0": "Pacific/Marquesas",
                "-540,0": "Pacific/Gambier",
                "-540,1": "America/Anchorage",
                "-480,1": "America/Los_Angeles",
                "-480,0": "Pacific/Pitcairn",
                "-420,0": "America/Phoenix",
                "-420,1": "America/Denver",
                "-360,0": "America/Guatemala",
                "-360,1": "America/Chicago",
                "-360,1,s": "Pacific/Easter",
                "-300,0": "America/Bogota",
                "-300,1": "America/New_York",
                "-270,0": "America/Caracas",
                "-240,1": "America/Halifax",
                "-240,0": "America/Santo_Domingo",
                "-240,1,s": "America/Asuncion",
                "-210,1": "America/St_Johns",
                "-180,1": "America/Godthab",
                "-180,0": "America/Argentina/Buenos_Aires",
                "-180,1,s": "America/Montevideo",
                "-120,0": "America/Noronha",
                "-120,1": "America/Noronha",
                "-60,1": "Atlantic/Azores",
                "-60,0": "Atlantic/Cape_Verde",
                "0,0": "UTC",
                "0,1": "Europe/London",
                "60,1": "Europe/Berlin",
                "60,0": "Africa/Lagos",
                "60,1,s": "Africa/Windhoek",
                "120,1": "Asia/Beirut",
                "120,0": "Africa/Johannesburg",
                "180,0": "Asia/Baghdad",
                "180,1": "Europe/Moscow",
                "210,1": "Asia/Tehran",
                "240,0": "Asia/Dubai",
                "240,1": "Asia/Baku",
                "270,0": "Asia/Kabul",
                "300,1": "Asia/Yekaterinburg",
                "300,0": "Asia/Karachi",
                "330,0": "Asia/Kolkata",
                "345,0": "Asia/Kathmandu",
                "360,0": "Asia/Dhaka",
                "360,1": "Asia/Omsk",
                "390,0": "Asia/Rangoon",
                "420,1": "Asia/Krasnoyarsk",
                "420,0": "Asia/Jakarta",
                "480,0": "Asia/Shanghai",
                "480,1": "Asia/Irkutsk",
                "525,0": "Australia/Eucla",
                "525,1,s": "Australia/Eucla",
                "540,1": "Asia/Yakutsk",
                "540,0": "Asia/Tokyo",
                "570,0": "Australia/Darwin",
                "570,1,s": "Australia/Adelaide",
                "600,0": "Australia/Brisbane",
                "600,1": "Asia/Vladivostok",
                "600,1,s": "Australia/Sydney",
                "630,1,s": "Australia/Lord_Howe",
                "660,1": "Asia/Kamchatka",
                "660,0": "Pacific/Noumea",
                "690,0": "Pacific/Norfolk",
                "720,1,s": "Pacific/Auckland",
                "720,0": "Pacific/Majuro",
                "765,1,s": "Pacific/Chatham",
                "780,0": "Pacific/Tongatapu",
                "780,1,s": "Pacific/Apia",
                "840,0": "Pacific/Kiritimati",
            }),
            (t.olson.dst_rules = {
                years: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                zones: [
                    {
                        name: "Africa/Cairo",
                        rules: [
                            { e: 12199572e5, s: 12090744e5 },
                            { e: 1250802e6, s: 1240524e6 },
                            { e: 12858804e5, s: 12840696e5 },
                            !1,
                            !1,
                            !1,
                            { e: 14116788e5, s: 1406844e6 },
                        ],
                    },
                    {
                        name: "Africa/Casablanca",
                        rules: [
                            { e: 12202236e5, s: 12122784e5 },
                            { e: 12508092e5, s: 12438144e5 },
                            { e: 1281222e6, s: 12727584e5 },
                            { e: 13120668e5, s: 13017888e5 },
                            { e: 13489704e5, s: 1345428e6 },
                            { e: 13828392e5, s: 13761e8 },
                            { e: 14142888e5, s: 14069448e5 },
                        ],
                    },
                    {
                        name: "America/Asuncion",
                        rules: [
                            { e: 12050316e5, s: 12243888e5 },
                            { e: 12364812e5, s: 12558384e5 },
                            { e: 12709548e5, s: 12860784e5 },
                            { e: 13024044e5, s: 1317528e6 },
                            { e: 1333854e6, s: 13495824e5 },
                            { e: 1364094e6, s: 1381032e6 },
                            { e: 13955436e5, s: 14124816e5 },
                        ],
                    },
                    {
                        name: "America/Campo_Grande",
                        rules: [
                            { e: 12032172e5, s: 12243888e5 },
                            { e: 12346668e5, s: 12558384e5 },
                            { e: 12667212e5, s: 1287288e6 },
                            { e: 12981708e5, s: 13187376e5 },
                            { e: 13302252e5, s: 1350792e6 },
                            { e: 136107e7, s: 13822416e5 },
                            { e: 13925196e5, s: 14136912e5 },
                        ],
                    },
                    {
                        name: "America/Goose_Bay",
                        rules: [
                            { e: 122559486e4, s: 120503526e4 },
                            { e: 125704446e4, s: 123648486e4 },
                            { e: 128909886e4, s: 126853926e4 },
                            { e: 13205556e5, s: 129998886e4 },
                            { e: 13520052e5, s: 13314456e5 },
                            { e: 13834548e5, s: 13628952e5 },
                            { e: 14149044e5, s: 13943448e5 },
                        ],
                    },
                    {
                        name: "America/Havana",
                        rules: [
                            { e: 12249972e5, s: 12056436e5 },
                            { e: 12564468e5, s: 12364884e5 },
                            { e: 12885012e5, s: 12685428e5 },
                            { e: 13211604e5, s: 13005972e5 },
                            { e: 13520052e5, s: 13332564e5 },
                            { e: 13834548e5, s: 13628916e5 },
                            { e: 14149044e5, s: 13943412e5 },
                        ],
                    },
                    {
                        name: "America/Mazatlan",
                        rules: [
                            { e: 1225008e6, s: 12074724e5 },
                            { e: 12564576e5, s: 1238922e6 },
                            { e: 1288512e6, s: 12703716e5 },
                            { e: 13199616e5, s: 13018212e5 },
                            { e: 13514112e5, s: 13332708e5 },
                            { e: 13828608e5, s: 13653252e5 },
                            { e: 14143104e5, s: 13967748e5 },
                        ],
                    },
                    {
                        name: "America/Mexico_City",
                        rules: [
                            { e: 12250044e5, s: 12074688e5 },
                            { e: 1256454e6, s: 12389184e5 },
                            { e: 12885084e5, s: 1270368e6 },
                            { e: 1319958e6, s: 13018176e5 },
                            { e: 13514076e5, s: 13332672e5 },
                            { e: 13828572e5, s: 13653216e5 },
                            { e: 14143068e5, s: 13967712e5 },
                        ],
                    },
                    {
                        name: "America/Miquelon",
                        rules: [
                            { e: 12255984e5, s: 12050388e5 },
                            { e: 1257048e6, s: 12364884e5 },
                            { e: 12891024e5, s: 12685428e5 },
                            { e: 1320552e6, s: 12999924e5 },
                            { e: 13520016e5, s: 1331442e6 },
                            { e: 13834512e5, s: 13628916e5 },
                            { e: 14149008e5, s: 13943412e5 },
                        ],
                    },
                    {
                        name: "America/Santa_Isabel",
                        rules: [
                            { e: 12250116e5, s: 1207476e6 },
                            { e: 12564612e5, s: 12389256e5 },
                            { e: 12885156e5, s: 12703752e5 },
                            { e: 13199652e5, s: 13018248e5 },
                            { e: 13514148e5, s: 13332744e5 },
                            { e: 13828644e5, s: 13653288e5 },
                            { e: 1414314e6, s: 13967784e5 },
                        ],
                    },
                    {
                        name: "America/Santiago",
                        rules: [
                            { e: 1206846e6, s: 1223784e6 },
                            { e: 1237086e6, s: 12552336e5 },
                            { e: 127035e7, s: 12866832e5 },
                            { e: 13048236e5, s: 13138992e5 },
                            { e: 13356684e5, s: 13465584e5 },
                            { e: 1367118e6, s: 13786128e5 },
                            { e: 13985676e5, s: 14100624e5 },
                        ],
                    },
                    {
                        name: "America/Sao_Paulo",
                        rules: [
                            { e: 12032136e5, s: 12243852e5 },
                            { e: 12346632e5, s: 12558348e5 },
                            { e: 12667176e5, s: 12872844e5 },
                            { e: 12981672e5, s: 1318734e6 },
                            { e: 13302216e5, s: 13507884e5 },
                            { e: 13610664e5, s: 1382238e6 },
                            { e: 1392516e6, s: 14136876e5 },
                        ],
                    },
                    {
                        name: "Asia/Amman",
                        rules: [
                            { e: 1225404e6, s: 12066552e5 },
                            { e: 12568536e5, s: 12381048e5 },
                            { e: 12883032e5, s: 12695544e5 },
                            { e: 13197528e5, s: 13016088e5 },
                            !1,
                            !1,
                            { e: 14147064e5, s: 13959576e5 },
                        ],
                    },
                    {
                        name: "Asia/Damascus",
                        rules: [
                            { e: 12254868e5, s: 120726e7 },
                            { e: 125685e7, s: 12381048e5 },
                            { e: 12882996e5, s: 12701592e5 },
                            { e: 13197492e5, s: 13016088e5 },
                            { e: 13511988e5, s: 13330584e5 },
                            { e: 13826484e5, s: 1364508e6 },
                            { e: 14147028e5, s: 13959576e5 },
                        ],
                    },
                    { name: "Asia/Dubai", rules: [!1, !1, !1, !1, !1, !1, !1] },
                    {
                        name: "Asia/Gaza",
                        rules: [
                            { e: 12199572e5, s: 12066552e5 },
                            { e: 12520152e5, s: 12381048e5 },
                            { e: 1281474e6, s: 126964086e4 },
                            { e: 1312146e6, s: 130160886e4 },
                            { e: 13481784e5, s: 13330584e5 },
                            { e: 13802292e5, s: 1364508e6 },
                            { e: 1414098e6, s: 13959576e5 },
                        ],
                    },
                    {
                        name: "Asia/Irkutsk",
                        rules: [
                            { e: 12249576e5, s: 12068136e5 },
                            { e: 12564072e5, s: 12382632e5 },
                            { e: 12884616e5, s: 12697128e5 },
                            !1,
                            !1,
                            !1,
                            !1,
                        ],
                    },
                    {
                        name: "Asia/Jerusalem",
                        rules: [
                            { e: 12231612e5, s: 12066624e5 },
                            { e: 1254006e6, s: 1238112e6 },
                            { e: 1284246e6, s: 12695616e5 },
                            { e: 131751e7, s: 1301616e6 },
                            { e: 13483548e5, s: 13330656e5 },
                            { e: 13828284e5, s: 13645152e5 },
                            { e: 1414278e6, s: 13959648e5 },
                        ],
                    },
                    {
                        name: "Asia/Kamchatka",
                        rules: [
                            { e: 12249432e5, s: 12067992e5 },
                            { e: 12563928e5, s: 12382488e5 },
                            { e: 12884508e5, s: 12696984e5 },
                            !1,
                            !1,
                            !1,
                            !1,
                        ],
                    },
                    {
                        name: "Asia/Krasnoyarsk",
                        rules: [
                            { e: 12249612e5, s: 12068172e5 },
                            { e: 12564108e5, s: 12382668e5 },
                            { e: 12884652e5, s: 12697164e5 },
                            !1,
                            !1,
                            !1,
                            !1,
                        ],
                    },
                    {
                        name: "Asia/Omsk",
                        rules: [
                            { e: 12249648e5, s: 12068208e5 },
                            { e: 12564144e5, s: 12382704e5 },
                            { e: 12884688e5, s: 126972e7 },
                            !1,
                            !1,
                            !1,
                            !1,
                        ],
                    },
                    {
                        name: "Asia/Vladivostok",
                        rules: [
                            { e: 12249504e5, s: 12068064e5 },
                            { e: 12564e8, s: 1238256e6 },
                            { e: 12884544e5, s: 12697056e5 },
                            !1,
                            !1,
                            !1,
                            !1,
                        ],
                    },
                    {
                        name: "Asia/Yakutsk",
                        rules: [
                            { e: 1224954e6, s: 120681e7 },
                            { e: 12564036e5, s: 12382596e5 },
                            { e: 1288458e6, s: 12697092e5 },
                            !1,
                            !1,
                            !1,
                            !1,
                        ],
                    },
                    {
                        name: "Asia/Yekaterinburg",
                        rules: [
                            { e: 12249684e5, s: 12068244e5 },
                            { e: 1256418e6, s: 1238274e6 },
                            { e: 12884724e5, s: 12697236e5 },
                            !1,
                            !1,
                            !1,
                            !1,
                        ],
                    },
                    {
                        name: "Asia/Yerevan",
                        rules: [
                            { e: 1224972e6, s: 1206828e6 },
                            { e: 12564216e5, s: 12382776e5 },
                            { e: 1288476e6, s: 12697272e5 },
                            { e: 13199256e5, s: 13011768e5 },
                            !1,
                            !1,
                            !1,
                        ],
                    },
                    {
                        name: "Australia/Lord_Howe",
                        rules: [
                            { e: 12074076e5, s: 12231342e5 },
                            { e: 12388572e5, s: 12545838e5 },
                            { e: 12703068e5, s: 12860334e5 },
                            { e: 13017564e5, s: 1317483e6 },
                            { e: 1333206e6, s: 13495374e5 },
                            { e: 13652604e5, s: 1380987e6 },
                            { e: 139671e7, s: 14124366e5 },
                        ],
                    },
                    {
                        name: "Australia/Perth",
                        rules: [{ e: 12068136e5, s: 12249576e5 }, !1, !1, !1, !1, !1, !1],
                    },
                    {
                        name: "Europe/Helsinki",
                        rules: [
                            { e: 12249828e5, s: 12068388e5 },
                            { e: 12564324e5, s: 12382884e5 },
                            { e: 12884868e5, s: 1269738e6 },
                            { e: 13199364e5, s: 13011876e5 },
                            { e: 1351386e6, s: 13326372e5 },
                            { e: 13828356e5, s: 13646916e5 },
                            { e: 14142852e5, s: 13961412e5 },
                        ],
                    },
                    {
                        name: "Europe/Minsk",
                        rules: [
                            { e: 12249792e5, s: 12068352e5 },
                            { e: 12564288e5, s: 12382848e5 },
                            { e: 12884832e5, s: 12697344e5 },
                            !1,
                            !1,
                            !1,
                            !1,
                        ],
                    },
                    {
                        name: "Europe/Moscow",
                        rules: [
                            { e: 12249756e5, s: 12068316e5 },
                            { e: 12564252e5, s: 12382812e5 },
                            { e: 12884796e5, s: 12697308e5 },
                            !1,
                            !1,
                            !1,
                            !1,
                        ],
                    },
                    {
                        name: "Pacific/Apia",
                        rules: [
                            !1,
                            !1,
                            !1,
                            { e: 13017528e5, s: 13168728e5 },
                            { e: 13332024e5, s: 13489272e5 },
                            { e: 13652568e5, s: 13803768e5 },
                            { e: 13967064e5, s: 14118264e5 },
                        ],
                    },
                    {
                        name: "Pacific/Fiji",
                        rules: [
                            !1,
                            !1,
                            { e: 12696984e5, s: 12878424e5 },
                            { e: 13271544e5, s: 1319292e6 },
                            { e: 1358604e6, s: 13507416e5 },
                            { e: 139005e7, s: 1382796e6 },
                            { e: 14215032e5, s: 14148504e5 },
                        ],
                    },
                    {
                        name: "Europe/London",
                        rules: [
                            { e: 12249828e5, s: 12068388e5 },
                            { e: 12564324e5, s: 12382884e5 },
                            { e: 12884868e5, s: 1269738e6 },
                            { e: 13199364e5, s: 13011876e5 },
                            { e: 1351386e6, s: 13326372e5 },
                            { e: 13828356e5, s: 13646916e5 },
                            { e: 14142852e5, s: 13961412e5 },
                        ],
                    },
                ],
            }),
            "undefined" != typeof module && "undefined" != typeof module.exports
                ? (module.exports = t)
                : "undefined" != typeof define && null !== define && null != define.amd
                    ? define([], function () {
                        return t;
                    })
                    : "undefined" == typeof e
                        ? (window.jstz = t)
                        : (e.jstz = t);
    })(),
    (function () {
        var e = (window.HubstaffAuth = window.HubstaffAuth || {}),
            t = "hubstaff_account_refresh",
            n = 864e5,
            r = 36e5,
            i = function () {
                Cookies.set(t, Date.now() + n, { SameSite: "Lax" });
            },
            o = function (e) {
                var n = Cookies.get(t);
                if ((void 0 === n && i(), Date.now() > parseInt(n))) {
                    i();
                    var r = new XMLHttpRequest();
                    r.open("GET", e.issuer + "/ping", !0),
                        (r.withCredentials = !0),
                        r.send(null);
                }
            };
        e.startKeepAlive = function (e) {
            void 0 !== e.issuer &&
                (o(e),
                    setInterval(function () {
                        o(e);
                    }, r));
        };
    })(),
    (function (e) {
        function t(e) {
            return e
                .map(function (e) {
                    return e + "[required]," + e + ".required";
                })
                .join(",");
        }
        function n(t) {
            t.find(".form-group").removeClass("has-error"),
                t.find(".form-group .help-block.error-message").remove();
            var n = t.find(i),
                r = n.filter(function () {
                    return "" === e.trim(this.value);
                }),
                a = t.find(o);
            a.each(function () {
                var t = e(this),
                    n = e('input[name="' + t.attr("name") + '"]');
                n.is(":checked") || r.push(this);
            }),
                r.length > 0
                    ? (e.rails.enableFormElements(t),
                        r.each(function () {
                            var t = e(this).closest(".form-group");
                            t.length > 0 &&
                                !t.hasClass("has-error") &&
                                (t.addClass("has-error"),
                                    t.append(
                                        e('<span class="help-block error-message"></span>').text(
                                            "is required"
                                        )
                                    ));
                        }))
                    : t.trigger("submit.rails");
        }
        function r(t, n, r) {
            var i;
            try {
                i = e.parseJSON(n.responseText);
            } catch (o) {
                i = { error: "An unexpected error occurred. Please try again." };
            }
            console.log("complete", i, t);
            var a = e(this);
            if ("errors" in i) {
                e.rails.enableFormElements(a);
                for (var s in i.errors)
                    a.find('*[name="user[' + s + ']"][type!="hidden"]').each(function () {
                        console.log("Setting error on ", this);
                        var t = e(this).closest(".form-group");
                        t.length > 0 &&
                            (t.addClass("has-error"),
                                t.append(
                                    e('<span class="help-block error-message"></span>').text(
                                        i.errors[s][0]
                                    )
                                ));
                    });
            } else if ("url" in i) {
                var u = a.data("hubstaff-signup-options");
                u && e.isFunction(u.onsubmitsuccess)
                    ? u.onsubmitsuccess(a, i, function () {
                        document.location = i.url;
                    })
                    : (document.location = i.url);
            } else
                "csrf" in i
                    ? (alert("Your session has expired. Please sign up again."),
                        document.location.reload(!0))
                    : "error" in i && alert(i.error);
        }
        var i = t(['input[type!="checkbox"][type!="radio"]', "textarea", "select"]),
            o = t(['input[type="checkbox"]', 'input[type="radio"]']),
            a = (window.HubstaffAuth = window.HubstaffAuth || {});
        a.signupForm = function (t, i) {
            var o;
            (i = i || {}),
                e(t).each(function () {
                    var t = e(this);
                    if (
                        (t.data("hubstaff-signup-options", i),
                            i.product &&
                            0 === t.find('*[name="hubstaff[product]"]').length &&
                            ((o = e('<input type="hidden"/>')),
                                o.attr("name", "hubstaff[product]"),
                                o.val(i.product),
                                t.append(o)),
                            i.extra)
                    )
                        for (var a in i.extra)
                            (o = e('<input type="hidden"/>')),
                                o.attr("name", "hubstaff[" + a + "]"),
                                o.val(i.extra[a]),
                                t.append(o);
                    if (
                        (0 === t.find('*[name="user[time_zone]"]').length &&
                            ((o = e('<input type="hidden"/>')),
                                o.attr("name", "user[time_zone]"),
                                o.val("UTC"),
                                t.append(o)),
                            void 0 !== jstz)
                    ) {
                        var s = jstz.determine();
                        t.find('*[name="user[time_zone]"]').val(s.name());
                    }
                    0 === t.find('*[name="user[terms]"]').length &&
                        ((o = e('<input type="hidden"/>')),
                            o.attr("name", "user[terms]"),
                            o.val("1"),
                            t.append(o)),
                        0 === t.find('*[name="user[password_confirmation]"]').length &&
                        ((o = e('<input type="hidden"/>')),
                            o.attr("name", "user[password_confirmation]"),
                            t.append(o),
                            t.on("ajax:before", function (e, n) {
                                var r = t.find('*[name="user[password]"]');
                                t.find('*[name="user[password_confirmation]"]').val(r.val());
                            })),
                        t.on("submit.signup", function (r) {
                            return (
                                e.rails.disableFormElements(t),
                                e.isFunction(i.onsubmit)
                                    ? i.onsubmit(t, function () {
                                        n(t);
                                    })
                                    : n(t),
                                r.preventDefault(),
                                r.stopPropagation(),
                                !1
                            );
                        }),
                        t.on("ajax:complete", r);
                });
        };
    })(jQuery),
    $(function (e) {
        e("body.signup-page").each(function () {
            var t = e('input[type="password"]'),
                n = e(".js-toggle-pass-visibility");
            n.on("click", function (e) {
                e.preventDefault(),
                    "password" == t.attr("type")
                        ? t.attr("type", "text")
                        : t.attr("type", "password"),
                    n.find("span").toggleClass("hide");
            });
        });
    });
