<template>
  <section class="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
    <img src="/assets/svgs/logo-type.svg" alt="Logo" class="w-32" />

    <h1 class="text-3xl font-bold text-gray-800 mt-16">Sign In</h1>

    <p class="mt-4 text-center text-gray-500">
      Manage your employees to achieve <br />
      bigger goals for your company
    </p>

    <form @submit.prevent="handleLogin" class="w-full max-w-sm bg-white shadow-md rounded-lg p-6 mt-12">
      <div class="mb-4">
        <label class="block text-sm text-gray-600 mb-2">Email Address</label>
        <input
          type="email"
          v-model="form.email"
          placeholder="you@example.com"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-6">
        <label class="block text-sm text-gray-600 mb-2">Password</label>
        <input
          type="password"
          v-model="form.password"
          placeholder="********"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Sign In
      </button>
      <p class="mt-4 text-center text-gray-500">
        Belum punya akun? 
      <NuxtLink to="/register" class="text-blue-600 hover:underline">Daftar di sini</NuxtLink>
      </p>
    </form>
  </section>
</template>

<script setup>
definePageMeta({
    middleware: ['sanctum:guest'],
});
import { reactive } from 'vue'
import { navigateTo, useSanctumAuth } from '#imports'

// Reactive form
const form = reactive({
  email: '',
  password: ''
})

// Ambil fungsi 'login' dari modul nuxt-auth-sanctum
const { login } = useSanctumAuth()

const handleLogin = async () => {
  try {
    // Login via nuxt-auth-sanctum
    await login({
      email: form.email,
      password: form.password
    })

    console.log('Login BERHASIL via modul!')

    // Redirect ke dashboard
    navigateTo('/')

  } catch (err) {
    // Tangkap error dengan aman
    console.error('Login gagal:', err)

    // Ambil message dari berbagai kemungkinan struktur error
    const message =
      (err && err.data && err.data.message) ||          // biasanya ada di FetchError
      (err && err.response && err.response._data && err.response._data.message) || // kadang di HttpError
      (err && err.message) ||                           // fallback
      'Terjadi kesalahan saat login.'

    alert(`Login Gagal: ${message}`)
  }
}
</script>
