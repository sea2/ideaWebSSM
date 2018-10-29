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
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"/>
    <title>基金总览</title>

    <link href="<%=basePath%>img/icon_fund_log.ico" type="image/x-icon" rel="shortcut icon"/>
    <link href="<%=basePath%>static/bootstrap/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath%>static/bootstrap-table/bootstrap-table.min.css" rel="stylesheet">
    <link href="<%=basePath%>static/bootstrap-datetimepicker.min.css" rel="stylesheet">
    <link href="<%=basePath%>static/bootstrap-editable.css" rel="stylesheet">
    <link href="<%=basePath%>css/fund_main.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/弹窗.css"/>

    <!---行内编辑使用的 1.1.5-->
    <script src="<%=basePath%>static/jquery.min.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/bootstrap/bootstrap.min.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/bootstrap-table-editable.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/bootstrap-table/bootstrap-table.min.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/bootstrap-table/bootstrap-table-export.min.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/bootstrap-table/bootstrap-table-zh-CN.min.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/tableExport.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/echarts.min.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/bootbox.min.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/moment.min.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/moment.zh-cn.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/bootstrap-datetimepicker.min.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/jquery.flot.js" type="text/javascript"></script>

</head>

<body>


<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title text-center">基金总览</h3>
    </div>
    <DIV id="stock_all_info"></DIV>

    <div class="panel-body">

        <div id="toolbar" class="btn-group">
            <button id="btn_add" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
            </button>
            <button id="btn_compare" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>对比
            </button>
            <button id="btn_mark" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>待办事务
            </button>
            <button id="btn_delete" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
            </button>
        </div>

        <table id="table"></table>


        <div class="modal fade" id="edit_user_modal" tabindex="-1" role="dialog"
             aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"
                                aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">编辑当前资料</h4>
                    </div>
                    <div class="modal-body">
                        <input id="user_code" name="code" type="text" class="form-control" value="" placeholder="基金code"
                               pattern="" required="required"/>
                        <br/>
                        <input id="user_money" name="money" type="text" class="form-control" value="" placeholder="持有金额"
                               pattern="" required="required"/>
                        <br/>
                        <input id="user_price" name="price" type="text" class="form-control" value=""
                               placeholder="持有收益率：例如-17.51"
                               pattern="" required="required"/>
                        <br/>

                        <input id="user_id" name="id" type="hidden"/>
                        <input id="dialog_type" name="type" type="hidden"/>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button id="save_user_info" type="button" class="btn btn-primary">保存
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>

<!-- 弹窗自评， -->
<div id="background" class="back">
    <div id="div1_dialog" class="content">
        <div id="close_top">
            <button id="close-button">×</button>
            <h3 id="title_dialog">自评</h3>
        </div>
        <div id="div3_dialog">
            <div style="float:left;width: 450px;text-align:center;margin-top: 20px">
                <span style="font-size: 2rem">近三个月</span></div>
            <div style="float:left;width: 400px;text-align:center;;margin-top: 20px">
                <span style="font-size: 2rem">近一年</span></div>
            <div style="clear: both"></div>
            <div id="placeholder"
                 style="width:350px;    height:150px; float: left; text-align:center;line-height:40px;margin-left: 60px">
            </div>
            <div id="placeholder2"
                 style="width:350px;  float: left;  height:150px; text-align:center;line-height:40px;margin-left: 100px"></div>

            <input type="hidden" id="record_id"/>

        </div>
    </div>
</div>

<!-- 相同持仓， -->
<div id="background2" class="background">
    <div class="dialog_content">
        <div class="close_top_class">
            <button id="close-button2" class="close-button">×</button>
            <h3 id="title_dialog2">持仓</h3>
        </div>
        <div id="div3_dialog2" class="div3_dialog">

        </div>

    </div>
</div>

<!-- 对比 -->
<div id="background3" class="background">
    <div class="dialog_content">
        <div class="close_top_class">
            <button id="close-button3" class="close-button">×</button>
            <h3 id="title_dialog3">对比</h3>
        </div>
        <div id="div3_dialog3" class="div3_dialog_compare">
            <div style="float:left;width: 450px;text-align:center;margin-top: 20px">
                <div id="compare_info_1" style="text-align: left"></div>
                <br/>
                <span style="font-size: 1.5rem;margin-top: 40px">近三个月</span>
                <div id="placeholder_compare1"
                     style="width:350px;    height:150px;  text-align:center;line-height:40px;margin-left: 60px">
                </div>
                <span style="font-size: 1.5rem">近一年</span>
                <div id="placeholder2_compare1"
                     style="width:350px;  height:150px; text-align:center;line-height:40px;margin-left: 60px"></div>
            </div>
            <div style="float:left;width: 450px;text-align:center;;margin-top: 20px">
                <div id="compare_info_2" style="text-align: left"></div>
                <br/>
                <span style="font-size: 1.5rem;margin-top: 40px">近三个月</span>
                <div id="placeholder_compare2"
                     style="width:350px;    height:150px;  text-align:center;line-height:40px;margin-left: 60px">
                </div>
                <span style="font-size: 1.5rem">近一年</span>
                <div id="placeholder2_compare2"
                     style="width:350px;  height:150px; text-align:center;line-height:40px;margin-left: 60px"></div>
            </div>
        </div>
    </div>
</div>


<script type="text/javascript">
    //刷新
    /* $('#table1').bootstrapTable('refresh');*/

    $("#superBtn").click(function () {
        $.get("getPageInfo?limit=5&offset=0", function (data, status) {
            alert(status);
            alert(data.userList[0].name);
        });
    });
    $("#close-button").click(function () {
        $("#background").css('display', 'none');
    });
    $("#close-button2").click(function () {
        $("#background2").css('display', 'none');
    });
    $("#close-button3").click(function () {
        $("#background3").css('display', 'none');
    });

    //新增
    $("#btn_add").click(function () {
        $("#user_code").show();
        $("#myModalLabel").text("新增");
        $("#dialog_type").val(1);
        $("#edit_user_modal").modal("show");
    });

    $("#btn_edit").click(function () {
        layer.open({
            type: 1,
            skin: 'layui-layer-demo', //样式类名
            content: '测试'
        });
    });

    $("#btn_mark").click(function () {
        window.location.href = "<%=basePath%>mark/getList?type=" + 1;
    });
    //对比
    $("#btn_compare").click(function () {
        var array = $("#table").bootstrapTable('getSelections');
        if (array != null && array.length > 1) {
            $("#title_dialog3").html("对比");
            $("#background3").css('display', 'block');
            $.get("<%=basePath%>fund/fund_compare?code=" + array[0].fcode + "," + array[1].fcode, function (data, status) {
                var info = data[0];
                $("#compare_info_1").html("&emsp;&emsp;<span class='main_font'>" + info.name + info.code + "</span>  <br/><br/>" + info.hold_stocks);
                $.plot($("#placeholder_compare1"), [{
                    lineWidth: 0.5,
                    shadowSize: 0,
                    data: info.list,
                    highlightColor: "#808080",
                    lines: {show: true}
                }], {
                    grid: {
                        lineWidth: 0.5,
                        borderWidth: 0.5//边框宽度
                    },
                    xaxis: {
                        ticks: !1                            // dates
                    },
                    colors: ["#0c64d8"],
                    lineWidth: 0.5

                });
                $.plot($("#placeholder2_compare1"), [{
                    lineWidth: 0.5,
                    shadowSize: 0,
                    data: info.list2,
                    highlightColor: "#808080",
                    lines: {show: true}
                }], {
                    grid: {
                        lineWidth: 0.5,
                        borderWidth: 0.5//边框宽度
                    },
                    xaxis: {
                        ticks: !1                            // dates
                    },
                    colors: ["#0c64d8"],
                    lineWidth: 0.5

                });
                var info2 = data[1];
                $("#compare_info_2").html("&emsp;&emsp;<span class='main_font'>" + info2.name + info2.code + "</span>  <br/><br/>" + info2.hold_stocks);
                $.plot($("#placeholder_compare2"), [{
                    lineWidth: 0.5,
                    shadowSize: 0,
                    data: info2.list,
                    highlightColor: "#808080",
                    lines: {show: true}
                }], {
                    grid: {
                        lineWidth: 0.5,
                        borderWidth: 0.5//边框宽度
                    },
                    xaxis: {
                        ticks: !1                            // dates
                    },
                    colors: ["#0c64d8"],
                    lineWidth: 0.5

                });
                $.plot($("#placeholder2_compare2"), [{
                    lineWidth: 0.5,
                    shadowSize: 0,
                    data: info2.list2,
                    highlightColor: "#808080",
                    lines: {show: true}
                }], {
                    grid: {
                        lineWidth: 0.5,
                        borderWidth: 0.5//边框宽度
                    },
                    xaxis: {
                        ticks: !1                            // dates
                    },
                    colors: ["#0c64d8"],
                    lineWidth: 0.5

                });

            });

        }
    });

    $(document).ready(function () {
        $("button[name='toggle']").height(20);
        $("button[name='refresh']").height(20);
        $("#save_user_info").click(function () {
            var type = $("#dialog_type").val();
            if (type === '2') {//编辑
                $.post('fund/saveMyFund', {
                    "money": $("#user_money").val(),
                    "code": $("#user_id").val(),
                    "score": $("#user_price").val()
                }, function () {
                    $("#edit_user_modal").modal('hide');
                    $("#user_id").val('');
                    $("#user_money").val('');
                    $("#user_price").val('');
                    refreshTable("<%=basePath%>fund/getListInfo");
                });
            }
            else if (type === '1') {//新增
                var name = $("#user_code").val();
                var score = $("#user_price").val();
                var money = $("#user_money").val();
                $("#edit_user_modal").modal('hide');
                if (name.length == 0) {
                    alert('请输入基金code');
                } else {
                    $.ajax({
                        url: '<%=basePath%>fund/saveMyFund?code=' + name
                        + '&score=' + score + '&money=' + money,
                        type: 'GET',
                        dataType: "jsonp",
                        //传递给请求处理程序，用以获得jsonp回调函数名的参数名(默认为:callback)
                        jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
                        jsonpCallback: "jsonpCallback",
                        timeout: 10000,
                        cache: false,
                        beforeSend: LoadFunction2, //加载执行方法
                        error: erryFunction2, //错误执行方法
                        success: succFunction2
                        //成功执行方法
                    });

                    function LoadFunction2() {
                    }

                    function erryFunction2() {

                    }

                    function succFunction2(tt) {

                        $("#user_code").val("");
                        $("#user_price").val("");
                        $("#user_money").val("");
                        var code = tt.code;
                        refreshTable("<%=basePath%>fund/getListInfo");
                    }
                }
            }
        });
    });

    //定时刷新市场行情
    function refreshInfo() {
        $.ajax({
            url: 'http://nufm2.dfcfw.com/EM_Finance2014NumericApplication/JS.aspx?type=CT&cmd=0000011,3990012,3990062,HSI5&sty=E1FDTA&st=z&sr=&p=&ps=&cb=callback&js=&token=afb2abbc6e10eb3682146dfec6a6d74c',
            type: 'GET',
            dataType: "jsonp",
            //传递给请求处理程序，用以获得jsonp回调函数名的参数名(默认为:callback)
            jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
            jsonpCallback: "callback",
            timeout: 1000,
            cache: false,
            beforeSend: LoadFunction, //加载执行方法
            error: erryFunction, //错误执行方法
            success: succFunction
            //成功执行方法
        });

        function LoadFunction() {
        }

        function erryFunction() {
        }

        function succFunction(tt) {
            var all_show_info = "<br/>";
            for (var i = 0; i < tt.length - 1; i++) {
                var str = tt[i];
                var array = str.split(",");
                var nameInfo = "";
                if (i === 0) nameInfo = "上证指数";
                else if (i === 1) nameInfo = "深证指数";
                else if (i === 2) nameInfo = "创业板指";
                var htmlOne;
                if (array[4] > 0)
                    htmlOne = "&emsp;&emsp;<span class='main_font'>" + nameInfo + "</span>&nbsp;&nbsp;<span class='red_font'>" + array[3] + "&nbsp;&nbsp;" + array[4] + "&nbsp;&nbsp;" + array[5] + "</span>";
                else htmlOne = "&emsp;&emsp;<span class='main_font'>" + nameInfo + "</span>&nbsp;&nbsp;<span class='green_font'>" + array[3] + "&nbsp;&nbsp;" + array[4] + "&nbsp;&nbsp;" + array[5] + "</span>";
                all_show_info = all_show_info + "" + htmlOne;
            }
            $("#stock_all_info").html(all_show_info);
        }
    }

    //重复执行某个方法
    var t1 = window.setInterval(refreshInfo, 5000);

    //去掉定时器的方法     window.clearInterval(t1);

    function edit(code, shortname) {
        $("#user_code").hide();
        $("#dialog_type").val(2);
        $("#myModalLabel").text("编辑：" + shortname);
        $("#user_id").val(code);
        $("#edit_user_modal").modal("show");
    }

    //删除基金
    function del(code) {
        $.get("<%=basePath%>fund/del?code=" + code, function (data, status) {
            refreshTable("<%=basePath%>fund/getListInfo");
        });
    }


    // 走势图
    function showGotoLine(code, param, shortname) {
        $("#title_dialog").text(shortname);
        $("#background").css('display', 'block');
        $.get("<%=basePath%>fund/fund_goto_line?code=" + code + "&param=" + param, function (data, status) {
            var datass = data.list;
            var dates = data.dates;
            $.plot($("#placeholder"), [{
                lineWidth: 0.5,
                shadowSize: 0,
                data: datass,
                highlightColor: "#808080",
                lines: {show: true}
            }], {
                grid: {
                    lineWidth: 0.5,
                    borderWidth: 0.5//边框宽度
                },
                xaxis:
                    {
                        ticks: !1
                        // dates
                    },

                colors: ["#0c64d8"],
                lineWidth: 0.5

            });
        });
        $.get("<%=basePath%>fund/fund_goto_line?code=" + code + "&param=n", function (data, status) {
            var datass = data.list;
            var dates = data.dates;
            $.plot($("#placeholder2"), [{
                lineWidth: 0.5,
                shadowSize: 0,
                data: datass,
                highlightColor: "#808080",
                lines: {show: true}
            }], {
                grid: {
                    lineWidth: 0.5,
                    borderWidth: 0.5//边框宽度
                },
                xaxis:
                    {
                        ticks: !1
                        // dates
                    },

                colors: ["#0c64d8"],
                lineWidth: 0.5

            });
        });

    }

    // 类似
    function showSame(code, shortname) {
        $("#title_dialog2").text(shortname + "-持仓相同");
        $("#background2").css('display', 'block');
        $.get("<%=basePath%>fund/fund_same?code=" + code, function (data, status) {
            var html = "";

            for (var i = 0; i < data.length; i++) {
                var info = data[i];
                html = html + "<br/>" + info[0] + " &emsp;数量：" + info[1] + "&emsp;" + info[2] + "<br/>";
            }
            $("#div3_dialog2").html(html);
        });
    }


    function refreshTable(url) {
        var opt = {
            url: url,
            silent: true,
            query: {
                type: 1,
                level: 2
            }
        };
        $("#table").bootstrapTable('refresh', opt);
    }


    $("#table")
        .bootstrapTable(
            {
                url: "<%=basePath%>fund/getListInfo",    //数据请求路径
                clickToSelect: true,  //点击表格项即可选择
                dataType: "json",   //后端数据传递类型
                pageSize: 100,
                pageList: [10, 20],
                toolbar: "#toolbar",
                sortable: true,                     //是否启用排序
                sortOrder: "asc",                   //排序方式
                sidePagination: "client",           //分页方式：client客户端分页，server服务端分页（*）
                //  contentType : "application/x-www-form-urlencoded",
                showColumns: true,                  //是否显示所有的列（选择显示的列）
                showRefresh: true,                  //是否显示刷新按钮
                showToggle: true,                   //是否显示详细视图和列表视图的切换按钮

                method: 'get',      //请求类型
                dataField: "data",  //很重要，这是后端返回的实体数据！

                pagination: true,
                search: true,
                //是否显示详细视图和列表视图的切换按钮
                queryParams: function (params) {//自定义参数，这里的参数是传给后台的，我这是是分页用的
                    return {//这里的params是table提供的
                        offset: params.offset,//从数据库第几条记录开始
                        limit: params.limit,   //找多少条
                        sortOrder: params.order,//排序
                        sortName: params.sort,//排序字段
                        search: params.search//搜索
                    };
                },
                rowStyle: function (row, index) { //每行的颜色值
                    //这里有5个取值代表5中颜色['active', 'success', 'info', 'warning', 'danger'];
                    var strclass = "";
                    if (row.income > 0) {
                        strclass = 'warning';//还有一个active
                    }
                    else {
                        strclass = 'active';
                    }
                    return {classes: strclass}
                },
                onSort: function (name, order) {//排序事件触发
                    console.log(name + "--" + order);
                },
                responseHandler: function (res) {
                    //在ajax获取到数据，渲染表格之前，修改数据源
                    return res;
                },

                columns: [
                    {
                        valign: 'middle', // 上下居中
                        checkbox: true, // 显示一个勾选框
                        align: 'center' // 居中显示
                    },
                    {
                        visible: false,
                        formatter: function (value, row, index) {
                            return '<span  color="#4d4d4d">' + (index + 1) + '</span>';
                        }
                    },
                    {
                        visible: false,
                        field: 'fcode', // 返回json数据中的name
                        title: '编号', // 表格表头显示文字
                        align: 'center' // 左右居中
                        // valign: 'middle', // 上下居中

                    },

                    {
                        sortable: true,
                        field: 'shortname',
                        title: '名称',
                        formatter: function (value, row, index) { // 单元格格式化函数
                            var array = value.split("**");
                            if (array != null && array.length === 2)
                                return "<span class='main_font'>" + array[0] + "</span><br/><span class='two_font'>" + array[1] + "</span>";
                            else return "";
                        },
                        align: 'center',
                        valign: 'middle'
                    },
                    {
                        sortable: true,
                        field: 'fund_type',
                        title: '类型及讲解',
                        width:400,
                        align: 'center',
                        valign: 'middle'
                    },

                    {
                        field: 'gszzl',
                        title: '最新估值',
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: function (value, row, index) { // 单元格格式化函数
                            if (value > 0)
                                return "<span class='main_font'>" + row.gsz + "</span><br/><span class='red_font'>+" + value + "%</span>";
                            else return "<span class='main_font'>" + row.gsz + "</span><br/><span class='green_font'>" + value + "%</span>";
                        }
                    }, {
                        field: 'navChgrt',
                        title: '昨日净值',
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: function (value, row, index) { // 单元格格式化函数
                            if (value > 0)
                                return "<span class='main_font'>" + row.nav + "</span><br/><span class='red_font'>+" + value + "%</span>";
                            else return "<span class='main_font'>" + row.nav + "</span><br/><span class='green_font'>" + value + "%</span>";
                        }
                    }, {
                        field: 'money_old',
                        title: '买入状况',
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: function (value, row, index) { // 单元格格式化函数
                            if (value > 0)
                                return "<span class='main_font'>买入成本：" + row.fund_buy_price + "</span><br/><span class='main_font'>买入金额：" + row.money_old + "元</span>";
                            else return "<span class='main_font'>买入成本：" + row.fund_buy_price + "</span><br/><span class='main_font'>买入金额：" + row.money_old + "元</span>";
                        }
                    }, {
                        field: 'money',
                        title: '持有本金',
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: function (value, row, index) { // 单元格格式化函数
                            return "<span class='main_font'>" + value + "元</span>";
                        }
                    },
                    {
                        field: 'rate',
                        title: '持有收益',
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: function (value, row, index) { // 单元格格式化函数
                            if (value > 0)
                                return "<span class='red_font'>" + value + "%</span><br/><span class='red_font'>" + row.income + "元</span>";
                            else return "<span class='green_font'>" + value + "%</span><br/><span class='green_font'>" + row.income + "元</span>";
                        }
                    },
                    {
                        title: "操作",
                        align: 'center',
                        valign: 'middle',
                        width: 160, // 定义列的宽度，单位为像素px
                        formatter: function (value, row, index) {
                            var code = row.fcode + "";
                            var shortname = row.shortname + "";
                            return "<a class=\"edit ml10\" style=\"color:black;\" href=\"javascript:edit('" + code + "','" + shortname + "')\" title=\"编辑\">" +
                                "<span class=\"glyphicon glyphicon-edit\"></span>" +
                                "</a>&emsp;" +
                                "<a class=\"edit ml10\" style=\"color:black;\" href=\"javascript:showGotoLine('" + code + "','3y','" + shortname + "')\" title=\"走势图\">" +
                                "<span class=\"glyphicon glyphicon-cloud\"></span>" +
                                "</a>&emsp;" +
                                "<a class=\"edit ml10\" style=\"color:black;\" href=\"javascript:showSame('" + code + "','" + shortname + "')\" title=\"类似基金\">" +
                                "<span class=\"glyphicon glyphicon-magnet\"></span>" +
                                "</a>&emsp;" +
                                "<a class=\"remove ml10\" style=\"color:black;\" href=\"javascript:del('" + code + "')\" title=\"删除\">" +
                                "<i class=\"glyphicon glyphicon-remove\"></i></a>";
                        }
                    }]

            });
</script>
</body>
</html>