<script setup>
definePageMeta({
  layout: 'panel'
})

const userStore = useUserStore()

const avatar = ref(null)
const name = ref(userStore.info.displayName)
const email = userStore.info.email
const phone = ref(userStore.info.phone)
const isCodeSent = ref(true)
const code = ref('')
const avatarPreview = ref('/images/demo/avatar.jpg')

const changeAvatar = ({ target }) => {
  let url = target.value;
  let ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
  if (target?.files[0] && ['png', 'jpeg', 'jpg'].includes(ext)) {
    let reader = new FileReader();
    reader.onload = function (e) {
      let image = new Image()
      image.src = e.target.result
      image.onload = () => {
        if (image.width === 150 && image.height === 150) {
          avatarPreview.value = e.target.result
        } else {
          useAlertError('avatar-change', 'خطا در تغییر آواتار', 'آواتار باید 150 در 150 باشد.')
        }
      }
      image.onerror = () => {
        useAlertError('avatar-change', 'خطا در تغییر آواتار', 'خطایی در تغییر آواتار رخ داد.')
      }
    }
    reader.readAsDataURL(target.files[0]);
  } else {
    useAlertError('avatar-change', 'خطا در تغییر آواتار', 'فرمت آواتار باید png یا jpeg یا jpg باشد.')
  }
}

const inputsError = ref({
  name: '',
  phone: '',
})
const isProcessing = ref(false)
const disableStatus = computed(() => isProcessing.value || Object.values(inputsError.value).some(i => i === ''))

const editProfile = () => {
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
      <h1 class="page-title">ویرایش پروفایل</h1>
    </div>
    <div class="card grid grid-cols-2 gap-20 sm:grid-cols-1 lg:gap-5 sm:gap-10 mt-10">

      <div class="grid grid-cols-[7.5rem_auto] gap-5 items-start">
        <div class="relative rounded-lg shadow overflow-hidden group">
          <img :src="avatarPreview" alt="" class="card" />
          <div class="flex opacity-0 group-hover:opacity-100 w-full h-full absolute left-0 top-0 bg-gray-400/80 dark:bg-gray-600/90 flex-col justify-center items-center gap-2">
            <input @change="changeAvatar" id="profile-avatar" type="file" accept="image/png,image/jpeg,image/jpg" class="hidden">
            <button class="bg-blue-600 text-white hover:bg-blue-700 py-1 px-2 rounded" onclick="document.getElementById('profile-avatar').click()">تغییر آواتار</button>
            <button class="bg-gray-300/80 hover:bg-red-600 hover:text-white text-red-600 py-1 px-2 rounded">حذف آواتار</button>
          </div>
        </div>
        <div class="flex flex-col gap-5 items-end">
          <PanelFormControl v-model="email"
                            type="email"
                            dir="ltr"
                            label="ایمیل"
                            disabled="disabled"
                            icon="IconsMail" />

          <PanelFormControl v-model="name"
                            type="text"
                            label="نام مستعار"
                            icon="IconsUser"
                            :status="inputsError.name" />
          <button :disabled="disableStatus"
                  @click.prevent="editProfile()"
                  class="w-32 disabled:opacity-80 text-white rounded-full bg-blue-600 disabled:bg-blue-700 hover:bg-blue-700 shadow-lg shadow-blue-600/30 py-2.5 px-4">
            <IconsSpin v-if="isProcessing" class="h-5" />
            <span v-else>ذخیره</span>
          </button>
        </div>
      </div>

      <div></div>

      <div class="grid grid-cols-[7.5rem_auto] gap-5 items-start">
        <IconsMessageVerify class="opacity-10" />
        <div class="flex flex-col gap-5 items-end">
          <PanelFormControl v-if="isCodeSent"
                            v-model="code"
                            type="tel"
                            label="کد تایید"
                            icon="IconsListSquare"
                            :status="inputsError.phone" />
          <PanelFormControl v-else
                            v-model="phone"
                            type="tel"
                            label="شماره همراه"
                            icon="IconsTelephone"
                            :status="inputsError.phone" />
          <button :disabled="disableStatus"
                  @click.prevent="editProfile()"
                  class="w-32 disabled:opacity-80 text-white rounded-full bg-blue-600 disabled:bg-blue-700 hover:bg-blue-700 shadow-lg shadow-blue-600/30 py-2.5 px-4">
            <IconsSpin v-if="isProcessing" class="h-5" />
            <span v-else>{{ isCodeSent? 'فعال سازی' : 'ارسال کد' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>