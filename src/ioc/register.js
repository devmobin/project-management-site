const Container = require('./container/container');

const AuthController = require('../modules/AuthModule/auth.controller');
const AuthService = require('../modules/AuthModule/auth.service');
const Validator = require('../modules/Shared/middleware/validator');

const registerIoc = () => {
  Container.register('IAuthService', AuthService);
  Container.register('IAuthController', AuthController, 'singleton', [
    'IAuthService'
  ]);
  Container.register('IValidator', Validator);
};

module.exports = registerIoc;
