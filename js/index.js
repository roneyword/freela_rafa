import headerNav from "./modules/headerNav.js";
let headerHeight = document.querySelector("header").clientHeight;

headerNav();

window.addEventListener("resize", () => {
  headerHeight = document.querySelector("header").clientHeight;
  scrollSmooth(headerHeight);
});
