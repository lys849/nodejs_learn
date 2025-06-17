/*
  1. Read files
  2. Decrypt data
  3. Write it into a new file
*/

import { readFile, appendFile, writeFile } from "node:fs/promises";

const data = await readFile("./data.txt", "utf8");
const key = await readFile("./keychain.txt", "utf8");

// const numbers_data = Array.from(data).map((char) => char.charCodeAt(0));
// for (let i = 0; i < data.length; i++) {
//   numbers_data[i] += Number(key);
// }
// const out = String.fromCharCode(...numbers_data);

// const numbers_data_n = Array.from(data).map((char) => char.charCodeAt(0));
// for (let i = 0; i < data.length; i++) {
//   numbers_data_n[i] -= Number(key);
// }
// const out_n = String.fromCharCode(...numbers_data_n);

const out_n = data.split("").map((currentchar) => {
  const out_code = currentchar.charCodeAt(0) - Number(key);
  return String.fromCharCode(out_code);
});
// await writeFile("./out.txt", out, "utf8");
await writeFile("./out.txt", out_n, "utf8");
