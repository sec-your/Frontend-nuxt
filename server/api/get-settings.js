export default defineEventHandler(async (event) => {
  return {
      notifications: {
        email: {
            loginReport: true,
            scanResult: true,
            ticketStatusChange: false,
            walletChange: false
        },
        sms: {
            ticketStatusChange: true,
            walletChange: true
        }
      },
  };
})
