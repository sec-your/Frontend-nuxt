import axios from 'axios';
import { useUserStore } from '@/stores/user';

export const useUserApiFetch = () => {
    const getUserStore = useUserStore()
    return axios.create({
        baseURL: "/api/",
        headers: {
            'Cache-Control': 'no-cache',
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Accept': 'application/json',
            'Authorization' : 'Bearer ' + getUserStore.info.token
        }
    });
}