<script setup lang="ts">

definePageMeta({
  validate: async (route) => {
    if (!/^\d+$/.test(route.params.scanid)) return false
    return true
  }
})

const scanDetails = ref({
  status: 'critical', // critical , bad , low , good , secure
  progress: 49,
  datetime: '26 شهریور 1402 - 12:30',
  elapsed: '3.12 ثانیه',
  domain: 'https://aliranjbar.ir/license',
  shareLink: 'https://secyour.com/scan/226870'
})
const copyLink = () => {
  if (!process.client) return false;
  window?.navigator?.clipboard?.writeText(scanDetails.value.shareLink)
  useAlert('لینک کپی شد', { time: 4 })
}


useEvent('change-body-class', `${scanDetails.value.status}-shadow` )

const route = useRoute()
const progressGradient = computed(()=> {
  let colors = {
    critical: '#bb0202',
    bad: '#c02a2a',
    low: '#CE3B0B',
    good: '#F77F00',
    secure: '#007e50'
  }
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



</script>

<template>
  <div class="card mt-10">
    <div class="container">
      <div class="card grid grid-cols-[13rem_auto] gap-12">
        <div class="flex flex-col items-center gap-5">
          <div class="progress-radial float-right relative w-52 h-52 rounded-full">
            <div class="grid place-items-center absolute w-48 h-48 top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00171F]">
              <img :src="scanStatusIcon" class="max-w-[80%] mt-1" alt="Scan Status" />
            </div>
          </div>
        </div>
        <div>
          <div class="card grid grid-cols-2 gap-x-2 gap-y-6">
            <div class="flex items-center gap-3">
              <IconsCalendar class="h-5 text-[#4FDFFF] opacity-75" /> <span class="text-gray-300 mt-1">زمان اسکن:</span> <span class="mt-1">{{ scanDetails.datetime }}</span>
            </div>
            <div dir="ltr" class="flex items-center gap-3">
              <IconsLargeGlobe class="h-6" /> <span class="tracking-wider font-bold text-lg mt-1.5">{{ scanDetails.domain }}</span>
            </div>
            <div class="flex items-center gap-3">
              <IconsTime class="h-5 mb-1 text-[#4FDFFF] opacity-75" /> <span class="text-gray-300 mt-1">مدت اسکن:</span> <span class="mt-1">{{ scanDetails.elapsed }}</span>
            </div>
            <div dir="ltr" class="flex items-center gap-3">
              <div class="bg-white/10 py-0.5 px-3 flex items-center gap-2">
                <IconsLink class="h-3.5" /> <span class="tracking-wider mt-1">{{ scanDetails.shareLink }}</span>
              </div>
              <IconsCopy @click="copyLink()" class="h-4 opacity-80 hover:opacity-100 cursor-pointer" />
            </div>
          </div>
          <div class="card mt-24">
            <div class="strip card px-5 flex justify-between">
              <div class="relative">
                <div class="pt-2 pb-1.5">مورد امن</div>
                <div class="tooltip"><strong class="ml-1.5 text-base">3</strong> مورد</div>
              </div>
              <div class="relative">
                <div class="pt-2 pb-1.5">اهمیت پایین</div>
                <div class="tooltip"><strong class="ml-1.5 text-base" style="color:#FFCF25">1</strong> مورد</div>
              </div>
              <div class="relative">
                <div class="pt-2 pb-1.5">اهمیت متوسط</div>
                <div class="tooltip"><strong class="ml-1.5 text-base" style="color:#E57F17">5</strong> مورد</div>
              </div>
              <div class="relative">
                <div class="pt-2 pb-1.5">اهمیت بالا</div>
                <div class="tooltip"><strong class="ml-1.5 text-base" style="color:#f03c0c">11</strong> مورد</div>
              </div>
              <div class="relative">
                <div class="pt-2 pb-1.5">بحرانی</div>
                <div class="tooltip"><strong class="ml-1.5 text-base" style="color:#fa0000">3</strong> مورد</div>
              </div>
            </div>
          </div>
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
.tooltip {
  @apply w-20 py-1.5 pb-1 text-center bg-[#192E35] absolute -top-4 -translate-y-full right-1/2 translate-x-1/2 text-sm
}
.strip > div > div:not(.tooltip) {
  text-shadow: 0 0 5px #00000090;
}
.tooltip::before {
  content: "";
  @apply bg-white/10 absolute bottom-0 translate-y-full right-1/2 translate-x-1/2 border-x-8 border-x-[#00171F] border-t-8 border-t-[#192E35]
}
</style>