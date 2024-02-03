export default defineEventHandler((event) => {
    if (getHeaders(event).authorization)
        return {
            money: 15_000
        }
    else {
        setResponseStatus(event, 401)
        return {
            message: 'خطایی رخ داد.'
        }
    }
})