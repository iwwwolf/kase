if($('#headRect').length) {
  /** 
   * Designed by @Konstantine Trundayev
   * https://dribbble.com/k0t
   * Coded by @Balaj Marius for @Designmodo
   * http://mariusbalaj.com | http://designmodo.com
   */


  /*var $rect = $('#headRect'),
    $shine = $('.head-rect__shine'),
    $layer = $('div[class*="layer-"]'),
    w = $rect.width(), //window width
    h = $rect.height(); //window height

  $rect.on('mousemove', function(e) {
    var offsetX = 1 - e.pageX / w, //cursor position X
      offsetY = 1 - e.pageY / h, //cursor position Y
      dy = e.pageY - h / 2, //@h/2 = center of rect
      dx = e.pageX - w / 2, //@w/2 = center of rect
      theta = Math.atan2(dy, dx), //angle between cursor and center of rect in RAD
      angle = theta * 180 / Math.PI - 90, //convert rad in degrees
      offsetRect = $rect.data('offset'),
      transformRect = 'translateY(' + -offsetX * offsetRect + 'px) rotateX(' + (-offsetY * offsetRect) + 'deg) rotateY(' + (offsetX * (offsetRect * 2)) + 'deg)'; //rect transform

      //get angle between 0-360
      if (angle < 0) {
        angle = angle + 180;
      }

    //gradient angle and opacity
    //$shine.css({opacity: 1, 'transform': 'translateX(' + (e.pageX - w * 1.2) + 'px) translateY(' + (e.pageY - h) + 'px)'});
    $shine.css({opacity: 1, 'background': 'linear-gradient(' + angle + 'deg, transparent ' + (e.pageY - w - 7) + '%, rgba(255,255,255,0.05) ' + (e.pageY - w - 1) + '%, transparent ' + (e.pageY - w + 7) + '%)'});


    //rect transform
    $rect.css({'transform': transformRect});

    //parallax foreach layer
    var offsetLayer = $layer.data('offset') || 0,
      transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';


    $layer.css('transform', transformLayer);

  }).on('mouseleave',function(e){
    $rect.css({'transform': 'translateY(0px) rotateX(0deg) rotateY(0deg)'});
    $layer.css({'transform': 'translateY(0px) translateX(0px)'});
    $shine.css({opacity: 0});
  });*/
}











$.fn.perspectiveHover = function (opt) {
  this.each(function (i) {
    var DOM = {},
      state = {},
      $self = $(this),
      $layer = $('.parallax'),
      w = $self.width(), 
      h = $self.height();

    // options
    if (!opt) {
      //opt = {};
      opt = $.extend({
        'power': 20,
        'defSpeed': 0,
        'duration': 2000
      }, opt);
    }
    opt = $.extend({
      'power': 20,
      'defSpeed': 0,
      'duration': 2000
    }, opt);

    // safari V < 9
    /*if (parseInt($.browser.version) < 9 && $.browser.safari) {
      opt.power = 4;
    }*/

    // chrome
    /*if ($.browser.chrome) {
      opt.defSpeed = 0.1;
    }*/

    // methods
    var plg = {
      init: function () {
        this.resize();
        DOM.$plate = $self //.find('a, .link-holder');
        $self
          .on('mouseenter', this.mouseenter)
          .on('mousemove', this.mousemove)
          .on('mouseleave', this.mouseleave)
          .on('click', this.click);
        if (!state.$shadow) {
          state.$shadow = $('<div>').addClass('blick');
          state.$shadow.appendTo(DOM.$plate);
          //$('<div>').addClass('shadow').appendTo(DOM.$plate);
        }
      },
      resize: function () {
        state.elementWidth = $self.innerWidth();
        state.elementHeight = $self.innerHeight();
      },
      mouseenter: function (e) {

        clearInterval( plg.firstAnimation );

        plg.animationState = {
          active: true,
          startTime: new Date().getTime(),
          startStamp: new Date().getTime(),
          startX: 0.5,
          startY: 0.5,
          speed: 0.6,
          endX: (e.pageX - $self.offset().left) / state.elementWidth,
          endY: (e.pageY - $self.offset().top) / state.elementWidth,
          status: 0
        };

        plg.animationState.startX = plg.animationState.stateX || 0.5;
        plg.animationState.startY = plg.animationState.stateY || 0.5;

      },
      mousemove: function (e) {

        var xmult = (e.pageX - $self.offset().left) / state.elementWidth;
        var ymult = (e.pageY - $self.offset().top) / state.elementWidth;
        var currentTime = new Date().getTime();

        //parallax foreach layer
        var offsetX = 1 - e.pageX / w, //cursor position X
            offsetY = 1 - e.pageY / h; //cursor position Y

        var offsetLayer = $layer.data('offset') || 0,
          transformLayer = 'translateX(' + offsetX * offsetLayer + 'px) translateY(' + offsetY * offsetLayer + 'px)';


        $layer.css('transform', transformLayer);

        if (!($.browser.chrome || $.browser.msie || $.browser.msedge) && currentTime - plg.animationState.startStamp < 300 ) {

          plg.animationState.speed = (300 - (currentTime - plg.animationState.startStamp)) / 1000;

        } else {
                      plg.animationState.speed = opt.defSpeed;
                  }

        plg.renderElement(xmult, ymult);

      },
      mouseleave: function (e) {
        clearInterval( plg.firstAnimation );
        plg.animationState.startTime = new Date().getTime();
        plg.animationState.startX = (e.pageX - $self.offset().left) / state.elementWidth;
        plg.animationState.startY = (e.pageY - $self.offset().top) / state.elementWidth;
        plg.animationState.status = 0;
        plg.animationState.speed = 0.6;
        plg.animationState.endX = 0.5;
        plg.animationState.endY = 0.5;
        plg.animationState.last = true;

        plg.renderElement(plg.animationState.endX, plg.animationState.endY);

        window.requestAnimationFrame( function () {

          DOM.$plate.css({
            "-webkit-transform": "rotateY(0) rotateX(0) translateZ(0)",
            "transform": "rotateY(0) rotateX(0) translateZ(0)"
          });

          state.$shadow.css({opacity: 0});
        } );

        $layer.css('transform', 'translateX(0) translateY(0)');
      },
      click: function () {
        // $self.parent().parent().find('a').css({
        //  "-webkit-transform": "none",
        //  "transform": "none"
        // };
        //$self.parent().parent().find('.blick').css({
        //  'display': 'none'
        //});
      },
      renderElement: function (x, y, z) {

        if (!z) {
          z = 10;
        }

        window.requestAnimationFrame( function () {

          DOM.$plate.css({
            "-webkit-transition": 'transform ' + plg.animationState.speed + 's linear',
            "transition": 'transform ' + plg.animationState.speed + 's linear',
            "-webkit-transform": "rotateY(" + (-(x - 0.5) * -opt.power) + "deg) rotateX(" + (-(y - 0.5) * opt.power) + "deg) translateZ(" + z + "px)",
            "transform": "rotateY(" + (-(x - 0.5) * -opt.power) + "deg) rotateX(" + (-(y - 0.5) * opt.power) + "deg) translateZ(" + z + "px)"
          });
          state.$shadow.css({
            opacity: 1,
            'background-image': 'linear-gradient(' + (x * 25 + 2) + 'deg, transparent, transparent ' + (y * 30 + 15) + '%, rgba(255, 255, 255, 0.15) ' + (y * 30 + 39) + '%, rgba(255, 255, 255, 0.15) ' + (y * 30 + 41) + '%, transparent ' + (y * 30 + 65) + '%, transparent ' + (y * 30 + 100) + '%)'
          });

        } );

      }
    };

    plg.init();

    $(window).on( 'resize', plg.resize );

    return plg;
  });

};

$('#headRect').perspectiveHover();