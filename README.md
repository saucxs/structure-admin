# [structure-admin](https://github.com/saucxs/structure-admin)
[![](https://img.shields.io/badge/Powered%20by-saucxs%20-brightgreen.svg)](https://github.com/saucxs/structure-admin)
[![GitHub license](https://img.shields.io/github/license/saucxs/structure-admin.svg)](https://github.com/saucxs/structure-admin/blob/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/saucxs/structure-admin.svg)](https://github.com/saucxs/structure-admin/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/saucxs/structure-admin.svg)](https://github.com/saucxs/structure-admin/network)
[![GitHub issues](https://img.shields.io/github/issues/saucxs/structure-admin.svg)](https://github.com/saucxs/structure-admin/issues)

structure-admin是一个后台管控系统的架子，技术栈：nodeJS+vue+vuex+mysql+redis，前端使用vue的element-ui的组件库，后端使用nodeJS的服务，数据库mysql，缓存使用的是redis
，后端完全使用`nodeJS`，数据库使用`mysql`，基于`nodejs的thinkjs框架搭建的`，全栈开发。
支持：
> + 1、vuex来实现状态管理
> + 2、静态页面，引入后端服务（nodeJs）
> + 3、组件是用的是element-ui
> + 4、页面布局是上左右，左右布局使用的弹性和布局flex，左边定宽，右边计算宽度
> + 5、左右的滚动条是相互独立的，去掉body上的滚动条

如果喜欢`nodeJS`写的后端，支持大前端，支持全栈开发，请请`star`并`fork`项目。

如有使用问题请留言。

### 一、技术栈
> + ThinkJS（ Node端框架） [官方网站](https://thinkjs.org/)
> + Vue.js（客户端双向数据绑定框架）  [官方网站](https://cn.vuejs.org/)

### 二、线上地址
线上地址： [线上地址](http://structure_admin.mwcxs.top)，账号：test，密码：123456

### 三、系统截图
#### 3.1 登录页
![image](https://img2018.cnblogs.com/blog/900740/201809/900740-20180918200317862-1493056324.png)
#### 3.1 主页
![image](https://img2018.cnblogs.com/blog/900740/201809/900740-20180918200409672-1321068027.png)


### 四、本地运行程序
1、首先你的环境是nodejs，不会安装配置参考：[nodejs环境配置](http://www.mwcxs.top/page/420.html)

2、clone下来项目
````
git clone https://github.com/saucxs/structure-admin.git
````
3、分别针对前端vue的structure-admin-web的文件夹和node后端structure-admin-node，安装相应依赖
````
npm install
````
4、安装redis（可以考虑安装RedisDesktopManager）

参考：[安装window下的redis，redis可视化管理工具（Redis Desktop Manager）安装，基础使用，实例化项目](http://www.mwcxs.top/page/421.html)

5、安装mysql，这个就不赘述

6、修改nodejs的后端的配置文件adapter.js，config.js这两个文件中

````
adapter.js

exports.cache = {
    type: 'redis',
    common: {
        timeout: 24 * 60 * 60 * 1000 // millisecond
    },
    redis: {
        handle: redisCache,
        host: '127.0.0.1',
        port: 6379,
        password: 'a123456'  //redis安装时候设置的秘密
    }
};
//
//
exports.model = {
  type: 'mysql',
  common: {
    logConnect: true,
    logSql: true,
    logger: msg => think.logger.info(msg)
  },
  mysql: {
    handle: mysql,
    database: 'structure_admin',
    prefix: 'structure_',
    encoding: 'utf8',
    host: '127.0.0.1',   //本地数据库
    port: '3306',　　　　　//数据库端口
    user: 'root',    //数据库的用户名
    password: '123456',    //数据库该用户名的密码
    dateStrings: true
  }
};
````
7、数据库文件，地址在``structure-admin-node/src/common/mysql/structure_admin.sql``

8、分别对前后端分离的项目启动

(1)前端vue的structure-admin-web的启动
````
npm run dev
 ````

(2)和node后端structure-admin-node的启动
````
npm start
 ````

### 说明
+ 周报系统是基于structure-admin后台管理框架下搭建，周报系统演示地址为：[系统网站平台](http://weekly.mwcxs.top)
+ 周报系统源码地址：[周报系统源码地址](https://github.com/saucxs/weekly)
+ 已经封装成npm包[vue-node-cli](https://github.com/saucxs/vue-node-cli)，形成前后端全栈开发-管控系统的模板。
