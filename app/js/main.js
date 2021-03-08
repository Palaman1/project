$(function(){

  $('.user-nav__link__btn').on('click', function (){
    $('.user-nav__menu').toggleClass('user-nav__menu--active');
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var mixer = mixitup('.week__content');

  var mixer = mixitup('.new__content');

});