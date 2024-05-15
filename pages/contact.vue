<script setup>
useHead({
    title: 'تماس با ما'
})

const config = useRuntimeConfig()

const email = ref('')
const name = ref('')
const title = ref('')
const message = ref('')
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
watch(title, () => inputsError.value.title = validate('عنوان', title.value, 'unload|min:10|max:160'))
watch(message, () => inputsError.value.message = validate('پیام', message.value, 'unload|min:20|max:2000'))
const sendMessage = () => {

}
</script>

<template>
    <div class="container mt-28 relative grid grid-cols-2 gap-16">
        <div>
            <div class="text-gray-200">
                <h1 class="card text-2xl text-white font-bold">در هر لحظه پاسخگوی شما هستیم!</h1>
                <span class="card mt-4">تیم سکیور 24 ساعت 7 روز هفته در خدمت شما عزیزان می باشد</span>
                <div class="card mt-6 px-3.5 py-2 rounded-xl bg-gradient-to-l from-white/10 to-white/0 flex justify-between items-center">
                    <span>ایمیل :</span>
                    <div dir="ltr" class="flex items-center gap-3">
                        <IconsEnvelopeUnread class="w-4 opacity-50" />
                        <a class="mt-0.5 text-lg tracking-wider hover:text-sky-200" dir="ltr" :href="`mailto:support@${config.public.SITE_URL}`">{{ `support@${config.public.SITE_URL}` }}</a>
                    </div>
                </div>
                <div class="card mt-3 px-3.5 py-2 rounded-xl bg-gradient-to-l from-white/10 to-white/0 flex justify-between items-center">
                    <span>شماره تماس :</span>
                    <div dir="ltr" class="flex items-center gap-3">
                        <IconsTelephone class="w-4 opacity-50" />
                        <a class="mt-0.5 text-lg tracking-wider hover:text-sky-200" dir="ltr" href="tel:09123456789">0912 345 6789</a>
                    </div>
                </div>
                <div class="card mt-3 px-3.5 py-2 rounded-xl bg-gradient-to-l from-white/10 to-white/0 flex justify-between items-center">
                    <span>آیدی تلگرام :</span>
                    <div dir="ltr" class="flex items-center gap-3">
                        <IconsTelegram class="w-4 opacity-50" />
                        <a class="mt-0.5 text-lg tracking-wider hover:text-sky-200" target="_blank" href="https://t.me/secyour">@secyour</a>
                    </div>
                </div>
            </div>
            <p></p>
        </div>
        <div>
            <div class="card grid grid-cols-2 gap-4">
                <div class="col-span-full px-3.5 py-3 rounded-xl bg-gradient-to-l font-bold from-white/10 to-white/0">ارسال پیام به پشتیبانی</div>
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
    </div>
</template>

<style lang="postcss" scoped>
.container::before {
    content: "";
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ffffff80;
    position: absolute;
    top: 20%;
    left: 30%;
    z-index: -1;
    filter: blur(200px);
}
</style>