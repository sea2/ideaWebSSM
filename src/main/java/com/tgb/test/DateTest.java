package com.tgb.test;

import com.google.gson.Gson;
import com.tgb.entity.PayInfo;
import com.tgb.util.*;
import io.netty.handler.codec.http.HttpResponse;

import java.awt.*;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import static java.awt.SystemColor.info;

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
            System.out.println(" http://m.91xcm.com/mevent/heguiqianxing/index.html?source=Android&spm=2018.1.4.0.0.0".replace("http://m.91xcm.com", "https://m.91xcm.com") + "--");
        }
        String str32 = "14.80亿元（2018-12-31";
        String size_show = str32.substring(0, str32.length() - 13);
        System.out.println(size_show + "--");


        int betweenTime = TimeUtils.dateBetween(TimeUtils.date2String(new Date(), TimeUtils.DEFAULT_PATTERN2), "20190512");


        System.out.println(TimeUtils.date2String(new Date(), TimeUtils.DEFAULT_PATTERN2) + "--" + betweenTime);


        PayInfo mPayInfo = new Gson().fromJson("{\"type\":\"google\",\"product_id\":\"1001\",\"cp_order_no\":\"1587200113331\",\"amount\":\"30\",\"server_id\":\"1\",\"role_id\":\"78713\",\"notify_url\":\"123456\",\"extra\":\"1\",\"nonce_str\":\"f2nd\",\"sign_type\":\"MD5\",\"param_str\":\"{\\\"language\\\":\\\"zh-CN\\\",\\\"channel\\\":\\\"1000\\\"}\",\"sign\":\"484A31DF5BF1C3CF6987094B400BED15\"}", PayInfo.class);


        SignUtils.sign(mPayInfo, "mRwjFMFkuEnfU3Zl");

//
//        for (long i = 10004046; i < 10004051; i++) {
//
//            String url= "https://isdk.chiji-h5.com/server/s/xxyzappcn_ios/user/autoCreate?phone="+i+"&pwd=1";
//            System.out.println(HttpUtil.doHttpGet(url));
//
//        }
//

        System.out.println(IdentityCardVerification("370782199105280270"));


        String name = "梁彬青";
        String idCard = "420302199212171273";
        String host = "https://safrvcert.market.alicloudapi.com";
        String path = "/safrv_2meta_id_name/";
        String appCode = "138881cf8fef4dafaf5d1ff45da251e7";
        String urlSend = host + path + "?__userId=1130073324639401&identifyNum=" + idCard + "&userName=" + name + "&verifyKey=IVHzmJWVgKUF2x";


        System.out.println(HttpUtil.doHttpGet(urlSend));

    }


//    public static void main(String[] args) {
//        String host = "https://safrvcert.market.alicloudapi.com";
//        String path = "/safrv_2meta_id_name/";
//        String method = "GET";
//        String appcode = "你自己的AppCode";
//        Map<String, String> headers = new HashMap<String, String>();
//        //最后在header中的格式(中间是英文空格)为Authorization:APPCODE 83359fd73fe94948385f570e3c139105
//        headers.put("Authorization", "APPCODE " + appcode);
//        Map<String, String> querys = new HashMap<String, String>();
//        querys.put("__userId", "__userId");
//        querys.put("customerID", "customerID");
//        querys.put("identifyNum", "identifyNum");
//        querys.put("identifyNumMd5", "identifyNumMd5");
//        querys.put("userName", "userName");
//        querys.put("verifyKey", "verifyKey");
//        try { /** * 重要提示如下: * HttpUtils请从 * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/src/main/java/com/aliyun/api/gateway/demo/util/HttpUtils.java * 下载 * * 相应的依赖请参照 * https://github.com/aliyun/api-gateway-demo-sign-java/blob/master/pom.xml */
//            HttpResponse response = HttpUtils.doGet(host, path, method, headers, querys);
//            //错误信息见X-Ca-Error-Message字段 System.out.println(response.toString());
//            // 获取response的body
//            System.out.println(response.toString());
//            System.out.println(EntityUtils.toString(response.getEntity()));
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

    /**
     * 身份证验证
     *
     * @param idStr
     * @return
     */
    public static String IdentityCardVerification(String idStr) {
        String[] wf = {"1", "0", "x", "9", "8", "7", "6", "5", "4", "3", "2"};
        String[] checkCode = {"7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"};
        String iDCardNo = "";
        try {
            //判断号码的长度 15位或18位
            if (idStr.length() != 15 && idStr.length() != 18) {
                return "身份证号码长度应该为15位或18位";
            }
            if (idStr.length() == 18) {
                iDCardNo = idStr.substring(0, 17);
            } else if (idStr.length() == 15) {
                iDCardNo = idStr.substring(0, 6) + "19" + idStr.substring(6, 15);
            }
            if (isStrNum(iDCardNo) == false) {
                return "身份证15位号码都应为数字;18位号码除最后一位外,都应为数字";
            }
            //判断出生年月
            String strYear = iDCardNo.substring(6, 10);// 年份
            String strMonth = iDCardNo.substring(10, 12);// 月份
            String strDay = iDCardNo.substring(12, 14);// 月份
            if (isStrDate(strYear + "-" + strMonth + "-" + strDay) == false) {
                return "身份证生日无效";
            }
            GregorianCalendar gc = new GregorianCalendar();
            SimpleDateFormat s = new SimpleDateFormat("yyyy-MM-dd");
            if ((gc.get(Calendar.YEAR) - Integer.parseInt(strYear)) > 150 || (gc.getTime().getTime() - s.parse(strYear + "-" + strMonth + "-" + strDay).getTime()) < 0) {
                return "身份证生日不在有效范围";
            }
            if (Integer.parseInt(strMonth) > 12 || Integer.parseInt(strMonth) == 0) {
                return "身份证月份无效";
            }
            if (Integer.parseInt(strDay) > 31 || Integer.parseInt(strDay) == 0) {
                return "身份证日期无效";
            }
            //判断地区码
            Hashtable h = GetAreaCode();
            if (h.get(iDCardNo.substring(0, 2)) == null) {
                return "身份证地区编码错误";
            }
            //判断最后一位
            int theLastOne = 0;
            for (int i = 0; i < 17; i++) {
                theLastOne = theLastOne + Integer.parseInt(String.valueOf(iDCardNo.charAt(i))) * Integer.parseInt(checkCode[i]);
            }
            int modValue = theLastOne % 11;
            String strVerifyCode = wf[modValue];
            iDCardNo = iDCardNo + strVerifyCode;
            if (idStr.length() == 18 && !iDCardNo.equals(idStr)) {
                return "身份证无效，不是合法的身份证号码";
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    /**
     * 地区代码
     *
     * @return Hashtable
     */
    private static Hashtable GetAreaCode() {
        Hashtable hashtable = new Hashtable();
        hashtable.put("11", "北京");
        hashtable.put("12", "天津");
        hashtable.put("13", "河北");
        hashtable.put("14", "山西");
        hashtable.put("15", "内蒙古");
        hashtable.put("21", "辽宁");
        hashtable.put("22", "吉林");
        hashtable.put("23", "黑龙江");
        hashtable.put("31", "上海");
        hashtable.put("32", "江苏");
        hashtable.put("33", "浙江");
        hashtable.put("34", "安徽");
        hashtable.put("35", "福建");
        hashtable.put("36", "江西");
        hashtable.put("37", "山东");
        hashtable.put("41", "河南");
        hashtable.put("42", "湖北");
        hashtable.put("43", "湖南");
        hashtable.put("44", "广东");
        hashtable.put("45", "广西");
        hashtable.put("46", "海南");
        hashtable.put("50", "重庆");
        hashtable.put("51", "四川");
        hashtable.put("52", "贵州");
        hashtable.put("53", "云南");
        hashtable.put("54", "西藏");
        hashtable.put("61", "陕西");
        hashtable.put("62", "甘肃");
        hashtable.put("63", "青海");
        hashtable.put("64", "宁夏");
        hashtable.put("65", "新疆");
        hashtable.put("71", "台湾");
        hashtable.put("81", "香港");
        hashtable.put("82", "澳门");
        hashtable.put("91", "国外");
        return hashtable;
    }

    /**
     * 判断字符串是否为数字
     *
     * @param str
     * @return
     */
    private static boolean isStrNum(String str) {
        Pattern pattern = Pattern.compile("[0-9]*");
        Matcher isNum = pattern.matcher(str);
        if (isNum.matches()) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 判断字符串是否为日期格式
     *
     * @param strDate
     * @return
     */
    public static boolean isStrDate(String strDate) {
        Pattern pattern = Pattern.compile("^((\\d{2}(([02468][048])|([13579][26]))[\\-\\/\\s]?((((0?[13578])|(1[02]))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])))))|(\\d{2}(([02468][1235679])|([13579][01345789]))[\\-\\/\\s]?((((0?[13578])|(1[02]))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(3[01])))|(((0?[469])|(11))[\\-\\/\\s]?((0?[1-9])|([1-2][0-9])|(30)))|(0?2[\\-\\/\\s]?((0?[1-9])|(1[0-9])|(2[0-8]))))))(\\s(((0?[0-9])|([1-2][0-3]))\\:([0-5]?[0-9])((\\s)|(\\:([0-5]?[0-9])))))?$");
        Matcher m = pattern.matcher(strDate);
        if (m.matches()) {
            return true;
        } else {
            return false;
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

