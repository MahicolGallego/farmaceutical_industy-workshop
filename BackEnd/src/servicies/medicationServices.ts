import { inject, injectable } from 'tsyringe';
import { MedicationRepository } from '../repositories/medicationRepository';
import { Medication } from '../models/medicationModel';

@injectable()
export class MedicationServices {
	constructor(
		@inject(MedicationRepository)
		private medicationRepository: MedicationRepository,
	) {}

	async createMedication(medication: Partial<Medication>) {
		return await this.medicationRepository.create(medication);
	}
	async updateStockMedication(id: number, newStock: number) {
		return await this.medicationRepository.update(id, newStock);
	}

	async deleteExpiratedMedications() {
		return await this.medicationRepository.deletes();
	}

	async getAllMedications() {
		console.log('entre a servicios');
		return await this.medicationRepository.findAll();
	}
}
