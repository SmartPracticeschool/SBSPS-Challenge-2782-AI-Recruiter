import React,{Component} from 'react';
import { CompanyApi } from '../_Api/Company';
import { CompanyHomePageContent } from './CompanyHomePageContent';
import { PageSpinner } from '../UserProfile/PageSpinner';
import {connect} from 'react-redux'

class CompanyHomePages extends Component{

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
        if(this.state.isLoad && this.props.user){
        return(
            <CompanyHomePageContent 
                data = {this.state.data}
                user={this.props.user}
                />

        )}else{
            return(
                <PageSpinner />
            )
        }
    }
}

function mapStateToProps(state){
    return{
        user: state.user.user
    }
}

 const CompanyHomePage = connect(mapStateToProps, null)(CompanyHomePages)

export {CompanyHomePage}