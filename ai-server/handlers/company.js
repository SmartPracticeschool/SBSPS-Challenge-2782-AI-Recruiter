require('dotenv').load
const db = require('../models')
const jwt = require('jsonwebtoken')

exports.CompanyRegister = async (req,res,next)=>{

          try{
              let user = await db.User.create(req.body)
              let company = await db.Company.create({company_name:req.body.company, company_user: user.id})
              console.log(company)
              user.is_admin = true
              user.company = company.id

              let {id, username , email} = user
              let token = jwt.sign({
                  id,
                  email,
                  username
              }, process.env.SECRET_KEY)
              console.log(token)
             await user.save()
             await company.save()
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

exports.CompanyLogin =  async (req,res ,next)=>{
                try{
                    let user =  await db.User.findOne({email: req.body.email})
                    
                    if(user && user.is_admin){
                        let isMatch = await user.Compare(req.body.password)
                        let {id, username, email, is_admin} = user
                        if(isMatch){
                            let token = jwt.sign({
                                username,
                                email,
                                id,
                                is_admin
                                
                            },process.env.SECRET_KEY)
                            return res.status(200).json({
                                username,
                                email,
                                token,
                                id,
                                is_admin

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
