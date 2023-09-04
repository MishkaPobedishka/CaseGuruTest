import { Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
    @PrimaryKey
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    public id: any;

    @Column
    firstName: string;

    @Column
    lastName: string;

    @Column
    birthDate: Date;

    @Column
    vacancy: string;

    @Column
    salary: number;

    @Column
    hireDate: Date;

}
