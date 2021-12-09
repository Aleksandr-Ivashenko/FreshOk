$(function () {
  /*  слайдер цен в каталоге  */
  var $range = $(".aside__price");
  var $inputFrom = $(".js-from");
  var $inputTo = $(".js-to");
  var instance;
  var min = 0;
  var max = 1000;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 800,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
  }

  $inputFrom.on("change", function () {
    var val = $(this).prop("value");
    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop("value", val);
  });

  $inputTo.on("change", function () {
    var val = $(this).prop("value");
    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop("value", val);
  });

  /*  стилизация селектов  */
  $('.sorting__select, .about-product__input').styler();

  /*  звёздный рейтинг  */
  $('.star-info, .star-coments').rateYo({
    readOnly: true,
    halfStar: true,
    starWidth: '16px',
    normalFill: '#C1C1C1',
    ratedFill: '#FFB800',
    starSvg: '<svg viewBox="0 0 16 16"id="icon - grade" xmlns="http:www.w3.org/2000/svg"><g clip-path="url(#aoclip0_17_846)"><path d="M.023 6.164a.469.469 0 01.378-.319l4.96-.72L7.58.63a.469.469 0 01.84 0l2.219 4.495 4.96.72a.469.469 0 01.26.8l-3.59 3.498.848 4.94a.469.469 0 01-.68.495L8 13.245l-4.436 2.333a.469.469 0 01-.68-.495l.847-4.94-3.59-3.498a.469.469 0 01-.118-.48z"/></g><defs><clipPath id="aoclip0_17_846"><path transform="matrix(-1 0 0 1 16 0)" d="M0 0h16v16H0z"/></clipPath></defs></svg>',
  });

  $('.coments-form__rating').rateYo({
    starWidth: '16px',
    normalFill: '#C1C1C1',
    ratedFill: '#FFB800',
    starSvg: '<svg class="coments-form__rating-icon" viewBox="0 0 16 16"id="icon - grade" xmlns="http:www.w3.org/2000/svg"><g clip-path="url(#aoclip0_17_846)"><path d="M.023 6.164a.469.469 0 01.378-.319l4.96-.72L7.58.63a.469.469 0 01.84 0l2.219 4.495 4.96.72a.469.469 0 01.26.8l-3.59 3.498.848 4.94a.469.469 0 01-.68.495L8 13.245l-4.436 2.333a.469.469 0 01-.68-.495l.847-4.94-3.59-3.498a.469.469 0 01-.118-.48z"/></g><defs><clipPath id="aoclip0_17_846"><path transform="matrix(-1 0 0 1 16 0)" d="M0 0h16v16H0z"/></clipPath></defs></svg>',
  });

  /*tabs*/
  $('.product-tabs__btn').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__btn').removeClass('product-tabs__btn--active');
    $(this).addClass('product-tabs__btn--active');

    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');
  });

  /*  клик по кнопке выпадающего меню  */
  $('.dropdown-catalog__btn').on('click', function () {
    $('.dropdown-catalog__list').toggleClass('dropdown-catalog__list--active');
  });

  $('.dropdown-catalog__btn').on('click', function () {
    $('.dropdown-catalog__btn').toggleClass('dropdown-catalog__btn--active');
  });

  $('.dropdown-catalog__btn').on('click', function () {
    $('.overlay').toggleClass('overlay--active');
  });

  $('.dropdown-catalog__btn').on('click', function () {
    $('body').toggleClass('scroll-lock');
  });

  /*  клик по ссылке в меню  */
  $('.dropdown-catalog__link').on('click', function () {
    $('.dropdown-catalog__list').removeClass('dropdown-catalog__list--active');
  });

  $('.dropdown-catalog__link').on('click', function () {
    $('.dropdown-catalog__btn').removeClass('dropdown-catalog__btn--active');
  });

  $('.dropdown-catalog__link').on('click', function () {
    $('.overlay').removeClass('overlay--active');
  });

  $('.dropdown-catalog__link').on('click', function () {
    $('body').removeClass('scroll-lock');
  });

  /*  клик по фону  */
  $('.overlay').on('click', function () {
    $('.dropdown-catalog__list').removeClass('dropdown-catalog__list--active');
  });

  $('.overlay').on('click', function () {
    $('.burger').removeClass('burger--active');
  });

  $('.overlay').on('click', function () {
    $('.dropdown-catalog__btn').removeClass('dropdown-catalog__btn--active');
  });

  $('.overlay').on('click', function () {
    $('.overlay').removeClass('overlay--active');
  });

  $('.overlay').on('click', function () {
    $('.dropdown-main').removeClass('dropdown-main--active');
  });

  $('.overlay').on('click', function () {
    $('body').removeClass('scroll-lock');
  });

  $('.overlay').on('click', function () {
    $('.aside-wrapper').removeClass('aside-wrapper--active');
  });

  /* клик по поиску  */
  $('.square-button--magnifier').on('click', function () {
    $('.search').toggleClass('search--active');
  });

  /* клик по бургеру  */
  $('.btn-burger').on('click', function () {
    $('.dropdown-main').addClass('dropdown-main--active');
  });

  $('.btn-burger').on('click', function () {
    $('.overlay').addClass('overlay--active');
  });

  $('.btn-burger').on('click', function () {
    $('body').addClass('scroll-lock');
  });

  $('.btn-burger--close').on('click', function () {
    $('.dropdown-main').removeClass('dropdown-main--active');
  });

  $('.btn-burger--close').on('click', function () {
    $('.overlay').removeClass('overlay--active');
  });

  $('.btn-burger--close').on('click', function () {
    $('body').removeClass('scroll-lock');
  });

  /*  тип карточек сортировки  */
  $('.sorting__btn').on('click', function () {
    $('.sorting__btn').removeClass('sorting__btn--active');
    $(this).addClass('sorting__btn--active');
  });

  $('.sorting__btn--badges').on('click', function () {
    $('.catalog__list').addClass('badges-cards');
  });

  $('.sorting__btn--tiles').on('click', function () {
    $('.catalog__list').removeClass('badges-cards');
  });

  /* выпадающие меню aside  */
  $('.js-categories-btn').on('click', function () {
    $('.js-categories-dropdown').toggleClass('aside__dropdown--active');
  });

  $('.js-categories-btn').on('click', function () {
    $('.js-categories-btn').toggleClass('aside__btn--active');
  });

  $('.js-suggestions-btn').on('click', function () {
    $('.js-suggestions-dropdown').toggleClass('aside__dropdown--active');
  });

  $('.js-suggestions-btn').on('click', function () {
    $('.js-suggestions-btn').toggleClass('aside__btn--active');
  });

  $('.js-brand-btn').on('click', function () {
    $('.js-brand-dropdown').toggleClass('aside__dropdown--active');
  });

  $('.js-brand-btn').on('click', function () {
    $('.js-brand-btn').toggleClass('aside__btn--active');
  });

  $('.js-price-btn').on('click', function () {
    $('.js-price-dropdown').toggleClass('aside__dropdown--active');
  });

  $('.js-price-btn').on('click', function () {
    $('.js-price-btn').toggleClass('aside__btn--active');
  });

  /*  aside при адаптиве  */
  $('.aside-open').on('click', function () {
    $('.aside-wrapper').addClass('aside-wrapper--active');
  });

  $('.aside-open').on('click', function () {
    $('.overlay').addClass('overlay--active');
  });

  $('.aside-open').on('click', function () {
    $('body').addClass('scroll-lock');
  });

  $('.aside-close').on('click', function () {
    $('.aside-wrapper').removeClass('aside-wrapper--active');
  });

  $('.aside-close').on('click', function () {
    $('.overlay').removeClass('overlay--active');
  });

  $('.aside-close').on('click', function () {
    $('body').removeClass('scroll-lock');
  });

  /*  отслеживание esc  */
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      $('.dropdown__list').removeClass('dropdown__list--active');
      $('.dropdown__btn').removeClass('dropdown__btn--active');
      $('.overlay').removeClass('overlay--active');
      $('.search').removeClass('search--active');
      $('.dropdown-main').removeClass('dropdown-main--active');
      $('body').removeClass('scroll-lock');
      $('.aside__btn').removeClass('aside__btn--active');
      $('.aside__dropdown').removeClass('aside__dropdown--active');
      $('.aside-wrapper').removeClass('aside-wrapper--active');
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

  $('.product-slider__list').slick({
    slidesToShow: 4,
    prevArrow: '<button class="slider-hero__arrows slider-hero__arrows--prev" type="button"><svg class="slider-hero__arrow slider-hero__arrow--prev" width="19" height="32"><use xlink: href = "images/sprite.svg#icon-prev"></use></svg></button >',
    nextArrow: '<button class="slider-hero__arrows slider-hero__arrows--next" type="button"><svg class="slider-hero__arrow slider-hero__arrow--next" width="19" height="32"><use xlink: href = "images/sprite.svg#icon-next"></use></svg></button>',
    responsive: [{
      breakpoint: 1601,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
      // breakpoint: 769,
      // settings: {
      // }
    }],
  });

  $('.about-product__slider').slick({
    prevArrow: '<button class="slider-hero__arrows slider-hero__arrows--prev" type="button"><svg class="slider-hero__arrow slider-hero__arrow--prev" width="19" height="32"><use xlink: href = "images/sprite.svg#icon-prev"></use></svg></button >',
    nextArrow: '<button class="slider-hero__arrows slider-hero__arrows--next" type="button"><svg class="slider-hero__arrow slider-hero__arrow--next" width="19" height="32"><use xlink: href = "images/sprite.svg#icon-next"></use></svg></button>',
    responsive: [{
      breakpoint: 769,
      settings: {
        arrows: false,
      }
    }]
  });

  $('[data-fancybox="gallery"]').fancybox({
    infobar: false,
    loop: true,
    buttons: [
      'close'
    ],
    smallBtn: false,
    btnTpl: {
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left prev" title="{{PREV}}"><svg class="slider-hero__arrow slider-hero__arrow--prev" width="19" height="32"><use xlink: href = "images/sprite.svg#icon-prev"></use></svg></button>',

      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right next" title="{{NEXT}}"><svg class="slider-hero__arrow slider-hero__arrow--next" width="19" height="32"><use xlink: href = "images/sprite.svg#icon-next"></use></svg></button>',

      close: '<button data-fancybox-close class="fancybox-close" title="{{CLOSE}}"><svg width="32" height="32"><use xlink: href = "images/sprite.svg#icon-close"></use></svg></button>',
    }

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

  if ($(window).width() < 1201) {
    $('.search__input').attr('placeholder', 'Я ищу...');
  }


  /*  липкая шапка  */
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('.header').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('.header').removeClass('header-down').addClass('header-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('.header').removeClass('header-up').addClass('header-down');
      }
    }

    lastScrollTop = st;
  }
})