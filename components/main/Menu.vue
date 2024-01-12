<script setup>
import InlineLogo from "~/components/InlineLogo.vue";

const userStore = useUserStore()
let isScrolled = ref(process.client && window.innerWidth <= 780 && window.scrollY > 5)

if (process.client){
  window.addEventListener('scroll', function () {
    isScrolled.value = window.innerWidth <= 780 && window.scrollY > 5
  })
}

const route = useRoute()
</script>

<template>
  <nav :class="['card md:sticky top-0 right-0 z-[999]', isScrolled? 'py-3 bg-[#001116] mb-[32px]' : 'py-7']">
    <div class="container grid items-center gap-1 grid-cols-1-auto-1 lg:grid-cols-auto-auto lg:gap-y-5 md:grid-cols-1-auto-1 wow a-fadeIn">
      <ul class="flex gap-8 drop-shadow-sm xl:gap-6">
        <li @click="useEvent('sidebar-menu')" id="toggle-sidebar" class="hidden md:block"><IconsList class="w-7 text-white" /></li>
        <li v-if="route.name !== 'index'" class="md:hidden"><NuxtLink to="/">صفحه اول</NuxtLink></li>
        <li v-else class="md:hidden"><NuxtLink to="/about-us">درباره ما</NuxtLink></li>
        <li class="md:hidden"><NuxtLink to="/plans">پلن ها</NuxtLink></li>
        <li class="md:hidden"><NuxtLink to="/faqs">منابع</NuxtLink></li>
        <li class="md:hidden"><NuxtLink to="/contact">ارتباط با ما</NuxtLink></li>
      </ul>
      <NuxtLink to="/" id="logo" class="lg:col-span-full lg:-order-1 md:order-none md:col-span-1">
        <InlineLogo class="block mx-auto" />
      </NuxtLink>
      <div class="flex gap-4 items-center justify-end">
        <NuxtLink v-if="!(!userStore.isLoggedIn && (route.name === 'login' || route.name === 'register'))" :to="userStore.isLoggedIn? '/panel' : '/login'" class="md:hidden bg-[#293241] hover:bg-[#314058] rounded-md py-1.25 px-2.5 items-center flex gap-2">
          <IconsUser class="w-4" />
          <span class="text-sm">{{ userStore.isLoggedIn? 'پنل کاربری' : 'ورود / ثبت نام' }}</span>
        </NuxtLink>
        <NuxtLink to="/i-am-hacked" class="xs:hidden bg-[#C02A2A] hover:bg-[#bb0202] rounded-md py-1.25 px-2.5 items-center flex gap-2">
          <IconsGoal class="w-4" />
          <span class="text-sm">من هک شده ام</span>
        </NuxtLink>
        <a href="tel:09145296650" class="hidden xs:block"><IconsTelephone class="w-5 hover:text-[#4FDFFF]" /></a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
li:hover {
  @apply text-[#4FDFFF]
}
</style>