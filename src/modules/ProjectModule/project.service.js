const Project = require('./db/project.schema');

class ProjectService {
  constructor() {}

  addProject = async addProjectDTO => {
    const project = new Project();

    Object.keys(addProjectDTO).forEach(key => {
      project[key] = addProjectDTO[key];
    });

    try {
      await project.save();
      return project;
    } catch (e) {
      throw new Error('database error');
    }
  };
}

module.exports = ProjectService;
