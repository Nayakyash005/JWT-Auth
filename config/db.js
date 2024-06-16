import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  connectionString:
    "postgres://postgres.krnfgpmvvrvdvecqonsw:Mydp%23nayak09@aws-0-ap-south-1.pooler.supabase.com:6543/postgres",
});

pool.on("connect", () => {
  console.log("Connected to the PostgreSQL server.");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

export default pool;
