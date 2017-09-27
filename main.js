$('.slider').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 3000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1500,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
            }
        },

        {
            breakpoint: 1300,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
            }
        }
    ]

    }
)
