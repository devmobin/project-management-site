const SignupDTO = require('../dto/signup.dto');
const LoginDTO = require('../dto/login.dto');
const EditUserProfile = require('../../UserModule/dto/edit-user-profile.dto');
const AddProjectDTO = require('../../ProjectModule/dto/add-project.dto');

class Validator {
  constructor() {}

  signupRoute = (req, res, next) => {
    try {
      const { name, email, password } = req.body;

      if (
        validate(name.trim(), { type: 'string', minLength: 2 }) &&
        validate(email.trim(), { type: 'email' }) &&
        validate(password.trim(), { type: 'string', minLength: 6 })
      ) {
        req.signupDTO = new SignupDTO(
          name.trim(),
          email.trim(),
          password.trim()
        );

        return next();
      }
    } catch (e) {
      req.validationError = 'Validation Error';
      return next();
    }

    req.validationError =
      'Enter a name and your password most be more than 6 characters.';

    return next();
  };

  loginRoute = (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (
        validate(email.trim(), { type: 'email' }) &&
        validate(password.trim(), { type: 'string', minLength: 6 })
      ) {
        req.loginDTO = new LoginDTO(email.trim(), password.trim());

        return next();
      }
    } catch (e) {
      req.validationError = 'Validation Error';
      return next();
    }

    req.validationError = 'Enter valid email and password';
    return next();
  };

  editUserProfile = (req, res, next) => {
    try {
      const { email, name, job, bio } = req.body;

      if (
        validate(email.trim(), { type: 'email' }) &&
        validate(name.trim(), { type: 'string', minLength: 3 }) &&
        validate(job.trim(), { type: 'string', minLength: 3 }) &&
        validate(bio.trim(), { type: 'string', minLength: 9 })
      ) {
        req.editUserProfileDTO = new EditUserProfile(
          email.trim(),
          name.trim(),
          job.trim(),
          bio.trim()
        );

        return next();
      }
    } catch (e) {
      req.validationError = 'Validation Error';
      return next();
    }

    req.validationError = 'Enter valid values';
    return next();
  };

  addProject = (req, res, next) => {
    try {
      const { title, status, description } = req.body;

      if (
        validate(title.trim(), { type: 'string', minLength: 3 }) &&
        validate(description.trim(), { type: 'string', minLength: 10 }) &&
        (status.trim().toLowerCase() === 'active' ||
          status.trim().toLowerCase() === 'finished')
      ) {
        req.addProjectDTO = new AddProjectDTO(
          title.trim(),
          status.trim(),
          description.trim()
        );
        return next();
      }
    } catch (e) {
      req.validationError = 'Validation Error';
      return next();
    }

    req.validationError = 'Enter valid values';
    return next();
  };
}

module.exports = Validator;

const validate = (value, options) => {
  let isValid = true;

  if (options.type === 'number' && isNaN(parseInt(value))) {
    isValid = false;
  }

  if (options.type === 'string' && value.length < options.minLength) {
    isValid = false;
  }

  if (
    options.type === 'email' &&
    value.split('@').length !== 2 &&
    value.split('.').length !== 2
  ) {
    isValid = false;
  }

  return isValid;
};
