// 轮播图
var swiper = new Swiper('.swiper-container', {
    effect: 'fade',
    loop: true,
    spaceBetween: 30,
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

//app下载
$(function() {
    $(".topbar-nav a").eq(10).hover(
        function() {
            $(".appcode").stop().animate({
                height: "130px"
            }, 400);
        },
        function() {
            $(".appcode").stop().animate({
                height: "0"
            }, 400);
        }
    )
});

//购物车
$(function() {
    $(".topbar-cart").hover(
        function() {
            $(".cart-menu").stop().animate({
                height: "100px"
            }, 400);
        },
        function() {
            $(".cart-menu").stop().animate({
                height: "0"
            }, 400);
        }
    )
});

//导航2下拉菜单
$(function() {
    $(".header-nav").hover(
        function() {
            $(".header-floor2").stop().animate({
                height: "230px"
            }, 400);
        },
        function() {
            $(".header-floor2").stop().animate({
                height: "0"
            }, 400);
        }
    )
});

//二级菜单
$(function() {
    $(".menu-floor1 li").hover(
        function() {
            $(".menu-floor2").stop().animate({
                width: "966px"
            }, 400);
        },
        function() {
            $(".menu-floor2").stop().animate({
                width: "0"
            }, 400);
        }
    )
});