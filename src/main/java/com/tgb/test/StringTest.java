package com.tgb.test;

import com.tgb.util.HttpUtil;
import com.tgb.util.MD5Util;
import com.tgb.util.UrlUtils;
import org.json.JSONObject;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringTest {


    public static void main(String[] args) {
        Integer int1 = 1;
        setUse(int1);
        System.out.println(int1);


        String url = "http://gitlab.jdplay.com/gold-pig/interface-backend/blob/jz_1.2.2/storage/docs/app接口.md?tdsourcetag=s_pcqq_aiomsg";
        Map map = UrlUtils.URLRequest(url);
        System.out.println(map.get("tdsourcetag"));

            Map map2 = UrlUtils.URLRequest(url);
            if (map2 != null && map2.size() > 0) {
                String accessToken = (String) map2.get("accessToken");
                System.out.println(accessToken);
            }
        }










    //截取数字
    public static String getNumbers(String content) {
        Pattern pattern = Pattern.compile("\\d+");
        Matcher matcher = pattern.matcher(content);
        while (matcher.find()) {
            return matcher.group(0);
        }
        return "";
    }

    static void setUse(Integer int2) {
        int2 = 2;
    }

}
