import axios from 'axios';

export const UploadResume = (file)=>{
        return axios.post('/upload-resume', file)
}

export const UserRegister = (data)=>{
       return axios.post('/user/register', data)
}

export const UserLogin = (data)=>{
    return axios.post('/user/login', data)
}