<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<!DOCTYPE html>
<html>
<head>
<base href="<%=basePath%>"></base>

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>主页</title>
<script src="js/jquery-1.11.1.min.js"></script>
<!-- //js -->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
</head>
<body>
	<div>
		<br /> <font size="6">${title}</font> <br /> <font size="6">
			<a href="http://192.168.3.240:9050/cax.html">login</a>
		</font> <br /> <font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/confirm_order.html">confirm_order</a></font>
		<br /> <font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/detail.html">detail</a></font> <br />
		<font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/join.html">join</a></font> <font
			size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/join.html">join</a></font> <font
			size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/member.html">member</a></font> <font
			size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/member/trade.html">member/trade</a></font>
		<br /> <font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/member/trade/item.html">member/trade/item</a></font>
		<br /> <font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/member/income.html">member/income</a></font>
		<br /> <font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/member/income/yesterday.html">member/income/yesterday</a></font>
		<br /> <font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/member/income/total.html">member/income/total</a></font>
		<br /> <font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/member/calendar.html">member/calendar</a></font>
		<br /> <font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/member/calendar/day.html">member/calendar/day</a></font>
		<br /> <font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/member/calendar/list.html">member/calendar/list</a></font>
		<br /> <font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/member/coupons.html">member/coupons</a></font>
		<br /> <font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/member/capitalflow.htmll">member/capitalflow</a></font>
		<br /> <font size="6"> <a
			href="http://192.168.2.73:8080/v1.0/user/share.html">share</a></font>
	</div>
</body>
</html>