export default defineEventHandler(async (event) => {
    const requestBody = await readBody(event)
    if( requestBody['email'] == 'vesta28@example.org') 
        return {
            status: 'ok',
            id: 10,
            avatar: '/images/demo/avatar.jpg',
            email: 'vesta28@example.org',
            phone: '09145296650',
            displayName: 'علی رنجبر',
            token: 'xd6sf54s1d49x8cv',
            isPhoneVerified: false,
            money: 95_000,
            type: 'pro'
        }
    else {
        setResponseStatus(event, 401)
        return {
            message: 'اطلاعات وارد شده اشتباه می باشد.'
        }
    }
})
