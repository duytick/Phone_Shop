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

  //isotope filter
  var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows",
  });

  //filter items on button click
  $(".button-group").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });

  //New Phone owl-Carousel
  $(" #new-phones .owl-carousel").owlCarousel({
    dots: true,
    nav: false,
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

  $("#blogs .owl-carousel").owlCarousel({
    dots: true,
    nav: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });
});
