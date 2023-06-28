import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/HomePage.vue') }]
  },
  {
    path: '/add-workout',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NewTrainingForm.vue') }]
  },
  {
    path: '/list-weight',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ListWeight.vue') }]
  },
  {
    path: '/add-weight',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AddWeight.vue') }]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
