const BeanFactory = require('../../../ioc/container/bean-factory');
const isAuth = require('../../AuthModule/middleware/auth');

const express = require('express');
const router = express.Router();

const projectController = BeanFactory.getInstance('IProjectController');
const Validator = BeanFactory.getInstance('IValidator');

router.post(
  '/add-project',
  isAuth,
  Validator.addProject,
  projectController.addProject
);

router.post(
  '/edit-project',
  isAuth,
  Validator.editProject,
  projectController.editProject
);

router.delete('/project/:id', isAuth, projectController.deleteProject);

module.exports = router;
