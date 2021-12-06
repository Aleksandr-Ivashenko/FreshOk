$(function () {
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
  /*  слайдер цен в каталоге  ^^  */

  $('.sorting__select').styler();


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
  $('.categories-btn').on('click', function () {
    $('.categories-list').toggleClass('aside__dropdown--active');
  });

  $('.categories-btn').on('click', function () {
    $('.categories-btn').toggleClass('aside__btn--active');
  });

  $('.suggestions-btn').on('click', function () {
    $('.suggestions-list').toggleClass('aside__dropdown--active');
  });

  $('.suggestions-btn').on('click', function () {
    $('.suggestions-btn').toggleClass('aside__btn--active');
  });

  $('.brand-btn').on('click', function () {
    $('.brand-list').toggleClass('aside__dropdown--active');
  });

  $('.brand-btn').on('click', function () {
    $('.brand-btn').toggleClass('aside__btn--active');
  });

  $('.price-btn').on('click', function () {
    $('.price-list').toggleClass('aside__dropdown--active');
  });

  $('.price-btn').on('click', function () {
    $('.price-btn').toggleClass('aside__btn--active');
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

  if ($(window).width() < 1201) {
    $('.search__input').attr('placeholder', 'Я ищу...');
  }
})