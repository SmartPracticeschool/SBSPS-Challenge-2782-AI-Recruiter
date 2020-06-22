
const db = require('../models')
const ResumeParser = require('resume-parser')

exports.ResumeUpload = async (req,res,next)=>{

    try{
        let url =''
        if(req.hostname == 'localhost'){
             url =  req.protocol + '://' + req.hostname + ':5000/' + req.file.filename;
        }else{
            url = req.protocol + '://' + req.hostname + '/' + req.file.filename
        }
       
         let user = await db.User.findById(req.params.id)

         let profile = await db.UserProfile.create()
         if(user){
             user.resume = url
             await user.save();
             return res.send(url)
         }
         else{
             return next({
                 status: 404,
                 message: 'user does not exist'
             })
         }
        
    }
    catch(err){
        return next({
            status: 400,
            error: err.message || 'something went wrong'
        })
    }
}