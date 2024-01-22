<script setup>

const route = useRoute()

const ticketDetails = ref({})

onBeforeMount(async ()=> {
    const { data } = await useApiFetch().post('/get-ticket', { id: route.params.id })
    if (data.status != 'ok') return navigateTo('/panel/tickets')
    ticketDetails.value = data
    isLoading.value = false
})

definePageMeta({
  layout: 'panel',
  validate: async (to, from) => {
    return /\d{5,10}/.test(to.params.id)
  }
})


const replayText = ref('')
const replyAttachment = ref(null)

let isLoading = ref(true)


const attachmentChange = ({ target }) => {
  let url = target.value;
  let ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
  if (target?.files[0] && ['png', 'jpeg', 'jpg', 'gif', 'pdf', 'rar', 'zip'].includes(ext)) {
    replyAttachment.value = target.files[0]
  } else {
    useAlertError('avatar-change', 'فایل باید عکس یا pdf یا zip/rar باشد.')
  }
}
</script>

<template>
  <div class="card">
    <div class="card flex justify-between items-center xs:flex-col gap-5">
      <h1 class="page-title">تیکت #{{ route.params.id }}</h1>
    </div>
    <div class="card mt-8">
        <div v-if="isLoading" class="card grid place-items-center p-10">
          <IconsSpin class="h-10 opacity-80" />
        </div>
        <div v-if="!isLoading" class="bg-white rounded-lg shadow card grid grid-cols-[auto_16rem]">
            <div class="p-6 border-l border-gray-200">
                <h3 class="font-bold text-lg card">{{ ticketDetails.title }}</h3>
                <textarea class="card mt-4 rounded bg-gray-50 min-h-52 border border-gray-200 p-3 resize-none" placeholder="پاسخ به تیکت..."></textarea>
                <div class="card mt-5 flex items-end justify-between">
                    <div class="flex items-center gap-2.5">
                      <div :class="['relative flex items-center gap-2.5 border hover:border-blue-500 px-3 py-1.5 rounded-lg', replyAttachment? 'border-blue-300' : 'border-gray-200']">
                        <IconsUpload class="h-5 text-blue-500" />
                        <div class="flex flex-col gap-px">
                            <span class="text-sm">فایل ضمیمه</span>
                            <span class="text-xs max-w-32 truncate text-gray-500">{{ replyAttachment? replyAttachment.name : 'برای انتخاب کلیک کنید' }}</span>
                        </div>
                        <input type="file" @change="attachmentChange" accept="application/pdf, image/*, .rarو .zip" class="p-0 m-0 cursor-pointer absolute inset-0 opacity-0 w-full h-full" />
                      </div>
                        <IconsTrash v-if="replyAttachment" @click="replyAttachment = null" class="h-4 text-gray-500 hover:text-red-600" />
                    </div>
                    <button class="pt-2 pb-2.5 px-3.5 flex gap-2.5 items-center bg-blue-500 hover:bg-blue-600 text-white rounded-lg"><IconsMessagePlus class="h-4" /> ارسال پاسخ</button>
                </div>
            </div>
            <div class="grid grid-cols-1 grid-rows-3 divide-y divide-gray-200 text-sm text-gray-500">
              <div class="flex flex-col gap-3 items-center justify-center">
                <span>آخرین بروزرسانی:</span>
                <span class="text-base text-gray-700">5 ساعت پیش</span>
              </div>
              <div class="flex flex-col gap-3 items-center justify-center">
                <span>تاریخ ایجاد:</span>
                <span class="text-base text-gray-700">26 شهریور 1403 - 05:03</span>
              </div>
              <div class="flex flex-col gap-3 items-center justify-center">
                <span>وضعیت:</span>
                <div :class="['py-1 px-3 lg:p-0 lg:!bg-transparent rounded-full', ticketDetails.statusCode == 2? 'bg-green-200 dark:bg-green-700/40  text-green-800 dark:text-green-300' : ticketDetails.statusCode == 1 ? 'bg-yellow-200 dark:bg-yellow-700/40  text-yellow-800 dark:text-yellow-300' : 'bg-gray-200 dark:bg-gray-800  text-gray-800 dark:text-gray-300']">{{ {0: 'بسته شده', 1: 'در انتظار پاسخ', 2: 'پاسخ داده شده'}[ticketDetails.statusCode] }}</div>  
              </div>
            </div>
        </div>
        <div v-if="!isLoading" class="card mt-10 flex flex-col gap-10">
          <div class="min-w-[60%] max-w-[90%] bg-white shadow rounded-2xl rounded-bl-none mr-auto">
            <div class="card p-5">
              <p class="leading-loose">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
              <a :href="''" download class="float-right mt-4 relative flex items-center gap-2.5 border hover:border-blue-500 px-3 py-1.5 rounded-lg">
                <IconsDownload class="h-5 text-blue-500" />
                <div class="flex flex-col gap-px">
                    <span class="text-sm">فایل ضمیمه</span>
                    <span class="text-xs max-w-32 truncate text-gray-500">attachment.pdf</span>
                </div>
              </a>
            </div>
            <div class="card px-5 py-2 border-t border-gray-200 flex justify-between items-end">
              <div class="flex gap-2 items-center text-sm">
                <img src="/images/demo/avatar.jpg" alt="" class="h-8 rounded-full" />
                <div>
                  <strong class="block">علی رنجبر جلودار</strong>
                  <span class="block text-xs text-gray-400 font-normal mt-px">برنامه نویس و پشتیبان</span>
                </div>
              </div>
              <span class="text-gray-400 text-xs"><IconsTime class="h-2.5 ml-1" /> 2 ساعت قبل</span>
            </div>
          </div>

          <div class="min-w-[60%] max-w-[90%] bg-[#f2fcff] shadow rounded-2xl rounded-br-none ml-auto">
            <div class="card p-5">
              <p class="leading-loose">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
              <a :href="''" download class="float-right mt-4 relative flex items-center gap-2.5 border hover:border-blue-500 px-3 py-1.5 rounded-lg">
                <IconsDownload class="h-5 text-blue-500" />
                <div class="flex flex-col gap-px">
                    <span class="text-sm">فایل ضمیمه</span>
                    <span class="text-xs max-w-32 truncate text-gray-500">attachment.pdf</span>
                </div>
              </a>
            </div>
            <div class="card px-5 py-2 border-t border-gray-200 flex justify-between items-end">
              <div class="flex gap-2 items-center text-sm">
                <img src="/images/demo/avatar.jpg" alt="" class="h-8 rounded-full" />
                <div>
                  <strong class="block">علی شاطریان</strong>
                  <span class="block text-xs text-gray-400 font-normal mt-px">خودم</span>
                </div>
              </div>
              <span class="text-gray-400 text-xs"><IconsTime class="h-2.5 ml-1" /> 3 ساعت قبل</span>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
</style>
