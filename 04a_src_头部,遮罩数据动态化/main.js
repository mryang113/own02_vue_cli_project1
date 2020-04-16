import Vue from 'vue'
import App from './App.vue'

//1. 配置mock
import "@/mock";

//2, 注册axios
import axios from '@/http';
Vue.prototype.$axios = axios;

//3,注册路由
import router from '@/router'
//4,注册vuex
import store from '@/store'
//5. 引用字体图标
import "@/common/stylus/style.styl"
// 5.1 过渡相关的样式
import "@/common/stylus/transition.styl"
//6. 引入全局组件(icon)
import icon from "components/ele-icon/ele-icon"
Vue.component("ele-icon",icon)


Vue.config.productionTip = false //忽略控制台警告


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
