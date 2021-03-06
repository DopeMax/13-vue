//入口文件
import Vue from 'vue'


//导入路由包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:mm:ss"){
   return moment(dataStr).format(pattern)
})

//导入vue-resource
import VueResource from 'vue-resource'
//安装
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'https://www.apiopen.top';

//导入MUI的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

//按需导入Mint-UI中的组件
import {
    Header,
    Swipe,
    SwipeItem,
    Button
} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


//导入自己的router.js模块
import router from './router.js'
//导入App根组件
import app from './App.vue'




var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //挂载路由对象到VM实例上

})