const RenderOptions = require('../../config/render-options');

class UserController {
  constructor(userService) {
    // UserService injected from bean factory
    this.userService = userService;
  }

  renderProfile = async (req, res, next) => {
    const render = new RenderOptions('Your Profile');

    res.render('user-profile', render);
  };
}

module.exports = UserController;
