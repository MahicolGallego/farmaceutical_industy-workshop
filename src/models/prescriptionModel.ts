import {
	AutoIncrement,
	Column,
	DataType,
	ForeignKey,
	Model,
	PrimaryKey,
	Table,
	BelongsTo,
} from 'sequelize-typescript';
import { Patient } from './patientModel';
import { Medication } from './medicationModel';

@Table({
	tableName: 'prescriptions',
	timestamps: true,
})
export class Prescription extends Model {
	@PrimaryKey
	@AutoIncrement
	@Column({
		type: DataType.INTEGER,
	})
	declare id: number;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	dosage!: string;

	@Column({
		type: DataType.STRING,
		allowNull: false,
	})
	frequency!: string;

	@Column({
		type: DataType.SMALLINT,
		allowNull: false,
	})
	duration!: number;

	@ForeignKey(() => Patient)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	patient_id!: number;

	@ForeignKey(() => Medication)
	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	medication_id!: number;

	@BelongsTo(() => Patient)
	patient!: Patient;

	@BelongsTo(() => Medication)
	medication!: Medication;
}
