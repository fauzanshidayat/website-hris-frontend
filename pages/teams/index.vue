<script setup>
definePageMeta({
  layout: 'dashboard'
})
</script>
<template>
    <!-- Main Content -->
<div class="lg:pr-16 py-12 lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0">
    <!-- Top Section -->
    <section class="flex flex-col md:flex-row flex-wrap justify-between gap-6 md:items-center">
        <div class="flex items-center justify-between gap-4">
            <!-- Sidebar toggle for mobile -->
            <a href="#" id="toggleOpenSidebar" class="lg:hidden">
                <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h7">
                    </path>
                </svg>
            </a>
            <div class="text-2xl md:text-3xl font-semibold text-gray-900">
                My Teams
            </div>
        </div>

        <div class="flex items-center gap-4">
            <!-- Search Form -->
            <form class="flex-shrink md:w-[516px] w-full">
                <input type="text" placeholder="Search people, team, project"
                       class="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-200 focus:outline-none italic transition duration-300">
            </form>

            <!-- Notification Bell -->
            <a href="#"
               class="flex-none w-12 h-12 bg-white rounded-full p-2.5 relative flex items-center justify-center shadow">
                <img src="/assets/svgs/ic-bell.svg" alt="Notification">
                <!-- Optional dot indicator -->
                <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </a>
        </div>
    </section>

    <!-- Teams Section -->
    <section class="pt-12">
        <!-- Section Header -->
        <div class="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
                <div class="text-xl font-medium text-gray-900">
                    Available
                </div>
                <p class="text-gray-500">Empower company</p>
            </div>
            <NuxtLink to="/teams/create"
               class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200">
                Build New Team
            </NuxtLink>
        </div>

        <!-- Teams Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-3 xl:gap-10">
            <!-- Card 1 -->
            <div class="relative flex flex-col items-center justify-center bg-white shadow-md rounded-2xl py-6 md:py-10 px-6 gap-y-0 cursor-pointer">
                <a href="#" class="absolute inset-0 rounded-2xl focus:ring-2 ring-primary"></a>
                <img src="/assets/svgs/ric-box.svg" alt="">
                <div class="mt-6 mb-1 font-semibold text-center text-gray-900">
                    Growth Marketing
                </div>
                <p class="text-center text-gray-500">
                    12 People
                </p>
            </div>

            <!-- Card 2 -->
            <div class="relative flex flex-col items-center justify-center bg-white shadow-md rounded-2xl py-6 md:py-10 px-6 gap-y-0 cursor-pointer">
                <a href="#" class="absolute inset-0 rounded-2xl focus:ring-2 ring-primary"></a>
                <img src="/assets/svgs/ric-target.svg" alt="">
                <div class="mt-6 mb-1 font-semibold text-center text-gray-900">
                    User Growth
                </div>
                <p class="text-center text-gray-500">
                    5,312 People
                </p>
            </div>

            <!-- Card 3 -->
            <div class="relative flex flex-col items-center justify-center bg-white shadow-md rounded-2xl py-6 md:py-10 px-6 gap-y-0 cursor-pointer">
                <a href="#" class="absolute inset-0 rounded-2xl focus:ring-2 ring-primary"></a>
                <img src="/assets/svgs/ric-award.svg" alt="">
                <div class="mt-6 mb-1 font-semibold text-center text-gray-900">
                    Gamification
                </div>
                <p class="text-center text-gray-500">
                    893 People
                </p>
            </div>
        </div>
    </section>
</div>

</template>