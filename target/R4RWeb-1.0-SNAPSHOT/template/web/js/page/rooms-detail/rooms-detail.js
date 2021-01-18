let rooms = document.getElementsByClassName("rooms");
for (let i = 0; i < rooms.length; i++) {
  rooms[i].addEventListener("click", function () {
    location.href = "../page/rooms-detail.html";
  });
}

//****
// api
//****
let apiRoom = "http://localhost:8080/api/room";

function getRoomDetail() {
  getRoom(renderRoom);
}
getRoomDetail();

// functions definition
// getMainRooms(renderMainRooms);
function getRoom(callback) {
  fetch(apiRoom)
    .then((response) => response.json())
    .then(callback);
}
function renderRoom(room) {
  let container = document.querySelector(".container");
  let roomData = room.map((data) => {
    `<div class="info-header">
    <h1>${data.name}</h1>
    <div class="main-info">
      <div class="name">
        <i class="name-icon"></i>
        <div class="name-text">${data.houseOwner}</div>
      </div>
      <div class="phone">
        <i class="phone-icon"></i>
        <div class="phone-text">${data.ownerPhone}</div>
      </div>
      <div class="address">
        <i class="address-icon"></i>
        <div class="address-text">${data.address}</div>
      </div>
    </div>
    <h2>${data.price}</h2>
  </div>
  <div class="info">
    <div class="info-type">
      <h3>Loại phòng</h3>
      <p>${data.category}</p>
    </div>
    <div class="info-area">
      <h3>Diện tích</h3>
      <p>${data.area}</p>
    </div>
    <div class="info-deposit">
      <h3>Đặt cọc</h3>
      <p>${data.deposit}</p>
    </div>
    <div class="info-capacity">
      <h3>Sức chứa</h3>
      <p>${data.capacity}</p>
    </div>
    <div class="info-electric">
      <h3>Tiền điện</h3>
      <p>${data.electricPrice}</p>
    </div>
    <div class="info-water">
      <h3>Tiền nước</h3>
      <p>${data.waterPrice}</p>
    </div>
    <div class="info-fee">
      <h3>Chi phí khác</h3>
      <p>${data.otherPrice}</p>
    </div>
    <div class="info-status">
      <h3>Tình trạng</h3>
      <p>${data.status}</p>
    </div>
    <div class="info-description">
      <h3>Mô tả chi tiết</h3>
      <p>${data.description}</p>
    </div>
  </div>`;
  });
  container.innerHTML = roomData.join("");
}
