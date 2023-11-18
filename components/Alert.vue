<template>
  <div :class="['alert z-[999] shadow drop-shadow-2xl rounded fixed right-5 px-3 pt-1.5 pb-2 text-sm text-white', hasAlert? 'show' : 'close']">
    <component v-if="'icon' in alert" :is="alert.icon" :class="{ 'h-[18px] ml-0.5 inline-block' : true, 'animate-spin' : alert.spin }" />
    {{ alert.message }}
  </div>
</template>

<script setup>

let dataTimeout = null

let spinIcon = resolveComponent('IconsSpin')

const alert = ref({})
const oldAlert = ref({
  time : 10,
  type: 'alert',
  icon: null,
  spin: false
})

const hasAlert = ref(false)

const alertBackground = computed(() => {
  return {
    error: '#bb0202',
    success: '#007e50',
    warn: '#e34b04',
    info: '#0469e3',
    alert: '#474747'
  }[alert.value.type]
})

useListen('show-alert', async function ({ message, time = 10, type, icon = null, spin = false }) {
  clearTimeout(dataTimeout)
  hasAlert.value = false
  oldAlert.value = { ...oldAlert.value, ...alert.value }
  dataTimeout = setTimeout(() => {
    if (icon == '...') {
      icon = resolveComponent('IconsSpin')
      spin = true
    }
    alert.value = { message, type, icon, spin }
    hasAlert.value = true
    if (time > 0)
      dataTimeout = setTimeout(()=>{
        hasAlert.value = false
      }, time * 1000)
  }, 200)
})

useListen('update-alert', async function ({ message, ...options }) {
  if (!hasAlert.value) {
    useEvent('show-alert', { ...oldAlert.value, message, icon: null, spin: false, ...options })
    return 0;
  }
  clearTimeout(dataTimeout)
  dataTimeout = setTimeout(() => {
    options = {time: 10, ...options}
    if (options.icon == '...') {
      options.icon = spinIcon
      options.spin = true
    }
    alert.value = { ...alert.value, message, icon: null, spin: false, ...options }
    if (options.time > 0)
      dataTimeout = setTimeout(()=>{
        hasAlert.value = false
      }, options.time * 1000)
  }, 200)
})

useListen('hide-alert', function () {
  clearTimeout(dataTimeout)
  hasAlert.value = false
  alert.value = { }
})

</script>



<style scoped lang="postcss">
.alert {
  /*color: #e34b04*/
  background-color: v-bind(alertBackground);
}
.close {
  @apply -bottom-3 translate-y-full opacity-50 transition-all
}
.show {
  animation: show-alert .2s linear forwards;
}
@keyframes show-alert {
  from {
    @apply -bottom-3 translate-y-full
  }
  to {
    @apply bottom-5 translate-y-0
  }
}
</style>
