<script setup>

const userStore = useUserStore()

let isOpen = ref(false)

useListen('sidebar-menu', function () {
  isOpen.value = !isOpen.value
})

function closeSidebar(event) {
  if (isOpen.value && !document.getElementById('toggle-sidebar').contains(event.target)) isOpen.value = false
}
</script>

<template>
  <aside v-click-outside="closeSidebar" :class="['hidden md:flex p-5 flex-col w-60 max-w-[85vw] h-full fixed top-0 bg-[#001116] z-[999]', isOpen? 'right-0 open' : '-right-12 translate-x-full']">
    <button @click="closeSidebar" class="mb-auto mr-auto -ml-11  bg-[#001116] text-center float-left w-10 h-10 mt-2 rounded-l-full">
      <IconsArrowRight class="w-3.5" />
    </button>
    <ul class="card flex flex-col gap-5 text-sm mb-auto">
      <li><NuxtLink :to="userStore.isLoggedIn? '/account' : '/login'"><IconsUser class="w-4 ml-3" /> {{ userStore.isLoggedIn? 'حساب کاربری' : 'ورود / ثبت نام' }}</NuxtLink></li>
      <li><NuxtLink to="/about-us"><IconsInfo class="w-4 ml-3" /> درباره ما</NuxtLink></li>
      <li><NuxtLink to="/plans"><IconsPrices class="w-4 ml-3" /> پلن ها</NuxtLink></li>
      <li><NuxtLink to="/faqs"><IconsFaq class="w-4 ml-3" /> منابع</NuxtLink></li>
      <li><NuxtLink to="/contact"><IconsTelephone class="w-4 ml-3" /> ارتباط با ما</NuxtLink></li>
      <li><NuxtLink to="/i-am-hacked"><IconsGoal class="w-4 ml-3 !text-[#C02A2A]" /> من هک شده ام</NuxtLink></li>
    </ul>
  </aside>
</template>

<style scoped>
aside.open {
  box-shadow: -10px 0 100px #ffffff20;
}
li svg, li a:hover {
  @apply text-[#4FDFFF]
}

</style>