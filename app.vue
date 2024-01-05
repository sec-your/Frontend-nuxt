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

onBeforeMount(()=> {
  if ('localStorage' in window) {
    let storedToken = window.localStorage.getItem('storedToken')
    if (storedToken) userStore.getUser(storedToken, true)
  }
  else if ('cookie' in document && useCookie().check('storedToken')) {
    userStore.getUser(useCookie().get('storedToken'), true)
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