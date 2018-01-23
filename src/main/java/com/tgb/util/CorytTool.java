package com.tgb.util;

import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CorytTool {

	private final static char hexDigits[] = { '0', '1', '2', '3', '4', '5',
			'6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' };
	// 签名验证的密钥
	// public final static String CIPHER = W00001.TAG1 + W00001.TAGONE +
	// W00002.TAGONE + W00002.TAG1 + W00003.TAGONE + W00003.TAG1
	// + W00004.TAG1 + W00004.TAGONE;

	public final static String CIPHER =  "xiaocaimi";
	public final static String  SUFFIX=  "xiaocaimipackage";

	/**
	 * MD5加密摘要计算
	 * 
	 * @param originstr
	 * @return string
	 */
	public static String ecodeByMD5(String originstr) {
		String result = null;
		if (originstr != null) {
			try {
				MessageDigest md = MessageDigest.getInstance("MD5");
				byte[] source = originstr.getBytes("utf-8");
				md.update(source);
				byte[] tmp = md.digest();
				char[] str = new char[32];
				for (int i = 0, j = 0; i < 16; i++) {
					byte b = tmp[i];
					str[j++] = hexDigits[b >>> 4 & 0xf];
					str[j++] = hexDigits[b & 0xf];
				}
				result = new String(str);// 结果转换成字符串用于返回
			} catch (NoSuchAlgorithmException e) {
				e.printStackTrace();
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();

			}

		}
		return result;
	}

	/**
	 * 服务器响应签名验证
	 * 
	 * @param sign
	 *            服务器签名字符串
	 * @param info
	 *            本地待签名字符串(未加密钥)
	 * @return
	 */
	public static Boolean getSignatureVerification(String sign, String info) {
		String newInfo = info + CIPHER;
		if (ecodeByMD5(newInfo).equals(sign)) {
			return true;
		}
		return false;
	}

	/**
	 * 客户端未签名字符串
	 * 
	 * @param buffer
	 * @return 签名字符串
	 */
	public static String setSign(StringBuffer buffer) {
		return CorytTool.ecodeByMD5(buffer.toString() + CorytTool.CIPHER);
	}

	/**
	 * 日期格式转换
	 * 
	 * @param date
	 * @return
	 */
	public static String dateFromat(Date date) {
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");
		return simpleDateFormat.format(date);
	}

	

}
