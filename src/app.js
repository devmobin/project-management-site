const registerIoc = require('./ioc/register');
registerIoc();

const express = require('express');

const app = express();
const authRoutes = require('./modules/Router/auth.routes');

app.use(express.json());

app.use(authRoutes);

module.exports = app;
