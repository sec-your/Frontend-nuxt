<script setup>
const isFreeScanOpen = ref(false)
const scanAddress = ref('')

let isFreeScanProcessing = false
const freeScanAction = async () => {
  if (isFreeScanProcessing) return false
  isFreeScanProcessing = true
  useCompactAlert('free-scan-request', 'درحال پردازش...', { icon: '...' })
  let error = ''
  await useApiFetch().post('freeScan', { url: scanAddress.value })
      .then(async ({ data })=> {
        await navigateTo(`/scan/${data.id}`)
      })
      .catch((e) => error = e.message)
  if (error === '') useHideAlert('free-scan-request')
  else useCompactAlertError('free-scan-request', error.message)
  isFreeScanProcessing = false
}
</script>

<template>
  <main class="container grid grid-cols-1 pt-10">
    <section class="grid grid-cols-2 gap-5 md:flex md:flex-col md:items-center md:gap-12 relative min-h-full md:min-h-0">
      <div class="flex flex-col justify-center md:text-center wow a-fadeInUp">
        <h2 class="text-2.5xl font-bold lg:text-1.5xl">پیشرو در حوزه امنیت شبکه در سطح ایران!</h2>
        <h3 class="text-1.5xl lg:text-lg font-bold text-[#eee] mt-4">امنیت سایت، یک مزیت نیست بلکه <span class="text-[#C83C3C]">اولویت</span> است</h3>
        <span class="text-[#ccc] max-w-[450px] leading-relaxed mt-6">سکیور می تواند روند تست امنیت سایت و سرور شما را بسیار ساده کند و به راحتی ارزیابی امنیتی و اسکن آسیب پذیری را انجام دهید. این سرویس به شما کمک می کند تا مراحل جمع آوری اطلاعات ، اسکن وب سایت ، اسکن سرور را به صورت آنلاین انجام داده و گزارش آن را دریافت کنید.</span>
        <div class="mt-10 flex gap-7 lg:flex-col lg:gap-4 lg:mt-7 md:items-center">
          <a class="flex items-end group" href="/">
            <svg width="37" height="46" viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37 4V22.375C37 37.075 18.5 46 18.5 46C18.5 46 0 37.075 0 22.375V4L18.5 0.5L37 4Z" class="fill-[#3808B1] group-hover:fill-[#3409A1]"/>
              <path d="M11.8677 25.672V22.288H17.5197V16.78H20.8677V22.288H26.3397V25.672H20.8677V31H17.5197V25.672H11.8677Z" fill="white"/>
            </svg>
            <div class="bg-[#3808B1] group-hover:bg-[#3409A1] py-1.5 pl-3 pr-7 scan-btn rounded-l-xl -mr-4.5">اسکن پیشرفته</div>
          </a>
          <div class="flex items-end group" @click="isFreeScanOpen = true" v-click-outside="() => { if(isFreeScanOpen) isFreeScanOpen = false; }">
            <svg @click="()=> { if(isFreeScanOpen) freeScanAction() }" class="cursor-pointer relative z-[2]" width="37" height="46" viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M37 3.5V21.875C37 36.575 18.5 45.5 18.5 45.5C18.5 45.5 0 36.575 0 21.875V3.5L18.5 0L37 3.5Z" :fill="isFreeScanOpen? '#C44915': '#B13B08'"/>
              <path :class="{ 'hidden' : !isFreeScanOpen }" d="M14.3771 14.4919C14.8631 13.7841 15.4845 13.1796 16.2055 12.7132C16.9264 12.2469 17.7326 11.9281 18.5775 11.7751C19.4224 11.6221 20.2892 11.638 21.1279 11.8219C21.9666 12.0059 22.7605 12.3541 23.4639 12.8466C24.1672 13.3391 24.766 13.966 25.2257 14.6912C25.6853 15.4165 25.9968 16.2255 26.142 17.0718C26.2872 17.918 26.2633 18.7847 26.0717 19.6216C25.8801 20.4586 25.5245 21.2493 25.0256 21.9481C24.0299 23.3427 22.5238 24.2877 20.8349 24.5775C19.146 24.8673 17.411 24.4784 16.0074 23.4956C14.6037 22.5127 13.6449 21.0153 13.3396 19.3292C13.0343 17.6431 13.4072 15.9046 14.3771 14.4919ZM24.5764 11.2577C22.8008 10.0147 20.6174 9.497 18.4727 9.81044C16.328 10.1239 14.3841 11.2448 13.0384 12.9439C11.6928 14.6431 11.0471 16.7921 11.2333 18.9516C11.4196 21.111 12.4238 23.1177 14.0405 24.5614L9.70486 30.7533L11.3429 31.9003L15.6786 25.7083C17.5878 26.7288 19.8144 26.9825 21.9042 26.4176C23.9941 25.8527 25.7897 24.5118 26.9248 22.6684C28.0598 20.825 28.4488 18.6179 28.0125 16.4975C27.5761 14.3771 26.3472 12.5031 24.5764 11.2577Z" fill="white"/>
            </svg>
            <div class="bg-[#B13B08] scan-btn rounded-l-xl overflow-hidden -mr-4.5 cursor-pointer">
              <input v-model="scanAddress" dir="ltr" :class="['free-scan-input py-1.5 pl-3 pr-8 text-left placeholder:text-gray-200 placeholder:text-right', isFreeScanOpen? 'block' : 'hidden']" type="url" placeholder="آدرس سایت خود را وارد نمایید">
              <span :class="['py-1.5 pl-3 pr-8 float-right', isFreeScanOpen? 'hidden': 'block']">اسکن رایگان</span>
            </div>
          </div>
        </div>
      </div>
      <div class="-ml-14 md:-order-1 md:ml-0 wow a-fadeInUp">
        <img src="/images/index/hbgindex.webp" class="float-left max-h-screen" alt="SecYour" rel="nofollow">
      </div>
    </section>

    <section class="grid grid-cols-4 ml:grid-cols-2 ml:grid-rows-2 xs:grid-cols-1 xs:grid-rows-none xs:gap-3 grid-rows-1 my-48">
      <div class="wow a-fadeInUp feature-item flex flex-col items-center px-5 py-7 gap-4 text-center rounded-3xl">
        <IconsSearchBug class="h-16 text-[#4FDFFF] opacity-80" />
        <h3 class="text-2xl font-bold">اسکن قدرتمند</h3>
        <p class="text-[#E0E0E0] leading-relaxed">اسکنر سکیور با توجه به بیس قدرتمند و دیتابیس عظیم و به روز آسیب پذیری ها، شما رو از هیچ چیز غافل نمیکنه</p>
      </div>
      <div class="wow a-fadeInDown xs:a-fadeInUp feature-item flex flex-col items-center px-5 py-7 gap-4 text-center rounded-3xl">
        <IconsGearCheck class="h-16 text-[#4FDFFF] opacity-80" />
        <h3 class="text-2xl font-bold">تعمیر سایت</h3>
        <p class="text-[#E0E0E0] leading-relaxed">تیم سکیور متشکل از امنیت کاران زبده کشور هستند که میتوانند بحث امنیت سایت و یا سازمان شما را عهده دار شوند</p>
      </div>
      <div class="wow a-fadeInUp feature-item flex flex-col items-center px-5 py-7 gap-4 text-center rounded-3xl">
        <IconsSecure class="h-16 text-[#4FDFFF] opacity-80" />
        <h3 class="text-2xl font-bold">نظارت و حفاظت</h3>
        <p class="text-[#E0E0E0] leading-relaxed">سیستم های سکیور به نحوی برنامه ریزی شده اند که می توانند سایت شما را به صورت مداوم پایش کنند و آسیب پذیری های جدید را به شما اطلاع دهند</p>
      </div>
      <div class="wow a-fadeInDown xs:a-fadeInUp feature-item flex flex-col items-center px-5 py-7 gap-4 text-center rounded-3xl">
        <IconsDetect class="h-16 text-[#4FDFFF] opacity-80" />
        <h3 class="text-2xl font-bold">تشخیص سریع</h3>
        <p class="text-[#E0E0E0] leading-relaxed text-m">اسکنر سکیور تمام سایت شما را وجب به وجب بررسی کرده، و آسیب پذیری فایل و یا لینک هایی که وجودش را فراموش کرده اید را نیز گزارش می دهد</p>
      </div>
    </section>

    <section class="relative support-section grid">
      <div class="card flex gap-20 pl-16 lg:pl-0 lg:gap-14 ml:flex-wrap xs:flex-col xs:gap-10 ml:justify-center items-center">
        <div class="wow a-fadeInUp flex gap-6 items-center ml-auto ml:w-full ml:justify-center">
          <div class="relative support-icon">
            <IconsHeadphone class="h-18" />
          </div>
          <div>
            <strong class="block text-2xl mb-2">به کمک نیاز دارید؟</strong>
            <span class="text-[#F0F0F0]">کارشناسان ما همیشه پاسخگوی شما هستند</span>
          </div>
        </div>
        <a target="_blank" href="https://t.me/secyour_ir" class="wow a-fadeInDown xs:a-fadeInUp flex gap-3 items-center group cursor-pointer" dir="ltr">
          <div class="h-10 w-10 bg-[#D9D9D930] rounded-full grid place-content-center group-hover:bg-sky-600">
            <IconsTelegram class="w-5" />
          </div>
          <strong class="text-2xl mt-1">@secyour_ir</strong>
        </a>
        <a href="tel:09123457890" class="wow a-fadeInUp flex gap-3 items-center group cursor-pointer" dir="ltr">
          <div class="h-10 w-10 bg-[#D9D9D930] rounded-full grid place-content-center group-hover:bg-green-600">
            <IconsTelephone class="w-5" />
          </div>
          <strong class="text-2xl mt-1">@09123457890</strong>
        </a>
      </div>
    </section>

    <section id="plans" class="plans relative grid grid-cols-3 items-center gap-9 xl:gap-3 lg:grid-cols-4 lg:gap-5 py-8 my-32 md:flex md:flex-col">
      <div class="wow a-fadeIn plan bg-white/10 max-w-[420px] rounded-2xl relative p-5 md:p-4 pt-7 lg:col-span-2">
        <h5 class="card text-center text-3xl font-bold">پایه</h5>
        <span class="card text-center mt-2">اسکن سایت برای آسیب پذیری های عمومی</span>
        <ul class="card my-7 bg-white/5 text-left p-4 space-y-3 rounded-xl plan-list">
          <li class="relative flex gap-2 flex-row-reverse">
            <span>Medium business scope</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
          <li class="relative flex gap-2 flex-row-reverse">
            <span>Scan behind logged in</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
          <li class="relative flex gap-2 flex-row-reverse">
            <span>Scan internal networks</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
          <li class="relative flex gap-2 flex-row-reverse">
            <span>Advanced reporting</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
          <li class="relative flex gap-2 flex-row-reverse">
            <span>Continuous security monitoring</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
          <li class="relative flex gap-2 flex-row-reverse">
            <span>Premium support</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
        </ul>
        <div class="card flex flex-col gap-4 items-center justify-between">
          <span class="text-2xl font-bold">رایگان</span>
          <button @click="navigateTo('/register')" class="card bg-orange-700 hover:bg-orange-600 text-white pt-2 pb-1.5 px-2 text-xl rounded-xl">ثبت نام رایگان</button>
        </div>
      </div>
      <div data-wow-delay=".6s" class="wow a-fadeIn plan bg-[#3808B1] max-w-[420px] rounded-2xl relative p-5 md:p-4 pt-10 md:pt-0 lg:col-span-2 lg:order-1 lg:col-start-2">
        <span class="ribbon absolute md:inline-block md:static md:float-left top-0 left-5 bg-amber-600 py-1 px-3 rounded-b-xl">محبوب ترین</span>
        <h5 class="card text-center text-3xl font-bold md:mt-5">حرفه ای</h5>
        <span class="card text-center mt-2">مناسب شرکت ها و سایت های بزرگ</span>
        <ul class="card my-7 bg-white/5 text-left p-4 space-y-3 rounded-xl plan-list">
          <li class="relative flex gap-2 flex-row-reverse">
            <span>API Access</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
          <li class="relative flex gap-2 flex-row-reverse">
            <span>Medium business scope</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
          <li class="relative flex gap-2 flex-row-reverse">
            <span>Scan behind logged in</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
          <li class="relative flex gap-2 flex-row-reverse">
            <span>Scan internal networks</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
          <li class="relative flex gap-2 flex-row-reverse">
            <span>Advanced reporting</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
          <li class="relative flex gap-2 flex-row-reverse">
            <span>Continuous security monitoring</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
          <li class="relative flex gap-2 flex-row-reverse">
            <span>Premium support</span>
            <div class="relative group">
              <IconsInfo class="h-3 mb-1" />
              <div class="tooltip group-hover:block">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</div>
            </div>
          </li>
        </ul>
        <div class="card flex flex-col gap-4 items-center justify-between">
          <span class="text-2xl font-bold">1 میلیون تومان <small class="font-normal text-lg">/ ماهانه</small></span>
          <button @click="navigateTo('/checkout')" class="card bg-orange-700 hover:bg-orange-600 text-white pt-2 pb-1.5 px-2 text-xl rounded-xl">خرید اشتراک</button>
        </div>
      </div>
      <div data-wow-delay=".3s" class="wow a-fadeIn plan bg-white/10 max-w-[420px] rounded-2xl relative p-5 md:p-4 pt-7 text-center lg:col-span-2">
        <h5 class="card text-3xl font-bold">سازمانی</h5>
        <span class="card mt-2">نظارت و پشتیبانی ۲۴ ساعته</span>
        <div class="card my-7 bg-white/5 p-4 rounded-xl leading-8">فرم رزرو جلسه را برای بررسی نیازمندی های سازمان خود تکمیل کرده و برای ما ارسال بکنید. کارشناسان ما به زودی با شما تماس برقرار خواهند کرد ممکن است کمی زمان ببرد از صبوری شما متشکریم</div>
        <div class="card flex flex-col gap-4 items-center justify-between">
          <span class="text-xl font-bold leading-relaxed">برای تنظیم جلسه،<br />روی لینک زیر کلیک کنید</span>
          <button @click="navigateTo('/contact')" class="card bg-orange-700 hover:bg-orange-600 text-white pt-2 pb-1.5 px-2 text-xl rounded-xl">تماس با ما</button>
        </div>
      </div>
    </section>

    <section class="flex flex-col gap-5">
      <h4 class="wow a-fadeInDown font-bold text-3xl text-center ">چرا سکیور؟</h4>
      <p data-wow-delay="0.2s" class="wow a-fadeInDown px-24 lg:px-10 sm:px-0 text-center text-gray-200 leading-relaxed">سکیور یک اسکنر قدرتمند است که شامل پایگاه داده ای بزرگ از آسیب پذیری های سایت است. علاوه بر میزان آسیب پذیری ها،  دقت تشخیص آسیب پذیری بالایی دارد که این اتفاق، اشتباه مثبت اسکنر رو به حداقل می رساند در کنار همه این ها سکیور یک منبع بزرگ برای دانش امنیت وبسایت است که شما را در این حوزه بسیار کمک خواهد کرد.</p>
      <div class="card grid grid-cols-4 mt-5 lg:grid-cols-2 lg:gap-5 xs:grid-cols-1 gap-8 xl:gap-2">
        <div class="why-item card flex gap-4 justify-center pt-8 pb-4 lg:pb-5 rounded-xl">
          <div class="relative flex flex-col items-center wow item-count">
            <div class="font-bold text-center w-32 lg:w-28 flex items-center gap-2 justify-center" dir="ltr">
              <strong class="wow text-5xl leading-10 lg:text-4xl" data-count-number="20.8">0</strong>
              <small class="text-3xl leading-10 lg:text-xl">k+</small>
            </div>
            <span class="text-lg lg:text-base">رضایت مشتری</span>
          </div>
          <IconsLike class="h-12 lg:h-10 lg:mt-3 mt-1 opacity-60 mix-blend-plus-lighter" />
        </div>
        <div class="why-item card flex gap-4 justify-center pt-8 pb-4 lg:pb-5 rounded-xl">
          <div class="relative flex flex-col items-center wow item-count">
            <div class="font-bold text-center w-32 lg:w-28 flex items-center gap-2 justify-center" dir="ltr">
              <strong class="wow text-5xl leading-10 lg:text-4xl" data-count-number="5.1">0</strong>
              <small class="text-3xl leading-10 lg:text-xl">k+</small>
            </div>
            <span class="text-lg lg:text-base">رشد فروش سایت ها</span>
          </div>
          <IconsChartPlus class="h-12 lg:h-10 lg:mt-3 mt-1 opacity-60 mix-blend-plus-lighter" />
        </div>
        <div class="why-item card flex gap-4 justify-center pt-8 pb-4 lg:pb-5 rounded-xl">
          <div class="relative flex flex-col items-center wow item-count">
            <div class="font-bold text-center w-32 lg:w-28 flex gap-2 justify-center" dir="ltr">
              <strong class="wow text-5xl leading-10 lg:text-4xl" data-count-number="56">0</strong>
              <small class="text-3xl leading-10 lg:text-xl">m+</small>
            </div>
            <span class="text-lg lg:text-base">حملات جلوگیری شده</span>
          </div>
          <IconsScope class="h-12 lg:h-10 lg:mt-3 mt-1 opacity-60 mix-blend-plus-lighter" />
        </div>
        <div class="why-item card flex gap-4 justify-center pt-8 pb-4 lg:pb-5 rounded-xl">
          <div class="relative flex flex-col items-center wow item-count">
            <div class="font-bold text-center w-32 lg:w-28 flex gap-2 justify-center" dir="ltr">
              <strong class="wow text-5xl leading-10 lg:text-4xl" data-count-number="91">0</strong>
            </div>
            <span class="text-lg lg:text-base">آسیب پذیری اساسی</span>
          </div>
          <IconsBug class="h-12 lg:h-10 lg:mt-3 mt-1 opacity-60 mix-blend-plus-lighter" />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.scan-btn {
  clip-path: polygon(0 0, calc(100% - 25px) 0, 100% 100%, 0 100%);
}
.why-item {
  background-image: linear-gradient(to bottom left, #29324160 0%, #29324140 30%, #29324110 50%, #29324140 80%, #29324160 100%);
  border: 2px solid #ffffff05
}
.item-count::before {
  content: "";
  width: 100%;
  height: 100px;
  background: linear-gradient(to bottom, rgba(217, 217, 217, 0.5) 0%, rgba(217, 217, 217, 0) 100%);
  opacity: 0;
  z-index: -1;
  position: absolute;
  clip-path: polygon(50% 0, 100% 60px, 30% 60px, 30% 100%, 70% 100%, 70% 60px, 0 60px);
  transform: translateY(50px);
  transition: all 1s;
}
.animated.item-count::before {
  opacity: .15;
  transform: translateY(-20px);
}
.feature-item:nth-child(odd) {
  --dir : to bottom
}
.feature-item:nth-child(even) {
  --dir : to top
}
@media screen and (max-width: 560px) {
  .feature-item:nth-child(even) {
    --dir : to bottom
  }
}
.feature-item {
  background-image: linear-gradient(var(--dir), #162531 0%, #16253100 100%);
}
.support-section::before, .support-icon::before, .plans::before {
  content: "";
  position: absolute;
  background: #fff;
  opacity: .35;
  z-index: -1;
}
.support-section::before {
  bottom: -270px;
  left: 0;
  width: 200px;
  height: 200px;
  filter: blur(100px);
}
.plans::before {
  bottom: -125px;
  right: -75px;
  width: 400px;
  height: 400px;
  filter: blur(200px);
  opacity: .12;
}
.support-icon::before {
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  animation: blurred-bg-support 1s infinite;
}
@keyframes blurred-bg-support {
  0%, 100% {
    filter: blur(40px);
  }
  50% {
    filter: blur(50px);
  }
}

.tooltip {
  @apply drop-shadow-xl hidden left-1/2 -translate-x-1/2 text-right text-sm leading-relaxed absolute -translate-y-full -top-3 w-52 bg-black py-2 px-3 rounded-xl
}
.tooltip::before {
  content: "";
  @apply left-1/2 -translate-x-1/2 absolute -bottom-2 border-x-8 border-x-transparent border-t-8 border-t-black
}
.plan-list li::before {
  content: '✓';
  margin-right: 3px;
}
</style>