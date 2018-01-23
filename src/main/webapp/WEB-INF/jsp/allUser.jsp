<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    <script type="text/javascript" src="js/jquery-1.7.1.js"></script>
    <title>用户列表</title>
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
	<script type="text/javascript">
	function del(id){
		$.get("<%=basePath%>user/delUser?id=" + id,function(data){
			if("success" == data.result){
				alert("删除成功");
				window.location.reload();
			}else{
				alert("删除失败");
			}
		});
	}
</script>
  </head>
  
  <body style="color:#55555; font-size:50px;">
 <h6><a href="<%=basePath%>user/toAddUser" style="color:#55555; font-size:50px;">添加用户</a></h6> 
	<table border="1" style="color:#55555; font-size:50px;">
		<tbody style="color:#55555; font-size:50px;">
			<tr >
				<th >姓名</th>
				<th >年龄</th>
				<th >操作</th>
			</tr>
			<c:if test="${!empty userList }">
				<c:forEach items="${userList}" var="user">
					<tr>
						<td >${user.userName }</td>
						<td >${user.age }</td>
						<td>
							<a href="<%=basePath%>user/getUser?id=${user.id}" >编辑</a>
							<a href="javascript:del('${user.id }')" >删除</a>
						</td>
					</tr>				
				</c:forEach>
			</c:if>
		</tbody>
	</table>
  </body>
</html>
