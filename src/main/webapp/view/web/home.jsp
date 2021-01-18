<%--
  Created by IntelliJ IDEA.
  User: ChuPe
  Date: 11/25/2020
  Time: 12:45 AM
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@include file="/common/taglib.jsp"%>
<html>
<body>
	<!-- Content -->
	<div class="content">
		<!-- Introduction -->
		<div class="introduction">
			<div class="intro-text">
				<h1>R4R - Rooms For Rent</h1>
				<p>Trang web hỗ trợ tìm phòng trọ tiện lợi</p>
			</div>
			<div class="intro-img"></div>
			<div class="intro-redirect-btn">
				<button>
					<a href="#rent">DANH SÁCH PHÒNG</a>
				</button>
			</div>
			<div class="intro-contact">
				<p>Cần hỗ trợ trực tiếp từ chúng tôi?</p>
				<a href="https://www.facebook.com/nhannd213/" target="_blank"></a>
			</div>
		</div>

		<!-- Rent-room -->
		<div id="rent" class="rent-room">
			<div class="room-title">
				<i></i>
				<h2>Danh sách phòng</h2>
			</div>
			<div id="rent-content" class="room-grid">
				<!-- Show with JS -->
			</div>
		</div>
		
		<!-- Room detail -->
		<div class="wrapper">
			<div class="container">
			<!-- Show with js -->
			</div>
		</div>
	</div>
</body>
</html>
