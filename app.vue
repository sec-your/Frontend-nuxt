<template>
  <div class="card">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
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

<script setup>
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()

onBeforeMount(async ()=> {
    if (!userStore.isLoggedIn) {
        let storedToken = useLocalStorage.getItem('storedToken')
        if (storedToken) await userStore.getUser(storedToken)
    }
})
  useHead({
    titleTemplate: (title) => title? `سکیور - ${title}` : 'سکیور'
  })
  if ( typeof window != 'undefined' ){
    window.addEventListener('offline', ()=> useCompactAlert('internet-status','اینترنت شما قطع شد', { time : 5, icon: 'IconsGlobe' }));
    window.addEventListener('online', ()=> useCompactAlert('internet-status','شما دوباره آنلاین شدید', { time : 5, icon: 'IconsGlobe' }));
  }

</script>