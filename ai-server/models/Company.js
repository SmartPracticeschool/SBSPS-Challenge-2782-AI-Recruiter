const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({

                    company_name: {
                        type: String,
                        required: true
                    },
                    company_user : {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'User'
                    },
                    test:{
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Test'

                    }
})

const Company = mongoose.model('Company', companySchema);
module.exports = Company;