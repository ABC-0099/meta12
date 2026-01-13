// [자바스크립트]
const toggleBtn = document.querySelector(".navbar-toggleBtn");
const menu = document.querySelector(".navbar-menu");
const icons = document.querySelector(".navbar-icons");

toggleBtn.addEventListener("click", (e) => {
  // 기본 동작(링크 이동) 방지
  e.preventDefault();
  menu.classList.toggle("active");
});
