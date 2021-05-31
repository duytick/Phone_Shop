$(document).ready(function () {
  //Owl-Carousel
  $("#banner-area .owl-carousel").owlCarousel({
    dots: true,
    items: 1,
    loop: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
  });
  //Top-sales owl-Carousel
  $("#top-sale .owl-carousel").owlCarousel({
    dots: false,
    nav: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 5,
      },
    },
  });


  
});
