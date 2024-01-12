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
        <div :class="['mt-10 flex lg:justify-center xs:flex-col xs:items-center xs:gap-8', isFreeScanOpen? 'gap-0' : 'gap-7 sm:gap-3']">
          <a :class="['overflow-hidden xs:!animate-none', isFreeScanOpen? 'slideRightOut' : 'slideLeftIn']" href="/" style="filter:drop-shadow(0 5px 15px #3808B1C5)">
            <div style="width:150px" class="flex items-center gap-3 py-1.5 justify-center rounded-full bg-[#3808B1] hover:bg-[#3307a3]">
              <svg class="inline h-5" viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1797 44.2076C18.2997 44.2723 18.4068 44.3291 18.5 44.3779C18.5932 44.3291 18.7003 44.2723 18.8203 44.2076C19.3116 43.9427 20.0177 43.5461 20.8668 43.0239C22.5673 41.9784 24.8307 40.4363 27.0895 38.4492C31.6391 34.4468 36 28.7924 36 21.875V4.32855L18.5 1.01774L1 4.32855V21.875C1 28.7924 5.36091 34.4468 9.91051 38.4492C12.1693 40.4363 14.4327 41.9784 16.1332 43.0239C16.9823 43.5461 17.6884 43.9427 18.1797 44.2076Z" stroke="currentColor" stroke-width="3"/>
                <path d="M11 23.892V20.508H16.652V15H20V20.508H25.472V23.892H20V29.22H16.652V23.892H11Z" fill="currentColor"/>
              </svg>
              <div class="mt-0.5">اسکن پیشرفته</div>
            </div>
          </a>
          <div class="flex" @click="isFreeScanOpen = true" v-click-outside="() => { if(isFreeScanOpen) isFreeScanOpen = false; }">
            <div class="cursor-pointer flex items-center px-4 py-1.5 rounded-full bg-[#B13B08] hover:bg-[#a74217] shadow-lg shadow-[#B13B0855]">
              <IconsSearchBug v-if="isFreeScanOpen" @click="freeScanAction()" class="h-5" style="transform:rotateY(180deg)" />
              <svg v-else class="inline h-5" viewBox="0 0 37 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1797 44.2076C18.2997 44.2723 18.4068 44.3291 18.5 44.3779C18.5932 44.3291 18.7003 44.2723 18.8203 44.2076C19.3116 43.9427 20.0177 43.5461 20.8668 43.0239C22.5673 41.9784 24.8307 40.4363 27.0895 38.4492C31.6391 34.4468 36 28.7924 36 21.875V4.32855L18.5 1.01774L1 4.32855V21.875C1 28.7924 5.36091 34.4468 9.91051 38.4492C12.1693 40.4363 14.4327 41.9784 16.1332 43.0239C16.9823 43.5461 17.6884 43.9427 18.1797 44.2076Z" stroke="currentColor" stroke-width="3"/>
              </svg>
              <div :class="['mt-0.5 sm:duration-0', isFreeScanOpen? 'sm:w-0 whitespace-nowrap slideRightOut overflow-hidden' : 'mr-3']">اسکن رایگان</div>
            </div>
            <input type="url" dir="ltr" :class="['float-right bg-white rounded-full pt-1 text-left px-3 w-60 sm:w-52 text-gray-600 xs:duration-0', isFreeScanOpen? 'mr-3 max-w-[240px]' : 'max-w-0 !p-0']" placeholder="https://example.com" >
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

    <section id="plans" class="relative py-8 my-32">
      <div class="text-center mb-14">
        <h4 class="relative wow a-fadeInDown font-bold text-3xl text-center inline-block">اشتراک های سکیور <div class="absolute w-10 h-10 rounded-md rotate-45 bg-white opacity-5 animation-spin -top-3 -right-3 z-[-1]"></div></h4>
      </div>
      <div class="plans grid grid-cols-3 items-center gap-9 xl:gap-3 lg:grid-cols-4 lg:gap-5 md:flex md:flex-col">
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
            <span class="text-lg lg:text-base">تعداد مقالات امنیتی</span>
          </div>
          <IconsLike class="h-12 lg:h-10 lg:mt-3 mt-1 opacity-60 mix-blend-plus-lighter" />
        </div>
        <div class="why-item card flex gap-4 justify-center pt-8 pb-4 lg:pb-5 rounded-xl">
          <div class="relative flex flex-col items-center wow item-count">
            <div class="font-bold text-center w-32 lg:w-28 flex items-center gap-2 justify-center" dir="ltr">
              <strong class="wow text-5xl leading-10 lg:text-4xl" data-count-number="5.1">0</strong>
              <small class="text-3xl leading-10 lg:text-xl">k+</small>
            </div>
            <span class="text-lg lg:text-base">سایت اسکن شده</span>
          </div>
          <IconsChartPlus class="h-12 lg:h-10 lg:mt-3 mt-1 opacity-60 mix-blend-plus-lighter" />
        </div>
        <div class="why-item card flex gap-4 justify-center pt-8 pb-4 lg:pb-5 rounded-xl">
          <div class="relative flex flex-col items-center wow item-count">
            <div class="font-bold text-center w-32 lg:w-28 flex gap-2 justify-center" dir="ltr">
              <strong class="wow text-5xl leading-10 lg:text-4xl" data-count-number="56">0</strong>
              <small class="text-3xl leading-10 lg:text-xl">m+</small>
            </div>
            <span class="text-lg lg:text-base">آسیب های یافته شده</span>
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
.slideLeftIn {
  animation: slideLeftIn .5s linear forwards
}
@keyframes slideLeftIn {
  from {
    max-width: 0
  }
  to {
    max-width: 200px
  }
}
.slideRightOut {
  animation: slideRightOut .5s linear forwards
}
@keyframes slideRightOut {
  from {
    max-width: 200px
  }
  to {
    max-width: 0
  }
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