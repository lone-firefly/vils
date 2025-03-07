const btnsPopup = document.querySelectorAll(".items__gr");
const tables = document.querySelectorAll(".items__table");
// const groups = document.querySelectorAll(".products__main-gr");
const btnProducts = document.querySelector(".links-small__products");
const btnSectors = document.querySelector(".links-small__sectors");
const products = document.querySelector(".products");
const sectors = document.querySelector(".sectors");

function hideTable() {
  const la = this.nextElementSibling;
  la.classList.toggle("items__table_hide");

  const parent = this.closest(".items__main-gr"); // обводка
  parent.classList.toggle("items__main-gr_open");
}

// сворачивалка для айтемов
for (let i = 0; i < btnsPopup.length; ++i) {
  const me = btnsPopup[i];
  me.addEventListener("click", hideTable);
}

// кнопки сортировки материал/отрасль
btnProducts.addEventListener("click", function () {
  btnProducts.classList.add("btn_active");
  btnSectors.classList.remove("btn_active");
  products.classList.remove("products_hide");
  sectors.classList.add("sectors_hide");
});

btnSectors.addEventListener("click", function () {
  btnSectors.classList.add("btn_active");
  btnProducts.classList.remove("btn_active");
  sectors.classList.remove("sectors_hide");
  products.classList.add("products_hide");
});
