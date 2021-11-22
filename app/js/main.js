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

  $('.slider__items').slick({
    infinite: false,
    edgeFriction: 0.07,
    prevArrow: '<button class="slider__prev" type="button"><svg class="slider__arrow" width="19" height="32" viewBox="0 0 19 32"  fill="#505050" xmlns="http://www.w3.org/2000/svg"><path d="M0.384645 17.0149L16.3979 31.6079C16.9234 32.1307 17.7756 32.1307 18.3011 31.6079C18.8266 31.0851 18.8266 30.2369 18.3011 29.7141L3.25334 16L18.2998 2.2859C18.8252 1.76309 18.8252 0.914839 18.2998 0.392073C17.7743 -0.130695 16.9221 -0.130695 16.3966 0.392072L0.38331 14.9851C0.103241 15.2638 -0.0168347 15.6332 0.00187251 15.9986C-0.0155416 16.3654 0.104495 16.7348 0.384645 17.0149Z"/></svg></button>',
    nextArrow: '<button class="slider__next" type="button"><svg class="slider__arrow" width="19" height="32" viewBox="0 0 19 32" fill="#505050" xmlns="http://www.w3.org/2000/svg"><path d="M18.3105 14.9851L2.29726 0.392105C1.77179 -0.130702 0.919579 -0.130702 0.394105 0.392105C-0.131368 0.914872 -0.131368 1.76312 0.394105 2.28593L15.4419 16L0.395438 29.7141C-0.130036 30.2369 -0.130036 31.0852 0.395438 31.6079C0.920912 32.1307 1.77312 32.1307 2.29855 31.6079L18.3119 17.0149C18.592 16.7362 18.712 16.3668 18.6933 16.0014C18.7107 15.6346 18.5907 15.2652 18.3105 14.9851Z"/></svg></button>',
  });

  // if (currentSlide == 0)
  //   $('.slick-prev').hide();

  // //Проверяем событие на перемещение слайта
  // $('.slider__items').on('beforeChange', function (event, slick, currentSlide, nextSlide) {

  //   //вычисляем какой следующий слад
  //   if (nextSlide > 0)
  //     $('.slider__prev').prop('disabled', false);  $('#someid').removeProp('disabled')
  //   if (nextSlide == 0)
  //     $('.slider__prev').prop('disabled', true);

  //   //Здесь высчитываем общее количество слайдов
  //   //Так как отсчет от 0 то отнимаем 1 слайд
  //   if (nextSlide == (slick.slideCount - 1))
  //     $('.slider__next').hide();
  //   if (nextSlide < (slick.slideCount - 1))
  //     $('.slider__next').show();
  // });

})
