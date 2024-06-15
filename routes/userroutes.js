import { Router } from "express";
// import { profile } from "../controller/usercontroller.mjs";
import { Profile } from "../controller/authcontroller.mjs";
import { authenticationJWT } from "../middleware/authMiddleware.js";

const router = Router();
router.post("/profile", authenticationJWT, Profile); // so the first the authentication will accur and the it will check wheather the user has correct token or not
export default router;
