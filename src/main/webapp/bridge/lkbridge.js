var bridge = {
    default: this, call: function (method, args, cb) {
        var ret = '';
        if (typeof args == 'function') {
            cb = args;
            args = {};
        }
        var arg = {data: args === undefined ? null : args}
        if (typeof cb == 'function') {
            var cbName = 'dscb' + window.dscb++;
            window[cbName] = cb;
            arg['_lkcbstub'] = cbName;
        }
        arg = JSON.stringify(arg)
        if (window._lkbridge) {
            ret = _lkbridge.call(method, arg)
        } else if (window._lkwk || navigator.userAgent.indexOf("_lkbridge") != -1) {
            ret = prompt("_lkbridge=" + method, arg);
        }
        return JSON.parse(ret || '{}').data
    }, register: function (name, fun, asyn) {
        var q = asyn ? window._lkaf : window._lkf
        if (!window._lkInit) {
            window._lkInit = true;
            setTimeout(function () {
                bridge.call("_lkb.init");
            }, 0)
        }
        if (typeof fun == "object") {
            q._obs[name] = fun;
        } else {
            q[name] = fun
        }
    }, registerAsyn: function (name, fun) {
        this.register(name, fun, true);
    }, hasNativeMethod: function (name, type) {
        return this.call("_lkb.hasNativeMethod", {name: name, type: type || "all"});
    }, disableJavascriptDialogBlock: function (disable) {
        this.call("_lkb.disableJavascriptDialogBlock", {disable: disable !== false})
    }, loadRewardAd: function (params, cb) {
        bridge.call("loadRewardAd", params, function (code) {
            if (cb) cb(code);
        })
    }, playRewardAd: function (cb) {
        bridge.call("playRewardAd", function (code) {
            if (cb) cb(code);
        })
    }, playFullScreenAd: function (cb) {
        bridge.call("playFullScreenAd", function (code) {
            if (cb) cb(code);
        })
    }, loadFullScreenAd: function (params, cb) {
        bridge.call("loadFullScreenAd", params, function (code) {
            if (cb) cb(code);
        })
    }, deviceInfo: function (cb) {
        bridge.call("deviceInfo", function (code) {
            if (cb) cb(code);
        })
    }, wxLogin: function (cb) {
        bridge.call("wxLogin", function (result) {
            if (cb) cb(result);
        })
    }, wxShareText: function (params, cb) {
        bridge.call("wxShareText", params, function (result) {
            if (cb) cb(result);
        })
    }, loadGame: function (params) {
        bridge.call("loadGame", params)
    }, bannerStyle: function (params) {
        bridge.call("bannerStyle", params)
    }, loadBannerAd: function (params) {
        bridge.call("loadBannerAd", params)
    }, hideBanner: function () {
        bridge.call("hideBanner")
    }, closeGame: function () {
        bridge.call("closeGame")
    }, killProcess: function () {
        bridge.call("killProcess")
    }, showLoading: function () {
        bridge.call("showLoading")
    }, hideLoading: function () {
        bridge.call("hideLoading")
    }, clearWebViewCache: function () {
        bridge.call("clearWebViewCache")
    }, log: function (params) {
        bridge.call("log", params)
    }, setCacheMode: function (params) {
        bridge.call("setCacheMode", params)
    }, setDebugMode: function (params) {
        bridge.call("setDebugMode", params)
    }, showSplash: function (params) {
        bridge.call("showSplash", params)
    }, clipBoard: function (params) {
        bridge.call("clipBoard", params)
    }, onShow: function (cb) {
        if (cb) cb();
    }, onHide: function (cb) {
        if (cb) cb();
    }, onBackPressed: function (cb) {
        if (cb) cb();
    }, login: function (cb) {
        bridge.call("login", function (result) {
            if (cb) cb(result);
        })
    }, logout: function (cb) {
        bridge.call("logout", function (code) {
            if (cb) cb(code);
        })
    }, loginByGame: function (params, cb) {
        bridge.call("loginByGame", params, function (code) {
            if (cb) cb(code);
        })
    },pay: function (params, cb) {
        bridge.call("pay", params, function (code) {
            if (cb) cb(code);
        })
    },share: function (params, cb) {
        bridge.call("share", params, function (code) {
            if (cb) cb(code);
        })
    },doAdShow: function (params, cb) {
        bridge.call("doAdShow", params, function (code) {
            if (cb) cb(code);
        })
    },logEvent: function (params) {
        bridge.call("logEvent", params)
    }


};
!function () {
    if (window._lkf) return;
    var ob = {
        _lkf: {_obs: {}}, _lkaf: {_obs: {}}, dscb: 0, dsBridge: bridge, close: function () {
            bridge.call("_lkb.closePage")
        }, _handleMessageFromNative: function (info) {
            var arg = JSON.parse(info.data);
            var ret = {id: info.callbackId, complete: true}
            var f = this._lkf[info.method];
            var af = this._lkaf[info.method]
            var callSyn = function (f, ob) {
                ret.data = f.apply(ob, arg)
                bridge.call("_lkb.returnValue", ret)
            }
            var callAsyn = function (f, ob) {
                arg.push(function (data, complete) {
                    ret.data = data;
                    ret.complete = complete !== false;
                    bridge.call("_lkb.returnValue", ret)
                })
                f.apply(ob, arg)
            }
            if (f) {
                callSyn(f, this._lkf);
            } else if (af) {
                callAsyn(af, this._lkaf);
            } else {
                var name = info.method.split('.');
                if (name.length < 2) return;
                var method = name.pop();
                var namespace = name.join('.')
                var obs = this._lkf._obs;
                var ob = obs[namespace] || {};
                var m = ob[method];
                if (m && typeof m == "function") {
                    callSyn(m, ob);
                    return;
                }
                obs = this._lkaf._obs;
                ob = obs[namespace] || {};
                m = ob[method];
                if (m && typeof m == "function") {
                    callAsyn(m, ob);
                    return;
                }
            }
        }
    }
    for (var attr in ob) {
        window[attr] = ob[attr]
    }
    bridge.register("_hasJavascriptMethod", function (method, tag) {
        var name = method.split('.')
        if (name.length < 2) {
            return !!(_lkf[name] || _lkaf[name])
        } else {
            var method = name.pop()
            var namespace = name.join('.')
            var ob = _lkf._obs[namespace] || _lkaf._obs[namespace]
            return ob && !!ob[method]
        }
    })
}();
module.exports = bridge;