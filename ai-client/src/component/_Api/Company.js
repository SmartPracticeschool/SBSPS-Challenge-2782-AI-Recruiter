import axios from 'axios';




export const CompanyQuestionUploadApi = (data, id)=>{

    return axios.post(`/api/company/${id}/question/upload`, data)
}

export const CompanyApi = ()=>{
    return axios.get('/api/company')
}
export const UserCompanyTestApi = (id,c_id)=>{
    return axios.post(`/api/company/${id}/add`, {c_id});
}