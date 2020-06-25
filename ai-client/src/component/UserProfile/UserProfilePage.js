import React from 'react';
import { UserProfileContent } from './UserProfileContent';
import { UserProfile } from '../_Api/User';
import {connect} from 'react-redux'

class UserProfilePage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            profile:null
        }
    }

    componentDidMount(){
        UserProfile(this.props.user.id)
                .then(res=>{
                    console.log(res.data)
                    this.setState({profile: res.data})
                }).catch(err=>console.log(err.message))
        
    }

    render(){
        return(
            <UserProfileContent />
        )
    }
}

function mapStateToProps(state){
    return{
        user : state.user.user
    }
}

UserProfilePage = connect(mapStateToProps, null)(UserProfilePage)
export {UserProfilePage}