import React from 'react';

class CompanyLoginContent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            
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
           <div className="row p-0 ">
                 {/* <div className="col-lg-7 col-sm-12 text-center">
                    <div className="title">
                        
                        <div className="img-register">
                        
                            <img className="img-fluid" src="/image/c-register.jpg" alt="" />
                            <h3 > Welcome to Our Company Login Portal</h3>
                        </div>
                    </div>

                </div> */}
                <div className="col-lg-5 col-sm-12 p-5 card container ">
                    <div className="container w-75 card-body " >
                        <div className="text-center">
                            <h2 style={{color:'blue'}}>Company Login</h2>
                        </div>
                            <form onSubmit={this.handleSubmit}>
                               
                                <div className="form-group">
                                    <label>Email: </label>
                                    <input 
                                     type="email"
                                     name="email"
                                     value={this.state.email}
                                     onChange={(e)=> {
                                         this.setState({email:e.target.value})
                                        }}
                                     className='form-control'
                                     placeholder="email"
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input 
                                     type="password"
                                     name="password"
                                     value={this.state.password}
                                     onChange={(e)=> {
                                         this.setState({password:e.target.value})
                                        }}
                                     className='form-control'
                                     placeholder="password"
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                               

                                <div className="update-btn">
                                    <button className="btn" type="submit">Login</button>
                                </div>
                            </form>
                    </div>
                </div>
                
            </div>
        </div>
    )
    }
}

export {CompanyLoginContent}