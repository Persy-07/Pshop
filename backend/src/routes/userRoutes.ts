import { Router, Request, Response } from 'express';

const router = Router();

// GET all users
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all users' });
});

// GET single user
router.get('/:id', (req: Request, res: Response) => {
  res.json({ message: `Get user ${req.params.id}` });
});

// POST register user
router.post('/register', (req: Request, res: Response) => {
  res.json({ message: 'Register user', data: req.body });
});

// POST login user
router.post('/login', (req: Request, res: Response) => {
  res.json({ message: 'Login user', data: req.body });
});

export default router;
