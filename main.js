$(document).ready(function() {
  checkSize();

  $(window).resize(checkSize);

  $('.product-info').animate({opacity:1}, 2000);

  $('.fa-bars').on('click', function() {
    $('nav').toggleClass('active');
    $('.overlay').toggleClass('menu-open');
    $('.fa-bars').fadeOut();
    $('.fa-times').fadeIn();
  });

  $('.fa-times').on('click', function() {
    $('nav').toggleClass('active');
    $('.overlay').toggleClass('menu-open');
    $('.fa-times').fadeOut();
    $('.fa-bars').fadeIn();
  });

  function checkSize(){    
    if ($('#shoe-1').css('left') == '175px') {
      $('#shoe-1').animate({left: '-2.5rem'}, 1000);

      $('#btn-oreo').on('click', function() {
        $('#shoe-1').animate({left: '100%'}, function() {
          $('#shoe-2').animate({left: '-2.5rem'});
        });

        $('#color').fadeOut(500, function() {
          $(this).text('Oreo').fadeIn(500);
        });

        $('#price').fadeOut(500, function() {
          $(this).text('$917').fadeIn(500);
        });

        $('buy-btn').attr('href', 'https://stockx.com/adidas-yeezy-boost-350-v2-core-black-white');
    
        $('.background-right').css('background', '#ffe0b2');
    
        $('#btn-copper').removeClass('active');
        $('#btn-oreo').addClass('active');
      });
    
      $('#btn-copper').on('click', function() {
        $('#shoe-2').animate({left: '100%'}, function() {
          $('#shoe-1').animate({left: '-2.5rem'});
        });

        $('#color').fadeOut(500, function() {
          $(this).text('Copper').fadeIn(500);
        });

        $('#price').fadeOut(500, function() {
          $(this).text('$777').fadeIn(500);
        });

        $('buy-btn').attr('href', 'https://stockx.com/adidas-yeezy-boost-350-v2-core-black-copper');
    
        $('.background-right').css('background', '#efebe9');
    
        $('#btn-oreo').removeClass('active');
        $('#btn-copper').addClass('active');
      });
    } else if ($('#shoe-1').css('left') == '355px') {
      $('#shoe-1').animate({left: '-5rem'}, "slow");

      $('#btn-oreo').on('click', function() {
        $('#shoe-1').animate({left: '100%'}, function() {
          $('#shoe-2').animate({left: '-5rem'});
        });

        $('#color').fadeOut(500, function() {
          $(this).text('Oreo').fadeIn(500);
        });

        $('#price').fadeOut(500, function() {
          $(this).text('$917').fadeIn(500);
        });

        $('buy-btn').attr('href', 'https://stockx.com/adidas-yeezy-boost-350-v2-core-black-white');
    
        $('.background-right').css('background', '#ffe0b2');
    
        $('#btn-copper').removeClass('active');
        $('#btn-oreo').addClass('active');
      });
    
      $('#btn-copper').on('click', function() {
        $('#shoe-2').animate({left: '100%'}, function() {
          $('#shoe-1').animate({left: '-5rem'});
        });

        $('#color').fadeOut(500, function() {
          $(this).text('Copper').fadeIn(500);
        });

        $('#price').fadeOut(500, function() {
          $(this).text('$777').fadeIn(500);
        });
    
        $('buy-btn').attr('href', 'https://stockx.com/adidas-yeezy-boost-350-v2-core-black-copper');

        $('.background-right').css('background', '#efebe9');
    
        $('#btn-oreo').removeClass('active');
        $('#btn-copper').addClass('active');
      });
    } else {
      $('#shoe-1').animate({left: '-12rem'}, 1000);

      $('.background-right').on('click', function() {
        $('nav').removeClass('active');
        $(this).removeClass('menu-open');
      });

      $('#btn-oreo').on('click', function() {
        $('#shoe-1').animate({left: '100%'}, function() {
          $('#shoe-2').animate({left: '-12rem'});
        });

        $('#color').fadeOut(500, function() {
          $(this).text('Oreo').fadeIn(500);
        });

        $('#price').fadeOut(500, function() {
          $(this).text('$917').fadeIn(500);
        });

        $('buy-btn').attr('href', 'https://stockx.com/adidas-yeezy-boost-350-v2-core-black-white');

        $('.background-right').css('background', '#ffe0b2');

        $('#btn-copper').removeClass('active');
        $('#btn-oreo').addClass('active');
      });

      $('#btn-copper').on('click', function() {
        $('#shoe-2').animate({left: '100%'}, function() {
          $('#shoe-1').animate({left: '-12rem'});
        });

        $('#color').fadeOut(500, function() {
          $(this).text('Copper').fadeIn(500);
        });

        $('#price').fadeOut(500, function() {
          $(this).text('$777').fadeIn(500);
        });

        $('buy-btn').attr('href', 'https://stockx.com/adidas-yeezy-boost-350-v2-core-black-copper');

        $('.background-right').css('background', '#efebe9');

        $('#btn-oreo').removeClass('active');
        $('#btn-copper').addClass('active');
      });
    }
  }
});