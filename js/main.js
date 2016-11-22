$(document).ready(function () {
// Nav Hover
    $('nav li').hover(function () {
        $(this).find('a').css('color', '#6c9bc7');

    }, function () {
        $(this).find('a').css('color', '');
    });
// Scroll Down on Button Click
    $('.button').click(function () {
        var target;
        $('.section').each(function (i, element) {
            target = $(element).offset().top;
            if (target - 10 > $(document).scrollTop()) {
                return false;
            }
        });
        $('html, body').animate({
            scrollTop: target
        }, 1100);
    });
    $('.tooltip').tooltipster();
});
