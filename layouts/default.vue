<script setup>
const bodyClass = ref('')
useListen('change-body-class', function (className) {
  bodyClass.value = className
})
</script>

<template>
  <div :class="['card min-h-screen relative', bodyClass]">
    <MainMenu />
    <NuxtPage />
    <MainSidebar />
  </div>
</template>

<style>
body {
  background-color: #00171F;
}
</style>
<style scoped>
.critical-shadow {
  box-shadow: inset 0 300px 200px -200px #FF000050;
}
.yellow-shadow {
  box-shadow: inset 0 300px 200px -200px #FDC82350;
}
</style>
