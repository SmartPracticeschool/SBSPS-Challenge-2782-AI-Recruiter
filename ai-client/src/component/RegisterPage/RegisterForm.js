import React,{useState} from 'react';


const RegisterForm = (props)=>{

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    let errors = {}

    const handleSubmit = ()=>{

            console.log(name, email, password)
    }

    return(
        <div>
            <div className="row">
                <div className="col-lg-8 col-sm-12">
                    <div className="container">
                        <div className="">
                            <img src="" alt="" />
                        </div>
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input 
                                     type="text"
                                     name="name"
                                     value={name}
                                     onChange={(e)=> {
                                         setName(e.target.value)
                                         console.log(name)
                                        }}
                                     className='form-control'
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                                <div className="form-group">
                                    <input 
                                     type="email"
                                     name="email"
                                     value={email}
                                     onChange={(e)=> {
                                         setEmail(e.target.value)
                                         console.log(email)
                                        }}
                                     className='form-control'
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                                <div className="form-group">
                                    <input 
                                     type="password"
                                     name="password"
                                     value={password}
                                     onChange={(e)=> {
                                         setPassword(e.target.value)
                                         console.log(password)
                                        }}
                                     className='form-control'
                                    />
                                    <label className="text-error">{errors.name}</label>
                                </div>
                                <div>
                                    <button type="submit">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {RegisterForm}