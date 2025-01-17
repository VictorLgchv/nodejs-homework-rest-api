const express = require("express");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { loginSchema, registerSchema, verifyEmailSchema} = require("../../utils/validation");

const ctrl = require("../../controllers/auth");

const router = express.Router();

router.post(
  "/users/register",
  validateBody(registerSchema),
  ctrl.register
);

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post(
  "/users/verify",
  validateBody(verifyEmailSchema),
  ctrl.resendVerificationEmail
);

router.post("/users/login", validateBody(loginSchema), ctrl.login);

router.post("/users/current", authenticate, ctrl.getCurrent);

router.post("/users/logout", authenticate, ctrl.logout);

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  ctrl.updateAvatar
);

module.exports = router;