<script setup>
useHead({
  title: 'پنل کاربری',
  script: [{children: "localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)?document.documentElement.classList.add('dark'):document.documentElement.classList.remove('dark')"}]
});
const route = useRoute()
</script>

<template>
  <div :class="['layout card min-h-screen relative grid']">
    <PanelSideMenu />
    <div class="min-h-screen bg-[#f0f5fb] dark:bg-[#19222c] rounded-3xl overflow-hidden text-gray-700 dark:text-gray-200">
      <PanelNav />
      <div class="card p-16 xl:p-10 md:px-5 md:py-10">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
<style>
body {
  background: #232E3C;
}
</style>
<style scoped>
.layout {
  grid-template-columns: 260px auto;
}
@media screen and (max-width: 980px) {
  .layout {
    grid-template-columns: 240px auto;
  }
}
@media screen and (max-width: 780px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
