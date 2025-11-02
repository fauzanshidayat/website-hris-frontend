<script setup>
definePageMeta({
  layout: 'form'
})
</script>
<template>
 <div>
   <section class="py-20 flex flex-col items-center justify-center px-4">
  <h2 class="text-3xl font-semibold text-gray-900 text-center">
    Empower Your Team
  </h2>
  <p class="mt-4 text-base leading-7 text-center mb-12 text-gray-500">
    Add your new people to grow the <br />
    company reaching their goals
  </p>

  <form
    class="w-full max-w-sm bg-white shadow-md border border-gray-100 rounded-2xl p-6 flex flex-col gap-4"
  >
    <!-- Complete Name -->
    <div class="flex flex-col gap-1">
      <label for="name" class="text-gray-500 text-sm font-medium">Complete Name</label>
      <input
        id="name"
        type="text"
        placeholder="Enter full name"
        class="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-700 transition"
      />
    </div>

    <!-- Email Address -->
    <div class="flex flex-col gap-1">
      <label for="email" class="text-gray-500 text-sm font-medium">Email Address</label>
      <input
        id="email"
        type="email"
        placeholder="Enter email address"
        class="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-700 transition"
      />
    </div>

    <!-- Gender -->
    <div class="flex flex-col gap-1">
      <label for="gender" class="text-gray-500 text-sm font-medium">Gender</label>
      <div class="relative">
        <select
          id="gender"
          class="w-full border border-gray-300 rounded-lg py-2 px-3 pr-10 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-700 appearance-none transition"
        >
          <option selected>Male</option>
          <option>Female</option>
        </select>
        <svg
          class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" />
        </svg>
      </div>
    </div>

    <!-- Age -->
    <div class="flex flex-col gap-1">
      <label for="age" class="text-gray-500 text-sm font-medium">Age</label>
      <input
        id="age"
        type="number"
        min="0"
        placeholder="Enter age"
        class="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-700 transition"
      />
    </div>

    <!-- Continue Button -->
    <NuxtLink
      to="/employee_create-2"
      class="w-full mt-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg text-center transition"
    >
      Continue
    </NuxtLink>
  </form>
</section>

  </div>
</template>
