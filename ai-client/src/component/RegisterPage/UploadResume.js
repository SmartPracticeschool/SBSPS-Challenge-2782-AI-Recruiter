import React from 'react';
import { UploadResume } from '../_Api/User';
import { history } from '../_Api/location/location';
import {withRouter} from 'react-router-dom'

const UploadResumePage = (props)=>{
  
    const [file, setFile] = React.useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
        let data = new FormData()
        data.append('file', file)
        UploadResume(data, props.user.user.id)
            .then(res=>{
                 props.history.push('/')
            })
            .catch(err=>console.log(err))
    }
    const handleChange = (e)=>{
        setFile(e.target.files[0])

      
    }
    return(
        <div className='text-center p-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div> </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                 name='file'
                                 type='file'
                                 onChange = {handleChange}
                                 placeholder="resume"
                                 className="form-control"
                                />
                            </div>
                            <div>
                                <button className='btn btn-primary'>Upload</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default withRouter(UploadResumePage)