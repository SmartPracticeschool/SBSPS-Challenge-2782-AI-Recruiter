
exports.errorsHandler = (error,req,res, next)=>{

    return res.status(error.status || 500).send({
             errors:{
                
                 message:error.message || 'something went wrong'
             }
         })
    
}