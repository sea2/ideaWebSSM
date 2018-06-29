<%@ page language="java" import="java.util.*" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
    <base href="<%=basePath%>">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport"
          content="width=device-width,minimum-scale=1.0,maximum-scale=1.0">
    <link rel="stylesheet" href="css/fund.css">


    <script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
    <head>


        <title>添加平台</title>

        <script type="text/javascript">
            function addPlat() {
                var name = $("input[name='plat_name']").val();
                var score = $("input[name='score']").val();
                var money = $("input[name='money']").val();
                if (name.length == 0) {
                    alert('请输入基金code');
                } else {
                    $.ajax({
                        url: '<%=basePath%>/fund/saveMyFund?code=' + name
                        + '&score=' + score + '&money=' + money,
                        type: 'GET',
                        dataType: "jsonp",
                        //传递给请求处理程序，用以获得jsonp回调函数名的参数名(默认为:callback)
                        jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                        jsonpCallback: "jsonpCallback",
                        timeout: 1000,
                        cache: false,
                        beforeSend: LoadFunction, //加载执行方法
                        error: erryFunction, //错误执行方法
                        success: succFunction
                        //成功执行方法
                    })

                    function LoadFunction() {
                    }

                    function erryFunction() {
                        alert("error");
                    }

                    function succFunction(tt) {
                        var code = tt.code;
                        window.location.href = 'fund/getList';
                    }
                }
            }


        </script>

    </head>

<body>
<div id="main">
    <br>
    <h1 style="color: #555; font-size: 30px;">添加基金</h1>


    <div class="welcome_search_box">
        <input name='plat_name' type="text" placeholder="基金code"
        /></div>


    <div class="welcome_search_box"><input type="text" name="score" placeholder="收益百分比"
    /></div>
    <div class="welcome_search_box"><input type="text" name="money" placeholder="购买总金额"
    /></div>
    <br>
    <div id="welcome_search_button">
        <a href="javascript:;" onclick="addPlat()" id="add_a" >添加</a>
    </div>

</div>
</body>
</html>
