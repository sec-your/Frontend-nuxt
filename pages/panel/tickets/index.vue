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
      <div class="card">
        <div class="grid grid-cols-[8rem_auto_10rem_10rem] gap-3">
          <div class="bg-sky-500">11</div>
          <div class="bg-sky-500">11</div>
          <div class="bg-sky-500">11</div>
          <div class="bg-sky-500">11</div>
        </div>
      </div>
      <div v-if="!isLoading && !tickets.length" class="card text-center p-7 bg-gray-300/10 border border-gray-300 rounded-lg">
        <IconsTicket class="h-24 text-gray-400" />
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
