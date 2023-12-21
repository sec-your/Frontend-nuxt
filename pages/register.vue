<script setup lang="ts">
const email = ref('')
const name = ref('')
const phone = ref('')
const password = ref('')
const confirmPassword = ref('')
const mailIcon = resolveComponent('IconsMail')
const userIcon = resolveComponent('IconsUser')
const phoneIcon = resolveComponent('IconsTelephone')
const passwordIcon = resolveComponent('IconsLock')
const isProcessing = ref(false)
const register = () => {
  isProcessing.value = true
  setTimeout(()=>isProcessing.value =false, 5000)
}
</script>

<template>
  <div class="card">
    <div class="container my-24">
      <div class="w-80 max-w-full float-right">
        <h2 class="card text-3xl font-bold mb-7">ایجاد حساب کاربری <span class="text-5xl text-sky-600 leading-6">.</span></h2>
        <div class="card flex flex-col gap-5">
          <MainFormControl v-model="name" type="text" label="نام مستعار" :icon="userIcon" />
          <MainFormControl v-model="email" dir="ltr" type="email" label="ایمیل" :icon="mailIcon" />
          <MainFormControl v-model="phone" dir="ltr" type="tel" label="شماره همراه" :icon="phoneIcon" />
          <MainFormControl v-model="password" dir="ltr" type="password" label="رمز عبور" :icon="passwordIcon" />
          <MainFormControl v-model="confirmPassword" dir="ltr" type="password" label="تایید رمز عبور" :icon="passwordIcon" />
          <div class="card mt-3 grid grid-cols-2 gap-4">
            <button @click.prevent="navigateTo('/login')" class="rounded-full bg-white/10 hover:bg-white/20 shadow py-2.5 px-4">ورود به پنل</button>
            <button :disabled="isProcessing" @click.prevent="register()" class="xs:-order-1 disabled:opacity-80 rounded-full bg-sky-600 disabled:bg-sky-700 hover:bg-sky-700 shadow shadow-sky-600/30 py-2.5 px-4">
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