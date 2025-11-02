<script setup>
definePageMeta({
  layout: 'form'
})
</script>
<template>
    <div>
       <section class="py-20 flex flex-col items-center justify-center px-4">
  <h2 class="text-3xl font-semibold text-gray-900 text-center">
    Finalizing Profile
  </h2>
  <p class="mt-4 text-base leading-7 text-center mb-12 text-gray-500">
    Complete the information to make it more <br />
    easier when introduce to team
  </p>

  <form
    class="w-full max-w-sm bg-white shadow-md border border-gray-100 rounded-2xl p-6 flex flex-col gap-4"
  >
    <!-- Profile -->
    <div class="flex flex-col items-center mb-2">
      <img src="/assets/images/user-f-1.png" width="70" alt="Profile picture" class="rounded-full" />
      <div class="mt-4 text-lg font-semibold text-gray-900">Andini Danna</div>
      <p class="text-sm text-gray-500">ke@manasihhbang.com</p>
    </div>

    <!-- Phone number -->
    <div class="flex flex-col gap-1">
      <label for="phone" class="text-gray-500 text-sm font-medium">Phone Number</label>
      <input
        id="phone"
        type="number"
        placeholder="Enter phone number"
        class="w-full border border-gray-300 rounded-lg py-2 px-3 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-700 transition"
      />
    </div>

    <!-- Continue Button -->
    <a
      href="employee_create-3.html"
      class="w-full mt-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg text-center transition"
    >
      Continue
    </a>
  </form>
</section>

    </div>
</template>