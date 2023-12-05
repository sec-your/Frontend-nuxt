<script setup>
useHead({
  script: [{ src: '/js/wow.min.js' }],
});
const bodyClass = ref('')
useListen('change-body-class', function (className) {
  bodyClass.value = className
})
const route = useRoute()
</script>

<template>
  <div :class="['layout card min-h-screen relative', bodyClass, `${route.name}-page` ]">
    <div class="blurred-lights"></div>
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
.blurred-lights {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  pointer-events: none;
  z-index: -1;
}
.index-page .blurred-lights::before {
  content: "";
  width: 100%;
  height: 50%;
  position: relative;
  top: 0;
  left: -30%;
  background: #29324190;
  filter: blur(400px);
  transform: rotate(-45deg);
  display: block;
}
</style>
