const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/ai-recruiter',{    useNewUrlParser: true,

useUnifiedTopology: true,})



module.exports.User =  require('./user')