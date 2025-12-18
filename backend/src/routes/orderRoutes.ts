import { Router, Request, Response } from 'express';

const router = Router();

// GET all orders
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all orders' });
});

// GET single order
router.get('/:id', (req: Request, res: Response) => {
  res.json({ message: `Get order ${req.params.id}` });
});

// POST create order
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Create order', data: req.body });
});

export default router;
