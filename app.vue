<template>
  <div class="card">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Alerts />
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
  if (storedToken) userStore.getUser(storedToken, true)
})
  useHead({
    titleTemplate: (title) => title? `سکیور - ${title}` : 'سکیور'
  })
  if ( typeof window != 'undefined' ){
    const alertIcon = resolveComponent('IconsGlobe')
    window.addEventListener('offline', ()=> useCompactAlert('internet-status','اینترنت شما قطع شد', { time : 5, icon: alertIcon }));
    window.addEventListener('online', ()=> useCompactAlert('internet-status','شما دوباره آنلاین شدید', { time : 5, icon: alertIcon }));
  }

</script>