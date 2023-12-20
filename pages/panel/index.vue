<script setup>
definePageMeta({
  layout: 'panel'
})

const latestScans = [
  {
    uuid: 9523871,
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
    uuid: 3023871,
    domain: 'https://secyour.ir',
    datetime: '23 شهریور 1402 - 04:10',
    rate: 52
  },
  {
    uuid: 6323871,
    domain: 'http://aaelectronic.ir',
    datetime: '10 شهریور 1402 - 12:00',
    rate: 10
  },
  {
    uuid: 9523871,
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
    uuid: 3023871,
    domain: 'https://secyour.ir',
    datetime: '23 شهریور 1402 - 04:10',
    rate: 52
  }
]
</script>

<template>
  <div class="card">
    <div class="card flex justify-between">
      <h1 class="page-title font-bold text-xl">آخرین اسکن ها</h1>
      <div>Filter</div>
    </div>
    <div class="card rounded-xl overflow-hidden shadow-md mt-10">
      <table class="card border-collapse leading-relaxed text-center text-gray-600 space-y-6 text-sm" style="word-spacing:2px">
        <thead class="bg-[#3390ec10] dark:bg-gray-700 text-gray-700 dark:text-white">
        <tr>
          <th class="p-3 sm:hidden">شماره</th>
          <th class="p-3">دامنه</th>
          <th class="p-3">تاریخ اسکن</th>
          <th class="p-3">امتیاز اسکن</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(scan, index) in latestScans" :key="index" class="odd:bg-white even:bg-gray-50 hover:bg-gray-100 dark:even:bg-gray-700 dark:odd:bg-gray-600 dark:text-gray-200">
          <td class="p-2 sm:hidden" v-text="0 <= index && index <= 8? `0${index+1}` : index+1"></td>
          <td class="p-2">
            <a :href="scan.domain" target="_blank" class="!text-sky-600 hover:!text-sky-700 dark:!text-sky-200 dark:hover:!text-sky-300">{{ scan.domain.replace(/^https?:\/\//, '') }}</a>
          </td>
          <td class="p-2" v-text="scan.datetime"></td>
          <td class="p-2 tracking-widest" dir="ltr">
            <span :title="scan.rate >= 90? 'عالی' : (scan.rate >= 70? 'خوب' : (scan.rate >= 50? 'متوسط' : (scan.rate >= 30? 'بد' : 'خیلی بد')))" :class="['inline-block rounded-xl px-3.5 pt-1 xs:px-0 xs:!bg-transparent', (70 <= scan.rate) ? 'bg-green-200 text-green-700 dark:bg-green-600/70 dark:text-green-200' : ((50 <= scan.rate) ? 'bg-yellow-200 text-yellow-700 dark:bg-yellow-600/70 dark:text-yellow-200' : 'bg-red-200 text-red-700 dark:bg-red-700/70 dark:text-red-200')]">{{ scan.rate }}/100</span>
          </td>
          <td class="p-2">
            <NuxtLink class="!text-sky-600 hover:!text-sky-700 dark:!text-sky-200 dark:hover:!text-sky-300 md:flex md:justify-center" :to="`/panel/scan/${scan.uuid}`">
              <span class="md:hidden">مشاهده نتیجه</span>
              <IconsEye class="w-4 hidden md:block" />
            </NuxtLink>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.page-title {
  @apply relative z-0
}
.page-title::before {
  content: "";
  z-index: -1;
  @apply absolute w-7 h-7 rounded-full bg-[#3390ec] opacity-10 pointer-events-none -top-1.5 -right-2
}
table td, table th {
  @apply border-2 border-gray-100 dark:border-gray-800
}
</style>
