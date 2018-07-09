package com.tgb.util;

import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.*;

public class HttpUtil {


    public static String interceptorHttp(String urltype, String url, String dataJson, String httpModth, String httpGetQueryString) {
        String strt = "";
        switch (urltype) {
            case "/v1.0/app/test":
                String uid = "";
                int listsize = 0;
                strt = doHttpPost(url, dataJson);
                org.json.JSONObject resultJson;
                try {
                    resultJson = new org.json.JSONObject(dataJson);
                    uid = resultJson.getString("uid");
                    String listStr = doHttpPost("http://192.168.2.45:8080/v1.0/app/account/productList", dataJson);
                    org.json.JSONObject resultJson2 = new org.json.JSONObject(listStr);
                    String json45 = resultJson2.getString("result");
                    org.json.JSONObject resultJson3 = new org.json.JSONObject(json45);
                    String listresult = resultJson3.getString("product_list");
                    org.json.JSONArray array = new org.json.JSONArray(listresult);
                    listsize = array.length();
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                if (StringUtils.isEmpty(uid))
                    strt = strt.replace("交易记录\",\"param_value\":\"\"", "持有资产\",\"param_value\":\"0\"").replace("xiaocaimi://transactionFlowList", "xiaocaimi://reCastProductList");
                else
                    strt = strt.replace("交易记录\",\"param_value\":\"\"", "持有资产\",\"param_value\":\"" + listsize + "\"").replace("xiaocaimi://transactionFlowList",
                            "xiaocaimi://reCastProductList");
                break;

            case "/v1.0/app/account/property":
                strt = doHttpPost(url, dataJson);
                strt = strt.replace("\"menu\":[",
                        "\"menu\":[{\"icon_url\":\"http://192.168.3.240:8020/v1.0/images/account/icon_holding_assets.png\",\"linked_url\":\"xiaocaimi//appointmentInvest\",\"param_id\":\"6\",\"param_name\":\"预约\",\"param_value\":\"\"},");
                break;


            case "/v1.0/app/system/loadConfigItem":
                strt = "{\"code\":\"200\",\"result\":{\"100055\":\"http://192.168.3.240:9050/detail.html\"," + "\"10005\":\"http://192.168.3.240:9050/confirm_order.html\"}}";
                break;
            case "/v1.0/app/product/appointmentInvestProList":
                strt = "{\"code\":\"200\",\"result\":{\"right_top_menu\":{\"icon\":\"图标\",\"text\":\"预约规则\",\"url\":\"http://baidu.com\"},\"pro_list\":[{\"aid\":\"预约产品id\",\"name\":\"预约产品名称\",\"dname\":\"80\",\"rate_item\":\"预期年化利率\","
                        + "\"rate_val\":\"8.0%\",\"left_promotion\":[\"返现\",\"加息\"],\"right_promotion\":[\"30元\",\"80%\"],\"promotion\":{\"text\":\"广告文本\",\"url\":\"广告链接\"}},{\"aid\":\"预约产品id123\",\"name\":\"预约产品名称\",\"dname\":\"预约产品期限值(单位为：天)\",\"rate_item\":\"预约产品年化利率文本（for example:预期年化利率）\",\"rate_val\":\"预约产品年化利率（for example:8.0%）\",\"left_promotion\":[\"返现\",\"30天2.5%\",\"年化收益\"],\"right_promotion\":[\"加息\",\"30天2.5%\",\"年化收益\"],\"promotion\":{\"text\":\"广告文本\",\"url\":\"广告链接\"}}],\"balance\":\"10000000\",\"max_investment_amount\":\"100000\",\"min_investment_amount\":\"10\",\"appointment_remark\":\"预约备注，（预约成功后不可取消，资金...）\",\"rate_remark\":\"预约年化收益备注（年化利率是通过产品...）\",\"protocol\":[{\"text\":\"《百度》\",\"url\":\"http://baidu.com\",\"color\":\"色值\"},{\"text\":\"《51》\",\"url\":\"http://51job.com\",\"color\":\"色值\"}]}}";
                break;
            case "/v1.0/app/product/appointmentInvestRecord":
                String json45 = "";
                try {
                    JSONObject resultJson2 = new org.json.JSONObject(dataJson);
                    json45 = resultJson2.getString("page_no");
                } catch (JSONException e) {
                    e.printStackTrace();
                }
                if (json45.equals("2"))
                    strt = "{\"code\":\"200\",\"result\":{\"record_list\":[{\"rid\":\"1\",\"name\":\"预约产品名称1\",\"dname\":\"87\",\"rate_val\":\"8.0%\",\"money\":\"1000\",\"time\":\"100\",\"state\":\"1\",\"cancel_flag\":\"1\"}]}}";
                else
                    strt = "{\"code\":\"200\",\"result\":{\"record_list\":[{\"rid\":\"1\",\"name\":\"预约产品名称1\",\"dname\":\"87\",\"rate_val\":\"8.0%\",\"money\":\"1000\",\"time\":\"100\",\"state\":\"1\",\"cancel_flag\":\"1\"},{\"rid\":\"2\",\"name\":\"预约产品名称2\",\"dname\":\"87\",\"rate_val\":\"8.0%\",\"money\":\"1000\",\"time\":\"100\",\"state\":\"2\",\"cancel_flag\":\"0\"},{\"rid\":\"3\",\"name\":\"预约产品名称3\",\"dname\":\"87\",\"rate_val\":\"8.0%\",\"money\":\"1000\",\"time\":\"100\",\"state\":\"3\",\"cancel_flag\":\"0\"},{\"rid\":\"4\",\"name\":\"预约产品名称4\",\"dname\":\"87\",\"rate_val\":\"8.0%\",\"money\":\"1000\",\"time\":\"100\",\"state\":\"4\",\"cancel_flag\":\"0\"},{\"rid\":\"5\",\"name\":\"预约产品名称5\",\"dname\":\"87\",\"rate_val\":\"8.0%\",\"money\":\"1000\",\"time\":\"100\",\"state\":\"4\",\"cancel_flag\":\"0\"}]}}";

                break;


            case "/v1.0/app/":
            case "/v1.0/app":
                strt = "{\"code\":\"100\",\"list\":[{\"id\":\"1\",\"id1\":\"1\"},{\"id\":\"2\",\"id1\":\"2\"}],\"message\":\"请求无效，请检查请求拼接完整性\",\"sign\":\"xxxxxxxxx\"}";
                break;

            default:
                if (httpModth.equals("POST")) {
                    strt = doHttpPost(url, dataJson);
                } else {
                    url = url + "?" + httpGetQueryString;
                    strt = doHttpGet(url);
                }
                break;
        }
        return strt;
    }

    /**
     * 发送Http post请求
     *
     * @param URL 请求url
     * @return 返回信息
     */
    public static String doHttpPost(String URL, String dataInfo) {
        System.out.println("----------------------------------------------------------request--start---------------------------------------------------------------");
        System.out.println("* " + URL + "\n* 参数:" + dataInfo);
        byte[] xmlData = dataInfo.getBytes();
        InputStream instr = null;
        ByteArrayOutputStream swapStream = null;
        try {
            URL url = new URL(URL);
            HttpURLConnection urlCon = (HttpURLConnection) url.openConnection();
            urlCon.setDoOutput(true);// http正文内，因此需要设为true, 默认情况下是false;
            urlCon.setDoInput(true);// 设置是否从httpUrlConnection读入，默认情况下是true;
            urlCon.setRequestProperty("content-Type", " application/json;charset=UTF-8");
            urlCon.setRequestProperty("charset", "utf-8");
            urlCon.setRequestProperty("Content-length", String.valueOf(xmlData.length));
            urlCon.setRequestMethod("POST");
            urlCon.setConnectTimeout(5 * 1000);
            DataOutputStream printout = new DataOutputStream(urlCon.getOutputStream());
            printout.write(xmlData);
            printout.flush();
            printout.close();
            instr = urlCon.getInputStream();
            swapStream = new ByteArrayOutputStream();
            byte[] buff = new byte[1024]; // //分配1024个字节大小的内存给bufbuff用于存放循环读取的临时数据
            int rc = 0;
            while ((rc = instr.read(buff, 0, 100)) > 0) {
                swapStream.write(buff, 0, rc);
            }
            byte[] bis = swapStream.toByteArray();
            String ResponseString = new String(bis, "UTF-8");
            if ((ResponseString == null) || ("".equals(ResponseString.trim()))) {
                System.out.println("* 返回空");
            }
            System.out.println("* 返回数据为:" + ResponseString);
            return ResponseString;

        } catch (Exception e) {
            e.printStackTrace();
            return "0";
        } finally {
            System.out.println("----------------------------------------------------------request--end---------------------------------------------------------------");
            try {
                if (instr != null)
                    instr.close();
                if (swapStream != null)
                    swapStream.close();
            } catch (Exception ex) {
            }
        }
    }


    /**
     * 发送Http post请求
     *
     * @param actionURL  请求url
     * @param parameters 请求表单参数
     * @return 返回信息
     */
    public static String doHttpPost(String actionURL, HashMap<String, String> parameters) {
        String response = "";
        try {
            URL url = new URL(actionURL);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            //发送post请求需要下面两行
            connection.setDoInput(true);
            connection.setDoOutput(true);
            connection.setUseCaches(false);
            connection.setRequestMethod("POST");
            connection.setRequestProperty("Connection", "Keep-Alive");
            connection.setRequestProperty("Charset", "UTF-8");
            ;
            connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
            //设置请求数据内容
            String requestContent = "";
            Set<String> keys = parameters.keySet();
            for (String key : keys) {
                requestContent = requestContent + key + "=" + parameters.get(key) + "&";
            }
            requestContent = requestContent.substring(0, requestContent.lastIndexOf("&"));
            DataOutputStream ds = new DataOutputStream(connection.getOutputStream());
            //使用write(requestContent.getBytes())是为了防止中文出现乱码
            ds.write(requestContent.getBytes());
            ds.flush();
            try {
                //获取URL的响应
                BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), "utf-8"));
                String s = "";
                String temp = "";
                while ((temp = reader.readLine()) != null) {
                    s += temp;
                }
                response = s;
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
                System.out.println("No response get!!!");
            }
            ds.close();
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("Request failed!");
        }
        return response;
    }

    /**
     * 发送Http get请求
     *
     * @param URL 请求url
     * @return 返回信息
     */
    public static String doHttpGet(String URL) {
        System.out.println("----------------------------------------------------------request--start---------------------------------------------------------------");
        System.out.println("* " + URL);
        InputStream instr = null;
        ByteArrayOutputStream swapStream = null;
        try {
            URL url = new URL(URL);
            HttpURLConnection urlCon = (HttpURLConnection) url.openConnection();
            urlCon.setConnectTimeout(5 * 1000);
            urlCon.setRequestMethod("GET");
            InputStream inStream = urlCon.getInputStream();
            byte[] data = StreamTool.readInputStream(inStream);
            String result = new String(data, "UTF-8");
            if ((data == null) || ("".equals(result.trim()))) {
                System.out.println("* 返回空");
            }
            System.out.println("* 返回数据为:" + result);
            return result;

        } catch (Exception e) {
            e.printStackTrace();
            return "0";
        } finally {
            System.out.println("----------------------------------------------------------request--end---------------------------------------------------------------");
            try {
                if (instr != null)
                    instr.close();
                if (swapStream != null)
                    swapStream.close();
            } catch (Exception ex) {
            }
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
                //  System.out.println(key + "--->" + map.get(key));
            }
            // 定义 BufferedReader输入流来读取URL的响应
            in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
            String line;
            while ((line = in.readLine()) != null) {
                result += line;
            }
            System.out.println("返回值：--->" + result);

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

    /**
     * 向指定URL发送GET方法的请求
     *
     * @param url 发送请求的URL
     * @return URL 所代表远程资源的响应结果
     */
    public static String sendGet2(String url) {
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


    public static String getRequestParameter(HttpServletRequest request, HttpServletResponse response) {

        if (null == request) {
            return null;
        }

        String method = request.getMethod();
        String param = "";
        if (method.equalsIgnoreCase("GET")) {
            param = getParamString(request.getParameterMap());
        } else {
            param = getBodyData(request);
        }
        return param;
    }

    //获取请求体中的字符串(POST)
    //比如 multipart/form-data或application/json时，无法通过request.getParameter()获取到请求内容，
    // 此时只能通过request.getInputStream()和request.getReader()方法获取请求内容，
    // 此时调用request.getParameter()也不会影响第一次调用request.getInputStream()或request.getReader()获取到请求内容。
    private static String getBodyData(HttpServletRequest request) {

     /*   StringBuilder data = new StringBuilder();
        String line = null;
        BufferedReader reader = null;
        try {//getReader()使用一次后就不能再拿到参数所以不能拦截请求参数流
            reader = request.getReader();
            while (null != (line = reader.readLine()))
                data.append(line);
        } catch (IOException e) {
            e.printStackTrace();
        }*/
        return getParamString(request.getParameterMap());
    }


    private static String getParamString(Map<String, String[]> map) {
        StringBuilder sb = new StringBuilder();
        for (Map.Entry<String, String[]> e : map.entrySet()) {
            sb.append(e.getKey()).append("=");
            String[] value = e.getValue();
            if (value != null && value.length == 1) {
                sb.append(value[0]).append("\t");
            } else {
                sb.append(Arrays.toString(value)).append("\t");
            }
        }
        return sb.toString();
    }


}
