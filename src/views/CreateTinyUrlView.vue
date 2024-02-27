<script setup>
import { reactive } from 'vue'
import { useTinyUrlsStore } from '@/stores/tiny-urls'
import InputError from '@/components/InputError.vue'
import { onMounted } from 'vue'

const formData = reactive({
  fullUrl: '',
  customUrl: '',
})

const tinyUrlsStore = useTinyUrlsStore()
</script>

<template>
  <div
    class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <form
      class="max-w-xl space-y-6"
      @submit.prevent="tinyUrlsStore.create(formData)"
    >
      <h5 class="text-xl font-medium text-gray-900 dark:text-white">
        Create a Tiny URL
      </h5>

      <div>
        <label
          for="fullUrl"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Full URL</label
        >
        <input
          type="url"
          v-model="formData.fullUrl"
          id="fullUrl"
          placeholder="https://github.com/thesalahrand/"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        />
        <InputError
          class="mt-2"
          :message="tinyUrlsStore?.errors?.create?.full_url?.[0]"
        />
      </div>

      <div>
        <label
          for="customUrl"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Custom URL (Optional)</label
        >
        <input
          type="text"
          v-model="formData.customUrl"
          id="customUrl"
          placeholder="my-github-account"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          minlength="6"
          maxlength="48"
        />
        <InputError
          class="mt-2"
          :message="tinyUrlsStore?.errors?.create?.custom_url?.[0]"
        />
        <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
          A URL should only consist of alphabets, digits and hyphens (not in the
          beginning, end or consecutively). If you don't specify any URL above,
          we will generate a unique URL for you.
        </p>
      </div>

      <div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
      </div>
    </form>
  </div>
</template>
