import { Router } from 'express';
import { MedicationController } from '../controllers/medicationController';

export const medicationRouter: Router = Router();

medicationRouter.get('/', MedicationController.getAllMedications);
medicationRouter.post('/', MedicationController.createMedication);
medicationRouter.delete(
	'/all-expired',
	MedicationController.deleteExpiredMedications,
);
medicationRouter.put('/:id/stock', MedicationController.updateStockMedication);
