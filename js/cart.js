//购物车页面
let id = location.search.split("=")[1];
let username = localStorage.getItem("username");
$.get("http://localhost:3000/cart").then(data => {
    let str = "";
    for (let i = 0; i < data.length; i++) {
        str += `
        <li data-id="${data[i].id}">
            <input type="checkbox" class="ck">
            <img src="${data[i].imgUrl}">
            <span>${data[i].title}</span>
            <span class="perPrice">${data[i].price}</span>
            <span class="minus">-</span>
            <input type="text" value="${data[i].num}" class="num">
            <span class="plus">+</span>
            <span class="perTotalPrice">${parseInt(data[i].price)*data[i].num}元</span>
            <span class="del">x</span>
        </li>
        `;
    }
    $("#cartList").html(str);

})