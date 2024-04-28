// Importing packages
import { Router } from 'express';

// Importing controllers
import orderController from '../controllers/order.controller';

// Defining routers
const router = Router();

// Auth routes
router.post('/placeorder', orderController.handleOrder);
router.get('/userDetails/:userId', orderController.fetchUserDetails);

export default router;
