const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Company'
        },
        is_selected:{
            type:Boolean,
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        interview_score:{
            type: String,
            
        },
        test_score:{
            type:Number
        }

})

const UserScore = mongoose.model('UserScore', userSchema)
module.exports = UserScore;