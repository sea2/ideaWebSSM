<%@ page language="java" import="java.util.*" pageEncoding="utf-8"
         contentType="text/html; charset=UTF-8" %>

<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
            + path + "/";
%>

<!DOCTYPE html>
<html>
<head>
    <base href="<%=basePath%>">
    <script src="js/jquery-1.11.1.min.js"></script>
    <!-- //js -->
    <link href="css/style.css" rel="stylesheet" type="text/css" media="all"/>
    <title>首页</title>


</head>

<body>
<div align="center">
    <br/> <br/> <a href="<%=basePath%>user/getAllUser"
                   style="color: #555555; font-size: 50px;">进入用户管理页</a><br/> <br/>
    <a href="p2p/getList" style="color: #55555; font-size: 50px;">进入网贷平台总览</a>
    <a href="fund/getList" style="color: #55555; font-size: 50px;">进入基金频道</a>
</div>


</body>
</html>
