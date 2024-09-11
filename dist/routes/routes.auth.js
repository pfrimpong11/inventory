"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_auth_1 = require("../controllers/controllers.auth");
const middleware_utils_1 = require("../utils/middleware.utils");
const router = (0, express_1.Router)();
router.post("/register", controllers_auth_1.register);
router.post("/login", controllers_auth_1.login);
router.post("/verify-account", controllers_auth_1.verifyAccount);
router.post("/re-send", middleware_utils_1.protectRoute, controllers_auth_1.resendVerificationCode);
router.get("/get-profile", middleware_utils_1.protectRoute, controllers_auth_1.getProfile);
router.post("/send-password-reset-email", controllers_auth_1.sendPasswordResetEmail);
router.get("/reset-password", middleware_utils_1.protectRoute, controllers_auth_1.resetPassword);
router.put("/update-profile", middleware_utils_1.protectRoute, controllers_auth_1.updateProfile);
exports.default = router;
