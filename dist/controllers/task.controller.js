"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjectTask2 = exports.getProjectTask = exports.updateTask = exports.deleteTask = exports.getOneTask = exports.createTask = exports.getTasks = void 0;

var _Tasks = _interopRequireDefault(require("../models/Tasks"));

var _Projects = _interopRequireDefault(require("../models/Projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getTasks = async (req, res) => {
  try {
    let tasks = await _Tasks.default.findAll();
    return res.send({
      data: tasks
    });
  } catch (e) {
    return res.status(500).send({
      message: "hay un problema con la aplicación"
    });
  }
};

exports.getTasks = getTasks;

const createTask = async (req, res) => {
  let {
    name,
    done,
    projectid
  } = req.body;

  try {
    let newTask = await _Tasks.default.create({
      name,
      done,
      projectid
    }, {
      fields: ["name", "done", "projectid"]
    });

    if (newTask) {
      return res.send({
        message: "task created succesful",
        data: newTask
      });
    }
  } catch (e) {
    return res.status(500).send({
      message: "hay un problema con la aplicación"
    });
  }
};

exports.createTask = createTask;

const getOneTask = async (req, res) => {
  const {
    id
  } = req.params;
  const task = await _Tasks.default.findOne({
    where: {
      id
    }
  });
  return res.send({
    task
  });
};

exports.getOneTask = getOneTask;

const deleteTask = async (req, res) => {
  const {
    id
  } = req.params;
  const taskDeleted = await _Tasks.default.destroy({
    where: {
      id
    }
  });
  return res.send({
    taskDeleted
  });
};

exports.deleteTask = deleteTask;

const updateTask = async (req, res) => {
  const {
    id
  } = req.params;
  let {
    name,
    done,
    projectid
  } = req.body;
  const tasks = await _Tasks.default.findAll({
    where: {
      id
    },
    attributes: ["id", "name", "done", "projectid"]
  });

  if (tasks.length > 0) {
    tasks.forEach(async task => {
      await task.update({
        name,
        done,
        projectid
      });
    });
  }

  return res.send({
    message: "task updated succesfully",
    data: tasks
  });
};

exports.updateTask = updateTask;

const getProjectTask = async (req, res) => {
  const {
    projectid
  } = req.params;

  try {
    let tasks = await _Tasks.default.findAll({
      attributes: ["id", "projectid", "done", "name"],
      where: {
        projectid
      }
    });
    return res.send({
      data: tasks
    });
  } catch (e) {
    return res.status(500).send({
      message: "hay un problema con la aplicación"
    });
  }
};

exports.getProjectTask = getProjectTask;

const getProjectTask2 = async (req, res) => {
  const {
    projectid
  } = req.params;
  const respuestaFin = await _Tasks.default.findAll({
    include: [{
      model: _Projects.default,
      required: true,
      attributes: ["description"]
    }],
    attributes: ["name"],
    where: {
      projectid
    }
  });
  return res.send(respuestaFin);
};

exports.getProjectTask2 = getProjectTask2;