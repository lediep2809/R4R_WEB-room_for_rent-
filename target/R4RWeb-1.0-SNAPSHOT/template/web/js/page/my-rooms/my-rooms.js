//****
// api
//****
let apiRoom = "http://localhost:8080/api/room";
let apiUser = "http://localhost:8080/api/user";

function sendId(data) {
  var option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(apiUser, option).then((response) => response.json());
}
function handleSendID() {
  document.addEventListener("DOMContentLoaded", function () {
    let idUser = document.querySelector('div[class="sign-in"]').value;

    let idData = {
      idUser: idUser,
    };

    if (idUser) {
      sendId(idData);
    }
  });
}

function mainPageNormal() {
  getMainRooms(renderMainRooms);
  // getPaging();
}
mainPageNormal();

// functions definition
// getMainRooms(renderMainRooms);
function getMainRooms(callback) {
  fetch(apiRoom)
    .then((response) => response.json())
    .then(callback);
}
function renderMainRooms(rooms) {
  let rentRoomGrid = document.querySelector("#rent-content");
  let rentRoomData = rooms.map((room) => {
    `<div id="rent-room-${room.id}" class="rent-rooms rooms">
    <h3>${room.name}</h3>
    <p>id: ${room.id}</p>
    <div class="room-description">
      <div class="room-type">${room.category}</div>
      <div class="room-area">${room.area}</div>
      <div class="room-capacity">${room.capacity}</div>
    </div>
    <div class="room-price">${room.price}</div>
  </div>`;
  });
  rentRoomGrid.innerHTML = rentRoomData.join("");
}
