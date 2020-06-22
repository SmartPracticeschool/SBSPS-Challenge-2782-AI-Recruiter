const express =  require('express');
const router  = express.Router();
const db = require('../models')
const multer = require('multer');
const ResumeParser = require('resume-parser')
const {UserLogin, UserRegister} = require('../handlers/auth')
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


// router.get('/resume-parser', (req,res,next)=>{
//         // ResumeParser
//         //     .parseResumeUrl('http://localhost:5000/Resume-1592674231670CV.pdf')
//         //     .then(res=>console.log(res))
//         //     .catch(err=>console.log(err))
        
//         let processData = spawn('python', ['./ml/ExtractInfo.py', 'public/resume/Resume-1592674231670CV.pdf'])
//         processData.stdout.on('data', (data)=>{
//             console.log(data.toString())
//         })
//         processData.stderr.on('data', (err)=>{
//             console.log(err.toString())
//         })
//         console.log('by')

// })

module.exports = router