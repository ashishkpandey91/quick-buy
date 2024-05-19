async function fetchProducts(url) {
  let products = document.querySelector("#products");

  let data = await fetch(url);
  window.ALL_PRODUCTS = await data.json();
  let allProducts = window.ALL_PRODUCTS;

  for (let i = 0; i < allProducts.length; i++) {
    let newProduct = document.createElement("div");
    newProduct.classList.add("w-full", "h-full");
    newProduct.dataset.id = allProducts[i].id;

    newProduct.innerHTML = `<div
              class="shadow-lg bg-gray-200 rounded-lg flex flex-col items-center justify-between gap-5 py-5 px-4 h-full w-full"
            >
              <img
                class=" mix-blend-multiply h-48 w-48"
                src="${allProducts[i].image}"
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
                    <div style="width:${
                      Number(allProducts[i].rating.rate) * 20
                    }%;"
                      class="absolute top-0 left-0 flex gap-2 overflow-hidden"
                    >
                      <i class="fa-solid fa-star text-yellow-500"></i>
                      <i class="fa-solid fa-star text-yellow-500"></i>
                      <i class="fa-solid fa-star text-yellow-500"></i>
                      <i class="fa-solid fa-star text-yellow-500"></i>
                      <i class="fa-solid fa-star text-yellow-500"></i>
                    </div>
                  </div>
                  <span>(${allProducts[i].rating.count})</span>
                </div>
                <h2 class="text-center font-medium text-xl my-2">
                  ${allProducts[i].title}
                </h2>
                <p class="text-xl font-bold text-orange-500 my-2">
                  ₹ ${allProducts[i].price}
                  <del class="text-base text-gray-500 font-normal">₹  ${(
                    allProducts[i].price +
                    (allProducts[i].price * 21) / 100
                  ).toFixed(2)}</del>
                </p>
              </div>
              <div class="flex gap-4 items-between">
                <i 
                  class="fa-solid fa-cart-plus px-4 py-2 cursor-pointer hover:bg-gray-200 transition ease-linear text-sm bg-white shadow-sm shadow-gray-400 rounded-md"
                ></i>
                <button
                  class="bg-orange-500 text-sm text-white font-semibold py-2 px-16  rounded-md shadow-sm"
                >
                  Buy Now
                </button>
              </div>
            </div>`;
    products.appendChild(newProduct);
  }
  if (localStorage.getItem('carts')) {
    cart = JSON.parse(localStorage.getItem('carts'));
    addCartToHtml();
  }
}

document.addEventListener(
  "DOMContentLoaded",
  fetchProducts("https://fakestoreapi.com/products")
);
