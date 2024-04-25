"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importing packages
const express_1 = require("express");
// Importing controllers
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
// Defining routers
const router = (0, express_1.Router)();
// Manual auth routes
router.post('/register', auth_controller_1.default.handleRegister);
router.post('/manual/login', auth_controller_1.default.handleLogin);
router.post('/google/login', auth_controller_1.default.handleGoogleSignIn);
exports.default = router;
