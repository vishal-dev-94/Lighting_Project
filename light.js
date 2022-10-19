let btn1 = document.getElementById("btn1");
let light = document.getElementById("light");
function toggleBtn1() {
  btn1.classList.toggle("active");
  light.classList.toggle("on");
}

let btn2 = document.getElementById("btn2");
let changeTheme = document.getElementById("changeTheme");

function toggleBtn2() {
  btn2.classList.toggle("active");
  changeTheme.classList.toggle("theme");
}

// console.log(button1);
// console.log(btn1);
