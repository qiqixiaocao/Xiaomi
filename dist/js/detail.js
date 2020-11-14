//商品详情页
let id = location.search.split("=")[1];
let username = localStorage.getItem("username");
$.get(`http://localhost:3000/productlist?id=${id}`).then(data => {
    let str = "";
    str += `
    <div class="detail-main">
        <img src="${data[0].imgUrl}" alt="" id="imgUrl">
        <div class="detail-message">
            <h3 id="title">${data[0].title}</h3>
            <p id="price">${data[0].price}元</p>
            <div class="choose-num">
                <span id="jian">-</span><input type="text" value="1" id="num"><span id="jia">+</span>
            </div>
            <input type="button" value="加入购物车" id="btn">
        </div>
    </div>
    `
    let str1 = ""
    str1 += `
    <div class="container">
        <h2>${data[0].title}</h2>
        <span>用户评价</span>
    </div>
    `
    $("#detail").html(str);
    $("#detail-title").html(str1);
    $("#jian").click(function() {
        let num = $("#num").val();
        num--;
        if (num < 1) {
            num = 1;
        }
        $("#num").val(num);
    })
    $("#jia").click(function() {
        let num = $("#num").val();
        num++;
        $("#num").val(num);
    })
    $("#num").change(function() {
        let num = $("#num").val();
        if (num < 1) {
            num = 1;
        }
        $("#num").val(num);
    })
    $("#btn").click(function() {
        if (username) {
            axios.get("http://localhost:3000/cart", {
                params: {
                    id: id
                }
            }).then(data => {
                if (window.confirm("确定要添加吗？")) {
                    if (data.data.length == 0) {
                        axios.post("http://localhost:3000/cart", {
                            id: id,
                            imgUrl: $("#imgUrl").attr("src"),
                            title: $("#title").text(),
                            price: $("#price").text(),
                            num: $("#num").val()
                        });
                        alert("添加成功!");
                        window.location.href = "../html/cart.html";
                    } else {
                        axios.get("http://localhost:3000/cart", {
                            params: {
                                username: username,
                                id: id
                            }
                        }).then(gai => {
                            let num = Math.floor(gai.data[0].num);
                            num += Math.floor($("#num").val());
                            axios.patch(`http://localhost:3000/cart/${id}`, {
                                num: num
                            });
                            alert("添加成功!");
                            window.location.href = "../html/cart.html";
                        })
                    }
                } else {
                    return false;
                }
            });
        } else {
            alert("请先登录！");
            window.location.href = "../html/login.html";
        }
    })
});