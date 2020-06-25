import React from 'react';
import Spinner from 'react-spinkit'


const PageSpinner = (props)=>{

    return(
        <div className="d-flex justify-content-center text-center" style={{width: '100%', height: '100%', backgroundColor: 'blue',}}>
            <div style={{paddingBottom:"30%", paddingTop:'20%', position:'absolute'}}>
                <Spinner 
                name="ball-scale-ripple" color="#B4D6FC"
                />
            </div>
        </div>

    )
}

export {PageSpinner}