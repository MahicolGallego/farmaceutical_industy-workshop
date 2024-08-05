import {
	AutoIncrement,
	Column,
	DataType,
	Model,
	PrimaryKey,
	Table,
	HasMany,
} from 'sequelize-typescript';
import { Prescription } from './prescriptionModel';

@Table({
	tableName: 'medications',
	timestamps: false,
})
export class Medication extends Model {
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
	name!: string;

	@Column({
		type: DataType.INTEGER,
		allowNull: false,
	})
	quantity!: number;

	@Column({
		type: DataType.DATE,
		allowNull: false,
	})
	expiration_date!: Date;

	@Column({
		type: DataType.FLOAT,
		allowNull: false,
	})
	price!: number;

	@HasMany(() => Prescription)
	prescriptions!: Prescription[];
}
