class EditUserProfileDTO {
  constructor(email, name, job, bio) {
    this.email = email;
    this.name = name;
    this.job = job;
    this.bio = bio;
  }
}

module.exports = EditUserProfileDTO;
