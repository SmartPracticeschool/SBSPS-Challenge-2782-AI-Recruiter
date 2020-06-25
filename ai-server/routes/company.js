const express = require('express');
const db = require('../models');
const router = express.Router();
const {CompanyLogin, CompanyRegister} = require('../handlers/company')

router.post('/company/register', CompanyRegister)
router.post('/company/login', CompanyLogin);



module.exports = router