const BeanFactory = require('../../../ioc/container/bean-factory');
const isAuth = require('../../AuthModule/middleware/auth');

const express = require('express');
const router = express.Router();

const userController = BeanFactory.getInstance('IUserController');
const Validator = BeanFactory.getInstance('IValidator');

router.get('/me', isAuth, userController.renderProfile);

router.get('/panel', isAuth, userController.renderPanel);

router.post('/edit-profile', isAuth, userController.editProfile)

module.exports = router;
