import 'reflect-metadata'; // Debe ser la primera importación
import { container } from 'tsyringe';
import { MedicationRepository } from '../repositories/medicationRepository';
import { MedicationServices } from '../servicies/medicationServices';

container.registerSingleton<MedicationRepository>(MedicationRepository);
container.registerSingleton<MedicationServices>(MedicationServices);
