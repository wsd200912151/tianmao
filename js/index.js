$(function(){
    var mySwiper = new Swiper ('.bigCarousel .swiper-container', {
        touchRatio : 1,
        // 如果需要分页器
        pagination: '.swiper-pagination',

    })
    var mySwiper1 = new Swiper ('.smallCarousel .swiper-container', {
        touchRatio : 1,
        slidesPerView : 'auto',
    })
    var mySwiper2 = new Swiper ('.upCarousel .swiper-container', {
        direction: 'vertical',
        loop: true,
        autoplay: 2500,
    })

    var inputBox=$('.input-box');
    var top=$('.bigCarousel').outerHeight();
    $(window).on('scroll',function(){
        var st=$('body').scrollTop();
        if(st > top ){
            inputBox.addClass('red');
        }else{
            inputBox.removeClass('red');
        }
    })












})