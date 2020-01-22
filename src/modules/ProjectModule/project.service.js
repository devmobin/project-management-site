const Project = require('./db/project.schema');

class ProjectService {
  constructor() {}

  addProject = async (addProjectDTO, userId) => {
    const project = new Project();

    Object.keys(addProjectDTO).forEach(key => {
      project[key] = addProjectDTO[key];
    });

    project.owner = userId;

    try {
      await project.save();
      return project;
    } catch (e) {
      throw new Error('database error');
    }
  };

  editProject = async (req, res, next) => {};
}

module.exports = ProjectService;
