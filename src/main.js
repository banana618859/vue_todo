/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-11-30 16:38:11
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-01-10 08:12:56
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

console.log('router0:', router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
