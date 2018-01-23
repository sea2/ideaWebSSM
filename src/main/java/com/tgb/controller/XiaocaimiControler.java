package com.tgb.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.tgb.entity.BaseRequestBody;
import com.tgb.model.User;
import com.tgb.service.UserService;
import com.tgb.util.StringUtils;

import net.sf.json.JSONObject;

@Controller
public class XiaocaimiControler {
	@Autowired
	private UserService userService;

	@RequestMapping(value = "app/account/message")
	@ResponseBody
	public void getTes1001222(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/record")
	@ResponseBody
	public void getTes1001221(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/transactionFlowList")
	@ResponseBody
	public void getTes1001220(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/capitalFlowList")
	@ResponseBody
	public void getTes1001219(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/plan")
	@ResponseBody
	public void getTes1001218(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/recharge")
	@ResponseBody
	public void getTes1001217(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/rechargeStatus")
	@ResponseBody
	public void getTes1001216(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/loadWithdrawalsInfo")
	@ResponseBody
	public void getTes1001215(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/withdraw")
	@ResponseBody
	public void getTes1001214(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/withdrawStatus")
	@ResponseBody
	public void getTes1001213(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/availableCoupons")
	@ResponseBody
	public void getTes1001212(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/purchaseStatus")
	@ResponseBody
	public void getTes1001211(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/logout")
	@ResponseBody
	public void getTes1001210(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/notice")
	@ResponseBody
	public void getTes100129(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/purchase")
	@ResponseBody
	public void getTes100128(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/unbundlingBankCard")
	@ResponseBody
	public void getTes100127(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/unbundlingBankCardPush")
	@ResponseBody
	public void getTes100126(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/propertyDetail")
	@ResponseBody
	public void getTes100124(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/common/generateRequestUrl")
	@ResponseBody
	public void getTes100123(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/yesterdayIncomeDetail")
	@ResponseBody
	public void getTes100121(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/activateUser")
	@ResponseBody
	public void getTes100120(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/fraudMetrix")
	@ResponseBody
	public void getTes1001112(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/toSesameSeeds")
	@ResponseBody
	public void getTes100111(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/protocol")
	@ResponseBody
	public void getTes10011(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/balance")
	@ResponseBody
	public void getTes1001(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/remarkRequestUrl")
	@ResponseBody
	public void getTes100(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/more/menu", method = RequestMethod.POST)
	@ResponseBody
	public void getTes(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/home", method = RequestMethod.POST)
	@ResponseBody
	public void getTes2(HttpServletRequest request, HttpServletResponse response) {

	}

	@RequestMapping(value = "app/account/userPublicData")
	@ResponseBody
	public void getTes3(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/advertisement/copyright")
	@ResponseBody
	public void getTes4(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/versionUpdate")
	@ResponseBody
	public void getTes5(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/bankCard")
	@ResponseBody
	public void getTes6(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/common/homeMenu")
	@ResponseBody
	public void getTes7(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/startUpImg")
	@ResponseBody
	public void getTes8(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/appLaunch")
	@ResponseBody
	public void getTes9(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/list")
	@ResponseBody
	public void getTes10(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/detail")
	@ResponseBody
	public void getTes11(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/advertisement/list")
	@ResponseBody
	public void getTes12(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/productList")
	@ResponseBody
	public void getTes13(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/checkMoney")
	@ResponseBody
	public void getTes14(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/common/share")
	@ResponseBody
	public void getTes15(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/coupon")
	@ResponseBody
	public void getTes16(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/sesameToBalance")
	@ResponseBody
	public void getTes17(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/userGuide")
	@ResponseBody
	public void getTes18(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/sesameAvailableIncome")
	@ResponseBody
	public void getTes19(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/sesameTotalIncome")
	@ResponseBody
	public void getTes20(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/sesameTomorrowIncome")
	@ResponseBody
	public void getTes21(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/sesameSeeds")
	@ResponseBody
	public void getTes22(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/experienceGold")
	@ResponseBody
	public void getTes23(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/addConsultant")
	@ResponseBody
	public void getTes24(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/batchDeleteMessage")
	@ResponseBody
	public void getTes25(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/gesturePasswordPageData")
	@ResponseBody
	public void getTes26(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/common/shareCallback")
	@ResponseBody
	public void getTes27(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/base")
	@ResponseBody
	public void getTes28(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/supportBank")
	@ResponseBody
	public void getTes31(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/common/area")
	@ResponseBody
	public void getTes32(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/openPayment")
	@ResponseBody
	public void getTes33(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/openPaymentPush")
	@ResponseBody
	public void getTes34(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/operationTransactionPassword")
	@ResponseBody
	public void getTes35(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/investmentProject")
	@ResponseBody
	public void getTes37(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/bundlingRegistrationId")
	@ResponseBody
	public void getTes38(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/reCastProductList")
	@ResponseBody
	public void getTes40(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/reinvestHoldingAssets")
	@ResponseBody
	public void getTes41(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/reinvestProductList")
	@ResponseBody
	public void getTes42(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app")
	@ResponseBody
	public void getTes43(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/")
	@ResponseBody
	public void getTes44(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/continuedInvestOption")
	@ResponseBody
	public void getTes45(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/operationWithholdAuthority")
	@ResponseBody
	public void getTes46(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/queryWithholdAuthority")
	@ResponseBody
	public void getTes47(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/continuedInvest")
	@ResponseBody
	public void getTes48(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/continuedInvestInfo")
	@ResponseBody
	public void getTes49(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/totalIncomeDetail")
	@ResponseBody
	public void getTes50(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/newListPlan")
	@ResponseBody
	public void getTes52(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/account/newCalendarPlan")
	@ResponseBody
	public void getTes53(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/birthdayWelfare")
	@ResponseBody
	public void getTes54(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/receivePrize")
	@ResponseBody
	public void getTes55(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/continuedInvestmentGuide")
	@ResponseBody
	public void getTes56(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/password/set")
	@ResponseBody
	public void getTes58(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/pay/bankNumberPrompt")
	@ResponseBody
	public void getTes59(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/*")
	@ResponseBody
	public void getTes60(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/security/authentication")
	@ResponseBody
	public void getTes61(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/system/loadConfigItem")
	@ResponseBody
	public void getTes62(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/appointmentInvestProList")
	@ResponseBody
	public void getTes63(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/appointmentInvestRecord")
	@ResponseBody
	public void getTes64(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/appointmentInvestCancel")
	@ResponseBody
	public void getTes65(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/appointmentCheckMoney")
	@ResponseBody
	public void getTes66(HttpServletRequest request, HttpServletResponse response) {
	}

	@RequestMapping(value = "app/product/appointmentInvest")
	@ResponseBody
	public void getTes67(HttpServletRequest request, HttpServletResponse response) {
	}

	/*-----------------------------------------------------------------------------------------------*/
	@RequestMapping(value = "app/login/open", method = RequestMethod.GET)
	@ResponseBody
	public Map<String, Object> getTes29(HttpServletRequest request, HttpServletResponse response) {
		String phone = request.getParameter("phone");
		Map<String, Object> mResult = new HashMap<>();
		List<User> findAll = userService.findAll();
		boolean registered = false;
		for (User user : findAll) {
			if (user.getPhone().equals(phone)) {
				registered = true;
			}
		}
		if (registered)
			mResult.put("status", "2");
		else
			mResult.put("status", "0");
		mResult.put("agreement_url", "http://baidu.com");
		mResult.put("cert_indentity", "0");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/login/login")
	@ResponseBody
	public Map<String, Object> getTes39(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		String password = jsonObj.getString("password");
		String phone = jsonObj.getString("phone");

		User resultUser = userService.findByPhone(phone);
		if (password.equals(resultUser.getPassword())) {
			mResult.put("uid", resultUser.getId() + "");
			mResult.put("phone", resultUser.getPhone());
			return getMapList(mResult);
		} else {
			return getFaileMapList(mResult);
		}

	}

	@RequestMapping(value = "app/register")
	@ResponseBody
	public Map<String, Object> getTes57(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		String password = jsonObj.getString("password");
		String phone = jsonObj.getString("phone");
		Map<String, Object> mResult = new HashMap<>();

		User user = new User(10215365, "11", "tg" + phone, phone);
		user.setPassword(password);
		userService.save(user);

		User resultUser = userService.findByPhone(phone);

		mResult.put("uid", String.valueOf(resultUser.getId()));
		mResult.put("phone", phone);
		return getMapList(mResult);

	}

	@RequestMapping(value = "app/verification/sendSMS")
	@ResponseBody
	public Map<String, Object> getTes59(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		mResult.put("verification_no", "1001");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/password/reset", method = RequestMethod.PUT)
	@ResponseBody
	public Map<String, Object> getTes96(@RequestBody BaseRequestBody mBaseRequestBody, HttpServletRequest request, HttpServletResponse response) {
		boolean update = false;
		String new_password = mBaseRequestBody.getNew_password();
		if (!StringUtils.isEmpty(mBaseRequestBody.getPhone())) {
			String phone = mBaseRequestBody.getPhone();
			User resultUser = userService.findByPhone(phone);
			resultUser.setPassword(new_password);
			update = userService.update(resultUser);
		} else {
			String uid = mBaseRequestBody.getUid();
			User resultUser = userService.findById(StringUtils.toInt(uid, 0));
			resultUser.setPassword(new_password);
			update = userService.update(resultUser);
		}

		Map<String, Object> mResult = new HashMap<>();

		if (update) {
			mResult.put("id", "1001");
			return getMapList(mResult);
		} else {
			mResult.put("id", "1001");
			return getFaileMapList(mResult);
		}

	}

	@RequestMapping(value = "app/realname/findMbVtStatus", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes97(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		if (jsonObj.has("uid") && (!StringUtils.isEmpty(jsonObj.getString("uid")))) {
			mResult.put("identityVtStatus", "0");
			mResult.put("sesameVtStatus", "0");
			mResult.put("bankCardVtStatus", "0");
			mResult.put("contactVtStatus", "0");
			mResult.put("phoneVtStatus", "0");
		} else {
			mResult.put("bankCardVtStatus", "0");
			mResult.put("contactVtStatus", "0");
			mResult.put("identityVtStatus", "0");
			mResult.put("phoneVtStatus", "0");
			mResult.put("sesameVtStatus", "0");

		}
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/phone/validOperatorPassword", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes975(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		mResult.put("status", "1");
		mResult.put("authImg", "iVBORw0KGgoAAAANSUhEUgAAAGQAAAAoCAIAAACHGsgUAAAEYUlEQVR42u2Y/U9TVxjH/QOWLNmcS6YbmVlMDPGXZdniLzNzSxZCjBtGiSNu05jgNtwAYWa6oSNsvgAWBkNhkjLEuspLeVEoKW+KiAUkgrVYKIVNqGlprbYolPZ2+zbPckdaYKfl9hdynjxpzvme3ie3n57zPefeVX/zYI5VHAGHxWFxWBwWh8VhcQQcFofFYXFYHBaHFdCfcT/Vj/bqjFrThN7n83FAi8JquFaWlvtRSvY2SrSnHGaWKk/MrsPPZyMvf9EUPHq9sBdD372Q4xOY6Jv1w0kvRs/PlLVv5sYkDFxtWfrCKpX2udV75+ea1w7sTMi/p5+QGNbl5kIAatVWYXLNzs0MjnSX1Z9krKK7MkKwimP/CBhyT89lri/EkGyznLFaf62aGOV8+ElR/IHUV98SqVmMYyyw3o/5aduO7JfWJVJ33RtJUzanZLBsjx+ClKIpL7wqHTItcJzcVHJ0zZmAoeaszp83nsOoYl8DY7X6rDxC47Ta0BU8XlnsHlIGm9pYYHV1G/wXCr7EpPOkYEgyWHfu3wCsuvbS8KoARMbafHwCim3UIerOh9PAV/1NM3QAZaz226dfgwsmlKgo0zIJlqnnDjsshFozQIpC2SUZrLHJIcD6VrbjnrEnjCpYYvJd1W25twAFS/K/uz+oxlC/Uh+gLx3fb9oKLgVx+0XlxLtxUI5s3OIThJBglZS2ktLXb5LSsyo1ReTrSnXB9LMQVjhsG+aN6UPOhXVHutVgR3e4daw2rQUNbAIs1bzuOZpEiuQMdB1mS+m+VFI65UpGg29p042NW8/L219Z/yW6CZ8XSr8bdvSqaDesclVTspSYHLSABaaPy/IUjQt76kj/fbeK/L4svibYyxYLY3cfoTkU9Xb66++I1g4j+99rg3dDZHJ6+czsXETOWRb7g7yKNBEWC6+B6iEwMt184F9BL8tg52j8qZ2EaNZZ0YadBe+Si4VWWT8f1qmtOy+lHJ/QGViuFWHFfnw6Zvspatc19EXwBC8I3pBgXf2hA8tQ8PjdpDSuEoy8bu+vH1Rc2n8FyqzTvdj5a8EAGoKF9RjqjwnwrM1bMtCO2nDQYn0SwcedkGCVJ9SeiC4WHR1oVKmaI6tzH/3lv8X7zaNQesoHGW8IByuQOhr9Xhg/JgAWTJ26cfFnIgjrF8XhQznbHc4plhJZG4pEn6KNr/XZWUw3UrqK+6EAGeMN0REUp4flw0J8lSwnZbzkAlICWPkX0xs7K8bNBq/XA8+62CiDx7fcqmTbvLxgoc68Tl1gmp/+I1JiI77gmfGwVJu2O2gNqo7lSALLbnfh+E6kpIF17Oxn4vMg8sdze7V3NYzXj7SPg8Xd+uFgUpQwr+NRBayPTZprBOt2zb8eZxBqKMODhcABQoQlCD4JluFjl23IdFtn1E5YRsOutSCsZf6ZIcFaIpY/raR8n7UgKQl5rbSXf5EgtWLflHJYy+K1kt+U8uCwOCwOi8PisDgsHhyWZPEPosFn0vSEsZgAAAAASUVORK5CYII=");
		mResult.put("smsLabel", "0");
		mResult.put("taskId", "0");
		mResult.put("taskStage", "0");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/borrow/detail", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes97545(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		mResult.put("openMoneyTime", "2017.5.6");
		mResult.put("recordBorrowMoney", "1000");
		mResult.put("recordBorrowStatus", "5");
		mResult.put("recordBorrowLines", "30");
		mResult.put("recordId", "123");
		mResult.put("repayDay", "-3");
		mResult.put("repayMoney", "1005");
		mResult.put("repayTime", "2017.6.6");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/phone/retryOperatorCode", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes976(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		mResult.put("status", "1");
		mResult.put("authImg", "0");
		mResult.put("smsLabel", "0");
		mResult.put("taskId", "0");
		mResult.put("taskStage", "0");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/contact/findContact", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes9778(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		mResult.put("kinPhone", "kinPhone");
		mResult.put("kinRelationType", "kinRelationType");
		mResult.put("satus", "1");
		mResult.put("societyPhone", "societyPhone");
		mResult.put("societyRelationType", "societyRelationType");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/bankcard/info", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes977811(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		mResult.put("bankName", "中国工商银行");
		mResult.put("canDelete", "1");
		mResult.put("cardNo", "");
		mResult.put("iconUrl",
				"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg");
		mResult.put("id", "123");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/contact/saveContact", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes97781(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		mResult.put("id", "1");
		return getMapList(mResult);
	}
	@RequestMapping(value = "app/repay/submit", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes9775681(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		mResult.put("url", "alipays://platformapi/startApp?appId=10000011&&app_pay=Y&&actionType=WebView&&url=http%3A%2F%2Fpa");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/bankcard/add", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes9778112(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		mResult.put("id", "1");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/bankcard/del", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes977811285(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		mResult.put("id", "1");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/phone/validOperatorCode", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes977(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		mResult.put("id", "1");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/borrow/calcMoney", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes972(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		String day = jsonObj.getString("day");
		String money = jsonObj.getString("money");
		int realMoney = StringUtils.toInt(day, 0) * StringUtils.toInt(money, 0);
		int repayMoney = realMoney + 20;
		mResult.put("realMoney", realMoney + "");
		mResult.put("repayMoney", repayMoney + "");
		mResult.put("cost", "20");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/borrow/configuration", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes973(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();

		mResult.put("borrowButtonText", "发起借款，需芝麻分");
		mResult.put("protocolTitle", "《借款协议》");
		mResult.put("protocolUrl", "http://baidu.com");
		return getMapList(mResult);
	}
	@RequestMapping(value = "app/borrow/submit", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes97385(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		
		mResult.put("borrowButtonText", "发起借款，需芝麻分");
		mResult.put("recordId", "56985");
		mResult.put("protocolUrl", "http://baidu.com");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/account/base", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes970(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		if (jsonObj.has("uid") && (!StringUtils.isEmpty(jsonObj.getString("uid")))) {
			mResult.put("balance", "0");
			mResult.put("borrowMoney", "1000");
			mResult.put("phone", "1000");
		} else {
			mResult.put("balance", "1000");
			mResult.put("borrowMoney", "0");

		}
		return getMapList(mResult);
	}

	/**
	 * @param file
	 * @param request
	 * @param response
	 * @return 上传图片
	 */
	@RequestMapping(value = "app/realname/uploadIdCardImg")
	@ResponseBody
	public Map<String, Object> getTes974(@RequestParam MultipartFile file, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		mResult.put("imgUrl", "http://imgsrc.baidu.com/forum/pic/item/3b292df5e0fe992508c5b9fa34a85edf8cb1714b.jpg");
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/contacts/addEmergency", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes971(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		if (jsonObj.has("uid") && (!StringUtils.isEmpty(jsonObj.getString("uid")))) {
			mResult.put("bankCardVtStatus", "1");
			mResult.put("contactVtStatus", "1");
			mResult.put("identityVtStatus", "1");
			mResult.put("phoneVtStatus", "1");
			mResult.put("sesameVtStatus", "1");
		} else {
			mResult.put("bankCardVtStatus", "0");
			mResult.put("contactVtStatus", "0");
			mResult.put("identityVtStatus", "0");
			mResult.put("phoneVtStatus", "0");
			mResult.put("sesameVtStatus", "0");

		}
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/realname/info", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getTes974(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> mResult = new HashMap<>();
		if (jsonObj.has("uid") && (!StringUtils.isEmpty(jsonObj.getString("uid")))) {
			mResult.put("idCard", "4127759689565");
			mResult.put("idcardFmImgUrl",
					"https://imgsa.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=615dbb42263fb80e18dc698557b8444b/0eb30f2442a7d933a8215300aa4bd11373f00133.jpg");
			mResult.put("idcardLiveImgUrl",
					"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494491043441&di=eb30b1d066aa0293345b44b515e7f48c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fforum%2Fw%3D580%2Fsign%3Dfd3be18b14950a7b75354ecc3ad0625c%2Fde47d52a6059252d6519a7b93d9b033b5ab5b9bb.jpg");
			mResult.put("idcardZmImgUrl",
					"https://imgsa.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=d8801549374e251ff6faecaac6efa272/6f061d950a7b0208e240889265d9f2d3572cc83c.jpg");
			mResult.put("identityActiveDate", "2018.5.6");
			mResult.put("mbCertIdentity", "1");
			mResult.put("name", "海洋");
		} else {
			mResult.put("idCard", "1");
			mResult.put("idcardFmImgUrl", "1");
			mResult.put("idcardLiveImgUrl", "1");
			mResult.put("idcardZmImgUrl", "1");
			mResult.put("identityActiveDate", "1");
			mResult.put("mbCertIdentity", "1");
			mResult.put("name", "1");
		}
		return getMapList(mResult);
	}

	@RequestMapping(value = "app/account/notice", method = RequestMethod.POST)
	@ResponseBody
	public void getTes98(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		String jsonStr = "{\"code\":\"200\",\"result\":{\"noticeList\":[{\"url\":\"http://taobao.com\",\"title\":\"快来借钱吧\",\"level\":\"1\"},{\"url\":\"http://baidu.com\",\"title\":\"不管你们信不信我是信了，有钱借\",\"level\":\"2\"},{\"url\":\"http://51job.com\",\"title\":\"糖果上线额\",\"level\":\"1\"}]}}";
		try {
			response.setContentType("application/json;charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(jsonStr);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "app/bankcard/support", method = RequestMethod.POST)
	@ResponseBody
	public void getTes9889(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		String jsonStr = "{\"code\":\"200\",\"result\":{\"bankList\":[{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容2\",\"bankId\":\"测试内容2\",\"bankName\":\"测试内容2\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"},{\"bankCode\":\"测试内容1\",\"bankId\":\"测试内容1\",\"bankName\":\"测试内容1\",\"iconUrl\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1494838274890&di=865df8170e348210e682b9ee91da3ba3&imgtype=0&src=http%3A%2F%2Fpic27.photophoto.cn%2F20130613%2F0022005511311660_b.jpg\"}]}}";
		try {
			response.setContentType("application/json;charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(jsonStr);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "app/advert/home", method = RequestMethod.POST)
	@ResponseBody
	public void getTes99(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		String jsonStr = "{\"code\":\"200\",\"result\":{\"adList\":[{\"linkUrl\":\"http://baidu.com\",\"imgUrl\":\"https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D200/sign=43bce27e85025aafcc3279cbcbecab8d/562c11dfa9ec8a13f188f35ef003918fa1ecc0fa.jpg\",\"title\":\"1\"}]}}";
		try {
			response.setContentType("application/json;charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(jsonStr);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "app//account/help", method = RequestMethod.POST)
	@ResponseBody
	public void getTes9911(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		String jsonStr = "{\"code\":\"200\",\"result\":{\"qaList\":[{\"qaList\":[{\"text\":\"测试内容vp3d\",\"title\":\"测试内容ut22\"}],\"text\":\"测试内容w7nv\",\"title\":\"测试内容xpf7\"},{\"qaList\":[{\"text\":\"测试内容vp3d\",\"title\":\"测试内容ut22\"}],\"text\":\"测试内容w7nv\",\"title\":\"测试内容xpf7\"},{\"qaList\":[{\"text\":\"测试内容vp3d\",\"title\":\"测试内容ut22\"}],\"text\":\"测试内容w7nv\",\"title\":\"测试内容xpf7\"},{\"qaList\":[{\"text\":\"测试内容vp3d\",\"title\":\"测试内容ut22\"}],\"text\":\"测试内容w7nv\",\"title\":\"测试内容xpf7\"}]}}";
		try {
			response.setContentType("application/json;charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(jsonStr);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@RequestMapping(value = "app/account/message", method = RequestMethod.POST)
	@ResponseBody
	public void getTes100(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		String jsonStr = "";
		if (jsonObj.getString("pageNo").equals("2"))
			// jsonStr =
			// "{\"code\":\"200\",\"unread\":\"2\",\"result\":{\"messageList\":[]}}";
			jsonStr = "{\"code\":\"200\",\"unread\":\"2\",\"result\":{\"messageList\":[{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"0\",\"text\":\"http://baidu.com卡茨介绍，除了大型的基础设施建设项目外，以色列还开始大量引进中国的机械设备。几年前，在以色列还完全看不到中国制造的公交车，但现在已经有五六家中国公司在向以色列提供大巴汽车。特拉维夫轻轨建好后，其列车车厢将由中国中车集团提供，这也是以色列第一次引进中国车厢。此前，进入以色列的铁路客车产品全部来自欧洲。\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"0\",\"text\":\"http://baidu.com卡茨介绍，除了大型的基础设施建设项目外，以色列还开始大量引进中国的机械设备。几年前，在以色列还完全看不到中国制造的公交车，但现在已经有五六家中国公司在向以色列提供大巴汽车。特拉维夫轻轨建好后，其列车车厢将由中国中车集团提供，这也是以色列第一次引进中国车厢。此前，进入以色列的铁路客车产品全部来自欧洲。\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"1\",\"text\":\"茨认为，“地区和平之轨道”铁路计划将带来重大的经济利益。他说，中东地区人口目前有3.5亿，未来25年内将达到7亿。可以预计，届时对产品、货物的需求会大大增加。这个铁路规划将使波斯湾与地中海之间的货运路程从海运的6000公里缩短至不到2000公里，时间成本和运输费用也将大幅减少。此外，这个铁路计划还具有重大的战略意义，它将使中东成为国际货物转运的中转站，强化以色列与阿拉伯国家之间的经济联系\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"1\",\"text\":\"http://baidu.com卡茨介绍，除了大型的基础设施建设项目外，以色列还开始大量引进中国的机械设备。几年前，在以色列还完全看不到中国制造的公交车，但现在已经有五六家中国公司在向以色列提供大巴汽车。特拉维夫轻轨建好后，其列车车厢将由中国中车集团提供，这也是以色列第一次引进中国车厢。此前，进入以色列的铁路客车产品全部来自欧洲。\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"1\",\"text\":\"在采访中，卡茨坦承，以色列还希望在“一带一路”框架下推动以和阿拉伯国家关系的改善。他说，中国和以色列、阿拉伯国家均保持良好的关系，中国企业在以色列承建项目，在阿拉伯国家也有大量的工程项目，可以发挥桥梁作用将这两边的项目对接起来，从而推动以阿关系的发展\"}]}}";
		else if (Integer.parseInt(jsonObj.getString("pageNo")) > 3)
			jsonStr = "{\"code\":\"200\",\"unread\":\"2\",\"result\":{\"messageList\":[]}}";

		else
			jsonStr = "{\"code\":\"200\",\"unread\":\"2\",\"result\":{\"messageList\":[{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"0\",\"text\":\"http://baidu.com卡茨介绍，除了大型的基础设施建设项目外，以色列还开始大量引进中国的机械设备。几年前，在以色列还完全看不到中国制造的公交车，但现在已经有五六家中国公司在向以色列提供大巴汽车。特拉维夫轻轨建好后，其列车车厢将由中国中车集团提供，这也是以色列第一次引进中国车厢。此前，进入以色列的铁路客车产品全部来自欧洲。\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"0\",\"text\":\"http://baidu.com卡茨介绍，除了大型的基础设施建设项目外，以色列还开始大量引进中国的机械设备。几年前，在以色列还完全看不到中国制造的公交车，但现在已经有五六家中国公司在向以色列提供大巴汽车。特拉维夫轻轨建好后，其列车车厢将由中国中车集团提供，这也是以色列第一次引进中国车厢。此前，进入以色列的铁路客车产品全部来自欧洲。\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"1\",\"text\":\"茨认为，“地区和平之轨道”铁路计划将带来重大的经济利益。他说，中东地区人口目前有3.5亿，未来25年内将达到7亿。可以预计，届时对产品、货物的需求会大大增加。这个铁路规划将使波斯湾与地中海之间的货运路程从海运的6000公里缩短至不到2000公里，时间成本和运输费用也将大幅减少。此外，这个铁路计划还具有重大的战略意义，它将使中东成为国际货物转运的中转站，强化以色列与阿拉伯国家之间的经济联系\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"1\",\"text\":\"http://baidu.com卡茨介绍，除了大型的基础设施建设项目外，以色列还开始大量引进中国的机械设备。几年前，在以色列还完全看不到中国制造的公交车，但现在已经有五六家中国公司在向以色列提供大巴汽车。特拉维夫轻轨建好后，其列车车厢将由中国中车集团提供，这也是以色列第一次引进中国车厢。此前，进入以色列的铁路客车产品全部来自欧洲。\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"1\",\"text\":\"在采访中，卡茨坦承，以色列还希望在“一带一路”框架下推动以和阿拉伯国家关系的改善。他说，中国和以色列、阿拉伯国家均保持良好的关系，中国企业在以色列承建项目，在阿拉伯国家也有大量的工程项目，可以发挥桥梁作用将这两边的项目对接起来，从而推动以阿关系的发展\"}]}}";
		try {
			response.setContentType("application/json;charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(jsonStr);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	private Map<String, Object> getMapList(Map<String, Object> mResult) {
		Map<String, Object> mMap = new HashMap<String, Object>();
		mMap.put("code", "200");
		mMap.put("result", mResult);
		return mMap;
	}

	private Map<String, Object> getFaileMapList(Map<String, Object> mResult) {
		Map<String, Object> mMap = new HashMap<String, Object>();
		mMap.put("code", "100");
		mMap.put("message", "失败");
		return mMap;
	}
	
	
	
	
	
	@RequestMapping(value = "app/v1/group/get-group-stock", method = RequestMethod.POST)
	@ResponseBody
	public void getTes101(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		String jsonStr = "";
		if (jsonObj.getString("pageNo").equals("2"))
			// jsonStr =
			// "{\"code\":\"200\",\"unread\":\"2\",\"result\":{\"messageList\":[]}}";
			jsonStr = "{\"code\":\"200\",\"unread\":\"2\",\"result\":{\"messageList\":[{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"0\",\"text\":\"http://baidu.com卡茨介绍，除了大型的基础设施建设项目外，以色列还开始大量引进中国的机械设备。几年前，在以色列还完全看不到中国制造的公交车，但现在已经有五六家中国公司在向以色列提供大巴汽车。特拉维夫轻轨建好后，其列车车厢将由中国中车集团提供，这也是以色列第一次引进中国车厢。此前，进入以色列的铁路客车产品全部来自欧洲。\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"0\",\"text\":\"http://baidu.com卡茨介绍，除了大型的基础设施建设项目外，以色列还开始大量引进中国的机械设备。几年前，在以色列还完全看不到中国制造的公交车，但现在已经有五六家中国公司在向以色列提供大巴汽车。特拉维夫轻轨建好后，其列车车厢将由中国中车集团提供，这也是以色列第一次引进中国车厢。此前，进入以色列的铁路客车产品全部来自欧洲。\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"1\",\"text\":\"茨认为，“地区和平之轨道”铁路计划将带来重大的经济利益。他说，中东地区人口目前有3.5亿，未来25年内将达到7亿。可以预计，届时对产品、货物的需求会大大增加。这个铁路规划将使波斯湾与地中海之间的货运路程从海运的6000公里缩短至不到2000公里，时间成本和运输费用也将大幅减少。此外，这个铁路计划还具有重大的战略意义，它将使中东成为国际货物转运的中转站，强化以色列与阿拉伯国家之间的经济联系\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"1\",\"text\":\"http://baidu.com卡茨介绍，除了大型的基础设施建设项目外，以色列还开始大量引进中国的机械设备。几年前，在以色列还完全看不到中国制造的公交车，但现在已经有五六家中国公司在向以色列提供大巴汽车。特拉维夫轻轨建好后，其列车车厢将由中国中车集团提供，这也是以色列第一次引进中国车厢。此前，进入以色列的铁路客车产品全部来自欧洲。\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"1\",\"text\":\"在采访中，卡茨坦承，以色列还希望在“一带一路”框架下推动以和阿拉伯国家关系的改善。他说，中国和以色列、阿拉伯国家均保持良好的关系，中国企业在以色列承建项目，在阿拉伯国家也有大量的工程项目，可以发挥桥梁作用将这两边的项目对接起来，从而推动以阿关系的发展\"}]}}";
		else if (Integer.parseInt(jsonObj.getString("pageNo")) > 3)
			jsonStr = "{\"code\":\"200\",\"unread\":\"2\",\"result\":{\"messageList\":[]}}";

		else
			jsonStr = "{\"code\":\"200\",\"unread\":\"2\",\"result\":{\"messageList\":[{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"0\",\"text\":\"http://baidu.com卡茨介绍，除了大型的基础设施建设项目外，以色列还开始大量引进中国的机械设备。几年前，在以色列还完全看不到中国制造的公交车，但现在已经有五六家中国公司在向以色列提供大巴汽车。特拉维夫轻轨建好后，其列车车厢将由中国中车集团提供，这也是以色列第一次引进中国车厢。此前，进入以色列的铁路客车产品全部来自欧洲。\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"0\",\"text\":\"http://baidu.com卡茨介绍，除了大型的基础设施建设项目外，以色列还开始大量引进中国的机械设备。几年前，在以色列还完全看不到中国制造的公交车，但现在已经有五六家中国公司在向以色列提供大巴汽车。特拉维夫轻轨建好后，其列车车厢将由中国中车集团提供，这也是以色列第一次引进中国车厢。此前，进入以色列的铁路客车产品全部来自欧洲。\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"1\",\"text\":\"茨认为，“地区和平之轨道”铁路计划将带来重大的经济利益。他说，中东地区人口目前有3.5亿，未来25年内将达到7亿。可以预计，届时对产品、货物的需求会大大增加。这个铁路规划将使波斯湾与地中海之间的货运路程从海运的6000公里缩短至不到2000公里，时间成本和运输费用也将大幅减少。此外，这个铁路计划还具有重大的战略意义，它将使中东成为国际货物转运的中转站，强化以色列与阿拉伯国家之间的经济联系\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"1\",\"text\":\"http://baidu.com卡茨介绍，除了大型的基础设施建设项目外，以色列还开始大量引进中国的机械设备。几年前，在以色列还完全看不到中国制造的公交车，但现在已经有五六家中国公司在向以色列提供大巴汽车。特拉维夫轻轨建好后，其列车车厢将由中国中车集团提供，这也是以色列第一次引进中国车厢。此前，进入以色列的铁路客车产品全部来自欧洲。\"},{\"date\":\"2017-8-9  20:56\",\"title\":\"大型的基础设施建设项目外\",\"status\":\"1\",\"text\":\"在采访中，卡茨坦承，以色列还希望在“一带一路”框架下推动以和阿拉伯国家关系的改善。他说，中国和以色列、阿拉伯国家均保持良好的关系，中国企业在以色列承建项目，在阿拉伯国家也有大量的工程项目，可以发挥桥梁作用将这两边的项目对接起来，从而推动以阿关系的发展\"}]}}";
		try {
			response.setContentType("application/json;charset=UTF-8");
			response.setCharacterEncoding("UTF-8");
			response.getWriter().write(jsonStr);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
