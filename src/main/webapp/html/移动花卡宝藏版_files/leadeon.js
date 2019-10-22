/**
 * js-sdk
 *
 * 错误码只进行大的分类，详细错误通过错误描述字段表述。
 * -1： 系统错误（系统接口错误，内存错误，异常错误）
 * -2： 网络错误（网络接口错误，网络数据错误）
 * -3： 数据错误（非合法数据）
 * -4： 用户取消操作（部分接口用户干预的操作）
 */


(function () {
	var u = navigator.userAgent;
	var android=u.indexOf('Android') > -1;
	//用于对外暴露,init只有在客户端为4.0版本才有
	var leadeon ={
		init:function(){
		},
		voiceRecogResult:function(){

		}
	};
	//判断为ios的wkwebview就吧leadeon.init赋空
	if(u.indexOf('wkwebview') > -1){
		leadeon.init=null;
	}
	//各种能力的集合
	var businessNameS=[
		"userStatus",//获取用户登录状态
		"checkSessionIsvalid",//新登录状态接口（会话校验）--V4.0新增
		"getUserInfo",//获取用户基础信息
		"getCallDetail",//获取详单数据
		"qrScan",//直接进入扫一扫功能
		"getContacts",//调用手机通信录
		"sendSMS",//调用系统发短信功能
		"getContactName",//获取通信录联系人姓名
		"newWebview",//打开新页面
		"playSound",//手机振动
		"getNetStatus",//获取网络状态
		"pickPhoto",//调用照相机
		"callPhone",//拨打手机电话
		"goNativePage",//H5调用native功能页面
		"getUserMarketInfo",//查询用户营销活动信息
		"getImei",//获取 IMEI
		"enableShared",//是否显示分享按钮
		"shareMessage",//分享功能
		"payHistory",//查询交费历史
		"getOCR",//扫描充值卡密码(OCR)
		"searchBizHall",//查询实体营业厅
		"nearBizHall",// 附近营业厅
		"encryptString",//加密功能
		"newGuide",//新手引导
		"giveMeScore",//给我评分
		"checkVersion",//版本检测
		"showAuthentication",//调用二次鉴权,说明：用户需要操作敏感用户信息时，需要进行二次鉴权操作
		"getContactAll",//获取通信录信息,说明：获取通信录中所有人的手机号码和姓名
		"setWaterFlowerState",//通知客户端浇花签到状态
		"savePhoto",//保存图片到相册
		"digitalSignature",//网络请求体数字签名
		"showLogin",//调用登录接口
		"getNewPay",//拉起统一支付
		"setTitle",//设置webView标题-V3.8新加
		"assistiveControl",//二级页面情感化插件-V3.8新加
		"showNavBackAndCloseBtn",//导航栏返回及关闭按钮的显示状态-V3.8新加
		"getCatchInfo",//客户端信息采集-V3.8新加
		"closeCurrentWebView",//关闭当前webview-V3.8新加
		"cleanCache",//清除缓存webview-V3.8新加
		"navigationColorSetting",//设置导航栏颜色 -V4.0新增
		"getClientApplicationList",//获得本机所有应用的列表（-V4.0新增，只有安卓有这能力）
		"openApplication", //打开应用（-V4.0新增，只有安卓有这能力）
		"downloadApplication",//调用下载（-V4.0新增）
		"startPlugin",//调起客户端插件（V4.0新增）
		"backToRootView",//用于任意二级页面返回一级页面 -V4.1新增
		"overTime",//会话超时处理接口--V4.0新增,
		"tollSingle",//单点统计 -V4.1新增
		"mainPageUpdate", //首页刷新 -V4.1新增
		"imagesShare", //多图分享 -V4.1新增
		"quitLogin", //注销登录 -V4.1新增
		"voiceRecognizer", //设定是否支持语音识别，在键盘弹出时提供入口 -V4.2新增
		"showNavCloseBtn", //导航栏关闭按钮的显示状态-V4.3新加
		"showNavBackBtn", //导航栏返回按钮的显示状态-V4.3新加
		"getIDMPLoginToken", // 获取一键登录token(获取当前登录号码的token)-V4.5新加
		"getLocalNumberLoginToken", // 获取一键登录token(获取当前本机号码的token)-V4.5新加
		"openOtherAPP", // scheme打开其他应用-V4.5新加
		"checkUID",//Uid有效性校验 V4.7.0新增
		"package4G",//4G+终端套餐返回  V4.7.0新增
		"getLoginInfo",//获取登录信息-V4.8 新增
		"cmccSetUp",//CMCC配置-V4.8 新增
		"rescanQRCode",//PC 扫码登录功能专用JS能力,重新扫描--V4.8 新增
		"backToHostApp",//关闭当前页面--V4.8 新增
		"hejiaqin",//打开和家亲功能页面--V5.0 新增
		"hiddenShareButton",//隐藏分享按钮-V5.1 新增
		"checkSessionIsvalidForJFLib",//H5单独调用新登录状态接口（会话校验）--V5.2 新增
		"hebaoPay",//拉起和包支付--V5.3 新增
		"speechBroadcast",//语音播报-V5.5 新增
		"forbiddenWebviewScrollStyle",//禁止浏览器上滑回弹效果-V5.5 新增
		"hiddenNavigationBar",//是否隐藏导航栏（即全屏webview）-V5.5 新增
		"oneKeyAlarm",//一键报警sdk初始化
		"getDeviceMultiSimInfo",//一号一终端 获取设备硬件信息--V5.6 新增
		"newVoiceRecognizer",//语音识别（无界面） -V5.6 新增
		"openMiniProgram",//H5页面打开小程序-V5.6 新增
		"alipaySDKauthV2",//支付宝授权登录 -V5.6 新增
		"AISpeechUnderStander",//智能语义理解 -V5.7 新增
		"audioRecord"//本地录音 -V5.7 新增
	];

	/**
	 * 设置回调成功的函数,并给客户端发送json数据,并构造leadeon结构体
	 * @param {Object} os 前端传递的对象
	 * @param {String} st 业务名称
	 */
	function callNative(os, st){
		if("undefined"===typeof os)
		{
			os={};
		}
		os.businessName=st;
		os.callbackSuccess="callbackSuccess_"+os.businessName;
		os.callbackError="callbackError_"+os.businessName;
		if('undefined'===typeof os.debug)
		{
			os.debug=false;
		}
		if('undefined'===typeof os.success)
		{
			os.success=function(){};

		}
		if('undefined'===typeof os.error)
		{
			os.error=function(){};
		}
		leadeon["callbackChangeSuccess_"+os.businessName]=os.success;
		leadeon["callbackChangeError_"+os.businessName]=os.error;
		leadeon["callbackSuccess_"+os.businessName]=function(dates){
			var jsonstr=dates;
			if(!!jsonstr&& typeof(jsonstr)== "string")
			{
				if (android) { //android系统
					if(os.businessName!="hebaoPay")
					{
						try {
							if(!!jsonstr)
							{
								jsonstr=JSON.parse(jsonstr);//安卓不支持传递对象，需要对传递的字符串转换
							}
						} catch (error) {
						}
					}
				}
			}
			leadeon["callbackChangeSuccess_"+os.businessName](jsonstr);
		};
		leadeon["callbackError_"+os.businessName]=function(dates){
			var jsonstr=dates;
			if (android) { //android系统
				jsonstr=JSON.parse(jsonstr);//安卓不支持传递对象，需要对传递的字符串转换
			}
			leadeon["callbackChangeError_"+os.businessName](jsonstr);
		};
		//传值完毕以后就删除多余的属性，没必要给客户端
		delete os.success;
		delete os.error;
		if (android)
		{
			newSdkInterface[os.businessName](JSON.stringify(os));
		}
		else
		{

            if(u.indexOf('wkwebview') > -1){
				window.webkit.messageHandlers.newSdkInterface.postMessage(os);
            }else{
				newSdkInterface[os.businessName](os);
            }

		}
	}

	businessNameS.forEach(function (businessName) {
		leadeon[businessName]=function(options)
		{
			callNative(options,businessName);
		}
	})

	window.leadeon =leadeon;
})()
