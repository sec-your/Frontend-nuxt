<script setup>

definePageMeta({
  layout: 'panel'
})

const page = ref(50)
const count = ref(58)

const tickets = [
  {
    id: '#1956312',
    title: 'اسکن نکردن سایت در پنل کاربری',
    updatedDate: '10 دقیقه قبل',
    status: 1, // 0: Closed, 1: pending..., 2: answered
  },{
    id: '#1894533',
    title: 'اطلاعات اشتباه در مورد سایت',
    updatedDate: '5 ساعت قبل',
    status: 0, // 0: Closed, 1: pending..., 2: answered
  },{
    id: '#2329513',
    title: 'کار نکردن دکمه تغییر در صفحه پروفایل',
    updatedDate: '1 روز قبل',
    status: 2, // 0: Closed, 1: pending..., 2: answered
  },{
    id: '#1956312',
    title: 'اسکن نکردن سایت در پنل کاربری',
    updatedDate: '10 دقیقه قبل',
    status: 1, // 0: Closed, 1: pending..., 2: answered
  },
]
let isLoading = ref(false)
</script>

<template>
  <div class="card">
    <div class="card flex justify-between items-center xs:flex-col gap-5">
      <h1 class="page-title">تیکت ها</h1>
    </div>
    <div class="card mt-8">
      <table class="card border-separate border-spacing-y-3 border-spacing-x-0 leading-relaxed text-center text-gray-600 space-y-6 text-sm" style="word-spacing:2px">
        <thead class="bg-blue-50 dark:bg-gray-700 text-gray-700 dark:text-white">
        <tr class="shadow shadow-blue-200 dark:shadow-gray-800">
          <th class="py-3 px-2 sm:hidden border-b border-gray-300">شماره یکتا</th>
          <th class="p-3 border-b border-gray-300 text-right">عنوان</th>
          <th class="py-3 px-2 border-b border-gray-300">وضعیت</th>
          <th class="py-3 px-2 border-b border-gray-300">آخرین بروزرسانی</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="tickets.length && !isLoading" v-for="(ticket, index) in tickets" :key="index" class="shadow odd:bg-white even:bg-gray-50 hover:bg-gray-100 dark:even:bg-gray-700 dark:odd:bg-gray-600 dark:text-gray-200">
          <td class="py-2 px-1 sm:hidden" v-text="ticket.id"></td>
          <td class="p-2 text-right">
            <a :href="`/tickets/${ticket.id.substr(1)}`" target="_blank" class="!text-sky-600 hover:!text-sky-700 dark:!text-sky-200 dark:hover:!text-sky-300">{{ useLimit(ticket.title, 45) }}</a>
          </td>
          <td class="py-2 px-1 tracking-widest" dir="ltr">
            <span :class="['inline-block rounded-xl px-3 text-[13px] py-0.5 xs:px-0 xs:!bg-transparent', (ticket.status === 0) ? 'bg-gray-200 text-gray-700 dark:bg-gray-600/70 dark:text-gray-200' : ((ticket.status === 1) ? 'bg-yellow-200 text-yellow-700 dark:bg-yellow-600/70 dark:text-yellow-200' : 'bg-green-200 text-green-700 dark:bg-green-600/70 dark:text-green-200')]">{{ ticket.status === 0? 'بسته شده' : (ticket.status === 1? 'در انتظار پاسخ' : 'پاسخ داده شده') }}</span>
          </td>
          <td class="py-2 px-1" v-text="ticket.updatedDate"></td>
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
      <div v-if="!isLoading && !tickets.length" class="card text-center p-7 bg-gray-300/10 border border-gray-300 rounded-lg">
        <IconsSecureClose class="h-24 text-gray-400" />
        <span class="block mt-7 text-lg">هیچ تیکتی ایجاد نشده است!</span>
      </div>
      <div v-if="tickets.length && !isLoading" class="card flex items-center justify-center mt-5">
        <PanelPagination v-model="page" :count="count" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.isLoading {
  @apply lg:w-16 xs:w-10
}
</style>
