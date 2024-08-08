// import { Model } from 'sequelize';
// import { sequelize } from '../config/db';
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
	tableName: 'patients',
	timestamps: false,
})
export class Patient extends Model {
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
		type: DataType.SMALLINT,
		allowNull: false,
	})
	age!: number;

	@Column({
		type: DataType.TEXT,
		allowNull: false,
	})
	medical_history!: string;

	@HasMany(() => Prescription)
	prescriptions!: Prescription[];
}

// export class Patient extends Model {
// 	public id!: number;
// 	public name!: string;
// 	public age!: number;
// 	public medical_history!: string;
// }

// Patient.init(
// 	{
// 		id: {
// 			type: DataType.INTEGER,
// 			primaryKey: true,
// 			autoIncrement: true,
// 		},
// 		name: {
// 			type: DataType.STRING,
// 			allowNull: false,
// 		},
// 		age: {
// 			type: DataType.SMALLINT,
// 			allowNull: false,
// 		},
// 		medical_history: {
// 			type: DataType.TEXT,
// 			allowNull: false,
// 		},
// 	},
// 	{
// 		sequelize,
// 		modelName: 'Patient',
// 		tableName: 'patiens',
// 		timestamps: false,
// 	},
// );

//Relaciones sin decoradores

// userId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: User, // referencia al modelo User
//       key: 'id'    // la clave primaria del modelo User
//     }
