var giohang = new Array();

let timeout;

function addcart(x) {
    let boxsp = x.parentElement.children;
    let hinh = boxsp[0].src;
    let tensp = boxsp[1].innerText;
    let gia = boxsp[3].children[0].innerText;
    let sp = new Array(hinh, tensp, gia);

    let kt = 0;
    for (let i = 0; i < giohang.length; i++) {
        if(giohang[i][1] == tensp){
            kt = 1;
        }
    }

    if(kt == 0){
        giohang.push(sp);
    }

    sessionStorage.setItem("giohang", JSON.stringify(giohang));
    document.getElementById("modal").style.display="flex";
    timeout = setTimeout(alertFunc, 1500);
}

function alertFunc() {
    document.getElementById("modal").style.display="none";
}

function mycart() {
    var ttgh = "";
    for (let i = 0; i < giohang.length; i++) {
        ttgh += '<div class="product">' +
            '<div class="product__left">' +
            '< img src = "' + giohang[i][0] + '" alt = "" >' +
            '<p>' + giohang[i][1] + '</p>' +
            '</div >' +
            '<div class="product__right">' +
            '<div class="product__right-price">' +
            '<p>' + giohang[i][2] + '</p>' +
            '</div>' +
            '<div class="product__right-soluong">' +
            '<p>1</p>' +
            '</div>' +
            '<div class="product__right-thaotac">' +
            '<p>Xoá</p>' +
            '</div>' +
            '</div>' +
            '</div >'
    }
    document.getElementById("mycart").innerHTML = ttgh;
}

function showgiohang_trangthanhtoan() {
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh = "";
    var tong = 0;
    for (let i = 0; i < giohang.length; i++) {   
        tong += giohang[i][2]
        ttgh += `<div class="product">
        <div class="product__left">
            <img src="${giohang[i][0]}" alt="">
            <p>${giohang[i][1]}</p>
        </div>
        <div class="product__right">
            <div class="product__right-price">
                <p>${giohang[i][2]}</p>
            </div>
            <div class="product__right-soluong">
                <div id="buy-amount">
                    <p id="soluong">1</p>
                </div>
            </div>
        </div>
    </div>`
    }
    document.getElementById("mycart").innerHTML = ttgh;
}


function showgiohang_total() {
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);
    var ttgh = "";
    var tong = 0.0;
    for (let i = 0; i < giohang.length; i++) {
        tong += parseFloat(giohang[i][2]);
    }
    ttgh += `<div class="pay">
    <div class="total">
        <p>Thành tiền: <span>${tong.toLocaleString('en-US', {minimumFractionDigits: 6})}</span></p>
    </div>
    <div class="button-buy">
        <button id="reset-button" onclick="deletelocal()">MUA</button>
    </div>
    </div>`
    document.getElementById("mycart1").innerHTML = ttgh;
}

function deletelocal(){
    sessionStorage.removeItem("giohang");
    location.reload();
}






