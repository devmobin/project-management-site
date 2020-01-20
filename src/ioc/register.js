const Container = require('./container/container');

const AuthController = require('../modules/AuthModule/auth.controller');
const AuthService = require('../modules/AuthModule/auth.service');
const Validator = require('../modules/Shared/middleware/validator');
const UserService = require('../modules/UserModule/user.service');

const registerIoc = () => {
  Container.register('IAuthService', AuthService);
  Container.register('IAuthController', AuthController, 'singleton', [
    'IAuthService',
    'IUserService'
  ]);
  Container.register('IValidator', Validator);
  Container.register('IUserService', UserService);
};

module.exports = registerIoc;
