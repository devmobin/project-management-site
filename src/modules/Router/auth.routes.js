const BeanFactory = require('../../ioc/container/bean-factory');

const express = require('express');
const router = express.Router();

const authController = BeanFactory.getInstance('IAuthController');

router.post('/signup', authController.signupUser);

router.post('/login', authController.loginUser);

module.exports = router;
