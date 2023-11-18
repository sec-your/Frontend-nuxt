<script setup lang="ts">
const spin = resolveComponent('IconsSpin')
</script>

<template>
  <div>
    <component :is="spin" />
    Hello world! /
    <button @click="useAlert('سلام')">Alert</button> /
    <button @click="useAlertSuccess('سلام')">Success</button> /
    <button @click="useAlertError('سلام')">Error</button> /
    <button @click="useAlertWarn('سلام')">Warn</button> /
    <button @click="useAlertInfo('سلام')">Info</button> /
    <button @click="useUpdateAlert('خداحافظ', { icon: '...', time: 0 })">Update</button> /
  </div>
</template>

<style scoped>

</style>