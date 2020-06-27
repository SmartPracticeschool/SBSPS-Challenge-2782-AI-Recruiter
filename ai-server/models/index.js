const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/ai-recruiter',{    useNewUrlParser: true,

useUnifiedTopology: true,})



module.exports.User =  require('./user')
module.exports.UserProfile = require('./userProfile');
module.exports.Test = require('./Test')
module.exports.Company = require('./Company')