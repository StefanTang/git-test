var body = document.querySelector("body");

// 以下为头部JS

// 获取头部右侧导航栏
function turnRed(x) {
    x.style.color = "red";
}
function textTurnBack(x) {
    x.style.color = "#9d9e9e";
}

// headLocationA.onmouseenter = turnRed(this);
// 为什么不能这样用？


//获取头部左侧定位栏 方法二
var headLocation = document.querySelector(".headLocation");
var headLocationA = document.querySelector(".headLocationA");
var headLocationHover = document.querySelector(".headLocation-hover");
var headLocationHover2 = document.querySelector(".headLocation-hover2");


//点击hover下别的地点，自动更新到上面
headLocation.onclick = function (en) {
    var e = en || event;
    var target = e.target || e.srcElement;

    var headLocationA = document.querySelectorAll(".headLocationA");
    // var headLocationHover = document.querySelector(".headLocation-hover");
    // var headLocationHover2 = document.querySelector(".headLocation-hover2");

    e.preventDefault();

    // console.log(target.innerText);

    if (target.parentNode.parentNode.className == "headLocation-hover") {
        var con1 = target.innerText;
        headLocationA[0].innerHTML = '<img src="../images/head-location.png" alt=""> ' + con1;
        headLocationA[1].innerHTML = '<img src="../images/head-location.png" alt=""> ' + con1;
    }
}





headLocationA.onmouseenter = function () {
    headLocationHover.style.display = "block";
    headLocationHover2.style.display = "block";
};
headLocationA.onmouseleave = function () {
    headLocationHover.style.display = "none";
};
headLocationHover.onmouseenter = function () {
    headLocationHover.style.display = "block";
    headLocationHover2.style.display = "block";
};
headLocationHover.onmouseleave = function () {
    headLocationHover.style.display = "none";
    headLocationHover2.style.display = "none";
};
headLocationHover2.onmouseenter = function () {
    headLocationHover.style.display = "block";
};
headLocationHover2.onmouseleave = function () {
    headLocationHover2.style.display = "none";
    headLocationHover.style.display = "none";
};

var headNavLi01A = document.querySelector(".headNavLi01A");
headNavLi01A.onmouseenter = function () {
    headNavLi01A.style.color = "red";
};
headNavLi01A.onmouseleave = function () {
    headNavLi01A.style.color = "#9d9e9e";
};


//获取头部右侧导航栏
var myJDA = document.querySelector(".myJDA");
var myJDHover2 = document.querySelector(".myJD-hover2");
var myJDHover = document.querySelector(".myJD-hover");

myJDA.onmouseenter = function () {
    myJDHover2.style.display = "block";
    myJDHover.style.display = "block";
}
myJDA.onmouseleave = function () {
    myJDHover2.style.display = "none";
    myJDHover.style.display = "none";
}
myJDHover2.onmouseenter = function () {
    myJDHover2.style.display = "block";
    myJDHover.style.display = "block";
}
myJDHover2.onmouseleave = function () {
    myJDHover2.style.display = "none";
    myJDHover.style.display = "none";
}
myJDHover.onmouseenter = function () {
    myJDHover2.style.display = "block";
    myJDHover.style.display = "block";
}
myJDHover.onmouseleave = function () {
    myJDHover2.style.display = "none";
    myJDHover.style.display = "none";
}



// 以下为“返回头部”小模块
var elevatorToTop = document.querySelector(".elevatorToTop");

elevatorToTop.onclick = function () {
    var pageScroll = document.documentElement.scrollTop;
    var timer = setInterval(function () {
        pageScroll -= 50;
        if (pageScroll <= 0) {
            clearInterval(timer);
        }
        document.documentElement.scrollTop = pageScroll;
    }, 10)
}

window.onscroll = function () {
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    var target = st +(document.documentElement.clientHeight)/2;
    animate(elevatorToTop,{"top" : target});
}




// 以下为首页banner图轮播
var bBanner = document.querySelector(".bBanner");
var bImg = document.querySelectorAll(".bannerImg img");
var bLeft = document.querySelector(".bLeft");
var bRight = document.querySelector(".bRight");
var dianP = document.querySelectorAll(".dian p");

var showIndex = 0
var bTimer;

// bImg[showIndex].className = "bShow";
// dianP[showIndex].className = "bActive";
animate(bImg[showIndex], { 'opacity': 1 }, function () {
    bTimer = setInterval(function () {
        bShowNext();
    }, 1000)
})

bLeft.onclick = function () {
    clearInterval(bTimer);
    clearInterval(bImg[showIndex].timer);

    bShowPrev();

    bTimer = setInterval(function () {
        bShowNext();
    }, 1000)
}

bRight.onclick = function () {
    clearInterval(bTimer);
    clearInterval(bImg[showIndex].timer);

    bShowNext();

    bTimer = setInterval(function () {
        bShowNext();
    }, 1000)
}

for (var b = 0; b < dianP.length; b++) {
    dianP[b].index = b;
    dianP[b].onclick = function () {
        clearInterval(bTimer);
        clearInterval(bImg[showIndex].timer);

        bImg[showIndex].className = "";
        dianP[showIndex].className = "";
        bImg[showIndex].style.opacity = "0.2";

        showIndex = this.index;

        bImg[showIndex].className = "bShow";
        dianP[showIndex].className = "bActive";
        // bImg[showIndex].style.opacity = "1";
        animate(bImg[showIndex], { 'opacity': 1 });

        bTimer = setInterval(function () {
            bShowNext();
        }, 1000)
    }
}


function bShowNext() {
    //清除上次样式
    bImg[showIndex].className = "";
    dianP[showIndex].className = "";
    bImg[showIndex].style.opacity = "0.2";

    showIndex++;

    if (showIndex >= bImg.length) {
        showIndex = 0;
    }

    bImg[showIndex].className = "bShow";
    dianP[showIndex].className = "bActive";
    // bImg[showIndex].style.opacity = "1";
    animate(bImg[showIndex], { 'opacity': 1 });
}

function bShowPrev() {
    //清除上次样式
    bImg[showIndex].className = "";
    dianP[showIndex].className = "";
    bImg[showIndex].style.opacity = "0.2";

    showIndex--;

    if (showIndex < 0) {
        showIndex = bImg.length - 1;
    }

    bImg[showIndex].className = "bShow";
    dianP[showIndex].className = "bActive";
    // bImg[showIndex].style.opacity = "1";

    animate(bImg[showIndex], { 'opacity': 1 });
}


