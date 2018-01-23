package com.tgb.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TimeUtil {

	public static String getNowTime() {
		Date now = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");// 可以方便地修改日期格式
		String timeNow = dateFormat.format(now);
		return timeNow;
	}

}
