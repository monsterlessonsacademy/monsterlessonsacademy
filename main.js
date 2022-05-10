const $toggler = document.querySelector(".toggler");
const $sidebar = document.querySelector(".sidebar");
const $main = document.querySelector(".main");
const $closeSidebarButton = document.querySelector(".closeSidebarButton");

$closeSidebarButton.addEventListener("click", () => {
  $sidebar.classList.remove("is-opened");
});

$toggler.addEventListener("click", () => {
  $sidebar.classList.toggle("is-opened");
});
