/***************** Model ******************************/
const products = {
   productInformation: [
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


/***************** Controllers ************************/
function addToCart(id) {
   if (itemsInCart.some((item) => item.id === id)) {
      changeNumbersOfSameProduct("plus", id);
   } else {
      let item = products.productsInformation.find((item) => item.id === id);

      itemsInCart.push({
         ...item,
         numberOfUnits: 1,
      });
   }

   updateCart()
}



function updateCart() {
}