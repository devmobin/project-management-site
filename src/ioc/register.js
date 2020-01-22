const Container = require('./container/container');

const Validator = require('../modules/Shared/middleware/validator');
const AuthService = require('../modules/AuthModule/auth.service');
const UserService = require('../modules/UserModule/user.service');
const ProjectService = require('../modules/ProjectModule/project.service');
const AuthController = require('../modules/AuthModule/auth.controller');
const UserController = require('../modules/UserModule/user.controller');
const ProjectController = require('../modules/ProjectModule/project.controller');

const registerIoc = () => {
  Container.register('IValidator', Validator);

  Container.register('IAuthService', AuthService);
  Container.register('IUserService', UserService);
  Container.register('IProjectService', ProjectService);

  Container.register('IAuthController', AuthController, 'singleton', [
    'IAuthService',
    'IUserService'
  ]);
  Container.register('IUserController', UserController, 'singleton', [
    'IUserService'
  ]);
  Container.register('IProjectController', ProjectController, 'singleton', [
    'IProjectService'
  ]);
};

module.exports = registerIoc;
