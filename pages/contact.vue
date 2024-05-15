<script setup>

useHead({
    title: 'تماس با ما'
})

const route = useRoute()
const userStore = useUserStore()

const email = ref('')
const name = ref('')
const title = ref('')
const message = ref('')
const acceptTerms = ref(false)
const isProcessing = ref(false)
const disableStatus = computed(() => isProcessing.value || Object.values(inputsError.value).some(i => i === ''))
const inputsError = ref({
    email: '',
    name: '',
    title: '',
    message: ''
})
watch(email, () => inputsError.value.email = validate('ایمیل', email.value, 'unload|email'))
watch(name, () => inputsError.value.name = validate('نام مستعار', name.value, 'unload|min:3|max:40'))
watch(title, () => inputsError.value.title = validate('شماره همراه', title.value, 'unload'))
watch(message, () => inputsError.value.message = validate('شماره همراه', message.value, 'unload'))
const sendMessage = () => {

}
</script>

<template>
    <div class="container mt-28 grid grid-cols-2 gap-16">
        <div class="col-span-full rounded-xl border-2 border-gray-700 p-5">
            هر پیام ارسالی مورد بررسی کارشناسان قرار می گیرند و سپس پاسخ ایمیل می شود ممکن است پاسخ ارسالی در پوشه اسپم قرار بگیرد
        </div>
        <div>
            <div class="card grid grid-cols-2 gap-4">
                <MainFormControl v-model="name" type="text" label="نام و نام خانوادگی" icon="IconsUser"
                    :status="inputsError.name" />
                <MainFormControl v-model="email" dir="ltr" type="email" label="ایمیل" icon="IconsMail"
                    :status="inputsError.email" />
                    <div class="col-span-full">
                    <MainFormControl v-model="title" type="text" label="عنوان" icon="IconsEditPen"
                    :status="inputsError.title" />
                </div>
                <div class="col-span-full">
                    <MainFormTextarea v-model="message" placeholder="پیام شما" icon="IconsTelegram"
                    :status="inputsError.message" />
                </div>
                <div class="col-span-full">
                    <button type="submit" :disabled="disableStatus" @click.prevent="sendMessage()"
                        class="float-left disabled:opacity-80 rounded-full bg-sky-700 disabled:bg-sky-700 hover:bg-sky-800 shadow shadow-sky-700/30 py-2.5 px-10">
                        <IconsSpin v-if="isProcessing" class="h-5" />
                        <span v-else>ارسال پیام</span>
                    </button>
                </div>
            </div>
        </div>
        <div>
            آدرس
        </div>
    </div>
</template>

<style lang="postcss" scoped></style>