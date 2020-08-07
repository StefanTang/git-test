

var left = document.querySelector(".left");
var mask = document.querySelector(".mask");
var maxbox = document.querySelector(".maxbox");
var maxboximg = document.querySelector(".maxbox img");


left.onmouseenter = function(){
    mask.style.display = "block";
    maxbox.style.display = "block";

}
left.onmouseleave = function(){
    mask.style.display = "none";
    maxbox.style.display = "none";
}


left.onmousemove = function(en){
    var e = en || event;

    var maskX = e.clientX - offset(left,false).left - mask.clientWidth/2;
    var maskY = e.clientY - offset(left,false).top - mask.clientHeight/2;

    if(maskX <= 0 ){
        maskX = 0;
    }
    if(maskY <= 0 ){
        maskY = 0;
    }
    if(maskX >= left.clientWidth - mask.clientWidth ){
        maskX = left.clientWidth - mask.clientWidth;
    }
    if(maskY >= left.clientHeight - mask.clientHeight ){
        maskY = left.clientHeight - mask.clientHeight;
    }

    mask.style.left = maskX + "px";
    mask.style.top = maskY + "px";


    //比例
    var perX = maskX / (left.clientHeight -  mask.clientHeight);
    var perY= maskY / ( left.clientHeight - mask.clientHeight );



    var maximgX = perX * (maxboximg.clientWidth - maxbox.clientWidth);
    // var maximgY = perY * (maxboximg.clientHeight -  );
    

    maxboximg.style.left = -maximgX + "px" ;

    console.log(maxboximg.style.left);



}





