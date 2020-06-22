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
                                          </div>
                                          <div className='col-md-6'>
                                              <h6>Prabhat Kumar</h6>
                                          </div>
                                      </div>
                                      <div className='row'>
                                          <div className='col-md-6'>
                                              <i>College</i>
                                          </div>
                                          <div className='col-md-6'>
                                              <h6>IIIT bhubaneswar</h6>
                                          </div>
                                      </div>
                                      <div className='row'>
                                          <div className='col-md-6'>
                                              <i>Contact</i>
                                          </div>
                                          <div className='col-md-6'>
                                              <h6>9668640141</h6>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          )
      }
}