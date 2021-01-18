let apiRoom = "http://localhost:8080/api/room";
let apiUser = "http://localhost:8080/api/user";

// DELETE
function handleDeleteRoom() {
  var option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(apiRoom, option)
    .then(function (response) {
      response.text();
    })
    .then(function () {
      let idRoom = document.querySelector('input[name="id-room"]').value;
      let deleteBtn = document.querySelector(".delete-btn");

      deleteBtn.addEventListener("click", function () {
        let room = document.querySelector("#rent-room-" + idRoom);
        if (room) {
          room.remove();
        } else {
          alert("Vui lòng nhập id phòng muốn xoá!");
        }
      });
    });
}

//
// EDIT
//
function handleEditRoom(data, callback) {
  let option = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(apiRoom, option)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function editRoom() {
  let editBtn = document.querySelector(".edit-btn");
  let idRoom = document.querySelector('input[name="id-room"]');
  let idRoomValue = document.querySelector('input[name="id-room"]').value;
  let room = document.querySelector("#rent-room-" + idRoomValue);

  editBtn.addEventListener("click", function () {
    document.querySelector(
      'input[name="room-name"]'
    ).value = room.querySelector("h3").textContent;
    document.querySelector(
      'input[name="room-type"]'
    ).value = room.querySelector(".room-type").textContent;
    document.querySelector(
      'input[name="room-area"]'
    ).value = room.querySelector(".room-area").textContent;
    document.querySelector(
      'input[name="room-capacity"]'
    ).value = room.querySelector(".room-capacity").textContent;
    document.querySelector(
      'input[name="room-price"]'
    ).value = room.querySelector(".room-price").textContent;
  });

  editBtn.addEventListener("dblclick", function () {
    let name = document.querySelector('input[id="room-name"]').value;
    let category = document.querySelector('select[id="room-type"]').value;
    let area = document.querySelector('input[id="room-area"]').value;
    let capacity = document.querySelector('input[id="room-contain"]').value;
    let price = document.querySelector('input[id="room-price"]').value;
    let data = {
      idRoomValue: idRoomValue,
      name: name,
      category: category,
      area: area,
      capacity: capacity,
      price: price,
    };

    if (idRoomValue && name && category && area && capacity && price) {
      handleEditRoom(data, editRoom);
      mainPageNormal();
    } else {
      alert("Vui lòng nhập đầy đủ thông tin vào form!");
    }
  });
}

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
