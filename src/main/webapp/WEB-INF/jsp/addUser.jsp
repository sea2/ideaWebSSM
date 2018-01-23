<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>

<base href="<%=basePath%>">
<script src="js/jquery-1.11.1.min.js"></script>
<!-- //js -->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
    
    <title>添加用户</title>
    
	<script type="text/javascript">
	function addUser(){
		var form = document.forms[0];
		form.action = "<%=basePath%>user/addUser";
		form.method="post";
		form.submit();
	}
</script>

  </head>
  
  <body style="color:#55555; font-size:50px;">
    <h1 style="color:#55555; font-size:50px;">添加用户</h1>
	<form action="" name="userForm" style="color:#55555; font-size:50px;">
		姓名：<input type="text" name="userName" style="color:#55555; font-size:50px;"/>
		<br/>
		年龄：<input type="text" name="age" style="color:#55555; font-size:50px;"/>
		<br/>
		<input type="button" value="添加" onclick="addUser()" style="color:#55555; font-size:50px;"/>
	</form>
  </body>
</html>
