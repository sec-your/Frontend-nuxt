import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '<YourSiteKey>',
        loaderOptions: {
            autoHideBadge: true,
            explicitRenderParameters: {
                badge: 'bottomright',
            },
        },
    });
});