const express =  require('express');
const router  = express.Router();
const db = require('../models')
const multer = require('multer');
const {UserLogin, UserRegister} = require('../handlers/auth')


const storege =  multer.diskStorage({
       destination: './public/resume',
       filename: function(req, file, cb){
            cb(null, 'Resume-' + Date.now() + file.originalname)
       }
})

const upload = multer({storage: storege})


router.post('/user/register', UserRegister)
router.post('/user/login', UserLogin)

router.post('/user/:id/resume', upload.single('file') ,async (req,res,next)=>{

                    try{
                         let url =  req.protocol + '://' + req.host + req.file.fileName;
                         console.log(url);
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
                        return next(err)
                    }
} )