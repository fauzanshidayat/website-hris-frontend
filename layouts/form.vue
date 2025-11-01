<template>
  <div>
    <div class="pt-[50px] md:px-[50px] flex justify-between items-center px-4">
      <a href="/index.html">
        <img src="../assets/svgs/logo-type.svg" alt="Logo" />
      </a>

      <a href="#" @click.prevent="goBack">
        <img src="../assets/svgs/ric-close-white.svg" alt="Close" />
      </a>
    </div>

    <NuxtPage />
  </div>
</template>

<script setup>
const goBack = () => {
  // Kembali ke halaman sebelumnya
  if (history.length > 1) {
    history.back()
  } else {
    // Kalau user langsung masuk ke halaman ini (tanpa history), arahkan ke home
    navigateTo('/')
  }
}
</script>
