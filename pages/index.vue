<script setup>
const isFreeScanOpen = ref(false)
const scanAddress = ref('')
const freeScanAction = () => {

}
</script>

<template>
  <div class="card mt-10">
    <div class="container grid grid-cols-2 gap-5 md:flex md:flex-col md:items-center md:gap-12">
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
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<style scoped>
.scan-btn {
  clip-path: polygon(0 0, calc(100% - 25px) 0, 100% 100%, 0 100%);
}
</style>