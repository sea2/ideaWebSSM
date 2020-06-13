var __reflect = this && this.__reflect || function (t, e, n) {
    t.__class__ = e, n ? n.push(e) : n = [e], t.__types__ = t.__types__ ? n.concat(t.__types__) : n
}, __extends = this && this.__extends || function (t, e) {
    function n() {
        this.constructor = t
    }

    for (var a in e) e.hasOwnProperty(a) && (t[a] = e[a]);
    n.prototype = e.prototype, t.prototype = new n
}, __awaiter = this && this.__awaiter || function (t, e, n, a) {
    return new (n || (n = Promise))(function (i, o) {
        function r(t) {
            try {
                l(a.next(t))
            } catch (e) {
                o(e)
            }
        }

        function s(t) {
            try {
                l(a["throw"](t))
            } catch (e) {
                o(e)
            }
        }

        function l(t) {
            t.done ? i(t.value) : new n(function (e) {
                e(t.value)
            }).then(r, s)
        }

        l((a = a.apply(t, e || [])).next())
    })
}, __generator = this && this.__generator || function (t, e) {
    function n(t) {
        return function (e) {
            return a([t, e])
        }
    }

    function a(n) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; l;) try {
            if (i = 1, o && (r = o[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(r = r.call(o, n[1])).done) return r;
            switch (o = 0, r && (n = [0, r.value]), n[0]) {
                case 0:
                case 1:
                    r = n;
                    break;
                case 4:
                    return l.label++, {value: n[1], done: !1};
                case 5:
                    l.label++, o = n[1], n = [0];
                    continue;
                case 7:
                    n = l.ops.pop(), l.trys.pop();
                    continue;
                default:
                    if (r = l.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                        l = 0;
                        continue
                    }
                    if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                        l.label = n[1];
                        break
                    }
                    if (6 === n[0] && l.label < r[1]) {
                        l.label = r[1], r = n;
                        break
                    }
                    if (r && l.label < r[2]) {
                        l.label = r[2], l.ops.push(n);
                        break
                    }
                    r[2] && l.ops.pop(), l.trys.pop();
                    continue
            }
            n = e.call(t, l)
        } catch (a) {
            n = [6, a], o = 0
        } finally {
            i = r = 0
        }
        if (5 & n[0]) throw n[1];
        return {value: n[0] ? n[1] : void 0, done: !0}
    }

    var i, o, r, s, l = {
        label: 0, sent: function () {
            if (1 & r[0]) throw r[1];
            return r[1]
        }, trys: [], ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
        return this
    }), s
}, MyButton = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.isScale = !0, e.scaleing = !1, e.scaleValue = 1.1, e.soundName = "click", e.btnmask = null, e.thisObj = e, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this), this.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchCancel, this)
    }, e.prototype.setCallBack = function (t, e, n) {
        switch (void 0 === n && (n = null), t) {
            case egret.TouchEvent.TOUCH_TAP:
                this.tapCallBack = e, n && (this.thisObj = n);
                break;
            case egret.TouchEvent.TOUCH_END:
                this.endCallBack = e, n && (this.thisObj = n);
                break;
            case egret.TouchEvent.TOUCH_BEGIN:
                this.beginCallBack = e, n && (this.thisObj = n)
        }
    }, e.prototype.onTouchTap = function (t) {
        this.tapCallBack && this.tapCallBack.apply(this.thisObj, [t])
    }, e.prototype.onTouchBegin = function (t) {
        var e = this;
        this.beginCallBack && this.beginCallBack.apply(this.thisObj, [t]), this.isScale && !this.scaleing && (this.scaleing = !0, egret.Tween.get(this).to({
            scaleX: this.scaleX * this.scaleValue,
            scaleY: this.scaleY * this.scaleValue
        }, 300, egret.Ease.backOut).to({
            scaleX: this.scaleX,
            scaleY: this.scaleY
        }, 200, egret.Ease.backOut).call(function (t) {
            e.scaleing = !1
        }, this)), this.soundName && "" != this.soundName && SoundManager.playSound(this.soundName)
    }, e.prototype.onTouchEnd = function (t) {
        this.endCallBack && this.endCallBack.apply(this.thisObj, [t])
    }, e.prototype.onTouchCancel = function (t) {
    }, e.prototype.setEnable = function (t, e) {
        void 0 === t && (t = !0), void 0 === e && (e = ""), this.touchEnabled = t, t ? ColorUtil.clearGray(this) : ColorUtil.setGray(this)
    }, e.prototype.dispose = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this), this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this), this.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this), this.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchCancle, this), this.tapCallBack = null, this.beginCallBack = null, this.endCallBack = null
    }, e
}(eui.Button);
__reflect(MyButton.prototype, "MyButton"), window.MyButton = MyButton;
var PlayerModel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e._type = "", e.currentAction = "", e
    }

    return __extends(e, t), Object.defineProperty(e.prototype, "type", {
        get: function () {
            return this._type
        }, set: function (t) {
            this._type = t, this.$updateModelVeiw()
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "animate", {
        get: function () {
            return this._animate
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "animateTexture", {
        set: function (t) {
            this._animateTexture = t, this.$replaceTexture(this._animateTexture)
        }, enumerable: !0, configurable: !0
    }), e.prototype.$replaceTexture = function (t) {
        this.animate && this.animate.armature.replaceTexture(RES.getRes(t))
    }, e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this);
        var e = ConfigData.getKeyStr("www_56");
        this.nameLabel.text = "" + e
    }, e.prototype.$updateModelVeiw = function () {
        var t = ConfigData.getPlayerById(this._type);
        this._animate && this._animate.name == this._type.toString() || (this.nameLabel && (this.nameLabel.text = t.name), this._animate && this.container.removeChild(this._animate), this._animate = DragonBoneManager.getInstance().createAnimate(t.animateName), this._animate && (this._animate.name = this._type.toString(), this._animate.scaleX = this._animate.scaleY = t.animateScale, this._animate.x = this.container.width / 2, this._animate.y = this.container.height, t.direction && (this._animate.scaleX = -1), this.container.addChild(this._animate)))
    }, e.prototype.playWa = function () {
        this._animate && this._animate.animation.play("1", 0)
    }, e.prototype.setTimeScale = function (t) {
        this.animate.animation.timeScale = t
    }, e.prototype.playHappy = function () {
        this._animate && this._animate.animation.play("2", 0)
    }, e
}(eui.Component);
__reflect(PlayerModel.prototype, "PlayerModel", ["eui.UIComponent", "egret.DisplayObject"]), window.PlayerModel = PlayerModel;
var core;
!function (t) {
    var e = function () {
        function t(t) {
            this._delayTime = 100, this._totalDelay = 0, this.lastTime = 0, this._display = t, this._display && egret.startTick(this.onTick, this)
        }

        return t.prototype.onTick = function (t) {
            var e = t - this.lastTime;
            return this._delayTime < this._totalDelay && (this._display && (this._display.visible = this.update()), this._totalDelay = 0), this._totalDelay += e, !1
        }, t.prototype.update = function () {
            return this._checkFun ? this._checkFun.apply(this) : !0
        }, Object.defineProperty(t.prototype, "check", {
            set: function (t) {
                t && (this._checkFun = t)
            }, enumerable: !0, configurable: !0
        }), t.prototype.dispose = function () {
            egret.stopTick(this.onTick, this)
        }, t
    }();
    t.BaseRedPoint = e, __reflect(e.prototype, "core.BaseRedPoint")
}(core || (core = {}));
var BaseSingle = function () {
    function t() {
    }

    return t.getInstance = function () {
        var t = this;
        return null == t.__instance && (t.__instance = new t), t.__instance
    }, t.destoryInstance = function () {
        var t = this;
        null != t.__instance && delete t.__instance
    }, t
}();
__reflect(BaseSingle.prototype, "BaseSingle");
var CacheData = function () {
    function t() {
    }

    return t.getRAMData = function (e) {
        return t._ramDatas[e]
    }, t.saveRAMData = function (e, n) {
        t._ramDatas[e] = n
    }, t.removeRAMData = function (e) {
        delete t._ramDatas[e]
    }, t.clearRAMData = function () {
        t._ramDatas = {}
    }, t._ramDatas = {}, t
}();
__reflect(CacheData.prototype, "CacheData");
var BaseAlertPanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.isFill = !1, e.isBackClose = !1, e.openActionType = 0, e.closeActionType = 0, e
    }

    return __extends(e, t), e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.closeBtn && this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onClose, this)
    }, e.prototype.onClose = function () {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        this.closeBtn && this.closeBtn.dispose()
    }, e
}(eui.Component);
__reflect(BaseAlertPanel.prototype, "BaseAlertPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var BasePanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.addEventListener(egret.Event.ADDED_TO_STAGE, e.onAddToStage, e), e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.onRemoveFromStage, e), e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.initialize()
    }, e.prototype.initialize = function () {
    }, e.prototype.onAddToStage = function (t) {
        e.currentPanel = this, this.width = this.parent.width, this.height = this.parent.height
    }, e.prototype.onRemoveFromStage = function (t) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this), this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this)
    }, e.prototype.onBack = function () {
    }, e.prototype.gotoPanel = function (t) {
        this.parent.addChild(t), this.dispose()
    }, e.prototype.dispose = function () {
        null != this.parent && this.parent.removeChild(this)
    }, e
}(eui.Component);
__reflect(BasePanel.prototype, "BasePanel", ["eui.UIComponent", "egret.DisplayObject"]);
var HitMostPanel = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.www_242.text = ConfigData.getKeyStr("www_242"), this.shareBtn.label = ConfigData.getKeyStr("www_243"), this.init(), this.closeBtn && this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this), this.shareBtn && this.shareBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShareBtn, this), this.showSDK()
    }, e.prototype.showSDK = function () {
        this.aniAdCon1.x = this.width - 120;
        var t = StartPanel.AniAdKey, e = StartPanel.AniAdKey1, n = SelfSDKHelper.getInstance(),
            a = n.getAniAdListByKey(t);
        if (a && a.length) n.showAniAdList(t, this.aniAdCon0); else for (var i = 0; 4 > i; i++) n.createAniAD(t, 0, 110 * i, 1, this.aniAdCon0);
        if (a = n.getAniAdListByKey(e), a && a.length) n.showAniAdList(e, this.aniAdCon1); else for (var i = 0; 4 > i; i++) n.createAniAD(e, 0, 110 * i, 1, this.aniAdCon1)
    }, e.prototype.init = function () {
        var t = HithitData.getHitMostCount();
        this.hitmostTxt && (this.hitmostTxt.text = t ? t + "" : "0")
    }, e.prototype.onShareBtn = function (t) {
        var e = this, n = ConfigData.getKeyStr("www_244"), a = ConfigData.getKeyStr("www_245"),
            i = ConfigData.getKeyStr("www_246"), o = n + "，" + HithitData.getHitMostCount() + a + "，" + i + "！";
        platform.shareAppMessage(o, ShareConstant.randomTitleAndUrl().imageUrl, null, null, null, null);
        var r = RoleData.getRole(), s = BattleConstant.getAutoDps(), l = s.mul(120);
        r.gold = r.gold.add(l), RoleData.putRole(r), egret.setTimeout(function () {
            var t = ConfigData.getKeyStr("www_247"), n = ConfigData.getKeyStr("www_248");
            ControllAlert.show("" + t + StringUtil.decimalFormat(l) + (n + "！")), e.onCloseBtn()
        }, this, 2e3)
    }, e.prototype.onCloseBtn = function () {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        this.parent && this.parent.removeChild(this), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", StartPanel.AniAdKey), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", StartPanel.AniAdKey1)
    }, e
}(eui.Component);
__reflect(HitMostPanel.prototype, "HitMostPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var BattleConstant = function () {
    function t() {
    }

    return t.getCurrentDpsById = function (t) {
        var e = PlayerData.getPlayerById(t),
            n = PlayerConstant.getPlayerDps(t, e ? e.level : 1, e ? e.breakthroughLevel : 0);
        return n
    }, t.getFinalDps = function (t) {
        var e = DpsData.getFinalDps(t);
        if (e) {
            var n = DpsData.getBaoJi(t).gailv, a = DpsData.getBaoJi(t).bili, i = !1;
            return Math.random() < n && (e = e.mul(a), i = !0), [e, i]
        }
        var o = this.getCurrentDpsById(t), r = t == PlayerConstant.HEAD_ID, s = PlayerData.getPlayerById(t),
            l = ConfigData.getPlayerById(t), h = 1, u = 0, c = 1.5, g = s.skills;
        if (g) for (var p in g) {
            var d = g[p], f = ConfigData.getPlayerSkillById(l.skill[d].skillId);
            switch (f.type) {
                case 1:
                    "all" == f.target ? h += f.times : "kg" != f.target || r ? "dj" == f.target && r && (h += f.times) : h += f.times;
                    break;
                case 2:
                    u += f.times;
                    break;
                case 3:
                    c += f.times
            }
        }
        var C = SkillData.getSkills();
        if (C) for (var p in C) {
            var y = C[p].level, v = ConfigData.getSkillById(p);
            switch (v.type) {
                case 1:
                    "all" == v.target ? h += v.buffTimes * y : "kg" != v.target || r ? "dj" == v.target && r && (h += v.buffTimes * y) : h += v.buffTimes * y;
                    break;
                case 2:
                    u += v.buffTimes * y;
                    break;
                case 3:
                    c += v.buffTimes * y
            }
        }
        var w = ConfigData.getCollectGroupById(t);
        if (w) {
            var D = TreasureBoxData.getCollect(), _ = w.sc;
            _ && _.forEach(function (t) {
                var e = ConfigData.getCollectById(t), n = D && D[t] ? D[t] : 0;
                switch (n = Math.min(50, n), e.buffType) {
                    case 1:
                        h += e.buffValue * n;
                        break;
                    case 2:
                        u += e.buffValue * n;
                        break;
                    case 3:
                        c += e.buffValue * n
                }
            })
        }
        o = o.mul(h), s && s.inviteNew && (o = o.mul(2)), DpsData.setFinalDps(t, o), DpsData.setBaoJi(t, u, c);
        var m = !1;
        return Math.random() < u && (o = o.mul(c), m = !0), [o, m]
    }, t.getNextLevelDpsById = function (t) {
        var e = PlayerData.getPlayerById(t),
            n = PlayerConstant.getPlayerNextDps(t, e ? e.level : 1, e ? e.breakthroughLevel : 0);
        return n
    }, t.getAutoDps = function () {
        var t = new Decimal(0), e = PlayerData.getPlayers();
        for (var n in e) n != PlayerConstant.HEAD_ID && (t = t.add(this.getCurrentDpsById(n)));
        return t
    }, t.getCurrentBlood = function () {
        var t = RoleData.getRole(), e = ConfigData.getSenceBloodById(t.sence + "", t.floor);
        return new Decimal(e)
    }, t.createStones = function () {
        var t = RoleData.getRole().floor;
        t || (t = 1);
        for (var e = [], n = 1; 5 >= n; n++) {
            var a = ConfigData.getGeologyById(n + "");
            if (a && a.floorNeed) {
                var i = a.floorNeed[0], o = a.floorNeed[1];
                t >= i && o >= t && e.push(n)
            }
        }
        for (var r = [], n = 0; 3 > n; n++) {
            var s = RandomUitl.randomInt(0, e.length - 1);
            r.push(e[s])
        }
        SenceData.setStoneTypes(r)
    }, t.updateStones = function () {
        var t = SenceData.getStoneTypes();
        t.shift();
        var e = RoleData.getRole().floor;
        e || (e = 1);
        for (var n = [], a = 1; 5 >= a; a++) {
            var i = ConfigData.getGeologyById(a + "");
            if (i && i.floorNeed) {
                var o = i.floorNeed[0], r = i.floorNeed[1];
                e >= o && r >= e && n.push(a)
            }
        }
        var s = RandomUitl.randomInt(0, n.length - 1);
        t.push(n[s]), SenceData.setStoneTypes(t)
    }, t
}();
__reflect(BattleConstant.prototype, "BattleConstant");
var BusinessmanConstant = function () {
    function t() {
    }

    return t.getMaxCount = function () {
        var t = AppConfig.refreshJewel_limitcount, e = 0;
        return t + e
    }, t.getOreMaxCount = function () {
        var t = AppConfig.ore_refreshJewel_limitcount, e = VipData.getBusinessAddMaxCount();
        return t + e
    }, t
}();
__reflect(BusinessmanConstant.prototype, "BusinessmanConstant");
var DaDianConstant = function () {
    function t() {
    }

    return t.send = function (t) {
    }, t.getDadianData = function (t, e, n, a) {
        return {appid: this.appid, openid: t, page: e, event: n, extra: a, channel: AccountData.getChannel()}
    }, t.is_dadian = !0, t.sdk_dadian = !0, t.appid = "fkwww", t.urlRoot = "https://stat.chiji-h5.com/statwx_company.php", t
}();
__reflect(DaDianConstant.prototype, "DaDianConstant");
var MagicConstant = function () {
    function t() {
    }

    return t.getMaxCount = function (t) {
        var e = ConfigData.getMagicById(t), n = VipData.getMagicAddMaxCount();
        return e.limitCount + n
    }, t.isTenTimeClick = function () {
        var t = ConfigData.getMagicById("2"), e = MagicData.getMagicById("2"),
            n = AccountData.serverTime() + egret.getTimer();
        return !e || n > e.time + 1e3 * t.keepTime ? !1 : !0
    }, t.isAutoClick = function () {
        var t = ConfigData.getMagicById("3"), e = MagicData.getMagicById("3"),
            n = AccountData.serverTime() + egret.getTimer();
        return !e || n > e.time + 1e3 * t.keepTime ? !1 : !0
    }, t.doubleSpeed = function () {
        var t = ConfigData.getMagicById("4"), e = MagicData.getMagicById("4"),
            n = AccountData.serverTime() + egret.getTimer();
        return !e || n > e.time + 1e3 * t.keepTime ? !1 : !0
    }, t.doubleGain = function () {
        var t = ConfigData.getMagicById("5"), e = MagicData.getMagicById("5"),
            n = AccountData.serverTime() + egret.getTimer();
        return !e || n > e.time + 1e3 * t.keepTime ? !1 : !0
    }, t
}();
__reflect(MagicConstant.prototype, "MagicConstant");
var NotEnoughConstant = function () {
    function t() {
    }

    return t.getJewelMaxCount = function () {
        var t = AppConfig.jewel_limitCount, e = VipData.getJewelAddMaxCount();
        return t + e
    }, t.getGoldMaxCount = function () {
        var t = AppConfig.jinbi_limitCount, e = VipData.getGoldAddMaxCount();
        return t + e
    }, t
}();
__reflect(NotEnoughConstant.prototype, "NotEnoughConstant");
var OtherGameConstant = function () {
    function t() {
    }

    return t.likesGameConfig = null, t.otherGameConfig = null, t
}();
__reflect(OtherGameConstant.prototype, "OtherGameConstant");
var PlayerConstant = function () {
    function t() {
    }

    return t.getMaxBreakthroughLevel = function (t) {
        var e = ConfigData.getPlayerDpsConfig(), n = null;
        return e && (n = e[t]), n || console.log("矿工伤害配置异常:playerid=>" + t), n.length - 1
    }, t.getUpLevelCost = function (t, e, n) {
        var a = ConfigData.getPlayerDpsConfig(), i = null;
        if (a && (i = a[t]), !i) return console.log("矿工伤害配置异常:playerid=>" + t), new Decimal(0);
        n = Math.min(n, i.length - 1);
        var o = ConfigData.getPlayerDpsConfigById(t, n), r = this.getPlayerNextDps(t, e, n),
            s = new Decimal(o.breakthroughGold), l = parseFloat(o.costGoldTimes), h = parseFloat(o.addTimes), u = null;
        if (0 == e) u = s; else if (100 == e) {
            var c = Math.min(n + 1, i.length - 1);
            o = ConfigData.getPlayerDpsConfigById(t, c), u = new Decimal(o.breakthroughGold)
        } else u = r.mul(l + (e - 1) * h);
        var g = SkillConstant.minusCostGold(), p = ConfigData.getCollectGroupById(t);
        if (p) {
            var d = TreasureBoxData.getCollect(), f = p.sc;
            f && f.forEach(function (t) {
                var e = ConfigData.getCollectById(t);
                if (5 == e.buffType) {
                    var n = d && d[t] ? d[t] : 0;
                    n = Math.min(50, n), g += e.buffValue * n
                }
            })
        }
        return u = u.minus(u.mul(g))
    }, t.getPlayerDps = function (t, e, n) {
        var a = ConfigData.getPlayerDpsConfig(), i = null;
        if (a && (i = a[t]), !i) return console.log("矿工伤害配置异常:playerid=>" + t), new Decimal(0);
        n = Math.min(n, i.length - 1);
        var o = ConfigData.getPlayerDpsConfigById(t, n), r = null, s = new Decimal(o.baseDps),
            l = new Decimal(o.addDps), h = parseFloat(o.dpsTimes);
        return r = l.mul(1 - Math.pow(h, e)).div(1 - h).plus(s)
    }, t.getPlayerNextDps = function (t, e, n) {
        var a = ConfigData.getPlayerDpsConfig(), i = null;
        if (a && (i = a[t]), !i) return console.log("矿工伤害配置异常:playerid=>" + t), new Decimal(0);
        n = Math.min(n, i.length - 1);
        var o, r = ConfigData.getPlayerDpsConfigById(t, n), s = new Decimal(r.addDps), l = parseFloat(r.dpsTimes);
        return o = s.mul(Math.pow(l, e - 1))
    }, t.HEAD_ID = "0", t
}();
__reflect(PlayerConstant.prototype, "PlayerConstant");
var SelfSDKHelper = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.createFavList = function (t, e, n, a, i, o) {
        if (void 0 === a && (a = 4), void 0 === i && (i = 1), AppConfig.sdk_favlist) {
            var r = platform.getSystemInfoSync();
            if ("iOS" == String(r.system).substr(0, 3)) {
                if (!AppConfig.ios_favlist) return
            } else if (!AppConfig.android_favlist) return;
            var s = AccountData.getChannel();
            if (!ArrayUtil.contains(AppConfig.channelList_luck, s)) {
                var l = DDSDK.getRender();
                if (l) {
                    var h = l.getFavAD1(a, i, 4);
                    if (h) return h.scaleX = h.scaleY = n, h.pos(t, e), this.favList = h, console.log("[fview]", h), o || (o = LayerManager.getInstance().sdkLayer), o.addChild(h), h
                }
            }
        }
    }, e.prototype.createHotGameBtn = function (t, e) {
        if (void 0 === e && (e = 1.5), !AppConfig.sdk_hotgame) return null;
        var n = platform.getSystemInfoSync();
        if ("iOS" == String(n.system).substr(0, 3)) {
            if (!AppConfig.ios_hotgame) return null
        } else if (!AppConfig.android_hotgame) return null;
        var a = AccountData.getChannel();
        if (ArrayUtil.contains(AppConfig.channelList_luck, a)) return null;
        var i = DDSDK.getRender();
        if (i) {
            var o = i.getHotGames();
            if (o && o) {
                var r = o.getBtns();
                if (r) for (var s = 0; s < r.length; s++) {
                    var l = r[s];
                    t.addChild(l), l.x = 0, l.y = 0 + 80 * s, l.scaleX = l.scaleY = e
                }
                LayerManager.getInstance().sdkLayer.addChild(o)
            }
        }
    }, e.prototype.createBKGame = function (t, e, n, a) {
        if (!AppConfig.sdk_gamelist) return null;
        var i = AccountData.getChannel();
        if (ArrayUtil.contains(AppConfig.channelList_luck, i)) return null;
        var o = DDSDK.getRender();
        if (o) {
            var r = o.getBKAD();
            if (r) return r.x = t, r.y = e, r.scaleX = r.scaleY = n, this.bkGame = r, a || (a = LayerManager.getInstance().sdkLayer), a.addChild(r), r
        }
    }, e.prototype.getAniAdListByKey = function (t) {
        return this.aniAdList ? this.aniAdList[t] : void 0
    }, e.prototype.showAniAdList = function (t, e) {
        if (this.aniAdList && e) {
            var n = this.aniAdList[t];
            if (n.length > 0) for (var a = n.length, i = 0; a > i; i++) {
                var o = n[i];
                e.addChild(o)
            }
        }
    }, e.prototype.hideAniAdList = function (t) {
        if (this.aniAdList && t) {
            var e = this.aniAdList[t];
            if (e && e.length > 0) for (var n = e.length, a = 0; n > a; a++) {
                var i = e[a];
                i.visible = !1, i.parent && i.parent.removeChild(i)
            }
        }
    }, e.prototype.createAniAD = function (t, e, n, a, i, o) {
        if (void 0 === i && (i = null), void 0 === o && (o = 0), !AppConfig.sdk_suspension) return null;
        var r = platform.getSystemInfoSync();
        if ("iOS" == String(r.system).substr(0, 3)) {
            if (!AppConfig.ios_suspension) return
        } else if (!AppConfig.android_suspension) return;
        this.aniAdList || (this.aniAdList = {});
        var s = this.aniAdList[t];
        s || (s = [], this.aniAdList[t] = s);
        var l = DDSDK.getRender();
        if (!l) return console.log("[aniad render get failed]");
        var h = l.createAniAD();
        return h ? (h.scaleX = h.scaleY = a, h.rotation = o, h.pos(e, n), i || (i = LayerManager.getInstance().sdkLayer), s.push(h), i.addChild(h), console.log("[aniad]", h), void console.log("[aniad parent]", i)) : console.log("[aniad get failed]")
    }, e.prototype.createTryGame = function (t, e, n, a) {
        if (void 0 === n && (n = .9), !AppConfig.sdk_gamelist) return console.log("AppConfig.sdk_gamelist ", AppConfig.sdk_gamelist), null;
        var i = platform.getSystemInfoSync();
        if ("iOS" == String(i.system).substr(0, 3)) {
            if (!AppConfig.ios_gamelist) return console.log("AppConfig.ios_gamelist ", AppConfig.ios_gamelist), null
        } else if (!AppConfig.android_gamelist) return console.log("AppConfig.android_gamelist ", AppConfig.android_gamelist), null;
        var o = AccountData.getChannel();
        if (ArrayUtil.contains(AppConfig.channelList_luck, o)) return console.log("AppConfig.channelList_luck ", AppConfig.channelList_luck, o), null;
        var r = DDSDK.getRender();
        if (r) {
            var s = r.getTryBtn();
            return s ? (s.pos(t, e), this.tryGame = s, a || (a = LayerManager.getInstance().sdkLayer), a.addChild(s), this.trydlg || (this.trydlg = r.getTryDlg(), this.trydlg.setScale(n, n), this.trydlg.setCloseCB(function () {
                var t = CacheData.getRAMData("PowerListCache");
                ArrayUtil.remove(t, "1")
            }), LayerManager.getInstance().sdkLayer.addChild(this.trydlg)), s) : (console.log("drender.getTryBtn() failed 1"), null)
        }
        return console.log("drender.getTryBtn() failed 2"), null
    }, e.prototype.createTryList = function (t, e, n, a) {
        if (void 0 === n && (n = 1), !AppConfig.sdk_gamelist) return null;
        var i = DDSDK.getRender();
        if (i) {
            var o = i.getTryListBtn();
            return o ? (o.x = t, o.y = e, o.scaleX = n, o.scaleY = n, this.tryList = o, a || (a = LayerManager.getInstance().sdkLayer), a.addChild(o), this.trygame || (this.trygame = i.getTryGame(), LayerManager.getInstance().sdkLayer.addChild(this.trygame)), o) : (console.log("drender.getTryListBtn() failed 1"), null)
        }
        return console.log("drender.getTryListBtn() failed 2"), null
    }, e.prototype.hideSkdDisplay = function (t, e) {
        switch (void 0 === t && (t = "all"), t) {
            case"all":
                this.tryGame && this.tryGame.parent && this.tryGame.parent.removeChild(this.tryGame), this.favList && this.favList.parent && this.favList.parent.removeChild(this.favList), this.hideAniAdList(e);
                break;
            case"tryGame":
                this.tryGame && this.tryGame.parent && this.tryGame.parent.removeChild(this.tryGame);
                break;
            case"aniAd":
                this.hideAniAdList(e);
                break;
            case"favList":
                this.favList && this.favList.parent && this.favList.parent.removeChild(this.favList);
                break;
            case"bkGame":
                this.bkGame && this.bkGame.parent && this.bkGame.parent.removeChild(this.bkGame);
                break;
            case"tryList":
                this.tryList && this.tryList.parent && this.tryList.parent.removeChild(this.tryList);
                break;
            case"hotGameBtn":
                var n = DDSDK.getRender();
                if (!n) return;
                var a = n.getHotGames();
                if (!a) return;
                if (a) {
                    var i = a.getBtns();
                    if (i) for (var o = 0; o < i.length; o++) {
                        var r = i[o];
                        r.parent && r.parent.removeChild(r)
                    }
                }
        }
    }, e
}(BaseSingle);
__reflect(SelfSDKHelper.prototype, "SelfSDKHelper");
var ShareConstant = function () {
    function t() {
    }

    return t.setCurrentShareGroup = function (t) {
        this.currentGroup = t
    }, t.getQuery = function (t) {
        if (!t) return "";
        var e = "";
        for (var n in t) {
            var a = t[n];
            e += n + "=" + a + "&"
        }
        return e
    }, t.queryAddShareInfo = function (t, e, n) {
        return n ? (n.title = t, n.imageUrl = e, n.sendOpenid = AccountData.getOpenId()) : n = {
            title: t,
            imageUrl: e,
            sendOpenid: AccountData.getOpenId()
        }, DaDianConstant.send(DaDianConstant.getDadianData(n.sendOpenid, "share", "share_send_info", n.title + ":" + n.imageUrl)), n
    }, t.shareById = function (t, e, n, a, i) {
        void 0 === n && (n = ""), void 0 === a && (a = ""), void 0 === i && (i = null), this.shareTime = egret.getTimer().valueOf();
        var o = "", r = "";
        if (this.shareJson) for (var s in this.shareJson) {
            var l = this.shareJson[s];
            l.id == t && (o = l.title, r = l.url)
        }
        ObjectUtil.isFalse(n) || (o = n), ObjectUtil.isFalse(a) || (r = a), i = this.queryAddShareInfo(o, r, i), platform.shareAppMessage(o, r, this.getQuery(i), null, null, null)
    }, t.randomShareAppMessage = function (e, n) {
        var a = this;
        void 0 === n && (n = null);
        var i = ConfigData.getKeyStr("www_445"), o = ConfigData.getKeyStr("www_446"),
            r = ConfigData.getKeyStr("www_447"), s = ConfigData.getKeyStr("www_448");
        this.shareTime = egret.getTimer().valueOf();
        var l = "", h = "", u = [];
        if (this.shareJson) for (var c in this.shareJson) {
            var g = this.shareJson[c];
            g.group == this.currentGroup && u.push(g)
        }
        if (u.length > 0) {
            var p = RandomUitl.randomInt(0, u.length - 1), g = u[p];
            g && (l = g.title, h = g.url)
        }
        n = this.queryAddShareInfo(l, h, n), this.currentGroup = 1, this.callback = function (u) {
            egret.setTimeout(function () {
                t.shareCancel ? platform.showModal("", "" + i, "" + o, !0, function (e) {
                    e.confirm ? (console.log("用户点击确定"), t.shareId = RandomUitl.randomInt(1e4, 2e4), n.shareValue = t.shareId, platform.shareAppMessage(l, h, a.getQuery(n), null, null, function (e) {
                        t.shareCancel = !0
                    })) : e.cancel && (console.log("用户点击取消"), ControllAlert.show("" + r))
                }) : t.cheating > 1 ? e && e(!0) : u ? e && e(!0) : platform.showModal("", "" + s, "" + o, !0, function (i) {
                    i.confirm ? (console.log("用户点击确定"), t.shareId = RandomUitl.randomInt(1e4, 2e4), n.shareValue = t.shareId, platform.shareAppMessage(l, h, a.getQuery(n), null, null, function (e) {
                        t.shareCancel = !0
                    })) : i.cancel && (e && e(!1), console.log("用户点击取消"), ControllAlert.show("" + r))
                }), t.shareCancel = !1
            }, a, 100)
        }, t.shareId = RandomUitl.randomInt(1e4, 2e4), n.shareValue = t.shareId, platform.shareAppMessage(l, h, this.getQuery(n), null, null, function (e) {
            t.shareCancel = !0
        })
    }, t.onRandomFailOnShow = function (t) {
        return function () {
            t && t(), platform.offShow(null), WechatManager.getInstance().doOnShow()
        }
    }, t.randomShareAppMessage2 = function (e, n, a) {
        var i = this;
        void 0 === n && (n = null), void 0 === a && (a = "");
        var o = ConfigData.getKeyStr("www_445"), r = ConfigData.getKeyStr("www_446"),
            s = ConfigData.getKeyStr("www_447"), l = ConfigData.getKeyStr("www_448");
        this.shareTime = egret.getTimer().valueOf();
        var h = "", u = "", c = [];
        if (this.shareJson) for (var g in this.shareJson) {
            var p = this.shareJson[g];
            p.group == this.currentGroup && c.push(p)
        }
        if (c.length > 0) {
            var d = RandomUitl.randomInt(0, c.length - 1), p = c[d];
            p && (h = p.title, u = p.url)
        }
        n = this.queryAddShareInfo(h, u, n), this.currentGroup = 1, this.callback = function (a) {
            egret.setTimeout(function () {
                t.shareCancel ? platform.showModal("", "" + o, "" + r, !0, function (e) {
                    e.confirm ? (console.log("用户点击确定"), t.shareId = -1 * RandomUitl.randomInt(1e4, 2e4), n.shareValue = t.shareId, platform.shareAppMessage(h, u, i.getQuery(n), null, null, function (e) {
                        t.shareCancel = !0
                    })) : e.cancel && (console.log("用户点击取消"), ControllAlert.show("" + s))
                }) : a ? e && e(!0) : platform.showModal("", "" + l, "" + r, !0, function (e) {
                    e.confirm ? (console.log("用户点击确定"), t.shareId = -1 * RandomUitl.randomInt(1e4, 2e4), n.shareValue = t.shareId, platform.shareAppMessage(h, u, i.getQuery(n), null, null, function (e) {
                        t.shareCancel = !0
                    })) : e.cancel && (console.log("用户点击取消"), ControllAlert.show("" + s))
                }), t.shareCancel = !1
            }, i, 100)
        }, t.shareId = -1 * RandomUitl.randomInt(1e4, 2e4), n.shareValue = t.shareId, platform.shareAppMessage(h, u, this.getQuery(n), null, null, function (e) {
            t.shareCancel = !0
        })
    }, t.onlyShare = function (t) {
        this.currentGroup = t;
        var e = "", n = "", a = [];
        if (this.shareJson) for (var i in this.shareJson) {
            var o = this.shareJson[i];
            o.group == this.currentGroup && a.push(o)
        }
        if (a.length > 0) {
            var r = RandomUitl.randomInt(0, a.length - 1), o = a[r];
            o && (e = o.title, n = o.url)
        }
        var s = {};
        s.inviteid = AccountData.uid(), s.invitetype = 3, s = this.queryAddShareInfo(e, n, s), platform.shareAppMessage(e, n, this.getQuery(s), null, null, null), this.currentGroup = 1
    }, t.randomTitleAndUrl = function () {
        var t = "", e = "", n = [];
        if (this.shareJson) for (var a in this.shareJson) {
            var i = this.shareJson[a];
            1 == i.group && n.push(i)
        }
        if (n.length > 0) {
            var o = RandomUitl.randomInt(0, n.length - 1), i = n[o];
            i && (t = i.title, e = i.url)
        }
        var r = {};
        return r.title = t, r.imageUrl = e, r.sendOpenid = AccountData.getOpenId(), {title: t, imageUrl: e, query: r}
    }, t.shareToGroup = function (t, e, n, a, i, o) {
        return void 0 === n && (n = !1), void 0 === a && (a = ""), void 0 === i && (i = null), void 0 === o && (o = 3), void(t && t.apply(e, [!0]))
    }, t.getCurrentActionType = function () {
        if (2 == AppConfig.model) return "ad";
        var t = ShareData.updateShareCount(), e = (t ? t.count : 0, AdData.getAdCount()),
            n = AccountData.serverTime() + egret.getTimer();
        return (!e || n - e.gettime > 12e4 || AppConfig.adCount >= e.count) && 1 == AppConfig.model && 1 == this.currentGroup ? "ad" : "share"
    }, t.shareJson = [], t.shareTime = 0, t.currentGroup = 1, t.shareCancel = !1, t.shareId = 0, t.cheating = 0, t
}();
__reflect(ShareConstant.prototype, "ShareConstant"), window.ShareConstant = ShareConstant;
var SkillConstant = function () {
    function t() {
    }

    return t.addGoldGain = function (t, e) {
        var n = "";
        if ("dj" == e) n = this.ADD_SSGOLD_TYPE; else {
            if ("kg" != e) return t;
            n = this.ADD_KGGOLD_TYPE
        }
        var a = ConfigData.getSkillById(n), i = SkillData.getSkillById(n), o = i && i.level ? a.buffTimes * i.level : 0;
        return t = t.plus(t.mul(o))
    }, t.hurtSpeed = function () {
        var t = ConfigData.getSkillById(this.HURT_SPEED_TYPE), e = SkillData.getSkillById(this.HURT_SPEED_TYPE),
            n = e && e.level ? t.buffTimes * e.level : 0;
        return n
    }, t.minusCostGold = function () {
        var t = ConfigData.getSkillById(this.GOLD_COST_MINUS_TYPE),
            e = SkillData.getSkillById(this.GOLD_COST_MINUS_TYPE), n = e && e.level ? t.buffTimes * e.level : 0;
        return n
    }, t.CRIT_TYPE = "1", t.ADD_DPS_TYPE = "2", t.ADD_SSGOLD_TYPE = "3", t.ADD_KGGOLD_TYPE = "6", t.HURT_SPEED_TYPE = "", t.GOLD_COST_MINUS_TYPE = "7", t
}();
__reflect(SkillConstant.prototype, "SkillConstant");
var StateConstant = function () {
    function t() {
    }

    return t.getShow = function (t) {
        return null != this.stateKeyValue[t] ? this.stateKeyValue[t] : ""
    }, t.STATE_SUCCESS = 0, t.stateKeyValue = {
        "-1": "参数不足",
        "-2": "非法接口",
        "-3": "非法API",
        "-4": "参数非法或重复操作",
        "-5": "未登录",
        "-6": "已经在房间中",
        "-7": "开房次数不足",
        "-8": "房间号错误",
        "-9": "房间已满",
        "-10": "已经准备过",
        "-11": "不是当前操作者",
        "-12": "手牌不足",
        "-13": "出牌小了",
        "-14": "一轮结束",
        "-15": "用户不存在",
        "-16": "任务不存在",
        "-17": "奖励已领取",
        "-18": "奖励条件不满足",
        "-19": "匹配中",
        "-20": "余额不足",
        "-21": "充值订单失败",
        "-22": "订单不存在",
        "-23": "红包已被领取"
    }, t
}();
__reflect(StateConstant.prototype, "StateConstant");
var ZhuanpanConstant = function () {
    function t() {
    }

    return t.getMaxCount = function () {
        var t = AppConfig.luckyZhuanpan_count, e = VipData.getZhuanPanAddMaxCount();
        return t + e
    }, t
}();
__reflect(ZhuanpanConstant.prototype, "ZhuanpanConstant");
var AccountData = function () {
    function t() {
    }

    return t.saveOpenId = function (t) {
        platform.setStorageSync("playerOpenId", t);
        var e = this.getOpenIdTime();
        e || this.saveOpenIdTime(DateTool.makeTime())
    }, t.getOpenId = function () {
        return platform.getStorageSync("playerOpenId")
    }, t.delOpenId = function () {
        platform.removeStorageSync("playerOpenId"), t.saveOpenIdTime(null)
    }, t.saveOpenIdTime = function (t) {
        platform.setStorageSync("playerOpenIdOutTime", t)
    }, t.getOpenIdTime = function () {
        return platform.getStorageSync("playerOpenIdOutTime")
    }, t.putwxUser = function (t) {
        platform.setStorageSync("wxuser", t)
    }, t.getwxUser = function () {
        return platform.getStorageSync("wxuser")
    }, t.putWXcode = function (t) {
        CacheData.saveRAMData("loginCode", t)
    }, t.getWXcode = function () {
        return CacheData.getRAMData("loginCode")
    }, t.putLaunchOption = function (t) {
        CacheData.saveRAMData("launchOption", t)
    }, t.getLaunchOption = function () {
        return CacheData.getRAMData("launchOption")
    }, t.putChannel = function (t) {
        platform.setStorageSync("channel_Cache", t)
    }, t.getChannel = function () {
        return platform.getStorageSync("channel_Cache")
    }, t.putMp = function (t) {
        platform.setStorageSync("mp_Cache", t)
    }, t.getMp = function () {
        return platform.getStorageSync("mp_Cache")
    }, t.serverTime = function () {
        return CacheData.getRAMData("serverTime")
    }, t.putServerTime = function (t) {
        CacheData.saveRAMData("serverTime", t)
    }, t.uid = function () {
        return CacheData.getRAMData("uid")
    }, t.setUid = function (t) {
        CacheData.saveRAMData("uid", t)
    }, t.getOffLine = function () {
        return CacheData.getRAMData("offLineTime")
    }, t.putOffLine = function (t) {
        CacheData.saveRAMData("offLineTime", t)
    }, t
}();
__reflect(AccountData.prototype, "AccountData");
var AdData = function () {
    function t() {
    }

    return t.getAdCount = function () {
        return CacheData.getRAMData("adCountSync")
    }, t.updateAdCount = function () {
        var t = this.getAdCount(), e = AccountData.serverTime() + egret.getTimer(), n = DateTool.makeTime(e);
        return t && t.date == n ? (t.count++, t.gettime = e) : t = {
            count: 1,
            date: n,
            gettime: e
        }, CacheData.saveRAMData("adCountSync", t), t
    }, t.putAdCount = function (t) {
        t && !t.gettime && (t = null), CacheData.saveRAMData("adCountSync", t)
    }, t
}();
__reflect(AdData.prototype, "AdData");
var BusinessmanData = function () {
    function t() {
    }

    return t.getConfByGl = function () {
        for (var t = ConfigData.getBusinessmanConfig(), e = RandomUitl.randomFloat(0, 10), n = 0; n < t.length; n++) {
            var a = t[n], i = a.gl;
            if (i && i[0] < e && e <= i[1]) return a
        }
    }, t.getScType = function () {
        var t = this.getConfByGl();
        if (t) {
            var e = t.scpCount, n = ConfigData.getCollect();
            if (n && Object.keys(n).length > 0) {
                for (var a = Object.keys(n).length, i = Object.keys(n), o = []; o.length < e;) {
                    var r = i[RandomUitl.randomInt(0, a - 1)];
                    -1 == o.indexOf(r) && o.push(r)
                }
                CacheData.saveRAMData("businessmanRandData", o)
            }
            var s = t.jiangli, l = RandomUitl.randomFloat(0, 10);
            if (s) for (var h in s) {
                var u = s[h];
                if (u) {
                    var c = u.jlGl;
                    if (l > c[0] && l <= c[1]) {
                        CacheData.saveRAMData("businessmanJldata", u);
                        break
                    }
                }
            }
        }
    }, t.getSecretData = function () {
        return CacheData.getRAMData("businessmanRandData")
    }, t.getSecretJl = function () {
        return CacheData.getRAMData("businessmanJldata")
    }, t.jiangliCount = function (t, e) {
    }, t.lingquCollectById = function (t, e, n) {
        TreasureBoxData.updateCollect(e, n)
    }, t.jiangliResult = function () {
        var e = t.getSecretJl();
        if (Object.keys(e).length > 0) {
            var n = e.jlId, a = e.jlCount, i = RoleData.getRole();
            if ("1" == n) {
                var o = BattleConstant.getAutoDps(), r = o.mul(a);
                i.gold = i.gold.plus(r), RoleData.putRole(i);
                var s = StringUtil.decimalFormat(r);
                return s
            }
            if ("2" == n) return i.jewel += a, RoleData.putRole(i), a;
            if ("3" == n) return LuckyBigZhuanPanData.updateZPQ(a), RoleData.putRole(i), a
        }
    }, t.putOreAndScType = function (t) {
        CacheData.saveRAMData("refreshOreOrSc", t)
    }, t.getOreAndScType = function () {
        return CacheData.getRAMData("refreshOreOrSc")
    }, t.currentTimeType = "", t.currentInitRefreshCount = 1, t.timeArr = {
        1: [8, 10],
        2: [12, 14],
        3: [18, 20],
        4: [22, 24]
    }, t
}();
__reflect(BusinessmanData.prototype, "BusinessmanData");
var ConfigData = function () {
    function t() {
    }

    return t.getLangPerfix = function () {
        var t = this.getLangConfig().language, e = [];
        for (var n in t[0]) e.push(n);
        return e
    }, t.getLangIndex = function (t) {
        void 0 === t && (t = "Chinese");
        var e = this.getLangPerfix().indexOf(t);
        return e
    }, t.getKeyStr = function (t) {
        var e = this.getLangConfig()._meta_data, n = +t.replace("www_", ""), a = e[n - 1], i = this.getLangIndex();
        return a[i]
    }, t.getLangConfig = function () {
        var t = RES.getRes("language_json");
        return t
    }, t.getAppConfig1 = function () {
        var t = RES.getRes("appConfig1_json");
        return t
    }, t.getSenceBlood = function () {
        var t = RES.getRes("bloodConfig_json");
        return t
    }, t.setSenceBlood = function (t) {
        CacheData.saveRAMData("bloodConfig_json", t)
    }, t.getSenceBloodById = function (t, e) {
        var n = this.getSenceBlood();
        return n[t][e - 1]
    }, t.getPlayerDpsConfig = function () {
        var t = RES.getRes("dpsConfig_json");
        return t
    }, t.setPlayerDpsConfig = function (t) {
        CacheData.saveRAMData("dpsConfig_json", t)
    }, t.getPlayerDpsConfigById = function (t, e) {
        var n = this.getPlayerDpsConfig(), a = n[t];
        return a[e]
    }, t.getGameConfig = function () {
        var t = RES.getRes("config_json");
        return t
    }, t.setGameConfig = function (t) {
        CacheData.saveRAMData("gameConfig_json", t)
    }, t.getBaseBlood = function () {
        var t = this.getGameConfig();
        return t.baseBlood
    }, t.getSence = function () {
        var t = this.getGameConfig();
        return t.sence
    }, t.getSenceById = function (t) {
        var e = this.getSence();
        return e[t]
    }, t.getGeology = function () {
        var t = this.getGameConfig();
        return t.geology
    }, t.getGeologyById = function (t) {
        var e = this.getGeology();
        return e[t]
    }, t.getPlayer = function () {
        var t = this.getGameConfig();
        return t.player
    }, t.getPlayerById = function (t) {
        var e = this.getPlayer();
        return e[t]
    }, t.getPlayerSkills = function () {
        var t = this.getGameConfig();
        return t.playerSkills
    }, t.getPlayerSkillById = function (t) {
        var e = this.getPlayerSkills();
        return e[t]
    }, t.getMagics = function () {
        var t = this.getGameConfig();
        return t.magic
    }, t.getMagicById = function (t) {
        var e = this.getMagics();
        return e[t]
    }, t.getSkills = function () {
        var t = this.getGameConfig();
        return t.skill
    }, t.getSkillById = function (t) {
        var e = this.getSkills();
        return e[t]
    }, t.getInviteList = function () {
        var t = this.getGameConfig();
        return t.inviteList
    }, t.getInviteItemById = function (t) {
        var e = this.getInviteList();
        return e[t]
    }, t.getCollectGroup = function () {
        var t = this.getGameConfig();
        return t.collectgroup
    }, t.getCollectGroupById = function (t) {
        var e = this.getCollectGroup();
        return e[t]
    }, t.getCollect = function () {
        var t = this.getGameConfig();
        return t.collect
    }, t.getCollectById = function (t) {
        var e = this.getCollect();
        return e[t]
    }, t.getScJewel = function () {
        var t = this.getGameConfig();
        return t.scjewel
    }, t.getScJinbi = function () {
        var t = this.getGameConfig();
        return t.scjinbi
    }, t.getBX12gl = function () {
        var t = this.getGameConfig();
        return t.baoxiangconfig.gl
    }, t.getBX1gl = function () {
        var t = this.getGameConfig();
        return t.baoxiangconfig.baoxiang1
    }, t.getBX2gl = function () {
        var t = this.getGameConfig();
        return t.baoxiangconfig.baoxiang2
    }, t.getBXClickCount = function () {
        var t = this.getGameConfig();
        return t.baoxiangconfig.baoxiangclickCount
    }, t.initClickCount = function () {
        var t = {};
        return t[1] = this.getBXClickCount()[1], t[2] = this.getBXClickCount()[2], t[3] = this.getBXClickCount()[3], t
    }, t.getLuckyGlConfig = function () {
        var t = this.getGameConfig();
        return t.LuckyZhuanpan
    }, t.getBusinessmanConfig = function () {
        var t = this.getGameConfig();
        return t.businessman
    }, t.getVisibleTimeConfig = function () {
        var t = this.getGameConfig();
        return t.businessmanvisibleTime
    }, t.getVipConfig = function () {
        var t = this.getGameConfig();
        return t.vipConfig
    }, t.getVipRewardById = function (t) {
        var e = this.getGameConfig(), n = e && e.vipRewardConfig && e.vipRewardConfig[t] ? e.vipRewardConfig[t] : {};
        return n
    }, t.getOreGroup = function () {
        var t = this.getGameConfig();
        return t.oregroup
    }, t.getOreGroupById = function (t) {
        var e = this.getOreGroup();
        return e[t]
    }, t.getOre = function () {
        var t = this.getGameConfig();
        return t.ore
    }, t.getOreById = function (t) {
        var e = this.getOre();
        return e[t]
    }, t.getOreBusinessman = function () {
        var t = this.getGameConfig();
        return t.orebusinessman
    }, t.getOreEveryFloorOver = function () {
        var t = this.getGameConfig();
        return t.oreEveryFloorOver
    }, t.getOreHsCountArr = function () {
        var t = this.getGameConfig();
        return t.oreHsCountGlArr
    }, t
}();
__reflect(ConfigData.prototype, "ConfigData");
var DataCenter = function () {
    function t() {
    }

    return t.packData = function () {
        var t = {};
        t.role = RoleData.getRole(), t.tenTimesRewardCacheGold = RoleData.getTenTimesReward("gold"), t.tenTimesRewardCacheJewel = RoleData.getTenTimesReward("jewel"), t.players = PlayerData.getPlayers(), t.currentBlood = SenceData.getCurrentBlood(), t.stones = SenceData.getStoneTypes(), t.magics = MagicData.getMagics(), t.guideOption = GuideData.currentOpt(), t.shareCount = ShareData.getShareCount(), t.adCount = AdData.getAdCount(), t.luckQuan = LuckyBigZhuanPanData.getZPQCount(), t.inviteTaskFinish = InviteData.getInviteTaskfinishId(), t.skillsCache = SkillData.getSkills(), t.businessCurrentTimeType = BusinessmanData.currentTimeType, t.businessCurrentInitRefreshCount = BusinessmanData.currentInitRefreshCount, t.businessCurrentSecretData = BusinessmanData.getSecretData(), t.businessCurrentSecretJl = BusinessmanData.getSecretJl(), t.collectData = TreasureBoxData.getCollect(), t.sevenDaySignData = SevenDaySignData.getSignData(), t.hithitMostCount = HithitData.getHitMostCount(), t.zhuanpanData = LuckyBigZhuanPanData.getZhuanPan(), t.NotEnoughData = NotEnoughData.getNotEnoughData(), t.RefreshJewelData = RefreshJewelData.getRefreshJewelData(), t.unlockOresArr = KuangshiData.getUnlockOresArr(), t.unlockOreCount = KuangshiData.getUnlockOre(), t.businessCurrentOreData = KuangshiData.getOreData(), t.businessCurrentOreJl = KuangshiData.getOreJl(), t.businessCurrentOreOrScType = BusinessmanData.getOreAndScType(), t.OreRefreshJewelData = OreRefreshJewelData.getRefreshJewelData(), t.oreHSCount = KuangshiData.getOreHsCount();
        var e = RoleData.getAddProgram();
        e && (t.addProgramCache = e), t.focusGainCache = RoleData.getFocusGain(), t.vipDataCache = VipData.getVipData(), GameApi.updateData(t, function () {
            Logger.log("服务器数据发送成功！")
        })
    }, t.unpackData = function (t) {
        var e = null;
        try {
            e = t
        } catch (n) {
            Logger.log("udataStr:" + t, n)
        }
        if (e || (e = {}), e.role) RoleData.putRole(e.role); else {
            var a = new Role;
            RoleData.putRole(a), GuideData.putCurrentOpt(1)
        }
        e.players && PlayerData.putPlayers(e.players), e.currentBlood && SenceData.updateCurrentBlood(e.currentBlood), e.stones ? SenceData.setStoneTypes(e.stones) : SenceData.setStoneTypes([]), e.magics && MagicData.putMagics(e.magics), e.skillsCache && SkillData.putSkills(e.skillsCache), e.shareCount && ShareData.putShareCount(e.shareCount), e.shareCount && ShareData.putShareCount(e.shareCount), e.adCount && AdData.putAdCount(e.adCount), InviteData.setInviteTaskfinishId(e.inviteTaskFinish), e.businessCurrentTimeType && (BusinessmanData.currentTimeType = e.businessCurrentTimeType), e.businessCurrentInitRefreshCount && (BusinessmanData.currentInitRefreshCount = e.businessCurrentInitRefreshCount), e.businessCurrentSecretData && platform.setStorageSync("businessmanRandData", e.businessCurrentSecretData), e.businessCurrentSecretJl && platform.setStorageSync("businessmanJldata", e.businessCurrentSecretJl), e.collectData && TreasureBoxData.putCollect(e.collectData), e.hithitMostCount && HithitData.putHitMostCount(e.hithitMostCount), e.sevenDaySignData && SevenDaySignData.putSignData(e.sevenDaySignData), LuckyBigZhuanPanData.setZPQ(e.luckQuan), e.tenTimesRewardCacheGold && RoleData.putTenTimesReward("gold", e.tenTimesRewardCacheGold), e.tenTimesRewardCacheJewel && RoleData.putTenTimesReward("jewel", e.tenTimesRewardCacheJewel), e.guideOption ? GuideData.putCurrentOpt(e.guideOption) : GuideData.putCurrentOpt(1), e.zhuanpanData && LuckyBigZhuanPanData.putZhuanPan(e.zhuanpanData), e.addProgramCache && RoleData.putAddProgram(), e.NotEnoughData && NotEnoughData.putNotEnoughData(e.NotEnoughData), e.RefreshJewelData && RefreshJewelData.putRefreshJewelData(e.RefreshJewelData), e.vipDataCache && VipData.putVipData(e.vipDataCache), e.focusGainCache && RoleData.putFocusGain(e.focusGainCache), e.unlockOresArr && KuangshiData.putUnlockOresServer(e.unlockOresArr), e.unlockOreCount && KuangshiData.putUnlockOre(e.unlockOreCount), e.businessCurrentOreOrScType && BusinessmanData.putOreAndScType(e.businessCurrentOreOrScType), e.businessCurrentOreJl && CacheData.saveRAMData("oreJldata", e.businessCurrentOreJl), e.businessCurrentOreData && CacheData.saveRAMData("oreRandData", e.businessCurrentOreData), e.OreRefreshJewelData && OreRefreshJewelData.putRefreshJewelData(e.OreRefreshJewelData), e.oreHSCount && CacheData.saveRAMData("oreHuishouCount", e.oreHSCount)
    }, t
}();
__reflect(DataCenter.prototype, "DataCenter");
var DpsData = function () {
    function t() {
    }

    return t.getFinalDps = function (t) {
        return CacheData.getRAMData("finalDpsCache" + t)
    }, t.setFinalDps = function (t, e) {
        CacheData.saveRAMData("finalDpsCache" + t, e)
    }, t.getBaoJi = function (t) {
        return CacheData.getRAMData("baojiCache" + t)
    }, t.setBaoJi = function (t, e, n) {
        CacheData.saveRAMData("baojiCache" + t, {gailv: e, bili: n})
    }, t.clear = function (t) {
        Logger.log("清理DPS缓存"), CacheData.removeRAMData("finalDpsCache" + t), CacheData.removeRAMData("baojiCache" + t)
    }, t.clearAll = function () {
        Logger.log("清理ALL DPS缓存");
        for (var t = 0; 11 > t; t++) CacheData.removeRAMData("finalDpsCache" + t), CacheData.removeRAMData("baojiCache" + t)
    }, t
}();
__reflect(DpsData.prototype, "DpsData");
var HithitData = function () {
    function t() {
    }

    return t.putHitMostCount = function (t) {
        CacheData.saveRAMData("hitMostCount", t)
    }, t.getHitMostCount = function () {
        return CacheData.getRAMData("hitMostCount")
    }, t.hitstopBybaoxiang2 = !1, t
}();
__reflect(HithitData.prototype, "HithitData");
var InviteData = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }

    return __extends(e, t), e.getInviteSgin = function () {
        return this.getRAMData("InviteSginData")
    }, e.putInviteSgin = function (t) {
        this.saveRAMData("InviteSginData", t)
    }, e.getInviteSginVip = function () {
        return this.getRAMData("InviteSginVipData")
    }, e.putInviteSginVip = function (t) {
        this.saveRAMData("InviteSginVipData", t)
    }, e.getInviteList = function () {
        return this.getRAMData("InviteListData")
    }, e.putInviteList = function (t) {
        this.saveRAMData("InviteListData", t)
    }, e.getInviteTaskfinishId = function () {
        return this.getRAMData("InviteTaskfinishId")
    }, e.updateInviteTaskFinishId = function (t) {
        var e = this.getInviteTaskfinishId(), n = AccountData.serverTime() + egret.getTimer(), a = DateTool.makeTime(n);
        if (e) if (e.date != a) e = {date: a, ids: [t], minutes5: null}; else {
            var i = e.ids;
            i.push(t), e.ids = i
        } else e = {date: a, ids: [t], minutes5: null};
        this.saveRAMData("InviteTaskfinishId", e)
    }, e.checkisFinish = function (t) {
        var e = this.getInviteTaskfinishId();
        if (!e) return !1;
        var n = AccountData.serverTime() + egret.getTimer(), a = DateTool.makeTime(n);
        if (e.date != a) return this.saveRAMData("InviteTaskfinishId", null), !1;
        var i = e.ids;
        return ArrayUtil.contains(i, t)
    }, e.setInviteTaskfinishId = function (t) {
        var e = AccountData.serverTime() + egret.getTimer(), n = DateTool.makeTime(e);
        t && t.date != n && (t = null), this.saveRAMData("InviteTaskfinishId", t)
    }, e.updateMinutes5State = function (t) {
        var e = this.getInviteTaskfinishId(), n = AccountData.serverTime() + egret.getTimer(), a = DateTool.makeTime(n);
        e || (e = {date: a, ids: [], minutes5: null}), e.date != a && (e = {
            date: a,
            ids: [],
            minutes5: null
        }), e.minutes5 ? e.minutes5.time <= n && (e.minutes5 = {
            time: n + 12e4,
            times: t
        }) : e.minutes5 = {time: n + 12e4, times: t}, this.saveRAMData("InviteTaskfinishId", e)
    }, e.isMinutes5 = function () {
        var t = this.getInviteTaskfinishId(), e = AccountData.serverTime() + egret.getTimer();
        return !t || !t.minutes5 || e > t.minutes5.time ? !1 : !0
    }, e
}(CacheData);
__reflect(InviteData.prototype, "InviteData");
var KuangshiData = function () {
    function t() {
    }

    return t.getUnlockOresArr = function () {
        return CacheData.getRAMData("unlockOresArr")
    }, t.putUnlockOresServer = function (t) {
        CacheData.saveRAMData("unlockOresArr", t)
    }, t.putUnlockOresArr = function (t) {
        var e = this.getUnlockOresArr();
        e ? -1 == e.indexOf(t) && e.push(t) : (e = [], e.push(t)), CacheData.saveRAMData("unlockOresArr", e)
    }, t.getOreFloorOverConfByGl = function () {
        for (var t = ConfigData.getOreEveryFloorOver(), e = RandomUitl.randomFloat(0, 10), n = 0; n < t.length; n++) {
            var a = t[n], i = a.gl;
            if (i && i[0] < e && e <= i[1]) return a
        }
    }, t.getFloorOverOreType = function () {
        var t = this.getOreFloorOverConfByGl();
        if (t) {
            var e = t.oreCount, n = this.getUnlockOresArr();
            if (n && n.length > 0) {
                for (var a = []; a.length < e;) {
                    var i = n[RandomUitl.randomInt(0, n.length - 1)];
                    a.push(i)
                }
                return this.putFlooroverOre(a), a
            }
        }
    }, t.getFlooroverOre = function () {
        return CacheData.getRAMData("flooroverOreData")
    }, t.putFlooroverOre = function (t) {
        CacheData.saveRAMData("flooroverOreData", t)
    }, t.getUnlockOre = function () {
        return CacheData.getRAMData("unlockOreCount")
    }, t.putUnlockOre = function (t) {
        CacheData.saveRAMData("unlockOreCount", t)
    }, t.updateUnlockOre = function (t, e) {
        var n = this.getUnlockOre();
        if (n) if (i = n, i[t]) {
            var a = i[t];
            a += e, i[t] = a
        } else i[t] = e; else {
            var i = {};
            i[t] = e
        }
        0 == i[t], CacheData.saveRAMData("unlockOreCount", i)
    }, t.getOreConfByGl = function () {
        for (var t = ConfigData.getOreBusinessman(), e = RandomUitl.randomFloat(0, 10), n = 0; n < t.length; n++) {
            var a = t[n], i = a.gl;
            if (i && i[0] < e && e <= i[1]) return a
        }
    }, t.getOreType = function () {
        var t = this.getOreConfByGl();
        if (t) {
            var e = t.oreCount, n = ConfigData.getOre();
            if (n && Object.keys(n).length > 0) {
                var a = Object.keys(n).length, i = Object.keys(n), o = this.getUnlockOresArr(), r = [], s = [];
                if (o) for (var l in o) s.push(o[l]);
                r = s;
                var h = r.length;
                if (a - h >= e) for (var u = 0; e > u; u++) {
                    var c = i[h + u];
                    -1 == r.indexOf(c) && r.push(c)
                }
                for (var g = [], p = r.length; g.length < e;) {
                    var d = r[RandomUitl.randomInt(0, p - 1)];
                    -1 == g.indexOf(d) && g.push(d)
                }
                CacheData.saveRAMData("oreRandData", g), this.clearOreHsCount();
                for (var f in g) this.putOreHsCount(g[f])
            }
            var C = t.jiangli, y = RandomUitl.randomFloat(0, 10);
            if (C) for (var v in C) {
                var w = C[v];
                if (w) {
                    var D = w.jlGl;
                    if (y > D[0] && y <= D[1]) {
                        CacheData.saveRAMData("oreJldata", w);
                        break
                    }
                }
            }
        }
    }, t.getOreData = function () {
        return CacheData.getRAMData("oreRandData")
    }, t.getOreJl = function () {
        return CacheData.getRAMData("oreJldata")
    }, t.oreJiangliResult = function () {
        var t = this.getOreJl();
        if (Object.keys(t).length > 0) {
            var e = t.jlId, n = t.jlCount, a = RoleData.getRole();
            if ("1" == e) {
                var i = BattleConstant.getAutoDps(), o = i.mul(n);
                a.gold = a.gold.plus(o), RoleData.putRole(a);
                var r = StringUtil.decimalFormat(o);
                return r
            }
            if ("2" == e) return a.jewel += n, RoleData.putRole(a), n;
            if ("3" == e) return LuckyBigZhuanPanData.updateZPQ(n), RoleData.putRole(a), n
        }
    }, t.oreHsCountByGl = function () {
        for (var t = ConfigData.getOreHsCountArr(), e = RandomUitl.randomFloat(0, 10), n = 0; n < t.length; n++) {
            var a = t[n], i = a.gl, o = a.hscount;
            if (i && o && i[0] < e && e <= i[1]) return o
        }
    }, t.putOreHsCount = function (t) {
        var e = this.oreHsCountByGl(), n = this.getOreHsCount();
        if (n) a = n, a[t] || (a[t] = e); else {
            var a = {};
            a[t] = e
        }
        0 == a[t], CacheData.saveRAMData("oreHuishouCount", a)
    }, t.clearOreHsCount = function () {
        CacheData.saveRAMData("oreHuishouCount", null)
    }, t.getOreHsCount = function () {
        return CacheData.getRAMData("oreHuishouCount")
    }, t
}();
__reflect(KuangshiData.prototype, "KuangshiData");
var LuckyBigZhuanPanData = function () {
    function t() {
    }

    return t.putZhuanPan = function (t) {
        CacheData.saveRAMData("currentZhuanData", t)
    }, t.getZhuanPan = function () {
        return CacheData.getRAMData("currentZhuanData")
    }, t.updateZhuanCount = function (t) {
        void 0 === t && (t = 1);
        var e = this.getZhuanPan();
        e || (e = {});
        var n = AccountData.serverTime() + egret.getTimer(), a = DateTool.makeTime(n), i = e;
        i ? (i.date == a ? i.count += t : i = new ZhuanPan(a, 0 + t), e = i) : e = new ZhuanPan(a, 0 + t), this.putZhuanPan(e)
    }, t.getZhuanCount = function () {
        var t = this.getZhuanPan();
        t || (t = {});
        var e = AccountData.serverTime() + egret.getTimer(), n = DateTool.makeTime(e), a = t;
        return a && a.date != n ? (this.putZhuanPan(t), null) : a
    }, t.getConfigGl = function () {
        for (var t = ConfigData.getLuckyGlConfig(), e = RandomUitl.randomFloat(0, 10), n = 0; n < t.length; n++) {
            var a = t[n];
            if (a) {
                var i = a.gl;
                if (i && e > i[0] && e <= i[1]) return a
            }
        }
    }, t.getIdByGl = function () {
        var t = this.getConfigGl();
        if (t) {
            var e = t.id;
            return e
        }
    }, t.getZPQCount = function () {
        return CacheData.getRAMData("zhuanpanquanCount")
    }, t.updateZPQ = function (t) {
        var e = this.getZPQCount();
        e || (e = 0), e += t, CacheData.saveRAMData("zhuanpanquanCount", e)
    }, t.setZPQ = function (t) {
        t || 0 == t || (t = 2), CacheData.saveRAMData("zhuanpanquanCount", t)
    }, t.onceClick = function () {
        var t = -1;
        this.updateZPQ(t)
    }, t.addQuanBy10min = function () {
        var t = 1;
        this.updateZPQ(t)
    }, t.updateBeishu = function (t) {
        var e = t ? t : 1;
        return CacheData.saveRAMData("zhuanpanJiangliBeishu", e), e
    }, t.getBeishu = function () {
        var t = CacheData.getRAMData("zhuanpanJiangliBeishu");
        return t || (t = 1), t
    }, t.addJewel = function (t) {
        var e = this.getBeishu();
        e > 1 && this.updateBeishu(1);
        var n = RoleData.getRole(), a = t * e;
        return n.jewel += a, RoleData.putRole(n), a
    }, t.addGold = function (t) {
        var e = this.getBeishu();
        e > 1 && this.updateBeishu(1);
        var n = RoleData.getRole(), a = BattleConstant.getAutoDps(), i = a.mul(t * e);
        n.gold = n.gold.plus(i), RoleData.putRole(n);
        var o = StringUtil.decimalFormat(i);
        return o
    }, t.addCollect = function (t) {
        if (void 0 === t && (t = null), null == t) {
            var e = TreasureBoxData.getscIdConfig();
            TreasureBoxData.updateCollect(e.scid, 1)
        } else {
            var e = t;
            TreasureBoxData.updateCollect(e.scid, 1)
        }
        return e
    }, t.getResultById = function (t) {
        var e = {}, n = 0, a = {};
        return 1 == t ? (n = 2, a = this.addGold(3600)) : 2 == t ? (n = 2, a = this.addGold(7200)) : 3 == t ? (n = 2, a = this.addGold(1800)) : 4 == t ? (n = 1, a = this.addJewel(20)) : 5 == t ? (n = 3, a = this.addCollect()) : 6 == t ? (n = 1, a = this.addJewel(40)) : 7 == t ? (n = 2, a = this.addGold(14400)) : 8 == t && (n = 1, a = this.addJewel(60)), e = {
            type: n,
            result: a,
            id: t
        }
    }, t
}();
__reflect(LuckyBigZhuanPanData.prototype, "LuckyBigZhuanPanData");
var MagicData = function () {
    function t() {
    }

    return t.getMagics = function () {
        return CacheData.getRAMData("currentMagicState")
    }, t.updateMagicByType = function (t, e) {
        void 0 === e && (e = 1);
        var n = this.getMagics();
        n || (n = {});
        var a = (ConfigData.getMagicById(t), AccountData.serverTime() + egret.getTimer()), i = DateTool.makeTime(a);
        0 > e && (a = 0);
        var o = n[t];
        MagicConstant.getMaxCount(t);
        "1" == t ? o ? (o.date == i ? o.count += e : o = new Magic(i, 0, e), n[t] = o) : n[t] = new Magic(i, 0, e) : (o ? (o.date == i ? (o.time = a, o.count += e) : o = new Magic(i, a, e), n[t] = o) : n[t] = new Magic(i, a, e), DpsData.clearAll()), this.putMagics(n)
    }, t.addMagicCount = function (t) {
        for (var e = 1; 5 >= e; e++) this.updateMagicByType(e + "", -t)
    }, t.getMagicById = function (t) {
        var e = this.getMagics();
        e || (e = {});
        var n = AccountData.serverTime() + egret.getTimer(), a = DateTool.makeTime(n), i = e[t];
        return i && i.date != a ? (delete e[t], this.putMagics(e), null) : i
    }, t.putMagics = function (t) {
        CacheData.saveRAMData("currentMagicState", t)
    }, t
}();
__reflect(MagicData.prototype, "MagicData");
var NotEnoughData = function () {
    function t() {
    }

    return t.putNotEnoughData = function (t) {
        CacheData.saveRAMData("NotEnoughData", t)
    }, t.getNotEnoughData = function () {
        return CacheData.getRAMData("NotEnoughData")
    }, t.updateNotJewelCount = function (t, e) {
        void 0 === t && (t = 0), void 0 === e && (e = 0);
        var n = this.getNotEnoughData(), a = AccountData.serverTime() + egret.getTimer(), i = DateTool.makeTime(a),
            o = n;
        o ? (o.date == i ? (o.jewelCount += t, o.jinbiCount += e) : o = new NotEnough_vo(i, 0 + t, 0 + e), n = o) : n = new NotEnough_vo(i, 0 + t, 0 + e), this.putNotEnoughData(n)
    }, t.getcurrentLimitData = function () {
        var t = this.getNotEnoughData(), e = AccountData.serverTime() + egret.getTimer(), n = DateTool.makeTime(e),
            a = t;
        return a && a.date != n ? (delete a.jewelCount, delete a.jinbiCount, this.putNotEnoughData(t), null) : a
    }, t
}();
__reflect(NotEnoughData.prototype, "NotEnoughData");
var OreRefreshJewelData = function () {
    function t() {
    }

    return t.putRefreshJewelData = function (t) {
        CacheData.saveRAMData("currentOreRefreshData", t)
    }, t.getRefreshJewelData = function () {
        return CacheData.getRAMData("currentOreRefreshData")
    }, t.updateRefreshCount = function (t) {
        void 0 === t && (t = 1);
        var e = this.getRefreshJewelData();
        e || (e = {});
        var n = AccountData.serverTime() + egret.getTimer(), a = DateTool.makeTime(n), i = e;
        i ? (i.date == a ? i.count += t : i = new RefreshJewel(a, 0 + t), e = i) : e = new RefreshJewel(a, 0 + t), this.putRefreshJewelData(e)
    }, t.getCurRefreshCount = function () {
        var t = this.getRefreshJewelData();
        t || (t = {});
        var e = AccountData.serverTime() + egret.getTimer(), n = DateTool.makeTime(e), a = t;
        return a && a.date != n ? (this.putRefreshJewelData(t), null) : a
    }, t
}();
__reflect(OreRefreshJewelData.prototype, "OreRefreshJewelData");
var PlayerData = function () {
    function t() {
    }

    return t.getPlayerNumber = function () {
        var t = this.getPlayers();
        return t ? Object.keys(t).length : 0
    }, t.getPlayers = function () {
        return CacheData.getRAMData("players")
    }, t.getOtherPlayers = function () {
        var t = {}, e = this.getPlayers();
        for (var n in e) n != PlayerConstant.HEAD_ID && (t[n + ""] = e[n]);
        return t
    }, t.updatePlayer = function (t, e) {
        DpsData.clear(t);
        var n = this.getPlayers();
        n || (n = {}), n[t] = e, CacheData.saveRAMData("players", n)
    }, t.getPlayerById = function (t) {
        var e = this.getPlayers();
        return e && e[t] ? e[t] : null
    }, t.putPlayers = function (t) {
        CacheData.saveRAMData("players", t)
    }, t.checkNewPlayer = function (t) {
        var e = this.getPlayers();
        for (var n in e) {
            var a = e[n];
            if (a.inviteNew && a.inviteNew.openid == t) return !0
        }
        return !1
    }, t.insetInviteNew = function (t) {
        var e = this.getPlayers();
        for (var n in e) {
            var a = e[n];
            if (!a.inviteNew) {
                a.inviteNew = {
                    avatar: t.avatar,
                    nick: t.nick,
                    openid: t.openid
                }, this.updatePlayer(a.type + "", a), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "getreward", "getreward8", ""));
                break
            }
        }
    }, t.isClass10BtnState = 1, t
}();
__reflect(PlayerData.prototype, "PlayerData");
var RefreshJewelData = function () {
    function t() {
    }

    return t.putRefreshJewelData = function (t) {
        CacheData.saveRAMData("currentRefreshData", t)
    }, t.getRefreshJewelData = function () {
        return CacheData.getRAMData("currentRefreshData")
    }, t.updateRefreshCount = function (t) {
        void 0 === t && (t = 1);
        var e = this.getRefreshJewelData();
        e || (e = {});
        var n = AccountData.serverTime() + egret.getTimer(), a = DateTool.makeTime(n), i = e;
        i ? (i.date == a ? i.count += t : i = new RefreshJewel(a, 0 + t), e = i) : e = new RefreshJewel(a, 0 + t), this.putRefreshJewelData(e)
    }, t.getCurRefreshCount = function () {
        var t = this.getRefreshJewelData();
        t || (t = {});
        var e = AccountData.serverTime() + egret.getTimer(), n = DateTool.makeTime(e), a = t;
        return a && a.date != n ? (this.putRefreshJewelData(t), null) : a
    }, t
}();
__reflect(RefreshJewelData.prototype, "RefreshJewelData");
var RoleData = function () {
    function t() {
    }

    return t.getRole = function () {
        var t = CacheData.getRAMData("role");
        return t && (t.gold = new Decimal(t.gold)), t
    }, t.putRole = function (t) {
        CacheData.saveRAMData("role", t)
    }, t.getTenTimesReward = function (t) {
        var e = CacheData.getRAMData("tenTimesRewardCache" + t),
            n = AccountData.serverTime() + egret.getTimer().valueOf(), a = DateTool.makeTime(n);
        return e && e.date == a || (e = {date: a, count: 1}), e
    }, t.updateTenTimesReward = function (t) {
        var e = this.getTenTimesReward(t), n = AccountData.serverTime() + egret.getTimer().valueOf(),
            a = DateTool.makeTime(n);
        return e || (e = {date: a, count: 1}), e.date == a ? e.count++ : e = {
            date: a,
            count: 1
        }, CacheData.saveRAMData("tenTimesRewardCache" + t, e), e
    }, t.putTenTimesReward = function (t, e) {
        CacheData.saveRAMData("tenTimesRewardCache" + t, e)
    }, t.getAddProgram = function () {
        return CacheData.getRAMData("addProgramCache")
    }, t.putAddProgram = function () {
        CacheData.saveRAMData("addProgramCache", 1)
    }, t.getFocusGain = function () {
        return CacheData.getRAMData("focusGainCache")
    }, t.putFocusGain = function (t) {
        CacheData.saveRAMData("focusGainCache", t)
    }, t
}();
__reflect(RoleData.prototype, "RoleData");
var SenceData = function () {
    function t() {
    }

    return t.getCurrentBlood = function () {
        var t = CacheData.getRAMData("currentBloodValue");
        return t && "" != t ? new Decimal(t) : new Decimal(0)
    }, t.updateCurrentBlood = function (t) {
        var e = t instanceof Decimal ? t.toFixed() : "";
        CacheData.saveRAMData("currentBloodValue", e)
    }, t.getStoneTypes = function () {
        var t = CacheData.getRAMData("currentStoneTypes");
        return !t || t.length < 1 ? (BattleConstant.createStones(), CacheData.getRAMData("currentStoneTypes")) : t
    }, t.setStoneTypes = function (t) {
        CacheData.saveRAMData("currentStoneTypes", t)
    }, t
}();
__reflect(SenceData.prototype, "SenceData");
var SevenDaySignData = function () {
    function t() {
    }

    return t.getConfig = function () {
        var t = ConfigData.getGameConfig();
        return t.sevenDaySign
    }, t.getConfigByIndex = function (t) {
        var e = this.getConfig();
        return e && t < e.length ? e[t] : null
    }, t.updateSign = function (t, e) {
        var n = {timestamp: t, count: e};
        CacheData.saveRAMData("SevenDaySignCache", n)
    }, t.getSignData = function () {
        return CacheData.getRAMData("SevenDaySignCache")
    }, t.putSignData = function (t) {
        CacheData.saveRAMData("SevenDaySignCache", t)
    }, t
}();
__reflect(SevenDaySignData.prototype, "SevenDaySignData");
var ShareData = function () {
    function t() {
    }

    return t.getShareCount = function () {
        return CacheData.getRAMData("shareCountSync")
    }, t.updateShareCount = function () {
        var t = this.getShareCount(), e = AccountData.serverTime() + egret.getTimer(), n = DateTool.makeTime(e);
        return t && t.date == n ? t.count++ : t = {count: 1, date: n}, CacheData.saveRAMData("shareCountSync", t), t
    }, t.putShareCount = function (t) {
        CacheData.saveRAMData("shareCountSync", t)
    }, t
}();
__reflect(ShareData.prototype, "ShareData");
var SkillData = function () {
    function t() {
    }

    return t.getSkills = function () {
        return CacheData.getRAMData("currentSkillLevels")
    }, t.putSkills = function (t) {
        return CacheData.saveRAMData("currentSkillLevels", t)
    }, t.upgradeSkill = function (t) {
        DpsData.clearAll();
        var e = this.getSkills();
        if (e || (e = {}), e[t]) {
            var n = e[t].level;
            n++, e[t] = {level: n}
        } else e[t] = {level: 1};
        this.putSkills(e)
    }, t.getSkillById = function (t) {
        var e = this.getSkills();
        return e && e[t] ? e[t] : 0
    }, t
}();
__reflect(SkillData.prototype, "SkillData");
var SoundData = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }

    return __extends(e, t), e.getSoundValue = function () {
        var t = platform.getStorageSync("gameSoundValue");
        return t
    }, e.putSoundValue = function (t) {
        platform.setStorageSync("gameSoundValue", t)
    }, e.getBgSoundValue = function () {
        var t = this.getRAMData("gameBgSoundValue");
        return null == t ? (this.putBgSoundValue(4), 4) : parseInt(t)
    }, e.putBgSoundValue = function (t) {
        this.saveRAMData("gameBgSoundValue", t)
    }, e
}(CacheData);
__reflect(SoundData.prototype, "SoundData");
var TreasureBoxData = function () {
    function t() {
    }

    return t.openSctypeByBXgl = function () {
        var t = ConfigData.getBX12gl(), e = RandomUitl.randomFloat(0, 10), n = 0;
        for (var a in t) {
            var i = t[a];
            if (i && e > i[0] && e <= i[1]) if ("1" == a) {
                var o = ConfigData.getBX1gl(), r = RandomUitl.randomFloat(0, 10);
                for (var s in o) {
                    var l = o[s];
                    l && r > l[0] && r <= l[1] && (n = parseInt(s))
                }
            } else if ("2" == a) {
                var h = ConfigData.getBX2gl(), u = RandomUitl.randomFloat(0, 10);
                for (var c in h) {
                    var g = h[c];
                    g && u >= g[0] && u <= g[1] && (n = parseInt(c))
                }
            }
        }
        return n
    }, t.putBaoxiang1 = function (t) {
        CacheData.saveRAMData("nextfloorBaoxiang1", t)
    }, t.getBaoxiang1 = function () {
        var t = CacheData.getRAMData("nextfloorBaoxiang1"), e = t ? t : 0;
        return e
    }, t.putBaoxiang2 = function (t) {
        CacheData.saveRAMData("nextfloorBaoxiang2", t)
    }, t.getBaoxiang2 = function () {
        var t = CacheData.getRAMData("nextfloorBaoxiang2"), e = t ? t : 0;
        return e
    }, t.getscIdConfig = function () {
        var t = ConfigData.getCollect();
        if (t && Object.keys(t).length > 0) {
            var e = Object.keys(t), n = e[RandomUitl.randomInt(0, e.length - 1)], a = t[n];
            return a
        }
    }, t.updateCollect = function (t, e) {
        var n = this.getCollect();
        if (n) {
            var a = n;
            if (a[t]) {
                var i = a[t];
                i += e, a[t] = i
            } else a[t] = e
        } else {
            var a = {};
            a[t] = e
        }
        0 == a[t] && delete a[t], CacheData.saveRAMData("scData", a);
        var o = ConfigData.getCollectById(t);
        !o || 1 != o.buffType && 2 != o.buffType && 3 != o.buffType || DpsData.clear(o.groupid)
    }, t.getCollect = function () {
        return CacheData.getRAMData("scData")
    }, t.putCollect = function (t) {
        if (t) {
            var e = Object.keys(t), n = e && e.length > 0 ? e.shift() : null;
            if (n && "object" == typeof t[n]) {
                var a = {};
                for (var i in t) {
                    var o = t[i], r = o.scCount;
                    a[i] = r
                }
                CacheData.saveRAMData("scData", a)
            } else CacheData.saveRAMData("scData", t)
        }
    }, t.lingquCollectById = function (t) {
        if (t) {
            for (var e = -1, n = 1; 5 >= n; n++) {
                var a = t + 400 + n;
                this.updateCollect(a, e)
            }
            var i = RoleData.getRole();
            if ("1" == t || "2" == t || "3" == t) i.jewel += 100; else {
                var o = BattleConstant.getAutoDps(), r = o.mul(2880);
                i.gold = i.gold.plus(r)
            }
            RoleData.putRole(i)
        }
    }, t.getscjewelConfig = function () {
        for (var t = ConfigData.getScJewel(), e = RandomUitl.randomFloat(0, 10), n = 0; n < t.length; n++) {
            var a = t[n];
            if (a) {
                var i = a.gl;
                if (i && e > i[0] && e <= i[1]) return a
            }
        }
    }, t.getscJinbiConfig = function () {
        for (var t = ConfigData.getScJinbi(), e = RandomUitl.randomFloat(0, 10), n = 0; n < t.length; n++) {
            var a = t[n];
            if (a) {
                var i = a.gl;
                if (i && e > i[0] && e <= i[1]) return a
            }
        }
    }, t.lingquJewel = function (t) {
        var e = RoleData.getRole();
        t && (e.jewel += t, RoleData.putRole(e))
    }, t.lingquJinbi = function (t) {
        var e = RoleData.getRole();
        if (t) {
            var n = BattleConstant.getAutoDps(), a = n.mul(t);
            e.gold = e.gold.plus(a), RoleData.putRole(e)
        }
    }, t
}();
__reflect(TreasureBoxData.prototype, "TreasureBoxData");
var VipData = function () {
    function t() {
    }

    return t.getVipData = function () {
        return CacheData.getRAMData("vipDataCache")
    }, t.putVipData = function (t) {
        CacheData.saveRAMData("vipDataCache", t)
    }, t.getVipConfigByLevel = function (t) {
        var e = ConfigData.getVipConfig();
        if (!e) return null;
        for (var n in e) {
            var a = e[n];
            if (a && a.viplevel == t) return a
        }
        return null
    }, t.getMagicAddMaxCount = function () {
        var t = this.getVipData();
        if (!t) return 0;
        var e = this.getVipConfigByLevel(t.vipLevel);
        if (!e) return 0;
        var n = ConfigData.getVipRewardById(e.vipReward);
        if (!n) return 0;
        var a = n.onceRewardType.split(","), i = n.onceRewardValue.split(","), o = a.indexOf("1");
        return o >= 0 && i && o < i.length ? Number(i[o]) : 0
    }, t.getZhuanPanAddMaxCount = function () {
        var t = this.getVipData();
        if (!t) return 0;
        var e = this.getVipConfigByLevel(t.vipLevel);
        if (!e) return 0;
        var n = ConfigData.getVipRewardById(e.vipReward);
        if (!n) return 0;
        var a = n.onceRewardType.split(","), i = n.onceRewardValue.split(","), o = a.indexOf("2");
        return o >= 0 && i && o < i.length ? Number(i[o]) : 0
    }, t.getBusinessAddMaxCount = function () {
        var t = this.getVipData();
        if (!t) return 0;
        var e = this.getVipConfigByLevel(t.vipLevel);
        if (!e) return 0;
        var n = ConfigData.getVipRewardById(e.vipReward);
        if (!n) return 0;
        var a = n.onceRewardType.split(","), i = n.onceRewardValue.split(","), o = a.indexOf("3");
        return o >= 0 && i && o < i.length ? Number(i[o]) : 0
    }, t.getGoldAddMaxCount = function () {
        var t = this.getVipData();
        if (!t) return 0;
        var e = this.getVipConfigByLevel(t.vipLevel);
        if (!e) return 0;
        var n = ConfigData.getVipRewardById(e.vipReward);
        if (!n) return 0;
        var a = n.onceRewardType.split(","), i = n.onceRewardValue.split(","), o = a.indexOf("4");
        return o >= 0 && i && o < i.length ? Number(i[o]) : 0
    }, t.getJewelAddMaxCount = function () {
        var t = this.getVipData();
        if (!t) return 0;
        var e = this.getVipConfigByLevel(t.vipLevel);
        if (!e) return 0;
        var n = ConfigData.getVipRewardById(e.vipReward);
        if (!n) return 0;
        var a = n.onceRewardType.split(","), i = n.onceRewardValue.split(","), o = a.indexOf("5");
        return o >= 0 && i && o < i.length ? Number(i[o]) : 0
    }, t
}();
__reflect(VipData.prototype, "VipData");
var GuideData = function () {
    function t() {
    }

    return t.currentOpt = function () {
        var t = CacheData.getRAMData("gameGuideOption");
        return t
    }, t.putCurrentOpt = function (t) {
        CacheData.saveRAMData("gameGuideOption", t)
    }, t.updateCurrentOpt = function () {
        var t = this.currentOpt();
        t++, t >= 5 && (t = 55), this.putCurrentOpt(t)
    }, t.putGuideTips = function (t) {
        CacheData.saveRAMData("guideTips", t)
    }, t.getGuideTips = function (t) {
        var e = CacheData.getRAMData("guideTips"), n = "";
        return e && e[t + ""] ? e[t + ""].tips : n
    }, t
}();
__reflect(GuideData.prototype, "GuideData");
var GuideManager = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }

    return __extends(e, t), e.prototype.show = function (t, e, n) {
        var a = this;
        void 0 === n && (n = null), this._currentObj && this._currentObj.hashCode == t.hashCode || (this._guidePanel || (this._guidePanel = new GuidePanel, LayerManager.getInstance().guideLayer.addChild(this._guidePanel)), this._currentObj = t, this._currentParent = e, this._currentPoint = new egret.Point(this._currentObj.x, this._currentObj.y), egret.setTimeout(function (t) {
            a._guidePanel.visible = !0;
            var e = a._currentParent.localToGlobal(a._currentObj.x, a._currentObj.y);
            a._currentObj.x = e.x, a._currentObj.y = e.y, n && a.updatePos(n, e), a.createShou(), a._xiaoshou.x = e.x + .5 * a._currentObj.width + a._xiaoshou.width / 2, a._xiaoshou.y = e.y + .4 * a._currentObj.height + a._xiaoshou.height / 2, a._guidePanel.addChildAt(a._currentObj, 1)
        }, this, 300))
    }, e.prototype.createTips = function () {
        if (!this._tipsLabel) {
            var t = new egret.Bitmap;
            t.texture = RES.getRes("wddx_bg_028"), t.width = .8 * this._guidePanel.width, t.height = 120, t.anchorOffsetX = t.width / 2, t.anchorOffsetY = 60, t.scale9Grid = new egret.Rectangle(20, 20, 1, 1), this._bitmap = t, this._tipsLabel = new egret.TextField, this._tipsLabel.width = .7 * t.width, this._tipsLabel.height = 120, this._tipsLabel.anchorOffsetX = this._tipsLabel.width / 2, this._tipsLabel.anchorOffsetY = 60, this._tipsLabel.size = 30, this._tipsLabel.textAlign = "center", this._tipsLabel.verticalAlign = "middle", this._tipsLabel.fontFamily = "Microsoft YaHei", this._tipsLabel.textColor = 16777215, this._tipsLabel.lineSpacing = 5, this._guidePanel && this._guidePanel.addChild(this._bitmap), this._guidePanel && this._guidePanel.addChild(this._tipsLabel)
        }
        return this._tipsLabel
    }, e.prototype.createShou = function () {
        if (!this._xiaoshou) {
            var t = new egret.Bitmap;
            t.texture = RES.getRes("wddx_ic_011"), t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2, this._xiaoshou = t, egret.Tween.get(this._xiaoshou, {loop: !0}).to({
                rotation: -15,
                scaleY: .8,
                scaleX: .9
            }, 500).to({rotation: 0, scaleY: 1, scaleX: 1}, 500).to({
                rotation: -15,
                scaleY: .8,
                scaleX: .9
            }, 500).to({
                rotation: 0,
                scaleY: 1,
                scaleX: 1
            }, 500).wait(1e3), this._guidePanel && this._guidePanel.addChild(this._xiaoshou)
        }
    }, e.prototype.updatePos = function (t, e) {
        var n = this.createTips();
        n.visible = !0;
        var a = 320,
            i = e.y > .7 * this._guidePanel.height ? e.y - n.height : e.y + .5 * n.height + this._currentObj.height + 80;
        n.x = a, n.y = i, this._bitmap.x = a, this._bitmap.y = i, this._bitmap.visible = !0, n.text = t
    }, e.prototype.hide = function () {
        this._guidePanel && this._guidePanel.parent && (this._guidePanel.visible = !1, this._currentParent.addChild(this._currentObj), this._currentObj.x = this._currentPoint.x, this._currentObj.y = this._currentPoint.y), this._tipsLabel && (this._tipsLabel.visible = !1), this._bitmap && (this._bitmap.visible = !1)
    }, e
}(BaseSingle);
__reflect(GuideManager.prototype, "GuideManager");
var GuidePanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.touchEnabled = !0, e.addEventListener(egret.Event.ADDED_TO_STAGE, e.createView, e), e
    }

    return __extends(e, t), e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this);
        var e = ConfigData.getKeyStr("www_50");
        this.closeBtn.label = "" + e, this.closeBtn && this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onClose, this)
    }, e.prototype.onClose = function () {
        console.log("关闭引导"), GuideData.putCurrentOpt(99), DataCenter.packData(), GuideManager.getInstance().hide()
    }, e.prototype.createView = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this), this.width = this.parent ? this.parent.width : 640, this.height = this.parent ? this.parent.height : 1136
    }, e
}(eui.Component);
__reflect(GuidePanel.prototype, "GuidePanel", ["eui.UIComponent", "egret.DisplayObject"]);
var BattleModel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.battleState = 2, e.lastClickTime = egret.getTimer().valueOf(), e.lastTime = 0, e.millisecond = 0, e.optionTime = 1e3, e.tickCount = 0, e.autoClickTime = egret.getTimer(), e.isMinute5State = !1, e.isAddSpeedTimeScale = !1, e.lastAction = 0, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this);
        var e = ConfigData.getKeyStr("www_55");
        this.www_55.text = "" + e, this.lastAction = egret.getTimer(), this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        var n = GuideData.currentOpt();
        if (5 > n) {
            this.guideObject.visible = !0;
            var a = this.guideObject.getChildAt(0);
            egret.Tween.get(a, {loop: !0}).to({rotation: -15, scaleY: .8, scaleX: .9}, 500).to({
                rotation: 0,
                scaleY: 1,
                scaleX: 1
            }, 500).to({rotation: -15, scaleY: .8, scaleX: .9}, 500).to({
                rotation: 0,
                scaleY: 1,
                scaleX: 1
            }, 500).wait(1e3)
        }
        PaoPaoPool.getInstance().init(this.paopaoContainer), this.initPlayers(), this.updateStone(), egret.setTimeout(function () {
            this.playerContainerY = this.playerContainer.y, this.stoneConstainerY = this.stoneConstainer.y, this.bgY = this.bg.y, this.sideY = this.side.y, this.start()
        }, this, 100), this.stage.maxTouches = 2
    }, e.prototype.initPlayers = function () {
        var t = PlayerData.getPlayers();
        for (var e in t) {
            var n = ConfigData.getPlayerById(e), a = this.playerContainer.getChildAt(n.position);
            "" == a.type && (e == PlayerConstant.HEAD_ID && (this.handPlayerModel = a), a.type = e, a.playWa())
        }
    }, e.prototype.updateStone = function () {
        var t = SenceData.getStoneTypes(), e = 3;
        for (var n in t) {
            var a = t[n], i = this.stoneConstainer.getChildAt(e);
            i.source = "wddx_tu_" + a + "_png", e--
        }
        this.refreshLieFeng()
    }, e.prototype.refreshLieFeng = function (t, e) {
        void 0 === t && (t = !1), void 0 === e && (e = !1);
        var n = this.stoneLiefengContainer.getChildAt(0), a = this.stoneLiefengContainer.getChildAt(1);
        n.visible = t, a.visible = e
    }, e.prototype.onClick = function (t) {
        if (this.battleState && !(this.paopaoContainer.numChildren > 22)) {
            HithitData.hitstopBybaoxiang2 = !1;
            var e = BattleConstant.getFinalDps(PlayerConstant.HEAD_ID), n = e[0], a = StringUtil.decimalFormat(n),
                i = e[1], o = PaoPaoPool.getInstance().push("+" + a, i);
            if (t) {
                var r = egret.getTimer().valueOf();
                this.handPlayerModel.playWa1(r - this.lastClickTime), this.lastClickTime = r, o.x = t.stageX, o.y = t.stageY, this.hithit && this.hithit.refreshHit()
            } else o.x = this.width / 2, o.y = .35 * this.height;
            MagicConstant.isTenTimeClick() && (o.text = "+" + a + " x10", n = n.mul(10)), this.dpsResult(n, "dj"), SoundManager.playSound("click_wa");
            var s = GuideData.currentOpt();
            if (1 == s) {
                var l = PlayerConstant.getUpLevelCost("0", 1, 0);
                1 == RoleData.getRole().gold.comparedTo(l) && (GuideData.updateCurrentOpt(), BasePanel.currentPanel.onPlayerBtn(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "guide", "guidestart", "")))
            }
            if (3 == s || 4 == s) {
                var h = PlayerData.getPlayerById("1"), u = PlayerConstant.getUpLevelCost("1", h ? h.level : 0, 0);
                1 == RoleData.getRole().gold.comparedTo(u) && BasePanel.currentPanel.onPlayerBtn()
            }
            5 == s && GuideData.putCurrentOpt(7), s > 5 && (this.guideObject.visible = !1)
        }
    }, e.prototype.onTick = function (t) {
        if (this.battleState) {
            var e = t - this.lastTime;
            this.millisecond += e;
            var n = Math.floor(this.optionTime * (1 - SkillConstant.hurtSpeed())), a = egret.getTimer().valueOf();
            return a - this.autoClickTime > 250 && MagicConstant.isAutoClick() && (this.handPlayerModel.playWa1(a - this.autoClickTime), this.onClick(null), this.autoClickTime = a), this.millisecond >= n && (this.millisecond = 0, this.autoDps()), this.lastTime = t, !1
        }
    }, e.prototype.start = function () {
        this.lastTime = egret.getTimer(), egret.startTick(this.onTick, this);
        var t = PlayerData.getOtherPlayers();
        for (var e in t) {
            var n = ConfigData.getPlayerById(e), a = this.playerContainer.getChildAt(n.position);
            a.type && a.playWa()
        }
    }, e.prototype.stop = function () {
        egret.stopTick(this.onTick, this);
        var t = PlayerData.getOtherPlayers();
        for (var e in t) {
            var n = ConfigData.getPlayerById(e), a = this.playerContainer.getChildAt(n.position);
            a.type && a.playHappy()
        }
    }, e.prototype.autoDps = function () {
        var t = PlayerData.getOtherPlayers(), e = 0;
        if (MagicConstant.doubleSpeed()) {
            if (e += 4, this.isAddSpeedTimeScale = !0, this.isAddSpeedTimeScale) for (var n in t) {
                var a = ConfigData.getPlayerById(n), i = this.playerContainer.getChildAt(a.position);
                n != PlayerConstant.HEAD_ID && "" != i.type && i.setTimeScale(3)
            }
        } else if (this.isAddSpeedTimeScale) {
            this.isAddSpeedTimeScale = !1;
            for (var n in t) {
                var a = ConfigData.getPlayerById(n), i = this.playerContainer.getChildAt(a.position);
                n != PlayerConstant.HEAD_ID && "" != i.type && i.setTimeScale(1)
            }
        }
        InviteData.isMinutes5() ? (this.isMinute5State || BasePanel.currentPanel.dpsUpdate(), this.isMinute5State = !0, e += InviteData.getInviteTaskfinishId().minutes5.times) : this.isMinute5State && (this.isMinute5State = !1, BasePanel.currentPanel.dpsUpdate());
        for (var n in t) {
            var o = new Decimal(0), r = BattleConstant.getFinalDps(n);
            o = o.plus(r[0]), e && (o = o.mul(e)), o && this.dpsResult(o, "kg", n)
        }
    }, e.prototype.dpsResult = function (t, e, n) {
        void 0 === n && (n = "0");
        var a = RoleData.getRole(), i = SkillConstant.addGoldGain(t, e);
        if (MagicConstant.doubleGain() && (i = i.mul(2)), "dj" == e) this.dispatchEventWith(GameEvent.ADD_GOLD_EVENT, !0, {gold: i}); else if ("kg" == e) {
            var o = ConfigData.getCollectGroupById(n);
            if (o) {
                var r = TreasureBoxData.getCollect(), s = o.sc;
                s && s.forEach(function (t) {
                    var e = ConfigData.getCollectById(t);
                    if (4 == e.buffType) {
                        var n = r && r[t] ? r[t] : 0;
                        n = Math.min(50, n), i = i.mul(1 + e.buffValue * n)
                    }
                })
            }
        }
        a.gold = a.gold.add(i);
        var l = BattleConstant.getCurrentBlood(), h = SenceData.getCurrentBlood(), u = h.dividedBy(l).toFixed();
        if (parseFloat(u) > .3 && parseFloat(u) <= .7 ? this.refreshLieFeng(!0, !1) : parseFloat(u) <= .3 && this.refreshLieFeng(!1, !0), 1 == h.comparedTo(t) ? (h = h.minus(t), SenceData.updateCurrentBlood(h)) : (h = new Decimal(0), SenceData.updateCurrentBlood(h)), this.dispatchEventWith(GameEvent.UPDATE_BLOOD_EVENT, !0, {value: t}), 0 == h.comparedTo(0)) {
            this.stop();
            var c = ConfigData.getSenceById(a.sence + ""), g = a.floor;
            g++, g > c.maxFloor ? a.sence < 10 ? (a.sence++, a.floor = 1) : a.floor = c.maxFloor : a.floor = g, RoleData.putRole(a), h = BattleConstant.getCurrentBlood(), SenceData.updateCurrentBlood(h), BattleConstant.updateStones(), this.earthAction(), this.battleState = 0, 1 == RoleData.getRole().floor && Alert.alert(new GoAnotherBall)
        } else RoleData.putRole(a)
    }, e.prototype.earthAction = function () {
        var t = this, e = egret.getTimer() - this.lastAction;
        this.lastAction += e;
        var n = MovieClipManager.getInstance().getMovieClicp("xiaoshi", "mc_eff");
        this.mcConstainer.addChild(n);
        var a = 450, i = 260, o = this.stoneConstainer.getChildAt(3), r = function (e) {
            n.removeEventListener(egret.MovieClipEvent.COMPLETE, r, t), n.parent && n.parent.removeChild(n)
        };
        n.addEventListener(egret.MovieClipEvent.COMPLETE, r, this), n.play(), o && e > 1500 ? egret.Tween.get(o).to({alpha: .3}, 100).call(function () {
            t.bg.y += 134, t.side.y += 218, t.stoneConstainer.y += 111, egret.Tween.get(t.playerContainer).to({y: t.playerContainerY + 111}, a).to({y: t.playerContainerY}, i), egret.Tween.get(t.bg).wait(a).to({y: t.bgY}, i), egret.Tween.get(t.side).wait(a).to({y: t.sideY}, i), egret.Tween.get(t.stoneConstainer).wait(a).to({y: t.stoneConstainerY}, i), t.dispatchEventWith(GameEvent.FLOOR_OVER_EVENT, !0), t.updateStone(), o.alpha = 1, t.battleState = 1
        }, this) : (i = 300, this.bg.y += 134, this.side.y += 218, this.stoneConstainer.y += 111, egret.Tween.get(this.bg).to({y: this.bgY}, i), egret.Tween.get(this.side).to({y: this.sideY}, i), egret.Tween.get(this.stoneConstainer).to({y: this.stoneConstainerY}, i), egret.setTimeout(function () {
            t.dispatchEventWith(GameEvent.FLOOR_OVER_EVENT, !0), t.updateStone(), t.battleState = 1
        }, this, 200))
    }, e.prototype.dispose = function () {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this), egret.stopTick(this.onTick, this), PaoPaoPool.getInstance().distroy()
    }, e
}(eui.Component);
__reflect(BattleModel.prototype, "BattleModel", ["eui.UIComponent", "egret.DisplayObject"]), window.BattleModel = BattleModel;
var BallVeiw = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this);
        var e = ConfigData.getKeyStr("www_38"), n = ConfigData.getKeyStr("www_39");
        this.depth.text = "" + e, this.progress.text = "" + n
    }, e.prototype.updateUI = function () {
        var t = RoleData.getRole(), e = ConfigData.getKeyStr("www_40");
        this.depth && (this.depth.text = e + ":" + t.floor), this.depth && egret.Tween.get(this.depth).to({
            scaleX: 1.5,
            scaleY: 2
        }, 200).to({scaleX: 1, scaleY: 1}, 100);
        var n = ConfigData.getSenceById(t.sence + ""), a = this.getChildAt(1);
        n.resName && (a.texture = RES.getRes(n.resName))
    }, e.prototype.dispose = function () {
    }, e
}(eui.Component);
__reflect(BallVeiw.prototype, "BallVeiw", ["eui.UIComponent", "egret.DisplayObject"]), window.BallVeiw = BallVeiw;
var BallViewItem = function (t) {
    function e(e) {
        var n = t.call(this) || this;
        return n._info = e, n
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.init()
    }, e.prototype.init = function () {
        this._info && (this._info.resName && (this.resName.texture = RES.getRes(this._info.resName)), this._info.name && (this.ballName.text = this._info.name))
    }, e.prototype.dispose = function () {
        this.parent && this.parent.removeChild(this)
    }, e
}(eui.Component);
__reflect(BallViewItem.prototype, "BallViewItem", ["eui.UIComponent", "egret.DisplayObject"]);
var BusinessmanPanel = function (t) {
    function e(e) {
        void 0 === e && (e = 1);
        var n = t.call(this) || this;
        return n.baseJewelCount = 10, n._type = e, n
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.www_158.text = ConfigData.getKeyStr("www_158") + ":", this.title2.text = ConfigData.getKeyStr("www_159") + "！", this.title1.text = "" + ConfigData.getKeyStr("www_160"), this.www_161.text = ConfigData.getKeyStr("www_161") + ": ", this.www_162.text = "" + ConfigData.getKeyStr("www_162"), this.refreshBtn.label = ConfigData.getKeyStr("www_163"), this.getBtn.label = ConfigData.getKeyStr("www_164"), this.www_165.text = ConfigData.getKeyStr("www_165") + "：", this.noTxt.text = ConfigData.getKeyStr("www_166"), this.init(), this.initJewel(), this.getBtn && this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onHuiShou, this), this.refreshBtn && this.refreshBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onRefreshBtn, this), this.closeBtn && this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "exposure", "exposure9", "")), AdConstant.showBannerAd(), this.showSDK()
    }, e.prototype.showSDK = function () {
        var t = e.AniAdKey, n = e.AniAdKey1, a = SelfSDKHelper.getInstance(), i = a.getAniAdListByKey(t);
        i && i.length ? (a.showAniAdList(t, this.aniAdCon0), a.showAniAdList(n, this.aniAdCon1)) : (a.createAniAD(t, 0, 0, 1, this.aniAdCon0), a.createAniAD(n, 0, 0, 1, this.aniAdCon1))
    }, e.prototype.novisible = function () {
        var t = ConfigData.getKeyStr("www_167"), e = ConfigData.getKeyStr("www_168"),
            n = ConfigData.getKeyStr("www_169"), a = BusinessmanData.timeArr, i = "";
        for (var o in a) i += a[o][0], i += t + "~", i += a[o][1], i += t + " ";
        this.noTxt && (this.noTxt.text = "" + e + i + ("" + n))
    }, e.prototype.refreshTimeText = function () {
        var t = BusinessmanData.currentTimeType, e = BusinessmanData.timeArr[t], n = new Date, a = n.getHours(),
            i = n.getMinutes(), o = n.getSeconds();
        if (e && a >= e[0] && a <= e[1]) {
            var r = 1e3 * (3600 * (e[1] - a) - 60 * i - o);
            if (r >= 0) {
                var s = DateTool.formatTime(r);
                this.timeText.text = s
            } else {
                this.noBusinessman && (this.novisible(), this.noBusinessman.visible = !0);
                var l = ConfigData.getKeyStr("www_170");
                ControllAlert.show(l + "！"), this.removeEventListener(egret.Event.ENTER_FRAME, this.refreshTimeText, this)
            }
        } else {
            this.noBusinessman && (this.novisible(), this.noBusinessman.visible = !0);
            var h = ConfigData.getKeyStr("www_171");
            ControllAlert.show(h + "！"), this.removeEventListener(egret.Event.ENTER_FRAME, this.refreshTimeText, this)
        }
    }, e.prototype.init = function () {
        var t = BusinessmanData.getSecretData();
        if (t.length > 0) for (var e = 1; 4 >= e; e++) {
            var n = this["scGroup" + e];
            if (e - 1 < t.length) {
                var a = t[e - 1], i = ConfigData.getCollectById(a);
                if (n && i) {
                    var o = n.getChildAt(0), r = n.getChildAt(1), s = n.getChildAt(2);
                    s.text = "", i.resName && (o.texture = RES.getRes(i.resName));
                    var l = i.groupid, h = i.scid, u = this.remainCount(l, h);
                    r.text = "(" + u + "/1)"
                }
                n.visible = !0
            } else n.visible = !1
        }
        var c = BusinessmanData.getSecretJl();
        if (Object.keys(c).length > 0) {
            var g = this.huishouJiangliGroup.getChildAt(0), p = this.huishouJiangliGroup.getChildAt(1);
            if (c.jlResName && (g.texture = RES.getRes(c.jlResName)), c.jlId) if ("1" == c.jlId) {
                var d = BattleConstant.getAutoDps(), f = StringUtil.decimalFormat(d.mul(c.jlCount)),
                    C = ConfigData.getKeyStr("www_172");
                p.text = f + ("" + C)
            } else {
                var C = ConfigData.getKeyStr("www_172");
                p.text = c.jlCount + ("" + C)
            }
        }
    }, e.prototype.remainCount = function (t, e) {
        var n = TreasureBoxData.getCollect(), a = n && n[e] ? n[e] : 0;
        return a
    }, e.prototype.initJewel = function () {
        var t = 1, e = AccountData.serverTime() + egret.getTimer(), n = DateTool.makeTime(e),
            a = RefreshJewelData.getCurRefreshCount();
        t = a && a.date == n ? a.count : 0, this.curXHjewelCount = this.baseJewelCount, this.xhzsCount && (this.xhzsCount.text = this.curXHjewelCount + "")
    }, e.prototype.onHuiShou = function (t) {
        var e = BusinessmanData.getSecretData();
        if (e.length > 0) {
            for (var n = TreasureBoxData.getCollect(), a = !0, i = 1; i <= e.length; i++) {
                var o = e[i - 1], r = ConfigData.getCollectById(o);
                if (r) {
                    var s = 1, l = n && n[o] ? n[o] : 0;
                    s > l && (a = !1)
                }
            }
            if (!a) {
                var h = ConfigData.getKeyStr("www_174");
                return void ControllAlert.show("" + h)
            }
            e.forEach(function (t) {
                BusinessmanData.lingquCollectById("", t, -1)
            }), BasePanel.currentPanel.collectBtn();
            var u = BusinessmanData.jiangliResult(), c = ConfigData.getKeyStr("www_173"),
                g = ConfigData.getKeyStr("www_172");
            ControllAlert.show("" + c + u + ("" + g)), this.init(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "getreward", "getreward4", ""))
        }
    }, e.prototype.onRefreshBtn = function (t) {
        var e = AccountData.serverTime() + egret.getTimer(), n = DateTool.makeTime(e),
            a = RefreshJewelData.getCurRefreshCount(), i = a && a.date == n ? a.count : 0;
        if (i >= BusinessmanConstant.getMaxCount()) {
            var o = ConfigData.getKeyStr("www_175");
            return void ControllAlert.show("" + o)
        }
        var r = RoleData.getRole();
        if (r.jewel < this.curXHjewelCount) {
            var s = ConfigData.getKeyStr("www_176");
            return ControllAlert.show(s + "！"), void Alert.alert(new PlusGoldPanel("jewel", !0))
        }
        r.jewel -= this.curXHjewelCount, RoleData.putRole(r), RefreshJewelData.updateRefreshCount(), BusinessmanData.getScType(), this.init(), this.initJewel(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "getreward", "getreward5", ""))
    }, e.prototype.onCloseBtn = function (t) {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        platform.hideBannerAd(), this.getBtn && this.getBtn.dispose(), this.closeBtn && this.closeBtn.dispose(), this.removeEventListener(egret.Event.ENTER_FRAME, this.refreshTimeText, this), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", e.AniAdKey), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", e.AniAdKey1)
    }, e.AniAdKey = "BusinessmanPanel", e.AniAdKey1 = "BusinessmanPanel_1", e
}(eui.Component);
__reflect(BusinessmanPanel.prototype, "BusinessmanPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var GoAnotherBall = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.isFill = !0, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this);
        var e = ConfigData.getKeyStr("www_51"), n = ConfigData.getKeyStr("www_52");
        this.title.text = "" + e, this.goBtn.label = "" + n, this.goBtn && this.goBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGoBtn, this), this.initUI()
    }, e.prototype.initUI = function () {
        var t = this;
        if (this.bg && egret.Tween.get(this.bg).to({alpha: 1}, 1e3), this.title && egret.Tween.get(this.title).to({alpha: 1}, 1500), this.ballImg) {
            var e = RoleData.getRole().sence + "", n = ConfigData.getSenceById(e);
            n && n.resName && (this.ballImg.texture = RES.getRes(n.resName)), this.ballImg.visible = !0, this.ballImg.scaleX = .1, this.ballImg.scaleY = .1, egret.Tween.get(this.ballImg).to({
                scaleX: 1,
                scaleY: 1
            }, 2500).call(function () {
                t.goBtn.visible = !0
            }, this, [])
        }
    }, e.prototype.onGoBtn = function (t) {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        this.goBtn && this.goBtn.dispose(), this.parent && this.parent.removeChild(this)
    }, e
}(BaseAlertPanel);
__reflect(GoAnotherBall.prototype, "GoAnotherBall");
var HandPlayerModel = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this)
    }, e.prototype.onFrame = function () {
        this.animate.animation.isPlaying || this.playWait()
    }, e.prototype.playWa = function () {
    }, e.prototype.playWa1 = function (t) {
        500 > t ? this.animate && (this.animate.animation.play("1", 1), this.animate.animation.timeScale = 4) : this.animate && (this.animate.animation.play("1", 1), this.animate.animation.timeScale = 2)
    }, e.prototype.playWait = function () {
        this.animate && this.animate.animation.play("3", 0)
    }, e
}(PlayerModel);
__reflect(HandPlayerModel.prototype, "HandPlayerModel"), window.HandPlayerModel = HandPlayerModel;
var AssetAdapter = function () {
    function t() {
    }

    return t.prototype.getAsset = function (t, e, n) {
        function a(a) {
            e.call(n, a, t)
        }

        if (RES.hasRes(t)) {
            var i = RES.getRes(t);
            i ? a(i) : RES.getResAsync(t, a, this)
        } else RES.getResByUrl(t, a, this, RES.ResourceItem.TYPE_IMAGE)
    }, t
}();
__reflect(AssetAdapter.prototype, "AssetAdapter", ["eui.IAssetAdapter"]);
var PlayerHead = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.www_53 = "PlayerHead_1", e.www_54 = "PlayerHead_2", e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.www_53 = ConfigData.getKeyStr("www_53"), this.www_54 = ConfigData.getKeyStr("www_54"), this.breakthrought.text = "1" + this.www_53 + "1" + this.www_54
    }, e.prototype.initUI = function () {
        var t = ConfigData.getPlayerById(this.playerid);
        this.playerImg.source = t.resName;
        var e = ["", "touxiang-lv", "touxiang-lan", "touxiang-zi", "touxiang-cheng", "touxiang-hong", "touxiang-1", "touxiang-2", "touxiang-3", "touxiang-4", "touxiang-5"],
            n = Math.floor(this.breakthrough / 6);
        this.playerImgbg && (this.playerImgbg.source = e[n]);
        for (var a = this.breakthrough % 6, i = 0; 5 > i; i++) {
            var o = this.starConstainer.getChildAt(i);
            o.visible = a > i
        }
        this.breakthrought.text = "" + (n + 1) + this.www_53 + a + this.www_54
    }, e
}(eui.Component);
__reflect(PlayerHead.prototype, "PlayerHead", ["eui.UIComponent", "egret.DisplayObject"]), window.PlayerHead = PlayerHead;
var WXPlatform = function () {
    function t() {
    }

    return t.prototype.setDebug = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.getSystemInfoSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2, {}]
            })
        })
    }, t.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2, null]
            })
        })
    }, t.prototype.getUserInfo = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2, null]
            })
        })
    }, t.prototype.createFeedbackButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2, null]
            })
        })
    }, t.prototype.hideFeedbackButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2, null]
            })
        })
    }, t.prototype.openSetting = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2, null]
            })
        })
    }, t.prototype.getSetting = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2, null]
            })
        })
    }, t.prototype.authorize = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2, null]
            })
        })
    }, t.prototype.getLocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2, null]
            })
        })
    }, t.prototype.openLocation = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.getLaunchOptionsSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2, {}]
            })
        })
    }, t.prototype.exitMiniProgram = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.onHide = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.offHide = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.onShow = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.offShow = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.toTempFilePathSync = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2, null]
            })
        })
    }, t.prototype.saveImageToPhotosAlbum = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.checkForUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.showModal = function (t, e, n, a, i) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.onShareAppMessage = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.offShareAppMessage = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.shareAppMessage = function (t, e, n, a, i, o) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.getShareInfo = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.updateShareMenu = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.getStorageSync = function (t) {
        return localStorage.getItem(t)
    }, t.prototype.setStorageSync = function (t, e) {
        localStorage.setItem(t, e)
    }, t.prototype.removeStorageSync = function (t) {
        localStorage.removeItem(t)
    }, t.prototype.playAudio = function (t, e, n) {
        return void 0 === n && (n = !1), __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.stopAudio = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.setAudioVolume = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.replayAudio = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.setInnerAudioOption = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.hasDirectory = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.getnativeFilePath = function () {
        return ""
    }, t.prototype.fileRemove = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.download = function (t, e, n, a) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.getOpenDataContext = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.setUserCloudStorage = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.openCustomerServiceConversation = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.showBannerAd = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.hideBannerAd = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.showRewardedVideoAd = function (t, e, n) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.previewImage = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.navigateToMiniProgram = function (t, e, n) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.request = function (t, e, n, a, i, o) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.connectSocket = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.closeSocket = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.onSocketOpen = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.onSocketClose = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.onSocketMessage = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.onSocketError = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.sendSocketMessage = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t.prototype.loadSubpackage = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, t
}();
__reflect(WXPlatform.prototype, "WXPlatform", ["Platform"]);
var AppPlatform = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }

    return __extends(e, t), e.prototype.showRewardedAd = function (t) {
        window.clickRewardVideo && window.clickRewardVideo(t), console.log("clickRewardVideo:" + window.clickRewardVideo)
    }, e.prototype.gameLoad = function (t) {
        window.gameLoad && window.gameLoad(t)
    }, e
}(WXPlatform);
__reflect(AppPlatform.prototype, "AppPlatform"), window.platform || (window.platform = new WXPlatform);
var PlayerUpLevelBtn = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.tips1.text = ConfigData.getKeyStr("www_179"), this.tips.text = "+99999999" + ConfigData.getKeyStr("www_181"), this.tips0.text = ConfigData.getKeyStr("www_180"), this.refreshUI()
    }, e.prototype.refreshUI = function () {
        var t = (ConfigData.getPlayerById(this.type), PlayerData.getPlayerById(this.type)), e = t ? t.level : 0,
            n = t ? t.breakthroughLevel : 0,
            a = (BattleConstant.getCurrentDpsById(this.type), BattleConstant.getNextLevelDpsById(this.type));
        if (this.tips0.visible = !1, this.tips.visible = this.tips1.visible = !0, this.tips) {
            var i = PlayerConstant.getUpLevelCost(this.type, e, n);
            if (100 == e) this.tips0.visible = !0, this.tips.visible = this.tips1.visible = !1, this.iconbg.source = "wddx_bt_007", this.iconbg.scale9Grid = new egret.Rectangle(20, 0, 0, 79), this.costbg.visible = !1, this.cost && (this.cost.text = "" + StringUtil.decimalFormat(i.mul(10))); else {
                var o = ConfigData.getKeyStr("www_60");
                this.tips.text = o + "+" + StringUtil.decimalFormat(a), this.iconbg.source = "wddx_bt_002", this.iconbg.scale9Grid = new egret.Rectangle(20, 0, 0, 115), this.tips.textColor = 4286479, this.costbg.visible = !0, this.cost && (this.cost.text = "" + StringUtil.decimalFormat(i))
            }
        }
    }, e
}(MyButton);
__reflect(PlayerUpLevelBtn.prototype, "PlayerUpLevelBtn"), window.PlayerUpLevelBtn = PlayerUpLevelBtn;
var ResourceBtn = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.type = "gold", e.currentFrame = 0, e
    }

    return __extends(e, t), e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this), this.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onClick, this)
    }, e.prototype.onFrame = function (t) {
        this.refreshDataByType()
    }, e.prototype.onClick = function () {
        if ("gold" == this.type) if (Object.keys(PlayerData.getOtherPlayers()).length >= 1) Alert.alert(new PlusGoldPanel("gold", !0)); else {
            var t = ConfigData.getKeyStr("www_185");
            ControllAlert.show("" + t)
        } else if ("jewel" == this.type) if (RoleData.getRole().floor >= 20 || RoleData.getRole().sence > 1) Alert.alert(new PlusGoldPanel("jewel", !0)); else {
            var e = ConfigData.getKeyStr("www_186");
            ControllAlert.show("" + e)
        }
    }, e.prototype.refreshDataByType = function () {
        "gold" == this.type ? this.label = StringUtil.decimalFormat(RoleData.getRole().gold) : "jewel" == this.type && (this.label = RoleData.getRole().jewel ? StringUtil.goldNumber2String(RoleData.getRole().jewel) : "0")
    }, e
}(MyButton);
__reflect(ResourceBtn.prototype, "ResourceBtn"), window.ResourceBtn = ResourceBtn;
var RoleHeadImage = function (t) {
    function e(e) {
        var n = t.call(this) || this;
        return n.role = null, n._isClick = !0, n.onClickCallBack = null, n.role = e, n.texture = RES.getRes("ddz_fxtx_17"), n.addEventListener(egret.TouchEvent.TOUCH_TAP, n.onClick, n), n.addEventListener(egret.Event.ADDED_TO_STAGE, n.onAddToStage, n), n.addEventListener(egret.Event.REMOVED_FROM_STAGE, n.onRmove, n), n
    }

    return __extends(e, t), e.prototype.onAddToStage = function (t) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this), this.refresh()
    }, e.prototype.onRmove = function (t) {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this), this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRmove, this)
    }, e.prototype.refresh = function (t) {
        var e = this;
        void 0 === t && (t = null), t && (this.role = t), this.role && null != this.role.head && RES.getResByUrl(this.role.head, function (t) {
            t && (e.texture = t)
        }, this, "image")
    }, e.prototype.onClick = function (t) {
        Logger.log("显示个人信息"), this.onClickCallBack && this.onClickCallBack()
    }, Object.defineProperty(e.prototype, "isClick", {
        get: function () {
            return this.isClick
        }, set: function (t) {
            this._isClick = t, t ? this.hasEventListener(egret.TouchEvent.TOUCH_TAP) || this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this) : this.hasEventListener(egret.TouchEvent.TOUCH_TAP) && this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this)
        }, enumerable: !0, configurable: !0
    }), e
}(eui.Image);
__reflect(RoleHeadImage.prototype, "RoleHeadImage");
var SevenSignButton = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.redpoint && (this.redPointContrl || (this.redPointContrl = new core.BaseRedPoint(this.redpoint)), this.redPointContrl.check = function () {
            var t = SevenDaySignData.getSignData(), e = t ? t.timestamp : 0, n = t ? t.count : 0;
            if (n >= 7) return !1;
            var a = AccountData.serverTime() + egret.getTimer().valueOf();
            return DateTool.makeTime(e) != DateTool.makeTime(a) ? !0 : !1
        })
    }, e.prototype.dispose = function () {
        this.redPointContrl && this.redPointContrl.dispose(), t.prototype.dispose.call(this)
    }, e
}(MyButton);
__reflect(SevenSignButton.prototype, "SevenSignButton"), window.SevenSignButton = SevenSignButton;
var SoundLuckBtn = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onTouch, this), this.initUI()
    }, e.prototype.initUI = function () {
        var t = SoundData.getSoundValue();
        (void 0 == t || null == t || t + "" == "") && (t = 1, SoundData.putSoundValue(t)), this.unluck.visible = 0 == t, platform.setAudioVolume(t)
    }, e.prototype.onTouch = function () {
        var t = SoundData.getSoundValue();
        t = 1 == t ? 0 : 1, SoundData.putSoundValue(t), this.initUI()
    }, e
}(MyButton);
__reflect(SoundLuckBtn.prototype, "SoundLuckBtn"), window.SoundLuckBtn = SoundLuckBtn;
var TapAnimate = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.animateName = "", e.addEventListener(egret.Event.ADDED_TO_STAGE, e.addToStage, e), e.addEventListener(egret.Event.REMOVED_FROM_STAGE, e.removeFromStage, e), e
    }

    return __extends(e, t), e.prototype.addToStage = function (t) {
        if (this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this), this.animateName && "" != this.animateName) {
            var e = DragonBoneManager.getInstance().createAnimate("1");
            e && (this.addChild(e), this.animate = e)
        }
    }, e.prototype.removeFromStage = function (t) {
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.removeFromStage, this), this.animate && (this.animate.dispose(!0), this.animate = null), this.animateName = ""
    }, e.prototype.addAnimateEventListeners = function () {
        this.animate.addDBEventListener(dragonBones.EgretEvent.COMPLETE, this.onPlayComplete, this)
    }, e.prototype.onPlayComplete = function (t) {
        this.animate.animation.stop(), this.animate.animation.gotoAndPlay("2", 0)
    }, e.prototype.tapBegin = function () {
    }, e.prototype.tapEnd = function () {
    }, e
}(egret.DisplayObjectContainer);
__reflect(TapAnimate.prototype, "TapAnimate");
var TipsItem = function (t) {
    function e(e) {
        var n = t.call(this) || this;
        return n.tipsText = ObjectUtil.isFalse(e) ? "" : e, n.once(egret.Event.ADDED_TO_STAGE, function () {
            n.width = n.parent.width
        }, n), n
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.tipsLabel.text = this.tipsText;
        var e = RES.getRes("area_map_json"), n = platform.getStorageSync("curAreaCache"), a = e[n] ? e[n] : -1,
            i = new egret.TextField;
        i.size = 20, i.textColor = this.tipsLabel.textColor, i.text = a + "", this.addChild(i)
    }, e.prototype.refresh = function (t) {
        this.tipsText = ObjectUtil.isFalse(t) ? "" : t, this.tipsLabel.text = this.tipsText, this.height = this.tipsLabel.textHeight + 10
    }, e
}(eui.Component);
__reflect(TipsItem.prototype, "TipsItem", ["eui.UIComponent", "egret.DisplayObject"]);
var TipsPanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.displayPool = [], e.tipsPool = [], e.tipsTimePool = [], e.tipsColorPool = [], e
    }

    return __extends(e, t), Object.defineProperty(e, "instance", {
        get: function () {
            return this._instance || (this._instance = new e), this._instance
        }, enumerable: !0, configurable: !0
    }), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.width = LayerManager.getInstance().tipsLayer.width, this.height = LayerManager.getInstance().tipsLayer.height
    }, e.prototype.destory = function (t) {
        t.parent && (t.parent.removeChild(t), t.tween = null, this.displayPool.push(t))
    }, e.prototype.updatePos = function () {
        for (var t = 74, e = this.numChildren, n = (this.height - e * t) / 2, a = 0; e > a; a++) {
            var i = this.getChildAt(a);
            i.x = this.width / 2, i.y = n + a * t
        }
    }, e.prototype.init = function () {
        LayerManager.getInstance().tipsLayer.addChild(this)
    }, e.prototype.show = function (t, e, n) {
        this.tipsPool.push(t), this.tipsTimePool.push(e), this.tipsColorPool.push(n), this.showItem()
    }, e.prototype.showItem = function () {
        var t;
        if (this.displayPool.length > 0 ? (t = this.displayPool.shift(), t.refresh(this.tipsPool.shift())) : (t = new TipsItem(this.tipsPool.shift()), t.width = this.width, t.anchorOffsetX = t.width / 2), t.alpha = 1, t.x = this.width / 2, t.y = this.height / 2, this.addChild(t), !t.tween) {
            var e = this.tipsTimePool.shift(), n = this.tipsColorPool.shift();
            t.tipsLabel.textColor = n, t.alpha = 0, t.tween = egret.Tween.get(t).wait(50).to({
                scaleX: 1.5,
                scaleY: 1.5,
                alpha: 1
            }, 200).to({scaleX: 1, scaleY: 1}, 200).wait(e).to({y: t.y - 200}, 1e3).to({
                y: t.y - 300,
                alpha: 0
            }, 500).call(this.destory, this, [t])
        }
    }, e
}(eui.Component);
__reflect(TipsPanel.prototype, "TipsPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var ToggleBtn = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.selectColor = 0, e.unselectColor = 16777215, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this)
    }, e.prototype.setStatus = function (t) {
        void 0 === t && (t = !1), this.selectDisplay && (this.selectDisplay.alpha = t ? 1 : 0), this.labelDisplay && void 0 != this.selectColor && void 0 != this.unselectColor && (this.labelDisplay.textColor = t ? this.selectColor : this.unselectColor)
    }, e
}(MyButton);
__reflect(ToggleBtn.prototype, "ToggleBtn"), window.ToggleBtn = ToggleBtn;
var TreasureBox = function (t) {
    function e(e) {
        var n = t.call(this) || this;
        return n.max = 30, n.clickLimitCount = ConfigData.initClickCount(), n._scType = e, n.isBackClose = !1, n
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.timeText.text = ConfigData.getKeyStr("www_194"), this.tishi.text = ConfigData.getKeyStr("www_195") + ".", this.giveupBtn.label = ConfigData.getKeyStr("www_196"), this.clickCount && this.clickCount.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCount, this), this.updateDisplay(), this.giveupBtn && this.giveupBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGiveBtn, this), AdConstant.showBannerAd()
    }, e.prototype.updateDisplay = function () {
        var t = this, e = this;
        egret.Tween.get(this.runBg, {loop: !0}).to({rotation: 0}, 1e3).call(function () {
            var n = ConfigData.getKeyStr("www_197");
            if (t.timeText.text = t.max + (n + " "), 0 == t.max && t.onClose(), e.processSlider) {
                var a = 0, i = 30;
                e.processSlider.minimum = a, e.processSlider.maximum = i, e.processSlider.value = t.max, t.max--
            }
        }), this.tishi && egret.Tween.get(this.tishi, {loop: !0}).wait(500).to({textColor: 16711935}, 1e3)
    }, e.prototype.onClickCount = function () {
        SoundManager.playSound("click");
        var t = 1.3;
        if (this.clickLimitCount[this._scType + ""]--, egret.Tween.get(this.iconName).to({
            scaleX: t,
            y: this.iconName.y - 15
        }, 300, egret.Ease.backInOut).to({
            scaleX: 1,
            y: this.iconName.y
        }, 200, egret.Ease.backInOut), 0 == this.clickLimitCount[this._scType + ""]) {
            if (t = 1.5, this.iconName.texture = RES.getRes("wddx_bao_001"), this.clickCount.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCount, this), 3 == this._scType) var e = TreasureBoxData.getscIdConfig();
            this.onClose();
            var n = ConfigData.getKeyStr("www_198");
            e ? Alert.alert(new TreasureBoxResult(this._scType, e)) : ControllAlert.show("" + n)
        }
    }, e.prototype.onGiveBtn = function () {
        this.onClose()
    }, e.prototype.onClose = function () {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        platform.hideBannerAd(), this.giveupBtn && this.giveupBtn.dispose(), this.clickCount && this.clickCount.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCount, this), this.parent && this.parent.removeChild(this)
    }, e
}(BaseAlertPanel);
__reflect(TreasureBox.prototype, "TreasureBox");
var TreasureBoxResult = function (t) {
    function e(e, n) {
        var a = t.call(this) || this;
        return a.getscname = "", a.__scType = e, a.info = n, a.isBackClose = !1, a
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        var e = this;
        t.prototype.childrenCreated.call(this), this.www_199.text = ConfigData.getKeyStr("www_199"), this.shoucangpinTxt.text = ConfigData.getKeyStr("www_200"), this.getBtn.label = ConfigData.getKeyStr("www_201"), this.doubleGetBtn.label = ConfigData.getKeyStr("www_202"), this.closeBtn && this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this), this.getBtn && (this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGetBtn, this), this.getBtn.visible = !1, egret.setTimeout(function () {
            e.getBtn.visible = !0
        }, this, 2e3)), this.doubleGetBtn && (this.doubleGetBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onDoubleGetBtn, this), "ad" == AppConfig.baoxiang_jinbi || "ad" == ShareConstant.getCurrentActionType()), this.guangxiao && egret.Tween.get(this.guangxiao, {loop: !0}).to({rotation: 360}, 3e3), 1 == this.__scType ? this.initUI1() : 2 == this.__scType ? this.initUI2() : 3 == this.__scType && this.initUI3(), AdConstant.showBannerAd(), this.showSDK()
    }, e.prototype.showSDK = function () {
        var t = e.AniAdKey, n = SelfSDKHelper.getInstance();
        n.getAniAdListByKey(t);
        n.createFavList(60, 0, .8, 4, 1, this.tryCon)
    }, e.prototype.initUI1 = function () {
        var t = this.info;
        if (this.jewelCount = t.count, this.scName && (this.scName.texture = RES.getRes("wddx_bao_001_baoshi_png")), t) {
            var e = ConfigData.getKeyStr("www_203"), n = ConfigData.getKeyStr("www_204");
            this.getCount && (this.getCount.text = "" + e + ("" + n) + "   " + t.count + "个")
        }
    }, e.prototype.initUI2 = function () {
        var t = this.info;
        if (this.lixianSeconds = t.time, this.lixianBeishu = t.beishu, this.scName && (this.scName.texture = RES.getRes("wddx_bao_001_jinbi_png")), t) {
            var e = BattleConstant.getAutoDps();
            this.addgold = StringUtil.decimalFormat(e.mul(t.time * t.beishu));
            var n = ConfigData.getKeyStr("www_205"), a = ConfigData.getKeyStr("www_207");
            this.getCount && (this.getCount.text = "" + n + "   " + this.addgold + ("" + a))
        }
    }, e.prototype.initUI3 = function () {
        this.shoucangpinTxt.visible = !0;
        var t = this.info;
        this.scId = t.scid, this.scCount = 1;
        var e = t && t ? t.resName : "";
        e && (this.scName.texture = RES.getRes(e)), this.getscname = t && t.name ? t.name : "";
        var n = ConfigData.getKeyStr("www_206"), a = ConfigData.getKeyStr("www_207"),
            i = ConfigData.getKeyStr("www_208");
        this.getscname && (this.getCount.text = "" + n + this.getscname + "   " + this.scCount + ("" + a)), this.doubleGetBtn && (this.doubleGetBtn.label = "" + i)
    }, e.prototype.onGetBtn = function (t) {
        1 == this.__scType ? SoundManager.playSound("gold") : 2 == this.__scType ? SoundManager.playSound("gold") : 3 == this.__scType && SoundManager.playSound("gold"), 1 == this.__scType ? TreasureBoxData.lingquJewel(this.jewelCount) : 2 == this.__scType ? TreasureBoxData.lingquJinbi(this.lixianSeconds * this.lixianBeishu) : 3 == this.__scType && TreasureBoxData.updateCollect(this.scId, this.scCount), 3 == this.__scType ? (DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "getreward", "getreward1", "")), BasePanel.currentPanel instanceof GamePanel && BasePanel.currentPanel.collectListView && BasePanel.currentPanel.collectListView.refreshUI()) : DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "getreward", "getreward2", ""));
        var e = ConfigData.getKeyStr("www_207"), n = ConfigData.getKeyStr("www_209"),
            a = ConfigData.getKeyStr("www_210"), i = ConfigData.getKeyStr("www_211"),
            o = ConfigData.getKeyStr("www_212"), r = ConfigData.getKeyStr("www_213");
        1 == this.__scType ? ControllAlert.show("" + n + this.jewelCount + ("" + a)) : 2 == this.__scType ? ControllAlert.show("" + i + this.addgold + ("" + o)) : 3 == this.__scType && ControllAlert.show("" + r + this.scCount + ("" + e) + this.getscname), this.onCloseBtn()
    }, e.prototype.onDoubleGetBtn = function (t) {
        var e = this;
        1 == this.__scType ? SoundManager.playSound("gold") : 2 == this.__scType ? SoundManager.playSound("gold") : 3 == this.__scType && SoundManager.playSound("gold"), 1 == this.__scType || 2 == this.__scType ? "share" == AppConfig.baoxiang_jinbi ? ShareConstant.shareToGroup(function (t) {
            if (t) {
                1 == e.__scType ? TreasureBoxData.lingquJewel(10 * e.jewelCount) : TreasureBoxData.lingquJinbi(e.lixianSeconds * e.lixianBeishu * 10);
                var n = ConfigData.getKeyStr("www_214");
                ControllAlert.show("" + n), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "share", "share2_suc", "")), e.onCloseBtn()
            } else {
                var a = ConfigData.getKeyStr("www_215");
                ControllAlert.show("" + a)
            }
        }, this) : AdConstant.lookRewardAd(function (t) {
            if (t) {
                1 == e.__scType ? TreasureBoxData.lingquJewel(10 * e.jewelCount) : TreasureBoxData.lingquJinbi(e.lixianSeconds * e.lixianBeishu * 10);
                var n = ConfigData.getKeyStr("www_216");
                ControllAlert.show("" + n), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "ad", "ad2_suc", "")), e.onCloseBtn()
            } else {
                var a = ConfigData.getKeyStr("www_217");
                ControllAlert.show("" + a)
            }
        }, this) : "share" == AppConfig.baoxiang_changpin ? ShareConstant.shareToGroup(function (t) {
            if (t) {
                3 == e.__scType && TreasureBoxData.updateCollect(e.scId, 2 * e.scCount);
                var n = ConfigData.getKeyStr("www_218");
                ControllAlert.show("" + n), BasePanel.currentPanel instanceof GamePanel && BasePanel.currentPanel.collectListView && BasePanel.currentPanel.collectListView.refreshUI(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "share", "share1_suc", "")), e.onCloseBtn()
            } else {
                var a = ConfigData.getKeyStr("www_219");
                ControllAlert.show("" + a)
            }
        }, this) : AdConstant.lookRewardAd(function (t) {
            if (t) {
                3 == e.__scType && TreasureBoxData.updateCollect(e.scId, 2 * e.scCount);
                var n = ConfigData.getKeyStr("www_220");
                ControllAlert.show("" + n), BasePanel.currentPanel instanceof GamePanel && BasePanel.currentPanel.collectListView && BasePanel.currentPanel.collectListView.refreshUI(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "ad", "ad1_suc", "")), e.onCloseBtn()
            } else {
                var a = ConfigData.getKeyStr("www_221");
                ControllAlert.show("" + a)
            }
        }, this)
    }, e.prototype.onCloseBtn = function () {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        platform.hideBannerAd(), this.closeBtn && this.closeBtn.dispose(), this.getBtn && this.getBtn.dispose(), this.doubleGetBtn && this.doubleGetBtn.dispose(), this.parent && this.parent.removeChild(this), SelfSDKHelper.getInstance().hideSkdDisplay("favList")
    }, e.AniAdKey = "TreasureBoxResult", e
}(BaseAlertPanel);
__reflect(TreasureBoxResult.prototype, "TreasureBoxResult");
var OreItem = function (t) {
    function e(e) {
        var n = t.call(this) || this;
        return n._oreid = e, n
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.ksName.text = "x" + ConfigData.getKeyStr("www_274"), this.unlockFloor.text = "xxX" + ConfigData.getKeyStr("www_275"), this.www_276.text = "" + ConfigData.getKeyStr("www_276"), this.init()
    }, e.prototype.init = function () {
        var t = ConfigData.getOreById(this._oreid);
        if (t) {
            var e = t.resName, n = t.name, a = t.unlockFloor, i = t.groupid, o = ConfigData.getOreGroupById(i + ""),
                r = o && o.name ? o.name : "";
            this.ksIcon.texture = RES.getRes(e), this.ksName.text = n, this.unlockFloor.text = "" + r + a
        }
        this.ksName.visible = !1
    }, e.prototype.unlockUI = function () {
        this.lock.visible = !1, this.ksName.visible = !0, this.ksCount.text = "0"
    }, e.prototype.refreshUI = function (t) {
        this.ksCount.text = t + ""
    }, e.prototype.dispose = function () {
        this.parent && this.parent.removeChild(this)
    }, e
}(eui.Component);
__reflect(OreItem.prototype, "OreItem", ["eui.UIComponent", "egret.DisplayObject"]);
var OrePanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.baseJewelCount = 10, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.www_277.text = ConfigData.getKeyStr("www_277") + ":", this.title2.text = ConfigData.getKeyStr("www_278") + "？\n			" + ConfigData.getKeyStr("www_279") + "！", this.title1.text = "" + ConfigData.getKeyStr("www_280"), this.remainRefreshCount.text = "" + ConfigData.getKeyStr("www_281"), this.refreshBtn.label = "" + ConfigData.getKeyStr("www_282"), this.getBtn.label = "" + ConfigData.getKeyStr("www_283"), this.initOre(), this.initJewel(), this.initUnlock(), this.getBtn && this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onHuiShou, this), this.refreshBtn && this.refreshBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onRefreshBtn, this), this.closeBtn && this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "exposure", "exposure11", "")), AdConstant.showBannerAd(), this.showSDK()
    }, e.prototype.showSDK = function () {
        var t = e.AniAdKey, n = SelfSDKHelper.getInstance(), a = n.getAniAdListByKey(t);
        a && a.length ? n.showAniAdList(t, this.aniAdCon) : n.createAniAD(t, 0, 0, 1, this.aniAdCon)
    }, e.prototype.initUnlock = function () {
        var t = ConfigData.getOre(), e = KuangshiData.getUnlockOre(), n = KuangshiData.getUnlockOresArr();
        if (this.oresGroup) for (var a in t) {
            var i = this.oresGroup.getChildByName(a);
            if (i || (i = new OreItem(a), this.oresGroup.addChild(i), i.name = a), n && -1 != n.indexOf(a) && i.unlockUI(), e) for (var o in e) if (a == o) {
                var r = ConfigData.getKeyStr("www_284"), s = ConfigData.getKeyStr("www_285");
                Logger.log(r + "，" + s + e[o]), i.refreshUI(e[o])
            }
        }
    }, e.prototype.initOre = function () {
        var t = KuangshiData.getOreData();
        if (t.length > 0) for (var e = 1; 4 >= e; e++) {
            var n = this["scGroup" + e];
            if (e - 1 < t.length) {
                var a = t[e - 1], i = ConfigData.getOreById(a);
                if (n && i) {
                    var o = n.getChildAt(0), r = n.getChildAt(1), s = n.getChildAt(2);
                    s.text = i.name, i.resName && (o.texture = RES.getRes(i.resName));
                    var l = i.groupid, h = i.oreid, u = this.remainOreCount(l, h), c = 1,
                        g = KuangshiData.getOreHsCount();
                    g && g[h] && (c = g[h]), r.text = "(" + u + "/" + c + ")"
                }
                n.visible = !0
            } else n.visible = !1
        }
        var p = KuangshiData.getOreJl();
        if (Object.keys(p).length > 0) {
            var d = this.huishouJiangliGroup.getChildAt(0), f = this.huishouJiangliGroup.getChildAt(1);
            if (p.jlResName && (d.texture = RES.getRes(p.jlResName)), p.jlId) if ("1" == p.jlId) {
                var C = BattleConstant.getAutoDps(), y = StringUtil.decimalFormat(C.mul(p.jlCount)),
                    v = ConfigData.getKeyStr("www_286");
                f.text = y + ("" + v)
            } else {
                var v = ConfigData.getKeyStr("www_286");
                f.text = p.jlCount + ("" + v)
            }
        }
    }, e.prototype.remainOreCount = function (t, e) {
        var n = KuangshiData.getUnlockOre(), a = n && n[e] ? n[e] : 0;
        return a
    }, e.prototype.initJewel = function () {
        var t = AccountData.serverTime() + egret.getTimer(), e = DateTool.makeTime(t),
            n = OreRefreshJewelData.getCurRefreshCount(), a = n && n.date == e ? n.count : 0,
            i = BusinessmanConstant.getOreMaxCount() - a;
        0 >= i && (i = 0);
        var o = ConfigData.getKeyStr("www_287"), r = ConfigData.getKeyStr("www_288");
        this.remainRefreshCount.text = o + ":" + i + r, this.curXHjewelCount = this.baseJewelCount, this.xhzsCount && (this.xhzsCount.text = this.curXHjewelCount + "")
    }, e.prototype.onHuiShou = function (t) {
        var e = KuangshiData.getOreData(), n = KuangshiData.getOreHsCount();
        if (e.length > 0) {
            for (var a = KuangshiData.getUnlockOre(), i = !0, o = 1; o <= e.length; o++) {
                var r = e[o - 1], s = ConfigData.getOreById(r);
                if (s) {
                    var l = n && n[r] ? n[r] : 1, h = a && a[r] ? a[r] : 0;
                    l > h && (i = !1)
                }
            }
            if (!i) {
                var u = ConfigData.getKeyStr("www_290");
                return void ControllAlert.show("" + u)
            }
            e.forEach(function (t) {
                var e = n && n[t] ? n[t] : 1;
                KuangshiData.updateUnlockOre(t, -e)
            }), this.initUnlock();
            var c = KuangshiData.oreJiangliResult(), g = ConfigData.getKeyStr("www_289"),
                p = ConfigData.getKeyStr("www_286");
            ControllAlert.show("" + g + c + ("" + p)), this.initOre(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "getreward", "getreward18", ""))
        }
    }, e.prototype.onRefreshBtn = function (t) {
        var e = ConfigData.getKeyStr("www_291"), n = ConfigData.getKeyStr("www_292"),
            a = AccountData.serverTime() + egret.getTimer(), i = DateTool.makeTime(a),
            o = OreRefreshJewelData.getCurRefreshCount(), r = o && o.date == i ? o.count : 0;
        if (r >= BusinessmanConstant.getOreMaxCount()) return void ControllAlert.show("" + e);
        var s = RoleData.getRole();
        return s.jewel < this.curXHjewelCount ? (ControllAlert.show(n + "！"), void Alert.alert(new PlusGoldPanel("jewel", !0))) : (s.jewel -= this.curXHjewelCount, RoleData.putRole(s), OreRefreshJewelData.updateRefreshCount(), KuangshiData.getOreType(), this.initOre(), this.initJewel(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "getreward", "getreward19", "")), void 0)
    }, e.prototype.onCloseBtn = function (t) {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        platform.hideBannerAd(), this.getBtn && this.getBtn.dispose(), this.closeBtn && this.closeBtn.dispose(), this.oresGroup && this.oresGroup.removeChildren(), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", e.AniAdKey)
    }, e.AniAdKey = "OrePanel", e
}(eui.Component);
__reflect(OrePanel.prototype, "OrePanel", ["eui.UIComponent", "egret.DisplayObject"]);
var PaoPaoPool = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e._textFieldPool = [], e.tickCount = 0, e
    }

    return __extends(e, t), e.prototype.init = function (t) {
        this._parent = t, egret.startTick(this.onTick, this)
    }, e.prototype.onTick = function (t) {
        return this.tickCount++, this.tickCount % 2 == 0 && (this._parent && this._parent.$children.forEach(function (t) {
            t instanceof PaoPaoTextField && t.onMove(null)
        }), this.tickCount = 0), !1
    }, e.prototype.push = function (t, e) {
        var n = null;
        return this._textFieldPool.length > 0 ? n = this._textFieldPool.shift() : (n = new PaoPaoTextField, n.removeCallback = this.onPaoPaoRemove, n.thisObj = this), n.textColor = e ? 16711680 : 16777215, n.strokeColor = e ? 3932184 : 1992877, n.text = t, this._parent && this._parent.addChild(n), n
    }, e.prototype.onPaoPaoRemove = function (t) {
        this._textFieldPool.push(t), this._parent && this._parent.removeChild(t)
    }, e.prototype.distroy = function () {
        egret.stopTick(this.onTick, this), this._parent && this._parent.removeChildren(), this._textFieldPool = []
    }, e
}(BaseSingle);
__reflect(PaoPaoPool.prototype, "PaoPaoPool");
var PaoPaoTextField = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.g = 1.5, e.speedX = 0, e.speedY = 0, e.width = 300, e.anchorOffsetX = 150, e.verticalAlign = egret.VerticalAlign.MIDDLE, e.textAlign = egret.HorizontalAlign.CENTER, e.bold = !0, e.size = 22, e.stroke = 2, e.cacheAsBitmap = !0, e.speedX = RandomUitl.randomFloat(-6, 6), e.speedY = RandomUitl.randomFloat(-25, -35), e
    }

    return __extends(e, t), e.prototype.remove = function () {
        return this.speedX = RandomUitl.randomFloat(-6, 6), this.speedY = RandomUitl.randomFloat(-25, -35), this.g = 1.5, this.alpha = 1, this.removeCallback && this.removeCallback.apply(this.thisObj, [this]), this.parent && this.parent.removeChild(this), this
    }, e.prototype.onMove = function (t) {
        this.x += this.speedX, this.y += this.speedY, this.alpha >= .35 && this.speedY > 10 && (this.alpha -= .05), this.speedY < 21 ? (this.speedY += this.g, this.g += .5) : this.speedY += 1, (this.y > this.parent.height || this.alpha < .35) && this.remove()
    }, e.prototype.dispose = function () {
        this.parent && this.parent.removeChild(this)
    }, e
}(egret.TextField);
__reflect(PaoPaoTextField.prototype, "PaoPaoTextField");
var AlertBgModel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.titleText = "标题", e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.titleTips && (this.titleTips.text = this.titleText ? this.titleText : ""), this.closeBtn && this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.dispose, this)
    }, e.prototype.dispose = function () {
        Alert.closeAlert(null, 0)
    }, e
}(eui.Component);
__reflect(AlertBgModel.prototype, "AlertBgModel", ["eui.UIComponent", "egret.DisplayObject"]), window.AlertBgModel = AlertBgModel;
var ToggleBtnGroup = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.childBtnArr = [], e.callbackThisObj = e, e.baseState = !1, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.playerBtn0.label = ConfigData.getKeyStr("www_187"), this.magicBtn0.label = ConfigData.getKeyStr("www_188"), this.skillBtn0.label = ConfigData.getKeyStr("www_189"), this.collectBtn0.label = ConfigData.getKeyStr("www_190"), this.btnGroup.numChildren && this.init()
    }, e.prototype.init = function () {
        for (var t = 0; t < this.btnGroup.numChildren; t++) {
            var e = this.btnGroup.getChildAt(t);
            e instanceof ToggleBtn && (this.childBtnArr.push(e), e.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onSelectBtn(this.childBtnArr.length), this))
        }
        this.setSelect(0)
    }, e.prototype.onSelectBtn = function (t) {
        var e = this;
        return function (n) {
            if (t) {
                var a = t - 1;
                e.callback && e.callback.apply(e.callbackThisObj, [a])
            }
        }
    }, e.prototype.setSelect = function (t) {
        this.baseState = !0;
        for (var e in this.childBtnArr) {
            var n = this.childBtnArr[e];
            e == t.toString() ? n.setStatus(this.baseState) : n.setStatus(!this.baseState)
        }
    }, e.prototype.guideMagicClick = function () {
        var t = GuideData.currentOpt(), e = RoleData.getRole();
        if (7 == t && e.floor >= 5) {
            var n = ConfigData.getKeyStr("www_191");
            GuideManager.getInstance().show(this.childBtnArr[1], this.childBtnArr[1].parent, "" + n)
        }
    }, e.prototype.guideSkillClick = function () {
        var t = GuideData.currentOpt(), e = RoleData.getRole();
        if (9 == t && e.floor >= 20) {
            var n = ConfigData.getKeyStr("www_192");
            GuideManager.getInstance().show(this.childBtnArr[2], this.childBtnArr[2].parent, "" + n)
        }
    }, e.prototype.guideCollectClick = function () {
        var t = GuideData.currentOpt(), e = RoleData.getRole();
        if (10 == t && e.floor >= 30) {
            var n = ConfigData.getKeyStr("www_193");
            GuideManager.getInstance().show(this.childBtnArr[3], this.childBtnArr[3].parent, "" + n)
        }
    }, e.prototype.dispose = function () {
        for (var t in this.childBtnArr) this.childBtnArr[t] && this.childBtnArr[t].dispose()
    }, e
}(eui.Component);
__reflect(ToggleBtnGroup.prototype, "ToggleBtnGroup", ["eui.UIComponent", "egret.DisplayObject"]), window.ToggleBtnGroup = ToggleBtnGroup;
var JumpGamesPanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.clickstate = !0, e
    }

    return __extends(e, t), Object.defineProperty(e, "instance", {
        get: function () {
            return this._instance || (this._instance = new e), this._instance
        }, enumerable: !0, configurable: !0
    }), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.width = this.parent.width, this.height = this.parent.height, this.bg_close && this.bg_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onJumpGamesBtn, this), this.jumpGamesBtn && this.jumpGamesBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onJumpGamesBtn, this), this.initUI(), this.onJumpGamesBtn(null)
    }, e.prototype.onJumpGamesBtn = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (e) {
                return this.clickstate = !this.clickstate, this.jumpGamesBtn.getChildAt(0).visible = !this.clickstate, this.jumpGamesBtn.getChildAt(1).visible = this.clickstate, t = this.clickstate ? 0 : -350, egret.Tween.get(this.jumpgames).to({x: t}, 600, 0 == t ? egret.Ease.backOut : null), [2]
            })
        })
    }, e.prototype.initUI = function () {
        if (this.jumpgames && 0 == this.jumpContainer.numChildren) for (var t in OtherGameConstant.otherGameConfig) {
            var e = OtherGameConstant.otherGameConfig[parseInt(t)], n = new OtherGameSkin(e, this);
            this.jumpContainer.addChild(n), n.x = parseInt(t) % 3 * 111, n.y = 125 * Math.floor(parseInt(t) / 3)
        }
    }, e.prototype.dispose = function () {
        this.bg_close && this.bg_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onJumpGamesBtn, this), this.jumpGamesBtn && this.jumpGamesBtn.dispose()
    }, e
}(eui.Component);
__reflect(JumpGamesPanel.prototype, "JumpGamesPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var OtherGame = function () {
    function t() {
        this.extraData = {}
    }

    return t
}();
__reflect(OtherGame.prototype, "OtherGame");
var OtherGameSkin = function (t) {
    function e(e, n) {
        void 0 === n && (n = null);
        var a = t.call(this) || this;
        return a.configData = e, a.callbackObj = n, a
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.configData && (this.initUI(), this.jumpBtn && this.jumpBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGame, this))
    }, e.prototype.initUI = function () {
        var t = this.jumpBtn.getChildAt(0), e = this.jumpBtn.getChildAt(1), n = this.jumpBtn.getChildAt(2);
        1 == this.configData.hot && (n.texture = RES.getRes("icon_dian")), this.configData.skin && RES.getResByUrl(this.configData.skin, function (e) {
            t.texture = e
        }, this, "image"), this.configData.name && (e.text = this.configData.name)
    }, e.prototype.onGame = function (t) {
        platform.navigateToMiniProgram(this.configData.appid, this.configData.path, this.configData.extraData), this.callbackObj && this.callbackObj.onJumpGamesBtn(null)
    }, e
}(eui.Component);
__reflect(OtherGameSkin.prototype, "OtherGameSkin", ["eui.UIComponent", "egret.DisplayObject"]);
var RankPanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.shareTicket = null, e.addEventListener(egret.Event.ADDED_TO_STAGE, e.addToStage, e), e
    }

    return __extends(e, t), e.prototype.addToStage = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.addToStage, this), this.width = this.parent.width, this.height = this.parent.height
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.rankTitle.text = ConfigData.getKeyStr("www_222"), this.www_223.text = ConfigData.getKeyStr("www_223"), this.www_224.text = ConfigData.getKeyStr("www_224"), this.www_225.text = ConfigData.getKeyStr("www_225"), this.shareToGroupBtn.label = ConfigData.getKeyStr("www_226"), platform.hideBannerAd(), this.initTypeBtn(), this.rankCloseBtn && this.rankCloseBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onClose, this), this.shareToGroupBtn && this.shareToGroupBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShareToGroupClick, this), this.showSDK()
    }, e.prototype.showSDK = function () {
        var t = e.AniAdKey, n = SelfSDKHelper.getInstance(), a = n.getAniAdListByKey(t);
        a && a.length ? n.showAniAdList(t, this.aniAdCon) : n.createAniAD(t, 0, 0, 1, this.aniAdCon)
    }, e.prototype.initTypeBtn = function () {
        this.initCanvas(), this.initRank()
    }, e.prototype.setIconStatus = function (t, e) {
        void 0 === e && (e = !0);
        var n = t.getChildAt(2);
        t.setStatus(e), n.textColor = e ? 4538428 : 16772835
    }, e.prototype.initRank = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t, e, n;
            return __generator(this, function (a) {
                return console.log("shareTicket:", this.shareTicket), t = this.shareTicket ? 2 : 1, e = ConfigData.getKeyStr("www_227"), n = ConfigData.getKeyStr("www_228"), this.rankTitle.text = 2 == t ? "" + e : "" + n, this.sendToContext(!0, t, this.shareTicket), [2]
            })
        })
    }, e.prototype.initCanvas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t, e;
            return __generator(this, function (n) {
                return window.sharedCanvas ? (t = new egret.BitmapData(window.sharedCanvas), t.$deleteSource = !1, e = new egret.Texture, e._setBitmapData(t), this.bitmap = new egret.Bitmap(e), this.bitmap.width = this.stage.stageWidth, this.bitmap.height = this.stage.stageHeight, this.addChild(this.bitmap), egret.startTick(function (e) {
                    return egret.WebGLUtils.deleteWebGLTexture(t.webGLTexture), t.webGLTexture = null, !1
                }, this), [2]) : [2]
            })
        })
    }, e.prototype.sendToContext = function (t, e, n) {
        return __awaiter(this, void 0, void 0, function () {
            var a, i;
            return __generator(this, function (o) {
                return a = platform.getOpenDataContext(), i = {
                    isDisplay: t,
                    rankType: e,
                    shareTicket: n,
                    stageWidth: this.bitmap.width,
                    stageHeight: this.bitmap.height,
                    selfOpenId: AccountData.getOpenId()
                }, a.postMessage(i), [2]
            })
        })
    }, e.prototype.onShareToGroupClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t, e, n;
            return __generator(this, function (a) {
                return t = ShareConstant.randomTitleAndUrl(), e = ConfigData.getKeyStr("www_229"), n = ConfigData.getKeyStr("www_230"), platform.shareAppMessage("" + e, t.imageUrl, "checkRank=1&", function (t) {
                    ControllAlert.show("" + n)
                }, null, null), this.onClose(), [2]
            })
        })
    }, e.prototype.onClose = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, this.sendToContext(!1, 1, null)];
                    case 1:
                        return t.sent(), this.dispose(), [2]
                }
            })
        })
    }, e.prototype.dispose = function () {
        this.bitmap.parent && this.bitmap.parent.removeChild(this.bitmap), this.rankCloseBtn && this.rankCloseBtn.dispose(), this.shareToGroupBtn && this.shareToGroupBtn.dispose(), this.parent && this.parent.removeChild(this), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", e.AniAdKey)
    }, e.AniAdKey = "RankPanel", e
}(eui.Component);
__reflect(RankPanel.prototype, "RankPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var AddProgramIntroduce = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.isBackClose = !0, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this)
    }, e
}(BaseAlertPanel);
__reflect(AddProgramIntroduce.prototype, "AddProgramIntroduce");
var BallViewProgress = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this);
        var e = ConfigData.getKeyStr("www_41"), n = ConfigData.getKeyStr("www_42");
        this.titleTxt.text = "" + e, this.selfDistance.text = "" + n, this.init(), this.closeBtn && this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this)
    }, e.prototype.init = function () {
        var t = RoleData.getRole(), e = ConfigData.getSenceById(t.sence + ""), n = e.name, a = t.head, i = t.floor,
            o = e.maxFloor, r = i / o;
        if (a) {
            var s = new eui.Image;
            this.distanceGroup.addChild(s), RES.getResByUrl(a, function (t) {
                t && (s.texture = t)
            }, s, "image"), s.width = this.selfHeadImg.width, s.height = this.selfHeadImg.height, s.x = this.selfHeadImg.x, s.y = this.selfHeadImg.y, s.mask = this.selfHeadImg
        }
        n && (this.titleTxt.text = n), e.waResName && (this.ballImg.texture = RES.getRes(e.waResName));
        var l = ConfigData.getKeyStr("www_43"), h = ConfigData.getKeyStr("www_44");
        if (i && (this.selfDistance.text = l + "，" + i + ("" + h)), r) {
            var u = 134 * r;
            this.distanceGroup && (this.distanceGroup.y += u)
        }
        this.updateBalls()
    }, e.prototype.updateBalls = function () {
        var t = ConfigData.getSence(), e = RoleData.getRole(), n = e.sence;
        if (n && n > 0 && this.balls) for (var a in t) {
            var i = new BallViewItem(t[a]);
            this.balls.addChild(i), i && parseInt(a) > n ? ColorUtil.setGray(i) : ColorUtil.clearGray(i)
        }
    }, e.prototype.onCloseBtn = function (t) {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        this.closeBtn && this.closeBtn.dispose()
    }, e
}(eui.Component);
__reflect(BallViewProgress.prototype, "BallViewProgress", ["eui.UIComponent", "egret.DisplayObject"]);
var BreakThroughSuc = function (t) {
    function e(e) {
        var n = t.call(this) || this;
        return n.playerId = e, n
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.tishi.text = ConfigData.getKeyStr("www_406"), this.getBtn.label = ConfigData.getKeyStr("www_408"), this.closeBtn.label = ConfigData.getKeyStr("www_407"), egret.Tween.get(this.runBg, {loop: !0}).to({rotation: 360}, 3e3);
        var e = ConfigData.getPlayerById(this.playerId), n = PlayerData.getPlayerById(this.playerId), a = n.level,
            i = n.breakthroughLevel, o = 0;
        if (1 == a && (o = i - 1, a = 100), this.player2 && (this.player2.breakthrough = i, this.player2.playerid = this.playerId, this.player2.initUI()), this.player1 && (this.player1.breakthrough = o, this.player1.playerid = this.playerId, this.player1.initUI()), this.playerId) {
            var r = DragonBoneManager.getInstance().createAnimate(e.animateName);
            r && (r.scaleX = r.scaleY = 2, r.x = this.roleContainer.width / 2, r.y = this.roleContainer.height, this.roleContainer.addChild(r), r.animation.play("1", 0))
        }
        this.getBtn && (this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGet, this), "ad" == AppConfig.breakthrough_zuanshi || "ad" == ShareConstant.getCurrentActionType()), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "exposure", "exposure3", "")), AdConstant.showBannerAd()
    }, e.prototype.onGet = function (t) {
        var e = this, n = ConfigData.getKeyStr("www_409"), a = ConfigData.getKeyStr("www_410"),
            i = ConfigData.getKeyStr("www_411");
        "share" == AppConfig.breakthrough_zuanshi ? ShareConstant.shareToGroup(function (t) {
            if (t) {
                var i = RoleData.getRole();
                i.jewel += 50, RoleData.putRole(i), ControllAlert.show("" + n), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "share", "share8_suc", "")), e.onClose()
            } else ControllAlert.show("" + a)
        }, this) : AdConstant.lookRewardAd(function (t) {
            if (t) {
                var a = RoleData.getRole();
                a.jewel += 50, RoleData.putRole(a), ControllAlert.show("" + n), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "ad", "ad8_suc", "")), e.onClose()
            } else ControllAlert.show("" + i)
        }, this)
    }, e.prototype.dispose = function () {
        platform.hideBannerAd(), this.getBtn && this.getBtn.dispose(), t.prototype.dispose.call(this)
    }, e
}(BaseAlertPanel);
__reflect(BreakThroughSuc.prototype, "BreakThroughSuc");
var FocusGainPanel = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.www_412.text = "1.  " + ConfigData.getKeyStr("www_412"), this.www_413.text = "" + ConfigData.getKeyStr("www_413"), this.www_414.text = "" + ConfigData.getKeyStr("www_414"), this.www_415.text = "2.  " + ConfigData.getKeyStr("www_415"), this.www_416.text = "" + ConfigData.getKeyStr("www_416"), this.pro156.text = "3.  " + ConfigData.getKeyStr("www_412") + " &quot;" + ConfigData.getKeyStr("www_416") + "&quot; " + ConfigData.getKeyStr("www_417"), this.www_418.text = "" + ConfigData.getKeyStr("www_418"), this.www_419.text = "4.  " + ConfigData.getKeyStr("www_419"), this.pro910.text = ConfigData.getKeyStr("www_420") + "\n(" + ConfigData.getKeyStr("www_421") + ")", this.www_422.text = "+666" + ConfigData.getKeyStr("www_422")
    }, e
}(BaseAlertPanel);
__reflect(FocusGainPanel.prototype, "FocusGainPanel");
var GamePanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.frameCount = 0, e.frameCountLuckyZhuanpan = 0, e
    }

    return __extends(e, t), e.prototype.initialize = function () {
        if (this.www_17.text = ConfigData.getKeyStr("www_17"), this.clickDpsLabel.text = ConfigData.getKeyStr("www_18"), this.autoDpsLabel.text = ConfigData.getKeyStr("www_19"), this.class10Btn.label = ConfigData.getKeyStr("www_20"), this.sellBusinessBtn.label = ConfigData.getKeyStr("www_21"), SoundManager.playBgSound("bgm"), this.initTop(), this.initBottom(), this.initRedPoint(), this.initLixianPanel(), this.onPlayerBtn(), this.addEventListener(GameEvent.ADD_GOLD_EVENT, this.onGoldUpdate, this), this.addEventListener(GameEvent.UPDATE_BLOOD_EVENT, this.onBloodUpdate, this), this.addEventListener(GameEvent.REFRESH_PLAYER_MODEL, this.onPlayerUpdate, this), this.addEventListener(GameEvent.FLOOR_OVER_EVENT, this.onFloorOver, this), this.ballVeiw && (this.ballVeiw.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBallView, this), this.guideBallVeiwClick()), this.magicStateContainer && this.magicStateContainer.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMagicBtn, this), this.backBtn && this.backBtn.setCallBack(egret.TouchEvent.TOUCH_BEGIN, this.onBackBtn, this), this.huishouBtn && this.huishouBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onOreSellBtn, this), this.sellBusinessBtn && this.sellBusinessBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onHuishouBtn, this), this.zhuanpanBtn && this.zhuanpanBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onZhuanpanBtn, this), this.zhuanpanBtn) {
            var t = this.zhuanpanBtn.getChildAt(0);
            t && egret.Tween.get(t, {loop: !0}).wait(500).to({rotation: 360}, 650, egret.Ease.sineIn)
        }
        if (this.sevenSignBtn) {
            this.sevenSignBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onSevenSignBtn, this);
            var e = SevenDaySignData.getSignData(), n = e ? e.count : 0, a = e ? e.timestamp : 0,
                i = PlayerData.getOtherPlayers();
            if (i && Object.keys(i).length >= 2) {
                this.sevenSignBtn.visible = !0;
                var o = AccountData.serverTime() + egret.getTimer().valueOf();
                n >= 7 && DateTool.makeTime(a) != DateTool.makeTime(o) && SevenDaySignData.putSignData(null)
            } else this.sevenSignBtn.visible = !1
        }
        this.initMagicStateContainer(), this.toggleGroup && (this.toggleGroup.callback = this.onToggleClick, this.toggleGroup.callbackThisObj = this), this.baoxiang && egret.Tween.get(this.baoxiang, {loop: !0}).to({rotation: -30}, 200).to({rotation: 30}, 400).to({rotation: 0}, 200).wait(1200), this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this), this.baoxiang1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onBaoxiang1, this), this.class10Btn && this.class10Btn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onClass10Btn, this), this.showSDK()
    }, e.prototype.showSDK = function () {
        var t = e.AniAdKey, n = e.AniAdKey1, a = SelfSDKHelper.getInstance(), i = a.getAniAdListByKey(t);
        i && i.length ? (a.showAniAdList(t, this.aniAdCon0), a.showAniAdList(n, this.aniAdCon1)) : a.createAniAD(n, 0, 0, .7, this.aniAdCon1), this.showHotGame(), egret.setTimeout(function () {
        }, this, 200)
    }, e.prototype.showHotGame = function () {
        SelfSDKHelper.getInstance().createHotGameBtn(this.hotCon)
    }, e.prototype.guideBallVeiwClick = function () {
        var t = GuideData.currentOpt();
        if (6 == t) {
            var e = ConfigData.getKeyStr("www_22");
            GuideManager.getInstance().show(this.ballVeiw, this.ballVeiw.parent, "" + e)
        }
    }, e.prototype.onVipBtn = function () {
        ShareConstant.setCurrentShareGroup(3), ShareConstant.shareToGroup(function (t) {
            console.log("邀请函发送成功"), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "vip", "vipshare", ""))
        }, this, !1, "", null, 8), Alert.alert(new VipPanel)
    }, e.prototype.onAddProgram = function () {
        Alert.alert(new AddProgramIntroduce)
    }, e.prototype.onSevenSignBtn = function () {
        Alert.alert(new SevenDaySignPanel)
    }, e.prototype.onClass10Btn = function () {
        if (1 == PlayerData.isClass10BtnState) {
            PlayerData.isClass10BtnState = 10;
            var t = ConfigData.getKeyStr("www_23"), e = ConfigData.getKeyStr("www_24");
            this.class10Btn.label = "" + t, ControllAlert.show("" + e)
        } else if (10 == PlayerData.isClass10BtnState) {
            PlayerData.isClass10BtnState = 1;
            var n = ConfigData.getKeyStr("www_25"), a = ConfigData.getKeyStr("www_26");
            this.class10Btn.label = "" + n, ControllAlert.show("" + a)
        }
    }, e.prototype.onToggleClick = function (t) {
        void 0 === t && (t = 0), 0 == t ? this.onPlayerBtn() : 1 == t ? this.onMagicBtn() : 2 == t ? this.onSkillBtn() : 3 == t && this.collectBtn()
    }, e.prototype.initRedPoint = function () {
        this.magicRedPoint = new core.BaseRedPoint(this.toggleGroup.redPointGroup.getChildAt(1)), this.magicRedPoint.check = function () {
            return MagicConstant.isAutoClick() ? !1 : MagicConstant.isTenTimeClick() ? !1 : MagicConstant.doubleSpeed() ? !1 : MagicConstant.doubleGain() ? !1 : !0
        }, this.skillRedPoint = new core.BaseRedPoint(this.toggleGroup.redPointGroup.getChildAt(2)), this.skillRedPoint.check = function () {
            var t = ConfigData.getSkills(), e = RoleData.getRole().jewel;
            for (var n in t) {
                var a = t[n], i = SkillData.getSkillById(n), o = i ? i.level : 0;
                if (a.growCost * o <= e && o < a.maxLevel) return !0
            }
            return !1
        }
    }, e.prototype.initLixianPanel = function () {
        var t = AccountData.getOffLine(), e = BattleConstant.getAutoDps();
        1 == e.comparedTo(0) && t >= 10 && Alert.alert(new NewLixianPanel)
    }, e.prototype.onFrame = function (t) {
        if (this.frameCountLuckyZhuanpan++, 36e3 == this.frameCountLuckyZhuanpan && (this.frameCountLuckyZhuanpan = 0, LuckyBigZhuanPanData.addQuanBy10min()), this.frameCount++, 900 == this.frameCount) {
            var e = GuideData.currentOpt(), n = TreasureBoxData.getBaoxiang1();
            4 == e || 1 != n && 2 != n || (TreasureBoxData.putBaoxiang1(0), this.baoxiang1.touchEnabled = this.baoxiang1.visible = !1)
        }
        if (1800 == this.frameCount) {
            this.frameCount = 0;
            var a = TreasureBoxData.openSctypeByBXgl();
            if ((1 == a || 2 == a) && Object.keys(PlayerData.getOtherPlayers()).length >= 1 && (TreasureBoxData.putBaoxiang1(a), this.baoxiang1)) {
                if (this.baoxiang1.numChildren < 1) {
                    var i = MovieClipManager.getInstance().getMovieClicp("baoxiang", "xiao_eff");
                    this.baoxiang1.addChild(i), i.play(-1)
                }
                this.baoxiang1.visible = this.baoxiang1.touchEnabled = !0;
                var e = GuideData.currentOpt();
                if (8 == e) {
                    var o = ConfigData.getKeyStr("www_27");
                    GuideManager.getInstance().show(this.baoxiang1, this.baoxiang1.parent, "" + o)
                } else egret.Tween.get(this.baoxiang1, {loop: !0}).to({x: 0}, 3e3).to({x: this.width - 256}, 3e3).wait(1200).call(function () {
                }, this.baoxiang1, [])
            }
        }
    }, e.prototype.onBaoxiang1 = function () {
        SoundManager.playSound("click");
        var t = Math.random();
        if (this.baoxiang1 && (this.baoxiang1.touchEnabled = this.baoxiang1.visible = !1), .5 >= t) {
            var e = TreasureBoxData.getscjewelConfig();
            e && Alert.alert(new TreasureBoxResult(1, e))
        } else {
            var e = TreasureBoxData.getscJinbiConfig();
            e && Alert.alert(new TreasureBoxResult(2, e))
        }
        var n = GuideData.currentOpt();
        8 == n && (GuideData.updateCurrentOpt(), GuideManager.getInstance().hide()), HithitData.hitstopBybaoxiang2 = !0
    }, e.prototype.baoxiangDisplay = function () {
        var t = TreasureBoxData.openSctypeByBXgl(), e = RoleData.getRole();
        3 == t && (e.floor >= 30 || e.sence > 1) && (TreasureBoxData.putBaoxiang2(t), this.baoxiang && (this.baoxiang.visible = !1));
        var n = TreasureBoxData.getBaoxiang2();
        3 == n && (TreasureBoxData.putBaoxiang2(0), this.baoxiang && (this.baoxiang.visible = !1), HithitData.hitstopBybaoxiang2 = !0, Alert.alert(new TreasureBox(3)))
    }, e.prototype.initMagicStateContainer = function () {
        for (var t = this.magicStateContainer.numChildren, e = 0; t > e; e++) {
            var n = this.magicStateContainer.getChildAt(e);
            switch (e) {
                case 0:
                    MagicConstant.isTenTimeClick() ? ColorUtil.clearGray(n) : ColorUtil.setGray(n);
                    break;
                case 1:
                    MagicConstant.isAutoClick() ? ColorUtil.clearGray(n) : ColorUtil.setGray(n);
                    break;
                case 2:
                    MagicConstant.doubleSpeed() ? ColorUtil.clearGray(n) : ColorUtil.setGray(n);
                    break;
                case 3:
                    MagicConstant.doubleGain() ? ColorUtil.clearGray(n) : ColorUtil.setGray(n)
            }
        }
    }, e.prototype.initTop = function () {
        this.jinbiBtn && (this.jinbiBtn.label = StringUtil.decimalFormat(RoleData.getRole().gold)), this.zhuanshiBtn && (this.zhuanshiBtn.label = StringUtil.goldNumber2String(RoleData.getRole().jewel)), this.ballVeiw && this.ballVeiw.updateUI(), this.initVip()
    }, e.prototype.initVip = function () {
        var t = ["", "wddx_ft_010", "wddx_ft_011", "wddx_ft_012", "wddx_ft_013", "wddx_ft_014"],
            e = VipData.getVipData(), n = e ? e.vipLevel : 0;
        try {
            var a = t[n];
            this.currentVipLevel.source = a
        } catch (i) {
            console.log(i)
        }
    }, e.prototype.initBottom = function () {
        var t = (RoleData.getRole(), SenceData.getCurrentBlood());
        if (this.currentBloodSlider) {
            var e = 0, n = BattleConstant.getCurrentBlood();
            this.currentBloodSlider.minimum = e, this.currentBloodSlider.maximum = 100;
            var a = parseFloat(t.div(n).toFixed(2));
            this.currentBloodSlider.value = Math.floor(100 * a)
        }
        this.currentBloodValueLabel && (this.currentBloodValueLabel.text = t ? StringUtil.decimalFormat(t) : "0"), this.dpsUpdate()
    }, e.prototype.dpsUpdate = function () {
        if (this.clickDpsLabel) {
            var t = BattleConstant.getCurrentDpsById(PlayerConstant.HEAD_ID), e = ConfigData.getKeyStr("www_28");
            this.clickDpsLabel.text = e + ":" + StringUtil.decimalFormat(t)
        }
        if (this.autoDpsLabel) {
            var n = BattleConstant.getAutoDps(), a = ConfigData.getKeyStr("www_29"),
                i = a + ":" + StringUtil.decimalFormat(n);
            if (InviteData.isMinutes5()) {
                var o = "x" + InviteData.getInviteTaskfinishId().minutes5.times;
                this.autoDpsLabel.textFlow = [{text: i}, {text: o, style: {textColor: 2794256}}]
            } else this.autoDpsLabel.text = i
        }
    }, e.prototype.onGoldUpdate = function (t) {
    }, e.prototype.onBloodUpdate = function (t) {
        var e = (t.data, SenceData.getCurrentBlood()), n = BattleConstant.getCurrentBlood(),
            a = 100 * parseFloat(e.div(n).toFixed(2));
        this.currentBloodSlider.value = a, this.currentBloodValueLabel && (this.currentBloodValueLabel.text = StringUtil.decimalFormat(e))
    }, e.prototype.onPlayerUpdate = function (t) {
        if (this.clickDpsLabel) {
            var e = BattleConstant.getCurrentDpsById(PlayerConstant.HEAD_ID), n = ConfigData.getKeyStr("www_30");
            this.clickDpsLabel.text = n + ":" + StringUtil.decimalFormat(e)
        }
        if (this.autoDpsLabel) {
            var a = BattleConstant.getAutoDps(), i = ConfigData.getKeyStr("www_31");
            this.autoDpsLabel.text = i + ":" + StringUtil.decimalFormat(a)
        }
        this.battle.initPlayers(), this.playerListVeiw.initUI()
    }, e.prototype.onFloorOver = function (t) {
        this.initTop(), this.initBottom(), this.battle.start(), this.baoxiangDisplay(), this.goldXiaoguo(), this.unlockOre(), this.oreDisplay();
        var e = GuideData.currentOpt();
        7 == e ? this.toggleGroup.guideMagicClick() : 9 == e ? this.toggleGroup.guideSkillClick() : 10 == e && this.toggleGroup.guideCollectClick();
        var n = RoleData.getRole();
        n && 30 == n.floor && 1 == n.sence ? DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "floor", "floor30", "")) : n && 50 == n.floor && 1 == n.sence ? DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "floor", "floor50", "")) : n && 100 == n.floor && 1 == n.sence ? DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "floor", "floor100", "")) : n && 10 == n.floor && 1 == n.sence ? DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "floor", "floor10", "")) : n && 20 == n.floor && 1 == n.sence && DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "floor", "floor20", ""));
        var a = SevenDaySignData.getSignData(), i = a ? a.count : 0, o = PlayerData.getOtherPlayers();
        7 != i && o && Object.keys(o).length >= 2 ? this.sevenSignBtn.visible = !0 : this.sevenSignBtn.visible = !1
    }, e.prototype.goldXiaoguo = function () {
        if (SoundManager.playSound("gamegold"), this.goldContainer) {
            if (0 == this.goldContainer.numChildren) for (var t = 0; 8 > t; t++) {
                var e = new eui.Image;
                e.texture = RES.getRes("wddx_ic_004"), e.width = e.height = 30, this.goldContainer.addChild(e)
            }
            for (var n = this.goldContainer.numChildren, a = 0; n > a; a++) {
                var i = this.goldContainer.getChildAt(a);
                this.goldPosition(i)
            }
        }
    }, e.prototype.goldPosition = function (t) {
        var e = RandomUitl.randomInt(150, 490), n = RandomUitl.randomInt(360, 400),
            a = this.goldContainer.globalToLocal(17, 140);
        t.x = 320, t.y = 400, t.alpha = 1, t && egret.Tween.get(t).to({
            x: e >= 320 ? e - (e - 320) / 2 : (320 - e) / 2 + e,
            y: RandomUitl.randomInt(250, 300)
        }, 400).to({x: e, y: n}, 1500, egret.Ease.bounceOut).wait(500).to({
            x: a.x,
            y: a.y
        }, 500).wait(100).call(function () {
            t.alpha = 0, t.x = e, t.y = n
        }, t, [])
    }, e.prototype.unlockOre = function () {
        var t = RoleData.getRole(), e = t && t.sence ? t.sence : 1, n = t && t.floor ? t.floor : 1;
        if (!(e >= 8)) {
            if (e > 1) for (var a = e - 1; a > 0; a--) {
                var i = ConfigData.getOreGroupById(a + ""), o = i.ores;
                for (var r in o) KuangshiData.putUnlockOresArr(o[r])
            }
            var i = ConfigData.getOreGroupById(e + "");
            if (i) for (var o = i.ores, s = o.length, l = 0; s > l; l++) {
                var h = o[l], u = ConfigData.getOreById(h);
                if (u) {
                    var c = u.unlockFloor, g = u.name;
                    if (n >= c) {
                        KuangshiData.putUnlockOresArr(h);
                        var p = ConfigData.getKeyStr("www_32");
                        if (c == n && ControllAlert.show("" + g + p + "！"), c == n) break
                    }
                }
            }
        }
    }, e.prototype.oreDisplay = function () {
        this.ore1.visible = this.ore2.visible = this.ore3.visible = !1;
        var t = KuangshiData.getFlooroverOre(), e = this.baoxiangGroup.globalToLocal(575, this.height - 621);
        if (t && t.length > 0) for (var n = 0; n < t.length; n++) {
            var a = ConfigData.getOreById(t[n]), i = a && a.resName ? a.resName : "", o = this["ore" + (n + 1)],
                r = new eui.Image;
            r.source = i, r.x = o.x, r.y = o.y, r.width = o.width, r.height = o.height, r.anchorOffsetX = o.anchorOffsetX, r.anchorOffsetY = o.anchorOffsetY, this.baoxiangGroup.addChild(r), egret.Tween.get(r).wait(500 * n).to({
                x: e.x,
                y: e.y
            }, 500).call(function (t, e) {
                t.parent && (e && KuangshiData.updateUnlockOre(e, 1), t.parent.removeChild(t))
            }, this, [r, t[n]])
        }
        var s = KuangshiData.getFloorOverOreType();
        if (s && s.length > 0) {
            Logger.log(s);
            for (var l = 0; l < s.length; l++) {
                var h = ConfigData.getOreById(s[l]), u = h && h.resName ? h.resName : "";
                if (u) {
                    var o = this["ore" + (l + 1)];
                    o.visible = !0, o.texture = RES.getRes(u)
                }
            }
        }
    }, e.prototype.onBackBtn = function () {
        BasePanel.currentPanel.gotoPanel(new StartPanel)
    }, e.prototype.onPlayerBtn = function () {
        this.toggleGroup.setSelect(0), this.playerListVeiw ? this.playerListVeiw.refreshUI() : this.playerListVeiw = new PlayerListVeiw, this.playerListVeiw.visible = !0, this.container.addChild(this.playerListVeiw), this.magicListVeiw && (this.magicListVeiw.visible = !1), this.skillListVeiw && (this.skillListVeiw.visible = !1), this.collectListView && (this.collectListView.visible = !1), this.class10Btn.visible = !0, this.moveBtn0.visible = !1, this.moveBtn1.visible = !1, this.sellBusinessBtn.visible = !1
    }, e.prototype.onMagicBtn = function () {
        var t = this, e = RoleData.getRole();
        if (e.floor < 5 && 1 == e.sence) {
            var n = ConfigData.getKeyStr("www_33");
            return void ControllAlert.show("" + n)
        }
        this.toggleGroup.setSelect(1), this.magicListVeiw ? (this.initMagicStateContainer(), this.magicListVeiw.refreshUI()) : this.magicListVeiw = new MagicListVeiw, this.magicListVeiw.visible = !0, this.container.addChild(this.magicListVeiw), this.playerListVeiw && (this.playerListVeiw.visible = !1), this.skillListVeiw && (this.skillListVeiw.visible = !1), this.collectListView && (this.collectListView.visible = !1), this.class10Btn.visible = !1, this.moveBtn0.visible = !0, this.moveBtn1.visible = !0, this.sellBusinessBtn.visible = !1, this.moveBtn0.setCallBack(egret.TouchEvent.TOUCH_TAP, function () {
            var e = t.magicListVeiw.getChildAt(0);
            e.viewport.scrollH + e.width < e.viewport.contentWidth && egret.Tween.get(e.viewport).to({scrollH: e.viewport.scrollH + 160}, 600)
        }, this), this.moveBtn1.setCallBack(egret.TouchEvent.TOUCH_TAP, function () {
            var e = t.magicListVeiw.getChildAt(0);
            e.viewport.scrollH + e.width < e.viewport.contentWidth || egret.Tween.get(e.viewport).to({scrollH: 5}, 600)
        }, this);
        var a = GuideData.currentOpt();
        7 == a && (GuideData.putCurrentOpt(9), GuideManager.getInstance().hide())
    }, e.prototype.onSkillBtn = function () {
        var t = this, e = RoleData.getRole();
        if (e.floor < 20 && 1 == e.sence) {
            var n = ConfigData.getKeyStr("www_34");
            return void ControllAlert.show("" + n)
        }
        this.toggleGroup.setSelect(2), this.skillListVeiw ? this.skillListVeiw.refreshUI() : this.skillListVeiw = new SkillListVeiw, this.skillListVeiw.visible = !0, this.container.addChild(this.skillListVeiw), this.playerListVeiw && (this.playerListVeiw.visible = !1), this.magicListVeiw && (this.magicListVeiw.visible = !1), this.collectListView && (this.collectListView.visible = !1), this.class10Btn.visible = !1, this.moveBtn0.visible = !0, this.moveBtn1.visible = !0, this.sellBusinessBtn.visible = !1, this.moveBtn0.setCallBack(egret.TouchEvent.TOUCH_TAP, function () {
            var e = t.skillListVeiw.getChildAt(0);
            e.viewport.scrollH + e.width < e.viewport.contentWidth && egret.Tween.get(e.viewport).to({scrollH: 480}, 600)
        }, this), this.moveBtn1.setCallBack(egret.TouchEvent.TOUCH_TAP, function () {
            var e = t.skillListVeiw.getChildAt(0);
            e.viewport.scrollH + e.width < e.viewport.contentWidth || egret.Tween.get(e.viewport).to({scrollH: 5}, 600)
        }, this);
        var a = GuideData.currentOpt();
        9 == a && (GuideData.updateCurrentOpt(), GuideManager.getInstance().hide())
    }, e.prototype.collectBtn = function () {
        var t = RoleData.getRole();
        if (t.floor < 30 && 1 == t.sence) {
            var e = ConfigData.getKeyStr("www_35");
            return void ControllAlert.show("" + e)
        }
        this.toggleGroup.setSelect(3), this.collectListView ? this.collectListView.refreshUI() : this.collectListView = new CollectListView, this.collectListView.visible = !0, this.container.addChild(this.collectListView), this.playerListVeiw && (this.playerListVeiw.visible = !1), this.magicListVeiw && (this.magicListVeiw.visible = !1), this.skillListVeiw && (this.skillListVeiw.visible = !1), this.class10Btn.visible = !1, this.moveBtn0.visible = !1, this.moveBtn1.visible = !1, this.sellBusinessBtn.visible = !0;
        var n = GuideData.currentOpt();
        10 == n && (GuideData.updateCurrentOpt(), GuideManager.getInstance().hide())
    }, e.prototype.onInviteBtn = function () {
        ShareConstant.setCurrentShareGroup(4), ShareConstant.shareToGroup(function (t) {
            var e = ConfigData.getKeyStr("www_36");
            ControllAlert.show("" + e)
        }, this), Alert.alert(new InvitePanel)
    }, e.prototype.onOreSellBtn = function () {
        var t = KuangshiData.getOreData();
        t || KuangshiData.getOreType(), Alert.alert(new OrePanel)
    }, e.prototype.onHuishouBtn = function () {
        var t = RoleData.getRole();
        if (t.floor < 30 && t.sence < 2) {
            var e = ConfigData.getKeyStr("www_37");
            return void ControllAlert.show("" + e)
        }
        var n = new Date, a = n.getHours(), i = BusinessmanData.timeArr, o = BusinessmanData.currentTimeType;
        for (var r in i) {
            var s = i[r];
            if (a >= s[0] && a <= s[1]) {
                if (o && "" != o) {
                    o != r && (BusinessmanData.currentTimeType = r, BusinessmanData.currentInitRefreshCount = 1, BusinessmanData.getScType());
                    var l = BusinessmanData.getSecretData();
                    l && 0 != l.length || BusinessmanData.getScType();
                    break
                }
                o = r, BusinessmanData.currentTimeType = r, BusinessmanData.currentInitRefreshCount = 1, BusinessmanData.getScType();
                break
            }
        }
        o && "" != o || (BusinessmanData.currentTimeType = "1", BusinessmanData.currentInitRefreshCount = 1, BusinessmanData.getScType());
        var l = BusinessmanData.getSecretData();
        l && 0 != l.length || BusinessmanData.getScType(), BusinessmanData.currentTimeType && Alert.alert(new BusinessmanPanel(1))
    }, e.prototype.onZhuanpanBtn = function () {
        Alert.alert(new LuckyZhuanPan, !0)
    }, e.prototype.onBallView = function () {
        var t = GuideData.currentOpt();
        6 == t && (GuideData.updateCurrentOpt(), GuideManager.getInstance().hide()), Alert.alert(new BallViewProgress)
    }, e.prototype.onBack = function () {
        this.showHotGame()
    }, e.prototype.dispose = function () {
        this.removeEventListener(GameEvent.ADD_GOLD_EVENT, this.onGoldUpdate, this), this.removeEventListener(GameEvent.UPDATE_BLOOD_EVENT, this.onBloodUpdate, this), this.removeEventListener(GameEvent.REFRESH_PLAYER_MODEL, this.onPlayerUpdate, this), this.removeEventListener(GameEvent.FLOOR_OVER_EVENT, this.onFloorOver, this), this.magicStateContainer && this.magicStateContainer.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onMagicBtn, this), this.ballVeiw && this.ballVeiw.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBallView, this), this.baoxiang1 && this.baoxiang1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onBaoxiang1, this), this.backBtn && this.backBtn.dispose(), this.battle && this.battle.dispose(), this.zhuanshiBtn && this.zhuanshiBtn.dispose(), this.jinbiBtn && this.jinbiBtn.dispose(), this.zhuanpanBtn && this.zhuanpanBtn.dispose(), this.playerListVeiw && this.playerListVeiw.dispose(), this.magicListVeiw && this.magicListVeiw.dispose(), this.skillListVeiw && this.skillListVeiw.dispose(), this.collectListView && this.collectListView.dispose(), this.inviteRedPoint && this.inviteRedPoint.dispose(), this.sevenSignBtn && this.sevenSignBtn.dispose(), this.toggleGroup && this.toggleGroup.dispose(), this.moveBtn0 && this.moveBtn0.dispose(), this.moveBtn1 && this.moveBtn1.dispose(), this.magicRedPoint && this.magicRedPoint.dispose(), this.skillRedPoint && this.skillRedPoint.dispose(), this.collectRedPoint && this.collectRedPoint.dispose(), this.vipRedPoint && this.vipRedPoint.dispose(), SoundManager.stopBgSound("bgm"), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", e.AniAdKey), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", e.AniAdKey1), SelfSDKHelper.getInstance().hideSkdDisplay("tryGame"), SelfSDKHelper.getInstance().hideSkdDisplay("tryList"), SelfSDKHelper.getInstance().hideSkdDisplay("hotGameBtn"), t.prototype.dispose.call(this)
    }, e.AniAdKey = "GamePanel", e.AniAdKey1 = "GamePanel_1", e
}(BasePanel);
__reflect(GamePanel.prototype, "GamePanel");
var HitHitPanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.timer = new egret.Timer(1500, 0), e.hitCount = 0, e.mostHitCount = 0, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.initData(), this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimer, this), this.timer.start()
    }, e.prototype.initData = function () {
        var t = HithitData.getHitMostCount();
        this.mostHitCount = t ? t : 0, this.hitCount = 0
    }, e.prototype.refreshHit = function () {
        this.visible = !0, this.hitCount++, this.hit.text = this.hitCount + "", this.mostHit.text = this.mostHitCount + "", this.timer.stop(), this.timer.start()
    }, e.prototype.onTimer = function (t) {
        if (0 == HithitData.hitstopBybaoxiang2) {
            this.timer.stop(), this.hitCount > this.mostHitCount && (this.mostHitCount = this.hitCount, HithitData.putHitMostCount(this.mostHitCount), this.hitCount >= 100 && AppConfig.hitMostShare && Alert.alert(new HitMostPanel)), this.hitCount = 0;
            ConfigData.getKeyStr("www_240"), ConfigData.getKeyStr("www_241");
            this.visible = !1
        } else this.timer.reset()
    }, e.prototype.dispose = function () {
        this.parent && this.parent.removeChild(this)
    }, e
}(eui.Component);
__reflect(HitHitPanel.prototype, "HitHitPanel", ["eui.UIComponent", "egret.DisplayObject"]), window.HitHitPanel = HitHitPanel;
var Main = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }

    return __extends(e, t), e.prototype.createChildren = function () {
        t.prototype.createChildren.call(this);
        var e = new AssetAdapter;
        egret.registerImplementation("eui.IAssetAdapter", e), egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter), egret.ImageLoader.crossOrigin = "anonymous", this.runGame()["catch"](function (t) {
            Logger.log(t)
        })
    }, e.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, platform.checkForUpdate()];
                    case 1:
                        return t.sent(), [4, AssetsManager.getInstance().loadInnerResource("resource", "wdx")];
                    case 2:
                        return t.sent(), [4, this.loadTheme()];
                    case 3:
                        return t.sent(), this.addChild(LoadingUI.instance), ConfigManager.getInstance().initAppConfig(this.onConfigLoadComplete, this), [2]
                }
            })
        })
    }, e.prototype.loadTheme = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t = this;
            return __generator(this, function (e) {
                return [2, new Promise(function (e, n) {
                    var a = new eui.Theme("resource/default.thm.json", t.stage);
                    a.addEventListener(eui.UIEvent.COMPLETE, function () {
                        e()
                    }, t)
                })]
            })
        })
    }, e.prototype.onConfigLoadComplete = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (n) {
                switch (n.label) {
                    case 0:
                        return t != AppConfig.appConfigUrl ? [3, 1] : (ConfigManager.getInstance().loadConfig(AppConfig.gameConfigUrl, this.onConfigLoadComplete, this), LoadingUI.instance.setSliderValue(50), [3, 8]);
                    case 1:
                        return t != AppConfig.gameConfigUrl ? [3, 3] : (ConfigData.setGameConfig(e), BusinessmanData.timeArr = ConfigData.getVisibleTimeConfig(), LoadingUI.instance.setSliderValue(100), [4, ConfigManager.getInstance().initShareConfig(this.onConfigLoadComplete, this)]);
                    case 2:
                        return n.sent(), [3, 8];
                    case 3:
                        return t != AppConfig.bloodConfigUrl ? [3, 5] : (ConfigData.setSenceBlood(e), [4, ConfigManager.getInstance().loadConfig(AppConfig.gameConfigUrl, this.onConfigLoadComplete, this)]);
                    case 4:
                        return n.sent(), [3, 8];
                    case 5:
                        return t != AppConfig.dpsConfigUrl ? [3, 7] : (ConfigData.setPlayerDpsConfig(e), [4, ConfigManager.getInstance().loadConfig(AppConfig.bloodConfigUrl, this.onConfigLoadComplete, this)]);
                    case 6:
                        return n.sent(), [3, 8];
                    case 7:
                        t == AppConfig.shareConfigUrl && (LoadingUI.instance.setSliderValue(0), AssetsManager.getInstance().downLoadOutResource(this.LoginServer, this), egret.setTimeout(function () {
                        }, this, 3e3)), n.label = 8;
                    case 8:
                        return [2]
                }
            })
        })
    }, e.prototype.LoginServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (e) {
                return t = function (t) {
                    var e = window.userId;
                    AccountData.getwxUser();
                    e && GameApi.login(null, e, function (e) {
                        return -3 == e.ret ? (AccountData.delOpenId(), void t.LoginServer()) : (Logger.log("login complete"), void t.startGame())
                    })
                }, window.login(t), [2]
            })
        })
    }, e.prototype.initSDK = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, e.prototype.startGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                switch (t.label) {
                    case 0:
                        return Logger.log("龙骨版本:" + dragonBones.DragonBones.VERSION), LayerManager.getInstance().init(this), Alert.init(LayerManager.getInstance().alertLayer, this.width, this.height), TipsPanel.instance.init(), LoadingUI.instance.setSliderValue(100), [4, AssetsManager.getInstance().loadInnerResource("stage/resource", "subbag")];
                    case 1:
                        return t.sent(), this.removeChild(LoadingUI.instance), LayerManager.getInstance().senceLayer.addChild(new StartPanel), HeartBeat.startHeart(), [2]
                }
            })
        })
    }, e
}(eui.UILayer);
__reflect(Main.prototype, "Main");
var HowToPlay = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.isFill = !0, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this);
        var e = ConfigData.getKeyStr("www_49");
        this.closeBtn.label = "" + e
    }, e
}(BaseAlertPanel);
__reflect(HowToPlay.prototype, "HowToPlay");
var LiXianPanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.bornNum = 8, e.deg = 0, e.id = 0, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        var e = this;
        t.prototype.childrenCreated.call(this);
        var n = ConfigData.getKeyStr("www_60"), a = ConfigData.getKeyStr("www_66"), i = ConfigData.getKeyStr("www_67"),
            o = ConfigData.getKeyStr("www_68");
        this.www_60.text = "" + n, this.www_66.text = "" + a, this.getBtn.label = "" + i, this.againBtn.label = "" + o;
        var r = AccountData.getOffLine(), s = BattleConstant.getAutoDps();
        this.getGold = 28800 >= r ? s.mul(r) : s.mul(28800), this.getGold = this.getGold.div(5), this.lixianGold.text = StringUtil.decimalFormat(this.getGold), this.getBtn && this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGetBtn, this), this.againBtn && (this.againBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onAgainBtn, this), "ad" == AppConfig.zhuanpai_lixian || "ad" == ShareConstant.getCurrentActionType()), this.againBtn.setEnable(!1), this.getBtn.setEnable(!1);
        var l = RandomUitl.randomFloat(0, 10);
        l >= 0 && 5 > l ? this.id = 0 : l >= 5 && 10 >= l && (this.id = 1), this.deg = 1800 - 360 * this.id / this.bornNum - 180 / this.bornNum + RandomUitl.randomInt(360 / this.bornNum * .1, 360 / this.bornNum * .9), egret.setTimeout(function () {
            return e.startTurn(function () {
            })
        }, this, 1e3), AdConstant.showBannerAd()
    }, e.prototype.onGetBtn = function () {
        var t = RoleData.getRole();
        t.gold = t.gold.add(this.getGold), RoleData.putRole(t), this.onClose();
        var e = ConfigData.getKeyStr("www_62"), n = ConfigData.getKeyStr("www_63");
        ControllAlert.show("" + e + StringUtil.decimalFormat(this.getGold) + (n + "！"))
    }, e.prototype.onAgainBtn = function (t) {
        var e = this;
        "share" == AppConfig.zhuanpai_lixian ? ShareConstant.shareToGroup(function (t) {
            if (t) {
                var n = RandomUitl.randomFloat(0, 10);
                return n >= 0 && 1 > n ? e.id = 0 : n >= 1 && 3 > n ? e.id = 1 : n >= 3 && 6 > n ? e.id = 2 : n >= 6 && 8 > n ? e.id = 3 : n >= 8 && 9 > n ? e.id = 4 : n >= 9 && 10 >= n && (e.id = 5), e.deg = 1800 - 360 * e.id / e.bornNum - 180 / e.bornNum + RandomUitl.randomInt(360 / e.bornNum * .1, 360 / e.bornNum * .9), e.startTurn(function () {
                })
            }
            var a = ConfigData.getKeyStr("www_64");
            ControllAlert.show("" + a)
        }, this) : AdConstant.lookRewardAd(function (t) {
            if (t) {
                var n = RandomUitl.randomFloat(0, 10);
                return n >= 0 && 1 > n ? e.id = 0 : n >= 1 && 3 > n ? e.id = 1 : n >= 3 && 6 > n ? e.id = 2 : n >= 6 && 8 > n ? e.id = 3 : n >= 8 && 9 > n ? e.id = 4 : n >= 9 && 10 >= n && (e.id = 5), e.deg = 1800 - 360 * e.id / e.bornNum - 180 / e.bornNum + RandomUitl.randomInt(360 / e.bornNum * .1, 360 / e.bornNum * .9), e.startTurn(function () {
                })
            }
            var a = ConfigData.getKeyStr("www_65");
            ControllAlert.show("" + a)
        }, this)
    }, e.prototype.startTurn = function (t) {
        var e = this;
        this.againBtn.setEnable(!1), this.getBtn.setEnable(!1), egret.Tween.get(this.zhuanpanGroup).to({rotation: this.deg}, 5e3, egret.Ease.circInOut).call(function () {
            e.zhuanpanEnd()
        })
    }, e.prototype.zhuanpanEnd = function () {
        this.againBtn.setEnable(!0), this.getBtn.setEnable(!0);
        BattleConstant.getAutoDps(), AccountData.getOffLine();
        this.getGold = this.getGold.mul(this.id + 1)
    }, e.prototype.dispose = function () {
        AccountData.putOffLine(0), platform.hideBannerAd(), this.getBtn && this.getBtn.dispose(), this.againBtn && this.againBtn.dispose()
    }, e
}(BaseAlertPanel);
__reflect(LiXianPanel.prototype, "LiXianPanel");
var LoadingProUI = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e._labelText = ConfigData.getKeyStr("www_11"), e
    }

    return __extends(e, t), Object.defineProperty(e, "instance", {
        get: function () {
            return this._instance || (this._instance = new e), this._instance
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "labelText", {
        set: function (t) {
            this._labelText = t
        }, enumerable: !0, configurable: !0
    }), e.prototype.show = function (t) {
        return t && (this.addEventListener(egret.Event.ADDED_TO_STAGE, this.AddToStage, this), t.addChild(this), this._tweenAction && this._tweenAction.play()), this
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this)
    }, e.prototype.running = function () {
        this.runBg && (this.runBg.visible = !1, this.runBg.anchorOffsetX = this.runBg.width / 2, this.runBg.anchorOffsetY = this.runBg.height / 2, this._tweenAction = egret.Tween.get(this.runBg, {loop: !0}).to({rotation: 360}, 1e3))
    }, e.prototype.AddToStage = function (t) {
        this.width = this.parent.width, this.height = this.parent.height
    }, e.prototype.onProgress = function (t, e) {
        this.runBg.visible = !0;
        var n = Math.floor(t / e * 100);
        this.progressTips.text = this._labelText + (n + "%")
    }, e.prototype.onDownProgress = function (t) {
        this.runBg.visible = !0;
        var e = t.progress;
        this.progressTips.text = this._labelText + (e + "%")
    }, e.prototype.finish = function () {
        this.runBg.visible = !1, this._tweenAction.pause(), this.progressTips.text = ConfigData.getKeyStr("www_12")
    }, e.prototype.dispose = function () {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.AddToStage, this), this._tweenAction && this._tweenAction.pause(), this.parent.removeChild(this)
    }, e
}(eui.Component);
__reflect(LoadingProUI.prototype, "LoadingProUI", ["eui.UIComponent", "egret.DisplayObject", "RES.PromiseTaskReporter"]);
var LoadingUI = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.addEventListener(egret.Event.ADDED_TO_STAGE, e.createView, e), e
    }

    return __extends(e, t), Object.defineProperty(e, "instance", {
        get: function () {
            return this._instance || (this._instance = new e), this._instance
        }, enumerable: !0, configurable: !0
    }), e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.www_1.text = ConfigData.getKeyStr("www_1");
        var e = ConfigData.getKeyStr("www_2"), n = ConfigData.getKeyStr("www_3"), a = ConfigData.getKeyStr("www_4"),
            i = ConfigData.getKeyStr("www_5"), o = ConfigData.getKeyStr("www_6"), r = ConfigData.getKeyStr("www_7"),
            s = ConfigData.getKeyStr("www_8"), l = ConfigData.getKeyStr("www_9"), h = ConfigData.getKeyStr("www_10");
        this.slider.maximum = 100, this.slider.minimum = 0, this.slider.value = 0;
        var u = ["" + e, "" + n, "" + a, "" + i, "" + o, "" + r, "" + s, "" + l, "" + h];
        egret.Tween.get(this.tipsLabel, {loop: !0}).wait(2500).call(function (t) {
            try {
                t.text = u[RandomUitl.randomInt(0, u.length - 1)]
            } catch (e) {
                console.log(e)
            }
        }, this, [this.tipsLabel]);
        var c = this.slider.thumb;
        if (c) {
            var g = DragonBoneManager.getInstance().createAnimate("2");
            g.scaleX = -.6, g.scaleY = .6, g.y = 10, g.x = -20, g.animation.play("1", 0);
            var p = c.addChild;
            p && p instanceof Function && p.apply(c, [g])
        }
    }, e.prototype.createView = function () {
        this.width = this.parent.width, this.height = this.parent.height, this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this)
    }, e.prototype.onProgress = function (t, e) {
        var n = Math.floor(t / e * 100);
        this.textField && (this.textField.text = "Loading..." + n + "%")
    }, e.prototype.onDownProgress = function (t) {
        var e = t.progress;
        e = 1 > e ? Math.round(100 * e) : Math.round(e), this.slider && (this.slider.value = e), this.slider && e - this.slider.value > 10 ? egret.Tween.get(this.slider).to({value: e}, 200) : this.slider && (this.slider.value = e)
    }, e.prototype.setSliderValue = function (t) {
        this.slider && t > 0 ? egret.Tween.get(this.slider).to({value: t}, 200) : this.slider && (this.slider.value = t)
    }, e
}(eui.Component);
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
var LoginPanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.horizontalCenter = 0, e.verticalCenter = 0, e
    }

    return __extends(e, t), e.prototype.initialize = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t, e, n;
            return __generator(this, function (a) {
                switch (a.label) {
                    case 0:
                        return t = this.numChildren, 0 > t ? [2] : (this.loginButton && this.loginButton.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onLogin, this), this.accountInput ? (this.accountInput.type = egret.TextFieldType.INPUT, [4, platform.getStorageSync("account")]) : [3, 2]);
                    case 1:
                        e = a.sent(), n = e.data, Logger.log("platform.getStorage:" + JSON.stringify(n)), n && "" != n && (this.accountInput.text = n), a.label = 2;
                    case 2:
                        return [2]
                }
            })
        })
    }, e.prototype.onLogin = function (t) {
        var e = this.accountInput.text;
        return null == e || "" == e ? void Logger.log("账号不能为空") : void this.startGame()
    }, e.prototype.startGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                return [2]
            })
        })
    }, e.prototype.dispose = function () {
        this.loginButton.dispose(), this.parent.removeChild(this)
    }, e
}(BasePanel);
__reflect(LoginPanel.prototype, "LoginPanel");
var NewLixianPanel = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        var e = this;
        t.prototype.childrenCreated.call(this), this.title.text = ConfigData.getKeyStr("www_69"), this.www_70.text = ConfigData.getKeyStr("www_70"), this.beishuTxt.text = ConfigData.getKeyStr("www_71"), this.double4GetBtn.label = ConfigData.getKeyStr("www_72"), this.doubleGetBtn.label = ConfigData.getKeyStr("www_73"), this.getBtn.label = ConfigData.getKeyStr("www_74"), this.closeBtn.label = ConfigData.getKeyStr("www_75"), this.init(), this.getBtn && (this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGetBtn, this), this.getBtn.visible = !1, egret.setTimeout(function () {
            e.getBtn.visible = !0
        }, this, 2e3)), this.doubleGetBtn && (this.doubleGetBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onDoubleBtn, this), "ad" == AppConfig.zhuanpai_lixian1 || "ad" == ShareConstant.getCurrentActionType()), this.double4GetBtn && (this.double4GetBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onDouble4GetBtn, this), "ad" == AppConfig.zhuanpai_lixian || "ad" == ShareConstant.getCurrentActionType()), this.closeBtn && this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this), egret.setTimeout(function () {
            e.showSDK()
        }, this, 200)
    }, e.prototype.showSDK = function () {
        var t = SelfSDKHelper.getInstance();
        t.createFavList(20, 0, 1, 4, 1, this.tryCon)
    }, e.prototype.init = function () {
        var t = AccountData.getOffLine(), e = BattleConstant.getAutoDps();
        this.getTime = 28800 >= t ? t : 28800, this.getGold = e.mul(this.getTime), this.getGold && (this.goldCount.text = StringUtil.decimalFormat(this.getGold)), AdConstant.showBannerAd()
    }, e.prototype.init4Bei = function () {
        var t = this;
        this.doubleGetBtn.visible = this.getBtn.visible = this.closeBtn.visible = !1, egret.setTimeout(function () {
            t.closeBtn.visible = !0
        }, this, 2e3), this.title && (this.title.text = ConfigData.getKeyStr("www_76")), this.beishuTxt && (this.beishuTxt.text = ConfigData.getKeyStr("www_77"));
        var e = BattleConstant.getAutoDps();
        this.getGold && (this.goldCount.text = StringUtil.decimalFormat(e.mul(2 * this.getTime)) + "   x2")
    }, e.prototype.onGetBtn = function (t) {
        var e = RoleData.getRole();
        e.gold = e.gold.add(this.getGold), RoleData.putRole(e), this.onCloseBtn(null);
        var n = ConfigData.getKeyStr("www_78"), a = ConfigData.getKeyStr("www_79");
        ControllAlert.show("" + n + StringUtil.decimalFormat(this.getGold) + ("" + a)), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "getreward", "getreward3", ""))
    }, e.prototype.onDoubleBtn = function (t) {
        var e = this;
        "share" == AppConfig.zhuanpai_lixian1 ? ShareConstant.shareToGroup(function (t) {
            if (t) {
                var n = RoleData.getRole();
                n.gold = n.gold.add(e.getGold), n.gold = n.gold.add(e.getGold), RoleData.putRole(n), e.init4Bei();
                var a = ConfigData.getKeyStr("www_80"), i = ConfigData.getKeyStr("www_81");
                ControllAlert.show("" + a + StringUtil.decimalFormat(e.getGold) + ("" + i)), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "share", "share14_suc", ""))
            } else {
                var o = ConfigData.getKeyStr("www_82");
                ControllAlert.show("" + o)
            }
        }, this) : AdConstant.lookRewardAd(function (t) {
            if (t) {
                var n = RoleData.getRole(), a = BattleConstant.getAutoDps(), i = a.mul(2 * e.getTime);
                n.gold = n.gold.add(i), RoleData.putRole(n), e.init4Bei();
                var o = ConfigData.getKeyStr("www_83"), r = ConfigData.getKeyStr("www_84");
                ControllAlert.show(o + StringUtil.decimalFormat(i) + r), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "ad", "ad14_suc", ""))
            } else {
                var s = ConfigData.getKeyStr("www_85");
                ControllAlert.show("" + s)
            }
        }, this)
    }, e.prototype.onDouble4GetBtn = function (t) {
        var e = this;
        "share" == AppConfig.zhuanpai_lixian ? ShareConstant.shareToGroup(function (t) {
            if (t) {
                var n = RoleData.getRole(), a = BattleConstant.getAutoDps(), i = a.mul(2 * e.getTime);
                n.gold = n.gold.add(i);
                a.mul(4 * e.getTime);
                RoleData.putRole(n), e.onCloseBtn(null);
                var o = ConfigData.getKeyStr("www_86");
                ControllAlert.show("" + o), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "share", "share15_suc", ""))
            } else {
                var r = ConfigData.getKeyStr("www_87");
                ControllAlert.show("" + r)
            }
        }, this) : AdConstant.lookRewardAd(function (t) {
            if (t) {
                var n = RoleData.getRole(), a = BattleConstant.getAutoDps(),
                    i = (a.mul(4 * e.getTime), a.mul(2 * e.getTime));
                n.gold = n.gold.add(i), RoleData.putRole(n), e.onCloseBtn(null);
                var o = ConfigData.getKeyStr("www_88");
                ControllAlert.show("" + o), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "ad", "ad15_suc", ""))
            } else {
                var r = ConfigData.getKeyStr("www_89");
                ControllAlert.show("" + r)
            }
        }, this)
    }, e.prototype.onCloseBtn = function (t) {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        AccountData.putOffLine(0), platform.hideBannerAd(), this.closeBtn && this.closeBtn.dispose(), this.getBtn && this.getBtn.dispose(), this.doubleGetBtn && this.doubleGetBtn.dispose(), SelfSDKHelper.getInstance().hideSkdDisplay("favList")
    }, e
}(eui.Component);
__reflect(NewLixianPanel.prototype, "NewLixianPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var PlusGoldPanel = function (t) {
    function e(e, n) {
        void 0 === e && (e = "gold"), void 0 === n && (n = !1);
        var a = t.call(this) || this;
        return a.type = "gold", a.isGet = !1, a.type = e, a
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.tentips.visible = !1, this.plusName.text = ConfigData.getKeyStr("www_340"), this.plusCount.text = ConfigData.getKeyStr("www_341") + "+10", this.tentips.text = ConfigData.getKeyStr("www_342"), this.getBtn.label = ConfigData.getKeyStr("www_343"), this.closeBtn && this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this), this.getBtn && this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGetBtn, this), this.guangxiao && egret.Tween.get(this.guangxiao, {loop: !0}).to({rotation: 360}, 3e3), this.initUI(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "exposure", "exposure" + ("gold" == this.type ? 1 : 2), "")), AdConstant.showBannerAd(), this.showSDK()
    }, e.prototype.showSDK = function () {
        var t = e.AniAdKey, n = (e.AniAdKey1, SelfSDKHelper.getInstance());
        n.getAniAdListByKey(t);
        n.createFavList(20, 0, 1, 4, 1, this.adCon)
    }, e.prototype.initUI = function () {
        var t = ConfigData.getKeyStr("www_341"), e = ConfigData.getKeyStr("www_344");
        if ("gold" == this.type) {
            var n = BattleConstant.getAutoDps();
            this.addGold = StringUtil.decimalFormat(n.mul(50)), this.addGold && (this.plusName.text = "" + t, this.plusImg.texture = RES.getRes("shouhuojinbi"), this.plusCount.text = t + "  +" + this.addGold)
        } else this.plusName.text = "" + e, this.plusImg.texture = RES.getRes("wddx_bao_001_baoshi"), this.plusCount.text = e + "  +30"
    }, e.prototype.onGetBtn = function (t) {
        var e = this, n = ConfigData.getKeyStr("www_345"), a = ConfigData.getKeyStr("www_346"),
            i = ConfigData.getKeyStr("www_347"), o = this.limitCountByType();
        0 != o && AdConstant.lookRewardAd(function (t) {
            t ? ("gold" == e.type && e.addGold ? (TreasureBoxData.lingquJinbi(50), ControllAlert.show(n + "  +" + e.addGold), NotEnoughData.updateNotJewelCount(0, 1), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "ad", "ad4_suc", ""))) : "jewel" == e.type && (TreasureBoxData.lingquJewel(30), ControllAlert.show(a + "  +30"), NotEnoughData.updateNotJewelCount(1, 0), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "ad", "ad5_suc", ""))), e.onCloseBtn(null)) : ControllAlert.show("" + i)
        }, this)
    }, e.prototype.limitCountByType = function () {
        var t = ConfigData.getKeyStr("www_348"), e = AccountData.serverTime() + egret.getTimer(),
            n = DateTool.makeTime(e), a = NotEnoughData.getcurrentLimitData(), i = a && a.date == n ? a.jewelCount : 0,
            o = a && a.date == n ? a.jinbiCount : 0;
        return "jewel" == this.type ? i >= NotEnoughConstant.getJewelMaxCount() ? (ControllAlert.show("" + t), !1) : !0 : "gold" == this.type ? o >= NotEnoughConstant.getGoldMaxCount() ? (ControllAlert.show("" + t), !1) : !0 : void 0
    }, e.prototype.onCloseBtn = function (t) {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        platform.hideBannerAd(), this.getBtn && this.getBtn.dispose(), this.closeBtn && this.closeBtn.dispose(), this.parent && this.parent.removeChild(this), SelfSDKHelper.getInstance().hideSkdDisplay("favList")
    }, e.AniAdKey = "PlusGoldPanel", e.AniAdKey1 = "PlusGoldPanel_1", e
}(eui.Component);
__reflect(PlusGoldPanel.prototype, "PlusGoldPanel", ["eui.UIComponent", "egret.DisplayObject"]);
var ShareNotice = function (t) {
    function e(e, n, a) {
        void 0 === a && (a = !1);
        var i = t.call(this) || this;
        return i.subtitle = e, i.tips = n, i.tryAgain = a, i
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this);
        var e = ConfigData.getKeyStr("www_57"), n = ConfigData.getKeyStr("www_58");
        this.www_57.text = "" + e, this.closeBtn.label = "" + n, this.subtitleLabel && (this.subtitleLabel.text = this.subtitle), this.tipsLabel && (this.tipsLabel.text = this.tips)
    }, e.prototype.setCallBack = function (t) {
        return this._callback = t, this
    }, e.prototype.onClose = function () {
        this.tryAgain && this._callback && this._callback.apply(this), t.prototype.onClose.call(this)
    }, e
}(BaseAlertPanel);
__reflect(ShareNotice.prototype, "ShareNotice");
var StartPanel = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.initialize = function () {
        var t = ConfigData.getKeyStr("www_13");
        this.repairBtn.label = t, this.touchEnabled = !0, this.startBtn && (this.startBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onStartGame, this), egret.Tween.get(this.startBtn, {loop: !0}).to({
            scaleX: 1.2,
            scaleY: 1.2
        }, 1200).to({
            scaleX: 1,
            scaleY: 1
        }, 1e3)), this.playBtn && this.playBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onPlayBtn, this), this.repairBtn && this.repairBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onRepairBtn, this), this.uidLabel && (this.uidLabel.text = "id:" + AccountData.uid()), this.showSDK()
    }, e.prototype.showSDK = function () {
        var t = this;
        this.aniAdCon1.x = this.width - 100, this.aniAdCon2.x = this.width - 100;
        var n = e.AniAdKey, a = (e.AniAdKey1, e.AniAdKey2, SelfSDKHelper.getInstance());
        a.getAniAdListByKey(n);
        egret.setTimeout(function () {
            a.createFavList(20, 0, 1, 4, 1, t.favlistConstainer), a.createTryGame(0, 0, 1, t.tryCon);
            var e = a.createTryList(0, 0, .8, t.tryListCon);
            e && (t.tryListCon.x = t.width - .8 * e.width)
        }, this, 200)
    }, e.prototype.onPlayBtn = function () {
        Alert.alert(new HowToPlay, !0)
    }, e.prototype.onRepairBtn = function (t) {
        var e = ConfigData.getKeyStr("www_14"), n = ConfigData.getKeyStr("www_15"), a = ConfigData.getKeyStr("www_16");
        platform.fileRemove(), platform.showModal("" + e, "" + n, "" + a, !1, function () {
            platform.exitMiniProgram(null, null)
        })
    }, e.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [4, WechatManager.getInstance().getUserInfo(this.onStartGame, this)];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, e.prototype.onStartGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t, t, n, a;
            return __generator(this, function (i) {
                return AccountData.getMp() ? (console.log("mp跳转", AppConfig.mp_path), platform.navigateToMiniProgram(AppConfig.mp_path.appid, AppConfig.mp_path.path, ""), AccountData.putMp(null), [2]) : (t = SenceData.getCurrentBlood(), (!t || t.equals(0)) && (t = BattleConstant.getCurrentBlood(), SenceData.updateCurrentBlood(t)), n = PlayerData.getPlayers(), (!n || "" == n || Object.keys(n).length < 1) && (a = new Player, a.type = 0, PlayerData.updatePlayer(PlayerConstant.HEAD_ID, a)), BasePanel.currentPanel instanceof e && (BasePanel.currentPanel.startBtn.touchEnabled = !1), BasePanel.currentPanel.gotoPanel(new GamePanel), [2])
            })
        })
    }, e.prototype.dispose = function () {
        platform.hideFeedbackButton(), this.startBtn && this.startBtn.dispose(), this.soundLuckBtn && this.soundLuckBtn.dispose(), this.playBtn && this.playBtn.dispose(), this.repairBtn && this.repairBtn.dispose(), t.prototype.dispose.call(this), SelfSDKHelper.getInstance().hideSkdDisplay("favList"), SelfSDKHelper.getInstance().hideSkdDisplay("tryGame"), SelfSDKHelper.getInstance().hideSkdDisplay("tryList"), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", e.AniAdKey), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", e.AniAdKey1), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", e.AniAdKey2)
    }, e.AniAdKey = "StartPanel", e.AniAdKey1 = "StartPanel_1", e.AniAdKey2 = "StartPanel_2", e
}(BasePanel);
__reflect(StartPanel.prototype, "StartPanel");
var UnlockPLayer = function (t) {
    function e(e) {
        var n = t.call(this) || this;
        return n.playerId = e, n
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.tishi.text = ConfigData.getKeyStr("www_332"), this.closeBtn.label = ConfigData.getKeyStr("www_333"), this.getBtn.label = ConfigData.getKeyStr("www_334");
        var e = ConfigData.getKeyStr("www_335"), n = ConfigData.getKeyStr("www_336");
        egret.Tween.get(this.runBg, {loop: !0}).to({rotation: 360}, 3e3);
        var a = ConfigData.getPlayerById(this.playerId);
        this.tishi && (this.tishi.text = "" + e + a.name + n);
        PlayerData.getPlayerById(this.playerId);
        if (this.playerId) {
            var i = DragonBoneManager.getInstance().createAnimate(a.animateName);
            i && (i.scaleX = i.scaleY = 2, i.x = this.roleContainer.width / 2, i.y = this.roleContainer.height, this.roleContainer.addChild(i), i.animation.play("1", 0))
        }
        this.getBtn && (this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGet, this), "ad" == AppConfig.breakthrough_zuanshi || "ad" == ShareConstant.getCurrentActionType()), this.closeBtn.visible = !1, "1" != this.playerId && "2" != this.playerId && egret.setTimeout(function () {
            this.closeBtn.visible = !0
        }, this, 2e3), AdConstant.showBannerAd(), this.showSDK()
    }, e.prototype.showSDK = function () {
        this.aniAdCon1.x = this.width - 120;
        var t = StartPanel.AniAdKey, e = StartPanel.AniAdKey1, n = SelfSDKHelper.getInstance(),
            a = n.getAniAdListByKey(t);
        if (a && a.length) n.showAniAdList(t, this.aniAdCon0); else for (var i = 0; 2 > i; i++) n.createAniAD(t, 0, 110 * i * 2, 1, this.aniAdCon0);
        if (a = n.getAniAdListByKey(e), a && a.length) n.showAniAdList(e, this.aniAdCon1); else for (var i = 0; 2 > i; i++) n.createAniAD(e, 0, 110 * i * 2, 1, this.aniAdCon1)
    }, e.prototype.onGet = function (t) {
        var e = this, n = ConfigData.getKeyStr("www_337"), a = ConfigData.getKeyStr("www_338"),
            i = ConfigData.getKeyStr("www_339");
        if ("1" == this.playerId || "2" == this.playerId) {
            var o = RoleData.getRole();
            return o.jewel += 50, RoleData.putRole(o), ControllAlert.show("" + n), void this.onClose()
        }
        "share" == AppConfig.breakthrough_zuanshi ? ShareConstant.shareToGroup(function (t) {
            if (t) {
                var i = RoleData.getRole();
                i.jewel += 50, RoleData.putRole(i), ControllAlert.show("" + n), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "share", "share17_suc", "")), e.onClose()
            } else ControllAlert.show("" + a)
        }, this) : AdConstant.lookRewardAd(function (t) {
            if (t) {
                var a = RoleData.getRole();
                a.jewel += 50, RoleData.putRole(a), ControllAlert.show("" + n), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "ad", "ad17_suc", "")), e.onClose()
            } else ControllAlert.show("" + i)
        }, this)
    }, e.prototype.dispose = function () {
        platform.hideBannerAd(), this.getBtn && this.getBtn.dispose(), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", StartPanel.AniAdKey), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", StartPanel.AniAdKey1), t.prototype.dispose.call(this)
    }, e
}(BaseAlertPanel);
__reflect(UnlockPLayer.prototype, "UnlockPLayer");
var VipPanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.isBackClose = !0, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        var e = this;
        t.prototype.childrenCreated.call(this), this.www_381.text = "" + ConfigData.getKeyStr("www_381"), this.www_382.text = "" + ConfigData.getKeyStr("www_382"), this.www_383.text = "" + ConfigData.getKeyStr("www_383"), this.www_385.text = "" + ConfigData.getKeyStr("www_385"), this.www_386.text = "" + ConfigData.getKeyStr("www_386"), this.www_394.text = "(" + ConfigData.getKeyStr("www_394") + ")", this.notice.text = "" + ConfigData.getKeyStr("www_384"), this.shareBtn.label = "" + ConfigData.getKeyStr("www_387"), this.onceRewardLabel.text = "1." + ConfigData.getKeyStr("www_388") + "\n2" + ConfigData.getKeyStr("www_389") + "\n3." + ConfigData.getKeyStr("www_390") + "\n4." + ConfigData.getKeyStr("www_391") + "\n5." + ConfigData.getKeyStr("www_392"), this.getBtn.label = "" + ConfigData.getKeyStr("www_393"), GameApi.inviteNewSgin("8", function (t) {
            InviteData.putInviteSginVip(t), e.init()
        });
        var n = VipData.getVipData();
        this.currentVipLevel = n ? n.vipLevel : 1, this.shareBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShare, this), this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGet, this), this.rightBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onChoose, this), this.leftBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onChoose, this), this.headConstainer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare1, this), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "vip", "vipshow", "")), this.showSDK()
    }, e.prototype.showSDK = function () {
        var t = e.AniAdKey, n = SelfSDKHelper.getInstance(), a = n.getAniAdListByKey(t);
        a && a.length ? n.showAniAdList(t, this.aniAdCon) : n.createAniAD(t, 0, 0, .85, this.aniAdCon), n.createFavList(60, 0, .8, 4, 1, this.favList)
    }, e.prototype.onShare = function () {
        var t = VipData.getVipConfigByLevel(this.currentVipLevel),
            e = (ConfigData.getVipRewardById(t.vipReward), VipData.getVipData()), n = InviteData.getInviteSginVip();
        n || (n = []);
        var a = n ? n.length : 0;
        if (t.needValue > a) ; else if (!e || t.viplevel > e.vipLevel) {
            var i = new Vip;
            i.vipLevel = this.currentVipLevel, i.rewardDate = null, VipData.putVipData(i), this.init(), BasePanel.currentPanel instanceof GamePanel && BasePanel.currentPanel.initVip(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "vip", "vip" + i.vipLevel, ""))
        }
    }, e.prototype.onShare1 = function () {
        ShareConstant.setCurrentShareGroup(3), ShareConstant.shareToGroup(function (t) {
            console.log("邀请函发送成功"), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "vip", "vipshare", ""))
        }, this, !1, "", null, 8)
    }, e.prototype.onGet = function () {
        var t = ConfigData.getKeyStr("www_395"), e = ConfigData.getKeyStr("www_396"),
            n = VipData.getVipConfigByLevel(this.currentVipLevel), a = ConfigData.getVipRewardById(n.vipReward),
            i = VipData.getVipData(), o = AccountData.serverTime() + egret.getTimer().valueOf(),
            r = DateTool.makeTime(o);
        if (i && n.viplevel == i.vipLevel && i.rewardDate != r) {
            var s = RoleData.getRole(), l = Number(a.everyDayRwardValue);
            l && (s.jewel += l), RoleData.putRole(s), ControllAlert.show("" + t + l + e), i.rewardDate = r, VipData.putVipData(i), this.init()
        }
    }, e.prototype.onChoose = function (t) {
        this.rightBtn.hashCode == t.currentTarget.hashCode ? (this.currentVipLevel++, this.currentVipLevel > 5 && (this.currentVipLevel = 5)) : this.leftBtn.hashCode == t.currentTarget.hashCode && (this.currentVipLevel--, this.currentVipLevel < 1 && (this.currentVipLevel = 1)), this.init()
    }, e.prototype.init = function () {
        var t = ConfigData.getKeyStr("www_397"), e = ConfigData.getKeyStr("www_398"),
            n = ConfigData.getKeyStr("www_399"), a = ConfigData.getKeyStr("www_400"),
            i = ConfigData.getKeyStr("www_401"), o = ConfigData.getKeyStr("www_402"),
            r = ConfigData.getKeyStr("www_403"), s = ConfigData.getKeyStr("www_404"),
            l = ConfigData.getKeyStr("www_393"), h = ConfigData.getKeyStr("www_405"),
            u = ["wddx_ft_010", "wddx_ft_011", "wddx_ft_012", "wddx_ft_013", "wddx_ft_014"];
        try {
            var c = u[this.currentVipLevel - 1];
            this.viplevelImage.source = c
        } catch (g) {
            console.log(g)
        }
        this.viplevel.text = "VIP" + this.currentVipLevel;
        var p = VipData.getVipConfigByLevel(this.currentVipLevel), d = ConfigData.getVipRewardById(p.vipReward);
        if (p && d) {
            var f = VipData.getVipData(), C = InviteData.getInviteSginVip();
            C || (C = []);
            var y = C ? C.length : 0;
            if (this.shareBtn.setEnable(!0), this.shareBtn.visible = !0, this.notice.visible = !0, p.needValue > y ? (this.shareBtn.visible = !1, this.notice.visible = !1) : !f || p.viplevel > f.vipLevel ? (this.shareBtn.label = "" + t, this.shareTween ? this.shareTween.play() : this.shareTween = egret.Tween.get(this.shareBtn, {loop: !0}).to({
                scaleX: 1.15,
                scaleY: 1.15
            }, 300).to({
                scaleX: 1,
                scaleY: 1
            }, 200).wait(500)) : (this.shareBtn.label = "" + e, this.notice.visible = !1, this.shareTween && this.shareTween.pause(), this.shareBtn.setEnable(!1)), this.headConstainer) {
                this.headConstainer.$children.forEach(function (t) {
                    t && t.visible && (t.visible = !1)
                });
                for (var v = p.needValue - p.currentNeedValue, w = 0; w < p.currentNeedValue; w++) {
                    var D = this.headConstainer.getChildAt(w);
                    if (D) {
                        var _ = D.getChildAt(4);
                        if (y > v + w) {
                            var m = C[v + w].avatar;
                            "" == m ? _.texture = RES.getRes("wddx_ic_009") : this.showAvatar(m, _)
                        } else _.texture = null;
                        D.visible = !0
                    }
                }
            }
            if (this.onceRewardLabel) {
                var A = {1: "1." + n + "+", 2: "2." + a + "+", 3: "3." + i + "+", 4: "4." + o + "+", 5: "5." + r + "+"},
                    S = d.onceRewardType.split(","), B = d.onceRewardValue.split(","), T = "";
                if (S && B && S.length == B.length) for (var w = 0; w < S.length; w++) T += A[S[w]] + B[w] + (s + "\n");
                this.onceRewardLabel.text = T, this.rewardLabel.text = "x" + d.everyDayRwardValue
            }
            if (this.getBtn.setEnable(!1), this.getBtn.label = "" + l, f && p.viplevel == f.vipLevel) {
                var b = AccountData.serverTime() + egret.getTimer().valueOf(), k = DateTool.makeTime(b);
                f.rewardDate == k && (this.getBtn.label = "" + h, this.getBtn.setEnable(!0))
            }
        }
    }, e.prototype.showAvatar = function (t, e) {
        RES.getResByUrl(t, function (t) {
            e.texture = t
        }, this, "image")
    }, e.prototype.dispose = function () {
        this.shareBtn && this.shareBtn.dispose(), this.getBtn && this.getBtn.dispose(), this.rightBtn && this.rightBtn.dispose(), this.leftBtn && this.leftBtn.dispose(), this.headConstainer.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare1, this), SelfSDKHelper.getInstance().hideSkdDisplay("bkGame"), t.prototype.dispose.call(this)
    }, e.AniAdKey = "VipPanel", e
}(BaseAlertPanel);
__reflect(VipPanel.prototype, "VipPanel");
var LuckyZhuanPan = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.bornNum = 8, e.deg = 0, e.id = 0, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.www_90.text = ConfigData.getKeyStr("www_90"), this.www_91.text = ConfigData.getKeyStr("www_91"), this.www_92.text = ConfigData.getKeyStr("www_92"), this.www_93.text = ConfigData.getKeyStr("www_93"), this.www_94.text = ConfigData.getKeyStr("www_94"), this.www_95.text = ConfigData.getKeyStr("www_95"), this.www_96.text = ConfigData.getKeyStr("www_96"), this.www_97.text = ConfigData.getKeyStr("www_97"), this.count.text = ConfigData.getKeyStr("www_98"), this.initUI(), this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this), this.startBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onStartBtn, this), this.plusBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onPlusBtn, this), egret.Tween.get(this.luckyIcon, {loop: !0}).wait(1500).to({
            scaleX: 1.2,
            scaleY: 1.2
        }, 550, egret.Ease.bounceOut).to({scaleX: 1, scaleY: 1}, 350, egret.Ease.bounceOut), this.showSDK()
    }, e.prototype.showSDK = function () {
        this.aniAdCon1.x = this.width - 120;
        var t = e.AniAdKey, n = e.AniAdKey1, a = SelfSDKHelper.getInstance(), i = a.getAniAdListByKey(t);
        i && i.length ? (a.showAniAdList(t, this.aniAdCon0), a.showAniAdList(n, this.aniAdCon1)) : (a.createAniAD(t, 0, 0, 1, this.aniAdCon0), a.createAniAD(n, 0, 0, 1, this.aniAdCon1))
    }, e.prototype.initUI = function () {
        var t = LuckyBigZhuanPanData.getZPQCount(), e = t ? t : 0, n = ConfigData.getKeyStr("www_99");
        this.count.text = n + "x" + e
    }, e.prototype.onPlusBtn = function (t) {
        var e = 1, n = ConfigData.getKeyStr("www_100");
        Alert.alert(new ShareGetQuan("" + n, e, this))
    }, e.prototype.onStartBtn = function (t) {
        var e = LuckyBigZhuanPanData.getZPQCount();
        if (1 > e) {
            var n = ConfigData.getKeyStr("www_101"), a = ConfigData.getKeyStr("www_102");
            ControllAlert.show(n + "！");
            var i = 1;
            return void Alert.alert(new ShareGetQuan("" + a, i, this))
        }
        var o = AccountData.serverTime() + egret.getTimer(), r = DateTool.makeTime(o),
            s = LuckyBigZhuanPanData.getZhuanCount(), i = s && s.date == r ? s.count : 0;
        if (i >= ZhuanpanConstant.getMaxCount()) {
            var l = ConfigData.getKeyStr("www_103");
            return void ControllAlert.show("" + l)
        }
        LuckyBigZhuanPanData.updateZhuanCount(), this.id = LuckyBigZhuanPanData.getIdByGl(), this.deg = 1800 - 360 * (this.id - 1) / this.bornNum - 180 / this.bornNum + RandomUitl.randomInt(360 / this.bornNum * .1, 360 / this.bornNum * .9), this.initZhuanPanGroup()
    }, e.prototype.initZhuanPanGroup = function () {
        var t = this;
        LuckyBigZhuanPanData.onceClick(), this.initUI(), this.startBtn.setEnable(!1), egret.Tween.get(this.zhuanpanGroup).to({rotation: this.deg}, 4e3, egret.Ease.circInOut).wait(1500).call(function () {
            t.startBtn.setEnable(!0);
            var e = LuckyBigZhuanPanData.getResultById(t.id);
            e.type && Alert.alert(new LuckyZhuanPanResult(e.type, e.result, e.id), !0)
        }, this, [])
    }, e.prototype.onCloseBtn = function () {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        this.startBtn && this.startBtn.dispose(), this.parent && this.parent.removeChild(this), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", e.AniAdKey), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", e.AniAdKey1)
    }, e.AniAdKey = "LuckyZhuanPan", e.AniAdKey1 = "LuckyZhuanPan_1", e
}(eui.Component);
__reflect(LuckyZhuanPan.prototype, "LuckyZhuanPan", ["eui.UIComponent", "egret.DisplayObject"]);
var LuckyZhuanPanResult = function (t) {
    function e(e, n, a) {
        var i = t.call(this) || this;
        return i.collectClick = !1, i._type = e, i._result = n, i._id = a, i
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.titleTxt.text = ConfigData.getKeyStr("www_104"), this.jiangliCount.text = ConfigData.getKeyStr("www_105"), this.beishuTxt.text = ConfigData.getKeyStr("www_106"), this.shoucangpinTxt.text = ConfigData.getKeyStr("www_107"), this.lingquBtn.label = ConfigData.getKeyStr("www_108"), this.lingquBtn1.label = ConfigData.getKeyStr("www_109"), this.lingquBtn2.label = ConfigData.getKeyStr("www_110"), this.closeBtn.label = ConfigData.getKeyStr("www_111"), this.lingquBtn && this.lingquBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onLQBtn, this), this.closeBtn && this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this), this.lingquBtn1 && this.lingquBtn1.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onLQBtn, this), 4 == this._type && ("ad" == AppConfig.luckzhuanpai_result || "ad" == ShareConstant.getCurrentActionType()), this.lingquBtn2 && this.lingquBtn2.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onLQ2Btn, this), "ad" == AppConfig.luckzhuanpai_result || "ad" == ShareConstant.getCurrentActionType(), this.initBtn(), this.init(), AdConstant.showBannerAd()
    }, e.prototype.initBtn = function () {
        var t = this;
        4 == this._type ? (this.lingquBtn1.visible = this.lingquBtn2.visible = !1, this.lingquBtn.visible = !0, this.closeBtn && egret.setTimeout(function () {
            t.closeBtn.visible = !0
        }, this, 2e3)) : (this.lingquBtn.visible = this.closeBtn.visible = !1, this.lingquBtn2.visible = !0, this.lingquBtn1 && egret.setTimeout(function () {
            t.lingquBtn1.visible = !0
        }, this, 2e3))
    }, e.prototype.init = function () {
        if (1 == this._type) var t = "wddx_ic_016", e = this._result; else if (2 == this._type) var t = "shouhuojinbi",
            e = this._result; else if (3 == this._type) {
            var t = "wddx_bao_001";
            this.jiangliCount.visible = !1
        } else if (4 == this._type) {
            var t = "wddx_bao_002", e = this._result;
            this.beishuTxt.visible = !0;
            var n = ConfigData.getKeyStr("www_112");
            this.beishuTxt.text = n + "x" + this._result
        }
        t && (this.resName.texture = RES.getRes(t));
        var a = ConfigData.getKeyStr("www_113");
        e && (this.jiangliCount.text = a + "x" + this._result)
    }, e.prototype.onLQBtn = function (t) {
        var e = this;
        if (3 == this._type) {
            var n = this._result;
            if (1 == this.collectClick) {
                var a = ConfigData.getKeyStr("www_114"), i = ConfigData.getKeyStr("www_115");
                return ControllAlert.show("" + a + n.name + ("" + i)), BasePanel.currentPanel instanceof GamePanel && BasePanel.currentPanel.collectListView && BasePanel.currentPanel.collectListView.refreshUI(), void this.onCloseBtn()
            }
            var o = n.resName;
            o && (this.resName.texture = RES.getRes(o)), this.jiangliCount.visible = !0, this.shoucangpinTxt.visible = !0;
            var r = ConfigData.getKeyStr("www_116");
            this.jiangliCount.text = r + "x1", this.collectClick = !0
        } else if (4 == this._type) "share" == AppConfig.luckzhuanpai_result ? ShareConstant.shareToGroup(function (t) {
            if (t) {
                var n = ConfigData.getKeyStr("www_117"), a = ConfigData.getKeyStr("www_118");
                return ControllAlert.show(n + "x" + e._result + ("" + a)), void e.onCloseBtn()
            }
            var i = ConfigData.getKeyStr("www_119");
            ControllAlert.show("" + i)
        }, this) : AdConstant.lookRewardAd(function (t) {
            if (t) {
                var n = ConfigData.getKeyStr("www_120"), a = ConfigData.getKeyStr("www_121");
                return ControllAlert.show(n + "x" + e._result + ("" + a)), void e.onCloseBtn()
            }
            var i = ConfigData.getKeyStr("www_122");
            ControllAlert.show("" + i)
        }, this); else {
            var s = ConfigData.getKeyStr("www_123"), l = ConfigData.getKeyStr("www_124");
            1 == this._type ? ControllAlert.show("" + s + this._result + "个") : 2 == this._type && ControllAlert.show("" + l + this._result + "个"), this.onCloseBtn()
        }
    }, e.prototype.onLQ2Btn = function (t) {
        var e = this;
        if (3 == this._type) {
            var n = this._result;
            1 == this.collectClick && ("share" == AppConfig.luckzhuanpai_result ? ShareConstant.shareToGroup(function (t) {
                if (t) {
                    var a = LuckyBigZhuanPanData.addCollect(e._result);
                    if (a) {
                        var i = ConfigData.getKeyStr("www_125"), o = ConfigData.getKeyStr("www_126");
                        ControllAlert.show("" + i + n.name + ("" + o)), BasePanel.currentPanel instanceof GamePanel && BasePanel.currentPanel.collectListView && BasePanel.currentPanel.collectListView.refreshUI()
                    }
                    return void e.onCloseBtn()
                }
                var r = ConfigData.getKeyStr("www_127");
                ControllAlert.show("" + r)
            }, this) : AdConstant.lookRewardAd(function (t) {
                if (t) {
                    var a = LuckyBigZhuanPanData.addCollect(e._result);
                    if (a) {
                        var i = ConfigData.getKeyStr("www_128"), o = ConfigData.getKeyStr("www_129");
                        ControllAlert.show("" + i + n.name + ("" + o)), BasePanel.currentPanel instanceof GamePanel && BasePanel.currentPanel.collectListView && BasePanel.currentPanel.collectListView.refreshUI()
                    }
                    return void e.onCloseBtn()
                }
                var r = ConfigData.getKeyStr("www_130");
                ControllAlert.show("" + r)
            }, this));
            var a = n.resName;
            a && (this.resName.texture = RES.getRes(a)), this.jiangliCount.visible = !0, this.shoucangpinTxt.visible = !0;
            var i = ConfigData.getKeyStr("www_131");
            this.jiangliCount.text = i + "x2", this.collectClick = !0
        } else "share" == AppConfig.luckzhuanpai_result ? ShareConstant.shareToGroup(function (t) {
            if (t) {
                var n = LuckyBigZhuanPanData.getResultById(e._id);
                if (n) {
                    var a = ConfigData.getKeyStr("www_132"), i = ConfigData.getKeyStr("www_133"),
                        o = ConfigData.getKeyStr("www_136");
                    1 == e._type ? ControllAlert.show("" + a + 2 * e._result + ("" + o)) : 2 == e._type && ControllAlert.show("" + i + e._result + "x2")
                }
                return void e.onCloseBtn()
            }
            var r = ConfigData.getKeyStr("www_134");
            ControllAlert.show("" + r)
        }, this) : AdConstant.lookRewardAd(function (t) {
            if (t) {
                var n = LuckyBigZhuanPanData.getResultById(e._id);
                if (n) {
                    var a = ConfigData.getKeyStr("www_135"), i = ConfigData.getKeyStr("www_136"),
                        o = ConfigData.getKeyStr("www_137");
                    1 == e._type ? ControllAlert.show("" + a + 2 * e._result + ("" + i)) : 2 == e._type && ControllAlert.show("" + o + e._result + "x2")
                }
                return void e.onCloseBtn()
            }
            var r = ConfigData.getKeyStr("www_138");
            ControllAlert.show("" + r)
        }, this)
    }, e.prototype.onCloseBtn = function () {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        platform.hideBannerAd(), this.lingquBtn && this.lingquBtn.dispose(), this.closeBtn && this.closeBtn.dispose()
    }, e
}(eui.Component);
__reflect(LuckyZhuanPanResult.prototype, "LuckyZhuanPanResult", ["eui.UIComponent", "egret.DisplayObject"]);
var ShareGetQuan = function (t) {
    function e(e, n, a) {
        var i = t.call(this) || this;
        return i._callbackThisObj = null, i._info = e, i._quanCount = n, i._callbackThisObj = a, i
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.titleTxt.text = ConfigData.getKeyStr("www_364"), this.infoTxt.text = ConfigData.getKeyStr("www_365"), this.shareBtn.label = ConfigData.getKeyStr("www_366"), this.closeBtn.label = ConfigData.getKeyStr("www_367") + "!", this.init(), this.shareBtn && (this.shareBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShareBtn, this), "ad" == AppConfig.luckzhuanpai_juan || "ad" == ShareConstant.getCurrentActionType()), this.closeBtn && this.closeBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onCloseBtn, this), AdConstant.showBannerAd()
    }, e.prototype.init = function () {
        this._info && (this.infoTxt.text = this._info)
    }, e.prototype.onShareBtn = function (t) {
        var e = this, n = ConfigData.getKeyStr("www_364"), a = ConfigData.getKeyStr("www_368"),
            i = ConfigData.getKeyStr("www_369");
        "share" == AppConfig.luckzhuanpai_juan ? ShareConstant.shareToGroup(function (i) {
            i ? (LuckyBigZhuanPanData.updateZPQ(e._quanCount), ControllAlert.show(n + "+" + e._quanCount), e._callbackThisObj && e._callbackThisObj.initUI(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "share", "share3_suc", "")), null != t && e.onCloseBtn(null)) : ControllAlert.show("" + a)
        }, this) : AdConstant.lookRewardAd(function (a) {
            a ? (LuckyBigZhuanPanData.updateZPQ(e._quanCount), ControllAlert.show(n + "+" + e._quanCount), e._callbackThisObj && e._callbackThisObj.initUI(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "ad", "ad3_suc", "")), null != t && e.onCloseBtn(null)) : ControllAlert.show("" + i)
        }, this)
    }, e.prototype.onCloseBtn = function (t) {
        Alert.closeAlert(this, 0)
    }, e.prototype.dispose = function () {
        platform.hideBannerAd(), this.shareBtn && this.shareBtn.dispose(), this.closeBtn && this.closeBtn.dispose()
    }, e
}(eui.Component);
__reflect(ShareGetQuan.prototype, "ShareGetQuan", ["eui.UIComponent", "egret.DisplayObject"]);
var CollectListItem = function (t) {
    function e(e) {
        var n = t.call(this) || this;
        return n.type = e, n
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.collectName.text = ConfigData.getKeyStr("www_236"), this.lingquBtn.label = ConfigData.getKeyStr("www_237"), this.initUI()
    }, e.prototype.initUI = function () {
        var t = ConfigData.getCollectGroupById(this.type), e = ConfigData.getPlayerById(this.type), n = t.sc;
        this.collectName && (this.collectName.text = e.name), this.scImg && (this.scImg.texture = RES.getRes(t.resName));
        for (var a = 0; 5 > a; a++) {
            var i = this["sc" + a], o = n[a], r = ConfigData.getCollectById(o);
            if (i) {
                var s = i.getChildAt(2), l = i.getChildAt(4);
                r && (s.texture = RES.getRes(r.resName)), r && (l.text = "x0")
            }
        }
        this.refreshUI()
    }, e.prototype.addSc = function (t, e) {
        return function () {
            TreasureBoxData.updateCollect(t, 1), e.refreshUI()
        }
    }, e.prototype.refreshUI = function () {
        for (var t = TreasureBoxData.getCollect(), e = 0, n = 0; 5 > n; n++) {
            var a = this.type + (4001 + n), i = ConfigData.getCollectById(a), o = t && t[a] ? t[a] : 0,
                r = this["sc" + n];
            if (r) {
                var s = r.getChildAt(4);
                s && (s.text = "x" + o, s.textColor = o > 0 ? 60416 : 16777215);
                var l = r.getChildAt(5);
                if (l) {
                    var h = 100 * i.buffValue * Math.min(100, o), u = h ? h.toFixed(1) : "0";
                    l.text = "+" + u + "%"
                }
            }
            o > 0 && e++
        }
    }, e.prototype.onLingquBtn = function () {
        if (TreasureBoxData.lingquCollectById(this.type), this.refreshUI(), "1" == this.type || "2" == this.type || "3" == this.type) {
            var t = ConfigData.getKeyStr("www_238");
            return void ControllAlert.show(t + "+100")
        }
        var e = ConfigData.getKeyStr("www_239");
        return void ControllAlert.show("" + e)
    }, e.prototype.dispose = function () {
    }, e
}(eui.Component);
__reflect(CollectListItem.prototype, "CollectListItem", ["eui.UIComponent", "egret.DisplayObject"]);
var CollectListView = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.www_231.text = ConfigData.getKeyStr("www_231"), this.www_232.text = ConfigData.getKeyStr("www_232"), this.www_233.text = ConfigData.getKeyStr("www_233"), this.www_234.text = ConfigData.getKeyStr("www_234"), this.www_235.text = ConfigData.getKeyStr("www_235"), this.initUI()
    }, e.prototype.initUI = function () {
        var t = ConfigData.getCollectGroup();
        for (var e in t) {
            var n = new CollectListItem(e);
            n.height = 110, this.container.addChild(n)
        }
    }, e.prototype.refreshUI = function () {
        for (var t = this.container.numChildren, e = 0; t > e; e++) {
            var n = this.container.getChildAt(e);
            n instanceof CollectListItem && n.refreshUI()
        }
    }, e.prototype.dispose = function () {
    }, e
}(eui.Component);
__reflect(CollectListView.prototype, "CollectListView", ["eui.UIComponent", "egret.DisplayObject"]);
var SevenDaySignItem = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), Object.defineProperty(e.prototype, "index", {
        set: function (t) {
            this._index = t, this.updateUi()
        }, enumerable: !0, configurable: !0
    }), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.dateLabel.text = ConfigData.getKeyStr("www_349"), this.rewardValueLabel.text = ConfigData.getKeyStr("www_350")
    }, e.prototype.updateUi = function () {
        var t = ConfigData.getKeyStr("www_351"), e = ConfigData.getKeyStr("www_352"),
            n = ConfigData.getKeyStr("www_353"), a = ConfigData.getKeyStr("www_354"),
            i = ["wddx_bt_027", "wddx_bt_028", "wddx_bt_029"];
        6 == this._index && (this.bg.source = i[2]);
        var o = SevenDaySignData.getConfigByIndex(this._index);
        if (!o) return void Logger.log("配置异常sevenDaySign:" + this._index);
        var r = SevenDaySignData.getSignData(), s = r ? r.timestamp : 0, l = r ? r.count : 0,
            h = AccountData.serverTime() + egret.getTimer().valueOf();
        if (this.finish.visible = !1, this._index == l && DateTool.makeTime(h) != DateTool.makeTime(s) ? (6 != this._index && (this.bg.source = i[1]), this.dateLabel && (this.dateLabel.text = "" + t, this.dateLabel.textColor = 16777215), this.rewardValueLabel && (this.rewardValueLabel.textColor = 12802565)) : (this.hasEventListener(egret.TouchEvent.TOUCH_TAP) && this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this), this.dateLabel && (this.dateLabel.text = "" + e + (this._index + 1) + n), this._index < l && (this.finish.visible = !0)), this.icon) {
            var u = RES.getRes(o.resName);
            u ? (this.icon.texture = u, this.icon.width = u.textureWidth, this.icon.height = u.textureHeight, this.icon.scaleX = this.icon.scaleY = o.resScale) : this.icon.visible = !1
        }
        this.rewardValueLabel && (0 == o.rewardType ? this.rewardValueLabel.text = o.rewardValue + "h" + a : this.rewardValueLabel.text = "" + o.rewardValue)
    }, e.prototype.onTap = function (t) {
        var e = ConfigData.getKeyStr("www_355"), n = ConfigData.getKeyStr("www_356"),
            a = ConfigData.getKeyStr("www_357"), i = SevenDaySignData.getConfigByIndex(this._index);
        switch (i.rewardType) {
            case 0:
                var o = RoleData.getRole(), r = BattleConstant.getAutoDps(), s = r.mul(3600 * i.rewardValue);
                o.gold = o.gold.add(s), RoleData.putRole(o), ControllAlert.show(e + " " + StringUtil.decimalFormat(s));
                break;
            case 1:
                var o = RoleData.getRole();
                o.jewel += Number(i.rewardValue), RoleData.putRole(o), ControllAlert.show(n + "+" + i.rewardValue);
                break;
            case 2:
                LuckyBigZhuanPanData.updateZPQ(i.rewardValue), ControllAlert.show(a + "+" + i.rewardValue)
        }
        var l = AccountData.serverTime() + egret.getTimer().valueOf();
        SevenDaySignData.updateSign(l, this._index + 1), this.updateUi()
    }, e.prototype.dispose = function () {
        this.hasEventListener(egret.TouchEvent.TOUCH_TAP) && this.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this)
    }, e
}(eui.Component);
__reflect(SevenDaySignItem.prototype, "SevenDaySignItem", ["eui.UIComponent", "egret.DisplayObject"]), window.SevenDaySignItem = SevenDaySignItem;
var SevenDaySignPanel = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        var e = this;
        t.prototype.childrenCreated.call(this), this.doubleBtn.label = ConfigData.getKeyStr("www_358"), this.getBtn.label = ConfigData.getKeyStr("www_359"), this.refreshUI(), this.doubleBtn && (this.doubleBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onDoubleTap, this), "ad" == AppConfig.sevenSign_lingqu || "ad" == ShareConstant.getCurrentActionType()), this.getBtn && (this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onTap, this), this.getBtn.visible = !1, egret.setTimeout(function () {
            e.getBtn.visible = !0
        }, this, 2e3)), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "exposure", "exposure8", "")), AdConstant.showBannerAd(), this.showSDK()
    }, e.prototype.showSDK = function () {
        var t = e.AniAdKey, n = (e.AniAdKey1, SelfSDKHelper.getInstance()), a = n.getAniAdListByKey(t);
        a && a.length ? n.showAniAdList(t, this.aniAdCon0) : n.createAniAD(t, 0, 0, 1, this.aniAdCon0), n.createHotGameBtn(this.bkCon)
    }, e.prototype.refreshUI = function () {
        for (var t = 0; 7 > t; t++) {
            var e = this.itemConstainer.getChildAt(t);
            e instanceof SevenDaySignItem && (e.index = t)
        }
    }, e.prototype.onTap = function (t) {
        var e = ConfigData.getKeyStr("www_360"), n = SevenDaySignData.getSignData(), a = n ? n.timestamp : 0,
            i = n ? n.count : 0, o = AccountData.serverTime() + egret.getTimer().valueOf();
        return i >= 7 || DateTool.makeTime(a) == DateTool.makeTime(o) ? void ControllAlert.show("" + e) : void this.lingqu(i, !1)
    }, e.prototype.onDoubleTap = function (t) {
        var e = this, n = ConfigData.getKeyStr("www_360"), a = SevenDaySignData.getSignData(), i = a ? a.timestamp : 0,
            o = a ? a.count : 0, r = AccountData.serverTime() + egret.getTimer().valueOf();
        return o >= 7 || DateTool.makeTime(i) == DateTool.makeTime(r) ? void ControllAlert.show("" + n) : void("share" == AppConfig.sevenSign_lingqu ? ShareConstant.shareToGroup(function (t) {
            t && (e.lingqu(o, !0), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "share", "share16_suc", "")))
        }, this) : AdConstant.lookRewardAd(function (t) {
            t && (e.lingqu(o, !0), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "ad", "ad16_suc", "")))
        }, this))
    }, e.prototype.lingqu = function (t, e) {
        var n = ConfigData.getKeyStr("www_361"), a = ConfigData.getKeyStr("www_362"),
            i = ConfigData.getKeyStr("www_363"), o = SevenDaySignData.getConfigByIndex(t);
        switch (o.rewardType) {
            case 0:
                var r = RoleData.getRole(), s = BattleConstant.getAutoDps(), l = s.mul(3600 * o.rewardValue),
                    h = l.mul(e ? 2 : 1);
                r.gold = r.gold.add(h), RoleData.putRole(r), ControllAlert.show(n + " " + StringUtil.decimalFormat(l) + (e ? "x2" : ""));
                break;
            case 1:
                var r = RoleData.getRole();
                r.jewel += Number(o.rewardValue) * (e ? 2 : 1), RoleData.putRole(r), ControllAlert.show(a + " " + o.rewardValue + (e ? "x2" : ""));
                break;
            case 2:
                LuckyBigZhuanPanData.updateZPQ(o.rewardValue * (e ? 2 : 1)), ControllAlert.show(i + " " + o.rewardValue + (e ? "x2" : ""))
        }
        var u = AccountData.serverTime() + egret.getTimer().valueOf();
        SevenDaySignData.updateSign(u, t + 1);
        var c = this.itemConstainer.getChildAt(t);
        c instanceof SevenDaySignItem && (c.index = t), this.onClose()
    }, e.prototype.dispose = function () {
        platform.hideBannerAd(), this.doubleBtn && this.doubleBtn.dispose(), this.getBtn && this.getBtn.dispose(), SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", e.AniAdKey), t.prototype.dispose.call(this)
    }, e.AniAdKey = "SevenDaySignPanel", e.AniAdKey1 = "SevenDaySignPanel_1", e
}(BaseAlertPanel);
__reflect(SevenDaySignPanel.prototype, "SevenDaySignPanel");
var InviteListItem = function (t) {
    function e(e) {
        var n = t.call(this) || this;
        return n.config = e, n
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.www_139.text = ConfigData.getKeyStr("www_139"), this.tipsLabel.text = ConfigData.getKeyStr("www_140"), this.getBtn.label = ConfigData.getKeyStr("www_141"), this.initUI(), this.addImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this)
    }, e.prototype.onShare = function () {
        ShareConstant.setCurrentShareGroup(4), ShareConstant.shareToGroup(function (t) {
            var e = ConfigData.getKeyStr("www_142");
            ControllAlert.show("" + e), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "getreward", "getreward9", ""))
        }, this)
    }, e.prototype.initUI = function () {
        var t = this, e = InviteData.getInviteList();
        if (e || (e = []), this.config) {
            if (this.getBtn) if (InviteData.checkisFinish(this.config.id)) {
                this.getBtn.setEnable(!1);
                var n = ConfigData.getKeyStr("www_143");
                this.getBtn.label = "" + n
            } else if (this.config.needValue > e.length) {
                var a = this.getBtn.getChildAt(0);
                a.source = "wddx_bt_002";
                var i = this.getBtn.getChildAt(1);
                i.textColor = 4286479;
                var o = ConfigData.getKeyStr("www_144");
                this.getBtn.label = "" + o
            }
            var r = parseInt(this.config.id);
            if (e.length > r) {
                var s = e[r], l = s.avatar;
                "" == l ? this.icon.source = "wddx_ic_009" : RES.getResByUrl(l, function (e) {
                    e && (t.icon.texture = e)
                }, this, "image")
            }
            var h = this.config.tips.split("#");
            this.tipsLabel && (this.tipsLabel.textFlow = [{text: "" + h[0]}, {
                text: "" + h[1],
                style: {textColor: 13518028}
            }, {text: "" + h[2]}])
        }
        this.getBtn && this.getBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onGetBtn, this), this.logo && (3 == this.config.type ? this.logo.source = "wddx_ic_017" : 2 == this.config.type && (this.logo.source = "wddx_ic_016"))
    }, e.prototype.onGetBtn = function () {
        var t = ConfigData.getKeyStr("www_145");
        if (this.getBtn.label == "" + t) return void this.onShare();
        switch (this.config.type) {
            case 0:
                MagicData.addMagicCount(this.config.rewardValue);
                var e = ConfigData.getKeyStr("www_146");
                ControllAlert.show("" + e), BasePanel.currentPanel.onMagicBtn();
                break;
            case 1:
                if (InviteData.isMinutes5()) {
                    var n = ConfigData.getKeyStr("www_147");
                    return void ControllAlert.show("" + n)
                }
                var a = ConfigData.getKeyStr("www_148");
                ControllAlert.show("" + a), InviteData.updateMinutes5State(this.config.rewardValue);
                break;
            case 2:
                var i = RoleData.getRole();
                i.jewel += this.config.rewardValue, RoleData.putRole(i);
                var o = ConfigData.getKeyStr("www_149");
                ControllAlert.show(o + "+" + this.config.rewardValue);
                break;
            case 3:
                var i = RoleData.getRole(), r = BattleConstant.getAutoDps(), s = r.mul(3600 * this.config.rewardValue);
                i.gold = i.gold.add(s), RoleData.putRole(i);
                var l = ConfigData.getKeyStr("www_150");
                ControllAlert.show(l + " " + StringUtil.decimalFormat(s))
        }
        DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "getreward", "getreward10", "")), 1 == this.config.needValue ? DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "invite", "invite1_suc", "")) : 3 == this.config.needValue ? DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "invite", "invite3_suc", "")) : 12 == this.config.needValue && DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "invite", "invite12_suc", "")), InviteData.updateInviteTaskFinishId(this.config.id), this.initUI()
    }, e.prototype.dispose = function () {
        this.addImage && this.addImage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this), this.getBtn && this.getBtn.dispose()
    }, e
}(eui.Component);
__reflect(InviteListItem.prototype, "InviteListItem", ["eui.UIComponent", "egret.DisplayObject"]);
var InvitePanel = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.www_151.text = ConfigData.getKeyStr("www_151"), this.www_152.text = ConfigData.getKeyStr("www_152");
        var e = this;
        GameApi.inviteList("3", function (t) {
            InviteData.putInviteList(t), e.initUI()
        }), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "exposure", "exposure10", "")), this.toggleGroup && (this.toggleGroup.callback = this.onToggleClick, this.toggleGroup.callbackThisObj = this), this.showSDK()
    }, e.prototype.showSDK = function () {
        var t = e.AniAdKey, n = SelfSDKHelper.getInstance(), a = n.getAniAdListByKey(t);
        a && a.length ? n.showAniAdList(t, this.aniAdCon) : n.createAniAD(t, 0, 0, .9, this.aniAdCon)
    }, e.prototype.onToggleClick = function (t) {
        void 0 === t && (t = 0), 0 == t ? this.onGoldBtn() : 1 == t && this.onJewelBtn()
    }, e.prototype.initUI = function () {
        this.onGoldBtn(), AdConstant.showBannerAd()
    }, e.prototype.onGoldBtn = function () {
        var t = this;
        this.toggleGroup.setSelect(0), this.constainer.numChildren > 0 && (this.constainer.$children.forEach(function (t) {
            t instanceof InviteListItem && t.dispose()
        }), this.constainer.removeChildren());
        var e = ConfigData.getInviteList();
        e && e.forEach(function (e) {
            3 == e.type && t.constainer.addChild(new InviteListItem(e))
        })
    }, e.prototype.onJewelBtn = function () {
        var t = this;
        this.toggleGroup.setSelect(1), this.constainer.numChildren > 0 && (this.constainer.$children.forEach(function (t) {
            t instanceof InviteListItem && t.dispose()
        }), this.constainer.removeChildren());
        var e = ConfigData.getInviteList();
        e && e.forEach(function (e) {
            2 == e.type && t.constainer.addChild(new InviteListItem(e))
        })
    }, e.prototype.dispose = function () {
        platform.hideBannerAd();
        for (var e = this.constainer.numChildren, n = 0; e > n; n++) {
            var a = this.constainer.getChildAt(n);
            a instanceof InviteListItem && a.dispose()
        }
        SelfSDKHelper.getInstance().hideSkdDisplay("aniAd", RankPanel.AniAdKey), t.prototype.dispose.call(this)
    }, e.AniAdKey = "InvitePanel", e
}(BaseAlertPanel);
__reflect(InvitePanel.prototype, "InvitePanel");
var MagicListItem = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.tipsState = !0, e.keeping = !1, e
    }

    return __extends(e, t), Object.defineProperty(e.prototype, "type", {
        get: function () {
            return this._type
        }, set: function (t) {
            this._type = t, this.$updateListVeiw()
        }, enumerable: !0, configurable: !0
    }), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.adBtn.label = ConfigData.getKeyStr("www_249"), this.shareBtn.label = ConfigData.getKeyStr("www_250"), this.countLabel.text = ConfigData.getKeyStr("www_251"), this.nameLabel.text = ConfigData.getKeyStr("www_252"), this.adBtn && (this.adBtn.icon = ""), this.shareBtn && (this.shareBtn.icon = ""), this.adBtn && this.adBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onAdBtn, this), this.shareBtn && this.shareBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShareBtn, this), this.addEventListener(egret.Event.ENTER_FRAME, this.onFrame, this)
    }, e.prototype.onFrame = function (t) {
        if (this.timeLabel.textColor = 3355443, this._type && "1" != this._type) {
            var e = ConfigData.getMagicById(this._type), n = MagicData.getMagicById(this._type),
                a = AccountData.serverTime() + egret.getTimer();
            if (!n || a > n.time + 1e3 * e.keepTime) {
                var i = ConfigData.getKeyStr("www_253");
                this.timeLabel.text = i + ":" + e.keepTime + "s", this.tipsState = !0, this.keeping = !1
            } else {
                this.keeping = !0;
                var o = 1e3 * e.keepTime + Math.floor(n.time - a);
                if (this.timeLabel.text = DateTool.formatTime(o), this.timeLabel.textColor = 9758984, "00:00:00" == this.timeLabel.text && this.tipsState) {
                    this.tipsState = !1;
                    var r = ConfigData.getKeyStr("www_254");
                    ControllAlert.show(e.name + ("" + r)), egret.setTimeout(function () {
                        BasePanel.currentPanel instanceof GamePanel && BasePanel.currentPanel.initMagicStateContainer()
                    }, this, 1e3)
                }
            }
        }
    }, e.prototype.$updateListVeiw = function () {
        var t = ConfigData.getMagicById(this._type);
        this.adBtn.visible = "ad" == AppConfig["magic" + this._type], this.shareBtn.visible = "share" == AppConfig["magic" + this._type];
        var e = MagicData.getMagicById(this._type), n = AccountData.serverTime() + egret.getTimer(),
            a = DateTool.makeTime(n);
        if (t) {
            if (this.icon && (this.icon.source = t.resName), this.nameLabel && (this.nameLabel.text = t.name), this.timeLabel) {
                var i = ConfigData.getKeyStr("www_255"), o = ConfigData.getKeyStr("www_257");
                t.keepTime ? this.timeLabel.text = i + ":" + t.keepTime + "s" : this.timeLabel.text = t.rewardValue + ("" + o)
            }
            var r = MagicConstant.getMaxCount(this._type);
            if (this.countLabel) {
                var s = ConfigData.getKeyStr("www_260"), l = ConfigData.getKeyStr("www_259"),
                    h = ConfigData.getKeyStr("www_258"), u = ConfigData.getKeyStr("www_256"),
                    c = e && e.date == a ? e.count : 0;
                if (this.countLabel.text = "" + u + (r - c) + h, c == r && AppConfig.invite_youli) this.adBtn.label = "" + l, this.shareBtn.label = "" + s; else {
                    var g = ConfigData.getKeyStr("www_261"), p = ConfigData.getKeyStr("www_262");
                    this.adBtn.label = "" + g, this.shareBtn.label = "" + p
                }
            }
        }
    }, e.prototype.onAdBtn = function () {
        var t = this, e = ConfigData.getMagicById(this._type), n = AccountData.serverTime() + egret.getTimer(),
            a = DateTool.makeTime(n), i = MagicData.getMagicById(this._type), o = MagicConstant.getMaxCount(this._type),
            r = i && i.date == a ? i.count : 0;
        if (r == o) {
            var s = ConfigData.getKeyStr("www_263"), l = ConfigData.getKeyStr("www_264");
            return void(AppConfig.invite_youli ? (ShareConstant.setCurrentShareGroup(3), ShareConstant.shareToGroup(function (t) {
                console.log("" + s), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "vip", "vipshare", ""))
            }, this, !1, "", null, 8), Alert.alert(new VipPanel)) : ControllAlert.show("" + l))
        }
        if (this.keeping) {
            var h = ConfigData.getKeyStr("www_265");
            return void ControllAlert.show("" + h)
        }
        AdConstant.lookRewardAd(function (n) {
            if (n) e.rewardValue > 0 && t.gainJewel(), t.gainBuff(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "ad", "ad" + (parseInt(t._type) + 8) + "_suc", "")); else {
                var a = ConfigData.getKeyStr("www_266");
                ControllAlert.show("" + a)
            }
        }, this)
    }, e.prototype.onShareBtn = function () {
        var t = this, e = ConfigData.getMagicById(this._type), n = AccountData.serverTime() + egret.getTimer(),
            a = DateTool.makeTime(n), i = MagicData.getMagicById(this._type), o = MagicConstant.getMaxCount(this._type),
            r = i && i.date == a ? i.count : 0;
        if (r == o) {
            var s = ConfigData.getKeyStr("www_267");
            return ControllAlert.show("" + s), void(AppConfig.invite_youli && (ShareConstant.setCurrentShareGroup(3), ShareConstant.shareToGroup(function (t) {
                var e = ConfigData.getKeyStr("www_268");
                console.log("" + e), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "vip", "vipshare", ""))
            }, this, !1, "", null, 8), Alert.alert(new VipPanel)))
        }
        if (this.keeping) {
            var l = ConfigData.getKeyStr("www_269");
            return void ControllAlert.show("" + l)
        }
        ShareConstant.shareToGroup(function (n) {
            n && (e.rewardValue > 0 && t.gainJewel(), t.gainBuff(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "share", "share" + (parseInt(t._type) + 8) + "_suc", "")))
        }, this)
    }, e.prototype.gainJewel = function () {
        var t = ConfigData.getMagicById(this._type), e = RoleData.getRole();
        e.jewel += t.rewardValue, RoleData.putRole(e);
        var n = ConfigData.getKeyStr("www_270"), a = ConfigData.getKeyStr("www_271");
        ControllAlert.show("" + n + t.rewardValue + ("" + a))
    }, e.prototype.gainBuff = function () {
        var t = ConfigData.getMagicById(this._type), e = ConfigData.getKeyStr("www_272"),
            n = ConfigData.getKeyStr("www_273");
        "1" != this._type && t && t.name && ControllAlert.show("" + e + t.name + n), MagicData.updateMagicByType(this._type), this.$updateListVeiw(), BasePanel.currentPanel instanceof GamePanel && BasePanel.currentPanel.onMagicBtn()
    }, e.prototype.dispose = function () {
        this.removeEventListener(egret.Event.ENTER_FRAME, this.onFrame, this), this.shareBtn && this.shareBtn.dispose(), this.adBtn && this.adBtn.dispose()
    }, e
}(eui.Component);
__reflect(MagicListItem.prototype, "MagicListItem", ["eui.UIComponent", "egret.DisplayObject"]), window.MagicListItem = MagicListItem;
var MagicListVeiw = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this);
        var e = 0, n = ConfigData.getMagics();
        for (var a in n) {
            var i = this.container.getChildAt(e);
            i && (i.type = a), e++
        }
    }, e.prototype.refreshUI = function () {
    }, e.prototype.dispose = function () {
        for (var t = this.container.numChildren, e = 0; t > e; e++) {
            var n = this.container.getChildAt(e);
            n instanceof MagicListItem && n.dispose()
        }
        this.container.removeChildren(), this.parent && this.parent.removeChild(this)
    }, e
}(eui.Component);
__reflect(MagicListVeiw.prototype, "MagicListVeiw", ["eui.UIComponent", "egret.DisplayObject"]);
var MagicRedPoint = function (t) {
    function e(e) {
        return t.call(this, e) || this
    }

    return __extends(e, t), e.prototype.update = function () {
        return MagicConstant.isAutoClick() ? !1 : MagicConstant.isTenTimeClick() ? !1 : MagicConstant.doubleSpeed() ? !1 : MagicConstant.doubleGain() ? !1 : !0
    }, e
}(core.BaseRedPoint);
__reflect(MagicRedPoint.prototype, "MagicRedPoint");
var PlayerIntroduceItem = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.nameLabel.text = ConfigData.getKeyStr("www_293"), this.tipsLabel.text = ConfigData.getKeyStr("www_293"), this.www_294.text = ConfigData.getKeyStr("www_294")
    }, e.prototype.refreshUI = function (t, e) {
        this.playerId = t, this.position = e;
        var n = ConfigData.getPlayerById(this.playerId), a = PlayerData.getPlayerById(this.playerId),
            i = n.skill[this.position].openLevel, o = n.skill[this.position].skillId,
            r = ConfigData.getPlayerSkillById(o + "");
        this.icon.source = r.resName, this.nameLabel.text = r.name, this.tipsLabel.text = r.tips, this.openLvLabel.text = i + "", this.luckGroup.visible = !a || !ArrayUtil.contains(a.skills, this.position)
    }, e
}(eui.Component);
__reflect(PlayerIntroduceItem.prototype, "PlayerIntroduceItem", ["eui.UIComponent", "egret.DisplayObject"]), window.PlayerIntroduceItem = PlayerIntroduceItem;
var PlayerIntroducePanel = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.isBackClose = !0, e
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        var e = this;
        t.prototype.childrenCreated.call(this), this.www_300.visible = !1, this.www_295.text = ConfigData.getKeyStr("www_295") + ":", this.www_296.text = ConfigData.getKeyStr("www_296"), this.helpSuc.text = ConfigData.getKeyStr("www_297"), this.nameLabel.text = ConfigData.getKeyStr("www_298"), this.breakthrought.text = ConfigData.getKeyStr("www_299"), this.www_300.text = ConfigData.getKeyStr("www_300"), "share" != AppConfig.invite_bianshen && (this.inviteConstainer.visible = !1);
        var n = ConfigData.getPlayerById(this.playerId), a = PlayerData.getPlayerById(this.playerId);
        if (a && a.inviteNew) {
            "" == a.inviteNew.avatar ? this.inviteAvatar.source = "wddx_ic_009" : RES.getResByUrl(a.inviteNew.avatar, function (t) {
                e.inviteAvatar.texture = t
            }, this, "image");
            var i = ConfigData.getKeyStr("www_301");
            this.helpSuc.text = "" + i
        } else this.addImage && this.addImage.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this);
        var o = (a ? a.level : 0, a ? a.breakthroughLevel : 0),
            r = ["", "touxiang-lv", "touxiang-lan", "touxiang-zi", "touxiang-cheng", "touxiang-hong", "touxiang-1", "touxiang-2", "touxiang-3", "touxiang-4", "touxiang-5"];
        try {
            var s = Math.floor(o / 6);
            this.headKuang && (this.headKuang.source = r[s])
        } catch (l) {
            console.log(l)
        }
        for (var h = o % 6, u = 0; 5 > u; u++) {
            var c = this.starConstainer.getChildAt(u);
            c.visible = h > u
        }
        this.icon.source = n.resName, this.nameLabel && (this.nameLabel.text = n.name), this.levelLabel.text = a ? a.level + "" : "0";
        var g = BattleConstant.getCurrentDpsById(this.playerId);
        this.dpsLabel.text = StringUtil.decimalFormat(g) + (a && a.inviteNew ? "(+100%)" : "");
        var p = ConfigData.getKeyStr("www_302"), d = ConfigData.getKeyStr("www_303");
        this.breakthrought.text = "" + (s + 1) + p + h + d;
        for (var u = 1; 6 >= u; u++) {
            var f = this.skillConstainer.getChildAt(u - 1);
            f.refreshUI(this.playerId, u + "")
        }
        this.showSDK()
    }, e.prototype.showSDK = function () {
        var t = e.AniAdKey, n = SelfSDKHelper.getInstance();
        n.getAniAdListByKey(t);
        n.createFavList(20, 0, 1, 4, 1, this.favlistCon)
    }, e.prototype.onShare = function () {
        ShareConstant.setCurrentShareGroup(2), ShareConstant.shareToGroup(function (t) {
            if (t) {
                var e = ConfigData.getKeyStr("www_304");
                ControllAlert.show("" + e)
            }
        }, this)
    }, e.prototype.dispose = function () {
        this.addImage && this.addImage.hasEventListener(egret.TouchEvent.TOUCH_TAP) && this.addImage.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onShare, this), SelfSDKHelper.getInstance().hideSkdDisplay("tryGame"), t.prototype.dispose.call(this)
    }, e.AniAdKey = "PlayerIntroducePanel", e
}(BaseAlertPanel);
__reflect(PlayerIntroducePanel.prototype, "PlayerIntroducePanel");
var PlayerListItem = function (t) {
    function e(e) {
        var n = t.call(this) || this;
        return n.type = e, n
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n), "upLevelBtn" == e && (this.upLevelBtn.type = this.type)
    }, e.prototype.childrenCreated = function () {
        if (t.prototype.childrenCreated.call(this), this.nameLabel.text = ConfigData.getKeyStr("www_305") + "1", this.levelLabel.text = ConfigData.getKeyStr("www_306") + ":9999999", this.tipsLabel.text = ConfigData.getKeyStr("www_307") + ":9999999", this.tipsLabel0.text = ConfigData.getKeyStr("www_308") + "+10", this.skillBtn.label = "" + ConfigData.getKeyStr("www_309"), this.skillBtn.getChildAt(2).text = "" + ConfigData.getKeyStr("www_310"), this.luckSkillBtn.getChildAt(3).text = "" + ConfigData.getKeyStr("www_311"), this.buyBtn.getChildAt(3).text = "" + ConfigData.getKeyStr("www_312"), this.shareBuyBtn.label = "" + ConfigData.getKeyStr("www_313"), this.shareBuyBtn.getChildAt(1).text = "" + ConfigData.getKeyStr("www_314"), this.refreshUI(), this.upLevelBtn && this.upLevelBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onUpLevel, this), this.playerImg && this.playerImg.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSkillsDetailsBtn, this), this.skillConstainer && this.skillConstainer.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onSkillsDetailsBtn, this), this.skillBtn) {
            var e = this.skillBtn.getChildAt(1);
            "share" == AppConfig.invite_bianshen ? e.visible = !1 : e.visible = !0, this.skillBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onSkillsDetailsBtn, this)
        }
    }, e.prototype.refreshUI = function () {
        var t = ConfigData.getKeyStr("www_315"), e = ConfigData.getKeyStr("www_316"),
            n = ConfigData.getKeyStr("www_317"), a = ConfigData.getKeyStr("www_318"),
            i = ConfigData.getKeyStr("www_319"), o = ConfigData.getKeyStr("www_320"),
            r = ConfigData.getKeyStr("www_321"), s = ConfigData.getKeyStr("www_322"),
            l = ConfigData.getKeyStr("www_323"), h = ConfigData.getKeyStr("www_324"),
            u = (ConfigData.getKeyStr("www_325"), ConfigData.getPlayerById(this.type)),
            c = PlayerData.getPlayerById(this.type);
        if (this.nameLabel && (c && c.inviteNew ? this.nameLabel.textFlow = [{text: "" + u.name}, {
            text: " " + t + "+100%",
            style: {textColor: 5350672, size: 18}
        }] : this.nameLabel.text = u.name), this.playerImg && "" != u.resName) {
            var g = RES.getRes(u.resName);
            g && (this.playerImg.width = g.$bitmapWidth, this.playerImg.height = g.$bitmapHeight, this.playerImg.texture = g)
        }
        var p = c ? c.level : 0, d = c ? c.breakthroughLevel : 0,
            f = ["", "touxiang-lv", "touxiang-lan", "touxiang-zi", "touxiang-cheng", "touxiang-hong", "touxiang-1", "touxiang-2", "touxiang-3", "touxiang-4", "touxiang-5"];
        try {
            var C = Math.floor(d / 6);
            this.playerImgbg && (this.playerImgbg.source = f[C])
        } catch (y) {
            console.log(y)
        }
        for (var v = d % 6, w = 0; 5 > w; w++) {
            var D = this.starConstainer.getChildAt(w);
            D.visible = v > w
        }
        this.levelLabel && (this.levelLabel.text = e + ":" + p);
        var _ = BattleConstant.getCurrentDpsById(this.type);
        if (this.lastDps) {
            if (-1 == this.lastDps.comparedTo(_)) {
                var m = _.minus(this.lastDps);
                this.lastDps = _, this.playAddDps(m)
            }
        } else this.lastDps = _;
        if (this.tipsLabel && (this.tipsLabel.text = n + ":" + StringUtil.decimalFormat(_)), this.skillBtn) {
            var A = c && c.inviteNew ? "" + a : "" + i;
            this.skillBtn.label = A, A == "" + i && p > 0 ? egret.Tween.get(this.skillBtn, {loop: !0}).to({
                scaleX: 1.1,
                scaleY: 1.1
            }, 400).to({
                scaleX: 1,
                scaleY: 1
            }, 200).wait(500) : egret.Tween.removeTweens(this.skillBtn), this.skillBtn.setEnable(p > 0)
        }
        var S = 1;
        if (c) {
            this.upLevelBtn.visible = !0, this.luckSkillBtn.visible = !1, this.buyBtn.visible = !1, this.shareBuyBtn.visible = !1;
            var B = c.skills;
            if (S = ArrayUtil.max(B), null == S && (S = 0), 6 == S) ; else {
                S++;
                var T = u.skill[S + ""].openLevel, b = u.skill[S + ""].skillId, k = ConfigData.getPlayerSkillById(b);
                if (this.luckSkillBtn && p >= T && 100 != p) {
                    this.luckSkillBtn.visible = !0, this.upLevelBtn.visible = !1;
                    var R = PlayerConstant.getUpLevelCost(this.type, p, d);
                    this.luckSkillBtn.label = "" + StringUtil.decimalFormat(R.mul(3)), this.luckSkillBtn.setCallBack(egret.TouchEvent.TOUCH_BEGIN, this.onLuckSkill(S), this)
                }
            }
            var I = this.getChildAt(0);
            ColorUtil.clearGray(I)
        } else {
            this.upLevelBtn.visible = !1;
            var I = this.getChildAt(0);
            if (ColorUtil.setGray(I), this.buyBtn) {
                var R = PlayerConstant.getUpLevelCost(this.type, c ? c.level : 0, c ? c.breakthroughLevel : 0);
                this.buyBtn.label = StringUtil.decimalFormat(R), this.buyBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onUpLevel, this)
            }
            this.shareBuyBtn && (this.shareBuyBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onShareBuyBtn, this), "ad" == AppConfig.player_buy || "ad" == ShareConstant.getCurrentActionType(), "share" != AppConfig.player_buy && (this.shareBuyBtn.label = "" + o))
        }
        for (var P = 1; 6 >= P; P++) {
            var b = u.skill[P + ""].skillId, k = ConfigData.getPlayerSkillById(b),
                x = this.skillConstainer.getChildAt(P - 1);
            x && (x.source = k.resName, B && -1 != B.indexOf(P) ? ColorUtil.clearGray(x) : ColorUtil.setGray(x))
        }
        var L = GuideData.currentOpt();
        if (4 > L && this.shareBuyBtn.setEnable(!1), 2 == L && this.type == PlayerConstant.HEAD_ID) {
            var O = PlayerConstant.getUpLevelCost("0", 1, 0);
            1 == RoleData.getRole().gold.comparedTo(O) && GuideManager.getInstance().show(this.upLevelBtn, this.upLevelBtn.parent, "" + r)
        } else if (3 == L && "1" == this.type) {
            var E = PlayerConstant.getUpLevelCost("1", 0, 0);
            1 == RoleData.getRole().gold.comparedTo(E) && GuideManager.getInstance().show(this.buyBtn, this.buyBtn.parent, "" + s)
        } else if (4 == L && "1" == this.type) {
            var E = PlayerConstant.getUpLevelCost("1", c.level, 0);
            1 == RoleData.getRole().gold.comparedTo(E) && GuideManager.getInstance().show(this.upLevelBtn, this.upLevelBtn.parent, "" + l)
        } else if (5 == L && "2" == this.type) {
            var E = PlayerConstant.getUpLevelCost("2", 0, 0);
            1 == RoleData.getRole().gold.comparedTo(E) && GuideManager.getInstance().show(this.buyBtn, this.buyBtn.parent, "" + h)
        }
    }, e.prototype.onLuckSkill = function (t) {
        var e = this, n = ConfigData.getKeyStr("www_325");
        return function () {
            var a = PlayerData.getPlayerById(e.type), i = a ? a.level : 0, o = a ? a.breakthroughLevel : 0,
                r = PlayerConstant.getUpLevelCost(e.type, i, o);
            r = r.mul(3);
            var s = RoleData.getRole();
            if (-1 == s.gold.comparedTo(r)) return ControllAlert.show("" + n), void(Object.keys(PlayerData.getOtherPlayers()).length >= 1 && Alert.alert(new PlusGoldPanel));
            s.gold = s.gold.minus(r), RoleData.putRole(s);
            var a = PlayerData.getPlayerById(e.type);
            a.skills ? a.skills.push(t) : a.skills = [t], PlayerData.updatePlayer(e.type, a), e.refreshUI()
        }
    }, e.prototype.onUpLevel = function (t) {
        var e = ConfigData.getKeyStr("www_325"), n = ConfigData.getKeyStr("www_326"),
            a = ConfigData.getPlayerById(this.type), i = PlayerData.getPlayerById(this.type), o = i ? i.level : 0,
            r = i ? i.breakthroughLevel : 0, s = PlayerConstant.getUpLevelCost(this.type, o, r);
        if (i && 100 == o) {
            if (r == PlayerConstant.getMaxBreakthroughLevel(this.type)) return void ControllAlert.show("" + n);
            s = s.mul(10)
        }
        var l = RoleData.getRole(), h = 1;
        if (10 == PlayerData.isClass10BtnState && 100 > o && t.currentTarget.hashCode != this.buyBtn.hashCode) {
            var u = i.skills, c = ArrayUtil.max(u);
            null == c && (c = 0);
            var g = 100;
            6 > c && (c++, g = a.skill[c + ""].openLevel), h = g - o > 10 ? 10 : g - o;
            for (var p = 1; h > p; p++) {
                var d = o + p, f = PlayerConstant.getUpLevelCost(this.type, d, r);
                if (f && (s = s.add(f)), -1 == l.gold.comparedTo(s)) {
                    if (h = p - 1, 0 == h) return ControllAlert.show("" + e), void(Object.keys(PlayerData.getOtherPlayers()).length >= 1 && Alert.alert(new PlusGoldPanel));
                    f && (s = s.minus(f));
                    break
                }
            }
        }
        if (-1 == l.gold.comparedTo(s)) return ControllAlert.show("" + e), void(Object.keys(PlayerData.getOtherPlayers()).length >= 1 && Alert.alert(new PlusGoldPanel));
        if (l.gold = l.gold.minus(s), RoleData.putRole(l), i) i.level += h; else {
            var a = ConfigData.getPlayerById(this.type);
            i = new Player, i.type = parseInt(this.type);
            var C = PlayerData.getPlayerNumber();
            2 == C ? DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "player", "player2", "")) : 4 == C ? DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "player", "player4", "")) : 6 == C ? DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "player", "player6", "")) : 8 == C ? DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "player", "player8", "")) : 11 == C && DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "player", "player11", "")), Alert.alert(new UnlockPLayer(this.type))
        }
        i.level > 100 && (i.breakthroughLevel++, i.level = 1, i.skills = [], Alert.alert(new BreakThroughSuc(this.type))), PlayerData.updatePlayer(this.type, i);
        var y = GuideData.currentOpt();
        2 == y && this.type == PlayerConstant.HEAD_ID ? (GuideData.updateCurrentOpt(), GuideManager.getInstance().hide()) : 3 != y && 4 != y || "1" != this.type ? 5 == y && "2" == this.type && (GuideData.updateCurrentOpt(), GuideManager.getInstance().hide(), BasePanel.currentPanel.guideBallVeiwClick()) : (GuideData.updateCurrentOpt(), GuideManager.getInstance().hide()), this.refreshUI(), this.upLevelBtn.refreshUI(), this.playMc(), this.dispatchEventWith(GameEvent.ADD_GOLD_EVENT, !0, {gold: -s}), this.dispatchEventWith(GameEvent.REFRESH_PLAYER_MODEL, !0)
    }, e.prototype.onShareBuyBtn = function () {
        var t = this, e = ConfigData.getKeyStr("www_327"), n = ConfigData.getKeyStr("www_328"),
            a = ConfigData.getKeyStr("www_329");
        "share" == AppConfig.player_buy ? ShareConstant.shareToGroup(function (n) {
            if (n) {
                var a = (ConfigData.getPlayerById(t.type), new Player);
                a.type = parseInt(t.type), PlayerData.updatePlayer(t.type, a), t.refreshUI(), t.upLevelBtn.refreshUI(), t.dispatchEventWith(GameEvent.REFRESH_PLAYER_MODEL, !0), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "share", "share6_suc", "")), Alert.alert(new UnlockPLayer(t.type))
            } else ControllAlert.show("" + e)
        }, this, parseInt(this.type) > 7, "" + n) : AdConstant.lookRewardAd(function (e) {
            if (e) {
                var n = new Player;
                n.type = parseInt(t.type), PlayerData.updatePlayer(t.type, n), t.refreshUI(), t.upLevelBtn.refreshUI(), t.dispatchEventWith(GameEvent.REFRESH_PLAYER_MODEL, !0), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "ad", "ad6_suc", "")), Alert.alert(new UnlockPLayer(t.type))
            } else ControllAlert.show("" + a)
        }, this)
    }, e.prototype.onSkillsDetailsBtn = function (t) {
        var e = PlayerData.getPlayerById(this.type);
        e && e.inviteNew || t.currentTarget.hashCode != this.skillBtn.hashCode || (DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "getreward", "getreward6", "")), "share" == AppConfig.invite_bianshen || AdConstant.lookRewardAd(function (t) {
            if (t) {
                var e = ConfigData.getKeyStr("www_330");
                ControllAlert.show("" + e)
            }
        }, this));
        var n = new PlayerIntroducePanel;
        n.playerId = this.type, Alert.alert(n)
    }, e.prototype.playAddDps = function (t) {
        var e = ConfigData.getKeyStr("www_331");
        if (this.tipsLabel0) {
            var n = new eui.Label;
            n.textColor = this.tipsLabel0.textColor, n.stroke = this.tipsLabel0.stroke, n.strokeColor = this.tipsLabel0.strokeColor, n.size = this.tipsLabel0.size, n.x = this.tipsLabel0.x, n.y = this.tipsLabel0.y;
            var a = e + "+" + StringUtil.decimalFormat(t);
            n.text = a, this.addChild(n), egret.Tween.get(n).to({y: n.y - 100, alpha: .3}, 800).call(function (t) {
                t.parent && t.parent.removeChild(t)
            }, this, [n])
        }
    }, e.prototype.playMc = function () {
        var t = this;
        if (this.upLevelMc || (this.upLevelMc = MovieClipManager.getInstance().getMovieClicp("upLevel", "xiao_eff"), this.upLevelMc.x = this.playerImgbg.x - 83, this.upLevelMc.y = this.playerImgbg.y - 37, this.addChild(this.upLevelMc)), this.upLevelMc) {
            this.upLevelMc.visible = !0, this.upLevelMc.gotoAndPlay(0, 1);
            var e = function (n) {
                t.upLevelMc.removeEventListener(egret.MovieClipEvent.COMPLETE, e, t), t.upLevelMc.stop(), t.upLevelMc.visible = !1
            };
            this.upLevelMc.addEventListener(egret.MovieClipEvent.COMPLETE, e, this)
        }
    }, e.prototype.dispose = function () {
        this.upLevelBtn && this.upLevelBtn.dispose(), this.luckSkillBtn && this.luckSkillBtn.dispose(), this.buyBtn && this.buyBtn.dispose(), this.shareBuyBtn && this.shareBuyBtn.dispose(), this.playerImg && this.playerImg.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSkillsDetailsBtn, this), this.skillConstainer && this.skillConstainer.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onSkillsDetailsBtn, this), this.skillBtn && (egret.Tween.removeTweens(this.skillBtn), this.skillBtn.dispose())
    }, e
}(eui.Component);
__reflect(PlayerListItem.prototype, "PlayerListItem", ["eui.UIComponent", "egret.DisplayObject"]);
var PlayerListVeiw = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.initUI()
    }, e.prototype.initUI = function () {
        var t = ConfigData.getPlayer(), e = 0;
        for (var n in t) {
            var a = PlayerData.getPlayerById(n), i = this.container.getChildByName(n);
            if (i) {
                if (!a) {
                    this.container.addChildAt(i, 0);
                    break
                }
                this.container.addChildAt(i, e), e++
            } else {
                if (i = new PlayerListItem(n), i.name = n, i.width = this.container.width, i.height = 110, !a) {
                    this.container.addChildAt(i, 0);
                    break
                }
                this.container.addChildAt(i, e), e++
            }
        }
    }, e.prototype.refreshUI = function () {
        for (var t = this.container.numChildren, e = 0; t > e; e++) {
            var n = this.container.getChildAt(e);
            n instanceof PlayerListItem && n.refreshUI()
        }
    }, e.prototype.dispose = function () {
        for (var t = this.container.numChildren, e = 0; t > e; e++) {
            var n = this.container.getChildAt(e);
            n instanceof PlayerListItem && n.dispose()
        }
        this.container.removeChildren(), this.parent && this.parent.removeChild(this)
    }, e
}(eui.Component);
__reflect(PlayerListVeiw.prototype, "PlayerListVeiw", ["eui.UIComponent", "egret.DisplayObject"]);
var SkillListItem = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), Object.defineProperty(e.prototype, "type", {
        set: function (t) {
            this._type = t
        }, enumerable: !0, configurable: !0
    }), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.buyBtn.label = ConfigData.getKeyStr("www_370") + "x10", this.tips.text = ConfigData.getKeyStr("www_371") + " +5%\n" + ConfigData.getKeyStr("www_372") + " +7%", this.nameLabel.text = ConfigData.getKeyStr("www_373") + "*10000000000", this.buyBtn && this.buyBtn.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onBuyBtn, this), this.$updateListVeiw()
    }, e.prototype.onBuyBtn = function () {
        var t = ConfigData.getKeyStr("www_374"), e = ConfigData.getKeyStr("www_375");
        Logger.log("购买技能" + this._type);
        var n = ConfigData.getSkillById(this._type), a = SkillData.getSkillById(this._type);
        if (!n) return void Logger.log("技能配置错误:" + this._type);
        if (a && a.level >= n.maxLevel) return void Logger.log("技能满级:" + this._type);
        var i = RoleData.getRole(), o = a ? a.level : 0;
        if (i.jewel < n.growCost * o) return ControllAlert.show("" + t), void Alert.alert(new PlusGoldPanel("jewel"));
        i.jewel -= n.growCost * o, RoleData.putRole(i), SkillData.upgradeSkill(this._type);
        var n = ConfigData.getSkillById(this._type);
        n && ControllAlert.show("" + n.name + e + "！"), this.playMc(), this.$updateListVeiw(), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "getreward", "getreward1" + this._type, ""))
    }, e.prototype.$updateListVeiw = function () {
        var t = ConfigData.getKeyStr("www_376"), e = ConfigData.getKeyStr("www_377"),
            n = ConfigData.getKeyStr("www_378"), a = ConfigData.getKeyStr("www_379"),
            i = ConfigData.getKeyStr("www_380"), o = ConfigData.getSkillById(this._type),
            r = SkillData.getSkillById(this._type);
        if (o && (this.icon && (this.icon.source = o.iconName), this.nameLabel && (this.nameLabel.text = o.name), this.buyBtn)) if (r && r.level >= o.maxLevel) this.buyBtn.label = "Max", this.buyBtn.dispose(); else {
            var s = r ? r.level : 0;
            this.buyBtn.label = 0 == s ? "" + t : o.growCost * s + ""
        }
        if (this.tips) {
            if (r) if (r.level == o.maxLevel) this.tips.text = o.buffTimes * r.level * 100 + "%"; else {
                var l = Math.floor(o.buffTimes * r.level * 100), h = Math.floor(o.buffTimes * (r.level + 1) * 100);
                this.tips.textFlow = [{text: e + " +" + l + "%"}, {text: "\n"}, {text: n + " +" + h + "%"}]
            } else this.tips.text = a + " +0%\n" + (i + " +") + 100 * o.buffTimes + "%";
            this.curLv && (this.curLv.text = "LV:" + (r && r.level ? r.level : 0))
        }
    }, e.prototype.playMc = function () {
        var t = this;
        if (this.upLevelMc || (this.upLevelMc = MovieClipManager.getInstance().getMovieClicp("upLevel", "xiao_eff"), this.upLevelMc.x = this.icon.x - 83, this.upLevelMc.y = this.icon.y - 37, this.addChild(this.upLevelMc)), this.upLevelMc) {
            this.upLevelMc.visible = !0, this.upLevelMc.gotoAndPlay(0, 1);
            var e = function (n) {
                t.upLevelMc.removeEventListener(egret.MovieClipEvent.COMPLETE, e, t), t.upLevelMc.stop(), t.upLevelMc.visible = !1
            };
            this.upLevelMc.addEventListener(egret.MovieClipEvent.COMPLETE, e, this)
        }
    }, e.prototype.dispose = function () {
        this.buyBtn && this.buyBtn.dispose()
    }, e
}(eui.Component);
__reflect(SkillListItem.prototype, "SkillListItem", ["eui.UIComponent", "egret.DisplayObject"]);
var SkillListVeiw = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e.prototype.partAdded = function (e, n) {
        t.prototype.partAdded.call(this, e, n)
    }, e.prototype.childrenCreated = function () {
        t.prototype.childrenCreated.call(this), this.initUI()
    }, e.prototype.initUI = function () {
        var t = ConfigData.getSkills();
        for (var e in t) {
            var n = new SkillListItem;
            n.type = e, n.width = 154, n.height = this.container.height, this.container.addChild(n)
        }
    }, e.prototype.refreshUI = function () {
    }, e.prototype.dispose = function () {
        for (var t = this.container.numChildren, e = 0; t > e; e++) {
            var n = this.container.getChildAt(e);
            n instanceof SkillListItem && n.dispose()
        }
        this.container.removeChildren(), this.parent && this.parent.removeChild(this)
    }, e
}(eui.Component);
__reflect(SkillListVeiw.prototype, "SkillListVeiw", ["eui.UIComponent", "egret.DisplayObject"]);
var BaseData = function (t) {
    function e() {
        return t.call(this) || this
    }

    return __extends(e, t), e
}(Object);
__reflect(BaseData.prototype, "BaseData");
var CfgCollect = function () {
    function t() {
    }

    return t
}();
__reflect(CfgCollect.prototype, "CfgCollect");
var CfgCollectGroup = function () {
    function t() {
    }

    return t
}();
__reflect(CfgCollectGroup.prototype, "CfgCollectGroup");
var CfgInvite = function () {
    function t() {
    }

    return t
}();
__reflect(CfgInvite.prototype, "CfgInvite");
var CfgMagic = function () {
    function t() {
    }

    return t
}();
__reflect(CfgMagic.prototype, "CfgMagic");
var CfgNormalSkill = function () {
    function t() {
    }

    return t
}();
__reflect(CfgNormalSkill.prototype, "CfgNormalSkill");
var CfgOre = function () {
    function t() {
    }

    return t
}();
__reflect(CfgOre.prototype, "CfgOre");
var CfgOreGroup = function () {
    function t() {
    }

    return t
}();
__reflect(CfgOreGroup.prototype, "CfgOreGroup");
var CfgPlayer = function () {
    function t() {
    }

    return t
}();
__reflect(CfgPlayer.prototype, "CfgPlayer");
var CfgPlayerSkill = function () {
    function t() {
    }

    return t
}();
__reflect(CfgPlayerSkill.prototype, "CfgPlayerSkill");
var InviteFinish = function () {
    function t() {
    }

    return t
}();
__reflect(InviteFinish.prototype, "InviteFinish");
var Minutes5 = function () {
    function t() {
    }

    return t
}();
__reflect(Minutes5.prototype, "Minutes5");
var Magic = function () {
    function t(t, e, n) {
        this.date = t, this.time = e, this.count = n
    }

    return t
}();
__reflect(Magic.prototype, "Magic");
var NotEnough_vo = function () {
    function t(t, e, n) {
        this.date = t, this.jewelCount = e, this.jinbiCount = n
    }

    return t
}();
__reflect(NotEnough_vo.prototype, "NotEnough_vo");
var Player = function () {
    function t() {
        this.level = 1, this.breakthroughLevel = 0, this.skills = []
    }

    return t
}();
__reflect(Player.prototype, "Player");
var InviteNewPlayer = function () {
    function t() {
    }

    return t
}();
__reflect(InviteNewPlayer.prototype, "InviteNewPlayer");
var Recycle = function () {
    function t() {
        this.refreshCount = 0
    }

    return t
}();
__reflect(Recycle.prototype, "Recycle");
var RefreshJewel = function () {
    function t(t, e) {
        this.date = t, this.count = e
    }

    return t
}();
__reflect(RefreshJewel.prototype, "RefreshJewel");
var Role = function () {
    function t() {
        this.uid = 1, this.name = "", this.head = "", this.sex = 0, this.province = "", this.gold = new Decimal(0), this.jewel = 0, this.sence = 1, this.floor = 1
    }

    return t
}();
__reflect(Role.prototype, "Role");
var ZhuanPan = function () {
    function t(t, e) {
        this.date = t, this.count = e
    }

    return t
}();
__reflect(ZhuanPan.prototype, "ZhuanPan");
var CfgVip = function () {
    function t() {
    }

    return t
}();
__reflect(CfgVip.prototype, "CfgVip");
var CfgVipReward = function () {
    function t() {
    }

    return t
}();
__reflect(CfgVipReward.prototype, "CfgVipReward");
var Vip = function () {
    function t() {
    }

    return t
}();
__reflect(Vip.prototype, "Vip");
var ThemeAdapter = function () {
    function t() {
    }

    return t.prototype.getTheme = function (t, e, n, a) {
        function i(t) {
            e.call(a, t)
        }

        function o(e) {
            e.resItem.url == t && (RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, o, null), n.call(a))
        }

        "undefined" != typeof generateEUI ? egret.callLater(function () {
            e.call(a, generateEUI)
        }, this) : (RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, o, null), RES.getResByUrl(t, i, this, RES.ResourceItem.TYPE_TEXT))
    }, t
}();
__reflect(ThemeAdapter.prototype, "ThemeAdapter", ["eui.IThemeAdapter"]);
var GameApi = function () {
    function t() {
    }

    return t.login = function (e, n, a) {
        var i = this, o = {};
        n && (o.openid = n), HttpClient.send(o, AppConfig.login_url, function (t) {
            if (-3 == t.ret) return void(a && a(t));
            if (0 != t.ret) {
                var e = ConfigData.getKeyStr("www_45"), n = ConfigData.getKeyStr("www_46"),
                    o = ConfigData.getKeyStr("www_47"), r = ConfigData.getKeyStr("www_48");
                return void platform.showModal("" + e, "" + n + t.ret + o, "" + r, !1, function () {
                    platform.exitMiniProgram(null, null)
                })
            }
            i.initData(t), a && a(t)
        }, function (o) {
            if (i.loginErrorCount++, i.loginErrorCount >= 5) {
                a && a();
                var r = (new Date).getTime();
                return AccountData.putServerTime(r), void DataCenter.unpackData(null)
            }
            t.login(e, n, a)
        }, "POST")
    }, t.initData = function (t) {
        if (t.time) {
            var e = t.time - egret.getTimer();
            AccountData.putServerTime(e)
        }
        t.data && (t.data.openid && AccountData.saveOpenId(t.data.openid), t.data.id && AccountData.setUid(t.data.id), AccountData.putOffLine(t.offline), "object" == typeof t.data.udata ? DataCenter.unpackData(t.data.udata) : DataCenter.unpackData({}))
    }, t.updateData = function (e, n, a) {
        var i = this;
        void 0 === a && (a = !1), a || (this.updateErrorCount = 0);
        var o = AccountData.getOpenId(), r = {openid: o, udata: JSON.stringify(e)};
        HttpClient.send(r, AppConfig.update_url, n, function (a) {
            i.updateErrorCount++, i.updateErrorCount >= 5 || t.updateData(e, n, !0)
        }, "POST")
    }, t.shareCheck = function (e, n, a, i) {
        var o = AccountData.getOpenId(), r = {openid: o, encryptedData: e, iv: n, gettype: a};
        HttpClient.send(r, AppConfig.share_url, i, function (o) {
            t.shareCheck(e, n, a, i)
        }, "GET")
    }, t.inviteList = function (e, n) {
        var a = AccountData.getOpenId(), i = {openid: a, invitetype: e, sharepoint: 1};
        HttpClient.send(i, AppConfig.inviteList_url, n, function (a) {
            t.inviteList(e, n)
        }, "GET")
    }, t.inviteNewSgin = function (e, n) {
        var a = AccountData.getOpenId(), i = {openid: a, invitetype: e, sharepoint: 1};
        HttpClient.send(i, AppConfig.invite_url, function (t) {
            if (n) {
                var a = t && t[e] ? t[e] : [];
                n(a)
            }
        }, function (a) {
            t.inviteNewSgin(e, n)
        }, "GET")
    }, t.getCurrentArea = function (e) {
        var n = AccountData.getOpenId(), a = {openid: n};
        HttpClient.send(a, AppConfig.area_url, function (t) {
            if (e) {
                var n = t ? t : [];
                e(n)
            }
        }, function (n) {
            t.getCurrentArea(e)
        }, "GET")
    }, t.loginErrorCount = 0, t.updateErrorCount = 0, t
}();
__reflect(GameApi.prototype, "GameApi");
var BaseButtonProxy = function () {
    function t(t, e) {
        this._button = t, this._thisObj = e, this._button.setCallBack(egret.TouchEvent.TOUCH_TAP, this.onClickBtn, this)
    }

    return t.prototype.onClickBtn = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (t) {
                switch (t.label) {
                    case 0:
                        1001eturn [4, AssetsManager.getInstance().loadResource("gamegroup")];
                    case 1:
                        return t.sent(), [2]
                }
            })
        })
    }, t
}();
__reflect(BaseButtonProxy.prototype, "BaseButtonProxy");
var GameEvent = function () {
    function t() {
    }

    return t.GAME_DESTROY_EVENT = "GAME_DESTROY_EVENT", t.GAME_FAPAI_OVER_EVENT = "GAME_FAPAI_OVER_EVENT", t.ADD_GOLD_EVENT = "ADD_GOLD_EVENT", t.UPDATE_BLOOD_EVENT = "UPDATE_BLOOD_EVENT", t.REFRESH_PLAYER_MODEL = "REFRESH_PLAYER_MODEL", t.FLOOR_OVER_EVENT = "FLOOR_OVER_EVENT", t
}();
__reflect(GameEvent.prototype, "GameEvent");
var chaow;
!function (t) {
    var e = function () {
        function t() {
            this.unitStrs = ["", "K", "M", "B", "T", "aa", "bb", "cc", "dd", "ee", "ff"], this.unit = 0
        }

        return t.prototype.add = function (t) {
            return this.unit != t.unit && (this.unit < t.unit ? (this.value /= Math.pow(1e3, Math.abs(this.unit - t.unit) + 1), this.unit = t.unit) : (t.value /= Math.pow(1e3, Math.abs(this.unit - t.unit) + 1), t.unit = this.unit)), this.value += t.value, this
        }, t.prototype.minus = function (t) {
            return this.unit != t.unit && (this.unit < t.unit ? (this.value /= Math.pow(1e3, Math.abs(this.unit - t.unit) + 1), this.unit = t.unit) : (t.value /= Math.pow(1e3, Math.abs(this.unit - t.unit) + 1), t.unit = this.unit)), this.value -= t.value, this
        }, t.prototype.multiplication = function (t) {
            for (this.value *= t; this.value < 1 && this.unit > 0;) this.value *= 1e3, this.unit--;
            for (; this.value >= 1e3;) this.value /= 1e3, this.unit++;
            return this
        }, t.prototype.division = function (t) {
            for (this.value /= t; this.value < 1 && this.unit > 0;) this.value *= 1e3, this.unit--;
            for (; this.value >= 1e3;) this.value /= 1e3, this.unit++;
            return this
        }, t.prototype.toString = function () {
            var t = "";
            try {
                t = this.unitStrs[this.unit]
            } catch (e) {
                Logger.log(e), t = ""
            }
            return this.value + t
        }, t.prototype.parse = function (t) {
            var e = t.toString(), n = Math.floor(e.length / 3);
            e.length % 3 == 0 && n--;
            var a = this.unitStrs[n];
            if ("" != a) {
                var i = e.length - 3 * n, o = e.substr(0, i), r = e.substr(i, 2);
                o += "." + r
            }
            this.value = parseInt(o), this.unit = n
        }, t
    }();
    t.Number = e, __reflect(e.prototype, "chaow.Number")
}(chaow || (chaow = {}));
var AssetsManager = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }

    return __extends(e, t), e.prototype.loadInnerResource = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (n) {
                switch (n.label) {
                    case 0:
                        return [4, RES.loadConfig(t + "/default.res.json", t + "/")];
                    case 1:
                        return n.sent(), [4, this.loadResource(e)];
                    case 2:
                        return n.sent(), [2]
                }
            })
        })
    }, e.prototype.loadResource = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var e;
            return __generator(this, function (n) {
                switch (n.label) {
                    case 0:
                        return n.trys.push([0, 2, , 3]), [4, RES.loadGroup(t, 0, null)];
                    case 1:
                        return n.sent(), [3, 3];
                    case 2:
                        return e = n.sent(), console.error(e), [3, 3];
                    case 3:
                        return [2]
                }
            })
        })
    }, e.prototype.downLoadOutResource = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            var n;
            return __generator(this, function (a) {
                switch (a.label) {
                    case 0:
                        return console.log("=======检测资源版本======="), n = platform.getStorageSync("ResComplete"), this.loadOutterResource(function () {
                            t && t.apply(e)
                        }), [2];
                    case 1:
                        return a.sent(), [2]
                }
            })
        })
    }, e.prototype.loadOutterResConfig = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (e) {
                switch (e.label) {
                    case 0:
                        return t = AppConfig.native_file_path, [4, RES.loadConfig(t + ("resource_" + AppConfig.res_version + "/default.res.json"), t + ("resource_" + AppConfig.res_version + "/"))];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, e.prototype.loadOutterResource = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            var e, n, a, i, o, r, s, l;
            return __generator(this, function (h) {
                switch (h.label) {
                    case 0:
                        e = ConfigData.getKeyStr("www_432"), n = ConfigData.getKeyStr("www_433"), a = ConfigData.getKeyStr("www_434"), i = ConfigData.getKeyStr("www_435"), o = ConfigData.getKeyStr("www_436"), r = ConfigData.getKeyStr("www_437"), h.label = 1;
                    case 1:
                        return h.trys.push([1, 3, , 4]), [4, this.loadOutterResConfig()];
                    case 2:
                        return h.sent(), console.log("资源初始化完成"), [3, 4];
                    case 3:
                        return s = h.sent(), console.log("资源配置加载异常:", s), platform.setStorageSync("ResComplete", "false"), platform.showModal("" + e, "" + n, "" + a, !1, function () {
                            platform.exitMiniProgram(null, null)
                        }), [2];
                    case 4:
                        return h.trys.push([4, 6, , 7]), [4, this.loadResource("outResource")];
                    case 5:
                        return h.sent(), console.log("资源初始化完成"), [3, 7];
                    case 6:
                        return l = h.sent(), console.log("资源加载异常:", l), platform.setStorageSync("ResComplete", "false"), platform.showModal("" + i, "" + o, "" + r, !1, function () {
                            platform.exitMiniProgram(null, null)
                        }), [2];
                    case 7:
                        return t && t(), [2]
                }
            })
        })
    }, e
}(BaseSingle);
__reflect(AssetsManager.prototype, "AssetsManager");
var ConfigManager = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }

    return __extends(e, t), e.prototype.initAppConfig = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            var n, a;
            return __generator(this, function (i) {
                if (("iOS" == egret.Capabilities.os || "Android" == egret.Capabilities.os) && (AppConfig.native_file_path = platform.getnativeFilePath() + "/"), n = ConfigData.getAppConfig1()) for (a in n) void 0 != AppConfig[a] && (AppConfig[a] = n[a]);
                return SoundManager.soundPathRoot = AppConfig.native_file_path + ("resource_" + AppConfig.res_version + "/sound/"), DaDianConstant.is_dadian = n.is_dadian, DaDianConstant.sdk_dadian = n.sdk_dadian, AdConstant.bannerAdUnitId = n.bannerAdUnitId, AdConstant.rewardedVideoAdUnitId = n.rewardedVideoAdUnitId, t && t.apply(e, [AppConfig.appConfigUrl, n]), [2]
            })
        })
    }, e.prototype.initShareConfig = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            var n;
            return __generator(this, function (a) {
                return n = {}, t && t.apply(e, [AppConfig.shareConfigUrl, n]), [2]
            })
        })
    }, e.prototype.loadConfig = function (t, e, n) {
        return __awaiter(this, void 0, void 0, function () {
            var a, a;
            return __generator(this, function (i) {
                return t == AppConfig.gameConfigUrl && (a = ConfigData.getGameConfig(), e && e.apply(n, [t, a])), t == AppConfig.bloodConfigUrl && (a = ConfigData.getSenceBlood(), e && e.apply(n, [t, a])), [2]
            })
        })
    }, e
}(BaseSingle);
__reflect(ConfigManager.prototype, "ConfigManager");
var DragonBoneManager = function (t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.createNamePool = [], e
    }

    return __extends(e, t), e.prototype.createAnimate = function (t) {
        if (-1 != this.createNamePool.indexOf(t)) {
            var e = dragonBones.EgretFactory.factory.buildArmatureDisplay(t);
            return e
        }
        var n = RES.getRes(t + "_ske_json"), a = RES.getRes(t + "_tex_json"), i = RES.getRes(t + "_tex_png");
        if (!n || !a || !i) return null;
        var o = dragonBones.EgretFactory.factory;
        o.parseDragonBonesData(n), o.parseTextureAtlasData(a, i), this.createNamePool.push(t);
        var r = o.buildArmatureDisplay(t);
        return r
    }, e
}(BaseSingle);
__reflect(DragonBoneManager.prototype, "DragonBoneManager");
var LayerManager = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }

    return __extends(e, t), e.prototype.init = function (t) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                return this._root ? [2] : (this._root = t, this._senceLayer = new egret.DisplayObjectContainer, this._senceLayer.width = this._root.width, this._senceLayer.height = this._root.height, this._alertLayer = new egret.DisplayObjectContainer, this._alertLayer.width = this._root.width, this._alertLayer.height = this._root.height, this._guideLayer = new egret.DisplayObjectContainer, this._guideLayer.width = this._root.width, this._guideLayer.height = this._root.height, this._guideLayer.touchEnabled = !1, this._tipsLayer = new egret.DisplayObjectContainer, this._tipsLayer.width = this._root.width, this._tipsLayer.height = this._root.height, this._tipsLayer.touchEnabled = !1, this._tipsLayer.touchChildren = !1, this._sdkLayer = new egret.DisplayObjectContainer, this._sdkLayer.width = this._root.width, this._sdkLayer.height = this._root.height, this._sdkLayer.touchEnabled = !1, this._root.addChild(this._senceLayer), this._root.addChild(this._alertLayer), this._root.addChild(this._guideLayer), this._root.addChild(this._tipsLayer), this._root.addChild(this._sdkLayer), [2])
            })
        })
    }, Object.defineProperty(e.prototype, "senceLayer", {
        get: function () {
            return this._senceLayer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "alertLayer", {
        get: function () {
            return this._alertLayer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "guideLayer", {
        get: function () {
            return this._guideLayer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "tipsLayer", {
        get: function () {
            return this._tipsLayer
        }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "sdkLayer", {
        get: function () {
            return this._sdkLayer
        }, enumerable: !0, configurable: !0
    }), e
}(BaseSingle);
__reflect(LayerManager.prototype, "LayerManager");
var MovieClipManager = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }

    return __extends(e, t), e.prototype.getMovieClicp = function (t, e) {
        if (void 0 === e && (e = ""), this._mcDir && this._mcDir[t]) return new egret.MovieClip(this._mcDir[t].movieClipData);
        if (this.initMovieClipFactory(e), !this._mcDataFactory) return Logger.log("MovieClipManager not initMovieClipFactory"), null;
        var n = new egret.MovieClip(this._mcDataFactory.generateMovieClipData(t));
        return n ? this._mcDir ? (this._mcDir[t] = n, new egret.MovieClip(n.movieClipData)) : (this._mcDir = {name: n}, new egret.MovieClip(n.movieClipData)) : (Logger.log("MovieClipManager create failed:" + t), null)
    }, e.prototype.initMovieClipFactory = function (t) {
        var e = RES.getRes(t + "_json"), n = RES.getRes(t + "_png");
        if (!e || !n) return void Logger.log("initMovieClipFactory failed:" + t);
        var a = new egret.MovieClipDataFactory(e, n);
        return a ? void(this._mcDataFactory = a) : void Logger.log("initMovieClipFactory failed:" + t)
    }, e.prototype.destory = function () {
        this._mcDataFactory = null, this._mcDir = null
    }, e
}(BaseSingle);
__reflect(MovieClipManager.prototype, "MovieClipManager");
var SoundManager = function () {
    function t() {
    }

    return t.playSound = function (t, e) {
        if (void 0 === e && (e = 1), !t || "" == t) return void console.log("SOUND NAME ERROR:", t);
        var n = this.soundPathRoot + t + ".mp3";
        platform.playAudio(n, 0 == e, !1)
    }, t.playBgSound = function (t) {
        if (!t || "" == t) return void console.log("SOUND NAME ERROR:", t);
        var e = this.soundPathRoot + t + ".mp3";
        platform.playAudio(e, !0, !0)
    }, t.stopBgSound = function (t) {
        var e = this.soundPathRoot + t + ".mp3";
        platform.stopAudio(e)
    }, t.stopSound = function (t) {
        var e = this.soundPathRoot + t + ".mp3";
        platform.stopAudio(e)
    }, t.setBgSoundValue = function () {
    }, t.clearSound = function () {
    }, t.soundPathRoot = "resource/sound/", t.bgSoundName = null, t
}();
__reflect(SoundManager.prototype, "SoundManager");
var TimerManager = function (t) {
    function e() {
        var e = t.call(this) || this;
        return e.timerArray = [], e
    }

    return __extends(e, t), e.prototype.initTimer = function () {
    }, e
}(BaseSingle);
__reflect(TimerManager.prototype, "TimerManager");
var EgretTimer = function () {
    function t() {
    }

    return t
}();
__reflect(EgretTimer.prototype, "EgretTimer");
var WechatManager = function (t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this
    }

    return __extends(e, t), Object.defineProperty(e.prototype, "onWeiXin", {
        get: function () {
            return window.wx ? !0 : !1
        }, enumerable: !0, configurable: !0
    }), e.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (e) {
                switch (e.label) {
                    case 0:
                        return [4, window.platform.login()];
                    case 1:
                        return t = e.sent(), t && t.code && (console.log("LOGINCODE:" + t.code), AccountData.putWXcode(t.code)), [2]
                }
            })
        })
    }, e.prototype.getUserInfo = function (t, e) {
        return __awaiter(this, void 0, void 0, function () {
            var e, n, a, i, o, r;
            return __generator(this, function (s) {
                switch (s.label) {
                    case 0:
                        return e = AccountData.getwxUser(), [4, platform.getSetting()];
                    case 1:
                        return n = s.sent(), a = n ? n.authSetting["scope.userInfo"] : !1, a && e ? [2] : [4, window.platform.getUserInfo(a)];
                    case 2:
                        return i = s.sent(), o = null, i && i.userInfo && (o = i.userInfo, r = RoleData.getRole(), r || (r = new Role), o && (AccountData.putwxUser(o), r.name = o.nickName, r.sex = o.gender, r.head = o.avatarUrl, r.province = o.province), RoleData.putRole(r), console.log("USERINFO:" + JSON.stringify(o))), t && t.apply(this), [2]
                }
            })
        })
    }, e.prototype.getLaunchOptionsSync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t;
            return __generator(this, function (e) {
                switch (e.label) {
                    case 0:
                        return [4, platform.getLaunchOptionsSync()];
                    case 1:
                        return t = e.sent(), AccountData.putLaunchOption(t), egret.log("LAUNCHOPTION:" + JSON.stringify(t) + "\n"), [2]
                }
            })
        })
    }, e.prototype.getOpenId = function () {
        var t = AccountData.getOpenId(), e = AccountData.getOpenIdTime();
        return console.log(e), console.log(DateTool.makeTime()), e && e == DateTool.makeTime() || (AccountData.saveOpenIdTime(null), t = null), t
    }, e.prototype.getInviteid = function () {
        var t = AccountData.getLaunchOption();
        return t && t.query && t.query.inviteid ? t.query.inviteid : null
    }, e.prototype.getInvitetype = function () {
        var t = AccountData.getLaunchOption();
        return t && t.query && t.query.invitetype ? t.query.invitetype : null
    }, e.prototype.getChannel = function () {
        var t = AccountData.getLaunchOption(), e = t.query && t.query.channel ? t.query.channel : null,
            n = t.query && t.query.mp ? t.query.mp : null;
        return e && AccountData.putChannel(e), n && AccountData.putMp(n), e
    }, e.prototype.doLunchOption = function () {
        var t = ConfigData.getKeyStr("www_438"), e = ConfigData.getKeyStr("www_439"), n = AccountData.getLaunchOption();
        if (n) {
            var a = n.query;
            if (a && a.checkRank && n.shareTicket) {
                var i = new RankPanel;
                i.shareTicket = n.shareTicket, Alert.alert(i)
            }
            a && a.imageUrl && DaDianConstant.send(DaDianConstant.getDadianData(a.sendOpenid, "share", "share_info", a.title + ":" + a.imageUrl + ":" + this.getOpenId())), a && a.mp, (1011 == n.scene || 1012 == n.scene || 1013 == n.scene || 1047 == n.scene || 1048 == n.scene || 1049 == n.scene) && (AppConfig.sdk_gamelist = !1, AppConfig.sdk_suspension = !1, AppConfig.sdk_favlist = !1), console.log("[launchOption.scene]", n.scene);
            var o = RoleData.getAddProgram();
            if (!o && (1104 == n.scene || 1103 == n.scene)) {
                var r = RoleData.getRole();
                r.jewel += 888, RoleData.putRole(r), RoleData.putAddProgram(), egret.setTimeout(function () {
                    ControllAlert.show("" + t, 2e3)
                }, this, 500), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "addprogram", "addprogramsuc", ""))
            }
            var s = AccountData.serverTime() + egret.getTimer().valueOf(), l = RoleData.getFocusGain();
            if (1035 == n.scene && (!l || l != DateTool.makeTime(s))) {
                var r = RoleData.getRole();
                r.jewel += 666, RoleData.putRole(r), RoleData.putFocusGain(DateTool.makeTime(s)), egret.setTimeout(function () {
                    ControllAlert.show("" + e, 2e3)
                }, this, 500), DaDianConstant.send(DaDianConstant.getDadianData(AccountData.getOpenId(), "focus", "focusget", ""))
            }
            AccountData.putLaunchOption(null)
        }
    }, e.prototype.doOnShow = function () {
        platform.onShow(this._onShow)
    }, e.prototype.hideOnShow = function () {
        platform.offShow(this._onShow)
    }, e.prototype._onShow = function (t) {
        var e = ConfigData.getKeyStr("www_440"), n = ConfigData.getKeyStr("www_441"),
            a = ConfigData.getKeyStr("www_442"), i = ConfigData.getKeyStr("www_443"),
            o = ConfigData.getKeyStr("www_444");
        ConfigData.getKeyStr("www_445");
        platform.replayAudio();
        var r = t.query;
        if (egret.log("BACK_WXGAME:" + JSON.stringify(t)), r && r.checkRank && t.shareTicket) {
            var s = new RankPanel;
            s.shareTicket = t.shareTicket, Alert.alert(s)
        }
        if (r && r.imageUrl) {
            var l = r.invitetype ? r.invitetype : null;
            DaDianConstant.send(DaDianConstant.getDadianData(r.sendOpenid, "share", "share_info", r.title + ":" + r.imageUrl + ":" + this.getOpenId() + ":" + l))
        }
        if (ShareConstant.shareId > 0) {
            var h = ShareConstant.callback, u = egret.getTimer().valueOf();
            u - ShareConstant.shareTime >= AppConfig.shareWaittime ? Math.random() >= AppConfig.shareRandomValue ? h && h(!0) : (ShareConstant.cheating++, ShareConstant.shareTime = egret.getTimer().valueOf(), h && h(!1)) : (ShareConstant.shareTime = egret.getTimer().valueOf(), h && h(!1))
        } else if (ShareConstant.shareId < 0) {
            var c = ShareConstant.callback;
            r && r.shareValue && r.shareValue == ShareConstant.shareId && t.shareTicket ? (platform.getShareInfo({
                shareTicket: t.shareTicket,
                success: function (t) {
                    var i = t.encryptedData, o = t.iv;
                    GameApi.shareCheck(i, o, 0, function (t) {
                        0 == t.ret ? c && c(!0) : platform.showModal("", e + "(" + n + ")", "" + a, !1, function () {
                            c && c(!1)
                        })
                    })
                }
            }), ShareConstant.shareId = 0) : r && r.shareValue && r.shareValue == ShareConstant.shareId ? platform.showModal("", "" + i, "" + a, !1, function () {
            }) : platform.showModal("", "" + o, "" + a, !1, function () {
            })
        }
    }, e.prototype.sendOpenDataMassage = function (t) {
        this.openDataContext || (this.openDataContext = platform.getOpenDataContext()), this.openDataContext.postMessage(t)
    }, e
}(BaseSingle);
__reflect(WechatManager.prototype, "WechatManager");
var HeartBeat = function () {
    function t() {
    }

    return t.startHeart = function () {
        null == this.timer && (this.timer = new egret.Timer(this.intervaltime, 0)), this.timer.hasEventListener(egret.TimerEvent.TIMER) || this.timer.addEventListener(egret.TimerEvent.TIMER, this.onTimerFun, this), this.timer.delay = this.intervaltime, this.timer.reset(), this.timer.start()
    }, t.onTimerFun = function (t) {
        console.log("onHeartBeat"), DataCenter.packData()
    }, t.stopHeart = function () {
        null != this.timer && this.timer.removeEventListener(egret.TimerEvent.TIMER, this.onTimerFun, this)
    }, t.intervaltime = 6e4, t
}();
__reflect(HeartBeat.prototype, "HeartBeat");
var HttpClient = function () {
    function t() {
    }

    return t.send = function (e, n, a, i, o) {
        return void 0 === a && (a = null), void 0 === i && (i = null), void 0 === o && (o = "GET"), __awaiter(this, void 0, void 0, function () {
            var r, s, l, h;
            return __generator(this, function (u) {
                return r = new egret.HttpRequest, s = function (t) {
                    r.removeEventListener(egret.Event.COMPLETE, s, r), r.removeEventListener(egret.IOErrorEvent.IO_ERROR, l, r);
                    var e = null;
                    try {
                        e = JSON.parse(r.response)
                    } catch (t) {
                        console.error("HttpClient parse error", t)
                    }
                    null != a && a(e), console.log("Http response:", e)
                }, l = function (t) {
                    r.removeEventListener(egret.Event.COMPLETE, s, r), r.removeEventListener(egret.IOErrorEvent.IO_ERROR, l, r), null != i && i(t)
                }, r.addEventListener(egret.Event.COMPLETE, s, r), r.addEventListener(egret.IOErrorEvent.IO_ERROR, l, r), r.responseType = egret.HttpResponseType.TEXT, h = t.getRequestPars(e), "GET" == o ? (console.log("Http request:" + n + "?" + h), r.open(n + "?" + h, egret.HttpMethod.GET), r.send()) : "POST" == o && (r.open(n, egret.HttpMethod.POST), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), console.log("Http request:" + n + "?", e), r.send(h)), [2]
            })
        })
    }, t.getRequestPars = function (t) {
        var e = "";
        for (var n in t) e += n + "=" + t[n] + "&";
        return e.substr(0, e.length - 1)
    }, t.sendWxrequest = function (t, e, n, a, i) {
        var o = this;
        void 0 === n && (n = null), void 0 === a && (a = null), void 0 === i && (i = "GET");
        var r = ConfigData.getKeyStr("www_423"), s = ConfigData.getKeyStr("www_424"),
            l = ConfigData.getKeyStr("www_425"), h = ConfigData.getKeyStr("www_426"),
            u = ConfigData.getKeyStr("www_427"), c = ConfigData.getKeyStr("www_428");
        return WechatManager.getInstance().onWeiXin ? (console.log("HTTP request:" + e + " " + JSON.stringify(t)), void platform.request(e, t, i, "json", function (t) {
            if (o.timeout[e] && (delete o.timeout[e], Logger.log("请求成功,删除超时数据")), console.log("HTTP reponseData:", t), t && t.data) {
                var a = t.data;
                n && n(a)
            }
        }, function (t) {
            Logger.log("HTTP failed:", t);
            var n = o.timeout[e];
            if (n ? n++ : n = 1, 6 > n) {
                o.timeout[e] = n;
                var i = t.data, g = a;
                platform.showModal("" + r, "" + s + n + l + "," + h, "" + u, !1, function () {
                    g && g.apply(o, [i])
                })
            } else delete o.timeout[e], Logger.log("超时5次,删除超时数据"), platform.showModal("" + r, "" + s + n + l + "," + c, "" + c, !1, function () {
                platform.exitMiniProgram(null, null)
            })
        })) : void this.send(t, e, n, a, i)
    }, t.timeout = {}, t
}();
__reflect(HttpClient.prototype, "HttpClient");
var BaseApi = function () {
    function t() {
    }

    return t.init = function (e, n) {
        t._host = e, t._port = n, this.initSocket()
    }, t.initSocket = function () {
        t._socketClient = new SocketClient(this._host, this._port), SocketClient.onConnectCallBack = t.onConnect, SocketClient.onDataCallBack = t.onData, SocketClient.onCloseCallBack = t.onClose, SocketClient.onIOErrorCallBack = t.onIOError, t._sendQeune = [], t._callbackQeune = [], t._currentSendObject = null
    }, t.connectSocket = function () {
        t._socketClient.connect()
    }, t.closeSocket = function () {
        t._socketClient.close()
    }, t.onConnect = function () {
        Logger.log("connect"), null == t._currentSendObject && t._sendQeune.length > 0 && (t._currentSendObject = t._sendQeune.shift()), null != t._currentSendObject && t.sendObject(t._currentSendObject)
    }, t.onData = function (e) {
        var n = JSON.parse(e);
        if (Logger.log("reponseData:" + JSON.stringify(n)), this._isError = !1, n.cmd && t.dispatchCmd(n.cmd, n), t._callbackQeune.length > 0) {
            NetWorkLoading.hide(), 0 == t._sendQeune.length && (t._currentSendObject = null);
            var a = t._callbackQeune.shift();
            a(n)
        }
        t._sendQeune.length > 0 && (t._currentSendObject = t._sendQeune.shift(), t.sendObject(t._currentSendObject))
    }, t.onClose = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                switch (e.label) {
                    case 0:
                        return Logger.log("connectClose"), [4, t._socketClient.close(999)];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, t.onIOError = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                switch (e.label) {
                    case 0:
                        return Logger.log("onIOError"), [4, t._socketClient.close(998)];
                    case 1:
                        return e.sent(), platform.exitMiniProgram(null, null), t._isError = !0, [2]
                }
            })
        })
    }, t.requestLogic = function (e, n, a) {
        t.request(null, e, n, a)
    }, t.request = function (e, n, a, i) {
        if (t._isError) return void Logger.logerror("request failed: onIOError \n");
        NetWorkLoading.show();
        var o = n;
        null == t._currentSendObject ? (t._currentSendObject = o, t.sendObject(t._currentSendObject)) : t._sendQeune.push(o), t._callbackQeune.push(function (t) {
            0 != t.state ? null != i && i(t) : null != a && a(t)
        })
    }, t.sendObject = function (e) {
        if (!t._socketClient.isConnect) return void t._socketClient.connect();
        Logger.log("req data:" + JSON.stringify(e));
        var n = e;
        t._socketClient.sendData(n)
    }, t.clearCmd = function () {
        t._commands = {}, t._commandsThisObjects = {}
    }, t.registerCmd = function (e, n, a, i) {
        void 0 === i && (i = !1), void 0 === i && (i = !1);
        var o = t._commands[e];
        null == o && (o = []), i ? o.unshift([n, a]) : o.push([n, a]), t._commands[e] = o
    }, t.removeCmd = function (e, n, a) {
        var i = t._commands[e];
        null == i && (i = []);
        for (var o = -1, r = i.length, s = 0; r > s; s++) i[s][0] == n && i[s][1] == a && (o = s);
        -1 != o && i.splice(o, 1), t._commands[e] = i
    }, t.dispatchCmd = function (e, n) {
        var a = t._commands[e];
        null == a && (a = []);
        for (var i, o, r = a.length, s = 0; r > s; s++) i = a[s][1], o = a[s][0], o.apply(i, [n])
    }, t.dispose = function () {
        t._socketClient.dispose(), t._socketClient = null, t._sendQeune = [], t._callbackQeune = [], t._currentSendObject = null
    }, t._commands = {}, t._commandsThisObjects = {}, t._isError = !1, t
}();
__reflect(BaseApi.prototype, "BaseApi");
var BaseApiCmdIint = function () {
    function t() {
    }

    return t.init = function () {
    }, t
}();
__reflect(BaseApiCmdIint.prototype, "BaseApiCmdIint");
var SocketClient = function () {
    function t(t, e) {
        this.isConnect = !1, this.isConnect = !1, this.host = t, this.port = e
    }

    return t.prototype.connect = function () {
        return __awaiter(this, void 0, void 0, function () {
            var t = this;
            return __generator(this, function (e) {
                switch (e.label) {
                    case 0:
                        return [4, platform.connectSocket({
                            url: "wss://" + this.host,
                            header: {},
                            protocols: [],
                            success: function () {
                                Logger.log("SOCKET初始化成功:wss://" + t.host)
                            },
                            fail: function () {
                                Logger.log("SOCKET初始化失败")
                            },
                            complete: function () {
                                Logger.log("SOCKET初始化完成")
                            }
                        })];
                    case 1:
                        return e.sent(), [4, platform.onSocketClose(this.onSocketClose)];
                    case 2:
                        return e.sent(), [4, platform.onSocketError(this.onSocketIOError)];
                    case 3:
                        return e.sent(), [4, platform.onSocketOpen(this.onSocketConnect)];
                    case 4:
                        return e.sent(), [4, platform.onSocketMessage(this.onData)];
                    case 5:
                        return e.sent(), this.isConnect = !0, [2]
                }
            })
        })
    }, t.prototype.close = function (t) {
        return void 0 === t && (t = 1e3), __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (e) {
                switch (e.label) {
                    case 0:
                        return this.isConnect = !1, [4, platform.closeSocket({
                            code: t,
                            reason: "normal",
                            success: function () {
                                Logger.log("链接关闭成功")
                            },
                            fail: function () {
                                Logger.log("链接关闭失败")
                            },
                            complete: function () {
                                Logger.log("链接关闭完成")
                            }
                        })];
                    case 1:
                        return e.sent(), [2]
                }
            })
        })
    }, t.prototype.sendData = function (t) {
        platform.sendSocketMessage({
            data: JSON.stringify(t), success: function () {
                Logger.log("消息发送成功")
            }, fail: function () {
                Logger.log("消息发送失败")
            }, complete: function () {
                Logger.log("消息发送完成")
            }
        })
    }, t.prototype.onData = function (e) {
        null != t.onDataCallBack && t.onDataCallBack(e)
    }, t.prototype.onSocketConnect = function () {
        null != t.onConnectCallBack && t.onConnectCallBack()
    }, t.prototype.onSocketClose = function () {
        null != t.onCloseCallBack && t.onCloseCallBack()
    }, t.prototype.onSocketIOError = function () {
        null != t.onIOErrorCallBack && t.onIOErrorCallBack()
    }, t.prototype.dispose = function () {
        t.onConnectCallBack = null, t.onCloseCallBack = null, t.onIOErrorCallBack = null, t.onDataCallBack = null, this.close()
    }, t
}();
__reflect(SocketClient.prototype, "SocketClient");
var Alert = function () {
    function t() {
    }

    return t.init = function (t, e, n, a) {
        void 0 === e && (e = 640), void 0 === n && (n = 1136), void 0 === a && (a = 1), this._root = t, this.stageWidth = e, this.stageHeight = n, this.alertScale = a, this.initBackGround()
    }, t.initBackGround = function () {
        var t = this;
        this.background || (this.background = new egret.Shape, this.background.alpha = .7, this.background.touchEnabled = !0), this.background.graphics.clear(), this.background.graphics.beginFill(0), this.background.graphics.drawRect(0, 0, this.stageWidth, this.stageHeight), this.background.graphics.endFill(), this.background.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (!(t._displays.length < 1)) {
                var e = t._displays[t._displays.length - 1];
                e && e instanceof BaseAlertPanel && e.isBackClose && t.closeAlert()
            }
        }, this)
    }, Object.defineProperty(t, "root", {
        get: function () {
            return this._root
        }, enumerable: !0, configurable: !0
    }), t.show = function (t) {
        return this._root ? void this._root.addChild(t) : void console.log("alert init error!")
    }, t.alertLandScape = function (t) {
        this.alert(t), t.rotation = 90
    }, t.alert = function (t, e, n) {
        return void 0 === e && (e = !1), void 0 === n && (n = 1), this._root ? (this._displays || (this._displays = []), void(-1 == this._displays.indexOf(t) && (t.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this), this._root.addChild(this.background), this._root.addChild(t), n && (t.anchorOffsetX = t.width / 2, t.anchorOffsetY = t.height / 2, t.x = this.stageWidth / 2, t.y = this.stageHeight / 2), e && this.openActionCreate(t)))) : void console.log("alert init error!")
    }, t.openActionCreate = function (t) {
        var e = 0;
        switch (t && t instanceof BaseAlertPanel && (e = t.openActionType), e) {
            case 0:
                t.scaleX = t.scaleY = .01, egret.Tween.get(t).to({
                    scaleX: this.alertScale,
                    scaleY: this.alertScale
                }, 900, egret.Ease.backOut);
                break;
            case 1:
                t.x = -this.stageWidth / 2, egret.Tween.get(t).to({x: this.stageWidth / 2}, 580, egret.Ease.cubicIn)
        }
    }, t.closeActionCreate = function (t) {
        var e = 0;
        switch (t && t instanceof BaseAlertPanel && (e = t.closeActionType), e) {
            case 0:
                egret.Tween.get(t).to({scaleX: .01, scaleY: .01}, 500, egret.Ease.cubicInOut).call(function (t) {
                    if (t) {
                        var e = null;
                        e = t.dispose, e instanceof Function && e.apply(t, []), t.parent && t.parent.removeChild(t)
                    }
                }, this, [t]);
                break;
            case 1:
                egret.Tween.get(t).to({x: -this.stageWidth / 2}, 500, egret.Ease.cubicInOut).call(function (t) {
                    if (t) {
                        var e = null;
                        e = t.dispose, e instanceof Function && e.apply(t, []), t.parent && t.parent.removeChild(t)
                    }
                }, this, [t])
        }
    }, t.onAddToStage = function (t) {
        var e = t.currentTarget;
        e instanceof BaseAlertPanel && e.isFill && (e.width = this._root.width, e.height = this._root.height), e.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this), e.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this), this._displays.push(e)
    }, t.onRemoveFromStage = function (t) {
        var e = t.currentTarget;
        e.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.onRemoveFromStage, this), this._displays.pop(), 0 == this._displays.length ? (this._root.removeChild(this.background), BasePanel.currentPanel.onBack()) : (e = this._displays[this._displays.length - 1], this._root.swapChildren(this.background, e))
    }, t.closeAlert = function (t, e) {
        if (void 0 === t && (t = null), void 0 === e && (e = -1), !(this._displays.length < 1)) if (t || (t = this._displays[this._displays.length - 1]), 0 >= e) {
            var n = null;
            n = t.dispose, n instanceof Function && n.apply(t, []), t.parent && t.parent.removeChild(t)
        } else this.closeActionCreate(t)
    }, t.closeAllAlert = function () {
        if (this._displays) for (var t = this._displays.length, e = null, n = null, a = t - 1; a > -1; a--) e = this._displays[a], e && (n = e.dispose, n instanceof Function && n.apply(e, []), e.parent && e.parent.removeChild(e))
    }, t
}();
__reflect(Alert.prototype, "Alert");
var AppConfig = function () {
    function t() {
    }

    return t.login_url = "http://appservicehk.chiji-h5.com:8080/s/wawawa/login.action", t.update_url = "http://appservicehk.chiji-h5.com:8080/s/wawawa/update.action", t.share_url = "https://wxgame.chiji-h5.com/wddx/share.action", t.inviteList_url = "https://wxgame.chiji-h5.com/wddx/getinvitelist.action", t.invite_url = "https://wxgame.chiji-h5.com/wddx/getinvitelistall.action", t.area_url = "https://wxgame.chiji-h5.com/wddx/getcity.action", t.appConfigUrl = "https://jsonconfig.chiji-h5.com/json/fkwww/appConfig1.json", t.limitAppConfigUrl = "https://jsonconfig.chiji-h5.com/json/fkwww/appConfigTemp.json", t.gameConfigUrl = "https://jsonconfig.chiji-h5.com/json/fkwww/config1.json", t.dpsConfigUrl = "https://jsonconfig.chiji-h5.com/json/fkwww/dpsConfig.json", t.bloodConfigUrl = "https://jsonconfig.chiji-h5.com/json/fkwww/bloodConfig.json", t.shareConfigUrl = "https://jsonconfig.chiji-h5.com/json/fkwww/share.json", t.likesConfigUrl = "https://jsonconfig.chiji-h5.com/json/fkwww/favlist.json", t.otherGameConfigUrl = "https://jsonconfig.chiji-h5.com/json/fkwww/gamelist.json", t.outres_root_path = "https://commcdn.chiji-h5.com/fkwww/", t.native_file_path = "", t.res_version = "v5", t.app_version = "v1.0.0", t.appid = "wx239afabf1a2b28e3", t.zhuanpai_lixian1 = "share", t.zhuanpai_lixian = "share", t.luckzhuanpai_juan = "share", t.luckzhuanpai_result = "share", t.baoxiang_changpin = "share", t.baoxiang_jinbi = "share", t.jinbi_buzu = 50, t.jinbi_buzu_checkgroup = !0, t.player_buy = "share", t.breakthrough_zuanshi = "share", t.invite_bianshen = "share", t.sevenSign_lingqu = "share", t.invite_youli = !0, t.magic1 = "share", t.magic2 = "share", t.magic3 = "share", t.magic4 = "share", t.magic5 = "share", t.shareCount = 5, t.shareWaittime = 2e3, t.shareRandomValue = .15, t.adCount = 5, t.model = 1, t.vip_luck = !0, t.hitMostShare = !0, t.sdk_favlist = !1, t.sdk_gamelist = !1, t.sdk_suspension = !1, t.sdk_hotgame = !0, t.ios_favlist = !0, t.ios_gamelist = !0, t.ios_suspension = !0, t.ios_hotgame = !0, t.android_favlist = !0, t.android_gamelist = !0, t.android_hotgame = !0, t.android_suspension = !0, t.mp_path = {
        appid: "",
        path: ""
    }, t.channelList_luck = [], t.areaList_luck = [], t.luckyZhuanpan_count = 20, t.ZPQ_mostCount = 20, t.jewel_limitCount = 30, t.jinbi_limitCount = 30, t.refreshJewel_limitcount = 30, t.ore_refreshJewel_limitcount = 30, t
}();
__reflect(AppConfig.prototype, "AppConfig");
var AdConstant = function () {
    function t() {
    }

    return t.lookRewardAd = function (t, e) {
        t.apply(e, [!0])
    }, t.showBannerAd = function () {
    }, t.bannerAdUnitId = [], t.rewardedVideoAdUnitId = [], t
}();
__reflect(AdConstant.prototype, "AdConstant");
var ControllAlert = function () {
    function t() {
    }

    return t.show = function (t, e, n) {
        void 0 === t && (t = null), void 0 === e && (e = 0), void 0 === n && (n = 16777215);
        var a = "";
        null != t && (a = t), TipsPanel.instance.show(a, e, n)
    }, t
}();
__reflect(ControllAlert.prototype, "ControllAlert");
var NetWorkError = function () {
    function t() {
    }

    return t.showConnectFail = function () {
        ConfigData.getKeyStr("www_59")
    }, t.onOkCallBack = function () {
        platform.exitMiniProgram(null, null)
    }, t
}();
__reflect(NetWorkError.prototype, "NetWorkError");
var NetWorkLoading = function () {
    function t() {
    }

    return t.show = function () {
        this.instance ? (Alert.root.setChildIndex(this.instance, Alert.root.numChildren - 1), this.instance.visible = !0) : (this.instance = new eui.Panel, this.instance.touchEnabled = !0, this.instance.skinName = "NetWorkLoadingSkin", this.instance.width = Alert.root.width, this.instance.height = Alert.root.height, Alert.show(this.instance))
    }, t.hide = function () {
        this.instance && (Alert.root.setChildIndex(this.instance, Alert.root.numChildren - 1), this.instance.visible = !1)
    }, t
}();
__reflect(NetWorkLoading.prototype, "NetWorkLoading");
var ArrayUtil = function () {
    function t() {
    }

    return t.contains = function (t, e) {
        for (var n in t) {
            var a = t[n];
            if (a.toString() == e.toString()) return !0
        }
        return !1
    }, t.remove = function (t, e) {
        if (!t) return -1;
        var n = t.indexOf(e);
        return -1 != n && t.splice(n, 1), n
    }, t.max = function (t) {
        if (!t || 0 == t.length) return null;
        var e = t[0];
        for (var n in t) e = Math.max(e, t[n]);
        return e
    }, t.min = function (t) {
        if (!t || 0 == t.length) return null;
        var e = t[0];
        for (var n in t) e = Math.min(e, t[n]);
        return e
    }, t.clone = function (t) {
        if (!t) return null;
        if ("object" == typeof t) {
            var e = {};
            for (var n in t) {
                var a = t[n];
                "object" == typeof a && (a = this.clone(a)), e[n] = a
            }
        }
    }, t
}();
__reflect(ArrayUtil.prototype, "ArrayUtil");
var ColorUtil = function () {
    function t() {
    }

    return t.setGray = function (t) {
        var e = [.308, .609, .082, 0, 5, .308, .609, .082, 0, 5, .308, .609, .082, 0, 5, 0, 0, 0, 1, 0],
            n = new egret.ColorMatrixFilter(e);
        t.filters = [n]
    }, t.setRed = function (t) {
        var e = [.75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], n = new egret.ColorMatrixFilter(e);
        t.filters = [n]
    }, t.setDark = function (t) {
        var e = [.3, 0, 0, 0, 30.8, 0, .3, 0, 0, 30.8, 0, 0, .3, 0, 30.8, 0, 0, 0, 1, 0],
            n = new egret.ColorMatrixFilter(e);
        t.filters = [n]
    }, t.clearGray = function (t) {
        t.filters = null
    }, t
}();
__reflect(ColorUtil.prototype, "ColorUtil");
var DateTool = function () {
    function t() {
    }

    return t.toNextHoursTime = function (t) {
        void 0 === t && (t = 1), t = Math.min(t, 23), t = Math.max(t, 0);
        var e = new Date, n = e.getFullYear(), a = e.getMonth(), i = e.getDate(), o = e.getHours(),
            r = (e.getMinutes(), e.getSeconds(), e.getMilliseconds(), n), s = a, l = i;
        (o >= t || 0 == t) && (l++, l > this.getCurrentMonthDays() && (l = 1, s++, s > 11 && (s = 0, r++)));
        var h = new Date(r, s, l, t), u = e.getTime(), c = h.getTime();
        return Math.abs(c - u)
    }, t.formatMinuteTime = function (t) {
        var e = Math.floor(t), n = Math.floor(e / 3600), a = Math.floor(e % 3600 / 60), i = Math.floor(e % 3600 % 60),
            o = 10 > n ? "0" + n : "" + n, r = 10 > a ? "0" + a : "" + a, s = 10 > i ? "0" + i : "" + i;
        return o + ":" + r + ":" + s
    }, t.formatTime = function (t) {
        var e = Math.floor(t / 1e3), n = Math.floor(e / 3600), a = Math.floor(e % 3600 / 60),
            i = Math.floor(e % 3600 % 60 % 1e3), o = 10 > n ? "0" + n : "" + n, r = 10 > a ? "0" + a : "" + a,
            s = 10 > i ? "0" + i : "" + i;
        return o + ":" + r + ":" + s
    }, t.getCurrentMonthDays = function () {
        var t = new Date, e = t.getFullYear(), n = t.getMonth(), a = new Date(e, n, 1), i = new Date(e, n + 1, 1),
            o = (i - a) / 864e5;
        return o
    }, t.timestampToTime = function (t) {
        var e = new Date(1e3 * t), n = e.getFullYear() + "-",
            a = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-", i = e.getDate() + " ",
            o = e.getHours() + ":", r = e.getMinutes() + ":", s = e.getSeconds();
        return n + a + i + o + r + s
    }, t.makeTime = function (t) {
        void 0 === t && (t = -1);
        var e = null;
        e = -1 == t ? new Date : new Date(t);
        var n = e.getFullYear() + "-", a = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-",
            i = e.getDate();
        return n + a + i
    }, t.dateTotimeStamp = function (t) {
        void 0 === t && (t = "1979-1-1 00:00:00");
        var e = new Date(t).getTime();
        return e
    }, t.currentTime = function () {
        var t = (new Date).getTime();
        return t
    }, t.currentDayHourTimeStamp = function (t, e, n, a) {
        void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === n && (n = 0), void 0 === a && (a = 0);
        var i = new Date;
        return i.setHours(t, e, n, a), i.getTime()
    }, t
}();
__reflect(DateTool.prototype, "DateTool");
var Logger = function () {
    function t() {
    }

    return t.log = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        this.unluck && console.log("[Log]", t)
    }, t.logerror = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        console.error("[Logerror]", t)
    }, t.unluck = !0, t
}();
__reflect(Logger.prototype, "Logger");
var ObjectUtil = function () {
    function t() {
    }

    return t.isFalse = function (t) {
        return void 0 == t || null == t || 0 == t || "" == t
    }, t
}();
__reflect(ObjectUtil.prototype, "ObjectUtil");
var RandomUitl = function () {
    function t() {
    }

    return t.randomInt = function (t, e) {
        if (t > e) {
            var n = t;
            t = e, e = n
        }
        return t + Math.round((e - t) * Math.random())
    }, t.randomFloat = function (t, e) {
        if (t > e) {
            var n = t;
            t = e, e = n
        }
        return t + Math.round((e - t) * Math.random() * 100) / 100
    }, t.randomDouble = function (t, e) {
        if (t > e) {
            var n = t;
            t = e, e = n
        }
        return t + (e - t) * Math.random()
    }, t
}();
__reflect(RandomUitl.prototype, "RandomUitl");
var StringUtil = function () {
    function t() {
    }

    return t.getChar = function (t, e) {
        var n = new egret.ByteArray;
        return n.writeUTFBytes(t), n.length <= e ? t : (n.position = 0, n.readUTFBytes(e) + "··")
    }, t.getRandom = function (t, e) {
        var n = t - e, a = Math.floor(e + Math.random() * n);
        return a
    }, t.number2String = function (t) {
        var e = t.toString(), n = Math.floor(e.length / 3);
        e.length % 3 == 0 && n--;
        var a = this.units[n];
        if ("" != a) {
            var i = e.length - 3 * n, o = e.substr(0, i), r = e.substr(i, 2);
            o += "." + r
        }
        return o + a
    }, t.goldNumber2String = function (t) {
        var e = ConfigData.getKeyStr("www_430"), n = ConfigData.getKeyStr("www_431");
        return t > 1e8 ? (t /= 1e8, t.toFixed(0) + ("" + e)) : t >= 1e4 ? (t /= 1e4, t.toFixed(2) + ("" + n)) : Math.floor(t).toString()
    }, t.numberFormat = function (t) {
        var e = new Decimal(t), n = e.toFixed(), a = Math.floor(n.length / 3);
        n.length % 3 == 0 && a--;
        var i = this.units[a];
        if ("" != i) {
            var o = n.length - 3 * a, r = n.substr(0, o), s = n.substr(o, 2);
            r += "." + s
        }
        return r + i
    }, t.decimalFormat = function (t) {
        if (!t) return "";
        var e = t.toFixed(), n = e.split(".");
        n && n.length > 1 && (e = n[0]);
        var a = Math.floor(e.length / 3);
        e.length % 3 == 0 && a--;
        var i = this.units[a];
        if ("" == i) return e;
        var o = e.length - 3 * a, r = e.substr(0, o), s = e.substr(o, 2);
        return r += "." + s, r + i
    }, t.units = ["", "K", "M", "B", "T", "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh", "ii", "jj", "kk", "ll", "mm", "nn", "oo", "pp", "qq", "rr", "ss", "tt", "uu", "vv", "ww", "xx", "yy", "zz", "AA", "BB", "CC", "DD", "EE", "FF", "GG", "HH", "II", "JJ", "KK", "LL", "MM", "NN", "OO", "PP", "QQ", "RR", "SS", "TT", "UU", "VV", "WW", "XX", "YY", "ZZ", "aa", "ab", "ac", "ad", "ae", "af", "ag", "ah", "ai", "aj", "ak", "al", "am", "an", "ao", "ap", "aq", "ar", "as", "at", "au", "av", "aw", "ax", "ay", "az"], t
}();
__reflect(StringUtil.prototype, "StringUtil");