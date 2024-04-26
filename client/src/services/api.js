import axios from 'axios';

const API_URL = 'http://localhost:8000';  
export const uploadFile = async(data)=> {
    try {
        let response = await axios.post(`https://file-sharing-brown.vercel.app//upload`,data);
        return response.data;
    } catch (error) {
        console.error('Error while calling api', error.message);
    }
}
