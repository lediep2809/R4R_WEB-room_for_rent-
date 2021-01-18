let apiUser = "http://localhost:8080/R4RWeb/api-admin-newU";

function checkLogin() {
  getUser(checkPassword);
}
checkLogin();

// getUser(renderUser);
function getUser(callback) {
  fetch(apiUser)
    .then((response) => response.json())
    .then(callback);
}
function checkPassword(user) {  
  let password = `${user.password}`;
  if (document.querySelector("#password").value == password) {
	return true;
  } else {
	alert("Sai mật khẩu, vui lòng nhập lại!");
	return false;
  }
}
