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
    <script type="text/javascript" src="js/jquery-1.7.1.js"></script>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport"
          content="width=device-width,minimum-scale=1.0,maximum-scale=1.0">
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

        function updateReta3(id, me) {
            $.get("<%=basePath%>app/updateReta?type=3&id=" + id + '&score=' + $(me).val(), function (data) {
            });
        }

        function updateReta6(id, me) {
            $.get("<%=basePath%>app/updateReta?type=6&id=" + id + '&score=' + $(me).val(), function (data) {
            });
        }

        function remark(id, remark) {
            var remark_new = prompt(remark, remark);//将输入的内容赋给变量 name ，
            //这里需要注意的是，prompt有两个参数，前面是提示的话，后面是当对话框出来后，在对话框里的默认值
            if (remark_new)//如果返回的有内容
            {
                $.get("<%=basePath%>app/updateRemark?id=" + id + '&remark=' + remark_new, function (data) {
                });
            }
        }
    </script>


</head>

<body>
<div style="text-align: center;">
    <!-- 整个表格：ｔａｂｌｅ -->
    <table class="fixedtd" cellspacing="20">
        <thead>
        <tr>
            <!-- tr：table row：表格的行 -->
            <th class='button_a'><a href='p2p/addPlat'>添加平台</a></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a'></th>
            <th class='button_a' colspan="3"><input type='text' id='search_text'
                                                    style='color: #555555; font-size: 20px; width: 120px'/>
                <input
                        type="button" value="搜索" id="search_button"
                        style='color: #555555; font-size: 20px; width: 80px'/></th>
        </tr>
        <tr id='log'></tr>
        </thead>
        <thead>
        <tr>
            <th>序号</th>
            <th>平台名称</th>
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
                    <th class="order_top" onclick="order(5,this)" width="15%" style="background-color:#36c;">3和6月年化
                    </th>

                </c:when>
                <c:otherwise>
                    <th class="order_top" onclick="order(5,this)" width="15%">3和6月年化</th>
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

            <th>参考详情</th>

            <th>删除</th>
        </tr>
        </thead>
    </table>
    <br>
    <table class="table_content">

        <tbody>

        <c:if test="${!empty platList }">
            <c:forEach items="${platList}" var="plat" varStatus="status">
                <tr>
                    <td>${ status.index + 1} </td>
                    <c:if test="${plat.score>=9}">
                        <td id="${ plat.name}"><a href="${ plat.url}" target="_Blank"><span
                                style="color: #FFA838;font-weight:bold; ">${ plat.name}</span></a></td>
                    </c:if>
                    <c:if test="${plat.score<9&&plat.score>=7}">
                        <td id="${ plat.name}"><a href="${ plat.url}" target="_Blank"><span
                                style="color: #AB38FC; font-weight:bold;">${ plat.name}</span></a></td>
                    </c:if>
                    <c:if test="${plat.score<7&&plat.score>=5}">
                        <td id="${ plat.name}"><a href="${ plat.url}" target="_Blank"><span
                                style="color: #39A8FE;font-weight:bold; ">${ plat.name}</span></a></td>
                    </c:if>
                    <c:if test="${plat.score<5&&plat.score>=3}">
                        <td id="${ plat.name}"><a href="${ plat.url}" target="_Blank"><span
                                style="color: #228B22;font-weight:bold; ">${ plat.name}</span></a></td>
                    </c:if>
                    <c:if test="${plat.score<3&&plat.score>=1}">
                        <td id="${ plat.name}"><a href="${ plat.url}" target="_Blank"><span
                                style="color: #C0C0C0;font-weight:bold; ">${ plat.name}</span></a></td>
                    </c:if>
                    <c:if test="${plat.score<=0}">
                        <td id="${ plat.name}"><a href="${ plat.url}" target="_Blank"><span
                                style="text-decoration:line-through;">${ plat.name}</span></a></td>
                    </c:if>

                    <td>${plat.tianyan_level }</td>
                    <td>${plat.rank360 } </td>
                    <c:choose>
                        <c:when test="${plat.zhiji_rank!=0}">
                            <td>${plat.zhiji_rank } </td>
                        </c:when>
                        <c:otherwise>
                            <td>-</td>
                        </c:otherwise>
                    </c:choose>

                    <c:choose>
                        <c:when test="${plat.gentou_rank==1}">
                            <td><span style="color: #FFA838;font-weight:bold; ">重仓</span></td>
                        </c:when>
                        <c:when test="${plat.gentou_rank==2}">
                            <td><span style="color: #AB38FC;font-weight:bold; ">中仓</span></td>
                        </c:when>
                        <c:when test="${plat.gentou_rank==3}">
                            <td><span style="color: #228B22;font-weight:bold; ">轻仓</span></td>
                        </c:when>
                        <c:otherwise>
                            <td></td>
                        </c:otherwise>
                    </c:choose>

                    <td width="15%"><input id='reta3' type='number' name='score'
                                           onblur="updateReta3('${ plat.id}',this)"
                                           style='color: #555555; font-size: 14px;width: 30px'
                                           value='${ plat.rate3_return}'/>%&nbsp;&nbsp;
                        <input type='number' id='reta6' name='score' onblur="updateReta6('${ plat.id}',this)"
                               style='color: #555555; font-size: 14px;width: 30px'
                               value='${ plat.rate6_return}'/>%
                    </td>
                    <td><input type='number' name='score' onblur="updateScore('${ plat.id}',this)"
                               onkeypress='return event.keyCode>=48&&event.keyCode<=57' ng-pattern='/[^a-zA-Z]/'
                               style='color: #555555; font-size: 14px;width: 30px'
                               value='${ plat.score}'/></td>
                    <td class="love_core"><input type='number' name='love' onblur="updateLove('${ plat.id}',this)"
                                                 onkeypress='return event.keyCode>=48&&event.keyCode<=57'
                                                 ng-pattern='/[^a-zA-Z]/'
                                                 style='color: #555555; font-size: 14px;width: 30px'
                                                 value='${ plat.is_love}'/></td>
                    <td>
                        <a href="javascript:dailuopan('${plat.id }','http://www.wdzj.com/dangan/${plat.zhijia_code }','${plat.tianyan_code }');"
                           target="_Blank"
                           style="  text-decoration: underline; ">参考</a>&nbsp;&nbsp;
                        <a href="javascript:remark('${plat.id }','${plat.remark }');"
                           target="_Blank"
                           style="  text-decoration: underline; ">自评</a>
                    </td>
                    <td>
                        <button style='color: #555555; font-size: 15px;width: 50px' onclick="del('${ plat.id}')">删除
                        </button>
                    </td>
                </tr>
            </c:forEach>
        </c:if>
        </tbody>
    </table>

</div>
</body>
</html>
