<script setup>
definePageMeta({
  layout: 'panel'
})
let isLoading = ref(false)
const page = ref(1)
const count = ref(1)

const sites = ref([])

const getSites = async () => {
    isLoading.value = true
    await useUserApiFetch().get('/monitored-sites', {
        params: {
            page: page.value
        }
    }).then(({ data }) => {
        count.value = data.pageCount
        sites.value = data.sites
    }).catch((error) => {
        count.value = 0
        sites.value = []
        useCompactAlertError('get-monitored-sites', getErrorMessage(error))
    })
    isLoading.value = false
    return false
}

onMounted(()=> getSites())
watch(page, async () => await getSites())

const changeScanInterval = async (value, uuid) => {
    useCompactAlert(`change-interval-${uuid}`, 'درحال انجام...', { time: 99, icon: '...' })
    await useUserApiFetch().post('/change-scan-interval', {
        interval: Number(value),
        id: uuid
    }).then(({ data }) => {
        useCompactAlertSuccess(`change-interval-${uuid}`, 'دوره زمانی اسکن با موفقیت تغییر یافت.', { time: 5 })
    }).catch((error) => {
        useCompactAlertError(`change-interval-${uuid}`, getErrorMessage(error), { time: 5 })
    })
    return false
}

</script>

<template>
<div class="card">
    <div class="card flex items-center xs:flex-col gap-5">
      <h1 class="page-title">سایت های تحت نظارت</h1>
      <span class="mr-auto text-gray-500"><strong>5</strong> سایت</span>
    </div>
    <div class="card mt-8">
      <div :class="['card divide-y text-center divide-gray-200 dark:divide-gray-800', isLoading? 'shadow-sm' : 'bg-white dark:bg-gray-700 shadow']">
        <div v-if="sites.length || isLoading" class="grid grid-table xs:text-center gap-3 2xl:gap-1 bg-gray-50 dark:bg-gray-700 p-3">
            <div class="xl:hidden">ردیف</div>
            <div class="sm:col-span-full">دامنه</div>
            <div>تاریخ آخرین اسکن</div>
            <div>امتیاز آخرین اسکن</div>
            <div class="sm:hidden">دوره زمانی اسکن</div>
            <div class="sm:hidden"></div>
        </div>
        <NuxtLink v-for="(site, index) in sites" :to="`/panel/monitored/${site.uuid}`" class="group relative items-center hover:z-[2] hover:shadow hover:shadow-blue-200/40 dark:hover:shadow-blue-300/40 hover:bg-blue-200/10 dark:hover:bg-blue-300/10 text-sm grid grid-table xs:text-center gap-3 2xl:gap-1 bg-white dark:bg-gray-700 p-3 lg:px-1">
            <div class="xl:hidden">{{ index + 1 }}</div>
            <div class="sm:col-span-full sm:text-lg sm:font-bold">{{ site.domain.replace(/^https?:\/\//, '') }}</div>
            <div>{{ site.latestScanDate.split('-')[0] }}<span class="lg:block lg:mt-1"><small class="lg:hidden"> - </small></span>{{ site.latestScanDate.split('-')[1] }}</div>
            <div dir="ltr" class="flex items-center gap-3 justify-center lg:flex-col lg:gap-1">
                <span :class="['pt-1 px-2 tracking-wider rounded-full text-white', (70 <= site.latestScanRate) ? 'bg-green-700 dark:bg-green-200' : ((50 <= site.latestScanRate) ? 'bg-amber-700 dark:bg-yellow-200' : 'bg-red-700 dark:bg-red-200')]">{{ site.latestScanRate }}/100</span>
                <div :class="['pt-1 pb-0.5 px-1 rounded-full flex items-center gap-1', site.growth > 0? 'text-green-700' : site.growth < 0? 'text-red-700' : 'text-gray-600']">
                 <span class="mt-1 tracking-widest">{{ site.growth }}%</span>
                 <component :is="site.growth > 0? 'IconsArrowUp' : site.growth < 0? 'IconsArrowDown' : 'IconsDash'" class="w-3" />
                </div>
            </div>
            <div>
                <select @click.prevent="" @change.prevent="changeScanInterval($event.target.value, site.uuid)" class="w-28 py-1 bg-transparent border-b border-gray-300" :value="site.scanInterval">
                    <option value="1">هر روز یک بار</option>
                    <option value="2">هر 2 روز یک بار</option>
                    <option value="3">هر 3 روز یک بار</option>
                    <option value="7">هر هفته یک بار</option>
                    <option value="30">هر ماه یک بار</option>
                    <option value="90">هر 3 ماه یک بار</option>
                </select>
            </div>
            <div class="text-left sm:text-center">
                <IconsArrowLeft class="h-4 ml-3 sm:ml-0 text-gray-400 group-hover:text-gray-600" />
            </div>
        </NuxtLink>
        <div v-if="isLoading" v-for="i of 5" class="items-center grid grid-table gap-3 2xl:gap-1 bg-white dark:bg-gray-700 p-3 lg:px-1" :style="{ opacity: ((8 - i) / 7) * 100 + '%' }">
            <div class="xl:hidden"><span class="isLoading w-10 h-6 my-1 rounded-full"></span></div>
            <div class="sm:col-span-full"><span class="isLoading w-36 h-6 my-1 rounded-full"></span></div>
            <div><span class="isLoading w-24 h-6 my-1 rounded-full"></span></div>
            <div><span class="isLoading w-24 h-6 my-1 rounded-full"></span></div>
            <div><span class="isLoading w-24 h-6 my-1 rounded-full"></span></div>
            <div><span class="isLoading w-6 h-6 my-1 rounded-full"></span></div>
        </div>
      </div>
      <div v-if="!isLoading && !sites.length" class="card text-center p-7 bg-gray-300/10 border border-gray-300 rounded-lg">
        <IconsSearchBug class="h-24 text-gray-400" />
        <span class="block mt-7 text-lg">هیچ سایتی اضافه نشده است!</span>
      </div>
      <div v-if="sites.length && !isLoading" class="card flex items-center justify-center mt-10">
        <PanelPagination v-model="page" :count="count" />
      </div>
    </div>
</div>
</template>

<style scoped>
.grid-table {
    grid-template-columns: 3rem auto 10rem 10rem 9rem 5%;
}
@media screen and (max-width: 1075px) {
    .grid-table {
        grid-template-columns: auto 10rem 10rem 9rem 3%;
    }
}
@media screen and (max-width: 980px) {
    .grid-table {
        grid-template-columns: auto 7.5rem 7.5rem 8rem 3%;
    }
}
@media screen and (max-width: 680px) {
    .grid-table {
        grid-template-columns: repeat(2, auto);
        gap: 10px
    }
}
</style>