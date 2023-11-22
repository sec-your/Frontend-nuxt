<script setup lang="ts">

import {useEvent} from "~/composables/useEventBus";

definePageMeta({
  validate: async (route) => {
    if (!/^\d+$/.test(route.params.scanid)) return false
    return true
  }
})

const scanDetails = ref({
  status: 'critical'
})

if (scanDetails.value.status.includes('critical')) useEvent('change-body-class', 'red-shadow' )
if (scanDetails.value.status.includes('alarm')) useEvent('change-body-class', 'yellow-shadow' )

const route = useRoute()

</script>

<template>
  <div>

  </div>
</template>

<style scoped>

</style>