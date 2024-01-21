import { Column, Model, Table, DataType, BelongsToMany } from "sequelize-typescript";
import { User } from "../users/users.model";
import { UserRoles } from "../userRoles/user_roles.model";

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

    @BelongsToMany(() => User, () => UserRoles)
    users: User[];
}
