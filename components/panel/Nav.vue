<script setup>
const ticketIcon = resolveComponent('IconsTicket')
const scanIcon = resolveComponent('IconsSecure')
const searchResults = ref([])
const search = ref('')
let isSearching = ref(false)
let isSearchOpen = ref(false)
const searchUpdate = () => {
  if (isSearching.value) return false
  isSearching.value = true
  setTimeout(() => {
    searchResults.value = [
      {
        type: 'scan',
        title: 'سایت certivid.com',
        link: '/panel/site/50'
      },
      {
        type: 'scan',
        title: 'سایت google.com',
        link: '/panel/site/23'
      },
      {
        type: 'ticket',
        title: 'تیکت `مشکل در ثبت سایت`',
        link: '/panel/ticket/50'
      }
    ].filter(i => i.title.includes(search.value))
    isSearching.value = false
  }, 2000)
}
watch(search, searchUpdate)
const closeSearch = () => isSearchOpen.value = false

const notificationCount = ref(5)

let isProfileDropDownOpen = ref(false)

const logout = () => {
  return navigateTo('/')
}
const toggleSideBar = () => useEvent( 'toggle-panel-sidebar')
</script>

<template>
  <div class="card dark:text-gray-200 flex xs:flex-wrap xs:justify-center gap-2 py-3 px-5 items-center justify-end head bg-white shadow-lg shadow-gray-200/40 dark:bg-[#19222c] dark:shadow-gray-900/30">
    <IconsList @click="toggleSideBar" class="h-7 ml-2 hidden md:block xs:ml-auto" />
    <div class="ml-auto relative xs:w-full xs:ml-0 xs:order-3" v-click-outside="closeSearch">
      <input v-model.trim="search" @focus="isSearchOpen = true" type="search" class="py-2 pl-3 pr-12 rounded-xl bg-gray-100 dark:bg-gray-700 w-72 xs:w-full" placeholder="جستجوی سایت یا تیکت ...">
      <IconsSearch class="h-5 pointer-events-none absolute top-1/2 -translate-y-1/2 right-3" />
      <div v-if="isSearchOpen && search.length" class="w-full grid grid-cols-1 divide-y divide-gray-200 dark:divide-gray-600 bg-gray-100 dark:bg-gray-700 overflow-hidden absolute top-full mt-1 rounded shadow-lg">
        <div v-if="isSearching" class="p-5 flex justify-center">
          <IconsSpin class="h-8" />
        </div>
        <NuxtLink v-else-if="searchResults.length" v-for="(item, index) in searchResults"
                  :to="item.link"
                  :key="index"
                  class="flex gap-3 p-1.5 items-center hover:bg-gray-200 dark:hover:bg-gray-600 group">
          <div class="w-7 h-7 bg-gray-200 group-hover:bg-gray-300 dark:group-hover:bg-gray-700 dark:bg-gray-800 rounded-full grid place-content-center">
            <component :is="item.type === 'scan'? scanIcon : item.type === 'ticket'? ticketIcon : null" class="h-3.5" />
          </div>
          <span class="truncate text-sm">{{ item.title }}</span>
        </NuxtLink>
        <div v-else class="p-7 text-center text-sm">هیچ نتیجه ای پیدا نشد!</div>
      </div>
    </div>
    <NuxtLink to="/panel/notifications" class="icon-link">
      <div class="relative">
        <IconsBell class="h-5" />
        <span v-if="notificationCount" class="bg-red-600 pt-1 px-1 rounded-full text-white absolute -top-1.5 -right-2 block leading-3 text-sm">{{ notificationCount }}</span>
      </div>
    </NuxtLink>
    <NuxtLink to="/faqs" target="_blank" class="icon-link">
      <IconsQuestion class="h-5" />
    </NuxtLink>
    <div class="relative mr-3 select-none" v-click-outside="(()=>isProfileDropDownOpen = false)">
      <div class="flex gap-3 items-center cursor-pointer" @click="isProfileDropDownOpen = !isProfileDropDownOpen">
        <img src="/images/demo/avatar.jpg" class="w-8 h-8 rounded-full" alt="" />
        <div class="flex flex-col gap-0.5 lg:hidden">
          <span class="text-sm truncate" style="max-width:17ch">علی رنجبر جلودار</span>
          <span class="text-xs text-gray-500 dark:text-gray-400 truncate" style="max-width:20ch">aliranjbar230@gmail.com</span>
        </div>
        <IconsArrowDown class="w-2.5 lg:hidden" :style="{ 'transform': (isProfileDropDownOpen? 'rotateX(180deg)' : 'none') }" />
      </div>
      <div :class="['z-20 dark:bg-gray-700 text-sm absolute left-0 top-full mt-4 min-w-[150px] w-full xs:mt-2.5 bg-white drop-shadow dark:xs:shadow-black/60 dark:xs:shadow shadow-lg rounded-lg', isProfileDropDownOpen? 'addFadeInUp' : 'hidden']">
        <div class="absolute top-0 -translate-y-full right-2.5 lg:right-auto lg:left-2.5 border-b-[7px] border-x-[7px] border-x-transparent border-b-white dark:border-b-gray-700" style="filter:drop-shadow(0 -2px 1px rgba(0,0,0,.05))"></div>
        <div class="card divide-y divide-gray-100 dark:divide-gray-600 overflow-hidden rounded-lg">
          <NuxtLink to="/panel/password" class="dropdown-link card p-2 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5" @click="isProfileDropDownOpen = false">
            <IconsKey class="h-3.5 text-[#3390ec]" />
            <span>تغییر رمز عبور</span>
          </NuxtLink>
          <NuxtLink to="/panel/profile" class="dropdown-link card p-2 flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/5" @click="isProfileDropDownOpen = false">
            <IconsUserOutline class="h-3.5 text-[#3390ec]" />
            <span>ویرایش پروفایل</span>
          </NuxtLink>
          <div @click="logout()" class="card p-2 flex items-center gap-2 hover:bg-gray-50 text-red-600 dark:text-red-400 dark:hover:bg-white/5">
            <IconsKey class="h-3.5" />
            <span>خروج از حساب</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-link {
  @apply h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 grid place-items-center
}
.icon-link.router-link-exact-active, .dropdown-link.router-link-exact-active {
  @apply bg-gray-100 dark:bg-white/10
}
</style>