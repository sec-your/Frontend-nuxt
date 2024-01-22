import { useUserStore } from '@/stores/user';
export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore()
    return 
    if (to.meta.layout === 'panel' && !userStore.isLoggedIn) return navigateTo('/login')
})
