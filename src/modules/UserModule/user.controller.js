const RenderOptions = require('../../config/render-options');

class UserController {
  constructor(userService) {
    // UserService injected from bean factory
    this.userService = userService;
  }

  renderProfile = async (req, res, next) => {
    const render = new RenderOptions('Your Profile');

    render.user = await this.userService.getUserInfo(req.session.user._id);

    res.render('user-profile', render);
  };

  renderPanel = async (req, res, next) => {
    const render = new RenderOptions('Your Panel');

    render.user = await this.userService.getUserInfo(req.session.user._id);

    res.render('user-panel', render);
  };

  editProfile = async (req, res, next) => {
    if (req.validationError) {
      return res.status(400).send({
        error: req.validationError
      });
    }

    try {
      const user = await this.userService.editProfile(req.editUserProfileDTO);

      return res.status(200).send(user);
    } catch (e) {
      return res.status(500).send({ error: 'database error' });
    }
  };
}

module.exports = UserController;
