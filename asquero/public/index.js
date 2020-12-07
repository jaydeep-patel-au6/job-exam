$(document).ready(function () {
    $('.box-2').hover(function () {
        $(this).addClass('shadow-lg');
    }, function () {
        $(this).removeClass('shadow-lg');
    });
});

$(document).scroll(function() {
    var y = $(this).scrollTop();
    if (y > 700) {
      $('.searchTitle').fadeIn();
    } else {
      $('.searchTitle').fadeOut();
    }
  });