import { Router, Request, Response } from 'express';

const router = Router();

// GET all products
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all products' });
});

// GET single product
router.get('/:id', (req: Request, res: Response) => {
  res.json({ message: `Get product ${req.params.id}` });
});

// POST create product
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Create product', data: req.body });
});

// PUT update product
router.put('/:id', (req: Request, res: Response) => {
  res.json({ message: `Update product ${req.params.id}`, data: req.body });
});

// DELETE product
router.delete('/:id', (req: Request, res: Response) => {
  res.json({ message: `Delete product ${req.params.id}` });
});

export default router;
