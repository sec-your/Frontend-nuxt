// @ts-ignore
export const useHideAlert = () => useEvent('hide-alert')
// @ts-ignore
export const useAlert = (message : string, options : object = {}) => useEvent('show-alert', { message, ...options, type: 'alert' })
// @ts-ignore
export const useAlertError = (message : string, options : object = {}) => useEvent('show-alert', { message, ...options, type: 'error' })
// @ts-ignore
export const useAlertSuccess = (message : string, options : object = {}) => useEvent('show-alert', { message, ...options, type: 'success' })
// @ts-ignore
export const useAlertInfo = (message : string, options : object = {}) => useEvent('show-alert', { message, ...options, type: 'info' })
// @ts-ignore
export const useAlertWarn = (message : string, options : object = {}) => useEvent('show-alert', { message, ...options, type: 'warn' })
// @ts-ignore
export const useUpdateAlert = (message : string, options : object = {}) => useEvent('update-alert', { message, ...options })
