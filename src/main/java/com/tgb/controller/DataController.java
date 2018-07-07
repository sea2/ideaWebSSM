package com.tgb.controller;

import java.io.BufferedReader;
import java.io.ByteArrayOutputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.codehaus.jackson.JsonParseException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.tgb.entity.BaseRequestBody;
import com.tgb.model.AddProject;
import com.tgb.model.AllProject;
import com.tgb.model.DataTest;
import com.tgb.model.ProjectResult;
import com.tgb.model.ProjectResult.ProjectInfo;
import com.tgb.service.DataService;
import com.tgb.util.MD5Util;
import com.tgb.util.StringUtils;

import net.sf.json.JSONObject;

@Controller
public class DataController {
	@Autowired
	private DataService dataService;

	@ResponseBody
	@RequestMapping(value = "app/account/adddata", method = RequestMethod.POST)
	public AddProject addData(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response,
			@RequestParam("username") String username) {
		AddProject mAddProject = new AddProject();
		if (jsonObj != null && jsonObj.has("projectid")) {
			ObjectMapper mapper = new ObjectMapper();
			ProjectInfo mAddprojectInfo;
			try {
				mAddprojectInfo = mapper.readValue(jsonObj.toString(), ProjectInfo.class);
				DataTest dataTest = new DataTest();
				dataTest.setType(1);
				dataTest.setTypeRemark("产品测试");
				dataTest.setString1(mAddprojectInfo.getProjectid());
				dataTest.setString2(mAddprojectInfo.getProjectmoney());
				dataTest.setString3(mAddprojectInfo.getProjectname());
				dataTest.setString4(mAddprojectInfo.getProjecttype());
				boolean bl = dataService.save(dataTest);
				if (bl) {
					mAddProject.setCode("200");
					mAddProject.setResult(mAddprojectInfo);
				} else {
					mAddProject.setCode("100");
					mAddProject.setMessage("添加失败");
				}
			} catch (JsonParseException e) {
				e.printStackTrace();
			} catch (JsonMappingException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		} else {
			mAddProject.setCode("100");
			mAddProject.setMessage("未收到产品信息");
		}
		return mAddProject;
	}

	@ResponseBody
	@RequestMapping(value = "app/account/adddatatest", method = RequestMethod.POST)
	public void addDataTest(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {
		String jsonStr = "{\"code\":\"200\",\"result\":\"{}\"}";
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

	@ResponseBody
	@RequestMapping(value = "app/account/adddatatestget", method = RequestMethod.GET)
	public void addDataTest2(HttpServletRequest request, HttpServletResponse response) {
		String jsonStr = "{\"code\":\"200\",\"result\":\"{}\"}";
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e1) {
			e1.printStackTrace();
		}
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

	@ResponseBody
	@RequestMapping(value = "app/account/alldata", method = RequestMethod.POST)
	public AllProject allData(HttpServletRequest request, HttpServletResponse response) {
		AllProject mAllProject = new AllProject();
		List<DataTest> list = dataService.findAll();
		ProjectResult mAddprojectResult = new ProjectResult();
		List<ProjectInfo> listproject = new ArrayList<ProjectInfo>();
		for (int i = 0; i < list.size(); i++) {
			DataTest mDataTest = list.get(i);
			ProjectResult.ProjectInfo mProjectInfo = new ProjectResult.ProjectInfo();
			mProjectInfo.setProjectid(mDataTest.getString1());
			mProjectInfo.setProjectmoney(mDataTest.getString2());
			mProjectInfo.setProjectname(mDataTest.getString3());
			mProjectInfo.setProjecttype(mDataTest.getString4());
			listproject.add(mProjectInfo);
		}
		mAddprojectResult.setListproject(listproject);
		mAllProject.setCode("200");
		mAllProject.setResult(mAddprojectResult);
		return mAllProject;
	}

	@ResponseBody
	@RequestMapping(value = "app/account/databytype", method = RequestMethod.POST)
	public AllProject getByType(@RequestBody JSONObject jsonObj, HttpServletRequest request,
			HttpServletResponse response) {
		AllProject mAllProject = new AllProject();
		if (jsonObj != null && jsonObj.has("type")) {
			List<DataTest> list = dataService.findByType(StringUtils.toInt(jsonObj.getString("type"), 0));
			ProjectResult mAddprojectResult = new ProjectResult();
			List<ProjectInfo> listproject = new ArrayList<ProjectInfo>();
			for (int i = 0; i < list.size(); i++) {
				DataTest mDataTest = list.get(i);
				ProjectResult.ProjectInfo mProjectInfo = new ProjectResult.ProjectInfo();
				mProjectInfo.setProjectid(mDataTest.getString1());
				mProjectInfo.setProjectmoney(mDataTest.getString2());
				mProjectInfo.setProjectname(mDataTest.getString3());
				mProjectInfo.setProjecttype(mDataTest.getString4());
				listproject.add(mProjectInfo);
			}
			mAddprojectResult.setListproject(listproject);
			mAllProject.setCode("200");
			mAllProject.setResult(mAddprojectResult);

		} else {
			mAllProject.setCode("100");
			mAllProject.setMessage("未收到产品type");
		}
		return mAllProject;
	}

	@ResponseBody
	@RequestMapping(value = "app/account/databyid", method = RequestMethod.POST)
	public AllProject getById(@RequestBody JSONObject jsonObj, HttpServletRequest request,
			HttpServletResponse response) {
		AllProject mAllProject = new AllProject();
		if (jsonObj != null && jsonObj.has("id")) {
			ProjectResult result = new ProjectResult();
			DataTest datatest = dataService.findById(StringUtils.toInt(jsonObj.getString("id"), 0));
			List<ProjectInfo> listproject = new ArrayList<ProjectInfo>();
			ProjectResult.ProjectInfo mProjectInfo = new ProjectResult.ProjectInfo();
			mProjectInfo.setProjectid(datatest.getString1());
			mProjectInfo.setProjectmoney(datatest.getString2());
			mProjectInfo.setProjectname(datatest.getString3());
			mProjectInfo.setProjecttype(datatest.getString4());
			listproject.add(mProjectInfo);
			result.setListproject(listproject);
			mAllProject.setCode("200");
			mAllProject.setResult(result);
		} else {
			mAllProject.setCode("100");
			mAllProject.setMessage("未收到产品type");
		}
		return mAllProject;
	}

	@ResponseBody
	@RequestMapping(value = "app/system/clamantNotice")
	public void clamantNotice(HttpServletRequest request, HttpServletResponse response) {
		String jsonStr = "";
		if ("POST".equals(request.getMethod())) {
			BufferedReader in;
			try {
				in = new BufferedReader(new InputStreamReader(request.getInputStream()));
				StringBuilder sb = new StringBuilder();
				String line = null;
				while ((line = in.readLine()) != null) {
					sb.append(line);
				}
				if (!StringUtils.isEmpty(sb.toString())) {
					try {
						org.json.JSONObject resultJson = new org.json.JSONObject(sb.toString());
						if (resultJson.has("uid")) {
							String uid = resultJson.getString("uid");
							String sign = getSign(resultJson.getString("sign"));
							if (!StringUtils.isEmpty(uid)) {
								jsonStr = "{\"sign\":\"" + sign
										+ "\",\"code\":\"200\",\"result\":{\"sys_notice\":[{\"id\":\"12\",\"content\":\"中秋节快到了大家辛苦了\",\"linked_url\":\"http://baike.baidu.com/link?url=x51zRc6RKH-A0R5vdmdssYF85D1dnPQkfrVZ5Zzx3Zpj0G6OvfdfO4snJuQbp9tF36OXT7lhtVjCfWXQfsHYZK\"}"
										+ ",{\"id\":\"13\",\"content\":\"十月一快到了\",\"linked_url\":\"http://www.huitu.com/design/show/20160905/141313062200.html\"}]}}";
							} else {
								jsonStr = "{\"code\":\"100\",\"message\":\"uid为空\",\"sign\":\"xxxxxxxxx\"}";
							}
						} else
							jsonStr = "{\"code\":\"100\",\"message\":\"uid为空\",\"sign\":\"xxxxxxxxx\"}";

					} catch (JSONException e) {
						e.printStackTrace();
						jsonStr = "{\"code\":\"100\",\"message\":\"参数信息错误\",\"sign\":\"xxxxxxxxx\"}";
					}
				} else
					jsonStr = "{\"code\":\"100\",\"message\":\"参数信息错误\",\"sign\":\"xxxxxxxxx\"}";

			} catch (IOException e) {
				e.printStackTrace();
				jsonStr = "{\"code\":\"100\",\"message\":\"参数信息错误\",\"sign\":\"xxxxxxxxx\"}";
			}

		} else {
			jsonStr = "{\"code\":\"100\",\"message\":\"请使用POST请求方式\",\"sign\":\"xxxxxxxxx\"}";
		}

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

	@ResponseBody
	@RequestMapping(value = "app/account/activity")
	public void activity(HttpServletRequest request, HttpServletResponse response) {
		String jsonStr = "";
		if ("POST".equals(request.getMethod())) {
			BufferedReader in;
			try {
				in = new BufferedReader(new InputStreamReader(request.getInputStream()));
				StringBuilder sb = new StringBuilder();
				String line = null;
				while ((line = in.readLine()) != null) {
					sb.append(line);
				}
				if (!StringUtils.isEmpty(sb.toString())) {
					try {
						org.json.JSONObject resultJson = new org.json.JSONObject(sb.toString());
						if (resultJson.has("advert_code")) {
							String uid = resultJson.getString("advert_code");
							if (!StringUtils.isEmpty(uid)) {
								jsonStr = "{\"code\":\"200\",\"result\":{\"messages\":[{\"id\":\"2334\",\"title\":\"中秋节\",\"begin_date\":\"2016-9-10\",\"end_date\":\"2016-9-10\",\"expire_flag\":\"1\",\"point\":{\"img_url\":\"http://www.tianqi.com/upload/article/16-09-13/BUCo_160913063922_1.jpg\",\"point_url\":\"http://baike.baidu.com/link?url=SG9kNgjlO7jaAOGQOdqP-rFi1RkPwFsiWSerDTXr9JOgWmcGVbcJQG34TrMz7esgyuyAycd_vdr6Qa4TgAev7Wl84eMRsrhaWQW2XNjaAOW\",\"point_text\":\"文案信息\",\"share_title\":\"分享标题\",\"share_image_url\":\"分享图片url\",\"share_content\":\"分享内容\",\"share_recommend_url\":\"分享地址\",\"share_id\":\"分享id\"}},{\"id\":\"234534\",\"title\":\"十一\",\"begin_date\":\"2016-10-10\",\"end_date\":\"2016-10-10\",\"expire_flag\":\"0\",\"point\":{\"img_url\":\"http://pic85.huitu.com/res/20160905/761647_20160905141313062200_1.jpg\",\"point_url\":\"http://baike.baidu.com/link?url=SG9kNgjlO7jaAOGQOdqP-rFi1RkPwFsiWSerDTXr9JOgWmcGVbcJQG34TrMz7esgyuyAycd_vdr6Qa4TgAev7Wl84eMRsrhaWQW2XNjaAOW\",\"point_text\":\"文案信息\",\"share_title\":\"分享标题\",\"share_image_url\":\"分享图片url\",\"share_content\":\"分享内容\",\"share_recommend_url\":\"分享地址\",\"share_id\":\"分享id\"}}]}}";
							} else {
								jsonStr = "{\"code\":\"100\",\"message\":\"advert_code为空\",\"sign\":\"xxxxxxxxx\"}";
							}
						} else
							jsonStr = "{\"code\":\"100\",\"message\":\"advert_code为空\",\"sign\":\"xxxxxxxxx\"}";

					} catch (JSONException e) {
						e.printStackTrace();
						jsonStr = "{\"code\":\"100\",\"message\":\"参数信息错误\",\"sign\":\"xxxxxxxxx\"}";
					}
				} else
					jsonStr = "{\"code\":\"100\",\"message\":\"参数信息错误\",\"sign\":\"xxxxxxxxx\"}";

			} catch (IOException e) {
				e.printStackTrace();
				jsonStr = "{\"code\":\"100\",\"message\":\"参数信息错误\",\"sign\":\"xxxxxxxxx\"}";
			}

		} else {
			jsonStr = "{\"code\":\"100\",\"message\":\"请使用POST请求方式\",\"sign\":\"xxxxxxxxx\"}";
		}

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

	@ResponseBody
	@RequestMapping(value = "app/product/calcIncome")
	public void calcIncome(HttpServletRequest request, HttpServletResponse response) {
		String jsonStr = "";
		if ("POST".equals(request.getMethod())) {
			BufferedReader in;
			try {
				in = new BufferedReader(new InputStreamReader(request.getInputStream()));
				StringBuilder sb = new StringBuilder();
				String line = null;
				while ((line = in.readLine()) != null) {
					sb.append(line);
				}
				if (!StringUtils.isEmpty(sb.toString())) {
					try {
						org.json.JSONObject resultJson = new org.json.JSONObject(sb.toString());
						if (resultJson.has("type")) {
							String uid = resultJson.getString("type");
							if (!StringUtils.isEmpty(uid)) {
								jsonStr = "{\"code\":\"200\",\"result\":{\"calc_expression\":\"($1+$2)/365*$3*money\",\"val_array\":[\"$1\",\"$2\",\"$3\"]}}";
							} else {
								jsonStr = "{\"code\":\"100\",\"message\":\"type为空\",\"sign\":\"xxxxxxxxx\"}";
							}
						} else
							jsonStr = "{\"code\":\"100\",\"message\":\"type为空\",\"sign\":\"xxxxxxxxx\"}";

					} catch (JSONException e) {
						e.printStackTrace();
						jsonStr = "{\"code\":\"100\",\"message\":\"参数信息错误\",\"sign\":\"xxxxxxxxx\"}";
					}
				} else
					jsonStr = "{\"code\":\"100\",\"message\":\"参数信息错误\",\"sign\":\"xxxxxxxxx\"}";

			} catch (IOException e) {
				e.printStackTrace();
				jsonStr = "{\"code\":\"100\",\"message\":\"参数信息错误\",\"sign\":\"xxxxxxxxx\"}";
			}

		} else {
			jsonStr = "{\"code\":\"100\",\"message\":\"请使用POST请求方式\",\"sign\":\"xxxxxxxxx\"}";
		}

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

	@ResponseBody
	@RequestMapping(value = "app/account/productDetail", method = RequestMethod.POST)
	public void productDetail(@RequestBody JSONObject jsonObj, HttpServletRequest request,
			HttpServletResponse response) {

		String URL = "http://test.91xcm.com:8020/v1.0/app/account/productDetail";

		ObjectMapper mapper = new ObjectMapper();
		try {
			BaseRequestBody bean = mapper.readValue(jsonObj.toString(), BaseRequestBody.class);
			System.out.println(bean.toString());
		} catch (JsonParseException e1) {
			e1.printStackTrace();
		} catch (JsonMappingException e1) {
			e1.printStackTrace();
		} catch (IOException e1) {
			e1.printStackTrace();
		}

		String xmlInfo = jsonObj.toString();
		String strjson = doHttpPost(URL, xmlInfo);
		int strInt = strjson.length();

		String str = strjson.replace("\"result\":{", "\"result\":{\"remark\":\"这个铲平不错哦哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈\",");

		response.setContentType("application/json;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		try {
			response.getWriter().write(str);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@ResponseBody
	@RequestMapping(value = "app/account/bankCard", method = RequestMethod.POST)
	public void bankCard(@RequestBody JSONObject jsonObj, HttpServletRequest request, HttpServletResponse response) {

		String URL = "http://test.91xcm.com:8020/v1.0/app/account/bankCard";

		ObjectMapper mapper = new ObjectMapper();
		try {
			BaseRequestBody bean = mapper.readValue(jsonObj.toString(), BaseRequestBody.class);
			System.out.println(bean.toString());
		} catch (JsonParseException e1) {
			e1.printStackTrace();
		} catch (JsonMappingException e1) {
			e1.printStackTrace();
		} catch (IOException e1) {
			e1.printStackTrace();
		}

		String xmlInfo = jsonObj.toString();
		String strjson = doHttpPost(URL, xmlInfo);
		int strInt = strjson.length();

		String str = strjson.replace("\"result\":{", "\"result\":{\"remark\":\"这个铲平不错哦\",");

		response.setContentType("application/json;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		try {
			response.getWriter().write(str);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	@ResponseBody
	@RequestMapping(value = "app/account/testjson", method = RequestMethod.POST)
	public void getDataTest(@RequestParam String str, @RequestBody JSONObject jsonObj, HttpServletRequest request,
			HttpServletResponse response) {
		String URL = "http://test.91xcm.com:8020/v1.0/app/system/userGuide";

		ObjectMapper mapper = new ObjectMapper();
		try {
			BaseRequestBody bean = mapper.readValue(jsonObj.toString(), BaseRequestBody.class);
			System.out.println(bean.toString());
		} catch (JsonParseException e1) {
			e1.printStackTrace();
		} catch (JsonMappingException e1) {
			e1.printStackTrace();
		} catch (IOException e1) {
			e1.printStackTrace();
		}

		String xmlInfo = jsonObj.toString();
		String strjson = doHttpPost(URL, xmlInfo);
		response.setContentType("application/json;charset=UTF-8");
		response.setCharacterEncoding("UTF-8");
		try {
			response.getWriter().write(strjson);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	/**
	 * 发送Http post请求
	 * 
	 * @param xmlInfo
	 *            json转化成的字符串
	 * @param URL
	 *            请求url
	 * @return 返回信息
	 */
	public String doHttpPost(String URL, String xmlInfo) {
		System.out.println(
				"----------------------------------------------------------request--start---------------------------------------------------------------");
		System.out.println("* " + URL + "\n* 参数:" + xmlInfo);
		byte[] xmlData = xmlInfo.getBytes();
		InputStream instr = null;
		ByteArrayOutputStream swapStream = null;
		try {
			URL url = new URL(URL);
			HttpURLConnection urlCon = (HttpURLConnection) url.openConnection();
			urlCon.setDoOutput(true);// http正文内，因此需要设为true, 默认情况下是false;
			urlCon.setDoInput(true);// 设置是否从httpUrlConnection读入，默认情况下是true;
			urlCon.setRequestProperty("content-Type", " application/json;charset=UTF-8");
			urlCon.setRequestProperty("charset", "utf-8");
			urlCon.setRequestProperty("Content-length", String.valueOf(xmlData.length));
			urlCon.setRequestMethod("POST");

			DataOutputStream printout = new DataOutputStream(urlCon.getOutputStream());
			printout.write(xmlData);
			printout.flush();
			printout.close();
			instr = urlCon.getInputStream();
			swapStream = new ByteArrayOutputStream();
			byte[] buff = new byte[1024]; // //分配1024个字节大小的内存给bufbuff用于存放循环读取的临时数据
			int rc = 0;
			while ((rc = instr.read(buff, 0, 100)) > 0) {
				swapStream.write(buff, 0, rc);
			}
			byte[] bis = swapStream.toByteArray();
			String ResponseString = new String(bis, "UTF-8");
			if ((ResponseString == null) || ("".equals(ResponseString.trim()))) {
				System.out.println("* 返回空");
			}
			System.out.println("* 返回数据为:" + ResponseString);
			return ResponseString;

		} catch (Exception e) {
			e.printStackTrace();
			return "0";
		} finally {
			System.out.println(
					"----------------------------------------------------------request--end---------------------------------------------------------------");
			try {
				if (instr != null)
					instr.close();
				if (swapStream != null)
					swapStream.close();
			} catch (Exception ex) {
			}
		}
	}

	public String getSign(String columnSign) {
		return MD5Util.MD5(MD5Util.MD5(columnSign.concat("xiaocaimi")).concat("xiaocaimipackage"));

		/*
		 * DynamicVariables.VALIDATE_CODE=xiaocaimi
		 * DynamicVariables.PACKAGE_NAME=xiaocaimipackage
		 */

	}

}
