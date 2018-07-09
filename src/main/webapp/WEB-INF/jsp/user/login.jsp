<%--
  Created by IntelliJ IDEA.
  User: lhy
  Date: 2018/7/2
  Time: 11:28
  To change this template use File | Settings | File Templates.
--%>

<%@ page language="java" import="java.util.*" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<%
    String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path + "/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
    <base href="<%=basePath%>">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>登陆系统</title>
    <link rel="icon" href="<%=basePath%>img/favicon.ico"/>
    <link href="<%=basePath%>static/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath%>static/validationEngine/validationEngine.jquery.min.css" rel="stylesheet">
    <link href="<%=basePath%>css/login_css.css" rel="stylesheet">
    <link href="<%=basePath%>css/font-awesome.css" rel="stylesheet">
    <link href="<%=basePath%>css/form-elements.css" rel="stylesheet">
    <link href="<%=basePath%>css/login_style.css" rel="stylesheet">
    <script src="<%=basePath%>static/jquery.min.js"></script>
    <script src="<%=basePath%>static/purl.min.js"></script>
    <script src="<%=basePath%>static/jquery.backstretch.min.js"></script>
    <script src="<%=basePath%>static/validationEngine/jquery.validationEngine-zh_CN.min.js"></script>
    <script src="<%=basePath%>static/validationEngine/jquery.validationEngine.min.js"></script>
    <script type="<%=basePath%>text/javascript">
        $(function () {
            if ($("#form-username").val() == "") {
                $("#form-username").focus();
            }
            $(document).keydown(function (event) {
                if (event.keyCode == 13) {
                    $("#login_form").submit();
                }
            });
            $.backstretch("image/backimg.jpg");
            $("#login_form").validationEngine('attach', {
                showOneMessage: false,
                "custom_error_messages": {
                    "#username": {
                        'required': {
                            'message': "请填写用户名"
                        },
                        'custom[email]': {
                            'message': "邮件格式错误"
                        }
                    }
                },
                promptPosition: "top",
                scroll: false,
                onValidationComplete: function (form, status) {
                    //可以通过这里阻止表单提交
                    console.log("The form status is: " + status + ", it will never submit");
                    return status;
                }
            });
        });
    </script>
</head>
<body>
<div class="container">
    <div class="top-content">
        <div class="inner-bg">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2 text">
                        <h1>
                            <strong>欢迎使用</strong>
                        </h1>

                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-3 form-box">
                        <div class="form-top">
                            <div class="form-top-left">
                                <h3>登陆</h3>
                                <p>输入您的用户名和密码:</p>
                            </div>
                            <div class="form-top-right"></div>
                        </div>
                        <div class="form-bottom">
                            <form id="login_form" role="form" action="user/login" method="get"
                                  class="login-form">
                                <div class="form-group">
                                    <label class="sr-only" for="form-username">用户名</label>
                                    <input name="username" placeholder="用户名"
                                           class="validate[required] form-username form-control input-error"
                                           id="form-username" type="text" value="admin">
                                </div>
                                <div class="form-group">
                                    <label class="sr-only" for="form-password">密码</label>
                                    <input name="password" placeholder="密码"
                                           class="validate[required] form-password form-control input-error"
                                           id="form-password" type="password" value="111111">
                                </div>
                                <button type="submit" class="btn">登陆</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-sm-offset-3 social-login">
                        <h3>...or login with:</h3>
                        <div class="social-login-buttons">
                            <a class="btn btn-link-2" href="javascript:void(0);"> Facebook </a> <a
                                class="btn btn-link-2" href="javascript:void(0);"> Twitter </a> <a
                                class="btn btn-link-2" href="javascript:void(0);"> Google Plus </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div
        style="left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; height: 730px; width: 1519px; z-index: -999999; position: fixed;"
        class="backstretch">
    <img src="images/backimg.jpg"
         style="position: absolute; margin: 0px; padding: 0px; border: medium none; width: 1519px; height: 1012.67px; max-height: none; max-width: none; z-index: -999999; left: 0px; top: -141.333px;">
</div>
</body>
</html>
