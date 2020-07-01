import React from 'react';
import { UserLogout } from '../../redux/actionCreater/user';
import {connect} from 'react-redux'

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
            <div>Home</div>
                <div>Register</div>
                <div>Login</div></>)}
                
               
            </div>
        </nav>
    )
}

function mapStateToProps(state){
    return{
        user: state.user.user
    }
}

function mapStateToDispatch(dispatch){
    return{
        logout: ()=> dispatch(UserLogout)
    }
}
const NavBar = connect(mapStateToProps, mapStateToDispatch)(NavBars)
export {NavBar}