$(document).ready(function () {
  var menuButton = $(".navbar__button");
  menuButton.on("click", function () {
    $(".info-menu_mobile").toggleClass("info-menu_mobile-visible");
  });

  // $("div.hisory-top__new").remove();
  // if ($(window).width() < 576) {
  //   $("div.hisory-top__new").remove();
  // }

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
          // dotsClass: "slider__pager",
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
          // dotsClass: "slider__pager",
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
          // dots: false,
          margin: 46,
          itemElement: "li",
          stageElement: "ul",
          // dotsClass: "slider__pager",
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
          margin: 20,
          itemElement: "li",
          stageElement: "ul",
          // dotsClass: "slider__pager",
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
          // dotsClass: "slider__pager",
          loop: true,
          nav: true,
          navText: ["", ""],
          // autoplay: true,
          owl2row: true,
        },
      },
    })
    .data("owlCarousel");

  const unpublishedSwiper = new Swiper(".unpublished__slider", {
    loop: false,
    slidesPerView: 5,
    spaceBetween: 30,
    navigation: {
      nextEl: ".unpublished__button_next",
      prevEl: ".unpublished__button_prev",
      disabledClass: "unpublished-slider__disabled",
    },
    keyboard: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      // when window width is >= 480px
      992: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  var modalButton = $("[data-toggle=modal]");
  var closemodalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closemodalButton.on("click", closeModal);

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }

  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Введите имя",
          minlength: "Не менее 2 букв",
        },
        email: {
          required: "Введите email",
          email: "Формат: name@domain.com",
        },
        emailstwo: {
          required: "Введите email",
          email: "Формат: name@domain.com",
        },
        phone: {
          required: "Введите номер телефона",
          minlength: "Не менее 10 символов",
        },
      },
    });
  });

  $(".phone").mask("+7 (999) 999-99-99");
});
//убрать комментарии
$(document).keydown(function (e) {
  var code = e.keyCode || e.which;
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  if (code == 27) modalDialog.removeClass("modal__dialog--visible");
  if (code == 27) modalOverlay.removeClass("modal__overlay--visible");
});
