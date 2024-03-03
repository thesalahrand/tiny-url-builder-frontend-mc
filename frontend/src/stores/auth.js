import { reactive, ref } from 'vue'
import router from '@/router'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const errors = reactive({
    login: null,
    registration: null,
  })

  function init() {
    user.value = JSON.parse(localStorage.getItem('user')) || null
  }

  async function login(formData) {
    try {
      const resp = await fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const respData = await resp.json()
      if (!resp.ok) {
        errors.login = respData.errors || respData.message
        return
      }

      user.value = respData.data
      localStorage.setItem('user', JSON.stringify(respData.data.user))
      localStorage.setItem('token', JSON.stringify(respData.data.token))
      errors.login = null
      router.push({ name: 'home' })
    } catch (err) {
      errors.login = err
    }
  }

  async function register(formData) {
    try {
      const resp = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/register`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        }
      )
      const respData = await resp.json()
      if (!resp.ok) {
        errors.registration = respData.errors || respData.message
        return
      }

      user.value = respData.data
      localStorage.setItem('user', JSON.stringify(respData.data.user))
      localStorage.setItem('token', JSON.stringify(respData.data.token))
      errors.registration = null
      router.push({ name: 'home' })
    } catch (err) {
      errors.registration = err
    }
  }

  async function logout() {
    try {
      const resp = await fetch(`${import.meta.env.VITE_API_BASE_URL}/logout`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
      })
      await resp.json()

      user.value = null
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      router.push({ name: 'login' })
    } catch (err) {
      errors.registration = err
    }
  }

  return { user, errors, init, login, register, logout }
})
