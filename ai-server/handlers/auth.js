require('dotenv').load
const db = require('../models')
const jwt = require('jsonwebtoken')

exports.UserRegister = async (req,res,next)=>{

          try{
              let user = await db.User.create(req.body)
              console.log(user)
              user.is_ad
              let {id, username , email} = user
              let token = jwt.sign({
                  id,
                  email,
                  username
              }, process.env.SECRET_KEY)
              console.log(token)
             await user.save()
             return res.status(200).json({
                 id,
                 email,
                 token,
                 username
             })
          }catch(err){
              return next({
                  status:402,
                  message: err.message
              })
          }
}

exports.UserLogin =  async (req,res ,next)=>{
                try{
                    let user =  await db.User.findOne({email: req.body.email})
                    
                    if(user){
                        let isMatch = await user.Compare(req.body.password)
                        let {id, username, email} = user
                        if(isMatch){
                            let token = jwt.sign({
                                username,
                                email,
                                id,
                                
                            },process.env.SECRET_KEY)
                            return res.status(200).json({
                                username,
                                email,
                                token,
                                id
                            })
                        }
                        return next({
                            status: 404,
                            message: "wrong password"
                        })
                    }
                    return next(
                        {
                            status: 404,
                            message: 'user does not exist'
                        }
                    )
                }catch(err){
                    return next({
                        status: 404,
                        message: err.message
                    })

                }
}


exports.UserProfile = async (req,res, next)=>{

            try{
                let userProfile = await db.UserProfile.findOne({user:req.params.id})
                userProfile.experience = req.body.experience;
                userProfile.skills = req.body.skills;
                userProfile.name = req.body.name;
                userProfile.languages = req.body.languages
                userProfile.email = req.body.email;
                userProfile.college = req.body.college
                userProfile.contact = req.body.contact
                console.log(req.body)
                await userProfile.save();

                res.send(userProfile)
            }catch(err){
                return next({
                    status: 404,
                    message: err.message
                })
            }
}

exports.UserProfileRequest = async (req,res,next)=>{
            try{
                let userProfile = await db.UserProfile.findOne({user:req.params.id})
                console.log('hello')
                if(userProfile){
                    res.send(userProfile)
                }else{
                    return res.json('user does not exist')
                }
            }catch(err){
                return next({
                    status: 404,
                    message: err.message
                })
            }
}