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
    <head>
        <style type="text/css">
            body {
                margin: 0 auto;
                text-align: center;
                width: 500px;
            }

            a {
                outline-style: none;
                text-decoration: none;
                font: bold 20px "微软雅黑";
                color: #fff;
                display: block;
                height: 100%;
                width: 100%;
            }

            th {
                border: 1px solid #d0d0d0;
                align: center;
                height: 80px;
            }

            td {
                line-height: 80px;
                border-radius: 2px;
                text-align: center;
                align: center;
                background-color: #09c;
                line-height: 80px;
                width: 10%;
            }

            .div-main {
                width: 45%;
                min-height: 100vh;
                margin: 0 auto;
                position: absolute;
                *zoom: 1;
                z-index: 1;
                top: 100px;
                overflow: hidden;
            }


            .dialog-main {
                width: 100%;
                height: 100%;
                margin: 0 auto;
                background-size: 100% 100%;
                background: #50000000;
                position: absolute;
                overflow: hidden;
                *zoom: 1;
                z-index: 10;
                top: 0;
                display: none;
            }

            .dialog-main_content {
                width: 200px;
                height: 60px;
                margin: 0 auto;
                background: #F82D2B;
                font: bold 20px "微软雅黑";
                color: #fff;
                background-size: 100% 100%;
                align: center;
                text-align: center;
                position: absolute;
                overflow: hidden;
                *zoom: 1;
                z-index: 10;
                top: 30%;
                padding-top: 20px;
                border-radius: 5px;
                left: 10%;
            }

            .goto_main {
                width: 100%;
                height: auto;
                background: #09c;
                font: bold 28px "微软雅黑";
                color: #fff;
                background-size: 100% 100%;
                align: center;
                text-align: center;
                position: relative;
                overflow: hidden;
                padding: 20px;
                border-radius: 2px;
                margin-top: 20px;
            }


        </style>
        <script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>

        <title>更新数据</title>

        <script type="text/javascript">
            function updatePlat(id) {

                $.ajax({
                    url: '<%=basePath%>/app/p2p/init?id=' + id,
                    type: 'GET',
                    dataType: "jsonp",
                    //传递给请求处理程序，用以获得jsonp回调函数名的参数名(默认为:callback)
                    jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                    jsonpCallback: "jsonpCallback",
                    timeout: 100000,
                    cache: false,
                    beforeSend: LoadFunction, //加载执行方法
                    error: erryFunction, //错误执行方法
                    success: succFunction
                    //成功执行方法
                })

                function LoadFunction() {
                    $(".dialog-main_content").text("加载中...");
                    $(".dialog-main").fadeIn();
                }

                function erryFunction() {
                    $(".dialog-main_content").text("更新失败！");
                    setTimeout(function () {
                        $(".dialog-main").fadeOut();

                    }, 1000);
                }

                function succFunction(tt) {
                    $(".dialog-main").fadeOut();
                    var code = tt.code;
                    if (code == 200) {
                        $(".dialog-main_content").text("更新完成！");
                        setTimeout(function () {
                            $(".dialog-main").fadeOut();

                        }, 1000);

                    } else {
                        $(".dialog-main_content").text("更新失败！");
                        setTimeout(function () {
                            $(".dialog-main").fadeOut();

                        }, 1000);
                    }
                }

            };


        </script>

    </head>

<body>
<div class="div-main">


    <table border="0" style="text-align: center">
        <tr>
            <td>
                <a class="a_update_btn" href="javascript:updatePlat(0)">全部</a>
            </td>
            <td>
                <a class="a_update_btn" href="javascript:updatePlat(1)">跟投p2p</a>
            </td>
            <td>
                <a class="a_update_btn" href="javascript:updatePlat(2)">融360</a>
            </td>
            <td>
                <a class="a_update_btn" href="javascript:updatePlat(3)">网贷之家</a>
            </td>
            <td>
                <a class="a_update_btn" href="javascript:updatePlat(4)">网贷天眼</a>
            </td>
            <td>
                <a class="a_update_btn" href="javascript:updatePlat(5)">之家天眼简称</a>
            </td>
        </tr>

    </table>
    <div class="goto_main">
        <a href="p2p/getList" style="width: 100%;height: auto"> 进入网贷平台总览</a>
    </div>

</div>
<div class="dialog-main">
    <div class="dialog-main_content">
        加载中....
    </div>
</div>


</body>
</html>
