import express from "express";
import { readFile } from "node:fs/promises";
import cors from "cors";

const app = express();
app.use(cors());
const port = 3000;

app.get("/todos", async (_req, res) => {
  const todosData = await readFile("./data.json", "utf-8");
  const todos = JSON.parse(todosData);
  return res.status(200).json(todos);
  // req未被使用，可在req前加上 _
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
