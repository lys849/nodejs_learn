import express from "express";
import { readFile } from "node:fs/promises";

const app = express();
const port = 3000;

app.get("/:idolName", async (req, res) => {
  //  /:idolName
  const idolName = req.params.idolName;

  const idolDataText = await readFile("data.json", "utf-8");
  const idolData = JSON.parse(idolDataText);

  const resultIdol = idolData.find(
    (idol) => idol.name.toLowerCase() === idolName.toLowerCase()
  );

  if (!resultIdol) {
    res.status(404).send("404 Not Found");
  }

  return res.status(200).json(resultIdol);
});

// app.listen(port, "0.0.0.0", () => {
//   //local ip address: 127.0.0.1
//   console.log(`Example app listening on http://127.0.0.1:${port}`);
// });

app.listen(port, () => {
  //local ip address: 127.0.0.1
  console.log(`Example app listening on http://127.0.0.1:${port}`);
});
