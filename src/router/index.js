import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import HomeView from '@/views/HomeView.vue'
import CreateTinyUrlView from '@/views/CreateTinyUrlView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create-tiny-url',
      name: 'create-tiny-url',
      component: CreateTinyUrlView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  authStore.init()

  if (to.name !== 'login' && to.name !== 'register' && authStore.user === null)
    next({ name: 'login' })
  else if (
    (to.name === 'login' || to.name === 'register') &&
    authStore.user !== null
  )
    next({ name: 'home' })
  else next()
})

export default router
