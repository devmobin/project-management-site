const Container = require('./container/container');

const AuthController = require('../modules/AuthModule/auth.controller');
const AuthService = require('../modules/AuthModule/auth.service');

const registerIoc = () => {
  Container.register('IAuthService', AuthService);
  Container.register('IAuthController', AuthController, 'singleton', [
    'IAuthService'
  ]);
};

module.exports = registerIoc;
