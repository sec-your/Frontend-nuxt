<script setup lang="ts">

definePageMeta({
  validate: async (route) => /^\d+$/.test(route.params.scanid)
})

const scanDetails = ref({
  status: 'critical', // critical , bad , low , good , secure
  progress: 49,
  type: 'pro',
  datetime: '26 شهریور 1402 - 12:30',
  elapsed: '3.12 ثانیه',
  domain: 'https://aliranjbar.ir/license',
  shareLink: 'https://secyour.com/scan/226870',
  reports: [
    {
      status: 'critical',
      name: 'باگ SSL در چندین صفحه',
      uuid: 'SSL-BUG',
      content: 'اگر وب سایت شما شامل تبلیغات یا منابع فریبنده ای باشد که بازدیدکنندگان را به انجام کارهای خطرناکی مثل افشای اطلاعات محرمانه یا دانلود بدافزارها ترغیب می کند، گوگل این مشکل امنیتی را برای وب سایت شما در نظر می گیرد. محتوای فریب دهنده ممکن است در قالب تصاویر یا هر ویژگی ظاهری دیگر و همچنین تبلیغات نمایش داده شود. گاهی اوقات این تبلیغات برای کاربران صفحه قابل مشاهده است. اما در برخی از موارد دیگر نیز سایت میزبان هیچگونه تبلیغاتی نیست اما کاربران را به صورت popup یا حالت های مختلف دیگر به صفحات بد انتقال می دهد. این نوع از محتوای فریبنده را نمونه ای از مهندسی اجتماعی می دانند. بدافراز در واقع هرگونه نرم افزاری است که به صورت اختصاصی برای آسیب رساندن به سیستم یا گوشی تلفن همراه کاربران طراحی شده است. یک هکر می تواند یکسری لینک یا محتوای اسپم را به صفحات وب سایت شما اضافه کند. چنین مواردی می تواند وب سایت شما را به خطر بیندازد. اگر یک هکر صفحات جدیدی را روی وب سایت شما ایجاد کند که حاوی کلمات یا لینک های اسپم باشد، شما با خطای امنیتی Hacked type: URL injection گوگل رو به رو می شوید. گاهی اوقات این صفحات جدید حاوی کدهایی هستند که به طور معمول توسط شما ایجاد نمی شوند. مثل هدایت کاربران به وب سایت های دیگر یا مشارکت وب سرور سایت شما در یک حمله به سایت های دیگر. برای رفع مشکل امنیتی سایت از نظر گوگل باید به ترتیب زیر پیش بروید: \n' +
          '\n' +
          'در ابتدا باید اطمینان حاصل کنید که صفحات وب سایت شما دارای محتوا یا تبلیغات فریبنده هستند. برای اینکار می توانید از ابزار URL inspecrtion سرچ کنسول گوگل استفاده کنید. در نظر داشته باشید که برخی از تبلیغات در دستگاه های تلفن همراه و نسخه دسکتاپ متفاوت باشند.\n' +
          'محتوا یا منابع فریبنده شناسایی شده را حذف نمایید. تا زمانی که این صفحات حذف نشوند، نمی توانید برای رفع مشکل امنیتی موجود اقدام کنید.\n' +
          'بعد از رفع مشکلات موجود زمان آن می رسد که درخواست بازنگری را از طریق گوگل سرچ کنسول ارسال نمایید.'
    },
    {
      status: 'bad',
      name: 'باگ MYSQL SHELL در ارسال اطلاعات',
      uuid: 'MYSQL-BUG',
      content: 'اگر وب سایت شما شامل تبلیغات یا منابع فریبنده ای باشد که بازدیدکنندگان را به انجام کارهای خطرناکی مثل افشای اطلاعات محرمانه یا دانلود بدافزارها ترغیب می کند، گوگل این مشکل امنیتی را برای وب سایت شما در نظر می گیرد. محتوای فریب دهنده ممکن است در قالب تصاویر یا هر ویژگی ظاهری دیگر و همچنین تبلیغات نمایش داده شود. گاهی اوقات این تبلیغات برای کاربران صفحه قابل مشاهده است. اما در برخی از موارد دیگر نیز سایت میزبان هیچگونه تبلیغاتی نیست اما کاربران را به صورت popup یا حالت های مختلف دیگر به صفحات بد انتقال می دهد. این نوع از محتوای فریبنده را نمونه ای از مهندسی اجتماعی می دانند. بدافراز در واقع هرگونه نرم افزاری است که به صورت اختصاصی برای آسیب رساندن به سیستم یا گوشی تلفن همراه کاربران طراحی شده است. یک هکر می تواند یکسری لینک یا محتوای اسپم را به صفحات وب سایت شما اضافه کند. چنین مواردی می تواند وب سایت شما را به خطر بیندازد. اگر یک هکر صفحات جدیدی را روی وب سایت شما ایجاد کند که حاوی کلمات یا لینک های اسپم باشد، شما با خطای امنیتی Hacked type: URL injection گوگل رو به رو می شوید. گاهی اوقات این صفحات جدید حاوی کدهایی هستند که به طور معمول توسط شما ایجاد نمی شوند. مثل هدایت کاربران به وب سایت های دیگر یا مشارکت وب سرور سایت شما در یک حمله به سایت های دیگر. برای رفع مشکل امنیتی سایت از نظر گوگل باید به ترتیب زیر پیش بروید: \n' +
          '\n' +
          'در ابتدا باید اطمینان حاصل کنید که صفحات وب سایت شما دارای محتوا یا تبلیغات فریبنده هستند. برای اینکار می توانید از ابزار URL inspecrtion سرچ کنسول گوگل استفاده کنید. در نظر داشته باشید که برخی از تبلیغات در دستگاه های تلفن همراه و نسخه دسکتاپ متفاوت باشند.\n' +
          'محتوا یا منابع فریبنده شناسایی شده را حذف نمایید. تا زمانی که این صفحات حذف نشوند، نمی توانید برای رفع مشکل امنیتی موجود اقدام کنید.\n' +
          'بعد از رفع مشکلات موجود زمان آن می رسد که درخواست بازنگری را از طریق گوگل سرچ کنسول ارسال نمایید.'
    },
    {
      status: 'bad',
      name: 'مشکل deceptive pages',
      uuid: 'deceptive-pages',
      content: 'اگر وب سایت شما شامل تبلیغات یا منابع فریبنده ای باشد که بازدیدکنندگان را به انجام کارهای خطرناکی مثل افشای اطلاعات محرمانه یا دانلود بدافزارها ترغیب می کند، گوگل این مشکل امنیتی را برای وب سایت شما در نظر می گیرد. محتوای فریب دهنده ممکن است در قالب تصاویر یا هر ویژگی ظاهری دیگر و همچنین تبلیغات نمایش داده شود. گاهی اوقات این تبلیغات برای کاربران صفحه قابل مشاهده است. اما در برخی از موارد دیگر نیز سایت میزبان هیچگونه تبلیغاتی نیست اما کاربران را به صورت popup یا حالت های مختلف دیگر به صفحات بد انتقال می دهد. این نوع از محتوای فریبنده را نمونه ای از مهندسی اجتماعی می دانند. بدافراز در واقع هرگونه نرم افزاری است که به صورت اختصاصی برای آسیب رساندن به سیستم یا گوشی تلفن همراه کاربران طراحی شده است. یک هکر می تواند یکسری لینک یا محتوای اسپم را به صفحات وب سایت شما اضافه کند. چنین مواردی می تواند وب سایت شما را به خطر بیندازد. اگر یک هکر صفحات جدیدی را روی وب سایت شما ایجاد کند که حاوی کلمات یا لینک های اسپم باشد، شما با خطای امنیتی Hacked type: URL injection گوگل رو به رو می شوید. گاهی اوقات این صفحات جدید حاوی کدهایی هستند که به طور معمول توسط شما ایجاد نمی شوند. مثل هدایت کاربران به وب سایت های دیگر یا مشارکت وب سرور سایت شما در یک حمله به سایت های دیگر. برای رفع مشکل امنیتی سایت از نظر گوگل باید به ترتیب زیر پیش بروید: \n' +
          '\n' +
          'در ابتدا باید اطمینان حاصل کنید که صفحات وب سایت شما دارای محتوا یا تبلیغات فریبنده هستند. برای اینکار می توانید از ابزار URL inspecrtion سرچ کنسول گوگل استفاده کنید. در نظر داشته باشید که برخی از تبلیغات در دستگاه های تلفن همراه و نسخه دسکتاپ متفاوت باشند.\n' +
          'محتوا یا منابع فریبنده شناسایی شده را حذف نمایید. تا زمانی که این صفحات حذف نشوند، نمی توانید برای رفع مشکل امنیتی موجود اقدام کنید.\n' +
          'بعد از رفع مشکلات موجود زمان آن می رسد که درخواست بازنگری را از طریق گوگل سرچ کنسول ارسال نمایید.'
    },
    {
      status: 'bad',
      name: 'مشکل  deceptive embedded resources',
      uuid: 'deceptive-resources',
      content: 'اگر وب سایت شما شامل تبلیغات یا منابع فریبنده ای باشد که بازدیدکنندگان را به انجام کارهای خطرناکی مثل افشای اطلاعات محرمانه یا دانلود بدافزارها ترغیب می کند، گوگل این مشکل امنیتی را برای وب سایت شما در نظر می گیرد. محتوای فریب دهنده ممکن است در قالب تصاویر یا هر ویژگی ظاهری دیگر و همچنین تبلیغات نمایش داده شود. گاهی اوقات این تبلیغات برای کاربران صفحه قابل مشاهده است. اما در برخی از موارد دیگر نیز سایت میزبان هیچگونه تبلیغاتی نیست اما کاربران را به صورت popup یا حالت های مختلف دیگر به صفحات بد انتقال می دهد. این نوع از محتوای فریبنده را نمونه ای از مهندسی اجتماعی می دانند. بدافراز در واقع هرگونه نرم افزاری است که به صورت اختصاصی برای آسیب رساندن به سیستم یا گوشی تلفن همراه کاربران طراحی شده است. یک هکر می تواند یکسری لینک یا محتوای اسپم را به صفحات وب سایت شما اضافه کند. چنین مواردی می تواند وب سایت شما را به خطر بیندازد. اگر یک هکر صفحات جدیدی را روی وب سایت شما ایجاد کند که حاوی کلمات یا لینک های اسپم باشد، شما با خطای امنیتی Hacked type: URL injection گوگل رو به رو می شوید. گاهی اوقات این صفحات جدید حاوی کدهایی هستند که به طور معمول توسط شما ایجاد نمی شوند. مثل هدایت کاربران به وب سایت های دیگر یا مشارکت وب سرور سایت شما در یک حمله به سایت های دیگر. برای رفع مشکل امنیتی سایت از نظر گوگل باید به ترتیب زیر پیش بروید: \n' +
          '\n' +
          'در ابتدا باید اطمینان حاصل کنید که صفحات وب سایت شما دارای محتوا یا تبلیغات فریبنده هستند. برای اینکار می توانید از ابزار URL inspecrtion سرچ کنسول گوگل استفاده کنید. در نظر داشته باشید که برخی از تبلیغات در دستگاه های تلفن همراه و نسخه دسکتاپ متفاوت باشند.\n' +
          'محتوا یا منابع فریبنده شناسایی شده را حذف نمایید. تا زمانی که این صفحات حذف نشوند، نمی توانید برای رفع مشکل امنیتی موجود اقدام کنید.\n' +
          'بعد از رفع مشکلات موجود زمان آن می رسد که درخواست بازنگری را از طریق گوگل سرچ کنسول ارسال نمایید.'
    },
    {
      status: 'low',
      name: 'مشکلات امنیتی بدافزارها در سایت',
      uuid: 'BAD-software',
      content: 'اگر وب سایت شما شامل تبلیغات یا منابع فریبنده ای باشد که بازدیدکنندگان را به انجام کارهای خطرناکی مثل افشای اطلاعات محرمانه یا دانلود بدافزارها ترغیب می کند، گوگل این مشکل امنیتی را برای وب سایت شما در نظر می گیرد. محتوای فریب دهنده ممکن است در قالب تصاویر یا هر ویژگی ظاهری دیگر و همچنین تبلیغات نمایش داده شود. گاهی اوقات این تبلیغات برای کاربران صفحه قابل مشاهده است. اما در برخی از موارد دیگر نیز سایت میزبان هیچگونه تبلیغاتی نیست اما کاربران را به صورت popup یا حالت های مختلف دیگر به صفحات بد انتقال می دهد. این نوع از محتوای فریبنده را نمونه ای از مهندسی اجتماعی می دانند. بدافراز در واقع هرگونه نرم افزاری است که به صورت اختصاصی برای آسیب رساندن به سیستم یا گوشی تلفن همراه کاربران طراحی شده است. یک هکر می تواند یکسری لینک یا محتوای اسپم را به صفحات وب سایت شما اضافه کند. چنین مواردی می تواند وب سایت شما را به خطر بیندازد. اگر یک هکر صفحات جدیدی را روی وب سایت شما ایجاد کند که حاوی کلمات یا لینک های اسپم باشد، شما با خطای امنیتی Hacked type: URL injection گوگل رو به رو می شوید. گاهی اوقات این صفحات جدید حاوی کدهایی هستند که به طور معمول توسط شما ایجاد نمی شوند. مثل هدایت کاربران به وب سایت های دیگر یا مشارکت وب سرور سایت شما در یک حمله به سایت های دیگر. برای رفع مشکل امنیتی سایت از نظر گوگل باید به ترتیب زیر پیش بروید: \n' +
          '\n' +
          'در ابتدا باید اطمینان حاصل کنید که صفحات وب سایت شما دارای محتوا یا تبلیغات فریبنده هستند. برای اینکار می توانید از ابزار URL inspecrtion سرچ کنسول گوگل استفاده کنید. در نظر داشته باشید که برخی از تبلیغات در دستگاه های تلفن همراه و نسخه دسکتاپ متفاوت باشند.\n' +
          'محتوا یا منابع فریبنده شناسایی شده را حذف نمایید. تا زمانی که این صفحات حذف نشوند، نمی توانید برای رفع مشکل امنیتی موجود اقدام کنید.\n' +
          'بعد از رفع مشکلات موجود زمان آن می رسد که درخواست بازنگری را از طریق گوگل سرچ کنسول ارسال نمایید.'
    },
    {
      status: 'good',
      name: 'مشکل Content injection',
      uuid: 'Content-injection',
      content: 'اگر وب سایت شما شامل تبلیغات یا منابع فریبنده ای باشد که بازدیدکنندگان را به انجام کارهای خطرناکی مثل افشای اطلاعات محرمانه یا دانلود بدافزارها ترغیب می کند، گوگل این مشکل امنیتی را برای وب سایت شما در نظر می گیرد. محتوای فریب دهنده ممکن است در قالب تصاویر یا هر ویژگی ظاهری دیگر و همچنین تبلیغات نمایش داده شود. گاهی اوقات این تبلیغات برای کاربران صفحه قابل مشاهده است. اما در برخی از موارد دیگر نیز سایت میزبان هیچگونه تبلیغاتی نیست اما کاربران را به صورت popup یا حالت های مختلف دیگر به صفحات بد انتقال می دهد. این نوع از محتوای فریبنده را نمونه ای از مهندسی اجتماعی می دانند. بدافراز در واقع هرگونه نرم افزاری است که به صورت اختصاصی برای آسیب رساندن به سیستم یا گوشی تلفن همراه کاربران طراحی شده است. یک هکر می تواند یکسری لینک یا محتوای اسپم را به صفحات وب سایت شما اضافه کند. چنین مواردی می تواند وب سایت شما را به خطر بیندازد. اگر یک هکر صفحات جدیدی را روی وب سایت شما ایجاد کند که حاوی کلمات یا لینک های اسپم باشد، شما با خطای امنیتی Hacked type: URL injection گوگل رو به رو می شوید. گاهی اوقات این صفحات جدید حاوی کدهایی هستند که به طور معمول توسط شما ایجاد نمی شوند. مثل هدایت کاربران به وب سایت های دیگر یا مشارکت وب سرور سایت شما در یک حمله به سایت های دیگر. برای رفع مشکل امنیتی سایت از نظر گوگل باید به ترتیب زیر پیش بروید: \n' +
          '\n' +
          'در ابتدا باید اطمینان حاصل کنید که صفحات وب سایت شما دارای محتوا یا تبلیغات فریبنده هستند. برای اینکار می توانید از ابزار URL inspecrtion سرچ کنسول گوگل استفاده کنید. در نظر داشته باشید که برخی از تبلیغات در دستگاه های تلفن همراه و نسخه دسکتاپ متفاوت باشند.\n' +
          'محتوا یا منابع فریبنده شناسایی شده را حذف نمایید. تا زمانی که این صفحات حذف نشوند، نمی توانید برای رفع مشکل امنیتی موجود اقدام کنید.\n' +
          'بعد از رفع مشکلات موجود زمان آن می رسد که درخواست بازنگری را از طریق گوگل سرچ کنسول ارسال نمایید.'
    },
  ]
})

const ReportBGOpacity = (i = 0) => {
  return  (20 + ( (scanDetails.value.reports.length - i) / scanDetails.value.reports.length ) * 80) / 100
}
const copyLink = () => {
  if (!process.client) return false;
  window?.navigator?.clipboard?.writeText(scanDetails.value.shareLink)
  useAlert('لینک کپی شد', { time: 4 })
}


useEvent('change-body-class', `${scanDetails.value.status}-shadow` )
let colors = {
  critical: '#bb0202',
  bad: '#c02a2a',
  low: '#CE3B0B',
  good: '#F77F00',
  secure: '#007e50'
}
const route = useRoute()
const progressGradient = computed(()=> {
  let details = scanDetails.value.progress < 50? {
    first: 90,
    second: 90 + (scanDetails.value.progress / 50) * 180,
    color: '#2f3439'
  } : {
    first: ((scanDetails.value.progress - 50) / 50) * 180 - 90,
    second: 270,
    color: colors[scanDetails.value.status]
  }
  return `linear-gradient(${details.first}deg, ${details.color} 50%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0)), linear-gradient(${details.second}deg, ${colors[scanDetails.value.status]} 50%, #2f343970 50%, #2f343970)`
})
const scanStatusIcon = computed(()=> {
  return `/images/scan/scan-status-${scanDetails.value.status}.png`
})

const scanTypeNames = {
  'free' : 'اسکن رایگان',
  'pro' : 'اسکن حرفه ای',
  'organization' : 'اسکن سازمانی'
}

let selectedReport = ref(scanDetails.value?.reports[0])

</script>

<template>
  <div class="card mt-10">
    <div class="container">
      <div class="card grid grid-cols-[13rem_auto] lg:grid-cols-1 gap-12">
        <div class="flex flex-col items-center gap-3">
          <div class="progress-radial float-right relative w-52 h-52 lg:w-56 lg:h-56 rounded-full">
            <div class="grid place-items-center absolute w-48 h-48 lg:w-52 lg:h-52 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00171F]">
              <img :src="scanStatusIcon" class="max-w-[80%] mt-1" alt="Scan Status" />
            </div>
          </div>
          <div class="flex items-center gap-3.5 justify-center" dir="ltr">
            <span :class="['py-1 px-2 rounded text-sm mt-1', scanDetails.type == 'free'? 'bg-white/10' : 'bg-[#3808B1]']">{{ scanTypeNames[scanDetails.type] }}</span>
            <strong class="text-lg mt-2"><span class="text-2xl">{{ scanDetails.progress / 10 }}</span> / 10</strong>
          </div>
        </div>
        <div>
          <div class="card grid grid-cols-2 gap-x-2 gap-y-7 mt-3 md:flex md:flex-col md:items-center">
            <div class="flex items-center gap-3">
              <IconsCalendar class="h-5 text-[#4FDFFF] opacity-75" /> <span class="text-gray-300 mt-1">زمان اسکن:</span> <span class="mt-1">{{ scanDetails.datetime }}</span>
            </div>
            <div dir="ltr" class="flex items-center gap-3 md:-order-1">
              <IconsLargeGlobe class="h-6" /> <span class="tracking-wider font-bold text-lg mt-1.5">{{ scanDetails.domain }}</span>
            </div>
            <div class="flex items-center gap-3">
              <IconsTime class="h-5 mb-1 text-[#4FDFFF] opacity-75" /> <span class="text-gray-300 mt-1">مدت اسکن:</span> <span class="mt-1">{{ scanDetails.elapsed }}</span>
            </div>
            <div dir="ltr" class="flex items-center gap-3 md:-order-1">
              <div class="bg-white/10 py-0.5 px-3 flex items-center gap-2">
                <IconsLink class="h-3.5" /> <span class="tracking-wider mt-1">{{ scanDetails.shareLink }}</span>
              </div>
              <IconsCopy @click="copyLink()" class="h-4 opacity-80 hover:opacity-100 cursor-pointer" />
            </div>
          </div>
          <div class="strip card mt-28 sm:mt-14 px-5 flex justify-between sm:px-0 sm:flex-wrap sm:gap-10 sm:justify-center">
            <div class="relative sm:flex sm:items-center sm:flex-col pt-2 pb-1.5 sm:p-0">
              <div>مورد امن</div>
              <div class="tooltip"><strong class="ml-1.5 text-base sm:!text-white">3</strong> مورد</div>
            </div>
            <div class="relative sm:flex sm:items-center sm:flex-col pt-2 pb-1.5 sm:p-0">
              <div>اهمیت پایین</div>
              <div class="tooltip"><strong class="ml-1.5 text-base sm:!text-white" style="color:#FFCF25">1</strong> مورد</div>
            </div>
            <div class="relative sm:flex sm:items-center sm:flex-col pt-2 pb-1.5 sm:p-0">
              <div>اهمیت متوسط</div>
              <div class="tooltip"><strong class="ml-1.5 text-base sm:!text-white" style="color:#E57F17">5</strong> مورد</div>
            </div>
            <div class="relative sm:flex sm:items-center sm:flex-col pt-2 pb-1.5 sm:p-0">
              <div>اهمیت بالا</div>
              <div class="tooltip"><strong class="ml-1.5 text-base sm:!text-white" style="color:#f03c0c">11</strong> مورد</div>
            </div>
            <div class="relative sm:flex sm:items-center sm:flex-col pt-2 pb-1.5 sm:p-0">
              <div>بحرانی</div>
              <div class="tooltip"><strong class="ml-1.5 text-base sm:!text-white" style="color:#fa0000">3</strong> مورد</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card my-24 sm:my-16 grid grid-cols-[18rem_auto] gap-10 lg:gap-5 md:gap-10 md:grid-cols-1">
        <ul class="md:grid md:grid-cols-2 sm:grid-cols-1 sm:gap-0 md:gap-1">
          <li v-for="(report, index) in scanDetails.reports" @click="selectedReport = report" :key="report.uuid" class="card truncate cursor-pointer pt-2.5 pb-2 px-3 bg-light-primary border-r md:border-r-2 hover:border-r-4" :style="{ 'border-right-color': colors[report.status], '--tw-bg-opacity' : selectedReport.uuid == report.uuid ? 0 : ReportBGOpacity(index) }">{{ report.name }}</li>
        </ul>
        <div>
          <h2 class="card text-2xl sm:text-xl font-bold"><span class="w-2.5 h-2.5 ml-2 inline-block" :style="{ 'background-color': colors[selectedReport.status] }"></span> {{ selectedReport.name }}</h2>
          <div v-html="selectedReport.content" class="card mt-6 text-[#E6E6E6] leading-loose"></div>
          <a v-if="selectedReport?.name" :href="`https://blog.${$config.public.SITE_URL}/?s=`+ selectedReport.uuid.replace(' ', '+')" target="_blank" class="card bg-light-primary bg-opacity-80 hover:bg-opacity-100 flex gap-3 justify-between items-center mt-10 border-r-2 border-[#4FDFFF] pt-2.5 pb-2 px-4">
            <span>آموزش حل `{{ selectedReport.name }}` را در وبلاگ بخوانید</span>
            <IconsArrowLeft class="h-4 sm:hidden" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-radial {
  background-image: v-bind(progressGradient);
}
.strip {
  background-image: linear-gradient(90deg, #BB0202 5%, #FFCF25 75%, rgba(255, 248, 221, .1) 95%, rgba(255, 248, 221, 0) 100%);
}
@media screen and (max-width: 680px) {
  .strip { background: none }
}
.tooltip {
  @apply w-20 py-1.5 pb-1 text-center bg-[#192E35] absolute -top-4 -translate-y-full right-1/2 translate-x-1/2 text-sm sm:static sm:w-auto sm:right-0 sm:translate-x-0 sm:translate-y-0 sm:top-0 sm:bg-transparent sm:p-0
}
.strip > div > div {
  text-shadow: 0 0 5px #00000090;
}
.tooltip::before {
  content: "";
  @apply bg-white/10 absolute bottom-0 translate-y-full right-1/2 translate-x-1/2 border-x-8 border-x-[#00171F] border-t-8 border-t-[#192E35] sm:hidden
}
</style>