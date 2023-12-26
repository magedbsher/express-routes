import express from"express"
import query from "../../database/connection.js";
import { addProducts, allProducts, deleteProduct, searchById, updateProducts } from "./posts.controller.js";
const routes = express.Router()


routes.get("/getProducts",allProducts);
  routes.post("/addProduct", addProducts);
  routes.put("/updateProduct/:productId/:userId", updateProducts);


  routes.delete("/deleteProduct/:productId/:userId", deleteProduct);
  routes.get("/searchByPrice", searchById);


  export default routes 