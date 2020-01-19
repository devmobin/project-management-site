const { registerIoc } = require('./ioc/register');
const { BeanFactory } = require("./ioc/container/bean-factory");
registerIoc();

const beanFactory = new BeanFactory();

const userService = beanFactory.getInstance('IUserService');
userService.signup();

const userService2 = beanFactory.getInstance('IUserService');
userService2.signup();

const productService = beanFactory.getInstance('IProductService');
productService.buy();

const productService2 = beanFactory.getInstance('IProductService');
productService2.buy();