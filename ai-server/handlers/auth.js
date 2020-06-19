require('dotenv').load
const db = require('../models')
const jwt = require('jsonwebtoken')

exports.UserRegister = async (req,res,next)=>{

          try{
              let user = await db.User.create(req.body)
              let {id, username , email} = user
              let token = jwt.sign({
                  id,
                  email,
                  username
              }, process.env.SEC)
          }
}