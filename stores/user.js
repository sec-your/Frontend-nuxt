import { defineStore } from "pinia";

const defaultUserObject = {
    id: 0,
    token: '',
    email: '',
    phone: '',
    displayName: '',
    isPhoneVerified: false,
    type: 'free',
    avatar: '',
    money: 0
}

export const useUserStore = defineStore('user', ()=>{
    
    // Base Information
    const info = ref({...defaultUserObject})

    // Logout request
    const logout = async () => {
        if (!info.value?.token) return false
        await useUserApiFetch().post('/logout')
        info.value = {...defaultUserObject}
        useLocalStorage.removeItem('user-token')
    }


    // Login to get data and token
    const login = async (email, password) => {
        let result = null
        await useApiFetch().post('/login', {email, password}).then(({ data }) => {
            info.value = {...data}
            useLocalStorage.setItem('user-token', data.token)
            result = { status: 'ok' }
        }).catch((error) => {
            useLocalStorage.removeItem('user-token')
            result = { status: 'error', message: getErrorMessage(error) }
        })
        return result
    }


    // Get user from token
    const getUser = async (token) => {
        await useApiFetch().post(`/user`, {}, {
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        }).then(({ data }) => {
            info.value = {token, ...data}
            useLocalStorage.setItem('user-token', token)
        }).catch((error) => {
            useLocalStorage.removeItem('user-token')
            if(toast) useAlertError('get-user-from-token', getErrorMessage(error), { time: 4 })
        })
    }


    const isLoggedIn = computed(() => info.value?.id && info.value?.email && info.value?.token)

    return { info, isLoggedIn, getUser, login, logout }
});