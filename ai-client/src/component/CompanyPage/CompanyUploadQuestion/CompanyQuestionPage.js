import React from 'react';
import { CompanyQuestionContent } from './CompanyQuestionContent';

class CompanyQuestionPage extends React.Component{


    onSubmitCallback = (value)=>{
        console.log(value)
    }
    render(){
        return(
            <CompanyQuestionContent
            onSubmitCallback={this.onSubmitCallback}
            />

        )
    }
}

export {CompanyQuestionPage}