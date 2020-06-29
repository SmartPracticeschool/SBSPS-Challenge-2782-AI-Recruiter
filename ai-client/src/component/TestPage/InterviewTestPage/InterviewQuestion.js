import React from 'react';


const data =[
    {
        question: "Tell me about yourself",
        id: 1
    },
    {
        question: "Why you are perfect for this position",
        id: 2
    }
]
const InterviewQuestion = (props)=>{

    return(
        <div>
            <div className="question-render">
                {data.map((res,id)=>(
                    <div className="question" key={id}>
                        <p>{res.question}</p>    
                    </div>
                ))}
            </div>
        </div>

    )
}

export {InterviewQuestion}