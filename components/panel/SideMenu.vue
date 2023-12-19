<script setup>
import InlineLogo from "~/components/InlineLogo.vue";

let isOpen = ref(false)
useListen('toggle-panel-sidebar', function () {
  setTimeout(() => isOpen.value = !isOpen.value, 50)
})
const closeSidebar = (event) => {
  if (isOpen.value && !event.target.classList.contains('toggle-panel-sidebar')) isOpen.value = false
}

let isDarkMode = ref(('theme' in localStorage && localStorage.theme === 'dark') || document.documentElement.classList.contains('dark'))
const toggleDarkMode = () => {
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
    isDarkMode.value = false
  } else {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
    isDarkMode.value = true
  }
}
</script>

<template>
  <div v-click-outside="closeSidebar" :class="['sidebar relative z-[999] bg-[#232E3C] md:fixed md:top-0 md:w-64 md:max-w-full xs:w-full md:overflow-auto', isOpen? 'md:right-0 open' : 'md:-right-10 md:translate-x-full']">
    <div class="card relative min-h-screen h-full">
      <div class="card min-h-screen wrap sticky top-0 py-4 flex flex-col gap-5">
        <InlineLogo class="block mr-4 min-h-[36px]" />
        <nav class="card mt-4 flex flex-col gap-5 h-full">
          <NuxtLink to="/panel" class="link">
            <IconsListSquare class="w-4" />
            <span class="mt-1">داشبورد</span>
          </NuxtLink>
          <div class="w-full flex flex-col">
            <span class="group-title">بررسی اتوماتیک</span>
            <NuxtLink to="/panel/monitored" class="link">
              <IconsEqualizer class="w-4" />
              <span class="mt-1">سایت های تحت نظارت</span>
            </NuxtLink>
          </div>
          <div class="w-full flex flex-col">
            <span class="group-title">پشتیبانی</span>
            <NuxtLink to="/panel/tickets" class="link">
              <IconsTicket class="w-4" />
              <span class="mt-1">تیکت ها</span>
            </NuxtLink>
            <NuxtLink to="/panel/ticket" class="link">
              <IconsMessagePlus class="w-4" />
              <span class="mt-1">تیکت جدید</span>
            </NuxtLink>
          </div>
          <div class="w-full flex flex-col">
            <span class="group-title">پروفایل</span>
            <NuxtLink to="/panel/subscription" class="link">
              <IconsUserStar class="w-4" />
              <span class="mt-1">اشتراک حال حاضر</span>
            </NuxtLink>
            <NuxtLink to="/panel/profile" class="link">
              <IconsUserOutline class="w-4" />
              <span class="mt-1">پروفایل من</span>
            </NuxtLink>
          </div>
        </nav>
        <div class="w-full mt-auto">
          <NuxtLink to="/panel/setting" class="link">
            <IconsCog class="w-4" />
            <span class="mt-1">تنظیمات</span>
          </NuxtLink>
          <div class="link py-0 mt-2">
            <IconsMoon class="w-4" />
            <span class="mt-1">حالت شب</span>
            <div @click="toggleDarkMode" :class="['h-6 w-10 rounded-full mr-auto relative overflow-hidden transition',  isDarkMode? 'bg-gray-200' : 'bg-gray-400']">
              <div :class="['w-4 h-4 rounded-full absolute drop-shadow top-1  transition', isDarkMode? 'right-1 bg-[#232E3C]' : 'left-1 bg-white']"></div>
            </div>
          </div>
        </div>
      </div>
      <div @click="isOpen = false" class="w-9 text-gray-900 pr-2 pb-2 hidden md:grid place-items-center h-9 bg-white absolute top-0 left-0 rounded-br-full">
        <IconsClose class="h-4" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.link {
  @apply w-full text-[#BABABA] flex gap-3.5 items-center py-1.5 px-5 hover:text-white transition-none
}
.group-title {
  @apply mb-2.5 text-sm mr-5
}
.link.router-link-exact-active {
  background-image: linear-gradient(to left, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 100%);
  @apply border-r-2 border-r-blue-500 text-white pr-4.5
}

@media screen and (max-width: 780px) {
  .sidebar.open {
    box-shadow: -10px 0 100px #00000080;
  }
}
@media screen and (max-height: 610px) {
  .wrap {
    @apply max-h-screen overflow-scroll
  }
}
</style>