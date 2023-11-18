import { defineStore } from "pinia";

export const useUserStore = defineStore('user', ()=>{
    const info = ref({
        id: 0,
        token: '',
        username: '',
        displayName: '',
        type: ''
    })
    const getUser = async (token) => {
        await useApiFetch().post('user', {}, {
            headers: {
                'Authorization' : 'Bearer ' + token
            }
        }).then(({ data }) => {
            info.value = {token, ...data}
            localStorage.setItem('storedToken', token)
        }).catch(error => {
            localStorage.removeItem('storedToken')
        })
    }
    const isLoggedIn = computed(() => info.id && info.username != "")
    return { info, isLoggedIn, getUser }
});
