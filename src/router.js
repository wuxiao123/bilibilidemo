import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import channel from './views/channel'
import dynamic from './views/dynamic'
import shopping from './views/shopping'
import mine from './views/mine'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/channel',
      name: 'channel',
      component: channel
    },
    {
      path: '/dynamic',
      name: 'dynamic',
      component: dynamic
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
