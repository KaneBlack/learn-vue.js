import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import HelloList from '@/views/HelloList'
import HelloSPA from '@/views/HelloSPA'
import SpaEditUser from '@/views/SPA/SpaEditUser'
import SpaUsers from '@/views/SPA/SpaUsers'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'HelloList',
      component: HelloList
    },
    {
      path: '/spa',
      name: 'HelloSPA',
      component: HelloSPA
    },
    {
      path: '/users',
      name: 'SpaUsers',
      component: SpaUsers
    },
    {
      path: '/edit-user/:id',
      name: 'SpaEditUser',
      component: SpaEditUser
    }
  ]
})
