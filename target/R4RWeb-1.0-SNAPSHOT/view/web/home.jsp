<%--
  Created by IntelliJ IDEA.
  User: ChuPe
  Date: 11/25/2020
  Time: 12:45 AM
  To change this template use File | Settings | File Templates.
--%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@include file="/common/taglib.jsp" %>
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
                    <button><a href="#rent">PHÒNG CHO THUÊ</a></button>
                    <button><a href="#share">PHÒNG Ở GHÉP</a></button>
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
                    <h2>Phòng cho thuê</h2>
                </div>
                <div class="room-grid">

                    <c:forEach var="item" items="${model.listResult}">
                        <c:if test="${item.categoryId == 1}">
                            <div id="rent-room-1" class="rooms">
                                <img src="" alt=""/>
                                <h3>${item.title}</h3>
                                <div class="room-description">
                                    <div class="room-type">Phòng cho thuê</div>
                                    <div class="room-area">30m²</div>
                                    <div class="room-gender">${item.shortDescription}</div>
                                </div>
                                <div class="room-price">${item.price}</div>
                                <button class="room-follow" onclick="alertMsg()">Quan tâm</button>
                            </div>
                        </c:if>
                    </c:forEach>


                </div>

                <div class="room-paging">
                    <div class="prev-page" onclick="switchPage1()"></div>
                    <div class="number-page" onclick="switchPage1()">1</div>
                    <div class="number-page" onclick="switchPage2()">2</div>
                    <div class="next-page" onclick="switchPage2()"></div>
                </div>
            </div>

            <!-- Share-room -->
            <div id="share" class="share-room">
                <div class="room-title">
                    <i></i>
                    <h2>Phòng ở ghép</h2>
                </div>
                <div class="room-grid">
                    <c:forEach var="item" items="${model.listResult}">
                    <c:if test="${item.categoryId == 2}">
                    <div id="rent-room-1" class="rooms"
                    ">
                    <img src="" alt=""/>
                    <h3>${item.title}</h3>
                    <div class="room-description">
                        <div class="room-type">Phòng cho thuê</div>
                        <div class="room-area">30m²</div>
                        <div class="room-gender">${item.shortDescription}</div>
                    </div>
                    <div class="room-price">${item.price}</div>
                    <button class="room-follow">Quan tâm</button>
                </div>
                </c:if>
                </c:forEach>
            </div>
            <div class="room-paging">
                <div class="prev-page"></div>
                <div class="number-page">1</div>
                <div class="next-page"></div>
            </div>
        </div>
        </div>
    </body>
</html>
