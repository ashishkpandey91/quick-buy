const mobileNav = document.querySelector("#mobileNav");
const crossNan = document.querySelector(".fa-xmark");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.remove("-translate-x-full", "opecity-0");
  // mobileNav.classList.remove();
});

crossNan.addEventListener("click", () => {
  mobileNav.classList.add("-translate-x-full", "opecity-0");
  // mobileNav.classList.add();
});

const shopCartIcon = document.querySelector('#ShopCart');
const cartMainSection = document.querySelector('#cartMainSection');

shopCartIcon.addEventListener("click", function (e) {
  cartMainSection.classList.toggle("translate-x-full");
})