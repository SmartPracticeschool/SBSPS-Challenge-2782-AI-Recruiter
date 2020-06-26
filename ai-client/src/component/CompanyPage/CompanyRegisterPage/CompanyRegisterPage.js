import React from 'react';

import {connect} from 'react-redux';
import {CompanyRegisterContent} from './CompanyRegisterContent'
import { UserAuth } from '../../../redux/actionCreater/user';



class RegisterPage extends React.Component{
     onSubmitCallback = (value)=>{
         console.log(value)
       
         
     }
    render(){
        console.log(this.props.user)
        return(
            <CompanyRegisterContent 
            onSubmitCallback={this.onSubmitCallback}
            />
        )
    }
}

function mapStateToProps(state){
    return{
        user: state.user
    }
}

function mapStateToDispatch(dispatch){
    return{
        userAdd: (data)=> dispatch(UserAuth(data))
    }
}
const CompanyRegisterPage = connect(mapStateToProps, mapStateToDispatch)(RegisterPage)

export {CompanyRegisterPage}