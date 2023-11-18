import axios from 'axios';


export const useApiFetch = () => {
  return axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Accept': 'application/json'
    }
  });
}