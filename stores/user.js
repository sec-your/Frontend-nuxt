import { defineStore } from "pinia";

export const useUserStore = defineStore('user', ()=>{
    const info = ref({
        id: 1,
        token: 'dsfdabebr6456132',
        email: 'info@aliranjbar.ir',
        phone: '09145296650',
        displayName: 'علی رنجبر جلودار',
        isPhoneVerified: true,
        type: 'free'
    })
    const getUser = async (token, toast = false) => {
        await useApiFetch().post('/user', {}, {
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        }).then(({ data }) => {
            info.value = {token, ...data}
            localStorage.setItem('storedToken', token)
            if(toast) useAlertSuccess('با موفقیت وارد شدید', { time: 4 })
        }).catch(error => {
            localStorage.removeItem('storedToken')
            if(toast) useAlertError(error.message, { time: 4 })
        })
    }
    const isLoggedIn = computed(() => info.value?.id && info.value?.username && info.value?.username.length >= 3)
    return { info, isLoggedIn, getUser }
});
