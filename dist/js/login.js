// var oInput = document.getElementsByTagName("input");
// var oP = document.getElementsByTagName("p");
// oInput[0].onchange = function() {
//     var str = this.value;
//     if (str == "") {
//         oP[0].innerText = "不能为空！";
//     } else {
//         oP[0].innerText = "";
//     }
// }

//登录
$("#btn").click(function() {
    var username = $(".username").val();
    var password = $(".password").val();
    $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
        username: $(".username").val(),
        password: $(".password").val()
    }).then(data => {
        if (data.code == 0) {
            $(".login-message").text("用户名或密码错误");
        } else if (data.code == 1) {
            window.location.href = "../index.html";
            localStorage.setItem("username", JSON.stringify($(".username").val()));
        }
    })
})