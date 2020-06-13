/**
 * Created by lhy on 2020/03/26.
 */

var ua = navigator.userAgent;

function isAndroid() {
    return ua.indexOf('Android') > 0;
};

function isIOS() {
    return /(iPhone|iPad|iPod)/i.test(ua);
};

var loginCallback;

function login(str, callback) {
    loginCallback = callback;
    str = String(str);
    window.location.href = "linking://login?params="+str+"&callback=loginBack";

};

function loginBack(str) {
    loginCallback(str);
};