let apiMyPostRooms = "http://localhost:8080/R4RWeb/api-admin-postroom";
let apiRoom = "http://localhost:8080/R4RWeb/api-admin-new";

let container = document.querySelector(".container");
let wrapper = document.querySelector(".wrapper");

/*	*/
/* view/hide room detail */
/*	*/
function viewDetail(id) {
  container.style.visibility = "visible";
  wrapper.style.visibility = "visible";
  
  // room detail
  fetch(apiMyPostRooms)
    .then((response) => response.json())
    .then(function (rooms) {
	  let roomData = rooms.filter((allRooms) => {
		return (allRooms.id == id);
	  }).map((data) => {
		return `<div class="info-header">
	    <h1>${data.name}<button class="close-btn" onclick="hideDetail()">&times;</button></h1>
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
	});
}

function hideDetail() {
  container.style.visibility = "hidden";
  wrapper.style.visibility = "hidden";
}


function doDeleteRoom() {
  handleDeleteRoom();
}
doDeleteRoom();

// DELETE
function deleteRoom(data) {
	var option = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
	body: JSON.stringify(data),
  };
  fetch(apiRoom, option).then((response) => response.json());
  alert("Xoá phòng thành công!");
}
function handleDeleteRoom() {
  let deleteBtn = document.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", function () {
	let id = document.querySelector('input[name="id-room"]').value;
    let room = {
	  id: id,
	};
	
    if (id) {
      deleteRoom(room);
	  mainPageNormal();
    } else {
      alert("Vui lòng nhập id phòng muốn xoá!");
    }
  });
}

//
// EDIT
//
function editRoom(data) {
  let option = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(apiRoom, option)
    .then((response) => response.json());
  alert("Cập nhật thông tin phòng thành công!");
}

function handleEditRoom() {
  let idInput = document.querySelector('input[name="id-room"]');
  let editBtn = document.querySelector(".edit-btn");

  idInput.addEventListener("blur", function () {
	let id = document.querySelector('input[name="id-room"]').value;
  	let room = document.querySelector("#rent-room-" + id);
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

  editBtn.addEventListener("click", function () {
	let id = document.querySelector('input[name="id-room"]').value;
    let name = document.querySelector('input[name="room-name"]').value;
    let category = document.querySelector('input[name="room-type"]').value;
    let area = document.querySelector('input[name="room-area"]').value;
    let capacity = document.querySelector('input[name="room-capacity"]').value;
    let price = document.querySelector('input[name="room-price"]').value;
    let data = {
      id: id,
      name: name,
      category: category,
      area: area,
      capacity: capacity,
      price: price,
    };

    if (id && name && category && area && capacity && price) {
      editRoom(data);
      mainPageNormal();
    } else {
      alert("Vui lòng nhập đầy đủ thông tin vào form!");
    }
  });
}

function doEditRoom() {
  handleEditRoom();
}
doEditRoom();

//
//
// 1st load
function mainPageNormal() {
  getMainRooms(renderMainRooms);
  // getPaging();
}
mainPageNormal();

function getMainRooms(callback) {
  fetch(apiMyPostRooms)
    .then((response) => response.json())
    .then(callback);
}
function renderMainRooms(rooms) {
  let rentRoomGrid = document.querySelector("#rent-content");
  let rentRoomData = rooms.map((room) => {
    return `<div id="rent-room-${room.id}" class="rent-rooms rooms" onclick="viewDetail(${room.id})">
    <h3>${room.name}</h3>
    <div class="room-description">
	  <p>(id: ${room.id})</p>
      <div class="room-type"><i class="category-icon"></i>${room.category}</div>
      <div class="room-area"><i class="area-icon"></i>${room.area}</div>
      <div class="room-capacity"><i class="capacity-icon"></i>${room.capacity}</div>
    </div>
    <div class="room-price">${room.price}</div>
  </div>`;
  });
  rentRoomGrid.innerHTML = rentRoomData.join("");

  // search rooms
  let searchBtn = document.querySelector(".search-btn");
  searchBtn.addEventListener("click", function () {
    let searchValue = document.querySelector("#search-room").value;
    
      let listRooms = rooms.filter((room) => {
        return (room.address).toLowerCase().includes(searchValue.toLowerCase());
      });
            
      if (listRooms.length > 0) {
        let searchData = listRooms.map((room) => {
          return `<div id="rent-room-${room.id}" class="rent-rooms rooms" onclick="viewDetail(${room.id})">
	    			<h3>${room.name}</h3>
				    <div class="room-description">
					  <p>(id: ${room.id})</p>
				      <div class="room-type">${room.category}</div>
				      <div class="room-area">${room.area}</div>
				      <div class="room-capacity">${room.capacity}</div>
				    </div>
				    <div class="room-price">${room.price}</div>
			  	</div>`;
        });
        rentRoomGrid.innerHTML = searchData.join("");
      }
      else {
        alert(`Địa chỉ "${searchValue}" không có phòng!`);
      }
  });
}
