export const useLocalStorage = window && 'localStorage' in window? window.localStorage : {
    removeItem: (a) => {},
    getItem: (a) => {},
    setItem: (a,b) => {}
}
