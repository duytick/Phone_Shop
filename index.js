$(document).ready(function(){
    //Owl-Carousel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1,
        loop: true,
    });
    //Top-sales owl-Carousel
    $(".owl-carousel").owlCarousel({
        dots: true,
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
          items:5 ,
        },
      },
    });


});