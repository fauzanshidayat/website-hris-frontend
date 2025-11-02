<template>
    <div>
        <!-- Sidebar -->
        <div id="sidebarHRIS"
                class="hidden lg:block fixed lg:max-w-[295px] w-full overflow-y-auto h-full bg-white z-[999]">
                <div class="px-6 py-12 flex flex-col gap-12">
                    <!-- Logo + Close Button -->
                    <div class="flex items-center justify-between">
                        <a href="#" class="flex justify-center">
                            <img src="../assets/svgs/logo-type.svg" alt="Logo" class="h-6">
                        </a>
                        <button id="toggleCloseSidebar" class="lg:hidden">
                            <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                   <!-- Daily Use -->
                    <div class="flex flex-col gap-4">
                    <div class="text-sm text-gray-500 uppercase tracking-wide">Daily Use</div>

                    <!-- Overview -->
                    <NuxtLink
                        :to="{ name: 'companies-id'}"
                        class="flex items-center gap-3 px-3 py-2 rounded-md bg-gray-100 text-gray-900 font-medium"
                    >
                        <img src="../assets/svgs/ic-grid.svg" alt="Overview" class="w-5 h-5">
                        Overview
                    </NuxtLink>

                    <!-- Employees -->
                    <NuxtLink
                        :to="{ name: 'companies-id-employees' }"
                        class="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
                    >
                        <img src="../assets/svgs/ic-users.svg" alt="Employees" class="w-5 h-5">
                        Employees
                    </NuxtLink>

                    <!-- My Teams -->
                    <NuxtLink
                        :to="{ name: 'companies-id-teams'}"
                        class="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
                    >
                        <img src="../assets/svgs/ic-briefcase.svg" alt="My Teams" class="w-5 h-5">
                        My Teams
                    </NuxtLink>

                    <!-- Roles -->
                    <NuxtLink
                        :to="{ name: 'companies-id-roles' }"
                        class="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition"
                    >
                        <img src="../assets/svgs/ic-flag.svg" alt="Roles" class="w-5 h-5">
                        Roles
                    </NuxtLink>
                    </div>


                    <!-- Others -->
                    <div class="flex flex-col gap-4">
                        <div class="text-sm text-gray-500 uppercase tracking-wide">Others</div>

                        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition">
                            <img src="../assets/svgs/ic-box.svg" alt="Insurances" class="w-5 h-5">
                            Insurances
                        </a>

                        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition">
                            <img src="../assets/svgs/ic-home.svg" alt="Company" class="w-5 h-5">
                            Company
                        </a>

                        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition">
                            <img src="../assets/svgs/ic-gift.svg" alt="Rewards" class="w-5 h-5">
                            Rewards
                        </a>

                        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 hover:textebaay-900 transition">
                            <img src="../assets/svgs/ic-settings.svg" alt="Settings" class="w-5 h-5">
                            Settings
                        </a>

                        <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-md text-red-600 hover:bg-red-50 transition">
                            <img src="../assets/svgs/ic-signout.svg" alt="Logout" class="w-5 h-5">
                            Logout
                        </a>
                    </div>
                </div>
        </div>
    </div>
</template>