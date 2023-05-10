import { Router } from 'express';
import todoController from '../controllers/todoController';

const router = Router();
router.post('/', todoController.createTodo);
router.get('/', todoController.getAllTodo);
export default router;
