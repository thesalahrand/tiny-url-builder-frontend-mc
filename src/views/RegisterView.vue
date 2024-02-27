<script setup>
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
import InputError from '@/components/InputError.vue'
import { onMounted } from 'vue'

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
})

const authStore = useAuthStore()

onMounted(() => {
  authStore.errors.registration = null
})
</script>

<template>
  <form class="space-y-6" @submit.prevent="authStore.register(formData)">
    <h5 class="text-xl font-semibold text-gray-900 dark:text-white">
      Sign up to our platform
    </h5>

    <div class="mb-6">
      <label
        for="firstName"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >First Name</label
      >
      <input
        type="text"
        id="firstName"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="John"
        required=""
        v-model="formData.firstName"
      />
      <InputError
        class="mt-2"
        :message="authStore?.errors?.registration?.first_name?.[0]"
      />
    </div>

    <div class="mb-6">
      <label
        for="last_name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Last Name</label
      >
      <input
        type="text"
        id="lastName"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Doe"
        required=""
        v-model="formData.lastName"
      />
      <InputError
        class="mt-2"
        :message="authStore?.errors?.registration?.last_name?.[0]"
      />
    </div>

    <div class="mb-6">
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Email</label
      >
      <input
        type="email"
        id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="john.doe@company.com"
        required=""
        v-model="formData.email"
      />
      <InputError
        class="mt-2"
        :message="authStore?.errors?.registration?.email?.[0]"
      />
    </div>

    <div class="mb-6">
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Password</label
      >
      <input
        type="password"
        id="password"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="•••••••••"
        required=""
        v-model="formData.password"
      />
      <InputError
        class="mt-2"
        :message="authStore?.errors?.registration?.password?.[0]"
      />
    </div>

    <div class="mb-6">
      <label
        for="passwordConfirmation"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Confirm Password</label
      >
      <input
        type="password"
        id="passwordConfirmation"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="•••••••••"
        required=""
        v-model="formData.passwordConfirmation"
      />
      <InputError
        class="mt-2"
        :message="authStore?.errors?.registration?.password_confirmation?.[0]"
      />
    </div>

    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Register
    </button>

    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
      Already have an account?
      <router-link
        :to="{ name: 'login' }"
        class="text-blue-700 hover:underline dark:text-blue-500"
        >Login now</router-link
      >
    </div>
  </form>
</template>

<style scoped></style>
