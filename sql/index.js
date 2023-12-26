import express, { json } from "express";
import UserRouter from './model/user/user.routes.js'
import productsRoutes from "./model/post/post.routes.js"
const app = express();

import query from "./database/connection.js";

app.use(express.json());
app.use(UserRouter)
app.use(productsRoutes)


app.get("/getuserswithproducts", (req, res) => {
  const getUsersWithProductsQuery = `SELECT user.id, user.name, user.email, user.age, product.pName, product.pDescription, product.price
      FROM user LEFT JOIN product ON user.id = product.createdBy`;
  query.execute(getUsersWithProductsQuery, (err, results) => {
    if (err) {
      console.error("Error getting users with products: ", err);
    } else {
      res.json(results);
    }
  });
});
// ===============================================================================================================================================
// products
// ---------


app.listen(3000, function () {
  console.log("server is on ");
});
