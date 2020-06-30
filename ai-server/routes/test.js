const express = require('express');
const router = express.Router();
const {CompanyInterviewQuestion, UserCompanyTest} = require('../handlers/company')


router.get('/company/:c_id/interview', CompanyInterviewQuestion )
router.post('/company/:id/add', UserCompanyTest)

module.exports = router