export default defineEventHandler(async (event) => {
    const requestBody = await readBody(event);
    if (requestBody["email"] == "info@aliranjbar.ir")
        return {
            status: "ok",
            user: {
                id: 1,
                avatar: "/images/demo/avatar.jpg",
                email: "info@aliranjbar.ir",
                phone: "09145296650",
                displayName: "علی رنجبر جلودار",
                token: "this-is-fake-token",
                isPhoneVerified: false,
                isEmailVerified: false,
                money: 52_500_000,
                type: "pro",
            },
            settings: {
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
                }
            }
        }
    else {
        setResponseStatus(event, 401);
        return {
            message: "اطلاعات وارد شده اشتباه می باشد.",
        };
    }
});
