let heading = document.querySelector("#heading");
heading.onclick = function () {
  heading.style.color = "red";
};

// alert("오늘은 자바스크립트 첫날"); 개발용
// confirm("확인 해라");  얘도
document.write("<h1>어서오세요</h1>");

//유저입력창
let username = prompt("이름을 입력", "아무개"); //너도

// 콘솔창에서 보이는 역할, 콘솔창은 개발자도구 콘솔탭에서 화긴
console.log(username + "님, 환영합니다");
