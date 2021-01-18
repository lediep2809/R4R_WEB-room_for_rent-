<%--
  Created by IntelliJ IDEA.
  User: ChuPe
  Date: 11/26/2020
  Time: 4:15 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/common/taglib.jsp" %>
<!-- Navbar -->
<div class="navbar">
    <!-- Left-side -->
    <div class="nav-logo-search">
        <div class="logo-box">
            <a href="<c:url value='/trang-chu'/>">
                <div class="logo-icon"></div>
                <div class="logo-text">R4R</div>
            </a>
        </div>
        <div class="search-box">
            <input
                    type="search"
                    name="search-room"
                    id="search-room"
                    placeholder="Tìm kiếm phòng"
            />
            <a href="<c:url value='/tim-kiem?action=search-room'/>">Tìm kiếm</a>
        </div>
    </div>

    <!-- Right-side -->
    <div class="action">
        <div class="act-post-room">
            <c:if test="${not empty USERMODEL}">
                <a href="<c:url value="/dang-phong?action=post-room"/>">
                    <div class="post-icon"></div>
                    <div class="post-text">Đăng phòng</div>
                </a>
            </c:if>
        </div>
        <div class="act-sign-in">
            <c:if test="${not empty USERMODEL}">
                <a>
                    <div>Xin chào, ${USERMODEL.fullname}</div>
                </a>
                <div class="to-rooms">
                    <a href='<c:url value="/trang-ca-nhan?action=my-rooms"/>'>
                        <div>Trang cá nhân</div>
                    </a>
                    <a href='<c:url value="/phong-cua-toi?action=my-post-rooms"/>'>
                        <div>Phòng của tôi</div>
                    </a>
                    <a href='<c:url value="/thoat?action=logout"/>'>
                        <div>Đăng xuất</div>
                    </a>
                </div>
            </c:if>

            <c:if test="${empty USERMODEL}">
                <a href="<c:url value='/dang-nhap?action=login'/> ">
                    <div>Đăng nhập / Đăng ký</div>
                </a>
            </c:if>
        </div>
    </div>
</div>