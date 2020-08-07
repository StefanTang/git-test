# 我是一个项目说明文档
## 读我，我是第一个，新版本
---
### **Read me**
+ 项目说明文档
    1. 一般会随着项目一起
    2. 作为项目的说明文档方便阅读
---
## git init
把当前目录初始化为版本库

---
## git add 文件名
把 **【工作区（实际持有文件）】** 提交到 **【暂存区】**

---
## git status 查看状态
查看当前目录状态（新增、删除、修改）

---
## git commit -m '提交的注释文本'
把 **【暂存区】** 的内容提交到 **【本地仓库】**

---
## git log
查看操作日志

---
## git reflog
查看简单日志

---
## git diff 文件名
查看变更信息

---
## git reset --head HEAD^
回退到上个版本（^^退回两个版本）
## git reset --hard 191e0c7
回退到指定版本

---
## git remote add origin 仓库地址
origin(别称，别的也可以)<br>
把本地仓库与远程仓库关联



## git remote -v
查看本地仓库关联的远程仓库地址 <br>
origin  https://github.com/StefanTang/git-test.git (fetch) <br>
origin  https://github.com/StefanTang/git-test.git (push)

---
## git push -u origin master
1. git push 本地仓库提交到远程仓库
2. -u origin master 设置默认远成仓库和分支
3. 执行完此命令后，以后可以直接写`git push`提交到远程仓库的master分支


---
***
- require
```js
require.config({
    baseUrl : './js',
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery","./lib/jquery-2.1.4"],
        "m1" : "./module1",
        "m2" : "./module2"
    }
})
```
---

>我是引用效果 <br> 确实

---

**我是加粗**



