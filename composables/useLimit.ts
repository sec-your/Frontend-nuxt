export const useLimit = (str:string, limit:number = 20, addition:string = ' ...') => {
    if (str.length <= 20) return str
    return str.substring(0,limit) + addition
}