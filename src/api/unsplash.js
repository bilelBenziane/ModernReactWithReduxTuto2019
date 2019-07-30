import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID aadfdca470a65a23bdbb289195793993af1d7e2eb348d8ce2161e4e668eaf0bc'
    }
});