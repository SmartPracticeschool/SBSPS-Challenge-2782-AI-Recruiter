import React from 'react';
import { McqTestPageContent } from './McqTestPageContent';
import { UserStatusTestApi } from '../../_Api/User';
import {connect} from 'react-redux'
import { PageSpinner } from '../../UserProfile/PageSpinner';
import { InterviewStartPage } from '../InterviewTestPage/InterviewStartPage';

class McqTestPage extends React.Component{

    constructor(props){
        super(props);
        this.c_id = null
        this.state={
            data:null,
            
        }
    }
    componentDidMount(){
        this.c_id = this.props.match.params.id;
        UserStatusTestApi(this.props.user.id,this.c_id )
            .then(res=>{
                this.setState({data: res.data})
                console.log(res.data)
            })
            .catch(err=>console.log(err))
    }
    render(){
         if(this.state.data){
            return(
                <div>
                    {!this.state.data.is_mcq_completed && !this.state.data.is_interview_completed  ? (<McqTestPageContent 
                    userScore={this.state.data}
                    />):(null)}
                    {this.state.data.is_mcq_completed && !this.state.data.is_interview_completed ? (<InterviewStartPage 
                      userScore={this.state.data}
                    />):(null) }
                    {this.state.data.is_mcq_completed && this.state.data.is_interview_completed ? (<div>Test completed</div>):(null)}
                </div>
               
            )
         }else{
             return(
                 <PageSpinner />
             )
         }
        
    }
}

function mapStateToProps(state){
    return {
        user: state.user.user
    }
}

McqTestPage = connect(mapStateToProps, null)(McqTestPage)
export {McqTestPage}