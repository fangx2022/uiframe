import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const mainPage = () => import(/* webpackChunkName: "mainPage" */ '@/views/mainSystem/mainPage/mainPage.vue')
const homePage = () => import(/* webpackChunkName: "homePage" */ '@/views/mainSystem/homePage/homePage.vue')
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'mainPage',
    meta: { title: '首页' },
    component: mainPage,
    children: [
      {
        path: '/homePage',
        name: 'homePage',
        meta: { title: '首页' },
        component: homePage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
