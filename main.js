$('.banner_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // dots: true,
    // cssEase: 'linear',
    autoplay: true,
    // autoplaySpeed: 400,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angle-left left_arrow"></i>',
    nextArrow: '<i class = "fa-solid fa-angle-right right_arrow"></i>',
});

$('.program_slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    // cssEase: 'linear',
    autoplay: true,
    // autoplaySpeed: 400,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angle-left prev_arrow"></i>',
    nextArrow: '<i class = "fa-solid fa-angle-right next_arrow"></i>',
});