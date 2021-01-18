var inp = document.getElementsByTagName("input");
for (var i = 0; i < inp.length; i++) {
  var ele = inp[i];
  ele.addEventListener("keyup", (e) => {
    e.target.setAttribute("value", e.target.value);
  });
}

// Điền lại
let resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", function () {
  location.reload();
});

//****
// api
//****
let apiRoom = "http://localhost:8080/api/room";

function postRoom() {
  handleCreateRoom();
}
postRoom();

// functions definition
// postRoom();
function createRoom(data) {
  var option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(apiRoom, option).then((response) => response.json());
}
function handleCreateRoom() {
  let createBtn = document.querySelector('button[class="button-submit"]');

  createBtn.addEventListener("click", function () {
    let name = document.querySelector('input[id="room-name"]').value;
    let address = document.querySelector('input[id="room-address"]').value;
    let category = document.querySelector('select[id="room-type"]').value;
    let area = document.querySelector('input[id="room-area"]').value;
    let capacity = document.querySelector('input[id="room-contain"]').value;
    let status = document.querySelector('select[id="room-status"]').value;
    let description = document.querySelector('input[id="room-description"]')
      .value;
    let price = document.querySelector('input[id="room-price"]').value;
    let deposit = document.querySelector('input[id="room-deposit"]').value;
    let electricPrice = document.querySelector('input[id="electric-price"]')
      .value;
    let waterPrice = document.querySelector('input[id="water-price"]').value;
    let otherPrice = document.querySelector('input[id="room-other-price"]')
      .value;
    let houseOwner = document.querySelector('input[id="house-owner"]').value;
    let ownerPhone = document.querySelector('input[id="owner-phone"]').value;

    let room = {
      name: name,
      address: address,
      category: category,
      area: area,
      capacity: capacity,
      status: status,
      description: description,
      price: price,
      deposit: deposit,
      electricPrice: electricPrice,
      waterPrice: waterPrice,
      otherPrice: otherPrice,
      houseOwner: houseOwner,
      ownerPhone: ownerPhone,
    };

    if (
      name &&
      address &&
      category &&
      area &&
      capacity &&
      status &&
      description &&
      price &&
      deposit &&
      electricPrice &&
      waterPrice &&
      otherPrice &&
      houseOwner &&
      ownerPhone
    ) {
      createRoom(room);
    } else {
      alert("Vui lòng nhập đầy đủ thông tin vào form!");
    }
  });
}
