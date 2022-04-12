$(function(){

  $('.tabs__title').on('click', function(){
    $('.tabs__title').removeClass('tabs__title--active');
    $(this).addClass('tabs__title--active');
    $('.tabs__tab').addClass('tabs__tab--off');
  });

  $('.tabs__title--1').on('click', function(){
    $('.tabs__tab--1').removeClass('tabs__tab--off');
  });

  $('.tabs__title--2').on('click', function(){
    $('.tabs__tab--2').removeClass('tabs__tab--off');
  });

  $('.tabs__title--3').on('click', function(){
    $('.tabs__tab--3').removeClass('tabs__tab--off');
  });

  $('.catalog__btn').on('click', function(){
    $('.filter-page').addClass('filter-page--active');
    $('.body').addClass('lock');
  });

  $('.filter-page__close-btn').on('click', function(){
    $('.filter-page').removeClass('filter-page--active');
    $('.body').removeClass('lock');
  });

  $('.burger-nav').on('click', function(){
    $('.mobile-nav').addClass('mobile-nav--active');
    $('body').addClass('lock');
  });

  $('.mobile-nav__btn').on('click', function(){
   $('.mobile-nav').removeClass('mobile-nav--active')
    $('body').removeClass('lock');
  })

  $('.filter__btn--default').addClass('mixitup-control-active');

  var sj = new SJ();

})

function slickify2(){
  $('.product__list').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: 'unslick',
      arrows: false
    }]
  });
}

slickify2();

$(window).on('resize', function(){
  if ($(window).innerWidth() < 768) {
    slickify2();
  }
});

function slickify1(){
  $('.advice__list').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    mobileFirst: true,
      responsive: [
        {
          breakpoint: 1700,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            dots: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows: false,
            dots: true
          }
        }
      ]
  });
}

slickify1();

$(window).on('resize', function(){
  if ($(window).innerWidth() < 1900) {
    slickify1();
  }
});

var containerEl = document.querySelector('.goods__items');
var mixer;

if (containerEl) {
    mixer = mixitup(containerEl, {
    });
}