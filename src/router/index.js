/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2019-11-30 16:38:11
 * @LastEditors  : yizheng.yuan
 * @LastEditTime : 2020-01-13 08:45:50
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import HelloWorld from '@/components/HelloWorld'
import NewPage from '@/components/new'
import test from '@/components/test'

import testSon from '@/components/testSon'

Vue.use(Router)



var router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/hello',
      children: [
        {
          path: '/hello',
          name: 'hello',
          component: HelloWorld,
        },
        {
          path: '/NewPage',
          name: 'NewPage',
          component: NewPage,
        },
        {
          path: '/test',
          name: 'test',
          component: test,

        },
        {
          path: '/testSon/:id',
          name: 'testSon',
          component: testSon,

        }
      ]
    }
  ]
})

console.log('router2:', router)

// router.beforeEach(function (to, from, next) {
//   console.log('to, from, next', to, from, next)
// })

export default router;