import Vue from 'vue'
import routes from '@/routes'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

export default new VueRouter({
  routes,
  linkActiveClass:"active" //这个是在点击router-link 时元素身上会多一个active属性
})