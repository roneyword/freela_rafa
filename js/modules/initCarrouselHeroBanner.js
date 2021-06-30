export default function initCarrouselHeroBanner() {
  const dataSlider = document.querySelectorAll("[data-slider]");
  const baseURL = "../../../../assets/img/hero_banner/";

  dataSlider.forEach((slider) => {
    const dataSetSlide = slider.dataset.slider;
    slider.style.backgroundImage = `url(${baseURL + dataSetSlide})`;
  });
}
