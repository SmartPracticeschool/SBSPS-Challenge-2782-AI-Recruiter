import React,{Component} from 'react';
import { CompanyApi } from '../_Api/Company';
import { CompanyHomePageContent } from './CompanyHomePageContent';
import { PageSpinner } from '../UserProfile/PageSpinner';

class CompanyHomePage extends Component{

    constructor(props){
        super(props)
        this.state={
            data: null,
            isLoad: false
        }
    }

    componentDidMount(){
        CompanyApi()
            .then(res=>{
                this.setState({data: res.data, isLoad:true})
                console.log(res.data)
            }).catch(err=>console.log(err))

    }


    render(){
        if(this.state.isLoad){
        return(
            <CompanyHomePageContent 
                data = {this.state.data}
                />

        )}else{
            return(
                <PageSpinner />
            )
        }
    }
}

export {CompanyHomePage}