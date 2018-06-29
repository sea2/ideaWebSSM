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
    <link rel="stylesheet" type="text/css" href="css/弹窗.css">
    <link rel="stylesheet" href="css/p2p_css.css">
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

        function remark(id, remark) {
            $("#textarea_text").text(remark);
            $("#record_id").val(id);
            $("#background").css('display', 'block');
        }

        function remarkUpdate() {
            var remark_new = $("#textarea_text").val();
            var id = $("#record_id").val(id);
            if (remark_new)//如果返回的有内容
            {
                $.get("<%=basePath%>app/updateRemark?id=" + id + '&remark=' + remark_new, function (data) {
                });
            }
        }
    </script>


</head>

<body>
<div class="div_main">
    <!-- 整个表格：ｔａｂｌｅ -->
    <table class="fixedtd">
        <tr>
            <!-- tr：table row：表格的行 -->
            <th class='button_a'><a href='p2p/getList' class="a_top_button">总览</a></th>
            <th class='button_a first_td'><a class="a_top_button" href='p2p/addPlat'>添加平台</a></th>
            <th class='button_a'><a href='p2p/update_data' class="a_top_button">更新数据</a></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a' colspan="3"><input type='text' id='search_text'
                                                    style='color: #555555; font-size: 20px; width: 130px'/>
                <input
                        type="button" value="搜索" id="search_button"
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
                        <a href="javascript:remark('${plat.id }','${plat.remark }');"
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

<button id="open_btn" class="btn">弹窗</button>

<!-- 弹窗内容开始 -->
<div id="background" class="back">
    <div id="div1" class="content">
        <div id="close">
            <span id="close-button">×</span>
            <h2>弹窗头部</h2>
        </div>
        <div id="div2">
            <h3>弹窗标题</h3>
            <label>
<textarea rows="3" cols="20" id="textarea_text">
在w3school，你可以找到你所需要的所有的网站建设教程。
</textarea>
            </label>
        <h3 id="foot">底部内容</h3>
        <input type="hidden" id="record_id"/>

        <button style='color: #555555; font-size: 15px;width: 50px' onclick="remarkUpdate()">保存
        </button>
    </div>
</div>


<script type="text/javascript">

    $("#open_btn").click(function () {
        $("#background").css('display', 'block');
    });

    $("#close-button").click(function () {
        $("#background").css('display', 'none');
    });

    //监听点击事件
    window.onclick = function close(e) {
        if (e.target.id === $("#background").attr("id")) {
            $("#background").css('display', 'none');
        }
    };

</script>
</body>
</html>
