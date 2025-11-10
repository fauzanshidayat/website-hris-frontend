<template>
  <section class="py-12 flex flex-col items-center justify-center px-4 bg-gray-50 min-h-screen">
    <img src="/assets/svgs/logo-type.svg" alt="Logo" class="w-32" />

    <h1 class="text-[32px] font-semibold text-gray-900 mt-[70px]">Sign Up</h1>

    <p class="mt-4 text-base leading-7 text-center mb-[50px] text-gray-500">
      Manage your employees to achieve <br />
      bigger goals for your company
    </p>

    <form @submit.prevent="handleRegister" class="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
      <div class="mb-4">
        <label class="text-gray-600 block mb-2">Name</label>
        <input
          type="text"
          v-model="form.name"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label class="text-gray-600 block mb-2">Email Address</label>
        <input
          type="email"
          v-model="form.email"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label class="text-gray-600 block mb-2">Password</label>
        <input
          type="password"
          v-model="form.password"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-6">
        <label class="text-gray-600 block mb-2">Password Confirmation</label>
        <input
          type="password"
          v-model="form.password_confirmation"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Continue
      </button>
      <p class="mt-4 text-center text-gray-500">
        Sudah Punya Akun
      <NuxtLink to="/login" class="text-blue-600 hover:underline">Login di sini</NuxtLink>
      </p>
    </form>
  </section>
</template>

<script setup>
definePageMeta({
    middleware: ['sanctum:guest'],
});
import { reactive } from 'vue';
import { navigateTo } from '#imports';
import { useCsrfFetch } from '~/composables/useCsrfFetch'; // path sesuai projectmu

const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
});

const handleRegister = async () => {
  try {
    console.log('Mengirim data register...');

    const res = await useCsrfFetch('http://localhost:8000/register', {
      method: 'POST',
      body: form
    });

    console.log('Register berhasil, token diterima:', res.access_token);

    // Simpan token kalau mau pakai bearer token
    localStorage.setItem('token', res.access_token);

    // Redirect ke halaman dashboard/home
    navigateTo('/');
  } catch (err) {
    console.error('Register gagal:', err);

    let errorMessage = 'Terjadi error tidak diketahui.';
    if (err.status === 422 && err.data?.errors) {
      const firstKey = Object.keys(err.data.errors)[0];
      errorMessage = err.data.errors[firstKey][0];
    } else if (err.message) {
      errorMessage = err.message;
    }

    alert(`Gagal register: ${errorMessage}`);
  }
};
</script>


