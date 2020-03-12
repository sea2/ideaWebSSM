package com.tgb.util;

import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.*;
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
            case "/api/appIndex":
                strt = "{\"code\":200,\"data\":{\"lists\":[{\"id\":2,\"tab_child_id\":2,\"tag_name\":\"新游推荐\",\"type\":1,\"sort\":11,\"created_at\":null,\"updated_at\":null,\"deleted_at\":null,\"games\":[{\"id\":3,\"tag_id\":2,\"game_id\":2486,\"recommend\":1,\"sort\":14,\"deleted_at\":null,\"created_at\":null,\"updated_at\":null,\"game\":{\"id\":2486,\"game_name\":\"测试游戏\",\"type\":\"1\",\"game_tags\":null,\"game_link\":null,\"game_icon\":\"http://p16.qhimg.com/t014a4899d0a9a6b545.png\",\"game_small_desc\":\"金麟岂是池中物 一遇风云变化龙\",\"game_desc\":\"金麟岂是池中物 一遇风云变化龙\\\",\\\"appdesc\\\":\\\"首款电影级武侠MMO手游《风云》,由港漫教父马荣成正版授权,是畅游天龙八部3D团队打造最新力作。多种PK方式全景战斗模式,带来电影级武侠体验\",\"game_ver\":null,\"game_last_update\":null,\"game_allow_system\":null,\"download_url\":\"http://d4.gamersky.com/2018/01/gjqt_0.9.0.apk\",\"game_file_size\":\"28.49MB\",\"game_play_url\":null,\"down_count\":9650,\"game_pay_callback\":\"http://123.206.114.224/api/testGameCallBack\",\"md5_key\":\"GwlmON1Ex8CYYs4v0#Hx\",\"game_banner\":null,\"pinyin\":null,\"game_divide\":50,\"cp_divide\":50,\"promote_ratio\":50,\"discount\":58,\"real_count\":2,\"real_name\":1,\"bind_phone\":0,\"bind_count\":3,\"created_at\":\"2019-04-10 14:22:28\",\"updated_at\":\"2019-04-25 15:24:52\",\"deleted_at\":null,\"status\":0,\"game_img\":[\"games/images/1556177072934_th.jpeg.png\",\"games/images/1556177079855_2018100618181600-F1C11A22FAEE3B82F21B330E1B786A39.jpg\"],\"box_name\":\"cn.geekgame.dota.kaopu1\",\"cp_game\":null,\"index_img\":null}}]},{\"id\":1,\"tab_child_id\":1,\"tag_name\":\"热门推荐\",\"type\":2,\"sort\":10,\"created_at\":null,\"updated_at\":null,\"deleted_at\":null,\"games\":[{\"id\":18,\"tag_id\":1,\"game_id\":2484,\"recommend\":1,\"sort\":12,\"deleted_at\":null,\"created_at\":\"2019-04-25 11:41:19\",\"updated_at\":\"2019-04-25 11:41:19\",\"game\":{\"id\":2484,\"game_name\":\"1\",\"type\":\"2\",\"game_tags\":null,\"game_link\":null,\"game_icon\":\"http://p16.qhimg.com/t014a4899d0a9a6b545.png\",\"game_small_desc\":\"金麟岂是池中物 一遇风云变化龙\",\"game_desc\":\"金麟岂是池中物 一遇风云变化龙\\\",\\\"appdesc\\\":\\\"首款电影级武侠MMO手游《风云》,由港漫教父马荣成正版授权,是畅游天龙八部3D团队打造最新力作。多种PK方式全景战斗模式,带来电影级武侠体验\",\"game_ver\":null,\"game_last_update\":null,\"game_allow_system\":null,\"download_url\":\"http://ucdl.25pp.com/fs01/union_pack/Wandoujia_687401_leiz12.apk\",\"game_file_size\":\"28.49MB\",\"game_play_url\":null,\"down_count\":100,\"game_pay_callback\":null,\"md5_key\":null,\"game_banner\":null,\"pinyin\":null,\"game_divide\":0,\"cp_divide\":0,\"promote_ratio\":0,\"discount\":0,\"real_count\":0,\"real_name\":0,\"bind_phone\":0,\"bind_count\":0,\"created_at\":\"2019-04-22 17:59:24\",\"updated_at\":\"2019-04-22 17:59:24\",\"deleted_at\":null,\"status\":1,\"game_img\":[],\"box_name\":\"cn.geekgame.dota.kaopu1\",\"cp_game\":null,\"index_img\":null}},{\"id\":19,\"tag_id\":1,\"game_id\":2485,\"recommend\":1,\"sort\":10,\"deleted_at\":null,\"created_at\":\"2019-04-25 11:41:19\",\"updated_at\":\"2019-04-25 11:41:19\",\"game\":{\"id\":2485,\"game_name\":\"测试游戏\",\"type\":\"1\",\"game_tags\":null,\"game_link\":null,\"game_icon\":\"http://p16.qhimg.com/t014a4899d0a9a6b545.png\",\"game_small_desc\":\"金麟岂是池中物 一遇风云变化龙\",\"game_desc\":\"金麟岂是池中物 一遇风云变化龙\\\",\\\"appdesc\\\":\\\"首款电影级武侠MMO手游《风云》,由港漫教父马荣成正版授权,是畅游天龙八部3D团队打造最新力作。多种PK方式全景战斗模式,带来电影级武侠体验\",\"game_ver\":null,\"game_last_update\":null,\"game_allow_system\":null,\"download_url\":\"http://downali.game.uc.cn/s/1/9/201712011738562186f8_se-signed_uc_3002_V7.3.4.2_3.00.004_2010071006.apk\",\"game_file_size\":\"28.49MB\",\"game_play_url\":null,\"down_count\":100,\"game_pay_callback\":\"http://123.206.114.224/api/testGameCallBack\",\"md5_key\":\"GwlmON1Ex8CYYs4v0#Hx\",\"game_banner\":null,\"pinyin\":null,\"game_divide\":50,\"cp_divide\":50,\"promote_ratio\":50,\"discount\":58,\"real_count\":2,\"real_name\":1,\"bind_phone\":0,\"bind_count\":3,\"created_at\":\"2019-04-10 14:22:28\",\"updated_at\":\"2019-04-25 15:24:52\",\"deleted_at\":null,\"status\":0,\"game_img\":[\"games/images/1556177072934_th.jpeg.png\",\"games/images/1556177079855_2018100618181600-F1C11A22FAEE3B82F21B330E1B786A39.jpg\"],\"box_name\":\"cn.geekgame.dota.kaopu\",\"cp_game\":null,\"index_img\":null}}]},{\"id\":13,\"tab_child_id\":5,\"tag_name\":\"123\",\"type\":2,\"sort\":1,\"created_at\":\"2019-04-25 11:33:48\",\"updated_at\":\"2019-04-25 11:33:48\",\"deleted_at\":null,\"games\":[{\"id\":13,\"tag_id\":13,\"game_id\":2489,\"recommend\":1,\"sort\":1,\"deleted_at\":null,\"created_at\":\"2019-04-25 11:33:48\",\"updated_at\":\"2019-04-25 11:33:48\",\"game\":{\"id\":2489,\"game_name\":\"测试游戏\",\"type\":\"1\",\"game_tags\":null,\"game_link\":null,\"game_icon\":\"http://p16.qhimg.com/t014a4899d0a9a6b545.png\",\"game_small_desc\":\"金麟岂是池中物 一遇风云变化龙\",\"game_desc\":\"金麟岂是池中物 一遇风云变化龙\\\",\\\"appdesc\\\":\\\"首款电影级武侠MMO手游《风云》,由港漫教父马荣成正版授权,是畅游天龙八部3D团队打造最新力作。多种PK方式全景战斗模式,带来电影级武侠体验\",\"game_ver\":null,\"game_last_update\":null,\"game_allow_system\":null,\"download_url\":\"http://downali.game.uc.cn/s/1/9/201712011738562186f8_se-signed_uc_3002_V7.3.4.2_3.00.004_2010071006.apk\",\"game_file_size\":\"28.49MB\",\"game_play_url\":null,\"down_count\":600,\"game_pay_callback\":\"http://123.206.114.224/api/testGameCallBack\",\"md5_key\":\"GwlmON1Ex8CYYs4v0#Hx\",\"game_banner\":null,\"pinyin\":null,\"game_divide\":50,\"cp_divide\":50,\"promote_ratio\":50,\"discount\":58,\"real_count\":2,\"real_name\":1,\"bind_phone\":0,\"bind_count\":3,\"created_at\":\"2019-04-10 14:22:28\",\"updated_at\":\"2019-04-25 15:24:52\",\"deleted_at\":null,\"status\":0,\"game_img\":[\"games/images/1556177072934_th.jpeg.png\",\"games/images/1556177079855_2018100618181600-F1C11A22FAEE3B82F21B330E1B786A39.jpg\"],\"box_name\":\"com.cyou.mrd.fengyun2.aligames\",\"cp_game\":null,\"index_img\":null}}]}]," +
                        "\"banners\":[{\"id\":1,\"banner_name\":\"测试banner\",\"tab_child_id\":1,\"type\":1,\"img_url\":\"games/images/1555926595166_th.jpeg.png\",\"h5_url\":\"http://www.baidu.com\",\"game_id\":2485,\"describeInfo\":\"测试\",\"start_time\":\"2019-04-23 11:57:30\",\"end_time\":\"2019-04-30 11:57:35\",\"status\":1,\"deleted_at\":null,\"created_at\":null,\"updated_at\":null,\"sort\":10,\"img_url_txt\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557916622840&di=844932d1d2e6e02956db7e97b176bdb0&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fcf9725a71e4fad49f5a738558205bbb004fe02cdc8ece-Y53wKG_fw658\"},{\"id\":1,\"banner_name\":\"测试banner\",\"tab_child_id\":1,\"type\":1,\"img_url\":\"games/images/1555926595166_th.jpeg.png\",\"h5_url\":\"http://www.baidu.com\",\"game_id\":2485,\"describeInfo\":\"测试\",\"start_time\":\"2019-04-23 11:57:30\",\"end_time\":\"2019-04-30 11:57:35\",\"status\":1,\"deleted_at\":null,\"created_at\":null,\"updated_at\":null,\"sort\":10,\"img_url_txt\":\"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557916622840&di=844932d1d2e6e02956db7e97b176bdb0&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fcf9725a71e4fad49f5a738558205bbb004fe02cdc8ece-Y53wKG_fw658\"},{\"id\":2,\"banner_name\":\"测试banner\",\"tab_child_id\":1,\"type\":2,\"img_url\":\"games/images/1555926595166_th.jpeg.png\",\"h5_url\":\"\",\"game_id\":2483,\"describeInfo\":\"测试\",\"start_time\":\"2019-04-23 11:57:30\",\"end_time\":\"2019-04-30 11:57:35\",\"status\":1,\"deleted_at\":null,\"created_at\":null,\"updated_at\":null,\"sort\":9,\"img_url_txt\":\"http://pic51.nipic.com/file/20141031/8098773_204507657000_2.jpg\"}]}}";
                break;
            case "/api/getRankLists":
                strt = "{\"code\":200,\"data\":{\"id\":10,\"tab_child_id\":3,\"tag_name\":\"排行\",\"type\":2,\"sort\":0,\"created_at\":\"\",\"updated_at\":\"\",\"deleted_at\":\"\",\"games\":[{\"id\":4,\"tag_id\":10,\"game_id\":2483,\"recommend\":1,\"sort\":10,\"deleted_at\":\"\",\"created_at\":\"\",\"updated_at\":\"\",\"game\":{\"id\":2483,\"game_name\":\"测试游戏\",\"type\":\"1\",\"game_tags\":\"\",\"game_link\":\"\",\"game_icon\":\"https://vrtest-10070225.image.myqcloud.com/games/images/1555926595166_th.jpeg.png\",\"game_small_desc\":\"\",\"game_desc\":\"\",\"game_ver\":\"\",\"game_last_update\":\"\",\"game_allow_system\":\"\",\"download_url\":\"http://dl02.ttfm.game900.com/0/bao/dandanguaji.apk\",\"game_file_size\":\"28.49MB\",\"game_play_url\":\"\",\"down_count\":0,\"game_pay_callback\":\"http://123.206.114.224/api/testGameCallBack\",\"md5_key\":\"GwlmON1Ex8CYYs4v0#Hx\",\"game_banner\":\"\",\"pinyin\":\"\",\"game_divide\":50,\"cp_divide\":50,\"promote_ratio\":50,\"discount\":58,\"real_count\":2,\"real_name\":1,\"bind_phone\":0,\"bind_count\":3,\"created_at\":\"2019-04-10 14:22:28\",\"updated_at\":\"2019-04-22 17:59:20\",\"deleted_at\":\"\",\"status\":0,\"game_img\":[],\"box_name\":\"\",\"cp_game\":\"\",\"index_img\":\"\"}},{\"id\":5,\"tag_id\":10,\"game_id\":2483,\"recommend\":0,\"sort\":0,\"deleted_at\":\"\",\"created_at\":\"\",\"updated_at\":\"\",\"game\":{\"id\":2483,\"game_name\":\"测试游戏\",\"type\":\"1\",\"game_tags\":\"\",\"game_link\":\"\",\"game_icon\":\"https://vrtest-10070225.image.myqcloud.com/games/images/1555926595166_th.jpeg.png\",\"game_small_desc\":\"\",\"game_desc\":\"\",\"game_ver\":\"\",\"game_last_update\":\"\",\"game_allow_system\":\"\",\"download_url\":\"http://dl02.ttfm.game900.com/0/bao/dandanguaji.apk\",\"game_file_size\":\"28.49MB\",\"game_play_url\":\"\",\"down_count\":0,\"game_pay_callback\":\"http://123.206.114.224/api/testGameCallBack\",\"md5_key\":\"GwlmON1Ex8CYYs4v0#Hx\",\"game_banner\":\"\",\"pinyin\":\"\",\"game_divide\":50,\"cp_divide\":50,\"promote_ratio\":50,\"discount\":58,\"real_count\":2,\"real_name\":1,\"bind_phone\":0,\"bind_count\":3,\"created_at\":\"2019-04-10 14:22:28\",\"updated_at\":\"2019-04-22 17:59:20\",\"deleted_at\":\"\",\"status\":0,\"game_img\":[],\"box_name\":\"\",\"cp_game\":\"\",\"index_img\":\"\"}}]}}";
                break;
            case "/api/getDownLists":
                strt = "{\"code\":200,\"data\":{\"id\":10,\"tab_child_id\":3,\"tag_name\":\"排行\",\"type\":2,\"sort\":0,\"created_at\":\"\",\"updated_at\":\"\",\"deleted_at\":\"\",\"games\":[{\"id\":3,\"tag_id\":2,\"game_id\":2486,\"recommend\":1,\"sort\":14,\"deleted_at\":null,\"created_at\":null,\"updated_at\":null,\"game\":{\"id\":2486,\"game_name\":\"测试游戏\",\"type\":\"1\",\"game_tags\":null,\"game_link\":null,\"game_icon\":\"http://p16.qhimg.com/t014a4899d0a9a6b545.png\",\"game_small_desc\":\"金麟岂是池中物 一遇风云变化龙\",\"game_desc\":\"金麟岂是池中物 一遇风云变化龙\",\"appdesc\":\"首款电影级武侠MMO手游《风云》,由港漫教父马荣成正版授权,是畅游天龙八部3D团队打造最新力作。多种PK方式全景战斗模式,带来电影级武侠体验\",\"game_ver\":null,\"game_last_update\":null,\"game_allow_system\":null,\"download_url\":\"http://d4.gamersky.com/2018/01/gjqt_0.9.0.apk\",\"game_file_size\":\"28.49MB\",\"game_play_url\":null,\"down_count\":9650,\"game_pay_callback\":\"http://123.206.114.224/api/testGameCallBack\",\"md5_key\":\"GwlmON1Ex8CYYs4v0#Hx\",\"game_banner\":null,\"pinyin\":null,\"game_divide\":50,\"cp_divide\":50,\"promote_ratio\":50,\"discount\":58,\"real_count\":2,\"real_name\":1,\"bind_phone\":0,\"bind_count\":3,\"created_at\":\"2019-04-10 14:22:28\",\"updated_at\":\"2019-04-25 15:24:52\",\"deleted_at\":null,\"status\":0,\"game_img\":[\"games/images/1556177072934_th.jpeg.png\",\"games/images/1556177079855_2018100618181600-F1C11A22FAEE3B82F21B330E1B786A39.jpg\"],\"box_name\":\"cn.geekgame.dota.kaopu1\",\"cp_game\":null,\"index_img\":null}},{\"id\":4,\"tag_id\":10,\"game_id\":2483,\"recommend\":1,\"sort\":10,\"deleted_at\":\"\",\"created_at\":\"\",\"updated_at\":\"\",\"game\":{\"id\":2483,\"game_name\":\"测试游戏\",\"type\":\"1\",\"game_tags\":\"\",\"game_link\":\"\",\"game_icon\":\"https://vrtest-10070225.image.myqcloud.com/games/images/1555926595166_th.jpeg.png\",\"game_small_desc\":\"\",\"game_desc\":\"\",\"game_ver\":\"\",\"game_last_update\":\"\",\"game_allow_system\":\"\",\"download_url\":\"http://dl02.ttfm.game900.com/0/bao/dandanguaji.apk\",\"game_file_size\":\"28.49MB\",\"game_play_url\":\"\",\"down_count\":0,\"game_pay_callback\":\"http://123.206.114.224/api/testGameCallBack\",\"md5_key\":\"GwlmON1Ex8CYYs4v0#Hx\",\"game_banner\":\"\",\"pinyin\":\"\",\"game_divide\":50,\"cp_divide\":50,\"promote_ratio\":50,\"discount\":58,\"real_count\":2,\"real_name\":1,\"bind_phone\":0,\"bind_count\":3,\"created_at\":\"2019-04-10 14:22:28\",\"updated_at\":\"2019-04-22 17:59:20\",\"deleted_at\":\"\",\"status\":0,\"game_img\":[],\"box_name\":\"\",\"cp_game\":\"\",\"index_img\":\"\"}},{\"id\":5,\"tag_id\":10,\"game_id\":2483,\"recommend\":0,\"sort\":0,\"deleted_at\":\"\",\"created_at\":\"\",\"updated_at\":\"\",\"game\":{\"id\":2483,\"game_name\":\"测试游戏\",\"type\":\"1\",\"game_tags\":\"\",\"game_link\":\"\",\"game_icon\":\"https://vrtest-10070225.image.myqcloud.com/games/images/1555926595166_th.jpeg.png\",\"game_small_desc\":\"\",\"game_desc\":\"\",\"game_ver\":\"\",\"game_last_update\":\"\",\"game_allow_system\":\"\",\"download_url\":\"http://dl02.ttfm.game900.com/0/bao/dandanguaji.apk\",\"game_file_size\":\"28.49MB\",\"game_play_url\":\"\",\"down_count\":0,\"game_pay_callback\":\"http://123.206.114.224/api/testGameCallBack\",\"md5_key\":\"GwlmON1Ex8CYYs4v0#Hx\",\"game_banner\":\"\",\"pinyin\":\"\",\"game_divide\":50,\"cp_divide\":50,\"promote_ratio\":50,\"discount\":58,\"real_count\":2,\"real_name\":1,\"bind_phone\":0,\"bind_count\":3,\"created_at\":\"2019-04-10 14:22:28\",\"updated_at\":\"2019-04-22 17:59:20\",\"deleted_at\":\"\",\"status\":0,\"game_img\":[],\"box_name\":\"\",\"cp_game\":\"\",\"index_img\":\"\"}},{\"id\":3,\"tag_id\":2,\"game_id\":2486,\"recommend\":1,\"sort\":14,\"deleted_at\":null,\"created_at\":null,\"updated_at\":null,\"game\":{\"id\":2486,\"game_name\":\"测试游戏\",\"type\":\"1\",\"game_tags\":null,\"game_link\":null,\"game_icon\":\"http://p16.qhimg.com/t014a4899d0a9a6b545.png\",\"game_small_desc\":\"金麟岂是池中物 一遇风云变化龙\",\"game_desc\":\"金麟岂是池中物 一遇风云变化龙\",\"appdesc\":\"首款电影级武侠MMO手游《风云》,由港漫教父马荣成正版授权,是畅游天龙八部3D团队打造最新力作。多种PK方式全景战斗模式,带来电影级武侠体验\",\"game_ver\":null,\"game_last_update\":null,\"game_allow_system\":null,\"download_url\":\"http://d4.gamersky.com/2018/01/gjqt_0.9.0.apk\",\"game_file_size\":\"28.49MB\",\"game_play_url\":null,\"down_count\":9650,\"game_pay_callback\":\"http://123.206.114.224/api/testGameCallBack\",\"md5_key\":\"GwlmON1Ex8CYYs4v0#Hx\",\"game_banner\":null,\"pinyin\":null,\"game_divide\":50,\"cp_divide\":50,\"promote_ratio\":50,\"discount\":58,\"real_count\":2,\"real_name\":1,\"bind_phone\":0,\"bind_count\":3,\"created_at\":\"2019-04-10 14:22:28\",\"updated_at\":\"2019-04-25 15:24:52\",\"deleted_at\":null,\"status\":0,\"game_img\":[\"games/images/1556177072934_th.jpeg.png\",\"games/images/1556177079855_2018100618181600-F1C11A22FAEE3B82F21B330E1B786A39.jpg\"],\"box_name\":\"cn.geekgame.dota.kaopu1\",\"cp_game\":null,\"index_img\":null}},{\"id\":4,\"tag_id\":10,\"game_id\":2483,\"recommend\":1,\"sort\":10,\"deleted_at\":\"\",\"created_at\":\"\",\"updated_at\":\"\",\"game\":{\"id\":2483,\"game_name\":\"测试游戏\",\"type\":\"1\",\"game_tags\":\"\",\"game_link\":\"\",\"game_icon\":\"https://vrtest-10070225.image.myqcloud.com/games/images/1555926595166_th.jpeg.png\",\"game_small_desc\":\"\",\"game_desc\":\"\",\"game_ver\":\"\",\"game_last_update\":\"\",\"game_allow_system\":\"\",\"download_url\":\"http://dl02.ttfm.game900.com/0/bao/dandanguaji.apk\",\"game_file_size\":\"28.49MB\",\"game_play_url\":\"\",\"down_count\":0,\"game_pay_callback\":\"http://123.206.114.224/api/testGameCallBack\",\"md5_key\":\"GwlmON1Ex8CYYs4v0#Hx\",\"game_banner\":\"\",\"pinyin\":\"\",\"game_divide\":50,\"cp_divide\":50,\"promote_ratio\":50,\"discount\":58,\"real_count\":2,\"real_name\":1,\"bind_phone\":0,\"bind_count\":3,\"created_at\":\"2019-04-10 14:22:28\",\"updated_at\":\"2019-04-22 17:59:20\",\"deleted_at\":\"\",\"status\":0,\"game_img\":[],\"box_name\":\"\",\"cp_game\":\"\",\"index_img\":\"\"}},{\"id\":5,\"tag_id\":10,\"game_id\":2483,\"recommend\":0,\"sort\":0,\"deleted_at\":\"\",\"created_at\":\"\",\"updated_at\":\"\",\"game\":{\"id\":2483,\"game_name\":\"测试游戏\",\"type\":\"1\",\"game_tags\":\"\",\"game_link\":\"\",\"game_icon\":\"https://vrtest-10070225.image.myqcloud.com/games/images/1555926595166_th.jpeg.png\",\"game_small_desc\":\"\",\"game_desc\":\"\",\"game_ver\":\"\",\"game_last_update\":\"\",\"game_allow_system\":\"\",\"download_url\":\"http://dl02.ttfm.game900.com/0/bao/dandanguaji.apk\",\"game_file_size\":\"28.49MB\",\"game_play_url\":\"\",\"down_count\":0,\"game_pay_callback\":\"http://123.206.114.224/api/testGameCallBack\",\"md5_key\":\"GwlmON1Ex8CYYs4v0#Hx\",\"game_banner\":\"\",\"pinyin\":\"\",\"game_divide\":50,\"cp_divide\":50,\"promote_ratio\":50,\"discount\":58,\"real_count\":2,\"real_name\":1,\"bind_phone\":0,\"bind_count\":3,\"created_at\":\"2019-04-10 14:22:28\",\"updated_at\":\"2019-04-22 17:59:20\",\"deleted_at\":\"\",\"status\":0,\"game_img\":[],\"box_name\":\"\",\"cp_game\":\"\",\"index_img\":\"\"}}]}}";
                break;
            case "/api/showGameInfo":
                strt = "{\"code\":200,\"data\":{\"id\":2486,\"game_name\":\"3\",\"type\":\"1\",\"game_tags\":\"\",\"game_link\":\"\",\"game_icon\":\"\",\"game_small_desc\":\"\",\"game_desc\":\"\",\"game_ver\":\"\",\"game_last_update\":\"\",\"game_allow_system\":\"\",\"download_url\":\"\",\"game_file_size\":\"\",\"game_play_url\":\"\",\"down_count\":1,\"game_pay_callback\":\"\",\"md5_key\":\"\",\"game_banner\":\"\",\"pinyin\":\"\",\"game_divide\":0,\"cp_divide\":0,\"promote_ratio\":0,\"discount\":59,\"real_count\":0,\"real_name\":0,\"bind_phone\":0,\"bind_count\":0,\"created_at\":\"2019-04-22 18:04:54\",\"updated_at\":\"2019-04-29 11:10:28\",\"deleted_at\":\"\",\"status\":0,\"game_img\":[\"http://pic2.cxtuku.com/00/15/12/b02302d3fb2e.jpg\",\"http://pic2.cxtuku.com/00/15/12/b27518df3644.jpg\",\"http://a.hiphotos.baidu.com/zhidao/pic/item/6159252dd42a283444e7e0155bb5c9ea15cebf6f.jpg\",\"http://www.99danji.com/upload/20127/2012071232959689.jpg\"],\"box_name\":\"\",\"cp_game\":\"\",\"index_img\":\"\",\"false_down_count\":0}}";
                break;
            case "/api/getStartAd":
                strt = "{\"code\":200,\"data\":{\"id\":1,\"name\":\"\\u5f00\\u5c4f\\u9875\",\"jump_type\":2,\"game_id\":2843,\"url\":\"https://www.baidu.com\",\"start_time\":\"2019-05-19 16:53:09\",\"end_time\":\"2019-05-22 16:53:13\",\"nol_img_url\":\"ads\\/games\\/landingpages\\/1557805707776_%E6%A8%A1%E6%9D%BF_03.jpg\",\"full_img_url\":\"ads\\/games\\/landingpages\\/1557805707776_%E6%A8%A1%E6%9D%BF_03.jpg\",\"deleted_at\":\"\",\"created_at\":\"\",\"updated_at\":\"\",\"nol_img_url_text\":\"https:\\/\\/vrtest-10070225.image.myqcloud.com\\/ads\\/games\\/landingpages\\/1557805707776_%E6%A8%A1%E6%9D%BF_03.jpg\",\"full_img_url_text\":\"https:\\/\\/vrtest-10070225.image.myqcloud.com\\/ads\\/games\\/landingpages\\/1557805707776_%E6%A8%A1%E6%9D%BF_03.jpg\"}}";
                break;
            case "/api/getActivity":
                strt = "{\"code\":200,\"data\":[{\"id\":4,\"name\":\"领取优惠券\",\"sort\":101,\"page_type\":1,\"type\":2,\"coupon_id\":2,\"url\":null,\"game_id\":null,\"show_type\":1,\"target_type\":1,\"amount\":\"0.00\",\"day\":3,\"user_phone\":null,\"start_time\":\"2019-05-28 00:00:00\",\"end_time\":\"2019-05-31 00:00:00\",\"img_url\":\"apk\\/activities\\/1559120307692_12.jpg\",\"deleted_at\":null,\"created_at\":\"2019-05-29 16:58:31\",\"updated_at\":\"2019-05-29 16:58:31\",\"status\":\"生效\",\"img_url_txt\":\"https:\\/\\/vrtest-10070225.cos.ap-shanghai.myqcloud.com\\/apk\\/activities\\/1559120307692_12.jpg\",\"activity_user\":null},{\"id\":2,\"name\":\"营销活动\",\"sort\":100,\"page_type\":1,\"type\":4,\"coupon_id\":null,\"url\":null,\"game_id\":2483,\"show_type\":2,\"target_type\":1,\"amount\":\"0.00\",\"day\":3,\"user_phone\":null,\"start_time\":\"2019-05-28 00:00:00\",\"end_time\":\"2019-05-31 00:00:00\",\"img_url\":\"apk\\/activities\\/1559115178414_61.png\",\"deleted_at\":null,\"created_at\":\"2019-05-29 15:33:01\",\"updated_at\":\"2019-05-29 15:33:01\",\"status\":\"生效\",\"img_url_txt\":\"https:\\/\\/vrtest-10070225.cos.ap-shanghai.myqcloud.com\\/apk\\/activities\\/1559115178414_61.png\",\"activity_user\":{\"id\":2,\"activity_id\":2,\"user_id\":9,\"type\":2,\"status\":0,\"date\":\"2019-05-26\",\"created_at\":null,\"updated_at\":null}},{\"id\":1,\"name\":\"活动名称:\",\"sort\":1,\"page_type\":1,\"type\":2,\"coupon_id\":2,\"url\":null,\"game_id\":null,\"show_type\":1,\"target_type\":5,\"amount\":\"0.00\",\"day\":3,\"user_phone\":\"13636415907\",\"start_time\":\"2019-05-08 00:00:00\",\"end_time\":\"2019-06-21 00:00:00\",\"img_url\":\"apk\\/activities\\/1558511437193_%E6%A8%A1%E6%9D%BF_04.jpg\",\"deleted_at\":null,\"created_at\":\"2019-05-22 15:37:19\",\"updated_at\":\"2019-05-27 10:53:06\",\"status\":\"生效\",\"img_url_txt\":\"https:\\/\\/vrtest-10070225.cos.ap-shanghai.myqcloud.com\\/apk\\/activities\\/1558511437193_%E6%A8%A1%E6%9D%BF_04.jpg\",\"activity_user\":null}]}";
                break;
            default:
                if (httpModth.equals("POST")) {
                    strt = doHttpPost(url, dataJson);
                } else {
                    url = url + "?" + httpGetQueryString;
                    strt = doHttpGet(url);
                }

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

    public static File downloadFile(String urlPath, String downloadDir, String fileFullName) {
        File file = null;
        try {

            URL url = new URL(urlPath);
            // 连接类的父类，抽象类
            URLConnection urlConnection = url.openConnection();
            // http的连接类
            HttpURLConnection httpURLConnection = (HttpURLConnection) urlConnection;
            httpURLConnection.setRequestMethod("GET");
            int responseCode = httpURLConnection.getResponseCode();
            if (responseCode == 302) {//从定向下载
                String redirectUrl = new String(httpURLConnection.getHeaderField("Location").getBytes("ISO-8859-1"), "UTF-8");
                url = new URL(redirectUrl);
                httpURLConnection = (HttpURLConnection) url.openConnection();
                httpURLConnection.setRequestMethod("GET");
            }
            //设置超时
            httpURLConnection.setConnectTimeout(10000 * 5);
            httpURLConnection.setReadTimeout(10000 * 5);
            // 设置字符编码
            httpURLConnection.setRequestProperty("Charset", "UTF-8");
            httpURLConnection.setRequestProperty("Accept-Charset", "UTF-8");
            httpURLConnection.setRequestProperty("accept", "*/*");
            httpURLConnection.setRequestProperty("contentType", "UTF-8");

            // 打开到此 URL引用的资源的通信链接（如果尚未建立这样的连接）。
            httpURLConnection.connect();


            InputStream is;
            int code = httpURLConnection.getResponseCode();

            is = httpURLConnection.getInputStream(); // 得到网络返回的输入流

            BufferedInputStream bin = new BufferedInputStream(is);

            // 文件大小
            long fileLength = httpURLConnection.getContentLength();

            // 控制台打印文件大小
            System.out.println(code + "  您要下载的文件" + fileFullName + " 大小为:" + fileLength / (1024 * 1024) + "MB");

            // 指定文件名称(有需求可以自定义)
            // 指定存放位置(有需求可以自定义)
            String path = downloadDir + File.separatorChar + fileFullName;
            file = new File(path);
            // 校验文件夹目录是否存在，不存在就创建一个目录
            if (!file.getParentFile().exists()) {
                file.getParentFile().mkdirs();
            }

            OutputStream out = new FileOutputStream(file);
            int size = 0;
            long len = 0;
            long jinDuOut = 0;
            byte[] buf = new byte[2048];
            while ((size = bin.read(buf)) != -1) {
                len += size;
                // 控制台打印文件下载的百分比情况
                long jinDu = len * 100 / fileLength;
                if (jinDuOut < jinDu) {
                    jinDuOut = jinDu;
                    System.out.println("下载了-------> " + jinDu + "%");
                }
                out.write(buf, 0, size);
            }
            // 关闭资源
            bin.close();
            out.close();
            System.out.println("文件下载成功！");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("文件下载失败！");
        } finally {
            return file;
        }

    }

}
