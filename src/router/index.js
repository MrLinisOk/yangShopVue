import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/Index'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Index',
      name: 'index',
      component: index
    }
  ]
})
