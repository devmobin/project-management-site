class ProjectController {
  constructor(projectService) {
    this.projectService = projectService;
  }

  addProject = async (req, res, next) => {
    if (req.validationError) {
      return res.status(400).send({ error: req.validationError });
    }

    try {
      const project = await this.projectService.addProject(
        req.addProjectDTO,
        req.session.user._id
      );

      return res.status(201).send(project);
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  };

  editProject = async (req, res, next) => {
    if (req.validationError) {
      return res.status(400).send({ error: req.validationError });
    }

    try {
      const project = await this.projectService.editProject(
        req.editProjectDTO,
        req.session.user._id
      );

      return res.status(200).send(project);
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  };

  deleteProject = async (req, res, next) => {
    try {
      await this.projectService.deleteProject(
        req.params.id,
        req.session.user._id
      );
      return res.send();
    } catch (e) {
      return res.status(500).send({ error: e.message });
    }
  };
}

module.exports = ProjectController;
