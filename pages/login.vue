<script setup lang="ts">
const email = ref('')
const password = ref('')
const mailIcon = resolveComponent('IconsMail')
const passwordIcon = resolveComponent('IconsLock')
const isProcessing = ref(false)
const login = () => {
  isProcessing.value = true
  setTimeout(()=>{
    useCompactAlertError('login-request', 'نام کاربری یا رمز عبور اشتباه می باشد!')
    isProcessing.value =false
  }, 2000)
}
</script>

<template>
  <div class="card">
    <div class="container my-24">
      <div class="w-80 max-w-full float-right">
        <h2 class="card text-3xl font-bold mb-7">ورود به حساب <span class="text-5xl text-sky-600 leading-6">.</span></h2>
        <div class="card flex flex-col gap-5">
          <MainFormControl v-model="email" dir="ltr" type="email" label="ایمیل" :icon="mailIcon" />
          <MainFormControl v-model="password" dir="ltr" type="password" label="رمز عبور" :icon="passwordIcon" />
          <div class="card mt-3 grid grid-cols-2 gap-4 xs:grid-cols-1">
            <button @click.prevent="navigateTo('/register')" class="rounded-full bg-white/10 hover:bg-white/20 shadow py-2.5 px-4">ایجاد حساب</button>
            <button :disabled="isProcessing" @click.prevent="login()" class="xs:-order-1 disabled:opacity-80 rounded-full bg-sky-600 disabled:bg-sky-700 hover:bg-sky-700 shadow shadow-sky-600/30 py-2.5 px-4">
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