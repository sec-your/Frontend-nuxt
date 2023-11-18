<template>
  <div class="card">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Alert />
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to,
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(15px);
}
</style>

<script setup  lang="ts">
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()

onBeforeMount(()=> {
  let storedToken = localStorage.getItem('storedToken')
  if (storedToken) userStore.getUser(storedToken)
})
  useHead({
    titleTemplate: `سکیور - %s`
  })
  if ( typeof window != 'undefined' ){
    const alertIcon = resolveComponent('IconsGlobe')
    window.addEventListener('offline', ()=> useAlert('اینترنت شما قطع شد', { time : 5, icon: alertIcon }));
    window.addEventListener('online', ()=> useAlert('شما دوباره آنلاین شدید', { time : 5, icon: alertIcon }));
  }

</script>