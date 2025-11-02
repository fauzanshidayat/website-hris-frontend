<script setup>
definePageMeta({
  layout: 'dashboard'
})
</script>
<template>
  <div>
    <!-- Main Content -->
    <div class="lg:pr-[70px] py-12 lg:ml-[320px] xl:ml-[365px] px-4 lg:pl-0">

        <!-- Top Section -->
        <section class="flex flex-col flex-wrap justify-between gap-6 md:items-center md:flex-row">
            <div class="flex items-center justify-between gap-4">
                <!-- Sidebar Toggle (Mobile) -->
                <button id="toggleOpenSidebar" class="lg:hidden">
                    <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </button>

                <h1 class="text-3xl font-semibold text-gray-900">
                    Overview
                </h1>
            </div>

            <!-- Search & Notification -->
            <div class="flex items-center gap-4 w-full md:w-auto">
                <form class="flex-grow md:w-[516px]">
                    <div class="relative">
                        <input type="text"
                            class="w-full rounded-full border border-gray-200 bg-gray-50 px-5 py-3 pl-10 text-gray-700 placeholder-gray-400 italic focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                            placeholder="Search people, team, project">
                        <svg class="w-5 h-5 absolute left-3 top-3.5 text-gray-400" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </form>

                <a href="#" class="relative flex-none w-[46px] h-[46px] bg-white rounded-full p-[11px] shadow-sm hover:shadow transition">
                    <img src="../assets/svgs/ic-bell.svg" alt="Notification" class="w-full h-full object-contain">
                    <!-- Notification Dot -->
                    <span class="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                </a>
            </div>
        </section>

        <!-- Statistics Section -->
        <section class="pt-12">
            <div class="mb-8">
                <div class="flex items-center justify-between gap-6">
                    <div>
                        <h2 class="text-xl font-medium text-gray-900">Statistics</h2>
                        <p class="text-gray-500">Your business growth</p>
                    </div>
                </div>
            </div>

            <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-11">
                <!-- Card 1 -->
                <div class="flex flex-col justify-between bg-white shadow-sm rounded-xl p-6 min-h-[200px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500">Employees</p>
                            <div class="text-[32px] font-bold text-gray-900 mt-1">0</div>
                        </div>
                        <a href="employee_create.html" class="hover:opacity-80 transition">
                            <img src="/assets/svgs/ric-plus.svg" alt="Add">
                        </a>
                    </div>
                </div>

                <!-- Card 2 -->
                <div class="flex flex-col justify-between bg-white shadow-sm rounded-xl p-6 min-h-[200px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500">Teams</p>
                            <div class="text-[32px] font-bold text-gray-900 mt-1">0</div>
                        </div>
                        <a href="#" class="hover:opacity-80 transition">
                            <img src="/assets/svgs/ric-plus.svg" alt="Add">
                        </a>
                    </div>
                </div>

                <!-- Card 3 -->
                <div class="flex flex-col justify-between bg-white shadow-sm rounded-xl p-6 min-h-[200px]">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-gray-500">Projects</p>
                            <div class="text-[32px] font-bold text-gray-900 mt-1">0</div>
                        </div>
                        <a href="#" class="hover:opacity-80 transition">
                            <img src="/assets/svgs/ric-plus.svg" alt="Add">
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Documents & History -->
        <section class="pt-12">
            <div class="grid md:grid-cols-2 gap-11">
                <!-- Documents -->
                <div>
                    <div class="mb-8">
                        <h2 class="text-xl font-medium text-gray-900">Documents</h2>
                        <p class="text-gray-500">Standard procedure</p>
                    </div>

                    <div class="bg-white shadow-sm rounded-xl p-10 flex items-center justify-center md:min-h-[468px]">
                        <div class="text-center">
                            <h3 class="text-xl font-bold text-gray-900">No Documents</h3>
                            <p class="text-gray-500 mt-5 mb-8">
                                Add guidance or design style for <br>
                                your employees in company
                            </p>
                            <button type="button"
                                class="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
                                Upload File
                            </button>
                        </div>
                    </div>
                </div>

                <!-- History -->
                <div>
                    <div class="mb-8">
                        <h2 class="text-xl font-medium text-gray-900">History</h2>
                        <p class="text-gray-500">Track the flow</p>
                    </div>

                    <div class="bg-white shadow-sm rounded-xl p-10 flex items-center justify-center min-h-[468px]">
                        <div class="text-center">
                            <h3 class="text-xl font-bold text-gray-900">No History</h3>
                            <p class="text-gray-500 mt-5 mb-8">
                                Information of employees added <br>
                                and promoting shown here
                            </p>
                            <button type="button"
                                class="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition">
                                Upload File
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  </div>
</template>



