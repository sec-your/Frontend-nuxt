<script setup>
const bodyClass = ref('')
useListen('change-body-class', function (className) {
  bodyClass.value = className
})
</script>

<template>
  <div :class="['min-h-screen', bodyClass]">
    <MainMenu />
    <NuxtPage />
  </div>
</template>

<style>
body {
  background-color: #00171F;
}
</style>
<style scoped>
.red-shadow {
  box-shadow: inset 0 300px 200px -200px #FF000050;
}
.yellow-shadow {
  box-shadow: inset 0 300px 200px -200px #FDC82350;
}
</style>
