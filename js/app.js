/***************** Model ******************************/
const products = {
   productsInformation: [
      {
         id: 0,
         name: "Iphone 13 Pro",
         description: "Smarttelefon, 6.1 Super Retina XDR-skjerm, 12 + 12 + 12MP Kamera, IP68, 56",
         price: 13590,
         img: "assets/iphone 13 Pro.jpg",
      },
      {
         id: 1,
         name: "Samsung Galaxy Z fold3",
         description: "Smarttelefon, 7.6 Dynamic AMOLED 2x skjerm, 12GB RAM, 12+12+12+10MP Kamera",
         price: 20490,
         img: "assets/samsung.jpg"
      },
      {
         id: 2,
         name: "Iphone 13",
         description: "Smarttelefon, 6.1 Super Retina XDR-skjerm, 12+12MP Kamera, IP68, 5G",
         price: 9790,
         img: "assets/Iphone 13.jpg"
      },
      {
         id: 3,
         name: "Apple Watch",
         description: "Hvit Aluminium Apple Watch Series 3 GPS",
         price: 32432,
         img: "assets/Apple Watch.jpg"
      },
      {
         id: 4,
         name: "Samsung Galaxy A12 LTE",
         description: "Smarttelefon, 6.5 Infinity-O skjerm, 12+12+8+32MP kamera, Android",
         price: 6990,
         img: "assets/Samsung2.jpg"
      },
      {
         id: 5,
         name: "MacBook Air (2020)",
         description: "Apple 8-Core M1 CPU, 8GB RAM, 256GB SSD, Apple 7-Core GPU",
         price: 11490,
         img: "assets/Macbook Air.jpg"
      },
      {
         id: 6,
         name: "MacBook Pro 13 (2020) ",
         description: "Apple M1 8-Core CPU, 16GB RAM, 1TB SSD, Apple 8-Core GPU",
         price: 22990,
         img: "assets/MacBook Pro.jpg"
      },
      {
         id: 7,
         name: "Acer Predator Helios 300",
         description: "GeForce RTX 3060, Core i5-10300H, 16GB RAM, 512 GB SSD, Windows 10 Home",
         price: 13490,
         img: "assets/Bærbar.jpg"
      },
      {
         id: 8,
         name: "Komplett a115 Epic Gaming PC",
         description: "Radeon RX 6600, Ryzen 5 5600G, 16GB, 1TB, Windows 11",
         price: 16499,
         img: "assets/Gaming PC-1.jpg"
      },
      {
         id: 9,
         name: "Playstation 5",
         description: "DualSense, 3D lyd, Adaptive triggere, Ultra-high Speed SSD og Ray Tracing",
         price: 5999,
         img: "assets/Playstation 5.jpg"
      },
      {
         id: 10,
         name: "Asus 32 gamingskjerm",
         description: "2560x1440 IPS, 175hz, 1ms, 1000:1m HDR600, G-Sync Compatible, 2xHDMI/DP",
         price: 6495,
         img: "assets/Gaming skjerm.jpg"
      },
      {
         id: 11,
         name: "Samsung 32 Curved gamingskjerm Odyssey G7",
         description: "2560X1440 VA, 240hz, 1ms, 3000:1, Quantum Dot, G-Sync Comptaible, HDMI/2xDP",
         price: 6488,
         img: "assets/Gaming skjerm 2.jpg"
      },
      {
         id: 12,
         name: "Noblechairs HERO TX Gaming Chair",
         description: "Maks vekt 150kg, klasse 4 gassløfter, 5D armlener, stoffmateriale",
         price: 4690,
         img: "assets/Gaming Stol 1.jpg"
      },
      {
         id: 13,
         name: "Razer Iskur gamingstol",
         description: "Maks vekt 136kg, klasse 4 gassløfter, 4D armlener",
         price: 5990,
         img: "assets/Gaming Stol 2.jpg"
      },
      {
         id: 14,
         name: "Svive Lynx Tier 3 Gamingstol Sort M",
         description: "Maks vekt 150kg, klasse 4 gassløfter, vinkeljustering, 4D armlener, medium",
         price: 2990,
         img: "assets/Gaming Stol 3.jpg"
      },
      {
         id: 15,
         name: "Garmin Fenix 6 Pro sporsklokke 47mm",
         description: "1.3 skjerm, GPS, BT, Wifi, optil 14 dagers batteritid, 32GB",
         price: 5495,
         img: "assets/klokke.jpg"
      },
      {
         id: 16,
         name: "Shure AONIC 50 Trådløse og støyreduserende hodetelefoner",
         description: "Studiokvalitet, USB-C, justerbar støyreduksjon, Bluetooth 5, 20t batteritid",
         price: 2990,
         img: "assets/Hodetelefoner.jpg"
      },
      {
         id: 17,
         name: "Glorious Model D Gaming Mus Glossy Sort",
         description: "USB, 6 programmerbare knapper, 12000 DPI, RGB, 3360 sensor, Gaming mus",
         price: 639,
         img: "assets/Gaming mus 2.jpg"
      },
      {
         id: 18,
         name: "Steelseries Apex 7 Gaming Tastatur ",
         description: "USB pass-through, nordisk, blue switches, RGB, mekanisk gaming tastatur",
         price: 1990,
         img: "assets/Tastatur.jpg"
      },
      {
         id: 19,
         name: "Samsung 85 LED 8K Google TV XR85Z9J",
         description: "BRAVIA XR, Master Series, 8K@60hz, 4K 120 Hz Gaming TV, HDR, Smart TV, HDMI 2.1",
         price: 99999,
         img: "assets/insane TV.jpg"
      },
      {
         id: 20,
         name: "Komplett Epic iCUE Gaming PC - RTX 3090",
         description: "Geforce RTX 3090, Core-i9-11900KF, 2TB, Windows 11 Home",
         price: 54999,
         img: "assets/insane PC.jpg"
      }
   ]
};

/******************** Controllers ************************/
/* tom liste som skal holde styr på handlekurven */
const itemsInCart = [];

/*
   variablen item ved bruk av array metoden find skal gå gjennom produkt listen og hvis det er en id match
   så skal den varen bli lagt til i itemsInCart listen vår og updaterer handlekurven
*/

function addToCart(event) {
   const item = products.productsInformation.find((product) => product.id == event);

   itemsInCart.push(item);

   updateCartView(itemsInCart);
}

// fjerner varer hvis det er en match med vare id som ble lagt til i handlekurven, og tas vekk 1 om gangen 
function removeItemFromCart(event) {
   const item  = itemsInCart.findIndex((item) => item.id == event);

   // take away one item 1 at the time 
   itemsInCart.splice(item, 1); 

   updateCartView(itemsInCart);
}

/************************************* Fra Model til View ***************************/
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

      productSection.innerText = "";
      productDescription.innerText = product.description;
      productTitle.innerText = product.name;
      productPrice.innerText = product.price + ",-";

      productImage.src = product.img;

      addProductToCartButton.className = "i fas fa-shopping-cart";

      addProductToCartButton.dataset.add = product.id;

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

// oppdaterer handlelisten + let totalpris og let total varer som skal holde styr på pris og antall varer
function updateCartView(itemsInCart) {
   const productList = document.querySelector(".shopping-cart");
   let totalPrice = 0;
   let totalItems = 0;

   productList.innerText = "";

   itemsInCart.forEach((item) => {
      const cartProducts = document.createElement("div");
      const cartProductImage = document.createElement("img");
      const cartProductTitle = document.createElement("h2");
      const cartProductPrice = document.createElement("h3");
      const removeButton = document.createElement("button");

      totalItems++
      totalPrice += item.price;

      cartProductImage.src = item.img;

      cartProductTitle.innerText = item.name;
      cartProductPrice.innerText = item.price + ",-";

      cartProducts.className = "cart_item";
      removeButton.className = "i fas fa-trash-alt";

      removeButton.dataset.remove = item.id;

      cartProductImage.setAttribute("alt","bilde av " + item.name);
      cartProductTitle.setAttribute("aria-label", "produktnavn " + item.name);
      cartProductPrice.setAttribute("aria-label", item.name + " koster " + item.price + " kr");
      removeButton.setAttribute("aria-label", "ta vekk " + item.name + " fra handlekurven");

      cartProducts.appendChild(cartProductImage);
      cartProducts.appendChild(cartProductTitle);
      cartProducts.appendChild(cartProductPrice);
      cartProducts.appendChild(removeButton);
      productList.appendChild(cartProducts);

      /************** Add eventListener *************/
      removeButton.addEventListener("click", event => {
         removeItemFromCart(event.target.dataset.remove);
      });
      /**********************************************/
   });

   /****** utsiden av forEach funksjonen, så dette ikke blir skrevet ut flere ganger *********/
   const cartTotalItems = document.createElement("h2");
   const cartTotalPrice = document.createElement("h2");

   cartTotalItems.innerText = "Total items" + ": " + totalItems;
   cartTotalPrice.innerText = "Total sum " + "= " + totalPrice + ",-";

   cartTotalItems.className = "total_items";
   cartTotalPrice.className = "total_price";

   cartTotalItems.setAttribute("aria-label", "total varer lagt til i handlekurven " + totalItems);
   cartTotalPrice.setAttribute("aria-label", "total prisen av produktene lagt til i handlekurven er " + totalPrice + "kr");

   productList.appendChild(cartTotalItems);
   productList.appendChild(cartTotalPrice);
}

updateCartView(itemsInCart);
