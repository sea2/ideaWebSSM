package com.tgb.util;



import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

/**
 * 服务器返回验签工具类
 *
 * @author xiaocaimi@xcm.com
 */
public class SignUtils {
    /**
     * 将Map格式的字符串转成TreeMap
     *
     * @param mapJsonStr
     * @return
     */
    public static TreeMap<String, Object> formatMapJSON(String mapJsonStr)
            throws Exception {
        TreeMap<String, Object> resultTreeMap = new TreeMap<String, Object>();
        try {

            JSONObject jsonObject = new JSONObject(mapJsonStr);
            Iterator<String> keyIterator = jsonObject.keys();

            while (keyIterator.hasNext()) {
                String key = keyIterator.next();
                Object value = jsonObject.get(key);

                if (value instanceof String) {
                    resultTreeMap.put(key, value);
                } else if (value instanceof JSONArray) {
                    JSONArray jsonArray = (JSONArray) value;
                    if (null != jsonArray && jsonArray.length() > 0) {
                        if (jsonArray.get(0) instanceof String) {
                            resultTreeMap.put(key,
                                    formatSimpleListJSON(value.toString()));
                        } else {
                            resultTreeMap.put(key,
                                    formatListJSON(value.toString()));
                        }
                    } else {
                        resultTreeMap.put(key, null);
                    }
                } else if (value instanceof JSONObject) {
                    resultTreeMap.put(key, formatMapJSON(jsonObject.get(key)
                            .toString()));
                } else {
                    if (null != value && "null".equals(value.toString().toLowerCase())) {
                        resultTreeMap.put(key, null);
                    } else {
                        resultTreeMap.put(key, value);
                    }
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
        return resultTreeMap;
    }

    /**
     * 以List<Map>形式解析json数据
     *
     * @param listJsonStr
     * @return
     */
    public static List<TreeMap<String, Object>> formatListJSON(
            String listJsonStr) throws Exception {
        List<TreeMap<String, Object>> resultList = new ArrayList<TreeMap<String, Object>>();
        try {

            JSONArray jsonArray = new JSONArray(listJsonStr);
            for (int i = 0; i < jsonArray.length(); i++) {
                String mapJsonStr = jsonArray.getString(i);// []内部就以MAP格式的JSON字串类
                resultList.add(formatMapJSON(mapJsonStr));
            }
            return resultList;
        } catch (Exception e) {
            throw e;
        }
    }

    /**
     * 以List<简单类型>形式解析json数据
     *
     * @param listJsonStr
     * @return
     * @throws Exception
     */
    public static List<Object> formatSimpleListJSON(String listJsonStr)
            throws Exception {
        List<Object> resultList = new ArrayList<Object>();
        try {

            JSONArray jsonArray = new JSONArray(listJsonStr);
            for (int i = 0; i < jsonArray.length(); i++) {
                Object value = jsonArray.getString(i);// []内部就以MAP格式的JSON字串类
                resultList.add(value);
            }
            return resultList;
        } catch (Exception e) {
            throw e;
        }
    }

    @SuppressWarnings({"unchecked", "rawtypes"})
    public static String formateDecodeSign(TreeMap<String, Object> map) {
        String sign = "";
        TreeMap<String, Object> orderMap = new TreeMap<String, Object>();
        boolean isContainList = false;
        for (Object obj : map.keySet()) {
            // value不为空并且类型不是list
            if (map.get(obj) != null && !(map.get(obj) instanceof ArrayList<?>)) {
                if (!(map.get(obj) instanceof TreeMap<?, ?>)) {
                    if (!(map.get(obj).getClass().isArray())) {
                        sign += map.get(obj).toString();// 追加sign值
                        orderMap.put(obj.toString(), map.get(obj).toString());// 放入map属性
                    }
                } else {
                    isContainList = true;
                    TreeMap<String, Object> treeMap = (TreeMap<String, Object>) map
                            .get(obj);
                    if (null != treeMap) {
                        Iterator<String> it = treeMap.keySet().iterator();
                        while (it.hasNext()) {
                            String key = it.next().toString();
                            if (isSkipLayer(treeMap.get(key)))
                                continue;
                            sign += treeMap.get(key) + "";// 追加sign值
                            orderMap.put(key, treeMap.get(key) + "");// 放入map属性
                        }
                    }
                }
            } else if (map.get(obj) instanceof ArrayList<?>) {
                // 二级类型是list
                List<Object> list = (ArrayList) map.get(obj);// 获得list
                if (null != list && list.size() > 0) {
                    // 取得list第一条记录
                    Object listValue = list.get(0);
                    if (listValue instanceof Map) {
                        isContainList = true;
                        Map listMap = (Map) listValue;
                        for (Object listObj : listMap.keySet()) {
                            if (isSkipLayer(listMap.get(listObj)))
                                continue;
                            orderMap.put(listObj.toString(),
                                    listMap.get(listObj).toString());// 放入map属性
                        }
                    }
                }
            } else {
                continue;
            }
        }
        // 二级包含列表
        if (isContainList) {
            sign = "";// 重置sign值
            for (Object list2MapObj : orderMap.keySet()) {
                sign += orderMap.get(list2MapObj);// 追加sign值
            }
        }
        return sign;
    }

    /**
     * 是否是过滤层
     *
     * @param object
     * @return
     * @author : yydeng
     * @date ：2015年3月26日 下午1:02:04
     */
    private static boolean isSkipLayer(Object object) {
        return object == null || object instanceof List<?>
                || object instanceof Map || object instanceof Object[];
    }

    /**
     * formateListSign 格式化返回签名参数
     *
     * @return
     */
    public static String formateDecodeListSign(
            List<TreeMap<String, Object>> mapbeanList) {
        String sign = "";
        if (mapbeanList == null || !(mapbeanList.size() > 0)) {
            return sign;
        }
        TreeMap<String, Object> itBean = mapbeanList.get(0);
        for (Object obj : itBean.keySet()) {
            if (!(itBean.get(obj) instanceof ArrayList<?>)
                    && itBean.get(obj) != null) {
                sign += itBean.get(obj).toString();
            }
        }
        return sign;
    }

    /**
     * 生成客户端的服务器返回的签名
     *
     * @param sign
     * @return
     */
    public static String getEcodeSign(String sign) {
        StringBuffer sb = new StringBuffer("200");
        sb.append(sign);
        sb.append(CorytTool.CIPHER);
        String ecodeSign = CorytTool.ecodeByMD5(sb.toString());
        return ecodeSign;
    }

    /**
     * 创建客户端（V4版本）参数的签名
     *
     * @param paramsTreeMap
     * @return
     * @author windy 2014-8-6 下午7:18:57
     */
    public static String createClientSignV4(
            TreeMap<String, Object> paramsTreeMap) {
        String sign = "";
        StringBuffer buffer = new StringBuffer();
        if (null != paramsTreeMap) {
            // 遍历添加所有传值
            Iterator<String> itKeys = paramsTreeMap.keySet().iterator();
            while (itKeys.hasNext()) {
                String key = itKeys.next();
                Object value = paramsTreeMap.get(key);
                if (null != value) {
                    if (value instanceof String) {
                        buffer.append(value);
                    } else if (value instanceof Boolean) {
                        buffer.append(value.toString());
                    } else if (value instanceof Integer) {
                        buffer.append(String.valueOf(value));
                    } else if (value instanceof Double) {
                        buffer.append(String.valueOf(value));
                    } else if (value instanceof Float) {
                        buffer.append(String.valueOf(value));
                    } else if (value instanceof Long) {
                        buffer.append(String.valueOf(value));
                    } else if (value instanceof Short) {
                        buffer.append(String.valueOf(value));
                    }
                }
            }
            // 添加一级签名 keyxiaocaimi
            buffer.append(CorytTool.CIPHER);
        }
        // md5一级签名
        sign = CorytTool.ecodeByMD5(buffer.toString());
        sign = CorytTool.ecodeByMD5(sign + CorytTool.SUFFIX);
        return sign;
    }

    
    
    
    
    
}
