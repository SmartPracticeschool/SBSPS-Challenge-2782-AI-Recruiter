const express = require('express');
const db = require('../models');
const router = express.Router();
const multer = require('multer');
const ResumeParser = require('resume-parser')
const _ = require('lodash')

const storege =  multer.diskStorage({
    destination: './public/resume',
    filename: function(req, file, cb){
         cb(null, 'Resume-' + Date.now() + file.originalname)
    }
})
const upload = multer({storage: storege})



router.post('/user/:id/resume', upload.single('file') ,async (req,res,next)=>{

    try{
        let url =''
        if(req.hostname == 'localhost'){
             url =  req.protocol + '://' + req.hostname + ':5000/' + req.file.filename;
        }else{
            url = req.protocol + '://' + req.hostname + '/' + req.file.filename
        }
       
         let user = await db.User.findById(req.params.id)
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
} )

router.get('/resume-parser', async (req,res, next)=>{
      try{
            let resumeData = await ResumeParser.parseResumeUrl('http://localhost:5000/Resume-1592674231670CV.pdf')
            console.log(resumeData.experience)
            let exprience = _.split(resumeData.experience, '\n')
            console.log(exprience)
      }catch(err){
          console.log(err)
      }
})


module.exports = router