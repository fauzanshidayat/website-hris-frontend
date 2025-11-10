<template>
  <section class="py-[200px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-gray-900 mb-4">
      Create Companies
    </div>

    <form
      class="w-full max-w-md bg-white shadow-md rounded-lg p-6"
      @submit.prevent="createCompany"
    >
      <div class="mb-4">
        <label for="name" class="block text-gray-600 mb-2">Name</label>
        <input
          type="text"
          id="name"
          v-model="company.name"
          class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-150"
      >
        Save
      </button>
    </form>
  </section>
</template>

<script setup>
definePageMeta({
  middleware: ['sanctum:auth'],
});

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCsrfFetch } from '~/composables/useCsrfFetch'; // path sesuai projectmu

const router = useRouter();
const company = ref({ name: '' });

const createCompany = async () => {
  try {
    console.log('Mengirim data company...');

    const res = await useCsrfFetch('http://localhost:8000/api/company', {
      method: 'POST',
      body: company.value
    });

    console.log('Company berhasil dibuat:', res);

    // Redirect ke detail company
    router.push({ name: 'companies-id', params: { id: res.data.id } });
  } catch (err) {
    console.error('Gagal membuat company:', err);
    alert('Gagal membuat company. Cek console.');
  }
};
</script>

