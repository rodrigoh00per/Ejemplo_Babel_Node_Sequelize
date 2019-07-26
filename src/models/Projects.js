import Sequelize from "sequelize";

import { sequelize } from "../database/database";
import Tasks from "./Tasks";

const Projects = sequelize.define(
  "projects",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.TEXT
    },
    priority: {
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.TEXT
    },
    deliverydate: {
      type: Sequelize.DATE
    }
  },
  { timestamps: false }
);
//esta es para decirle la relacion entre las diferentes tablas
Projects.hasMany(Tasks, { foreignKey: "projectid", sourceKey: "id" });//tiene mmuchas tareas
Tasks.belongsTo(Projects, { foreignKey: "projectid", sourceKey: "id" });//

export default Projects;
