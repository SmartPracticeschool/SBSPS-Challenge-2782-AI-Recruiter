import React from 'react';


class UserProfileContent extends React.Component{

      constructor(props){
          super(props)
          this.state={
              name:'',
              email:'',
              skills:'',
              experience:'',
              languages:'',
              college:'',
              contact:''
          }
      }

      render(){
          return(
              <div>
                  <div className='container'>
                      <div className='row'>
                          <div className='col-lg-9 col-md-12 order-lg-1'>
                              <div className="container">
                                  <div className="">
                                      <div className='row'>
                                          <div className='col-md-6'>
                                              <i>Name</i>
                                              <h6>Prabhat Kumar</h6>
                                          </div>
                                          <div className='col-md-6'>
                                              <i>College</i>
                                              <h6>IIIT bhubaneswar</h6>
                                          </div>
                                      </div>
                                      <div className='row'>
                                          <div className='col-md-6'>
                                              <i>Contact</i>
                                              <h6>9668640141</h6>
                                          </div>
                                          <div className='col-md-6'>
                                              
                                          </div>
                                      </div>
                                      <div className='row'>
                                          <i>skills</i>
                                          <p></p>
                                       
                                      </div>
                                      <div className='row'>
                                          <i>experience</i>
                                          <p></p>
                                      </div>
                                  </div>
                                  <hr />
                                  <div className="">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Full Name</label>
                                                        <input
                                                        value={this.state.name}
                                                        name="name"
                                                        onChange={(e)=>this.setState({name:e.target.value})}
                                                        placeholder="name"
                                                        className="form-control"
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input
                                                        value={this.state.email}
                                                        name="email"
                                                        onChange={(e)=>this.setState({email:e.target.value})}
                                                        placeholder="email"
                                                        className="form-control"
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                        </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          )
      }
}