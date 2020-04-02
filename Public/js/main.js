

/* -------------------------- */



$(document).ready(function() {


if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
	var height = window.innerHeight ? window.innerHeight : $(window).height();
	var navheight = $( "#masthead" ).outerHeight()/2;
	$('.show-holder').height(height-navheight);
	$('.show').height(height-navheight);
	$('.down').height(height-navheight);
}

    
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
	$('#screen').toggleClass('active');
	return false;
  });

   $('#screen').click(function() {
	$('#site-menu').toggleClass('active');
	$(this).toggleClass('active');
	return false;
  });


var conc = ["drawing", "painting", "sculpture", "printmaking", "graphicdesign", "photography"];

jQuery.each( conc, function( i, val ) {

	var prev = '.prev-'+val;
	var next = '.next-'+val;
	var targets = '#'+val+' .swiper-container';
  
	var mySwiper = new Swiper (targets, {
    slidesPerView: 2,
      spaceBetween: 16,
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
      loop: true,
      // init: false,
      breakpoints: {
        900: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
        1180: {
          slidesPerView: 5,
          spaceBetween: 16,
        },
      }}
    )

});

});