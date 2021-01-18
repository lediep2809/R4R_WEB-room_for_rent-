let apiMyRoom = "http://localhost:8080/R4RWeb/api-admin-postroom";
let apiUser = "http://localhost:8080/R4RWeb/api-admin-newU";

let container = document.querySelector(".container");
let wrapper = document.querySelector(".wrapper");

/*	*/
/* view/hide room detail */
/*	*/
function viewDetail(id) {
  container.style.visibility = "visible";
  wrapper.style.visibility = "visible";
  
  // room detail
  fetch(apiMyRoom)
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


// edit info
let editBtn = document.querySelector(".edit-info");
let editModal = document.querySelector(".edit-modal");

function show() {
	editModal.style.display = "flex";
	
	document.querySelector(
      'input[name="fullname"]'
    ).value = document.querySelector(".fullname").textContent;
    document.querySelector(
      'input[name="phone"]'
    ).value = document.querySelector(".phone-number").textContent;
}

function hide() {
	editModal.style.display = "none";
}

//****
// api
//****
function mainPageNormal() {
  getMainRooms(renderMainRooms);
  getUser(renderUser);
  // getPaging();
}
mainPageNormal();

// functions definition
// getMainRooms(renderMainRooms);
function getMainRooms(callback) {
  fetch(apiMyRoom)
    .then((response) => response.json())
    .then(callback);
}
function renderMainRooms(rooms) {
  let rentRoomGrid = document.querySelector("#rent-content");
  let rentRoomData = rooms.map((room) => {
    return `<div id="rent-room-${room.id}" class="rent-rooms rooms" onclick="viewDetail(${room.id})">
    <h3>${room.name}</h3>
    <div class="room-description">
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

// functions definition
// getUser(renderUser);
function getUser(callback) {
  fetch(apiUser)
    .then((response) => response.json())
    .then(callback);
}
function renderUser(user) {
  let userLayout = document.querySelector(".personal-info");
  
  let createdTime = new Date(parseInt(`${user.createddate}`));
  let date = createdTime.getUTCDate();
  let month = createdTime.getUTCMonth();
  let year = createdTime.getUTCFullYear();
  
  let userData =
    `<div class="fullname">${user.fullname}</div>
     <div class="phone-number">${user.phone}</div>
     <div class="join-date">
     	Là thành viên kể từ:
     	<p>${date}-${month}-${year}</p>
     </div>

	 <button class="edit-info" type="submit"
		onclick="show()" ondblclick="hide()">
			Sửa thông tin
	 </button>`;
  userLayout.innerHTML = userData;
}

//
// EDIT
//
function editUser(data) {
  let option = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  fetch(apiUser, option)
    .then((response) => response.json());
  alert("Cập nhật thông tin cá nhân thành công!");
}

function handleEditUser() {
  let editBtn = document.querySelector(".edit-btn"); 

  editBtn.addEventListener("click", function () {
    let fullname = document.querySelector('input[name="fullname"]').value;
    let phone = document.querySelector('input[name="phone"]').value;
	let password = document.querySelector('input[name="password"]').value;

    let data = {
      fullname: fullname,
      phone: phone,
	  password: password,
    };

    if (fullname && phone && password) {
      editUser(data);
      mainPageNormal();
    } else {
      alert("Vui lòng nhập đầy đủ thông tin vào form!");
    }
  });
}

function doEditUser() {
  handleEditUser();
}
doEditUser();
