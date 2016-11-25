if($('#headRect').length) {
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

  if(!mobile && winWidth >= 992) {
    $('#headRect').perspectiveHover();
  }
}










