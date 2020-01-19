class SignupDTO {
  name;
  email;
  password;

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

module.exports = SignupDTO;
