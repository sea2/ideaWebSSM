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

    <!---行内编辑使用的 1.1.5-->
    <script src="<%=basePath%>static/jquery.min.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/bootstrap/bootstrap.min.js" type="text/javascript"></script>
    <script src="<%=basePath%>static/bootstrap-editable.js" type="text/javascript"></script>
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


</head>

<body>


<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title text-center">基金总览</h3>
    </div>
    <div class="panel-body">

        <div id="toolbar" class="btn-group">
            <button id="btn_add" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
            </button>
            <button id="btn_edit" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
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
                        <h4 class="modal-title" id="myModalLabel">编辑当前用户的资料</h4>
                    </div>
                    <div class="modal-body">
                        <input id="user_phone" name="phone" type="text" class="form-control" value="" pattern="" required="required" />
                        <input id="user_id" name="id" type="hidden" />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary"
                                onclick="save_user();">保存</button>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>


</body>


<script type="text/javascript">
    //刷新
    /* $('#table1').bootstrapTable('refresh');*/

    $("#superBtn").click(function () {
        $.get("getPageInfo?limit=5&offset=0", function (data, status) {
            alert(status);
            alert(data.userList[0].name);
        });
    });
    $("#btn_edit").click(function () {
        layer.open({
            type: 1,
            skin: 'layui-layer-demo', //样式类名

            content: '测试'
        });
    });

    $(document).ready(function () {
        $("button[name='toggle']").height(20);
        $("button[name='refresh']").height(20);
    });

    function edit(code) {
        $("#user_phone").val(code);
        $("#user_id").val(code);
        $("#edit_user_modal").modal("show");
    }

    function del(code) {
        $(".panel-title").text(code);
    }

    var queryUrl = "<%=basePath%>/fund/getListInfo";

    $("#table")
        .bootstrapTable(
            {
                url: queryUrl,    //数据请求路径
                clickToSelect: true,  //点击表格项即可选择
                dataType: "json",   //后端数据传递类型
                pageSize: 10,
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

                    }, {
                        field: 'shortname',
                        title: '名称',
                        formatter: function (value, row, index) { // 单元格格式化函数
                            var array = value.split("**");
                            if (array != null && array.length === 2)
                                return "<span class='main_font'>" + array[0] + "</span><p class='two_font'>" + array[1] + "</p>";
                            else return "";
                        },
                        align: 'center'
                        // valign: 'middle'
                    }, {
                        field: 'gsz',
                        title: '最新估值',
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: function (value, row, index) { // 单元格格式化函数
                            var array = value.split("**");
                            if (array != null && array.length === 2) {
                                if (array[1] > 0)
                                    return "<span class='main_font'>" + array[0] + "</span><p class='red_font'>+" + array[1] + "</p>";
                                else return "<span class='main_font'>" + array[0] + "</span><p class='green_font'>" + array[1] + "</p>";

                            }
                            else return "";
                        }
                    }, {
                        field: 'nav',
                        title: '净值',
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: function (value, row, index) { // 单元格格式化函数
                            var array = value.split("**");
                            if (array != null && array.length === 2) {
                                if (array[1] > 0)
                                    return "<span class='main_font'>" + array[0] + "</span><p class='red_font'>+" + array[1] + "%</p>";
                                else return "<span class='main_font'>" + array[0] + "</span><p class='green_font'>" + array[1] + "%</p>";

                            }
                            else return "";
                        }
                    }, {
                        field: 'money',
                        title: '持有金额',
                        align: 'center',
                        valign: 'middle',
                        sortable: true

                    }, {
                        field: 'income',
                        title: '收入',
                        align: 'center',
                        valign: 'middle',
                        sortable: true,
                        formatter: function (value, row, index) { // 单元格格式化函数
                            if (value > 0)
                                return "<span class='red_font'>" + value + "</span>";
                            else return "<span class='green_font'>" + value + "</span>";
                        }
                    }, {
                        title: "操作",
                        align: 'center',
                        valign: 'middle',
                        width: 160, // 定义列的宽度，单位为像素px
                        formatter: function (value, row, index) {
                            var code = row.fcode + "";
                            return  "<a class=\"edit ml10\" style=\"color:black;\" href=\"javascript:edit('"+code+"')\" title=\"编辑\">"+
                                "<span class=\"glyphicon glyphicon-edit\"></span>"+
                                    "</a>&emsp;"+
                                    "<a class=\"remove ml10\" style=\"color:black;\" href=\"javascript:del('"+code+"')\" title=\"删除\">"+
                                    "<i class=\"glyphicon glyphicon-remove\"></i></a>"                                ;
                        }
                    },
                    {
                        title: '操作',
                        field: 'id',
                        align: 'center',
                        formatter: function (value, row, index) {
                            var e = '<a href="#" mce_href="#" onclick="edit(\''
                                + row.id + '\')">编辑</a> ';
                            var d = '<a href="#" mce_href="#" onclick="del(\''
                                + row.id + '\')">删除</a> ';
                            return e + d;
                        }

                    }]

            });
</script>
</html>