const mongoose =  require('mongoose');
const bcrypt = require('bcrypt')

const userSchema =  new mongoose.Schema({
        username:{
            type: String,
            unique: true,
            required: true
        },
        email:{
            type: String,
            unique: true
        },
        password:{
            type: String,
            required: true
        },
        resume:{
            type:String,
            default:''
        },
        is_admin:{
            type: Boolean,
            default: false
        }
})

userSchema.pre('save', async function(req,res,next){
        try{
            let hashPassword = await bcrypt.hash(this.password, 10)
            this.password = hashPassword
            return next()
        }catch(err){
            return next(err)
        }
})

userSchema.methods.Compare = async function(userPassword,next){
            try{
                    let isMatch =  await bcrypt.compare( userPassword, this.password)
                    return isMatch
            }catch(err){
                return next(err)
            }
        
}
const User = mongoose.model('User', userSchema)
module.exports = User