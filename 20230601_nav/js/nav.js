const navToggleI = nav_toggle.getElementsByTagName("i")[0]; // nav_toggle 안에서 찾음
const navListUl = document.getElementsByClassName("nav-list")[0]; // document 전체에서 찾음

console.log(navToggleI);
console.log(navListUl);

// .nav-toggle 클릭하면

nav_toggle.onclick = () => {
    // .nav-toggle i 햄버거메뉴 <-> X
    // class에서 bi-list <-> bi-x-lg
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle('bi-x-lg');

    // .nav-list에 .show-menu toggle
    navListUl.classList.toggle("show-menu");
}

// HTML -> js 요소 가져오기
// 1. id
//   const navToggleDiv = document.getElementById("nav-toggle"); // id값 가져오기(문서에 있는 아이디로 toggle 요소를 가져옴), 요소 1개
//   nav-toggle 변수를 그대로 사용 O
// 2. class
//   const navToggleDiv = document.getElementsByClassName("nav-toggle")[0]; // nav-toggle을 class로 가지고 있는 요소 다 가져옴, 요소 여러 개(리스트 하나로 묶임) but 1개 밖에 없으니 [0]
// 3. Tag
//   const navToggleDiv = document.getElementsByTagName("div")[0]; 
// 4. CSS selector (속도 느림)
//   const navToggleDiv = document.querySelector("#nav-toggle"); // id(=Element), 하나밖에 없어야함
//   const navToggleDiv = document.querySelectorAll(".nav-toggle")[0]; // class(=Elements)
//   const navToggleDiv = document.querySelectorAll("div")[0];
// 5. XPath (자주 사용 X)

// nav_toggle.onclick = () => alert("안녕"); // nav_toggle click하면 
// nac_toggle.onclick = alert("안녕");


// "안녕"이라는 창을 띄우는 함수를 실행해라, click을 하면 sayHello함수 실행 새로고침 -> sayHello 실행 X
// function sayHello() {
//     alert("안녕");
// }
// nav_toggle.onclick = sayHello;

// nav_toggle.onclick =  function () {
//     alert("안녕");
// }

// nav_toggle.onclick = () => {
//     alert("안녕");
// }

// nav_toggle.onclick = () => alert("안녕");
