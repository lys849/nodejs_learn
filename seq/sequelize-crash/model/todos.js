import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../database/pg.js";

const Todos = sequelize.define(
  "Todos",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    tag: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
    tableName: "todos",
    createdAt: false,
    updatedAt: false,
  }
);

export default Todos;
