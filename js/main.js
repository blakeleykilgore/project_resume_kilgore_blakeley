$(document).ready(function () {
// Nav Hover
    $('nav li').hover(function () {
        $(this).find('a').css('color', '#6c9bc7');

    }, function () {
        $(this).find('a').css('color', '');
    });
});
