import { Router } from "express";
import {
  registerWithGoogle,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// register user route
router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImg", maxCount: 1 },
  ]),
  registerUser,
);
router.route('/google-auth').post(registerWithGoogle)

// login user route
router.route("/login").post(loginUser);

// secured route
// logout user route
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

export default router;
