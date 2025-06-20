import { readFile } from "node:fs/promises";
import { createServer } from "node:http";

const server = createServer(async (request, response) => {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    const htmlFile = await readFile("./index.html", "utf-8");
    response.end(htmlFile);
  }
  if (request.url === "/data") {
    const jsonFile = await readFile("./data.json", "utf-8");
    response.writeHead(200, { "content-type": "application/json" });
    response.end(jsonFile);
  }
});

server.listen(3000, "localhost", () => {
  console.log("Listening on 127.0.0.1:3000");
});
