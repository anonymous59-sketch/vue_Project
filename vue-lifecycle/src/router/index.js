import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/hook',
      name:'lifecycleHook',
      component: () => import('../views/LifeCycleHook.vue'),
    },
    {
      path:'/watch',
      name:'watchTest',
      component: () => import('@/views/WatchTest.vue'),
    },    
    {
      path:'/component',
      name:'oneComponent',
      component: () => import('@/views/OneComponentApp.vue'),
    },    
    {
      path:'/multicomponent',
      name:'multiComponent',
      component: () => import('@/views/MultiComponentApp.vue'),
    },
  ],
})

export default router
