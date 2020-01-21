const registerIoc = require('./ioc/register');
registerIoc();

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const app = express();

const { MongoURI } = require('./config/config');
const authRoutes = require('./modules/AuthModule/router/auth.routes');
const userRoutes = require('./modules/UserModule/router/user.routes');
const publicRoutes = require('./modules/Shared/router/public.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express.static(path.join(__dirname, 'views', 'public')));

const store = new MongoDBStore({
  uri: MongoURI,
  collection: 'session'
});

app.use(
  session({
    secret: 'thisismysecret',
    resave: false,
    saveUninitialized: false,
    store
  })
);

app.use(authRoutes);
app.use(userRoutes);
app.use(publicRoutes);

mongoose.connect(MongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

module.exports = app;
