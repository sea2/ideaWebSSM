package com.tgb.test;

import com.tgb.util.HttpUtil;
import com.tgb.util.PinyinUtils;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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


    /**
     * 向指定URL发送GET方法的请求
     *
     * @param url 发送请求的URL
     * @return URL 所代表远程资源的响应结果
     */
    public static String sendGet(String url) {
        String result = "";
        BufferedReader in = null;
        try {
            URL realUrl = new URL(url);
            // 打开和URL之间的连接
            URLConnection connection = realUrl.openConnection();
            // 设置通用的请求属性
            connection.setRequestProperty("accept", "*/*");
            connection.setRequestProperty("connection", "Keep-Alive");
            connection.setRequestProperty("user-agent",
                    "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)");
            // 建立实际的连接
            connection.connect();
            // 获取所有响应头字段
            Map<String, List<String>> map = connection.getHeaderFields();
            // 遍历所有的响应头字段
            for (String key : map.keySet()) {
                System.out.println(key + "--->" + map.get(key));
            }
            // 定义 BufferedReader输入流来读取URL的响应
            in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
            String line;
            while ((line = in.readLine()) != null) {
                result += line;
            }
            System.out.println("结果：" + result);
        } catch (Exception e) {
            System.out.println("发送GET请求出现异常！" + e);
            e.printStackTrace();
        }
        // 使用finally块来关闭输入流
        finally {
            try {
                if (in != null) {
                    in.close();
                }
            } catch (Exception e2) {
                e2.printStackTrace();
            }
        }
        return result;

    }
}
