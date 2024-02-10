export default defineNuxtPlugin((nuxtApp) => {
    const userStore = useUserStore()
    if (!userStore.isLoggedIn) {
        let token = useLocalStorage.getItem('user-token')
        if (!!token) userStore.getUser(token)
    }
})
