var bookMarkName = document.getElementById("bookMarkName");
var bookMarkUrl = document.getElementById("bookMarkUrl");

var bookMarkData = [];
if (localStorage.getItem("datacontain") !== null) {
  bookMarkData = JSON.parse(localStorage.getItem("datacontain"));
  displayData();
}
function submit() {
    var theData = {
      name: bookMarkName.value,
      url: bookMarkUrl.value,
    };
  
    bookMarkData.push(theData);
    displayData();
    localStorage.setItem("datacontain", JSON.stringify(bookMarkData));
  
    clearData();
  }

  
function clearData() {
  bookMarkName.value = null;
  bookMarkUrl.value = null;
}
function displayData() {
  var cartona = "";
  for (var i = 0; i < bookMarkData.length; i++) {
    cartona += `
        <tr >
        <td>${i}</td>
        <td>${bookMarkData[i].name}</td>
        <td><button class="m-0 border-0 bg-white" style="width: 100px;">visit</button></td>
        <td><button onclick="deleteitem(${i})" class="m-0 border-0 btn-outline-danger" style="width: 100px;">Delete</button></td>
      
       
    </tr> `;
  }
  document.getElementById("display").innerHTML = cartona;
}
function deleteitem(indexitem) {
  bookMarkData.splice(indexitem, 1);
  localStorage.setItem("datacontain", JSON.stringify(bookMarkData));
  displayData();
}
function validationurl(){
  var email=bookMarkName.value;
  var regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var massagename=document.getElementById("massage")

  if (regex.test(email)==true) {
    bookMarkName.classList.add("is-valid")
    bookMarkName.classList.remove("is-valid")
    massagename.classList.add("d-none")

  } else {
    bookMarkName.classList.remove("is-invalid")
    bookMarkName.classList.add("is-invalid")
    massagename.classList.remove("d-none")

  }
}
