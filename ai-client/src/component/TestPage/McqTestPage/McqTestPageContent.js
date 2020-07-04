import React from 'react';
import { McqTestCard } from './McqTestCard';
import { UserStatusTestApi } from '../../_Api/User';


const McqTestPageContent = (props)=>{

    return(
        <div className="p-0 m-0">
            <div className="container test-container">
                <McqTestCard />
            </div>
        </div>
    )
}

export {McqTestPageContent}