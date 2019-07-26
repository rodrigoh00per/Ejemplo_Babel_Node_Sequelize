"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _Tasks = _interopRequireDefault(require("./Tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Projects = _database.sequelize.define("projects", {
  id: {
    type: _sequelize.default.INTEGER,
    primaryKey: true
  },
  name: {
    type: _sequelize.default.TEXT
  },
  priority: {
    type: _sequelize.default.INTEGER
  },
  description: {
    type: _sequelize.default.TEXT
  },
  deliverydate: {
    type: _sequelize.default.DATE
  }
}, {
  timestamps: false
}); //esta es para decirle la relacion entre las diferentes tablas


Projects.hasMany(_Tasks.default, {
  foreignKey: "projectid",
  sourceKey: "id"
}); //tiene mmuchas tareas

_Tasks.default.belongsTo(Projects, {
  foreignKey: "projectid",
  sourceKey: "id"
}); //


var _default = Projects;
exports.default = _default;