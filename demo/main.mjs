import { readFile as readFileSync } from "node:fs";
// import { readFile } from "node:fs/promises";
// readFile 有两个参数 path, options
// readFileSync 有三个参数 path, options, callback
readFileSync("./data.json", "utf8", (error, data) => {
  if (error) {
    console.log(error); //打印错误
  }
  console.log(data); //正常打印数据
});

// console.log(data);
