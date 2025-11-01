<script setup>
definePageMeta({
  layout: 'form'
})
</script>
<template>
    <section class="w-full lg:w-1/2 py-20 flex flex-col items-center justify-center px-4">
        <!-- Title -->
        <div class="text-2xl md:text-3xl font-semibold text-gray-900">
            Add to Team
        </div>
        <p class="mt-4 text-base leading-7 text-center mb-12 text-gray-500">
            Add your new people to grow the <br>
            company reaching their goals
        </p>

        <!-- Card -->
        <div class="w-full max-w-xl flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-lg p-4 sm:p-6">
            <div class="flex items-center gap-4">
            <img src="/assets/images/user-f-1.png" class="w-16 h-16 rounded-full" alt="">
            <div>
                <div class="text-lg font-semibold text-gray-900">
                Andini Danna
                </div>
                <p class="text-base text-gray-500">
                ke@manasihhbang.com
                </p>
            </div>
            </div>
            <p class="mt-4 sm:mt-0 text-right text-gray-500">
            Product Designer
            </p>
        </div>

        <!-- Your Teams Section -->
        <section class="pt-12 w-full">
            <!-- Section Header -->
            <div class="mb-8 flex items-center justify-between gap-6">
            <div>
                <div class="text-xl font-medium text-gray-900">
                Your Teams
                </div>
                <p class="text-gray-500">Improve your growth</p>
            </div>
            </div>

            <form>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-3 xl:gap-10 mb-12">
                <!-- Team Cards -->
                <div class="relative flex flex-col items-center justify-center bg-white shadow-md rounded-2xl py-6 md:py-10 px-6 gap-y-0 cursor-pointer">
                <input type="radio" name="team" id="productGrowth"
                        class="absolute inset-0 appearance-none rounded-2xl checked:ring-2 checked:ring-primary">
                <img src="/assets/svgs/ric-box.svg" alt="">
                <div class="mt-6 mb-1 font-semibold text-center text-gray-900">
                    Product Growth
                </div>
                <p class="text-center text-gray-500">
                    810 People
                </p>
                </div>

                <div class="relative flex flex-col items-center justify-center bg-white shadow-md rounded-2xl py-6 md:py-10 px-6 gap-y-0 cursor-pointer">
                <input type="radio" name="team" id="marketing"
                        class="absolute inset-0 appearance-none rounded-2xl checked:ring-2 checked:ring-primary">
                <img src="/assets/svgs/ric-target.svg" alt="">
                <div class="mt-6 mb-1 font-semibold text-center text-gray-900">
                    Marketing
                </div>
                <p class="text-center text-gray-500">
                    15,810 People
                </p>
                </div>

                <div class="relative flex flex-col items-center justify-center bg-white shadow-md rounded-2xl py-6 md:py-10 px-6 gap-y-0 cursor-pointer">
                <input type="radio" name="team" id="globalization"
                        class="absolute inset-0 appearance-none rounded-2xl checked:ring-2 checked:ring-primary">
                <img src="/assets/svgs/ric-globe.svg" alt="">
                <div class="mt-6 mb-1 font-semibold text-center text-gray-900">
                    Globalization
                </div>
                <p class="text-center text-gray-500">
                    300 People
                </p>
                </div>

                <div class="relative flex flex-col items-center justify-center bg-white shadow-md rounded-2xl py-6 md:py-10 px-6 gap-y-0 cursor-pointer">
                <input type="radio" name="team" id="gamification"
                        class="absolute inset-0 appearance-none rounded-2xl checked:ring-2 checked:ring-primary">
                <img src="/assets/svgs/ric-award.svg" alt="">
                <div class="mt-6 mb-1 font-semibold text-center text-gray-900">
                    Gamification
                </div>
                <p class="text-center text-gray-500">
                    25 People
                </p>
                </div>
            </div>

            <div class="flex justify-center">
    <a href="employees.html" id="continueBtn"
       class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
        Continue
    </a>
</div>
            </form>
        </section>
    </section>
</template>