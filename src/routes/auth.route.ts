// Importing packages
import { Router } from 'express';

// Importing controllers
import authController from '../controllers/auth.controller';

// Defining routers
const router = Router();

// Manual auth routes
router.post('/register', authController.handleRegister);
router.post('/login', authController.handleLogin);

export default router;
