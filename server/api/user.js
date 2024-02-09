export default defineEventHandler((event) => {
    if (getHeaders(event).authorization)
        return {
            id: 10,
            email: 'vesta28@example.org',
            phone: '09145296650',
            avatar: '/images/demo/avatar.jpg',
            displayName: 'علی رنجبر',
            isPhoneVerified: false,
            token: 'xd6sf54s1d49x8cv',
            money: 95_000,
            type: 'pro'
        }
    else {
        setResponseStatus(event, 401)
        return {
            message: 'توکن منقضی شده است.'
        }
    }
})