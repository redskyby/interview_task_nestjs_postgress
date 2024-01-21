import { Column, Model, Table, DataType } from "sequelize-typescript";

interface RoleCreationAttrs {
    value: string;
    description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RoleCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    value: string;
    @Column({ type: DataType.STRING, unique: false, allowNull: false })
    description: string;
}
