<script setup lang="ts">
const userStore = useUserStore()
</script>

<template>
  <div class="card mb-8">
    <div v-if="!userStore.info.isEmailVerified" id="phone-number-verify" class="card mb-4 text-sm gap-3 border-r-2 border-blue-500 bg-white shadow py-3 px-5 flex items-center justify-between">
      <IconsMessageVerify class="h-4 text-blue-500" />
      <span class="mt-0.5 ml-auto">لطفا شماره موبایل خود را تایید کنید</span>
      <NuxtLink to="/panel/profile" class="py-1 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white">تایید شماره</NuxtLink>
      <IconsClose class="h-3 mr-3 text-gray-400 hover:text-gray-600" onclick="document.getElementById('phone-number-verify').remove()" />
    </div>
  </div>
</template>

<style scoped>

</style>