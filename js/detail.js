//商品详情页
let id = location.search.split("=")[1];
let username = localStorage.getItem("username");
$.get(`http://localhost:3000/productlist?id=${id}`).then(data => {
    let str = "";
    str += `
    <h3>${data[0].title}</h3>
    <img src="${data[0].imgUrl}" alt="">
    <p>${data[0].price}元</p>
    <span>-</span><input type="text" value="1"><span>+</span>
    <input type="button" value="加入购物车" id="btn">
    `
    $("#detail").html(str);
    $("span").eq(0).click(function() {
        let num = $("input").eq(0).val();
        num--;
        if (num < 1) {
            num = 1;
        }
        $("input").eq(0).val(num);
    })
    $("span").eq(1).click(function() {
        let num = $("input").eq(0).val();
        num++;
        $("input").eq(0).val(num);
    })
    $("input").eq(0).change(function() {
        let num = $("input").eq(0).val();
        if (num < 1) {
            num = 1;
        }
        $("input").eq(0).val(num);
    })
    $("#btn").click(function() {
        if (username) {
            axios.get("http://localhost:3000/cart", {
                params: {
                    id: id
                }
            }).then(data => {
                console.log()
                if (data.data.length == 0) {
                    axios.post("http://localhost:3000/cart", {
                        id: id,
                        imgUrl: $("img").attr("src"),
                        title: $("h3").text(),
                        price: $("p").text(),
                        num: $("input").eq(0).val()
                    });
                    alert("添加成功!");
                    window.location.href = "../index.html";
                } else {
                    axios.get("http://localhost:3000/cart", {
                        params: {
                            username: username,
                            id: id
                        }
                    }).then(gai => {
                        let num = Math.floor(gai.data[0].num);
                        num += Math.floor($("input").eq(0).val())
                        axios.patch(`http://localhost:3000/cart/${id}`, {
                            num: num
                        });
                        alert("添加成功!");
                        window.location.href = "../index.html";
                    })
                }
            })
        } else {
            alert("请先登录！");
            window.location.href = "../html/login.html";
        }
    })
});