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
            System.out.println("两个时间相差" + a.getTime());//会打印出相差3秒

        } catch (InterruptedException e) {
            e.printStackTrace();
        }


        long millisecond = 1483959625851L;
        long millisecond2 = 1483159625851L;
        SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
        System.out.println("毫秒[1483159625851]对应日期时间字符串：" + format.format(millisecond));


        System.out.println(toDteFromStringByFormat(format.format(millisecond), "yyyyMMdd") + "--" + isSameDay(toDteFromStringByFormat(format.format(millisecond), "yyyyMMdd"), 0));

        String str = "123456abcdef";
        System.out.println(MD5Util.MD5(str));
        System.out.println(Double.parseDouble(Double.MAX_VALUE + ""));


        int[] arrayInt = new int[]{2, 1, 3, 9, 6, 2, 7, 4, 8, 5};
        String[] arrayStr;
        selectionSort(arrayInt);
        for (int i = 0; i < arrayInt.length; i++) {
            System.out.println(arrayInt[i] + "--");
        }


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

    /**
     * 冒泡排序
     * 将数组排序分成 arr.length - 1比对，
     * 从下到上即从arr.length - 1开始到顶部小标即是i进行交换
     */
    public static void bubbleSort(int[] arr) {
        int temp;//临时存放
        for (int i = 0; i < arr.length - 1; i++) {//比对次数
            for (int j = arr.length - 1; j > i; j--) {
                if (arr[j] < arr[j - 1]) {
                    temp = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = temp;
                }
            }
        }
    }


    /**
     * 选择排序  ,
     * 将数组排序分成 arr.length - 1比对，
     * 然后遍历每一列从上到下选出最小的下标，
     * 然后将最小的和遍历本列的最顶即i小标，交换位置
     */
    public static void selectionSort(int[] arr) {
        int temp;//临时存放
        for (int i = 0; i < arr.length - 1; i++) {//比对次数
            int minIndex = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            if (minIndex != i) {
                temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }
    }


}

