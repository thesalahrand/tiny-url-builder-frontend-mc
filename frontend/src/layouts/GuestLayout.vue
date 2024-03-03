<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div
    class="min-h-screen flex flex-col sm:justify-center items-center py-6 bg-gray-100"
  >
    <div>
      <div class="flex items-center space-x-3">
        <img src="@/assets/logo.svg" width="32" />
        <h1 class="text-xl font-semibold text-gray-900 dark:text-white">
          Tiny URL Builder
        </h1>
      </div>
    </div>

    <div
      class="w-full max-w-md mx-2 mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <router-view />
    </div>
  </div>
</template>
