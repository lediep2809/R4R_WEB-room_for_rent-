/*let closeBtn = document.querySelector(".close-btn");*/
let detailModal = document.querySelector(".container");
/*closeBtn.addEventListener("click", function () {
  detailModal.style.visibility = "hidden";
});*/

function viewDetail() {
  detailModal.style.visibility = "visible";
  /*getRoomDetail();*/
}

//****
// api
//****
let apiRoom = "http://localhost:8080/R4RWeb/api-admin-new";

function getRoomDetail() {
  getRoom(renderRoom);
}


// functions definition
// getMainRooms(renderMainRooms);
function getRoom(callback) {
  fetch(apiRoom)
    .then((response) => response.json())
    .then(callback);
}
function renderRoom(room) {
  detailModal.style.visibility = "visible";
  let container = document.querySelector(".container");
  let roomData = room.map((data) => {
	return `<div class="info-header">
    <h1>${data.name}<button class="close-btn">&times;</button></h1>
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
  container.innerHTML = "";
  container.innerHTML = roomData;
}
