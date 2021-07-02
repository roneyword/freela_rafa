export default function headerNav() {
  const nav = document.querySelector("header nav");
  const heroBanner =
    document.querySelector(".hero-banner") ||
    document.querySelector(".hero-banner-default");
  const middleBanner = heroBanner.clientHeight * 0.1;
  const buttonMenuMobile = document.querySelector(".header-menu-mobile");
  const headerNavLink = document.querySelector(".header-link");

  let prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    let currentScrollpos = window.pageYOffset;

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
