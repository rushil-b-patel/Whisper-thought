import express from 'express';
import { loginUser, registerUser,getUser } from '../controllers/userController.js';
import Auth from '../middleware/Auth.js';
const router = express.Router();

router.post("/login",loginUser);
router.post("/register",registerUser);
router.get("/getuser", Auth, getUser)

export default router;