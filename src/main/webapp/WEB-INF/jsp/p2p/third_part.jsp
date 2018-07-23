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
    <title>第三方评级问题</title>

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
        <h3 class="panel-title text-center">第三方评级，总数：${list_size}</h3>
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
                        <h4 class="modal-title" id="myModalLabel">编辑</h4>
                    </div>
                    <div class="modal-body">
                        <input id="url_id" name="url" type="text" class="form-control" placeholder="网址"
                               required="required"/>

                        <input id="edit_id" name="id" type="hidden"/>
                        <label style="margin-top: 20px">
<textarea id="question_id" class="form-control" style="width: 500px;height: 300px">
</textarea>
                        </label>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary"
                                onclick="saveinfo();">保存
                        </button>
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

    function edit(id, name, url, question) {
        console.log(id + "," + name + "," + url + "," + question);
        $("#edit_id").val(id);
        $("#url_id").val(url);
        $("#myModalLabel").text("编辑-" + name);

        $("#question_id").val(question);
        $("#edit_user_modal").modal("show");
    }

    function saveinfo() {
        var id = $("#edit_id").val();
        var url = $("#url_id").val();
        var question = $("#question_id").val();
        $("#edit_user_modal").modal("hide");
        $.get("p2p/third_update?id=" + id + "&url=" + url + "&question=" + question, function (data, status) {
            window.location.reload();
        });

    }

    function del(code) {
        $(".panel-title").text(code);
    }

    var queryUrl = "<%=basePath%>p2p/part_list";

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

                onSort: function (name, order) {//排序事件触发
                    console.log(name + "--" + order);
                },
                responseHandler: function (res) {
                    //在ajax获取到数据，渲染表格之前，修改数据源
                    return res;
                },

                columns: [
                    {
                        visible: false,
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
                        field: 'name', // 返回json数据中的name
                        title: '编号', // 表格表头显示文字
                        align: 'center' // 左右居中
                        // valign: 'middle', // 上下居中

                    }, {
                        field: 'name_third',
                        title: '第三方评级名称',
                        formatter: function (value, row, index) { // 单元格格式化函数
                            return "<a class='main_font' href='" + row.url + "'  target='_Blank'>" + value + "</a>";
                        },
                        align: 'center',
                        valign: 'middle'
                    }, {
                        field: 'question',
                        title: '问题',
                        width: 360, // 定义列的宽度，单位为像素px
                        align: 'center',
                        valign: 'middle',
                        formatter: function (value, row, index) { // 单元格格式化函数
                            if (value != null) {
                                var strHtml = "";
                                var array = value.split("**");
                                if (array != null && array.length > 0) {
                                    for (var i = 0; i < array.length; i++) {
                                        strHtml = strHtml + "<p>" + array[i] + "</p>";
                                    }
                                }
                                return strHtml;
                            }
                            else return "";
                        }
                    },
                    {
                        title: "操作",
                        align:
                            'center',
                        valign:
                            'middle',
                        width:
                            160, // 定义列的宽度，单位为像素px
                        formatter:

                            function (value, row, index) {
                                var third_id = row.id + "";
                                var third_name = row.name_third + "";
                                var url = row.url + "";
                                var question = row.question + "";
                                return "<a class=\"edit ml10\" style=\"color:black;\" href=\"javascript:edit('" + third_id + "','" + third_name + "','" + url + "','" + question + "')\" title=\"编辑\">" +
                                    "<span class=\"glyphicon glyphicon-edit\"></span>" +
                                    "</a>&emsp;" +
                                    "<a class=\"remove ml10\" style=\"color:black;\" href=\"javascript:del('" + third_id + "')\" title=\"删除\">" +
                                    "<i class=\"glyphicon glyphicon-remove\"></i></a>";
                            }
                    }
                    ,
                    {
                        title: '操作',
                        field:
                            'id',
                        align:
                            'center',
                        formatter:

                            function (value, row, index) {
                                var e = '<a href="#" mce_href="#" onclick="edit1(\''
                                    + row.id + '\')">编辑</a> ';
                                var d = '<a href="#" mce_href="#" onclick="del1(\''
                                    + row.id + '\')">删除</a> ';
                                return e + d;
                            }

                    }
                ]

            })
    ;
</script>
</html>