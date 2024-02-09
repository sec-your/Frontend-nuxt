<script setup>
let getCurrentDate = new Date().getFullYear()
</script>

<template>
  <footer class="card">
    <div class="container grid grid-cols-1 xs:justify-items-center">
      <div class="card flex justify-between gap-10 pb-10 text-gray-200 lg:flex-wrap sm:grid sm:grid-cols-2 sm:gap-14 xs:grid-cols-1 xs:max-w-[300px]">
        <div class="flex flex-col gap-2">
          <h5 class="head-col">دسترسی سریع</h5>
          <NuxtLink class="link" to="/">صفحه اصلی</NuxtLink>
          <NuxtLink class="link" to="/about">درباره ما</NuxtLink>
          <NuxtLink class="link" to="/faqs">سوالات متداول</NuxtLink>
          <NuxtLink class="link" to="/#plans">پلن ها</NuxtLink>
          <NuxtLink class="link" to="/contact">تماس با ما</NuxtLink>
        </div>
        <div class="flex flex-col gap-2">
          <h5 class="head-col">کمک</h5>
          <NuxtLink class="link" to="/terms">قوانین و مقررات</NuxtLink>
          <NuxtLink class="link" to="/privacy">سیاست حفظ حریم خصوصی</NuxtLink>
          <NuxtLink class="link" to="/contact">مرکز پشتیبانی</NuxtLink>
        </div>
        <div class="flex flex-col gap-2">
          <h5 class="head-col">آخرین های وبلاگ</h5>
          <NuxtLink class="link truncate" to="/">لورم ایپسوم متن ساختگی با تولید سادگی</NuxtLink>
          <NuxtLink class="link truncate" to="/about">نامفهوم از صنعت چاپ و با استفاده</NuxtLink>
          <NuxtLink class="link truncate" to="/faqs">کتابهای زیادی در شصت و سه درصد گذشته</NuxtLink>
          <NuxtLink class="link truncate" to="/#plans">شناخت فراوان جامعه و متخصصان</NuxtLink>
          <NuxtLink class="link truncate" to="/contact">در این صورت می توان امید داشت که تمام</NuxtLink>
        </div>
        <div class="flex flex-col gap-2">
          <h5 class="head-col">ارتباط با ما</h5>
          <a class="link tracking-wider" href="mailto:support@secyour.ir" dir="ltr">support@secyour.ir</a>
          <a class="link tracking-wider" href="tel:0912654" dir="ltr">0901 234 5678</a>
          <a class="link tracking-wider" href="https://t.me/secyour" target="_blank" dir="ltr">t.me/secyour</a>
        </div>
      </div>
      <div class="sm:w-full p-5 text-center border-t border-t-white/10 text-gray-100">
        <span dir="ltr" class="ml-2 xs:block" v-text="`© ${getCurrentDate}`"></span> تمامی حقوق سایت محفوظ می باشد
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: linear-gradient(to top, rgba(0,0,0,.4) 0%, rgba(0,0,0,0) 100%);
}
.head-col {
  @apply font-bold mb-3 text-lg text-white
}
.link {
  @apply pr-3 hover:text-white border-r border-white/20 hover:border-white
}
</style>