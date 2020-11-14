//注册
// $("#btn").click(function () {
//     var username = $(".username").val();
//     var password = $(".password").val();
//     $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
//         username: $(".username").val(),
//         password: $(".password").val()
//     }).then(data => {
//         if (data.code == 0) {
//             $(".login-message").text("用户名已存在");
//         } else if (data.code == 1) {
//             window.location.href = "../html/login.html";
//             localStorage.setItem("username", JSON.stringify($(".username").val()));
//         }
//     })
// })


//副本
$("#btn").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    if (username == "" || password == "") {
        $(".login-message").text("用户名密码不能为空");
    } else {
        $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
            username: $(".username").val(),
            password: $(".password").val()
        }).then(data => {
            if (data.code == 0) {
                $(".login-message").text("用户名已存在");
            } else if (data.code == 1) {
                alert("注册成功！");
                window.location.href = "../html/login.html";
                localStorage.setItem("username", JSON.stringify($(".username").val()));
            }
        })
    }
})