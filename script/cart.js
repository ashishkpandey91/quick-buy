let iconCartSpan = document.querySelector("#iconCartSpan");
let cart = [];
setTimeout(() => {
  console.log("all product ", window.ALL_PRODUCTS);
  let products = document.querySelector("#products");
  console.log(products);
  //event listener
  products.addEventListener("click", function (event) {
    let positionClick = event.target;
    if (positionClick.classList.contains("fa-cart-plus")) {
      let product_id =
        positionClick.parentElement.parentElement.parentElement.dataset.id;
      addToCart(product_id);
    }
  });
}, 3000);

function addToCart(product_id) {
  let positionThisProductInCart = cart.findIndex(
    (value) => value.product_id == product_id
  );

  if (cart.length <= 0) {
    cart = [
      {
        product_id: product_id,
        quantity: 1,
      },
    ];
  } else if (positionThisProductInCart < 0) {
    cart.push({
      product_id: product_id,
      quantity: 1,
    });
  } else {
    cart[positionThisProductInCart].quantity =
      cart[positionThisProductInCart].quantity + 1;
  }
  console.log(cart);
  addCartToHtml();
  addCartToMemory();
}
let cartParent = document.querySelector("#cartParent");

function addCartToHtml() {
  let totalQuantity = 0;
  cartParent.innerHTML = "";
  if (cart.length > 0) {
    cart.forEach(function (cart) {
      totalQuantity = totalQuantity + cart.quantity;
      let newCart = document.createElement("div");
      newCart.dataset.id = cart.product_id;
      let positionProduct = window.ALL_PRODUCTS.findIndex(
        (value) => value.id == cart.product_id
      );
      let info = window.ALL_PRODUCTS[positionProduct];
      newCart.innerHTML = `
    <div class="bg-white shadow-sm shadow-gray-400 rounded-md mb-3">
      <div class="flex items-start gap-4 p-3">
        <div
          class="bg-white shadow-sm shadow-gray-400 rounded-md w-20 px-3 py-3"
        >
          <img
            class="mix-blend-multiply"
            src="${info.image}"
            alt=""
          />
        </div>
        <div class="flex flex-col justify-start">
          <h3 class="text-base font-semibold">${info.title}</h3>
          <div class="flex items-center gap-2 text-sm">
            <div class="flex gap-2 relative overflow-hidden">
              <i class="fa-regular fa-star text-yellow-500"></i>
              <i class="fa-regular fa-star text-yellow-500"></i>
              <i class="fa-regular fa-star text-yellow-500"></i>
              <i class="fa-regular fa-star text-yellow-500"></i>
              <i class="fa-regular fa-star text-yellow-500"></i>
              <div style="width:${Number(info.rating.rate) * 20}%;"
                class="absolute top-0 left-0 flex gap-2 overflow-hidden"
              >
                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
                <i class="fa-solid fa-star text-yellow-500"></i>
              </div>
            </div>
            <span>(${info.rating.count})</span>
          </div>
          <h3 class="text-base font-semibold">₹ ${
            info.price * cart.quantity
          }</h3>
          <div class="flex items-center gap-3 my-3">
            <p
              class=" minus px-3 py-1 text-base font-semibold cursor-pointer hover:bg-gray-200 transition ease-linear bg-white shadow-sm shadow-gray-400 rounded-md"
            >
              -
            </p>
            <p class="text-base font-semibold">${cart.quantity}</p>
            <p
              class=" plus px-3 py-1 text-base font-semibold cursor-pointer hover:bg-gray-200 transition ease-linear bg-white shadow-sm shadow-gray-400 rounded-md"
            >
              +
            </p>
          </div>
        </div>
      </div>

      <div
        class="w-full flex md:flex-col items-center justify-end md:relative  md:right-1 md:items-end md:justify-center gap-4 pr-7 pb-7"
      >
        <p
          class="bg-white shadow-sm shadow-gray-400 text-sm font-semibold py-2 px-3 rounded-md w-28 cursor-pointer hover:bg-gray-100 transition ease-linear"
        >
          <i class="fa-solid fa-trash px-2"></i>Delete
        </p>
        <p
          class="bg-orange-500 text-sm font-semibold py-2 px-3 rounded-md w-28 text-white cursor-pointer hover:bg-orange-600 transition ease-linear"
        >
          <i class="fa-solid fa-bolt px-2"></i>Buy Now
        </p>
      </div>
    </div>`;
      cartParent.appendChild(newCart);
    });
    let yourCart = document.querySelector("#yourCart");
    iconCartSpan.innerHTML = totalQuantity;
    yourCart.innerHTML = `Your Cart (${totalQuantity})`;

    let totalPrice = 0;
    let DetailsProductQuantity = (document.querySelector(
      "#DetailsProductQuantity"
    ).innerHTML = `Price (${totalQuantity})`);
    for (let i = 0; i < cart.length; i++) {
      totalPrice =
        totalPrice +
        window.ALL_PRODUCTS[cart[i].product_id - 1].price * cart[i].quantity;
    }
    let DetailsPrice = (document.querySelector(
      "#DetailsPrice"
    ).innerHTML = `₹${totalPrice.toFixed(2)}`);
    let DetailsDiscount = (document.querySelector(
      "#DetailsDiscount"
    ).innerHTML = `₹${((totalPrice * 21) / 100).toFixed(2)}`);
    let DetailsTotalAmount = (document.querySelector(
      "#DetailsTotalAmount"
    ).innerHTML = `₹${(totalPrice + 40 - ((totalPrice * 21) / 100)).toFixed(2)}`);
    let DetailsPlaceOrder = (document.querySelector(
      "#DetailsPlaceOrder"
    ).innerHTML = `₹${(totalPrice + 40 - ((totalPrice * 21) / 100)).toFixed(2)}`);
  }
};
function addCartToMemory() {
  localStorage.setItem("carts", JSON.stringify(cart));
}

cartParent.addEventListener("click", function (event) {
  let positionClick = event.target;
  if (
    positionClick.classList.contains("minus") ||
    positionClick.classList.contains("plus")
  ) {
    let product_id =
      positionClick.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.id;
      let type = 'minus';
      if ( positionClick.classList.contains("plus")) {
        type = 'plus'
      }
      changeQuantity(product_id, type);
  }
});

function changeQuantity(product_id, type) {
  let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
  if (positionItemInCart >= 0) {
    switch (type) {
      case 'plus':
        cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
        break;
    
      default:
      let valueChange = cart[positionItemInCart].quantity - 1;
      if (valueChange > 0) {
         cart[positionItemInCart].quantity = valueChange;
      }else{
      cart.splice(positionItemInCart, 1);
      }
        break;
    }
  }
  addCartToMemory();
  addCartToHtml();
};
