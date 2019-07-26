import Projects from "../models/Projects";

export const getProjects = async (req, res) => {
  try {
    let projects = await Projects.findAll();

    return res.send({ data: projects });
  } catch (e) {
    return res
      .status(500)
      .send({ message: "hay un problema con la aplicación" });
  }
};

export const createProject = async (req, res) => {
  console.log(req.body);
  let { name, priority, description, deliverydate } = req.body;
  try {
    let newProject = await Projects.create(
      {
        name,
        priority,
        description,
        deliverydate
      },
      { fields: ["name", "priority", "description", "deliverydate"] }
    );

    if (newProject) {
      return res.send({
        message: "Project created succesful",
        data: newProject
      });
    }
  } catch (e) {
    return res
      .status(500)
      .send({ message: "hay un problema con la aplicación" });
  }
};

export const getOneProject = async (req, res) => {
  const { id } = req.params;

  const project = await Projects.findOne({ where: { id } });

  return res.send({ project });
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  const projectDeleted = await Projects.destroy({ where: { id } });

  return res.send({ projectDeleted });
};

export const updateProject = async (req, res) => {
  const { id } = req.params;
  let { name, priority, description, deliverydate } = req.body;
  const projects = await Projects.findAll({
    where: { id },
    attributes: ["id", "name", "priority", "description", "deliverydate"]
  });

  if (projects.length > 0) {
    projects.forEach(async project => {
      await project.update({ name, priority, description, deliverydate });
    });
  }

  return res.send({ message: "project updated succesfully", data: projects });
};
