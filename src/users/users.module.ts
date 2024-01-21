import { Module } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users.model";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../userRoles/user_roles.model";

@Module({
    controllers: [UsersController],
    providers: [UsersService],
    imports: [SequelizeModule.forFeature([User, Role, UserRoles])],
})
export class UsersModule {}
