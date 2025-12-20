import express from 'express';
import { Signup,login } from '../Controllers/usercontrollers.js';
const router=express.Router();
router.post("/login",login);
router.post("/signup",Signup);
export default router;