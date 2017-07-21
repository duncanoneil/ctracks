import Vue from 'vue'
import Router from 'vue-router'
import Front from '@/components/Front'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/front',
      name: 'Front',
      component: Front
    }

  ]
})
