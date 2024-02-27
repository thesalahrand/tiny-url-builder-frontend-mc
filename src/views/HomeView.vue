<script setup>
import { RouterLink } from 'vue-router'
import { useTinyUrlsStore } from '@/stores/tiny-urls'
import { onMounted } from 'vue'

const tinyUrlsStore = useTinyUrlsStore()

onMounted(() => {
  tinyUrlsStore.errors.create = null
  tinyUrlsStore.init()
})
</script>

<template>
  <div class="w-full flex items-center justify-between mb-4">
    <h5 class="text-xl font-semibold text-gray-900 dark:text-white">
      Tiny URLs
    </h5>
    <router-link
      :to="{ name: 'create-tiny-url' }"
      class="flex items-center gap-x-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Create
    </router-link>
  </div>

  <div class="relative overflow-x-auto mb-4">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">ID</th>
          <th scope="col" class="px-6 py-3">Full URL</th>
          <th scope="col" class="px-6 py-3">Tiny URL</th>
          <th scope="col" class="px-6 py-3">Last Updated</th>
          <th scope="col" class="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          v-for="tinyUrl in tinyUrlsStore.tinyUrls"
          :key="tinyUrl.id"
        >
          <td class="px-6 py-4">
            {{ tinyUrl.id }}
          </td>
          <td class="px-6 py-4">
            <div class="inline-flex gap-x-1">
              <!-- <CopyToClipboard
                  :text-to-copy="tinyUrl.full_url"
                  toast-msg="Full URL copied to clipboard."
                /> -->
              <a
                :href="tinyUrl.fullUrl"
                class="text-blue-600 dark:text-blue-500 cursor-pointer underline"
                >{{ tinyUrl.fullUrl }}</a
              >
            </div>
          </td>
          <td class="px-6 py-4">
            <div class="inline-flex gap-x-1">
              <!-- <CopyToClipboard
                  :text-to-copy="tinyUrl.tiny_url"
                  toast-msg="Tiny URL copied to clipboard."
                /> -->
              <a
                :href="tinyUrl.tinyUrl"
                class="text-blue-600 dark:text-blue-500 cursor-pointer underline"
                >{{ tinyUrl.tinyUrl }}</a
              >
            </div>
          </td>
          <td class="px-6 py-4">
            {{ new Date(tinyUrl.updatedAt).toLocaleDateString() }}
          </td>
          <td class="px-6 py-4">
            <div class="inline-flex gap-x-2">
              <button
                type="button"
                class="px-3 py-2 mr-2 text-xs font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped></style>
