const SignupDTO = require('../dto/signup.dto');
const LoginDTO = require('../dto/login.dto');

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
    }

    req.validationError = 'Enter valid email and password';
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
