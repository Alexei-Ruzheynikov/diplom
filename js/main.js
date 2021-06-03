$(document).ready(function () {
  var menuButton = $(".navbar__button");
  menuButton.on("click", function () {
    $(".info-menu_mobile").toggleClass("info-menu_mobile-visible");
  });
});
