import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../utils/dbHelper.js";

const Todos = sequelize.define(
  "Todos",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
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
