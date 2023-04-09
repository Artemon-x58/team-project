$('.our-products-slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        dots: true,
        infinite: true,
        slidesToShow: 3,
      },
    },
  ],
});
