/***************** Model ******************************/
const products = {
   productsInformation: [
      {
         id: 0,
         name: "Iphone 13 Pro",
         description: "Iphone 13 Pro, newest ndsfknsklfklsdfdsjkfnkdlsnfkldsfkls",
         price: 12014,
         img: "assets/iphone 13 Pro.jpg",
         quantity: 1,
      },
      {
         id: 1,
         name: "Samsung Galaxy Z fold3",
         description: "productDescription",
         price: 32443,
         img: "assets/samsung.jpg"
      },
      {
         id: 2,
         name: "Iphone 13",
         description: "productDescription",
         price: 3244,
         img: "assets/Iphone 13.jpg"
      },
      {
         id: 3,
         name: "Apple Watch",
         description: "productDescription",
         price: 32432,
         img: "assets/Apple Watch.jpg"
      },
      {
         id: 4,
         name: "Samsung2",
         description: "productDescription",
         price: 32423,
         img: "assets/Samsung2.jpg"
      },
      {
         id: 5,
         name: "MacBook Air",
         description: "productDescription",
         price: 2443,
         img: "assets/Macbook Air.jpg"
      },
      {
         id: 6,
         name: "MacBook Pro",
         description: "productDescription",
         price: 3424,
         img: "assets/MacBook Pro.jpg"
      },
      {
         id: 7,
         name: "Bærbar PC",
         description: "productDescription",
         price: 3452,
         img: "assets/Bærbar.jpg"
      },
      {
         id: 8,
         name: "Gaming pc",
         description: "productDescription",
         price: 4323,
         img: "assets/Gaming PC-1.jpg"
      },
      {
         id: 9,
         name: "Playstation 5",
         description: "productDescription",
         price: 4759,
         img: "assets/Playstation 5.jpg"
      },
      {
         id: 10,
         name: "Gaming skjerm",
         description: "productDescription",
         price: 8927,
         img: "assets/Gaming skjerm.jpg"
      },
      {
         id: 11,
         name: "Gaming skjerm",
         description: "productDescription",
         price: 7389,
         img: "assets/Gaming skjerm 2.jpg"
      },
      {
         id: 12,
         name: "Gaming Stol 1",
         description: "productDescription",
         price: 6734,
         img: "assets/Gaming Stol 1.jpg"
      },
      {
         id: 13,
         name: "Gaming Stol 2",
         description: "productDescription",
         price: 6483,
         img: "assets/Gaming Stol 2.jpg"
      },
      {
         id: 14,
         name: "Gaming Stol 3",
         description: "productDescription",
         price: 1849,
         img: "assets/Gaming Stol 3.jpg"
      },
      {
         id: 15,
         name: "productName",
         description: "productDescription",
         price: 4852,
         img: "assets/klokke.jpg"
      },
      {
         id: 16,
         name: "Hodetelefon",
         description: "productDescription",
         price: 7832,
         img: "assets/Hodetelefoner.jpg"
      },
      {
         id: 17,
         name: "Gaming Mus",
         description: "productDescription",
         price: 7299,
         img: "assets/Gaming mus 2.jpg"
      },
      {
         id: 18,
         name: "Gaming Tastatur",
         description: "productDescription",
         price: 9128,
         img: "assets/Tastatur.jpg"
      },
      {
         id: 19,
         name: "Expensive TV",
         description: "productDescription",
         price: 81038,
         img: "assets/insane TV.jpg"
      },
      {
         id: 20,
         name: "Insane PC",
         description: "productDescription",
         price: 940939,
         img: "assets/insane PC.jpg"
      }
   ]
};

/******************** Controllers ************************/
/* empty array to keep track of the cart items */
const itemsInCart = [];

/*
   variable item using find method to search for product.id and if its a match,
   push method to add into the empty array called itemsInCart
*/

function addToCart(id) {
   const item = products.productsInformation.find((product) => product.id == id);

   itemsInCart.push(item);

   updateCartView(itemsInCart);
}

// remove item from itemsInCart array whenever id matches
function removeItemFromCart(id) {
   const item  = itemsInCart.findIndex((item) => item.id == id);

   // take away one item 1 at the time 
   itemsInCart.splice(item, 1); 

   updateCartView(itemsInCart);
}

/************************************* From Model to View ***************************/
// viser / setter opp produkter
function product() {
   const productItems = document.querySelector(".products_container");
   
   products.productsInformation.forEach((product) => {
      const productSection = document.createElement("section");
      const productImage = document.createElement("img");
      const productTitle = document.createElement("h2");
      const productDescription = document.createElement("p");
      const productPrice = document.createElement("h2");
      const addProductToCartButton = document.createElement("button");

      addProductToCartButton.className = "i fas fa-shopping-cart";

      addProductToCartButton.dataset.add = product.id;

      productSection.innerText = "";
      productDescription.innerText = product.description;
      productTitle.innerText = product.name;
      productPrice.innerText = product.price + ",-";

      productImage.src = product.img;

      productImage.setAttribute("alt", "bilde av " + product.name);
      productTitle.setAttribute("aria-label", "produktnavn " + product.name);
      productDescription.setAttribute("aria-label", "beskrivelse av " + product.name + product.description);
      productPrice.setAttribute("aria-label", product.name + " koster " + product.price + "kr");
      addProductToCartButton.setAttribute("aria-label", "legg til " + product.name + " i handlekurven");


      productSection.appendChild(productImage);
      productSection.appendChild(productTitle);
      productSection.appendChild(productDescription);
      productSection.appendChild(productPrice);
      productSection.appendChild(addProductToCartButton);
      productItems.appendChild(productSection);

      /************** Add eventlistener *********************/
      addProductToCartButton.addEventListener("click", event => {
         addToCart(event.target.dataset.add);
      });
      /******************************************************/
   });
}
product();


/************************ UpdateView **********************/

// oppdaterer handlelisten
function updateCartView(itemsInCart) {
   const productList = document.querySelector(".shopping-cart");
   let totalPrice = 0;
   let totalItems = 0;

   productList.innerText = "";

   itemsInCart.forEach((item) => {
      totalItems++
      totalPrice += item.price;

      const cartProducts = document.createElement("div");
      const cartProductImage = document.createElement("img");
      const cartProductTitle = document.createElement("h2");
      const cartProductPrice = document.createElement("h3");
      const removeButton = document.createElement("button");

      cartProducts.className = "cart_item";
      removeButton.className = "i fas fa-trash-alt";

      removeButton.dataset.remove = item.id;

      cartProductImage.src = item.img;

      cartProductTitle.innerText = item.name;
      cartProductPrice.innerText = item.price + ",-";

      cartProductImage.setAttribute("alt","bilde av " + item.name);
      cartProductTitle.setAttribute("aria-label", "produktnavn " + item.name);
      cartProductPrice.setAttribute("aria-label", item.name + " koster " + item.price + " kr");
      removeButton.setAttribute("aria-label", "ta vekk " + item.name + " fra handlekurven");

      cartProducts.appendChild(cartProductPrice);
      cartProducts.appendChild(cartProductImage);
      cartProducts.appendChild(cartProductTitle);
      cartProducts.appendChild(removeButton);
      productList.appendChild(cartProducts);

      /************** Add eventListener *************/
      removeButton.addEventListener("click", event => {
         removeItemFromCart(event.target.dataset.remove);
      });
      /**********************************************/
   });

   /****** Outside the forEach scope so it won´t print this code multiple times *********/
   const cartTotalItems = document.createElement("h2");
   const cartTotalPrice = document.createElement("h2");

   cartTotalItems.className = "total_items";
   cartTotalPrice.className = "total_price";

   cartTotalItems.innerText = "Total items" + ": " + totalItems;
   cartTotalPrice.innerText = "Total sum " + "= " + totalPrice + ",-";

   cartTotalItems.setAttribute("aria-label", "total varer lagt til i handlekurven " + totalItems);
   cartTotalPrice.setAttribute("aria-label", "total prisen av produktene lagt til i handlekurven er " + totalPrice + "kr");

   productList.appendChild(cartTotalItems);
   productList.appendChild(cartTotalPrice);
}

updateCartView(itemsInCart);
