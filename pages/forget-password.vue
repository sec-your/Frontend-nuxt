<script setup>
definePageMeta({
    middleware: 'guest'
})

useHead({
    title: 'فراموشی رمز عبور'
})

const email = ref('')
const inputsError = ref({
  email: ''
})
const isProcessing = ref(false)
const disableStatus = computed(() => isProcessing.value || Object.values(inputsError.value).some(i => i === ''))

watch(email, () => inputsError.value.email = validate('ایمیل', email.value, 'unload|email'))


const forget = () => {
  isProcessing.value = true
  setTimeout(()=>{
    if (Object.values(inputsError.value).some(i => i !== null))
      useCompactAlertError('forget-request', Object.values(inputsError.value).find(i=>i?.length))
    else {
      useCompactAlertSuccess('forget-request', 'ایمیل بازیابی با موفقیت ارسال شد.')
    }
    isProcessing.value =false
  }, 2000)
}
</script>

<template>
  <div class="card">
    <div class="container mt-24 mb-36">
      <div class="w-80 max-w-full mx-auto">
        <h2 class="card text-3xl font-bold mb-7 text-center">فراموشی رمز عبور</h2>
        <div class="card flex flex-col gap-5">
          <MainFormControl v-model="email" dir="ltr" type="email" label="ایمیل" icon="IconsMail" :status="inputsError.email" />
          <div class="card grid grid-cols-2 gap-4 xs:grid-cols-1">
            <button @click.prevent="navigateTo('/login')" class="rounded-full bg-white/10 hover:bg-white/20 shadow py-2.5 px-4">ورود به پنل</button>
            <button :disabled="disableStatus" @click.prevent="forget()" class="xs:-order-1 disabled:opacity-80 rounded-full bg-sky-600 disabled:bg-sky-700 hover:bg-sky-700 shadow shadow-sky-600/30 py-2.5 px-4">
              <IconsSpin v-if="isProcessing" class="h-5" />
              <span v-else>ارسال لینک</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>