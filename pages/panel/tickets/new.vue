<script setup>

definePageMeta({
  layout: 'panel'
})
let isProccesing = ref(false)
</script>

<template>
  <div class="card">
    <div class="card flex justify-between items-center xs:flex-col gap-5">
      <h1 class="page-title">تیکت ها</h1>
      <button class="mb-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg pt-1.5 shadow-lg shadow-blue-500/40 hover:shadow-blue-600/40 pb-1 px-3 text-base"><IconsTicket class="h-3.5 ml-2" />تیکت جدید</button>
    </div>
    
  </div>
</template>

<style scoped>
</style>
