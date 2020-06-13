package com.tgb.util;


import org.json.JSONException;
import org.json.JSONObject;

import java.security.MessageDigest;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

public class JsonUtils {
    /**
     * 获取JSON请求对象
     *
     * @return JSONObject Request JSON
     */

    public static String getMD5(String str) {
        StringBuilder hs = new StringBuilder();
        try {
            MessageDigest alga;
            alga = MessageDigest.getInstance("MD5");
            alga.update(str.getBytes());
            byte[] digest = alga.digest();
            String tempStr;
            for (byte aDigest : digest) {
                tempStr = (Integer.toHexString(aDigest & 0XFF));
                if (tempStr.length() == 1) {
                    hs.append("0").append(tempStr);
                } else {
                    hs.append(tempStr);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return hs.toString().toUpperCase();
    }



    public static String getRandomString(int length) {
        String str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        Random random = new Random();
        StringBuffer sb = new StringBuffer();
        for (int i = 0; i < length; i++) {
            int number = random.nextInt(62);
            sb.append(str.charAt(number));
        }
        return sb.toString();
    }

    public static String getSinStr(JSONObject json) {
        StringBuilder builder = new StringBuilder();
        List<String> list = new ArrayList<String>();
        list.addAll(getAllKey(json));
        Collections.sort(list);
        for (int i = 0; i < list.size(); i++) {
            try {
                builder.append(json.get(list.get(i)).toString());
            } catch (JSONException e) {
            }

            //builder.append(list.get(i)+json.get(list.get(i)).toString());
        }
        return builder.toString().trim();
    }

    public static String getSignJson() {


//            String md5 = getMD5(jstr + LinkingSDK.getInstance().mConfig.optString(Config.APP_KEY));
            return "";
    }



    public static JSONObject getSignJson(JSONObject jsobj, String Key, String param_str) {

        try {
            String nonce_str = getRandomString(4);

            jsobj.put("nonce_str", nonce_str);
            jsobj.put("sign_type", "MD5");
            jsobj.put("param_str", param_str);
            String jstr = getSinStr(jsobj);//jsobj.toJSONString();
            String md5 = getMD5(jstr + Key);
            jsobj.put("sign", md5);
            return jsobj;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    private static List<String> getAllKey(JSONObject json) {
        List<String> list = new ArrayList<>();
        Iterator<String> keys = json.keys();
        while (keys.hasNext()) {
            String teams = keys.next();
            list.add(teams);
        }
        return list;
    }
}
