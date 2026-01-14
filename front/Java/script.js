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

// console.log('I\m studying Javascript')
// 특정 목적에서 \ 사용

// 자료 = 데이터
// 자료형 = 데이터 타입
// 숫자(number) 1234
// 문자(string) ㅁㄴㅇㅁㄴㅇ
// 문자는 하나만 보면 캐릭터
// 불리언(Boolean) 참 true(1) / 거짓 false(0)

// 없음(null) 값이 없음x
// undefined 정의되자 않음(자바만 가지고있음)
// 위 두개 깉은 뜻

// 객체(object) 숫자, 문자, 불리언들이 합쳐있는 형태
// ram 은 메모리 단기 저장 전원 끄면 사라짐 (변수)
// *변수의 저장공간을 stack*
// ssd 장기
// 자바스크립트가 이용하는 메모리 공간
// 컴퓨터의 ram공간속에 논리적으로 존재하는 영역
//  Stack, Heap, Meta Space
