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

<<<<<<< HEAD
  // window.setTimeout(function(){
  //   window.location.href = 'http://www.freedompowertrain.com/';}, 5000
  // );
=======
  window.setTimeout(function(){
    window.location.href = 'http://www.freedompowertrain.com/';}, 5000
  );
>>>>>>> 00de7cabbd9cfaf848500e07c12fe85724754e91



}); // end document.ready
