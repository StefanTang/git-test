$user = $(".userNameIpt");
$pass = $(".pwIpt");

//判断是否记住了密码，自动填入
if(getCookie('user') && getCookie('pass')){
  $user.val(getCookie('user')) ;
  $pass.val(getCookie('pass')) ;
  $(".remBox").prop("checked",true);
}


// 登录连接
$(".loginBtn").click(function (e) {
  e.preventDefault();

  if (!$user.val() || !$pass.val()) {
    alert("账号或密码不能为空！");
    return false;
  }
  //   console.log($('form').serialize());
  $.ajax({
    type: "get",
    url: "../js/user.php",
    data: $("form").serialize(),
    dataType: "json",
    cache: false,
    success: function (json) {
      //在这里，如果用户需要，记录账号密码cookie
      alert(json.msg);
      if (json.err == 1) {
        if ($(".remBox").prop("checked")) {
          setCookie({key: "user",val: $user.val(),days: 3,});
          setCookie({key: "pass",val: $pass.val(),days: 3,});
        } else {
          removeCookie('user');
          removeCookie('pass');
        }
      }
    },
    error: function () {
      alert("请求失败");
      return false;
    },
  });
});

$que = $(".que a");
$que.hover(
  function () {
    $que.css({ "text-decoration": "underline", color: "#cb2a2d" });
  },
  function () {
    $que.css({ "text-decoration": "none", color: "#9a9a9a" });
  }
);

//头部下大提示部分
$att = $(".att a");
$att.hover(
  function () {
    $att.css("text-decoration", "underline");
  },
  function () {
    $att.css("text-decoration", "none");
  }
);

//输入框选择logo变深色
$(".userNameIpt").click(function () {
  $(".userNameLogo").css("background-position", "0 -48px");
});
$(".userNameIpt").blur(function () {
  $(".userNameLogo").css("background-position", "0 0");
});
$(".pwIpt").click(function () {
  $(".pwLogo").css("background-position", "-48px -48px");
});
$(".pwIpt").blur(function () {
  $(".pwLogo").css("background-position", "-48px 0");
});
