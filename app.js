const menuBtn = document.querySelector('#menu-btn');
const mobileNav = document.querySelector('#mobileNav');
const crossNan = document.querySelector('.fa-xmark');

menuBtn.addEventListener("click",()=>{
    mobileNav.classList.remove("-translate-x-full", "opecity-0");
    // mobileNav.classList.remove();
});
crossNan.addEventListener("click",()=>{
    mobileNav.classList.add("-translate-x-full", "opecity-0" );
    // mobileNav.classList.add();
});