const isAuth = (req, res, next) => {
  if (!req.session.isLogin) {
    return res.redirect('/login');
  }

  next();
};

module.exports = isAuth;
