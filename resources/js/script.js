$(document).ready(function(){
    $('.js--section-features').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
    });
});

$('.js--scroll-to-features').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});

$('.js--scroll-to-home').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 1000);
});

$('.js--scroll-to-photos').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-photos').offset().top}, 1000);
});

$('.js--scroll-to-plans').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
});

$('.js--scroll-to-testimonials').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-testimonials').offset().top}, 1000);
});

/* Mobile navigation */
$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
    }
});