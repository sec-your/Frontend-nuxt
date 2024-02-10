<script setup>

definePageMeta({
  layout: 'panel'
})
let isProccesing = ref(false)

const title = ref('')
const message = ref('')
const inputsError = ref({
    title: '',
  message: '',
})
</script>

<template>
  <div class="card">
    <div class="card flex justify-between items-center xs:flex-col gap-5">
      <h1 class="page-title">تیکت جدید</h1>
      <button @click="navigateTo('/panel/tickets')" class="mb-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg pt-1.5 shadow-lg shadow-blue-500/40 hover:shadow-blue-600/40 pb-1 px-3 text-base flex items-center gap-2"><IconsTicket class="h-3.5" />تیکت ها</button>
    </div>
    <div class="card p-5 bg-white shadow mt-8 text-sm">
        <div class="card grid grid-cols-2 gap-5 mb-5">
            <PanelFormControl2 v-model="title"
                            type="text"
                            label="عنوان تیکت"
                            icon="IconsEditPen" />
            <select class="card rounded bg-gray-50 border border-gray-200 dark:bg-gray-600 dark:border-gray-500 p-3" >
                <option>مشکلات فنی</option>
            </select>
        </div>
        <PanelFormControlTextarea2 v-model="message"
                            placeholder="توضیحات شما..."
                            icon="IconsEditPen" />
        <div class="card mt-5 flex items-end gap-4 md:flex-wrap md:justify-between">
            <div class="flex items-center gap-2.5 ml-auto md:card md:justify-center">
                <div :class="['relative bg-white flex items-center gap-2.5 border hover:border-blue-500 dark:hover:border-blue-400 px-3 py-1.5 rounded-lg', replyAttachment? 'border-blue-300' : 'border-gray-200 dark:border-gray-500']">
                    <IconsUpload class="h-5 text-blue-500 dark:text-blue-400" />
                    <div class="flex flex-col gap-px">
                        <span>فایل ضمیمه</span>
                        <span class="text-xs max-w-32 ml:max-w-24 truncate text-gray-500 dark:text-gray-300">{{ replyAttachment? replyAttachment.name : 'برای انتخاب کلیک کنید' }}</span>
                    </div>
                    <input type="file" @change="attachmentChange" accept="application/pdf, image/*, .rarو .zip" class="p-0 m-0 cursor-pointer absolute inset-0 opacity-0 w-full h-full" />
                </div>
                <IconsTrash v-if="replyAttachment" @click="replyAttachment = null" class="h-4 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500" />
            </div>
            <button @click="sendMessage()" :disabled="isSendProcessing || isCloseProcessing" class="xs:justify-center xs:card pt-2 pb-2.5 px-3.5 flex gap-2.5 items-center bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-500 disabled:hover:bg-blue-500 dark:disabled:hover:bg-blue-600 text-white rounded-lg"><component :is="isSendProcessing? 'IconsSpin' : 'IconsMessagePlus'" :class="{'h-4': true, 'mt-1': isSendProcessing}" /> {{ isSendProcessing? '' : 'ارسال پاسخ'}}</button>
        </div>
    </div>
  </div>
</template>

<style scoped>
</style>
