$(function(){
    $('.slider__inner').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });
});
// $(document).ready(function(){
//     $('.your-class').slick({
//       setting-name: setting-value
//     });
//   });