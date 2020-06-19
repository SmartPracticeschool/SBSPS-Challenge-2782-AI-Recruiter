const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/ai-recruiter')



module.exports.User =  require('./user')