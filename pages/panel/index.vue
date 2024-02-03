<script setup>

definePageMeta({
  layout: 'panel'
})
let filter = ref('datetime')
const latestScans = [
  {
    uuid: 2523871,
    domain: 'https://certivid.com',
    datetime: '26 شهریور 1402 - 10:23',
    rate: 49
  },
  {
    uuid: 1723871,
    domain: 'https://rezagraphic.ir',
    datetime: '23 شهریور 1402 - 05:23',
    rate: 90
  },
  {
    uuid: 6023871,
    domain: 'https://secyour.ir',
    datetime: '23 شهریور 1402 - 04:10',
    rate: 58
  },
  {
    uuid: 6323871,
    domain: 'http://aaelectronic.ir',
    datetime: '10 شهریور 1402 - 12:00',
    rate: 10
  },
  {
    uuid: 7523871,
    domain: 'https://certivid.com',
    datetime: '26 شهریور 1402 - 10:23',
    rate: 46
  },
  {
    uuid: 1723871,
    domain: 'https://rezagraphic.ir',
    datetime: '23 شهریور 1402 - 05:23',
    rate: 92
  },
  {
    uuid: 8023871,
    domain: 'https://secyour.ir',
    datetime: '23 شهریور 1402 - 04:10',
    rate: 52
  }
]
let isLoading = ref(false)
</script>

<template>
  <div class="card">
    <div class="card flex justify-between items-center xs:flex-col gap-5">
      <h1 class="page-title">آخرین اسکن ها</h1>
      <div class="flex items-center gap-3">
        <span>بر اساس</span>
        <div class="rounded-full overflow-hidden bg-white dark:bg-gray-700 shadow">
          <button @click="filter = 'datetime'" :class="{'py-1.5 px-3 rounded-full': true, 'bg-blue-600 text-white' : filter !== 'rate'}">تاریخ</button>
          <button @click="filter = 'rate'" :class="{'py-1.5 px-3 rounded-full': true, 'bg-blue-600 text-white' : filter === 'rate'}">امتیاز</button>
        </div>
      </div>
    </div>
    <div class="card mt-8">
      <table class="card border-separate border-spacing-y-3 border-spacing-x-0 leading-relaxed text-center text-gray-600 space-y-6 text-sm" style="word-spacing:2px">
        <thead class="bg-blue-50 dark:bg-gray-700 text-gray-700 dark:text-white">
        <tr class="shadow shadow-blue-200 dark:shadow-gray-800">
          <th class="p-3 sm:hidden">شماره</th>
          <th class="p-3">دامنه</th>
          <th class="p-3">تاریخ اسکن</th>
          <th class="p-3">امتیاز اسکن</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          <tr v-if="latestScans.length && !isLoading" v-for="(scan, index) in latestScans.sort((a,b)=> b[filter == 'datetime'? 'uuid' : 'rate'] - a[filter == 'datetime'? 'uuid' : 'rate'] )" :key="index" class="shadow odd:bg-white even:bg-gray-50 hover:bg-gray-100 dark:even:bg-gray-700 dark:odd:bg-gray-600 dark:text-gray-200">
            <td class="p-2 sm:hidden" v-text="0 <= index && index <= 8? `0${index+1}` : index+1"></td>
            <td class="p-2">
              <a :href="scan.domain" target="_blank" class="!text-sky-600 hover:!text-sky-700 dark:!text-sky-200 dark:hover:!text-sky-300">{{ scan.domain.replace(/^https?:\/\//, '') }}</a>
            </td>
            <td class="p-2" v-text="scan.datetime"></td>
            <td class="p-2 tracking-widest" dir="ltr">
              <span :title="scan.rate >= 90? 'عالی' : (scan.rate >= 70? 'خوب' : (scan.rate >= 50? 'متوسط' : (scan.rate >= 30? 'بد' : 'خیلی بد')))" :class="['inline-block rounded-xl px-3.5 pt-1 xs:px-0 xs:!bg-transparent', (70 <= scan.rate) ? 'bg-green-200 text-green-700 dark:bg-green-600/70 dark:text-green-200' : ((50 <= scan.rate) ? 'bg-yellow-200 text-yellow-700 dark:bg-yellow-600/70 dark:text-yellow-200' : 'bg-red-200 text-red-700 dark:bg-red-700/70 dark:text-red-200')]">{{ scan.rate }}/100</span>
            </td>
            <td class="p-2">
              <NuxtLink :to="`/scan/${scan.uuid}`" target="_blank" class="!text-sky-600 hover:!text-sky-700 dark:!text-sky-200 dark:hover:!text-sky-300 md:flex md:justify-center">
                <span class="md:hidden">مشاهده نتیجه</span>
                <IconsEye class="w-4 hidden md:block" />
              </NuxtLink>
            </td>
          </tr>
          <tr v-if="isLoading" class="opacity-80 shadow bg-white dark:bg-gray-700 dark:text-gray-200">
            <td class="p-2 sm:hidden">
              <span class="isLoading w-10 h-6 my-1 rounded-full"></span>
            </td>
            <td class="p-2">
              <span class="isLoading w-36 h-6 my-1 rounded-full"></span>
            </td>
            <td class="p-2">
              <span class="isLoading w-36 h-6 my-1 rounded-full"></span>
            </td>
            <td class="p-2">
              <span class="isLoading w-16 h-6 my-1 rounded-full"></span>
            </td>
            <td class="p-2">
              <span class="isLoading w-32 h-6 my-1 rounded-full"></span>
            </td>
          </tr>
          <tr v-if="isLoading" class="opacity-60 shadow bg-white dark:bg-gray-700 dark:text-gray-200">
            <td class="p-2 sm:hidden">
              <span class="isLoading w-10 h-6 my-1 rounded-full"></span>
            </td>
            <td class="p-2">
              <span class="isLoading w-36 h-6 my-1 rounded-full"></span>
            </td>
            <td class="p-2">
              <span class="isLoading w-36 h-6 my-1 rounded-full"></span>
            </td>
            <td class="p-2">
              <span class="isLoading w-16 h-6 my-1 rounded-full"></span>
            </td>
            <td class="p-2">
              <span class="isLoading w-32 h-6 my-1 rounded-full"></span>
            </td>
          </tr>
          <tr v-if="isLoading" class="opacity-30 shadow bg-white dark:bg-gray-700 dark:text-gray-200">
            <td class="p-2 sm:hidden">
              <span class="isLoading w-10 h-6 my-1 rounded-full"></span>
            </td>
            <td class="p-2">
              <span class="isLoading w-36 h-6 my-1 rounded-full"></span>
            </td>
            <td class="p-2">
              <span class="isLoading w-36 h-6 my-1 rounded-full"></span>
            </td>
            <td class="p-2">
              <span class="isLoading w-16 h-6 my-1 rounded-full"></span>
            </td>
            <td class="p-2">
              <span class="isLoading w-32 h-6 my-1 rounded-full"></span>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="!isLoading && !latestScans.length" class="card text-center p-7 bg-gray-300/10 border border-gray-300 rounded-lg">
        <IconsSecureClose class="h-24 text-gray-400" />
        <span class="block mt-7 text-lg">هیچ سایتی تا حالا اسکن نشده است!</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.isLoading {
  @apply lg:w-16 xs:w-10
}
</style>
