import React from 'react';
import { UserProfileContent } from './UserProfileContent';
import { UserProfile, UserProfileUpdateApi } from '../_Api/User';
import {connect} from 'react-redux'
import { PageSpinner } from './PageSpinner';

class UserProfilePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            profile:null,
            isLoad: false
        }
    }

    componentDidMount(){
        UserProfile(this.props.user.id)
                .then(res=>{
                    console.log(res.data)
                    this.setState({profile: res.data, isLoad:true})
                }).catch(err=>console.log(err.message))
        this.setState({isLoad: false})
    }
    onSubmitCallback = (values)=>{
        console.log(values)
        UserProfileUpdateApi(data, this.props.user.id)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
    }

    render(){
        if(this.state.isLoad){
            return(
                <UserProfileContent 
                profile={this.state.profile}
                onSubmitCallback={this.onSubmitCallback}
                />
            )
        }
        else{
            return(
                <PageSpinner />
            )
        }
        
    }
}

function mapStateToProps(state){
    return{
        user : state.user.user
    }
}

UserProfilePage = connect(mapStateToProps, null)(UserProfilePage)
export {UserProfilePage}