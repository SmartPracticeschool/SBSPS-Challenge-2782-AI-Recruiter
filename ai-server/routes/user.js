const express =  require('express'),
        router  = express.Router(),
        db = require('../models'),
        {UserLogin, UserRegister, UserProfile, UserProfileRequest} = require('../handlers/auth');




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
router.get('/user/:id/profile', UserProfileRequest)


module.exports = router