import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '../pages/PageHome'
import PageDeskTop from '../pages/PageDeskTop'
import PageSubNav from '../pages/PageSubNav'
import PageBodyMonitor from '../pages/PageBodyMonitor'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home',
  }, {
    path: '/home',
    name: 'home',
    redirect: '/home/desktop',
    component: PageHome,
    children: [{
      path: 'desktop',
      component: PageDeskTop
    }, {
      path: 'subnav',
      component: PageSubNav
    }, {
      path: 'body-monitor',
      component: PageBodyMonitor
    }]
  }]
})
