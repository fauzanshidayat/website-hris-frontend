<template>
  <section class="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gray-50">
    <img src="/assets/svgs/logo-type.svg" alt="Logo" class="w-32" />

    <h1 class="text-3xl font-bold text-gray-800 mt-16">
      Sign In
    </h1>

    <p class="mt-4 text-center text-gray-500">
      Manage your employees to achieve <br />
      bigger goals for your company
    </p>

    <form class="w-full max-w-sm bg-white shadow-md rounded-lg p-6 mt-12">
      <div class="mb-4">
        <label class="block text-sm text-gray-600 mb-2">Email Address</label>
        <input type="email"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div class="mb-6">
        <label class="block text-sm text-gray-600 mb-2">Password</label>
        <input type="password"
          class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <button type="button"
        class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Sign In
      </button>
    </form>
  </section>
</template>
