package com.tgb.test;

import com.tgb.util.DateUtils;
import com.tgb.util.MD5Util;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class DateTest {


    public static void main(String[] arg) {


        try {
            Date a = new Date();
            Thread.sleep(3000);
            Date b = new Date();

            System.out.println("两个时间相差" + DateUtils.getBetweenSecond(a, b) + "秒");//会打印出相差3秒

        } catch (InterruptedException e) {

            e.printStackTrace();
        }


        long millisecond = 1483959625851l;
        long millisecond2 = 1483159625851l;
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
        System.out.println("毫秒[1483159625851]对应日期时间字符串：" + format.format(millisecond));


        System.out.println(toDteFromStringByFormat(format.format(millisecond), "yyyyMMdd") + "--" + isSameDay(toDteFromStringByFormat(format.format(millisecond), "yyyyMMdd"), 0));

        String str = "123456abcdef";
        System.out.println(MD5Util.MD5(str));
        System.out.println(Double.parseDouble(Double.MAX_VALUE+""));


    }


    /**
     * 指定格式String 转为date
     */
    public static Date toDteFromStringByFormat(String dateString, String format) {
        Calendar calendar = Calendar.getInstance();
        try {
            calendar.setTime(new SimpleDateFormat(format).parse(dateString));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new Date(calendar.getTimeInMillis());
    }

    public static boolean isSameDay(Date date, long longTime1) {
        boolean isSame = false;
        String time1 = new SimpleDateFormat("yyyy-MM-dd").format(date);
        String time2 = new SimpleDateFormat("yyyy-MM-dd").format(longTime1);
        if (time1 != null && time2 != null) {
            isSame = time1.equals(time2);
        }
        return isSame;
    }


}

