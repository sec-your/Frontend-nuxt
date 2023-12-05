import axios from 'axios';


export const useApiFetch = () => {
  return axios.create({
    baseURL: "/api/",
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Accept': 'application/json'
    }
  });
}