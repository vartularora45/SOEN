import { Router } from "express";
import { DeleteUser, login, signUp } from "../controller/user.cantroller.js";

const router = Router();


router.post("/signup", signUp);
router.post("/login", login); // Assuming you want to use the same handler for login for now
router.delete("/delete/:id", DeleteUser);



export default router;
