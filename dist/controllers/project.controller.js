"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProject = exports.deleteProject = exports.getOneProject = exports.createProject = exports.getProjects = void 0;

var _Projects = _interopRequireDefault(require("../models/Projects"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getProjects = async (req, res) => {
  try {
    let projects = await _Projects.default.findAll();
    return res.send({
      data: projects
    });
  } catch (e) {
    return res.status(500).send({
      message: "hay un problema con la aplicación"
    });
  }
};

exports.getProjects = getProjects;

const createProject = async (req, res) => {
  console.log(req.body);
  let {
    name,
    priority,
    description,
    deliverydate
  } = req.body;

  try {
    let newProject = await _Projects.default.create({
      name,
      priority,
      description,
      deliverydate
    }, {
      fields: ["name", "priority", "description", "deliverydate"]
    });

    if (newProject) {
      return res.send({
        message: "Project created succesful",
        data: newProject
      });
    }
  } catch (e) {
    return res.status(500).send({
      message: "hay un problema con la aplicación"
    });
  }
};

exports.createProject = createProject;

const getOneProject = async (req, res) => {
  const {
    id
  } = req.params;
  const project = await _Projects.default.findOne({
    where: {
      id
    }
  });
  return res.send({
    project
  });
};

exports.getOneProject = getOneProject;

const deleteProject = async (req, res) => {
  const {
    id
  } = req.params;
  const projectDeleted = await _Projects.default.destroy({
    where: {
      id
    }
  });
  return res.send({
    projectDeleted
  });
};

exports.deleteProject = deleteProject;

const updateProject = async (req, res) => {
  const {
    id
  } = req.params;
  let {
    name,
    priority,
    description,
    deliverydate
  } = req.body;
  const projects = await _Projects.default.findAll({
    where: {
      id
    },
    attributes: ["id", "name", "priority", "description", "deliverydate"]
  });

  if (projects.length > 0) {
    projects.forEach(async project => {
      await project.update({
        name,
        priority,
        description,
        deliverydate
      });
    });
  }

  return res.send({
    message: "project updated succesfully",
    data: projects
  });
};

exports.updateProject = updateProject;