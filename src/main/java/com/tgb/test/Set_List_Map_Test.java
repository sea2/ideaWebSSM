package com.tgb.test;

import com.tgb.util.HttpUtil;

import java.util.*;

public class Set_List_Map_Test {

    public static void main(String[] args) {
        List<Object> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);
        // 1: 用for循环和get()方法：
        for (int i = 0; i < list.size(); i++) {
            System.out.println(list.get(i));
        }

        // 2: 使用 迭代器（Iterator）:
        Iterator<Object> it = list.iterator();
        while (it.hasNext()) {
            System.out.println(it.next() + "");
        }


        Map<String, String> mMap = new HashMap<String, String>();
        mMap.put("key", "value");
        mMap.put("key1", "value1");
        mMap.put("key2", "value2");
        mMap.put("key3", "value3");
        mMap.put("key4", "value4");
        mMap.put("key5", "value5");
        for (String str : mMap.keySet()) {
            System.out.println(str + ":" + mMap.get(str));
        }

        // 第二种：
        System.out.println("第二种：通过Map.entrySet使用iterator遍历key和value：");
        Iterator<Map.Entry<String, String>> it2 = mMap.entrySet().iterator();
        while (it2.hasNext()) {
            Map.Entry<String, String> entry = it2.next();
            System.out.println("key= " + entry.getKey() + " and value= " + entry.getValue());
        }
        // 第三种：推荐，尤其是容量大时
        System.out.println("第三种：通过Map.entrySet遍历key和value");
        for (Map.Entry<String, String> entry : mMap.entrySet()) {
            //Map.entry<Integer,String> 映射项（键-值对）  有几个方法：用上面的名字entry
            //entry.getKey() ;entry.getValue(); entry.setValue();
            //map.entrySet()  返回此映射中包含的映射关系的 Set视图。
            System.out.println("key= " + entry.getKey() + " and value= "
                    + entry.getValue());
        }

        //三目运算
        System.out.println(null != null ? "yes" : "no");


        HashMap<String, String> map = new HashMap<>();
        map.put("pageIndex", "1");
        map.put("ReqNo", "1524621947948");
        map.put("CompanyId", "10000");
        map.put("pageSize", "");
        map.put("plat", "Android");
        map.put("appType", "ttjj");
        map.put("BUY", "true");
        map.put("deviceid", "db5639755e30b8af059c1d78a921c348%7C%7C666038230091568");
        map.put("product", "EFund");
        map.put("Version", "5.2.5");
        map.put("Fcodes", "163402,470028,000988,100032,110023,161725,070032,340007,519700,166009");
        System.out.println(HttpUtil.doHttpPost("https://fundmobapi.eastmoney.com/FundMNewApi/FundMNFInfo", map));


    }


}
