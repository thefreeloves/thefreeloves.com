$(document).ready(function(){
  //cache DOM
  var $slider = $('.bdr-slide');
  var $slideContainer = $('#bdr-slides');
  var $slides = $slideContainer.find('.bdr-slide');
  var $toggleLeft = $('#bdr-toggle-left');
  var $toggleRight = $('#bdr-toggle-right');
  var $pauseBtn = $('#pause-btn');
  var $playBtn = $('#play-btn');

  //configuration
  var width = $slider.width();
  var animationSpeed = 1500;
  var pause = 9000;
  var currentSlide = 1;

  var interval;

  $slideContainer.css('width', width * $slides.length);

  $pauseBtn.click(function(){stopSlider();$pauseBtn.toggle();$playBtn.toggle();});
  $playBtn.click(function(){startSlider();$playBtn.toggle();$pauseBtn.toggle();});
  $toggleLeft.click(function(){
    stopSlider();
    if (currentSlide === 1) {
      currentSlide = $slides.length;
      $slideContainer.css({'margin-left': '-'+width*($slides.length-1)+'px'});
      $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function() {
        currentSlide--;
      });
    } else {
      $slideContainer.animate({'margin-left': '+='+width}, animationSpeed, function(){
        currentSlide--;
      });
    }
    startSlider();
  });
  $toggleRight.click(function(){
    stopSlider();
    $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
      currentSlide++;
      if (currentSlide === $slides.length) {
        currentSlide = 1;
        $slideContainer.css('margin-left', 0);
      }
    });
    startSlider();
  });
  function startSlider() {
    interval = setInterval(function() {
      $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
        currentSlide++;
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  }

  function stopSlider() {
    clearInterval(interval);
  }
  startSlider();
});

$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('.slider');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $(".nav").addClass('scroll');
      } else {
        $('.nav').css('background-color', 'rgba(34,34,34,0.5)');
      }
    });
  }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});