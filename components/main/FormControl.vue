<script setup>
defineOptions({
  inheritAttrs: false
})
const props = defineProps({
  modelValue: String,
})
const isFocused = ref(false)
const isActive = computed(() => props.modelValue.length || isFocused.value)
</script>

<template>
  <div class="card relative">
    <input v-bind="$attrs"
           @focus="isFocused = true"
           @blur="isFocused = false"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           :class="['text-sm card bg-white/10 pr-12 px-5 rounded-2xl border shadow', isActive? 'border-sky-500 shadow-sky-500 pt-5 pb-1' : 'border-transparent py-3']">
    <component :is="$attrs.icon" class="h-3.5 absolute top-1/2 -translate-y-1/2 right-5 opacity-60 pointer-events-none" />
    <label :class="['absolute right-12 pointer-events-none', isActive? 'top-1.5 text-xs opacity-60' : 'top-1/2 text-sm -translate-y-1/2 opacity-80']">{{ $attrs.label }}</label>
  </div>
</template>

<style scoped>

</style>