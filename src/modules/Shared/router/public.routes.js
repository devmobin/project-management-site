const express = require('express');
const RenderOptions = require('../../../config/render-options');

const router = express.Router();

router.get('/login', (req, res, next) => {
  res.render('auth', new RenderOptions('Login', 'login'));
});

router.get('/signup', (req, res, next) => {
  res.render(
    'auth',
    new RenderOptions('Join us', 'signup')
  );
});

router.get('/', (req, res, next) => {
  res.render(
    'home-page',
    new RenderOptions('Project Management')
  );
});

module.exports = router;
