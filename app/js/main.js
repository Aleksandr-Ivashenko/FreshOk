$(function () {

  /*  клик по кнопке выпадающего меню  */
  $('.dropdown__btn').on('click', function () {
    $('.dropdown__list').toggleClass('dropdown__list--active');
  });

  $('.dropdown__btn').on('click', function () {
    $('.dropdown__btn').toggleClass('dropdown__btn--active');
  });

  $('.dropdown__btn').on('click', function () {
    $('.overlay').toggleClass('overlay--active');
  });

  /*  клик по ссылке в меню  */
  $('.dropdown__link').on('click', function () {
    $('.dropdown__list').removeClass('dropdown__list--active');
  });

  $('.dropdown__link').on('click', function () {
    $('.dropdown__btn').removeClass('dropdown__btn--active');
  });

  $('.dropdown__link').on('click', function () {
    $('.overlay').removeClass('overlay--active');
  });

  /*  клик по фону  */
  $('.overlay').on('click', function () {
    $('.dropdown__list').removeClass('dropdown__list--active');
  });

  $('.overlay').on('click', function () {
    $('.burger').removeClass('burger--active');
  });

  $('.overlay').on('click', function () {
    $('.dropdown__btn').removeClass('dropdown__btn--active');
  });

  $('.overlay').on('click', function () {
    $('.overlay').removeClass('overlay--active');
  });

  /* клик по поиску  */
  $('.square-button--magnifier').on('click', function () {
    $('.search-mobile').toggleClass('search-mobile--active');
  });

  /* клик по бургеру  */
  $('.menu__btn').on('click', function () {
    $('.burger').addClass('burger--active');
  });

  $('.menu__btn').on('click', function () {
    $('.overlay').addClass('overlay--active');
  });

  $('.burger__close').on('click', function () {
    $('.burger').removeClass('burger--active');
  });

  $('.burger__close').on('click', function () {
    $('.overlay').removeClass('overlay--active');
  });

  /*  отслеживание esc  */
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      $('.dropdown__list').removeClass('dropdown__list--active');
      $('.dropdown__btn').removeClass('dropdown__btn--active');
      $('.overlay').removeClass('overlay--active');
      $('.search-mobile').removeClass('search-mobile--active');
      $('.burger').removeClass('burger--active');
    }
  });



  $('.slider-hero__items').slick({
    infinite: false,
    prevArrow: '<button class="slider-hero__arrows slider-hero__arrows--prev" type="button"><svg class="slider-hero__arrow slider-hero__arrow--prev" width="19" height="32"><use xlink: href = "images/sprite.svg#icon-prev"></use></svg></button >',
    nextArrow: '<button class="slider-hero__arrows slider-hero__arrows--next" type="button"><svg class="slider-hero__arrow slider-hero__arrow--next" width="19" height="32"><use xlink: href = "images/sprite.svg#icon-next"></use></svg></button>',

    responsive: [{
      breakpoint: 1201,
      settings: {
        infinite: true,
        arrows: false,
        dots: true,
      }
    }]
  });

  $('.slider-brands__items').slick({
    arrows: false,
    slidesToShow: 6,

    responsive: [{
      breakpoint: 1201,
      settings: {
        slidesToShow: 4,
      },
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      }
    }]
  });


  /*  решение конфликта двух mixitup  */
  var containerEl1 = document.querySelector('[data-ref="filter-1"]');
  var containerEl2 = document.querySelector('[data-ref="filter-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var Mixer1 = mixitup(containerEl1, config);
  var Mixer2 = mixitup(containerEl2, config);
})