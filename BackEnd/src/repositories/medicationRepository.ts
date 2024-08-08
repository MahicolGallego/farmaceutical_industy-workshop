import { injectable } from 'tsyringe';
import { Medication } from '../models/medicationModel';
import { Op, where } from 'sequelize';

@injectable()
export class MedicationRepository {
	async create(medication: Partial<Medication>) {
		return await Medication.create(medication);
	}

	async update(id: number, newStock: number) {
		return await Medication.update(
			{
				quantity: newStock,
			},
			{
				where: {
					id,
				},
			},
		);
	}

	async deletes() {
		const today: Date = new Date();
		return await Medication.destroy({
			where: {
				expiration_date: {
					[Op.lt]: today,
				},
			},
		});
	}

	async findAll() {
		console.log('entre a al repositorio');
		return await Medication.findAll();
	}
}
