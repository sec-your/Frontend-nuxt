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
    <div class="blurred-lights">
      <div class="card h-full relative">

      </div>
    </div>
    <div class="blurred-container-lights"></div>
    <MainMenu />
    <div class="card mb-40">
      <NuxtPage />
    </div>
    <MainFooter />
    <MainSidebar />
    <Alerts class="right-7" />
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
.blurred-container-lights, .blurred-lights {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  pointer-events: none;
  z-index: -1;
}
.index-page .blurred-container-lights::before {
  content: "";
  width: 100%;
  height: 50vh;
  position: relative;
  top: 0;
  left: -10%;
  background: #29324190;
  filter: blur(400px);
  transform: rotate(-45deg);
  display: block;
}
.login-page .blurred-lights > div::before,
.register-page .blurred-lights > div::before {
  content: "";
  width: 100vw;
  height: 100vw;
  position: absolute;
  top: -75vw;
  left: -50vw;
  filter: blur(500px);
  opacity: .2;
  border-radius: 50%;
  @apply bg-sky-500
}
</style>
