$(function() {

  function equal() {
    var maxH = 0;
    $('.landing-two-btn__item p').height('auto');

    $('.landing-two-btn__item p').each(function() {
      if($(this).height() > maxH)
        maxH = $(this).height();
    });

    $('.landing-two-btn__item p').height(maxH); 
  }

  equal();
  $(window).resize(function() {
    setTimeout(function() {
      equal();
    }, 230);
  });

});