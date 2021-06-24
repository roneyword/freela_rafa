import scrollSmooth from "./modules/smooth_scroll.js";
import headerNav from "./modules/headerNav.js";
let headerHeight = document.querySelector("header").clientHeight;

headerNav();
scrollSmooth(headerHeight);

window.addEventListener("resize", () => {
  headerHeight = document.querySelector("header").clientHeight;
  scrollSmooth(headerHeight);
});
