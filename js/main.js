$(document).ready(function () {
  var menuButton = $(".navbar__button");
  menuButton.on("click", function () {
    $(".info-menu_mobile").toggleClass("info-menu_mobile-visible");
  });

  // $(".catalog__slider").slick({
  //   infinite: true,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  //   // rows: 2,
  //   nextArrow: $(".catalog-slider__button--next"),
  //   prevArrow: $(".catalog-slider__button--prev"),
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         rows: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         rows: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         rows: 2,
  //       },
  //     },
  //   ],
  // });

  // const catalogSwiper = new Swiper(".catalog__slider", {
  //   // Optional parameters
  //   loop: true,
  //   slidesPerView: 4,
  //   slidesPerColumn: 1,
  //   spaceBetween: 26,
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: ".catalog-slider__button--next",
  //   },
  //   keyboard: true,
  // });

  var owl = $(".owl-carousel")
    .owlCarousel({
      responsive: {
        1200: {
          items: 4,
          slideSpeed: 500,
          autoplayTimeout: 4500,
          mouseDrag: false,
          singleItem: true,
          // dots: true,
          margin: 26,
          itemElement: "li",
          stageElement: "ul",
          dotsClass: "slider__pager",
          loop: true,
          // autoplay: true,
          nav: true,
          navText: ["", ""],
          // owl2row: true,
        },
        992: {
          items: 2,
          slideSpeed: 500,
          // autoplay: true,
          autoplayTimeout: 4500,
          mouseDrag: false,
          singleItem: true,
          // dots: true,
          margin: 46,
          itemElement: "li",
          stageElement: "ul",
          dotsClass: "slider__pager",
          loop: true,
          nav: true,
          navText: ["", ""],
          // autoplay: true,
          owl2row: true,
        },

        768: {
          items: 2,
          slideSpeed: 500,
          // autoplay: true,
          autoplayTimeout: 4500,
          mouseDrag: false,
          singleItem: true,
          // dots: true,
          margin: 46,
          itemElement: "li",
          stageElement: "ul",
          dotsClass: "slider__pager",
          loop: true,
          nav: true,
          navText: ["", ""],
          // autoplay: true,
          owl2row: true,
        },
        576: {
          items: 2,
          slideSpeed: 500,
          // autoplay: true,
          autoplayTimeout: 4500,
          mouseDrag: false,
          singleItem: true,
          // dots: true,
          margin: 46,
          itemElement: "li",
          stageElement: "ul",
          dotsClass: "slider__pager",
          loop: true,
          nav: true,
          navText: ["", ""],
          // autoplay: true,
          owl2row: true,
        },
        320: {
          items: 2,
          slideSpeed: 500,
          // autoplay: true,
          autoplayTimeout: 4500,
          mouseDrag: false,
          singleItem: true,
          // dots: true,
          margin: 10,
          itemElement: "li",
          stageElement: "ul",
          dotsClass: "slider__pager",
          loop: true,
          nav: true,
          navText: ["", ""],
          // autoplay: true,
          owl2row: true,
        },
      },
    })
    .data("owlCarousel");
});
