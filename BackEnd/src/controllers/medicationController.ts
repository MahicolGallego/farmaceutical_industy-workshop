import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { MedicationServices } from '../servicies/medicationServices';

export class MedicationController {
	static async createMedication(req: Request, res: Response) {
		try {
			const medicationServices = container.resolve(MedicationServices);
			const medication = await medicationServices.createMedication(req.body);
			res.status(201).json({
				status: 201,
				medication,
			});
		} catch (error: unknown) {
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
		}
	}

	static async updateStockMedication(req: Request, res: Response) {
		try {
			const medicationServices = container.resolve(MedicationServices);
			const [updatedRegisters] = await medicationServices.updateStockMedication(
				parseInt(req.params.id),
				req.body.stock,
			);
			res.status(214).json({
				status: 214,
				updated_registers: updatedRegisters,
			});
		} catch (error) {
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
		}
	}

	static async deleteExpiredMedications(_req: Request, res: Response) {
		try {
			const medicationServices = container.resolve(MedicationServices);
			const deletedRegisters =
				await medicationServices.deleteExpiratedMedications();
			res.status(200).json({
				status: 200,
				deleted_registers: deletedRegisters,
			});
		} catch (error) {
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
		}
	}

	static async getAllMedications(_req: Request, res: Response) {
		try {
			console.log('entre al controller');
			const medicationServices: MedicationServices =
				container.resolve(MedicationServices);
			const allMedications = await medicationServices.getAllMedications();
			res.status(200).json({
				status: 200,
				medications: allMedications,
			});
		} catch (error) {
			if (error instanceof Error)
				console.error(
					`There is an error into request: \nstatus 500`,
					error.message,
				);
			else {
				console.error(
					`There is an error into the request: \nstatus 500`,
					error,
				);
			}
		}
	}
}
