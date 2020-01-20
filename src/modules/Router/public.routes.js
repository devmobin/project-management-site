const express = require('express');
const RenderOptions = require('../../config/render-options');

const router = express.Router();

router.get('/login', (req, res, next) => {
  res.render('auth', new RenderOptions('Login', 'login', undefined, undefined));
});

router.get('/signup', (req, res, next) => {
  res.render(
    'auth',
    new RenderOptions('Signup', 'signup', undefined, undefined)
  );
});

router.get('/', (req, res, next) => {
  res.render(
    'home-page',
    new RenderOptions('Project Management', undefined, undefined, undefined)
  );
});

module.exports = router;
