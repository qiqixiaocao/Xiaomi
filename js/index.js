// banner轮播图1
var swiper1 = new Swiper('#swiper1', {
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

//底部微信下拉
$(function() {
    $(".weixin").hover(
        function() {
            $(".follow-weixin").stop().animate({
                height: "120px"
            }, 200);
        },
        function() {
            $(".follow-weixin").stop().animate({
                height: "0"
            }, 200);
        }
    )
});

// 侧面导航下拉
$(function() {
    $(".follow-li").hover(
        function() {
            $(".follow-img").stop().animate({
                opacity: "1"
            }, 200);
        },
        function() {
            $(".follow-img").stop().animate({
                opacity: "0"
            }, 200);
        }
    )
});
//返回顶部
$(function() {
    var flag = true;
    $(window).scroll(function() {
        if (flag) {
            var st = $(this).scrollTop();
            if (st >= 500) {
                $(".aside-nav li:last").fadeIn();
            } else {
                $(".aside-nav li:last").fadeOut();
            }
        }
    })
    $(".aside-nav li:last").click(function() {
        $("html,body").animate({
            "scrollTop": 0
        }, 500);
    })
});

// $.get("http://localhost:3000/productlist").then(data => {
//     console.log(data);
//     console.log(data[0].price);
//     console.log(data[0].title);
//     console.log(data[0].imgUrl);
//     console.log(data[0].id);
// })

$.get("http://localhost:3000/productlist").then(data => {

    //小米闪购右侧轮播数据动态传递
    // let str = "";
    // for (let i = 0; i < 4; i++) {
    //     let j = Math.floor(Math.random() * 100 + 1);
    //     for (let i = 0; i < 8; i++) {
    //         str += `
    //     <div class="swiper-slide">
    //         <a href="#">
    //             <div class="content">
    //                 <img src="${data[j].imgUrl}" alt="" class="pic">
    //                 <h3 class="title">${data[j].title}</h3>
    //                 <p class="desc">${data[j].title}</p>
    //                 <p class="price"><span>${data[j].price}元</span><del>${data[j].price}元</del></p>
    //             </div>
    //          </a>
    //     </div>
    //     `
    //     }
    //     $("#swiper2 .swiper-wrapper").html(str);
    //}

    //手机商品列表数据动态传递
    let str1 = "";
    for (let i = 0; i < 8; i++) {
        let j = Math.floor(Math.random() * 100 + 1);
        str1 += `
        <li data-id="${data[j].id}">
        <a href="html/detail.html?id=${data[j].id}" target="_blank">
            <div class="content"><img src="${data[j].imgUrl}" alt="" class="pic">
                <h3 class="title">${data[j].title}</h3>
                <p class="desc">${data[j].title}</p>
                <p class="price"><span>${data[j].price}元起</span></p>
            </div>
        </a>
    </li>
    `
    }
    $("#pro-list-1").html(str1);

    //家电商品列表数据动态传递
    let str2 = "";
    for (let i = 0; i < 8; i++) {
        let j = Math.floor(Math.random() * 100 + 1);
        str2 += `
        <li data-id="${data[j].id}">
        <a href="html/detail.html?id=${data[j].id}" target="_blank">
            <div class="content"><img src="${data[j].imgUrl}" alt="" class="pic">
                <h3 class="title">${data[j].title}</h3>
                <p class="desc">${data[j].title}</p>
                <p class="price"><span>${data[j].price}元起</span></p>
            </div>
        </a>
    </li>
    `
    }
    $("#pro-list-2").html(str2);

    // 智能商品列表数据动态传递
    let str3 = "";
    for (let i = 0; i < 8; i++) {
        let j = Math.floor(Math.random() * 100 + 1);
        str3 += `
        <li data-id="${data[j].id}">
        <a href="html/detail.html?id=${data[j].id}" target="_blank">
            <div class="content"><img src="${data[j].imgUrl}" alt="" class="pic">
                <h3 class="title">${data[j].title}</h3>
                <p class="desc">${data[j].title}</p>
                <p class="price"><span>${data[j].price}元起</span></p>
            </div>
        </a>
    </li>
    `
    }
    $("#pro-list-3").html(str3);

    //热门商品列表数据动态传递
    let str4 = "";
    for (let i = 0; i < 8; i++) {
        let j = Math.floor(Math.random() * 100 + 1);
        str4 += `
        <li data-id="${data[j].id}">
        <a href="html/detail.html?id=${data[j].id}" target="_blank">
            <div class="content"><img src="${data[j].imgUrl}" alt="" class="pic">
                <h3 class="title">${data[j].title}</h3>
                <p class="desc">${data[j].title}</p>
                <p class="price"><span>${data[j].price}元起</span></p>
            </div>
        </a>
    </li>
    `
    }
    $("#pro-list-4").html(str4);

    //周边商品列表数据动态传递
    let str5 = "";
    for (let i = 0; i < 8; i++) {
        let j = Math.floor(Math.random() * 100 + 1);
        str5 += `
        <li data-id="${data[j].id}">
        <a href="html/detail.html?id="${data[j].id}" target="_blank">
            <div class="content"><img src="${data[j].imgUrl}" alt="" class="pic">
                <h3 class="title">${data[j].title}</h3>
                <p class="desc">${data[j].title}</p>
                <p class="price"><span>${data[j].price}元起</span></p>
            </div>
        </a>
    </li>
    `
    }
    $("#pro-list-5").html(str5);
})