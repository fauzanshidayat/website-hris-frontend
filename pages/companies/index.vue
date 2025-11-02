<template>
    <section class="py-[200px] flex flex-col items-center justify-center px-4">
    <div class="text-[32px] font-semibold text-gray-900 mb-4">
      Select Companies
    </div>

    <div class="w-full max-w-md bg-white shadow-md rounded-lg p-6">
      <div class="mb-4">
        <label for="companies" class="block text-gray-600 mb-2">Companies</label>

        <!-- Dropdown -->
        <select
          name="companies"
          id="companies"
          class="w-full border border-gray-300 rounded-lg px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
        >
          <option value="">Select a company...</option>
          <option value="1">Google</option>
          <option value="2">Apple</option>
          <option value="3">Microsoft</option>
          <option value="4">Netflix</option>
        </select>
      </div>

      <!-- Continue Button -->
      <button
        type="button"
        class="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-150"
      >
        Continue
      </button>

      <div class="text-center my-3 text-gray-500">or</div>

      <!-- Create New Company Link -->
      <a
        href="#"
        class="block w-full border border-gray-300 text-gray-700 text-center py-2 rounded-lg hover:bg-gray-100 transition duration-150"
      >
        Create New Company
      </a>
    </div>
  </section>
</template>