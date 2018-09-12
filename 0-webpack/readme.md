# Webpack

## 1 存在现状
在网页中引入的常见静态资源有哪些？
    - JS
    - css
    - Images
    - 字体文件(Fonts)
    - 模板文件：.ejs .jade .vue[这是在webpack中定义组件的方式，推荐这么用]
## 2 网页引入的静态资源多了以后有什么问题？
    - 网页加载速度慢，因为我们要发起很多次的二次请求;
    - 要处理错综复杂的依赖关系
## 3 如何解决上述问题
    - 合并、压缩、精灵图、图片的Base64编码
    - 可以使用之前学过的requireJS、也可以使用webpack可以解决哥哥包之间的复杂依赖关系，项目构建工具。
## 4 解决上面问题的方案
1. 使用Gulp
2. 使用Webpack
## 5 什么是webpack
webpack是前端的一个项目构建工具，它是基于Node.js 开发出来的一个前端工具。

## 6 webpack安装
- 查看版本使用命令
>cnpm view webpack versions
- 版本选择及安装
>cnpm i webpack@3.12.0 -g
- webpack打包命令
>webpack .\src\main.js .\dist\bundle.js
- index页面引用bundle.js文件

## 7 webpack自动打包
- webpack基本配置文件
>webpack
