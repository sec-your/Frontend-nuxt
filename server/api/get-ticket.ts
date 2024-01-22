export default defineEventHandler(async (event) => {
  return {
    status: 'ok',
    title: 'اسکن نکردن سایت در پنل کاربری',
    subject: 'مشکل فنی',
    updatedDate: '10 دقیقه قبل',
    createdDate: '26 شهریور 1402 - 10:23',
    statusCode: 1, // 0: Closed, 1: pending..., 2: answered
  }
})
