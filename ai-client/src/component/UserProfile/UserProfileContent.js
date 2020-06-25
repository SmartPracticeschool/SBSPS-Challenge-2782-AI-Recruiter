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

      componentWillReceiveProps({profile}){

        this.setState({name:profile.name, email: profile.email,
             skills: profile.skills, 
             experience: profile.experience,
            //  contact: profile.contact,
             languages: profile.languages,
             college: profile.college
            })
      }

      handleSubmit = (e)=>{
            e.preventDefault();

            this.props.onSubmitCallback(this.state)
      }

      render(){
          let {profile} = this.props
          return(
              <div className="p-5 mt-5">
                  <div className='container'>
                      <div className='row'>
                          <div className="col-lg-3 col-md-12">
                              <div className="card">
                                  <div className="card-body">
                                      <div className="o-hidden p-2">
                                        <img style={{height:200, width:200}} src="https://cdna.artstation.com/p/assets/images/images/023/576/078/original/ying-chen-me-optimize.gif?1579652163" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className='col-lg-9 col-md-12 '>
                              <div className="container card">
                                  <div className="card-body">
                                  <div className=" card-body">
                                      <div className='row'>
                                          <div className='col-md-6'>
                                              <p>Name</p>
                                              <h5 className="profile-text"></h5>
                                          </div>
                                          <div className='col-md-6'>
                                              <p>College</p>
                                              <h5 className="profile-text">{profile.college}</h5>
                                          </div>
                                      </div>
                                      <div className='row'>
                                          <div className='col-md-6'>
                                              <p>Contact</p>
                                              <h5 className="profile-text">9668640141</h5>
                                          </div>
                                          <div className='col-md-6'>
                                              <p>Email</p>
                                              <h5 className="profile-text">{profile.email}</h5>
                                          </div>
                                      </div>
                                      <div className='row'>
                                          <div className="col">
                                          <p>skills</p>
                                          <h6 className="profile-text">{profile.skills}</h6>
                                          </div>
                                       
                                      </div>
                                      <div className='row'>
                                          <div className="col">
                                          <p>experience</p>
                                          <p className="profile-text">{profile.experience}</p>
                                          </div>
                                      </div>
                                  </div>
                                  <hr />
                                  <div className="">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Full Name</label>
                                                        <input
                                                        value={profile.name}
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
                                                        value={profile.email}
                                                        name="email"
                                                        onChange={(e)=>this.setState({email:e.target.value})}
                                                        placeholder="email"
                                                        className="form-control"
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>Contact</label>
                                                        <input
                                                        value={this.state.contact}
                                                        name="contact"
                                                        onChange={(e)=>this.setState({contact:e.target.value})}
                                                        placeholder="contact"
                                                        className="form-control"
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="form-group">
                                                        <label>College</label>
                                                        <input
                                                        value={profile.college}
                                                        name="college"
                                                        onChange={(e)=>this.setState({college:e.target.value})}
                                                        placeholder="college"
                                                        className="form-control"
                                                        />
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="row">
                                               <div className="col">
                                                    <div className="form-group">
                                                        <label>Skills</label>
                                                        <textarea
                                                        value={profile.skills}
                                                        name="skills"
                                                        onChange={(e)=>this.setState({skills:e.target.value})}
                                                        placeholder="Skills"
                                                        className="form-control"
                                                        cols={100}
                                                        rows={10}
                                                        />
                                                    </div>
                                                    </div>

                                            </div>
                                            <div className="row">
                                                <div className="col">
                                               
                                                    <div className="form-group">
                                                        <label>experience</label>
                                                        <textarea
                                                        value={profile.experience}
                                                        name="experience"
                                                        onChange={(e)=>this.setState({experience:e.target.value})}
                                                        placeholder="experience"
                                                        className="form-control"
                                                        cols={100}
                                                        rows={10}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="row update-btn">
                                                <button className="btn ">Update</button>
                                            </div>
                                        </form>
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


export {UserProfileContent}