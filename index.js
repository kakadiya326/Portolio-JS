const menuBtn = document.getElementById("mobile-menu");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
});
