const section = document.querySelector("section");
const showCartButton = document.getElementById("cart_items");

const sectionState = {
   isVisible: false,
   isInvinsible: true,
};

function updateView() {
   if (sectionState.isVisible === true) {
      section.classList.remove("product_list");
   } else {
      section.classList.add("product_list");
   }
}

function onMenuButtonClick() {
   sectionState.isVisible = !sectionState.isVisible;
   updateView();
}

showCartButton.addEventListener("click", onMenuButtonClick);


// liste med alle produkter lagt til i handlekurven
/***************** Model ******************************/
const products = {
   productsInformation: [
      {
         id: 0,
         name: "Iphone 13",
         description: "productDescription",
         price: "12014",
         img: "assets/iphone 13.jpg"
      },
      {
         id: 1,
         name: "Samsung Galaxy Z fold3",
         description: "productDescription",
         price: 324423,
         img: "assets/iphone 13.jpg"
      },
      {
         id: 2,
         name: "iMac",
         description: "productDescription",
         price: 3244,
         img: "assets/iphone 13.jpg"
      },
      {
         id: 3,
         name: "Apple Watch",
         description: "productDescription",
         price: 32432,
         img: "assets/iphone 13.jpg"
      },
      {
         id: 4,
         name: "productName",
         description: "productDescription",
         price: 32423,
         img: "assets/iphone 13.jpg"
      },
      {
         id: 5,
         name: "productName",
         description: "productDescription",
         price: 2443,
         img: "assets/iphone 13.jpg"
      },
      {
         id: 6,
         name: "productName",
         description: "productDescription",
         price: 3424,
         img: "assets/iphone 13.jpg"
      },
      {
         id: 7,
         name: "productName",
         description: "productDescription",
         price: 3452,
         img: "assets/iphone 13.jpg"
      },
      {
         id: 8,
         name: "productName",
         description: "productDescription",
         price: 4323,
         img: "assets/iphone 13.jpg"
      },
      {
         id: 9,
         name: "productName",
         description: "productDescription",
         price: 4759,
         img: "assets/iphone 13.jpg"
      },
      {
         id: 10,
         name: "productName",
         description: "productDescription",
         price: 8927,
         img: "assets/iphone 13.jpg"
      },
      {
         id: 11,
         name: "productName",
         description: "productDescription",
         price: 7389,
         img: "assets/iphone 13.jpg"
      },
      {
         id: 12,
         name: "productName",
         description: "productDescription",
         price: 6734,
         img: ""
      },
      {
         id: 13,
         name: "productName",
         description: "productDescription",
         price: 6483,
         img: ""
      },
      {
         id: 14,
         name: "productName",
         description: "productDescription",
         price: 1849,
         img: ""
      },
      {
         id: 15,
         name: "productName",
         description: "productDescription",
         price: 4852,
         img: ""
      },
      {
         id: 16,
         name: "productName",
         description: "productDescription",
         price: 7832,
         img: ""
      },
      {
         id: 17,
         name: "productName",
         description: "productDescription",
         price: 7299,
         img: ""
      },
      {
         id: 18,
         name: "productName",
         description: "productDescription",
         price: 9128,
         img: ""
      },
      {
         id: 19,
         name: "productName",
         description: "productDescription",
         price: 2138,
         img: ""
      },
      {
         id: 20,
         name: "productName",
         description: "productDescription",
         price: 4939,
         img: ""
      }
   ]
};

/************** Controllers *********************/

let itemsInCart = []

// legge til produkter i listen itemsInCart
function addToCart(id) {
   if (itemsInCart.some((item) => item.id === id)) {
      changeNumbersOfSameProduct("plus", id);
   } else {
      let item = products.productsInformation.find(
         (item) => item.id === id
      );

      itemsInCart.push({
         ...item,
         numberOfUnits: 1,
      });
   }
   updateCart();
}

function removeItemFromCart(id) {
   itemsInCart = itemsInCart.filter((item) => item.id !== id);
   updateCart();
}

function countItemsAddedToCart() {
   let totalPrice = 0,
   totalItems = 0;

   itemsInCart.forEach((item) => {
      totalPrice += item.price * item.numberOfUnits;
      totalItems += item.numberOfUnits;
   });
}

function changeNumbersOfSameProduct(event, id) {
   itemsInCart = itemsInCart.map((item) => {
      let numberOfUnits = item.numberOfUnits;

      if (item.id === id) {
         if (event === "minus" && numberOfUnits > 1) {
            numberOfUnits--;
         } else if (event === "plus" && numberOfUnits < 1) {
            numberOfUnits++;
         }
      }

      return {
         ...item,
         numberOfUnits,
      };
   });
   updateCart();
}

function updateCart() {
   updateCartView();
   countItemsAddedToCart();
}


/************************************* From Model to View ***************************/

// viser / setter opp produkter

function product() {
   const productItems = document.querySelector(".products_container");

   productItems.innerHTML = "";
   products.productsInformation.forEach((product, addToCart) => {
      let productSection = document.createElement("section");

      let productImage = document.createElement("img");
      productImage.src = product.img;
      productImage.setAttribute("alt", "image of laptop");
      productSection.appendChild(productImage);

      let productTitle = document.createElement("h2");
      productTitle.innerText = product.name;
      productSection.appendChild(productTitle);

      let productDescription = document.createElement("p");
      productDescription.innerText = product.description;
      productSection.appendChild(productDescription);

      let productPrice = document.createElement("h2");
      productPrice.innerText = product.price;
      productSection.appendChild(productPrice);

      let addProductToCartButton = document.createElement("button");
      addProductToCartButton.className = "i fas fa-shopping-cart";
      addProductToCartButton.id = product.id, addToCart;
      productSection.appendChild(addProductToCartButton);

      productItems.appendChild(productSection);
   });
}

product();

// oppdaterer handlelisten
function updateCartView() {
   const section = document.querySelector("section");

   section.innerHTML = "";
   itemsInCart.forEach((item, updateCart ) => {
      let cartProducts = document.createElement("div");
      cartProducts.className = "cart_item";

      let cartProductImage = document.createElement("img");
      cartProductImage.src = item.image;
      cartProductImage.setAttribute("alt","bilde av ....");
      cartProducts.appendChild(cartProductImage);

      let cartProductTitle = document.createElement("h2");
      cartProductTitle.innerText = item.name;
      cartProducts.appendChild(cartProductTitle);

      let cartProductDescription = document.createElement("p");
      cartProductDescription.innerText = item.description;
      cartProducts.appendChild(cartProductDescription);

      let cartProductQuantity = document.createElement('h3');
      cartProductQuantity.innerText = item;
      cartProducts.appendChild(cartProductQuantity)

      let cartProductPrice = document.createElement("h3");
      cartProductPrice.innerText = item;
      cartProducts.appendChild(cartProductPrice);

      let dangerButton = document.createElement("button");
      dangerButton.className = "i fas fa-trash-alt";
      dangerButton.id = item, removeItemFromCart;
      cartProducts.appendChild(dangerButton);

      section.appendChild(cartProducts);
   });
}

/************************************** Add eventlistener ***************************/

let buttons = document.querySelectorAll(".fa-shopping-cart");

buttons.forEach((buttons) => {
   buttons.addEventListener("click", addToCart);
});

let removeButton = document.querySelectorAll(".fa-trash-alt");

removeButton.forEach((removeButton) => {
   removeButton.addEventListener("click", removeItemFromCart);
});


