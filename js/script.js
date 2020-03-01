$(document).ready(function () { 

    'use strict';


    // Loading Screen
    $(".loading-overlay .sk-cube-grid").fadeOut(1100, function () {
        $(this).parent().fadeOut(600, function () {
            $(this).remove();
        });
    });
    // Owl Carousel
    $('.owl-carousel.one').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 5,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
    // Owl Carousel
    $('.owl-carousel.two').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 5,
        nav: true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    // Nice Scroll
    $("body").niceScroll({
        cursorcolor:"#167595",
        cursorwidth:"15px",
        zindex: "99999",
        cursorborder: "0",
        cursorborderradius: "2px"
    });
    // Scroll To Top
    var scrollButton = $("#scroll-top");
    $(window).scroll(function () {

        $(this).scrollTop() >= 400 ? scrollButton.fadeIn() : scrollButton.fadeOut();

    });
    // >> // Click On Button To Scroll Top
        scrollButton.click(function () {

            $('html,body').animate({scrollTop : 0}, 1000);
        }); 

});
