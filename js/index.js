//  --------------- js for toggle menu -------------
var menuitems = document.getElementById("menuitems");

menuitems.style.maxHeight = "0px";

function menutoggle() {
    if (menuitems.style.maxHeight == "0px") {
        menuitems.style.maxHeight = "200px"
    }
    else {
        menuitems.style.maxHeight = "0px"
    }
}

// ------------------- js for single product page -----------------

var ProductImg = document.getElementById("ProductImg")
var SmallImg = document.getElementsByClassName("small-img")

SmallImg[0].onclick = function () {
    ProductImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function () {
    ProductImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function () {
    ProductImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function () {
    ProductImg.src = SmallImg[3].src;
}

// ---------------- js for toggle form ------------------

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

function register () {

    LoginForm.style.transform = "translateX(0px)";
    RegForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}
function login () {

    // LoginForm.style.transform = "translateX(300px)"
    RegForm.style.transform = "translateX(300px)"
    Indicator.style.transform = "translateX(0px)"
}