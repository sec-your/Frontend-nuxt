<template>
    <div class="grid grid-cols-2 gap-16 sm:grid-cols-1 xl:gap-8 lg:gap-4 ml:grid-cols-1 ml:gap-16">
        <div>
            <h4 class="font-bold text-lg">
                <IconsWallet class="inline-block h-5 mb-1 align-middle ml-2" /> کیف پول
            </h4>
            <div
                class="flex justify-between items-center gap-5 mt-3 mb-10 bg-gradient-to-l from-white to-white/0 shadow-sm rounded-xl px-3 py-2">
                <div>
                    <span class="font-bold text-blue-700 ml-1 tracking-wider">{{ isWalletLoading? '-' :
                        useNumberFormat(userStore.info.money) }}</span> تومان
                </div>
                <button :disabled="isWalletLoading" @click.prevent="refreshWallet()"
                    class="disabled:opacity-80 cursor-pointer disabled:cursor-auto float-left hover:text-blue-600 disabled:hover:text-inherit rounded-full bg-white w-8 h-8 grid place-items-center shadow-lg">
                    <IconsRefresh :class="{'h-4': true, 'animate-spin': isWalletLoading}" />
                </button>
            </div>

            <div class="card grid grid-cols-2 grid-rows-2 gap-4 mb-5">
                <div v-for="size in [100000, 250000, 500000, 1000000]" @click="increaseSize = size"
                    :class="['bg-white rounded-md shadow-sm pt-2 pb-1.5 cursor-pointer px-3 text-center border', increaseSize == size? 'border-blue-600 text-blue-600':'border-gray-200']">
                    <span class="ml-1">{{ useNumberFormat(size) }}</span> تومان</div>
            </div>


            <div class="card flex gap-3 items-center">
                <input placeholder="مبلغ دلخواه (تومان)" v-model="increaseSize" type="number"
                    :class="['tracking-widest flex-shrink w-full disabled:opacity-70 text-sm text-center bg-gray-50 dark:bg-gray-700 px-5 rounded-xl border shadow-sm py-2', codeError && codeError.length ? 'border-red-600/70 shadow-red-600/50' : 'focus:border-blue-500/70 focus:shadow-blue-500/50 border-transparent shadow-gray-400']">
                <button :disabled="isWalletLoading || isWalletProcessing" @click.prevent="increaseMoney()"
                    class="text-nowrap disabled:opacity-80 text-white xs:mr-auto rounded-xl bg-blue-600 disabled:bg-blue-700 hover:bg-blue-700 shadow-lg shadow-blue-600/30 py-2.5 px-4">
                    <IconsSpin v-if="isWalletProcessing" class="h-5" />
                    <span v-else>افزایش موجودی</span>
                </button>
            </div>

        </div>
    </div>
</template>

<script setup>
const userStore = useUserStore()
const runtimeConfig = useRuntimeConfig()

const isWalletLoading = ref(false)
const isWalletProcessing = ref(false)
const increaseSize = ref('')
const increaseMoney = async () => {
    if (isWalletProcessing.value || isWalletLoading.value) return false
    isWalletProcessing.value = true
    await useUserApiFetch().post(runtimeConfig.public.API_INCREASE_MONEY, { money: increaseSize.value })
        .then(async ({ data }) => await navigateTo(data.redirect, { external: true }))
        .catch((error) => useAlertError('increase-money-request', getErrorMessage(error), { time: 5 }))
    isWalletProcessing.value = false
}
const refreshWallet = async () => {
    if (isWalletProcessing.value || isWalletLoading.value) return false
    isWalletLoading.value = true
    await userStore.refreshProperty('money')
    isWalletLoading.value = false
}
</script>

<style>

</style>