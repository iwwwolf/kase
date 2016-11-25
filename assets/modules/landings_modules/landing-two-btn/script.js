$(function() {

  function equal() {
    var maxH = 0;
    $('.landing-two-btn p').height('auto');

    $('.landing-two-btn p').each(function() {
      if($(this).height() > maxH)
        maxH = $(this).height();
    });

    $('.landing-two-btn p').height(maxH); 
  }

  equal();
  $(window).resize(function() {
    setTimeout(function() {
      equal();
    }, 230);
  });

});