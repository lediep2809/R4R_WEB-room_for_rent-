<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@include file="/common/taglib.jsp"%>

<html>
<body>
 <div class="content">
      <!-- Personal info -->
      <div class="personal-info">
        <!-- Show with js -->
      </div>

      <!-- Edit modal -->
      <div class="edit-modal">
        <h2>Cập nhật thông tin cá nhân</h2>
        <input type="text" name="fullname" placeholder="Họ tên" />
        <input type="tel" name="phone" placeholder="Số điện thoại" />
        <input type="text" name="password" placeholder="Mật khẩu (nhập lại/đổi mới)" />
        <a href='<c:url value="/thoat?action=logout"/>'>
          <button class="edit-btn" type="submit">Cập nhật</button>
        </a>
      </div>

      <!-- Post rooms -->
      <h1>Danh sách phòng tôi đã đăng</h1>
      <div id="rent" class="rent-room">
        <div id="rent-content" class="room-grid">
          <!-- Show with JS -->
        </div>
      </div>
      <div class="wrapper">
      	<div class="container">
		 	<!-- Show with js -->
	  	</div>
      </div>
</div>

</body>
</html>