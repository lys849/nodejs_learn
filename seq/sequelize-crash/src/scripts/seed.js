import { readFile } from "node:fs/promises";
import sequelize from "../utils/dbHelper.js";
import Todos from "../models/todosModel.js";
try {
  const initializeTodosString = await readFile(
    "./src/scripts/data/initData.json",
    "utf-8"
  );
  const initializeTodos = JSON.parse(initializeTodosString);
  console.log(initializeTodosString);
  console.log(process.cwd());

  // Test connection
  await sequelize.authenticate();
  //sync database
  await Todos.sync({ force: true });
  // Insert data
  const todos = await Todos.bulkCreate(initializeTodos);
  console.log(JSON.stringify((todos, null, 2)));
} catch (error) {
  console.log(error.message);
} finally {
  sequelize.close();
}
