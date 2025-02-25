baguetteBox.run(".gallery");

const btnPopup = document.querySelector(".lic__btn-popup");
const table = document.querySelector(".lic__card");

function popupMenu() {
  table.classList.toggle("lic__card_hide");
}

btnPopup.addEventListener("click", function () {
  popupMenu();
});
