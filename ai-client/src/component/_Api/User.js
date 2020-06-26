import axios from 'axios';

const url = 'http://localhost:5000/api'
export const UploadResume = (file,id)=>{
        return axios.post(`http://localhost:5000/api/user/${id}/resume`, file)
}

export const UserRegister = (data)=>{
       return axios.post('http://localhost:5000/api/user/register', data)
}

export const UserLogin = (data)=>{
    return axios.post('/user/login', data)
}

export const UploadVideo = (data,id)=>{
    return axios.post(`http://localhost:5000/api/user/${id}/video`, data)
}

export const UserProfile = (id)=>{
    return axios.get(`http://localhost:5000/api/user/${id}/profile`)
}

export const UserProfileUpdateApi = (data, id)=>{
    return axios.put(`${url}/user/${id}/profile`, data)
}
export const CompanyRegisterApi = (data)=>{
    return axios.post(`${url}/company/register`, data)
}