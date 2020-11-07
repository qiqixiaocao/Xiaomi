// 轮播图
var swiper = new Swiper('.swiper-container', {
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

swiper.el.onmouseover = function() {
    swiper.autoplay.stop();
};
//鼠标离开开始自动切换
swiper.el.onmouseout = function() {
    swiper.autoplay.start();
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