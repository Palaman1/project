$(function(){

  $('.related__items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: false,
    autoplay: false
  });

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
  
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.star').rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $('.rated__star').rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $('.rate__star').rateYo({
    starWidth: "20px",
    spacing: "10px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $('.choose_star').rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $('.product-one__num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });

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