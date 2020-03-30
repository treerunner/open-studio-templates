

/* -------------------------- */

$(document).ready(function() {
    
var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });

$(".begin").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
});

$(".show").swipe( {
        //Single swipe handler for left swipes
        swipeUp:function(event, direction, distance, duration, fingerCount) {
          $('html,body').animate({scrollTop: $("#drawing").offset().top},'slow'); 
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:75
      });

// Toggle Nav on Click
  $('.hamburger').click(function() {
	$('#site-menu').toggleClass('active');
	return false;
  });

var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 3,
      spaceBetween: 16,
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
      loop: true,
      // init: false,
      breakpoints: {
        900: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
        1180: {
          slidesPerView: 6,
          spaceBetween: 16,
        },
      }}
    )

});