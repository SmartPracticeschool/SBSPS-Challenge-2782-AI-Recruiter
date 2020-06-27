import Axios from "axios"
import axios from 'axios';

const url = 'http://localhost:5000/api'


export const CompanyQuestionUploadApi = (data, id)=>{

    return axios.post(`${url}/company/${id}/question/upload`, data)
}