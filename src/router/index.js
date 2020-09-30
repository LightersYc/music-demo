import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/main'),
    redirect: '/find',
    children: [
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my'),
      },
      {
        path: '/find',
        name: 'find',
        component: () => import('@/views/find'),
      },
      {
        path: '/friend',
        name: 'friend',
        component: () => import('@/views/friend'),
      },
      {
        path: '/videoPage',
        name: 'videoPage',
        component: () => import('@/views/videoPage'),
      },
    ]
  },
  {
    path: "/login",
    name: 'login',
    component: () => import('@/views/login')
  },
  {
    path: "/loginPhone",
    name: 'loginPhone',
    component: () => import('@/views/login/components/loginPhone')
  }
]

const router = new VueRouter({
  routes
})

export default router
