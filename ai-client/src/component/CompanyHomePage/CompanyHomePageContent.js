import React,{Component} from "react";
import { CompanyCard } from "./CompanyCard";
import Typist from 'react-typist'
import { UserCompanyTestApi } from "../_Api/Company";

const CompanyHomePageContent = (props)=>{

    const onApply = (id)=>{
        UserCompanyTestApi(props.user.id, id)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
    }
    return(
        <section>
            <div className="">
                <div className="p-0 m-0">
                    <img src="./image/company.jpg" alt="" className="img-fluid" />
                    <div className="p-absolute company-title">
                        <Typist
                         avgTypingDelay={40}
                         startDelay={2000}
                         cursor={true}
                         className="typist-title"
                        >
                           <span>Our Company Provides best service to Employee</span>

                        </Typist>
                        
                    </div>
                </div>
                <div className="container">
                    <div className="">
                        <CompanyCard data={props.data} onApply = {onApply}
                        userRegisteredCompany={props.userRegisteredCompany}
                        />
                    </div>
                    
                </div>
            </div>

        </section>
    )
}

export {CompanyHomePageContent}