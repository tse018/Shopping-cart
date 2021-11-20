/*************** Show / Hide Cart ***************/
const section = document.querySelector("section");
const showCartButton = document.getElementById("cart_items");

const sectionState = {
   showCart: false,
   notShowCart: true,
};

function updateView() {
   if (sectionState.showCart === true) {
      section.classList.remove("product_list"); // legger til og tar vekk klassen
   } else {
      section.classList.add("product_list");
   }
}

function onMenuButtonClick() {
   sectionState.showCart = !sectionState.showCart;
   updateView();
}

showCartButton.addEventListener("click", onMenuButtonClick);