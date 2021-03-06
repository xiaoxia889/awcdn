(function() {
    var f = this;
    var k = /^true$/.test("false") ? !0 : !1;
    var p = function(a) {
        p[" "](a);
        return a
    };
    p[" "] = function() {};
    var q = function(a, b) {
        for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && b.call(void 0, a[d], d, a)
    };
    var t = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return a.replace(/^[\s ]+|[\s ]+$/g, "")
        },
        u = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var v;
    a: {
        var w = f.navigator;
        if (w) {
            var x = w.userAgent;
            if (x) {
                v = x;
                break a
            }
        }
        v = ""
    };
    var y = -1 != v.indexOf("Opera"),
        z = -1 != v.indexOf("Trident") || -1 != v.indexOf("MSIE"),
        A = -1 != v.indexOf("Edge"),
        B = -1 != v.indexOf("Gecko") && !(-1 != v.toLowerCase().indexOf("webkit") && -1 == v.indexOf("Edge")) && !(-1 != v.indexOf("Trident") || -1 != v.indexOf("MSIE")) && -1 == v.indexOf("Edge"),
        C = -1 != v.toLowerCase().indexOf("webkit") && -1 == v.indexOf("Edge"),
        E = function() {
            var a = f.document;
            return a ? a.documentMode : void 0
        },
        F;
    a: {
        var G = "",
            H = function() {
                var a = v;
                if (B) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (A) return /Edge\/([\d\.]+)/.exec(a);
                if (z) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (C) return /WebKit\/(\S+)/.exec(a);
                if (y) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();
        H && (G = H ? H[1] : "");
        if (z) {
            var I = E();
            if (null != I && I > parseFloat(G)) {
                F = String(I);
                break a
            }
        }
        F = G
    }
    var J = F,
        K = {},
        L = function(a) {
            if (!K[a]) {
                for (var b = 0, d = t(String(J)).split("."), c = t(String(a)).split("."), e = Math.max(d.length, c.length), g = 0; 0 == b && g < e; g++) {
                    var h = d[g] || "",
                        l = c[g] || "",
                        r = RegExp("(\\d*)(\\D*)", "g"),
                        D = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var m = r.exec(h) || ["", "", ""],
                            n = D.exec(l) || ["", "", ""];
                        if (0 == m[0].length && 0 == n[0].length) break;
                        b = u(0 == m[1].length ? 0 : parseInt(m[1], 10), 0 == n[1].length ? 0 : parseInt(n[1], 10)) || u(0 == m[2].length, 0 == n[2].length) || u(m[2], n[2])
                    } while (0 == b)
                }
                K[a] = 0 <= b
            }
        },
        M = f.document,
        N = M && z ? E() ||
        ("CSS1Compat" == M.compatMode ? parseInt(J, 10) : 5) : void 0;
    var O;
    if (!(O = !B && !z)) {
        var P;
        if (P = z) P = 9 <= Number(N);
        O = P
    }
    O || B && L("1.9.1");
    z && L("9");
    var aa = function() {
            this.b = {};
            this.a = {};
            for (var a = [1, 2, 3], b = 0, d = a.length; b < d; ++b) this.a[a[b]] = ""
        },
        ba = function() {
            var a = Q,
                b = [];
            q(a.b, function(a, c) {
                b.push(c)
            });
            q(a.a, function(a) {
                "" != a && b.push(a)
            });
            return b
        };
    var Q, R = "google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url".split(" ");

    function S(a) {
        if (null != a) {
            var b;
            Q ? (b = Q, b = b.a.hasOwnProperty(2) ? b.a[2] : "") : b = "";
            a = "3455583315" == b ? encodeURIComponent(a.toString()) : escape(a.toString())
        } else a = "";
        return a
    }

    function T(a) {
        return null != a ? a.toString().substring(0, 512) : ""
    }

    function U(a, b) {
        var d = S(b);
        if ("" != d) {
            var c = S(a);
            if ("" != c) return "&".concat(c, "=", d)
        }
        return ""
    }

    function V(a) {
        var b = typeof a;
        return null == a || "object" == b || "function" == b ? null : String(a).replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/=/g, "\\=")
    }

    function ca(a) {
        var b;
        if ((a = a.google_custom_params) && "object" == typeof a && "function" != typeof a.join) {
            var d = [];
            for (b in a)
                if (Object.prototype.hasOwnProperty.call(a, b)) {
                    var c = a[b];
                    if (c && "function" == typeof c.join) {
                        for (var e = [], g = 0; g < c.length; ++g) {
                            var h = V(c[g]);
                            null != h && e.push(h)
                        }
                        c = 0 == e.length ? null : e.join(",")
                    } else c = V(c);
                    (e = V(b)) && null != c && d.push(e + "=" + c)
                }
            b = d.join(";")
        } else b = "";
        return "" == b ? "" : "&".concat("data=", encodeURIComponent(b))
    }

    function da(a) {
        if (null != a) {
            a = a.toString();
            if (2 == a.length) return U("hl", a);
            if (5 == a.length) return U("hl", a.substring(0, 2)) + U("gl", a.substring(3, 5))
        }
        return ""
    }

    function W(a) {
        return "number" != typeof a && "string" != typeof a ? "" : S(a.toString())
    }

    function ea(a) {
        if (!a) return "";
        a = a.google_conversion_items;
        if (!a) return "";
        for (var b = [], d = 0, c = a.length; d < c; d++) {
            var e = a[d],
                g = [];
            e && (g.push(W(e.value)), g.push(W(e.quantity)), g.push(W(e.item_id)), g.push(W(e.adwords_grouping)), g.push(W(e.sku)), b.push("(" + g.join("*") + ")"))
        }
        return 0 < b.length ? "&item=" + b.join("") : ""
    }

    function fa(a, b, d) {
        var c = [];
        if (a) {
            var e = a.screen;
            e && (c.push(U("u_h", e.height)), c.push(U("u_w", e.width)), c.push(U("u_ah", e.availHeight)), c.push(U("u_aw", e.availWidth)), c.push(U("u_cd", e.colorDepth)));
            a.history && c.push(U("u_his", a.history.length))
        }
        d && "function" == typeof d.getTimezoneOffset && c.push(U("u_tz", -d.getTimezoneOffset()));
        b && ("function" == typeof b.javaEnabled && c.push(U("u_java", b.javaEnabled())), b.plugins && c.push(U("u_nplug", b.plugins.length)), b.mimeTypes && c.push(U("u_nmime", b.mimeTypes.length)));
        return c.join("")
    }

    function ga(a) {
        a = a ? a.title : "";
        if (void 0 == a || "" == a) return "";
        var b = function(a) {
            try {
                return decodeURIComponent(a), !0
            } catch (b) {
                return !1
            }
        };
        a = encodeURIComponent(a);
        for (var d = 128; !b(a.substr(0, d));) d--;
        return "&tiba=" + a.substr(0, d)
    }

    function X(a, b, d, c) {
        var e = "";
        if (b) {
            var g;
            if (a.top == a) g = 0;
            else {
                var h = a.location.ancestorOrigins;
                if (h) g = h[h.length - 1] == a.location.origin ? 1 : 2;
                else {
                    h = a.top;
                    try {
                        var l;
                        if (l = !!h && null != h.location.href) c: {
                            try {
                                p(h.foo);
                                l = !0;
                                break c
                            } catch (r) {}
                            l = !1
                        }
                        g = l
                    } catch (r) {
                        g = !1
                    }
                    g = g ? 1 : 2
                }
            }
            l = "";
            l = d ? d : 1 == g ? a.top.location.href : a.location.href;
            e += U("frm", g);
            e += U("url", T(l));
            e += U("ref", T(c || b.referrer))
        }
        return e
    }

    function Y(a) {
        return !k && !ha.test(navigator.userAgent) || a && a.location && a.location.protocol && "https:" == a.location.protocol.toString().toLowerCase() ? "https:" : "http:"
    }
    var ha = /Android ([01]\.|2\.[01])/i;

    function ia() {
        return new Image
    }

    function Z(a, b, d) {
        var c = ia;
        "function" === typeof a.opt_image_generator && (c = a.opt_image_generator);
        c = c();
        b += U("async", "1");
        c.src = b;
        c.onload = d && "function" === typeof a.onload_callback ? a.onload_callback : function() {}
    }

    function ja(a) {
        for (var b = window, d = {}, c = function(c) {
            d[c] = a && null != a[c] ? a[c] : b[c]
        }, e = 0; e < R.length; e++) c(R[e]);
        c("onload_callback");
        return d
    };
    window.google_trackConversion = function(a) {
        a = ja(a);
        a.google_conversion_format = 3;
        var b;
        var d = window,
            c = navigator,
            e = document,
            g = !1;
        if (a && 3 == a.google_conversion_format) {
            try {
                var h;
                "landing" == a.google_conversion_type || !a.google_conversion_id || a.google_remarketing_only && a.google_disable_viewthrough ? h = !1 : (a.google_conversion_date = new Date, a.google_conversion_time = a.google_conversion_date.getTime(), a.google_conversion_snippets = "number" == typeof a.google_conversion_snippets && 0 < a.google_conversion_snippets ? a.google_conversion_snippets +
                    1 : 1, "number" != typeof a.google_conversion_first_time && (a.google_conversion_first_time = a.google_conversion_time), a.google_conversion_js_version = "8", 0 != a.google_conversion_format && 1 != a.google_conversion_format && 2 != a.google_conversion_format && 3 != a.google_conversion_format && (a.google_conversion_format = 1), Q = new aa, h = !0);
                if (h) {
                    h = "/?";
                    "landing" == a.google_conversion_type && (h = "/extclk?");
                    var l, r = [a.google_remarketing_only ? "viewthroughconversion/" : "conversion/", S(a.google_conversion_id), h, "random=", S(a.google_conversion_time)].join(""),
                        D = a.google_remarketing_only ? "googleads.g.doubleclick.net" : a.google_conversion_domain || "www.googleadservices.com";
                    l = Y(d) + "//" + D + "/pagead/" + r;
                    var m;
                    m = [U("cv", a.google_conversion_js_version), U("fst", a.google_conversion_first_time), U("num", a.google_conversion_snippets), U("fmt", a.google_conversion_format), U("value", a.google_conversion_value), U("currency_code", a.google_conversion_currency), U("label", a.google_conversion_label), U("oid", a.google_conversion_order_id), U("bg", a.google_conversion_color), da(a.google_conversion_language),
                        U("guid", "ON"), U("disvt", a.google_disable_viewthrough), U("eid", ba().join()), ea(a), fa(d, c, a.google_conversion_date), ca(a), X(d, e, a.google_conversion_page_url, a.google_conversion_referrer_url), a.google_remarketing_for_search && !a.google_conversion_domain ? "&srr=n" : "", ga(e)
                    ].join("");
                    Z(a, l + m, !0);
                    if (a.google_remarketing_for_search && !a.google_conversion_domain) {
                        var n = Math.floor(1E9 * Math.random()),
                            ka, la = [S(a.google_conversion_id), "/?random=", n].join("");
                        m = ka = Y(d) + "//www.google.com/ads/user-lists/" + la;
                        b = [U("label",
                            a.google_conversion_label), U("fmt", "3"), X(d, e, a.google_conversion_page_url, a.google_conversion_referrer_url)].join("");
                        Z(a, m + b, !1)
                    }
                    g = !0
                }
            } catch (ma) {}
            b = g
        } else b = !1;
        return b
    };
}).call(this);