const express =  require('express'),
        router  = express.Router(),
        db = require('../models'),
        {UserLogin, UserRegister, UserProfile, UserProfileRequest} = require('../handlers/auth'),
        {UserRegisteredCompany} = require('../handlers/company');




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
router.get('/user/:id/registered', UserRegisteredCompany);
router.delete('/user/:id/delete', async (req,res,next)=>{
        try{
            let user = await db.User.findByIdAndRemove(req.params.id)
            await user.save()
            res.status(200).json("done")
        }catch(err){
            return next({
                status: 404,
                message: err.message
            })
        }
})


module.exports = router