const db = require('../models');


exports.AplliedCandidate = async (req, res, next)=>{
    try{
          await (await db.Company.findById(req.params.c_id))
                                    .populate('user_apply')
                                    .execPopulate(function(err, result){
                                        console.log(err)
                                        console.log(result)
                                        res.send(result.user_apply)
                                    })
         
    }catch(err){
        return next({
            status: 400,
            message: err.message
        })
    }
}