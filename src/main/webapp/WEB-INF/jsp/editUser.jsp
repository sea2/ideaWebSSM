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
    
    <title>编辑用户</title>
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
	<script type="text/javascript">
	function updateUser(){
		var form = document.forms[0];
		form.action = "<%=basePath%>user/updateUser";
		form.method="post";
		form.submit();
	}
</script>

  </head>
  
  <body style="color:#55555; font-size:50px;">
    <h1 style="color:#55555; font-size:50px;">编辑用户</h1>
	<form action="" name="userForm" style="color:#55555; font-size:50px;">
		<input type="hidden" name="id" value="${user.id }" />
		姓名：<input type="text" name="userName" value="${user.userName }" style="color:#55555; font-size:50px;"/>
		<br/>
		年龄：<input type="text" name="age" value="${user.age }" style="color:#55555; font-size:50px;"/>
		<input type="button" value="编辑" onclick="updateUser()"  style="color:#55555; font-size:50px;"/>
	</form>
  </body>
  
</html>
