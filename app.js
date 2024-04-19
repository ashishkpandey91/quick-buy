const menuBtn = document.querySelector('#menu-btn');
const mobileNav = document.querySelector('#mobileNav');
const crossNan = document.querySelector('.fa-xmark');

menuBtn.addEventListener("click",()=>{
    mobileNav.classList.remove("-translate-x-full");
});
crossNan.addEventListener("click",()=>{
    mobileNav.classList.add("-translate-x-full");
});