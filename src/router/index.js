import Vue from 'vue'
import Router from 'vue-router'
import Front from '@/components/pages/Front'
import About from '@/components/pages/About'
import Contact from '@/components/pages/Contact'
import Activities from '@/components/pages/Activities'
import News from '@/components/pages/News'
import Steering from '@/components/pages/Steering'
import Bikes from '@/components/pages/Bikes'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Front',
      component: Front
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/steering',
      name: 'Streering',
      component: Steering
    },
    {
      path: '/bikes',
      name: 'Bikes',
      component: Bikes
    }
  ]
})
