import { Router } from 'express';
import postController from '../controllers/postController';
const router = Router();
router.get('/', postController.getAllPost);
router.post('/', postController.getPost);
export default router;
