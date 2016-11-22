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
// Add tooltip to footer links
    $('.tooltip').tooltipster({
        animation: 'grow',
        animationDuration: 550,
        delay: 250,
        theme: 'tooltipster-shadow',
        plugins: ['follower']
    });
// Add color strip
    $('#colorstrip1').colorstrip({
        minInterval: 6000,
        maxInterval: 12000,
        minWidth: 10,
        maxWidth: 80,
        opacity: 0.5,
        colors: ['#dedfe1', '#466c9d', '#223f5f', '#f97849', '#511799', '#6792bf', '#dfbdb7']
    });
    $('#colorstrip2').colorstrip({
        minInterval: 6000,
        maxInterval: 12000,
        minWidth: 10,
        maxWidth: 80,
        opacity: 0.5,
        colors: ['#dedfe1', '#466c9d', '#223f5f', '#f97849', '#511799', '#6792bf', '#dfbdb7']
    });
});
