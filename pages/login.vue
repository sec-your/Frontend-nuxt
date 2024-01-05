<script setup>
const email = ref('')
const password = ref('')
const inputsError = ref({
  email: '',
  password: ''
})
const isProcessing = ref(false)
const disableStatus = computed(() => isProcessing.value || Object.values(inputsError.value).some(i => i === ''))

watch(email, () => inputsError.value.email = validate('ایمیل', email.value, 'unload|email'))
watch(password,() => inputsError.value.password = validate('رمز عبور', password.value, 'unload|min:8|max:40'))


const login = () => {
  isProcessing.value = true
  setTimeout(()=>{
    if (Object.values(inputsError.value).some(i => i !== null))
      useCompactAlertError('login-request', Object.values(inputsError.value).find(i=>i?.length))
    else {
      useCompactAlertSuccess('login-request', 'شما با موفقیت وارد شدید.')
      return navigateTo('/panel')
    }
    isProcessing.value =false
  }, 2000)
}
</script>

<template>
  <div class="card">
    <div class="container mt-24 mb-36">
      <div class="w-80 max-w-full mx-auto">
        <h2 class="card text-3xl font-bold mb-7 text-center">ورود به حساب </h2>
        <div class="card flex flex-col gap-5">
          <MainFormControl v-model="email" dir="ltr" type="email" label="ایمیل" icon="IconsMail" :status="inputsError.email" />
          <MainFormControl v-model="password" dir="ltr" type="password" label="رمز عبور" icon="IconsLock" :status="inputsError.password" />
          <div class="card mt-3 grid grid-cols-2 gap-4 xs:grid-cols-1">
            <button @click.prevent="navigateTo('/register')" class="rounded-full bg-white/10 hover:bg-white/20 shadow py-2.5 px-4">ایجاد حساب</button>
            <button :disabled="disableStatus" @click.prevent="login()" class="xs:-order-1 disabled:opacity-80 rounded-full bg-sky-600 disabled:bg-sky-700 hover:bg-sky-700 shadow shadow-sky-600/30 py-2.5 px-4">
              <IconsSpin v-if="isProcessing" class="h-5" />
              <span v-else>ورود به پنل</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>