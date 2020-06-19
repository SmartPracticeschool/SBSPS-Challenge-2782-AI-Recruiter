import React from 'react';
import { UploadResume } from '../_Api/User';

const UploadResumePage = (props)=>{
  
    const [file, setFile] = React.useState(null)

    const handleSubmit = (e)=>{
        e.preventDefault()
        let data = new FormData()
        data.append('file', file)
        
        UploadResume(data)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
    }
    const handleChange = (e)=>{
        setFile(e.target.files[0])

      
    }
    return(
        <div>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <h1>Upload Your Resume</h1>
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

export {UploadResumePage}