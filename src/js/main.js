$(document).foundation();
$(document).ready(function(){
  $('nav ul a').bind('click',function(event){
      console.log('testing');
      var $anchor = $(this);

      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1000,'easeInOutExpo');
      /*
      if you don't want to use the easing effects:
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1000);
      */
      event.preventDefault();
  });


  $('#carouselContainer').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    // asNavFor: '.slider-for',
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]

  });

  var $overlay = $('<div id="overlay"></div>');
  var $img = $('<img>');

  $overlay.append($img);

  $('.off-canvas-content').append($overlay);

  $('#pressGallery li a').click(function(e){
    e.preventDefault();
    var href = $(this).attr('href');
    var pos = $(this).offset().top;
    // console.log(pos);
    $img.attr('src', href);
    $overlay.show();

  });

  $('#overlay').click(function(){
    $overlay.hide();

  });

  $('.googleMap').click(function () {
    console.log('googlemaps');
    $('.googleMap iframe').css("pointer-events", "auto");
  });

});
