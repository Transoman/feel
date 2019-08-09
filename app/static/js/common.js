global.jQuery = require('jquery');
var svg4everybody = require('svg4everybody'),
popup = require('jquery-popup-overlay'),
Swiper = require('swiper'),
fancybox = require('@fancyapps/fancybox'),
mPageScroll2id = require('page-scroll-to-id'),
Imask = require('imask');

jQuery(document).ready(function($) {

  // Toggle nav menu
  $('.nav-toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('open');
  });

  // Modal
  $('.modal').popup({
    transition: 'all 0.3s',
    onclose: function() {
      $(this).find('label.error').remove();
    }
  });

  new Swiper('.action-slider', {
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    autoplay: {
      delay: 5000,
    },
  });

  new Swiper('.services-1-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.services-1 .swiper-button-next',
      prevEl: '.services-1 .swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 1
      }
    }
  });

  new Swiper('.price-list-slider', {
    slidesPerView: 5,
    spaceBetween: 0,
    navigation: {
      nextEl: '.price-list .swiper-button-next',
      prevEl: '.price-list .swiper-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      767: {
        slidesPerView: 2
      },
      576: {
        slidesPerView: 1
      }
    }
  });

  new Swiper('.review-slider', {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: '.review .swiper-button-next',
      prevEl: '.review .swiper-button-prev',
    },
    breakpoints: {
      992: {
        slidesPerView: 1
      }
    }
  });

  let count = $('.portfolio-list').children().length;

  if (count > 8) {
    $('.portfolio-list').children().each(function(i, el) {
      if (i > 7) {
        $(el).hide();
      }
    });

    $('.portfolio__btn .btn').click(function(e) {
      e.preventDefault();
      $('.portfolio-list').children().each(function(i, el) {
        if (i > 7) {
          $(el).slideDown();
        }
      });
      $(this).parent().fadeOut();
    });

  }
  else {
    $('.portfolio__btn').hide();
  }

  $('.scroll-nav a').mPageScroll2id({
    highlightSelector: '.scroll-nav a',
    forceSingleHighlight: true
  });

  $(window).scroll(function() {
    if ($('.scroll-nav a[href="#hero"]').hasClass('mPS2id-highlight')) {
      $('.scroll-nav a[href="#hero"]').parent().parent().addClass('is-active');
    }
    else {
      $('.scroll-nav ul').removeClass('is-active');
    }
  });

  setTimeout(function() {
    if ($('.scroll-nav a[href="#hero"]').hasClass('mPS2id-highlight')) {
      $('.scroll-nav a[href="#hero"]').parent().parent().addClass('is-active');
    }
  }, 500);

  $('.ajax-form').submit(function(e) {
    e.preventDefault();
    var data = $(this).serialize();
    ajaxSend($('.ajax-form'), data);
  });

  function ajaxSend(formName, data) {
    jQuery.ajax({
      type: "POST",
      url: "sendmail.php",
      data: data,
      success: function() {
        $(".modal").popup("hide");
        $("#thanks").popup("show");
        setTimeout(function() {
          $(formName).trigger('reset');
        }, 2000);
      }
    });
  }

  let inputMask = function() {
    let inputMask = $('input[type="tel"]');
    let maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };

    if (inputMask.length) {
      inputMask.each(function(i, el) {
        IMask(el, maskOptions);
      });
    }

  };

  inputMask();

  // SVG
  svg4everybody({});

});