<script setup>
definePageMeta({
  layout: 'panel'
})
const password = ref('')
const newPassword = ref('')
const confirmNewPassword = ref('')
const inputsError = ref({
  password: '',
  newPassword: '',
  confirmNewPassword: ''
})
const isProcessing = ref(false)
const disableStatus = computed(() => isProcessing.value || Object.values(inputsError.value).some(i => i === ''))
const closeIcon = resolveComponent('IconsX')
const checkIcon = resolveComponent('IconsTick')
const passwordCheck = computed(() => {
  return {
    0: newPassword.value.length >= 8,
    1: newPassword.value.match(/[A-Z]/),
    2: newPassword.value.match(/[a-z]/),
    3: newPassword.value.match(/[0-9]/)
  }
})

const checkConfirmPassword = () => inputsError.value.confirmNewPassword = validate('تایید رمز عبور', confirmNewPassword.value, {unload: 0, same: ['رمز عبور جدید', newPassword.value]})
watch(password, () => inputsError.value.password = validate('رمز عبور فعلی', password.value, { unload: 0, min: 8, max: 40 }))
watch(newPassword, () => {
  inputsError.value.newPassword = validate('رمز عبور جدید', newPassword.value, { unload: 0, min: 8, max: 40, regex: '[a-zA-Z0-9]' })
  checkConfirmPassword()
})
watch(confirmNewPassword, checkConfirmPassword)

const changePassword = () => {
  isProcessing.value = true
  setTimeout(()=>{
    if (Object.values(inputsError.value).some(i => i !== null))
      useCompactAlertError('change-password-request', Object.values(inputsError.value).find(i=>i?.length))
    else {
      useCompactAlertSuccess('login-request', 'رمز عبور شما عوض شد.')
    }
    isProcessing.value =false
  }, 2000)
}
</script>

<template>
  <div class="card">
    <div class="flex sm:justify-center">
      <h1 class="page-title">تغییر رمز عبور</h1>
    </div>
    <div class="card grid grid-cols-400-auto gap-10 sm:grid-cols-1 lg:gap-5 sm:gap-10 mt-10">
      <div class="flex flex-col items-end gap-5">
        <PanelFormControl v-model="password" dir="ltr" type="password" label="رمز عبور فعلی" icon="IconsLock" :status="inputsError.password" />
        <PanelFormControl v-model="newPassword" dir="ltr" type="password" label="رمز عبور جدید" icon="IconsLock" :status="inputsError.newPassword" />
        <PanelFormControl v-model="confirmNewPassword" dir="ltr" type="password" label="تکرار رمز عبور جدید" icon="IconsLock" :status="inputsError.confirmNewPassword" />
        <button :disabled="disableStatus" @click.prevent="changePassword()" class="w-36 disabled:opacity-80 text-white rounded-full bg-blue-600 disabled:bg-blue-700 hover:bg-blue-700 shadow-lg shadow-blue-600/30 py-2.5 px-4">
          <IconsSpin v-if="isProcessing" class="h-5" />
          <span v-else>تغییر رمز</span>
        </button>
      </div>
      <div>
        <strong class="card text-lg mb-3">رمز عبور جدید باید:</strong>
        <ul class="space-y-1 text-gray-500">
          <li :class="{ 'text-green-700 dark:text-green-600' : passwordCheck[0] }"><component :is="passwordCheck[0] ? checkIcon : closeIcon" class="w-3 ml-1" /> حداقل 8 کاراکتر باشد</li>
          <li :class="{ 'text-green-700 dark:text-green-600' : passwordCheck[1] }"><component :is="passwordCheck[1] ? checkIcon : closeIcon" class="w-3 ml-1" /> حداقل یک حرف بزرگ وجود داشته باشد</li>
          <li :class="{ 'text-green-700 dark:text-green-600' : passwordCheck[2] }"><component :is="passwordCheck[2] ? checkIcon : closeIcon" class="w-3 ml-1" /> حداقل یک حرف کوچک وجود داشته باشد</li>
          <li :class="{ 'text-green-700 dark:text-green-600' : passwordCheck[3] }"><component :is="passwordCheck[3] ? checkIcon : closeIcon" class="w-3 ml-1" /> حداقل یک عدد وجود داشته باشد</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>