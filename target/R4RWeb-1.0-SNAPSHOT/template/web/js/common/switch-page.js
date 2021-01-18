let apiPage = "http://localhost:8080/api/room";

function getPaging() {
  fetch(apiPage).then(function (response) {
    return response.length;
  });
}
// let prevBtn = document.getElementById("rent-prev");
// let nextBtn = document.getElementById("rent-next");
let rentPageNums = document.getElementsByClassName("rent-number-page");
let sharePageNums = document.getElementsByClassName("share-number-page");

// let currentPage = 1;
let recordsPerPage = 6;
let totalPages = Math.ceil(pages / recordsPerPage);

// pagination using pure JS
// RENT rooms
// rentPageNumbers()
let rentPageNumbers = function () {
  let pageNumber = document.getElementById("rent-paging");
  pageNumber.innerHTML = "";

  for (let i = 1; i < totalPages + 1; i++) {
    pageNumber.innerHTML +=
      '<div id="rent-number" class="rent-number-page number-page">' +
      i +
      "</div>";
  }
};

// rentSelectedPage()
let rentSelectedPage = function () {
  for (let i = 0; i < rentPageNums.length; i++) {
    rentPageNums[i].addEventListener("click", function () {
      rentPageNums[i].classList.add("active");
      for (let j = 0; j < rentPageNums.length; j++) {
        if (j !== i) {
          rentPageNums[j].classList.remove("active");
        }
      }
    });
  }
};

// rentShowRooms
// 1-6 7-12 13 19 => 6*0+1 6*1+1
// let rentShowRooms = function () {
//   for (let i = 0; i < rentPageNums.length; i++) {
//     rentPageNums[i].addEventListener("click", function () {
//       let rooms = document.getElementById("rent-content");
//       rentContent.innerHTML = "";
//       for (let j = 6 * i + 1; j <= 6 * i + 6; j++) {}
//     });
//   }
// };

rentPageNumbers();
rentSelectedPage();
// rentShowRooms();

// SHARE rooms
// sharePageNumbers()
let sharePageNumbers = function () {
  let pageNumber = document.getElementById("share-paging");
  pageNumber.innerHTML = "";

  for (let i = 1; i < totalPages + 1; i++) {
    pageNumber.innerHTML +=
      '<div id="share-number" class="share-number-page number-page">' +
      i +
      "</div>";
  }
};

// shareSelectedPage()
let shareSelectedPage = function () {
  for (let i = 0; i < sharePageNums.length; i++) {
    sharePageNums[i].addEventListener("click", function () {
      sharePageNums[i].classList.add("active");
      for (let j = 0; j < sharePageNums.length; j++) {
        if (j !== i) {
          sharePageNums[j].classList.remove("active");
        }
      }
    });
  }
};

sharePageNumbers();
shareSelectedPage();
// shareShowRooms();
