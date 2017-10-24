$(document).ready(function () {

    // News Slider

    $('.news-slider').slick({
        dots: true,
        infinite: false,
        initialSlide: 1,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    });

    // Ticker
    if ($(".ticker").text().length > 0) {

        $(".ticker").slideDown();
    }

    $(".ticker").click(function () {
        $(this).slideUp();
    });

});

