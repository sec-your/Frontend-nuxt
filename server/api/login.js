export default defineEventHandler(async (event) => {
    const requestBody = await readBody(event)
    if( requestBody['email'] == 'vesta28@example.org') 
        return {
            status: 'ok',
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
            message: 'اطلاعات وارد شده اشتباه می باشد.'
        }
    }
})
