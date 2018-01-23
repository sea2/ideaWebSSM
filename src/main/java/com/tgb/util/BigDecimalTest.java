package com.tgb.util;

import java.math.BigDecimal;

public class BigDecimalTest {

	/**
	 * 3 * 提供精确加法计算的add方法 4 * @param value1 被加数 5 * @param value2 加数 6 * @return
	 * 两个参数的和 7
	 */
	public static double add(double value1, double value2) {
		BigDecimal b1 = new BigDecimal(Double.valueOf(value1));
		BigDecimal b2 = new BigDecimal(Double.valueOf(value2));
		return b1.add(b2).doubleValue();
	}

	/**
	 * 提供精确减法运算的sub方法 16 * @param value1 被减数 17 * @param value2 减数 18 * @return
	 * 两个参数的差 19
	 */
	public static double sub(double value1, double value2) {
		BigDecimal b1 = new BigDecimal(Double.valueOf(value1));
		BigDecimal b2 = new BigDecimal(Double.valueOf(value2));
		return b1.subtract(b2).doubleValue();
	}

	/**
	 * 27 * 提供精确乘法运算的mul方法 28 * @param value1 被乘数 29 * @param value2 乘数 30
	 * * @return 两个参数的积 31
	 */
	public static double mul(double value1, double value2) {
		BigDecimal b1 = new BigDecimal(Double.valueOf(value1));
		BigDecimal b2 = new BigDecimal(Double.valueOf(value2));
		return b1.multiply(b2).doubleValue();
	}

	/**
	 * 39 * 提供精确的除法运算方法div 40 * @param value1 被除数 41 * @param value2 除数 42
	 * * @param scale 精确范围 43 * @return 两个参数的商 44 * @throws
	 * IllegalAccessException 45
	 */
	public static double div(double value1, double value2, int scale) throws IllegalAccessException {
		// 如果精确范围小于0，抛出异常信息
		if (scale < 0) {
			throw new IllegalAccessException("精确度不能小于0");
		}
		BigDecimal b1 = new BigDecimal(Double.valueOf(value1));
		BigDecimal b2 = new BigDecimal(Double.valueOf(value2));
		return b1.divide(b2, scale).doubleValue();
	}

}
