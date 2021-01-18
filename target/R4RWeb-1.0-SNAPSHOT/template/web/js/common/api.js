let apiRoom = "http://localhost:8080/api/room";
let apiPage = "http://localhost:8080/api/page";

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

// getPaging();
function getPaging() {
  fetch(apiPage).then(function (response) {
    return response.length;
  });
}
