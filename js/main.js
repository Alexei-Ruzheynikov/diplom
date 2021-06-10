$(document).ready(function () {
  $(".navbar .navbar__container .navbar-wrap ul li a").click(function () {
    var element = $(this).attr("href");
    var dist = $(element).offset().top;
    $("html, body").animate({ scrollTop: dist }, 1000);
    return false;
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });

  $("#toTop").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
  });

  $(window).scroll(function () {
    $("section[id]").each(function () {
      var id = $(this).attr("id");
      if ($(this).offset().top - 121 < $(window).scrollTop()) {
        $(".navbar .navbar__container .navbar-wrap ul li a").removeClass(
          "active"
        );
        $(
          '.header .navbar__container .navbar-wrap ul li a[href="#' + id + '"]'
        ).addClass("active");
      }
    });
  });

  var menuButton = $(".navbar__button");
  menuButton.on("click", function () {
    $(".info-menu_mobile").toggleClass("info-menu_mobile-visible");
  });

  var menuButtonLink = $(".info-menu__link");
  menuButtonLink.on("click", function () {
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
        slidesPerView: 2,
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
  var closemodalClick = $(".modal__overlay");
  closemodalClick.on("click", closeModal);
  // var hiddenScroll = $("[data-toggle=modal]");
  // hiddenScroll.on("body").addClass(".modal-open");
  // modalButton.on("click", $("body").toggleClass("lock"));
  $("[data-toggle=modal]").click(function () {
    $("body").addClass("lock");
    return false;
  });
  // $(".info-menu_mobile").click(function () {
  //   $("info-menu_mobile").toggleClass("info-menu_mobile-visible");
  //   return false;
  // });
  $(".modal__close").click(function () {
    $("body").toggleClass("lock");
    return false;
  });
  $(".modal__overlay").click(function () {
    $("body").toggleClass("lock");
    return false;
  });
  // $(".history-medium__icon").click(function () {
  //   $("body").addClass("lock");
  //   return false;
  // });
  // $(".history-bottom__icon").click(function () {
  //   $("body").addClass("lock");
  //   return false;
  // });
  // $(".navbar__button").click(function () {
  //   $("body").toggleClass("lock");
  //   return false;
  // });
  $("#advice-1").click(function () {
    $("#advice-1").toggleClass("advice-like__img_red");
    return false;
  });
  $("#advice-2").click(function () {
    $("#advice-2").toggleClass("advice-like__img_red");
    return false;
  });
  $("#advice-3").click(function () {
    $("#advice-3").toggleClass("advice-like__img_red");
    return false;
  });
  $("#advice-4").click(function () {
    $("#advice-4").toggleClass("advice-like__img_red");
    return false;
  });
  $("#advice-5").click(function () {
    $("#advice-5").toggleClass("advice-like__img_red");
    return false;
  });
  $("#advice-6").click(function () {
    $("#advice-6").toggleClass("advice-like__img_red");
    return false;
  });
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

  $(".modal")
    .on("shown", function () {
      $("body").css("overflow", "hidden");
    })
    .on("hidden", function () {
      $("body").css("overflow", "auto");
    });

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
