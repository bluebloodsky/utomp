import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '../pages/PageHome'
import PageDeskTop from '../pages/PageDeskTop'
import PageSubNav from '../pages/PageSubNav'
import PageBodyMonitor from '../pages/PageBodyMonitor'
import PageCableMonitor from '../pages/PageCableMonitor'
import PageNotFind from '../pages/PageNotFind'
Vue.use(Router)

const router = new Router({
  routes: [{
    path: '/',
    redirect: '/home',
  }, {
    path: '/home',
    name: 'home',
    redirect: '/home/desktop',
    component: PageHome,
    children: [{
      path: 'not-find',
      component: PageNotFind
    },{
      path: 'desktop',
      component: PageDeskTop
    }, {
      path: 'subnav',
      component: PageSubNav
    }, {
      path: 'body-monitor',
      component: PageBodyMonitor
    }, {
      path: 'cable-monitor',
      component: PageCableMonitor
    }]
  }]
})

router.beforeEach((to, from, next) => {
  if (to.matched.length == 0) {
    next({
      path: '/home/not-find'
    })
  } else {

    next()
  }
})

export default router
