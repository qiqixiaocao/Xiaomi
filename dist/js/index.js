// banner轮播图1
var swiper1 = new Swiper('#swiper1', {
    effect: 'fade',
    loop: true,
    spaceBetween: 30,
    mousewheel: true,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper2 = new Swiper('#swiper2', {
    slidesPerView: 4,
    spaceBetween: 14,
    slidesPerGroup: 4,
    // mousewheel: true,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

swiper1.el.onmouseover = function() {
    swiper1.autoplay.stop();
};
//鼠标离开开始自动切换
swiper1.el.onmouseout = function() {
    swiper1.autoplay.start();
};

//app下载
$(function() {
    $(".topbar-nav a").eq(10).hover(
        function() {
            $(".appcode").stop().animate({
                height: "130px"
            }, 200);
        },
        function() {
            $(".appcode").stop().animate({
                height: "0"
            }, 200);
        }
    )
});

//购物车
$(function() {
    $(".topbar-cart").hover(
        function() {
            $(".cart-menu").stop().animate({
                height: "100px"
            }, 200);
        },
        function() {
            $(".cart-menu").stop().animate({
                height: "0"
            }, 200);
        }
    )
});

//导航2下拉菜单
$(function() {
    $(".header-nav").hover(
        function() {
            $(".header-floor2").stop().animate({
                height: "230px"
            }, 200);
        },
        function() {
            $(".header-floor2").stop().animate({
                height: "0"
            }, 200);
        }
    )
});

//二级菜单
$(function() {
    $(".menu-floor1 li").hover(
        function() {
            $(".menu-floor2").stop().animate({
                width: "966px"
            }, 200);
        },
        function() {
            $(".menu-floor2").stop().animate({
                width: "0"
            }, 200);
        }
    )
});