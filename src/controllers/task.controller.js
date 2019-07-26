import Tasks from "../models/Tasks";
import Projects from "../models/Projects";

export const getTasks = async (req, res) => {
  try {
    let tasks = await Tasks.findAll();

    return res.send({ data: tasks });
  } catch (e) {
    return res
      .status(500)
      .send({ message: "hay un problema con la aplicación" });
  }
};

export const createTask = async (req, res) => {
  let { name, done, projectid } = req.body;
  try {
    let newTask = await Tasks.create(
      {
        name,
        done,
        projectid
      },
      { fields: ["name", "done", "projectid"] }
    );

    if (newTask) {
      return res.send({
        message: "task created succesful",
        data: newTask
      });
    }
  } catch (e) {
    return res
      .status(500)
      .send({ message: "hay un problema con la aplicación" });
  }
};

export const getOneTask = async (req, res) => {
  const { id } = req.params;

  const task = await Tasks.findOne({ where: { id } });

  return res.send({ task });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  const taskDeleted = await Tasks.destroy({ where: { id } });

  return res.send({ taskDeleted });
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  let { name, done, projectid } = req.body;
  const tasks = await Tasks.findAll({
    where: { id },
    attributes: ["id", "name", "done", "projectid"]
  });

  if (tasks.length > 0) {
    tasks.forEach(async task => {
      await task.update({ name, done, projectid });
    });
  }

  return res.send({ message: "task updated succesfully", data: tasks });
};

export const getProjectTask = async (req, res) => {
  const { projectid } = req.params;

  try {
    let tasks = await Tasks.findAll({
      attributes: ["id", "projectid", "done", "name"],
      where: { projectid }
    });

    return res.send({ data: tasks });
  } catch (e) {
    return res
      .status(500)
      .send({ message: "hay un problema con la aplicación" });
  }
};
export const getProjectTask2 = async (req, res) => {
  const { projectid } = req.params;

  const respuestaFin = await Tasks.findAll({
    include: [{ model: Projects, required: true, attributes: ["description"] }],
    attributes: ["name"],
    where: { projectid }
  });
  
  return res.send(respuestaFin);
};
