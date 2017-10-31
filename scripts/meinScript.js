var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
console.log("Variablen deklariert");

function myFunction() {
    console.log("in myFunction");
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}


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
        arrows: false,
        mobileFirst: true
    });

    /*// Ticker
    if ($(".ticker").text().length > 0) {

        $(".ticker").slideDown();


    }

    $(".ticker").click(function () {
        $(this).slideUp();
    })*/


// vTicker Plugin
    /* $('.ticker').vTicker('init', {
         speed: 1000,
         pause: 1000,
         showItems: 1,
         padding: 10
     });
 */


});

