import React,{useState} from 'react';
import { UploadResume } from '../_Api/User';
import {connect} from 'react-redux'
import {UploadResumePage} from './UploadResume'

class RegisterForm extends React.Component {

    constructor(props){
        super(props)
        this.state={
            username: "",
            email:'',
            password:"",
           
        }
    }
    
   

    handleSubmit = (e)=>{
        e.preventDefault()
        
        this.props.onSubmitCallback(this.state)
            
    }
   
    render(){
        let errors = {}
    return(
        <div>
           {this.props.user ? 
           (<UploadResumePage user={this.props.user} />):
             (<div className="row p-0">
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
                                     name="username"
                                     value={this.state.username}
                                     onChange={(e)=> {
                                         this.setState({username:e.target.value})
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
                                {/* <div className="form-group">
                                    <input
                                     type="file"
                                     name="file"
                                     onChange={this.handleFile}
                                     className='form-control'
                                     encType="multipart/form-data"
                                    />

                                </div> */}
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
            </div>)}
        </div>
    )
    }
}

export {RegisterForm}