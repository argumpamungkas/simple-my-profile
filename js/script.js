// event pada di link a navbar
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

// Parallax header

$(window).on("load", function () {
  $(".jumbotron").addClass("show");
});

// Parallax about & gallery
$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  // Header

  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 8 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 4.2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 2.5 + "%)",
  });

  console.log(wScroll);

  // about
  if (wScroll > $(".about").offset().top - 400) {
    $(".about p").addClass("show");
  }

  // Gallery
  if (wScroll > $(".gallery").offset().top - 400) {
    $(".gallery .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".gallery .thumbnail").eq(i).addClass("show");
      }, 500 * (i + 1));
    });
  }
});
