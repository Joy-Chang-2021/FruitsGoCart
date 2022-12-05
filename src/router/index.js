import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: 'Shop',
        description: '水果購商品，商品敘述'
      }
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue'),
      meta: {
        title: 'Shopping Cart',
        description: '水果購商品，結帳流程'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.description) {
    document.querySelector('meta[name="description"]').setAttribute('content', to.meta.description)
  }
  next();
})

export default router
