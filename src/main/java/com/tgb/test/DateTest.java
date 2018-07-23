package com.tgb.test;

import com.tgb.util.DateUtils;

import java.util.Date;

public class DateTest {


    public static void main(String[] arg) {


        try {
            Date a = new Date();
            Thread.sleep(3000);
            Date b = new Date();

            System.out.println("两个时间相差" + DateUtils.getBetweenSecond(a,b) + "秒");//会打印出相差3秒

        } catch (InterruptedException e) {

            e.printStackTrace();
        }

    }


}

