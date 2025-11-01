<script setup>
definePageMeta({
  layout: 'form'
})
</script>
<template>
   <section class="py-[70px] flex flex-col items-center justify-center px-4">
  <!-- Header -->
  <div class="text-[32px] font-semibold text-gray-900">
    Build New Team
  </div>
  <p class="mt-4 text-base leading-7 text-center mb-[50px] text-gray-500">
    Team that can bring your company <br>
    growing bigger and bigger
  </p>

  <!-- Form Card -->
  <form class="w-full max-w-sm bg-white shadow-md rounded-2xl p-6 md:p-10">
    <!-- Icon -->
    <div class="mb-2 mx-auto">
      <img src="/assets/svgs/ric-box.svg" alt="Team Icon" class="w-16 h-16">
    </div>

    <!-- Email Address -->
    <div class="mb-4">
      <label class="block text-gray-500 mb-1" for="email">Email Address</label>
      <input type="email"
             id="email"
             class="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 text-gray-900 cursor-not-allowed"
             value="angga@yourcompany.com"
             disabled>
    </div>

    <!-- Team Name -->
    <div class="mb-4">
      <label class="block text-gray-500 mb-1" for="teamName">Team Name</label>
      <input type="text"
             id="teamName"
             class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:outline-none transition duration-200"
             value="Growth Marketing">
    </div>

    <!-- Status -->
    <div class="mb-4">
      <label class="block text-gray-500 mb-1" for="status">Status</label>
      <select id="status"
              class="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:outline-none appearance-none bg-white">
        <option value="" selected>Active</option>
        <option value="">Inactive</option>
      </select>
    </div>

    <!-- Continue Button -->
    <a href="my_teams.html" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg text-center mt-4 transition duration-200">
      Continue
    </a>
  </form>
</section>

</template>