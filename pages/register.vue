<script setup>
const email = ref('')
const name = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const isProcessing = ref(false)
const disableStatus = computed(() => isProcessing.value || Object.values(inputsError.value).some(i => i === ''))
const inputsError = ref({
  email: '',
  name: '',
  phone: '',
  password: '',
  confirmPassword: ''
})
watch(email, () => inputsError.value.email = validate('ایمیل', email.value, 'unload|email'))
watch(name, () =>  inputsError.value.name = validate('نام مستعار', name.value, 'unload|min:3|max:40'))
watch(phone, () => inputsError.value.phone = validate('شماره همراه', phone.value, 'unload|phone'))
const checkConfirmPassword = () => inputsError.value.confirmPassword = validate('تایید رمز عبور', confirmPassword.value, {unload: 0, same: ['رمز عبور', password.value]})
watch(password, () => {
  inputsError.value.password = validate('رمز عبور', password.value, 'unload|min:8|max:40')
  checkConfirmPassword()
})
watch(confirmPassword, checkConfirmPassword)



const register = () => {
  isProcessing.value = true
  setTimeout(()=>{
    if (Object.values(inputsError.value).some(i => i !== null)) {
      useCompactAlertError('register-request', Object.values(inputsError.value).find(x => x?.length))
    }
    else
      useCompactAlertSuccess('register-request', 'شما با موفقیت ثبت نام شدید.')
    isProcessing.value = false
  }, 2000)
}
</script>

<template>
  <div class="card">
    <div class="container mt-24 mb-36">
      <div class="w-80 max-w-full mx-auto">
        <h2 class="card text-3xl font-bold mb-7 text-center">ایجاد حساب کاربری </h2>
        <div class="card flex flex-col gap-5">
          <MainFormControl v-model="name" type="text" label="نام مستعار" icon="IconsUser" :status="inputsError.name" />
          <MainFormControl v-model="email" dir="ltr" type="email" label="ایمیل" icon="IconsMail" :status="inputsError.email" />
          <MainFormControl v-model="phone" dir="ltr" type="tel" label="شماره همراه" icon="IconsTelephone" :status="inputsError.phone" />
          <MainFormControl v-model="password" dir="ltr" type="password" label="رمز عبور" icon="IconsLock" :status="inputsError.password" />
          <MainFormControl v-model="confirmPassword" dir="ltr" type="password" label="تایید رمز عبور" icon="IconsLock" :status="inputsError.confirmPassword" />
          <div class="card mt-3 grid grid-cols-2 gap-4 xs:grid-cols-1">
            <button @click.prevent="navigateTo('/login')" class="rounded-full bg-white/10 hover:bg-white/20 shadow py-2.5 px-4">ورود به پنل</button>
            <button :disabled="disableStatus" @click.prevent="register()" class="xs:-order-1 disabled:opacity-80 rounded-full bg-sky-600 disabled:bg-sky-700 hover:bg-sky-700 shadow shadow-sky-600/30 py-2.5 px-4">
              <IconsSpin v-if="isProcessing" class="h-5" />
              <span v-else>ایجاد حساب</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>