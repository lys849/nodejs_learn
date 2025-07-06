// import { Sequelize, DataTypes } from "sequelize";
// const databaseConfig = {
//   username: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   database: process.env.DB_NAME,
// };

// const sequelize = new Sequelize(
//   databaseConfig.database,
//   databaseConfig.username,
//   databaseConfig.password,
//   {
//     host: databaseConfig.host,
//     dialect: "postgres",
//     port: databaseConfig.port,
//   }
// );

// try {
//   await sequelize.authenticate();
//   console.log("Connection has been established successfully.");
// } catch (error) {
//   console.error("Unable to connect to the database:", error);
// }

// const Todos = sequelize.define(
//   "Todos",
//   {
//     // Model attributes are defined here
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       // allowNull defaults to true
//     },
//     tag: {
//       type: DataTypes.STRING,
//     },
//     content: {
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     // Other model options go here
//     tableName: "todos",
//     createdAt: false,
//     updatedAt: false,
//   }
// );
import Todos from "./model/todos.js";
const todos = await Todos.findAll();
console.log(todos);
