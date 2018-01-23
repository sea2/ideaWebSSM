<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<!DOCTYPE html>
<html>
<head>
<base href="<%=basePath%>"></base>
<title>Home</title>
<!-- for-mobile-apps -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="" />
<script type="application/x-javascript">
	
	 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); } 

</script>
<!-- //for-mobile-apps -->
<!-- js -->
<script src="js/jquery-1.11.1.min.js"></script>
<!-- //js -->
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />

</head>
<body>
	<div class="main">
		<div class="w3l_main_grid">
			<div class="w3l_main_grid1">
				<div class="w3l_main_grid1_left">
					<img src="images/star.png" alt=" " class="img-responsive" />
				</div>
				<div class="w3l_main_grid1_right">
					<div class="menu">
						<span class="menu-icon"> <a href="#"> <i></i> <i></i> <i></i>
						</a>
						</span>
						<ul class="nav1">
							<li><a href="#">Log In</a></li>
							<li><a href="#">Sign Up</a></li>
							<li><a href="#">Gallery</a></li>
							<li><a href="#">Settings</a></li>
						</ul>
						<!-- script-for-menu -->
						<script>
							$("span.menu-icon").click(function() {
								$("ul.nav1").slideToggle(300, function() {
									// Animation complete.
								});
							});
						</script>
						<!-- /script-for-menu -->
					</div>
				</div>
				<div class="clear"></div>
				<div class="w3l_main_grid1_sub">
					<img src="images/1.png" alt=" " class="img-responsive" />
					<h2>测试html5</h2>
				</div>
			</div>
			<div class="w3l_main_grid2">
				<div class="sap_tabs">

					<div id="horizontalTab"
						style="display: block; width: 100%; margin: 0px;">
						<div class="resp-tabs-container">

							<div class="tab-1 resp-tab-content" aria-labelledby="tab_item-1">
								<div class="wthree_tab_grid">
									<h4>关于 我</h4>
									<p class="eget">我 是 一个厨师，1989年10月初7出生在湖北红安县。这是一个 将军县，
									两百个 将军同一个故乡、中国第一将军县。</p>
									<p class="eget1">这是一个 将军县，两百个 将军同一个故乡、中国第一将军县。很荣幸。
									我 的名字 竟然和 一位中将同名、、</p>
									<div class="wthree_tab_grid_sub">
										<div class="wthree_tab_grid_sub_left">
											<h5>321</h5>
											<p>Tweets</p>
										</div>
										<div class="wthree_tab_grid_sub_left">
											<h5>213</h5>
											<p>Followers</p>
										</div>
										<div class="wthree_tab_grid_sub_left">
											<h5>123</h5>
											<p>Following</p>
										</div>
										<div class="clear"></div>
									</div>
								</div>
							</div>
							<div class="tab-2 resp-tab-content" aria-labelledby="tab_item-2">
								<div class="wthree_tab_grid">
									<h4>New Projects</h4>
									<ol>
										<li>mattis volutpat ante<span>Nulla eleifend nisi
												id quam interdum, id dictum urna viverra</span></li>
										<li>dictum tincidunt sem sed<span>Nulla eleifend
												nisi id quam interdum, id dictum urna viverra</span></li>
										<li>Praesent sem quam<span>Nulla eleifend nisi id
												quam interdum, id dictum urna viverra</span></li>
										<li>amet dignissim felis<span>Nulla eleifend nisi
												id quam interdum, id dictum urna viverra</span></li>
										<li>dictum urna viverra<span>Nulla eleifend nisi
												id quam interdum, id dictum urna viverra</span></li>
									</ol>
								</div>
							</div>
							<div class="tab-3 resp-tab-content" aria-labelledby="tab_item-3">
								<div class="wthree_tab_grid">
									<h4>Chats</h4>
									<div class="agile_activity_row">
										<div class="agile_activity_img">
											<img src="images/1.png" alt=" " /><span>10:00 PM</span>
										</div>
										<div class="agile_activity_img1">
											<div class="agile_activity_sub">
												<h5>Meagan Fisher</h5>
												<p>Hello !</p>
											</div>
										</div>
										<div class="clear"></div>
									</div>
									<div class="agile_activity_row">
										<div class="agile_activity_desc1"></div>
										<div class="agile_activity_img2">
											<div class="agile_activity_sub1">
												<h5>Pooja Lii</h5>
												<p>Hi,How are you ? What about our next meeting?</p>
											</div>
										</div>
										<div class="agile_activity_img">
											<img src="images/6.png" class="img-responsive" alt=""><span>10:02
												PM</span>
										</div>
										<div class="clear"></div>
									</div>
									<div class="agile_activity_row">
										<div class="agile_activity_img">
											<img src="images/1.png" alt=" " /><span>10:10 PM</span>
										</div>
										<div class="agile_activity_img1">
											<div class="agile_activity_sub">
												<h5>Meagan Fisher</h5>
												<p>Yeah Fine!</p>
											</div>
										</div>
										<div class="clear"></div>
									</div>
								</div>
							</div>
							<div class="tab-4 resp-tab-content" aria-labelledby="tab_item-4">
								<div class="wthree_tab_grid">
									<h4>Contact Me</h4>
									<ul class="wthree_tab_grid_list">
										<li><img src="images/call.png" alt=" "
											class="img-responsive" /></li>
										<li>Mobile<span>+123 234 4342</span></li>
									</ul>
									<ul class="wthree_tab_grid_list">
										<li><img src="images/mail.png" alt=" "
											class="img-responsive" /></li>
										<li>Mail Me<span><a href="mailto:info@example.com">info@example.com</a></span></li>
									</ul>
									<ul class="wthree_tab_grid_list">
										<li><img src="images/address.png" alt=" "
											class="img-responsive" /></li>
										<li>Address<span>123 Avenue, Dollar Street, NYC.</span></li>
									</ul>
								</div>
							</div>
						</div>

						<ul class="resp-tabs-list">
							<li class="resp-tab-item" aria-controls="tab_item-1" role="tab"><h2>
									<span class="w3ls_figure"> </span>
								</h2></li>
							<li class="resp-tab-item" aria-controls="tab_item-2" role="tab"><span
								class="w3ls_figure1"> </span></li>
							<li class="resp-tab-item" aria-controls="tab_item-3" role="tab"><span
								class="w3ls_figure2"> </span></li>
							<li class="resp-tab-item" aria-controls="tab_item-4" role="tab"><span
								class="w3ls_figure3"> </span></li>
							<div class="clear"></div>
						</ul>
					</div>
				</div>
				<script src="js/easyResponsiveTabs.js" type="text/javascript"></script>
				<script type="text/javascript">
					$(document).ready(function() {
						$('#horizontalTab').easyResponsiveTabs({
							type : 'default', //Types: default, vertical, accordion           
							width : 'auto', //auto or any width like 600px
							fit : true
						// 100% fit in a container
						});
					});
				</script>
			</div>
		</div>
		<div class="wthree_footer_copy">
			<p>Copyright &copy; 2016.Company name All rights reserved.</p>
		</div>
	</div>
</body>
</html>