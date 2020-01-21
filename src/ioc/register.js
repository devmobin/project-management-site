const Container = require('./container/container');

const Validator = require('../modules/Shared/middleware/validator');
const AuthService = require('../modules/AuthModule/auth.service');
const UserService = require('../modules/UserModule/user.service');
const AuthController = require('../modules/AuthModule/auth.controller');
const UserController = require('../modules/UserModule/user.controller');

const registerIoc = () => {
  Container.register('IValidator', Validator);

  Container.register('IAuthService', AuthService);
  Container.register('IUserService', UserService);

  Container.register('IAuthController', AuthController, 'singleton', [
    'IAuthService',
    'IUserService'
  ]);
  Container.register('IUserController', UserController, 'singleton', [
    'IUserService'
  ]);
};

module.exports = registerIoc;
