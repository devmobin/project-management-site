const registerIoc = require('./ioc/register');
registerIoc();

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const authRoutes = require('./modules/Router/auth.routes');
const publicRoutes = require('./modules/Router/public.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static(path.join(__dirname, 'views', 'public')));

app.use(authRoutes);
app.use(publicRoutes);

mongoose.connect('mongodb://localhost:27017/projectmanagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

module.exports = app;
