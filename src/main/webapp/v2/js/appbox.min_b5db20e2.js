var userId = "";
window.onload = function() {
    hideLoading();
}

/**
 * sdk登录
 */
function login(cb){
 console.log("登录");
    window.bridge.login( function (result) {
        var json = JSON.parse(result);
        if (json.code === 1) {
            console.log("登录成功"+json.userId);
            userId = json.userId;
            if(cb)cb(cb);
        }
    });
}

/**
 * 关闭游戏
 */
function btn_close() {
	window.bridge.closeGame();
}

function hideLoading(){
    window.bridge.hideLoading();
}
