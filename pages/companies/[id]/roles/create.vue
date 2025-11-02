<script setup>
definePageMeta({
  layout: 'form'
})
</script>
<template>
    <div>
        <section class="py-[70px] flex flex-col items-center justify-center px-4">
        <div class="text-[32px] font-semibold text-gray-900">
            New Role
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-[50px] text-gray-500">
            Manage your employees to achieve <br>
            bigger goals for your company
        </p>

        <form class="w-full max-w-sm bg-white shadow-md rounded-2xl p-6 md:p-10 flex flex-col gap-6">
            <!-- Role Name -->
            <div class="flex flex-col gap-2">
            <label class="text-gray-500" for="roleName">Role Name</label>
            <input type="text" id="roleName" class="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200" value="Product Marketing">
            </div>

            <!-- Responsibility -->
            <div class="flex flex-col gap-2">
            <label class="text-gray-500" for="idRes">Responsibility</label>
            <ul id="listResp" class="flex flex-col gap-4">
                <li class="flex items-center gap-4 w-full">
                <input type="text" id="idRes" name="responsibility" class="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                <button type="button" id="addRsp" class="flex-none">
                    <img src="/assets/svgs/ric-plus.svg" alt="Add Responsibility" class="w-6 h-6">
                </button>
                </li>
            </ul>
            </div>

            <!-- Save Button -->
            <a href="roles.html" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
            Save Role
            </a>
        </form>
        </section>
    </div>
</template>