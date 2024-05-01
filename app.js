const menuBtn = document.querySelector("#menu-btn");
const mobileNav = document.querySelector("#mobileNav");
const crossNan = document.querySelector(".fa-xmark");
const ShopCart = document.querySelector("#ShopCart");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.remove("-translate-x-full", "opecity-0");
  // mobileNav.classList.remove();
});
crossNan.addEventListener("click", () => {
  mobileNav.classList.add("-translate-x-full", "opecity-0");
  // mobileNav.classList.add();
});

document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelector("#products");
  console.log(products);
  async function fetch_products(url) {
    let data = await fetch(url);
    let response = await data.json();
    console.log();

    for (let i = 0; i < response.length; i++) {
      products.innerHTML += `<div
            class="shadow-lg bg-gray-200 rounded-lg flex flex-col items-center justify-between gap-5 py-5 px-4 h-full w-full"
          >
            <img
              class=" mix-blend-multiply h-48 w-48"
              src="${response[i].image}"
              alt=""
            />
            <div class="flex flex-col items-center justify-between">
              <div class="my-2 flex justify-between gap-2 text-xl">
                <div class="flex gap-2 relative overflow-hidden">
                  <i class="fa-regular fa-star text-yellow-500"></i>
                  <i class="fa-regular fa-star text-yellow-500"></i>
                  <i class="fa-regular fa-star text-yellow-500"></i>
                  <i class="fa-regular fa-star text-yellow-500"></i>
                  <i class="fa-regular fa-star text-yellow-500"></i>
                  <div style="width:${Number(response[i].rating.rate) * 20}%;"
                    class="absolute top-0 left-0 flex gap-2 overflow-hidden"
                  >
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                    <i class="fa-solid fa-star text-yellow-500"></i>
                  </div>
                </div>
                <span>(${response[i].rating.count})</span>
              </div>
              <h2 class="text-center font-medium text-xl my-2">
                ${response[i].title}
              </h2>
              <p class="text-xl font-bold text-my-custom-color my-2">
                ₹ ${response[i].price}
                <del class="text-base text-gray-500 font-normal">₹  ${(
                  response[i].price + (response[i].price * 21/100)
                ).toFixed(2)}</del>
              </p>
            </div>
            <div class="flex gap-4 items-between">
              <i
                class="fa-solid fa-cart-plus px-4 py-2 cursor-pointer hover:bg-gray-200 transition ease-linear text-sm bg-white shadow-sm shadow-gray-400 rounded-md"
              ></i>
              <button
                class="bg-my-custom-color text-sm text-white font-semibold py-2 px-16  rounded-md shadow-sm"
              >
                Buy Now
              </button>
            </div>
          </div>`;
    }
  }
  fetch_products("https://fakestoreapi.com/products");
});

ShopCart.addEventListener("click", function (e) {
  let mainSection = document.querySelector("main");
  mainSection.classList.toggle("hidden");
})
