/***************** Model ******************************/
const products = {
   productsInformation: [
      {
         id: 0,
         name: "Iphone 13 Pro",
         description: "Iphone 13 Pro.",
         price: "12014,-",
         img: "assets/iphone 13 Pro.jpg"
      },
      {
         id: 1,
         name: "Samsung Galaxy Z fold3",
         description: "productDescription",
         price: 324423,
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

let itemsInCart = [];

function addToCart(id) {

   if (itemsInCart.some((item) => item.id === id)) {
      changeNumbersOfSameProduct("plus", id);
   } else {
      const item = products.productsInformation.find((product) => product.id === id)
      
      itemsInCart.push({
         ...item,
         numberOfUnits: 1,
      });
   }
}

