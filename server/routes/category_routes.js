import { Router } from 'express';
import categoryController from '../controllers/category_controller.js'
const router = Router();

router.post('/category', categoryController.createCategory)
router.get('/category', categoryController.getCategories)
router.get('/category/:id', categoryController.getOneCategory)
router.patch('/category', categoryController.updateCategory)
router.delete('/category/:id', categoryController.deleteCategory)

export default router