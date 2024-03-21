AOS.init();

$('.service-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1921,
            settings: {
                slidesToShow: 3.5,
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 2.8,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2.5,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2.1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1.2,
            }
        }
    ]
});