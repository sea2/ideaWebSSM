package com.tgb.test;

import java.util.*;

public class CollectTest {

    public static void main(String[] args) {
        long t1 = new Date().getTime();

        //无序的
        HashMap<String, Object> map = new HashMap<>();
        for (int t = 0; t < 100; t++) {
            map.put("" + t, t);
        }

        for (Map.Entry entry : map.entrySet()) {
//            System.out.println("key= " + entry.getKey() + " and value= " + entry.getValue());
        }

        //有序的,默认key的字母升序
       TreeMap<String, Object> treeMap = new TreeMap<>();
        for (int t = 0; t < 10; t++) {
            treeMap.put("" + t, t);
        }

        for (Map.Entry entry : treeMap.entrySet()) {
            System.out.println("key= " + entry.getKey() + " and value= " + entry.getValue());
        }



        HashSet<Integer> hashSet = new HashSet<Integer>();
        hashSet.add(1);
        hashSet.add(1);
        hashSet.remove(2);
        for (Integer integer : hashSet) {
            System.out.println("HashSet" + integer);
        }


        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        printTimeInfo(t1, "main");


    }

    private static void printTimeInfo(long t1, String keyInfo) {
        long t2 = System.currentTimeMillis(); // 排序后取得当前时间
        Calendar c = Calendar.getInstance();
        c.setTimeInMillis(t2 - t1);
        System.out.println(keyInfo + "--" + getLineInfo() + " 耗时: " + c.get(Calendar.MINUTE) + "分 " + c.get(Calendar.SECOND) + "秒 " + c.get(Calendar.MILLISECOND) + " 毫秒");
    }

    private static String getLineInfo() {
        StackTraceElement ste = new Throwable().getStackTrace()[1];
        return ste.getFileName() + ": Line " + ste.getLineNumber();
    }


}
