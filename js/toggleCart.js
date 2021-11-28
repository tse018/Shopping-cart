/*************** Show / Hide Cart ***************/
const section = document.querySelector("section");
const showCartButton = document.getElementById("cart_items");

const sectionState = {
   clicked: false,
   notClicked: true,
};

function updateView() {
   if (sectionState.clicked === true) {
      section.classList.remove("product_list"); // legger til og tar vekk klassen
   } else {
      section.classList.add("product_list");
   }
}

function onMenuButtonClick() {
   sectionState.clicked = !sectionState.clicked;
   updateView();
}

showCartButton.addEventListener("click", onMenuButtonClick);