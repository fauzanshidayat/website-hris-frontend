<template>
  <section class="py-[200px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-dark mb-4">
      Select Companies
    </div>

    <div class="w-full max-w-md bg-white shadow-md rounded-lg p-6">

      <ClientOnly>
        <div class="mb-4">
          <label for="companies" class="block text-gray-600 mb-2">Companies</label>

          <p v-if="loading" class="text-gray-500">Fetching companies...</p>

          <select
            v-else
            v-model="selectedCompany"
            id="companies"
            class="w-full border border-gray-300 rounded-lg px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
          >
            <option disabled value="">Select a company...</option>
            <option v-for="company in companies" :key="company.id" :value="company.id">
              {{ company.name }}
            </option>
          </select>
        </div>

        <button
          :disabled="!selectedCompany"
          @click="openCompany"
          type="button"
          class="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-150 disabled:bg-gray-400"
        >
          Continue
        </button>
      </ClientOnly>

      <div class="text-center my-3 text-gray-500">or</div>

      <NuxtLink
        :to="{ name: 'companies-create' }"
        class="block w-full border border-gray-300 text-gray-700 text-center py-2 rounded-lg hover:bg-gray-100 transition duration-150"
      >
        Create New Company
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
    middleware: ['sanctum:auth'],
});
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const companies = ref([])
const selectedCompany = ref('')
const loading = ref(true)
const router = useRouter()

// Fetch companies hanya di client
onMounted(async () => {
  try {
    const response = await $fetch('http://localhost:8000/api/company?limit=100', {
      credentials: 'include'
    })
    companies.value = response?.data?.data || []
  } catch (error) {
    console.error('Failed to fetch companies:', error)
  } finally {
    loading.value = false
  }
})

const openCompany = () => {
  if (!selectedCompany.value) return
  router.push({
    name: 'companies-id',
    params: { id: selectedCompany.value }
  })
}
</script>
