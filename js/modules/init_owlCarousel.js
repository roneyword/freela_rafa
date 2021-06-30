$(document).ready(function () {
  $("#hero-banner").owlCarousel({
    loop: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  $("#testimonial-team").owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 20,
      },
      425: {
        items: 2,
        margin: 20,
      },
      768: {
        items: 3,
        margin: 20,
      },
      1023: {
        items: 4,
        margin: 40,
      },
    },
  });

  $("#testimonial-comments").owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 40,
      },
    },
  });

  $("#company-card").owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 40,
      },
      563: {
        items: 2,
        margin: 40,
      },
      768: {
        items: 3,
        margin: 40,
      },
      1024: {
        items: 4,
        margin: 40,
      },
      1366: {
        items: 5,
        margin: 40,
      },
    },
  });
});
