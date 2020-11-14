//登录
$("#btn").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    if (username == "" || password == "") {
        $(".login-message").text("用户名密码不能为空");
    } else {
        $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
            username: $(".username").val(),
            password: $(".password").val()
        }).then(data => {
            if (data.code == 0) {
                $(".login-message").text("用户名或密码错误");
            } else if (data.code == 1 && password == data.data.password) {
                alert("登录成功！");
                window.location.href = "../index.html";
                localStorage.setItem("username", JSON.stringify($(".username").val()));
            }
        })
    }
})