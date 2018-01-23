package com.tgb.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.tgb.util.MD5Util;

public class TestRandom {

	public static void main(String[] args) {

		Class<?> class1 = null;
		Class<?> class2 = null;
		Class<?> class3 = null;
		// 一般采用这种形式
		try {
			class1 = Class.forName("com.tgb.controller.TestRandom");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		class2 = new TestRandom().getClass();
		System.out.println("类名称   " + class1.getName());
		System.out.println("类名称   " + class2.getName());

		
		
		                       
		System.out.println("-------------------------- " + Math.acos(0.8));
		System.out.println("-------------------------- " + Math.pow(0.8,2));

	}

	public static String string2HexString(String strPart) {
		StringBuffer hexString = new StringBuffer();
		for (int i = 0; i < strPart.length(); i++) {
			int ch = (int) strPart.charAt(i);
			String strHex = Long.toHexString(ch);
			hexString.append(strHex);
		}
		return hexString.toString();
	}

	// 自定义比较器：按书的价格排序
	static class PriceComparator implements Comparator {
		public int compare(Object object1, Object object2) {// 实现接口中的方法
			String p1 = (String) object1; // 强制转换
			String p2 = (String) object2;
			// p1在前是升序 反之则是降序
			return new String(p1).compareTo(new String(p2));

		}
	}
}
