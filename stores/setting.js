import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', () => {

    const runtimeConfig = useRuntimeConfig()

    const defaultSettings = () => {
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
                        walletChange: false
                    }
            }
        }
    }
    
    const settings = ref({...defaultSettings()})

    const set = (newSettings) => {
        settings.value = {...settings.value, ...newSettings}
    }

    const get = async () => {
        await useUserApiFetch().get(runtimeConfig.public.API_GET_SETTINGS).then(({ data }) => {
            settings.value = data
        }).catch((error) => {
            useAlertError('get-settings', getErrorMessage(error), { time: 4 })
        })
    }

    const update = async (newSettings) => {
        let result = null
        await useUserApiFetch().patch(runtimeConfig.public.API_UPDATE_SETTINGS, newSettings).then(({ data }) => {
            set(newSettings)
            result = { status: 'ok' }
        }).catch((error) => {
            result = { status: 'error', message: getErrorMessage(error) }
        })
        return result
    }

    return { settings, defaultSettings, get, update, set }

})
