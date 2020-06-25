const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({

                    company_name: {
                        type: String,
                        required
                    },
                    company_user : {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'User'
                    }
})

const Company = mongoose.model('Company', companySchema);
module.exports = Company;