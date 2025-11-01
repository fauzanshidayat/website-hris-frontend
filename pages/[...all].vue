<template>
  <div class="error-page">
    <h1>404</h1>
    <p>Halaman yang kamu cari tidak ditemukan.</p>
    <NuxtLink to="/">Kembali ke Beranda</NuxtLink>
  </div>
</template>

<script setup>
definePageMeta({
  // men-set status HTTP 404
  statusCode: 404,
  // bisa juga memberi judul halaman
  title: 'Halaman Tidak Ditemukan'
})
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
}
h1 { font-size: 6rem; margin-bottom: 1rem; }
p { font-size: 1.5rem; margin-bottom: 2rem; }
</style>
