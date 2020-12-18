$(function(){
    $('.slider__inner').slick(
        {
            // dots: true,
            infinite: true,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true,
            cssEase: 'linear',
            arrows: false,
            // responsive: [
            //     {
            //         breakpoint: 1024,
            //         settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 3,
            //         infinite: true,
            //         dots: true
            //         }
            //     }
            // ]
        }
    );
});
// $(document).ready(function(){
//     $('.your-class').slick({
//       setting-name: setting-value
//     });
//   });