import { Router } from 'express';
import periodController from '../controllers/period_controller.js';
const router = Router();

router.post('/period', periodController.createPeriod)
router.get('/period', periodController.getAllPeriods)
router.patch('/period', periodController.updatePeriod)
router.patch('/period/setSelected/:id', periodController.setSelectedPeriod)
router.delete('/period/:id', periodController.deletePeriod)

export default router