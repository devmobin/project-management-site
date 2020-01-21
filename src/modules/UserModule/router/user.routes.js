const BeanFactory = require('../../../ioc/container/bean-factory');

const express = require('express');
const router = express.Router();

const userController = BeanFactory.getInstance('IUserController');
const Validator = BeanFactory.getInstance('IValidator');

router.get('/me', userController.renderProfile);

module.exports = router;
