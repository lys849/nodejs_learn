import express, { json } from "express";
import {
  addTodo,
  getTodos,
  patchTodo,
  deleteTodo,
  getTodo,
} from "../controllers/todocontroller.js";

const router = express.Router();

// router.get("/todos/:todoId", getTodo);
// router.delete("/todos/:todoId", deleteTodo);
router.route("/todos/:todoId").get(getTodo).delete(deleteTodo);
// router.get("/todos", getTodos);
// router.post("/todos", addTodo);
// router.patch("/todos", patchTodo);
router.route("/todos").get(getTodo).post(addTodo).patch(patchTodo);

export default router;
