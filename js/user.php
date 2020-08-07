<?php

header("Content-Type:text/html;charset=utf-8");

$user = $_REQUEST['user'];
$pass = $_REQUEST['pass'];

//1 链接数据库
$link = mysqli_connect('localhost', 'root', 'root', 'gp-03');
if (!$link) {
    echo '{"err":0,"msg":"链接失败"}';
    die();
}

// echo "OK—数据库连接成功！";

//2 设置字符集
mysqli_set_charset($link, 'utf8');

    //查询数据库是否存在
    $login_sql = "select * from account where user='$user' and pass='$pass' ";
    $login_res = mysqli_query($link, $login_sql);//执行语句，返回资源语句
    $login_arr = mysqli_fetch_all($login_res);//解析资源语句，返回数组
    if (count($login_arr)>0) {
        echo '{"err":1,"msg":"登录成功😊"}';
    } else {
        echo '{"err":-1,"msg":"账号或密码错误😡"}';
    }

// echo "BYE—数据库准备关闭！";

//4 关闭连接
mysqli_close($link);

?>
