const BeanFactory = require('../../../ioc/container/bean-factory');
const isAuth = require('../../AuthModule/middleware/auth');

const express = require('express');
const router = express.Router();

const projectController = BeanFactory.getInstance('IProjectController');
const Validator = BeanFactory.getInstance('IValidator');



module.exports = router;
