export default defineEventHandler((event) => {
    return getHeaders(event).authorization? {
        id: 10,
        username: 'alishco',
        displayName: 'علی رنجبر',
        type: 'pro'
    } : setResponseStatus(event, 400, 'توکن منقضی شده است')
})