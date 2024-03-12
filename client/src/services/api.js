import axios from 'axios';

const API_URL = 'http://localhost:8080';
export const SaveJob = async(payload) => {
    try {
        return await axios.post(`${API_URL}/post`,payload);
    }
    catch (error){
        console.log("not found");
    }
}
export const getAllPosts = async(payload) => {
    try {
        return await axios.get(`${API_URL}/posts`,payload);
    }
    catch (error){
        console.log("not found");
    }
}