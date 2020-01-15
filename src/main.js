/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-11-30 16:38:11
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-01-15 13:26:11
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// menu
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

//vuex
import store from './store/index'


/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 此处路由应该作为页面跳转拦截，例如用户还没登录，就重定向到登录页面，不允许进入其他页面
// router.beforeEach((to, from, next) => {
//   // console.log('to, 22from, next:', to, from);
//   console.log('####-router.beforeEach-此处修改显示数据####')
//   store.commit('changeBaseConfig', to.path)
//   next()
// })




