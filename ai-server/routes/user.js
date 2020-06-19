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
router.get('/user', async (req,res,next)=>{
       try{
            let user = await db.User.find({})
            res.send(user)
       }catch(err){
           return next(err)
       }
})

router.post('/user/resume', upload.single('file') ,async (req,res,next)=>{

                    try{
                        let url =''
                        if(req.hostname == 'localhost'){
                             url =  req.protocol + '://' + req.hostname + ':5000/' + req.file.filename;
                        }else{
                            url = req.protocol + '://' + req.hostname + '/' + req.file.filename
                        }
                         
                         console.log(url);
                        //  let user = await db.User.findById(req.params.id)
                        //  if(user){
                        //      user.resume = url
                        //      await user.save();
                        //      return res.send(url)
                        //  }
                        //  else{
                        //      return next({
                        //          status: 404,
                        //          message: 'user does not exist'
                        //      })
                        //  }
                        
                    }
                    catch(err){
                        return next(err)
                    }
} )

module.exports = router