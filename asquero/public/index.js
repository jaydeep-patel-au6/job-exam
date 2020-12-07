$(document).ready(function () {
    $('.box-2').hover(function () {
        $(this).addClass('shadow-lg');
    }, function () {
        $(this).removeClass('shadow-lg');
    });
});