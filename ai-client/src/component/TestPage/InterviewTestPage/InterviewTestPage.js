import React from "react";
import { InterviewTestContent } from "./InterviewTestContent";
import { PageSpinner } from "../../UserProfile/PageSpinner";
import {connect} from 'react-redux'

class InterviewTestPage extends React.Component{


    render(){

        const c_id = this.props.test._id
        console.log(c_id)
        if(this.props.isAuthenticated){
        return(
            
            <InterviewTestContent
            user={this.props.user}
            test_id={c_id}
            />
        )}
        else{
            return(
                <PageSpinner />
            )
            
        }
    }
}

function mapStateToProps(state){
    return{
        user: state.user.user,
        isAuthenticated: state.user.isAuthenticated,
        test: state.test.test
    }
}

InterviewTestPage = connect(mapStateToProps,null)(InterviewTestPage)
export {InterviewTestPage}