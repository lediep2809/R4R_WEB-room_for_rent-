<%--
  Created by IntelliJ IDEA.
  User: NhanNguyenDuc
  Date: 22-Dec-20
  Time: 8:27 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/common/taglib.jsp" %>
<html>
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title><dec:title default="Phòng của tôi"/></title>

    <link rel="stylesheet" href="<c:url value='/template/web/css/common/main.css' />"/>
    <link rel="stylesheet" href="<c:url value='/template/web/css/page/main-page/navbar.css' />"/>
    <link rel="stylesheet" href="<c:url value='/template/web/css/page/main-page/content.css' />"/>
    <link rel="stylesheet" href="<c:url value='/template/web/css/page/main-page/footer.css' />"/>
    <link rel="stylesheet" href="<c:url value='/template/web/css/page/my-post-rooms/my-post-rooms.css' />"/>
    <link rel="stylesheet" href="<c:url value='/template/web/css/page/my-rooms/my-rooms.css' />"/>
</head>
<body>

<!-- header -->
<%@ include file="/common/web/header.jsp" %>
<!-- header -->


    <dec:body/>


<!-- footer -->
<%@ include file="/common/web/footer.jsp" %>
<!-- footer -->

<script src="<c:url value='/template/web/js/page/my-post-rooms/my-post-rooms.js' />" ></script>

</body>
</html>
