<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@include file="/common/taglib.jsp"%>

<html>
<body>
  <div class="content">
      <div class="btn">
        <div class="search">
          <input type="text" name="id-room" />
          <label for="id-room">ID</label>
        </div>
        <div class="name">
          <input type="text" name="room-name" />
          <label for="room-name">Tên</label>
        </div>
        <div class="type">
          <input type="text" name="room-type" />
          <label for="room-type">Loại</label>
        </div>
        <div class="area">
          <input type="text" name="room-area" />
          <label for="room-area">Diện tích</label>
        </div>
        <div class="capacity">
          <input type="text" name="room-capacity" />
          <label for="room-capacity">Sức chứa</label>
        </div>
        <div class="price">
          <input type="text" name="room-price" />
          <label for="room-price">Giá</label>
        </div>
        <div class="buttons">
          <button class="edit-btn" type="submit">Sửa</button>
          <button class="delete-btn" type="submit">Xoá</button>
        </div>
      </div>
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