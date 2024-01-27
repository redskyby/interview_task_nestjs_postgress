import { Module } from "@nestjs/common";
import { PostService } from "./post.service";
import { PostController } from "./post.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../users/users.model";
import { Post } from "./post.model";

@Module({
    controllers: [PostController],
    providers: [PostService],
    imports: [SequelizeModule.forFeature([User, Post])],
})
export class PostModule {}
