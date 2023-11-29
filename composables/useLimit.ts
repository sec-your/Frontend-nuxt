export const useLimit = (str:string, limit:number = 20, addition:string = ' ...') => {
    return str.length <= 20 ? str : str.substring(0, limit) + addition;
}