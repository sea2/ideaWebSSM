package com.tgb.test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

public class Set_List_Map_Test {

	public static void main(String[] args) {
		List<Object> list = new ArrayList<>();
		list.add(1);
		list.add(2);
		list.add(3);
		// 1: 用for循环和get()方法：
		for (int i = 0; i < list.size(); i++) {
			System.out.println(list.get(i));
		}

		// 2: 使用 迭代器（Iterator）:
		Iterator<Object> it = list.iterator();
		while (it.hasNext()) {
			System.out.println(it.next() + "");
		}

		
		Map<String, String> mMap = new HashMap<String, String>();
		mMap.put("key", "value");
		mMap.put("key1", "value1");
		mMap.put("key2", "value2");
		mMap.put("key3", "value3");
		mMap.put("key4", "value4");
		mMap.put("key5", "value5");
		for (String str : mMap.keySet()) {
			System.out.println(mMap.get(str));
		}
		//三目运算
		System.out.println(null != null ? "yes" : "no");
	}

	
}
