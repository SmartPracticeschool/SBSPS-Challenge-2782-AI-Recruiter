const express =  require('express');
const router  = express.Router();
const db = require('../models')
const multer = require('multer');
const ResumeParser = require('resume-parser')
const {UserLogin, UserRegister} = require('../handlers/auth')
const {spawn} = require('child_process')


const storege =  multer.diskStorage({
       destination: './public/resume',
       filename: function(req, file, cb){
            cb(null, 'Resume-' + Date.now() + file.originalname)
       }
})

const upload = multer({storage: storege})


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

router.get('/resume-parser', (req,res,next)=>{
        // ResumeParser
        //     .parseResumeUrl('http://localhost:5000/Resume-1592674231670CV.pdf')
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err))
        
        let processData = spawn('python', ['./ml/ExtractInfo.py', 'public/resume/Resume-1592674231670CV.pdf'])
        processData.stdout.on('data', (data)=>{
            console.log(data.toString())
        })
        processData.stderr.on('data', (err)=>{
            console.log(err.toString())
        })
        console.log('by')

})

module.exports = router