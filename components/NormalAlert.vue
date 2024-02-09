<script setup>

defineOptions({
  inheritAttrs: false
})

const attrs = useAttrs()
let alert = computed(() => attrs.alert)
let timeout = alert.value.time + 's'
const colors = {
  error: '#bb0202',
  success: '#007e50',
  warn: '#e34b04',
  info: '#0469e3',
  alert: '#474747'
}
const icons = {
  error: resolveComponent('IconsCheck'),
  success: resolveComponent('IconsCheck'),
  warn: resolveComponent('IconsCheck'),
  info: resolveComponent('IconsInfo'),
  alert: resolveComponent('IconsCheck')
}
</script>

<template>
  <div
      class="alert shadow-lg relative drop-shadow-md rounded px-3 pt-1.5 pb-2 overflow-hidden text-sm bg-white border-t-[3px] flex gap-2 items-center"
      :style="{'border-top-color': colors[alert.status]}"
  >
    <component :is="alert.icon ?? icons[alert.status]" class="h-8 ml-1" :style="{'color': colors[alert.status]}" />
    <div class="flex flex-col gap-px">
      <strong class="text-base" :style="{'color': colors[alert.status]}">{{ alert.title }}</strong>
      <span class="text-gray-700">{{ alert.message }}</span>
    </div>
    <div class="timeout h-0.5 bg-gray-700 absolute bottom-0 right-0"></div>
  </div>
</template>

<style scoped>
.right-7 .alert {
  animation: show-alert-from-right .2s linear forwards;
}
@keyframes show-alert-from-right {
  from {
    @apply -mr-8 translate-x-full
  }
  to {
    @apply mr-0 translate-y-0
  }
}
.left-7 .alert {
  animation: show-alert-from-left .2s linear forwards;
}
@keyframes show-alert-from-left {
  from {
    @apply -ml-8 -translate-x-full
  }
  to {
    @apply ml-0 translate-y-0
  }
}
.timeout {
  animation: timeout v-bind(timeout) linear forwards;
}
@keyframes timeout {
  from {
    opacity: .3;
    width: 0;
  }
  to {
    width: 100%;
    opacity: .7;
  }
}
</style>