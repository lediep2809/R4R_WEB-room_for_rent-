function checkReg() {
  let rePass = document.getElementById("re-password").value;
  let pass = document.getElementById("pass").value;
  if (pass != rePass) {
    alert("Mật khẩu nhập lại chưa đúng");
    return false;
  }
}

//****
// api
//****
let apiUser = "http://localhost:8080/api/user";

function postUser() {
  handleCreateUser();
}
postUser();

// functions definition
// postUser();
function createUser(data) {
  var option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(apiRoom, option).then((response) => response.json());
}
function handleCreateUser() {
  let createBtn = document.querySelector('button[type="submit"]');

  createBtn.addEventListener("click", function () {
    let fullname = document.querySelector('input[name="username"]').value;
    let phone = document.querySelector('input[name="phone"]').value;
    let password = document.querySelector('input[name="password"]').value;

    let user = {
      fullname: fullname,
      phone: phone,
      password: password,
    };

    if (fullname && phone && password) {
      createUser(user);
    } else {
      alert("Vui lòng nhập đầy đủ thông tin vào form!");
    }
  });
}
