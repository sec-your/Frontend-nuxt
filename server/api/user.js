export default defineEventHandler((event) => {
    if (getHeaders(event).authorization)
        return {
            id: 1,
            avatar: '/images/demo/avatar.jpg',
            email: 'info@aliranjbar.ir',
            phone: '09145296650',
            displayName: 'علی رنجبر جلودار',
            token: 'this-is-fake-token',
            isPhoneVerified: false,
            money: 52_500_000,
            type: 'pro'
        }
    else {
        setResponseStatus(event, 401)
        return {
            message: 'توکن منقضی شده است.'
        }
    }
})