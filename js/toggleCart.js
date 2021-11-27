/*************** Show / Hide Cart ***************/
const section = document.querySelector("section");
const showCartButton = document.getElementById("cart_items");

const sectionState = {
   isVisible: false,
   isInvinsible: true,
};

function updateView() {
   if (sectionState.isVisible === true) {
      section.classList.remove("product_list"); // legger til og tar vekk klassen
   } else {
      section.classList.add("product_list");
   }
}

function onMenuButtonClick() {
   sectionState.isVisible = !sectionState.isVisible;
   updateView();
}

showCartButton.addEventListener("click", onMenuButtonClick);