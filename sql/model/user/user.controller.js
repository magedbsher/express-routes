import query from "../../database/connection.js";




export const getAllUser =  (req, res) => {
    query.execute("select * from users", (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ message: "user table", results });
      }
    });
  }


  export const addUser =  (req, res) => {
    const { name, email, age, password } = req.body;
  
    query.execute(
      `select * from users where name = '${name}' or email = '${email}'`,
      (err, results) => {
        if (err) {
          console.log("error", err);
        } else {
          if (results.length > 0) {
            res.json("already existed");
          } else {
            query.execute(
              `insert into users (name,email,password,age) values ("${name}","${email}", "${password}", ${age})`,
              (err, results) => {
                res.json("added");
              }
            );
          }
        }
      }
    );
  }

  export const UpdateUser = (req, res) => {
    let { id, name, password, age } = req.body;
    query.execute(
      `UPDATE user SET name='${name}', password='${password}', age= ${age} WHERE id = ${id}`,
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(" Updateded");
        }
      }
    );
  }



  export const deleteUser =  (req, res) => {
    const { id } = req.params;
    query.execute(`DELETE FROM user WHERE id = ${id}`, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(" deleted");
      }
    });
  }


  export const searchByAge =  (req, res) => {
    query.execute(
      `SELECT * FROM user WHERE name LIKE "a%" AND age < 30`,
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      }
    );
  }



  export const searchById =  (req, res) => {
    const { id } = req.params;
    query.execute(`SELECT * FROM user WHERE id IN(${id})`, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.send(results);
      }
    });
  }