import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { Medication } from '../models/medicationModel';
import { Patient } from '../models/patientModel';
import { Prescription } from '../models/prescriptionModel';
import { Application } from 'express';

dotenv.config();

export const sequelize: Sequelize = new Sequelize({
	dialect: 'mysql',
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	models: [Medication, Patient, Prescription],
});

export const startServer = async (
	app: Application,
	PORT: any,
): Promise<void> => {
	try {
		await sequelize.authenticate();
		console.log('Database connected!');
		await sequelize.sync();
		app.listen(PORT, () => {
			console.log('Server started on port 3000');
		});
	} catch (error: unknown) {
		console.error('Unable to connect to the database:', error);
	}
};
