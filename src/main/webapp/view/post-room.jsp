<%--
  Created by IntelliJ IDEA.
  User: ChuPe
  Date: 12/11/2020
  Time: 11:28 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%@include file="/common/taglib.jsp"%>

<html>
<div class="container">

    <form action="<c:url value='/trang-chu?action=post'/>" id="post-room" method="post">
   
        <h1>Đăng phòng</h1>
        <p>*Trước khi duyệt, chúng tôi sẽ liên hệ với bạn để xác nhận</p>
        <div class="name input-wrap">
          <input
            value=""
            type="text"
            name="room-name"
            id="room-name"
            required
          />
          <label for="room-name">Tên phòng</label>
        </div>

        <div class="address input-wrap">
          <input
            value=""
            type="text"
            name="address"
            id="room-address"
            required
          />
          <label for="address">Địa chỉ</label>
        </div>

        <div class="power">
          <div class="type">
            <select name="room-type" id="room-type">
              <option value="Loại phòng" selected disabled>Loại phòng</option>
              <option value="Phòng cho thuê">Phòng cho thuê</option>
              <option value="Phòng ở ghép">Phòng ở ghép</option>
            </select>
          </div>
          <div class="area input-wrap">
            <input
              value=""
              type="text"
              name="room-area"
              id="room-area"
              required
            />
            <label for="room-area">Diện tích</label>
          </div>
          <div class="contain input-wrap">
            <input
              value=""
              type="text"
              name="room-contain"
              id="room-contain"
              required
            />
            <label for="room-contain">Sức chứa</label>
          </div>
          <div class="status input-wrap">
            <select name="room-status" id="room-status">
              <option value="không phân biệt" selected disabled>
                Tình trạng phòng
              </option>
              <option value="Mới">Mới</option>
              <option value="Cũ">Cũ</option>
            </select>
          </div>
        </div>

        <div class="description input-wrap">
          <input
            value=""
            type="text"
            name="room-description"
            id="room-description"
          />
          <label for="room-description">Mô tả</label>
        </div>

        <div class="common-price">
          <div class="price-wrapper">
            <div class="price input-wrap">
              <input
                value=""
                type="text"
                name="room-price"
                id="room-price"
                required
              />
              <label for="room-price">Giá phòng</label>
            </div>
          </div>
          <div class="deposit input-wrap">
            <input
              value=""
              type="text"
              name="room-deposit"
              id="room-deposit"
              required
            />
            <label for="room-deposit">Đặt cọc</label>
          </div>
        </div>

        <div class="fee">
          <div class="price input-wrap">
            <input
              value=""
              type="text"
              name="electric-price"
              id="electric-price"
              required
            />
            <label for="electric-price">Tiền điện</label>
          </div>
          <div class="price input-wrap">
            <input
              value=""
              type="text"
              name="water-price"
              id="water-price"
              required
            />
            <label for="water-price">Tiền nước</label>
          </div>
          <div class="price input-wrap">
            <input
              value=""
              type="text"
              name="room-other-price"
              id="room-other-price"
            />
            <label for="room-other-price">Chi phí khác</label>
          </div>
        </div>

        <div class="owner-wrapper">
          <div class="owner input-wrap">
            <input
              value=""
              type="text"
              name="house-owner"
              id="house-owner"
              required
            />
            <label for="house-owner">Chủ nhà</label>
          </div>
          <div class="owner input-wrap">
            <input
              value=""
              type="text"
              name="owner-phone"
              id="owner-phone"
              required
            />
            <label for="owner-phone">SĐT chủ nhà</label>
          </div>
        </div>

        <div class="end-form">
          <div class="button">
            <div class="to-main-page">
              <a href="<c:url value='/trang-chu'/>">Về trang chủ</a>
            </div>
            <button type="reset" id="reset-btn" class="button-reset">
              Điền lại
            </button>
            <button type="submit" class="button-submit">Đăng phòng</button>
          </div>
        </div>
    </form>
</div>

</html>