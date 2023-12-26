import query from "../../database/connection.js";
import express  from "express";
import { UpdateUser, addUser, deleteUser, getAllUser, searchByAge, searchById } from "./user.controller.js";

const router = express.Router();
router.get("/getusers",getAllUser);
router.post("/adduser", addUser);
router.put("/updateUser", UpdateUser);
router.delete("/deleteUser/:id",deleteUser);
router.get("/searchByAgeChar",searchByAge);
router.get("/searchById/:id",searchById);


export default router