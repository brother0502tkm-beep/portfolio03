// ハンバーガーボタンとドロワー
$("#js-button-drawer").on("click", function () {
  if (window.innerWidth <= 768) {//pcの場合は無効

  $(this).toggleClass("is-checked");
  $("#js-drawer").slideToggle();
  $("body").toggleClass("is-fixed");
  }
});

// メニュー内のリンクをクリックしたとき
$("#js-drawer a").on("click", function() {
  $("#js-button-drawer").removeClass("is-checked");
  $("#js-drawer").slideUp();
  $("body").removeClass("is-fixed");
});
