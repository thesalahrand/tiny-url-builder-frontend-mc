import { reactive, ref } from 'vue'
import router from '@/router'
import { defineStore } from 'pinia'

export const useTinyUrlsStore = defineStore('tiny-urls', () => {
  const tinyUrls = ref([])
  const errors = reactive({
    create: null,
  })

  async function init() {
    try {
      const resp = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/tiny-urls`,
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      const respData = await resp.json()
      tinyUrls.value = respData.data
    } catch (err) {
      console.log(err)
    }
  }

  async function create(formData) {
    try {
      const resp = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/tiny-urls`,
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
          body: JSON.stringify(formData),
        }
      )
      const respData = await resp.json()
      if (!resp.ok) {
        errors.create = respData.errors || respData.message
        return
      }

      router.push({ name: 'home' })
    } catch (err) {
      console.log(err)
    }
  }

  async function remove(id) {
    if (
      !confirm(
        'Are you sure deleting the URL? This operation can not be undone.'
      )
    )
      return

    try {
      const resp = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/tiny-urls/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
      await resp.json()
      tinyUrls.value = tinyUrls.value.filter((tinyUrl) => tinyUrl.id !== id)
    } catch (err) {
      console.log(err)
    }
  }

  return { tinyUrls, errors, init, create, remove }
})
