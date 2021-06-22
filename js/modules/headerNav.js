export default function headerNav() {
  const nav = document.querySelector("header nav");
  const heroBanner = document.querySelector(".hero-banner");
  const middleBanner = heroBanner.clientHeight * 0.1;
  const buttonMenuMobile = document.querySelector(".header-menu-mobile");
  const headerNavLink = document.querySelector(".header-link");

  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollpos = window.pageYOffset;

    // if (prevScrollpos > currentScrollpos) {
    //   nav.style.top = "0px";
    // } else {
    //   nav.style.top = "-100px";
    // }

    prevScrollpos = currentScrollpos;

    if (currentScrollpos >= middleBanner) {
      nav.classList.add("isActive");
    } else {
      nav.classList.remove("isActive");
    }
  };

  buttonMenuMobile.addEventListener("click", () => {
    buttonMenuMobile.classList.toggle("isActive");
    headerNavLink.classList.toggle("isActive");
  });
}
