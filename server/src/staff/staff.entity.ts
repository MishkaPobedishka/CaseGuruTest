import {
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table
export class Staff extends Model<Staff> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    unique: true,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
  })
  public id: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  first_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surname: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  birth_date: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  vacancy: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  salary: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  hire_date: Date;
}
