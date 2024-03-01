import { Router } from "express";
import {
  registerWithGoogle,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  loginWithGoogle,
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
router.route("/google-auth-registration").post(registerWithGoogle);

// login user route
router.route("/login").post(loginUser);
router.route("/google-auth-login").post(loginWithGoogle);

// secured route
// logout user route
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

export default router;
