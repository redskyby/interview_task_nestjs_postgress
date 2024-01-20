import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { config } from "dotenv";
import { UsersModule } from '../users/users.module';


config();

@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forRoot({
            dialect: "postgres",
            host: "localhost",
            port: Number(process.env.PORT_DATABASE),
            username: 'postgres',
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            models: [],
            autoLoadModels: true
        }),
      UsersModule
    ],
})
export class AppModule {}
