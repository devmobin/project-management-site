const Container = require('./container/container');

const AuthController = require('../modules/AuthModule/auth.controller');
const AuthService = require('../modules/AuthModule/auth.service');
const Validator = require('../modules/Shared/middleware/validator');
const UserService = require('../modules/UserModule/user.service');

const registerIoc = () => {
  Container.register('IValidator', Validator);

  Container.register('IAuthService', AuthService);
  Container.register('IUserService', UserService);

  Container.register('IAuthController', AuthController, 'singleton', [
    'IAuthService',
    'IUserService'
  ]);
};

module.exports = registerIoc;
