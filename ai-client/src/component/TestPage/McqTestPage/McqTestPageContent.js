import React from 'react';
import { McqTestCard } from './McqTestCard';
import { UserStatusTestApi, UserSubmitTestApi } from '../../_Api/User';


const McqTestPageContent = (props)=>{

    const SubmitTest = (score)=>{

        UserSubmitTestApi(props.userScore._id, score)
            .then(res=>{
                console.log(res.data)
                alert("submitted")
                this.props.history.push('/user/dashboard')
            }).catch(err=>{
                console.log(err)
            })
    }
    return(
        <div className="p-0 m-0">
            <div className="container test-container">
                <McqTestCard 
                SubmitTest={SubmitTest}
                />
            </div>
        </div>
    )
}

export {McqTestPageContent}