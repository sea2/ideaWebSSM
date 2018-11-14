package com.tgb.test;

import com.tgb.util.HttpUtil;
import com.tgb.util.PinyinUtils;

import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;

public class TestClass {

    public static void main(String[] args) {
        System.out.println(12 & 5);
        System.out.println(12 == 12 & 5 == 5);
        System.out.println(12 == 12 && 5 == 5);

        int count;
        System.out.println(count = +5);

        System.out.println(count += 5);
        //泛型
        Info<Number> mui = new Info<Number>();
        mui.setData(1);
        Number intNum = mui.getData();
        System.out.println(intNum);


        getData(TYPE.red);

        System.out.println(PinyinUtils.ccs2Pinyin("Ww").toUpperCase());
        System.out.println(PinyinUtils.getPinyinFirstLetters("我是谁"));

        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(1);
        list.add(1);
        list.add(1);
        String[] strArray = "".split(",");
        System.out.println(strArray.length);

       /* str.getBytes("unicode").length; //12
        str.getBytes("gbk").length; //6
        str.getBytes("utf-8").length; //7*/
        String str = "学";
        int n = 0;
        try {
            n = str.getBytes("utf-8").length;
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }


        System.out.println("------" + n);
        System.out.println("---getDataInt---" + getDataInt());

        //发送 GET 请求
        String s = HttpUtil.doHttpGet("http://www.dailuopan.com/MPAPI/GetSearch?keywords=" + "宜人贷");
        System.out.println(s);


        StringBuilder mStringBuilder = new StringBuilder("1223");
        mStringBuilder.append(1.236);
        mStringBuilder.append(6);
        mStringBuilder.append(true);
        mStringBuilder.append("呵呵呵");
        mStringBuilder.delete(14, 17);
        System.out.println(mStringBuilder);
        System.out.println(mStringBuilder.length());

        String str1 = "";
        String str2 = "熊2";
        System.out.println("---:" + str1.compareTo(str2));

    }

    public enum TYPE {
        red, RED, green, yellow, blue;
    }

    public static void getData(TYPE type) {

    }

    public static int getDataInt() {
        int ret = 0;
        try {
            return ret;
        } catch (Exception e) {
            ret = 1;
            return ret;
        } finally {
            ret = 2;
            return ret;
        }
    }


}
