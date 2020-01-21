const BeanFactory = require('../../../ioc/container/bean-factory');

const express = require('express');
const router = express.Router();

const authController = BeanFactory.getInstance('IAuthController');
const Validator = BeanFactory.getInstance('IValidator');

router.post('/signup', Validator.signupRoute, authController.signupUser);

router.post('/login', Validator.loginRoute, authController.loginUser);

module.exports = router;
