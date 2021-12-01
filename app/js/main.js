$(function () {

  /*  клик по кнопке выпадающего меню  */
  $('.dropdown__btn').on('click', function () {
    $('.dropdown__list').toggleClass('dropdown__list--active');
  });

  $('.dropdown__btn').on('click', function () {
    $('.dropdown__btn').toggleClass('dropdown__btn--active');
  });

  $('.dropdown__btn').on('click', function () {
    $('body').toggleClass('lock-scroll');
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
    $('body').removeClass('lock-scroll');
  });

  $('.dropdown__link').on('click', function () {
    $('.overlay').removeClass('overlay--active');
  });

  /*  клик по фону  */
  $('.overlay').on('click', function () {
    $('.dropdown__list').removeClass('dropdown__list--active');
  });

  $('.overlay').on('click', function () {
    $('.dropdown__btn').removeClass('dropdown__btn--active');
  });

  $('.overlay').on('click', function () {
    $('body').removeClass('lock-scroll');
  });

  $('.overlay').on('click', function () {
    $('.overlay').removeClass('overlay--active');
  });

  /*  отслеживание esc  */
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      $('.dropdown__list').removeClass('dropdown__list--active');
      $('.dropdown__btn').removeClass('dropdown__btn--active');
      $('body').removeClass('lock-scroll');
      $('.overlay').removeClass('overlay--active');
    }
  });



  $('.slider-hero__items').slick({
    infinite: false,
    edgeFriction: 0.07,
    prevArrow: '<button class="slider-hero__arrows slider-hero__arrows--prev" type="button"><svg class="slider-hero__arrow slider-hero__arrow--prev" width="19" height="32"><use xlink: href = "images/sprite.svg#icon-prev"></use></svg></button >',
    nextArrow: '<button class="slider-hero__arrows slider-hero__arrows--next" type="button"><svg class="slider-hero__arrow slider-hero__arrow--next" width="19" height="32"><use xlink: href = "images/sprite.svg#icon-next"></use></svg></button>',
  });

  $('.slider-brands__items').slick({
    arrows: false,
    slidesToShow: 6,
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