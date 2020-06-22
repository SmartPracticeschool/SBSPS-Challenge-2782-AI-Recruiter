const express = require('express');
const db = require('../models');
const router = express.Router();
const multer = require('multer');
const ResumeParser = require('resume-parser')
const _ = require('lodash')
const {ResumeUpload} = require('../handlers/resume')

const storege =  multer.diskStorage({
    destination: './public/resume',
    filename: function(req, file, cb){
         cb(null, 'Resume-' + Date.now() + file.originalname)
    }
})
const upload = multer({storage: storege})



router.post('/user/:id/resume', upload.single('file') , ResumeUpload  )

router.get('/profile', async (req,res, next)=>{
        try{
             let profile = await db.UserProfile.find({})
             res.send(profile)
        }catch(err){
            return next(err)
        }
})


module.exports = router