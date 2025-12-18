import { Router } from 'express';
import productRoutes from './productRoutes.js';
import userRoutes from './userRoutes.js';
import orderRoutes from './orderRoutes.js';

const router = Router();

router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);

export default router;
