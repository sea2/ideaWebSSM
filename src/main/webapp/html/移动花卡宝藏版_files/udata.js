;(function (win, doc) {
  var PROTOCOL = (("https:" == doc.location.protocol) ? " https://" : " http://"),
    URL = PROTOCOL + "da.mmarket.com/udata/u.gif?",
    UACCOUNT = 'udata_account',
    APPID = win._udata_appid || "@id@",
    AUTO = true,
    TagAUTO = false,
    UID = "udata_lt_" + APPID,
    C = "1428456744583",
    ACCOUNT = undefined,
    USESSION = "udata_s_" + APPID,
    JS_VERSION = "1.2",
    UDTM_COMPAIGN = "",
    CHANNEL = "",
    ALREADYINIT = false;
  GUID_LEN = getGuidGenerator().length;
  var config = {
    _st: new Date(),
    setStartTime: function (d) {
      this._st = d
    },
    getStartTime: function () {
      return this._st.getTime()
    },
    setAutoPageView: function (arg) {
      AUTO = arg
    },
    setAutoTag: function (arg) {
      TagAUTO = arg
    },
    setAccount: function (arg) {
      ACCOUNT = arg;
      if (hmt) {
        hmt.cookieHandle.setCookie("udata_account_" + APPID, arg)
      }
    },
    setUdtm_compaign: function (arg) {
      UDTM_COMPAIGN = arg
    },
    setChannel: function (arg) {
      CHANNEL = arg
    }
  };

  //获取udata里的值赋值
  if (win._udata) {
    for (var i = 0; i < win._udata.length;) {
      if (config[win._udata[i][0]]) {
        config[win._udata[i][0]](win._udata[i][1]);
        win._udata.splice(i, i + 1)
      } else {
        ++i
      }
    }
  }


  var begin = new Date().getTime();
  var ms = null;

  function padding(str, len) {
    return (Array(len + 1).join('0') + (str || '')).slice(-len)
  }

  function getGuidGenerator() {
    var uniqId = ('' + Math.random()).substr(2, 6);
    return '' + new Date().getTime() + uniqId
  }

  var Util = {
    EventHandler: {
      addEvent: (function (doc) {
        //事件都是调用这个方法
        if (doc.addEventListener) {
          return function (el, type, handler) {
            return el.addEventListener(type, handler)
          }
        }
        if (doc.attachEvent) {
          return function (el, type, handler) {
            return el.attachEvent("on" + type, handler)
          }
        }
      })(doc)
    }
  };
  var hmt = {
    request: {
      setArgs: function (params) {
        var result = "", p;
        for (p in params) {
          if (params.hasOwnProperty(p)) {
            result += encodeURIComponent(p) + "=" + encodeURIComponent(params[p]) + "&"
          }
        }
        this.args = result.slice(0, -1)
      },

      /**
       * 发送插码请求
       * @param params
       */
      send: function (params) {
        if (params) {
          this.setArgs(params)
        }
        var img = new Image();
        img.src = URL + this.args;
        img.style.height = "0px";
        img.style.width = "0px";
        img.style.display = "none";
        doc.body.appendChild(img);
        img.onerror = function () {
          doc.body.removeChild(img)
        };
        img.onload = function () {
          doc.body.removeChild(img)
        }
      }, sendJson: function (params) {
        var xhr = new XMLHttpRequest();
        xhr.open('post', URL, true);
        xhr.send(JSON.stringify(params))
      },
      sendEvent: function (eventName, label, udtm_compaign, channel) {
        if (arguments.length < 2) {
          return
        }
        if (typeof label == 'object') {
          lv = '';
          var tagArr = ['localName', 'id', 'className', 'alt', 'innerHTML', 'name', 'type'];
          for (var i = 0; i < tagArr.length; i++) {
            if (label[tagArr[i]]) {
              if (tagArr[i] == 'localName') {
                lv += 'tag=' + label[tagArr[i]] + '&'
              } else {
                lv += tagArr[i] + '=' + label[tagArr[i]] + '&'
              }
            }
          }
          lv = lv.slice(0, -1)
        } else {
          lv = label
        }
        this.sendBase({
          et: eventName || "",
          lv: lv || "",
          f: 3,
          cp: doc.location.href,
          udtm_compaign: udtm_compaign || "",
          channel: channel || ""
        })
      }, sendBase: function (params) {
        var u_size = UserAgent.getSize(), GUID;
        var sessionId = hmt.cookieHandle.getCookie(USESSION);
        if (!sessionId || sessionId.toString().length != GUID_LEN) {
          if (ALREADYINIT) {
            GUID = getGuidGenerator();
            hmt.cookieHandle.setCookie(USESSION, GUID)
          }
          sessionId = hmt.cookieHandle.getCookie(USESSION) || GUID;
          sessionId = sessionId.length == GUID_LEN ? sessionId : GUID
        }
        var default_params = {
          h: u_size.height,
          w: u_size.width,
          ct: new Date().getTime(),
          si: APPID,
          cu: doc.location.host,
          v: JS_VERSION,
          s: sessionId,
          udtm_compaign: UDTM_COMPAIGN,
          channel: CHANNEL,
          f: 1,
          c: C
        };
        if (ACCOUNT) {
          default_params.a = ACCOUNT
        }
        for (var p in params) {
          if (params.hasOwnProperty(p)) {
            default_params[p] = params[p]
          }
        }
        this.send(default_params)
      }
    },
    cookieHandle: {
      getCookie: function (name) {
        name = encodeURIComponent(name);
        var k = doc.cookie.split(";"), l = k.length, i = 0;
        for (i; i < l; ++i) {
          if (k[i] && (k[i].split("=")[0].replace(/\s/g, "") === name)) {
            return decodeURIComponent(k[i].split("=")[1])
          }
        }
        return null
      }, setCookie: function (name, val, expires) {
        if (expires) {
          exp = "expires=" + expires.toGMTString() + ";"
        } else {
          exp = ""
        }
        doc.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(val) + ";path=/;" + exp
      }
    }
  };
  if (ACCOUNT) {
    hmt.cookieHandle.setCookie("udata_account_" + APPID, ACCOUNT)
  } else {
    ACCOUNT = hmt.cookieHandle.getCookie("udata_account_" + APPID)
  }
  var UserAgent = {
    getSize: function () {
      var pageWidth = win.innerWidth, pageHeight = win.innerHeight;
      if (typeof pageWidth !== "number") {
        if (doc.compatMode === "CSS1Compat") {
          pageWidth = doc.documentElement.clientWidth;
          pageHeight = doc.documentElement.clientHeight
        } else {
          pageWidth = doc.body.clientWidth;
          pageHeight = doc.body.clientHeight
        }
      }
      return {width: pageWidth, height: pageHeight}
    }
  };
  var Progress = {
    initApp: function () {
      if (!hmt.cookieHandle.getCookie(USESSION)) {
        hmt.cookieHandle.setCookie(USESSION, getGuidGenerator())
      }
      if (!hmt.cookieHandle.getCookie(UID)) {
        var d = new Date(), u_size = UserAgent.getSize();
        d.setHours(24);
        d.setMinutes(0);
        d.setSeconds(0);
        hmt.cookieHandle.setCookie(UID, getGuidGenerator(), d);
        hmt.request.sendBase({f: 1})
      }
    }, autoCollection: function (params) {
      if (!params) {
        params = {}
      }
      if (typeof params === "string") {
        var start = config.getStartTime();
        params = {cp: params, st: 2, t: new Date().getTime() - start}
      } else {
        params.st = 1
      }
      hmt.request.sendBase({
        cp: params.cp || doc.location.href,
        fp: params.fp || doc.referrer,
        t: params.t || ms,
        st: params.st,
        f: 2,
        udtm_compaign: params.udtm_compaign || UDTM_COMPAIGN,
        channel: params.channel || CHANNEL,
      })
    }
  };
  var getUdtm = function (url) {
    var queryStr = ['udtm_source', 'udtm_medium', 'udtm_term', 'udtm_content', 'udtm_compaign'];
    var getParam = function (name) {
      var search = url;
      var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
      var matcher = pattern.exec(search);
      var items = null;
      if (null != matcher) {
        try {
          items = decodeURIComponent(decodeURIComponent(matcher[1]))
        } catch (e) {
          try {
            items = decodeURIComponent(matcher[1])
          } catch (e) {
            items = matcher[1]
          }
        }
      }
      return items
    };
    var utdm = {};
    for (var i in queryStr) {
      var param = getParam(queryStr[i]);
      if (param) {
        utdm[queryStr[i]] = param
      }
    }
    JSON.stringify(utdm) === '{}' ? utdm = url : utdm.cp = url;
    return utdm
  };
  var init_data = win._udata;
  Util.EventHandler.addEvent(doc, "readystatechange", (function () {
    var called = false;
    return function () {
      if (!called) {
        called = true;
        ALREADYINIT = true;
        Progress.initApp();
        win._udata = {};
        win._udata.sendEvent = function (eventName, label, udtm_compaign, channel) {
          hmt.request.sendEvent(eventName, label, udtm_compaign, channel)
        };
        win._udata.sendPageInfo = function (params) {
          if (!AUTO) {
            Progress.autoCollection(params)
          }
          if (params === "sender") {
            Progress.autoCollection(this)
          }
        };
        win._udata.push = function (arr) {
          if(arr[0] == 'setAccount' || arr[0] == 'setChannel'){
            config[arr[0]](arr[1]);
          }
          if (arr instanceof Array) {
            var fn = arr.splice(0, 1)
          }
          if (!this[fn]) {
            return
          }
          this[fn](arr[0], arr[1])
        }
      }
    }
  })());
  var windowOnload = function () {
    var end = new Date().getTime();
    var start = config.getStartTime();
    ms = end - start;
    if (AUTO) {
      Progress.autoCollection()
    }
    if (TagAUTO) {
      function stopBubbleDefault(e) {
        if (e && e.stopPropagation) {
          e.stopPropagation()
        } else {
          window.event.cancelBubble = !0
        }
      }

      $("a,input,button").off('click');
      $('a,input,button').on('click', function (e) {
        _udata.sendEvent('trackClick', this, UDTM_COMPAIGN, CHANNEL);
        stopBubbleDefault(e)
      })
    }
    if (init_data) {
      var k = 0;
      for (; k < init_data.length; ++k) {
        win._udata.push(init_data[k])
      }
    }
  };

  Util.EventHandler.addEvent(win, "load", windowOnload);

  //发送请求 并不刷新
  win.udataOnLoad = function(){
    APPID = _udata_appid
    windowOnload();
  }



  if (document.readyState === 'complete') {
    windowOnload()
  }
})(window, document);
;
