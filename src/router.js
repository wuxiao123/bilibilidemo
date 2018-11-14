import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index'
import channel from './views/channel'
import dynamic from './views/dynamic'
import shopping from './views/shopping'
import mine from './views/mine'
import live from './views/live'
import recommend from './views/recommend'
import chasing from './views/chasing'
import indexc from './views/indexc'
import nba from './views/nba'
import meet from './views/meet'
import miao from './views/miao'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/recommend',
      children: [
        {
          path: '/live',
          name: 'live',
          component: live
        }
        ,
        {
          path: '/recommend',
          component: recommend
        },
        {
          path: '/chasing',
          component: chasing
        },
        ,
        {
          path: '/miao',
          component: miao
        },
        {
          path: '/indexc',
          component: indexc
        },
        {
          path: '/nba',
          component: nba
        },
        {
          path: '/meet',
          component: meet
        }
      ]
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
