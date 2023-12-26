import query from "../../database/connection.js";

export const allProducts =  (req, res) => {
    query.execute("select * from product", (err, results) => {
      if (err) {
        console.log(err);
      } else {
        res.json("Products");
      }
    });
  }


  export const addProducts = (req, res) => {
    let { pname, pdesc, price, createdby } = req.body;
    query.execute(
      `SELECT * FROM product WHERE pname = '${pname}' OR createdby = ${createdby}`,
      (err, results) => {
        if (err) {
          console.error("Error checking product: ", err);
        } else {
          if (results.length > 0) {
            res.json("User with the same pName or createdBy already exists");
          } else {
            query.execute(
              `INSERT INTO product (pname, pdesc, price, createdby) VALUES ("${pname}", "${pdesc}", ${price}, ${createdby})`,
              (err, results) => {
                if (err) {
                  console.error("Error adding product: ", err);
                } else {
                  res.json("product added successfully");
                }
              }
            );
          }
        }
      }
    );
  }



  export const updateProducts = (req, res) => {
    const productId = req.params.productId;
    const userId = req.params.userId;
    let { pname, pdesc, price } = req.body;
    query.execute(
      `UPDATE product SET pName='${pname}', pDescription='${pdesc}', price=${price} WHERE id=${productId} AND createdBy=${userId}`,
      (err, results) => {
        if (err) {
          console.error("Error updating product: ", err);
        } else {
          if (results.affectedRows > 0) {
            res.json("Product updated successfully");
          } else {
            res.json(
              "Product not found or you do not have permission to update it"
            );
          }
        }
      }
    );
  }


  export const deleteProduct =(req, res) => {
    const productId = req.params.productId;
    const userId = req.params.userId;
    query.execute(
      `DELETE FROM product WHERE id=${productId} AND createdby=${userId}`,
      (err, results) => {
        if (err) {
          console.error("Error deleting product: ");
        } else {
          if (results.affectedRows > 0) {
            res.json("Product deleted successfully" );
          } else {
            res.json(
              "Product not found or you do not have permission to delete it"
            );
          }
        }
      }
    );
  }




  export const searchById = (req, res) => {
    const minPrice = 3000;
    query.execute(
      `SELECT * FROM product WHERE price > ${minPrice}`,
      (err, results) => {
        if (err) {
          console.log(err);
        } else {
          res.send(results);
        }
      }
    );
  }