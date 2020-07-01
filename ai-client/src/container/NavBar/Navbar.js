import React from 'react';
import { UserLogout } from '../../redux/actionCreater/user';
import {connect} from 'react-redux';

const NavBars = (props)=>{

    const Logout = ()=>{
            localStorage.clear()
            props.logout()
    }
    console.log(props.user.isAuthenticated)
    return(
        <nav>
            <div className='content'>
                {props.user.isAuthenticated ? ( <div><a href="#" onClick={Logout} >Logout</a></div>)
                
            : (<>
                <div className="p-2"><a href="/">Home</a></div>
                <div className="drop">
                <div className="company">
                    <div className="drop-down">
                        <button className=" drop-btn" >Company</button>
                        <div className="dropdown-content">
                            <a href="/company/register">Register</a>
                            <a href="/company/Login">Login</a>
                        </div>
                    </div>
                </div>
                <div className="user">
                    <div className="drop-down">
                        <button className=" drop-btn" >Candidate</button>
                        <div className="dropdown-content">
                            <a href="/register">Register</a>
                            <a href="/Login">Login</a>
                        </div>
                    </div>
                </div>
                </div>
                </>)}
                
               
            </div>
        </nav>
    )
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

function mapStateToDispatch(dispatch){
    return{
        logout: ()=> dispatch(UserLogout)
    }
}
const NavBar = connect(mapStateToProps, mapStateToDispatch)(NavBars)
export {NavBar}