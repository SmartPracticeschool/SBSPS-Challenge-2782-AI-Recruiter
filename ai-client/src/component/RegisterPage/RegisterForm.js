import React,{useState} from 'react';
import { UploadResume } from '../_Api/User';
import {connect} from 'react-redux'


class RegisterForm extends React.Component {

    constructor(props){
        super(props)
        this.state={
            name: "",
            email:'',
            password:"",
            file:""
        }
    }
    
   

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state.file)
        let fileData =  new FormData()
        fileData.append('file', this.state.file)
        UploadResume(fileData)
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
            
    }
   handleFile = (e)=>{
        console.log(e.target.files[0])
        const data = e.target.files[0]
      
        this.setState({file:data})
        
        let fileName = new FormData()
        fileName.append('file', data)
        
      
        
    }
    render(){
        let errors = {}
    return(
        <div>
            <div className="row p-0">
                <div className="col-lg-7 col-sm-12 p-5 text-center container">
                    <div className="container w-50" >
                        <div className="">
                            <img src="" alt="" />
                        </div>
                        {/* <div className="container"> */}
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input 
                                     type="text"
                                     name="name"
                                     value={this.state.name}
                                     onChange={(e)=> {
                                         this.setState({name:e.target.value})
                                        }}
                                     className='form-control'
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                                <div className="form-group">
                                    <input 
                                     type="email"
                                     name="email"
                                     value={this.state.email}
                                     onChange={(e)=> {
                                         this.setState({email:e.target.value})
                                        }}
                                     className='form-control'
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                                <div className="form-group">
                                    <input 
                                     type="password"
                                     name="password"
                                     value={this.state.password}
                                     onChange={(e)=> {
                                         this.setState({password:e.target.value})
                                        }}
                                     className='form-control'
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                                <div className="form-group">
                                    <input
                                     type="file"
                                     name="file"
                                     onChange={this.handleFile}
                                     className='form-control'
                                     encType="multipart/form-data"
                                    />

                                </div>
                                <div>
                                    <button className="btn btn-primary" type="submit">Register</button>
                                </div>
                            </form>
                        {/* </div> */}
                    </div>
                </div>
                <div className="col-lg-5 col-sm-12 text-center">
                    <div className="title">
                        <h3> Welcome to Our Register Portal</h3>
                    </div>

                </div>
            </div>
        </div>
    )
    }
}

export {RegisterForm}