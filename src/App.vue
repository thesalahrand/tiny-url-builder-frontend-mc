<script setup>
import GuestLayout from './layouts/GuestLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
authStore.init()
</script>

<template>
  <GuestLayout v-if="!authStore.user" />
  <AuthLayout v-if="authStore.user" />
</template>

<style scoped></style>
