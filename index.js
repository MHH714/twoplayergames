!function() {
    var t = {
        237: function(t, e, n) {
            n(755)(window).on("gaPushEvent", (function(t, e) {
                window.dataLayer && dataLayer.push(e)
            }
            ))
        },
        831: function(t, e, n) {
            var i = n(755);
            function r(t, e) {
                return function(t) {
                    if (Array.isArray(t))
                        return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var i, r, o, s, a = [], l = !0, c = !1;
                        try {
                            if (o = (n = n.call(t)).next,
                            0 === e) {
                                if (Object(n) !== n)
                                    return;
                                l = !1
                            } else
                                for (; !(l = (i = o.call(n)).done) && (a.push(i.value),
                                a.length !== e); l = !0)
                                    ;
                        } catch (t) {
                            c = !0,
                            r = t
                        } finally {
                            try {
                                if (!l && null != n.return && (s = n.return(),
                                Object(s) !== s))
                                    return
                            } finally {
                                if (c)
                                    throw r
                            }
                        }
                        return a
                    }
                }(t, e) || function(t, e) {
                    if (!t)
                        return;
                    if ("string" == typeof t)
                        return o(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return o(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++)
                    i[n] = t[n];
                return i
            }
            !function() {
                function t() {
                    this.defaults = {
                        id: null,
                        slug: null,
                        title: null,
                        imageFile: null,
                        videoFile: null,
                        frame: null,
                        embed: null,
                        embedType: null,
                        url: null,
                        isExternal: null,
                        preAd: null,
                        rating: null,
                        isLoaded: !1,
                        isExpanded: !1,
                        inGameBox: null
                    },
                    this.opts = i.extend({}, this.defaults, window.gameData),
                    this.init()
                }
                t.prototype = {
                    init: function() {
                        for (var t = this, e = function() {
                            var e = r(i[n], 1)[0];
                            Object.defineProperty(t, e, {
                                get: function() {
                                    return t.opts[e]
                                },
                                set: function(n) {
                                    t.opts[e] = n
                                }
                            })
                        }, n = 0, i = Object.entries(t.opts); n < i.length; n++)
                            e()
                    },
                    getAsObject: function() {
                        for (var t = {}, e = arguments.length, n = new Array(e), i = 0; i < e; i++)
                            n[i] = arguments[i];
                        for (var r in n)
                            t[n[r]] = this.opts[n[r]];
                        return t
                    }
                },
                window.gameData = new t
            }()
        },
        506: function(t, e, n) {
            var i = n(755);
            !function() {
                function t() {
                    this.defaults = {
                        domain: null,
                        origin: {
                            desktop: null,
                            mobile: null,
                            files: null,
                            images: null,
                            assets: null
                        },
                        gamesDir: null
                    },
                    this.opts = i.extend({}, this.defaults, window.siteConfig),
                    this.init()
                }
                t.prototype = {
                    getDomain: function() {
                        return this.opts.domain
                    },
                    getOrigin: function(t) {
                        return this.opts.origin[t] || null
                    },
                    getPath: function(t, e) {
                        return "/" + [t, e].filter((function(t) {
                            return t
                        }
                        )).join("/")
                    },
                    getUrl: function(t, e) {
                        return [this.getOrigin(t), this.opts.gamesDir, e].filter((function(t) {
                            return t
                        }
                        )).join("/")
                    },
                    games: {
                        getOrigin: function() {
                            return this.parent.getOrigin("files")
                        },
                        getPath: function(t) {
                            return this.parent.getPath(this.parent.opts.gamesDir, t)
                        },
                        getUrl: function(t) {
                            return this.parent.getUrl("files", t)
                        }
                    },
                    images: {
                        getOrigin: function() {
                            return this.parent.getOrigin("images")
                        },
                        getPath: function(t) {
                            return this.parent.getPath(this.parent.opts.gamesDir, t)
                        },
                        getUrl: function(t) {
                            return this.parent.getUrl("images", t)
                        }
                    },
                    init: function() {
                        this.games.parent = this,
                        this.images.parent = this
                    }
                },
                window.siteConfig = new t
            }()
        },
        401: function(t, e, n) {
            var i = n(755);
            i((function() {
                var t, e, n = i(".site-left"), r = i(".left-ad"), o = i(".right-ad");
                function s() {
                    return Math.ceil((document.body.clientWidth - n.innerWidth()) / 2)
                }
                (t = function() {
                    0 !== r.length && r.css("max-width", s() + "px")
                }
                )(),
                (e = function() {
                    0 !== o.length && o.css("max-width", s() + "px")
                }
                )(),
                i(window).on("resizeEnd", (function() {
                    t(),
                    e()
                }
                )),
                i(window).resize((function() {
                    this.resizeTo && clearTimeout(this.resizeTo),
                    this.resizeTo = setTimeout((function() {
                        i(this).trigger("resizeEnd")
                    }
                    ), 20)
                }
                ))
            }
            ))
        },
        342: function(t, e, n) {
            var i = n(755);
            i((function() {
                var t;
                0 !== i(".game-page-social").length && (t = null === gameData.url ? encodeURI(window.location.href) : encodeURI(gameData.url),
                i("#facebookLike").html('<div class="fb-like" data-href="'.concat(t, '" data-width="" data-layout="button_count" data-action="like" data-size="small" data-share="false"></div>')),
                i("#twitterTweet").html('<a href="https://twitter.com/share" class="twitter-share-button" data-text="Check out this awesome game!" data-via="twoplayergames" data-hashtags="game" data-url="'.concat(t, '"></a>')),
                i.ajaxSetup({
                    cache: !0
                }),
                i.getScript("https://platform.twitter.com/widgets.js"),
                i.getScript("https://connect.facebook.net/en_US/sdk.js", (function() {
                    FB.init({
                        appId: "3081732188784982",
                        xfbml: 1,
                        autoLogAppEvents: !0,
                        version: "v15.0"
                    })
                }
                )))
            }
            ))
        },
        703: function(t, e, n) {
            var i = n(755);
            i.easing.jswing = i.easing.swing,
            i.extend(i.easing, {
                def: "easeOutCubic",
                easeOutCubic: function(t, e, n, i, r) {
                    return i * ((e = e / r - 1) * e * e + 1) + n
                },
                easeOutElastic: function(t, e, n, i, r) {
                    var o = 1.70158
                      , s = 0
                      , a = i;
                    if (0 == e)
                        return n;
                    if (1 == (e /= r))
                        return n + i;
                    if (s || (s = .3 * r),
                    a < Math.abs(i)) {
                        a = i;
                        o = s / 4
                    } else
                        o = s / (2 * Math.PI) * Math.asin(i / a);
                    return a * Math.pow(2, -10 * e) * Math.sin((e * r - o) * (2 * Math.PI) / s) + i + n
                },
                easeInOutCubic: function(t, e, n, i, r) {
                    return (e /= r / 2) < 1 ? i / 2 * e * e * e + n : i / 2 * ((e -= 2) * e * e + 2) + n
                }
            })
        },
        837: function(t, e, n) {
            !function(t) {
                function e(e, n) {
                    this.defaults = {
                        expandableItem: null,
                        expandableWidth: 100,
                        textExpand: t(e).data("text-expand") || "Expand the Game",
                        textShrink: t(e).data("text-shrink") || "Shrink the Game",
                        titleAttr: "title",
                        easing: null,
                        easingDuration: 350,
                        expandStep: function() {},
                        shrinkStep: function() {}
                    },
                    this.opts = t.extend({}, this.defaults, n),
                    this.$el = t(e),
                    this.expandElem = t(this.opts.expandableItem),
                    this.isExpanded = !1,
                    this.pending = !1
                }
                e.prototype = {
                    init: function() {
                        var t = this;
                        this.$el.attr(this.opts.titleAttr, this.opts.textExpand).on("click", (function(e) {
                            var n;
                            (e.preventDefault(),
                            t.pending) || (t.pending = !0,
                            t.isExpanded ? (n = t.opts.textExpand,
                            t.doShrink((function() {
                                t.pending = !1,
                                t.$el.trigger("shrink-done", [n])
                            }
                            ))) : (n = t.opts.textShrink,
                            t.doExpand((function() {
                                t.pending = !1,
                                t.$el.trigger("expand-done", [n])
                            }
                            ))),
                            t.$el.attr(t.opts.titleAttr, n),
                            t.isExpanded = !t.isExpanded)
                        }
                        )),
                        this.initialWidth = this.expandElem.width(),
                        this.initialHeight = this.expandElem.height(),
                        this.aspectRatio = this.initialWidth / this.initialHeight,
                        this.newWidth = this.initialWidth + this.opts.expandableWidth,
                        this.newHeight = this.newWidth / this.aspectRatio
                    },
                    doExpand: function(t) {
                        this.expandElem.stop().animate({
                            width: this.newWidth,
                            height: this.newHeight
                        }, {
                            easing: this.opts.easing,
                            duration: this.opts.easingDuration,
                            step: this.opts.expandStep,
                            done: t
                        })
                    },
                    doShrink: function(t) {
                        this.expandElem.stop().animate({
                            width: this.initialWidth,
                            height: this.initialHeight
                        }, {
                            easing: this.opts.easing,
                            duration: this.opts.easingDuration,
                            step: this.opts.shrinkStep,
                            done: t
                        })
                    }
                },
                t.fn.gameExpand = function(t) {
                    if (this.length) {
                        var n = new e(this,t);
                        return n.init(),
                        n.$el
                    }
                }
            }(n(755))
        },
        264: function(t, e, n) {
            var i, r, o;
            !function(s) {
                "use strict";
                r = [n(755)],
                i = function(t) {
                    var e = {
                        escapeRegExChars: function(t) {
                            return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                        },
                        createNode: function(t) {
                            var e = document.createElement("div");
                            return e.className = t,
                            e.style.position = "absolute",
                            e.style.display = "none",
                            e
                        }
                    }
                      , n = {
                        ESC: 27,
                        TAB: 9,
                        RETURN: 13,
                        LEFT: 37,
                        UP: 38,
                        RIGHT: 39,
                        DOWN: 40
                    };
                    function i(e, n) {
                        var r = t.noop
                          , o = this
                          , s = {
                            ajaxSettings: {},
                            autoSelectFirst: !1,
                            appendTo: document.body,
                            serviceUrl: null,
                            lookup: null,
                            onSelect: null,
                            width: "auto",
                            minChars: 1,
                            maxHeight: 300,
                            deferRequestBy: 0,
                            params: {},
                            formatResult: i.formatResult,
                            delimiter: null,
                            zIndex: 9999,
                            type: "GET",
                            noCache: !1,
                            onSearchStart: r,
                            onSearchComplete: r,
                            onSearchError: r,
                            preserveInput: !1,
                            containerClass: "autocomplete-suggestions",
                            tabDisabled: !1,
                            dataType: "text",
                            currentRequest: null,
                            triggerSelectOnValidInput: !0,
                            preventBadQueries: !0,
                            lookupFilter: function(t, e, n) {
                                return -1 !== t.value.toLowerCase().indexOf(n)
                            },
                            paramName: "query",
                            transformResult: function(e) {
                                return "string" == typeof e ? t.parseJSON(e) : e
                            },
                            showNoSuggestionNotice: !1,
                            noSuggestionNotice: "No results",
                            orientation: "bottom",
                            forceFixPosition: !1
                        };
                        o.element = e,
                        o.el = t(e),
                        o.suggestions = [],
                        o.badQueries = [],
                        o.selectedIndex = -1,
                        o.currentValue = o.element.value,
                        o.intervalId = 0,
                        o.cachedResponse = {},
                        o.onChangeInterval = null,
                        o.onChange = null,
                        o.isLocal = !1,
                        o.suggestionsContainer = null,
                        o.noSuggestionsContainer = null,
                        o.options = t.extend({}, s, n),
                        o.classes = {
                            selected: "autocomplete-selected",
                            suggestion: "autocomplete-suggestion"
                        },
                        o.hint = null,
                        o.hintValue = "",
                        o.selection = null,
                        o.initialize(),
                        o.setOptions(n)
                    }
                    i.utils = e,
                    t.Autocomplete = i,
                    i.formatResult = function(t, n) {
                        if (!n)
                            return t.value;
                        var i = "(" + e.escapeRegExChars(n) + ")";
                        return t.value.replace(new RegExp(i,"gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
                    }
                    ,
                    i.prototype = {
                        killerFn: null,
                        initialize: function() {
                            var e, n = this, r = "." + n.classes.suggestion, o = n.classes.selected, s = n.options;
                            n.element.setAttribute("autocomplete", "off"),
                            n.killerFn = function(e) {
                                t(e.target).closest("." + n.options.containerClass).length || (n.killSuggestions(),
                                n.disableKillerFn())
                            }
                            ,
                            n.noSuggestionsContainer = t('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),
                            n.suggestionsContainer = i.utils.createNode(s.containerClass),
                            (e = t(n.suggestionsContainer)).appendTo(s.appendTo),
                            "auto" !== s.width && e.css("width", s.width),
                            e.on("mouseover.autocomplete", r, (function() {
                                n.activate(t(this).data("index"))
                            }
                            )),
                            e.on("mouseout.autocomplete", (function() {
                                n.selectedIndex = -1,
                                e.children("." + o).removeClass(o)
                            }
                            )),
                            e.on("click.autocomplete", r, (function() {
                                return n.select(t(this).data("index")),
                                !1
                            }
                            )),
                            n.fixPositionCapture = function() {
                                n.visible && n.fixPosition()
                            }
                            ,
                            t(window).on("resize.autocomplete", n.fixPositionCapture),
                            n.el.on("keydown.autocomplete", (function(t) {
                                n.onKeyPress(t)
                            }
                            )),
                            n.el.on("keyup.autocomplete", (function(t) {
                                n.onKeyUp(t)
                            }
                            )),
                            n.el.on("blur.autocomplete", (function() {
                                n.onBlur()
                            }
                            )),
                            n.el.on("focus.autocomplete", (function() {
                                n.onFocus()
                            }
                            )),
                            n.el.on("change.autocomplete", (function(t) {
                                n.onKeyUp(t)
                            }
                            )),
                            n.el.on("input.autocomplete", (function(t) {
                                n.onKeyUp(t)
                            }
                            ))
                        },
                        onFocus: function() {
                            var t = this;
                            t.fixPosition(),
                            t.el.val().length >= t.options.minChars && t.onValueChange()
                        },
                        onBlur: function() {
                            this.enableKillerFn()
                        },
                        abortAjax: function() {
                            var t = this;
                            t.currentRequest && (t.currentRequest.abort(),
                            t.currentRequest = null)
                        },
                        setOptions: function(e) {
                            var n = this
                              , i = n.options;
                            t.extend(i, e),
                            n.isLocal = t.isArray(i.lookup),
                            n.isLocal && (i.lookup = n.verifySuggestionsFormat(i.lookup)),
                            i.orientation = n.validateOrientation(i.orientation, "bottom"),
                            t(n.suggestionsContainer).css({
                                "max-height": i.maxHeight + "px",
                                width: i.width + "px",
                                "z-index": i.zIndex
                            })
                        },
                        clearCache: function() {
                            this.cachedResponse = {},
                            this.badQueries = []
                        },
                        clear: function() {
                            this.clearCache(),
                            this.currentValue = "",
                            this.suggestions = []
                        },
                        disable: function() {
                            var t = this;
                            t.disabled = !0,
                            clearInterval(t.onChangeInterval),
                            t.abortAjax()
                        },
                        enable: function() {
                            this.disabled = !1
                        },
                        fixPosition: function() {
                            var e = this
                              , n = t(e.suggestionsContainer)
                              , i = n.parent().get(0);
                            if (i === document.body || e.options.forceFixPosition) {
                                var r = e.options.orientation
                                  , o = n.outerHeight()
                                  , s = e.el.outerHeight()
                                  , a = e.el.offset()
                                  , l = {
                                    top: a.top,
                                    left: a.left
                                };
                                if ("auto" === r) {
                                    var c = t(window).height()
                                      , u = t(window).scrollTop()
                                      , h = -u + a.top - o
                                      , d = u + c - (a.top + s + o);
                                    r = Math.max(h, d) === h ? "top" : "bottom"
                                }
                                if (l.top += "top" === r ? -o : s,
                                i !== document.body) {
                                    var f, p = n.css("opacity");
                                    e.visible || n.css("opacity", 0).show(),
                                    f = n.offsetParent().offset(),
                                    l.top -= f.top,
                                    l.left -= f.left,
                                    e.visible || n.css("opacity", p).hide()
                                }
                                "auto" === e.options.width && (l.width = e.el.outerWidth() + "px"),
                                n.css(l)
                            }
                        },
                        enableKillerFn: function() {
                            var e = this;
                            t(document).on("click.autocomplete", e.killerFn)
                        },
                        disableKillerFn: function() {
                            var e = this;
                            t(document).off("click.autocomplete", e.killerFn)
                        },
                        killSuggestions: function() {
                            var t = this;
                            t.stopKillSuggestions(),
                            t.intervalId = window.setInterval((function() {
                                t.visible && (t.options.preserveInput || t.el.val(t.currentValue),
                                t.hide()),
                                t.stopKillSuggestions()
                            }
                            ), 50)
                        },
                        stopKillSuggestions: function() {
                            window.clearInterval(this.intervalId)
                        },
                        isCursorAtEnd: function() {
                            var t, e = this, n = e.el.val().length, i = e.element.selectionStart;
                            return "number" == typeof i ? i === n : !document.selection || ((t = document.selection.createRange()).moveStart("character", -n),
                            n === t.text.length)
                        },
                        onKeyPress: function(t) {
                            var e = this;
                            if (e.disabled || e.visible || t.which !== n.DOWN || !e.currentValue) {
                                if (!e.disabled && e.visible) {
                                    switch (t.which) {
                                    case n.ESC:
                                        e.el.val(e.currentValue),
                                        e.hide();
                                        break;
                                    case n.RIGHT:
                                        if (e.hint && e.options.onHint && e.isCursorAtEnd()) {
                                            e.selectHint();
                                            break
                                        }
                                        return;
                                    case n.TAB:
                                        if (e.hint && e.options.onHint)
                                            return void e.selectHint();
                                        if (-1 === e.selectedIndex)
                                            return void e.hide();
                                        if (e.select(e.selectedIndex),
                                        !1 === e.options.tabDisabled)
                                            return;
                                        break;
                                    case n.RETURN:
                                        if (-1 === e.selectedIndex)
                                            return void e.hide();
                                        e.select(e.selectedIndex);
                                        break;
                                    case n.UP:
                                        e.moveUp();
                                        break;
                                    case n.DOWN:
                                        e.moveDown();
                                        break;
                                    default:
                                        return
                                    }
                                    t.stopImmediatePropagation(),
                                    t.preventDefault()
                                }
                            } else
                                e.suggest()
                        },
                        onKeyUp: function(t) {
                            var e = this;
                            if (!e.disabled) {
                                switch (t.which) {
                                case n.UP:
                                case n.DOWN:
                                    return
                                }
                                clearInterval(e.onChangeInterval),
                                e.currentValue !== e.el.val() && (e.findBestHint(),
                                e.options.deferRequestBy > 0 ? e.onChangeInterval = setInterval((function() {
                                    e.onValueChange()
                                }
                                ), e.options.deferRequestBy) : e.onValueChange())
                            }
                        },
                        onValueChange: function() {
                            var e = this
                              , n = e.options
                              , i = e.el.val()
                              , r = e.getQuery(i);
                            e.selection && e.currentValue !== r && (e.selection = null,
                            (n.onInvalidateSelection || t.noop).call(e.element)),
                            clearInterval(e.onChangeInterval),
                            e.currentValue = i,
                            e.selectedIndex = -1,
                            n.triggerSelectOnValidInput && e.isExactMatch(r) ? e.select(0) : r.length < n.minChars ? e.hide() : e.getSuggestions(r)
                        },
                        isExactMatch: function(t) {
                            var e = this.suggestions;
                            return 1 === e.length && e[0].value.toLowerCase() === t.toLowerCase()
                        },
                        getQuery: function(e) {
                            var n, i = this.options.delimiter;
                            return i ? (n = e.split(i),
                            t.trim(n[n.length - 1])) : e
                        },
                        getSuggestionsLocal: function(e) {
                            var n, i = this.options, r = e.toLowerCase(), o = i.lookupFilter, s = parseInt(i.lookupLimit, 10);
                            return n = {
                                suggestions: t.grep(i.lookup, (function(t) {
                                    return o(t, e, r)
                                }
                                ))
                            },
                            s && n.suggestions.length > s && (n.suggestions = n.suggestions.slice(0, s)),
                            n
                        },
                        getSuggestions: function(e) {
                            var n, i, r, o, s = this, a = s.options, l = a.serviceUrl;
                            a.params[a.paramName] = e,
                            i = a.ignoreParams ? null : a.params,
                            !1 !== a.onSearchStart.call(s.element, a.params) && (t.isFunction(a.lookup) ? a.lookup(e, (function(t) {
                                s.suggestions = t.suggestions,
                                s.suggest(),
                                a.onSearchComplete.call(s.element, e, t.suggestions)
                            }
                            )) : (s.isLocal ? n = s.getSuggestionsLocal(e) : (t.isFunction(l) && (l = l.call(s.element, e)),
                            r = l + "?" + t.param(i || {}),
                            n = s.cachedResponse[r]),
                            n && t.isArray(n.suggestions) ? (s.suggestions = n.suggestions,
                            s.suggest(),
                            a.onSearchComplete.call(s.element, e, n.suggestions)) : s.isBadQuery(e) ? a.onSearchComplete.call(s.element, e, []) : (s.abortAjax(),
                            o = {
                                url: l,
                                data: i,
                                type: a.type,
                                dataType: a.dataType
                            },
                            t.extend(o, a.ajaxSettings),
                            s.currentRequest = t.ajax(o).done((function(t) {
                                var n;
                                s.currentRequest = null,
                                n = a.transformResult(t, e),
                                s.processResponse(n, e, r),
                                a.onSearchComplete.call(s.element, e, n.suggestions)
                            }
                            )).fail((function(t, n, i) {
                                a.onSearchError.call(s.element, e, t, n, i)
                            }
                            )))))
                        },
                        isBadQuery: function(t) {
                            if (!this.options.preventBadQueries)
                                return !1;
                            for (var e = this.badQueries, n = e.length; n--; )
                                if (0 === t.indexOf(e[n]))
                                    return !0;
                            return !1
                        },
                        hide: function() {
                            var e = this
                              , n = t(e.suggestionsContainer);
                            t.isFunction(e.options.onHide) && e.visible && e.options.onHide.call(e.element, n),
                            e.visible = !1,
                            e.selectedIndex = -1,
                            clearInterval(e.onChangeInterval),
                            t(e.suggestionsContainer).hide(),
                            e.signalHint(null)
                        },
                        suggest: function() {
                            if (this.suggestions.length) {
                                var e, n = this, i = n.options, r = i.groupBy, o = i.formatResult, s = n.getQuery(n.currentValue), a = n.classes.suggestion, l = n.classes.selected, c = t(n.suggestionsContainer), u = t(n.noSuggestionsContainer), h = i.beforeRender, d = "", f = function(t, n) {
                                    var i = t.data[r];
                                    return e === i ? "" : '<div class="autocomplete-group"><strong>' + (e = i) + "</strong></div>"
                                };
                                i.triggerSelectOnValidInput && n.isExactMatch(s) ? n.select(0) : (t.each(n.suggestions, (function(t, e) {
                                    r && (d += f(e, s, t)),
                                    d += '<div class="' + a + '" data-index="' + t + '">' + o(e, s, t) + "</div>"
                                }
                                )),
                                this.adjustContainerWidth(),
                                u.detach(),
                                c.html(d),
                                t.isFunction(h) && h.call(n.element, c, n.suggestions),
                                n.fixPosition(),
                                c.show(),
                                i.autoSelectFirst && (n.selectedIndex = 0,
                                c.scrollTop(0),
                                c.children("." + a).first().addClass(l)),
                                n.visible = !0,
                                n.findBestHint())
                            } else
                                this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide()
                        },
                        noSuggestions: function() {
                            var e = this
                              , n = t(e.suggestionsContainer)
                              , i = t(e.noSuggestionsContainer);
                            this.adjustContainerWidth(),
                            i.detach(),
                            n.empty(),
                            n.append(i),
                            e.fixPosition(),
                            n.show(),
                            e.visible = !0
                        },
                        adjustContainerWidth: function() {
                            var e, n = this, i = n.options, r = t(n.suggestionsContainer);
                            "auto" === i.width && (e = n.el.outerWidth(),
                            r.css("width", e > 0 ? e : 300))
                        },
                        findBestHint: function() {
                            var e = this
                              , n = e.el.val().toLowerCase()
                              , i = null;
                            n && (t.each(e.suggestions, (function(t, e) {
                                var r = 0 === e.value.toLowerCase().indexOf(n);
                                return r && (i = e),
                                !r
                            }
                            )),
                            e.signalHint(i))
                        },
                        signalHint: function(e) {
                            var n = ""
                              , i = this;
                            e && (n = i.currentValue + e.value.substr(i.currentValue.length)),
                            i.hintValue !== n && (i.hintValue = n,
                            i.hint = e,
                            (this.options.onHint || t.noop)(n))
                        },
                        verifySuggestionsFormat: function(e) {
                            return e.length && "string" == typeof e[0] ? t.map(e, (function(t) {
                                return {
                                    value: t,
                                    data: null
                                }
                            }
                            )) : e
                        },
                        validateOrientation: function(e, n) {
                            return e = t.trim(e || "").toLowerCase(),
                            -1 === t.inArray(e, ["auto", "bottom", "top"]) && (e = n),
                            e
                        },
                        processResponse: function(t, e, n) {
                            var i = this
                              , r = i.options;
                            t.suggestions = i.verifySuggestionsFormat(t.suggestions),
                            r.noCache || (i.cachedResponse[n] = t,
                            r.preventBadQueries && !t.suggestions.length && i.badQueries.push(e)),
                            e === i.getQuery(i.currentValue) && (i.suggestions = t.suggestions,
                            i.suggest())
                        },
                        activate: function(e) {
                            var n, i = this, r = i.classes.selected, o = t(i.suggestionsContainer), s = o.find("." + i.classes.suggestion);
                            return o.find("." + r).removeClass(r),
                            i.selectedIndex = e,
                            -1 !== i.selectedIndex && s.length > i.selectedIndex ? (n = s.get(i.selectedIndex),
                            t(n).addClass(r),
                            n) : null
                        },
                        selectHint: function() {
                            var e = this
                              , n = t.inArray(e.hint, e.suggestions);
                            e.select(n)
                        },
                        select: function(t) {
                            var e = this;
                            e.hide(),
                            e.onSelect(t),
                            e.disableKillerFn()
                        },
                        moveUp: function() {
                            var e = this;
                            if (-1 !== e.selectedIndex)
                                return 0 === e.selectedIndex ? (t(e.suggestionsContainer).children().first().removeClass(e.classes.selected),
                                e.selectedIndex = -1,
                                e.el.val(e.currentValue),
                                void e.findBestHint()) : void e.adjustScroll(e.selectedIndex - 1)
                        },
                        moveDown: function() {
                            var t = this;
                            t.selectedIndex !== t.suggestions.length - 1 && t.adjustScroll(t.selectedIndex + 1)
                        },
                        adjustScroll: function(e) {
                            var n = this
                              , i = n.activate(e);
                            if (i) {
                                var r, o, s, a = t(i).outerHeight();
                                r = i.offsetTop,
                                s = (o = t(n.suggestionsContainer).scrollTop()) + n.options.maxHeight - a,
                                r < o ? t(n.suggestionsContainer).scrollTop(r) : r > s && t(n.suggestionsContainer).scrollTop(r - n.options.maxHeight + a),
                                n.options.preserveInput || n.el.val(n.getValue(n.suggestions[e].value)),
                                n.signalHint(null)
                            }
                        },
                        onSelect: function(e) {
                            var n = this
                              , i = n.options.onSelect
                              , r = n.suggestions[e];
                            n.currentValue = n.getValue(r.value),
                            n.currentValue === n.el.val() || n.options.preserveInput || n.el.val(n.currentValue),
                            n.signalHint(null),
                            n.suggestions = [],
                            n.selection = r,
                            t.isFunction(i) && i.call(n.element, r)
                        },
                        getValue: function(t) {
                            var e, n, i = this, r = i.options.delimiter;
                            return r ? 1 === (n = (e = i.currentValue).split(r)).length ? t : e.substr(0, e.length - n[n.length - 1].length) + t : t
                        },
                        dispose: function() {
                            var e = this;
                            e.el.off(".autocomplete").removeData("autocomplete"),
                            e.disableKillerFn(),
                            t(window).off("resize.autocomplete", e.fixPositionCapture),
                            t(e.suggestionsContainer).remove()
                        }
                    },
                    t.fn.autocomplete = t.fn.devbridgeAutocomplete = function(e, n) {
                        var r = "autocomplete";
                        return arguments.length ? this.each((function() {
                            var o = t(this)
                              , s = o.data(r);
                            "string" == typeof e ? s && "function" == typeof s[e] && s[e](n) : (s && s.dispose && s.dispose(),
                            s = new i(this,e),
                            o.data(r, s))
                        }
                        )) : this.first().data(r)
                    }
                }
                ,
                void 0 === (o = "function" == typeof i ? i.apply(e, r) : i) || (t.exports = o)
            }()
        },
        643: function(t, e, n) {
            !function(t) {
                "use strict";
                t.jCarousel.plugin("jcarouselControl", {
                    _options: {
                        target: "+=1",
                        event: "click",
                        method: "scroll"
                    },
                    _active: null,
                    _init: function() {
                        this.onDestroy = t.proxy((function() {
                            this._destroy(),
                            this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
                        }
                        ), this),
                        this.onReload = t.proxy(this._reload, this),
                        this.onEvent = t.proxy((function(e) {
                            e.preventDefault();
                            var n = this.options("method");
                            t.isFunction(n) ? n.call(this) : this.carousel().jcarousel(this.options("method"), this.options("target"))
                        }
                        ), this)
                    },
                    _create: function() {
                        this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend jcarousel:scrollend", this.onReload),
                        this._element.on(this.options("event") + ".jcarouselcontrol", this.onEvent),
                        this._reload()
                    },
                    _destroy: function() {
                        this._element.off(".jcarouselcontrol", this.onEvent),
                        this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend jcarousel:scrollend", this.onReload)
                    },
                    _reload: function() {
                        var e, n = t.jCarousel.parseTarget(this.options("target")), i = this.carousel();
                        if (n.relative)
                            e = i.jcarousel(n.target > 0 ? "hasNext" : "hasPrev");
                        else {
                            var r = "object" != typeof n.target ? i.jcarousel("items").eq(n.target) : n.target;
                            e = i.jcarousel("target").index(r) >= 0
                        }
                        return this._active !== e && (this._trigger(e ? "active" : "inactive"),
                        this._active = e),
                        this
                    }
                })
            }(n(755))
        },
        724: function(t, e, n) {
            var i = n(755);
            !function(t) {
                "use strict";
                var e = t.jCarousel = {};
                e.version = "0.3.9";
                var n = /^([+\-]=)?(.+)$/;
                e.parseTarget = function(t) {
                    var e = !1
                      , i = "object" != typeof t ? n.exec(t) : null;
                    return i ? (t = parseInt(i[2], 10) || 0,
                    i[1] && (e = !0,
                    "-=" === i[1] && (t *= -1))) : "object" != typeof t && (t = parseInt(t, 10) || 0),
                    {
                        target: t,
                        relative: e
                    }
                }
                ,
                e.detectCarousel = function(t) {
                    for (var e; t.length > 0; ) {
                        if ((e = t.filter("[data-jcarousel]")).length > 0)
                            return e;
                        if ((e = t.find("[data-jcarousel]")).length > 0)
                            return e;
                        t = t.parent()
                    }
                    return null
                }
                ,
                e.base = function(n) {
                    return {
                        version: e.version,
                        _options: {},
                        _element: null,
                        _carousel: null,
                        _init: t.noop,
                        _create: t.noop,
                        _destroy: t.noop,
                        _reload: t.noop,
                        create: function() {
                            return this._element.attr("data-" + n.toLowerCase(), !0).data(n, this),
                            !1 === this._trigger("create") || (this._create(),
                            this._trigger("createend")),
                            this
                        },
                        destroy: function() {
                            return !1 === this._trigger("destroy") || (this._destroy(),
                            this._trigger("destroyend"),
                            this._element.removeData(n).removeAttr("data-" + n.toLowerCase())),
                            this
                        },
                        reload: function(t) {
                            return !1 === this._trigger("reload") || (t && this.options(t),
                            this._reload(),
                            this._trigger("reloadend")),
                            this
                        },
                        element: function() {
                            return this._element
                        },
                        options: function(e, n) {
                            if (0 === arguments.length)
                                return t.extend({}, this._options);
                            if ("string" == typeof e) {
                                if (void 0 === n)
                                    return void 0 === this._options[e] ? null : this._options[e];
                                this._options[e] = n
                            } else
                                this._options = t.extend({}, this._options, e);
                            return this
                        },
                        carousel: function() {
                            return this._carousel || (this._carousel = e.detectCarousel(this.options("carousel") || this._element),
                            this._carousel || t.error('Could not detect carousel for plugin "' + n + '"')),
                            this._carousel
                        },
                        _trigger: function(e, i, r) {
                            var o, s = !1;
                            return r = [this].concat(r || []),
                            (i || this._element).each((function() {
                                o = t.Event((n + ":" + e).toLowerCase()),
                                t(this).trigger(o, r),
                                o.isDefaultPrevented() && (s = !0)
                            }
                            )),
                            !s
                        }
                    }
                }
                ,
                e.plugin = function(n, i) {
                    var r = t[n] = function(e, n) {
                        this._element = t(e),
                        this.options(n),
                        this._init(),
                        this.create()
                    }
                    ;
                    return r.fn = r.prototype = t.extend({}, e.base(n), i),
                    t.fn[n] = function(e) {
                        var i = Array.prototype.slice.call(arguments, 1)
                          , o = this;
                        return "string" == typeof e ? this.each((function() {
                            var r = t(this).data(n);
                            if (!r)
                                return t.error("Cannot call methods on " + n + ' prior to initialization; attempted to call method "' + e + '"');
                            if (!t.isFunction(r[e]) || "_" === e.charAt(0))
                                return t.error('No such method "' + e + '" for ' + n + " instance");
                            var s = r[e].apply(r, i);
                            return s !== r && void 0 !== s ? (o = s,
                            !1) : void 0
                        }
                        )) : this.each((function() {
                            var i = t(this).data(n);
                            i instanceof r ? i.reload(e) : new r(this,e)
                        }
                        )),
                        o
                    }
                    ,
                    r
                }
            }(i),
            function(t, e) {
                "use strict";
                var n = t(e)
                  , i = function(t) {
                    return parseFloat(t) || 0
                };
                t.jCarousel.plugin("jcarousel", {
                    animating: !1,
                    tail: 0,
                    inTail: !1,
                    resizeState: null,
                    resizeTimer: null,
                    lt: null,
                    vertical: !1,
                    rtl: !1,
                    circular: !1,
                    underflow: !1,
                    relative: !1,
                    _options: {
                        list: function() {
                            return this.element().children().eq(0)
                        },
                        items: function() {
                            return this.list().children()
                        },
                        animation: 400,
                        transitions: !1,
                        wrap: null,
                        vertical: null,
                        rtl: null,
                        center: !1
                    },
                    _list: null,
                    _items: null,
                    _target: t(),
                    _first: t(),
                    _last: t(),
                    _visible: t(),
                    _fullyvisible: t(),
                    _init: function() {
                        var t = this;
                        return t.resizeState = n.width() + "x" + n.height(),
                        this.onWindowResize = function() {
                            t.resizeTimer && clearTimeout(t.resizeTimer),
                            t.resizeTimer = setTimeout((function() {
                                var e = n.width() + "x" + n.height();
                                e !== t.resizeState && (t.resizeState = e,
                                t.reload())
                            }
                            ), 100)
                        }
                        ,
                        this
                    },
                    _create: function() {
                        this._reload(),
                        n.on("resize.jcarousel", this.onWindowResize)
                    },
                    _destroy: function() {
                        n.off("resize.jcarousel", this.onWindowResize)
                    },
                    _reload: function() {
                        this.vertical = this.options("vertical"),
                        null == this.vertical && (this.vertical = i(this.list().height()) > i(this.list().width())),
                        this.rtl = this.options("rtl"),
                        null == this.rtl && (this.rtl = function(e) {
                            if ("rtl" === ("" + e.attr("dir")).toLowerCase())
                                return !0;
                            var n = !1;
                            return e.parents("[dir]").each((function() {
                                if (/rtl/i.test(t(this).attr("dir")))
                                    return n = !0,
                                    !1
                            }
                            )),
                            n
                        }(this._element)),
                        this.lt = this.vertical ? "top" : "left",
                        this.relative = "relative" === this.list().css("position"),
                        this._list = null,
                        this._items = null;
                        var e = this.index(this._target) >= 0 ? this._target : this.closest();
                        this.circular = "circular" === this.options("wrap"),
                        this.underflow = !1;
                        var n = {
                            left: 0,
                            top: 0
                        };
                        return e.length > 0 && (this._prepare(e),
                        this.list().find("[data-jcarousel-clone]").remove(),
                        this._items = null,
                        this.underflow = this._fullyvisible.length >= this.items().length,
                        this.circular = this.circular && !this.underflow,
                        n[this.lt] = this._position(e) + "px"),
                        this.move(n),
                        this
                    },
                    list: function() {
                        if (null === this._list) {
                            var e = this.options("list");
                            this._list = t.isFunction(e) ? e.call(this) : this._element.find(e)
                        }
                        return this._list
                    },
                    items: function() {
                        if (null === this._items) {
                            var e = this.options("items");
                            this._items = (t.isFunction(e) ? e.call(this) : this.list().find(e)).not("[data-jcarousel-clone]")
                        }
                        return this._items
                    },
                    index: function(t) {
                        return this.items().index(t)
                    },
                    closest: function() {
                        var e, n = this, r = this.list().position()[this.lt], o = t(), s = !1, a = this.vertical ? "bottom" : this.rtl && !this.relative ? "left" : "right";
                        return this.rtl && this.relative && !this.vertical && (r += i(this.list().width()) - this.clipping()),
                        this.items().each((function() {
                            if (o = t(this),
                            s)
                                return !1;
                            var l = n.dimension(o);
                            if ((r += l) >= 0) {
                                if (e = l - i(o.css("margin-" + a)),
                                !(Math.abs(r) - l + e / 2 <= 0))
                                    return !1;
                                s = !0
                            }
                        }
                        )),
                        o
                    },
                    target: function() {
                        return this._target
                    },
                    first: function() {
                        return this._first
                    },
                    last: function() {
                        return this._last
                    },
                    visible: function() {
                        return this._visible
                    },
                    fullyvisible: function() {
                        return this._fullyvisible
                    },
                    hasNext: function() {
                        if (!1 === this._trigger("hasnext"))
                            return !0;
                        var t = this.options("wrap")
                          , e = this.items().length - 1
                          , n = this.options("center") ? this._target : this._last;
                        return !!(e >= 0 && !this.underflow && (t && "first" !== t || this.index(n) < e || this.tail && !this.inTail))
                    },
                    hasPrev: function() {
                        if (!1 === this._trigger("hasprev"))
                            return !0;
                        var t = this.options("wrap");
                        return !!(this.items().length > 0 && !this.underflow && (t && "last" !== t || this.index(this._first) > 0 || this.tail && this.inTail))
                    },
                    clipping: function() {
                        return i(this._element["inner" + (this.vertical ? "Height" : "Width")]())
                    },
                    dimension: function(t) {
                        return i(t["outer" + (this.vertical ? "Height" : "Width")](!0))
                    },
                    scroll: function(e, n, i) {
                        if (this.animating)
                            return this;
                        if (!1 === this._trigger("scroll", null, [e, n]))
                            return this;
                        t.isFunction(n) && (i = n,
                        n = !0);
                        var r = t.jCarousel.parseTarget(e);
                        if (r.relative) {
                            var o, s, a, l, c, u, h, d, f = this.items().length - 1, p = Math.abs(r.target), g = this.options("wrap");
                            if (r.target > 0) {
                                var m = this.index(this._last);
                                if (m >= f && this.tail)
                                    this.inTail ? "both" === g || "last" === g ? this._scroll(0, n, i) : t.isFunction(i) && i.call(this, !1) : this._scrollTail(n, i);
                                else if (o = this.index(this._target),
                                this.underflow && o === f && ("circular" === g || "both" === g || "last" === g) || !this.underflow && m === f && ("both" === g || "last" === g))
                                    this._scroll(0, n, i);
                                else if (a = o + p,
                                this.circular && a > f) {
                                    for (d = f,
                                    c = this.items().get(-1); d++ < a; )
                                        c = this.items().eq(0),
                                        (u = this._visible.index(c) >= 0) && c.after(c.clone(!0).attr("data-jcarousel-clone", !0)),
                                        this.list().append(c),
                                        u || ((h = {})[this.lt] = this.dimension(c),
                                        this.moveBy(h)),
                                        this._items = null;
                                    this._scroll(c, n, i)
                                } else
                                    this._scroll(Math.min(a, f), n, i)
                            } else if (this.inTail)
                                this._scroll(Math.max(this.index(this._first) - p + 1, 0), n, i);
                            else if (s = this.index(this._first),
                            o = this.index(this._target),
                            a = (l = this.underflow ? o : s) - p,
                            l <= 0 && (this.underflow && "circular" === g || "both" === g || "first" === g))
                                this._scroll(f, n, i);
                            else if (this.circular && a < 0) {
                                for (d = a,
                                c = this.items().get(0); d++ < 0; ) {
                                    c = this.items().eq(-1),
                                    (u = this._visible.index(c) >= 0) && c.after(c.clone(!0).attr("data-jcarousel-clone", !0)),
                                    this.list().prepend(c),
                                    this._items = null;
                                    var v = this.dimension(c);
                                    (h = {})[this.lt] = -v,
                                    this.moveBy(h)
                                }
                                this._scroll(c, n, i)
                            } else
                                this._scroll(Math.max(a, 0), n, i)
                        } else
                            this._scroll(r.target, n, i);
                        return this._trigger("scrollend"),
                        this
                    },
                    moveBy: function(t, e) {
                        var n = this.list().position()
                          , r = 1
                          , o = 0;
                        return this.rtl && !this.vertical && (r = -1,
                        this.relative && (o = i(this.list().width()) - this.clipping())),
                        t.left && (t.left = i(n.left) + o + i(t.left) * r + "px"),
                        t.top && (t.top = i(n.top) + o + i(t.top) * r + "px"),
                        this.move(t, e)
                    },
                    move: function(e, n) {
                        n = n || {};
                        var i = this.options("transitions")
                          , r = !!i
                          , o = !!i.transforms
                          , s = !!i.transforms3d
                          , a = n.duration || 0
                          , l = this.list();
                        if (!r && a > 0)
                            l.animate(e, n);
                        else {
                            var c = n.complete || t.noop
                              , u = {};
                            if (r) {
                                var h = {
                                    transitionDuration: l.css("transitionDuration"),
                                    transitionTimingFunction: l.css("transitionTimingFunction"),
                                    transitionProperty: l.css("transitionProperty")
                                }
                                  , d = c;
                                c = function() {
                                    t(this).css(h),
                                    d.call(this)
                                }
                                ,
                                u = {
                                    transitionDuration: (a > 0 ? a / 1e3 : 0) + "s",
                                    transitionTimingFunction: i.easing || n.easing,
                                    transitionProperty: a > 0 ? o || s ? "all" : e.left ? "left" : "top" : "none",
                                    transform: "none"
                                }
                            }
                            s ? u.transform = "translate3d(" + (e.left || 0) + "," + (e.top || 0) + ",0)" : o ? u.transform = "translate(" + (e.left || 0) + "," + (e.top || 0) + ")" : t.extend(u, e),
                            r && a > 0 && l.one("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", c),
                            l.css(u),
                            a <= 0 && l.each((function() {
                                c.call(this)
                            }
                            ))
                        }
                    },
                    _scroll: function(e, n, r) {
                        if (this.animating)
                            return t.isFunction(r) && r.call(this, !1),
                            this;
                        if ("object" != typeof e ? e = this.items().eq(e) : void 0 === e.jquery && (e = t(e)),
                        0 === e.length)
                            return t.isFunction(r) && r.call(this, !1),
                            this;
                        this.inTail = !1,
                        this._prepare(e);
                        var o = this._position(e);
                        if (o === i(this.list().position()[this.lt]))
                            return t.isFunction(r) && r.call(this, !1),
                            this;
                        var s = {};
                        return s[this.lt] = o + "px",
                        this._animate(s, n, r),
                        this
                    },
                    _scrollTail: function(e, n) {
                        if (this.animating || !this.tail)
                            return t.isFunction(n) && n.call(this, !1),
                            this;
                        var r = this.list().position()[this.lt];
                        this.rtl && this.relative && !this.vertical && (r += i(this.list().width()) - this.clipping()),
                        this.rtl && !this.vertical ? r += this.tail : r -= this.tail,
                        this.inTail = !0;
                        var o = {};
                        return o[this.lt] = r + "px",
                        this._update({
                            target: this._target.next(),
                            fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
                        }),
                        this._animate(o, e, n),
                        this
                    },
                    _animate: function(e, n, i) {
                        if (i = i || t.noop,
                        !1 === this._trigger("animate"))
                            return i.call(this, !1),
                            this;
                        this.animating = !0;
                        var r = this.options("animation")
                          , o = t.proxy((function() {
                            this.animating = !1;
                            var t = this.list().find("[data-jcarousel-clone]");
                            t.length > 0 && (t.remove(),
                            this._reload()),
                            this._trigger("animateend"),
                            i.call(this, !0)
                        }
                        ), this)
                          , s = "object" == typeof r ? t.extend({}, r) : {
                            duration: r
                        }
                          , a = s.complete || t.noop;
                        return !1 === n ? s.duration = 0 : void 0 !== t.fx.speeds[s.duration] && (s.duration = t.fx.speeds[s.duration]),
                        s.complete = function() {
                            o(),
                            a.call(this)
                        }
                        ,
                        this.move(e, s),
                        this
                    },
                    _prepare: function(e) {
                        var n, r, o, s = this.index(e), a = s, l = this.dimension(e), c = this.clipping(), u = this.vertical ? "bottom" : this.rtl ? "left" : "right", h = this.options("center"), d = {
                            target: e,
                            first: e,
                            last: e,
                            visible: e,
                            fullyvisible: l <= c ? e : t()
                        };
                        if (h && (l /= 2,
                        c /= 2),
                        l < c)
                            for (; ; ) {
                                if (0 === (n = this.items().eq(++a)).length) {
                                    if (!this.circular)
                                        break;
                                    if (n = this.items().eq(0),
                                    e.get(0) === n.get(0))
                                        break;
                                    if ((r = this._visible.index(n) >= 0) && n.after(n.clone(!0).attr("data-jcarousel-clone", !0)),
                                    this.list().append(n),
                                    !r) {
                                        var f = {};
                                        f[this.lt] = this.dimension(n),
                                        this.moveBy(f)
                                    }
                                    this._items = null
                                }
                                if (0 === (o = this.dimension(n)))
                                    break;
                                if (l += o,
                                d.last = n,
                                d.visible = d.visible.add(n),
                                l - i(n.css("margin-" + u)) <= c && (d.fullyvisible = d.fullyvisible.add(n)),
                                l >= c)
                                    break
                            }
                        if (!this.circular && !h && l < c)
                            for (a = s; !(--a < 0 || 0 === (n = this.items().eq(a)).length || 0 === (o = this.dimension(n)) || (l += o,
                            d.first = n,
                            d.visible = d.visible.add(n),
                            l - i(n.css("margin-" + u)) <= c && (d.fullyvisible = d.fullyvisible.add(n)),
                            l >= c)); )
                                ;
                        return this._update(d),
                        this.tail = 0,
                        h || "circular" === this.options("wrap") || "custom" === this.options("wrap") || this.index(d.last) !== this.items().length - 1 || (l -= i(d.last.css("margin-" + u))) > c && (this.tail = l - c),
                        this
                    },
                    _position: function(t) {
                        var e = this._first
                          , n = i(e.position()[this.lt])
                          , r = this.options("center")
                          , o = r ? this.clipping() / 2 - this.dimension(e) / 2 : 0;
                        return this.rtl && !this.vertical ? (this.relative ? n -= i(this.list().width()) - this.dimension(e) : n -= this.clipping() - this.dimension(e),
                        n += o) : n -= o,
                        !r && (this.index(t) > this.index(e) || this.inTail) && this.tail ? (n = this.rtl && !this.vertical ? n - this.tail : n + this.tail,
                        this.inTail = !0) : this.inTail = !1,
                        -n
                    },
                    _update: function(e) {
                        var n, i = this, r = {
                            target: this._target,
                            first: this._first,
                            last: this._last,
                            visible: this._visible,
                            fullyvisible: this._fullyvisible
                        }, o = this.index(e.first || r.first) < this.index(r.first), s = function(n) {
                            var s = []
                              , a = [];
                            e[n].each((function() {
                                r[n].index(this) < 0 && s.push(this)
                            }
                            )),
                            r[n].each((function() {
                                e[n].index(this) < 0 && a.push(this)
                            }
                            )),
                            o ? s = s.reverse() : a = a.reverse(),
                            i._trigger(n + "in", t(s)),
                            i._trigger(n + "out", t(a)),
                            i["_" + n] = e[n]
                        };
                        for (n in e)
                            s(n);
                        return this
                    }
                })
            }(i, window)
        },
        139: function(t, e, n) {
            !function(t) {
                "use strict";
                t.jCarousel.plugin("jcarouselPagination", {
                    _options: {
                        perPage: null,
                        item: function(t) {
                            return '<a href="#' + t + '">' + t + "</a>"
                        },
                        event: "click",
                        method: "scroll"
                    },
                    _carouselItems: null,
                    _pages: {},
                    _items: {},
                    _currentPage: null,
                    _init: function() {
                        this.onDestroy = t.proxy((function() {
                            this._destroy(),
                            this.carousel().one("jcarousel:createend", t.proxy(this._create, this))
                        }
                        ), this),
                        this.onReload = t.proxy(this._reload, this),
                        this.onScroll = t.proxy(this._update, this)
                    },
                    _create: function() {
                        this.carousel().one("jcarousel:destroy", this.onDestroy).on("jcarousel:reloadend", this.onReload).on("jcarousel:scrollend", this.onScroll),
                        this._reload()
                    },
                    _destroy: function() {
                        this._clear(),
                        this.carousel().off("jcarousel:destroy", this.onDestroy).off("jcarousel:reloadend", this.onReload).off("jcarousel:scrollend", this.onScroll),
                        this._carouselItems = null
                    },
                    _reload: function() {
                        var e = this.options("perPage");
                        if (this._pages = {},
                        this._items = {},
                        t.isFunction(e) && (e = e.call(this)),
                        null == e)
                            this._pages = this._calculatePages();
                        else
                            for (var n, i = parseInt(e, 10) || 0, r = this._getCarouselItems(), o = 1, s = 0; 0 !== (n = r.eq(s++)).length; )
                                this._pages[o] ? this._pages[o] = this._pages[o].add(n) : this._pages[o] = n,
                                s % i == 0 && o++;
                        this._clear();
                        var a = this
                          , l = this.carousel().data("jcarousel")
                          , c = this._element
                          , u = this.options("item")
                          , h = this._getCarouselItems().length;
                        t.each(this._pages, (function(e, n) {
                            var i = a._items[e] = t(u.call(a, e, n));
                            i.on(a.options("event") + ".jcarouselpagination", t.proxy((function() {
                                var t = n.eq(0);
                                if (l.circular) {
                                    var i = l.index(l.target())
                                      , r = l.index(t);
                                    parseFloat(e) > parseFloat(a._currentPage) ? r < i && (t = "+=" + (h - i + r)) : r > i && (t = "-=" + (i + (h - r)))
                                }
                                l[this.options("method")](t)
                            }
                            ), a)),
                            c.append(i)
                        }
                        )),
                        this._update()
                    },
                    _update: function() {
                        var e, n = this.carousel().jcarousel("target");
                        t.each(this._pages, (function(t, i) {
                            if (i.each((function() {
                                if (n.is(this))
                                    return e = t,
                                    !1
                            }
                            )),
                            e)
                                return !1
                        }
                        )),
                        this._currentPage !== e && (this._trigger("inactive", this._items[this._currentPage]),
                        this._trigger("active", this._items[e])),
                        this._currentPage = e
                    },
                    items: function() {
                        return this._items
                    },
                    reloadCarouselItems: function() {
                        return this._carouselItems = null,
                        this
                    },
                    _clear: function() {
                        this._element.empty(),
                        this._currentPage = null
                    },
                    _calculatePages: function() {
                        for (var t, e, n = this.carousel().data("jcarousel"), i = this._getCarouselItems(), r = n.clipping(), o = 0, s = 0, a = 1, l = {}; 0 !== (t = i.eq(s++)).length; )
                            o + (e = n.dimension(t)) > r && (a++,
                            o = 0),
                            o += e,
                            l[a] ? l[a] = l[a].add(t) : l[a] = t;
                        return l
                    },
                    _getCarouselItems: function() {
                        return this._carouselItems || (this._carouselItems = this.carousel().jcarousel("items")),
                        this._carouselItems
                    }
                })
            }(n(755))
        },
        678: function(t, e, n) {
            var i = n(755);
            i && function(t) {
                function e(e, r) {
                    var o = e ? t(this) : r
                      , s = t(o.attr("data-dropdown"))
                      , a = o.hasClass("dropdown-open");
                    if (e) {
                        if (t(e.target).hasClass("dropdown-ignore"))
                            return;
                        e.preventDefault(),
                        e.stopPropagation()
                    } else if (o !== r.target && t(r.target).hasClass("dropdown-ignore"))
                        return;
                    n(),
                    a || o.hasClass("dropdown-disabled") || (o.addClass("dropdown-open"),
                    s.data("dropdown-trigger", o).show(),
                    i(),
                    s.trigger("show", {
                        dropdown: s,
                        trigger: o
                    }))
                }
                function n(e) {
                    var n = e ? t(e.target).parents().addBack() : null;
                    if (n && n.is(".dropdown")) {
                        if (!n.is(".dropdown-menu"))
                            return;
                        if (!n.is("A"))
                            return
                    }
                    t(document).find(".dropdown:visible").each((function() {
                        var e = t(this);
                        e.hide().removeData("dropdown-trigger").trigger("hide", {
                            dropdown: e
                        })
                    }
                    )),
                    t(document).find(".dropdown-open").removeClass("dropdown-open")
                }
                function i() {
                    var e = t(".dropdown:visible").eq(0)
                      , n = e.data("dropdown-trigger")
                      , i = n ? parseInt(n.attr("data-horizontal-offset") || 0, 10) : null
                      , r = n ? parseInt(n.attr("data-vertical-offset") || 0, 10) : null;
                    0 !== e.length && n && (e.hasClass("dropdown-relative") ? e.css({
                        left: e.hasClass("dropdown-anchor-right") ? n.position().left - (e.outerWidth(!0) - n.outerWidth(!0)) - parseInt(n.css("margin-right"), 10) + i : n.position().left + parseInt(n.css("margin-left"), 10) + i,
                        top: n.position().top + n.outerHeight(!0) - parseInt(n.css("margin-top"), 10) + r
                    }) : e.css({
                        left: e.hasClass("dropdown-anchor-right") ? n.offset().left - (e.outerWidth() - n.outerWidth()) + i : n.offset().left + i,
                        top: n.offset().top + n.outerHeight() + r
                    }))
                }
                t.extend(t.fn, {
                    dropdown: function(i, r) {
                        switch (i) {
                        case "show":
                            return e(null, t(this)),
                            t(this);
                        case "hide":
                            return n(),
                            t(this);
                        case "attach":
                            return t(this).attr("data-dropdown", r);
                        case "detach":
                            return n(),
                            t(this).removeAttr("data-dropdown");
                        case "disable":
                            return t(this).addClass("dropdown-disabled");
                        case "enable":
                            return n(),
                            t(this).removeClass("dropdown-disabled")
                        }
                    }
                }),
                t(document).on("click.dropdown", "[data-dropdown]", e),
                t(document).on("click.dropdown", n),
                t(window).on("resize", i)
            }(i)
        },
        390: function(t, e, n) {
            var i, r, o;
            r = [n(755)],
            void 0 === (o = "function" == typeof (i = function(t) {
                t.extend({
                    highlight: function(e, n, i, r, o, s) {
                        if (3 === e.nodeType) {
                            var a = (s ? t.removeDiacritcs(e.data) : e.data).match(n);
                            if (a) {
                                var l = document.createElement(i || "span");
                                l.className = r || "highlight";
                                var c = e.data.indexOf(a[1], a.index)
                                  , u = e.splitText(c);
                                u.splitText(a[1].length);
                                var h = u.cloneNode(!0);
                                return l.appendChild(h),
                                u.parentNode.replaceChild(l, u),
                                "function" == typeof o && o(l),
                                1
                            }
                        } else if (1 === e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName) && (e.tagName !== i.toUpperCase() || e.className !== r))
                            for (var d = 0; d < e.childNodes.length; d++)
                                d += t.highlight(e.childNodes[d], n, i, r, o, s);
                        return 0
                    },
                    removeDiacritcs: function(t) {
                        return t.replace(/[\u00c0-\u00c6]/g, "A").replace(/[\u00e0-\u00e6]/g, "a").replace(/[\u00c7]/g, "C").replace(/[\u00e7]/g, "c").replace(/[\u00c8-\u00cb]/g, "E").replace(/[\u00e8-\u00eb]/g, "e").replace(/[\u00cc-\u00cf]/g, "I").replace(/[\u00ec-\u00ef]/g, "i").replace(/[\u00d1|\u0147]/g, "N").replace(/[\u00f1|\u0148]/g, "n").replace(/[\u00d2-\u00d8|\u0150]/g, "O").replace(/[\u00f2-\u00f8|\u0151]/g, "o").replace(/[\u0160]/g, "S").replace(/[\u0161]/g, "s").replace(/[\u00d9-\u00dc]/g, "U").replace(/[\u00f9-\u00fc]/g, "u").replace(/[\u00dd]/g, "Y").replace(/[\u00fd]/g, "y")
                    }
                }),
                t.fn.unhighlight = function(e) {
                    var n = {
                        className: "highlight",
                        element: "span"
                    };
                    return t.extend(n, e),
                    this.find(n.element + "." + n.className).each((function() {
                        var t = this.parentNode;
                        t.replaceChild(this.firstChild, this),
                        t.normalize()
                    }
                    )).end()
                }
                ,
                t.fn.highlight = function(e, n, i) {
                    var r = {
                        className: "highlight",
                        element: "span",
                        caseSensitive: !1,
                        wordsOnly: !1,
                        wordsBoundary: "\\b",
                        ignoreDiacritics: !1
                    };
                    if (t.extend(r, n),
                    "string" == typeof e && (e = [e]),
                    e = t.grep(e, (function(t) {
                        return "" != t
                    }
                    )),
                    0 === (e = t.map(e, (function(e) {
                        return r.ignoreDiacritics && (e = t.removeDiacritcs(e)),
                        e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
                    }
                    ))).length)
                        return this;
                    var o = r.caseSensitive ? "" : "i"
                      , s = "(" + e.join("|") + ")";
                    r.wordsOnly && (s = (r.wordsBoundaryStart || r.wordsBoundary) + s + (r.wordsBoundaryEnd || r.wordsBoundary));
                    var a = new RegExp(s,o);
                    return this.each((function() {
                        t.highlight(this, a, r.element, r.className, i, r.ignoreDiacritics)
                    }
                    ))
                }
            }
            ) ? i.apply(e, r) : i) || (t.exports = o)
        },
        990: function(t, e, n) {
            !function(t) {
                t.path = {};
                var e = function(t, e) {
                    var n = e * Math.PI / 180
                      , i = Math.cos(n)
                      , r = Math.sin(n);
                    return [i * t[0] - r * t[1], r * t[0] + i * t[1]]
                }
                  , n = function(t, e) {
                    return [e * t[0], e * t[1]]
                }
                  , i = function(t, e) {
                    return [t[0] + e[0], t[1] + e[1]]
                }
                  , r = function(t, e) {
                    return [t[0] - e[0], t[1] - e[1]]
                };
                t.path.bezier = function(o, s) {
                    o.start = t.extend({
                        angle: 0,
                        length: .3333
                    }, o.start),
                    o.end = t.extend({
                        angle: 0,
                        length: .3333
                    }, o.end),
                    this.p1 = [o.start.x, o.start.y],
                    this.p4 = [o.end.x, o.end.y];
                    var a = r(this.p4, this.p1)
                      , l = n(a, o.start.length)
                      , c = n(a, -1)
                      , u = n(c, o.end.length);
                    l = e(l, o.start.angle),
                    this.p2 = i(this.p1, l),
                    u = e(u, o.end.angle),
                    this.p3 = i(this.p4, u),
                    this.f1 = function(t) {
                        return t * t * t
                    }
                    ,
                    this.f2 = function(t) {
                        return 3 * t * t * (1 - t)
                    }
                    ,
                    this.f3 = function(t) {
                        return 3 * t * (1 - t) * (1 - t)
                    }
                    ,
                    this.f4 = function(t) {
                        return (1 - t) * (1 - t) * (1 - t)
                    }
                    ,
                    this.css = function(t) {
                        var e = this.f1(t)
                          , n = this.f2(t)
                          , i = this.f3(t)
                          , r = this.f4(t)
                          , o = {};
                        return s && (o.prevX = this.x,
                        o.prevY = this.y),
                        o.x = this.x = this.p1[0] * e + this.p2[0] * n + this.p3[0] * i + this.p4[0] * r + .5 | 0,
                        o.y = this.y = this.p1[1] * e + this.p2[1] * n + this.p3[1] * i + this.p4[1] * r + .5 | 0,
                        o.left = o.x + "px",
                        o.top = o.y + "px",
                        o
                    }
                }
                ,
                t.path.arc = function(t, e) {
                    for (var n in t)
                        this[n] = t[n];
                    for (this.dir = this.dir || 1; this.start > this.end && this.dir > 0; )
                        this.start -= 360;
                    for (; this.start < this.end && this.dir < 0; )
                        this.start += 360;
                    this.css = function(t) {
                        var n = (this.start * t + this.end * (1 - t)) * Math.PI / 180
                          , i = {};
                        return e && (i.prevX = this.x,
                        i.prevY = this.y),
                        i.x = this.x = Math.sin(n) * this.radius + this.center[0] + .5 | 0,
                        i.y = this.y = Math.cos(n) * this.radius + this.center[1] + .5 | 0,
                        i.left = i.x + "px",
                        i.top = i.y + "px",
                        i
                    }
                }
                ,
                t.fx.step.path = function(e) {
                    var n = e.end.css(1 - e.pos);
                    null != n.prevX && t.cssHooks.transform.set(e.elem, "rotate(" + Math.atan2(n.prevY - n.y, n.prevX - n.x) + ")"),
                    e.elem.style.top = n.top,
                    e.elem.style.left = n.left
                }
            }(n(755))
        },
        755: function(t, e) {
            var n;
            !function(e, n) {
                "use strict";
                "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
                    if (!t.document)
                        throw new Error("jQuery requires a window with a document");
                    return n(t)
                }
                : n(e)
            }("undefined" != typeof window ? window : this, (function(i, r) {
                "use strict";
                var o = []
                  , s = Object.getPrototypeOf
                  , a = o.slice
                  , l = o.flat ? function(t) {
                    return o.flat.call(t)
                }
                : function(t) {
                    return o.concat.apply([], t)
                }
                  , c = o.push
                  , u = o.indexOf
                  , h = {}
                  , d = h.toString
                  , f = h.hasOwnProperty
                  , p = f.toString
                  , g = p.call(Object)
                  , m = {}
                  , v = function(t) {
                    return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
                }
                  , y = function(t) {
                    return null != t && t === t.window
                }
                  , b = i.document
                  , x = {
                    type: !0,
                    src: !0,
                    nonce: !0,
                    noModule: !0
                };
                function w(t, e, n) {
                    var i, r, o = (n = n || b).createElement("script");
                    if (o.text = t,
                    e)
                        for (i in x)
                            (r = e[i] || e.getAttribute && e.getAttribute(i)) && o.setAttribute(i, r);
                    n.head.appendChild(o).parentNode.removeChild(o)
                }
                function T(t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? h[d.call(t)] || "object" : typeof t
                }
                var C = "3.7.1"
                  , S = /HTML$/i
                  , E = function(t, e) {
                    return new E.fn.init(t,e)
                };
                function k(t) {
                    var e = !!t && "length"in t && t.length
                      , n = T(t);
                    return !v(t) && !y(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                }
                function j(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                }
                E.fn = E.prototype = {
                    jquery: C,
                    constructor: E,
                    length: 0,
                    toArray: function() {
                        return a.call(this)
                    },
                    get: function(t) {
                        return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t]
                    },
                    pushStack: function(t) {
                        var e = E.merge(this.constructor(), t);
                        return e.prevObject = this,
                        e
                    },
                    each: function(t) {
                        return E.each(this, t)
                    },
                    map: function(t) {
                        return this.pushStack(E.map(this, (function(e, n) {
                            return t.call(e, n, e)
                        }
                        )))
                    },
                    slice: function() {
                        return this.pushStack(a.apply(this, arguments))
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    even: function() {
                        return this.pushStack(E.grep(this, (function(t, e) {
                            return (e + 1) % 2
                        }
                        )))
                    },
                    odd: function() {
                        return this.pushStack(E.grep(this, (function(t, e) {
                            return e % 2
                        }
                        )))
                    },
                    eq: function(t) {
                        var e = this.length
                          , n = +t + (t < 0 ? e : 0);
                        return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                    },
                    end: function() {
                        return this.prevObject || this.constructor()
                    },
                    push: c,
                    sort: o.sort,
                    splice: o.splice
                },
                E.extend = E.fn.extend = function() {
                    var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
                    for ("boolean" == typeof s && (c = s,
                    s = arguments[a] || {},
                    a++),
                    "object" == typeof s || v(s) || (s = {}),
                    a === l && (s = this,
                    a--); a < l; a++)
                        if (null != (t = arguments[a]))
                            for (e in t)
                                i = t[e],
                                "__proto__" !== e && s !== i && (c && i && (E.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[e],
                                o = r && !Array.isArray(n) ? [] : r || E.isPlainObject(n) ? n : {},
                                r = !1,
                                s[e] = E.extend(c, o, i)) : void 0 !== i && (s[e] = i));
                    return s
                }
                ,
                E.extend({
                    expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function(t) {
                        throw new Error(t)
                    },
                    noop: function() {},
                    isPlainObject: function(t) {
                        var e, n;
                        return !(!t || "[object Object]" !== d.call(t)) && (!(e = s(t)) || "function" == typeof (n = f.call(e, "constructor") && e.constructor) && p.call(n) === g)
                    },
                    isEmptyObject: function(t) {
                        var e;
                        for (e in t)
                            return !1;
                        return !0
                    },
                    globalEval: function(t, e, n) {
                        w(t, {
                            nonce: e && e.nonce
                        }, n)
                    },
                    each: function(t, e) {
                        var n, i = 0;
                        if (k(t))
                            for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++)
                                ;
                        else
                            for (i in t)
                                if (!1 === e.call(t[i], i, t[i]))
                                    break;
                        return t
                    },
                    text: function(t) {
                        var e, n = "", i = 0, r = t.nodeType;
                        if (!r)
                            for (; e = t[i++]; )
                                n += E.text(e);
                        return 1 === r || 11 === r ? t.textContent : 9 === r ? t.documentElement.textContent : 3 === r || 4 === r ? t.nodeValue : n
                    },
                    makeArray: function(t, e) {
                        var n = e || [];
                        return null != t && (k(Object(t)) ? E.merge(n, "string" == typeof t ? [t] : t) : c.call(n, t)),
                        n
                    },
                    inArray: function(t, e, n) {
                        return null == e ? -1 : u.call(e, t, n)
                    },
                    isXMLDoc: function(t) {
                        var e = t && t.namespaceURI
                          , n = t && (t.ownerDocument || t).documentElement;
                        return !S.test(e || n && n.nodeName || "HTML")
                    },
                    merge: function(t, e) {
                        for (var n = +e.length, i = 0, r = t.length; i < n; i++)
                            t[r++] = e[i];
                        return t.length = r,
                        t
                    },
                    grep: function(t, e, n) {
                        for (var i = [], r = 0, o = t.length, s = !n; r < o; r++)
                            !e(t[r], r) !== s && i.push(t[r]);
                        return i
                    },
                    map: function(t, e, n) {
                        var i, r, o = 0, s = [];
                        if (k(t))
                            for (i = t.length; o < i; o++)
                                null != (r = e(t[o], o, n)) && s.push(r);
                        else
                            for (o in t)
                                null != (r = e(t[o], o, n)) && s.push(r);
                        return l(s)
                    },
                    guid: 1,
                    support: m
                }),
                "function" == typeof Symbol && (E.fn[Symbol.iterator] = o[Symbol.iterator]),
                E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
                    h["[object " + e + "]"] = e.toLowerCase()
                }
                ));
                var _ = o.pop
                  , A = o.sort
                  , D = o.splice
                  , I = "[\\x20\\t\\r\\n\\f]"
                  , O = new RegExp("^" + I + "+|((?:^|[^\\\\])(?:\\\\.)*)" + I + "+$","g");
                E.contains = function(t, e) {
                    var n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(t.contains ? t.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                }
                ;
                var N = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
                function H(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                }
                E.escapeSelector = function(t) {
                    return (t + "").replace(N, H)
                }
                ;
                var P = b
                  , R = c;
                !function() {
                    var t, e, n, r, s, l, c, h, d, p, g = R, v = E.expando, y = 0, b = 0, x = tt(), w = tt(), T = tt(), C = tt(), S = function(t, e) {
                        return t === e && (s = !0),
                        0
                    }, k = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", N = "(?:\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", H = "\\[" + I + "*(" + N + ")(?:" + I + "*([*^$|!~]?=)" + I + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + I + "*\\]", $ = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)", L = new RegExp(I + "+","g"), F = new RegExp("^" + I + "*," + I + "*"), M = new RegExp("^" + I + "*([>+~]|" + I + ")" + I + "*"), q = new RegExp(I + "|>"), B = new RegExp($), W = new RegExp("^" + N + "$"), z = {
                        ID: new RegExp("^#(" + N + ")"),
                        CLASS: new RegExp("^\\.(" + N + ")"),
                        TAG: new RegExp("^(" + N + "|[*])"),
                        ATTR: new RegExp("^" + H),
                        PSEUDO: new RegExp("^" + $),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + I + "*(even|odd|(([+-]|)(\\d*)n|)" + I + "*(?:([+-]|)" + I + "*(\\d+)|))" + I + "*\\)|)","i"),
                        bool: new RegExp("^(?:" + k + ")$","i"),
                        needsContext: new RegExp("^" + I + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + I + "*((?:-\\d)?\\d*)" + I + "*\\)|)(?=[^-]|$)","i")
                    }, U = /^(?:input|select|textarea|button)$/i, V = /^h\d$/i, G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, X = /[+~]/, Y = new RegExp("\\\\[\\da-fA-F]{1,6}" + I + "?|\\\\([^\\r\\n\\f])","g"), K = function(t, e) {
                        var n = "0x" + t.slice(1) - 65536;
                        return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                    }, Q = function() {
                        lt()
                    }, J = dt((function(t) {
                        return !0 === t.disabled && j(t, "fieldset")
                    }
                    ), {
                        dir: "parentNode",
                        next: "legend"
                    });
                    try {
                        g.apply(o = a.call(P.childNodes), P.childNodes),
                        o[P.childNodes.length].nodeType
                    } catch (t) {
                        g = {
                            apply: function(t, e) {
                                R.apply(t, a.call(e))
                            },
                            call: function(t) {
                                R.apply(t, a.call(arguments, 1))
                            }
                        }
                    }
                    function Z(t, e, n, i) {
                        var r, o, s, a, c, u, f, p = e && e.ownerDocument, y = e ? e.nodeType : 9;
                        if (n = n || [],
                        "string" != typeof t || !t || 1 !== y && 9 !== y && 11 !== y)
                            return n;
                        if (!i && (lt(e),
                        e = e || l,
                        h)) {
                            if (11 !== y && (c = G.exec(t)))
                                if (r = c[1]) {
                                    if (9 === y) {
                                        if (!(s = e.getElementById(r)))
                                            return n;
                                        if (s.id === r)
                                            return g.call(n, s),
                                            n
                                    } else if (p && (s = p.getElementById(r)) && Z.contains(e, s) && s.id === r)
                                        return g.call(n, s),
                                        n
                                } else {
                                    if (c[2])
                                        return g.apply(n, e.getElementsByTagName(t)),
                                        n;
                                    if ((r = c[3]) && e.getElementsByClassName)
                                        return g.apply(n, e.getElementsByClassName(r)),
                                        n
                                }
                            if (!(C[t + " "] || d && d.test(t))) {
                                if (f = t,
                                p = e,
                                1 === y && (q.test(t) || M.test(t))) {
                                    for ((p = X.test(t) && at(e.parentNode) || e) == e && m.scope || ((a = e.getAttribute("id")) ? a = E.escapeSelector(a) : e.setAttribute("id", a = v)),
                                    o = (u = ut(t)).length; o--; )
                                        u[o] = (a ? "#" + a : ":scope") + " " + ht(u[o]);
                                    f = u.join(",")
                                }
                                try {
                                    return g.apply(n, p.querySelectorAll(f)),
                                    n
                                } catch (e) {
                                    C(t, !0)
                                } finally {
                                    a === v && e.removeAttribute("id")
                                }
                            }
                        }
                        return yt(t.replace(O, "$1"), e, n, i)
                    }
                    function tt() {
                        var t = [];
                        return function n(i, r) {
                            return t.push(i + " ") > e.cacheLength && delete n[t.shift()],
                            n[i + " "] = r
                        }
                    }
                    function et(t) {
                        return t[v] = !0,
                        t
                    }
                    function nt(t) {
                        var e = l.createElement("fieldset");
                        try {
                            return !!t(e)
                        } catch (t) {
                            return !1
                        } finally {
                            e.parentNode && e.parentNode.removeChild(e),
                            e = null
                        }
                    }
                    function it(t) {
                        return function(e) {
                            return j(e, "input") && e.type === t
                        }
                    }
                    function rt(t) {
                        return function(e) {
                            return (j(e, "input") || j(e, "button")) && e.type === t
                        }
                    }
                    function ot(t) {
                        return function(e) {
                            return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && J(e) === t : e.disabled === t : "label"in e && e.disabled === t
                        }
                    }
                    function st(t) {
                        return et((function(e) {
                            return e = +e,
                            et((function(n, i) {
                                for (var r, o = t([], n.length, e), s = o.length; s--; )
                                    n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                            }
                            ))
                        }
                        ))
                    }
                    function at(t) {
                        return t && void 0 !== t.getElementsByTagName && t
                    }
                    function lt(t) {
                        var n, i = t ? t.ownerDocument || t : P;
                        return i != l && 9 === i.nodeType && i.documentElement ? (c = (l = i).documentElement,
                        h = !E.isXMLDoc(l),
                        p = c.matches || c.webkitMatchesSelector || c.msMatchesSelector,
                        c.msMatchesSelector && P != l && (n = l.defaultView) && n.top !== n && n.addEventListener("unload", Q),
                        m.getById = nt((function(t) {
                            return c.appendChild(t).id = E.expando,
                            !l.getElementsByName || !l.getElementsByName(E.expando).length
                        }
                        )),
                        m.disconnectedMatch = nt((function(t) {
                            return p.call(t, "*")
                        }
                        )),
                        m.scope = nt((function() {
                            return l.querySelectorAll(":scope")
                        }
                        )),
                        m.cssHas = nt((function() {
                            try {
                                return l.querySelector(":has(*,:jqfake)"),
                                !1
                            } catch (t) {
                                return !0
                            }
                        }
                        )),
                        m.getById ? (e.filter.ID = function(t) {
                            var e = t.replace(Y, K);
                            return function(t) {
                                return t.getAttribute("id") === e
                            }
                        }
                        ,
                        e.find.ID = function(t, e) {
                            if (void 0 !== e.getElementById && h) {
                                var n = e.getElementById(t);
                                return n ? [n] : []
                            }
                        }
                        ) : (e.filter.ID = function(t) {
                            var e = t.replace(Y, K);
                            return function(t) {
                                var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                        }
                        ,
                        e.find.ID = function(t, e) {
                            if (void 0 !== e.getElementById && h) {
                                var n, i, r, o = e.getElementById(t);
                                if (o) {
                                    if ((n = o.getAttributeNode("id")) && n.value === t)
                                        return [o];
                                    for (r = e.getElementsByName(t),
                                    i = 0; o = r[i++]; )
                                        if ((n = o.getAttributeNode("id")) && n.value === t)
                                            return [o]
                                }
                                return []
                            }
                        }
                        ),
                        e.find.TAG = function(t, e) {
                            return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : e.querySelectorAll(t)
                        }
                        ,
                        e.find.CLASS = function(t, e) {
                            if (void 0 !== e.getElementsByClassName && h)
                                return e.getElementsByClassName(t)
                        }
                        ,
                        d = [],
                        nt((function(t) {
                            var e;
                            c.appendChild(t).innerHTML = "<a id='" + v + "' href='' disabled='disabled'></a><select id='" + v + "-\r\\' disabled='disabled'><option selected=''></option></select>",
                            t.querySelectorAll("[selected]").length || d.push("\\[" + I + "*(?:value|" + k + ")"),
                            t.querySelectorAll("[id~=" + v + "-]").length || d.push("~="),
                            t.querySelectorAll("a#" + v + "+*").length || d.push(".#.+[+~]"),
                            t.querySelectorAll(":checked").length || d.push(":checked"),
                            (e = l.createElement("input")).setAttribute("type", "hidden"),
                            t.appendChild(e).setAttribute("name", "D"),
                            c.appendChild(t).disabled = !0,
                            2 !== t.querySelectorAll(":disabled").length && d.push(":enabled", ":disabled"),
                            (e = l.createElement("input")).setAttribute("name", ""),
                            t.appendChild(e),
                            t.querySelectorAll("[name='']").length || d.push("\\[" + I + "*name" + I + "*=" + I + "*(?:''|\"\")")
                        }
                        )),
                        m.cssHas || d.push(":has"),
                        d = d.length && new RegExp(d.join("|")),
                        S = function(t, e) {
                            if (t === e)
                                return s = !0,
                                0;
                            var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return n || (1 & (n = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !m.sortDetached && e.compareDocumentPosition(t) === n ? t === l || t.ownerDocument == P && Z.contains(P, t) ? -1 : e === l || e.ownerDocument == P && Z.contains(P, e) ? 1 : r ? u.call(r, t) - u.call(r, e) : 0 : 4 & n ? -1 : 1)
                        }
                        ,
                        l) : l
                    }
                    for (t in Z.matches = function(t, e) {
                        return Z(t, null, null, e)
                    }
                    ,
                    Z.matchesSelector = function(t, e) {
                        if (lt(t),
                        h && !C[e + " "] && (!d || !d.test(e)))
                            try {
                                var n = p.call(t, e);
                                if (n || m.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                                    return n
                            } catch (t) {
                                C(e, !0)
                            }
                        return Z(e, l, null, [t]).length > 0
                    }
                    ,
                    Z.contains = function(t, e) {
                        return (t.ownerDocument || t) != l && lt(t),
                        E.contains(t, e)
                    }
                    ,
                    Z.attr = function(t, n) {
                        (t.ownerDocument || t) != l && lt(t);
                        var i = e.attrHandle[n.toLowerCase()]
                          , r = i && f.call(e.attrHandle, n.toLowerCase()) ? i(t, n, !h) : void 0;
                        return void 0 !== r ? r : t.getAttribute(n)
                    }
                    ,
                    Z.error = function(t) {
                        throw new Error("Syntax error, unrecognized expression: " + t)
                    }
                    ,
                    E.uniqueSort = function(t) {
                        var e, n = [], i = 0, o = 0;
                        if (s = !m.sortStable,
                        r = !m.sortStable && a.call(t, 0),
                        A.call(t, S),
                        s) {
                            for (; e = t[o++]; )
                                e === t[o] && (i = n.push(o));
                            for (; i--; )
                                D.call(t, n[i], 1)
                        }
                        return r = null,
                        t
                    }
                    ,
                    E.fn.uniqueSort = function() {
                        return this.pushStack(E.uniqueSort(a.apply(this)))
                    }
                    ,
                    e = E.expr = {
                        cacheLength: 50,
                        createPseudo: et,
                        match: z,
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
                            ATTR: function(t) {
                                return t[1] = t[1].replace(Y, K),
                                t[3] = (t[3] || t[4] || t[5] || "").replace(Y, K),
                                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                                t.slice(0, 4)
                            },
                            CHILD: function(t) {
                                return t[1] = t[1].toLowerCase(),
                                "nth" === t[1].slice(0, 3) ? (t[3] || Z.error(t[0]),
                                t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                                t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && Z.error(t[0]),
                                t
                            },
                            PSEUDO: function(t) {
                                var e, n = !t[6] && t[2];
                                return z.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && B.test(n) && (e = ut(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                                t[2] = n.slice(0, e)),
                                t.slice(0, 3))
                            }
                        },
                        filter: {
                            TAG: function(t) {
                                var e = t.replace(Y, K).toLowerCase();
                                return "*" === t ? function() {
                                    return !0
                                }
                                : function(t) {
                                    return j(t, e)
                                }
                            },
                            CLASS: function(t) {
                                var e = x[t + " "];
                                return e || (e = new RegExp("(^|" + I + ")" + t + "(" + I + "|$)")) && x(t, (function(t) {
                                    return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                }
                                ))
                            },
                            ATTR: function(t, e, n) {
                                return function(i) {
                                    var r = Z.attr(i, t);
                                    return null == r ? "!=" === e : !e || (r += "",
                                    "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(L, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                }
                            },
                            CHILD: function(t, e, n, i, r) {
                                var o = "nth" !== t.slice(0, 3)
                                  , s = "last" !== t.slice(-4)
                                  , a = "of-type" === e;
                                return 1 === i && 0 === r ? function(t) {
                                    return !!t.parentNode
                                }
                                : function(e, n, l) {
                                    var c, u, h, d, f, p = o !== s ? "nextSibling" : "previousSibling", g = e.parentNode, m = a && e.nodeName.toLowerCase(), b = !l && !a, x = !1;
                                    if (g) {
                                        if (o) {
                                            for (; p; ) {
                                                for (h = e; h = h[p]; )
                                                    if (a ? j(h, m) : 1 === h.nodeType)
                                                        return !1;
                                                f = p = "only" === t && !f && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (f = [s ? g.firstChild : g.lastChild],
                                        s && b) {
                                            for (x = (d = (c = (u = g[v] || (g[v] = {}))[t] || [])[0] === y && c[1]) && c[2],
                                            h = d && g.childNodes[d]; h = ++d && h && h[p] || (x = d = 0) || f.pop(); )
                                                if (1 === h.nodeType && ++x && h === e) {
                                                    u[t] = [y, d, x];
                                                    break
                                                }
                                        } else if (b && (x = d = (c = (u = e[v] || (e[v] = {}))[t] || [])[0] === y && c[1]),
                                        !1 === x)
                                            for (; (h = ++d && h && h[p] || (x = d = 0) || f.pop()) && (!(a ? j(h, m) : 1 === h.nodeType) || !++x || (b && ((u = h[v] || (h[v] = {}))[t] = [y, x]),
                                            h !== e)); )
                                                ;
                                        return (x -= r) === i || x % i == 0 && x / i >= 0
                                    }
                                }
                            },
                            PSEUDO: function(t, n) {
                                var i, r = e.pseudos[t] || e.setFilters[t.toLowerCase()] || Z.error("unsupported pseudo: " + t);
                                return r[v] ? r(n) : r.length > 1 ? (i = [t, t, "", n],
                                e.setFilters.hasOwnProperty(t.toLowerCase()) ? et((function(t, e) {
                                    for (var i, o = r(t, n), s = o.length; s--; )
                                        t[i = u.call(t, o[s])] = !(e[i] = o[s])
                                }
                                )) : function(t) {
                                    return r(t, 0, i)
                                }
                                ) : r
                            }
                        },
                        pseudos: {
                            not: et((function(t) {
                                var e = []
                                  , n = []
                                  , i = vt(t.replace(O, "$1"));
                                return i[v] ? et((function(t, e, n, r) {
                                    for (var o, s = i(t, null, r, []), a = t.length; a--; )
                                        (o = s[a]) && (t[a] = !(e[a] = o))
                                }
                                )) : function(t, r, o) {
                                    return e[0] = t,
                                    i(e, null, o, n),
                                    e[0] = null,
                                    !n.pop()
                                }
                            }
                            )),
                            has: et((function(t) {
                                return function(e) {
                                    return Z(t, e).length > 0
                                }
                            }
                            )),
                            contains: et((function(t) {
                                return t = t.replace(Y, K),
                                function(e) {
                                    return (e.textContent || E.text(e)).indexOf(t) > -1
                                }
                            }
                            )),
                            lang: et((function(t) {
                                return W.test(t || "") || Z.error("unsupported lang: " + t),
                                t = t.replace(Y, K).toLowerCase(),
                                function(e) {
                                    var n;
                                    do {
                                        if (n = h ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                            return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                            }
                            )),
                            target: function(t) {
                                var e = i.location && i.location.hash;
                                return e && e.slice(1) === t.id
                            },
                            root: function(t) {
                                return t === c
                            },
                            focus: function(t) {
                                return t === function() {
                                    try {
                                        return l.activeElement
                                    } catch (t) {}
                                }() && l.hasFocus() && !!(t.type || t.href || ~t.tabIndex)
                            },
                            enabled: ot(!1),
                            disabled: ot(!0),
                            checked: function(t) {
                                return j(t, "input") && !!t.checked || j(t, "option") && !!t.selected
                            },
                            selected: function(t) {
                                return t.parentNode && t.parentNode.selectedIndex,
                                !0 === t.selected
                            },
                            empty: function(t) {
                                for (t = t.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType < 6)
                                        return !1;
                                return !0
                            },
                            parent: function(t) {
                                return !e.pseudos.empty(t)
                            },
                            header: function(t) {
                                return V.test(t.nodeName)
                            },
                            input: function(t) {
                                return U.test(t.nodeName)
                            },
                            button: function(t) {
                                return j(t, "input") && "button" === t.type || j(t, "button")
                            },
                            text: function(t) {
                                var e;
                                return j(t, "input") && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                            },
                            first: st((function() {
                                return [0]
                            }
                            )),
                            last: st((function(t, e) {
                                return [e - 1]
                            }
                            )),
                            eq: st((function(t, e, n) {
                                return [n < 0 ? n + e : n]
                            }
                            )),
                            even: st((function(t, e) {
                                for (var n = 0; n < e; n += 2)
                                    t.push(n);
                                return t
                            }
                            )),
                            odd: st((function(t, e) {
                                for (var n = 1; n < e; n += 2)
                                    t.push(n);
                                return t
                            }
                            )),
                            lt: st((function(t, e, n) {
                                var i;
                                for (i = n < 0 ? n + e : n > e ? e : n; --i >= 0; )
                                    t.push(i);
                                return t
                            }
                            )),
                            gt: st((function(t, e, n) {
                                for (var i = n < 0 ? n + e : n; ++i < e; )
                                    t.push(i);
                                return t
                            }
                            ))
                        }
                    },
                    e.pseudos.nth = e.pseudos.eq,
                    {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    })
                        e.pseudos[t] = it(t);
                    for (t in {
                        submit: !0,
                        reset: !0
                    })
                        e.pseudos[t] = rt(t);
                    function ct() {}
                    function ut(t, n) {
                        var i, r, o, s, a, l, c, u = w[t + " "];
                        if (u)
                            return n ? 0 : u.slice(0);
                        for (a = t,
                        l = [],
                        c = e.preFilter; a; ) {
                            for (s in i && !(r = F.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                            l.push(o = [])),
                            i = !1,
                            (r = M.exec(a)) && (i = r.shift(),
                            o.push({
                                value: i,
                                type: r[0].replace(O, " ")
                            }),
                            a = a.slice(i.length)),
                            e.filter)
                                !(r = z[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(),
                                o.push({
                                    value: i,
                                    type: s,
                                    matches: r
                                }),
                                a = a.slice(i.length));
                            if (!i)
                                break
                        }
                        return n ? a.length : a ? Z.error(t) : w(t, l).slice(0)
                    }
                    function ht(t) {
                        for (var e = 0, n = t.length, i = ""; e < n; e++)
                            i += t[e].value;
                        return i
                    }
                    function dt(t, e, n) {
                        var i = e.dir
                          , r = e.next
                          , o = r || i
                          , s = n && "parentNode" === o
                          , a = b++;
                        return e.first ? function(e, n, r) {
                            for (; e = e[i]; )
                                if (1 === e.nodeType || s)
                                    return t(e, n, r);
                            return !1
                        }
                        : function(e, n, l) {
                            var c, u, h = [y, a];
                            if (l) {
                                for (; e = e[i]; )
                                    if ((1 === e.nodeType || s) && t(e, n, l))
                                        return !0
                            } else
                                for (; e = e[i]; )
                                    if (1 === e.nodeType || s)
                                        if (u = e[v] || (e[v] = {}),
                                        r && j(e, r))
                                            e = e[i] || e;
                                        else {
                                            if ((c = u[o]) && c[0] === y && c[1] === a)
                                                return h[2] = c[2];
                                            if (u[o] = h,
                                            h[2] = t(e, n, l))
                                                return !0
                                        }
                            return !1
                        }
                    }
                    function ft(t) {
                        return t.length > 1 ? function(e, n, i) {
                            for (var r = t.length; r--; )
                                if (!t[r](e, n, i))
                                    return !1;
                            return !0
                        }
                        : t[0]
                    }
                    function pt(t, e, n, i, r) {
                        for (var o, s = [], a = 0, l = t.length, c = null != e; a < l; a++)
                            (o = t[a]) && (n && !n(o, i, r) || (s.push(o),
                            c && e.push(a)));
                        return s
                    }
                    function gt(t, e, n, i, r, o) {
                        return i && !i[v] && (i = gt(i)),
                        r && !r[v] && (r = gt(r, o)),
                        et((function(o, s, a, l) {
                            var c, h, d, f, p = [], m = [], v = s.length, y = o || function(t, e, n) {
                                for (var i = 0, r = e.length; i < r; i++)
                                    Z(t, e[i], n);
                                return n
                            }(e || "*", a.nodeType ? [a] : a, []), b = !t || !o && e ? y : pt(y, p, t, a, l);
                            if (n ? n(b, f = r || (o ? t : v || i) ? [] : s, a, l) : f = b,
                            i)
                                for (c = pt(f, m),
                                i(c, [], a, l),
                                h = c.length; h--; )
                                    (d = c[h]) && (f[m[h]] = !(b[m[h]] = d));
                            if (o) {
                                if (r || t) {
                                    if (r) {
                                        for (c = [],
                                        h = f.length; h--; )
                                            (d = f[h]) && c.push(b[h] = d);
                                        r(null, f = [], c, l)
                                    }
                                    for (h = f.length; h--; )
                                        (d = f[h]) && (c = r ? u.call(o, d) : p[h]) > -1 && (o[c] = !(s[c] = d))
                                }
                            } else
                                f = pt(f === s ? f.splice(v, f.length) : f),
                                r ? r(null, s, f, l) : g.apply(s, f)
                        }
                        ))
                    }
                    function mt(t) {
                        for (var i, r, o, s = t.length, a = e.relative[t[0].type], l = a || e.relative[" "], c = a ? 1 : 0, h = dt((function(t) {
                            return t === i
                        }
                        ), l, !0), d = dt((function(t) {
                            return u.call(i, t) > -1
                        }
                        ), l, !0), f = [function(t, e, r) {
                            var o = !a && (r || e != n) || ((i = e).nodeType ? h(t, e, r) : d(t, e, r));
                            return i = null,
                            o
                        }
                        ]; c < s; c++)
                            if (r = e.relative[t[c].type])
                                f = [dt(ft(f), r)];
                            else {
                                if ((r = e.filter[t[c].type].apply(null, t[c].matches))[v]) {
                                    for (o = ++c; o < s && !e.relative[t[o].type]; o++)
                                        ;
                                    return gt(c > 1 && ft(f), c > 1 && ht(t.slice(0, c - 1).concat({
                                        value: " " === t[c - 2].type ? "*" : ""
                                    })).replace(O, "$1"), r, c < o && mt(t.slice(c, o)), o < s && mt(t = t.slice(o)), o < s && ht(t))
                                }
                                f.push(r)
                            }
                        return ft(f)
                    }
                    function vt(t, i) {
                        var r, o = [], s = [], a = T[t + " "];
                        if (!a) {
                            for (i || (i = ut(t)),
                            r = i.length; r--; )
                                (a = mt(i[r]))[v] ? o.push(a) : s.push(a);
                            a = T(t, function(t, i) {
                                var r = i.length > 0
                                  , o = t.length > 0
                                  , s = function(s, a, c, u, d) {
                                    var f, p, m, v = 0, b = "0", x = s && [], w = [], T = n, C = s || o && e.find.TAG("*", d), S = y += null == T ? 1 : Math.random() || .1, k = C.length;
                                    for (d && (n = a == l || a || d); b !== k && null != (f = C[b]); b++) {
                                        if (o && f) {
                                            for (p = 0,
                                            a || f.ownerDocument == l || (lt(f),
                                            c = !h); m = t[p++]; )
                                                if (m(f, a || l, c)) {
                                                    g.call(u, f);
                                                    break
                                                }
                                            d && (y = S)
                                        }
                                        r && ((f = !m && f) && v--,
                                        s && x.push(f))
                                    }
                                    if (v += b,
                                    r && b !== v) {
                                        for (p = 0; m = i[p++]; )
                                            m(x, w, a, c);
                                        if (s) {
                                            if (v > 0)
                                                for (; b--; )
                                                    x[b] || w[b] || (w[b] = _.call(u));
                                            w = pt(w)
                                        }
                                        g.apply(u, w),
                                        d && !s && w.length > 0 && v + i.length > 1 && E.uniqueSort(u)
                                    }
                                    return d && (y = S,
                                    n = T),
                                    x
                                };
                                return r ? et(s) : s
                            }(s, o)),
                            a.selector = t
                        }
                        return a
                    }
                    function yt(t, n, i, r) {
                        var o, s, a, l, c, u = "function" == typeof t && t, d = !r && ut(t = u.selector || t);
                        if (i = i || [],
                        1 === d.length) {
                            if ((s = d[0] = d[0].slice(0)).length > 2 && "ID" === (a = s[0]).type && 9 === n.nodeType && h && e.relative[s[1].type]) {
                                if (!(n = (e.find.ID(a.matches[0].replace(Y, K), n) || [])[0]))
                                    return i;
                                u && (n = n.parentNode),
                                t = t.slice(s.shift().value.length)
                            }
                            for (o = z.needsContext.test(t) ? 0 : s.length; o-- && (a = s[o],
                            !e.relative[l = a.type]); )
                                if ((c = e.find[l]) && (r = c(a.matches[0].replace(Y, K), X.test(s[0].type) && at(n.parentNode) || n))) {
                                    if (s.splice(o, 1),
                                    !(t = r.length && ht(s)))
                                        return g.apply(i, r),
                                        i;
                                    break
                                }
                        }
                        return (u || vt(t, d))(r, n, !h, i, !n || X.test(t) && at(n.parentNode) || n),
                        i
                    }
                    ct.prototype = e.filters = e.pseudos,
                    e.setFilters = new ct,
                    m.sortStable = v.split("").sort(S).join("") === v,
                    lt(),
                    m.sortDetached = nt((function(t) {
                        return 1 & t.compareDocumentPosition(l.createElement("fieldset"))
                    }
                    )),
                    E.find = Z,
                    E.expr[":"] = E.expr.pseudos,
                    E.unique = E.uniqueSort,
                    Z.compile = vt,
                    Z.select = yt,
                    Z.setDocument = lt,
                    Z.tokenize = ut,
                    Z.escape = E.escapeSelector,
                    Z.getText = E.text,
                    Z.isXML = E.isXMLDoc,
                    Z.selectors = E.expr,
                    Z.support = E.support,
                    Z.uniqueSort = E.uniqueSort
                }();
                var $ = function(t, e, n) {
                    for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                        if (1 === t.nodeType) {
                            if (r && E(t).is(n))
                                break;
                            i.push(t)
                        }
                    return i
                }
                  , L = function(t, e) {
                    for (var n = []; t; t = t.nextSibling)
                        1 === t.nodeType && t !== e && n.push(t);
                    return n
                }
                  , F = E.expr.match.needsContext
                  , M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function q(t, e, n) {
                    return v(e) ? E.grep(t, (function(t, i) {
                        return !!e.call(t, i, t) !== n
                    }
                    )) : e.nodeType ? E.grep(t, (function(t) {
                        return t === e !== n
                    }
                    )) : "string" != typeof e ? E.grep(t, (function(t) {
                        return u.call(e, t) > -1 !== n
                    }
                    )) : E.filter(e, t, n)
                }
                E.filter = function(t, e, n) {
                    var i = e[0];
                    return n && (t = ":not(" + t + ")"),
                    1 === e.length && 1 === i.nodeType ? E.find.matchesSelector(i, t) ? [i] : [] : E.find.matches(t, E.grep(e, (function(t) {
                        return 1 === t.nodeType
                    }
                    )))
                }
                ,
                E.fn.extend({
                    find: function(t) {
                        var e, n, i = this.length, r = this;
                        if ("string" != typeof t)
                            return this.pushStack(E(t).filter((function() {
                                for (e = 0; e < i; e++)
                                    if (E.contains(r[e], this))
                                        return !0
                            }
                            )));
                        for (n = this.pushStack([]),
                        e = 0; e < i; e++)
                            E.find(t, r[e], n);
                        return i > 1 ? E.uniqueSort(n) : n
                    },
                    filter: function(t) {
                        return this.pushStack(q(this, t || [], !1))
                    },
                    not: function(t) {
                        return this.pushStack(q(this, t || [], !0))
                    },
                    is: function(t) {
                        return !!q(this, "string" == typeof t && F.test(t) ? E(t) : t || [], !1).length
                    }
                });
                var B, W = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                (E.fn.init = function(t, e, n) {
                    var i, r;
                    if (!t)
                        return this;
                    if (n = n || B,
                    "string" == typeof t) {
                        if (!(i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : W.exec(t)) || !i[1] && e)
                            return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                        if (i[1]) {
                            if (e = e instanceof E ? e[0] : e,
                            E.merge(this, E.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : b, !0)),
                            M.test(i[1]) && E.isPlainObject(e))
                                for (i in e)
                                    v(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                            return this
                        }
                        return (r = b.getElementById(i[2])) && (this[0] = r,
                        this.length = 1),
                        this
                    }
                    return t.nodeType ? (this[0] = t,
                    this.length = 1,
                    this) : v(t) ? void 0 !== n.ready ? n.ready(t) : t(E) : E.makeArray(t, this)
                }
                ).prototype = E.fn,
                B = E(b);
                var z = /^(?:parents|prev(?:Until|All))/
                  , U = {
                    children: !0,
                    contents: !0,
                    next: !0,
                    prev: !0
                };
                function V(t, e) {
                    for (; (t = t[e]) && 1 !== t.nodeType; )
                        ;
                    return t
                }
                E.fn.extend({
                    has: function(t) {
                        var e = E(t, this)
                          , n = e.length;
                        return this.filter((function() {
                            for (var t = 0; t < n; t++)
                                if (E.contains(this, e[t]))
                                    return !0
                        }
                        ))
                    },
                    closest: function(t, e) {
                        var n, i = 0, r = this.length, o = [], s = "string" != typeof t && E(t);
                        if (!F.test(t))
                            for (; i < r; i++)
                                for (n = this[i]; n && n !== e; n = n.parentNode)
                                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, t))) {
                                        o.push(n);
                                        break
                                    }
                        return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o)
                    },
                    index: function(t) {
                        return t ? "string" == typeof t ? u.call(E(t), this[0]) : u.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(t, e) {
                        return this.pushStack(E.uniqueSort(E.merge(this.get(), E(t, e))))
                    },
                    addBack: function(t) {
                        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                    }
                }),
                E.each({
                    parent: function(t) {
                        var e = t.parentNode;
                        return e && 11 !== e.nodeType ? e : null
                    },
                    parents: function(t) {
                        return $(t, "parentNode")
                    },
                    parentsUntil: function(t, e, n) {
                        return $(t, "parentNode", n)
                    },
                    next: function(t) {
                        return V(t, "nextSibling")
                    },
                    prev: function(t) {
                        return V(t, "previousSibling")
                    },
                    nextAll: function(t) {
                        return $(t, "nextSibling")
                    },
                    prevAll: function(t) {
                        return $(t, "previousSibling")
                    },
                    nextUntil: function(t, e, n) {
                        return $(t, "nextSibling", n)
                    },
                    prevUntil: function(t, e, n) {
                        return $(t, "previousSibling", n)
                    },
                    siblings: function(t) {
                        return L((t.parentNode || {}).firstChild, t)
                    },
                    children: function(t) {
                        return L(t.firstChild)
                    },
                    contents: function(t) {
                        return null != t.contentDocument && s(t.contentDocument) ? t.contentDocument : (j(t, "template") && (t = t.content || t),
                        E.merge([], t.childNodes))
                    }
                }, (function(t, e) {
                    E.fn[t] = function(n, i) {
                        var r = E.map(this, e, n);
                        return "Until" !== t.slice(-5) && (i = n),
                        i && "string" == typeof i && (r = E.filter(i, r)),
                        this.length > 1 && (U[t] || E.uniqueSort(r),
                        z.test(t) && r.reverse()),
                        this.pushStack(r)
                    }
                }
                ));
                var G = /[^\x20\t\r\n\f]+/g;
                function X(t) {
                    return t
                }
                function Y(t) {
                    throw t
                }
                function K(t, e, n, i) {
                    var r;
                    try {
                        t && v(r = t.promise) ? r.call(t).done(e).fail(n) : t && v(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
                    } catch (t) {
                        n.apply(void 0, [t])
                    }
                }
                E.Callbacks = function(t) {
                    t = "string" == typeof t ? function(t) {
                        var e = {};
                        return E.each(t.match(G) || [], (function(t, n) {
                            e[n] = !0
                        }
                        )),
                        e
                    }(t) : E.extend({}, t);
                    var e, n, i, r, o = [], s = [], a = -1, l = function() {
                        for (r = r || t.once,
                        i = e = !0; s.length; a = -1)
                            for (n = s.shift(); ++a < o.length; )
                                !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && (a = o.length,
                                n = !1);
                        t.memory || (n = !1),
                        e = !1,
                        r && (o = n ? [] : "")
                    }, c = {
                        add: function() {
                            return o && (n && !e && (a = o.length - 1,
                            s.push(n)),
                            function e(n) {
                                E.each(n, (function(n, i) {
                                    v(i) ? t.unique && c.has(i) || o.push(i) : i && i.length && "string" !== T(i) && e(i)
                                }
                                ))
                            }(arguments),
                            n && !e && l()),
                            this
                        },
                        remove: function() {
                            return E.each(arguments, (function(t, e) {
                                for (var n; (n = E.inArray(e, o, n)) > -1; )
                                    o.splice(n, 1),
                                    n <= a && a--
                            }
                            )),
                            this
                        },
                        has: function(t) {
                            return t ? E.inArray(t, o) > -1 : o.length > 0
                        },
                        empty: function() {
                            return o && (o = []),
                            this
                        },
                        disable: function() {
                            return r = s = [],
                            o = n = "",
                            this
                        },
                        disabled: function() {
                            return !o
                        },
                        lock: function() {
                            return r = s = [],
                            n || e || (o = n = ""),
                            this
                        },
                        locked: function() {
                            return !!r
                        },
                        fireWith: function(t, n) {
                            return r || (n = [t, (n = n || []).slice ? n.slice() : n],
                            s.push(n),
                            e || l()),
                            this
                        },
                        fire: function() {
                            return c.fireWith(this, arguments),
                            this
                        },
                        fired: function() {
                            return !!i
                        }
                    };
                    return c
                }
                ,
                E.extend({
                    Deferred: function(t) {
                        var e = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]]
                          , n = "pending"
                          , r = {
                            state: function() {
                                return n
                            },
                            always: function() {
                                return o.done(arguments).fail(arguments),
                                this
                            },
                            catch: function(t) {
                                return r.then(null, t)
                            },
                            pipe: function() {
                                var t = arguments;
                                return E.Deferred((function(n) {
                                    E.each(e, (function(e, i) {
                                        var r = v(t[i[4]]) && t[i[4]];
                                        o[i[1]]((function() {
                                            var t = r && r.apply(this, arguments);
                                            t && v(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [t] : arguments)
                                        }
                                        ))
                                    }
                                    )),
                                    t = null
                                }
                                )).promise()
                            },
                            then: function(t, n, r) {
                                var o = 0;
                                function s(t, e, n, r) {
                                    return function() {
                                        var a = this
                                          , l = arguments
                                          , c = function() {
                                            var i, c;
                                            if (!(t < o)) {
                                                if ((i = n.apply(a, l)) === e.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                c = i && ("object" == typeof i || "function" == typeof i) && i.then,
                                                v(c) ? r ? c.call(i, s(o, e, X, r), s(o, e, Y, r)) : (o++,
                                                c.call(i, s(o, e, X, r), s(o, e, Y, r), s(o, e, X, e.notifyWith))) : (n !== X && (a = void 0,
                                                l = [i]),
                                                (r || e.resolveWith)(a, l))
                                            }
                                        }
                                          , u = r ? c : function() {
                                            try {
                                                c()
                                            } catch (i) {
                                                E.Deferred.exceptionHook && E.Deferred.exceptionHook(i, u.error),
                                                t + 1 >= o && (n !== Y && (a = void 0,
                                                l = [i]),
                                                e.rejectWith(a, l))
                                            }
                                        }
                                        ;
                                        t ? u() : (E.Deferred.getErrorHook ? u.error = E.Deferred.getErrorHook() : E.Deferred.getStackHook && (u.error = E.Deferred.getStackHook()),
                                        i.setTimeout(u))
                                    }
                                }
                                return E.Deferred((function(i) {
                                    e[0][3].add(s(0, i, v(r) ? r : X, i.notifyWith)),
                                    e[1][3].add(s(0, i, v(t) ? t : X)),
                                    e[2][3].add(s(0, i, v(n) ? n : Y))
                                }
                                )).promise()
                            },
                            promise: function(t) {
                                return null != t ? E.extend(t, r) : r
                            }
                        }
                          , o = {};
                        return E.each(e, (function(t, i) {
                            var s = i[2]
                              , a = i[5];
                            r[i[1]] = s.add,
                            a && s.add((function() {
                                n = a
                            }
                            ), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock),
                            s.add(i[3].fire),
                            o[i[0]] = function() {
                                return o[i[0] + "With"](this === o ? void 0 : this, arguments),
                                this
                            }
                            ,
                            o[i[0] + "With"] = s.fireWith
                        }
                        )),
                        r.promise(o),
                        t && t.call(o, o),
                        o
                    },
                    when: function(t) {
                        var e = arguments.length
                          , n = e
                          , i = Array(n)
                          , r = a.call(arguments)
                          , o = E.Deferred()
                          , s = function(t) {
                            return function(n) {
                                i[t] = this,
                                r[t] = arguments.length > 1 ? a.call(arguments) : n,
                                --e || o.resolveWith(i, r)
                            }
                        };
                        if (e <= 1 && (K(t, o.done(s(n)).resolve, o.reject, !e),
                        "pending" === o.state() || v(r[n] && r[n].then)))
                            return o.then();
                        for (; n--; )
                            K(r[n], s(n), o.reject);
                        return o.promise()
                    }
                });
                var Q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                E.Deferred.exceptionHook = function(t, e) {
                    i.console && i.console.warn && t && Q.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
                }
                ,
                E.readyException = function(t) {
                    i.setTimeout((function() {
                        throw t
                    }
                    ))
                }
                ;
                var J = E.Deferred();
                function Z() {
                    b.removeEventListener("DOMContentLoaded", Z),
                    i.removeEventListener("load", Z),
                    E.ready()
                }
                E.fn.ready = function(t) {
                    return J.then(t).catch((function(t) {
                        E.readyException(t)
                    }
                    )),
                    this
                }
                ,
                E.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function(t) {
                        (!0 === t ? --E.readyWait : E.isReady) || (E.isReady = !0,
                        !0 !== t && --E.readyWait > 0 || J.resolveWith(b, [E]))
                    }
                }),
                E.ready.then = J.then,
                "complete" === b.readyState || "loading" !== b.readyState && !b.documentElement.doScroll ? i.setTimeout(E.ready) : (b.addEventListener("DOMContentLoaded", Z),
                i.addEventListener("load", Z));
                var tt = function(t, e, n, i, r, o, s) {
                    var a = 0
                      , l = t.length
                      , c = null == n;
                    if ("object" === T(n))
                        for (a in r = !0,
                        n)
                            tt(t, e, a, n[a], !0, o, s);
                    else if (void 0 !== i && (r = !0,
                    v(i) || (s = !0),
                    c && (s ? (e.call(t, i),
                    e = null) : (c = e,
                    e = function(t, e, n) {
                        return c.call(E(t), n)
                    }
                    )),
                    e))
                        for (; a < l; a++)
                            e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
                    return r ? t : c ? e.call(t) : l ? e(t[0], n) : o
                }
                  , et = /^-ms-/
                  , nt = /-([a-z])/g;
                function it(t, e) {
                    return e.toUpperCase()
                }
                function rt(t) {
                    return t.replace(et, "ms-").replace(nt, it)
                }
                var ot = function(t) {
                    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
                };
                function st() {
                    this.expando = E.expando + st.uid++
                }
                st.uid = 1,
                st.prototype = {
                    cache: function(t) {
                        var e = t[this.expando];
                        return e || (e = {},
                        ot(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                            value: e,
                            configurable: !0
                        }))),
                        e
                    },
                    set: function(t, e, n) {
                        var i, r = this.cache(t);
                        if ("string" == typeof e)
                            r[rt(e)] = n;
                        else
                            for (i in e)
                                r[rt(i)] = e[i];
                        return r
                    },
                    get: function(t, e) {
                        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][rt(e)]
                    },
                    access: function(t, e, n) {
                        return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
                        void 0 !== n ? n : e)
                    },
                    remove: function(t, e) {
                        var n, i = t[this.expando];
                        if (void 0 !== i) {
                            if (void 0 !== e) {
                                n = (e = Array.isArray(e) ? e.map(rt) : (e = rt(e))in i ? [e] : e.match(G) || []).length;
                                for (; n--; )
                                    delete i[e[n]]
                            }
                            (void 0 === e || E.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                        }
                    },
                    hasData: function(t) {
                        var e = t[this.expando];
                        return void 0 !== e && !E.isEmptyObject(e)
                    }
                };
                var at = new st
                  , lt = new st
                  , ct = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
                  , ut = /[A-Z]/g;
                function ht(t, e, n) {
                    var i;
                    if (void 0 === n && 1 === t.nodeType)
                        if (i = "data-" + e.replace(ut, "-$&").toLowerCase(),
                        "string" == typeof (n = t.getAttribute(i))) {
                            try {
                                n = function(t) {
                                    return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : ct.test(t) ? JSON.parse(t) : t)
                                }(n)
                            } catch (t) {}
                            lt.set(t, e, n)
                        } else
                            n = void 0;
                    return n
                }
                E.extend({
                    hasData: function(t) {
                        return lt.hasData(t) || at.hasData(t)
                    },
                    data: function(t, e, n) {
                        return lt.access(t, e, n)
                    },
                    removeData: function(t, e) {
                        lt.remove(t, e)
                    },
                    _data: function(t, e, n) {
                        return at.access(t, e, n)
                    },
                    _removeData: function(t, e) {
                        at.remove(t, e)
                    }
                }),
                E.fn.extend({
                    data: function(t, e) {
                        var n, i, r, o = this[0], s = o && o.attributes;
                        if (void 0 === t) {
                            if (this.length && (r = lt.get(o),
                            1 === o.nodeType && !at.get(o, "hasDataAttrs"))) {
                                for (n = s.length; n--; )
                                    s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = rt(i.slice(5)),
                                    ht(o, i, r[i]));
                                at.set(o, "hasDataAttrs", !0)
                            }
                            return r
                        }
                        return "object" == typeof t ? this.each((function() {
                            lt.set(this, t)
                        }
                        )) : tt(this, (function(e) {
                            var n;
                            if (o && void 0 === e)
                                return void 0 !== (n = lt.get(o, t)) || void 0 !== (n = ht(o, t)) ? n : void 0;
                            this.each((function() {
                                lt.set(this, t, e)
                            }
                            ))
                        }
                        ), null, e, arguments.length > 1, null, !0)
                    },
                    removeData: function(t) {
                        return this.each((function() {
                            lt.remove(this, t)
                        }
                        ))
                    }
                }),
                E.extend({
                    queue: function(t, e, n) {
                        var i;
                        if (t)
                            return e = (e || "fx") + "queue",
                            i = at.get(t, e),
                            n && (!i || Array.isArray(n) ? i = at.access(t, e, E.makeArray(n)) : i.push(n)),
                            i || []
                    },
                    dequeue: function(t, e) {
                        e = e || "fx";
                        var n = E.queue(t, e)
                          , i = n.length
                          , r = n.shift()
                          , o = E._queueHooks(t, e);
                        "inprogress" === r && (r = n.shift(),
                        i--),
                        r && ("fx" === e && n.unshift("inprogress"),
                        delete o.stop,
                        r.call(t, (function() {
                            E.dequeue(t, e)
                        }
                        ), o)),
                        !i && o && o.empty.fire()
                    },
                    _queueHooks: function(t, e) {
                        var n = e + "queueHooks";
                        return at.get(t, n) || at.access(t, n, {
                            empty: E.Callbacks("once memory").add((function() {
                                at.remove(t, [e + "queue", n])
                            }
                            ))
                        })
                    }
                }),
                E.fn.extend({
                    queue: function(t, e) {
                        var n = 2;
                        return "string" != typeof t && (e = t,
                        t = "fx",
                        n--),
                        arguments.length < n ? E.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                            var n = E.queue(this, t, e);
                            E._queueHooks(this, t),
                            "fx" === t && "inprogress" !== n[0] && E.dequeue(this, t)
                        }
                        ))
                    },
                    dequeue: function(t) {
                        return this.each((function() {
                            E.dequeue(this, t)
                        }
                        ))
                    },
                    clearQueue: function(t) {
                        return this.queue(t || "fx", [])
                    },
                    promise: function(t, e) {
                        var n, i = 1, r = E.Deferred(), o = this, s = this.length, a = function() {
                            --i || r.resolveWith(o, [o])
                        };
                        for ("string" != typeof t && (e = t,
                        t = void 0),
                        t = t || "fx"; s--; )
                            (n = at.get(o[s], t + "queueHooks")) && n.empty && (i++,
                            n.empty.add(a));
                        return a(),
                        r.promise(e)
                    }
                });
                var dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
                  , ft = new RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$","i")
                  , pt = ["Top", "Right", "Bottom", "Left"]
                  , gt = b.documentElement
                  , mt = function(t) {
                    return E.contains(t.ownerDocument, t)
                }
                  , vt = {
                    composed: !0
                };
                gt.getRootNode && (mt = function(t) {
                    return E.contains(t.ownerDocument, t) || t.getRootNode(vt) === t.ownerDocument
                }
                );
                var yt = function(t, e) {
                    return "none" === (t = e || t).style.display || "" === t.style.display && mt(t) && "none" === E.css(t, "display")
                };
                function bt(t, e, n, i) {
                    var r, o, s = 20, a = i ? function() {
                        return i.cur()
                    }
                    : function() {
                        return E.css(t, e, "")
                    }
                    , l = a(), c = n && n[3] || (E.cssNumber[e] ? "" : "px"), u = t.nodeType && (E.cssNumber[e] || "px" !== c && +l) && ft.exec(E.css(t, e));
                    if (u && u[3] !== c) {
                        for (l /= 2,
                        c = c || u[3],
                        u = +l || 1; s--; )
                            E.style(t, e, u + c),
                            (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0),
                            u /= o;
                        u *= 2,
                        E.style(t, e, u + c),
                        n = n || []
                    }
                    return n && (u = +u || +l || 0,
                    r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
                    i && (i.unit = c,
                    i.start = u,
                    i.end = r)),
                    r
                }
                var xt = {};
                function wt(t) {
                    var e, n = t.ownerDocument, i = t.nodeName, r = xt[i];
                    return r || (e = n.body.appendChild(n.createElement(i)),
                    r = E.css(e, "display"),
                    e.parentNode.removeChild(e),
                    "none" === r && (r = "block"),
                    xt[i] = r,
                    r)
                }
                function Tt(t, e) {
                    for (var n, i, r = [], o = 0, s = t.length; o < s; o++)
                        (i = t[o]).style && (n = i.style.display,
                        e ? ("none" === n && (r[o] = at.get(i, "display") || null,
                        r[o] || (i.style.display = "")),
                        "" === i.style.display && yt(i) && (r[o] = wt(i))) : "none" !== n && (r[o] = "none",
                        at.set(i, "display", n)));
                    for (o = 0; o < s; o++)
                        null != r[o] && (t[o].style.display = r[o]);
                    return t
                }
                E.fn.extend({
                    show: function() {
                        return Tt(this, !0)
                    },
                    hide: function() {
                        return Tt(this)
                    },
                    toggle: function(t) {
                        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                            yt(this) ? E(this).show() : E(this).hide()
                        }
                        ))
                    }
                });
                var Ct, St, Et = /^(?:checkbox|radio)$/i, kt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, jt = /^$|^module$|\/(?:java|ecma)script/i;
                Ct = b.createDocumentFragment().appendChild(b.createElement("div")),
                (St = b.createElement("input")).setAttribute("type", "radio"),
                St.setAttribute("checked", "checked"),
                St.setAttribute("name", "t"),
                Ct.appendChild(St),
                m.checkClone = Ct.cloneNode(!0).cloneNode(!0).lastChild.checked,
                Ct.innerHTML = "<textarea>x</textarea>",
                m.noCloneChecked = !!Ct.cloneNode(!0).lastChild.defaultValue,
                Ct.innerHTML = "<option></option>",
                m.option = !!Ct.lastChild;
                var _t = {
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
                function At(t, e) {
                    var n;
                    return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
                    void 0 === e || e && j(t, e) ? E.merge([t], n) : n
                }
                function Dt(t, e) {
                    for (var n = 0, i = t.length; n < i; n++)
                        at.set(t[n], "globalEval", !e || at.get(e[n], "globalEval"))
                }
                _t.tbody = _t.tfoot = _t.colgroup = _t.caption = _t.thead,
                _t.th = _t.td,
                m.option || (_t.optgroup = _t.option = [1, "<select multiple='multiple'>", "</select>"]);
                var It = /<|&#?\w+;/;
                function Ot(t, e, n, i, r) {
                    for (var o, s, a, l, c, u, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++)
                        if ((o = t[f]) || 0 === o)
                            if ("object" === T(o))
                                E.merge(d, o.nodeType ? [o] : o);
                            else if (It.test(o)) {
                                for (s = s || h.appendChild(e.createElement("div")),
                                a = (kt.exec(o) || ["", ""])[1].toLowerCase(),
                                l = _t[a] || _t._default,
                                s.innerHTML = l[1] + E.htmlPrefilter(o) + l[2],
                                u = l[0]; u--; )
                                    s = s.lastChild;
                                E.merge(d, s.childNodes),
                                (s = h.firstChild).textContent = ""
                            } else
                                d.push(e.createTextNode(o));
                    for (h.textContent = "",
                    f = 0; o = d[f++]; )
                        if (i && E.inArray(o, i) > -1)
                            r && r.push(o);
                        else if (c = mt(o),
                        s = At(h.appendChild(o), "script"),
                        c && Dt(s),
                        n)
                            for (u = 0; o = s[u++]; )
                                jt.test(o.type || "") && n.push(o);
                    return h
                }
                var Nt = /^([^.]*)(?:\.(.+)|)/;
                function Ht() {
                    return !0
                }
                function Pt() {
                    return !1
                }
                function Rt(t, e, n, i, r, o) {
                    var s, a;
                    if ("object" == typeof e) {
                        for (a in "string" != typeof n && (i = i || n,
                        n = void 0),
                        e)
                            Rt(t, a, n, i, e[a], o);
                        return t
                    }
                    if (null == i && null == r ? (r = n,
                    i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
                    i = void 0) : (r = i,
                    i = n,
                    n = void 0)),
                    !1 === r)
                        r = Pt;
                    else if (!r)
                        return t;
                    return 1 === o && (s = r,
                    r = function(t) {
                        return E().off(t),
                        s.apply(this, arguments)
                    }
                    ,
                    r.guid = s.guid || (s.guid = E.guid++)),
                    t.each((function() {
                        E.event.add(this, e, r, i, n)
                    }
                    ))
                }
                function $t(t, e, n) {
                    n ? (at.set(t, e, !1),
                    E.event.add(t, e, {
                        namespace: !1,
                        handler: function(t) {
                            var n, i = at.get(this, e);
                            if (1 & t.isTrigger && this[e]) {
                                if (i)
                                    (E.event.special[e] || {}).delegateType && t.stopPropagation();
                                else if (i = a.call(arguments),
                                at.set(this, e, i),
                                this[e](),
                                n = at.get(this, e),
                                at.set(this, e, !1),
                                i !== n)
                                    return t.stopImmediatePropagation(),
                                    t.preventDefault(),
                                    n
                            } else
                                i && (at.set(this, e, E.event.trigger(i[0], i.slice(1), this)),
                                t.stopPropagation(),
                                t.isImmediatePropagationStopped = Ht)
                        }
                    })) : void 0 === at.get(t, e) && E.event.add(t, e, Ht)
                }
                E.event = {
                    global: {},
                    add: function(t, e, n, i, r) {
                        var o, s, a, l, c, u, h, d, f, p, g, m = at.get(t);
                        if (ot(t))
                            for (n.handler && (n = (o = n).handler,
                            r = o.selector),
                            r && E.find.matchesSelector(gt, r),
                            n.guid || (n.guid = E.guid++),
                            (l = m.events) || (l = m.events = Object.create(null)),
                            (s = m.handle) || (s = m.handle = function(e) {
                                return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                            }
                            ),
                            c = (e = (e || "").match(G) || [""]).length; c--; )
                                f = g = (a = Nt.exec(e[c]) || [])[1],
                                p = (a[2] || "").split(".").sort(),
                                f && (h = E.event.special[f] || {},
                                f = (r ? h.delegateType : h.bindType) || f,
                                h = E.event.special[f] || {},
                                u = E.extend({
                                    type: f,
                                    origType: g,
                                    data: i,
                                    handler: n,
                                    guid: n.guid,
                                    selector: r,
                                    needsContext: r && E.expr.match.needsContext.test(r),
                                    namespace: p.join(".")
                                }, o),
                                (d = l[f]) || ((d = l[f] = []).delegateCount = 0,
                                h.setup && !1 !== h.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(f, s)),
                                h.add && (h.add.call(t, u),
                                u.handler.guid || (u.handler.guid = n.guid)),
                                r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                                E.event.global[f] = !0)
                    },
                    remove: function(t, e, n, i, r) {
                        var o, s, a, l, c, u, h, d, f, p, g, m = at.hasData(t) && at.get(t);
                        if (m && (l = m.events)) {
                            for (c = (e = (e || "").match(G) || [""]).length; c--; )
                                if (f = g = (a = Nt.exec(e[c]) || [])[1],
                                p = (a[2] || "").split(".").sort(),
                                f) {
                                    for (h = E.event.special[f] || {},
                                    d = l[f = (i ? h.delegateType : h.bindType) || f] || [],
                                    a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                    s = o = d.length; o--; )
                                        u = d[o],
                                        !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(o, 1),
                                        u.selector && d.delegateCount--,
                                        h.remove && h.remove.call(t, u));
                                    s && !d.length && (h.teardown && !1 !== h.teardown.call(t, p, m.handle) || E.removeEvent(t, f, m.handle),
                                    delete l[f])
                                } else
                                    for (f in l)
                                        E.event.remove(t, f + e[c], n, i, !0);
                            E.isEmptyObject(l) && at.remove(t, "handle events")
                        }
                    },
                    dispatch: function(t) {
                        var e, n, i, r, o, s, a = new Array(arguments.length), l = E.event.fix(t), c = (at.get(this, "events") || Object.create(null))[l.type] || [], u = E.event.special[l.type] || {};
                        for (a[0] = l,
                        e = 1; e < arguments.length; e++)
                            a[e] = arguments[e];
                        if (l.delegateTarget = this,
                        !u.preDispatch || !1 !== u.preDispatch.call(this, l)) {
                            for (s = E.event.handlers.call(this, l, c),
                            e = 0; (r = s[e++]) && !l.isPropagationStopped(); )
                                for (l.currentTarget = r.elem,
                                n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                                    l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o,
                                    l.data = o.data,
                                    void 0 !== (i = ((E.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(),
                                    l.stopPropagation()));
                            return u.postDispatch && u.postDispatch.call(this, l),
                            l.result
                        }
                    },
                    handlers: function(t, e) {
                        var n, i, r, o, s, a = [], l = e.delegateCount, c = t.target;
                        if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                            for (; c !== this; c = c.parentNode || this)
                                if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                                    for (o = [],
                                    s = {},
                                    n = 0; n < l; n++)
                                        void 0 === s[r = (i = e[n]).selector + " "] && (s[r] = i.needsContext ? E(r, this).index(c) > -1 : E.find(r, this, null, [c]).length),
                                        s[r] && o.push(i);
                                    o.length && a.push({
                                        elem: c,
                                        handlers: o
                                    })
                                }
                        return c = this,
                        l < e.length && a.push({
                            elem: c,
                            handlers: e.slice(l)
                        }),
                        a
                    },
                    addProp: function(t, e) {
                        Object.defineProperty(E.Event.prototype, t, {
                            enumerable: !0,
                            configurable: !0,
                            get: v(e) ? function() {
                                if (this.originalEvent)
                                    return e(this.originalEvent)
                            }
                            : function() {
                                if (this.originalEvent)
                                    return this.originalEvent[t]
                            }
                            ,
                            set: function(e) {
                                Object.defineProperty(this, t, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: e
                                })
                            }
                        })
                    },
                    fix: function(t) {
                        return t[E.expando] ? t : new E.Event(t)
                    },
                    special: {
                        load: {
                            noBubble: !0
                        },
                        click: {
                            setup: function(t) {
                                var e = this || t;
                                return Et.test(e.type) && e.click && j(e, "input") && $t(e, "click", !0),
                                !1
                            },
                            trigger: function(t) {
                                var e = this || t;
                                return Et.test(e.type) && e.click && j(e, "input") && $t(e, "click"),
                                !0
                            },
                            _default: function(t) {
                                var e = t.target;
                                return Et.test(e.type) && e.click && j(e, "input") && at.get(e, "click") || j(e, "a")
                            }
                        },
                        beforeunload: {
                            postDispatch: function(t) {
                                void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                            }
                        }
                    }
                },
                E.removeEvent = function(t, e, n) {
                    t.removeEventListener && t.removeEventListener(e, n)
                }
                ,
                E.Event = function(t, e) {
                    if (!(this instanceof E.Event))
                        return new E.Event(t,e);
                    t && t.type ? (this.originalEvent = t,
                    this.type = t.type,
                    this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ht : Pt,
                    this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
                    this.currentTarget = t.currentTarget,
                    this.relatedTarget = t.relatedTarget) : this.type = t,
                    e && E.extend(this, e),
                    this.timeStamp = t && t.timeStamp || Date.now(),
                    this[E.expando] = !0
                }
                ,
                E.Event.prototype = {
                    constructor: E.Event,
                    isDefaultPrevented: Pt,
                    isPropagationStopped: Pt,
                    isImmediatePropagationStopped: Pt,
                    isSimulated: !1,
                    preventDefault: function() {
                        var t = this.originalEvent;
                        this.isDefaultPrevented = Ht,
                        t && !this.isSimulated && t.preventDefault()
                    },
                    stopPropagation: function() {
                        var t = this.originalEvent;
                        this.isPropagationStopped = Ht,
                        t && !this.isSimulated && t.stopPropagation()
                    },
                    stopImmediatePropagation: function() {
                        var t = this.originalEvent;
                        this.isImmediatePropagationStopped = Ht,
                        t && !this.isSimulated && t.stopImmediatePropagation(),
                        this.stopPropagation()
                    }
                },
                E.each({
                    altKey: !0,
                    bubbles: !0,
                    cancelable: !0,
                    changedTouches: !0,
                    ctrlKey: !0,
                    detail: !0,
                    eventPhase: !0,
                    metaKey: !0,
                    pageX: !0,
                    pageY: !0,
                    shiftKey: !0,
                    view: !0,
                    char: !0,
                    code: !0,
                    charCode: !0,
                    key: !0,
                    keyCode: !0,
                    button: !0,
                    buttons: !0,
                    clientX: !0,
                    clientY: !0,
                    offsetX: !0,
                    offsetY: !0,
                    pointerId: !0,
                    pointerType: !0,
                    screenX: !0,
                    screenY: !0,
                    targetTouches: !0,
                    toElement: !0,
                    touches: !0,
                    which: !0
                }, E.event.addProp),
                E.each({
                    focus: "focusin",
                    blur: "focusout"
                }, (function(t, e) {
                    function n(t) {
                        if (b.documentMode) {
                            var n = at.get(this, "handle")
                              , i = E.event.fix(t);
                            i.type = "focusin" === t.type ? "focus" : "blur",
                            i.isSimulated = !0,
                            n(t),
                            i.target === i.currentTarget && n(i)
                        } else
                            E.event.simulate(e, t.target, E.event.fix(t))
                    }
                    E.event.special[t] = {
                        setup: function() {
                            var i;
                            if ($t(this, t, !0),
                            !b.documentMode)
                                return !1;
                            (i = at.get(this, e)) || this.addEventListener(e, n),
                            at.set(this, e, (i || 0) + 1)
                        },
                        trigger: function() {
                            return $t(this, t),
                            !0
                        },
                        teardown: function() {
                            var t;
                            if (!b.documentMode)
                                return !1;
                            (t = at.get(this, e) - 1) ? at.set(this, e, t) : (this.removeEventListener(e, n),
                            at.remove(this, e))
                        },
                        _default: function(e) {
                            return at.get(e.target, t)
                        },
                        delegateType: e
                    },
                    E.event.special[e] = {
                        setup: function() {
                            var i = this.ownerDocument || this.document || this
                              , r = b.documentMode ? this : i
                              , o = at.get(r, e);
                            o || (b.documentMode ? this.addEventListener(e, n) : i.addEventListener(t, n, !0)),
                            at.set(r, e, (o || 0) + 1)
                        },
                        teardown: function() {
                            var i = this.ownerDocument || this.document || this
                              , r = b.documentMode ? this : i
                              , o = at.get(r, e) - 1;
                            o ? at.set(r, e, o) : (b.documentMode ? this.removeEventListener(e, n) : i.removeEventListener(t, n, !0),
                            at.remove(r, e))
                        }
                    }
                }
                )),
                E.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout"
                }, (function(t, e) {
                    E.event.special[t] = {
                        delegateType: e,
                        bindType: e,
                        handle: function(t) {
                            var n, i = t.relatedTarget, r = t.handleObj;
                            return i && (i === this || E.contains(this, i)) || (t.type = r.origType,
                            n = r.handler.apply(this, arguments),
                            t.type = e),
                            n
                        }
                    }
                }
                )),
                E.fn.extend({
                    on: function(t, e, n, i) {
                        return Rt(this, t, e, n, i)
                    },
                    one: function(t, e, n, i) {
                        return Rt(this, t, e, n, i, 1)
                    },
                    off: function(t, e, n) {
                        var i, r;
                        if (t && t.preventDefault && t.handleObj)
                            return i = t.handleObj,
                            E(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                            this;
                        if ("object" == typeof t) {
                            for (r in t)
                                this.off(r, e, t[r]);
                            return this
                        }
                        return !1 !== e && "function" != typeof e || (n = e,
                        e = void 0),
                        !1 === n && (n = Pt),
                        this.each((function() {
                            E.event.remove(this, t, n, e)
                        }
                        ))
                    }
                });
                var Lt = /<script|<style|<link/i
                  , Ft = /checked\s*(?:[^=]|=\s*.checked.)/i
                  , Mt = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
                function qt(t, e) {
                    return j(t, "table") && j(11 !== e.nodeType ? e : e.firstChild, "tr") && E(t).children("tbody")[0] || t
                }
                function Bt(t) {
                    return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
                    t
                }
                function Wt(t) {
                    return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"),
                    t
                }
                function zt(t, e) {
                    var n, i, r, o, s, a;
                    if (1 === e.nodeType) {
                        if (at.hasData(t) && (a = at.get(t).events))
                            for (r in at.remove(e, "handle events"),
                            a)
                                for (n = 0,
                                i = a[r].length; n < i; n++)
                                    E.event.add(e, r, a[r][n]);
                        lt.hasData(t) && (o = lt.access(t),
                        s = E.extend({}, o),
                        lt.set(e, s))
                    }
                }
                function Ut(t, e) {
                    var n = e.nodeName.toLowerCase();
                    "input" === n && Et.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
                }
                function Vt(t, e, n, i) {
                    e = l(e);
                    var r, o, s, a, c, u, h = 0, d = t.length, f = d - 1, p = e[0], g = v(p);
                    if (g || d > 1 && "string" == typeof p && !m.checkClone && Ft.test(p))
                        return t.each((function(r) {
                            var o = t.eq(r);
                            g && (e[0] = p.call(this, r, o.html())),
                            Vt(o, e, n, i)
                        }
                        ));
                    if (d && (o = (r = Ot(e, t[0].ownerDocument, !1, t, i)).firstChild,
                    1 === r.childNodes.length && (r = o),
                    o || i)) {
                        for (a = (s = E.map(At(r, "script"), Bt)).length; h < d; h++)
                            c = r,
                            h !== f && (c = E.clone(c, !0, !0),
                            a && E.merge(s, At(c, "script"))),
                            n.call(t[h], c, h);
                        if (a)
                            for (u = s[s.length - 1].ownerDocument,
                            E.map(s, Wt),
                            h = 0; h < a; h++)
                                c = s[h],
                                jt.test(c.type || "") && !at.access(c, "globalEval") && E.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? E._evalUrl && !c.noModule && E._evalUrl(c.src, {
                                    nonce: c.nonce || c.getAttribute("nonce")
                                }, u) : w(c.textContent.replace(Mt, ""), c, u))
                    }
                    return t
                }
                function Gt(t, e, n) {
                    for (var i, r = e ? E.filter(e, t) : t, o = 0; null != (i = r[o]); o++)
                        n || 1 !== i.nodeType || E.cleanData(At(i)),
                        i.parentNode && (n && mt(i) && Dt(At(i, "script")),
                        i.parentNode.removeChild(i));
                    return t
                }
                E.extend({
                    htmlPrefilter: function(t) {
                        return t
                    },
                    clone: function(t, e, n) {
                        var i, r, o, s, a = t.cloneNode(!0), l = mt(t);
                        if (!(m.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || E.isXMLDoc(t)))
                            for (s = At(a),
                            i = 0,
                            r = (o = At(t)).length; i < r; i++)
                                Ut(o[i], s[i]);
                        if (e)
                            if (n)
                                for (o = o || At(t),
                                s = s || At(a),
                                i = 0,
                                r = o.length; i < r; i++)
                                    zt(o[i], s[i]);
                            else
                                zt(t, a);
                        return (s = At(a, "script")).length > 0 && Dt(s, !l && At(t, "script")),
                        a
                    },
                    cleanData: function(t) {
                        for (var e, n, i, r = E.event.special, o = 0; void 0 !== (n = t[o]); o++)
                            if (ot(n)) {
                                if (e = n[at.expando]) {
                                    if (e.events)
                                        for (i in e.events)
                                            r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, e.handle);
                                    n[at.expando] = void 0
                                }
                                n[lt.expando] && (n[lt.expando] = void 0)
                            }
                    }
                }),
                E.fn.extend({
                    detach: function(t) {
                        return Gt(this, t, !0)
                    },
                    remove: function(t) {
                        return Gt(this, t)
                    },
                    text: function(t) {
                        return tt(this, (function(t) {
                            return void 0 === t ? E.text(this) : this.empty().each((function() {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                            }
                            ))
                        }
                        ), null, t, arguments.length)
                    },
                    append: function() {
                        return Vt(this, arguments, (function(t) {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || qt(this, t).appendChild(t)
                        }
                        ))
                    },
                    prepend: function() {
                        return Vt(this, arguments, (function(t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = qt(this, t);
                                e.insertBefore(t, e.firstChild)
                            }
                        }
                        ))
                    },
                    before: function() {
                        return Vt(this, arguments, (function(t) {
                            this.parentNode && this.parentNode.insertBefore(t, this)
                        }
                        ))
                    },
                    after: function() {
                        return Vt(this, arguments, (function(t) {
                            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                        }
                        ))
                    },
                    empty: function() {
                        for (var t, e = 0; null != (t = this[e]); e++)
                            1 === t.nodeType && (E.cleanData(At(t, !1)),
                            t.textContent = "");
                        return this
                    },
                    clone: function(t, e) {
                        return t = null != t && t,
                        e = null == e ? t : e,
                        this.map((function() {
                            return E.clone(this, t, e)
                        }
                        ))
                    },
                    html: function(t) {
                        return tt(this, (function(t) {
                            var e = this[0] || {}
                              , n = 0
                              , i = this.length;
                            if (void 0 === t && 1 === e.nodeType)
                                return e.innerHTML;
                            if ("string" == typeof t && !Lt.test(t) && !_t[(kt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                t = E.htmlPrefilter(t);
                                try {
                                    for (; n < i; n++)
                                        1 === (e = this[n] || {}).nodeType && (E.cleanData(At(e, !1)),
                                        e.innerHTML = t);
                                    e = 0
                                } catch (t) {}
                            }
                            e && this.empty().append(t)
                        }
                        ), null, t, arguments.length)
                    },
                    replaceWith: function() {
                        var t = [];
                        return Vt(this, arguments, (function(e) {
                            var n = this.parentNode;
                            E.inArray(this, t) < 0 && (E.cleanData(At(this)),
                            n && n.replaceChild(e, this))
                        }
                        ), t)
                    }
                }),
                E.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith"
                }, (function(t, e) {
                    E.fn[t] = function(t) {
                        for (var n, i = [], r = E(t), o = r.length - 1, s = 0; s <= o; s++)
                            n = s === o ? this : this.clone(!0),
                            E(r[s])[e](n),
                            c.apply(i, n.get());
                        return this.pushStack(i)
                    }
                }
                ));
                var Xt = new RegExp("^(" + dt + ")(?!px)[a-z%]+$","i")
                  , Yt = /^--/
                  , Kt = function(t) {
                    var e = t.ownerDocument.defaultView;
                    return e && e.opener || (e = i),
                    e.getComputedStyle(t)
                }
                  , Qt = function(t, e, n) {
                    var i, r, o = {};
                    for (r in e)
                        o[r] = t.style[r],
                        t.style[r] = e[r];
                    for (r in i = n.call(t),
                    e)
                        t.style[r] = o[r];
                    return i
                }
                  , Jt = new RegExp(pt.join("|"),"i");
                function Zt(t, e, n) {
                    var i, r, o, s, a = Yt.test(e), l = t.style;
                    return (n = n || Kt(t)) && (s = n.getPropertyValue(e) || n[e],
                    a && s && (s = s.replace(O, "$1") || void 0),
                    "" !== s || mt(t) || (s = E.style(t, e)),
                    !m.pixelBoxStyles() && Xt.test(s) && Jt.test(e) && (i = l.width,
                    r = l.minWidth,
                    o = l.maxWidth,
                    l.minWidth = l.maxWidth = l.width = s,
                    s = n.width,
                    l.width = i,
                    l.minWidth = r,
                    l.maxWidth = o)),
                    void 0 !== s ? s + "" : s
                }
                function te(t, e) {
                    return {
                        get: function() {
                            if (!t())
                                return (this.get = e).apply(this, arguments);
                            delete this.get
                        }
                    }
                }
                !function() {
                    function t() {
                        if (u) {
                            c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                            u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                            gt.appendChild(c).appendChild(u);
                            var t = i.getComputedStyle(u);
                            n = "1%" !== t.top,
                            l = 12 === e(t.marginLeft),
                            u.style.right = "60%",
                            s = 36 === e(t.right),
                            r = 36 === e(t.width),
                            u.style.position = "absolute",
                            o = 12 === e(u.offsetWidth / 3),
                            gt.removeChild(c),
                            u = null
                        }
                    }
                    function e(t) {
                        return Math.round(parseFloat(t))
                    }
                    var n, r, o, s, a, l, c = b.createElement("div"), u = b.createElement("div");
                    u.style && (u.style.backgroundClip = "content-box",
                    u.cloneNode(!0).style.backgroundClip = "",
                    m.clearCloneStyle = "content-box" === u.style.backgroundClip,
                    E.extend(m, {
                        boxSizingReliable: function() {
                            return t(),
                            r
                        },
                        pixelBoxStyles: function() {
                            return t(),
                            s
                        },
                        pixelPosition: function() {
                            return t(),
                            n
                        },
                        reliableMarginLeft: function() {
                            return t(),
                            l
                        },
                        scrollboxSize: function() {
                            return t(),
                            o
                        },
                        reliableTrDimensions: function() {
                            var t, e, n, r;
                            return null == a && (t = b.createElement("table"),
                            e = b.createElement("tr"),
                            n = b.createElement("div"),
                            t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                            e.style.cssText = "box-sizing:content-box;border:1px solid",
                            e.style.height = "1px",
                            n.style.height = "9px",
                            n.style.display = "block",
                            gt.appendChild(t).appendChild(e).appendChild(n),
                            r = i.getComputedStyle(e),
                            a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === e.offsetHeight,
                            gt.removeChild(t)),
                            a
                        }
                    }))
                }();
                var ee = ["Webkit", "Moz", "ms"]
                  , ne = b.createElement("div").style
                  , ie = {};
                function re(t) {
                    var e = E.cssProps[t] || ie[t];
                    return e || (t in ne ? t : ie[t] = function(t) {
                        for (var e = t[0].toUpperCase() + t.slice(1), n = ee.length; n--; )
                            if ((t = ee[n] + e)in ne)
                                return t
                    }(t) || t)
                }
                var oe = /^(none|table(?!-c[ea]).+)/
                  , se = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }
                  , ae = {
                    letterSpacing: "0",
                    fontWeight: "400"
                };
                function le(t, e, n) {
                    var i = ft.exec(e);
                    return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
                }
                function ce(t, e, n, i, r, o) {
                    var s = "width" === e ? 1 : 0
                      , a = 0
                      , l = 0
                      , c = 0;
                    if (n === (i ? "border" : "content"))
                        return 0;
                    for (; s < 4; s += 2)
                        "margin" === n && (c += E.css(t, n + pt[s], !0, r)),
                        i ? ("content" === n && (l -= E.css(t, "padding" + pt[s], !0, r)),
                        "margin" !== n && (l -= E.css(t, "border" + pt[s] + "Width", !0, r))) : (l += E.css(t, "padding" + pt[s], !0, r),
                        "padding" !== n ? l += E.css(t, "border" + pt[s] + "Width", !0, r) : a += E.css(t, "border" + pt[s] + "Width", !0, r));
                    return !i && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - a - .5)) || 0),
                    l + c
                }
                function ue(t, e, n) {
                    var i = Kt(t)
                      , r = (!m.boxSizingReliable() || n) && "border-box" === E.css(t, "boxSizing", !1, i)
                      , o = r
                      , s = Zt(t, e, i)
                      , a = "offset" + e[0].toUpperCase() + e.slice(1);
                    if (Xt.test(s)) {
                        if (!n)
                            return s;
                        s = "auto"
                    }
                    return (!m.boxSizingReliable() && r || !m.reliableTrDimensions() && j(t, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(t, "display", !1, i)) && t.getClientRects().length && (r = "border-box" === E.css(t, "boxSizing", !1, i),
                    (o = a in t) && (s = t[a])),
                    (s = parseFloat(s) || 0) + ce(t, e, n || (r ? "border" : "content"), o, i, s) + "px"
                }
                function he(t, e, n, i, r) {
                    return new he.prototype.init(t,e,n,i,r)
                }
                E.extend({
                    cssHooks: {
                        opacity: {
                            get: function(t, e) {
                                if (e) {
                                    var n = Zt(t, "opacity");
                                    return "" === n ? "1" : n
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageSlice: !0,
                        columnCount: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        scale: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0
                    },
                    cssProps: {},
                    style: function(t, e, n, i) {
                        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                            var r, o, s, a = rt(e), l = Yt.test(e), c = t.style;
                            if (l || (e = re(a)),
                            s = E.cssHooks[e] || E.cssHooks[a],
                            void 0 === n)
                                return s && "get"in s && void 0 !== (r = s.get(t, !1, i)) ? r : c[e];
                            "string" === (o = typeof n) && (r = ft.exec(n)) && r[1] && (n = bt(t, e, r),
                            o = "number"),
                            null != n && n == n && ("number" !== o || l || (n += r && r[3] || (E.cssNumber[a] ? "" : "px")),
                            m.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"),
                            s && "set"in s && void 0 === (n = s.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))
                        }
                    },
                    css: function(t, e, n, i) {
                        var r, o, s, a = rt(e);
                        return Yt.test(e) || (e = re(a)),
                        (s = E.cssHooks[e] || E.cssHooks[a]) && "get"in s && (r = s.get(t, !0, n)),
                        void 0 === r && (r = Zt(t, e, i)),
                        "normal" === r && e in ae && (r = ae[e]),
                        "" === n || n ? (o = parseFloat(r),
                        !0 === n || isFinite(o) ? o || 0 : r) : r
                    }
                }),
                E.each(["height", "width"], (function(t, e) {
                    E.cssHooks[e] = {
                        get: function(t, n, i) {
                            if (n)
                                return !oe.test(E.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ue(t, e, i) : Qt(t, se, (function() {
                                    return ue(t, e, i)
                                }
                                ))
                        },
                        set: function(t, n, i) {
                            var r, o = Kt(t), s = !m.scrollboxSize() && "absolute" === o.position, a = (s || i) && "border-box" === E.css(t, "boxSizing", !1, o), l = i ? ce(t, e, i, a, o) : 0;
                            return a && s && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - ce(t, e, "border", !1, o) - .5)),
                            l && (r = ft.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n,
                            n = E.css(t, e)),
                            le(0, n, l)
                        }
                    }
                }
                )),
                E.cssHooks.marginLeft = te(m.reliableMarginLeft, (function(t, e) {
                    if (e)
                        return (parseFloat(Zt(t, "marginLeft")) || t.getBoundingClientRect().left - Qt(t, {
                            marginLeft: 0
                        }, (function() {
                            return t.getBoundingClientRect().left
                        }
                        ))) + "px"
                }
                )),
                E.each({
                    margin: "",
                    padding: "",
                    border: "Width"
                }, (function(t, e) {
                    E.cssHooks[t + e] = {
                        expand: function(n) {
                            for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                                r[t + pt[i] + e] = o[i] || o[i - 2] || o[0];
                            return r
                        }
                    },
                    "margin" !== t && (E.cssHooks[t + e].set = le)
                }
                )),
                E.fn.extend({
                    css: function(t, e) {
                        return tt(this, (function(t, e, n) {
                            var i, r, o = {}, s = 0;
                            if (Array.isArray(e)) {
                                for (i = Kt(t),
                                r = e.length; s < r; s++)
                                    o[e[s]] = E.css(t, e[s], !1, i);
                                return o
                            }
                            return void 0 !== n ? E.style(t, e, n) : E.css(t, e)
                        }
                        ), t, e, arguments.length > 1)
                    }
                }),
                E.Tween = he,
                he.prototype = {
                    constructor: he,
                    init: function(t, e, n, i, r, o) {
                        this.elem = t,
                        this.prop = n,
                        this.easing = r || E.easing._default,
                        this.options = e,
                        this.start = this.now = this.cur(),
                        this.end = i,
                        this.unit = o || (E.cssNumber[n] ? "" : "px")
                    },
                    cur: function() {
                        var t = he.propHooks[this.prop];
                        return t && t.get ? t.get(this) : he.propHooks._default.get(this)
                    },
                    run: function(t) {
                        var e, n = he.propHooks[this.prop];
                        return this.options.duration ? this.pos = e = E.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                        this.now = (this.end - this.start) * e + this.start,
                        this.options.step && this.options.step.call(this.elem, this.now, this),
                        n && n.set ? n.set(this) : he.propHooks._default.set(this),
                        this
                    }
                },
                he.prototype.init.prototype = he.prototype,
                he.propHooks = {
                    _default: {
                        get: function(t) {
                            var e;
                            return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = E.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                        },
                        set: function(t) {
                            E.fx.step[t.prop] ? E.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !E.cssHooks[t.prop] && null == t.elem.style[re(t.prop)] ? t.elem[t.prop] = t.now : E.style(t.elem, t.prop, t.now + t.unit)
                        }
                    }
                },
                he.propHooks.scrollTop = he.propHooks.scrollLeft = {
                    set: function(t) {
                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                    }
                },
                E.easing = {
                    linear: function(t) {
                        return t
                    },
                    swing: function(t) {
                        return .5 - Math.cos(t * Math.PI) / 2
                    },
                    _default: "swing"
                },
                E.fx = he.prototype.init,
                E.fx.step = {};
                var de, fe, pe = /^(?:toggle|show|hide)$/, ge = /queueHooks$/;
                function me() {
                    fe && (!1 === b.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(me) : i.setTimeout(me, E.fx.interval),
                    E.fx.tick())
                }
                function ve() {
                    return i.setTimeout((function() {
                        de = void 0
                    }
                    )),
                    de = Date.now()
                }
                function ye(t, e) {
                    var n, i = 0, r = {
                        height: t
                    };
                    for (e = e ? 1 : 0; i < 4; i += 2 - e)
                        r["margin" + (n = pt[i])] = r["padding" + n] = t;
                    return e && (r.opacity = r.width = t),
                    r
                }
                function be(t, e, n) {
                    for (var i, r = (xe.tweeners[e] || []).concat(xe.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                        if (i = r[o].call(n, e, t))
                            return i
                }
                function xe(t, e, n) {
                    var i, r, o = 0, s = xe.prefilters.length, a = E.Deferred().always((function() {
                        delete l.elem
                    }
                    )), l = function() {
                        if (r)
                            return !1;
                        for (var e = de || ve(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++)
                            c.tweens[o].run(i);
                        return a.notifyWith(t, [c, i, n]),
                        i < 1 && s ? n : (s || a.notifyWith(t, [c, 1, 0]),
                        a.resolveWith(t, [c]),
                        !1)
                    }, c = a.promise({
                        elem: t,
                        props: E.extend({}, e),
                        opts: E.extend(!0, {
                            specialEasing: {},
                            easing: E.easing._default
                        }, n),
                        originalProperties: e,
                        originalOptions: n,
                        startTime: de || ve(),
                        duration: n.duration,
                        tweens: [],
                        createTween: function(e, n) {
                            var i = E.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(i),
                            i
                        },
                        stop: function(e) {
                            var n = 0
                              , i = e ? c.tweens.length : 0;
                            if (r)
                                return this;
                            for (r = !0; n < i; n++)
                                c.tweens[n].run(1);
                            return e ? (a.notifyWith(t, [c, 1, 0]),
                            a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]),
                            this
                        }
                    }), u = c.props;
                    for (!function(t, e) {
                        var n, i, r, o, s;
                        for (n in t)
                            if (r = e[i = rt(n)],
                            o = t[n],
                            Array.isArray(o) && (r = o[1],
                            o = t[n] = o[0]),
                            n !== i && (t[i] = o,
                            delete t[n]),
                            (s = E.cssHooks[i]) && "expand"in s)
                                for (n in o = s.expand(o),
                                delete t[i],
                                o)
                                    n in t || (t[n] = o[n],
                                    e[n] = r);
                            else
                                e[i] = r
                    }(u, c.opts.specialEasing); o < s; o++)
                        if (i = xe.prefilters[o].call(c, t, u, c.opts))
                            return v(i.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = i.stop.bind(i)),
                            i;
                    return E.map(u, be, c),
                    v(c.opts.start) && c.opts.start.call(t, c),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                    E.fx.timer(E.extend(l, {
                        elem: t,
                        anim: c,
                        queue: c.opts.queue
                    })),
                    c
                }
                E.Animation = E.extend(xe, {
                    tweeners: {
                        "*": [function(t, e) {
                            var n = this.createTween(t, e);
                            return bt(n.elem, t, ft.exec(e), n),
                            n
                        }
                        ]
                    },
                    tweener: function(t, e) {
                        v(t) ? (e = t,
                        t = ["*"]) : t = t.match(G);
                        for (var n, i = 0, r = t.length; i < r; i++)
                            n = t[i],
                            xe.tweeners[n] = xe.tweeners[n] || [],
                            xe.tweeners[n].unshift(e)
                    },
                    prefilters: [function(t, e, n) {
                        var i, r, o, s, a, l, c, u, h = "width"in e || "height"in e, d = this, f = {}, p = t.style, g = t.nodeType && yt(t), m = at.get(t, "fxshow");
                        for (i in n.queue || (null == (s = E._queueHooks(t, "fx")).unqueued && (s.unqueued = 0,
                        a = s.empty.fire,
                        s.empty.fire = function() {
                            s.unqueued || a()
                        }
                        ),
                        s.unqueued++,
                        d.always((function() {
                            d.always((function() {
                                s.unqueued--,
                                E.queue(t, "fx").length || s.empty.fire()
                            }
                            ))
                        }
                        ))),
                        e)
                            if (r = e[i],
                            pe.test(r)) {
                                if (delete e[i],
                                o = o || "toggle" === r,
                                r === (g ? "hide" : "show")) {
                                    if ("show" !== r || !m || void 0 === m[i])
                                        continue;
                                    g = !0
                                }
                                f[i] = m && m[i] || E.style(t, i)
                            }
                        if ((l = !E.isEmptyObject(e)) || !E.isEmptyObject(f))
                            for (i in h && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                            null == (c = m && m.display) && (c = at.get(t, "display")),
                            "none" === (u = E.css(t, "display")) && (c ? u = c : (Tt([t], !0),
                            c = t.style.display || c,
                            u = E.css(t, "display"),
                            Tt([t]))),
                            ("inline" === u || "inline-block" === u && null != c) && "none" === E.css(t, "float") && (l || (d.done((function() {
                                p.display = c
                            }
                            )),
                            null == c && (u = p.display,
                            c = "none" === u ? "" : u)),
                            p.display = "inline-block")),
                            n.overflow && (p.overflow = "hidden",
                            d.always((function() {
                                p.overflow = n.overflow[0],
                                p.overflowX = n.overflow[1],
                                p.overflowY = n.overflow[2]
                            }
                            ))),
                            l = !1,
                            f)
                                l || (m ? "hidden"in m && (g = m.hidden) : m = at.access(t, "fxshow", {
                                    display: c
                                }),
                                o && (m.hidden = !g),
                                g && Tt([t], !0),
                                d.done((function() {
                                    for (i in g || Tt([t]),
                                    at.remove(t, "fxshow"),
                                    f)
                                        E.style(t, i, f[i])
                                }
                                ))),
                                l = be(g ? m[i] : 0, i, d),
                                i in m || (m[i] = l.start,
                                g && (l.end = l.start,
                                l.start = 0))
                    }
                    ],
                    prefilter: function(t, e) {
                        e ? xe.prefilters.unshift(t) : xe.prefilters.push(t)
                    }
                }),
                E.speed = function(t, e, n) {
                    var i = t && "object" == typeof t ? E.extend({}, t) : {
                        complete: n || !n && e || v(t) && t,
                        duration: t,
                        easing: n && e || e && !v(e) && e
                    };
                    return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default),
                    null != i.queue && !0 !== i.queue || (i.queue = "fx"),
                    i.old = i.complete,
                    i.complete = function() {
                        v(i.old) && i.old.call(this),
                        i.queue && E.dequeue(this, i.queue)
                    }
                    ,
                    i
                }
                ,
                E.fn.extend({
                    fadeTo: function(t, e, n, i) {
                        return this.filter(yt).css("opacity", 0).show().end().animate({
                            opacity: e
                        }, t, n, i)
                    },
                    animate: function(t, e, n, i) {
                        var r = E.isEmptyObject(t)
                          , o = E.speed(e, n, i)
                          , s = function() {
                            var e = xe(this, E.extend({}, t), o);
                            (r || at.get(this, "finish")) && e.stop(!0)
                        };
                        return s.finish = s,
                        r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                    },
                    stop: function(t, e, n) {
                        var i = function(t) {
                            var e = t.stop;
                            delete t.stop,
                            e(n)
                        };
                        return "string" != typeof t && (n = e,
                        e = t,
                        t = void 0),
                        e && this.queue(t || "fx", []),
                        this.each((function() {
                            var e = !0
                              , r = null != t && t + "queueHooks"
                              , o = E.timers
                              , s = at.get(this);
                            if (r)
                                s[r] && s[r].stop && i(s[r]);
                            else
                                for (r in s)
                                    s[r] && s[r].stop && ge.test(r) && i(s[r]);
                            for (r = o.length; r--; )
                                o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n),
                                e = !1,
                                o.splice(r, 1));
                            !e && n || E.dequeue(this, t)
                        }
                        ))
                    },
                    finish: function(t) {
                        return !1 !== t && (t = t || "fx"),
                        this.each((function() {
                            var e, n = at.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = E.timers, s = i ? i.length : 0;
                            for (n.finish = !0,
                            E.queue(this, t, []),
                            r && r.stop && r.stop.call(this, !0),
                            e = o.length; e--; )
                                o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0),
                                o.splice(e, 1));
                            for (e = 0; e < s; e++)
                                i[e] && i[e].finish && i[e].finish.call(this);
                            delete n.finish
                        }
                        ))
                    }
                }),
                E.each(["toggle", "show", "hide"], (function(t, e) {
                    var n = E.fn[e];
                    E.fn[e] = function(t, i, r) {
                        return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ye(e, !0), t, i, r)
                    }
                }
                )),
                E.each({
                    slideDown: ye("show"),
                    slideUp: ye("hide"),
                    slideToggle: ye("toggle"),
                    fadeIn: {
                        opacity: "show"
                    },
                    fadeOut: {
                        opacity: "hide"
                    },
                    fadeToggle: {
                        opacity: "toggle"
                    }
                }, (function(t, e) {
                    E.fn[t] = function(t, n, i) {
                        return this.animate(e, t, n, i)
                    }
                }
                )),
                E.timers = [],
                E.fx.tick = function() {
                    var t, e = 0, n = E.timers;
                    for (de = Date.now(); e < n.length; e++)
                        (t = n[e])() || n[e] !== t || n.splice(e--, 1);
                    n.length || E.fx.stop(),
                    de = void 0
                }
                ,
                E.fx.timer = function(t) {
                    E.timers.push(t),
                    E.fx.start()
                }
                ,
                E.fx.interval = 13,
                E.fx.start = function() {
                    fe || (fe = !0,
                    me())
                }
                ,
                E.fx.stop = function() {
                    fe = null
                }
                ,
                E.fx.speeds = {
                    slow: 600,
                    fast: 200,
                    _default: 400
                },
                E.fn.delay = function(t, e) {
                    return t = E.fx && E.fx.speeds[t] || t,
                    e = e || "fx",
                    this.queue(e, (function(e, n) {
                        var r = i.setTimeout(e, t);
                        n.stop = function() {
                            i.clearTimeout(r)
                        }
                    }
                    ))
                }
                ,
                function() {
                    var t = b.createElement("input")
                      , e = b.createElement("select").appendChild(b.createElement("option"));
                    t.type = "checkbox",
                    m.checkOn = "" !== t.value,
                    m.optSelected = e.selected,
                    (t = b.createElement("input")).value = "t",
                    t.type = "radio",
                    m.radioValue = "t" === t.value
                }();
                var we, Te = E.expr.attrHandle;
                E.fn.extend({
                    attr: function(t, e) {
                        return tt(this, E.attr, t, e, arguments.length > 1)
                    },
                    removeAttr: function(t) {
                        return this.each((function() {
                            E.removeAttr(this, t)
                        }
                        ))
                    }
                }),
                E.extend({
                    attr: function(t, e, n) {
                        var i, r, o = t.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return void 0 === t.getAttribute ? E.prop(t, e, n) : (1 === o && E.isXMLDoc(t) || (r = E.attrHooks[e.toLowerCase()] || (E.expr.match.bool.test(e) ? we : void 0)),
                            void 0 !== n ? null === n ? void E.removeAttr(t, e) : r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                            n) : r && "get"in r && null !== (i = r.get(t, e)) ? i : null == (i = E.find.attr(t, e)) ? void 0 : i)
                    },
                    attrHooks: {
                        type: {
                            set: function(t, e) {
                                if (!m.radioValue && "radio" === e && j(t, "input")) {
                                    var n = t.value;
                                    return t.setAttribute("type", e),
                                    n && (t.value = n),
                                    e
                                }
                            }
                        }
                    },
                    removeAttr: function(t, e) {
                        var n, i = 0, r = e && e.match(G);
                        if (r && 1 === t.nodeType)
                            for (; n = r[i++]; )
                                t.removeAttribute(n)
                    }
                }),
                we = {
                    set: function(t, e, n) {
                        return !1 === e ? E.removeAttr(t, n) : t.setAttribute(n, n),
                        n
                    }
                },
                E.each(E.expr.match.bool.source.match(/\w+/g), (function(t, e) {
                    var n = Te[e] || E.find.attr;
                    Te[e] = function(t, e, i) {
                        var r, o, s = e.toLowerCase();
                        return i || (o = Te[s],
                        Te[s] = r,
                        r = null != n(t, e, i) ? s : null,
                        Te[s] = o),
                        r
                    }
                }
                ));
                var Ce = /^(?:input|select|textarea|button)$/i
                  , Se = /^(?:a|area)$/i;
                function Ee(t) {
                    return (t.match(G) || []).join(" ")
                }
                function ke(t) {
                    return t.getAttribute && t.getAttribute("class") || ""
                }
                function je(t) {
                    return Array.isArray(t) ? t : "string" == typeof t && t.match(G) || []
                }
                E.fn.extend({
                    prop: function(t, e) {
                        return tt(this, E.prop, t, e, arguments.length > 1)
                    },
                    removeProp: function(t) {
                        return this.each((function() {
                            delete this[E.propFix[t] || t]
                        }
                        ))
                    }
                }),
                E.extend({
                    prop: function(t, e, n) {
                        var i, r, o = t.nodeType;
                        if (3 !== o && 8 !== o && 2 !== o)
                            return 1 === o && E.isXMLDoc(t) || (e = E.propFix[e] || e,
                            r = E.propHooks[e]),
                            void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
                    },
                    propHooks: {
                        tabIndex: {
                            get: function(t) {
                                var e = E.find.attr(t, "tabindex");
                                return e ? parseInt(e, 10) : Ce.test(t.nodeName) || Se.test(t.nodeName) && t.href ? 0 : -1
                            }
                        }
                    },
                    propFix: {
                        for: "htmlFor",
                        class: "className"
                    }
                }),
                m.optSelected || (E.propHooks.selected = {
                    get: function(t) {
                        var e = t.parentNode;
                        return e && e.parentNode && e.parentNode.selectedIndex,
                        null
                    },
                    set: function(t) {
                        var e = t.parentNode;
                        e && (e.selectedIndex,
                        e.parentNode && e.parentNode.selectedIndex)
                    }
                }),
                E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                    E.propFix[this.toLowerCase()] = this
                }
                )),
                E.fn.extend({
                    addClass: function(t) {
                        var e, n, i, r, o, s;
                        return v(t) ? this.each((function(e) {
                            E(this).addClass(t.call(this, e, ke(this)))
                        }
                        )) : (e = je(t)).length ? this.each((function() {
                            if (i = ke(this),
                            n = 1 === this.nodeType && " " + Ee(i) + " ") {
                                for (o = 0; o < e.length; o++)
                                    r = e[o],
                                    n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                                s = Ee(n),
                                i !== s && this.setAttribute("class", s)
                            }
                        }
                        )) : this
                    },
                    removeClass: function(t) {
                        var e, n, i, r, o, s;
                        return v(t) ? this.each((function(e) {
                            E(this).removeClass(t.call(this, e, ke(this)))
                        }
                        )) : arguments.length ? (e = je(t)).length ? this.each((function() {
                            if (i = ke(this),
                            n = 1 === this.nodeType && " " + Ee(i) + " ") {
                                for (o = 0; o < e.length; o++)
                                    for (r = e[o]; n.indexOf(" " + r + " ") > -1; )
                                        n = n.replace(" " + r + " ", " ");
                                s = Ee(n),
                                i !== s && this.setAttribute("class", s)
                            }
                        }
                        )) : this : this.attr("class", "")
                    },
                    toggleClass: function(t, e) {
                        var n, i, r, o, s = typeof t, a = "string" === s || Array.isArray(t);
                        return v(t) ? this.each((function(n) {
                            E(this).toggleClass(t.call(this, n, ke(this), e), e)
                        }
                        )) : "boolean" == typeof e && a ? e ? this.addClass(t) : this.removeClass(t) : (n = je(t),
                        this.each((function() {
                            if (a)
                                for (o = E(this),
                                r = 0; r < n.length; r++)
                                    i = n[r],
                                    o.hasClass(i) ? o.removeClass(i) : o.addClass(i);
                            else
                                void 0 !== t && "boolean" !== s || ((i = ke(this)) && at.set(this, "__className__", i),
                                this.setAttribute && this.setAttribute("class", i || !1 === t ? "" : at.get(this, "__className__") || ""))
                        }
                        )))
                    },
                    hasClass: function(t) {
                        var e, n, i = 0;
                        for (e = " " + t + " "; n = this[i++]; )
                            if (1 === n.nodeType && (" " + Ee(ke(n)) + " ").indexOf(e) > -1)
                                return !0;
                        return !1
                    }
                });
                var _e = /\r/g;
                E.fn.extend({
                    val: function(t) {
                        var e, n, i, r = this[0];
                        return arguments.length ? (i = v(t),
                        this.each((function(n) {
                            var r;
                            1 === this.nodeType && (null == (r = i ? t.call(this, n, E(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = E.map(r, (function(t) {
                                return null == t ? "" : t + ""
                            }
                            ))),
                            (e = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                        }
                        ))) : r ? (e = E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]) && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(_e, "") : null == n ? "" : n : void 0
                    }
                }),
                E.extend({
                    valHooks: {
                        option: {
                            get: function(t) {
                                var e = E.find.attr(t, "value");
                                return null != e ? e : Ee(E.text(t))
                            }
                        },
                        select: {
                            get: function(t) {
                                var e, n, i, r = t.options, o = t.selectedIndex, s = "select-one" === t.type, a = s ? null : [], l = s ? o + 1 : r.length;
                                for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                                    if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !j(n.parentNode, "optgroup"))) {
                                        if (e = E(n).val(),
                                        s)
                                            return e;
                                        a.push(e)
                                    }
                                return a
                            },
                            set: function(t, e) {
                                for (var n, i, r = t.options, o = E.makeArray(e), s = r.length; s--; )
                                    ((i = r[s]).selected = E.inArray(E.valHooks.option.get(i), o) > -1) && (n = !0);
                                return n || (t.selectedIndex = -1),
                                o
                            }
                        }
                    }
                }),
                E.each(["radio", "checkbox"], (function() {
                    E.valHooks[this] = {
                        set: function(t, e) {
                            if (Array.isArray(e))
                                return t.checked = E.inArray(E(t).val(), e) > -1
                        }
                    },
                    m.checkOn || (E.valHooks[this].get = function(t) {
                        return null === t.getAttribute("value") ? "on" : t.value
                    }
                    )
                }
                ));
                var Ae = i.location
                  , De = {
                    guid: Date.now()
                }
                  , Ie = /\?/;
                E.parseXML = function(t) {
                    var e, n;
                    if (!t || "string" != typeof t)
                        return null;
                    try {
                        e = (new i.DOMParser).parseFromString(t, "text/xml")
                    } catch (t) {}
                    return n = e && e.getElementsByTagName("parsererror")[0],
                    e && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, (function(t) {
                        return t.textContent
                    }
                    )).join("\n") : t)),
                    e
                }
                ;
                var Oe = /^(?:focusinfocus|focusoutblur)$/
                  , Ne = function(t) {
                    t.stopPropagation()
                };
                E.extend(E.event, {
                    trigger: function(t, e, n, r) {
                        var o, s, a, l, c, u, h, d, p = [n || b], g = f.call(t, "type") ? t.type : t, m = f.call(t, "namespace") ? t.namespace.split(".") : [];
                        if (s = d = a = n = n || b,
                        3 !== n.nodeType && 8 !== n.nodeType && !Oe.test(g + E.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."),
                        g = m.shift(),
                        m.sort()),
                        c = g.indexOf(":") < 0 && "on" + g,
                        (t = t[E.expando] ? t : new E.Event(g,"object" == typeof t && t)).isTrigger = r ? 2 : 3,
                        t.namespace = m.join("."),
                        t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                        t.result = void 0,
                        t.target || (t.target = n),
                        e = null == e ? [t] : E.makeArray(e, [t]),
                        h = E.event.special[g] || {},
                        r || !h.trigger || !1 !== h.trigger.apply(n, e))) {
                            if (!r && !h.noBubble && !y(n)) {
                                for (l = h.delegateType || g,
                                Oe.test(l + g) || (s = s.parentNode); s; s = s.parentNode)
                                    p.push(s),
                                    a = s;
                                a === (n.ownerDocument || b) && p.push(a.defaultView || a.parentWindow || i)
                            }
                            for (o = 0; (s = p[o++]) && !t.isPropagationStopped(); )
                                d = s,
                                t.type = o > 1 ? l : h.bindType || g,
                                (u = (at.get(s, "events") || Object.create(null))[t.type] && at.get(s, "handle")) && u.apply(s, e),
                                (u = c && s[c]) && u.apply && ot(s) && (t.result = u.apply(s, e),
                                !1 === t.result && t.preventDefault());
                            return t.type = g,
                            r || t.isDefaultPrevented() || h._default && !1 !== h._default.apply(p.pop(), e) || !ot(n) || c && v(n[g]) && !y(n) && ((a = n[c]) && (n[c] = null),
                            E.event.triggered = g,
                            t.isPropagationStopped() && d.addEventListener(g, Ne),
                            n[g](),
                            t.isPropagationStopped() && d.removeEventListener(g, Ne),
                            E.event.triggered = void 0,
                            a && (n[c] = a)),
                            t.result
                        }
                    },
                    simulate: function(t, e, n) {
                        var i = E.extend(new E.Event, n, {
                            type: t,
                            isSimulated: !0
                        });
                        E.event.trigger(i, null, e)
                    }
                }),
                E.fn.extend({
                    trigger: function(t, e) {
                        return this.each((function() {
                            E.event.trigger(t, e, this)
                        }
                        ))
                    },
                    triggerHandler: function(t, e) {
                        var n = this[0];
                        if (n)
                            return E.event.trigger(t, e, n, !0)
                    }
                });
                var He = /\[\]$/
                  , Pe = /\r?\n/g
                  , Re = /^(?:submit|button|image|reset|file)$/i
                  , $e = /^(?:input|select|textarea|keygen)/i;
                function Le(t, e, n, i) {
                    var r;
                    if (Array.isArray(e))
                        E.each(e, (function(e, r) {
                            n || He.test(t) ? i(t, r) : Le(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
                        }
                        ));
                    else if (n || "object" !== T(e))
                        i(t, e);
                    else
                        for (r in e)
                            Le(t + "[" + r + "]", e[r], n, i)
                }
                E.param = function(t, e) {
                    var n, i = [], r = function(t, e) {
                        var n = v(e) ? e() : e;
                        i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                    };
                    if (null == t)
                        return "";
                    if (Array.isArray(t) || t.jquery && !E.isPlainObject(t))
                        E.each(t, (function() {
                            r(this.name, this.value)
                        }
                        ));
                    else
                        for (n in t)
                            Le(n, t[n], e, r);
                    return i.join("&")
                }
                ,
                E.fn.extend({
                    serialize: function() {
                        return E.param(this.serializeArray())
                    },
                    serializeArray: function() {
                        return this.map((function() {
                            var t = E.prop(this, "elements");
                            return t ? E.makeArray(t) : this
                        }
                        )).filter((function() {
                            var t = this.type;
                            return this.name && !E(this).is(":disabled") && $e.test(this.nodeName) && !Re.test(t) && (this.checked || !Et.test(t))
                        }
                        )).map((function(t, e) {
                            var n = E(this).val();
                            return null == n ? null : Array.isArray(n) ? E.map(n, (function(t) {
                                return {
                                    name: e.name,
                                    value: t.replace(Pe, "\r\n")
                                }
                            }
                            )) : {
                                name: e.name,
                                value: n.replace(Pe, "\r\n")
                            }
                        }
                        )).get()
                    }
                });
                var Fe = /%20/g
                  , Me = /#.*$/
                  , qe = /([?&])_=[^&]*/
                  , Be = /^(.*?):[ \t]*([^\r\n]*)$/gm
                  , We = /^(?:GET|HEAD)$/
                  , ze = /^\/\//
                  , Ue = {}
                  , Ve = {}
                  , Ge = "*/".concat("*")
                  , Xe = b.createElement("a");
                function Ye(t) {
                    return function(e, n) {
                        "string" != typeof e && (n = e,
                        e = "*");
                        var i, r = 0, o = e.toLowerCase().match(G) || [];
                        if (v(n))
                            for (; i = o[r++]; )
                                "+" === i[0] ? (i = i.slice(1) || "*",
                                (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
                    }
                }
                function Ke(t, e, n, i) {
                    var r = {}
                      , o = t === Ve;
                    function s(a) {
                        var l;
                        return r[a] = !0,
                        E.each(t[a] || [], (function(t, a) {
                            var c = a(e, n, i);
                            return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c),
                            s(c),
                            !1)
                        }
                        )),
                        l
                    }
                    return s(e.dataTypes[0]) || !r["*"] && s("*")
                }
                function Qe(t, e) {
                    var n, i, r = E.ajaxSettings.flatOptions || {};
                    for (n in e)
                        void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
                    return i && E.extend(!0, t, i),
                    t
                }
                Xe.href = Ae.href,
                E.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: Ae.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ae.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: {
                            "*": Ge,
                            text: "text/plain",
                            html: "text/html",
                            xml: "application/xml, text/xml",
                            json: "application/json, text/javascript"
                        },
                        contents: {
                            xml: /\bxml\b/,
                            html: /\bhtml/,
                            json: /\bjson\b/
                        },
                        responseFields: {
                            xml: "responseXML",
                            text: "responseText",
                            json: "responseJSON"
                        },
                        converters: {
                            "* text": String,
                            "text html": !0,
                            "text json": JSON.parse,
                            "text xml": E.parseXML
                        },
                        flatOptions: {
                            url: !0,
                            context: !0
                        }
                    },
                    ajaxSetup: function(t, e) {
                        return e ? Qe(Qe(t, E.ajaxSettings), e) : Qe(E.ajaxSettings, t)
                    },
                    ajaxPrefilter: Ye(Ue),
                    ajaxTransport: Ye(Ve),
                    ajax: function(t, e) {
                        "object" == typeof t && (e = t,
                        t = void 0),
                        e = e || {};
                        var n, r, o, s, a, l, c, u, h, d, f = E.ajaxSetup({}, e), p = f.context || f, g = f.context && (p.nodeType || p.jquery) ? E(p) : E.event, m = E.Deferred(), v = E.Callbacks("once memory"), y = f.statusCode || {}, x = {}, w = {}, T = "canceled", C = {
                            readyState: 0,
                            getResponseHeader: function(t) {
                                var e;
                                if (c) {
                                    if (!s)
                                        for (s = {}; e = Be.exec(o); )
                                            s[e[1].toLowerCase() + " "] = (s[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                    e = s[t.toLowerCase() + " "]
                                }
                                return null == e ? null : e.join(", ")
                            },
                            getAllResponseHeaders: function() {
                                return c ? o : null
                            },
                            setRequestHeader: function(t, e) {
                                return null == c && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t,
                                x[t] = e),
                                this
                            },
                            overrideMimeType: function(t) {
                                return null == c && (f.mimeType = t),
                                this
                            },
                            statusCode: function(t) {
                                var e;
                                if (t)
                                    if (c)
                                        C.always(t[C.status]);
                                    else
                                        for (e in t)
                                            y[e] = [y[e], t[e]];
                                return this
                            },
                            abort: function(t) {
                                var e = t || T;
                                return n && n.abort(e),
                                S(0, e),
                                this
                            }
                        };
                        if (m.promise(C),
                        f.url = ((t || f.url || Ae.href) + "").replace(ze, Ae.protocol + "//"),
                        f.type = e.method || e.type || f.method || f.type,
                        f.dataTypes = (f.dataType || "*").toLowerCase().match(G) || [""],
                        null == f.crossDomain) {
                            l = b.createElement("a");
                            try {
                                l.href = f.url,
                                l.href = l.href,
                                f.crossDomain = Xe.protocol + "//" + Xe.host != l.protocol + "//" + l.host
                            } catch (t) {
                                f.crossDomain = !0
                            }
                        }
                        if (f.data && f.processData && "string" != typeof f.data && (f.data = E.param(f.data, f.traditional)),
                        Ke(Ue, f, e, C),
                        c)
                            return C;
                        for (h in (u = E.event && f.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                        f.type = f.type.toUpperCase(),
                        f.hasContent = !We.test(f.type),
                        r = f.url.replace(Me, ""),
                        f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Fe, "+")) : (d = f.url.slice(r.length),
                        f.data && (f.processData || "string" == typeof f.data) && (r += (Ie.test(r) ? "&" : "?") + f.data,
                        delete f.data),
                        !1 === f.cache && (r = r.replace(qe, "$1"),
                        d = (Ie.test(r) ? "&" : "?") + "_=" + De.guid++ + d),
                        f.url = r + d),
                        f.ifModified && (E.lastModified[r] && C.setRequestHeader("If-Modified-Since", E.lastModified[r]),
                        E.etag[r] && C.setRequestHeader("If-None-Match", E.etag[r])),
                        (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && C.setRequestHeader("Content-Type", f.contentType),
                        C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ge + "; q=0.01" : "") : f.accepts["*"]),
                        f.headers)
                            C.setRequestHeader(h, f.headers[h]);
                        if (f.beforeSend && (!1 === f.beforeSend.call(p, C, f) || c))
                            return C.abort();
                        if (T = "abort",
                        v.add(f.complete),
                        C.done(f.success),
                        C.fail(f.error),
                        n = Ke(Ve, f, e, C)) {
                            if (C.readyState = 1,
                            u && g.trigger("ajaxSend", [C, f]),
                            c)
                                return C;
                            f.async && f.timeout > 0 && (a = i.setTimeout((function() {
                                C.abort("timeout")
                            }
                            ), f.timeout));
                            try {
                                c = !1,
                                n.send(x, S)
                            } catch (t) {
                                if (c)
                                    throw t;
                                S(-1, t)
                            }
                        } else
                            S(-1, "No Transport");
                        function S(t, e, s, l) {
                            var h, d, b, x, w, T = e;
                            c || (c = !0,
                            a && i.clearTimeout(a),
                            n = void 0,
                            o = l || "",
                            C.readyState = t > 0 ? 4 : 0,
                            h = t >= 200 && t < 300 || 304 === t,
                            s && (x = function(t, e, n) {
                                for (var i, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                                    l.shift(),
                                    void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                                if (i)
                                    for (r in a)
                                        if (a[r] && a[r].test(i)) {
                                            l.unshift(r);
                                            break
                                        }
                                if (l[0]in n)
                                    o = l[0];
                                else {
                                    for (r in n) {
                                        if (!l[0] || t.converters[r + " " + l[0]]) {
                                            o = r;
                                            break
                                        }
                                        s || (s = r)
                                    }
                                    o = o || s
                                }
                                if (o)
                                    return o !== l[0] && l.unshift(o),
                                    n[o]
                            }(f, C, s)),
                            !h && E.inArray("script", f.dataTypes) > -1 && E.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}
                            ),
                            x = function(t, e, n, i) {
                                var r, o, s, a, l, c = {}, u = t.dataTypes.slice();
                                if (u[1])
                                    for (s in t.converters)
                                        c[s.toLowerCase()] = t.converters[s];
                                for (o = u.shift(); o; )
                                    if (t.responseFields[o] && (n[t.responseFields[o]] = e),
                                    !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                                    l = o,
                                    o = u.shift())
                                        if ("*" === o)
                                            o = l;
                                        else if ("*" !== l && l !== o) {
                                            if (!(s = c[l + " " + o] || c["* " + o]))
                                                for (r in c)
                                                    if ((a = r.split(" "))[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                        !0 === s ? s = c[r] : !0 !== c[r] && (o = a[0],
                                                        u.unshift(a[1]));
                                                        break
                                                    }
                                            if (!0 !== s)
                                                if (s && t.throws)
                                                    e = s(e);
                                                else
                                                    try {
                                                        e = s(e)
                                                    } catch (t) {
                                                        return {
                                                            state: "parsererror",
                                                            error: s ? t : "No conversion from " + l + " to " + o
                                                        }
                                                    }
                                        }
                                return {
                                    state: "success",
                                    data: e
                                }
                            }(f, x, C, h),
                            h ? (f.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (E.lastModified[r] = w),
                            (w = C.getResponseHeader("etag")) && (E.etag[r] = w)),
                            204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state,
                            d = x.data,
                            h = !(b = x.error))) : (b = T,
                            !t && T || (T = "error",
                            t < 0 && (t = 0))),
                            C.status = t,
                            C.statusText = (e || T) + "",
                            h ? m.resolveWith(p, [d, T, C]) : m.rejectWith(p, [C, T, b]),
                            C.statusCode(y),
                            y = void 0,
                            u && g.trigger(h ? "ajaxSuccess" : "ajaxError", [C, f, h ? d : b]),
                            v.fireWith(p, [C, T]),
                            u && (g.trigger("ajaxComplete", [C, f]),
                            --E.active || E.event.trigger("ajaxStop")))
                        }
                        return C
                    },
                    getJSON: function(t, e, n) {
                        return E.get(t, e, n, "json")
                    },
                    getScript: function(t, e) {
                        return E.get(t, void 0, e, "script")
                    }
                }),
                E.each(["get", "post"], (function(t, e) {
                    E[e] = function(t, n, i, r) {
                        return v(n) && (r = r || i,
                        i = n,
                        n = void 0),
                        E.ajax(E.extend({
                            url: t,
                            type: e,
                            dataType: r,
                            data: n,
                            success: i
                        }, E.isPlainObject(t) && t))
                    }
                }
                )),
                E.ajaxPrefilter((function(t) {
                    var e;
                    for (e in t.headers)
                        "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
                }
                )),
                E._evalUrl = function(t, e, n) {
                    return E.ajax({
                        url: t,
                        type: "GET",
                        dataType: "script",
                        cache: !0,
                        async: !1,
                        global: !1,
                        converters: {
                            "text script": function() {}
                        },
                        dataFilter: function(t) {
                            E.globalEval(t, e, n)
                        }
                    })
                }
                ,
                E.fn.extend({
                    wrapAll: function(t) {
                        var e;
                        return this[0] && (v(t) && (t = t.call(this[0])),
                        e = E(t, this[0].ownerDocument).eq(0).clone(!0),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e.map((function() {
                            for (var t = this; t.firstElementChild; )
                                t = t.firstElementChild;
                            return t
                        }
                        )).append(this)),
                        this
                    },
                    wrapInner: function(t) {
                        return v(t) ? this.each((function(e) {
                            E(this).wrapInner(t.call(this, e))
                        }
                        )) : this.each((function() {
                            var e = E(this)
                              , n = e.contents();
                            n.length ? n.wrapAll(t) : e.append(t)
                        }
                        ))
                    },
                    wrap: function(t) {
                        var e = v(t);
                        return this.each((function(n) {
                            E(this).wrapAll(e ? t.call(this, n) : t)
                        }
                        ))
                    },
                    unwrap: function(t) {
                        return this.parent(t).not("body").each((function() {
                            E(this).replaceWith(this.childNodes)
                        }
                        )),
                        this
                    }
                }),
                E.expr.pseudos.hidden = function(t) {
                    return !E.expr.pseudos.visible(t)
                }
                ,
                E.expr.pseudos.visible = function(t) {
                    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                }
                ,
                E.ajaxSettings.xhr = function() {
                    try {
                        return new i.XMLHttpRequest
                    } catch (t) {}
                }
                ;
                var Je = {
                    0: 200,
                    1223: 204
                }
                  , Ze = E.ajaxSettings.xhr();
                m.cors = !!Ze && "withCredentials"in Ze,
                m.ajax = Ze = !!Ze,
                E.ajaxTransport((function(t) {
                    var e, n;
                    if (m.cors || Ze && !t.crossDomain)
                        return {
                            send: function(r, o) {
                                var s, a = t.xhr();
                                if (a.open(t.type, t.url, t.async, t.username, t.password),
                                t.xhrFields)
                                    for (s in t.xhrFields)
                                        a[s] = t.xhrFields[s];
                                for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                                t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                                r)
                                    a.setRequestHeader(s, r[s]);
                                e = function(t) {
                                    return function() {
                                        e && (e = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                                        "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Je[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                                    }
                                }
                                ,
                                a.onload = e(),
                                n = a.onerror = a.ontimeout = e("error"),
                                void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                                    4 === a.readyState && i.setTimeout((function() {
                                        e && n()
                                    }
                                    ))
                                }
                                ,
                                e = e("abort");
                                try {
                                    a.send(t.hasContent && t.data || null)
                                } catch (t) {
                                    if (e)
                                        throw t
                                }
                            },
                            abort: function() {
                                e && e()
                            }
                        }
                }
                )),
                E.ajaxPrefilter((function(t) {
                    t.crossDomain && (t.contents.script = !1)
                }
                )),
                E.ajaxSetup({
                    accepts: {
                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                    },
                    contents: {
                        script: /\b(?:java|ecma)script\b/
                    },
                    converters: {
                        "text script": function(t) {
                            return E.globalEval(t),
                            t
                        }
                    }
                }),
                E.ajaxPrefilter("script", (function(t) {
                    void 0 === t.cache && (t.cache = !1),
                    t.crossDomain && (t.type = "GET")
                }
                )),
                E.ajaxTransport("script", (function(t) {
                    var e, n;
                    if (t.crossDomain || t.scriptAttrs)
                        return {
                            send: function(i, r) {
                                e = E("<script>").attr(t.scriptAttrs || {}).prop({
                                    charset: t.scriptCharset,
                                    src: t.url
                                }).on("load error", n = function(t) {
                                    e.remove(),
                                    n = null,
                                    t && r("error" === t.type ? 404 : 200, t.type)
                                }
                                ),
                                b.head.appendChild(e[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                }
                ));
                var tn, en = [], nn = /(=)\?(?=&|$)|\?\?/;
                E.ajaxSetup({
                    jsonp: "callback",
                    jsonpCallback: function() {
                        var t = en.pop() || E.expando + "_" + De.guid++;
                        return this[t] = !0,
                        t
                    }
                }),
                E.ajaxPrefilter("json jsonp", (function(t, e, n) {
                    var r, o, s, a = !1 !== t.jsonp && (nn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && nn.test(t.data) && "data");
                    if (a || "jsonp" === t.dataTypes[0])
                        return r = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                        a ? t[a] = t[a].replace(nn, "$1" + r) : !1 !== t.jsonp && (t.url += (Ie.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                        t.converters["script json"] = function() {
                            return s || E.error(r + " was not called"),
                            s[0]
                        }
                        ,
                        t.dataTypes[0] = "json",
                        o = i[r],
                        i[r] = function() {
                            s = arguments
                        }
                        ,
                        n.always((function() {
                            void 0 === o ? E(i).removeProp(r) : i[r] = o,
                            t[r] && (t.jsonpCallback = e.jsonpCallback,
                            en.push(r)),
                            s && v(o) && o(s[0]),
                            s = o = void 0
                        }
                        )),
                        "script"
                }
                )),
                m.createHTMLDocument = ((tn = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
                2 === tn.childNodes.length),
                E.parseHTML = function(t, e, n) {
                    return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e,
                    e = !1),
                    e || (m.createHTMLDocument ? ((i = (e = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href,
                    e.head.appendChild(i)) : e = b),
                    o = !n && [],
                    (r = M.exec(t)) ? [e.createElement(r[1])] : (r = Ot([t], e, o),
                    o && o.length && E(o).remove(),
                    E.merge([], r.childNodes)));
                    var i, r, o
                }
                ,
                E.fn.load = function(t, e, n) {
                    var i, r, o, s = this, a = t.indexOf(" ");
                    return a > -1 && (i = Ee(t.slice(a)),
                    t = t.slice(0, a)),
                    v(e) ? (n = e,
                    e = void 0) : e && "object" == typeof e && (r = "POST"),
                    s.length > 0 && E.ajax({
                        url: t,
                        type: r || "GET",
                        dataType: "html",
                        data: e
                    }).done((function(t) {
                        o = arguments,
                        s.html(i ? E("<div>").append(E.parseHTML(t)).find(i) : t)
                    }
                    )).always(n && function(t, e) {
                        s.each((function() {
                            n.apply(this, o || [t.responseText, e, t])
                        }
                        ))
                    }
                    ),
                    this
                }
                ,
                E.expr.pseudos.animated = function(t) {
                    return E.grep(E.timers, (function(e) {
                        return t === e.elem
                    }
                    )).length
                }
                ,
                E.offset = {
                    setOffset: function(t, e, n) {
                        var i, r, o, s, a, l, c = E.css(t, "position"), u = E(t), h = {};
                        "static" === c && (t.style.position = "relative"),
                        a = u.offset(),
                        o = E.css(t, "top"),
                        l = E.css(t, "left"),
                        ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (s = (i = u.position()).top,
                        r = i.left) : (s = parseFloat(o) || 0,
                        r = parseFloat(l) || 0),
                        v(e) && (e = e.call(t, n, E.extend({}, a))),
                        null != e.top && (h.top = e.top - a.top + s),
                        null != e.left && (h.left = e.left - a.left + r),
                        "using"in e ? e.using.call(t, h) : u.css(h)
                    }
                },
                E.fn.extend({
                    offset: function(t) {
                        if (arguments.length)
                            return void 0 === t ? this : this.each((function(e) {
                                E.offset.setOffset(this, t, e)
                            }
                            ));
                        var e, n, i = this[0];
                        return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(),
                        n = i.ownerDocument.defaultView,
                        {
                            top: e.top + n.pageYOffset,
                            left: e.left + n.pageXOffset
                        }) : {
                            top: 0,
                            left: 0
                        } : void 0
                    },
                    position: function() {
                        if (this[0]) {
                            var t, e, n, i = this[0], r = {
                                top: 0,
                                left: 0
                            };
                            if ("fixed" === E.css(i, "position"))
                                e = i.getBoundingClientRect();
                            else {
                                for (e = this.offset(),
                                n = i.ownerDocument,
                                t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === E.css(t, "position"); )
                                    t = t.parentNode;
                                t && t !== i && 1 === t.nodeType && ((r = E(t).offset()).top += E.css(t, "borderTopWidth", !0),
                                r.left += E.css(t, "borderLeftWidth", !0))
                            }
                            return {
                                top: e.top - r.top - E.css(i, "marginTop", !0),
                                left: e.left - r.left - E.css(i, "marginLeft", !0)
                            }
                        }
                    },
                    offsetParent: function() {
                        return this.map((function() {
                            for (var t = this.offsetParent; t && "static" === E.css(t, "position"); )
                                t = t.offsetParent;
                            return t || gt
                        }
                        ))
                    }
                }),
                E.each({
                    scrollLeft: "pageXOffset",
                    scrollTop: "pageYOffset"
                }, (function(t, e) {
                    var n = "pageYOffset" === e;
                    E.fn[t] = function(i) {
                        return tt(this, (function(t, i, r) {
                            var o;
                            if (y(t) ? o = t : 9 === t.nodeType && (o = t.defaultView),
                            void 0 === r)
                                return o ? o[e] : t[i];
                            o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : t[i] = r
                        }
                        ), t, i, arguments.length)
                    }
                }
                )),
                E.each(["top", "left"], (function(t, e) {
                    E.cssHooks[e] = te(m.pixelPosition, (function(t, n) {
                        if (n)
                            return n = Zt(t, e),
                            Xt.test(n) ? E(t).position()[e] + "px" : n
                    }
                    ))
                }
                )),
                E.each({
                    Height: "height",
                    Width: "width"
                }, (function(t, e) {
                    E.each({
                        padding: "inner" + t,
                        content: e,
                        "": "outer" + t
                    }, (function(n, i) {
                        E.fn[i] = function(r, o) {
                            var s = arguments.length && (n || "boolean" != typeof r)
                              , a = n || (!0 === r || !0 === o ? "margin" : "border");
                            return tt(this, (function(e, n, r) {
                                var o;
                                return y(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                                Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === r ? E.css(e, n, a) : E.style(e, n, r, a)
                            }
                            ), e, s ? r : void 0, s)
                        }
                    }
                    ))
                }
                )),
                E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
                    E.fn[e] = function(t) {
                        return this.on(e, t)
                    }
                }
                )),
                E.fn.extend({
                    bind: function(t, e, n) {
                        return this.on(t, null, e, n)
                    },
                    unbind: function(t, e) {
                        return this.off(t, null, e)
                    },
                    delegate: function(t, e, n, i) {
                        return this.on(e, t, n, i)
                    },
                    undelegate: function(t, e, n) {
                        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                    },
                    hover: function(t, e) {
                        return this.on("mouseenter", t).on("mouseleave", e || t)
                    }
                }),
                E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
                    E.fn[e] = function(t, n) {
                        return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                    }
                }
                ));
                var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
                E.proxy = function(t, e) {
                    var n, i, r;
                    if ("string" == typeof e && (n = t[e],
                    e = t,
                    t = n),
                    v(t))
                        return i = a.call(arguments, 2),
                        r = function() {
                            return t.apply(e || this, i.concat(a.call(arguments)))
                        }
                        ,
                        r.guid = t.guid = t.guid || E.guid++,
                        r
                }
                ,
                E.holdReady = function(t) {
                    t ? E.readyWait++ : E.ready(!0)
                }
                ,
                E.isArray = Array.isArray,
                E.parseJSON = JSON.parse,
                E.nodeName = j,
                E.isFunction = v,
                E.isWindow = y,
                E.camelCase = rt,
                E.type = T,
                E.now = Date.now,
                E.isNumeric = function(t) {
                    var e = E.type(t);
                    return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
                }
                ,
                E.trim = function(t) {
                    return null == t ? "" : (t + "").replace(rn, "$1")
                }
                ,
                void 0 === (n = function() {
                    return E
                }
                .apply(e, [])) || (t.exports = n);
                var on = i.jQuery
                  , sn = i.$;
                return E.noConflict = function(t) {
                    return i.$ === E && (i.$ = sn),
                    t && i.jQuery === E && (i.jQuery = on),
                    E
                }
                ,
                void 0 === r && (i.jQuery = i.$ = E),
                E
            }
            ))
        },
        551: function(t, e, n) {
            var i, r = n(755);
            (i = r).fn.jrumble = function(t) {
                var e = i.extend({
                    x: 2,
                    y: 2,
                    rotation: 1,
                    speed: 15,
                    opacity: !1,
                    opacityMin: .5
                }, t);
                return this.each((function() {
                    var t, n, r = i(this), o = 2 * e.x, s = 2 * e.y, a = 2 * e.rotation, l = 0 === e.speed ? 1 : e.speed, c = e.opacity, u = e.opacityMin, h = function() {
                        var e = Math.floor(Math.random() * (o + 1)) - o / 2
                          , n = Math.floor(Math.random() * (s + 1)) - s / 2
                          , i = Math.floor(Math.random() * (a + 1)) - a / 2
                          , l = c ? Math.random() + u : 1;
                        e = 0 === e && 0 !== o ? Math.random() < .5 ? 1 : -1 : e,
                        n = 0 === n && 0 !== s ? Math.random() < .5 ? 1 : -1 : n,
                        "inline" === r.css("display") && (t = !0,
                        r.css("display", "inline-block")),
                        r.css({
                            position: "relative",
                            left: e + "px",
                            top: n + "px",
                            "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + 100 * l + ")",
                            filter: "alpha(opacity=" + 100 * l + ")",
                            "-moz-opacity": l,
                            "-khtml-opacity": l,
                            opacity: l,
                            "-webkit-transform": "rotate(" + i + "deg)",
                            "-moz-transform": "rotate(" + i + "deg)",
                            "-ms-transform": "rotate(" + i + "deg)",
                            "-o-transform": "rotate(" + i + "deg)",
                            transform: "rotate(" + i + "deg)"
                        })
                    }, d = {
                        left: 0,
                        top: 0,
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)",
                        filter: "alpha(opacity=100)",
                        "-moz-opacity": 1,
                        "-khtml-opacity": 1,
                        opacity: 1,
                        "-webkit-transform": "rotate(0deg)",
                        "-moz-transform": "rotate(0deg)",
                        "-ms-transform": "rotate(0deg)",
                        "-o-transform": "rotate(0deg)",
                        transform: "rotate(0deg)"
                    };
                    r.bind({
                        startRumble: function(t) {
                            t.stopPropagation(),
                            clearInterval(n),
                            n = setInterval(h, l)
                        },
                        stopRumble: function(e) {
                            e.stopPropagation(),
                            clearInterval(n),
                            t && r.css("display", "inline"),
                            r.css(d)
                        }
                    })
                }
                ))
            }
        },
        884: function(t, e, n) {
            var i, r;
            i = [n(755)],
            r = function(t) {
                return function(t, e, n) {
                    "use strict";
                    var i, r, o, s, a, l, c, u, h, d, f, p, g, m, v, y, b, x, w, T, C, S, E, k, j, _, A, D;
                    T = {
                        paneClass: "nano-pane",
                        sliderClass: "nano-slider",
                        contentClass: "nano-content",
                        iOSNativeScrolling: !1,
                        preventPageScrolling: !1,
                        disableResize: !1,
                        alwaysVisible: !1,
                        flashDelay: 1500,
                        sliderMinHeight: 20,
                        sliderMaxHeight: null,
                        documentContext: null,
                        windowContext: null
                    },
                    v = "scroll",
                    c = "mousedown",
                    u = "mouseenter",
                    h = "mousemove",
                    f = "mousewheel",
                    d = "mouseup",
                    m = "resize",
                    a = "drag",
                    l = "enter",
                    b = "up",
                    g = "panedown",
                    o = "DOMMouseScroll",
                    s = "down",
                    x = "wheel",
                    y = "touchmove",
                    i = "Microsoft Internet Explorer" === e.navigator.appName && /msie 7./i.test(e.navigator.appVersion) && e.ActiveXObject,
                    r = null,
                    k = e.requestAnimationFrame,
                    w = e.cancelAnimationFrame,
                    _ = n.createElement("div").style,
                    A = function() {
                        var t, e, n, i;
                        for (t = n = 0,
                        i = (e = ["t", "webkitT", "MozT", "msT", "OT"]).length; n < i; t = ++n)
                            if (e[t],
                            e[t] + "ransform"in _)
                                return e[t].substr(0, e[t].length - 1);
                        return !1
                    }(),
                    D = "transform",
                    j = !1 !== A && ("" === A ? D : A + D.charAt(0).toUpperCase() + D.substr(1)),
                    S = !1 !== j,
                    C = function() {
                        var t, e, i;
                        return (e = (t = n.createElement("div")).style).position = "absolute",
                        e.width = "100px",
                        e.height = "100px",
                        e.overflow = v,
                        e.top = "-9999px",
                        n.body.appendChild(t),
                        i = t.offsetWidth - t.clientWidth,
                        n.body.removeChild(t),
                        i
                    }
                    ,
                    E = function() {
                        var t, n, i;
                        return n = e.navigator.userAgent,
                        !!(t = /(?=.+Mac OS X)(?=.+Firefox)/.test(n)) && ((i = /Firefox\/\d{2}\./.exec(n)) && (i = i[0].replace(/\D+/g, "")),
                        t && +i > 23)
                    }
                    ,
                    p = function() {
                        function p(i, o) {
                            this.el = i,
                            this.options = o,
                            r || (r = C()),
                            this.$el = t(this.el),
                            this.doc = t(this.options.documentContext || n),
                            this.win = t(this.options.windowContext || e),
                            this.body = this.doc.find("body"),
                            this.$content = this.$el.children("." + this.options.contentClass),
                            this.$content.attr("tabindex", this.options.tabIndex || 0),
                            this.content = this.$content[0],
                            this.previousPosition = 0,
                            this.options.iOSNativeScrolling && null != this.el.style.WebkitOverflowScrolling ? this.nativeScrolling() : this.generate(),
                            this.createEvents(),
                            this.addEvents(),
                            this.reset()
                        }
                        return p.prototype.preventScrolling = function(t, e) {
                            if (this.isActive)
                                if (t.type === o)
                                    (e === s && t.originalEvent.detail > 0 || e === b && t.originalEvent.detail < 0) && t.preventDefault();
                                else if (t.type === f) {
                                    if (!t.originalEvent || !t.originalEvent.wheelDelta)
                                        return;
                                    (e === s && t.originalEvent.wheelDelta < 0 || e === b && t.originalEvent.wheelDelta > 0) && t.preventDefault()
                                }
                        }
                        ,
                        p.prototype.nativeScrolling = function() {
                            this.$content.css({
                                WebkitOverflowScrolling: "touch"
                            }),
                            this.iOSNativeScrolling = !0,
                            this.isActive = !0
                        }
                        ,
                        p.prototype.updateScrollValues = function() {
                            var t, e;
                            t = this.content,
                            this.maxScrollTop = t.scrollHeight - t.clientHeight,
                            this.prevScrollTop = this.contentScrollTop || 0,
                            this.contentScrollTop = t.scrollTop,
                            e = this.contentScrollTop > this.previousPosition ? "down" : this.contentScrollTop < this.previousPosition ? "up" : "same",
                            this.previousPosition = this.contentScrollTop,
                            "same" !== e && this.$el.trigger("update", {
                                position: this.contentScrollTop,
                                maximum: this.maxScrollTop,
                                direction: e
                            }),
                            this.iOSNativeScrolling || (this.maxSliderTop = this.paneHeight - this.sliderHeight,
                            this.sliderTop = 0 === this.maxScrollTop ? 0 : this.contentScrollTop * this.maxSliderTop / this.maxScrollTop)
                        }
                        ,
                        p.prototype.setOnScrollStyles = function() {
                            var t, e;
                            S ? (t = {})[j] = "translate(0, " + this.sliderTop + "px)" : t = {
                                top: this.sliderTop
                            },
                            k ? (w && this.scrollRAF && w(this.scrollRAF),
                            this.scrollRAF = k((e = this,
                            function() {
                                return e.scrollRAF = null,
                                e.slider.css(t)
                            }
                            ))) : this.slider.css(t)
                        }
                        ,
                        p.prototype.createEvents = function() {
                            var t;
                            this.events = {
                                down: (t = this,
                                function(e) {
                                    return t.isBeingDragged = !0,
                                    t.offsetY = e.pageY - t.slider.offset().top,
                                    t.slider.is(e.target) || (t.offsetY = 0),
                                    t.pane.addClass("active"),
                                    t.doc.bind(h, t.events[a]).bind(d, t.events[b]),
                                    t.body.bind(u, t.events[l]),
                                    !1
                                }
                                ),
                                drag: function(t) {
                                    return function(e) {
                                        return t.sliderY = e.pageY - t.$el.offset().top - t.paneTop - (t.offsetY || .5 * t.sliderHeight),
                                        t.scroll(),
                                        t.contentScrollTop >= t.maxScrollTop && t.prevScrollTop !== t.maxScrollTop ? t.$el.trigger("scrollend") : 0 === t.contentScrollTop && 0 !== t.prevScrollTop && t.$el.trigger("scrolltop"),
                                        !1
                                    }
                                }(this),
                                up: function(t) {
                                    return function(e) {
                                        return t.isBeingDragged = !1,
                                        t.pane.removeClass("active"),
                                        t.doc.unbind(h, t.events[a]).unbind(d, t.events[b]),
                                        t.body.unbind(u, t.events[l]),
                                        !1
                                    }
                                }(this),
                                resize: function(t) {
                                    return function(e) {
                                        t.reset()
                                    }
                                }(this),
                                panedown: function(t) {
                                    return function(e) {
                                        return t.sliderY = (e.offsetY || e.originalEvent.layerY) - .5 * t.sliderHeight,
                                        t.scroll(),
                                        t.events.down(e),
                                        !1
                                    }
                                }(this),
                                scroll: function(t) {
                                    return function(e) {
                                        t.updateScrollValues(),
                                        t.isBeingDragged || (t.iOSNativeScrolling || (t.sliderY = t.sliderTop,
                                        t.setOnScrollStyles()),
                                        null != e && (t.contentScrollTop >= t.maxScrollTop ? (t.options.preventPageScrolling && t.preventScrolling(e, s),
                                        t.prevScrollTop !== t.maxScrollTop && t.$el.trigger("scrollend")) : 0 === t.contentScrollTop && (t.options.preventPageScrolling && t.preventScrolling(e, b),
                                        0 !== t.prevScrollTop && t.$el.trigger("scrolltop"))))
                                    }
                                }(this),
                                wheel: function(t) {
                                    return function(e) {
                                        var n;
                                        if (null != e)
                                            return (n = e.delta || e.wheelDelta || e.originalEvent && e.originalEvent.wheelDelta || -e.detail || e.originalEvent && -e.originalEvent.detail) && (t.sliderY += -n / 3),
                                            t.scroll(),
                                            !1
                                    }
                                }(this),
                                enter: function(t) {
                                    return function(e) {
                                        var n;
                                        if (t.isBeingDragged)
                                            return 1 !== (e.buttons || e.which) ? (n = t.events)[b].apply(n, arguments) : void 0
                                    }
                                }(this)
                            }
                        }
                        ,
                        p.prototype.addEvents = function() {
                            var t;
                            this.removeEvents(),
                            t = this.events,
                            this.options.disableResize || this.win.bind(m, t[m]),
                            this.iOSNativeScrolling || (this.slider.bind(c, t[s]),
                            this.pane.bind(c, t[g]).bind(f + " " + o, t[x])),
                            this.$content.bind(v + " " + f + " " + o + " " + y, t[v])
                        }
                        ,
                        p.prototype.removeEvents = function() {
                            var t;
                            t = this.events,
                            this.win.unbind(m, t[m]),
                            this.iOSNativeScrolling || (this.slider.unbind(),
                            this.pane.unbind()),
                            this.$content.unbind(v + " " + f + " " + o + " " + y, t[v])
                        }
                        ,
                        p.prototype.generate = function() {
                            var t, n, i, o, s;
                            return o = (n = this.options).paneClass,
                            s = n.sliderClass,
                            n.contentClass,
                            (i = this.$el.children("." + o)).length || i.children("." + s).length || this.$el.append('<div class="' + o + '"><div class="' + s + '" /></div>'),
                            this.pane = this.$el.children("." + o),
                            this.slider = this.pane.find("." + s),
                            0 === r && E() ? t = {
                                right: -14,
                                paddingRight: +e.getComputedStyle(this.content, null).getPropertyValue("padding-right").replace(/[^0-9.]+/g, "") + 14
                            } : r && (t = {
                                right: -r
                            },
                            this.$el.addClass("has-scrollbar")),
                            null != t && this.$content.css(t),
                            this
                        }
                        ,
                        p.prototype.restore = function() {
                            this.stopped = !1,
                            this.iOSNativeScrolling || this.pane.show(),
                            this.addEvents()
                        }
                        ,
                        p.prototype.reset = function() {
                            var t, e, n, o, s, a, l, c, u, h, d;
                            if (!this.iOSNativeScrolling)
                                return this.$el.find("." + this.options.paneClass).length || this.generate().stop(),
                                this.stopped && this.restore(),
                                s = (o = (t = this.content).style).overflowY,
                                i && this.$content.css({
                                    height: this.$content.height()
                                }),
                                e = t.scrollHeight + r,
                                (u = parseInt(this.$el.css("max-height"), 10)) > 0 && (this.$el.height(""),
                                this.$el.height(t.scrollHeight > u ? u : t.scrollHeight)),
                                l = (a = this.pane.outerHeight(!1)) + (c = parseInt(this.pane.css("top"), 10)) + parseInt(this.pane.css("bottom"), 10),
                                (d = Math.round(l / e * a)) < this.options.sliderMinHeight ? d = this.options.sliderMinHeight : null != this.options.sliderMaxHeight && d > this.options.sliderMaxHeight && (d = this.options.sliderMaxHeight),
                                s === v && o.overflowX !== v && (d += r),
                                this.maxSliderTop = l - d,
                                this.contentHeight = e,
                                this.paneHeight = a,
                                this.paneOuterHeight = l,
                                this.sliderHeight = d,
                                this.paneTop = c,
                                this.slider.height(d),
                                this.events.scroll(),
                                this.pane.show(),
                                this.isActive = !0,
                                t.scrollHeight === t.clientHeight || this.pane.outerHeight(!0) >= t.scrollHeight && s !== v ? (this.pane.hide(),
                                this.isActive = !1) : this.el.clientHeight === t.scrollHeight && s === v ? this.slider.hide() : this.slider.show(),
                                this.pane.css({
                                    opacity: this.options.alwaysVisible ? 1 : "",
                                    visibility: this.options.alwaysVisible ? "visible" : ""
                                }),
                                "static" !== (n = this.$content.css("position")) && "relative" !== n || (h = parseInt(this.$content.css("right"), 10)) && this.$content.css({
                                    right: "",
                                    marginRight: h
                                }),
                                this;
                            this.contentHeight = this.content.scrollHeight
                        }
                        ,
                        p.prototype.scroll = function() {
                            if (this.isActive)
                                return this.sliderY = Math.max(0, this.sliderY),
                                this.sliderY = Math.min(this.maxSliderTop, this.sliderY),
                                this.$content.scrollTop(this.maxScrollTop * this.sliderY / this.maxSliderTop),
                                this.iOSNativeScrolling || (this.updateScrollValues(),
                                this.setOnScrollStyles()),
                                this
                        }
                        ,
                        p.prototype.scrollBottom = function(t) {
                            if (this.isActive)
                                return this.$content.scrollTop(this.contentHeight - this.$content.height() - t).trigger(f),
                                this.stop().restore(),
                                this
                        }
                        ,
                        p.prototype.scrollTop = function(t) {
                            if (this.isActive)
                                return this.$content.scrollTop(+t).trigger(f),
                                this.stop().restore(),
                                this
                        }
                        ,
                        p.prototype.scrollTo = function(t) {
                            if (this.isActive)
                                return this.scrollTop(this.$el.find(t).get(0).offsetTop),
                                this
                        }
                        ,
                        p.prototype.stop = function() {
                            return w && this.scrollRAF && (w(this.scrollRAF),
                            this.scrollRAF = null),
                            this.stopped = !0,
                            this.removeEvents(),
                            this.iOSNativeScrolling || this.pane.hide(),
                            this
                        }
                        ,
                        p.prototype.destroy = function() {
                            return this.stopped || this.stop(),
                            !this.iOSNativeScrolling && this.pane.length && this.pane.remove(),
                            i && this.$content.height(""),
                            this.$content.removeAttr("tabindex"),
                            this.$el.hasClass("has-scrollbar") && (this.$el.removeClass("has-scrollbar"),
                            this.$content.css({
                                right: ""
                            })),
                            this
                        }
                        ,
                        p.prototype.flash = function() {
                            var t;
                            if (!this.iOSNativeScrolling && this.isActive)
                                return this.reset(),
                                this.pane.addClass("flashed"),
                                setTimeout((t = this,
                                function() {
                                    t.pane.removeClass("flashed")
                                }
                                ), this.options.flashDelay),
                                this
                        }
                        ,
                        p
                    }(),
                    t.fn.nanoScroller = function(e) {
                        return this.each((function() {
                            var n, i;
                            if ((i = this.nanoscroller) || (n = t.extend({}, T, e),
                            this.nanoscroller = i = new p(this,n)),
                            e && "object" == typeof e) {
                                if (t.extend(i.options, e),
                                null != e.scrollBottom)
                                    return i.scrollBottom(e.scrollBottom);
                                if (null != e.scrollTop)
                                    return i.scrollTop(e.scrollTop);
                                if (e.scrollTo)
                                    return i.scrollTo(e.scrollTo);
                                if ("bottom" === e.scroll)
                                    return i.scrollBottom(0);
                                if ("top" === e.scroll)
                                    return i.scrollTop(0);
                                if (e.scroll && e.scroll instanceof t)
                                    return i.scrollTo(e.scroll);
                                if (e.stop)
                                    return i.stop();
                                if (e.destroy)
                                    return i.destroy();
                                if (e.flash)
                                    return i.flash()
                            }
                            return i.reset()
                        }
                        ))
                    }
                    ,
                    t.fn.nanoScroller.Constructor = p
                }(t, window, document)
            }
            .apply(e, i),
            void 0 === r || (t.exports = r)
        },
        748: function(t, e, n) {
            !function(t, e, n, i) {
                "use strict";
                var r = "starRating"
                  , o = function() {}
                  , s = {
                    totalStars: 5,
                    useFullStars: !1,
                    starShape: "straight",
                    emptyColor: "lightgray",
                    hoverColor: "orange",
                    activeColor: "gold",
                    ratedColor: "crimson",
                    useGradient: !0,
                    readOnly: !1,
                    disableAfterRate: !0,
                    baseUrl: !1,
                    starGradient: {
                        start: "#FEF7CD",
                        end: "#FF9511"
                    },
                    strokeWidth: 4,
                    strokeColor: "black",
                    initialRating: 0,
                    starSize: 40,
                    callback: o,
                    onHover: o,
                    onLeave: o
                }
                  , a = function(e, n) {
                    var i, o;
                    this.element = e,
                    this.$el = t(e),
                    this.settings = t.extend({}, s, n),
                    i = this.$el.data("rating") || this.settings.initialRating,
                    o = ((this.settings.forceRoundUp ? Math.ceil : Math.round)(2 * i) / 2).toFixed(1),
                    this._state = {
                        rating: o
                    },
                    this._uid = Math.floor(999 * Math.random()),
                    n.starGradient || this.settings.useGradient || (this.settings.starGradient.start = this.settings.starGradient.end = this.settings.activeColor),
                    this._defaults = s,
                    this._name = r,
                    this.init()
                }
                  , l = {
                    init: function() {
                        this.renderMarkup(),
                        this.addListeners(),
                        this.initRating()
                    },
                    addListeners: function() {
                        this.settings.readOnly || (this.$stars.on("mouseover", this.hoverRating.bind(this)),
                        this.$stars.on("mouseout", this.restoreState.bind(this)),
                        this.$stars.on("click", this.handleRating.bind(this)))
                    },
                    hoverRating: function(t) {
                        var e = this.getIndex(t);
                        this.paintStars(e, "hovered"),
                        this.settings.onHover(e + 1, this._state.rating, this.$el)
                    },
                    handleRating: function(t) {
                        var e = this.getIndex(t) + 1;
                        this.applyRating(e, this.$el),
                        this.executeCallback(e, this.$el),
                        this.settings.disableAfterRate && this.$stars.off()
                    },
                    applyRating: function(t) {
                        var e = t - 1;
                        this.paintStars(e, "rated"),
                        this._state.rating = e + 1,
                        this._state.rated = !0
                    },
                    restoreState: function(t) {
                        var e = this.getIndex(t)
                          , n = this._state.rating || -1
                          , i = this._state.rated ? "rated" : "active";
                        this.paintStars(n - 1, i),
                        this.settings.onLeave(e + 1, this._state.rating, this.$el)
                    },
                    getIndex: function(e) {
                        var n = t(e.currentTarget)
                          , i = n.width()
                          , r = t(e.target).attr("data-side");
                        r = r || this.getOffsetByPixel(e, n, i),
                        r = this.settings.useFullStars ? "right" : r;
                        var o = n.index() - ("left" === r ? .5 : 0);
                        return o = o < .5 && e.offsetX < i / 4 ? -1 : o
                    },
                    getOffsetByPixel: function(t, e, n) {
                        return t.pageX - e.offset().left <= n / 2 && !this.settings.useFullStars ? "left" : "right"
                    },
                    initRating: function() {
                        this.paintStars(this._state.rating - 1, "active")
                    },
                    paintStars: function(e, n) {
                        var i, r, o, s;
                        t.each(this.$stars, function(a, l) {
                            i = t(l).find('[data-side="left"]'),
                            r = t(l).find('[data-side="right"]'),
                            o = s = a <= e ? n : "empty",
                            o = a - e == .5 ? n : o,
                            i.attr("class", "svg-" + o + "-" + this._uid),
                            r.attr("class", "svg-" + s + "-" + this._uid)
                        }
                        .bind(this))
                    },
                    renderMarkup: function() {
                        for (var t = this.settings, e = t.baseUrl ? location.href.split("#")[0] : "", n = '<div class="jq-star" style="width:' + t.starSize + "px;  height:" + t.starSize + 'px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" ' + this.getSvgDimensions(t.starShape) + " stroke-width:" + t.strokeWidth + 'px;" xml:space="preserve"><style type="text/css">.svg-empty-' + this._uid + "{fill:url(" + e + "#" + this._uid + "_SVGID_1_);}.svg-hovered-" + this._uid + "{fill:url(" + e + "#" + this._uid + "_SVGID_2_);}.svg-active-" + this._uid + "{fill:url(" + e + "#" + this._uid + "_SVGID_3_);}.svg-rated-" + this._uid + "{fill:" + t.ratedColor + ";}</style>" + this.getLinearGradient(this._uid + "_SVGID_1_", t.emptyColor, t.emptyColor, t.starShape) + this.getLinearGradient(this._uid + "_SVGID_2_", t.hoverColor, t.hoverColor, t.starShape) + this.getLinearGradient(this._uid + "_SVGID_3_", t.starGradient.start, t.starGradient.end, t.starShape) + this.getVectorPath(this._uid, {
                            starShape: t.starShape,
                            strokeWidth: t.strokeWidth,
                            strokeColor: t.strokeColor
                        }) + "</svg></div>", i = "", r = 0; r < t.totalStars; r++)
                            i += n;
                        this.$el.append(i),
                        this.$stars = this.$el.find(".jq-star")
                    },
                    getVectorPath: function(t, e) {
                        return "rounded" === e.starShape ? this.getRoundedVectorPath(t, e) : this.getSpikeVectorPath(t, e)
                    },
                    getSpikeVectorPath: function(t, e) {
                        return '<polygon data-side="center" class="svg-empty-' + t + '" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 " style="fill: transparent; stroke: ' + e.strokeColor + ';" /><polygon data-side="left" class="svg-empty-' + t + '" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 " style="stroke-opacity: 0;" /><polygon data-side="right" class="svg-empty-' + t + '" points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 " style="stroke-opacity: 0;" />'
                    },
                    getRoundedVectorPath: function(t, e) {
                        var n = "M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z";
                        return '<path data-side="center" class="svg-empty-' + t + '" d="' + n + '" style="stroke: ' + e.strokeColor + '; fill: transparent; " /><path data-side="right" class="svg-empty-' + t + '" d="' + n + '" style="stroke-opacity: 0;" /><path data-side="left" class="svg-empty-' + t + '" d="M121,648c-7.3,0-14.1-2.2-19.8-6.4c-10.4-7.6-15.6-20.3-13.4-33l24-139.9l-101.6-99 c-9.1-8.9-12.4-22.4-8.6-34.5c3.9-12.1,14.6-21.1,27.2-23l140.4-20.4L232,164.6c5.7-11.6,17.3-18.8,30.2-16.8c0.6,0,1,0.4,1,1 v430.1c0,0.4-0.2,0.7-0.5,0.9l-126,66.3C132,646.6,126.6,648,121,648z" style="stroke: ' + e.strokeColor + '; stroke-opacity: 0;" />'
                    },
                    getSvgDimensions: function(t) {
                        return "rounded" === t ? 'width="550px" height="500.2px" viewBox="0 146.8 550 500.2" style="enable-background:new 0 0 550 500.2;' : 'x="0px" y="0px" width="305px" height="305px" viewBox="60 -62 309 309" style="enable-background:new 64 -59 305 305;'
                    },
                    getLinearGradient: function(t, e, n, i) {
                        return '<linearGradient id="' + t + '" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="' + ("rounded" === i ? 500 : 250) + '"><stop  offset="0" style="stop-color:' + e + '"/><stop  offset="1" style="stop-color:' + n + '"/> </linearGradient>'
                    },
                    executeCallback: function(t, e) {
                        (0,
                        this.settings.callback)(t, e)
                    }
                }
                  , c = {
                    unload: function() {
                        var e = "plugin_" + r
                          , n = t(this);
                        n.data(e).$stars.off(),
                        n.removeData(e).remove()
                    },
                    setRating: function(e, n) {
                        var i = "plugin_" + r
                          , o = t(this).data(i);
                        e > o.settings.totalStars || e < 0 || (n && (e = Math.round(e)),
                        o.applyRating(e))
                    },
                    getRating: function() {
                        var e = "plugin_" + r;
                        return t(this).data(e)._state.rating
                    },
                    resize: function(e) {
                        var n = "plugin_" + r
                          , i = t(this).data(n).$stars;
                        e <= 1 || e > 200 ? console.log("star size out of bounds") : (i = Array.prototype.slice.call(i)).forEach((function(n) {
                            t(n).css({
                                width: e + "px",
                                height: e + "px"
                            })
                        }
                        ))
                    },
                    setReadOnly: function(e) {
                        var n = "plugin_" + r
                          , i = t(this).data(n);
                        !0 === e ? i.$stars.off("mouseover mouseout click") : (i.settings.readOnly = !1,
                        i.addListeners())
                    }
                };
                t.extend(a.prototype, l),
                t.fn[r] = function(e) {
                    if (!t.isPlainObject(e)) {
                        if (c.hasOwnProperty(e))
                            return c[e].apply(this, Array.prototype.slice.call(arguments, 1));
                        t.error("Method " + e + " does not exist on " + r + ".js")
                    }
                    return this.each((function() {
                        t.data(this, "plugin_" + r) || t.data(this, "plugin_" + r, new a(this,e))
                    }
                    ))
                }
            }(n(755), window, document)
        },
        607: function(t, e, n) {
            !function(t) {
                function e(t, e) {
                    return "function" == typeof t ? t.call(e) : t
                }
                function n(e, n) {
                    this.$element = t(e),
                    this.options = n,
                    this.enabled = !0,
                    this.fixTitle()
                }
                n.prototype = {
                    show: function() {
                        var n = this.getTitle();
                        if (n && this.enabled) {
                            var i = this.tip();
                            i.find(".tipsy-inner")[this.options.html ? "html" : "text"](n),
                            i[0].className = "tipsy",
                            i.remove().css({
                                top: 0,
                                left: 0,
                                visibility: "hidden",
                                display: "block"
                            }).prependTo(document.body);
                            var r, o = t.extend({}, this.$element.offset(), {
                                width: this.$element[0].offsetWidth,
                                height: this.$element[0].offsetHeight
                            }), s = i[0].offsetWidth, a = i[0].offsetHeight, l = e(this.options.gravity, this.$element[0]);
                            switch (l.charAt(0)) {
                            case "n":
                                r = {
                                    top: o.top + o.height + this.options.offset,
                                    left: o.left + o.width / 2 - s / 2
                                };
                                break;
                            case "s":
                                r = {
                                    top: o.top - a - this.options.offset,
                                    left: o.left + o.width / 2 - s / 2
                                };
                                break;
                            case "e":
                                r = {
                                    top: o.top + o.height / 2 - a / 2,
                                    left: o.left - s - this.options.offset
                                };
                                break;
                            case "w":
                                r = {
                                    top: o.top + o.height / 2 - a / 2,
                                    left: o.left + o.width + this.options.offset
                                }
                            }
                            2 == l.length && ("w" == l.charAt(1) ? r.left = o.left + o.width / 2 - 15 : r.left = o.left + o.width / 2 - s + 15),
                            i.css(r).addClass("tipsy-" + l),
                            i.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + l.charAt(0),
                            this.options.className && i.addClass(e(this.options.className, this.$element[0])),
                            this.options.fade ? i.stop().css({
                                opacity: 0,
                                display: "block",
                                visibility: "visible"
                            }).animate({
                                opacity: this.options.opacity
                            }) : i.css({
                                visibility: "visible",
                                opacity: this.options.opacity
                            })
                        }
                    },
                    hide: function() {
                        this.options.fade ? this.tip().stop().fadeOut((function() {
                            t(this).remove()
                        }
                        )) : this.tip().remove()
                    },
                    fixTitle: function() {
                        var t = this.$element;
                        (t.attr("title") || "string" != typeof t.attr("original-title")) && t.attr("original-title", t.attr("title") || "").removeAttr("title")
                    },
                    getTitle: function() {
                        var t, e = this.$element, n = this.options;
                        return this.fixTitle(),
                        "string" == typeof (n = this.options).title ? t = e.attr("title" == n.title ? "original-title" : n.title) : "function" == typeof n.title && (t = n.title.call(e[0])),
                        (t = ("" + t).replace(/(^\s*|\s*$)/, "")) || n.fallback
                    },
                    tip: function() {
                        return this.$tip || (this.$tip = t('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"></div>'),
                        this.$tip.data("tipsy-pointee", this.$element[0])),
                        this.$tip
                    },
                    validate: function() {
                        this.$element[0].parentNode || (this.hide(),
                        this.$element = null,
                        this.options = null)
                    },
                    enable: function() {
                        this.enabled = !0
                    },
                    disable: function() {
                        this.enabled = !1
                    },
                    toggleEnabled: function() {
                        this.enabled = !this.enabled
                    }
                },
                t.fn.tipsy = function(e) {
                    if (!0 === e)
                        return this.data("tipsy");
                    if ("string" == typeof e) {
                        var i = this.data("tipsy");
                        return i && i[e](),
                        this
                    }
                    function r(i) {
                        var r = t.data(i, "tipsy");
                        return r || (r = new n(i,t.fn.tipsy.elementOptions(i, e)),
                        t.data(i, "tipsy", r)),
                        r
                    }
                    if ((e = t.extend({}, t.fn.tipsy.defaults, e)).live || this.each((function() {
                        r(this)
                    }
                    )),
                    "manual" != e.trigger) {
                        var o = e.live ? "live" : "bind"
                          , s = "hover" == e.trigger ? "mouseenter" : "focus"
                          , a = "hover" == e.trigger ? "mouseleave" : "blur";
                        this[o](s, (function() {
                            var t = r(this);
                            t.hoverState = "in",
                            0 == e.delayIn ? t.show() : (t.fixTitle(),
                            setTimeout((function() {
                                "in" == t.hoverState && t.show()
                            }
                            ), e.delayIn))
                        }
                        ))[o](a, (function() {
                            var t = r(this);
                            t.hoverState = "out",
                            0 == e.delayOut ? t.hide() : setTimeout((function() {
                                "out" == t.hoverState && t.hide()
                            }
                            ), e.delayOut)
                        }
                        ))
                    }
                    return this
                }
                ,
                t.fn.tipsy.defaults = {
                    className: null,
                    delayIn: 0,
                    delayOut: 0,
                    fade: !1,
                    fallback: "",
                    gravity: "n",
                    html: !1,
                    live: !1,
                    offset: 0,
                    opacity: .8,
                    title: "title",
                    trigger: "hover"
                },
                t.fn.tipsy.revalidate = function() {
                    t(".tipsy").each((function() {
                        var e = t.data(this, "tipsy-pointee");
                        e && function(t) {
                            for (; t = t.parentNode; )
                                if (t == document)
                                    return !0;
                            return !1
                        }(e) || t(this).remove()
                    }
                    ))
                }
                ,
                t.fn.tipsy.elementOptions = function(e, n) {
                    return t.metadata ? t.extend({}, n, t(e).metadata()) : n
                }
                ,
                t.fn.tipsy.autoNS = function() {
                    return t(this).offset().top > t(document).scrollTop() + t(window).height() / 2 ? "s" : "n"
                }
                ,
                t.fn.tipsy.autoWE = function() {
                    return t(this).offset().left > t(document).scrollLeft() + t(window).width() / 2 ? "e" : "w"
                }
                ,
                t.fn.tipsy.autoBounds = function(e, n) {
                    return function() {
                        var i = {
                            ns: n[0],
                            ew: n.length > 1 && n[1]
                        }
                          , r = t(document).scrollTop() + e
                          , o = t(document).scrollLeft() + e
                          , s = t(this);
                        return s.offset().top < r && (i.ns = "n"),
                        s.offset().left < o && (i.ew = "w"),
                        t(window).width() + t(document).scrollLeft() - s.offset().left < e && (i.ew = "e"),
                        t(window).height() + t(document).scrollTop() - s.offset().top < e && (i.ns = "s"),
                        i.ns + (i.ew ? i.ew : "")
                    }
                }
            }(n(755))
        }
    }
      , e = {};
    function n(i) {
        var r = e[i];
        if (void 0 !== r)
            return r.exports;
        var o = e[i] = {
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n),
        o.exports
    }
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    function() {
        var t;
        n.g.importScripts && (t = n.g.location + "");
        var e = n.g.document;
        if (!t && e && (e.currentScript && (t = e.currentScript.src),
        !t)) {
            var i = e.getElementsByTagName("script");
            if (i.length)
                for (var r = i.length - 1; r > -1 && !t; )
                    t = i[r--].src
        }
        if (!t)
            throw new Error("Automatic publicPath is not supported in this browser");
        t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"),
        n.p = t
    }(),
    function() {
        "use strict";
        n(237),
        n(506),
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p,
        n.p;
        var t = n(755)
          , e = {
            menuToggle: t(".menu-toggle"),
            menu: t(".top-menu"),
            menuList: t(".top-menu ul"),
            siteTop: t(".site-top"),
            isOpen: !1,
            init: function() {
                var e = this;
                this.textClose = this.menu.data("text-close") || "Close",
                this.textMore = this.menuToggle.children("span:nth-child(2)").text(),
                this.menuHeight = this.menu.outerHeight(),
                this.menuListHeight = this.menuList.height(),
                this.expandableHeight = this.menuListHeight + 15,
                /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || this.menu.addClass("with-transition"),
                t(document).on("click", (function(n) {
                    var i = n ? t(n.target).parents().addBack() : null;
                    i && i.is(e.menu) || e.isOpen && e.hide()
                }
                )),
                this.menuToggle.on("click", (function(t) {
                    t.preventDefault(),
                    e.isOpen ? e.hide() : e.open()
                }
                ))
            },
            open: function() {
                this.isOpen || (this.isOpen = !0,
                this.menuToggle.addClass("top-menu-active").find("span.cat-icon").addClass("open").next().text(this.textClose),
                this.menuList.addClass("filter-blur"),
                this.siteTop.css({
                    zIndex: 102
                }),
                this.menu.css({
                    height: this.expandableHeight
                }).off("transitionend"))
            },
            hide: function() {
                var e = this;
                this.isOpen && (this.isOpen = !1,
                this.menuToggle.removeClass("top-menu-active").find("span.cat-icon").removeClass("open").next().text(this.textMore),
                this.menu.css({
                    height: this.menuHeight
                }).off("transitionend").on("transitionend", (function(n) {
                    t(n.target).is(e.menu) && "height" === n.originalEvent.propertyName && t(this).removeAttr("style"),
                    e.menuList.removeClass("filter-blur")
                }
                )),
                this.siteTop.removeAttr("style"))
            }
        }
          , i = n(755)
          , r = {
            dragging: !1,
            dragStart: function(t) {
                r.dragging = !0,
                i(".game-box-btn").trigger("drag-start");
                var e = i(t.currentTarget)
                  , n = {
                    id: e.data("game-id"),
                    slug: e.data("game-slug"),
                    title: e.attr("title") || e.data("title"),
                    url: e.attr("href"),
                    imageFile: e.data("game-image")
                };
                e.css({
                    cursor: "grabbing"
                });
                var o = e.children(".image").clone().addClass("draggable-image").appendTo("body");
                setTimeout((function() {
                    o.remove()
                }
                )),
                t.originalEvent.dataTransfer.setDragImage(o[0], o.width() / 2, o.height() / 2),
                t.originalEvent.dataTransfer.effectAllowed = "copyMove",
                t.originalEvent.dataTransfer.setData("text/plain", JSON.stringify(n))
            },
            dragStop: function(t) {
                r.dragging = !1,
                i(t.currentTarget).removeAttr("style"),
                i(".game-box-btn").trigger("drag-end")
            },
            videoElem: null,
            loaderElem: null,
            vTimeDelay: null,
            loaderTimeDelay: null,
            vMIMETypes: {
                ".mp4": "video/mp4",
                ".webm": "video/webm",
                ".ogv": "video/ogg"
            },
            vThumbCreate: function() {
                var t = i(this);
                t.has(".video-thumb").length > 0 || r.dragging || (t.attr("data-title", t.attr("title")).attr("title", ""),
                r.videoElem = i("<div>").addClass("video-thumb").hide(),
                r.loaderElem = i("<div>").addClass("video-loader").hide(),
                r.vTimeDelay = setTimeout((function(e) {
                    i(e).prepend([r.videoElem, r.loaderElem]);
                    var n = i("<video playsinline disableRemotePlayback disablePictureInPicture autoplay loop muted>").on("loadstart", (function() {
                        r.loaderTimeDelay = setTimeout((function() {
                            r.loaderElem.show()
                        }
                        ), 150)
                    }
                    )).on("canplay", (function() {
                        r.videoElem.show().css("opacity", 1)
                    }
                    )).on("playing", (function() {
                        clearTimeout(r.loaderTimeDelay),
                        r.loaderElem.hide()
                    }
                    )).appendTo(r.videoElem);
                    i.each(t.data("video-thumb"), (function(t, e) {
                        n.append('<source src="' + siteConfig.games.getUrl(e) + '" type="' + r.vMIMETypes[e.slice(e.lastIndexOf("."))] + '">')
                    }
                    ))
                }
                ), 80, [this]))
            },
            vThumbDestroy: function() {
                var t = i(this);
                r.vTimeDelay && clearTimeout(r.vTimeDelay),
                r.loaderTimeDelay && clearTimeout(r.loaderTimeDelay),
                r.videoElem && r.videoElem.remove(),
                r.loaderElem && r.loaderElem.remove(),
                t.attr("data-title") && t.attr("title", t.attr("data-title"))
            }
        }
          , o = (n(607),
        n(755));
        o((function() {
            o("a[rel=tipsy-s]").tipsy({
                gravity: "s",
                opacity: 1,
                offset: 2
            })
        }
        ));
        n(724),
        n(643),
        n(139);
        var s = n(755);
        s((function() {
            var t = {
                maxPages: 5,
                inProgress: !1,
                carouselItem: s(".trending-slider"),
                carouselPagination: s(".slider-pagination"),
                controlNext: s(".slider-control-next"),
                showLoading: function() {
                    this.controlNext.html('<span class="monochrome-spinner spin-medium"></span>')
                },
                hideLoading: function() {
                    this.controlNext.html('<span class="monochrome-chevron-right"></span>')
                },
                addDummyPaginationItem: function(e) {
                    s('<a href="#">~</a>').on("click", (function() {
                        t.carouselItem.jcarousel("scroll", "+=1")
                    }
                    )).appendTo(e)
                }
            };
            t.carouselItem.jcarousel({
                list: ".slide-list",
                items: ".slide",
                transitions: {
                    transforms: !0,
                    easing: "ease-out"
                },
                wrap: "both",
                animation: {
                    duration: 400,
                    complete: function() {}
                }
            }),
            t.carouselItem.on("jcarousel:scroll", (function(e, n, i) {
                n.hasNext() || "+=1" !== i || function e(n, i, o, a) {
                    t.inProgress || (t.inProgress = !0,
                    a && t.showLoading(),
                    s.ajax({
                        method: "GET",
                        dataType: "json",
                        url: "/services/trending/".concat(o, ".json"),
                        cache: !0
                    }).done((function(o) {
                        if (a) {
                            for (var l = function(i) {
                                s('<div class="slide slide-loading"><span class="monochrome-spinner spin-slow"></span></div>').one("jcarousel:visiblein", (function() {
                                    t.inProgress = !1,
                                    2 !== i && e(n, this, i, !1)
                                }
                                )).appendTo(n.list())
                            }, c = 2; c <= o.totalPages; c++)
                                l(c);
                            n.reload(),
                            t.carouselPagination.jcarouselPagination("reloadCarouselItems"),
                            t.carouselPagination.jcarouselPagination("reload"),
                            n.scroll("+=1")
                        }
                        var u = (null === i ? n.target() : s(i)).removeClass("slide-loading").html(o.html);
                        u.find("a[data-game-id]").attr("draggable", !0).on("dragstart", r.dragStart).on("dragend", r.dragStop),
                        u.find("a[data-video-thumb]").on("mouseenter", r.vThumbCreate).on("mouseleave", r.vThumbDestroy).on("dragstart", r.vThumbDestroy),
                        t.hideLoading()
                    }
                    )))
                }(n, null, 2, !0)
            }
            )),
            s(".slider-control-prev").attr("aria-label", "Top games previous page").on("click", (function(t) {
                t.preventDefault()
            }
            )).on("jcarouselcontrol:active", (function() {
                s(this).removeClass("inactive")
            }
            )).on("jcarouselcontrol:inactive", (function() {
                s(this).addClass("inactive")
            }
            )).jcarouselControl({
                target: "-=1"
            }),
            t.controlNext.attr("aria-label", "Top games next page").on("click", (function(t) {
                t.preventDefault()
            }
            )).on("jcarouselcontrol:createend", (function() {
                s(this).removeClass("inactive")
            }
            )).on("jcarouselcontrol:active", (function() {
                s(this).removeClass("inactive")
            }
            )).on("jcarouselcontrol:inactive", (function() {
                s(this).addClass("inactive")
            }
            )).jcarouselControl({
                target: "+=1"
            }),
            t.carouselPagination.on("click", (function(t) {
                t.preventDefault()
            }
            )).on("jcarouselpagination:active", "a", (function(e) {
                1 === s(e.delegateTarget).children().length && t.addDummyPaginationItem(e.delegateTarget),
                s(this).addClass("active")
            }
            )).on("jcarouselpagination:inactive", "a", (function() {
                s(this).removeClass("active")
            }
            )).jcarouselPagination()
        }
        ));
        var a = n(755)
          , l = {
            text: "",
            targetInput: null,
            fnComplete: function() {},
            setText: function(t) {
                return this.text = "function" == typeof t ? t() : t,
                this
            },
            setTargetInput: function(t) {
                return this.targetInput = a(t),
                this
            },
            startTyping: function(t) {
                var e = this;
                this.targetInput.focus();
                for (var n = this.text.length, i = 0, r = function(r) {
                    i += Math.round(200 * Math.random()) + t,
                    setTimeout((function() {
                        e.targetInput.val(e.text.substring(0, r)).trigger("keyup"),
                        r === n && (e.targetInput.trigger("change"),
                        e.fnComplete(e.text))
                    }
                    ), i)
                }, o = 1; o <= n; o++)
                    r(o);
                return this
            },
            onComplete: function(t) {
                return this.fnComplete = t,
                this
            }
        }
          , c = (n(264),
        n(390),
        n(755));
        c((function() {
            var t = c(".search-input")
              , e = c(".search-button");
            e.click((function() {
                if ("" === t.val())
                    return e.attr("disabled", !0),
                    c.get("/services/suggest-game-title.json", (function(n) {
                        l.setTargetInput(t).setText(n.title_part).startTyping(50).onComplete((function() {
                            e.attr("disabled", !1)
                        }
                        ))
                    }
                    ), "json"),
                    !1
            }
            ));
            var n;
            t.autocomplete({
                serviceUrl: "/services/get-game-title.json",
                dataType: "json",
                minChars: 2,
                paramName: "q",
                showNoSuggestionNotice: !0,
                maxHeight: 440,
                width: 250,
                zIndex: 9999,
                deferRequestBy: 250,
                transformResult: function(t) {
                    return n = t.spellcheck,
                    {
                        suggestions: c.map(t.rows, (function(t) {
                            return {
                                value: t.title,
                                data: t
                            }
                        }
                        ))
                    }
                },
                formatResult: function(t) {
                    return '<span class="suggestion-image"><img alt="'.concat(t.value, '" src="').concat(t.data.image, '" width="50" height="38"></span><span class="suggestion-title">').concat(t.value, "</span>")
                },
                onSearchComplete: function(t) {
                    c.each(t.split(" "), (function(t, e) {
                        c(".suggestion-title").highlight(e)
                    }
                    ))
                },
                beforeRender: function(e) {
                    c('<div class="autocomplete-show-all"><span>Show All</span></div>').click((function() {
                        c("#search-form").submit()
                    }
                    )).appendTo(e),
                    null !== n.didYouMean && c('<div class="autocomplete-did-you-mean"></div>').html("<span>Did you mean?</span><span>&quot;" + n.didYouMean + "&quot;</span>").click((function() {
                        t.val(n.didYouMean).trigger("change.autocomplete")
                    }
                    )).prependTo(e),
                    setTimeout((function() {
                        var t = 0;
                        if (e.children().each((function() {
                            t += this.clientHeight
                        }
                        )),
                        e.height(t),
                        !(t <= 440)) {
                            e.children().wrapAll('<div class="nano"><div class="nano-content"></div></div>');
                            var n = e.find(".nano").nanoScroller();
                            setTimeout((function() {
                                n.nanoScroller()
                            }
                            ), 120),
                            e.on("mouseout.autocomplete", (function() {
                                e.find(".autocomplete-selected").removeClass("autocomplete-selected")
                            }
                            ))
                        }
                    }
                    ), 10)
                },
                onSelect: function(t) {
                    window.location.href = t.data.url
                }
            })
        }
        ));
        n(401),
        n(703);
        var u = "UFXzNaOr"
          , h = "vxnEaHd3"
          , d = "T_zQJKLA"
          , f = "rm8wFFkR";
        !function(t) {
            function e(e) {
                this.defaults = {
                    container: null,
                    storeKey: "gameHistory",
                    maxItems: 5,
                    imageWidth: 32,
                    imageHeight: 32,
                    iconClass: null,
                    eachItemCallback: function(t) {
                        return t
                    },
                    transformImageUrl: function(t) {
                        return t
                    }
                },
                this.opts = t.extend({}, this.defaults, e),
                this.$el = t(this.opts.container),
                this.historyItems = null,
                this.ghItem = t('<div class="'.concat(f, '"></div>')),
                this.ghItems = t('<div class="'.concat(d, '"></div>')),
                this.ghWrapper = t('<div class="'.concat(u, '">\n    <div class="').concat(h, '"><span class="').concat(this.opts.iconClass, '"></span></div>\n</div>')).append(this.ghItems)
            }
            e.prototype = {
                init: function() {
                    var e = this;
                    this.historyItems = this.getHistoryItems();
                    var n = [];
                    if (this.historyItems.length) {
                        this.$el.html(this.ghWrapper),
                        this.historyItems.forEach((function(i) {
                            var r = t('<a title="'.concat(i.t, '" href="').concat(i.u, '"><img src="').concat(e.opts.transformImageUrl(i.i), '" width="').concat(e.opts.imageWidth, '" height="').concat(e.opts.imageHeight, '" alt="').concat(i.t, '"></a>'))
                              , o = e.ghItem.clone().html(r);
                            n.push(e.opts.eachItemCallback(o))
                        }
                        )),
                        this.ghItems.html(n);
                        var i = 0;
                        t.each(n, (function(t, e) {
                            setTimeout((function() {
                                e.css("opacity", 1)
                            }
                            ), i),
                            i += 100
                        }
                        ))
                    }
                },
                getHistoryItems: function() {
                    var t = localStorage.getItem(this.opts.storeKey)
                      , e = [];
                    if (t)
                        try {
                            e = JSON.parse(t)
                        } catch (t) {
                            localStorage.removeItem(this.opts.storeKey)
                        }
                    return e
                },
                pushToHistory: function(t) {
                    if (null !== this.historyItems) {
                        for (var e = 0; e < this.historyItems.length; e++)
                            this.historyItems[e].id === t.id && this.historyItems.splice(e, 1);
                        this.historyItems.splice(0, 0, {
                            id: t.id,
                            t: t.title,
                            u: t.url,
                            i: t.imageFile
                        }),
                        this.historyItems = this.historyItems.slice(0, this.opts.maxItems),
                        localStorage.setItem(this.opts.storeKey, JSON.stringify(this.historyItems))
                    }
                }
            },
            t.gameHistory = function(t) {
                var n = new e(t);
                return n.init(),
                n.$el.data("game-history", n),
                n
            }
        }(n(755));
        var p = "PUbpGzlI"
          , g = "fkeNdovp"
          , m = "LBQxBM_y"
          , v = "UshgE3ca"
          , y = "FSEZeuU2"
          , b = "gd8fJtJX"
          , x = "SDMXg1er"
          , w = "Fy0c5MYm"
          , T = n.p + "sound/pop-out.mp3";
        n(678),
        n(884),
        n(990),
        n(551);
        function C(t) {
            return C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            C(t)
        }
        !function(t) {
            function e(e, n) {
                this.defaults = {
                    storeKey: "gameBox",
                    imageWidth: 50,
                    imageHeight: 38,
                    wrapperWidth: 275,
                    wrapperHeight: 300,
                    addBtn: ".game-box-add",
                    addBtnTextAdd: "Add to My Game Box",
                    addBtnTextIn: "This game is in your Game Box.",
                    gameObject: null,
                    animateRefItem: ".game-box-clone",
                    titleAttr: "title",
                    transformImageUrl: function(t) {
                        return t
                    }
                },
                this.opts = t.extend({}, this.defaults, n),
                this.$el = t(e),
                this.$addBtn = t(this.opts.addBtn),
                this.items = null,
                this.itemCount = 0,
                this.gameBoxList = null,
                this.gameBoxContent = null,
                this.badgeObj = null,
                this.contentRendered = !1
            }
            e.prototype = {
                init: function() {
                    var e = this;
                    this.gameBoxList = t('<ul class="'.concat(v, '"></ul>')),
                    this.gameBoxContent = t('<div class="nano-content"></div>').html(this.gameBoxList).wrap('<div class="dropdown-panel"><div class="nano"></div></div>');
                    var n = t('<div id="game-box-wrapper" class="dropdown dropdown-tip dropdown-anchor-right"></div>').css({
                        width: this.opts.wrapperWidth,
                        height: this.opts.wrapperHeight
                    }).html(this.gameBoxContent.parent().parent());
                    this.items = this.load(),
                    this.updateBadge(),
                    this.updateAddBtn(),
                    this.$el.dropdown("attach", "#game-box-wrapper").parent().append(n),
                    n.on("show", (function() {
                        e.renderBoxContent(),
                        e.setScrollbar()
                    }
                    )),
                    t(this.opts.addBtn).on("click", (function(n) {
                        n.preventDefault();
                        var i = t(this);
                        if (!i.hasClass("in-game-box")) {
                            e.addBtnDisable();
                            var r = new Audio(T);
                            r.play(),
                            r.addEventListener("playing", (function() {
                                setTimeout((function() {
                                    e.doAnimation(t(e.opts.animateRefItem), i, e.$el.children("i.con"))
                                }
                                ), 200)
                            }
                            ))
                        }
                    }
                    )),
                    t(e.$el).on("drop", (function(n) {
                        n.preventDefault(),
                        t(e.$el).removeClass("shake").removeAttr("style");
                        var i = JSON.parse(n.originalEvent.dataTransfer.getData("text/plain"));
                        void 0 !== i.id && (e.push(i, "drag"),
                        e.rumble(e.$el))
                    }
                    )).on("dragenter", (function() {
                        t(e.$el).css({
                            transform: "scale(1.25)",
                            border: "3px rgba(255,255,255,.4) dashed"
                        })
                    }
                    )).on("dragleave", (function() {
                        e.$el.css({
                            transform: "scale(1.15)",
                            border: ""
                        })
                    }
                    )).on("dragover", (function(t) {
                        t.preventDefault(),
                        t.originalEvent.dataTransfer.dropEffect = "copy"
                    }
                    )).on("drag-start", this.dragStart.bind(this)).on("drag-end", this.dragEnd.bind(this)),
                    setTimeout((function() {
                        e.$el.trigger("ready")
                    }
                    ), 1)
                },
                renderBoxContent: function() {
                    if (0 !== this.itemCount) {
                        if (!this.contentRendered) {
                            var t = this.renderListItems(this.items);
                            this.contentRendered = !0,
                            this.gameBoxList.html(t)
                        }
                    } else
                        this.renderEmpty()
                },
                prependToBox: function(t) {
                    if (this.contentRendered) {
                        var e = this.renderListItems(t);
                        this.gameBoxList.prepend(e)
                    }
                },
                renderListItems: function(e) {
                    var n = this
                      , i = [];
                    return t.each(e, (function(e, r) {
                        var o = t('<a href="#" class="'.concat(b, '" data-delete="').concat(e, '"><span class="monochrome-remove-circle"></span></a>')).on("click", (function(e) {
                            e.preventDefault(),
                            n.deleteItem(t(this).data("delete"))
                        }
                        ))
                          , s = t('<li data-item="'.concat(e, '">\n<a class="').concat(y, '" href="').concat(r.url, '">\n    <span class="').concat(p, '"><img src="').concat(n.opts.transformImageUrl(r.image), '" width="').concat(n.opts.imageWidth, '" height="').concat(n.opts.imageHeight, '" alt=""></span>\n    <span class="').concat(g, '">').concat(r.adi, "</span>\n</a>\n</li>")).append(o);
                        i.push(s)
                    }
                    )),
                    i
                },
                renderEmpty: function() {
                    var e = t('<li class="'.concat(w, '"><span class="monochrome-inbox"></span><span>').concat(this.$el.data("text-empty"), "</span></li>"));
                    this.gameBoxList.html(e),
                    this.contentRendered = !1
                },
                load: function() {
                    var t = localStorage.getItem(this.opts.storeKey)
                      , e = {};
                    if (t)
                        try {
                            e = JSON.parse(t)
                        } catch (t) {
                            localStorage.removeItem(this.opts.storeKey)
                        }
                    return e
                },
                count: function(t) {
                    var e = 0;
                    for (var n in t)
                        t.hasOwnProperty(n) && e++;
                    return e
                },
                push: function(t, e) {
                    if (null !== this.items && "object" !== C(this.items[t.id])) {
                        this.items = this.load();
                        var n = {};
                        n[t.id] = {
                            adi: t.title,
                            url: t.url,
                            image: t.imageFile
                        },
                        Object.assign(this.items, n),
                        this.prependToBox(n),
                        this.save(),
                        this.$el.trigger("add", [t, e])
                    }
                },
                delete: function(t) {
                    null !== this.items && (this.items[t] && delete this.items[t],
                    this.save())
                },
                save: function() {
                    this.updateBadge(),
                    this.updateAddBtn(),
                    this.renderBoxContent(),
                    this.setScrollbar(),
                    localStorage.setItem(this.opts.storeKey, JSON.stringify(this.items))
                },
                isInBox: function(t) {
                    return this.items.hasOwnProperty(t)
                },
                deleteItem: function(e) {
                    var n = this;
                    this.gameBoxList.find("[data-item=" + e + "]").addClass(x).on("animationend", (function() {
                        t(this).remove(),
                        n.delete(e)
                    }
                    ))
                },
                updateBadge: function() {
                    this.itemCount = this.count(this.items),
                    null === this.badgeObj ? this.badgeObj = t('<span class="'.concat(m, '">')).text(this.itemCount).appendTo(this.$el) : this.badgeObj.show().text(this.itemCount),
                    0 === this.itemCount && this.badgeObj.hide()
                },
                setScrollbar: function() {
                    this.gameBoxContent.parent().nanoScroller().nanoScroller({
                        scroll: "top"
                    })
                },
                addBtnDisable: function() {
                    var t = this;
                    this.$addBtn.addClass("in-game-box").attr(this.opts.titleAttr, this.$addBtn.data("text-in") || this.opts.addBtnTextIn).on("click.rumble", (function() {
                        t.rumble(t.$el)
                    }
                    ))
                },
                addBtnEnable: function() {
                    this.$addBtn.removeClass("in-game-box").attr(this.opts.titleAttr, this.$addBtn.data("text-add") || this.opts.addBtnTextAdd).off("click.rumble")
                },
                updateAddBtn: function() {
                    null !== this.opts.gameObject && (this.isInBox(this.opts.gameObject.id) ? this.addBtnDisable() : this.addBtnEnable())
                },
                doAnimation: function(e, n, i) {
                    var r = this
                      , o = r.centerPoint(n).x
                      , s = r.centerPoint(n).y
                      , a = new t.path.bezier({
                        start: {
                            x: o,
                            y: s,
                            angle: -45
                        },
                        end: {
                            x: r.centerPoint(i).x,
                            y: r.centerPoint(i).y,
                            angle: 75
                        }
                    });
                    e.clone().css({
                        position: "absolute",
                        zIndex: 1e4,
                        width: 0,
                        height: 0,
                        left: o,
                        top: s
                    }).appendTo("body").animate({
                        width: r.opts.imageWidth + "px",
                        height: r.opts.imageHeight + "px",
                        marginTop: "-=" + r.opts.imageHeight / 2 + "px",
                        marginLeft: "-=" + r.opts.imageWidth / 2 + "px"
                    }, 400, "easeOutElastic").delay(100).animate({
                        path: a,
                        width: r.opts.imageWidth / 2,
                        height: r.opts.imageHeight / 2,
                        marginTop: "+=" + r.opts.imageHeight / 4 + "px",
                        marginLeft: "+=" + r.opts.imageWidth / 4 + "px"
                    }, {
                        duration: 500,
                        easing: "easeOutCubic",
                        done: function() {
                            r.push(r.opts.gameObject, "button")
                        }
                    }).animate({
                        opacity: 0
                    }, {
                        duration: 250,
                        easing: "easeOutCubic",
                        done: function() {
                            t(this).remove(),
                            r.rumble(r.$el)
                        }
                    })
                },
                rumble: function(t) {
                    var e = this;
                    e.rumbleTimeout || (t.jrumble({
                        x: 5,
                        y: 5,
                        rotation: 5,
                        speed: 20
                    }).trigger("startRumble"),
                    e.rumbleTimeout = setTimeout((function() {
                        t.trigger("stopRumble"),
                        e.rumbleTimeout = null
                    }
                    ), 500))
                },
                centerPoint: function(t) {
                    return {
                        x: t.offset().left + t.outerWidth() / 2,
                        y: t.offset().top + t.outerHeight() / 2
                    }
                },
                dragStart: function() {
                    var t = this;
                    t.$el.css("transform", "scale(1.15)"),
                    t.shakeTimeout = setTimeout((function() {
                        t.$el.addClass("shake")
                    }
                    ), 200),
                    t.badgeObj.hide()
                },
                dragEnd: function() {
                    this.shakeTimeout && clearTimeout(this.shakeTimeout),
                    this.$el.removeClass("shake").removeAttr("style"),
                    this.badgeObj.show()
                }
            },
            t.fn.gameBox = function(t) {
                if (this.length) {
                    var n = new e(this,t);
                    return n.init(),
                    n.$el
                }
            }
        }(n(755));
        var S = "hiCm_Tez"
          , E = "dQjBaWgt"
          , k = "oZHrIuXM"
          , j = "zZmx1yHd"
          , _ = "BQbpwzsQ";
        !function(t) {
            function e(e, n) {
                this.defaults = {
                    minWidth: 120,
                    height: 300,
                    localeNames: {}
                },
                this.opts = t.extend({}, this.defaults, n),
                this.$el = t(e)
            }
            e.prototype = {
                init: function() {
                    var e = this
                      , n = t("<ul>").addClass(_)
                      , i = t('<div class="'.concat(j, '"></div>')).append(n)
                      , r = t('<div class="dropdown '.concat(S, " ").concat(E, " ").concat(k, '"></div>')).attr("id", "locale-switcher-dropdown").css({
                        minWidth: e.opts.minWidth
                    }).append(i);
                    0 === Object.keys(e.opts.localeNames).length && t.each(e.$el.data(), (function(t, n) {
                        t.startsWith("locale") && (e.opts.localeNames[t.replace("locale", "").toLowerCase()] = n)
                    }
                    )),
                    t("head link[hreflang]").each((function(i, r) {
                        var o = t(r).attr("href")
                          , s = t(r).attr("hreflang");
                        n.append('<li><a href="' + o + '">' + (e.opts.localeNames[s] || s) + "</a></li>")
                    }
                    )),
                    t("body").append(r),
                    e.$el.click((function(t) {
                        t.preventDefault()
                    }
                    )).attr("data-vertical-offset", "-" + (r.outerHeight() + e.$el.outerHeight() + parseInt(r.css("margin-top"), 10) + 10)).attr("data-horizontal-offset", (e.$el.outerWidth() - r.outerWidth()) / 2).dropdown("attach", "#locale-switcher-dropdown")
                }
            },
            t.fn.jqLocaleSwitcher = function(t) {
                return this.length && this.each((function() {
                    new e(this,t).init()
                }
                )),
                this
            }
        }(n(755));
        n(831),
        n(748);
        function A(t, e) {
            return function(t) {
                if (Array.isArray(t))
                    return t
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var i, r, o, s, a = [], l = !0, c = !1;
                    try {
                        if (o = (n = n.call(t)).next,
                        0 === e) {
                            if (Object(n) !== n)
                                return;
                            l = !1
                        } else
                            for (; !(l = (i = o.call(n)).done) && (a.push(i.value),
                            a.length !== e); l = !0)
                                ;
                    } catch (t) {
                        c = !0,
                        r = t
                    } finally {
                        try {
                            if (!l && null != n.return && (s = n.return(),
                            Object(s) !== s))
                                return
                        } finally {
                            if (c)
                                throw r
                        }
                    }
                    return a
                }
            }(t, e) || I(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function D(t, e) {
            var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
            if (!n) {
                if (Array.isArray(t) || (n = I(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[i++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, s = !0, a = !1;
            return {
                s: function() {
                    n = n.call(t)
                },
                n: function() {
                    var t = n.next();
                    return s = t.done,
                    t
                },
                e: function(t) {
                    a = !0,
                    o = t
                },
                f: function() {
                    try {
                        s || null == n.return || n.return()
                    } finally {
                        if (a)
                            throw o
                    }
                }
            }
        }
        function I(t, e) {
            if (t) {
                if ("string" == typeof t)
                    return O(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? O(t, e) : void 0
            }
        }
        function O(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, i = new Array(e); n < e; n++)
                i[n] = t[n];
            return i
        }
        var N = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]]
          , H = function() {
            if ("undefined" == typeof document)
                return !1;
            for (var t = N[0], e = {}, n = 0, i = N; n < i.length; n++) {
                var r = i[n];
                if ((null == r ? void 0 : r[1])in document) {
                    var o, s = D(r.entries());
                    try {
                        for (s.s(); !(o = s.n()).done; ) {
                            var a = A(o.value, 2)
                              , l = a[0]
                              , c = a[1];
                            e[t[l]] = c
                        }
                    } catch (t) {
                        s.e(t)
                    } finally {
                        s.f()
                    }
                    return e
                }
            }
            return !1
        }()
          , P = {
            change: H.fullscreenchange,
            error: H.fullscreenerror
        }
          , R = {
            request: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.documentElement
                  , e = arguments.length > 1 ? arguments[1] : void 0;
                return new Promise((function(n, i) {
                    var r = function t() {
                        R.off("change", t),
                        n()
                    };
                    R.on("change", r);
                    var o = t[H.requestFullscreen](e);
                    o instanceof Promise && o.then(r).catch(i)
                }
                ))
            },
            exit: function() {
                return new Promise((function(t, e) {
                    if (R.isFullscreen) {
                        var n = function e() {
                            R.off("change", e),
                            t()
                        };
                        R.on("change", n);
                        var i = document[H.exitFullscreen]();
                        i instanceof Promise && i.then(n).catch(e)
                    } else
                        t()
                }
                ))
            },
            toggle: function(t, e) {
                return R.isFullscreen ? R.exit() : R.request(t, e)
            },
            onchange: function(t) {
                R.on("change", t)
            },
            onerror: function(t) {
                R.on("error", t)
            },
            on: function(t, e) {
                var n = P[t];
                n && document.addEventListener(n, e, !1)
            },
            off: function(t, e) {
                var n = P[t];
                n && document.removeEventListener(n, e, !1)
            },
            raw: H
        };
        Object.defineProperties(R, {
            isFullscreen: {
                get: function() {
                    return Boolean(document[H.fullscreenElement])
                }
            },
            element: {
                enumerable: !0,
                get: function() {
                    var t;
                    return null !== (t = document[H.fullscreenElement]) && void 0 !== t ? t : void 0
                }
            },
            isEnabled: {
                enumerable: !0,
                get: function() {
                    return Boolean(document[H.fullscreenEnabled])
                }
            }
        }),
        H || (R = {
            isEnabled: !1
        });
        var $ = R
          , L = "UuCWaV3e";
        !function(t) {
            function e(e, n) {
                this.defaults = {
                    lightsOnText: t(e).data("text-turn-on") || "Turn On the Lights",
                    lightsOffText: t(e).data("text-turn-off") || "Turn Off the Lights",
                    titleAttr: "title",
                    fadeDuration: 500,
                    fadeEasing: null
                },
                this.opts = t.extend({}, this.defaults, n),
                this.$el = t(e),
                this.overlay = null,
                this.lightsOn = !0
            }
            e.prototype = {
                init: function() {
                    var t = this;
                    t.$el.attr(this.opts.titleAttr, this.opts.lightsOffText).on("click", (function(e) {
                        e.preventDefault(),
                        t.lightsOn ? t.turnOff() : t.turnOn()
                    }
                    )).on("turn-on", this.turnOn.bind(t)).on("turn-off", this.turnOff.bind(t))
                },
                createOverlay: function() {
                    this.overlay = t('<div class="'.concat(L, '">')).hide().appendTo("body")
                },
                overlayFadeIn: function(t) {
                    this.overlay && this.overlay.stop().fadeIn(this.opts.fadeDuration, this.opts.fadeEasing, t)
                },
                overlayFadeOut: function(t) {
                    this.overlay && this.overlay.stop().fadeOut(this.opts.fadeDuration, this.opts.fadeEasing, t)
                },
                turnOff: function() {
                    var t = this;
                    t.lightsOn && (t.lightsOn = 0,
                    null === t.overlay && t.createOverlay(),
                    t.$el.trigger("lights-off", [t.opts.lightsOnText]),
                    t.overlayFadeIn((function() {
                        t.$el.trigger("lights-off-done", [t.opts.lightsOnText])
                    }
                    )),
                    t.$el.attr(t.opts.titleAttr, t.opts.lightsOnText))
                },
                turnOn: function() {
                    var t = this;
                    t.lightsOn || (t.lightsOn = 1,
                    t.$el.trigger("lights-on", [t.opts.lightsOffText]),
                    t.overlayFadeOut((function() {
                        t.$el.trigger("lights-on-done", [t.opts.lightsOffText])
                    }
                    )),
                    t.$el.attr(t.opts.titleAttr, t.opts.lightsOffText))
                }
            },
            t.fn.lights = function(t) {
                if (this.length) {
                    var n = new e(this,t);
                    return n.init(),
                    n.$el
                }
            }
        }(n(755));
        n(837);
        var F = "qK7ZTRiz"
          , M = "E7JqKdbr"
          , q = "i6ARIUTt"
          , B = "uEzRFhqA"
          , W = "ZoR5doXD";
        !function(t) {
            function e(e, n) {
                this.$el = t(e),
                this.defaults = {
                    btnText: this.$el.data("text-btn") || "Embed",
                    copyText: this.$el.data("text-copy") || "Copy",
                    btnIconClass: "monochrome-embed-close",
                    tabOneIconClass: "monochrome-embed-close",
                    tabOneText: this.$el.data("text-embed") || "Embed",
                    tabTwoIconClass: "monochrome-share",
                    tabTwoText: this.$el.data("text-share") || "Share",
                    dropdownWidth: "400px",
                    dropdownHeight: null,
                    urlTabOne: "embed://",
                    urlTabTwo: "share://"
                },
                this.opts = t.extend({}, this.defaults, n),
                this.templateRendered = !1
            }
            e.prototype = {
                init: function() {
                    var e = this;
                    this.content = t('<div class="dropdown-panel"></div>'),
                    t('<div id="share-embed-box" class="dropdown dropdown-tip"></div>').css({
                        width: this.opts.dropdownWidth,
                        height: this.opts.dropdownHeight
                    }).html(this.content).on("show", (function() {
                        e.renderTemplate()
                    }
                    )).appendTo(this.$el),
                    t('<a class="'.concat(F, '" href="#"><span class="').concat(this.opts.btnIconClass, '"></span> ').concat(this.opts.btnText, "</a>")).dropdown("attach", "#share-embed-box").prependTo(this.$el)
                },
                renderTemplate: function() {
                    if (!this.templateRendered) {
                        this.templateRendered = !0;
                        var e = this.getTemplate();
                        e.find(".".concat(q)).on("click", (function() {
                            e.find(".".concat(B)).removeClass(B);
                            var n = t(this).addClass(B).data("tab");
                            e.find(n).addClass(B)
                        }
                        )),
                        e.find(".select-all").on("focus", (function() {
                            this.focus(),
                            this.select()
                        }
                        )),
                        e.find(".btn-copy").on("click", (function() {
                            var e = t(this).data("target")
                              , n = t(e).focus().select().val();
                            navigator.clipboard.writeText(n).then((function() {
                                console.log("Copied to clipboard.")
                            }
                            ), (function() {
                                alert("Error copying the text :(")
                            }
                            ))
                        }
                        )),
                        this.content.html(e)
                    }
                },
                getTemplate: function() {
                    return t('<div>\n    <ul class="'.concat(M, '">\n        <li class="').concat(q, " ").concat(B, '" data-tab="#tab-1">\n            <span class="').concat(this.opts.tabOneIconClass, '"></span> ').concat(this.opts.tabOneText, '\n        </li>\n        <li class="').concat(q, '" data-tab="#tab-2">\n            <span class="').concat(this.opts.tabTwoIconClass, '"></span> ').concat(this.opts.tabTwoText, '\n        </li>\n    </ul>\n\n    <div id="tab-1" class="').concat(W, " ").concat(B, '">\n        <input id="input-1" type="text" class="select-all" value="').concat(this.opts.urlTabOne, '" readonly>\n        <button type="button" class="btn-copy" data-target="#input-1"><span class="monochrome-copy"></span> ').concat(this.opts.copyText, '</button>\n    </div>\n    <div id="tab-2" class="').concat(W, '">\n        <input id="input-2" type="text" class="select-all" value="').concat(this.opts.urlTabTwo, '" readonly>\n        <button type="button" class="btn-copy" data-target="#input-2"><span class="monochrome-copy"></span> ').concat(this.opts.copyText, "</button>\n    </div>\n</div>"))
                }
            },
            t.fn.shareEmbed = function(t) {
                this.length && new e(this,t).init()
            }
        }(n(755));
        n(342);
        var z = n(755);
        z((function() {
            var t = z("#game-container");
            if (0 !== t.length) {
                z(window).on("blur", (function() {
                    setTimeout((function() {
                        "IFRAME" === document.activeElement.tagName && z("body").trigger("click")
                    }
                    ))
                }
                )),
                z(".game-page-description-scroll").nanoScroller(),
                z(".game-star-rating").starRating({
                    initialRating: gameData.rating,
                    totalStars: 5,
                    useFullStars: !0,
                    disableAfterRate: !0,
                    starShape: "rounded",
                    starSize: 30,
                    strokeWidth: 0,
                    hoverColor: "#F23400",
                    emptyColor: "#96bdc4",
                    ratedColor: "#dc3200",
                    callback: function(t) {
                        z.ajax({
                            type: "POST",
                            url: "/services/rate-game.json",
                            data: {
                                id: gameData.id,
                                rating: t
                            },
                            dataType: "json"
                        }).done((function(e) {
                            z(".game-score").text(t.toFixed(1)).addClass("game-score-bounce")
                        }
                        ))
                    }
                }),
                z(".game-page-share-embed").shareEmbed({
                    urlTabOne: gameData.embedFrame,
                    urlTabTwo: gameData.url
                });
                var e = z(".lights-on-off").lights({
                    fadeEasing: "easeOutCubic",
                    titleAttr: "original-title"
                }).on("lights-off lights-on", (function(e) {
                    var n = z(".lights-on-off, .game-box-add")
                      , i = z(".logo a");
                    switch (e.type) {
                    case "lights-off":
                        t.addClass("lights-off-visible"),
                        n.addClass("lights-off-active"),
                        i.on("click", (function() {
                            return confirm(e.currentTarget.dataset.textConfirm)
                        }
                        ));
                        break;
                    case "lights-on":
                        t.removeClass("lights-off-visible"),
                        n.removeClass("lights-off-active"),
                        i.off("click")
                    }
                }
                )).on("lights-off-done lights-on-done", (function(t, e) {
                    var n = z(this).data("tipsy");
                    void 0 !== n && n.$tip && n.$tip.children(".tipsy-inner").text(e),
                    z(window).trigger("gaPushEvent", {
                        event: "gaTriggerEvent",
                        gaEventCategory: "Attitude",
                        gaEventAction: "game-" + t.type.replace("-done", ""),
                        gaEventLabel: gameData.slug
                    })
                }
                ));
                z(".game-full-screen").click((function(t) {
                    t.preventDefault();
                    var e = {
                        event: "gaTriggerEvent",
                        gaEventCategory: "Attitude",
                        gaEventAction: null,
                        gaEventLabel: gameData.slug
                    };
                    $.request(document.getElementById("game-frame")).then((function() {
                        e.gaEventAction = "game-full-screen"
                    }
                    )).catch((function(t) {
                        alert("Error attempting to enable full-screen mode: " + t.message),
                        e.gaEventAction = "game-full-screen-error"
                    }
                    )).finally((function() {
                        z(window).trigger("gaPushEvent", e)
                    }
                    ))
                }
                )),
                document.addEventListener("fullscreenchange", (function() {
                    var t = z(".game-bottom-bar");
                    document.fullscreenElement ? (t.addClass("bar-fullscreen"),
                    e.trigger("turn-on"),
                    console.log("Pause the ad refresher"),
                    window.ybRefresherAPI && ybRefresherAPI.pause()) : (t.removeClass("bar-fullscreen"),
                    console.log("Resume the ad refresher"),
                    window.ybRefresherAPI && ybRefresherAPI.resume())
                }
                ))
            }
        }
        ));
        var U = n(755);
        function V(t) {
            return V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            V(t)
        }
        U((function() {
            e.init(),
            U(".game-list a[data-video-thumb], .item a[data-video-thumb]").on("mouseenter", r.vThumbCreate).on("mouseleave", r.vThumbDestroy).on("dragstart", r.vThumbDestroy),
            U(".game-box-btn").gameBox({
                gameObject: "object" === ("undefined" == typeof gameData ? "undefined" : V(gameData)) ? gameData : null,
                titleAttr: "original-title",
                transformImageUrl: function(t) {
                    return siteConfig.images.getUrl(t) + "?auto=format&w=100"
                }
            }).on("add", (function(t, e, n) {
                U(window).trigger("gaPushEvent", {
                    event: "gaTriggerEvent",
                    gaEventCategory: "Attitude",
                    gaEventAction: ["game-box-add", "via", n].join("-"),
                    gaEventLabel: e.slug
                })
            }
            )).on("ready", (function() {
                U("a[data-game-id]").attr("draggable", !0).on("dragstart", r.dragStart).on("dragend", r.dragStop)
            }
            )),
            U("#locale-switcher").jqLocaleSwitcher({});
            var t = U.gameHistory({
                container: ".game-history",
                iconClass: "monochrome-history",
                transformImageUrl: function(t) {
                    return siteConfig.images.getUrl(t) + "?auto=format&fit=crop&w=64&h=64"
                },
                eachItemCallback: function(t) {
                    return t.children("a").tipsy({
                        gravity: "n",
                        opacity: 1
                    }),
                    t
                }
            });
            U(".disabled,.active").click((function(t) {
                t.preventDefault()
            }
            )),
            U(window).on("message", (function(e) {
                var n = e.originalEvent.data;
                if (new URL(e.originalEvent.origin).hostname.endsWith(siteConfig.getDomain()) && "string" == typeof n && n.startsWith("rhm://")) {
                    var i = JSON.parse(n.slice(6));
                    switch (i.action) {
                    case "gaPushEvent":
                        U(window).trigger("gaPushEvent", i.data);
                        break;
                    case "gameHistoryPush":
                        t.pushToHistory(i.data);
                        break;
                    case "focusChange":
                        "focus" === i.data.state && (U("body").trigger("click"),
                        U(".search-input").autocomplete("hide"))
                    }
                }
            }
            ))
        }
        ))
    }()
}();
