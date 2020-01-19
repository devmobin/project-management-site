const Container = require('./container/container');

const { UserService } = require('../user.service');
const { ProductService } = require('../product.service');

const registerIoc = () => {
  Container.register('IUserService', UserService, 'transient', [
    'IProductService',
    'IProductService'
  ]);
  Container.register('IProductService', ProductService, 'singleton');
};

exports.registerIoc = registerIoc;
