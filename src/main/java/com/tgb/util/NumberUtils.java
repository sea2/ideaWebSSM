package com.tgb.util;

import java.math.BigDecimal;

public class NumberUtils {


    /**
     * java保留两位小数问题：
     * 方式一：
     * 四舍五入
     */
    public static double getTwoScale(double f) {
        BigDecimal b = new BigDecimal(f);
        return b.setScale(2, BigDecimal.ROUND_HALF_UP).doubleValue();
    }
    /**
     * java保留0位小数问题：
     * 方式一：
     * 四舍五入
     */
    public static double getZeroScale(double f) {
        BigDecimal b = new BigDecimal(f);
        return b.setScale(0, BigDecimal.ROUND_HALF_UP).doubleValue();
    }
}
