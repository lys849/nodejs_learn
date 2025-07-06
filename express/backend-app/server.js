import express from "express";
import { readFile, writeFile, appendFile } from "node:fs/promises";
import cors from "cors";
import { todo } from "node:test";
import { json } from "node:stream/consumers";
import { parse } from "node:path";

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/todos", async (_req, res) => {
  const todosData = await readFile("./data.json", "utf-8");
  const todos = JSON.parse(todosData);
  return res.status(200).json(todos);
  // req未被使用，可在req前加上 _
  // console.log(todos);
});
// chek
app.get("/todos/:todoId", async (req, res) => {
  const todosData = await readFile("./data.json", "utf-8");
  const todos = JSON.parse(todosData);
  const todoId = req.params.todoId;
  const todo = todos.find((todo) => todo.id === Number(todoId));

  if (todo) {
    return res.status(200).json(todo);
  } else return res.status(404).send("404 Not Found");
});
//delete
app.get("/todos/delete/:todoId", async (req, res) => {
  const todosData = await readFile("./data.json", "utf-8");
  const todos = JSON.parse(todosData);
  const todoId = req.params.todoId;
  const fileteredToedos = todos.filter((todo) => todo.id !== Number(todoId));
  await writeFile("./data.json", JSON.stringify(fileteredToedos), "utf-8");

  return res.status(200).json({
    message: "Todo deleted successfully",
  });
});
//add
app.get("/todos/add/:addTodo", async (req, res) => {
  const todosData = await readFile("./data.json", "utf-8");
  const todos = JSON.parse(todosData);
  const addTodo = req.params.addTodo;
  // 还原
  const parsedAddTodo = JSON.parse(addTodo);
  const updateTodos = [...todos, parsedAddTodo];
  await writeFile("./data.json", JSON.stringify(updateTodos), "utf-8");
  return res.status(200).json({
    message: "Todo added successfully",
  });
});

app.get("/todos/update/:updateTodo", async (req, res) => {
  const todosData = await readFile("./data.json", "utf-8");
  const todos = JSON.parse(todosData);
  const updateTodo = req.params.updateTodo;
  const parsedUpdateTodo = json.parse(updateTodo);

  todos.map((todo) => {
    if (todo.id === parsedUpdateTodo.id) {
      return {
        ...todo,
        ...parsedUpdateTodo,
      };
    }
    return todo;
  });

  await writeFile("/.data.json", JSON.stringify(updateTodos), "utf-8");
  return res.status(200).json({
    message: "Todo updated successfully",
  });
});

app.post("/products", async (req, res) => {
  const productsData = await readFile("./data.json)", "utf-8");
  const products = JSON.parse(productsData);
  const addProduct = req.body;
  if (!addProduct) {
    return res.status(400).json({
      message: "Bad request",
    });
  }
  const updatedProducts = [...products, addProduct];
  await writeFile("./data.json", JSON.stringify(updatedProducts), "utf-8");
  return res.status(200).json({
    message: "Product added successfully",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
