<script setup>
definePageMeta({
  layout: 'dashboard'
})
</script>
<template>
   <!-- Main Content -->
<div class="lg:pr-[70px] py-[50px] lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0">
  <!-- Top Section -->
  <section class="flex flex-col md:flex-row flex-wrap justify-between gap-6 md:items-center">
    <div class="flex items-center justify-between gap-4">
      <!-- Sidebar Toggle for Mobile -->
      <a href="#" id="toggleOpenSidebar" class="lg:hidden">
        <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7">
          </path>
        </svg>
      </a>
      <div class="text-[32px] font-semibold text-gray-900">
        Company Roles
      </div>
    </div>

    <div class="flex items-center gap-4">
      <!-- Search Form -->
      <form class="flex-shrink md:w-[516px] w-full">
        <input type="text" placeholder="Search people, team, project"
          class="w-full px-4 py-2 border border-gray-200 rounded-lg italic focus:outline-none focus:ring-2 focus:ring-indigo-200 transition duration-300">
      </form>

      <!-- Notification Bell -->
      <a href="#" class="flex-none w-12 h-12 bg-white rounded-full p-2.5 relative flex items-center justify-center shadow">
        <img src="/assets/svgs/ic-bell.svg" alt="Notification">
        <!-- Optional Dot -->
        <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
      </a>
    </div>
  </section>

  <!-- Roles Section -->
  <section class="pt-[50px]">
    <!-- Section Header -->
    <div class="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      <div>
        <div class="text-xl font-medium text-gray-900">
          Available
        </div>
        <p class="text-gray-500">Empower company</p>
      </div>
      <NuxtLink to="/roles/create"
        class="bg-indigo-600 text-white font-medium py-2 px-5 rounded-lg hover:bg-indigo-700 transition">
        New Role
      </NuxtLink>
    </div>

    <!-- Roles Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Role Card -->
      <div class="relative flex items-center gap-4 bg-white shadow-md rounded-2xl p-4 cursor-pointer">
        <a href="#" class="absolute inset-0 rounded-2xl focus:ring-2 ring-indigo-500"></a>
        <img src="/assets/svgs/ric-flag.svg" alt="Role Icon" class="w-10 h-10">
        <div>
          <div class="mb-1 font-semibold text-gray-900">Product Designer</div>
          <p class="text-gray-500">12 people assigned</p>
        </div>
      </div>

      <div class="relative flex items-center gap-4 bg-white shadow-md rounded-2xl p-4 cursor-pointer">
        <a href="#" class="absolute inset-0 rounded-2xl focus:ring-2 ring-indigo-500"></a>
        <img src="/assets/svgs/ric-flag.svg" alt="Role Icon" class="w-10 h-10">
        <div>
          <div class="mb-1 font-semibold text-gray-900">iOS Engineer</div>
          <p class="text-gray-500">12 people assigned</p>
        </div>
      </div>

      <div class="relative flex items-center gap-4 bg-white shadow-md rounded-2xl p-4 cursor-pointer">
        <a href="#" class="absolute inset-0 rounded-2xl focus:ring-2 ring-indigo-500"></a>
        <img src="/assets/svgs/ric-flag.svg" alt="Role Icon" class="w-10 h-10">
        <div>
          <div class="mb-1 font-semibold text-gray-900">Marketing</div>
          <p class="text-gray-500">12 people assigned</p>
        </div>
      </div>

      <div class="relative flex items-center gap-4 bg-white shadow-md rounded-2xl p-4 cursor-pointer">
        <a href="#" class="absolute inset-0 rounded-2xl focus:ring-2 ring-indigo-500"></a>
        <img src="/assets/svgs/ric-flag.svg" alt="Role Icon" class="w-10 h-10">
        <div>
          <div class="mb-1 font-semibold text-gray-900">DevOps Power</div>
          <p class="text-gray-500">12 people assigned</p>
        </div>
      </div>

      <div class="relative flex items-center gap-4 bg-white shadow-md rounded-2xl p-4 cursor-pointer">
        <a href="#" class="absolute inset-0 rounded-2xl focus:ring-2 ring-indigo-500"></a>
        <img src="/assets/svgs/ric-flag.svg" alt="Role Icon" class="w-10 h-10">
        <div>
          <div class="mb-1 font-semibold text-gray-900">Quality Assurance</div>
          <p class="text-gray-500">12 people assigned</p>
        </div>
      </div>
    </div>
  </section>
</div>

</template>