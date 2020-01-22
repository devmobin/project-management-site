class ProjectController {
  constructor(projectService) {
    this.projectService = projectService;
  }

  addProject = async (req, res, next) => {
    if (req.validationError) {
      return res.status(400).send({ error: req.validationError });
    }

    try {
      const project = await this.projectService.addProject(req.addProjectDTO);

      return res.status(201).send(project);
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  };
}

module.exports = ProjectController;
