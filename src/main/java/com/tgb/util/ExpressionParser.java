package com.tgb.util;

import java.util.Stack;

public class ExpressionParser {
	private Stack<Character> chStack; // 创建一个符号栈。
	private Stack<Double> numStack; // 创建一个数字栈。
	private StringBuffer expression;

	/**
	 * 功能：初始化表达式。
	 */
	public ExpressionParser(String expression) {
		this.expression = new StringBuffer(expression);
		this.chStack = new Stack<Character>();
		this.numStack = new Stack<Double>();
	}

	/**
	 * 功能：计算表达式的值。
	 */
	public double parse() throws Exception {
		// 若表达式还没有解析完。
		while (this.expression.length() > 0) {
			// 获取当前表达式头部的第一个字符。
			char ch = this.expression.charAt(0);
			this.expression.deleteCharAt(0);
			double num = 0;
			boolean existNum = false;
			// 若当前读取到的是数字。
			while (ch >= '0' && ch <= '9') {
				num = num * 10 + ch - '0';
				existNum = true;
				if (this.expression.length() > 0) {
					ch = this.expression.charAt(0);
					this.expression.deleteCharAt(0);
				} else {
					break;
				}
			}
			// 若当前读取到的是小数点
			if (ch == '.') {
				double theDecimal = 1;
				ch = this.expression.charAt(0);
				this.expression.deleteCharAt(0);
				while (ch >= '0' && ch <= '9') {
					theDecimal = theDecimal * 10;
					num = num + (ch - '0') / theDecimal;
					existNum = true;
					if (this.expression.length() > 0) {
						ch = this.expression.charAt(0);
						this.expression.deleteCharAt(0);
					} else {
						break;
					}
				}
				// 若刚刚解析完一个数字，则将数字压栈。
				if (existNum) {
					this.numStack.push(num);
					// 若整个表达式的解析已经结束了。
					if (this.expression.length() == 0 && ch >= '0' && ch <= '9') {
						break;
					}
				}
			} else {
				// 若刚刚解析完一个数字，则将数字压栈。
				if (existNum) {
					this.numStack.push(num);
					// 若整个表达式的解析已经结束了。
					if (this.expression.length() == 0 && ch >= '0' && ch <= '9') {
						break;
					}
				}
			}
			// 若符号栈为空 或 栈顶元素为左括号 或 ch本身就是左括号,则直接将符号压入栈。
			if (this.chStack.isEmpty() || this.chStack.peek() == '(' || ch == '(') {
				this.chStack.push(ch);
				continue;
			}
			switch (ch) {
			case ')': {// 若当前符号是右括号,则不断的弹出一个运算符和两个操作数，直到遇到左括号为止。
				while (this.numStack.size() >= 2 && !this.chStack.isEmpty() && this.chStack.peek() != '(') {
					this.calc();
				}
				if (!this.chStack.isEmpty() && this.chStack.peek() == '(') {
					this.chStack.pop(); // 弹出这个左括号。
					continue;
				} else {
					throw new IllegalArgumentException("括号的数量不匹配!");
				}
			}
			case '*':
			case '/':
			case '%': {
				// 若符号栈栈顶元素为+、-、(
				// 或者符号栈为空，则意味着符号栈栈顶符号比ch优先级底，所以，将ch压栈。否则，将符号栈栈顶元素弹出来，然后开始计算。
				while (this.numStack.size() >= 2 && !(this.chStack.isEmpty() || this.chStack.peek() == '(' || this.chStack.peek() == '+' || this.chStack.peek() == '-')) {
					this.calc();
				}
				// 若符号栈栈顶元素优先级比ch的低。
				if (this.chStack.isEmpty() || this.chStack.peek() == '(' || this.chStack.peek() == '+' || this.chStack.peek() == '-') {
					this.chStack.push(ch);
					continue;
				}
			}
			case '+':
			case '-': {
				// 若当前符号栈栈顶元素不是(，符号栈也不为空，则将符号栈栈顶元素弹出来，然后开始计算。因为+、-号的优先级最低。
				while (this.numStack.size() >= 2 && (!this.chStack.isEmpty() || this.chStack.peek() != '(')) {
					this.calc();
				}
				if (this.chStack.isEmpty() || this.chStack.peek() == '(') {
					// 若符号栈栈顶元素为(、或符号栈为空，则将ch压栈。
					this.chStack.push(ch);
					continue;
				} else {
					throw new IllegalArgumentException("表达式格式不合法!");
				}
			}
			default:
				throw new IllegalArgumentException("运算符非法!");
			}// switch 结束。
		} // while 结束。
			// 若符号栈不为空，则不断的从符号栈和数字栈中弹出元素，进行计算。
		while (!this.chStack.isEmpty()) {
			this.calc();
		}
		// 若最终数字栈中仅存一个元素，则证明表达式正确，栈顶元素就是表达式的值。
		return this.numStack.size() == 1 ? this.numStack.pop() : null;
	}

	/**
	 * 功能：依据指定的操作数、运算符，进行运算。
	 */
	private void calc() throws Exception {
		double b = this.numStack.pop();
		double a = this.numStack.pop();
		char op = this.chStack.pop();
		double result = 0;
		switch (op) {
		case '+':
			result = a + b;
			break;
		case '-':
			result = a - b;
			break;
		case '*':
			result = a * b;
			break;
		case '/': {
			if (b == 0) {
				throw new ArithmeticException("除数不能为0!");
			}
			result = a / b;
			break;
		}
		case '%': {
			if (b == 0) {
				throw new ArithmeticException("除数不能为0!");
			}
			result = a % b;
			break;
		}
		}
		// 将运算的结果压栈。
		this.numStack.push(result);
	}

	public void print() {
		System.out.println("数字栈元素：" + this.numStack);
		System.out.println("符号栈元素：" + this.chStack);
	}
}
