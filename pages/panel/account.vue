<script setup>
definePageMeta({
  layout: 'panel'
})

const tab = ref('user')

const tabResolves = shallowRef({
        'organization-emails' : resolveComponent('PanelTabsAccountOrganizationEmails'),
        'notifications' : resolveComponent('PanelTabsAccountNotifications'),
        'security' : resolveComponent('PanelTabsAccountSecuirty'),
        'subscription-wallet' : resolveComponent('PanelTabsAccountSubscriptionWallet'),
        'user': resolveComponent('PanelTabsAccountUser')
    })

const tabCompunent = computed(() => tabResolves.value[tab.value])
</script>

<template>
    <div class="card">
        <div class="card flex items-center justify-between">
            <h1 class="page-title">حساب کاربری</h1>
        </div>

        <div class="card flex items-end xl:grid xl:grid-cols-8 xs:grid-cols-1 xl:text-center border-b-2 xl:border-b-0 border-gray-300 dark:border-gray-500 my-10">
            <div @click="tab = 'user'" :class="{'tab xl:col-span-3' : true, 'active' : tab == 'user'}">مشخصات کاربری</div>
            <div @click="tab = 'organization-emails'" :class="{'tab xl:col-span-3' : true, 'active' : tab == 'organization-emails'}">ایمیل های سازمانی</div>
            <div @click="tab = 'notifications'" :class="{'tab xl:col-span-2' : true, 'active' : tab == 'notifications'}">اعلان ها</div>
            <div @click="tab = 'security'" :class="{'tab xl:col-span-4' : true, 'active' : tab == 'security'}">رمز عبور و امنیت</div>
            <div @click="tab = 'subscription-wallet'" :class="{'tab xl:col-span-4' : true, 'active' : tab == 'subscription-wallet'}">اشتراک / کیف پول</div>
        </div>

        <component class="card" :is="tabCompunent" />

    </div>
</template>

<style lang="postcss" scoped>
.tab {
    @apply py-2 px-4 bg-gray-50 dark:bg-gray-800 -mb-0.5 xl:mb-0 border border-gray-100 dark:border-gray-700 border-b-2 border-b-gray-300 dark:border-b-gray-600 cursor-pointer
}
.tab:hover {
    @apply bg-white dark:bg-gray-700
}
.tab.active {
    @apply border-b-blue-600 bg-white dark:bg-gray-700
}
</style>