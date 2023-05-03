// event pada di link

$(".page-scroll").on("click", function (e) {
  var hrefTujuan = $(this).attr("href");
  var elementHrefTujuan = $(hrefTujuan);

  $("html,body").animate(
    {
      scrollTop: elementHrefTujuan.offset().top - 50,
    },
    1500,
    "easeOutBack"
  );

  e.preventDefault();
});
