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

  editProject = async (editProjectDTO, userId) => {
    const project = await Project.findOne({
      _id: editProjectDTO.id,
      owner: userId
    });

    if (!project) {
      throw new Error('Project not found');
    }

    Object.keys(editProjectDTO).forEach(key => {
      project[key] = editProjectDTO[key];
    });

    try {
      await project.save();
      return project;
    } catch (e) {
      throw new Error('database error');
    }
  };

  deleteProject = async (projectId, userId) => {
    try {
      const project = await Project.findOneAndDelete({
        _id: projectId,
        owner: userId
      });

      if (!project) {
        throw new Error('Project not found');
      }

      return project;
    } catch (e) {
      throw new Error('database error');
    }
  };
}

module.exports = ProjectService;
