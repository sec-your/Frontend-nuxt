export default defineNuxtPlugin(async (nuxtApp) => {
    const userStore = useUserStore()
    if (!userStore.isLoggedIn) {
        let token = JSON.parse(useLocalStorage.getItem('user-token'))
        if (!!token) {
            await userStore.getUser(token)
        }
    }
})
