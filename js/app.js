const section = document.querySelector('section');
const cartButton = document.getElementById('cart_items');

const sectionState = {
   isVisible: false,
   isInvinsible: true
}

function updateView() {
   if(sectionState.isVisible === true) {
      section.classList.remove('product_list');
   } else {
      section.classList.add('product_list');
   }
}

function onMenuButtonClick() {
   sectionState.isVisible = !sectionState.isVisible;

   updateView()
}

cartButton.addEventListener('click', onMenuButtonClick)
