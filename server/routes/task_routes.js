import { Router } from 'express';
import taskController from '../controllers/task_controller.js'
const router = Router();

router.post('/task', taskController.createTask)
router.get('/task', taskController.getAllTasks)
router.get('/task', taskController.getTasksByCategory)
router.patch('/task', taskController.updateTask)
router.delete('/task/:id', taskController.deleteTask)
router.delete('/task/dltAllinCtg/:id', taskController.deleteAllTaskInCategory)

export default router