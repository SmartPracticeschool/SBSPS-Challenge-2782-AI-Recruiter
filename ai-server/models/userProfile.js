const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
                name: {
                    type:String
                },
                email:{
                    type:String
                },
                college:{
                    type:String,
                },
                skills:[
                    {
                        type:String
                    }
                ],
                languages:[{
                    type:String
                }],
                exprience:[{
                    type:String
                }],
                user:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'User'
                }
})


const UserProfile = mongoose.model('UserProfile', userSchema)
module.exports = UserProfile