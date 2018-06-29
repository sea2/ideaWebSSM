package com.tgb.util;

import java.text.DecimalFormat;

public class StringUtils {
    public static int toInt(String str, int defValue) {
        try {
            return Integer.parseInt(str);
        } catch (Exception e) {
        }
        return defValue;
    }

    public static boolean isEmpty(String input) {
        if (input == null || "".equals(input) || "null".equals(input) || "[]".equals(input) || "{}".equals(input) || "NULL".equals(input))
            return true;

        for (int i = 0; i < input.length(); i++) {
            char c = input.charAt(i);
            if (c != ' ' && c != '\t' && c != '\r' && c != '\n') {
                return false;
            }
        }
        return true;
    }


    public static boolean isEquals(String s1, String s2) {
        if (null == s1 && null == s2) {
            return true;
        }
        if (null != s1 && null != s2) {
            if (s1.trim().equals(s2.trim())) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    //前一个String是否包括后一个
    public static boolean isContains(String s1, String s2) {
        if (null == s1 && null == s2) {
            return true;
        }
        if (null != s1 && null != s2) {
            if (s1.trim().contains(s2.trim())) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    // 判断某个字符串是否是整数字符串，若是数字字符串返回0，若不是则返回-1
    public static int isNumberString(String testString) {
        String numAllString = "0123456789";
        if (testString.length() <= 0)
            return -1;
        for (int i = 0; i < testString.length(); i++) {
            String charInString = testString.substring(i, i + 1);
            if (!numAllString.contains(charInString))
                return -1;
        }
        return 0;
    }

    // 判断某个字符串是否是float字符串，若是返回0，若不是则返回-1
    public static int isFloathString(String testString) {
        if (!testString.contains(".")) {
            return isNumberString(testString);
        } else {
            String[] floatStringPartArray = testString.split("\\.");
            if (floatStringPartArray.length == 2) {
                if (0 == isNumberString(floatStringPartArray[0]) && 0 == isNumberString(floatStringPartArray[1]))
                    return 0;
                else
                    return -1;
            } else
                return -1;
        }

    }


    public static  String keepTwo(double d) {
        DecimalFormat df = new DecimalFormat("######0.00");
        return df.format(d);

    }

}
