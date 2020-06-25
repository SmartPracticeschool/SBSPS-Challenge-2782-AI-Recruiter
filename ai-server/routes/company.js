const express = require('express');
const db = require('../models');
const router = express.Router();
const {CompanyLogin, CompanyRegister} = require('../handlers/company')

router.post('/company/register', CompanyRegister)
router.post('/company/login', CompanyLogin);

router.get('/company', async (req,res) => {
    try{
        let company = await db.Company.find({})
        res.send(company)
    }catch(err){
        console.log(err)
    }
})

module.exports = router