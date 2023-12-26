import { createConnection } from "mysql2";

const query = createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "assig3",
});



export default query