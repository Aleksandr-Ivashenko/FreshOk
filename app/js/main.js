$(function () {
  $('.dropdown__btn').on('click', function () {
    $('.dropdown__list').toggleClass('dropdown__list--active');
  });

  $('.dropdown__link').on('click', function () {
    $('.dropdown__list').removeClass('dropdown__list--active');
  });

  $('.dropdown__link').on('click', function () {
    $('.dropdown__btn').removeClass('dropdown__btn--active');
  });

  $('.dropdown__btn').on('click', function () {
    $('.dropdown__btn').toggleClass('dropdown__btn--active');
  });

})