import { Client } from "pg";
const client = new Client({
  host: "aws-0-ap-southeast-1.pooler.supabase.com",
  port: 6543,
  database: "postgres",
  user: "postgres.ilhdskpiwvzvvmoqsrex",
  password: "*****",
});
await client.connect();

const res = await client.query("SELECT $1::text as message", ["Hello world!"]);
console.log(res.rows[0].message);
await client.end();
