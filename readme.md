# 13-vue
# 学习的指令顺序
1. 如何定义一个节本的vue代码结构
2. 插值表达式 和 v-text
3. v-cloak
4. v-html
5. v-bind Vue提供的属性绑定机制 缩写是 ：
6. v-on Vue提供的事件绑定机制 缩写是 @

# 编码步骤
1. 导入Vue包
> <script src="https://cdn.bootcss.com/vue/2.4.0/vue.min.js"></script>

2. 创建一个要控制的区域

```
 <!-- 2. 创建一个要控制的区域 -->
 <div id="app">
     <input type="button" value="浪起来">
     <input type="button" value="低调">
     <h4>{{ msg }}</h4>
 </div>
```
