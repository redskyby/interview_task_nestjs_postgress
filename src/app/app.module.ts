import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "../users/users.module";
import { ConfigModule } from "@nestjs/config";
import { User } from "../users/users.model";
import { RolesModule } from "../roles/roles.module";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../userRoles/user_roles.model";

@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
        }),

        SequelizeModule.forRoot({
            dialect: "postgres",
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            models: [User, Role, UserRoles],
            autoLoadModels: true,
        }),
        UsersModule,
        RolesModule,
    ],
})
export class AppModule {}
