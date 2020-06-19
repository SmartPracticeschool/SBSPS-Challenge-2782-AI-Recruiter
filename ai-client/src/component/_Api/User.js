import axios from 'axios';

export const UploadResume = (file)=>{
        return axios.post('http://localhost:5000/api/user/5eec8f46021a3cb1a1db1c86/resume', file)
}

export const UserRegister = (data)=>{
       return axios.post('/user/register', data)
}

export const UserLogin = (data)=>{
    return axios.post('/user/login', data)
}