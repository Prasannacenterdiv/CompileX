import axios from 'axios';

const axiosClient=axios.create({
    baseURL:"https://compilex-backend-ae28.onrender.com",
    headers:{
        'Content-Type':'application/json'
    }
})

export default axiosClient;
