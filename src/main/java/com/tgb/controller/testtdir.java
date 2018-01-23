package com.tgb.controller;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Map;

import com.tgb.util.MD5Util;
import com.tgb.util.UrlUtils;

public class testtdir {

	public static void main(String[] args) {

		

		String mid = "";
		String wapUrl = "http://192.168.3.240:9050";
		String channel = "Android";
		String key = "xiaocaimi";
		String H5_LOGIN = "/appLogin.html";
		String sign = MD5Util.MD5(MD5Util.MD5(mid.concat(key)));
		String linkUrl = "http://192.168.3.240:9050/list.html?spm=2017.0.0.4.0.0.0";

		String backUrl = null;
		try {
			backUrl = URLEncoder.encode(linkUrl,"UTF-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}

		StringBuilder builder = new StringBuilder();
		builder.append(wapUrl);
		builder.append(H5_LOGIN);
		builder.append("?source=");
		builder.append(channel);
		builder.append("&uid=");
		builder.append(mid);
		builder.append("&sign=");
		builder.append(sign);
		builder.append("&backUrl=");
		builder.append(backUrl);

		String linkedUrl = builder.toString();

		System.out.println("" + linkedUrl);
		String str=	"";
				//"http://192.168.3.240:9050/appLogin.html?source=iOS&uid=&sign=2b03190a7f5a46680d9eb0cc8e5bae3e&backUrl=http%3A%2F%2F192.168.3.240%3A9050%2Fevent%2FcommunityLP.do%3Fsource%3DiOS";
		Map map = UrlUtils.URLRequest(str);

		System.out.println("" + map.get("backUrl"));
		System.out.println("" +  URLEncoder.encode("http://192.168.3.240:9050"));
		 StringBuffer addInfo1 = new StringBuffer();
			System.out.println(MD5Util.string2MD5("119"));
			System.out.println(MD5Util.string2MD5("111"));
			System.out.println(addInfo1.toString()+"sb");
	}
	




}
