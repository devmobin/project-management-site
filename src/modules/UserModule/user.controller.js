const RenderOptions = require('../../config/render-options');

class UserController {
  constructor(userService) {
    // UserService injected from bean factory
    this.userService = userService;
  }

  renderProfile = async (req, res, next) => {
    const render = new RenderOptions('Your Profile');

    render.user = req.session.user;

    res.render('user-profile', render);
  };

  renderPanel = async (req, res, next) => {
    const render = new RenderOptions('Your Panel');

    render.user = req.session.user;

    res.render('user-panel', render);
  };

  editProfile = async (req, res, next) => {
    
  };
}

module.exports = UserController;
