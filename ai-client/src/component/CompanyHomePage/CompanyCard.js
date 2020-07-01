import React from 'react';


const CompanyCard = (props)=>{

    return(
        <div className="company-list">
            {props.data.map(res=>(
                <div className="">
                    <div className="container">
                        <div className="title-image">
                            <img className="img-fluid" src="https://q2w6m4y3.stackpathcdn.com/media/catalog/product/cache/1/image/320x320/9df78eab33525d08d6e5fb8d27136e95/j/u/juspay-payment-gateway-320x320_1.png" alt="" />
                        </div>
                        <div className="desc">
                            <div className="title">
                                <h3>Juspay</h3>
                            </div>
                            <div className="description">
                                <p>Juspay is hiring the web developer</p>
                            </div>
                            {/* <p>{res._id}</p> */}
                            <div className="apply-btn">
                                <button className="btn" onClick={()=>{props.onApply(res._id)}}>Apply</button>
                            </div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export {CompanyCard}