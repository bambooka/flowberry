$('.slider').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    centerMode: false,
    variableWidth: false,
    responsive: [
        {
            breakpoint: 3000,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 3,
                variableWidth: true
            }
        },
        {
            breakpoint: 1440,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1,
                variableWidth: true
            }
        },

        {
            breakpoint: 1025,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1,
                variableWidth: true
            }
        }
    ]

    }
)
