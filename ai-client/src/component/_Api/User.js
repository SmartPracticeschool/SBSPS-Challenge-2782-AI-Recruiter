import axios from 'axios';

export const UploadResume = (file,id)=>{
        return axios.post(`http://localhost:5000/api/user/${id}/resume`, file)
}

export const UserRegister = (data)=>{
       return axios.post('http://localhost:5000/api/user/register', data)
}

export const UserLogin = (data)=>{
    return axios.post('/user/login', data)
}