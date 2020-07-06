import React from 'react';
import {connect} from 'react-redux'
import { UserCompanyAppliedList } from '../../_Api/Company';


class CompanyLeaderPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }

    componentDidMount(){

        UserCompanyAppliedList(this.props.company.company_id)
                .then(res=>{
                    this.setState({data: res.data})
                    console.log(res.data)
                }).catch(err=>console.log(err))
    }

    render(){
        return(
            
        )
    }
}

function mapStateToProps(state){
    return{
        company: state.user.user
    }
}

CompanyLeaderPage = connect(mapStateToProps, null)(CompanyLeaderPage);
export {CompanyLeaderPage}