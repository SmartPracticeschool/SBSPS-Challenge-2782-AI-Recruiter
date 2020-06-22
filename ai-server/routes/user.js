const express =  require('express');
const router  = express.Router();
const db = require('../models')
const multer = require('multer');
const ResumeParser = require('resume-parser')
const {UserLogin, UserRegister, UserProfile} = require('../handlers/auth')
const {spawn} = require('child_process')



router.post('/user/register', UserRegister)
router.post('/user/login', UserLogin)
router.get('/user', async (req,res,next)=>{
       try{
            let user = await db.User.find({})
            res.send(user)
       }catch(err){
           return next(err)
       }
})

router.put('/user/:id/profile',UserProfile )


module.exports = router