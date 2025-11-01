<template>
  <section class="py-12 flex flex-col items-center justify-center px-4 bg-gray-50 min-h-screen">
    <img src="/assets/svgs/logo-type.svg" alt="Logo" class="w-32" />

    <h1 class="text-[32px] font-semibold text-gray-900 mt-[70px]">
      Sign Up
    </h1>

    <p class="mt-4 text-base leading-7 text-center mb-[50px] text-gray-500">
      Manage your employees to achieve <br />
      bigger goals for your company
    </p>

    <form class="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
      <div class="mb-4">
        <label class="text-gray-600 block mb-2">Company Name</label>
        <input type="text"
               class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div class="mb-4">
        <label class="text-gray-600 block mb-2">Email Address</label>
        <input type="email"
               class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <div class="mb-6">
        <label class="text-gray-600 block mb-2">Password</label>
        <input type="password"
               class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      <NuxtLink to="/login"
                class="block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
        Continue
      </NuxtLink>
    </form>
  </section>
</template>
