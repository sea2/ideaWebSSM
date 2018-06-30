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
    <link rel="shortcut icon" href="img/p2p_icon.ico" type="image/x-icon"/>
    <script type="text/javascript" src="js/jquery-1.7.1.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport"
          content="width=device-width,minimum-scale=1.0,maximum-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/弹窗.css"/>
    <link rel="stylesheet" href="css/p2p_css.css"/>
    <link href="css/form_demo.css" rel="stylesheet"/>

    <title>网贷平台总览</title>
    <script type="text/javascript">

        $(document).ready(function () {
            $("#search_button").click(function () {
                $("td").each(function (index, element) {
                    var text = $(element).text().toString();
                    var search_text = $("#search_text").val().toString();
                    if (text.indexOf(search_text) == 0) {
                        $(element).parent().css("background-color", "#fafafa");
                        var position = $(element).offset().top - 200;
                        $('html, body').animate({
                            scrollTop: position
                        }, 500);
                    }
                });
            });

            $('#search_text').bind('keypress', function (event) {
                if (event.keyCode == 13) {
                    var is_has = false;
                    $("td").each(function (index, element) {
                        var text = $(element).text().toString();
                        var search_text = $("#search_text").val().toString();
                        if (text.indexOf(search_text) == 0) {
                            $(element).parent().css("background-color", "#fafafa");
                            var position = $(element).offset().top - 200;
                            $('html, body').animate({
                                scrollTop: position
                            }, 500);
                            is_has = true;
                        }
                    });
                    if (is_has) $('#search_text').val("");
                }
            });


            $("#tianyan_rank").click(function () {
                $.get("<%=basePath%>app/order?id=" + id, function (data) {
                    if ("success" == data.result) {
                        window.location.reload();
                    }
                });
            });
        });

        function del(id) {
            $.get("<%=basePath%>app/delPlat?id=" + id, function (data) {
                if ("success" == data.result) {
                    window.location.reload();
                } else {
                    alert("删除失败");
                }
            });
        }

        function order(id, me) {
            $(".order_top").each(function (index, element) {
                $(element).css("background-color", "#09c");
            });
            $(me).css("background-color", "#36c");
            window.location.href = "<%=basePath%>app/order?id=" + id;
        }


        function dailuopan(id, url1, url2) {
            window.open(url1);
            window.open(url2);
            $.get("<%=basePath%>app/dailuopan?id=" + id, function (data) {
                if (200 == data.code) {
                    window.open(data.url);
                }
            });
        }


        //修改分数
        function updateScore(id, me) {
            if ($(me).val() <= 10)
                $.get("<%=basePath%>app/updateScore?id=" + id + '&score=' + $(me).val(), function (data) {
                });
        }

        function updateLove(id, me) {
            if ($(me).val() <= 10)
                $.get("<%=basePath%>app/updateLove?id=" + id + '&score=' + $(me).val(), function (data) {
                });
        }

        function dialogShow(me, remark) {
            $("#div_remark").fadeIn();
            $("#div_remark").text(remark);
        }

        function dialogHide(me, remark) {
            $("#div_remark").fadeOut();

        }

        function updateReta3(id, me) {
            $.get("<%=basePath%>app/updateReta?type=3&id=" + id + '&score=' + $(me).val(), function (data) {
            });
        }

        function updateReta6(id, me) {
            $.get("<%=basePath%>app/updateReta?type=6&id=" + id + '&score=' + $(me).val(), function (data) {
            });
        }


        function addPlat() {//添加平台
            $("#add_dialog_background").css('display', 'block');
        }

        function remark(id, remark, name) {
            $("#textarea_text").text(remark);
            $("#title_dialog").text("自评（" + name + ")");
            $("#record_id").val(id);
            $("#background").css('display', 'block');
        }

        function remarkUpdate() {
            var remark_new = $("#textarea_text").val();
            var id = $("#record_id").val();

            if (remark_new !== "" && remark_new!== null &&  remark_new!== undefined)//如果返回的有内容
            {
                $.get("<%=basePath%>app/updateRemark?id=" + id + '&remark=' + remark_new, function (data) {
                });
            }
            $("#background").css('display', 'none');

        }

        function reloadRefre() {//刷新
            window.location.reload();

        }
        function addPlatInfo() {
            var name = $("input[name='plat_name']").val();
            var score = $("input[name='score']").val();
            if (name.length == 0) {
                alert('请输入平台名称');
            } else if (score.length != 0 && score > 10) {
                alert('最大为10');
            } else {
                $.ajax({
                    url : '<%=basePath%>/app/addPlat?name=' + name
                    + '&score=' + score,
                    type : 'GET',
                    dataType : "jsonp",
                    //传递给请求处理程序，用以获得jsonp回调函数名的参数名(默认为:callback)
                    jsonp : "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                    jsonpCallback : "jsonpCallback",
                    timeout : 1000,
                    cache : false,
                    beforeSend : LoadFunction, //加载执行方法
                    error : erryFunction, //错误执行方法
                    success : succFunction
                    //成功执行方法
                })
                function LoadFunction() {
                }
                function erryFunction() {
                    alert("error");
                }
                function succFunction(tt) {
                    var code = tt.code;
                    if (code == 200) {
                        $("#add_dialog_background").css('display', 'none');
                        window.location.reload();

                    } else
                        alert("error");
                }
            }

        };


    </script>


</head>

<body>
<div class="div_main">
    <!-- 整个表格：ｔａｂｌｅ -->
    <table class="fixedtd">
        <tr>
            <!-- tr：table row：表格的行 -->
            <th class='button_a' onclick="reloadRefre()">总览</th>
            <th class='button_a first_td' onclick="addPlat()">添加平台</th>
            <th class='button_a'><a href='p2p/update_data' class="a_top_button">更新数据</a></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a' colspan="3"><input type='text' id='search_text'
                                                    style='color: #555555; font-size: 20px; width: 130px'/>
                <input
                        type="button" value="搜索" id="search_button" autofocus
                        style='color: #555555; font-size: 20px; width: 80px'/></th>
        </tr>
        <tr id='log'></tr>
        <tr>
            <th class="first_td">序号</th>
            <th class="order_top">平台名称</th>
            <c:choose>
                <c:when test="${order_id==1}">
                    <th class="order_top" onclick="order(1,this)" style="background-color:#36c; ">天眼评级</th>
                </c:when>
                <c:otherwise>
                    <th class="order_top" onclick="order(1,this)">天眼评级</th>
                </c:otherwise>
            </c:choose>
            <c:choose>
                <c:when test="${order_id==2}">
                    <th class="order_top" onclick="order(2,this)" style="background-color:#36c;">融360评级</th>
                </c:when>
                <c:otherwise>
                    <th class="order_top" onclick="order(2,this)">融360评级</th>
                </c:otherwise>
            </c:choose>
            <c:choose>
                <c:when test="${order_id==3}">
                    <th class="order_top" onclick="order(3,this)" style="background-color:#36c;">之家评级</th>
                </c:when>
                <c:otherwise>
                    <th class="order_top" onclick="order(3,this)">之家评级</th>
                </c:otherwise>
            </c:choose>
            <c:choose>
                <c:when test="${order_id==4}">
                    <th class="order_top" onclick="order(4,this)" style="background-color:#36c;">跟投评级</th>
                </c:when>
                <c:otherwise>
                    <th class="order_top" onclick="order(4,this)">跟投评级</th>
                </c:otherwise>
            </c:choose>
            <c:choose>
                <c:when test="${order_id==5}">
                    <th class="order_top" onclick="order(5,this)" style="background-color:#36c;width: 130px">3和6月年化
                    </th>

                </c:when>
                <c:otherwise>
                    <th class="order_top" onclick="order(5,this)" style="width: 130px">3和6月年化</th>
                </c:otherwise>
            </c:choose>
            <c:choose>
                <c:when test="${order_id==6}">
                    <th class="order_top" onclick="order(6,this)" style="background-color:#36c;"> 评分</th>
                </c:when>
                <c:otherwise>
                    <th class="order_top" onclick="order(6,this)"> 评分</th>
                </c:otherwise>
            </c:choose>
            <c:choose>
                <c:when test="${order_id==7}">
                    <th class="order_top" onclick="order(7,this)" style="background-color:#36c;"> 性价比</th>
                </c:when>
                <c:otherwise>
                    <th class="order_top" onclick="order(7,this)"> 性价比</th>
                </c:otherwise>
            </c:choose>

            <th style="width: 100px">参考详情</th>

            <th class="order_top">删除</th>
        </tr>
    </table>


    <table class="table_content">

        <c:if test="${!empty platList }">
            <c:forEach items="${platList}" var="plat" varStatus="status">
                <tr>
                    <td class="first_td">${ status.index + 1} </td>
                    <c:if test="${plat.score>=9}">
                        <td class="td_common" id="${ plat.name}"><a href="${ plat.url}" target="_Blank"
                                                                    onMouseOver="dialogShow(this,'${plat.remark }');"
                                                                    onMouseOut="dialogHide(this,'${plat.remark }')"><span
                                style="color: #FFA838;font-weight:bold; ">${ plat.name}</span></a></td>
                    </c:if>
                    <c:if test="${plat.score<9&&plat.score>=7}">
                        <td class="td_common" id="${ plat.name}"><a href="${ plat.url}" target="_Blank"><span
                                style="color: #AB38FC; font-weight:bold;">${ plat.name}</span></a></td>
                    </c:if>
                    <c:if test="${plat.score<7&&plat.score>=5}">
                        <td class="td_common" id="${ plat.name}"><a href="${ plat.url}" target="_Blank"><span
                                style="color: #39A8FE;font-weight:bold; ">${ plat.name}</span></a></td>
                    </c:if>
                    <c:if test="${plat.score<5&&plat.score>=3}">
                        <td class="td_common" id="${ plat.name}"><a href="${ plat.url}" target="_Blank"><span
                                style="color: #228B22;font-weight:bold; ">${ plat.name}</span></a></td>
                    </c:if>
                    <c:if test="${plat.score<3&&plat.score>=1}">
                        <td class="td_common" id="${ plat.name}"><a href="${ plat.url}" target="_Blank"><span
                                style="color: #C0C0C0;font-weight:bold; ">${ plat.name}</span></a></td>
                    </c:if>
                    <c:if test="${plat.score<=0}">
                        <td class="td_common" id="${ plat.name}"><a href="${ plat.url}" target="_Blank"><span
                                style="text-decoration:line-through;">${ plat.name}</span></a></td>
                    </c:if>

                        <%--//天眼--%>
                    <c:choose>
                        <c:when test="${empty plat.tianyan_level}">
                            <td class="td_common">-</td>
                        </c:when>
                        <c:otherwise>
                            <td class="td_common">${plat.tianyan_level }</td>
                        </c:otherwise>
                    </c:choose>
                        <%--//360--%>
                    <td class="td_common">${plat.rank360 } </td>
                    <c:choose>
                        <c:when test="${plat.zhiji_rank!=0}">
                            <td class="td_common">${plat.zhiji_rank } </td>
                        </c:when>
                        <c:otherwise>
                            <td class="td_common">-</td>
                        </c:otherwise>
                    </c:choose>

                    <c:choose>
                        <c:when test="${plat.gentou_rank==1}">
                            <td class="td_common"><span style="color: #FFA838;font-weight:bold; ">重仓</span></td>
                        </c:when>
                        <c:when test="${plat.gentou_rank==2}">
                            <td class="td_common"><span style="color: #AB38FC;font-weight:bold; ">中仓</span></td>
                        </c:when>
                        <c:when test="${plat.gentou_rank==3}">
                            <td class="td_common"><span style="color: #228B22;font-weight:bold; ">轻仓</span></td>
                        </c:when>
                        <c:otherwise>
                            <td class="td_common">-</td>
                        </c:otherwise>
                    </c:choose>

                    <td style="width: 130px">
                        <c:choose>
                            <c:when test="${plat.rate3_return!=0}">
                                <input id='reta3' type='number' name='score'
                                       onblur="updateReta3('${ plat.id}',this)"
                                       style='color: #555555; font-size: 16px;width: 50px'
                                       value='${ plat.rate3_return}'/>&nbsp;&nbsp;
                            </c:when>
                            <c:otherwise>
                                <input id='reta3' type='number' name='score'
                                       onblur="updateReta3('${ plat.id}',this)"
                                       style='color: #555555; font-size: 16px;width: 50px'
                                />&nbsp;&nbsp;
                            </c:otherwise>
                        </c:choose>
                        <c:choose>
                            <c:when test="${plat.rate6_return!=0}">
                                <input type='number' id='reta6' name='score' onblur="updateReta6('${ plat.id}',this)"
                                       style='color: #555555; font-size: 16px;width: 50px'
                                       value='${ plat.rate6_return}'/>
                            </c:when>
                            <c:otherwise>
                                <input type='number' id='reta6' name='score' onblur="updateReta6('${ plat.id}',this)"
                                       style='color: #555555; font-size: 16px;width: 50px'
                                />
                            </c:otherwise>
                        </c:choose>
                    </td>
                    <td class="td_common"><input type='number' name='score' onblur="updateScore('${ plat.id}',this)"
                                                 onkeypress='return event.keyCode>=48&&event.keyCode<=57'
                                                 ng-pattern='/[^a-zA-Z]/'
                                                 style='color: #555555; font-size: 16px;width: 50px'
                                                 value='${ plat.score}'/></td>
                    <td class="love_core"><input type='number' name='love' onblur="updateLove('${ plat.id}',this)"
                                                 onkeypress='return event.keyCode>=48&&event.keyCode<=57'
                                                 ng-pattern='/[^a-zA-Z]/'
                                                 style='color: #555555; font-size: 16px;width: 50px'
                                                 value='${ plat.is_love}'/></td>
                    <td style="width: 100px">
                        <a href="javascript:dailuopan('${plat.id }','http://www.wdzj.com/dangan/${plat.zhijia_code }','${plat.tianyan_code }');"
                           target="_Blank"
                           style="  text-decoration: underline; ">参考</a>&nbsp;&nbsp;
                        <a href="javascript:remark('${plat.id }','${plat.remark }','${plat.name }');"
                           target="_Blank"
                           style="  text-decoration: underline; ">自评</a>
                    </td>
                    <td style="width: 90px">
                        <button style='color: #555555; font-size: 15px;width: 50px' onclick="del('${ plat.id}')">删除
                        </button>
                    </td>
                </tr>
            </c:forEach>
        </c:if>


        <tr>
            <td colspan="3"><c:if test="${!empty list_size }">
                <div style="margin: 20px 20px 20px 20px">总数量：<span style="color: #F82D2B; ">${list_size}</span></div>
            </c:if></td>
        </tr>
    </table>

</div>


<!-- 弹窗自评， -->
<div id="background" class="back">
    <div id="div1_dialog" class="content">
        <div id="close_top">
            <button id="close-button" >×</button>
            <h2 id="title_dialog">自评</h2>
        </div>
        <div id="div2_dialog">
            <label>
<textarea  style="width:90%;height:200px;margin: 10px" id="textarea_text">
</textarea>
            </label>
            <input type="hidden" id="record_id"/>

            <button id="dialog_button_save"
                    onclick="remarkUpdate()">确定
            </button>
        </div>
    </div>
</div>


<!-- 弹窗添加， -->
<div id="add_dialog_background">
    <div id="add_dialog_main" class="content">
        <div id="add_dialog_top">
            <button id="add_dialog_closen" >×</button>
            <h1>  &nbsp; &nbsp;添加
            </h1>
        </div>
        <form action="" method="get" class="basic-grey" >

            <label>
                <span>平台名称：</span>
                <input id="name" type="text" name="plat_name" placeholder=""/>
            </label>
            <label>
                <span>平台得分（10分制）：</span>
                <input type="number" name="score" onkeypress="return event.keyCode>=48&&event.keyCode<=57" ng-pattern="/[^a-zA-Z]/"/>
            </label>

            <label>
                <span>自评 ：</span>
                <textarea id="message" name="message" placeholder=""></textarea>
            </label>
            <label>
                <span>参考仓位 ：</span><select name="selection">
                <option value="1">重仓</option>
                <option value="2">中仓</option>
                <option value="3">轻仓</option>
            </select>
            </label>
            <label>
                <input type="button" class="button" value="Send" onclick="addPlatInfo()"/>
            </label>
        </form>
    </div>
</div>
<script type="text/javascript">

    $("#open_btn").click(function () {
        $("#background").css('display', 'block');
    });

    $("#add_dialog_closen").click(function () {
        $("#add_dialog_background").css('display', 'none');
    });
    $("#close-button").click(function () {
        $("#background").css('display', 'none');
    });

    //监听点击事件,
    window.onclick = function close(e) {
        if (e.target.id === $("#background").attr("id")) {//点击弹窗蒙版区关闭dialog
            $("#background").css('display', 'none');
        } else if (e.target.id === $("#add_dialog_background").attr("id")) {//点击弹窗蒙版区关闭dialog
            $("#add_dialog_background").css('display', 'none');
        }
    };

</script>
</body>
</html>
