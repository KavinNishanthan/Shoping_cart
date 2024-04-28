// Importing packages
import { Router } from 'express';

// Importing routes
import authRoute from './auth.route';
import orderRoute from './order.route';

// Defining router
const router = Router();

// Non authorization routes
router.use('/auth', authRoute);

// Authorization routes
router.use('/order', orderRoute);

export default router;
