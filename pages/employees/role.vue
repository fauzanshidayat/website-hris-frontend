<script setup>
definePageMeta({
  layout: 'form'
})
</script>
<template>
    <div>
        <section class="py-20 flex flex-col items-center justify-center px-4">
  <div class="text-3xl font-semibold text-gray-900 text-center">
    Give a Role
  </div>
  <p class="mt-4 text-base leading-7 text-center mb-12 text-gray-500">
    Complete the information to make it more <br />
    easier when introduce to team
  </p>

  <form class="w-full max-w-sm bg-white shadow-md border border-gray-100 rounded-2xl p-6 flex flex-col gap-4">
    <!-- Profile -->
    <div class="flex flex-col items-center mb-2">
      <img src="/assets/images/user-f-1.png" width="70" alt="Profile picture" class="rounded-full" />
      <div class="mt-4 text-lg font-semibold text-gray-900">Andini Danna</div>
      <p class="text-sm text-gray-500">ke@manasihhbang.com</p>
    </div>

    <!-- Select Role -->
    <div class="flex flex-col gap-1">
      <label class="text-gray-500 text-sm font-medium">Select Role</label>
      <div class="relative">
        <select
          class="w-full border border-gray-300 rounded-lg py-2 px-3 pr-10 focus:ring-2 focus:ring-indigo-500 outline-none text-gray-700 appearance-none transition"
        >
          <option selected>Product Designer</option>
          <option>Website Developer</option>
          <option>Executive Manager</option>
          <option>iOS Engineer</option>
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

    <!-- Responsibilities -->
    <section class="flex flex-col gap-2">
      <label class="text-gray-500 text-sm font-medium">Responsibilities</label>
      <div class="flex flex-col gap-3 mt-2">
        <div class="flex items-start md:items-center gap-2">
          <img src="/assets/svgs/ic-check-circle.svg" alt="Check" class="w-5 h-5" />
          <span class="text-sm text-gray-900">
            Lorem ipsum tanggung jawab pixel studio website
          </span>
        </div>
        <div class="flex items-start md:items-center gap-2">
          <img src="/assets/svgs/ic-check-circle.svg" alt="Check" class="w-5 h-5" />
          <span class="text-sm text-gray-900">
            Growth strategy studio make things better again with
          </span>
        </div>
        <div class="flex items-start md:items-center gap-2">
          <img src="/assets/svgs/ic-check-circle.svg" alt="Check" class="w-5 h-5" />
          <span class="text-sm text-gray-900">
            Menyediakan beberapa kit untuk kebutuhan
          </span>
        </div>
        <div class="flex items-start md:items-center gap-2">
          <img src="/assets/svgs/ic-check-circle.svg" alt="Check" class="w-5 h-5" />
          <span class="text-sm text-gray-900">
            Bekerja sama dengan designer dan developer tim
          </span>
        </div>
      </div>
    </section>

    <!-- Continue Button -->
    <a
      href="employee_add-to-team.html"
      class="w-full mt-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg text-center transition"
    >
      Continue
    </a>
  </form>
</section>

    </div>
</template>