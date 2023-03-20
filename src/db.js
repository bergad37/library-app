import pgk from "pg";
const { Pool } = pgk;
const pool = new Pool({
    user: "andelarwanda",
    password: "andela123",
    host: "localhost",
    port: 5432,
    database: "library"
});
export default pool;