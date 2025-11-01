<script setup>
definePageMeta({
  layout: 'dashboard'
})
</script>
<template>
    <div>
  <!-- Main Content -->
  <div class="flex-1 lg:pr-16 py-12 lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0">
    <!-- Top Section -->
    <section class="flex flex-col flex-wrap justify-between gap-6 md:items-center md:flex-row">
      <div class="flex items-center justify-between gap-4">
        <button id="toggleOpenSidebar" class="lg:hidden">
          <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <h1 class="text-3xl font-semibold text-gray-900">Employees</h1>
      </div>

      <div class="flex items-center gap-4">
        <form class="shrink md:w-[516px] w-full">
          <input
            type="text"
            placeholder="Search people, team, project"
            class="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:ring-2 focus:ring-indigo-500 outline-none italic text-gray-600 transition-all duration-200"
          />
        </form>
        <button
          class="flex-none w-[46px] h-[46px] bg-white border border-gray-200 rounded-full flex items-center justify-center relative">
          <img src="/assets/svgs/ic-bell.svg" alt="Notifications" class="w-5 h-5" />
          <span
            class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="pt-12">
      <div class="mb-8 flex flex-col justify-between gap-6 sm:items-center sm:flex-row">
        <div>
          <h2 class="text-xl font-semibold text-gray-900">Statistics</h2>
          <p class="text-gray-500">Your team powers</p>
        </div>
        <NuxtLink
          to="/employees/create"
          class="bg-indigo-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-indigo-700 transition">
          Add Employee
        </NuxtLink>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
        <div class="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 flex flex-col gap-2">
          <p class="text-gray-500">In Total</p>
          <div class="text-3xl font-bold text-gray-900">425,000</div>
        </div>
        <div class="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 flex flex-col gap-2">
          <p class="text-gray-500">Active</p>
          <div class="text-3xl font-bold text-gray-900">205,399</div>
        </div>
        <div class="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 flex flex-col gap-2">
          <p class="text-gray-500">Inactive</p>
          <div class="text-3xl font-bold text-gray-900">142,593</div>
        </div>
      </div>
    </section>

    <!-- People Section -->
    <section class="pt-12">
      <div class="mb-8 flex items-center justify-between gap-6">
        <div>
          <h2 class="text-xl font-semibold text-gray-900">People</h2>
          <p class="text-gray-500">The rangers</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-10 lg:gap-6">
        <!-- Example Card -->
        <div
          class="relative bg-white shadow-sm border border-gray-100 rounded-2xl p-6 flex flex-col items-center transition hover:shadow-md">
          <NuxtLink to="#" class="absolute inset-0 rounded-2xl focus:ring-2 ring-indigo-500"></NuxtLink>
          <img src="/assets/images/user-f-1.png" alt="Andini Danna" class="w-16 h-16 rounded-full object-cover" />
          <div class="mt-6 text-lg font-semibold text-gray-900">Andini Danna</div>
          <p class="text-gray-500 text-sm">Product Designer</p>
          <div class="mt-6 text-green-600 flex items-center gap-2 text-sm">
            <img src="/assets/svgs/ic-check-circle.svg" alt="Verified" class="w-4 h-4" />
            Verified
          </div>
        </div>
        <!-- Duplikat contoh di atas untuk user lain -->
        <div
          class="relative bg-white shadow-sm border border-gray-100 rounded-2xl p-6 flex flex-col items-center transition hover:shadow-md">
          <img src="/assets/images/user-m-1.png" alt="Ferrari Three" class="w-16 h-16 rounded-full object-cover" />
          <div class="mt-6 text-lg font-semibold text-gray-900">Ferrari Three</div>
          <p class="text-gray-500 text-sm">Quality Manager</p>
          <div class="mt-6 text-green-600 flex items-center gap-2 text-sm">
            <img src="/assets/svgs/ic-check-circle.svg" alt="Verified" class="w-4 h-4" />
            Verified
          </div>
        </div>
        <div
          class="relative bg-white shadow-sm border border-gray-100 rounded-2xl p-6 flex flex-col items-center transition hover:shadow-md">
          <img src="/assets/images/user-m-1.png" alt="Ferrari Three" class="w-16 h-16 rounded-full object-cover" />
          <div class="mt-6 text-lg font-semibold text-gray-900">Ferrari Three</div>
          <p class="text-gray-500 text-sm">Quality Manager</p>
          <div class="mt-6 text-green-600 flex items-center gap-2 text-sm">
            <img src="/assets/svgs/ic-check-circle.svg" alt="Verified" class="w-4 h-4" />
            Verified
          </div>
        </div>

      </div>
    </section>
  </div>
  </div>
</template>
